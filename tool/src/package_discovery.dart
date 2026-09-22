import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:yaml/yaml.dart';

import 'package_metadata_strict.dart';

export 'package_metadata_strict.dart'
    show FlaxPackageMetadataDiagnostic, FlaxPackageMetadataException;

final class FlaxWorkspacePackage {
  const FlaxWorkspacePackage(this.name, this.directory);

  final String name;
  final Directory directory;

  Directory get js => Directory(p.join(directory.path, 'js'));
  Directory get example => Directory(p.join(directory.path, 'example'));
  Directory get bindings => Directory(p.join(directory.path, 'bindings'));
  Directory get uiTests => Directory(p.join(directory.path, 'test', 'ui'));

  Map<String, dynamic> get pubspec =>
      readYamlFile(File(p.join(directory.path, 'pubspec.yaml')));

  FlaxPackageMetadata get metadata => readFlaxPackageMetadata(
    File(p.join(directory.path, 'flax_package.yaml')),
    pubspec: pubspec,
    npmManifest: _npmManifest,
    strict: true,
  );

  Map<String, dynamic>? get _npmManifest {
    final file = File(p.join(js.path, 'package.json'));
    if (!file.existsSync()) return null;
    return (jsonDecode(file.readAsStringSync()) as Map).cast<String, dynamic>();
  }

  bool get usesFlutter => _usesFlutter(pubspec);

  /// Template containers and plain Dart examples are not Flutter projects.
  bool get hasFlutterExample {
    final manifest = File(p.join(example.path, 'pubspec.yaml'));
    if (!manifest.existsSync()) return false;
    final dependencies = readYamlFile(manifest)['dependencies'];
    if (dependencies is! Map) return false;
    final flutter = dependencies['flutter'];
    return flutter is Map && flutter['sdk'] == 'flutter';
  }
}

final class FlaxNpmPackage {
  const FlaxNpmPackage({
    required this.name,
    required this.directory,
    required this.mode,
    this.dartOwner,
  });

  final String name;
  final Directory directory;
  final String mode;
  final FlaxWorkspacePackage? dartOwner;

  bool get isTypeOnly => dartOwner == null;

  String get archiveDirectoryName =>
      dartOwner?.name ?? p.basename(p.dirname(directory.path));

  Map<String, dynamic> get manifest => (jsonDecode(
    File(p.join(directory.path, 'package.json')).readAsStringSync(),
  ) as Map).cast<String, dynamic>();

  String get version => manifest['version'] as String;
}

const _standaloneNpmDeliverables = {
  'flax_dart': 'declarations',
  'flax_flutter': 'declarations',
};

const _packageCapabilities = {
  'core',
  'bindings',
  'host-plugin',
  'engine',
  'codegen',
  'test-support',
};

final class FlaxJavascriptPackageMetadata {
  const FlaxJavascriptPackageMetadata({required this.name, required this.mode});

  final String name;
  final String mode;
}

final class FlaxPackageRegistration {
  const FlaxPackageRegistration({
    required this.bindings,
    required this.plugins,
  });

  final List<String> bindings;
  final List<String> plugins;
}

final class FlaxPackageMetadata {
  const FlaxPackageMetadata({
    required this.format,
    required this.dartEntrypoint,
    required this.javascript,
    required this.capabilities,
    required this.registration,
    this.bindingNamespace,
  });

  final int format;
  final String dartEntrypoint;
  final FlaxJavascriptPackageMetadata? javascript;
  final Set<String> capabilities;
  final FlaxPackageRegistration registration;
  final String? bindingNamespace;
}

