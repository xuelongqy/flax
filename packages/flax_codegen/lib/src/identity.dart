import 'dart:collection';
import 'dart:convert';

import 'model.dart';

/// UTF-8 percent encoding for public binding names and derived-shape strings.
abstract final class FlaxCodegenPercentEncoding {
  static String encode(String value) {
    final output = StringBuffer();
    for (final byte in utf8.encode(value)) {
      if (_isUnreserved(byte)) {
        output.writeCharCode(byte);
      } else {
        output.write('%');
        output.write(byte.toRadixString(16).toUpperCase().padLeft(2, '0'));
      }
    }
    return output.toString();
  }

  /// Rejects malformed, lowercase, noncanonical, and invalid UTF-8 encodings.
  /// Does not decode or rewrite [encoded] into a canonical form.
  static void validate(String encoded) {
    final decoded = _decode(encoded);
    if (encode(decoded) != encoded) {
      throw const FormatException('Noncanonical percent encoding.');
    }
  }
}

final class FlaxCodegenBindingNamespace {
  FlaxCodegenBindingNamespace._(this.value);

  factory FlaxCodegenBindingNamespace.parse(String value) {
    if (!_isBindingNamespace(value)) {
      throw const FormatException('Invalid bindingNamespace.');
    }
    return FlaxCodegenBindingNamespace._(value);
  }

  final String value;

  @override
  bool operator ==(Object other) =>
      other is FlaxCodegenBindingNamespace && value == other.value;

  @override
  int get hashCode => value.hashCode;

  @override
  String toString() => value;
}

final class FlaxCodegenModuleName {
  FlaxCodegenModuleName._(this.value);

  factory FlaxCodegenModuleName.parse(String value) {
    if (!_isModuleName(value)) {
      throw const FormatException('Invalid module name.');
    }
    return FlaxCodegenModuleName._(value);
  }

  final String value;

  @override
  bool operator ==(Object other) =>
      other is FlaxCodegenModuleName && value == other.value;

  @override
  int get hashCode => value.hashCode;

  @override
  String toString() => value;
}

final class FlaxCodegenModuleId {
  FlaxCodegenModuleId._(this.namespace, this.name);

  factory FlaxCodegenModuleId({
    required FlaxCodegenBindingNamespace namespace,
    required FlaxCodegenModuleName name,
  }) => FlaxCodegenModuleId._(namespace, name);

  factory FlaxCodegenModuleId.parse(String value) {
    final slash = value.indexOf('/');
    if (slash <= 0 || value.indexOf('/', slash + 1) != -1) {
      throw const FormatException('Invalid moduleId.');
    }
    return FlaxCodegenModuleId(
      namespace: FlaxCodegenBindingNamespace.parse(value.substring(0, slash)),
      name: FlaxCodegenModuleName.parse(value.substring(slash + 1)),
    );
  }

  final FlaxCodegenBindingNamespace namespace;
  final FlaxCodegenModuleName name;

  String get value => '${namespace.value}/${name.value}';

  @override
  bool operator ==(Object other) =>
      other is FlaxCodegenModuleId && value == other.value;

  @override
  int get hashCode => value.hashCode;

  @override
  String toString() => value;
}

enum FlaxCodegenWireKind { type, function }

enum FlaxCodegenDeclarationKind {
  type,
  function;

  static FlaxCodegenDeclarationKind parse(String value) => switch (value) {
    'type' => type,
    'function' => function,
    _ => throw const FormatException('Unsupported declaration kind.'),
  };
}

enum FlaxCodegenOriginState {
  resolved,
  unresolved,
  alias,
  synthetic,
  ambiguous,
}

final class FlaxCodegenWireId {
  FlaxCodegenWireId._(this.moduleId, this.kind, this.publicBindingName);

  factory FlaxCodegenWireId.type({
    required FlaxCodegenModuleId moduleId,
    required String publicBindingName,
  }) => FlaxCodegenWireId._(
    moduleId,
    FlaxCodegenWireKind.type,
    _publicBindingName(publicBindingName),
  );

  factory FlaxCodegenWireId.function({
    required FlaxCodegenModuleId moduleId,
    required String publicBindingName,
  }) => FlaxCodegenWireId._(
    moduleId,
    FlaxCodegenWireKind.function,
    _publicBindingName(publicBindingName),
  );

