import 'dart:convert';
import 'dart:io';

import 'package:analyzer/dart/analysis/analysis_context_collection.dart';
import 'package:analyzer/dart/analysis/results.dart';
import 'package:analyzer/dart/analysis/utilities.dart' show parseString;
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
import 'identity.dart';
import 'model.dart';
import 'manifest_codec.dart';

part 'bindability_impl.dart';
part 'auto_binding.dart';
part 'package_scope.dart';
part 'type_scope.dart';
part 'widget_interface.dart';

const _opaqueDefaultKinds = {
  'object',
  'any',
  'data',
  'widget',
  'iterable',
  'list',
  'map',
  'set',
};

bool _opaqueDefault(DartObject? value, FlaxCodegenTypeRef type) =>
    value != null && !value.isNull && _opaqueDefaultKinds.contains(type.kind);

String identity(InterfaceElement element) =>
    '${element.library.uri}::${element.name}';

DartType _publicStaticGetterType(InterfaceType owner, DartType returned) =>
    returned is InterfaceType &&
        returned.element.isPrivate &&
        owner.element.library.typeSystem.isSubtypeOf(returned, owner)
    ? owner
    : returned;

bool _hasOpenTypeParameter(DartType type) => switch (type) {
  TypeParameterType() => true,
  InterfaceType() => type.typeArguments.any(_hasOpenTypeParameter),
  RecordType() =>
    type.positionalFields.any((f) => _hasOpenTypeParameter(f.type)) ||
        type.namedFields.any((f) => _hasOpenTypeParameter(f.type)),
  FunctionType() =>
    _hasOpenTypeParameter(type.returnType) ||
        type.formalParameters.any((p) => _hasOpenTypeParameter(p.type)),
  _ => false,
};

String? _nativeJsValueType(InterfaceElement element) {
  if (element.library.isDartCore && element.name == 'BigInt') return 'bigint';
  return element.library.uri.toString() == 'dart:typed_data'
      ? flaxCodegenBufferTypes[element.name]
      : null;
}

