import { operationHost } from './support/operations.mjs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  Builder,
  LayoutBuilder,
  Directionality,
  TextDirection,
  Text,
} from '../../dist/flutter/widgets.js';
import { signal } from '../../dist/runtime/index.js';
import {
  contextHandle,
  defineContext,
  bindingMethods,
  construct,
} from '../../dist/runtime/bindings.js';

test('sparse parameter flags preserve omission, null and argument validation', (t) => {
  const type = 'fixture:SparseParameters';
  const methods = bindingMethods(type, 'context', {
    read: [{ name: 'value' }],
    required: [{ name: 'value', required: true }],
    positional: [
      { name: 'first', positional: true },
      { name: 'second', positional: true },
    ],
  });
  defineContext(type, [], methods);
  const previous = operationHost(
    'context',
    (_version, _owner, _id, _name, value) => value,
  );
  t.after(() => operationHost('context', previous));
  const context = globalThis.__flaxBindings.context(type, 987);
  t.after(() => globalThis.__flaxBindings.releaseContext(987));
  assert.equal(context.read(), undefined);
  assert.equal(context.read({ value: null }), null);
  assert.equal(context.required({ value: null }), null);
  assert.throws(() => context.required(), /Missing required/);
  assert.throws(() => context.read({ other: 1 }), /Invalid named method arguments/);
  assert.throws(() => context.positional(undefined, 1), /trailing suffix/);
  let inheritedReads = 0;
  const saved = ['required', 'positional'].map((name) => [
    name,
    Object.getOwnPropertyDescriptor(Object.prototype, name),
  ]);
  try {
    for (const [name] of saved)
      Object.defineProperty(Object.prototype, name, {
        configurable: true,
        get() {
          inheritedReads++;
          throw new Error('Inherited parameter flag');
        },
      });
    assert.equal(context.read(), undefined);
    assert.equal(context.required({ value: null }), null);
    for (const parameters of [
      [{ name: 'value' }],
      [{ name: 'value', required: false, positional: false }],
    ]) {
      assert.deepEqual(construct('widget', type, '', parameters, [], {}).args, {});
      assert.deepEqual(
        construct('widget', type, '', parameters, [], { value: null }).args,
        { value: null },
      );
    }
  } finally {
    for (const [name, descriptor] of saved) {
      if (descriptor) Object.defineProperty(Object.prototype, name, descriptor);
      else delete Object.prototype[name];
    }
  }
  assert.equal(inheritedReads, 0);
});

test('Context methods share typed calls and reject retired or foreign receivers', (t) => {
  const type = 'fixture:ContextCalls';
  const methods = bindingMethods(type, 'context', {
    visit: [{ name: 'visitor', required: true, positional: true }],
  });
  defineContext(type, ['mounted'], methods);
  let calls = 0;
  const previous = operationHost('context', (_version, owner, id, name, callback) => {
    assert.deepEqual([owner, id, name], [type, 78, 'visit']);
    calls++;
    return callback(3);
  });
  t.after(() => operationHost('context', previous));
  const api = globalThis.__flaxBindings;
  const context = api.context(type, 78);
  assert.equal(
    context.visit((value) => value + 1),
    4,
  );
  assert.throws(() => context.visit(), /Missing required/);
  assert.throws(() => context.visit(() => true, 3), /Too many/);
  assert.throws(() => methods.visit.call({}, () => true), /foreign/);
  assert.throws(() => methods.visit.call(null, () => true), /foreign/);
  assert.equal(calls, 1);
  api.releaseContext(78);
  assert.equal(context.mounted, false);
  assert.throws(() => context.visit(() => true), /unmounted/);
  assert.equal(calls, 1);
});

test('numeric collection inputs recognize intrinsic buffer brands', () => {
  const api = globalThis.__flaxBindings;
  assert.equal(api.collectionShape(new Uint8Array([1])), 'buffer');
  assert.equal(api.collectionShape(new Float64Array([1])), 'buffer');
  assert.notEqual(api.collectionShape(new DataView(new ArrayBuffer(4))), 'buffer');
  assert.equal(api.collectionShape({ [Symbol.toStringTag]: 'Uint8Array' }), 'record');
});

