import 'dart:convert';
import 'dart:io';
import 'dart:isolate';

import 'package:glob/glob.dart';
import 'package:path/path.dart' as p;
import 'package:yaml/yaml.dart';
import 'package:yaml_edit/yaml_edit.dart';

import 'package:flax_codegen/flax_codegen.dart';

/// Creates missing host setup files and preserves existing project code and settings.
Future<List<String>> flaxInitializeProject(String packageRoot) async {
  final root = p.absolute(packageRoot);
  final pubspecFile = File(p.join(root, 'pubspec.yaml'));
  final pubspec = _editor(pubspecFile);
  final name = _value(pubspec, ['name']);
  if (name is! String || !RegExp(r'^[a-z][a-z0-9_]*$').hasMatch(name)) {
    throw const FormatException('Run init from a named Flutter package.');
  }
  if (_value(pubspec, ['dependencies', 'flutter', 'sdk']) != 'flutter') {
    throw const FormatException(
      'Flax host init requires a Flutter SDK dependency.',
    );
  }
  final source = await Isolate.resolvePackageUri(
    Uri.parse('package:flax_codegen/flax_codegen.dart'),
  );
  final tool = loadYaml(
    File(
      p.join(p.dirname(p.dirname(File.fromUri(source!).path)), 'pubspec.yaml'),
    ).readAsStringSync(),
  ) as Map;
  final version = tool['version'] as String;
  for (final dependency in ['flax', 'flax_annotations']) {
    if (!_has(pubspec, ['dev_dependencies', dependency])) {
      _missing(pubspec, ['dependencies', dependency], version);
    }
  }
  if (!_has(pubspec, ['dependencies', 'flax_codegen'])) {
    _missing(pubspec, ['dev_dependencies', 'flax_codegen'], version);
  }
  if (!_has(pubspec, ['dependencies', 'build_runner'])) {
    _missing(pubspec, [
      'dev_dependencies',
      'build_runner',
    ], (tool['dev_dependencies'] as Map)['build_runner']);
  }
  final assets = _value(pubspec, ['flutter', 'assets']) ?? [];
  if (assets is! List) {
    throw const FormatException('flutter.assets must be a list.');
  }
  _set(
    pubspec,
    ['flutter', 'assets'],
    [
      ...assets,
      for (final path in ['assets/flax_modules/', 'assets/flax/app/'])
        if (!assets.any(
          (entry) => entry == path || entry is Map && entry['path'] == path,
        ))
          path,
    ],
  );

  final metadataFile = File(p.join(root, 'flax_package.yaml'));
  final metadata = _editor(metadataFile);
  _missing(metadata, ['format'], 2);
  if (_value(metadata, ['format']) != 2) {
    throw const FormatException(
      'Flax init requires package metadata format 2.',
    );
  }
  final labels = name
      .split('_')
      .where((part) => part.isNotEmpty)
      .map((part) => RegExp(r'^[a-z]').hasMatch(part) ? part : 'p$part');
  final namespace = _has(metadata, ['bindingNamespace'])
      ? _value(metadata, ['bindingNamespace'])
      : 'app.${labels.join('.')}';
  if (namespace is! String) {
    throw const FormatException('bindingNamespace must be a stable string.');
  }
  FlaxCodegenBindingNamespace.parse(namespace);
  _missing(metadata, ['bindingNamespace'], namespace);
  final capabilities = _value(metadata, ['capabilities']) ?? [];
  if (capabilities is! List) {
    throw const FormatException('capabilities must be a list.');
  }
  if (!capabilities.contains('bindings')) {
    _set(metadata, ['capabilities'], [...capabilities, 'bindings']);
  }

  final npmFile = File(p.join(root, 'js/package.json'));
  final npm = npmFile.existsSync()
      ? jsonDecode(npmFile.readAsStringSync())
      : <String, dynamic>{};
  if (npm is! Map<String, dynamic>) {
    throw const FormatException('Expected npm package object.');
  }
  npm.putIfAbsent('name', () => '$name-js');
  npm.putIfAbsent('version', () => '0.0.0');
  npm.putIfAbsent('private', () => true);
  npm.putIfAbsent('type', () => 'module');
  for (final section in ['scripts', 'dependencies', 'devDependencies']) {
    npm.putIfAbsent(section, () => <String, dynamic>{});
    if (npm[section] is! Map) {
      throw FormatException('npm $section must be an object.');
    }
  }
  (npm['scripts'] as Map).putIfAbsent(
    'build',
    () => 'node build.mjs && tsc -p .',
  );
  bool declared(String name) =>
      [
        'dependencies',
        'devDependencies',
        'optionalDependencies',
        'peerDependencies',
      ].any(
        (section) =>
            npm[section] is Map && (npm[section] as Map).containsKey(name),
      );
  for (final dependency in [
    '@flax/core',
    '@flax/core-runtime',
    '@flax/flutter',
    '@flax/dart',
  ]) {
    if (!declared(dependency)) {
      (npm['dependencies'] as Map)[dependency] = version;
    }
  }
  for (final dependency in {
    '@flax/build': version,
    'esbuild': '0.28.2',
    'typescript': '7.0.2',
  }.entries) {
    if (!declared(dependency.key)) {
      (npm['devDependencies'] as Map)[dependency.key] = dependency.value;
    }
  }
  final buildFile = File(p.join(root, 'build.yaml'));
  final build = _builderConfiguration(root, _editor(buildFile));
  final writes = <File, String>{
    pubspecFile: pubspec.toString(),
    if (metadataFile.existsSync()) metadataFile: metadata.toString(),
    npmFile: '${const JsonEncoder.withIndent('  ').convert(npm)}\n',
    buildFile: build.toString(),
  };
  for (final template in {
    'js/tsconfig.json': _tsconfig,
    'js/build.mjs': _buildScript,
    'js/src/main.ts': _page,
  }.entries) {
    final file = File(p.join(root, template.key));
    if (!file.existsSync()) writes[file] = template.value;
  }
  final ignore = File(p.join(root, '.gitignore'));
  final ignored = ignore.existsSync() ? ignore.readAsStringSync() : '';
  writes[ignore] = [
    if (ignored.isNotEmpty) ignored.trimRight(),
    for (final path in [
      '/js/node_modules/',
      '/assets/flax_modules/',
      '/assets/flax/app/',
    ])
      if (!ignored.split('\n').contains(path)) path,
    '',
  ].join('\n');
  const directories = ['assets/flax_modules', 'assets/flax/app'];
  _validateDestinations(
    root,
    directories.map((path) => p.join(root, path)),
    directories: true,
  );
  final changed = _writeChanged(root, writes);
  for (final directory in directories) {
    Directory(p.join(root, directory)).createSync(recursive: true);
  }
  return changed;
}