FlaxPackageMetadata readFlaxPackageMetadata(
  File file, {
  required Map<String, dynamic> pubspec,
  Map<String, dynamic>? npmManifest,
  bool strict = false,
}) {
  if (!file.existsSync()) {
    throw StateError('Missing package metadata: ${file.path}');
  }
  if (strict) {
    validateFlaxPackageMetadataProjection(
      file.readAsStringSync(),
      source: file.path,
    );
  }
  final data = readYamlFile(file);
  _expectKeys(data, {
    'format',
    'dart',
    'javascript',
    'capabilities',
    'registration',
    'bindingNamespace',
  }, file.path);
  if (data['format'] != 1) {
    throw FormatException('Unsupported package metadata format', file.path);
  }
  final dart = _stringMap(data['dart'], 'dart', file.path);
  _expectKeys(dart, const {'entrypoint'}, 'dart in ${file.path}');
  final entrypoint = _string(dart['entrypoint'], 'dart.entrypoint', file.path);
  final dartName = _string(pubspec['name'], 'pubspec name', file.path);
  if (!entrypoint.startsWith('package:$dartName/') ||
      !entrypoint.endsWith('.dart')) {
    throw FormatException(
      'dart.entrypoint must belong to $dartName',
      file.path,
    );
  }

  FlaxJavascriptPackageMetadata? javascript;
  final js = data['javascript'];
  if (js != null) {
    final fields = _stringMap(js, 'javascript', file.path);
    _expectKeys(fields, const {
      'package',
      'version',
      'mode',
    }, 'javascript in ${file.path}');
    final name = _string(fields['package'], 'javascript.package', file.path);
    if (fields['version'] != 'same') {
      throw FormatException('javascript.version must be same', file.path);
    }
    final mode = _string(fields['mode'], 'javascript.mode', file.path);
    if (!const {'runtime', 'declarations'}.contains(mode)) {
      throw FormatException('Invalid javascript.mode: $mode', file.path);
    }
    if (npmManifest == null) {
      throw FormatException('Missing npm package for $name', file.path);
    }
    if (npmManifest['name'] != name) {
      throw FormatException(
        'npm package mismatch: ${npmManifest['name']} != $name',
        file.path,
      );
    }
    if (npmManifest['version'].toString() != pubspec['version'].toString()) {
      throw FormatException(
        'Dart/npm version mismatch for $dartName: '
        '${pubspec['version']} != ${npmManifest['version']}',
        file.path,
      );
    }
    javascript = FlaxJavascriptPackageMetadata(name: name, mode: mode);
  } else if (npmManifest != null) {
    throw FormatException(
      'javascript metadata is required for ${npmManifest['name']}',
      file.path,
    );
  }

  final capabilities = _strings(
    data['capabilities'],
    'capabilities',
    file.path,
  );
  _requireUnique(capabilities, 'capabilities', file.path);
  for (final capability in capabilities) {
    if (!_packageCapabilities.contains(capability)) {
      throw FormatException('Unknown capability: $capability', file.path);
    }
  }

  var bindings = const <String>[];
  var plugins = const <String>[];
  if (data['registration'] != null) {
    final fields = _stringMap(data['registration'], 'registration', file.path);
    _expectKeys(fields, const {
      'bindings',
      'plugins',
    }, 'registration in ${file.path}');
    if (fields['bindings'] != null) {
      bindings = _strings(
        fields['bindings'],
        'registration.bindings',
        file.path,
      );
      _requireUnique(bindings, 'registration.bindings', file.path);
    }
    if (fields['plugins'] != null) {
      plugins = _strings(fields['plugins'], 'registration.plugins', file.path);
      _requireUnique(plugins, 'registration.plugins', file.path);
    }
  }
  if (capabilities.contains('host-plugin') && plugins.isEmpty) {
    throw FormatException(
      'host-plugin packages must declare registration.plugins',
      file.path,
    );
  }
  if (!capabilities.contains('host-plugin') && plugins.isNotEmpty) {
    throw FormatException(
      'registration.plugins requires the host-plugin capability',
      file.path,
    );
  }
  if (!capabilities.contains('bindings') && bindings.isNotEmpty) {
    throw FormatException(
      'registration.bindings requires the bindings capability',
      file.path,
    );
  }

  String? bindingNamespace;
  if (data.containsKey('bindingNamespace')) {
    bindingNamespace = data['bindingNamespace'] as String;
  }

  return FlaxPackageMetadata(
    format: 1,
    dartEntrypoint: entrypoint,
    javascript: javascript,
    capabilities: Set.unmodifiable(capabilities),
    registration: FlaxPackageRegistration(
      bindings: List.unmodifiable(bindings),
      plugins: List.unmodifiable(plugins),
    ),
    bindingNamespace: bindingNamespace,
  );
}

Map<String, dynamic> _stringMap(Object? value, String name, String source) {
  if (value is! Map) throw FormatException('$name must be a map', source);
  return value.cast<String, dynamic>();
}

String _string(Object? value, String name, String source) {
  if (value is! String || value.isEmpty) {
    throw FormatException('$name must be a non-empty string', source);
  }
  return value;
}

List<String> _strings(Object? value, String name, String source) {
  if (value is! List || value.any((item) => item is! String || item.isEmpty)) {
    throw FormatException('$name must be a string list', source);
  }
  return value.cast<String>();
}

void _expectKeys(Map<String, dynamic> value, Set<String> keys, String source) {
  final unknown = value.keys.where((key) => !keys.contains(key)).toList();
  if (unknown.isNotEmpty) {
    throw FormatException('Unknown fields: ${unknown.join(', ')}', source);
  }
}

void _requireUnique(List<String> values, String name, String source) {
  if (values.toSet().length != values.length) {
    throw FormatException('$name contains duplicates', source);
  }
}

bool _usesFlutter(Map<String, dynamic> pubspec) {
  if (pubspec['environment'] case final Map<Object?, Object?> environment
      when environment.containsKey('flutter')) {
    return true;
  }
  final dependencies = pubspec['dependencies'];
  if (dependencies is Map && dependencies['flutter'] is Map) {
    final flutter = dependencies['flutter'] as Map;
    if (flutter['sdk'] == 'flutter') return true;
  }
  return false;
}

Map<String, dynamic> readYamlFile(File file) =>
    (jsonDecode(jsonEncode(loadYaml(file.readAsStringSync()))) as Map)
        .cast<String, dynamic>();

