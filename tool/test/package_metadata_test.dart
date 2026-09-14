import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import '../src/package_discovery.dart';

void main() {
  late Directory temporary;

  setUp(
    () => temporary = Directory.systemTemp.createTempSync('flax-metadata-'),
  );
  tearDown(() => temporary.deleteSync(recursive: true));

  final corpus = Directory(
    p.join(Directory.current.path, 'tests/compatibility/package_metadata'),
  );
  final cases =
      ((jsonDecode(File(p.join(corpus.path, 'cases.json')).readAsStringSync())
                  as Map)['cases']
              as List)
          .cast<Map<String, dynamic>>();

  for (final testCase in cases) {
    final id = testCase['id'] as String;
    test('strict tooling $id', () {
      void run() {
        readFlaxPackageMetadata(
          File(p.join(corpus.path, testCase['file'] as String)),
          pubspec: Map<String, dynamic>.from(testCase['pubspec'] as Map),
          npmManifest: _npm(testCase['npmManifest']),
          strict: true,
        );
      }

      final outcome = testCase['toolingOutcome'] as Map<String, dynamic>;
      if (outcome['valid'] == true) {
        final metadata = readFlaxPackageMetadata(
          File(p.join(corpus.path, testCase['file'] as String)),
          pubspec: Map<String, dynamic>.from(testCase['pubspec'] as Map),
          npmManifest: _npm(testCase['npmManifest']),
          strict: true,
        );
        final projection = outcome['projection'] as Map<String, dynamic>;
        expect(metadata.format, projection['format']);
        expect(
          metadata.capabilities.toList()..sort(),
          projection['capabilities'],
        );
        expect(metadata.bindingNamespace, projection['bindingNamespace']);
        return;
      }

      final diagnostics = outcome['diagnostics'];
      if (diagnostics != null) {
        try {
          run();
          fail('expected FlaxPackageMetadataException');
        } on FlaxPackageMetadataException catch (error) {
          expect(_records(error.diagnostics), diagnostics);
        }
        return;
      }

      final exception = outcome['exception'] as Map<String, dynamic>;
      try {
        run();
        fail('expected ${exception['type']}');
      } on FormatException catch (error) {
        expect('${error.runtimeType}', exception['type']);
        expect(error.message, exception['message']);
      } on FlaxPackageMetadataException catch (error) {
        expect('${error.runtimeType}', exception['type']);
      }
    });
  }

  test('parses a paired binding package', () {
    final metadata = _read(temporary, _valid);
    expect(metadata.format, 1);
    expect(metadata.dartEntrypoint, 'package:example/example.dart');
    expect(metadata.javascript?.name, '@flax/example');
    expect(metadata.javascript?.mode, 'runtime');
    expect(metadata.capabilities, {'bindings'});
    expect(metadata.registration.bindings, ['exampleBindings']);
    expect(metadata.bindingNamespace, isNull);
  });

  test('rejects unknown fields and formats', () {
    expect(
      () => _read(temporary, '$_valid\nunknown: true\n'),
      throwsFormatException,
    );
    expect(
      () => _read(temporary, _valid.replaceFirst('format: 1', 'format: 2')),
      throwsFormatException,
    );
  });

  test('accepts bindingNamespace on a bindings package', () {
    final metadata = _read(temporary, '${_valid}bindingNamespace: flax.core\n');
    expect(metadata.bindingNamespace, 'flax.core');
  });

  test('rejects invalid modes and duplicate capabilities', () {
    expect(
      () =>
          _read(temporary, _valid.replaceFirst('mode: runtime', 'mode: types')),
      throwsFormatException,
    );
    expect(
      () => _read(
        temporary,
        _valid.replaceFirst('  - bindings\n', '  - bindings\n  - bindings\n'),
      ),
      throwsFormatException,
    );
    expect(
      () =>
          _read(temporary, _valid.replaceFirst('  - bindings', '  - unknown')),
      throwsFormatException,
    );
  });

  test('rejects invalid entrypoints and missing npm packages', () {
    expect(
      () => _read(
        temporary,
        _valid.replaceFirst(
          'package:example/example.dart',
          'package:other/example.dart',
        ),
      ),
      throwsFormatException,
    );
    expect(
      () => readFlaxPackageMetadata(
        File('${temporary.path}/flax_package.yaml')..writeAsStringSync(_valid),
        pubspec: {'name': 'example', 'version': '0.0.0'},
      ),
      throwsFormatException,
    );
  });

  test('rejects mismatched Dart and npm packages', () {
    expect(
      () => _read(
        temporary,
        _valid,
        npm: {'name': '@flax/other', 'version': '0.0.0'},
      ),
      throwsFormatException,
    );
    expect(
      () => _read(
        temporary,
        _valid,
        npm: {'name': '@flax/example', 'version': '1.0.0'},
      ),
      throwsFormatException,
    );
  });

  test('requires plugin registration for a host plugin', () {
    expect(
      () => _read(
        temporary,
        _valid
            .replaceFirst('  - bindings', '  - host-plugin')
            .replaceFirst(
              'registration:\n  bindings:\n    - exampleBindings\n',
              '',
            ),
      ),
      throwsFormatException,
    );
  });

  test('repository metadata exposes bindingNamespace for binding packages', () {
    final packages = discoverPackages(Directory.current.path);
    expect(packages, isNotEmpty);
    final byName = {for (final package in packages) package.name: package};
    expect(byName['flax']!.metadata.bindingNamespace, 'flax.core');
    expect(
      byName['flax_material_ui']!.metadata.bindingNamespace,
      'flax.material',
    );
    expect(byName['flax_canvas']!.metadata.bindingNamespace, 'flax.canvas');
    expect(byName['flax']!.hasRunnableExample, isTrue);
    expect(byName['flax_codegen']!.hasRunnableExample, isFalse);
    for (final package in packages) {
      expect(package.metadata.format, 1);
      final hasBindings = package.metadata.capabilities.contains('bindings');
      expect(
        package.metadata.bindingNamespace != null,
        hasBindings,
        reason: package.name,
      );
    }
  });

  test('strict mode rejects binding metadata without namespace', () {
    expect(
      _records(
        _strictErrors(temporary, '''
format: 1
dart:
  entrypoint: package:tmp/tmp.dart
capabilities:
  - bindings
'''),
      ),
      [
        {
          'code': 'FCG_INCOMPATIBLE_FIELDS',
          'pointer': '/bindingNamespace',
          'line': 1,
          'column': 1,
          'message': 'capabilities bindings and bindingNamespace must match.',
        },
      ],
    );
  });

  test('strict mode rejects an explicit null bindingNamespace', () {
    expect(
      _records(_strictErrors(temporary, '${_valid}bindingNamespace: null\n')),
      [
        {
          'code': 'FCG_TYPE_MISMATCH',
          'pointer': '/bindingNamespace',
          'line': 13,
          'column': 19,
          'message': 'Expected a string.',
        },
      ],
    );
  });

  test(
    'strict canvas-style bindings and host-plugin omit registration.bindings',
    () {
      final metadata = _read(temporary, _canvas, strict: true);
      expect(metadata.format, 1);
      expect(metadata.capabilities, {'bindings', 'host-plugin'});
      expect(metadata.bindingNamespace, 'flax.canvas');
      expect(metadata.registration.bindings, isEmpty);
      expect(metadata.registration.plugins, ['FlaxCanvasPlugin']);
    },
  );

  test('strict namespace grammar boundaries', () {
    final label63 = 'a' * 63;
    final valid253 = '$label63.$label63.$label63.${'a' * 61}';
    final invalid254 = '$label63.$label63.$label63.${'a' * 62}';
    expect(valid253.length, 253);
    expect(invalid254.length, 254);

    for (final namespace in ['a.b', 'a.$label63', valid253]) {
      final metadata = _read(
        temporary,
        _strictBindings(namespace),
        strict: true,
      );
      expect(metadata.bindingNamespace, namespace);
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
      expect(_records(_strictErrors(temporary, _strictBindings(namespace))), [
        {
          'code': 'FCG_INVALID_VALUE',
          'pointer': '/bindingNamespace',
          'line': 13,
          'column': 19,
          'message': 'Invalid bindingNamespace.',
        },
      ]);
    }
  });
}

