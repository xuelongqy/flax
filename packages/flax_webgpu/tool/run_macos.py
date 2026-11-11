#!/usr/bin/env python3
"""Build the WebGPU studio, acceptance, or benchmark with the maintained local engine and normal native assets."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import plistlib
import re
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[3]
PACKAGE = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--flutter-root', type=Path, required=True)
    parser.add_argument('--sdk', type=Path, help='Explicit producer preparation using the pinned Dawn SDK')
    parser.add_argument('--cts-root', type=Path, help='Run the bounded pinned CTS groups in acceptance')
    parser.add_argument('--preview', action='store_true')
    parser.add_argument('--build-only', action='store_true')
    parser.add_argument('--benchmark', action='store_true', help='Build the matched standard-API benchmark instead of acceptance')
    parser.add_argument('--three-worker-benchmark', action='store_true', help='Build the matched Three.js main/Worker benchmark')
    parser.add_argument('--video', type=Path, metavar='FIXTURE',
                        help='Validate Flutter SDR video frames with raw WebGPU and Three.js')
    parser.add_argument('--example', action='store_true', help='Build the interactive Spectrum studio')
    parser.add_argument('--mode', choices=['debug', 'release'], default='release')
    parser.add_argument('--cycles', type=int, default=3, help='Bounded acceptance Session count (1..30)')
    args = parser.parse_args()
    video = args.video is not None
    if not 1 <= args.cycles <= 30:
        parser.error('--cycles must be between 1 and 30')
    if args.cycles != 3 and (args.example or args.benchmark or args.three_worker_benchmark or video or args.preview):
        parser.error('--cycles applies to acceptance')
    if sum([args.example, args.benchmark, args.three_worker_benchmark, video]) > 1:
        parser.error('--example, --benchmark, --three-worker-benchmark and --video are exclusive')
    if (args.benchmark or args.three_worker_benchmark or video) and args.preview:
        parser.error('benchmark and video modes do not support --preview')
    if (args.three_worker_benchmark or video) and args.cts_root:
        parser.error('--cts-root applies to standard API acceptance')
    if video and not args.video.is_file():
        parser.error('--video requires a local fixture file')
    support_packages = [] if args.benchmark or video else ['flax_example_support']
    output = ROOT / ('.local/webgpu-three-worker-benchmark' if args.three_worker_benchmark else '.local/webgpu-studio' if args.example else '.local/webgpu-api-benchmark' if args.benchmark else '.local/webgpu-api')
    dart_entry = ROOT/'experiments/webgpu_dawn/three_worker/app.dart' if args.three_worker_benchmark else ROOT/'experiments/webgpu_dawn/standard_api/app.dart' if args.benchmark else PACKAGE/('example/app/lib/main.dart' if args.example else 'example/app/lib/acceptance.dart')
    js_entry = ROOT/'experiments/webgpu_dawn/three_worker/flax.mjs' if args.three_worker_benchmark else ROOT/'experiments/webgpu_dawn/standard_api/flax.mjs' if args.benchmark else PACKAGE/('example/js/src/main.ts' if args.example else 'example/js/main.js')
    if video:
        output = ROOT / '.local/webgpu-video'
        dart_entry = PACKAGE / 'example/app/lib/video.dart'
        js_entry = PACKAGE / 'example/js/video.js'
    output.mkdir(parents=True, exist_ok=True)
    temporary = ROOT / '.local/tmp'
    temporary.mkdir(exist_ok=True)
    env = dict(os.environ, TMPDIR=str(temporary), TMP=str(temporary), TEMP=str(temporary),
               PATH=str(args.flutter_root / 'bin') + ':' + os.environ['PATH'])
    env['FLAX_WEBGPU_CYCLES'] = str(args.cycles)
    if video:
        env['FLAX_WEBGPU_VIDEO_FILE'] = str(args.video.resolve())
    flutter = args.flutter_root / 'bin/flutter'
    dart = args.flutter_root / 'bin/dart'
    engine = args.flutter_root / 'engine/src'
    engine_name = f'flax_mac_{args.mode}_arm64'
    app = output / 'app'
    product = app / f'build/macos/Build/Products/{args.mode.capitalize()}/flax_webgpu_example.app'
    def run(command, name, cwd=ROOT, timeout=900):
        print(f'> {name}', flush=True)
        with (output / f'{name}.log').open('w') as log:
            result = subprocess.run([str(c) for c in command], cwd=cwd, env=env,
                                    stdout=log, stderr=subprocess.STDOUT, timeout=timeout)
        if result.returncode:
            print((output / f'{name}.log').read_text()[-7000:])
            raise RuntimeError(f'{name} failed: {result.returncode}')
    if args.sdk:
        run(['python3', PACKAGE / 'tool/prepare_native.py', '--sdk', args.sdk,
             *(['--benchmark'] if args.benchmark else [])], 'prepare-native')
    else:
        run(['node', PACKAGE / 'tool/check_native.mjs'], 'check-native')
    run(['pnpm', '--reporter=append-only', '--workspace-concurrency=1',
         '--filter', '@flax/core-runtime...', '--filter', '@flax/canvas-runtime...',
         '--filter', '@flax/webgpu-runtime...', *(['--filter','@flax/example-webgpu...'] if args.example else []), 'run', 'build'], 'js-build')
    if not (app / 'macos').exists():
        run([flutter, 'create', '--no-pub', '--platforms=macos', '--org=dev.flax',
             '--project-name=flax_webgpu_example', app], 'create-app')
    stage = output / 'stage.dart'
    stage.write_text(f"import 'dart:io';\nimport '{(ROOT / 'tool/src/package_verification.dart').as_uri()}';\n"
                     f"void main() => copyDartPackages(Directory({json.dumps(str(ROOT))}), Directory({json.dumps(str(output / 'packages'))}), {['flax_webgpu','flax_canvas'] + support_packages});\n")
    run([dart, f'--packages={ROOT}/.dart_tool/package_config.json', stage], 'stage-packages')
    shutil.copytree(PACKAGE / 'macos', output / 'packages/flax_webgpu/macos', dirs_exist_ok=True)
    (app / 'pubspec.yaml').write_text('''name: flax_webgpu_example
publish_to: none
environment:
  sdk: ^3.13.7
  flutter: '>=3.47.9'
dependencies:
  flutter:
    sdk: flutter
  flax:
    path: ../packages/flax
  flax_webgpu:
    path: ../packages/flax_webgpu
  flax_canvas:
    path: ../packages/flax_canvas
flutter:
  uses-material-design: true
  assets:
    - assets/app.js
    - assets/flax_modules/
''')
    if support_packages:
        manifest=app/'pubspec.yaml'
        manifest.write_text(manifest.read_text().replace('  flax:\n', '  flax_example_support:\n    path: ../packages/flax_example_support\n  flax:\n',1))
    if not args.example and not args.benchmark and not video:
        manifest=app/'pubspec.yaml'
        manifest.write_text(manifest.read_text().replace('    - assets/app.js\n', '    - assets/app.js\n    - assets/three/\n    - assets/three/draco/\n    - assets/three/basis/\n'))
    assets = app / 'assets'
    assets.mkdir(exist_ok=True)
    if not args.example and not args.benchmark and not video:
        shutil.copytree(PACKAGE/'example/fixtures/three', assets/'three', dirs_exist_ok=True)
        draco = assets / 'three/draco'
        draco.mkdir(exist_ok=True)
        decoder = PACKAGE / 'example/js/node_modules/three/examples/jsm/libs/draco/gltf'
        for name in ['draco_wasm_wrapper.js', 'draco_decoder.wasm']:
            shutil.copyfile(decoder / name, draco / name)
    scene = (ROOT / 'experiments/webgpu_dawn/scene.wgsl').read_text()
    config = output / 'flax.modules.json'
    config.write_text(json.dumps({'formatVersion':1, 'flutterProject':'app', 'output':'assets/flax_modules',
      'modules':[{'specifier':name, 'package':owner} for owner,names in [
        ('@flax/core-runtime',['@flax/core','@flax/core/bindings','@flax/core/host','@flax/core/navigation','@flax/flutter/widgets']),
        ('@flax/canvas-runtime',['@flax/canvas']),('@flax/webgpu-runtime',['@flax/webgpu','@flax/webgpu/host'])] for name in names]}))
    if args.example:
        configuration=json.loads((PACKAGE/'example/js/flax.modules.json').read_text())
        configuration.update(flutterProject='app',output='assets/flax_modules')
        config.write_text(json.dumps(configuration))
    if args.cts_root:
        cts_entry = output / 'cts-entry.mjs'
        run(['node', PACKAGE/'tool/cts_entry.mjs', args.cts_root.resolve(), cts_entry, js_entry], 'cts-entry')
        js_entry = cts_entry
    bundle = output / 'bundle.mjs'
    banner = 'globalThis.__sceneWGSL=' + json.dumps(scene) + ';globalThis.__preview=' + json.dumps(args.preview) + ';'
    if args.example:
        files=[PACKAGE/'example/js/src'/name for name in ['studio.ts','shaders.ts','metrics.ts']]
        fingerprint=hashlib.sha256(b''.join(file.read_bytes() for file in files)).hexdigest()
        banner='globalThis.__studioSourceSha256='+json.dumps(fingerprint)+';'
    benchmark_setup = ''
    banner_expression = json.dumps(banner)
    if args.three_worker_benchmark:
        benchmark_setup = f"import {{buildSharedBenchmark,banner as benchmarkBanner}} from {json.dumps((ROOT/'experiments/webgpu_dawn/three_worker/build_browser.mjs').as_uri())};\nconst threeHashes=await buildSharedBenchmark({json.dumps(str(assets/'three'))});\n"
        banner_expression = 'benchmarkBanner(threeHashes)'
    bundle.write_text(f"import {{prepareModules}} from {json.dumps((ROOT / 'packages/flax_build/js/src/modules.mjs').as_uri())};\n"
                      f"import {{flaxEsbuildPlugin}} from {json.dumps((ROOT / 'packages/flax_build/js/src/esbuild.mjs').as_uri())};\n"
                      f"import {{build}} from {json.dumps((ROOT / 'node_modules/esbuild/lib/main.js').as_uri())};\n"
                      f"const prepared = await prepareModules({{configPath:{json.dumps(str(config))}}});\n" +
                      benchmark_setup +
                      f"await build({{entryPoints:[{json.dumps(str(js_entry))}],outfile:{json.dumps(str(assets/'app.js'))},bundle:true,platform:'neutral',format:'esm',target:'es2022',external:['perf_hooks','ansi-colors'],banner:{{js:{banner_expression}}},plugins:[flaxEsbuildPlugin(prepared.manifest,{{nativeAssets:{{hostDirectory:{json.dumps(str(app))}}}}})]}});\n")
    if not args.example and not args.benchmark and not args.three_worker_benchmark and not video:
        with bundle.open('a') as script:
            script.write(f"await build({{entryPoints:[{json.dumps(str(PACKAGE/'example/js/three-renderer-worker.js'))}],outfile:{json.dumps(str(assets/'three/three-renderer-worker.js'))},bundle:true,platform:'neutral',format:'esm',target:'es2022',external:['perf_hooks','ansi-colors']}});\n")
    run(['node', bundle], 'bundle-modules')
    shutil.copyfile(dart_entry, app / 'lib/main.dart')
    project = app / 'macos/Runner.xcodeproj/project.pbxproj'
    project.write_text(re.sub(r'MACOSX_DEPLOYMENT_TARGET = [^;]+;', 'MACOSX_DEPLOYMENT_TARGET = 26.0;', project.read_text()))
    if args.example:
        info = app / 'macos/Runner/Configs/AppInfo.xcconfig'
        # Keep the studio's restored window separate from the acceptance application.
        info.write_text(re.sub(r'PRODUCT_BUNDLE_IDENTIFIER = .*',
                               'PRODUCT_BUNDLE_IDENTIFIER = dev.flax.webgpuStudio', info.read_text()))
    podfile = app / 'macos/Podfile'
    if not podfile.exists():
        shutil.copyfile(args.flutter_root/'packages/flutter_tools/templates/cocoapods/Podfile-macos', podfile)
    podfile.write_text(re.sub(r"platform :osx, '[^']+'", "platform :osx, '26.0'", podfile.read_text()))
    window = app / 'macos/Runner/MainFlutterWindow.swift'
    template = args.flutter_root / 'packages/flutter_tools/templates/app/macos.tmpl/Runner/MainFlutterWindow.swift'
    text = (template if video else window).read_text().replace('    let windowFrame = self.frame\n', '')
    text = re.sub(r'setFrame\([^\n]+',
      f'setFrame(NSRect(x:100,y:100,width:{1180 if args.example else 1100},height:{940 if args.example else 700}), display:true)', text)
    if video:
        marker = '    RegisterGeneratedPlugins(registry: flutterViewController)'
        if text.count(marker) != 1:
            raise RuntimeError('The generated Runner no longer exposes the Flutter plugin registration point')
        text = text.replace(marker, marker + '''
    WebGpuVideoFixture.register(
      with: flutterViewController.registrar(forPlugin: "FlaxWebGpuVideoFixture"))
''')
        text += '\n' + (PACKAGE / 'example/app/macos/VideoFixture.swift').read_text()
    window.write_text(text)
    for name in ['DebugProfile','Release']:
        path = app / f'macos/Runner/{name}.entitlements'
        entitlements = plistlib.loads(path.read_bytes())
        entitlements['com.apple.security.app-sandbox'] = False
        entitlements['com.apple.security.cs.allow-jit'] = True
        path.write_bytes(plistlib.dumps(entitlements))
    stage.write_text(f"import '{(ROOT / 'tool/src/example_engine.dart').as_uri()}';\n"
                     f"void main() => selectExampleEngine({json.dumps(str(ROOT))}, {json.dumps(str(app))}, 'v8');\n")
    run([dart, f'--packages={ROOT}/.dart_tool/package_config.json', stage], 'select-engine')
    run([flutter,'pub','get','--offline'], 'app-pub', cwd=app)
    run([dart,'analyze','lib/main.dart'], 'app-analyze', cwd=app)
    run([flutter, f'--local-engine-src-path={engine}', f'--local-engine={engine_name}',
         f'--local-engine-host={engine_name}', 'build','macos',f'--{args.mode}','--no-pub',
         f'--dart-define=WEBGPU_OUTPUT={output}',
         f'--dart-define=WEBGPU_PREVIEW={str(args.preview).lower()}'], 'app-build', cwd=app)
    if video:
        if not env.get('FLAX_MACOS_TEAM'):
            run(['codesign', '--force', '--sign', '-', '--preserve-metadata=entitlements,flags',
                 product], 'sign-local-app')
        run(['codesign', '--verify', '--deep', '--strict', product], 'verify-local-app')
    if not args.build_only:
        (output / 'application.json').unlink(missing_ok=True)
        run([product / 'Contents/MacOS/flax_webgpu_example'], 'application', timeout=3600 if args.preview or args.example else max(300 if args.cts_root else 180, args.cycles * 60))
        if not args.preview and not args.example:
            result = json.loads((output / 'application.json').read_text())
            if not result['passed']: raise RuntimeError(result)
            print(json.dumps(result, indent=2))


if __name__ == '__main__': main()
