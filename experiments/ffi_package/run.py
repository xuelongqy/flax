#!/usr/bin/env python3
"""Verify npm-only FFI selection and Flutter code-asset packaging, without project patches."""
import argparse
import hashlib
import importlib.util
import json
import os
from pathlib import Path
import plistlib
import shutil
import subprocess
import tarfile
import tempfile
import zipfile


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', type=Path, required=True)
    parser.add_argument('--engine-output', type=Path, required=True)
    parser.add_argument('--scratch-root', type=Path, required=True)
    parser.add_argument('--target', choices=['macos', 'ios-simulator', 'ios-device', 'android'], required=True)
    parser.add_argument('--simulator')
    parser.add_argument('--android-device')
    parser.add_argument('--adb', type=Path, default=Path('/Volumes/MAC_HOME/Android/sdk/platform-tools/adb'))
    parser.add_argument('--release', action='store_true')
    parser.add_argument('--cases', nargs='+', choices=['used', 'unused', 'tree-shaken', 'absent'],
                        default=['used', 'unused', 'tree-shaken', 'absent'])
    args = parser.parse_args()
    if args.target == 'ios-simulator' and (not args.simulator or args.release):
        parser.error('ios-simulator requires --simulator and a debug engine')
    if args.target == 'ios-device' and not args.release:
        parser.error('ios-device is an unsigned release packaging check')
    if args.target == 'android' and (not args.android_device or args.release):
        parser.error('android requires --android-device and a debug engine')
    experiment = Path(__file__).resolve().parent
    root = experiment.parents[1]
    spec = importlib.util.spec_from_file_location('gate_a', root / 'experiments/ffi_gate_a/run.py')
    gate = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(gate)
    mode = 'release' if args.release else 'debug'
    label = args.target + '-' + mode
    output = root / '.local/ffi-package' / label
    output.mkdir(parents=True, exist_ok=True)
    args.scratch_root.mkdir(parents=True, exist_ok=True)
    scratch = Path(tempfile.mkdtemp(prefix='flax-ffi-package-', dir=args.scratch_root))
    env = dict(os.environ, TMPDIR=str(scratch), TMP=str(scratch), TEMP=str(scratch))
    flutter = args.flutter_root / 'bin/flutter'
    dart = args.flutter_root / 'bin/dart'
    app = scratch / 'app'
    js = app / 'js'
    host = app / 'internal'
    receipt = {'target': args.target, 'mode': mode, 'cases': {}, 'archives': {},
               'sources': {str(p.relative_to(experiment)): gate.digest(p)
                   for p in sorted(experiment.rglob('*')) if p.is_file() and
                   p.suffix in ('.py', '.mjs', '.dart', '.js', '.ts', '.json', '.yaml') and
                   p.name != 'results.json'}}
    try:
        archives = scratch / 'archives'
        archives.mkdir()
        for package in ['ffi', 'fixture']:
            directory = scratch / package
            shutil.copytree(experiment / 'packages' / package, directory)
            if package == 'fixture':
                descriptor = json.loads((directory / 'flax.native.json').read_text())
                for name in descriptor['sources'] + descriptor['headers']:
                    source = (root / 'packages/flax/native/include/flax/runtime.h' if
                              name == 'native/include/flax/runtime.h' else
                              root / 'experiments/ffi_full' / name)
                    destination = directory / name
                    destination.parent.mkdir(parents=True, exist_ok=True)
                    shutil.copyfile(source, destination)
            gate.run(['npm', 'pack', '--ignore-scripts', '--pack-destination', archives], directory,
                     env, output / f'{package}-pack.log')
        for archive in archives.glob('*.tgz'):
            with tarfile.open(archive) as package:
                names = package.getnames()
                if any(n.endswith(('.dart', 'pubspec.yaml')) for n in names):
                    raise RuntimeError('A developer npm archive contains a Dart package')
                if any(n.endswith(('runtime.inc', 'collect_v8.inc', 'collect_hermes.inc')) for n in names):
                    raise RuntimeError('A provider archive contains engine implementation code')
            receipt['archives'][archive.name] = {'sha256': gate.digest(archive), 'files': names}
        gate.run([flutter, 'create', '--no-pub', '--platforms=macos,ios,android',
                  '--org=dev.flax', '--project-name=flax_ffi_package', app], root, env, output / 'create.log')
        shutil.rmtree(app / 'test')
        (app / 'pubspec.yaml').write_text('''name: flax_ffi_package
publish_to: none
version: 1.0.0+1
environment:
  sdk: ^3.13.5
dependencies:
  flutter:
    sdk: flutter
  flax_ffi_host:
    path: internal
dev_dependencies:
  flutter_lints: 6.0.0
''')
        (app / 'lib/main.dart').write_text("import 'package:flax_ffi_host/host.dart';\n"
                                           'Future<void> main() => runPackageProbe();\n')
        js.mkdir()
        installed = False
        pub_ready = False
        native_projects = [app / 'macos/Runner.xcodeproj/project.pbxproj',
                           app / 'ios/Runner.xcodeproj/project.pbxproj',
                           app / 'android/app/build.gradle.kts']
        project_hashes = {str(p.relative_to(app)): gate.digest(p) for p in native_projects}
        # One application and build directory deliberately survive all selection transitions.
        for case in args.cases:
            if case != 'absent' and not installed:
                dependencies = {name: 'file:' + str(next(archives.glob(pattern))) for name, pattern in [
                    ('@flax/ffi', 'flax-ffi-0*.tgz'), ('@flax/ffi-fixture', 'flax-ffi-fixture-*.tgz')]}
                (js / 'package.json').write_text(json.dumps({
                    'name': 'ffi-consumer', 'version': '1.0.0', 'private': True,
                    'type': 'module', 'dependencies': dependencies}))
                gate.run(['npm', 'install', '--offline', '--ignore-scripts', '--no-audit', '--no-fund'],
                         js, env, output / f'{case}-npm-install.log')
                installed = True
            elif case == 'absent':
                shutil.rmtree(js / 'node_modules', ignore_errors=True)
                (js / 'package.json').write_text(json.dumps({
                    'name': 'ffi-consumer', 'version': '1.0.0', 'private': True, 'type': 'module'}))
                installed = False
            script = (experiment / ('used.js' if case == 'used' else 'unused.js')).read_text()
            if case == 'tree-shaken':
                script = "import { add } from '@flax/ffi-fixture';\n" + script
            (js / 'index.js').write_text(script)
            gate.run(['node', experiment / 'prepare.mjs', '--project', js, '--host', host],
                     root, env, output / f'{case}-prepare.log')
            plan = json.loads((host / 'native-plan.json').read_text())
            expected = case == 'used'
            if bool(plan['providers']) != expected:
                raise RuntimeError('Native selection does not match the emitted JS graph')
            if not pub_ready:
                gate.run([flutter, 'pub', 'get', '--offline'], app, env, output / 'pub-get.log')
                pub_ready = True
            gate.run([dart, 'format', 'lib', 'internal/lib', 'internal/hook'], app, env,
                     output / f'{case}-format.log')
            gate.run([dart, 'analyze', '--fatal-infos', 'lib/main.dart', 'internal/lib/host.dart',
                      'internal/lib/selection.g.dart', 'internal/hook/build.dart'],
                     app, env, output / f'{case}-analyze.log')
            target = {'macos': f'ffi_flax_mac_{mode}_arm64',
                      'ios-simulator': 'ffi_flax_ios_debug_sim_arm64',
                      'ios-device': 'ffi_flax_ios_release_arm64',
                      'android': 'ffi_flax_android_debug_arm64'}[args.target]
            source = args.engine_output / 'engine-src'
            engine_name = target.removeprefix('ffi_')
            if args.target == 'macos': engine_name = engine_name.removesuffix('_arm64')
            engine_build = json.loads((args.engine_output / engine_name / 'build.json').read_text())
            if engine_build['extensionSha256'] != gate.digest(root / 'experiments/ffi_full/native/runtime.inc'):
                raise RuntimeError('The isolated shared FFI engine is stale')
            receipt['engineRevision'] = engine_build['revision']
            command = [flutter, f'--local-engine-src-path={source}', f'--local-engine={target}',
                       f'--local-engine-host=ffi_flax_mac_{mode}_arm64', 'build',
                       'macos' if args.target == 'macos' else 'apk' if args.target == 'android' else 'ios',
                       '--' + mode, '--no-pub']
            if args.target == 'ios-simulator': command.extend(['--simulator', '--no-codesign'])
            if args.target == 'ios-device': command.append('--no-codesign')
            if args.target == 'android': command.append('--target-platform=android-arm64')
            gate.run(command, app, env, output / f'{case}-build.log')
            result = {'executed': False}
            if args.target == 'macos':
                bundle, = (app / f'build/macos/Build/Products/{mode.capitalize()}').glob('*.app')
                result = gate.launch([bundle / 'Contents/MacOS/flax_ffi_package'], env,
                                     output / f'{case}-run.log', 'FLAX_FFI_PACKAGE_RESULT ')
                binary = source / 'out' / target / 'FlutterMacOS.framework/Versions/A/FlutterMacOS'
                packaged = bundle / 'Contents/Frameworks/FlutterMacOS.framework/Versions/A/FlutterMacOS'
            elif args.target.startswith('ios'):
                bundle = app / ('build/ios/iphonesimulator/Runner.app' if args.target == 'ios-simulator'
                                else 'build/ios/iphoneos/Runner.app')
                identity = plistlib.loads((bundle / 'Info.plist').read_bytes())['CFBundleIdentifier']
                if args.target == 'ios-simulator':
                    gate.run(['xcrun', 'simctl', 'install', args.simulator, bundle], app, env,
                             output / f'{case}-install.log')
                    try:
                        result = gate.launch(['xcrun', 'simctl', 'launch', '--console-pty',
                            '--terminate-running-process', args.simulator, identity], env,
                            output / f'{case}-run.log', 'FLAX_FFI_PACKAGE_RESULT ')
                    finally:
                        subprocess.run(['xcrun', 'simctl', 'terminate', args.simulator, identity],
                                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                        subprocess.run(['xcrun', 'simctl', 'uninstall', args.simulator, identity],
                                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                binary = source / 'out' / target / 'Flutter.framework/Flutter'
                packaged = bundle / 'Frameworks/Flutter.framework/Flutter'
            else:
                apk = app / f'build/app/outputs/flutter-apk/app-{mode}.apk'
                bundle = scratch / f'{case}-apk'
                with zipfile.ZipFile(apk) as package: package.extractall(bundle)
                adb = [str(args.adb), '-s', args.android_device]
                gate.run([*adb, 'install', '-r', apk], app, env, output / f'{case}-install.log')
                try:
                    gate.run([*adb, 'shell', 'am', 'start', '-W', '-n',
                              'dev.flax.flax_ffi_package/.MainActivity'], app, env, output / f'{case}-start.log')
                    pid = subprocess.check_output([*adb, 'shell', 'pidof', 'dev.flax.flax_ffi_package'], text=True).strip()
                    if not pid.isdecimal(): raise RuntimeError('Expected one Android probe process')
                    result = gate.launch([*adb, 'logcat', '--pid=' + pid, '-v', 'brief'], env,
                                         output / f'{case}-run.log', 'FLAX_FFI_PACKAGE_RESULT ')
                finally:
                    subprocess.run([*adb, 'uninstall', 'dev.flax.flax_ffi_package'],
                                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                binary = source / 'out' / target / 'lib.stripped/libflutter.so'
                packaged = bundle / 'lib/arm64-v8a/libflutter.so'
            if 'error' in result: raise RuntimeError(result['error'])
            native = [p for p in bundle.rglob('*') if p.is_file() and
                      'flax_ffi_providers' in p.name and p.suffix not in ('.plist', '.json')]
            # Framework symlinks can expose the same binary twice on macOS.
            native = sorted(set(p.resolve() for p in native))
            if bool(native) != expected: raise RuntimeError(f'Unexpected packaged native assets: {native}')
            if expected and len(native) != 1: raise RuntimeError('Expected one provider code asset')
            if expected:
                nm = (['xcrun', 'nm', '-gU'] if args.target != 'android' else
                      [str(args.flutter_root / 'engine/src/flutter/buildtools/mac-arm64/clang/bin/llvm-nm'), '-D', '-g', '--defined-only'])
                symbols = subprocess.check_output([*nm, str(native[0])], text=True)
                if 'flax_ffi_packaged_provider' not in symbols:
                    raise RuntimeError('Native registry symbol was stripped')
            if args.target == 'android':
                if gate.digest(binary) != gate.digest(packaged): raise RuntimeError('Packaged engine differs')
            elif gate.binary_uuids(binary) != gate.binary_uuids(packaged):
                raise RuntimeError('Packaged engine differs')
            if args.target != 'ios-device':
                if result['engineNamespace'] != (1 if args.target == 'ios-simulator' else 2):
                    raise RuntimeError('Wrong JS engine')
                if bool(result['providers']) != expected: raise RuntimeError('Wrong provider installation')
                if not expected and not result['ffiAbsent']: raise RuntimeError('FFI unexpectedly installed')
                result['executed'] = True
            if any(gate.digest(p) != project_hashes[str(p.relative_to(app))] for p in native_projects):
                raise RuntimeError('Native project was patched')
            receipt['cases'][case] = {**result, 'plan': plan,
                'nativeFiles': [str(p.relative_to(bundle.resolve())) for p in native],
                'nativeBytes': sum(p.stat().st_size for p in native),
                'bundleBytes': sum(p.stat().st_size for p in bundle.rglob('*') if p.is_file()),
                'nativeProjectsUnchanged': True, 'engineSha256': gate.digest(binary)}
            (output / 'receipt.json').write_text(json.dumps(receipt, indent=2) + '\n')
            print(json.dumps({'target': label, 'case': case, 'nativeBytes': receipt['cases'][case]['nativeBytes'],
                              **result}), flush=True)
        (output / 'receipt.json').write_text(json.dumps(receipt, indent=2) + '\n')
    finally:
        shutil.rmtree(scratch)


if __name__ == '__main__':
    main()
