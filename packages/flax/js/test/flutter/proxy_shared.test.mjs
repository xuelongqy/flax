import { operationHost } from './support/operations.mjs';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  FlaxProxyBase,
  defineProxyBase,
  defineObject,
  bindingMethods,
  bindInstanceType,
  defineStaticGetters,
  invokeObject,
} from '../../dist/runtime/bindings.js';

test('shared static readers stay lazy, live, readonly and preserve native values', (t) => {
  const calls = [];
  const icon = { nativeIcon: true };
  let value = 3;
  const prefix = 'fixture:SharedStatics.';
  const previous = operationHost('top', (_version, id, ...args) => {
    calls.push([id, args]);
    if (id === prefix + 'delayed') throw new Error('uninitialized');
    return id === prefix + 'count' ? value : icon;
  });
  t.after(() => operationHost('top', previous));
  const namespace = {};
  defineStaticGetters(namespace, prefix, ['count', 'icon', 'alias', 'delayed']);
  assert.equal(calls.length, 0);
  assert.deepEqual(Object.keys(namespace), []);
  assert.equal(namespace.count, 3);
  value = 8;
  assert.equal(namespace.count, 8);
  assert.equal(namespace.icon, icon);
  assert.equal(namespace['alias'], icon);
  assert.throws(() => namespace.delayed, /uninitialized/);
  assert.equal(calls.length, 5);
  assert.ok(calls.every(([, args]) => args.length === 0));
  assert.throws(() => {
    namespace.count = 10;
  }, TypeError);
  assert.throws(
    () => Object.defineProperty(namespace, 'count', { value: 10 }),
    TypeError,
  );
});

test('a Dart constructor getter does not replace internal proxy identity', () => {
  const type = 'fixture:FactoryConstructor';
  defineObject(type, ['constructor'], [], {}, []);
  const definition = {
    type,
    parameters: [],
    methods: {},
    getters: ['constructor'],
    setters: [],
    superMembers: ['get:constructor'],
    contextMembers: [],
  };
  class Factory extends FlaxProxyBase {
    constructor() {
      super(definition, []);
    }
  }
  // Registration has no receiver and must not execute a business getter.
  assert.doesNotThrow(() => defineProxyBase(Factory.prototype, definition));
  assert.equal(
    typeof Object.getOwnPropertyDescriptor(Factory.prototype, 'constructor').get,
    'function',
  );
});

test('Future object views share Promise adoption and preserve Dart named calls', async () => {
  const type = 'fixture:FutureObject';
  let observations = 0;
  let rejected = false;
  const methods = {
    then(onValue, options) {
      observations++;
      const future = rejected
        ? Promise.reject(new Error('future failed'))
        : Promise.resolve(7);
      return future.then(onValue, options?.onError);
    },
  };
  defineObject(type, [], [], methods, []);
  function FutureToken() {}
  FutureToken.prototype.then = methods.then;
  bindInstanceType(FutureToken, type, ['dart:async::Future']);
  const then = FutureToken.prototype.then;
  for (let i = 0; i < 8; i++) {
    function Selected() {}
    Selected.prototype = FutureToken.prototype;
    bindInstanceType(Selected, `${type}:selected:${i}`, [type]);
  }
  assert.equal(FutureToken.prototype.then, then);
  const value = globalThis.__flaxBindings.object(type, 4101);
  assert.equal(await value, 7);
  assert.equal(await Promise.resolve(value), 7);
  assert.equal(await value.then(), 7);
  assert.equal(await value.then((v) => v + 1), 8);
  let finalized = false;
  assert.equal(
    await value.finally(() => {
      finalized = true;
    }),
    7,
  );
  assert.equal(finalized, true);
  assert.equal(observations, 1);
  assert.equal(await value.then((v) => v + 2, { onError: () => 0 }), 9);
  assert.equal(observations, 2);
  rejected = true;
  const failure = globalThis.__flaxBindings.object(type, 4102);
  await assert.rejects(Promise.resolve(failure), /future failed/);
  assert.equal(await failure.then(null, () => 3), 3);
  assert.equal(await failure.catch(() => 4), 4);
});

