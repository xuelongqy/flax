import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  signal,
  computed,
  bind,
  batch,
  effect,
  untracked,
  action,
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

test('business effects run without a host and clean up before reruns and disposal', () => {
  delete globalThis.__flaxInvalidate;
  const count = signal(1);
  const doubled = computed(() => count.value * 2);
  const events = [];
  const stop = effect(() => {
    const value = doubled.value;
    events.push(`run:${value}`);
    return () => events.push(`cleanup:${value}`);
  });
  try {
    assert.deepEqual(events, ['run:2']);
    batch(() => {
      count.value = 2;
      count.value = 3;
    });
    assert.deepEqual(events, ['run:2', 'cleanup:2', 'run:6']);
    stop();
    stop();
    count.value = 4;
    assert.deepEqual(events, ['run:2', 'cleanup:2', 'run:6', 'cleanup:6']);
  } finally {
    stop();
  }
});

test('business subscriptions track only their source and dispose independently', () => {
  delete globalThis.__flaxInvalidate;
  const count = signal(1);
  const other = signal(0);
  const parity = computed(() => count.value % 2);
  const values = [];
  const parities = [];
  const stopCount = count.subscribe((value) => {
    values.push([value, other.value]);
  });
  const stopParity = parity.subscribe((value) => parities.push(value));
  try {
    assert.deepEqual(values, [[1, 0]]);
    assert.deepEqual(parities, [1]);
    other.value = 1;
    count.value = 3;
    count.value = 3;
    assert.deepEqual(values, [
      [1, 0],
      [3, 1],
    ]);
    assert.deepEqual(parities, [1]);
    stopCount();
    stopCount();
    count.value = 4;
    assert.deepEqual(values, [
      [1, 0],
      [3, 1],
    ]);
    assert.deepEqual(parities, [1, 0]);
    stopParity();
    count.value = 5;
    assert.deepEqual(parities, [1, 0]);
  } finally {
    stopCount();
    stopParity();
  }
});

test('peek and untracked read values without adding effect dependencies', () => {
  const trigger = signal(0);
  const ignored = signal(1);
  const doubled = computed(() => ignored.value * 2);
  const values = [];
  const stop = effect(() => {
    values.push([
      trigger.value,
      ignored.peek(),
      doubled.peek(),
      untracked(() => ignored.value + doubled.value),
    ]);
  });
  try {
    ignored.value = 2;
    assert.deepEqual(values, [[0, 1, 2, 3]]);
    trigger.value = 1;
    assert.deepEqual(values, [
      [0, 1, 2, 3],
      [1, 2, 4, 6],
    ]);
  } finally {
    stop();
  }
});

test('actions preserve arguments, return values and this while batching untracked writes', () => {
  const first = signal(0);
  const second = signal(0);
  const values = [];
  const stopValues = effect(() => {
    values.push([first.value, second.value]);
  });
  const counter = {
    increment: 2,
    update: action(function (value) {
      first.value = value;
      second.value = value + this.increment;
      return second.value;
    }),
  };
  try {
    assert.equal(counter.update(3), 5);
    assert.deepEqual(values, [
      [0, 0],
      [3, 5],
    ]);
  } finally {
    stopValues();
  }
  let runs = 0;
  const read = action(() => first.value);
  const stopReader = effect(() => {
    runs++;
    read();
  });
  try {
    first.value = 4;
    assert.equal(runs, 1);
  } finally {
    stopReader();
  }
});
