import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  var root = Directory.current;
  while (!Directory(p.join(root.path, 'packages/flax_codegen')).existsSync()) {
    if (root.parent.path == root.path) {
      throw StateError('Cannot locate the Flax workspace');
    }
    root = root.parent;
  }
  final uri = Uri.file(
    p.join(
      root.path,
      'packages/flax_codegen/test/fixtures/capability/nested_constructors.dart',
    ),
  ).toString();
  late FlaxCodegenBindingParser parser;

  FlaxCodegenBindingConfig config({
    Map<String, FlaxCodegenClassSelection> classes = const {},
  }) => FlaxCodegenBindingConfig(
    'nested_constructors',
    uri,
    '@example/nested-constructors',
    'unused.dart',
    'unused.ts',
    classes,
  );

  setUp(() {
    parser = FlaxCodegenBindingParser(root.path);
    addTearDown(parser.dispose);
  });

  test(
    'automatic nested targets compile and construct exact Dart types',
    () async {
      final proposal = await parser.proposeLibrary(config());
      for (final name in ['ListBox', 'MapBox', 'NullableBox']) {
        expect(proposal.config.classes[name]!.constructors[''], [
          'value',
          if (name == 'ListBox') 'history',
        ]);
      }
      final module = await parser.parse(proposal.config);
      final list = module.classes.singleWhere(
        (value) => value.name == 'ListBox',
      );
      expect(list.constructors.single.specializations.single.typeArguments, [
        'List<String>',
      ]);
      final history = list.constructors.single.parameters.singleWhere(
        (parameter) => parameter.name == 'history',
      );
      expect(history.type.item!.item!.kind, 'list');
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
        dartTestSource: '''
void main() {
  test('nested values keep concrete types and identity', () {
    final strings = <String>[];
    final list = _createListBox('', {'value': strings}) as api.ListBox<List<String>>;
    expect(list, isA<api.ListBox<List<String>>>());
    expect(identical(list.value, strings), isTrue);
    final map = _createMapBox('', {'value': <String, List<int?>>{'a': [1, null]}});
    expect(map, isA<api.MapBox<Map<String, List<int?>>>>());
    final nullable = _createNullableBox('', {'value': null});
    expect(nullable, isA<api.NullableBox<List<String?>?>>());
    expect((_createNullableBox('', {'value': <String?>[null]}) as api.NullableBox<List<String?>?>).value, [null]);
    final optional = _createOptionalBox('', {'value': null}) as api.OptionalBox<List<String>>;
    final optionalView = __OptionalBoxMemberView(optional)!;
    expect(optionalView.getters['value']!.type.nullable, isTrue);
    expect(optionalView.getters['requiredValue']!.type.nullable, isFalse);
    expect(optionalView.setters['requiredValue']!.type.nullable, isFalse);
    optionalView.setters['requiredValue']!.write(optional, strings);
    expect(identical(optional.requiredValue, strings), isTrue);
    expect(() => optionalView.setters['requiredValue']!.write(optional, null), throwsA(isA<TypeError>()));
    expect(__NullableBoxMemberView(nullable)!.getters['value']!.type.nullable, isTrue);
    expect(() => _createListBox('', {'value': <int>[]}), throwsA(isA<TypeError>()));
    expect(() => _createMapBox('', {'value': <String, List<String>>{'a': ['bad']}}), throwsA(isA<TypeError>()));
  });
}
''',
        consumerSource: '''
import { ListBox, MapBox, NullableBox, OptionalBox } from './plugin.js';
const list = ListBox(['a']);
const first: string = list.value.get(0);
ListBox(['a'], {history: [Promise.resolve(['earlier'])]});
// @ts-expect-error nested constructor inputs use the selected List<String> target
ListBox(['a'], {history: [Promise.resolve([2])]});
MapBox(new Map([['a', [1, null]]]));
NullableBox(null);
const optional: OptionalBox<typeof list.value> = OptionalBox(null);
optional.requiredValue = ['a'];
// @ts-expect-error a T? constructor input does not make the selected T nullable
optional.requiredValue = null;
''',
      );
    },
  );

  test('ambiguous nested targets require an explicit specialization', () async {
    final proposal = await parser.proposeLibrary(config());
    expect(proposal.config.classes['AmbiguousBox']!.constructors, isEmpty);
    expect(
      proposal.skips.any(
        (skip) =>
            skip.target == 'AmbiguousBox.' &&
            skip.code == 'constructor_specialization_ambiguous',
      ),
      isTrue,
    );
    final module = await parser.parse(
      config(
        classes: const {
          'AmbiguousBox': FlaxCodegenClassSelection(
            {
              '': ['value'],
            },
            kind: 'object',
            typeArguments: ['List<String>'],
            getters: ['value'],
          ),
        },
      ),
    );
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([module]),
      module,
      dartTestSource: '''
void main() {
  test('explicit target accepts an empty list without guessing', () {
    expect(_createAmbiguousBox('', {'value': <String>[]}), isA<api.AmbiguousBox<List<String>>>());
    expect(() => _createAmbiguousBox('', {'value': <int>[]}), throwsA(isA<TypeError>()));
  });
}
''',
      consumerSource: '''
import { AmbiguousBox } from './plugin.js';
AmbiguousBox([]);
AmbiguousBox(['a']);
// @ts-expect-error the selected Dart specialization only accepts strings
AmbiguousBox([1]);
''',
    );
  });

  test('explicit nested nominal arguments use selected bindings', () async {
    final module = await parser.parse(
      config(
        classes: const {
          'Leaf': FlaxCodegenClassSelection(
            {
              '': ['id'],
            },
            kind: 'object',
            getters: ['id'],
          ),
          'Envelope': FlaxCodegenClassSelection(
            {},
            kind: 'object',
            getters: ['value'],
          ),
          'ExplicitBox': FlaxCodegenClassSelection(
            {
              '': ['value'],
            },
            kind: 'object',
            typeArguments: ['Envelope<List<Leaf>>'],
            getters: ['value'],
          ),
        },
      ),
    );
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([module]),
      module,
      dartTestSource: '''
void main() {
  test('nominal nested values retain identity', () {
    final envelope = api.Envelope<List<api.Leaf>>([const api.Leaf(1)]);
    final box = _createExplicitBox('', {'value': envelope}) as api.ExplicitBox<api.Envelope<List<api.Leaf>>>;
    expect(box, isA<api.ExplicitBox<api.Envelope<List<api.Leaf>>>>());
    expect(identical(box.value, envelope), isTrue);
  });
}
''',
    );
  });

  test(
    'disjoint scalar and collection targets retain exact signatures',
    () async {
      final module = await parser.parse(
        config(
          classes: const {
            'MixedBox': FlaxCodegenClassSelection(
              {
                '': ['value', 'record'],
              },
              kind: 'object',
              getters: ['value'],
            ),
          },
        ),
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
        dartTestSource: r'''
void main() {
  test('mixed targets preserve native identity and reject narrowing', () {
    final strings = <String>[];
    final list = _createMixedBox('', {'value': strings}) as api.MixedBox<List<String>>;
    expect(identical(list.value, strings), isTrue);
    expect(_createMixedBox('', {'value': 'a'}), isA<api.MixedBox<String>>());
    expect(_createMixedBox('', {'value': 2}), isA<api.MixedBox<int>>());
    expect(_createMixedBox('', {'value': <int>{2}}), isA<api.MixedBox<Set<int>>>());
    expect(_createMixedBox('', {'value': <String, List<int?>>{'a': [null]}}), isA<api.MixedBox<Map<String, List<int?>>>>());
    expect(() => _createMixedBox('', {'value': <int>[]}), throwsArgumentError);
    expect(() => _createMixedBox('', {'value': 1.5}), throwsArgumentError);
    final record = (<List<String>>[strings],);
    final recorded = _createMixedBox('', {'value': strings, 'record': record}) as api.MixedBox<List<String>>;
    expect(identical(recorded.record!.$1.single, strings), isTrue);
    expect(() => _createMixedBox('', {'value': strings, 'record': (<Object?>[strings],)}), throwsArgumentError);
  });
}
''',
        consumerSource: r'''
import { MixedBox } from './plugin.js';
const list = MixedBox([]);
const value: string = list.value.get(0);
const text: string = MixedBox('a').value;
const number: number = MixedBox(2).value;
MixedBox(new Set([2]));
MixedBox(new Map([['a', [1, null]]]));
MixedBox(['a'], {record: {$1: [['a']]}});
// @ts-expect-error a closed List<String> target cannot accept numbers
MixedBox([2]);
// @ts-expect-error Record fields retain the same concrete target
MixedBox(['a'], {record: {$1: [[2]]}});
// @ts-expect-error the constructor has no boolean target
MixedBox(true);
''',
      );
    },
  );

  test(
    'collection bounds keep exact factories and shared proxy owners',
    () async {
      final module = await parser.parse(
        config(
          classes: const {
            'BoundedIterableBox': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              kind: 'object',
              getters: ['value', 'optional', 'record', 'identity'],
              setters: ['value'],
              methodTypeArguments: {
                'shadow': ['String'],
              },
              instanceMethods: {
                'echo': ['value'],
                'pending': ['value'],
                'map': ['callback'],
                'generic': ['callback'],
                'size': [],
                'shadow': ['value'],
              },
            ),
          },
        ),
      );
      expect(
        FlaxCodegenBindingEmitter([module]).dart(module),
        contains('memberView:'),
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
        dartTestSource: '''
void main() {
  test('native member views keep concrete conversions and shared methods', () async {
    final list = <String>['a'];
    final set = <String>{'a'};
    final listBox = _createBoundedIterableBox('', {'value': list}) as api.BoundedIterableBox<List<String>>;
    final setBox = _createBoundedIterableBox('', {'value': set}) as api.BoundedIterableBox<Set<String>>;
    final binding = nested_constructorsBindings.types.single as FlaxObjectBinding;
    final listView = binding.memberView!(listBox)!;
    final setView = binding.memberView!(setBox)!;
    expect(listView.getters['value']!.type.kind, 'list');
    expect(setView.getters['value']!.type.kind, 'set');
    expect(listView.getters['optional']!.type.nullable, isTrue);
    expect(listView.getters['record']!.type.record!.fields.single.type.item!.kind, 'list');
    expect(identical(listView.getters['value']!.read(listBox), list), isTrue);
    expect(identical(setView.getters['value']!.read(setBox), set), isTrue);
    expect(identical(listView.instanceMethods['echo']!.invoke(listBox, {'value': list}), list), isTrue);
    List<String> transform(List<String> value) => value;
    expect(identical(listView.instanceMethods['map']!.invoke(listBox, {'callback': transform}), list), isTrue);
    List<String> genericList<R extends List<String>>(R value) => value;
    Set<String> genericSet<R extends Set<String>>(R value) => value;
    expect(identical(listView.instanceMethods['generic']!.invoke(listBox, {'callback': genericList}), list), isTrue);
    expect(identical(setView.instanceMethods['generic']!.invoke(setBox, {'callback': genericSet}), set), isTrue);
    final identity = listView.getters['identity']!;
    expect(identical(identity.type.callback!.invoke(identity.read(listBox)!, [list], {}), list), isTrue);
    expect(() => listView.instanceMethods['generic']!.invoke(listBox, {'callback': genericSet}), throwsA(isA<TypeError>()));
    expect(identical(await (setView.instanceMethods['pending']!.invoke(setBox, {'value': set}) as Future<Set<String>>), set), isTrue);
    listView.setters['value']!.write(listBox, list);
    setView.setters['value']!.write(setBox, set);
    expect(() => listView.setters['value']!.write(listBox, set), throwsA(isA<TypeError>()));
    expect(() => setView.instanceMethods['echo']!.invoke(setBox, {'value': list}), throwsA(isA<TypeError>()));
    expect(listView.instanceMethods.containsKey('size'), isFalse);
    expect(listView.instanceMethods.containsKey('shadow'), isFalse);
    expect(binding.instanceMethods['size']!.invoke(listBox, {}), 1);
    expect(binding.instanceMethods['shadow']!.invoke(setBox, {'value': 'a'}), 'a');
    expect(binding.memberView!(api.BoundedIterableBox<Iterable<String>>(list)), isNull);
  });
}
''',
        consumerSource: '''
import { BoundedIterableBox } from './plugin.js';
const list: string = BoundedIterableBox(['a']).value.get(0);
const set: boolean = BoundedIterableBox(new Set(['a'])).value.contains('a');
const listBox = BoundedIterableBox(['a']);
listBox.value = ['b'];
listBox.map(value => value).get(0);
listBox.generic(value => value).get(0);
listBox.generic(() => ['raw']).get(0);
listBox.identity(listBox.value).get(0);
listBox.identity(['raw']).get(0);
listBox.pending(['c']).then(value => value.get(0));
const record: string = listBox.record.\$1.get(0).get(0);
const shadow: string = listBox.shadow('value');
// @ts-expect-error the closed List input rejects Set writes
listBox.value = new Set(['b']);
// @ts-expect-error the closed Iterable<String> bound rejects numeric values
BoundedIterableBox([1]);
''',
      );
      final proxy = await parser.parse(
        config(
          classes: const {
            'BoundedIterableBox': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              kind: 'object',
              getters: ['value'],
              proxy: 'extends',
            ),
          },
        ),
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([proxy]),
        proxy,
      );
      await expectLater(
        parser.parse(
          config(
            classes: const {
              'BoundedIterableBox': FlaxCodegenClassSelection(
                {
                  '': ['value'],
                },
                kind: 'object',
                instanceMethods: {
                  'select': ['value'],
                },
                methodTypeArguments: {
                  'select': ['Iterable<String>'],
                },
              ),
            },
          ),
        ),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'message',
            contains(
              'constructor target BoundedIterableBox<List<String>>.select',
            ),
          ),
        ),
      );
      final concrete = await parser.parse(
        config(
          classes: const {
            'BoundedIterableBox': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              kind: 'object',
              typeArguments: ['List<String>'],
              instanceMethods: {
                'select': ['value'],
              },
              methodTypeArguments: {
                'select': ['List<String>'],
              },
            ),
          },
        ),
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([concrete]),
        concrete,
      );
    },
  );

  test(
    'constructor data conversion stays independent of member conversion',
    () async {
      final module = await parser.parse(
        config(
          classes: const {
            'DataObjectBox': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              kind: 'object',
              getters: ['value', 'copied'],
              setters: ['value'],
              data: FlaxCodegenDataSelection(
                constructors: {
                  '': ['value'],
                },
                getters: ['copied'],
              ),
            ),
            'DataListBox': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              kind: 'object',
              getters: ['value'],
              setters: ['value'],
              data: FlaxCodegenDataSelection(
                constructors: {
                  '': ['value'],
                },
              ),
            ),
          },
        ),
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      expect(
        emitter.dart(module),
        isNot(contains('__DataObjectBoxMemberView')),
      );
      await compileFixture(
        root.path,
        emitter,
        module,
        dartTestSource: '''
void main() {
  test('data constructors preserve ordinary references and explicit data members', () {
    final bindings = nested_constructorsBindings.types.cast<FlaxObjectBinding>().toList();
    final objectBinding = bindings[0];
    final listBinding = bindings[1];
    final valueGetter = objectBinding.getters.singleWhere((getter) => getter.name == 'value');
    expect(objectBinding.constructors['']!.single.type.kind, 'data');
    expect(valueGetter.type.kind, 'any');
    expect(objectBinding.getters.singleWhere((getter) => getter.name == 'copied').type.kind, 'data');
    final values = <Object?>[null, <String, Object?>{'id': 1}];
    final object = _createDataObjectBox('', {'value': values}) as api.DataObjectBox<Object?>;
    expect(identical(valueGetter.read(object), values), isTrue);
    objectBinding.setters.single.write(object, values);
    final list = _createDataListBox('', {'value': values}) as api.DataListBox<List<Object?>>;
    final view = listBinding.memberView!(list)!;
    expect(listBinding.constructors['']!.single.type.item!.kind, 'data');
    expect(view.getters['value']!.type.kind, 'list');
    expect(view.getters['value']!.type.item!.kind, 'any');
    expect(view.setters['value']!.type.item!.kind, 'any');
    expect(identical(view.getters['value']!.read(list), values), isTrue);
    view.setters['value']!.write(list, values);
    expect(identical(list.value, values), isTrue);
    expect(() => view.setters['value']!.write(list, <Object?>{null}), throwsA(isA<TypeError>()));
  });
}
''',
      );
      FlaxCodegenBindingConfig copiedConfig(List<String> typeArguments) =>
          config(
            classes: {
              'DataListBox': FlaxCodegenClassSelection(
                {
                  '': ['value'],
                },
                kind: 'object',
                typeArguments: typeArguments,
                getters: ['value', 'copied'],
                data: const FlaxCodegenDataSelection(
                  constructors: {
                    '': ['value'],
                  },
                  getters: ['copied'],
                ),
              ),
            },
          );
      await expectLater(
        parser.parse(copiedConfig([])),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'message',
            contains('requires explicit class typeArguments'),
          ),
        ),
      );
      final concrete = await parser.parse(copiedConfig(['List<Object?>']));
      expect(concrete.classes.single.getters[0].type.item!.kind, 'any');
      expect(concrete.classes.single.getters[1].type.item!.kind, 'data');
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([concrete]),
        concrete,
      );
    },
  );

  test('multi-target callbacks require compatible erased signatures', () async {
    final proposal = await parser.proposeLibrary(config());
    expect(proposal.config.classes['CallbackBox']!.constructors, isEmpty);
    expect(
      proposal.skips.any(
        (skip) =>
            skip.target == 'CallbackBox.' &&
            skip.code == 'constructor_specialization_callback',
      ),
      isTrue,
    );
    for (final callback in ['next', 'pending']) {
      expect(
        () => parser.parse(
          config(
            classes: {
              'CallbackBox': FlaxCodegenClassSelection(
                {
                  '': ['value', callback],
                },
                kind: 'object',
                getters: ['value'],
              ),
            },
          ),
        ),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'callback',
            contains('Constructor callback $callback requires explicit'),
          ),
        ),
      );
    }
    final concrete = await parser.parse(
      config(
        classes: const {
          'CallbackBox': FlaxCodegenClassSelection(
            {
              '': ['value', 'next', 'pending', 'visit'],
            },
            kind: 'object',
            typeArguments: ['List<String>'],
            getters: ['value'],
          ),
        },
      ),
    );
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([concrete]),
      concrete,
      dartTestSource: '''
void main() {
  test('explicit targets keep callback result types', () {
    final values = <String>['a'];
    List<String> next() => <String>['next'];
    List<String>? visited;
    void visit(List<String> value) { visited = value; }
    final box = _createCallbackBox('', {
      'value': values,
      'next': next,
      'pending': <List<String> Function()>[next],
      'visit': visit,
    }) as api.CallbackBox<List<String>>;
    expect(box.next!(), ['next']);
    expect(box.pending!.single(), ['next']);
    box.visit!(values);
    expect(identical(visited, values), isTrue);
  });
}
''',
      consumerSource: '''
import { CallbackBox } from './plugin.js';
CallbackBox(['a'], {next: () => ['next'], pending: [() => ['later']]});
// @ts-expect-error concrete callback results must contain strings
CallbackBox(['a'], {next: () => [1]});
// @ts-expect-error callbacks nested inside collections keep the concrete result
CallbackBox(['a'], {pending: [() => [1]]});
''',
    );
    final compatible = await parser.parse(
      config(
        classes: const {
          'CallbackBox': FlaxCodegenClassSelection(
            {
              '': ['value', 'visit'],
            },
            kind: 'object',
            getters: ['value'],
          ),
        },
      ),
    );
    expect(
      compatible.classes.single.constructors.single.specializations,
      hasLength(2),
    );
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([compatible]),
      compatible,
      dartTestSource: '''
void main() {
  test('compatible input callbacks keep automatic dispatch', () {
    final values = <String>['a'];
    Object? visited;
    void visit(Object? value) { visited = value; }
    final list = _createCallbackBox('', {'value': values, 'visit': visit}) as api.CallbackBox<List<String>>;
    list.visit!(values);
    expect(identical(visited, values), isTrue);
    final text = _createCallbackBox('', {'value': 'a', 'visit': visit}) as api.CallbackBox<String>;
    text.visit!('a');
    expect(visited, 'a');
  });
}
''',
      consumerSource: '''
import { CallbackBox } from './plugin.js';
CallbackBox(['a'], {visit: (value) => { const text: string = value.get(0); }});
CallbackBox('a', {visit: (value) => { const text: string = value; }});
''',
    );
  });

  test('closed async type arguments reuse existing adapters', () async {
    for (final source in [
      'Future<List<String>>',
      'FutureOr<List<String>>',
      'Stream<List<String>>',
    ]) {
      final module = await parser.parse(
        config(
          classes: {
            if (source.startsWith('Stream'))
              'Stream': const FlaxCodegenClassSelection({}, kind: 'stream'),
            'ExplicitBox': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              kind: 'object',
              typeArguments: [source],
              getters: ['value'],
            ),
          },
        ),
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([module]),
        module,
      );
    }
    final module = await parser.parse(
      config(
        classes: const {
          'ListBox': FlaxCodegenClassSelection(
            {
              '': ['value', 'history', 'observer'],
            },
            kind: 'object',
            getters: ['value'],
            callbackSignatures: {
              'ListBox..observer': ['int'],
            },
          ),
        },
      ),
    );
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([module]),
      module,
    );
  });

  test('nested type arguments reject invalid shapes and bounds', () async {
    for (final source in [
      'List',
      'List<String, int>',
      'List<Missing>',
      'List<String',
      'List<String>; int injected = 0',
      'Stream<List<String>>',
    ]) {
      expect(
        () => parser.parse(
          config(
            classes: {
              'ExplicitBox': FlaxCodegenClassSelection(
                {
                  '': ['value'],
                },
                kind: 'object',
                typeArguments: [source],
              ),
            },
          ),
        ),
        throwsStateError,
        reason: source,
      );
    }
    expect(
      () => parser.parse(
        config(
          classes: const {
            'BoundedBox': FlaxCodegenClassSelection(
              {
                '': ['value'],
              },
              kind: 'object',
              typeArguments: ['List<String>'],
            ),
          },
        ),
      ),
      throwsA(
        isA<StateError>().having(
          (error) => error.message,
          'bound',
          contains('does not satisfy'),
        ),
      ),
    );
  });
}
