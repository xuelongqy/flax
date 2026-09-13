import 'dart:collection';

import 'diagnostic.dart';
import 'identity.dart';
import 'model.dart';

const _typeKeys = {
  'kind',
  'id',
  'name',
  'nullable',
  'item',
  'key',
  'parameters',
  'typeParameters',
  'result',
  'typeArguments',
  'dartArguments',
  'primitiveKinds',
  'declaration',
  'tsArguments',
  'slot',
};

const _parameterKeys = {
  'name',
  'type',
  'required',
  'positional',
  'defaultCode',
  'omitWhenAbsent',
  'independentWidgetResult',
  'snapshot',
  'encodeKind',
  'scoped',
};

const _genericKeys = {'name', 'bound', 'defaultType', 'slot'};

const _getterKeys = {'name', 'type', 'encodeKind'};

const _constructorKeys = {'name', 'parameters'};

const _methodKeys = {
  'name',
  'parameters',
  'result',
  'instance',
  'typeArguments',
  'startsRoute',
  'typeParameters',
  'mustCallSuper',
  'deferredFactory',
};

const _proxyKeys = {'kind', 'methods', 'superMethods', 'getters', 'setters'};

const _pageAdapterKeys = {'library', 'function'};

const _routeCallKeys = {'context', 'rootNavigator', 'builders'};

const _classKeys = {
  'name',
  'id',
  'kind',
  'jsName',
  'genericScalar',
  'asyncIterableFactory',
  'typeArguments',
  'typeParameters',
  'constructors',
  'getters',
  'setters',
  'staticGetters',
  'methods',
  'widgetInterfaces',
  'widgetGetters',
  'supertypes',
  'superTypes',
  'proxy',
  'pageAdapter',
  'disposeMethod',
  'listenerPairs',
};

const _namedTypeKeys = {'name', 'id', 'enumNames', 'typeParameters'};

const _functionKeys = {'id', 'call', 'route'};

const _snapshotKeys = {'name', 'id', 'parent', 'fields'};

const _snapshotFieldKeys = {
  'name',
  'kind',
  'enumNames',
  'snapshot',
  'nullable',
};

const _moduleKeys = {
  'library',
  'jsPackage',
  'typeLibraries',
  'classes',
  'types',
  'functions',
  'snapshots',
};

const _sourceIdentityKeys = {'kind', 'originatingUri', 'name'};

const _identityKeys = {'sourceIdentity', 'wireId', 'owner'};

/// Manifest 2 ownership row: originating source, authoritative wireId, and
/// whether this module owns the identity. Module-wide ownership and duplicate
/// checks remain on the envelope slice.
final class FlaxCodegenManifestV2Identity {
  const FlaxCodegenManifestV2Identity({
    required this.sourceIdentity,
    required this.wireId,
    required this.owner,
  });

  final FlaxCodegenSourceIdentity sourceIdentity;
  final FlaxCodegenWireId wireId;
  final bool owner;
}

/// Fail-closed Manifest 2 diagnostics. JSON values have no spans; [source]
/// and the RFC 6901 [FlaxCodegenDiagnostic.pointer] locate each issue.
final class FlaxCodegenManifestV2Diagnostics {
  FlaxCodegenManifestV2Diagnostics(this.source);

  final String source;
  final List<FlaxCodegenDiagnostic> items = [];

  void add({required String pointer, required String message}) {
    items.add(
      FlaxCodegenDiagnostic(
        code: FlaxCodegenDiagnosticCode.manifest,
        source: source,
        offset: 0,
        line: 1,
        column: 1,
        pointer: pointer,
        message: message,
      ),
    );
  }

  void throwIfAny() {
    if (items.isEmpty) return;
    throw FlaxCodegenException(items);
  }
}

/// Joins [parent] and one RFC 6901 reference token.
String flaxCodegenManifestV2Pointer(String parent, String token) =>
    '$parent/${FlaxCodegenDiagnostic.jsonPointerToken(token)}';

/// Closed-key JSON object reader shared by Manifest 2 codecs.
final class FlaxCodegenManifestV2Object {
  FlaxCodegenManifestV2Object._(this.diagnostics, this.pointer, this._fields);

  final FlaxCodegenManifestV2Diagnostics diagnostics;
  final String pointer;
  final Map<String, Object?> _fields;

  static FlaxCodegenManifestV2Object? read(
    FlaxCodegenManifestV2Diagnostics diagnostics,
    Object? value,
    String pointer,
    Set<String> keys,
  ) {
    final entries = _jsonObjectEntries(value);
    if (entries == null) {
      diagnostics.add(pointer: pointer, message: 'Expected a mapping.');
      return null;
    }
    final fields = <String, Object?>{};
    for (final entry in entries) {
      final key = entry.key;
      if (key is! String) {
        diagnostics.add(
          pointer: pointer,
          message: 'Mapping keys must be strings.',
        );
        continue;
      }
      if (!keys.contains(key)) {
        diagnostics.add(
          pointer: flaxCodegenManifestV2Pointer(pointer, key),
          message: 'Unknown field.',
        );
      }
      fields[key] = entry.value;
    }
    return FlaxCodegenManifestV2Object._(diagnostics, pointer, fields);
  }

  String child(String key) => flaxCodegenManifestV2Pointer(pointer, key);

  String? requiredString(String key) {
    final value = _required(key);
    if (value is _Missing) return null;
    if (value is! String) {
      diagnostics.add(pointer: child(key), message: 'Expected a string.');
      return null;
    }
    return value;
  }

  String? nullableString(String key) {
    final value = _required(key);
    if (value is _Missing) return null;
    if (value == null) return null;
    if (value is! String) {
      diagnostics.add(
        pointer: child(key),
        message: 'Expected a string or null.',
      );
      return null;
    }
    return value;
  }

  bool? requiredBool(String key) {
    final value = _required(key);
    if (value is _Missing) return null;
    if (value is! bool) {
      diagnostics.add(pointer: child(key), message: 'Expected a boolean.');
      return null;
    }
    return value;
  }

  T? requiredValue<T>(
    String key,
    T? Function(Object? value, String pointer) read,
  ) {
    final value = _required(key);
    if (value is _Missing) return null;
    return read(value, child(key));
  }

  T? nullableValue<T>(
    String key,
    T? Function(Object? value, String pointer) read,
  ) {
    final value = _required(key);
    if (value is _Missing) return null;
    if (value == null) return null;
    return read(value, child(key));
  }

  List<T>? requiredList<T>(
    String key,
    T? Function(Object? value, String pointer) read,
  ) {
    final value = _required(key);
    if (value is _Missing) return null;
    final items = _jsonList(value);
    if (items == null) {
      diagnostics.add(pointer: child(key), message: 'Expected a list.');
      return null;
    }
    final decoded = <T>[];
    var ok = true;
    for (var index = 0; index < items.length; index++) {
      final item = read(
        items[index],
        flaxCodegenManifestV2Pointer(child(key), '$index'),
      );
      if (item == null) {
        ok = false;
        continue;
      }
      decoded.add(item);
    }
    return ok ? decoded : null;
  }

  List<String>? requiredStringList(String key) =>
      requiredList(key, _readRequiredString);

  Map<String, String>? requiredStringMap(String key) {
    final value = _required(key);
    if (value is _Missing) return null;
    return _decodeStringMap(diagnostics, value, child(key));
  }

  Object? _required(String key) {
    if (!_fields.containsKey(key)) {
      diagnostics.add(pointer: child(key), message: 'Missing field.');
      return const _Missing();
    }
    return _fields[key];
  }

  String? _readRequiredString(Object? value, String pointer) {
    if (value is! String) {
      diagnostics.add(pointer: pointer, message: 'Expected a string.');
      return null;
    }
    return value;
  }
}

final class _Missing {
  const _Missing();
}

abstract final class FlaxCodegenManifestV2Codec {
  static Map<String, Object?> encodeTypeRef(FlaxCodegenTypeRef type) =>
      _encodeType(type);

