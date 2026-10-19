import 'dart:convert';

import 'package:path/path.dart' as p;

import 'identity.dart';
import 'manifest_codec.dart';
import 'model.dart';

part 'library_emitter.dart';
part 'dart_type_emitter.dart';
part 'generic_call_emitter.dart';
part 'engine_generic_emitter.dart';
part 'proxy_dispatch_emitter.dart';

/// Generated modules pin UI protocol 24. Do not read Core `flaxBindingVersion`.
const _generatedUiProtocol = 24;

// Bound direct dispatch to 32 branches; larger signatures keep Dart defaults
// through a typed tear-off without duplicating private constants.
const _applyOmissionThreshold = 6;

bool _isWidgetObject(FlaxCodegenClassModel type) =>
    type.kind == 'object' && type.isWidgetSubtype;

FlaxCodegenTypeRef? _futureSupertype(FlaxCodegenClassModel type) =>
    type.superTypes.where((parent) => parent.kind == 'future').firstOrNull;

FlaxCodegenTypeRef? _classCollection(FlaxCodegenClassModel type) {
  if (type.kind != 'object') return null;
  final parents = type.superTypes
      .where((t) => {'list', 'map', 'set', 'iterable'}.contains(t.kind))
      .toList();
  if (parents.any((t) => t.kind == 'list' || t.kind == 'set')) {
    parents.removeWhere((t) => t.kind == 'iterable');
  }
  if (parents.map((t) => t.kind).toSet().length > 1) {
    throw StateError('Ambiguous core collection shape: ${type.name}');
  }
  return parents.firstOrNull;
}

String _quote(String value) => jsonEncode(value).replaceAll(r'$', r'\$');

// Widget instance APIs need a real receiver; rendering-only bindings keep
// descriptions and their reactive constructor arguments.
bool _hasWidgetObjectView(FlaxCodegenClassModel type) =>
    type.kind == 'widget' &&
    (type.widgetInterfaces.isNotEmpty ||
        type.proxy != null ||
        type.getters.isNotEmpty ||
        type.setters.isNotEmpty ||
        type.methods.any((method) => method.instance));

bool _nativeWidgetFactory(FlaxCodegenClassModel type) =>
    _hasWidgetObjectView(type) &&
    (type.proxy == null || type.widgetInterfaces.isNotEmpty);

/// Stable key order so reversed [Map] insertion cannot change emission.
Map<String, String> _sortedStringMap(Map<String, String> map) {
  final entries = map.entries.toList()
    ..sort((left, right) => left.key.compareTo(right.key));
  return Map<String, String>.fromEntries(entries);
}

List<String> _sortedUniqueCapabilities(List<String> capabilities) {
  return capabilities.toSet().toList()..sort();
}

String _capabilitiesDartLiteral(List<String> capabilities) {
  final unique = _sortedUniqueCapabilities(capabilities);
  if (unique.isEmpty) {
    return 'const <String>[]';
  }
  return 'const <String>[${unique.map(_quote).join(', ')}]';
}

String _literalModuleId(FlaxCodegenModuleModel module) {
  final explicit = module.moduleId;
  if (explicit != null && explicit.isNotEmpty) {
    return explicit;
  }
  final inferred = _inferModuleIdFromMembers(module);
  if (inferred != null) {
    return inferred;
  }
  return 'codegen.test/${module.name}';
}

String? _inferModuleIdFromMembers(FlaxCodegenModuleModel module) {
  String? found;
  void consider(String id) {
    final hash = id.indexOf('#');
    if (hash <= 0) {
      return;
    }
    final candidate = id.substring(0, hash);
    final FlaxCodegenModuleId parsed;
    try {
      parsed = FlaxCodegenModuleId.parse(candidate);
    } on FormatException {
      return;
    }
    // Imported types may appear on this module's type list; only owned
    // wireIds use this module's name segment.
    if (parsed.name.value != module.name) {
      return;
    }
    if (found == null) {
      found = candidate;
      return;
    }
    if (found != candidate) {
      throw StateError(
        'Binding module ${module.name} has mixed moduleId prefixes',
      );
    }
  }

  for (final type in module.classes) {
    consider(type.id);
  }
  for (final type in module.types) {
    consider(type.id);
  }
  for (final function in module.ownedFunctions) {
    consider(function.id);
  }
  for (final getter
      in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
    consider(getter.id);
  }
  for (final snapshot in module.snapshots) {
    consider(snapshot.id);
  }
  return found;
}

const _typescriptHostImport =
    "import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';";

class FlaxCodegenBindingEmitter {
  FlaxCodegenBindingEmitter(
    this.modules, {
    this.requireDeferredTargets = false,
  }) {
    final extensionOwners = <String>{};
    for (final module in modules) {
      module.validate();
      for (final extension in module.extensions.where((e) => !e.isReference)) {
        if (!extensionOwners.add(
          '${extension.originatingUri}::${extension.name}',
        )) {
          throw StateError('Duplicate extension binding: ${extension.name}');
        }
      }
      for (final function in module.ownedFunctions) {
        if (_owners.containsKey(function.id)) {
          throw StateError("Duplicate function binding: ${function.id}");
        }
        _owners[function.id] = module;
      }
      for (final getter
          in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
        if (getter.isReference) continue;
        if (_owners.containsKey(getter.id)) {
          throw StateError('Duplicate readonly binding: ${getter.id}');
        }
        _owners[getter.id] = module;
      }
      for (final type in module.classes) {
        if ({'route', 'page'}.contains(type.kind)) {
          throw StateError(
            'Route and Page use ordinary object bindings: ${type.name}',
          );
        }
        if (_owners.containsKey(type.id)) {
          throw StateError('Duplicate class binding: ${type.id}');
        }
        _owners[type.id] = module;
        _classes[type.id] = type;
      }
    }
    for (final module in modules) {
      for (final type in module.types) {
        if (module.moduleId != null &&
            type.id.startsWith('${module.moduleId}#')) {
          _owners[type.id] = module;
        } else {
          _owners.putIfAbsent(type.id, () => module);
        }
        if (!_types.containsKey(type.id) ||
            identical(_owners[type.id], module)) {
          _types[type.id] = type;
        }
      }
      for (final getter
          in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
        if (getter.isReference && _owners[getter.id]?.topLevel == null) {
          throw StateError('Missing readonly provider: ${getter.id}');
        }
      }
      for (final setter
          in module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[]) {
        if (setter.isReference &&
            !(_owners[setter.id]?.topLevel?.setters.any(
                  (candidate) =>
                      candidate.id == setter.id && !candidate.isReference,
                ) ??
                false)) {
          throw StateError('Missing setter provider: ${setter.id}');
        }
      }
    }
    _intrinsicStreamTypeIds = {
      for (final module in modules)
        for (final type in _typescriptSignatureTypes(module))
          if (type.kind == 'stream' && type.id != null) type.id!,
    };
    final snapshotIds = {
      for (final module in modules) ...module.snapshots.map((s) => s.id),
    };
    for (final type in _types.values.where((type) => !type.isEnum)) {
      if (snapshotIds.contains(type.id)) continue;
      if (_intrinsicStreamTypeIds.contains(type.id)) continue;
      if (!modules.any(
        (module) => module.classes.any(
          (value) => value.id == type.id || value.supertypes.contains(type.id),
        ),
      )) {
        throw StateError(
          'No selected value constructor implements ${type.name}',
        );
      }
    }
    _validateDeferredFactories();
  }
  final List<FlaxCodegenModuleModel> modules;
  final bool requireDeferredTargets;
  final _owners = <String, FlaxCodegenModuleModel>{};
  final _classes = <String, FlaxCodegenClassModel>{};
  final _types = <String, FlaxCodegenNamedTypeModel>{};

  bool _isCoreRecord(FlaxCodegenClassModel? type) =>
      type?.superTypes.any(
        (parent) =>
            parent.originatingUri == 'dart:core' &&
            parent.originatingName == 'Record',
      ) ==
      true;

  String? _nativeObjectInput(FlaxCodegenClassModel? type) {
    if (type == null ||
        _owners[type.id]?.typeLibraries[type.name] != 'dart:core') {
      return null;
    }
    return {'DateTime', 'Uri', 'RegExp', 'Pattern'}.contains(type.name)
        ? type.name
        : null;
  }

  late final Set<String> _intrinsicStreamTypeIds;
  final _callbacks = <FlaxCodegenTypeRef, String>{};
  final _closedCallbacks = <String, FlaxCodegenTypeRef>{};
  final _sharedAdapters = <(String, String), String>{};
  final _proxyDispatch = <_ProxyDispatch>[];
  final _classProxyDispatch = <String, List<_ProxyDispatch>>{};
  final _constants = <String, String>{};
  final _sharedCallSignatures = <String, String>{};
  final _objectBindings = <String, String>{};
  final _collections = <String, (FlaxCodegenTypeRef, String)>{};
  final _futures = <String, (FlaxCodegenTypeRef, String)>{};
  final _streams = <String, (FlaxCodegenTypeRef, String)>{};
  final _erasedFutureItems = <String>{};
  bool _usesErasedValueCast = false;
  final _deferred =
      <
        String,
        (
          FlaxCodegenClassModel,
          FlaxCodegenMethodModel,
          FlaxCodegenMethodModel,
          String,
        )
      >{};

  bool _isClosedType(FlaxCodegenTypeRef type) => !_reachableType(
    type,
  ).any((node) => node.kind == 'parameter' || node.typeParameters.isNotEmpty);

  String _constant(String expression) => _constants.putIfAbsent(
    expression,
    () => '_flaxBinding${_constants.length}',
  );

  String _adapter(FlaxCodegenClassModel owner, String operation) {
    final name = operation.substring(operation.indexOf(':') + 1);
    final local =
        '_${owner.name}_${operation.startsWith('set:') ? 'set_' : ''}$name';
    return _vmFactory ? local : _sharedAdapters[(owner.id, operation)] ?? local;
  }

  void _findSharedAdapters(FlaxCodegenModuleModel module) {
    final signatures = <(String, String), Map<String, FlaxCodegenClassModel>>{};
    void add(FlaxCodegenClassModel owner, String operation, Object payload) {
      final key = (operation, jsonEncode(payload));
      (signatures[key] ??= {})[owner.id] = owner;
    }

    for (final owner in module.classes.where(
      (type) =>
          (type.kind == 'object' || _hasWidgetObjectView(type)) &&
          type.typeParameters.isEmpty &&
          type.typeArguments.isEmpty,
    )) {
      for (final getter in owner.getters.where((g) => _isClosedType(g.type))) {
        add(
          owner,
          'get:${getter.name}',
          FlaxCodegenManifestCodec.encodeGetter(getter),
        );
      }
      for (final setter in owner.setters.where((s) => _isClosedType(s.type))) {
        add(
          owner,
          'set:${setter.name}',
          FlaxCodegenManifestCodec.encodeGetter(setter),
        );
      }
      for (final method in owner.methods.where(
        (m) =>
            m.instance &&
            !m.deferredFactory &&
            m.operatorName == null &&
            m.typeParameters.isEmpty &&
            m.typeArguments.isEmpty &&
            _isClosedType(m.result) &&
            m.parameters.every((p) => _isClosedType(p.type)),
      )) {
        add(
          owner,
          'call:${method.name}',
          FlaxCodegenManifestCodec.encodeMethod(method),
        );
      }
    }
    for (final entry in signatures.entries) {
      final operation = entry.key.$1;
      final owners = entry.value;
      for (final owner in owners.values) {
        final ancestors =
            owner.supertypes.map((id) => owners[id]).nonNulls.toList()..sort((
              a,
              b,
            ) {
              final depth = a.supertypes.length.compareTo(b.supertypes.length);
              return depth == 0 ? a.id.compareTo(b.id) : depth;
            });
        if (ancestors.isEmpty) continue;
        final ancestor = ancestors.first;
        final name = operation.substring(operation.indexOf(':') + 1);
        // Ordinary typed calls remain virtual; lexical super is never shared.
        _sharedAdapters[(owner.id, operation)] =
            '_${ancestor.name}_${operation.startsWith('set:') ? 'set_' : ''}$name';
      }
    }
  }

  /// Structural nesting used by deferred-factory and shared validation.
  /// Intentionally omits [FlaxCodegenTypeRef.declaration] and
  /// [FlaxCodegenTypeRef.typeParameters].
  Iterable<FlaxCodegenTypeRef> _nestedTypes(FlaxCodegenTypeRef type) sync* {
    yield type;
    if (type.item case final item?) yield* _nestedTypes(item);
    if (type.key case final key?) yield* _nestedTypes(key);
    if (type.result case final result?) yield* _nestedTypes(result);
    for (final argument in type.dartArguments) {
      yield* _nestedTypes(argument);
    }
    for (final argument in type.tsArguments) {
      yield* _nestedTypes(argument);
    }
    for (final parameter in type.parameters) {
      yield* _nestedTypes(parameter.type);
    }
    for (final field in type.recordFields) {
      yield* _nestedTypes(field.type);
    }
  }

  /// Complete type metadata, including declarations and lexical generic bounds.
  /// Leaves the structural-only [_nestedTypes] traversal unchanged.
  Iterable<FlaxCodegenTypeRef> _reachableType(FlaxCodegenTypeRef type) sync* {
    yield type;
    if (type.item case final item?) yield* _reachableType(item);
    if (type.key case final key?) yield* _reachableType(key);
    if (type.result case final result?) {
      yield* _reachableType(result);
    }
    for (final argument in type.dartArguments) {
      yield* _reachableType(argument);
    }
    for (final argument in type.tsArguments) {
      yield* _reachableType(argument);
    }
    for (final parameter in type.parameters) {
      yield* _reachableType(parameter.type);
    }
    for (final field in type.recordFields) {
      yield* _reachableType(field.type);
    }
    if (type.declaration case final declared?) {
      yield* _reachableType(declared);
    }
    for (final parameter in type.typeParameters) {
      yield* _reachableType(parameter.bound);
      if (parameter.defaultType case final defaults?) {
        yield* _reachableType(defaults);
      }
    }
  }

  /// TypeScript signature reachability for upstream import discovery only.
  Iterable<FlaxCodegenTypeRef> _typescriptSignatureTypes(
    FlaxCodegenModuleModel module,
  ) sync* {
    for (final getter
        in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
      yield* _reachableType(getter.type);
    }
    for (final setter
        in module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[]) {
      yield* _reachableType(setter.type);
    }
    for (final alias in module.typedefs) {
      yield* _reachableType(alias.target);
      for (final parameter in alias.typeParameters) {
        yield* _reachableType(parameter.bound);
        if (parameter.defaultType case final defaults?) {
          yield* _reachableType(defaults);
        }
      }
    }
    for (final named in module.types) {
      for (final value in named.enumValueTypes.values) {
        yield* _reachableType(value);
      }
    }
    for (final type in module.classes) {
      for (final parameter in type.typeParameters) {
        yield* _reachableType(parameter.bound);
        if (parameter.defaultType case final defaults?) {
          yield* _reachableType(defaults);
        }
      }
      for (final parent in type.superTypes) {
        yield* _reachableType(parent);
      }
      for (final interface in type.widgetInterfaces) {
        yield* _reachableType(interface);
      }
      for (final constructor in type.constructors) {
        for (final parameter in constructor.parameters) {
          yield* _reachableType(parameter.type);
        }
        for (final input in constructor.runtimeParameterTypes) {
          yield* _reachableType(input);
        }
        for (final target in constructor.specializations) {
          for (final argument in target.typeArgumentTypes) {
            yield* _reachableType(argument);
          }
          for (final parameter in target.parameterTypes) {
            yield* _reachableType(parameter);
          }
        }
      }
      for (final getter in [
        ...type.getters,
        ...type.setters,
        ...type.staticGetters,
        ...type.staticSetters,
      ]) {
        yield* _reachableType(getter.type);
      }
      for (final method in type.methods) {
        yield* _reachableType(method.result);
        for (final parameter in method.parameters) {
          yield* _reachableType(parameter.type);
        }
        for (final parameter in method.typeParameters) {
          yield* _reachableType(parameter.bound);
          if (parameter.defaultType case final defaults?) {
            yield* _reachableType(defaults);
          }
        }
      }
      if (type.proxy case final proxy?) {
        for (final method in proxy.methods) {
          yield* _reachableType(method.result);
          for (final parameter in method.parameters) {
            yield* _reachableType(parameter.type);
          }
          for (final parameter in method.typeParameters) {
            yield* _reachableType(parameter.bound);
            if (parameter.defaultType case final defaults?) {
              yield* _reachableType(defaults);
            }
          }
        }
        for (final getter in proxy.getters) {
          yield* _reachableType(getter.type);
        }
        for (final setter in proxy.setters) {
          yield* _reachableType(setter.type);
        }
      }
    }
    for (final variant in module.stateVariants) {
      for (final interface in variant.interfaces) {
        yield FlaxCodegenTypeRef(
          'object',
          id: interface.wireId ?? interface.id,
          name: interface.name,
        );
      }
      for (final getter in [...variant.getters, ...variant.setters]) {
        yield* _reachableType(getter.type);
      }
      for (final method in variant.methods) {
        yield* _reachableType(method.result);
        for (final parameter in method.parameters) {
          yield* _reachableType(parameter.type);
        }
      }
    }
    for (final named in module.types) {
      for (final parameter in named.typeParameters) {
        yield* _reachableType(parameter.bound);
        if (parameter.defaultType case final defaults?) {
          yield* _reachableType(defaults);
        }
      }
    }
    for (final function in module.ownedFunctions) {
      yield* _reachableType(function.call.result);
      for (final parameter in function.call.parameters) {
        yield* _reachableType(parameter.type);
      }
      for (final parameter in function.call.typeParameters) {
        yield* _reachableType(parameter.bound);
        if (parameter.defaultType case final defaults?) {
          yield* _reachableType(defaults);
        }
      }
    }
  }

  Iterable<FlaxCodegenTypeRef> _allTypes() sync* {
    for (final module in modules) {
      for (final getter
          in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
        yield* _nestedTypes(getter.type);
      }
      for (final type in module.classes) {
        for (final constructor in type.constructors) {
          for (final parameter in constructor.parameters) {
            yield* _nestedTypes(parameter.type);
          }
          for (final input in constructor.runtimeParameterTypes) {
            yield* _nestedTypes(input);
          }
        }
        for (final getter in [
          ...type.getters,
          ...type.setters,
          ...type.staticGetters,
        ]) {
          yield* _nestedTypes(getter.type);
        }
        for (final method in type.methods) {
          yield* _nestedTypes(method.result);
          for (final parameter in method.parameters) {
            yield* _nestedTypes(parameter.type);
          }
        }
      }
      for (final function in module.ownedFunctions) {
        yield* _nestedTypes(function.call.result);
        for (final parameter in function.call.parameters) {
          yield* _nestedTypes(parameter.type);
        }
      }
    }
  }

  bool _containsParameter(FlaxCodegenTypeRef type, Set<String> names) =>
      type.kind == 'parameter' && names.contains(type.name) ||
      (type.declaration != null &&
          _containsParameter(type.declaration!, names)) ||
      (type.item != null && _containsParameter(type.item!, names)) ||
      (type.key != null && _containsParameter(type.key!, names)) ||
      (type.result != null && _containsParameter(type.result!, names)) ||
      type.parameters.any((p) => _containsParameter(p.type, names)) ||
      type.recordFields.any((field) => _containsParameter(field.type, names)) ||
      type.dartArguments.any((value) => _containsParameter(value, names)) ||
      type.tsArguments.any((value) => _containsParameter(value, names));

  bool _containsAnyParameter(FlaxCodegenTypeRef type) =>
      type.kind == 'parameter' ||
      (type.declaration != null && _containsAnyParameter(type.declaration!)) ||
      (type.item != null && _containsAnyParameter(type.item!)) ||
      (type.key != null && _containsAnyParameter(type.key!)) ||
      (type.result != null && _containsAnyParameter(type.result!)) ||
      type.parameters.any((p) => _containsAnyParameter(p.type)) ||
      type.recordFields.any((field) => _containsAnyParameter(field.type)) ||
      type.dartArguments.any(_containsAnyParameter) ||
      type.tsArguments.any(_containsAnyParameter);

  bool _validDeferredCallbackType(FlaxCodegenTypeRef type, Set<String> names) {
    if (type.typeParameters.isNotEmpty) return false;
    bool valid(FlaxCodegenTypeRef value) {
      if (!_containsParameter(value, names)) return true;
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
        ...value.parameters.map((p) => p.type),
        ...value.recordFields.map((field) => field.type),
      ].every(valid);
    }

