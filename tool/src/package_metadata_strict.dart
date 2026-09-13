import 'package:yaml/yaml.dart';

/// One fail-closed projected-field diagnostic from the Tooling metadata reader.
final class FlaxPackageMetadataDiagnostic
    implements Comparable<FlaxPackageMetadataDiagnostic> {
  const FlaxPackageMetadataDiagnostic({
    required this.code,
    required this.source,
    required this.offset,
    required this.line,
    required this.column,
    required this.pointer,
    required this.message,
  });

  final String code;
  final String source;
  final int offset;
  final int line;
  final int column;
  final String pointer;
  final String message;

  static String jsonPointerToken(String token) =>
      token.replaceAll('~', '~0').replaceAll('/', '~1');

  static List<FlaxPackageMetadataDiagnostic> sorted(
    Iterable<FlaxPackageMetadataDiagnostic> diagnostics,
  ) {
    final list = List<FlaxPackageMetadataDiagnostic>.of(diagnostics);
    list.sort();
    return list;
  }

  @override
  int compareTo(FlaxPackageMetadataDiagnostic other) {
    final sourceOrder = source.compareTo(other.source);
    if (sourceOrder != 0) return sourceOrder;
    final offsetOrder = offset.compareTo(other.offset);
    if (offsetOrder != 0) return offsetOrder;
    final codeOrder = code.compareTo(other.code);
    if (codeOrder != 0) return codeOrder;
    return pointer.compareTo(other.pointer);
  }

  @override
  String toString() => '$source:$line:$column: $code $pointer: $message';
}

/// Collected projected-field diagnostics from the strict Tooling metadata reader.
final class FlaxPackageMetadataException implements Exception {
  FlaxPackageMetadataException(
    Iterable<FlaxPackageMetadataDiagnostic> diagnostics,
  ) : diagnostics = List.unmodifiable(
        FlaxPackageMetadataDiagnostic.sorted(diagnostics),
      );

  final List<FlaxPackageMetadataDiagnostic> diagnostics;

  @override
  String toString() => diagnostics.join('\n');
}

const _label = r'[a-z][a-z0-9]{0,62}';
final _namespacePattern = RegExp('^$_label(?:\\.$_label)+\$');

bool _isBindingNamespace(String value) =>
    value.length >= 3 &&
    value.length <= 253 &&
    _namespacePattern.hasMatch(value);

void validateFlaxPackageMetadataProjection(
  String contents, {
  required String source,
}) {
  final diagnostics = _ProjectedDiagnostics(source);
  final rootNode = _loadYamlNode(contents, diagnostics);
  if (rootNode is! YamlMap) {
    diagnostics.add(
      code: 'FCG_TYPE_MISMATCH',
      pointer: '',
      message: 'Expected a mapping.',
      node: rootNode,
    );
    diagnostics.throwIfAny();
    throw StateError('Unreachable root type mismatch');
  }
  final root = _ProjectedMap(diagnostics, rootNode);
  final format = root.requiredInt('format');
  if (format != null && format != 1) {
    diagnostics.add(
      code: 'FCG_INVALID_VALUE',
      pointer: '/format',
      message: 'Expected 1.',
      node: root.node('format'),
    );
  }
  final capabilities = root.requiredStringList('capabilities');
  final namespace = root.optionalNamespace();
  if (capabilities != null &&
      (namespace.omitted || namespace.value != null) &&
      capabilities.contains('bindings') != (namespace.value != null)) {
    diagnostics.add(
      code: 'FCG_INCOMPATIBLE_FIELDS',
      pointer: '/bindingNamespace',
      message: 'capabilities bindings and bindingNamespace must match.',
      node: namespace.node ?? root.map,
    );
  }
  diagnostics.throwIfAny();
}

YamlNode _loadYamlNode(String contents, _ProjectedDiagnostics diagnostics) {
  try {
    return loadYamlNode(contents, sourceUrl: Uri(path: diagnostics.source));
  } on YamlException catch (error) {
    final duplicate = error.message == 'Duplicate mapping key.';
    final start = error.span?.start;
    diagnostics.add(
      code: duplicate ? 'FCG_DUPLICATE_KEY' : 'FCG_YAML_SYNTAX',
      pointer: '',
      message: error.message,
      offset: start?.offset ?? 0,
      line: (start?.line ?? 0) + 1,
      column: (start?.column ?? 0) + 1,
    );
    diagnostics.throwIfAny();
    throw StateError('Unreachable YAML exception');
  }
}

