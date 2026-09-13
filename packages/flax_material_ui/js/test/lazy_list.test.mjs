import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ListView, Text } from '@flax/core/flutter';
import { RefreshIndicator } from '../dist/index.js';

test('RefreshIndicator preserves the asynchronous callback without invoking it', () => {
  let calls = 0;
  const onRefresh = async () => {
    calls++;
  };
  const child = ListView.builder({ itemBuilder: () => Text('row') });
  const descriptor = RefreshIndicator({ onRefresh, child });
  assert.equal(calls, 0);
  assert.equal(descriptor.args.onRefresh, onRefresh);
  assert.equal(descriptor.args.child, child);
  assert.throws(
    () => RefreshIndicator({ onRefresh: undefined, child }),
    /Missing required/,
  );
});
