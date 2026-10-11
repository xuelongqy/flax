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

function hotModule(version, options = {}) {
  return {
    id: '/counter.js',
    dependencies: options.dependencies ?? {},
    factory(module) {
      let Counter =
        version === 1
          ? class Counter {
              count = 7;
              label() {
                return `v1:${this.count}`;
              }
              removed() {
                return 'old';
              }
            }
          : class Counter {
              count = 7;
              label() {
                return `v${version}:${this.count}`;
              }
              added() {
                return 'new';
              }
            };
      Counter = registryForHotTest.dev.class('Counter', Counter, {
        fields: options.fields ?? ['count'],
        private: options.private ?? [],
        init: options.init ?? 'count = 7',
      });
      module.exports.Counter = Counter;
    },
  };
}

let registryForHotTest;

test('dev reload keeps constructor and instances while replacing prototype members', () => {
  const registry = (registryForHotTest = createFlaxModuleRegistry());
  registry.dev.load({ entry: '/counter.js', modules: [hotModule(1)] });
  const Counter = registry.dev.require('/counter.js').Counter;
  const instance = new Counter();

  registry.dev.apply({
    inventory: ['/counter.js'],
    modules: [hotModule(2)],
  });

  assert.equal(registry.dev.require('/counter.js').Counter, Counter);
  assert.equal(instance.label(), 'v2:7');
  assert.equal(instance.added(), 'new');
  assert.equal(instance.removed, undefined);
  assert.equal(instance.count, 7);
});

test('staged roots use new class behavior and failed updates restore live descriptors', () => {
  const registry = createFlaxModuleRegistry();
  let root;
  let staged;
  const previousStage = globalThis.__flaxHotStage;
  const previousCommit = globalThis.__flaxHotCommit;
  globalThis.__flaxHotStage = (value) => {
    staged = value;
  };
  globalThis.__flaxHotCommit = () => {
    root = staged;
  };
  const entry = (version, fail = false) => ({
    id: '/entry.js',
    dependencies: {},
    factory(module) {
      let Label = class Label {
        static value() {
          return `V${version}`;
        }
        value() {
          return Label.value();
        }
      };
      Label = registry.dev.class('Label', Label, {
        fields: [],
        private: [],
        init: '',
      });
      module.exports.Label = Label;
      const next = new Label().value();
      if (!registry.dev.captureRoot(next)) root = next;
      if (fail) throw new Error('staged failure');
    },
  });
  try {
    registry.dev.load({ entry: '/entry.js', modules: [entry(1)] });
    const Label = registry.dev.require('/entry.js').Label;
    const instance = new Label();
    assert.equal(root, 'V1');
    registry.dev.apply({ inventory: ['/entry.js'], modules: [entry(2)] });
    assert.equal(root, 'V2');
    assert.equal(registry.dev.require('/entry.js').Label, Label);
    assert.equal(instance.value(), 'V2');
    const method = Object.getOwnPropertyDescriptor(Label.prototype, 'value');
    const staticMethod = Object.getOwnPropertyDescriptor(Label, 'value');
    assert.throws(
      () => registry.dev.apply({ inventory: ['/entry.js'], modules: [entry(3, true)] }),
      /staged failure/,
    );
    assert.equal(root, 'V2');
    assert.deepEqual(Object.getOwnPropertyDescriptor(Label.prototype, 'value'), method);
    assert.deepEqual(Object.getOwnPropertyDescriptor(Label, 'value'), staticMethod);
    assert.equal(instance.value(), 'V2');
  } finally {
    globalThis.__flaxHotStage = previousStage;
    globalThis.__flaxHotCommit = previousCommit;
  }
});

test('class assignments after registration commit and roll back with the module', () => {
  const registry = createFlaxModuleRegistry();
  const entry = (version, fail = false) => ({
    id: '/entry.js',
    dependencies: {},
    factory(module) {
      let Label = class Label {
        value() {
          return 'base';
        }
      };
      Label = registry.dev.class('Label', Label, { fields: [], private: [], init: '' });
      Label.prototype.value = function () {
        return `V${version}`;
      };
      if (version !== 4)
        Label.prototype.extra = function () {
          return 'extra';
        };
      Label.version = version;
      module.exports.Label = Label;
      module.exports.text = new Label().value();
      if (fail) {
        Label.prototype.failed = function () {
          return 'failed';
        };
        Label.failed = true;
        throw new Error('staged failure');
      }
    },
  });
  registry.dev.load({ entry: '/entry.js', modules: [entry(1)] });
  const Label = registry.dev.require('/entry.js').Label;
  const instance = new Label();
  registry.dev.apply({ inventory: ['/entry.js'], modules: [entry(2)] });
  assert.equal(registry.dev.require('/entry.js').Label, Label);
  assert.equal(registry.dev.require('/entry.js').text, 'V2');
  assert.equal(instance.value(), 'V2');
  assert.equal(new Label().value(), 'V2');
  assert.equal(Label.version, 2);
  assert.throws(
    () => registry.dev.apply({ inventory: ['/entry.js'], modules: [entry(3, true)] }),
    /staged failure/,
  );
  assert.equal(instance.value(), 'V2');
  assert.equal(instance.failed, undefined);
  assert.equal(Label.failed, undefined);
  assert.equal(Label.version, 2);
  registry.dev.apply({ inventory: ['/entry.js'], modules: [entry(4)] });
  assert.equal(instance.value(), 'V4');
  assert.equal(instance.extra, undefined);
});