List<FlaxWorkspacePackage> discoverPackages(String root) {
  final packages = <FlaxWorkspacePackage>[];
  for (final entity in Directory(p.join(root, 'packages')).listSync()) {
    if (entity is! Directory) continue;
    final pubspec = File(p.join(entity.path, 'pubspec.yaml'));
    if (!pubspec.existsSync()) continue;
    final package = FlaxWorkspacePackage(
      readYamlFile(pubspec)['name'] as String,
      entity,
    );
    package.metadata;
    packages.add(package);
  }
  packages.sort((left, right) => left.name.compareTo(right.name));
  return packages;
}

List<FlaxNpmPackage> discoverNpmPackages(String root) {
  final result = <FlaxNpmPackage>[];
  final names = <String>{};
  for (final package in discoverPackages(root)) {
    final javascript = package.metadata.javascript;
    if (javascript == null) continue;
    if (!names.add(javascript.name)) {
      throw StateError('Duplicate npm package: ${javascript.name}');
    }
    result.add(
      FlaxNpmPackage(
        name: javascript.name,
        directory: package.js,
        mode: javascript.mode,
        dartOwner: package,
      ),
    );
  }
  for (final entry in _standaloneNpmDeliverables.entries) {
    final directory = Directory(p.join(root, 'packages', entry.key, 'js'));
    final manifest = File(p.join(directory.path, 'package.json'));
    if (!manifest.existsSync()) {
      throw StateError('Missing standalone npm package: ${manifest.path}');
    }
    final data = (jsonDecode(manifest.readAsStringSync()) as Map)
        .cast<String, dynamic>();
    final name = data['name'];
    if (name is! String || name.isEmpty) {
      throw StateError('Invalid npm package name: ${manifest.path}');
    }
    if (!names.add(name)) throw StateError('Duplicate npm package: $name');
    result.add(
      FlaxNpmPackage(name: name, directory: directory, mode: entry.value),
    );
  }
  result.sort((left, right) => left.name.compareTo(right.name));
  return result;
}

FlaxWorkspacePackage findPackage(String root, String name) =>
    discoverPackages(root).singleWhere(
      (package) => package.name == name,
      orElse: () => throw StateError('Unknown package: $name'),
    );

List<String> discoverEngineIds(String root) => discoverPackages(root)
    .where(
      (package) =>
          package.metadata.capabilities.contains('engine') &&
          package.name.startsWith('flax_engine_') &&
          File(p.join(package.directory.path, 'tool', 'native.dart'))
              .existsSync(),
    )
    .map((package) => package.name.substring('flax_engine_'.length))
    .toList();

String engineFactoryClass(String root, String engine) {
  final source = File(
    p.join(
      root,
      'packages',
      'flax_engine_$engine',
      'lib',
      'flax_engine_$engine.dart',
    ),
  ).readAsStringSync();
  final match = RegExp(r'class (Flax[A-Za-z0-9]+Engine)').firstMatch(source);
  if (match == null) {
    throw StateError('Cannot find the public factory for flax_engine_$engine');
  }
  return match.group(1)!;
}

Map<String, dynamic> engineManifest(String root, String engine) {
  final file = File(
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
  if (!file.existsSync()) {
    throw StateError('Prepared assets are missing for flax_engine_$engine');
  }
  return (jsonDecode(file.readAsStringSync()) as Map).cast<String, dynamic>();
}

String engineEntrySymbol(String root, String engine) {
  final symbol = engineManifest(root, engine)['entrySymbol'];
  if (symbol is! String || symbol.isEmpty) {
    throw StateError('Engine $engine has no native entry symbol');
  }
  return symbol;
}

bool engineUsesJit(String root, String engine) =>
    engineManifest(root, engine)['jit'] == true;

({String environment, String marker})? engineJitVerification(
  String root,
  String engine,
) {
  final manifest = engineManifest(root, engine);
  if (manifest['jit'] != true) return null;
  final verification = manifest['jitVerification'];
  if (verification is! Map ||
      verification['environment'] is! String ||
      verification['marker'] is! String) {
    throw StateError('JIT engine $engine has no verification metadata');
  }
  return (
    environment: verification['environment'] as String,
    marker: verification['marker'] as String,
  );
}

List<String> bindingConfigs(FlaxWorkspacePackage package) {
  if (!package.bindings.existsSync()) return const [];
  final configs =
      package.bindings
          .listSync()
          .whereType<File>()
          .where(
            (file) => file.path.endsWith('.yaml') || file.path.endsWith('.yml'),
          )
          .map((file) => file.path)
          .toList()
        ..sort();
  return configs;
}

Set<String> packageDependencyClosure(
  String root,
  Iterable<String> roots, {
  String? replaceEngineWith,
}) {
  final packages = {
    for (final package in discoverPackages(root)) package.name: package,
  };
  final pending = roots.toList();
  final result = <String>{};
  while (pending.isNotEmpty) {
    var name = pending.removeLast();
    if (replaceEngineWith != null && name.startsWith('flax_engine_')) {
      name = 'flax_engine_$replaceEngineWith';
    }
    final package = packages[name];
    if (package == null || !result.add(name)) continue;
    for (final section in ['dependencies', 'dev_dependencies']) {
      final dependencies = package.pubspec[section];
      if (dependencies is! Map) continue;
      pending.addAll(
        dependencies.keys.cast<String>().where(packages.containsKey),
      );
    }
  }
  return result;
}
