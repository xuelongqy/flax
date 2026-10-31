import test from 'node:test';
import assert from 'node:assert/strict';
import { installImageHost, ImageData, ImageBitmap } from '../../dist/host/images.js';

function environment() {
  const global = { Blob },
    calls = [];
  const host = installImageHost(
    global,
    (...args) => calls.push(args),
    { isCanvas: () => false, register: () => () => {} },
    DOMException,
  );
  return { global, host, calls };
}

test('Core images share public constructors and enforce session ownership and close', () => {
  const a = environment(),
    b = environment();
  assert.equal(a.global.ImageData, ImageData);
  assert.equal(b.global.ImageBitmap, ImageBitmap);
  assert.throws(() => new ImageBitmap(), TypeError);
  const pixels = new Uint8ClampedArray([255, 0, 0, 128]);
  const data = new ImageData(pixels, 1, { colorSpace: 'srgb' });
  assert.equal(data.data, pixels);
  assert.equal(data.height, 1);
  const bitmap = a.host.fromPixels(a.host.read(data));
  pixels[0] = 0;
  assert.equal(
    a.host.read(bitmap).data[0],
    255,
    'Bitmap creation snapshots mutable pixels',
  );
  assert.throws(() => b.host.read(bitmap), TypeError);
  let closed = 0;
  a.host.onClose(bitmap, () => closed++);
  bitmap.close();
  bitmap.close();
  assert.equal(closed, 1);
  assert.equal(bitmap.width, 0);
  assert.throws(() => a.host.read(bitmap), { name: 'InvalidStateError' });
  a.host.close();
  b.host.close();
});

test('bitmap crop converts dimensions before dispatch and async results use Core ownership', async () => {
  const { host, calls } = environment();
  const source = new ImageData(2, 2);
  await assert.rejects(host.create(source, 0, 0, 0, 1), RangeError);
  const pending = host.create(source, 0, 0, 2, 2, {
    resizeWidth: 1.8,
    imageOrientation: 'flipY',
  });
  const [operation, id, kind, , options] = calls.at(-1);
  assert.equal(operation, 'image');
  assert.equal(kind, 'transform');
  const args = JSON.parse(options);
  assert.equal(args[6], 1);
  assert.equal(args[8], 1);
  host.settle(id, true, {
    id: 7,
    width: 1,
    height: 1,
    pixels: new Uint8Array([1, 2, 3, 4]).buffer,
  });
  const bitmap = await pending;
  assert.deepEqual(Array.from(host.read(bitmap).data), [1, 2, 3, 4]);
  bitmap.close();
  assert.deepEqual(calls.at(-1), ['imageClose', 7]);
  host.close();
});

test('session close rejects in-flight codecs and releases live backing resources once', async () => {
  const { host, calls } = environment();
  let released = 0;
  host.bitmap({
    width: 1,
    height: 1,
    pixels: () => ({ width: 1, height: 1, data: new Uint8Array(4) }),
    close: () => released++,
  });
  const pending = host.create(new ImageData(1, 1));
  const id = calls.at(-1)[1];
  host.close();
  host.close();
  await assert.rejects(pending, { name: 'InvalidStateError' });
  host.settle(id, true, {});
  assert.equal(released, 1);
});

test('canvas image resources decode data URLs and discard replaced sources', async () => {
  const { global: g, host, calls } = environment();
  g.atob = atob;
  g.TextEncoder = TextEncoder;
  const image = new g.Image();
  let loaded = 0;
  image.onload = () => loaded++;
  image.src = 'data:image/png;base64,AQID';
  const first = image.decode();
  await Promise.resolve();
  await Promise.resolve();
  const id = calls.at(-1)[1];
  image.src = 'data:image/png;base64,BAUG';
  const second = image.decode();
  await Promise.resolve();
  await Promise.resolve();
  const next = calls.at(-1)[1];
  host.settle(id, true, {
    id: 7,
    width: 1,
    height: 1,
    pixels: new Uint8Array(4).buffer,
  });
  host.settle(next, true, {
    id: 8,
    width: 1,
    height: 1,
    pixels: new Uint8Array([1, 2, 3, 255]).buffer,
  });
  await assert.rejects(first, { name: 'AbortError' });
  await second;
  assert.equal(image.complete, true);
  assert.equal(image.naturalWidth, 1);
  assert.equal(loaded, 1);
  assert.equal(host.read(image).data[2], 3);
  host.close();
});
