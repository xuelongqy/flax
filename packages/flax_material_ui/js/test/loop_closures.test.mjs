import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

test('bundled loop callbacks retain independent signals and subscriptions', () => {
  const source = readFileSync(
    new URL('../../.dart_tool/flax/ui/loop_closures.js', import.meta.url),
    'utf8',
  );
  const notifications = [];
  let root;
  runInNewContext(source, {
    __flaxCreateObject(version, type, descriptor) {
      assert.equal(version, 20);
      assert.match(type, /#type:ValueKey$/);
      return Object.freeze({ value: descriptor.args.value });
    },
    __flaxMount(widget, version) {
      assert.equal(version, 20);
      root = widget;
    },
    __flaxInvalidate: (token) => notifications.push(token),
  });
  const child = (key) => root.args.children.find((w) => w.args.key.value === key);
  const labels = [1, 2, 3].map((i) => child(`loop-label-${i}`).args.data);
  const stops = labels.map((binding, i) => binding.observe(i + 1));
  const values = [0, 0, 0];
  try {
    for (const index of [1, 2, 3, 1]) {
      notifications.length = 0;
      child(`loop-button-${index}`).args.onPressed();
      values[index - 1] += index;
      assert.deepEqual(notifications, [index]);
      assert.deepEqual(
        labels.map((binding) => binding.read()),
        values.map((value, i) => `Counter ${i + 1}: ${value}`),
      );
    }
    assert.equal(child('loop-static').args.data, 'Static');
  } finally {
    for (const stop of stops) stop();
  }
  notifications.length = 0;
  child('loop-button-1').args.onPressed();
  assert.deepEqual(notifications, []);
});
