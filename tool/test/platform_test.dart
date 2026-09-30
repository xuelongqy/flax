import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flax/native_sdk.dart';

import 'package:flax/native_target.dart';
import 'package:test/test.dart';

import '../platform_changes.dart';
import '../src/platform_application.dart';
import '../src/platform_selection.dart';
import '../src/platform_binary.dart';

void main() {
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
        expect(lock['releaseTag'], 'v0.3.0-rc.1');
        final targets = lock['targets'] as Map;
        expect(targets.keys.toSet(), FlaxNativeTarget.names.toSet());
        for (final entry in targets.entries) {
          expect(
            entry.value['url'],
            endsWith(
              '/v0.3.0-rc.1/flax-engine-sdk-0.3.0-$engine-${entry.key}.tar.gz',
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
