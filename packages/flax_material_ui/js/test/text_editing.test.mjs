import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  TextEditingController,
  TextEditingValue,
  TextSelection,
  TextRange,
  TextAffinity,
} from '@flax/core/flutter';
import { TextField } from '../dist/index.js';
import { signal } from '@flax/core';
import { objectHost } from './support/host.mjs';

test('value references forward omission, null and every selected member access', () => {
  const { api, calls } = objectHost();
  const value = TextEditingValue({ text: 'old', selection: undefined });
  assert.deepEqual(calls[0].descriptor.args, { text: 'old' });
  assert.equal(calls[0].version, 20);
  assert.equal(value.text, 'old');
  assert.equal(calls.at(-1).op, 'get');
  assert.equal(value, api.object(calls[0].type, 100));
  assert.ok(Object.isFrozen(value));
  assert.throws(() => {
    value.text = 'new';
  }, TypeError);
  value.copyWith({ text: null });
  assert.equal(calls.at(-1).member, 'copyWith');
  assert.ok(calls.at(-1).args.includes(null));
  assert.throws(() => TextEditingValue({ text: signal('').bind }), /Bind widget/);
  assert.throws(() => value.copyWith({ text: signal('').bind }), /bindings/);
  assert.throws(() => value.copyWith({ missing: 1 }), /Invalid named/);
  assert.throws(() => TextSelection.collapsed({}), /Missing required/);
  TextEditingValue({ selection: null });
  assert.equal(calls.at(-1).descriptor.args.selection, null);
});

test('TextField borrows bindable controllers while object setters remain explicit', () => {
  const api = globalThis.__flaxBindings;
  const calls = [];
  globalThis.__flaxCreateObject = (version, type, descriptor) => {
    calls.push(descriptor);
    assert.equal(version, 20);
    return api.object(type, 37);
  };
  globalThis.__flaxObject = (...args) => {
    calls.push(args);
  };
  const controller = TextEditingController.fromValue(null);
  assert.equal(calls[0].ctor, 'fromValue');
  assert.equal(calls[0].args.value, null);
  controller.text = '中文🌱';
  assert.deepEqual(calls.at(-1).slice(3), ['set', 'text', '中文🌱']);
  assert.throws(() => {
    controller.text = signal('').bind;
  }, /binding/i);
  const selected = signal(controller);
  const field = TextField({ controller: selected.bind, onChanged: null });
  assert.equal(field.args.controller, selected.bind);
  assert.equal(field.args.onChanged, null);
  assert.equal('maxLines' in field.args, false);
  assert.equal(
    TextField({ focusNode: null, inputFormatters: [] }).args.focusNode,
    null,
  );
});
