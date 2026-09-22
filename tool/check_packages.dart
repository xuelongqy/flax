import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;

import 'src/package_discovery.dart';
import 'src/process.dart';

Future<void> main() => command(() async {
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final packages = discoverPackages(root);
  final npmDeliverables = discoverNpmPackages(root);
  for (final package in packages) {
    _validatePackageLayout(package);
  }
  final corePackage = packages.singleWhere(
    (package) => package.metadata.capabilities.contains('core'),
  );
  final coreNpmName = corePackage.metadata.javascript?.name;
  if (coreNpmName == null) throw StateError('Core package has no npm package');
  final npmVersions = <String, String>{};
  final npmPackages = <String, Map<String, dynamic>>{};
  for (final package in npmDeliverables) {
    final data = package.manifest;
    npmVersions[package.name] = data['version'] as String;
    npmPackages[package.name] = data;
  }

  final temporary = Directory.systemTemp.createTempSync('flax-packages-');
  try {
    final dartCopies = _prepareDartPackages(packages, temporary);
    final npmArchives = <String, _NpmArchive>{};
    for (final package in packages) {
      final copy = dartCopies[package.name]!;
      _rejectRepositoryPaths(copy, root);
      await _checkDartPackage(package, copy);
    }
    for (final package in npmDeliverables) {
      final archive = await _checkNpmPackage(
        package,
        temporary,
        npmVersions,
        root,
      );
      npmArchives[archive.name] = archive;
    }
    await _checkDartConsumers(packages, dartCopies, temporary);
    await _checkNpmConsumers(
      npmArchives,
      npmPackages,
      temporary,
      root,
      coreNpmName,
    );
  } finally {
    temporary.deleteSync(recursive: true);
  }
});

void _validatePackageLayout(FlaxWorkspacePackage package) {
  final metadata = package.metadata;
  final library = metadata.dartEntrypoint.substring(
    'package:${package.name}/'.length,
  );
  void require(String path, String reason) {
    if (!File(p.join(package.directory.path, path)).existsSync()) {
      throw StateError('${package.name} $reason: $path');
    }
  }

  require(p.join('lib', library), 'is missing its Dart entrypoint');
  if (metadata.javascript != null) {
    require(p.join('js', 'tsconfig.npm.json'), 'is missing its npm config');
    if (metadata.javascript!.mode == 'declarations') {
      require(p.join('js', 'noop.js'), 'is missing its empty npm entry');
    }
  }
  final capabilities = metadata.capabilities;
  if (capabilities.contains('bindings')) {
    require(
      p.join('bindings', 'manifest.json'),
      'is missing its binding manifest',
    );
  }
  if (capabilities.contains('host-plugin') || capabilities.contains('core')) {
    require(
      p.join('js', 'tsconfig.host.json'),
      'is missing its host TypeScript config',
    );
    require(
      p.join('js', 'src', 'host', 'bootstrap.ts'),
      'is missing its host bootstrap source',
    );
    require(
      p.join('lib', 'src', 'generated', 'host_bootstrap.g.dart'),
      'is missing its embedded host bootstrap',
    );
  }
}

void _copySource(Directory source, Directory target) {
  target.createSync(recursive: true);
  for (final entity in source.listSync(followLinks: false)) {
    final name = p.basename(entity.path);
    if ({
      '.cache',
      '.dart_tool',
      '.local',
      '.pnpm-store',
      'build',
      'coverage',
      'node_modules',
    }.contains(name)) {
      continue;
    }
    final destination = p.join(target.path, name);
    if (entity is Directory) {
      _copySource(entity, Directory(destination));
    } else if (entity is File) {
      entity.copySync(destination);
    }
  }
}

Map<String, Directory> _prepareDartPackages(
  List<FlaxWorkspacePackage> packages,
  Directory temporary,
) {
  final root = Directory(p.join(temporary.path, 'dart'))..createSync();
  final copies = <String, Directory>{};
  final packageNames = packages.map((package) => package.name).toSet();
  for (final package in packages) {
    final copy = Directory(p.join(root.path, package.name));
    _copySource(package.directory, copy);
    copies[package.name] = copy;
  }
  for (final copy in copies.values) {
    final license = File(p.join(copy.path, 'LICENSE'));
    if (!license.existsSync()) {
      license.writeAsStringSync(
        'License selection is pending. This temporary file is used only for '
        'archive validation.\n',
      );
    }
    final pubspec = File(p.join(copy.path, 'pubspec.yaml'));
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
    if (overrides.isNotEmpty) data['dependency_overrides'] = overrides;
    pubspec.writeAsStringSync(
      '${const JsonEncoder.withIndent('  ').convert(data)}\n',
    );
  }
  return copies;
}

