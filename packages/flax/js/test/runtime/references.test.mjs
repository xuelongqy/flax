import assert from 'node:assert/strict';
import { test } from 'node:test';
import { setImmediate } from 'node:timers/promises';
import { ReferenceCache } from '../../dist/runtime/references.js';

test('aliases preserve identity and release together across typed views', () => {
  const cache = new ReferenceCache();
  const base = {},
    view = {},
    replacement = {};
  cache.track(base, 'base', 1);
  cache.track(view, 'view', 1);
  assert.equal(cache.get('base', 1), base);
  assert.equal(cache.get('view', 1), view);
  assert.throws(() => cache.track(base, 'other', 1), /identity mismatch/);
  cache.transfer(base, replacement);
  assert.equal(cache.get('base', 1), replacement);
  assert.equal(cache.handles.has(base), false);
  cache.release(1);
  assert.equal(cache.get('view', 1), null);
  assert.equal(cache.handles.get(view).alive, false);
  assert.equal(cache.handles.get(replacement).alive, false);
  cache.release(1);
});

function discarded(cache, id, type = 'object') {
  const value = {};
  cache.track(value, type, id);
  return new WeakRef(value);
}

async function collect(reference) {
  assert.equal(typeof globalThis.gc, 'function', 'Run with --expose-gc');
  for (let i = 0; i < 30; i++) {
    await setImmediate();
    globalThis.gc();
    if (!reference.deref()) return;
  }
  assert.fail('JS wrapper remained reachable');
}

test('pruning a collected wrapper still delivers its Dart release', async () => {
  const cache = new ReferenceCache();
  const reference = discarded(cache, 7, 'context');
  await collect(reference);
  assert.equal(cache.get('context', 7), null);
  assert.deepEqual(cache.sweep(), [7]);
  assert.deepEqual(cache.sweep(), []);
});

test('a live alias retains one identity and collection sweeps are bounded', async () => {
  const cache = new ReferenceCache();
  const live = {};
  cache.track(live, 'object', 1);
  await collect(discarded(cache, 1, 'view'));
  assert.deepEqual(cache.sweep(), []);
  assert.equal(cache.get('object', 1), live);
  for (let id = 2; id <= 131; id++) discarded(cache, id);
  await collect(discarded(cache, 132));
  const released = [];
  for (let i = 0; i < 5; i++) {
    const batch = cache.sweep();
    assert.ok(batch.length <= 64);
    released.push(...batch);
  }
  assert.equal(new Set(released).size, 131);
  assert.equal(cache.get('object', 1), live);
});
