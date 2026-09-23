import 'dart:convert';
import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/analysis/session.dart';
import 'package:analyzer/dart/ast/visitor.dart';
import 'package:analyzer/dart/ast/ast.dart';
import 'package:analyzer/dart/constant/value.dart';
import 'package:analyzer/dart/element/element.dart';
import 'package:analyzer/dart/element/nullability_suffix.dart';
import 'package:analyzer/dart/element/type.dart';
// Pinned analyzer substitution preserves recursive and dependent bounds.
// ignore: implementation_imports
import 'package:analyzer/src/dart/element/type_algebra.dart' show Substitution;
import 'package:path/path.dart' as p;

import 'bindability.dart';
import 'config.dart';
import 'model.dart';
import 'manifest_v5_codec.dart';

part 'bindability_impl.dart';
part 'auto_binding.dart';
part 'type_scope.dart';
part 'widget_interface.dart';

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
    type.parameters.any((parameter) => _containsData(parameter.type)) ||
    type.recordFields.any((field) => _containsData(field.type));

bool _requiresWidgetOwner(FlaxCodegenTypeRef type) => type.kind == 'callback'
    ? type.result!.kind == 'route' ||
          type.parameters.any((parameter) => parameter.type.kind == 'context')
    : (type.item != null && _requiresWidgetOwner(type.item!)) ||
          (type.key != null && _requiresWidgetOwner(type.key!)) ||
          type.recordFields.any((field) => _requiresWidgetOwner(field.type));

bool _containsDeferredTypeParameter(
  DartType type,
  Set<TypeParameterElement> parameters,
) {
  if (type is TypeParameterType) return parameters.contains(type.element);
  if (type is InterfaceType) {
    return type.typeArguments.any(
      (argument) => _containsDeferredTypeParameter(argument, parameters),
    );
  }
  if (type is FunctionType) {
    return _containsDeferredTypeParameter(type.returnType, parameters) ||
        type.formalParameters.any(
          (parameter) =>
              _containsDeferredTypeParameter(parameter.type, parameters),
        ) ||
        type.typeParameters.any(
          (parameter) =>
              parameter.bound != null &&
              _containsDeferredTypeParameter(parameter.bound!, parameters),
        );
  }
  if (type is RecordType) {
    return type.positionalFields.any(
          (field) => _containsDeferredTypeParameter(field.type, parameters),
        ) ||
        type.namedFields.any(
          (field) => _containsDeferredTypeParameter(field.type, parameters),
        );
  }
  return false;
}

void _collectInferableDeferredTypeParameters(
  DartType type,
  Set<TypeParameterElement> parameters,
  Set<TypeParameterElement> found,
) {
  if (type is TypeParameterType) {
    if (parameters.contains(type.element)) found.add(type.element);
    return;
  }
  if (type is InterfaceType) {
    for (final argument in type.typeArguments) {
      _collectInferableDeferredTypeParameters(argument, parameters, found);
    }
    return;
  }
  if (type is RecordType) {
    for (final field in type.positionalFields) {
      _collectInferableDeferredTypeParameters(field.type, parameters, found);
    }
    for (final field in type.namedFields) {
      _collectInferableDeferredTypeParameters(field.type, parameters, found);
    }
  }
}

bool _containsDeferredParameter(FlaxCodegenTypeRef type, Set<String> names) =>
    type.kind == 'parameter' && names.contains(type.name) ||
    (type.declaration != null &&
        _containsDeferredParameter(type.declaration!, names)) ||
    (type.item != null && _containsDeferredParameter(type.item!, names)) ||
    (type.key != null && _containsDeferredParameter(type.key!, names)) ||
    (type.result != null && _containsDeferredParameter(type.result!, names)) ||
    type.parameters.any(
      (parameter) => _containsDeferredParameter(parameter.type, names),
    ) ||
    type.recordFields.any(
      (field) => _containsDeferredParameter(field.type, names),
    ) ||
    type.dartArguments.any((type) => _containsDeferredParameter(type, names)) ||
    type.tsArguments.any((type) => _containsDeferredParameter(type, names));

bool _validInferredDeferredCallbackType(
  FlaxCodegenTypeRef type,
  Set<String> names,
) {
  if (type.typeParameters.isNotEmpty) return false;
  bool valid(FlaxCodegenTypeRef value) {
    if (!_containsDeferredParameter(value, names)) return true;
    if ({
      'future',
      'stream',
      'iterable',
      'list',
      'map',
      'set',
      'widget',
      'route',
      'context',
    }.contains(value.kind)) {
      return false;
    }
    return [
      if (value.item != null) value.item!,
      if (value.key != null) value.key!,
      if (value.result != null) value.result!,
      ...value.parameters.map((parameter) => parameter.type),
      ...value.recordFields.map((field) => field.type),
    ].every(valid);
  }

  return valid(type);
}

