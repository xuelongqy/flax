#!/usr/bin/env python3
"""Run JS dlopen file/process calls with the same JSI/libffi backend on V8/Hermes."""
import argparse
import support as gate
import json
import os
from pathlib import Path
import plistlib
import re
import shutil
import subprocess
import tarfile
import tempfile


def root_static_library(project, archive, names):
    data = json.loads(subprocess.check_output(['plutil', '-convert', 'json', '-o', '-', project]))
    objects = data['objects']
    runner, = [obj for obj in objects.values()
               if obj.get('isa') == 'PBXNativeTarget' and obj.get('name') == 'Runner']
    configurations = objects[runner['buildConfigurationList']]['buildConfigurations']
    text = project.read_text()
    flags = ['$(inherited)', '-Wl,-export_dynamic', '-Wl,-force_load,' + str(archive)]
    flags.extend('-Wl,-u,_flax_static_' + name for name in names)
    for identity in configurations:
        if 'OTHER_LDFLAGS' in objects[identity]['buildSettings']:
            raise RuntimeError('Unexpected Runner linker configuration')
        pattern = rf'({identity} /\* [^\n]+ \*/ = \{{.*?buildSettings = \{{\n)'
        value = ('\t\t\t\tENABLE_DEBUG_DYLIB = NO;\n'
                 '\t\t\t\tOTHER_LDFLAGS = (' + ', '.join(json.dumps(f) for f in flags) + ');\n')
        text, count = re.subn(pattern, lambda m: m[1] + value, text, count=1, flags=re.S)
        if count != 1: raise RuntimeError('Runner configuration changed')
    text = re.sub(r'IPHONEOS_DEPLOYMENT_TARGET = [^;]+;', 'IPHONEOS_DEPLOYMENT_TARGET = 16.3;', text)
    text = re.sub(r'MACOSX_DEPLOYMENT_TARGET = [^;]+;', 'MACOSX_DEPLOYMENT_TARGET = 15.0;', text)
    project.write_text(text)


