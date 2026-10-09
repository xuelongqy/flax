import { computed, signal } from '@flax/core';
import { Stream } from '@flax/dart/async';
import {
  Builder,
  Text,
  PreferredSize,
  Size,
  registerPage,
  type BuildContext,
} from '@flax/flutter/widgets';
import {
  WidgetValues,
  ContextCallbacks,
  echoWidgetContext,
} from '../../../.dart_tool/flax/ui/repeated_bindings.js';

const label = signal('aggregate');
const store = WidgetValues();
class ValueText extends Text {
  #suffix = ' subclass';
  override build(_context: BuildContext) {
    return Text(computed(() => super.data! + label.value + this.#suffix).bind);
  }
}
const child = () => new ValueText('');
const record = () => ({ child: child(), siblings: [null, child()] });
const hooks = {
  store,
  label,
  future: store.keepFuture(async () => [child()]),
  nullable: store.keepNullable(() => [null, child()]),
  record: store.keepRecord(record),
  set: store.keepSet(() => new Set([child()])),
  map: store.keepMap(
    () =>
      new Map([
        ['child', child()],
        ['empty', null],
      ]),
  ),
  futureOr: store.keepFutureOr(() => record()),
  stream: store.keepStream(() => Stream.fromIterable([[null, child()]])),
  iterable: store.keepIterable(() => [child()]),
  iterableSet: () => store.keepIterable(() => new Set([child()]))(),
  nullableIterable: () => store.keepNullableIterable(() => [null, child()])(),
  iterableRecord: () =>
    store.keepIterableRecord(() => ({ children: new Set([null, child()]) }))(),
  concreteIterable: () => store.keepConcreteIterable(() => [null, child()])(),
  interfaceIterable: () =>
    store.keepInterfaceIterable(() => [
      null,
      PreferredSize({ preferredSize: Size(1, 2), child: child() }),
    ])(),
  suggestions: store.keepSuggestions((context, text) => {
    if (!context.mounted) throw new Error('Unmounted suggestions Context');
    const result = text === 'set' ? new Set([child()]) : [child()];
    return text === 'async' ? Promise.resolve(result) : result;
  }),
  iterableStream: store.keepIterableStream(() =>
    Stream.fromIterable([[null, child()], new Set([child(), null])]),
  ),
  pending: () => store.keepFuture(() => new Promise(() => {}))(),
  pendingIterable: () =>
    store.keepSuggestions(() => new Promise(() => {}))(hooks.saved!, ''),
  rejected: () =>
    store.keepFuture(() => Promise.reject(new Error('aggregate rejection')))(),
  saved: null as BuildContext | null,
  contextIdentity: false,
  wrongRecord: () => store.keepRecord(() => ({ child: 1, siblings: [] }) as never)(),
  missingRecord: () => store.keepRecord(() => ({ child: child() }) as never)(),
  wrongList: () => store.keepNullable(() => [42] as never)(),
  wrongNull: () => store.keepFuture(() => Promise.resolve([null] as never))(),
  saveBeforeThrow: () => {
    store.save([null, child()], { fail: true });
  },
  nativeRoundTrip: () => store.keepNullable(() => store.nativeNullable)(),
  asyncRecord: () => store.keepFutureOr(() => Promise.resolve(record()))(),
  concrete: () => store.keepConcrete(() => [null, child()])(),
  nested: () => store.keepNested(() => new Map([['children', [null, child()]]]))(),
  interface: () =>
    store.keepInterface(() => [
      null,
      PreferredSize({ preferredSize: Size(1, 2), child: child() }),
    ])(),
  wrongInterface: () => store.keepInterface(() => [child()] as never)(),
};
Object.assign(globalThis, { widgetValues: hooks });
registerPage('widget-values', () =>
  Builder({
    builder: (context) => {
      store.context = context;
      hooks.saved = context;
      hooks.contextIdentity =
        store.current === context &&
        store.echo(context) === context &&
        WidgetValues.echoStatic(context) === context &&
        echoWidgetContext(context) === context &&
        store.echo(null) === null &&
        echoWidgetContext(null) === null &&
        WidgetValues.absent === null;
      return Text('values ready');
    },
  }),
);

const contextStore = ContextCallbacks();
const contextCallbacks = {
  store: contextStore,
  saved: null as BuildContext | null,
  resolve: null as null | ((context: BuildContext) => void),
  retain: () => {
    contextStore.keep(() => contextCallbacks.saved!);
    contextStore.keepPending(
      () =>
        new Promise((resolve) => {
          contextCallbacks.resolve = resolve;
        }),
    );
  },
  verifyValues: () => {
    const saved = contextCallbacks.saved!;
    const result = contextStore.record(() => ({
      context: saved,
      siblings: [saved, null],
    }));
    return (
      contextStore.choose(() => saved) === saved &&
      contextStore.chooseMany((contexts) => contexts.get(0), saved) === saved &&
      contextStore.nullable(() => null) === null &&
      contextStore.nullable(() => saved) === saved &&
      result.context === saved &&
      result.siblings.get(0) === saved &&
      result.siblings.get(1) === null &&
      contextStore.nullableValue(() => null) === null &&
      contextStore.returned(saved)() === saved
    );
  },
  asynchronous: () => {
    const saved = contextCallbacks.saved!;
    return Promise.all([
      contextStore.future(async () => saved).then((value) => value === saved),
      contextStore.nullableFuture(async () => null).then((value) => value === null),
      Promise.resolve(contextStore.requiredFutureOr(() => saved)).then(
        (value) => value === saved,
      ),
      Promise.resolve(contextStore.futureOr(() => saved)).then(
        (value) => value === saved,
      ),
      Promise.resolve(contextStore.futureOr(async () => saved)).then(
        (value) => value === saved,
      ),
      Promise.resolve(contextStore.futureOr(() => null)).then(
        (value) => value === null,
      ),
      Promise.resolve(contextStore.futureOr(async () => null)).then(
        (value) => value === null,
      ),
      contextStore
        .futureRecord(async () => ({ context: saved, siblings: [saved, null] }))
        .then((value) => value.context === saved && value.siblings.get(0) === saved),
      contextStore
        .returnedFuture(saved)()
        .then((value) => value === saved),
    ]).then((results) => results.every(Boolean));
  },
};
Object.assign(globalThis, { contextCallbacks });
registerPage('context-callbacks', () =>
  Builder({
    builder: (context) => {
      contextCallbacks.saved = context;
      return Text('Context callbacks ready');
    },
  }),
);
