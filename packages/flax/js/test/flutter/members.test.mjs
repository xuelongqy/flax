import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  Builder,
  LayoutBuilder,
  Directionality,
  TextDirection,
  Text,
} from '../../dist/flutter/index.js';
import { signal } from '../../dist/runtime/index.js';
import { contextHandle } from '../../dist/runtime/bindings.js';

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
  globalThis.__flaxGet = (version, id, handle, member) => {
    assert.deepEqual([version, id, handle, member], [20, type, 7, 'mounted']);
    calls++;
    return true;
  };
  globalThis.__flaxCall = (version, id, member, handle) => {
    assert.equal(version, 20);
    assert.match(id, /#type:Directionality$/);
    assert.equal(member, 'of');
    assert.equal(handle, 7);
    calls++;
    return TextDirection.rtl;
  };
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
  globalThis.__flaxObject = (_, type, id, op, member) => {
    calls++;
    assert.equal(op, 'get');
    assert.equal(member, 'maxWidth');
    return Infinity;
  };
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
  const { TextSelection, TextAffinity } = await import('../../dist/flutter/index.js');
  const { objectHost } = await import('./support/host.mjs');
  const { api, calls } = objectHost();
  const value = TextSelection.collapsed({ offset: 1, affinity: TextAffinity.upstream });
  const before = calls.length;
  assert.equal(value.affinity, TextAffinity.upstream);
  assert.equal(calls.length - before, 1);
  assert.equal(api.enumType(TextAffinity.upstream), TextAffinity.upstream.type);
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
