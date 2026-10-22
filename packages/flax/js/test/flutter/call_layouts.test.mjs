import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  FlaxProxyBase,
  bindingMethods,
  defineObject,
  defineProxyBase,
  invokeTopLevel,
} from '../../dist/runtime/bindings.js';

function host(t) {
  const previous = [
    globalThis.__flaxResolveOperation,
    globalThis.__flaxInvokeOperation,
    globalThis.__flaxPrepareProxy,
    globalThis.__flaxCreateObject,
    globalThis.__flaxBindPeer,
  ];
  t.after(() => {
    [
      globalThis.__flaxResolveOperation,
      globalThis.__flaxInvokeOperation,
      globalThis.__flaxPrepareProxy,
      globalThis.__flaxCreateObject,
      globalThis.__flaxBindPeer,
    ] = previous;
  });
  globalThis.__flaxBindPeer = () => {};
  const resolutions = [],
    calls = [],
    proxies = [];
  globalThis.__flaxResolveOperation = (...args) => resolutions.push(args) - 1;
  globalThis.__flaxInvokeOperation = (...args) => {
    calls.push(args);
    return args;
  };
  globalThis.__flaxPrepareProxy = (...args) => {
    proxies.push(args);
    return 0;
  };
  globalThis.__flaxCreateObject = (_, type) =>
    globalThis.__flaxBindings.object(type, 1);
  return { resolutions, calls, proxies };
}

test('call layouts resolve once per signature without keeping argument values', (t) => {
  const h = host(t);
  const before = [{ name: 'left' }, { name: 'right' }];
  const after = [{ name: 'left' }, { name: 'middle' }, { name: 'right' }];
  invokeTopLevel('fixture:layouts', [10, 20], before);
  invokeTopLevel('fixture:layouts', [30, 40], before);
  invokeTopLevel('fixture:layouts', [10, 15, 20], after);
  assert.equal(h.resolutions.length, 2);
  assert.equal(h.resolutions[0][5], before);
  assert.equal(h.resolutions[1][5], after);
  assert.deepEqual(h.calls, [
    [0, 0, 10, 20],
    [0, 0, 30, 40],
    [1, 0, 10, 15, 20],
  ]);
});

test('frozen proxy metadata supplies layout and forwards new Dart named options to super', (t) => {
  const h = host(t);
  const type = 'fixture:compatibility-proxy';
  const parameters = [
    { name: 'value', positional: true, required: true },
    { name: 'right' },
  ];
  const definition = {
    type,
    parameters: [],
    constructors: { '': [] },
    methods: { sum: parameters },
    getters: [],
    setters: [],
    superMembers: ['sum'],
    contextMembers: [],
  };
  defineObject(type, [], [], bindingMethods(type, 'object', definition.methods), []);
  class Native extends FlaxProxyBase {
    constructor() {
      super(definition, []);
    }
  }
  defineProxyBase(Native.prototype, definition);
  class First extends Native {
    sum(value, options) {
      return super.sum(value, options);
    }
  }
  class Last extends First {
    sum(value, options) {
      return super.sum(value, options);
    }
  }
  const instance = new Last();
  instance.sum(10, { right: 20, added: 30 });
  instance.sum(10, { right: 40, added: 50 });
  assert.equal(
    h.resolutions.length,
    1,
    'Repeated forwarded layouts reuse their operation',
  );
  assert.deepEqual(h.resolutions[0].slice(1, 5), [
    type,
    'object',
    'call',
    '@super:sum',
  ]);
  assert.deepEqual(h.resolutions[0][5], [...parameters, { name: 'added' }]);
  assert.deepEqual(h.calls[0].slice(2), [10, 20, 30]);
  assert.equal(h.proxies[0][2][0].length, 6, 'Native ABI rows do not change');
  assert.equal(h.proxies[0][3][0], parameters);
});