test('constructing builders never executes callbacks or observes their bindings', () => {
  let calls = 0;
  const callback = () => {
    calls++;
    return Text('child');
  };
  const selected = signal(callback);
  assert.equal(Builder({ builder: callback }).args.builder, callback);
  assert.equal(LayoutBuilder({ builder: selected.bind }).args.builder, selected.bind);
  assert.equal(calls, 0);
  assert.throws(() => Builder({}), /Missing required/);
  assert.throws(
    () => Builder({ builder: callback, child: Text('extra') }),
    /Unsupported/,
  );
});

test('generated context access uses synchronous selected members and canonical enum values', () => {
  const api = globalThis.__flaxBindings;
  const type = 'flax.core/flutter#type:BuildContext';
  const context = api.context(type, 7);
  let calls = 0;
  operationHost('context', (version, id, handle, member) => {
    assert.deepEqual([version, id, handle, member], [24, type, 7, 'mounted']);
    calls++;
    return true;
  });
  operationHost('top', (version, id, handle) => {
    assert.equal(version, 24);
    assert.match(id, /#function:Directionality\.of$/);
    assert.equal(handle, 7);
    calls++;
    return TextDirection.rtl;
  });
  assert.equal(context, api.context(type, 7));
  assert.equal(context.mounted, true);
  assert.equal(Directionality.of(context), TextDirection.rtl);
  assert.equal(calls, 2);
  assert.throws(() => Directionality.of({ mounted: true }), /Invalid/);
  assert.throws(() => Directionality.of(context, 'extra'), /Too many/);
  api.releaseContext(7);
  assert.equal(context.mounted, false);
  assert.equal(calls, 2);
  assert.throws(() => Directionality.of(context), /unmounted/);
  assert.throws(() => contextHandle(context, type), /unmounted/);
  assert.notEqual(api.context(type, 8), context);
  api.releaseContext(8);
});

test('constraint references preserve infinity through selected getters', () => {
  let calls = 0;
  operationHost('object', (_, type, id, op, member) => {
    calls++;
    assert.equal(op, 'get');
    assert.equal(member, 'maxWidth');
    return Infinity;
  });
  const box = globalThis.__flaxBindings.object(
    'flax.core/flutter#type:BoxConstraints',
    17,
  );
  assert.equal(box.maxWidth, Infinity);
  assert.equal(box.maxWidth, Infinity);
  assert.equal(calls, 2);
  assert.throws(() => {
    box.maxWidth = 1;
  }, TypeError);
});

test('a reference from another runtime module cannot become a local handle', async () => {
  const api = globalThis.__flaxBindings;
  const type = 'flax.core/flutter#type:BuildContext';
  const context = api.context(type, 9);
  try {
    const foreign = await import('../../dist/runtime/bindings.js?isolated');
    assert.throws(() => foreign.contextHandle(context, type), /foreign/);
  } finally {
    globalThis.__flaxBindings = api;
    api.releaseContext(9);
  }
});

test('canonical enum getters return host identity without string conversion', async () => {
  const { TextSelection, TextAffinity } = await import('../../dist/flutter/widgets.js');
  const { objectHost } = await import('./support/host.mjs');
  const { api, calls } = objectHost();
  const value = TextSelection.collapsed({ offset: 1, affinity: TextAffinity.upstream });
  const before = calls.length;
  assert.equal(value.affinity, TextAffinity.upstream);
  assert.equal(calls.length - before, 1);
  assert.match(api.enumType(TextAffinity.upstream), /#type:TextAffinity$/);
  assert.equal(api.enumName(TextAffinity.upstream), 'upstream');
  assert.equal(api.enumType({ ...TextAffinity.upstream }), null);
  let read = false;
  assert.equal(
    api.enumType({
      get type() {
        read = true;
        return '';
      },
    }),
    null,
  );
  assert.equal(read, false);
});
