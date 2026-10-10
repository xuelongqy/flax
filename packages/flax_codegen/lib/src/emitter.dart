import 'dart:convert';

import 'package:path/path.dart' as p;

import 'identity.dart';
import 'model.dart';

part 'library_emitter.dart';

/// Generated modules pin UI protocol 24. Do not read Core `flaxBindingVersion`.
const _generatedUiProtocol = 24;

// Bound direct dispatch to 32 branches; larger signatures keep Dart defaults
// through a typed tear-off without duplicating private constants.
const _applyOmissionThreshold = 6;

String _quote(String value) => jsonEncode(value).replaceAll(r'$', r'\$');

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
    "import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';";

const _typescriptInstallHelper = r'''
function _flaxInstallBindingModule(
  moduleId: string,
  uiProtocol: number,
  requiredCapabilities: readonly string[],
) {
  if (typeof moduleId !== 'string' || moduleId.length === 0 || moduleId.indexOf('/') < 1 || moduleId.indexOf('/') !== moduleId.lastIndexOf('/') || moduleId.startsWith('/') || moduleId.endsWith('/')) {
    throw new TypeError('Invalid binding moduleId');
  }
  if (uiProtocol !== bindingVersion) {
    throw new TypeError(`Incompatible binding uiProtocol: ${uiProtocol}`);
  }
  let previous: string | undefined;
  for (const capability of requiredCapabilities) {
    if (typeof capability !== 'string' || (previous !== undefined && capability <= previous)) {
      throw new TypeError('requiredCapabilities must be sorted unique strings');
    }
    previous = capability;
    if (capability !== 'instance-checks' && capability !== 'native-widget-proxies') {
      throw new TypeError(`Unsupported binding capability ${capability}`);
    }
  }
  return Object.freeze({
    moduleId,
    uiProtocol,
    requiredCapabilities: Object.freeze([...requiredCapabilities]),
    construct: _flaxHostConstruct,
    constructProxy: _flaxHostConstructProxy,
    constructObject: _flaxHostConstructObject,
    constructDeferredObject: _flaxHostConstructDeferredObject,
    constructStream: _flaxHostConstructStream,
    constructAsyncIterableStream: _flaxHostConstructAsyncIterableStream,
    bindInstanceType: _flaxHostBindInstanceType,
    defineObject: _flaxHostDefineObject,
    defineStream: _flaxHostDefineStream,
    invokeObject: _flaxHostInvokeObject,
    invokeObjectStatic: _flaxHostInvokeObjectStatic,
    invokeStream: _flaxHostInvokeStream,
    enumValue: _flaxHostEnumValue,
    defineEnum: _flaxHostDefineEnum,
    invokeEnum: _flaxHostInvokeEnum,
    defineContext: _flaxHostDefineContext,
    defineState: _flaxHostDefineState,
    contextHandle: _flaxHostContextHandle,
    invokeStatic: _flaxHostInvokeStatic,
    invokeInstance: _flaxHostInvokeInstance,
    invokeTopLevel: _flaxHostInvokeTopLevel,
  });
}
''';

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
        if (_owners.containsKey(type.id)) {
          throw StateError('Duplicate class binding: ${type.id}');
        }
        _owners[type.id] = module;
        _classes[type.id] = type;
      }
    }
    for (final module in modules) {
      for (final type in module.types) {
        _owners.putIfAbsent(type.id, () => module);
        _types[type.id] = type;
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
  late final Set<String> _intrinsicStreamTypeIds;
  final _callbacks = <FlaxCodegenTypeRef, String>{};
  final _collections = <String, (FlaxCodegenTypeRef, String)>{};
  final _futures = <String, (FlaxCodegenTypeRef, String)>{};
  final _streams = <String, (FlaxCodegenTypeRef, String)>{};
  final _records = <String, (FlaxCodegenTypeRef, String)>{};
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

  /// Every TypeRef the TypeScript emitter can read, including nested
  /// declarations and generics. Leaves [_nestedTypes] semantics unchanged.
  Iterable<FlaxCodegenTypeRef> _typescriptReachableType(
    FlaxCodegenTypeRef type,
  ) sync* {
    yield type;
    if (type.item case final item?) yield* _typescriptReachableType(item);
    if (type.key case final key?) yield* _typescriptReachableType(key);
    if (type.result case final result?) {
      yield* _typescriptReachableType(result);
    }
    for (final argument in type.dartArguments) {
      yield* _typescriptReachableType(argument);
    }
    for (final argument in type.tsArguments) {
      yield* _typescriptReachableType(argument);
    }
    for (final parameter in type.parameters) {
      yield* _typescriptReachableType(parameter.type);
    }
    for (final field in type.recordFields) {
      yield* _typescriptReachableType(field.type);
    }
    if (type.declaration case final declared?) {
      yield* _typescriptReachableType(declared);
    }
    for (final parameter in type.typeParameters) {
      yield* _typescriptReachableType(parameter.bound);
      if (parameter.defaultType case final defaults?) {
        yield* _typescriptReachableType(defaults);
      }
    }
  }

  /// TypeScript signature reachability for upstream import discovery only.
  Iterable<FlaxCodegenTypeRef> _typescriptSignatureTypes(
    FlaxCodegenModuleModel module,
  ) sync* {
    for (final getter
        in module.topLevel?.getters ?? <FlaxCodegenTopLevelGetterModel>[]) {
      yield* _typescriptReachableType(getter.type);
    }
    for (final setter
        in module.topLevel?.setters ?? <FlaxCodegenTopLevelSetterModel>[]) {
      yield* _typescriptReachableType(setter.type);
    }
    for (final alias in module.typedefs) {
      yield* _typescriptReachableType(alias.target);
      for (final parameter in alias.typeParameters) {
        yield* _typescriptReachableType(parameter.bound);
        if (parameter.defaultType case final defaults?) {
          yield* _typescriptReachableType(defaults);
        }
      }
    }
    for (final named in module.types) {
      for (final value in named.enumValueTypes.values) {
        yield* _typescriptReachableType(value);
      }
    }
    for (final type in module.classes) {
      for (final parameter in type.typeParameters) {
        yield* _typescriptReachableType(parameter.bound);
        if (parameter.defaultType case final defaults?) {
          yield* _typescriptReachableType(defaults);
        }
      }
      for (final parent in type.superTypes) {
        yield* _typescriptReachableType(parent);
      }
      for (final interface in type.widgetInterfaces) {
        yield* _typescriptReachableType(interface);
      }
      for (final constructor in type.constructors) {
        for (final parameter in constructor.parameters) {
          yield* _typescriptReachableType(parameter.type);
        }
      }
      for (final getter in [
        ...type.getters,
        ...type.setters,
        ...type.staticGetters,
        ...type.staticSetters,
      ]) {
        yield* _typescriptReachableType(getter.type);
      }
      for (final method in type.methods) {
        yield* _typescriptReachableType(method.result);
        for (final parameter in method.parameters) {
          yield* _typescriptReachableType(parameter.type);
        }
        for (final parameter in method.typeParameters) {
          yield* _typescriptReachableType(parameter.bound);
          if (parameter.defaultType case final defaults?) {
            yield* _typescriptReachableType(defaults);
          }
        }
      }
      if (type.proxy case final proxy?) {
        for (final method in proxy.methods) {
          yield* _typescriptReachableType(method.result);
          for (final parameter in method.parameters) {
            yield* _typescriptReachableType(parameter.type);
          }
          for (final parameter in method.typeParameters) {
            yield* _typescriptReachableType(parameter.bound);
            if (parameter.defaultType case final defaults?) {
              yield* _typescriptReachableType(defaults);
            }
          }
        }
        for (final getter in proxy.getters) {
          yield* _typescriptReachableType(getter.type);
        }
        for (final setter in proxy.setters) {
          yield* _typescriptReachableType(setter.type);
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
        yield* _typescriptReachableType(getter.type);
      }
      for (final method in variant.methods) {
        yield* _typescriptReachableType(method.result);
        for (final parameter in method.parameters) {
          yield* _typescriptReachableType(parameter.type);
        }
      }
    }
    for (final named in module.types) {
      for (final parameter in named.typeParameters) {
        yield* _typescriptReachableType(parameter.bound);
        if (parameter.defaultType case final defaults?) {
          yield* _typescriptReachableType(defaults);
        }
      }
    }
    for (final function in module.ownedFunctions) {
      yield* _typescriptReachableType(function.call.result);
      for (final parameter in function.call.parameters) {
        yield* _typescriptReachableType(parameter.type);
      }
      for (final parameter in function.call.typeParameters) {
        yield* _typescriptReachableType(parameter.bound);
        if (parameter.defaultType case final defaults?) {
          yield* _typescriptReachableType(defaults);
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

  late FlaxCodegenModuleModel _dartModule;
  final _dartImports = <String, String>{};
  String _dartName(String name) =>
      '${_dartImports[_dartModule.typeLibraries[name] ?? _dartModule.library]}.$name';

  String _dartType(FlaxCodegenTypeRef type, {String scalar = 'Object'}) {
    final base = switch (type.category) {
      FlaxCodegenTypeCategory.parameter => type.name!,
      FlaxCodegenTypeCategory.typeOnly => throw StateError(
        'Type-only reference cannot cross the Dart bridge: ${type.name}',
      ),
      FlaxCodegenTypeCategory.widget => _dartName(type.name ?? 'Widget'),
      FlaxCodegenTypeCategory.callback =>
        '${_dartDeclaredType(type.result!, generic: type.typeParameters.isNotEmpty)} Function${_dartGenerics(type.typeParameters)}(${_dartFunctionParameters(type.parameters, generic: type.typeParameters.isNotEmpty)})',
      FlaxCodegenTypeCategory.iterable => 'Iterable<${_dartType(type.item!)}>',
      FlaxCodegenTypeCategory.list => 'List<${_dartType(type.item!)}>',
      FlaxCodegenTypeCategory.map =>
        'Map<${_dartType(type.key!)}, ${_dartType(type.item!)}>',
      FlaxCodegenTypeCategory.set => 'Set<${_dartType(type.item!)}>',
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
      FlaxCodegenTypeCategory.route ||
      FlaxCodegenTypeCategory.object ||
      FlaxCodegenTypeCategory.page =>
        '${_dartName(type.name!)}${_referenceTypeArgs(type)}',
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
    return '${_dartName(type.name!)}$arguments${type.nullable ? '?' : ''}';
  }

  String _dartStaticType(FlaxCodegenTypeRef type, {String scalar = 'Object'}) {
    if (_extensionTypeDeclaration(type) case final declaration?) {
      return _dartTypeOnlyDeclaration(declaration);
    }
    if (type.declaration case final declaration?) {
      return _dartStaticType(declaration, scalar: scalar);
    }
    final base = switch (type.category) {
      FlaxCodegenTypeCategory.parameter => type.name!,
      FlaxCodegenTypeCategory.typeOnly => _dartTypeOnlyDeclaration(type),
      FlaxCodegenTypeCategory.widget => _dartName(type.name ?? 'Widget'),
      FlaxCodegenTypeCategory.callback =>
        '${_dartStaticType(type.result!)} Function${_dartStaticGenerics(type.typeParameters)}(${_dartStaticFunctionParameters(type.parameters)})',
      FlaxCodegenTypeCategory.iterable =>
        'Iterable<${_dartStaticType(type.item!)}>',
      FlaxCodegenTypeCategory.list => 'List<${_dartStaticType(type.item!)}>',
      FlaxCodegenTypeCategory.map =>
        'Map<${_dartStaticType(type.key!)}, ${_dartStaticType(type.item!)}>',
      FlaxCodegenTypeCategory.set => 'Set<${_dartStaticType(type.item!)}>',
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
      FlaxCodegenTypeCategory.route ||
      FlaxCodegenTypeCategory.object ||
      FlaxCodegenTypeCategory.page =>
        '${_dartName(type.name!)}${_referenceTypeArgs(type)}',
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

  String _dartDeclaredType(FlaxCodegenTypeRef type, {bool generic = false}) =>
      generic || _containsExtensionTypeRepresentation(type)
      ? _dartStaticType(type)
      : _dartType(type);

  String _dartGenerics(List<FlaxCodegenGenericParameter> parameters) =>
      parameters.isEmpty
      ? ''
      : '<${parameters.map((p) => '${p.name} extends ${_dartType(p.bound)}').join(', ')}>';

  String _dartFunctionParameters(
    List<FlaxCodegenParameterModel> parameters, {
    bool generic = false,
  }) {
    final required = parameters
        .where((p) => p.positional && p.required)
        .map((p) => '${_dartDeclaredType(p.type, generic: generic)} ${p.name}')
        .toList();
    final optional = parameters
        .where((p) => p.positional && !p.required)
        .map((p) => '${_dartDeclaredType(p.type, generic: generic)} ${p.name}')
        .toList();
    final named = parameters
        .where((p) => !p.positional)
        .map(
          (p) =>
              '${p.required ? 'required ' : ''}${_dartDeclaredType(p.type, generic: generic)} ${p.name}',
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
    };
    return source.replaceAllMapped(RegExp(r'[A-Za-z_$][A-Za-z0-9_$]*'), (
      match,
    ) {
      final name = match.group(0)!;
      return unqualified.contains(name) ? name : _dartName(name);
    });
  }

  String _referenceTypeArgs(FlaxCodegenTypeRef type) =>
      type.dartArguments.isNotEmpty
      ? '<${type.dartArguments.map(_dartType).join(', ')}>'
      : type.tsArguments.isNotEmpty
      ? '<${type.tsArguments.map(_dartType).join(', ')}>'
      : _typeArgs(type.typeArguments);

  String _cast(
    String value,
    FlaxCodegenTypeRef type, {
    String scalar = 'Object',
  }) {
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
      if (value == null || {'any', 'parameter'}.contains(value.kind)) {
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
          FlaxCodegenParameterModel(
            name: parameter.name,
            type: _specializeDeferred(
              parameter.type,
              inferred,
              source?.parameters[index].type,
            ),
            required: parameter.required,
            positional: parameter.positional,
            defaultCode: parameter.defaultCode,
            omitWhenAbsent: parameter.omitWhenAbsent,
            independentWidgetResult: parameter.independentWidgetResult,
            snapshot: parameter.snapshot,
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
          FlaxCodegenParameterModel(
            name: parameter.name,
            type: _specializeDeferred(parameter.type, inferred),
            required: parameter.required,
            positional: parameter.positional,
            defaultCode: parameter.defaultCode,
            omitWhenAbsent: parameter.omitWhenAbsent,
          ),
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

  bool _containsWidgetIterable(FlaxCodegenTypeRef type) =>
      (type.kind == 'iterable' && type.containsWidget) ||
      (type.item != null && _containsWidgetIterable(type.item!)) ||
      (type.key != null && _containsWidgetIterable(type.key!)) ||
      type.recordFields.any((field) => _containsWidgetIterable(field.type));

  String _ref(
    FlaxCodegenTypeRef type, {
    bool independentWidgetResult = false,
    bool withinCallback = false,
  }) {
    if (type.kind == 'typeOnly') {
      throw StateError(
        'Type-only reference cannot cross the Dart bridge: ${type.name}',
      );
    }
    final out = StringBuffer('FlaxTypeRef(${_quote(type.kind)}');
    if (type.id != null) out.write(', id: ${_quote(type.id!)}');
    if (type.nullable) out.write(', nullable: true');
    if (withinCallback && type.kind == 'iterable' && type.containsWidget) {
      out.write(', finiteWidgetIterable: true');
    }
    if (type.item != null) {
      out.write(', item: ${_ref(type.item!, withinCallback: withinCallback)}');
    }
    if (type.key != null) {
      out.write(', key: ${_ref(type.key!, withinCallback: withinCallback)}');
    }
    // Restricted views must not reuse getters from an ordinary lazy view.
    final viewId =
        '${_typeId(type, omitNullable: true)}'
        '${withinCallback && _containsWidgetIterable(type) ? ':finite-widget-iterable' : ''}';
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
      out.write(')');
      if (type.kind == 'list' || type.kind == 'set') {
        out.write(
          ', iterable: ${_ref(FlaxCodegenTypeRef('iterable', item: type.item!))}',
        );
      }
    }
    if ({'future', 'futureOr'}.contains(type.kind)) {
      final entry = _futures.putIfAbsent(
        _typeId(type.item!) +
            (withinCallback && _containsWidgetIterable(type.item!)
                ? ':finite-widget-iterable'
                : ''),
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
      final entry = _records.putIfAbsent(
        _typeId(type, omitNullable: true),
        () => (type, '_record${_records.length}'),
      );
      out.write(', record: FlaxRecordBinding([');
      for (final (index, field) in type.recordFields.indexed) {
        out.write(
          'FlaxRecordFieldBinding(${_quote(field.name)}, ${_ref(field.type, withinCallback: withinCallback)}, '
          '${entry.$2}Read$index),',
        );
      }
      out.write(
        '], ${entry.$2}Create, signature: ${_quote(_typeId(type, omitNullable: true))}, '
        'matches: ${entry.$2}Matches)',
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
    if (deferred.isNotEmpty) {
      out.write(', deferredFactories: {');
      for (final entry in deferred.entries) {
        out.write(
          '${_quote(entry.key)}: FlaxDeferredFactoryBinding('
          '${_quote(_typeId(type, omitNullable: true))}, [',
        );
        for (final parameter in entry.value.$1.parameters) {
          out.write(
            'FlaxParameter(${_quote(parameter.name)}, ${_ref(parameter.type)}, '
            'required: ${parameter.required}, defaultValue: ${_default(parameter)}, '
            'omitWhenAbsent: ${parameter.omitWhenAbsent}),',
          );
        }
        out.write('], ${entry.value.$2}),');
      }
      out.write('}');
    }
    out.write(')');
    return out.toString();
  }

  String _callbackBinding(
    FlaxCodegenTypeRef type, {
    bool independentWidgetResult = false,
  }) {
    final parameters = type.parameters
        .map(
          (p) =>
              'FlaxCallbackParameter(${_quote(p.name)}, ${_ref(p.type, withinCallback: true)}, required: ${p.required}, positional: ${p.positional}${p.encodeKind != null
                  ? ", encode: const FlaxTypeRef('${p.encodeKind}')"
                  : p.snapshot == null
                  ? ''
                  : ", encode: const FlaxTypeRef('data')"}${p.scoped ? ', scoped: true' : ''})',
        )
        .join(', ');
    final result = _ref(type.result!, withinCallback: true);
    final adapter = _callbacks.putIfAbsent(
      type,
      () => '_callback${_callbacks.length}',
    );
    return 'FlaxCallbackBinding([$parameters], $result, $adapter, id: ${_quote(_typeId(type, omitNullable: true))}, invoke: ${adapter}Invoke, matches: ${adapter}Matches${independentWidgetResult ? ', independentWidgetResult: true' : ''})';
  }

  String _proxyBinding(FlaxCodegenClassModel type) {
    final proxy = type.proxy;
    if (proxy == null) return '';
    final members = <String>[];
    for (final (name, callback) in proxy.callbacks) {
      final kind = name.startsWith('call:')
          ? 0
          : name.startsWith('get:')
          ? 1
          : 2;
      members.add(
        'FlaxProxyMember(${_quote(name.substring(name.indexOf(':') + 1))}, $kind, ${_callbackBinding(callback)}, hasSuper: ${proxy.hasSuperCallback(name)})',
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
        '<${type.typeParameters.map((p) => '${p.name}:${_typeId(p.bound)}=${_typeId(p.defaultType!)}').join(',')}>(${type.parameters.map((p) => '${p.positional ? 'p' : 'n'}:${p.required ? 'r' : 'o'}:${p.name}:${_typeId(p.type)}${p.encodeKind == null ? '' : ':e=${p.encodeKind}'}${p.scoped ? ':scoped' : ''}').join(',')})->${_typeId(type.result!)}',
      );
    }
    if (type.recordFields.isNotEmpty) {
      out.write(
        '{${type.recordFields.map((field) => '${field.positional ? 'p' : 'n'}:${field.name}:${_typeId(field.type)}').join(',')}}',
      );
    }
    return out.toString();
  }

  String _default(FlaxCodegenParameterModel parameter) {
    if (parameter.defaultCode == 'const []') {
      return 'const <${_dartDeclaredType(parameter.type.item!)}>[]';
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
        'required': p.required,
        'positional': p.positional,
        if (p.type.kind == 'context') 'context': p.type.id,
      },
  ];

  String _proxyMethodSignature(
    FlaxCodegenMethodModel method,
    String Function(
      FlaxCodegenTypeRef, {
      bool input,
      bool declarations,
      bool nominal,
    })
    tsType,
    String Function(List<FlaxCodegenGenericParameter>, {bool defaults})
    generics,
    String Function(FlaxCodegenParameterModel, String) namedParameter,
  ) {
    final args = [
      for (final p in method.parameters.where((p) => p.positional))
        '${p.name}${p.required ? '' : '?'}: ${tsType(p.type, input: true)}',
    ];
    final named = method.parameters.where((p) => !p.positional).toList();
    if (named.isNotEmpty) {
      args.add(
        'options${named.every((p) => !p.required) ? '?' : ''}: {${named.map((p) => namedParameter(p, tsType(p.type, input: true))).join('; ')}}',
      );
    }
    return '${method.name}${generics(method.typeParameters)}(${args.join(', ')}): ${tsType(method.result)}';
  }

  void _guardPositionalTs(
    StringBuffer out,
    List<FlaxCodegenParameterModel> parameters,
  ) {
    final positional = parameters.where((p) => p.positional).toList();
    for (final (index, parameter) in positional.indexed) {
      if (parameter.required || index + 1 == positional.length) continue;
      final later = positional
          .skip(index + 1)
          .map((p) => '${p.name} !== undefined')
          .join(' || ');
      out.writeln(
        "if (${parameter.name} === undefined && ($later)) throw new TypeError('Optional positional arguments must omit a trailing suffix');",
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
        .map((p) => '${_dartDeclaredType(p.type)} super.${p.name}');
    final optional = parameters
        .where((p) => p.positional && !p.required)
        .map((p) => '${_dartDeclaredType(p.type)} super.${p.name}')
        .join(', ');
    final named = parameters
        .where((p) => !p.positional)
        .map(
          (p) =>
              '${p.required ? 'required ' : ''}${_dartDeclaredType(p.type)} super.${p.name}',
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
    if (proxyImplementation) return '_${type.name}Proxy.new';
    final leased =
        type.category == FlaxCodegenClassCategory.route ||
        type.category == FlaxCodegenClassCategory.page;
    final owner = leased
        ? '_${type.name}'
        : '${_dartName(type.name)}${_typeArgs(specialization?.typeArguments ?? type.typeArguments)}';
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
      return '_${type.name}Proxy(${args.join(', ')})';
    }
    final leased =
        type.category == FlaxCodegenClassCategory.route ||
        type.category == FlaxCodegenClassCategory.page;
    var name = leased ? '_${type.name}' : _dartName(type.name);
    if (!leased) {
      name += _typeArgs(specialization?.typeArguments ?? type.typeArguments);
    }
    if (constructor.name.isNotEmpty) name += '.${constructor.name}';
    final arguments = <String>[if (leased) 'lease'];
    for (final (index, parameter) in constructor.parameters.indexed) {
      if (omitted.contains(parameter.name)) continue;
      final routeBuilder =
          type.category == FlaxCodegenClassCategory.route &&
          parameter.type.category == FlaxCodegenTypeCategory.callback &&
          parameter.type.result!.category == FlaxCodegenTypeCategory.widget;
      final value = routeBuilder
          ? 'lease.builder<${_dartType(specialization?.parameterTypes[index] ?? parameter.type)}>(${_quote(parameter.name)})'
          : _cast(
              'values[${_quote(parameter.name)}]',
              specialization?.parameterTypes[index] ?? parameter.type,
            );
      arguments.add(parameter.positional ? value : '${parameter.name}: $value');
    }
    return '$name(${arguments.join(', ')})';
  }

  void _emitConstructorCalls(
    StringBuffer out,
    FlaxCodegenClassModel type,
    FlaxCodegenConstructorModel ctor, {
    bool proxyImplementation = false,
  }) {
    final optional = ctor.parameters.where((p) => p.omitWhenAbsent).toList();
    _guardPositionalOmission(out, ctor.parameters);
    void emit(
      int index,
      Set<String> omitted,
      FlaxCodegenConstructorSpecializationModel? specialization,
    ) {
      if (optional.length >= _applyOmissionThreshold) {
        final leased =
            type.category == FlaxCodegenClassCategory.route ||
            type.category == FlaxCodegenClassCategory.page;
        final prefix = <String>[
          if (proxyImplementation) "values['@peer'] as FlaxProxyPeer",
          if (leased) 'lease',
        ];
        final call = _applyCall(
          _constructorTarget(
            type,
            ctor,
            specialization: specialization,
            proxyImplementation: proxyImplementation,
          ),
          ctor.parameters,
          (p) =>
              type.category == FlaxCodegenClassCategory.route &&
                  p.type.category == FlaxCodegenTypeCategory.callback &&
                  p.type.result!.category == FlaxCodegenTypeCategory.widget
              ? 'lease.builder<${_dartType(specialization?.parameterTypes[ctor.parameters.indexOf(p)] ?? p.type)}>(${_quote(p.name)})'
              : _cast(
                  'values[${_quote(p.name)}]',
                  specialization?.parameterTypes[ctor.parameters.indexOf(p)] ??
                      p.type,
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
          _ => throw StateError('Unknown constructor runtime domain: $domain'),
        };
        final value = "values[${_quote(entry.key)}]";
        checks.add(
          nullable
              ? '($value == null || $value is $dartType)'
              : '$value is $dartType',
        );
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
    _callbacks.clear();
    _collections.clear();
    _futures.clear();
    _streams.clear();
    _records.clear();
    _deferred.clear();
    _dartModule = module;
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
    // Shared conversion casts can become redundant after Dart flow promotion.
    final out = StringBuffer(
      '''// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast
import 'dart:core';
import '${module.library}' as api;
import 'package:flax/bindings.dart';
''',
    );
    for (final entry in _dartImports.entries.where(
      (e) => e.key != module.library,
    )) {
      out.writeln("import '${entry.key}' as ${entry.value};");
    }
    final nativeImports = <String, String>{};
    for (final type in module.classes) {
      for (final member in type.widgetMembers) {
        nativeImports.addAll(member.imports);
      }
    }
    for (final entry in nativeImports.entries) {
      out.writeln("import '${entry.key}' as ${entry.value};");
    }
    // Adapter imports stay explicit in the binding selection.
    final imports = module.classes
        .where((c) => c.pageAdapter != null)
        .map((c) => "import '${c.pageAdapter!.library}' as adapter${c.name};")
        .join('\n');
    out.writeln(imports);
    out.writeln('// ignore: unused_element');
    out.writeln('const _flaxOmitted = Object();');
    out.writeln(
      "const ${module.name}Bindings = FlaxBindingModule('${module.name}', [",
    );
    for (final type in module.types.where(
      (type) => type.isEnum && _owners[type.id] == module,
    )) {
      out.writeln('FlaxEnumBinding(${_quote(type.id)}, {');
      for (final name in type.enumNames) {
        out.writeln('${_quote(name)}: ${_dartName(type.name)}.$name,');
      }
      final surface = module.classes
          .where((value) => value.id == type.id)
          .firstOrNull;
      out.writeln(
        '}, supertypes: ${jsonEncode(surface?.supertypes ?? const <String>[])}),',
      );
    }
    for (final type in module.classes) {
      if (type.kind == 'enum') continue;
      if (type.kind == 'widgetInterface') {
        out.writeln(
          'FlaxWidgetInterfaceBinding(${_quote(type.id)}, _is${type.name}),',
        );
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
          out.writeln(
            'FlaxGetter(${_quote(getter.name)}, ${_ref(getter.type)}, _${type.name}_${getter.name}${getter.encodeKind == null ? '' : ", encode: const FlaxTypeRef('${getter.encodeKind}')"}),',
          );
        }
        out.write(']');
        if (type.kind == 'state' ||
            type.kind == 'object' ||
            type.kind == 'stream') {
          out.write(', ${_methods(type, instance: true)}');
        }
        if (type.kind == 'stream') {
          out.write(
            ', constructors: ${_constructors(type)}, create: _create${type.name}, '
            'matches: _is${type.name}, methods: ${_methods(type)}, '
            'view: ${_ref(FlaxCodegenTypeRef('stream', id: type.id, name: type.name, item: type.typeParameters.single.defaultType!))}',
          );
        }
        if (type.kind == 'object') {
          out.write(
            ', constructors: ${_constructors(type)}, create: _create${type.name}, disposeMethod: ${type.disposeMethod == null ? 'null' : _quote(type.disposeMethod!)}, listenerPairs: ${jsonEncode(_sortedStringMap(type.listenerPairs))}, supertypes: ${jsonEncode(type.supertypes)}, setters: [',
          );
          for (final setter in type.setters) {
            out.write(
              'FlaxSetter(${_quote(setter.name)}, ${_ref(setter.type)}, _${type.name}_set_${setter.name}),',
            );
          }
          out.write(
            '], matches: _is${type.name}, methods: ${_methods(type)}${_proxyBinding(type)}',
          );
        }
        out.writeln('),');
        continue;
      }
      if (type.kind == 'route' || type.kind == 'page') {
        out.writeln(
          '${type.kind == 'route' ? 'FlaxRouteBinding' : 'FlaxPageBinding'}(${_quote(type.id)}, ${_constructors(type)}, _create${type.name}, [${type.supertypes.map(_quote).join(', ')}]),',
        );
        continue;
      }
      if (type.kind == 'members') {
        out.writeln(
          'FlaxMemberBinding(${_quote(type.id)}, ${_methods(type)}),',
        );
        continue;
      }
      out.writeln('FlaxWidgetBinding(${_quote(type.id)}, {');
      for (final ctor in type.constructors) {
        out.writeln('${_quote(ctor.name)}: [');
        for (final parameter in ctor.parameters) {
          out.writeln(
            'FlaxParameter(${_quote(parameter.name)}, ${_ref(parameter.type, independentWidgetResult: parameter.independentWidgetResult)}, required: ${parameter.required}, defaultValue: ${_default(parameter)}, omitWhenAbsent: ${parameter.omitWhenAbsent}),',
          );
        }
        out.writeln('],');
      }
      out.writeln(
        '}, _${type.name}Host.new, matches: _is${type.name}, fixedArguments: ${type.widgetInterfaces.isNotEmpty}, methods: ${_methods(type)}, ${type.proxy == null ? '' : 'objectView: FlaxObjectBinding(${_quote(type.id)}, [${type.getters.map((g) => 'FlaxGetter(${_quote(g.name)}, ${_ref(g.type)}, _${type.name}_${g.name}),').join()}], ${_methods(type, instance: true)}, constructors: ${_constructors(type)}, create: _create${type.name}, matches: _is${type.name}, supertypes: ${jsonEncode(type.supertypes)}${_proxyBinding(type)}),'}),',
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
      for (final type in module.classes)
        for (final function in module.enumFunctions(type))
          function.id: function.call.name,
      for (final type in module.classes)
        for (final getter in type.staticGetters)
          type.staticGetterId(getter):
              '_${type.name}_static_get_${getter.name}',
      for (final type in module.classes)
        for (final setter in type.staticSetters)
          type.staticSetterId(setter):
              '_${type.name}_static_set_${setter.name}',
      for (final extension in module.extensions)
        for (final member in extension.members)
          member.id: '_extension_${extension.name}_${member.call.name}',
      for (final setter in setters) setter.id: '_write_${setter.name}',
    };
    // Setters reuse function conversion, but their Dart target is an assignment.
    for (final function in module.ownedFunctions) {
      final call = function.call;
      out.writeln('FlaxFunctionBinding(${_quote(function.id)}, [');
      for (final p in call.parameters) {
        out.writeln(
          'FlaxParameter(${_quote(p.name)}, ${_ref(p.type)}, required: ${p.required}, defaultValue: ${_default(p)}, omitWhenAbsent: ${p.omitWhenAbsent}),',
        );
      }
      out.write(
        '], ${_ref(call.result)}, ${functionNames[function.id] ?? '_function_${call.name}'}',
      );
      if (function.route case final route?) {
        out.write(
          ', route: FlaxRouteCallBinding(${_quote(route.context)}, ${_quote(route.rootNavigator)}, ${jsonEncode(route.builders)})',
        );
      }
      out.writeln('),');
    }
    out.writeln(
      '], moduleId: ${_quote(_literalModuleId(module))}, '
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
      ', records: _recordTypes);',
    );
    _writeStateVariantsDart(out, module);
    for (final extension in module.extensions.where((e) => !e.isReference)) {
      for (final member in extension.members) {
        final call = member.call;
        out.writeln(
          'Object? _extension_${extension.name}_${call.name}(Map<String, Object?> values) {',
        );
        String genericArguments(List<FlaxCodegenGenericParameter> parameters) =>
            parameters.isEmpty
            ? ''
            : '<${parameters.map((p) => _dartDeclaredType(p.defaultType!)).join(', ')}>';
        final receiver = member.isStatic
            ? _dartName(extension.name)
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
            if (member.kind == 'setter') {
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
      out.writeln(
        'Object? _function_${call.name}(Map<String, Object?> values) {',
      );
      _emitCallableCall(
        out,
        call,
        (args) =>
            '${_dartName(call.name)}${_typeArgs(call.typeArguments)}($args)',
        tearOff: '${_dartName(call.name)}${_typeArgs(call.typeArguments)}',
      );
      out.writeln('}');
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
    for (final type in module.classes) {
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
          type.kind == 'widgetInterface' ||
          type.kind == 'stream' ||
          type.kind == 'widget') {
        out.writeln(
          'bool _is${type.name}(Object value) => value is ${_dartName(type.name)}${_typeArgs(type.typeArguments)};',
        );
      }
      for (final getter in type.getters.where(
        (_) =>
            ({'context', 'state', 'object', 'stream'}.contains(type.kind) ||
            (type.kind == 'widget' && type.proxy != null)),
      )) {
        final read =
            '(value as ${_dartName(type.name)}${_typeArgs(type.typeArguments)}).${getter.name}';
        out.writeln(
          'Object? _${type.name}_${getter.name}(Object value) '
          '${getter.type.kind == 'void' ? '{ $read; return null; }' : '=> $read;'}',
        );
      }
      for (final getter in type.staticGetters) {
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
        final receiver =
            'receiver as ${_dartName(type.name)}${_typeArgs(type.typeArguments)}';
        final value = _cast('value', setter.type);
        final call = '($receiver).${setter.name} = $value';
        out.writeln(
          'void _${type.name}_set_${setter.name}(Object receiver, Object? value) { $call; }',
        );
      }
      for (final method in type.methods.where(
        (method) => !method.deferredFactory,
      )) {
        out.writeln(
          'Object? _${type.name}_${method.name}(${method.instance ? 'Object receiver, ' : ''}Map<String, Object?> values) {',
        );
        if (method.operatorName != null) {
          final call = _operatorExpression(
            '(receiver as ${_dartName(type.name)}${_typeArgs(type.typeArguments)})',
            method.operatorName!,
            [
              for (final p in method.parameters)
                _cast('values[${_quote(p.name)}]', p.type),
            ],
          );
          out.writeln('${method.result.kind == 'void' ? '' : 'return '}$call;');
          if (method.result.kind == 'void') out.writeln('return null;');
        } else {
          _emitCallableCall(
            out,
            method,
            (args) => '${_methodTarget(type, method)}($args)',
            tearOff: _methodTarget(type, method),
          );
        }
        out.writeln('}');
      }
      if (type.proxy case final proxy? when proxy.kind == 'extends') {
        for (final method in proxy.methods.where(
          (method) => proxy.hasSuperMethod(method.name),
        )) {
          final surface = type.methods.firstWhere(
            (candidate) => candidate.instance && candidate.name == method.name,
          );
          out.writeln(
            'Object? _${type.name}_super_${method.name}(Object receiver, Map<String, Object?> values) {',
          );
          _emitCallableCall(
            out,
            surface,
            (args) =>
                '(receiver as _${type.name}Proxy)._flaxSuper_${method.name}${_typeArgs(surface.typeArguments)}($args)',
            tearOff:
                '(receiver as _${type.name}Proxy)._flaxSuper_${method.name}${_typeArgs(surface.typeArguments)}',
          );
          out.writeln('}');
        }
        for (final getter in proxy.getters.where(
          (getter) => proxy.hasSuperGetter(getter.name),
        )) {
          final read =
              '(receiver as _${type.name}Proxy)._flaxSuperGet_${getter.name}';
          out.writeln(
            'Object? _${type.name}_super_get_${getter.name}(Object receiver, Map<String, Object?> values) '
            '${getter.type.kind == 'void' ? '{ $read; return null; }' : '=> $read;'}',
          );
        }
        for (final setter in proxy.setters.where(
          (setter) => proxy.hasSuperSetter(setter.name),
        )) {
          out.writeln(
            'Object? _${type.name}_super_set_${setter.name}(Object receiver, Map<String, Object?> values) { '
            '(receiver as _${type.name}Proxy)._flaxSuperSet_${setter.name}('
            '${_cast('values["value"]', setter.type)}); return null; }',
          );
        }
      }
      if (_bindingConstructors(type).isEmpty) {
        if (type.kind == 'object' || type.kind == 'stream') {
          out.writeln(
            "Object _create${type.name}(String ctor, Map<String, Object?> values) => throw ArgumentError('Abstract object has no constructor');",
          );
        }
        if (type.kind == 'route' || type.kind == 'page') {
          out.writeln(
            "${_dartName(type.kind == 'route' ? 'Route' : 'Page')}<Object?> _create${type.name}(String ctor, Map<String, Object?> values, ${type.kind == 'route' ? 'FlaxRouteLease' : 'FlaxPageLease'} lease) => throw ArgumentError('Abstract type has no constructor');",
          );
        }
        continue;
      }
      if (type.kind == 'widget') {
        out.writeln(
          '''class _${type.name}Host extends FlaxWidgetHost${type.widgetInterfaces.isEmpty ? '' : ' implements ${type.widgetInterfaces.map(_dartType).join(', ')}'} {
  _${type.name}Host(super.node);
${type.widgetMembers.map((m) => m.source).join('\n')}
  @override
  ${_dartName('Widget')} buildNative(Map<String, Object?> values) => _create${type.name}(node.ctor, values);
}''',
        );
      }
      final resultType = switch (type.category) {
        FlaxCodegenClassCategory.widget => _dartName('Widget'),
        FlaxCodegenClassCategory.route => '${_dartName('Route')}<Object?>',
        FlaxCodegenClassCategory.page => '${_dartName('Page')}<Object?>',
        _ => 'Object',
      };
      final leaseParameter = switch (type.category) {
        FlaxCodegenClassCategory.route => ', FlaxRouteLease lease',
        FlaxCodegenClassCategory.page => ', FlaxPageLease lease',
        _ => '',
      };
      out.writeln(
        '$resultType _create${type.name}(String ctor, '
        'Map<String, Object?> values$leaseParameter) {',
      );
      out.writeln('switch (ctor) {');
      if (type.proxy?.kind == 'implements') {
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
      }
      out.writeln(
        "default: throw ArgumentError('Unknown generated constructor');\n}\n}",
      );
    }
    for (final type in module.classes.where(
      (t) => t.kind == 'route' && t.constructors.isNotEmpty,
    )) {
      out.writeln(
        'class _${type.name} extends ${_dartName(type.name)}${_typeArgs(type.typeArguments)} {',
      );
      out.writeln('final FlaxRouteLease _lease;');
      for (final ctor in type.constructors) {
        final parameters = _superParameters(ctor.parameters);
        out.writeln(
          '_${type.name}${ctor.name.isEmpty ? '' : '.${ctor.name}'}(this._lease${parameters.isEmpty ? '' : ', $parameters'})${ctor.name.isEmpty ? '' : ' : super.${ctor.name}()'} { _lease.onDiscard = dispose; }',
        );
      }
      out.writeln(
        '@override void dispose() { try { super.dispose(); } finally { _lease.routeDisposed(); } }',
      );
      out.writeln('}');
    }
    for (final type in module.classes.where(
      (t) => t.kind == 'page' && t.constructors.isNotEmpty,
    )) {
      out.writeln(
        'class _${type.name} extends ${_dartName(type.name)}${_typeArgs(type.typeArguments)} implements FlaxPageConfiguration {',
      );
      out.writeln('@override final FlaxPageLease flaxPageLease;');
      for (final ctor in type.constructors) {
        final parameters = _superParameters(ctor.parameters);
        out.writeln(
          '_${type.name}${ctor.name.isEmpty ? '' : '.${ctor.name}'}(this.flaxPageLease${parameters.isEmpty ? '' : ', $parameters'})${ctor.name.isEmpty ? '' : ' : super.${ctor.name}()'};',
        );
      }
      out.writeln(
        '@override FlaxPageRoute createRoute(${_dartName('BuildContext')} context) => adapter${type.name}.${type.pageAdapter!.function}(this);',
      );
      out.writeln('}');
    }
    for (final type in module.classes.where((t) => t.proxy != null)) {
      final proxy = type.proxy!;
      final ctor = _proxyConstructor(type);
      out.writeln(
        'final class _${type.name}Proxy ${proxy.kind} ${_dartName(type.name)}${_typeArgs(type.typeArguments)}${type.kind == 'widget' ? ' with FlaxWidgetProxy' : ''} {',
      );
      if (proxy.callbacks.isEmpty) {
        out.writeln(
          '// This field keeps the actual JS subclass reachable from Dart.',
        );
        out.writeln('// ignore: unused_field');
      }
      out.writeln('final FlaxProxyPeer _flaxPeer;');
      if (proxy.methods.any(
        (method) => proxy.hasSuperMethod(method.name) && method.mustCallSuper,
      )) {
        out.writeln('String? _flaxActiveSuperMethod;');
        out.writeln('bool _flaxCalledSuper = false;');
      }
      final fields = ['this._flaxPeer'];
      final parameters = _superParameters(ctor.parameters);
      if (parameters.isNotEmpty) fields.add(parameters);
      out.writeln(
        '_${type.name}Proxy(${fields.join(', ')})${proxy.kind == 'extends' && ctor.name.isNotEmpty ? ' : super.${ctor.name}()' : ''};',
      );
      for (final (memberIndex, method) in proxy.methods.indexed) {
        if (type.kind == 'widget' &&
            method.name == 'createState' &&
            method.result.kind == 'state') {
          out.writeln(
            '@override ${_dartDeclaredType(method.result)} createState() {',
          );
          out.writeln(
            'return flaxCreateWidgetState(_flaxPeer, $memberIndex, this, _${type.name}State.new, super.createState);',
          );
          out.writeln('}');
          out.writeln(
            '${_dartDeclaredType(method.result)} _flaxSuper_createState() => super.createState();',
          );
          continue;
        }
        final superBacked =
            proxy.kind == 'extends' && proxy.hasSuperMethod(method.name);
        final generic = method.typeParameters.isNotEmpty;
        final declarations = <String>[];
        final optional = <String>[];
        final named = <String>[];
        for (final parameter in method.parameters) {
          if (parameter.positional && parameter.required) {
            declarations.add(
              '${_dartDeclaredType(parameter.type, generic: generic)} ${parameter.name}',
            );
          } else if (parameter.positional) {
            optional.add('Object? ${parameter.name} = _flaxOmitted');
          } else {
            named.add(
              parameter.required
                  ? 'required ${_dartDeclaredType(parameter.type, generic: generic)} ${parameter.name}'
                  : 'Object? ${parameter.name} = _flaxOmitted',
            );
          }
        }
        if (optional.isNotEmpty) declarations.add('[${optional.join(', ')}]');
        if (named.isNotEmpty) declarations.add('{${named.join(', ')}}');
        out.writeln('@override');
        out.writeln(
          '${_dartDeclaredType(method.result, generic: generic)} ${method.operatorName == null ? method.name : 'operator ${method.operatorName == 'unary-' ? '-' : method.operatorName}'}${_dartGenerics(method.typeParameters)}(${declarations.join(', ')}) {',
        );
        final genericUse = method.typeParameters.isEmpty
            ? ''
            : '<${method.typeParameters.map((p) => p.name).join(', ')}>';
        final superTarget = 'super.${method.name}$genericUse';
        final positional = method.parameters
            .where((p) => p.positional)
            .toList();
        final namedParameters = method.parameters
            .where((p) => !p.positional)
            .toList();
        void writeCall(
          int count,
          Set<String> omitted, {
          required bool directSuper,
        }) {
          final arguments = <String>[
            for (var i = 0; i < count; i++)
              positional[i].required ||
                      _dartDeclaredType(positional[i].type, generic: generic) ==
                          'Object?'
                  ? positional[i].name
                  : '${positional[i].name} as ${_dartDeclaredType(positional[i].type, generic: generic)}',
            for (final parameter in namedParameters)
              if (!omitted.contains(parameter.name))
                '${parameter.name}: ${parameter.required || _dartDeclaredType(parameter.type, generic: generic) == 'Object?' ? parameter.name : '${parameter.name} as ${_dartDeclaredType(parameter.type, generic: generic)}'}',
          ];
          var call = directSuper && method.operatorName != null
              ? _operatorExpression('super', method.operatorName!, arguments)
              : '$superTarget(${arguments.join(', ')})';
          if (namedParameters.where((p) => !p.required).length >=
              _applyOmissionThreshold) {
            final parameters = [
              for (final p in method.parameters)
                FlaxCodegenParameterModel(
                  name: p.name,
                  type: p.type,
                  required: p.required,
                  positional: p.positional,
                  omitWhenAbsent: !p.required,
                  defaultCode: p.defaultCode,
                ),
            ];
            call = _applyCall(
              superTarget,
              parameters,
              (p) =>
                  p.required ||
                      _dartDeclaredType(p.type, generic: generic) == 'Object?'
                  ? p.name
                  : '${p.name} as ${_dartDeclaredType(p.type, generic: generic)}',
              (p) => '!identical(${p.name}, _flaxOmitted)',
            );
            if (method.result.kind != 'void') {
              call =
                  '($call as ${_dartDeclaredType(method.result, generic: generic)})';
            }
          }
          out.writeln(
            method.result.kind == 'void' ? '$call; return;' : 'return $call;',
          );
        }

        final requiredCount = positional.where((p) => p.required).length;
        void emitDispatch({required bool directSuper}) {
          if (optional.isNotEmpty) {
            void emitPosition(int count) {
              if (count == positional.length) {
                writeCall(count, const {}, directSuper: directSuper);
                return;
              }
              out.writeln(
                'if (identical(${positional[count].name}, _flaxOmitted)) {',
              );
              writeCall(count, const {}, directSuper: directSuper);
              out.writeln('}');
              emitPosition(count + 1);
            }

            emitPosition(requiredCount);
            return;
          }
          if (namedParameters.where((p) => !p.required).length >=
              _applyOmissionThreshold) {
            writeCall(positional.length, const {}, directSuper: directSuper);
            return;
          }
          void emitNamed(int index, Set<String> omitted) {
            if (index == namedParameters.length) {
              writeCall(positional.length, omitted, directSuper: directSuper);
              return;
            }
            final parameter = namedParameters[index];
            if (parameter.required) {
              emitNamed(index + 1, omitted);
              return;
            }
            out.writeln('if (identical(${parameter.name}, _flaxOmitted)) {');
            emitNamed(index + 1, {...omitted, parameter.name});
            out.writeln('}');
            emitNamed(index + 1, omitted);
          }

          emitNamed(0, const {});
        }

        void emitPeerCall({bool checkRequiredSuper = false}) {
          out.writeln(
            'final _flaxResult = _flaxPeer.call($memberIndex, <Object?>[',
          );
          for (final parameter in method.parameters.where(
            (p) => p.positional,
          )) {
            final value = parameter.snapshot == null
                ? parameter.name
                : '_snapshot${parameter.snapshot}(${parameter.name})';
            out.writeln(
              '${parameter.required ? '' : 'if (!identical(${parameter.name}, _flaxOmitted)) '}$value,',
            );
          }
          out.writeln('], <String, Object?>{');
          for (final parameter in method.parameters.where(
            (p) => !p.positional,
          )) {
            final value = parameter.snapshot == null
                ? parameter.name
                : '_snapshot${parameter.snapshot}(${parameter.name})';
            out.writeln(
              '${parameter.required ? '' : 'if (!identical(${parameter.name}, _flaxOmitted)) '}${_quote(parameter.name)}: $value,',
            );
          }
          out.writeln('});');
          out.writeln('if (!_flaxResult.\$1) {');
          if (superBacked) {
            emitDispatch(directSuper: true);
          } else {
            out.writeln(
              "throw StateError('Missing proxy method: ${method.name}');",
            );
          }
          out.writeln('}');
          final result = method.result;
          if (result.kind != 'void') {
            if (result.kind == 'future') {
              if (result.nullable) {
                out.writeln('if (_flaxResult.\$2 == null) return null;');
              }
              final declared = _dartDeclaredType(
                result.item!,
                generic: generic,
              );
              final converted = _futureCompletionValue(
                'value',
                result.item!,
                generic: generic,
                callback: true,
              );
              out.writeln(
                'final result = (_flaxResult.\$2 as Future<Object?>).then<$declared>((value) => $converted);',
              );
            } else {
              out.writeln(
                'final result = ${_callbackResultCast('_flaxResult.\$2', result, generic: generic)};',
              );
            }
          }
          if (checkRequiredSuper) {
            if (result.kind == 'future' || result.kind == 'futureOr') {
              final item = _dartDeclaredType(result.item!, generic: generic);
              out.writeln(
                'if (!_flaxCalledSuper${result.kind == 'futureOr' ? ' && result is Future<$item>' : ''}) return result.then<$item>((_) => throw StateError(${_quote('${method.name} must call super.${method.name}()')}));',
              );
            }
            out.writeln(
              'if (!_flaxCalledSuper) throw StateError(${_quote('${method.name} must call super.${method.name}()')});',
            );
          }
          out.writeln(result.kind == 'void' ? 'return;' : 'return result;');
        }

        if (superBacked && method.mustCallSuper) {
          out.writeln(
            'final _flaxPreviousSuperMethod = _flaxActiveSuperMethod;',
          );
          out.writeln('final _flaxPreviousCalledSuper = _flaxCalledSuper;');
          out.writeln('_flaxActiveSuperMethod = ${_quote(method.name)};');
          out.writeln('_flaxCalledSuper = false;');
          out.writeln('try {');
          emitPeerCall(checkRequiredSuper: true);
          out.writeln('} finally {');
          out.writeln('_flaxActiveSuperMethod = _flaxPreviousSuperMethod;');
          out.writeln('_flaxCalledSuper = _flaxPreviousCalledSuper;');
          out.writeln('}');
        } else {
          emitPeerCall();
        }
        out.writeln('}');
        if (superBacked) {
          out.writeln(
            '${_dartDeclaredType(method.result, generic: generic)} _flaxSuper_${method.name}${_dartGenerics(method.typeParameters)}(${declarations.join(', ')}) {',
          );
          if (method.mustCallSuper) {
            out.writeln(
              'if (_flaxActiveSuperMethod == ${_quote(method.name)}) _flaxCalledSuper = true;',
            );
          }
          emitDispatch(directSuper: true);
          out.writeln('}');
        }
      }
      for (final (index, getter) in proxy.getters.indexed) {
        final member = proxy.methods.length + index;
        final fallback =
            proxy.kind == 'extends' && proxy.hasSuperGetter(getter.name);
        out.writeln(
          '@override ${_dartDeclaredType(getter.type)} get ${getter.name} {',
        );
        out.writeln(
          'final result = _flaxPeer.call($member, const [], const {});',
        );
        if (fallback) {
          out.writeln(
            getter.type.kind == 'void'
                ? 'if (!result.\$1) { super.${getter.name}; return; }'
                : 'if (!result.\$1) return super.${getter.name};',
          );
        }
        out.writeln(
          getter.type.kind == 'void'
              ? 'return;'
              : 'return ${_callbackResultCast('result.\$2', getter.type, generic: false)};',
        );
        out.writeln('}');
        if (fallback) {
          out.writeln(
            '${_dartDeclaredType(getter.type)} get _flaxSuperGet_${getter.name} { ${getter.type.kind == 'void' ? '' : 'return '}super.${getter.name}; }',
          );
        }
      }
      for (final (index, setter) in proxy.setters.indexed) {
        final member = proxy.methods.length + proxy.getters.length + index;
        final fallback =
            proxy.kind == 'extends' && proxy.hasSuperSetter(setter.name);
        out.writeln(
          '@override set ${setter.name}(${_dartDeclaredType(setter.type)} value) {',
        );
        out.writeln(
          '${fallback ? 'final result = ' : ''}_flaxPeer.call($member, [value], const {});',
        );
        if (fallback) {
          out.writeln('if (!result.\$1) super.${setter.name} = value;');
        }
        out.writeln('}');
        if (fallback) {
          out.writeln(
            'void _flaxSuperSet_${setter.name}(${_dartDeclaredType(setter.type)} value) { super.${setter.name} = value; }',
          );
        }
      }
      out.writeln('}');
    }
    for (final entry in _deferred.values) {
      final (owner, factory, specialized, name) = entry;
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
    for (final type in module.classes.where(
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
    var usesGenericCallbackResult = false;
    for (final entry in _callbacks.entries) {
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
            '${_dartDeclaredType(parameter.type, generic: generic)} $name',
          );
        } else if (parameter.positional) {
          optionalParameters.add('Object? $name = _flaxOmitted');
        } else {
          namedParameters.add(
            parameter.required
                ? 'required ${_dartDeclaredType(parameter.type, generic: generic)} $name'
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
      out.writeln(
        'Object ${entry.value}(FlaxCallback _flaxBridgeCallback) => ${_dartGenerics(type.typeParameters)}(${requiredParameters.join(', ')}) {',
      );
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
        out.writeln('_flaxBridgeCallback.call(positional, named);');
      } else if (result.kind == 'future') {
        if (result.nullable) {
          out.writeln(
            'final result = _flaxBridgeCallback.call(positional, named);',
          );
          out.writeln('if (result == null) return null;');
          out.writeln(
            _futureCallbackReturn('result', result.item!, generic: generic),
          );
        } else {
          out.writeln(
            _futureCallbackReturn(
              '_flaxBridgeCallback.call(positional, named)',
              result.item!,
              generic: generic,
            ),
          );
        }
      } else {
        out.writeln(
          'return ${_callbackResultCast('_flaxBridgeCallback.call(positional, named)', result, generic: generic)};',
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
      final target =
          '(function as $functionType)${type.typeParameters.isEmpty ? '' : '<${type.typeParameters.map((p) => _dartDeclaredType(p.defaultType!)).join(', ')}>'}';
      void writeCall(int positionalCount, Set<String> omitted) {
        final arguments = <String>[
          for (var i = 0; i < positionalCount; i++)
            _cast(
              'positional[$i]',
              type.parameters.where((p) => p.positional).elementAt(i).type,
            ),
          for (final parameter in type.parameters.where((p) => !p.positional))
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
    for (final entry in _records.values) {
      final (type, name) = entry;
      final dartType = _dartRecordType(type);
      out.writeln('bool ${name}Matches(Object value) => value is $dartType;');
      final values = <String>[];
      for (final (index, field) in type.recordFields.indexed) {
        out.writeln(
          'Object? ${name}Read$index(Object value) => '
          '(value as $dartType).${field.name};',
        );
        final value = _cast('values[$index]', field.type);
        values.add(field.positional ? value : '${field.name}: $value');
      }
      out.writeln(
        'Object ${name}Create(List<Object?> values) => '
        '(${values.join(', ')}${type.recordFields.length == 1 && type.recordFields.single.positional ? ',' : ''});',
      );
    }
    for (final entry in _collections.values) {
      final (type, name) = entry;
      final contents = switch (type.kind) {
        'map' => '<${_dartType(type.key!)}, ${_dartType(type.item!)}>{}',
        'set' => '<${_dartType(type.item!)}>{}',
        _ => '<${_dartType(type.item!)}>[]',
      };
      out.writeln('Object ${name}Create() => $contents;');
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
    final erasedFutureItems = <String>{};
    void collectErasedFutures(FlaxCodegenTypeRef type) {
      if ({'future', 'futureOr'}.contains(type.kind)) {
        erasedFutureItems.add(_typeId(type.item!));
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
      final finite = entry.key.endsWith(':finite-widget-iterable');
      final item = _dartType(type);
      final erased = erasedFutureItems.contains(_typeId(type));
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
          erased: erased || finite,
          withinCallback: finite,
        );
        usesGenericCallbackResult |= converted.contains(
          '_genericCallbackResult<',
        );
        if (erased) {
          out.writeln('''
Future<Object?> ${name}Adapt(Future<Object?> value) {
  final result = value.then<$item>((value) => $converted);
  // Stream iteration may deliver an already-failed task before JS can observe it.
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
      final finite = entry.key.endsWith(':finite-widget-iterable');
      final stream = _dartName('Stream');
      final item = _dartType(type.item!);
      final dartStream = '$stream<$item>';
      out.writeln('bool ${name}Matches(Object value) => value is $dartStream;');
      if (item == 'Object?') {
        out.writeln(
          '$stream<Object?> ${name}Adapt(Object value) => value as $dartStream;',
        );
      } else {
        // Ordinary typed sources keep their identity. Restricted callback views
        // check each event lazily, including events from an already-typed source.
        final event = _erasedStreamValue(
          'event',
          type.item!,
          withinCallback: finite,
        );
        usesGenericCallbackResult |= event.contains('_genericCallbackResult<');
        final mapped =
            '(value as $stream<Object?>).map<$item>((event) => $event)';
        final adapted = finite
            ? mapped
            : '(value is $dartStream ? value : $mapped)';
        out.writeln(
          '$stream<Object?> ${name}Adapt(Object value) => '
          '$adapted as $stream<Object?>;',
        );
      }
    }
    if (usesGenericCallbackResult) {
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
    final recordTypes = _records.values.map((entry) => entry.$1).toList();
    final recordRefs = recordTypes.map((type) => _ref(type)).join(', ');
    out.writeln('const _recordTypes = <FlaxTypeRef>[$recordRefs];');
    return out.toString();
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
      return _erasedStreamValue(value, type, withinCallback: withinCallback);
    }
    if (callback) {
      return _callbackResultCast(value, type, generic: generic);
    }
    final declared = _dartType(type);
    return declared == 'Object?' ? value : '$value as $declared';
  }

  String _erasedStreamValue(
    String value,
    FlaxCodegenTypeRef type, {
    bool withinCallback = false,
  }) {
    final declared = _dartType(type);
    final nonNullable = declared.replaceFirst(RegExp(r'\?$'), '');
    final finite = withinCallback && _containsWidgetIterable(type);
    String child(String value, FlaxCodegenTypeRef childType) =>
        _erasedStreamValue(value, childType, withinCallback: withinCallback);
    final checked = finite ? _finiteWidgetIterableValue(value, type) : value;
    String converted;
    if ({'future', 'futureOr'}.contains(type.kind)) {
      final future =
          _futures[_typeId(type.item!) +
                  (finite ? ':finite-widget-iterable' : '')]!
              .$2;
      final pending =
          '${future}Adapt($value as Future<Object?>) as Future<${_dartType(type.item!)}>';
      converted = type.kind == 'future'
          ? finite
                ? pending
                : '($value is $nonNullable ? $value : $pending)'
          : '($value is Future<Object?> ? ${pending.replaceFirst('$value as Future<Object?>', value)} : ${child(value, type.item!)})';
    } else if ({'list', 'iterable', 'set'}.contains(type.kind)) {
      final item = _dartType(type.item!);
      final mapped =
          '(collection as Iterable<Object?>).map<$item>((item) => ${child('item', type.item!)})';
      final contents = type.kind == 'list'
          ? '$mapped.toList()'
          : type.kind == 'set'
          ? '$mapped.toSet()'
          : finite
          ? '$mapped.toList()'
          : mapped;
      converted = type.kind == 'iterable' && finite
          ? '($value is $nonNullable ? $checked : flaxRestoreJsCollection<$declared>($value as Object, "iterable", (collection) => $contents, finiteWidgetIterable: true))'
          : '($value is $nonNullable ? $checked : flaxRestoreJsCollection<$declared>($value as Object, ${_quote(type.kind)}, (collection) => $contents))';
    } else if (type.kind == 'map') {
      final key = child('key', type.key!);
      final item = child('item', type.item!);
      converted =
          '($value is $nonNullable ? $checked : flaxRestoreJsCollection<$declared>($value as Object, "map", (value) => (value as Map<Object?, Object?>).map<${_dartType(type.key!)}, ${_dartType(type.item!)}>((key, item) => MapEntry($key, $item))))';
    } else if (type.kind == 'record') {
      final fields = type.recordFields
          .map((field) => child('fields[${_quote(field.name)}]', field.type))
          .join(', ');
      final record = _records[_typeId(type, omitNullable: true)]!.$2;
      converted =
          '($value is $nonNullable ? $checked : flaxRestoreJsCollection<$declared>($value as Object, "record", (value) => ((Map<Object?, Object?> fields) => ${record}Create([$fields]) as $declared)(value as Map<Object?, Object?>)))';
    } else {
      converted = declared == 'Object?'
          ? value
          : '_genericCallbackResult<$declared>($value)';
    }
    return type.nullable ? '($value == null ? null : $converted)' : converted;
  }

  bool _hasCheckedWidgetIterableFuture(FlaxCodegenTypeRef type) =>
      ({'future', 'futureOr'}.contains(type.kind) &&
          _containsWidgetIterable(type)) ||
      (type.item != null && _hasCheckedWidgetIterableFuture(type.item!)) ||
      (type.key != null && _hasCheckedWidgetIterableFuture(type.key!)) ||
      type.recordFields.any(
        (field) => _hasCheckedWidgetIterableFuture(field.type),
      );

  // Reuse native containers when checks leave every child unchanged. Future
  // children need checked Futures, so only that case reconstructs a container.
  String _finiteWidgetIterableValue(
    String value,
    FlaxCodegenTypeRef type, {
    bool nativeValue = false,
  }) {
    final declared = _dartType(type).replaceFirst(RegExp(r'\?$'), '');
    String child(String source, FlaxCodegenTypeRef ref) {
      if (!_containsWidgetIterable(ref)) return source;
      final checked = _finiteWidgetIterableValue(
        ref.nullable ? 'childValue' : source,
        ref,
        nativeValue: true,
      );
      return ref.nullable
          ? '((${_dartType(ref)} childValue) { final ${_dartType(ref)} checked = childValue == null ? null : $checked; return checked; })($source)'
          : checked;
    }

    if (type.kind == 'future' || type.kind == 'futureOr') {
      final future =
          _futures['${_typeId(type.item!)}:finite-widget-iterable']!.$2;
      final item = _dartType(type.item!);
      if (type.kind == 'future') {
        return '${future}Adapt(${nativeValue ? value : '$value as Future<Object?>'}) as Future<$item>';
      }
      return '(($declared source) { final $declared checked = source is Future<$item> '
          '? ${future}Adapt(source) as Future<$item> : ${child('source', type.item!)}; return checked; })'
          '(${nativeValue ? value : '$value as $declared'})';
    }

    final parameter = nativeValue ? '$declared source' : 'Object? input';
    final initial = nativeValue ? '' : 'final source = input as $declared;';
    final guard = type.kind == 'iterable'
        ? 'flaxRestoreJsCollection<$declared>(source, "iterable", (value) => value as $declared, finiteWidgetIterable: true);'
        : '';
    String call(String body) =>
        '(($parameter) { $initial $guard $body })($value)';
    if (type.kind == 'iterable' && !_containsWidgetIterable(type.item!)) {
      return call('return source;');
    }
    if (!_hasCheckedWidgetIterableFuture(type)) {
      final checks = switch (type.kind) {
        'list' || 'set' || 'iterable' =>
          'for (final item in source) { ${child('item', type.item!)}; }',
        'map' =>
          'for (final entry in source.entries) { '
              '${_containsWidgetIterable(type.key!) ? '${child('entry.key', type.key!)};' : ''}'
              '${_containsWidgetIterable(type.item!) ? '${child('entry.value', type.item!)};' : ''} }',
        'record' =>
          type.recordFields
              .where((field) => _containsWidgetIterable(field.type))
              .map((field) => '${child('source.${field.name}', field.type)};')
              .join(' '),
        _ => '',
      };
      if (checks.isNotEmpty) return call('$checks return source;');
    }
    if ({'list', 'set', 'iterable'}.contains(type.kind)) {
      final item = _dartType(type.item!);
      final output = type.kind == 'set' ? '<$item>{}' : '<$item>[]';
      return call(
        'var changed = false; final result = $output; '
        'for (final item in source) { final checked = ${child('item', type.item!)}; '
        'changed |= !identical(item, checked); result.add(checked); } '
        'return changed ? result : source;',
      );
    }
    if (type.kind == 'map') {
      return call(
        'var changed = false; final result = <${_dartType(type.key!)}, ${_dartType(type.item!)}>{}; '
        'for (final entry in source.entries) { final key = ${child('entry.key', type.key!)}; '
        'final item = ${child('entry.value', type.item!)}; '
        'changed |= !identical(key, entry.key) || !identical(item, entry.value); '
        'result[key] = item; } return changed ? result : source;',
      );
    }
    if (type.kind == 'record') {
      final statements = <String>[];
      final fields = <String>[];
      final unchanged = <String>[];
      for (final (index, field) in type.recordFields.indexed) {
        final fieldSource = 'source.${field.name}';
        statements.add(
          'final field$index = ${child(fieldSource, field.type)};',
        );
        fields.add('${field.positional ? '' : '${field.name}: '}field$index');
        unchanged.add('identical(field$index, $fieldSource)');
      }
      return call(
        '${statements.join(' ')} '
        'return ${unchanged.join(' && ')} ? source : (${fields.join(', ')},);',
      );
    }
    return value;
  }

  String _futureCallbackReturn(
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
    return 'return ($value as Future<Object?>).then<$declared>((value) => $converted);';
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
      final type = _dartDeclaredType(parameter.type);
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
          out.write(
            'FlaxParameter(${_quote(parameter.name)}, ${_ref(parameter.type)}, '
            'required: ${parameter.required}, defaultValue: ${_default(parameter)}, '
            'omitWhenAbsent: ${parameter.omitWhenAbsent}),',
          );
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
          'set ${setter.name}(${_dartDeclaredType(setter.type)} value) { '
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
    FlaxCodegenMethodModel method,
  ) {
    final receiver =
        'receiver as ${_dartName(type.name)}${_typeArgs(type.typeArguments)}';

    final target = method.instance ? '($receiver)' : _dartName(type.name);
    return '$target.${method.name}${_typeArgs(method.typeArguments)}';
  }

  List<FlaxCodegenConstructorModel> _bindingConstructors(
    FlaxCodegenClassModel type,
  ) {
    if (type.proxy == null) return type.constructors;
    return [
      if (type.proxy!.kind == 'implements' || type.kind == 'widget')
        ...type.constructors,
      FlaxCodegenConstructorModel(
        '@implementation',
        _proxyConstructor(type).parameters,
      ),
    ];
  }

  FlaxCodegenConstructorModel _proxyConstructor(FlaxCodegenClassModel type) =>
      type.proxy!.kind == 'implements'
      ? const FlaxCodegenConstructorModel('', [])
      : type.constructors.single;

  String _constructors(FlaxCodegenClassModel type) {
    final out = StringBuffer('{');
    for (final ctor in _bindingConstructors(type)) {
      out.write('${_quote(ctor.name)}: [');
      for (final p in ctor.parameters) {
        out.write(
          'FlaxParameter(${_quote(p.name)}, ${_ref(p.type)}, required: ${p.required}, defaultValue: ${_default(p)}, omitWhenAbsent: ${p.omitWhenAbsent}),',
        );
      }
      out.write('],');
    }
    return '$out}';
  }

  String _methods(FlaxCodegenClassModel type, {bool instance = false}) {
    final out = StringBuffer('{');
    for (final method in type.methods.where(
      (method) => method.instance == instance && !method.deferredFactory,
    )) {
      out.write(
        '${_quote(method.name)}: ${instance ? 'FlaxInstanceMethod' : 'FlaxStaticMethod'}([',
      );
      for (final parameter in method.parameters) {
        out.write(
          'FlaxParameter(${_quote(parameter.name)}, ${_ref(parameter.type)}, '
          'required: ${parameter.required}, defaultValue: ${_default(parameter)}, omitWhenAbsent: ${parameter.omitWhenAbsent}),',
        );
      }
      out.write(
        '], ${_ref(method.result)}, _${type.name}_${method.name}${instance ? ', startsRoute: ${method.startsRoute}' : ''}),',
      );
    }
    final proxy = type.proxy;
    if (instance && proxy?.kind == 'extends') {
      for (final method in proxy!.methods.where(
        (method) => proxy.hasSuperMethod(method.name),
      )) {
        final surface = type.methods.firstWhere(
          (candidate) => candidate.instance && candidate.name == method.name,
        );
        out.write('${_quote('@super:${method.name}')}: FlaxInstanceMethod([');
        for (final parameter in surface.parameters) {
          out.write(
            'FlaxParameter(${_quote(parameter.name)}, ${_ref(parameter.type)}, '
            'required: ${parameter.required}, defaultValue: ${_default(parameter)}, omitWhenAbsent: ${parameter.omitWhenAbsent}),',
          );
        }
        out.write(
          '], ${_ref(surface.result)}, _${type.name}_super_${method.name}),',
        );
      }
      for (final getter in proxy.getters.where(
        (getter) => proxy.hasSuperGetter(getter.name),
      )) {
        out.write(
          '${_quote('@super:get:${getter.name}')}: '
          'FlaxInstanceMethod([], ${_ref(getter.type)}, '
          '_${type.name}_super_get_${getter.name}),',
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
          '_${type.name}_super_set_${setter.name}),',
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
    var genericNames = <Object, String>{};
    var enumSignature = false;
    String tsType(
      FlaxCodegenTypeRef type, {
      bool declarations = true,
      bool input = false,
      bool nominal = false,
      bool withinCallback = false,
    }) {
      if (type.isExtensionTypeDeclaration) {
        return tsType(
          type.item!,
          declarations: declarations,
          input: input,
          nominal: nominal,
          withinCallback: withinCallback,
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
        );
      }
      if (declarations && type.declaration != null) {
        return tsType(
          type.declaration!,
          input: input,
          nominal: nominal,
          withinCallback: withinCallback,
        );
      }
      String child(FlaxCodegenTypeRef t, {bool? asInput}) => tsType(
        t,
        declarations: declarations,
        input: asInput ?? input,
        withinCallback: withinCallback,
      );
      String callback(FlaxCodegenTypeRef callback) {
        String callbackValue(FlaxCodegenTypeRef t, {required bool asInput}) =>
            tsType(
              t,
              declarations: declarations,
              input: asInput,
              withinCallback: true,
            );
        final generic = callback.typeParameters.isEmpty
            ? ''
            : '<${callback.typeParameters.map((p) => '${p.name} extends ${child(p.bound, asInput: false)}').join(', ')}>';
        final arguments = callback.parameters
            .where((p) => p.positional)
            .map(
              (p) =>
                  '${p.name}${p.required ? '' : '?'}: ${callbackValue(p.type, asInput: !input)}',
            )
            .toList();
        final named = callback.parameters.where((p) => !p.positional).toList();
        if (named.isNotEmpty) {
          final optional = named.every((p) => !p.required);
          arguments.add(
            'options${optional ? '?' : ''}: { ${named.map((p) => '${p.name}${p.required ? '' : '?'}: ${callbackValue(p.type, asInput: !input)}${p.required ? '' : ' | undefined'}').join('; ')} }',
          );
        }
        return '($generic(${arguments.join(', ')}) => ${callbackValue(callback.result!, asInput: input)})';
      }

      String stream() {
        final name = type.id == null
            ? 'FlaxStreamReference'
            : '${_owners[type.id] == module ? '' : '${dependencies[_owners[type.id]]}.'}${type.name}';
        final outputItem = child(type.item!, asInput: false);
        final output = '$name<$outputItem>';
        if (!input) return output;
        final inputItem = child(type.item!);
        return inputItem == outputItem
            ? output
            : '($output | $name<$inputItem>)';
      }

      if (input && !nominal && type.kind == 'object') {
        final owner = _classes[type.id];
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
          final marker =
              'Readonly<{ ${jsonEncode('__flaxBound:${identity.originatingUri}::${identity.originatingName}')}: readonly [${arguments.map((argument) => child(argument, asInput: false)).join(', ')}] }>';
          return '$marker${type.primitiveKinds.map((kind) => kind == 'String'
              ? ' | string'
              : kind == 'bool'
              ? ' | boolean'
              : ' | number').toSet().join()}${type.nullable ? ' | null' : ''}';
        }
      }

      final base = switch (type.category) {
        FlaxCodegenTypeCategory.parameter =>
          enumSignature && input
              ? '(${genericNames[type.genericIdentity] ?? type.name!} | DartInput<${genericNames[type.genericIdentity] ?? type.name!}>)'
              : genericNames[type.genericIdentity] ?? type.name!,
        FlaxCodegenTypeCategory.typeOnly =>
          'Readonly<{ ${jsonEncode('__flaxBound:${type.originatingUri}::${type.originatingName}')}: readonly [${type.tsArguments.map((t) => child(t)).join(', ')}] }>',
        FlaxCodegenTypeCategory.string => 'string',
        FlaxCodegenTypeCategory.boolean => 'boolean',
        FlaxCodegenTypeCategory.integer ||
        FlaxCodegenTypeCategory.number ||
        FlaxCodegenTypeCategory.numeric => 'number',
        FlaxCodegenTypeCategory.scalar => '(string | number)',
        FlaxCodegenTypeCategory.widget =>
          type.id == null
              ? 'Widget'
              : '${_owners[type.id] == module ? '' : '${dependencies[_owners[type.id]]}.'}${type.name}',
        FlaxCodegenTypeCategory.callback => callback(type),
        FlaxCodegenTypeCategory.iterable =>
          input
              ? withinCallback && type.containsWidget
                    ? '(Omit<DartIterable<${child(type.item!, asInput: false)}>, typeof globalThis.Symbol.iterator> | ReadonlyArray<${child(type.item!)}> | ReadonlySet<${child(type.item!)}>)'
                    : 'DartIterableInput<${child(type.item!, asInput: false)}, ${child(type.item!)}>'
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
        FlaxCodegenTypeCategory.record =>
          '{ ${type.recordFields.map((field) => 'readonly ${field.name}: ${child(field.type)}').join('; ')} }',
        FlaxCodegenTypeCategory.enumeration ||
        FlaxCodegenTypeCategory.context ||
        FlaxCodegenTypeCategory.state ||
        FlaxCodegenTypeCategory.route ||
        FlaxCodegenTypeCategory.object ||
        FlaxCodegenTypeCategory.page =>
          '${_owners[type.id] == module ? '' : '${dependencies[_owners[type.id]]}.'}${type.name}${(type.tsArguments.isNotEmpty ? type.tsArguments : type.dartArguments).isEmpty ? '' : '<${(type.tsArguments.isNotEmpty ? type.tsArguments : type.dartArguments).map((t) => child(t)).join(', ')}>'}',
        FlaxCodegenTypeCategory.voidType => 'void',
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

    String generics(
      List<FlaxCodegenGenericParameter> parameters, {
      bool defaults = true,
    }) {
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
      final preceding = <String>{};
      final declarations = <String>[];
      for (final parameter in parameters) {
        // Dependent defaults must follow the TS parameters, not Dart erasure.
        final defaultType = _containsParameter(parameter.bound, preceding)
            ? parameter.bound
            : parameter.defaultType ?? parameter.bound;
        declarations.add(
          '${genericNames[parameter.genericIdentity] ?? parameter.name} extends ${tsType(parameter.bound)} ${defaults ? '= ${tsType(defaultType)}' : ''}',
        );
        preceding.add(parameter.name);
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
    if (module.classes.any((c) => c.proxy?.kind == 'extends')) {
      out.writeln(
        "import { FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';",
      );
    }
    for (final entry in dependencies.entries) {
      final valueImport = valueDependencies.contains(entry.key);
      out.writeln(
        "import ${valueImport ? '' : 'type '}* as ${entry.value} from '${entry.key.jsPackage}';",
      );
      if (!valueImport &&
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
          )) {
        // Reference factories must exist even for type-only dependency imports.
        out.writeln("import '${entry.key.jsPackage}';");
      }
    }
    if (moduleInstallImport == null) {
      _writeTypescriptModuleInstall(out, module);
    } else {
      out.writeln(
        'import { construct, constructProxy, constructObject, '
        'constructDeferredObject, constructStream, constructAsyncIterableStream, '
        '_flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, '
        'invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, '
        'invokeStatic, invokeInstance, invokeTopLevel } from '
        '${jsonEncode(moduleInstallImport)};',
      );
    }
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
        out.writeln('${exportPrefix}const ${type.name} = Object.freeze({');
        for (final name in type.enumNames) {
          final constantType = type.enumValueTypes[name];
          out.writeln(
            '$name: enumValue<${constantType == null ? type.name : tsType(constantType, declarations: true)}>(${jsonEncode(type.id)}, ${jsonEncode(name)}),',
          );
        }
        out.writeln(
          'values: Object.freeze([${type.enumNames.map((name) => 'enumValue<${type.name}${type.typeParameters.isEmpty ? '' : '<${type.typeParameters.map((p) => tsType(p.defaultType!)).join(', ')}>'}>(${jsonEncode(type.id)}, ${jsonEncode(name)})').join(', ')}]),',
        );
        out.writeln('});');
      } else if (_intrinsicStreamTypeIds.contains(type.id)) {
        final parameter = type.typeParameters.single;
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters, defaults: type.typeParameters.any((p) => p.defaultType != null))} extends FlaxStreamReference<${parameter.name}> { readonly __${type.name}: unique symbol; }',
        );
      } else {
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters, defaults: type.typeParameters.any((p) => p.defaultType != null))} { readonly __${type.name}: unique symbol; }',
        );
      }
    }
    void emitTsCallable(
      StringBuffer target,
      FlaxCodegenMethodModel method, {
      required String id,
      String? namespace,
      FlaxCodegenClassCategory? category,
      bool extensionOperation = false,
      bool exportNamespace = true,
      bool enumOperation = false,
      String? enumOperationIds,
      bool literal = false,
      bool declarations = true,
    }) {
      final previousGenericNames = genericNames;
      if (extensionOperation) {
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
      final named = method.parameters.where((p) => !p.positional).toList();
      final args = method.parameters
          .where((p) => p.positional)
          .map(
            (p) =>
                '${p.name}${p.required ? '' : '?'}: ${tsType(p.type, input: true, declarations: declarations && !method.instance)}',
          )
          .toList();
      if (named.isNotEmpty) {
        args.add(
          'options: { ${named.map((p) => namedParameter(p, tsType(p.type, input: true, declarations: declarations && !method.instance))).join('; ')} }${named.every((p) => !p.required) ? ' = {}' : ''}',
        );
      }
      target.writeln(
        method.instance || literal
            ? '${method.name}${literal ? generics(method.typeParameters) : ''}(${[if (method.instance) 'this: object', ...args].join(', ')}): ${tsType(method.result, declarations: declarations && !method.instance)} {'
            : '${namespace == null ? "function _flaxTopLevel_" : "${exportNamespace ? 'export ' : ''}namespace $namespace { export function "}${method.name}${generics(method.typeParameters)}(${args.join(', ')}): ${tsType(method.result, declarations: declarations && !method.instance)} {',
      );
      target.writeln(
        "if (arguments.length > ${args.length}) throw new TypeError('Too many method arguments');",
      );
      _guardPositionalTs(target, method.parameters);
      if (named.isNotEmpty) {
        target.writeln(
          "if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !${jsonEncode(named.map((p) => p.name).toList())}.includes(k))) throw new TypeError('Invalid named method arguments');",
        );
      }
      final values = method.parameters
          .map((p) {
            final value = p.positional ? p.name : 'options.${p.name}';
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
                'required': parameter.required,
                'positional': parameter.positional,
              },
            )
            .toList();
        final positional = method.parameters
            .where((parameter) => parameter.positional)
            .map((parameter) => parameter.name)
            .join(', ');
        target.writeln(
          'return constructDeferredObject(${jsonEncode(id)}, '
          '${jsonEncode(method.name)}, ${jsonEncode(params)}, '
          '[$positional], ${named.isEmpty ? '{}' : 'options'}) as '
          '${tsType(method.result, declarations: !method.instance)};',
        );
        target.writeln(namespace == null ? '}' : '} }');
        return;
      }
      var invocation = namespace == null || extensionOperation
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
      target.writeln(
        enumOperationIds == null
            ? 'const _flaxResult = $invocation${jsonEncode(id)}, ${namespace == null || extensionOperation || enumOperation ? "" : "${jsonEncode(method.name)}, "}[${enumOperation && method.instance ? 'this${values.isEmpty ? '' : ', '}' : ''}$values]);'
            : 'const _flaxResult = invokeEnum(this, $enumOperationIds, [$values]);',
      );
      if (method.result.kind != 'void') {
        target.writeln(
          'return _flaxResult as ${tsType(method.result, declarations: declarations && !method.instance)};',
        );
      }
      target.writeln(
        method.instance || literal
            ? '},'
            : namespace == null
            ? '}'
            : '} }',
      );
      if (namespace == null && !method.instance && !literal) {
        target.writeln(
          'export { _flaxTopLevel_${method.name} as ${method.name} };',
        );
      }
      genericNames = previousGenericNames;
    }

    final memberLayouts = <String, String>{};
    String memberMetadata(Iterable<FlaxCodegenMethodModel> methods) =>
        '{${methods.map((method) {
          final layout = jsonEncode(_memberParameters(method.parameters));
          final name = memberLayouts.putIfAbsent(layout, () => '_flaxMemberParameters${memberLayouts.length}');
          return '${jsonEncode(method.name)}:$name';
        }).join(',')}}';
    final staticMethods = StringBuffer();
    final instanceChecks = StringBuffer();
    String valueName(FlaxCodegenClassModel type) =>
        type.proxy?.kind == 'extends' && type.kind != 'widget'
        ? type.name
        : '_${type.name}Factory';
    String instanceType(FlaxCodegenClassModel type) =>
        type.name +
        (type.typeParameters.isEmpty
            ? ''
            : '<${type.typeParameters.map((_) => "any").join(", ")}>');
    String proxyArguments(FlaxCodegenClassModel type) {
      final ctor = _proxyConstructor(type);
      final args = ctor.parameters
          .where((p) => p.positional)
          .map(
            (p) =>
                '${p.name}${p.required ? '' : '?'}: ${tsType(p.type, input: true, declarations: type.typeArguments.isEmpty)}',
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
      final className = type.kind == 'widget'
          ? '_${type.name}Native'
          : type.name;
      final ctor = _proxyConstructor(type);
      final params = [
        for (final p in ctor.parameters)
          {'name': p.name, 'required': p.required, 'positional': p.positional},
      ];
      target.writeln(
        'const _${type.name}Proxy = {'
        '${type.kind == 'widget' ? 'nativeWidget: true, ' : ''}type: ${jsonEncode(type.id)}, parameters: ${jsonEncode(params)}, '
        'methods: ${memberMetadata(proxy.methods.map((method) => proxy.hasSuperMethod(method.name) ? type.methods.firstWhere((surface) => surface.instance && surface.name == method.name) : method))}, '
        'getters: ${jsonEncode(proxy.getters.map((g) => g.name).toList())}, '
        'setters: ${jsonEncode(proxy.setters.map((s) => s.name).toList())}, '
        'superMembers: ${jsonEncode(proxy.superMethods)}} as const;',
      );
      if (proxy.kind == 'extends') {
        target.writeln(
          'export interface $className${generics(type.typeParameters)}${type.kind == 'widget' ? ' extends _FlaxDartWidget${type.widgetInterfaces.map((i) => ", Omit<${tsType(i)}, 'kind'>").join()}' : ''} {',
        );
        if (type.kind == 'widget') {
          for (final getter in type.getters.where(
            (g) => !proxy.getters.any((p) => p.name == g.name),
          )) {
            target.writeln('readonly ${getter.name}: ${tsType(getter.type)};');
          }
        }
        for (final method in proxy.methods.where(
          (m) => proxy.hasSuperMethod(m.name),
        )) {
          target.writeln(
            '${_proxyMethodSignature(method, tsType, generics, namedParameter)};',
          );
        }
        for (final getter in proxy.getters.where(
          (g) => proxy.hasSuperGetter(g.name),
        )) {
          target.writeln('get ${getter.name}(): ${tsType(getter.type)};');
        }
        for (final setter in proxy.setters.where(
          (s) => proxy.hasSuperSetter(s.name),
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
          'constructor(${proxyArguments(type)}) { super(_${type.name}Proxy, Array.from(arguments)); }',
        );
        for (final method in proxy.methods.where(
          (m) => !proxy.hasSuperMethod(m.name),
        )) {
          target.writeln(
            'abstract ${_proxyMethodSignature(method, tsType, generics, namedParameter)};',
          );
        }
        for (final getter in proxy.getters.where(
          (g) => !proxy.hasSuperGetter(g.name),
        )) {
          target.writeln(
            'abstract get ${getter.name}(): ${tsType(getter.type)};',
          );
        }
        for (final setter in proxy.setters.where(
          (s) => !proxy.hasSuperSetter(s.name),
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
      if (type.kind == 'widget') return;
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
        '${valueName(type) == type.name ? "export " : ""}namespace ${valueName(type)} { export function implement${generics(type.typeParameters)}(args: [${proxyArguments(type)}], implementation: {$implementation}): ${type.name}${genericUse(type)} {',
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
          'extends ${interfaces.join(', ')} {}',
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
        out.writeln(
          '${_proxyMethodSignature(method, tsType, generics, namedParameter)};',
        );
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
        out.writeln(
          'abstract ${_proxyMethodSignature(method, tsType, generics, namedParameter)};',
        );
      }
      if (variant.superMethods.contains('call:build')) {
        final contextType = stateType.methods
            .where((method) => method.name == 'build' && method.instance)
            .firstOrNull
            ?.parameters
            .firstOrNull
            ?.type;
        out.writeln(
          'build(context: ${contextType == null ? 'ComponentContext' : tsType(contextType)}): Widget { '
          'return this.invokeSuper("build", [context]) as Widget; }',
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

    for (final type in module.classes) {
      final exportPrefix = module.internalTypeNames.contains(type.name)
          ? ''
          : 'export ';
      if (type.kind == 'enum') {
        enumSignature = true;
        final constants = module.types.singleWhere(
          (value) => value.id == type.id,
        );
        final bases = <String>{
          'DartEnum',
          for (final parent in type.superTypes)
            if (parent.id != type.id && parent.originatingName != type.name)
              tsType(parent, nominal: true, declarations: true),
        };
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters, defaults: true)} extends ${bases.join(', ')} { readonly __${type.name}: unique symbol;',
        );
        if (!type.getters.any((getter) => getter.name == 'name')) {
          out.writeln('readonly name: string;');
        }
        if (!type.getters.any((getter) => getter.name == 'index')) {
          out.writeln('readonly index: number;');
        }
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
          final positional = method.parameters
              .where((p) => p.positional)
              .map(
                (p) =>
                    '${p.name}${p.required ? '' : '?'}: ${tsType(p.type, input: true, declarations: true)}',
              )
              .toList();
          final named = method.parameters.where((p) => !p.positional).toList();
          if (named.isNotEmpty) {
            positional.add(
              'options${named.every((p) => !p.required) ? '?' : ''}: {${named.map((p) => namedParameter(p, tsType(p.type, input: true, declarations: true))).join('; ')}}',
            );
          }
          out.writeln(
            '${method.name}${generics(method.typeParameters)}(${positional.join(', ')}): ${tsType(method.result, declarations: true)};',
          );
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
        final valuesType = constants.enumValueTypes.values
            .map((type) => tsType(type, declarations: true))
            .toSet()
            .join(' | ');
        out.writeln('${exportPrefix}const ${type.name} = Object.freeze({');
        for (final name in constants.enumNames) {
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
          final inferred = constructor.specializations.isNotEmpty;
          final call = module
              .enumFunctions(type)
              .singleWhere(
                (function) =>
                    function.id ==
                    type.enumOperationId(constructor.name, 'factory'),
              )
              .call;
          emitTsCallable(
            out,
            FlaxCodegenMethodModel(
              constructor.name,
              constructor.parameters,
              inferred
                  ? FlaxCodegenTypeRef(
                      'enum',
                      id: type.id,
                      name: type.name,
                      tsArguments: [
                        for (final parameter in type.typeParameters)
                          FlaxCodegenTypeRef(
                            'parameter',
                            name: parameter.name,
                            genericIdentity: parameter.genericIdentity,
                          ),
                      ],
                    )
                  : call.result,
              typeParameters: inferred
                  ? [
                      for (final parameter in type.typeParameters)
                        FlaxCodegenGenericParameter(
                          parameter.name,
                          constructor.parameters.any(
                                (input) =>
                                    input.type.kind == 'scalar' &&
                                    input.type.declaration?.genericIdentity ==
                                        parameter.genericIdentity,
                              )
                              ? const FlaxCodegenTypeRef('scalar')
                              : parameter.bound,
                          genericIdentity: parameter.genericIdentity,
                        ),
                    ]
                  : const [],
            ),
            id: type.enumOperationId(constructor.name, 'factory'),
            literal: true,
            enumOperation: true,
            declarations: inferred,
          );
        }
        out.writeln('});');
        enumSignature = false;
        continue;
      }
      final hasJsConstructor =
          type.proxy?.kind == 'extends' ||
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
      final apiType =
          '${hasApi ? "typeof $api" : "object"} & _FlaxInstanceType<${instanceType(type)}>';
      instanceChecks.writeln(
        type.proxy?.kind == 'extends' && type.kind != 'widget'
            ? '$check;'
            : '${exportPrefix}const ${type.name}: $apiType = $check;',
      );
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
            exportNamespace: valueName(type) == type.name,
            extensionOperation: true,
          );
        }
        for (final getter in type.staticGetters) {
          if (!staticObject) {
            staticMethods.writeln(
              '${valueName(type) == type.name ? "export " : ""}namespace ${valueName(type)} { export declare const ${getter.name}: ${tsType(getter.type)}; }',
            );
          }
          staticMethods.writeln(
            'Object.defineProperty(${valueName(type)}, ${jsonEncode(getter.name)}, { get: () => invokeTopLevel(${jsonEncode(type.staticGetterId(getter))}, []) });',
          );
        }
      }
      for (final method in type.methods.where((m) => !m.instance)) {
        emitTsCallable(
          staticMethods,
          method,
          id: type.id,
          namespace: valueName(type),
          exportNamespace: valueName(type) == type.name,
          category: type.category,
        );
      }
      if (type.kind == 'widgetInterface') {
        out.writeln(
          '${exportPrefix}type ${type.name} = Widget & { readonly __${type.name}: unique symbol; }${type.superTypes.map((t) => ' & ${tsType(t, nominal: true)}').join('')};',
        );
        continue;
      }
      if ({'context', 'state', 'object', 'stream'}.contains(type.kind)) {
        final extendsProxy = type.proxy?.kind == 'extends';
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters)}${type.kind == 'context'
              ? ' extends ComponentContext'
              : type.kind == 'object' && type.superTypes.isNotEmpty
              ? ' extends ${type.superTypes.map((parent) => tsType(parent, nominal: true)).join(', ')}'
              : type.kind == 'stream'
              ? ' extends AsyncIterable<${type.typeParameters.single.name}>'
              : ''} { ${type.constructors.isEmpty || type.kind == 'object' || type.kind == 'stream' ? 'readonly __${type.name}: unique symbol;' : ''}',
        );
        if (!extendsProxy) {
          for (final getter in type.getters) {
            out.writeln(
              type.setters.any((s) => s.name == getter.name)
                  ? 'get ${getter.name}(): ${tsType(getter.type)};'
                  : 'readonly ${getter.name}: ${tsType(getter.type)};',
            );
          }
          for (final method in type.methods.where((m) => m.instance)) {
            final positional = method.parameters
                .where((p) => p.positional)
                .map(
                  (p) =>
                      '${p.name}${p.required ? '' : '?'}: ${tsType(p.type, input: true)}',
                )
                .toList();
            final named = method.parameters
                .where((p) => !p.positional)
                .toList();
            if (named.isNotEmpty) {
              positional.add(
                'options${named.every((p) => !p.required) ? '?' : ''}: {${named.map((p) => namedParameter(p, tsType(p.type, input: true))).join('; ')}}',
              );
            }
            out.writeln(
              '${method.name}${generics(method.typeParameters)}(${positional.join(', ')}): ${tsType(method.result)};',
            );
          }
          for (final setter in type.setters) {
            out.writeln(
              'set ${setter.name}(value: ${tsType(setter.type, input: true)});',
            );
          }
        }
        out.writeln('}');
        if (type.kind == 'context') {
          out.writeln(
            'defineContext(${jsonEncode(type.id)}, ${jsonEncode(type.getters.map((g) => g.name).toList())});',
          );
        }
      }
      String sharedMethods() =>
          '_flaxBindingMethods(${jsonEncode(type.id)}, ${jsonEncode(type.kind == 'widget' ? 'object' : type.kind)}, ${memberMetadata(type.methods.where((m) => m.instance))})';
      if (type.kind == 'object' ||
          (type.kind == 'widget' && type.proxy != null)) {
        final listeners = _sortedStringMap(type.listenerPairs).values.toList();
        out.writeln(
          'defineObject(${jsonEncode(type.id)}, ${jsonEncode(type.getters.map((g) => g.name).toList())}, ${jsonEncode(type.setters.map((g) => g.name).toList())}, ${sharedMethods()}, ${jsonEncode(listeners)});',
        );
      }
      if (type.kind == 'stream') {
        out.writeln(
          'defineStream(${jsonEncode(type.id)}, ${jsonEncode(type.getters.map((g) => g.name).toList())}, ${sharedMethods()});',
        );
        if (type.asyncIterableFactory case final factory?) {
          final parameter = type.typeParameters.single;
          out.writeln(
            '${valueName(type) == type.name ? "export " : ""}namespace ${valueName(type)} {',
          );
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
        if (type.kind == 'widget') {
          out.writeln(
            '${exportPrefix}type ${type.name}${generics(type.typeParameters)} = Widget & { readonly __${type.name}: unique symbol; };',
          );
        }
        if (type.kind == 'route' || type.kind == 'page') {
          out.writeln(
            '${exportPrefix}interface ${type.name}${generics(type.typeParameters)} extends DartValue { readonly __${type.name}: unique symbol; ${type.getters.map((g) => 'readonly ${g.name}: ${tsType(g.type)};').join(' ')} }',
          );
        }
        continue;
      }
      final bases = type.superTypes
          .map((parent) => "Omit<${tsType(parent, nominal: true)}, 'type'>")
          .toSet();
      if (type.kind == 'widget' && type.proxy != null) {
        out.writeln(
          '${exportPrefix}type ${type.name}${generics(type.typeParameters)} = ${type.name}Description${genericUse(type)} | _${type.name}Native${genericUse(type)};',
        );
        out.writeln(
          '${exportPrefix}type ${type.name}Description${generics(type.typeParameters)} = WidgetDescription & { readonly type: ${jsonEncode(type.id)}; }${type.widgetInterfaces.map((i) => ' & ${tsType(i)}').join()};',
        );
        emitProxy(out, type, type.proxy!);
      } else if (type.widgetInterfaces.isNotEmpty) {
        out.writeln(
          '${exportPrefix}type ${type.name} = WidgetDescription & { readonly type: ${jsonEncode(type.id)}; } & ${type.widgetInterfaces.map((t) => tsType(t)).join(' & ')};',
        );
      } else if (type.kind != 'object' && type.kind != 'stream') {
        out.writeln(
          '${exportPrefix}interface ${type.name}${generics(type.typeParameters)} extends ${type.kind == 'widget' ? 'WidgetDescription' : 'DartValue'}${bases.isEmpty ? '' : ', ${bases.join(', ')}'} { readonly type: ${jsonEncode(type.id)};${type.kind == 'widget' ? '' : ' readonly __${type.name}: unique symbol;'} ${type.getters.map((g) => 'readonly ${g.name}: ${tsType(g.type)};').join(' ')} }',
        );
      }
      final delayedProxy =
          type.proxy?.kind == 'implements' && type.constructors.isNotEmpty;
      if (type.proxy case final proxy?
          when !delayedProxy && type.kind != 'widget') {
        emitProxy(out, type, proxy);
        continue;
      }
      for (final ctor in type.constructors) {
        final functionName = ctor.name.isEmpty
            ? (type.jsName != null &&
                      type.jsName != type.name &&
                      !hasJsConstructor
                  ? '_${type.name}Construct'
                  : valueName(type))
            : ctor.name;
        if (ctor.name.isNotEmpty) {
          out.writeln(
            '${valueName(type) == type.name ? "export " : ""}namespace ${valueName(type)} {',
          );
        }
        final named = ctor.parameters
            .where((param) => !param.positional)
            .toList();
        String paramType(FlaxCodegenParameterModel param) =>
            type.kind == 'widget' &&
                type.widgetInterfaces.isEmpty &&
                param.name != 'key'
            ? 'Bindable<${tsType(param.type, input: true)}>'
            : tsType(param.type, input: true);
        final args = ctor.parameters
            .where((param) => param.positional)
            .map(
              (param) =>
                  '${param.name}${param.required ? '' : '?'}: ${paramType(param)}',
            )
            .toList();
        if (named.isNotEmpty) {
          args.add(
            'options: { ${named.map((param) => namedParameter(param, paramType(param))).join('; ')} }${named.every((param) => !param.required) ? ' = {}' : ''}',
          );
        }
        out.writeln(
          '${ctor.name.isEmpty ? "" : "export "}function $functionName${constructorGenerics(type, ctor)}(${args.join(', ')}): ${type.name}${genericUse(type)} {',
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
              type.kind != 'object' &&
              type.kind != 'stream' &&
              type.getters.any((g) => g.name == param.name);
          return {
            'name': param.name,
            if (type.widgetInterfaces.isNotEmpty) 'fixed': true,
            'required': param.required,
            'positional': param.positional,
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
            .map((param) => param.name)
            .join(', ');
        final construct = switch (type.kind) {
          'object' => 'constructObject',
          'stream' => 'constructStream',
          _ => 'construct',
        };
        out.writeln(
          'return $construct(${jsonEncode(type.kind)}, ${jsonEncode(type.id)}, ${jsonEncode(ctor.name)}, ${jsonEncode(params)}, [$positional], ${named.isEmpty ? '{}' : 'options'}) as ${type.name}${genericUse(type)};',
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
              'export function ${setter.exportName}(value: ${tsType(setter.type, input: true)}): void { ${writeSetter(setter)}; }',
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
            '${values.jsName}.${setter.exportName} = (value: ${tsType(setter.type, input: true)}): void => { ${writeSetter(setter)}; };',
          );
        }
      }
    }
    for (final function in module.functions) {
      emitTsCallable(out, function.call, id: function.id);
    }
    for (final extension in module.extensions) {
      for (final member in extension.members) {
        if (extension.isReference) {
          out.writeln(
            'export namespace ${extension.name} { export const ${member.call.name} = ${dependencies[_owners[member.id]]}.${extension.name}.${member.call.name}; }',
          );
          continue;
        }
        emitTsCallable(
          out,
          member.call,
          id: member.id,
          namespace: extension.name,
          extensionOperation: true,
        );
      }
    }
    final layouts = memberLayouts.entries
        .map((entry) => 'const ${entry.value} = ${entry.key} as const;\n')
        .join();
    return out.toString().replaceFirst(
      '$_typescriptHostImport\n',
      '$_typescriptHostImport\n$layouts',
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
    out.write(_typescriptInstallHelper);
    out.writeln(
      'export const ${module.name}BindingModule = _flaxInstallBindingModule(${jsonEncode(_literalModuleId(module))}, $_generatedUiProtocol, $capabilityLiteral);',
    );
    out.writeln(
      'const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = ${module.name}BindingModule;',
    );
  }
}
