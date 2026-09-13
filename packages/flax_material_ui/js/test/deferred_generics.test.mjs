import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WidgetState, WidgetStateProperty } from '@flax/core/flutter';
import { ButtonStyle } from '../dist/index.js';

test('deferred factories wait for a concrete Dart position and then keep identity', () => {
  const api = globalThis.__flaxBindings;
  const calls = [];
  const property = WidgetStateProperty.resolveWith((states) =>
    states.contains(WidgetState.pressed) ? 8 : 2,
  );

  assert.ok(Object.isFrozen(property));
  assert.throws(() => property.resolve(new Set()), /not been materialized/);
  const pending = api.deferredObject(property);
  assert.equal(pending.factory, 'resolveWith');
  assert.equal(pending.materializer, null);
  assert.equal(typeof pending.descriptor.args.callback, 'function');

  globalThis.__flaxObject = (version, type, id, operation, member, states) => {
    calls.push({ version, type, id, operation, member, states });
    return pending.descriptor.args.callback({
      contains: (value) => states.has(value),
    });
  };
  api.materializeDeferred(property, pending.type, 901, 'elevation');
  assert.equal(api.object(pending.type, 901), property);
  assert.equal(property.resolve(new Set([WidgetState.pressed])), 8);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].version, 20);
  assert.throws(
    () => api.materializeDeferred(property, pending.type, 901, 'color'),
    /type mismatch/,
  );
});

test('ButtonStyle preserves deferred values for Dart materialization', () => {
  const api = globalThis.__flaxBindings;
  const calls = [];
  globalThis.__flaxCreateObject = (version, type, descriptor) => {
    calls.push({ version, type, descriptor });
    return api.object(type, 902);
  };
  const elevation = WidgetStateProperty.resolveWith(() => 2);
  const style = ButtonStyle({ elevation });
  assert.ok(style);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].version, 20);
  assert.equal(calls[0].descriptor.args.elevation, elevation);
  assert.equal(api.deferredObject(elevation).materializer, null);
});

test('deferred aliases keep a shared Dart object alive independently', () => {
  const api = globalThis.__flaxBindings;
  const OriginalWeakRef = globalThis.WeakRef;
  const originalObject = globalThis.__flaxObject;
  const refs = [];
  globalThis.WeakRef = class {
    constructor(value) {
      this.value = value;
      refs.push(this);
    }

    deref() {
      return this.value;
    }
  };
  try {
    const first = WidgetStateProperty.resolveWith(() => 1);
    const second = WidgetStateProperty.resolveWith(() => 2);
    const pending = api.deferredObject(first);
    api.materializeDeferred(first, pending.type, 904, 'elevation');
    api.materializeDeferred(second, pending.type, 904, 'elevation');
    globalThis.__flaxObject = () => 7;

    assert.equal(api.object(pending.type, 904), first);
    refs.at(-1).value = undefined;
    assert.equal(api.sweepObjects().includes(904), false);
    assert.equal(first.resolve(new Set()), 7);

    refs[0].value = undefined;
    assert.equal(api.sweepObjects().includes(904), true);

    const third = WidgetStateProperty.resolveWith(() => 3);
    const fourth = WidgetStateProperty.resolveWith(() => 4);
    api.materializeDeferred(third, pending.type, 905, 'elevation');
    api.materializeDeferred(fourth, pending.type, 905, 'elevation');
    api.releaseObject(905);
    assert.throws(() => third.resolve(new Set()), /Disposed Dart object/);
    assert.throws(() => fourth.resolve(new Set()), /Disposed Dart object/);
  } finally {
    api.releaseObject(904);
    globalThis.WeakRef = OriginalWeakRef;
    globalThis.__flaxObject = originalObject;
  }
});

test('Dart Iterable and Set wrappers use one bulk copy for JavaScript iteration', () => {
  const api = globalThis.__flaxBindings;
  const calls = [];
  const values = new Set([1, 2]);
  globalThis.__flaxObject = (version, type, id, operation, member, ...args) => {
    calls.push({ version, type, id, operation, member, args });
    if (operation === 'get')
      return member === 'length' ? values.size : values.size === 0;
    if (member === 'contains') return values.has(args[0]);
    if (member === 'add') {
      const before = values.size;
      values.add(args[0]);
      return values.size !== before;
    }
    if (member === 'remove') return values.delete(args[0]);
    if (member === 'clear') return values.clear();
    if (member === 'toArray') return [...values];
    if (member === 'toSet') return new Set(values);
    throw new Error(`Unexpected ${operation} ${member}`);
  };
  api.defineCollection('fixture:set:number', 'set');
  const set = api.object('fixture:set:number', 903);
  const customIterable = {
    *[Symbol.iterator]() {
      yield 4;
    },
  };
  assert.equal(api.collectionShape(customIterable), 'iterable');
  assert.deepEqual(api.collectionEntries(customIterable), [4]);

  assert.equal(set.length, 2);
  assert.equal(set.isEmpty, false);
  assert.equal(set.contains(2), true);
  assert.equal(set.add(3), true);
  assert.equal(set.remove(1), true);
  const before = calls.length;
  assert.deepEqual([...set], [2, 3]);
  assert.equal(calls.length, before + 1);
  assert.equal(calls.at(-1).member, 'toArray');
  assert.deepEqual(set.toSet(), new Set([2, 3]));
});
