from pathlib import Path
import tempfile
import unittest

from ksnip_py_ocr.plugin import PaddleOcrPlugin
from ksnip_py_ocr.venv_manager import VenvManager


class PluginApiTest(unittest.TestCase):
    def test_api_identity(self) -> None:
        plugin = PaddleOcrPlugin()
        self.assertEqual(plugin.api_version, 1)
        self.assertEqual(plugin.plugin_id, "paddleocr")
        self.assertEqual(plugin.plugin_name, "PaddleOCR")

    def test_missing_environment_is_not_available(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            plugin = PaddleOcrPlugin(Path(directory) / "ocr-venv")
            self.assertFalse(plugin.is_available())
            self.assertIn("not been installed", plugin.status_text())

    def test_venv_manager_uses_the_requested_directory(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            manager = VenvManager(Path(directory) / "ocr-venv")
            self.assertEqual(manager.venv_dir, Path(directory) / "ocr-venv")
            self.assertFalse(manager.is_ready())


if __name__ == "__main__":
    unittest.main()
