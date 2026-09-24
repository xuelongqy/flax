import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));

  test('read is strict; fromMap preserves explicit type selection', () {
    final config = FlaxCodegenBindingConfig.read(
      p.join(root, 'packages/flax/bindings/components.yaml'),
    );
    expect(config.name, 'components');
    expect(config.types, isEmpty);
    expect(
      FlaxCodegenBindingConfig('n', 'l', 'j', 'd', 't', const {}).types,
      isEmpty,
    );
    expect(
      FlaxCodegenBindingConfig.fromMap({
        'name': 'n',
        'library': 'l',
        'jsPackage': 'j',
        'dartOutput': 'd',
        'tsOutput': 't',
        'types': ['Widget'],
        'format': 2,
      }).types,
      ['Widget'],
    );
    expect(
      () => FlaxCodegenFunctionSelection.fromMap({
        'parameters': <String>[],
        'extra': true,
      }),
      throwsStateError,
    );
  });

  test('strict parse fills types and every nested field family', () {
    final config = FlaxCodegenBindingConfig.parseStrict(_maximal);
    expect(config.name, 'plugin');
    expect(config.additionalLibraries, ['package:example/extra.dart']);
    expect(config.imports, ['flax']);
    expect(config.types, ['Widget', 'State']);
    final gauge = config.classes['Gauge']!;
    expect(gauge.kind, 'object');
    expect(gauge.proxy, 'extends');
    final variant = gauge.proxyVariants['FancyState']!;
    expect(variant.mixins.map((mixin) => mixin.name), [
      'FirstMixin',
      'SecondMixin',
    ]);
    expect(variant.mixins.last.library, 'package:example/mixins.dart');
    expect(gauge.jsName, 'CanvasView');
    expect(gauge.asyncIterableFactory, 'fromAsyncIterable');
    expect(gauge.disposeMethod, 'dispose');
    expect(gauge.constructors['named'], ['initial']);
    expect(gauge.widgetInterfaces, ['PreferredSizeWidget']);
    expect(gauge.callbackSignatures['listen.onError'], [
      'Object',
      'StackTrace',
    ]);
    expect(gauge.callbackOptionalParameters['listen.onError'], [1]);
    expect(gauge.callbackErrorParameters['listen.onError'], [0]);
    expect(gauge.callbackScopedParameters['timeout.onTimeout'], [0]);
    expect(gauge.data.constructors['named'], ['arguments']);
    expect(gauge.data.getters, ['arguments']);
    expect(gauge.data.methods['pushNamed'], ['arguments']);
    expect(gauge.data.results, ['push']);
    expect(gauge.staticGetters, ['instance']);
    expect(gauge.errorGetters, ['error']);
    expect(gauge.setters, ['value']);
    expect(gauge.listenerPairs, {'watch': 'unwatch'});
    expect(gauge.pageAdapter!.library, 'package:example/adapter.dart');
    expect(gauge.pageAdapter!.function, 'createRoute');
    expect(gauge.typeArguments, ['Object?']);
    expect(gauge.methodTypeArguments['push'], ['Object?']);
    expect(gauge.startsRoute, ['push']);
    expect(gauge.instanceMethods['move'], ['amount']);
    expect(gauge.getters, ['reading']);
    expect(gauge.methods['castFrom'], ['source']);
    final show = config.functions['show']!;
    expect(show.parameters, ['context', 'builder']);
    expect(show.typeArguments, ['Object?']);
    expect(show.dataParameters, ['arguments']);
    expect(show.dataResult, isTrue);
    expect(show.route!.context, 'context');
    expect(show.route!.rootNavigator, 'root');
    expect(show.route!.builders, ['builder']);
    expect(config.callbackSnapshots['Offset']!.fields, ['dx', 'dy']);
    expect(config.callbackSnapshots['Scroll']!.extendsName, 'Offset');
    expect(config.callbackSnapshots['Scroll']!.fields, ['delta']);
  });

  test('omitted optional collections default to empty', () {
    final config = FlaxCodegenBindingConfig.parseStrict(_minimal);
    expect(config.additionalLibraries, isEmpty);
    expect(config.imports, isEmpty);
    expect(config.types, isEmpty);
    expect(config.classes, isEmpty);
    expect(config.functions, isEmpty);
    expect(config.callbackSnapshots, isEmpty);
  });

  test('readStrict reads a format-2 file', () {
    final directory = Directory.systemTemp.createTempSync('flax-config-');
    addTearDown(() => directory.deleteSync(recursive: true));
    final file = File(p.join(directory.path, 'config.yaml'))
      ..writeAsStringSync(_minimal);
    expect(FlaxCodegenBindingConfig.readStrict(file.path).name, 'plugin');
  });

  test(
    'top-level unknown, missing, bad format, and empty name fail closed',
    () {
      expectDiagnostic(
        _errors('''
format: 2
name: plugin
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
extra: true
'''),
        [_d(FlaxCodegenDiagnosticCode.unknownField, '/extra', 7, 1)],
      );
      expectDiagnostic(
        _errors('''
format: 2
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
'''),
        [_d(FlaxCodegenDiagnosticCode.missingField, '/name', 1, 1)],
      );
      expectDiagnostic(
        _errors('''
format: 999
name: plugin
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
'''),
        [_d(FlaxCodegenDiagnosticCode.invalidValue, '/format', 1, 9)],
      );
      expectDiagnostic(
        _errors('''
format: "2"
name: plugin
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
'''),
        [_d(FlaxCodegenDiagnosticCode.typeMismatch, '/format', 1, 9)],
      );
      expectDiagnostic(
        _errors('''
format: 2
name: ''
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
'''),
        [_d(FlaxCodegenDiagnosticCode.invalidValue, '/name', 2, 7)],
      );
    },
  );

  test('duplicate YAML keys use the package:yaml key span', () {
    expectDiagnostic(_errors('format: 2\nformat: 2\n'), [
      _d(FlaxCodegenDiagnosticCode.duplicateKey, '', 2, 1),
    ]);
  });

  test('wrong classes container does not cascade into children', () {
    expectDiagnostic(
      _errors('''
format: 2
name: plugin
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
classes: 1
'''),
      [_d(FlaxCodegenDiagnosticCode.typeMismatch, '/classes', 7, 10)],
    );
  });

  test('nested unknown, missing, type, invalid, and duplicate fail closed', () {
    expectDiagnostic(
      _errors('''
$_minimal
functions:
  show:
    parameters: [context]
    extra: true
'''),
      [
        _d(
          FlaxCodegenDiagnosticCode.unknownField,
          '/functions/show/extra',
          11,
          5,
        ),
      ],
    );
    expectDiagnostic(
      _errors('''
$_minimal
functions:
  show: {}
'''),
      [
        _d(
          FlaxCodegenDiagnosticCode.missingField,
          '/functions/show/parameters',
          9,
          9,
        ),
      ],
    );
    expectDiagnostic(
      _errors('''
$_minimal
functions:
  show:
    parameters: 1
'''),
      [
        _d(
          FlaxCodegenDiagnosticCode.typeMismatch,
          '/functions/show/parameters',
          10,
          17,
        ),
      ],
    );
    expectDiagnostic(
      _errors('''
$_minimal
classes:
  Gauge:
    kind: object
    getters: ['']
'''),
      [
        _d(
          FlaxCodegenDiagnosticCode.invalidValue,
          '/classes/Gauge/getters/0',
          11,
          15,
        ),
      ],
    );
    expectDiagnostic(
      _errors('''
$_minimal
classes:
  Gauge:
    kind: object
    getters: [reading, reading]
'''),
      [
        _d(
          FlaxCodegenDiagnosticCode.duplicateValue,
          '/classes/Gauge/getters/1',
          11,
          24,
        ),
      ],
    );
    expectDiagnostic(
      _errors('''
$_minimal
classes:
  Gauge:
    kind: unknown
'''),
      [
        _d(
          FlaxCodegenDiagnosticCode.invalidValue,
          '/classes/Gauge/kind',
          10,
          11,
        ),
      ],
    );
  });

  test('unknown class fields and proxy kinds fail closed', () {
    expectDiagnostic(
      _errors('''
$_minimal
classes:
  Gauge:
    unknownOption: true
'''),
      [
        _d(
          FlaxCodegenDiagnosticCode.unknownField,
          '/classes/Gauge/unknownOption',
          10,
          5,
        ),
      ],
    );
    expectDiagnostic(
      _errors('''
$_minimal
classes:
  Gauge:
    proxy: unsupported
'''),
      [
        _d(
          FlaxCodegenDiagnosticCode.invalidValue,
          '/classes/Gauge/proxy',
          10,
          12,
        ),
      ],
    );
  });

  test('empty snapshot fields without extends are incompatible', () {
    expectDiagnostic(
      _errors('''
$_minimal
callbackSnapshots:
  Offset: {}
'''),
      [
        _d(
          FlaxCodegenDiagnosticCode.incompatibleFields,
          '/callbackSnapshots/Offset',
          9,
          11,
        ),
      ],
    );
  });

  test('independent diagnostics sort by code, pointer, and span', () {
    expectDiagnostic(_errors('format: 2\n'), [
      _d(FlaxCodegenDiagnosticCode.missingField, '/dartOutput', 1, 1),
      _d(FlaxCodegenDiagnosticCode.missingField, '/jsPackage', 1, 1),
      _d(FlaxCodegenDiagnosticCode.missingField, '/library', 1, 1),
      _d(FlaxCodegenDiagnosticCode.missingField, '/name', 1, 1),
      _d(FlaxCodegenDiagnosticCode.missingField, '/tsOutput', 1, 1),
    ]);
  });

  test('dynamic mapping keys use RFC 6901 pointers', () {
    expectDiagnostic(
      _errors('''
$_minimal
a/b: true
~tilde: true
'''),
      [
        _d(FlaxCodegenDiagnosticCode.unknownField, '/a~1b', 8, 1),
        _d(FlaxCodegenDiagnosticCode.unknownField, '/~0tilde', 9, 1),
      ],
    );
  });

  test('mistyped class does not cascade into its fields', () {
    expectDiagnostic(
      _errors('''
$_minimal
classes:
  Widget: 1
  Text:
    extra: true
'''),
      [
        _d(FlaxCodegenDiagnosticCode.typeMismatch, '/classes/Widget', 9, 11),
        _d(
          FlaxCodegenDiagnosticCode.unknownField,
          '/classes/Text/extra',
          11,
          5,
        ),
      ],
    );
  });

  test('explicit YAML null is a type mismatch, not an omitted default', () {
    expectDiagnostic(
      _errors('''
$_minimal
types: null
classes: null
functions: null
callbackSnapshots: null
'''),
      [
        _d(FlaxCodegenDiagnosticCode.typeMismatch, '/types', 8, 8),
        _d(FlaxCodegenDiagnosticCode.typeMismatch, '/classes', 9, 10),
        _d(FlaxCodegenDiagnosticCode.typeMismatch, '/functions', 10, 12),
        _d(
          FlaxCodegenDiagnosticCode.typeMismatch,
          '/callbackSnapshots',
          11,
          20,
        ),
      ],
    );
    expectDiagnostic(
      _errors('''
$_minimal
classes:
  Gauge:
    kind: null
    data: null
    pageAdapter: null
functions:
  show:
    parameters: [context]
    route: null
callbackSnapshots:
  Offset:
    fields: null
'''),
      [
        _d(
          FlaxCodegenDiagnosticCode.typeMismatch,
          '/classes/Gauge/kind',
          10,
          11,
        ),
        _d(
          FlaxCodegenDiagnosticCode.typeMismatch,
          '/classes/Gauge/data',
          11,
          11,
        ),
        _d(
          FlaxCodegenDiagnosticCode.typeMismatch,
          '/classes/Gauge/pageAdapter',
          12,
          18,
        ),
        _d(
          FlaxCodegenDiagnosticCode.typeMismatch,
          '/functions/show/route',
          16,
          12,
        ),
        _d(
          FlaxCodegenDiagnosticCode.typeMismatch,
          '/callbackSnapshots/Offset/fields',
          19,
          13,
        ),
      ],
    );
  });

  test('non-string dynamic map keys are type mismatches', () {
    expectDiagnostic(
      _errors('''
$_minimal
classes:
  1:
    extra: true
'''),
      [_d(FlaxCodegenDiagnosticCode.typeMismatch, '/classes', 9, 3)],
    );
    expectDiagnostic(
      _errors('''
$_minimal
classes:
  '':
    extra: true
'''),
      [_d(FlaxCodegenDiagnosticCode.invalidValue, '/classes/', 9, 3)],
    );
  });

  test('readStrict maps missing and directory paths to FCG_PATH', () {
    final directory = Directory.systemTemp.createTempSync('flax-config-');
    addTearDown(() => directory.deleteSync(recursive: true));
    expectDiagnostic(_readErrors(p.join(directory.path, 'missing.yaml')), [
      _d(FlaxCodegenDiagnosticCode.path, '', 1, 1),
    ]);
    expectDiagnostic(_readErrors(directory.path), [
      _d(FlaxCodegenDiagnosticCode.path, '', 1, 1),
    ]);
  });

  test('automatic overrides preserve partial selection intent', () {
    final overrides = FlaxCodegenAutoOverrides.parseStrict('''
format: 2
overrides:
  classes:
    SpecialPage:
      typeArguments: [String]
      pageAdapter:
        library: package:example/adapter.dart
        function: createRoute
  functions:
    openPage:
      route:
        context: context
        rootNavigator: root
        builders: [builder]
  exclude: [legacyHelper]
''');

    final classOverride = overrides.classes['SpecialPage']!;
    expect(classOverride.fields, {'typeArguments', 'pageAdapter'});
    expect(classOverride.selection.typeArguments, ['String']);
    expect(classOverride.selection.constructors, isEmpty);
    expect(classOverride.selection.pageAdapter?.function, 'createRoute');

    final functionOverride = overrides.functions['openPage']!;
    expect(functionOverride.fields, {'route'});
    expect(functionOverride.selection.parameters, isEmpty);
    expect(functionOverride.selection.route?.context, 'context');
    expect(overrides.exclude, ['legacyHelper']);
  });
}

