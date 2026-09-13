/// Stable diagnostic codes for binding generation.
enum FlaxCodegenDiagnosticCode {
  usage('FCG_USAGE'),
  yamlSyntax('FCG_YAML_SYNTAX'),
  duplicateKey('FCG_DUPLICATE_KEY'),
  unknownField('FCG_UNKNOWN_FIELD'),
  missingField('FCG_MISSING_FIELD'),
  typeMismatch('FCG_TYPE_MISMATCH'),
  invalidValue('FCG_INVALID_VALUE'),
  duplicateValue('FCG_DUPLICATE_VALUE'),
  incompatibleFields('FCG_INCOMPATIBLE_FIELDS'),
  path('FCG_PATH'),
  resolution('FCG_RESOLUTION'),
  ownership('FCG_OWNERSHIP'),
  manifest('FCG_MANIFEST'),
  output('FCG_OUTPUT');

  const FlaxCodegenDiagnosticCode(this.value);
  final String value;
}

/// One fail-closed generator diagnostic with a source span and JSON pointer.
final class FlaxCodegenDiagnostic implements Comparable<FlaxCodegenDiagnostic> {
  const FlaxCodegenDiagnostic({
    required this.code,
    required this.source,
    required this.offset,
    required this.line,
    required this.column,
    required this.pointer,
    required this.message,
  });

  final FlaxCodegenDiagnosticCode code;
  final String source;

  /// 0-based UTF-16 offset used for sorting.
  final int offset;

  /// 1-based line of the primary span.
  final int line;

  /// 1-based column of the primary span.
  final int column;

  /// RFC 6901 JSON pointer; empty at the document root.
  final String pointer;
  final String message;

  /// Encodes [tokens] as an RFC 6901 JSON pointer. The empty path is `''`.
  static String jsonPointer(Iterable<String> tokens) {
    if (tokens.isEmpty) return '';
    return '/${tokens.map(jsonPointerToken).join('/')}';
  }

  /// Escapes one RFC 6901 reference token.
  static String jsonPointerToken(String token) =>
      token.replaceAll('~', '~0').replaceAll('/', '~1');

  static List<FlaxCodegenDiagnostic> sorted(
    Iterable<FlaxCodegenDiagnostic> diagnostics,
  ) {
    final list = List<FlaxCodegenDiagnostic>.of(diagnostics);
    list.sort();
    return list;
  }

  @override
  int compareTo(FlaxCodegenDiagnostic other) {
    final sourceOrder = source.compareTo(other.source);
    if (sourceOrder != 0) return sourceOrder;
    final offsetOrder = offset.compareTo(other.offset);
    if (offsetOrder != 0) return offsetOrder;
    final codeOrder = code.value.compareTo(other.code.value);
    if (codeOrder != 0) return codeOrder;
    return pointer.compareTo(other.pointer);
  }

  @override
  String toString() =>
      '$source:$line:$column: ${code.value} $pointer: $message';
}

/// Collected diagnostics from a fail-closed Codegen reader.
final class FlaxCodegenException implements Exception {
  FlaxCodegenException(Iterable<FlaxCodegenDiagnostic> diagnostics)
    : diagnostics = List.unmodifiable(
        FlaxCodegenDiagnostic.sorted(diagnostics),
      );

  final List<FlaxCodegenDiagnostic> diagnostics;

  @override
  String toString() => diagnostics.join('\n');
}
