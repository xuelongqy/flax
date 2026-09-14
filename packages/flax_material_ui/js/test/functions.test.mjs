import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Text } from '@flax/core/flutter';
import { showDialog } from '../dist/index.js';

test('showDialog forwards its builder without executing it', () => {
  const helpers = globalThis.__flaxBindings;
  const context = helpers.context('flax.core/flutter#type:BuildContext', 41);
  let count = 0;
  const builder = () => {
    count++;
    return Text('Dialog');
  };
  const promise = Promise.resolve(null);
  globalThis.__flaxTopLevel = (version, id, ...args) => {
    assert.equal(version, 20);
    assert.match(id, /#function:showDialog$/);
    assert.ok(args.includes(builder));
    assert.ok(args.includes(41));
    return promise;
  };
  try {
    assert.equal(showDialog({ context, builder }), promise);
    assert.equal(count, 0);
    assert.throws(() => showDialog({ context, builder, extra: true }), /Invalid named/);
    assert.throws(() => showDialog({ context: {}, builder }), /Invalid/);
  } finally {
    helpers.releaseContext(41);
    delete globalThis.__flaxTopLevel;
  }
});