List<FlaxCodegenDiagnostic> _errors(String yaml) {
  try {
    FlaxCodegenBindingConfig.parseStrict(yaml);
    fail('expected FlaxCodegenException');
  } on FlaxCodegenException catch (error) {
    return error.diagnostics;
  }
}

List<FlaxCodegenDiagnostic> _readErrors(String filename) {
  try {
    FlaxCodegenBindingConfig.readStrict(filename);
    fail('expected FlaxCodegenException');
  } on FlaxCodegenException catch (error) {
    return error.diagnostics;
  }
}

({String code, String pointer, int line, int column}) _d(
  FlaxCodegenDiagnosticCode code,
  String pointer,
  int line,
  int column,
) => (code: code.value, pointer: pointer, line: line, column: column);

void expectDiagnostic(
  List<FlaxCodegenDiagnostic> diagnostics,
  List<({String code, String pointer, int line, int column})> expected,
) {
  expect([
    for (final diagnostic in diagnostics)
      (
        code: diagnostic.code.value,
        pointer: diagnostic.pointer,
        line: diagnostic.line,
        column: diagnostic.column,
      ),
  ], expected);
}

const _minimal = '''
format: 2
name: plugin
library: package:x/x.dart
jsPackage: '@x/x'
dartOutput: a.dart
tsOutput: b.ts
''';