test('shared prototype forwarding preserves receiver, direct super and omission', (t) => {
  const type = 'fixture:SharedProxy';
  const calls = [];
  const peers = [];
  const originalCreate = globalThis.__flaxCreateObject;
  const originalCall = operationHost('object', null);
  const originalBind = globalThis.__flaxBindPeer;
  const originalPrepare = globalThis.__flaxPrepareProxy;
  t.after(() => {
    globalThis.__flaxCreateObject = originalCreate;
    operationHost('object', originalCall);
    globalThis.__flaxBindPeer = originalBind;
    globalThis.__flaxPrepareProxy = originalPrepare;
  });
  defineObject(type, [], [], {}, []);
  globalThis.__flaxPrepareProxy = (_, owner, rows) => {
    assert.equal(owner, type);
    assert.deepEqual(
      rows.map((row) => row.slice(0, 4)),
      [
        ['add', 0, 1, 2],
        ['named', 0, 0, 1],
        ['value', 1, 0, 0],
        ['value', 2, 1, 1],
      ],
    );
    return 0;
  };
  globalThis.__flaxCreateObject = (_version, _type, descriptor) => {
    assert.equal(typeof descriptor.widgetType, 'number');
    return globalThis.__flaxBindings.object(type, 4001);
  };
  globalThis.__flaxBindPeer = (version, source, target) => {
    assert.equal(version, 24);
    assert.equal(globalThis.__flaxBindings.objectHandle(source), 4001);
    peers.push(target);
  };
  operationHost('object', (...args) => {
    calls.push(args);
    return args.at(-1);
  });
  const definition = {
    nativeWidget: true,
    type,
    parameters: [],
    methods: {
      add: [{ name: 'value', required: true, positional: true }],
      named: [{ name: 'value', required: false, positional: false }],
    },
    getters: ['value'],
    setters: ['value'],
    superMembers: ['add', 'named', 'get:value', 'set:value'],
    contextMembers: ['add'],
  };
  class Base extends FlaxProxyBase {
    constructor() {
      super(definition, []);
    }
  }
  defineProxyBase(Base.prototype, definition);
  assert.ok(Object.isFrozen(definition));
  assert.ok(Object.isFrozen(definition.contextMembers));
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

test('ordinary inherited members share prototypes and use the actual receiver binding', (t) => {
  const base = 'fixture:InheritedBase';
  const child = 'fixture:InheritedChild';
  const leaf = 'fixture:InheritedLeaf';
  const other = 'fixture:Unrelated';
  const calls = [];
  const previous = operationHost(
    'object',
    (_version, type, id, operation, member, ...args) => {
      calls.push([type, id, operation, member, ...args]);
      return 7;
    },
  );
  t.after(() => operationHost('object', previous));
  // Registration order does not determine the eventual prototype chain.
  defineObject(leaf, ['value'], ['value'], {}, [], undefined, child);
  defineObject(
    child,
    ['value'],
    ['value'],
    bindingMethods(child, 'object', {
      changed: [{ name: 'input', required: true, positional: true }],
    }),
    [],
    undefined,
    base,
  );
  defineObject(
    base,
    ['value'],
    [],
    bindingMethods(base, 'object', {
      shared: [],
      changed: [],
    }),
    [],
  );
  defineObject(other, [], [], {}, []);
  const api = globalThis.__flaxBindings;
  const a = api.object(base, 9801);
  const b = api.object(child, 9802);
  const c = api.object(leaf, 9803);
  const foreign = api.object(other, 9804);
  assert.equal(
    Object.getPrototypeOf(Object.getPrototypeOf(c)),
    Object.getPrototypeOf(b),
  );
  assert.equal(a.shared, b.shared);
  assert.equal(b.shared, c.shared);
  assert.equal(b.changed, c.changed);
  assert.notEqual(a.changed, b.changed);
  assert.equal(c.shared(), 7);
  assert.throws(() => c.changed(), /Missing required/);
  assert.equal(c.changed(4), 7);
  c.value = 3;
  assert.equal(c.value, 7);
  assert.deepEqual(calls, [
    [leaf, 9803, 'call', 'shared'],
    [leaf, 9803, 'call', 'changed', 4],
    [leaf, 9803, 'set', 'value', 3],
    [leaf, 9803, 'get', 'value'],
  ]);
  const view = `${leaf}:closed`;
  const siblingView = `${leaf}:other-closed`;
  const scoped = api.objectView(view, 9805, leaf);
  api.objectView(siblingView, 9805, leaf);
  assert.equal(invokeObject(scoped, view, 'shared', []), 7);
  assert.equal(scoped.shared(), 7);
  assert.deepEqual(calls.slice(-2), [
    [view, 9805, 'call', 'shared'],
    [view, 9805, 'call', 'shared'],
  ]);
  assert.throws(() => invokeObject(scoped, siblingView, 'shared', []), /foreign/);
  assert.throws(() => a.shared.call(foreign), /foreign/);
  api.releaseObject(9803);
  assert.throws(() => c.shared(), /Disposed/);
});

test('collection children retain inherited native member argument layouts', (t) => {
  const base = 'fixture:NativeListBase';
  const child = 'fixture:NativeListChild';
  const calls = [];
  const previous = operationHost(
    'object',
    (_version, type, id, op, member, ...args) => {
      calls.push([type, member, ...args]);
      return true;
    },
  );
  t.after(() => operationHost('object', previous));
  defineObject(
    base,
    [],
    [],
    bindingMethods(base, 'object', {
      contains: [
        { name: 'value', required: true, positional: true },
        { name: 'strict', required: false, positional: false },
      ],
    }),
    [],
    'list',
  );
  defineObject(child, [], [], {}, [], 'list', base, ['contains']);
  const a = globalThis.__flaxBindings.object(base, 9810);
  const b = globalThis.__flaxBindings.object(child, 9811);
  assert.equal(a.contains, b.contains);
  assert.equal(b.contains('x', { strict: true }), true);
  assert.deepEqual(calls, [[child, 'contains', 'x', true]]);
  assert.throws(() => b.contains('x', { unknown: true }), /Invalid named/);
  class CollectionProxy {}
  defineProxyBase(CollectionProxy.prototype, {
    type: child,
    parameters: [],
    methods: {},
    getters: [],
    setters: [],
    superMembers: [],
    contextMembers: [],
  });
  const length = Object.getOwnPropertyDescriptor(CollectionProxy.prototype, 'length');
  assert.equal(typeof length?.get, 'function');
  assert.equal(length.get.call(b), true);
  assert.deepEqual(calls.at(-1), [child, 'length']);
});
