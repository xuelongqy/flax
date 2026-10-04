import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:path/path.dart' as p;

import 'package_discovery.dart';

String fileDigest(File file) =>
    sha256.convert(file.readAsBytesSync()).toString();

Map<String, String> preparationInputs(String root) {
  final result = Process.runSync('git', [
    'ls-files',
    '--cached',
    '--others',
    '--exclude-standard',
    '-z',
  ], workingDirectory: root);
  if (result.exitCode != 0) {
    throw StateError('Cannot enumerate preparation inputs');
  }
  return {
    for (final path in (result.stdout as String).split('\u0000')..sort())
      if (path.isNotEmpty && File(p.join(root, path)).existsSync())
        path.replaceAll('\\', '/'): fileDigest(File(p.join(root, path))),
  };
}

Map<String, Object?> preparationIdentity(String root) {
  final revision = Process.runSync('git', [
    'rev-parse',
    'HEAD',
  ], workingDirectory: root);
  if (revision.exitCode != 0) throw StateError('Cannot read checkout SHA');
  String version(String executable) {
    final result = Process.runSync(executable, [
      '--version',
    ], runInShell: Platform.isWindows);
    if (result.exitCode != 0) {
      throw StateError('Cannot read $executable version');
    }
    return (result.stdout as String).trim();
  }

  final flutter = File('$root/.fvmrc');
  final node = File('$root/.node-version');
  final package = File('$root/package.json');
  return {
    'checkout': (revision.stdout as String).trim(),
    'inputs': preparationInputs(root),
    'prHead': Platform.environment['FLAX_PR_HEAD'],
    'prBase': Platform.environment['FLAX_PR_BASE'],
    'toolchain': {
      'dart': Platform.version.split(' ').first,
      if (flutter.existsSync())
        'flutter': (jsonDecode(flutter.readAsStringSync()) as Map)['flutter'],
      if (node.existsSync()) 'node': version('node'),
      if (package.existsSync()) 'pnpm': version('pnpm'),
    },
  };
}

void validatePreparationIdentity(String root, Map<dynamic, dynamic> manifest) {
  final current = preparationIdentity(root);
  for (final key in current.keys) {
    if (jsonEncode(current[key]) != jsonEncode(manifest[key])) {
      throw StateError('Preparation $key does not match this checkout');
    }
  }
}

bool preparedOutputPath(String path) =>
    !p.posix.isAbsolute(path) &&
    !path.contains('\\') &&
    !path.split('/').contains('..') &&
    (path == 'build/prepared-ui-fixtures.json' ||
        RegExp(r'^packages/[^/]+/(\.dart_tool/flax/ui|js/dist|example/assets)/')
            .hasMatch(path) ||
        RegExp(r'^examples/[^/]+/assets/').hasMatch(path));

void writePreparedChecks(String root, Directory output) {
  if (output.existsSync()) output.deleteSync(recursive: true);
  output.createSync(recursive: true);
  final directories = <Directory>[
    for (final npm in discoverNpmPackages(root))
      Directory('${npm.directory.path}/dist'),
    for (final owner in discoverPackages(root)) ...[
      Directory('${owner.directory.path}/.dart_tool/flax/ui'),
      Directory('${owner.directory.path}/js/dist'),
      Directory('${owner.directory.path}/example/assets'),
    ],
    for (final entry in Directory(
      '$root/examples',
    ).listSync().whereType<Directory>())
      Directory('${entry.path}/assets'),
  ];
  final files = <File>[
    File('$root/build/prepared-ui-fixtures.json'),
    for (final directory in directories)
      if (directory.existsSync())
        ...directory
            .listSync(recursive: true, followLinks: false)
            .whereType<File>(),
  ];
  final digests = <String, String>{};
  for (final file in files) {
    final path = p.relative(file.path, from: root).replaceAll('\\', '/');
    if (!preparedOutputPath(path)) {
      throw StateError('Invalid prepared output: $path');
    }
    final destination = File('${output.path}/files/$path')
      ..parent.createSync(recursive: true);
    file.copySync(destination.path);
    digests[path] = fileDigest(file);
  }
  if (digests.length < 2) throw StateError('No prepared outputs');
  final compiledOutputs = Map<String, String>.fromEntries(
    digests.entries
        .where((entry) => entry.key != 'build/prepared-ui-fixtures.json')
        .toList()
      ..sort((a, b) => a.key.compareTo(b.key)),
  );
  File('${output.path}/cache-key.txt').writeAsStringSync(
    sha256
        .convert(
          utf8.encode(
            jsonEncode({
              'inputs': preparationInputs(root),
              'outputs': compiledOutputs,
            }),
          ),
        )
        .toString(),
  );
  File('${output.path}/manifest.json').writeAsStringSync(
    jsonEncode({
      'format': 1,
      ...preparationIdentity(root),
      'sourceRoot': Directory(root).absolute.path,
      'sourceUri': Directory(root).absolute.uri.toString(),
      'outputs': digests,
    }),
  );
}

void consumePreparedChecks(String root, Directory input) {
  final manifest =
      jsonDecode(File('${input.path}/manifest.json').readAsStringSync()) as Map;
  if (manifest['format'] != 1) throw StateError('Unknown preparation format');
  validatePreparationIdentity(root, manifest);
  final outputs = (manifest['outputs'] as Map).cast<String, String>();
  if (outputs.isEmpty) throw StateError('Empty preparation outputs');
  // Verify every file before touching the checkout. Never copy package config or caches.
  for (final entry in outputs.entries) {
    if (!preparedOutputPath(entry.key)) {
      throw StateError('Invalid prepared output: ${entry.key}');
    }
    final file = File('${input.path}/files/${entry.key}');
    if (!file.existsSync() || fileDigest(file) != entry.value) {
      throw StateError('Prepared output digest mismatch: ${entry.key}');
    }
  }
  for (final path in outputs.keys) {
    final destination = File(p.join(root, path))
      ..parent.createSync(recursive: true);
    File('${input.path}/files/$path').copySync(destination.path);
  }
  // Generated Dart directives refer to the preparation runner's checkout.
  final from = RegExp.escape(manifest['sourceUri'] as String);
  final to = Directory(root).absolute.uri.toString();
  final directive = RegExp(
    r'''^([ \t]*(?:import|export|part)[ \t]+["'])''' + from,
    multiLine: true,
  );
  for (final path in outputs.keys.where((p) => p.endsWith('.dart'))) {
    final file = File(p.join(root, path));
    file.writeAsStringSync(
      file.readAsStringSync().replaceAllMapped(
        directive,
        (match) => '${match[1]}$to',
      ),
    );
  }
}

/// Standalone entry points enforce the same integrity gate as platform checks.
bool consumePreparedEnvironment(String root) {
  final path = Platform.environment['FLAX_PREPARED_CHECKS'];
  if (path == null) return false;
  consumePreparedChecks(root, Directory(path));
  return true;
}

void writeArchiveProof(String root, File output) {
  output.parent.createSync(recursive: true);
  output.writeAsStringSync(
    jsonEncode({
      'format': 1,
      ...preparationIdentity(root),
      'archiveChecksPassed': true,
      'run': Platform.environment['GITHUB_RUN_ID'],
    }),
  );
}

void validateArchiveProof(String root, File proof) {
  final manifest = jsonDecode(proof.readAsStringSync()) as Map;
  if (manifest['format'] != 1 || manifest['archiveChecksPassed'] != true) {
    throw StateError('Archive validation did not pass');
  }
  validatePreparationIdentity(root, manifest);
}