  factory FlaxCodegenWireId.parse(String value) {
    final hash = value.indexOf('#');
    if (hash <= 0) {
      throw const FormatException('Invalid wireId.');
    }
    final moduleId = FlaxCodegenModuleId.parse(value.substring(0, hash));
    final rest = value.substring(hash + 1);
    final FlaxCodegenWireKind kind;
    final String encoded;
    if (rest.startsWith('type:')) {
      kind = FlaxCodegenWireKind.type;
      encoded = rest.substring('type:'.length);
    } else if (rest.startsWith('function:')) {
      kind = FlaxCodegenWireKind.function;
      encoded = rest.substring('function:'.length);
    } else {
      throw const FormatException('Invalid wireId.');
    }
    FlaxCodegenPercentEncoding.validate(encoded);
    return FlaxCodegenWireId._(
      moduleId,
      kind,
      _publicBindingName(_decode(encoded)),
    );
  }

  final FlaxCodegenModuleId moduleId;
  final FlaxCodegenWireKind kind;
  final String publicBindingName;

  String get encodedPublicBindingName =>
      FlaxCodegenPercentEncoding.encode(publicBindingName);

  String get value =>
      '${moduleId.value}#${kind.name}:$encodedPublicBindingName';

  @override
  bool operator ==(Object other) =>
      other is FlaxCodegenWireId && value == other.value;

  @override
  int get hashCode => value.hashCode;

  @override
  String toString() => value;
}

final class FlaxCodegenSourceIdentity {
  FlaxCodegenSourceIdentity._(this.kind, this.originatingUri, this.name);

  factory FlaxCodegenSourceIdentity({
    required FlaxCodegenDeclarationKind kind,
    required String originatingUri,
    required String name,
    required FlaxCodegenOriginState origin,
  }) {
    switch (origin) {
      case FlaxCodegenOriginState.synthetic:
        throw const FormatException('Synthetic declaration.');
      case FlaxCodegenOriginState.alias:
        throw const FormatException('Alias declaration.');
      case FlaxCodegenOriginState.unresolved:
        throw const FormatException('Unresolved alias.');
      case FlaxCodegenOriginState.ambiguous:
        throw const FormatException('Ambiguous origin.');
      case FlaxCodegenOriginState.resolved:
        break;
    }
    if (!_isCanonicalOriginatingUri(originatingUri)) {
      throw const FormatException('Invalid originating URI.');
    }
    return FlaxCodegenSourceIdentity._(
      kind,
      originatingUri,
      _publicBindingName(name),
    );
  }

  final FlaxCodegenDeclarationKind kind;
  final String originatingUri;
  final String name;

  @override
  bool operator ==(Object other) =>
      other is FlaxCodegenSourceIdentity &&
      kind == other.kind &&
      originatingUri == other.originatingUri &&
      name == other.name;

  @override
  int get hashCode => Object.hash(kind, originatingUri, name);
}

/// Canonical `shape-v1:` encoding of a resolved type shape.
final class FlaxCodegenShapeV1 {
  FlaxCodegenShapeV1._(this.value);

  factory FlaxCodegenShapeV1.encode(
    FlaxCodegenTypeRef type, {
    FlaxCodegenShapeAdapter? adapter,
    bool independentWidgetResult = false,
  }) {
    if (independentWidgetResult && type.kind != 'callback') {
      throw const FormatException(
        'independentWidgetResult requires a callback.',
      );
    }
    var encoded = _encodeShape(
      type,
      allocator: _GenericAllocator(),
      independentWidgetResult: independentWidgetResult,
    );
    if (adapter != null) {
      encoded = _encodeAdapter(adapter, encoded);
    }
    return FlaxCodegenShapeV1._('shape-v1:${jsonEncode(encoded)}');
  }

  /// Computes the expected canonical string and compares [incoming] exactly.
  /// Never parses incoming JSON or reserializes it.
  static bool matches(
    String incoming,
    FlaxCodegenTypeRef type, {
    FlaxCodegenShapeAdapter? adapter,
    bool independentWidgetResult = false,
  }) =>
      FlaxCodegenShapeV1.encode(
        type,
        adapter: adapter,
        independentWidgetResult: independentWidgetResult,
      ).value ==
      incoming;

  final String value;