  static FlaxCodegenTypeRef? decodeTypeRef(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeType(value, diagnostics, pointer);

  static Map<String, Object?> encodeParameter(
    FlaxCodegenParameterModel parameter,
  ) => _encodeParameter(parameter);

  static FlaxCodegenParameterModel? decodeParameter(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeParameter(value, diagnostics, pointer);

  static Map<String, Object?> encodeGenericParameter(
    FlaxCodegenGenericParameter parameter,
  ) => _encodeGeneric(parameter);

  static FlaxCodegenGenericParameter? decodeGenericParameter(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeGeneric(value, diagnostics, pointer);

  static Map<String, Object?> encodeGetter(FlaxCodegenGetterModel getter) =>
      _encodeGetter(getter);

  static FlaxCodegenGetterModel? decodeGetter(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeGetter(value, diagnostics, pointer);

  static Map<String, Object?> encodeConstructor(
    FlaxCodegenConstructorModel constructor,
  ) => _encodeConstructor(constructor);

  static FlaxCodegenConstructorModel? decodeConstructor(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeConstructor(value, diagnostics, pointer);

  static Map<String, Object?> encodeMethod(FlaxCodegenMethodModel method) =>
      _encodeMethod(method);

  static FlaxCodegenMethodModel? decodeMethod(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeMethod(value, diagnostics, pointer);

  static Map<String, Object?> encodeProxy(FlaxCodegenProxyModel proxy) =>
      _encodeProxy(proxy);

  static FlaxCodegenProxyModel? decodeProxy(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeProxy(value, diagnostics, pointer);

  static Map<String, Object?> encodePageAdapter(
    FlaxCodegenPageAdapterModel adapter,
  ) => _encodePageAdapter(adapter);

  static FlaxCodegenPageAdapterModel? decodePageAdapter(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodePageAdapter(value, diagnostics, pointer);

  static Map<String, Object?> encodeRouteCall(
    FlaxCodegenRouteCallModel route,
  ) => _encodeRouteCall(route);

  static FlaxCodegenRouteCallModel? decodeRouteCall(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeRouteCall(value, diagnostics, pointer);

  static Map<String, Object?> encodeClass(FlaxCodegenClassModel type) =>
      _encodeClass(type);

  static FlaxCodegenClassModel? decodeClass(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeClass(value, diagnostics, pointer);

  static Map<String, Object?> encodeNamedType(FlaxCodegenNamedTypeModel type) =>
      _encodeNamedType(type);

  static FlaxCodegenNamedTypeModel? decodeNamedType(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeNamedType(value, diagnostics, pointer);

  static Map<String, Object?> encodeFunction(
    FlaxCodegenFunctionModel function,
  ) => _encodeFunction(function);

  static FlaxCodegenFunctionModel? decodeFunction(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeFunction(value, diagnostics, pointer);

  static Map<String, Object?> encodeSnapshot(
    FlaxCodegenSnapshotModel snapshot,
  ) => _encodeSnapshot(snapshot);

  static FlaxCodegenSnapshotModel? decodeSnapshot(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeSnapshot(value, diagnostics, pointer);

  static Map<String, Object?> encodeSnapshotField(
    FlaxCodegenSnapshotFieldModel field,
  ) => _encodeSnapshotField(field);

  static FlaxCodegenSnapshotFieldModel? decodeSnapshotField(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeSnapshotField(value, diagnostics, pointer);

  static Map<String, Object?> encodeModule(FlaxCodegenModuleModel module) =>
      _encodeModule(module);

  /// Decodes the semantic `model` payload. [name] comes from the envelope
  /// module entry; reconstructed models use empty owner-local output paths.
  static FlaxCodegenModuleModel? decodeModule(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
    String name,
  ) => _decodeModule(value, diagnostics, pointer, name);

  static Map<String, Object?> encodeSourceIdentity(
    FlaxCodegenSourceIdentity identity,
  ) => _encodeSourceIdentity(identity);

  static FlaxCodegenSourceIdentity? decodeSourceIdentity(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeSourceIdentity(value, diagnostics, pointer);

  static Map<String, Object?> encodeIdentity(
    FlaxCodegenManifestV2Identity identity,
  ) => _encodeIdentity(identity);

  static FlaxCodegenManifestV2Identity? decodeIdentity(
    Object? value,
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String pointer,
  ) => _decodeIdentity(value, diagnostics, pointer);
}

Map<String, Object?> _encodeType(
  FlaxCodegenTypeRef type, [
  _SlotEncodeScope? scope,
]) {
  if (type.kind == 'callback') {
    return _encodeCallbackType(type, scope);
  }
  final String? slot;
  if (type.kind == 'parameter') {
    slot = scope?.slotFor(type.genericIdentity);
  } else {
    slot = null;
  }
  return {
    'kind': type.kind,
    'id': type.id,
    'name': type.name,
    'nullable': type.nullable,
    'item': type.item == null ? null : _encodeType(type.item!, scope),
    'key': type.key == null ? null : _encodeType(type.key!, scope),
    'parameters': [
      for (final parameter in type.parameters)
        _encodeParameter(parameter, scope),
    ],
    'typeParameters': [
      for (final parameter in type.typeParameters)
        _encodeGeneric(parameter, scope),
    ],
    'result': type.result == null ? null : _encodeType(type.result!, scope),
    'typeArguments': List<String>.of(type.typeArguments),
    'dartArguments': [
      for (final argument in type.dartArguments) _encodeType(argument, scope),
    ],
    'primitiveKinds': List<String>.of(type.primitiveKinds),
    'declaration': type.declaration == null
        ? null
        : _encodeType(type.declaration!, scope),
    'tsArguments': [
      for (final argument in type.tsArguments) _encodeType(argument, scope),
    ],
    'slot': type.kind == 'parameter' ? slot : null,
  };
}

Map<String, Object?> _encodeCallbackType(
  FlaxCodegenTypeRef type,
  _SlotEncodeScope? parent,
) {
  final scope = parent ?? _SlotEncodeScope();
  final declarationSlots = <String?>[
    for (final parameter in type.typeParameters)
      scope.allocateDeclaration(parameter.genericIdentity),
  ];
  final reserved = scope.takeReserved();
  try {
    // ADR 0022 allocation preorder (not JSON key order).
    final boundJsons = <Map<String, Object?>>[
      for (final parameter in type.typeParameters)
        _encodeType(parameter.bound, scope),
    ];
    final defaultJsons = <Map<String, Object?>?>[
      for (final parameter in type.typeParameters)
        parameter.defaultType == null
            ? null
            : _encodeType(parameter.defaultType!, scope),
    ];
    final dartArgumentJsons = <Map<String, Object?>>[
      for (final argument in type.dartArguments) _encodeType(argument, scope),
    ];
    final parameterTypeJsons = List<Map<String, Object?>?>.filled(
      type.parameters.length,
      null,
    );
    for (var index = 0; index < type.parameters.length; index++) {
      final parameter = type.parameters[index];
      if (!parameter.positional) continue;
      parameterTypeJsons[index] = _encodeType(parameter.type, scope);
    }
    for (final namedIndex in _namedParameterIndexes(type.parameters)) {
      parameterTypeJsons[namedIndex] = _encodeType(
        type.parameters[namedIndex].type,
        scope,
      );
    }
    final resultJson = type.result == null
        ? null
        : _encodeType(type.result!, scope);
    final itemJson = type.item == null ? null : _encodeType(type.item!, scope);
    final keyJson = type.key == null ? null : _encodeType(type.key!, scope);
    final declarationJson = type.declaration == null
        ? null
        : _encodeType(type.declaration!, scope);
    final tsArgumentJsons = <Map<String, Object?>>[
      for (final argument in type.tsArguments) _encodeType(argument, scope),
    ];

    return {
      'kind': type.kind,
      'id': type.id,
      'name': type.name,
      'nullable': type.nullable,
      'item': itemJson,
      'key': keyJson,
      'parameters': [
        for (var index = 0; index < type.parameters.length; index++)
          _encodeParameterWithType(
            type.parameters[index],
            parameterTypeJsons[index]!,
          ),
      ],
      'typeParameters': [
        for (var index = 0; index < type.typeParameters.length; index++)
          {
            'name': type.typeParameters[index].name,
            'bound': boundJsons[index],
            'defaultType': defaultJsons[index],
            'slot': declarationSlots[index],
          },
      ],
      'result': resultJson,
      'typeArguments': List<String>.of(type.typeArguments),
      'dartArguments': dartArgumentJsons,
      'primitiveKinds': List<String>.of(type.primitiveKinds),
      'declaration': declarationJson,
      'tsArguments': tsArgumentJsons,
      'slot': null,
    };
  } finally {
    scope.release(reserved);
  }
}

Map<String, Object?> _encodeParameterWithType(
  FlaxCodegenParameterModel parameter,
  Map<String, Object?> typeJson,
) => {
  'name': parameter.name,
  'type': typeJson,
  'required': parameter.required,
  'positional': parameter.positional,
  'defaultCode': parameter.defaultCode,
  'omitWhenAbsent': parameter.omitWhenAbsent,
  'independentWidgetResult': parameter.independentWidgetResult,
  'snapshot': parameter.snapshot,
  'encodeKind': parameter.encodeKind,
  'scoped': parameter.scoped,
};

/// Named parameter indexes sorted by percent-encoded name (ADR 0022).
List<int> _namedParameterIndexes(List<FlaxCodegenParameterModel> parameters) {
  final indexes = <int>[
    for (var index = 0; index < parameters.length; index++)
      if (!parameters[index].positional) index,
  ];
  indexes.sort((left, right) {
    final leftName = FlaxCodegenPercentEncoding.encode(parameters[left].name);
    final rightName = FlaxCodegenPercentEncoding.encode(parameters[right].name);
    return leftName.compareTo(rightName);
  });
  return indexes;
}

FlaxCodegenTypeRef? _decodeType(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer, [
  _SlotDecodeScope? scope,
]) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _typeKeys,
  );
  if (object == null) return null;
  final kind = object.requiredString('kind');
  if (kind == 'callback') {
    return _decodeCallbackType(object, diagnostics, pointer, scope, start);
  }
  final id = object.nullableString('id');
  final name = object.nullableString('name');
  final nullable = object.requiredBool('nullable');
  final item = object.nullableValue('item', _decodeTypeFn(diagnostics, scope));
  final key = object.nullableValue('key', _decodeTypeFn(diagnostics, scope));
  final parameters = object.requiredList(
    'parameters',
    _decodeParameterFn(diagnostics, scope),
  );
  final typeParameters = object.requiredList(
    'typeParameters',
    _decodeGenericFn(diagnostics, scope),
  );
  final result = object.nullableValue(
    'result',
    _decodeTypeFn(diagnostics, scope),
  );
  final typeArguments = object.requiredStringList('typeArguments');
  final dartArguments = object.requiredList(
    'dartArguments',
    _decodeTypeFn(diagnostics, scope),
  );
  final primitiveKinds = object.requiredStringList('primitiveKinds');
  final declaration = object.nullableValue(
    'declaration',
    _decodeTypeFn(diagnostics, scope),
  );
  final tsArguments = object.requiredList(
    'tsArguments',
    _decodeTypeFn(diagnostics, scope),
  );
  final slot = object.nullableString('slot');
  if (diagnostics.items.length != start ||
      kind == null ||
      nullable == null ||
      parameters == null ||
      typeParameters == null ||
      typeArguments == null ||
      dartArguments == null ||
      primitiveKinds == null ||
      tsArguments == null) {
    return null;
  }
  final slotPointer = flaxCodegenManifestV2Pointer(pointer, 'slot');
  Object? genericIdentity;
  if (kind == 'parameter') {
    genericIdentity = _resolveParameterSlot(
      diagnostics,
      scope,
      slot,
      slotPointer,
    );
  } else if (slot != null) {
    diagnostics.add(pointer: slotPointer, message: 'Unexpected slot.');
  }
  if (diagnostics.items.length != start) return null;
  final type = FlaxCodegenTypeRef(
    kind,
    id: id,
    name: name,
    nullable: nullable,
    item: item,
    key: key,
    parameters: parameters,
    typeParameters: typeParameters,
    result: result,
    typeArguments: typeArguments,
    dartArguments: dartArguments,
    primitiveKinds: primitiveKinds,
    declaration: declaration,
    tsArguments: tsArguments,
    genericIdentity: genericIdentity,
  );
  try {
    type.category;
    type.validate(pointer);
    return type;
  } on StateError {
    diagnostics.add(pointer: pointer, message: 'Invalid type.');
    return null;
  }
}

FlaxCodegenTypeRef? _decodeCallbackType(
  FlaxCodegenManifestV2Object object,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
  _SlotDecodeScope? parent,
  int start,
) {
  final scope = parent ?? _SlotDecodeScope();
  final id = object.nullableString('id');
  final name = object.nullableString('name');
  final nullable = object.requiredBool('nullable');
  final slot = object.nullableString('slot');
  final slotPointer = flaxCodegenManifestV2Pointer(pointer, 'slot');
  if (slot != null) {
    diagnostics.add(pointer: slotPointer, message: 'Unexpected slot.');
  }

  final typeParametersValue = object._fields['typeParameters'];
  if (!object._fields.containsKey('typeParameters')) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'typeParameters'),
      message: 'Missing field.',
    );
  }
  final typeParametersJson = _jsonList(typeParametersValue);
  if (typeParametersValue != null && typeParametersJson == null) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'typeParameters'),
      message: 'Expected a list.',
    );
  }

  final reservedIndexes = <int>[];
  final pendingGenerics = <_PendingGeneric>[];
  if (typeParametersJson != null) {
    final typeParametersPointer = flaxCodegenManifestV2Pointer(
      pointer,
      'typeParameters',
    );
    for (var index = 0; index < typeParametersJson.length; index++) {
      final genericPointer = flaxCodegenManifestV2Pointer(
        typeParametersPointer,
        '$index',
      );
      final pending = _reserveGenericDeclaration(
        typeParametersJson[index],
        diagnostics,
        genericPointer,
        scope,
      );
      if (pending == null) continue;
      reservedIndexes.add(pending.index);
      pendingGenerics.add(pending);
    }
  }

  // ADR 0022: all bounds, then all defaults, then dartArguments, then
  // positional types (source order), named types (percent-encoded name order),
  // then result. Original parameter/typeParameter arrays stay source-ordered.
  final bounds = <FlaxCodegenTypeRef?>[
    for (final pending in pendingGenerics)
      _decodeType(
        pending.boundJson,
        diagnostics,
        flaxCodegenManifestV2Pointer(pending.pointer, 'bound'),
        scope,
      ),
  ];
  final defaults = <FlaxCodegenTypeRef?>[
    for (final pending in pendingGenerics)
      pending.defaultTypeJson == null
          ? null
          : _decodeType(
              pending.defaultTypeJson,
              diagnostics,
              flaxCodegenManifestV2Pointer(pending.pointer, 'defaultType'),
              scope,
            ),
  ];

  final dartArguments = object.requiredList(
    'dartArguments',
    _decodeTypeFn(diagnostics, scope),
  );

  final parametersValue = object._fields['parameters'];
  if (!object._fields.containsKey('parameters')) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'parameters'),
      message: 'Missing field.',
    );
  }
  final parametersJson = _jsonList(parametersValue);
  if (parametersValue != null && parametersJson == null) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'parameters'),
      message: 'Expected a list.',
    );
  }

  final pendingParameters = <_PendingParameter>[];
  if (parametersJson != null) {
    final parametersPointer = flaxCodegenManifestV2Pointer(
      pointer,
      'parameters',
    );
    for (var index = 0; index < parametersJson.length; index++) {
      final parameterPointer = flaxCodegenManifestV2Pointer(
        parametersPointer,
        '$index',
      );
      final pending = _readParameterShell(
        parametersJson[index],
        diagnostics,
        parameterPointer,
      );
      if (pending != null) pendingParameters.add(pending);
    }
  }

  final parameterTypes = List<FlaxCodegenTypeRef?>.filled(
    pendingParameters.length,
    null,
  );
  for (var index = 0; index < pendingParameters.length; index++) {
    final pending = pendingParameters[index];
    if (!pending.positional) continue;
    parameterTypes[index] = _decodeType(
      pending.typeJson,
      diagnostics,
      flaxCodegenManifestV2Pointer(pending.pointer, 'type'),
      scope,
    );
  }
  final namedIndexes =
      <int>[
        for (var index = 0; index < pendingParameters.length; index++)
          if (!pendingParameters[index].positional) index,
      ]..sort((left, right) {
        final leftName = FlaxCodegenPercentEncoding.encode(
          pendingParameters[left].name,
        );
        final rightName = FlaxCodegenPercentEncoding.encode(
          pendingParameters[right].name,
        );
        return leftName.compareTo(rightName);
      });
  for (final index in namedIndexes) {
    final pending = pendingParameters[index];
    parameterTypes[index] = _decodeType(
      pending.typeJson,
      diagnostics,
      flaxCodegenManifestV2Pointer(pending.pointer, 'type'),
      scope,
    );
  }

  final result = object.nullableValue(
    'result',
    _decodeTypeFn(diagnostics, scope),
  );
  final item = object.nullableValue('item', _decodeTypeFn(diagnostics, scope));
  final key = object.nullableValue('key', _decodeTypeFn(diagnostics, scope));
  final typeArguments = object.requiredStringList('typeArguments');
  final primitiveKinds = object.requiredStringList('primitiveKinds');
  final declaration = object.nullableValue(
    'declaration',
    _decodeTypeFn(diagnostics, scope),
  );
  final tsArguments = object.requiredList(
    'tsArguments',
    _decodeTypeFn(diagnostics, scope),
  );

  scope.release(reservedIndexes);

  final typeParameters = <FlaxCodegenGenericParameter>[];
  if (pendingGenerics.length == bounds.length &&
      pendingGenerics.length == defaults.length) {
    for (var index = 0; index < pendingGenerics.length; index++) {
      final bound = bounds[index];
      if (bound == null) continue;
      typeParameters.add(
        FlaxCodegenGenericParameter(
          pendingGenerics[index].name,
          bound,
          defaultType: defaults[index],
          genericIdentity: pendingGenerics[index].identity,
        ),
      );
    }
  }

  final parameters = <FlaxCodegenParameterModel>[];
  if (pendingParameters.length == parameterTypes.length) {
    for (var index = 0; index < pendingParameters.length; index++) {
      final pending = pendingParameters[index];
      final type = parameterTypes[index];
      if (type == null) continue;
      parameters.add(
        FlaxCodegenParameterModel(
          name: pending.name,
          type: type,
          required: pending.required,
          positional: pending.positional,
          defaultCode: pending.defaultCode,
          omitWhenAbsent: pending.omitWhenAbsent,
          independentWidgetResult: pending.independentWidgetResult,
          snapshot: pending.snapshot,
          encodeKind: pending.encodeKind,
          scoped: pending.scoped,
        ),
      );
    }
  }

  if (diagnostics.items.length != start ||
      nullable == null ||
      parametersJson == null ||
      typeParametersJson == null ||
      typeParameters.length != pendingGenerics.length ||
      parameters.length != pendingParameters.length ||
      typeArguments == null ||
      dartArguments == null ||
      primitiveKinds == null ||
      tsArguments == null) {
    return null;
  }
  final type = FlaxCodegenTypeRef(
    'callback',
    id: id,
    name: name,
    nullable: nullable,
    item: item,
    key: key,
    parameters: parameters,
    typeParameters: typeParameters,
    result: result,
    typeArguments: typeArguments,
    dartArguments: dartArguments,
    primitiveKinds: primitiveKinds,
    declaration: declaration,
    tsArguments: tsArguments,
  );
  try {
    type.category;
    type.validate(pointer);
    return type;
  } on StateError {
    diagnostics.add(pointer: pointer, message: 'Invalid type.');
    return null;
  }
}

_PendingParameter? _readParameterShell(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _parameterKeys,
  );
  if (object == null) return null;
  final name = object.requiredString('name');
  if (!object._fields.containsKey('type')) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'type'),
      message: 'Missing field.',
    );
  }
  final typeJson = object._fields['type'];
  final required = object.requiredBool('required');
  final positional = object.requiredBool('positional');
  final defaultCode = object.requiredString('defaultCode');
  final omitWhenAbsent = object.requiredBool('omitWhenAbsent');
  final independentWidgetResult = object.requiredBool(
    'independentWidgetResult',
  );
  final snapshot = object.nullableString('snapshot');
  final encodeKind = object.nullableString('encodeKind');
  final scoped = object.requiredBool('scoped');
  if (diagnostics.items.length != start ||
      name == null ||
      required == null ||
      positional == null ||
      defaultCode == null ||
      omitWhenAbsent == null ||
      independentWidgetResult == null ||
      scoped == null) {
    return null;
  }
  return _PendingParameter(
    name: name,
    pointer: pointer,
    typeJson: typeJson,
    required: required,
    positional: positional,
    defaultCode: defaultCode,
    omitWhenAbsent: omitWhenAbsent,
    independentWidgetResult: independentWidgetResult,
    snapshot: snapshot,
    encodeKind: encodeKind,
    scoped: scoped,
  );
}

