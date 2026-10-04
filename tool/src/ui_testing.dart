import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:flax/native_target.dart';

import 'platform_selection.dart';

import 'package_discovery.dart';
import 'package_verification.dart';
import 'process.dart';
import 'example_engine.dart';
import 'engine_selection.dart';
import 'ui_suite.dart';
import 'consumer_workspace.dart';

void requireUiAssets(String root, {String engine = defaultFlaxEngine}) {
  if (currentCheckTarget().mobile) {
    throw UnsupportedError(
      'Use check_platform.dart with --device for mobile UI tests',
    );
  }
  if (currentCheckTarget().name != FlaxNativeTarget.host().name) {
    throw StateError(
      'The test process ABI must match ${currentCheckTarget().name}',
    );
  }
  final lock = '$root/packages/flax_engine_$engine/native/sdk.lock.json';
  if (!File(lock).existsSync()) {
    throw StateError('$engine SDK lock is missing: $lock');
  }
}

Future<int> runFrameworkTests(
  String root, {
  String engine = defaultFlaxEngine,
  String? packageName,
  String? file,
  bool reverseOwners = false,
}) async {
  requireUiAssets(root, engine: engine);
  final tests = collectUiTests(root, packageName: packageName, file: file);
  if (reverseOwners) {
    tests.sort((a, b) {
      final owner = b.packageName.compareTo(a.packageName);
      return owner == 0 ? a.path.compareTo(b.path) : owner;
    });
  }
  final names = tests.map((t) => t.packageName).toSet();
  final packages = discoverPackages(root)
      .where((p) => names.contains(p.name))
      .toList();
  await _runIsolated(root, packages, engine, tests);
  return tests.length;
}

Future<int> runPackageExampleTests(
  String root,
  FlaxWorkspacePackage package, {
  String engine = defaultFlaxEngine,
  Future<void> Function(String, List<String>, {String? directory}) runCommand =
      run,
}) async {
  if (!package.hasFlutterExample) return 0;
  var count = 0;
  await withPackageExample(root, package, engine, (example) async {
    for (final entry in const [('test', false), ('integration_test', true)]) {
      final directory = Directory(p.join(example, entry.$1));
      if (!directory.existsSync()) continue;
      final tests =
          directory
              .listSync(recursive: true, followLinks: false)
              .whereType<File>()
              .where((file) => file.path.endsWith('_test.dart'))
              .map((file) => p.relative(file.path, from: example))
              .toList()
            ..sort();
      if (tests.isEmpty) continue;
      await runCommand('flutter', [
        'test',
        '--no-pub',
        if (entry.$2) ...['-d', currentCheckDevice()],
        ...tests,
      ], directory: example);
      count += tests.length;
    }
  }, runCommand: runCommand);
  return count;
}

Future<int> runAllPackageExamples(
  String root, {
  String engine = defaultFlaxEngine,
  Future<void> Function(String, List<String>, {String? directory}) runCommand =
      run,
}) async {
  var count = 0;
  for (final package in discoverPackages(root)) {
    count += await runPackageExampleTests(
      root,
      package,
      engine: engine,
      runCommand: runCommand,
    );
  }
  return count;
}

void _copyTree(Directory source, Directory target, {bool packageRoot = false}) {
  target.createSync(recursive: true);
  for (final entity in source.listSync(followLinks: false)) {
    final name = p.basename(entity.path);
    if ({
          '.cache',
          '.dart_tool',
          '.local',
          'build',
          'coverage',
          'dist',
          'node_modules',
        }.contains(name) ||
        packageRoot && {'example', 'js'}.contains(name) ||
        entity.path.endsWith('/native/generated')) {
      continue;
    }
    final destination = p.join(target.path, name);
    if (entity is Directory) {
      _copyTree(entity, Directory(destination));
    } else if (entity is File) {
      entity.copySync(destination);
    } else if (entity is Link) {
      Link(destination).createSync(entity.targetSync());
    }
  }
}