  @override
  bool operator ==(Object other) =>
      other is FlaxCodegenShapeV1 && value == other.value;

  @override
  int get hashCode => value.hashCode;

  @override
  String toString() => value;
}

final class FlaxCodegenShapeAdapter {
  const FlaxCodegenShapeAdapter({
    required this.kind,
    this.encodeKind,
    this.scoped = false,
    this.asyncIterableFactory,
  });

  final String kind;
  final String? encodeKind;
  final bool scoped;
  final String? asyncIterableFactory;
}

const _label = r'[a-z][a-z0-9]{0,62}';
final _namespacePattern = RegExp('^$_label(?:\\.$_label)+\$');
final _moduleNamePattern = RegExp(r'^[a-z][a-z0-9_]{0,63}$');
final _packageNamePattern = RegExp(r'^[a-z][a-z0-9_]*$');
final _dartLibraryPattern = RegExp(r'^_?[a-z][a-z0-9_]*$');

bool _isBindingNamespace(String value) =>
    value.length >= 3 &&
    value.length <= 253 &&
    _namespacePattern.hasMatch(value);

bool _isModuleName(String value) =>
    value.isNotEmpty &&
    value.length <= 64 &&
    _moduleNamePattern.hasMatch(value);

bool _isCanonicalOriginatingUri(String uri) {
  final parsed = Uri.tryParse(uri);
  if (parsed == null) return false;
  if (uri != parsed.toString()) return false;
  if (uri != parsed.normalizePath().toString()) return false;
  if (parsed.hasAuthority || parsed.hasQuery || parsed.hasFragment) {
    return false;
  }
  if (parsed.scheme == 'package' && uri.startsWith('package:')) {
    return _isCanonicalPackageUri(parsed);
  }
  if (parsed.scheme == 'dart' && uri.startsWith('dart:')) {
    return _isCanonicalDartUri(parsed.path);
  }
  return false;
}

