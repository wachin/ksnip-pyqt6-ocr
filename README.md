# ksnip-pyqt6-ocr

Optional OCR plugin and managed PaddleOCR environment for
[ksnip-pyqt6](https://github.com/wachin/ksnip).

This repository is an **upstream/GitHub add-on**, not part of the core Debian
package. It is intended to keep the core application self-contained while
still offering a convenient way to install PaddleOCR for users who want it.

> **Project status:** initial skeleton / early development. The plugin entry
> point, API, managed-environment installer, and standalone OCR runner are
> present. Core-side plugin discovery and the optional packaging are still
> being implemented. No release artifact is available yet.

## Why this repository exists

The core `ksnip-pyqt6` package must remain usable on Debian without downloading
or installing Python code at runtime. Debian main requires its packages to be
self-contained, and the Debian Python Policy expects applications to use the
system Python and Debian-packaged modules.

PaddlePaddle and PaddleOCR are not currently packaged in Debian 13. Installing
them from PyPI inside the core application would bypass `apt`/`dpkg`, would not
be reproducible, and would not be acceptable for Debian main.

The plugin approach separates those concerns:

- **Core `ksnip-pyqt6`**: no Paddle, no `pip`, no managed virtual environment.
  It provides a generic external OCR **Script** backend.
- **Plugin `ksnip-pyqt6-ocr`**: optional. It provides the Model Manager,
  creates a private OCR environment, installs Paddle there, and configures the
  core's Script backend to use a launcher from that environment.

The architecture and the Debian policy rationale are documented in:

- [OCR plugin architecture](https://github.com/wachin/ksnip/blob/master/docs/OCR_PLUGIN_ARCHITECTURE.md)

Read that document before changing the plugin/core boundary.

## What the plugin will do

- Expose the optional Model Manager UI in ksnip-pyqt6.
- Create a private OCR environment under:

  ```text
  ${XDG_DATA_HOME:-$HOME/.local/share}/ksnip-pyqt6/ocr-venv/
  ```

- Install PaddlePaddle, PaddleOCR, PaddleX, and the pinned supporting
  dependencies into that environment after an explicit user action.
- Create a launcher such as:

  ```text
  $HOME/.local/share/ksnip-pyqt6/ocr-venv/bin/ksnip-ocr
  ```

- Configure the core application with:

  ```text
  ocr/backend     = script
  ocr/script_path = <managed launcher>
  ```

- Keep Paddle models in Paddle's normal cache:

  ```text
  ~/.paddlex/official_models/
  ```

  The launcher does not need a model path; PaddleOCR reads that cache
  automatically.

## What the plugin will not do

- It will not bundle PaddlePaddle or PaddleOCR wheels.
- It will not make the core package depend on Paddle.
- It will not run during core startup or import Paddle at startup.
- It will not be submitted as part of the Debian main package.
- It will not install anything without an explicit user action.

## Package and entry-point names

```text
GitHub repository:   ksnip-pyqt6-ocr
Python distribution: ksnip-pyqt6-ocr
Python import:       ksnip_py_ocr
Entry-point group:   ksnip_py.ocr
Plugin class:        ksnip_py_ocr.plugin:PaddleOcrPlugin
```

The core discovers the plugin through Python package metadata:

```toml
[project.entry-points."ksnip_py.ocr"]
paddle = "ksnip_py_ocr.plugin:PaddleOcrPlugin"
```

If the plugin is not installed, the core starts normally and keeps the generic
Script backend available.

## Repository layout

```text
ksnip-pyqt6-ocr/
  LICENSE
  README.md
  pyproject.toml
  ksnip_py_ocr/
    __init__.py
    plugin.py
    manager.py
    venv_manager.py
    runner.py
  tests/
```

Current responsibilities:

- `plugin.py`: entry-point class and the stable plugin API.
- `manager.py`: Model Manager dialog and user-facing installation flow.
- `venv_manager.py`: create, verify, and remove the managed environment.
- `runner.py`: small OCR entry point executed inside the managed environment.

## Plugin API

The initial API version is `1`:

```python
class PaddleOcrPlugin:
    api_version = 1
    plugin_id = "paddleocr"
    plugin_name = "PaddleOCR"

    def is_available(self) -> bool:
        ...

    def open_model_manager(self, parent, settings) -> bool:
        ...

    def configure_script(self, settings) -> bool:
        ...
```

The core must be able to:

- discover the plugin;
- catch plugin import failures without crashing;
- hide or disable the Model Manager when the plugin is absent;
- continue using the Script backend independently of the plugin.

## Storage locations shown in the Model Manager

The Model Manager shows each directory that the OCR stack creates or reuses,
its current size, an **Open** button, and a description of what it contains.
The button uses the system file manager through Qt's `QDesktopServices`.

| Location | Purpose | Safe to delete? |
| --- | --- | --- |
| `${XDG_DATA_HOME:-$HOME/.local/share}/ksnip-pyqt6/ocr-venv` | Private Python environment with pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher. | Use the Model Manager's **Remove environment** button. |
| `~/.paddlex/official_models` | Downloaded PaddleX model weights for text detection, recognition, and optional layout, table, and formula analysis. | Models are data. Deleting them only causes a later re-download. |
| `~/.paddleocr` | Legacy PaddleOCR cache used by some pipelines for models or temporary data. | It may be absent; remove it only when PaddleOCR is not running. |
| `${XDG_CACHE_HOME:-$HOME/.cache}/pip` | Downloaded Python wheels and source archives used by pip. | Safe to clear; it is not needed at runtime. |
| `.../ocr-venv/lib/pythonX.Y/site-packages` | Installed Python packages and their metadata inside the managed environment. | Do not delete individual files; use the Model Manager to remove the environment. |

Sizes are calculated in a background thread so opening the dialog does not
block the UI. A missing directory is shown as **Not present**.

## Requirements

The plugin is intended for the same Python environment as
`ksnip-pyqt6` (for entry-point discovery) and for a separate managed
environment (for Paddle itself).

Planned host requirements:

- Python 3.11 or newer;
- PyQt6;
- `python3-venv` and `python3-pip` on Linux;
- network access during the explicit Paddle installation;
- enough disk space for PaddlePaddle, PaddleOCR, PaddleX, and the models;
- a compatible CPU/runtime for the Paddle wheels.

Exact pinned versions will be published with the first implementation. They
must remain compatible with the tested PaddleOCR/PaddlePaddle versions used by
the core project's OCR documentation.

## Development installation

The plugin is not released yet. The source workflow is:

```bash
git clone https://github.com/wachin/ksnip-pyqt6-ocr.git
cd ksnip-pyqt6-ocr
python3 -m venv .venv
.venv/bin/python -m pip install --upgrade pip setuptools wheel
.venv/bin/python -m pip install -e .
```

Run the plugin tests with:

```bash
.venv/bin/python -m unittest discover -s tests -v
```

For entry-point discovery, the plugin must be installed in the same Python
environment as the core application, or in a separately packaged Python
environment visible to it.

The optional upstream `.deb` will be built separately from the core Debian
package and will depend on the matching `ksnip-pyqt6` version.

## Debian packaging

The core Debian package is the one intended for
[mentors.debian.net](https://mentors.debian.net/) and Debian main.

This plugin must not be added to the core Debian source package. In particular:

- do not add a Git submodule to the core source tree;
- do not make the Debian build fetch the plugin;
- do not make the Debian package create a virtual environment or run `pip`;
- do not make a Debian package depend on PyPI-installed Paddle code.

A Debian package that creates a venv and installs code from PyPI is not
acceptable, even in `contrib`. The core package should use only Debian
dependencies and the external Script backend.

The plugin can be distributed through GitHub Releases. A separate optional
package can be produced there, but it is not part of the Debian main upload.

## Relationship with the core

The core owns:

- plugin discovery;
- the generic Script backend;
- OCR settings (`ocr/backend`, `ocr/script_path`);
- the OCR action that honors the configured backend.

The plugin owns:

- Model Manager;
- managed environment creation;
- Paddle installation;
- launcher creation;
- Paddle-specific diagnostics.

The core must never import `paddle`, `paddleocr`, or `paddlex` just because the
plugin is installed. Imports belong inside the plugin's installer or runner.

## Development roadmap

- [ ] Define the stable plugin API and discovery module in the core.
- [x] Add the entry-point skeleton in this repository.
- [x] Add the managed-environment installer and standalone OCR runner.
- [ ] Move the Model Manager and Paddle-specific code out of the core.
- [ ] Keep only the Script backend in the core.
- [ ] Implement managed environment creation and verification.
- [ ] Implement the PaddleOCR launcher and runner.
- [ ] Configure the core Script settings only after a successful installation.
- [ ] Add failure-isolation tests for a missing/broken plugin.
- [ ] Build the optional upstream `.deb`.
- [ ] Publish the first GitHub release.

## Testing expectations

The implementation must be tested in these states:

1. Core without the plugin: starts normally, no Paddle imports, Script backend
   available.
2. Plugin installed but Paddle environment absent: Model Manager opens and
   offers installation without breaking the core.
3. Managed environment installed: OCR runs through the launcher and returns
   text to the core.
4. Broken plugin: core starts and logs the plugin failure.
5. Plugin removed: core still starts and preserves any existing Script
   configuration.

## License

The plugin is licensed under the GNU General Public License, version 3 only
(`GPL-3.0-only`), matching the core project. See [LICENSE](LICENSE).

## Related links

- Core project: <https://github.com/wachin/ksnip>
- Core OCR architecture:
  <https://github.com/wachin/ksnip/blob/master/docs/OCR_PLUGIN_ARCHITECTURE.md>
- Debian Policy, main archive:
  <https://www.debian.org/doc/debian-policy/ch-archive.html#the-main-archive-area>
- Debian Python Policy:
  <https://www.debian.org/doc/packaging-manuals/python-policy/>
- PEP 668:
  <https://peps.python.org/pep-0668/>