_PendingGeneric? _reserveGenericDeclaration(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
  _SlotDecodeScope scope,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _genericKeys,
  );
  if (object == null) return null;
  final name = object.requiredString('name');
  final slot = object.nullableString('slot');
  if (!object._fields.containsKey('bound')) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'bound'),
      message: 'Missing field.',
    );
  }
  if (!object._fields.containsKey('defaultType')) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'defaultType'),
      message: 'Missing field.',
    );
  }
  final boundJson = object._fields['bound'];
  final defaultTypeJson = object._fields['defaultType'];
  final slotPointer = flaxCodegenManifestV2Pointer(pointer, 'slot');
  final index = scope.declare(diagnostics, slot, slotPointer);
  if (diagnostics.items.length != start || name == null || index == null) {
    return null;
  }
  return _PendingGeneric(
    name: name,
    pointer: pointer,
    index: index,
    identity: scope.identityAt(index)!,
    boundJson: boundJson,
    defaultTypeJson: defaultTypeJson,
  );
}

Map<String, Object?> _encodeParameter(
  FlaxCodegenParameterModel parameter, [
  _SlotEncodeScope? scope,
]) => {
  'name': parameter.name,
  'type': _encodeType(parameter.type, scope),
  'required': parameter.required,
  'positional': parameter.positional,
  'defaultCode': parameter.defaultCode,
  'omitWhenAbsent': parameter.omitWhenAbsent,
  'independentWidgetResult': parameter.independentWidgetResult,
  'snapshot': parameter.snapshot,
  'encodeKind': parameter.encodeKind,
  'scoped': parameter.scoped,
};

