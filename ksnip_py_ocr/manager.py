"""Model Manager UI for the optional PaddleOCR plugin."""

from __future__ import annotations

import os
import sys
from dataclasses import dataclass
from pathlib import Path

from PyQt6.QtCore import QThread, Qt, QUrl, pyqtSignal
from PyQt6.QtGui import QDesktopServices
from PyQt6.QtWidgets import (
    QApplication,
    QDialog,
    QDialogButtonBox,
    QGroupBox,
    QHBoxLayout,
    QLabel,
    QMessageBox,
    QProgressBar,
    QPushButton,
    QScrollArea,
    QVBoxLayout,
    QWidget,
)

from .venv_manager import VenvError, VenvManager


class InstallWorker(QThread):
    """Run the potentially slow venv/pip installation off the UI thread."""

    progress = pyqtSignal(int)
    status = pyqtSignal(str)
    completed = pyqtSignal(bool, str)

    def __init__(self, manager: VenvManager, parent=None) -> None:
        super().__init__(parent)
        self._manager = manager

    def run(self) -> None:
        try:
            self._manager.install(
                progress=self.progress.emit,
                status=self.status.emit,
            )
        except (VenvError, OSError, RuntimeError) as exc:
            self.completed.emit(False, str(exc))
            return
        except Exception as exc:  # noqa: BLE001
            self.completed.emit(False, f"Unexpected OCR installation error: {exc}")
            return
        self.completed.emit(True, "")


@dataclass(frozen=True)
class StorageLocation:
    """A user-visible directory that the OCR plugin creates or reuses."""

    key: str
    title: str
    path: Path
    description: str


class SizeWorker(QThread):
    """Calculate directory sizes without blocking the dialog."""

    sizes = pyqtSignal(dict)

    def __init__(self, locations: list[StorageLocation], parent=None) -> None:
        super().__init__(parent)
        self._locations = locations

    def run(self) -> None:
        result: dict[str, int | None] = {}
        for location in self._locations:
            if self.isInterruptionRequested():
                return
            result[location.key] = self._directory_size(location.path)
        if not self.isInterruptionRequested():
            self.sizes.emit(result)

    def _directory_size(self, path: Path) -> int | None:
        if not path.exists():
            return None
        total = 0
        try:
            for root, _dirs, files in os.walk(path, followlinks=False):
                if self.isInterruptionRequested():
                    return None
                for name in files:
                    if self.isInterruptionRequested():
                        return None
                    try:
                        total += os.lstat(Path(root) / name).st_size
                    except OSError:
                        continue
        except OSError:
            return -1
        return total


_ACTIVE_SIZE_WORKERS: set[SizeWorker] = set()


def _finish_size_worker(worker: SizeWorker) -> None:
    if worker not in _ACTIVE_SIZE_WORKERS:
        return
    _ACTIVE_SIZE_WORKERS.discard(worker)
    worker.deleteLater()


def _stop_size_workers() -> None:
    for worker in list(_ACTIVE_SIZE_WORKERS):
        worker.requestInterruption()
        worker.wait(2000)
        _finish_size_worker(worker)


def _install_size_quit_hook() -> None:
    app = QApplication.instance()
    if app is None or getattr(app, "_ksnip_ocr_size_hook", False):
        return
    app.aboutToQuit.connect(_stop_size_workers)
    app._ksnip_ocr_size_hook = True


def _format_size(value: int | None) -> str:
    if value is None:
        return "Not present"
    if value < 0:
        return "Unavailable"
    size = float(value)
    for unit in ("B", "KiB", "MiB", "GiB", "TiB"):
        if size < 1024.0 or unit == "TiB":
            if unit == "B":
                return f"{int(size)} B"
            return f"{size:.1f} {unit}"
        size /= 1024.0
    return f"{size:.1f} TiB"