Future<void> _checkDartPackage(
  FlaxWorkspacePackage package,
  Directory copy,
) async {
  _rejectNoticeArtifacts(copy);
  final result = await Process.run('flutter', [
    'pub',
    'publish',
    '--dry-run',
    '--ignore-warnings',
  ], workingDirectory: copy.path);
  stdout.write(result.stdout);
  stderr.write(result.stderr);
  if (result.exitCode != 0) {
    throw ProcessException(
      'flutter',
      const ['pub', 'publish', '--dry-run', '--ignore-warnings'],
      'Command failed',
      result.exitCode,
    );
  }
  _checkDartArchive(package, _publishedPaths(result.stdout.toString()));
  final sources = [
    for (final name in ['lib', 'bin', 'hook'])
      if (Directory(p.join(copy.path, name)).existsSync()) name,
  ];
  await run('flutter', [
    'analyze',
    '--no-pub',
    '--fatal-infos',
    ...sources,
  ], directory: copy.path);
  stdout.writeln('Verified Dart archive for ${package.name}');
}

Set<String> _publishedPaths(String output) {
  final paths = <String>{};
  final parents = <String>[];
  for (final line in const LineSplitter().convert(output)) {
    final branch = line.indexOf(RegExp('[├└]── '));
    if (branch < 0 || branch % 4 != 0) continue;
    final depth = branch ~/ 4;
    final value = line
        .substring(branch + 4)
        .replaceFirst(RegExp(r' \([^)]*\)$'), '');
    if (parents.length > depth) parents.removeRange(depth, parents.length);
    if (parents.length != depth) continue;
    parents.add(value);
    paths.add(parents.join('/'));
  }
  return paths;
}

void _checkDartArchive(FlaxWorkspacePackage package, Set<String> paths) {
  void require(String path) {
    if (!paths.contains(path)) {
      throw StateError(
        'Missing Dart archive content for ${package.name}: $path',
      );
    }
  }

  void reject(String path) {
    if (paths.any(
      (candidate) => candidate == path || candidate.startsWith('$path/'),
    )) {
      throw StateError(
        'Unexpected Dart archive content for ${package.name}: $path',
      );
    }
  }

  require('flax_package.yaml');
  final capabilities = package.metadata.capabilities;
  if (capabilities.contains('bindings')) {
    require('bindings/manifest.json');
  }
  if (capabilities.contains('host-plugin') || capabilities.contains('core')) {
    require('lib/src/generated/host_bootstrap.g.dart');
  }
  if (capabilities.contains('engine')) {
    require('THIRD_PARTY_NOTICES.txt');
    require('native/generated/macos_arm64/manifest.json');
    if (!paths.any((path) => path.endsWith('.dylib'))) {
      throw StateError('Missing engine library for ${package.name}');
    }
    for (final path in [
      'native/CMakeLists.txt',
      'native/ffigen.yaml',
      'native/generated/macos_arm64/notices',
    ]) {
      reject(path);
    }
    if (paths.any(
      (path) => path.endsWith('.patch') || path.endsWith('_engine.cpp'),
    )) {
      throw StateError('Engine development source leaked into ${package.name}');
    }
  }
  if (capabilities.contains('core')) {
    require('native/include/flax/runtime.h');
    reject('native/src/');
    reject('native/tests/');
    reject('native/ffigen.yaml');
    reject('native/CMakeLists.txt');
  }
}

void _rejectNoticeArtifacts(Directory package) {
  const sourceOrBinaryExtensions = {
    '.a',
    '.c',
    '.cc',
    '.cpp',
    '.dart',
    '.dylib',
    '.exe',
    '.h',
    '.hpp',
    '.js',
    '.mjs',
    '.o',
    '.py',
    '.sh',
    '.so',
    '.ts',
  };
  for (final entity
      in package
          .listSync(recursive: true, followLinks: false)
          .whereType<File>()) {
    final relative = p.relative(entity.path, from: package.path);
    if (p.split(relative).contains('notices') &&
        sourceOrBinaryExtensions.contains(
          p.extension(entity.path).toLowerCase(),
        )) {
      throw StateError('Non-document file in notices: $relative');
    }
  }
}

