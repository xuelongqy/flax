import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  dartType,
  dartTypes,
  bindInstanceType,
  defineDartTypes,
  defineObject,
  constructObject,
} from '../../dist/runtime/bindings.js';

test('dartType composes authenticated types and selects cached constructor views', () => {
  const root = 'test.dart-type/bag';
  const selected = 'test.dart-type/bag:string';
  const parameters = [
    { name: 'items', required: true, positional: true },
    { name: 'label', required: false, positional: false },
  ];
  defineObject(root, [], [], {}, []);
  const Bag = bindInstanceType(
    function Bag(items, options = {}) {
      return constructObject('object', root, '', parameters, [items], options);
    },
    root,
    [],
  );
  defineDartTypes(
    Bag,
    root,
    [['any', null, [], true]],
    [
      {
        arguments: [['String', null, [], false]],
        id: selected,
        constructors: { '': parameters, named: parameters },
      },
    ],
  );
  const calls = [];
  const previous = globalThis.__flaxCreateObject;
  globalThis.__flaxCreateObject = (version, type, descriptor) => {
    calls.push({ type, descriptor });
    return globalThis.__flaxBindings.object(type, 81900 + calls.length);
  };
  try {
    const Strings = dartType(Bag, dartTypes.string);
    defineObject(root + '.opaque', [], [], {}, []);
    const Opaque = bindInstanceType(
      function OpaqueDefault() {},
      root + '.opaque',
      [],
      null,
    );
    assert.equal(dartType(Opaque), Opaque);
    defineDartTypes(Opaque, root + '.opaque', null, [
      {
        arguments: [['String', null, [], false]],
        id: root + '.opaque.string',
        constructors: { '': [] },
      },
    ]);
    assert.equal(dartType(Opaque), Opaque);
    assert.throws(() => dartTypes.list(Opaque), /authenticated/);
    const OpaqueStrings = dartType(Opaque, dartTypes.string);
    assert.equal(dartType(Opaque, dartTypes.string), OpaqueStrings);
    assert.throws(() => dartType(dartTypes.string), /generated Dart class/);
    assert.equal(dartType(Bag, dartTypes.string), Strings);
    assert.equal(dartType(Bag), Bag);
    assert.equal(Strings.prototype, Bag.prototype);
    const a = Strings([], { label: 'a' });
    Strings.named([], { label: 'named' });
    assert.ok(a instanceof Strings);
    assert.ok(a instanceof Bag);
    assert.equal(calls.length, 2);
    assert.deepEqual(
      calls.map((c) => [c.type, c.descriptor.args]),
      [
        [selected, { items: [], label: 'a' }],
        [selected, { items: [], label: 'named' }],
      ],
    );
    assert.throws(() => Strings([], null), /Named arguments/);
    assert.throws(() => Strings(undefined), /Missing required/);
    assert.throws(() => Strings([], {}, 3), /Too many/);
    assert.throws(() => new Strings([]), /not a JS subclass/);
    assert.throws(() => dartType(Bag, dartTypes.int), /not a generated target/);
    assert.throws(() => dartType(Bag, {}), /authenticated/);
    assert.throws(() => dartTypes.list({}), /authenticated/);
    assert.equal(calls.length, 2, 'rejections never invoke Dart');
    const opaqueValue = OpaqueStrings();
    assert.ok(opaqueValue instanceof OpaqueStrings);
    assert.ok(opaqueValue instanceof Opaque);
    assert.doesNotThrow(() => dartTypes.list(OpaqueStrings));
    assert.equal(calls.at(-1).type, root + '.opaque.string');
  } finally {
    globalThis.__flaxCreateObject = previous;
  }
});
