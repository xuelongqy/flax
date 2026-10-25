"""Bound each real-gallery process and retain unsuccessful runs as evidence."""
import json
import os
from pathlib import Path
import subprocess
import sys
import time

root = Path(__file__).resolve().parents[2]
build, mode = sys.argv[1:3]
assert build in ('debug', 'release') and mode in ('baseline', 'handoff', 'file', 'staged', 'identity', 'prewarmed', 'factory')
out = Path(os.environ.get('FLAX_GALLERY_OUTPUT', str(root / '.local/gallery-handoff')))
out.mkdir(parents=True, exist_ok=True)
app = root / f'examples/embedded/build/macos/Build/Products/{build.title()}/flax_embedded.app'
env = dict(os.environ, FLAX_HANDOFF_ROOT=str(root), FLAX_GALLERY_MODE=mode,
           FLAX_HANDOFF_DEFER_GC='1', TMPDIR=str(root/'.local/tmp'),
           TMP=str(root/'.local/tmp'), TEMP=str(root/'.local/tmp'))
if os.environ.get('FLAX_HANDOFF_DEFER_GC') == '0':
    env.pop('FLAX_HANDOFF_DEFER_GC')
tag = f'{build}-{mode}-{time.time_ns()}'
log = out / f'{tag}.log'
with log.open('wb') as stream:
    child = subprocess.Popen([str(app/'Contents/MacOS/flax_embedded')],
                             cwd=root/'examples/embedded', env=env,
                             stdout=stream, stderr=subprocess.STDOUT)
    print(f'START {tag} pid={child.pid}', flush=True)
    try:
        subprocess.run(['osascript', '-e', f'''tell application "System Events"
repeat 100 times
  if exists (first process whose unix id is {child.pid}) then
    set targetProcess to first process whose unix id is {child.pid}
    if (count of windows of targetProcess) > 0 then
      set frontmost of targetProcess to true
      if frontmost of targetProcess then return
    end if
  end if
  delay 0.05
end repeat
error "Experiment window did not become foreground"
end tell'''], timeout=8, check=True, stdout=stream, stderr=stream)
    except (subprocess.TimeoutExpired, subprocess.CalledProcessError):
        child.terminate()
        child.wait(timeout=5)
        print(f'FOREGROUND FAILED {tag}', flush=True)
        sys.exit(1)
    try:
        code = child.wait(timeout=180)
    except subprocess.TimeoutExpired:
        subprocess.run(['sample', str(child.pid), '2', '-file', str(out/f'{tag}-sample.txt')],
                       timeout=10, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        child.terminate()
        try:
            child.wait(timeout=5)
        except subprocess.TimeoutExpired:
            child.kill()
            child.wait(timeout=5)
        print(f'TIMEOUT {tag}', flush=True)
        sys.exit(1)
lines = log.read_text(errors='replace').splitlines()
results = [json.loads(line.split('GALLERY_RESULT ', 1)[1]) for line in lines if line.startswith('GALLERY_RESULT ')]
if len(results) == 1:
    result = results[0]
    (out/f'{tag}.json').write_text(json.dumps(result, indent=2)+'\n')
    print(json.dumps({'tag': tag, 'passed': result['passed'], 'checks': len(result['checks']),
                      'samples': len(result['samples'])}), flush=True)
if code or len(results) != 1 or not results[0]['passed']:
    print('\n'.join(line for line in lines if not line.startswith('GALLERY_RESULT '))[-6000:])
    sys.exit(1)
