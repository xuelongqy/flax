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
import {createShoppingList, createInventory, createTags, listView, setView, createNamedList,
  createNestedItems, createSetItems, nestedLists, nestedItems, echoCollection,
  ShoppingList, NamedList, Tags, echoList, nestedBound, keyedBound, echoMap, echoIterable, callBound} from './plugin.js';
import {asDart, getDartType, type DartList, type DartMap, type DartSet, type DartIterableInput} from '@flax/core/bindings';
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
