import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:flax/native_sdk.dart';
import 'package:flax/native_target.dart';
import 'package:test/test.dart';

void main() {
  late Directory work;
  late Map<String, dynamic> manifest;
  late File archive;
  late String digest;
  setUp(() async {
    work = Directory.systemTemp.createTempSync('flax-sdk-contract-');
    final sdk = Directory('${work.path}/input')..createSync();
    final files = <String, String>{};
    for (final name in [
      'lib/libengine.dylib',
      'cmake/FlaxEngineSDKConfig.cmake',
    ]) {
      final f = File('${sdk.path}/$name')..parent.createSync(recursive: true);
      f.writeAsStringSync('test input');
      files[name] = sha256.convert(f.readAsBytesSync()).toString();
    }
    manifest = {
      'schemaVersion': 3,
      'sdkVersion': '0.3.0',
      'engine': 'hermes',
      'target': 'macos-arm64',
      'os': 'macos',
      'architecture': 'arm64',
      'minimumOSVersion': '15.0',
      'libraries': ['lib/libengine.dylib'],
      'files': files,
      'cmakeConfig': 'cmake/FlaxEngineSDKConfig.cmake',
      'cmakeTarget': 'FlaxEngineSDK::hermes',
      'dynamicDependencies': {
        'lib/libengine.dylib': ['/usr/lib/libSystem.B.dylib'],
      },
    };
  });
  tearDown(() => work.deleteSync(recursive: true));
  Future<void> pack() async {
    File('${work.path}/input/manifest.json')
        .writeAsStringSync(jsonEncode(manifest));
    archive = File('${work.path}/sdk.tar.gz');
    final result = await Process.run('tar', [
      '-czf',
      archive.path,
      '-C',
      '${work.path}/input',
      '.',
    ]);
    expect(result.exitCode, 0, reason: '${result.stderr}');
    digest = sha256.convert(archive.readAsBytesSync()).toString();
    final lock = File('${work.path}/engine/native/sdk.lock.json')
      ..parent.createSync(recursive: true);
    lock.writeAsStringSync(
      jsonEncode({
        'schemaVersion': 3,
        'engine': 'hermes',
        'sdkVersion': '0.3.0',
        'targets': {
          'macos-arm64': {
            'os': 'macos',
            'architecture': 'arm64',
            'minimumOSVersion': '15.0',
            'sha256': digest,
          },
        },
      }),
    );
  }

  Future<FlaxNativeSdkResult> prepare({String? hash, bool local = true}) =>
      buildFlaxNativeSdk(
        engine: 'hermes',
        target: FlaxNativeTarget('macos-arm64'),
        packageRoot: Directory('${work.path}/engine').uri,
        coreRoot: Directory('${work.path}/core').uri,
        cacheRoot: Directory('${work.path}/cache').uri,
        outputRoot: Directory('${work.path}/output').uri,
        sdkArchive: local ? archive.uri : null,
        sdkSha256: local ? hash ?? digest : null,
      );
  Matcher failure(String message) => throwsA(
    isA<StateError>().having((e) => e.toString(), 'stage', contains(message)),
  );
  test('checksum failure occurs before extraction or compilation', () async {
    await pack();
    await expectLater(prepare(hash: '0' * 64), failure('checksum mismatch'));
    expect(
      Directory('${work.path}/cache/sdk-${'0' * 64}').existsSync(),
      isFalse,
    );
  });
  test(
    'rejects incorrect target and missing dependencies before compilation',
    () async {
      manifest['target'] = 'ios-device-arm64';
      await pack();
      await expectLater(prepare(), failure('target or version'));
      manifest['target'] = 'macos-arm64';
      manifest['dynamicDependencies'] = {
        'lib/libengine.dylib': ['@rpath/libmissing.dylib'],
      };
      await pack();
      await expectLater(prepare(), failure('Missing SDK dependency'));
    },
  );
  test(
    'valid cache works offline and concurrent preparation is atomic',
    () async {
      await pack();
      await Future.wait([
        for (var i = 0; i < 3; i++)
          expectLater(prepare(), failure('ABI source is missing')),
      ]);
      expect(Directory('${work.path}/cache/sdk-$digest').existsSync(), isTrue);
      archive.deleteSync();
      await expectLater(
        prepare(local: false),
        failure('ABI source is missing'),
      );
      File('${work.path}/cache/sdk-$digest/lib/libengine.dylib')
          .writeAsStringSync('corrupted');
      await expectLater(prepare(local: false), failure('checksum mismatch'));
    },
  );
  test('manifest paths cannot escape the SDK directory', () async {
    manifest['files']['../escape'] = '0' * 64;
    await pack();
    await expectLater(prepare(), failure('Unsafe SDK file path'));
  });
}
