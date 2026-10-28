import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';

import '../../tool/src/example_engine.dart';
import '../../tool/src/local_engine.dart';
import '../../tool/src/package_discovery.dart';
import '../../tool/src/package_verification.dart';
import '../../tool/src/platform_application.dart';
import '../../tool/src/platform_binary.dart';
import '../../tool/src/platform_selection.dart';
import '../../tool/src/process.dart';
import '../../tool/src/ui_suite.dart';

Future<void> main(List<String> arguments) => command(() async {
  final mode = arguments.isEmpty ? 'debug' : arguments.single;
  final target = currentCheckTarget();
  final ios = target.os == 'ios';
  final simulator = target.name == 'ios-simulator-arm64';
  if (!{
        'ios-simulator-arm64',
        'ios-device-arm64',
        'android-arm64',
      }.contains(target.name) ||
      !['debug', 'release'].contains(mode) ||
      ios && mode != (simulator ? 'debug' : 'release')) {
    throw ArgumentError(
      'Select iOS simulator debug, iOS device release or Android debug/release',
    );
  }
  final device = Platform.environment['FLAX_CHECK_DEVICE'];
  if (device == null) throw ArgumentError('FLAX_CHECK_DEVICE is required');
  const engine = 'v8';
  if (!ios) {
    if (Platform.environment['ANDROID_HOME'] == null) {
      throw ArgumentError('ANDROID_HOME is required for the APK audit');
    }
    await run('llvm-readobj', ['--version']);
  }
  final root = Directory.fromUri(Platform.script.resolve('../../')).path;
  final evidence = Directory('$root/.local/canvas-native')
    ..createSync(recursive: true);
  final label = '${target.name}-$mode';
  final receipt = File('${evidence.path}/application-$label.json');
  if (receipt.existsSync()) receipt.deleteSync();
  final casesFile = File('${evidence.path}/cases-$label.json');
  if (casesFile.existsSync()) casesFile.deleteSync();
  final fixtures = await prepareUiFixtures(
    root,
    collectUiTests(root, packageName: 'flax_canvas'),
  );
  await withPackageExample(root, findPackage(root, 'flax_canvas'), engine, (
    app,
  ) async {
    configurePlatformProject(app, target);
    const bundle = 'dev.flax.canvas.acceptance';
    if (ios) {
      final project = File('$app/ios/Runner.xcodeproj/project.pbxproj');
      project.writeAsStringSync(
        project
            .readAsStringSync()
            .replaceAll(
              RegExp(r'IPHONEOS_DEPLOYMENT_TARGET = [^;]+;'),
              'IPHONEOS_DEPLOYMENT_TARGET = 16.3;',
            )
            .replaceAll(
              RegExp(r'PRODUCT_BUNDLE_IDENTIFIER = [^;]+;'),
              'PRODUCT_BUNDLE_IDENTIFIER = $bundle;',
            ),
      );
    } else {
      final gradle = File('$app/android/app/build.gradle.kts');
      final settings = gradle.readAsStringSync().replaceAllMapped(
        RegExp(r'(namespace|applicationId) = "[^"]+"'),
        (match) => '${match[1]} = "$bundle"',
      );
      gradle.writeAsStringSync('''$settings
android.defaultConfig.ndk.abiFilters.add("arm64-v8a")
android.packaging.jniLibs.keepDebugSymbols.add("**/libflutter.so")
''');
      for (final file in Directory(
        '$app/android/app/src',
      ).listSync(recursive: true).whereType<File>()) {
        if (file.path.endsWith('MainActivity.kt')) {
          file.writeAsStringSync(
            file.readAsStringSync().replaceFirst(
              RegExp(r'package [^\n]+'),
              'package $bundle',
            ),
          );
        }
      }
      File('$app/android/gradle.properties').writeAsStringSync(
        '\ndisable-abi-filtering=true\n',
        mode: FileMode.append,
      );
    }
    copyDartPackages(Directory(root), Directory('$app/../packages'), [
      'flax_test',
    ]);
    final testRoot = Directory('$app/test/canvas');
    copyTree(Directory('$root/packages/flax_canvas/test'), testRoot);
    selectExampleEngine(root, testRoot.path, engine);
    final manifest = File('$app/pubspec.yaml');
    final pubspec = readYamlFile(manifest);
    final dependencies = pubspec['dependencies'] as Map<String, dynamic>;
    dependencies['integration_test'] = {'sdk': 'flutter'};
    final dev = pubspec['dev_dependencies'] as Map<String, dynamic>;
    dev.remove('integration_test');
    dev.addAll({
      'flax_test': {'path': '../packages/flax_test'},
      'path_drawing': '1.0.1',
      'material_ui': '1.1.1',
    });
    manifest.writeAsStringSync(jsonEncode(pubspec));
    File('$app/assets/canvas-fixtures.json')
        .writeAsStringSync(jsonEncode(fixtures));
    final marker =
        'FLAX_CANVAS_MOBILE_${DateTime.now().microsecondsSinceEpoch}';
    final entry = File('$app/integration_test/canvas_mobile_test.dart')
      ..parent.createSync(recursive: true);
    entry.writeAsStringSync('''
import 'dart:convert';
${ios && !simulator ? "import 'dart:async';\nimport 'dart:io';" : ''}
import 'dart:ffi' show DynamicLibrary;
import 'package:flax/runtime.dart';
import 'package:flax_engine_$engine/flax_engine_$engine.dart';
import 'package:flax_canvas/src/canvas_bindings.g.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flax_test/runtime.dart' show flaxEngineGcContract;
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import '../test/canvas/commands_test.dart' as commands;
import '../test/canvas/ui/canvas_test.dart' as canvas;
import '../test/canvas/ui/wpt_test.dart' as wpt;
import '../test/canvas/ui/font_image_test.dart' as capabilities;

void main() {
  ${ios && !simulator ? '''
  runZoned(runTests, zoneSpecification: ZoneSpecification(
    print: (self, parent, zone, line) {
      stdout.writeln(line);
    },
  ));''' : 'runTests();'}
}

void runTests() {
  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  final native = FlaxCanvasBindings(DynamicLibrary.process());
  final resources = native.flax_canvas_dispatch(0, 10, 0, 0, 0);
  ${ios ? iosSemanticsSetup : ''}
  $mobileViewportSetup
  setUpAll(() async {
    final packages = jsonDecode(await rootBundle.loadString('assets/canvas-fixtures.json')) as Map;
    final files = (packages['flax_canvas'] as Map).cast<String, String>();
    flaxTestLoadFixturePackages({'flax_canvas': files});
    await flaxTestLoadModuleAssets(files);
    final runtime = ${engineFactoryClass(root, engine)}.createRuntime();
    try {
      expect((runtime.evaluate('40 + 2') as FlaxJsNumber).value, 42);
      print('CANVAS_RUNTIME $engine');
    } finally { runtime.dispose(); }
  });
  group('flax_canvas/test/commands_test.dart', commands.main);
  group('flax_canvas/test/ui/canvas_test.dart', canvas.main);
  group('flax_canvas/test/ui/wpt_test.dart', wpt.main);
  group('flax_canvas/test/ui/font_image_test.dart', capabilities.main);
  group('joint GC', () {
    flaxEngineGcContract(registerTest: (name, body) {
      testWidgets(name, (tester) async {
        await tester.pumpWidget(const SizedBox.shrink());
        await tester.runAsync(() async => await body());
      });
    });
  });
  tearDownAll(() {
    expect(native.flax_canvas_dispatch(0, 10, 0, 0, 0), resources);
  });
  binding.allTestsPassed.future.then((passed) {
    for (final entry in binding.results.entries) {
      print('FLAX_UI_RESULT:' + jsonEncode({'name': entry.key,
        'status': entry.value == 'success' ? 'success' : 'failure'}));
    }
    print(passed ? '$marker' : 'FLAX_ENGINE_FAILED');
  });
}
''');
    await run('flutter', ['pub', 'get'], directory: app);
    await run('dart', ['analyze', entry.path], directory: app);
    await run('flutter', [
      'build',
      ios ? 'ios' : 'apk',
      if (simulator) '--simulator',
      '--$mode',
      '--no-pub',
      if (!ios) '--target-platform=android-arm64',
      '--target=integration_test/canvas_mobile_test.dart',
    ], directory: app);
    final product = ios
        ? '$app/build/ios/${simulator ? 'iphonesimulator' : 'iphoneos'}/Runner.app'
        : '$app/build/app/outputs/flutter-apk/app-$mode.apk';
    final audit = await verifyEngineApplication(product, mode, target: target);
    if (!ios) {
      final result = await Process.run('unzip', [
        '-p',
        product,
        'lib/arm64-v8a/libflutter.so',
      ], stdoutEncoding: null);
      if (result.exitCode != 0) {
        throw StateError('Cannot inspect the APK Canvas engine');
      }
      final input = File(
        '${flutterEngineSource()}/out/flax_android_${mode}_arm64/libflutter.so',
      );
      final expected = sha256.convert(input.readAsBytesSync()).toString();
      if (sha256.convert(result.stdout as List<int>).toString() != expected) {
        throw StateError('The APK does not contain the selected Canvas engine');
      }
      audit['canvasEngineSha256'] = expected;
    }
    try {
      final log = await runMobileApplication(
        target,
        device,
        product,
        bundle,
        marker,
        timeout: const Duration(minutes: 15),
        uiResultsPath: '${evidence.path}/cases-$label.json',
      );
      File('${evidence.path}/runtime-$label.log').writeAsStringSync(log);
      final results = jsonDecode(
        File('${evidence.path}/cases-$label.json').readAsStringSync(),
      ) as Map;
      final cases = results['binding'] as Map;
      if (cases.isEmpty || cases.values.any((value) => value != 'success')) {
        throw StateError('The device did not report a complete passing suite');
      }
      receipt.writeAsStringSync(
        const JsonEncoder.withIndent('  ').convert({
          'target': target.name,
          'engine': engine,
          'mode': mode,
          'device': device,
          'passed': true,
          'reportedWidgetCases': cases.length,
          'audit': audit,
          'logSha256': sha256.convert(utf8.encode(log)).toString(),
        }),
      );
    } finally {
      if (simulator) {
        await Process.run('xcrun', ['simctl', 'uninstall', device, bundle]);
      } else if (ios) {
        await Process.run('xcrun', [
          'devicectl',
          'device',
          'uninstall',
          'app',
          '--device',
          device,
          bundle,
        ]);
      } else {
        final sdk = Platform.environment['ANDROID_HOME']!;
        await Process.run('$sdk/platform-tools/adb', [
          '-s',
          device,
          'uninstall',
          bundle,
        ]);
      }
    }
  });
});
