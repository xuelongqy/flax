part of 'parser.dart';

typedef _FlaxCodegenDependencyViews = Map<String, Set<String>>;
typedef _FlaxCodegenDependencyClassViews = ({
  _FlaxCodegenDependencyViews all,
  Map<String, _FlaxCodegenDependencyViews> members,
});

extension FlaxCodegenDependencyScope on FlaxCodegenBindingParser {
  void _recordDependencyClassViews(FlaxCodegenClassModel type) {
    if (_dependencyLocalViews.isEmpty || type.id.startsWith('flax.core/')) {
      return;
    }
    _FlaxCodegenDependencyViews collect(Object? value) {
      final views = <String, Set<String>>{};
      void add(Object? id) {
        final source = _dependencyLocalViews[id];
        if (source != null) {
          views.putIfAbsent(source, () => {}).add(id as String);
        }
      }

      void visit(Object? value) {
        if (value is Map) {
          add(value['id']);
          for (final entry in value.entries) {
            if (entry.key == 'supertypes' && entry.value is List) {
              (entry.value as List).forEach(add);
            }
            visit(entry.value);
          }
        } else if (value is List) {
          value.forEach(visit);
        }
      }

      visit(value);
      return views;
    }

    final encoded = FlaxCodegenManifestCodec.encodeClass(type);
    final members = <String, _FlaxCodegenDependencyViews>{};
    void record(String operation, Object? encodedMembers) {
      for (final member in encodedMembers as List? ?? const []) {
        final name = operation == 'call' || operation == 'static-call'
            ? member['operator'] ?? member['name']
            : member['name'];
        final views = members.putIfAbsent('$operation:$name', () => {});
        for (final entry in collect(member).entries) {
          views.putIfAbsent(entry.key, () => {}).addAll(entry.value);
        }
      }
    }

    record('new', encoded['constructors']);
    record('get', encoded['getters']);
    record('set', encoded['setters']);
    record('static-get', encoded['staticGetters']);
    record('static-set', encoded['staticSetters']);
    for (final member in encoded['methods']! as List) {
      record(member['instance'] == true ? 'call' : 'static-call', [member]);
    }
    if (encoded['proxy'] case final Map<String, Object?> proxy) {
      record('get', proxy['getters']);
      record('set', proxy['setters']);
      record('call', proxy['methods']);
    }
    _dependencyClassViews[type.id] = (all: collect(encoded), members: members);
  }

  /// Index public carriers without selecting or emitting the whole dependency.
  Future<void> prepareDependencyPolicy({
    required List<FlaxCodegenBindingConfig> configs,
    required List<String> generate,
    required Map<String, String> packageRoots,
  }) async {
    _bindingSourcePackages = {
      for (final config in configs)
        for (final library in {
          config.library,
          ...config.additionalLibraries,
          ...config.publicLibraries.keys,
        })
          ?_sourcePackage(library),
    };
    final session = _contexts.contexts.first.currentSession;
    for (final package in generate) {
      final root = packageRoots[package];
      if (root == null) {
        throw StateError('Cannot resolve dependency package: $package');
      }
      final lib = Directory(p.join(root, 'lib'));
      if (!lib.existsSync()) {
        throw StateError('Missing dependency library: $package');
      }
      final uris = [
        for (final file in lib.listSync(recursive: true, followLinks: false))
          if (file is File && p.extension(file.path) == '.dart')
            if (p.split(p.relative(file.path, from: lib.path)).first != 'src')
              'package:$package/${p.posix.joinAll(p.split(p.relative(file.path, from: lib.path)))}',
      ]..sort();
      for (final uri in uris) {
        final result = await session.getLibraryByUri(uri);
        if (result is! LibraryElementResult) continue;
        for (final element
            in result.element.exportNamespace.definedNames2.values) {
          if (element is! InterfaceElement ||
              _autoHidden(element) ||
              _sourcePackage(element.library.uri.toString()) != package) {
            continue;
          }
          final id = identity(element);
          if (_dependencyTypeOwners.containsKey(id)) continue;
          _localDependencyElements[id] = element;
          _localDependencyCarriers.putIfAbsent(id, () => uri);
          _elementsByIdentity[id] = element;
          _libraryByIdentity.putIfAbsent(id, () => uri);
        }
      }
    }
  }

