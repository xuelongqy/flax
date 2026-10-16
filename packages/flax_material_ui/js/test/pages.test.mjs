import assert from 'node:assert/strict';
import { test } from 'node:test';
import { signal } from '@flax/core';
import { Navigator, PageContent, Text } from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { MaterialPage } from '../dist/index.js';
import { objectHost } from './support/host.mjs';

const host = objectHost();

test('Page constructors expose immutable fields and preserve omitted defaults', () => {
  const key = ValueKey('details');
  const page = MaterialPage({ key, child: PageContent('details') });
  assert.equal(page.key, key);
  assert.equal(page.key.value, 'details');
  assert.equal(page.name, null);
  assert.equal(page.arguments, null);
  const descriptor = host.calls.find(
    (call) =>
      call.type === 'flax.material/material#type:MaterialPage' && call.descriptor,
  ).descriptor;
  assert.equal(Object.hasOwn(descriptor.args, 'onPopInvoked'), false);
  assert.ok(Object.isFrozen(page));
  assert.ok(Object.isFrozen(key));
  assert.throws(
    () => MaterialPage({ child: Text('x'), key: signal(key).bind }),
    /[Bb]ind/,
  );
  assert.throws(() => MaterialPage({ child: signal(Text('x')).bind }), /[Bb]ind/);
  const pages = signal([page]);
  const navigator = Navigator({ pages: pages.bind, onDidRemovePage: () => {} });
  assert.equal(navigator.args.pages, pages.bind);
});
