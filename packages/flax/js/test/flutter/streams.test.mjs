import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  bindingVersion,
  defineStream,
  invokeStream,
} from '../../dist/runtime/bindings.js';
import { Stream } from '../../dist/dart/generated/libraries/async/index.js';

const api = globalThis.__flaxBindings;
const type = 'test:Stream';
const view = 'stream:test:Stream<any:?>';

defineStream(type, ['isBroadcast'], {
  listen(onData, options = {}) {
    return invokeStream(this, type, 'listen', [onData, options]);
  },
});

function stream(id) {
  return api.streamObject(type, view, id);
}

test('Stream wrappers are lazy, typed and preserve their view identity', () => {
  const calls = [];
  globalThis.__flaxStream = (...args) => {
    calls.push(args);
    return args[3] === 'get';
  };

  const first = stream(1);
  assert.equal(calls.length, 0);
  assert.equal(stream(1), first);
  assert.equal(first.isBroadcast, true);
  assert.deepEqual(calls, [[bindingVersion, type, 1, 'get', 'isBroadcast']]);

  delete globalThis.__flaxStream;
});

test('listen delegates once and leaves event semantics to Dart', () => {
  let callbacks;
  const subscription = Object.freeze({
    cancel: () => Promise.resolve(),
    pause() {},
    resume() {},
    isPaused: false,
  });
  globalThis.__flaxStream = (version, actualType, id, operation, member, ...args) => {
    assert.deepEqual(
      [version, actualType, id, operation, member],
      [bindingVersion, type, 2, 'call', 'listen'],
    );
    callbacks = args;
    return subscription;
  };

  const seen = [];
  const result = stream(2).listen((value) => seen.push(['data', value]), {
    onError: (error, stack) => seen.push(['error', error, stack]),
    onDone: () => seen.push(['done']),
    cancelOnError: false,
  });
  assert.equal(result, subscription);
  assert.equal(seen.length, 0);
  callbacks[0](7);
  callbacks[1].onError('boom', 'stack');
  callbacks[1].onDone();
  assert.deepEqual(seen, [['data', 7], ['error', 'boom', 'stack'], ['done']]);

  delete globalThis.__flaxStream;
});

test('AsyncIterator uses the host StreamIterator and rejects concurrent next', async () => {
  const values = [3, 5];
  let pendingResolve;
  let current;
  let cancelled = 0;
  globalThis.__flaxCreateStreamIterator = (version, id) => {
    assert.deepEqual([version, id], [bindingVersion, 3]);
    return 11;
  };
  globalThis.__flaxStreamIterator = (version, id, operation) => {
    assert.deepEqual([version, id], [bindingVersion, 11]);
    if (operation === 'current') return current;
    if (operation === 'cancel') {
      cancelled++;
      return Promise.resolve();
    }
    if (values.length === 2) {
      return new Promise((resolve) => {
        pendingResolve = resolve;
      }).then(() => {
        current = values.shift();
        return true;
      });
    }
    if (values.length === 1) {
      current = values.shift();
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  };

  const iterator = stream(3)[Symbol.asyncIterator]();
  const first = iterator.next();
  await assert.rejects(iterator.next(), /Concurrent Stream iterator next/);
  pendingResolve();
  assert.deepEqual(await first, { value: 3, done: false });
  assert.deepEqual(await iterator.next(), { value: 5, done: false });
  assert.deepEqual(await iterator.next(), { value: undefined, done: true });
  assert.deepEqual(await iterator.return(), { value: undefined, done: true });
  assert.equal(cancelled, 1);

  delete globalThis.__flaxCreateStreamIterator;
  delete globalThis.__flaxStreamIterator;
});

test('AsyncIterator throw cancels before rejecting', async () => {
  const order = [];
  globalThis.__flaxCreateStreamIterator = () => 12;
  globalThis.__flaxStreamIterator = (_version, _id, operation) => {
    if (operation === 'cancel') {
      order.push('cancel');
      return Promise.resolve();
    }
    throw new Error(`Unexpected ${operation}`);
  };
  const iterator = stream(4)[Symbol.asyncIterator]();
  await assert.rejects(iterator.throw(new Error('stop')), (error) => {
    order.push(error.message);
    return true;
  });
  assert.deepEqual(order, ['cancel', 'stop']);

  delete globalThis.__flaxCreateStreamIterator;
  delete globalThis.__flaxStreamIterator;
});

test('fromAsyncIterable acquires lazily and return cancels the JS iterator', async () => {
  let acquired = 0;
  let returned = 0;
  let sourceId;
  const source = {
    [Symbol.asyncIterator]() {
      acquired++;
      let value = 0;
      return {
        next: () => Promise.resolve({ value: ++value, done: false }),
        return: () => {
          returned++;
          return Promise.resolve({ value: undefined, done: true });
        },
      };
    },
  };
  globalThis.__flaxCreateAsyncIterableStream = (version, actualType, id) => {
    assert.equal(version, bindingVersion);
    assert.equal(actualType, 'flax.core/flutter#type:Stream');
    sourceId = id;
    return api.streamObject(actualType, 'test:async-iterable', 21);
  };

  const result = Stream.fromAsyncIterable(source);
  assert.equal(acquired, 0);
  assert.equal(
    result,
    api.streamObject('flax.core/flutter#type:Stream', 'test:async-iterable', 21),
  );
  assert.deepEqual(await api.asyncIterableNext(sourceId), [false, 1]);
  assert.equal(acquired, 1);
  await api.asyncIterableReturn(sourceId);
  assert.equal(returned, 1);
  await api.asyncIterableReturn(sourceId);
  assert.equal(returned, 1);

  delete globalThis.__flaxCreateAsyncIterableStream;
});

test('cancelling an AsyncIterable settles its one in-flight next', async () => {
  let sourceId;
  let returned = 0;
  const source = {
    [Symbol.asyncIterator]() {
      return {
        next: () => new Promise(() => {}),
        return: () => {
          returned++;
          return Promise.resolve({ value: undefined, done: true });
        },
      };
    },
  };
  globalThis.__flaxCreateAsyncIterableStream = (_version, _type, id) => {
    sourceId = id;
    return api.streamObject(type, 'test:cancel-async-iterable', 22);
  };

  Stream.fromAsyncIterable(source);
  const pending = api.asyncIterableNext(sourceId);
  const rejected = assert.rejects(pending, /AsyncIterable Stream cancelled/);
  await api.asyncIterableReturn(sourceId);
  await rejected;
  assert.equal(returned, 1);

  delete globalThis.__flaxCreateAsyncIterableStream;
});
