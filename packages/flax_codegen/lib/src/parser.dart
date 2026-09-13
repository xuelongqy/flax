import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/constant/value.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:analyzer/dart/element/nullability_suffix.dart';
import 'package:analyzer/dart/element/type.dart';
// Pinned analyzer substitution preserves recursive and dependent bounds.
// ignore: implementation_imports
import 'package:analyzer/src/dart/element/type_algebra.dart' show Substitution;
import 'package:path/path.dart' as p;

import 'config.dart';
import 'model.dart';

String identity(InterfaceElement element) =>
    '${element.library.uri}::${element.name}';

bool _requiresSuper(InterfaceElement element, String name) {
  final pending = [element];
  final visited = <InterfaceElement>{};
  while (pending.isNotEmpty) {
    final current = pending.removeLast();
    if (!visited.add(current)) continue;
    if (current.getMethod(name)?.metadata.hasMustCallSuper == true) return true;
    // Like analyzer's must_call_super check, follow implementation inheritance,
    // not interfaces. An unannotated override does not remove the requirement.
    if (current.supertype case final parent?) pending.add(parent.element);
    pending.addAll(current.mixins.map((type) => type.element));
    if (current is MixinElement) {
      pending.addAll(current.superclassConstraints.map((type) => type.element));
    }
  }
  return false;
}

void _validateDuplicates(FlaxCodegenClassSelection selection, String location) {
  for (final names in [
    selection.getters,
    selection.setters,
    selection.staticGetters,
    selection.errorGetters,
    selection.widgetInterfaces,
    ...selection.constructors.values,
    ...selection.methods.values,
    ...selection.instanceMethods.values,
    selection.data.getters,
    selection.data.results,
    ...selection.data.constructors.values,
    ...selection.data.methods.values,
  ]) {
    if (names.toSet().length != names.length) {
      throw StateError('Duplicate selection: $location');
    }
  }
}

bool _containsData(FlaxCodegenTypeRef type) =>
    type.kind == 'data' ||
    (type.item != null && _containsData(type.item!)) ||
    (type.key != null && _containsData(type.key!)) ||
    (type.result != null && _containsData(type.result!)) ||
    type.parameters.any((parameter) => _containsData(parameter.type));

String _callbackSignatureTypeName(FlaxCodegenTypeRef type) {
  final suffix = type.nullable ? '?' : '';
  if (type.kind == 'any' || type.kind == 'data') return 'Object$suffix';
  if (const {'String', 'bool', 'int', 'double', 'num'}.contains(type.kind)) {
    return '${type.kind}$suffix';
  }
  final name = type.name;
  if (name == null || name.isEmpty) {
    throw StateError('Missing callback signature type name: ${type.kind}');
  }
  return '$name$suffix';
}

/// Rebuild YAML selection maps that Manifest2 already embeds in member models.
/// Raw Function callbacks (no declaration) restore signatures and optional/error
/// indexes. Scoped indexes are restored for both raw and typed callbacks.
void _collectRawCallbackSelection(
  String member,
  Iterable<FlaxCodegenParameterModel> parameters, {
  required Map<String, List<String>> signatures,
  required Map<String, List<int>> optional,
  required Map<String, List<int>> errors,
  required Map<String, List<int>> scoped,
}) {
  for (final parameter in parameters) {
    final type = parameter.type;
    if (type.kind != 'callback') continue;
    final key = '$member.${parameter.name}';
    final scopedIndexes = [
      for (final (index, callbackParameter) in type.parameters.indexed)
        if (callbackParameter.scoped) index,
    ];
    if (scopedIndexes.isNotEmpty) scoped[key] = scopedIndexes;
    if (type.declaration != null) continue;
    signatures[key] = [
      for (final callbackParameter in type.parameters)
        _callbackSignatureTypeName(callbackParameter.type),
    ];
    final optionalIndexes = [
      for (final (index, callbackParameter) in type.parameters.indexed)
        if (!callbackParameter.required) index,
    ];
    final errorIndexes = [
      for (final (index, callbackParameter) in type.parameters.indexed)
        if (callbackParameter.encodeKind == 'error') index,
    ];
    if (optionalIndexes.isNotEmpty) optional[key] = optionalIndexes;
    if (errorIndexes.isNotEmpty) errors[key] = errorIndexes;
  }
}

FlaxCodegenClassSelection _selectionFromModel(FlaxCodegenClassModel type) {
  final methods = {
    for (final method in type.methods.where((method) => !method.instance))
      method.name: method.parameters
          .map((parameter) => parameter.name)
          .toList(),
  };
  final instanceMethods = {
    for (final method in type.methods.where((method) => method.instance))
      method.name: method.parameters
          .map((parameter) => parameter.name)
          .toList(),
  };
  final callbackSignatures = <String, List<String>>{};
  final callbackOptionalParameters = <String, List<int>>{};
  final callbackErrorParameters = <String, List<int>>{};
  final callbackScopedParameters = <String, List<int>>{};
  for (final constructor in type.constructors) {
    _collectRawCallbackSelection(
      constructor.name,
      constructor.parameters,
      signatures: callbackSignatures,
      optional: callbackOptionalParameters,
      errors: callbackErrorParameters,
      scoped: callbackScopedParameters,
    );
  }
  for (final method in type.methods) {
    _collectRawCallbackSelection(
      method.name,
      method.parameters,
      signatures: callbackSignatures,
      optional: callbackOptionalParameters,
      errors: callbackErrorParameters,
      scoped: callbackScopedParameters,
    );
  }
  return FlaxCodegenClassSelection(
    {
      for (final constructor in type.constructors)
        constructor.name: constructor.parameters
            .map((parameter) => parameter.name)
            .toList(),
    },
    kind: type.kind == 'widget' ? null : type.kind,
    jsName: type.jsName,
    genericScalar: type.genericScalar,
    typeArguments: type.typeArguments,
    getters: type.getters.map((getter) => getter.name).toList(),
    setters: type.setters.map((setter) => setter.name).toList(),
    staticGetters: type.staticGetters.map((getter) => getter.name).toList(),
    errorGetters: type.getters
        .where((getter) => getter.encodeKind == 'error')
        .map((getter) => getter.name)
        .toList(),
    methods: methods,
    instanceMethods: instanceMethods,
    methodTypeArguments: {
      for (final method in type.methods)
        if (method.typeArguments.isNotEmpty) method.name: method.typeArguments,
    },
    startsRoute: type.methods
        .where((method) => method.startsRoute)
        .map((method) => method.name)
        .toList(),
    deferredFactories: type.methods
        .where((method) => method.deferredFactory)
        .map((method) => method.name)
        .toList(),
    independentWidgetCallbacks: {
      for (final constructor in type.constructors)
        if (constructor.parameters.any(
          (parameter) => parameter.independentWidgetResult,
        ))
          constructor.name: constructor.parameters
              .where((parameter) => parameter.independentWidgetResult)
              .map((parameter) => parameter.name)
              .toList(),
    },
    widgetInterfaces: type.widgetInterfaces
        .map((interface) => interface.name!)
        .toList(),
    proxy: type.proxy?.kind,
    proxyOverrides:
        type.proxy?.methods.map((method) => method.name).toList() ?? const [],
    proxySuper: type.proxy?.superMethods ?? const [],
    pageAdapter: type.pageAdapter,
    disposeMethod: type.disposeMethod,
    listenerPairs: type.listenerPairs,
    callbackSignatures: callbackSignatures,
    callbackOptionalParameters: callbackOptionalParameters,
    callbackErrorParameters: callbackErrorParameters,
    callbackScopedParameters: callbackScopedParameters,
    data: FlaxCodegenDataSelection(
      constructors: {
        for (final constructor in type.constructors)
          if (constructor.parameters.any(
            (parameter) => _containsData(parameter.type),
          ))
            constructor.name: constructor.parameters
                .where((parameter) => _containsData(parameter.type))
                .map((parameter) => parameter.name)
                .toList(),
      },
      getters: type.getters
          .where((getter) => _containsData(getter.type))
          .map((getter) => getter.name)
          .toList(),
      methods: {
        for (final method in type.methods)
          if (method.parameters.any(
            (parameter) => _containsData(parameter.type),
          ))
            method.name: method.parameters
                .where((parameter) => _containsData(parameter.type))
                .map((parameter) => parameter.name)
                .toList(),
      },
      results: type.methods
          .where((method) => _containsData(method.result))
          .map((method) => method.name)
          .toList(),
    ),
  );
}

void _validateDataTargets(
  FlaxCodegenClassSelection selection,
  String location,
) {
  final methods = {...selection.methods, ...selection.instanceMethods};
  void parameters(
    Map<String, List<String>> markers,
    Map<String, List<String>> selected,
  ) {
    for (final entry in markers.entries) {
      if (!selected.containsKey(entry.key) ||
          entry.value.isEmpty ||
          entry.value.any((name) => !selected[entry.key]!.contains(name))) {
        throw StateError(
          'Unknown data parameter target: $location.${entry.key}',
        );
      }
    }
  }

  parameters(selection.data.constructors, selection.constructors);
  parameters(selection.data.methods, methods);
  if (selection.data.getters.any((name) => !selection.getters.contains(name)) ||
      selection.data.results.any((name) => !methods.containsKey(name))) {
    throw StateError('Unknown data member target: $location');
  }
}

/// Copy [parameter] replacing only [type]; preserve every other field.
FlaxCodegenParameterModel _parameterWithType(
  FlaxCodegenParameterModel parameter,
  FlaxCodegenTypeRef type,
) => FlaxCodegenParameterModel(
  name: parameter.name,
  type: type,
  required: parameter.required,
  positional: parameter.positional,
  defaultCode: parameter.defaultCode,
  omitWhenAbsent: parameter.omitWhenAbsent,
  independentWidgetResult: parameter.independentWidgetResult,
  snapshot: parameter.snapshot,
  encodeKind: parameter.encodeKind,
  scoped: parameter.scoped,
);

/// Rewrite only Object/dynamic leaves, retaining concrete types and TS parameters.
FlaxCodegenTypeRef _dataType(FlaxCodegenTypeRef type, String location) {
  var applicable = false;
  FlaxCodegenTypeRef visit(
    FlaxCodegenTypeRef actual, [
    FlaxCodegenTypeRef? declaration,
  ]) {
    final declared = actual.declaration ?? declaration;
    if (actual.kind == 'any') {
      applicable = true;
      return FlaxCodegenTypeRef(
        'data',
        nullable: actual.nullable,
        declaration: declared?.kind == 'parameter' ? declared : null,
      );
    }
    if (!{
      'callback',
      'future',
      'stream',
      'iterable',
      'list',
      'map',
      'set',
    }.contains(actual.kind)) {
      return declared == null ? actual : actual.declaredAs(declared);
    }
    return FlaxCodegenTypeRef(
      actual.kind,
      nullable: actual.nullable,
      item: actual.item == null ? null : visit(actual.item!, declared?.item),
      key: actual.key == null ? null : visit(actual.key!, declared?.key),
      result: actual.result == null
          ? null
          : visit(actual.result!, declared?.result),
      parameters: [
        for (final (index, p) in actual.parameters.indexed)
          _parameterWithType(
            p,
            visit(p.type, declared?.parameters[index].type),
          ),
      ],
      dartArguments: actual.dartArguments,
      typeParameters: actual.typeParameters,
      genericIdentity: actual.genericIdentity,
    );
  }

  final result = visit(type);
  if (!applicable) {
    throw StateError(
      'Data selection has no Object/dynamic position: $location',
    );
  }
  return result;
}

