import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
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
  FlaxCodegenBindingConfig config(
    Map<String, FlaxCodegenClassSelection> classes,
  ) => FlaxCodegenBindingConfig(
    'nested_inputs',
    uri,
    '@example/nested-inputs',
    'unused.dart',
    'unused.ts',
    classes,
  );

  setUp(() {
    parser = FlaxCodegenBindingParser(root.path);
    addTearDown(parser.dispose);
  });

  test(
    'required nested inputs use observed targets and existing conversion',
    () async {
      final proposal = await parser.proposeLibrary(config({}));
      final selection = proposal.config.classes['Bag']!;
      expect(selection.constructors[''], ['items']);
      expect(
        selection.constructors.keys,
        containsAll([
          'fromSet',
          'fromRecord',
          'fromFuture',
          'fromCallback',
          'fromEnvelope',
          'fromGeneric',
        ]),
      );
      final module = await parser.parse(
        config({
          'Bag': selection,
          'Envelope': proposal.config.classes['Envelope']!,
          'NullableBag': proposal.config.classes['NullableBag']!,
          'PairBag': proposal.config.classes['PairBag']!,
          'CorrelatedBag': proposal.config.classes['CorrelatedBag']!,
          'TokenBag': proposal.config.classes['TokenBag']!,
        }),
      );
      for (final constructor
          in module.classes.singleWhere((c) => c.name == 'Bag').constructors) {
        expect(constructor.specializations.single.typeArguments, ['String']);
      }
      final diagnostics = FlaxCodegenManifestDiagnostics('nested-inputs.json');
      // Local fixture file imports are emitter-only, as in the real UI fixture.
      final encoded = FlaxCodegenManifestCodec.encodeModule(module)
        ..['typeLibraries'] = <String, Object?>{};
      final restored = FlaxCodegenManifestCodec.decodeModule(
        encoded,
        diagnostics,
        '',
        module.name,
      );
      diagnostics.throwIfAny();
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([restored!]),
        restored,
        dartTestSource: '''
void main() {
  test('nested inputs retain closed Dart types, identity and member views', () async {
    final items = <String>[];
    final bag = createTypedFixture(nested_inputsBindings, 'Bag', [['String', null, <Object?>[], false]], '', {'items': items}) as api.Bag<String>;
    expect(identical(bag.items, items), isTrue);
    final view = __BagMemberView(bag)!;
    expect(view.getters['items']!.type.item!.kind, 'String');
    expect(view.setters['items']!.type.item!.kind, 'String');
    view.setters['items']!.write(bag, <String>['a']);
    expect(view.instanceMethods['first']!.invoke(bag, {}), 'a');
    expect(view.instanceMethods['map']!.invoke(bag, {'callback': (String value) => value.toUpperCase()}), ['A']);
    expect(() => view.setters['items']!.write(bag, <int>[1]), throwsA(isA<TypeError>()));
    expect(() => createTypedFixture(nested_inputsBindings, 'Bag', [['String', null, <Object?>[], false]], '', {'items': <int>[]}), throwsA(isA<TypeError>()));
    expect((createTypedFixture(nested_inputsBindings, 'Bag', [['String', null, <Object?>[], false]], 'fromSet', {'items': <String>{'set'}}) as api.Bag<String>).first(), 'set');
    expect((createTypedFixture(nested_inputsBindings, 'Bag', [['String', null, <Object?>[], false]], 'fromRecord', {'input': (<String>['record'], value: null)}) as api.Bag<String>).first(), 'record');
    expect((createTypedFixture(nested_inputsBindings, 'Bag', [['String', null, <Object?>[], false]], 'fromCallback', {'build': () => <String>['callback']}) as api.Bag<String>).first(), 'callback');
    final envelope = api.Envelope<List<String>>(items);
    expect(identical((createTypedFixture(nested_inputsBindings, 'Bag', [['String', null, <Object?>[], false]], 'fromEnvelope', {'input': envelope}) as api.Bag<String>).items, items), isTrue);
    final future = Future<List<String>>.value(['future']);
    final later = createTypedFixture(nested_inputsBindings, 'Bag', [['String', null, <Object?>[], false]], 'fromFuture', {'pending': future}) as api.Bag<String>;
    expect(identical(later.pending, future), isTrue);
    expect(await later.pending, ['future']);
    void visit<R extends String>(R value) {}
    expect(createTypedFixture(nested_inputsBindings, 'Bag', [['String', null, <Object?>[], false]], 'fromGeneric', {'visit': visit}), isA<api.Bag<String>>());
    final nullable = createTypedFixture(nested_inputsBindings, 'NullableBag', [['String', null, <Object?>[], false]], '', {'items': <String?>[null, 'value']}) as api.NullableBag<String>;
    final nullableView = __NullableBagMemberView(nullable)!;
    expect(nullableView.getters['items']!.type.nullable, isTrue);
    expect(nullableView.getters['items']!.type.item!.nullable, isTrue);
    expect(nullableView.instanceMethods['first']!.result.nullable, isFalse);
    expect(createTypedFixture(nested_inputsBindings, 'NullableBag', [['String', null, <Object?>[], false]], '', {'items': null}), isA<api.NullableBag<String>>());
    final values = <String, List<int?>>{'one': [null, 1]};
    final pair = createTypedFixture(nested_inputsBindings, 'PairBag', [['String', null, <Object?>[], false], ['int', null, <Object?>[], false]], '', {'items': values}) as api.PairBag<String, int>;
    expect(identical(pair.items, values), isTrue);
    expect(pair.first('one'), 1);
    expect(() => createTypedFixture(nested_inputsBindings, 'PairBag', [['String', null, <Object?>[], false], ['int', null, <Object?>[], false]], '', {'items': <int, List<int?>>{1: [2]}}), throwsA(isA<TypeError>()));
    expect(createTypedFixture(nested_inputsBindings, 'CorrelatedBag', [['String', null, <Object?>[], false]], '', {'tag': 'a', 'items': <String>['b']}), isA<api.CorrelatedBag<String>>());
    expect(createTypedFixture(nested_inputsBindings, 'CorrelatedBag', [['int', null, <Object?>[], false]], '', {'tag': 1, 'items': <int>[2]}), isA<api.CorrelatedBag<int>>());
    expect(() => createTypedFixture(nested_inputsBindings, 'CorrelatedBag', [['int', null, <Object?>[], false]], '', {'tag': 1, 'items': <String>['bad']}), throwsA(isA<TypeError>()));
    expect((createTypedFixture(nested_inputsBindings, 'TokenBag', [['String', null, <Object?>[], false]], '', {'items': <String>['token']}) as api.TokenBag<String>).items, ['token']);
  });
}
''',
        consumerSource: '''
import { Bag as BagBase, Envelope, NullableBag as NullableBase, PairBag as PairBase, CorrelatedBag, TokenBag as TokenBase } from './plugin.js';
import { dartType, dartTypes } from '@flax/core/bindings';
const Bag = dartType(BagBase, dartTypes.string);
const NullableBag = dartType(NullableBase, dartTypes.string);
const PairBag = dartType(PairBase, dartTypes.string, dartTypes.int);
const TokenBag = dartType(TokenBase, dartTypes.string);
const bag = Bag([]);
bag.items = ['a'];
const first: string = bag.first();
const mapped: string = bag.map(value => value.toUpperCase()).get(0);
Bag.fromSet(new Set(['a']));
Bag.fromRecord({\$1: ['a'], value: null});
Bag.fromFuture(Promise.resolve(['a']));
Bag.fromCallback(() => ['a']);
Bag.fromEnvelope(dartType(Envelope, dartTypes.list(dartTypes.string))(['a']));
Bag.fromGeneric(value => {});
const nullable = NullableBag([null, 'a']);
const required: string = nullable.first();
NullableBag(null);
const pairs = PairBag(new Map([['a', [null, 1]]]));
const number: number = pairs.first('a');
const text: string = dartType(CorrelatedBag, dartTypes.string)('a', ['b']).items.get(0);
const integer: number = dartType(CorrelatedBag, dartTypes.int)(1, [2]).items.get(0);
const token: string = TokenBag(['token']).items.get(0);
// @ts-expect-error both inputs must use the same compiled target
dartType(CorrelatedBag, dartTypes.string)('a', [1]);
// @ts-expect-error a union does not select a concrete Dart specialization
CorrelatedBag<string | number>('a', [1]);
// @ts-expect-error the observed Bag<String> target cannot be selected by JS type arguments
Bag<number>([1]);
// @ts-expect-error wrong elements are rejected
Bag([1]);
// @ts-expect-error callbacks retain their concrete result type
Bag.fromCallback(() => [1]);
// @ts-expect-error nested generic member inputs retain their concrete item type
bag.items = [1];
// @ts-expect-error map keys retain the first generic argument
PairBag(new Map([[1, [2]]]));
''',
      );
    },
  );

  test(
    'ambiguous, optional and missing generic inputs remain fail closed',
    () async {
      final proposal = await parser.proposeLibrary(config({}));
      for (final name in [
        'AmbiguousBag',
        'OptionalBag',
        'PhantomBag',
        'PhantomTokenBag',
      ]) {
        expect(proposal.config.classes[name]!.constructors, isNotEmpty);
        expect(
          proposal.skips.where((skip) => skip.target == '$name.'),
          isEmpty,
        );
      }
      final defaults = await parser.parse(
        config({
          'AmbiguousBag': const FlaxCodegenClassSelection({
            '': ['items'],
          }, kind: 'object'),
        }),
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([defaults]),
        defaults,
        consumerSource: "import { AmbiguousBag } from './plugin.js'; AmbiguousBag([]); AmbiguousBag(['a', 1, null]);",
      );
      final explicit = await parser.parse(
        config({
          'AmbiguousBag': const FlaxCodegenClassSelection(
            {
              '': ['items'],
            },
            kind: 'object',
            typeArguments: ['String'],
            getters: ['items'],
          ),
        }),
      );
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([explicit]),
        explicit,
        consumerSource: '''
import { AmbiguousBag } from './plugin.js';
AmbiguousBag([]);
AmbiguousBag(['a']);
// @ts-expect-error explicit specialization fixes the array item type
AmbiguousBag([1]);
''',
      );
    },
  );

  test('nested data inputs do not change native member conversion', () async {
    final module = await parser.parse(
      config({
        'DataInputBag': const FlaxCodegenClassSelection(
          {
            '': ['items'],
          },
          kind: 'object',
          getters: ['items'],
          data: FlaxCodegenDataSelection(
            constructors: {
              '': ['items'],
            },
          ),
        ),
      }),
    );
    final bag = module.classes.single;
    expect(bag.typeParameters.single.bound.kind, 'data');
    expect(bag.getters.single.type.item!.kind, 'any');
    await compileFixture(
      root.path,
      FlaxCodegenBindingEmitter([module]),
      module,
      dartTestSource: '''
void main() {
  test('data input leaves retain the ordinary native member path', () {
    final items = <Object?>[{'id': 1}, null];
    final bag = _createDataInputBag('', {'items': items}) as api.DataInputBag<Object?>;
    expect(identical(bag.items, items), isTrue);
  });
}
''',
      consumerSource: '''
import { DataInputBag } from './plugin.js';
const bag = DataInputBag([{id: 1}, null]);
const value = bag.items.get(0);
''',
    );
  });

  test(
    'enum factories expose only their compiled correlated targets',
    () async {
      final proposal = await parser.proposeLibrary(config({}));
      final module = await parser.parse(
        config({
          for (final name in ['NestedBagEnum', 'CorrelatedBagEnum'])
            name: proposal.config.classes[name]!,
        }),
      );
      final diagnostics = FlaxCodegenManifestDiagnostics('nested-enums.json');
      final encoded = FlaxCodegenManifestCodec.encodeModule(module)
        ..['typeLibraries'] = <String, Object?>{};
      final restored = FlaxCodegenManifestCodec.decodeModule(
        encoded,
        diagnostics,
        '',
        module.name,
      );
      diagnostics.throwIfAny();
      await compileFixture(
        root.path,
        FlaxCodegenBindingEmitter([restored!]),
        restored,
        dartTestSource: '''
void main() {
  test('enum factories select the actual concrete Dart target', () {
    expect(_enum_NestedBagEnum_factory_fromItems({'items': <String>[]}), same(api.NestedBagEnum.strings));
    expect(() => _enum_NestedBagEnum_factory_fromItems({'items': <int>[]}), throwsA(isA<TypeError>()));
    expect(_enum_CorrelatedBagEnum_factory_fromItems({'tag': 'a', 'items': <String>['b']}), same(api.CorrelatedBagEnum.strings));
    expect(_enum_CorrelatedBagEnum_factory_fromItems({'tag': 1, 'items': <int>[2]}), same(api.CorrelatedBagEnum.integers));
    expect(() => _enum_CorrelatedBagEnum_factory_fromItems({'tag': 1, 'items': <String>['bad']}), throwsArgumentError);
  });
}
''',
        consumerSource: '''
import { NestedBagEnum, CorrelatedBagEnum } from './plugin.js';
const text: string = NestedBagEnum.fromItems([]).items.get(0);
const fromItems = NestedBagEnum.fromItems;
const detached: string = fromItems(['a']).items.get(0);
const correlatedText: string = CorrelatedBagEnum.fromItems('a', ['b']).items.get(0);
const correlatedInteger: number = CorrelatedBagEnum.fromItems(1, [2]).items.get(0);
const correlated = CorrelatedBagEnum.fromItems;
const detachedInteger: number = correlated(1, []).items.get(0);
// @ts-expect-error the single generated target fixes the nested input type
NestedBagEnum.fromItems([1]);
// @ts-expect-error JS type arguments cannot add a Dart factory target
NestedBagEnum.fromItems<number>([1]);
// @ts-expect-error both inputs must select the same generated target
CorrelatedBagEnum.fromItems('a', [1]);
// @ts-expect-error a detached factory retains the correlated overloads
correlated(1, ['a']);
''',
      );
    },
  );
}
