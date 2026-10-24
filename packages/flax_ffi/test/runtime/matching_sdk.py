#!/usr/bin/env python3
"""Create a separate Flutter checkout matching an acceptance engine's framework."""
import argparse
import json
from pathlib import Path
import shutil
import subprocess


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', required=True, type=Path)
    parser.add_argument('--engine-output', required=True, type=Path)
    parser.add_argument('--output', required=True, type=Path)
    parser.add_argument('--target', choices=['macos', 'ios-simulator'], default='ios-simulator')
    args = parser.parse_args()
    source, target = args.flutter_root.resolve(), args.output.resolve()
    engine = {'macos': 'flax_mac_debug', 'ios-simulator': 'flax_ios_debug_sim_arm64'}[args.target]
    receipt = json.loads((args.engine_output / engine / 'build.json').read_text())
    revision = receipt['revision']
    if not target.exists():
        subprocess.run(['git', '-c', 'core.hooksPath=/dev/null', 'worktree', 'add',
                        '--detach', target, revision], cwd=source, check=True)
    actual = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=target, text=True).strip()
    if actual != revision:
        raise RuntimeError('Existing SDK checkout has a different revision; choose another output')
    cache = target / 'bin/cache'
    cache.mkdir(exist_ok=True)
    for path in (source / 'bin/cache').iterdir():
        destination = cache / path.name
        if destination.exists() or destination.is_symlink():
            continue
        if path.is_dir():
            destination.symlink_to(path, target_is_directory=True)
        else:
            shutil.copy2(path, destination)
    # Flutter source checkouts generate this dependency inventory during setup.
    # Reuse the verified producer's resolved inventory; do not modify that SDK.
    lock = target / 'pubspec.lock'
    if not lock.exists():
        shutil.copy2(source / 'pubspec.lock', lock)
    stamp = (source / 'bin/cache/engine.stamp').read_text().strip()
    metadata = {'frameworkRevision': revision, 'verifiedToolingRoot': str(source),
                'prebuiltEngineVersion': stamp}
    (target / '.flax-ffi-sdk.json').write_text(json.dumps(metadata, indent=2) + '\n')
    print(target)


if __name__ == '__main__':
    main()
