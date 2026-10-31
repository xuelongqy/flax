#!/usr/bin/env python3
"""Build and verify the isolated macOS arm64 Dawn/Flax experiment."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import plistlib
import shutil
import subprocess
import tarfile
import urllib.request

DAWN_TAG = 'v20261026.205545'
DAWN_REVISION = '5fbd545292cb7a4a9a275e322abec6007ffe2ae8'
DAWN_ARCHIVE = f'Dawn-{DAWN_REVISION}-macos-latest-Release.tar.gz'
DAWN_SHA256 = '8eed5796e1c3403515c331a098fc9e8b5b738f832d9736be6843db891235c92b'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', type=Path,
                        default=Path('/Volumes/MAC_HOME/Develop/Flutter/flutter'))
    parser.add_argument('--build-only', action='store_true')
    parser.add_argument('--preview', action='store_true')
    parser.add_argument('--engine-name', default='flax_mac_release_arm64')
    args = parser.parse_args()
    experiment = Path(__file__).resolve().parent
    root = experiment.parents[1]
    output = root / '.local/webgpu-dawn'
    output.mkdir(parents=True, exist_ok=True)
    temporary = root / '.local/tmp'
    temporary.mkdir(parents=True, exist_ok=True)
    env = dict(os.environ, TMPDIR=str(temporary), TMP=str(temporary), TEMP=str(temporary))
    env.pop('FLUTTER_ENGINE', None)
    flutter = args.flutter_root / 'bin/flutter'
    dart = args.flutter_root / 'bin/dart'
    engine = args.flutter_root / 'engine/src'
    engine_name = args.engine_name
    framework = engine / 'out' / engine_name / 'FlutterMacOS.framework'
    symbols = subprocess.check_output(['nm', '-gU', framework / 'Versions/A/FlutterMacOS'], text=True)
    if '_flax_engine_get_modules_api' not in symbols:
        raise RuntimeError('Selected engine lacks the current ESM extension; see experiments/webgpu_dawn/README.md')
    if '_flax_webgpu_interop_version' not in symbols:
        raise RuntimeError('Selected engine lacks maintained macOS WebGPU interop profile 1')

    def run(command, name, cwd=root, timeout=900):
        print(f'> {name}', flush=True)
        with (output / f'{name}.log').open('w') as log:
            result = subprocess.run([str(c) for c in command], cwd=cwd, env=env,
                                    stdout=log, stderr=subprocess.STDOUT, timeout=timeout)
        if result.returncode:
            print((output / f'{name}.log').read_text()[-10000:])
            raise RuntimeError(f'{name} failed: exit {result.returncode}')

    run(['pnpm', '--reporter=append-only', '--workspace-concurrency=1',
         '--filter', '@flax/core-runtime...', 'run', 'build'], 'core-js-build')

    sdk = output / 'sdk'
    sdk.mkdir(exist_ok=True)
    archive = sdk / 'dawn.tar.gz'
    if not archive.exists():
        urllib.request.urlretrieve(
            f'https://github.com/google/dawn/releases/download/{DAWN_TAG}/{DAWN_ARCHIVE}', archive)
    digest = hashlib.sha256(archive.read_bytes()).hexdigest()
    if digest != DAWN_SHA256:
        raise RuntimeError('Dawn archive SHA-256 does not match the official release digest')
    if not (sdk / 'include/dawn/webgpu_cpp.h').exists():
        with tarfile.open(archive) as tar:
            tar.extractall(sdk, filter='data')
        unpacked = sdk / DAWN_ARCHIVE.removesuffix('.tar.gz')
        for entry in unpacked.iterdir():
            shutil.move(entry, sdk / entry.name)
        unpacked.rmdir()

    build = output / 'native-build'
    run(['cmake', '-S', experiment / 'native', '-B', build, '-G', 'Ninja',
         '-DCMAKE_BUILD_TYPE=Release', '-DCMAKE_OSX_ARCHITECTURES=arm64',
         '-DCMAKE_OSX_DEPLOYMENT_TARGET=26.0', f'-DCMAKE_PREFIX_PATH={sdk}',
         f'-DFLUTTER_FRAMEWORK={engine}/out/{engine_name}/FlutterMacOS.framework'], 'native-configure')
    run(['cmake', '--build', build, '-j', '4'], 'native-build')
    exported = subprocess.check_output(['nm', '-gU', build / 'libflax_dawn_probe.dylib'], text=True)
    if any(not line.split()[-1].startswith('_dawn_probe_') for line in exported.splitlines() if line.strip()):
        raise RuntimeError('The probe dylib exposes implementation symbols to Flutter')
    run([build / 'dawn_self_check'], 'native-compute', timeout=60)
    compute = json.loads((output / 'native-compute.log').read_text().strip().splitlines()[-1])
    (output / 'native-compute.json').write_text(json.dumps(compute, indent=2) + '\n')

    app = output / 'app'
    if not (app / 'macos').exists():
        run([flutter, 'create', '--no-pub', '--platforms=macos', '--org=dev.flax',
             '--project-name=flax_dawn_probe', app], 'create-app')
    stage = output / 'stage.dart'
    stage.write_text(f"import 'dart:io';\nimport '{(root / 'tool/src/package_verification.dart').as_uri()}';\n"
                     f"void main() => copyDartPackages(Directory({json.dumps(str(root))}), "
                     f"Directory({json.dumps(str(output / 'packages'))}), ['flax']);\n")
    run([dart, f'--packages={root}/.dart_tool/package_config.json', stage], 'stage-core')
    (app / 'pubspec.yaml').write_text('''name: flax_dawn_probe
publish_to: none
environment:
  sdk: ^3.13.5
dependencies:
  flutter:
    sdk: flutter
  flax:
    path: ../packages/flax
flutter:
  uses-material-design: true
  assets:
    - assets/scene.js
    - assets/flax_modules/
''')
    assets = app / 'assets'
    assets.mkdir(exist_ok=True)
    config = output / 'flax.modules.json'
    config.write_text(json.dumps({
        'formatVersion': 1, 'flutterProject': 'app', 'output': 'assets/flax_modules',
        'modules': [{'specifier': name, 'package': '@flax/core-runtime'}
                    for name in ['@flax/core', '@flax/core/host',
                                 '@flax/core/navigation', '@flax/flutter/widgets']],
    }))
    bundle = output / 'bundle.mjs'
    bundle.write_text(f"import {{build}} from {json.dumps((root / 'node_modules/esbuild/lib/main.js').as_uri())};\n"
                      f"import {{prepareModules}} from {json.dumps((root / 'packages/flax_build/js/src/modules.mjs').as_uri())};\n"
                      f"await prepareModules({{configPath:{json.dumps(str(config))}}});\n"
                      f"await build({{entryPoints:[{json.dumps(str(experiment / 'scene.js'))}],"
                      f"outfile:{json.dumps(str(assets / 'scene.js'))},bundle:true,format:'iife',"
                      "platform:'neutral',target:'es2022'});\n")
    run(['node', bundle], 'bundle-js')
    shutil.copyfile(experiment / 'app.dart', app / 'lib/main.dart')
    shutil.copyfile(experiment / 'MainFlutterWindow.swift', app / 'macos/Runner/MainFlutterWindow.swift')
    project = app / 'macos/Runner.xcodeproj/project.pbxproj'
    import re
    project.write_text(re.sub(r'MACOSX_DEPLOYMENT_TARGET = [^;]+;',
                             'MACOSX_DEPLOYMENT_TARGET = 26.0;', project.read_text()))
    for name in ['DebugProfile', 'Release']:
        path = app / f'macos/Runner/{name}.entitlements'
        entitlements = plistlib.loads(path.read_bytes())
        entitlements['com.apple.security.app-sandbox'] = False
        entitlements['com.apple.security.cs.allow-jit'] = True
        path.write_bytes(plistlib.dumps(entitlements))
    run([flutter, 'pub', 'get'], 'app-pub', cwd=app)
    run([dart, 'analyze', 'lib/main.dart'], 'app-analyze', cwd=app)
    run([flutter, f'--local-engine-src-path={engine}', f'--local-engine={engine_name}',
         f'--local-engine-host={engine_name}', 'build', 'macos', '--release', '--no-pub',
         f'--dart-define=DAWN_PROBE_OUTPUT={output}',
         f'--dart-define=DAWN_PROBE_PREVIEW={str(args.preview).lower()}'], 'app-build', cwd=app)
    product = app / 'build/macos/Build/Products/Release/flax_dawn_probe.app'
    shutil.copyfile(build / 'libflax_dawn_probe.dylib', product / 'Contents/Frameworks/libflax_dawn_probe.dylib')
    run(['codesign', '--force', '--sign', '-', product / 'Contents/Frameworks/libflax_dawn_probe.dylib'], 'sign-dawn')
    run(['codesign', '--force', '--sign', '-', '--entitlements', app / 'macos/Runner/Release.entitlements', product], 'sign-app')
    artifact = output / 'FlaxDawnProbe.app'
    if artifact.exists():
        shutil.rmtree(artifact)
    shutil.copytree(product, artifact, symlinks=True)
    packaged_engine = artifact / 'Contents/Frameworks/FlutterMacOS.framework/Versions/A/FlutterMacOS'
    if '_flax_engine_get_modules_api' not in subprocess.check_output(['nm', '-gU', packaged_engine], text=True):
        raise RuntimeError('Packaged engine lost its ESM extension')
    provenance = {
        'dawnTag': DAWN_TAG, 'dawnRevision': DAWN_REVISION, 'dawnArchiveSha256': digest,
        'flaxRevision': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root, text=True).strip(),
        'flutterRevision': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=args.flutter_root, text=True).strip(),
        'minimumMacOS': '26.0', 'engine': engine_name,
        'nativeLibraryBytes': (build / 'libflax_dawn_probe.dylib').stat().st_size,
        'packagedEngineSha256': hashlib.sha256(packaged_engine.read_bytes()).hexdigest(),
        'engineOverlay': overlay,
        'probeSourcesSha256': {str(path.relative_to(experiment)): hashlib.sha256(path.read_bytes()).hexdigest()
                              for path in sorted(experiment.rglob('*')) if path.is_file() and
                              (path.suffix in {'.py', '.dart', '.js', '.mjs', '.html', '.wgsl', '.swift', '.mm', '.cc', '.h', '.patch', '.txt'} or path.name == 'CMakeLists.txt')},
        'executable': str(artifact / 'Contents/MacOS/flax_dawn_probe'),
    }
    (output / 'provenance.json').write_text(json.dumps(provenance, indent=2) + '\n')
    print(f'Built: {provenance["executable"]}')
    if not args.build_only:
        (output / 'application.json').unlink(missing_ok=True)
        run([provenance['executable']], 'application', timeout=3600 if args.preview else 90)
        result = json.loads((output / 'application.json').read_text())
        if not result['passed']:
            raise RuntimeError('Application checks failed')
        print('PASS: WGSL compute, Flax JS frames, Flutter texture composition, three close/recreate cycles')


if __name__ == '__main__':
    main()
