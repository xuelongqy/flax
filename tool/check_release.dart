import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;

import 'src/package_discovery.dart';
import 'src/process.dart';

/// In-repo pre-release checklist without publishing.
///
/// Validates archive contents and stages a disposable pack receipt. Repository
/// manifests keep `publish_to: none` / `private: true`. Does not upload to
/// pub.dev or npm.
Future<void> main(List<String> arguments) => command(() async {
  final options = _Options.parse(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../')).path;

  stdout.writeln('Release check (dry-run; no publish)');
  _assertUnpublished(root);
  stdout.writeln('Confirmed repository packages remain unpublished.');

  await run(Platform.resolvedExecutable, [
    'run',
    'tool/check_packages.dart',
  ], directory: root);

  await run(Platform.resolvedExecutable, [
    'run',
    'tool/pack_archives.dart',
    '--dry-run',
    if (options.skipNpm) '--skip-npm',
  ], directory: root);

  stdout.writeln('''
Release check passed.
- packages:check verified temporary Dart/npm archive contents
- pack_archives --dry-run produced and discarded a receipt
- publish_to: none / private: true unchanged in the repository
This is not a registry publish.
''');
});

void _assertUnpublished(String root) {
  for (final package in discoverPackages(root)) {
    final publishTo = package.pubspec['publish_to'];
    if (publishTo != 'none') {
      throw StateError(
        '${package.name} must keep publish_to: none before a real release '
        'decision (found: $publishTo)',
      );
    }
    if (package.metadata.javascript == null) continue;
    final file = File(p.join(package.js.path, 'package.json'));
    if (!file.existsSync()) {
      throw StateError('${package.name} declares npm metadata without js/');
    }
    final data = jsonDecode(file.readAsStringSync()) as Map<String, dynamic>;
    if (data['private'] != true) {
      throw StateError(
        '${package.name} npm package must keep private: true before a real '
        'release decision',
      );
    }
  }
}

final class _Options {
  const _Options({required this.skipNpm});

  final bool skipNpm;

  static _Options parse(List<String> arguments) {
    var skipNpm = false;
    for (final argument in arguments) {
      if (argument == '--skip-npm') {
        skipNpm = true;
        continue;
      }
      if (argument == '--help' || argument == '-h') {
        stdout.writeln('''
Usage: dart run tool/check_release.dart [--skip-npm]

Pre-release archive validation without publishing:
  1. Assert publish_to: none / private: true in the repository
  2. dart run tool/check_packages.dart
  3. dart run tool/pack_archives.dart --dry-run

Options:
  --skip-npm   Forward to pack_archives (Dart trees only)
  -h, --help   Show this help
''');
        exit(0);
      }
      throw ArgumentError('Unknown argument: $argument');
    }
    return _Options(skipNpm: skipNpm);
  }
}
