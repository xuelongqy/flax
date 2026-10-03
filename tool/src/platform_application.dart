import 'dart:convert';
import 'dart:async';
import 'dart:io';

import 'package:flax/native_target.dart';
import 'package:path/path.dart' as p;

import 'example_engine.dart';
import 'package_discovery.dart';
import 'package_verification.dart';
import 'process.dart';
import 'platform_binary.dart';

/// Build an external Flutter consumer from source packages, without repository paths.
Future<Map<String, Object?>> verifyPlatformApplication(
  String root,
  FlaxNativeTarget target,
  String engine, {
  required bool buildOnly,
  required String? device,
  bool full = false,
  bool coexistence = false,
}) async {
  final owners = full && target.mobile
      ? discoverPackages(root).where((p) => p.uiTests.existsSync()).toList()
      : <FlaxWorkspacePackage>[];
  final work = Directory.systemTemp.createTempSync(
    'flax-${target.name}-$engine-',
  );
  final evidence = Directory(
    '$root/build/platform/${target.name}/${coexistence ? 'coexistence' : engine}',
  )..createSync(recursive: true);
  try {
    final names = packageDependencyClosure(root, [
      'flax',
      'flax_test',
      'flax_engine_$engine',
      ...owners.map((p) => p.name),
      ...((readYamlFile(
                File('$root/examples/standalone/pubspec.yaml'),
              )['dependencies']
              as Map)
          .keys
          .cast<String>()),
    ], replaceEngineWith: engine).toList()..sort();
    if (coexistence && !names.contains('flax_engine_hermes')) {
      names.add('flax_engine_hermes');
    }
    final packages = Directory('${work.path}/packages');
    copyDartPackages(Directory(root), packages, names);
    copyTree(
      Directory('$root/packages/flax/native/tests'),
      Directory('${packages.path}/flax/native/tests'),
    );
    for (final owner in owners) {
      copyTree(
        Directory('${owner.directory.path}/test'),
        Directory('${packages.path}/${owner.name}/test'),
      );
      final fixtures = Directory('${owner.directory.path}/.dart_tool/flax/ui');
      if (fixtures.existsSync()) {
        copyTree(
          fixtures,
          Directory('${packages.path}/${owner.name}/.dart_tool/flax/ui'),
        );
      }
      selectExampleEngine(root, '${packages.path}/${owner.name}', engine);
    }
    final app = '${work.path}/app';
    await run('flutter', [
      'create',
      '--no-pub',
      '--platforms=${target.os}',
      '--project-name=flax_standalone',
      app,
    ]);
    final platformSources = await Process.run('git', [
      'ls-files',
      '--cached',
      '--others',
      '--exclude-standard',
      '-z',
      'examples/standalone/${target.os}',
    ], workingDirectory: root);
    if (platformSources.exitCode != 0) {
      throw StateError('Cannot enumerate platform application sources');
    }
    for (final path
        in (platformSources.stdout as String)
            .split('\u0000')
            .where((p) => p.isNotEmpty)) {
      final source = File('$root/$path');
      if (!source.existsSync()) continue;
      final destination = File(
        '$app/${path.substring('examples/standalone/'.length)}',
      );
      destination.parent.createSync(recursive: true);
      source.copySync(destination.path);
    }
    for (final directory in ['lib', 'assets', 'test/support']) {
      copyTree(
        Directory('$root/examples/standalone/$directory'),
        Directory('$app/$directory'),
      );
    }
    selectExampleEngine(root, app, engine);
    // Generated fixtures can contain absolute Dart directives; rewrite only copies.
    rewriteDartDirectiveUris(packages, Directory(root), work);
    final manifest = readYamlFile(
      File('$root/examples/standalone/pubspec.yaml'),
    )..remove('resolution');
    manifest['dependencies'] = {
      'flutter': {'sdk': 'flutter'},
      // This disposable consumer also runs integration assertions in release.
      'integration_test': {'sdk': 'flutter'},
      for (final name in names) name: {'path': '../packages/$name'},
    };
    (manifest['dev_dependencies'] as Map?)?.remove('integration_test');
    final defines = <String, Object?>{};
    manifest['hooks'] = {'user_defines': defines};
    for (final selected in coexistence ? ['hermes', 'v8'] : [engine]) {
      final package = '$root/packages/flax_engine_$selected';
      final lock = jsonDecode(
        File('$package/native/sdk.lock.json').readAsStringSync(),
      ) as Map;
      final digest = lock['targets'][target.name]['sha256'] as String;
      final cache =
          Platform.environment['FLAX_ENGINE_SDK_CACHE'] ??
          '$package/.cache/sdk';
      final archive = File('$cache/$digest.tar.gz').absolute;
      // Flutter filters custom environment variables when executing build hooks.
      // Reuse the archive already downloaded and verified by the native build.
      final sdk = {'sdkArchive': archive.path, 'sdkSha256': digest};
      defines['flax_engine_$selected'] = {'testContracts': true, ...sdk};
      if (selected == (coexistence ? 'hermes' : engine)) {
        defines['flax_native_assets'] = sdk;
      }
    }
    File('$app/pubspec.yaml').writeAsStringSync(jsonEncode(manifest));
    configurePlatformProject(app, target);
    final driver = File('$app/test_driver/platform.dart')
      ..parent.createSync(recursive: true);
    driver.writeAsStringSync(
      "import 'package:integration_test/integration_test_driver.dart';\nFuture<void> main() async { await integrationDriver(); }\n",
    );
    final integration = Directory('$app/integration_test')..createSync();
    final marker = 'FLAX_PLATFORM_${DateTime.now().microsecondsSinceEpoch}';
    // Real iOS debug builds still need Flutter's debugger for Dart JIT.
    final directLaunch =
        target.os != 'ios' || target.name.contains('simulator');
    Future<void> drive(String entry) async {
      if (directLaunch) {
        await run('flutter', [
          'build',
          ...platformBuildArguments(target, release: false, signed: true),
          '--no-pub',
          '--target=integration_test/$entry',
        ], directory: app);
        final product = platformProduct(app, target, release: false);
        if (target.mobile) {
          await _runMobileApplication(
            target,
            device!,
            product,
            await _applicationBundle(app, target, product),
            marker,
            timeout: Duration(minutes: full ? 10 : 3),
          );
        } else {
          await runDesktopApplication(target, product, marker);
        }
      } else {
        await run('flutter', [
          'drive',
          '--no-pub',
          '-d',
          device ?? target.os,
          '--driver=test_driver/platform.dart',
          '--target=integration_test/$entry',
        ], directory: app);
      }
    }

    File('${integration.path}/platform_test.dart').writeAsStringSync(
      _platformTest(
        target,
        engine,
        coexistence: coexistence,
        full: full,
        marker: marker,
      ),
    );
    if (!target.mobile) {
      File('${integration.path}/release_test.dart').writeAsStringSync(
        _platformTest(
          target,
          engine,
          release: true,
          coexistence: coexistence,
          full: full,
        ),
      );
    }
    if (coexistence) {
      final source = File('$root/tests/runtime/engines.dart')
          .readAsStringSync();
      File('$app/coexistence.dart').writeAsStringSync(
        source
            .replaceFirst(
              '// __FLAX_ENGINE_IMPORTS__',
              [
                for (final e in ['hermes', 'v8'])
                  "import 'package:flax_engine_$e/flax_engine_$e.dart';",
              ].join('\n'),
            )
            .replaceFirst(
              '    // __FLAX_ENGINE_FACTORIES__',
              [
                for (final e in ['hermes', 'v8'])
                  "    '$e': ${engineFactoryClass(root, e)}.createRuntime,",
              ].join('\n'),
            ),
      );
    }
    File('$root/pubspec.lock').copySync('$app/pubspec.lock');
    await run('flutter', ['pub', 'get'], directory: app);
    final buildArgs = platformBuildArguments(
      target,
      release: true,
      signed: !buildOnly,
    );
    await run('flutter', [
      'build',
      ...buildArgs,
      '--no-pub',
      if (!target.mobile) '--target=integration_test/release_test.dart',
      if (target.os == 'windows') '--verbose',
    ], directory: app);
    final production = platformProduct(app, target, release: true);
    final copied = '${evidence.path}/application';
    final previous = Directory(copied);
    if (previous.existsSync()) previous.deleteSync(recursive: true);
    previous.createSync();
    if (File(production).existsSync()) {
      File(production).copySync('$copied/${p.basename(production)}');
    } else if (target.apple) {
      await run('ditto', [production, '$copied/${p.basename(production)}']);
    } else {
      copyTree(Directory(production), previous);
    }
    final bundleChecks = await verifyApplicationAssets(
      target,
      app,
      production,
      coexistence ? ['hermes', 'v8'] : [engine],
      signed: target.os == 'macos' || !buildOnly,
    );
    final result = <String, Object?>{
      ...bundleChecks,
      'built': true,
      'ran': false,
      'applicationDelivered': false,
      'dartMode': target.name.contains('simulator') ? 'JIT' : 'AOT',
      'v8Mode': engine == 'v8'
          ? (target.os == 'ios' ? 'jitless' : 'JIT')
          : null,
      'application': copied,
    };
    if (buildOnly) return result;
    await drive('platform_test.dart');
    // Mobile shared assertions run on the selected device, not flutter-tester.
    for (final owner in owners) {
      final fixtures = Directory('$app/assets/fixtures')
        ..createSync(recursive: true);
      for (final old in fixtures.listSync()) {
        old.deleteSync(recursive: true);
      }
      final fixtureSource = Directory(
        '${owner.directory.path}/.dart_tool/flax/ui',
      );
      if (fixtureSource.existsSync()) copyTree(fixtureSource, fixtures);
      await run('openssl', [
        'req',
        '-x509',
        '-newkey',
        'rsa:2048',
        '-nodes',
        '-keyout',
        '${fixtures.path}/key.pem',
        '-out',
        '${fixtures.path}/certificate.pem',
        '-days',
        '1',
        '-subj',
        '/CN=localhost',
        '-addext',
        'subjectAltName=DNS:localhost,IP:127.0.0.1',
      ]);
      final texts = {
        for (final file in fixtures.listSync(recursive: true).whereType<File>())
          p.relative(file.path, from: fixtures.path).replaceAll('\\', '/'): file
              .readAsStringSync(),
      };
      File('$app/assets/test-fixtures.json')
          .writeAsStringSync(jsonEncode(texts));
      final paths =
          owner.uiTests
              .listSync(recursive: true)
              .whereType<File>()
              .where((f) => f.path.endsWith('_test.dart'))
              .toList()
            ..sort((a, b) => a.path.compareTo(b.path));
      final tests = paths
          .map(
            (f) => p
                .relative(f.path, from: owner.directory.path)
                .replaceAll('\\', '/'),
          )
          .toList();
      File('${integration.path}/owner_test.dart').writeAsStringSync('''
import 'dart:convert';
import 'dart:async';
import 'dart:io';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:flax_test/flax_test.dart';
${[for (var i = 0; i < tests.length; i++) "import '../../packages/${owner.name}/${tests[i]}' as t$i;"].join('\n')}
void main() {
  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  ${target.os == 'ios' ? _semanticsSetup : ''}
  // Match the headless viewport, including safe areas and keyboard insets.
  // Native pixel insets must not be combined with this fixed DPR and size.
  setUp(() {
    final view = binding.platformDispatcher.implicitView!;
    view.devicePixelRatio = 1;
    view.physicalSize = const Size(800, 600);
    view.padding = FakeViewPadding.zero;
    view.viewPadding = FakeViewPadding.zero;
    view.viewInsets = FakeViewPadding.zero;
  });
  tearDown(() {
    final view = binding.platformDispatcher.implicitView!;
    view.resetPadding();
    view.resetViewPadding();
    view.resetViewInsets();
    view.resetPhysicalSize();
    view.resetDevicePixelRatio();
  });
  setUpAll(() async {
    flaxTestLoadFixtures((jsonDecode(await rootBundle.loadString('assets/test-fixtures.json')) as Map).cast<String,String>());
  });
  ${[for (var i = 0; i < tests.length; i++) "group('${tests[i]}', t$i.main);"].join('\n  ')}
  ${directLaunch ? "binding.allTestsPassed.future.then((passed) { print(passed ? '$marker' : 'FLAX_PLATFORM_FAILED'); exit(passed ? 0 : 1); });" : ''}
}
''');
      await drive('owner_test.dart');
    }
    result['ran'] = true;
    // Desktop relocation launches the copied application after deleting its sources.
    if (!target.mobile) {
      final relocated = Directory('${work.path}/relocated');
      if (target.apple) {
        relocated.createSync();
        await run('ditto', [
          '$copied/flax_standalone.app',
          '${relocated.path}/flax_standalone.app',
        ]);
      } else {
        copyTree(Directory(copied), relocated);
      }
      // Remove inputs and build outputs before executing the relocated application.
      Directory(app).deleteSync(recursive: true);
      packages.deleteSync(recursive: true);
      await runDesktopApplication(
        target,
        target.apple ? '${relocated.path}/flax_standalone.app' : relocated.path,
        'FLAX_PLATFORM_PASSED',
      );
      result['applicationDelivered'] = true;
    } else {
      if (!directLaunch || (full && owners.isNotEmpty)) {
        await run('flutter', [
          'build',
          ...platformBuildArguments(target, release: false, signed: true),
          '--target=integration_test/platform_test.dart',
          '--no-pub',
        ], directory: app);
      }
      final relocated = target.os == 'android'
          ? '${work.path}/relocated.apk'
          : '${work.path}/relocated/Runner.app';
      if (target.os == 'android') {
        File(platformProduct(app, target, release: false)).copySync(relocated);
      } else {
        Directory('${work.path}/relocated').createSync();
        await run('ditto', [
          platformProduct(app, target, release: false),
          relocated,
        ]);
      }
      Directory('$app/build').deleteSync(recursive: true);
      if (directLaunch) {
        await _runMobileApplication(
          target,
          device!,
          relocated,
          await _applicationBundle(app, target, relocated),
          marker,
          timeout: Duration(minutes: full ? 10 : 3),
        );
      } else {
        await run('flutter', [
          'drive',
          '--no-pub',
          '-d',
          device!,
          '--use-application-binary=$relocated',
          '--driver=test_driver/platform.dart',
          '--target=integration_test/platform_test.dart',
        ], directory: app);
      }
      result['applicationDelivered'] = true;
      result['relocatedDeviceBundle'] = true;
      if (target.name.contains('simulator')) {
        result['releaseRuntime'] = 'unsupported by Flutter';
      } else {
        final marker = 'FLAX_PLATFORM_${DateTime.now().microsecondsSinceEpoch}';
        File('${integration.path}/release_test.dart').writeAsStringSync(
          _platformTest(
            target,
            engine,
            release: true,
            coexistence: coexistence,
            full: full,
            marker: marker,
          ),
        );
        await run('flutter', [
          'build',
          ...buildArgs,
          '--no-pub',
          '--target=integration_test/release_test.dart',
        ], directory: app);
        final source = platformProduct(app, target, release: true);
        final released = target.os == 'android'
            ? '${work.path}/release.apk'
            : '${work.path}/release/Runner.app';
        final String bundle;
        if (target.os == 'android') {
          File(source).copySync(released);
          bundle = RegExp(r'applicationId = "([^"]+)"').firstMatch(
            File('$app/android/app/build.gradle.kts').readAsStringSync(),
          )![1]!;
        } else {
          Directory('${work.path}/release').createSync();
          await run('ditto', [source, released]);
          final info = await Process.run('/usr/libexec/PlistBuddy', [
            '-c',
            'Print CFBundleIdentifier',
            '$released/Info.plist',
          ]);
          if (info.exitCode != 0) {
            throw StateError('Cannot read device bundle id');
          }
          bundle = (info.stdout as String).trim();
        }
        Directory(app).deleteSync(recursive: true);
        packages.deleteSync(recursive: true);
        await _runMobileApplication(target, device, released, bundle, marker);
        result['releaseRuntime'] = 'passed';
        result['dartMode'] = 'JIT and AOT';
      }
    }

    return result;
  } catch (_) {
    final hooks = Directory('${work.path}/app/.dart_tool/hooks_runner');
    if (hooks.existsSync()) {
      final diagnostics = Directory(
        '${evidence.path}/../ci/hooks-${coexistence ? 'coexistence' : engine}',
      )..createSync(recursive: true);
      for (final file in hookBuildFiles(hooks)) {
        if (!['.log', '.json', '.txt'].contains(p.extension(file.path))) {
          continue;
        }
        final copy = File(
          p.join(diagnostics.path, p.relative(file.path, from: hooks.path)),
        )..parent.createSync(recursive: true);
        file.copySync(copy.path);
      }
    }
    rethrow;
  } finally {
    if (work.existsSync()) work.deleteSync(recursive: true);
  }
}

