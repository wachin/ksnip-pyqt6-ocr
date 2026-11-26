"""Model Manager UI for the optional PaddleOCR plugin."""

from __future__ import annotations

from PyQt6.QtCore import QThread, Qt, pyqtSignal
from PyQt6.QtWidgets import (
    QDialog,
    QDialogButtonBox,
    QHBoxLayout,
    QLabel,
    QMessageBox,
    QProgressBar,
    QPushButton,
    QVBoxLayout,
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


class ModelManagerDialog(QDialog):
    """Install, inspect, and remove the private PaddleOCR environment."""

    def __init__(self, manager: VenvManager, parent=None) -> None:
        super().__init__(parent)
        self._manager = manager
        self._worker: InstallWorker | None = None

        self.setWindowTitle(self.tr("Model Manager - PaddleOCR"))
        self.setMinimumWidth(620)

        layout = QVBoxLayout(self)
        layout.setContentsMargins(18, 18, 18, 18)
        layout.setSpacing(12)

        title = QLabel(self.tr("Optional PaddleOCR environment"), self)
        title.setStyleSheet("font-size: 16px; font-weight: bold;")
        layout.addWidget(title)

        self.description = QLabel(
            self.tr(
                "PaddleOCR runs in a private environment under your user data "
                "directory. It is independent from the Debian system Python. "
                "The first installation downloads PaddlePaddle, PaddleOCR, and "
                "their dependencies, so it needs network access and disk space."
            ),
            self,
        )
        self.description.setWordWrap(True)
        layout.addWidget(self.description)

        self.path_label = QLabel(self)
        self.path_label.setTextInteractionFlags(
            Qt.TextInteractionFlag.TextSelectableByMouse
        )
        self.path_label.setWordWrap(True)
        layout.addWidget(self.path_label)

        self.status_label = QLabel(self)
        self.status_label.setWordWrap(True)
        layout.addWidget(self.status_label)

        self.progress = QProgressBar(self)
        self.progress.setRange(0, 100)
        self.progress.setValue(0)
        self.progress.setVisible(False)
        layout.addWidget(self.progress)

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

    def _refresh(self) -> None:
        self.path_label.setText(
            self.tr("Environment: %1").replace("%1", str(self._manager.venv_dir))
        )
        ready = self._manager.is_ready()
        if ready:
            self.status_label.setText(
                self.tr("Ready. ksnip-pyqt6 can use this environment through the Script backend.")
            )
        else:
            self.status_label.setText(
                self.tr("Not installed. Use 'Install / Repair OCR environment'.")
            )
        self.remove_button.setEnabled(ready and self._worker is None)
        self.install_button.setEnabled(self._worker is None)

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

    def closeEvent(self, event) -> None:  # noqa: N802
        if self._worker is not None and self._worker.isRunning():
            QMessageBox.information(
                self,
                self.tr("Installation in progress"),
                self.tr("Wait for the OCR installation to finish before closing this window."),
            )
            event.ignore()
            return
        event.accept()