bool _requiresSuper(InterfaceElement element, String name) {
  final pending = [element];
  final visited = <InterfaceElement>{};
  while (pending.isNotEmpty) {
    final current = pending.removeLast();
    if (!visited.add(current)) continue;
    final member = name.startsWith('get:')
        ? current.getGetter(name.substring(4))
        : name.startsWith('set:')
        ? current.getSetter(name.substring(4))
        : current.getMethod(name);
    if (member?.metadata.hasMustCallSuper == true) return true;
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
    selection.staticSetters,
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

bool _containsDeferredTypeParameter(
  DartType type,
  Set<TypeParameterElement> parameters, {
  bool representationOnly = false,
}) {
  bool contains(DartType type) => _containsDeferredTypeParameter(
    type,
    parameters,
    representationOnly: representationOnly,
  );
  if (type is TypeParameterType) return parameters.contains(type.element);
  if (type is InterfaceType) {
    final owner = type.element;
    if (representationOnly && owner is ExtensionTypeElement) {
      return contains(
        Substitution.fromPairs2(
          owner.typeParameters,
          type.typeArguments,
        ).substituteType(owner.typeErasure),
      );
    }
    return type.typeArguments.any(contains);
  }
  if (type is FunctionType) {
    return contains(type.returnType) ||
        type.formalParameters.any((parameter) => contains(parameter.type)) ||
        type.typeParameters.any(
          (parameter) => parameter.bound != null && contains(parameter.bound!),
        );
  }
  if (type is RecordType) {
    return type.positionalFields.any((field) => contains(field.type)) ||
        type.namedFields.any((field) => contains(field.type));
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

Set<String> _coreCollectionKinds(InterfaceElement element) {
  final kinds = {
    for (final parent in element.allSupertypes)
      if (parent.element.library.isDartCore &&
          {'Iterable', 'List', 'Map', 'Set'}.contains(parent.element.name))
        parent.element.name!,
  };
  if (kinds.contains('List') || kinds.contains('Set')) kinds.remove('Iterable');
  return kinds;
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
  final resultView = scope.tryTypeRef(result, allowRecursiveErasure: true).type;
  if (resultView?.kind != 'object' || resultView?.id != identity(owner)) {
    return false;
  }

  final parameters = method.typeParameters.toSet();
  final inferred = <TypeParameterElement>{};
  for (final argument in result.typeArguments) {
    _collectInferableDeferredTypeParameters(argument, parameters, inferred);
  }
  if (inferred.length != parameters.length) return false;

  // Bounds without an erased conversion use the checked generic call path.
  for (final parameter in parameters) {
    final bound = parameter.bound;
    if (bound != null &&
        (_hasOpenTypeParameter(bound) ||
            scope.tryTypeRef(bound, allowRecursiveErasure: true).type ==
                null)) {
      return false;
    }
  }

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

/// Rebuild YAML selection maps already embedded in current Manifest member models.
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
    for (final method in type.methods.where(
      (method) => method.instance && method.operatorName == null,
    ))
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
      method.operatorName ?? method.name,
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
    staticSetters: type.staticSetters.map((setter) => setter.name).toList(),
    errorGetters: type.getters
        .where((getter) => getter.encodeKind == 'error')
        .map((getter) => getter.name)
        .toList(),
    methods: methods,
    instanceMethods: instanceMethods,
    operators: {
      for (final method in type.methods.where((m) => m.operatorName != null))
        method.operatorName!: method.parameters.map((p) => p.name).toList(),
    },
    methodTypeArguments: {
      for (final method in type.methods)
        if (method.typeArguments.isNotEmpty)
          (method.operatorName ?? method.name): method.typeArguments,
    },
    startsRoute: type.methods
        .where((method) => method.startsRoute)
        .map((method) => method.operatorName ?? method.name)
        .toList(),
    widgetInterfaces: type.widgetInterfaces
        .map((interface) => interface.name!)
        .toList(),
    proxy: type.proxy?.kind,
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
            (method.operatorName ?? method.name): method.parameters
                .where((parameter) => _containsData(parameter.type))
                .map((parameter) => parameter.name)
                .toList(),
      },
      results: type.methods
          .where((method) => _containsData(method.result))
          .map((method) => method.operatorName ?? method.name)
          .toList(),
    ),
  );
}

void _validateDataTargets(
  FlaxCodegenClassSelection selection,
  String location,
) {
  final methods = {
    ...selection.methods,
    ...selection.instanceMethods,
    ...selection.operators,
  };
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

/// Rewrite only Object/dynamic leaves, retaining concrete types and TS parameters.
FlaxCodegenTypeRef _dataType(FlaxCodegenTypeRef type, String location) {
  final result = type.withDataConversion(true);
  if (!_containsData(result)) {
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
  /// A supplied [contexts] must use [root]'s package environment and remains
  /// caller-owned. Only analysis is shared; binding selections stay per parser.
  FlaxCodegenBindingParser(String root, {AnalysisContextCollection? contexts})
    // Resolve requested libraries in the root's package environment without
    // rediscovering every unrelated project in the workspace for each parser.
    : _ownsContexts = contexts == null,
      _contexts =
          contexts ??
          AnalysisContextCollection(
            includedPaths: [p.absolute(root, 'pubspec.yaml')],
          );
  final AnalysisContextCollection _contexts;
  final bool _ownsContexts;
  final _adaptations = <String, String>{};
  final _argumentsByType = <String, List<String>>{};
  final _selections = <String, FlaxCodegenClassSelection>{};
  final _localSelections = <String>{};
  final _localDeclarationOwners = <FlaxCodegenSourceIdentity, String>{};
  final _packagePublicLibraries = <String, FlaxCodegenLibrarySelection>{};
  final _packagePublicCarriers = <FlaxCodegenSourceIdentity, String>{};
  final _snapshots = <String, FlaxCodegenSnapshotModel>{};

  /// Dependency Manifest `typeLibraries` name → URI, filled by [prepareModules].
  final _dependencyTypeLibraries = <String, String>{};
  final _dependencyTypeCarriers = <String, Set<String>>{};

  /// Lazily resolved public elements for [_dependencyTypeLibraries].
  final _dependencyExports = <String, Element>{};
  final _dependencyOwners = <String, FlaxCodegenModuleModel>{};
  final _dependencyFunctions =
      <String, (FlaxCodegenModuleModel, FlaxCodegenFunctionModel)>{};
  final _dependencyTypeOwners = <String, FlaxCodegenModuleModel>{};
  final _privateDependencyExtensions = <String>{};
  final _dependencyExtensions = <String, FlaxCodegenExtensionModel>{};
  final _coreDependencyExtensions = <String>{};
  final _dependencyReadonly = <String, FlaxCodegenTopLevelGetterModel>{};
  final _dependencySetters = <String, FlaxCodegenTopLevelSetterModel>{};
  final _coreDependencyTopLevelDeclarations = <String>{};
  final _privateDependencyTopLevelOperations = <String>{};
  final _dependencyExportLibraries = <String, String>{};
  var _dependencyExportsResolved = false;

  final _publicInputs =
      <FlaxCodegenBindingConfig, (Map<String, Element>, Map<String, String>)>{};
  final _libraryByIdentity = <String, String>{};
  final _elementsByIdentity = <String, InterfaceElement>{};
  final _literalLibraries = <LibraryElement, SomeParsedLibraryResult>{};

  /// Resolve the declaration whose Dart default is used by this callable.
  FormalParameterElement _effectiveDefaults(FormalParameterElement parameter) {
    var current = parameter.baseElement;
    final visited = <FormalParameterElement>{};
    while (visited.add(current)) {
      if (current is SuperFormalParameterElement && !current.hasDefaultValue) {
        final parent = current.superConstructorParameter;
        if (parent == null) {
          throw StateError(
            'Unresolved super parameter default: ${parameter.name}',
          );
        }
        current = parent.baseElement;
        continue;
      }
      final owner = current.enclosingElement;
      if (owner is! ConstructorElement || !owner.isFactory) return current;
      final target = owner.redirectedConstructor;
      if (target == null) {
        final parsed = _literalLibraries.putIfAbsent(
          owner.library,
          () => _contexts.contexts.first.currentSession
              .getParsedLibraryByElement(owner.library),
        );
        final node = parsed is ParsedLibraryResult
            ? parsed.getFragmentDeclaration(owner.firstFragment)?.node
            : null;
        if (node is! ConstructorDeclaration ||
            node.redirectedConstructor != null) {
          throw StateError('Unresolved factory default: ${parameter.name}');
        }
        return current;
      }
      FormalParameterElement? match;
      if (current.isNamed) {
        match = target.formalParameters
            .where((p) => p.isNamed && p.name == current.name)
            .firstOrNull;
      } else {
        final index = owner.formalParameters
            .where((p) => p.isPositional)
            .toList()
            .indexOf(current);
        final positional = target.formalParameters
            .where((p) => p.isPositional)
            .toList();
        if (index >= 0 && index < positional.length) match = positional[index];
      }
      if (match == null) {
        throw StateError('Unmatched factory default: ${parameter.name}');
      }
      current = match.baseElement;
    }
    throw StateError('Cyclic parameter default: ${parameter.name}');
  }

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
      if (!uri.startsWith('dart:')) {
        final errors = await _contexts.contexts.first.currentSession.getErrors(
          result.element.firstFragment.source.fullName,
        );
        if (errors is ErrorsResult &&
            errors.diagnostics.any(
              (error) =>
                  error.diagnosticCode.lowerCaseName == 'ambiguous_export',
            )) {
          throw StateError(
            'Ambiguous public exports in $uri; select explicit public libraries or repair the Dart facade',
          );
        }
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
    final uris =
        _dependencyTypeCarriers.values.expand((uris) => uris).toSet().toList()
          ..sort();
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
      final candidates = <Element, String>{};
      for (final uri in _dependencyTypeCarriers[name]!.toList()..sort()) {
        final namespace = libraries[uri]!.exportNamespace.definedNames2;
        final element = namespace[name] ?? namespace['$name='];
        if (element == null) {
          throw StateError('Unknown dependency type: $name in $uri');
        }
        candidates.putIfAbsent(element, () => uri);
        if (element is InterfaceElement) {
          _elementsByIdentity[identity(element)] = element;
          _libraryByIdentity.putIfAbsent(identity(element), () => uri);
        }
      }
      // Ambiguous short names stay addressable by their source identity.
      if (candidates.length == 1) {
        _dependencyExports[name] = candidates.keys.single;
        _dependencyExportLibraries[name] = candidates.values.single;
      }
    }
    _dependencyExportsResolved = true;
  }

  /// Local config exports plus prepared dependency Manifest type libraries.
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
      exports.putIfAbsent(name, () => element);
      libraries.putIfAbsent(name, () => uri);
    }
    return (exports, libraries);
  }

  final automaticSkips = <FlaxCodegenSkip>[];
  final automaticNotices = <FlaxCodegenNotice>[];

  /// Resolve adaptations before signatures so module argument order does not matter.
  Future<void> prepare(List<FlaxCodegenBindingConfig> configs) async {
    for (final config in configs) {
      final (exports, libraries) = await _resolutionExports(config);
      for (final name in config.types) {
        final element = exports[name];
        if (element is InterfaceElement) {
          final id = identity(element);
          _elementsByIdentity[id] = element;
          _libraryByIdentity.putIfAbsent(
            id,
            () => libraries[name] ?? config.library,
          );
        }
      }
      for (final entry in config.classes.entries) {
        if ({'route', 'page'}.contains(entry.value.kind) ||
            entry.value.pageAdapter != null) {
          throw StateError(
            'Route and Page use kind: object; remove the retired pageAdapter: ${entry.key}',
          );
        }
        final automatic = config.automaticClasses.contains(entry.key);
        final selected = automatic
            ? config.overrides.classes[entry.key]?.selection ?? entry.value
            : entry.value;
        final declaration = exports[entry.key];
        final kind =
            (selected.kind == 'widgetInterface' &&
                    declaration is InterfaceElement &&
                    (declaration.typeParameters.isNotEmpty ||
                        selected.proxy != null)
                ? 'object'
                : selected.kind) ??
            (declaration is ClassElement &&
                    selected.constructors.isNotEmpty &&
                    !declaration.allSupertypes.any(
                      (t) =>
                          identity(t.element) ==
                          'package:flutter/src/widgets/framework.dart::Widget',
                    )
                ? 'object'
                : automatic && declaration is EnumElement
                ? 'enum'
                : automatic &&
                      declaration is InterfaceElement &&
                      !_isFlutterWidget(declaration)
                ? 'object'
                : null);
        final element = exports[entry.key];
        if (element is! InterfaceElement ||
            (element is! ClassElement &&
                element is! MixinElement &&
                element is! EnumElement)) {
          throw StateError('Unknown adapted class: ${entry.key}');
        }
        if (flaxCodegenIsStateVariantOverlay(selected)) continue;
        final id = identity(element);
        if (automatic && _dependencyTypeOwners.containsKey(id)) continue;
        _validateDuplicates(selected, id);
        _selections[id] = selected;
        if (!automatic) _localSelections.add(id);
        _elementsByIdentity[id] = element;
        _libraryByIdentity[id] = libraries[entry.key] ?? config.library;
        final previous = _adaptations[id];
        if (previous != null && previous != kind) {
          throw StateError('Conflicting adaptation: $id');
        }
        if (kind != null) _adaptations[id] = kind;
        _argumentsByType[id] = selected.typeArguments;
      }
    }
  }

  /// Registers dependency declarations loaded from a package manifest.
  void prepareModules(
    Iterable<FlaxCodegenModuleModel> modules, {
    Map<String, String> dependencyTypeOwnerModules = const {},
  }) {
    final snapshots = modules.toList();
    final candidates = <String, List<FlaxCodegenModuleModel>>{};
    for (final module in snapshots) {
      for (final type in module.classes) {
        candidates.putIfAbsent(type.id, () => []).add(module);
      }
    }
    final operationProviders = <String, List<FlaxCodegenModuleModel>>{};
    for (final module in snapshots) {
      for (final id in [
        for (final function in module.functions) 'function:${function.id}',
        for (final extension in module.extensions)
          if (!extension.isReference)
            'extension:${extension.originatingUri}::${extension.name}',
        for (final getter
            in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[])
          if (!getter.isReference) 'getter:${getter.id}',
        for (final setter
            in module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[])
          if (!setter.isReference) 'setter:${setter.id}',
      ]) {
        operationProviders.putIfAbsent(id, () => []).add(module);
      }
    }
    bool useOperation(FlaxCodegenModuleModel module, String id) {
      final providers = operationProviders[id]!;
      final core = providers
          .where(
            (provider) => (provider.moduleId ?? '').startsWith('flax.core/'),
          )
          .singleOrNull;
      return identical(module, core ?? providers.singleOrNull);
    }

    bool useClass(FlaxCodegenModuleModel module, String id) {
      if (_localSelections.contains(id)) {
        if ((module.moduleId ?? '').startsWith('flax.core/')) {
          throw StateError('Core bindings cannot be republished: $id');
        }
        return false;
      }
      final providers = candidates[id]!;
      final owner = dependencyTypeOwnerModules[id];
      if (owner != null) return (module.moduleId ?? module.name) == owner;
      final core = providers
          .where(
            (candidate) => (candidate.moduleId ?? '').startsWith('flax.core/'),
          )
          .singleOrNull;
      return identical(module, core ?? providers.singleOrNull);
    }

    for (final module in snapshots) {
      for (final extension in module.extensions) {
        if (extension.isReference) continue;
        final identity = '${extension.originatingUri}::${extension.name}';
        if (!useOperation(module, 'extension:$identity')) continue;
        if ((module.moduleId ?? '').startsWith('flax.core/')) {
          _coreDependencyExtensions.add(identity);
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
        _dependencyTypeLibraries.putIfAbsent(entry.key, () => entry.value);
        _dependencyTypeCarriers
            .putIfAbsent(entry.key, () => {})
            .add(entry.value);
      }
      for (final type in module.types) {
        final ownerModuleId = dependencyTypeOwnerModules[type.id];
        final moduleOwnerId = module.moduleId ?? module.name;
        if (ownerModuleId == null || ownerModuleId != moduleOwnerId) continue;
        final previous = _dependencyTypeOwners[type.id];
        if (previous != null &&
            (previous.moduleId ?? previous.name) != moduleOwnerId) {
          throw StateError('Duplicate dependency type provider: ${type.id}');
        }
        _dependencyTypeOwners[type.id] = module;
      }
    }
    _dependencyExportsResolved = false;
    _dependencyExports.clear();
    _dependencyExportLibraries.clear();
    for (final module in snapshots) {
      for (final function in module.functions) {
        if (useOperation(module, 'function:${function.id}')) {
          _dependencyFunctions[function.id] = (module, function);
        }
      }
      for (final getter
          in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
        if (getter.isReference) continue;
        if (!useOperation(module, 'getter:${getter.id}')) continue;
        _dependencyReadonly[getter.id] = getter;
        if ((module.moduleId ?? '').startsWith('flax.core/')) {
          _coreDependencyTopLevelDeclarations.add(getter.id);
        }
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
        if (!useOperation(module, 'setter:${setter.id}')) continue;
        _dependencySetters[setter.id] = setter;
        final declarationId = setter.id.substring(0, setter.id.length - 1);
        if ((module.moduleId ?? '').startsWith('flax.core/')) {
          _coreDependencyTopLevelDeclarations.add(declarationId);
        }
        if (module.publicLibraries.isNotEmpty &&
            !module.publicLibraries.any(
              (route) => route.exports.contains(setter.name),
            )) {
          _privateDependencyTopLevelOperations.add(setter.id);
        }
      }
      for (final type in module.classes) {
        if (!useClass(module, type.id)) continue;
        _dependencyOwners[type.id] = module;
        _dependencyTypeOwners.putIfAbsent(type.id, () => module);
        final selection = _selectionFromModel(type);
        _validateDuplicates(selection, type.id);
        _selections[type.id] = selection;
        _libraryByIdentity[type.id] =
            module.typeLibraries[type.name] ?? module.library;
        if (type.kind != 'widget') {
          final previous = _adaptations[type.id];
          if (previous != null &&
              previous != type.kind &&
              _localSelections.contains(type.id)) {
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
    return _elementsByIdentity[id] == element;
  }

  String? _publicLibraryFor(InterfaceElement element, String name) =>
      _libraryByIdentity[identity(element)] ?? _dependencyExportLibraries[name];

  InterfaceElement? _poolInterface(String name) {
    final dependency = _dependencyExports[name];
    if (dependency is InterfaceElement) return dependency;
    return _elementsByIdentity.values
        .where((element) => element.name == name)
        .singleOrNull;
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
    final realWidgetInterface =
        own.kind == 'widgetInterface' && kind == 'object';
    if (realWidgetInterface && !_isFlutterWidget(element)) {
      throw StateError('Expected a Widget interface: ${element.name}');
    }
    final widgetContracts = own.widgetInterfaces.toSet();
    final widgetObjectView =
        own.kind == null &&
        widgetContracts.isNotEmpty &&
        _isFlutterWidget(element);
    if (kind != 'object' && kind != 'stream' && !widgetObjectView) return own;
    final parents = [
      for (final parent in element.allSupertypes)
        if (_selections[identity(parent.element)] case final selected?
            when _adaptations[identity(parent.element)] ==
                    (widgetObjectView ? 'object' : kind) &&
                (!widgetObjectView ||
                    widgetContracts.contains(parent.element.name)))
          widgetObjectView
              ? _effectiveSelection(parent.element, selected)
              : selected,
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
      jsName: own.jsName,
      kind: kind,
      asyncIterableFactory: own.asyncIterableFactory,
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
      inferredProxy: own.inferredProxy,
      proxyVariants: own.proxyVariants,
      pageAdapter: own.pageAdapter,
      staticGetters: own.staticGetters,
      staticSetters: own.staticSetters,
      errorGetters: {
        for (final selection in selections) ...selection.errorGetters,
      }.toList(),
      methods: {
        for (final e in own.methods.entries)
          if (!realWidgetInterface ||
              element.getMethod(e.key)?.isStatic == true)
            e.key: e.value,
      },
      operators: mergeParameters(selections.map((s) => s.operators)),
      methodTypeArguments: arguments,
      getters: {for (final s in selections) ...s.getters}.toList(),
      setters: {for (final s in selections) ...s.setters}.toList(),
      instanceMethods: mergeParameters([
        ...selections.map((s) => s.instanceMethods),
        if (realWidgetInterface)
          {
            for (final e in own.methods.entries)
              if (element.getMethod(e.key)?.isStatic != true) e.key: e.value,
          },
      ]),
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
    if (!config.hasAutomaticSelection &&
        (config.overrides.classes.isNotEmpty ||
            config.overrides.functions.isNotEmpty ||
            config.overrides.exclude.isNotEmpty)) {
      throw StateError(
        'Inline overrides require an automatic declaration list',
      );
    }
    if (config.hasAutomaticSelection) {
      final proposal = await proposeLibrary(
        config,
        overrides: config.overrides,
      );
      automaticSkips.addAll(proposal.skips);
      automaticNotices.addAll(proposal.notices);
      config = proposal.config;
      automaticTypeCarriers = {
        ...proposal.typeCarriers,
        ...automaticTypeCarriers,
      };
    }
    await prepare([config]);
    final session = _contexts.contexts.first.currentSession;
    var typeCarriers = automaticTypeCarriers;
    if (config.classes.values.any(
      (selection) => selection.proxyVariants.isNotEmpty,
    )) {
      final result = await session.getLibraryByUri(config.library);
      if (result is! LibraryElementResult) {
        throw StateError('Cannot resolve ${config.library}');
      }
      typeCarriers = {
        ...await _discoverAutoTypeCarriers(config.library, result.element),
        ...automaticTypeCarriers,
      };
    }
    final scope = await _openTypeScope(
      config,
      automaticTypeCarriers: typeCarriers,
    );
    final exports = scope.exports;
    final concreteUses = _autoConcreteUses(exports.values);
    for (final name in config.types.toSet()) {
      final element = exports[name];
      if (element is! InterfaceElement || element.isPrivate) {
        throw StateError('Unknown public type: $name');
      }
      scope.typeRef(element.thisType);
    }
    final snapshots = _parseSnapshots(config, exports);
    final classes = <FlaxCodegenClassModel>[];
    final stateVariants = <FlaxCodegenStateVariantModel>[];
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
      bool mountedWidgetCallbacks = false,
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
      final result = <FlaxCodegenParameterModel>[];
      var omitPositionalTail = false;
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
        final independent =
            mountedWidgetCallbacks &&
            type.kind == 'callback' &&
            type.result!.isDirectMountedWidgetResult;
        final defaults = _effectiveDefaults(parameter);
        final constant = defaults.computeConstantValue();
        final callbackDefault =
            {'callback', 'function'}.contains(type.kind) &&
            constant?.toFunctionValue() != null;
        final hiddenDefault =
            !parameter.isRequired &&
            parameter.isNamed &&
            parameter.type.nullabilitySuffix != NullabilitySuffix.question &&
            !defaults.hasDefaultValue;
        // Preserve upstream sentinel identity as well as private callback defaults.
        final omitWhenAbsent =
            !parameter.isRequired &&
            (omitPositionalTail && parameter.isPositional ||
                hiddenDefault ||
                callbackDefault ||
                _opaqueDefault(constant, type));
        // Once a positional default requires real omission, its suffix must
        // remain omitted too; filling later scalar defaults would shift values.
        if (parameter.isPositional && omitWhenAbsent) omitPositionalTail = true;
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
                    (omitWhenAbsent && _opaqueDefaultKinds.contains(type.kind))
                ? 'null'
                : _default(constant, type),
          ),
        );
      }
      return result;
    }

    Future<MixinElement> resolveMixin(
      FlaxCodegenMixinSelection selection,
    ) async {
      final Element? element;
      if (selection.library case final library?) {
        final result = await session.getLibraryByUri(library);
        if (result is! LibraryElementResult) {
          throw StateError('Cannot resolve mixin library: $library');
        }
        element = result.element.exportNamespace.definedNames2[selection.name];
      } else {
        element = exports[selection.name];
      }
      if (element is! MixinElement || element.isPrivate) {
        throw StateError('Expected a public Dart mixin: ${selection.name}');
      }
      return element;
    }

    Future<List<FlaxCodegenStateVariantModel>> parseStateVariants(
      InterfaceElement stateElement,
      InterfaceType stateType,
      List<DartType> stateArguments,
      Map<String, FlaxCodegenProxyVariantSelection> selections,
    ) async {
      const lifecycle = {
        'build',
        'initState',
        'didChangeDependencies',
        'didUpdateWidget',
        'deactivate',
        'activate',
        'dispose',
        'reassemble',
      };
      const ignoredFrameworkMethods = {'debugFillProperties'};
      final result = <FlaxCodegenStateVariantModel>[];
      for (final entry in selections.entries) {
        final mixins = <FlaxCodegenStateMixinModel>[];
        final getterMembers = <String, (FlaxCodegenGetterModel, bool)>{};
        final setterMembers = <String, (FlaxCodegenGetterModel, bool)>{};
        final methodMembers = <String, (FlaxCodegenMethodModel, bool)>{};
        final superMembers = <String>{};
        final mustCallSuperMembers = <String>{};
        final interfaces = <String, FlaxCodegenStateInterfaceModel>{};
        final available = <InterfaceType>[
          stateType,
          ...stateType.allSupertypes,
        ];
        final seenMixins = <String>{};

        for (final selectedMixin in entry.value.mixins) {
          final mixin = await resolveMixin(selectedMixin);
          final mixinId = identity(mixin);
          if (!seenMixins.add(mixinId)) {
            throw StateError(
              'Duplicate State mixin in ${entry.key}: ${selectedMixin.name}',
            );
          }
          final mixinArguments = switch (mixin.typeParameters.length) {
            0 => const <DartType>[],
            final count when count == stateElement.typeParameters.length =>
              stateArguments,
            _ => throw StateError(
              'State mixin generic arguments cannot be inferred: '
              '${selectedMixin.name}',
            ),
          };
          _checkBounds(
            mixin.typeParameters,
            mixinArguments,
            mixin.library,
            false,
          );
          final mixinType = mixin.instantiate(
            typeArguments: mixinArguments,
            nullabilitySuffix: NullabilitySuffix.none,
          );
          final substitution = Substitution.fromPairs2(
            mixin.typeParameters,
            mixinArguments,
          );
          final interfaceGetters = <String>{};
          final interfaceSetters = <String>{};
          final interfaceMethods = <String>{};
          for (final constraint in mixin.superclassConstraints) {
            final required = substitution.substituteType(constraint);
            if (!available.any(
              (candidate) =>
                  mixin.library.typeSystem.isSubtypeOf(candidate, required),
            )) {
              throw StateError(
                'State mixin constraint is not satisfied in ${entry.key}: '
                '${selectedMixin.name} on $required',
              );
            }
          }

          mixins.add(
            FlaxCodegenStateMixinModel(
              name: selectedMixin.name,
              id: mixinId,
              library:
                  selectedMixin.library ??
                  typeCarriers[mixinId] ??
                  _publicLibraryFor(mixin, selectedMixin.name) ??
                  config.library,
              typeArguments: [
                for (final argument in mixinArguments) '$argument',
              ],
            ),
          );

          for (final declared in mixin.interfaces) {
            final interface = substitution.substituteType(declared);
            if (interface is! InterfaceType) continue;
            final interfaceElement = interface.element;
            if (interfaceElement is! InterfaceElement) continue;
            // Keep the nominal capability in the normal dependency/ownership
            // graph so TypeScript and runtime conversion share one provider.
            typeRef(interface)
                .declaredAs(typeRef(interface, forTypescript: true));
            interfaceGetters.addAll(
              interfaceElement.getters
                  .where((member) => !member.isStatic && !member.isPrivate)
                  .map((member) => member.name!),
            );
            interfaceSetters.addAll(
              interfaceElement.setters
                  .where((member) => !member.isStatic && !member.isPrivate)
                  .map(
                    (member) => member.name!.replaceFirst(RegExp(r'=$'), ''),
                  ),
            );
            interfaceMethods.addAll(
              interfaceElement.methods
                  .where((member) => !member.isStatic && !member.isPrivate)
                  .map((member) => member.name!),
            );
            final interfaceId = identity(interfaceElement);
            interfaces[interfaceId] = FlaxCodegenStateInterfaceModel(
              name: interfaceElement.name!,
              id: interfaceId,
              library:
                  typeCarriers[interfaceId] ??
                  _publicLibraryFor(interfaceElement, interfaceElement.name!) ??
                  interfaceElement.library.uri.toString(),
            );
          }

          for (final getter in mixinType.getters) {
            if (getter.isStatic || getter.isPrivate) continue;
            final name = getter.name!;
            if (interfaceGetters.contains(name)) continue;
            final model = FlaxCodegenGetterModel(
              name,
              typeRef(getter.returnType)
                  .declaredAs(typeRef(getter.returnType, forTypescript: true)),
            );
            getterMembers[name] = (model, getter.isAbstract);
            if (!getter.isAbstract) superMembers.add('get:$name');
          }
          for (final setter in mixinType.setters) {
            if (setter.isStatic || setter.isPrivate) continue;
            final name = setter.name!.replaceFirst(RegExp(r'=$'), '');
            if (interfaceSetters.contains(name)) continue;
            final valueType = setter.formalParameters.single.type;
            final model = FlaxCodegenGetterModel(
              name,
              typeRef(valueType)
                  .declaredAs(typeRef(valueType, forTypescript: true)),
            );
            setterMembers[name] = (model, setter.isAbstract);
            if (!setter.isAbstract) superMembers.add('set:$name');
          }
          for (final method in mixinType.methods) {
            if (method.isStatic || method.isPrivate || method.isOperator) {
              continue;
            }
            final name = method.name!;
            if (ignoredFrameworkMethods.contains(name)) continue;
            if (lifecycle.contains(name)) {
              if (!method.isAbstract) {
                final member = 'call:$name';
                superMembers.add(member);
                if (_requiresSuper(mixin, name)) {
                  mustCallSuperMembers.add(member);
                }
              }
              continue;
            }
            if (interfaceMethods.contains(name)) continue;
            final model = FlaxCodegenMethodModel(
              name,
              parameters(
                method.formalParameters,
                method.formalParameters
                    .map((parameter) => parameter.name!)
                    .toList(),
                '${entry.key}.$name',
              ),
              typeRef(method.returnType)
                  .declaredAs(typeRef(method.returnType, forTypescript: true)),
              instance: true,
              mustCallSuper: _requiresSuper(mixin, name),
            );
            methodMembers[name] = (model, method.isAbstract);
            if (!method.isAbstract) superMembers.add('call:$name');
          }

          available.add(mixinType);
          available.addAll(mixinType.allSupertypes);
        }

        result.add(
          FlaxCodegenStateVariantModel(
            name: entry.key,
            id: 'stateVariant:${entry.key}',
            stateId: identity(stateElement),
            mixins: mixins,
            interfaces: interfaces.values.toList(),
            getters: [for (final value in getterMembers.values) value.$1],
            setters: [for (final value in setterMembers.values) value.$1],
            methods: [for (final value in methodMembers.values) value.$1],
            superMethods: superMembers.toList()..sort(),
            mustCallSuperMethods: mustCallSuperMembers.toList()..sort(),
          ),
        );
      }
      return result;
    }

    final nativeWidgetMembers = _WidgetInterfaceParser();
    for (final entry in config.classes.entries) {
      final element = exports[entry.key];
      if (element is! InterfaceElement ||
          (element is! ClassElement &&
              element is! MixinElement &&
              element is! EnumElement)) {
        throw StateError(
          'Expected a publicly exported concrete class: ${entry.key}',
        );
      }
      if (_nativeJsValueType(element) case final native?) {
        throw StateError(
          '${entry.key} maps to native JS $native and cannot be selected '
          'as a Dart object binding; select APIs that use this value instead',
        );
      }
      final widgetInterfaceProxy =
          entry.value.kind == 'widgetInterface' && entry.value.proxy != null;
      if (widgetInterfaceProxy) {
        if (entry.value.proxy != 'implements' ||
            element is! ClassElement ||
            !element.isAbstract ||
            !_isFlutterWidget(element) ||
            element.isBase ||
            element.isFinal ||
            element.isSealed) {
          throw StateError(
            'Widget interface proxies require an implementable abstract Widget: ${entry.key}',
          );
        }
        nativeWidgetMembers.parse(element.thisType, entry.value);
      }
      final selection = _effectiveSelection(element, entry.value);
      if ((element is EnumElement) != (selection.kind == 'enum') ||
          (element is EnumElement &&
              (selection.proxy != null ||
                  selection.jsName != null ||
                  selection.listenerPairs.isNotEmpty))) {
        throw StateError(
          'Enums require kind: enum without proxies or lifecycle adaptations: ${entry.key}',
        );
      }
      if (element is EnumElement) typeRef(element.thisType);
      final stateIdentity = identity(element);
      final isComponentState =
          stateIdentity == 'package:flutter/src/widgets/framework.dart::State';
      final variantOverlay = flaxCodegenIsStateVariantOverlay(selection);
      if (selection.proxyVariants.isNotEmpty && !isComponentState) {
        throw StateError(
          'proxyVariants are supported only by Flutter State: ${entry.key}',
        );
      }
      if (isComponentState &&
          selection.proxyVariants.isNotEmpty &&
          selection.kind != 'state' &&
          !variantOverlay) {
        throw StateError('Flutter State proxyVariants require kind: state');
      }
      final inferredDeferredFactories = <String>{
        for (final name in selection.methods.keys)
          if (element.getMethod(name) case final method?)
            if (_isInferredDeferredFactory(scope, element, method)) name,
      };
      final effectiveDeferredFactories = inferredDeferredFactories;
      if (element is MixinElement &&
          (selection.kind != 'object' ||
              selection.constructors.isNotEmpty ||
              selection.proxy != null)) {
        throw StateError(
          'Mixins require a non-constructible object selection: ${entry.key}',
        );
      }
      _validateDataTargets(selection, entry.key);
      if (_coreCollectionKinds(element).length > 1) {
        throw StateError('Ambiguous core collection shape: ${entry.key}');
      }
      final sharedOwner =
          element.typeParameters.isNotEmpty && selection.typeArguments.isEmpty
          ? _defaultTypeArguments(this, scope, element)
          : null;
      final ownerTypeArguments = selection.typeArguments.isNotEmpty
          ? selection.typeArguments
          : sharedOwner?.sources;
      if (element.typeParameters.isNotEmpty &&
          (sharedOwner?.supported == false || ownerTypeArguments == null)) {
        throw StateError(
          sharedOwner?.reason ??
              'Explicit runtime type arguments required: ${entry.key}',
        );
      }
      final runtimeArguments = selection.typeArguments.isNotEmpty
          ? [
              for (final name in selection.typeArguments)
                _runtimeType(name, exports, element.library),
            ]
          : sharedOwner?.arguments ?? const <DartType>[];
      _checkBounds(
        element.typeParameters,
        runtimeArguments,
        element.library,
        false,
      );
      final actualType =
          runtimeArguments.isEmpty || sharedOwner?.requiresTypeArguments == true
          ? element.thisType
          : element.instantiate(
              typeArguments: runtimeArguments,
              nullabilitySuffix: NullabilitySuffix.none,
            );
      if (selection.proxyVariants.isNotEmpty) {
        stateVariants.addAll(
          await parseStateVariants(
            element,
            actualType,
            runtimeArguments,
            selection.proxyVariants,
          ),
        );
        if (variantOverlay) continue;
      }
      final genericParameters = [
        for (var i = 0; i < element.typeParameters.length; i++)
          FlaxCodegenGenericParameter(
            element.typeParameters[i].name!,
            typeRef(
              element.typeParameters[i].bound ??
                  element.library.typeProvider.objectQuestionType,
              forTypescript: true,
              typeOnlyPosition: true,
            ),
            defaultType: sharedOwner?.requiresTypeArguments == true
                ? null
                : typeRef(
                    runtimeArguments.length > i
                        ? runtimeArguments[i]
                        : element.library.typeProvider.objectQuestionType,
                    erasing: {element.typeParameters[i]},
                  ),
            genericIdentity: element.typeParameters[i],
          ),
      ];
      final isWidget = _isFlutterWidget(element);
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
      final widgetMembers = <FlaxCodegenWidgetMember>[];
      if (selection.kind == 'widgetInterface') {
        widgetMembers.addAll(nativeWidgetMembers.parse(actualType, selection));
      }
      final contracts = <(InterfaceType, FlaxCodegenClassSelection)>[];
      for (final name in selection.widgetInterfaces) {
        final contract = exports[name];
        if (!isWidget ||
            selection.kind != null ||
            contract is! ClassElement ||
            !(_selections[identity(contract)]?.kind == 'widgetInterface' ||
                _selections[identity(contract)]?.kind == 'object' &&
                    _isFlutterWidget(contract))) {
          throw StateError(
            'Incompatible selected Widget interface: ${entry.key}.$name',
          );
        }
        final inherited = actualType.allSupertypes
            .where((type) => identity(type.element) == identity(contract))
            .firstOrNull;
        if (inherited == null) {
          throw StateError(
            'Incompatible selected Widget interface: ${entry.key}.$name',
          );
        }
        final declared = element.thisType.allSupertypes.firstWhere(
          (type) => identity(type.element) == identity(contract),
        );
        widgetInterfaces.add(
          typeRef(inherited).declaredAs(typeRef(declared, forTypescript: true)),
        );
        contracts.add((inherited, _selections[identity(contract)]!));
      }
      if (contracts.isNotEmpty) {
        nativeWidgetMembers.validateImplementation(actualType, contracts);
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
            'enum',
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
      for (final name
          in selection.kind == 'widgetInterface'
              ? <String>[]
              : selection.getters) {
        if (getters.any((g) => g.name == name)) {
          throw StateError('Duplicate getter: $name');
        }
        final getter = actualType.lookUpGetter(name, element.library);
        if (getter == null || getter.isStatic || name.startsWith('_')) {
          throw StateError(
            'Unknown public instance getter: ${entry.key}.$name',
          );
        }
        var type = typeRef(getter.returnType).declaredAs(
          typeRef(
            element.thisType.lookUpGetter(name, element.library)!.returnType,
            forTypescript: true,
          ),
        );
        if (selection.data.getters.contains(name)) {
          type = _dataType(type, '${entry.key}.$name');
        }
        if (!_getterKinds.contains(type.kind)) {
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
            cache:
                element is EnumElement &&
                !getter.isOriginDeclaration &&
                getter.variable.isFinal &&
                {'String', 'bool', 'int', 'double', 'num'}.contains(type.kind),
          ),
        );
      }
      if (getters.isNotEmpty &&
          selection.kind == null &&
          !isWidget &&
          getters.any(
            (g) => !selection.constructors.values.every(
              (params) => params.contains(g.name),
            ),
          )) {
        throw StateError('Value getters require selected constructor fields');
      }
      final setters = <FlaxCodegenGetterModel>[];
      for (final name
          in selection.kind == 'widgetInterface'
              ? <String>[]
              : selection.setters) {
        final setter = actualType.lookUpSetter(name, element.library);
        if ((!{'object', 'enum'}.contains(selection.kind) &&
                !(isWidget && selection.kind == null)) ||
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
        if (!_setterKinds.contains(type.kind)) {
          throw StateError('Unsupported setter type: $name');
        }
        setters.add(FlaxCodegenGetterModel(name, type));
      }
      final methods = <FlaxCodegenMethodModel>[];
      final staticMethods = {
        for (final entry in selection.methods.entries)
          if (selection.kind != 'widgetInterface' ||
              element.getMethod(entry.key)?.isStatic == true)
            entry.key: entry.value,
      };
      final selectedMethods = {
        ...staticMethods,
        ...selection.instanceMethods,
        ...selection.operators,
      };
      if (selectedMethods.length !=
          staticMethods.length +
              selection.instanceMethods.length +
              selection.operators.length) {
        throw StateError('Duplicate method selection');
      }
      if (selection.operators.isNotEmpty &&
          !{'object', 'enum'}.contains(selection.kind)) {
        throw StateError('Class operators require an object binding');
      }
      if (selection.instanceMethods.isNotEmpty &&
          !{'state', 'object', 'stream', 'enum'}.contains(selection.kind) &&
          !isWidget) {
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
        final operatorName = selection.operators.containsKey(chosen.key)
            ? chosen.key
            : null;
        final exportedName = operatorName == null
            ? chosen.key
            : flaxCodegenClassOperators[operatorName] ??
                  (throw StateError(
                    'Unsupported class operator: $operatorName',
                  ));
        if (operatorName != null &&
            (selection.methods.containsKey(exportedName) ||
                selection.instanceMethods.containsKey(exportedName) ||
                selection.getters.contains(exportedName) ||
                selection.setters.contains(exportedName) ||
                selection.constructors.containsKey(exportedName) ||
                selection.staticGetters.contains(exportedName) ||
                selection.staticSetters.contains(exportedName))) {
          throw StateError(
            'Conflicting operator export: ${entry.key}.$exportedName',
          );
        }
        final instance =
            operatorName != null ||
            selection.instanceMethods.containsKey(chosen.key);
        final method = operatorName != null
            ? _classOperator(actualType, operatorName)
            : instance
            ? (actualType.lookUpMethod(
                    chosen.key,
                    element.library,
                    concrete: selection.proxy == 'extends',
                  ) ??
                  actualType.lookUpMethod(chosen.key, element.library))
            : element.getMethod(chosen.key);
        if (method == null ||
            method.isStatic == instance ||
            method.isPrivate ||
            method.isOperator != (operatorName != null)) {
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
        final originalMethod = operatorName != null
            ? _classOperator(element.thisType, operatorName)!
            : instance
            ? (element.thisType.lookUpMethod(
                    chosen.key,
                    element.library,
                    concrete: selection.proxy == 'extends',
                  ) ??
                  element.thisType.lookUpMethod(chosen.key, element.library))!
            : method;
        final deferredFactory = effectiveDeferredFactories.contains(chosen.key);
        final explicitTypeArgs =
            selection.methodTypeArguments[chosen.key] ?? const <String>[];
        final sharedArguments =
            !deferredFactory &&
                method.typeParameters.isNotEmpty &&
                explicitTypeArgs.isEmpty
            ? _sharedTypeArguments(
                this,
                scope,
                method.typeParameters,
                element.library,
                '${entry.key}.${chosen.key}',
              )
            : null;
        if (sharedArguments?.supported == false) {
          throw StateError(sharedArguments!.reason!);
        }
        final typeArgs = explicitTypeArgs.isNotEmpty
            ? explicitTypeArgs
            : sharedArguments?.sources ?? const <String>[];
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
        final runtimeMethodArguments =
            sharedArguments?.arguments ??
            [
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
        final signature =
            deferredFactory || sharedArguments?.requiresTypeArguments == true
            ? method.type
            : typeArgs.isEmpty
            ? method.type
            : method.type.instantiate(runtimeMethodArguments);
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

        final results = {
          'String',
          'bool',
          'int',
          'double',
          'num',
          ...flaxCodegenBufferTypes.keys,
          'BigInt',
          'enum',
          'void',
          'never',
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
          'context',
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
        if (args.any((p) => !_setterKinds.contains(p.type.kind))) {
          throw StateError('Unsupported method arguments: ${chosen.key}');
        }
        methods.add(
          FlaxCodegenMethodModel(
            exportedName,
            args,
            operatorName: operatorName,
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
                  defaultType: sharedArguments?.requiresTypeArguments == true
                      ? null
                      : typeRef(
                          deferredFactory
                              ? originalMethod.typeParameters[i].bound ??
                                    element
                                        .library
                                        .typeProvider
                                        .objectQuestionType
                              : runtimeMethodArguments[i],
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
            getter.enclosingElement != element ||
            !getter.isStatic ||
            getter.isPrivate ||
            staticGetters.any((g) => g.name == name) ||
            selection.constructors.containsKey(name) ||
            selectedMethods.containsKey(name)) {
          throw StateError('Invalid static getter: ${entry.key}.$name');
        }
        final type = typeRef(
          _publicStaticGetterType(actualType, getter.returnType),
        );
        staticGetters.add(
          FlaxCodegenGetterModel(name, type, isConst: getter.variable.isConst),
        );
      }
      final staticSetters = <FlaxCodegenGetterModel>[];
      if (genericParameters.isNotEmpty &&
          (selection.constructors.containsKey(r'$type') ||
              staticGetters.any((getter) => getter.name == r'$type') ||
              methods.any(
                (method) => !method.instance && method.name == r'$type',
              ) ||
              selection.asyncIterableFactory == r'$type')) {
        throw StateError(
          'Conflicting generic selector export: ${entry.key}.\$type',
        );
      }
      final staticNames = <String>{
        ...selection.staticGetters,
        ...selectedMethods.keys,
        ...selection.constructors.keys.where((name) => name.isNotEmpty),
        if (selection.proxy != null) 'implementation',
        if (selection.proxy != null) 'extend',
        if (selection.asyncIterableFactory != null)
          selection.asyncIterableFactory!,
      };
      for (final name in selection.staticSetters) {
        final setter = element.getSetter(name);
        final exported =
            'set${name.isEmpty ? '' : name[0].toUpperCase() + name.substring(1)}';
        if (setter == null ||
            !setter.isStatic ||
            setter.isPrivate ||
            setter.enclosingElement != element ||
            (setter.variable.isOriginDeclaration &&
                (setter.variable.isConst || setter.variable.isFinal))) {
          throw StateError('Invalid static setter: ${entry.key}.$name');
        }
        if (!staticNames.add(exported)) {
          throw StateError(
            'Conflicting static setter export: ${entry.key}.$exported',
          );
        }
        final input = setter.formalParameters.single.type;
        final type = typeRef(input)
            .declaredAs(typeRef(input, forTypescript: true));
        if (!_setterKinds.contains(type.kind)) {
          throw StateError(
            'Unsupported static setter type: ${entry.key}.$name',
          );
        }
        staticSetters.add(FlaxCodegenGetterModel(name, type));
      }
      final runtimeTypeSelection =
          selection.kind == 'object' ||
          selection.kind == null && !isWidget ||
          isWidget &&
              (widgetInterfaces.isNotEmpty ||
                  selection.proxy != null ||
                  getters.isNotEmpty ||
                  setters.isNotEmpty ||
                  methods.any((m) => m.instance));
      for (final chosen in entry.value.constructors.entries) {
        final constructor = actualType.constructors
            .where(
              (ctor) => (ctor.name == 'new' ? '' : ctor.name) == chosen.key,
            )
            .firstOrNull;
        if (element is EnumElement &&
            (chosen.key.isEmpty ||
                constructor == null ||
                !constructor.isFactory ||
                constructor.isPrivate)) {
          throw StateError(
            'Expected a named public enum factory: ${entry.key}.${chosen.key}',
          );
        }
        if (constructor == null ||
            (element is ClassElement &&
                element.isAbstract &&
                !constructor.isFactory &&
                selection.proxy != 'extends')) {
          throw StateError('Unknown constructor: ${entry.key}.${chosen.key}');
        }
        if (constructor.formalParameters.any(
          (p) => p.metadata.hasMustBeConst,
        )) {
          throw StateError(
            'Constructor requires compile-time constant arguments: ${entry.key}.${chosen.key}',
          );
        }
        List<FlaxCodegenParameterModel> constructorParametersFor(
          ConstructorElement candidate, {
          bool closed = false,
        }) => parameters(
          candidate.formalParameters,
          chosen.value,
          '${entry.key}.${chosen.key}',
          data: selection.data.constructors[chosen.key] ?? const [],
          mountedWidgetCallbacks: isWidget,
          declared: closed
              ? null
              : element.thisType.constructors
                    .firstWhere((c) => c.name == constructor.name)
                    .formalParameters,
          callbackSignatures: selection.callbackSignatures,
          callbackOptionalParameters: selection.callbackOptionalParameters,
          callbackErrorParameters: selection.callbackErrorParameters,
          callbackScopedParameters: selection.callbackScopedParameters,
        );
        var constructorParameters = constructorParametersFor(constructor);
        final specializations = <FlaxCodegenConstructorSpecializationModel>[];
        if (element.typeParameters.isNotEmpty &&
            selection.typeArguments.isEmpty) {
          final declaredConstructor = element.thisType.constructors.firstWhere(
            (candidate) => candidate.name == constructor.name,
          );
          final plan = _constructorSpecializationPlan(
            parser: this,
            element: element,
            constructor: declaredConstructor,
            runtimeConstructor: constructor,
            selectedParameters: chosen.value,
            concreteUses: concreteUses[identity(element)] ?? const [],
            runtimeTypes: runtimeTypeSelection,
          );
          if (!plan.supported) {
            throw StateError(
              '${plan.reason ?? 'Generic constructor specialization unavailable'}: '
              '${entry.key}.${chosen.key}',
            );
          }
          if (plan.scalarParameters.isNotEmpty) {
            constructorParameters = [
              for (final parameter in constructorParameters)
                if (plan.scalarParameters.contains(parameter.name))
                  parameter.withType(
                    FlaxCodegenTypeRef(
                      'scalar',
                      nullable:
                          declaredConstructor.formalParameters
                              .firstWhere(
                                (candidate) => candidate.name == parameter.name,
                              )
                              .type
                              .nullabilitySuffix ==
                          NullabilitySuffix.question,
                    ).declaredAs(parameter.type.declaration!),
                  )
                else
                  parameter,
            ];
          }
          for (final target in plan.targets) {
            // Fixed method arguments must satisfy every selected native owner.
            for (final method in methods.where(
              (method) =>
                  method.instance &&
                  selection.methodTypeArguments.containsKey(
                    method.operatorName ?? method.name,
                  ),
            )) {
              final concreteMethod = target.type.lookUpMethod(
                method.name,
                element.library,
              )!;
              try {
                _checkBounds(
                  concreteMethod.typeParameters,
                  [
                    for (final argument in method.typeArguments)
                      _runtimeType(argument, exports, element.library),
                  ],
                  element.library,
                  false,
                );
              } on StateError catch (error) {
                throw StateError(
                  'Invalid generic method arguments for constructor target '
                  '${entry.key}<${target.typeArguments.join(', ')}>.${method.name}: '
                  '${error.message}',
                );
              }
            }
            final concreteConstructor = target.type.constructors.firstWhere(
              (candidate) => candidate.name == constructor.name,
            );
            final concreteParameters = constructorParametersFor(
              concreteConstructor,
            );
            if (!runtimeTypeSelection && plan.targets.length == 1) {
              constructorParameters = concreteParameters;
            }
            specializations.add(
              FlaxCodegenConstructorSpecializationModel(
                typeArguments: target.typeArguments,
                typeArgumentTypes: [
                  for (final argument in target.type.typeArguments)
                    typeRef(argument),
                ],
                parameterTypes: [
                  for (final parameter in concreteParameters)
                    parameter.type.declaredAs(
                      parameter.type.declaration == null
                          ? null
                          : typeRef(
                              concreteConstructor.formalParameters
                                  .firstWhere((p) => p.name == parameter.name)
                                  .type,
                              forTypescript: true,
                            ),
                    ),
                ],
                runtimeDomains: target.runtimeDomains,
              ),
            );
          }
        }
        final runtimeParameterTypes = <FlaxCodegenTypeRef>[];
        if (element.typeParameters.isNotEmpty && runtimeTypeSelection) {
          runtimeParameterTypes.addAll(
            constructorParametersFor(
              constructor,
              closed: true,
            ).map((p) => p.type),
          );
        }
        constructors.add(
          FlaxCodegenConstructorModel(
            chosen.key,
            constructorParameters,
            specializations: specializations,
            runtimeParameterTypes: runtimeParameterTypes,
          ),
        );
        if (constructors.last.parameters.any((p) => p.type.kind == 'void')) {
          throw StateError('Void constructor inputs are unsupported');
        }
      }
      if (!isWidget &&
          !{
            'route',
            'page',
            'object',
            'stream',
            'enum',
          }.contains(selection.kind) &&
          constructors.any(
            (c) => c.parameters.any((p) => p.type.kind == 'callback'),
          )) {
        throw StateError(
          'Stored callbacks currently require a mounted Widget owner',
        );
      }
      if (selection.kind == null &&
          !isWidget &&
          getters.any(
            (g) => {'kind', 'type', 'ctor', 'args'}.contains(g.name),
          )) {
        throw StateError('Getter conflicts with a descriptor field');
      }
      FlaxCodegenProxyModel? proxy;
      if (selection.proxy != null) {
        if (element is! ClassElement) {
          throw StateError('Only classes support proxies');
        }
        if ((selection.kind != 'object' &&
                !(isWidget &&
                    selection.kind == null &&
                    selection.proxy == 'extends')) ||
            !{'extends', 'implements'}.contains(selection.proxy)) {
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
        if (selection.proxy == 'extends' && constructors.isEmpty) {
          throw StateError('An extends proxy needs a generative constructor');
        }
        if (!widgetInterfaceProxy &&
            selection.proxy == 'implements' &&
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
            constructors.any(
              (selected) => actualType.constructors
                  .firstWhere(
                    (c) => (c.name == 'new' ? '' : c.name) == selected.name,
                  )
                  .isFactory,
            )) {
          throw StateError('A proxy needs a generative super constructor');
        }
        final hierarchy = [actualType, ...actualType.allSupertypes]
            .where(
              (t) =>
                  !(t.element.library.isDartCore && t.element.name == 'Object'),
            )
            .toList();
        final interfaceMembers = widgetInterfaceProxy
            ? nativeWidgetMembers._members(actualType).keys.toSet()
            : null;
        final proxySuperMembers = <String>[];
        var proxySuperBase = element;
        if (widgetInterfaceProxy) {
          final framework = await session.getLibraryByUri(
            'package:flutter/widgets.dart',
          );
          proxySuperBase =
              (framework as LibraryElementResult).element.exportNamespace.get2(
                'StatelessWidget',
              ) as ClassElement;
          scope.nativeTypes['StatelessWidget'] = 'package:flutter/widgets.dart';
          nativeWidgetMembers.validateProxyBase(
            element.thisType,
            proxySuperBase.thisType,
          );
        }
        final mustCallSuperAccessors = <String>[];
        final proxyGetters = <FlaxCodegenGetterModel>[];
        final proxySetters = <FlaxCodegenGetterModel>[];
        for (final setter in [false, true]) {
          final names = {
            for (final t in hierarchy)
              for (final accessor in setter ? t.setters : t.getters)
                if (!accessor.isStatic &&
                    (interfaceMembers == null ||
                        interfaceMembers.contains(
                          '${setter ? 'setter' : 'getter'}:${accessor.name!.replaceFirst(RegExp(r'=$'), '')}',
                        )) &&
                    (!accessor.isPrivate ||
                        accessor.isAbstract ||
                        selection.proxy == 'implements'))
                  accessor.name!.replaceFirst(RegExp(r'=$'), ''),
            ...(setter ? setters : getters).map((member) => member.name),
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
              if (selection.inferredProxy) continue;
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
              if (_requiresSuper(proxySuperBase, member)) {
                mustCallSuperAccessors.add(member);
              }
            }
          }
        }
        final proxyMethods = <FlaxCodegenMethodModel>[];
        for (final name in {
          ...methods
              .where((method) => method.instance)
              .map((method) => method.operatorName ?? method.name),
          for (final t in hierarchy)
            for (final method in t.methods)
              if (!method.isStatic &&
                  (interfaceMembers == null ||
                      interfaceMembers.contains('method:${method.name}')) &&
                  (!method.isPrivate ||
                      method.isAbstract ||
                      selection.proxy == 'implements'))
                method.isOperator &&
                        method.name == '-' &&
                        method.formalParameters.isEmpty
                    ? 'unary-'
                    : method.name!,
        }) {
          final operatorName = flaxCodegenClassOperators.containsKey(name)
              ? name
              : null;
          final alias = operatorName == null
              ? name
              : flaxCodegenClassOperators[name]!;
          final method = operatorName == null
              ? actualType.lookUpMethod(name, element.library)
              : _classOperator(actualType, name);
          if (method != null &&
              method.isOperator &&
              !method.isAbstract &&
              !selection.operators.containsKey(name)) {
            continue;
          }
          if (method == null || method.isPrivate) {
            throw StateError('Proxy methods require public signatures: $name');
          }
          final selectedConcrete = methods.any(
            (candidate) => candidate.instance && candidate.name == alias,
          );
          final implementation = operatorName == null
              ? actualType.lookUpMethod(name, element.library, concrete: true)
              : method.isAbstract
              ? null
              : method;
          if (selection.proxy == 'extends' &&
              implementation != null &&
              selectedConcrete &&
              implementation.metadata.hasNonVirtual) {
            if (selection.inferredProxy) continue;
            throw StateError(
              'Non-virtual proxy method cannot be overridden: ${entry.key}.$name',
            );
          }
          final concreteOverride =
              (selection.proxy == 'extends' || widgetInterfaceProxy) &&
              (implementation != null ||
                  widgetInterfaceProxy && !method.isAbstract) &&
              selectedConcrete &&
              !(implementation ?? method).metadata.hasNonVirtual;
          if (selection.proxy != 'implements' &&
              !method.isAbstract &&
              !concreteOverride) {
            continue;
          }
          final declaredMethod = operatorName == null
              ? element.thisType.lookUpMethod(name, element.library)
              : _classOperator(element.thisType, name);
          if (declaredMethod == null || declaredMethod.isPrivate) {
            throw StateError('Proxy methods must be public: $name');
          }
          // Normalize lexical identities without erasing the configured owner bound.
          final previous = Map<TypeParameterElement, Object?>.identity();
          for (final (index, declared)
              in declaredMethod.typeParameters.indexed) {
            for (final parameter in [
              method.typeParameters[index],
              method.type.typeParameters[index],
              declaredMethod.type.typeParameters[index],
            ]) {
              previous.putIfAbsent(
                parameter,
                () => scope._callbackIdentities[parameter],
              );
              scope._callbackIdentities[parameter] = declared;
            }
          }
          try {
            final callback = typeRef(
              method.type,
              forTypescript:
                  isWidget &&
                  name == 'createState' &&
                  element.allSupertypes.any(
                    (parent) => identity(parent.element) == 'package:flutter/src/widgets/framework.dart::StatefulWidget',
                  ),
            );
            var result = callback.result!.declaredAs(
              typeRef(declaredMethod.returnType, forTypescript: true),
            );
            if (selection.data.results.contains(name)) {
              result = _dataType(result, '${entry.key}.$name result');
            }
            final mustCallSuper = _requiresSuper(proxySuperBase, name);
            proxyMethods.add(
              FlaxCodegenMethodModel(
                alias,
                parameters(
                  method.formalParameters,
                  method.formalParameters.map((p) => p.name!).toList(),
                  '${entry.key}.$name',
                  declared: declaredMethod.formalParameters,
                  data: selection.data.methods[name] ?? const [],
                  callbackSignatures: selection.callbackSignatures,
                  callbackOptionalParameters:
                      selection.callbackOptionalParameters,
                  callbackErrorParameters: selection.callbackErrorParameters,
                  callbackScopedParameters: selection.callbackScopedParameters,
                ),
                result,
                typeParameters: [
                  for (final (index, parameter)
                      in declaredMethod.typeParameters.indexed)
                    FlaxCodegenGenericParameter(
                      parameter.name!,
                      typeRef(
                        parameter.bound ??
                            element.library.typeProvider.objectQuestionType,
                        forTypescript: true,
                        typeOnlyPosition: true,
                      ),
                      defaultType: callback.typeParameters[index].defaultType,
                      genericIdentity: parameter,
                    ),
                ],
                mustCallSuper: mustCallSuper,
                instance: true,
                operatorName: operatorName,
              ),
            );
            if (concreteOverride && !proxySuperMembers.contains(alias)) {
              proxySuperMembers.add(alias);
            }
          } finally {
            for (final entry in previous.entries) {
              if (entry.value case final identity?) {
                scope._callbackIdentities[entry.key] = identity;
              } else {
                scope._callbackIdentities.remove(entry.key);
              }
            }
          }
        }
        if (proxyMethods.any((m) => m.operatorName == '==') &&
            !proxyGetters.any((g) => g.name == 'hashCode')) {
          throw StateError(
            'Proxy equality requires a selected hashCode getter',
          );
        }
        if (widgetInterfaceProxy) {
          final stateless = proxySuperBase;
          constructors.add(
            FlaxCodegenConstructorModel(
              '',
              parameters(
                stateless.constructors
                    .singleWhere((c) => c.name == 'new')
                    .formalParameters,
                ['key'],
                '${entry.key}.proxy',
              ),
            ),
          );
          if (!proxyMethods.any((method) => method.name == 'build')) {
            final build = stateless.getMethod('build')!;
            proxyMethods.add(
              FlaxCodegenMethodModel(
                'build',
                parameters(build.formalParameters, [
                  'context',
                ], '${entry.key}.build'),
                typeRef(build.returnType),
                instance: true,
              ),
            );
          }
        }
        proxy = FlaxCodegenProxyModel(
          selection.proxy!,
          proxyMethods,
          widgetInterface: widgetInterfaceProxy,
          superMethods: proxySuperMembers,
          mustCallSuperAccessors: mustCallSuperAccessors,
          getters: proxyGetters,
          setters: proxySetters,
        );
      }
      bool containsPrivateType(DartType type) => switch (type) {
        InterfaceType() =>
          type.element.isPrivate || type.typeArguments.any(containsPrivateType),
        FunctionType() =>
          containsPrivateType(type.returnType) ||
              type.formalParameters.any((p) => containsPrivateType(p.type)),
        RecordType() =>
          type.positionalFields.any((p) => containsPrivateType(p.type)) ||
              type.namedFields.any((p) => containsPrivateType(p.type)),
        _ => false,
      };
      FlaxCodegenTypeRef parentView(InterfaceType parent) =>
          containsPrivateType(parent)
          ? scope.typeOnlyReference(parent)
          : typeRef(parent).declaredAs(typeRef(parent, forTypescript: true));

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
          for (final ctor in constructors) {
            for (final target in ctor.specializations) {
              final argument = typeRef(
                _runtimeType(target.typeArguments[i], exports, element.library),
              );
              // A native generic view is not a plain JS data value.
              if (!{
                'any',
                'String',
                'bool',
                'int',
                'double',
                'num',
                'scalar',
              }.contains(argument.kind)) {
                throw StateError(
                  'Data generic constructor target '
                  '${entry.key}<${target.typeArguments.join(', ')}> requires '
                  'explicit class typeArguments for member conversion',
                );
              }
            }
          }
          genericParameters[i] = _dataGeneric(genericParameters[i]);
        }
      }
      classes.add(
        FlaxCodegenClassModel(
          name: entry.key,
          id: identity(element),
          kind:
              selection.kind ??
              (isWidget
                  ? 'widget'
                  : constructors.isEmpty
                  ? 'members'
                  : 'object'),
          constructors: constructors,
          supertypes: element.allSupertypes
              .map((type) => identity(type.element))
              .toList(),
          superTypes: [
            if (isWidget && selection.kind == 'object')
              const FlaxCodegenTypeRef('widget'),
            if (isWidget &&
                selection.kind == null &&
                selection.proxy == null &&
                (selection.getters.isNotEmpty ||
                    selection.setters.isNotEmpty ||
                    selection.instanceMethods.isNotEmpty))
              for (final parent in element.thisType.allSupertypes)
                if (_selections[identity(parent.element)] case final selected?
                    when selected.proxy == null &&
                        (selected.kind == 'object' &&
                                _isFlutterWidget(parent.element) ||
                            selected.kind == null &&
                                (selected.getters.isNotEmpty ||
                                    selected.setters.isNotEmpty ||
                                    selected.instanceMethods.isNotEmpty)))
                  parentView(parent),
            if (selection.kind == 'widgetInterface' ||
                isWidget && selection.kind == 'object')
              for (final parent in element.thisType.allSupertypes)
                if (_adaptations[identity(parent.element)] ==
                        'widgetInterface' ||
                    _adaptations[identity(parent.element)] == 'object' &&
                        _isFlutterWidget(parent.element))
                  parentView(parent),
            if (!isWidget && selection.kind != 'members')
              for (final parent in element.thisType.allSupertypes)
                if (!parent.isDartCoreObject &&
                    (_isPoolType(parent.element) &&
                            _adaptations.containsKey(
                              identity(parent.element),
                            ) ||
                        parent.element.library.isDartCore &&
                            {
                              'Iterable',
                              'List',
                              'Map',
                              'Set',
                            }.contains(parent.element.name) ||
                        parent.element.library.uri.toString() == 'dart:async' &&
                            {
                              'Future',
                              'Stream',
                            }.contains(parent.element.name)) &&
                    (!{'route', 'page'}.contains(selection.kind) ||
                        _adaptations[identity(parent.element)] ==
                            selection.kind))
                  parentView(parent),
            if (selection.kind != 'members')
              scope.typeOnlyReference(element.thisType),
            if (selection.kind != 'members')
              for (final parent in element.thisType.allSupertypes)
                if (!parent.isDartCoreObject &&
                    !(element is EnumElement &&
                        parent.element.library.isDartCore))
                  scope.typeOnlyReference(parent),
          ],
          asyncIterableFactory: selection.asyncIterableFactory,
          widgetInterfaces: widgetInterfaces,
          widgetMembers: widgetMembers,
          jsName: selection.jsName,
          typeParameters: genericParameters,
          proxy: proxy,
          typeArguments: ownerTypeArguments ?? const [],
          getters: getters,
          methods: methods,
          setters: setters,
          disposeMethod: selection.disposeMethod,
          capabilities: [if (selection.disposeMethod != null) 'Disposable'],
          listenerPairs: selection.listenerPairs,
          staticGetters: staticGetters,
          staticSetters: staticSetters,
        ),
      );
    }
    final extensions = <FlaxCodegenExtensionModel>[];
    final (extensionExports, _) = await _publicExports(config);
    for (final name in config.extensions.keys.toList()..sort()) {
      final candidate = extensionExports[name];
      if ((candidate is! ExtensionElement &&
              candidate is! ExtensionTypeElement) ||
          candidate!.isPrivate ||
          !flaxCodegenIsExportName(name)) {
        throw StateError(
          'Expected a public named extension or extension type: $name',
        );
      }
      final element = candidate as InstanceElement;
      final isExtensionType = element is ExtensionTypeElement;
      final receiverType = element is ExtensionTypeElement
          ? element.representation.type
          : (element as ExtensionElement).extendedType;
      final selection = config.extensions[name]!;
      FlaxCodegenTypeRef ref(DartType type) =>
          typeRef(type).declaredAs(typeRef(type, forTypescript: true));
      List<FlaxCodegenGenericParameter> generics(
        List<TypeParameterElement> parameters,
      ) {
        final defaults = _sharedTypeArguments(
          this,
          scope,
          parameters,
          element.library,
          name,
        );
        if (!defaults.supported) throw StateError(defaults.reason!);
        return [
          for (final (index, parameter) in parameters.indexed)
            FlaxCodegenGenericParameter(
              parameter.name!,
              typeRef(
                parameter.bound ??
                    element.library.typeProvider.objectQuestionType,
                forTypescript: true,
                typeOnlyPosition: true,
              ),
              defaultType: defaults.requiresTypeArguments
                  ? null
                  : typeRef(defaults.arguments[index]),
              genericIdentity: parameter,
            ),
        ];
      }

      final extensionIdentity = '${element.library.uri}::$name';
      if (_privateDependencyExtensions.contains(extensionIdentity) &&
          _coreDependencyExtensions.contains(extensionIdentity)) {
        throw StateError(
          'Extension is not publicly exported by its provider: $name',
        );
      }
      var provider = _privateDependencyExtensions.contains(extensionIdentity)
          ? null
          : _dependencyExtensions[extensionIdentity];
      final extensionGenerics = generics(element.typeParameters);
      final onType = ref(receiverType);
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
          'setter' || 'staticSetter' =>
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
            (member is SetterElement &&
                member.variable.isOriginDeclaration &&
                (member.variable.isConst || member.variable.isFinal)) ||
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
          'setter' || 'staticSetter' =>
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
          kind == 'setter' || kind == 'staticSetter'
              ? const FlaxCodegenTypeRef('void')
              : ref(member.returnType),
          typeParameters: [
            if (!isStatic) ...extensionGenerics,
            ...generics(member.typeParameters),
          ],
        );
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
      for (final setter in selection.staticSetters) {
        add(setter, 'staticSetter', null);
      }
      for (final method in selection.staticMethods.entries) {
        add(method.key, 'staticMethod', method.value);
      }
      for (final operator in selection.operators.entries) {
        add(operator.key, 'operator', operator.value);
      }
      if (provider != null) {
        final supplied = <FlaxCodegenExtensionMemberModel>[];
        for (final member in members) {
          final candidate = provider!.members
              .where((m) => m.kind == member.kind && m.name == member.name)
              .firstOrNull;
          if (candidate == null ||
              jsonEncode(
                    FlaxCodegenManifestCodec.encodeMethod(candidate.call),
                  ) !=
                  jsonEncode(
                    FlaxCodegenManifestCodec.encodeMethod(member.call),
                  )) {
            if (_coreDependencyExtensions.contains(extensionIdentity)) {
              throw StateError(
                'Core extension provider surface does not include '
                '$name.${member.name} with the selected signature',
              );
            }
            provider = null;
            break;
          }
          supplied.add(candidate);
        }
        if (provider != null) {
          members
            ..clear()
            ..addAll(supplied);
        }
      }
      members.sort((a, b) => a.call.name.compareTo(b.call.name));
      extensions.add(
        FlaxCodegenExtensionModel(
          name: name,
          isExtensionType: isExtensionType,
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
      final explicitTypeArguments = [
        for (final name in selection.typeArguments)
          _runtimeType(name, exports, function.library),
      ];
      final sharedArguments =
          explicitTypeArguments.isEmpty && function.typeParameters.isNotEmpty
          ? _sharedTypeArguments(
              this,
              scope,
              function.typeParameters,
              function.library,
              entry.key,
            )
          : null;
      if (sharedArguments?.supported == false) {
        throw StateError(sharedArguments!.reason!);
      }
      final typeArguments = explicitTypeArguments.isNotEmpty
          ? explicitTypeArguments
          : sharedArguments?.arguments ?? const <DartType>[];
      _checkBounds(
        function.typeParameters,
        typeArguments,
        function.library,
        false,
      );
      final signature =
          typeArguments.isEmpty ||
              sharedArguments?.requiresTypeArguments == true
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
        if (route.builders.toSet().length != route.builders.length) {
          throw StateError('Duplicate navigation callback: ${entry.key}');
        }
        for (final name in route.builders) {
          final type = args.where((p) => p.name == name).firstOrNull?.type;
          if (type?.kind != 'callback') {
            throw StateError(
              'Navigation callback must select a typed callback: ${entry.key}.$name',
            );
          }
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
            defaultType: sharedArguments?.requiresTypeArguments == true
                ? null
                : typeRef(typeArguments[i]),
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
            typeArguments: selection.typeArguments.isNotEmpty
                ? selection.typeArguments
                : sharedArguments?.sources ?? const [],
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
          final provider = _privateDependencyTopLevelOperations.contains(id)
              ? null
              : _dependencyReadonly[id];
          if (_coreDependencyTopLevelDeclarations.contains(id) &&
              (provider == null ||
                  _privateDependencyTopLevelOperations.contains(id))) {
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
        final provider = _privateDependencyTopLevelOperations.contains(id)
            ? null
            : _dependencySetters[id];
        if (_coreDependencyTopLevelDeclarations.contains(declarationId) &&
            (provider == null ||
                _privateDependencyTopLevelOperations.contains(id))) {
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
    await _validateTypeLibraryIdentityNames(scope, typeCarriers);
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
        ...scope.nativeTypes,
        for (final name in {
          if (scope.usesWidget || classes.any((c) => c.kind == 'widget'))
            'Widget',
          if (classes.any((c) => c.kind == 'route')) 'Route',
          if (classes.any((c) => c.kind == 'page')) ...['Page', 'BuildContext'],
          ...classes.map((c) => c.name),
          ...functions.map((f) => f.call.name),
          ...extensions.map((e) => e.name),
          ...scope.extensionTypeDeclarations.values.map((type) => type.name),
          ...?topLevel?.getters.where((g) => !g.isReference).map((g) => g.name),
          ...?topLevel?.setters.where((s) => !s.isReference).map((s) => s.name),
          ...scope.types.values.map((t) => t.name),
          ...snapshots.map((s) => s.name),
        })
          name: _typeLibraryUri(name, scope),
      },
      stateVariants: stateVariants,
    );
    module.validate();
    return module;
  }

  Future<void> _validateTypeLibraryIdentityNames(
    _FlaxCodegenTypeScope scope,
    Map<String, String> automaticTypeCarriers,
  ) async {
    final identitiesByName = <String, Map<String, String>>{};
    for (final entry in scope.nativeTypes.entries) {
      final name = entry.key;
      final result = await _contexts.contexts.first.currentSession
          .getLibraryByUri(entry.value);
      final declaration = result is LibraryElementResult
          ? result.element.exportNamespace.get2(name)
          : null;
      if (declaration is! InterfaceElement) {
        throw StateError('Unknown native type: $name in ${entry.value}');
      }
      identitiesByName[name] = {identity(declaration): entry.value};
      final selected = scope.exports[name];
      if (scope.config.classes.containsKey(name) &&
          selected is InterfaceElement) {
        identitiesByName[name]![identity(selected)] =
            scope.publicLibraries[name] ?? selected.library.uri.toString();
      }
    }
    for (final type in scope.types.values) {
      if (_dependencyTypeOwners.containsKey(type.id)) continue;
      final element = _elementsByIdentity[type.id];
      final owner = element == null
          ? null
          : _localDeclarationOwners[_declarationSource(element)];
      if (owner != null && owner != scope.config.name) continue;
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
    for (final entry in scope.extensionTypeDeclarations.entries) {
      identitiesByName.putIfAbsent(
        entry.value.name,
        () => <String, String>{},
      )[entry.key] = entry.value.library;
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
    final libraries =
        {..._packagePublicLibraries, ...config.publicLibraries}.entries.toList()
          ..sort((a, b) => a.value.jsPackage.compareTo(b.value.jsPackage));
    final (declarations, _) = await _publicExports(config);
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
                    declarations[name] != null &&
                        result.element.exportNamespace.definedNames2[name] ==
                            declarations[name] ||
                    (config.topLevel?.setters.contains(name) == true &&
                        declarations['$name='] != null &&
                        result
                                .element
                                .exportNamespace
                                .definedNames2['$name='] ==
                            declarations['$name=']),
              )
              .toList()
            ..sort();
      visible.addAll(exports);
      if (exports.isEmpty && !config.publicLibraries.containsKey(entry.key)) {
        continue;
      }
      final previous = routes
          .where((route) => route.jsPackage == entry.value.jsPackage)
          .firstOrNull;
      if (previous != null) {
        if (previous.tsOutput != entry.value.tsOutput ||
            config.publicLibraries.containsKey(previous.library) &&
                config.publicLibraries.containsKey(entry.key)) {
          throw StateError('Conflicting public library: ${entry.key}');
        }
        routes.remove(previous);
      }
      routes.add(
        FlaxCodegenLibraryModel(
          library: previous?.library ?? entry.key,
          jsPackage: entry.value.jsPackage,
          tsOutput: entry.value.tsOutput,
          exports: {...?previous?.exports, ...exports}.toList()..sort(),
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
    final selected = scope.exports[name];
    final carrier = selected == null
        ? null
        : _packagePublicCarriers[_declarationSource(selected)];
    if (carrier != null) return carrier;
    final config = scope.config;
    if (selected != null &&
        (config.classes.containsKey(name) ||
            config.functions.containsKey(name) ||
            config.extensions.containsKey(name) ||
            config.callbackSnapshots.containsKey(name) ||
            config.types.contains(name) ||
            config.typedefs.contains(name) ||
            config.topLevel?.getters.contains(name) == true ||
            config.topLevel?.setters.contains(name) == true)) {
      return scope.publicLibraries[name] ??
          scope.publicLibraries['$name='] ??
          config.library;
    }
    // References retain the provider's public import path through re-exports.
    final providerLibrary = _dependencyTypeLibraries[name];
    if (providerLibrary != null) return providerLibrary;
    final uri = scope.publicLibraries[name] ?? scope.publicLibraries['$name='];
    if (uri != null) return uri;
    for (final extension in scope.extensionTypeDeclarations.values) {
      if (extension.name == name) return extension.library;
    }
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
    final parsed = parseString(
      content: 'typedef _FlaxRuntimeType = $source;',
      throwIfDiagnostics: false,
    );
    if (parsed.errors.isNotEmpty ||
        parsed.unit.declarations.length != 1 ||
        parsed.unit.declarations.single is! GenericTypeAlias) {
      throw StateError('Invalid runtime type argument: $source');
    }
    DartType resolve(TypeAnnotation annotation) {
      if (annotation is! NamedType || annotation.importPrefix != null) {
        throw StateError(
          'Runtime type arguments require a concrete selected type: $source',
        );
      }
      final name = annotation.name.lexeme;
      final builtin = _builtinRuntimeElement(name, library);
      final element = builtin ?? exports[name] ?? _poolInterface(name);
      final arguments = [
        for (final argument
            in annotation.typeArguments?.arguments ?? const <TypeAnnotation>[])
          resolve(argument),
      ];
      if (element is! InterfaceElement ||
          arguments.length != element.typeParameters.length) {
        throw StateError(
          'Runtime type arguments require a concrete selected type: $source',
        );
      }
      final native = _nativeJsValueType(element) != null;
      if (builtin == null && !native && !_isPoolType(element)) {
        throw StateError('Unbound runtime type argument: $source');
      }
      _checkBounds(element.typeParameters, arguments, element.library, false);
      return element.instantiate(
        typeArguments: arguments,
        nullabilitySuffix: annotation.question != null
            ? NullabilitySuffix.question
            : NullabilitySuffix.none,
      );
    }

    return resolve((parsed.unit.declarations.single as GenericTypeAlias).type);
  }

  InterfaceElement? _builtinRuntimeElement(
    String name,
    LibraryElement library,
  ) {
    final provider = library.typeProvider;
    return switch (name) {
      'Object' => provider.objectElement,
      'String' => provider.stringElement,
      'bool' => provider.boolElement,
      'int' => provider.intElement,
      'double' => provider.doubleElement,
      'num' => provider.numElement,
      'Iterable' => provider.iterableElement,
      'List' => provider.listElement,
      'Map' => provider.mapElement,
      'Set' => provider.setElement,
      'Future' => provider.futureElement,
      'FutureOr' => provider.futureOrElement,
      'Stream'
          when _adaptations[identity(provider.streamElement)] == 'stream' =>
        provider.streamElement,
      _ => null,
    };
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
      if (!type.nullable && type.kind != 'void') {
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
      final variable = value.variable;
      final name =
          (variable is FieldElement && variable.isEnumConstant
              ? variable.name
              : null) ??
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
    localSelections: Set.of(_localSelections),
    snapshots: Map.of(_snapshots),
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
    _localSelections
      ..clear()
      ..addAll(checkpoint.localSelections);
    _snapshots
      ..clear()
      ..addAll(checkpoint.snapshots);
    _libraryByIdentity
      ..clear()
      ..addAll(checkpoint.libraryByIdentity);
    _elementsByIdentity
      ..clear()
      ..addAll(checkpoint.elementsByIdentity);
    _publicInputs.clear();
  }

  Future<void> dispose() async {
    if (_ownsContexts) await _contexts.dispose();
  }
}

/// Mutable parser tables captured by [FlaxCodegenBindingParser.checkpoint].
final class FlaxCodegenParserCheckpoint {
  const FlaxCodegenParserCheckpoint._({
    required this.adaptations,
    required this.argumentsByType,
    required this.selections,
    required this.localSelections,
    required this.snapshots,
    required this.libraryByIdentity,
    required this.elementsByIdentity,
  });

  final Map<String, String> adaptations;
  final Map<String, List<String>> argumentsByType;
  final Map<String, FlaxCodegenClassSelection> selections;
  final Set<String> localSelections;
  final Map<String, FlaxCodegenSnapshotModel> snapshots;
  final Map<String, String> libraryByIdentity;
  final Map<String, InterfaceElement> elementsByIdentity;
}

MethodElement? _classOperator(InterfaceType type, String name) {
  final method = type.lookUpMethod(name, type.element.library);
  return method?.isOperator == true ? method : null;
}