Set<String> _dataParameters(Iterable<FlaxCodegenTypeRef> types) {
  final names = <String>{};
  for (final type in types) {
    if (type.kind == 'data' && type.declaration?.kind == 'parameter') {
      names.add(type.declaration!.name!);
    }
    names.addAll(
      _dataParameters([
        if (type.item != null) type.item!,
        if (type.key != null) type.key!,
        if (type.result != null) type.result!,
        ...type.parameters.map((p) => p.type),
        ...type.typeParameters.expand(
          (p) => [p.bound, if (p.defaultType != null) p.defaultType!],
        ),
      ]),
    );
  }
  return names;
}

FlaxCodegenGenericParameter _dataGeneric(
  FlaxCodegenGenericParameter parameter,
) => FlaxCodegenGenericParameter(
  parameter.name,
  _dataType(parameter.bound, '${parameter.name} bound'),
  defaultType: parameter.defaultType == null
      ? null
      : _dataType(parameter.defaultType!, '${parameter.name} default'),
  genericIdentity: parameter.genericIdentity,
);

class FlaxCodegenBindingParser {
  FlaxCodegenBindingParser(String root)
    : _contexts = AnalysisContextCollection(includedPaths: [p.absolute(root)]);
  final AnalysisContextCollection _contexts;
  final _adaptations = <String, String>{};
  final _argumentsByType = <String, List<String>>{};
  final _selections = <String, FlaxCodegenClassSelection>{};
  final _snapshots = <String, FlaxCodegenSnapshotModel>{};

  /// Manifest2 dependency `typeLibraries` name → URI, filled by [prepareModules].
  final _dependencyTypeLibraries = <String, String>{};

  /// Lazily resolved public elements for [_dependencyTypeLibraries].
  final _dependencyExports = <String, Element>{};
  final _dependencyExportLibraries = <String, String>{};
  var _dependencyExportsResolved = false;

  final _publicInputs =
      <FlaxCodegenBindingConfig, (Map<String, Element>, Map<String, String>)>{};

  Future<(Map<String, Element>, Map<String, String>)> _publicExports(
    FlaxCodegenBindingConfig config,
  ) async {
    if (_publicInputs[config] case final cached?) return cached;
    final names = <String, Element>{};
    final libraries = <String, String>{};
    for (final uri in [config.library, ...config.additionalLibraries]) {
      final result = await _contexts.contexts.first.currentSession
          .getLibraryByUri(uri);
      if (result is! LibraryElementResult) {
        throw StateError('Cannot resolve $uri');
      }
      for (final entry
          in result.element.exportNamespace.definedNames2.entries) {
        if (names[entry.key] case final previous?
            when previous != entry.value) {
          throw StateError(
            'Conflicting public declaration: ${entry.key} in $uri',
          );
        }
        names[entry.key] = entry.value;
        libraries.putIfAbsent(entry.key, () => uri);
      }
    }
    return _publicInputs[config] = (names, libraries);
  }

  Future<void> _ensureDependencyExports() async {
    if (_dependencyExportsResolved) return;
    final uris = _dependencyTypeLibraries.values.toSet().toList()..sort();
    final libraries = <String, LibraryElement>{};
    final session = _contexts.contexts.first.currentSession;
    for (final uri in uris) {
      final result = await session.getLibraryByUri(uri);
      if (result is! LibraryElementResult) {
        throw StateError('Cannot resolve dependency type library: $uri');
      }
      libraries[uri] = result.element;
    }
    final names = _dependencyTypeLibraries.keys.toList()..sort();
    for (final name in names) {
      final uri = _dependencyTypeLibraries[name]!;
      final element = libraries[uri]!.exportNamespace.definedNames2[name];
      if (element == null) {
        throw StateError('Unknown dependency type: $name in $uri');
      }
      if (_dependencyExports[name] case final previous?
          when previous != element) {
        throw StateError('Conflicting dependency type: $name');
      }
      if (_dependencyExportLibraries[name] case final previous?
          when previous != uri) {
        throw StateError('Conflicting dependency type library: $name');
      }
      _dependencyExports[name] = element;
      _dependencyExportLibraries[name] = uri;
    }
    _dependencyExportsResolved = true;
  }

  /// Local config exports plus prepared Manifest2 dependency typeLibraries.
  /// Does not mutate the [_publicExports] cache.
  Future<(Map<String, Element>, Map<String, String>)> _resolutionExports(
    FlaxCodegenBindingConfig config,
  ) async {
    final (localExports, localLibraries) = await _publicExports(config);
    await _ensureDependencyExports();
    if (_dependencyExports.isEmpty) {
      return (localExports, localLibraries);
    }
    final exports = Map<String, Element>.of(localExports);
    final libraries = Map<String, String>.of(localLibraries);
    final names = _dependencyExports.keys.toList()..sort();
    for (final name in names) {
      final element = _dependencyExports[name]!;
      final uri = _dependencyExportLibraries[name]!;
      if (exports[name] case final previous? when previous != element) {
        throw StateError('Conflicting public declaration: $name in $uri');
      }
      exports[name] = element;
      libraries.putIfAbsent(name, () => uri);
    }
    return (exports, libraries);
  }

  /// Resolve adaptations before signatures so module argument order does not matter.
  Future<void> prepare(List<FlaxCodegenBindingConfig> configs) async {
    for (final config in configs) {
      final (exports, _) = await _publicExports(config);
      for (final entry in config.classes.entries) {
        final selected = entry.value;
        final declaration = exports[entry.key];
        final kind =
            selected.kind ??
            (declaration is ClassElement &&
                    selected.constructors.isNotEmpty &&
                    !declaration.allSupertypes.any(
                      (t) =>
                          identity(t.element) ==
                          'package:flutter/src/widgets/framework.dart::Widget',
                    )
                ? 'object'
                : null);
        final element = exports[entry.key];
        if (element is! InterfaceElement ||
            (element is! ClassElement && element is! MixinElement)) {
          throw StateError('Unknown adapted class: ${entry.key}');
        }
        final id = identity(element);
        _validateDuplicates(entry.value, id);
        _selections[id] = entry.value;
        final previous = _adaptations[id];
        if (previous != null && previous != kind) {
          throw StateError('Conflicting adaptation: $id');
        }
        if (kind != null) _adaptations[id] = kind;
        _argumentsByType[id] = entry.value.typeArguments;
      }
    }
  }

  /// Registers dependency declarations loaded from a package manifest.
  void prepareModules(Iterable<FlaxCodegenModuleModel> modules) {
    for (final module in modules) {
      for (final entry in module.typeLibraries.entries) {
        final previous = _dependencyTypeLibraries[entry.key];
        if (previous != null && previous != entry.value) {
          throw StateError('Conflicting dependency type library: ${entry.key}');
        }
        _dependencyTypeLibraries[entry.key] = entry.value;
      }
    }
    _dependencyExportsResolved = false;
    _dependencyExports.clear();
    _dependencyExportLibraries.clear();
    for (final module in modules) {
      for (final type in module.classes) {
        final selection = _selectionFromModel(type);
        _validateDuplicates(selection, type.id);
        _selections[type.id] = selection;
        if (type.kind != 'widget') {
          final previous = _adaptations[type.id];
          if (previous != null && previous != type.kind) {
            throw StateError('Conflicting adaptation: ${type.id}');
          }
          _adaptations[type.id] = type.kind;
        }
        _argumentsByType[type.id] = type.typeArguments;
      }
    }
  }

