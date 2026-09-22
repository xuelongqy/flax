part of '../../bindings.dart';

/// Preloaded, immutable script bytes. Safe to reuse across independent sessions.
/// Create these before constructing a session; no JS or Dart references are cached.
class FlaxModuleAssets {
  FlaxModuleAssets._(this._bootstrap, this._bootstrapPath, this._modules);

  final String _bootstrap;
  final String _bootstrapPath;
  final List<_PreparedModule> _modules;

  List<String> get moduleSpecifiers =>
      List.unmodifiable(_modules.map((module) => module.specifier));

  /// Loads only the factory format emitted by @flax/tools, never arbitrary ESM.
  static Future<FlaxModuleAssets> load({
    required AssetBundle bundle,
    required String manifest,
  }) async {
    final data = _moduleObject(
      jsonDecode(await bundle.loadString(manifest)),
      const {'formatVersion', 'runtimeFormat', 'bootstrap', 'lock', 'modules'},
      'manifest',
    );
    if (data['formatVersion'] != 1 || data['runtimeFormat'] != 'flax-cjs-1') {
      throw FormatException('Unsupported Flax module manifest');
    }
    final bootstrapPath = _moduleAssetPath(data['bootstrap']);
    final lock = _moduleObject(data['lock'], const {
      'manager',
      'digest',
    }, 'lock');
    if (!const {'npm', 'pnpm'}.contains(lock['manager']) ||
        !_moduleDigest.hasMatch(_moduleString(lock['digest'], 'lock digest'))) {
      throw FormatException('Invalid Flax module lock receipt');
    }
    final modules = <_PreparedModule>[];
    final names = <String>{};
    final owners = <String>{};
    final paths = <String>{bootstrapPath};
    for (final value in _moduleList(data['modules'], 'modules')) {
      final module = _PreparedModule.parse(value);
      if (!names.add(module.specifier)) {
        throw FormatException('Duplicate Flax module: ${module.specifier}');
      }
      if (!owners.add(module.owner)) {
        throw FormatException('Duplicate Flax module owner: ${module.owner}');
      }
      if (!paths.add(module.asset)) {
        throw FormatException('Duplicate Flax module asset: ${module.asset}');
      }
      modules.add(module);
    }
    final versions = {
      for (final module in modules) module.specifier: module.version,
    };
    for (final module in modules) {
      for (final dependency in module.dependencies.entries) {
        if (versions[dependency.key] != dependency.value) {
          throw FormatException(
            'Missing or incompatible Flax module: ${dependency.key}',
          );
        }
      }
    }
    final sources = await Future.wait([
      bundle.loadString(bootstrapPath),
      for (final module in modules) bundle.loadString(module.asset),
    ]);
    return FlaxModuleAssets._(
      sources.first,
      bootstrapPath,
      List.unmodifiable([
        for (var index = 0; index < modules.length; index++)
          modules[index].withSource(sources[index + 1]),
      ]),
    );
  }

  List<_PreparedModule> _select(Set<String> requested) {
    if (requested.isEmpty) return const [];
    final available = {for (final module in _modules) module.specifier: module};
    final selected = <String>{};

    void include(String specifier) {
      final module = available[specifier];
      if (module == null || !selected.add(specifier)) return;
      for (final dependency in module.dependencies.keys) {
        include(dependency);
      }
    }

    for (final specifier in requested) {
      include(specifier);
    }
    return List.unmodifiable([
      for (final module in _modules)
        if (selected.contains(module.specifier)) module,
    ]);
  }
}

extension _SessionModules on _Session {
  void installModules(FlaxModuleAssets? assets, List<FlaxPlugin> plugins) {
    if (assets == null) return;
    final requested = <String>{
      for (final plugin in _pluginsWithBase(plugins)) ...plugin.jsModules,
    };
    final selected = assets._select(requested);
    if (selected.isEmpty) return;

    _validateModuleBindings(selected, registry.modules);
    claimGlobal('__flaxModules');
    final context = _HostContext(this, const {'__flaxModules'});
    final installation = _ModuleInstallation(context);
    try {
      installation.install(assets, selected);
      _moduleInstallation = installation;
    } catch (_) {
      installation.dispose();
      context.retired = true;
      rethrow;
    }
  }

  void closeModules() => _moduleInstallation?.close();

  void disposeModules() {
    final installation = _moduleInstallation;
    _moduleInstallation = null;
    if (installation == null) return;
    try {
      installation.dispose();
    } catch (error, stack) {
      report(error, stack);
    } finally {
      installation.context.retired = true;
    }
  }
}