bool _isInferredDeferredFactory(
  _FlaxCodegenTypeScope scope,
  InterfaceElement owner,
  MethodElement method,
) {
  if (!method.isPublic ||
      !method.isStatic ||
      method.typeParameters.isEmpty ||
      method.baseElement.fragments.any(
        (fragment) => fragment.isAsynchronous || fragment.isGenerator,
      )) {
    return false;
  }
  final result = method.returnType;
  if (result is! InterfaceType || result.element != owner) return false;

  final parameters = method.typeParameters.toSet();
  final inferred = <TypeParameterElement>{};
  for (final argument in result.typeArguments) {
    _collectInferableDeferredTypeParameters(argument, parameters, inferred);
  }
  if (inferred.length != parameters.length) return false;

  final names = {for (final parameter in parameters) parameter.name!};
  for (final parameter in method.formalParameters) {
    if (!_containsDeferredTypeParameter(parameter.type, parameters)) continue;
    final converted = scope.tryTypeRef(
      parameter.type,
      allowRecursiveErasure: true,
    );
    final type = converted.type;
    if (type == null ||
        type.kind != 'callback' ||
        !_validInferredDeferredCallbackType(type, names)) {
      return false;
    }
  }
  return true;
}

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
    for (final member in type.widgetMembers.where(
      (m) => type.kind == 'widgetInterface' && m.kind == 'method',
    ))
      member.name: member.parameters,
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
    asyncIterableFactory: type.asyncIterableFactory,
    typeArguments: type.typeArguments,
    getters: [
      ...type.getters.map((getter) => getter.name),
      ...type.widgetMembers
          .where((m) => type.kind == 'widgetInterface' && m.kind == 'getter')
          .map((m) => m.name),
    ],
    setters: [
      ...type.setters.map((setter) => setter.name),
      ...type.widgetMembers
          .where((m) => type.kind == 'widgetInterface' && m.kind == 'setter')
          .map((m) => m.name),
    ],
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
      'record',
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
      recordFields: [
        for (final (index, field) in actual.recordFields.indexed)
          FlaxCodegenRecordFieldModel(
            name: field.name,
            type: visit(
              field.type,
              declared != null && index < declared.recordFields.length
                  ? declared.recordFields[index].type
                  : null,
            ),
            positional: field.positional,
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
        ...type.recordFields.map((field) => field.type),
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
  final _dependencyOwners = <String, FlaxCodegenModuleModel>{};
  final _privateDependencyExtensions = <String>{};
  final _dependencyExtensions = <String, FlaxCodegenExtensionModel>{};
  final _dependencyReadonly = <String, FlaxCodegenTopLevelGetterModel>{};
  final _dependencySetters = <String, FlaxCodegenTopLevelSetterModel>{};
  final _dependencyTopLevelDeclarations = <String>{};
  final _privateDependencyTopLevelOperations = <String>{};
  final _dependencyExportLibraries = <String, String>{};
  var _dependencyExportsResolved = false;

  final _publicInputs =
      <FlaxCodegenBindingConfig, (Map<String, Element>, Map<String, String>)>{};
  final _libraryByIdentity = <String, String>{};
  final _elementsByIdentity = <String, InterfaceElement>{};
  final _literalLibraries = <LibraryElement, SomeParsedLibraryResult>{};

  String? _safeConstantLiteral(TopLevelVariableElement variable) {
    if (!variable.isConst) return null;
    final parsed = _literalLibraries.putIfAbsent(
      variable.library,
      () => _contexts.contexts.first.currentSession.getParsedLibraryByElement(
        variable.library,
      ),
    );
    if (parsed is! ParsedLibraryResult) return null;
    final node = parsed.getFragmentDeclaration(variable.firstFragment)?.node;
    if (node is! VariableDeclaration) return null;
    // Only syntax with no name resolution or environment dependency is folded.
    // Constants involving identifiers, constructors or fromEnvironment stay Dart reads.
    Expression? expression = node.initializer;
    while (expression is ParenthesizedExpression) {
      expression = expression.expression;
    }
    num sign = 1;
    if (expression is PrefixExpression &&
        {'-', '+'}.contains(expression.operator.lexeme)) {
      sign = expression.operator.lexeme == '-' ? -1 : 1;
      expression = expression.operand;
    }
    switch (expression) {
      case IntegerLiteral(:final value?) when value.abs() <= 9007199254740991:
        return jsonEncode(value * sign);
      case DoubleLiteral(:final value) when value.isFinite:
        return jsonEncode(value * sign);
      case SimpleStringLiteral(:final value):
        return jsonEncode(value);
      case BooleanLiteral(:final value):
        return jsonEncode(value);
      case NullLiteral():
        return 'null';
      default:
        return null;
    }
  }

  Future<(Map<String, Element>, Map<String, String>)> _publicExports(
    FlaxCodegenBindingConfig config,
  ) async {
    if (_publicInputs[config] case final cached?) return cached;
    final names = <String, Element>{};
    final libraries = <String, String>{};
    for (final uri in {
      config.library,
      ...config.additionalLibraries,
      ...config.publicLibraries.keys,
    }) {
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
      final namespace = libraries[uri]!.exportNamespace.definedNames2;
      final element = namespace[name] ?? namespace['$name='];
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
      if (element is InterfaceElement) {
        _elementsByIdentity[identity(element)] = element;
        _libraryByIdentity.putIfAbsent(identity(element), () => uri);
      }
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
      final (exports, libraries) = await _publicExports(config);
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
        _elementsByIdentity[id] = element;
        _libraryByIdentity[id] = libraries[entry.key] ?? config.library;
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
      for (final extension in module.extensions) {
        if (extension.isReference) continue;
        final identity = '${extension.originatingUri}::${extension.name}';
        if (_dependencyExtensions.containsKey(identity)) {
          throw StateError('Duplicate extension provider: $identity');
        }
        _dependencyExtensions[identity] = extension;
        if (module.publicLibraries.isNotEmpty &&
            !module.publicLibraries.any(
              (r) => r.exports.contains(extension.name),
            )) {
          _privateDependencyExtensions.add(identity);
        }
      }
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
      for (final getter
          in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
        if (getter.isReference) continue;
        if (_dependencyReadonly.containsKey(getter.id)) {
          throw StateError('Duplicate readonly provider: ${getter.id}');
        }
        _dependencyReadonly[getter.id] = getter;
        _dependencyTopLevelDeclarations.add(getter.id);
        if (module.publicLibraries.isNotEmpty &&
            !module.publicLibraries.any(
              (route) => route.exports.contains(getter.name),
            )) {
          _privateDependencyTopLevelOperations.add(getter.id);
        }
      }
      for (final setter
          in module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[]) {
        if (setter.isReference) continue;
        if (_dependencySetters.containsKey(setter.id)) {
          throw StateError('Duplicate top-level setter provider: ${setter.id}');
        }
        _dependencySetters[setter.id] = setter;
        _dependencyTopLevelDeclarations.add(
          setter.id.substring(0, setter.id.length - 1),
        );
        if (module.publicLibraries.isNotEmpty &&
            !module.publicLibraries.any(
              (route) => route.exports.contains(setter.name),
            )) {
          _privateDependencyTopLevelOperations.add(setter.id);
        }
      }
      for (final type in module.classes) {
        _dependencyOwners[type.id] = module;
        final selection = _selectionFromModel(type);
        _validateDuplicates(selection, type.id);
        _selections[type.id] = selection;
        _libraryByIdentity[type.id] =
            module.typeLibraries[type.name] ?? module.library;
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

  bool _isPoolType(InterfaceElement element) {
    final id = identity(element);
    if (_adaptations.containsKey(id) || _selections.containsKey(id)) {
      return true;
    }
    return _dependencyExports[element.name] == element;
  }

  String? _publicLibraryFor(InterfaceElement element, String name) =>
      _libraryByIdentity[identity(element)] ?? _dependencyExportLibraries[name];

  InterfaceElement? _poolInterface(String name) {
    final dependency = _dependencyExports[name];
    if (dependency is InterfaceElement) return dependency;
    for (final element in _elementsByIdentity.values) {
      if (element.name == name) return element;
    }
    return null;
  }

  bool _isFlutterWidget(InterfaceElement element) {
    const widgetLibrary = 'package:flutter/src/widgets/framework.dart';
    bool isWidget(InterfaceElement candidate) =>
        candidate.name == 'Widget' &&
        candidate.library.uri.toString() == widgetLibrary;
    return isWidget(element) ||
        element.allSupertypes.any((type) => isWidget(type.element));
  }

  Future<_FlaxCodegenTypeScope> _openTypeScope(
    FlaxCodegenBindingConfig config, {
    Map<String, String> automaticTypeCarriers = const {},
  }) async {
    final (exports, libraries) = await _resolutionExports(config);
    final result = await _contexts.contexts.first.currentSession
        .getLibraryByUri(config.library);
    if (result is! LibraryElementResult) {
      throw StateError('Cannot resolve ${config.library}');
    }
    return _FlaxCodegenTypeScope(
      parser: this,
      config: config,
      exports: exports,
      publicLibraries: Map<String, String>.of(libraries),
      automaticTypeCarriers: automaticTypeCarriers,
      objectQuestionType: result.element.typeProvider.objectQuestionType,
    );
  }

  /// Propose a fail-open member subset for [element] in [library]'s export
  /// namespace. Does not claim the type. Explicit [parse] stays fail-closed.
  ///
  /// Elements from other analysis contexts are resolved by declaration identity.
  /// [concreteUses] are already-observed use sites for this declaration; proposal
  /// may infer one complete representable generic specialization from them.
  /// Throws if the declaration is neither exported nor in the prepared pool.
  Future<FlaxCodegenProposedBinding> proposeSelection(
    InterfaceElement element, {
    required FlaxCodegenBindingConfig library,
    FlaxCodegenClassSelection? base,
    Iterable<InterfaceType> concreteUses = const [],
  }) async {
    final (exports, _) = await _resolutionExports(library);
    final id = identity(element);
    final resolved = exports[element.name] ?? _elementsByIdentity[id];
    if (resolved is! InterfaceElement || identity(resolved) != id) {
      throw StateError(
        'Declaration $id is not exported by ${library.library} or available '
        'in its prepared type pool',
      );
    }
    // Member types must share the parser's context with the export namespace.
    return _proposeSelection(
      this,
      resolved,
      library: library,
      base: base,
      concreteUses: concreteUses,
    );
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

  Future<FlaxCodegenModuleModel> parse(
    FlaxCodegenBindingConfig config, {
    Map<String, String> automaticTypeCarriers = const {},
  }) async {
    await prepare([config]);
    final session = _contexts.contexts.first.currentSession;
    final scope = await _openTypeScope(
      config,
      automaticTypeCarriers: automaticTypeCarriers,
    );
    final exports = scope.exports;
    for (final name in config.types.toSet()) {
      final element = exports[name];
      if (element is! InterfaceElement || element.isPrivate) {
        throw StateError('Unknown public type: $name');
      }
      scope.typeRef(element.thisType);
    }
    final snapshots = _parseSnapshots(config, exports);
    final classes = <FlaxCodegenClassModel>[];
    for (final snapshot in snapshots) {
      scope.types[snapshot.id] = FlaxCodegenNamedTypeModel(
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
      bool typeOnlyPosition = false,
    }) => scope.typeRef(
      type,
      scalar: scalar,
      forTypescript: forTypescript,
      erasing: erasing,
      allowRecursiveErasure: allowRecursiveErasure,
      typeOnlyPosition: typeOnlyPosition,
    );

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
            recordFields: type.recordFields,
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

    final nativeWidgetMembers = _WidgetInterfaceParser(
      session,
      exports,
      scope.publicLibraries,
    );
    for (final entry in config.classes.entries) {
      final element = exports[entry.key];
      if (element is! InterfaceElement ||
          (element is! ClassElement && element is! MixinElement)) {
        throw StateError(
          'Expected a publicly exported concrete class: ${entry.key}',
        );
      }
      final selection = _effectiveSelection(element, entry.value);
      final inferredDeferredFactories = <String>{
        for (final name in selection.methods.keys)
          if (element.getMethod(name) case final method?)
            if (_isInferredDeferredFactory(scope, element, method)) name,
      };
      final effectiveDeferredFactories = <String>{
        ...selection.deferredFactories,
        ...inferredDeferredFactories,
      };
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
          effectiveDeferredFactories.isEmpty &&
          selection.typeArguments.length != element.typeParameters.length) {
        throw StateError(
          'Explicit runtime type arguments required: ${entry.key}',
        );
      }
      final runtimeArguments = [
        for (final name in selection.typeArguments)
          _runtimeType(name, exports, element.library),
      ];
      if (effectiveDeferredFactories.isEmpty) {
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
                    typeOnlyPosition: true,
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
      }
      final widgetInterfaces = <FlaxCodegenTypeRef>[];
      final widgetGetters = <FlaxCodegenGetterModel>[];
      final widgetMembers = <FlaxCodegenWidgetMember>[];
      if (selection.kind == 'widgetInterface') {
        widgetMembers.addAll(
          await nativeWidgetMembers.parse(actualType, selection),
        );
      }
      final contracts = <(InterfaceType, FlaxCodegenClassSelection)>[];
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
        contracts.add((contract.thisType, _selections[identity(contract)]!));
      }
      if (contracts.isNotEmpty) {
        widgetMembers.addAll(
          await nativeWidgetMembers.implement(actualType, contracts),
        );
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
      for (final name
          in selection.kind == 'widgetInterface'
              ? <String>[]
              : selection.getters) {
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
          'void',
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
          'record',
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
      for (final name
          in selection.kind == 'widgetInterface'
              ? <String>[]
              : selection.setters) {
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
          'record',
          'set',
          'object',
          'future',
          'futureOr',
          'stream',
          'callback',
        }.contains(type.kind)) {
          throw StateError('Unsupported setter type: $name');
        }
        setters.add(FlaxCodegenGetterModel(name, type));
      }
      final methods = <FlaxCodegenMethodModel>[];
      final selectedMethods = {
        if (selection.kind != 'widgetInterface') ...selection.methods,
        ...selection.instanceMethods,
      };
      if (selection.kind != 'widgetInterface' &&
          selectedMethods.length !=
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
        final deferredFactory = effectiveDeferredFactories.contains(chosen.key);
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
          'record',
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
            'record',
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
                    typeOnlyPosition: true,
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
            (selection.proxy == 'host' && !element.isAbstract)) {
          throw StateError(
            'Proxies require an object class compatible with extends/implements',
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
        final proxySuperMembers = <String>[...selection.proxySuper];
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
            final selected = (setter ? setters : getters).any(
              (member) => member.name == name,
            );
            if (selection.proxy == 'extends' &&
                accessor != null &&
                !accessor.isAbstract &&
                selected &&
                accessor.metadata.hasNonVirtual) {
              throw StateError(
                'Non-virtual proxy property cannot be overridden: ${entry.key}.$name',
              );
            }
            final concreteOverride =
                selection.proxy == 'extends' &&
                accessor != null &&
                !accessor.isAbstract &&
                selected &&
                !accessor.metadata.hasNonVirtual;
            if (accessor != null &&
                selection.proxy != 'implements' &&
                !accessor.isAbstract &&
                !concreteOverride) {
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
            if (concreteOverride) {
              final member = '${setter ? 'set' : 'get'}:$name';
              if (!proxySuperMembers.contains(member)) {
                proxySuperMembers.add(member);
              }
            }
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
            for (final method in t.methods)
              if (!method.isStatic &&
                  (!method.isPrivate ||
                      method.isAbstract ||
                      selection.proxy == 'implements'))
                method.name!,
        }) {
          final method = actualType.lookUpMethod(name, element.library);
          if (method == null || method.isPrivate || method.isOperator) {
            throw StateError(
              'Proxy methods require public non-operator signatures: $name',
            );
          }
          final selectedConcrete = methods.any(
            (candidate) => candidate.instance && candidate.name == name,
          );
          if (selection.proxy == 'extends' &&
              !method.isAbstract &&
              selectedConcrete &&
              method.metadata.hasNonVirtual) {
            throw StateError(
              'Non-virtual proxy method cannot be overridden: ${entry.key}.$name',
            );
          }
          final concreteOverride =
              selection.proxy == 'extends' &&
              !method.isAbstract &&
              selectedConcrete &&
              !method.metadata.hasNonVirtual;
          if (selection.proxy != 'implements' &&
              !method.isAbstract &&
              !selection.proxyOverrides.contains(name) &&
              !concreteOverride) {
            continue;
          }
          final callback = typeRef(method.type);
          final declaredMethod = element.thisType.lookUpMethod(
            name,
            element.library,
          );
          if (declaredMethod == null || declaredMethod.isPrivate) {
            throw StateError('Proxy methods must be public: $name');
          }
          final result = callback.result!.declaredAs(
            typeRef(declaredMethod.returnType, forTypescript: true),
          );
          final mustCallSuper = _requiresSuper(element, name);
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
              mustCallSuper: mustCallSuper,
              instance: true,
            ),
          );
          if (concreteOverride && !proxySuperMembers.contains(name)) {
            proxySuperMembers.add(name);
          }
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
          superMethods: proxySuperMembers,
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
            if (!isWidget &&
                !{'context', 'state', 'members'}.contains(selection.kind))
              scope.typeOnlyReference(element.thisType),
            if (!isWidget &&
                !{'context', 'state', 'members'}.contains(selection.kind))
              for (final parent in element.thisType.allSupertypes)
                if (!parent.isDartCoreObject &&
                    !_adaptations.containsKey(identity(parent.element)))
                  typeRef(parent, forTypescript: true, typeOnlyPosition: true),
          ],
          genericScalar: entry.value.genericScalar,
          asyncIterableFactory: selection.asyncIterableFactory,
          widgetInterfaces: widgetInterfaces,
          widgetGetters: widgetGetters,
          widgetMembers: widgetMembers,
          jsName: selection.jsName,
          typeParameters: genericParameters,
          proxy: proxy,
          typeArguments: selection.typeArguments,
          getters: getters,
          methods: methods,
          pageAdapter: selection.pageAdapter,
          setters: setters,
          disposeMethod: selection.disposeMethod,
          capabilities: [if (selection.disposeMethod != null) 'Disposable'],
          listenerPairs: selection.listenerPairs,
          staticGetters: staticGetters,
        ),
      );
    }
    final extensions = <FlaxCodegenExtensionModel>[];
    final (extensionExports, _) = await _publicExports(config);
    for (final name in config.extensions.keys.toList()..sort()) {
      final element = extensionExports[name];
      if (element is! ExtensionElement ||
          element.isPrivate ||
          !flaxCodegenIsExportName(name)) {
        throw StateError('Expected a public named extension: $name');
      }
      final selection = config.extensions[name]!;
      FlaxCodegenTypeRef ref(DartType type) =>
          typeRef(type).declaredAs(typeRef(type, forTypescript: true));
      List<FlaxCodegenGenericParameter> generics(
        List<TypeParameterElement> parameters,
      ) => [
        for (final parameter in parameters)
          FlaxCodegenGenericParameter(
            parameter.name!,
            typeRef(
              parameter.bound ??
                  element.library.typeProvider.objectQuestionType,
              forTypescript: true,
              typeOnlyPosition: true,
            ),
            defaultType: typeRef(
              parameter.bound ??
                  element.library.typeProvider.objectQuestionType,
              erasing: {parameter},
            ),
            genericIdentity: parameter,
          ),
      ];
      final extensionIdentity = '${element.library.uri}::$name';
      if (_privateDependencyExtensions.contains(extensionIdentity)) {
        throw StateError(
          'Extension is not publicly exported by its provider: $name',
        );
      }
      final provider = _dependencyExtensions[extensionIdentity];
      final extensionGenerics = generics(element.typeParameters);
      final onType = ref(element.extendedType);
      final members = <FlaxCodegenExtensionMemberModel>[];
      void add(String memberName, String kind, List<String>? chosen) {
        final isStatic = kind.startsWith('static');
        if (!isStatic &&
            {
              '==',
              'hashCode',
              'runtimeType',
              'toString',
              'noSuchMethod',
            }.contains(memberName)) {
          throw StateError(
            'Dart extensions cannot declare Object members: $name.$memberName',
          );
        }
        final ExecutableElement? member = switch (kind) {
          'getter' || 'staticGetter' =>
            element.getters.where((m) => m.name == memberName).firstOrNull,
          'setter' =>
            element.setters
                .where(
                  (m) =>
                      m.displayName == memberName ||
                      m.name == memberName ||
                      m.name == '$memberName=',
                )
                .firstOrNull,
          _ =>
            element.methods
                .where(
                  (m) => memberName == 'unary-'
                      ? m.name == '-' && m.formalParameters.isEmpty
                      : m.name == memberName &&
                            (memberName != '-' ||
                                m.formalParameters.isNotEmpty),
                )
                .firstOrNull,
        };
        if (member == null ||
            member.isPrivate ||
            member.isStatic != isStatic ||
            (member is MethodElement &&
                member.isOperator != (kind == 'operator'))) {
          throw StateError('Unknown extension $kind: $name.$memberName');
        }
        if (member.returnType is VoidType &&
            member.fragments.any((f) => f.isAsynchronous || f.isGenerator)) {
          throw StateError(
            'Extension void members must execute synchronously: $name.$memberName',
          );
        }
        final jsName = switch (kind) {
          'getter' || 'staticGetter' =>
            'get${memberName[0].toUpperCase()}${memberName.substring(1)}',
          'setter' =>
            'set${memberName[0].toUpperCase()}${memberName.substring(1)}',
          'operator' =>
            flaxCodegenExtensionOperators[memberName] ??
                (throw StateError(
                  'Unsupported extension operator: $memberName',
                )),
          _ => memberName,
        };
        final args = parameters(
          member.formalParameters,
          chosen ?? member.formalParameters.map((p) => p.name!).toList(),
          '$name.$memberName',
          declared: member.formalParameters,
        );
        // Keep the synthetic receiver distinct from upstream parameter names.
        var receiverName = 'receiver';
        while (args.any((p) => p.name == receiverName)) {
          receiverName = '_$receiverName';
        }
        final call = FlaxCodegenMethodModel(
          jsName,
          [
            if (!isStatic)
              FlaxCodegenParameterModel(
                name: receiverName,
                type: onType,
                required: true,
                positional: true,
                defaultCode: 'null',
              ),
            ...args,
          ],
          kind == 'setter'
              ? const FlaxCodegenTypeRef('void')
              : ref(member.returnType),
          typeParameters: [
            if (!isStatic) ...extensionGenerics,
            ...generics(member.typeParameters),
          ],
        );
        bool unsupported(FlaxCodegenTypeRef type) =>
            {
              'widget',
              'widgetInterface',
              'context',
              'state',
              'page',
              'route',
            }.contains(type.kind) ||
            [
              ?type.item,
              ?type.key,
              ?type.result,
              ...type.parameters.map((p) => p.type),
              ...type.recordFields.map((f) => f.type),
            ].any(unsupported);
        if ([
          call.result,
          ...call.parameters.map((p) => p.type),
        ].any(unsupported)) {
          throw StateError(
            'Unsupported extension semantic position: $name.$memberName',
          );
        }
        members.add(
          FlaxCodegenExtensionMemberModel(
            id: '${element.library.uri}::$name.$kind.$memberName',
            name: memberName,
            kind: kind,
            call: call,
          ),
        );
      }

      for (final getter in selection.getters) {
        add(getter, 'getter', const []);
      }
      for (final setter in selection.setters) {
        add(setter, 'setter', null);
      }
      for (final method in selection.methods.entries) {
        add(method.key, 'method', method.value);
      }
      for (final getter in selection.staticGetters) {
        add(getter, 'staticGetter', const []);
      }
      for (final method in selection.staticMethods.entries) {
        add(method.key, 'staticMethod', method.value);
      }
      for (final operator in selection.operators.entries) {
        add(operator.key, 'operator', operator.value);
      }
      if (provider != null) {
        for (var index = 0; index < members.length; index++) {
          final member = members[index];
          final supplied = provider.members
              .where((m) => m.kind == member.kind && m.name == member.name)
              .firstOrNull;
          if (supplied == null ||
              jsonEncode(
                    FlaxCodegenManifestV5Codec.encodeMethod(supplied.call),
                  ) !=
                  jsonEncode(
                    FlaxCodegenManifestV5Codec.encodeMethod(member.call),
                  )) {
            throw StateError(
              'Extension provider surface does not include $name.${member.name} with the selected signature',
            );
          }
          members[index] = supplied;
        }
      }
      members.sort((a, b) => a.call.name.compareTo(b.call.name));
      extensions.add(
        FlaxCodegenExtensionModel(
          name: name,
          originatingUri: element.library.uri.toString(),
          onType: provider?.onType ?? onType,
          isReference: provider != null,
          typeParameters: provider?.typeParameters ?? extensionGenerics,
          members: members,
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
      for (final p in args) {
        if ({'page', 'state', 'route'}.contains(p.type.kind) ||
            (p.type.containsWidget &&
                !{'widget', 'callback'}.contains(p.type.kind)) ||
            (_requiresWidgetOwner(p.type) &&
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
              typeOnlyPosition: true,
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
    FlaxCodegenTopLevelModel? topLevel;
    if (config.topLevel case final selection?) {
      final (publicExports, _) = await _publicExports(config);
      final getters = <FlaxCodegenTopLevelGetterModel>[];
      final names = List<String>.of(selection.getters)..sort();
      for (final name in names) {
        final element = publicExports[name];
        final getter = switch (element) {
          GetterElement() => element,
          TopLevelVariableElement() => element.getter,
          _ => null,
        };
        if (getter == null ||
            getter.isPrivate ||
            getter.variable is! TopLevelVariableElement) {
          throw StateError(
            'Expected a public top-level readonly declaration: $name',
          );
        }
        final variable = getter.variable as TopLevelVariableElement;
        final FlaxCodegenReadonlyKind kind;
        if (variable.isOriginDeclaration) {
          if (variable.isConst) {
            kind = FlaxCodegenReadonlyKind.constant;
          } else if (variable.isFinal) {
            kind = variable.isLate
                ? FlaxCodegenReadonlyKind.lateFinal
                : FlaxCodegenReadonlyKind.finalValue;
          } else {
            kind = FlaxCodegenReadonlyKind.mutableValue;
          }
        } else if (getter.isOriginDeclaration) {
          kind = FlaxCodegenReadonlyKind.getter;
        } else {
          throw StateError(
            'Top-level getters with setters are not supported: $name',
          );
        }
        try {
          final id = '${variable.library.uri}::${variable.name}';
          final provider = _dependencyReadonly[id];
          if ((_dependencyTopLevelDeclarations.contains(id) &&
                  provider == null) ||
              _privateDependencyTopLevelOperations.contains(id)) {
            throw StateError(
              'Provider does not expose top-level getter: $name',
            );
          }
          final type = typeRef(getter.returnType)
              .declaredAs(typeRef(getter.returnType, forTypescript: true));
          getters.add(
            FlaxCodegenTopLevelGetterModel(
              id,
              name,
              provider?.type ?? type,
              provider?.kind ?? kind,
              isReference: provider != null,
              literal: provider != null
                  ? provider.literal
                  : selection.jsName.isEmpty
                  ? _safeConstantLiteral(variable)
                  : null,
            ),
          );
        } on StateError catch (error) {
          throw StateError(
            'Unsupported top-level readonly declaration $name: ${error.message}',
          );
        }
      }
      final setters = <FlaxCodegenTopLevelSetterModel>[];
      for (final name in List<String>.of(selection.setters)..sort()) {
        final element = publicExports['$name='] ?? publicExports[name];
        final declaration = switch (element) {
          SetterElement() => element.variable,
          GetterElement() => element.variable,
          TopLevelVariableElement() => element,
          _ => null,
        };
        if (declaration is TopLevelVariableElement &&
            declaration.isOriginDeclaration &&
            (declaration.isConst || declaration.isFinal)) {
          throw StateError(
            'Cannot bind readonly declaration as a setter: $name',
          );
        }
        final setter = switch (element) {
          SetterElement() => element,
          TopLevelVariableElement() => element.setter,
          GetterElement() => element.correspondingSetter,
          _ => null,
        };
        if (setter == null ||
            setter.isPrivate ||
            setter.variable is! TopLevelVariableElement) {
          throw StateError(
            'Expected a public writable top-level declaration: $name',
          );
        }
        final variable = setter.variable as TopLevelVariableElement;
        final declarationId = '${variable.library.uri}::${variable.name}';
        final id = '$declarationId=';
        final provider = _dependencySetters[id];
        if ((_dependencyTopLevelDeclarations.contains(declarationId) &&
                provider == null) ||
            _privateDependencyTopLevelOperations.contains(id)) {
          throw StateError('Provider does not expose top-level setter: $name');
        }
        try {
          final parameterType = setter.formalParameters.single.type;
          final type = typeRef(parameterType)
              .declaredAs(typeRef(parameterType, forTypescript: true));
          setters.add(
            FlaxCodegenTopLevelSetterModel(
              id,
              name,
              provider?.type ?? type,
              isReference: provider != null,
            ),
          );
        } on StateError catch (error) {
          throw StateError(
            'Unsupported top-level setter $name: ${error.message}',
          );
        }
      }
      topLevel = FlaxCodegenTopLevelModel(
        selection.jsName,
        getters,
        setters: setters,
      );
    }
    final typedefs = <FlaxCodegenTypeAliasModel>[];
    for (final name in config.typedefs.toSet()) {
      // Only the configured public surface may select an alias. Dependencies
      // contribute target providers, not additional implicit local exports.
      final (publicExports, _) = await _publicExports(config);
      final element = publicExports[name];
      if (element is! TypeAliasElement || !element.isPublic) {
        throw StateError('Unknown public typedef: $name');
      }
      try {
        final typeOnlyBounds = element.typeParameters.any(
          (parameter) => typeRef(
            parameter.bound ?? element.library.typeProvider.objectQuestionType,
            forTypescript: true,
            typeOnlyPosition: true,
          ).containsTypeOnly,
        );
        final alias = FlaxCodegenTypeAliasModel(
          name: name,
          originatingUri: element.library.uri.toString(),
          originatingName: element.name!,
          target: typeRef(element.aliasedType, forTypescript: typeOnlyBounds),
          typeParameters: [
            for (final parameter in element.typeParameters)
              FlaxCodegenGenericParameter(
                parameter.name!,
                typeRef(
                  parameter.bound ??
                      element.library.typeProvider.objectQuestionType,
                  forTypescript: true,
                  typeOnlyPosition: true,
                ),
                defaultType: typeOnlyBounds
                    ? null
                    : typeRef(
                        parameter.bound ??
                            element.library.typeProvider.objectQuestionType,
                        erasing: {parameter},
                      ).declaredAs(
                        typeRef(
                          parameter.bound ??
                              element.library.typeProvider.objectQuestionType,
                          forTypescript: true,
                          typeOnlyPosition: true,
                        ),
                      ),
                genericIdentity: parameter,
              ),
          ],
        );
        alias.validate();
        typedefs.add(alias);
      } on StateError catch (error) {
        throw StateError('Unsupported typedef $name: ${error.message}');
      }
    }
    _validateTypeLibraryIdentityNames(scope, automaticTypeCarriers);
    final module = FlaxCodegenModuleModel(
      name: config.name,
      library: config.library,
      jsPackage: config.jsPackage,
      dartOutput: config.dartOutput,
      tsOutput: config.tsOutput,
      classes: classes,
      functions: functions,
      extensions: extensions,
      types: scope.types.values.toList(),
      snapshots: snapshots,
      typedefs: typedefs,
      topLevel: topLevel,
      publicLibraries: await _publicLibraryModels(config),
      typeLibraries: {
        if (scope.usesFutureOr) 'FutureOr': 'dart:async',
        if (scope.usesStream) 'Stream': 'dart:async',
        for (final name in {
          if (scope.usesWidget || classes.any((c) => c.kind == 'widget'))
            'Widget',
          if (classes.any((c) => c.kind == 'route')) 'Route',
          if (classes.any((c) => c.kind == 'page')) ...['Page', 'BuildContext'],
          ...classes.map((c) => c.name),
          ...functions.map((f) => f.call.name),
          ...extensions.map((e) => e.name),
          ...?topLevel?.getters.where((g) => !g.isReference).map((g) => g.name),
          ...?topLevel?.setters.where((s) => !s.isReference).map((s) => s.name),
          ...scope.types.values.map((t) => t.name),
          ...snapshots.map((s) => s.name),
        })
          name: _typeLibraryUri(name, scope),
      },
    );
    module.validate();
    return module;
  }

  void _validateTypeLibraryIdentityNames(
    _FlaxCodegenTypeScope scope,
    Map<String, String> automaticTypeCarriers,
  ) {
    final identitiesByName = <String, Map<String, String>>{};
    for (final type in scope.types.values) {
      final split = type.id.lastIndexOf('::');
      final declarationUri = split < 0 ? type.id : type.id.substring(0, split);
      final carrier =
          automaticTypeCarriers[type.id] ??
          _libraryByIdentity[type.id] ??
          declarationUri;
      identitiesByName.putIfAbsent(
        type.name,
        () => <String, String>{},
      )[type.id] = carrier;
    }
    for (final entry in identitiesByName.entries) {
      if (entry.value.length < 2) continue;
      final routes = entry.value.entries.toList()
        ..sort((a, b) => a.key.compareTo(b.key));
      throw StateError(
        'Ambiguous type library routing for ${entry.key}: '
        '${routes.map((route) => '${route.key} -> ${route.value}').join('; ')}',
      );
    }
  }

  Future<List<FlaxCodegenLibraryModel>> _publicLibraryModels(
    FlaxCodegenBindingConfig config,
  ) async {
    final selected = <String>{
      ...config.classes.keys,
      ...config.types,
      ...config.functions.keys,
      ...config.extensions.keys,
      ...config.callbackSnapshots.keys,
      ...config.typedefs,
      ...?config.topLevel?.getters,
      ...?config.topLevel?.setters,
    };
    final routes = <FlaxCodegenLibraryModel>[];
    final libraries = config.publicLibraries.entries.toList()
      ..sort((a, b) => a.value.jsPackage.compareTo(b.value.jsPackage));
    final visible = <String>{};
    for (final entry in libraries) {
      final result = await _contexts.contexts.first.currentSession
          .getLibraryByUri(entry.key);
      if (result is! LibraryElementResult) {
        throw StateError('Cannot resolve public library: ${entry.key}');
      }
      final exports =
          selected
              .where(
                (name) =>
                    result.element.exportNamespace.definedNames2.containsKey(
                      name,
                    ) ||
                    (config.topLevel?.setters.contains(name) == true &&
                        result.element.exportNamespace.definedNames2
                            .containsKey('$name=')),
              )
              .toList()
            ..sort();
      visible.addAll(exports);
      routes.add(
        FlaxCodegenLibraryModel(
          library: entry.key,
          jsPackage: entry.value.jsPackage,
          tsOutput: entry.value.tsOutput,
          exports: exports,
        ),
      );
    }
    if (routes.isNotEmpty && !visible.containsAll(selected)) {
      throw StateError(
        'Selected declarations have no public library: '
        '${(selected.difference(visible).toList()..sort()).join(', ')}',
      );
    }
    return routes;
  }

  String _typeLibraryUri(String name, _FlaxCodegenTypeScope scope) {
    if (scope.usesStream && name == 'Stream') return 'dart:async';
    // References retain the provider's public import path through re-exports.
    final providerLibrary = _dependencyTypeLibraries[name];
    if (providerLibrary != null) return providerLibrary;
    final uri = scope.publicLibraries[name] ?? scope.publicLibraries['$name='];
    if (uri != null) return uri;
    for (final type in scope.types.values) {
      if (type.name == name) {
        final recorded = _libraryByIdentity[type.id];
        if (recorded != null) return recorded;
      }
    }
    throw StateError('Missing public library for $name');
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
    final element = primitive?.element ?? exports[name] ?? _poolInterface(name);
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

  /// Snapshot of adaptation tables so a bindability probe can restore after a
  /// failed [parse]. Not part of the public generate pipeline.
  FlaxCodegenParserCheckpoint checkpoint() => FlaxCodegenParserCheckpoint._(
    adaptations: Map.of(_adaptations),
    argumentsByType: {
      for (final entry in _argumentsByType.entries)
        entry.key: List.of(entry.value),
    },
    selections: Map.of(_selections),
    libraryByIdentity: Map.of(_libraryByIdentity),
    elementsByIdentity: Map.of(_elementsByIdentity),
  );

  void restore(FlaxCodegenParserCheckpoint checkpoint) {
    _adaptations
      ..clear()
      ..addAll(checkpoint.adaptations);
    _argumentsByType
      ..clear()
      ..addAll(checkpoint.argumentsByType);
    _selections
      ..clear()
      ..addAll(checkpoint.selections);
    _libraryByIdentity
      ..clear()
      ..addAll(checkpoint.libraryByIdentity);
    _elementsByIdentity
      ..clear()
      ..addAll(checkpoint.elementsByIdentity);
    _publicInputs.clear();
  }

  void dispose() => _contexts.dispose();
}

/// Mutable parser tables captured by [FlaxCodegenBindingParser.checkpoint].
final class FlaxCodegenParserCheckpoint {
  const FlaxCodegenParserCheckpoint._({
    required this.adaptations,
    required this.argumentsByType,
    required this.selections,
    required this.libraryByIdentity,
    required this.elementsByIdentity,
  });

  final Map<String, String> adaptations;
  final Map<String, List<String>> argumentsByType;
  final Map<String, FlaxCodegenClassSelection> selections;
  final Map<String, String> libraryByIdentity;
  final Map<String, InterfaceElement> elementsByIdentity;
}
