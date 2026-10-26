part of '../../bindings.dart';

/// Preloaded scripts with reusable encoding, independent of any session.
/// Create these before constructing a session; no runtime references are cached.
class FlaxModuleAssets {
  FlaxModuleAssets._(this._bootstrap, this._modules);

  final FlaxJsSource _bootstrap;
  final List<_PreparedModule> _modules;
  final _validatedBindings = Expando<Set<_PreparedModule>>();

  List<String> get moduleSpecifiers =>
      List.unmodifiable(_modules.map((module) => module.specifier));

  /// Experimental identity-pinned handoff; these contain no runtime references.
  List<FlaxJsSource> get sourcesForExperiment => List.unmodifiable([
    _bootstrap,
    for (final module in _modules) module.source!,
  ]);

  FlaxJsSource get baseHostSourceForExperiment => _baseHostSource;

  /// Loads only the factory format emitted by @flax/build, never arbitrary ESM.
  static Future<FlaxModuleAssets> load({
    required AssetBundle bundle,
    required String manifest,
  }) async {
    final data = _moduleObject(
      jsonDecode(await bundle.loadString(manifest)),
      const {'formatVersion', 'runtimeFormat', 'bootstrap', 'lock', 'modules'},
      'manifest',
    );
    if (data['formatVersion'] != 2 || data['runtimeFormat'] != 'flax-cjs-1') {
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
      for (final name in [module.specifier, ...module.subpaths]) {
        if (!names.add(name)) {
          throw FormatException('Duplicate Flax module: $name');
        }
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
      bundle.loadString(bootstrapPath, cache: false),
      for (final module in modules)
        bundle.loadString(module.asset, cache: false),
    ]);
    return FlaxModuleAssets._(
      FlaxJsSource(sources.first, sourceUrl: bootstrapPath),
      List.unmodifiable([
        for (var index = 0; index < modules.length; index++)
          modules[index].withSource(sources[index + 1]),
      ]),
    );
  }

  List<_PreparedModule> _forSession(
    FlaxBindingRegistry registry,
    List<FlaxPlugin> plugins,
  ) {
    final requested = <String>{
      for (final plugin in _pluginsWithBase(plugins)) ...plugin.jsModules,
      for (final module in _modules)
        if (module.specifier == '@flax/core/assets' ||
            module.specifier.startsWith('@flax/flutter/') ||
            module.specifier.startsWith('@flax/dart/'))
          module.specifier,
    };
    final selected = _select(requested);
    if (selected.isEmpty) return const [];

    final validated = _validatedBindings[registry] ?? <_PreparedModule>{};
    final pending = selected
        .where((module) => !validated.contains(module))
        .toList();
    if (pending.isNotEmpty) {
      _validateModuleBindings(pending, registry.modules);
      validated.addAll(pending);
      _validatedBindings[registry] = validated;
    }
    return selected;
  }

  List<FlaxJsSource> _startupSources(
    FlaxBindingRegistry registry,
    List<FlaxPlugin> plugins,
  ) {
    final modules = _forSession(registry, plugins);
    final expected = jsonEncode([
      for (final module in modules) module.expectation,
    ]);
    final eager = modules
        // Consumer factories can depend on application globals set before require.
        // Only the maintained runtime namespace is initialized ahead of the entry.
        .where((module) => module.specifier.startsWith('@flax/'))
        .map(
          (module) =>
              'globalThis.__flaxModules.require(${jsonEncode(module.specifier)});',
        )
        .join();
    return [
      _bootstrap,
      for (final module in modules) module.source!,
      FlaxJsSource(
        'globalThis.__flaxModules.seal($expected);$eager',
        sourceUrl: 'flax:module-prepare',
      ),
      _baseHostPreparation,
    ];
  }