def remove_withdrawn_fixture(directory):
    owned = {'flax_ffi_dlopen_fixture.framework', 'flax_ffi_dlopen_fixture.framework.dSYM',
             'libflax_ffi_dlopen_fixture.dylib'}
    removed = []
    if not directory.exists(): return removed
    for child in directory.iterdir():
        if child.name in owned:
            removed.append(str(child))
            if child.is_dir() and not child.is_symlink(): shutil.rmtree(child)
            else: child.unlink()
        elif child.is_dir() and not child.is_symlink():
            removed.extend(remove_withdrawn_fixture(child))
    return removed


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', type=Path, required=True)
    parser.add_argument('--engine-output', type=Path, required=True)
    parser.add_argument('--scratch-root', type=Path, required=True)
    parser.add_argument('--target', choices=['macos', 'ios-simulator'], required=True)
    parser.add_argument('--simulator')
    parser.add_argument('--release', action='store_true')
    parser.add_argument('--stress-seconds', type=int, default=1)
    parser.add_argument('--cases', nargs='+',
                        choices=['used', 'ffi-only', 'ffi-buffer-only', 'buffer-only', 'unused', 'tree-shaken', 'absent'],
                        default=['used', 'ffi-only', 'ffi-buffer-only', 'buffer-only', 'unused', 'tree-shaken', 'absent'])
    args = parser.parse_args()
    if not 1 <= args.stress_seconds <= 120:
        parser.error('--stress-seconds must be between 1 and 120')
    if args.target == 'ios-simulator' and (not args.simulator or args.release):
        parser.error('iOS requires a booted simulator and debug mode')
    experiment = Path(__file__).resolve().parent
    root = experiment.parents[3]
    mode = 'release' if args.release else 'debug'
    output = root / '.local/ffi-dlopen' / (args.target + '-' + mode)
    output.mkdir(parents=True, exist_ok=True)
    args.scratch_root.mkdir(parents=True, exist_ok=True)
    scratch = Path(tempfile.mkdtemp(prefix='ffi-dlopen-', dir=args.scratch_root))
    env = dict(os.environ, TMPDIR=str(scratch), TMP=str(scratch), TEMP=str(scratch))
    matching = args.flutter_root / '.flax-ffi-sdk.json'
    if matching.exists():
        env['FLUTTER_PREBUILT_ENGINE_VERSION'] = json.loads(matching.read_text())['prebuiltEngineVersion']
    flutter = args.flutter_root / 'bin/flutter'
    dart = args.flutter_root / 'bin/dart'
    app = scratch / 'app'
    js = app / 'js'
    host = app / 'internal'
    receipt = {'target': args.target, 'mode': mode, 'cases': {}, 'sources': {
        str(p.relative_to(root)): gate.digest(p) for p in sorted(experiment.rglob('*'))
        if p.is_file() and p.suffix in ('.inc', '.c', '.py', '.mjs', '.js', '.cjs', '.ts', '.mts', '.dart', '.yaml')},
        'packageSources': {p.name: gate.digest(p) for p in
                          sorted((experiment.parents[1] / 'js').iterdir()) if p.is_file()}}
    receipt['coreSources'] = {path: gate.digest(root / path) for path in [
        'packages/flax/lib/src/native/native_ffi.dart', 'packages/flax/lib/src/native/native_runtime.dart',
        'packages/flax/lib/src/ui/host.dart', 'packages/flax/lib/src/ui/async.dart',
        'packages/flax/lib/src/ui/session.dart', 'packages/flax_build/js/src/native-assets.mjs',
        'packages/flax_build/js/src/native-inputs.mjs',
        'packages/flax_build/js/src/native/build.dart', 'packages/flax_build/js/src/esbuild.mjs',
        'tool/ffi_bundle.mjs']}
    receipt['flutterFrameworkRevision'] = subprocess.check_output(
        ['git', 'rev-parse', 'HEAD'], cwd=args.flutter_root, text=True).strip()
    try:
        archive_dir = scratch / 'archives'
        archive_dir.mkdir()
        gate.run(['npm', 'pack', '--ignore-scripts', '--pack-destination', archive_dir],
                 experiment.parents[1] / 'js', env, output / 'npm-pack.log')
        archive, = archive_dir.glob('*.tgz')
        with tarfile.open(archive) as package:
            contents = package.getnames()
            if any(p.endswith(('.dart', 'pubspec.yaml')) for p in contents):
                raise RuntimeError('Developer package must contain no Dart')
        receipt['archive'] = {'sha256': gate.digest(archive), 'files': contents}
        gate.run([flutter, 'create', '--no-pub', '--platforms=macos,ios', '--org=dev.flax',
                  '--project-name=flax_ffi_dlopen', app], root, env, output / 'create.log')
        # Existing GC contracts connect to the local VM service in debug mode.
        entitlements = app / 'macos/Runner/DebugProfile.entitlements'
        settings = plistlib.loads(entitlements.read_bytes())
        settings['com.apple.security.network.client'] = True
        entitlements.write_bytes(plistlib.dumps(settings))
        shutil.rmtree(app / 'test')
        (app / 'pubspec.yaml').write_text('''name: flax_ffi_dlopen
publish_to: none
version: 1.0.0+1
environment:
  sdk: ^3.13.5
dependencies:
  flutter:
    sdk: flutter
  flax_ffi_dlopen_host:
    path: internal
dev_dependencies:
  flutter_lints: 6.0.0
flutter:
  assets:
    - assets/flax_modules/
''')
        shutil.copytree(root / 'examples/embedded/assets/flax_modules', app / 'assets/flax_modules')
        (app / 'analysis_options.yaml').write_text('''include: package:flutter_lints/flutter.yaml
analyzer:
  language:
    strict-casts: true
    strict-inference: true
    strict-raw-types: true
''')
        (app / 'lib/main.dart').write_text("import 'package:flax_ffi_dlopen_host/host.dart';\n"
                                          'Future<void> main() => runDlopenProbe();\n')
        shutil.copytree(experiment / 'internal', host)
        for name in ['gc.dart', 'engine_gc_contract.dart']:
            shutil.copyfile(root / 'packages/flax_test/lib/src' / name, host / 'lib' / name)
        (host / 'native').mkdir()
        fixture = experiment / 'native/fixture.c'
        shutil.copyfile(fixture, host / 'native/fixture.c')
        for source, name in [('packages/flax/lib/src/native/native_calls.dart', 'native_calls.dart'),
            ('packages/flax/lib/src/native/runtime_bindings.g.dart', 'runtime_bindings.g.dart')]:
            shutil.copyfile(root / source, host / 'lib' / name)
        # This host-owned archive is deliberately linked into the executable, not a framework.
        native = scratch / 'static'
        native.mkdir()
        ios = args.target == 'ios-simulator'
        sdk = subprocess.check_output(['xcrun', '--sdk', 'iphonesimulator' if ios else 'macosx',
                                       '--show-sdk-path'], text=True).strip()
        target = 'arm64-apple-ios16.3-simulator' if ios else 'arm64-apple-macos15.0'
        gate.run(['xcrun', 'clang', '-target', target, '-isysroot', sdk, '-std=c17', '-O2',
                  '-fvisibility=hidden', '-Wall', '-Wextra', '-Werror', '-c', fixture,
                  '-o', native / 'fixture.o'], root, env, output / 'static-compile.log')
        static_archive = native / 'libflax_static_fixture.a'
        gate.run(['xcrun', 'ar', 'rcs', static_archive, native / 'fixture.o'], root, env,
                 output / 'static-archive.log')
        symbols = re.findall(r'\bAPI\b[^\n]*?\bFN\((\w+)\)', fixture.read_text())
        if not symbols or len(symbols) != len(set(symbols)):
            raise RuntimeError('Invalid static fixture exports')
        project = app / ('ios' if ios else 'macos') / 'Runner.xcodeproj/project.pbxproj'
        root_static_library(project, static_archive, symbols)
        project_hash = gate.digest(project)
        receipt['staticArchiveSha256'] = gate.digest(static_archive)
        receipt['staticLink'] = {'forceLoad': True, 'rootedSymbols': ['flax_static_' + n for n in symbols]}
        (host / 'pubspec.yaml').write_text((host / 'pubspec.yaml').read_text() +
            '  flutter:\n    sdk: flutter\n  flax:\n    path: ' + str(root / 'packages/flax') + '\n')
        asset_package = scratch / 'native-fixture'
        (asset_package / 'native').mkdir(parents=True)
        (asset_package / 'native/add.c').write_text('__attribute__((visibility("default"))) int ffi_packaged_add(int a, int b) { return a+b; }\n')
        fixture_object = asset_package / 'native/add.o'
        prebuilt = asset_package / 'native/libprebuilt.dylib'
        gate.run(['xcrun', 'clang', '-target', target, '-isysroot', sdk, '-c', asset_package / 'native/add.c', '-o', fixture_object], root, env, output / 'asset-compile.log')
        gate.run(['xcrun', 'ar', 'rcs', asset_package / 'native/libstatic.a', fixture_object], root, env, output / 'asset-archive.log')
        gate.run(['xcrun', 'clang', '-target', target, '-isysroot', sdk, '-dynamiclib', asset_package / 'native/add.c', '-o', prebuilt], root, env, output / 'asset-prebuilt.log')
        variant = 'ios-arm64-simulator' if ios else 'macos-arm64'
        descriptors = []
        for kind in ['sources', 'static', 'dynamic']:
            lib = {'id': 'ffi-fixture/' + kind, 'kind': kind, 'targets': ['ios', 'macos']}
            if kind == 'sources': lib['sources'] = ['native/add.c']
            else: lib['binaries'] = {variant: 'native/' + ('libstatic.a' if kind == 'static' else 'libprebuilt.dylib')}
            descriptors.append(lib)
        framework = asset_package / 'native/Math.framework'
        framework.mkdir()
        shutil.copyfile(prebuilt, framework / 'Math')
        (framework / 'Info.plist').write_bytes(plistlib.dumps({'CFBundleExecutable': 'Math'}))
        descriptors.append({'id': 'ffi-fixture/framework', 'kind': 'dynamic', 'targets': ['ios', 'macos'],
                            'binaries': {variant: 'native/Math.framework'}})
        xcframework = asset_package / 'native/Math.xcframework'
        (xcframework / variant).mkdir(parents=True)
        shutil.copytree(framework, xcframework / variant / 'Math.framework')
        slice_info = {'LibraryIdentifier': variant, 'LibraryPath': 'Math.framework',
                      'SupportedArchitectures': ['arm64'], 'SupportedPlatform': 'ios' if ios else 'macos'}
        if ios: slice_info['SupportedPlatformVariant'] = 'simulator'
        (xcframework / 'Info.plist').write_bytes(plistlib.dumps({'AvailableLibraries': [slice_info]}))
        descriptors.append({'id': 'ffi-fixture/xcframework', 'kind': 'dynamic', 'targets': ['ios', 'macos'],
                            'xcframework': 'native/Math.xcframework'})
        cmake = asset_package / 'native/cmake'
        cmake.mkdir()
        shutil.copyfile(asset_package / 'native/add.c', cmake / 'add.c')
        (cmake / 'CMakeLists.txt').write_text('cmake_minimum_required(VERSION 3.20)\nproject(math C)\nadd_library(math STATIC add.c)\n')
        descriptors.append({'id': 'ffi-fixture/cmake', 'kind': 'cmake', 'targets': ['ios', 'macos'],
                            'cmake': {'directory': 'native/cmake', 'target': 'math', 'output': 'libmath.a'}})
        (asset_package / 'native/dependent.c').write_text(
            'extern int ffi_packaged_add(int,int); int ffi_dependent_add(int a,int b) { return ffi_packaged_add(a,b); }\n')
        gate.run(['xcrun', 'clang', '-target', target, '-isysroot', sdk, '-dynamiclib',
                  asset_package / 'native/dependent.c', prebuilt, '-o', asset_package / 'native/libdependent.dylib'],
                 root, env, output / 'asset-dependent.log')
        descriptors.append({'id': 'ffi-fixture/dependent', 'kind': 'dynamic', 'targets': ['ios', 'macos'],
                            'binaries': {variant: 'native/libdependent.dylib'}, 'dependencies': ['ffi-fixture/dynamic']})
        (asset_package / 'native.json').write_text(json.dumps({'formatVersion': 1, 'libraries': descriptors}))
        (asset_package / 'package.json').write_text(json.dumps({'name': '@flax/ffi-native-fixture', 'version': '1.0.0', 'type': 'module', 'sideEffects': False, 'flax': {'native': 'native.json'}, 'files': ['index.js','native.json','native']}))
        (asset_package / 'index.js').write_text('export const assets = ' + json.dumps([d['id'] for d in descriptors]) + ';\n')
        gate.run(['npm', 'pack', '--json', '--pack-destination', scratch], asset_package, env, output / 'native-fixture-pack.log')
        native_archive = next(scratch.glob('flax-ffi-native-fixture-*.tgz'))
        js.mkdir()
        for name in ['probe.js', 'memory-probe.js', 'buffer-probe.js',
                     'counter.js', 'counter-probe.js', 'async-probe.js', 'stress-config.js',
                     'buffer-memory-probe.js', 'buffer-consumer.cjs', 'complete-probe.js', 'contract-probe.js', 'resource-probe.js', 'ffi-consumer.cjs', 'session-probe.js', 'shutdown-probe.js']:
            shutil.copyfile(experiment / name, js / name)
        (js / 'stress-config.js').write_text(f'export const stressMilliseconds = {args.stress_seconds * 1000};\n')
        receipt['stressSeconds'] = args.stress_seconds
        installed = None
        types_checked = False
        pub_ready = False
        for case in args.cases:
            dependencies = ({} if case == 'absent' else {'buffer': '6.0.3'} if case == 'buffer-only'
                            else {'@flax/ffi': 'file:' + str(archive)})
            if case == 'used': dependencies['@flax/ffi-native-fixture'] = 'file:' + str(native_archive)
            if dependencies != installed:
                (js / 'package.json').write_text(json.dumps({'name': 'ffi-consumer',
                    'version': '1.0.0', 'private': True, 'type': 'module',
                    'dependencies': dependencies}))
                if case == 'absent':
                    shutil.rmtree(js / 'node_modules', ignore_errors=True)
                else:
                    gate.run(['npm', 'install', '--offline', '--ignore-scripts', '--no-audit', '--no-fund'],
                             js, env, output / f'{case}-npm-install.log')
                installed = dependencies
            if '@flax/ffi' in dependencies and not types_checked:
                source = (experiment / 'typecheck.mts').read_text()
                source += "\nimport { Buffer as BareBuffer } from 'buffer';\nconst sameBuffer: typeof NodeBuffer = BareBuffer;\nvoid sameBuffer;\n"
                (js / 'typecheck.mts').write_text(source)
                (js / 'types').mkdir(exist_ok=True)
                gate.run(['node', root / 'node_modules/typescript/bin/tsc', '--strict', '--noEmit',
                          '--target', 'ES2022', '--module', 'NodeNext', '--moduleResolution', 'NodeNext',
                          '--typeRoots', './types', 'typecheck.mts'], js, env,
                         output / 'typecheck.log')
                types_checked = True
                package_lock = json.loads((js / 'package-lock.json').read_text())['packages']
                receipt['bufferDependencies'] = {name: package_lock['node_modules/' + name]
                    for name in ['buffer', 'base64-js', 'ieee754']}
            entry = case + '.js' if case in ['used', 'ffi-only', 'ffi-buffer-only', 'buffer-only'] else 'unused.js'
            script = (experiment / entry).read_text()
            if case == 'tree-shaken':
                script = ("import { Buffer as FfiBuffer, DynamicLibrary, dlopen, toBuffer } from '@flax/ffi';\n"
                          "import { Buffer } from 'node:buffer';\n" + script)
            (js / 'index.js').write_text(script)
            gate.run(['node', experiment / 'bundle.mjs', js, host, output / f'{case}-bundle.js', str(case == 'used').lower()], root, env,
                     output / f'{case}-bundle.log')
            selection = json.loads((host / 'selection.json').read_text())
            expected = case in ['used', 'ffi-only']
            if selection['enabled'] != expected: raise RuntimeError('Wrong retained FFI selection')
            if selection['bufferEnabled'] != (case in ['used', 'ffi-buffer-only', 'buffer-only']):
                raise RuntimeError('Wrong retained Buffer selection')
            removed = [] if expected else remove_withdrawn_fixture(app / 'build')
            if not pub_ready:
                gate.run([flutter, 'pub', 'get', '--offline'], app, env, output / 'pub-get.log')
                pub_ready = True
            gate.run([dart, 'format', 'lib', 'internal/lib', 'internal/hook'], app, env,
                     output / f'{case}-format.log')
            gate.run([dart, 'analyze', '--fatal-infos', 'lib/main.dart', 'internal/lib/host.dart',
                      'internal/lib/selection.g.dart', 'internal/hook/build.dart'], app, env,
                     output / f'{case}-analyze.log')
            name = 'flax_ios_debug_sim_arm64' if ios else 'flax_mac_' + mode
            target_engine = 'ffi_' + name + ('' if ios else '_arm64')
            engine_build = json.loads((args.engine_output / name / 'build.json').read_text())
            framework_revision = subprocess.check_output(
                ['git', 'rev-parse', 'HEAD'], cwd=args.flutter_root, text=True).strip()
            if (framework_revision != receipt['flutterFrameworkRevision'] or
                    framework_revision != engine_build['revision']):
                raise RuntimeError('Flutter framework revision differs from the engine; use matching_sdk.py')
            for path, recorded in engine_build.get('nativeSources', {}).items():
                owning = Path(engine_build['engineSource']) / 'flutter/flax/native' / path
                if gate.digest(owning) != recorded:
                    raise RuntimeError('Stale maintained engine source: ' + path)
            for path, recorded in engine_build['extensionFiles'].items():
                if path in ['ffi-script.inc', 'javascript-dependencies.json']:
                    owning = args.engine_output / 'extension-input' / path
                    if gate.digest(owning) != recorded: raise RuntimeError('Stale embedded FFI JavaScript')
                    continue
                owning = experiment / 'native' / path
                if not owning.exists():
                    owning = Path(engine_build['engineSource']) / 'flutter/flax/native/src/ffi' / path
                if gate.digest(owning) != recorded: raise RuntimeError('Stale dlopen engine source')
            for path, recorded in engine_build.get('javascriptSources', {}).items():
                if gate.digest(experiment.parents[1] / 'js' / path) != recorded:
                    raise RuntimeError('Stale isolated-callback JavaScript source: ' + path)
            engine_source = args.engine_output / 'engine-src'
            command = [flutter, f'--local-engine-src-path={engine_source}',
                f'--local-engine={target_engine}', f'--local-engine-host=ffi_flax_mac_{mode}_arm64',
                'build', 'ios' if ios else 'macos', '--' + mode, '--no-pub']
            if ios: command.extend(['--simulator', '--no-codesign'])
            gate.run(command, app, env, output / f'{case}-build.log')
            if ios:
                bundle = app / 'build/ios/iphonesimulator/Runner.app'
                executable = bundle / 'Runner'
                identity = plistlib.loads((bundle / 'Info.plist').read_bytes())['CFBundleIdentifier']
                gate.run(['xcrun', 'simctl', 'install', args.simulator, bundle], app, env,
                         output / f'{case}-install.log')
                try:
                    result = gate.launch(['xcrun', 'simctl', 'launch', '--console-pty',
                        '--terminate-running-process', args.simulator, identity], env,
                        output / f'{case}-run.log', 'FLAX_FFI_DLOPEN_RESULT ')
                finally:
                    subprocess.run(['xcrun', 'simctl', 'terminate', args.simulator, identity],
                                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                    subprocess.run(['xcrun', 'simctl', 'uninstall', args.simulator, identity],
                                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                binary = 'Flutter.framework/Flutter'
                packaged = bundle / 'Frameworks' / binary
            else:
                bundle, = (app / f'build/macos/Build/Products/{mode.capitalize()}').glob('*.app')
                executable = bundle / 'Contents/MacOS/flax_ffi_dlopen'
                result = gate.launch([executable], env, output / f'{case}-run.log',
                                     'FLAX_FFI_DLOPEN_RESULT ')
                binary = 'FlutterMacOS.framework/Versions/A/FlutterMacOS'
                packaged = bundle / 'Contents/Frameworks' / binary
            if 'error' in result: raise RuntimeError(result['error'])
            original = engine_source / 'out' / target_engine / binary
            if gate.binary_uuids(original) != gate.binary_uuids(packaged):
                raise RuntimeError('Packaged engine differs from the selected overlay')
            if result['engineNamespace'] != (1 if ios else 2): raise RuntimeError('Wrong JS engine')
            exported = subprocess.check_output(['xcrun', 'nm', '-gU', executable], text=True)
            if any('_flax_static_' + name not in exported for name in symbols):
                raise RuntimeError('A static process symbol was stripped')
            dependencies = subprocess.check_output(['xcrun', 'otool', '-L', executable], text=True)
            if 'flax_ffi_dlopen_fixture' in dependencies:
                raise RuntimeError('The dynamic fixture must be loaded by JS, not linked at startup')
            native = sorted({p.resolve() for p in bundle.rglob('flax_ffi_dlopen_fixture') if p.is_file()})
            if len(native) != int(expected): raise RuntimeError('Unexpected dynamic fixture packaging')
            if not expected and not result['ffiAbsent']: raise RuntimeError('Unexpected FFI installation')
            if gate.digest(project) != project_hash: raise RuntimeError('Selection changed the host project')
            receipt['cases'][case] = {**result, 'selection': selection, 'executed': True,
                'dynamicBinaryBytes': sum(p.stat().st_size for p in native),
                'engineSha256': gate.digest(original), 'engineRevision': engine_build['revision'],
                'libffi': engine_build['libffi'], 'nativeProjectStable': True,
                'removedArtifacts': [str(Path(p).relative_to(app)) for p in removed]}
            (output / 'receipt.json').write_text(json.dumps(receipt, indent=2) + '\n')
            print(json.dumps({'target': args.target, 'mode': mode, 'case': case, **result}), flush=True)
    finally:
        shutil.rmtree(scratch)


if __name__ == '__main__':
    main()
