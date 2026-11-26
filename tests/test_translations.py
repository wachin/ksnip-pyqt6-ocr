from pathlib import Path
import unittest
import xml.etree.ElementTree as ET

from PyQt6.QtCore import QCoreApplication, QLocale, QTranslator


TRANSLATIONS = Path(__file__).parents[1] / "ksnip_py_ocr" / "translations"
LOCALES = [
    "ar", "bg", "bn_BD", "ca", "ckb", "cs", "da", "de", "el", "es",
    "et", "eu", "fa", "fi", "fr_CA", "fr", "gl", "he", "hr", "hu",
    "id", "it", "ja", "ka", "ko", "nl", "no", "pl", "pt_BR", "pt",
    "ro", "ru", "si", "sl", "sq", "sv", "ta", "tr", "uk", "zh_CN",
    "zh_Hant",
]


class SpanishTranslationTest(unittest.TestCase):
    def test_every_catalog_is_complete(self) -> None:
        self.assertEqual(len(LOCALES), 41)
        for locale in LOCALES:
            with self.subTest(locale=locale):
                root = ET.parse(
                    TRANSLATIONS / f"ksnip_py_ocr_{locale}.ts"
                ).getroot()
                self.assertEqual(root.get("language"), locale)
                messages = list(root.iter("message"))
                self.assertEqual(len(messages), 38)
                for message in messages:
                    translation = message.find("translation")
                    self.assertIsNotNone(translation)
                    self.assertNotEqual(translation.get("type"), "unfinished")
                    self.assertTrue((translation.text or "").strip())
                    source = message.findtext("source") or ""
                    if "%1" in source:
                        self.assertIn("%1", translation.text or "")
                self.assertGreater(
                    (TRANSLATIONS / f"ksnip_py_ocr_{locale}.qm").stat().st_size,
                    0,
                )

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

    def test_every_catalog_loads_in_qt(self) -> None:
        app = QCoreApplication.instance() or QCoreApplication([])
        for locale in LOCALES:
            with self.subTest(locale=locale):
                translator = QTranslator()
                if locale == "no":
                    self.assertTrue(
                        translator.load(
                            str(TRANSLATIONS / "ksnip_py_ocr_no.qm")
                        )
                    )
                else:
                    self.assertTrue(
                        translator.load(
                            QLocale(locale),
                            "ksnip_py_ocr",
                            "_",
                            str(TRANSLATIONS),
                        )
                    )
                self.assertTrue(
                    translator.translate("ModelManagerDialog", "Open", "", -1)
                )
                self.assertNotEqual(
                    translator.translate(
                        "ModelManagerDialog", "Not present", "", -1
                    ),
                    "",
                )

    def test_compiled_catalog_exists(self) -> None:
        self.assertGreater((TRANSLATIONS / "ksnip_py_ocr_es.qm").stat().st_size, 0)


if __name__ == "__main__":
    unittest.main()
