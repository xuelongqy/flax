"""Select an engine only inside this experiment's built application bundle."""
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys

root = Path(__file__).resolve().parents[2]
mode, variant = sys.argv[1:]
assert mode in ('debug', 'release') and variant in ('baseline', 'deferred', 'legacy-gc', 'empty-gc', 'results')
engine = Path('/Volumes/MAC_HOME/Develop/Flutter/flutter/engine/src/out') / f'flax_mac_{mode}_arm64'
baseline = engine / 'FlutterMacOS.framework/Versions/A/FlutterMacOS'
candidate = root / '.local/js-handoff' / (f'engine-{mode}' + (f'-{variant}' if variant in ('legacy-gc', 'empty-gc', 'results') else '')) / 'FlutterMacOS'
app = root / f'examples/embedded/build/macos/Build/Products/{mode.title()}/flax_embedded.app'
framework = app / 'Contents/Frameworks/FlutterMacOS.framework'
target = framework / 'Versions/A/FlutterMacOS'
selected = baseline if variant == 'baseline' else candidate
before = hashlib.sha256(baseline.read_bytes()).hexdigest()
temporary = target.with_name('FlutterMacOS.handoff')
shutil.copy2(selected, temporary)
# Replace the app's file instead of writing through a possible hard link.
os.replace(temporary, target)
subprocess.run(['codesign', '--force', '--sign', '-', str(framework)], check=True)
subprocess.run(['codesign', '--force', '--sign', '-', '--preserve-metadata=entitlements', str(app)], check=True)
assert hashlib.sha256(baseline.read_bytes()).hexdigest() == before
print(json.dumps({'mode': mode, 'variant': variant, 'maintainedEngineSha256': before,
                  'appEngineSha256': hashlib.sha256(target.read_bytes()).hexdigest()}))