Future<_NpmArchive> _checkNpmPackage(
  FlaxNpmPackage package,
  Directory temporary,
  Map<String, String> versions,
  String workspaceRoot,
) async {
  final copy = Directory(
    p.join(
      temporary.path,
      'npm',
      package.name.replaceAll(RegExp(r'[^a-zA-Z0-9._-]+'), '-'),
    ),
  );
  _copySource(package.directory, copy);
  final manifest = File(p.join(copy.path, 'package.json'));
  final data = jsonDecode(manifest.readAsStringSync()) as Map<String, dynamic>;
  data.remove('private');
  for (final field in ['dependencies', 'devDependencies']) {
    final dependencies = data[field] as Map<String, dynamic>?;
    if (dependencies == null) continue;
    for (final entry in dependencies.entries.toList()) {
      if (entry.value == 'workspace:*') {
        dependencies[entry.key] = versions[entry.key] ?? '0.0.0';
      }
    }
  }
  manifest.writeAsStringSync(
    '${const JsonEncoder.withIndent('  ').convert(data)}\n',
  );
  // Single pack: list contents via --json and write the tarball once.
  // Do not use `pnpm pack --dry-run`; some pnpm 11 builds reject that flag
  // even when `pnpm help pack` documents it.
  final artifacts = Directory(p.join(temporary.path, 'npm-artifacts'))
    ..createSync(recursive: true);
  final result = await Process.run('pnpm', [
    'pack',
    '--json',
    '--pack-destination',
    artifacts.path,
  ], workingDirectory: copy.path);
  if (result.exitCode != 0) {
    throw StateError('npm pack failed for ${package.name}: ${result.stderr}');
  }
  final packed = jsonDecode(result.stdout as String) as Map<String, dynamic>;
  final files = (packed['files'] as List<dynamic>)
      .cast<Map<String, dynamic>>()
      .map((file) => file['path'] as String)
      .toList();
  _checkNpmArchive(package, data, files);
  if (files.any(
    (file) =>
        file.startsWith('src/') ||
        file.startsWith('test/') ||
        file.startsWith('integration_test/') ||
        file.contains('node_modules') ||
        file.contains('.dart_tool') ||
        file.contains('/build/'),
  )) {
    throw StateError(
      'Unexpected npm archive content for ${package.name}: $files',
    );
  }
  for (final path in files) {
    final file = File(p.join(copy.path, path));
    if (file.existsSync() &&
        utf8
            .decode(file.readAsBytesSync(), allowMalformed: true)
            .contains(workspaceRoot)) {
      throw StateError(
        'Repository path leaked into npm archive for ${package.name}: $path',
      );
    }
  }
  final name = data['name'] as String;
  final version = data['version'] as String;
  final archive = File(p.join(artifacts.path, _npmArchiveName(name, version)));
  if (!archive.existsSync()) {
    throw StateError('Missing npm archive for $name: ${archive.path}');
  }
  stdout.writeln('Verified npm archive for $name: ${files.length} files');
  return _NpmArchive(name, archive);
}

void _checkNpmArchive(
  FlaxNpmPackage package,
  Map<String, dynamic> manifest,
  List<String> files,
) {
  final configuredFiles = (manifest['files'] as List<dynamic>?)?.cast<String>();
  if (configuredFiles == null || configuredFiles.contains('dist')) {
    throw StateError(
      '${package.name} must list its npm archive files explicitly',
    );
  }
  if (files.any((path) => path.contains('host/bootstrap'))) {
    throw StateError(
      'Host bootstrap leaked into npm archive for ${package.name}',
    );
  }
  final javascript = files.where((path) => path.endsWith('.js')).toList();
  if (package.mode == 'declarations') {
    if (package.isTypeOnly && javascript.isNotEmpty) {
      throw StateError(
        'Type-only npm package ${package.name} must not contain JavaScript: '
        '$javascript',
      );
    }
    if (!package.isTypeOnly &&
        (javascript.length != 1 || javascript.single != 'noop.js')) {
      throw StateError(
        'Declaration npm package ${package.name} must contain only noop.js: '
        '$javascript',
      );
    }
  } else if (javascript.isEmpty) {
    throw StateError('Runtime npm package ${package.name} has no JavaScript');
  }
  final exports = manifest['exports'] as Map<String, dynamic>;
  for (final entry in exports.values) {
    if (entry is String) {
      _requireNpmExport(package, files, 'export', entry);
      continue;
    }
    final conditions = entry as Map<String, dynamic>;
    for (final field in ['types', 'import']) {
      final target = conditions[field];
      if (target is String) {
        _requireNpmExport(package, files, field, target);
      }
    }
  }
}

