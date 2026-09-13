import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:yaml/yaml.dart';

import 'package_verification.dart';
import 'package_discovery.dart';
import 'process.dart';

void _copyExampleTree(Directory source, Directory target) {
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
    }.contains(name)) {
      continue;
    }
    final destination = p.join(target.path, name);
    if (entity is Directory) {
      _copyExampleTree(entity, Directory(destination));
    } else if (entity is File) {
      entity.copySync(destination);
    } else if (entity is Link) {
      Link(destination).createSync(entity.targetSync());
    }
  }
}

void _replaceEngineDependencies(
  Map<String, dynamic> dependencies,
  String engine,
) {
  final previous = dependencies.keys
      .where((name) => name.startsWith('flax_engine_'))
      .toList();
  for (final name in previous) {
    dependencies.remove(name);
  }
  dependencies['flax_engine_$engine'] = '0.0.0';
}

Set<String> _engineDependencies(Map<String, dynamic> pubspec) =>
    (pubspec['dependencies'] as Map).keys
        .cast<String>()
        .where((name) => name.startsWith('flax_engine_'))
        .map((name) => name.substring('flax_engine_'.length))
        .toSet();

/// Select the engine at each example's existing runtime factory boundary.
void selectExampleEngine(String root, String flutter, String engine) {
  final targetClass = engineFactoryClass(root, engine);
  final knownEngines = discoverEngineIds(root).toSet();
  for (final file
      in Directory(flutter)
          .listSync(recursive: true, followLinks: false)
          .whereType<File>()
          .where((file) => file.path.endsWith('.dart'))) {
    var source = file.readAsStringSync();
    final imports = RegExp(r"package:(flax_engine_([a-z0-9_]+))/[^']+")
        .allMatches(source)
        .where((match) => knownEngines.contains(match.group(2)))
        .toList();
    for (final match in imports) {
      final sourceEngine = match.group(2)!;
      source = source
          .replaceAll(match.group(1)!, 'flax_engine_$engine')
          .replaceAll(engineFactoryClass(root, sourceEngine), targetClass);
    }
    file.writeAsStringSync(source);
  }
  final manifest = File(
    p.join(
      root,
      'packages',
      'flax_engine_$engine',
      'native',
      'generated',
      'macos_arm64',
      'manifest.json',
    ),
  );
  final jit =
      manifest.existsSync() &&
      (jsonDecode(manifest.readAsStringSync()) as Map)['jit'] == true;
  if (jit) {
    for (final name in ['DebugProfile', 'Release']) {
      final entitlement = File('$flutter/macos/Runner/$name.entitlements');
      if (!entitlement.existsSync()) continue;
      final text = entitlement.readAsStringSync();
      if (!text.contains('com.apple.security.cs.allow-jit')) {
        entitlement.writeAsStringSync(
          text.replaceFirst(
            '<dict>',
            '<dict>\n\t<key>com.apple.security.cs.allow-jit</key>\n\t<true/>',
          ),
        );
      }
    }
  }
}

