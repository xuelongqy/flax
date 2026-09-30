import 'dart:convert';
import 'dart:io';

import 'package:flax/native_sdk.dart';
import 'package:flax/native_target.dart';

import 'src/package_discovery.dart';
import 'src/package_verification.dart';
import 'src/platform_application.dart';
import 'src/platform_binary.dart';
import 'src/platform_selection.dart';
import 'src/process.dart';

Future<void> main(List<String> arguments) => command(() async {
  final options = PlatformCheckOptions(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  if (options.list) {
    stdout.writeln(
      '${options.target.name}: ${options.engines.join(', ')}; ${options.scope}',
    );
    if (options.scope == 'all') {
      stdout.writeln(
        'Host: melos check (JS/Dart logic, generated files, static analysis; once)',
      );
      for (final package in discoverPackages(root)) {
        if (!package.uiTests.existsSync()) continue;
        for (final test
            in package.uiTests
                .listSync(recursive: true)
                .whereType<File>()
                .where((f) => f.path.endsWith('_test.dart'))) {
          stdout.writeln(
            'UI ${package.name}: ${test.path} (${options.target.mobile ? 'device debug app' : 'headless widget'}; VM-service GC enabled)',
          );
        }
      }
    }
    stdout.writeln(
      'Each engine: native ABI/contracts, SDK architecture/exports, runtime and loop closures, external application',
    );
    stdout.writeln(
      options.target.mobile
          ? 'Mobile: --device required; iOS simulator uses Dart JIT; iOS device/Android release build uses Dart AOT. iOS V8 is jitless.'
          : 'Desktop: CLI Dart JIT/AOT relocation, framework/application loading and release relocation; V8 machine-code proof.',
    );
    stdout.writeln(
      '--build-only records builds only; never reports runtime/application acceptance.',
    );
    return;
  }
  final target = options.target;
  if (!options.buildOnly &&
      !target.mobile &&
      target.name != FlaxNativeTarget.host().name) {
    throw StateError(
      'Current process ABI is ${FlaxNativeTarget.host().name}, expected ${target.name}',
    );
  }
  if (!options.buildOnly && target.mobile) {
    await _requireDevice(target, options.device!);
  }
  final environment = {
    'FLAX_CHECK_TARGET': target.name,
    'FLAX_CHECK_PREPARED': '1',
    if (options.device != null) 'FLAX_CHECK_DEVICE': options.device!,
  };
  Future<void> dart(String path, [List<String> args = const []]) => run(
    Platform.resolvedExecutable,
    ['run', path, ...args],
    directory: root,
    environment: environment,
  );
  if (options.scope == 'all' && !options.buildOnly) {
    await run(Platform.resolvedExecutable, [
      'run',
      'melos',
      'run',
      'check',
    ], directory: root);
    await dart('tool/ffi.dart', ['--check']);
  } else {
    await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
    await run('node', ['tool/ui_bundle.mjs'], directory: root);
    await run('node', ['tool/example_bundle.mjs'], directory: root);
  }
  final results = <Map<String, Object?>>[];
  final assets = <FlaxNativeSdkResult>[];
  final errors = <String>[];
  Map<String, Object?>? coexistence;
  var sharedLibrariesVerified = false;
  for (final engine in options.engines) {
    final record = <String, Object?>{
      'target': target.name,
      'engine': engine,
      'scope': options.scope,
      'built': false,
      'ran': false,
      'applicationDelivered': false,
      'buildOnly': options.buildOnly,
    };
    results.add(record);
    try {
      final package = findPackage(root, 'flax_engine_$engine').directory;
      final output = Directory('${package.path}/build/platform/${target.name}');
      final built = await buildFlaxNativeSdk(
        engine: engine,
        target: target,
        packageRoot: package.uri,
        coreRoot: findPackage(root, 'flax').directory.uri,
        cacheRoot: Directory(
          Platform.environment['FLAX_ENGINE_SDK_CACHE'] ??
              '${package.path}/.cache/sdk',
        ).absolute.uri,
        outputRoot: output.uri,
        buildTests: !target.mobile,
      );
      assets.add(built);
      await verifyNativeAssets(target, engine, built);
      record['built'] = true;
      record['sdk'] = jsonDecode(
        File('${output.path}/sdk-receipt.json').readAsStringSync(),
      );
      if (!options.buildOnly && !target.mobile) {
        await run('cmake', [
          '--build',
          '${output.path}/cmake',
          '--config',
          'Release',
          '--target',
          if (engine == 'v8') ...[
            'flax_v8_runtime_test',
            'flax_v8_lifecycle_test',
          ] else
            'flax_runtime_test',
        ]);
        await run('ctest', [
          '--test-dir',
          '${output.path}/cmake',
          '-C',
          'Release',
          '--output-on-failure',
        ]);
        await verifyPackage(Directory(root), engine: engine);
        if (options.scope == 'all') {
          await run(Platform.resolvedExecutable, [
            'test',
            'integration_test',
            '--reporter',
            'expanded',
          ], directory: '$root/packages/flax_engine_$engine');
        }
        record['ran'] = true;
        if (options.scope == 'all') {
          await dart('tool/check_ui.dart', ['--engine=$engine']);
        }
      }
      final application = await verifyPlatformApplication(
        root,
        target,
        engine,
        buildOnly: options.buildOnly,
        device: options.device,
        full: options.scope == 'all',
      );
      record.addAll(application);
    } catch (error) {
      record['error'] = error.toString();
      errors.add('$engine: $error');
      stderr.writeln('$engine ${target.name}: $error');
    }
  }
  if (assets.length == options.engines.length) {
    try {
      await verifySharedLibraries(assets);
      sharedLibrariesVerified = true;
      if (options.engines.length == 2 && !options.buildOnly) {
        coexistence = await verifyPlatformApplication(
          root,
          target,
          'v8',
          buildOnly: false,
          device: options.device,
          coexistence: true,
        );
      }
      if (options.engines.length == 2 && !options.buildOnly && !target.mobile) {
        await dart('tool/check_engines.dart');
      }
    } catch (error) {
      errors.add(error.toString());
    }
  }
  final receipt = File('$root/build/platform/${target.name}/verification.json')
    ..parent.createSync(recursive: true);
  receipt.writeAsStringSync(
    const JsonEncoder.withIndent('  ').convert({
      'results': results,
      'errors': errors,
      'sharedLibrariesVerified': sharedLibrariesVerified,
      'coexistence': coexistence,
    }),
  );
  stdout.writeln('Evidence: ${receipt.path}');
  if (errors.isNotEmpty) {
    throw StateError('Platform verification failed: ${errors.join('\n')}');
  }
});

Future<void> _requireDevice(FlaxNativeTarget target, String id) async {
  final result = await Process.run('flutter', ['devices', '--machine']);
  if (result.exitCode != 0) {
    throw StateError('Cannot inspect devices: ${result.stderr}');
  }
  final devices = (jsonDecode(result.stdout as String) as List)
      .cast<Map<String, dynamic>>();
  final device = devices.where((d) => d['id'] == id).firstOrNull;
  if (device == null) throw StateError('Device $id is unavailable');
  if (target.os == 'ios') {
    if (device['targetPlatform'] != 'ios' ||
        device['emulator'] != target.name.contains('simulator')) {
      throw StateError('Device $id is not ${target.name}');
    }
  } else {
    final sdk =
        Platform.environment['ANDROID_HOME'] ??
        Platform.environment['ANDROID_SDK_ROOT'];
    final adb = sdk == null
        ? 'adb'
        : '$sdk/platform-tools/adb${Platform.isWindows ? '.exe' : ''}';
    final abis = await Process.run(adb, [
      '-s',
      id,
      'shell',
      'getprop',
      'ro.product.cpu.abilist',
    ]);
    if (!device['targetPlatform'].toString().startsWith('android-') ||
        abis.exitCode != 0 ||
        !(abis.stdout as String)
            .trim()
            .split(',')
            .contains(target.androidAbi)) {
      throw StateError('Device $id does not support ${target.androidAbi}');
    }
    final api = await Process.run(adb, [
      '-s',
      id,
      'shell',
      'getprop',
      'ro.build.version.sdk',
    ]);
    if (api.exitCode != 0 ||
        (int.tryParse((api.stdout as String).trim()) ?? 0) < 24) {
      throw StateError('Device $id requires Android API 24 or newer');
    }
  }
}
