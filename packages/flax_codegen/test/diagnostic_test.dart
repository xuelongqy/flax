import 'package:flax_codegen/flax_codegen.dart';
import 'package:test/test.dart';

void main() {
  test('diagnostic codes expose the frozen wire strings', () {
    expect(FlaxCodegenDiagnosticCode.values, hasLength(15));
    expect(
      [for (final code in FlaxCodegenDiagnosticCode.values) code.value],
      [
        'FCG_USAGE',
        'FCG_YAML_SYNTAX',
        'FCG_DUPLICATE_KEY',
        'FCG_UNKNOWN_FIELD',
        'FCG_MISSING_FIELD',
        'FCG_TYPE_MISMATCH',
        'FCG_INVALID_VALUE',
        'FCG_DUPLICATE_VALUE',
        'FCG_INCOMPATIBLE_FIELDS',
        'FCG_PATH',
        'FCG_RESOLUTION',
        'FCG_DEPENDENCY',
        'FCG_OWNERSHIP',
        'FCG_MANIFEST',
        'FCG_OUTPUT',
      ],
    );
  });

  test('JSON pointers encode the empty root and RFC 6901 escapes', () {
    expect(FlaxCodegenDiagnostic.jsonPointer(const []), '');
    expect(FlaxCodegenDiagnostic.jsonPointer(const ['name']), '/name');
    expect(
      FlaxCodegenDiagnostic.jsonPointer(const ['a/b', '~tilde', '']),
      '/a~1b/~0tilde/',
    );
    expect(FlaxCodegenDiagnostic.jsonPointerToken('~a/b'), '~0a~1b');
  });

  test('diagnostics sort by source, offset, code string, then pointer', () {
    FlaxCodegenDiagnostic diagnostic({
      required String source,
      required int offset,
      required FlaxCodegenDiagnosticCode code,
      required String pointer,
    }) => FlaxCodegenDiagnostic(
      code: code,
      source: source,
      offset: offset,
      line: 1,
      column: 1,
      pointer: pointer,
      message: 'unused',
    );

    final sorted = FlaxCodegenDiagnostic.sorted([
      diagnostic(
        source: 'b.yaml',
        offset: 0,
        code: FlaxCodegenDiagnosticCode.usage,
        pointer: '/z',
      ),
      diagnostic(
        source: 'a.yaml',
        offset: 8,
        code: FlaxCodegenDiagnosticCode.usage,
        pointer: '',
      ),
      diagnostic(
        source: 'a.yaml',
        offset: 0,
        code: FlaxCodegenDiagnosticCode.yamlSyntax,
        pointer: '/b',
      ),
      diagnostic(
        source: 'a.yaml',
        offset: 0,
        code: FlaxCodegenDiagnosticCode.missingField,
        pointer: '/b',
      ),
      diagnostic(
        source: 'a.yaml',
        offset: 0,
        code: FlaxCodegenDiagnosticCode.missingField,
        pointer: '/a',
      ),
    ]);
    expect(
      [
        for (final item in sorted)
          (item.source, item.offset, item.code.value, item.pointer),
      ],
      [
        ('a.yaml', 0, 'FCG_MISSING_FIELD', '/a'),
        ('a.yaml', 0, 'FCG_MISSING_FIELD', '/b'),
        ('a.yaml', 0, 'FCG_YAML_SYNTAX', '/b'),
        ('a.yaml', 8, 'FCG_USAGE', ''),
        ('b.yaml', 0, 'FCG_USAGE', '/z'),
      ],
    );
  });

  test('toString keeps a space for the empty root pointer', () {
    expect(
      const FlaxCodegenDiagnostic(
        code: FlaxCodegenDiagnosticCode.yamlSyntax,
        source: 'config.yaml',
        offset: 0,
        line: 1,
        column: 1,
        pointer: '',
        message: 'broken',
      ).toString(),
      'config.yaml:1:1: FCG_YAML_SYNTAX : broken',
    );
    expect(
      const FlaxCodegenDiagnostic(
        code: FlaxCodegenDiagnosticCode.unknownField,
        source: 'config.yaml',
        offset: 4,
        line: 2,
        column: 3,
        pointer: '/a~1b',
        message: 'unknown',
      ).toString(),
      'config.yaml:2:3: FCG_UNKNOWN_FIELD /a~1b: unknown',
    );
  });
}
