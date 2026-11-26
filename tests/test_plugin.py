from pathlib import Path
import tempfile
import unittest

from ksnip_py_ocr.plugin import PaddleOcrPlugin
from ksnip_py_ocr.manager import _format_size
from ksnip_py_ocr.venv_manager import VenvManager


class _Settings:
    def __init__(self) -> None:
        self.values = {}
        self.synced = False

    def setValue(self, key, value) -> None:
        self.values[key] = value

    def sync(self) -> None:
        self.synced = True


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

    def test_configure_script_sets_text_and_structure_launchers(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            venv = Path(directory) / "ocr-venv"
            bin_dir = venv / "bin"
            bin_dir.mkdir(parents=True)
            (bin_dir / "python").touch()
            runner_source = Path(__file__).parents[1] / "ksnip_py_ocr" / "runner.py"
            (venv / "ksnip_ocr_runner.py").write_text(
                runner_source.read_text(encoding="utf-8"), encoding="utf-8"
            )
            (bin_dir / "ksnip-ocr").touch()
            plugin = PaddleOcrPlugin(venv)
            settings = _Settings()
            self.assertTrue(plugin.configure_script(settings))
            self.assertEqual(settings.values["ocr/backend"], "script")
            self.assertEqual(settings.values["ocr/script_path"], str(bin_dir / "ksnip-ocr"))
            self.assertEqual(
                settings.values["ocr/structure_script_path"],
                str(bin_dir / "ksnip-ocr"),
            )
            self.assertTrue(bin_dir.joinpath("ksnip-ocr").exists())

    def test_size_formatting(self) -> None:
        self.assertEqual(_format_size(None), "Not present")
        self.assertEqual(_format_size(0), "0 B")
        self.assertEqual(_format_size(1024), "1.0 KiB")
        self.assertEqual(_format_size(1024 * 1024), "1.0 MiB")

    def test_venv_manager_uses_the_requested_directory(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            manager = VenvManager(Path(directory) / "ocr-venv")
            self.assertEqual(manager.venv_dir, Path(directory) / "ocr-venv")
            self.assertFalse(manager.is_ready())


if __name__ == "__main__":
    unittest.main()
