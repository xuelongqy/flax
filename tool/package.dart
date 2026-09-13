import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;

import 'src/engine_selection.dart';
import 'src/package_discovery.dart';
import 'src/process.dart';
import 'src/ui_testing.dart';

Future<void> main(List<String> arguments) => command(() async {
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  if (arguments.isEmpty) {
    throw ArgumentError(
      'Usage: dart run tool/package.dart '
      '<check|integration|bindings|tests> [package] [--engine=<name>] [--check]',
    );
  }
  final action = arguments.first;
  if (action == 'bindings') {
    final check = arguments.skip(1).contains('--check');
    if (arguments.skip(1).any((argument) => argument != '--check')) {
      throw ArgumentError(
        'Usage: dart run tool/package.dart bindings [--check]',
      );
    }
    final packagesWithBindings = discoverPackages(root)
        .where((package) => bindingConfigs(package).isNotEmpty)
        .toList();
    if (packagesWithBindings.isEmpty) {
      throw StateError('No binding configs found');
    }
    final command = check ? 'check' : 'generate';
    for (final package in packagesWithBindings) {
      for (final config in bindingConfigs(package)) {
        await run('dart', [
          'run',
          'flax_codegen',
          command,
          '--config',
          config,
        ], directory: root);
      }
    }
    return;
  }
  if (action == 'tests') {
    if (arguments.length != 1) {
      throw ArgumentError('Usage: dart run tool/package.dart tests');
    }
    for (final package in discoverPackages(root)) {
      await _unitTests(package);
    }
    return;
  }
  if (arguments.length < 2) {
    throw ArgumentError('Package name required for $action');
  }
  final package = findPackage(root, arguments[1]);
  final extra = arguments.skip(2).toList();
  if (action == 'check') {
    if (extra.isNotEmpty) throw ArgumentError('Unexpected arguments: $extra');
    await _check(root, package);
    return;
  }
  if (action == 'integration') {
    final engine = selectedEngine(extra);
    await _integration(root, package, engine);
    return;
  }
  throw ArgumentError('Unknown package action: $action');
});

Future<void> _check(String root, FlaxWorkspacePackage package) async {
  await run(package.usesFlutter ? 'flutter' : 'dart', [
    'analyze',
    if (package.usesFlutter) '--no-pub',
    '.',
  ], directory: package.directory.path);

  await _unitTests(package);

  final configs = bindingConfigs(package);
  if (configs.isNotEmpty) {
    for (final config in configs) {
      await run('dart', [
        'run',
        'flax_codegen',
        'check',
        '--config',
        p.relative(config, from: package.directory.path),
      ], directory: package.directory.path);
    }
  }

  if (File(p.join(package.js.path, 'package.json')).existsSync()) {
    await _buildJsDependencies(root, package.js);
    final manifest = jsonDecode(
      File(p.join(package.js.path, 'package.json')).readAsStringSync(),
    ) as Map<String, dynamic>;
    final scripts = (manifest['scripts'] as Map<String, dynamic>? ?? const {});
    if (_hasUiFixtures(package)) {
      await run('node', [
        'tool/ui_bundle.mjs',
        '--package',
        p.basename(package.directory.path),
      ], directory: root);
    }
    for (final script in ['typecheck', 'test']) {
      if (scripts.containsKey(script)) {
        await run('pnpm', [
          '--silent',
          'run',
          script,
        ], directory: package.js.path);
      }
    }
  }

  if (File(p.join(package.js.path, 'host.json')).existsSync()) {
    await run('node', [
      'tool/host_bundle.mjs',
      '--check',
      '--package',
      p.basename(package.directory.path),
    ], directory: root);
  }

  if (package.example.existsSync()) {
    final exampleJs = Directory(p.join(package.example.path, 'js'));
    if (File(p.join(exampleJs.path, 'package.json')).existsSync()) {
      await _buildJsDependencies(root, exampleJs);
      await run('pnpm', [
        '--silent',
        'run',
        'typecheck',
      ], directory: exampleJs.path);
      await run('node', [
        'tool/example_bundle.mjs',
        '--package',
        p.basename(package.directory.path),
      ], directory: root);
    }
    await run('flutter', [
      'analyze',
      '--no-pub',
      '.',
    ], directory: package.example.path);
    await _runTests(package.example, usesFlutter: true, path: 'test');
  }
}