  /// Merge selected surfaces, then resolve every signature on the actual subtype.
  FlaxCodegenClassSelection _effectiveSelection(
    InterfaceElement element,
    FlaxCodegenClassSelection own,
  ) {
    final kind = _adaptations[identity(element)];
    if (kind != 'object' && kind != 'stream') return own;
    final parents = [
      for (final parent in element.allSupertypes)
        if (_selections[identity(parent.element)] case final selected?
            when _adaptations[identity(parent.element)] == kind)
          selected,
    ];
    Map<String, List<String>> mergeParameters(
      Iterable<Map<String, List<String>>> maps,
    ) {
      final merged = <String, List<String>>{};
      for (final map in maps) {
        for (final entry in map.entries) {
          // A subtype may add to a selected surface, but it cannot silently
          // remove parameters already published by a selected parent.
          merged[entry.key] = {...?merged[entry.key], ...entry.value}.toList();
        }
      }
      for (final entry in merged.entries) {
        final actual = element.getMethod(entry.key)?.formalParameters;
        if (actual == null) continue;
        final selected = <String>{};
        for (final name in entry.value) {
          if (actual.any((parameter) => parameter.name == name)) {
            selected.add(name);
            continue;
          }
          var inheritedMatch = false;
          for (final parent in element.allSupertypes) {
            final inherited = parent.element.getMethod(entry.key);
            final parameter = inherited?.formalParameters
                .where((candidate) => candidate.name == name)
                .firstOrNull;
            if (parameter == null || !parameter.isPositional) continue;
            final index = inherited!.formalParameters
                .where((candidate) => candidate.isPositional)
                .toList()
                .indexOf(parameter);
            final positional = actual
                .where((candidate) => candidate.isPositional)
                .toList();
            if (index >= 0 && index < positional.length) {
              selected.add(positional[index].name!);
              inheritedMatch = true;
              break;
            }
          }
          if (!inheritedMatch) {
            throw StateError(
              'Unknown selected parameter: ${element.name}.${entry.key}.$name',
            );
          }
        }
        entry.value
          ..clear()
          ..addAll(
            actual
                .where((parameter) => selected.contains(parameter.name))
                .map((parameter) => parameter.name!),
          );
      }
      return merged;
    }

    final selections = [...parents, own];
    final disposers = selections.map((s) => s.disposeMethod).nonNulls.toSet();
    if (disposers.length > 1) {
      throw StateError('Conflicting inherited disposal: ${element.name}');
    }
    final pairs = <String, String>{};
    final arguments = <String, List<String>>{};
    for (final selected in selections) {
      for (final pair in selected.listenerPairs.entries) {
        if (pairs[pair.key] case final previous? when previous != pair.value) {
          throw StateError('Conflicting inherited listener: ${pair.key}');
        }
        pairs[pair.key] = pair.value;
      }
      for (final entry in selected.methodTypeArguments.entries) {
        if (selected != own &&
            !selected.instanceMethods.containsKey(entry.key)) {
          continue;
        }
        if (arguments[entry.key] case final previous?
            when previous.join(',') != entry.value.join(',')) {
          throw StateError(
            'Conflicting inherited method type arguments: ${entry.key}',
          );
        }
        arguments[entry.key] = entry.value;
      }
    }
    return FlaxCodegenClassSelection(
      own.constructors,
      widgetInterfaces: own.widgetInterfaces,
      independentWidgetCallbacks: own.independentWidgetCallbacks,
      jsName: own.jsName,
      kind: kind,
      genericScalar: own.genericScalar,
      asyncIterableFactory: own.asyncIterableFactory,
      eraseGenerics: own.eraseGenerics || parents.any((p) => p.eraseGenerics),
      callbackSignatures: {
        for (final selection in selections) ...selection.callbackSignatures,
      },
      callbackOptionalParameters: {
        for (final selection in selections)
          ...selection.callbackOptionalParameters,
      },
      callbackErrorParameters: {
        for (final selection in selections)
          ...selection.callbackErrorParameters,
      },
      callbackScopedParameters: {
        for (final selection in selections)
          ...selection.callbackScopedParameters,
      },
      typeArguments: own.typeArguments,
      proxy: own.proxy,
      proxyOverrides: own.proxyOverrides,
      proxySuper: own.proxySuper,
      pageAdapter: own.pageAdapter,
      staticGetters: own.staticGetters,
      errorGetters: {
        for (final selection in selections) ...selection.errorGetters,
      }.toList(),
      methods: own.methods,
      methodTypeArguments: arguments,
      deferredFactories: own.deferredFactories,
      getters: {for (final s in selections) ...s.getters}.toList(),
      setters: {for (final s in selections) ...s.setters}.toList(),
      instanceMethods: mergeParameters(
        selections.map((s) => s.instanceMethods),
      ),
      startsRoute: {for (final s in selections) ...s.startsRoute}.toList(),
      disposeMethod: disposers.firstOrNull,
      listenerPairs: pairs,
      data: FlaxCodegenDataSelection(
        constructors: own.data.constructors,
        getters: {for (final s in selections) ...s.data.getters}.toList(),
        methods: mergeParameters([
          for (final s in parents)
            {
              for (final e in s.data.methods.entries)
                if (s.instanceMethods.containsKey(e.key)) e.key: e.value,
            },
          own.data.methods,
        ]),
        results: {
          for (final s in parents)
            ...s.data.results.where(s.instanceMethods.containsKey),
          ...own.data.results,
        }.toList(),
      ),
    );
  }

  FlaxCodegenSnapshotModel? _snapshotFor(InterfaceElement element) {
    final pending = [element];
    final seen = <InterfaceElement>{};
    while (pending.isNotEmpty) {
      final current = pending.removeAt(0);
      if (!seen.add(current)) continue;
      final snapshot = _snapshots[identity(current)];
      if (snapshot != null) return snapshot;
      pending.addAll(current.allSupertypes.map((type) => type.element));
    }
    return null;
  }

  List<FlaxCodegenSnapshotModel> _parseSnapshots(
    FlaxCodegenBindingConfig config,
    Map<String, Element> exports,
  ) {
    _snapshots.clear();
    final elements = <String, InterfaceElement>{};
    for (final entry in config.callbackSnapshots.entries) {
      final element = exports[entry.key];
      if (element is! InterfaceElement) {
        throw StateError('Unknown callback snapshot type: ${entry.key}');
      }
      elements[entry.key] = element;
      _snapshots[identity(element)] = FlaxCodegenSnapshotModel(
        name: entry.key,
        id: identity(element),
        fields: const [],
        parent: entry.value.extendsName,
      );
    }
    for (final entry in config.callbackSnapshots.entries) {
      final parentName = entry.value.extendsName;
      if (parentName == null) continue;
      final parent = elements[parentName];
      final child = elements[entry.key]!;
      if (parent == null) {
        throw StateError(
          'Unknown callback snapshot parent: ${entry.key}.$parentName',
        );
      }
      if (!child.library.typeSystem.isSubtypeOf(
        child.thisType,
        parent.thisType,
      )) {
        throw StateError(
          'Callback snapshot ${entry.key} does not extend $parentName',
        );
      }
    }
    FlaxCodegenSnapshotFieldModel field(InterfaceElement element, String name) {
      PropertyAccessorElement? getter = element.getGetter(name);
      if (getter == null) {
        for (final parent in element.allSupertypes) {
          getter = parent.element.getGetter(name);
          if (getter != null) break;
        }
      }
      if (getter == null || getter.isStatic) {
        throw StateError('Unknown snapshot field: ${element.name}.$name');
      }
      final type = getter.returnType;
      final nullable = type.nullabilitySuffix == NullabilitySuffix.question;
      if (type is InterfaceType) {
        final fieldType = type.element;
        if (fieldType.library.isDartCore &&
            {
              'int',
              'double',
              'num',
              'bool',
              'String',
            }.contains(fieldType.name)) {
          return FlaxCodegenSnapshotFieldModel(
            name: name,
            kind: fieldType.name!,
            nullable: nullable,
          );
        }
        if (fieldType is EnumElement) {
          return FlaxCodegenSnapshotFieldModel(
            name: name,
            kind: 'enum',
            enumNames: [
              for (final value in fieldType.fields)
                if (value.isEnumConstant) value.name!,
            ],
            nullable: nullable,
          );
        }
        final nested = _snapshotFor(fieldType);
        if (nested != null) {
          return FlaxCodegenSnapshotFieldModel(
            name: name,
            kind: 'snapshot',
            snapshot: nested.name,
            nullable: nullable,
          );
        }
      }
      throw StateError(
        'Unsupported snapshot field type: ${element.name}.$name',
      );
    }

    final models = <FlaxCodegenSnapshotModel>[];
    for (final entry in config.callbackSnapshots.entries) {
      final element = elements[entry.key]!;
      final inherited = <String>{};
      var parentName = entry.value.extendsName;
      while (parentName != null) {
        final parent = config.callbackSnapshots[parentName];
        if (parent == null) break;
        inherited.addAll(parent.fields);
        parentName = parent.extendsName;
      }
      if (entry.value.fields.any(inherited.contains)) {
        throw StateError('Duplicate inherited snapshot field: ${entry.key}');
      }
      final model = FlaxCodegenSnapshotModel(
        name: entry.key,
        id: identity(element),
        parent: entry.value.extendsName,
        fields: [for (final name in entry.value.fields) field(element, name)],
      );
      _snapshots[identity(element)] = model;
      models.add(model);
    }
    return models;
  }