  String? _dependencyPolicyError(InterfaceElement element) {
    final sources = _bindingSourcePackages;
    final package = _sourcePackage(element.library.uri.toString());
    if (sources == null ||
        package == null ||
        sources.contains(package) ||
        _dependencyTypeOwners.containsKey(identity(element)) ||
        _localDependencyElements.containsKey(identity(element))) {
      return null;
    }
    return 'External type ${element.name} from $package has no binding provider; '
        'declare its provider or allow $package in bindingDependencies.generate';
  }

  bool _supportsDependencySignature(
    DartType signature,
    String target,
    List<FlaxCodegenSkip> skips, {
    _FlaxCodegenTypeScope? scope,
  }) {
    if (_bindingSourcePackages == null) return true;
    final visited = <DartType>{};
    String? unavailable(DartType type) {
      if (!visited.add(type)) return null;
      if (type is InterfaceType) {
        final reason =
            scope?.dependencyViews.containsKey(identity(type.element)) == true
            ? null
            : _dependencyPolicyError(type.element);
        if (reason != null) return reason;
        for (final argument in type.typeArguments) {
          if (unavailable(argument) case final reason?) return reason;
        }
      } else if (type is FunctionType) {
        if (unavailable(type.returnType) case final reason?) return reason;
        for (final parameter in type.formalParameters) {
          if (unavailable(parameter.type) case final reason?) return reason;
        }
      } else if (type is RecordType) {
        for (final field in [...type.positionalFields, ...type.namedFields]) {
          if (unavailable(field.type) case final reason?) return reason;
        }
      }
      return null;
    }

    final reason = unavailable(signature);
    if (reason == null) return true;
    skips.add(
      FlaxCodegenSkip(
        target: target,
        reason: reason,
        code: 'external_dependency_unbound',
      ),
    );
    return false;
  }

  /// Close only runtime types referenced by successfully parsed signatures.
  List<FlaxCodegenBindingConfig> dependencyConfigs(
    List<FlaxCodegenModuleModel> models,
    FlaxCodegenBindingConfig entry,
  ) {
    final required = <String, Set<String>>{};
    final rootOwned = {
      for (final module in models)
        if (!_localDependencyModuleNames.contains(module.name))
          for (final type in module.classes) type.id,
    };
    for (final module in models) {
      for (final type in module.types) {
        final element = _localDependencyElements[type.id];
        if (element == null || rootOwned.contains(type.id)) continue;
        final package = _sourcePackage(element.library.uri.toString())!;
        required.putIfAbsent(package, () => {}).add(type.id);
      }
    }
    return [
      for (final package in required.keys.toList()..sort())
        _dependencyConfig(package, required[package]!, entry),
    ];
  }

  FlaxCodegenBindingConfig _dependencyConfig(
    String package,
    Set<String> identities,
    FlaxCodegenBindingConfig entry,
  ) {
    final names = <String, String>{};
    for (final id in identities.toList()..sort()) {
      final name = _localDependencyElements[id]!.name!;
      if (names.containsKey(name) && names[name] != id) {
        throw StateError('Ambiguous dependency type $name in $package');
      }
      names[name] = id;
    }
    final libraries = {
      for (final id in identities) _localDependencyCarriers[id]!,
    }.toList()..sort();
    final module = 'dependency_$package';
    _localDependencyModuleNames.add(module);
    final path = 'js/src/generated/dependencies/$package/index.ts';
    final specifier = '${entry.jsPackage}/dependencies/$package';
    return FlaxCodegenBindingConfig(
      module,
      libraries.first,
      specifier,
      'lib/src/generated/dependencies/${package}_bindings.g.dart',
      path,
      {
        for (final name in names.keys.toList()..sort())
          name: const FlaxCodegenClassSelection({}),
      },
      additionalLibraries: libraries.skip(1).toList(),
      automaticClasses: names.keys.toList()..sort(),
      publicLibraries: {
        for (final library in libraries)
          library: FlaxCodegenLibrarySelection(
            jsPackage: specifier,
            tsOutput: path,
          ),
      },
    );
  }
}

String? _sourcePackage(String uri) {
  final parsed = Uri.tryParse(uri);
  return parsed?.scheme == 'package' && parsed!.pathSegments.isNotEmpty
      ? parsed.pathSegments.first
      : null;
}