class ModelManagerDialog(QDialog):
    """Install, inspect, and remove the private PaddleOCR environment."""

    def __init__(self, manager: VenvManager, parent=None) -> None:
        super().__init__(parent)
        self._manager = manager
        self._worker: InstallWorker | None = None
        self._size_worker: SizeWorker | None = None
        self._size_labels: dict[str, QLabel] = {}

        self.setWindowTitle(self.tr("Model Manager - PaddleOCR"))
        self.setMinimumSize(780, 640)
        _install_size_quit_hook()

        layout = QVBoxLayout(self)
        layout.setContentsMargins(18, 18, 18, 18)
        layout.setSpacing(10)

        title = QLabel(self.tr("Optional PaddleOCR environment"), self)
        title.setStyleSheet("font-size: 16px; font-weight: bold;")
        layout.addWidget(title)

        description = QLabel(
            self.tr(
                "PaddleOCR runs in a private environment under your user data "
                "directory. It is independent from the Debian system Python. "
                "The first installation downloads PaddlePaddle, PaddleOCR, and "
                "their dependencies, so it needs network access and disk space."
            ),
            self,
        )
        description.setWordWrap(True)
        layout.addWidget(description)

        environment = QGroupBox(self.tr("Managed environment"), self)
        environment_layout = QVBoxLayout(environment)
        environment_path_row = QHBoxLayout()
        self.path_label = QLabel(str(self._manager.venv_dir), environment)
        self.path_label.setTextInteractionFlags(
            Qt.TextInteractionFlag.TextSelectableByMouse
        )
        self.path_label.setWordWrap(True)
        environment_path_row.addWidget(self.path_label, 1)
        self.environment_size_label = QLabel(self.tr("Calculating..."), environment)
        environment_path_row.addWidget(self.environment_size_label)
        environment_open = QPushButton(self.tr("Open"), environment)
        environment_open.clicked.connect(
            lambda: self._open_path(self._manager.venv_dir)
        )
        environment_path_row.addWidget(environment_open)
        environment_layout.addLayout(environment_path_row)
        environment_help = QLabel(
            self.tr(
                "This is the private Python environment. It contains the "
                "interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the "
                "OCR launcher."
            ),
            environment,
        )
        environment_help.setWordWrap(True)
        environment_layout.addWidget(environment_help)
        layout.addWidget(environment)

        self.status_label = QLabel(self)
        self.status_label.setWordWrap(True)
        layout.addWidget(self.status_label)

        self.progress = QProgressBar(self)
        self.progress.setRange(0, 100)
        self.progress.setValue(0)
        self.progress.setVisible(False)
        layout.addWidget(self.progress)

        storage_header = QHBoxLayout()
        storage_title = QLabel(self.tr("Storage locations and caches"), self)
        storage_title.setStyleSheet("font-weight: bold;")
        storage_header.addWidget(storage_title)
        storage_header.addStretch()
        self.refresh_sizes_button = QPushButton(self.tr("Refresh sizes"), self)
        self.refresh_sizes_button.clicked.connect(self._refresh_sizes)
        storage_header.addWidget(self.refresh_sizes_button)
        layout.addLayout(storage_header)

        self._locations = self._build_locations()
        scroll = QScrollArea(self)
        scroll.setWidgetResizable(True)
        scroll.setFrameShape(QScrollArea.Shape.NoFrame)
        container = QWidget(scroll)
        container_layout = QVBoxLayout(container)
        container_layout.setContentsMargins(0, 0, 0, 0)
        container_layout.setSpacing(8)
        for location in self._locations:
            container_layout.addWidget(self._make_location_card(location, container))
        container_layout.addStretch()
        scroll.setWidget(container)
        layout.addWidget(scroll, 1)

        buttons = QHBoxLayout()
        self.install_button = QPushButton(
            self.tr("Install / Repair OCR environment"), self
        )
        self.install_button.clicked.connect(self._install)
        buttons.addWidget(self.install_button)

        self.remove_button = QPushButton(self.tr("Remove environment"), self)
        self.remove_button.clicked.connect(self._remove)
        buttons.addWidget(self.remove_button)
        buttons.addStretch()
        layout.addLayout(buttons)

        self.button_box = QDialogButtonBox(
            QDialogButtonBox.StandardButton.Close, self
        )
        self.button_box.rejected.connect(self.reject)
        layout.addWidget(self.button_box)

        self._refresh()
        self._refresh_sizes()

    def _build_locations(self) -> list[StorageLocation]:
        venv = self._manager.venv_dir
        site_packages_candidates = sorted(venv.glob("lib/python*/site-packages"))
        if site_packages_candidates:
            site_packages = site_packages_candidates[-1]
        else:
            site_packages = (
                venv
                / "lib"
                / f"python{sys.version_info.major}.{sys.version_info.minor}"
                / "site-packages"
            )
        cache_home = Path(os.environ.get("XDG_CACHE_HOME", Path.home() / ".cache"))
        return [
            StorageLocation(
                key="models",
                title=self.tr("PaddleX model cache"),
                path=Path.home() / ".paddlex" / "official_models",
                description=self.tr(
                    "Model weights used by PaddleX for text detection, text "
                    "recognition, and optionally layout, table, and formula "
                    "analysis. They are downloaded on demand. Deleting them "
                    "only forces PaddleOCR to download them again."
                ),
            ),
            StorageLocation(
                key="paddleocr",
                title=self.tr("PaddleOCR cache"),
                path=Path.home() / ".paddleocr",
                description=self.tr(
                    "Legacy PaddleOCR cache used by some OCR pipelines for "
                    "downloaded models or temporary data. It may be absent on "
                    "new installations."
                ),
            ),
            StorageLocation(
                key="pip",
                title=self.tr("pip download cache"),
                path=cache_home / "pip",
                description=self.tr(
                    "Wheels and source archives downloaded by pip. This cache "
                    "is not needed at runtime and can be cleared safely; it "
                    "only makes a later reinstall faster."
                ),
            ),
            StorageLocation(
                key="site-packages",
                title=self.tr("Installed Python packages"),
                path=site_packages,
                description=self.tr(
                    "The Python packages and metadata installed inside the "
                    "managed OCR environment. Use this directory to inspect "
                    "the exact versions of PaddlePaddle, PaddleOCR, PaddleX, "
                    "Protobuf, and their dependencies. Removing files here by "
                    "hand breaks the OCR environment."
                ),
            ),
        ]

    def _make_location_card(self, location: StorageLocation, parent: QWidget) -> QGroupBox:
        card = QGroupBox(location.title, parent)
        card_layout = QVBoxLayout(card)
        card_layout.setSpacing(4)

        path_row = QHBoxLayout()
        path_label = QLabel(str(location.path), card)
        path_label.setTextInteractionFlags(
            Qt.TextInteractionFlag.TextSelectableByMouse
        )
        path_label.setWordWrap(True)
        path_row.addWidget(path_label, 1)
        size_label = QLabel(self.tr("Calculating..."), card)
        self._size_labels[location.key] = size_label
        path_row.addWidget(size_label)
        open_button = QPushButton(self.tr("Open"), card)
        open_button.clicked.connect(lambda: self._open_path(location.path))
        path_row.addWidget(open_button)
        card_layout.addLayout(path_row)

        description = QLabel(location.description, card)
        description.setWordWrap(True)
        card_layout.addWidget(description)
        return card

    def _refresh(self) -> None:
        ready = self._manager.is_ready()
        if ready:
            self.status_label.setText(
                self.tr(
                    "Ready. ksnip-pyqt6 can use this environment through the "
                    "Script backend."
                )
            )
        else:
            self.status_label.setText(
                self.tr("Not installed. Use 'Install / Repair OCR environment'.")
            )
        self.remove_button.setEnabled(ready and self._worker is None)
        self.install_button.setEnabled(self._worker is None)
        self.environment_size_label.setText(self.tr("Calculating..."))
        for label in self._size_labels.values():
            label.setText(self.tr("Calculating..."))

    def _refresh_sizes(self) -> None:
        worker = self._size_worker
        if worker is not None:
            try:
                if worker.isRunning():
                    worker.requestInterruption()
                    if not worker.wait(1000):
                        return
            except RuntimeError:
                self._size_worker = None
        self._size_worker = None
        self.environment_size_label.setText(self.tr("Calculating..."))
        for label in self._size_labels.values():
            label.setText(self.tr("Calculating..."))
        locations = [
            StorageLocation(
                key="environment",
                title=self.tr("Managed environment"),
                path=self._manager.venv_dir,
                description="",
            ),
            *self._locations,
        ]
        worker = SizeWorker(locations)
        self._size_worker = worker
        _ACTIVE_SIZE_WORKERS.add(worker)
        worker.sizes.connect(self._on_sizes)
        worker.finished.connect(lambda w=worker: self._size_finished(w))
        worker.start()

    def _size_finished(self, worker: SizeWorker) -> None:
        if self._size_worker is worker:
            self._size_worker = None
        _finish_size_worker(worker)

    def _on_sizes(self, sizes: dict[str, int | None]) -> None:
        self.environment_size_label.setText(
            _format_size(sizes.get("environment"))
        )
        for key, label in self._size_labels.items():
            label.setText(_format_size(sizes.get(key)))

    def _open_path(self, path: Path) -> None:
        if not path.exists():
            QMessageBox.information(
                self,
                self.tr("Open folder"),
                self.tr("This folder does not exist yet: %1").replace("%1", str(path)),
            )
            return
        if not QDesktopServices.openUrl(QUrl.fromLocalFile(str(path))):
            QMessageBox.warning(
                self,
                self.tr("Open folder"),
                self.tr("Could not open the folder with the system file manager."),
            )

    def _install(self) -> None:
        if self._worker is not None:
            return
        self.progress.setVisible(True)
        self.progress.setValue(0)
        self.install_button.setEnabled(False)
        self.remove_button.setEnabled(False)
        self.status_label.setText(self.tr("Preparing installation..."))

        self._worker = InstallWorker(self._manager, self)
        self._worker.progress.connect(self.progress.setValue)
        self._worker.status.connect(self.status_label.setText)
        self._worker.completed.connect(self._on_completed)
        self._worker.finished.connect(self._worker.deleteLater)
        self._worker.finished.connect(self._clear_worker)
        self._worker.start()

    def _clear_worker(self) -> None:
        self._worker = None
        self._refresh()

    def _on_completed(self, success: bool, error: str) -> None:
        self.progress.setVisible(False)
        if success:
            self.status_label.setText(
                self.tr("Installation complete. The Script backend has been configured.")
            )
            QMessageBox.information(
                self,
                self.tr("OCR environment ready"),
                self.tr(
                    "PaddleOCR was installed in the private environment.\n\n"
                    "The OCR Script backend now points to its launcher."
                ),
            )
        else:
            self.status_label.setText(self.tr("Installation failed."))
            QMessageBox.critical(
                self,
                self.tr("OCR installation failed"),
                error or self.tr("Unknown installation error."),
            )
        self._refresh()
        self._refresh_sizes()

    def _remove(self) -> None:
        if self._worker is not None or not self._manager.is_ready():
            return
        answer = QMessageBox.question(
            self,
            self.tr("Remove OCR environment"),
            self.tr(
                "Remove the private PaddleOCR environment?\n\n"
                "Downloaded PaddleX models are not deleted."
            ),
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No,
            QMessageBox.StandardButton.No,
        )
        if answer != QMessageBox.StandardButton.Yes:
            return
        try:
            self._manager.remove()
        except OSError as exc:
            QMessageBox.critical(
                self,
                self.tr("Remove environment"),
                str(exc),
            )
            return
        self._refresh()
        self._refresh_sizes()

    def closeEvent(self, event) -> None:  # noqa: N802
        if self._worker is not None and self._worker.isRunning():
            QMessageBox.information(
                self,
                self.tr("Installation in progress"),
                self.tr(
                    "Wait for the OCR installation to finish before closing "
                    "this window."
                ),
            )
            event.ignore()
            return
        worker = self._size_worker
        if worker is not None:
            try:
                worker.requestInterruption()
            except RuntimeError:
                self._size_worker = None
        event.accept()
