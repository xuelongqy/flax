import 'dart:convert';
import 'dart:io';

import 'package:flax/native_target.dart';

import 'src/example_engine.dart';
import 'src/platform_application.dart';
import 'src/platform_binary.dart';
import 'src/package_discovery.dart';
import 'src/package_verification.dart';
import 'src/process.dart';
import 'src/platform_selection.dart';
import 'src/ui_suite.dart';
import 'src/ui_testing.dart';

Future<void> main(List<String> arguments) => command(() async {
  final mode = arguments.isEmpty ? 'debug' : arguments.single;
  if (!{'debug', 'profile', 'release'}.contains(mode)) {
    throw ArgumentError('Expected debug, profile or release');
  }
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final target = currentCheckTarget();
  final android = target.name == 'android-arm64';
  final device = Platform.environment['FLAX_CHECK_DEVICE'];
  if (android) {
    if (device == null || device.isEmpty) {
      throw ArgumentError('Android acceptance requires FLAX_CHECK_DEVICE');
    }
  } else {
    requireUiAssets(root);
  }
  final tests = collectUiTests(root, packageName: 'flax');
  final fixtures = await prepareUiFixtures(root, tests);
  final name = 'engine-gc-${android ? '${target.name}-' : ''}$mode';
  final receipt = File('$root/build/$name.json');
  receipt.parent.createSync(recursive: true);
  if (receipt.existsSync()) receipt.deleteSync();
  final relocated =
      '$root/build/$name/${android ? 'app.apk' : 'flax_standalone.app'}';
  String? bundle;
  Map<String, Object?>? audit;
  await withExample(root, 'v8', 'standalone', (example) async {
    final packages = Directory.fromUri(
      Directory(example).uri.resolve('../../packages/'),
    );
    for (final directory in ['test', '.dart_tool/flax/ui']) {
      copyTree(
        Directory('$root/packages/flax/$directory'),
        Directory('${packages.path}/flax/$directory'),
      );
    }
    rewriteDartDirectiveUris(packages, Directory(root), packages.parent);
    selectExampleEngine(root, '${packages.path}/flax/test', 'v8');
    File('$example/assets/engine-fixtures.json')
        .writeAsStringSync(jsonEncode(fixtures));
    if (android) {
      if (mode == 'release') {
        // This acceptance entry uses the plugin that release excludes from dev deps.
        final manifest = File('$example/pubspec.yaml');
        final pubspec = readYamlFile(manifest);
        (pubspec['dependencies'] as Map)['integration_test'] =
            (pubspec['dev_dependencies'] as Map).remove('integration_test');
        manifest.writeAsStringSync(jsonEncode(pubspec));
        await run('flutter', ['pub', 'get'], directory: example);
      }
      final properties = File('$example/android/gradle.properties');
      properties.writeAsStringSync(
        '\ndisable-abi-filtering=true\n',
        mode: FileMode.append,
      );
      final gradle = File('$example/android/app/build.gradle.kts');
      gradle.writeAsStringSync('''
${gradle.readAsStringSync()}
// Preserve the immutable SDK libraries for the application hash audit.
android.packaging.jniLibs.keepDebugSymbols.addAll(
    listOf("**/libv8.so", "**/libc++_shared.so"))
android.defaultConfig.ndk.abiFilters.add("arm64-v8a")
''');
      await run('flutter', [
        'build',
        'apk',
        '--$mode',
        '--no-pub',
        '--target-platform=android-arm64',
        '--target=integration_test/engine_gc_test.dart',
        '--dart-define=FLAX_ENGINE_DIRECT_LAUNCH=true',
      ], directory: example);
      final product = '$example/build/app/outputs/flutter-apk/app-$mode.apk';
      bundle = await applicationBundle(example, target, product);
      File(relocated).parent.createSync(recursive: true);
      File(product).copySync(relocated);
      audit = await verifyEngineApplication(relocated, mode, target: target);
      return;
    }
    if (mode == 'release') {
      await run('flutter', [
        'build',
        'macos',
        '--release',
        '--no-pub',
        '--target=integration_test/engine_gc_test.dart',
        '--dart-define=FLAX_ENGINE_DIRECT_LAUNCH=true',
      ], directory: example);
      final product =
          '$example/build/macos/Build/Products/Release/flax_standalone.app';
      if (Directory(relocated).existsSync()) {
        Directory(relocated).deleteSync(recursive: true);
      }
      Directory(relocated).parent.createSync(recursive: true);
      await run('ditto', [product, relocated]);
      audit = await verifyEngineApplication(relocated, mode);
      return;
    }
    await run(
      'flutter',
      [
        'drive',
        '--$mode',
        '--no-pub',
        '-d',
        'macos',
        '--driver=test_driver/engine_gc.dart',
        '--target=integration_test/engine_gc_test.dart',
        if (mode == 'profile') '--dart-define=FLAX_ENGINE_BENCHMARK=true',
        if (mode == 'profile') '--endless-trace-buffer',
        '--no-dds',
      ],
      directory: example,
      environment: {'FLAX_ENGINE_CHECK_MODE': mode, 'FLAX_VERIFY_V8_JIT': '1'},
    );
    File('$example/build/engine-gc-$mode.json').copySync(receipt.path);
  });
  if (android || mode == 'release') {
    final output = android
        ? await runMobileApplication(
            target,
            device!,
            relocated,
            bundle!,
            'FLAX_ENGINE_PASSED',
            timeout: const Duration(minutes: 20),
          )
        : await runDesktopApplication(
            FlaxNativeTarget('macos-arm64'),
            relocated,
            'FLAX_ENGINE_PASSED',
            environment: {'FLAX_VERIFY_V8_JIT': '1'},
          );
    if (!output.contains('FLAX_V8_JIT: machine code generated')) {
      throw StateError('V8 JIT proof is missing');
    }
    final prefix = android
        ? 'FLAX_ENGINE_RESULT_BASE64:'
        : 'FLAX_ENGINE_RESULT:';
    final result = const LineSplitter()
        .convert(output)
        .where((line) => line.contains(prefix))
        .map((line) => line.substring(line.indexOf(prefix) + prefix.length))
        .join();
    final data = jsonDecode(
      android ? utf8.decode(base64Decode(result)) : result,
    ) as Map<String, dynamic>;
    receipt.writeAsStringSync(
      jsonEncode({
        ...data,
        ...?audit,
        'target': target.name,
        'mode': mode,
        'sourceRemovedBeforeLaunch': true,
      }),
    );
    if (data['completed'] != true || (data['failures'] as List).isNotEmpty) {
      throw StateError(
        '${target.name} $mode engine GC application did not pass',
      );
    }
  }
});
