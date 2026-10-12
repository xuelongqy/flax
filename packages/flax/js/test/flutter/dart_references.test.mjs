import { test } from 'node:test';
import assert from 'node:assert/strict';
import { operationHost } from './support/operations.mjs';
import {
  asDart,
  getDartType,
  bindInstanceType,
  defineObject,
  defineContext,
  defineState,
  defineEnum,
} from '../../dist/runtime/bindings.js';

test('checked views use one shared operation and authenticated target tokens', () => {
  const api = globalThis.__flaxBindings;
  const type = 'test.reference/shared';
  defineObject(type, [], [], {}, []);
  const Target = bindInstanceType({}, type, []);
  const value = api.object(type, 81001);
  const calls = [];
  operationHost('reference', (version, target, receiver, operation, member, input) => {
    calls.push({ version, target, receiver, operation, member, input });
    return operation === 'type' ? 'RealDartClass<String>' : value;
  });
  assert.equal(asDart(value, Target), value);
  assert.equal(getDartType(value), 'RealDartClass<String>');
  assert.deepEqual(
    calls.map((call) => [call.target, call.operation, call.input]),
    [
      [type, 'cast', value],
      ['', 'type', value],
    ],
  );
  assert.equal(calls.length, 2);
  assert.throws(
    () => asDart(value, { [Symbol.hasInstance]: () => true }),
    /generated Dart type/,
  );
  assert.throws(() => asDart(value, Object.create(Target)), /generated Dart type/);
  const frozen = Object.freeze({});
  assert.throws(() => bindInstanceType(frozen, type, []), TypeError);
  assert.throws(() => asDart(value, frozen), /generated Dart type/);
  class Original {}
  bindInstanceType(Original, 'test.reference/original', []);
  class JsChild extends Original {}
  assert.throws(() => asDart(value, JsChild), /generated Dart type/);
  for (const raw of [
    null,
    undefined,
    1,
    {},
    [],
    new Set(),
    new Map(),
    Promise.resolve(1),
    () => 1,
  ]) {
    assert.throws(() => getDartType(raw), /Dart reference/);
    assert.throws(() => asDart(raw, Target), /Dart reference/);
  }
  assert.equal(calls.length, 2);
  api.releaseObject(81001);
  assert.throws(() => getDartType(value), /Released/);
});

test('borrowed Context, State, enums and native callbacks share reference queries', () => {
  const api = globalThis.__flaxBindings;
  const contextType = 'test.reference/context';
  const stateType = 'test.reference/state';
  const enumType = 'test.reference/enum';
  defineContext(contextType, ['mounted']);
  defineState(stateType, [], {});
  defineEnum(enumType, ['first']);
  const context = api.context(contextType, 81002);
  const state = api.state(stateType, 81003);
  const value = api.enumValue(enumType, 'first');
  const callback = api.function('test.reference/callback', 81004, '[]');
  let calls = 0;
  operationHost('reference', () => {
    calls++;
    return 'native';
  });
  for (const reference of [context, state, value, callback]) {
    assert.equal(getDartType(reference), 'native');
  }
  assert.equal(calls, 4);
  api.releaseContext(81002);
  assert.throws(() => getDartType(context), /Released/);
  api.releaseObject(81004);
  assert.throws(() => getDartType(callback), /Released/);
});