void configurePlatformProject(String app, FlaxNativeTarget target) {
  if (target.os == 'android') {
    final gradle = File('$app/android/app/build.gradle.kts');
    gradle.writeAsStringSync(
      gradle
          .readAsStringSync()
          .replaceAll(
            'ndkVersion = flutter.ndkVersion',
            'ndkVersion = "30.0.16248370"',
          )
          .replaceAll('minSdk = flutter.minSdkVersion', 'minSdk = 24'),
    );
    for (final variant in ['main', 'debug', 'profile']) {
      final file = File('$app/android/app/src/$variant/AndroidManifest.xml');
      if (!file.existsSync()) continue;
      var text = file.readAsStringSync();
      if (!text.contains('android.permission.INTERNET')) {
        text = text.replaceFirst(
          '<application',
          '<uses-permission android:name="android.permission.INTERNET"/><application',
        );
      }
      file.writeAsStringSync(
        text.replaceFirst(
          '<application',
          '<application android:usesCleartextTraffic="true"',
        ),
      );
    }
  }
  if (target.apple) {
    final project = File('$app/${target.os}/Runner.xcodeproj/project.pbxproj');
    final team = Platform.environment['FLAX_IOS_TEAM'];
    if (team != null && !RegExp(r'^[A-Z0-9]{10}$').hasMatch(team)) {
      throw ArgumentError('Invalid FLAX_IOS_TEAM');
    }
    project.writeAsStringSync(
      project.readAsStringSync().replaceAllMapped(
        RegExp(
          r'(MACOSX_DEPLOYMENT_TARGET|IPHONEOS_DEPLOYMENT_TARGET) = [^;]+;',
        ),
        (m) => '${m[1]} = 15.0;',
      ),
    );
  }
  if (target.os == 'ios') {
    final project = File('$app/ios/Runner.xcodeproj/project.pbxproj');
    var text = project.readAsStringSync();
    final team = Platform.environment['FLAX_IOS_TEAM'];
    if (team != null) {
      text = text.replaceAll(
        'PRODUCT_BUNDLE_IDENTIFIER =',
        'DEVELOPMENT_TEAM = $team; PRODUCT_BUNDLE_IDENTIFIER =',
      );
    }
    final arch = target.architecture == 'x64' ? 'x86_64' : 'arm64';
    text = text.replaceAll(
      'IPHONEOS_DEPLOYMENT_TARGET =',
      'ARCHS = $arch; IPHONEOS_DEPLOYMENT_TARGET =',
    );
    project.writeAsStringSync(text);
  }
  if (target.os == 'macos') {
    final config = File('$app/macos/Runner/Configs/AppInfo.xcconfig');
    config.writeAsStringSync(
      '${config.readAsStringSync()}\n'
      'ARCHS = ${target.architecture == 'x64' ? 'x86_64' : 'arm64'}\n'
      // Flutter forwards exclusions to every Xcode target, including its hook build.
      'EXCLUDED_ARCHS = ${target.architecture == 'x64' ? 'arm64' : 'x86_64'}\n',
    );
    for (final name in ['DebugProfile', 'Release']) {
      final file = File('$app/macos/Runner/$name.entitlements');
      var text = file.readAsStringSync();
      for (final permission in ['network.client', 'network.server']) {
        if (!text.contains('com.apple.security.$permission')) {
          text = text.replaceFirst(
            '</dict>',
            '<key>com.apple.security.$permission</key><true/></dict>',
          );
        }
      }
      file.writeAsStringSync(text);
    }
  }
}

