import 'dart:convert';
import 'dart:io';

import 'package:flax/native_target.dart';
import 'package:crypto/crypto.dart';

import 'src/example_engine.dart';
import 'src/local_engine.dart';
import 'src/platform_application.dart';
import 'src/platform_binary.dart';
import 'src/package_discovery.dart';
import 'src/process.dart';
import 'src/platform_selection.dart';

class SurvivorsOptions {
  SurvivorsOptions(
    List<String> arguments, {
    required FlaxNativeTarget target,
    required String? device,
  }) {
    const known = {'--release', '--build-only', '--acceptance', '--soak'};
    if (arguments.any((arg) => !known.contains(arg)) ||
        arguments.toSet().length != arguments.length) {
      throw ArgumentError(
        'Usage: survivors_run.dart [--release] [--build-only] [--acceptance | --soak]',
      );
    }
    release = arguments.contains('--release');
    buildOnly = arguments.contains('--build-only');
    soak = arguments.contains('--soak');
    acceptance = arguments.contains('--acceptance') || soak;
    if (!{
      'macos-arm64',
      'android-arm64',
      'ios-device-arm64',
      'ios-simulator-arm64',
    }.contains(target.name)) {
      throw UnsupportedError('Unsupported Survivors target: ${target.name}');
    }
    if (target.os == 'ios' && release != (target.name == 'ios-device-arm64')) {
      throw UnsupportedError('iOS requires simulator debug or device release');
    }
    if (target.mobile && !buildOnly && (device == null || device.isEmpty)) {
      throw ArgumentError('Set FLAX_CHECK_DEVICE for mobile launch');
    }
  }
  late final bool release;
  late final bool buildOnly;
  late final bool acceptance;
  late final bool soak;
}

String survivorsAndroidActivity(String source, {required bool acceptance}) {
  final declaration = RegExp(r'class MainActivity : FlutterActivity\(\)\s*$')
      .firstMatch(source);
  if (declaration == null) {
    throw StateError('Unexpected Android activity template');
  }
  return source.replaceRange(
    declaration.start,
    declaration.end,
    '''class MainActivity : FlutterActivity() {
${acceptance ? '''    override fun onCreate(savedInstanceState: android.os.Bundle?) {
        super.onCreate(savedInstanceState)
        window.addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
    }

''' : ''}    override fun onPostResume() {
        super.onPostResume()
        hideSurvivorsSystemBars()
    }

    override fun onWindowFocusChanged(hasFocus: Boolean) {
        super.onWindowFocusChanged(hasFocus)
        if (hasFocus) hideSurvivorsSystemBars()
    }

    @Suppress("DEPRECATION")
    private fun hideSurvivorsSystemBars() {
        if (android.os.Build.VERSION.SDK_INT >= 30) {
            window.setDecorFitsSystemWindows(false)
            window.insetsController?.let { controller ->
                controller.systemBarsBehavior = android.view.WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
                controller.hide(android.view.WindowInsets.Type.systemBars())
            }
        } else {
            window.decorView.systemUiVisibility =
                android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY or
                android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE or
                android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or
                android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
                android.view.View.SYSTEM_UI_FLAG_FULLSCREEN or
                android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
        }
    }
}
''',
  );
}

void copySurvivorsScreenshot(String log, Directory output) {
  for (final match in RegExp(
    r'FLAX_SURVIVORS_SCREENSHOT:([^\r\n]+)',
  ).allMatches(log)) {
    final source = File(match.group(1)!.trim());
    if (source.existsSync()) {
      source.copySync('${output.path}/${source.uri.pathSegments.last}');
    }
  }
}

Future<Map<String, Object?>> survivorsMacCodeIdentity(String product) async {
  final signed = await Process.run('/usr/bin/codesign', [
    '--display',
    '--verbose=4',
    product,
  ]);
  final output = '${signed.stdout}\n${signed.stderr}';
  final hash = RegExp(
    r'^CandidateCDHashFull sha256=([a-f0-9]{64})$',
    multiLine: true,
  ).firstMatch(output)?.group(1);
  if (signed.exitCode != 0 || hash == null) {
    throw StateError(
      'Cannot identify signed application CodeDirectory: $output',
    );
  }
  // The signed resource envelope also covers Debug Dart kernels and nested AOT code.
  return {
    'codeDirectorySha256': hash,
    'format': 'codesign CandidateCDHashFull sha256',
  };
}

void archiveSurvivorsEvidence(Directory output) {
  final files = output
      .listSync()
      .whereType<File>()
      .where(
        (file) =>
            {
              'build.json',
              'acceptance.log',
              'run.json',
            }.contains(file.uri.pathSegments.last) ||
            file.path.endsWith('.png'),
      )
      .toList();
  if (files.isEmpty) return;
  final archive = Directory(
    '${output.path}/previous/${DateTime.now().toUtc().microsecondsSinceEpoch}',
  )..createSync(recursive: true);
  for (final file in files) {
    file.renameSync('${archive.path}/${file.uri.pathSegments.last}');
  }
}

