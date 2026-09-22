import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ListView, Text } from '../../dist/flutter/widgets.js';
import { signal } from '../../dist/runtime/index.js';

test('ListView descriptors retain callbacks without running them and accept bound inputs', () => {
  let calls = 0;
  const builder = (_, index) => {
    calls++;
    return index === 0 ? Text('First') : null;
  };
  const count = signal(10);
  const physics = signal(null);
  const descriptor = ListView.builder({
    itemBuilder: builder,
    itemCount: count.bind,
    physics: physics.bind,
    primary: null,
  });
  assert.equal(calls, 0);
  assert.equal(descriptor.ctor, 'builder');
  assert.equal(descriptor.args.itemBuilder, builder);
  assert.equal(descriptor.args.itemCount, count.bind);
  assert.equal(descriptor.args.physics, physics.bind);
  assert.equal(descriptor.args.primary, null);
  assert.equal(descriptor.args.itemBuilder(null, 1), null);
  assert.ok(Object.isFrozen(descriptor));
  assert.equal(
    Object.hasOwn(
      ListView.builder({ itemBuilder: builder, itemExtent: undefined }).args,
      'itemExtent',
    ),
    false,
  );
  assert.equal(
    ListView.builder({ itemBuilder: builder, physics: null }).args.physics,
    null,
  );
  assert.throws(() => ListView.builder({}), /Missing required/);
  assert.throws(
    () => ListView.builder({ itemBuilder: builder, prototypeItem: null }),
    /Unsupported/,
  );
});
