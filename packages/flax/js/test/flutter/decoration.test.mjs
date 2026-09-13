import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  Container,
  DecoratedBox,
  BoxDecoration,
  Border,
  BorderSide,
  BorderDirectional,
  Radius,
  BorderRadius,
  BorderRadiusDirectional,
  EdgeInsetsDirectional,
  BoxConstraints,
  Clip,
  DecorationPosition,
} from '../../dist/flutter/index.js';
import { signal } from '../../dist/runtime/index.js';
import { objectHost } from './support/host.mjs';

const host = objectHost();
test('decoration descriptors preserve omissions, bindings and selected API boundaries', () => {
  const decoration = BoxDecoration({ color: undefined, border: null });
  assert.deepEqual(host.calls.at(-1).descriptor.args, { border: null });
  const value = signal(decoration);
  assert.equal(
    Container({ decoration: value.bind, padding: null, width: undefined }).args
      .decoration,
    value.bind,
  );
  assert.equal(Object.hasOwn(Container({ width: undefined }).args, 'width'), false);
  assert.equal(
    DecoratedBox({ decoration, position: DecorationPosition.foreground }).args.position,
    DecorationPosition.foreground,
  );
  assert.equal(
    Container({ clipBehavior: Clip.hardEdge }).args.clipBehavior,
    Clip.hardEdge,
  );
  assert.throws(() => DecoratedBox({}), /Missing required/);
  assert.throws(() => Container({ key: signal(null).bind }), /bind/i);
  assert.throws(() => Container({ transform: null }), /Unsupported/);
  assert.throws(() => BoxDecoration({ color: signal(null).bind }), /bind/i);
  assert.equal(BoxDecoration({}).dispose, undefined);
});

test('geometry constructors and getters use the common object transport', () => {
  const radius = Radius.elliptical(8, 3);
  assert.deepEqual(host.calls.at(-1).descriptor.args, { x: 8, y: 3 });
  assert.equal(radius.x, 8);
  assert.equal(host.calls.at(-1).member, 'x');
  const side = BorderSide({ width: 2 });
  Border({ left: side, right: undefined });
  assert.deepEqual(host.calls.at(-1).descriptor.args, { left: side });
  BorderDirectional({ start: side });
  assert.deepEqual(host.calls.at(-1).descriptor.args, { start: side });
  BorderRadius.only({ bottomLeft: radius });
  assert.deepEqual(host.calls.at(-1).descriptor.args, { bottomLeft: radius });
  assert.equal(BorderRadiusDirectional.only({ topStart: radius }).copyWith, undefined);
  const insets = EdgeInsetsDirectional.fromSTEB(1, 2, 3, 4);
  assert.equal(insets.start, 1);
  BoxConstraints({ maxWidth: Infinity });
  assert.deepEqual(host.calls.at(-1).descriptor.args, { maxWidth: Infinity });
  BoxConstraints.tightFor({ width: undefined, height: 20 });
  assert.deepEqual(host.calls.at(-1).descriptor.args, { height: 20 });
  assert.ok(Object.isFrozen(insets));
});
