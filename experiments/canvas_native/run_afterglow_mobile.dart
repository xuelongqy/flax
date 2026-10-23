import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';

import '../../tool/src/example_engine.dart';
import '../../tool/src/local_engine.dart';
import '../../tool/src/package_discovery.dart';
import '../../tool/src/platform_application.dart';
import '../../tool/src/platform_binary.dart';
import '../../tool/src/platform_selection.dart';
import '../../tool/src/process.dart';

Future<void> main(List<String> arguments) => command(() async {
  final pacing = arguments.length == 1 && arguments.single == '--pacing';
  final target = currentCheckTarget();
  final device = Platform.environment['FLAX_CHECK_DEVICE'];
  if ((arguments.isNotEmpty && !pacing) ||
      !{
        'ios-simulator-arm64',
        'ios-device-arm64',
        'android-arm64',
      }.contains(target.name) ||
      device == null) {
    throw ArgumentError(
      'Select an iOS simulator, iOS device or Android device through FLAX_CHECK_TARGET and FLAX_CHECK_DEVICE',
    );
  }
  final ios = target.os == 'ios';
  final simulator = target.name == 'ios-simulator-arm64';
  if (pacing && !simulator) {
    throw ArgumentError('Pacing diagnostics use the iOS simulator');
  }
  final mode = simulator ? 'debug' : 'release';
  final engine = ios ? 'hermes' : 'v8';
  final root = Directory.fromUri(Platform.script.resolve('../../')).path;
  final output = Directory(
    '$root/.local/canvas-native/afterglow/${pacing ? 'pacing/${Platform.environment['PACING_LABEL'] ?? 'current'}' : 'mobile'}',
  )..createSync(recursive: true);
  await withPackageExample(root, findPackage(root, 'flax_canvas'), engine, (
    app,
  ) async {
    configurePlatformProject(app, target);
    final manifest = File('$app/pubspec.yaml');
    final pubspec = readYamlFile(manifest);
    (pubspec['dev_dependencies'] as Map?)?.remove('integration_test');
    manifest.writeAsStringSync(jsonEncode(pubspec));
    await run('flutter', ['pub', 'get'], directory: app);
    const bundle = 'dev.flax.canvas.afterglow';
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
      final configuration = gradle.readAsStringSync().replaceAllMapped(
        RegExp(r'(namespace|applicationId) = "[^"]+"'),
        (m) => '${m[1]} = "$bundle"',
      );
      gradle.writeAsStringSync(
        '$configuration\nandroid.defaultConfig.ndk.abiFilters.add("arm64-v8a")\n'
        'android.packaging.jniLibs.keepDebugSymbols.addAll(listOf("**/libflutter.so", "**/libv8.so", "**/libc++_shared.so"))\n',
      );
      for (final file in Directory(
        '$app/android/app/src',
      ).listSync(recursive: true).whereType<File>()) {
        if (file.path.endsWith('MainActivity.kt')) {
          file.writeAsStringSync('''package $bundle
import io.flutter.embedding.android.FlutterActivity
class MainActivity : FlutterActivity() {
    override fun onCreate(savedInstanceState: android.os.Bundle?) {
        super.onCreate(savedInstanceState)
        getExternalFilesDir(null)
    }
}
''');
        }
      }
      File('$app/android/gradle.properties').writeAsStringSync(
        '\ndisable-abi-filtering=true\n',
        mode: FileMode.append,
      );
    }
    File(
      '$root/.local/canvas-native/afterglow/${pacing ? 'pacing' : 'native'}.js',
    ).copySync('$app/assets/afterglow.js');
    final entry = File('$app/lib/afterglow_main.dart')
      ..writeAsStringSync(
        "import 'package:flax_engine_$engine/flax_engine_$engine.dart';\n"
        "import '${File('$root/experiments/canvas_native/${pacing ? 'pacing' : 'afterglow'}_app.dart').uri}' as app;\n"
        'void main() => app.${pacing ? 'runPacing' : 'runAfterglow'}(${engineFactoryClass(root, engine)}.createRuntime);\n',
      );
    await run('dart', ['analyze', entry.path], directory: app);
    await run('flutter', [
      'build',
      ios ? 'ios' : 'apk',
      '--$mode',
      '--no-pub',
      if (simulator) '--simulator',
      if (!ios) '--target-platform=android-arm64',
      '--target=lib/afterglow_main.dart',
      '--dart-define=AFTERGLOW_MOBILE=true',
      if (ios && !simulator) '--dart-define=AFTERGLOW_DEVICE_CONSOLE=true',
      if (!ios)
        '--dart-define=AFTERGLOW_OUTPUT=/sdcard/Android/data/$bundle/files',
    ], directory: app);
    final product = ios
        ? '$app/build/ios/${simulator ? 'iphonesimulator' : 'iphoneos'}/Runner.app'
        : '$app/build/app/outputs/flutter-apk/app-release.apk';
    final audit = await verifyEngineApplication(product, mode, target: target);
    if (!ios) {
      final unpacked = await Process.run('unzip', [
        '-p',
        product,
        'lib/arm64-v8a/libflutter.so',
      ], stdoutEncoding: null);
      final expected = sha256
          .convert(
            File(
              '${flutterEngineSource()}/out/flax_android_release_arm64/libflutter.so',
            ).readAsBytesSync(),
          )
          .toString();
      if (unpacked.exitCode != 0 ||
          sha256.convert(unpacked.stdout as List<int>).toString() != expected) {
        throw StateError('APK does not contain the selected Canvas engine');
      }
      audit['canvasEngineSha256'] = expected;
    }
    File('${output.path}/${target.name}-application.json')
        .writeAsStringSync(jsonEncode(audit));
    try {
      for (var round = 1; round <= 3; round++) {
        final log = await runMobileApplication(
          target,
          device,
          product,
          bundle,
          'AFTERGLOW_PASSED',
          timeout: const Duration(minutes: 5),
        );
        final prefix = '${output.path}/${target.name}-$round';
        File('$prefix.log').writeAsStringSync(log);
        String? simulatorData;
        if (simulator) {
          final container = await Process.run('xcrun', [
            'simctl',
            'get_app_container',
            device,
            bundle,
            'data',
          ]);
          if (container.exitCode != 0) {
            throw StateError(
              'Cannot locate simulator app data: ${container.stderr}',
            );
          }
          simulatorData = (container.stdout as String).trim();
        }
        // Device file transfer avoids truncation and burst loss in platform logs.
        for (final name in [
          if (pacing) ...[
            'pacing.json',
            for (final phase in [
              'dart',
              'js-idle',
              'canvas',
              'canvas-alloc',
              'dart-after',
            ])
              'pacing-$phase-timeline.json',
          ] else ...[
            '$mode.json',
            for (final scene in ['bloom', 'orbit', 'weave'])
              for (final glow in ['crisp', 'soft']) '$mode-$scene-$glow.png',
          ],
        ]) {
          if (simulator) {
            File('$simulatorData/tmp/afterglow/$name')
                .copySync('$prefix-$name');
          } else if (ios) {
            await run('xcrun', [
              'devicectl',
              'device',
              'copy',
              'from',
              '--device',
              device,
              '--domain-type',
              'appDataContainer',
              '--domain-identifier',
              bundle,
              '--source',
              'tmp/afterglow/$name',
              '--destination',
              '$prefix-$name',
            ]);
          } else {
            await run('adb', [
              '-s',
              device,
              'pull',
              '/sdcard/Android/data/$bundle/files/$name',
              '$prefix-$name',
            ]);
          }
        }
        final receipt = jsonDecode(
          File('$prefix-${pacing ? 'pacing' : mode}.json').readAsStringSync(),
        ) as Map;
        if (receipt['complete'] != true ||
            receipt['mode'] != mode ||
            (receipt['results'] as List).length != (pacing ? 5 : 12) ||
            receipt['pixel_readback_during_frames'] != false) {
          throw StateError('Incomplete mobile benchmark');
        }
        stdout.writeln('AFTERGLOW_MOBILE_SAVED $prefix');
      }
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
        await Process.run('adb', ['-s', device, 'uninstall', bundle]);
      }
    }
  });
});
