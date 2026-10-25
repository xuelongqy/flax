#!/usr/bin/env python3
"""Generate all Wallet Core C APIs and exercise an independent JS consumer."""
import argparse
import json
import os
from pathlib import Path
import plistlib
import re
import shutil
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[4]
HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT / 'packages/flax_ffi/test/runtime'))
import support as gate


def symbols(binary):
    text = subprocess.check_output(['xcrun', 'nm', '-arch', 'arm64', '-gU', str(binary)],
                                   text=True, stderr=subprocess.DEVNULL)
    return sorted(set(re.findall(r'\b_(TW\w+)$', text, re.M)))


def dart_definitions(file):
    # This acceptance baseline is Apple arm64; pointees stay raw FFI pointers.
    scalars = {'ffi.Bool': 'c_bool', 'ffi.Char': 'int8', 'ffi.Int': 'int32',
               'ffi.UnsignedInt': 'uint32', 'ffi.Size': 'uint64', 'ffi.Void': 'void'}
    for width in [8, 16, 32, 64]:
        scalars[f'ffi.Int{width}'] = f'int{width}'
        scalars[f'ffi.Uint{width}'] = f'uint{width}'
    def native_type(name):
        return 'pointer' if name.startswith('ffi.Pointer<') else scalars[name]
    source = ''.join(file.read_text().split())
    result = {}
    for name, signature in re.findall(r'latefinal_(TW\w+)Ptr=_lookup<ffi.NativeFunction<(.*?)>>\(', source):
        parsed = re.fullmatch(r'(.*?)Function\((.*)\)', signature)
        assert parsed, (name, signature)
        result[name] = {'arguments': [native_type(t) for t in parsed[2].split(',') if t],
                        'return': native_type(parsed[1])}
    assert len(result) == 464
    return result


