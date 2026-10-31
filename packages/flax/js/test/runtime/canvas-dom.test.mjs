import test from 'node:test';
import assert from 'node:assert/strict';
import { installCanvasHost } from '../../dist/host/canvas.js';
import { Event, EventTarget, DOMException } from '../../dist/host/events.js';

function environment() {
  const global = { DOMException },
    calls = [];
  EventTarget.installGlobal(global);
  const host = installCanvasHost(
    global,
    (operation, ...args) => {
      calls.push([operation, ...args]);
      if (operation === 'canvasCreate') return {};
    },
    EventTarget,
    DOMException,
    Event,
  );
  const layout = (canvas, change = {}) =>
    host.receive(host.target(canvas), {
      type: 'layout',
      left: 20,
      top: 30,
      width: 320,
      height: 180,
      connected: true,
      innerWidth: 800,
      innerHeight: 600,
      devicePixelRatio: 2,
      ...change,
    });
  return { global, host, calls, layout };
}

test('canvas factories share Core providers; geometry reads stay in JS and queries only return mounted canvases', () => {
  const { global: g, host, calls, layout } = environment();
  const canvas = g.document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
  canvas.id = 'scene';
  assert.ok(canvas instanceof g.HTMLCanvasElement);
  assert.ok(!(canvas instanceof g.OffscreenCanvas));
  assert.equal(canvas.width, 300);
  assert.equal(canvas.height, 150);
  assert.equal(g.document.querySelector('#scene'), null);
  let resized = 0;
  host.register('webgpu', (c) => ({
    getContext: () => ({ canvas: c }),
    resize: () => resized++,
    convertToBlob() {},
    transferToImageBitmap() {},
  }));
  const context = canvas.getContext('webgpu');
  assert.equal(context.canvas, canvas);
  layout(canvas);
  const at = calls.length;
  for (let i = 0; i < 1000; i++) {
    assert.equal(canvas.clientWidth, 320);
    assert.equal(canvas.getBoundingClientRect().bottom, 210);
  }
  assert.equal(calls.length, at, 'Geometry getters must not cross the bridge');
  assert.equal(g.devicePixelRatio, 2);
  assert.equal(g.innerWidth, 800);
  assert.equal(g.document.querySelector('#scene'), canvas);
  canvas.style.width = '640px';
  assert.equal(canvas.width, 300);
  canvas.width = 960;
  assert.equal(resized, 1);
  layout(canvas, { connected: false });
  assert.equal(g.document.getElementById('scene'), null);
  assert.throws(() => g.document.createElement('div'), { name: 'NotSupportedError' });
  assert.throws(() => g.document.querySelector('.anything'), {
    name: 'NotSupportedError',
  });
  assert.throws(() => (canvas.style.width = '100%'), { name: 'NotSupportedError' });
  assert.throws(() => {
    canvas.style.color = 'red';
  }, TypeError);
  assert.equal(
    'window' in g,
    false,
    'Canvas compatibility must not pretend to be a browser page',
  );
});

test('input keeps target identity, capture/bubble ordering and cancellation through document/defaultView', () => {
  const { global: g, host, layout } = environment(),
    canvas = new g.OffscreenCanvas(320, 180);
  layout(canvas);
  const order = [];
  for (const [target, name] of [
    [g, 'view'],
    [g.document, 'document'],
    [canvas, 'canvas'],
  ]) {
    for (const capture of [true, false])
      target.addEventListener(
        'wheel',
        (event) => {
          order.push(name + (capture ? '-capture' : '-bubble'));
          assert.equal(event.target, canvas);
          assert.equal(event.currentTarget, target);
          assert.deepEqual(event.composedPath(), [canvas, g.document, g]);
          if (name === 'canvas' && !capture) event.preventDefault();
        },
        { capture },
      );
  }
  assert.equal(
    host.receive(host.target(canvas), {
      type: 'wheel',
      bubbles: true,
      cancelable: true,
      deltaY: 12,
    }),
    true,
  );
  assert.deepEqual(order, [
    'view-capture',
    'document-capture',
    'canvas-capture',
    'canvas-bubble',
    'document-bubble',
    'view-bubble',
  ]);
});

