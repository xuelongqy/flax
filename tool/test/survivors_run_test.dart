import 'dart:io';

import 'package:flax/native_target.dart';
import 'package:test/test.dart';

import '../survivors_run.dart';

void main() {
  test('Android game activity is immersive in normal and acceptance products', () {
    const template =
        'package dev.flax.test\nimport io.flutter.embedding.android.FlutterActivity\nclass MainActivity : FlutterActivity()\n';
    for (final acceptance in [false, true]) {
      final source = survivorsAndroidActivity(template, acceptance: acceptance);
      expect(source, contains('package dev.flax.test'));
      expect(source, contains('android.os.Build.VERSION.SDK_INT >= 30'));
      expect(source, contains('window.setDecorFitsSystemWindows(false)'));
      expect(
        source,
        contains(
          'controller.hide(android.view.WindowInsets.Type.systemBars())',
        ),
      );
      expect(source, contains('BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE'));
      expect(source, contains('SYSTEM_UI_FLAG_IMMERSIVE_STICKY'));
      expect(source, contains('SYSTEM_UI_FLAG_HIDE_NAVIGATION'));
      expect(
        source,
        matches(
          RegExp(r'super.onPostResume\(\)\s+hideSurvivorsSystemBars\(\)'),
        ),
      );
      expect(
        source,
        matches(
          RegExp(
            r'super.onWindowFocusChanged\(hasFocus\)\s+if \(hasFocus\) hideSurvivorsSystemBars\(\)',
          ),
        ),
      );
      expect(source.contains('FLAG_KEEP_SCREEN_ON'), acceptance);
      expect(source.contains('override fun onCreate'), acceptance);
    }
    expect(
      () => survivorsAndroidActivity(
        'class OtherActivity : FlutterActivity()',
        acceptance: false,
      ),
      throwsStateError,
    );
    expect(
      () => survivorsAndroidActivity(
        'class MainActivity : FlutterActivity() { custom() }',
        acceptance: true,
      ),
      throwsStateError,
    );
  });

  test('host copies the actual sandbox screenshot named in native output', () {
    final scratch = Directory.systemTemp.createTempSync(
      'survivors-screenshot-',
    );
    addTearDown(() => scratch.deleteSync(recursive: true));
    final source = File('${scratch.path}/sandbox capture.png')
      ..writeAsBytesSync([137, 80, 78, 71]);
    final output = Directory('${scratch.path}/evidence')..createSync();
    copySurvivorsScreenshot(
      'noise\r\nFLAX_SURVIVORS_SCREENSHOT:${source.path}\r\n',
      output,
    );
    expect(File('${output.path}/sandbox capture.png').readAsBytesSync(), [
      137,
      80,
      78,
      71,
    ]);
  });
  test('superseded PASS receipts are archived before any new build', () {
    final output = Directory.systemTemp.createTempSync('survivors-receipts-');
    addTearDown(() => output.deleteSync(recursive: true));
    for (final name in [
      'build.json',
      'acceptance.log',
      'run.json',
      'gameplay.png',
    ]) {
      File('${output.path}/$name').writeAsStringSync('old PASS');
    }
    archiveSurvivorsEvidence(output);
    for (final name in [
      'build.json',
      'acceptance.log',
      'run.json',
      'gameplay.png',
    ]) {
      expect(File('${output.path}/$name').existsSync(), isFalse);
    }
    expect(
      Directory('${output.path}/previous')
          .listSync(recursive: true)
          .whereType<File>(),
      hasLength(4),
    );
  });
  test('Android failure marker finishes promptly and preserves partial diagnostics', () async {
    final scratch = Directory.systemTemp.createTempSync('survivors-adb-');
    addTearDown(() => scratch.deleteSync(recursive: true));
    final adb = File('${scratch.path}/platform-tools/adb')..parent.createSync();
    adb.writeAsStringSync(r'''#!/bin/sh
case "$3" in
  shell) case "$4" in date*) echo '11-05 12:00:00.000';; esac ;;
  logcat) echo 'current diagnostic'; echo 'FLAX_SURVIVORS_FAILED'; printf 'partial tail'; exec sleep 30 ;;
esac
''');
    expect((await Process.run('chmod', ['+x', adb.path])).exitCode, 0);
    final probe = File('${scratch.path}/probe.dart');
    final source = File('tool/src/platform_application.dart').absolute.uri;
    probe.writeAsStringSync('''
import 'package:flax/native_target.dart';
import '$source';
Future<void> main(List<String> args) async {
  final watch = Stopwatch()..start();
  try {
    await runMobileApplication(FlaxNativeTarget('android-arm64'), 'fake', 'fake.apk', 'dev.flax.test', 'FLAX_SURVIVORS_PASSED',
      failureMarker: 'FLAX_SURVIVORS_FAILED', logPath: args.single,
      timeout: const Duration(seconds: 2));
    throw StateError('Unexpected success');
  } on StateError catch (error) {
    if (!error.toString().contains('FLAX_SURVIVORS_FAILED')) rethrow;
    if (watch.elapsed >= const Duration(seconds: 2)) {
      throw StateError('Failure marker did not stop the launcher promptly');
    }
    print('EXPECTED_FAILURE');
  }
}
''');
    final log = File('${scratch.path}/acceptance.log');
    final result = await Process.run(
      Platform.resolvedExecutable,
      [
        '--packages=${Directory.current.path}/.dart_tool/package_config.json',
        probe.path,
        log.path,
      ],
      environment: {'ANDROID_HOME': scratch.path},
    );
    expect(result.exitCode, 0, reason: '${result.stdout} ${result.stderr}');
    expect(result.stdout, contains('EXPECTED_FAILURE'));
    expect(log.readAsStringSync(), contains('current diagnostic'));
    expect(log.readAsStringSync(), contains('FLAX_SURVIVORS_FAILED'));
    // A timeout also retains current partial output rather than an older PASS.
    adb.writeAsStringSync(
      adb.readAsStringSync().replaceAll("echo 'FLAX_SURVIVORS_FAILED'; ", ''),
    );
    final timed = await Process.run(
      Platform.resolvedExecutable,
      [
        '--packages=${Directory.current.path}/.dart_tool/package_config.json',
        probe.path,
        log.path,
      ],
      environment: {'ANDROID_HOME': scratch.path},
    );
    expect(timed.exitCode, isNot(0));
    expect(timed.stderr, contains('TimeoutException'));
    expect(log.readAsStringSync(), contains('current diagnostic'));
    expect(log.readAsStringSync(), isNot(contains('FLAX_SURVIVORS_FAILED')));
    expect(log.readAsStringSync(), contains('partial tail'));
  }, skip: Platform.isWindows);
  test(
    'macOS identity changes when only sealed Dart resources change',
    () async {
      final scratch = Directory.systemTemp.createTempSync(
        'survivors-code-identity-',
      );
      addTearDown(() => scratch.deleteSync(recursive: true));
      final app = Directory('${scratch.path}/Game.app');
      final binary = File('${app.path}/Contents/MacOS/Game')
        ..parent.createSync(recursive: true);
      File('/usr/bin/true').copySync(binary.path);
      File('${app.path}/Contents/Info.plist')
          .writeAsStringSync('''<?xml version="1.0"?><plist version="1.0"><dict>
<key>CFBundleIdentifier</key><string>dev.flax.identitytest</string>
<key>CFBundleExecutable</key><string>Game</string>
<key>CFBundlePackageType</key><string>APPL</string>
</dict></plist>''');
      final kernel = File(
        '${app.path}/Contents/Resources/flutter_assets/kernel_blob.bin',
      )..parent.createSync(recursive: true);
      Future<Map<String, Object?>> seal(String data) async {
        kernel.writeAsStringSync(data);
        final sign = await Process.run('/usr/bin/codesign', [
          '--force',
          '--sign',
          '-',
          app.path,
        ]);
        expect(sign.exitCode, 0, reason: '${sign.stderr}');
        return survivorsMacCodeIdentity(app.path);
      }

      final first = await seal('dart debug version 1');
      final second = await seal('dart debug version 2');
      expect(first['codeDirectorySha256'], matches(RegExp(r'^[a-f0-9]{64}$')));
      expect(
        second['codeDirectorySha256'],
        isNot(first['codeDirectorySha256']),
      );
    },
    skip: !Platform.isMacOS,
  );
  test(
    'launcher keeps test code opt-in and requires a mobile device to run',
    () {
      final mac = FlaxNativeTarget('macos-arm64');
      final defaults = SurvivorsOptions([], target: mac, device: null);
      expect(defaults.acceptance, isFalse);
      expect(defaults.release, isFalse);
      expect(defaults.buildOnly, isFalse);
      final soak = SurvivorsOptions(['--soak'], target: mac, device: null);
      expect(soak.soak, isTrue);
      expect(soak.acceptance, isTrue);
      final android = FlaxNativeTarget('android-arm64');
      expect(
        () => SurvivorsOptions([], target: android, device: null),
        throwsArgumentError,
      );
      expect(
        SurvivorsOptions(
          ['--release', '--build-only'],
          target: android,
          device: null,
        ).release,
        isTrue,
      );
      expect(
        () => SurvivorsOptions(['--other'], target: mac, device: null),
        throwsArgumentError,
      );
      expect(
        () => SurvivorsOptions(
          ['--release', '--release'],
          target: mac,
          device: null,
        ),
        throwsArgumentError,
      );
    },
  );

  test('physical iOS requires release while simulator requires debug', () {
    final ios = FlaxNativeTarget('ios-device-arm64');
    expect(
      () => SurvivorsOptions(['--build-only'], target: ios, device: null),
      throwsUnsupportedError,
    );
    expect(
      SurvivorsOptions(
        ['--release', '--build-only'],
        target: ios,
        device: null,
      ).release,
      isTrue,
    );
    expect(
      () => SurvivorsOptions(
        ['--release', '--build-only'],
        target: FlaxNativeTarget('ios-simulator-arm64'),
        device: null,
      ),
      throwsUnsupportedError,
    );
  });
}
