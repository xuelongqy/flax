import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  ScrollController,
  SingleChildScrollView,
  Text,
  registerPage,
} from '../../dist/flutter/widgets.js';
import { signal } from '../../dist/runtime/index.js';
import { copyNavigationData } from '../../dist/runtime/bindings.js';

test('owned constructors call the host immediately and preserve wrapper identity', () => {
  const api = globalThis.__flaxBindings;
  const calls = [];
  let id = 0;
  globalThis.__flaxCreateObject = (version, type, descriptor) => {
    calls.push(descriptor);
    assert.equal(version, 20);
    return api.object(type, ++id);
  };
  globalThis.__flaxObject = (version, type, id, operation, member, ...args) => {
    calls.push([operation, member, ...args]);
    if (member === 'hasClients') return false;
    if (member === 'dispose') api.releaseObject(id);
  };
  const c = ScrollController({ initialScrollOffset: 12 });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].args.initialScrollOffset, 12);
  assert.equal(c, api.object(calls[0].type, 1));
  assert.equal(c.hasClients, false);
  assert.throws(() => copyNavigationData(c), /Host references/);
  assert.throws(
    () => ScrollController({ initialScrollOffset: signal(0).bind }),
    /Bind widget/,
  );
  assert.throws(() => api.objectHandle({}), /Invalid/);
  const widget = SingleChildScrollView({ controller: c, child: Text('x') });
  assert.equal(widget.args.controller, c);
  const listener = () => {};
  c.addListener(listener);
  c.addListener(listener);
  assert.deepEqual(calls.slice(-2), [
    ['call', 'addListener', listener],
    ['call', 'addListener', listener],
  ]);
  c.dispose();
  assert.throws(() => c.hasClients, /Disposed/);
  assert.throws(() => c.dispose(), /Disposed/);
  assert.doesNotThrow(() => c.removeListener(listener));
});

test('page cleanup is synchronous, LIFO, once-only, and runs after failed factories', async () => {
  const api = globalThis.__flaxBindings;
  const calls = [],
    errors = [];
  globalThis.__flaxAsyncError = (error) => errors.push(error);
  let scope;
  registerPage('cleanup', (_, lifecycle) => {
    scope = lifecycle;
    lifecycle.onDispose(() => calls.push(1));
    lifecycle.onDispose(() => {
      calls.push(2);
      throw Error('cleanup failed');
    });
    lifecycle.onDispose(() => calls.push(3));
    return Text('ok');
  });
  registerPage('failed', (_, lifecycle) => {
    lifecycle.onDispose(() => calls.push(4));
    throw Error('factory failed');
  });
  registerPage('async-cleanup', (_, lifecycle) => {
    lifecycle.onDispose(async () => {
      throw Error('async cleanup failed');
    });
    return Text('x');
  });
  api.finishRegistration();
  const page = api.createPage('cleanup', null);
  assert.throws(() => scope.onDispose(() => {}), /synchronous page factory/);
  page.update({ id: 2 });
  assert.deepEqual(calls, []);
  page.dispose();
  page.dispose();
  assert.deepEqual(calls, [3, 2, 1]);
  assert.equal(errors.length, 1);
  assert.throws(() => page.update(null), /Disposed/);
  assert.throws(() => api.createPage('failed', null), /factory failed/);
  assert.deepEqual(calls, [3, 2, 1, 4]);
  api.createPage('async-cleanup', null).dispose();
  await Promise.resolve();
  assert.equal(errors.length, 3);
});
