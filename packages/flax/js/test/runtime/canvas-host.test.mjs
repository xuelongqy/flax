import assert from 'node:assert/strict';
import test from 'node:test';
import { setImmediate } from 'node:timers/promises';
import { installCanvasHost } from '../../dist/host/canvas.js';

function environment() {
  const global = { __flaxNativeWorker: { canvasTransferVersion: 1 } };
  const calls = [];
  const host = installCanvasHost(
    global,
    (operation, ...args) => {
      calls.push([operation, ...args]);
      if (operation === 'canvasCreate') return {};
    },
    EventTarget,
    DOMException,
  );
  return { global, host, calls };
}

function transferProvider(host) {
  host.registerTransfers({
    adopt() {},
    create: (_canvas, _target, width, height) =>
      new Uint32Array([width, height]).buffer,
    dimensions: (token) => Array.from(new Uint32Array(token)),
    resize: (token, width, height) => new Uint32Array(token).set([width, height]),
  });
}

test('HTML canvas transfers rendering while retaining its placement and input target', () => {
  const { global, host } = environment();
  transferProvider(host);
  const html = new global.HTMLCanvasElement();
  const target = host.target(html);
  const canvas = html.transferControlToOffscreen();
  assert.equal(host.target(canvas), target);
  assert.equal(canvas.width, 300);
  assert.equal(html.getContext('webgpu'), null);
  assert.throws(
    () => {
      html.width = 42;
    },
    { name: 'InvalidStateError' },
  );
  assert.throws(() => html.transferControlToOffscreen(), { name: 'InvalidStateError' });
  canvas.width = 128;
  assert.equal(canvas.width, 128);
  assert.equal(html.width, 300);
});

test('a retained offscreen view keeps its shared HTML target alive until the last owner is collected', async () => {
  assert.equal(typeof globalThis.gc, 'function', 'Run with --expose-gc');
  const { global, host, calls } = environment();
  transferProvider(host);
  const releases = () => calls.filter(([operation]) => operation === 'canvasRelease');
  host.register('2d', (canvas, target) => {
    assert.equal(
      releases().some(([, released]) => released === target),
      false,
    );
    return renderer(canvas);
  });
  let view = {};
  const reference = (() => {
    const html = new global.HTMLCanvasElement();
    const canvas = html.transferControlToOffscreen();
    host.hold(view, canvas);
    return new WeakRef(canvas);
  })();
  async function collect() {
    for (let round = 0; round < 10; round++) {
      await setImmediate();
      globalThis.gc();
    }
  }
  await collect();
  host.present();
  assert.equal(releases().length, 0);
  assert.equal(host.held(view).getContext('2d').canvas, host.held(view));

  view = undefined;
  await collect();
  assert.equal(reference.deref(), undefined);
  host.present();
  host.present();
  assert.equal(releases().length, 1);
  host.close();
  host.present();
  assert.equal(releases().length, 1);
});

test('canvas transfer revalidates context ownership before detaching any buffer', () => {
  const { global, host } = environment();
  transferProvider(host);
  host.register('webgpu', (canvas) => renderer(canvas));
  const canvas = new global.OffscreenCanvas(8, 4);
  const bytes = new ArrayBuffer(4);
  const prepared = host.prepareTransfers([canvas, bytes]);
  canvas.getContext('webgpu');
  assert.throws(prepared.validate, { name: 'InvalidStateError' });
  assert.equal(canvas.width, 8);
  assert.equal(bytes.byteLength, 4);
  assert.equal(prepared.buffers[0].byteLength, 8);
});

test('canvas precommit validation invokes no replaceable collection methods', () => {
  const { global, host } = environment();
  transferProvider(host);
  const prepared = host.prepareTransfers([new global.OffscreenCanvas(8, 4)]);
  const keys = Map.prototype.keys,
    get = WeakMap.prototype.get;
  let hooks = 0;
  try {
    Map.prototype.keys = WeakMap.prototype.get = () => {
      hooks++;
      throw Error('Application hook');
    };
    prepared.validate();
  } finally {
    Map.prototype.keys = keys;
    WeakMap.prototype.get = get;
  }
  assert.equal(hooks, 0);
});

test('offscreen transfer preserves native dimensions and detaches the source', () => {
  const { global, host, calls } = environment();
  transferProvider(host);
  const canvas = new global.OffscreenCanvas(8, 4);
  assert.throws(() => host.prepareTransfers([]).serialize(canvas), {
    name: 'DataCloneError',
  });
  const prepared = host.prepareTransfers([canvas]);
  canvas.width = 17;
  prepared.validate();
  const record = structuredClone(prepared.serialize(canvas), {
    transfer: prepared.buffers,
  });
  assert.equal(canvas.width, 0);
  assert.equal(canvas.height, 0);
  assert.throws(() => canvas.getContext('webgpu'), { name: 'InvalidStateError' });
  const received = host.restoreTransfer(record[1]);
  assert.deepEqual(calls.at(-1), ['canvasCreate', 17, 4]);
  assert.equal(received.width, 17);
  assert.equal(received.height, 4);
});