FlaxCodegenParameterModel? _decodeParameter(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer, [
  _SlotDecodeScope? scope,
]) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _parameterKeys,
  );
  if (object == null) return null;
  final name = object.requiredString('name');
  final type = object.requiredValue('type', _decodeTypeFn(diagnostics, scope));
  final required = object.requiredBool('required');
  final positional = object.requiredBool('positional');
  final defaultCode = object.requiredString('defaultCode');
  final omitWhenAbsent = object.requiredBool('omitWhenAbsent');
  final independentWidgetResult = object.requiredBool(
    'independentWidgetResult',
  );
  final snapshot = object.nullableString('snapshot');
  final encodeKind = object.nullableString('encodeKind');
  final scoped = object.requiredBool('scoped');
  if (diagnostics.items.length != start ||
      name == null ||
      type == null ||
      required == null ||
      positional == null ||
      defaultCode == null ||
      omitWhenAbsent == null ||
      independentWidgetResult == null ||
      scoped == null) {
    return null;
  }
  return FlaxCodegenParameterModel(
    name: name,
    type: type,
    required: required,
    positional: positional,
    defaultCode: defaultCode,
    omitWhenAbsent: omitWhenAbsent,
    independentWidgetResult: independentWidgetResult,
    snapshot: snapshot,
    encodeKind: encodeKind,
    scoped: scoped,
  );
}

Map<String, Object?> _encodeGeneric(
  FlaxCodegenGenericParameter parameter, [
  _SlotEncodeScope? scope,
]) => {
  'name': parameter.name,
  'bound': _encodeType(parameter.bound, scope),
  'defaultType': parameter.defaultType == null
      ? null
      : _encodeType(parameter.defaultType!, scope),
  'slot': scope?.slotFor(parameter.genericIdentity),
};

FlaxCodegenGenericParameter? _decodeGeneric(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer, [
  _SlotDecodeScope? scope,
]) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _genericKeys,
  );
  if (object == null) return null;
  final name = object.requiredString('name');
  final bound = object.requiredValue(
    'bound',
    _decodeTypeFn(diagnostics, scope),
  );
  final defaultType = object.nullableValue(
    'defaultType',
    _decodeTypeFn(diagnostics, scope),
  );
  final slot = object.nullableString('slot');
  final slotPointer = flaxCodegenManifestV2Pointer(pointer, 'slot');
  if (slot != null) {
    diagnostics.add(pointer: slotPointer, message: 'Unexpected slot.');
  }
  if (diagnostics.items.length != start || name == null || bound == null) {
    return null;
  }
  return FlaxCodegenGenericParameter(name, bound, defaultType: defaultType);
}

Map<String, Object?> _encodeGetter(
  FlaxCodegenGetterModel getter, [
  _SlotEncodeScope? scope,
]) => {
  'name': getter.name,
  'type': _encodeType(getter.type, scope),
  'encodeKind': getter.encodeKind,
};

FlaxCodegenGetterModel? _decodeGetter(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer, [
  _SlotDecodeScope? scope,
]) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _getterKeys,
  );
  if (object == null) return null;
  final name = object.requiredString('name');
  final type = object.requiredValue('type', _decodeTypeFn(diagnostics, scope));
  final encodeKind = object.nullableString('encodeKind');
  if (diagnostics.items.length != start || name == null || type == null) {
    return null;
  }
  return FlaxCodegenGetterModel(name, type, encodeKind: encodeKind);
}

Map<String, Object?> _encodeConstructor(
  FlaxCodegenConstructorModel constructor, [
  _SlotEncodeScope? scope,
]) => {
  'name': constructor.name,
  'parameters': [
    for (final parameter in constructor.parameters)
      _encodeParameter(parameter, scope),
  ],
};

FlaxCodegenConstructorModel? _decodeConstructor(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer, [
  _SlotDecodeScope? scope,
]) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _constructorKeys,
  );
  if (object == null) return null;
  final name = object.requiredString('name');
  final parameters = object.requiredList(
    'parameters',
    _decodeParameterFn(diagnostics, scope),
  );
  if (diagnostics.items.length != start || name == null || parameters == null) {
    return null;
  }
  return FlaxCodegenConstructorModel(name, parameters);
}

Map<String, Object?> _encodeMethod(
  FlaxCodegenMethodModel method, [
  _SlotEncodeScope? parent,
]) {
  final scope = parent ?? _SlotEncodeScope();
  final declarationSlots = <String?>[
    for (final parameter in method.typeParameters)
      scope.allocateDeclaration(parameter.genericIdentity),
  ];
  final reserved = scope.takeReserved();
  try {
    final boundJsons = <Map<String, Object?>>[
      for (final parameter in method.typeParameters)
        _encodeType(parameter.bound, scope),
    ];
    final defaultJsons = <Map<String, Object?>?>[
      for (final parameter in method.typeParameters)
        parameter.defaultType == null
            ? null
            : _encodeType(parameter.defaultType!, scope),
    ];
    final parameterTypeJsons = List<Map<String, Object?>?>.filled(
      method.parameters.length,
      null,
    );
    for (var index = 0; index < method.parameters.length; index++) {
      final parameter = method.parameters[index];
      if (!parameter.positional) continue;
      parameterTypeJsons[index] = _encodeType(parameter.type, scope);
    }
    for (final namedIndex in _namedParameterIndexes(method.parameters)) {
      parameterTypeJsons[namedIndex] = _encodeType(
        method.parameters[namedIndex].type,
        scope,
      );
    }
    final resultJson = _encodeType(method.result, scope);
    return {
      'name': method.name,
      'parameters': [
        for (var index = 0; index < method.parameters.length; index++)
          _encodeParameterWithType(
            method.parameters[index],
            parameterTypeJsons[index]!,
          ),
      ],
      'result': resultJson,
      'instance': method.instance,
      'typeArguments': List<String>.of(method.typeArguments),
      'startsRoute': method.startsRoute,
      'typeParameters': [
        for (var index = 0; index < method.typeParameters.length; index++)
          {
            'name': method.typeParameters[index].name,
            'bound': boundJsons[index],
            'defaultType': defaultJsons[index],
            'slot': declarationSlots[index],
          },
      ],
      'mustCallSuper': method.mustCallSuper,
      'deferredFactory': method.deferredFactory,
    };
  } finally {
    scope.release(reserved);
  }
}

