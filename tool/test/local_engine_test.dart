import 'dart:io';

import 'package:test/test.dart';
import 'package:flax/native_target.dart';

import '../src/local_engine.dart';
import '../src/process.dart';

void main() {
  test('static subprocesses drop only the local engine override', () async {
    final temporary = Directory.systemTemp.createTempSync(
      'flax-static-engine-',
    );
    try {
      final script = File('${temporary.path}/check.dart')
        ..writeAsStringSync('''
import 'dart:io';
void main() {
  final env = Platform.environment;
  final retained = env['FLUTTER_ENGINE'] == env['FLAX_TEST_ENGINE_SOURCE'];
  if (env['FLAX_TEST_MARKER'] != 'preserved' ||
      (env['FLAX_TEST_USE_ENGINE'] == 'true'
          ? !retained
          : env.containsKey('FLUTTER_ENGINE'))) {
    exit(73);
  }
}
''');
      for (final useLocalEngine in [true, false]) {
        await run(
          Platform.resolvedExecutable,
          [script.path],
          useLocalEngine: useLocalEngine,
          environment: {
            'FLUTTER_ENGINE': '${temporary.path}/missing',
            'FLAX_TEST_ENGINE_SOURCE': '${temporary.path}/missing',
            'FLAX_TEST_MARKER': 'preserved',
            'FLAX_TEST_USE_ENGINE': '$useLocalEngine',
          },
        );
      }
    } finally {
      temporary.deleteSync(recursive: true);
    }
  });

  test(
    'official engine flags select matching modes and reject missing builds',
    () {
      final source = Directory.systemTemp.createTempSync('flax-local-engine-');
      try {
        for (final mode in ['debug', 'profile', 'release']) {
          final output = '${source.path}/out/flax_mac_${mode}_arm64';
          File('$output/flutter_tester')
            ..parent.createSync(recursive: true)
            ..writeAsStringSync('');
          File('$output/FlutterMacOS.framework/Versions/A/FlutterMacOS')
            ..parent.createSync(recursive: true)
            ..writeAsStringSync('');
        }
        for (final (command, mode) in [
          (['test', '--no-pub'], 'debug'),
          (['run', '--profile'], 'profile'),
          (['build', 'macos'], 'release'),
          (['build', 'macos', '--debug'], 'debug'),
          (['drive', '--release'], 'release'),
        ]) {
          final args = localEngineArguments(command, source: source.path);
          expect(args.take(3), [
            '--local-engine-src-path=${source.path}',
            '--local-engine=flax_mac_${mode}_arm64',
            '--local-engine-host=flax_mac_${mode}_arm64',
          ]);
          expect(args.skip(3), command);
        }
        expect(localEngineArguments(['pub', 'get']), ['pub', 'get']);
        expect(
          () =>
              localEngineArguments(['test'], source: '${source.path}/missing'),
          throwsStateError,
        );
        expect(
          () => localEngineArguments(['run', '--local-engine=other']),
          throwsArgumentError,
        );
      } finally {
        source.deleteSync(recursive: true);
      }
    },
  );

  test('Android uses its engine and the matching macOS host tools', () {
    final source = Directory.systemTemp.createTempSync('flax-android-engine-');
    addTearDown(() => source.deleteSync(recursive: true));
    final target = FlaxNativeTarget('android-arm64');
    expect(
      () => localEngineArguments(
        ['build', 'apk'],
        source: source.path,
        target: target,
      ),
      throwsStateError,
    );
    File('${source.path}/out/flax_android_release_arm64/flutter.jar')
      ..parent.createSync(recursive: true)
      ..writeAsStringSync('');
    expect(
      localEngineArguments(
        ['build', 'apk'],
        source: source.path,
        target: target,
      ).take(3),
      [
        '--local-engine-src-path=${source.path}',
        '--local-engine=flax_android_release_arm64',
        '--local-engine-host=flax_mac_release_arm64',
      ],
    );
    expect(
      () => localEngineArguments(
        ['build', 'apk'],
        source: source.path,
        target: FlaxNativeTarget('android-x64'),
      ),
      throwsUnsupportedError,
    );
  });
}