test('Worker canvas installation supplies OffscreenCanvas without DOM or Dart peers', () => {
  const global = { __flaxNativeWorker: { canvasTransferVersion: 1 } };
  const host = installCanvasHost(
    global,
    (operation) => {
      throw new Error(operation);
    },
    EventTarget,
    DOMException,
    Event,
    true,
  );
  transferProvider(host);
  const canvas = new global.OffscreenCanvas(8, 4);
  canvas.width = 17;
  assert.equal(canvas.width, 17);
  assert.equal(global.document, undefined);
  assert.equal(global.HTMLCanvasElement, undefined);
  assert.equal(canvas.style, undefined);
});

function renderer(canvas, resized = []) {
  const context = { canvas };
  return {
    getContext: () => context,
    resize: (width, height) => resized.push([width, height]),
    convertToBlob: async () => ({
      type: 'image/png',
      arrayBuffer: async () => new ArrayBuffer(0),
    }),
    transferToImageBitmap: () => ({
      width: canvas.width,
      height: canvas.height,
      close() {},
    }),
  };
}

test('Core owns canvas identity, dimensions and unsupported context selection', () => {
  const { global, host, calls } = environment();
  const canvas = new global.OffscreenCanvas(64.9, 32);
  assert.ok(canvas instanceof EventTarget);
  assert.equal(canvas.width, 64);
  assert.equal(canvas.height, 32);
  assert.equal(canvas.getContext('2d'), null);
  assert.equal(canvas.getContext('webgpu'), null);
  assert.equal(canvas.getContext('webgl'), null);
  assert.throws(() => canvas.getContext('unknown'), TypeError);
  assert.throws(() => new global.OffscreenCanvas(-1, 2), TypeError);
  canvas.width = 16;
  assert.equal(canvas.width, 16);
  assert.deepEqual(calls.at(-1), ['canvasResize', host.target(canvas), 16, 32]);
});

test('global-only construction loads its native target wrapper before exposure', () => {
  const { global, calls } = environment();
  global.__flaxModules = {
    require(name) {
      calls.push(['require', name]);
    },
  };
  new global.OffscreenCanvas(8, 8);
  assert.deepEqual(calls.slice(0, 2), [
    ['require', '@flax/core/navigation'],
    ['canvasCreate', 8, 8],
  ]);
});

test('independent providers keep one constructor and lock only a successful context', () => {
  for (const modes of [[], ['2d'], ['webgpu'], ['2d', 'webgpu'], ['webgpu', '2d']]) {
    const { global, host } = environment();
    const constructor = global.OffscreenCanvas;
    const resized = [];
    for (const mode of modes)
      host.register(mode, (canvas) => renderer(canvas, resized));
    assert.equal(global.OffscreenCanvas, constructor);
    const canvas = new constructor(64, 32);
    const first = modes[0];
    if (!first) continue;
    const context = canvas.getContext(first);
    assert.equal(context.canvas, canvas);
    assert.equal(canvas.getContext(first, { ignored: true }), context);
    assert.equal(canvas.getContext(first === '2d' ? 'webgpu' : '2d'), null);
    canvas.width = canvas.width;
    assert.deepEqual(resized, [[64, 32]]);
    assert.equal(canvas.getContext(first), context);
    assert.throws(() => host.register(first, () => renderer(canvas)), TypeError);
  }
  const { global, host } = environment();
  host.register('2d', (canvas) => ({ ...renderer(canvas), getContext: () => null }));
  host.register('webgpu', (canvas) => renderer(canvas));
  const canvas = new global.OffscreenCanvas(8, 8);
  assert.equal(canvas.getContext('2d'), null);
  assert.equal(canvas.getContext('webgpu').canvas, canvas);
});

test('image export does not select 2D and sessions retire independently', async () => {
  const a = environment(),
    b = environment();
  a.host.register('2d', (canvas) => renderer(canvas));
  a.host.register('webgpu', (canvas) => renderer(canvas));
  const canvas = new a.global.OffscreenCanvas(4, 4);
  assert.equal((await canvas.convertToBlob()).type, 'image/png');
  assert.throws(() => canvas.transferToImageBitmap(), { name: 'InvalidStateError' });
  assert.equal(canvas.getContext('webgpu').canvas, canvas);
  assert.throws(() => b.host.target(canvas), TypeError);
  const view = {};
  a.host.hold(view, canvas);
  assert.equal(a.host.held(view), canvas);
  a.host.close();
  assert.throws(() => canvas.getContext('webgpu'), { name: 'InvalidStateError' });
  assert.throws(() => new a.global.OffscreenCanvas(1, 1), {
    name: 'InvalidStateError',
  });
  assert.equal(new b.global.OffscreenCanvas(2, 3).height, 3);
});