void _copyAll(Directory source, Directory target) {
  target.createSync(recursive: true);
  for (final entity in source.listSync(followLinks: false)) {
    final destination = p.join(target.path, p.basename(entity.path));
    if (entity is Directory) {
      _copyAll(entity, Directory(destination));
    } else if (entity is File) {
      entity.copySync(destination);
    } else if (entity is Link) {
      Link(destination).createSync(entity.targetSync());
    }
  }
}

Future<void> _runIsolated(
  String root,
  List<FlaxWorkspacePackage> selected,
  String engine,
  List<UiTestFile> tests,
) async {
  final workspace = ConsumerWorkspace(
    'ui-${currentCheckTarget().name}-$engine',
  );
  final temporary = workspace.directory;
  try {
    final copiedNames = packageDependencyClosure(
      root,
      selected.map((package) => package.name),
      replaceEngineWith: engine,
    ).toList()..sort();
    final manifest = <String, dynamic>{
      'name': 'flax_ui_$engine',
      'version': '0.0.0',
      'publish_to': 'none',
      'environment': {'sdk': '^3.13.2', 'flutter': '>=3.47.2'},
      'workspace': ['packages/*'],
      'dependencies': {
        'flutter': {'sdk': 'flutter'},
        for (final name in copiedNames) name: {'path': 'packages/$name'},
      },
      'dev_dependencies': {
        'flutter_test': {'sdk': 'flutter'},
      },
    };
    addCandidateSdk(manifest, engine, root: root);
    File(p.join(temporary.path, 'pubspec.yaml'))
        .writeAsStringSync(jsonEncode(manifest));
    final targetPackages = Directory(p.join(temporary.path, 'packages'));
    if (targetPackages.existsSync()) targetPackages.deleteSync(recursive: true);
    targetPackages.createSync(recursive: true);
    final sourcePackages = {
      for (final package in discoverPackages(root)) package.name: package,
    };
    for (final name in copiedNames) {
      final package = sourcePackages[name]!;
      final destination = Directory(
        p.join(targetPackages.path, p.basename(package.directory.path)),
      );
      _copyTree(package.directory, destination, packageRoot: true);
      final pubspec = File(p.join(destination.path, 'pubspec.yaml'));
      final manifest = readYamlFile(pubspec);
      for (final section in ['dependencies', 'dev_dependencies']) {
        final dependencies = manifest[section];
        if (dependencies is! Map<String, dynamic>) continue;
        final engines = dependencies.keys
            .where((name) => name.startsWith('flax_engine_'))
            .toList();
        for (final name in engines) {
          dependencies.remove(name);
        }
        if (engines.isNotEmpty) {
          dependencies['flax_engine_$engine'] = '0.0.0';
        }
      }
      pubspec.writeAsStringSync(jsonEncode(manifest));
      selectExampleEngine(root, destination.path, engine);
    }
    for (final package in selected) {
      final source = Directory(
        p.join(package.directory.path, '.dart_tool', 'flax', 'ui'),
      );
      if (!source.existsSync()) continue;
      final destination = Directory(
        p.join(
          targetPackages.path,
          p.basename(package.directory.path),
          '.dart_tool',
          'flax',
          'ui',
        ),
      );
      _copyAll(source, destination);
      rewriteDartDirectiveUris(destination, Directory(root), temporary);
    }
    rewriteDartDirectiveUris(targetPackages, Directory(root), temporary);
    File(p.join(temporary.path, 'ui-fixtures.json'))
        .writeAsStringSync(jsonEncode(await prepareUiFixtures(root, tests)));
    final entry = File(p.join(temporary.path, 'test', 'ui_suite_test.dart'))
      ..parent.createSync();
    entry.writeAsStringSync(uiSuiteSource(tests, importPrefix: '../packages/'));
    Directory('$root/build/ui/$engine').createSync(recursive: true);
    await run('flutter', ['pub', 'get'], directory: temporary.path);
    await run('flutter', [
      'test',
      '--enable-vmservice',
      '--no-pub',
      '--reporter',
      'expanded',
      '--file-reporter=json:$root/build/ui/$engine/results.json',
      'test/ui_suite_test.dart',
    ], directory: temporary.path);
  } finally {
    workspace.finish();
  }
}
