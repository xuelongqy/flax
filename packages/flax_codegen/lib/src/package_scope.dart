part of 'parser.dart';

FlaxCodegenSourceIdentity? _declarationSource(Element element) {
  final library = element.library;
  final name = element.name;
  if (library == null || name == null || element.isPrivate) return null;
  if (!flaxCodegenIsCanonicalOriginatingUri(library.uri.toString())) {
    return null;
  }
  final kind = switch (element) {
    InterfaceElement() || TypeAliasElement() => FlaxCodegenDeclarationKind.type,
    TopLevelFunctionElement() ||
    ExtensionElement() => FlaxCodegenDeclarationKind.function,
    GetterElement() ||
    TopLevelVariableElement() => FlaxCodegenDeclarationKind.readonly,
    SetterElement() => FlaxCodegenDeclarationKind.function,
    _ => null,
  };
  if (kind == null) return null;
  return FlaxCodegenSourceIdentity(
    kind: kind,
    originatingUri: library.uri.toString(),
    name: element is SetterElement && !name.endsWith('=') ? '$name=' : name,
    origin: FlaxCodegenOriginState.resolved,
  );
}

/// Rank carriers only after their public namespace matches the exact declaration.
/// A public declaration carries itself; otherwise avoid deprecated umbrellas before
/// comparing export distance and URI. Deprecated declarations remain selectable.
int _comparePublicCarriers(
  String originatingUri,
  LibraryElement a,
  LibraryElement b,
  Map<LibraryElement, Map<String, int>> distances,
) {
  final aUri = a.uri.toString();
  final bUri = b.uri.toString();
  if ((aUri == originatingUri) != (bUri == originatingUri)) {
    return aUri == originatingUri ? -1 : 1;
  }
  if (a.metadata.hasDeprecated != b.metadata.hasDeprecated) {
    return a.metadata.hasDeprecated ? 1 : -1;
  }
  Map<String, int> exportedLibraries(LibraryElement root) =>
      distances.putIfAbsent(root, () {
        final result = <String, int>{root.uri.toString(): 0};
        final queue = <LibraryElement>[root];
        for (var next = 0; next < queue.length; next++) {
          final library = queue[next];
          final distance = result[library.uri.toString()]! + 1;
          for (final export in library.firstFragment.libraryExports) {
            final target = export.exportedLibrary;
            if (target == null || result.containsKey(target.uri.toString())) {
              continue;
            }
            result[target.uri.toString()] = distance;
            queue.add(target);
          }
        }
        return result;
      });
  final distance = (exportedLibraries(a)[originatingUri] ?? 0x7fffffff)
      .compareTo(exportedLibraries(b)[originatingUri] ?? 0x7fffffff);
  return distance != 0 ? distance : aUri.compareTo(bUri);
}

extension FlaxCodegenPackageScope on FlaxCodegenBindingParser {
  /// Plans sibling ownership with the same source identities used by Manifests.
  /// Explicit scopes win; automatic reexports share the nearest public carrier.
  Future<void> preparePackage(List<FlaxCodegenBindingConfig> configs) async {
    if (!configs.any((config) => config.automaticLibrary)) return;
    for (final config in configs.where((config) => config.automaticLibrary)) {
      _packagePublicLibraries.addAll(config.publicLibraries);
    }
    final candidates = <FlaxCodegenSourceIdentity, List<int>>{};
    final explicit = <FlaxCodegenSourceIdentity, List<int>>{};
    final exports = <Map<String, Element>>[];
    final libraries = <LibraryElement>[];
    for (final (index, config) in configs.indexed) {
      final (namespace, _) = await _publicExports(config);
      exports.add(namespace);
      final result = await _libraryByUri(config.library);
      if (result is! LibraryElementResult) {
        throw StateError('Cannot resolve ${config.library}');
      }
      libraries.add(result.element);
      final selected = {
        ...config.classes.entries
            .where((entry) => !flaxCodegenIsStateVariantOverlay(entry.value))
            .map((entry) => entry.key),
        ...config.types,
        ...config.typedefs,
        ...config.callbackSnapshots.keys,
        ...config.functions.keys,
        ...config.extensions.keys,
      };
      for (final entry in namespace.entries) {
        final source = _declarationSource(entry.value);
        if (source == null || _autoHidden(entry.value)) continue;
        final selectedValue = switch (entry.value) {
          SetterElement() =>
            config.topLevel?.setters.contains(
                  entry.key.replaceFirst(RegExp(r'=$'), ''),
                ) ??
                false,
          GetterElement() || TopLevelVariableElement() =>
            config.topLevel?.getters.contains(entry.key) ?? false,
          _ => selected.contains(entry.key),
        };
        if (selectedValue) {
          final owners = explicit.putIfAbsent(source, () => []);
          if (!owners.contains(index)) owners.add(index);
        }
        if (config.automaticLibrary) {
          final owners = candidates.putIfAbsent(source, () => []);
          if (!owners.contains(index)) owners.add(index);
        }
      }
    }

    final distances = <LibraryElement, Map<String, int>>{};
    final routes = <String, LibraryElement>{};
    for (final uri in {
      for (final config in configs) ...config.publicLibraries.keys,
    }) {
      final result = await _libraryByUri(uri);
      if (result is LibraryElementResult) routes[uri] = result.element;
    }
    for (final source in {...candidates.keys, ...explicit.keys}) {
      final carriers = routes.entries.where((route) {
        final declaration =
            route.value.exportNamespace.definedNames2[source.name];
        return declaration != null && _declarationSource(declaration) == source;
      }).toList();
      carriers.sort(
        (a, b) => _comparePublicCarriers(
          source.originatingUri,
          a.value,
          b.value,
          distances,
        ),
      );
      if (carriers.isNotEmpty) {
        _packagePublicCarriers[source] = carriers.first.key;
      }
      final owners = explicit[source] ?? candidates[source]!;
      owners.sort((left, right) {
        final carrier = _comparePublicCarriers(
          source.originatingUri,
          libraries[left],
          libraries[right],
          distances,
        );
        return carrier != 0
            ? carrier
            : configs[left].name.compareTo(configs[right].name);
      });
      _localDeclarationOwners[source] = configs[owners.first].name;
    }

    for (final (index, config) in configs.indexed) {
      if (!config.automaticLibrary) continue;
      for (final element
          in exports[index].values.whereType<InterfaceElement>()) {
        final source = _declarationSource(element);
        if (source == null ||
            _localDeclarationOwners[source] != config.name ||
            _dependencyTypeOwners.containsKey(identity(element))) {
          continue;
        }
        final id = identity(element);
        final kind = element is EnumElement
            ? 'enum'
            : _isFlutterWidget(element)
            ? null
            : 'object';
        _selections.putIfAbsent(
          id,
          () => FlaxCodegenClassSelection(const {}, kind: kind),
        );
        _elementsByIdentity[id] = element;
        _libraryByIdentity.putIfAbsent(id, () => config.library);
        if (kind != null) _adaptations.putIfAbsent(id, () => kind);
        _argumentsByType.putIfAbsent(id, () => const []);
      }
    }
  }
}
