import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:yaml/yaml.dart';

import 'libraries.dart';

Future<Map<String, Object?>> captureBaseline(String workspaceRoot) async {
  final now = DateTime.now().toUtc().toIso8601String();
  return {
    'capturedAt': now,
    'workspaceRoot': workspaceRoot,
    'git': await _git(workspaceRoot),
    'sdk': await _sdk(workspaceRoot),
    'commands': {
      'inventory': 'dart run packages/flax_codegen/tool/capability_verify.dart',
      'codegenTests':
          'cd packages/flax_codegen && dart test --reporter expanded',
      'bindingsCheck': 'dart run melos run bindings:check',
    },
  };
}

Future<Map<String, Object?>> _git(String root) async {
  final revision = await _run(root, ['git', 'rev-parse', 'HEAD']);
  final status = await _run(root, ['git', 'status', '--short']);
  final dirty = [
    for (final line in status.split('\n'))
      if (line.trim().isNotEmpty) line,
  ];
  final hashes = <String, String>{};
  for (final line in dirty) {
    final path = line.substring(line.length >= 3 ? 3 : 0).trim();
    if (path.isEmpty || path.endsWith('/')) continue;
    final file = File(p.join(root, path));
    if (!file.existsSync()) continue;
    hashes[path] = await _run(root, ['git', 'hash-object', path]);
  }
  return {'revision': revision, 'dirty': dirty, 'hashes': hashes};
}

Future<Map<String, Object?>> _sdk(String root) async {
  final dartVersion = await _run(root, ['dart', '--version']);
  String? flutterVersion;
  try {
    flutterVersion = await _run(root, ['flutter', '--version']);
  } catch (_) {}
  final pubspec = loadYaml(
    File(p.join(root, 'packages/flax_codegen/pubspec.yaml')).readAsStringSync(),
  ) as YamlMap;
  return {
    'dart': dartVersion,
    'flutter': ?flutterVersion,
    'flutterPackageRoot': flutterPackageRoot(root),
    'flaxCodegenSdk': pubspec['environment']?['sdk']?.toString(),
    'analyzer': pubspec['dependencies']?['analyzer']?.toString(),
    'flaxCodegenVersion': pubspec['version']?.toString(),
  };
}

Future<String> _run(String root, List<String> command) async {
  final result = await Process.run(
    command.first,
    command.sublist(1),
    workingDirectory: root,
  );
  final output = (result.stdout as String).trim();
  if (result.exitCode != 0) {
    final error = (result.stderr as String).trim();
    throw StateError(
      'Command ${command.join(' ')} failed (${result.exitCode}): $error',
    );
  }
  return output;
}
