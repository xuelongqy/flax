import { test } from 'node:test';
import assert from 'node:assert/strict';
import '../../dist/runtime/bindings.js';

const api = globalThis.__flaxBindings;

const flush = () => new Promise((resolve) => setImmediate(resolve));

test('discarded unresolved Promise observers release their bookkeeping', async () => {
  const observed = [];
  const set = Map.prototype.set;
  // Observe metadata through the standard collection boundary without adding
  // a diagnostic API or making these records business roots.
  Map.prototype.set = function (id, value) {
    const record = value instanceof WeakRef ? value.deref() : value;
    if (record && typeof record.active === 'boolean') {
      observed.push(new WeakRef(record));
    }
    return set.call(this, id, value);
  };
  try {
    for (let id = 1000; id < 2000; id++) {
      api.observePromise(id, new Promise(() => {}));
    }
  } finally {
    Map.prototype.set = set;
  }
  try {
    assert.equal(observed.length, 1000);
    for (let i = 0; i < 80; i++) {
      await flush();
      globalThis.gc();
      await flush();
      if (observed.every((record) => record.deref() === undefined)) break;
    }
    assert.equal(observed.filter((record) => record.deref() !== undefined).length, 0);
  } finally {
    api.cancelPromises();
  }
});

test('Promise observers assimilate thenables and settle once', async () => {
  const settlements = [];
  globalThis.__flaxPromiseSettlement = (...args) => settlements.push(args);

  api.observePromise(1, Promise.resolve(7));
  api.observePromise(2, {
    then(resolve, reject) {
      resolve('first');
      reject(new Error('late'));
      resolve('later');
    },
  });
  await flush();

  assert.deepEqual(
    settlements.map((entry) => entry.slice(1, 4)).sort((a, b) => a[0] - b[0]),
    [
      [1, true, 7],
      [2, true, 'first'],
    ],
  );
});

test('Promise observers reject asynchronous access errors and scalar returns', async () => {
  const settlements = [];
  globalThis.__flaxPromiseSettlement = (...args) => settlements.push(args);

  assert.throws(() => api.observePromise(3, 7), /must return a Promise/);
  api.observePromise(4, {
    get then() {
      throw new Error('getter failed');
    },
  });
  api.observePromise(5, {
    then() {
      throw new Error('call failed');
    },
  });
  await flush();

  assert.equal(settlements.length, 2);
  assert.deepEqual(
    settlements.map((entry) => entry.slice(1, 4)),
    [
      [4, false, 'getter failed'],
      [5, false, 'call failed'],
    ],
  );
  assert.match(settlements[0][4], /getter failed/);
  assert.match(settlements[1][4], /call failed/);
});

test('Promise rejection formatting cannot strand observers', async (context) => {
  const settlements = [];
  const asyncErrors = [];
  globalThis.__flaxPromiseSettlement = (...args) => settlements.push(args);
  globalThis.__flaxAsyncError = (error) => asyncErrors.push(error);
  context.after(() => delete globalThis.__flaxAsyncError);

  api.observePromise(
    7,
    Promise.reject({
      [Symbol.toPrimitive]() {
        throw new Error('coercion failed');
      },
    }),
  );
  api.observePromise(
    8,
    Promise.reject({
      get message() {
        throw new Error('message failed');
      },
      get stack() {
        throw new Error('stack failed');
      },
    }),
  );
  api.observePromise(
    9,
    Promise.reject(
      new Proxy(
        {},
        {
          get() {
            throw new Error('proxy access failed');
          },
        },
      ),
    ),
  );
  await flush();

  assert.deepEqual(
    settlements.map((entry) => entry.slice(1, 5)),
    [
      [7, false, 'Promise rejected', null],
      [8, false, '[object Object]', null],
      [9, false, 'Promise rejected', null],
    ],
  );
  assert.deepEqual(asyncErrors, []);

  globalThis.__flaxPromiseSettlement = () => {
    throw new Error('settlement failed');
  };
  api.observePromise(10, Promise.resolve('internal failure'));
  await flush();
  assert.equal(asyncErrors.length, 1);
  assert.match(asyncErrors[0], /settlement failed/);

  globalThis.__flaxPromiseSettlement = (...args) => settlements.push(args);
  api.observePromise(11, Promise.resolve('recovered'));
  await flush();
  assert.deepEqual(settlements.at(-1).slice(1, 4), [11, true, 'recovered']);
});

test('cancelled Promise observers ignore late settlement', async () => {
  const settlements = [];
  globalThis.__flaxPromiseSettlement = (...args) => settlements.push(args);
  let resolve;
  api.observePromise(
    6,
    new Promise((complete) => {
      resolve = complete;
    }),
  );
  api.cancelPromises();
  resolve('late');
  await flush();
  assert.deepEqual(settlements, []);
});