  List<_PreparedModule> _select(Set<String> requested) {
    if (requested.isEmpty) return const [];
    final available = {for (final module in _modules) module.specifier: module};
    final selected = <String>{};

    void include(String specifier) {
      final module = available[specifier];
      if (module == null) {
        throw StateError('Missing prepared Flax module: $specifier');
      }
      if (!selected.add(specifier)) return;
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
  Iterable<String> installModuleSteps(
    FlaxModuleAssets? assets,
    List<FlaxPlugin> plugins,
  ) sync* {
    if (assets == null) {
      throw StateError('Missing prepared Flax module assets');
    }
    final selected = assets._forSession(registry, plugins);
    if (selected.isEmpty) return;
    claimGlobal('__flaxModules', engineDefault: modulesPrepared);
    final context = _HostContext(this, const {'__flaxModules'});
    final installation = _ModuleInstallation(
      context,
      preloaded: modulesPrepared,
    );
    try {
      _moduleInstallation = installation;
      yield* installation.installSteps(assets, selected);
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
  final installed = {
    for (final binding in bindings) binding.moduleId: binding,
    componentsBindings.moduleId: componentsBindings,
  };
  for (final module in modules) {
    for (final required in module.bindings) {
      final binding = installed[required.moduleId];
      if (binding == null || binding.uiProtocol != required.protocol) {
        throw StateError(
          'Missing or incompatible Dart bindings for ${module.specifier}: '
          '${required.moduleId}',
        );
      }
      final missingCapabilities = required.capabilities
          .where(
            (capability) => !binding.requiredCapabilities.contains(capability),
          )
          .toList();
      if (missingCapabilities.isNotEmpty) {
        throw StateError(
          'Incomplete Dart bindings for ${module.specifier}: '
          'missing capabilities $missingCapabilities',
        );
      }
      final types = binding.types.map((value) => value.id).toSet();
      final functions = {
        for (final value in binding._functions) value.id,
        for (final group in binding.constants) ...group.values.keys,
      };
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
  _ModuleInstallation(this.context, {this.preloaded = false});
  final bool preloaded;
  final _HostContext context;
  final _namespaces = <String, String>{};
  FlaxJsObject? _registry;
  bool _closed = false;

  Iterable<String> installSteps(
    FlaxModuleAssets assets,
    List<_PreparedModule> modules,
  ) sync* {
    final result = preloaded
        ? context.runtime.getGlobal('__flaxModules')
        : context.evaluateSource(assets._bootstrap);
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
    yield 'module-registry';
    for (final module in modules) {
      for (final name in [module.specifier, ...module.subpaths]) {
        _namespaces[name] = module.specifier;
      }
    }
    if (preloaded) return;
    for (final module in modules) {
      _releaseJs(context.evaluateSource(module.source!));
      yield module.specifier;
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
    yield 'module-seal';
  }

  FlaxJsObject? namespace(String specifier) {
    final registry = _registry;
    final canonical = _namespaces[specifier];
    if (registry == null || _closed || canonical == null) return null;
    final require = registry.getProperty('require') as FlaxJsFunction;
    try {
      final result = require.call([
        FlaxJsString(canonical),
      ], thisValue: registry);
      if (result is! FlaxJsObject) {
        _releaseJs(result);
        throw StateError('Invalid SDK namespace: $specifier');
      }
      return result;
    } finally {
      require.release();
    }
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
      _namespaces.clear();
    }
  }
}

class _RequiredModuleBindings {
  _RequiredModuleBindings(
    this.moduleId,
    this.protocol,
    this.types,
    this.functions,
    this.capabilities,
  );
  final String moduleId;
  final int protocol;
  final List<String> types;
  final List<String> functions;
  final List<String> capabilities;

  factory _RequiredModuleBindings.parse(Object? value) {
    final data = _moduleObject(
      value,
      const {
        'moduleId',
        'uiProtocol',
        'types',
        'functions',
        'requiredCapabilities',
      },
      'required Dart bindings',
      optional: const {'requiredCapabilities'},
    );
    if (data['uiProtocol'] != flaxBindingVersion) {
      throw FormatException('Unsupported Flax module binding protocol');
    }
    return _RequiredModuleBindings(
      _moduleString(data['moduleId'], 'moduleId'),
      flaxBindingVersion,
      _moduleStrings(data['types'], 'types'),
      _moduleStrings(data['functions'], 'functions'),
      data.containsKey('requiredCapabilities')
          ? _moduleStrings(data['requiredCapabilities'], 'requiredCapabilities')
          : const [],
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
    this.subpaths = const [],
    this.source,
  });

  final String specifier;
  final String owner;
  final String version;
  final String artifact;
  final String asset;
  final Map<String, String> dependencies;
  final List<_RequiredModuleBindings> bindings;
  final List<String> subpaths;
  final FlaxJsSource? source;

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
    subpaths: subpaths,
    source: FlaxJsSource(value, sourceUrl: asset),
  );

  factory _PreparedModule.parse(Object? value) {
    final data = _moduleObject(
      value,
      const {
        'specifier',
        'owner',
        'version',
        'artifact',
        'asset',
        'package',
        'source',
        'dependencies',
        'bindings',
        'subpaths',
      },
      'module',
      optional: const {'subpaths'},
    );
    final name = _moduleSpecifier(data['specifier']);
    final subpaths = _moduleStrings(
      data.containsKey('subpaths') ? data['subpaths'] : const [],
      'subpaths',
    );
    for (final subpath in subpaths) {
      if (!_moduleSpecifier(subpath).startsWith('$name/') ||
          subpath.split('/').contains('_bindings')) {
        throw FormatException('Invalid Flax module subpath: $subpath');
      }
    }
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
      subpaths: subpaths,
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
  String label, {
  Set<String> optional = const {},
}) {
  if (value is! Map<String, dynamic> ||
      !keys.containsAll(value.keys) ||
      !value.keys.toSet().containsAll(keys.difference(optional))) {
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
