import 'dart:io';

import 'package:flax_codegen/flax_codegen.dart';
import 'package:flax_codegen/src/manifest_codec.dart';
import 'package:path/path.dart' as p;
import 'package:test/test.dart';

import 'generator_test.dart' show compileFixture;

void main() {
  final root = p.normalize(p.join(Directory.current.path, '../..'));
  final config = FlaxCodegenBindingConfig(
    'collection_members',
    Uri.file(
      p.join(root, 'packages/flax/test/fixtures/collection_members.dart'),
    ).toString(),
    '@test/collection-members',
    'unused.dart',
    'unused.ts',
    const {},
  );

  test('nested provider member views import every reached declaration', () async {
    final directory = await Directory(p.join(root, '.dart_tool'))
        .createTemp('nested-views-');
    addTearDown(() => directory.delete(recursive: true));
    for (final entry in const {
      'outer.dart': "import 'inner.dart'; class Outer<T> { Outer(this.inner); final Inner<T> inner; }",
      'inner.dart': "import 'third.dart'; class Inner<T> { Inner(this.third); final Third<T> third; }",
      'third.dart': 'class Third<T> { Third(this.value); final T value; }',
      'consumer.dart':
          "import 'outer.dart'; import 'inner.dart'; import 'third.dart'; "
          "Outer<String Function()> make() => Outer(Inner(Third(() => 'ok')));",
    }.entries) {
      await File(p.join(directory.path, entry.key)).writeAsString(entry.value);
    }
    final providers = [
      for (final entry in const {
        'Outer': 'inner',
        'Inner': 'third',
        'Third': 'value',
      }.entries)
        FlaxCodegenBindingConfig(
          entry.key.toLowerCase(),
          File(p.join(directory.path, '${entry.key.toLowerCase()}.dart')).uri
              .toString(),
          '@test/${entry.key.toLowerCase()}',
          'unused.dart',
          'unused.ts',
          {
            entry.key: FlaxCodegenClassSelection(
              {},
              kind: 'object',
              getters: [entry.value],
            ),
          },
        ),
    ];
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    await parser.prepare(providers);
    final modules = [
      for (final config in providers) await parser.parse(config),
    ];
    final consumerParser = FlaxCodegenBindingParser(root)
      ..prepareModules(modules);
    addTearDown(consumerParser.dispose);
    final consumer = await consumerParser.parse(
      FlaxCodegenBindingConfig(
        'consumer',
        File(p.join(directory.path, 'consumer.dart')).uri.toString(),
        '@test/consumer',
        'unused.dart',
        'unused.ts',
        {},
        functions: const {'make': FlaxCodegenFunctionSelection([])},
      ),
    );
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([...modules, consumer]),
      consumer,
      consumerSource: "import {make} from './plugin.js'; const value: string = make().inner.third.value();",
    );
  });

  test(
    'finite generic member shifts keep their declared conversions',
    () async {
      final directory = await Directory(p.join(root, '.dart_tool'))
          .createTemp('finite-views-');
      addTearDown(() => directory.delete(recursive: true));
      final source = File(p.join(directory.path, 'finite.dart'));
      await source.writeAsString('''
class Flip<A, B> {
  Flip(this.value);
  final A value;
  Flip<List<int>, A> get next => Flip([1]);
}
Flip<int, String> make() => Flip(1);
''');
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          'finite',
          source.uri.toString(),
          '@test/finite',
          'unused.dart',
          'unused.ts',
          const {
            'Flip': FlaxCodegenClassSelection(
              {},
              kind: 'object',
              getters: ['value', 'next'],
            ),
          },
          functions: const {'make': FlaxCodegenFunctionSelection([])},
        ),
      );
      await compileFixture(
        root,
        FlaxCodegenBindingEmitter([module]),
        module,
        consumerSource: "import {make} from './plugin.js'; const value: number = make().next.next.value.get(0);",
      );
    },
  );

  test(
    'expanding generic members emit one template without pre-expansion',
    () async {
      final directory = await Directory(p.join(root, '.dart_tool'))
          .createTemp('growing-');
      addTearDown(() => directory.delete(recursive: true));
      final source = File(p.join(directory.path, 'growing.dart'));
      await source.writeAsString('''
class Growing<T> {
  Growing<List<T>> get next => Growing<List<T>>();
}
''');
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final module = await parser.parse(
        FlaxCodegenBindingConfig(
          'growing',
          source.uri.toString(),
          '@test/growing',
          'unused.dart',
          'unused.ts',
          const {
            'Growing': FlaxCodegenClassSelection(
              {},
              kind: 'object',
              getters: ['next'],
              typeArguments: ['int'],
            ),
          },
        ),
      );
      final emitter = FlaxCodegenBindingEmitter([module]);
      await compileFixture(root, emitter, module);
    },
  );

  test(
    'Iterator APIs reuse the ordinary Core provider and element conversion',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final baseline = await parser.proposeLibrary(config);
      expect(
        baseline.skips.where((skip) => skip.target == 'Words.iterator'),
        isNotEmpty,
      );
      final selection = FlaxCodegenBindingConfig.read(
        p.join(root, 'packages/flax/bindings/config.yaml'),
      ).classes['Iterator']!;
      final core = await parser.parse(
        FlaxCodegenBindingConfig(
          'iterator_core',
          'dart:core',
          '@test/iterator-core',
          'core.dart',
          'core.ts',
          {'Iterator': selection},
        ),
      );
      expect(core.classes.single.kind, 'object');
      expect(core.classes.single.constructors, isEmpty);
      final diagnostics = FlaxCodegenManifestDiagnostics('iterator_core');
      final decoded = FlaxCodegenManifestCodec.decodeModule(
        FlaxCodegenManifestCodec.encodeModule(core),
        diagnostics,
        '',
        core.name,
      );
      expect(diagnostics.items, isEmpty);
      expect(decoded!.classes.single.getters.single.name, 'current');
      parser.prepareModules([decoded]);
      final proposal = await parser.proposeLibrary(config);
      expect(proposal.config.classes['Words']!.getters, contains('iterator'));
      expect(proposal.config.classes, isNot(contains('Iterator')));
      expect(
        proposal.skips.where((skip) => skip.reason.contains('Iterator<')),
        isEmpty,
      );
      final module = await parser.parse(proposal.config);
      final emitter = FlaxCodegenBindingEmitter([decoded, module]);
      final dart = emitter.dart(module);
      expect(dart, contains('FlaxDartClassTemplate('));
      expect(dart, contains('String Function()'));
      expect(dart, contains('({String label, List<int> values})'));
      expect(dart, isNot(contains('api.label')));
      await compileFixture(
        root,
        emitter,
        module,
        consumerSource: '''
import {createWords, createShoppingList, integerIterator, nullableIterator,
  nestedIterator, objectIterator, echoIterator, readIteratorCurrent,
  callbackIterator, callbackElementIterator, callbackListIterator,
  narrowNumberIterator, numberElementIterator, futureCallbackIterator,
  recordElementIterator} from './plugin.js';
import {Iterator} from '@test/iterator-core';
import type {DartList} from '@flax/core/bindings';
const iterator: Iterator<string> = createWords().iterator;
const moved: boolean = iterator.moveNext();
const current: string = iterator.current;
const returned: Iterator<string> = callbackIterator(value => value, iterator);
const echoed: Iterator<string> = echoIterator(iterator);
const optional: string | null = nullableIterator().current;
const row: DartList<number> = nestedIterator().current;
const callbackResult: string = callbackElementIterator().current();
const nestedCallbackResult: string = callbackListIterator().current.get(0)();
const narrowed: number = narrowNumberIterator(numberElementIterator()).current(2);
const futureCallbackResult: Promise<string> = futureCallbackIterator().current.then(fn => fn());
const recordLabel: string = recordElementIterator().current.label;
const summary: string = objectIterator(createShoppingList()).current.summary;
// @ts-expect-error Iterator preserves the actual generic argument.
readIteratorCurrent(integerIterator());
// @ts-expect-error A raw JS iterator is not a Dart reference.
readIteratorCurrent(['raw'][Symbol.iterator]());
// @ts-expect-error The Dart current getter is read-only.
iterator.current = 'bad';
// @ts-expect-error Dart Iterator does not provide the JS next protocol.
iterator.next();
// @ts-expect-error Core Iterator is an interface token, not a constructor.
new Iterator();
''',
      );
    },
  );

  test('collection subclasses retain inherited operations and custom members', () async {
    final parser = FlaxCodegenBindingParser(root);
    addTearDown(parser.dispose);
    final proposal = await parser.proposeLibrary(config);
    expect(
      proposal.config.classes.keys,
      containsAll(['ShoppingList', 'Inventory', 'Tags']),
    );
    expect(proposal.config.classes, isNot(contains('AmbiguousCollection')));
    expect(
      proposal.config.functions,
      isNot(contains('createAmbiguousCollection')),
    );
    expect(
      proposal.skips
          .where((skip) => skip.target == 'AmbiguousCollection')
          .single
          .code,
      'ambiguous_core_collection',
    );
    final module = await parser.parse(proposal.config);
    final diagnostics = FlaxCodegenManifestDiagnostics('collection_members');
    final encoded = FlaxCodegenManifestCodec.encodeModule(module);
    // UI fixtures are relocated into a public package before loading manifests.
    encoded['typeLibraries'] = {
      for (final name in module.typeLibraries.keys)
        name: 'package:collection_fixture/collection_members.dart',
    };
    final decoded = FlaxCodegenManifestCodec.decodeModule(
      encoded,
      diagnostics,
      '',
      module.name,
    );
    expect(diagnostics.items, isEmpty);
    expect(decoded, isNotNull);
    await compileFixture(
      root,
      FlaxCodegenBindingEmitter([module]),
      module,
      consumerSource: '''
import {createShoppingList, createInventory, createTags, listView, setView, createNamedList, createGroceryList,
  createNestedItems, createSetItems, nestedLists, nestedItems, echoCollection,
  ShoppingList, NamedList, Tags, echoList, nestedBound, keyedBound, echoMap, echoIterable, callBound} from './plugin.js';
import {asDart, getDartType, dartTypes, type FlaxDartInstance, type DartList, type DartMap, type DartSet, type DartIterableInput} from '@flax/core/bindings';
const list = createShoppingList();
list.add('apple');
const first: string = list.get(0);
const summary: string = list.summary;
const items: string[] = list.toArray();
const base: DartList<string> = list;
listView(list).add('pear');
const map = createInventory();
map.set('apple', 3);
const mapped: number | null = map.get('apple');
const copied: Map<string, number> = map.toMap();
const mapBase: DartMap<string, number> = map;
const set = createTags();
set.add('apple');
const tag: string = set.summary;
const tags: DartSet<string> = set.toSet();
const setBase: DartSet<string> = setView(set);
const input: DartIterableInput<string> = set;
const named = createNamedList();
const native: string = named.toArray;
const namedType = dartTypes.of(named);
declare const nativeNamed: FlaxDartInstance<typeof namedType>;
const nativeTypeProperty: string = nativeNamed.toArray;
// @ts-expect-error Native type views preserve the Dart getter over the collection helper.
nativeNamed.toArray();
const groceryType = dartTypes.of(createGroceryList());
declare const nativeGrocery: FlaxDartInstance<typeof groceryType>;
const nativeLabel: string = nativeGrocery.label;
const nativeGet: string = named.get(0);
listView(named).get(0);
const sameList: typeof list = echoCollection(list);
const sameMap: typeof map = echoCollection(map);
const sameTags: typeof set = echoCollection(set);
const sameSummary: string = sameTags.summary;
const sameNativeSet: DartSet<string> = sameTags.toSet();
const listBound: DartList<string> = echoList(list);
const restored: typeof list = asDart(listBound, ShoppingList);
const restoredSummary: string = restored.summary;
const restoredNativeName: string = asDart(listView(named), NamedList).toArray;
const restoredNativeSet: DartSet<string> = asDart(keyedBound(set).get('entry')!, Tags).toSet();
const runtimeType: string = getDartType(listBound);
const nestedBoundItem: DartList<string> = nestedBound(list).get(0);
const mapBound: DartMap<string, number> = echoMap(map);
const namedBound: DartList<string> = echoList(named);
const resultBound: DartList<string> = callBound(value => asDart(value, ShoppingList), list);
// @ts-expect-error Shared collection bounds return standard collection views.
listBound.summary;
// @ts-expect-error A nominal Set member is not a copied JS Set method.
restoredNativeSet.summary;
// @ts-expect-error Casts preserve the target's selected native getter.
asDart(listView(named), NamedList).toArray();
const nested = createNestedItems();
const row: DartList<string> = nested.get(0);
const rows: string[][] = nested.toArray();
const nestedCopies: string[][][] = nestedItems(nested).toArray();
const sets: Set<string>[] = createSetItems().toArray();
const copies: string[][] = nestedLists(list).toArray();
// @ts-expect-error A generic collection retains its concrete item type.
nested.add([3]);
// @ts-expect-error Typed list mutations retain their item type.
list.add(3);
// @ts-expect-error Map values retain their type.
map.set('apple', 'bad');
''',
    );
  });

  test(
    'explicit collection bindings reject unrelated collection shapes',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final explicit = FlaxCodegenBindingConfig(
        config.name,
        config.library,
        config.jsPackage,
        config.dartOutput,
        config.tsOutput,
        const {
          'AmbiguousCollection': FlaxCodegenClassSelection(
            {'': []},
            kind: 'object',
            typeArguments: ['String'],
          ),
        },
      );
      await expectLater(
        parser.parse(explicit),
        throwsA(
          isA<StateError>().having(
            (e) => e.message,
            'message',
            contains('Ambiguous core collection shape'),
          ),
        ),
      );
    },
  );
  test(
    'proxy generic aliases preserve the configured owner conversion',
    () async {
      final parser = FlaxCodegenBindingParser(root);
      addTearDown(parser.dispose);
      final explicit = FlaxCodegenBindingConfig(
        config.name,
        config.library,
        config.jsPackage,
        config.dartOutput,
        config.tsOutput,
        const {
          'GenericItems': FlaxCodegenClassSelection(
            {
              '': ['first'],
            },
            kind: 'object',
            typeArguments: ['List<String>'],
            proxy: 'extends',
            instanceMethods: {
              'echoItem': ['value'],
            },
          ),
        },
      );
      final module = await parser.parse(explicit);
      final method = module.classes.single.proxy!.methods.single;
      expect(method.parameters.single.type.kind, 'list');
      expect(method.result.kind, 'list');
      expect(method.parameters.single.type.item!.kind, 'String');
      final diagnostics = FlaxCodegenManifestDiagnostics('collection_members');
      FlaxCodegenManifestCodec.decodeClass(
        FlaxCodegenManifestCodec.encodeClass(module.classes.single),
        diagnostics,
        '',
      );
      expect(diagnostics.items, isEmpty);
      await compileFixture(root, FlaxCodegenBindingEmitter([module]), module);
    },
  );
}
