"""Build a private frontend with the fixed-entry serialization repair."""
import hashlib
import json
import os
from pathlib import Path
import shlex
import shutil
import subprocess
from urllib.parse import urljoin

root = Path(__file__).resolve().parents[2]
flutter = Path(os.environ.get('FLUTTER_ROOT', root.parent / 'flutter'))
engine = flutter / 'engine/src'
dart = engine / 'flutter/third_party/dart'
dest = root / '.local/fixed-entry/build'
dest.mkdir(parents=True, exist_ok=True)
environment = dict(os.environ, **{k: str(root / '.local/tmp') for k in ('TMPDIR', 'TMP', 'TEMP')})
Path(environment['TMPDIR']).mkdir(parents=True, exist_ok=True)
config = json.loads((dart / '.dart_tool/package_config.json').read_text())
for package in config['packages']:
    if package['name'] in ('vm', 'front_end', 'kernel'):
        target = dest / 'pkg' / package['name']
        shutil.copytree(dart / 'pkg' / package['name'] / 'lib', target / 'lib', dirs_exist_ok=True)
        package['rootUri'] = target.as_uri() + '/'
    else:
        package['rootUri'] = urljoin((dart / '.dart_tool/package_config.json').as_uri(), package['rootUri'])
packages = dest / 'package_config.json'
packages.write_text(json.dumps(config, indent=2) + '\n')
subprocess.run(['patch', '--batch', '-p1', '-i', str(root / 'experiments/fixed_entries/compiler.patch')],
               cwd=dest, check=True, env=environment)

# Reuse each SDK's recorded product frontend build, including its VM configuration.
receipts = []
for mode in ('debug', 'release'):
    out = engine / 'out' / f'flax_mac_{mode}_arm64'
    build = dest / mode
    build.mkdir(exist_ok=True)
    def command_for(target):
        return shlex.split(subprocess.check_output(
            ['ninja', '-C', str(out), '-t', 'commands', target], text=True).splitlines()[-1])
    recorded = command_for('frontend_server_aot_product_dill')
    command = [str(out / 'bootstrap_gen_kernel.exe')]
    for word in recorded[recorded.index('bootstrap_gen_kernel.exe') + 1:]:
        if word.startswith('--packages='):
            word = f'--packages={packages}'
        elif word.startswith('--output='):
            word = f'--output={build}/frontend.dill'
        elif word.startswith('--depfile='):
            word = f'--depfile={build}/frontend.dill.d'
        command.append(word)
    subprocess.run(command, cwd=out, env=environment, check=True)
    snapshot = build / 'frontend_server_aot.dart.snapshot'
    recorded = command_for('frontend_server_aot_product_gen_snapshot')
    executable = next(word for word in recorded if word in ('gen_snapshot', 'gen_snapshot_product'))
    generate = [str(out / executable), *recorded[recorded.index(executable) + 1:]]
    generate = [f'--macho={snapshot}' if word.startswith('--macho=') else word for word in generate]
    generate[-1] = str(build / 'frontend.dill')
    subprocess.run(generate, cwd=out, env=environment, check=True)
    subprocess.run(['codesign', '--force', '--sign', '-', str(snapshot)], check=True)
    runtime = out / 'dart-sdk/bin/dartaotruntime'
    subprocess.run([str(runtime), str(snapshot)], input='quit\n', text=True,
                   capture_output=True, check=True, timeout=10, env=environment)
    receipts.append({'mode': mode, 'compile': command, 'generate': generate,
                     'snapshotSha256': hashlib.sha256(snapshot.read_bytes()).hexdigest()})

# Official local-engine selection and cache hashing see the private compiler artifact.
for mode in ('debug', 'release'):
    snapshot = dest / mode / 'frontend_server_aot.dart.snapshot'
    target = dest.parent / 'engine/src/out' / f'flax_mac_{mode}_arm64'
    target.mkdir(parents=True, exist_ok=True)
    for source in (engine / 'out' / f'flax_mac_{mode}_arm64').iterdir():
        link = target / source.name
        if source.name == 'dart-sdk':
            if link.is_symlink():
                link.unlink()
            # Copy directory spines only; never write through an SDK symlink.
            for directory in ('', 'bin', 'bin/snapshots'):
                folder = link / directory
                folder.mkdir(parents=True, exist_ok=True)
                for item in (source / directory).iterdir():
                    child = folder / item.name
                    if item.name in ('bin', 'snapshots') and item.is_dir():
                        continue
                    if child.is_symlink():
                        child.unlink()
                    assert not child.exists(), f'Unexpected private SDK file: {child}'
                    child.symlink_to(snapshot if item.name == snapshot.name else item,
                                     target_is_directory=item.is_dir())
            continue
        if link.is_symlink():
            link.unlink()
        assert not link.exists(), f'Unexpected private output: {link}'
        link.symlink_to(snapshot if source.name == snapshot.name else source,
                        target_is_directory=source.is_dir())
receipt = {'flutterHead': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=flutter, text=True).strip(),
           'modes': receipts,
           'patchSha256': hashlib.sha256((root / 'experiments/fixed_entries/compiler.patch').read_bytes()).hexdigest()}
(dest / 'receipt.json').write_text(json.dumps(receipt, indent=2) + '\n')
print(json.dumps(receipt), flush=True)
