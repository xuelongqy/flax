import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  signal,
  computed,
  bind,
  batch,
  withBindingSnapshots,
  readBindingSnapshot,
} from '../../dist/runtime/index.js';

test('binding snapshots do not subscribe an evaluating parent to child signals', () => {
  const notifications = [];
  globalThis.__flaxInvalidate = (token) => notifications.push(token);
  const child = signal(1);
  const owner = signal(2);
  const parent = bind(() => {
    withBindingSnapshots(() => readBindingSnapshot(child.bind.read));
    return withBindingSnapshots(() => owner.bind.read());
  });
  const stopParent = parent.observe(1);
  const stopChild = child.bind.observe(2);
  try {
    child.value = 3;
    assert.deepEqual(notifications, [2]);
    notifications.length = 0;
    owner.value = 4;
    assert.deepEqual(notifications, [1]);
    assert.equal(parent.read(), 4);
  } finally {
    stopParent();
    stopChild();
  }
});

test('failed native previews recover and restore ordinary binding composition', () => {
  const notifications = [];
  globalThis.__flaxInvalidate = (token) => notifications.push(token);
  const child = signal(-1);
  const parent = bind(() =>
    withBindingSnapshots(() => {
      const value = withBindingSnapshots(() => readBindingSnapshot(child.bind.read));
      if (value < 0) throw new Error('invalid native input');
      return value;
    }),
  );
  const stop = parent.observe(1);
  try {
    assert.throws(() => parent.read(), /invalid native input/);
    child.value = 2;
    assert.deepEqual(notifications, [1]);
    assert.equal(parent.read(), 2);
    const composed = bind(() => child.bind.read());
    const stopComposed = composed.observe(2);
    try {
      notifications.length = 0;
      child.value = 3;
      assert.deepEqual(notifications, [2]);
      assert.equal(composed.read(), 3);
    } finally {
      stopComposed();
    }
  } finally {
    stop();
  }
});

test('custom binding readers retain their tracking and recover without rereading', () => {
  const notifications = [];
  globalThis.__flaxInvalidate = (token) => notifications.push(token);
  const source = signal(-1);
  let reads = 0;
  const custom = {
    kind: 'binding',
    read: () => {
      reads++;
      return source.value;
    },
    observe: source.bind.observe,
  };
  const parent = bind(() =>
    withBindingSnapshots(() => {
      const value = readBindingSnapshot(custom.read);
      if (value < 0) throw new Error('invalid native input');
      return value;
    }),
  );
  const stop = parent.observe(1);
  try {
    assert.throws(() => parent.read(), /invalid native input/);
    assert.equal(reads, 1);
    source.value = 2;
    assert.deepEqual(notifications, [1]);
    assert.equal(parent.read(), 2);
    assert.equal(reads, 2);
    source.value = 3;
    assert.deepEqual(notifications, [1, 1]);
    assert.equal(parent.read(), 3);
    assert.equal(reads, 3);
  } finally {
    stop();
  }
});

test('native snapshots preserve dependencies inside composed child bindings', () => {
  const notifications = [];
  globalThis.__flaxInvalidate = (token) => notifications.push(token);
  const source = signal(1);
  const child = bind(() => source.bind.read());
  const parent = bind(() =>
    withBindingSnapshots(() => readBindingSnapshot(child.read)),
  );
  const stopParent = parent.observe(1);
  const stopChild = child.observe(2);
  try {
    source.value = 3;
    assert.deepEqual(notifications, [2]);
    assert.equal(child.read(), 3);
  } finally {
    stopParent();
    stopChild();
  }
});

test('nested native failures retain dependencies in the failing child', () => {
  const notifications = [];
  globalThis.__flaxInvalidate = (token) => notifications.push(token);
  const source = signal(-1);
  const child = bind(() =>
    withBindingSnapshots(() => {
      const value = readBindingSnapshot(source.bind.read);
      if (value < 0) throw new Error('invalid child input');
      return value;
    }),
  );
  const parent = bind(() =>
    withBindingSnapshots(() => readBindingSnapshot(child.read)),
  );
  const stop = parent.observe(1);
  try {
    assert.throws(() => parent.read(), /invalid child input/);
    source.value = 2;
    assert.deepEqual(notifications, [1]);
    assert.equal(parent.read(), 2);
  } finally {
    stop();
  }
});

test('bindings are lazy and each mounted property owns its subscription', () => {
  const notifications = [];
  globalThis.__flaxInvalidate = (token) => notifications.push(token);
  const count = signal(0);
  let reads = 0;
  const label = bind(() => {
    reads++;
    return `Count: ${count.value}`;
  });
  assert.equal(reads, 0);
  count.value = 1;
  assert.equal(reads, 0);
  const first = label.observe(1);
  const second = label.observe(2);
  assert.deepEqual(notifications, []);
  count.value = 2;
  assert.deepEqual(notifications.sort(), [1, 2]);
  assert.equal(label.read(), 'Count: 2');
  first();
  first();
  notifications.length = 0;
  count.value = 3;
  assert.deepEqual(notifications, [2]);
  second();
  const previous = reads;
  count.value = 4;
  assert.equal(reads, previous);
});

test('computed, direct binding, same-value writes and batch preserve semantics', () => {
  const notifications = [];
  globalThis.__flaxInvalidate = (token) => notifications.push(token);
  const count = signal(1);
  const parity = computed(() => count.value % 2);
  const stop = parity.bind.observe(5);
  count.value = 3;
  assert.deepEqual(notifications, []);
  batch(() => {
    count.value = 4;
    count.value = 6;
  });
  assert.deepEqual(notifications, [5]);
  assert.equal(parity.value, 0);
  assert.equal(count.bind.read(), 6);
  assert.throws(() => {
    parity.value = 7;
  }, TypeError);
  stop();
});

test('failed expressions report through read and recover after dependencies change', () => {
  const notifications = [];
  globalThis.__flaxInvalidate = (token) => notifications.push(token);
  const state = signal(1);
  const value = bind(() => {
    if (state.value < 0) throw Error('bad');
    return state.value;
  });
  const stop = value.observe(8);
  state.value = -1;
  assert.deepEqual(notifications, [8]);
  assert.throws(() => value.read(), /bad/);
  state.value = 2;
  assert.equal(value.read(), 2);
  assert.deepEqual(notifications, [8, 8]);
  stop();
});