List<String> platformBuildArguments(
  FlaxNativeTarget target, {
  required bool release,
  bool signed = false,
}) => [
  target.os == 'android' ? 'apk' : target.os,
  target.name.contains('simulator')
      ? '--debug'
      : release
      ? '--release'
      : '--debug',
  if (target.os == 'ios') ...[
    if (target.name.contains('simulator')) '--simulator',
    if (!signed) '--no-codesign',
  ],
  if (target.os == 'android')
    '--target-platform=android-${target.architecture == 'arm32' ? 'arm' : target.architecture}',
];

String platformProduct(
  String app,
  FlaxNativeTarget target, {
  required bool release,
}) {
  final mode = release ? 'release' : 'debug';
  return switch (target.os) {
    'android' => '$app/build/app/outputs/flutter-apk/app-$mode.apk',
    'ios' =>
      '$app/build/ios/${target.name.contains('simulator') ? 'iphonesimulator' : 'iphoneos'}/Runner.app',
    'windows' =>
      '$app/build/windows/${target.architecture}/runner/${release ? 'Release' : 'Debug'}',
    'linux' => '$app/build/linux/${target.architecture}/$mode/bundle',
    'macos' =>
      '$app/build/macos/Build/Products/${release ? 'Release' : 'Debug'}/flax_standalone.app',
    _ => throw UnsupportedError(target.name),
  };
}

