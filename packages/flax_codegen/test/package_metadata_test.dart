import 'dart:convert';
import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  final corpus = Directory(
    p.join(root, 'tests/compatibility/package_metadata'),
  );
  final cases =
      ((jsonDecode(File(p.join(corpus.path, 'cases.json')).readAsStringSync())
                  as Map)['cases']
              as List)
          .cast<Map<String, dynamic>>();

  for (final testCase in cases) {
    final id = testCase['id'] as String;
    test('codegen projection $id', () {
      final file = File(p.join(corpus.path, testCase['file'] as String));
      final outcome =
          testCase['codegenProjectionOutcome'] as Map<String, dynamic>;
      if (outcome['valid'] == true) {
        expectProjection(
          FlaxCodegenPackageMetadataProjection.readStrict(file.path),
          outcome['projection'] as Map<String, dynamic>,
        );
        return;
      }

      try {
        FlaxCodegenPackageMetadataProjection.readStrict(file.path);
        fail('expected FlaxCodegenException');
      } on FlaxCodegenException catch (error) {
        expect(_records(error.diagnostics), outcome['diagnostics']);
      }
    });
  }

  test('unknown capability names are kept and sorted', () {
    final projection = FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 2
capabilities:
  - mystery
  - codegen
''');
    expect(projection.capabilities, ['codegen', 'mystery']);
    expect(projection.bindingNamespace, isNull);
  });

  test('dart javascript and registration errors are ignored', () {
    expectProjection(
      FlaxCodegenPackageMetadataProjection.readStrict(
        p.join(corpus.path, 'tooling-invalid-dart.yaml'),
      ),
      {
        'format': 2,
        'capabilities': ['codegen'],
        'bindingNamespace': null,
      },
    );
    expectProjection(
      FlaxCodegenPackageMetadataProjection.readStrict(
        p.join(corpus.path, 'tooling-invalid-javascript.yaml'),
      ),
      {
        'format': 2,
        'capabilities': ['codegen'],
        'bindingNamespace': null,
      },
    );
    expectProjection(
      FlaxCodegenPackageMetadataProjection.readStrict(
        p.join(corpus.path, 'tooling-invalid-registration.yaml'),
      ),
      {
        'format': 2,
        'capabilities': ['codegen'],
        'bindingNamespace': null,
      },
    );
  });

  test('parsed capabilities cannot be mutated', () {
    final projection = FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 2
capabilities:
  - codegen
''');
    expect(
      () => projection.capabilities.add('bindings'),
      throwsUnsupportedError,
    );
    expect(
      () => projection.capabilities[0] = 'bindings',
      throwsUnsupportedError,
    );
  });

  test('optional binding dependencies default to an empty list', () {
    for (final policy in [
      '',
      'bindingDependencies: {}',
      'bindingDependencies:\n  generate: []',
    ]) {
      final projection = FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 2
capabilities: [codegen]
$policy
''');
      expect(projection.generateDependencies, isEmpty);
      expect(projection.javascriptPackage, isNull);
      expect(projection.javascriptRuntimePackage, isNull);
      expect(
        () => projection.generateDependencies.add('intl'),
        throwsUnsupportedError,
      );
    }
  });

  test('generated dependencies are sorted and immutable', () {
    final projection = FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 2
capabilities: [codegen]
bindingDependencies:
  generate: [zebra2, intl, cupertino_ui]
''');
    expect(projection.generateDependencies, ['cupertino_ui', 'intl', 'zebra2']);
    expect(
      () => projection.generateDependencies.add('other'),
      throwsUnsupportedError,
    );
    expect(
      () => projection.generateDependencies[0] = 'other',
      throwsUnsupportedError,
    );
  });

  test('JavaScript source and public types package names stay separate', () {
    for (final (fields, types, runtime) in [
      (
        "package: '@flax/example-runtime'\n  types: '@flax/example'",
        '@flax/example',
        '@flax/example-runtime',
      ),
      ("package: '@flax/example'", '@flax/example', '@flax/example'),
      ("types: '@flax/example'", '@flax/example', null),
    ]) {
      final projection = FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 2
capabilities: [codegen]
javascript:
  $fields
''');
      expect(projection.javascriptPackage, types);
      expect(projection.javascriptRuntimePackage, runtime);
    }
  });

  test('JavaScript metadata keeps types-first validation compatibility', () {
    final projection = FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 2
capabilities: [codegen]
javascript:
  types: '@flax/example'
  package: 42
''');
    expect(projection.javascriptPackage, '@flax/example');
    expect(projection.javascriptRuntimePackage, isNull);
    expect(
      _records(
        _errors('''
format: 2
capabilities: [codegen]
javascript:
  package: 42
'''),
      ),
      [
        {
          'code': 'FCG_TYPE_MISMATCH',
          'pointer': '/javascript/package',
          'line': 4,
          'column': 12,
          'message': 'Expected a nonempty string.',
        },
      ],
    );
  });

  test('dependency policy participates in projection equality', () {
    FlaxCodegenPackageMetadataProjection parse(String fields) =>
        FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 2
capabilities: [codegen]
javascript:
  package: '@flax/runtime'
  types: '@flax/example'
$fields
''');
    final dependencies = parse(
      'bindingDependencies:\n  generate: [intl, cupertino_ui]',
    );
    final reordered = parse(
      'bindingDependencies:\n  generate: [cupertino_ui, intl]',
    );
    expect(dependencies, reordered);
    expect(dependencies.hashCode, reordered.hashCode);
    expect(dependencies, isNot(parse('')));
    expect(parse(''), parse('bindingDependencies: {}'));
    expect(
      parse(''),
      isNot(
        FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 2
capabilities: [codegen]
javascript:
  package: '@flax/another-runtime'
  types: '@flax/example'
'''),
      ),
    );
  });

  test('dependency policy rejects invalid mapping and list shapes', () {
    for (final value in ['null', '[]', 'intl', '42']) {
      final diagnostics = _errors('''
format: 2
capabilities: [codegen]
bindingDependencies: $value
''');
      expect(diagnostics.single.code.value, 'FCG_TYPE_MISMATCH');
      expect(diagnostics.single.pointer, '/bindingDependencies');
    }
    for (final value in ['null', '{}', 'intl', '42']) {
      final diagnostics = _errors('''
format: 2
capabilities: [codegen]
bindingDependencies:
  generate: $value
''');
      expect(diagnostics.single.code.value, 'FCG_TYPE_MISMATCH');
      expect(diagnostics.single.pointer, '/bindingDependencies/generate');
    }
  });

  test('generated dependencies require canonical Dart package names', () {
    for (final name in [
      'Intl',
      '_intl',
      '1intl',
      'foo-bar',
      'foo.bar',
      'foo/bar',
      'package:intl',
      '@flax/intl',
      ' intl',
      'intl ',
      'intl\n',
      'café',
    ]) {
      final diagnostics = _errors('''
format: 2
capabilities: [codegen]
bindingDependencies:
  generate: [${jsonEncode(name)}]
''');
      expect(diagnostics.single.code.value, 'FCG_INVALID_VALUE', reason: name);
      expect(diagnostics.single.pointer, '/bindingDependencies/generate/0');
      expect(diagnostics.single.message, 'Invalid Dart package name.');
    }
  });

  test('namespace grammar boundaries', () {
    final label63 = 'a' * 63;
    final valid253 = '$label63.$label63.$label63.${'a' * 61}';
    final invalid254 = '$label63.$label63.$label63.${'a' * 62}';
    expect(valid253.length, 253);
    expect(invalid254.length, 254);

    for (final namespace in ['a.b', 'a.$label63', valid253]) {
      final projection = FlaxCodegenPackageMetadataProjection.parseStrict('''
format: 2
capabilities:
  - bindings
bindingNamespace: $namespace
''');
      expect(projection.bindingNamespace, namespace);
    }

    const invalid = [
      'flax',
      'Flax.core',
      'flax_core.ui',
      'foo-bar.baz',
      'flax..core',
      'flax.core.',
      'café.core',
    ];
    for (final namespace in [...invalid, invalid254]) {
      expect(
        _records(
          _errors('''
format: 2
capabilities:
  - bindings
bindingNamespace: $namespace
'''),
        ),
        [
          {
            'code': 'FCG_INVALID_VALUE',
            'pointer': '/bindingNamespace',
            'line': 4,
            'column': 19,
            'message': 'Invalid bindingNamespace.',
          },
        ],
      );
    }
  });

  test('two sibling files sort identically in either parse order', () {
    final directory = Directory.systemTemp.createTempSync(
      'flax-metadata-order-',
    );
    addTearDown(() => directory.deleteSync(recursive: true));
    final first = File(p.join(directory.path, 'a.yaml'))
      ..writeAsStringSync('''
format: 1
dart:
  entrypoint: package:example/example.dart
capabilities:
  - codegen
''');
    final second = File(p.join(directory.path, 'b.yaml'))
      ..writeAsStringSync('''
format: 2
dart:
  entrypoint: package:example/example.dart
capabilities:
  - bindings
''');

    List<FlaxCodegenDiagnostic> collect(List<File> files) {
      final items = <FlaxCodegenDiagnostic>[];
      for (final file in files) {
        items.addAll(_readErrors(file.path));
      }
      return FlaxCodegenDiagnostic.sorted(items);
    }

    final forward = collect([first, second]);
    final reverse = collect([second, first]);
    expect(_sortKeys(forward), _sortKeys(reverse));
    expect(_sortKeys(forward), [
      (first.path, 8, 'FCG_INVALID_VALUE', '/format'),
      (second.path, 0, 'FCG_INCOMPATIBLE_FIELDS', '/bindingNamespace'),
    ]);
  });

  test('readStrict maps missing and directory paths to FCG_PATH', () {
    final directory = Directory.systemTemp.createTempSync('flax-metadata-');
    addTearDown(() => directory.deleteSync(recursive: true));
    expect(_records(_readErrors(p.join(directory.path, 'missing.yaml'))), [
      {
        'code': 'FCG_PATH',
        'pointer': '',
        'line': 1,
        'column': 1,
        'message': 'Cannot read file.',
      },
    ]);
    expect(_records(_readErrors(directory.path)), [
      {
        'code': 'FCG_PATH',
        'pointer': '',
        'line': 1,
        'column': 1,
        'message': 'Cannot read file.',
      },
    ]);
  });
}

