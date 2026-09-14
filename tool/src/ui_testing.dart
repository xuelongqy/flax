import 'dart:convert';
import 'dart:ffi';
import 'dart:io';

import 'package:path/path.dart' as p;

import 'package_discovery.dart';
import 'package_verification.dart';
import 'process.dart';
import 'example_engine.dart';
import 'engine_selection.dart';

void requireUiAssets(String root, {String engine = defaultFlaxEngine}) {
  if (!Platform.isMacOS || Abi.current() != Abi.macosArm64) {
    throw UnsupportedError('UI validation requires macOS arm64');
  }
  final assets =
      '$root/packages/flax_engine_$engine/native/generated/macos_arm64';
  if (!File('$assets/manifest.json').existsSync() ||
      !File('$assets/libflax_$engine.dylib').existsSync()) {
    throw StateError(
      '$engine assets are missing. Run `dart run tool/native.dart --engine=$engine` first.',
    );
  }
  // The engine build hook validates the manifest and checksum when Flutter runs.
}

Future<int> runFrameworkTests(
  String root, {
  String engine = defaultFlaxEngine,
  String? packageName,
}) async {
  requireUiAssets(root, engine: engine);
  final packages = discoverPackages(root)
      .where((package) => packageName == null || package.name == packageName)
      .where((package) => package.uiTests.existsSync())
      .toList();
  final tests = packages.map((package) => package.uiTests.path).toList();
  if (tests.isEmpty) return 0;
  if (engine != defaultFlaxEngine) {
    await _runIsolated(root, packages, engine);
    return tests.length;
  }
  for (final test in tests) {
    final package = Directory(test).parent.parent.path;
    await run('flutter', [
      'test',
      '--enable-vmservice',
      '--no-pub',
      '--reporter',
      'expanded',
      'test/ui',
    ], directory: package);
  }
  return tests.length;
}

Future<int> runPackageExampleTests(
  String root,
  FlaxWorkspacePackage package, {
  String engine = defaultFlaxEngine,
}) async {
  if (!package.hasRunnableExample) return 0;
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
      await run('flutter', [
        'test',
        '--no-pub',
        if (entry.$2) ...['-d', 'macos'],
        ...tests,
      ], directory: example);
      count += tests.length;
    }
  });
  return count;
}

Future<int> runAllPackageExamples(
  String root, {
  String engine = defaultFlaxEngine,
}) async {
  var count = 0;
  for (final package in discoverPackages(root)) {
    count += await runPackageExampleTests(root, package, engine: engine);
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
        packageRoot && {'example', 'js', 'native'}.contains(name)) {
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
) async {
  final temporary = Directory.systemTemp.createTempSync('flax-ui-$engine-');
  try {
    final copiedNames = packageDependencyClosure(
      root,
      selected.map((package) => package.name),
      replaceEngineWith: engine,
    ).toList()..sort();
    File(p.join(temporary.path, 'pubspec.yaml')).writeAsStringSync('''
name: flax_ui_$engine
version: 0.0.0
publish_to: none
environment:
  sdk: ^3.13.2
  flutter: '>=3.47.2'
workspace:
  - packages/*
''');
    final targetPackages = Directory(p.join(temporary.path, 'packages'))
      ..createSync();
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
    _copyAll(
      Directory(
        p.join(root, 'packages', 'flax_engine_$engine', 'native', 'generated'),
      ),
      Directory(
        p.join(
          temporary.path,
          'packages',
          'flax_engine_$engine',
          'native',
          'generated',
        ),
      ),
    );
    await run('flutter', ['pub', 'get'], directory: temporary.path);
    for (final package in selected) {
      final directory = p.join(
        targetPackages.path,
        p.basename(package.directory.path),
      );
      await run('flutter', [
        'test',
        '--enable-vmservice',
        '--no-pub',
        '--reporter',
        'expanded',
        'test/ui',
      ], directory: directory);
    }
  } finally {
    temporary.deleteSync(recursive: true);
  }
}