Future<void> main(List<String> arguments) => command(() async {
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final scratch = Directory('$root/.local/tmp')..createSync(recursive: true);
  if (Directory.systemTemp.resolveSymbolicLinksSync() !=
      scratch.resolveSymbolicLinksSync()) {
    throw StateError('Set TMPDIR, TMP and TEMP to $root/.local/tmp');
  }
  final target = currentCheckTarget();
  final device = Platform.environment['FLAX_CHECK_DEVICE'];
  final options = SurvivorsOptions(arguments, target: target, device: device);
  final mode = options.release ? 'release' : 'debug';
  final label =
      'survivors-${target.name}-$mode${options.soak
          ? '-soak'
          : options.acceptance
          ? '-acceptance'
          : ''}';
  final output = Directory('$root/build/$label')..createSync(recursive: true);
  final receipt = File('${output.path}/build.json');
  archiveSurvivorsEvidence(output);
  await buildJsDependencies(root, Directory('$root/examples/survivors/js'));
  await run(
    'pnpm',
    ['run', 'bundle'],
    directory: '$root/examples/survivors/js',
    environment: {'FLAX_SURVIVORS_ACCEPTANCE': options.acceptance ? '1' : '0'},
  );
  String? bundle;
  late String relocated;
  await withExample(root, 'v8', 'survivors', (example) async {
    if (options.acceptance) {
      // Only acceptance products include the integration plugin and test entry.
      final file = File('$example/pubspec.yaml');
      final spec = readYamlFile(file);
      (spec['dependencies'] as Map)['integration_test'] = {'sdk': 'flutter'};
      file.writeAsStringSync(jsonEncode(spec));
      await run('flutter', ['pub', 'get'], directory: example);
    }
    configurePlatformProject(example, target);
    if (target.os == 'android') {
      final activity = Directory('$example/android/app/src/main/kotlin')
          .listSync(recursive: true)
          .whereType<File>()
          .singleWhere((file) => file.path.endsWith('/MainActivity.kt'));
      activity.writeAsStringSync(
        survivorsAndroidActivity(
          activity.readAsStringSync(),
          acceptance: options.acceptance,
        ),
      );
    }
    if (target.os == 'ios') {
      final project = File('$example/ios/Runner.xcodeproj/project.pbxproj');
      project.writeAsStringSync(
        project.readAsStringSync().replaceAllMapped(
          RegExp(r'PRODUCT_BUNDLE_IDENTIFIER = ([^;]+);'),
          (m) =>
              'PRODUCT_BUNDLE_IDENTIFIER = dev.flax.lumenoutpost${m[1]!.contains("RunnerTests") ? ".RunnerTests" : ""};',
        ),
      );
    }
    await run('flutter', [
      'build',
      ...platformBuildArguments(
        target,
        release: options.release,
        signed: target.name == 'ios-device-arm64',
      ),
      '--no-pub',
      if (options.acceptance) ...[
        '--target=integration_test/app_test.dart',
        '--dart-define=FLAX_SURVIVORS_ACCEPTANCE=true',
        if (options.soak) '--dart-define=FLAX_SURVIVORS_SOAK=true',
      ],
    ], directory: example);
    final product = platformProduct(example, target, release: options.release);
    relocated =
        '${output.path}/${target.os == 'android'
            ? 'app.apk'
            : target.os == 'ios'
            ? 'Runner.app'
            : 'flax_survivors.app'}';
    if (target.os == 'android') {
      File(product).copySync(relocated);
    } else {
      if (Directory(relocated).existsSync()) {
        Directory(relocated).deleteSync(recursive: true);
      }
      await run('ditto', [product, relocated]);
    }
    if (target.mobile) {
      bundle = await applicationBundle(example, target, relocated);
    }
    final audit = await verifyEngineApplication(
      relocated,
      mode,
      target: target,
    );
    final engineLock = File(
      '${flutterEngineSource()}/flutter/flax/source.lock.json',
    );
    final engine = jsonDecode(engineLock.readAsStringSync()) as Map;
    final selectedPath = switch (target.name) {
      'macos-arm64' =>
        'flax_mac_${mode}_arm64/FlutterMacOS.framework/Versions/A/FlutterMacOS',
      'android-arm64' => 'flax_android_${mode}_arm64/libflutter.so',
      'ios-device-arm64' => 'flax_ios_${mode}_arm64/Flutter.framework/Flutter',
      'ios-simulator-arm64' =>
        'flax_ios_${mode}_sim_arm64/Flutter.framework/Flutter',
      _ => throw UnsupportedError(target.name),
    };
    final selectedBinary = File('${flutterEngineSource()}/out/$selectedPath');
    final selectedHash = (await sha256.bind(selectedBinary.openRead()).first)
        .toString();
    final binaryIdentity = <String, Object?>{
      'selectedPath': selectedBinary.path,
      'selectedSha256': selectedHash,
      'compiledSourceRevisionVerified': false,
    };
    if (target.os == 'android') {
      final extraction = await Process.start('unzip', [
        '-p',
        relocated,
        'lib/arm64-v8a/libflutter.so',
      ]);
      final errors = extraction.stderr.transform(utf8.decoder).join();
      binaryIdentity['packagedSha256'] =
          (await sha256.bind(extraction.stdout).first).toString();
      if (await extraction.exitCode != 0) throw StateError(await errors);
      binaryIdentity['packagedPath'] = 'lib/arm64-v8a/libflutter.so';
    } else {
      final packaged = File(
        target.os == 'macos'
            ? '$relocated/Contents/Frameworks/FlutterMacOS.framework/Versions/A/FlutterMacOS'
            : '$relocated/Frameworks/Flutter.framework/Flutter',
      );
      binaryIdentity['packagedPath'] = packaged.path;
      binaryIdentity['packagedSha256'] =
          (await sha256.bind(packaged.openRead()).first).toString();
      for (final entry in {
        'selectedUuid': selectedBinary,
        'packagedUuid': packaged,
      }.entries) {
        final uuid = await Process.run('xcrun', [
          'dwarfdump',
          '--uuid',
          entry.value.path,
        ]);
        if (uuid.exitCode != 0) {
          throw StateError('Cannot inspect actual engine UUID: ${uuid.stderr}');
        }
        binaryIdentity[entry.key] = (uuid.stdout as String).trim();
      }
    }
    final revision = await Process.run('git', [
      'rev-parse',
      'HEAD',
    ], workingDirectory: root);
    receipt.writeAsStringSync(
      const JsonEncoder.withIndent('  ').convert({
        ...audit,
        'configuredSdkSource': {
          for (final key in [
            'flutter',
            'flutterRevision',
            'dartRevision',
            'flaxBridgeRevision',
            'v8Version',
            'v8Revision',
          ])
            key: engine[key],
          'sourceLockSha256': sha256
              .convert(engineLock.readAsBytesSync())
              .toString(),
        },
        'engineBinary': binaryIdentity,
        if (target.os == 'macos')
          'applicationCode': await survivorsMacCodeIdentity(relocated),
        'sourceRevision': (revision.stdout as String).trim(),
        'applicationPackageSha256': sha256
            .convert(
              File('$root/examples/survivors/assets/flax.flax')
                  .readAsBytesSync(),
            )
            .toString(),
        'target': target.name,
        'mode': mode,
        'acceptance': options.acceptance,
        'soak': options.soak,
        'product': relocated,
        'bundle': bundle,
        'device': device,
        'buildOnly': options.buildOnly,
      }),
    );
    if (!options.buildOnly && !options.acceptance) {
      await run(
        'flutter',
        [
          'run',
          '--$mode',
          '--no-pub',
          '-d',
          device ?? target.os,
          '--use-application-binary=$relocated',
        ],
        directory: example,
        timeout: const Duration(days: 1),
      );
    }
  }, forApplication: true);
  if (options.buildOnly) {
    stdout.writeln('Audited build: $relocated; receipt: ${receipt.path}');
    return;
  }
  if (options.acceptance) {
    const marker = 'FLAX_SURVIVORS_PASSED';
    late String log;
    final logFile = File('${output.path}/acceptance.log')
      ..writeAsStringSync('');
    final outcome = File('${output.path}/run.json');
    final runIdentity = {
      'startedUtc': DateTime.now().toUtc().toIso8601String(),
      'buildReceipt': receipt.path,
      'buildReceiptSha256': sha256
          .convert(receipt.readAsBytesSync())
          .toString(),
      'product': relocated,
    };
    void saveOutcome(String status, [Object? error]) =>
        outcome.writeAsStringSync(
          jsonEncode({
            ...runIdentity,
            'status': status,
            if (error != null) 'error': '$error',
          }),
        );
    saveOutcome('running');
    try {
      log = target.mobile
          ? await runMobileApplication(
              target,
              device!,
              relocated,
              bundle!,
              marker,
              failureMarker: 'FLAX_SURVIVORS_FAILED',
              logPath: logFile.path,
              timeout: Duration(minutes: options.soak ? 50 : 10),
            )
          : await runDesktopApplication(
              target,
              relocated,
              marker,
              failureMarker: 'FLAX_SURVIVORS_FAILED',
              logPath: logFile.path,
              timeout: Duration(minutes: options.soak ? 50 : 10),
            );
    } catch (error) {
      saveOutcome('failed', error);
      if (target.os == 'macos') {
        copySurvivorsScreenshot(
          '${logFile.readAsStringSync()}\n$error',
          output,
        );
      }
      rethrow;
    }
    if (target.os == 'macos') {
      copySurvivorsScreenshot(log, output);
    }
    saveOutcome('passed');
    return;
  }
});
