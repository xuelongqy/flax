import { Builder, Text, registerPage, type BuildContext } from '@flax/flutter/widgets';
import { Stream, StreamController } from '@flax/dart/async';
import { ContextStreams } from '../../../.dart_tool/flax/ui/context_streams_bindings.js';

const store = ContextStreams();
const hooks = {
  store,
  saved: null as BuildContext | null,
  received: [] as (BuildContext | null)[],
  sourceNext: 0,
  sourceReturns: 0,
  resolve: null as null | ((value: IteratorResult<BuildContext | null>) => void),
  generic: () =>
    store
      .stream(() => Stream.fromIterable([hooks.saved!, null]))
      .toList()
      .then((values) => values.get(0) === hooks.saved && values.get(1) === null),
  native: () =>
    store
      .stream(() => store.nativeStream(hooks.saved!))
      .toList()
      .then((values) => values.get(0) === hooks.saved && values.get(1) === null),
  operators: async () => {
    const saved = hooks.saved!;
    const chain = await store
      .stream(() => Stream.fromIterable([saved, null, saved]))
      .where((value) => value !== null)
      .map((value) => value)
      .asyncMap(async (value) => value)
      .take(2)
      .toList();
    const first = await store.stream(() => Stream.value(saved)).first;
    const pending = await store.stream(() => Stream.fromFuture(Promise.resolve(saved)))
      .single;
    const returned = await store.returned(saved)().toList();
    const controller = StreamController<BuildContext | null>({ sync: true });
    const collected = store.stream(() => controller.stream).toList();
    controller.add(saved);
    controller.add(null);
    await controller.close();
    const values = await collected;
    return (
      chain.length === 2 &&
      chain.get(0) === saved &&
      chain.get(1) === saved &&
      first === saved &&
      pending === saved &&
      returned.get(0) === saved &&
      values.get(0) === saved &&
      values.get(1) === null
    );
  },
  aggregates: async () => {
    const saved = hooks.saved!;
    const lists = await store
      .lists(() => Stream.fromIterable([[saved, null]]))
      .toList();
    const nested = lists.get(0);
    let recordsOk = false;
    for await (const value of store.records(() =>
      Stream.fromIterable([{ context: saved, siblings: [saved, null] }]),
    )) {
      recordsOk =
        value.context === saved &&
        value.siblings.get(0) === saved &&
        value.siblings.get(1) === null;
    }
    return nested.get(0) === saved && nested.get(1) === null && recordsOk;
  },
  derivedRecords: async () => {
    const saved = hooks.saved!;
    const source = () =>
      store
        .nativeStream(saved)
        .where((value) => value !== null)
        .map((value) => ({ context: value!, siblings: [value!, null] }));
    const values = await store.records(source).toList();
    const first = await store.records(source).first;
    const mapped = await store
      .records(source)
      .map((value) => value)
      .toList();
    const pair = await store.pairs(() =>
      Stream.fromIterable([
        {
          $1: null,
          nested: { context: saved, siblings: [saved, null] },
        },
      ]),
    ).single;
    const callbacks = await store
      .callbackRecords(() => store.nativeCallbackRecords(saved))
      .toList();
    for (const [name, valid] of [
      ['toList().get()', values.get(0).context === saved],
      ['Record nested List', values.get(0).siblings.get(1) === null],
      ['collection copy', values.toArray()[0].context === saved],
      ['first', first.context === saved],
      ['map().toList().get()', mapped.get(0).context === saved],
      ['positional null', pair.$1 === null],
      ['nested Record Context', pair.nested.context === saved],
      ['nested Record List', pair.nested.siblings.get(1) === null],
      ['nested Dart callback', callbacks.get(0).current() === saved],
    ] as const) {
      if (!valid) throw new Error(`Record conversion failed at ${name}`);
    }
    try {
      await store
        .records(source)
        .map((value) => {
          Object.assign(value, { context: 42 });
          return value;
        })
        .toList();
      throw new Error('Invalid Record Context was accepted');
    } catch (error) {
      if (!String(error).includes('Record field context')) throw error;
    }
    return true;
  },
  asyncCombinations: async () => {
    const saved = hooks.saved!;
    const source = () => store.nativeStream(saved);
    const future = await store.future(async () => source());
    const immediate = await store.futureOr(source);
    const promised = await store.futureOr(async () => source());
    const events = await store
      .futures(() =>
        Stream.fromIterable([Promise.resolve(saved), Promise.resolve(null)]),
      )
      .toList();
    const mixed = await store
      .futureOrEvents(() => Stream.fromIterable([saved, null, Promise.resolve(saved)]))
      .toList();
    return (
      (await future.first) === saved &&
      (await immediate.first) === saved &&
      (await promised.first) === saved &&
      (await events.get(0)) === saved &&
      (await events.get(1)) === null &&
      mixed.get(0) === saved &&
      mixed.get(1) === null &&
      (await mixed.get(2)) === saved
    );
  },
  startPaused: () => {
    hooks.received = [];
    hooks.sourceNext = 0;
    hooks.sourceReturns = 0;
    const source: AsyncIterable<BuildContext | null> = {
      [Symbol.asyncIterator]() {
        let index = 0;
        return {
          async next() {
            hooks.sourceNext++;
            return { done: false as const, value: index++ === 0 ? hooks.saved! : null };
          },
          async return() {
            hooks.sourceReturns++;
            return { done: true as const, value: undefined };
          },
        };
      },
    };
    const subscription = store
      .stream(() => Stream.fromAsyncIterable(source))
      .listen((value) => {
        hooks.received.push(value);
        subscription.pause();
      });
    return subscription;
  },
  startPending: () => {
    const source: AsyncIterable<BuildContext | null> = {
      [Symbol.asyncIterator]() {
        return {
          next: () =>
            new Promise<IteratorResult<BuildContext | null>>((resolve) => {
              hooks.resolve = resolve;
            }),
          async return() {
            hooks.sourceReturns++;
            return { done: true as const, value: undefined };
          },
        };
      },
    };
    return store.stream(() => Stream.fromAsyncIterable(source)).first;
  },
};
Object.assign(globalThis, { contextStreamHooks: hooks });
registerPage('context-streams', () =>
  Builder({
    builder: (context) => {
      hooks.saved = context;
      return Text('Context Stream callbacks');
    },
  }),
);