def copy_simulator_framework(source, destination):
    metadata = plistlib.loads((source / 'Info.plist').read_bytes())
    candidates = [s for s in metadata['AvailableLibraries']
                  if s['SupportedPlatform'] == 'ios'
                  and s.get('SupportedPlatformVariant') == 'simulator'
                  and 'arm64' in s['SupportedArchitectures']]
    if len(candidates) != 1:
        raise ValueError(f'Expected one arm64 Simulator slice: {source}')
    selected, = candidates
    bundle = Path(selected['LibraryIdentifier']) / selected['LibraryPath']
    info = plistlib.loads((source / bundle / 'Info.plist').read_bytes())
    binary = source / bundle / info['CFBundleExecutable']
    (destination / bundle).mkdir(parents=True)
    shutil.copyfile(binary, destination / bundle / binary.name)
    shutil.copyfile(source / bundle / 'Info.plist', destination / bundle / 'Info.plist')
    (destination / 'Info.plist').write_bytes(plistlib.dumps({**metadata, 'AvailableLibraries': [selected]}))
    return binary


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--wallet-root', type=Path, required=True)
    parser.add_argument('--flutter-root', type=Path, required=True)
    parser.add_argument('--engine-output', type=Path, required=True)
    parser.add_argument('--target', choices=['macos', 'ios-simulator'], required=True)
    parser.add_argument('--macos-library', type=Path)
    parser.add_argument('--ios-artifacts', type=Path,
                        help='Directory containing WalletCore/ and WalletCoreSwiftProtobuf/ XCFramework products')
    parser.add_argument('--simulator')
    args = parser.parse_args()
    ios = args.target == 'ios-simulator'
    if ios and (not args.simulator or not args.ios_artifacts):
        parser.error('--simulator and --ios-artifacts are required for iOS')
    wallet = args.wallet_root.resolve()
    output = ROOT / '.local/ffi-codegen/wallet' / args.target
    output.mkdir(parents=True, exist_ok=True)
    scratch_root = ROOT / '.local/tmp'
    scratch_root.mkdir(parents=True, exist_ok=True)
    scratch = Path(tempfile.mkdtemp(prefix='ffi-wallet-core-', dir=scratch_root))
    env = dict(os.environ, TMPDIR=str(scratch), TMP=str(scratch), TEMP=str(scratch),
               FLAX_VERIFY_V8_JIT='1', SIMCTL_CHILD_FLAX_VERIFY_V8_JIT='1',
               PYTHONDONTWRITEBYTECODE='1',
               FLAX_CHECK_TARGET='ios-arm64-simulator' if ios else 'macos-arm64',
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
        package_hashes = {}
        for name in ['ffi', 'ffi-codegen']:
            package = ROOT / ('packages/flax_' + name.replace('-', '_') + '/js')
            gate.run(['npm', 'pack', '--ignore-scripts', '--pack-destination', archives],
                     package, env, output / f'{name}-pack.log')
            archive, = archives.glob('flax-' + name + '-*.tgz')
            package_hashes[name] = gate.digest(archive)
        gate.run([flutter, 'create', '--no-pub', '--platforms=macos,ios', '--org=dev.flax',
                  '--project-name=flax_wallet_core', app], ROOT, env, output / 'create.log')
        shutil.rmtree(app / 'test')
        (app / 'analysis_options.yaml').write_text('analyzer:\n  errors:\n    implementation_imports: ignore\n')
        (app / 'pubspec.yaml').write_text(f'''name: flax_wallet_core
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
    - assets/wallet.js
''')
        shutil.copyfile(HERE / 'host.dart', app / 'lib/main.dart')
        shutil.copytree(ROOT / 'examples/embedded/assets/flax_modules', app / 'assets/flax_modules')
        project.mkdir()
        shutil.copyfile(HERE / 'probe.mjs', project / 'probe.mjs')
        native = project / 'native'
        shutil.copytree(wallet / 'include/TrustWalletCore', native / 'include/TrustWalletCore')
        for name in ['lifecycle.h', 'lifecycle.c']:
            shutil.copyfile(HERE / name, native / name)
        headers = sorted(str(p.relative_to(project)) for p in (native / 'include/TrustWalletCore').glob('*.h'))
        assert len(headers) == 83
        core = {'id': 'wallet-core/core', 'kind': 'dynamic', 'targets': ['ios' if ios else 'macos'],
                'headers': headers, 'includes': ['native/include'], 'codegen': {
                    'output': 'generated/wallet', 'functions': ['TW*'], 'enums': ['TW*'],
                    'records': ['TWAES', 'TWHash', 'TWCoinTypeConfiguration'],
                    'constants': ['TWPrivateKeySize', 'TWPublicKeyCompressedSize', 'TWPublicKeyUncompressedSize',
                                  'TWHashSHA1Length', 'TWHashSHA256Length', 'TWHashSHA512Length', 'TWHashRipemdLength'],
                    'resources': {
                        'PrivateKey': {'create': 'TWPrivateKeyCreateWithData', 'destroy': 'TWPrivateKeyDelete',
                                       'methods': {'data': 'TWPrivateKeyData', 'publicKey': 'TWPrivateKeyGetPublicKeySecp256k1', 'sign': 'TWPrivateKeySign'}},
                        'HDWallet': {'create': 'TWHDWalletCreateWithMnemonic', 'destroy': 'TWHDWalletDelete',
                                     'methods': {'seed': 'TWHDWalletSeed', 'entropy': 'TWHDWalletEntropy',
                                                 'mnemonic': 'TWHDWalletMnemonic', 'keyForCoin': 'TWHDWalletGetKeyForCoin'}},
                        'AbiFunction': {'create': 'TWEthereumAbiFunctionCreateWithString', 'destroy': 'TWEthereumAbiFunctionDelete',
                                        'methods': {**{'add' + n: 'TWEthereumAbiFunctionAddParam' + n for n in
                                                       ['UInt8', 'UInt16', 'UInt32', 'UInt64', 'Int8', 'Int16', 'Int32', 'Int64', 'Bool']},
                                                    **{'get' + n: 'TWEthereumAbiFunctionGetParam' + n for n in ['UInt8', 'UInt64', 'Bool']},
                                                    'type': 'TWEthereumAbiFunctionGetType', 'encode': 'TWEthereumAbiEncode'}}}}}
        libraries, binary_inputs = [], {}
        if ios:
            for name in ['WalletCoreSwiftProtobuf', 'WalletCore']:
                binary = copy_simulator_framework(args.ios_artifacts / name / (name + '.xcframework'),
                                                 native / (name + '.xcframework'))
                binary_inputs[name] = {'path': str(binary), 'sha256': gate.digest(binary), 'uuid': gate.binary_uuids(binary)}
            core_binary = Path(binary_inputs['WalletCore']['path'])
            libraries.append({'id': 'wallet-core/swift-protobuf', 'kind': 'dynamic', 'targets': ['ios'],
                              'xcframework': 'native/WalletCoreSwiftProtobuf.xcframework'})
            core.update(xcframework='native/WalletCore.xcframework', dependencies=['wallet-core/swift-protobuf'])
        else:
            core_binary = args.macos_library or wallet / 'example/libTrustWalletCore.dylib'
            shutil.copyfile(core_binary, native / 'libTrustWalletCore.dylib')
            core['binaries'] = {'macos-arm64': 'native/libTrustWalletCore.dylib'}
            binary_inputs['TrustWalletCore'] = {'path': str(core_binary), 'sha256': gate.digest(core_binary), 'uuid': gate.binary_uuids(core_binary)}
        libraries.append(core)
        libraries.append({'id': 'wallet-core/lifecycle', 'kind': 'sources', 'targets': core['targets'],
                          'sources': ['native/lifecycle.c'], 'headers': ['native/lifecycle.h'],
                          'includes': ['native/include', 'native'], 'dependencies': ['wallet-core/core'],
                          'codegen': {'output': 'generated/lifecycle', 'functions': ['WCProbe*'],
                                      'resources': {'ObservedKey': {'create': 'WCProbeCreate', 'destroy': 'WCProbeDelete',
                                                                    'methods': {'publicKey': 'WCProbePublicKey'}}}}})
        platform_libraries = []
        if not ios:
            source = scratch / 'legal-platform.c'
            source.write_text('int wallet_platform_probe(void) { return 42; }\n')
            base = scratch / 'legal-platform.dylib'
            gate.run(['xcrun', '--sdk', 'macosx', 'clang', '-dynamiclib', '-target', 'arm64-apple-macos15.0',
                      source, '-o', base], ROOT, env, output / 'legal-platform-compile.log')
            variants = {
                'legacy': ['-set-version-min', 'macos', '11.0', '27.0'],
                'zippered': ['-set-build-version', 'maccatalyst', '16.3', '27.0',
                             '-set-build-version', 'macos', '15.0', '27.0'],
                'mixed': ['-set-version-min', 'macos', '11.0', '27.0',
                          '-set-build-version', 'maccatalyst', '16.3', '27.0'],
            }
            for name, flags in variants.items():
                binary = native / ('platform-' + name + '.dylib')
                gate.run(['xcrun', 'vtool', *flags, '-replace', '-output', binary, base],
                         ROOT, env, output / ('legal-platform-' + name + '.log'))
                metadata = subprocess.check_output(['xcrun', 'vtool', '-show-build', str(binary)], text=True)
                if name != 'legacy':
                    assert re.findall(r'^\s*platform\s+(\S+)', metadata, re.M)[0] == 'MACCATALYST', metadata
                if name != 'zippered':
                    assert 'LC_VERSION_MIN_MACOSX' in metadata, metadata
                asset_id = 'wallet-core/platform-' + name
                platform_libraries.append(asset_id)
                libraries.append({'id': asset_id, 'kind': 'dynamic', 'targets': ['macos'],
                                  'binaries': {'macos-arm64': str(binary.relative_to(project))}})
        (project / 'platform-libraries.mjs').write_text('export const platformLibraries = ' + json.dumps(platform_libraries) + ';\n')
        dart_file = wallet / 'packages/wallet_core_bindings_native/lib/src/bindings/bindings.dart'
        dart_types = dart_definitions(dart_file)
        dart_names = sorted(dart_types)
        (project / 'expected.json').write_text(json.dumps({'dartDefinitions': dart_types, 'binaryFunctions': symbols(core_binary)}))
        (project / 'native.json').write_text(json.dumps({'formatVersion': 1, 'libraries': libraries}))
        (project / 'package.json').write_text(json.dumps({'name': 'flax-wallet-core-acceptance', 'private': True,
            'type': 'module', 'dependencies': {'@flax/ffi': 'file:' + str(next(archives.glob('flax-ffi-0*.tgz')))},
            'devDependencies': {'@flax/ffi-codegen': 'file:' + str(next(archives.glob('flax-ffi-codegen-*.tgz')))},
            'flax': {'native': 'native.json'}}))
        gate.run(['npm', 'install', '--ignore-scripts', '--no-audit', '--no-fund'], project, env, output / 'npm-install.log')
        gate.run(['node', HERE / 'bundle.mjs', project, app / 'assets/wallet.js'], ROOT, env, output / 'bundle.log')
        selection = json.loads((project / 'selection.json').read_text())
        generated = project / 'generated'
        gate.run(['node', ROOT / 'node_modules/typescript/bin/tsc', '--strict', '--noEmit', '--target', 'ES2022',
                  '--module', 'NodeNext', '--moduleResolution', 'NodeNext', '--types', '',
                  *sorted(generated.rglob('*.g.ts'))], ROOT, env, output / 'typecheck.log')
        xcode = app / ('ios' if ios else 'macos') / 'Runner.xcodeproj/project.pbxproj'
        source = re.sub(r'IPHONEOS_DEPLOYMENT_TARGET = [^;]+;', 'IPHONEOS_DEPLOYMENT_TARGET = 16.3;', xcode.read_text())
        source = re.sub(r'MACOSX_DEPLOYMENT_TARGET = [^;]+;', 'MACOSX_DEPLOYMENT_TARGET = 15.0;', source)
        xcode.write_text(source)
        gate.run([flutter, 'pub', 'get', '--offline'], app, env, output / 'pub-get.log')
        gate.run([args.flutter_root / 'bin/dart', 'format', 'lib/main.dart', '.flax/ffi_assets/hook/build.dart'], app, env, output / 'format.log')
        gate.run([args.flutter_root / 'bin/dart', 'analyze', '--fatal-infos', 'lib/main.dart', '.flax/ffi_assets/hook/build.dart'], app, env, output / 'analyze.log')
        engine_name = 'flax_ios_debug_sim_arm64' if ios else 'flax_mac_debug'
        engine = 'ffi_' + engine_name + ('' if ios else '_arm64')
        engine_source = args.engine_output / 'engine-src'
        revision = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=args.flutter_root, text=True).strip()
        engine_receipt = json.loads((args.engine_output / engine_name / 'build.json').read_text())
        assert revision == engine_receipt['revision']
        if '-DFLAX_ENGINE_ID=2' not in engine_receipt['compile']:
            raise RuntimeError('Codegen acceptance requires a maintained V8 engine overlay')
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
            frameworks = bundle / 'Frameworks'
            engine_binary = 'Flutter.framework/Flutter'
        else:
            bundle, = (app / 'build/macos/Build/Products/Debug').glob('*.app')
            launch = [bundle / 'Contents/MacOS/flax_wallet_core']
            frameworks = bundle / 'Contents/Frameworks'
            engine_binary = 'FlutterMacOS.framework/Versions/A/FlutterMacOS'
        original = engine_source / 'out' / engine / engine_binary
        assert gate.binary_uuids(original) == gate.binary_uuids(frameworks / engine_binary)
        result = gate.launch(launch, env, output / 'run.log', 'FLAX_FFI_WALLET_CORE_RESULT ')
        if 'error' in result:
            raise RuntimeError(result['error'])
        proof = ('FLAX_V8_JITLESS: probe executed without generated machine code' if ios
                 else 'FLAX_V8_JIT: machine code generated')
        assert proof in (output / 'run.log').read_text(), 'V8 execution mode proof is missing'
        assert result['allocated'] == result['freed'] == 4 and result['alive'] == 0
        assert result['allocationFailureCases'] == 16 and result['cleanupFailureCases'] == 7
        assert result['legalPlatformLibraries'] == (0 if ios else 3)
        plan = json.loads((app / '.flax/ffi_assets/native-plan.json').read_text())
        embedded = {}
        for library in plan['libraries']:
            name = library['name']
            binary = frameworks / (name + '.framework') / name
            if not binary.exists():
                binary = binary.parent / 'Versions/A' / name
            uuids = gate.binary_uuids(binary)
            assert set(uuids) == {'arm64'}, uuids
            metadata = subprocess.check_output(['xcrun', 'vtool', '-show-build', str(binary)], text=True)
            platforms = set(re.findall(r'^\s*platform\s+(\S+)', metadata, re.M))
            if re.search(r'^\s*cmd\s+LC_VERSION_MIN_MACOSX\s*$', metadata, re.M):
                platforms.add('MACOS')
            platform = 'IOSSIMULATOR' if ios else 'MACOS'
            assert platform in platforms, metadata
            imports = subprocess.check_output(['xcrun', 'otool', '-L', str(binary)], text=True)
            linked = [line.strip().split(' (compatibility version')[0] for line in imports.splitlines()[1:]]
            assert not any(name.startswith('@rpath/libswift') for name in linked), imports
            for dependency in library.get('dependencies', []):
                name = next(lib['name'] for lib in plan['libraries'] if lib['id'] == dependency)
                assert f'@rpath/{name}.framework/{name}' in linked, imports
            embedded[library['id']] = {'sha256': gate.digest(binary), 'uuid': uuids,
                                       'platform': platform, 'declaredPlatforms': sorted(platforms), 'imports': linked}
        plan_file = app / '.flax/ffi_assets/native-plan.json'
        asset_root = plan_file.parent
        def rejected(bad_plan, name, expected):
            plan_file.write_text(json.dumps(bad_plan))
            try:
                failed = subprocess.run(list(map(str, command)), cwd=app, env=env, text=True,
                                        stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
                (output / (name + '.log')).write_text(failed.stdout)
                assert failed.returncode != 0 and expected in failed.stdout, failed.stdout[-6000:]
            finally:
                plan_file.write_text(json.dumps(plan))

        # Same CPU, different platform: header checks alone cannot validate this image.
        wrong_source = scratch / 'wrong-platform.c'
        wrong_source.write_text('int wallet_wrong_platform(void) { return 0; }\n')
        wrong_file = 'inputs/review-wrong-platform.dylib'
        other_sdk = 'macosx' if ios else 'iphonesimulator'
        other_triple = 'arm64-apple-macos15.0' if ios else 'arm64-apple-ios16.3-simulator'
        sdk = subprocess.check_output(['xcrun', '--sdk', other_sdk, '--show-sdk-path'], text=True).strip()
        gate.run(['xcrun', '--sdk', other_sdk, 'clang', '-target', other_triple, '-isysroot', sdk,
                  '-dynamiclib', wrong_source, '-o', asset_root / wrong_file], ROOT, env, output / 'wrong-platform-compile.log')
        bad = json.loads(json.dumps(plan))
        selected = next(lib for lib in bad['libraries'] if lib['id'] == 'wallet-core/core')
        selected['binaries'][selection['profile']['target']] = wrong_file
        bad['files'][wrong_file] = gate.digest(asset_root / wrong_file)
        rejected(bad, 'wrong-platform', 'Native platform mismatch in wallet-core/core')
        negative = {'wrongNativePlatformRejected': True}
        if ios:
            bad = json.loads(json.dumps(plan))
            next(lib for lib in bad['libraries'] if lib['id'] == 'wallet-core/core')['dependencies'] = []
            rejected(bad, 'undeclared-dependency', 'Undeclared or ambiguous dependency in wallet-core/core: @rpath/WalletCoreSwiftProtobuf.framework/')
            bad = json.loads(json.dumps(plan))
            selected = next(lib for lib in bad['libraries'] if lib['id'] == 'wallet-core/swift-protobuf')
            original_binary = asset_root / selected['binaries'][selection['profile']['target']]
            unknown_file = 'inputs/review-unknown-swift.dylib'
            shutil.copyfile(original_binary, asset_root / unknown_file)
            gate.run(['xcrun', 'install_name_tool', '-change', '@rpath/libswift_Concurrency.dylib',
                      '@rpath/libswiftFlaxMissing.dylib', asset_root / unknown_file],
                     ROOT, env, output / 'unknown-swift-prepare.log')
            selected['binaries'][selection['profile']['target']] = unknown_file
            bad['files'][unknown_file] = gate.digest(asset_root / unknown_file)
            rejected(bad, 'unknown-swift', 'Undeclared or ambiguous dependency in wallet-core/swift-protobuf: @rpath/libswiftFlaxMissing.dylib')
            negative.update(undeclaredDependencyRejected=True, unknownSwiftAliasRejected=True)
        old = wallet / 'example/ios/Pods/TrustWalletCore/WalletCoreCommon.xcframework/ios-arm64_x86_64-simulator/WalletCoreCommon.framework/WalletCoreCommon'
        receipt = {'target': args.target, 'engine': 'V8', 'v8Mode': 'jitless' if ios else 'jit', 'result': result,
            'selection': selection, 'headerCount': len(headers),
            'walletRevision': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=wallet, text=True).strip(),
            'headerSha256': {str(p.relative_to(native / 'include')): gate.digest(p) for p in sorted((native / 'include').rglob('*.h'))},
            'dartBindingsSha256': gate.digest(dart_file),
            'binaryInputs': binary_inputs, 'embedded': embedded,
            'negativeChecks': negative,
            'oldPodsMissingSymbols': sorted(set(dart_names) - set(symbols(old))) if old.exists() else None,
            'frameworkRevision': revision, 'engineUuid': gate.binary_uuids(original),
            'packageSha256': package_hashes,
            'generatedSha256': {str(p.relative_to(generated)): gate.digest(p) for p in generated.rglob('*.g.ts')},
            'sourceSha256': {p.name: gate.digest(p) for p in HERE.iterdir() if p.suffix in ['.py', '.mjs', '.h', '.c', '.dart']},
            'published': False}
        (output / 'receipt.json').write_text(json.dumps(receipt, indent=2) + '\n')
        print(json.dumps({'target': args.target, **result}), flush=True)
    finally:
        if identity:
            for action in ['terminate', 'uninstall']:
                subprocess.run(['xcrun', 'simctl', action, args.simulator, identity], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        shutil.rmtree(scratch)


if __name__ == '__main__':
    main()
