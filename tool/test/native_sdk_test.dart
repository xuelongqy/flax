import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:flax/native_sdk.dart';
import 'package:flax/native_target.dart';
import 'package:flax_native_assets/flax_native_assets.dart';
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
  test('shared runtimes have one owner and mismatched copies fail', () async {
    final shared = File('${work.path}/MSVCP140.dll')..writeAsStringSync('same');
    final engine = File('${work.path}/engine.dll')..writeAsStringSync('engine');
    final hashes = {
      'msvcp140.dll': sha256.convert(shared.readAsBytesSync()).toString(),
    };
    expect(await flaxUniqueEngineLibraries([shared, engine], hashes), [engine]);
    shared.writeAsStringSync('different');
    await expectLater(
      flaxUniqueEngineLibraries([shared, engine], hashes),
      throwsStateError,
    );
  });
  test(
    'preparation can validate an SDK without ABI sources or a compiler',
    () async {
      await pack();
      final (sdk, sources) = await prepareFlaxEngineSdk(
        engine: 'hermes',
        target: FlaxNativeTarget('macos-arm64'),
        packageRoot: Directory('${work.path}/engine').uri,
        cacheRoot: Directory('${work.path}/cache').uri,
        sdkArchive: archive.uri,
        sdkSha256: digest,
      );
      expect(File('${sdk.path}/manifest.json').existsSync(), isTrue);
      expect(sources.map((f) => f.path), contains(archive.path));
      expect(Directory('${work.path}/output').existsSync(), isFalse);
    },
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
  test(
    'preparation waits for another process holding the cache lock',
    () async {
      await pack();
      final cache = Directory('${work.path}/cache')..createSync();
      final holder = File('${work.path}/hold.dart')
        ..writeAsStringSync('''
import 'dart:io';
Future<void> main(List<String> args) async {
  final lock = await File(args.single).open(mode: FileMode.append);
  try {
    await lock.lock(FileLock.exclusive);
    stdout.writeln('locked');
    await stdin.first;
    await lock.unlock();
  } finally {
    await lock.close();
  }
}
''');
      final process = await Process.start(Platform.resolvedExecutable, [
        holder.path,
        '${cache.path}/sdk-$digest.lock',
      ]);
      addTearDown(() => process.kill());
      final errors = process.stderr.transform(utf8.decoder).join();
      expect(await process.stdout.transform(utf8.decoder).first, 'locked\n');
      Directory? sdk;
      Object? error;
      final preparation =
          prepareFlaxEngineSdk(
            engine: 'hermes',
            target: FlaxNativeTarget('macos-arm64'),
            packageRoot: Directory('${work.path}/engine').uri,
            cacheRoot: cache.uri,
            sdkArchive: archive.uri,
            sdkSha256: digest,
          ).then<void>(
            (result) => sdk = result.$1,
            onError: (Object e) {
              error = e;
            },
          );
      try {
        await Future<void>.delayed(const Duration(milliseconds: 200));
        expect(sdk, isNull);
      } finally {
        process.stdin.writeln('release');
        await process.stdin.close();
        expect(await process.exitCode, 0, reason: await errors);
      }
      await preparation;
      expect(error, isNull);
      expect(File('${sdk!.path}/manifest.json').existsSync(), isTrue);
    },
  );
}
