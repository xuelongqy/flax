import 'dart:convert';
import 'dart:async';
import 'dart:io';

import 'package:flax/native_target.dart';

import 'process.dart';
import 'ui_suite.dart';

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
    if (!gradle.readAsStringSync().contains(
      'android.defaultConfig.ndk.abiFilters',
    )) {
      gradle.writeAsStringSync(
        '\nandroid.defaultConfig.ndk.abiFilters.add("${target.androidAbi}")\n'
        // Preserve the verified SDK closure; Flutter itself may be stripped.
        'android.packaging.jniLibs.keepDebugSymbols.addAll(listOf("**/libv8.so", "**/libc++_shared.so"))\n',
        mode: FileMode.append,
      );
    }
    final properties = File('$app/android/gradle.properties');
    if (!properties.readAsStringSync().contains('disable-abi-filtering=true')) {
      properties.writeAsStringSync(
        '\ndisable-abi-filtering=true\n',
        mode: FileMode.append,
      );
    }
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
        (m) => '${m[1]} = ${target.os == 'ios' ? '16.3' : '15.0'};',
      ),
    );
  }
  if (target.os == 'ios') {
    final project = File('$app/ios/Runner.xcodeproj/project.pbxproj');
    final delegate = File('$app/ios/Runner/AppDelegate.swift');
    if (delegate.existsSync()) {
      // Long device acceptance must not stop when the test phone auto-locks.
      final source = delegate.readAsStringSync();
      if (!source.contains('isIdleTimerDisabled')) {
        delegate.writeAsStringSync(
          source.replaceFirst(
            'GeneratedPluginRegistrant.register',
            'UIApplication.shared.isIdleTimerDisabled = true\n    GeneratedPluginRegistrant.register',
          ),
        );
      }
    }
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

Future<String> runDesktopApplication(
  FlaxNativeTarget target,
  String product,
  String marker, {
  Duration timeout = const Duration(minutes: 10),
  Map<String, String>? environment,
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
    environment: {
      ...?environment,
      'LD_LIBRARY_PATH': '',
      'DYLD_LIBRARY_PATH': '',
    },
  );
  var activated = target.os != 'macos';
  Future<ProcessResult>? activation;
  final journal = UiResultJournal();
  final testLog = RegExp(r'^(?:flutter: )?\d+:\d+ \+');
  final output = process.stdout
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .map((line) {
        journal.collect(line);
        if (!activated && testLog.hasMatch(line)) {
          activated = true;
          // Cocoa has registered the window by the first test log. Foreground
          // activation keeps frame-driven integration tests advancing.
          activation = Process.run('/usr/bin/open', ['-a', product]);
        }
        return '$line\n';
      })
      .join();
  final errors = process.stderr.transform(utf8.decoder).join();
  try {
    final (code, out, err) = await (process.exitCode, output, errors).wait
        .timeout(
          timeout,
          onTimeout: () => throw TimeoutException(
            'Application did not finish: $binary',
            timeout,
          ),
        );
    final opened = await activation;
    if (opened != null && opened.exitCode != 0) {
      throw StateError('Cannot activate release test: ${opened.stderr}');
    }
    stdout.write(out);
    stderr.write(err);
    if (code != 0 || !out.contains(marker) || journal.hasFailure) {
      throw StateError('Application failed: $code $out $err');
    }
    return out;
  } finally {
    process.kill(ProcessSignal.sigkill);
    await process.exitCode;
  }
}

Future<String> applicationBundle(
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

Future<String> runMobileApplication(
  FlaxNativeTarget target,
  String device,
  String product,
  String bundle,
  String marker, {
  Duration timeout = const Duration(minutes: 3),
  String? uiResultsPath,
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
    final waiting = _waitForMarker(
      monitor,
      marker,
      timeout: timeout,
      uiResultsPath: uiResultsPath,
    );
    // Tests may fail before launch returns; await the same failure below.
    waiting.ignore();
    Process? launcher;
    StreamSubscription<List<int>>? nativeOut;
    StreamSubscription<List<int>>? nativeErr;
    var finished = false;
    try {
      launcher = await Process.start('xcrun', [
        'simctl',
        'launch',
        '--console-pty',
        '--terminate-running-process',
        device,
        bundle,
      ]);
      nativeOut = launcher.stdout.listen(stdout.add);
      nativeErr = launcher.stderr.listen(stderr.add);
      launcher.exitCode.then((_) async {
        // os_log can deliver the final test marker after process exit.
        await Future<void>.delayed(const Duration(seconds: 2));
        if (!finished) monitor.kill();
      });
      return await waiting;
    } finally {
      finished = true;
      monitor.kill();
      launcher?.kill();
      await nativeOut?.cancel();
      await nativeErr?.cancel();
      await Process.run('xcrun', ['simctl', 'terminate', device, bundle]);
    }
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
    return await _waitForMarker(
      process,
      marker,
      timeout: timeout,
      uiResultsPath: uiResultsPath,
    );
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
  final waiting = _waitForMarker(
    monitor,
    marker,
    timeout: timeout,
    uiResultsPath: uiResultsPath,
  );
  // Tests may fail before launch returns; await the same failure below.
  waiting.ignore();
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
    return await waiting;
  } finally {
    monitor.kill();
    await Process.run(adb, ['-s', device, 'shell', 'am', 'force-stop', bundle]);
  }
}

Future<String> _waitForMarker(
  Process process,
  String marker, {
  required Duration timeout,
  String? uiResultsPath,
}) async {
  final completed = Completer<bool>();
  final log = StringBuffer();
  final uiResults = <String, String>{};
  final journal = UiResultJournal();
  void saveResults() {
    if (uiResultsPath == null) return;
    File(uiResultsPath)
      ..parent.createSync(recursive: true)
      ..writeAsStringSync(
        jsonEncode({'cases': journal.cases, 'binding': uiResults}),
      );
  }

  void collect(String line) {
    stdout.writeln(line);
    log.writeln(line);
    if (journal.collect(line)) saveResults();
    final results = line.indexOf('FLAX_UI_RESULT:');
    if (results >= 0 && uiResultsPath != null) {
      final data =
          jsonDecode(line.substring(results + 'FLAX_UI_RESULT:'.length)) as Map;
      uiResults[data['name'] as String] = data['status'] as String;
      saveResults();
    }
    if (line.contains(marker) && !completed.isCompleted) {
      completed.complete(!journal.hasFailure);
    }
    if ((line.contains('FLAX_PLATFORM_FAILED') ||
            line.contains('FLAX_ENGINE_FAILED')) &&
        !completed.isCompleted) {
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
    return log.toString();
  } finally {
    process.kill();
    await out.cancel();
    await err.cancel();
  }
}
