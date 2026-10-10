import { test } from 'node:test';
import assert from 'node:assert/strict';
import { bindInstanceType, defineObject } from '../../dist/runtime/bindings.js';

test('instanceof uses authenticated views without calling Dart or reading getters', () => {
  const api = globalThis.__flaxBindings;
  const base = 'test.instance/base';
  const child = 'test.instance/child';
  const sibling = 'test.instance/sibling';
  const contract = 'test.instance/contract';
  defineObject(base, ['value'], [], {}, []);
  defineObject(child, ['value'], [], {}, []);
  defineObject(sibling, [], [], {}, []);
  const Base = bindInstanceType({}, base, []);
  const Child = bindInstanceType({}, child, [base, contract]);
  const Sibling = bindInstanceType({}, sibling, [base]);
  const Contract = bindInstanceType({}, contract, []);
  const value = api.object(child, 80001);
  assert.equal(value instanceof Child, true);
  assert.equal(value instanceof Base, true);
  assert.equal(value instanceof Contract, true);
  assert.equal(value instanceof Sibling, false);
  assert.equal(api.object(child, 80001), value);
  for (const invalid of [null, undefined, 1, {}, Object.create(value)]) {
    assert.equal(invalid instanceof Child, false);
  }
  api.releaseObject(80001);
  assert.equal(value instanceof Child, false);
});

test('instanceof does not upgrade parent or independent provider views', () => {
  const api = globalThis.__flaxBindings;
  const base = 'test.views/base';
  const child = 'test.views/child';
  const other = 'test.other/child';
  for (const type of [base, child, other]) defineObject(type, [], [], {}, []);
  const Base = bindInstanceType({}, base, []);
  const Child = bindInstanceType({}, child, [base]);
  const OtherChild = bindInstanceType({}, other, []);
  const parentView = api.object(base, 80002);
  const childView = api.object(child, 80002);
  assert.equal(parentView instanceof Base, true);
  assert.equal(parentView instanceof Child, false);
  assert.equal(childView instanceof Child, true);
  assert.equal(childView instanceof OtherChild, false);
  api.releaseObject(80002);
});

test('inherited Symbol.hasInstance preserves JS subclass discrimination', () => {
  class Base {}
  bindInstanceType(Base, 'test.subclass/base', []);
  class First extends Base {}
  class Second extends Base {}
  const first = new First();
  assert.equal(first instanceof First, true);
  assert.equal(first instanceof Second, false);
  assert.equal(new Base() instanceof First, false);
  // A JS prototype alone is not an authenticated Dart binding instance.
  assert.equal(first instanceof Base, false);
});
