import { objectHost } from './support/host.mjs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  Text,
  Column,
  Padding,
  EdgeInsets,
  TextDirection,
  runApp,
} from '../../dist/flutter/widgets.js';
import { signal } from '../../dist/runtime/index.js';

const host = objectHost();

test('generated constructors preserve omission, null, identity and immutable snapshots', () => {
  const children = [Text('one')];
  const column = Column({ children, textDirection: null });
  children.push(Text('two'));
  assert.equal(column.args.children.length, 1);
  assert.equal(column.args.textDirection, null);
  assert.equal(Object.hasOwn(column.args, 'spacing'), false);
  assert.ok(Object.isFrozen(column.args.children));
  assert.throws(() => {
    column.args.spacing = 2;
  }, TypeError);
  assert.equal(TextDirection.ltr.type, 'flax.core/flutter#type:TextDirection');
  const padding = EdgeInsets.symmetric({ horizontal: 2 });
  assert.equal(Padding({ padding }).args.padding, padding);
  assert.equal(host.calls.at(-1).descriptor.ctor, 'symmetric');
});

test('required, unknown and unsupported binding arguments fail explicitly', () => {
  assert.throws(() => Text(), /Missing required/);
  assert.throws(() => Padding({}), /Missing required/);
  assert.throws(() => Text('x', { locale: null }), /Unsupported/);
  assert.throws(() => Text('x', {}, 3), /Too many/);
  assert.throws(() => Text('x', { key: signal('a').bind }), /bind/i);
  assert.throws(() => EdgeInsets.all(signal(1).bind), /bind/i);
  assert.equal(Text(signal('label').bind).args.data.kind, 'binding');
});

test('runApp negotiates the protocol and accepts one root per JS realm', () => {
  let mounted;
  globalThis.__flaxMount = (widget, version) => {
    mounted = { widget, version };
  };
  const root = Text('root');
  runApp(root);
  assert.deepEqual(mounted, { widget: root, version: 20 });
  assert.throws(() => runApp(root), /root/i);
});
