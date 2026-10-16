import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  dartType,
  dartTypes,
  bindInstanceType,
  defineDartTypes,
  defineObject,
  constructObject,
  bindingMethods,
  defineDartCallTypes,
} from '../../dist/runtime/bindings.js';
import { operationHost } from './support/operations.mjs';

test('generic selectors authenticate tokens, cache requests and preserve receivers', (t) => {
  const type = 'test.dart-call/methods';
  const parameters = [{ name: 'value', required: true, positional: true }];
  const calls = [],
    selections = [];
  const previous = globalThis.__flaxDartType;
  globalThis.__flaxDartType = (version, operation, id, types, member, receiver) => {
    selections.push({
      version,
      operation,
      id,
      types: JSON.parse(types),
      member,
      receiver,
    });
    return operation === 'method'
      ? JSON.parse(types).length
        ? '@call:' + member
        : member
      : id + '@call';
  };
  const objectHost = operationHost('object', (...args) => {
    calls.push(args);
    return args.at(-1);
  });
  const topHost = operationHost('top', (...args) => {
    calls.push(args);
    return args.at(-1);
  });
  t.after(() => {
    globalThis.__flaxDartType = previous;
    operationHost('object', objectHost);
    operationHost('top', topHost);
  });
  defineObject(
    type,
    [],
    [],
    bindingMethods(
      type,
      'object',
      { wrap: parameters },
      { wrap: { id: 'wrap', parameters } },
    ),
    [],
  );
  const Methods = bindInstanceType(function Methods() {}, type, []);
  const receiver = globalThis.__flaxBindings.object(type, 82001);
  const selected = dartType(receiver, 'wrap', dartTypes.string);
  assert.equal(selected, dartType(receiver, 'wrap', dartTypes.string));
  assert.equal(selected('a'), 'a');
  assert.equal(calls.at(-1)[2], 82001);
  assert.equal(calls.at(-1)[4], '@call:wrap');
  assert.equal(selections[0].receiver, receiver);
  assert.deepEqual(selections[0].types, [['String', null, [], false]]);
  assert.equal(dartType(Methods, 'wrap', dartTypes.string).call(receiver, 'b'), 'b');
  assert.equal(dartType(receiver, 'wrap')('c'), 'c');
  const top = defineDartCallTypes(() => {}, { id: 'test.dart-call/top', parameters });
  assert.equal(dartType(top), top);
  assert.equal(dartType(top, dartTypes.string), dartType(top, dartTypes.string));
  assert.equal(dartType(top, dartTypes.string)('d'), 'd');
  const count = calls.length;
  assert.throws(() => selected(), /Missing required/);
  assert.throws(() => selected('a', 'b'), /Too many/);
  assert.throws(() => dartType(receiver, 'wrap', {}), /authenticated/);
  assert.throws(() => dartType({}, 'wrap', dartTypes.string), /Dart reference/);
  assert.throws(() => dartType(receiver, 'toString'), /generic method/);
  assert.throws(
    () => dartType(Methods, 'wrap', dartTypes.string).call({}, 'a'),
    /Dart reference/,
  );
  assert.equal(calls.length, count);
  assert.equal(
    dartType(receiver, 'wrap', dartTypes.int)(2),
    2,
    'selection is not limited to an emitted catalog',
  );
});

