import 'dart:convert';

import 'package:path/path.dart' as p;

import 'identity.dart';
import 'model.dart';

part 'library_emitter.dart';

/// Generated modules pin UI protocol 20. Do not read Core `flaxBindingVersion`.
const _generatedUiProtocol = 20;

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
    "import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';";

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
    throw new TypeError(`Unsupported binding capability ${capability}`);
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
    defineObject: _flaxHostDefineObject,
    defineStream: _flaxHostDefineStream,
    invokeObject: _flaxHostInvokeObject,
    invokeObjectStatic: _flaxHostInvokeObjectStatic,
    invokeStream: _flaxHostInvokeStream,
    enumValue: _flaxHostEnumValue,
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
    final snapshotIds = {
      for (final module in modules) ...module.snapshots.map((s) => s.id),
    };
    for (final type in _types.values.where((type) => !type.isEnum)) {
      if (snapshotIds.contains(type.id)) continue;
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
        ...type.widgetGetters,
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
          ...type.widgetGetters,
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
      _dartType(generic ? type.declaration ?? type : type);

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

  String _typeArgs(List<String> args) => args.isEmpty
      ? ''
      : '<${args.map((name) {
          final base = name.replaceAll('?', '');
          return {'Object', 'String', 'int', 'double', 'num', 'bool'}.contains(base) ? name : '${_dartName(base)}${name.endsWith('?') ? '?' : ''}';
        }).join(', ')}>';

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
    // Widget lists are structural snapshots; retain their readonly behavior while
    // presenting the selected native interface type to the constructor.
    if (type.kind == 'list' &&
        type.item!.kind == 'widget' &&
        type.item!.id != null) {
      return '($value as List<${_dartName('Widget')}>${type.nullable ? '?' : ''})${type.nullable ? '?' : ''}.cast<${_dartType(type.item!)}>()';
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

  String _ref(FlaxCodegenTypeRef type, {bool independentWidgetResult = false}) {
    if (type.kind == 'typeOnly') {
      throw StateError(
        'Type-only reference cannot cross the Dart bridge: ${type.name}',
      );
    }
    final out = StringBuffer('FlaxTypeRef(${_quote(type.kind)}');
    if (type.id != null) out.write(', id: ${_quote(type.id!)}');
    if (type.nullable) out.write(', nullable: true');
    if (type.item != null) out.write(', item: ${_ref(type.item!)}');
    if (type.key != null) out.write(', key: ${_ref(type.key!)}');
    if ({'iterable', 'list', 'map', 'set'}.contains(type.kind)) {
      final name = _collections
          .putIfAbsent(
            _typeId(type, omitNullable: true),
            () => (type, '_collection${_collections.length}'),
          )
          .$2;
      out.write(
        ', collection: FlaxCollectionBinding(${_quote(_typeId(type, omitNullable: true))}, ${name}Create, ${name}Matches)',
      );
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
        _typeId(type, omitNullable: true),
        () => (type, '_stream${_streams.length}'),
      );
      out.write(
        ', stream: FlaxStreamBinding(${_quote(_typeId(type, omitNullable: true))}, '
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
          'FlaxRecordFieldBinding(${_quote(field.name)}, ${_ref(field.type)}, '
          '${entry.$2}Read$index),',
        );
      }
      out.write('], ${entry.$2}Create)');
    }
    if (type.category == FlaxCodegenTypeCategory.callback) {
      final parameters = type.parameters
          .map(
            (p) =>
                'FlaxCallbackParameter(${_quote(p.name)}, ${_ref(p.type)}, required: ${p.required}, positional: ${p.positional}${p.encodeKind != null
                    ? ", encode: const FlaxTypeRef('${p.encodeKind}')"
                    : p.snapshot == null
                    ? ''
                    : ", encode: const FlaxTypeRef('data')"}${p.scoped ? ', scoped: true' : ''})',
          )
          .join(', ');
      final result = _ref(type.result!);
      final adapter = _callbacks.putIfAbsent(
        type,
        () => '_callback${_callbacks.length}',
      );
      out.write(
        ', callback: FlaxCallbackBinding([$parameters], $result, $adapter, id: ${_quote(_typeId(type, omitNullable: true))}, invoke: ${adapter}Invoke, matches: ${adapter}Matches${independentWidgetResult ? ', independentWidgetResult: true' : ''})',
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
      return 'const <${_dartType(parameter.type.item!)}>[]';
    }
    if (parameter.type.kind == 'enum' && parameter.defaultCode != 'null') {
      return '${_dartName(parameter.type.name!)}.${parameter.defaultCode.split('.').last}';
    }
    return parameter.defaultCode;
  }

  String _constructorCall(
    FlaxCodegenClassModel type,
    FlaxCodegenConstructorModel constructor, {
    String? scalar,
    Set<String> omitted = const {},
    bool proxyImplementation = false,
  }) {
    if (proxyImplementation) {
      final proxy = type.proxy!;
      final args = [
        for (final (name, callback) in proxy.callbacks)
          _cast(
            'values[${_quote('@$name')}]',
            _proxyCallbackType(proxy, name, callback),
          ),
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
      name += scalar == null ? _typeArgs(type.typeArguments) : '<$scalar>';
    }
    if (constructor.name.isNotEmpty) name += '.${constructor.name}';
    final arguments = <String>[if (leased) 'lease'];
    for (final parameter in constructor.parameters) {
      if (omitted.contains(parameter.name)) continue;
      final routeBuilder =
          type.category == FlaxCodegenClassCategory.route &&
          parameter.type.category == FlaxCodegenTypeCategory.callback &&
          parameter.type.result!.category == FlaxCodegenTypeCategory.widget;
      final value = routeBuilder
          ? 'lease.builder(${_quote(parameter.name)})'
          : _cast(
              'values[${_quote(parameter.name)}]',
              parameter.type,
              scalar: scalar ?? 'Object',
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
    if (type.genericScalar) {
      final scalar = ctor.parameters.firstWhere(
        (p) => p.type.category == FlaxCodegenTypeCategory.scalar,
      );
      out.writeln(
        'if (values[${_quote(scalar.name)}] is String) '
        'return ${_constructorCall(type, ctor, scalar: 'String', proxyImplementation: proxyImplementation)};',
      );
      out.writeln(
        'return ${_constructorCall(type, ctor, scalar: 'int', proxyImplementation: proxyImplementation)};',
      );
      return;
    }
    final optional = ctor.parameters.where((p) => p.omitWhenAbsent).toList();
    // Direct Dart calls must preserve omission for private defaults and sentinels.
    // N such parameters require 2^N call combinations; fixtures cover this cost.
    void emit(int index, Set<String> omitted) {
      if (index == optional.length) {
        out.writeln(
          'return ${_constructorCall(type, ctor, omitted: omitted, proxyImplementation: proxyImplementation)};',
        );
        return;
      }
      final name = optional[index].name;
      out.writeln('if (!values.containsKey(${_quote(name)})) {');
      emit(index + 1, {...omitted, name});
      out.writeln('}');
      emit(index + 1, omitted);
    }

    emit(0, {});
  }

  void _emitCallableCall(
    StringBuffer out,
    FlaxCodegenMethodModel method,
    String Function(String) target,
  ) {
    final optional = method.parameters.where((p) => p.omitWhenAbsent).toList();
    void emitCall(int index, Set<String> omitted) {
      if (index < optional.length) {
        final name = optional[index].name;
        out.writeln('if (!values.containsKey(${_quote(name)})) {');
        emitCall(index + 1, {...omitted, name});
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
    if (module.classes.any((c) => c.proxy?.kind == 'host')) {
      return _hostDart(module);
    }
    final out = StringBuffer(
      '''// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import
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
      out.writeln('}),');
    }
    for (final type in module.classes) {
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
            '], matches: _is${type.name}, methods: ${_methods(type)}, staticGetters: {',
          );
          for (final getter in type.staticGetters) {
            out.write(
              '${_quote(getter.name)}: FlaxStaticGetter(${_ref(getter.type)}, _${type.name}_static_${getter.name}),',
            );
          }
          out.write('}');
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
        '}, _${type.name}Host.new, fixedArguments: ${type.widgetInterfaces.isNotEmpty}, methods: ${_methods(type)}),',
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
      'uiProtocol: $_generatedUiProtocol, '
      'requiredCapabilities: ${_capabilitiesDartLiteral(module.requiredCapabilities)});',
    );
    for (final extension in module.extensions.where((e) => !e.isReference)) {
      for (final member in extension.members) {
        final call = member.call;
        out.writeln(
          'Object? _extension_${extension.name}_${call.name}(Map<String, Object?> values) {',
        );
        String genericArguments(List<FlaxCodegenGenericParameter> parameters) =>
            parameters.isEmpty
            ? ''
            : '<${parameters.map((p) => _dartType(p.defaultType!)).join(', ')}>';
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
      if (type.kind == 'object' ||
          type.kind == 'widgetInterface' ||
          type.kind == 'stream') {
        out.writeln(
          'bool _is${type.name}(Object value) => value is ${_dartName(type.name)}${_typeArgs(type.typeArguments)};',
        );
      }
      for (final getter in type.getters.where(
        (_) => {'context', 'state', 'object', 'stream'}.contains(type.kind),
      )) {
        final read =
            '(value as ${_dartName(type.name)}${_typeArgs(type.typeArguments)}).${getter.name}';
        out.writeln(
          'Object? _${type.name}_${getter.name}(Object value) '
          '${getter.type.kind == 'void' ? '{ $read; return null; }' : '=> $read;'}',
        );
      }
      for (final getter in type.staticGetters) {
        out.writeln(
          'Object? _${type.name}_static_${getter.name}() => ${_dartName(type.name)}.${getter.name};',
        );
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
        _emitCallableCall(
          out,
          method,
          (args) => _methodCall(type, method, args),
        );
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
${type.widgetGetters.map((g) => '  @override\n  ${_dartType(g.type)} get ${g.name} => (configuration as ${_dartName(type.name)}).${g.name};').join('\n')}
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
      if (type.proxy == null) {
        for (final ctor in type.constructors) {
          out.writeln('case ${_quote(ctor.name)}:');
          _emitConstructorCalls(out, type, ctor);
        }
      } else {
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
        final positional = ctor.parameters
            .where((p) => p.positional)
            .map((p) => '${_dartType(p.type)} ${p.name}')
            .join(', ');
        final named = ctor.parameters
            .where((p) => !p.positional)
            .map((p) => 'required ${_dartType(p.type)} ${p.name}')
            .join(', ');
        final args = ctor.parameters
            .map((p) => '${p.positional ? '' : '${p.name}: '}${p.name}')
            .join(', ');
        out.writeln(
          '_${type.name}${ctor.name.isEmpty ? '' : '.${ctor.name}'}(this._lease${positional.isEmpty ? '' : ', $positional'}${named.isEmpty ? '' : ', {$named}'}) : super${ctor.name.isEmpty ? '' : '.${ctor.name}'}($args) { _lease.onDiscard = dispose; }',
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
        final positional = ctor.parameters
            .where((p) => p.positional)
            .map((p) => '${_dartType(p.type)} super.${p.name}')
            .join(', ');
        final named = ctor.parameters
            .where((p) => !p.positional)
            .map(
              (p) =>
                  '${p.omitWhenAbsent ? '' : 'required '}${_dartType(p.type)} super.${p.name}',
            )
            .join(', ');
        out.writeln(
          '_${type.name}${ctor.name.isEmpty ? '' : '.${ctor.name}'}(this.flaxPageLease${positional.isEmpty ? '' : ', $positional'}${named.isEmpty ? '' : ', {$named}'})${ctor.name.isEmpty ? '' : ' : super.${ctor.name}()'};',
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
        'final class _${type.name}Proxy ${proxy.kind} ${_dartName(type.name)}${_typeArgs(type.typeArguments)} {',
      );
      for (final (name, callback) in proxy.callbacks) {
        out.writeln(
          'final ${_dartType(_proxyCallbackType(proxy, name, callback))} _${name.replaceAll(':', '_')};',
        );
      }
      if (proxy.methods.any(
        (method) => proxy.hasSuperMethod(method.name) && method.mustCallSuper,
      )) {
        out.writeln('String? _flaxActiveSuperMethod;');
        out.writeln('bool _flaxCalledSuper = false;');
      }
      final fields = proxy.callbacks
          .map((c) => 'this._${c.$1.replaceAll(':', '_')}')
          .toList();
      fields.addAll(
        ctor.parameters
            .where((p) => p.positional)
            .map((p) => '${_dartType(p.type)} ${p.name}'),
      );
      final named = ctor.parameters
          .where((p) => !p.positional)
          .map(
            (p) =>
                '${p.required ? 'required ' : ''}${_dartType(p.type)} ${p.name}${p.required ? '' : ' = ${_default(p)}'}',
          )
          .toList();
      if (named.isNotEmpty) fields.add('{${named.join(', ')}}');
      final superArgs = ctor.parameters
          .map((p) => '${p.positional ? '' : '${p.name}: '}${p.name}')
          .join(', ');
      out.writeln(
        '_${type.name}Proxy(${fields.join(', ')})${proxy.kind == 'extends' ? ' : super${ctor.name.isEmpty ? '' : '.${ctor.name}'}($superArgs)' : ''};',
      );
      for (final method in proxy.methods) {
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
          '${_dartDeclaredType(method.result, generic: generic)} ${method.name}${_dartGenerics(method.typeParameters)}(${declarations.join(', ')}) {',
        );
        final genericUse = method.typeParameters.isEmpty
            ? ''
            : '<${method.typeParameters.map((p) => p.name).join(', ')}>';
        final callbackTarget = superBacked
            ? '_call_${method.name}$genericUse'
            : '_call_${method.name}$genericUse';
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
          bool checkRequiredSuper = false,
        }) {
          final arguments = <String>[
            for (var i = 0; i < count; i++)
              positional[i].required
                  ? positional[i].name
                  : '${positional[i].name} as ${_dartDeclaredType(positional[i].type, generic: generic)}',
            for (final parameter in namedParameters)
              if (!omitted.contains(parameter.name))
                '${parameter.name}: ${parameter.required ? parameter.name : '${parameter.name} as ${_dartDeclaredType(parameter.type, generic: generic)}'}',
          ];
          final call =
              '${directSuper ? superTarget : callbackTarget}(${arguments.join(', ')})';
          if (checkRequiredSuper) {
            if (method.result.kind == 'void') {
              out.writeln('$call;');
              out.writeln(
                "if (!_flaxCalledSuper) throw StateError('${method.name} must call super.${method.name}()');",
              );
              out.writeln('return;');
            } else {
              out.writeln('final result = $call;');
              final asyncResult = {
                'future',
                'futureOr',
              }.contains(method.result.kind);
              if (asyncResult) {
                final item = _dartDeclaredType(
                  method.result.item!,
                  generic: generic,
                );
                if (method.result.kind == 'futureOr') {
                  out.writeln(
                    'if (!_flaxCalledSuper && result is Future<$item>) {',
                  );
                  out.writeln(
                    "return result.then<$item>((_) => throw StateError('${method.name} must call super.${method.name}()'));",
                  );
                  out.writeln('}');
                } else {
                  out.writeln('if (!_flaxCalledSuper) {');
                  out.writeln(
                    "return result.then<$item>((_) => throw StateError('${method.name} must call super.${method.name}()'));",
                  );
                  out.writeln('}');
                  out.writeln('return result;');
                  return;
                }
              }
              out.writeln(
                "if (!_flaxCalledSuper) throw StateError('${method.name} must call super.${method.name}()');",
              );
              out.writeln('return result;');
            }
            return;
          }
          out.writeln(
            method.result.kind == 'void' ? '$call; return;' : 'return $call;',
          );
        }

        final requiredCount = positional.where((p) => p.required).length;
        void emitDispatch({
          required bool directSuper,
          bool checkRequiredSuper = false,
        }) {
          if (optional.isNotEmpty) {
            void emitPosition(int count) {
              if (count == positional.length) {
                writeCall(
                  count,
                  const {},
                  directSuper: directSuper,
                  checkRequiredSuper: checkRequiredSuper,
                );
                return;
              }
              out.writeln(
                'if (identical(${positional[count].name}, _flaxOmitted)) {',
              );
              writeCall(
                count,
                const {},
                directSuper: directSuper,
                checkRequiredSuper: checkRequiredSuper,
              );
              out.writeln('}');
              emitPosition(count + 1);
            }

            emitPosition(requiredCount);
            return;
          }
          void emitNamed(int index, Set<String> omitted) {
            if (index == namedParameters.length) {
              writeCall(
                positional.length,
                omitted,
                directSuper: directSuper,
                checkRequiredSuper: checkRequiredSuper,
              );
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

        if (superBacked) {
          out.writeln('if (_call_${method.name} == null) {');
          emitDispatch(directSuper: true);
          out.writeln('}');
        }
        if (superBacked && method.mustCallSuper) {
          out.writeln(
            'final _flaxPreviousSuperMethod = _flaxActiveSuperMethod;',
          );
          out.writeln('final _flaxPreviousCalledSuper = _flaxCalledSuper;');
          out.writeln('_flaxActiveSuperMethod = ${_quote(method.name)};');
          out.writeln('_flaxCalledSuper = false;');
          out.writeln('try {');
          emitDispatch(directSuper: false, checkRequiredSuper: true);
          out.writeln('} finally {');
          out.writeln('_flaxActiveSuperMethod = _flaxPreviousSuperMethod;');
          out.writeln('_flaxCalledSuper = _flaxPreviousCalledSuper;');
          out.writeln('}');
        } else {
          emitDispatch(directSuper: false);
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
      for (final getter in proxy.getters) {
        if (proxy.kind == 'extends' && proxy.hasSuperGetter(getter.name)) {
          if (getter.type.kind == 'void') {
            out.writeln(
              '@override void get ${getter.name} { final callback = _get_${getter.name}; if (callback == null) { super.${getter.name}; return; } callback(); }',
            );
            out.writeln(
              'void get _flaxSuperGet_${getter.name} { super.${getter.name}; }',
            );
          } else {
            out.writeln(
              '@override ${_dartType(getter.type)} get ${getter.name} { final callback = _get_${getter.name}; return callback == null ? super.${getter.name} : callback(); }',
            );
            out.writeln(
              '${_dartType(getter.type)} get _flaxSuperGet_${getter.name} => super.${getter.name};',
            );
          }
        } else {
          out.writeln(
            '@override ${_dartType(getter.type)} get ${getter.name} => _get_${getter.name}();',
          );
        }
      }
      for (final setter in proxy.setters) {
        if (proxy.kind == 'extends' && proxy.hasSuperSetter(setter.name)) {
          out.writeln(
            '@override set ${setter.name}(${_dartType(setter.type)} value) { final callback = _set_${setter.name}; if (callback == null) { super.${setter.name} = value; return; } callback(value); }',
          );
          out.writeln(
            'void _flaxSuperSet_${setter.name}(${_dartType(setter.type)} value) { super.${setter.name} = value; }',
          );
        } else {
          out.writeln(
            '@override set ${setter.name}(${_dartType(setter.type)} value) => _set_${setter.name}(value);',
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
            '${_dartName(owner.name)}.${factory.name}<${factory.typeParameters.map((parameter) => _dartType(_inferDeferredArguments(factory, specialized.result)[parameter.name]!)).join(', ')}>($args)',
      );
      out.writeln('}');
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
        'Object ${entry.value}(FlaxCallback callback) => ${_dartGenerics(type.typeParameters)}(${requiredParameters.join(', ')}) {',
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
          (result.kind != 'future' || result.item!.kind != 'void');
      if (result.kind == 'void') {
        out.writeln('callback.call(positional, named);');
      } else if (result.kind == 'future') {
        if (result.nullable) {
          out.writeln('final result = callback.call(positional, named);');
          out.writeln('if (result == null) return null;');
          out.writeln(
            _futureCallbackReturn('result', result.item!, generic: generic),
          );
        } else {
          out.writeln(
            _futureCallbackReturn(
              'callback.call(positional, named)',
              result.item!,
              generic: generic,
            ),
          );
        }
      } else {
        out.writeln(
          'return ${_callbackResultCast('callback.call(positional, named)', result, generic: generic)};',
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
          '(function as $functionType)${type.typeParameters.isEmpty ? '' : '<${type.typeParameters.map((p) => _dartType(p.defaultType!)).join(', ')}>'}';
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
    for (final entry in _records.values) {
      final (type, name) = entry;
      final dartType = _dartRecordType(type);
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
    }
    for (final entry in _futures.values) {
      final (type, name) = entry;
      final item = _dartType(type);
      if (type.kind == 'void') {
        out.writeln(
          'Future<Object?> ${name}Adapt(Future<Object?> value) => value.then<void>((_) {});',
        );
      } else if (item == 'Object?') {
        out.writeln(
          'Future<Object?> ${name}Adapt(Future<Object?> value) => value;',
        );
      } else {
        final converted = _futureCompletionValue('value', type, generic: false);
        out.writeln(
          'Future<Object?> ${name}Adapt(Future<Object?> value) => value.then<$item>((value) => $converted);',
        );
      }
    }
    for (final entry in _streams.values) {
      final (type, name) = entry;
      final stream = _dartName('Stream');
      final item = _dartType(type.item!);
      final dartStream = '$stream<$item>';
      out.writeln('bool ${name}Matches(Object value) => value is $dartStream;');
      if (item == 'Object?') {
        out.writeln(
          '$stream<Object?> ${name}Adapt(Object value) => value as $dartStream;',
        );
      } else {
        out.writeln(
          '$stream<Object?> ${name}Adapt(Object value) => '
          '(value is $dartStream ? value : (value as $stream<Object?>).map<$item>((event) => event as $item)) as $stream<Object?>;',
        );
      }
    }
    return out.toString();
  }

  String _futureCompletionValue(
    String value,
    FlaxCodegenTypeRef type, {
    required bool generic,
    bool callback = false,
  }) {
    if (type.kind == 'future') {
      final item = _dartDeclaredType(type.item!, generic: generic);
      final nested = _futureCompletionValue(
        value,
        type.item!,
        generic: generic,
        callback: callback,
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
      );
      return type.nullable ? '($value == null ? null : $nested)' : nested;
    }
    if (type.kind == 'void') return 'null';
    if (callback) {
      return _callbackResultCast(value, type, generic: generic);
    }
    final declared = _dartType(type);
    return declared == 'Object?' ? value : '$value as $declared';
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
    if (generic) return '_genericCallbackResult<$declared>($value)';
    return declared == 'Object?' ? value : '$value as $declared';
  }

  /// A fixed host supplies ownership; these mixins supply only typed dispatch.
  String _hostDart(FlaxCodegenModuleModel module) {
    final out = StringBuffer(
      '// GENERATED CODE. Selected host overrides; do not edit.\n// Regenerate with dart run melos run bindings:generate.\n',
    );
    for (final entry in _dartImports.entries) {
      out.writeln("import '${entry.key}' as ${entry.value};");
    }
    for (final type in module.classes.where((c) => c.proxy?.kind == 'host')) {
      final proxy = type.proxy!;
      out.writeln(
        'mixin Flax${type.name}Proxy on ${_dartName(type.name)}${_typeArgs(type.typeArguments)} {',
      );
      out.writeln(
        'Object? flaxInvoke(String method, List<Object?> arguments, {bool requiresSuper = false});',
      );
      for (final method in proxy.methods) {
        if (method.mustCallSuper) {
          out.writeln(
            '// JS explicitly calls the direct super entry during this override.',
          );
        }
        final args = method.parameters
            .map((p) => '${_dartType(p.type)} ${p.name}')
            .join(', ');
        final call =
            'flaxInvoke(${_quote(method.name)}, [${method.parameters.map((p) => p.name).join(', ')}], requiresSuper: ${method.mustCallSuper})';
        out.writeln('@override');
        if (method.mustCallSuper) out.writeln('// ignore: must_call_super');
        out.writeln('${_dartType(method.result)} ${method.name}($args) {');
        out.writeln(
          method.result.kind == 'void'
              ? '$call;'
              : 'return ${_cast(call, method.result)};',
        );
        out.writeln('}');
      }
      out.writeln(
        'Object? flaxSuper(String method, List<Object?> args) { switch (method) {',
      );
      for (final name in proxy.superMethods) {
        final method = proxy.methods.firstWhere((m) => m.name == name);
        final args = [
          for (var i = 0; i < method.parameters.length; i++)
            _cast('args[$i]', method.parameters[i].type),
        ].join(', ');
        out.writeln('case ${_quote(name)}:');
        out.writeln(
          'if (${method.parameters.isEmpty ? 'args.isNotEmpty' : 'args.length != ${method.parameters.length}'}) throw ArgumentError("Invalid super arity");',
        );
        out.writeln(
          method.result.kind == 'void'
              ? 'super.$name($args); return null;'
              : 'return super.$name($args);',
        );
      }
      out.writeln(
        'default: throw ArgumentError("Unselected super method: \$method"); }}',
      );
      out.writeln('}');
    }
    return out.toString();
  }

  String _methodCall(
    FlaxCodegenClassModel type,
    FlaxCodegenMethodModel method,
    String args,
  ) {
    final receiver =
        'receiver as ${_dartName(type.name)}${_typeArgs(type.typeArguments)}';

    final target = method.instance ? '($receiver)' : _dartName(type.name);
    return '$target.${method.name}${_typeArgs(method.typeArguments)}($args)';
  }

  List<FlaxCodegenConstructorModel> _bindingConstructors(
    FlaxCodegenClassModel type,
  ) {
    if (type.proxy == null) return type.constructors;
    return [
      if (type.proxy!.kind == 'implements') ...type.constructors,
      FlaxCodegenConstructorModel('@implementation', [
        ..._proxyConstructor(type).parameters,
        for (final (name, callback) in type.proxy!.callbacks)
          FlaxCodegenParameterModel(
            name: '@$name',
            type: _proxyCallbackType(type.proxy!, name, callback),
            required: !type.proxy!.hasSuperCallback(name),
            positional: false,
            defaultCode: 'null',
            omitWhenAbsent: type.proxy!.hasSuperCallback(name),
          ),
      ]),
    ];
  }

  FlaxCodegenTypeRef _proxyCallbackType(
    FlaxCodegenProxyModel proxy,
    String name,
    FlaxCodegenTypeRef callback,
  ) => proxy.kind == 'extends' && proxy.hasSuperCallback(name)
      ? callback.asNullable()
      : callback;

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
    String tsType(
      FlaxCodegenTypeRef type, {
      bool declarations = true,
      bool input = false,
      bool nominal = false,
    }) {
      if (declarations && type.declaration != null) {
        return tsType(type.declaration!, input: input, nominal: nominal);
      }
      String child(FlaxCodegenTypeRef t, {bool? asInput}) =>
          tsType(t, declarations: declarations, input: asInput ?? input);
      String callback(FlaxCodegenTypeRef callback) {
        final generic = callback.typeParameters.isEmpty
            ? ''
            : '<${callback.typeParameters.map((p) => '${p.name} extends ${child(p.bound)}').join(', ')}>';
        final arguments = callback.parameters
            .where((p) => p.positional)
            .map(
              (p) =>
                  '${p.name}${p.required ? '' : '?'}: ${child(p.type, asInput: !input)}',
            )
            .toList();
        final named = callback.parameters.where((p) => !p.positional).toList();
        if (named.isNotEmpty) {
          final optional = named.every((p) => !p.required);
          arguments.add(
            'options${optional ? '?' : ''}: { ${named.map((p) => '${p.name}${p.required ? '' : '?'}: ${child(p.type, asInput: !input)}${p.required ? '' : ' | undefined'}').join('; ')} }',
          );
        }
        return '($generic(${arguments.join(', ')}) => ${child(callback.result!, asInput: input)})';
      }

      final base = switch (type.category) {
        FlaxCodegenTypeCategory.parameter =>
          genericNames[type.genericIdentity] ?? type.name!,
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
        FlaxCodegenTypeCategory.stream =>
          type.id == null
              ? 'FlaxStreamReference<${child(type.item!)}>'
              : '${_owners[type.id] == module ? '' : '${dependencies[_owners[type.id]]}.'}${type.name}<${child(type.item!)}>',
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

    if (module.classes.any((c) => c.proxy?.kind == 'host')) {
      final out = StringBuffer(
        '// GENERATED CODE. Selected host overrides; do not edit.\n// Regenerate with dart run melos run bindings:generate.\n',
      );
      out.writeln("import type { Widget } from '@flax/core/bindings';");
      if (module.typedefs.isNotEmpty) {
        out.writeln(
          "import type { NavigationData, DartIterable, DartIterableInput, DartList, DartListInput, DartMap, DartMapInput, DartSet, DartSetInput, FlaxStreamReference } from '@flax/core/bindings';",
        );
      }
      for (final entry in dependencies.entries) {
        out.writeln(
          "import type * as ${entry.value} from '${entry.key.jsPackage}';",
        );
      }
      for (final type in module.classes.where((c) => c.proxy?.kind == 'host')) {
        // The public component base supplies its own TS bound. No runtime type tag.
        final generic = type.typeParameters.isEmpty
            ? ''
            : '<${type.typeParameters.map((p) => p.name).join(', ')}>';
        out.writeln('export abstract class ${type.name}Lifecycle$generic {');
        out.writeln(
          'protected abstract invokeSuper(name: string, args: readonly unknown[]): unknown;',
        );
        for (final method in type.proxy!.methods) {
          final args = method.parameters
              .map((p) => '${p.name}: ${tsType(p.type)}')
              .join(', ');
          if (type.proxy!.superMethods.contains(method.name)) {
            out.writeln(
              '${method.name}($args): ${tsType(method.result)} { return this.invokeSuper(${_quote(method.name)}, [${method.parameters.map((p) => p.name).join(', ')}]) as ${tsType(method.result)}; }',
            );
          } else {
            out.writeln(
              'abstract ${method.name}($args): ${tsType(method.result)};',
            );
          }
        }
        out.writeln('}');
      }
      emitTypedefs(out);
      return out.toString();
    }
    final out = StringBuffer(
      '''// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
$_typescriptHostImport
''',
    );
    if (module.classes.any((c) => c.proxy?.kind == 'extends')) {
      out.writeln(
        "import { constructExtendedProxy, invokeProxySuper } from '@flax/core/bindings';",
      );
    }
    for (final entry in dependencies.entries) {
      final valueImport = valueDependencies.contains(entry.key);
      out.writeln(
        "import ${valueImport ? '' : 'type '}* as ${entry.value} from '${entry.key.jsPackage}';",
      );
      if (!valueImport &&
          _typescriptSignatureTypes(module).any(
            (t) => entry.key.classes.any(
              (c) =>
                  c.id == t.id &&
                  (c.kind == 'context' ||
                      c.kind == 'state' ||
                      c.kind == 'object'),
            ),
          )) {
        // Context factories must also exist when the dependency is type-only.
        out.writeln("import '${entry.key.jsPackage}';");
      }
    }
    if (moduleInstallImport == null) {
      _writeTypescriptModuleInstall(out, module);
    } else {
      out.writeln(
        'import { construct, constructProxy, constructObject, '
        'constructDeferredObject, constructStream, constructAsyncIterableStream, '
        'defineObject, defineStream, invokeObject, invokeObjectStatic, '
        'invokeStream, enumValue, defineContext, defineState, contextHandle, '
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
          '${exportPrefix}interface ${type.name} extends DartEnum { readonly type: ${jsonEncode(type.id)}; }',
        );
        out.writeln('${exportPrefix}const ${type.name} = Object.freeze({');
        for (final name in type.enumNames) {
          out.writeln(
            '$name: enumValue<${type.name}>(${jsonEncode(type.id)}, ${jsonEncode(name)}),',
          );
        }
        out.writeln('});');
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
                '${p.name}${p.required ? '' : '?'}: ${tsType(p.type, input: true, declarations: !method.instance)}',
          )
          .toList();
      if (named.isNotEmpty) {
        args.add(
          'options: { ${named.map((p) => namedParameter(p, tsType(p.type, input: true, declarations: !method.instance))).join('; ')} }${named.every((p) => !p.required) ? ' = {}' : ''}',
        );
      }
      target.writeln(
        method.instance
            ? '${method.name}(this: object${args.isEmpty ? '' : ', ${args.join(', ')}'}): ${tsType(method.result, declarations: !method.instance)} {'
            : '${namespace == null ? "function _flaxTopLevel_" : "export namespace $namespace { export function "}${method.name}${generics(method.typeParameters)}(${args.join(', ')}): ${tsType(method.result, declarations: !method.instance)} {',
      );
      target.writeln(
        "if (arguments.length > ${args.length}) throw new TypeError('Too many method arguments');",
      );
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
      if (method.instance) {
        final helper = switch (category) {
          FlaxCodegenClassCategory.object => 'invokeObject',
          FlaxCodegenClassCategory.stream => 'invokeStream',
          _ => 'invokeInstance',
        };
        invocation = '$helper(this, ';
      }
      target.writeln(
        'const _flaxResult = $invocation${jsonEncode(id)}, ${namespace == null || extensionOperation ? "" : "${jsonEncode(method.name)}, "}[$values]);',
      );
      if (method.result.kind != 'void') {
        target.writeln(
          'return _flaxResult as ${tsType(method.result, declarations: !method.instance)};',
        );
      }
      target.writeln(
        method.instance
            ? '},'
            : namespace == null
            ? '}'
            : '} }',
      );
      if (namespace == null && !method.instance) {
        target.writeln(
          'export { _flaxTopLevel_${method.name} as ${method.name} };',
        );
      }
      genericNames = previousGenericNames;
    }

    final staticMethods = StringBuffer();
    void emitProxy(
      StringBuffer target,
      FlaxCodegenClassModel type,
      FlaxCodegenProxyModel proxy,
    ) {
      final ctor = _proxyConstructor(type);
      final params = [
        for (final p in ctor.parameters)
          {'name': p.name, 'required': p.required, 'positional': p.positional},
      ];
      final args = ctor.parameters
          .where((p) => p.positional)
          .map(
            (p) =>
                '${p.name}${p.required ? '' : '?'}: ${tsType(p.type, input: true)}',
          )
          .toList();
      final named = ctor.parameters.where((p) => !p.positional).toList();
      if (named.isNotEmpty) {
        args.add(
          'options${named.every((p) => !p.required) ? '?' : ''}: {${named.map((p) => namedParameter(p, tsType(p.type, input: true))).join('; ')}}',
        );
      }
      if (proxy.kind == 'extends') {
        target.writeln(
          'export abstract class ${type.name}${generics(type.typeParameters)} {',
        );
        target.writeln('constructor(${args.join(', ')}) {');
        target.writeln(
          'constructExtendedProxy(this, ${type.name}.prototype, ${jsonEncode(type.id)}, '
          '${jsonEncode(params)}, Array.from(arguments), '
          '${jsonEncode(proxy.methods.map((m) => m.name).toList())}, '
          '${jsonEncode(proxy.getters.map((g) => g.name).toList())}, '
          '${jsonEncode(proxy.setters.map((s) => s.name).toList())}, '
          '${jsonEncode(proxy.superMethods)});',
        );
        target.writeln('}');

        for (final method in proxy.methods) {
          final positional = method.parameters
              .where((p) => p.positional)
              .map(
                (p) =>
                    '${p.name}${p.required ? '' : '?'}: ${tsType(p.type, input: true)}',
              )
              .toList();
          final named = method.parameters.where((p) => !p.positional).toList();
          final signature = [...positional];
          if (named.isNotEmpty) {
            signature.add(
              'options${named.every((p) => !p.required) ? '?' : ''}: {${named.map((p) => namedParameter(p, tsType(p.type, input: true))).join('; ')}}',
            );
          }
          if (!proxy.hasSuperMethod(method.name)) {
            target.writeln(
              'abstract ${method.name}${generics(method.typeParameters)}(${signature.join(', ')}): ${tsType(method.result)};',
            );
            continue;
          }
          final runtimeSignature = [...positional];
          if (named.isNotEmpty) {
            runtimeSignature.add(
              'options: { ${named.map((p) => namedParameter(p, tsType(p.type, input: true))).join('; ')} }${named.every((p) => !p.required) ? ' = {}' : ''}',
            );
          }
          target.writeln(
            '${method.name}${generics(method.typeParameters)}(${runtimeSignature.join(', ')}): ${tsType(method.result)} {',
          );
          target.writeln(
            "if (arguments.length > ${runtimeSignature.length}) throw new TypeError('Too many method arguments');",
          );
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
          target.writeln(
            'const _flaxResult = invokeProxySuper(this, ${jsonEncode(type.id)}, ${jsonEncode(method.name)}, [$values]);',
          );
          if (method.result.kind != 'void') {
            target.writeln('return _flaxResult as ${tsType(method.result)};');
          }
          target.writeln('}');
        }
        for (final getter in proxy.getters) {
          if (!proxy.hasSuperGetter(getter.name)) {
            target.writeln(
              'abstract get ${getter.name}(): ${tsType(getter.type)};',
            );
            continue;
          }
          target.writeln('get ${getter.name}(): ${tsType(getter.type)} {');
          if (getter.type.kind == 'void') {
            target.writeln(
              'invokeProxySuper(this, ${jsonEncode(type.id)}, ${jsonEncode('get:${getter.name}')}, []);',
            );
          } else {
            target.writeln(
              'return invokeProxySuper(this, ${jsonEncode(type.id)}, ${jsonEncode('get:${getter.name}')}, []) as ${tsType(getter.type)};',
            );
          }
          target.writeln('}');
        }
        for (final setter in proxy.setters) {
          if (!proxy.hasSuperSetter(setter.name)) {
            target.writeln(
              'abstract set ${setter.name}(value: ${tsType(setter.type, input: true)});',
            );
            continue;
          }
          target.writeln(
            'set ${setter.name}(value: ${tsType(setter.type, input: true)}) { '
            'invokeProxySuper(this, ${jsonEncode(type.id)}, ${jsonEncode('set:${setter.name}')}, [value]); }',
          );
        }
        target.writeln('}');
      }
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
        'export namespace ${type.name} { export function implement${generics(type.typeParameters)}(args: [${args.join(', ')}], implementation: {$implementation}): ${type.name}${genericUse(type)} {',
      );
      target.writeln(
        'return constructProxy(${jsonEncode(type.id)}, ${jsonEncode(params)}, args, implementation, ${jsonEncode(requiredMethods.map((m) => m.name).toList())}, ${jsonEncode(requiredGetters.map((g) => g.name).toList())}, ${jsonEncode(requiredSetters.map((s) => s.name).toList())}) as ${type.name}${genericUse(type)}; } }',
      );
    }

    for (final type in module.classes) {
      final exportPrefix = module.internalTypeNames.contains(type.name)
          ? ''
          : 'export ';
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
      final stateMethods = StringBuffer();
      for (final method in type.methods) {
        emitTsCallable(
          method.instance ? stateMethods : staticMethods,
          method,
          id: type.id,
          namespace: type.name,
          category: type.category,
        );
      }
      if (type.kind == 'object') {
        final listeners = _sortedStringMap(type.listenerPairs).values.toList();
        out.writeln(
          'defineObject(${jsonEncode(type.id)}, ${jsonEncode(type.getters.map((g) => g.name).toList())}, ${jsonEncode(type.setters.map((g) => g.name).toList())}, {$stateMethods}, ${jsonEncode(listeners)});',
        );
      }
      if (type.kind == 'stream') {
        out.writeln(
          'defineStream(${jsonEncode(type.id)}, ${jsonEncode(type.getters.map((g) => g.name).toList())}, {$stateMethods});',
        );
        if (type.asyncIterableFactory case final factory?) {
          final parameter = type.typeParameters.single;
          out.writeln('export namespace ${type.name} {');
          out.writeln(
            'export function $factory${generics([parameter], defaults: false)}(source: AsyncIterable<${parameter.name}>): ${type.name}<${parameter.name}> {',
          );
          out.writeln(
            'return constructAsyncIterableStream(${jsonEncode(type.id)}, source) as ${type.name}<${parameter.name}>;',
          );
          out.writeln('} }');
        }
      }
      if (type.kind == 'object') {
        // A namespace with only declarations is erased by TypeScript. Give
        // static-only reference types a real object without a fake constructor.
        final staticObject =
            type.constructors.isEmpty &&
            type.proxy == null &&
            type.methods.every((m) => m.instance);
        if (staticObject && type.staticGetters.isNotEmpty) {
          staticMethods.writeln(
            'export const ${type.name} = {} as {${type.staticGetters.map((g) => 'readonly ${g.name}: ${tsType(g.type)}').join(';')}};',
          );
        }
        for (final getter in type.staticGetters) {
          if (!staticObject) {
            staticMethods.writeln(
              'export namespace ${type.name} { export declare const ${getter.name}: ${tsType(getter.type)}; }',
            );
          }
          staticMethods.writeln(
            'Object.defineProperty(${type.name}, ${jsonEncode(getter.name)}, { get: () => invokeObjectStatic(${jsonEncode(type.id)}, ${jsonEncode(getter.name)}) });',
          );
        }
      }
      if (type.kind == 'state') {
        out.writeln(
          'defineState(${jsonEncode(type.id)}, ${jsonEncode(type.getters.map((g) => g.name).toList())}, {$stateMethods});',
        );
      }
      if (type.constructors.isEmpty && type.proxy == null) {
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
      if (type.widgetInterfaces.isNotEmpty) {
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
      if (type.proxy case final proxy? when !delayedProxy) {
        emitProxy(out, type, proxy);
        continue;
      }
      for (final ctor in type.constructors) {
        final functionName = ctor.name.isEmpty
            ? (type.jsName ?? type.name)
            : ctor.name;
        if (ctor.name.isNotEmpty) {
          out.writeln('export namespace ${type.name} {');
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
          'export function $functionName${generics(type.typeParameters)}(${args.join(', ')}): ${type.name}${genericUse(type)} {',
        );
        out.writeln(
          "if (arguments.length > ${args.length}) throw new TypeError('Too many constructor arguments');",
        );
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
      if (delayedProxy) emitProxy(out, type, type.proxy!);
    }
    emitTypedefs(out);
    out.write(staticMethods);
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
          return 'invokeTopLevel(${jsonEncode(setter.id)}, [value])';
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
    return out.toString();
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
      'const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = ${module.name}BindingModule;',
    );
  }
}
