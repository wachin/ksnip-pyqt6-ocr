"""Standalone PaddleOCR runner used inside the managed OCR environment.

The plugin copies this file into the managed environment so the runner does not
depend on the core application's Python environment.  It reads one image path,
prints the recognised text to stdout, and reports errors on stderr.
"""

from __future__ import annotations

import os
import sys


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


def main() -> int:
    if len(sys.argv) < 2:
        print("usage: ksnip-ocr-runner IMAGE", file=sys.stderr)
        return 2

    language = os.environ.get("KSNIP_OCR_LANG", "en").strip().lower()
    if language not in ("en", "es", "english", "spanish"):
        language = "en"
    if language == "english":
        language = "en"
    elif language == "spanish":
        language = "es"

    try:
        from paddleocr import PaddleOCR

        ocr = PaddleOCR(
            lang=language,
            enable_mkldnn=False,
            use_doc_orientation_classify=False,
            use_doc_unwarping=False,
            use_textline_orientation=False,
        )
        result = ocr.predict(sys.argv[1])
        lines = _extract_text(result)
    except Exception as exc:  # noqa: BLE001
        print(f"PaddleOCR failed: {exc}", file=sys.stderr)
        return 1

    text = "\n".join(lines).strip()
    if not text:
        print("PaddleOCR finished but returned no recognized text.", file=sys.stderr)
        return 1

    print(text)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
