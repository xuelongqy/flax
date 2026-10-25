#!/usr/bin/env python3
"""Exercise packed codegen/FFI packages, automatic native assets and real Session GC."""
import argparse
import json
import os
from pathlib import Path
import plistlib
import re
import shutil
import subprocess
import sys
import tarfile
import tempfile

ROOT = Path(__file__).resolve().parents[4]
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / 'packages/flax_ffi/test/runtime'))
import support as gate


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', type=Path, required=True)
    parser.add_argument('--engine-output', type=Path, required=True)
    parser.add_argument('--target', choices=['macos', 'ios-simulator'], required=True)
    parser.add_argument('--simulator')
    args = parser.parse_args()
    ios = args.target == 'ios-simulator'
    if ios and not args.simulator:
        parser.error('--simulator is required')
    output = ROOT / '.local/ffi-codegen/formal-runtime' / args.target
    output.mkdir(parents=True, exist_ok=True)
    scratch_root = ROOT / '.local/tmp'
    scratch_root.mkdir(parents=True, exist_ok=True)
    scratch = Path(tempfile.mkdtemp(prefix='ffi-codegen-package-', dir=scratch_root))
    env = dict(os.environ, TMPDIR=str(scratch), TMP=str(scratch), TEMP=str(scratch),
               FLAX_CHECK_TARGET='ios-simulator-arm64' if ios else 'macos-arm64',
               npm_config_cache=str(ROOT / '.local/ffi-codegen/npm-cache'))
    env.pop('FLAX_TARGET', None)
    matching = json.loads((args.flutter_root / '.flax-ffi-sdk.json').read_text())
    env['FLUTTER_PREBUILT_ENGINE_VERSION'] = matching['prebuiltEngineVersion']
    flutter = args.flutter_root / 'bin/flutter'
    app, project = scratch / 'app', scratch / 'app/js'
    identity = None
    try:
        archives = scratch / 'archives'
        archives.mkdir()
        archive_info = {}
        for name in ['ffi', 'ffi-codegen']:
            package = ROOT / ('packages/flax_' + name.replace('-', '_') + '/js')
            gate.run(['npm', 'pack', '--ignore-scripts', '--pack-destination', archives], package, env, output / f'{name}-pack.log')
            archive, = archives.glob('flax-' + name + '-*.tgz')
            with tarfile.open(archive) as tgz:
                files = tgz.getnames()
                assert not any(p.endswith(('.dart', 'pubspec.yaml', '.tar.gz')) for p in files)
            archive_info[name] = {'path': archive, 'sha256': gate.digest(archive), 'files': files}
        gate.run([flutter, 'create', '--no-pub', '--platforms=macos,ios', '--org=dev.flax',
                  '--project-name=flax_codegen_package', app], ROOT, env, output / 'create.log')
        shutil.rmtree(app / 'test')
        (app / 'analysis_options.yaml').write_text('analyzer:\n  errors:\n    implementation_imports: ignore\n')
        (app / 'pubspec.yaml').write_text(f'''name: flax_codegen_package
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
        project.mkdir()
        shutil.copyfile(HERE / 'probe.mjs', project / 'probe.mjs')
        shutil.copytree(HERE.parent / 'native', project / 'native')
        (project / 'package.json').write_text(json.dumps({'name': 'ffi-codegen-fixture', 'private': True,
            'type': 'module', 'dependencies': {'@flax/ffi': 'file:' + str(archive_info['ffi']['path'])},
            'devDependencies': {'@flax/ffi-codegen': 'file:' + str(archive_info['ffi-codegen']['path'])},
            'flax': {'native': 'native.json'}}))
        (project / 'native.json').write_text(json.dumps({'formatVersion': 1, 'libraries': [{
            'id': 'ffi-codegen-fixture/native', 'kind': 'sources', 'targets': ['macos', 'ios'],
            'sources': ['native/api.c'], 'headers': ['native/api.h'],
            'defines': {'CG_CONFIG_WIDTH': '16'}, 'flags': ['-O2', '-fshort-enums'],
            'codegen': {'output': 'generated/fixture', 'functions': ['cg_*'], 'globals': ['cg_global'],
                'enums': ['CG_*'], 'constants': ['CG_MAGIC', 'CG_BIG', 'CG_TARGET_BYTES', 'CG_CONFIG_BYTES'],
                'variadic': {'cg_variadic': ['int32', 'int32']}, 'resources': {
                    'Counter': {'create': 'cg_counter_create', 'destroy': 'cg_counter_destroy', 'methods': {'add': 'cg_counter_add', 'visit': 'cg_counter_visit'}},
                    'Pair': {'create': 'cg_counter_create_pair', 'destroy': 'cg_counter_destroy', 'methods': {'add': {'symbol': 'cg_counter_add_last', 'receiver': 1}}}}}}, {
            'id': 'ffi-codegen-fixture/cmake', 'kind': 'cmake', 'language': 'c++', 'targets': ['macos', 'ios'],
            'headers': ['native/cmake/api.h'], 'includes': ['native/cmake'],
            'cmake': {'directory': 'native/cmake', 'target': 'codegen_cmake', 'output': 'libcodegen_cmake.dylib',
                      'defines': {'FLAX_TEST_ABI_MISMATCH': 'OFF', 'FLAX_TEST_CHAR_ABI_MISMATCH': 'OFF'}},
            'defines': {'CM_CONFIG_VALUE': '42'}, 'flags': ['-O2'],
            'codegen': {'output': 'generated/cmake', 'functions': ['cm_*']}}]}))
        gate.run(['npm', 'install', '--ignore-scripts', '--no-audit', '--no-fund'], project, env, output / 'npm-install.log')
        for run in ['first', 'cached']:
            gate.run(['node', HERE / 'bundle.mjs', project, app / 'assets/codegen.js'], ROOT, env, output / f'{run}-bundle.log')
        selection = json.loads((project / 'selection.json').read_text())
        assert selection['sqliteCached']
        assert selection['profile']['target'] == ('ios-arm64-simulator' if ios else 'macos-arm64')
        generated = project / 'generated'
        gate.run(['node', ROOT / 'node_modules/typescript/bin/tsc', '--strict', '--noEmit', '--target', 'ES2022',
                  '--module', 'NodeNext', '--moduleResolution', 'NodeNext', '--types', '',
                  generated / 'fixture/definitions.g.ts', generated / 'fixture/bindings.g.ts',
                  generated / 'sqlite/definitions.g.ts', generated / 'sqlite/bindings.g.ts',
                  generated / 'cmake/definitions.g.ts', generated / 'cmake/bindings.g.ts'], ROOT, env, output / 'typecheck.log')
        # The test engine and application require these minimums; profile compilation is explicit.
        xcode = app / ('ios' if ios else 'macos') / 'Runner.xcodeproj/project.pbxproj'
        source = xcode.read_text()
        source = re.sub(r'IPHONEOS_DEPLOYMENT_TARGET = [^;]+;', 'IPHONEOS_DEPLOYMENT_TARGET = 16.3;', source)
        source = re.sub(r'MACOSX_DEPLOYMENT_TARGET = [^;]+;', 'MACOSX_DEPLOYMENT_TARGET = 15.0;', source)
        xcode.write_text(source)
        gate.run([flutter, 'pub', 'get', '--offline'], app, env, output / 'pub-get.log')
        gate.run([args.flutter_root / 'bin/dart', 'format', 'lib/main.dart', '.flax/ffi_assets/hook/build.dart'], app, env, output / 'format.log')
        gate.run([args.flutter_root / 'bin/dart', 'analyze', '--fatal-infos', 'lib/main.dart', '.flax/ffi_assets/hook/build.dart'], app, env, output / 'analyze.log')
        missing_cmake = app / '.flax/ffi_assets/check_cmake.dart'
        missing_cmake.write_text('''import 'hook/build.dart' as native;
Future<void> main() async {
  try {
    await native.command('cmake', ['--version']);
  } on StateError catch (error) {
    if (error.message.toString().contains('Install CMake 3.24')) return;
    rethrow;
  }
  throw StateError('Expected installation guidance for missing CMake');
}
''')
        empty_path = scratch / 'empty-path'
        empty_path.mkdir()
        gate.run([args.flutter_root / 'bin/dart', '--packages=.dart_tool/package_config.json', missing_cmake],
                 app, {**env, 'PATH': str(empty_path)}, output / 'missing-cmake.log')
        missing_cmake.unlink()
        engine_name = 'flax_ios_debug_sim_arm64' if ios else 'flax_mac_debug'
        engine = 'ffi_' + engine_name + ('' if ios else '_arm64')
        engine_receipt = json.loads((args.engine_output / engine_name / 'build.json').read_text())
        revision = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=args.flutter_root, text=True).strip()
        if revision != engine_receipt['revision']:
            raise RuntimeError('Flutter framework does not match selected engine')
        engine_source = args.engine_output / 'engine-src'
        command = [flutter, f'--local-engine-src-path={engine_source}', f'--local-engine={engine}',
                   '--local-engine-host=ffi_flax_mac_debug_arm64', 'build', 'ios' if ios else 'macos', '--debug', '--no-pub']
        if ios:
            command.extend(['--simulator', '--no-codesign'])
        gate.run(command, app, env, output / 'build.log')
        if ios:
            bundle = app / 'build/ios/iphonesimulator/Runner.app'
            identity = plistlib.loads((bundle / 'Info.plist').read_bytes())['CFBundleIdentifier']
            gate.run(['xcrun', 'simctl', 'install', args.simulator, bundle], ROOT, env, output / 'install.log')
            launch = ['xcrun', 'simctl', 'launch', '--console-pty', '--terminate-running-process', args.simulator, identity]
            binary = 'Flutter.framework/Flutter'
            packaged = bundle / 'Frameworks' / binary
        else:
            bundle, = (app / 'build/macos/Build/Products/Debug').glob('*.app')
            launch = [bundle / 'Contents/MacOS/flax_codegen_package']
            binary = 'FlutterMacOS.framework/Versions/A/FlutterMacOS'
            packaged = bundle / 'Contents/Frameworks' / binary
        original = engine_source / 'out' / engine / binary
        assert gate.binary_uuids(original) == gate.binary_uuids(packaged)
        result = gate.launch(launch, env, output / 'run.log', 'FLAX_FFI_CODEGEN_RESULT ')
        if 'error' in result:
            raise RuntimeError(result['error'])
        plan_file = app / '.flax/ffi_assets/native-plan.json'
        plan = json.loads(plan_file.read_text())
        for option, log in [('FLAX_TEST_ABI_MISMATCH', 'cmake-abi-mismatch.log'),
                            ('FLAX_TEST_CHAR_ABI_MISMATCH', 'cmake-char-mismatch.log')]:
            bad_cmake = {**plan, 'libraries': [
                {**lib, 'cmake': {**lib['cmake'], 'defines': {**lib['cmake']['defines'], option: 'ON'}}}
                if lib['kind'] == 'cmake' else lib for lib in plan['libraries']]}
            plan_file.write_text(json.dumps(bad_cmake))
            mismatch = subprocess.run(list(map(str, command)), cwd=app, env=env, text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            (output / log).write_text(mismatch.stdout)
            assert mismatch.returncode != 0 and 'FFI header ABI or calling convention changed' in mismatch.stdout, mismatch.stdout[-6000:]
        wrong = {**plan, 'profile': {**plan['profile'], 'target': 'macos-arm64' if ios else 'ios-arm64-device'}}
        plan_file.write_text(json.dumps(wrong))
        mismatch = subprocess.run(list(map(str, command)), cwd=app, env=env, text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        (output / 'mismatch.log').write_text(mismatch.stdout)
        assert mismatch.returncode != 0 and 'does not match Flutter target' in mismatch.stdout, mismatch.stdout[-6000:]
        receipt = {'target': args.target, 'engine': 'Hermes' if ios else 'V8', 'result': result,
            'frameworkRevision': revision, 'engineSha256': gate.digest(original), 'engineUuid': gate.binary_uuids(packaged),
            'archives': {name: {k:v for k,v in info.items() if k != 'path'} for name,info in archive_info.items()},
            'profile': plan['profile'], 'nativeLibraries': len(plan['libraries']), 'wrongTargetRejected': True,
            'cmakeAbiMismatchRejected': True,
            'cmakeCharAbiMismatchRejected': True,
            'missingCmakeGuidance': True,
            'generatorAbsentFromRuntime': True, 'sqliteIncrementalCache': True,
            'generatedSha256': {str(p.relative_to(generated)): gate.digest(p) for p in generated.rglob('*.g.ts')},
            'sourceSha256': {str(p.relative_to(ROOT)): gate.digest(p) for p in HERE.parent.rglob('*') if p.is_file() and (p.suffix in ('.mjs','.py','.h','.c','.cpp','.dart') or p.name == 'CMakeLists.txt')}}
        (output / 'receipt.json').write_text(json.dumps(receipt, indent=2) + '\n')
        print(json.dumps({'target': args.target, **result, 'wrongTargetRejected': True}), flush=True)
    finally:
        if identity:
            for action in ['terminate', 'uninstall']:
                subprocess.run(['xcrun', 'simctl', action, args.simulator, identity], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        shutil.rmtree(scratch)


if __name__ == '__main__':
    main()
