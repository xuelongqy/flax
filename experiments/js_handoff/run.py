"""Run a bounded native application and retain all failed and successful receipts."""
import json
import os
from pathlib import Path
import subprocess
import sys
import time

root = Path(__file__).resolve().parents[2]
mode = sys.argv[1]
assert mode in ("debug", "release")
out = Path(os.environ.get('FLAX_HANDOFF_OUTPUT', str(root / '.local/js-handoff')))
out.mkdir(parents=True, exist_ok=True)
app = root / f"examples/embedded/build/macos/Build/Products/{mode.title()}/flax_embedded.app"
env = dict(os.environ, FLAX_HANDOFF_ROOT=str(root), TMPDIR=str(root / ".local/tmp"),
           TMP=str(root / ".local/tmp"), TEMP=str(root / ".local/tmp"))
for _ in range(int(sys.argv[2]) if len(sys.argv) > 2 else 1):
    variant = 'deferred' if env.get('FLAX_HANDOFF_DEFER_GC') else 'baseline'
    tag = f"{mode}-{variant}-{time.time_ns()}"
    log = out / f"{tag}.log"
    with log.open("wb") as stream:
        process = subprocess.Popen([str(app / "Contents/MacOS/flax_embedded")],
                                   cwd=root / "examples/embedded", env=env,
                                   stdout=stream, stderr=subprocess.STDOUT)
        print(f"START {tag} pid={process.pid}", flush=True)
        try:
            subprocess.run(["osascript", "-e", f'''tell application "System Events"
repeat 100 times
  if exists (first process whose unix id is {process.pid}) then
    set targetProcess to first process whose unix id is {process.pid}
    if (count of windows of targetProcess) > 0 then
      set frontmost of targetProcess to true
      if frontmost of targetProcess then return
    end if
  end if
  delay 0.05
end repeat
error "Experiment window did not become foreground"
end tell'''], stdout=stream, stderr=stream, timeout=8, check=True)
        except (subprocess.TimeoutExpired, subprocess.CalledProcessError):
            process.terminate()
            process.wait(timeout=5)
            print(f"FOREGROUND FAILED {tag}", flush=True)
            sys.exit(1)
        try:
            code = process.wait(timeout=90)
        except subprocess.TimeoutExpired:
            subprocess.run(["sample", str(process.pid), "2", "-file", str(out / f"{tag}-sample.txt")],
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=10)
            process.terminate()
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()
                process.wait(timeout=5)
            print(f"TIMEOUT {tag} log={log}", flush=True)
            sys.exit(1)
    text = log.read_text(errors="replace")
    results = [json.loads(line.split("HANDOFF_RESULT ", 1)[1]) for line in text.splitlines()
               if line.startswith("HANDOFF_RESULT ")]
    if len(results) == 1:
        result = results[0]
        (out / f"{tag}.json").write_text(json.dumps(result, indent=2) + "\n")
        print(json.dumps({"tag": tag, "passed": result["passed"], "checks": len(result["checks"]),
                          "createRuntimeUs": result["createRuntimeUs"],
                          "rows": result["rows"]}), flush=True)
    if code or len(results) != 1 or not results[0]["passed"]:
        print(f"FAIL {tag} exit={code} log={log}", flush=True)
        print("\n".join(line for line in text.splitlines() if not line.startswith("HANDOFF_RESULT "))[-5000:], flush=True)
        sys.exit(1)