void _validateModuleBindings(
  List<_PreparedModule> modules,
  List<FlaxBindingModule> bindings,
) {
  final installed = {for (final binding in bindings) binding.moduleId: binding};
  for (final module in modules) {
    for (final required in module.bindings) {
      final binding = installed[required.moduleId];
      if (binding == null || binding.uiProtocol != required.protocol) {
        throw StateError(
          'Missing or incompatible Dart bindings for ${module.specifier}: '
          '${required.moduleId}',
        );
      }
      final types = binding.types.map((value) => value.id).toSet();
      final functions = binding.functions.map((value) => value.id).toSet();
      final missingTypes = [
        for (final type in required.types)
          if (!types.contains(type)) type,
      ];
      final missingFunctions = [
        for (final function in required.functions)
          if (!functions.contains(function)) function,
      ];
      if (missingTypes.isNotEmpty || missingFunctions.isNotEmpty) {
        throw StateError(
          'Incomplete Dart bindings for ${module.specifier}: '
          'missing types ${missingTypes.toList()..sort()}, '
          'missing functions ${missingFunctions.toList()..sort()}',
        );
      }
    }
  }
}

class _ModuleInstallation {
  _ModuleInstallation(this.context);
  final _HostContext context;
  FlaxJsObject? _registry;
  bool _closed = false;

  void install(FlaxModuleAssets assets, List<_PreparedModule> modules) {
    final result = context.evaluate(
      assets._bootstrap,
      sourceUrl: assets._bootstrapPath,
    );
    if (result is! FlaxJsObject) {
      throw StateError('Invalid prepared Flax module registry');
    }
    try {
      final format = result.getProperty('format');
      try {
        if (format is! FlaxJsString || format.value != 'flax-cjs-1') {
          throw StateError('Incompatible prepared Flax module registry');
        }
      } finally {
        _releaseJs(format);
      }
      for (final name in ['define', 'seal', 'require', 'close', 'dispose']) {
        final method = result.getProperty(name);
        try {
          if (method is! FlaxJsFunction) {
            throw StateError('Invalid Flax module registry method: $name');
          }
        } finally {
          _releaseJs(method);
        }
      }
    } catch (_) {
      // Invalid bootstrap values have no usable cleanup contract.
      result.release();
      rethrow;
    }
    _registry = result;
    for (final module in modules) {
      _releaseJs(context.evaluate(module.source, sourceUrl: module.asset));
    }
    final expected = jsonEncode([
      for (final module in modules) module.expectation,
    ]);
    _releaseJs(
      context.evaluate(
        'globalThis.__flaxModules.seal($expected)',
        sourceUrl: 'flax:module-inventory',
      ),
    );
  }

  void _call(String name) {
    final registry = _registry;
    if (registry == null) return;
    final method = registry.getProperty(name);
    try {
      if (method is! FlaxJsFunction) {
        throw StateError('Invalid Flax module registry method: $name');
      }
      _releaseJs(method.call(const [], thisValue: registry));
    } finally {
      _releaseJs(method);
    }
  }

  void close() {
    if (_closed) return;
    _closed = true;
    context.enqueue(() => _call('close'));
  }

  void dispose() {
    _closed = true;
    try {
      _call('dispose');
    } finally {
      _registry?.release();
      _registry = null;
    }
  }
}

class _RequiredModuleBindings {
  _RequiredModuleBindings(
    this.moduleId,
    this.protocol,
    this.types,
    this.functions,
  );
  final String moduleId;
  final int protocol;
  final List<String> types;
  final List<String> functions;

  factory _RequiredModuleBindings.parse(Object? value) {
    final data = _moduleObject(value, const {
      'moduleId',
      'uiProtocol',
      'types',
      'functions',
    }, 'required Dart bindings');
    if (data['uiProtocol'] != flaxBindingVersion) {
      throw FormatException('Unsupported Flax module binding protocol');
    }
    return _RequiredModuleBindings(
      _moduleString(data['moduleId'], 'moduleId'),
      flaxBindingVersion,
      _moduleStrings(data['types'], 'types'),
      _moduleStrings(data['functions'], 'functions'),
    );
  }
}

class _PreparedModule {
  _PreparedModule({
    required this.specifier,
    required this.owner,
    required this.version,
    required this.artifact,
    required this.asset,
    required this.dependencies,
    required this.bindings,
    this.source = '',
  });