bool _isCanonicalPackageUri(Uri parsed) {
  final segments = parsed.pathSegments;
  if (segments.length < 2) return false;
  if (!_packageNamePattern.hasMatch(segments.first)) return false;
  for (final segment in segments) {
    if (segment.isEmpty || segment == '.' || segment == '..') return false;
    if (segment.contains('/') || segment.contains(r'\')) return false;
  }
  return true;
}

bool _isCanonicalDartUri(String path) => _dartLibraryPattern.hasMatch(path);

String _publicBindingName(String name) {
  if (name.isEmpty) {
    throw const FormatException('Empty name.');
  }
  if (name.startsWith('_')) {
    throw const FormatException('Private name.');
  }
  return name;
}

bool _isUnreserved(int byte) =>
    (byte >= 0x41 && byte <= 0x5A) ||
    (byte >= 0x61 && byte <= 0x7A) ||
    (byte >= 0x30 && byte <= 0x39) ||
    byte == 0x5F ||
    byte == 0x2E ||
    byte == 0x2D ||
    byte == 0x7E;

bool _isUpperHex(int code) =>
    (code >= 0x30 && code <= 0x39) || (code >= 0x41 && code <= 0x46);

int _hexValue(int code) => code <= 0x39 ? code - 0x30 : code - 0x41 + 10;

String _decode(String encoded) {
  final bytes = <int>[];
  for (var index = 0; index < encoded.length; index++) {
    final code = encoded.codeUnitAt(index);
    if (_isUnreserved(code)) {
      bytes.add(code);
      continue;
    }
    if (code != 0x25 ||
        index + 2 >= encoded.length ||
        !_isUpperHex(encoded.codeUnitAt(index + 1)) ||
        !_isUpperHex(encoded.codeUnitAt(index + 2))) {
      throw const FormatException('Malformed percent encoding.');
    }
    bytes.add(
      (_hexValue(encoded.codeUnitAt(index + 1)) << 4) |
          _hexValue(encoded.codeUnitAt(index + 2)),
    );
    index += 2;
  }
  try {
    return utf8.decode(bytes);
  } on FormatException {
    throw const FormatException('Invalid UTF-8.');
  }
}

const _primitiveKinds = {
  'String',
  'bool',
  'int',
  'double',
  'num',
  'scalar',
  'void',
  'any',
  'data',
  'widget',
};

const _collectionKinds = {'iterable', 'list', 'set'};
const _nominalKinds = {'enum', 'object', 'context', 'state', 'route', 'page'};

final class _GenericAllocator {
  var _next = 0;
  final _slots = HashMap<Object, int>.identity();
  final _claimed = HashSet<Object>.identity();

  List<Object> reserve(List<FlaxCodegenGenericParameter> typeParameters) {
    final reserved = <Object>[];
    for (final parameter in typeParameters) {
      final identity = parameter.genericIdentity;
      if (identity == null) {
        throw const FormatException('Missing generic identity.');
      }
      if (_claimed.contains(identity)) {
        throw const FormatException('Duplicate generic identity.');
      }
      _claimed.add(identity);
      _slots[identity] = _next;
      _next += 1;
      reserved.add(identity);
    }
    return reserved;
  }

  void release(List<Object> reserved) {
    for (final identity in reserved) {
      _slots.remove(identity);
    }
  }

  String slot(Object? identity) {
    if (identity == null) {
      throw const FormatException('Type-parameter outside callback.');
    }
    final index = _slots[identity];
    if (index == null) {
      throw const FormatException('Type-parameter outside callback.');
    }
    return 'g$index';
  }
}

void _rejectExtraneous(
  FlaxCodegenTypeRef type, {
  bool id = false,
  bool name = false,
  bool item = false,
  bool key = false,
  bool parameters = false,
  bool typeParameters = false,
  bool result = false,
  bool typeArguments = false,
  bool dartArguments = false,
  bool primitiveKinds = false,
  bool declaration = false,
  bool tsArguments = false,
  bool genericIdentity = false,
}) {
  if ((!id && type.id != null) ||
      (!name && type.name != null) ||
      (!item && type.item != null) ||
      (!key && type.key != null) ||
      (!parameters && type.parameters.isNotEmpty) ||
      (!typeParameters && type.typeParameters.isNotEmpty) ||
      (!result && type.result != null) ||
      (!typeArguments && type.typeArguments.isNotEmpty) ||
      (!dartArguments && type.dartArguments.isNotEmpty) ||
      (!primitiveKinds && type.primitiveKinds.isNotEmpty) ||
      (!declaration && type.declaration != null) ||
      (!tsArguments && type.tsArguments.isNotEmpty) ||
      (!genericIdentity && type.genericIdentity != null)) {
    throw const FormatException('Invalid shape arity.');
  }
}

List<Object?> _encodeShape(
  FlaxCodegenTypeRef type, {
  required _GenericAllocator allocator,
  bool independentWidgetResult = false,
}) {
  if (independentWidgetResult && type.kind != 'callback') {
    throw const FormatException('independentWidgetResult requires a callback.');
  }
  if (type.kind == 'callback') {
    return _encodeCallback(
      type,
      allocator,
      independentWidgetResult: independentWidgetResult,
    );
  }
  if (type.kind == 'parameter') {
    _rejectExtraneous(type, genericIdentity: true);
    return [
      'type-parameter',
      allocator.slot(type.genericIdentity),
      _nullable(type.nullable),
    ];
  }
  if (type.kind == 'widget' && type.id == null) {
    return _encodePrimitive(type);
  }
  if (_primitiveKinds.contains(type.kind) && type.kind != 'widget') {
    return _encodePrimitive(type);
  }
  if (_collectionKinds.contains(type.kind)) {
    return _encodeCollection(type, allocator);
  }
  if (type.kind == 'map') {
    return _encodeMap(type, allocator);
  }
  if (type.kind == 'future' || type.kind == 'futureOr') {
    return _encodeUnary(type, allocator);
  }
  if (type.kind == 'stream') {
    return _encodeStream(type, allocator);
  }
  if (type.kind == 'widget' || _nominalKinds.contains(type.kind)) {
    return _encodeNominal(type, allocator);
  }
  throw const FormatException('Unsupported shape tag.');
}

List<Object?> _encodeCallback(
  FlaxCodegenTypeRef type,
  _GenericAllocator allocator, {
  required bool independentWidgetResult,
}) {
  _rejectExtraneous(
    type,
    parameters: true,
    typeParameters: true,
    result: true,
    dartArguments: true,
  );
  final result = type.result;
  if (result == null) {
    throw const FormatException('Invalid callback arity.');
  }
  if (independentWidgetResult && !_isWidgetResult(result)) {
    throw const FormatException(
      'independentWidgetResult requires a Widget result.',
    );
  }
  final reserved = allocator.reserve(type.typeParameters);
  try {
    final bounds = [
      for (final parameter in type.typeParameters)
        _encodeShape(parameter.bound, allocator: allocator),
    ];
    final defaults = [
      for (final parameter in type.typeParameters)
        parameter.defaultType == null
            ? null
            : _encodeShape(parameter.defaultType!, allocator: allocator),
    ];
    return [
      'callback',
      _nullable(type.nullable),
      [
        for (var index = 0; index < type.typeParameters.length; index++)
          [
            'generic',
            allocator.slot(type.typeParameters[index].genericIdentity),
            bounds[index],
            defaults[index],
          ],
      ],
      [
        for (final argument in type.dartArguments)
          _encodeShape(argument, allocator: allocator),
      ],
      [
        for (final parameter in type.parameters.where((p) => p.positional))
          _encodeParam(parameter, allocator),
      ],
      [
        for (final parameter in _namedParameters(type.parameters))
          _encodeParam(parameter, allocator),
      ],
      _encodeShape(result, allocator: allocator),
      _asyncMode(result),
      _nullable(independentWidgetResult),
    ];
  } finally {
    allocator.release(reserved);
  }
}

List<Object?> _encodeParam(
  FlaxCodegenParameterModel parameter,
  _GenericAllocator allocator,
) {
  if (parameter.defaultCode != 'null') {
    throw const FormatException('Callback parameter default must be null.');
  }
  if (parameter.snapshot != null && parameter.snapshot!.isEmpty) {
    throw const FormatException('Invalid snapshot.');
  }
  if (parameter.encodeKind != null && parameter.encodeKind!.isEmpty) {
    throw const FormatException('Invalid encodeKind.');
  }
  if (!parameter.positional && parameter.name.isEmpty) {
    throw const FormatException('Empty name.');
  }
  return [
    'param',
    _parameterMode(parameter),
    parameter.positional
        ? null
        : FlaxCodegenPercentEncoding.encode(parameter.name),
    _encodeShape(
      parameter.type,
      allocator: allocator,
      independentWidgetResult: parameter.independentWidgetResult,
    ),
    null,
    _nullable(parameter.omitWhenAbsent),
    parameter.snapshot == null
        ? null
        : FlaxCodegenPercentEncoding.encode(parameter.snapshot!),
    parameter.encodeKind == null
        ? null
        : FlaxCodegenPercentEncoding.encode(parameter.encodeKind!),
    _nullable(parameter.scoped),
  ];
}

List<FlaxCodegenParameterModel> _namedParameters(
  List<FlaxCodegenParameterModel> parameters,
) {
  final named = [
    for (final parameter in parameters)
      if (!parameter.positional) parameter,
  ];
  named.sort(
    (left, right) =>
        FlaxCodegenPercentEncoding.encode(left.name)
            .compareTo(FlaxCodegenPercentEncoding.encode(right.name)),
  );
  final seen = <String>{};
  for (final parameter in named) {
    if (!seen.add(FlaxCodegenPercentEncoding.encode(parameter.name))) {
      throw const FormatException('Duplicate named parameter.');
    }
  }
  return named;
}

String _parameterMode(FlaxCodegenParameterModel parameter) {
  if (parameter.positional) {
    return parameter.required ? 'requiredPositional' : 'optionalPositional';
  }
  return parameter.required ? 'requiredNamed' : 'optionalNamed';
}

String _asyncMode(FlaxCodegenTypeRef result) => switch (result.kind) {
  'future' => 'future',
  'futureOr' => 'futureOr',
  'stream' => 'stream',
  _ => 'sync',
};

bool _isWidgetResult(FlaxCodegenTypeRef result) => result.kind == 'widget';

List<Object?> _encodePrimitive(FlaxCodegenTypeRef type) {
  _rejectExtraneous(type, primitiveKinds: true);
  if (!_primitiveKinds.contains(type.kind)) {
    throw const FormatException('Invalid primitive kind.');
  }
  if (type.kind == 'void' && type.nullable) {
    throw const FormatException('Invalid nullable void.');
  }
  return [
    'primitive',
    FlaxCodegenPercentEncoding.encode(type.kind),
    _nullable(type.nullable),
    _uniqueSortedEncoded(type.primitiveKinds),
  ];
}

List<Object?> _encodeCollection(
  FlaxCodegenTypeRef type,
  _GenericAllocator allocator,
) {
  _rejectExtraneous(type, item: true);
  if (!_collectionKinds.contains(type.kind)) {
    throw const FormatException('Invalid collection kind.');
  }
  if (type.item == null) {
    throw const FormatException('Invalid collection arity.');
  }
  return [
    'collection',
    FlaxCodegenPercentEncoding.encode(type.kind),
    _nullable(type.nullable),
    _encodeShape(type.item!, allocator: allocator),
  ];
}

List<Object?> _encodeMap(FlaxCodegenTypeRef type, _GenericAllocator allocator) {
  _rejectExtraneous(type, item: true, key: true);
  if (type.item == null || type.key == null) {
    throw const FormatException('Invalid map arity.');
  }
  return [
    'map',
    _nullable(type.nullable),
    _encodeShape(type.key!, allocator: allocator),
    _encodeShape(type.item!, allocator: allocator),
  ];
}

List<Object?> _encodeUnary(
  FlaxCodegenTypeRef type,
  _GenericAllocator allocator,
) {
  _rejectExtraneous(type, item: true);
  if (type.item == null) {
    throw const FormatException('Invalid shape arity.');
  }
  return [
    type.kind,
    _nullable(type.nullable),
    _encodeShape(type.item!, allocator: allocator),
  ];
}

List<Object?> _encodeStream(
  FlaxCodegenTypeRef type,
  _GenericAllocator allocator,
) {
  _rejectExtraneous(type, item: true, id: true, name: true);
  if (type.item == null) {
    throw const FormatException('Invalid stream arity.');
  }
  return [
    'stream',
    _nullable(type.nullable),
    _encodeShape(type.item!, allocator: allocator),
    _optionalEncodedTypeWireId(type.id),
  ];
}

List<Object?> _encodeNominal(
  FlaxCodegenTypeRef type,
  _GenericAllocator allocator,
) {
  _rejectExtraneous(type, id: true, name: true, dartArguments: true);
  return [
    'nominal',
    _encodedTypeWireId(type.id, stream: false),
    _nullable(type.nullable),
    [
      for (final argument in type.dartArguments)
        _encodeShape(argument, allocator: allocator),
    ],
  ];
}

List<Object?> _encodeAdapter(
  FlaxCodegenShapeAdapter adapter,
  List<Object?> inner,
) {
  if (adapter.kind.isEmpty) {
    throw const FormatException('Invalid adapter kind.');
  }
  if (adapter.encodeKind != null && adapter.encodeKind!.isEmpty) {
    throw const FormatException('Invalid encodeKind.');
  }
  if (adapter.asyncIterableFactory != null &&
      adapter.asyncIterableFactory!.isEmpty) {
    throw const FormatException('Invalid asyncIterableFactory.');
  }
  return [
    'adapter',
    FlaxCodegenPercentEncoding.encode(adapter.kind),
    adapter.encodeKind == null
        ? null
        : FlaxCodegenPercentEncoding.encode(adapter.encodeKind!),
    _nullable(adapter.scoped),
    adapter.asyncIterableFactory == null
        ? null
        : FlaxCodegenPercentEncoding.encode(adapter.asyncIterableFactory!),
    inner,
  ];
}

String _encodedTypeWireId(String? id, {required bool stream}) {
  if (id == null || id.isEmpty) {
    if (stream) {
      throw const FormatException('Invalid stream wireId.');
    }
    throw const FormatException('Invalid nominal wireId.');
  }
  final wireId = FlaxCodegenWireId.parse(id);
  if (wireId.kind != FlaxCodegenWireKind.type) {
    throw const FormatException('Invalid type wireId.');
  }
  return FlaxCodegenPercentEncoding.encode(wireId.value);
}

Object? _optionalEncodedTypeWireId(String? id) {
  if (id == null) return null;
  return _encodedTypeWireId(id, stream: true);
}

List<String> _uniqueSortedEncoded(List<String> values) {
  final encoded = {
    for (final value in values) FlaxCodegenPercentEncoding.encode(value),
  }.toList()..sort();
  return encoded;
}

int _nullable(bool value) => value ? 1 : 0;
