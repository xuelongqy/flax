import type { DartListInput, DartMapInput, DartSetInput } from '@flax/core/bindings';
import { Stream, StreamController } from '@flax/dart/async';
import { Text, registerPage } from '@flax/flutter/widgets';
import {
  AsyncStreamCallbacks,
  CodegenThenObject,
  Probe,
} from '../../../.dart_tool/flax/ui/interop_bindings.js';

const callbacks = AsyncStreamCallbacks();
const thenObject = CodegenThenObject();
const probe = Probe();
const controller = StreamController<Promise<number>>({ sync: true });
const mixedController = StreamController<number | Promise<number>>({ sync: true });
const hooks = {
  mode: 'identity',
  sourceNext: 0,
  sourceReturns: 0,
  events: 0,
  completed: [] as number[],
  errors: [] as string[],
};
const source = Stream.fromAsyncIterable<Promise<number>>({
  [Symbol.asyncIterator]() {
    let index = 0;
    return {
      async next() {
        hooks.sourceNext++;
        index++;
        const current = index;
        return index <= 2
          ? {
              value: new Promise<number>((resolve) =>
                setTimeout(() => resolve(current), 40),
              ),
              done: false as const,
            }
          : { value: undefined, done: true as const };
      },
      async return() {
        hooks.sourceReturns++;
        return { value: undefined, done: true as const };
      },
    };
  },
});

const futureStream = callbacks.echoFutureStream((value) => {
  if (hooks.mode === 'reject') return Promise.reject(new Error('connection failed'));
  if (hooks.mode === 'wrong-stream') return Promise.resolve(3 as never);
  if (hooks.mode === 'pending') return new Promise(() => {});
  return value;
});
const futureOrStream = callbacks.echoFutureOrStream((value) =>
  hooks.mode === 'async' ? Promise.resolve(value) : value,
);
const streamFuture = callbacks.echoStreamFuture((value) =>
  hooks.mode === 'controller'
    ? controller.stream
    : hooks.mode === 'iterable'
      ? source
      : hooks.mode === 'observe'
        ? (observeTasks(value), value)
        : value,
);
const streamFutureOr = callbacks.echoStreamFutureOr((value) =>
  hooks.mode === 'controller' ? mixedController.stream : value,
);

function observeTasks(value: Stream<Promise<number>>) {
  const subscription = value.listen(
    (task) => {
      hooks.events++;
      task.then(
        (result) => hooks.completed.push(result),
        (error) => hooks.errors.push(String(error)),
      );
    },
    { onError: (error) => hooks.errors.push(String(error)) },
  );
  Object.assign(hooks, {
    pause: () => subscription.pause(),
    resume: () => subscription.resume(),
    cancel: () => subscription.cancel(),
  });
}

Object.assign(hooks, {
  echoThenObject: () => {
    const echoed = probe.echo(thenObject);
    return echoed === thenObject && !(echoed instanceof Promise);
  },
  wrongCollection: async () => {
    const stream = callbacks.echoStreamFutureList((value) => value)(
      Stream.fromIterable([Promise.resolve(new Set([1, 2]))]) as never,
    );
    for await (const event of stream) await event;
  },
  broadDartCollection: async () => {
    // echo exposes the copied JS array as a real, broadly typed Dart reference.
    const reference = probe.echo([1, 2]);
    const stream = callbacks.echoStreamFutureList((value) => value)(
      Stream.fromIterable([Promise.resolve(reference)]) as never,
    );
    for await (const event of stream) await event;
  },
  rejectedVoidTask: async () => {
    const stream = callbacks.echoStreamFutureVoid((value) => value)(
      Stream.fromIterable([Promise.reject(new Error('void task failed'))]),
    );
    for await (const event of stream) await event;
  },
  startRoundTrips: async () => {
    hooks.mode = 'identity';
    const values = Stream.fromIterable([1, 2]);
    const connected = await futureStream(Promise.resolve(values));
    const immediate = await futureOrStream(values);
    hooks.mode = 'async';
    const deferred = await futureOrStream(Promise.resolve(values));
    const tasks = Stream.fromIterable([Promise.resolve(3), Promise.resolve(4)]);
    const mixed = Stream.fromIterable([5, Promise.resolve(6)]);
    const echoedTasks = streamFuture(tasks);
    const echoedMixed = streamFutureOr(mixed);
    const all: number[] = [];
    for (const stream of [connected, immediate, deferred, echoedTasks, echoedMixed]) {
      for await (const event of stream) all.push(await event);
    }
    const nullable = callbacks.echoNullable((value) => value);
    hooks.mode = 'identity';
    Object.assign(hooks, {
      roundTrips: all.join(','),
      nullable: nullable(null) === null,
      done: true,
    });
  },
  structured: async () => {
    const list = callbacks.echoStreamFutureList((value) => value)(
      Stream.fromIterable<Promise<DartListInput<number>>>([Promise.resolve([9, 10])]),
    );
    const map = callbacks.echoStreamFutureMap((value) => value)(
      Stream.fromIterable<Promise<DartMapInput<string, number>>>([
        Promise.resolve({ count: 11 }),
      ]),
    );
    const record = callbacks.echoStreamFutureRecord((value) => value)(
      Stream.fromIterable([Promise.resolve({ $1: 12, label: 'record' })]),
    );
    const nothing = callbacks.echoStreamFutureVoid((value) => value)(
      Stream.fromIterable([Promise.resolve()]),
    );
    const set = callbacks.echoStreamFutureSet((value) => value)(
      Stream.fromIterable<Promise<DartSetInput<number>>>([
        Promise.resolve(new Set([13, 14])),
      ]),
    );
    const iterable = callbacks.echoStreamFutureIterable((value) => value)(
      Stream.fromIterable([Promise.resolve([15, 16])]),
    );
    const results: string[] = [];
    for await (const event of list) {
      results.push((await event).toArray().join(','));
    }
    for await (const event of map) {
      results.push(String((await event).get('count')));
    }
    for await (const event of record) {
      const value = await event;
      results.push(`${value.$1}:${value.label}`);
    }
    for await (const event of nothing) {
      results.push(String(await event));
    }
    for await (const event of set) results.push((await event).toArray().join(','));
    for await (const event of iterable) results.push((await event).toArray().join(','));
    Object.assign(hooks, { structuredValues: results.join('|'), structuredDone: true });
  },
  listenDartTasks: (value: Stream<Promise<number>>) => {
    const echoed = streamFuture(value);
    echoed.listen(
      (task) => {
        hooks.events++;
        task.then(
          (value) => hooks.completed.push(value),
          (error) => hooks.errors.push(String(error)),
        );
      },
      { onError: (error) => hooks.errors.push(String(error)) },
    );
    return echoed;
  },
  add: (value: number) => controller.add(Promise.resolve(value)),
  addWrong: () => controller.add(Promise.resolve('wrong' as never)),
  addRejected: () => controller.add(Promise.reject(new Error('task failed'))),
  addError: () => controller.addError(new Error('stream failed')),
  addMixed: () => {
    mixedController.add(7);
    mixedController.add(Promise.resolve(8));
  },
  close: () => Promise.all([controller.close(), mixedController.close()]),
});
Object.assign(globalThis, { asyncStreamHooks: hooks, asyncStreamCallbacks: callbacks });
registerPage('async-stream-callbacks', () => Text('async-stream-callbacks'));