const _maximal = '''
format: 2
name: plugin
library: package:example/example.dart
additionalLibraries:
  - package:example/extra.dart
jsPackage: '@example/plugin'
dartOutput: lib/out.dart
tsOutput: js/out.ts
imports:
  - flax
types:
  - Widget
  - State
functions:
  show:
    parameters: [context, builder]
    typeArguments: ['Object?']
    data:
      parameters: [arguments]
      result: true
    route:
      context: context
      rootNavigator: root
      builders: [builder]
callbackSnapshots:
  Offset:
    fields: [dx, dy]
  Scroll:
    extends: Offset
    fields: [delta]
classes:
  Gauge:
    kind: object
    constructors:
      named: [initial]
    widgetInterfaces: [PreferredSizeWidget]
    asyncIterableFactory: fromAsyncIterable
    callbackSignatures:
      listen.onError: [Object, StackTrace]
    callbackOptionalParameters:
      listen.onError: [1]
    callbackErrorParameters:
      listen.onError: [0]
    callbackScopedParameters:
      timeout.onTimeout: [0]
    data:
      constructors:
        named: [arguments]
      getters: [arguments]
      methods:
        pushNamed: [arguments]
      results: [push]
    proxy: extends
    proxyVariants:
      FancyState:
        mixins:
          - FirstMixin
          - name: SecondMixin
            library: package:example/mixins.dart
    staticGetters: [instance]
    errorGetters: [error]
    setters: [value]
    disposeMethod: dispose
    listenerPairs:
      watch: unwatch
    pageAdapter:
      library: package:example/adapter.dart
      function: createRoute
    typeArguments: ['Object?']
    methodTypeArguments:
      push: ['Object?']
    startsRoute: [push]
    instanceMethods:
      move: [amount]
    getters: [reading]
    methods:
      castFrom: [source]
    jsName: CanvasView
''';
