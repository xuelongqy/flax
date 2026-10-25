#!/usr/bin/env python3
"""Build collection-instrumented overlays from FFI-enabled V8 engines."""
import argparse
import hashlib
import engine_overlay
import json
import os
from pathlib import Path
import shutil
import subprocess

def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', required=True, type=Path)
    parser.add_argument('--output', required=True, type=Path)
    parser.add_argument('--engine-source', required=True, type=Path,
                        help='Maintained engine/src directory containing flutter/flax')
    parser.add_argument('targets', nargs='+', choices=[
        'flax_mac_debug', 'flax_mac_release', 'flax_ios_debug_sim_arm64'])
    args = parser.parse_args()
    native = args.engine_source.resolve() / 'flutter/flax/native'
    output = args.output.resolve()
    output.mkdir(parents=True, exist_ok=True)
    temporary = output / 'tmp'
    temporary.mkdir(exist_ok=True)
    os.environ.update(TMPDIR=str(temporary), TMP=str(temporary), TEMP=str(temporary))
    experiment = Path(__file__).resolve().parent
    extension = output / 'extension-input'
    extension.mkdir(exist_ok=True)
    dependencies = output / 'javascript'
    dependencies.mkdir(exist_ok=True)
    (dependencies / 'package.json').write_text(json.dumps({
        'private': True,
        'dependencies': {'buffer': '6.0.3', 'base64-js': '1.5.1', 'ieee754': '1.2.1'},
    }) + '\n')
    subprocess.run(['npm', 'install', '--ignore-scripts', '--no-audit', '--no-fund'],
                   cwd=dependencies, check=True, stdout=subprocess.DEVNULL)
    package = experiment.parents[1] / 'js'
    subprocess.run(['node', experiment / 'bundle-native.mjs', package, dependencies,
                    extension / 'ffi-script.inc'], cwd=experiment.parents[3], check=True)
    javascript_sources = {p.name: digest(p) for p in sorted(package.glob('*.js'))}
    for fragment in (native / 'src/ffi').glob('*.inc'):
        if fragment.name == 'ffi-script.inc': continue
        shutil.copyfile(fragment, extension / fragment.name)
    for name in ['collect_v8.inc']:
        shutil.copyfile(experiment / 'native' / name, extension / name)
    for name in args.targets:
        # Reuse the production libffi objects and Dart patch already in this engine.
        libffi = native.parent / 'third_party/libffi'
        engine_overlay.build(args.flutter_root.resolve(), output, name,
                     extension_source=extension,
                     includes=[libffi / 'include', libffi / 'src/aarch64',
                               experiment.parents[3] / 'packages/flax/native/include'],
                     native_source=native)
        receipt_path = output / name / 'build.json'
        receipt = json.loads(receipt_path.read_text())
        receipt['v8AdapterSourceSha256'] = digest(native / 'v8-jsi/src/jsi_abi/jsi_abi_v8.cpp')
        receipt['engineSource'] = str(args.engine_source.resolve())
        libffi_inputs = {str(p.relative_to(libffi)): digest(p)
                         for p in sorted(libffi.rglob('*')) if p.is_file()}
        receipt['libffi'] = {**json.loads((libffi / 'source.json').read_text()),
                            'productionObjects': True, 'files': libffi_inputs}
        receipt['extensionFiles'] = {p.name: digest(p) for p in sorted(extension.iterdir())}
        receipt['javascriptSources'] = javascript_sources
        receipt['callbackBackend'] = 'precompiled-libffi-table'
        receipt_path.write_text(json.dumps(receipt, indent=2) + '\n')


if __name__ == '__main__':
    main()
