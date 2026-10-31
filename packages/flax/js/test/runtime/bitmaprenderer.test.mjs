import assert from 'node:assert/strict';
import test from 'node:test';
import { installCanvasHost } from '../../dist/host/canvas.js';
import { installImageHost } from '../../dist/host/images.js';
function environment() {
  const global = { Blob },
    calls = [],
    images = new Map();
  let next = 1;
  const call = (name, ...args) => {
    calls.push([name, ...args]);
    if (name === 'canvasCreate') return {};
    if (name === 'imagePixels') {
      const id = next++;
      images.set(id, args[0]);
      return id;
    }
    if (name === 'imageNative') return { id: args[0] };
    if (name === 'imageClose') images.delete(args[0]);
  };
  const canvas = installCanvasHost(global, call, EventTarget, DOMException);
  const host = installImageHost(global, call, canvas, DOMException);
  return { global, host, canvas, calls, images };
}
test('bitmaprenderer consumes ownership and preserves backing dimensions independently of attributes', () => {
  const e = environment(),
    other = environment();
  try {
    const c = new e.global.OffscreenCanvas(10, 20),
      ctx = c.getContext('bitmaprenderer');
    assert.ok(ctx instanceof e.global.ImageBitmapRenderingContext);
    assert.equal(ctx.canvas, c);
    assert.equal(c.getContext('2d'), null);
    const input = e.host.fromPixels({
      width: 2,
      height: 1,
      data: new Uint8Array([100, 50, 20, 128, 255, 0, 0, 255]),
    });
    ctx.transferFromImageBitmap(input);
    assert.equal(input.width, 0);
    input.close();
    assert.equal(e.images.size, 1);
    assert.deepEqual([c.width, c.height], [10, 20]);
    assert.throws(() => other.host.transfer(e.canvas.backend(c).snapshot()), TypeError);
    const output = c.transferToImageBitmap();
    assert.deepEqual([output.width, output.height], [2, 1]);
    assert.deepEqual([...e.host.read(output).data], [100, 50, 20, 128, 255, 0, 0, 255]);
    output.close();
    assert.equal(e.images.size, 0);
    const blank = c.transferToImageBitmap();
    assert.deepEqual([blank.width, blank.height], [2, 1]);
    blank.close();
    ctx.transferFromImageBitmap(null);
    const reset = c.transferToImageBitmap();
    assert.deepEqual([reset.width, reset.height], [10, 20]);
    reset.close();
    c.width = 3;
    const resized = c.transferToImageBitmap();
    assert.deepEqual([resized.width, resized.height], [3, 20]);
    resized.close();
    assert.throws(() => ctx.transferFromImageBitmap(), TypeError);
    assert.throws(
      () => ctx.transferFromImageBitmap(input),
      (error) => error.name === 'InvalidStateError',
    );
  } finally {
    e.host.close();
    e.canvas.close();
    other.host.close();
    other.canvas.close();
  }
});
