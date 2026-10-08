import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:yaml/yaml.dart';

import 'engine_selection.dart';
import 'package_discovery.dart';

void copyTree(Directory source, Directory target) {
  target.createSync(recursive: true);
  for (final entry in source.listSync(followLinks: false)) {
    final destination = p.join(target.path, p.basename(entry.path));
    if (entry is Directory) {
      copyTree(entry, Directory(destination));
    } else if (entry is File) {
      entry.copySync(destination);
    } else {
      throw StateError('Unexpected symlink in package inputs: ${entry.path}');
    }
  }
}

void rewriteDartDirectiveUris(
  Directory directory,
  Directory source,
  Directory target,
) {
  final from = RegExp.escape(source.absolute.uri.toString());
  final to = Directory(target.resolveSymbolicLinksSync()).uri.toString();
  final directive = RegExp(
    '''^([ \\t]*(?:import|export|part)[ \\t]+["'])(?!${RegExp.escape(to)})$from''',
    multiLine: true,
  );
  for (final file in directory.listSync(recursive: true).whereType<File>()) {
    if (!file.path.endsWith('.dart')) continue;
    final text = file.readAsStringSync();
    final rewritten = text.replaceAllMapped(
      directive,
      (match) => '${match.group(1)}$to',
    );
    if (rewritten != text) file.writeAsStringSync(rewritten);
  }
}

void copyDartPackages(
  Directory root,
  Directory targetRoot,
  List<String> names,
) {
  names = packageDependencyClosure(
    root.path,
    names,
    includeDevDependencies: false,
  ).toList()..sort();
  for (final name in names) {
    final source = Directory(p.join(root.path, 'packages', name));
    final target = Directory(p.join(targetRoot.path, name))
      ..createSync(recursive: true);
    for (final directory in ['lib', 'hook', 'native']) {
      final input = Directory(p.join(source.path, directory));
      if (input.existsSync()) {
        copyTree(input, Directory(p.join(target.path, directory)));
      }
    }
    for (final omitted in [
      'native/generated',
      if (name == 'flax') 'native/tests',
    ]) {
      final directory = Directory(p.join(target.path, omitted));
      if (directory.existsSync()) directory.deleteSync(recursive: true);
    }
    final notices = File(p.join(source.path, 'THIRD_PARTY_NOTICES.txt'));
    if (notices.existsSync()) {
      notices.copySync(p.join(target.path, 'THIRD_PARTY_NOTICES.txt'));
    }
    File(p.join(source.path, 'README.md'))
        .copySync(p.join(target.path, 'README.md'));
    final changelog = File(p.join(source.path, 'CHANGELOG.md'));
    if (changelog.existsSync()) {
      changelog.copySync(p.join(target.path, 'CHANGELOG.md'));
    }
    File(p.join(source.path, 'flax_package.yaml'))
        .copySync(p.join(target.path, 'flax_package.yaml'));
    final manifest = File(p.join(source.path, 'bindings', 'manifest.json'));
    if (manifest.existsSync()) {
      final output = File(p.join(target.path, 'bindings', 'manifest.json'));
      output.parent.createSync(recursive: true);
      manifest.copySync(output.path);
    }
    final pubspec = jsonDecode(
      jsonEncode(
        loadYaml(File(p.join(source.path, 'pubspec.yaml')).readAsStringSync()),
      ),
    ) as Map<String, Object?>;
    pubspec.remove('resolution');
    final dependencies =
        (pubspec['dependencies'] as Map<String, Object?>?) ??
        <String, Object?>{};
    pubspec['dependencies'] = dependencies;
    for (final local in names) {
      if (dependencies.containsKey(local)) {
        dependencies[local] = {'path': '../$local'};
      }
    }
    File(p.join(target.path, 'pubspec.yaml'))
        .writeAsStringSync(jsonEncode(pubspec));
  }
}

Future<void> verifyPackage(
  Directory root, {
  String engine = defaultFlaxEngine,
}) async {
  throw UnsupportedError(
    'The Flax runtime requires a Flutter UI isolate. Standalone Dart SDK '
    'consumers are retired; use tool/check_engine_application.dart for '
    'debug, profile and release/AOT application acceptance.',
  );
}
