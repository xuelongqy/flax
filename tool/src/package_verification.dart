import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:yaml/yaml.dart';

import 'engine_selection.dart';
import 'package_discovery.dart';
import 'process.dart';

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
    r'''^([ \t]*(?:import|export|part)[ \t]+["'])''' + from,
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
    final dependencies = pubspec['dependencies'] as Map<String, Object?>;
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
  final temporary = Directory.systemTemp.createTempSync('flax-package-');
  final relocated = Directory.systemTemp.createTempSync('flax-relocated-');
  final environment = Map<String, String>.from(Platform.environment)
    ..removeWhere(
      (name, _) => name.startsWith('DYLD_') || name == 'LD_LIBRARY_PATH',
    );
  try {
    copyDartPackages(root, temporary, ['flax', 'flax_engine_$engine']);
    final consumer = Directory(p.join(temporary.path, 'consumer'))
      ..createSync();
    File(p.join(consumer.path, 'pubspec.yaml')).writeAsStringSync(
      jsonEncode({
        'name': 'flax_runtime_consumer',
        'publish_to': 'none',
        'environment': {'sdk': '^3.13.2'},
        'dependencies': {
          'flax': {'path': '../flax'},
          'flax_engine_$engine': {'path': '../flax_engine_$engine'},
        },
      }),
    );
    Directory(p.join(consumer.path, 'bin')).createSync();
    final enginePackage = 'flax_engine_$engine';
    final fixture = File(
      p.join(
        root.path,
        'packages',
        'flax_test',
        'tool',
        'runtime_consumer.dart.template',
      ),
    ).readAsStringSync();
    File(p.join(consumer.path, 'bin/main.dart')).writeAsStringSync(
      fixture
          .replaceAll('{{enginePackage}}', enginePackage)
          .replaceAll('{{engineClass}}', engineFactoryClass(root.path, engine)),
    );
    await run(
      'flutter',
      ['pub', 'get'],
      directory: consumer.path,
      environment: environment,
      inheritEnvironment: false,
    );
    Future<void> jit() => run(
      Platform.resolvedExecutable,
      ['run', 'bin/main.dart'],
      directory: consumer.path,
      environment: environment,
      inheritEnvironment: false,
    );
    await jit();

    // Run fresh processes so neither the hook cache nor a previously loaded
    // library can disguise missing or corrupt package inputs.
    final assets = Directory(
      p.join(
        temporary.path,
        'flax_engine_$engine/native/generated/macos_arm64',
      ),
    );
    final library = File(p.join(assets.path, 'libflax_$engine.dylib'));
    final hidden = library.renameSync('${library.path}.hidden');
    try {
      await _expectFailure(consumer, environment, 'native assets are missing');
    } finally {
      hidden.renameSync(library.path);
    }
    final manifestFile = File(p.join(assets.path, 'manifest.json'));
    final originalManifest = manifestFile.readAsStringSync();
    try {
      final manifest = jsonDecode(originalManifest) as Map<String, Object?>;
      manifest['sha256'] = 'invalid-checksum';
      manifestFile.writeAsStringSync(jsonEncode(manifest));
      await _expectFailure(consumer, environment, 'checksum mismatch');
    } finally {
      manifestFile.writeAsStringSync(originalManifest);
    }
    await jit();
    await run(
      Platform.resolvedExecutable,
      [
        'build',
        'cli',
        '--target',
        'bin/main.dart',
        '--output',
        'build/consumer',
      ],
      directory: consumer.path,
      environment: environment,
      inheritEnvironment: false,
    );
    copyTree(
      Directory(p.join(consumer.path, 'build/consumer/bundle')),
      relocated,
    );
    File(
      p.join(root.path, 'packages/flax_engine_$engine/THIRD_PARTY_NOTICES.txt'),
    ).copySync(p.join(relocated.path, 'THIRD_PARTY_NOTICES.txt'));
    final executables = Directory(p.join(relocated.path, 'bin'))
        .listSync()
        .whereType<File>()
        .toList();
    if (executables.length != 1) {
      throw StateError('Expected one AOT consumer executable');
    }
    // Remove the source packages and original bundle before executing the copy.
    temporary.deleteSync(recursive: true);
    await run(
      executables.single.path,
      [],
      directory: relocated.path,
      environment: environment,
      inheritEnvironment: false,
    );
    stdout.writeln(
      'Standalone JIT, missing/corrupt assets, and relocated AOT bundle verified.',
    );
  } finally {
    if (temporary.existsSync()) temporary.deleteSync(recursive: true);
    relocated.deleteSync(recursive: true);
  }
}

Future<void> _expectFailure(
  Directory consumer,
  Map<String, String> environment,
  String message,
) async {
  final process = await Process.start(
    Platform.resolvedExecutable,
    ['run', 'bin/main.dart'],
    workingDirectory: consumer.path,
    environment: environment,
    includeParentEnvironment: false,
  );
  final stdoutText = process.stdout.transform(utf8.decoder).join();
  final stderrText = process.stderr.transform(utf8.decoder).join();
  final code = await process.exitCode.timeout(
    const Duration(minutes: 2),
    onTimeout: () {
      process.kill(ProcessSignal.sigkill);
      throw TimeoutException('Asset validation process did not finish');
    },
  );
  final output = '${await stdoutText}\n${await stderrText}';
  if (code == 0 || !output.contains(message)) {
    throw StateError(
      'Expected asset validation failure ($message), got $code:\n$output',
    );
  }
  stdout.writeln('Verified rejection: $message');
}
