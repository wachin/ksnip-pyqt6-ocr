# Model Manager translations

The plugin owns its Qt translation catalogs. They are independent from the
core `ksnip_py` catalogs so the optional plugin can be translated on its own.

Source language: English.

Current catalog: Spanish (`ksnip_py_ocr_es.ts` / `.qm`).

The other ksnip_py locales are intentionally left for later. Until a catalog is
added, Qt falls back to the English source strings.

## Adding a locale

1. Copy `ksnip_py_ocr_es.ts` to `ksnip_py_ocr_<locale>.ts`.
2. Set the `language` attribute to the locale name.
3. Translate every `<translation>` and remove `type="unfinished"`.
4. Compile it:

   ```bash
   lrelease ksnip_py_ocr_<locale>.ts -qm ksnip_py_ocr_<locale>.qm
   ```

5. Commit both the `.ts` source and the `.qm` runtime catalog.

`lrelease` is provided by the `qt6-l10n-tools` package on Debian.

## Updating source strings

Extract the current strings from the plugin:

```bash
pylupdate6 ksnip_py_ocr/*.py -ts ksnip_py_ocr/translations/ksnip_py_ocr_es.ts
```

Then review the new or changed messages and compile the catalog again.

## Runtime loading

`ModelManagerDialog` installs the matching `QTranslator` before creating its
widgets and removes it when the dialog closes. It uses the locale selected in
ksnip_py, so `es_EC` falls back to the Spanish catalog and unsupported locales
fall back to English.