void expectProjection(
  FlaxCodegenPackageMetadataProjection actual,
  Map<String, dynamic> expected,
) {
  expect(actual.format, expected['format']);
  expect(actual.capabilities, expected['capabilities']);
  expect(actual.bindingNamespace, expected['bindingNamespace']);
  expect(
    actual.generateDependencies,
    expected['generateDependencies'] ?? const <String>[],
  );
  if (expected.containsKey('javascriptPackage')) {
    expect(actual.javascriptPackage, expected['javascriptPackage']);
    expect(
      actual.javascriptRuntimePackage,
      expected['javascriptRuntimePackage'],
    );
  }
}

List<Map<String, Object>> _records(List<FlaxCodegenDiagnostic> diagnostics) => [
  for (final diagnostic in diagnostics)
    {
      'code': diagnostic.code.value,
      'pointer': diagnostic.pointer,
      'line': diagnostic.line,
      'column': diagnostic.column,
      'message': diagnostic.message,
    },
];

List<(String, int, String, String)> _sortKeys(
  List<FlaxCodegenDiagnostic> diagnostics,
) => [
  for (final diagnostic in diagnostics)
    (
      diagnostic.source,
      diagnostic.offset,
      diagnostic.code.value,
      diagnostic.pointer,
    ),
];

List<FlaxCodegenDiagnostic> _errors(String yaml) {
  try {
    FlaxCodegenPackageMetadataProjection.parseStrict(yaml);
    fail('expected FlaxCodegenException');
  } on FlaxCodegenException catch (error) {
    return error.diagnostics;
  }
}

List<FlaxCodegenDiagnostic> _readErrors(String filename) {
  try {
    FlaxCodegenPackageMetadataProjection.readStrict(filename);
    fail('expected FlaxCodegenException');
  } on FlaxCodegenException catch (error) {
    return error.diagnostics;
  }
}
