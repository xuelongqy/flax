import assert from 'node:assert/strict';
import test from 'node:test';
import { installCanvasHost } from '../../dist/host/canvas.js';

function environment() {
  const global = {};
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