/// Updates only legacy Flax Builder output declarations.
List<String> flaxSynchronizeLegacyProject(
  String packageRoot,
  List<String> inventory,
) {
  final root = p.absolute(packageRoot);
  final file = File(p.join(root, 'build.yaml'));
  final editor = _builderConfiguration(root, _editor(file));
  final outputs =
      inventory
          .where((path) => path.endsWith('.dart') || path.endsWith('.ts'))
          .toList()
        ..sort();
  final defaults = flaxCodegenDefaultOutputs.toList()..sort();
  const builder = ['targets', r'$default', 'builders', 'flax_codegen:bindings'];
  const global = ['global_options', 'flax_codegen:bindings'];
  for (final mode in ['dev_options', 'release_options']) {
    final modePath = [...global, mode, 'outputs'];
    const basePath = [...global, 'options', 'outputs'];
    if (!_has(editor, modePath) && !_has(editor, basePath)) continue;
    final path = _has(editor, modePath) ? modePath : basePath;
    final value = _value(editor, path) ?? flaxCodegenDefaultOutputs;
    List<String>? configured;
    if (value is List && value.every((entry) => entry is String)) {
      configured = value.cast<String>().toList()..sort();
    }
    if (configured?.join('\n') != outputs.join('\n')) {
      throw FormatException(
        'Global Flax outputs override the shared inventory in $mode. '
        'Remove or update ${path.join('.')}, then run dart run flax_cli:flax sync again.',
      );
    }
  }
  const path = [...builder, 'options', 'outputs'];
  if (outputs.join('\n') == defaults.join('\n')) {
    if (_has(editor, path)) editor.remove(path);
  } else {
    _set(editor, path, outputs);
  }
  for (final mode in ['dev_options', 'release_options']) {
    final path = [...builder, mode, 'outputs'];
    if (_has(editor, path)) _set(editor, path, outputs);
  }
  final writes = <File, String>{file: editor.toString()};

  return _writeChanged(root, writes);
}

YamlEditor _editor(File file) =>
    YamlEditor(file.existsSync() ? file.readAsStringSync() : '');

Object? _value(YamlEditor editor, List<String> path) =>
    editor.parseAt(path, orElse: () => wrapAsYamlNode(null)).value;

bool _has(YamlEditor editor, List<String> path) {
  final parent = _value(editor, path.take(path.length - 1).toList());
  return parent is Map && parent.containsKey(path.last);
}

void _set(YamlEditor editor, List<String> path, Object? value) {
  for (var index = 0; index < path.length; index++) {
    final parent = path.take(index).toList();
    final current = _value(editor, parent);
    if (current == null) {
      Object? nested = value;
      for (final key in path.skip(index).toList().reversed) {
        nested = {key: nested};
      }
      editor.update(parent, nested);
      return;
    } else if (current is! Map) {
      throw FormatException('Expected YAML mapping at ${parent.join('.')}.');
    }
  }
  editor.update(path, value);
}

void _missing(YamlEditor editor, List<String> path, Object? value) {
  if (!_has(editor, path)) _set(editor, path, value);
}

