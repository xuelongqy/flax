import 'dart:convert';
import 'dart:io';

import 'package:yaml/yaml.dart';

import 'src/process.dart';

final _root = Directory.fromUri(Platform.script.resolve('../'));

Future<void> main(List<String> arguments) => command(() async {
  if (arguments.any((argument) => argument != '--check') ||
      arguments.length > 1) {
    throw ArgumentError('Usage: dart run tool/ffi.dart [--check]');
  }
  final check = arguments.contains('--check');
  final version =
      (jsonDecode(File('${_root.path}/tool/ffigen.json').readAsStringSync())
              as Map<String, Object?>)['version']
          as String;
  final cache = '${_root.path}/.cache/ffigen';
  final environment = {'PUB_CACHE': cache};
  final lock = File('$cache/global_packages/ffigen/pubspec.lock');
  var installed = false;
  if (lock.existsSync()) {
    final data = loadYaml(lock.readAsStringSync()) as YamlMap;
    installed =
        ((data['packages'] as YamlMap)['ffigen'] as YamlMap)['version'] ==
        version;
  }
  if (!installed) {
    await run(Platform.resolvedExecutable, [
      'pub',
      'global',
      'activate',
      'ffigen',
      version,
    ], environment: environment);
  }
  final temporaryRoot = Directory('${_root.path}/.dart_tool/flax')
    ..createSync(recursive: true);
  final temporary = temporaryRoot.createTempSync('ffi-');
  try {
    final configs =
        Directory('${_root.path}/packages')
            .listSync()
            .whereType<Directory>()
            .map((directory) => File('${directory.path}/native/ffigen.yaml'))
            .where((file) => file.existsSync())
            .toList()
          ..sort((left, right) => left.path.compareTo(right.path));
    if (configs.isEmpty) throw StateError('No package FFI configs found');
    for (final configFile in configs) {
      final packageName = configFile.parent.parent.path
          .split(Platform.pathSeparator)
          .last;
      final config = jsonDecode(
        jsonEncode(loadYaml(configFile.readAsStringSync())),
      ) as Map<String, Object?>;
      final expected = File.fromUri(
        configFile.parent.uri.resolve(config['output'] as String),
      );
      final output = File('${temporary.path}/$packageName.g.dart');
      config['output'] = output.path;
      final headers = config['headers'] as Map<String, Object?>;
      headers['entry-points'] = (headers['entry-points'] as List<Object?>)
          .map(
            (path) =>
                configFile.parent.uri.resolve(path as String).toFilePath(),
          )
          .toList();
      final temporaryConfig = File('${temporary.path}/$packageName.json');
      temporaryConfig.writeAsStringSync(jsonEncode(config));
      await run(
        Platform.resolvedExecutable,
        ['pub', 'global', 'run', 'ffigen', '--config', temporaryConfig.path],
        directory: _root.path,
        environment: environment,
      );
      await run(Platform.resolvedExecutable, [
        'format',
        output.path,
      ], directory: _root.path);
      final source = output.readAsStringSync();
      if (source.trim().isEmpty) {
        throw StateError('ffigen produced empty bindings for $packageName');
      }
      if (check) {
        if (!expected.existsSync() || expected.readAsStringSync() != source) {
          throw StateError(
            'FFI bindings are stale: ${expected.path}. Run dart run melos run ffi:generate.',
          );
        }
      } else {
        expected.parent.createSync(recursive: true);
        expected.writeAsStringSync(source);
      }
    }
    stdout.writeln(
      check ? 'FFI bindings are reproducible.' : 'FFI bindings generated.',
    );
  } finally {
    temporary.deleteSync(recursive: true);
  }
});
