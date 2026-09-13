import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  ListenableBuilder,
  ValueListenableBuilder,
  Text,
} from '../../dist/flutter/index.js';
import { signal } from '../../dist/runtime/index.js';

test('Listenable builders preserve the supplied child and defer callbacks to Flutter', () => {
  const child = Text('Static');
  let calls = 0;
  const builder = (_context, _value, child) => {
    calls++;
    return child;
  };
  const source = signal(null);
  const value = ValueListenableBuilder({
    valueListenable: source.bind,
    builder,
    child,
  });
  assert.equal(value.args.child, child);
  assert.equal(value.args.builder, builder);
  assert.equal(value.args.valueListenable, source.bind);
  const plain = ListenableBuilder({
    listenable: source.bind,
    builder: source.bind,
    child: null,
  });
  assert.equal(plain.args.child, null);
  assert.equal(calls, 0);
  assert.throws(
    () => ListenableBuilder({ listenable: source.bind }),
    /Missing required/,
  );
  assert.throws(
    () =>
      ValueListenableBuilder({
        valueListenable: source.bind,
        builder,
        key: source.bind,
      }),
    /bind/i,
  );
});