YamlEditor _builderConfiguration(String root, YamlEditor editor) {
  const target = ['targets', r'$default'];
  final targets = _value(editor, ['targets']);
  if (targets is Map &&
      targets.isNotEmpty &&
      !targets.containsKey(r'$default')) {
    throw const FormatException(
      'Flax setup requires a \$default target. Configure the Flax builder in '
      'your existing named target manually.',
    );
  }
  // Preserve the pinned build_runner's implicit root inputs when making them explicit.
  const defaults = [
    'assets/**',
    'benchmark/**',
    'bin/**',
    'CHANGELOG*',
    'example/**',
    'lib/**',
    'test/**',
    'integration_test/**',
    'tool/**',
    'web/**',
    'node/**',
    'LICENSE*',
    'pubspec.yaml',
    'pubspec.lock',
    'README*',
    r'$package$',
  ];
  const required = [
    r'$package$',
    'lib/**',
    'test/**',
    'integration_test/**',
    'assets/**',
    'pubspec.yaml',
    'flax_package.yaml',
    'bindings/*.yaml',
    'bindings/*.yml',
    'js/package.json',
    'js-types/package.json',
  ];
  final sources = _value(editor, [...target, 'sources']);
  if (sources != null && sources is! List && sources is! Map) {
    throw const FormatException(
      'Builder sources must be a list or include/exclude map.',
    );
  }
  final includes =
      (sources is Map ? sources['include'] : sources) ?? <String>[];
  final excludes = (sources is Map ? sources['exclude'] : null) ?? <String>[];
  if (includes is! List || excludes is! List) {
    throw const FormatException('Builder include/exclude must be lists.');
  }
  final bindings = Directory(p.join(root, 'bindings'));
  final inputs = [
    'pubspec.yaml',
    'flax_package.yaml',
    'js/package.json',
    if (File(p.join(root, 'js-types/package.json')).existsSync())
      'js-types/package.json',
    if (bindings.existsSync())
      for (final file
          in bindings.listSync(followLinks: false).whereType<File>())
        if (Glob('flax_*.{yaml,yml}').matches(p.basename(file.path)))
          p.relative(file.path, from: root).replaceAll(p.separator, '/'),
  ];
  for (final path in inputs) {
    if (excludes.any(
      (pattern) => pattern is String && Glob(pattern).matches(path),
    )) {
      throw FormatException(
        'Builder sources exclude required Flax input: $path',
      );
    }
  }
  final base = includes.isEmpty ? defaults : includes;
  _set(
    editor,
    [...target, 'sources', if (sources is Map) 'include'],
    [
      ...base,
      for (final source in required)
        if (!base.contains(source)) source,
    ],
  );
  _set(editor, [
    ...target,
    'builders',
    'flax_codegen:bindings',
    'enabled',
  ], true);
  return editor;
}

List<String> _writeChanged(String root, Map<File, String> writes) {
  // Validate every destination before changing any project file.
  _validateDestinations(root, writes.keys.map((file) => file.path));
  final changed = <String>[];
  for (final entry in writes.entries) {
    if (entry.key.existsSync() && entry.key.readAsStringSync() == entry.value) {
      continue;
    }
    entry.key.parent.createSync(recursive: true);
    entry.key.writeAsStringSync(entry.value);
    changed.add(p.relative(entry.key.path, from: root));
  }
  return changed;
}

void _validateDestinations(
  String root,
  Iterable<String> paths, {
  bool directories = false,
}) {
  for (final destination in paths) {
    for (
      var path = destination;
      p.isWithin(root, path);
      path = p.dirname(path)
    ) {
      final type = FileSystemEntity.typeSync(path, followLinks: false);
      if (type == FileSystemEntityType.link) {
        throw FileSystemException(
          'Refusing setup through a symbolic link',
          path,
        );
      }
      final expected = path == destination && !directories
          ? FileSystemEntityType.file
          : FileSystemEntityType.directory;
      if (type != FileSystemEntityType.notFound && type != expected) {
        throw FileSystemException('Expected a regular $expected', path);
      }
    }
  }
}

const _tsconfig = '''{
  "extends": "../bindings/js_modules.json",
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src/**/*.ts"]
}
''';

const _buildScript = '''import { build } from 'esbuild';
import { prepareModules } from '@flax/build';
import { prepareApplication } from '@flax/build/application';
import { flaxEsbuildPlugin } from '@flax/build/esbuild';

const { manifest } = await prepareModules();
const app = await prepareApplication({ outputDirectory: '../assets/flax/app' });
await build({
  entryPoints: ['src/main.ts'],
  outfile: app.entryPath,
  bundle: true,
  format: 'iife',
  target: 'es2019',
  plugins: [flaxEsbuildPlugin(manifest)],
});
''';

const _page = '''import { Text, runApp } from '@flax/flutter/widgets';
import { TextDirection } from '@flax/dart/ui';

runApp(Text('Hello Flax', { textDirection: TextDirection.ltr }));
''';