  Future<FlaxCodegenModuleModel> parse(FlaxCodegenBindingConfig config) async {
    await prepare([config]);
    final session = _contexts.contexts.first.currentSession;
    final (exports, publicLibraries) = await _resolutionExports(config);
    final snapshots = _parseSnapshots(config, exports);
    final classes = <FlaxCodegenClassModel>[];
    final types = <String, FlaxCodegenNamedTypeModel>{};
    var usesWidget = false;
    var usesFutureOr = false;
    var usesStream = false;
    for (final snapshot in snapshots) {
      types[snapshot.id] = FlaxCodegenNamedTypeModel(
        name: snapshot.name,
        id: snapshot.id,
      );
    }

    FlaxCodegenTypeRef typeRef(
      DartType type, {
      bool scalar = false,
      bool forTypescript = false,
      Set<TypeParameterElement>? erasing,
      bool allowRecursiveErasure = false,
    }) {
      bool containsErasedParameter(DartType value) {
        if (value is TypeParameterType) {
          return erasing?.contains(value.element) ?? false;
        }
        if (value is InterfaceType) {
          return value.typeArguments.any(containsErasedParameter);
        }
        if (value is FunctionType) {
          return containsErasedParameter(value.returnType) ||
              value.formalParameters.any(
                (parameter) => containsErasedParameter(parameter.type),
              );
        }
        return false;
      }

      final nullable = type.nullabilitySuffix == NullabilitySuffix.question;
      if (type is TypeParameterType && forTypescript) {
        return FlaxCodegenTypeRef(
          'parameter',
          name: type.element.name,
          nullable: nullable,
          genericIdentity: type.element,
        );
      }
      if (type is TypeParameterType && scalar) {
        return FlaxCodegenTypeRef('scalar', nullable: nullable);
      }
      if (type is TypeParameterType) {
        final path = erasing ?? <TypeParameterElement>{};
        if (!path.add(type.element)) {
          if (allowRecursiveErasure) {
            return const FlaxCodegenTypeRef('any', nullable: true);
          }
          throw StateError('Recursive generic callback bound: $type');
        }
        try {
          final bound =
              type.element.bound ??
              type.element.library!.typeProvider.objectQuestionType;
          return typeRef(
            bound,
            scalar: scalar,
            erasing: path,
            allowRecursiveErasure: allowRecursiveErasure,
          ).declaredAs(typeRef(type, forTypescript: true));
        } finally {
          path.remove(type.element);
        }
      }
      if (type is DynamicType) {
        return const FlaxCodegenTypeRef('any', nullable: true);
      }
      if (type is VoidType) return const FlaxCodegenTypeRef('void');
      if (type is FunctionType) {
        final typeParameters = [
          for (final parameter in type.typeParameters)
            FlaxCodegenGenericParameter(
              parameter.name!,
              typeRef(
                parameter.bound ??
                    parameter.library!.typeProvider.objectQuestionType,
                forTypescript: true,
              ),
              defaultType: typeRef(
                parameter.bound ??
                    parameter.library!.typeProvider.objectQuestionType,
                erasing: {parameter},
              ),
              genericIdentity: parameter,
            ),
        ];
        final parameters = [
          for (final (index, p) in type.formalParameters.indexed)
            FlaxCodegenParameterModel(
              name: p.name ?? 'p$index',
              type: forTypescript
                  ? typeRef(p.type, forTypescript: true)
                  : typeRef(
                      p.type,
                      allowRecursiveErasure: allowRecursiveErasure,
                    ).declaredAs(typeRef(p.type, forTypescript: true)),
              required: p.isRequired,
              positional: p.isPositional,
              defaultCode: 'null',
              snapshot: p.type is InterfaceType
                  ? _snapshotFor((p.type as InterfaceType).element)?.name
                  : null,
            ),
        ];
        final result = forTypescript
            ? typeRef(type.returnType, forTypescript: true)
            : typeRef(
                type.returnType,
                allowRecursiveErasure: allowRecursiveErasure,
              ).declaredAs(typeRef(type.returnType, forTypescript: true));
        const incoming = {
          'callback',
          'String',
          'bool',
          'int',
          'double',
          'num',
          'enum',
          'context',
          'widget',
          'object',
          'page',
          'data',
          'any',
          'iterable',
          'list',
          'map',
          'set',
          'future',
          'futureOr',
          'stream',
        };
        const outgoing = {
          'callback',
          'String',
          'bool',
          'int',
          'double',
          'num',
          'enum',
          'widget',
          'route',
          'object',
          'data',
          'any',
          'iterable',
          'list',
          'map',
          'set',
          'void',
          'future',
          'futureOr',
          'stream',
        };
        if (!forTypescript &&
            (parameters.any((p) => !incoming.contains(p.type.kind)) ||
                !outgoing.contains(result.kind))) {
          throw StateError('Unsupported callback signature: $type');
        }
        return FlaxCodegenTypeRef(
          'callback',
          nullable: nullable,
          parameters: parameters,
          result: result,
          typeParameters: typeParameters,
        );
      }
      if (type is! InterfaceType) {
        throw StateError('Unsupported binding type: $type');
      }
      if (!allowRecursiveErasure &&
          erasing != null &&
          type.typeArguments.any(containsErasedParameter)) {
        throw StateError('Recursive generic callback bound: $type');
      }
      final element = type.element;
      final name = element.name!;
      final snapshot = _snapshotFor(element);
      if (snapshot != null) {
        return FlaxCodegenTypeRef(
          'object',
          id: snapshot.id,
          name: snapshot.name,
          nullable: nullable,
        );
      }
      if (element.library.uri.toString() == 'dart:async' && name == 'Future') {
        return FlaxCodegenTypeRef(
          'future',
          item: typeRef(
            type.typeArguments.single,
            forTypescript: forTypescript,
            erasing: erasing,
            allowRecursiveErasure: allowRecursiveErasure,
          ),
          nullable: nullable,
        );
      }
      if (element.library.uri.toString() == 'dart:async' &&
          name == 'FutureOr') {
        usesFutureOr = true;
        return FlaxCodegenTypeRef(
          'futureOr',
          item: typeRef(
            type.typeArguments.single,
            forTypescript: forTypescript,
            erasing: erasing,
            allowRecursiveErasure: allowRecursiveErasure,
          ),
          nullable: nullable,
        );
      }
      if (element.library.uri.toString() == 'dart:async' && name == 'Stream') {
        final streamId = identity(element);
        final selected = _adaptations[streamId] == 'stream';
        if (selected) usesStream = true;
        if (selected && !types.containsKey(streamId)) {
          types[streamId] = FlaxCodegenNamedTypeModel(
            name: name,
            id: streamId,
            typeParameters: [
              for (final parameter in element.typeParameters)
                FlaxCodegenGenericParameter(
                  parameter.name!,
                  typeRef(
                    parameter.bound ??
                        element.library.typeProvider.objectQuestionType,
                    forTypescript: true,
                  ),
                  genericIdentity: parameter,
                ),
            ],
          );
        }
        return FlaxCodegenTypeRef(
          'stream',
          id: selected ? streamId : null,
          name: selected ? name : null,
          item: typeRef(
            type.typeArguments.single,
            forTypescript: forTypescript,
            erasing: erasing,
            allowRecursiveErasure: allowRecursiveErasure,
          ),
          nullable: nullable,
        );
      }
      if (element.library.isDartCore) {
        if (name == 'Object') {
          return FlaxCodegenTypeRef('any', nullable: nullable);
        }
        if (['String', 'bool', 'int', 'double', 'num'].contains(name)) {
          return FlaxCodegenTypeRef(name, nullable: nullable);
        }
        if ({'Iterable', 'List', 'Map', 'Set'}.contains(name)) {
          return FlaxCodegenTypeRef(
            switch (name) {
              'Iterable' => 'iterable',
              'List' => 'list',
              'Map' => 'map',
              _ => 'set',
            },
            nullable: nullable,
            item: typeRef(
              type.typeArguments.last,
              scalar: scalar,
              forTypescript: forTypescript,
              erasing: erasing,
              allowRecursiveErasure: allowRecursiveErasure,
            ),
            key: name == 'Map'
                ? typeRef(
                    type.typeArguments.first,
                    scalar: scalar,
                    forTypescript: forTypescript,
                    erasing: erasing,
                    allowRecursiveErasure: allowRecursiveErasure,
                  )
                : null,
          );
        }
        if (!_adaptations.containsKey(identity(element))) {
          throw StateError('Unsupported core type: $type');
        }
      }
      if (name == 'Widget' &&
          element.library.uri.toString() ==
              'package:flutter/src/widgets/framework.dart') {
        if (exports[name] != element) {
          throw StateError('Selected public libraries must export Widget');
        }
        usesWidget = true;
        return FlaxCodegenTypeRef('widget', nullable: nullable);
      }
      if (exports[name] != element) {
        throw StateError(
          '${config.library} must publicly export the referenced type $name',
        );
      }
      final id = identity(element);
      if (erasing != null && !_adaptations.containsKey(id)) {
        throw StateError('Unbound generic callback bound: $type');
      }
      final widgetInterface = _adaptations[id] == 'widgetInterface';
      if (widgetInterface) usesWidget = true;
      if (!types.containsKey(id)) {
        // Seed the identity before resolving recursive generic bounds.
        types[id] = FlaxCodegenNamedTypeModel(name: name, id: id);
        final typeParameters = [
          for (final parameter in element.typeParameters)
            FlaxCodegenGenericParameter(
              parameter.name!,
              typeRef(
                parameter.bound ??
                    element.library.typeProvider.objectQuestionType,
                forTypescript: true,
              ),
              genericIdentity: parameter,
            ),
        ];
        types[id] = FlaxCodegenNamedTypeModel(
          name: name,
          id: id,
          typeParameters: typeParameters,
          enumNames: element is EnumElement
              ? element.fields
                    .where((field) => field.isEnumConstant)
                    .map((field) => field.name!)
                    .toList()
              : [],
        );
      }
      return FlaxCodegenTypeRef(
        element is EnumElement
            ? 'enum'
            : widgetInterface
            ? 'widget'
            : _adaptations[id] ?? 'object',
        id: id,
        name: name,
        nullable: nullable,
        typeArguments: _argumentsByType[id] ?? const [],
        dartArguments: forTypescript
            ? const []
            : type.typeArguments
                  .map(
                    (t) => typeRef(
                      t,
                      erasing: erasing,
                      allowRecursiveErasure: allowRecursiveErasure,
                    ),
                  )
                  .toList(),
        tsArguments: forTypescript
            ? type.typeArguments
                  .map((t) => typeRef(t, forTypescript: true))
                  .toList()
            : const [],
        primitiveKinds: element is EnumElement
            ? const []
            : [
                for (final entry in {
                  'String': element.library.typeProvider.stringType,
                  'bool': element.library.typeProvider.boolType,
                  'int': element.library.typeProvider.intType,
                  'double': element.library.typeProvider.doubleType,
                  'num': element.library.typeProvider.numType,
                }.entries)
                  if (element.library.typeSystem.isSubtypeOf(entry.value, type))
                    entry.key,
              ],
      );
    }

    List<FlaxCodegenParameterModel> parameters(
      List<FormalParameterElement> actual,
      List<String> chosen,
      String member, {
      bool scalar = false,
      List<FormalParameterElement>? declared,
      List<String> data = const [],
      List<String> independentWidgetCallbacks = const [],
      bool allowRecursiveErasure = false,
      Map<String, List<String>> callbackSignatures = const {},
      Map<String, List<int>> callbackOptionalParameters = const {},
      Map<String, List<int>> callbackErrorParameters = const {},
      Map<String, List<int>> callbackScopedParameters = const {},
    }) {
      if (chosen.toSet().length != chosen.length) {
        throw StateError('Duplicate selected parameter: $member');
      }
      for (final name in chosen) {
        if (!actual.any((p) => p.name == name)) {
          throw StateError('Unknown selected parameter: $member.$name');
        }
      }
      if (independentWidgetCallbacks.toSet().length !=
              independentWidgetCallbacks.length ||
          independentWidgetCallbacks.any((name) => !chosen.contains(name))) {
        throw StateError(
          'Invalid independent Widget callback selection: $member',
        );
      }
      final result = <FlaxCodegenParameterModel>[];
      for (final parameter in actual) {
        if (!chosen.contains(parameter.name)) {
          if (parameter.isRequired || parameter.isPositional) {
            throw StateError(
              'Cannot omit required or positional parameter $member.${parameter.name}',
            );
          }
          continue;
        }
        final rawSignature =
            callbackSignatures['$member.${parameter.name}'] ??
            callbackSignatures['${member.split('.').last}.${parameter.name}'];
        final rawKey =
            callbackSignatures.containsKey('$member.${parameter.name}')
            ? '$member.${parameter.name}'
            : '${member.split('.').last}.${parameter.name}';
        final optional = callbackOptionalParameters[rawKey] ?? const <int>[];
        final errors = callbackErrorParameters[rawKey] ?? const <int>[];
        final scoped = callbackScopedParameters[rawKey] ?? const <int>[];
        if (optional.toSet().length != optional.length ||
            errors.toSet().length != errors.length ||
            scoped.toSet().length != scoped.length) {
          throw StateError('Duplicate callback parameter metadata: $rawKey');
        }
        final rawFunction =
            parameter.type is InterfaceType &&
            (parameter.type as InterfaceType).element.name == 'Function' &&
            (parameter.type as InterfaceType).element.library.isDartCore;
        if (rawSignature == null && rawFunction) {
          throw StateError(
            'Missing callback signature: $member.${parameter.name}',
          );
        }
        if (rawSignature == null &&
            (optional.isNotEmpty || errors.isNotEmpty)) {
          throw StateError(
            'Callback metadata requires a raw Function signature: $rawKey',
          );
        }
        if ({
          ...optional,
          ...errors,
          ...scoped,
        }.any((index) => index < 0 || index >= (rawSignature?.length ?? 0))) {
          if (rawSignature != null) {
            throw StateError('Invalid callback parameter metadata: $rawKey');
          }
        }
        var type = rawSignature == null
            ? typeRef(
                parameter.type,
                scalar: scalar,
                allowRecursiveErasure: allowRecursiveErasure,
              )
            : FlaxCodegenTypeRef(
                'callback',
                nullable:
                    parameter.type.nullabilitySuffix ==
                    NullabilitySuffix.question,
                parameters: [
                  for (final (index, name) in rawSignature.indexed)
                    FlaxCodegenParameterModel(
                      name: 'p$index',
                      type: typeRef(
                        _runtimeType(
                          name,
                          exports,
                          _runtimeTypeLibrary(exports),
                        ),
                      ),
                      required: !optional.contains(index),
                      positional: true,
                      defaultCode: 'null',
                      encodeKind: errors.contains(index) ? 'error' : null,
                      scoped: scoped.contains(index),
                    ),
                ],
                result: const FlaxCodegenTypeRef('void'),
              );
        if (rawSignature == null && scoped.isNotEmpty) {
          if (type.kind != 'callback' ||
              scoped.any(
                (index) =>
                    index < 0 ||
                    index >= type.parameters.length ||
                    type.parameters[index].type.kind != 'object',
              )) {
            throw StateError('Invalid callback parameter metadata: $rawKey');
          }
          type = FlaxCodegenTypeRef(
            type.kind,
            id: type.id,
            name: type.name,
            nullable: type.nullable,
            item: type.item,
            key: type.key,
            parameters: [
              for (final (index, callbackParameter) in type.parameters.indexed)
                FlaxCodegenParameterModel(
                  name: callbackParameter.name,
                  type: callbackParameter.type,
                  required: callbackParameter.required,
                  positional: callbackParameter.positional,
                  defaultCode: callbackParameter.defaultCode,
                  omitWhenAbsent: callbackParameter.omitWhenAbsent,
                  independentWidgetResult:
                      callbackParameter.independentWidgetResult,
                  snapshot: callbackParameter.snapshot,
                  encodeKind: callbackParameter.encodeKind,
                  scoped: scoped.contains(index),
                ),
            ],
            typeParameters: type.typeParameters,
            result: type.result,
            typeArguments: type.typeArguments,
            dartArguments: type.dartArguments,
            primitiveKinds: type.primitiveKinds,
            declaration: type.declaration,
            tsArguments: type.tsArguments,
          );
        }
        if (declared != null && rawSignature == null) {
          final original = declared.firstWhere((p) => p.name == parameter.name);
          type = type.declaredAs(typeRef(original.type, forTypescript: true));
        }
        if (data.contains(parameter.name)) {
          type = _dataType(type, '$member.${parameter.name}');
        }
        final independent = independentWidgetCallbacks.contains(parameter.name);
        if (independent &&
            (type.kind != 'callback' || type.result!.kind != 'widget')) {
          throw StateError(
            'Independent callbacks must return Widget or Widget?: $member.${parameter.name}',
          );
        }
        FormalParameterElement defaults = parameter.baseElement;
        while (!defaults.hasDefaultValue &&
            defaults is SuperFormalParameterElement &&
            defaults.superConstructorParameter != null) {
          defaults = defaults.superConstructorParameter!;
        }
        final constant = defaults.computeConstantValue();
        final callbackDefault =
            type.kind == 'callback' && constant?.toFunctionValue() != null;
        final hiddenDefault =
            !parameter.isRequired &&
            parameter.isNamed &&
            parameter.type.nullabilitySuffix != NullabilitySuffix.question &&
            !defaults.hasDefaultValue;
        // Preserve upstream sentinel identity as well as private callback defaults.
        final omitWhenAbsent =
            !parameter.isRequired &&
            (hiddenDefault ||
                callbackDefault ||
                constant?.toListValue() != null ||
                constant?.toMapValue() != null ||
                ({'object', 'any', 'data'}.contains(type.kind) &&
                    constant != null &&
                    !constant.isNull));
        result.add(
          FlaxCodegenParameterModel(
            name: parameter.name!,
            type: type,
            required: parameter.isRequired,
            positional: parameter.isPositional,
            omitWhenAbsent: omitWhenAbsent,
            independentWidgetResult: independent,
            defaultCode:
                parameter.isRequired ||
                    hiddenDefault ||
                    callbackDefault ||
                    (omitWhenAbsent &&
                        {
                          'object',
                          'any',
                          'data',
                          'iterable',
                          'list',
                          'map',
                          'set',
                        }.contains(type.kind))
                ? 'null'
                : _default(constant, type),
          ),
        );
      }
      return result;
    }

    for (final entry in config.classes.entries) {
      final element = exports[entry.key];
      if (element is! InterfaceElement ||
          (element is! ClassElement && element is! MixinElement)) {
        throw StateError(
          'Expected a publicly exported concrete class: ${entry.key}',
        );
      }
      final selection = _effectiveSelection(element, entry.value);
      if (element is MixinElement &&
          (selection.kind != 'object' ||
              selection.constructors.isNotEmpty ||
              selection.proxy != null)) {
        throw StateError(
          'Mixins require a non-constructible object selection: ${entry.key}',
        );
      }
      _validateDataTargets(selection, entry.key);
      if (element.typeParameters.isNotEmpty &&
          !selection.genericScalar &&
          selection.deferredFactories.isEmpty &&
          selection.typeArguments.length != element.typeParameters.length) {
        throw StateError(
          'Explicit runtime type arguments required: ${entry.key}',
        );
      }
      final runtimeArguments = [
        for (final name in selection.typeArguments)
          _runtimeType(name, exports, element.library),
      ];
      if (selection.deferredFactories.isEmpty) {
        _checkBounds(
          element.typeParameters,
          runtimeArguments,
          element.library,
          selection.genericScalar,
        );
      }
      final actualType = selection.typeArguments.isEmpty
          ? element.thisType
          : element.instantiate(
              typeArguments: runtimeArguments,
              nullabilitySuffix: NullabilitySuffix.none,
            );
      final genericParameters = [
        for (var i = 0; i < element.typeParameters.length; i++)
          FlaxCodegenGenericParameter(
            element.typeParameters[i].name!,
            selection.genericScalar
                ? const FlaxCodegenTypeRef('scalar')
                : typeRef(
                    element.typeParameters[i].bound ??
                        element.library.typeProvider.objectQuestionType,
                    forTypescript: true,
                  ),
            defaultType: selection.genericScalar
                ? const FlaxCodegenTypeRef('scalar')
                : typeRef(
                    runtimeArguments.length > i
                        ? runtimeArguments[i]
                        : element.typeParameters[i].bound ??
                              element.library.typeProvider.objectQuestionType,
                    erasing: {element.typeParameters[i]},
                  ),
            genericIdentity: element.typeParameters[i],
          ),
      ];
      final isWidget = element.allSupertypes.any(
        (type) =>
            type.element.name == 'Widget' &&
            type.element.library.uri.toString() ==
                'package:flutter/src/widgets/framework.dart',
      );
      if (selection.kind == 'widgetInterface') {
        if (!isWidget ||
            element is! ClassElement ||
            !element.isAbstract ||
            element.isBase ||
            element.isFinal ||
            element.isSealed ||
            element.typeParameters.isNotEmpty) {
          throw StateError(
            'Expected an implementable non-generic Widget interface: ${entry.key}',
          );
        }
        final widget = exports['Widget'] as InterfaceElement;
        final supplied = {
          widget,
          ...widget.allSupertypes.map((t) => t.element),
        };
        for (final declaration in [
          element,
          ...element.allSupertypes.map((t) => t.element),
        ]) {
          if (supplied.contains(declaration)) {
            continue;
          }
          if (declaration.methods.any((m) => !m.isStatic && !m.isPrivate) ||
              declaration.setters.any((s) => !s.isStatic && !s.isPrivate) ||
              declaration.getters.any(
                (g) =>
                    !g.isStatic &&
                    !g.isPrivate &&
                    !selection.getters.contains(g.name),
              )) {
            throw StateError(
              'Select every readonly configuration getter; other interface members are unsupported: ${entry.key}',
            );
          }
        }
      }
      final widgetInterfaces = <FlaxCodegenTypeRef>[];
      final widgetGetters = <FlaxCodegenGetterModel>[];
      for (final name in selection.widgetInterfaces) {
        final contract = exports[name];
        if (!isWidget ||
            selection.kind != null ||
            contract is! ClassElement ||
            _adaptations[identity(contract)] != 'widgetInterface' ||
            !element.library.typeSystem.isSubtypeOf(
              actualType,
              contract.thisType,
            )) {
          throw StateError(
            'Incompatible selected Widget interface: ${entry.key}.$name',
          );
        }
        widgetInterfaces.add(typeRef(contract.thisType));
        for (final getter in _selections[identity(contract)]!.getters) {
          if (widgetGetters.any((g) => g.name == getter)) continue;
          widgetGetters.add(
            FlaxCodegenGetterModel(
              getter,
              typeRef(
                actualType.lookUpGetter(getter, element.library)!.returnType,
              ),
            ),
          );
        }
      }
      final constructors = <FlaxCodegenConstructorModel>[];
      if (selection.kind != null &&
          !{
            'context',
            'state',
            'route',
            'page',
            'object',
            'widgetInterface',
            'stream',
          }.contains(selection.kind)) {
        throw StateError('Unknown type adaptation: ${selection.kind}');
      }
      if ({'context', 'state'}.contains(selection.kind) &&
          selection.constructors.isNotEmpty) {
        throw StateError(
          'Adapted types cannot expose constructors: ${entry.key}',
        );
      }
      if (selection.kind == 'context' &&
          identity(element) !=
              'package:flutter/src/widgets/framework.dart::BuildContext') {
        throw StateError(
          'The context adaptation requires Flutter BuildContext',
        );
      }
      final getters = <FlaxCodegenGetterModel>[];
      if ({'context', 'route', 'page'}.contains(selection.kind) &&
          selection.methods.isNotEmpty) {
        throw StateError(
          'Adapted types currently expose only selected getters',
        );
      }
      for (final name in selection.getters) {
        if (selection.pageAdapter case final adapter?) {
          final library = await session.getLibraryByUri(adapter.library);
          final function = library is LibraryElementResult
              ? library.element.exportNamespace.get2(adapter.function)
              : null;
          if (function is! TopLevelFunctionElement ||
              function.isPrivate ||
              function.typeParameters.isNotEmpty ||
              function.formalParameters.length != 1 ||
              !function.formalParameters.single.isRequiredPositional ||
              function.formalParameters.single.type is! InterfaceType ||
              (function.formalParameters.single.type as InterfaceType)
                      .element !=
                  element ||
              function.returnType is! InterfaceType ||
              identity((function.returnType as InterfaceType).element) !=
                  'package:flax/bindings.dart::FlaxPageRoute') {
            throw StateError(
              'Page adapter must accept the selected Page and return FlaxPageRoute: ${adapter.function}',
            );
          }
        }
        if (getters.any((g) => g.name == name)) {
          throw StateError('Duplicate getter: $name');
        }
        final getter = actualType.lookUpGetter(name, element.library);
        if (getter == null || getter.isStatic || name.startsWith('_')) {
          throw StateError(
            'Unknown public instance getter: ${entry.key}.$name',
          );
        }
        var type = typeRef(getter.returnType, scalar: selection.genericScalar)
            .declaredAs(
              typeRef(
                element.thisType
                    .lookUpGetter(name, element.library)!
                    .returnType,
                forTypescript: true,
              ),
            );
        if (selection.data.getters.contains(name)) {
          type = _dataType(type, '${entry.key}.$name');
        }
        if (!{
          'String',
          'bool',
          'int',
          'double',
          'num',
          'enum',
          'data',
          'any',
          'iterable',
          'list',
          'map',
          'set',
          'scalar',
          'object',
          'future',
          'futureOr',
          'stream',
          'callback',
          'widget',
        }.contains(type.kind)) {
          throw StateError('Unsupported getter type: ${getter.returnType}');
        }
        final errorGetter = selection.errorGetters.contains(name);
        if (errorGetter && type.kind != 'any') {
          throw StateError(
            'Error getters must have Object or dynamic type: ${entry.key}.$name',
          );
        }
        getters.add(
          FlaxCodegenGetterModel(
            name,
            type,
            encodeKind: errorGetter ? 'error' : null,
          ),
        );
      }
      if (getters.isNotEmpty &&
          selection.kind == null &&
          (isWidget ||
              getters.any(
                (g) => !selection.constructors.values.every(
                  (params) => params.contains(g.name),
                ),
              ))) {
        throw StateError('Value getters require selected constructor fields');
      }
      final setters = <FlaxCodegenGetterModel>[];
      for (final name in selection.setters) {
        final setter = actualType.lookUpSetter(name, element.library);
        if (selection.kind != 'object' ||
            setter == null ||
            setter.isStatic ||
            setter.isPrivate ||
            setters.any((s) => s.name == name)) {
          throw StateError(
            'Invalid selected object setter: ${entry.key}.$name',
          );
        }
        final type = typeRef(setter.formalParameters.single.type).declaredAs(
          typeRef(
            element.thisType
                .lookUpSetter(name, element.library)!
                .formalParameters
                .single
                .type,
            forTypescript: true,
          ),
        );
        if (!{
          'String',
          'bool',
          'int',
          'double',
          'num',
          'enum',
          'data',
          'any',
          'iterable',
          'list',
          'map',
          'set',
          'object',
          'callback',
        }.contains(type.kind)) {
          throw StateError('Unsupported setter type: $name');
        }
        setters.add(FlaxCodegenGetterModel(name, type));
      }
      final methods = <FlaxCodegenMethodModel>[];
      final selectedMethods = {
        ...selection.methods,
        ...selection.instanceMethods,
      };
      if (selectedMethods.length !=
          selection.methods.length + selection.instanceMethods.length) {
        throw StateError('Duplicate method selection');
      }
      if (selection.instanceMethods.isNotEmpty &&
          !{'state', 'object', 'stream'}.contains(selection.kind)) {
        throw StateError(
          'Instance methods require a State or object adaptation',
        );
      }
      if ({'state', 'route', 'page'}.contains(selection.kind) &&
          ![element.thisType, ...element.allSupertypes].any(
            (t) =>
                identity(t.element) ==
                (selection.kind == 'state'
                    ? 'package:flutter/src/widgets/framework.dart::State'
                    : 'package:flutter/src/widgets/navigator.dart::${selection.kind == 'page' ? 'Page' : 'Route'}'),
          )) {
        throw StateError(
          'The adaptation requires a real Flutter State, Route or Page',
        );
      }
      for (final chosen in selectedMethods.entries) {
        if (chosen.value.toSet().length != chosen.value.length) {
          throw StateError(
            'Duplicate selected parameter: ${entry.key}.${chosen.key}',
          );
        }
        final instance = selection.instanceMethods.containsKey(chosen.key);
        final method = instance
            ? actualType.lookUpMethod(chosen.key, element.library)
            : element.getMethod(chosen.key);
        if (method == null || method.isStatic == instance || method.isPrivate) {
          throw StateError(
            'Expected a public ${instance ? 'instance' : 'static'} method: ${entry.key}.${chosen.key}',
          );
        }
        final selectedParameters = chosen.value
            .map((name) {
              if (method.formalParameters.any(
                (parameter) => parameter.name == name,
              )) {
                return name;
              }
              for (final parent in element.allSupertypes) {
                final declaration = parent.lookUpMethod(
                  chosen.key,
                  element.library,
                );
                if (declaration == null) continue;
                final index = declaration.formalParameters.indexWhere(
                  (parameter) => parameter.name == name,
                );
                if (index >= 0 && index < method.formalParameters.length) {
                  return method.formalParameters[index].name!;
                }
              }
              return name;
            })
            .toSet()
            .toList();
        final configuredTypeArgs =
            selection.methodTypeArguments[chosen.key] ?? const <String>[];
        final erasedTypeArgs =
            configuredTypeArgs.isEmpty &&
                selection.eraseGenerics &&
                method.typeParameters.isNotEmpty
            ? [
                for (final parameter in method.typeParameters)
                  (parameter.bound ??
                          element.library.typeProvider.objectQuestionType)
                      .getDisplayString(),
              ]
            : const <String>[];
        final typeArgs = configuredTypeArgs.isNotEmpty
            ? configuredTypeArgs
            : erasedTypeArgs;
        final deferredFactory = selection.deferredFactories.contains(
          chosen.key,
        );
        if (deferredFactory &&
            (instance ||
                method.typeParameters.isEmpty ||
                typeArgs.isNotEmpty ||
                method.baseElement.fragments.any(
                  (fragment) => fragment.isAsynchronous || fragment.isGenerator,
                ))) {
          throw StateError(
            'Deferred factories require a synchronous generic static method: ${entry.key}.${chosen.key}',
          );
        }
        final runtimeMethodArguments = [
          for (final name in typeArgs)
            _runtimeType(name, exports, element.library),
        ];
        if (!deferredFactory) {
          _checkBounds(
            method.typeParameters,
            runtimeMethodArguments,
            element.library,
            false,
          );
        }
        final signature = deferredFactory
            ? method.type
            : typeArgs.isEmpty
            ? method.type
            : method.type.instantiate(runtimeMethodArguments);
        final originalMethod = instance
            ? element.thisType.lookUpMethod(chosen.key, element.library)!
            : method;
        var result = typeRef(
          signature.returnType,
          allowRecursiveErasure: deferredFactory,
        ).declaredAs(typeRef(originalMethod.returnType, forTypescript: true));
        if (selection.data.results.contains(chosen.key)) {
          result = _dataType(result, '${entry.key}.${chosen.key} result');
        }
        if (selection.kind == 'object' &&
            result.kind == 'void' &&
            method.baseElement.fragments.any(
              (f) => f.isAsynchronous || f.isGenerator,
            )) {
          throw StateError(
            'Object void methods must execute synchronously: ${chosen.key}',
          );
        }

        const results = {
          'String',
          'bool',
          'int',
          'double',
          'num',
          'enum',
          'void',
          'data',
          'any',
          'iterable',
          'list',
          'map',
          'set',
          'state',
          'object',
          'future',
          'futureOr',
          'stream',
          'callback',
          'widget',
        };
        if (!results.contains(result.kind)) {
          throw StateError(
            'Unsupported method result: ${signature.returnType}',
          );
        }
        final args = parameters(
          signature.formalParameters,
          selectedParameters,
          '${entry.key}.${chosen.key}',
          declared: originalMethod.formalParameters,
          data: selection.data.methods[chosen.key] ?? const [],
          allowRecursiveErasure: deferredFactory,
          callbackSignatures: selection.callbackSignatures,
          callbackOptionalParameters: selection.callbackOptionalParameters,
          callbackErrorParameters: selection.callbackErrorParameters,
          callbackScopedParameters: selection.callbackScopedParameters,
        );
        if (args.any(
          (p) => !{
            'String',
            'bool',
            'int',
            'double',
            'num',
            'enum',
            'context',
            'callback',
            'data',
            'any',
            'iterable',
            'list',
            'map',
            'set',
            'route',
            'object',
            'widget',
            'stream',
            'future',
            'futureOr',
          }.contains(p.type.kind),
        )) {
          throw StateError('Unsupported method arguments: ${chosen.key}');
        }
        if (args.any(
          (p) =>
              p.type.kind == 'callback' &&
              (p.type.result!.kind == 'route' ||
                  p.type.parameters.any((a) => a.type.kind == 'context')),
        )) {
          throw StateError(
            'Method callbacks require synchronous data arguments and results',
          );
        }
        methods.add(
          FlaxCodegenMethodModel(
            chosen.key,
            args,
            result,
            instance: instance,
            typeArguments: typeArgs,
            typeParameters: [
              for (var i = 0; i < originalMethod.typeParameters.length; i++)
                FlaxCodegenGenericParameter(
                  originalMethod.typeParameters[i].name!,
                  typeRef(
                    originalMethod.typeParameters[i].bound ??
                        element.library.typeProvider.objectQuestionType,
                    forTypescript: true,
                  ),
                  defaultType: typeRef(
                    deferredFactory
                        ? originalMethod.typeParameters[i].bound ??
                              element.library.typeProvider.objectQuestionType
                        : _runtimeType(typeArgs[i], exports, element.library),
                    erasing: deferredFactory
                        ? {originalMethod.typeParameters[i]}
                        : null,
                    allowRecursiveErasure: deferredFactory,
                  ),
                  genericIdentity: originalMethod.typeParameters[i],
                ),
            ],
            startsRoute: selection.startsRoute.contains(chosen.key),
            deferredFactory: deferredFactory,
          ),
        );
        final model = methods.last;
        final dataParameters = _dataParameters([
          result,
          ...args.map((p) => p.type),
        ]);
        for (var i = 0; i < model.typeParameters.length; i++) {
          if (dataParameters.contains(model.typeParameters[i].name)) {
            model.typeParameters[i] = _dataGeneric(model.typeParameters[i]);
          }
        }
      }
      if (selection.startsRoute.any(
            (name) => !selection.instanceMethods.containsKey(name),
          ) ||
          selection.methodTypeArguments.keys.any(
            (name) => !selectedMethods.containsKey(name),
          ) ||
          selection.deferredFactories.toSet().length !=
              selection.deferredFactories.length ||
          selection.deferredFactories.any(
            (name) => !selection.methods.containsKey(name),
          )) {
        throw StateError('Unknown method adaptation');
      }
      if (selection.kind == 'object') {
        final disposer = methods
            .where((m) => m.instance && m.name == selection.disposeMethod)
            .firstOrNull;
        if (selection.disposeMethod != null &&
            (disposer == null ||
                disposer.parameters.isNotEmpty ||
                disposer.result.kind != 'void')) {
          throw StateError(
            'Objects require a selected synchronous zero-argument void disposal method',
          );
        }
        final paired = <String>{};
        for (final pair in selection.listenerPairs.entries) {
          for (final name in [pair.key, pair.value]) {
            final method = methods
                .where((m) => m.instance && m.name == name)
                .firstOrNull;
            if (!paired.add(name) ||
                name == selection.disposeMethod ||
                method == null ||
                method.result.kind != 'void' ||
                method.parameters.length != 1) {
              throw StateError('Invalid listener pair method: $name');
            }
            final param = method.parameters.single;
            if (!param.required ||
                !param.positional ||
                param.type.kind != 'callback' ||
                param.type.nullable ||
                param.type.parameters.isNotEmpty ||
                param.type.result!.kind != 'void') {
              throw StateError(
                'Listener pairs require one non-null VoidCallback: $name',
              );
            }
          }
        }
      } else if (selection.disposeMethod != null ||
          selection.listenerPairs.isNotEmpty) {
        throw StateError(
          'Disposal and listener pairs require an object adaptation',
        );
      }
      final staticGetters = <FlaxCodegenGetterModel>[];
      for (final name in selection.staticGetters) {
        final getter = element.getGetter(name);
        if (getter == null ||
            !getter.isStatic ||
            getter.isPrivate ||
            getter.variable.setter != null ||
            staticGetters.any((g) => g.name == name) ||
            selection.constructors.containsKey(name) ||
            selectedMethods.containsKey(name)) {
          throw StateError('Invalid static readonly field: ${entry.key}.$name');
        }
        final returned = getter.returnType;
        final type =
            returned is InterfaceType &&
                returned.element.isPrivate &&
                element.library.typeSystem.isSubtypeOf(returned, actualType)
            ? typeRef(actualType)
            : typeRef(returned);
        staticGetters.add(FlaxCodegenGetterModel(name, type));
      }
      if (((!isWidget || selection.kind != null) &&
              selection.independentWidgetCallbacks.isNotEmpty) ||
          selection.independentWidgetCallbacks.keys.any(
            (name) => !selection.constructors.containsKey(name),
          )) {
        throw StateError(
          'Independent callbacks require selected Widget constructors: ${entry.key}',
        );
      }
      for (final chosen in entry.value.constructors.entries) {
        final constructor = actualType.constructors
            .where(
              (ctor) => (ctor.name == 'new' ? '' : ctor.name) == chosen.key,
            )
            .firstOrNull;
        if (constructor == null ||
            (element is ClassElement &&
                element.isAbstract &&
                !constructor.isFactory &&
                selection.proxy != 'extends')) {
          throw StateError('Unknown constructor: ${entry.key}.${chosen.key}');
        }
        constructors.add(
          FlaxCodegenConstructorModel(
            chosen.key,
            parameters(
              constructor.formalParameters,
              chosen.value,
              '${entry.key}.${chosen.key}',
              scalar: selection.genericScalar,
              data: selection.data.constructors[chosen.key] ?? const [],
              independentWidgetCallbacks:
                  selection.independentWidgetCallbacks[chosen.key] ?? const [],
              declared: element.thisType.constructors
                  .firstWhere((c) => c.name == constructor.name)
                  .formalParameters,
              callbackSignatures: selection.callbackSignatures,
              callbackOptionalParameters: selection.callbackOptionalParameters,
              callbackErrorParameters: selection.callbackErrorParameters,
              callbackScopedParameters: selection.callbackScopedParameters,
            ),
          ),
        );
        if (constructors.last.parameters.any(
          (p) => p.type.kind == 'context' || p.type.kind == 'void',
        )) {
          throw StateError('Context inputs are currently callback-only');
        }
      }
      if (!isWidget &&
          !{'route', 'page', 'object', 'stream'}.contains(selection.kind) &&
          constructors.any(
            (c) => c.parameters.any((p) => p.type.kind == 'callback'),
          )) {
        throw StateError(
          'Stored callbacks currently require a mounted Widget owner',
        );
      }
      if (getters.any(
        (g) => {'kind', 'type', 'ctor', 'args'}.contains(g.name),
      )) {
        throw StateError('Getter conflicts with a descriptor field');
      }
      if ((selection.proxyOverrides.isNotEmpty ||
              selection.proxySuper.isNotEmpty) &&
          selection.proxy != 'host') {
        throw StateError(
          'Concrete overrides and direct super calls require a host proxy',
        );
      }
      FlaxCodegenProxyModel? proxy;
      if (selection.proxy != null) {
        if (element is! ClassElement) {
          throw StateError('Only classes support proxies');
        }
        if (selection.kind != 'object' ||
            !{'extends', 'implements', 'host'}.contains(selection.proxy) ||
            !element.isAbstract) {
          throw StateError(
            'Proxies require an abstract object class and extends/implements',
          );
        }
        if (element.isFinal ||
            element.isSealed ||
            (selection.proxy != 'implements' && element.isInterface) ||
            (selection.proxy == 'implements' && element.isBase)) {
          throw StateError('Dart modifiers forbid this proxy');
        }
        if (selection.proxy == 'extends' && constructors.length != 1) {
          throw StateError('An extends proxy selects exactly one constructor');
        }
        if (selection.proxy == 'implements' &&
            constructors.any((constructor) {
              final name = constructor.name.isEmpty ? 'new' : constructor.name;
              return !actualType.constructors
                  .firstWhere((c) => c.name == name)
                  .isFactory;
            })) {
          throw StateError(
            'An implements proxy can expose only factory constructors',
          );
        }
        if (selection.proxy == 'extends' &&
            actualType.constructors
                .firstWhere(
                  (c) =>
                      (c.name == 'new' ? '' : c.name) ==
                      constructors.single.name,
                )
                .isFactory) {
          throw StateError('A proxy needs a generative super constructor');
        }
        if (selection.proxy == 'host' && element.isBase) {
          throw StateError('Host mixins on base classes are not supported');
        }
        if (selection.proxy == 'host' && constructors.isNotEmpty) {
          throw StateError(
            'Host proxies are mixins and do not select constructors',
          );
        }
        for (final names in [selection.proxyOverrides, selection.proxySuper]) {
          if (names.toSet().length != names.length) {
            throw StateError('Duplicate proxy selection');
          }
          for (final name in names) {
            final method = actualType.lookUpMethod(name, element.library);
            if (method == null ||
                method.isAbstract ||
                method.isStatic ||
                method.isPrivate ||
                method.metadata.hasNonVirtual ||
                selection.proxy == 'implements') {
              throw StateError('Invalid concrete proxy method: $name');
            }
          }
        }
        final hierarchy = [actualType, ...actualType.allSupertypes]
            .where(
              (t) =>
                  !(t.element.library.isDartCore && t.element.name == 'Object'),
            )
            .toList();
        final proxyGetters = <FlaxCodegenGetterModel>[];
        final proxySetters = <FlaxCodegenGetterModel>[];
        for (final setter in [false, true]) {
          final names = {
            for (final t in hierarchy)
              for (final accessor in setter ? t.setters : t.getters)
                if (!accessor.isStatic &&
                    (!accessor.isPrivate ||
                        accessor.isAbstract ||
                        selection.proxy == 'implements'))
                  accessor.name!.replaceFirst(RegExp(r'=$'), ''),
          };
          for (final name in names) {
            final accessor = setter
                ? actualType.lookUpSetter(name, element.library)
                : actualType.lookUpGetter(name, element.library);
            if (accessor != null &&
                selection.proxy != 'implements' &&
                !accessor.isAbstract) {
              continue;
            }
            if (accessor == null || accessor.isPrivate) {
              throw StateError('Proxy properties must be public: $name');
            }
            if (selection.proxy == 'host') {
              throw StateError('Host proxy accessors are not supported: $name');
            }
            final declared = setter
                ? element.thisType.lookUpSetter(name, element.library)!
                : element.thisType.lookUpGetter(name, element.library)!;
            final actual = setter
                ? accessor.formalParameters.single.type
                : accessor.returnType;
            final declaration = setter
                ? declared.formalParameters.single.type
                : declared.returnType;
            final type = typeRef(actual)
                .declaredAs(typeRef(declaration, forTypescript: true));
            (setter ? proxySetters : proxyGetters).add(
              FlaxCodegenGetterModel(name, type),
            );
          }
        }
        if (selection.proxy == 'host' &&
            hierarchy.any(
              (t) => t.methods.any(
                (m) => {'flaxInvoke', 'flaxSuper'}.contains(m.name),
              ),
            )) {
          throw StateError('Host proxy dispatch member name collision');
        }
        final proxyMethods = <FlaxCodegenMethodModel>[];
        for (final name in {
          for (final t in hierarchy)
            ...t.methods.where((m) => !m.isStatic).map((m) => m.name!),
        }) {
          final method = actualType.lookUpMethod(name, element.library)!;
          if (selection.proxy != 'implements' &&
              !method.isAbstract &&
              !selection.proxyOverrides.contains(name)) {
            continue;
          }
          if (method.isPrivate || method.isOperator) {
            throw StateError(
              'Proxy methods require public non-operator signatures: $name',
            );
          }
          final callback = typeRef(method.type);
          final declaredMethod = element.thisType.lookUpMethod(
            name,
            element.library,
          )!;
          final result = callback.result!.declaredAs(
            typeRef(declaredMethod.returnType, forTypescript: true),
          );
          if ((selection.proxy == 'host' &&
                  {'future', 'stream'}.contains(result.kind)) ||
              (selection.proxy != 'host' &&
                  {'widget', 'route'}.contains(result.kind))) {
            throw StateError('Unsupported proxy result: $name');
          }
          proxyMethods.add(
            FlaxCodegenMethodModel(
              name,
              parameters(
                method.formalParameters,
                method.formalParameters.map((p) => p.name!).toList(),
                '${entry.key}.$name',
                declared: declaredMethod.formalParameters,
              ),
              result,
              typeParameters: callback.typeParameters,
              mustCallSuper: _requiresSuper(element, name),
              instance: true,
            ),
          );
        }
        if (selection.proxySuper.any(
          (name) => !proxyMethods.any((m) => m.name == name),
        )) {
          throw StateError('Super calls must select an overridden method');
        }
        if (selection.proxy == 'host' &&
            proxyMethods.any(
              (m) => m.mustCallSuper && !selection.proxySuper.contains(m.name),
            )) {
          throw StateError(
            'Required super calls must have a selected parent entry',
          );
        }
        proxy = FlaxCodegenProxyModel(
          selection.proxy!,
          proxyMethods,
          superMethods: selection.proxySuper,
          getters: proxyGetters,
          setters: proxySetters,
        );
      }
      final dataParameters = _dataParameters([
        for (final ctor in constructors) ...ctor.parameters.map((p) => p.type),
        for (final getter in getters) getter.type,
      ]);
      for (final method in methods) {
        dataParameters.addAll(
          _dataParameters([
            method.result,
            ...method.parameters.map((p) => p.type),
          ]).difference(method.typeParameters.map((p) => p.name).toSet()),
        );
      }
      for (var i = 0; i < genericParameters.length; i++) {
        if (dataParameters.contains(genericParameters[i].name)) {
          genericParameters[i] = _dataGeneric(genericParameters[i]);
        }
      }
      classes.add(
        FlaxCodegenClassModel(
          name: entry.key,
          id: identity(element),
          kind:
              selection.kind ??
              (constructors.isEmpty
                  ? 'members'
                  : isWidget
                  ? 'widget'
                  : 'object'),
          constructors: constructors,
          supertypes: element.allSupertypes
              .map((type) => identity(type.element))
              .toList(),
          superTypes: [
            if (selection.kind == 'widgetInterface')
              for (final parent in element.allSupertypes)
                if (_adaptations[identity(parent.element)] == 'widgetInterface')
                  typeRef(parent)
                      .declaredAs(typeRef(parent, forTypescript: true)),
            if (!isWidget &&
                !{'context', 'state', 'members'}.contains(selection.kind))
              for (final parent in element.thisType.allSupertypes)
                if (!parent.isDartCoreObject &&
                    exports[parent.element.name] == parent.element &&
                    _adaptations.containsKey(identity(parent.element)) &&
                    (!{'route', 'page'}.contains(selection.kind) ||
                        _adaptations[identity(parent.element)] ==
                            selection.kind))
                  typeRef(parent)
                      .declaredAs(typeRef(parent, forTypescript: true)),
          ],
          genericScalar: entry.value.genericScalar,
          asyncIterableFactory: selection.asyncIterableFactory,
          widgetInterfaces: widgetInterfaces,
          widgetGetters: widgetGetters,
          jsName: selection.jsName,
          typeParameters: genericParameters,
          proxy: proxy,
          typeArguments: selection.typeArguments,
          getters: getters,
          methods: methods,
          pageAdapter: selection.pageAdapter,
          setters: setters,
          disposeMethod: selection.disposeMethod,
          listenerPairs: selection.listenerPairs,
          staticGetters: staticGetters,
        ),
      );
    }
    final functions = <FlaxCodegenFunctionModel>[];
    for (final entry in config.functions.entries) {
      final function = exports[entry.key];
      if (function is! TopLevelFunctionElement || function.isPrivate) {
        throw StateError('Expected a public top-level function: ${entry.key}');
      }
      final selection = entry.value;
      final typeArguments = [
        for (final name in selection.typeArguments)
          _runtimeType(name, exports, function.library),
      ];
      _checkBounds(
        function.typeParameters,
        typeArguments,
        function.library,
        false,
      );
      final signature = typeArguments.isEmpty
          ? function.type
          : function.type.instantiate(typeArguments);
      var result = typeRef(signature.returnType)
          .declaredAs(typeRef(function.returnType, forTypescript: true));
      if (selection.dataResult) {
        result = _dataType(result, '${entry.key} result');
      }
      if (result.kind == 'void' &&
          function.fragments.any((f) => f.isAsynchronous || f.isGenerator)) {
        throw StateError(
          'Top-level void functions must execute synchronously: ${entry.key}',
        );
      }
      if (selection.dataParameters.toSet().length !=
              selection.dataParameters.length ||
          selection.dataParameters.any(
            (p) => !selection.parameters.contains(p),
          )) {
        throw StateError('Invalid function data parameters: ${entry.key}');
      }
      final args = parameters(
        signature.formalParameters,
        selection.parameters,
        entry.key,
        declared: function.formalParameters,
        data: selection.dataParameters,
      );
      final route = selection.route;
      if (route != null) {
        final context = args.where((p) => p.name == route.context).firstOrNull;
        final root = args
            .where((p) => p.name == route.rootNavigator)
            .firstOrNull;
        if (result.kind != 'future' ||
            result.nullable ||
            function.fragments.any((f) => f.isAsynchronous || f.isGenerator) ||
            context?.type.kind != 'context' ||
            context!.type.nullable ||
            root?.type.kind != 'bool' ||
            root!.type.nullable ||
            route.builders.isEmpty ||
            route.builders.toSet().length != route.builders.length) {
          throw StateError('Invalid Route function signature: ${entry.key}');
        }
        for (final name in route.builders) {
          final type = args.where((p) => p.name == name).firstOrNull?.type;
          if (type == null ||
              type.kind != 'callback' ||
              type.nullable ||
              type.result!.kind != 'widget' ||
              type.result!.nullable ||
              type.parameters.length != 1 ||
              type.parameters.single.type.kind != 'context' ||
              type.parameters.single.type.nullable) {
            throw StateError(
              'Route functions require a non-null WidgetBuilder: $name',
            );
          }
        }
      }
      bool needsWidgetOwner(FlaxCodegenTypeRef type) => type.kind == 'callback'
          ? type.result!.kind == 'route' ||
                type.parameters.any((p) => p.type.kind == 'context')
          : (type.item != null && needsWidgetOwner(type.item!)) ||
                (type.key != null && needsWidgetOwner(type.key!));
      for (final p in args) {
        if ({
              'page',
              'state',
              'future',
              'stream',
              'route',
            }.contains(p.type.kind) ||
            (p.type.containsWidget &&
                !{'widget', 'callback'}.contains(p.type.kind)) ||
            (needsWidgetOwner(p.type) &&
                !(route?.builders.contains(p.name) ?? false))) {
          throw StateError(
            'Unsupported function input: ${entry.key}.${p.name}',
          );
        }
      }
      final dataParameters = _dataParameters([
        result,
        ...args.map((p) => p.type),
      ]);
      final generics = [
        for (var i = 0; i < function.typeParameters.length; i++)
          FlaxCodegenGenericParameter(
            function.typeParameters[i].name!,
            typeRef(
              function.typeParameters[i].bound ??
                  function.library.typeProvider.objectQuestionType,
              forTypescript: true,
            ),
            defaultType: typeRef(typeArguments[i]),
            genericIdentity: function.typeParameters[i],
          ),
      ];
      for (var i = 0; i < generics.length; i++) {
        if (dataParameters.contains(generics[i].name)) {
          generics[i] = _dataGeneric(generics[i]);
        }
      }
      functions.add(
        FlaxCodegenFunctionModel(
          '${function.library.uri}::${function.name}',
          FlaxCodegenMethodModel(
            entry.key,
            args,
            result,
            typeArguments: selection.typeArguments,
            typeParameters: generics,
          ),
          route: route,
        ),
      );
    }
    final module = FlaxCodegenModuleModel(
      name: config.name,
      library: config.library,
      jsPackage: config.jsPackage,
      dartOutput: config.dartOutput,
      tsOutput: config.tsOutput,
      classes: classes,
      functions: functions,
      types: types.values.toList(),
      snapshots: snapshots,
      typeLibraries: {
        if (usesFutureOr) 'FutureOr': 'dart:async',
        if (usesStream) 'Stream': 'dart:async',
        for (final name in {
          if (usesWidget || classes.any((c) => c.kind == 'widget')) 'Widget',
          if (classes.any((c) => c.kind == 'route')) 'Route',
          if (classes.any((c) => c.kind == 'page')) ...['Page', 'BuildContext'],
          ...classes.map((c) => c.name),
          ...functions.map((f) => f.call.name),
          ...types.values.map((t) => t.name),
          ...snapshots.map((s) => s.name),
        })
          name: usesStream && name == 'Stream'
              ? 'dart:async'
              : publicLibraries[name]!,
      },
    );
    module.validate();
    return module;
  }

