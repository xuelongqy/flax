import { objectHost } from './support/host.mjs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { registerPage, PageContent, Text, ValueKey } from '../../dist/flutter/index.js';
import { signal, bind } from '../../dist/runtime/index.js';

const host = objectHost();

test('named page factories initialize lazily with independent state and readonly inputs', () => {
  const api = globalThis.__flaxBindings;
  let builds = 0;
  const inputs = [];
  registerPage('details', (params) => {
    builds++;
    inputs.push(params);
    const count = signal(builds);
    return Text(bind(() => `${params.value.id}:${count.value}`));
  });
  assert.throws(() => registerPage('details', () => Text('duplicate')), /Duplicate/);
  assert.throws(() => registerPage('', () => Text('empty')), TypeError);
  assert.throws(() => registerPage('invalid', null), TypeError);
  const description = PageContent('details', {
    key: ValueKey('a'),
    arguments: { id: 1 },
  });
  assert.equal(description.type, 'flax:page-content');
  assert.equal(builds, 0);
  assert.equal(api.finishRegistration(), 1);
  assert.throws(() => registerPage('late', () => Text('late')), /closed/);
  const input = { id: 1, nested: ['a'] };
  const first = api.createPage('details', input);
  const second = api.createPage('details', { id: 2 });
  input.nested.push('b');
  assert.deepEqual(inputs[0].value.nested, ['a']);
  assert.throws(() => {
    inputs[0].value = null;
  }, TypeError);
  assert.throws(() => inputs[0].value.nested.push('c'), TypeError);
  assert.equal(first.widget.args.data.read(), '1:1');
  assert.equal(second.widget.args.data.read(), '2:2');
  first.update({ id: 3 });
  assert.equal(first.widget.args.data.read(), '3:1');
  assert.equal(second.widget.args.data.read(), '2:2');
  assert.equal(builds, 2);
  assert.throws(() => api.createPage('missing', null), /Unknown page/);
});
