import { operationHost } from './support/operations.mjs';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  FlaxProxyBase,
  defineProxyBase,
  defineObject,
  bindingMethods,
} from '../../dist/runtime/bindings.js';

test('shared prototype forwarding preserves receiver, direct super and omission', (t) => {
  const type = 'fixture:SharedProxy';
  const calls = [];
  const peers = [];
  const originalCreate = globalThis.__flaxCreateObject;
  const originalCall = operationHost('object', null);
  const originalBind = globalThis.__flaxBindPeer;
  t.after(() => {
    globalThis.__flaxCreateObject = originalCreate;
    operationHost('object', originalCall);
    globalThis.__flaxBindPeer = originalBind;
  });
  defineObject(type, [], [], {}, []);
  globalThis.__flaxPrepareProxy = () => 0;
  globalThis.__flaxCreateObject = () => globalThis.__flaxBindings.object(type, 4001);
  globalThis.__flaxBindPeer = (version, source, target) => {
    assert.equal(version, 23);
    assert.equal(globalThis.__flaxBindings.objectHandle(source), 4001);
    peers.push(target);
  };
  operationHost('object', (...args) => {
    calls.push(args);
    return args.at(-1);
  });
  const definition = {
    type,
    parameters: [],
    methods: {
      add: [{ name: 'value', required: true, positional: true }],
      named: [{ name: 'value', required: false, positional: false }],
    },
    getters: ['value'],
    setters: ['value'],
    superMembers: ['add', 'named', 'get:value', 'set:value'],
  };
  class Base extends FlaxProxyBase {
    constructor() {
      super(definition, []);
    }
  }
  defineProxyBase(Base.prototype, definition);
  assert.ok(Object.isFrozen(definition));
  assert.ok(Object.isFrozen(definition.methods.add));
  assert.ok(Object.isFrozen(definition.methods.add[0]));
  class Custom extends Base {
    add(value) {
      return super.add(value) + 10;
    }
  }
  const instance = new Custom();
  assert.deepEqual(peers, [instance]);
  assert.equal(instance.add(2), 12);
  assert.equal(calls.at(-1)[4], '@super:add');
  assert.equal(instance.named({ value: null }), null);
  assert.equal(instance.named({ value: undefined }), undefined);
  assert.throws(() => instance.named(null), /Invalid named/);
  assert.throws(() => instance.add(), /Missing required/);
  assert.throws(() => Base.prototype.add.call(instance, 1, 2), /Too many/);
  instance.value = 7;
  assert.equal(calls.at(-1)[4], '@super:set:value');
  void instance.value;
  assert.equal(calls.at(-1)[4], '@super:get:value');
});

test('shared methods require a real receiver and reject positional holes', (t) => {
  const type = 'fixture:SharedMethods';
  const calls = [];
  const previous = operationHost('object', null);
  t.after(() => {
    operationHost('object', previous);
  });
  operationHost('object', (...args) => {
    calls.push(args);
    return args.at(-1);
  });
  defineObject(
    type,
    [],
    [],
    bindingMethods(type, 'object', {
      tail: [
        { name: 'first', required: false, positional: true },
        { name: 'last', required: false, positional: true },
      ],
    }),
    [],
  );
  const value = globalThis.__flaxBindings.object(type, 4002);
  const detached = value.tail;
  assert.throws(() => detached(1, 2), /Invalid or foreign/);
  assert.equal(detached.call(value, 1, 2), 2);
  const another = globalThis.__flaxBindings.object(type, 4003);
  assert.equal(value.tail, another.tail);
  assert.equal(Object.getPrototypeOf(value), Object.getPrototypeOf(another));
  assert.equal(calls.at(-1)[2], 4002);
  assert.throws(() => detached.call(value, undefined, 2), /trailing suffix/);
  assert.equal(detached.call(value, null), undefined);
});