String _platformTest(
  FlaxNativeTarget target,
  String engine, {
  bool release = false,
  bool coexistence = false,
  bool full = false,
  String marker = 'FLAX_PLATFORM_PASSED',
}) =>
    '''
import 'dart:ffi';
import 'dart:async';
import 'dart:io';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:integration_test/common.dart';
import 'package:flax_engine_$engine/flax_engine_$engine.dart';
import 'package:flax_test/flax_test.dart';
import '../test/support/scenario.dart';
${coexistence ? "import '../coexistence.dart' as engines;" : ''}
@Native<Int32 Function()>(assetId: 'package:flax_engine_$engine/test_contracts')
external int flax_test_contracts_run();
void main() {
  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  ${target.os == 'ios' ? _semanticsSetup : ''}
  void contract(String name, FutureOr<void> Function() body) {
    test(name, () async {
      try {
        await body();
      } catch (error, stack) {
        binding.results[name] = Failure(name, '\$error\\n\$stack');
        rethrow;
      }
    });
  }
  contract('process ABI and native contracts', () {
    expect(Abi.current(), Abi.${target.os}${target.architecture == 'arm32'
        ? 'Arm'
        : target.architecture == 'x64'
        ? 'X64'
        : 'Arm64'});
    expect(flax_test_contracts_run(), 0);
  });
  void register(String name, dynamic Function() body) {
    if (${full || coexistence} || name.startsWith('loop closures:') ||
        name == 'JS calls Dart synchronously, including nested Dart and JS calls' ||
        name == 'UTF-16 strings and property names preserve unpaired surrogates' ||
        name == 'objects retain identity and support properties') {
      contract(name, () async { await body(); });
    }
  }
  group('shared runtime', () {
  flaxRuntimeContract(${engine == 'v8' ? 'FlaxV8Engine' : 'FlaxHermesEngine'}.createRuntime, registerTest: register);
  });
  group('engine loop closures', () {
  flaxLoopClosureContract(${engine == 'v8' ? 'FlaxV8Engine' : 'FlaxHermesEngine'}.createRuntime, registerTest: register);
  });
  ${coexistence ? "contract('engine coexistence and callback reentry', engines.main);" : "testWidgets('external application UI', applicationScenario);"}
  ${release || target.os != 'ios' || target.name.contains('simulator') ? "binding.allTestsPassed.future.then((passed) { print(passed ? '$marker' : 'FLAX_PLATFORM_FAILED'); exit(passed ? 0 : 1); });" : "binding.reportData = {'target': '${target.name}', 'engine': '$engine'};"}
}
''';

