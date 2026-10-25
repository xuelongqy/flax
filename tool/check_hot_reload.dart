import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'src/example_engine.dart';
import 'src/package_verification.dart';
import 'src/platform_application.dart';
import 'src/platform_selection.dart';
import 'src/process.dart';
import 'src/ui_suite.dart';
import 'src/ui_testing.dart';

const _tests = <UiTestFile>[
  (packageName: 'flax', path: 'test/ui/hot_reload_verification_test.dart'),
  (packageName: 'flax_websocket', path: 'test/ui/hot_reload_test.dart'),
];

Future<void> main() => command(() async {
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final target = currentCheckTarget();
  if (!{
    'macos-arm64',
    'android-arm64',
    'ios-simulator-arm64',
  }.contains(target.name)) {
    throw UnsupportedError('HMR acceptance requires a maintained debug engine');
  }
  final device = Platform.environment['FLAX_CHECK_DEVICE'];
  if (target.mobile && (device == null || device.isEmpty)) {
    throw ArgumentError('Mobile HMR acceptance requires FLAX_CHECK_DEVICE');
  }
  const engine = 'v8';
  if (Platform.environment['FLAX_CHECK_PREPARED'] != '1') {
    await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
    await run('node', ['tool/ui_bundle.mjs'], directory: root);
  }
  if (!target.mobile) {
    for (final test in _tests) {
      await runFrameworkTests(
        root,
        engine: engine,
        packageName: test.packageName,
        file: test.path,
      );
    }
    return;
  }
  final deviceId = device!;

  final server = await Process.start('node', [
    '$root/packages/flax_websocket/js/test/hot_reload_server.mjs',
  ]);
  final stdoutLines = server.stdout
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .asBroadcastStream();
  final stderrLines = server.stderr
      .transform(utf8.decoder)
      .listen(stderr.write);
  String? adb;
  String? port;
  try {
    final ready = await stdoutLines
        .firstWhere((line) => line.startsWith('{"url":'))
        .timeout(const Duration(seconds: 10));
    final config = jsonDecode(ready) as Map;
    if (target.os == 'android') {
      final sdk =
          Platform.environment['ANDROID_HOME'] ??
          Platform.environment['ANDROID_SDK_ROOT'];
      adb = sdk == null ? 'adb' : '$sdk/platform-tools/adb';
      port = 'tcp:${Uri.parse(config['url'] as String).port}';
      await run(adb, ['-s', deviceId, 'reverse', port, port]);
    }
    final fixtures = await prepareUiFixtures(root, _tests);
    fixtures['flax_websocket']!['hot_reload_server.json'] = ready;
    final results = '$root/build/hmr/${target.name}-$deviceId.json';
    final receiptFile = File(results);
    if (receiptFile.existsSync()) receiptFile.deleteSync();
    await withExample(root, engine, 'standalone', (app) async {
      final packages = Directory.fromUri(
        Directory(app).uri.resolve('../../packages/'),
      );
      for (final test in _tests) {
        for (final directory in ['test', '.dart_tool/flax/ui']) {
          copyTree(
            Directory('$root/packages/${test.packageName}/$directory'),
            Directory('${packages.path}/${test.packageName}/$directory'),
          );
        }
      }
      rewriteDartDirectiveUris(packages, Directory(root), packages.parent);
      selectExampleEngine(root, packages.path, engine);
      final entry = File('$app/integration_test/hot_reload_test.dart')
        ..parent.createSync(recursive: true);
      entry.writeAsStringSync(
        uiSuiteSource(
          _tests,
          importPrefix: '../../../packages/',
          mobile: true,
          ios: target.os == 'ios',
          directLaunch: true,
          marker: 'FLAX_HMR_PASSED',
          fixtures: fixtures,
        ),
      );
      configurePlatformProject(app, target);
      if (target.os == 'ios') {
        final project = File('$app/ios/Runner.xcodeproj/project.pbxproj');
        project.writeAsStringSync(
          project.readAsStringSync().replaceAll(
            RegExp(r'IPHONEOS_DEPLOYMENT_TARGET = [^;]+;'),
            'IPHONEOS_DEPLOYMENT_TARGET = 16.3;',
          ),
        );
      }
      await run('flutter', [
        'build',
        target.os == 'ios' ? 'ios' : 'apk',
        if (target.os == 'ios') '--simulator',
        '--debug',
        '--no-pub',
        if (target.os == 'android') '--target-platform=android-arm64',
        '--target=integration_test/hot_reload_test.dart',
      ], directory: app);
      final product = platformProduct(app, target, release: false);
      final androidAdb = adb;
      if (androidAdb != null) {
        await run(androidAdb, [
          '-s',
          deviceId,
          'shell',
          'input',
          'keyevent',
          'KEYCODE_WAKEUP',
        ]);
        await run(androidAdb, [
          '-s',
          deviceId,
          'shell',
          'wm',
          'dismiss-keyguard',
        ]);
      }
      await runMobileApplication(
        target,
        deviceId,
        product,
        await applicationBundle(app, target, product),
        'FLAX_HMR_PASSED',
        uiResultsPath: results,
      );
    });
    final receipt = jsonDecode(File(results).readAsStringSync()) as Map;
    final cases = receipt['binding'] as Map;
    final expected = target.os == 'ios' ? 4 : 3;
    if (cases.length != expected ||
        cases.values.any((result) => result != 'success')) {
      throw StateError(
        'Expected three HMR cases and iOS setup to pass: $cases',
      );
    }
    stdout.writeln('${target.name} $engine HMR: 3/3 passed. $results');
  } finally {
    if (adb != null && port != null) {
      await Process.run(adb, ['-s', deviceId, 'reverse', '--remove', port]);
    }
    server.kill();
    try {
      await server.exitCode.timeout(const Duration(seconds: 3));
    } on TimeoutException {
      server.kill(ProcessSignal.sigkill);
      await server.exitCode;
    }
    await stderrLines.cancel();
  }
});
