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
import { construct, constructObject } from '../../dist/runtime/bindings.js';

const host = objectHost();

test('shared callback lookup keeps memo scope and retired identity checks', () => {
  const input = () => 42;
  const canonical = host.api.functionWithMemo(
    'fixture:callback',
    700001,
    '[]',
    false,
    input,
    'session/module/signature',
  );
  assert.equal(host.api.callbackReference(input, 'other'), null);
  assert.equal(host.api.callbackReference(input, 'session/module/signature'), -700001);
  assert.equal(host.api.callbackReference(canonical), 700001);
  assert.equal(
    host.api.callbackReference(Object.assign(() => {}, { kind: 'dart-function' })),
    0,
  );
  host.api.releaseObject(700001);
  assert.throws(
    () => host.api.callbackReference(input, 'session/module/signature'),
    /Released/,
  );
});

test('object creation sends provided arguments once and keeps the legacy fallback', () => {
  const create = globalThis.__flaxCreateObject;
  const fast = globalThis.__flaxCreateObjectWithArguments;
  const enabled = globalThis.__flaxObjectArguments;
  const received = [];
  const callback = () => 42;
  globalThis.__flaxObjectArguments = true;
  globalThis.__flaxCreateObjectWithArguments = (
    version,
    type,
    descriptor,
    ctor,
    ...values
  ) => {
    received.push({ ctor, values });
    return {};
  };
  try {
    constructObject(
      'object',
      'fixture:arguments',
      'named',
      [
        { name: 'first', positional: true },
        { name: 'absent' },
        { name: 'nullable' },
        { name: 'callback' },
      ],
      [3],
      { absent: undefined, nullable: null, callback },
    );
    assert.deepEqual(received, [
      { ctor: 'named', values: ['first', 3, 'nullable', null, 'callback', callback] },
    ]);
    delete globalThis.__flaxCreateObjectWithArguments;
    assert.doesNotThrow(() => EdgeInsets.all(1));
    assert.equal(received.length, 1);
  } finally {
    if (fast === undefined) delete globalThis.__flaxCreateObjectWithArguments;
    else globalThis.__flaxCreateObjectWithArguments = fast;
    if (enabled === undefined) delete globalThis.__flaxObjectArguments;
    else globalThis.__flaxObjectArguments = enabled;
  }
});

test('Widget batches preserve shared children and actual business references', () => {
  const leaf = Text('shared');
  const column = Column({ children: [leaf, leaf], textDirection: null });
  let packet;
  const previous = globalThis.__flaxReadWidgetBatch;
  globalThis.__flaxReadWidgetBatch = (plan, ...values) => {
    packet = { plan: JSON.parse(plan), values };
  };
  try {
    assert.equal(host.api.readWidgetBatch(column), true);
    const [root, nodes] = packet.plan;
    assert.equal(root, 1);
    assert.equal(nodes.length, 3);
    const fields = nodes[0][4];
    const children = nodes[fields[fields.indexOf('children') + 1] - 1];
    assert.equal(children[0], 1);
    assert.equal(children[2][0], children[2][1]);
    assert.equal(packet.values[nodes[0][1]], column);
    assert.equal(packet.values[nodes[2][1]], leaf);
    const callback = () => {};
    let reads = 0;
    const foreign = {
      toJSON() {
        reads++;
        throw Error('No serialization');
      },
    };
    const values = [undefined, null, -0, NaN, Infinity, 2n, callback, foreign];
    const custom = construct(
      'widget',
      'fixture:raw',
      '',
      values.map((_, i) => ({ name: `v${i}` })),
      [],
      Object.fromEntries(values.map((v, i) => [`v${i}`, v])),
    );
    assert.equal(host.api.readWidgetBatch(custom), true);
    const rawFields = packet.plan[1][0][4];
    assert.equal(rawFields.includes('v0'), false);
    for (let i = 1; i < values.length; i++) {
      const token = rawFields[rawFields.indexOf(`v${i}`) + 1];
      assert.ok(token < 0);
      assert.ok(Object.is(packet.values[-token - 1], values[i]));
    }
    assert.equal(reads, 0);
    const overwritten = construct(
      'widget',
      'fixture:raw',
      '',
      [{ name: 'type', readonly: true }],
      [],
      { type: foreign },
    );
    assert.equal(host.api.readWidgetBatch(overwritten), false);
    assert.equal(reads, 0);
  } finally {
    if (previous === undefined) delete globalThis.__flaxReadWidgetBatch;
    else globalThis.__flaxReadWidgetBatch = previous;
  }
});

test('argument metadata preserves getter order, binding tags and reference identity', () => {
  const insets = EdgeInsets.all(3);
  assert.equal(host.api.argumentReference(insets), host.api.objectHandle(insets));
  assert.equal(host.api.argumentReference({ kind: 'binding' }), true);
  let reads = 0;
  assert.equal(
    host.api.argumentReference({
      get kind() {
        reads++;
      },
    }),
    null,
  );
  assert.equal(reads, 1);
  const marker = Symbol('unsupported');
  assert.equal(host.api.argumentReference({ kind: marker }), marker);
  assert.equal(
    host.api.callbackReference(Object.assign(() => {}, { kind: marker })),
    marker,
  );
});

test('Widget batches leave foreign getters lazy and bound oversized packets', () => {
  let reads = 0;
  assert.equal(
    host.api.readWidgetBatch({
      get kind() {
        reads++;
        return 'widget';
      },
    }),
    false,
  );
  assert.equal(reads, 0);
  const large = Column({
    children: Array.from({ length: 513 }, (_, i) => Text(`${i}`)),
  });
  const previous = globalThis.__flaxReadWidgetBatch;
  let calls = 0;
  globalThis.__flaxReadWidgetBatch = () => calls++;
  try {
    assert.equal(host.api.readWidgetBatch(large), false);
    assert.equal(calls, 0);
    const previousToJson = Object.getOwnPropertyDescriptor(Array.prototype, 'toJSON');
    Object.defineProperty(Array.prototype, 'toJSON', {
      value() {
        throw Error('Metadata must not invoke business serialization');
      },
      configurable: true,
    });
    try {
      assert.equal(host.api.readWidgetBatch(Text('guard')), false);
      assert.equal(calls, 0);
    } finally {
      if (previousToJson)
        Object.defineProperty(Array.prototype, 'toJSON', previousToJson);
      else delete Array.prototype.toJSON;
    }
  } finally {
    if (previous === undefined) delete globalThis.__flaxReadWidgetBatch;
    else globalThis.__flaxReadWidgetBatch = previous;
  }
});

test('Widget batches bound repeated edges without invoking an array mapper', () => {
  const leaf = Text('repeated');
  const root = Column({ children: Array(5000).fill(leaf) });
  const previous = globalThis.__flaxReadWidgetBatch;
  const mapper = Array.prototype.map;
  let mapperCalls = 0;
  let deliveries = 0;
  let handled;
  globalThis.__flaxReadWidgetBatch = () => deliveries++;
  try {
    Array.prototype.map = function (...args) {
      mapperCalls++;
      return Reflect.apply(mapper, this, args);
    };
    handled = host.api.readWidgetBatch(root);
  } finally {
    Array.prototype.map = mapper;
    if (previous === undefined) delete globalThis.__flaxReadWidgetBatch;
    else globalThis.__flaxReadWidgetBatch = previous;
  }
  assert.equal(handled, false);
  assert.equal(deliveries, 0);
  assert.equal(mapperCalls, 0);
});

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