test('dev reload validates before mutating the live class', () => {
  const registry = (registryForHotTest = createFlaxModuleRegistry());
  registry.dev.load({ entry: '/counter.js', modules: [hotModule(1)] });
  const instance = new (registry.dev.require('/counter.js').Counter)();
  const changedFields = hotModule(2, { fields: ['count', 'other'] });

  assert.throws(
    () => registry.dev.apply({ inventory: ['/counter.js'], modules: [changedFields] }),
    /requires restart: class fields changed/,
  );
  assert.equal(instance.label(), 'v1:7');

  assert.throws(
    () =>
      registry.dev.apply({
        inventory: ['/counter.js'],
        modules: [hotModule(2, { init: 'count = 8' })],
      }),
    /requires restart: class initialization changed/,
  );
  assert.equal(instance.label(), 'v1:7');

  const failing = hotModule(2);
  failing.factory = () => {
    throw new Error('staged failure');
  };
  assert.throws(
    () => registry.dev.apply({ inventory: ['/counter.js'], modules: [failing] }),
    /initialization failed/,
  );
  assert.equal(instance.label(), 'v1:7');
});

test('dev reload rejects initializer inputs changed outside the class body', () => {
  const registry = createFlaxModuleRegistry();
  const dependency = (value) => ({
    id: '/dep.js',
    dependencies: {},
    factory(module) {
      module.exports.value = value;
    },
  });
  const entry = (context = 'const local = 1') => ({
    id: '/entry.js',
    dependencies: { './dep': '/dep.js' },
    factory(module, _exports, require) {
      const imported = require('./dep');
      let Counter = class Counter {
        count = imported.value;
      };
      Counter = registry.dev.class('Counter', Counter, {
        fields: ['count'],
        private: [],
        init: 'count = imported.value',
        context,
      });
      module.exports.Counter = Counter;
    },
  });
  registry.dev.load({ entry: '/entry.js', modules: [dependency(1), entry()] });
  const Counter = registry.dev.require('/entry.js').Counter;

  assert.throws(
    () =>
      registry.dev.apply({
        inventory: ['/dep.js', '/entry.js'],
        modules: [dependency(2), entry()],
      }),
    /requires restart: class initialization dependency changed/,
  );
  assert.equal(new Counter().count, 1);

  assert.throws(
    () =>
      registry.dev.apply({
        inventory: ['/dep.js', '/entry.js'],
        modules: [entry('const local = 2')],
      }),
    /requires restart: class initialization context changed/,
  );
});

test('dev reload rejects private brands, superclass changes, and removed modules', () => {
  const privateRegistry = (registryForHotTest = createFlaxModuleRegistry());
  privateRegistry.dev.load({
    entry: '/counter.js',
    modules: [hotModule(1, { private: ['secret'] })],
  });
  assert.throws(
    () =>
      privateRegistry.dev.apply({
        inventory: ['/counter.js'],
        modules: [hotModule(2, { private: ['secret'] })],
      }),
    /requires restart: private class changed/,
  );

  const registry = (registryForHotTest = createFlaxModuleRegistry());
  registry.dev.load({ entry: '/counter.js', modules: [hotModule(1)] });
  assert.throws(
    () => registry.dev.apply({ inventory: [], modules: [hotModule(2)] }),
    /requires restart: module removed/,
  );

  const changedBase = hotModule(2);
  changedBase.factory = (module) => {
    class Base {}
    class Counter extends Base {
      count = 7;
      label() {
        return 'changed';
      }
    }
    Counter = registry.dev.class('Counter', Counter, {
      fields: ['count'],
      private: [],
      init: 'count = 7',
    });
    module.exports.Counter = Counter;
  };
  assert.throws(
    () => registry.dev.apply({ inventory: ['/counter.js'], modules: [changedBase] }),
    /requires restart: class superclass changed/,
  );
});

test('dev reload rejects host module contract changes', () => {
  const registry = (registryForHotTest = createFlaxModuleRegistry());
  registry.dev.load({
    entry: '/counter.js',
    modules: [
      hotModule(1, {
        dependencies: { '/@id/@flax/flutter/widgets': '@flax/flutter/widgets' },
      }),
    ],
  });

  assert.throws(
    () =>
      registry.dev.apply({
        inventory: ['/counter.js'],
        modules: [
          hotModule(2, {
            dependencies: { '/@id/@flax/core/bindings': '@flax/core/bindings' },
          }),
        ],
      }),
    /requires restart: host module contract changed/,
  );
});

test('dev reload inherits root and page registrations from modules outside the batch', () => {
  const registry = createFlaxModuleRegistry();
  const entry = {
    id: '/entry.js',
    dependencies: { './root': '/root.js', './page': '/page.js' },
    factory(_module, _exports, require) {
      require('./root');
      require('./page');
    },
  };
  const root = {
    id: '/root.js',
    dependencies: {},
    factory() {
      registry.dev.captureRoot({ version: 1 });
    },
  };
  const page = {
    id: '/page.js',
    dependencies: {},
    factory() {
      registry.dev.capturePage(
        'page',
        () => 1,
        () => {},
      );
    },
  };
  registry.dev.load({ entry: '/entry.js', modules: [entry, root, page] });
  const previousStage = globalThis.__flaxHotStage;
  const previousCommit = globalThis.__flaxHotCommit;
  let stagedPages;
  globalThis.__flaxHotStage = (_root, pages) => {
    stagedPages = pages;
  };
  globalThis.__flaxHotCommit = () => {};
  try {
    assert.deepEqual(
      registry.dev.apply({
        inventory: ['/entry.js', '/page.js', '/root.js'],
        modules: [entry],
      }),
      { status: 'reloaded' },
    );
    assert.equal(stagedPages, '[]');
  } finally {
    globalThis.__flaxHotStage = previousStage;
    globalThis.__flaxHotCommit = previousCommit;
  }
});
