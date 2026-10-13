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
  integerIterator,
  nullableIterator,
  nestedIterator,
  objectIterator,
  echoIterator,
  readIteratorCurrent,
  callbackIterator,
  throwingIterator,
  callbackElementIterator,
  callbackListIterator,
  futureCallbackIterator,
  recordElementIterator,
  numberElementIterator,
  narrowNumberIterator,
  directNarrowCallback,
  sameIterator,
  sharedNumberElementIterator,
  callbackMemberCell,
} from '../../../.dart_tool/flax/ui/collection_members_bindings.js';
import { asDart, getDartType } from '@flax/core/bindings';
import { Iterator } from '@flax/dart/core';
import { SizedBox, registerPage } from '@flax/flutter/widgets';

registerPage('collectionMembers', () => SizedBox());

let list: ReturnType<typeof createShoppingList> | undefined;
let rejected = 0;
let scoped: ReturnType<typeof createShoppingList> | undefined;
Object.assign(globalThis, {
  collectionMemberHooks: {
    exerciseGenericViews() {
      const cell = callbackMemberCell();
      if (cell.self !== cell || cell.value() !== 'cell callback')
        throw new Error('Self-referential generic object view');
      cell.value = () => 'replacement';
      if (cell.value() !== 'replacement' || cell.echo(() => 'echo')() !== 'echo')
        throw new Error('Generic setter and method conversion');
      const cursor = callbackElementIterator();
      if (!(cursor instanceof Iterator) || !cursor.moveNext())
        throw new Error('Generic Iterator advance');
      const callback = cursor.current;
      if (callback() !== 'callback element' || cursor.current !== callback)
        throw new Error('Generic callback conversion and identity');
      const wide = numberElementIterator();
      if (!wide.moveNext() || wide.current(1.5) !== 2)
        throw new Error('Wide callback signature');
      const narrow = narrowNumberIterator(wide);
      if (
        narrow === wide ||
        !sameIterator(narrow, wide) ||
        Object.getPrototypeOf(narrow) !== Object.getPrototypeOf(wide) ||
        !(narrow instanceof Iterator) ||
        narrowNumberIterator(wide) !== narrow
      )
        throw new Error('One Dart object and shared JS class, cached per signature');
      const rejects = (action: () => unknown) => {
        try {
          action();
        } catch {
          return true;
        }
        return false;
      };
      if (
        !rejects(() => directNarrowCallback()(1.5)) ||
        !rejects(() => narrow.current(1.5)) ||
        !rejects(() => Reflect.apply(callback, undefined, [1])) ||
        wide.current(2.5) !== 3
      )
        throw new Error('Each view must preserve its declared signature');
      const rows = callbackListIterator();
      const records = recordElementIterator();
      if (
        !rows.moveNext() ||
        rows.current.get(0)() !== 'nested callback' ||
        !records.moveNext() ||
        records.current.label !== 'iterator record' ||
        records.current.values.get(1) !== 2
      )
        throw new Error('Nested collection and Record member conversion');
      cursor.current;
      Object.assign(globalThis, {
        genericViewReads() {
          for (let i = 0; i < 100; i++) cursor.current;
        },
      });
    },
    asyncGenericView() {
      const cursor = futureCallbackIterator();
      if (!cursor.moveNext()) throw new Error('Future Iterator advance');
      return cursor.current.then((fn) => fn());
    },
    sharedGenericView() {
      return sharedNumberElementIterator().current(1.5);
    },
    rejected: () => rejected,
    exerciseIterators() {
      const iterator = createWords().iterator;
      if (
        !(iterator instanceof Iterator) ||
        asDart(iterator, Iterator) !== iterator ||
        !iterator.moveNext() ||
        iterator.current !== 'one' ||
        echoIterator(iterator) !== iterator
      )
        throw new Error('Native Iterator identity and current');
      const returned = callbackIterator((value) => {
        if (value.current !== 'one') throw new Error('Iterator callback input');
        return value;
      }, iterator);
      if (
        returned !== iterator ||
        readIteratorCurrent(returned) !== 'one' ||
        !iterator.moveNext() ||
        String(iterator.current) !== 'two' ||
        iterator.moveNext() ||
        iterator.moveNext()
      )
        throw new Error('Native Iterator callback and exhaustion');
      const nullable = nullableIterator();
      if (!nullable.moveNext() || nullable.current !== null)
        throw new Error('Nullable Iterator element');
      if (!nullable.moveNext() || nullable.current !== 'last')
        throw new Error('Nullable Iterator advance');
      const nested = nestedIterator();
      if (!nested.moveNext() || nested.current.get(0) !== 1)
        throw new Error('Nested Iterator collection view');
      const owner = createShoppingList();
      owner.add('iterator');
      const objects = objectIterator(owner);
      if (!objects.moveNext() || objects.current !== owner)
        throw new Error('Iterator business object identity');
      const broken = throwingIterator();
      let rejectedInputs = 0;
      for (const operation of [
        () => readIteratorCurrent(integerIterator() as never),
        () => readIteratorCurrent(null as never),
        () => readIteratorCurrent(['raw'][Symbol.iterator]() as never),
        () => Reflect.apply(iterator.moveNext, iterator, [true]),
        () => callbackIterator(() => [] as never, iterator),
      ]) {
        let failed = false;
        try {
          operation();
        } catch {
          failed = true;
        }
        if (!failed) throw new Error('Invalid Iterator input accepted');
        rejectedInputs++;
      }
      for (const [operation, message] of [
        [() => broken.current, 'iterator current failure'],
        [() => broken.moveNext(), 'iterator move failure'],
      ] as const) {
        let failed = false;
        try {
          operation();
        } catch (error) {
          failed = error instanceof Error && error.message.includes(message);
        }
        if (!failed) throw new Error('Iterator lost the Dart exception');
      }
      return rejectedInputs;
    },
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
