from pathlib import Path
import unittest
import xml.etree.ElementTree as ET

from PyQt6.QtCore import QCoreApplication, QLocale, QTranslator


TRANSLATIONS = Path(__file__).parents[1] / "ksnip_py_ocr" / "translations"


class SpanishTranslationTest(unittest.TestCase):
    def test_spanish_catalog_is_complete(self) -> None:
        root = ET.parse(TRANSLATIONS / "ksnip_py_ocr_es.ts").getroot()
        self.assertEqual(root.get("language"), "es")
        messages = list(root.iter("message"))
        self.assertEqual(len(messages), 38)
        for message in messages:
            translation = message.find("translation")
            self.assertIsNotNone(translation)
            self.assertNotEqual(translation.get("type"), "unfinished")
            self.assertTrue((translation.text or "").strip())

    def test_spanish_catalog_loads_with_regional_locale(self) -> None:
        app = QCoreApplication.instance() or QCoreApplication([])
        translator = QTranslator()
        loaded = translator.load(
            QLocale("es_EC"), "ksnip_py_ocr", "_", str(TRANSLATIONS)
        )
        self.assertTrue(loaded)
        self.assertEqual(
            translator.translate("ModelManagerDialog", "Open", "", -1),
            "Abrir",
        )
        self.assertEqual(
            translator.translate("ModelManagerDialog", "Calculating...", "", -1),
            "Calculando...",
        )

    def test_compiled_catalog_exists(self) -> None:
        self.assertGreater((TRANSLATIONS / "ksnip_py_ocr_es.qm").stat().st_size, 0)


if __name__ == "__main__":
    unittest.main()