FlaxCodegenMethodModel? _decodeMethod(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer, [
  _SlotDecodeScope? parent,
]) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _methodKeys,
  );
  if (object == null) return null;
  final scope = parent ?? _SlotDecodeScope();
  final name = object.requiredString('name');
  final instance = object.requiredBool('instance');
  final typeArguments = object.requiredStringList('typeArguments');
  final startsRoute = object.requiredBool('startsRoute');
  final mustCallSuper = object.requiredBool('mustCallSuper');
  final deferredFactory = object.requiredBool('deferredFactory');

  final typeParametersValue = object._fields['typeParameters'];
  if (!object._fields.containsKey('typeParameters')) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'typeParameters'),
      message: 'Missing field.',
    );
  }
  final typeParametersJson = _jsonList(typeParametersValue);
  if (typeParametersValue != null && typeParametersJson == null) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'typeParameters'),
      message: 'Expected a list.',
    );
  }

  final reservedIndexes = <int>[];
  final pendingGenerics = <_PendingGeneric>[];
  if (typeParametersJson != null) {
    final typeParametersPointer = flaxCodegenManifestV2Pointer(
      pointer,
      'typeParameters',
    );
    for (var index = 0; index < typeParametersJson.length; index++) {
      final genericPointer = flaxCodegenManifestV2Pointer(
        typeParametersPointer,
        '$index',
      );
      final pending = _reserveGenericDeclaration(
        typeParametersJson[index],
        diagnostics,
        genericPointer,
        scope,
      );
      if (pending == null) continue;
      reservedIndexes.add(pending.index);
      pendingGenerics.add(pending);
    }
  }

  final bounds = <FlaxCodegenTypeRef?>[
    for (final pending in pendingGenerics)
      _decodeType(
        pending.boundJson,
        diagnostics,
        flaxCodegenManifestV2Pointer(pending.pointer, 'bound'),
        scope,
      ),
  ];
  final defaults = <FlaxCodegenTypeRef?>[
    for (final pending in pendingGenerics)
      pending.defaultTypeJson == null
          ? null
          : _decodeType(
              pending.defaultTypeJson,
              diagnostics,
              flaxCodegenManifestV2Pointer(pending.pointer, 'defaultType'),
              scope,
            ),
  ];

  final parametersValue = object._fields['parameters'];
  if (!object._fields.containsKey('parameters')) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'parameters'),
      message: 'Missing field.',
    );
  }
  final parametersJson = _jsonList(parametersValue);
  if (parametersValue != null && parametersJson == null) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'parameters'),
      message: 'Expected a list.',
    );
  }

  final pendingParameters = <_PendingParameter>[];
  if (parametersJson != null) {
    final parametersPointer = flaxCodegenManifestV2Pointer(
      pointer,
      'parameters',
    );
    for (var index = 0; index < parametersJson.length; index++) {
      final parameterPointer = flaxCodegenManifestV2Pointer(
        parametersPointer,
        '$index',
      );
      final pending = _readParameterShell(
        parametersJson[index],
        diagnostics,
        parameterPointer,
      );
      if (pending != null) pendingParameters.add(pending);
    }
  }

  final parameterTypes = List<FlaxCodegenTypeRef?>.filled(
    pendingParameters.length,
    null,
  );
  for (var index = 0; index < pendingParameters.length; index++) {
    final pending = pendingParameters[index];
    if (!pending.positional) continue;
    parameterTypes[index] = _decodeType(
      pending.typeJson,
      diagnostics,
      flaxCodegenManifestV2Pointer(pending.pointer, 'type'),
      scope,
    );
  }
  final namedIndexes =
      <int>[
        for (var index = 0; index < pendingParameters.length; index++)
          if (!pendingParameters[index].positional) index,
      ]..sort((left, right) {
        final leftName = FlaxCodegenPercentEncoding.encode(
          pendingParameters[left].name,
        );
        final rightName = FlaxCodegenPercentEncoding.encode(
          pendingParameters[right].name,
        );
        return leftName.compareTo(rightName);
      });
  for (final index in namedIndexes) {
    final pending = pendingParameters[index];
    parameterTypes[index] = _decodeType(
      pending.typeJson,
      diagnostics,
      flaxCodegenManifestV2Pointer(pending.pointer, 'type'),
      scope,
    );
  }

  final result = object.requiredValue(
    'result',
    _decodeTypeFn(diagnostics, scope),
  );

  scope.release(reservedIndexes);

  final typeParameters = <FlaxCodegenGenericParameter>[];
  if (pendingGenerics.length == bounds.length &&
      pendingGenerics.length == defaults.length) {
    for (var index = 0; index < pendingGenerics.length; index++) {
      final bound = bounds[index];
      if (bound == null) continue;
      typeParameters.add(
        FlaxCodegenGenericParameter(
          pendingGenerics[index].name,
          bound,
          defaultType: defaults[index],
          genericIdentity: pendingGenerics[index].identity,
        ),
      );
    }
  }

  final parameters = <FlaxCodegenParameterModel>[];
  if (pendingParameters.length == parameterTypes.length) {
    for (var index = 0; index < pendingParameters.length; index++) {
      final type = parameterTypes[index];
      if (type == null) continue;
      final pending = pendingParameters[index];
      parameters.add(
        FlaxCodegenParameterModel(
          name: pending.name,
          type: type,
          required: pending.required,
          positional: pending.positional,
          defaultCode: pending.defaultCode,
          omitWhenAbsent: pending.omitWhenAbsent,
          independentWidgetResult: pending.independentWidgetResult,
          snapshot: pending.snapshot,
          encodeKind: pending.encodeKind,
          scoped: pending.scoped,
        ),
      );
    }
  }

  if (diagnostics.items.length != start ||
      name == null ||
      result == null ||
      instance == null ||
      typeArguments == null ||
      startsRoute == null ||
      mustCallSuper == null ||
      deferredFactory == null ||
      typeParametersJson == null ||
      parametersJson == null ||
      typeParameters.length != pendingGenerics.length ||
      parameters.length != pendingParameters.length) {
    return null;
  }
  return FlaxCodegenMethodModel(
    name,
    parameters,
    result,
    instance: instance,
    typeArguments: typeArguments,
    startsRoute: startsRoute,
    typeParameters: typeParameters,
    mustCallSuper: mustCallSuper,
    deferredFactory: deferredFactory,
  );
}

Map<String, Object?> _encodeProxy(
  FlaxCodegenProxyModel proxy, [
  _SlotEncodeScope? scope,
]) => {
  'kind': proxy.kind,
  'methods': [for (final method in proxy.methods) _encodeMethod(method, scope)],
  'superMethods': List<String>.of(proxy.superMethods),
  'getters': [for (final getter in proxy.getters) _encodeGetter(getter, scope)],
  'setters': [for (final setter in proxy.setters) _encodeGetter(setter, scope)],
};

FlaxCodegenProxyModel? _decodeProxy(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer, [
  _SlotDecodeScope? scope,
]) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _proxyKeys,
  );
  if (object == null) return null;
  final kind = object.requiredString('kind');
  final methods = object.requiredList(
    'methods',
    _decodeMethodFn(diagnostics, scope),
  );
  final superMethods = object.requiredStringList('superMethods');
  final getters = object.requiredList(
    'getters',
    _decodeGetterFn(diagnostics, scope),
  );
  final setters = object.requiredList(
    'setters',
    _decodeGetterFn(diagnostics, scope),
  );
  if (diagnostics.items.length != start ||
      kind == null ||
      methods == null ||
      superMethods == null ||
      getters == null ||
      setters == null) {
    return null;
  }
  return FlaxCodegenProxyModel(
    kind,
    methods,
    superMethods: superMethods,
    getters: getters,
    setters: setters,
  );
}

Map<String, Object?> _encodePageAdapter(FlaxCodegenPageAdapterModel adapter) =>
    {'library': adapter.library, 'function': adapter.function};

FlaxCodegenPageAdapterModel? _decodePageAdapter(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _pageAdapterKeys,
  );
  if (object == null) return null;
  final library = object.requiredString('library');
  final function = object.requiredString('function');
  if (diagnostics.items.length != start ||
      library == null ||
      function == null) {
    return null;
  }
  return FlaxCodegenPageAdapterModel(library, function);
}

Map<String, Object?> _encodeRouteCall(FlaxCodegenRouteCallModel route) => {
  'context': route.context,
  'rootNavigator': route.rootNavigator,
  'builders': List<String>.of(route.builders),
};

FlaxCodegenRouteCallModel? _decodeRouteCall(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _routeCallKeys,
  );
  if (object == null) return null;
  final context = object.requiredString('context');
  final rootNavigator = object.requiredString('rootNavigator');
  final builders = object.requiredStringList('builders');
  if (diagnostics.items.length != start ||
      context == null ||
      rootNavigator == null ||
      builders == null) {
    return null;
  }
  return FlaxCodegenRouteCallModel(context, rootNavigator, builders);
}

Map<String, Object?> _encodeClass(FlaxCodegenClassModel type) {
  final scope = _SlotEncodeScope();
  final declarationSlots = <String?>[
    for (final parameter in type.typeParameters)
      scope.allocateDeclaration(parameter.genericIdentity),
  ];
  final reserved = scope.takeReserved();
  try {
    final boundJsons = <Map<String, Object?>>[
      for (final parameter in type.typeParameters)
        _encodeType(parameter.bound, scope),
    ];
    final defaultJsons = <Map<String, Object?>?>[
      for (final parameter in type.typeParameters)
        parameter.defaultType == null
            ? null
            : _encodeType(parameter.defaultType!, scope),
    ];
    // Fixed member TypeRef traversal (matches assembled field order below).
    final constructorJsons = [
      for (final constructor in type.constructors)
        _encodeConstructor(constructor, scope),
    ];
    final getterJsons = [
      for (final getter in type.getters) _encodeGetter(getter, scope),
    ];
    final setterJsons = [
      for (final setter in type.setters) _encodeGetter(setter, scope),
    ];
    final staticGetterJsons = [
      for (final getter in type.staticGetters) _encodeGetter(getter, scope),
    ];
    final methodJsons = [
      for (final method in type.methods) _encodeMethod(method, scope),
    ];
    final widgetInterfaceJsons = [
      for (final interface in type.widgetInterfaces)
        _encodeType(interface, scope),
    ];
    final widgetGetterJsons = [
      for (final getter in type.widgetGetters) _encodeGetter(getter, scope),
    ];
    final superTypeJsons = [
      for (final superType in type.superTypes) _encodeType(superType, scope),
    ];
    final proxyJson = type.proxy == null
        ? null
        : _encodeProxy(type.proxy!, scope);
    return {
      'name': type.name,
      'id': type.id,
      'kind': type.kind,
      'jsName': type.jsName,
      'genericScalar': type.genericScalar,
      'asyncIterableFactory': type.asyncIterableFactory,
      'typeArguments': List<String>.of(type.typeArguments),
      'typeParameters': [
        for (var index = 0; index < type.typeParameters.length; index++)
          {
            'name': type.typeParameters[index].name,
            'bound': boundJsons[index],
            'defaultType': defaultJsons[index],
            'slot': declarationSlots[index],
          },
      ],
      'constructors': constructorJsons,
      'getters': getterJsons,
      'setters': setterJsons,
      'staticGetters': staticGetterJsons,
      'methods': methodJsons,
      'widgetInterfaces': widgetInterfaceJsons,
      'widgetGetters': widgetGetterJsons,
      'supertypes': List<String>.of(type.supertypes),
      'superTypes': superTypeJsons,
      'proxy': proxyJson,
      'pageAdapter': type.pageAdapter == null
          ? null
          : _encodePageAdapter(type.pageAdapter!),
      'disposeMethod': type.disposeMethod,
      'listenerPairs': _encodeStringMap(type.listenerPairs),
    };
  } finally {
    scope.release(reserved);
  }
}