  DartType _runtimeType(
    String source,
    Map<String, Element> exports,
    LibraryElement library,
  ) {
    final nullable = source.endsWith('?');
    final name = nullable ? source.substring(0, source.length - 1) : source;
    final provider = library.typeProvider;
    final primitive = {
      'Object': provider.objectType,
      'String': provider.stringType,
      'bool': provider.boolType,
      'int': provider.intType,
      'double': provider.doubleType,
      'num': provider.numType,
    }[name];
    final element = primitive?.element ?? exports[name];
    if (element is! InterfaceElement || element.typeParameters.isNotEmpty) {
      throw StateError(
        'Runtime type arguments require a concrete selected type: $source',
      );
    }
    if (primitive == null && !_adaptations.containsKey(identity(element))) {
      throw StateError('Unbound runtime type argument: $source');
    }
    return element.instantiate(
      typeArguments: const [],
      nullabilitySuffix: nullable
          ? NullabilitySuffix.question
          : NullabilitySuffix.none,
    );
  }

  LibraryElement _runtimeTypeLibrary(Map<String, Element> exports) {
    final object = exports['Object'];
    if (object is InterfaceElement) return object.library;
    for (final name in exports.keys.toList()..sort()) {
      final element = exports[name];
      if (element is InterfaceElement) return element.library;
    }
    throw StateError('Missing runtime type library');
  }

