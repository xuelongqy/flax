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
  const originalCall = globalThis.__flaxObject;
  const originalBind = globalThis.__flaxBindPeer;
  t.after(() => {
    globalThis.__flaxCreateObject = originalCreate;
    globalThis.__flaxObject = originalCall;
    globalThis.__flaxBindPeer = originalBind;
  });
  defineObject(type, [], [], {}, []);
  globalThis.__flaxCreateObject = () => globalThis.__flaxBindings.object(type, 4001);
  globalThis.__flaxBindPeer = (version, source, target) => {
    assert.equal(version, 22);
    assert.equal(globalThis.__flaxBindings.objectHandle(source), 4001);
    peers.push(target);
  };
  globalThis.__flaxObject = (...args) => {
    calls.push(args);
    return args.at(-1);
  };
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
      super(Base.prototype, definition, []);
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

test('shared bound methods preserve detached calls and reject positional holes', (t) => {
  const type = 'fixture:SharedMethods';
  const calls = [];
  const previous = globalThis.__flaxObject;
  t.after(() => {
    globalThis.__flaxObject = previous;
  });
  globalThis.__flaxObject = (...args) => {
    calls.push(args);
    return args.at(-1);
  };
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
  assert.equal(detached(1, 2), 2);
  assert.equal(calls.at(-1)[2], 4002);
  assert.throws(() => detached(undefined, 2), /trailing suffix/);
  assert.equal(detached(null), undefined);
});
