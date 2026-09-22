import 'dart:io';

import 'package:path/path.dart' as p;

import 'src/archive_packing.dart';
import 'src/package_discovery.dart';
import 'src/process.dart';

/// Stage disposable Pub/npm archives with a stable pack receipt.
///
/// Mirrors the strip/prepare flow used by [check_packages.dart] and the M4
/// canary packer. Does not publish, reserve registry names, or modify tracked
/// manifests. Default output is ignored `.local/archives/`.
Future<void> main(List<String> arguments) => command(() async {
  final options = _Options.parse(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final discovered = discoverPackages(root);
  final discoveredNpm = discoverNpmPackages(root);
  if (options.selected != null) {
    final known = discovered.map((package) => package.name).toSet();
    final missing = options.selected!.difference(known);
    if (missing.isNotEmpty) {
      throw StateError('Unknown package(s): ${missing.join(', ')}');
    }
  }
  final packages = discovered
      .where(
        (package) => options.selected == null
            ? !isTestSupportOnly(package)
            : options.selected!.contains(package.name),
      )
      .toList();
  final npmPackages = discoveredNpm.where((package) {
    if (options.selected == null) return true;
    final owner = package.dartOwner;
    return owner != null && options.selected!.contains(owner.name);
  }).toList();
  if (packages.isEmpty) {
    throw StateError('No packages selected for archive packing');
  }

  final out = options.dryRun
      ? Directory.systemTemp.createTempSync('flax-archives-')
      : Directory(options.out ?? p.join(root, '.local', 'archives'));
  if (!options.dryRun && out.existsSync()) {
    out.deleteSync(recursive: true);
  }
  out.createSync(recursive: true);

  try {
    final receipt = await _pack(
      root: root,
      out: out,
      packages: packages,
      npmPackages: npmPackages,
      mode: options.dryRun ? 'dry-run' : 'write',
      skipNpm: options.skipNpm,
      forceBuild: options.forceBuild,
    );
    stdout.write(formatArchiveReceiptText(receipt));
    if (options.dryRun) {
      stdout.writeln('Dry-run complete; temporary archives discarded.');
    } else {
      stdout.writeln('Archives ready under ${out.path}');
    }
  } finally {
    if (options.dryRun && out.existsSync()) {
      out.deleteSync(recursive: true);
    }
  }
});

Future<Map<String, dynamic>> _pack({
  required String root,
  required Directory out,
  required List<FlaxWorkspacePackage> packages,
  required List<FlaxNpmPackage> npmPackages,
  required String mode,
  required bool skipNpm,
  required bool forceBuild,
}) async {
  final dartOut = Directory(p.join(out.path, 'dart'))..createSync();
  final packageNames = packages.map((package) => package.name).toSet();
  final dartEntries = <Map<String, String>>[];

  for (final package in packages) {
    final target = Directory(p.join(dartOut.path, package.name));
    copyArchiveSource(
      package.directory,
      target,
      skip: archiveSkipNames.union(archiveDartExtraSkipNames),
    );
    prepareDartArchivePubspec(target, packageNames: packageNames);
    final version = package.pubspec['version'] as String? ?? '0.0.0';
    dartEntries.add({
      'name': package.name,
      'version': version,
      'path': p.relative(target.path, from: out.path),
    });
    stdout.writeln('Packed Dart tree: ${target.path}');
  }

  final npmEntries = <Map<String, String>>[];
  if (!skipNpm) {
    final npmVersions = <String, String>{};
    final npmOwners = <String, String>{};
    for (final package in discoverNpmPackages(root)) {
      npmVersions[package.name] = package.version;
    }
    for (final package in npmPackages) {
      npmOwners[package.name] = package.archiveDirectoryName;
    }

    final npmOut = Directory(p.join(out.path, 'npm'))..createSync();
    final artifacts = Directory(p.join(out.path, 'npm-artifacts'))
      ..createSync();

    for (final package in npmPackages) {
      final dist = Directory(p.join(package.directory.path, 'dist'));
      if (forceBuild || !dist.existsSync()) {
        await run('pnpm', const [
          '--silent',
          'run',
          'build',
        ], directory: package.directory.path);
      }
      final copy = Directory(p.join(npmOut.path, package.archiveDirectoryName));
      copyArchiveSource(package.directory, copy);
      prepareNpmArchiveManifest(
        copy,
        npmVersions: npmVersions,
        npmOwnerDirectories: npmOwners,
      );
      await run('pnpm', [
        'pack',
        '--pack-destination',
        artifacts.path,
      ], directory: copy.path);
      final name = package.name;
      final version = npmVersions[name]!;
      final archiveName = npmArchiveFileName(name, version);
      final archive = File(p.join(artifacts.path, archiveName));
      if (!archive.existsSync()) {
        throw StateError('Missing npm archive for $name: ${archive.path}');
      }
      npmEntries.add({
        'name': name,
        'version': version,
        'path': p.relative(copy.path, from: out.path),
        'archive': p.relative(archive.path, from: out.path),
      });
      stdout.writeln('Packed npm archive: ${archive.path}');
    }
  }

  final receipt = buildArchiveReceipt(
    flaxRoot: root,
    out: out.path,
    mode: mode,
    dart: dartEntries,
    npm: npmEntries,
  );
  writeArchiveReceipt(out, receipt);
  return receipt;
}

final class _Options {
  const _Options({
    required this.out,
    required this.dryRun,
    required this.skipNpm,
    required this.forceBuild,
    required this.selected,
  });

  final String? out;
  final bool dryRun;
  final bool skipNpm;
  final bool forceBuild;
  final Set<String>? selected;

  static _Options parse(List<String> arguments) {
    String? out;
    var dryRun = false;
    var skipNpm = false;
    var forceBuild = false;
    Set<String>? selected;
    for (var index = 0; index < arguments.length; index += 1) {
      final argument = arguments[index];
      if (argument == '--dry-run') {
        dryRun = true;
        continue;
      }
      if (argument == '--skip-npm') {
        skipNpm = true;
        continue;
      }
      if (argument == '--force-build') {
        forceBuild = true;
        continue;
      }
      if (argument == '--out') {
        if (index + 1 >= arguments.length) {
          throw ArgumentError('Missing value for --out');
        }
        out = arguments[++index];
        continue;
      }
      if (argument.startsWith('--out=')) {
        out = argument.substring('--out='.length);
        continue;
      }
      if (argument == '--packages') {
        if (index + 1 >= arguments.length) {
          throw ArgumentError('Missing value for --packages');
        }
        selected = arguments[++index]
            .split(',')
            .map((name) => name.trim())
            .where((name) => name.isNotEmpty)
            .toSet();
        continue;
      }
      if (argument.startsWith('--packages=')) {
        selected = argument
            .substring('--packages='.length)
            .split(',')
            .map((name) => name.trim())
            .where((name) => name.isNotEmpty)
            .toSet();
        continue;
      }
      if (argument == '--help' || argument == '-h') {
        stdout.writeln('''
Usage: dart run tool/pack_archives.dart [options]

Stage Dart package trees and npm .tgz archives with RECEIPT.json / RECEIPT.txt.

Options:
  --out <dir>           Output directory (default: .local/archives)
  --dry-run             Pack to a temporary directory, print receipt, delete
  --skip-npm            Stage Dart trees only (no pnpm build/pack)
  --force-build         Always run pnpm build before packing npm halves
  --packages a,b,c      Limit to named packages under packages/
  -h, --help            Show this help

Does not publish to pub.dev or npm. Repository manifests stay unpublished.
By default, pnpm build runs only when packages/<name>/js/dist is missing.
''');
        exit(0);
      }
      throw ArgumentError('Unknown argument: $argument');
    }
    if (dryRun && out != null) {
      throw ArgumentError('Use either --dry-run or --out, not both');
    }
    return _Options(
      out: out,
      dryRun: dryRun,
      skipNpm: skipNpm,
      forceBuild: forceBuild,
      selected: selected,
    );
  }
}