bool _hasUiFixtures(FlaxWorkspacePackage package) =>
    File(p.join(package.directory.path, 'tool', 'ui_fixture.dart'))
        .existsSync() ||
    Directory(p.join(package.js.path, 'test', 'fixtures')).existsSync() ||
    File(p.join(package.js.path, 'test', 'ui.mjs')).existsSync();

Future<void> _unitTests(FlaxWorkspacePackage package) async {
  await _runTests(
    package.directory,
    usesFlutter: package.usesFlutter,
    path: 'test',
    exclude: 'test/ui',
  );
}

Future<int> _runTests(
  Directory root, {
  required bool usesFlutter,
  required String path,
  String? exclude,
  String? device,
}) async {
  final directory = Directory(p.join(root.path, path));
  if (!directory.existsSync()) return 0;
  final excluded = exclude == null ? null : p.join(root.path, exclude);
  final tests =
      directory
          .listSync(recursive: true, followLinks: false)
          .whereType<File>()
          .where((file) => file.path.endsWith('_test.dart'))
          .where((file) => excluded == null || !p.isWithin(excluded, file.path))
          .map((file) => p.relative(file.path, from: root.path))
          .toList()
        ..sort();
  if (tests.isEmpty) return 0;
  await run(usesFlutter ? 'flutter' : 'dart', [
    'test',
    if (usesFlutter) '--no-pub',
    if (device != null) ...['-d', device],
    ...tests,
  ], directory: root.path);
  return tests.length;
}

Future<void> _integration(
  String root,
  FlaxWorkspacePackage package,
  String engine,
) async {
  requireUiAssets(root, engine: engine);
  var testCount = 0;
  if (package.uiTests.existsSync()) {
    await _buildJsDependencies(root, package.js);
    await run('node', [
      'tool/ui_bundle.mjs',
      '--package',
      p.basename(package.directory.path),
    ], directory: root);
    testCount += await runFrameworkTests(
      root,
      engine: engine,
      packageName: package.name,
    );
  }
  final hasPackageMacosRunner = Directory(
    p.join(package.directory.path, 'macos'),
  ).existsSync();
  testCount += await _runTests(
    package.directory,
    // A package-level integration_test without a platform project is a Dart
    // runtime contract. Device tests belong to the package example, where the
    // platform runner and application under test live together.
    usesFlutter: hasPackageMacosRunner,
    path: 'integration_test',
    device: hasPackageMacosRunner ? 'macos' : null,
  );
  if (package.example.existsSync()) {
    final exampleJs = Directory(p.join(package.example.path, 'js'));
    if (File(p.join(exampleJs.path, 'package.json')).existsSync()) {
      await _buildJsDependencies(root, exampleJs);
      await run('node', [
        'tool/example_bundle.mjs',
        '--package',
        p.basename(package.directory.path),
      ], directory: root);
    }
    testCount += await runPackageExampleTests(root, package, engine: engine);
  }
  if (testCount == 0) {
    throw StateError('No integration tests for ${package.name}');
  }
}

Future<void> _buildJsDependencies(String root, Directory package) async {
  final manifestFile = File(p.join(package.path, 'package.json'));
  if (!manifestFile.existsSync()) return;
  final manifest = jsonDecode(manifestFile.readAsStringSync()) as Map;
  final name = manifest['name'] as String;
  await run('pnpm', [
    '--silent',
    '--filter',
    '$name...',
    'run',
    'build',
  ], directory: root);
}
