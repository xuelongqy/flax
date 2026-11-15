import 'dart:io';
import 'dart:isolate';

import 'package:path/path.dart' as p;
import 'package:flax/native_target.dart';

import 'platform_selection.dart';

String flutterSdkRoot() {
  final library = Isolate.resolvePackageUriSync(
    Uri.parse('package:flutter/widgets.dart'),
  );
  if (library == null) throw StateError('Cannot locate the Flutter SDK');
  return Directory.fromUri(library.resolve('../../../')).path;
}

String flutterEngineSource() =>
    Platform.environment['FLUTTER_ENGINE'] ??
    p.join(flutterSdkRoot(), 'engine', 'src');

/// Use official local artifacts for runtime and dependency/static commands.
List<String> localEngineArguments(
  List<String> arguments, {
  String? source,
  FlaxNativeTarget? target,
}) {
  if (arguments.isEmpty) return arguments;
  final staticCommand = {
    'pub',
    'packages',
    'analyze',
    'create',
  }.contains(arguments.first);
  if (!staticCommand &&
      !{'test', 'run', 'drive', 'build'}.contains(arguments.first)) {
    return arguments;
  }
  if (arguments.any((arg) => arg.startsWith('--local-engine'))) {
    throw ArgumentError('The workspace selects its matching local engine');
  }
  source ??= flutterEngineSource();
  if (staticCommand) {
    // These commands update universal SDK artifacts but do not run a device.
    // Keep their cache context independent of runtime target and build mode.
    const host = 'flax_mac_debug_arm64';
    final output = p.join(source, 'out', host);
    if (!File(p.join(output, 'FlutterMacOS.framework/Versions/A/FlutterMacOS'))
        .existsSync()) {
      throw StateError(
        'Missing Flax host Debug artifacts: $output. '
        'Build them with flutter/flax/tools/build_engine.py '
        '--target macos-arm64 --mode debug.',
      );
    }
    return [
      '--local-engine-src-path=$source',
      '--local-engine=$host',
      '--local-engine-host=$host',
      ...arguments,
    ];
  }
  final mode = arguments.contains('--profile')
      ? 'profile'
      : arguments.contains('--release') ||
            arguments.first == 'build' && !arguments.contains('--debug')
      ? 'release'
      : 'debug';
  target ??= currentCheckTarget();
  if (!{
    'macos-arm64',
    'android-arm64',
    'ios-device-arm64',
    'ios-simulator-arm64',
  }.contains(target.name)) {
    throw UnsupportedError('No maintained Flax engine for ${target.name}');
  }
  final android = target.os == 'android';
  final ios = target.os == 'ios';
  final simulator = target.name == 'ios-simulator-arm64';
  if (ios &&
      (mode != (simulator ? 'debug' : 'release') ||
          arguments.first == 'test' ||
          arguments.first == 'build' &&
              arguments.length > 1 &&
              arguments[1] == 'ios' &&
              arguments.contains('--simulator') != simulator)) {
    throw UnsupportedError(
      'The maintained iOS engine requires simulator debug or device release/AOT',
    );
  }
  final name = ios
      ? 'flax_ios_${mode}_${simulator ? 'sim_' : ''}arm64'
      : 'flax_${android ? 'android' : 'mac'}_${mode}_arm64';
  final host = 'flax_mac_${mode}_arm64';
  final output = p.join(source, 'out', name);
  final artifact = android
      ? 'flutter.jar'
      : ios
      ? 'Flutter.framework/Flutter'
      : arguments.first == 'test'
      ? 'flutter_tester'
      : 'FlutterMacOS.framework/Versions/A/FlutterMacOS';
  if (!File(p.join(output, artifact)).existsSync()) {
    throw StateError(
      'Missing Flax $mode engine: $output. '
      'Build it with flutter/flax/tools/build_engine.py '
      '--target ${target.name} --mode $mode.',
    );
  }
  return [
    '--local-engine-src-path=$source',
    '--local-engine=$name',
    '--local-engine-host=$host',
    ...arguments,
  ];
}
