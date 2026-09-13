import { test } from 'node:test';
import assert from 'node:assert/strict';
import { signal, computed, bind, batch } from '../../dist/runtime/index.js';

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
