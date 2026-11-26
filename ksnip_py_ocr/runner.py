"""Standalone PaddleOCR runner used inside the managed OCR environment.

The plugin copies this file into the managed environment so the runner does not
depend on the core application's Python environment.  It reads one image path,
prints the recognised content to stdout, and reports errors on stderr.

The core sets KSNIP_OCR_MODE to ``markdown`` or ``html`` for the PP-StructureV3
layout/table backends.  Without that variable it runs the line-oriented
PaddleOCR pipeline.  KSNIP_OCR_LANG and KSNIP_OCR_FORMULAS carry the core's
language and formula options.
"""

from __future__ import annotations

import os
import sys


def _normalise_language(value: str) -> str:
    value = (value or "en").strip().lower()
    if value in ("english", "en"):
        return "en"
    if value in ("spanish", "es"):
        return "es"
    return "en"


def _extract_text(result: object) -> list[str]:
    lines: list[str] = []
    for item in result or []:  # type: ignore[union-attr]
        rec_texts = getattr(item, "rec_texts", None)
        if rec_texts:
            lines.extend(str(text).strip() for text in rec_texts if str(text).strip())
            continue

        if isinstance(item, dict):
            texts = item.get("rec_texts")
            if texts:
                lines.extend(str(text).strip() for text in texts if str(text).strip())
                continue

        if isinstance(item, (list, tuple)):
            for sub_item in item:
                if isinstance(sub_item, (list, tuple)) and len(sub_item) >= 2:
                    text_info = sub_item[1]
                    if isinstance(text_info, (list, tuple)) and text_info:
                        text = str(text_info[0]).strip()
                        if text:
                            lines.append(text)
    return lines


def _extract_markdown(result: object) -> str:
    pages: list[str] = []
    for item in result or []:  # type: ignore[union-attr]
        markdown = getattr(item, "markdown", None)
        if not isinstance(markdown, dict):
            continue
        text = markdown.get("markdown_texts")
        if isinstance(text, str) and text.strip():
            pages.append(text.strip())
    return "\n\n".join(pages).strip()


def _extract_html(result: object) -> str:
    pages: list[str] = []
    for item in result or []:  # type: ignore[union-attr]
        html = getattr(item, "html", None)
        if not isinstance(html, dict):
            continue
        for table_html in html.values():
            if isinstance(table_html, str) and table_html.strip():
                pages.append(table_html.strip())
    return "\n\n".join(pages).strip()


def _run_text(image_path: str, language: str) -> int:
    from paddleocr import PaddleOCR

    ocr = PaddleOCR(
        lang=language,
        enable_mkldnn=False,
        use_doc_orientation_classify=False,
        use_doc_unwarping=False,
        use_textline_orientation=False,
    )
    lines = _extract_text(ocr.predict(image_path))
    text = "\n".join(lines).strip()
    if not text:
        print("PaddleOCR finished but returned no recognized text.", file=sys.stderr)
        return 1
    print(text)
    return 0


def _run_structure(image_path: str, language: str, mode: str, formulas: bool) -> int:
    from paddleocr import PPStructureV3

    pipeline = PPStructureV3(
        lang=language,
        enable_mkldnn=False,
        use_doc_orientation_classify=False,
        use_doc_unwarping=False,
        use_textline_orientation=False,
        use_table_recognition=True,
        use_formula_recognition=formulas,
        layout_detection_model_name="PP-DocLayout_plus-L",
        text_detection_model_name="PP-OCRv5_mobile_det",
        text_recognition_model_name="PP-OCRv5_mobile_rec",
        wired_table_structure_recognition_model_name="SLANeXt_wired",
        wireless_table_structure_recognition_model_name="SLANet_plus",
        wired_table_cells_detection_model_name="RT-DETR-L_wired_table_cell_det",
        wireless_table_cells_detection_model_name="RT-DETR-L_wireless_table_cell_det",
    )
    result = pipeline.predict(image_path)
    text = _extract_html(result) if mode == "html" else _extract_markdown(result)
    if not text:
        print(
            "PaddleOCR layout parsing finished but returned no recognized content.",
            file=sys.stderr,
        )
        return 1
    print(text)
    return 0


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: ksnip-ocr-runner IMAGE", file=sys.stderr)
        return 2

    image_path = sys.argv[1]
    language = _normalise_language(os.environ.get("KSNIP_OCR_LANG", "en"))
    mode = os.environ.get("KSNIP_OCR_MODE", "text").strip().lower()
    formulas = os.environ.get("KSNIP_OCR_FORMULAS", "0").strip() == "1"

    try:
        if mode in ("markdown", "html"):
            return _run_structure(image_path, language, mode, formulas)
        return _run_text(image_path, language)
    except Exception as exc:  # noqa: BLE001
        print(f"PaddleOCR failed: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
