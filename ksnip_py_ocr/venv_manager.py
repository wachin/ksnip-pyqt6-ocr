"""Create and manage the private PaddleOCR virtual environment.

This module is intentionally free of Qt and Paddle imports.  The plugin's UI
loads it only when the user opens the Model Manager.
"""

from __future__ import annotations

import os
import shlex
import shutil
import subprocess
import sys
from collections import deque
from collections.abc import Callable
from pathlib import Path

ProgressCallback = Callable[[int], None]
StatusCallback = Callable[[str], None]

PADDLE_PACKAGES = (
    "paddlepaddle==3.3.1",
    "paddleocr==3.7.0",
    "protobuf==3.20.2",
    "paddlex[ocr]==3.7.2",
    "markdownify",
)


class VenvError(RuntimeError):
    """Raised when the managed OCR environment cannot be prepared."""


class VenvManager:
    """Own the private OCR environment and its launcher."""

    def __init__(self, venv_dir: str | Path | None = None) -> None:
        if venv_dir is None:
            data_home = os.environ.get("XDG_DATA_HOME")
            base = Path(data_home) if data_home else Path.home() / ".local" / "share"
            venv_dir = base / "ksnip-pyqt6" / "ocr-venv"

        self.venv_dir = Path(venv_dir).expanduser()
        if os.name == "nt":
            self.bin_dir = self.venv_dir / "Scripts"
            self.python = self.bin_dir / "python.exe"
            self.launcher = self.bin_dir / "ksnip-ocr.cmd"
        else:
            self.bin_dir = self.venv_dir / "bin"
            self.python = self.bin_dir / "python"
            self.launcher = self.bin_dir / "ksnip-ocr"
        self.runner = self.venv_dir / "ksnip_ocr_runner.py"

    def is_ready(self) -> bool:
        """Return True when the environment and launcher already exist."""

        return self.python.is_file() and self.runner.is_file() and self.launcher.is_file()

    def refresh_launcher(self) -> None:
        """Refresh the managed runner and launcher without reinstalling Paddle.

        This is used after a plugin update so an existing environment picks up
        new runner modes, such as the PP-StructureV3 table/Markdown mode.
        """

        if not self.python.is_file():
            raise VenvError("The managed OCR environment does not exist yet.")
        self._write_launcher()

    def remove(self) -> None:
        """Delete the managed environment.

        Models live in PaddleX's user cache and are deliberately not touched.
        """

        if self.venv_dir.exists():
            shutil.rmtree(self.venv_dir)

    def install(
        self,
        progress: ProgressCallback | None = None,
        status: StatusCallback | None = None,
    ) -> None:
        """Create the environment, install Paddle, and write the launcher.

        This requires network access on the first run and must be called only
        from an explicit user action.
        """

        self.venv_dir.parent.mkdir(parents=True, exist_ok=True)
        if self.venv_dir.exists() and not self.python.is_file():
            # A previous attempt left a partial environment.  Recreate it
            # rather than trying to repair an unknown state.
            shutil.rmtree(self.venv_dir)

        if not self.python.is_file():
            self._set_status(status, "Creating the OCR virtual environment...")
            self._set_progress(progress, 5)
            self._run(
                [sys.executable, "-m", "venv", str(self.venv_dir)],
                status,
                "Could not create the OCR virtual environment. "
                "Install python3-venv and try again.",
            )

        self._set_status(status, "Preparing pip and build tools...")
        self._set_progress(progress, 20)
        self._run(
            [
                str(self.python),
                "-m",
                "pip",
                "install",
                "--disable-pip-version-check",
                "--no-input",
                "--upgrade",
                "pip",
                "setuptools",
                "wheel",
            ],
            status,
            "Could not upgrade pip/setuptools/wheel in the OCR environment.",
        )

        self._set_status(status, "Installing PaddlePaddle and PaddleOCR...")
        self._set_progress(progress, 40)
        self._run(
            [
                str(self.python),
                "-m",
                "pip",
                "install",
                "--disable-pip-version-check",
                "--no-input",
                *PADDLE_PACKAGES,
            ],
            status,
            "Could not install PaddlePaddle/PaddleOCR. "
            "Check the network connection and the Python version.",
        )

        self._set_status(status, "Verifying PaddleOCR imports...")
        self._set_progress(progress, 85)
        self._run(
            [
                str(self.python),
                "-c",
                "import paddle, paddleocr; print('PaddleOCR imports OK')",
            ],
            status,
            "Paddle is installed but cannot be imported in the OCR environment.",
        )

        self._set_status(status, "Writing the OCR launcher...")
        self._set_progress(progress, 90)
        self._write_launcher()
        self._set_progress(progress, 100)
        self._set_status(status, "OCR environment ready.")

    def _write_launcher(self) -> None:
        runner_source = Path(__file__).with_name("runner.py")
        if not runner_source.is_file():
            raise VenvError(f"Packaged OCR runner is missing: {runner_source}")

        shutil.copyfile(runner_source, self.runner)
        if os.name == "nt":
            launcher = (
                "@echo off\n"
                f'"{self.python}" "{self.runner}" %*\n'
            )
        else:
            launcher = (
                "#!/bin/sh\n"
                f"exec {shlex.quote(str(self.python))} "
                f"{shlex.quote(str(self.runner))} \"$@\"\n"
            )
        self.launcher.write_text(launcher, encoding="utf-8")
        if os.name != "nt":
            self.launcher.chmod(0o755)

    def _run(
        self,
        command: list[str],
        status: StatusCallback | None,
        failure_message: str,
    ) -> None:
        self._set_status(status, "$ " + " ".join(command))
        try:
            process = subprocess.Popen(
                command,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                encoding="utf-8",
                errors="replace",
            )
        except OSError as exc:
            raise VenvError(f"{failure_message}\n{exc}") from exc

        tail: deque[str] = deque(maxlen=20)
        if process.stdout is not None:
            for line in process.stdout:
                line = line.rstrip()
                if line:
                    tail.append(line)
                    self._set_status(status, line)
        return_code = process.wait()
        if return_code != 0:
            details = "\n".join(tail)
            raise VenvError(f"{failure_message}\n{details}".strip())

    @staticmethod
    def _set_progress(callback: ProgressCallback | None, value: int) -> None:
        if callback is not None:
            callback(value)

    @staticmethod
    def _set_status(callback: StatusCallback | None, value: str) -> None:
        if callback is not None:
            callback(value)
