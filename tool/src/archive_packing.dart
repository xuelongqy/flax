import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;

import 'package_discovery.dart';

/// Directory names skipped when staging package trees for outside archives.
///
/// Aligns with [tool/check_packages.dart] cache/build skips and the M4 canary
/// packer consumer tree (tests, examples, and JS dist caches for Dart trees).
const archiveSkipNames = {
  '.cache',
  '.dart_tool',
  '.local',
  '.pnpm-store',
  'build',
  'coverage',
  'node_modules',
  'example',
  'test',
  'integration_test',
};

/// Extra skips for Dart package trees (npm packs need built `dist/`).
const archiveDartExtraSkipNames = {'dist'};

const archiveReceiptFormat = 1;
const archiveReceiptKind = 'flax-archive-pack';

void copyArchiveSource(
  Directory source,
  Directory target, {
  Set<String> skip = archiveSkipNames,
}) {
  target.createSync(recursive: true);
  for (final entity in source.listSync(followLinks: false)) {
    final name = p.basename(entity.path);
    if (skip.contains(name)) continue;
    final destination = p.join(target.path, name);
    if (entity is Directory) {
      copyArchiveSource(entity, Directory(destination), skip: skip);
    } else if (entity is File) {
      entity.copySync(destination);
    }
  }
}

void prepareDartArchivePubspec(
  Directory package, {
  required Set<String> packageNames,
}) {
  final license = File(p.join(package.path, 'LICENSE'));
  if (!license.existsSync()) {
    license.writeAsStringSync(
      'License selection is pending. Temporary file for archive packing.\n',
    );
  }
  final pubspec = File(p.join(package.path, 'pubspec.yaml'));
  final data = readYamlFile(pubspec)
    ..remove('publish_to')
    ..remove('resolution');
  final overrides =
      (data['dependency_overrides'] as Map<String, dynamic>?) ??
      <String, dynamic>{};
  for (final field in ['dependencies', 'dev_dependencies']) {
    final dependencies = data[field] as Map<String, dynamic>?;
    if (dependencies == null) continue;
    for (final name in packageNames) {
      if (dependencies.containsKey(name)) {
        overrides[name] = {'path': '../$name'};
      }
    }
  }
  final packageName = p.basename(package.path);
  final dev = data['dev_dependencies'] as Map<String, dynamic>?;
  if (dev != null) {
    for (final name in List<String>.from(dev.keys)) {
      if (name == packageName) continue;
      if (packageNames.contains(name) || name == 'flax_test') {
        dev.remove(name);
        overrides.remove(name);
      }
    }
    if (dev.isEmpty) data.remove('dev_dependencies');
  }
  if (overrides.isNotEmpty) {
    data['dependency_overrides'] = overrides;
  } else {
    data.remove('dependency_overrides');
  }
  pubspec.writeAsStringSync(
    '${const JsonEncoder.withIndent('  ').convert(data)}\n',
  );
}

void prepareNpmArchiveManifest(
  Directory copy, {
  required Map<String, String> npmVersions,
  required Map<String, String> npmOwnerDirectories,
}) {
  final manifest = File(p.join(copy.path, 'package.json'));
  final data = jsonDecode(manifest.readAsStringSync()) as Map<String, dynamic>;
  data.remove('private');

  void rewrite(Map<String, dynamic>? section) {
    if (section == null) return;
    for (final entry in section.entries.toList()) {
      if (entry.value != 'workspace:*') continue;
      final version = npmVersions[entry.key];
      if (version == null) {
        throw StateError(
          'Unhandled workspace dependency ${entry.key} in ${copy.path}',
        );
      }
      section[entry.key] = version;
    }
  }

  rewrite(data['dependencies'] as Map<String, dynamic>?);
  rewrite(data['devDependencies'] as Map<String, dynamic>?);
  rewrite(data['peerDependencies'] as Map<String, dynamic>?);

  final dependencies = data['dependencies'] as Map<String, dynamic>?;
  if (dependencies != null) {
    for (final entry in dependencies.entries.toList()) {
      final owner = npmOwnerDirectories[entry.key];
      if (owner == null || owner == p.basename(copy.path)) continue;
      dependencies[entry.key] = 'file:../$owner';
    }
  }

  manifest.writeAsStringSync(
    '${const JsonEncoder.withIndent('  ').convert(data)}\n',
  );
}

String npmArchiveFileName(String name, String version) =>
    '${name.replaceFirst('@', '').replaceAll('/', '-')}-$version.tgz';

bool isTestSupportOnly(FlaxWorkspacePackage package) {
  final capabilities = package.metadata.capabilities;
  return capabilities.length == 1 && capabilities.contains('test-support');
}

Map<String, dynamic> buildArchiveReceipt({
  required String flaxRoot,
  required String out,
  required String mode,
  required List<Map<String, String>> dart,
  required List<Map<String, String>> npm,
  DateTime? packedAt,
}) {
  final timestamp = (packedAt ?? DateTime.now().toUtc()).toIso8601String();
  return {
    'format': archiveReceiptFormat,
    'kind': archiveReceiptKind,
    'tool': 'tool/pack_archives.dart',
    'mode': mode,
    'packedAt': timestamp,
    'flaxRoot': flaxRoot,
    'out': out,
    'dart': dart,
    'npm': npm,
    'notes': [
      'Repository manifests keep publish_to: none / private: true.',
      'This receipt records staged archives only; it is not a publish.',
    ],
  };
}

String formatArchiveReceiptText(Map<String, dynamic> receipt) {
  final dart = (receipt['dart'] as List<dynamic>)
      .cast<Map<String, dynamic>>()
      .map((entry) => '${entry['name']}@${entry['version']}')
      .join(', ');
  final npm = (receipt['npm'] as List<dynamic>)
      .cast<Map<String, dynamic>>()
      .map((entry) => '${entry['name']}@${entry['version']}')
      .join(', ');
  return [
    'Flax archive pack receipt',
    'format: ${receipt['format']}',
    'kind: ${receipt['kind']}',
    'tool: ${receipt['tool']}',
    'mode: ${receipt['mode']}',
    'packedAt: ${receipt['packedAt']}',
    'flaxRoot: ${receipt['flaxRoot']}',
    'out: ${receipt['out']}',
    'dart: ${dart.isEmpty ? '(none)' : dart}',
    'npm: ${npm.isEmpty ? '(none)' : npm}',
    for (final note in (receipt['notes'] as List<dynamic>).cast<String>())
      'note: $note',
    '',
  ].join('\n');
}

void writeArchiveReceipt(Directory out, Map<String, dynamic> receipt) {
  File(p.join(out.path, 'RECEIPT.json')).writeAsStringSync(
    '${const JsonEncoder.withIndent('  ').convert(receipt)}\n',
  );
  File(p.join(out.path, 'RECEIPT.txt'))
      .writeAsStringSync(formatArchiveReceiptText(receipt));
}
