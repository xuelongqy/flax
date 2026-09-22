import 'dart:io';

import 'package:yaml/yaml.dart';

import 'diagnostic.dart';

/// Narrow Codegen view of `flax_package.yaml`: format, capabilities, and namespace.
final class FlaxCodegenPackageMetadataProjection {
  FlaxCodegenPackageMetadataProjection._(
    this.format,
    List<String> capabilities,
    this.bindingNamespace,
    this.dartEntrypoint,
    this.javascriptPackage,
  ) : capabilities = List.unmodifiable(capabilities);

  final int format;
  final List<String> capabilities;
  final String? bindingNamespace;
  final String? dartEntrypoint;
  final String? javascriptPackage;

  factory FlaxCodegenPackageMetadataProjection.parseStrict(
    String contents, {
    String source = 'flax_package.yaml',
  }) => _parsePackageMetadata(contents, source);

  factory FlaxCodegenPackageMetadataProjection.readStrict(String filename) {
    try {
      return FlaxCodegenPackageMetadataProjection.parseStrict(
        File(filename).readAsStringSync(),
        source: filename,
      );
    } on FileSystemException {
      throw FlaxCodegenException([
        FlaxCodegenDiagnostic(
          code: FlaxCodegenDiagnosticCode.path,
          source: filename,
          offset: 0,
          line: 1,
          column: 1,
          pointer: '',
          message: 'Cannot read file.',
        ),
      ]);
    }
  }

  @override
  bool operator ==(Object other) =>
      other is FlaxCodegenPackageMetadataProjection &&
      format == other.format &&
      bindingNamespace == other.bindingNamespace &&
      dartEntrypoint == other.dartEntrypoint &&
      javascriptPackage == other.javascriptPackage &&
      _sameStrings(capabilities, other.capabilities);

  @override
  int get hashCode =>
      Object.hash(
        format,
        bindingNamespace,
        dartEntrypoint,
        javascriptPackage,
        Object.hashAll(capabilities),
      );
}

bool _sameStrings(List<String> left, List<String> right) {
  if (left.length != right.length) return false;
  for (var index = 0; index < left.length; index++) {
    if (left[index] != right[index]) return false;
  }
  return true;
}

const _label = r'[a-z][a-z0-9]{0,62}';
final _namespacePattern = RegExp('^$_label(?:\\.$_label)+\$');

bool _isBindingNamespace(String value) =>
    value.length >= 3 &&
    value.length <= 253 &&
    _namespacePattern.hasMatch(value);

FlaxCodegenPackageMetadataProjection _parsePackageMetadata(
  String contents,
  String source,
) {
  final diagnostics = _MetadataDiagnostics(source);
  final rootNode = _loadYamlNode(contents, diagnostics);
  if (rootNode is! YamlMap) {
    diagnostics.add(
      code: FlaxCodegenDiagnosticCode.typeMismatch,
      pointer: '',
      message: 'Expected a mapping.',
      node: rootNode,
    );
    diagnostics.throwIfAny();
    throw StateError('Unreachable root type mismatch');
  }
  final root = _MetadataMap(diagnostics, rootNode);
  final format = root.requiredInt('format');
  if (format != null && format != 1) {
    diagnostics.add(
      code: FlaxCodegenDiagnosticCode.invalidValue,
      pointer: '/format',
      message: 'Expected 1.',
      node: root.node('format'),
    );
  }
  final capabilities = root.requiredStringList('capabilities');
  final namespace = root.optionalNamespace();
  final dartEntrypoint = root.optionalNestedString('dart', 'entrypoint');
  final javascriptPackage = root.optionalNestedString('javascript', 'package');
  if (capabilities != null &&
      (namespace.omitted || namespace.value != null) &&
      capabilities.contains('bindings') != (namespace.value != null)) {
    diagnostics.add(
      code: FlaxCodegenDiagnosticCode.incompatibleFields,
      pointer: '/bindingNamespace',
      message: 'capabilities bindings and bindingNamespace must match.',
      node: namespace.node ?? root.map,
    );
  }
  diagnostics.throwIfAny();
  return FlaxCodegenPackageMetadataProjection._(
    format!,
    capabilities!,
    namespace.value,
    dartEntrypoint,
    javascriptPackage,
  );
}

