import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Color, FontWeight, TextStyle, Text } from '@flax/core/flutter';
import {
  Brightness,
  ColorScheme,
  InputDecoration,
  TextField,
  TextTheme,
  Theme,
  ThemeData,
} from '../dist/index.js';
import { signal } from '@flax/core';
import { objectHost } from './support/host.mjs';

const transport = objectHost();

test('generated styles forward to Dart while widget bindings preserve omission', () => {
  const { calls } = transport;
  const color = Color.fromARGB(255, 20, 30, 40);
  assert.deepEqual(calls.at(-1).descriptor.args, { a: 255, r: 20, g: 30, b: 40 });
  color.toARGB32();
  assert.equal(calls.at(-1).member, 'toARGB32');
  const weight = FontWeight(550);
  const style = TextStyle({ color, fontWeight: weight, fontSize: undefined });
  assert.deepEqual(calls.at(-1).descriptor.args, { color, fontWeight: weight });
  assert.equal(style.color, color);
  assert.equal(calls.at(-1).op, 'get');
  style.copyWith({ color: null });
  assert.equal(calls.at(-1).member, 'copyWith');
  assert.ok(calls.at(-1).args.includes(null));
  assert.throws(() => TextStyle({ fontSize: signal(12).bind }), /bind/i);
  assert.throws(() => style.copyWith({ height: signal(1).bind }), /bind/i);
  const selected = signal(style);
  assert.equal(Text('Styled', { style: selected.bind }).args.style, selected.bind);
  const decoration = InputDecoration({ labelText: 'Name' });
  assert.equal(decoration.labelText, 'Name');
  decoration.copyWith({ errorText: null });
  assert.equal(calls.at(-1).member, 'copyWith');
  assert.ok(Object.isFrozen(decoration));
  assert.equal(Object.hasOwn(TextField().args, 'decoration'), false);
  assert.equal(
    Object.hasOwn(TextField({ decoration: undefined }).args, 'decoration'),
    false,
  );
  assert.equal(TextField({ decoration: null }).args.decoration, null);
  assert.equal(
    TextField({ decoration: signal(decoration).bind }).args.decoration.kind,
    'binding',
  );
});

test('Theme binds whole Dart values and queries only the supplied real context', () => {
  const { api, calls } = transport;
  const seed = Color(0xff315cba);
  const scheme = ColorScheme.fromSeed({ seedColor: seed, brightness: Brightness.dark });
  assert.deepEqual(calls.at(-1).descriptor.args, {
    seedColor: seed,
    brightness: Brightness.dark,
  });
  const textTheme = TextTheme({ titleLarge: TextStyle({ fontSize: 20 }) });
  const data = ThemeData({ colorScheme: scheme, textTheme });
  assert.equal(data.colorScheme, scheme);
  data.copyWith({ textTheme: null });
  assert.equal(calls.at(-1).member, 'copyWith');
  assert.ok(calls.at(-1).args.includes(null));
  const selected = signal(data);
  const child = Text('Child');
  assert.equal(Theme({ data: selected.bind, child }).args.data, selected.bind);
  assert.throws(() => Theme({ child }), /Missing required/);
  assert.throws(() => ThemeData({ colorScheme: selected.bind }), /bind/i);
  assert.throws(() => ColorScheme.fromSeed({}), /Missing required/);
  assert.throws(() => ThemeData({ inputDecorationTheme: null }), /Unsupported/);
  const context = api.context(
    'flax.core/flutter#type:BuildContext',
    501,
  );
  let queries = 0;
  globalThis.__flaxCall = (version, type, method, handle) => {
    assert.equal(version, 20);
    assert.match(type, /#type:Theme$/);
    assert.equal(method, 'of');
    assert.equal(handle, 501);
    queries++;
    return data;
  };
  assert.equal(Theme.of(context), data);
  assert.equal(queries, 1);
  api.releaseContext(501);
  assert.throws(() => Theme.of(context), /unmounted/i);
  assert.equal(queries, 1);
});
