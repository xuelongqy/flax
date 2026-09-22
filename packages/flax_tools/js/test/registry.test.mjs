import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createFlaxModuleRegistry } from '../src/registry.mjs';

const metadata = (name, dependencies = {}) => ({
  specifier: name,
  owner: name,
  version: '1.0.0',
  artifact: name,
  dependencies,
});

test('cyclic factories initialize once and observe the same published export objects', () => {
  const registry = createFlaxModuleRegistry();
  const left = metadata('left', { right: '1.0.0' });
  const right = metadata('right', { left: '1.0.0' });
  let calls = 0;
  registry.define(left, (_module, exports, require) => {
    calls++;
    exports.identity = {};
    exports.other = require('right');
  });
  registry.define(right, (_module, exports, require) => {
    calls++;
    exports.other = require('left');
  });
  registry.seal([left, right]);
  const result = registry.require('left');
  assert.equal(result.other.other, result);
  assert.equal(registry.require('right'), result.other);
  assert.equal(calls, 2);
});

test('initialization failure remains failed and does not expose partially initialized exports', () => {
  const registry = createFlaxModuleRegistry();
  const entry = metadata('failure');
  let calls = 0;
  registry.define(entry, (_module, exports) => {
    calls++;
    exports.partial = true;
    throw new Error('fixture failure');
  });
  registry.seal([entry]);
  let failure;
  try {
    registry.require('failure');
  } catch (error) {
    failure = error;
  }
  assert.match(failure.message, /initialization failed: failure/);
  assert.match(failure.cause.message, /fixture failure/);
  assert.throws(
    () => registry.require('failure'),
    (error) => error === failure,
  );
  assert.equal(calls, 1);
});

test('registration is closed before execution and rejects duplicate ownership', () => {
  const registry = createFlaxModuleRegistry();
  const entry = metadata('a');
  registry.define(entry, () => {});
  assert.throws(() => registry.require('a'), /not been sealed/);
  assert.throws(
    () => registry.define({ ...entry, specifier: 'b' }, () => {}),
    /Duplicate Flax module owner/,
  );
  registry.seal([entry]);
  assert.throws(
    () => registry.define(metadata('b'), () => {}),
    /registration is sealed/,
  );
  registry.dispose();
  assert.throws(() => registry.require('a'), /FlaxSessionClosed/);
});

test('undeclared and incompatible dependency edges cannot initialize a factory', () => {
  const registry = createFlaxModuleRegistry();
  const entry = metadata('a', { b: '2.0.0' });
  const dependency = metadata('b');
  registry.define(entry, () => assert.fail('must not run'));
  registry.define(dependency, () => {});
  assert.throws(() => registry.seal([entry, dependency]), /Incompatible Flax module/);
});