FlaxCodegenClassModel? _decodeClass(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _classKeys,
  );
  if (object == null) return null;
  final scope = _SlotDecodeScope();
  final name = object.requiredString('name');
  final id = object.requiredString('id');
  final kind = object.requiredString('kind');
  final jsName = object.nullableString('jsName');
  final genericScalar = object.requiredBool('genericScalar');
  final asyncIterableFactory = object.nullableString('asyncIterableFactory');
  final typeArguments = object.requiredStringList('typeArguments');

  final typeParametersValue = object._fields['typeParameters'];
  if (!object._fields.containsKey('typeParameters')) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'typeParameters'),
      message: 'Missing field.',
    );
  }
  final typeParametersJson = _jsonList(typeParametersValue);
  if (typeParametersValue != null && typeParametersJson == null) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'typeParameters'),
      message: 'Expected a list.',
    );
  }

  final reservedIndexes = <int>[];
  final pendingGenerics = <_PendingGeneric>[];
  if (typeParametersJson != null) {
    final typeParametersPointer = flaxCodegenManifestV2Pointer(
      pointer,
      'typeParameters',
    );
    for (var index = 0; index < typeParametersJson.length; index++) {
      final genericPointer = flaxCodegenManifestV2Pointer(
        typeParametersPointer,
        '$index',
      );
      final pending = _reserveGenericDeclaration(
        typeParametersJson[index],
        diagnostics,
        genericPointer,
        scope,
      );
      if (pending == null) continue;
      reservedIndexes.add(pending.index);
      pendingGenerics.add(pending);
    }
  }

  final bounds = <FlaxCodegenTypeRef?>[
    for (final pending in pendingGenerics)
      _decodeType(
        pending.boundJson,
        diagnostics,
        flaxCodegenManifestV2Pointer(pending.pointer, 'bound'),
        scope,
      ),
  ];
  final defaults = <FlaxCodegenTypeRef?>[
    for (final pending in pendingGenerics)
      pending.defaultTypeJson == null
          ? null
          : _decodeType(
              pending.defaultTypeJson,
              diagnostics,
              flaxCodegenManifestV2Pointer(pending.pointer, 'defaultType'),
              scope,
            ),
  ];

  final constructors = object.requiredList(
    'constructors',
    _decodeConstructorFn(diagnostics, scope),
  );
  final getters = object.requiredList(
    'getters',
    _decodeGetterFn(diagnostics, scope),
  );
  final setters = object.requiredList(
    'setters',
    _decodeGetterFn(diagnostics, scope),
  );
  final staticGetters = object.requiredList(
    'staticGetters',
    _decodeGetterFn(diagnostics, scope),
  );
  final methods = object.requiredList(
    'methods',
    _decodeMethodFn(diagnostics, scope),
  );
  final widgetInterfaces = object.requiredList(
    'widgetInterfaces',
    _decodeTypeFn(diagnostics, scope),
  );
  final widgetGetters = object.requiredList(
    'widgetGetters',
    _decodeGetterFn(diagnostics, scope),
  );
  final supertypes = object.requiredStringList('supertypes');
  final superTypes = object.requiredList(
    'superTypes',
    _decodeTypeFn(diagnostics, scope),
  );
  final proxy = object.nullableValue(
    'proxy',
    _decodeProxyFn(diagnostics, scope),
  );
  final pageAdapter = object.nullableValue(
    'pageAdapter',
    _decodePageAdapterFn(diagnostics),
  );
  final disposeMethod = object.nullableString('disposeMethod');
  final listenerPairs = object.requiredStringMap('listenerPairs');

  scope.release(reservedIndexes);

  final typeParameters = <FlaxCodegenGenericParameter>[];
  if (pendingGenerics.length == bounds.length &&
      pendingGenerics.length == defaults.length) {
    for (var index = 0; index < pendingGenerics.length; index++) {
      final bound = bounds[index];
      if (bound == null) continue;
      typeParameters.add(
        FlaxCodegenGenericParameter(
          pendingGenerics[index].name,
          bound,
          defaultType: defaults[index],
          genericIdentity: pendingGenerics[index].identity,
        ),
      );
    }
  }

  if (diagnostics.items.length != start ||
      name == null ||
      id == null ||
      kind == null ||
      genericScalar == null ||
      typeArguments == null ||
      typeParametersJson == null ||
      typeParameters.length != pendingGenerics.length ||
      constructors == null ||
      getters == null ||
      setters == null ||
      staticGetters == null ||
      methods == null ||
      widgetInterfaces == null ||
      widgetGetters == null ||
      supertypes == null ||
      superTypes == null ||
      listenerPairs == null) {
    return null;
  }
  return FlaxCodegenClassModel(
    name: name,
    id: id,
    kind: kind,
    jsName: jsName,
    genericScalar: genericScalar,
    asyncIterableFactory: asyncIterableFactory,
    typeArguments: typeArguments,
    typeParameters: typeParameters,
    constructors: constructors,
    getters: getters,
    setters: setters,
    staticGetters: staticGetters,
    methods: methods,
    widgetInterfaces: widgetInterfaces,
    widgetGetters: widgetGetters,
    supertypes: supertypes,
    superTypes: superTypes,
    proxy: proxy,
    pageAdapter: pageAdapter,
    disposeMethod: disposeMethod,
    listenerPairs: listenerPairs,
  );
}

Map<String, Object?> _encodeNamedType(FlaxCodegenNamedTypeModel type) {
  final scope = _SlotEncodeScope();
  final declarationSlots = <String?>[
    for (final parameter in type.typeParameters)
      scope.allocateDeclaration(parameter.genericIdentity),
  ];
  final reserved = scope.takeReserved();
  try {
    final boundJsons = <Map<String, Object?>>[
      for (final parameter in type.typeParameters)
        _encodeType(parameter.bound, scope),
    ];
    final defaultJsons = <Map<String, Object?>?>[
      for (final parameter in type.typeParameters)
        parameter.defaultType == null
            ? null
            : _encodeType(parameter.defaultType!, scope),
    ];
    return {
      'name': type.name,
      'id': type.id,
      'enumNames': List<String>.of(type.enumNames),
      'typeParameters': [
        for (var index = 0; index < type.typeParameters.length; index++)
          {
            'name': type.typeParameters[index].name,
            'bound': boundJsons[index],
            'defaultType': defaultJsons[index],
            'slot': declarationSlots[index],
          },
      ],
    };
  } finally {
    scope.release(reserved);
  }
}

FlaxCodegenNamedTypeModel? _decodeNamedType(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _namedTypeKeys,
  );
  if (object == null) return null;
  final scope = _SlotDecodeScope();
  final name = object.requiredString('name');
  final id = object.requiredString('id');
  final enumNames = object.requiredStringList('enumNames');

  final typeParametersValue = object._fields['typeParameters'];
  if (!object._fields.containsKey('typeParameters')) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'typeParameters'),
      message: 'Missing field.',
    );
  }
  final typeParametersJson = _jsonList(typeParametersValue);
  if (typeParametersValue != null && typeParametersJson == null) {
    diagnostics.add(
      pointer: flaxCodegenManifestV2Pointer(pointer, 'typeParameters'),
      message: 'Expected a list.',
    );
  }

  final reservedIndexes = <int>[];
  final pendingGenerics = <_PendingGeneric>[];
  if (typeParametersJson != null) {
    final typeParametersPointer = flaxCodegenManifestV2Pointer(
      pointer,
      'typeParameters',
    );
    for (var index = 0; index < typeParametersJson.length; index++) {
      final genericPointer = flaxCodegenManifestV2Pointer(
        typeParametersPointer,
        '$index',
      );
      final pending = _reserveGenericDeclaration(
        typeParametersJson[index],
        diagnostics,
        genericPointer,
        scope,
      );
      if (pending == null) continue;
      reservedIndexes.add(pending.index);
      pendingGenerics.add(pending);
    }
  }

  final bounds = <FlaxCodegenTypeRef?>[
    for (final pending in pendingGenerics)
      _decodeType(
        pending.boundJson,
        diagnostics,
        flaxCodegenManifestV2Pointer(pending.pointer, 'bound'),
        scope,
      ),
  ];
  final defaults = <FlaxCodegenTypeRef?>[
    for (final pending in pendingGenerics)
      pending.defaultTypeJson == null
          ? null
          : _decodeType(
              pending.defaultTypeJson,
              diagnostics,
              flaxCodegenManifestV2Pointer(pending.pointer, 'defaultType'),
              scope,
            ),
  ];

  scope.release(reservedIndexes);

  final typeParameters = <FlaxCodegenGenericParameter>[];
  if (pendingGenerics.length == bounds.length &&
      pendingGenerics.length == defaults.length) {
    for (var index = 0; index < pendingGenerics.length; index++) {
      final bound = bounds[index];
      if (bound == null) continue;
      typeParameters.add(
        FlaxCodegenGenericParameter(
          pendingGenerics[index].name,
          bound,
          defaultType: defaults[index],
          genericIdentity: pendingGenerics[index].identity,
        ),
      );
    }
  }

  if (diagnostics.items.length != start ||
      name == null ||
      id == null ||
      enumNames == null ||
      typeParametersJson == null ||
      typeParameters.length != pendingGenerics.length) {
    return null;
  }
  return FlaxCodegenNamedTypeModel(
    name: name,
    id: id,
    enumNames: enumNames,
    typeParameters: typeParameters,
  );
}

Map<String, Object?> _encodeFunction(FlaxCodegenFunctionModel function) => {
  'id': function.id,
  'call': _encodeMethod(function.call),
  'route': function.route == null ? null : _encodeRouteCall(function.route!),
};

FlaxCodegenFunctionModel? _decodeFunction(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _functionKeys,
  );
  if (object == null) return null;
  final id = object.requiredString('id');
  final call = object.requiredValue('call', _decodeMethodFn(diagnostics));
  final route = object.nullableValue('route', _decodeRouteCallFn(diagnostics));
  if (diagnostics.items.length != start || id == null || call == null) {
    return null;
  }
  return FlaxCodegenFunctionModel(id, call, route: route);
}

Map<String, Object?> _encodeSnapshot(FlaxCodegenSnapshotModel snapshot) => {
  'name': snapshot.name,
  'id': snapshot.id,
  'parent': snapshot.parent,
  'fields': [for (final field in snapshot.fields) _encodeSnapshotField(field)],
};

FlaxCodegenSnapshotModel? _decodeSnapshot(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _snapshotKeys,
  );
  if (object == null) return null;
  final name = object.requiredString('name');
  final id = object.requiredString('id');
  final parent = object.nullableString('parent');
  final fields = object.requiredList(
    'fields',
    _decodeSnapshotFieldFn(diagnostics),
  );
  if (diagnostics.items.length != start ||
      name == null ||
      id == null ||
      fields == null) {
    return null;
  }
  return FlaxCodegenSnapshotModel(
    name: name,
    id: id,
    parent: parent,
    fields: fields,
  );
}

Map<String, Object?> _encodeSnapshotField(
  FlaxCodegenSnapshotFieldModel field,
) => {
  'name': field.name,
  'kind': field.kind,
  'enumNames': List<String>.of(field.enumNames),
  'snapshot': field.snapshot,
  'nullable': field.nullable,
};

