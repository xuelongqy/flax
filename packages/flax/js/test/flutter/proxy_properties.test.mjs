import { test } from 'node:test';
import assert from 'node:assert/strict';
import { constructProxy } from '../../dist/runtime/bindings.js';
import { ValueListenable } from '../../dist/flutter/generated/libraries/foundation/index.js';

function capture(t) {
  const create = globalThis.__flaxCreateObject;
  const prepare = globalThis.__flaxPrepareProxy;
  const calls = [],
    layouts = [];
  globalThis.__flaxPrepareProxy = (version, type, rows) => {
    assert.equal(version, 23);
    layouts.push({ type, rows });
    return layouts.length - 1;
  };
  globalThis.__flaxCreateObject = (version, type, descriptor) => {
    assert.equal(version, 23);
    calls.push(descriptor);
    return descriptor;
  };
  t.after(() => {
    globalThis.__flaxCreateObject = create;
    globalThis.__flaxPrepareProxy = prepare;
  });
  return { calls, layouts };
}

const definition = {
  type: 'fixture:Properties',
  parameters: [],
  methods: {},
  getters: ['value'],
  setters: ['value'],
  superMembers: [],
};

test('proxy construction retains the actual receiver without reading or copying accessors', (t) => {
  const { calls, layouts } = capture(t);
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
  const result = constructProxy(definition, [], implementation);
  assert.equal(reads, 0);
  assert.equal(calls.length, 1);
  assert.equal(result.receiver, implementation);
  assert.deepEqual(result.args, {});
  assert.deepEqual(
    layouts[0].rows.map((row) => row.slice(0, 4)),
    [
      ['value', 1, 0, 0],
      ['value', 2, 1, 1],
    ],
  );
  result.receiver.value = 7;
  assert.equal(result.receiver.value, 7);
  Object.defineProperty(prototype, 'value', {
    get() {
      return 99;
    },
  });
  assert.equal(result.receiver.value, 99);
  assert.throws(() => constructProxy(definition, [], { extra() {} }), /Invalid proxy/);
});

test('generated ValueListenable sends one receiver and a shared member layout', (t) => {
  const { calls, layouts } = capture(t);
  const implementation = { value: 1, addListener() {}, removeListener() {} };
  const result = ValueListenable.implement([], implementation);
  assert.equal(result.receiver, implementation);
  assert.deepEqual(result.args, {});
  assert.equal(layouts[0].rows.length, 3);
  const second = ValueListenable.implement([], { ...implementation });
  assert.equal(second.layout, result.layout);
  assert.equal(layouts.length, 1);
  assert.equal(calls.length, 2);
});
