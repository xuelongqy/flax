import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runApp } from '../../dist/flutter/widgets.js';
import { bindingVersion, copyNavigationData } from '../../dist/runtime/bindings.js';

test('returned functions share one typed entry and cannot become navigation data', () => {
  const api = globalThis.__flaxBindings;
  const calls = [];
  globalThis.__flaxFunction = (...args) => {
    calls.push(args);
    return args[4];
  };
  const positionalShape = JSON.stringify([
    { name: 'value', required: true, positional: true },
  ]);
  const first = api.function('int(int)', 9001, positionalShape);
  assert.equal(first, api.function('int(int)', 9001, positionalShape));
  assert.notEqual(first, api.function('double(double)', 9002, positionalShape));
  assert.equal(first(7), 7);
  assert.deepEqual(calls, [[bindingVersion, 'int(int)', 9001, 1, 7, 0]]);
  assert.equal(api.tryObjectHandle(first), 9001);
  assert.throws(() => copyNavigationData(first));
  api.releaseObject(9001);
  assert.throws(() => first(7), /Released Dart function/);
  assert.throws(() => api.tryObjectHandle(first), /Released/);
});

test('returned functions preserve optional and named omission', () => {
  const api = globalThis.__flaxBindings;
  const calls = [];
  globalThis.__flaxFunction = (...args) => {
    calls.push(args);
    return null;
  };
  const optional = api.function(
    'optional',
    9003,
    JSON.stringify([
      { name: 'value', required: true, positional: true },
      { name: 'label', required: false, positional: true },
    ]),
  );
  optional(1);
  optional(1, undefined);
  optional(1, 'label');
  assert.throws(() => optional(), /arity/);
  assert.throws(() => optional(1, undefined, 'extra'), /arity|holes/);

  const named = api.function(
    'named',
    9004,
    JSON.stringify([
      { name: 'value', required: true, positional: true },
      { name: 'label', required: true, positional: false },
      { name: 'count', required: false, positional: false },
    ]),
  );
  named(1, { label: 'one' });
  named(2, { label: 'two', count: undefined });
  named(3, { label: 'three', count: null });
  assert.throws(() => named(1), /Missing required named/);
  assert.throws(() => named(1, { label: undefined }), /Missing required named/);
  assert.throws(() => named(1, { label: 'one', other: 2 }), /Unknown named/);
  assert.throws(
    () =>
      named(1, {
        get label() {
          return 'one';
        },
      }),
    /data properties/,
  );

  assert.deepEqual(calls, [
    [bindingVersion, 'optional', 9003, 1, 1, 0],
    [bindingVersion, 'optional', 9003, 1, 1, 0],
    [bindingVersion, 'optional', 9003, 2, 1, 'label', 0],
    [bindingVersion, 'named', 9004, 1, 1, 1, 'label', 'one'],
    [bindingVersion, 'named', 9004, 1, 2, 1, 'label', 'two'],
    [bindingVersion, 'named', 9004, 1, 3, 2, 'label', 'three', 'count', null],
  ]);
});

test('Dart-to-JS callback invocation omits empty named options', () => {
  const api = globalThis.__flaxBindings;
  const seen = [];
  function callback(value = 7, options = 'omitted') {
    seen.push([value, options, arguments.length]);
  }
  api.invokeCallback(callback, 0, 0);
  api.invokeCallback(callback, 1, 3, 0);
  api.invokeCallback(callback, 1, 4, 1, 'label', 'four');
  assert.deepEqual(seen, [
    [7, 'omitted', 0],
    [3, 'omitted', 1],
    [4, { label: 'four' }, 2],
  ]);
});

test('Dart Widgets preserve identity without exposing construction or fields', () => {
  const api = globalThis.__flaxBindings;
  const widget = api.dartWidget(9100);
  assert.equal(widget, api.dartWidget(9100));
  assert.ok(Object.isFrozen(widget));
  assert.deepEqual(Object.keys(widget), []);
  assert.throws(() => copyNavigationData(widget), /Host references/);
  let root;
  globalThis.__flaxMount = (value) => {
    root = value;
  };
  runApp(widget);
  assert.equal(root, widget);
});