FlaxCodegenSnapshotFieldModel? _decodeSnapshotField(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _snapshotFieldKeys,
  );
  if (object == null) return null;
  final name = object.requiredString('name');
  final kind = object.requiredString('kind');
  final enumNames = object.requiredStringList('enumNames');
  final snapshot = object.nullableString('snapshot');
  final nullable = object.requiredBool('nullable');
  if (diagnostics.items.length != start ||
      name == null ||
      kind == null ||
      enumNames == null ||
      nullable == null) {
    return null;
  }
  return FlaxCodegenSnapshotFieldModel(
    name: name,
    kind: kind,
    enumNames: enumNames,
    snapshot: snapshot,
    nullable: nullable,
  );
}

Map<String, Object?> _encodeModule(FlaxCodegenModuleModel module) => {
  'library': module.library,
  'jsPackage': module.jsPackage,
  'typeLibraries': _encodeStringMap(module.typeLibraries),
  'classes': [for (final type in module.classes) _encodeClass(type)],
  'types': [for (final type in module.types) _encodeNamedType(type)],
  'functions': [
    for (final function in module.functions) _encodeFunction(function),
  ],
  'snapshots': [
    for (final snapshot in module.snapshots) _encodeSnapshot(snapshot),
  ],
};

FlaxCodegenModuleModel? _decodeModule(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
  String name,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _moduleKeys,
  );
  if (object == null) return null;
  final library = object.requiredString('library');
  final jsPackage = object.requiredString('jsPackage');
  final typeLibraries = object.requiredStringMap('typeLibraries');
  final classes = object.requiredList('classes', _decodeClassFn(diagnostics));
  final types = object.requiredList('types', _decodeNamedTypeFn(diagnostics));
  final functions = object.requiredList(
    'functions',
    _decodeFunctionFn(diagnostics),
  );
  final snapshots = object.requiredList(
    'snapshots',
    _decodeSnapshotFn(diagnostics),
  );
  if (diagnostics.items.length != start ||
      library == null ||
      jsPackage == null ||
      typeLibraries == null ||
      classes == null ||
      types == null ||
      functions == null ||
      snapshots == null) {
    return null;
  }
  final typeLibrariesPointer = object.child('typeLibraries');
  var typeLibrariesOk = true;
  for (final entry in typeLibraries.entries) {
    if (!_isPublicTypeLibraryUri(entry.value)) {
      diagnostics.add(
        pointer: flaxCodegenManifestV2Pointer(typeLibrariesPointer, entry.key),
        message: 'Invalid type library URI.',
      );
      typeLibrariesOk = false;
    }
  }
  if (!typeLibrariesOk) return null;
  final module = FlaxCodegenModuleModel(
    name: name,
    library: library,
    jsPackage: jsPackage,
    dartOutput: '',
    tsOutput: '',
    classes: classes,
    types: types,
    typeLibraries: typeLibraries,
    functions: functions,
    snapshots: snapshots,
  );
  try {
    module.validate();
    return module;
  } on StateError {
    diagnostics.add(pointer: pointer, message: 'Invalid module.');
    return null;
  }
}

/// Canonical public `package:` / `dart:` URI for Manifest2 `typeLibraries`.
/// Cross-package package URIs are allowed. Only `package:<name>/src/...`
/// (`pathSegments[1] == src`) is treated as a private package library path;
/// underscore path segments remain public. Private dart libraries are not.
bool _isPublicTypeLibraryUri(String uri) {
  final parsed = Uri.tryParse(uri);
  if (parsed == null) return false;
  if (uri != parsed.toString()) return false;
  if (uri != parsed.normalizePath().toString()) return false;
  if (parsed.hasAuthority || parsed.hasQuery || parsed.hasFragment) {
    return false;
  }
  if (parsed.scheme == 'package' && uri.startsWith('package:')) {
    return _isPublicPackageTypeLibraryUri(parsed);
  }
  if (parsed.scheme == 'dart' && uri.startsWith('dart:')) {
    return _isPublicDartTypeLibraryUri(parsed.path);
  }
  return false;
}

final _publicPackageNamePattern = RegExp(r'^[a-z][a-z0-9_]*$');
final _publicDartLibraryPattern = RegExp(r'^[a-z][a-z0-9_]*$');

