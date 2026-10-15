import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PreferredSize, Text } from '@flax/flutter/widgets';
import { Size } from '@flax/flutter/services';
import { AppBar, Scaffold } from '../dist/index.js';
import { signal, bind } from '@flax/core';
import { objectHost } from './support/host.mjs';

const { calls } = objectHost();

test('interface Widget configuration is fixed while its children and parent can bind', () => {
  const title = signal('Orders');
  const height = signal(56);
  const text = Text(title.bind);
  const before = calls.length;
  const bar = AppBar({ title: text });
  assert.equal(calls.length, before + 1);
  assert.equal(calls.at(-1).descriptor.args.title, text);
  assert.equal(Object.hasOwn(calls.at(-1).descriptor.args, 'toolbarHeight'), false);
  AppBar({ toolbarHeight: undefined });
  assert.equal(Object.hasOwn(calls.at(-1).descriptor.args, 'toolbarHeight'), false);
  AppBar({ toolbarHeight: null });
  assert.equal(calls.at(-1).descriptor.args.toolbarHeight, null);
  for (const [name, value] of Object.entries({
    toolbarHeight: height.bind,
    title: signal(text).bind,
    actions: signal([text]).bind,
    bottom: signal(null).bind,
  })) {
    assert.throws(() => AppBar({ [name]: value }), /bind the containing Widget/);
  }
  const size = Size.fromHeight(80);
  PreferredSize({ preferredSize: size, child: text });
  assert.equal(calls.at(-1).descriptor.args.child, text);
  assert.throws(
    () => PreferredSize({ preferredSize: signal(size).bind, child: text }),
    /fixed/,
  );
  assert.throws(
    () => PreferredSize({ preferredSize: size, child: signal(text).bind }),
    /fixed/,
  );
  const appBar = bind(() => AppBar({ toolbarHeight: height.value, title: text }));
  assert.equal(Scaffold({ appBar }).args.appBar, appBar);
  assert.equal(Scaffold({ appBar: null }).args.appBar, null);
  assert.equal(Object.isFrozen(bar), true);
  assert.equal('preferredSize' in bar, true);
});
