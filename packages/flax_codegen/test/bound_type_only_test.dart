import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    root = root.parent;
  }
  final uri = Uri.file(
    p.join(
      root.path,
      'packages/flax_codegen/test/fixtures/capability/generic_cases.dart',
    ),
  ).toString();
  Future<FlaxCodegenModuleModel> parse(String selection) async {
    final parser = FlaxCodegenBindingParser(root.path);
    try {
      return await parser.parse(
        FlaxCodegenBindingConfig.parseStrict('''
format: 2
name: bounds
library: $uri
jsPackage: '@example/bounds'
dartOutput: unused.dart
tsOutput: unused.ts
$selection
'''),
      );
    } finally {
      parser.dispose();
    }
  }

  const classes = '''
classes:
  ComparableLeaf:
    kind: object
    constructors: {'': [value]}
  RecursiveBox:
    kind: object
    typeArguments: [ComparableLeaf]
    constructors: {'': [value]}
    getters: [value]
    instanceMethods: {echo: [input]}
  BaseLeaf:
    kind: object
    constructors: {'': []}
  BaseBox:
    kind: object
    typeArguments: [BaseLeaf]
    constructors: {'': [value]}
  NumberComparable:
    kind: object
    constructors: {'': []}
  RelatedBox:
    kind: object
    typeArguments: [num, NumberComparable]
    constructors: {'': [value]}
  BoundMethods:
    kind: object
    constructors: {'': []}
    instanceMethods: {echo: [value]}
    methodTypeArguments: {echo: [ComparableLeaf]}
  BoundCombinations:
    kind: object
    typeArguments: [ComparableLeaf]
    constructors: {'': [value]}
    instanceMethods: {record: [input], callback: [fn]}
functions:
  recursiveFunction:
    parameters: [value]
    typeArguments: [ComparableLeaf]
''';

  test('recursive and dependent bounds retain nominal TS relations without runtime owners', () async {
    final module = await parse(
      '$classes\ntypedefs: [BoundItems, BoundCallback, CallbackBoundItems]',
    );
    expect(module.types.map((t) => t.name), isNot(contains('Comparable')));
    expect(module.types.map((t) => t.name), isNot(contains('RecursiveBase')));
    final bound = module.classes
        .firstWhere((t) => t.name == 'RecursiveBox')
        .typeParameters
        .single
        .bound;
    expect(bound.kind, 'typeOnly');
    expect(bound.id, isNull);
    expect(bound.originatingUri, 'dart:core');
    expect(bound.asNullable().originatingUri, 'dart:core');
    final emitter = FlaxCodegenBindingEmitter([module]);
    final ts = emitter.typescript(module);
    expect(ts, isNot(contains('compareTo(')));
    await compileFixture(
      root.path,
      emitter,
      module,
      dartTestSource: """
void main() {
  test('generated recursive specialization retains real Dart values', () {
    final leaf = _createComparableLeaf('', {'value': 7}) as api.ComparableLeaf;
    final box = _createRecursiveBox('', {'value': leaf}) as api.RecursiveBox<api.ComparableLeaf>;
    expect(identical(box.value, leaf), isTrue);
    expect(identical(box.echo(leaf), leaf), isTrue);
    expect(() => _createRecursiveBox('', {'value': api.BaseLeaf()}), throwsA(isA<TypeError>()));
  });
}
""",
      consumerSource: '''
import { ComparableLeaf, RecursiveBox, BaseLeaf, BaseBox, NumberComparable, RelatedBox, BoundMethods, BoundCombinations, recursiveFunction } from './plugin.js';
import type { BoundItems, BoundCallback } from './plugin.js';
const mapper: BoundCallback<ComparableLeaf> = (value) => value.\$1;
void mapper;
type Items = BoundItems<ComparableLeaf>;
const leaf = ComparableLeaf(1);
const box: RecursiveBox<ComparableLeaf> = RecursiveBox(leaf);
box.echo(leaf);
BaseBox(BaseLeaf());
RelatedBox(NumberComparable());
BoundMethods().echo(leaf);
recursiveFunction(leaf);
BoundCombinations(leaf).record({ \$1: leaf, value: null });
BoundCombinations(leaf).callback((value) => value.\$1);
// @ts-expect-error unselected bound member is not exposed
leaf.compareTo(leaf);
// @ts-expect-error unrelated nominal type cannot satisfy Comparable
const bad: RecursiveBox<BaseLeaf> = box;
''',
    );
  });

  test('unbound interface in value position and invalid specialization stay rejected', () async {
    await expectLater(
      parse('''
functions: {unboundComparable: {parameters: [value]}}
'''),
      throwsA(
        isA<StateError>().having(
          (e) => e.message,
          'message',
          contains('Unsupported core type'),
        ),
      ),
    );
    await expectLater(
      parse('''
classes:
  RecursiveBox:
    kind: object
    typeArguments: [bool]
    constructors: {'': [value]}
'''),
      throwsA(
        isA<StateError>().having(
          (e) => e.message,
          'message',
          contains('does not satisfy'),
        ),
      ),
    );
  });

  test('unresolved recursive extension receiver remains fail-closed', () async {
    await expectLater(
      parse('extensions: {RecursiveValues: {getters: [firstValue]}}'),
      throwsA(
        isA<StateError>().having(
          (e) => e.message,
          'message',
          contains('Concrete runtime specialization required'),
        ),
      ),
    );
  });

  test(
    'a legal primitive specialization compiles without phantom JS fields',
    () async {
      final module = await parse(
        "classes: {RecursiveBox: {kind: object, typeArguments: [String], constructors: {'': [value]}}}",
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: "import { RecursiveBox } from './plugin.js'; const box: RecursiveBox<string> = RecursiveBox('value');",
      );
    },
  );

  test('Manifest 12 preserves bound provenance', () async {
    final module = await parse(classes);
    final json = FlaxCodegenManifestCodec.encodeModule(module);
    json['typeLibraries'] = {
      for (final name in (module.typeLibraries.keys.toList()..sort()))
        name: 'package:example/bounds.dart',
    };
    final diagnostics = FlaxCodegenManifestDiagnostics('fixture');
    final decoded = FlaxCodegenManifestCodec.decodeModule(
      json,
      diagnostics,
      '',
      'bounds',
    );
    expect(diagnostics.items, isEmpty);
    expect(FlaxCodegenManifestCodec.encodeModule(decoded!), json);
  });
}
