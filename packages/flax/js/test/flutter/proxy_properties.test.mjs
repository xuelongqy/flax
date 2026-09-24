import { test } from 'node:test';
import assert from 'node:assert/strict';
import { constructProxy } from '../../dist/runtime/bindings.js';
import { ValueListenable } from '../../dist/flutter/generated/libraries/foundation/index.js';

function capture(t) {
  const original = globalThis.__flaxCreateObject;
  const calls = [];
  globalThis.__flaxCreateObject = (version, type, descriptor) => {
    assert.equal(version, 21);
    calls.push(descriptor);
    return descriptor;
  };
  t.after(() => {
    globalThis.__flaxCreateObject = original;
  });
  return calls;
}

const create = (implementation, getters = ['value'], setters = ['value']) =>
  constructProxy('fixture:Properties', [], [], implementation, [], getters, setters);

test('proxy accessors are captured without reading and retain the receiver', (t) => {
  const calls = capture(t);
  let reads = 0;
  const storage = new WeakMap();
  const prototype = {
    get value() {
      reads++;
      return storage.get(this);
    },
    set value(value) {
      storage.set(this, value);
    },
  };
  const implementation = Object.create(prototype);
  const result = create(implementation);
  assert.equal(reads, 0);
  assert.equal(calls.length, 1);
  result.args['@set:value'](7);
  assert.equal(result.args['@get:value'](), 7);
  assert.equal(reads, 1);
  Object.defineProperty(prototype, 'value', {
    get() {
      return 99;
    },
  });
  assert.equal(result.args['@get:value'](), 7);
});

test('proxy validation rejects missing accessors and fields before calling Dart', (t) => {
  const calls = capture(t);
  for (const implementation of [
    {},
    { value: 3 },
    {
      get value() {
        return 1;
      },
    },
  ]) {
    assert.throws(() => create(implementation), /Missing proxy (get|set) accessor/);
  }
  assert.throws(
    () =>
      create({
        get value() {
          return 1;
        },
        extra() {},
      }),
    /Invalid proxy/,
  );
  assert.equal(calls.length, 0);
  assert.doesNotThrow(() =>
    create(
      {
        get value() {
          return 1;
        },
      },
      ['value'],
      [],
    ),
  );
  assert.doesNotThrow(() => create({ set value(_) {} }, [], ['value']));
});

test('proxy properties reject thenables and propagate synchronous exceptions', (t) => {
  capture(t);
  const result = create({
    get value() {
      return { then() {} };
    },
    set value(value) {
      if (value < 0) throw Error('setter failed');
      return Promise.resolve();
    },
  });
  assert.throws(
    () => result.args['@get:value'](),
    /Proxy get value must be synchronous/,
  );
  assert.throws(
    () => result.args['@set:value'](0),
    /Proxy set value must be synchronous/,
  );
  assert.throws(() => result.args['@set:value'](-1), /setter failed/);
});

test('ValueListenable uses generated getter and listener callbacks without a value mirror', (t) => {
  capture(t);
  let value = 1;
  const listeners = [];
  const result = ValueListenable.implement([], {
    get value() {
      return value;
    },
    addListener(listener) {
      listeners.push(listener);
    },
    removeListener(listener) {
      listeners.splice(listeners.indexOf(listener), 1);
    },
  });
  let notices = 0;
  const listener = () => notices++;
  result.args['@call:addListener'](listener);
  value = 2;
  assert.equal(result.args['@get:value'](), 2);
  assert.equal(notices, 0);
  listeners.forEach((fn) => fn());
  result.args['@call:removeListener'](listener);
  assert.equal(notices, 1);
  assert.deepEqual(listeners, []);
});
