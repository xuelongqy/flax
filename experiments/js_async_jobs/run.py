"""Run the real macOS application; keep raw results on the workspace volume."""
import json
import os
from pathlib import Path
import subprocess
import sys
import time

root = Path(__file__).resolve().parents[2]
mode = sys.argv[1]
assert mode in ("debug", "release")
out = root / ".local/async-jobs"
app = root / f"examples/embedded/build/macos/Build/Products/{mode.title()}/flax_embedded.app"
env = dict(os.environ, FLAX_SLICE_ROOT=str(root), TMPDIR=str(root / ".local/tmp"),
           TMP=str(root / ".local/tmp"), TEMP=str(root / ".local/tmp"))
for index in range(int(sys.argv[2]) if len(sys.argv) > 2 else 1):
    tag = f"{mode}-{time.time_ns()}"
    log = out / f"{tag}.log"
    with log.open("wb") as stream:
        process = subprocess.Popen([str(app / "Contents/MacOS/flax_embedded")],
                                   cwd=root / "examples/embedded", env=env,
                                   stdout=stream, stderr=subprocess.STDOUT)
        try:
            subprocess.run(["osascript", "-e", f'tell application "System Events" to set frontmost of first process whose unix id is {process.pid} to true'],
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=5)
        except subprocess.TimeoutExpired:
            pass
        try:
            code = process.wait(timeout=90)
        except subprocess.TimeoutExpired:
            process.terminate()
            process.wait(timeout=10)
            raise
    text = log.read_text(errors="replace")
    matches = [json.loads(line.split("ASYNC_RESULT ", 1)[1]) for line in text.splitlines()
               if line.startswith("ASYNC_RESULT ")]
    if len(matches) == 1:
        (out / f"{tag}.json").write_text(json.dumps(matches[0], indent=2) + "\n")
    if code or len(matches) != 1:
        print(f"FAIL {tag} exit={code} log={log}", flush=True)
        print("\n".join(line for line in text.splitlines() if not line.startswith("ASYNC_RESULT "))[-4000:], flush=True)
        sys.exit(1)
    result = matches[0]
    print(json.dumps({"tag": tag, "passed": result["passed"], "checks": len(result["checks"]),
                      "rows": [{"mode": row["mode"], "frameGapMs": row["frames"]["maxMs"],
                                "heartbeatGapMs": row["heartbeat"]["maxMs"],
                                "frames": row["framesWhileBusy"], "scrollPositions": row["scrollPositionsWhileBusy"]}
                               for row in result["rows"]]}), flush=True)
    if not result["passed"]:
        sys.exit(1)