void _requireNpmExport(
  FlaxNpmPackage package,
  List<String> files,
  String field,
  String target,
) {
  final path = target.replaceFirst('./', '');
  final parts = path.split('*');
  final matches = parts.length == 1
      ? files.contains(path)
      : files.any(
          (file) =>
              RegExp('^${parts.map(RegExp.escape).join('.*')}\$')
                  .hasMatch(file),
        );
  if (!matches) {
    throw StateError('Missing npm export for ${package.name}: $field $path');
  }
}

Future<void> _checkDartConsumers(
  List<FlaxWorkspacePackage> packages,
  Map<String, Directory> copies,
  Directory temporary,
) async {
  final packageNames = packages.map((package) => package.name).toSet();
  final dependencies = <String, Set<String>>{};
  for (final package in packages) {
    final pubspec = readYamlFile(
      File(p.join(package.directory.path, 'pubspec.yaml')),
    );
    dependencies[package.name] = {
      for (final name
          in (pubspec['dependencies'] as Map<String, dynamic>? ?? const {})
              .keys)
        if (packageNames.contains(name)) name,
    };
  }

  for (final package in packages) {
    final consumer = Directory(
      p.join(temporary.path, 'dart-consumers', package.name),
    )..createSync(recursive: true);
    final closure = <String>{};
    void visit(String name) {
      for (final dependency in dependencies[name] ?? const <String>{}) {
        if (closure.add(dependency)) visit(dependency);
      }
    }

    visit(package.name);
    final overrides = <String, dynamic>{
      for (final name in closure) name: {'path': copies[name]!.path},
    };
    File(p.join(consumer.path, 'pubspec.yaml')).writeAsStringSync(
      '${const JsonEncoder.withIndent('  ').convert({
        'name': '${package.name}_archive_consumer',
        'publish_to': 'none',
        'environment': {'sdk': '^3.13.2'},
        'dependencies': {
          package.name: {'path': copies[package.name]!.path},
        },
        if (overrides.isNotEmpty) 'dependency_overrides': overrides,
      })}\n',
    );
    final source = File(p.join(consumer.path, 'lib', 'consumer.dart'));
    source.parent.createSync(recursive: true);
    final metadata = package.metadata;
    final references = [
      ...metadata.registration.bindings,
      ...metadata.registration.plugins,
    ];
    source.writeAsStringSync('''
// ignore: unused_import
import '${metadata.dartEntrypoint}' as target;

void main() {
  final registrations = <Object?>[
${references.map((name) => '    target.$name,').join('\n')}
  ];
  if (registrations.length != ${references.length}) throw StateError('unreachable');
}
''');
    await run('flutter', ['pub', 'get'], directory: consumer.path);
    await run('flutter', [
      'analyze',
      '--no-pub',
      '--fatal-infos',
    ], directory: consumer.path);
    stdout.writeln('Verified outside Dart consumer for ${package.name}');
  }
}

