import { test } from 'node:test';
import assert from 'node:assert/strict';
import { applyBoxFit, BoxFit } from '../../dist/flutter/widgets.js';

test('top-level exports use one host entry and preserve argument order', () => {
  const input = {},
    output = {},
    expected = {};
  const calls = [];
  globalThis.__flaxTopLevel = (...args) => {
    calls.push(args);
    return expected;
  };
  try {
    assert.equal(applyBoxFit(BoxFit.contain, input, output), expected);
    assert.deepEqual(calls, [
      [21, 'flax.core/flutter#function:applyBoxFit', BoxFit.contain, input, output],
    ]);
    assert.throws(() => applyBoxFit(BoxFit.contain, input, output, 1), /Too many/);
  } finally {
    delete globalThis.__flaxTopLevel;
  }
});