bool _isPublicPackageTypeLibraryUri(Uri parsed) {
  final segments = parsed.pathSegments;
  if (segments.length < 2) return false;
  if (!_publicPackageNamePattern.hasMatch(segments.first)) return false;
  if (segments[1] == 'src') return false;
  for (final segment in segments) {
    if (segment.isEmpty || segment == '.' || segment == '..') return false;
    if (segment.contains('/') || segment.contains(r'\')) return false;
  }
  return true;
}

bool _isPublicDartTypeLibraryUri(String path) =>
    _publicDartLibraryPattern.hasMatch(path);

Map<String, Object?> _encodeSourceIdentity(
  FlaxCodegenSourceIdentity identity,
) => {
  'kind': identity.kind.name,
  'originatingUri': identity.originatingUri,
  'name': identity.name,
};

FlaxCodegenSourceIdentity? _decodeSourceIdentity(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _sourceIdentityKeys,
  );
  if (object == null) return null;
  final kindValue = object.requiredString('kind');
  final originatingUri = object.requiredString('originatingUri');
  final name = object.requiredString('name');
  if (diagnostics.items.length != start ||
      kindValue == null ||
      originatingUri == null ||
      name == null) {
    return null;
  }
  final FlaxCodegenDeclarationKind kind;
  try {
    kind = FlaxCodegenDeclarationKind.parse(kindValue);
  } on FormatException {
    diagnostics.add(
      pointer: object.child('kind'),
      message: 'Invalid declaration kind.',
    );
    return null;
  }
  try {
    return FlaxCodegenSourceIdentity(
      kind: kind,
      originatingUri: originatingUri,
      name: name,
      origin: FlaxCodegenOriginState.resolved,
    );
  } on FormatException catch (error) {
    final message = error.message;
    if (message == 'Invalid originating URI.') {
      diagnostics.add(
        pointer: object.child('originatingUri'),
        message: 'Invalid originating URI.',
      );
    } else if (message == 'Empty name.' || message == 'Private name.') {
      diagnostics.add(
        pointer: object.child('name'),
        message: 'Invalid public binding name.',
      );
    } else {
      diagnostics.add(pointer: pointer, message: 'Invalid sourceIdentity.');
    }
    return null;
  }
}

Map<String, Object?> _encodeIdentity(FlaxCodegenManifestV2Identity identity) =>
    {
      'sourceIdentity': _encodeSourceIdentity(identity.sourceIdentity),
      'wireId': identity.wireId.value,
      'owner': identity.owner,
    };

FlaxCodegenManifestV2Identity? _decodeIdentity(
  Object? value,
  FlaxCodegenManifestV2Diagnostics diagnostics,
  String pointer,
) {
  final start = diagnostics.items.length;
  final object = FlaxCodegenManifestV2Object.read(
    diagnostics,
    value,
    pointer,
    _identityKeys,
  );
  if (object == null) return null;
  final sourceIdentity = object.requiredValue(
    'sourceIdentity',
    _decodeSourceIdentityFn(diagnostics),
  );
  final wireValue = object.requiredString('wireId');
  final owner = object.requiredBool('owner');
  FlaxCodegenWireId? wireId;
  if (wireValue != null) {
    try {
      wireId = FlaxCodegenWireId.parse(wireValue);
    } on FormatException {
      diagnostics.add(
        pointer: object.child('wireId'),
        message: 'Invalid wireId.',
      );
    }
  }
  if (diagnostics.items.length != start ||
      sourceIdentity == null ||
      wireId == null ||
      owner == null) {
    return null;
  }
  var ok = true;
  if (!_manifestWireKindMatches(sourceIdentity, wireId)) {
    diagnostics.add(
      pointer: object.child('wireId'),
      message: 'Wire kind mismatch.',
    );
    ok = false;
  }
  if (wireId.publicBindingName != sourceIdentity.name) {
    diagnostics.add(
      pointer: object.child('wireId'),
      message: 'Wire name mismatch.',
    );
    ok = false;
  }
  if (!ok) return null;
  return FlaxCodegenManifestV2Identity(
    sourceIdentity: sourceIdentity,
    wireId: wireId,
    owner: owner,
  );
}

bool _manifestWireKindMatches(
  FlaxCodegenSourceIdentity identity,
  FlaxCodegenWireId wireId,
) => switch (identity.kind) {
  FlaxCodegenDeclarationKind.type => wireId.kind == FlaxCodegenWireKind.type,
  FlaxCodegenDeclarationKind.function =>
    wireId.kind == FlaxCodegenWireKind.function,
};

Map<String, String> _encodeStringMap(Map<String, String> values) {
  final keys = values.keys.toList()..sort();
  return {for (final key in keys) key: values[key]!};
}

Map<String, String>? _decodeStringMap(
  FlaxCodegenManifestV2Diagnostics diagnostics,
  Object? value,
  String pointer,
) {
  if (value is! Map) {
    diagnostics.add(pointer: pointer, message: 'Expected a mapping.');
    return null;
  }
  var ok = true;
  final keys = <String>[];
  final decoded = <String, String>{};
  for (final entry in value.entries) {
    final key = entry.key;
    if (key is! String) {
      diagnostics.add(
        pointer: pointer,
        message: 'Mapping keys must be strings.',
      );
      ok = false;
      continue;
    }
    keys.add(key);
    final mapped = entry.value;
    if (mapped is! String) {
      diagnostics.add(
        pointer: flaxCodegenManifestV2Pointer(pointer, key),
        message: 'Expected a string.',
      );
      ok = false;
      continue;
    }
    decoded[key] = mapped;
  }
  if (_stringKeysUnsorted(keys)) {
    diagnostics.add(pointer: pointer, message: 'Expected sorted keys.');
    ok = false;
  }
  return ok ? decoded : null;
}

bool _stringKeysUnsorted(List<String> keys) {
  for (var index = 1; index < keys.length; index++) {
    if (keys[index - 1].compareTo(keys[index]) > 0) return true;
  }
  return false;
}

FlaxCodegenTypeRef? Function(Object? value, String pointer) _decodeTypeFn(
  FlaxCodegenManifestV2Diagnostics diagnostics, [
  _SlotDecodeScope? scope,
]) =>
    (value, pointer) => _decodeType(value, diagnostics, pointer, scope);

FlaxCodegenParameterModel? Function(Object? value, String pointer)
_decodeParameterFn(
  FlaxCodegenManifestV2Diagnostics diagnostics, [
  _SlotDecodeScope? scope,
]) =>
    (value, pointer) => _decodeParameter(value, diagnostics, pointer, scope);

FlaxCodegenGenericParameter? Function(Object? value, String pointer)
_decodeGenericFn(
  FlaxCodegenManifestV2Diagnostics diagnostics, [
  _SlotDecodeScope? scope,
]) =>
    (value, pointer) => _decodeGeneric(value, diagnostics, pointer, scope);

FlaxCodegenGetterModel? Function(Object? value, String pointer) _decodeGetterFn(
  FlaxCodegenManifestV2Diagnostics diagnostics, [
  _SlotDecodeScope? scope,
]) =>
    (value, pointer) => _decodeGetter(value, diagnostics, pointer, scope);

FlaxCodegenMethodModel? Function(Object? value, String pointer) _decodeMethodFn(
  FlaxCodegenManifestV2Diagnostics diagnostics, [
  _SlotDecodeScope? scope,
]) =>
    (value, pointer) => _decodeMethod(value, diagnostics, pointer, scope);

FlaxCodegenConstructorModel? Function(Object? value, String pointer)
_decodeConstructorFn(
  FlaxCodegenManifestV2Diagnostics diagnostics, [
  _SlotDecodeScope? scope,
]) =>
    (value, pointer) => _decodeConstructor(value, diagnostics, pointer, scope);

FlaxCodegenProxyModel? Function(Object? value, String pointer) _decodeProxyFn(
  FlaxCodegenManifestV2Diagnostics diagnostics, [
  _SlotDecodeScope? scope,
]) =>
    (value, pointer) => _decodeProxy(value, diagnostics, pointer, scope);

FlaxCodegenPageAdapterModel? Function(Object? value, String pointer)
_decodePageAdapterFn(FlaxCodegenManifestV2Diagnostics diagnostics) =>
    (value, pointer) => _decodePageAdapter(value, diagnostics, pointer);

FlaxCodegenRouteCallModel? Function(Object? value, String pointer)
_decodeRouteCallFn(FlaxCodegenManifestV2Diagnostics diagnostics) =>
    (value, pointer) => _decodeRouteCall(value, diagnostics, pointer);

FlaxCodegenSnapshotFieldModel? Function(Object? value, String pointer)
_decodeSnapshotFieldFn(FlaxCodegenManifestV2Diagnostics diagnostics) =>
    (value, pointer) => _decodeSnapshotField(value, diagnostics, pointer);

FlaxCodegenClassModel? Function(Object? value, String pointer) _decodeClassFn(
  FlaxCodegenManifestV2Diagnostics diagnostics,
) =>
    (value, pointer) => _decodeClass(value, diagnostics, pointer);

FlaxCodegenNamedTypeModel? Function(Object? value, String pointer)
_decodeNamedTypeFn(FlaxCodegenManifestV2Diagnostics diagnostics) =>
    (value, pointer) => _decodeNamedType(value, diagnostics, pointer);

FlaxCodegenFunctionModel? Function(Object? value, String pointer)
_decodeFunctionFn(FlaxCodegenManifestV2Diagnostics diagnostics) =>
    (value, pointer) => _decodeFunction(value, diagnostics, pointer);

FlaxCodegenSnapshotModel? Function(Object? value, String pointer)
_decodeSnapshotFn(FlaxCodegenManifestV2Diagnostics diagnostics) =>
    (value, pointer) => _decodeSnapshot(value, diagnostics, pointer);

FlaxCodegenSourceIdentity? Function(Object? value, String pointer)
_decodeSourceIdentityFn(FlaxCodegenManifestV2Diagnostics diagnostics) =>
    (value, pointer) => _decodeSourceIdentity(value, diagnostics, pointer);

List<MapEntry<Object?, Object?>>? _jsonObjectEntries(Object? value) {
  if (value is Map<String, Object?>) {
    return List<MapEntry<Object?, Object?>>.of(value.entries);
  }
  if (value is Map<String, dynamic>) {
    return [
      for (final entry in value.entries)
        MapEntry<Object?, Object?>(entry.key, entry.value),
    ];
  }
  return null;
}

List<Object?>? _jsonList(Object? value) {
  if (value is List<Object?>) {
    return value;
  }
  if (value is List<dynamic>) {
    return List<Object?>.of(value);
  }
  return null;
}

final _slotPattern = RegExp(r'^g(0|[1-9][0-9]*)$');

/// Returns a non-negative slot index, or null for any malformed / oversized value.
int? _parseSlotIndex(String? slot) {
  if (slot == null) return null;
  final match = _slotPattern.firstMatch(slot);
  if (match == null) return null;
  return int.tryParse(match.group(1)!);
}

Object? _resolveParameterSlot(
  FlaxCodegenManifestV2Diagnostics diagnostics,
  _SlotDecodeScope? scope,
  String? slot,
  String slotPointer,
) {
  if (slot == null) {
    diagnostics.add(pointer: slotPointer, message: 'Missing slot.');
    return null;
  }
  final index = _parseSlotIndex(slot);
  if (index == null) {
    diagnostics.add(pointer: slotPointer, message: 'Invalid slot.');
    return null;
  }
  if (scope == null) {
    diagnostics.add(pointer: slotPointer, message: 'Out-of-scope slot.');
    return null;
  }
  return scope.resolve(diagnostics, index, slotPointer);
}

final class _PendingGeneric {
  const _PendingGeneric({
    required this.name,
    required this.pointer,
    required this.index,
    required this.identity,
    required this.boundJson,
    required this.defaultTypeJson,
  });

  final String name;
  final String pointer;
  final int index;
  final Object identity;
  final Object? boundJson;
  final Object? defaultTypeJson;
}

final class _PendingParameter {
  const _PendingParameter({
    required this.name,
    required this.pointer,
    required this.typeJson,
    required this.required,
    required this.positional,
    required this.defaultCode,
    required this.omitWhenAbsent,
    required this.independentWidgetResult,
    required this.snapshot,
    required this.encodeKind,
    required this.scoped,
  });

  final String name;
  final String pointer;
  final Object? typeJson;
  final bool required;
  final bool positional;
  final String defaultCode;
  final bool omitWhenAbsent;
  final bool independentWidgetResult;
  final String? snapshot;
  final String? encodeKind;
  final bool scoped;
}

/// Encode-side lexical allocator mirroring ADR 0022 / shape-v1.
///
/// Never throws: invalid live identities emit slot strings that decode rejects.
final class _SlotEncodeScope {
  var _next = 0;
  final _slots = HashMap<Object, int>.identity();
  final _forever = HashMap<Object, int>.identity();
  final _pendingRelease = <Object>[];

  /// Allocates or synthesizes a declaration slot. Does not throw.
  String? allocateDeclaration(Object? identity) {
    if (identity == null) return null;
    final active = _slots[identity];
    if (active != null) {
      // Active duplicate / shadow: repeat the live slot for decode rejection.
      return 'g$active';
    }
    // Released or first sighting: advance the monotonic counter. A prior
    // forever entry is overwritten so this surface's references use the new
    // slot; sibling surfaces never reuse a released slot index (ADR 0022).
    final index = _next;
    _next += 1;
    _slots[identity] = index;
    _forever[identity] = index;
    _pendingRelease.add(identity);
    return 'g$index';
  }

  List<Object> takeReserved() {
    final reserved = List<Object>.of(_pendingRelease);
    _pendingRelease.clear();
    return reserved;
  }

  void release(List<Object> reserved) {
    for (final identity in reserved) {
      _slots.remove(identity);
    }
  }

  String? slotFor(Object? identity) {
    if (identity == null) return null;
    final active = _slots[identity];
    if (active != null) return 'g$active';
    final prior = _forever[identity];
    if (prior != null) {
      // Released identity reference → Illegal capture on decode.
      return 'g$prior';
    }
    // Unknown identity → Missing slot on decode.
    return null;
  }
}

/// Decode-side lexical environment: slot index → fresh shared Object token.
final class _SlotDecodeScope {
  var _next = 0;
  final _active = <int, Object>{};
  final _tokens = <int, Object>{};
  final _declared = <int>{};

  int? declare(
    FlaxCodegenManifestV2Diagnostics diagnostics,
    String? slot,
    String slotPointer,
  ) {
    if (slot == null) {
      diagnostics.add(pointer: slotPointer, message: 'Missing slot.');
      return null;
    }
    final index = _parseSlotIndex(slot);
    if (index == null) {
      diagnostics.add(pointer: slotPointer, message: 'Invalid slot.');
      return null;
    }
    if (_active.containsKey(index)) {
      diagnostics.add(pointer: slotPointer, message: 'Illegal shadowing.');
      return null;
    }
    if (_declared.contains(index)) {
      diagnostics.add(pointer: slotPointer, message: 'Slot reuse.');
      return null;
    }
    if (index != _next) {
      diagnostics.add(
        pointer: slotPointer,
        message: index < _next ? 'Non-preorder slot.' : 'Slot gap.',
      );
      return null;
    }
    final token = Object();
    _declared.add(index);
    _tokens[index] = token;
    _active[index] = token;
    _next += 1;
    return index;
  }

  Object? identityAt(int index) => _active[index];

  void release(List<int> indexes) {
    for (final index in indexes) {
      _active.remove(index);
    }
  }

  Object? resolve(
    FlaxCodegenManifestV2Diagnostics diagnostics,
    int index,
    String slotPointer,
  ) {
    final active = _active[index];
    if (active != null) return active;
    if (_declared.contains(index)) {
      diagnostics.add(pointer: slotPointer, message: 'Illegal capture.');
      return null;
    }
    diagnostics.add(pointer: slotPointer, message: 'Out-of-scope slot.');
    return null;
  }
}
