"""Entry point exposed to ksnip-pyqt6 through ``ksnip_py.ocr``.

The module deliberately keeps the discovery path lightweight: it does not
import PyQt6, PaddlePaddle, PaddleOCR, or PaddleX until the user opens the Model
Manager or starts an OCR operation.
"""

from __future__ import annotations

from pathlib import Path

from .venv_manager import VenvManager


class PaddleOcrPlugin:
    """Optional PaddleOCR backend and managed-environment manager."""

    api_version = 1
    plugin_id = "paddleocr"
    plugin_name = "PaddleOCR"

    def __init__(self, venv_dir: str | Path | None = None) -> None:
        self.venv_manager = VenvManager(venv_dir)

    def is_available(self) -> bool:
        """Return True when the private OCR environment is ready."""

        return self.venv_manager.is_ready()

    def status_text(self) -> str:
        if self.is_available():
            return "The managed PaddleOCR environment is ready."
        return "The managed PaddleOCR environment has not been installed yet."

    def open_model_manager(self, parent=None, settings=None) -> bool:
        """Open the plugin Model Manager and configure Script on success."""

        from PyQt6.QtWidgets import QDialog

        from .manager import ModelManagerDialog

        dialog = ModelManagerDialog(self.venv_manager, parent)
        dialog.exec()
        if self.is_available():
            self.configure_script(settings)
            return True
        return False

    def configure_script(self, settings=None) -> bool:
        """Point the core Script backend at the managed OCR launcher."""

        if not self.is_available():
            return False

        if settings is None:
            from PyQt6.QtCore import QSettings

            settings = QSettings()

        try:
            self.venv_manager.refresh_launcher()
        except Exception as exc:  # noqa: BLE001
            raise RuntimeError(f"Could not refresh the OCR launcher: {exc}") from exc

        settings.setValue("ocr/backend", "script")
        settings.setValue("ocr/script_path", str(self.venv_manager.launcher))
        settings.setValue(
            "ocr/structure_script_path", str(self.venv_manager.launcher)
        )
        settings.sync()
        return True
