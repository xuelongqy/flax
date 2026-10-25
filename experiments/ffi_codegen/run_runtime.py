#!/usr/bin/env python3
"""Run generated definitions/classes with existing maintained FFI test engines."""
import argparse
import importlib.util
import json
import os
from pathlib import Path
import plistlib
import shutil
import subprocess
import sys
import tempfile


ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / 'packages/flax_ffi/test/runtime'))
import support as gate

spec = importlib.util.spec_from_file_location('existing_ffi_runner', ROOT / 'packages/flax_ffi/test/runtime/run.py')
existing = importlib.util.module_from_spec(spec)
spec.loader.exec_module(existing)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', type=Path, required=True)
    parser.add_argument('--engine-output', type=Path, required=True)
    parser.add_argument('--target', choices=['macos', 'ios-simulator'], required=True)
    parser.add_argument('--simulator')
    args = parser.parse_args()
    ios = args.target == 'ios-simulator'
    if ios and not args.simulator:
        parser.error('--simulator is required for iOS')
    output = ROOT / '.local/ffi-codegen/runtime' / args.target
    output.mkdir(parents=True, exist_ok=True)
    scratch_root = ROOT / '.local/tmp'
    scratch_root.mkdir(parents=True, exist_ok=True)
    scratch = Path(tempfile.mkdtemp(prefix='ffi-codegen-', dir=scratch_root))
    env = dict(os.environ, TMPDIR=str(scratch), TMP=str(scratch), TEMP=str(scratch))
    matching = json.loads((args.flutter_root / '.flax-ffi-sdk.json').read_text())
    env['FLUTTER_PREBUILT_ENGINE_VERSION'] = matching['prebuiltEngineVersion']
    flutter = args.flutter_root / 'bin/flutter'
    app = scratch / 'app'
    identity = None
    try:
        gate.run([flutter, 'create', '--no-pub', '--platforms=macos,ios', '--org=dev.flax',
                  '--project-name=flax_ffi_codegen', app], ROOT, env, output / 'create.log')
        shutil.rmtree(app / 'test')
        (app / 'analysis_options.yaml').write_text('analyzer:\n  errors:\n    implementation_imports: ignore\n')
        (app / 'pubspec.yaml').write_text(f'''name: flax_ffi_codegen
publish_to: none
version: 1.0.0+1
environment:
  sdk: ^3.13.5
dependencies:
  flutter:
    sdk: flutter
  ffi: 2.2.0
  flax:
    path: {ROOT / 'packages/flax'}
flutter:
  assets:
    - assets/flax_modules/
    - assets/codegen.js
''')
        shutil.copyfile(HERE / 'host.dart', app / 'lib/main.dart')
        shutil.copytree(ROOT / 'examples/embedded/assets/flax_modules', app / 'assets/flax_modules')
        profile = 'ios-simulator-arm64' if ios else 'macos-arm64'
        gate.run(['node', HERE / 'bundle.mjs', profile, app / 'assets/codegen.js'], ROOT, env,
                 output / 'bundle.log')
        script_hash = gate.digest(app / 'assets/codegen.js')
        generated = ROOT / '.local/ffi-codegen/generated' / profile
        modules = generated / 'node_modules/@flax'
        modules.mkdir(parents=True, exist_ok=True)
        if not (modules / 'ffi').exists():
            (modules / 'ffi').symlink_to(ROOT / 'packages/flax_ffi/js', target_is_directory=True)
        gate.run(['node', ROOT / 'node_modules/typescript/bin/tsc', '--strict', '--noEmit',
                  '--target', 'ES2022', '--module', 'NodeNext', '--moduleResolution', 'NodeNext',
                  '--types', '', generated / 'definitions.g.ts', generated / 'bindings.g.ts',
                  generated / 'sqlite/definitions.g.ts', generated / 'sqlite/bindings.g.ts'], ROOT, env,
                 output / 'typecheck.log')
        sdk = subprocess.check_output(['xcrun', '--sdk', 'iphonesimulator' if ios else 'macosx',
                                       '--show-sdk-path'], text=True).strip()
        triple = 'arm64-apple-ios16.3-simulator' if ios else 'arm64-apple-macos15.0'
        obj, archive = scratch / 'fixture.o', scratch / 'libcodegen.a'
        gate.run(['/usr/bin/clang', '-target', triple, '-isysroot', sdk, '-std=c17', '-O2',
                  '-Wall', '-Wextra', '-Werror', '-c', HERE / 'native/api.c', '-o', obj], ROOT, env,
                 output / 'compile.log')
        gate.run(['xcrun', 'ar', 'rcs', archive, obj], ROOT, env, output / 'archive.log')
        project = app / ('ios' if ios else 'macos') / 'Runner.xcodeproj/project.pbxproj'
        existing.root_static_library(project, archive, [])
        gate.run([flutter, 'pub', 'get', '--offline'], app, env, output / 'pub-get.log')
        gate.run([args.flutter_root / 'bin/dart', 'format', 'lib/main.dart'], app, env, output / 'format.log')
        gate.run([args.flutter_root / 'bin/dart', 'analyze', '--fatal-infos', 'lib/main.dart'], app, env,
                 output / 'analyze.log')
        engine_name = 'flax_ios_debug_sim_arm64' if ios else 'flax_mac_debug'
        engine = 'ffi_' + engine_name + ('' if ios else '_arm64')
        engine_receipt = json.loads((args.engine_output / engine_name / 'build.json').read_text())
        revision = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=args.flutter_root, text=True).strip()
        if revision != engine_receipt['revision']:
            raise RuntimeError('Flutter framework does not match the selected test engine')
        engine_source = args.engine_output / 'engine-src'
        command = [flutter, f'--local-engine-src-path={engine_source}', f'--local-engine={engine}',
                   '--local-engine-host=ffi_flax_mac_debug_arm64', 'build', 'ios' if ios else 'macos',
                   '--debug', '--no-pub']
        if ios:
            command.extend(['--simulator', '--no-codesign'])
        gate.run(command, app, env, output / 'build.log')
        if ios:
            bundle = app / 'build/ios/iphonesimulator/Runner.app'
            identity = plistlib.loads((bundle / 'Info.plist').read_bytes())['CFBundleIdentifier']
            gate.run(['xcrun', 'simctl', 'install', args.simulator, bundle], ROOT, env, output / 'install.log')
            command = ['xcrun', 'simctl', 'launch', '--console-pty', '--terminate-running-process',
                       args.simulator, identity]
            binary = 'Flutter.framework/Flutter'
            packaged = bundle / 'Frameworks' / binary
        else:
            bundle, = (app / 'build/macos/Build/Products/Debug').glob('*.app')
            command = [bundle / 'Contents/MacOS/flax_ffi_codegen']
            binary = 'FlutterMacOS.framework/Versions/A/FlutterMacOS'
            packaged = bundle / 'Contents/Frameworks' / binary
        original = engine_source / 'out' / engine / binary
        if gate.binary_uuids(original) != gate.binary_uuids(packaged):
            raise RuntimeError('Packaged engine differs from the selected maintained test engine')
        result = gate.launch(command, env, output / 'run.log', 'FLAX_FFI_CODEGEN_RESULT ')
        receipt = {'target': args.target, 'engine': 'Hermes' if ios else 'V8',
            'frameworkRevision': revision, 'engineSha256': gate.digest(original),
            'engineUuid': gate.binary_uuids(packaged), 'fixtureSha256': gate.digest(archive),
            'typecheck': True, 'scriptSha256': script_hash,
            'generatedSha256': {str(p.relative_to(generated)): gate.digest(p)
                for p in sorted(generated.rglob('*.g.ts')) if 'node_modules' not in p.parts},
            'result': result, 'sourceSha256': {
                str(p.relative_to(ROOT)): gate.digest(p) for p in sorted(HERE.rglob('*'))
                if p.is_file() and 'node_modules' not in p.parts}}
        (output / 'receipt.json').write_text(json.dumps(receipt, indent=2) + '\n')
        if 'error' in result:
            raise RuntimeError(result['error'])
        print(json.dumps({'target': args.target, **result}), flush=True)
    finally:
        if identity:
            for action in ['terminate', 'uninstall']:
                subprocess.run(['xcrun', 'simctl', action, args.simulator, identity],
                               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        shutil.rmtree(scratch)


if __name__ == '__main__':
    main()
