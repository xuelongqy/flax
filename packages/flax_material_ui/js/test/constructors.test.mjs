import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Text, ValueKey } from '@flax/core/flutter';
import { TextButton } from '../dist/index.js';
import { objectHost } from './support/host.mjs';

objectHost();

test('Material constructors retain core Widget and key values', () => {
  const button = TextButton({
    onPressed: null,
    child: Text('disabled'),
    key: ValueKey(1),
  });
  assert.equal(button.args.key.value, 1);
});
