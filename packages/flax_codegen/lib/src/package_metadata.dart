import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:yaml/yaml.dart';

import 'diagnostic.dart';

/// Codegen view of `flax_package.yaml` ownership and binding dependencies.
final class FlaxCodegenPackageMetadataProjection {
  FlaxCodegenPackageMetadataProjection._(
    this.format,
    List<String> capabilities,
    this.bindingNamespace,
    this.dartEntrypoint,
    this.javascriptPackage,
    this.javascriptRuntimePackage,
    List<String> generateDependencies,
    this.typesSdk,
  ) : capabilities = List.unmodifiable(capabilities),
      generateDependencies = List.unmodifiable(generateDependencies);

  final int format;
  final List<String> capabilities;
  final String? bindingNamespace;
  final String? dartEntrypoint;

  /// Public types package, falling back to `javascript.package` when omitted.
  final String? javascriptPackage;

  /// Published declarations, including a convention-based SDK when configured.
  String? get javascriptTypesPackage => typesSdk?.name ?? javascriptPackage;

  /// Source delivery package declared by `javascript.package`.
  final String? javascriptRuntimePackage;

  /// External Dart packages approved for owner-local binding generation.
  final List<String> generateDependencies;

  /// Optional ordinary npm declaration package prepared by init/sync.
  final FlaxCodegenTypesSdkConfig? typesSdk;

  Map<String, String> get scopeJsPackages => {
    for (final scope in typesSdk?.scopes ?? <String>[]) scope: typesSdk!.name,
  };

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
      javascriptRuntimePackage == other.javascriptRuntimePackage &&
      typesSdk == other.typesSdk &&
      _sameStrings(capabilities, other.capabilities) &&
      _sameStrings(generateDependencies, other.generateDependencies);

  @override
  int get hashCode => Object.hash(
    format,
    bindingNamespace,
    dartEntrypoint,
    javascriptPackage,
    javascriptRuntimePackage,
    typesSdk,
    Object.hashAll(capabilities),
    Object.hashAll(generateDependencies),
  );
}

/// Publication selection; generated binding implementations remain in the host.
final class FlaxCodegenTypesSdkConfig {
  FlaxCodegenTypesSdkConfig(this.name, List<String> scopes, this.directory)
    : scopes = List.unmodifiable(scopes);

  final String name;
  final List<String> scopes;
  final String directory;

  @override
  bool operator ==(Object other) =>
      other is FlaxCodegenTypesSdkConfig &&
      name == other.name &&
      directory == other.directory &&
      _sameStrings(scopes, other.scopes);

  @override
  int get hashCode => Object.hash(name, directory, Object.hashAll(scopes));
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
final _dartPackageNamePattern = RegExp(r'^[a-z][a-z0-9_]*$');

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
  if (format != null && format != 2) {
    diagnostics.add(
      code: FlaxCodegenDiagnosticCode.invalidValue,
      pointer: '/format',
      message: 'Expected 2.',
      node: root.node('format'),
    );
  }
  final capabilities = root.requiredStringList('capabilities');
  final namespace = root.optionalNamespace();
  final dartEntrypoint = root.optionalNestedString('dart', 'entrypoint');
  final javascriptTypes = root.optionalNestedString('javascript', 'types');
  // Preserve the projection's types-first validation of legacy metadata.
  final javascriptRuntimePackage = root.optionalNestedString(
    'javascript',
    'package',
    reportErrors: javascriptTypes == null,
  );
  final javascriptPackage = javascriptTypes ?? javascriptRuntimePackage;
  final generateDependencies = root.optionalGenerateDependencies();
  final typesSdk = root.optionalTypesSdk();
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
    javascriptRuntimePackage,
    generateDependencies,
    typesSdk,
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
  _MetadataMap(this.diagnostics, this.map, {this.pointer = ''});

  final _MetadataDiagnostics diagnostics;
  final YamlMap map;
  final String pointer;

  YamlNode? node(String key) => map.nodes[key];

