"""Process and receipt helpers for package runtime acceptance."""
import hashlib
import json
import os
import re
import selectors
import subprocess
import time

def run(command, cwd, env, log):
    print("Running:", " ".join(map(str, command)), flush=True)
    with log.open("w") as output:
        result = subprocess.run(list(map(str, command)), cwd=cwd, env=env,
                                stdout=output, stderr=subprocess.STDOUT)
    if result.returncode:
        raise RuntimeError(f"Command failed ({log}):\n{log.read_text()[-7000:]}")


def launch(command, env, log, marker="FLAX_FFI_GATE_A_RESULT "):
    process = subprocess.Popen(list(map(str, command)), env=env,
                               stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    selector = selectors.DefaultSelector()
    selector.register(process.stdout, selectors.EVENT_READ)
    captured = bytearray()
    deadline = time.monotonic() + 90
    try:
        while time.monotonic() < deadline:
            for key, _ in selector.select(timeout=1):
                chunk = os.read(key.fileobj.fileno(), 65536)
                if not chunk:
                    raise RuntimeError("Application exited before the result")
                captured.extend(chunk)
                for line in captured.decode(errors="replace").splitlines():
                    if marker in line:
                        try:
                            return json.loads(line.split(marker, 1)[1])
                        except json.JSONDecodeError:
                            pass  # The next read can complete a partial stdout line.
        raise RuntimeError("Application produced no result within 90 seconds")
    finally:
        selector.close()
        if process.poll() is None:
            process.terminate()
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()
                process.wait()
        process.stdout.close()
        log.write_bytes(captured)


def digest(file):
    with file.open("rb") as source:
        return hashlib.file_digest(source, "sha256").hexdigest()


def binary_uuids(file):
    text = subprocess.check_output(["xcrun", "dwarfdump", "--uuid", str(file)], text=True)
    identities = re.findall(r"UUID: ([\w-]+) \(([^)]+)\)", text)
    if not identities:
        raise RuntimeError(f"Missing Mach-O UUID: {file}")
    return {architecture: identity for identity, architecture in identities}