YamlNode _loadYamlNode(String contents, _MetadataDiagnostics diagnostics) {
  try {
    return loadYamlNode(contents, sourceUrl: Uri(path: diagnostics.source));
  } on YamlException catch (error) {
    final duplicate = error.message == 'Duplicate mapping key.';
    final start = error.span?.start;
    diagnostics.add(
      code: duplicate
          ? FlaxCodegenDiagnosticCode.duplicateKey
          : FlaxCodegenDiagnosticCode.yamlSyntax,
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

final class _MetadataDiagnostics {
  _MetadataDiagnostics(this.source);

  final String source;
  final List<FlaxCodegenDiagnostic> items = [];

  void throwIfAny() {
    if (items.isEmpty) return;
    throw FlaxCodegenException(items);
  }

  void add({
    required FlaxCodegenDiagnosticCode code,
    required String pointer,
    required String message,
    YamlNode? node,
    int? offset,
    int? line,
    int? column,
  }) {
    final start = node?.span.start;
    items.add(
      FlaxCodegenDiagnostic(
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

final class _MetadataMap {
  _MetadataMap(this.diagnostics, this.map);

  final _MetadataDiagnostics diagnostics;
  final YamlMap map;

  YamlNode? node(String key) => map.nodes[key];

  int? requiredInt(String key) {
    final value = node(key);
    if (value == null) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.missingField,
        pointer: '/$key',
        message: 'Missing field.',
        node: map,
      );
      return null;
    }
    if (value.value is! int) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
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
        code: FlaxCodegenDiagnosticCode.missingField,
        pointer: '/$key',
        message: 'Missing field.',
        node: map,
      );
      return null;
    }
    if (value is! YamlList) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
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
          code: FlaxCodegenDiagnosticCode.typeMismatch,
          pointer: pointer,
          message: 'Expected a string.',
          node: item,
        );
        continue;
      }
      final text = item.value as String;
      if (text.isEmpty) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.invalidValue,
          pointer: pointer,
          message: 'Expected a nonempty string.',
          node: item,
        );
        continue;
      }
      if (!seen.add(text)) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.duplicateValue,
          pointer: pointer,
          message: 'Duplicate value.',
          node: item,
        );
        continue;
      }
      values.add(text);
    }
    values.sort();
    return values;
  }

  _NamespaceField optionalNamespace() {
    final value = node('bindingNamespace');
    if (value == null) {
      return const _NamespaceField(omitted: true);
    }
    if (value.value is! String) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: '/bindingNamespace',
        message: 'Expected a string.',
        node: value,
      );
      return _NamespaceField(omitted: false, node: value);
    }
    final text = value.value as String;
    if (!_isBindingNamespace(text)) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.invalidValue,
        pointer: '/bindingNamespace',
        message: 'Invalid bindingNamespace.',
        node: value,
      );
      return _NamespaceField(omitted: false, node: value);
    }
    return _NamespaceField(omitted: false, value: text, node: value);
  }

  String? optionalNestedString(String parent, String key) {
    final parentNode = node(parent);
    if (parentNode == null) return null;
    if (parentNode is! YamlMap) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: '/$parent',
        message: 'Expected a mapping.',
        node: parentNode,
      );
      return null;
    }
    final value = parentNode.nodes[key];
    if (value == null) return null;
    if (value.value is! String || (value.value as String).isEmpty) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: '/$parent/$key',
        message: 'Expected a nonempty string.',
        node: value,
      );
      return null;
    }
    return value.value as String;
  }
}
