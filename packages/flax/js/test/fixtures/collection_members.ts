import {
  ShoppingList,
  GroceryList,
  NamedList,
  GenericItems,
  Inventory,
  Tags,
  Words,
  createShoppingList,
  sameShoppingList,
  listView,
  createInventory,
  mapView,
  createTags,
  setView,
  createGroceryList,
  createNamedList,
  createNestedItems,
  createSetItems,
  nestedLists,
  nestedItems,
  groupedItems,
  echoCollection,
  recordCollections,
  echoList,
  copyList,
  nestedBound,
  keyedBound,
  echoMap,
  echoIterable,
  callBound,
  callbackLists,
  createWords,
} from '../../../.dart_tool/flax/ui/collection_members_bindings.js';
import { asDart, getDartType } from '@flax/core/bindings';
import { SizedBox, registerPage } from '@flax/flutter/widgets';

registerPage('collectionMembers', () => SizedBox());

let list: ReturnType<typeof createShoppingList> | undefined;
let rejected = 0;
let scoped: ReturnType<typeof createShoppingList> | undefined;
Object.assign(globalThis, {
  collectionMemberHooks: {
    rejected: () => rejected,
    copyLength: () => list!.toArray().length,
    iteratedLength: () => [...list!].length,
    captureScoped(value: unknown) {
      scoped = asDart(value, ShoppingList);
      if (scoped.summary !== 'SCOPED') throw new Error('Scoped class view');
    },
    scopedExpired() {
      for (const operation of [
        () => getDartType(scoped),
        () => asDart(scoped, ShoppingList),
        () => scoped!.summary,
      ]) {
        let failed = false;
        try {
          operation();
        } catch {
          failed = true;
        }
        if (!failed) throw new Error('Cast escaped a scoped callback lease');
      }
      scoped = undefined;
    },
    exercise() {
      list = createShoppingList();
      list.add('apple');
      const view = listView(list);
      view.add('pear');
      if (
        list.summary !== 'APPLE,PEAR' ||
        list.additions !== 2 ||
        list.get(0) !== 'APPLE' ||
        list.operatorGetIndex(1) !== 'PEAR' ||
        sameShoppingList(list) !== list ||
        !(list instanceof ShoppingList) ||
        list.toArray().join(',') !== 'APPLE,PEAR' ||
        [...list].join(',') !== 'APPLE,PEAR'
      )
        throw new Error('Collection subclass identity and native overrides');
      view.set(0, 'changed');
      if (list.summary !== 'changed,PEAR') throw new Error('Shared Dart collection');
      const copies = nestedLists(list).toArray();
      if (
        copies[0] !== copies[1] ||
        !Array.isArray(copies[0]) ||
        copies[0][0] !== 'changed'
      )
        throw new Error('Nested subclass copies');
      const returned = callbackLists(() => list!);
      if (returned.get(0) !== list || returned.toArray()[0][1] !== 'PEAR')
        throw new Error('Collection subclass callback');
      const map = createInventory();
      map.set('apple', 3);
      mapView(map).set('pear', 4);
      if (
        map.summary !== 'apple:3,pear:4' ||
        map.get('apple') !== 3 ||
        map.toMap().get('pear') !== 4 ||
        map.get('missing') !== null
      )
        throw new Error('Map subclass');
      const set = createTags();
      set.add('apple');
      setView(set).add('pear');
      const nativeCopy = set.toSet();
      if (
        set.summary !== 'apple,pear' ||
        nativeCopy.toSet().size !== 2 ||
        set.toArray().join(',') !== 'apple,pear' ||
        [...set].length !== 2
      )
        throw new Error('Set native toSet and bridge copying');
      nativeCopy.add('independent');
      if (set.length !== 2) throw new Error('Dart toSet did not copy');
      const groceries = createGroceryList();
      groceries.add('milk');
      if (
        !(groceries instanceof GroceryList) ||
        !(groceries instanceof ShoppingList) ||
        groceries.label !== 'groceries' ||
        groceries.get(0) !== 'MILK'
      )
        throw new Error('Collection subclass inheritance');
      const named = createNamedList();
      named.add('name');
      if (
        !(named instanceof NamedList) ||
        named.toArray !== 'native property' ||
        named.get(0) !== 'native NAME' ||
        [...named][0] !== 'NAME' ||
        listView(named).get(0) !== 'NAME'
      )
        throw new Error('Native member names must not be overwritten');
      const nested = createNestedItems();
      const sets = createSetItems();
      if (
        nested.get(0).get(0) !== 'nested' ||
        nested.toArray()[0][0] !== 'nested' ||
        nestedItems(nested).toArray()[0][0][0] !== 'nested' ||
        sets.get(0).toSet().size !== 1 ||
        sets.toArray()[0].size !== 1
      )
        throw new Error('Specialized collection members');
      nested.add(['next']);
      if (nested.get(1).get(0) !== 'next') throw new Error('Specialized mutations');
      const erased = new GenericItems(['erased']);
      const erasedCopies = groupedItems(erased).toArray();
      if (
        erased.toArray()[0][0] !== 'erased' ||
        erasedCopies[0] !== erasedCopies[1] ||
        groupedItems(erased).toArray()[0][0][0] !== 'erased'
      )
        throw new Error('Shared owner collection copies');
      const words = createWords();
      if (
        words.summary !== 'one,two' ||
        words.toArray().join(',') !== 'one,two' ||
        [...words].join(',') !== 'one,two' ||
        !words.contains('one')
      )
        throw new Error('Iterable subclass');
      if (
        echoCollection(list) !== list ||
        echoCollection(list).summary !== 'changed,PEAR' ||
        echoCollection(map) !== map ||
        echoCollection(map).summary !== 'apple:3,pear:4' ||
        echoCollection(set) !== set ||
        echoCollection(set).summary !== 'apple,pear' ||
        echoCollection(words) !== words ||
        echoCollection(words).summary !== 'one,two'
      )
        throw new Error('Generic round-trips must preserve subclass members');
      const genericView = echoList(list);
      if (
        asDart(genericView, ShoppingList) !== list ||
        asDart(nestedBound(list).get(0), ShoppingList) !== list ||
        asDart(echoMap(map), Inventory) !== map ||
        asDart(keyedBound(set).get('entry')!, Tags) !== set ||
        asDart(echoIterable(words), Words) !== words ||
        asDart(
          callBound((value) => asDart(value, ShoppingList), list),
          ShoppingList,
        ) !== list ||
        getDartType(genericView) !== 'ShoppingList' ||
        getDartType(listView(groceries)) !== 'GroceryList'
      )
        throw new Error('Checked generic collection views');
      if (asDart(listView(named), NamedList).toArray !== 'native property')
        throw new Error('Checked casts preserve native member names');
      const plainSet = echoCollection(new Set(['plain']));
      if (!(plainSet.toSet() instanceof Set))
        throw new Error('Unbound generic collections keep their collection view');
      const records = recordCollections();
      const record = records.get('entry')!;
      if (
        record.label !== 'record' ||
        record.values.get(0) !== 1 ||
        records.get('missing') !== null
      )
        throw new Error('Nullable collection results must retain Record metadata');
      class JsShoppingList extends ShoppingList {
        override add(value: string): void {
          super.add(`js ${value}`);
        }
      }
      const proxy = new JsShoppingList();
      listView(proxy).add('override');
      if (
        proxy.summary !== 'JS OVERRIDE' ||
        asDart(listView(proxy), ShoppingList) !== proxy ||
        proxy.toArray()[0] !== 'JS OVERRIDE' ||
        [...proxy][0] !== 'JS OVERRIDE'
      )
        throw new Error('JS collection overrides');
      for (const invoke of [
        () => list!.add(3 as never),
        () => list!.get('bad' as never),
        () => Reflect.apply(list!.set, list, [0]),
        () => Reflect.apply(list!.toArray, list, [3]),
        () => list!.get.call({} as never, 0),
        () => map.set('bad', 'bad' as never),
        () => nested.add([3] as never),
        () => sameShoppingList([] as never),
        () => list!.add(null as never),
        () => list!.add(undefined as never),
        () => asDart(copyList(list!), ShoppingList),
        () => asDart(listView(list!), GroceryList),
        () => asDart(map, ShoppingList),
        () => asDart(list!, createShoppingList as never),
        () => asDart([], ShoppingList),
        () => getDartType({}),
      ]) {
        try {
          invoke();
        } catch {
          rejected++;
          continue;
        }
        throw new Error('Invalid collection subclass input accepted');
      }
    },
    release() {
      list = undefined;
    },
  },
});
