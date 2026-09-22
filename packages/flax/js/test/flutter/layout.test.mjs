import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  Expanded,
  Flexible,
  Stack,
  Positioned,
  Align,
  Alignment,
  AlignmentDirectional,
  FlexFit,
  StackFit,
  Clip,
  Text,
} from '../../dist/flutter/widgets.js';
import { signal } from '../../dist/runtime/index.js';
import { objectHost } from './support/host.mjs';

const host = objectHost();

test('layout descriptors keep defaults in Dart and accept whole-property bindings', () => {
  const child = Text('Child');
  const flex = signal(1);
  assert.equal(Expanded({ flex: flex.bind, child }).args.flex, flex.bind);
  assert.equal(Flexible({ fit: FlexFit.tight, child }).args.fit, FlexFit.tight);
  for (const create of [Stack, Align]) {
    assert.equal(
      Object.hasOwn(create({ alignment: undefined }).args, 'alignment'),
      false,
    );
  }
  const position = Positioned({ left: null, right: signal(10).bind, width: 40, child });
  assert.equal(position.args.left, null);
  assert.equal(position.args.right.kind, 'binding');
  assert.equal(
    Stack({ fit: StackFit.expand, clipBehavior: Clip.none }).args.fit,
    StackFit.expand,
  );
  assert.throws(() => Expanded({}), /Missing required/);
  assert.throws(() => Expanded({ fit: FlexFit.loose, child }), /Unsupported/);
  assert.throws(() => Positioned({}), /Missing required/);
  assert.throws(() => Align({ key: signal(null).bind }), /bind/i);
  assert.equal(Positioned.fill, undefined);
});

test('alignment values forward constructors and real getters to Dart', () => {
  const physical = Alignment(0.5, -0.25);
  assert.deepEqual(host.calls.at(-1).descriptor.args, { x: 0.5, y: -0.25 });
  assert.equal(physical.x, 0.5);
  assert.equal(host.calls.at(-1).member, 'x');
  const directional = AlignmentDirectional(-1, 1);
  assert.deepEqual(host.calls.at(-1).descriptor.args, { start: -1, y: 1 });
  assert.equal(directional.start, -1);
  assert.equal(
    Align({ alignment: signal(directional).bind }).args.alignment.kind,
    'binding',
  );
  assert.ok(Object.isFrozen(physical));
  assert.throws(() => Alignment(signal(1).bind, 0), /bind/i);
});
