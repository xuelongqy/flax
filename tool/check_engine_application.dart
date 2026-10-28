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
  final stressSeconds = int.tryParse(
    Platform.environment['FLAX_CHECK_STRESS_SECONDS'] ?? '0',
  );
  if (stressSeconds == null || stressSeconds < 0 || stressSeconds > 3600) {
    throw ArgumentError('FLAX_CHECK_STRESS_SECONDS must be between 0 and 3600');
  }
  if (!{'debug', 'profile', 'release'}.contains(mode)) {
    throw ArgumentError('Expected debug, profile or release');
  }
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final target = currentCheckTarget();
  final android = target.name == 'android-arm64';
  final ios = target.os == 'ios';
  if (stressSeconds > 0 && !ios) {
    throw UnsupportedError('The sustained GC acceptance currently targets iOS');
  }
  final simulator = target.name == 'ios-simulator-arm64';
  if (!{
    'macos-arm64',
    'android-arm64',
    'ios-device-arm64',
    'ios-simulator-arm64',
  }.contains(target.name)) {
    throw UnsupportedError(
      'No maintained engine acceptance for ${target.name}',
    );
  }
  if (ios && mode != (simulator ? 'debug' : 'release')) {
    throw UnsupportedError(
      'iOS acceptance requires simulator debug or device release/AOT',
    );
  }
  final mobile = android || ios;
  const engine = 'v8';
  final device = Platform.environment['FLAX_CHECK_DEVICE'];
  if (mobile) {
    if (device == null || device.isEmpty) {
      throw ArgumentError('Mobile acceptance requires FLAX_CHECK_DEVICE');
    }
  } else {
    requireUiAssets(root);
  }
  final tests = collectUiTests(root)
      .where(
        (test) =>
            // This development-server contract has its own check_hot_reload.dart gate.
            !(test.packageName == 'flax_websocket' &&
                test.path == 'test/ui/hot_reload_test.dart'),
      )
      .toList();
  final fixtures = await prepareUiFixtures(root, tests);
  final name =
      'engine-gc-${mobile ? '${target.name}-' : ''}$mode${stressSeconds > 0 ? '-stress' : ''}';
  final receipt = File('$root/build/$name.json');
  receipt.parent.createSync(recursive: true);
  if (receipt.existsSync()) receipt.deleteSync();
  final relocated =
      '$root/build/$name/${android
          ? 'app.apk'
          : ios
          ? 'Runner.app'
          : 'flax_standalone.app'}';
  String? bundle;
  Map<String, Object?>? audit;
  await withExample(root, engine, 'standalone', (example) async {
    final packages = Directory.fromUri(
      Directory(example).uri.resolve('../../packages/'),
    );
    final owners = tests.map((test) => test.packageName).toSet();
    final missing = owners
        .where((name) => !Directory('${packages.path}/$name').existsSync())
        .toList();
    copyDartPackages(Directory(root), packages, missing);
    for (final owner in owners) {
      for (final directory in ['test', '.dart_tool/flax/ui']) {
        copyTree(
          Directory('$root/packages/$owner/$directory'),
          Directory('${packages.path}/$owner/$directory'),
        );
      }
    }
    rewriteDartDirectiveUris(packages, Directory(root), packages.parent);
    selectExampleEngine(root, packages.path, engine);
    File('$example/assets/engine-fixtures.json')
        .writeAsStringSync(jsonEncode(fixtures));
    final entry = File('$example/integration_test/engine_gc_test.dart');
    var source = entry.readAsStringSync();
    final additional = tests
        .where(
          (test) =>
              !source.contains("packages/${test.packageName}/${test.path}'") &&
              !(test.packageName == 'flax' &&
                  {
                    'test/ui/engine_runtime_test.dart',
                    'test/ui/engine_gc_test.dart',
                  }.contains(test.path)),
        )
        .toList();
    source = source.replaceFirst(
      'void main() {',
      '${[for (var i = 0; i < additional.length; i++) "import '../../../packages/${additional[i].packageName}/${additional[i].path}' as extra$i;"].join('\n')}\nvoid main() {',
    );
    const registration =
        "  if (const bool.fromEnvironment('FLAX_ENGINE_BENCHMARK')) {";
    if (!source.contains(registration)) {
      throw StateError('Engine test registration changed');
    }
    source = source.replaceFirst(
      registration,
      '${[for (var i = 0; i < additional.length; i++) "  group('${additional[i].packageName}/${additional[i].path}', extra$i.main);"].join('\n')}\n'
      '${mobile ? mobileViewportSetup : ''}\n${ios ? iosSemanticsSetup : ''}\n'
      '$registration',
    );
    entry.writeAsStringSync(source);
    final manifest = File('$example/pubspec.yaml');
    final pubspec = readYamlFile(manifest);
    for (final name in missing) {
      (pubspec['dependencies'] as Map)[name] = {'path': '../../packages/$name'};
    }
    if (mobile && mode == 'release') {
      // Flutter excludes dev plugins from release; this fixture uses integration_test.
      (pubspec['dependencies'] as Map)['integration_test'] =
          (pubspec['dev_dependencies'] as Map).remove('integration_test');
    }
    manifest.writeAsStringSync(jsonEncode(pubspec));
    await run('flutter', ['pub', 'get'], directory: example);
    await run(Platform.resolvedExecutable, [
      'analyze',
      '--fatal-infos',
      'integration_test/engine_gc_test.dart',
    ], directory: example);
    configurePlatformProject(example, target);
    if (ios) {
      // Exercise production libffi on the actual signed engine, without test hooks.
      await run('node', [
        '--input-type=module',
        '-e',
        "import {build} from 'esbuild'; "
            "import {flaxEsbuildPlugin} from './packages/flax_build/js/src/esbuild.mjs'; "
            "await build({entryPoints:['packages/flax_ffi/test/runtime/device-smoke.js'],"
            "outfile:${jsonEncode('$example/assets/ffi-smoke.js')},bundle:true,"
            "platform:'neutral',format:'iife',target:'es2020',"
            "plugins:[flaxEsbuildPlugin(null,{nativeAssets:false})]});",
      ], directory: root);
      final fixture = '$example/ffi-fixture';
      await run('xcrun', [
        '--sdk',
        simulator ? 'iphonesimulator' : 'iphoneos',
        'clang',
        '-target',
        'arm64-apple-ios16.3${simulator ? '-simulator' : ''}',
        '-std=c17',
        '-O2',
        '-fvisibility=hidden',
        '-c',
        '$root/packages/flax_ffi/test/runtime/native/fixture.c',
        '-o',
        '$fixture.o',
      ]);
      await run('xcrun', ['ar', 'rcs', '$fixture.a', '$fixture.o']);
      await run('python3', [
        '-B',
        '-c',
        'import sys; from pathlib import Path; '
            'sys.path.insert(0, sys.argv[1]); from run import root_static_library; '
            'root_static_library(Path(sys.argv[2]), Path(sys.argv[3]), [])',
        '$root/packages/flax_ffi/test/runtime',
        '$example/ios/Runner.xcodeproj/project.pbxproj',
        '$fixture.a',
      ]);
      final project = File('$example/ios/Runner.xcodeproj/project.pbxproj');
      project.writeAsStringSync(
        project.readAsStringSync().replaceAll(
          RegExp(r'IPHONEOS_DEPLOYMENT_TARGET = [^;]+;'),
          'IPHONEOS_DEPLOYMENT_TARGET = 16.3;',
        ),
      );
      await run('flutter', [
        'build',
        'ios',
        if (simulator) '--simulator',
        '--$mode',
        '--no-pub',
        '--target=integration_test/engine_gc_test.dart',
        '--dart-define=FLAX_ENGINE_DIRECT_LAUNCH=true',
        '--dart-define=FLAX_ENGINE_STRESS_SECONDS=$stressSeconds',
      ], directory: example);
      final product =
          '$example/build/ios/${simulator ? 'iphonesimulator' : 'iphoneos'}/Runner.app';
      bundle = await applicationBundle(example, target, product);
      if (Directory(relocated).existsSync()) {
        Directory(relocated).deleteSync(recursive: true);
      }
      Directory(relocated).parent.createSync(recursive: true);
      await run('ditto', [product, relocated]);
      if (simulator) {
        await run('codesign', [
          '--force',
          '--sign',
          '-',
          '--timestamp=none',
          '--deep',
          relocated,
        ]);
      }
      audit = await verifyEngineApplication(relocated, mode, target: target);
      return;
    }
    if (android) {
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
  if (mobile || mode == 'release') {
    // Full owner discovery includes the Canvas WPT suite, like check_ui.dart.
    final applicationTimeout = stressSeconds > 0
        ? Duration(seconds: stressSeconds + 180)
        : const Duration(hours: 1);
    final output = mobile
        ? await runMobileApplication(
            target,
            device!,
            relocated,
            bundle!,
            'FLAX_ENGINE_PASSED',
            timeout: applicationTimeout,
          )
        : await runDesktopApplication(
            FlaxNativeTarget('macos-arm64'),
            relocated,
            'FLAX_ENGINE_PASSED',
            timeout: applicationTimeout,
            environment: {'FLAX_VERIFY_V8_JIT': '1'},
          );
    if (!output.contains(
      ios
          ? 'FLAX_V8_JITLESS: probe executed without generated machine code'
          : 'FLAX_V8_JIT: machine code generated',
    )) {
      throw StateError('${ios ? 'V8 jitless' : 'V8 JIT'} proof is missing');
    }
    final prefix = mobile
        ? 'FLAX_ENGINE_RESULT_GZIP_BASE64:'
        : 'FLAX_ENGINE_RESULT:';
    final result = const LineSplitter()
        .convert(output)
        .where((line) => line.contains(prefix))
        .map((line) => line.substring(line.indexOf(prefix) + prefix.length))
        .join();
    final data = jsonDecode(
      mobile ? utf8.decode(gzip.decode(base64Decode(result))) : result,
    ) as Map<String, dynamic>;
    receipt.writeAsStringSync(
      jsonEncode({
        ...data,
        ...?audit,
        'target': target.name,
        'mode': mode,
        'uiFiles': [
          for (final test in tests) '${test.packageName}/${test.path}',
        ],
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