const _semanticsSetup = '''
  setUpAll(() async {
    // iOS can request its own semantics handle after the first rendered tree.
    // Complete that platform handshake before testWidgets records its leak baseline.
    // runTest establishes inTest, which LiveTestWidgetsFlutterBinding.pump requires.
    try {
      await binding.runTest(() async {
        final handle = binding.ensureSemantics();
        try {
          for (var i = 0; i < 100; i++) {
            await binding.pump(const Duration(milliseconds: 20));
            if (binding.platformDispatcher.semanticsEnabled) break;
          }
        } finally {
          handle.dispose();
        }
      }, () {
        expect(binding.debugOutstandingSemanticsHandles,
          binding.platformDispatcher.semanticsEnabled ? 1 : 0);
      }, description: 'platform semantics initialization');
    } finally {
      binding.postTest();
    }
  });
''';

Future<void> runDesktopApplication(
  FlaxNativeTarget target,
  String product,
  String marker, {
  Duration timeout = const Duration(minutes: 10),
}) async {
  final binary = switch (target.os) {
    'macos' => '$product/Contents/MacOS/flax_standalone',
    'windows' => '$product/flax_standalone.exe',
    'linux' => '$product/flax_standalone',
    _ => throw UnsupportedError('Desktop application required'),
  };
  final process = await Process.start(
    binary,
    [],
    workingDirectory: product,
    environment: {'LD_LIBRARY_PATH': '', 'DYLD_LIBRARY_PATH': ''},
  );
  final output = process.stdout.transform(utf8.decoder).join();
  final errors = process.stderr.transform(utf8.decoder).join();
  final code = await process.exitCode.timeout(
    timeout,
    onTimeout: () {
      process.kill(ProcessSignal.sigkill);
      throw TimeoutException('Application did not finish: $binary', timeout);
    },
  );
  final out = await output;
  final err = await errors;
  stdout.write(out);
  stderr.write(err);
  if (code != 0 || !out.contains(marker)) {
    throw StateError('Application failed: $code $out $err');
  }
}

