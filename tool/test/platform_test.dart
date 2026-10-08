import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flax/native_sdk.dart';

import 'package:flax/native_target.dart';
import 'package:test/test.dart';

import '../check_engines.dart' show builtBridge;
import '../platform_changes.dart';
import '../src/platform_application.dart';
import '../src/platform_selection.dart';
import '../src/platform_binary.dart';

void main() {
  test(
    'full target plans retain every UI owner and one Linux common gate',
    () async {
      for (final target in [
        'linux-x64',
        'ios-simulator-arm64',
        'ios-simulator-x64',
      ]) {
        final result = await Process.run(Platform.resolvedExecutable, [
          'run',
          'tool/check_platform.dart',
          '--target=$target',
          '--engine=all',
          '--scope=all',
          '--list',
        ]);
        expect(result.exitCode, 0, reason: result.stderr.toString());
        final plan = result.stdout.toString();
        expect(plan, contains('$target: hermes, v8; all'));
        expect(plan.contains('Host: melos check'), target == 'linux-x64');
        if (target != 'linux-x64') {
          expect(plan, contains('common logic uses melos check separately'));
        }
        for (final owner in [
          'flax',
          'flax_canvas',
          'flax_cupertino_ui',
          'flax_fetch',
          'flax_local_storage',
          'flax_material_ui',
          'flax_websocket',
        ]) {
          expect(plan, contains('UI $owner:'), reason: target);
        }
      }
    },
  );
  test(
    'macOS consumers build hooks only for the selected SDK architecture',
    () {
      final app = Directory.systemTemp.createTempSync('flax macos target ');
      addTearDown(() => app.deleteSync(recursive: true));
      final project = File('${app.path}/macos/Runner.xcodeproj/project.pbxproj')
        ..parent.createSync(recursive: true)
        ..writeAsStringSync('MACOSX_DEPLOYMENT_TARGET = 10.15;');
      final config = File('${app.path}/macos/Runner/Configs/AppInfo.xcconfig')
        ..parent.createSync(recursive: true);
      for (final name in ['DebugProfile', 'Release']) {
        File('${app.path}/macos/Runner/$name.entitlements')
            .writeAsStringSync('<dict></dict>');
      }
      for (final arch in ['arm64', 'x64']) {
        config.writeAsStringSync('PRODUCT_NAME = flax_standalone\n');
        configurePlatformProject(app.path, FlaxNativeTarget('macos-$arch'));
        final settings = config.readAsStringSync();
        expect(
          settings,
          contains('ARCHS = ${arch == 'x64' ? 'x86_64' : 'arm64'}\n'),
        );
        expect(
          settings,
          contains('EXCLUDED_ARCHS = ${arch == 'x64' ? 'arm64' : 'x86_64'}\n'),
        );
        expect(
          project.readAsStringSync(),
          contains('MACOSX_DEPLOYMENT_TARGET = 15.0;'),
        );
      }
    },
  );
  test('hook receipts and diagnostics exclude SDK cache inputs', () {
    final hooks = Directory.systemTemp.createTempSync('flax hook receipts ');
    addTearDown(() => hooks.deleteSync(recursive: true));
    final receipt = File('${hooks.path}/flax_engine_v8/build/sdk-receipt.json')
      ..parent.createSync(recursive: true)
      ..writeAsStringSync('{}');
    final stderr = File('${receipt.parent.path}/stderr.txt')
      ..writeAsStringSync('build failure');
    final shared = Directory('${hooks.path}/shared/flax_engine_v8/build/123')
      ..createSync(recursive: true);
    final sharedReceipt = File('${shared.path}/sdk-receipt.json')
      ..writeAsStringSync('{}');
    // SDK cache trees must not be traversed (Windows notices exceed MAX_PATH).
    final sdk = Directory(
      '${shared.parent.path}/sdk-${List.filled(64, 'a').join()}/notices',
    )..createSync(recursive: true);
    File('${sdk.path}/sdk-receipt.json').writeAsStringSync('invalid receipt');
    expect(
      hookBuildFiles(hooks).map((f) => f.path),
      unorderedEquals([receipt.path, stderr.path, sharedReceipt.path]),
    );
  });
  test('native coexistence finds bridges outside SDK cache inputs', () {
    final consumer = Directory.systemTemp.createTempSync('flax bridge lookup ');
    addTearDown(() => consumer.deleteSync(recursive: true));
    for (final engine in ['hermes', 'v8']) {
      final outputs = Directory(
        '${consumer.path}/.dart_tool/hooks_runner/shared/flax_engine_$engine/build',
      )..createSync(recursive: true);
      final name = FlaxNativeTarget.host().bridgeName(engine);
      expect(() => builtBridge(consumer, engine), throwsStateError);
      final bridge = File('${outputs.path}/123/assets/$name')
        ..parent.createSync(recursive: true)
        ..writeAsStringSync('bridge output');
      // Input notices can contain matching names and exceed Windows' MAX_PATH.
      final cached =
          File(
              '${outputs.path}/sdk-${List.filled(64, 'a').join()}/notices/assets/$name',
            )
            ..parent.createSync(recursive: true)
            ..writeAsStringSync('SDK input');
      expect(builtBridge(consumer, engine).path, bridge.path);
      expect(cached.readAsStringSync(), 'SDK input');
      File('${outputs.path}/456/assets/$name')
        ..parent.createSync(recursive: true)
        ..writeAsStringSync('duplicate output');
      expect(() => builtBridge(consumer, engine), throwsStateError);
    }
  });
  test(
    'retired SDK matrix rejects before building or runtime acceptance',
    () async {
      final result = await Process.run(Platform.resolvedExecutable, [
        'run',
        'tool/check_platform.dart',
        '--target=macos-arm64',
        '--engine=all',
      ]);
      expect(result.exitCode, 1);
      expect(
        result.stderr.toString(),
        contains('standalone SDK platform matrix is retired'),
      );
      expect(result.stdout.toString(), isNot(contains('> pnpm')));
      expect(result.stdout.toString(), isNot(contains('> cmake')));
    },
  );
  test(
    'rejects a wrong process architecture and different shared CRT bytes',
    () async {
      final work = Directory.systemTemp.createTempSync('flax-binary-test-');
      try {
        final header = ByteData(64)
          ..setUint32(0, 0x7f454c46, Endian.big)
          ..setUint8(4, 2)
          ..setUint8(5, 1)
          ..setUint16(18, 62, Endian.little);
        final binary = File('${work.path}/engine.so')
          ..writeAsBytesSync(header.buffer.asUint8List());
        await verifyBinaryArchitectures(FlaxNativeTarget('linux-x64'), [
          binary,
        ]);
        await expectLater(
          verifyBinaryArchitectures(FlaxNativeTarget('linux-arm64'), [binary]),
          throwsStateError,
        );
        final a = File('${work.path}/a/MSVCP140.dll')
          ..parent.createSync(recursive: true)
          ..writeAsStringSync('same');
        final b = File('${work.path}/b/msvcp140.dll')
          ..parent.createSync(recursive: true)
          ..writeAsStringSync('same');
        final assets = [
          FlaxNativeSdkResult(binary, [a], []),
          FlaxNativeSdkResult(binary, [b], []),
        ];
        await verifySharedLibraries(assets);
        b.writeAsStringSync('different');
        await expectLater(verifySharedLibraries(assets), throwsStateError);
      } finally {
        work.deleteSync(recursive: true);
      }
    },
  );
  test('target selection distinguishes iOS SDKs and Android ARM32', () {
    expect(
      FlaxNativeTarget.fromBuild('ios', 'arm64', appleSdk: 'iphoneos').name,
      'ios-device-arm64',
    );
    expect(
      FlaxNativeTarget.fromBuild(
        'ios',
        'arm64',
        appleSdk: 'iphonesimulator',
      ).name,
      'ios-simulator-arm64',
    );
    expect(
      FlaxNativeTarget.fromBuild('android', 'arm').androidAbi,
      'armeabi-v7a',
    );
    expect(
      () => FlaxNativeTarget.fromBuild('ios', 'arm64'),
      throwsArgumentError,
    );
    expect(() => FlaxNativeTarget('linux-arm32'), throwsUnsupportedError);
  });
  test('CLI rejects typos, duplicates and implicit device skips', () {
    for (final args in [
      ['--engine=quickjs'],
      ['--scope=logic'],
      ['--target=android-x64'],
      ['--target'],
      ['--device=x', '--device=y'],
      ['--scope=all', '--package=flax'],
      ['--scope=platform', '--file=test/ui/flax_view_test.dart'],
      ['--scope=ui', '--file=test/ui/flax_view_test.dart'],
      ['--scope=ui', '--build-only'],
      ['--scope=ui', '--package='],
      ['--scope=ui', '--package', '--file=test/ui/a_test.dart'],
    ]) {
      expect(() => PlatformCheckOptions(args), throwsArgumentError);
    }
    expect(
      PlatformCheckOptions(['--target=android-x64', '--build-only']).buildOnly,
      isTrue,
    );
    expect(
      PlatformCheckOptions(['--target=ios-device-arm64', '--list']).engines,
      ['hermes', 'v8'],
    );
    expect(
      PlatformCheckOptions(['--target', 'linux-x64', '--engine=v8']).engines,
      ['v8'],
    );
  });
  test('renames and deletions retain every affected source path', () {
    final paths = changedPaths(
      'R100\u0000examples/embedded/macos/a\u0000examples/embedded/windows/a\u0000D\u0000packages/flax/native/a.cpp\u0000',
    );
    expect(
      paths,
      containsAll([
        'examples/embedded/macos/a',
        'examples/embedded/windows/a',
        'packages/flax/native/a.cpp',
      ]),
    );
    expect(platformJobs(paths), hasLength(11));
    expect(() => changedPaths('R100\u0000old\u0000'), throwsFormatException);
  });
  test('CI scopes ordinary, platform, shared and engine-only changes', () {
    expect(
      platformJobs([
        'packages/flax/lib/src/view.dart',
        'packages/flax/test/ui/view_test.dart',
        'docs/a.md',
      ]),
      isEmpty,
    );
    expect(
      platformJobs(['examples/standalone/windows/runner/main.cpp'])
          .map((j) => j['target']),
      ['windows-x64', 'windows-arm64'],
    );
    final engine = platformJobs([
      'packages/flax_engine_v8/native/sdk.lock.json',
    ]);
    expect(engine, hasLength(11));
    expect(engine.map((j) => j['engine']), everyElement('v8'));
    expect(
      platformJobs(['packages/flax/lib/native_sdk.dart'])
          .map((j) => j['engine']),
      everyElement('all'),
    );
    expect(
      platformJobs(['examples/standalone/linux/CMakeLists.txt'])
          .map((j) => j['target']),
      ['linux-arm64'],
    );
    expect(platformJobs(['tool/ui_bundle.mjs']), hasLength(11));
    for (final path in [
      'tool/src/ui_suite.dart',
      'tool/src/prepared_checks.dart',
      'tool/src/consumer_workspace.dart',
      '.github/workflows/prepare.yml',
    ]) {
      expect(platformJobs([path]), hasLength(11), reason: path);
    }
    for (final path in [
      'tool/check_engines.dart',
      'tests/runtime/native/engines_test.cpp',
    ]) {
      expect(platformJobs([path]), [
        for (final target in [
          'macos-arm64',
          'macos-x64',
          'linux-arm64',
          'windows-x64',
          'windows-arm64',
        ])
          {'target': target, 'engine': 'all'},
      ]);
    }
    final application = platformJobs([
      'examples/standalone/test/support/scenario.dart',
    ]);
    expect(application, hasLength(11));
    expect(application.map((job) => job['engine']), everyElement('all'));
    expect(platformJobs(['tool/start_android_emulator.py']), [
      {'target': 'android-x64', 'engine': 'all'},
    ]);
    expect(
      platformJobs(['packages/flax_native_assets/hook/build.dart'])
          .map((job) => job['target']),
      containsAll([
        'android-arm32',
        'android-arm64',
        'android-x64',
        'windows-x64',
        'windows-arm64',
      ]),
    );
    expect(
      platformJobs(['packages/flax_native_assets/hook/build.dart']),
      hasLength(5),
    );
    expect(platformJobs(['.gitattributes']).map((job) => job['target']), [
      'windows-x64',
      'windows-arm64',
    ]);
  });
  test(
    'published locks contain precisely the 12 targets and separate tag/version',
    () {
      for (final engine in ['hermes', 'v8']) {
        final lock = jsonDecode(
          File('packages/flax_engine_$engine/native/sdk.lock.json')
              .readAsStringSync(),
        ) as Map;
        expect(lock['sdkVersion'], '0.3.0');
        expect(lock['releaseTag'], 'v0.3.0-rc.3');
        final targets = lock['targets'] as Map;
        expect(targets.keys.toSet(), FlaxNativeTarget.names.toSet());
        for (final entry in targets.entries) {
          expect(
            entry.value['url'],
            endsWith(
              '/v0.3.0-rc.3/flax-engine-sdk-0.3.0-$engine-${entry.key}.tar.gz',
            ),
          );
          expect(entry.value['sha256'], matches(RegExp(r'^[a-f0-9]{64}$')));
        }
      }
    },
  );
  test(
    'simulators explicitly build Dart JIT and real iOS builds require signing',
    () {
      expect(
        platformBuildArguments(
          FlaxNativeTarget('ios-simulator-x64'),
          release: true,
        ),
        ['ios', '--debug', '--simulator', '--no-codesign'],
      );
      expect(
        platformBuildArguments(
          FlaxNativeTarget('ios-device-arm64'),
          release: true,
          signed: true,
        ),
        ['ios', '--release'],
      );
      expect(
        platformBuildArguments(
          FlaxNativeTarget('android-arm32'),
          release: true,
        ),
        ['apk', '--release', '--target-platform=android-arm'],
      );
    },
  );
}