List<Map<String, Object?>> _records(
  Iterable<FlaxPackageMetadataDiagnostic> diagnostics,
) => [
  for (final diagnostic in diagnostics)
    {
      'code': diagnostic.code,
      'pointer': diagnostic.pointer,
      'line': diagnostic.line,
      'column': diagnostic.column,
      'message': diagnostic.message,
    },
];

List<FlaxPackageMetadataDiagnostic> _strictErrors(
  Directory directory,
  String source,
) {
  try {
    _read(directory, source, strict: true);
    fail('expected FlaxPackageMetadataException');
  } on FlaxPackageMetadataException catch (error) {
    return error.diagnostics;
  }
}

String _strictBindings(String namespace) =>
    '${_valid}bindingNamespace: $namespace\n';

Map<String, dynamic>? _npm(Object? value) {
  if (value == null) return null;
  return Map<String, dynamic>.from(value as Map);
}

FlaxPackageMetadata _read(
  Directory directory,
  String source, {
  Map<String, Object?> npm = const {
    'name': '@flax/example',
    'version': '0.0.0',
  },
  bool strict = false,
}) {
  final file = File('${directory.path}/flax_package.yaml')
    ..writeAsStringSync(source);
  return readFlaxPackageMetadata(
    file,
    pubspec: {'name': 'example', 'version': '0.0.0'},
    npmManifest: jsonDecode(jsonEncode(npm)) as Map<String, dynamic>,
    strict: strict,
  );
}

const _valid = '''
format: 1
dart:
  entrypoint: package:example/example.dart
javascript:
  package: '@flax/example'
  version: same
  mode: runtime
capabilities:
  - bindings
registration:
  bindings:
    - exampleBindings
''';

const _canvas = '''
format: 1
dart:
  entrypoint: package:example/example.dart
javascript:
  package: '@flax/example'
  version: same
  mode: runtime
capabilities:
  - host-plugin
  - bindings
bindingNamespace: flax.canvas
registration:
  plugins:
    - FlaxCanvasPlugin
''';
