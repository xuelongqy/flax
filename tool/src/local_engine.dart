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

/// Use Flutter's official local-engine flags for commands that load an engine.
List<String> localEngineArguments(
  List<String> arguments, {
  String? source,
  FlaxNativeTarget? target,
}) {
  if (arguments.isEmpty ||
      !{'test', 'run', 'drive', 'build'}.contains(arguments.first)) {
    return arguments;
  }
  if (arguments.any((arg) => arg.startsWith('--local-engine'))) {
    throw ArgumentError('The workspace selects its matching local engine');
  }
  source ??=
      Platform.environment['FLUTTER_ENGINE'] ??
      p.join(flutterSdkRoot(), 'engine', 'src');
  final mode = arguments.contains('--profile')
      ? 'profile'
      : arguments.contains('--release') ||
            arguments.first == 'build' && !arguments.contains('--debug')
      ? 'release'
      : 'debug';
  target ??= currentCheckTarget();
  if (!{'macos-arm64', 'android-arm64'}.contains(target.name)) {
    throw UnsupportedError('No maintained Flax engine for ${target.name}');
  }
  final android = target.os == 'android';
  final name = 'flax_${android ? 'android' : 'mac'}_${mode}_arm64';
  final host = 'flax_mac_${mode}_arm64';
  final output = p.join(source, 'out', name);
  final artifact = android
      ? 'flutter.jar'
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