test('pointer capture, focus and detach/session cleanup have real lifetime boundaries', () => {
  const { global: g, host, layout } = environment(),
    canvas = new g.OffscreenCanvas(320, 180);
  layout(canvas);
  const events = [];
  canvas.addEventListener('pointerdown', (event) =>
    canvas.setPointerCapture(event.pointerId),
  );
  for (const name of ['gotpointercapture', 'lostpointercapture', 'pointermove'])
    canvas.addEventListener(name, (event) => events.push([name, event.pointerId]));
  assert.throws(() => canvas.setPointerCapture(1), { name: 'NotFoundError' });
  const target = host.target(canvas);
  host.receive(target, { type: 'pointerdown', pointerId: 1, bubbles: true });
  assert.equal(canvas.hasPointerCapture(1), true);
  host.receive(target, { type: 'pointermove', pointerId: 1, bubbles: true });
  host.receive(target, { type: 'focus' });
  assert.equal(g.document.activeElement, canvas);
  layout(canvas, { connected: false });
  assert.equal(canvas.hasPointerCapture(1), false);
  assert.equal(g.document.activeElement, null);
  assert.deepEqual(events, [
    ['gotpointercapture', 1],
    ['pointermove', 1],
    ['lostpointercapture', 1],
  ]);
  let fired = 0;
  g.document.addEventListener('keydown', () => fired++);
  host.close();
  g.document.dispatchEvent(new Event('keydown'));
  assert.equal(fired, 0);
  assert.throws(() => canvas.getBoundingClientRect(), { name: 'InvalidStateError' });
});

test('canvas event properties and mouse compatibility share cancellation and lifetime', () => {
  const { global: g, host, layout } = environment(),
    canvas = new g.HTMLCanvasElement();
  layout(canvas);
  const seen = [];
  canvas.onmousedown = (e) => seen.push(e.type);
  canvas.onclick = (e) => seen.push(e.type);
  const target = host.target(canvas),
    mouse = {
      pointerId: 1,
      pointerType: 'mouse',
      button: 0,
      bubbles: true,
      cancelable: true,
    };
  host.receive(target, { ...mouse, type: 'pointerdown' });
  host.receive(target, { ...mouse, type: 'pointerup' });
  assert.deepEqual(seen, ['mousedown', 'click']);
  canvas.onpointerdown = (e) => e.preventDefault();
  host.receive(target, { ...mouse, type: 'pointerdown' });
  host.receive(target, { ...mouse, type: 'pointerup' });
  assert.deepEqual(
    seen,
    ['mousedown', 'click'],
    'Canceled pointerdown suppresses compatibility mouse events',
  );
  canvas.onclick = null;
  host.close();
});

test('canvas ResizeObserver batches committed geometry, physical pixels and disconnects', async () => {
  const { global: g, host, layout } = environment(),
    canvas = new g.HTMLCanvasElement();
  const seen = [],
    observer = new g.ResizeObserver((entries) => seen.push(entries));
  observer.observe(canvas, { box: 'device-pixel-content-box' });
  layout(canvas);
  layout(canvas, { width: 640, clientWidth: 320 });
  await Promise.resolve();
  assert.equal(seen.length, 1);
  const entry = seen[0][0];
  assert.equal(entry.target, canvas);
  assert.equal(entry.contentRect.width, 320);
  assert.deepEqual(entry.devicePixelContentBoxSize, [
    { inlineSize: 640, blockSize: 360 },
  ]);
  layout(canvas, { width: 640, clientWidth: 320, devicePixelRatio: 3 });
  await Promise.resolve();
  assert.equal(seen.length, 2);
  observer.disconnect();
  layout(canvas);
  await Promise.resolve();
  assert.equal(seen.length, 2);
  assert.throws(() => observer.observe({}, {}), TypeError);
  host.close();
});