Future<String> _applicationBundle(
  String app,
  FlaxNativeTarget target,
  String product,
) async {
  if (target.os == 'android') {
    return RegExp(r'applicationId = "([^"]+)"').firstMatch(
      File('$app/android/app/build.gradle.kts').readAsStringSync(),
    )![1]!;
  }
  final info = await Process.run('/usr/libexec/PlistBuddy', [
    '-c',
    'Print CFBundleIdentifier',
    '$product/Info.plist',
  ]);
  if (info.exitCode != 0) throw StateError('Cannot read device bundle id');
  return (info.stdout as String).trim();
}

Future<void> _runMobileApplication(
  FlaxNativeTarget target,
  String device,
  String product,
  String bundle,
  String marker, {
  Duration timeout = const Duration(minutes: 3),
}) async {
  if (target.name.contains('simulator')) {
    await run('xcrun', ['simctl', 'install', device, product]);
    // Flutter print output is sent to os_log, not the launched process's pipes.
    final monitor = await Process.start('xcrun', [
      'simctl',
      'spawn',
      device,
      'log',
      'stream',
      '--style',
      'compact',
      '--level',
      'debug',
      '--predicate',
      'process == "Runner" AND (eventMessage CONTAINS "flutter:" OR messageType >= 16)',
    ]);
    final waiting = _waitForMarker(monitor, marker, timeout: timeout);
    try {
      await run('xcrun', [
        'simctl',
        'launch',
        '--terminate-running-process',
        device,
        bundle,
      ]);
      await waiting;
    } finally {
      monitor.kill();
      await Process.run('xcrun', ['simctl', 'terminate', device, bundle]);
    }
    return;
  }
  if (target.os == 'ios') {
    await run('xcrun', [
      'devicectl',
      'device',
      'install',
      'app',
      '--device',
      device,
      product,
    ]);
    final process = await Process.start('xcrun', [
      'devicectl',
      'device',
      'process',
      'launch',
      '--device',
      device,
      '--console',
      '--terminate-existing',
      bundle,
    ]);
    await _waitForMarker(process, marker, timeout: timeout);
    return;
  }
  final sdk =
      Platform.environment['ANDROID_HOME'] ??
      Platform.environment['ANDROID_SDK_ROOT'];
  final adb = sdk == null
      ? 'adb'
      : '$sdk/platform-tools/adb${Platform.isWindows ? '.exe' : ''}';
  await run(adb, ['-s', device, 'install', '-r', product]);
  final time = await Process.run(adb, [
    '-s',
    device,
    'shell',
    "date '+%m-%d %H:%M:%S.%3N'",
  ]);
  final since = (time.stdout as String).trim();
  if (time.exitCode != 0 ||
      !RegExp(r'^\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}$').hasMatch(since)) {
    throw StateError(
      'Cannot obtain device log start time: '
      '${time.exitCode} ${time.stdout} ${time.stderr}',
    );
  }
  final monitor = await Process.start(adb, [
    '-s',
    device,
    'logcat',
    '-v',
    'raw',
    '-T',
    since,
    'flutter:I',
    'AndroidRuntime:E',
    'libc:F',
    '*:S',
  ]);
  final waiting = _waitForMarker(monitor, marker, timeout: timeout);
  // Start monitoring before launch; the unique marker excludes older device logs.
  try {
    await run(adb, ['-s', device, 'shell', 'am', 'force-stop', bundle]);
    await run(adb, [
      '-s',
      device,
      'shell',
      'am',
      'start',
      '-W',
      '-n',
      '$bundle/.MainActivity',
    ]);
    await waiting;
  } finally {
    monitor.kill();
    await Process.run(adb, ['-s', device, 'shell', 'am', 'force-stop', bundle]);
  }
}

Future<void> _waitForMarker(
  Process process,
  String marker, {
  required Duration timeout,
}) async {
  final completed = Completer<bool>();
  final log = StringBuffer();
  void collect(String line) {
    log.writeln(line);
    if (line.contains(marker) && !completed.isCompleted) {
      completed.complete(true);
    }
    if (line.contains('FLAX_PLATFORM_FAILED') && !completed.isCompleted) {
      completed.complete(false);
    }
  }

  final out = process.stdout
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .listen(collect);
  final err = process.stderr
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .listen(collect);
  process.exitCode.then((_) {
    if (!completed.isCompleted) completed.complete(false);
  });
  try {
    final passed = await completed.future.timeout(timeout);
    if (!passed) throw StateError('Device application failed: $log');
  } finally {
    stdout.write(log);
    process.kill();
    await out.cancel();
    await err.cancel();
  }
}