test('class selectors preserve default recipes, constructors and native type checks', (t) => {
  const root = 'test.dart-type/bag';
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
  defineDartTypes(Bag, root, {
    category: 'object',
    constructors: { '': parameters, named: parameters },
  });
  const calls = [],
    identities = new WeakMap();
  const previous = globalThis.__flaxCreateObject,
    previousTypes = globalThis.__flaxDartType;
  globalThis.__flaxDartType = (_, operation, id, types) => {
    assert.equal(operation, 'class');
    return id + '@' + JSON.parse(types)[0][0];
  };
  const reference = operationHost(
    'reference',
    (_, type, id, operation, name, value) => {
      assert.equal(operation, 'is');
      const actual = identities.get(value);
      return actual === type || (type === root && actual?.startsWith(root + '@'));
    },
  );
  globalThis.__flaxCreateObject = (version, type, descriptor) => {
    calls.push({ type, descriptor });
    const value = globalThis.__flaxBindings.object(type, 81900 + calls.length);
    identities.set(value, type);
    return value;
  };
  t.after(() => {
    globalThis.__flaxCreateObject = previous;
    globalThis.__flaxDartType = previousTypes;
    operationHost('reference', reference);
  });
  const Strings = Bag.$type(dartTypes.string),
    Ints = Bag.$type(dartTypes.int);
  assert.equal(Bag.$type(), Bag);
  assert.equal(Strings.$type(), Strings);
  assert.equal(dartType(Bag), Bag);
  assert.equal(dartType(Bag, dartTypes.string), Strings);
  assert.equal(Bag.$type(dartTypes.string), Strings);
  assert.equal(Strings.prototype, Bag.prototype);
  const a = Strings([], { label: 'a' });
  Strings.named([], { label: 'named' });
  assert.ok(a instanceof Strings && a instanceof Bag);
  assert.equal(a instanceof Ints, false);
  assert.deepEqual(
    calls.map((c) => c.descriptor.args),
    [
      { items: [], label: 'a' },
      { items: [], label: 'named' },
    ],
  );
  assert.throws(() => Strings([], null), /Named arguments/);
  assert.throws(() => Strings(undefined), /Missing required/);
  assert.throws(() => Strings([], {}, 3), /Too many/);
  assert.throws(() => new Strings([]), /not a JS subclass/);
  assert.throws(() => dartType(Bag, {}), /authenticated/);
  assert.throws(() => dartTypes.list({}), /authenticated/);
  assert.doesNotThrow(() => dartTypes.list(Bag));
  assert.equal(calls.length, 2, 'rejections never construct a Dart value');
});

test('generic registration shares one selector and preserves factory prototypes', () => {
  const selectors = new Set();
  for (let i = 0; i < 1000; i++) {
    function Factory() {}
    const parent = Object.getPrototypeOf(Factory);
    const type = `test.shared-type/${i}`;
    bindInstanceType(Factory, type, []);
    defineDartTypes(Factory, type, { category: 'object', constructors: {} });
    selectors.add(Factory.$type);
    assert.equal(Object.getPrototypeOf(Factory), parent);
    assert.equal(Object.getOwnPropertyDescriptor(Factory, '$type').enumerable, false);
  }
  assert.equal(selectors.size, 1);
});

test('generic registration rejects an existing selector without replacing it', () => {
  const type = 'test.shared-type/collision';
  function Factory() {}
  const businessMember = () => 'original';
  Factory.$type = businessMember;
  bindInstanceType(Factory, type, []);
  assert.throws(
    () => defineDartTypes(Factory, type, { category: 'object', constructors: {} }),
    /Conflicting generated \$type/,
  );
  assert.equal(Factory.$type, businessMember);
});

test('generic Widget descriptors select types without registering a native object view', (t) => {
  const root = 'test.dart-type/descriptor';
  const Factory = bindInstanceType(function Factory() {}, root, []);
  defineDartTypes(Factory, root, {
    category: 'widget',
    constructors: { '': [{ name: 'value', required: true, positional: false }] },
  });
  const previous = globalThis.__flaxDartType;
  globalThis.__flaxDartType = (_version, operation, id) => {
    assert.equal(operation, 'class');
    return id + '@String';
  };
  t.after(() => {
    globalThis.__flaxDartType = previous;
  });
  const Selected = Factory.$type(dartTypes.string);
  assert.deepEqual(Selected({ value: 'descriptor' }), {
    kind: 'widget',
    type: root + '@String',
    ctor: '',
    args: { value: 'descriptor' },
  });
  assert.equal(Selected.prototype, Factory.prototype);
});