Future<void> withExample(
  String root,
  String engine,
  String kind,
  Future<void> Function(String flutter) action,
) async {
  final sourcePubspec = readYamlFile(
    File(p.join(root, 'examples', kind, 'pubspec.yaml')),
  );
  final sourceEngines = _engineDependencies(sourcePubspec);
  if (sourceEngines.length == 1 && sourceEngines.single == engine) {
    await action('$root/examples/$kind');
    return;
  }
  final temporary = Directory.systemTemp.createTempSync('flax-$engine-$kind-');
  try {
    final known = {for (final package in discoverPackages(root)) package.name};
    final selected = (sourcePubspec['dependencies'] as Map).keys
        .cast<String>()
        .where(known.contains)
        .toSet();
    selected.removeWhere((name) => name.startsWith('flax_engine_'));
    selected.add('flax_engine_$engine');
    final packages = selected.toList()..sort();
    copyDartPackages(
      Directory(root),
      Directory('${temporary.path}/packages'),
      packages,
    );
    final sources = await Process.run('git', [
      'ls-files',
      '--cached',
      '--others',
      '--exclude-standard',
      '-z',
      'examples/$kind',
    ], workingDirectory: root);
    if (sources.exitCode != 0) {
      throw StateError('Cannot enumerate example sources');
    }
    for (final path
        in (sources.stdout as String)
            .split('\u0000')
            .where((s) => s.isNotEmpty)
            .toSet()) {
      final source = File('$root/$path');
      if (!source.existsSync()) continue;
      final target = File('${temporary.path}/$path');
      target.parent.createSync(recursive: true);
      source.copySync(target.path);
    }
    final flutter = '${temporary.path}/examples/$kind';
    copyTree(
      Directory('$root/examples/$kind/assets'),
      Directory('$flutter/assets'),
    );
    rewriteDartDirectiveUris(Directory(flutter), Directory(root), temporary);
    final manifest = File('$flutter/pubspec.yaml');
    final pubspec = jsonDecode(
      jsonEncode(loadYaml(manifest.readAsStringSync())),
    ) as Map<String, dynamic>;
    pubspec.remove('resolution');
    final dependencies = pubspec['dependencies'] as Map<String, dynamic>;
    _replaceEngineDependencies(dependencies, engine);
    for (final name in packages) {
      dependencies[name] = {
        'path': p.relative('${temporary.path}/packages/$name', from: flutter),
      };
    }
    manifest.writeAsStringSync(jsonEncode(pubspec));
    selectExampleEngine(root, flutter, engine);
    await run('flutter', ['pub', 'get'], directory: flutter);
    await action(flutter);
  } finally {
    temporary.deleteSync(recursive: true);
  }
}

Future<void> withPackageExample(
  String root,
  FlaxWorkspacePackage package,
  String engine,
  Future<void> Function(String flutter) action,
) async {
  final sourcePubspec = readYamlFile(
    File(p.join(package.example.path, 'pubspec.yaml')),
  );
  final sourceEngines = _engineDependencies(sourcePubspec);
  if (sourceEngines.length == 1 && sourceEngines.single == engine) {
    await action(package.example.path);
    return;
  }
  final temporary = Directory.systemTemp.createTempSync(
    'flax-$engine-${package.name}-example-',
  );
  try {
    final known = {for (final item in discoverPackages(root)) item.name};
    final direct = (sourcePubspec['dependencies'] as Map).keys
        .cast<String>()
        .where(known.contains)
        .toSet();
    direct.removeWhere((name) => name.startsWith('flax_engine_'));
    direct.add('flax_engine_$engine');
    final packages = packageDependencyClosure(
      root,
      direct,
      replaceEngineWith: engine,
    ).toList()..sort();
    copyDartPackages(
      Directory(root),
      Directory(p.join(temporary.path, 'packages')),
      packages,
    );
    final flutter = Directory(p.join(temporary.path, 'example'));
    _copyExampleTree(package.example, flutter);
    final manifest = File(p.join(flutter.path, 'pubspec.yaml'));
    final pubspec = readYamlFile(manifest)..remove('resolution');
    final dependencies = pubspec['dependencies'] as Map<String, dynamic>;
    _replaceEngineDependencies(dependencies, engine);
    for (final name in packages) {
      if (dependencies.containsKey(name) || name == 'flax_engine_$engine') {
        dependencies[name] = {
          'path': p.relative(
            p.join(temporary.path, 'packages', name),
            from: flutter.path,
          ),
        };
      }
    }
    manifest.writeAsStringSync(jsonEncode(pubspec));
    selectExampleEngine(root, flutter.path, engine);
    await run('flutter', ['pub', 'get'], directory: flutter.path);
    await action(flutter.path);
  } finally {
    temporary.deleteSync(recursive: true);
  }
}
