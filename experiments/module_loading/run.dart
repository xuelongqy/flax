import 'dart:convert';
import 'dart:io';

import 'package:flax/native_target.dart';

import '../../tool/src/example_engine.dart';
import '../../tool/src/platform_application.dart';
import '../../tool/src/platform_binary.dart';
import '../../tool/src/process.dart';

Future<void> main() => command(() async {
  final root = Directory.current.path;
  final device = Platform.environment['FLAX_CHECK_DEVICE'];
  if (device == null || device.isEmpty) {
    throw ArgumentError('FLAX_CHECK_DEVICE must identify a connected iPhone');
  }
  final target = FlaxNativeTarget('ios-device-arm64');
  final tracing = Platform.environment['FLAX_ENTRY_TRACE'] == '1';
  final output = Directory(
    '$root/build/module-loading${tracing ? '-trace' : ''}',
  )..createSync(recursive: true);
  final product = '${output.path}/Runner.app';
  late String bundle;
  late Map<String, Object?> audit;
  await withExample(root, 'v8', 'standalone', (example) async {
    File('$example/lib/main.dart').writeAsStringSync(
      File('$root/experiments/module_loading/app.dart').readAsStringSync(),
    );
    final delegate = File('$example/ios/Runner/AppDelegate.swift');
    final swift = delegate.readAsStringSync();
    if (!swift.contains('return super.application(')) {
      throw StateError('Unexpected benchmark AppDelegate template');
    }
    delegate.writeAsStringSync(
      swift.replaceFirst(
        'return super.application(',
        'application.isIdleTimerDisabled = true\n    return super.application(',
      ),
    );
    final project = File('$example/ios/Runner.xcodeproj/project.pbxproj');
    project.writeAsStringSync(
      project.readAsStringSync().replaceAll(
        RegExp(r'IPHONEOS_DEPLOYMENT_TARGET = [^;]+;'),
        'IPHONEOS_DEPLOYMENT_TARGET = 16.3;',
      ),
    );
    await run('flutter', [
      'analyze',
      '--no-pub',
      '--fatal-infos',
      'lib/main.dart',
    ], directory: example);
    await run('flutter', [
      'build',
      'ios',
      '--release',
      '--no-pub',
      if (tracing) '--dart-define=FLAX_ENTRY_TRACE=true',
    ], directory: example);
    final built = '$example/build/ios/iphoneos/Runner.app';
    bundle = await applicationBundle(example, target, built);
    if (Directory(product).existsSync()) {
      Directory(product).deleteSync(recursive: true);
    }
    await run('ditto', [built, product]);
    audit = await verifyEngineApplication(product, 'release', target: target);
  });
  final log = await runMobileApplication(
    target,
    device,
    product,
    bundle,
    'FLAX_ENTRY_PASSED',
    timeout: const Duration(minutes: 4),
  );
  const prefix = 'FLAX_ENTRY_RESULT_GZIP_BASE64:';
  final encoded = const LineSplitter()
      .convert(log)
      .where((line) => line.contains(prefix))
      .map((line) => line.substring(line.indexOf(prefix) + prefix.length))
      .join();
  final data =
      jsonDecode(utf8.decode(gzip.decode(base64Decode(encoded)))) as Map;
  if (data['completed'] != true ||
      (data['errors'] as List).isNotEmpty ||
      (data['results'] as List).length != 14) {
    throw StateError('Incomplete entry responsiveness measurements');
  }
  File('${output.path}/results.json').writeAsStringSync(
    const JsonEncoder.withIndent('  ').convert({
      ...data,
      ...audit,
      'mode': 'release',
      'sourceRemovedBeforeLaunch': true,
      'v8JitlessVerified': log.contains(
        'FLAX_V8_JITLESS: probe executed without generated machine code',
      ),
    }),
  );
  stdout.writeln('Entry responsiveness results: ${output.path}/results.json');
});