    return valid(type);
  }

  bool _satisfiesDeferredBound(
    FlaxCodegenTypeRef value,
    FlaxCodegenTypeRef bound,
  ) {
    if (bound.kind == 'typeOnly') {
      throw StateError(
        'Concrete specialization required for type-only bound: ${bound.name}',
      );
    }
    if (bound.kind == 'any') return bound.nullable || !value.nullable;
    if (!bound.nullable && value.nullable) return false;
    if (bound.kind == 'num') {
      return {'int', 'double', 'num'}.contains(value.kind);
    }
    bool matchesReference(FlaxCodegenTypeRef candidate) {
      if (candidate.id != bound.id ||
          candidate.dartArguments.length != bound.dartArguments.length) {
        return false;
      }
      for (var i = 0; i < bound.dartArguments.length; i++) {
        if (!_satisfiesDeferredBound(
          candidate.dartArguments[i],
          bound.dartArguments[i],
        )) {
          return false;
        }
      }
      return true;
    }

    if (bound.id == null || value.id == null) {
      return bound.kind == value.kind && bound.id == value.id;
    }
    if (matchesReference(value)) return true;
    return _classes[value.id]?.superTypes.any(matchesReference) ?? false;
  }

  void _validateDeferredFactories() {
    final references = _allTypes().toList();
    for (final owner in _classes.values) {
      final factories = owner.methods
          .where((method) => method.deferredFactory)
          .toList();
      if (factories.isEmpty) continue;
      final targets = references
          .where(
            (type) =>
                type.kind == 'object' &&
                type.id == owner.id &&
                type.dartArguments.isNotEmpty &&
                !type.dartArguments.any(_containsAnyParameter),
          )
          .toList();
      if (targets.isEmpty && requireDeferredTargets) {
        throw StateError(
          'Deferred factory has no concrete target: ${owner.name}',
        );
      }
      for (final factory in factories) {
        if (factory.result.kind != 'object' || factory.result.id != owner.id) {
          throw StateError(
            'Deferred factory must return ${owner.name}: ${factory.name}',
          );
        }
        final names = factory.typeParameters.map((p) => p.name).toSet();
        for (final parameter in factory.parameters) {
          if (!_containsParameter(parameter.type, names)) continue;
          if (parameter.type.kind != 'callback' ||
              !_validDeferredCallbackType(parameter.type, names)) {
            throw StateError(
              'Deferred generic inputs require a direct synchronous callback: '
              '${owner.name}.${factory.name}.${parameter.name}',
            );
          }
        }
        for (final target in targets) {
          final inferred = _inferDeferredArguments(factory, target);
          for (final parameter in factory.typeParameters) {
            final value = inferred[parameter.name]!;
            final bound = _specializeDeferred(parameter.bound, inferred);
            if (!_satisfiesDeferredBound(value, bound)) {
              throw StateError(
                'Deferred generic bound is not satisfied: '
                '${owner.name}.${factory.name}.${parameter.name}',
              );
            }
          }
        }
      }
    }
  }

  final _vmShapes = <String, FlaxCodegenTypeRef>{};
  T _withVmFactory<T>(Iterable<String> parameters, T Function() emit) {
    final previousCallbacks = Map<FlaxCodegenTypeRef, String>.of(_callbacks);
    final previousFactory = _vmFactory;
    final previousParameters = Set<String>.of(_genericDartParameters);
    try {
      _callbacks.clear();
      _vmFactory = true;
      _genericDartParameters.addAll(parameters);
      return emit();
    } finally {
      _callbacks
        ..clear()
        ..addAll(previousCallbacks);
      _vmFactory = previousFactory;
      _genericDartParameters
        ..clear()
        ..addAll(previousParameters);
    }
  }

  bool _vmFactory = false;
  bool _usesVmCallbackResult = false;
  final _genericDartParameters = <String>{};
  late FlaxCodegenModuleModel _dartModule;
  final _dartImports = <String, String>{};
  String _dartName(String name, [String? id]) {
    final library =
        (id == null ? null : _owners[id]?.typeLibraries[name]) ??
        _dartModule.typeLibraries[name] ??
        modules
            .map((module) => module.typeLibraries[name])
            .whereType<String>()
            .firstOrNull ??
        _dartModule.library;
    final prefix = _dartImports.putIfAbsent(
      library,
      () => 'api${_dartImports.length}',
    );
    return '$prefix.$name';
  }

  String _dartType(FlaxCodegenTypeRef type, {String scalar = 'Object'}) {
    if (type.kind == 'never' && type.nullable) return 'Null';
    final base = switch (type.category) {
      FlaxCodegenTypeCategory.parameter => type.name!,
      FlaxCodegenTypeCategory.typeOnly => throw StateError(
        'Type-only reference cannot cross the Dart bridge: ${type.name}',
      ),
      FlaxCodegenTypeCategory.uint8List ||
      FlaxCodegenTypeCategory.buffer => _dartName(type.kind),
      FlaxCodegenTypeCategory.bigInt => _dartName('BigInt'),
      FlaxCodegenTypeCategory.widget =>
        '${_dartName(type.name ?? 'Widget', type.id)}${_referenceTypeArgs(type)}',
      FlaxCodegenTypeCategory.nativeFunction => 'Function',
      FlaxCodegenTypeCategory.callback =>
        '${_dartDeclaredType(type.result!, generic: type.typeParameters.isNotEmpty)} Function${_dartGenerics(type.typeParameters)}(${_dartFunctionParameters(type.parameters, generic: type.typeParameters.isNotEmpty)})',
      FlaxCodegenTypeCategory.iterable => 'Iterable<${_dartType(type.item!)}>',
      FlaxCodegenTypeCategory.list => 'List<${_dartType(type.item!)}>',
      FlaxCodegenTypeCategory.map =>
        'Map<${_dartType(type.key!)}, ${_dartType(type.item!)}>',
      FlaxCodegenTypeCategory.set => 'Set<${_dartType(type.item!)}>',
      FlaxCodegenTypeCategory.neverType => 'Never',
      FlaxCodegenTypeCategory.any => 'Object',
      FlaxCodegenTypeCategory.future => 'Future<${_dartType(type.item!)}>',
      FlaxCodegenTypeCategory.futureOr =>
        '${_dartName('FutureOr')}<${_dartType(type.item!)}>',
      FlaxCodegenTypeCategory.stream =>
        '${_dartName('Stream')}<${_dartType(type.item!)}>',
      FlaxCodegenTypeCategory.record => _dartRecordType(type),
      FlaxCodegenTypeCategory.data => 'Object',
      FlaxCodegenTypeCategory.enumeration ||
      FlaxCodegenTypeCategory.context ||
      FlaxCodegenTypeCategory.state ||
      FlaxCodegenTypeCategory.object =>
        '${_dartName(type.name!, type.id)}${_referenceTypeArgs(type)}',
      FlaxCodegenTypeCategory.scalar => scalar,
      FlaxCodegenTypeCategory.string ||
      FlaxCodegenTypeCategory.boolean ||
      FlaxCodegenTypeCategory.integer ||
      FlaxCodegenTypeCategory.number ||
      FlaxCodegenTypeCategory.numeric ||
      FlaxCodegenTypeCategory.voidType => type.kind,
    };
    return '$base${type.nullable ? '?' : ''}';
  }

  FlaxCodegenTypeRef? _extensionTypeDeclaration(FlaxCodegenTypeRef type) {
    var declaration = type.declaration;
    while (declaration != null) {
      if (declaration.isExtensionTypeDeclaration) return declaration;
      declaration = declaration.declaration;
    }
    return null;
  }

  bool _containsExtensionTypeRepresentation(FlaxCodegenTypeRef type) {
    if (_extensionTypeDeclaration(type) != null) return true;
    if (type.item case final item?
        when _containsExtensionTypeRepresentation(item)) {
      return true;
    }
    if (type.key case final key?
        when _containsExtensionTypeRepresentation(key)) {
      return true;
    }
    if (type.result case final result?
        when _containsExtensionTypeRepresentation(result)) {
      return true;
    }
    if (type.parameters.any(
      (parameter) => _containsExtensionTypeRepresentation(parameter.type),
    )) {
      return true;
    }
    if (type.recordFields.any(
      (field) => _containsExtensionTypeRepresentation(field.type),
    )) {
      return true;
    }
    return type.dartArguments.any(_containsExtensionTypeRepresentation) ||
        type.tsArguments.any(_containsExtensionTypeRepresentation);
  }

  String _dartTypeOnlyDeclaration(FlaxCodegenTypeRef type) {
    final arguments = type.tsArguments.isEmpty
        ? ''
        : '<${type.tsArguments.map(_dartStaticType).join(', ')}>';
    final uri = type.originatingUri;
    final prefix = uri == null
        ? null
        : _dartImports.putIfAbsent(uri, () => 'api${_dartImports.length}');
    final name = prefix == null
        ? _dartName(type.name!)
        : '$prefix.${type.originatingName ?? type.name}';
    return '$name$arguments${type.nullable ? '?' : ''}';
  }

  String _dartStaticType(FlaxCodegenTypeRef type, {String scalar = 'Object'}) {
    if (_extensionTypeDeclaration(type) case final declaration?) {
      return _dartTypeOnlyDeclaration(declaration);
    }
    if (type.declaration case final declaration?) {
      return _dartStaticType(declaration, scalar: scalar);
    }
    if (type.kind == 'never' && type.nullable) return 'Null';
    final base = switch (type.category) {
      FlaxCodegenTypeCategory.parameter => type.name!,
      FlaxCodegenTypeCategory.typeOnly => _dartTypeOnlyDeclaration(type),
      FlaxCodegenTypeCategory.uint8List ||
      FlaxCodegenTypeCategory.buffer => _dartName(type.kind),
      FlaxCodegenTypeCategory.bigInt => _dartName('BigInt'),
      FlaxCodegenTypeCategory.widget =>
        '${_dartName(type.name ?? 'Widget', type.id)}${_referenceTypeArgs(type)}',
      FlaxCodegenTypeCategory.nativeFunction => 'Function',
      FlaxCodegenTypeCategory.callback =>
        '${_dartStaticType(type.result!)} Function${_dartStaticGenerics(type.typeParameters)}(${_dartStaticFunctionParameters(type.parameters)})',
      FlaxCodegenTypeCategory.iterable =>
        'Iterable<${_dartStaticType(type.item!)}>',
      FlaxCodegenTypeCategory.list => 'List<${_dartStaticType(type.item!)}>',
      FlaxCodegenTypeCategory.map =>
        'Map<${_dartStaticType(type.key!)}, ${_dartStaticType(type.item!)}>',
      FlaxCodegenTypeCategory.set => 'Set<${_dartStaticType(type.item!)}>',
      FlaxCodegenTypeCategory.neverType => 'Never',
      FlaxCodegenTypeCategory.any => 'Object',
      FlaxCodegenTypeCategory.future =>
        'Future<${_dartStaticType(type.item!)}>',
      FlaxCodegenTypeCategory.futureOr =>
        '${_dartName('FutureOr')}<${_dartStaticType(type.item!)}>',
      FlaxCodegenTypeCategory.stream =>
        '${_dartName('Stream')}<${_dartStaticType(type.item!)}>',
      FlaxCodegenTypeCategory.record => _dartStaticRecordType(type),
      FlaxCodegenTypeCategory.data => 'Object',
      FlaxCodegenTypeCategory.enumeration ||
      FlaxCodegenTypeCategory.context ||
      FlaxCodegenTypeCategory.state ||
      FlaxCodegenTypeCategory.object =>
        '${_dartName(type.name!, type.id)}${_referenceTypeArgs(type)}',
      FlaxCodegenTypeCategory.scalar => scalar,
      FlaxCodegenTypeCategory.string ||
      FlaxCodegenTypeCategory.boolean ||
      FlaxCodegenTypeCategory.integer ||
      FlaxCodegenTypeCategory.number ||
      FlaxCodegenTypeCategory.numeric ||
      FlaxCodegenTypeCategory.voidType => type.kind,
    };
    return '$base${type.nullable ? '?' : ''}';
  }

  String _dartStaticRecordType(FlaxCodegenTypeRef type) {
    final positional = type.recordFields
        .where((field) => field.positional)
        .toList();
    final named = type.recordFields
        .where((field) => !field.positional)
        .toList();
    final positionalTypes = positional
        .map((field) => _dartStaticType(field.type))
        .join(', ');
    final namedTypes = named
        .map((field) => '${_dartStaticType(field.type)} ${field.name}')
        .join(', ');
    if (positional.isEmpty) return '({$namedTypes})';
    if (named.isEmpty) {
      return '($positionalTypes${positional.length == 1 ? ',' : ''})';
    }
    return '($positionalTypes, {$namedTypes})';
  }

  String _dartStaticGenerics(List<FlaxCodegenGenericParameter> parameters) =>
      parameters.isEmpty
      ? ''
      : '<${parameters.map((parameter) => '${parameter.name} extends ${_dartStaticType(parameter.bound)}').join(', ')}>';

  String _dartStaticFunctionParameters(
    List<FlaxCodegenParameterModel> parameters,
  ) {
    final required = parameters
        .where((parameter) => parameter.positional && parameter.required)
        .map(
          (parameter) => '${_dartStaticType(parameter.type)} ${parameter.name}',
        )
        .toList();
    final optional = parameters
        .where((parameter) => parameter.positional && !parameter.required)
        .map(
          (parameter) => '${_dartStaticType(parameter.type)} ${parameter.name}',
        )
        .toList();
    final named = parameters
        .where((parameter) => !parameter.positional)
        .map(
          (parameter) =>
              '${parameter.required ? 'required ' : ''}${_dartStaticType(parameter.type)} ${parameter.name}',
        )
        .toList();
    if (optional.isNotEmpty) required.add('[${optional.join(', ')}]');
    if (named.isNotEmpty) required.add('{${named.join(', ')}}');
    return required.join(', ');
  }

  String _dartRecordType(FlaxCodegenTypeRef type) {
    if (type.recordFields.isEmpty) return '()';
    final positional = type.recordFields
        .where((field) => field.positional)
        .toList();
    final named = type.recordFields
        .where((field) => !field.positional)
        .toList();
    final positionalTypes = positional
        .map((field) => _dartType(field.type))
        .join(', ');
    final namedTypes = named
        .map((field) => '${_dartType(field.type)} ${field.name}')
        .join(', ');
    if (positional.isEmpty) return '({$namedTypes})';
    if (named.isEmpty) {
      return '($positionalTypes${positional.length == 1 ? ',' : ''})';
    }
    return '($positionalTypes, {$namedTypes})';
  }

  List<FlaxCodegenRecordFieldModel> _recordFields(FlaxCodegenTypeRef type) => [
    ...type.recordFields.where((field) => field.positional),
    ...(type.recordFields.where((field) => !field.positional).toList()
      ..sort((a, b) => a.name.compareTo(b.name))),
  ];

  String _dartDeclaredType(FlaxCodegenTypeRef type, {bool generic = false}) =>
      generic || _containsExtensionTypeRepresentation(type)
      ? _dartStaticType(type)
      : _dartType(type);

  String _dartGenerics(List<FlaxCodegenGenericParameter> parameters) =>
      _dartStaticGenerics(parameters);

  String _dartFunctionParameters(
    List<FlaxCodegenParameterModel> parameters, {
    bool generic = false,
  }) {
    final required = parameters
        .where((p) => p.positional && p.required)
        .map((p) => '${_dartInputType(p.type, generic: generic)} ${p.name}')
        .toList();
    final optional = parameters
        .where((p) => p.positional && !p.required)
        .map((p) => '${_dartInputType(p.type, generic: generic)} ${p.name}')
        .toList();
    final named = parameters
        .where((p) => !p.positional)
        .map(
          (p) =>
              '${p.required ? 'required ' : ''}${_dartInputType(p.type, generic: generic)} ${p.name}',
        )
        .toList();
    if (optional.isNotEmpty) required.add('[${optional.join(', ')}]');
    if (named.isNotEmpty) required.add('{${named.join(', ')}}');
    return required.join(', ');
  }

  String _typeArgs(List<String> args) =>
      args.isEmpty ? '' : '<${args.map(_dartTypeArgument).join(', ')}>';

  String _dartTypeArgument(String source) {
    const unqualified = {
      'dynamic',
      'void',
      'Never',
      'Object',
      'String',
      'bool',
      'int',
      'double',
      'num',
      'Function',
      'Record',
      'Symbol',
      'Type',
      'Iterable',
      'List',
      'Set',
      'Map',
      'Future',
    };
    return source.replaceAllMapped(
      RegExp(r'[A-Za-z_$][A-Za-z0-9_$]*(?:\.[A-Za-z_$][A-Za-z0-9_$]*)?'),
      (match) {
        final name = match.group(0)!;
        return name.contains('.') ||
                unqualified.contains(name) ||
                _genericDartParameters.contains(name)
            ? name
            : _dartName(name);
      },
    );
  }

  String _referenceTypeArgs(FlaxCodegenTypeRef type) =>
      type.dartArguments.isNotEmpty
      ? '<${type.dartArguments.map(_dartType).join(', ')}>'
      : type.tsArguments.isNotEmpty
      ? '<${type.tsArguments.map(_dartType).join(', ')}>'
      : _typeArgs(
          type.typeArguments.isNotEmpty
              ? type.typeArguments
              : _classes[type.id]?.typeArguments ?? const [],
        );

  String _dartInputType(FlaxCodegenTypeRef type, {bool generic = false}) =>
      type.kind == 'void'
      ? 'Object?'
      : _dartDeclaredType(type, generic: generic);

  String _parameterLocalName(FlaxCodegenParameterModel parameter) {
    final name = parameter.name;
    if (flaxCodegenIsIdentifierName(name) &&
        name != 'options' &&
        !name.startsWith('_flax')) {
      return name;
    }
    return '_flaxArg_${utf8.encode(name).map((v) => v.toRadixString(16)).join()}';
  }

  String _cast(
    String value,
    FlaxCodegenTypeRef type, {
    String scalar = 'Object',
  }) {
    if (type.kind == 'void') return value;
    if (_containsExtensionTypeRepresentation(type)) {
      // Extension types erase to their representation at runtime. The Flax
      // TypeRef has already validated that representation; this static cast is
      // therefore a representation check, not a new runtime object identity.
      return '$value as ${_dartStaticType(type)}';
    }
    // Widget lists are structural snapshots; retain their readonly behavior while
    // presenting the selected native interface type to the constructor.
    if (type.kind == 'list' &&
        type.item!.kind == 'widget' &&
        type.item!.id != null) {
      return '($value as List<${_dartName('Widget')}${type.item!.nullable ? '?' : ''}>${type.nullable ? '?' : ''})${type.nullable ? '?' : ''}.cast<${_dartType(type.item!)}>()';
    }
    return _dartType(type, scalar: scalar) == 'Object?'
        ? value
        : '$value as ${_dartType(type, scalar: scalar)}';
  }

  Map<String, FlaxCodegenTypeRef> _inferDeferredArguments(
    FlaxCodegenMethodModel method,
    FlaxCodegenTypeRef target,
  ) {
    final inferred = <String, FlaxCodegenTypeRef>{};
    void infer(FlaxCodegenTypeRef declared, FlaxCodegenTypeRef concrete) {
      final parameter = declared.kind == 'parameter'
          ? declared
          : declared.declaration?.kind == 'parameter'
          ? declared.declaration
          : null;
      if (parameter != null) {
        final previous = inferred[parameter.name];
        if (previous != null && _typeId(previous) != _typeId(concrete)) {
          throw StateError('Conflicting deferred generic inference');
        }
        inferred[parameter.name!] = concrete;
        return;
      }
      if (declared.kind == 'record') {
        if (concrete.kind != 'record' ||
            declared.recordFields.length != concrete.recordFields.length) {
          throw StateError('Incomplete deferred generic inference');
        }
        for (var i = 0; i < declared.recordFields.length; i++) {
          final declaredField = declared.recordFields[i];
          final concreteField = concrete.recordFields[i];
          if (declaredField.name != concreteField.name ||
              declaredField.positional != concreteField.positional) {
            throw StateError('Incomplete deferred generic inference');
          }
          infer(declaredField.type, concreteField.type);
        }
        return;
      }
      if (declared.id != null && declared.id != concrete.id) return;
      final declaredArgs = declared.tsArguments.isNotEmpty
          ? declared.tsArguments
          : [
              for (final argument in declared.dartArguments)
                argument.declaration ?? argument,
            ];
      final concreteArgs = concrete.dartArguments;
      if (declaredArgs.isNotEmpty) {
        if (declaredArgs.length != concreteArgs.length) {
          throw StateError('Incomplete deferred generic inference');
        }
        for (var i = 0; i < declaredArgs.length; i++) {
          infer(declaredArgs[i], concreteArgs[i]);
        }
      }
      if (declared.item != null && concrete.item != null) {
        infer(declared.item!, concrete.item!);
      }
      if (declared.key != null && concrete.key != null) {
        infer(declared.key!, concrete.key!);
      }
    }

    infer(method.result, target);
    for (final parameter in method.typeParameters) {
      final value = inferred[parameter.name];
      if (value == null || value.kind == 'parameter' && !_vmFactory) {
        throw StateError(
          'Incomplete deferred generic inference for ${_typeId(target)}',
        );
      }
    }
    return inferred;
  }

  FlaxCodegenTypeRef _specializeDeferred(
    FlaxCodegenTypeRef type,
    Map<String, FlaxCodegenTypeRef> inferred, [
    FlaxCodegenTypeRef? declared,
  ]) {
    final source = type.declaration ?? declared;
    final parameter = type.kind == 'parameter'
        ? type
        : source?.kind == 'parameter'
        ? source
        : null;
    if (parameter != null) {
      return inferred[parameter.name] ??
          (throw StateError('Incomplete deferred generic inference'));
    }
    FlaxCodegenTypeRef? nested(
      FlaxCodegenTypeRef? value,
      FlaxCodegenTypeRef? declaration,
    ) => value == null
        ? null
        : _specializeDeferred(value, inferred, declaration);
    final arguments = type.dartArguments.isNotEmpty
        ? type.dartArguments
        : type.tsArguments;
    return FlaxCodegenTypeRef(
      type.kind,
      id: type.id,
      name: type.name,
      nullable: type.nullable,
      item: nested(type.item, source?.item),
      key: nested(type.key, source?.key),
      parameters: [
        for (final (index, parameter) in type.parameters.indexed)
          parameter.withType(
            _specializeDeferred(
              parameter.type,
              inferred,
              source?.parameters[index].type,
            ),
          ),
      ],
      result: nested(type.result, source?.result),
      typeArguments: type.typeArguments,
      dartArguments: [
        for (var i = 0; type.kind != 'typeOnly' && i < arguments.length; i++)
          _specializeDeferred(
            arguments[i],
            inferred,
            source != null && source.tsArguments.length > i
                ? source.tsArguments[i]
                : null,
          ),
      ],
      primitiveKinds: type.primitiveKinds,
      tsArguments: type.kind == 'typeOnly'
          ? type.tsArguments
                .map((arg) => _specializeDeferred(arg, inferred))
                .toList()
          : type.tsArguments,
      originatingUri: type.originatingUri,
      originatingName: type.originatingName,
      recordFields: [
        for (final (index, field) in type.recordFields.indexed)
          FlaxCodegenRecordFieldModel(
            name: field.name,
            type: _specializeDeferred(
              field.type,
              inferred,
              source != null && source.recordFields.length > index
                  ? source.recordFields[index].type
                  : null,
            ),
            positional: field.positional,
          ),
      ],
    );
  }

  Map<String, (FlaxCodegenMethodModel, String)> _deferredBindings(
    FlaxCodegenTypeRef type,
  ) {
    final owner = type.id == null ? null : _classes[type.id];
    if (owner == null || type.dartArguments.isEmpty) return const {};
    final result = <String, (FlaxCodegenMethodModel, String)>{};
    for (final factory in owner.methods.where(
      (method) => method.deferredFactory,
    )) {
      final inferred = _inferDeferredArguments(factory, type);
      final specialized = FlaxCodegenMethodModel(factory.name, [
        for (final parameter in factory.parameters)
          parameter.withType(_specializeDeferred(parameter.type, inferred)),
      ], type);
      final id = _typeId(type, omitNullable: true);
      final key = '$id::${factory.name}';
      final name = _deferred
          .putIfAbsent(
            key,
            () => (owner, factory, specialized, '_deferred${_deferred.length}'),
          )
          .$4;
      result[factory.name] = (specialized, name);
    }
    return result;
  }

  void _writeDeferredHelpers(StringBuffer out) {
    for (final entry in _deferred.values) {
      final (owner, factory, specialized, name) = entry;
      if (_vmFactory) {
        // The factory may have a stricter bound than its enclosing class.
        final inferred = _inferDeferredArguments(factory, specialized.result);
        final arguments = factory.typeParameters
            .map(
              (p) =>
                  'FlaxDartTypes.typeOf<${_dartDeclaredType(inferred[p.name]!)}>()',
            )
            .join(',');
        out.writeln('FlaxFunctionBinding? ${name}Binding;');
        out.writeln('Object $name(Map<String, Object?> values) {');
        out.writeln(
          '${name}Binding ??= types.functionById(${_quote(owner.staticMethodId(factory))}, [$arguments]);',
        );
        out.writeln('return ${name}Binding!.invoke(values)!; }');
        continue;
      }
      out.writeln('Object $name(Map<String, Object?> values) {');
      _emitCallableCall(
        out,
        specialized,
        (args) =>
            '${_dartName(owner.name)}.${factory.name}<${factory.typeParameters.map((parameter) => _dartDeclaredType(_inferDeferredArguments(factory, specialized.result)[parameter.name]!)).join(', ')}>($args)',
        tearOff:
            '${_dartName(owner.name)}.${factory.name}<${factory.typeParameters.map((parameter) => _dartDeclaredType(_inferDeferredArguments(factory, specialized.result)[parameter.name]!)).join(', ')}>',
      );
      out.writeln('}');
    }
  }

  String _ref(
    FlaxCodegenTypeRef type, {
    bool independentWidgetResult = false,
    bool withinCallback = false,
  }) {
    _rememberVmShape(type);
    if (_vmFactory && _containsAnyParameter(type)) {
      return _vmRef(type, withinCallback: withinCallback);
    }
    if (type.kind == 'typeOnly') {
      throw StateError(
        'Type-only reference cannot cross the Dart bridge: ${type.name}',
      );
    }
    final out = StringBuffer('FlaxTypeRef(${_quote(type.kind)}');
    if (type.id != null) out.write(', id: ${_quote(type.id!)}');
    final owner = _classes[type.id];
    if (owner != null &&
        owner.typeParameters.isNotEmpty &&
        !_containsAnyParameter(type)) {
      out.write(', dartType: FlaxDartTypes.typeOf<${_dartType(type)}>');
    }
    if (type.nullable) out.write(', nullable: true');
    if (type.item != null) {
      out.write(', item: ${_ref(type.item!, withinCallback: withinCallback)}');
    }
    if (type.key != null) {
      out.write(', key: ${_ref(type.key!, withinCallback: withinCallback)}');
    }
    final viewId = _typeId(type, omitNullable: true);
    if ({'iterable', 'list', 'map', 'set'}.contains(type.kind)) {
      final name = _collections
          .putIfAbsent(
            _typeId(type, omitNullable: true),
            () => (type, '_collection${_collections.length}'),
          )
          .$2;
      out.write(
        ', collection: FlaxCollectionBinding(${_quote(viewId)}, ${name}Create, ${name}Matches',
      );
      if (type.kind == 'list' && type.item!.kind == 'widget') {
        out.write(', snapshot: ${name}Snapshot');
      }
      if (type.kind == 'iterable') {
        out.write(', restore: ${name}Restore');
      }
      out.write(')');
      if (type.kind == 'list' || type.kind == 'set') {
        out.write(
          ', iterable: ${_ref(FlaxCodegenTypeRef('iterable', item: type.item!))}',
        );
      }
    }
    if ({'future', 'futureOr'}.contains(type.kind)) {
      final entry = _futures.putIfAbsent(
        _typeId(type.item!),
        () => (type.item!, '_future${_futures.length}'),
      );
      out.write(
        ', future: FlaxFutureBinding(${_quote(_typeId(type.item!))}, ${entry.$2}Adapt)',
      );
    }
    if (type.kind == 'stream' && type.id != null) {
      final entry = _streams.putIfAbsent(
        viewId,
        () => (type, '_stream${_streams.length}'),
      );
      out.write(
        ', stream: FlaxStreamBinding(${_quote(viewId)}, '
        '${entry.$2}Matches, ${entry.$2}Adapt)',
      );
    }
    if (type.kind == 'record') {
      out.write(', record: FlaxRecordBinding([');
      for (final field in _recordFields(type)) {
        out.write(
          'FlaxRecordFieldBinding(${_quote(field.name)}, ${_ref(field.type, withinCallback: withinCallback)}),',
        );
      }
      out.write(
        '], FlaxDartTypes.typeOf<${_dartRecordType(type.withNullability(false))}>, signature: ${_quote(viewId)})',
      );
    }
    if (type.category == FlaxCodegenTypeCategory.callback) {
      out.write(
        ', callback: ${_callbackBinding(type, independentWidgetResult: independentWidgetResult)}',
      );
    }
    final deferred = type.kind == 'object'
        ? _deferredBindings(type)
        : const <String, (FlaxCodegenMethodModel, String)>{};
    out.write(_deferredLiteral(deferred));
    out.write(')');
    final expression = out.toString();
    return !_vmFactory && _isClosedType(type)
        ? _constant(expression)
        : expression;
  }

  String _deferredLiteral(
    Map<String, (FlaxCodegenMethodModel, String)> deferred,
  ) {
    final out = StringBuffer();
    if (deferred.isNotEmpty) {
      out.write(', deferredFactories: {');
      for (final entry in deferred.entries) {
        final identity = _vmFactory
            ? 'types.key<${_dartStaticType(entry.value.$1.result)}>()'
            : _quote(_typeId(entry.value.$1.result, omitNullable: true));
        out.write(
          '${_quote(entry.key)}: FlaxDeferredFactoryBinding('
          '$identity, [',
        );
        for (final parameter in entry.value.$1.parameters) {
          out.write('${_parameterBinding(parameter)},');
        }
        out.write('], ${entry.value.$2}),');
      }
      out.write('}');
    }
    return out.toString();
  }

  String _callbackBinding(
    FlaxCodegenTypeRef type, {
    bool independentWidgetResult = false,
    bool signatureOnly = false,
  }) {
    final declared = type.declaration?.kind == 'callback'
        ? type.declaration!
        : type;
    final required = _vmRequiresTypeArguments(declared.typeParameters);
    // Keep the selected owner scope while defaulting only callback-local types.
    final encoded = declared.typeParameters.isNotEmpty
        ? FlaxCodegenTypeRef(
            'callback',
            parameters: type.parameters,
            result: type.result,
          ).specialize({
            for (final p in type.typeParameters)
              p.genericIdentity: required
                  ? const FlaxCodegenTypeRef('any', nullable: true)
                  : _vmDefaultArgument(p),
          })
        : type;
    final parameters = encoded.parameters
        .map(
          (p) =>
              'FlaxCallbackParameter(${_quote(p.name)}, ${_ref(p.type, withinCallback: true)}, required: ${p.required}, positional: ${p.positional}${p.encodeKind != null
                  ? ", encode: const FlaxTypeRef('${p.encodeKind}')"
                  : p.snapshot == null
                  ? ''
                  : ", encode: const FlaxTypeRef('data')"}${p.scoped ? ', scoped: true' : ''})',
        )
        .join(', ');
    final result = _ref(encoded.result!, withinCallback: true);
    final view = _typeId(type, omitNullable: true);
    final id = _vmFactory
        ? 'types.key<${_dartStaticType(type)}>() + ${_quote(':$view')}'
        : _quote(view);
    if (signatureOnly) {
      final expression =
          'FlaxCallbackBinding.signature([$parameters], $result, id: $id)';
      final binding = !_vmFactory && _isClosedType(type)
          ? _constant(expression)
          : expression;
      if (!_vmFactory) {
        final key = _sharedCallKey(
          encoded.parameters,
          encoded.result!,
          withinCallback: true,
        );
        if (key != null) _sharedCallSignatures.putIfAbsent(key, () => binding);
      }
      return binding;
    }
    final shapeType = _vmFactory ? declared : type;
    final simple =
        (_vmFactory || _isClosedType(type)) &&
        declared.typeParameters.isEmpty &&
        shapeType.parameters.length <= 2 &&
        shapeType.parameters.every(
          (p) =>
              p.positional &&
              p.required &&
              p.snapshot == null &&
              !_containsExtensionTypeRepresentation(p.type) &&
              !(p.type.kind == 'list' && p.type.item!.kind == 'widget'),
        ) &&
        !_containsExtensionTypeRepresentation(shapeType.result!) &&
        !{'future', 'futureOr'}.contains(shapeType.result!.kind) &&
        !(shapeType.result!.kind == 'list' &&
            shapeType.result!.item!.kind == 'widget');
    String expression;
    if (simple) {
      final args = [
        for (final p in shapeType.parameters) _dartInputType(p.type),
        if (shapeType.result!.kind != 'void') _dartType(shapeType.result!),
      ];
      final typeArgs = args.isEmpty ? '' : '<${args.join(', ')}>';
      final shape =
          '${shapeType.result!.kind == 'void' ? 'Void' : ''}${shapeType.parameters.length}';
      expression =
          'FlaxCallbackBinding([$parameters], $result, FlaxCallbackAdapters.wrap$shape$typeArgs, id: $id, invoke: FlaxCallbackAdapters.invoke$shape$typeArgs, matches: FlaxCallbackAdapters.matches$shape$typeArgs${independentWidgetResult ? ', independentWidgetResult: true' : ''})';
    } else {
      final adapterType = !_vmFactory && _isClosedType(type)
          ? _closedCallbacks.putIfAbsent(
              jsonEncode(FlaxCodegenManifestCodec.encodeTypeRef(type)),
              () => type,
            )
          : _vmFactory
          ? declared
          : type;
      final adapter = _callbacks.putIfAbsent(
        adapterType,
        () => '_callback${_callbacks.length}',
      );
      expression =
          'FlaxCallbackBinding([$parameters], $result, $adapter, id: $id, invoke: ${adapter}Invoke, matches: ${adapter}Matches${independentWidgetResult ? ', independentWidgetResult: true' : ''}${required ? ', requiresTypeArguments: true' : ''}${declared.typeParameters.isNotEmpty ? ', genericFactory: ${adapter}Types' : ''})';
    }
    return !_vmFactory && _isClosedType(type)
        ? _constant(expression)
        : expression;
  }

  _ProxyDispatch? _superDispatch(FlaxCodegenClassModel type, String operation) {
    return _classProxyDispatch[type.id]
        ?.where((g) => g.operations.contains(operation))
        .firstOrNull;
  }

  String _superAdapter(FlaxCodegenClassModel type, String operation) {
    final group = _superDispatch(type, operation);
    if (group != null) return group.helper('super:$operation');
    final separator = operation.indexOf(':');
    final kind = operation.substring(0, separator);
    final name = operation.substring(separator + 1);
    final prefix = kind == 'call' ? '' : '${kind}_';
    return '_${type.name}_super_$prefix$name';
  }

  String _proxyBinding(FlaxCodegenClassModel type) {
    final proxy = type.proxy;
    if (proxy == null || !_vmFactory && type.requiresTypeArguments) return '';
    final members = <String>[];
    final ownerArguments = {
      for (final (index, parameter) in type.typeParameters.indexed)
        if (_vmFactory || parameter.defaultType != null)
          parameter.genericIdentity: _vmFactory
              ? FlaxCodegenTypeRef(
                  'parameter',
                  name: type.typeArguments[index],
                  genericIdentity: parameter.genericIdentity,
                )
              : parameter.defaultType!.declaredAs(null),
    };
    for (final (name, callback) in proxy.callbacks) {
      final kind = name.startsWith('call:')
          ? 0
          : name.startsWith('get:')
          ? 1
          : 2;
      final expression =
          'FlaxProxyMember(${_quote(name.substring(name.indexOf(':') + 1))}, $kind, ${_callbackBinding(callback.typeParameters.isEmpty ? callback : callback.specialize(ownerArguments), signatureOnly: callback.typeParameters.isEmpty)}${proxy.hasSuperCallback(name) ? ', hasSuper: true' : ''}${kind == 0 && callback.typeParameters.isNotEmpty && proxy.hasSuperCallback(name) ? ', hasCallContext: true' : ''})';
      members.add(
        !_vmFactory && _isClosedType(callback)
            ? _constant(expression)
            : expression,
      );
    }
    return ', proxy: FlaxProxyBinding([${members.join(', ')}])';
  }

  String _typeId(FlaxCodegenTypeRef type, {bool omitNullable = false}) {
    final out = StringBuffer(
      '${type.kind}${type.nullable && !omitNullable ? '?' : ''}:${type.id ?? ''}',
    );
    if (type.kind == 'typeOnly') {
      out.write(
        '${jsonEncode(type.originatingUri)}::${jsonEncode(type.originatingName)}',
      );
      out.write('<${type.tsArguments.map(_typeId).join(',')}>');
    }
    if (type.typeArguments.isNotEmpty) {
      out.write('<${type.typeArguments.join(',')}>');
    }
    if (type.dartArguments.isNotEmpty) {
      out.write('<${type.dartArguments.map(_typeId).join(',')}>');
    }
    if (type.item != null) out.write('[${_typeId(type.item!)}]');
    if (type.key != null) out.write('[${_typeId(type.key!)}]');
    if (type.result != null) {
      out.write(
        '<${type.typeParameters.map((p) => '${p.name}:${_typeId(p.bound)}=${p.defaultType == null ? 'explicit' : _typeId(p.defaultType!)}').join(',')}>(${type.parameters.map((p) => '${p.positional ? 'p' : 'n'}:${p.required ? 'r' : 'o'}:${p.name}:${_typeId(p.type)}${p.encodeKind == null ? '' : ':e=${p.encodeKind}'}${p.scoped ? ':scoped' : ''}').join(',')})->${_typeId(type.result!)}',
      );
    }
    if (type.recordFields.isNotEmpty) {
      out.write(
        '{${type.recordFields.map((field) => '${field.positional ? 'p' : 'n'}:${field.name}:${_typeId(field.type)}').join(',')}}',
      );
    }
    return out.toString();
  }

  Map<Object?, FlaxCodegenTypeRef> _constructorTypeArguments(
    FlaxCodegenClassModel type,
    FlaxCodegenConstructorModel constructor,
    FlaxCodegenConstructorSpecializationModel target,
  ) {
    final inferred = <Object?, FlaxCodegenTypeRef>{
      if (target.typeArgumentTypes.length == type.typeParameters.length)
        for (final (index, parameter) in type.typeParameters.indexed)
          parameter.genericIdentity: target.typeArgumentTypes[index],
    };
    if (target.typeArgumentTypes.length == type.typeParameters.length) {
      return inferred;
    }
    void infer(FlaxCodegenTypeRef declared, FlaxCodegenTypeRef concrete) {
      final parameter = declared.kind == 'parameter'
          ? declared
          : declared.declaration?.kind == 'parameter'
          ? declared.declaration
          : null;
      if (parameter != null) {
        final index = type.typeParameters.indexWhere(
          (p) => p.genericIdentity == parameter.genericIdentity,
        );
        if (index < 0) return;
        var argument = concrete.declaredAs(null);
        // T? within any input does not make the selected T nullable.
        if (parameter.nullable && !target.typeArguments[index].endsWith('?')) {
          argument = argument.withNullability(false);
        }
        final previous = inferred[parameter.genericIdentity];
        if (previous != null &&
            _typeId(previous.withDataConversion(false)) !=
                _typeId(argument.withDataConversion(false))) {
          throw StateError(
            'Conflicting constructor type arguments: ${type.name}',
          );
        }
        if (previous == null || argument.kind == 'data') {
          inferred[parameter.genericIdentity] = argument;
        }
        return;
      }
      if (declared.isExtensionTypeDeclaration) {
        infer(declared.item!, concrete);
        return;
      }
      final declaredArguments = declared.tsArguments.isNotEmpty
          ? declared.tsArguments
          : declared.dartArguments;
      final concreteArguments = concrete.dartArguments.isNotEmpty
          ? concrete.dartArguments
          : concrete.tsArguments;
      if (declaredArguments.length != concreteArguments.length ||
          declared.recordFields.length != concrete.recordFields.length ||
          declared.parameters.length != concrete.parameters.length ||
          declared.typeParameters.length != concrete.typeParameters.length) {
        throw StateError('Mismatched constructor input types: ${type.name}');
      }
      for (var i = 0; i < declaredArguments.length; i++) {
        infer(declaredArguments[i], concreteArguments[i]);
      }
      if (declared.item != null && concrete.item != null) {
        infer(declared.item!, concrete.item!);
      }
      if (declared.key != null && concrete.key != null) {
        infer(declared.key!, concrete.key!);
      }
      if (declared.result != null && concrete.result != null) {
        infer(declared.result!, concrete.result!);
      }
      for (var i = 0; i < declared.recordFields.length; i++) {
        infer(declared.recordFields[i].type, concrete.recordFields[i].type);
      }
      for (var i = 0; i < declared.parameters.length; i++) {
        infer(declared.parameters[i].type, concrete.parameters[i].type);
      }
      for (var i = 0; i < declared.typeParameters.length; i++) {
        infer(
          declared.typeParameters[i].bound,
          concrete.typeParameters[i].bound,
        );
      }
    }

    for (final (index, parameter) in constructor.parameters.indexed) {
      if (!parameter.required) continue;
      infer(
        parameter.type.declaration ?? parameter.type,
        target.parameterTypes[index],
      );
    }
    if (type.typeParameters.any(
      (p) => !inferred.containsKey(p.genericIdentity),
    )) {
      throw StateError(
        'Missing concrete constructor type arguments: ${type.name}',
      );
    }
    return inferred;
  }

  FlaxCodegenTypeRef? _collectionView(FlaxCodegenClassModel type) => _vmFactory
      ? _classCollection(type)
      : _classCollection(type)?.specialize({
          for (final parameter in type.typeParameters)
            parameter.genericIdentity: parameter.defaultType ?? parameter.bound,
        });

  String _collectionViewBinding(FlaxCodegenClassModel type) {
    final collection = _collectionView(type);
    return collection == null ? '' : ', collectionView: ${_ref(collection)}';
  }

  List<String> _objectSuperTypes(
    FlaxCodegenClassModel type,
    String Function(FlaxCodegenTypeRef) parentName, {
    String Function(String)? shareOmittedKeys,
  }) {
    final collection = _classCollection(type);
    final members = {
      ...type.getters.map((g) => g.name),
      ...type.setters.map((g) => g.name),
      ...type.methods.where((m) => m.instance).map((m) => m.name),
      for (final parent in type.superTypes.where((p) => p.kind == 'typeOnly'))
        '__flaxBound:${parent.originatingUri}::${parent.originatingName}',
    };
    final ownKeys = [
      'typeof _flaxDartTypeValue',
      if (type.isWidgetSubtype) "'kind'",
      ...members.map(_quote),
    ].join(' | ');
    // The same keys otherwise repeat in every Omit of a flattened ancestry.
    final sharedKeys =
        shareOmittedKeys != null &&
            type.superTypes.length + type.widgetInterfaces.length > 1 &&
            ownKeys.length > 128
        ? shareOmittedKeys(ownKeys)
        : ownKeys;
    final bases = <String>[if (type.isWidgetSubtype) '_FlaxDartWidget'];
    final inherited = <String>[];
    for (final parent in [...type.superTypes, ...type.widgetInterfaces]) {
      if (parent.id == type.id) continue;
      if (parent.kind == 'iterable' && collection?.kind != 'iterable') continue;
      final name = parentName(parent);
      if (inherited.contains(name)) continue;
      if (parent.kind == 'typeOnly') {
        bases.add(name);
        continue;
      }
      final omitted = [sharedKeys, ...inherited.map((name) => 'keyof $name')];
      bases.add('Omit<$name, ${omitted.join(' | ')}>');
      inherited.add(name);
    }
    return bases;
  }

  String _default(FlaxCodegenParameterModel parameter) {
    if (parameter.defaultCode == 'const []') {
      return 'const <${_dartInputType(parameter.type.item!)}>[]';
    }
    if (parameter.type.kind == 'enum' && parameter.defaultCode != 'null') {
      return '${_dartName(parameter.type.name!)}.${parameter.defaultCode.split('.').last}';
    }
    return parameter.defaultCode;
  }

  void _guardPositionalOmission(
    StringBuffer out,
    List<FlaxCodegenParameterModel> parameters,
  ) {
    final positional = parameters.where((p) => p.positional).toList();
    for (final (index, parameter) in positional.indexed) {
      if (!parameter.omitWhenAbsent || index + 1 == positional.length) continue;
      final later = positional
          .skip(index + 1)
          .map((p) => 'values.containsKey(${_quote(p.name)})')
          .join(' || ');
      out.writeln(
        "if (!values.containsKey(${_quote(parameter.name)}) && ($later)) throw ArgumentError('Optional positional arguments must omit a trailing suffix');",
      );
    }
  }

  List<Map<String, Object?>> _memberParameters(
    List<FlaxCodegenParameterModel> parameters,
  ) => [
    for (final p in parameters)
      {
        'name': p.name,
        if (p.required) 'required': true,
        if (p.positional) 'positional': true,
        if (p.type.kind == 'context') 'context': p.type.id,
      },
  ];

  void _guardPositionalTs(
    StringBuffer out,
    List<FlaxCodegenParameterModel> parameters,
  ) {
    final positional = parameters.where((p) => p.positional).toList();
    for (final (index, parameter) in positional.indexed) {
      if (parameter.required || index + 1 == positional.length) continue;
      final later = positional
          .skip(index + 1)
          .map((p) => '${_parameterLocalName(p)} !== undefined')
          .join(' || ');
      out.writeln(
        "if (${_parameterLocalName(parameter)} === undefined && ($later)) throw new TypeError('Optional positional arguments must omit a trailing suffix');",
      );
    }
  }

  String _applyCall(
    String target,
    List<FlaxCodegenParameterModel> parameters,
    String Function(FlaxCodegenParameterModel) value,
    String Function(FlaxCodegenParameterModel) present, {
    List<String> prefix = const [],
  }) {
    final positional = <String>[...prefix];
    final named = <String>[];
    for (final parameter in parameters) {
      final condition = parameter.omitWhenAbsent
          ? 'if (${present(parameter)}) '
          : '';
      if (parameter.positional) {
        positional.add('$condition${value(parameter)}');
      } else {
        named.add('$condition#${parameter.name}: ${value(parameter)}');
      }
    }
    return 'Function.apply($target, <Object?>[${positional.join(', ')}], <Symbol, Object?>{${named.join(', ')}})';
  }

  String _superParameters(List<FlaxCodegenParameterModel> parameters) {
    final required = parameters
        .where((p) => p.positional && p.required)
        .map(
          (p) => '${_dartInputType(p.type)} super.${_parameterLocalName(p)}',
        );
    final optional = parameters
        .where((p) => p.positional && !p.required)
        .map((p) => '${_dartInputType(p.type)} super.${_parameterLocalName(p)}')
        .join(', ');
    final named = parameters
        .where((p) => !p.positional)
        .map(
          (p) =>
              '${p.required ? 'required ' : ''}${_dartInputType(p.type)} super.${p.name}',
        )
        .join(', ');
    return [
      ...required,
      if (optional.isNotEmpty) '[$optional]',
      if (named.isNotEmpty) '{$named}',
    ].join(', ');
  }

  String _constructorTarget(
    FlaxCodegenClassModel type,
    FlaxCodegenConstructorModel constructor, {
    FlaxCodegenConstructorSpecializationModel? specialization,
    bool proxyImplementation = false,
  }) {
    if (proxyImplementation) {
      return '_${type.name}Proxy${_typeArgs(type.typeArguments)}.${constructor.name.isEmpty ? 'new' : constructor.name}';
    }
    final owner =
        '${_dartName(type.name)}${_typeArgs(specialization?.typeArguments ?? type.typeArguments)}';
    return '$owner.${constructor.name.isEmpty ? 'new' : constructor.name}';
  }

  String _constructorCall(
    FlaxCodegenClassModel type,
    FlaxCodegenConstructorModel constructor, {
    FlaxCodegenConstructorSpecializationModel? specialization,
    Set<String> omitted = const {},
    bool proxyImplementation = false,
  }) {
    if (proxyImplementation) {
      final args = [
        "values['@peer'] as FlaxProxyPeer",
        for (final p in constructor.parameters)
          if (!omitted.contains(p.name))
            '${p.positional ? '' : '${p.name}: '}${_cast('values[${_quote(p.name)}]', p.type)}',
      ];
      return '_${type.name}Proxy${_typeArgs(type.typeArguments)}${constructor.name.isEmpty ? '' : '.${constructor.name}'}(${args.join(', ')})';
    }
    var name =
        '${_dartName(type.name)}${_typeArgs(specialization?.typeArguments ?? type.typeArguments)}';
    if (constructor.name.isNotEmpty) name += '.${constructor.name}';
    final arguments = <String>[];
    for (final (index, parameter) in constructor.parameters.indexed) {
      if (omitted.contains(parameter.name)) continue;
      final value = _constructorArgument(
        'values[${_quote(parameter.name)}]',
        constructor,
        index,
        specialization,
      );
      arguments.add(parameter.positional ? value : '${parameter.name}: $value');
    }
    return '$name(${arguments.join(', ')})';
  }

  String _constructorArgument(
    String value,
    FlaxCodegenConstructorModel constructor,
    int index,
    FlaxCodegenConstructorSpecializationModel? specialization,
  ) {
    final bridgeType = constructor.parameters[index].type;
    final type = specialization?.parameterTypes[index] ?? bridgeType;
    // Multiple targets share erased inputs before selecting concrete conversion.
    if (constructor.specializations.length > 1 &&
        (bridgeType.kind == 'any' ||
            ((bridgeType.item != null || bridgeType.kind == 'record') &&
                _typeId(bridgeType) != _typeId(type)))) {
      return '(${_erasedValue(value, type)}) as ${_dartType(type)}';
    }
    return _cast(value, type);
  }

  void _emitConstructorCalls(
    StringBuffer out,
    FlaxCodegenClassModel type,
    FlaxCodegenConstructorModel ctor, {
    bool proxyImplementation = false,
  }) {
    if (!_vmFactory && type.requiresTypeArguments) {
      out.writeln('return FlaxDartTypes.requireArguments();');
      return;
    }
    ctor = _runtimeConstructor(ctor);
    final optional = ctor.parameters.where((p) => p.omitWhenAbsent).toList();
    _guardPositionalOmission(out, ctor.parameters);
    void emit(
      int index,
      Set<String> omitted,
      FlaxCodegenConstructorSpecializationModel? specialization,
    ) {
      if (optional.length >= _applyOmissionThreshold) {
        final prefix = <String>[
          if (proxyImplementation) "values['@peer'] as FlaxProxyPeer",
        ];
        final call = _applyCall(
          _constructorTarget(
            type,
            ctor,
            specialization: specialization,
            proxyImplementation: proxyImplementation,
          ),
          ctor.parameters,
          (p) => _constructorArgument(
            'values[${_quote(p.name)}]',
            ctor,
            ctor.parameters.indexOf(p),
            specialization,
          ),
          (p) => 'values.containsKey(${_quote(p.name)})',
          prefix: prefix,
        );
        out.writeln(
          'return $call as ${_dartName(type.name)}${_typeArgs(specialization?.typeArguments ?? type.typeArguments)};',
        );
        return;
      }
      if (index == optional.length) {
        out.writeln(
          'return ${_constructorCall(type, ctor, specialization: specialization, omitted: omitted, proxyImplementation: proxyImplementation)};',
        );
        return;
      }
      final name = optional[index].name;
      out.writeln('if (!values.containsKey(${_quote(name)})) {');
      emit(optional[index].positional ? optional.length : index + 1, {
        ...omitted,
        name,
        if (optional[index].positional)
          ...ctor.parameters
              .skipWhile((p) => p.name != name)
              .where((p) => p.positional)
              .map((p) => p.name),
      }, specialization);
      out.writeln('}');
      emit(index + 1, omitted, specialization);
    }

    if (type.kind == 'object' || _hasWidgetObjectView(type)) {
      emit(0, {}, null);
      return;
    }
    if (ctor.specializations.length <= 1) {
      emit(0, {}, ctor.specializations.firstOrNull);
      return;
    }
    for (final specialization in ctor.specializations) {
      final checks = <String>[];
      for (final entry in specialization.runtimeDomains.entries) {
        final nullable = entry.value.endsWith('?');
        final domain = nullable
            ? entry.value.substring(0, entry.value.length - 1)
            : entry.value;
        final dartType = switch (domain) {
          'string' => 'String',
          'boolean' => 'bool',
          'number' => 'num',
          'list' => 'List',
          'map' => 'Map',
          'set' => 'Set',
          'iterable' => 'Iterable',
          _ => throw StateError('Unknown constructor runtime domain: $domain'),
        };
        final value = "values[${_quote(entry.key)}]";
        final parameter = ctor.parameters.firstWhere(
          (p) => p.name == entry.key,
        );
        final match =
            parameter.type.kind == 'iterable' &&
                {'list', 'set'}.contains(domain)
            ? 'flaxJsCollectionShape($value) == ${_quote(domain)}'
            : '$value is $dartType';
        checks.add(nullable ? '($value == null || $match)' : match);
      }
      if (checks.isEmpty) {
        throw StateError(
          'Multiple generic constructor specializations require observable runtime domains: ${type.name}.${ctor.name}',
        );
      }
      out.writeln('if (${checks.join(' && ')}) {');
      emit(0, {}, specialization);
      out.writeln('}');
    }
    out.writeln(
      "throw ArgumentError('No matching generated generic constructor specialization: ${type.name}.${ctor.name}');",
    );
  }

  void _emitCallableCall(
    StringBuffer out,
    FlaxCodegenMethodModel method,
    String Function(String) target, {
    String? tearOff,
  }) {
    if (method.requiresTypeArguments) {
      out.writeln('return FlaxDartTypes.requireArguments();');
      return;
    }
    _guardPositionalOmission(out, method.parameters);
    final optional = method.parameters.where((p) => p.omitWhenAbsent).toList();
    if (optional.length >= _applyOmissionThreshold) {
      if (tearOff == null) {
        throw StateError('Missing callable tear-off: ${method.name}');
      }
      final call = _applyCall(
        tearOff,
        method.parameters,
        (p) => _cast('values[${_quote(p.name)}]', p.type),
        (p) => 'values.containsKey(${_quote(p.name)})',
      );
      out.writeln(
        method.result.kind == 'void'
            ? '$call;'
            : 'return $call as ${_dartType(method.result)};',
      );
      if (method.result.kind == 'void') out.writeln('return null;');
      return;
    }
    void emitCall(int index, Set<String> omitted) {
      if (index < optional.length) {
        final name = optional[index].name;
        out.writeln('if (!values.containsKey(${_quote(name)})) {');
        emitCall(optional[index].positional ? optional.length : index + 1, {
          ...omitted,
          name,
          if (optional[index].positional)
            ...method.parameters
                .skipWhile((p) => p.name != name)
                .where((p) => p.positional)
                .map((p) => p.name),
        });
        out.writeln('}');
        emitCall(index + 1, omitted);
        return;
      }
      final args = method.parameters
          .where((p) => !omitted.contains(p.name))
          .map(
            (p) =>
                '${p.positional ? '' : '${p.name}: '}${_cast('values[${_quote(p.name)}]', p.type)}',
          )
          .join(', ');
      final call = target(args);
      out.writeln('${method.result.kind == 'void' ? '' : 'return '}$call;');
      if (method.result.kind == 'void') out.writeln('return null;');
    }

    emitCall(0, {});
  }

  void _writeSnapshots(StringBuffer out, FlaxCodegenModuleModel module) {
    final snapshots = {
      for (final snapshot in module.snapshots) snapshot.name: snapshot,
    };
    if (snapshots.containsKey('KeyEvent')) {
      out.writeln(
        "String _keyEventType(Object value) { final name = value.runtimeType.toString(); if (name.contains('KeyDown')) return 'keydown'; if (name.contains('KeyUp')) return 'keyup'; if (name.contains('KeyRepeat')) return 'repeat'; return 'key'; }",
      );
    }
    for (final snapshot in module.snapshots) {
      out.writeln('Object _snapshot${snapshot.name}(Object value) {');
      for (final child in module.snapshots.where(
        (s) => s.parent == snapshot.name,
      )) {
        out.writeln(
          'if (value is ${_dartName(child.name)}) return _snapshot${child.name}(value);',
        );
      }
      out.writeln('final v = value as ${_dartName(snapshot.name)};');
      out.writeln('return <String, Object?>{');
      if (snapshot.name == 'KeyEvent') {
        out.writeln("'type': _keyEventType(v),");
      }
      for (final field in snapshot.allFields(snapshots)) {
        final read = 'v.${field.name}';
        final encoded = switch (field.kind) {
          'snapshot' =>
            field.nullable
                ? '$read == null ? null : _snapshot${field.snapshot}($read)'
                : '_snapshot${field.snapshot}($read)',
          'enum' => field.nullable ? '$read?.name' : '$read.name',
          _ => read,
        };
        out.writeln('${_quote(field.name)}: $encoded,');
      }
      out.writeln('};');
      out.writeln('}');
    }
  }

  void _writeSnapshotTypes(StringBuffer out, FlaxCodegenModuleModel module) {
    final snapshots = {
      for (final snapshot in module.snapshots) snapshot.name: snapshot,
    };
    for (final snapshot in module.snapshots) {
      out.writeln('export interface ${snapshot.name} {');
      if (snapshot.name == 'KeyEvent') {
        out.writeln('  readonly type: string;');
      }
      for (final field in snapshot.allFields(snapshots)) {
        final type = switch (field.kind) {
          'snapshot' => field.snapshot!,
          'enum' =>
            field.enumNames.isEmpty
                ? 'string'
                : field.enumNames.map((name) => jsonEncode(name)).join(' | '),
          'bool' => 'boolean',
          'String' => 'string',
          _ => 'number',
        };
        out.writeln(
          '  readonly ${field.name}: $type${field.nullable ? ' | null' : ''};',
        );
      }
      out.writeln('}');
    }
  }

  String dart(FlaxCodegenModuleModel module) {
    _vmShapes.clear();
    _vmFactory = false;
    _usesVmCallbackResult = false;
    _genericDartParameters.clear();
    _callbacks.clear();
    _closedCallbacks.clear();
    _sharedAdapters.clear();
    _constants.clear();
    _sharedCallSignatures.clear();
    _objectBindings.clear();
    _collections.clear();
    _futures.clear();
    _streams.clear();
    _erasedFutureItems.clear();
    _usesErasedValueCast = false;
    _deferred.clear();
    _dartModule = module;
    _findSharedAdapters(module);
    _findProxyDispatch(module);
    _dartImports.clear();
    _dartImports[module.library] = 'api';
    for (final uri in _sortedStringMap(module.typeLibraries).values) {
      _dartImports.putIfAbsent(uri, () => 'api${_dartImports.length}');
    }
    for (final variant in module.stateVariants) {
      for (final mixin in variant.mixins) {
        _dartImports.putIfAbsent(
          mixin.library,
          () => 'api${_dartImports.length}',
        );
      }
    }
    final nativeClasses = module.classes;
    // Reuse only signatures already required by selected closed proxy members.
    for (final type in nativeClasses) {
      for (final callback
          in type.proxy?.callbacks.map((entry) => entry.$2) ??
              const <FlaxCodegenTypeRef>[]) {
        if (_sharedCallKey(callback.parameters, callback.result!) != null &&
            callback.typeParameters.isEmpty &&
            _isClosedType(callback)) {
          _callbackBinding(callback, signatureOnly: true);
        }
      }
    }
    final out = StringBuffer();
    out.writeln('// ignore: unused_element');
    out.writeln('const _flaxOmitted = Object();');
    // Private constants are accessible through public values, whose indexing is
    // not a constant expression. Keep ordinary modules const.
    final hasPrivateEnum = module.types.any(
      (type) =>
          type.isEnum &&
          _owners[type.id] == module &&
          type.enumNames.any((name) => name.startsWith('_')),
    );
    out.writeln(
      "${hasPrivateEnum ? 'final' : 'const'} ${module.name}Bindings = FlaxBindingModule('${module.name}', [",
    );
    for (final type in module.types.where(
      (type) => type.isEnum && _owners[type.id] == module,
    )) {
      out.writeln('FlaxEnumBinding(${_quote(type.id)}, {');
      for (final name in type.enumNames) {
        final value = name.startsWith('_')
            ? '${_dartName(type.name)}.values[${type.enumNames.indexOf(name)}]'
            : '${_dartName(type.name)}.$name';
        out.writeln('${_quote(name)}: $value,');
      }
      final surface = module.classes
          .where((value) => value.id == type.id)
          .firstOrNull;
      out.writeln(
        '}, supertypes: ${jsonEncode(surface?.supertypes ?? const <String>[])}),',
      );
    }
    for (final type in nativeClasses) {
      if (type.kind == 'enum') continue;
      if (type.kind == 'widgetInterface' ||
          (type.kind == 'widget' &&
              _bindingConstructors(type).isEmpty &&
              !_hasWidgetObjectView(type))) {
        out.writeln(
          'FlaxWidgetInterfaceBinding(${_quote(type.id)}, _is${type.name}),',
        );
        continue;
      }
      if (_nativeWidgetFactory(type)) {
        out.writeln('${_widgetObjectBinding(type)},');
        continue;
      }
      if (type.kind == 'object' &&
          type.typeParameters.isEmpty &&
          type.typeArguments.isEmpty) {
        out.writeln('${_objectBinding(type)},');
        continue;
      }
      if ({'context', 'state', 'object', 'stream'}.contains(type.kind)) {
        final binding = switch (type.kind) {
          'context' => 'FlaxContextBinding',
          'state' => 'FlaxStateBinding',
          'stream' => 'FlaxStreamTypeBinding',
          _ => 'FlaxObjectBinding',
        };
        out.writeln('$binding(${_quote(type.id)}, [');
        for (final getter in type.getters) {
          out.writeln('${_getterBinding(type, getter)},');
        }
        out.write(']');
        if (type.kind == 'state' ||
            type.kind == 'object' ||
            type.kind == 'stream') {
          out.write(', ${_instanceMethods(type)}');
        }
        if (type.kind == 'context' || type.kind == 'state') {
          if (type.kind == 'context') {
            out.write(', instanceMethods: ${_instanceMethods(type)}');
          }
          out.write(', matches: _is${type.name}');
        }
        if (type.kind == 'stream') {
          out.write(
            ', constructors: ${_constructors(type)}, create: _create${type.name}, '
            'matches: _is${type.name}, methods: {}, '
            'view: ${_ref(FlaxCodegenTypeRef('stream', id: type.id, name: type.name, item: type.typeParameters.single.defaultType!))}',
          );
        }
        if (type.kind == 'object') {
          final nativeInput = _nativeObjectInput(type);
          if (nativeInput != null) {
            out.write(', nativeInput: ${_quote(nativeInput)}');
          }
          out.write(
            ', constructors: ${_constructors(type)}, create: _create${type.name}, disposeMethod: ${type.disposeMethod == null ? 'null' : _quote(type.disposeMethod!)}, listenerPairs: ${jsonEncode(_sortedStringMap(type.listenerPairs))}, supertypes: ${jsonEncode(type.supertypes)}, setters: [',
          );
          for (final setter in type.setters) {
            out.write('${_setterBinding(type, setter)},');
          }
          out.write(
            '], matches: _is${type.name}, methods: const {}${_proxyBinding(type)}${_collectionViewBinding(type)}',
          );
        }
        out.writeln('),');
        continue;
      }
      if (type.kind == 'members') {
        out.writeln('FlaxMemberBinding(${_quote(type.id)}, {}),');
        continue;
      }
      out.writeln('FlaxWidgetBinding(${_quote(type.id)}, {');
      for (final ctor in type.constructors) {
        out.writeln('${_quote(ctor.name)}: [');
        for (final parameter in ctor.parameters) {
          out.writeln(
            '${_parameterBinding(parameter, independentWidgetResult: parameter.independentWidgetResult)},',
          );
        }
        out.writeln('],');
      }
      out.writeln(
        '}, _${type.name}Host${_typeArgs(type.typeArguments)}.new, matches: _is${type.name}, methods: {}, ${_hasWidgetObjectView(type) ? 'objectView: ${_widgetObjectBinding(type)},' : ''}),',
      );
    }
    out.writeln('], functions: [');
    for (final getter
        in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
      if (getter.isReference) continue;
      out.writeln(
        'FlaxFunctionBinding(${_quote(getter.id)}, [], ${_ref(getter.type)}, _read_${getter.name}),',
      );
    }
    final setters =
        module.topLevel?.setters
            .where((setter) => !setter.isReference)
            .toList() ??
        <FlaxCodegenTopLevelSetterModel>[];
    final functionNames = {
      for (final type in nativeClasses.where((type) => type.kind != 'enum'))
        for (final method in type.methods.where((method) => !method.instance))
          type.staticMethodId(method): '_${type.name}_${method.name}',
      for (final type in nativeClasses)
        for (final function in module.enumFunctions(type))
          function.id: function.call.name,
      for (final type in nativeClasses)
        for (final getter in type.staticGetters)
          type.staticGetterId(getter):
              '_${type.name}_static_get_${getter.name}',
      for (final type in nativeClasses)
        for (final setter in type.staticSetters)
          type.staticSetterId(setter):
              '_${type.name}_static_set_${setter.name}',
      for (final extension in module.extensions)
        for (final member in extension.members)
          member.id:
              '_extension_${extension.name}_${member.kind}_${member.kind == 'operator' ? member.call.name : member.name}',
      for (final setter in setters) setter.id: '_write_${setter.name}',
    };
    final constantReads = {
      for (final type in nativeClasses)
        for (final getter in type.staticGetters)
          if (getter.isConst)
            type.staticGetterId(getter):
                '${_dartName(type.name)}.${getter.name}',
    };
    final constantGroups = <String, Map<String, String>>{};
    // Setters reuse function conversion, but their Dart target is an assignment.
    for (final function in module.ownedFunctions) {
      if (constantReads[function.id] case final value?) {
        constantGroups.putIfAbsent(
          _ref(function.call.result),
          () => {},
        )[function.id] = value;
        continue;
      }
      final call = function.call;
      if (call.deferredFactory) {
        out.writeln(
          'FlaxFunctionBinding(${_quote(function.id)}, const [], const FlaxTypeRef("any"), _flaxDeferredRequiresType, genericFactory: ${_vmFunctionName(function.id)}),',
        );
        continue;
      }
      if (call.requiresTypeArguments) {
        out.writeln(
          'FlaxFunctionBinding(${_quote(function.id)}, const [], const FlaxTypeRef("any"), ${functionNames[function.id] ?? '_function_${call.name}'}, genericFactory: ${_vmFunctionName(function.id)}, requiresTypeArguments: true),',
        );
        continue;
      }
      final surface = _vmDefaultMethod(call);
      out.writeln('FlaxFunctionBinding(${_quote(function.id)}, [');
      for (final (index, p) in surface.parameters.indexed) {
        // Overload dispatch needs its original integer-preserving transport.
        final original = call.parameters[index].type;
        final input = original.kind == 'scalar' ? original : p.type;
        out.writeln('${_parameterBinding(p.withType(input))},');
      }
      out.write(
        '], ${_ref(surface.result)}, ${functionNames[function.id] ?? '_function_${call.name}'}',
      );
      if (function.route case final route?) {
        out.write(
          ', route: FlaxRouteCallBinding(${jsonEncode(route.builders)})',
        );
      }
      if (call.typeParameters.isNotEmpty) {
        out.write(', genericFactory: ${_vmFunctionName(function.id)}');
      }
      out.writeln('),');
    }
    out.writeln(
      '], constants: [${constantGroups.entries.map((group) => 'FlaxConstantGroup(${group.key}, {${group.value.entries.map((entry) => '${_quote(entry.key)}: ${entry.value}').join(',')}})').join(',')}], moduleId: ${_quote(_literalModuleId(module))}, '
      'dependencyModules: ${jsonEncode(({for (final type in _typescriptSignatureTypes(module))
        if (_owners[type.id] != null && _owners[type.id] != module) _literalModuleId(_owners[type.id]!), for (final type in module.types)
        if (_owners[type.id] != null && _owners[type.id] != module) _literalModuleId(_owners[type.id]!), for (final extension in module.extensions.where((value) => value.isReference))
        for (final member in extension.members)
          if (_owners[member.id] != null) _literalModuleId(_owners[member.id]!), for (final getter in module.topLevel?.getters ?? const <FlaxCodegenTopLevelGetterModel>[])
        if (getter.isReference && _owners[getter.id] != null) _literalModuleId(_owners[getter.id]!), for (final setter in module.topLevel?.setters ?? const <FlaxCodegenTopLevelSetterModel>[])
        if (setter.isReference && _owners[setter.id] != null) _literalModuleId(_owners[setter.id]!)}.toList()..sort()))}, '
      'uiProtocol: $_generatedUiProtocol, '
      'requiredCapabilities: ${_capabilitiesDartLiteral(module.requiredCapabilities)}, '
      'stateVariants: [${module.stateVariants.map((variant) => '_stateVariant_${variant.name}').join(', ')}]'
      ', dartTypes: [${_vmTypeTemplates(module).join(',')}], dartShapes: _flaxDartShapes);',
    );
    _writeStateVariantsDart(out, module);
    for (final extension in module.extensions.where((e) => !e.isReference)) {
      for (final member in extension.members) {
        final call = member.call;
        out.writeln(
          'Object? ${functionNames[member.id]}(Map<String, Object?> values) {',
        );
        if (call.requiresTypeArguments) {
          out.writeln('return FlaxDartTypes.requireArguments(); }');
          continue;
        }
        String genericArguments(List<FlaxCodegenGenericParameter> parameters) =>
            parameters.isEmpty
            ? ''
            : '<${parameters.map((p) => _dartDeclaredType(p.defaultType!)).join(', ')}>';
        final receiver = member.isStatic
            ? _dartName(extension.name)
            : extension.isExtensionType
            ? '(values[${_quote(call.parameters.first.name)}] as ${_dartName(extension.name)}${genericArguments(extension.typeParameters)})'
            : '${_dartName(extension.name)}${genericArguments(extension.typeParameters)}(${_cast('values[${_quote(call.parameters.first.name)}]', extension.onType)})';
        final args = member.isStatic
            ? call.parameters
            : call.parameters.skip(1).toList();
        final methodGenerics = call.typeParameters
            .skip(member.isStatic ? 0 : extension.typeParameters.length)
            .toList();
        _emitCallableCall(
          out,
          FlaxCodegenMethodModel(call.name, args, call.result),
          (arguments) {
            if (member.kind == 'getter' || member.kind == 'staticGetter') {
              return '$receiver.${member.name}';
            }
            if (member.kind == 'setter' || member.kind == 'staticSetter') {
              return '$receiver.${member.name} = $arguments';
            }
            if (member.kind == 'operator') {
              final values = args
                  .map((p) => _cast('values[${_quote(p.name)}]', p.type))
                  .toList();
              return switch (member.name) {
                '[]' => '$receiver[${values[0]}]',
                '[]=' => '$receiver[${values[0]}] = ${values[1]}',
                'unary-' => '-$receiver',
                '~' => '~$receiver',
                _ => '$receiver ${member.name} (${values.single})',
              };
            }
            return '$receiver.${member.name}${genericArguments(methodGenerics)}($arguments)';
          },
          tearOff:
              '$receiver.${member.name}${genericArguments(methodGenerics)}',
        );
        out.writeln('}');
      }
    }
    for (final function in module.functions) {
      final call = function.call;
      void emit(FlaxCodegenMethodModel selected, String helper) {
        out.writeln('Object? $helper(Map<String, Object?> values) {');
        _emitCallableCall(
          out,
          selected,
          (args) =>
              '${_dartName(call.name)}${_typeArgs(selected.typeArguments)}($args)',
          tearOff:
              '${_dartName(call.name)}${_typeArgs(selected.typeArguments)}',
        );
        out.writeln('}');
      }

      emit(call, '_function_${call.name}');
    }
    for (final getter
        in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
      if (getter.isReference) continue;
      final read = _dartName(getter.name);
      out.writeln(
        'Object? _read_${getter.name}(Map<String, Object?> values) '
        '${getter.type.kind == 'void' ? '{ $read; return null; }' : '=> $read;'}',
      );
    }
    for (final setter in setters) {
      out.writeln(
        'Object? _write_${setter.name}(Map<String, Object?> values) {',
      );
      _emitCallableCall(
        out,
        setter.asFunction().call,
        (value) => '${_dartName(setter.name)} = $value',
      );
      out.writeln('}');
    }
    for (final type in nativeClasses) {
      if (type.kind == 'enum') {
        final operations = module.enumFunctions(type).toList();
        FlaxCodegenMethodModel call(
          String member,
          String action, [
          String? constant,
        ]) => operations
            .singleWhere(
              (function) =>
                  function.id == type.enumOperationId(member, action, constant),
            )
            .call;
        final constants = module.types.singleWhere(
          (named) => named.id == type.id,
        );
        for (final constant
            in type.typeParameters.isEmpty
                ? <String?>[null]
                : constants.enumNames) {
          String receiver(FlaxCodegenMethodModel operation) =>
              '(values[${_quote(operation.parameters.first.name)}] as ${_dartType(operation.parameters.first.type)})';
          for (final getter in type.getters) {
            final operation = call(getter.name, 'get', constant);
            out.writeln(
              'Object? ${operation.name}(Map<String, Object?> values) => ${receiver(operation)}.${getter.name};',
            );
          }
          for (final setter in type.setters) {
            final operation = call(setter.name, 'set', constant);
            out.writeln(
              "Object? ${operation.name}(Map<String, Object?> values) { ${receiver(operation)}.${setter.name} = ${_cast("values['value']", operation.parameters.last.type)}; return null; }",
            );
          }
          for (final method in type.methods.where(
            (method) => method.instance,
          )) {
            final operation = call(method.name, 'call', constant);
            out.writeln(
              'Object? ${operation.name}(Map<String, Object?> values) {',
            );
            final target =
                '${receiver(operation)}.${method.name}${_typeArgs(method.typeArguments)}';
            if (method.operatorName != null) {
              final expression = _operatorExpression(
                receiver(operation),
                method.operatorName!,
                [
                  for (final parameter in operation.parameters.skip(1))
                    _cast('values[${_quote(parameter.name)}]', parameter.type),
                ],
              );
              out.writeln(
                '${operation.result.kind == 'void' ? '' : 'return '}$expression;',
              );
              if (operation.result.kind == 'void') out.writeln('return null;');
            } else {
              _emitCallableCall(
                out,
                FlaxCodegenMethodModel(
                  operation.name,
                  operation.parameters.skip(1).toList(),
                  operation.result,
                ),
                (arguments) => '$target($arguments)',
                tearOff: target,
              );
            }
            out.writeln('}');
          }
        }
        for (final method in type.methods.where((method) => !method.instance)) {
          final operation = call(method.name, 'call');
          out.writeln(
            'Object? ${operation.name}(Map<String, Object?> values) {',
          );
          final target =
              '${_dartName(type.name)}.${method.name}${_typeArgs(method.typeArguments)}';
          _emitCallableCall(
            out,
            operation,
            (arguments) => '$target($arguments)',
            tearOff: target,
          );
          out.writeln('}');
        }
        for (final constructor in type.constructors) {
          final operation = call(constructor.name, 'factory');
          out.writeln(
            'Object? ${operation.name}(Map<String, Object?> values) {',
          );
          _emitConstructorCalls(out, type, constructor);
          out.writeln('}');
        }
        // Static accessors share the ordinary function registry.
        for (final getter in type.staticGetters) {
          if (getter.isConst) continue;
          out.writeln(
            'Object? _${type.name}_static_get_${getter.name}(Map<String, Object?> values) => ${_dartName(type.name)}.${getter.name};',
          );
        }
        for (final setter in type.staticSetters) {
          out.writeln(
            "Object? _${type.name}_static_set_${setter.name}(Map<String, Object?> values) { ${_dartName(type.name)}.${setter.name} = ${_cast("values['value']", setter.type)}; return null; }",
          );
        }
        continue;
      }
      if (type.kind == 'object' ||
          type.kind == 'context' ||
          type.kind == 'state' ||
          type.kind == 'widgetInterface' ||
          type.kind == 'stream' ||
          type.kind == 'widget') {
        out.writeln(
          'bool _is${type.name}(Object value) => value is ${_dartName(type.name)}${type.requiresTypeArguments ? '' : _typeArgs(type.typeArguments)};',
        );
      }
      for (final getter in type.getters.where(
        (_) =>
            ({'context', 'state', 'object', 'stream'}.contains(type.kind) ||
            _hasWidgetObjectView(type)),
      )) {
        final adapter = _sharedAdapters[(type.id, 'get:${getter.name}')];
        if (adapter != null) {
          continue;
        }
        final read =
            '(value as ${_dartName(type.name)}${_typeArgs(type.typeArguments)}).${getter.name}';
        out.writeln(
          'Object? _${type.name}_${getter.name}(Object value) '
          '${type.requiresTypeArguments
              ? '=> FlaxDartTypes.requireArguments();'
              : getter.type.kind == 'void'
              ? '{ $read; return null; }'
              : '=> $read;'}',
        );
      }
      for (final getter in type.staticGetters) {
        if (getter.isConst) continue;
        final read = '${_dartName(type.name)}.${getter.name}';
        out.writeln(
          'Object? _${type.name}_static_get_${getter.name}(Map<String, Object?> values) '
          '${getter.type.kind == 'void' ? '{ $read; return null; }' : '=> $read;'}',
        );
      }
      for (final setter in type.staticSetters) {
        out.writeln(
          'Object? _${type.name}_static_set_${setter.name}(Map<String, Object?> values) {',
        );
        final call = type.staticFunctions
            .firstWhere(
              (operation) => operation.id == type.staticSetterId(setter),
            )
            .call;
        _emitCallableCall(
          out,
          call,
          (value) => '${_dartName(type.name)}.${setter.name} = $value',
        );
        out.writeln('}');
      }
      for (final setter in type.setters) {
        final adapter = _sharedAdapters[(type.id, 'set:${setter.name}')];
        if (adapter != null) {
          continue;
        }
        final receiver =
            'receiver as ${_dartName(type.name)}${_typeArgs(type.typeArguments)}';
        final value = _cast('value', setter.type);
        final call = '($receiver).${setter.name} = $value';
        out.writeln(
          'void _${type.name}_set_${setter.name}(Object receiver, Object? value) { ${type.requiresTypeArguments ? 'FlaxDartTypes.requireArguments()' : call}; }',
        );
      }
      for (final method in type.methods.where(
        (method) => !method.deferredFactory,
      )) {
        final adapter = _sharedAdapters[(type.id, 'call:${method.name}')];
        if (adapter != null) {
          continue;
        }
        _writeMethod(out, type, method);
      }
      if (type.proxy case final proxy?
          when proxy.kind == 'extends' || proxy.widgetInterface) {
        for (final method in proxy.methods.where(
          (method) => proxy.hasSuperMethod(method.name),
        )) {
          final surface = type.methods.firstWhere(
            (candidate) => candidate.instance && candidate.name == method.name,
          );
          final group = _superDispatch(type, 'call:${method.name}');
          if (group != null && group.owners.first.id != type.id) continue;
          final receiverType = group?.name ?? '_${type.name}Proxy';
          out.writeln(
            'Object? ${_superAdapter(type, 'call:${method.name}')}(Object receiver, Map<String, Object?> values) {',
          );
          if (type.requiresTypeArguments) {
            out.writeln('return FlaxDartTypes.requireArguments(); }');
            continue;
          }
          _emitCallableCall(
            out,
            surface,
            (args) =>
                '(receiver as $receiverType)._flaxSuper_${method.name}${_typeArgs(surface.typeArguments)}($args)',
            tearOff:
                '(receiver as $receiverType)._flaxSuper_${method.name}${_typeArgs(surface.typeArguments)}',
          );
          out.writeln('}');
        }
        for (final getter in proxy.getters.where(
          (getter) => proxy.hasSuperGetter(getter.name),
        )) {
          final group = _superDispatch(type, 'get:${getter.name}');
          if (group != null && group.owners.first.id != type.id) continue;
          final receiverType = group?.name ?? '_${type.name}Proxy';
          final read =
              '(receiver as $receiverType)._flaxSuperGet_${getter.name}';
          out.writeln(
            'Object? ${_superAdapter(type, 'get:${getter.name}')}(Object receiver, Map<String, Object?> values) '
            '${getter.type.kind == 'void' ? '{ $read; return null; }' : '=> $read;'}',
          );
        }
        for (final setter in proxy.setters.where(
          (setter) => proxy.hasSuperSetter(setter.name),
        )) {
          final group = _superDispatch(type, 'set:${setter.name}');
          if (group != null && group.owners.first.id != type.id) continue;
          final receiverType = group?.name ?? '_${type.name}Proxy';
          out.writeln(
            'Object? ${_superAdapter(type, 'set:${setter.name}')}(Object receiver, Map<String, Object?> values) { '
            '(receiver as $receiverType)._flaxSuperSet_${setter.name}('
            '${_cast('values["value"]', setter.type)}); return null; }',
          );
        }
      }
      if (_bindingConstructors(type).isEmpty) {
        if (type.kind == 'object' ||
            type.kind == 'stream' ||
            _hasWidgetObjectView(type)) {
          out.writeln(
            "Object _create${type.name}(String ctor, Map<String, Object?> values) => throw ArgumentError('Abstract object has no constructor');",
          );
        }
        continue;
      }
      if (type.kind == 'widget' && !_nativeWidgetFactory(type)) {
        _writeVmWidgetHost(out, type);
      }
      if (type.kind == 'widget' &&
          type.typeParameters.isNotEmpty &&
          !_hasWidgetObjectView(type)) {
        continue;
      }
      final resultType = type.category == FlaxCodegenClassCategory.widget
          ? _dartName('Widget')
          : 'Object';
      out.writeln(
        '$resultType _create${type.name}(String ctor, Map<String, Object?> values) {',
      );
      out.writeln('switch (ctor) {');
      if (type.proxy?.kind == 'implements' && !type.proxy!.widgetInterface) {
        for (final ctor in type.constructors) {
          out.writeln('case ${_quote(ctor.name)}:');
          _emitConstructorCalls(out, type, ctor);
        }
      }
      if (type.proxy == null || type.kind == 'widget') {
        for (final ctor in type.constructors) {
          out.writeln('case ${_quote(ctor.name)}:');
          _emitConstructorCalls(out, type, ctor);
        }
      }
      if (type.proxy != null) {
        out.writeln("case '@implementation':");
        _emitConstructorCalls(
          out,
          type,
          _proxyConstructor(type),
          proxyImplementation: true,
        );
        if (type.proxy!.kind == 'extends') {
          for (final ctor in type.constructors.where(
            (c) => c.name.isNotEmpty,
          )) {
            out.writeln('case ${_quote('@implementation:${ctor.name}')}:');
            _emitConstructorCalls(out, type, ctor, proxyImplementation: true);
          }
        }
      }
      out.writeln(
        "default: throw ArgumentError('Unknown generated constructor');\n}\n}",
      );
    }
    for (final group in _proxyDispatch) {
      _writeProxy(out, group.owner, group: group);
    }
    for (final source in nativeClasses.where((t) => t.proxy != null)) {
      _writeProxy(out, source);
    }
    _writeDeferredHelpers(out);
    for (final type in nativeClasses.where(
      (t) =>
          t.kind == 'widget' &&
          t.proxy?.methods.any(
                (m) => m.name == 'createState' && m.result.kind == 'state',
              ) ==
              true,
    )) {
      final widgetType =
          '${_dartName(type.name)}${_typeArgs(type.typeArguments)}';
      out.writeln(
        'final class _${type.name}State extends FlaxComponentStateBase<$widgetType> with FlaxStateProxy<$widgetType> { _${type.name}State(super.seed); }',
      );
    }
    _writeSnapshots(out, module);
    _writeVmFactories(out, module);
    _writeVmShapes(out);
    var usesGenericCallbackResult = _usesVmCallbackResult;
    usesGenericCallbackResult |= _writeCallbackAdapters(
      out,
      _callbacks.entries,
    );
    for (final entry in _collections.values) {
      final (type, name) = entry;
      final contents = switch (type.kind) {
        'map' => '<${_dartType(type.key!)}, ${_dartType(type.item!)}>{}',
        'set' => '<${_dartType(type.item!)}>{}',
        _ => '<${_dartType(type.item!)}>[]',
      };
      out.writeln('Object ${name}Create() => $contents;');
      if (type.kind == 'iterable') {
        out.writeln(
          'Object ${name}Restore(Object value) => (value as Iterable<Object?>).cast<${_dartType(type.item!)}>();',
        );
      }
      out.writeln(
        'bool ${name}Matches(Object value) => value is ${_dartType(type).replaceAll(RegExp(r"\?$"), "")};',
      );
      if (type.kind == 'list' && type.item!.kind == 'widget') {
        final item = _dartType(type.item!);
        out.writeln(
          'List<$item> ${name}Snapshot(Iterable<Object?> items) => '
          'List<$item>.unmodifiable(items.cast<$item>());',
        );
      }
    }
    void collectErasedFutures(FlaxCodegenTypeRef type) {
      if ({'future', 'futureOr'}.contains(type.kind)) {
        _erasedFutureItems.add(_typeId(type.item!));
      }
      if (type.item != null) collectErasedFutures(type.item!);
      if (type.key != null) collectErasedFutures(type.key!);
      for (final field in type.recordFields) {
        collectErasedFutures(field.type);
      }
    }

    for (final (type, _) in _streams.values) {
      collectErasedFutures(type.item!);
    }
    for (final entry in _futures.entries) {
      final (type, name) = entry.value;
      final item = _dartType(type);
      final erased = _erasedFutureItems.contains(_typeId(type));
      if (type.kind == 'void') {
        if (erased) {
          out.writeln('''
Future<Object?> ${name}Adapt(Future<Object?> value) {
  final result = value.then<void>((_) {});
  result.ignore();
  return result;
}
''');
        } else {
          out.writeln(
            'Future<Object?> ${name}Adapt(Future<Object?> value) => value.then<void>((_) {});',
          );
        }
      } else if (item == 'Object?') {
        out.writeln(
          'Future<Object?> ${name}Adapt(Future<Object?> value) => value;',
        );
      } else {
        final converted = _futureCompletionValue(
          'value',
          type,
          generic: false,
          erased: erased,
        );
        usesGenericCallbackResult |= converted.contains(
          '_genericCallbackResult<',
        );
        if (erased) {
          out.writeln('''
Future<Object?> ${name}Adapt(Future<Object?> value) {
  final result = value.then<$item>((value) => $converted);
  // A decoded JS source may fail before its concrete Future is observed.
  // Observe this bridge-owned conversion now; its returned Future still fails.
  result.ignore();
  return result;
}
''');
        } else {
          out.writeln(
            'Future<Object?> ${name}Adapt(Future<Object?> value) => value.then<$item>((value) => $converted);',
          );
        }
      }
    }
    for (final entry in _streams.entries) {
      final (type, name) = entry.value;
      final stream = _dartName('Stream');
      final item = _dartType(type.item!);
      final dartStream = '$stream<$item>';
      out.writeln('bool ${name}Matches(Object value) => value is $dartStream;');
      if (item == 'Object?') {
        out.writeln(
          '$stream<Object?> ${name}Adapt(Object value) => value as $dartStream;',
        );
      } else {
        // Typed sources keep their identity; erased inputs adapt each event lazily.
        final event = _erasedValue('event', type.item!);
        usesGenericCallbackResult |= event.contains('_genericCallbackResult<');
        final mapped =
            '(value as $stream<Object?>).map<$item>((event) => $event)';
        final adapted = '(value is $dartStream ? value : $mapped)';
        out.writeln(
          '$stream<Object?> ${name}Adapt(Object value) => '
          '$adapted as $stream<Object?>;',
        );
      }
    }
    if (usesGenericCallbackResult || _usesErasedValueCast) {
      out.writeln('''
T _genericCallbackResult<T>(Object? value) {
  // Test assignability to cover both nullable and non-nullable numeric T.
  // Broad bounds keep their decoded representation; only the Dart use site
  // selects a more specific numeric representation.
  if (value is num && value is! T) {
    if (0 is T && 0.0 is! T) {
      if (!value.isFinite || value.abs() > 9007199254740991 ||
          value != value.truncateToDouble()) {
        throw ArgumentError('Expected a safe integer');
      }
      return value.toInt() as T;
    }
    if (0.0 is T && 0 is! T) return value.toDouble() as T;
  }
  return value as T;
}
''');
    }
    for (final entry in _constants.entries) {
      out.writeln('const ${entry.value} = ${entry.key};');
    }
    // Nested provider views can discover imports while their members are emitted.
    final imports = StringBuffer(
      '''// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';
import '${module.library}' as api;
import 'package:flax/bindings.dart';
''',
    );
    for (final entry in _dartImports.entries.where(
      (e) => e.key != module.library,
    )) {
      imports.writeln("import '${entry.key}' as ${entry.value};");
    }
    imports.writeln();
    return '$imports$out';
  }

  bool _writeCallbackAdapters(
    StringBuffer out,
    Iterable<MapEntry<FlaxCodegenTypeRef, String>> entries,
  ) {
    var usesGenericCallbackResult = false;
    for (final entry in entries.toList()) {
      final type = entry.key;
      final generic = type.typeParameters.isNotEmpty;
      final parameterNames = [
        for (final (index, parameter) in type.parameters.indexed)
          parameter.positional ? 'p$index' : parameter.name,
      ];
      final requiredParameters = <String>[];
      final optionalParameters = <String>[];
      final namedParameters = <String>[];
      for (final (index, parameter) in type.parameters.indexed) {
        final name = parameterNames[index];
        if (parameter.positional && parameter.required) {
          requiredParameters.add(
            '${_dartInputType(parameter.type, generic: generic)} $name',
          );
        } else if (parameter.positional) {
          optionalParameters.add('Object? $name = _flaxOmitted');
        } else {
          namedParameters.add(
            parameter.required
                ? 'required ${_dartInputType(parameter.type, generic: generic)} $name'
                : 'Object? $name = _flaxOmitted',
          );
        }
      }
      if (optionalParameters.isNotEmpty) {
        requiredParameters.add('[${optionalParameters.join(', ')}]');
      }
      if (namedParameters.isNotEmpty) {
        requiredParameters.add('{${namedParameters.join(', ')}}');
      }
      if (generic) {
        var prefix = '_Callback';
        while (type.typeParameters.indexed.any(
          (entry) => _genericDartParameters.contains('$prefix${entry.$1}'),
        )) {
          prefix = '${prefix}_';
        }
        final substitutions = _vmParameters(type.typeParameters, prefix);
        final parameters = [
          for (final p in type.typeParameters)
            FlaxCodegenGenericParameter(
              substitutions[p.genericIdentity]!.name!,
              p.bound.specialize(substitutions),
              genericIdentity: p.genericIdentity,
            ),
        ];
        final closed = FlaxCodegenTypeRef(
          'callback',
          parameters: type.parameters,
          result: type.result,
        ).specialize(substitutions);
        _withVmFactory(parameters.map((p) => p.name), () {
          out.writeln(
            'FlaxCallbackBinding ${entry.value}Types${_dartStaticGenerics(parameters)}(FlaxDartTypes types) {',
          );
          final signature = _callbackBinding(closed);
          usesGenericCallbackResult |= _writeCallbackAdapters(
            out,
            _callbacks.entries.toList(),
          );
          out.writeln('return $signature; }');
        });
      }
      out.writeln(
        'Object ${entry.value}(FlaxCallback _flaxBridgeCallback) => ${_dartGenerics(type.typeParameters)}(${requiredParameters.join(', ')}) {',
      );
      final typedInvocation = type.typeParameters.any(
        (p) => p.defaultType == null,
      );
      if (typedInvocation) {
        out.writeln(
          'final signature = _flaxBridgeCallback.genericSignature(0, [${type.typeParameters.map((p) => 'FlaxDartTypes.typeOf<${p.name}>()').join(',')}], (types) => ${entry.value}Types<${type.typeParameters.map((p) => p.name).join(',')}>(types));',
        );
      }
      final callbackCall =
          '_flaxBridgeCallback.call(positional, named${typedInvocation ? ', signature: signature' : ''})';
      out.writeln('final positional = <Object?>[];');
      out.writeln('final named = <String, Object?>{};');
      for (final (index, parameter) in type.parameters.indexed) {
        final name = parameterNames[index];
        final encoded = parameter.snapshot == null
            ? name
            : '_snapshot${parameter.snapshot}($name)';
        if (parameter.positional) {
          if (parameter.required) {
            out.writeln('positional.add($encoded);');
          } else {
            out.writeln(
              'if (!identical($name, _flaxOmitted)) positional.add($encoded);',
            );
          }
        } else if (parameter.required) {
          out.writeln('named[${_quote(parameter.name)}] = $encoded;');
        } else {
          out.writeln(
            'if (!identical($name, _flaxOmitted)) named[${_quote(parameter.name)}] = $encoded;',
          );
        }
      }
      final result = type.result!;
      usesGenericCallbackResult |=
          generic &&
          result.kind != 'void' &&
          !(result.kind == 'list' && result.item!.kind == 'widget') &&
          (result.kind != 'future' || result.item!.kind != 'void');
      if (result.kind == 'void') {
        out.writeln('$callbackCall;');
      } else if (result.kind == 'future') {
        if (result.nullable) {
          out.writeln('final result = $callbackCall;');
          out.writeln('if (result == null) return null;');
          out.writeln(
            'return ${_futureCallbackValue('result', result.item!, generic: generic)};',
          );
        } else {
          out.writeln(
            'return ${_futureCallbackValue(callbackCall, result.item!, generic: generic)};',
          );
        }
      } else {
        out.writeln(
          'return ${_callbackResultCast(callbackCall, result, generic: generic)};',
        );
      }
      out.writeln('};');
      final functionType = _dartType(type).replaceAll(RegExp(r'\?$'), '');
      out.writeln(
        'bool ${entry.value}Matches(Object value) => value is $functionType;',
      );
      out.writeln(
        'Object? ${entry.value}Invoke(Object function, List<Object?> positional, Map<String, Object?> named) {',
      );
      if (_vmRequiresTypeArguments(type.typeParameters)) {
        out.writeln('return FlaxDartTypes.requireArguments(); }');
        continue;
      }
      final target =
          '(function as $functionType)${type.typeParameters.isEmpty ? '' : '<${type.typeParameters.map((p) => _dartDeclaredType(_vmFactory ? _vmDefaultArgument(p) : p.defaultType!)).join(', ')}>'}';
      final invocation = generic
          ? FlaxCodegenTypeRef(
              'callback',
              parameters: type.parameters,
              result: type.result,
            ).specialize({
              for (final p in type.typeParameters)
                p.genericIdentity: _vmDefaultArgument(p),
            })
          : type;
      void writeCall(int positionalCount, Set<String> omitted) {
        final arguments = <String>[
          for (var i = 0; i < positionalCount; i++)
            _cast(
              'positional[$i]',
              invocation.parameters
                  .where((p) => p.positional)
                  .elementAt(i)
                  .type,
            ),
          for (final parameter in invocation.parameters.where(
            (p) => !p.positional,
          ))
            if (!omitted.contains(parameter.name))
              '${parameter.name}: ${_cast('named[${_quote(parameter.name)}]', parameter.type)}',
        ];
        final call = '$target(${arguments.join(', ')})';
        out.writeln(
          type.result!.kind == 'void' ? '$call; return null;' : 'return $call;',
        );
      }

      final positional = type.parameters.where((p) => p.positional).toList();
      final named = type.parameters.where((p) => !p.positional).toList();
      final requiredCount = positional.where((p) => p.required).length;
      if (positional.any((p) => !p.required)) {
        out.writeln('switch (positional.length) {');
        for (var count = requiredCount; count <= positional.length; count++) {
          out.writeln('case $count:');
          writeCall(count, const {});
        }
        out.writeln(
          'default: throw ArgumentError("Invalid callback arity"); }',
        );
      } else if (named.where((p) => !p.required).length >=
          _applyOmissionThreshold) {
        final parameters = [
          for (final p in type.parameters)
            FlaxCodegenParameterModel(
              name: p.name,
              type: p.type,
              required: p.required,
              positional: p.positional,
              omitWhenAbsent: !p.required,
              defaultCode: p.defaultCode,
            ),
        ];
        final call = _applyCall(
          target,
          parameters,
          (p) => _cast(
            p.positional
                ? 'positional[${positional.indexWhere((v) => v.name == p.name)}]'
                : 'named[${_quote(p.name)}]',
            p.type,
          ),
          (p) => 'named.containsKey(${_quote(p.name)})',
        );
        out.writeln(
          type.result!.kind == 'void' ? '$call; return null;' : 'return $call;',
        );
      } else {
        void emitNamed(int index, Set<String> omitted) {
          if (index == named.length) {
            writeCall(positional.length, omitted);
            return;
          }
          final parameter = named[index];
          if (parameter.required) {
            emitNamed(index + 1, omitted);
            return;
          }
          out.writeln('if (!named.containsKey(${_quote(parameter.name)})) {');
          emitNamed(index + 1, {...omitted, parameter.name});
          out.writeln('}');
          emitNamed(index + 1, omitted);
        }

        emitNamed(0, const {});
      }
      out.writeln('}');
    }
    return usesGenericCallbackResult;
  }

  String _futureCompletionValue(
    String value,
    FlaxCodegenTypeRef type, {
    required bool generic,
    bool callback = false,
    bool erased = false,
    bool withinCallback = false,
  }) {
    if (type.kind == 'future') {
      final item = _dartDeclaredType(type.item!, generic: generic);
      final nested = _futureCompletionValue(
        value,
        type.item!,
        generic: generic,
        callback: callback,
        erased: erased,
        withinCallback: withinCallback,
      );
      final future = 'Future<$item>.syncValue($nested)';
      return type.nullable ? '($value == null ? null : $future)' : future;
    }
    if (type.kind == 'futureOr') {
      final nested = _futureCompletionValue(
        value,
        type.item!,
        generic: generic,
        callback: callback,
        erased: erased,
        withinCallback: withinCallback,
      );
      return type.nullable ? '($value == null ? null : $nested)' : nested;
    }
    if (type.kind == 'void') return 'null';
    if (erased) {
      return _erasedValue(value, type, withinCallback: withinCallback);
    }
    if (callback) {
      return _callbackResultCast(value, type, generic: generic);
    }
    final declared = _dartType(type);
    return declared == 'Object?' ? value : '$value as $declared';
  }

  String _erasedValue(
    String value,
    FlaxCodegenTypeRef type, {
    bool withinCallback = false,
  }) {
    final declared = _dartType(type);
    final nonNullable = declared.replaceFirst(RegExp(r'\?$'), '');
    String child(String value, FlaxCodegenTypeRef childType) =>
        _erasedValue(value, childType, withinCallback: withinCallback);
    final checked = value;
    String converted;
    if ({'future', 'futureOr'}.contains(type.kind)) {
      _erasedFutureItems.add(_typeId(type.item!));
      final nested = child(value, type.item!);
      final future = _futures
          .putIfAbsent(
            _typeId(type.item!),
            () => (type.item!, '_future${_futures.length}'),
          )
          .$2;
      final pending =
          '${future}Adapt($value as Future<Object?>) as Future<${_dartType(type.item!)}>';
      converted = type.kind == 'future'
          ? '($value is $nonNullable ? $value : $pending)'
          : '($value is Future<Object?> ? ${pending.replaceFirst('$value as Future<Object?>', value)} : $nested)';
    } else if (type.kind == 'stream') {
      // Register child adapters before emitting their outer Stream adapter.
      child('event', type.item!);
      final stream = _streams
          .putIfAbsent(
            _typeId(type, omitNullable: true),
            () => (type, '_stream${_streams.length}'),
          )
          .$2;
      converted = '${stream}Adapt($value as Object) as $declared';
    } else if ({'list', 'iterable', 'set'}.contains(type.kind)) {
      final item = _dartType(type.item!);
      final mapped =
          '(collection as Iterable<Object?>).map<$item>((item) => ${child('item', type.item!)})';
      final contents = type.kind == 'list'
          ? '$mapped.toList()'
          : type.kind == 'set'
          ? '$mapped.toSet()'
          : mapped;
      converted =
          '($value is $nonNullable ? $checked : flaxRestoreJsCollection<$declared>($value as Object, ${_quote(type.kind)}, (collection) => $contents))';
    } else if (type.kind == 'map') {
      final key = child('key', type.key!);
      final item = child('item', type.item!);
      converted =
          '($value is $nonNullable ? $checked : flaxRestoreJsCollection<$declared>($value as Object, "map", (value) => (value as Map<Object?, Object?>).map<${_dartType(type.key!)}, ${_dartType(type.item!)}>((key, item) => MapEntry($key, $item))))';
    } else if (type.kind == 'record') {
      // Record fields have already crossed the shared typed constructor.
      converted = '$value as $declared';
    } else {
      _usesErasedValueCast |= declared != 'Object?';
      converted = declared == 'Object?'
          ? value
          : '_genericCallbackResult<$declared>($value)';
    }
    return type.nullable ? '($value == null ? null : $converted)' : converted;
  }

  String _futureCallbackValue(
    String value,
    FlaxCodegenTypeRef result, {
    bool generic = false,
  }) {
    final declared = _dartDeclaredType(result, generic: generic);
    final converted = _futureCompletionValue(
      'value',
      result,
      generic: generic,
      callback: true,
    );
    return '($value as Future<Object?>).then<$declared>((value) => $converted)';
  }

  String _callbackResultCast(
    String value,
    FlaxCodegenTypeRef result, {
    required bool generic,
  }) {
    final declared = _dartDeclaredType(result, generic: generic);
    // Widget snapshots need structural casts even inside generic callbacks.
    if (generic && !(result.kind == 'list' && result.item!.kind == 'widget')) {
      return '_genericCallbackResult<$declared>($value)';
    }
    return _cast(value, result);
  }

  String _stateMixinDartType(FlaxCodegenStateMixinModel mixin) {
    final prefix = _dartImports[mixin.library];
    if (prefix == null) {
      throw StateError('Missing State mixin import: ${mixin.library}');
    }
    return '$prefix.${mixin.name}${_typeArgs(mixin.typeArguments)}';
  }

  String _stateMethodParameters(FlaxCodegenMethodModel method) {
    final required = <String>[];
    final optional = <String>[];
    final named = <String>[];
    for (final parameter in method.parameters) {
      final type = _dartInputType(parameter.type);
      if (parameter.positional && parameter.required) {
        required.add('$type ${parameter.name}');
      } else if (parameter.positional) {
        optional.add('$type ${parameter.name} = ${_default(parameter)}');
      } else {
        named.add(
          parameter.required
              ? 'required $type ${parameter.name}'
              : '$type ${parameter.name} = ${_default(parameter)}',
        );
      }
    }
    if (optional.isNotEmpty) required.add('[${optional.join(', ')}]');
    if (named.isNotEmpty) required.add('{${named.join(', ')}}');
    return required.join(', ');
  }

  void _writeStateVariantsDart(
    StringBuffer out,
    FlaxCodegenModuleModel module,
  ) {
    for (final variant in module.stateVariants) {
      final base = '_${variant.name}StateHostBase';
      final host = '_${variant.name}StateHost';
      out.writeln(
        'const _stateVariant_${variant.name} = FlaxStateVariantBinding('
        '${_quote(variant.id)}, $host.new, '
        'stateType: ${_quote(variant.stateWireId ?? variant.stateId)}, '
        'interfaces: ${jsonEncode(variant.interfaces.map((value) => value.wireId ?? value.id).toList())}, '
        'getters: [',
      );
      for (final getter in variant.getters.where(
        (value) => variant.superMethods.contains('get:${value.name}'),
      )) {
        out.writeln(
          'FlaxGetter(${_quote(getter.name)}, ${_ref(getter.type)}, '
          '_${variant.name}_get_${getter.name}),',
        );
      }
      out.writeln('], setters: [');
      for (final setter in variant.setters.where(
        (value) => variant.superMethods.contains('set:${value.name}'),
      )) {
        out.writeln(
          'FlaxSetter(${_quote(setter.name)}, ${_ref(setter.type)}, '
          '_${variant.name}_set_${setter.name}),',
        );
      }
      out.writeln('], methods: {');
      for (final method in variant.methods.where(
        (value) => variant.superMethods.contains('call:${value.name}'),
      )) {
        out.write('${_quote(method.name)}: FlaxInstanceMethod([');
        for (final parameter in method.parameters) {
          out.write('${_parameterBinding(parameter)},');
        }
        out.writeln(
          '], ${_ref(method.result)}, _${variant.name}_call_${method.name}),',
        );
      }
      out.writeln('});');

      out.writeln(
        'abstract class $base extends FlaxComponentStateBase '
        'with ${variant.mixins.map(_stateMixinDartType).join(', ')} {',
      );
      out.writeln('$base(Object seed) : super(seed);');
      for (final getter in variant.getters.where(
        (value) => !variant.superMethods.contains('get:${value.name}'),
      )) {
        final invoke =
            'flaxInvokeMember(${_quote('get:${getter.name}')}, const [], const [], ${_ref(getter.type)})';
        out.writeln('@override');
        out.writeln(
          '${_dartDeclaredType(getter.type)} get ${getter.name} => ${_cast(invoke, getter.type)};',
        );
      }
      for (final setter in variant.setters.where(
        (value) => !variant.superMethods.contains('set:${value.name}'),
      )) {
        out.writeln('@override');
        out.writeln(
          'set ${setter.name}(${_dartInputType(setter.type)} value) { '
          'flaxInvokeMember(${_quote('set:${setter.name}')}, [value], '
          '[${_ref(setter.type)}], const FlaxTypeRef("void")); }',
        );
      }
      for (final method in variant.methods.where(
        (value) => !variant.superMethods.contains('call:${value.name}'),
      )) {
        final invoke =
            'flaxInvokeMember(${_quote(method.name)}, '
            '[${method.parameters.map((value) => value.name).join(', ')}], '
            '[${method.parameters.map((value) => _ref(value.type)).join(', ')}], '
            '${_ref(method.result)})';
        out.writeln('@override');
        out.writeln(
          '${_dartDeclaredType(method.result)} ${method.name}(${_stateMethodParameters(method)}) {',
        );
        if (method.result.kind == 'void') {
          out.writeln('$invoke;');
        } else {
          out.writeln('return ${_cast(invoke, method.result)};');
        }
        out.writeln('}');
      }
      for (final method in variant.methods.where(
        (value) => variant.superMethods.contains('call:${value.name}'),
      )) {
        out.writeln(
          'Object? _flaxCall_${method.name}(Map<String, Object?> values) {',
        );
        _emitCallableCall(
          out,
          method,
          (args) => '${method.name}($args)',
          tearOff: method.name,
        );
        out.writeln('}');
      }
      if (variant.superMethods.contains('call:build')) {
        if (variant.mustCallSuperMethods.contains('call:build')) {
          out.writeln('@override bool get flaxRequiresBuildSuper => true;');
        }
        out.writeln(
          '@override ${_dartName('Widget')} flaxBuildSuper('
          '${_dartName('BuildContext')} context) => super.build(context);',
        );
      }
      out.writeln('}');
      out.writeln(
        'class $host extends $base with FlaxStateProxy { '
        '$host(Object seed) : super(seed); }',
      );

      for (final getter in variant.getters.where(
        (value) => variant.superMethods.contains('get:${value.name}'),
      )) {
        final read = '(receiver as $base).${getter.name}';
        out.writeln(
          'Object? _${variant.name}_get_${getter.name}(Object receiver) '
          '${getter.type.kind == 'void' ? '{ $read; return null; }' : '=> $read;'}',
        );
      }
      for (final setter in variant.setters.where(
        (value) => variant.superMethods.contains('set:${value.name}'),
      )) {
        out.writeln(
          'void _${variant.name}_set_${setter.name}(Object receiver, Object? value) { '
          '(receiver as $base).${setter.name} = ${_cast('value', setter.type)}; }',
        );
      }
      for (final method in variant.methods.where(
        (value) => variant.superMethods.contains('call:${value.name}'),
      )) {
        out.writeln(
          'Object? _${variant.name}_call_${method.name}('
          'Object receiver, Map<String, Object?> values) {',
        );
        out.writeln(
          'return (receiver as $base)._flaxCall_${method.name}(values);',
        );
        out.writeln('}');
      }
    }
  }

  String _operatorExpression(
    String receiver,
    String operator,
    List<String> args,
  ) => switch (operator) {
    '[]' => '$receiver[${args.single}]',
    '[]=' => '$receiver[${args[0]}] = ${args[1]}',
    'unary-' => '-$receiver',
    '~' => '~$receiver',
    _ => '$receiver $operator (${args.single})',
  };

  String _methodTarget(
    FlaxCodegenClassModel type,
    FlaxCodegenMethodModel method, {
    List<String>? receiverTypeArguments,
    String? receiverType,
  }) {
    final receiver =
        'receiver as ${receiverType ?? '${_dartName(type.name)}${_typeArgs(receiverTypeArguments ?? type.typeArguments)}'}';

    final target = method.instance ? '($receiver)' : _dartName(type.name);
    return '$target.${method.name}${_typeArgs(method.typeArguments)}';
  }

  void _writeMethod(
    StringBuffer out,
    FlaxCodegenClassModel type,
    FlaxCodegenMethodModel method, {
    String? prefix,
    List<String>? receiverTypeArguments,
    String? receiverType,
    String? helperName,
  }) {
    out.writeln(
      'Object? ${helperName ?? '${prefix ?? '_${type.name}'}_${method.name}'}(${method.instance ? 'Object receiver, ' : ''}Map<String, Object?> values) {',
    );
    if (!_vmFactory && type.requiresTypeArguments && method.instance) {
      out.writeln('return FlaxDartTypes.requireArguments(); }');
      return;
    }
    if (method.operatorName != null) {
      final call = _operatorExpression(
        '(receiver as ${receiverType ?? '${_dartName(type.name)}${_typeArgs(receiverTypeArguments ?? type.typeArguments)}'})',
        method.operatorName!,
        [
          for (final p in method.parameters)
            _cast('values[${_quote(p.name)}]', p.type),
        ],
      );
      out.writeln('${method.result.kind == 'void' ? '' : 'return '}$call;');
      if (method.result.kind == 'void') out.writeln('return null;');
    } else {
      final target = _methodTarget(
        type,
        method,
        receiverTypeArguments: receiverTypeArguments,
        receiverType: receiverType,
      );
      _emitCallableCall(
        out,
        method,
        (args) => '$target($args)',
        tearOff: target,
      );
    }
    out.writeln('}');
  }

  FlaxCodegenConstructorModel _runtimeConstructor(
    FlaxCodegenConstructorModel ctor,
  ) => ctor.runtimeParameterTypes.isEmpty
      ? ctor
      : FlaxCodegenConstructorModel(ctor.name, [
          for (final (index, parameter) in ctor.parameters.indexed)
            parameter.withType(ctor.runtimeParameterTypes[index]),
        ], specializations: ctor.specializations);

  List<FlaxCodegenConstructorModel> _bindingConstructors(
    FlaxCodegenClassModel type,
  ) {
    if (type.proxy == null) {
      return type.constructors.map(_runtimeConstructor).toList();
    }
    return [
      if (!type.proxy!.widgetInterface &&
          (type.proxy!.kind == 'implements' || type.kind == 'widget'))
        ...type.constructors.map(_runtimeConstructor),
      FlaxCodegenConstructorModel(
        '@implementation',
        _proxyConstructor(type).parameters,
      ),
      if (type.proxy!.kind == 'extends')
        for (final ctor in type.constructors.where((c) => c.name.isNotEmpty))
          FlaxCodegenConstructorModel(
            '@implementation:${ctor.name}',
            _runtimeConstructor(ctor).parameters,
          ),
    ];
  }

  FlaxCodegenConstructorModel _proxyConstructor(FlaxCodegenClassModel type) =>
      type.proxy!.kind == 'implements' && !type.proxy!.widgetInterface
      ? const FlaxCodegenConstructorModel('', [])
      : _runtimeConstructor(
          type.constructors.where((c) => c.name.isEmpty).firstOrNull ??
              type.constructors.first,
        );

  String _widgetObjectBinding(FlaxCodegenClassModel type) =>
      type.typeParameters.isEmpty && type.typeArguments.isEmpty
      ? _objectBinding(type)
      : 'FlaxObjectBinding(${_quote(type.id)}, ['
            '${type.getters.map((getter) => '${_getterBinding(type, getter)},').join()}], '
            '${_instanceMethods(type)}, constructors: ${_constructors(type)}, '
            'setters: [${type.setters.map((setter) => '${_setterBinding(type, setter)},').join()}], '
            'create: _create${type.name}, matches: _is${type.name}, '
            'supertypes: ${jsonEncode(type.supertypes)}${_proxyBinding(type)})';

  FlaxCodegenClassModel? _memberParent(FlaxCodegenClassModel type) {
    if (!(type.kind == 'object' || _hasWidgetObjectView(type)) ||
        type.typeParameters.isNotEmpty ||
        type.typeArguments.isNotEmpty) {
      return null;
    }
    final getters = type.getters.map((g) => g.name).toSet();
    final setters = type.setters.map((g) => g.name).toSet();
    final methods = type.methods
        .where((m) => m.instance)
        .map((m) => m.name)
        .toSet();
    final candidates =
        type.supertypes
            .map((id) => _classes[id])
            .nonNulls
            .where(
              (p) =>
                  (p.kind == 'object' || _hasWidgetObjectView(p)) &&
                  p.typeParameters.isEmpty &&
                  p.typeArguments.isEmpty &&
                  p.getters.every((g) => getters.contains(g.name)) &&
                  p.setters.every((g) => setters.contains(g.name)) &&
                  p.methods
                      .where((m) => m.instance)
                      .every((m) => methods.contains(m.name)) &&
                  (p.getters.isNotEmpty ||
                      p.setters.isNotEmpty ||
                      p.methods.any((m) => m.instance)),
            )
            .toList()
          ..sort((a, b) {
            final depth = b.supertypes.length.compareTo(a.supertypes.length);
            return depth == 0 ? a.id.compareTo(b.id) : depth;
          });
    return candidates.firstOrNull;
  }

  String _objectBinding(
    FlaxCodegenClassModel type,
  ) => _objectBindings.putIfAbsent(type.id, () {
    final candidate = _memberParent(type);
    final parent = candidate != null && _dartModule.classes.contains(candidate)
        ? candidate
        : null;
    final parentBinding = parent == null ? null : _objectBinding(parent);
    final parentGetters = {
      for (final g in parent?.getters ?? <FlaxCodegenGetterModel>[])
        g.name: _getterBinding(parent!, g),
    };
    final parentSetters = {
      for (final g in parent?.setters ?? <FlaxCodegenGetterModel>[])
        g.name: _setterBinding(parent!, g),
    };
    final getters = [
      for (final g in type.getters)
        if (parentGetters[g.name] != _getterBinding(type, g))
          _getterBinding(type, g),
    ];
    final setters = [
      for (final g in type.setters)
        if (parentSetters[g.name] != _setterBinding(type, g))
          _setterBinding(type, g),
    ];
    final nativeInput = _nativeObjectInput(type);
    return _constant(
      'FlaxObjectBinding(${_quote(type.id)}, [${getters.join(',')}], '
      '${_instanceMethods(type, inherited: parent)}, '
      'constructors: ${_constructors(type)}, create: _create${type.name}, '
      'matches: _is${type.name}, setters: [${setters.join(',')}], '
      'supertypes: ${jsonEncode(type.supertypes)}'
      '${parentBinding == null ? '' : ', parent: $parentBinding'}'
      '${nativeInput == null ? '' : ', nativeInput: ${_quote(nativeInput)}'}'
      '${type.disposeMethod == null ? '' : ', disposeMethod: ${_quote(type.disposeMethod!)}'}'
      '${type.listenerPairs.isEmpty ? '' : ', listenerPairs: ${jsonEncode(_sortedStringMap(type.listenerPairs))}'}'
      '${_proxyBinding(type)}${_collectionViewBinding(type)})',
    );
  });

  String _getterBinding(
    FlaxCodegenClassModel owner,
    FlaxCodegenGetterModel getter,
  ) {
    final expression =
        'FlaxGetter(${_quote(getter.name)}, ${_ref(getter.type)}, '
        '${_adapter(owner, 'get:${getter.name}')}'
        '${getter.encodeKind == null ? '' : ', encode: const FlaxTypeRef(${_quote(getter.encodeKind!)})'})';
    return !_vmFactory && _isClosedType(getter.type)
        ? _constant(expression)
        : expression;
  }

  String _setterBinding(
    FlaxCodegenClassModel owner,
    FlaxCodegenGetterModel setter,
  ) {
    final expression =
        'FlaxSetter(${_quote(setter.name)}, ${_ref(setter.type)}, '
        '${_adapter(owner, 'set:${setter.name}')})';
    return !_vmFactory && _isClosedType(setter.type)
        ? _constant(expression)
        : expression;
  }

  String _parameterBinding(
    FlaxCodegenParameterModel p, {
    bool independentWidgetResult = false,
  }) =>
      'FlaxParameter(${_quote(p.name)}, ${_ref(p.type, independentWidgetResult: independentWidgetResult)}, required: ${p.required}'
      '${_default(p) == 'null' ? '' : ', defaultValue: ${_default(p)}'}'
      '${p.omitWhenAbsent ? ', omitWhenAbsent: true' : ''})';

  String _parameters(Iterable<FlaxCodegenParameterModel> parameters) {
    final values = parameters.toList();
    final entries = values.map(_parameterBinding).join(',');
    final expression = '<FlaxParameter>[$entries]';
    return !_vmFactory && values.every((p) => _isClosedType(p.type))
        ? _constant(expression)
        : expression;
  }

  String _constructors(FlaxCodegenClassModel type) =>
      '{${_bindingConstructors(type).map((ctor) => '${_quote(ctor.name)}: ${_parameters(ctor.parameters)},').join()}}';

  String? _sharedCallKey(
    List<FlaxCodegenParameterModel> parameters,
    FlaxCodegenTypeRef result, {
    bool withinCallback = false,
  }) {
    if (_vmFactory ||
        !_isClosedType(result) ||
        parameters.any(
          (p) =>
              !p.required ||
              p.omitWhenAbsent ||
              p.defaultCode != 'null' ||
              p.scoped ||
              p.encodeKind != null ||
              p.snapshot != null ||
              p.independentWidgetResult ||
              !_isClosedType(p.type),
        )) {
      return null;
    }
    return jsonEncode([
      for (final p in parameters)
        [p.name, p.positional, _ref(p.type, withinCallback: withinCallback)],
      _ref(result),
    ]);
  }

  String _instanceMethodHead(
    List<FlaxCodegenParameterModel> parameters,
    FlaxCodegenTypeRef result,
  ) {
    final key = _sharedCallKey(parameters, result);
    final signature = key == null ? null : _sharedCallSignatures[key];
    return signature == null
        ? 'FlaxInstanceMethod(${_parameters(parameters)}, ${_ref(result)}, '
        : 'FlaxInstanceMethod.signature($signature, ';
  }

  String _instanceMethods(
    FlaxCodegenClassModel type, {
    Iterable<FlaxCodegenMethodModel>? members,
    String? prefix,
    FlaxCodegenClassModel? inherited,
  }) {
    final out = StringBuffer('{');
    for (final method in (members ?? type.methods).where(
      (method) => method.instance && !method.deferredFactory,
    )) {
      if (inherited != null &&
          method.typeParameters.isEmpty &&
          _isClosedType(method.result) &&
          method.parameters.every((p) => _isClosedType(p.type)) &&
          inherited.methods.any(
            (m) =>
                m.instance &&
                m.name == method.name &&
                jsonEncode(FlaxCodegenManifestCodec.encodeMethod(m)) ==
                    jsonEncode(FlaxCodegenManifestCodec.encodeMethod(method)),
          ) &&
          _adapter(type, 'call:${method.name}') ==
              _adapter(inherited, 'call:${method.name}')) {
        continue;
      }
      final defaultMethod = _vmFactory ? _vmDefaultMethod(method) : method;
      if (defaultMethod.requiresTypeArguments) {
        out.write(
          '${_quote(method.name)}: FlaxInstanceMethod(const [], const FlaxTypeRef("any"), ${prefix ?? '_${type.name}'}_${method.name}, genericFactory: ${_vmMethodName(type, method)}, ownerTypes: [${type.typeArguments.indexed.map((e) => _vmFactory ? 'FlaxDartTypes.typeOf<${_dartTypeArgument(e.$2)}>()' : '_flaxDefault_${type.name}_${e.$1}').join(',')}], requiresTypeArguments: true),',
        );
        continue;
      }
      final descriptor = StringBuffer(
        _instanceMethodHead(defaultMethod.parameters, defaultMethod.result),
      );
      final adapter = prefix == null
          ? _adapter(type, 'call:${method.name}')
          : '${prefix}_${method.name}';
      descriptor.write(
        '$adapter${method.startsRoute ? ', startsRoute: true' : ''}${method.typeParameters.isNotEmpty && !method.deferredFactory ? ', genericFactory: ${_vmMethodName(type, method)}, ownerTypes: [${type.typeArguments.indexed.map((e) => _vmFactory ? 'FlaxDartTypes.typeOf<${_dartTypeArgument(e.$2)}>()' : '_flaxDefault_${type.name}_${e.$1}').join(',')}]' : ''})',
      );
      final expression = descriptor.toString();
      final shared =
          !_vmFactory &&
          prefix == null &&
          type.typeParameters.isEmpty &&
          method.typeParameters.isEmpty &&
          _isClosedType(method.result) &&
          method.parameters.every((p) => _isClosedType(p.type));
      out.write(
        '${_quote(method.name)}: ${shared ? _constant(expression) : expression},',
      );
    }
    final proxy = type.proxy;
    if (members == null &&
        (proxy?.kind == 'extends' || proxy?.widgetInterface == true)) {
      for (final method in proxy!.methods.where(
        (method) => proxy.hasSuperMethod(method.name),
      )) {
        final source = type.methods.firstWhere(
          (candidate) => candidate.instance && candidate.name == method.name,
        );
        final surface = _vmFactory ? _vmDefaultMethod(source) : source;
        if (surface.requiresTypeArguments) {
          out.write(
            '${_quote('@super:${method.name}')}: FlaxInstanceMethod(const [], const FlaxTypeRef("any"), ${_superAdapter(type, 'call:${method.name}')}, genericFactory: ${_vmMethodName(type, source, superCall: true)}, ownerTypes: [${type.typeArguments.indexed.map((e) => _vmFactory ? 'FlaxDartTypes.typeOf<${_dartTypeArgument(e.$2)}>()' : '_flaxDefault_${type.name}_${e.$1}').join(',')}], requiresTypeArguments: true),',
          );
          continue;
        }
        out.write(
          '${_quote('@super:${method.name}')}: ${_instanceMethodHead(surface.parameters, surface.result)}'
          '${_superAdapter(type, 'call:${method.name}')}${source.typeParameters.isEmpty ? '' : ', genericFactory: ${_vmMethodName(type, source, superCall: true)}, ownerTypes: [${type.typeArguments.indexed.map((e) => _vmFactory ? 'FlaxDartTypes.typeOf<${_dartTypeArgument(e.$2)}>()' : '_flaxDefault_${type.name}_${e.$1}').join(',')}]'}),',
        );
      }
      for (final getter in proxy.getters.where(
        (getter) => proxy.hasSuperGetter(getter.name),
      )) {
        out.write(
          '${_quote('@super:get:${getter.name}')}: '
          '${_instanceMethodHead(const [], getter.type)}'
          '${_superAdapter(type, 'get:${getter.name}')}),',
        );
      }
      for (final setter in proxy.setters.where(
        (setter) => proxy.hasSuperSetter(setter.name),
      )) {
        out.write(
          '${_quote('@super:set:${setter.name}')}: '
          'FlaxInstanceMethod(['
          'FlaxParameter("value", ${_ref(setter.type)}, required: true),'
          '], const FlaxTypeRef("void"), '
          '${_superAdapter(type, 'set:${setter.name}')}),',
        );
      }
    }
    out.write('}');
    return out.toString();
  }

  String typescript(
    FlaxCodegenModuleModel module, {
    String? moduleInstallImport,
  }) {
    if (module.publicLibraries.isEmpty &&
        modules.any((source) => source.publicLibraries.isNotEmpty)) {
      return typescriptOutputs(module)[module.tsOutput]!;
    }
    final omittedKeys = <String, String>{};
    String shareOmittedKeys(String keys) => omittedKeys.putIfAbsent(
      keys,
      () => '_flaxOwnMembers${omittedKeys.length}',
    );
    final widgetType = module.classes.any((type) => type.name == 'Widget')
        ? '_FlaxWidget'
        : 'Widget';
    final dependencies = <FlaxCodegenModuleModel, String>{};
    final valueDependencies = <FlaxCodegenModuleModel>{};
    for (final extension in module.extensions.where((e) => e.isReference)) {
      for (final member in extension.members) {
        final owner = _owners[member.id];
        if (owner == null) {
          throw StateError('Missing extension provider: ${member.id}');
        }
        dependencies.putIfAbsent(owner, () => 'upstream${dependencies.length}');
        valueDependencies.add(owner);
      }
    }
    for (final getter
        in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
      if (!getter.isReference) continue;
      final owner = _owners[getter.id]!;
      dependencies.putIfAbsent(owner, () => 'upstream${dependencies.length}');
      valueDependencies.add(owner);
    }
    for (final setter
        in module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[]) {
      if (!setter.isReference) continue;
      final owner = _owners[setter.id]!;
      dependencies.putIfAbsent(owner, () => 'upstream${dependencies.length}');
      valueDependencies.add(owner);
    }
    for (final type in module.types) {
      final owner = _owners[type.id]!;
      if (owner != module) {
        dependencies.putIfAbsent(owner, () => 'upstream${dependencies.length}');
      }
    }
    for (final type in _typescriptSignatureTypes(module)) {
      final id = type.id;
      if (id == null) continue;
      final owner = _owners[id];
      if (owner == null || owner == module) continue;
      dependencies.putIfAbsent(owner, () => 'upstream${dependencies.length}');
    }
    for (final type in module.classes) {
      final parent = _memberParent(type);
      if (parent == null) continue;
      final owner = _owners[parent.id]!;
      if (owner != module) {
        dependencies.putIfAbsent(owner, () => 'upstream${dependencies.length}');
      }
    }
    var genericNames = <Object, String>{};
    var genericInputConversions = false;
    var genericConversions = <String, String?>{};
    var selectedSignature = false;
    var erasedBoundParameters = <Object?>{};
    var renderingBounds = false;
    final genericDeclarations = <Object?, FlaxCodegenGenericParameter>{};
    late String Function(FlaxCodegenTypeRef) boundType;
    late String Function(FlaxCodegenTypeRef) callbackCases;
    final conversionImports = <String>{};
    Map<String, String?> parameterConversions(
      Iterable<FlaxCodegenGenericParameter> parameters, {
      bool includeOuter = false,
    }) {
      final result = includeOuter
          ? {...genericConversions}
          : <String, String?>{};
      for (final parameter in parameters) {
        genericDeclarations[parameter.genericIdentity] = parameter;
        final bound = parameter.bound;
        final name = genericNames[parameter.genericIdentity] ?? parameter.name;
        // A shared collection bound returns its standard view, not a nominal T.
        result[name] =
            {
              'list',
              'map',
              'set',
              'iterable',
            }.contains(parameter.defaultType?.kind)
            ? 'collection'
            : bound.kind == 'any'
            ? 'object'
            : bound.kind == 'parameter'
            ? result[genericNames[bound.genericIdentity] ?? bound.name]
            : null;
      }
      return result;
    }

    String tsType(
      FlaxCodegenTypeRef type, {
      bool declarations = true,
      bool input = false,
      bool nominal = false,
      bool withinCallback = false,
      bool bridgeGenerics = true,
      bool voidResult = false,
    }) {
      if (type.isExtensionTypeDeclaration) {
        return tsType(
          type.item!,
          declarations: declarations,
          input: input,
          nominal: nominal,
          withinCallback: withinCallback,
          bridgeGenerics: bridgeGenerics,
          voidResult: voidResult,
        );
      }
      final extensionDeclaration = declarations
          ? _extensionTypeDeclaration(type)
          : null;
      if (extensionDeclaration != null) {
        return tsType(
          extensionDeclaration.item!,
          declarations: true,
          input: input,
          nominal: nominal,
          withinCallback: withinCallback,
          bridgeGenerics: bridgeGenerics,
          voidResult: voidResult,
        );
      }
      if (declarations && type.declaration != null) {
        return tsType(
          type.declaration!,
          input: input,
          nominal: nominal,
          withinCallback: withinCallback,
          bridgeGenerics: bridgeGenerics,
          voidResult: voidResult,
        );
      }
      String child(FlaxCodegenTypeRef t, {bool? asInput}) => tsType(
        t,
        declarations: declarations,
        input: asInput ?? input,
        withinCallback: withinCallback,
        bridgeGenerics: bridgeGenerics,
        voidResult: voidResult,
      );
      String callback(FlaxCodegenTypeRef callback) {
        final previousNames = genericNames;
        final previousParameters = genericConversions;
        for (final p in callback.typeParameters) {
          genericDeclarations[p.genericIdentity] = p;
        }
        genericNames = {
          ...genericNames,
          for (final parameter in callback.typeParameters)
            ?parameter.genericIdentity: parameter.name,
        };
        genericConversions = parameterConversions(
          callback.typeParameters,
          includeOuter: true,
        );
        String callbackValue(
          FlaxCodegenTypeRef t, {
          required bool asInput,
          bool result = false,
        }) => tsType(
          t,
          declarations: declarations,
          input: asInput,
          withinCallback: true,
          bridgeGenerics: bridgeGenerics,
          voidResult: result,
        );
        final generic = callback.typeParameters.isEmpty
            ? ''
            : '<${callback.typeParameters.map((p) => '${p.name} extends ${boundType(p.bound)}').join(', ')}>';
        final arguments = callback.parameters
            .where((p) => p.positional)
            .map(
              (p) =>
                  '${_parameterLocalName(p)}${p.required ? '' : '?'}: ${callbackValue(p.type, asInput: !input)}',
            )
            .toList();
        final named = callback.parameters.where((p) => !p.positional).toList();
        if (named.isNotEmpty) {
          final optional = named.every((p) => !p.required);
          arguments.add(
            'options${optional ? '?' : ''}: { ${named.map((p) => '${p.name}${p.required ? '' : '?'}: ${callbackValue(p.type, asInput: !input)}${p.required ? '' : ' | undefined'}').join('; ')} }',
          );
        }
        final result =
            '($generic(${arguments.join(', ')}) => ${callbackValue(callback.result!, asInput: input, result: true)})';
        genericNames = previousNames;
        genericConversions = previousParameters;
        return !input && callback.typeParameters.isNotEmpty
            ? '_FlaxDartCallable<$result, ${callbackCases(callback)}>'
            : result;
      }

      String parameter() {
        if (erasedBoundParameters.contains(type.genericIdentity)) return 'any';
        final name = genericNames[type.genericIdentity] ?? type.name!;
        if (bridgeGenerics && selectedSignature) {
          return input ? '($name | DartInput<$name>)' : name;
        }
        if (bridgeGenerics && genericConversions[name] == 'object') {
          conversionImports.add('DartOutput');
          return input
              ? '($name | _FlaxDartOutput<$name>)'
              : '_FlaxDartOutput<$name>';
        }
        if (bridgeGenerics &&
            !input &&
            genericConversions[name] == 'collection') {
          conversionImports.add('DartOutput');
          return '_FlaxDartOutput<DartInput<$name>>';
        }
        return input &&
                (genericInputConversions ||
                    genericConversions.containsKey(name))
            ? '($name | DartInput<$name>)'
            : name;
      }

      String record() {
        final fields =
            '{ ${type.recordFields.map((field) => 'readonly ${field.name}: ${child(field.type)}').join('; ')} }';
        if (input) return fields;
        conversionImports.add('DartRecord');
        return '_FlaxDartRecord<$fields>';
      }

      String referenceName() {
        final owner = _owners[type.id];
        if (owner != null && owner != module) {
          dependencies.putIfAbsent(
            owner,
            () => 'upstream${dependencies.length}',
          );
        }
        return '${owner == module ? '' : '${dependencies[owner] ?? (throw StateError('Missing provider for ${type.name}'))}.'}${type.name}';
      }

      String stream() {
        final name = type.id == null ? 'FlaxStreamReference' : referenceName();
        final outputItem = child(type.item!, asInput: false);
        final output = '$name<$outputItem>';
        if (!input) return output;
        final inputItem = child(type.item!);
        return inputItem == outputItem
            ? output
            : '($output | $name<$inputItem>)';
      }

      String reference() {
        final name = referenceName();
        final arguments = type.tsArguments.isNotEmpty
            ? type.tsArguments
            : type.dartArguments;
        return arguments.isEmpty
            ? name
            : '$name<${arguments.indexed.map((entry) {
                final parameters = _classes[type.id]?.typeParameters ?? const <FlaxCodegenGenericParameter>[];
                if (entry.$2.kind == 'any' && entry.$1 < parameters.length && (parameters[entry.$1].bound.kind != 'any' || !parameters[entry.$1].bound.nullable)) {
                  return 'any';
                }
                return child(entry.$2, asInput: renderingBounds && _classes[entry.$2.id]?.isWidgetSubtype == true);
              }).join(', ')}>';
      }

      if (type.kind == 'object' && _isCoreRecord(_classes[type.id])) {
        const fields = 'Readonly<globalThis.Record<string, unknown>>';
        if (input) return '$fields${type.nullable ? ' | null' : ''}';
        conversionImports.add('DartRecord');
        return '_FlaxDartRecord<$fields>${type.nullable ? ' | null' : ''}';
      }

      if (input && !nominal && type.kind == 'object') {
        final owner = _classes[type.id];
        final nativeInput = _nativeObjectInput(owner);
        final identity = owner?.superTypes
            .where(
              (parent) =>
                  parent.kind == 'typeOnly' &&
                  parent.originatingName == owner.name,
            )
            .firstOrNull;
        if (identity != null) {
          final arguments = type.tsArguments.isNotEmpty
              ? type.tsArguments
              : type.dartArguments;
          final substitutions = {
            for (final (index, parameter) in owner!.typeParameters.indexed)
              if (index < arguments.length)
                parameter.genericIdentity: arguments[index],
          };
          // Native adapters accept the direct brand; other inputs need ancestry
          // to preserve Dart covariant callback and generic subtype relations.
          final marker =
              (nativeInput == null
                      ? owner.superTypes.where((p) => p.kind == 'typeOnly')
                      : [identity])
                  .map(
                    (parent) => tsType(
                      parent.specialize(substitutions),
                      input: false,
                      nominal: true,
                    ),
                  )
                  .toSet()
                  .join(' & ');
          final accepted = nativeInput == null ? marker : 'DartInput<$marker>';
          return '$accepted${type.primitiveKinds.map((kind) => kind == 'String'
              ? ' | string'
              : kind == 'bool'
              ? ' | boolean'
              : ' | number').toSet().join()}${type.nullable ? ' | null' : ''}';
        }
      }

      final base = switch (type.category) {
        FlaxCodegenTypeCategory.parameter => parameter(),
        FlaxCodegenTypeCategory.typeOnly =>
          'Readonly<{ ${jsonEncode('__flaxBound:${type.originatingUri}::${type.originatingName}')}: readonly [${type.tsArguments.map((t) => child(t, asInput: _classes[t.id]?.isWidgetSubtype == true)).join(', ')}] }>',
        FlaxCodegenTypeCategory.uint8List || FlaxCodegenTypeCategory.buffer =>
          'globalThis.${flaxCodegenBufferTypes[type.kind]}',
        FlaxCodegenTypeCategory.bigInt => 'bigint',
        FlaxCodegenTypeCategory.string => 'string',
        FlaxCodegenTypeCategory.boolean => 'boolean',
        FlaxCodegenTypeCategory.integer ||
        FlaxCodegenTypeCategory.number ||
        FlaxCodegenTypeCategory.numeric => 'number',
        FlaxCodegenTypeCategory.scalar => '(string | number)',
        FlaxCodegenTypeCategory.widget =>
          type.id == null ? widgetType : reference(),
        FlaxCodegenTypeCategory.nativeFunction => () {
          conversionImports.add('DartFunction');
          return '_FlaxDartFunction';
        }(),
        FlaxCodegenTypeCategory.callback => callback(type),
        FlaxCodegenTypeCategory.iterable =>
          input
              ? 'DartIterableInput<${child(type.item!, asInput: false)}, ${child(type.item!)}>'
              : 'DartIterable<${child(type.item!)}>',
        FlaxCodegenTypeCategory.list =>
          input
              ? 'DartListInput<${child(type.item!, asInput: false)}, ${child(type.item!)}>'
              : 'DartList<${child(type.item!)}>',
        FlaxCodegenTypeCategory.map =>
          input
              ? 'DartMapInput<${child(type.key!, asInput: false)}, ${child(type.item!, asInput: false)}, ${child(type.key!)}, ${child(type.item!)}>'
              : 'DartMap<${child(type.key!)}, ${child(type.item!)}>',
        FlaxCodegenTypeCategory.set =>
          input
              ? 'DartSetInput<${child(type.item!, asInput: false)}, ${child(type.item!)}>'
              : 'DartSet<${child(type.item!)}>',
        FlaxCodegenTypeCategory.any => type.nullable ? 'unknown' : '{}',
        FlaxCodegenTypeCategory.data =>
          type.nullable ? 'NavigationData' : 'NonNullable<NavigationData>',
        FlaxCodegenTypeCategory.future => 'Promise<${child(type.item!)}>',
        FlaxCodegenTypeCategory.futureOr =>
          '${child(type.item!)} | Promise<${child(type.item!)}>',
        FlaxCodegenTypeCategory.stream => stream(),
        FlaxCodegenTypeCategory.record => record(),
        FlaxCodegenTypeCategory.enumeration ||
        FlaxCodegenTypeCategory.context ||
        FlaxCodegenTypeCategory.state ||
        FlaxCodegenTypeCategory.object => reference(),
        FlaxCodegenTypeCategory.voidType =>
          input && !voidResult ? 'unknown' : 'void',
        FlaxCodegenTypeCategory.neverType => 'never',
      };
      final primitives = (nominal ? <String>[] : type.primitiveKinds)
          .map(
            (k) => k == 'String'
                ? 'string'
                : k == 'bool'
                ? 'boolean'
                : 'number',
          )
          .toSet();
      return '$base${primitives.isEmpty ? '' : ' | ${primitives.join(' | ')}'}${type.nullable ? ' | null' : ''}';
    }

    boundType = (type) {
      final previous = renderingBounds;
      renderingBounds = true;
      try {
        return tsType(
          type,
          input: _classes[type.id]?.isWidgetSubtype == true,
          bridgeGenerics: false,
        );
      } finally {
        renderingBounds = previous;
      }
    };

    String generics(
      List<FlaxCodegenGenericParameter> parameters, {
      bool defaults = true,
    }) {
      for (final parameter in parameters) {
        genericDeclarations[parameter.genericIdentity] = parameter;
      }
      if (parameters.any((parameter) => parameter.defaultType == null)) {
        defaults = false;
      }
      // Erasing F-bounds can produce a Dart default that does not satisfy the
      // recursive TS relationship. Require inference or explicit TS arguments.
      if (parameters.any(
        (p) =>
            _containsParameter(p.bound, {p.name}) &&
            (p.defaultType == null ||
                (p.defaultType!.kind == p.bound.kind &&
                    p.defaultType!.id == p.bound.id)),
      )) {
        defaults = false;
      }
      final declarations = <String>[];
      final remaining = parameters.map((p) => p.name).toSet();
      // TS cannot default a parameter to a bound declared later in the list.
      for (final parameter in parameters) {
        remaining.remove(parameter.name);
        if (_containsParameter(parameter.bound, remaining)) defaults = false;
      }
      remaining.addAll(parameters.map((p) => p.name));
      for (final parameter in parameters) {
        // Defaults may retain outer or preceding bounds, never self/later ones.
        final defaultType =
            _containsAnyParameter(parameter.bound) &&
                !_containsParameter(parameter.bound, remaining)
            ? parameter.bound
            : parameter.defaultType ?? parameter.bound;
        declarations.add(
          '${genericNames[parameter.genericIdentity] ?? parameter.name} extends ${boundType(parameter.bound)} ${defaults ? '= ${tsType(defaultType, bridgeGenerics: false)}' : ''}',
        );
        remaining.remove(parameter.name);
      }
      return declarations.isEmpty ? '' : '<${declarations.join(', ')}>';
    }

    String genericUse(FlaxCodegenClassModel type) => type.typeParameters.isEmpty
        ? ''
        : '<${type.typeParameters.map((p) => p.name).join(', ')}>';

    String constructorGenerics(
      FlaxCodegenClassModel type,
      FlaxCodegenConstructorModel constructor,
    ) {
      if (type.typeParameters.length == 1) {
        final parameter = type.typeParameters.single;
        final scalar = constructor.parameters.any(
          (input) =>
              input.type.kind == 'scalar' &&
              input.type.declaration?.kind == 'parameter' &&
              input.type.declaration?.name == parameter.name,
        );
        if (scalar) {
          final name =
              genericNames[parameter.genericIdentity] ?? parameter.name;
          return '<$name extends (string | number) = (string | number)>';
        }
      }
      return generics(type.typeParameters);
    }

    // Runtime omission accepts explicit undefined, including with exact TS options.
    String namedParameter(FlaxCodegenParameterModel p, String valueType) =>
        '${p.name}${p.required ? '' : '?'}: $valueType${p.required ? '' : ' | undefined'}';

    void emitTypedefs(StringBuffer out) {
      for (final alias in module.typedefs) {
        // TS defaults cannot reference their own or a later parameter.
        final parameters = generics(
          alias.typeParameters,
          defaults: !alias.typeParameters.asMap().entries.any(
            (entry) => _containsParameter(
              entry.value.defaultType ?? entry.value.bound,
              alias.typeParameters.skip(entry.key).map((p) => p.name).toSet(),
            ),
          ),
        );

        out.writeln(
          'export type ${alias.name}$parameters = ${tsType(alias.target)};',
        );
        out.writeln(
          'export type ${alias.name}Input$parameters = ${tsType(alias.target, input: true)};',
        );
      }
    }

    final out = StringBuffer(
      '''// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
$_typescriptHostImport
''',
    );
    if (module.stateVariants.isNotEmpty) {
      out.writeln(
        "import { componentStateCall as _flaxComponentStateCall, defineStateMembers as _flaxDefineStateMembers, registerComponentStateVariant as _flaxRegisterComponentStateVariant } from '@flax/core/bindings';",
      );
      final componentImport =
          module.name == 'components' &&
              module.library == 'package:flutter/widgets.dart'
          ? '../../../../components.js'
          : '@flax/flutter/widgets';
      out.writeln(
        "import { State as _FlaxComponentState, StatefulWidget as _FlaxComponentStatefulWidget } from '$componentImport';",
      );
    }
    if (module.classes.any(
      (c) => c.proxy?.kind == 'extends' || c.proxy?.widgetInterface == true,
    )) {
      out.writeln(
        "import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';",
      );
    } else if (module.classes.any(
      (c) => _hasWidgetObjectView(c) || _isWidgetObject(c),
    )) {
      out.writeln(
        "import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';",
      );
    }
    if (moduleInstallImport == null) {
      _writeTypescriptModuleInstall(out, module);
    } else {
      out.writeln(
        'import { construct, constructProxy, constructObject, '
        'constructDeferredObject, constructStream, constructAsyncIterableStream, '
        '_flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, '
        'invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, '
        'invokeStatic, invokeInstance, invokeTopLevel } from '
        '${jsonEncode(moduleInstallImport)};',
      );
    }
    String methodSignature(
      FlaxCodegenMethodModel method, {
      bool callable = false,
    }) {
      // TS uses lexical names even when Analyzer specializes an inherited method.
      final previousGenericConversions = genericConversions;
      genericConversions = parameterConversions(
        method.deferredFactory ? const [] : method.typeParameters,
      );
      final args = [
        for (final p in method.parameters.where((p) => p.positional))
          '${_parameterLocalName(p)}${p.required ? '' : '?'}: ${tsType(p.type, input: true)}',
      ];
      final named = method.parameters.where((p) => !p.positional).toList();
      if (named.isNotEmpty) {
        args.add(
          'options${named.every((p) => !p.required) ? '?' : ''}: {${named.map((p) => namedParameter(p, tsType(p.type, input: true))).join('; ')}}',
        );
      }
      final signature = callable
          ? '${generics(method.typeParameters)}(${args.join(', ')}) => ${tsType(method.result)}'
          : '${method.name == 'constructor' ? '["constructor"]' : method.name}${generics(method.typeParameters)}(${args.join(', ')}): ${tsType(method.result)}';
      genericConversions = previousGenericConversions;
      return signature;
    }

    String instanceMethodSignature(
      FlaxCodegenClassModel owner,
      FlaxCodegenMethodModel method,
    ) {
      final signature = methodSignature(method);
      if (owner.kind == 'context' &&
          method.name == 'findAncestorWidgetOfExactType') {
        return '${method.name}: (${methodSignature(method, callable: true)}) & ComponentContext["${method.name}"]';
      }
      final future = _futureSupertype(owner);
      if (future != null && method.name == 'then') {
        final item = tsType(future.item!);
        return '$signature; then<TResult1 = $item, TResult2 = never>(onfulfilled?: ((value: $item) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>';
      }
      for (final parent in owner.superTypes.where(
        (parent) => parent.kind == 'stream',
      )) {
        final base = _classes[parent.id];
        if (base == null) continue;
        final inherited = base.methods
            .where(
              (candidate) =>
                  candidate.instance && candidate.name == method.name,
            )
            .firstOrNull;
        if (inherited == null ||
            inherited.typeParameters.length != method.typeParameters.length) {
          continue;
        }
        final arguments = parent.kind == 'stream'
            ? [parent.item!]
            : parent.tsArguments.isNotEmpty
            ? parent.tsArguments
            : parent.dartArguments;
        if (arguments.length != base.typeParameters.length) continue;
        final specialized = inherited.specialize({
          for (var i = 0; i < arguments.length; i++)
            base.typeParameters[i].genericIdentity: arguments[i],
          for (var i = 0; i < method.typeParameters.length; i++)
            inherited.typeParameters[i].genericIdentity: FlaxCodegenTypeRef(
              'parameter',
              name: method.typeParameters[i].name,
              genericIdentity: method.typeParameters[i].genericIdentity,
            ),
        });
        if (methodSignature(specialized) == signature) {
          return '${method.name}: ${tsType(parent, nominal: true)}[${jsonEncode(method.name)}]';
        }
      }
      return signature;
    }

    final vmSignatures = StringBuffer();
    var vmSignatureCount = 0;
    var tsOwnerParameters = <FlaxCodegenGenericParameter>[];
    String vmSignature(
      List<FlaxCodegenGenericParameter> parameters,
      String Function() surface, {
      List<FlaxCodegenGenericParameter> owners = const [],
    }) {
      final previousNames = genericNames;
      final previousConversions = genericConversions;
      final previousSelection = selectedSignature;
      selectedSignature = true;
      genericNames = {
        ...genericNames,
        for (final (i, p) in owners.indexed) ?p.genericIdentity: '_OwnerType$i',
        for (final (i, p) in parameters.indexed)
          ?p.genericIdentity: '_Selected$i',
      };
      genericConversions = parameterConversions([...owners, ...parameters]);
      final name = '_FlaxSignature${vmSignatureCount++}';
      final ownerDeclaration = owners.isEmpty
          ? ''
          : '<${owners.map((p) => '${genericNames[p.genericIdentity]} extends ${boundType(p.bound)}').join(', ')}>';
      final ownerUse = owners.isEmpty
          ? ''
          : '<${owners.map((p) => previousNames[p.genericIdentity] ?? p.name).join(', ')}>';
      // Infer dependent bounds with erased peers, then check the exact bounds.
      final previousErasure = erasedBoundParameters;
      erasedBoundParameters = {
        ...previousErasure,
        ...parameters.map((parameter) => parameter.genericIdentity),
      };
      final pattern =
          'readonly [${parameters.indexed.map((entry) => 'infer _Selected${entry.$1}${_containsAnyParameter(entry.$2.bound) ? ' extends ${boundType(entry.$2.bound)}' : ''}').join(', ')}]';
      erasedBoundParameters = previousErasure;
      var value = surface();
      for (final p in parameters.reversed) {
        value =
            '[${genericNames[p.genericIdentity]}] extends [${boundType(p.bound)}] ? $value : never';
      }
      vmSignatures.writeln(
        'interface $name$ownerDeclaration extends _FlaxDartSignature { readonly call: this["arguments"] extends $pattern ? $value : never; }',
      );
      genericNames = previousNames;
      genericConversions = previousConversions;
      selectedSignature = previousSelection;
      return '$name$ownerUse';
    }

    String callSignature(
      FlaxCodegenMethodModel method, {
      List<FlaxCodegenGenericParameter> owners = const [],
    }) => vmSignature(method.typeParameters, () {
      final arguments = [
        for (final p in method.parameters.where((p) => p.positional))
          '${_parameterLocalName(p)}${p.required ? '' : '?'}: ${tsType(p.type, input: true)}',
      ];
      final named = method.parameters.where((p) => !p.positional).toList();
      if (named.isNotEmpty) {
        arguments.add(
          'options${named.every((p) => !p.required) ? '?' : ''}: {${named.map((p) => namedParameter(p, tsType(p.type, input: true))).join(';')}}',
        );
      }
      return '(${arguments.join(',')}) => ${tsType(method.result)}';
    }, owners: owners);

    callbackCases = (callback) {
      final captures = <Object, FlaxCodegenGenericParameter>{};
      final local = callback.typeParameters
          .map((p) => p.genericIdentity)
          .toSet();
      void visit(FlaxCodegenTypeRef type, Set<Object?> bound) {
        if (type.kind == 'parameter' && !bound.contains(type.genericIdentity)) {
          final parameter = genericDeclarations[type.genericIdentity];
          if (parameter == null) {
            throw StateError('Unknown enclosing generic callback parameter');
          }
          captures.putIfAbsent(parameter.genericIdentity!, () => parameter);
          return;
        }
        final nested = {
          ...bound,
          ...type.typeParameters.map((p) => p.genericIdentity),
        };
        for (final child in <FlaxCodegenTypeRef?>[
          type.item,
          type.key,
          type.result,
          type.declaration,
          ...type.parameters.map((p) => p.type),
          ...type.recordFields.map((f) => f.type),
          ...type.dartArguments,
          ...type.tsArguments,
          ...type.typeParameters.map((p) => p.bound),
        ].whereType<FlaxCodegenTypeRef>()) {
          visit(child, nested);
        }
      }

      visit(callback, local);
      for (var count = 0; count < captures.length; count++) {
        visit(captures.values.elementAt(count).bound, local);
      }
      return callSignature(
        FlaxCodegenMethodModel(
          'callback',
          callback.parameters,
          callback.result!,
          typeParameters: callback.typeParameters,
        ),
        owners: captures.values.toList(),
      );
    };
    final snapshotIds = {for (final snapshot in module.snapshots) snapshot.id};
    _writeSnapshotTypes(out, module);
    for (final type in module.types.where(
      (type) =>
          _owners[type.id] == module &&
          !snapshotIds.contains(type.id) &&
          !module.classes.any((value) => value.id == type.id),
    )) {
      final exportPrefix = module.internalTypeNames.contains(type.name)
          ? ''
          : 'export ';
      if (type.isEnum) {
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters)} extends DartEnum { readonly __${type.name}: unique symbol; readonly name: string; readonly index: number; }',
        );
        out.writeln(
          'defineEnum(${jsonEncode(type.id)}, ${jsonEncode(type.enumNames)});',
        );
        final enumApi = '_flaxEnum_${type.name}_api';
        out.writeln('const $enumApi = {');
        for (final name in type.enumNames.where(
          (name) => !name.startsWith('_'),
        )) {
          final constantType = type.enumValueTypes[name];
          out.writeln(
            '$name: enumValue<${constantType == null ? type.name : tsType(constantType, declarations: true)}>(${jsonEncode(type.id)}, ${jsonEncode(name)}),',
          );
        }
        out.writeln(
          'values: Object.freeze([${type.enumNames.map((name) => 'enumValue<${type.name}${type.typeParameters.isEmpty ? '' : '<${type.typeParameters.map((p) => tsType(p.defaultType!)).join(', ')}>'}>(${jsonEncode(type.id)}, ${jsonEncode(name)})').join(', ')}]),',
        );
        out.writeln('};');
        final enumType =
            type.name +
            (type.typeParameters.isEmpty
                ? ''
                : '<${type.typeParameters.map((_) => 'any').join(', ')}>');
        out.writeln(
          '${exportPrefix}const ${type.name} = Object.freeze(_flaxBindInstanceType<$enumType, typeof $enumApi>($enumApi, ${jsonEncode(type.id)}, []) as typeof $enumApi & _FlaxInstanceType<$enumType> & _FlaxDartType<$enumType, ${_dartTypeNominalKey(type.id, type.typeParameters.map((p) => p.defaultType!).toList())}>);',
        );
      } else if (_intrinsicStreamTypeIds.contains(type.id)) {
        final parameter = type.typeParameters.single;
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters, defaults: type.typeParameters.any((p) => p.defaultType != null))} extends FlaxStreamReference<${parameter.name}> { readonly __${type.name}: unique symbol; }',
        );
      } else {
        final ancestry = type.dependencySuperTypes
            .where((parent) => parent.kind == 'typeOnly')
            .map((parent) => tsType(parent, nominal: true))
            .toSet();
        final sourceSplit = type.id.lastIndexOf('::');
        if (ancestry.isEmpty && sourceSplit > 0) {
          ancestry.add(
            tsType(
              FlaxCodegenTypeRef(
                'typeOnly',
                originatingUri: type.id.substring(0, sourceSplit),
                originatingName: type.id.substring(sourceSplit + 2),
                tsArguments: [
                  for (final parameter in type.typeParameters)
                    FlaxCodegenTypeRef(
                      'parameter',
                      name: parameter.name,
                      genericIdentity: parameter.genericIdentity,
                    ),
                ],
              ),
              nominal: true,
            ),
          );
        }
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters, defaults: type.typeParameters.any((p) => p.defaultType != null))}'
          '${ancestry.isEmpty ? ' { readonly __${type.name}: unique symbol; }' : ' extends ${ancestry.join(', ')} {}'}',
        );
      }
    }
    String classSignature(
      FlaxCodegenClassModel owner,
    ) => vmSignature(owner.typeParameters, () {
      final use =
          '<${owner.typeParameters.map((p) => genericNames[p.genericIdentity]).join(', ')}>';
      final result =
          '${owner.proxy?.widgetInterface == true
              ? '_${owner.name}Implementation'
              : owner.kind == 'widget' && owner.proxy != null
              ? '_${owner.name}Native'
              : owner.name}$use';
      String arguments(FlaxCodegenConstructorModel ctor) {
        final values = [
          for (final p in ctor.parameters.where((p) => p.positional))
            '${_parameterLocalName(p)}${p.required ? '' : '?'}: ${tsType(p.type, input: true)}',
        ];
        final named = ctor.parameters.where((p) => !p.positional).toList();
        if (named.isNotEmpty) {
          values.add(
            'options${named.every((p) => !p.required) ? '?' : ''}: {${named.map((p) => namedParameter(p, tsType(p.type, input: true))).join(';')}}',
          );
        }
        return values.join(', ');
      }

      final constructors = [
        if (owner.proxy?.widgetInterface != true &&
            (owner.proxy?.kind != 'extends' || owner.kind == 'widget'))
          for (final ctor in owner.constructors)
            '${ctor.name.isEmpty ? '' : '${ctor.name}: '}(${arguments(ctor)})${ctor.name.isEmpty ? ':' : '=>'} $result;',
        'readonly prototype: $result;',
        if (owner.proxy != null && !owner.proxy!.widgetInterface)
          'implement(args: readonly [${_proxyConstructor(owner).parameters.where((p) => p.positional).map((p) => tsType(p.type, input: true)).join(', ')}${_proxyConstructor(owner).parameters.any((p) => !p.positional) ? '${_proxyConstructor(owner).parameters.any((p) => p.positional) ? ', ' : ''}options${_proxyConstructor(owner).parameters.where((p) => !p.positional).every((p) => !p.required) ? '?' : ''}: {${_proxyConstructor(owner).parameters.where((p) => !p.positional).map((p) => namedParameter(p, tsType(p.type, input: true))).join('; ')}}' : ''}], implementation: Partial<$result>): $result;',
      ];
      final construct =
          owner.proxy?.kind == 'extends' || owner.proxy?.widgetInterface == true
          ? '(abstract new (${arguments(_proxyConstructor(owner))}) => $result) & ${owner.constructors.length > 1 ? '(abstract new (call: _FlaxProxySuper<$result>) => $result) & ' : ''}'
          : '';
      return '$construct{${constructors.join()}} & _FlaxInstanceType<$result> & _FlaxDartType<$result>';
    });

    void emitTsCallable(
      StringBuffer target,
      FlaxCodegenMethodModel method, {
      required String id,
      String? deferredOwner,
      String? namespace,
      FlaxCodegenClassCategory? category,
      bool functionTransport = false,
      bool exportNamespace = true,
      bool enumOperation = false,
      String? enumOperationIds,
      bool literal = false,
      bool declarations = true,
      FlaxCodegenExtensionModel? extensionView,
      FlaxCodegenExtensionMemberModel? extensionMember,
      bool signatureOnly = false,
      List<FlaxCodegenMethodModel> literalOverloads = const [],
    }) {
      final previousGenericNames = genericNames;
      final previousGenericConversions = genericConversions;
      if (extensionView != null) {
        genericNames = {};
        final used = <String>{};
        for (final p in method.typeParameters) {
          var name = p.name;
          var suffix = 2;
          while (!used.add(name)) {
            name = '${p.name}${suffix++}';
          }
          if (p.genericIdentity case final identity?) {
            genericNames[identity] = name;
          }
        }
      }
      final receiver = extensionView != null && !extensionMember!.isStatic
          ? method.parameters.first
          : null;
      // One prototype serves every receiver specialization; public views retain T.
      if (receiver != null && !signatureOnly) {
        for (final parameter in method.typeParameters.take(
          extensionView!.typeParameters.length,
        )) {
          if (parameter.genericIdentity case final identity?) {
            genericNames[identity] = parameter.defaultType == null
                ? 'never'
                : tsType(parameter.defaultType!);
          }
        }
      }
      final parameters = receiver == null
          ? method.parameters
          : method.parameters.skip(1).toList();
      final typeParameters = method.typeParameters
          .skip(receiver == null ? 0 : extensionView!.typeParameters.length)
          .toList();
      genericConversions = parameterConversions(
        method.deferredFactory ? const [] : method.typeParameters,
      );
      final genericCall =
          !method.instance &&
          !literal &&
          !signatureOnly &&
          !enumOperation &&
          extensionView == null &&
          method.typeParameters.isNotEmpty;
      final callableName = genericCall && namespace != null
          ? '_flaxDefault_${method.name}'
          : method.name;
      final memberName = extensionMember?.exportName ?? method.name;
      final getter =
          extensionMember?.kind == 'getter' ||
          extensionMember?.kind == 'staticGetter';
      final named = parameters.where((p) => !p.positional).toList();
      final args = parameters
          .where((p) => p.positional)
          .map(
            (p) =>
                '${_parameterLocalName(p)}${p.required ? '' : '?'}: ${tsType(p.type, input: true, declarations: declarations && !method.instance)}',
          )
          .toList();
      if (named.isNotEmpty) {
        args.add(
          'options${signatureOnly && named.every((p) => !p.required) ? '?' : ''}: { ${named.map((p) => namedParameter(p, tsType(p.type, input: true, declarations: declarations && !method.instance))).join('; ')} }${!signatureOnly && named.every((p) => !p.required) ? ' = {}' : ''}',
        );
      }
      if (receiver != null && !getter) {
        final arguments = extensionView!.typeParameters.isEmpty
            ? ''
            : '<${method.typeParameters.take(extensionView.typeParameters.length).map((p) => genericNames[p.genericIdentity] ?? p.name).join(', ')}>';
        args.insert(0, 'this: ${extensionView.name}$arguments');
      }
      if (signatureOnly) {
        target.writeln(
          getter
              ? 'readonly $memberName: ${tsType(method.result)};'
              : '$memberName${generics(typeParameters)}(${args.join(', ')}): ${tsType(method.result)};',
        );
        genericNames = previousGenericNames;
        genericConversions = previousGenericConversions;
        return;
      }
      target.writeln(
        getter
            ? 'get $memberName(): ${tsType(method.result)} {'
            : method.instance || literal
            ? '${literalOverloads.isEmpty ? memberName : '$memberName: function'}${literal ? generics(typeParameters) : ''}(${[if (method.instance) 'this: object', ...args].join(', ')}): ${tsType(method.result, declarations: declarations && !method.instance)} {'
            : '${namespace == null ? "function _flaxTopLevel_" : "${exportNamespace ? 'export ' : ''}namespace $namespace { ${genericCall ? '' : 'export '}function "}$callableName${generics(method.typeParameters)}(${args.join(', ')}): ${tsType(method.result, declarations: declarations && !method.instance)} {',
      );
      target.writeln(
        "if (arguments.length > ${args.length - (receiver != null && !getter ? 1 : 0)}) throw new TypeError('Too many method arguments');",
      );
      if (receiver != null) {
        target.writeln(
          'const ${receiver.name} = _flaxExtensionReceiver(this, ${jsonEncode(extensionView!.members.first.id)});',
        );
      }
      _guardPositionalTs(target, parameters);
      if (named.isNotEmpty) {
        target.writeln(
          "if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !${jsonEncode(named.map((p) => p.name).toList())}.includes(k))) throw new TypeError('Invalid named method arguments');",
        );
      }
      final values = method.parameters
          .map((p) {
            final value = p.positional
                ? _parameterLocalName(p)
                : 'options.${p.name}';
            return p.type.kind == 'context'
                ? 'contextHandle($value, ${jsonEncode(p.type.id)})'
                : value;
          })
          .join(', ');
      if (method.deferredFactory) {
        final params = method.parameters
            .map(
              (parameter) => {
                'name': parameter.name,
                if (parameter.required) 'required': true,
                if (parameter.positional) 'positional': true,
              },
            )
            .toList();
        final positional = method.parameters
            .where((parameter) => parameter.positional)
            .map(_parameterLocalName)
            .join(', ');
        target.writeln(
          'const _flaxResult = constructDeferredObject(${jsonEncode(deferredOwner!)}, '
          '${jsonEncode(method.name)}, ${jsonEncode(params)}, '
          '[$positional], ${named.isEmpty ? '{}' : 'options'}) as '
          '${tsType(method.result, declarations: !method.instance)};',
        );
      }
      var invocation = namespace == null || functionTransport
          ? 'invokeTopLevel('
          : 'invokeStatic(';
      if (enumOperation) {
        invocation = 'invokeTopLevel(';
      } else if (method.instance) {
        final helper = switch (category) {
          FlaxCodegenClassCategory.object => 'invokeObject',
          FlaxCodegenClassCategory.stream => 'invokeStream',
          _ => 'invokeInstance',
        };
        invocation = '$helper(this, ';
      }
      if (!method.deferredFactory) {
        target.writeln(
          enumOperationIds == null
              ? 'const _flaxResult = $invocation${jsonEncode(id)}, ${namespace == null || functionTransport || enumOperation ? "" : "${jsonEncode(method.name)}, "}[${enumOperation && method.instance ? 'this${values.isEmpty ? '' : ', '}' : ''}$values]);'
              : 'const _flaxResult = invokeEnum(this, $enumOperationIds, [$values]);',
        );
      }
      if (method.result.kind != 'void') {
        target.writeln(
          'return _flaxResult as ${tsType(method.result, declarations: declarations && !method.instance)};',
        );
      }
      if (literalOverloads.isNotEmpty) {
        target.writeln('} as {');
        for (final overload in literalOverloads) {
          emitTsCallable(
            target,
            FlaxCodegenMethodModel('', overload.parameters, overload.result),
            id: id,
            signatureOnly: true,
            declarations: false,
          );
        }
        target.writeln('},');
      } else {
        target.writeln(
          method.instance || literal
              ? '},'
              : namespace == null
              ? '}'
              : genericCall
              ? '}'
              : '} }',
        );
      }
      if (genericCall) {
        final source = namespace == null
            ? '_flaxTopLevel_${method.name}'
            : callableName;
        final cases = callSignature(
          method,
          owners: method.instance ? tsOwnerParameters : const [],
        );
        final result = namespace == null
            ? '_flaxGeneric_${method.name}'
            : method.name;
        target.writeln(
          '${namespace == null ? '' : 'export '}const $result = _flaxDefineDartCallTypes($source, ${_genericCallMetadata(method, id)}) as _FlaxDartCallable<typeof $source, $cases>;',
        );
        if (namespace != null) target.writeln('}');
      }
      if (namespace == null && !method.instance && !literal) {
        target.writeln(
          'export { ${genericCall ? '_flaxGeneric_' : '_flaxTopLevel_'}${method.name} as ${method.name} };',
        );
      }
      genericNames = previousGenericNames;
      genericConversions = previousGenericConversions;
    }

    out.writeln(
      "import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';",
    );
    if (module.extensions.any((e) => e.typeParameters.isNotEmpty)) {
      out.writeln(
        "import type { flaxDartExtensionTypes as _flaxDartExtensionTypes } from '@flax/core/bindings';",
      );
    }
    final memberLayouts = <String, String>{};
    String parameterMetadata(List<Map<String, Object?>> parameters) {
      final layout = jsonEncode(parameters);
      return memberLayouts.putIfAbsent(
        layout,
        () => '_flaxMemberParameters${memberLayouts.length}',
      );
    }

    String memberMetadata(Iterable<FlaxCodegenMethodModel> methods) =>
        '{${methods.map((method) {
          final name = parameterMetadata(_memberParameters(method.parameters));
          return '${jsonEncode(method.name)}:$name';
        }).join(',')}}';
    final staticMethods = StringBuffer();
    final instanceChecks = StringBuffer();
    String methodCases(FlaxCodegenClassModel type) {
      final methods = type.methods
          .where(
            (m) =>
                m.instance &&
                m.typeParameters.isNotEmpty &&
                !m.deferredFactory &&
                !(m.name == 'then' && _futureSupertype(type) != null),
          )
          .toList();
      if (methods.isEmpty) return '';
      return 'readonly [_flaxDartMethodCases]?: {${methods.map((m) => '${m.name}: ${callSignature(m, owners: type.typeParameters)};').join()}};';
    }

    String valueName(FlaxCodegenClassModel type) =>
        type.proxy?.widgetInterface == true
        ? '_${type.name}Implementation'
        : type.proxy?.kind == 'extends' && type.kind != 'widget'
        ? type.name
        : '_${type.name}Factory';
    String instanceType(FlaxCodegenClassModel type) =>
        type.name +
        (type.typeParameters.isEmpty
            ? ''
            : '<${type.typeParameters.map((p) => p.defaultType == null ? 'never' : tsType(p.defaultType!)).join(", ")}>');
    String proxyArguments(
      FlaxCodegenClassModel type, [
      FlaxCodegenConstructorModel? selected,
    ]) {
      final ctor = selected ?? _proxyConstructor(type);
      final args = ctor.parameters
          .where((p) => p.positional)
          .map(
            (p) =>
                '${_parameterLocalName(p)}${p.required ? '' : '?'}: ${tsType(p.type, input: true, declarations: type.typeArguments.isEmpty)}',
          )
          .toList();
      final named = ctor.parameters.where((p) => !p.positional).toList();
      if (named.isNotEmpty) {
        args.add(
          'options${named.every((p) => !p.required) ? '?' : ''}: {${named.map((p) => namedParameter(p, tsType(p.type, input: true, declarations: type.typeArguments.isEmpty))).join('; ')}}',
        );
      }
      return args.join(', ');
    }

    void emitProxy(
      StringBuffer target,
      FlaxCodegenClassModel type,
      FlaxCodegenProxyModel proxy,
    ) {
      final className = proxy.widgetInterface
          ? '_${type.name}Implementation'
          : type.kind == 'widget'
          ? '_${type.name}Native'
          : type.name;
      final ctor = _proxyConstructor(type);
      final params = [
        for (final p in ctor.parameters)
          {
            'name': p.name,
            if (p.required) 'required': true,
            if (p.positional) 'positional': true,
          },
      ];
      target.writeln(
        'const _${type.name}Proxy = {'
        '${type.kind == 'widget' || _isWidgetObject(type) ? 'nativeWidget: true, ' : ''}type: ${jsonEncode(type.id)}, parameters: ${parameterMetadata(params)}, '
        'constructors: {${type.constructors.map((c) => '${jsonEncode(c.name)}: ${parameterMetadata([
          for (final p in c.parameters) {'name': p.name, if (p.required) 'required': true, if (p.positional) 'positional': true},
        ])}').join(',')}}, '
        'methods: ${memberMetadata(proxy.methods.map((method) => proxy.hasSuperMethod(method.name) ? type.methods.firstWhere((surface) => surface.instance && surface.name == method.name) : method))}, '
        'getters: ${jsonEncode(proxy.getters.map((g) => g.name).toList())}, '
        'setters: ${jsonEncode(proxy.setters.map((s) => s.name).toList())}, '
        'contextMembers: ${jsonEncode(_genericContextMembers(proxy))}, '
        'superMembers: ${jsonEncode(proxy.superMethods)}} as const;',
      );
      if (proxy.kind == 'extends' || proxy.widgetInterface) {
        target.writeln(
          'export interface $className${generics(type.typeParameters)}${proxy.widgetInterface
              ? ' extends ${type.name}${genericUse(type)}'
              : type.kind == 'widget'
              ? ' extends _FlaxDartWidget${type.widgetInterfaces.map((i) => ", Omit<${tsType(i)}, 'kind'>").join()}'
              : ''} {',
        );
        target.writeln(
          'readonly [_flaxDartTypeValue]: $className${type.typeParameters.isEmpty ? '' : '<${type.typeParameters.map((p) => p.name).join(', ')}>'};',
        );
        for (final getter in type.getters.where(
          (g) => !proxy.getters.any((p) => p.name == g.name),
        )) {
          target.writeln('get ${getter.name}(): ${tsType(getter.type)};');
        }
        for (final setter in type.setters.where(
          (s) => !proxy.setters.any((p) => p.name == s.name),
        )) {
          target.writeln(
            'set ${setter.name}(value: ${tsType(setter.type, input: true)});',
          );
        }
        for (final method in type.methods.where(
          (m) => m.instance && !proxy.methods.any((p) => p.name == m.name),
        )) {
          target.writeln('${instanceMethodSignature(type, method)};');
        }
        if (type.constructors.length > 1) {
          target.writeln(
            'readonly [_flaxDartConstructors]?: {${type.constructors.map((c) => '${jsonEncode(c.name)}: (${proxyArguments(type, c)}) => void;').join()}};',
          );
        }
        target.writeln(methodCases(type));
        for (final method in proxy.methods.where(
          (m) => proxy.hasSuperMethod(m.name),
        )) {
          target.writeln('${instanceMethodSignature(type, method)};');
        }
        for (final getter in proxy.getters.where(
          (g) =>
              proxy.hasSuperGetter(g.name) ||
              proxy.setters.any(
                (s) => s.name == g.name && proxy.hasSuperSetter(g.name),
              ),
        )) {
          target.writeln('get ${getter.name}(): ${tsType(getter.type)};');
        }
        for (final setter in proxy.setters.where(
          (s) =>
              proxy.hasSuperSetter(s.name) ||
              proxy.getters.any(
                (g) => g.name == s.name && proxy.hasSuperGetter(s.name),
              ),
        )) {
          target.writeln(
            'set ${setter.name}(value: ${tsType(setter.type, input: true)});',
          );
        }
        target.writeln('}');
        target.writeln(
          'export abstract class $className${generics(type.typeParameters)} extends _FlaxProxyBase {',
        );
        target.writeln(
          'static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<${instanceType(type)}>[typeof globalThis.Symbol.hasInstance];',
        );
        target.writeln(
          'static declare [_flaxDartTypeValue]: ${instanceType(type)};',
        );
        target.writeln(
          'static declare [_flaxDartTypeKey]: ${_dartTypeOwnerKey(type)};',
        );
        final caseType = type.typeParameters.isEmpty
            ? ''
            : ' & _FlaxDartTypeCases<${classSignature(type)}>';
        if (caseType.isNotEmpty) {
          target.writeln(
            r"static declare $type: _FlaxDartTypeCases<unknown>['$type'];",
          );
          target.writeln(
            'static declare [_flaxDartTypeCases]: ${caseType.substring(" & _FlaxDartTypeCases<".length, caseType.length - 1)};',
          );
        }
        target.writeln(
          type.constructors.length > 1
              ? 'constructor(${proxyArguments(type)}); constructor(call: _FlaxProxySuper<$className${genericUse(type)}>); constructor(...args: unknown[]) { super(_${type.name}Proxy, args); }'
              : 'constructor(${proxyArguments(type)}) { super(_${type.name}Proxy, Array.from(arguments)); }',
        );
        for (final method in proxy.methods.where(
          (m) => !proxy.hasSuperMethod(m.name),
        )) {
          target.writeln('abstract ${methodSignature(method)};');
        }
        for (final getter in proxy.getters.where(
          (g) => !proxy.hasSuperGetter(g.name) && !proxy.hasSuperSetter(g.name),
        )) {
          target.writeln(
            'abstract get ${getter.name}(): ${tsType(getter.type)};',
          );
        }
        for (final setter in proxy.setters.where(
          (s) => !proxy.hasSuperSetter(s.name) && !proxy.hasSuperGetter(s.name),
        )) {
          target.writeln(
            'abstract set ${setter.name}(value: ${tsType(setter.type, input: true)});',
          );
        }
        target.writeln('}');
        target.writeln(
          '_flaxDefineProxyBase($className.prototype, _${type.name}Proxy${type.kind == 'widget' ? ', ${jsonEncode(type.getters.map((g) => g.name).toList())}' : ''});',
        );
      }
      if (type.kind == 'widget' || proxy.widgetInterface) return;
      final requiredMethods = proxy.methods
          .where((m) => !proxy.hasSuperMethod(m.name))
          .toList();
      final requiredGetters = proxy.getters
          .where((g) => !proxy.hasSuperGetter(g.name))
          .toList();
      final requiredSetters = proxy.setters
          .where((s) => !proxy.hasSuperSetter(s.name))
          .toList();
      final implementation = [
        for (final m in requiredMethods)
          '${m.name}: ${tsType(FlaxCodegenTypeRef('callback', parameters: m.parameters, result: m.result, typeParameters: m.typeParameters), input: true)}',
        for (final g in requiredGetters)
          'get ${g.name}(): ${tsType(g.type, input: true)}',
        for (final s in requiredSetters)
          'set ${s.name}(value: ${tsType(s.type)})',
      ].join('; ');
      target.writeln(
        'export namespace ${valueName(type)} { export function implement${generics(type.typeParameters)}(args: [${proxyArguments(type)}], implementation: {$implementation}): ${type.name}${genericUse(type)} {',
      );
      target.writeln(
        'return constructProxy(_${type.name}Proxy, args, implementation) as ${type.name}${genericUse(type)}; } }',
      );
    }

    for (final variant in module.stateVariants) {
      final stateTypeId = variant.stateWireId ?? variant.stateId;
      final stateType =
          module.classes.where((type) => type.id == stateTypeId).firstOrNull ??
          _classes[stateTypeId] ??
          _classes.values
              .where(
                (type) =>
                    type.name == 'State' &&
                    type.kind == 'state' &&
                    variant.stateId ==
                        'package:flutter/src/widgets/framework.dart::State',
              )
              .firstOrNull;
      if (stateType == null) {
        throw StateError('Missing Flutter State provider: ${variant.stateId}');
      }
      final genericDeclaration = stateType.typeParameters.isEmpty
          ? ''
          : '<${stateType.typeParameters.map((parameter) => '${parameter.name} extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget').join(', ')}>';
      final genericUse = stateType.typeParameters.isEmpty
          ? ''
          : '<${stateType.typeParameters.map((value) => value.name).join(', ')}>';
      final interfaces = [
        for (final interface in variant.interfaces)
          tsType(
            FlaxCodegenTypeRef(
              'object',
              id: interface.wireId ?? interface.id,
              name: interface.name,
            ),
            nominal: true,
          ),
      ];
      if (interfaces.isNotEmpty) {
        out.writeln(
          'export interface ${variant.name}$genericDeclaration '
          'extends ${interfaces.map((type) => 'Omit<$type, typeof _flaxDartTypeValue>').join(', ')} {}',
        );
      }
      out.writeln('export interface ${variant.name}$genericDeclaration {');
      for (final getter in variant.getters.where(
        (g) => variant.superMethods.contains('get:${g.name}'),
      )) {
        out.writeln('get ${getter.name}(): ${tsType(getter.type)};');
      }
      for (final setter in variant.setters.where(
        (g) => variant.superMethods.contains('set:${g.name}'),
      )) {
        out.writeln(
          'set ${setter.name}(value: ${tsType(setter.type, input: true)});',
        );
      }
      for (final method in variant.methods.where(
        (m) => variant.superMethods.contains('call:${m.name}'),
      )) {
        out.writeln('${methodSignature(method)};');
      }
      out.writeln('}');
      out.writeln(
        'export abstract class ${variant.name}$genericDeclaration '
        'extends _FlaxComponentState$genericUse {',
      );
      out.writeln(
        'constructor() { super(); '
        '_flaxRegisterComponentStateVariant(this, ${jsonEncode(variant.id)}); }',
      );
      for (final getter in variant.getters.where(
        (g) => !variant.superMethods.contains('get:${g.name}'),
      )) {
        out.writeln('abstract get ${getter.name}(): ${tsType(getter.type)};');
      }
      for (final setter in variant.setters.where(
        (g) => !variant.superMethods.contains('set:${g.name}'),
      )) {
        out.writeln(
          'abstract set ${setter.name}(value: ${tsType(setter.type, input: true)});',
        );
      }
      for (final method in variant.methods.where(
        (m) => !variant.superMethods.contains('call:${m.name}'),
      )) {
        out.writeln('abstract ${methodSignature(method)};');
      }
      if (variant.superMethods.contains('call:build')) {
        final contextType = stateType.methods
            .where((method) => method.name == 'build' && method.instance)
            .firstOrNull
            ?.parameters
            .firstOrNull
            ?.type;
        out.writeln(
          'build(context: ${contextType == null ? 'ComponentContext' : tsType(contextType)}): $widgetType { '
          'return this.invokeSuper("build", [context]) as $widgetType; }',
        );
      }
      out.writeln('}');
      out.writeln(
        '_flaxDefineStateMembers(${variant.name}.prototype, '
        '${memberMetadata(variant.methods.where((m) => variant.superMethods.contains('call:${m.name}')))}, '
        '${jsonEncode(variant.getters.where((g) => variant.superMethods.contains('get:${g.name}')).map((g) => g.name).toList())}, '
        '${jsonEncode(variant.setters.where((g) => variant.superMethods.contains('set:${g.name}')).map((g) => g.name).toList())});',
      );
    }

    // Collection proxies read their ordinary prototype during module loading.
    final pendingClasses = {for (final type in module.classes) type.id: type};
    final orderedClasses = <FlaxCodegenClassModel>[];
    void orderClass(FlaxCodegenClassModel type) {
      if (pendingClasses.remove(type.id) == null) return;
      final parent = _memberParent(type);
      if (parent != null) orderClass(parent);
      orderedClasses.add(type);
    }

    for (final type in module.classes) {
      orderClass(type);
    }
    for (final type in orderedClasses) {
      tsOwnerParameters = type.typeParameters;
      genericInputConversions =
          type.kind == 'enum' || type.typeParameters.isNotEmpty;
      final exportPrefix = module.internalTypeNames.contains(type.name)
          ? ''
          : 'export ';
      if (type.kind == 'enum') {
        genericInputConversions = true;
        final constants = module.types.singleWhere(
          (value) => value.id == type.id,
        );
        final bases = <String>{
          'DartEnum',
          ..._objectSuperTypes(
            type,
            (parent) => tsType(parent, nominal: true, declarations: true),
            shareOmittedKeys: shareOmittedKeys,
          ),
        };
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters, defaults: true)} extends ${bases.join(', ')} { readonly __${type.name}: unique symbol;',
        );
        out.writeln(
          'readonly [_flaxDartTypeValue]: ${type.name}${genericUse(type)};',
        );
        if (!type.getters.any((getter) => getter.name == 'name')) {
          out.writeln('readonly name: string;');
        }
        if (!type.getters.any((getter) => getter.name == 'index')) {
          out.writeln('readonly index: number;');
        }
        out.writeln(methodCases(type));
        for (final getter in type.getters) {
          out.writeln(
            type.setters.any((setter) => setter.name == getter.name)
                ? 'get ${getter.name}(): ${tsType(getter.type, declarations: true)};'
                : 'readonly ${getter.name}: ${tsType(getter.type, declarations: true)};',
          );
        }
        for (final setter in type.setters) {
          out.writeln(
            'set ${setter.name}(value: ${tsType(setter.type, input: true, declarations: true)});',
          );
        }
        for (final method in type.methods.where((method) => method.instance)) {
          out.writeln('${instanceMethodSignature(type, method)};');
        }
        out.writeln('}');
        String? genericOperations(String member, String action) =>
            type.typeParameters.isEmpty
            ? null
            : '_flaxEnum_${type.name}_${action}_$member';
        if (type.typeParameters.isNotEmpty) {
          for (final member in [
            for (final getter in type.getters) (getter.name, 'get'),
            for (final setter in type.setters) (setter.name, 'set'),
            for (final method in type.methods.where(
              (method) => method.instance,
            ))
              (method.name, 'call'),
          ]) {
            out.writeln(
              'const ${genericOperations(member.$1, member.$2)} = ${jsonEncode([for (final constant in constants.enumNames) type.enumOperationId(member.$1, member.$2, constant)])};',
            );
          }
        }
        String read(String member, String action, List<String> args) {
          final operations = genericOperations(member, action);
          return operations == null
              ? 'invokeTopLevel(${jsonEncode(type.enumOperationId(member, action))}, [${['this', ...args].join(', ')}])'
              : 'invokeEnum(this, $operations, [${args.join(', ')}])';
        }

        out.writeln(
          'defineEnum(${jsonEncode(type.id)}, ${jsonEncode(constants.enumNames)}, {',
        );
        for (final getter in type.getters) {
          out.writeln(
            'get ${getter.name}(): ${tsType(getter.type, declarations: false)} { return ${read(getter.name, 'get', [])} as ${tsType(getter.type, declarations: false)}; },',
          );
        }
        for (final setter in type.setters) {
          out.writeln(
            'set ${setter.name}(value: ${tsType(setter.type, input: true, declarations: false)}) { ${read(setter.name, 'set', ['value'])}; },',
          );
        }
        for (final method in type.methods.where((method) => method.instance)) {
          emitTsCallable(
            out,
            method,
            id: type.enumOperationId(method.name, 'call'),
            enumOperation: true,
            enumOperationIds: genericOperations(method.name, 'call'),
          );
        }
        out.writeln(
          '}, ${jsonEncode(type.getters.where((getter) => getter.cache).map((getter) => getter.name).toList())}, ${jsonEncode(type.supertypes)});',
        );
        for (final constant in constants.enumNames) {
          final methods = module
              .enumFunctions(type)
              .where(
                (f) => type.methods.any(
                  (m) =>
                      m.instance &&
                      m.typeParameters.isNotEmpty &&
                      f.id ==
                          type.enumOperationId(
                            m.name,
                            'call',
                            type.typeParameters.isEmpty ? null : constant,
                          ),
                ),
              );
          if (methods.isNotEmpty) {
            out.writeln(
              '_flaxBindDartExtension(enumValue(${jsonEncode(type.id)}, ${jsonEncode(constant)}), ${jsonEncode(type.id)}, enumValue(${jsonEncode(type.id)}, ${jsonEncode(constant)}), {${methods.map((f) {
                final name = type.methods.singleWhere((m) => f.id == type.enumOperationId(m.name, 'call', type.typeParameters.isEmpty ? null : constant)).name;
                return '${jsonEncode(name)}: ${_genericCallMetadata(f.call, f.id)}';
              }).join(',')}});',
            );
          }
        }
        final valuesType = constants.enumValueTypes.values
            .map((type) => tsType(type, declarations: true))
            .toSet()
            .join(' | ');
        final enumApi = '_flaxEnum_${type.name}_api';
        out.writeln('const $enumApi = {');
        for (final name in constants.enumNames.where(
          (name) => !name.startsWith('_'),
        )) {
          out.writeln(
            '$name: enumValue<${tsType(constants.enumValueTypes[name] ?? FlaxCodegenTypeRef('enum', id: type.id, name: type.name), declarations: true)}>(${jsonEncode(type.id)}, ${jsonEncode(name)}),',
          );
        }
        out.writeln(
          'values: Object.freeze([${constants.enumNames.map((name) => 'enumValue<$valuesType>(${jsonEncode(type.id)}, ${jsonEncode(name)})').join(', ')}]),',
        );
        for (final getter in type.staticGetters) {
          out.writeln(
            'get ${getter.name}(): ${tsType(getter.type)} { return invokeTopLevel(${jsonEncode(type.staticGetterId(getter))}, []) as ${tsType(getter.type)}; },',
          );
        }
        for (final setter in type.staticSetters) {
          final call = type.staticFunctions
              .singleWhere(
                (operation) => operation.id == type.staticSetterId(setter),
              )
              .call;
          emitTsCallable(
            out,
            FlaxCodegenMethodModel(
              'set${setter.name[0].toUpperCase()}${setter.name.substring(1)}',
              call.parameters,
              call.result,
            ),
            id: type.staticSetterId(setter),
            literal: true,
            enumOperation: true,
          );
        }
        for (final method in type.methods.where((method) => !method.instance)) {
          emitTsCallable(
            out,
            method,
            id: type.enumOperationId(method.name, 'call'),
            literal: true,
            enumOperation: true,
          );
        }
        for (final constructor in type.constructors) {
          final call = module
              .enumFunctions(type)
              .singleWhere(
                (function) =>
                    function.id ==
                    type.enumOperationId(constructor.name, 'factory'),
              )
              .call;
          final targets = <FlaxCodegenMethodModel>[];
          for (final target in constructor.specializations) {
            final arguments = _constructorTypeArguments(
              type,
              constructor,
              target,
            );
            targets.add(
              FlaxCodegenMethodModel(
                constructor.name,
                constructor.parameters
                    .map((p) => p.specialize(arguments))
                    .toList(),
                FlaxCodegenTypeRef(
                  'enum',
                  id: type.id,
                  name: type.name,
                  tsArguments: [
                    for (final parameter in type.typeParameters)
                      arguments[parameter.genericIdentity]!,
                  ],
                ),
              ),
            );
          }
          emitTsCallable(
            out,
            targets.length == 1
                ? targets.single
                : FlaxCodegenMethodModel(
                    constructor.name,
                    constructor.parameters,
                    call.result,
                  ),
            id: type.enumOperationId(constructor.name, 'factory'),
            literal: true,
            enumOperation: true,
            declarations: false,
            literalOverloads: targets.length > 1 ? targets : const [],
          );
        }
        out.writeln('};');
        final staticCases = [
          for (final m in type.methods.where(
            (m) => !m.instance && m.typeParameters.isNotEmpty,
          ))
            '${m.name}: _FlaxDartCallable<typeof $enumApi.${m.name}, ${callSignature(m)}>',
        ];
        final selectionCases = type.typeParameters.isEmpty
            ? ''
            : ' & _FlaxDartTypeCases<${classSignature(type)}>';
        final freeze = type.typeParameters.isEmpty;
        out.writeln(
          '${exportPrefix}const ${type.name} = ${freeze ? 'Object.freeze(' : ''}_flaxBindInstanceType<$valuesType, typeof $enumApi>($enumApi, ${jsonEncode(type.id)}, ${jsonEncode(type.supertypes)}) as typeof $enumApi & _FlaxInstanceType<$valuesType> & _FlaxDartType<$valuesType, ${_dartTypeOwnerKey(type)}>$selectionCases${staticCases.isEmpty ? '' : ' & {${staticCases.join(';')}}'}${freeze ? ')' : ''};',
        );
        for (final m in type.methods.where(
          (m) => !m.instance && m.typeParameters.isNotEmpty,
        )) {
          out.writeln(
            '_flaxDefineDartCallTypes($enumApi.${m.name}, ${_genericCallMetadata(m, type.enumOperationId(m.name, 'call'))});',
          );
        }
        if (type.typeParameters.isNotEmpty) {
          out.writeln(_dartTypeRegistration(type));
          out.writeln('Object.freeze(${type.name});');
        }
        genericInputConversions = false;
        continue;
      }
      final hasJsConstructor =
          type.proxy?.kind == 'extends' ||
          type.proxy?.widgetInterface == true ||
          (type.kind == 'widget' && type.proxy != null);
      final api = type.kind == 'widget' && type.proxy != null
          ? '_${type.name}Binding'
          : valueName(type);
      final hasApi =
          type.proxy != null ||
          type.asyncIterableFactory != null ||
          type.staticGetters.isNotEmpty ||
          type.staticSetters.isNotEmpty ||
          type.methods.any((method) => !method.instance) ||
          type.constructors.any(
            (ctor) =>
                ctor.name.isNotEmpty ||
                type.jsName == null ||
                type.jsName == type.name,
          );
      final check =
          '_flaxBindInstanceType<${instanceType(type)}, ${hasApi ? "typeof $api" : "object"}>(${hasApi ? api : "{}"}, ${jsonEncode(type.id)}, ${jsonEncode(type.supertypes)})';
      final caseType = type.typeParameters.isEmpty
          ? ''
          : ' & _FlaxDartTypeCases<${classSignature(type)}>';
      final apiType =
          '${hasApi ? "typeof $api" : "object"} & _FlaxInstanceType<${instanceType(type)}> & _FlaxDartType<${instanceType(type)}, ${_dartTypeOwnerKey(type)}>$caseType';
      instanceChecks.writeln(
        type.proxy?.kind == 'extends' && type.kind != 'widget'
            ? '$check;'
            : '${exportPrefix}const ${type.name}: $apiType = $check as $apiType;',
      );
      if (type.typeParameters.isNotEmpty) {
        instanceChecks.writeln(_dartTypeRegistration(type));
      }
      if (type.jsName != null &&
          type.jsName != type.name &&
          type.constructors.any((ctor) => ctor.name.isEmpty)) {
        instanceChecks.writeln(
          hasJsConstructor
              ? '${exportPrefix}const ${type.jsName}: typeof ${type.name} = ${type.name};'
              : '${exportPrefix}const ${type.jsName}: typeof _${type.name}Construct & _FlaxInstanceType<${instanceType(type)}> = _flaxBindInstanceType<${instanceType(type)}, typeof _${type.name}Construct>(_${type.name}Construct, ${jsonEncode(type.id)}, ${jsonEncode(type.supertypes)});',
        );
      }
      if (type.kind == 'members') {
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters)} { readonly __${type.name}: unique symbol; }',
        );
      }
      if (_isCoreRecord(type)) {
        conversionImports.add('DartRecord');
        out.writeln(
          '${exportPrefix}type ${type.name} = _FlaxDartRecord<Readonly<globalThis.Record<string, unknown>>>;',
        );
        continue;
      }
      if (type.staticGetters.isNotEmpty || type.staticSetters.isNotEmpty) {
        final staticObject =
            !type.constructors.any(
              (constructor) =>
                  constructor.name.isNotEmpty ||
                  type.jsName == null ||
                  type.jsName == type.name,
            ) &&
            type.proxy == null &&
            type.asyncIterableFactory == null &&
            type.staticSetters.isEmpty &&
            type.methods.every((method) => method.instance);
        if (staticObject) {
          staticMethods.writeln(
            'const ${valueName(type)} = {} as {${type.staticGetters.map((getter) => 'readonly ${getter.name}: ${tsType(getter.type)}').join(';')}};',
          );
        }
        for (final setter in type.staticSetters) {
          final exported =
              'set${setter.name[0].toUpperCase()}${setter.name.substring(1)}';
          final operation = type.staticFunctions.firstWhere(
            (function) => function.id == type.staticSetterId(setter),
          );
          emitTsCallable(
            staticMethods,
            FlaxCodegenMethodModel(
              exported,
              operation.call.parameters,
              operation.call.result,
            ),
            id: operation.id,
            namespace: valueName(type),
            functionTransport: true,
          );
        }
        final reads = <String, List<String>>{};
        for (final getter in type.staticGetters) {
          if (!staticObject) {
            staticMethods.writeln(
              'export namespace ${valueName(type)} { export declare const ${getter.name}: ${tsType(getter.type)}; }',
            );
          }
          final id = type.staticGetterId(getter);
          if (id.endsWith(getter.name)) {
            final prefix = id.substring(0, id.length - getter.name.length);
            reads.putIfAbsent(prefix, () => []).add(getter.name);
          } else {
            staticMethods.writeln(
              'Object.defineProperty(${valueName(type)}, ${jsonEncode(getter.name)}, { get: () => invokeTopLevel(${jsonEncode(id)}, []) });',
            );
          }
        }
        for (final entry in reads.entries) {
          staticMethods.writeln(
            '_flaxDefineStaticGetters(${valueName(type)}, ${jsonEncode(entry.key)}, ${jsonEncode(entry.value)});',
          );
        }
      }
      for (final method in type.methods.where((m) => !m.instance)) {
        emitTsCallable(
          staticMethods,
          method,
          id: type.staticMethodId(method),
          deferredOwner: method.deferredFactory ? type.id : null,
          namespace: valueName(type),
          category: type.category,
          functionTransport: !method.deferredFactory,
        );
      }
      if (type.kind == 'widgetInterface') {
        out.writeln(
          '${exportPrefix}type ${type.name} = $widgetType & { readonly __${type.name}: unique symbol; }${type.superTypes.map((t) => ' & ${tsType(t, nominal: true)}').join('')};',
        );
        continue;
      }
      final nativeWidget = _hasWidgetObjectView(type) && type.proxy == null;
      if (nativeWidget) {
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters)} extends ${_objectSuperTypes(type, (parent) => tsType(parent, nominal: true), shareOmittedKeys: shareOmittedKeys).join(', ')} { readonly __${type.name}: unique symbol;',
        );
        out.writeln(
          'readonly [_flaxDartTypeValue]: ${type.name}${genericUse(type)};',
        );
        out.writeln(methodCases(type));
        for (final getter in type.getters) {
          out.writeln(
            type.setters.any((s) => s.name == getter.name)
                ? 'get ${getter.name}(): ${tsType(getter.type)};'
                : 'readonly ${getter.name}: ${tsType(getter.type)};',
          );
        }
        for (final method in type.methods.where((method) => method.instance)) {
          out.writeln('${instanceMethodSignature(type, method)};');
        }
        for (final setter in type.setters) {
          out.writeln(
            'set ${setter.name}(value: ${tsType(setter.type, input: true)});',
          );
        }
        out.writeln('}');
      } else if (type.kind == 'widget' && type.constructors.isEmpty) {
        out.writeln(
          '${exportPrefix}type ${type.name}${generics(type.typeParameters)} = $widgetType & { readonly __${type.name}: unique symbol; }${type.widgetInterfaces.map((t) => ' & ${tsType(t)}').join()};',
        );
        continue;
      }
      if ({'context', 'state', 'object', 'stream'}.contains(type.kind)) {
        final extendsProxy = type.proxy?.kind == 'extends';
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters)}${type.kind == 'context'
              ? ' extends ComponentContext'
              : {'object', 'state'}.contains(type.kind) && (type.superTypes.isNotEmpty || _isWidgetObject(type))
              ? ' extends ${_objectSuperTypes(type, (parent) => tsType(parent, nominal: true), shareOmittedKeys: shareOmittedKeys).join(', ')}'
              : type.kind == 'stream'
              ? ' extends AsyncIterable<${type.typeParameters.single.name}>'
              : ''} { ${type.constructors.isEmpty || type.kind == 'object' || type.kind == 'stream' ? 'readonly __${type.name}: unique symbol;' : ''}',
        );
        out.writeln(
          'readonly [_flaxDartTypeValue]: ${type.name}${genericUse(type)};',
        );
        out.writeln(methodCases(type));
        if (!extendsProxy) {
          for (final getter in type.getters) {
            out.writeln(
              type.setters.any((s) => s.name == getter.name)
                  ? 'get ${getter.name}(): ${tsType(getter.type)};'
                  : 'readonly ${getter.name}: ${tsType(getter.type)};',
            );
          }
          for (final method in type.methods.where((m) => m.instance)) {
            out.writeln('${instanceMethodSignature(type, method)};');
          }
          for (final setter in type.setters) {
            out.writeln(
              'set ${setter.name}(value: ${tsType(setter.type, input: true)});',
            );
          }
        }
        out.writeln('}');
      }
      final memberParent = _memberParent(type);
      final ownMethods = type.methods.where(
        (m) =>
            m.instance &&
            (memberParent == null ||
                m.typeParameters.isNotEmpty ||
                !memberParent.methods.any(
                  (base) =>
                      base.instance &&
                      base.name == m.name &&
                      jsonEncode(FlaxCodegenManifestCodec.encodeMethod(base)) ==
                          jsonEncode(FlaxCodegenManifestCodec.encodeMethod(m)),
                )),
      );
      String sharedMethods() =>
          '_flaxBindingMethods(${jsonEncode(type.id)}, ${jsonEncode(type.kind == 'widget' ? 'object' : type.kind)}, ${memberMetadata(ownMethods)}, ${_genericMethodMetadata(type)})';
      if (type.kind == 'context') {
        out.writeln(
          'defineContext(${jsonEncode(type.id)}, ${jsonEncode(type.getters.map((g) => g.name).toList())}, ${sharedMethods()});',
        );
      }
      if (type.kind == 'object' || _hasWidgetObjectView(type)) {
        final listeners = _sortedStringMap(type.listenerPairs).values.toList();
        final collection = _classCollection(type);
        out.writeln(
          'defineObject(${jsonEncode(type.id)}, ${jsonEncode(type.getters.map((g) => g.name).toList())}, ${jsonEncode(type.setters.map((g) => g.name).toList())}, ${sharedMethods()}, ${jsonEncode(listeners)}${collection == null && memberParent == null ? '' : ', ${collection == null ? 'undefined' : jsonEncode(collection.kind)}'}${memberParent == null ? '' : ', ${jsonEncode(memberParent.id)}'}${memberParent == null || collection == null ? '' : ', ${jsonEncode(type.methods.where((m) => m.instance).map((m) => m.name).toList())}'});',
        );
      }
      if (type.kind == 'stream') {
        out.writeln(
          'defineStream(${jsonEncode(type.id)}, ${jsonEncode(type.getters.map((g) => g.name).toList())}, ${sharedMethods()});',
        );
        if (type.asyncIterableFactory case final factory?) {
          final parameter = type.typeParameters.single;
          out.writeln('export namespace ${valueName(type)} {');
          out.writeln(
            'export function $factory${generics([parameter], defaults: false)}(source: AsyncIterable<${parameter.name}>): ${type.name}<${parameter.name}> {',
          );
          out.writeln(
            'return constructAsyncIterableStream(${jsonEncode(type.id)}, source) as ${type.name}<${parameter.name}>;',
          );
          out.writeln('} }');
        }
      }
      if (type.kind == 'state') {
        out.writeln(
          'defineState(${jsonEncode(type.id)}, ${jsonEncode(type.getters.map((g) => g.name).toList())}, ${sharedMethods()});',
        );
      }
      if (type.constructors.isEmpty && type.proxy == null) {
        if (type.kind == 'widget' && !nativeWidget) {
          out.writeln(
            '${exportPrefix}type ${type.name}${generics(type.typeParameters)} = $widgetType & { readonly __${type.name}: unique symbol; };',
          );
        }
        continue;
      }
      final bases = type.superTypes
          .map((parent) => "Omit<${tsType(parent, nominal: true)}, 'type'>")
          .toSet();
      if (type.kind == 'widget' && type.proxy != null) {
        out.writeln(
          '${exportPrefix}type ${type.name}${generics(type.typeParameters)} = ${_nativeWidgetFactory(type) ? '' : '${type.name}Description${genericUse(type)} | '}_${type.name}Native${genericUse(type)};',
        );
        if (!_nativeWidgetFactory(type)) {
          out.writeln(
            '${exportPrefix}type ${type.name}Description${generics(type.typeParameters)} = WidgetDescription & { readonly type: ${jsonEncode(type.id)}; };',
          );
        }
        emitProxy(out, type, type.proxy!);
      } else if (type.widgetInterfaces.isNotEmpty && !nativeWidget) {
        out.writeln(
          '${exportPrefix}type ${type.name} = WidgetDescription & { readonly type: ${jsonEncode(type.id)}; } & ${type.widgetInterfaces.map((t) => tsType(t)).join(' & ')};',
        );
      } else if (type.kind != 'object' &&
          type.kind != 'stream' &&
          !nativeWidget) {
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters)} extends ${type.kind == 'widget' ? 'WidgetDescription' : 'DartValue'}${bases.isEmpty ? '' : ', ${bases.join(', ')}'} { readonly type: ${jsonEncode(type.id)};${type.kind == 'widget' ? '' : ' readonly __${type.name}: unique symbol;'} ${type.getters.map((g) => 'readonly ${g.name}: ${tsType(g.type)};').join(' ')} }',
        );
      }
      final delayedProxy =
          type.proxy?.kind == 'implements' &&
          type.proxy?.widgetInterface != true &&
          type.constructors.isNotEmpty;
      if (type.proxy case final proxy?
          when !delayedProxy && type.kind != 'widget') {
        emitProxy(out, type, proxy);
        continue;
      }
      for (final ctor in type.constructors) {
        final explicitTypeSelection =
            type.kind == 'object' || _hasWidgetObjectView(type);
        final fixed =
            type.typeParameters.isNotEmpty &&
            (explicitTypeSelection ||
                ctor.specializations.length <= 1 &&
                    (ctor.specializations.isNotEmpty ||
                        type.typeParameters.any(
                          (parameter) =>
                              parameter.defaultType != null &&
                              _typeId(parameter.defaultType!) !=
                                  _typeId(parameter.bound),
                        )));
        final specialization =
            !explicitTypeSelection && ctor.specializations.length == 1
            ? ctor.specializations.single
            : null;
        final overloads =
            !explicitTypeSelection &&
                ctor.specializations.length > 1 &&
                ctor.parameters.any(
                  (parameter) =>
                      parameter.type.kind == 'any' ||
                      (parameter.type.kind == 'iterable' &&
                          parameter.type.declaration?.kind == 'parameter') ||
                      (parameter.type.declaration?.kind != 'parameter' &&
                          _containsParameter(
                            parameter.type.declaration ?? parameter.type,
                            type.typeParameters.map((p) => p.name).toSet(),
                          )),
                )
            ? ctor.specializations
            : const <FlaxCodegenConstructorSpecializationModel>[];
        String resultArguments(
          FlaxCodegenConstructorSpecializationModel? target,
        ) {
          if (!fixed && target == null) return genericUse(type);
          final arguments = target == null
              ? null
              : _constructorTypeArguments(type, ctor, target);
          return '<${type.typeParameters.map((parameter) {
            if (target == null) {
              return parameter.defaultType == null ? 'never' : tsType(parameter.defaultType!);
            }
            final input = arguments![parameter.genericIdentity]!;
            return tsType(input, declarations: false);
          }).join(', ')}>';
        }

        final resultType = overloads.isEmpty
            ? '${type.name}${resultArguments(specialization)}'
            : overloads
                  .map((target) => '${type.name}${resultArguments(target)}')
                  .join(' | ');
        final functionName = ctor.name.isEmpty
            ? (type.jsName != null &&
                      type.jsName != type.name &&
                      !hasJsConstructor
                  ? '_${type.name}Construct'
                  : valueName(type))
            : ctor.name;
        if (ctor.name.isNotEmpty) {
          out.writeln('export namespace ${valueName(type)} {');
        }
        final named = ctor.parameters
            .where((param) => !param.positional)
            .toList();
        String paramType(
          FlaxCodegenParameterModel param,
          FlaxCodegenConstructorSpecializationModel? target, {
          bool generic = false,
        }) {
          final input = target == null && overloads.isNotEmpty
              ? overloads
                    .map(
                      (target) => tsType(
                        target.parameterTypes[ctor.parameters.indexOf(param)],
                        input: true,
                        declarations: false,
                      ),
                    )
                    .toSet()
                    .join(' | ')
              : tsType(
                  target?.parameterTypes[ctor.parameters.indexOf(param)] ??
                      param.type,
                  input: true,
                  declarations: generic || !fixed && target == null,
                );
          return type.kind == 'widget' &&
                  !nativeWidget &&
                  type.widgetInterfaces.isEmpty &&
                  param.name != 'key'
              ? 'Bindable<$input>'
              : input;
        }

        List<String> arguments(
          FlaxCodegenConstructorSpecializationModel? target, {
          bool declaration = false,
          bool generic = false,
          bool implementation = false,
        }) {
          final args = ctor.parameters
              .where((param) => param.positional)
              .map(
                (param) =>
                    '${_parameterLocalName(param)}${param.required ? '' : '?'}: ${implementation ? 'unknown' : paramType(param, target, generic: generic)}',
              )
              .toList();
          if (named.isNotEmpty) {
            final optional = named.every((param) => !param.required);
            args.add(
              implementation
                  ? 'options: Record<string, unknown>${optional ? ' = {}' : ''}'
                  : 'options${declaration && optional ? '?' : ''}: { ${named.map((param) => namedParameter(param, paramType(param, target, generic: generic))).join('; ')} }${!declaration && optional ? ' = {}' : ''}',
            );
          }
          return args;
        }

        final genericCallSignature =
            explicitTypeSelection && type.typeParameters.isNotEmpty;
        // Export internal factory symbols so downstream declaration aliases can name them.
        if (genericCallSignature) {
          final previousConversions = genericConversions;
          genericConversions = parameterConversions(type.typeParameters);
          out.writeln(
            'export function $functionName${generics(type.typeParameters)}(${arguments(null, declaration: true, generic: true).join(', ')}): ${type.name}${genericUse(type)};',
          );
          genericConversions = previousConversions;
          out.writeln(
            'export function $functionName(${arguments(specialization, declaration: true).join(', ')}): $resultType;',
          );
        }
        for (final target in overloads) {
          out.writeln(
            'export function $functionName(${arguments(target, declaration: true).join(', ')}): ${type.name}${resultArguments(target)};',
          );
        }
        final args = arguments(
          specialization,
          implementation: genericCallSignature,
        );
        out.writeln(
          'export function $functionName${fixed || overloads.isNotEmpty ? '' : constructorGenerics(type, ctor)}(${args.join(', ')}): ${genericCallSignature ? 'unknown' : resultType} {',
        );
        out.writeln(
          "if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');",
        );
        out.writeln(
          "if (arguments.length > ${args.length}) throw new TypeError('Too many constructor arguments');",
        );
        _guardPositionalTs(out, ctor.parameters);
        final params = ctor.parameters.map((param) {
          final readonly =
              !nativeWidget &&
              type.kind != 'object' &&
              type.kind != 'stream' &&
              type.getters.any((g) => g.name == param.name);
          return {
            'name': param.name,
            if (type.widgetInterfaces.isNotEmpty) 'fixed': true,
            if (param.required) 'required': true,
            if (param.positional) 'positional': true,
            if (readonly) 'readonly': true,
            if (readonly)
              'defaultValue': param.defaultCode == 'null'
                  ? null
                  : throw StateError(
                      'Descriptor field defaults currently require null or required fields: ${type.name}.${param.name}',
                    ),
          };
        }).toList();
        final positional = ctor.parameters
            .where((param) => param.positional)
            .map(_parameterLocalName)
            .join(', ');
        final layout = jsonEncode(params);
        // Keep factory-only layouts lazy; proxy/member layouts already exist.
        final parameters = memberLayouts[layout] ?? layout;
        final constructionKind = _nativeWidgetFactory(type)
            ? 'object'
            : type.kind;
        final construct = switch (constructionKind) {
          'object' => 'constructObject',
          'stream' => 'constructStream',
          _ => 'construct',
        };
        out.writeln(
          'return $construct(${jsonEncode(constructionKind)}, ${jsonEncode(type.id)}, ${jsonEncode(ctor.name)}, $parameters, [$positional], ${named.isEmpty ? '{}' : 'options'}) as $resultType;',
        );
        out.writeln('}');
        if (ctor.name.isNotEmpty) out.writeln('}');
      }
      if (type.kind == 'widget' && type.proxy != null) {
        out.writeln(
          'const _${type.name}Binding = _flaxWidgetProxyFactory(_${type.name}Factory, _${type.name}Native) as typeof _${type.name}Factory & { new${generics(type.typeParameters)}(${proxyArguments(type)}): _${type.name}Native${genericUse(type)}; };',
        );
      }
      if (delayedProxy) emitProxy(out, type, type.proxy!);
    }
    emitTypedefs(out);
    out.write(staticMethods);
    out.write(instanceChecks);
    if (module.topLevel case final values?) {
      String readGetter(FlaxCodegenTopLevelGetterModel getter) {
        if (!getter.isReference) {
          return 'invokeTopLevel(${jsonEncode(getter.id)}, [])';
        }
        final provider = _owners[getter.id]!;
        final namespace = provider.topLevel!.jsName;
        return namespace.isNotEmpty
            ? '${dependencies[provider]}.$namespace.${getter.name}'
            : '${dependencies[provider]}.${getter.exportName}${getter.literal == null ? '()' : ''}';
      }

      String writeSetter(FlaxCodegenTopLevelSetterModel setter) {
        if (!setter.isReference) {
          final value = setter.type.kind == 'context'
              ? 'contextHandle(value, ${jsonEncode(setter.type.id)})'
              : 'value';
          return 'invokeTopLevel(${jsonEncode(setter.id)}, [$value])';
        }
        final provider = _owners[setter.id]!;
        final namespace = provider.topLevel!.jsName;
        return '${dependencies[provider]}.${namespace.isEmpty ? '' : '$namespace.'}${setter.exportName}(value)';
      }

      if (values.jsName.isEmpty) {
        for (final getter in values.getters) {
          final read = readGetter(getter);
          if (getter.literal case final literal?) {
            out.writeln(
              'export const ${getter.name}: ${tsType(getter.type)} = $literal;',
            );
          } else {
            out.writeln(
              'export function ${getter.exportName}(): ${tsType(getter.type)} '
              '{ return $read as ${tsType(getter.type)}; }',
            );
          }
        }
        for (final setter in values.setters) {
          if (setter.isReference) {
            out.writeln(
              'export function ${setter.exportName}(value: ${tsType(setter.type, input: true)}): void { if (arguments.length > 1) throw new TypeError("Too many method arguments"); ${writeSetter(setter)}; }',
            );
          } else {
            emitTsCallable(out, setter.asFunction().call, id: setter.id);
          }
        }
      } else {
        out.writeln('export const ${values.jsName} = {} as {');
        for (final getter in values.getters) {
          out.writeln('readonly ${getter.name}: ${tsType(getter.type)};');
        }
        for (final setter in values.setters) {
          out.writeln(
            '${setter.exportName}(value: ${tsType(setter.type, input: true)}): void;',
          );
        }
        out.writeln('};');
        for (final getter in values.getters) {
          final read = readGetter(getter);
          out.writeln(
            'Object.defineProperty(${values.jsName}, ${jsonEncode(getter.name)}, { enumerable: true, configurable: false, get: () => $read });',
          );
        }
        for (final setter in values.setters) {
          out.writeln(
            '${values.jsName}.${setter.exportName} = function(value: ${tsType(setter.type, input: true)}): void { if (arguments.length > 1) throw new TypeError("Too many method arguments"); ${writeSetter(setter)}; };',
          );
        }
      }
    }
    genericInputConversions = false;
    for (final function in module.functions) {
      emitTsCallable(out, function.call, id: function.id);
    }
    for (final extension in module.extensions) {
      final previousGenericConversions = genericConversions;
      genericConversions = parameterConversions(extension.typeParameters);
      final name = extension.name;
      final instanceMembers = extension.members.where((m) => !m.isStatic);
      final staticMembers = extension.members.where((m) => m.isStatic);
      final typeParameters = generics(extension.typeParameters);
      final typeArguments = extension.typeParameters.isEmpty
          ? ''
          : '<${extension.typeParameters.map((p) => p.name).join(', ')}>';
      out.writeln('export interface $name$typeParameters {');
      if (extension.typeParameters.isNotEmpty) {
        out.writeln(
          'readonly [_flaxDartExtensionTypes]?: readonly [${extension.typeParameters.map((p) => p.name).join(', ')}];',
        );
      }
      final selectedMembers = instanceMembers.where(
        (m) => m.call.typeParameters.isNotEmpty,
      );
      if (selectedMembers.isNotEmpty) {
        out.writeln(
          'readonly [_flaxDartMethodCases]?: {${selectedMembers.map((m) => '${m.exportName}: ${callSignature(FlaxCodegenMethodModel(m.call.name, m.call.parameters.skip(1).toList(), m.call.result, typeParameters: m.call.typeParameters))};').join()}};',
        );
      }
      for (final member in instanceMembers) {
        emitTsCallable(
          out,
          member.call,
          id: member.id,
          functionTransport: true,
          extensionView: extension,
          extensionMember: member,
          signatureOnly: true,
        );
      }
      out.writeln('}');
      final surface = StringBuffer(
        '{${extension.isExtensionType ? 'view: ' : ''}$typeParameters(receiver: ${tsType(extension.onType, input: true)})${extension.isExtensionType ? ' =>' : ':'} $name$typeArguments;\n',
      );
      for (final member in staticMembers) {
        if (member.call.typeParameters.isNotEmpty &&
            member.kind == 'staticMethod') {
          final call = member.call;
          surface.writeln(
            '${member.exportName}: _FlaxDartCallable<{${methodSignature(FlaxCodegenMethodModel('', call.parameters, call.result, typeParameters: call.typeParameters))};}, ${callSignature(call)}>;',
          );
          continue;
        }
        emitTsCallable(
          surface,
          member.call,
          id: member.id,
          functionTransport: true,
          extensionView: extension,
          extensionMember: member,
          signatureOnly: true,
        );
      }
      surface.write('}');
      if (extension.isReference) {
        final owner = dependencies[_owners[extension.members.first.id]]!;
        out.writeln('export const $name: $surface = $owner.$name;');
        genericConversions = previousGenericConversions;
        continue;
      }

      out.writeln('const _flaxExtension_${name}_prototype = {');
      for (final member in instanceMembers) {
        emitTsCallable(
          out,
          member.call,
          id: member.id,
          functionTransport: true,
          extensionView: extension,
          extensionMember: member,
          literal: true,
        );
      }
      out.writeln('};');
      out.writeln('const _flaxExtension_${name}_statics = {');
      for (final member in staticMembers) {
        emitTsCallable(
          out,
          member.call,
          id: member.id,
          functionTransport: true,
          extensionView: extension,
          extensionMember: member,
          literal: true,
        );
      }
      out.writeln('};');
      for (final member in staticMembers.where(
        (m) => m.kind == 'staticMethod' && m.call.typeParameters.isNotEmpty,
      )) {
        out.writeln(
          '_flaxDefineDartCallTypes(_flaxExtension_${name}_statics.${member.exportName}, ${_genericCallMetadata(member.call, member.id)});',
        );
      }
      out.writeln(
        'const _flaxExtension_${name}_create = {create$typeParameters(receiver: ${tsType(extension.onType, input: true)}): $name$typeArguments {',
      );
      out.writeln(
        "if (arguments.length !== 1 || receiver === undefined) throw new TypeError('Expected one extension receiver');",
      );
      out.writeln(
        'const view = Object.create(_flaxExtension_${name}_prototype);',
      );
      out.writeln(
        '_flaxBindDartExtension(view, ${jsonEncode(extension.members.first.id)}, receiver, ${jsonEncode({
          for (final m in instanceMembers.where((m) => m.call.typeParameters.isNotEmpty)) m.exportName: {'id': m.id, 'parameters': _memberParameters(m.call.parameters)},
        })});',
      );
      out.writeln('return view;');
      out.writeln(
        '}}.create; export const $name: $surface = Object.defineProperties(${extension.isExtensionType ? '{view: _flaxExtension_${name}_create}' : '_flaxExtension_${name}_create'}, Object.getOwnPropertyDescriptors(_flaxExtension_${name}_statics)) as typeof $name;',
      );
      genericConversions = previousGenericConversions;
    }
    final dependencyImports = StringBuffer();
    for (final entry in dependencies.entries) {
      final valueImport = valueDependencies.contains(entry.key);
      dependencyImports.writeln(
        "import ${valueImport ? '' : 'type '}* as ${entry.value} from '${entry.key.jsPackage}';",
      );
      if (!valueImport &&
          (module.classes.any(
                (type) => _owners[_memberParent(type)?.id] == entry.key,
              ) ||
              _typescriptSignatureTypes(module).any(
                (t) =>
                    entry.key.classes.any(
                      (c) =>
                          c.id == t.id &&
                          (c.kind == 'context' ||
                              c.kind == 'state' ||
                              c.kind == 'object' ||
                              c.kind == 'enum'),
                    ) ||
                    entry.key.types.any(
                      (named) => named.id == t.id && named.isEnum,
                    ),
              ))) {
        // Reference factories must exist even for type-only dependency imports.
        dependencyImports.writeln("import '${entry.key.jsPackage}';");
      }
    }
    for (final entry in omittedKeys.entries) {
      out.writeln('type ${entry.value} = ${entry.key};');
    }
    final layouts = memberLayouts.entries
        .map((entry) => 'const ${entry.value} = ${entry.key} as const;\n')
        .join();
    out.write(vmSignatures);
    return out.toString().replaceFirst(
      '$_typescriptHostImport\n',
      '${widgetType == 'Widget' ? _typescriptHostImport : _typescriptHostImport.replaceFirst('type Widget,', 'type Widget as _FlaxWidget,')}\n${conversionImports.isEmpty ? '' : "import type { ${conversionImports.map((name) => '$name as _Flax$name').join(', ')} } from '@flax/core/bindings';\n"}$dependencyImports$layouts',
    );
  }

  void _writeTypescriptModuleInstall(
    StringBuffer out,
    FlaxCodegenModuleModel module,
  ) {
    final capabilities = _sortedUniqueCapabilities(module.requiredCapabilities);
    final capabilityLiteral = capabilities.isEmpty
        ? 'Object.freeze([]) as readonly string[]'
        : 'Object.freeze(${jsonEncode(capabilities)}) as readonly string[]';
    out.writeln(
      'export const ${module.name}BindingModule = _flaxInstallBindingModule(${jsonEncode(_literalModuleId(module))}, $_generatedUiProtocol, $capabilityLiteral);',
    );
    out.writeln(
      'const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineDartTypes: _flaxDefineDartTypes, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = ${module.name}BindingModule;',
    );
  }
}
