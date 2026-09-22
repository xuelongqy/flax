import assert from 'node:assert/strict';
import { test } from 'node:test';
import { signal } from '@flax/core';
import { BorderRadius, Clip, Spacer, Text, TextStyle } from '@flax/flutter/widgets';
import { Color } from '@flax/flutter/services';
import { ValueKey } from '@flax/flutter/foundation';
import {
  InkWell,
  LinearProgressIndicator,
  Material,
  MaterialType,
  TextButton,
} from '../dist/index.js';
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

test('surface, ink and progress retain Core values, bindings and native defaults', () => {
  const key = ValueKey('surface');
  const color = Color(0xff1565c0);
  const radius = BorderRadius.circular(8);
  const style = TextStyle({ color, fontSize: 22 });
  const onTap = () => {};
  const ink = InkWell({ key, child: Text('Tap'), onTap, borderRadius: radius });
  assert.equal(ink.args.onTap, onTap);
  assert.equal(ink.args.borderRadius, radius);
  const surface = Material({
    key,
    child: ink,
    color,
    textStyle: style,
    type: MaterialType.card,
    clipBehavior: Clip.antiAlias,
    borderRadius: radius,
  });
  assert.equal(surface.args.key, key);
  assert.equal(surface.args.child, ink);
  assert.equal(surface.args.color, color);
  assert.equal(surface.args.textStyle, style);
  assert.equal(surface.args.type, MaterialType.card);
  assert.equal(surface.args.clipBehavior, Clip.antiAlias);
  assert.deepEqual(Spacer().args, {});
  assert.deepEqual(Material().args, {});
  assert.deepEqual(InkWell().args, {});
  assert.equal(Material({ shape: null }).args.shape, null);
  const shape = signal(null);
  assert.equal(Material({ shape: shape.bind }).args.shape, shape.bind);
  assert.equal(InkWell({ customBorder: null }).args.customBorder, null);
  assert.equal(InkWell({ mouseCursor: null }).args.mouseCursor, null);
  assert.deepEqual(LinearProgressIndicator({ value: undefined }).args, {});
  assert.equal(LinearProgressIndicator({ value: null }).args.value, null);
  const progress = signal(0.25);
  assert.equal(
    LinearProgressIndicator({ value: progress.bind }).args.value,
    progress.bind,
  );
  assert.equal(Spacer({ flex: signal(2).bind }).args.flex.kind, 'binding');
  assert.throws(() => Spacer({ unknown: 1 }), /Unsupported/);
  assert.throws(() => Material({ animationDuration: null }), /Unsupported/);
  assert.throws(() => InkWell({ onDoubleTap: onTap }), /Unsupported/);
  assert.throws(() => LinearProgressIndicator({ valueColor: color }), /Unsupported/);
});
