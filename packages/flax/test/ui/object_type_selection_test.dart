import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/engine.dart';

const _baseId = 'test.selection/types#type:Base';
const _dogId = 'test.selection/types#type:Dog';
const _boxId = 'test.selection/types#type:Box';
const _detailedId = 'test.selection/details#type:Detailed';

class _Base {}

class _Dog extends _Base {
  bool detailed = false;

  @override
  Type get runtimeType => throw StateError('Do not call user runtimeType');
}

class _Box<T> extends _Base {}

FlaxObjectBinding _binding(
  String id,
  String name,
  bool Function(Object) matches, {
  List<String> supertypes = const [],
  String? alias,
}) => FlaxObjectBinding(
  id,
  [FlaxGetter('kind', const FlaxTypeRef('String'), (_) => name)],
  const {},
  constructors: const {},
  create: (_, _) => throw StateError('Return-only fixture'),
  matches: matches,
  supertypes: supertypes,
  aliasOf: alias,
);

List<FlaxBindingModule> _modules(_Dog dog) => [
  FlaxBindingModule(
    'types',
    [
      _binding(_baseId, 'base', (v) => v is _Base),
      _binding(_dogId, 'dog', (v) => v is _Dog, supertypes: [_baseId]),
      _binding(
        'test.selection/types#type:Alias',
        'alias',
        (v) => v is _Dog,
        supertypes: [_dogId, _baseId],
        alias: _dogId,
      ),
      _binding(_boxId, 'unused', (_) => false, supertypes: [_baseId]),
    ],
    functions: [
      FlaxFunctionBinding(
        'test.selection/types#function:dog',
        const [],
        const FlaxTypeRef('object', id: _baseId),
        (_) => dog,
      ),
      FlaxFunctionBinding(
        'test.selection/types#function:baseBox',
        const [],
        const FlaxTypeRef('object', id: _baseId),
        (_) => _Box<int>(),
      ),
      FlaxFunctionBinding(
        'test.selection/types#function:typedBox',
        const [],
        FlaxTypeRef('object', dartType: () => _Box<int>),
        (_) => _Box<int>(),
      ),
    ],
    dartTypes: [
      FlaxDartClassTemplate(
        _boxId,
        _Box<Object?>,
        'object',
        typeFactory: <T>() => _Box<T>,
        factory: <T>() =>
            (FlaxDartTypes types, String id) => FlaxDartClass(
              _Box<T>,
              _binding(
                id,
                'box<$T>',
                (value) => value is _Box<T>,
                supertypes: [_baseId],
              ),
            ),
      ),
    ],
    moduleId: 'test.selection/types',
    uiProtocol: flaxBindingVersion,
    requiredCapabilities: const [],
  ),
  FlaxBindingModule(
    'details',
    [
      _binding(
        _detailedId,
        'detailed',
        (v) => v is _Dog && v.detailed,
        supertypes: [_dogId, _baseId, _baseId],
      ),
    ],
    moduleId: 'test.selection/details',
    uiProtocol: flaxBindingVersion,
    requiredCapabilities: const [],
  ),
  FlaxBindingModule(
    'unrelated',
    [
      _binding(
        'test.other/types#type:Dog',
        'foreign',
        (v) => v is _Dog,
        supertypes: [_dogId, _baseId],
      ),
    ],
    moduleId: 'test.other/types',
    uiProtocol: flaxBindingVersion,
    requiredCapabilities: const [],
  ),
];

String _require(String name) {
  final manifest = jsonDecode(
    flaxTestFixtureFile('modules/modules.json', packageName: 'flax'),
  ) as Map;
  final module = (manifest['modules'] as List)
      .cast<Map<dynamic, dynamic>>()
      .singleWhere((m) => m['specifier'] == name);
  return '__flaxModules.require(${jsonEncode(name)}, '
      '${jsonEncode(module['version'])}, ${jsonEncode(module['artifact'])})';
}

String get _source =>
    '''
  var b = ${_require('@flax/core/bindings')};
  var w = ${_require('@flax/flutter/widgets')};
  for (const id of ${jsonEncode([_baseId, _dogId, _boxId, _detailedId, 'test.selection/types#type:Alias', 'test.other/types#type:Dog'])}) {
    b.defineObject(id, ['kind'], [], {}, []);
  }
  function returned(name) {
    return b.invokeTopLevel('test.selection/types#function:' + name, [], [], {});
  }
  w.registerPage('selection', () => w.SizedBox());
''';

void main() {
  testWidgets('cached candidates recheck values within their provider', (
    tester,
  ) async {
    final dog = _Dog();
    final h = FlaxOwnedTestHarness(
      createRuntime: createTestRuntime,
      bindings: FlaxBindingRegistry([flutterBindings, ..._modules(dog)]),
      source: _source,
    );
    try {
      await tester.pumpWidget(h.page('selection'));
      expect(h.string('returned("dog").kind'), 'dog');
      dog.detailed = true;
      expect(h.string('returned("dog").kind'), 'detailed');
      dog.detailed = false;
      expect(h.string('returned("dog").kind'), 'dog');
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });

  testWidgets('generic candidates refresh without leaking across Sessions', (
    tester,
  ) async {
    final modules = [flutterBindings, ..._modules(_Dog())];
    for (var i = 0; i < 2; i++) {
      final runtime = FlaxTestRuntimeTracker(createTestRuntime());
      final errors = <Object>[];
      final session = FlaxSession(
        createRuntime: () => runtime,
        bindings: FlaxBindingRegistry(modules),
        source: _source,
        plugins: const [],
        onError: (error, _) => errors.add(error),
      );
      try {
        await tester.pumpWidget(
          FlaxView.page(session: session, name: 'selection'),
        );
        for (final (function, kind) in [
          ('baseBox', 'base'),
          ('typedBox', 'box<int>'),
          ('baseBox', 'box<int>'),
        ]) {
          expect(
            (runtime.evaluate(
              'returned("$function").kind',
            ) as FlaxJsString).value,
            kind,
          );
        }
      } finally {
        await flaxTestUnmount(tester);
        await flaxTestCloseSession(tester, session);
      }
      expect(runtime.isDisposed, isTrue);
      expect(runtime.handlesAtDispose, 0);
      expect(errors, isEmpty);
    }
  });
}