  void _checkBounds(
    List<TypeParameterElement> parameters,
    List<DartType> arguments,
    LibraryElement library,
    bool scalar,
  ) {
    if (scalar) return;
    if (parameters.length != arguments.length) {
      throw StateError('Explicit runtime type arguments required');
    }
    final substitution = Substitution.fromPairs2(parameters, arguments);
    for (var i = 0; i < parameters.length; i++) {
      final bound = parameters[i].bound;
      if (bound != null &&
          !library.typeSystem.isSubtypeOf(
            arguments[i],
            substitution.substituteType(bound),
          )) {
        throw StateError(
          'Runtime type ${arguments[i]} does not satisfy ${parameters[i].name} extends $bound',
        );
      }
    }
  }

  String _default(DartObject? value, FlaxCodegenTypeRef type) {
    if (value == null || value.isNull) {
      if (!type.nullable) {
        throw StateError(
          'Missing non-null default for ${type.name ?? type.kind}',
        );
      }
      return 'null';
    }
    if (value.toBoolValue() case final bool boolean) return '$boolean';
    if (value.toIntValue() case final int number) return '$number';
    if (value.toDoubleValue() case final double number) {
      if (number.isNaN) return 'double.nan';
      if (number == double.infinity) return 'double.infinity';
      if (number == double.negativeInfinity) return 'double.negativeInfinity';
      return '$number';
    }
    if (value.toStringValue() case final String string) {
      return "'${string.replaceAll(r'\', r'\\').replaceAll("'", r"\'").replaceAll(r'$', r'\$').replaceAll('\n', r'\n')}'";
    }
    if (value.toListValue() case final List<DartObject> list
        when list.isEmpty) {
      return 'const []';
    }
    if (type.kind == 'enum') {
      final element = (value.type as InterfaceType).element as EnumElement;
      final index = value.getField('index')?.toIntValue();
      final name =
          value.variable?.name ??
          (index == null
              ? null
              : element.fields
                    .where((field) => field.isEnumConstant)
                    .elementAt(index)
                    .name);
      if (name != null) return '${type.name}.$name';
    }
    throw StateError('Unsupported constant default: ${type.name ?? type.kind}');
  }

  void dispose() => _contexts.dispose();
}
