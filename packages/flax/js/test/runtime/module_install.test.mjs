import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  installBindingModule,
  constructObject,
  invokeTopLevel,
  bindingVersion,
} from '../../dist/runtime/bindings.js';

test('Core installs pinned tuples and rejects incompatible modules before use', () => {
  const capabilities = ['instance-checks', 'native-navigation-objects'];
  const module = installBindingModule('fixture/values', bindingVersion, capabilities);
  assert.equal(module.constructObject, constructObject);
  assert.equal(module.invokeTopLevel, invokeTopLevel);
  assert.deepEqual(module.requiredCapabilities, capabilities);
  assert.ok(Object.isFrozen(module));
  assert.ok(Object.isFrozen(module.requiredCapabilities));
  capabilities.push('shared-buffers');
  assert.equal(module.requiredCapabilities.length, 2);
  for (const tuple of [
    ['', bindingVersion, []],
    ['fixture', bindingVersion, []],
    ['fixture/a/b', bindingVersion, []],
    ['fixture/values', bindingVersion - 1, []],
    ['fixture/values', bindingVersion, ['unknown-capability']],
    ['fixture/values', bindingVersion, ['shared-buffers', 'instance-checks']],
    ['fixture/values', bindingVersion, ['instance-checks', 'instance-checks']],
    ['fixture/values', bindingVersion, [null]],
  ]) {
    assert.throws(() => installBindingModule(...tuple), TypeError);
  }
});