  FlaxCodegenTypesSdkConfig? optionalTypesSdk() {
    final value = node('typesSdk');
    if (value == null) return null;
    void invalid(String field, String message, [YamlNode? node]) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.invalidValue,
        pointer: '/typesSdk${field.isEmpty ? '' : '/$field'}',
        message: message,
        node: node ?? value,
      );
    }

    if (value is! YamlMap) {
      invalid('', 'Expected a mapping.');
      return null;
    }
    for (final key in value.keys) {
      if (!{'name', 'scopes', 'directory'}.contains(key)) {
        invalid('$key', 'Unknown field.');
      }
    }
    final name = value['name'];
    final scopes = value['scopes'];
    final directory = value['directory'] ?? 'js/sdk';
    if (name is! String ||
        name.length > 214 ||
        !RegExp(r'^(?:@[a-z0-9][a-z0-9._-]*/)?[a-z0-9][a-z0-9._-]*$')
            .hasMatch(name)) {
      invalid('name', 'Expected a lowercase npm package name.');
    }
    if (scopes is! List ||
        scopes.isEmpty ||
        scopes.any(
          (scope) =>
              scope is! String ||
              !RegExp(r'^[a-z][a-z0-9_]{0,63}$').hasMatch(scope),
        ) ||
        scopes.toSet().length != scopes.length) {
      invalid('scopes', 'Expected a nonempty list of unique scope names.');
    }
    if (directory is! String ||
        directory.contains('\\') ||
        p.posix.isAbsolute(directory) ||
        p.posix.normalize(directory) != directory ||
        directory
            .split('/')
            .any(
              (part) =>
                  part.isEmpty ||
                  part.startsWith('.') ||
                  part == 'node_modules',
            ) ||
        directory == 'js') {
      invalid(
        'directory',
        'Expected a package-relative SDK directory separate from js/.',
      );
    }
    if (diagnostics.items.any((item) => item.pointer.startsWith('/typesSdk'))) {
      return null;
    }
    return FlaxCodegenTypesSdkConfig(
      name as String,
      (scopes as List).cast<String>().toList()..sort(),
      directory as String,
    );
  }

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

  List<String>? requiredStringList(String key, {bool packageNames = false}) {
    final value = node(key);
    if (value == null) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.missingField,
        pointer: '$pointer/$key',
        message: 'Missing field.',
        node: map,
      );
      return null;
    }
    if (value is! YamlList) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: '$pointer/$key',
        message: 'Expected a list of strings.',
        node: value,
      );
      return null;
    }
    final values = <String>[];
    final seen = <String>{};
    for (var index = 0; index < value.nodes.length; index++) {
      final item = value.nodes[index];
      final itemPointer = '$pointer/$key/$index';
      if (item.value is! String) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.typeMismatch,
          pointer: itemPointer,
          message: 'Expected a string.',
          node: item,
        );
        continue;
      }
      final text = item.value as String;
      if (text.isEmpty) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.invalidValue,
          pointer: itemPointer,
          message: 'Expected a nonempty string.',
          node: item,
        );
        continue;
      }
      if (packageNames && !_dartPackageNamePattern.hasMatch(text)) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.invalidValue,
          pointer: itemPointer,
          message: 'Invalid Dart package name.',
          node: item,
        );
        continue;
      }
      if (!seen.add(text)) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.duplicateValue,
          pointer: itemPointer,
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

  List<String> optionalGenerateDependencies() {
    final value = node('bindingDependencies');
    if (value == null) return const [];
    if (value is! YamlMap) {
      diagnostics.add(
        code: FlaxCodegenDiagnosticCode.typeMismatch,
        pointer: '/bindingDependencies',
        message: 'Expected a mapping.',
        node: value,
      );
      return const [];
    }
    for (final entry in value.nodes.entries) {
      final keyNode = entry.key as YamlNode;
      final key = keyNode.value;
      if (key is! String) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.typeMismatch,
          pointer: '/bindingDependencies',
          message: 'Mapping keys must be strings.',
          node: keyNode,
        );
      } else if (key != 'generate') {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.unknownField,
          pointer:
              '/bindingDependencies/'
              '${FlaxCodegenDiagnostic.jsonPointerToken(key)}',
          message: 'Unknown field.',
          node: keyNode,
        );
      }
    }
    if (!value.nodes.containsKey('generate')) return const [];
    return _MetadataMap(
          diagnostics,
          value,
          pointer: '/bindingDependencies',
        ).requiredStringList('generate', packageNames: true) ??
        const [];
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

  String? optionalNestedString(
    String parent,
    String key, {
    bool reportErrors = true,
  }) {
    final parentNode = node(parent);
    if (parentNode == null) return null;
    if (parentNode is! YamlMap) {
      if (reportErrors) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.typeMismatch,
          pointer: '/$parent',
          message: 'Expected a mapping.',
          node: parentNode,
        );
      }
      return null;
    }
    final value = parentNode.nodes[key];
    if (value == null) return null;
    if (value.value is! String || (value.value as String).isEmpty) {
      if (reportErrors) {
        diagnostics.add(
          code: FlaxCodegenDiagnosticCode.typeMismatch,
          pointer: '/$parent/$key',
          message: 'Expected a nonempty string.',
          node: value,
        );
      }
      return null;
    }
    return value.value as String;
  }
}
