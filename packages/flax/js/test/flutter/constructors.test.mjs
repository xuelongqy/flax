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
import { construct } from '../../dist/runtime/bindings.js';

const host = objectHost();

test('widget metadata keeps native handles, frozen descriptions and foreign reads distinct', () => {
  const description = Text('metadata');
  assert.equal(host.api.widgetInfo(description), 'flax.core/flutter#type:Text\u0000');
  assert.equal(host.api.widgetInfo(description), host.api.widgetInfo(description));
  const native = EdgeInsets.all(1);
  assert.equal(host.api.widgetInfo(native), host.api.objectHandle(native));
  let reads = 0;
  const foreign = Object.freeze({
    get kind() {
      reads++;
      return 'widget';
    },
    get type() {
      reads++;
      return 'flax.core/flutter#type:Text';
    },
    get ctor() {
      reads++;
      return '';
    },
    args: description.args,
  });
  assert.equal(host.api.widgetInfo(foreign), null);
  assert.equal(reads, 0);
  assert.equal(
    host.api.widgetInfo(construct('widget', 'nul\u0000type', '', [], [], {})),
    null,
  );
  assert.equal(
    host.api.widgetInfo(construct('widget', 'surrogate\ud800', '', [], [], {})),
    'surrogate\ud800\u0000',
  );
  const overwritten = construct(
    'widget',
    'original',
    '',
    [{ name: 'type', readonly: true }],
    [],
    { type: 'actual' },
  );
  assert.equal(host.api.widgetInfo(overwritten), 'actual\u0000');
});

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
  assert.equal(
    host.api.enumType(TextDirection.ltr),
    'flax.core/flutter#type:TextDirection',
  );
  assert.equal(
    host.api.typedReference(TextDirection.ltr),
    'flax.core/flutter#type:TextDirection',
  );
  const padding = EdgeInsets.symmetric({ horizontal: 2 });
  assert.equal(host.api.typedReference(padding), host.api.objectHandle(padding));
  assert.equal(host.api.typedReference({ kind: 'dart-object' }), null);
  assert.equal(Padding({ padding }).args.padding, padding);
  assert.equal(host.calls.at(-1).descriptor.ctor, 'symmetric');
});

test('required and unknown binding arguments fail explicitly', () => {
  assert.throws(() => Text(), /Missing required/);
  assert.throws(() => Padding({}), /Missing required/);
  assert.equal(Text('x', { locale: null }).args.locale, null);
  assert.throws(() => Text('x', { unknown: null }), /Unsupported/);
  assert.throws(() => Text('x', {}, 3), /Too many/);
  assert.throws(() => Text('x', { key: signal('a').bind }), /bind/i);
  assert.throws(() => EdgeInsets.all(signal(1).bind), /bind/i);
  assert.equal(Text(signal('label').bind).args.data.kind, 'binding');
});

test('argument snapshots reuse immutable keys and leave foreign getters untouched', () => {
  const snapshot = Text('keys', { locale: null }).args;
  const keys = host.api.argumentKeys(snapshot);
  assert.deepEqual(keys, [true, ...Object.keys(snapshot)]);
  assert.equal(host.api.argumentKeys(snapshot), keys);
  assert.ok(Object.isFrozen(keys));
  let reads = 0;
  const foreign = Object.create({ inherited: 4 });
  Object.defineProperty(foreign, 'value', {
    enumerable: true,
    get() {
      reads++;
      return 3;
    },
  });
  assert.deepEqual(host.api.argumentKeys(foreign), [false, 'value']);
  assert.equal(reads, 0);
  const previous = globalThis.__flaxReadArguments;
  const batches = [];
  globalThis.__flaxReadArguments = (...entries) => batches.push(entries);
  try {
    assert.equal(host.api.readArguments(snapshot), true);
    assert.deepEqual(batches, [['data', 'keys', 'locale', null]]);
    assert.equal(host.api.readArguments(foreign), false);
    assert.equal(reads, 0);
    assert.equal(batches.length, 1);
  } finally {
    if (previous === undefined) delete globalThis.__flaxReadArguments;
    else globalThis.__flaxReadArguments = previous;
  }
});

test('runApp negotiates the protocol and accepts one root per JS realm', () => {
  let mounted;
  globalThis.__flaxMount = (widget, version) => {
    mounted = { widget, version };
  };
  const root = Text('root');
  runApp(root);
  assert.deepEqual(mounted, { widget: root, version: 24 });
  assert.throws(() => runApp(root), /root/i);
});
