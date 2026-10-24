#!/usr/bin/env python3
"""Build pinned static libffi and isolated V8/Hermes engine overlays."""
import argparse
import hashlib
import engine_overlay
import json
import os
from pathlib import Path
import shutil
import subprocess
import tarfile
import ios_platform

VERSION = '3.4.8'
ARCHIVE_SHA256 = 'bc9842a18898bfacb0ed1252c4febcc7e78fa139fd27fdc7a3e30d9d9356119b'


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def fixed_page_compaction(code):
    old = '    ASSERT(page_in_use);\n\n    page->VisitObjectPointers(this);'
    new = ('    // Joint GC can release the last Flax byte pin while marking a fixed page.\n'
           '    // SweepPage has already returned an empty page to the freelist.\n'
           '    if (page_in_use) page->VisitObjectPointers(this);')
    if code.count(new) == 1: return code
    if code.count(old) != 1: raise RuntimeError('Dart fixed-page compactor source changed')
    return code.replace(old, new)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', required=True, type=Path)
    parser.add_argument('--output', required=True, type=Path)
    parser.add_argument('--source-archive', required=True, type=Path)
    parser.add_argument('--engine-source', required=True, type=Path,
                        help='Maintained engine/src directory containing flutter/flax')
    parser.add_argument('targets', nargs='+', choices=[
        'flax_mac_debug', 'flax_mac_release', 'flax_ios_debug_sim_arm64'])
    args = parser.parse_args()
    native = args.engine_source.resolve() / 'flutter/flax/native'
    hermes_adapter = native / 'hermes_engine.cpp'
    archive = args.source_archive.resolve()
    if digest(archive) != ARCHIVE_SHA256:
        raise RuntimeError('libffi source archive differs from the pinned release')
    output = args.output.resolve()
    output.mkdir(parents=True, exist_ok=True)
    temporary = output / 'tmp'
    temporary.mkdir(exist_ok=True)
    os.environ.update(TMPDIR=str(temporary), TMP=str(temporary), TEMP=str(temporary))
    source = output / f'libffi-{VERSION}'
    if not source.exists():
        with tarfile.open(archive) as package:
            package.extractall(output, filter='data')
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
    for name in ['collect_v8.inc', 'collect_hermes.inc']:
        shutil.copyfile(experiment / 'native' / name, extension / name)
    for name in args.targets:
        ios = 'ios' in name
        sdk = subprocess.check_output(['xcrun', '--sdk', 'iphonesimulator' if ios else 'macosx',
                                       '--show-sdk-path'], text=True).strip()
        clang = subprocess.check_output(['xcrun', '--find', 'clang'], text=True).strip()
        target = 'arm64-apple-ios16.3-simulator' if ios else 'arm64-apple-macos15.0'
        build = output / name / 'libffi-build'
        install = output / name / 'libffi'
        build.mkdir(parents=True, exist_ok=True)
        flags = f'-target {target} -isysroot {sdk} -O2 -fPIC -fvisibility=hidden'
        env = dict(os.environ, CC=clang, CFLAGS=flags, LDFLAGS=f'-target {target} -isysroot {sdk}')
        with (build / 'build.log').open('w') as log:
            subprocess.run([source / 'configure', '--host=aarch64-apple-darwin',
                '--disable-shared', '--enable-static', '--disable-docs',
                '--disable-multi-os-directory', '--prefix=' + str(install)],
                cwd=build, env=env, stdout=log, stderr=subprocess.STDOUT, check=True)
            subprocess.run(['make', '-j4', 'install'], cwd=build, env=env,
                           stdout=log, stderr=subprocess.STDOUT, check=True)
        library = install / 'lib/libffi.a'
        transforms = {'flutter/third_party/dart/runtime/vm/heap/compactor.cc': fixed_page_compaction}
        if not ios:
            transforms['flutter/flax/native/src/joint_gc.cc'] = lambda _: (native / 'src/joint_gc.cc').read_text()
        engine_overlay.build(args.flutter_root.resolve(), output, name,
                     extension_source=extension, includes=[install / 'include', experiment.parents[3] / 'packages/flax/native/include'], libraries=[library],
                     native_source=native,
                     cpp_transforms=transforms,
                     platform_builder=ios_platform.build if ios else None)
        receipt_path = output / name / 'build.json'
        receipt = json.loads(receipt_path.read_text())
        if ios:
            receipt['hermesAdapterSourceSha256'] = digest(hermes_adapter)
        receipt['engineSource'] = str(args.engine_source.resolve())
        receipt['libffi'] = {'version': VERSION, 'archiveSha256': ARCHIVE_SHA256,
            'librarySha256': digest(library), 'target': target,
            'source': f'https://github.com/libffi/libffi/releases/tag/v{VERSION}'}
        receipt['extensionFiles'] = {p.name: digest(p) for p in sorted(extension.iterdir())}
        receipt['javascriptSources'] = javascript_sources
        receipt['callbackBackend'] = 'precompiled-libffi-table'
        config = (build / 'fficonfig.h').read_text()
        if '#define FFI_EXEC_TRAMPOLINE_TABLE 1' not in config:
            raise RuntimeError('Apple FFI callbacks require precompiled trampoline tables')
        receipt_path.write_text(json.dumps(receipt, indent=2) + '\n')


if __name__ == '__main__':
    main()