  final String specifier;
  final String owner;
  final String version;
  final String artifact;
  final String asset;
  final Map<String, String> dependencies;
  final List<_RequiredModuleBindings> bindings;
  final String source;

  Map<String, Object> get expectation => {
    'specifier': specifier,
    'owner': owner,
    'version': version,
    'artifact': artifact,
    'dependencies': dependencies,
  };

  _PreparedModule withSource(String value) => _PreparedModule(
    specifier: specifier,
    owner: owner,
    version: version,
    artifact: artifact,
    asset: asset,
    dependencies: dependencies,
    bindings: bindings,
    source: value,
  );

  factory _PreparedModule.parse(Object? value) {
    final data = _moduleObject(value, const {
      'specifier',
      'owner',
      'version',
      'artifact',
      'asset',
      'package',
      'source',
      'dependencies',
      'bindings',
    }, 'module');
    final name = _moduleSpecifier(data['specifier']);
    final package = _moduleSpecifier(data['package']);
    final packageRoot = package.startsWith('@')
        ? package.split('/').take(2).join('/')
        : package.split('/').first;
    if (package != packageRoot) {
      throw FormatException('Invalid Flax module package: $package');
    }
    _moduleAssetPath(data['source']);
    final artifact = _moduleString(data['artifact'], 'artifact');
    if (!_moduleDigest.hasMatch(artifact)) {
      throw FormatException('Invalid Flax module artifact: $name');
    }
    final deps = data['dependencies'];
    if (deps is! Map<String, dynamic>) {
      throw FormatException('Invalid Flax module dependencies: $name');
    }
    return _PreparedModule(
      specifier: name,
      owner: _moduleString(data['owner'], 'owner'),
      version: _moduleVersion(data['version']),
      artifact: artifact,
      asset: _moduleAssetPath(data['asset']),
      dependencies: Map.unmodifiable({
        for (final entry in deps.entries)
          _moduleSpecifier(entry.key): _moduleVersion(entry.value),
      }),
      bindings: List.unmodifiable(
        _moduleList(
          data['bindings'],
          'bindings',
        ).map(_RequiredModuleBindings.parse),
      ),
    );
  }
}

final _moduleDigest = RegExp(r'^[a-f0-9]{64}$');
final _moduleVersionPattern = RegExp(
  r'^\d+\.\d+\.\d+(?:-[\w.-]+)?(?:\+[\w.-]+)?$',
);
final _moduleSpecifierPattern = RegExp(
  r'^(?:@[a-z0-9][a-z0-9._-]*/)?[a-z0-9][a-z0-9._-]*(?:/[a-zA-Z0-9_$.-]+)*$',
);

Map<String, dynamic> _moduleObject(
  Object? value,
  Set<String> keys,
  String label,
) {
  if (value is! Map<String, dynamic> ||
      value.length != keys.length ||
      !keys.containsAll(value.keys)) {
    throw FormatException('Invalid fields in Flax module $label');
  }
  return value;
}

String _moduleString(Object? value, String label) {
  if (value is! String || value.isEmpty) {
    throw FormatException('Invalid Flax module $label');
  }
  return value;
}

String _moduleVersion(Object? value) {
  final result = _moduleString(value, 'version');
  if (!_moduleVersionPattern.hasMatch(result)) {
    throw FormatException('Expected exact Flax module version');
  }
  return result;
}

String _moduleSpecifier(Object? value) {
  final result = _moduleString(value, 'specifier');
  if (!_moduleSpecifierPattern.hasMatch(result) ||
      result.split('/').any((part) => part == '.' || part == '..')) {
    throw FormatException('Invalid Flax module specifier: $result');
  }
  return result;
}

String _moduleAssetPath(Object? value) {
  final result = _moduleString(value, 'asset path');
  if (result.contains('\\') ||
      result.contains(':') ||
      result
          .split('/')
          .any((part) => part.isEmpty || part == '.' || part == '..')) {
    throw FormatException('Invalid relative Flax module asset: $result');
  }
  return result;
}

List<dynamic> _moduleList(Object? value, String label) {
  if (value is! List) throw FormatException('Invalid Flax module $label');
  return value;
}

List<String> _moduleStrings(Object? value, String label) {
  final values = _moduleList(
    value,
    label,
  ).map((item) => _moduleString(item, label)).toList();
  if (values.toSet().length != values.length) {
    throw FormatException('Duplicate Flax module $label');
  }
  return List.unmodifiable(values);
}