final class _NamespaceField {
  const _NamespaceField({required this.omitted, this.value, this.node});

  final bool omitted;
  final String? value;
  final YamlNode? node;
}

final class _ProjectedDiagnostics {
  _ProjectedDiagnostics(this.source);

  final String source;
  final List<FlaxPackageMetadataDiagnostic> items = [];

  void throwIfAny() {
    if (items.isEmpty) return;
    throw FlaxPackageMetadataException(items);
  }

  void add({
    required String code,
    required String pointer,
    required String message,
    YamlNode? node,
    int? offset,
    int? line,
    int? column,
  }) {
    final start = node?.span.start;
    items.add(
      FlaxPackageMetadataDiagnostic(
        code: code,
        source: source,
        offset: offset ?? start?.offset ?? 0,
        line: line ?? (start == null ? 1 : start.line + 1),
        column: column ?? (start == null ? 1 : start.column + 1),
        pointer: pointer,
        message: message,
      ),
    );
  }
}

final class _ProjectedMap {
  _ProjectedMap(this.diagnostics, this.map);

  final _ProjectedDiagnostics diagnostics;
  final YamlMap map;

  YamlNode? node(String key) => map.nodes[key];

  int? requiredInt(String key) {
    final value = node(key);
    if (value == null) {
      diagnostics.add(
        code: 'FCG_MISSING_FIELD',
        pointer: '/$key',
        message: 'Missing field.',
        node: map,
      );
      return null;
    }
    if (value.value is! int) {
      diagnostics.add(
        code: 'FCG_TYPE_MISMATCH',
        pointer: '/$key',
        message: 'Expected an integer.',
        node: value,
      );
      return null;
    }
    return value.value as int;
  }

  List<String>? requiredStringList(String key) {
    final value = node(key);
    if (value == null) {
      diagnostics.add(
        code: 'FCG_MISSING_FIELD',
        pointer: '/$key',
        message: 'Missing field.',
        node: map,
      );
      return null;
    }
    if (value is! YamlList) {
      diagnostics.add(
        code: 'FCG_TYPE_MISMATCH',
        pointer: '/$key',
        message: 'Expected a list of strings.',
        node: value,
      );
      return null;
    }
    final values = <String>[];
    final seen = <String>{};
    for (var index = 0; index < value.nodes.length; index++) {
      final item = value.nodes[index];
      final pointer = '/$key/$index';
      if (item.value is! String) {
        diagnostics.add(
          code: 'FCG_TYPE_MISMATCH',
          pointer: pointer,
          message: 'Expected a string.',
          node: item,
        );
        continue;
      }
      final text = item.value as String;
      if (text.isEmpty) {
        diagnostics.add(
          code: 'FCG_INVALID_VALUE',
          pointer: pointer,
          message: 'Expected a nonempty string.',
          node: item,
        );
        continue;
      }
      if (!seen.add(text)) {
        diagnostics.add(
          code: 'FCG_DUPLICATE_VALUE',
          pointer: pointer,
          message: 'Duplicate value.',
          node: item,
        );
        continue;
      }
      values.add(text);
    }
    return values;
  }

  _NamespaceField optionalNamespace() {
    final value = node('bindingNamespace');
    if (value == null) {
      return const _NamespaceField(omitted: true);
    }
    if (value.value is! String) {
      diagnostics.add(
        code: 'FCG_TYPE_MISMATCH',
        pointer: '/bindingNamespace',
        message: 'Expected a string.',
        node: value,
      );
      return _NamespaceField(omitted: false, node: value);
    }
    final text = value.value as String;
    if (!_isBindingNamespace(text)) {
      diagnostics.add(
        code: 'FCG_INVALID_VALUE',
        pointer: '/bindingNamespace',
        message: 'Invalid bindingNamespace.',
        node: value,
      );
      return _NamespaceField(omitted: false, node: value);
    }
    return _NamespaceField(omitted: false, value: text, node: value);
  }
}
