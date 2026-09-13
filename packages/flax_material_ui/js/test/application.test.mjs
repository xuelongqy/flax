import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Text } from '@flax/core/flutter';
import { MaterialApp, ThemeMode } from '../dist/index.js';
import { signal } from '@flax/core';

test('MaterialApp exposes selected ordinary bindings and preserves omission', () => {
  const home = Text('Home');
  const mode = signal(ThemeMode.dark);
  const app = MaterialApp({ home, themeMode: mode.bind });
  assert.equal(app.args.home, home);
  assert.equal(app.args.themeMode, mode.bind);
  assert.equal(Object.hasOwn(app.args, 'theme'), false);
  assert.equal(
    Object.hasOwn(MaterialApp({ home, theme: undefined }).args, 'theme'),
    false,
  );
  assert.equal(MaterialApp({ home, theme: null }).args.theme, null);
  assert.throws(
    () => MaterialApp({ home, key: signal(null).bind }),
    /Bind widget properties/,
  );
  assert.throws(() => MaterialApp({ home, routes: {} }), /Unsupported argument/);
});