Future<void> _checkNpmConsumers(
  Map<String, _NpmArchive> archives,
  Map<String, Map<String, dynamic>> manifests,
  Directory temporary,
  String workspaceRoot,
  String coreName,
) async {
  final core = archives[coreName];
  if (core == null) throw StateError('Missing $coreName archive');
  final root = Directory(p.join(temporary.path, 'npm-consumers'))
    ..createSync(recursive: true);
  final consumers = <Directory>[];
  for (final archive in archives.values) {
    final directory = Directory(
      p.join(root.path, archive.name.replaceAll(RegExp(r'[^a-zA-Z0-9]+'), '-')),
    )..createSync(recursive: true);
    consumers.add(directory);
    final dependencies = <String, String>{
      core.name: 'file:${p.relative(core.file.path, from: directory.path)}',
      if (archive.name != core.name)
        archive.name:
            'file:${p.relative(archive.file.path, from: directory.path)}',
    };
    File(p.join(directory.path, 'package.json')).writeAsStringSync(
      '${const JsonEncoder.withIndent('  ').convert({'name': 'consumer-${p.basename(directory.path)}', 'private': true, 'type': 'module', 'dependencies': dependencies})}\n',
    );
    final runtimeImports = <String>{
      ..._npmExportSpecifiers(coreName, manifests[coreName]!, runtime: true),
      if (archive.name != core.name)
        ..._npmExportSpecifiers(
          archive.name,
          manifests[archive.name]!,
          runtime: true,
        ),
    }.toList()..sort();
    final typeImports = <String>{
      ..._npmExportSpecifiers(coreName, manifests[coreName]!),
      if (archive.name != core.name)
        ..._npmExportSpecifiers(archive.name, manifests[archive.name]!),
    }.toList()..sort();
    File(p.join(directory.path, 'verify.mjs')).writeAsStringSync(
      'for (const name of ${jsonEncode(runtimeImports)}) await import(name);\n'
      "console.log('Verified ${archive.name} with @flax/core');\n",
    );
    File(p.join(directory.path, 'verify.ts')).writeAsStringSync(
      [
        "export type Core = typeof import('$coreName');",
        for (var index = 0; index < typeImports.length; index += 1)
          "export type Module$index = typeof import('${typeImports[index]}');",
      ].join('\n'),
    );
    File(p.join(directory.path, 'tsconfig.json')).writeAsStringSync(
      '${const JsonEncoder.withIndent('  ').convert({
        'compilerOptions': {
          'strict': true,
          'noEmit': true,
          'target': 'ES2022',
          'module': 'ESNext',
          'moduleResolution': 'Bundler',
          'lib': ['ES2022'],
          'types': <String>[],
        },
        'files': ['verify.ts'],
      })}\n',
    );
  }
  File(p.join(root.path, 'package.json'))
      .writeAsStringSync('{"name":"flax-archive-consumers","private":true}\n');
  File(p.join(root.path, 'pnpm-workspace.yaml')).writeAsStringSync(
    '${const JsonEncoder.withIndent('  ').convert({
      'packages': ['*'],
      'overrides': {for (final archive in archives.values) archive.name: 'file:${p.relative(archive.file.path, from: root.path)}'},
    })}\n',
  );
  await run('pnpm', [
    'install',
    '--offline',
    '--ignore-scripts',
  ], directory: root.path);
  final nodeLoader = File(
    p.join(
      workspaceRoot,
      'packages',
      'flax_tools',
      'js',
      'src',
      'register-node-loader.mjs',
    ),
  ).uri.toString();
  for (final consumer in consumers) {
    await run('node', [
      '--import',
      nodeLoader,
      'verify.mjs',
    ], directory: consumer.path);
    await run('pnpm', [
      '--silent',
      'exec',
      'tsc',
      '--project',
      p.join(consumer.path, 'tsconfig.json'),
    ], directory: workspaceRoot);
  }
}

List<String> _npmExportSpecifiers(
  String packageName,
  Map<String, dynamic> manifest, {
  bool runtime = false,
}) {
  final exports = (manifest['exports'] as Map).cast<String, dynamic>();
  final result = <String>[];
  for (final entry in exports.entries) {
    if (entry.key.contains('*')) continue;
    final target = entry.value;
    final available = switch (target) {
      String value when runtime =>
        value.endsWith('.js') ||
            value.endsWith('.mjs') ||
            value.endsWith('.cjs'),
      String _ => true,
      Map<Object?, Object?> value when runtime => value['import'] is String,
      Map<Object?, Object?> value =>
        value['types'] is String || value['import'] is String,
      _ => false,
    };
    if (!available) continue;
    result.add(
      entry.key == '.' ? packageName : '$packageName${entry.key.substring(1)}',
    );
  }
  return result;
}

void _rejectRepositoryPaths(Directory package, String workspaceRoot) {
  const textExtensions = {
    '.c',
    '.cc',
    '.cmake',
    '.cpp',
    '.dart',
    '.h',
    '.hpp',
    '.json',
    '.md',
    '.txt',
    '.yaml',
    '.yml',
  };
  for (final entity in package.listSync(recursive: true, followLinks: false)) {
    if (entity is! File || !textExtensions.contains(p.extension(entity.path))) {
      continue;
    }
    final relative = p.relative(entity.path, from: package.path);
    if (relative
        .split(p.separator)
        .any(
          {
            '.dart_tool',
            'build',
            'example',
            'integration_test',
            'js',
            'test',
          }.contains,
        )) {
      continue;
    }
    if (entity.readAsStringSync().contains(workspaceRoot)) {
      throw StateError(
        'Repository path leaked into Dart archive for '
        '${p.basename(package.path)}: $relative',
      );
    }
  }
}

String _npmArchiveName(String name, String version) =>
    '${name.replaceFirst('@', '').replaceAll('/', '-')}-$version.tgz';

final class _NpmArchive {
  const _NpmArchive(this.name, this.file);

  final String name;
  final File file;
}
