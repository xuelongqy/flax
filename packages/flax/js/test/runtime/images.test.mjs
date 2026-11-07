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

test('ImageData preserves fixed-length pixel views and validates their real storage', () => {
  const pixels = new Uint8ClampedArray(new ArrayBuffer(12), 4, 4);
  assert.equal(new ImageData(pixels, 1).data, pixels);
  const shared = new Uint8ClampedArray(new SharedArrayBuffer(4));
  Object.defineProperty(shared, 'buffer', { value: new ArrayBuffer(4) });
  assert.throws(() => new ImageData(shared, 1), TypeError);
  const resizable = new Uint8ClampedArray(new ArrayBuffer(4, { maxByteLength: 8 }));
  assert.throws(() => new ImageData(resizable, 1), TypeError);
  const wrongType = new Uint8Array(4);
  Object.setPrototypeOf(wrongType, Uint8ClampedArray.prototype);
  assert.throws(() => new ImageData(wrongType, 1), TypeError);
  const wrongSize = new Uint8ClampedArray(8);
  Object.defineProperty(wrongSize, 'length', { value: 4 });
  assert.throws(() => new ImageData(wrongSize, 1, 1), { name: 'IndexSizeError' });
});

test('ImageData serialization uses private metadata and the original view graph', () => {
  const { host } = environment();
  const data = new Uint8ClampedArray(new ArrayBuffer(12), 4, 4);
  data.set([12, 34, 56, 255]);
  const image = new ImageData(data, 1);
  for (const key of ['data', 'width', 'height', 'colorSpace', 'pixelFormat'])
    Object.defineProperty(image, key, {
      get() {
        throw Error('public getter');
      },
    });
  const prepared = host.prepareTransfers([]);
  const record = prepared.serialize(image);
  const cloned = structuredClone({ record, data, buffer: data.buffer });
  const restored = host.deserialize(cloned.record);
  assert.equal(restored.data, cloned.data);
  assert.equal(restored.data.buffer, cloned.buffer);
  assert.equal(restored.data.byteOffset, 4);
  assert.equal(restored.width, 1);
  assert.deepEqual(Array.from(host.read(image).data), [12, 34, 56, 255]);
  host.close();
});

test('bitmap serialization owns pixels and native detachment invalidates the sender', () => {
  const a = environment(),
    b = environment();
  const bitmap = a.host.fromPixels({
    width: 1,
    height: 1,
    data: new Uint8Array([4, 5, 6, 255]),
  });
  a.host.read(bitmap).data.fill(0);
  const prepared = a.host.prepareTransfers([bitmap, new ArrayBuffer(3)]);
  const record = prepared.serialize(bitmap);
  prepared.validate();
  assert.equal(bitmap.width, 1, 'Preparation must not consume ownership');
  const packet = structuredClone(record, { transfer: prepared.buffers });
  assert.equal(bitmap.width, 0, 'Detachment is authoritative before sweep');
  assert.throws(() => a.host.read(bitmap), { name: 'InvalidStateError' });
  const receiver = b.host.deserialize(packet);
  a.host.sweep();
  a.host.close();
  assert.deepEqual(Array.from(b.host.read(receiver).data), [4, 5, 6, 255]);
  receiver.close();
  b.host.close();
});

test('bitmap precommit validates transfer-only entries without collection hooks', () => {
  const { host } = environment();
  const bitmap = host.fromPixels({ width: 1, height: 1, data: new Uint8Array(4) });
  const bytes = new ArrayBuffer(8);
  const prepared = host.prepareTransfers([bitmap, bytes]);
  const get = WeakMap.prototype.get,
    iterator = Array.prototype[Symbol.iterator];
  let hooks = 0;
  try {
    WeakMap.prototype.get = Array.prototype[Symbol.iterator] = () => {
      hooks++;
      throw Error('hook');
    };
    prepared.validate();
  } finally {
    WeakMap.prototype.get = get;
    Array.prototype[Symbol.iterator] = iterator;
  }
  assert.equal(hooks, 0);
  bitmap.close();
  assert.throws(prepared.validate, { name: 'DataCloneError' });
  assert.equal(bytes.byteLength, 8);
  assert.equal(prepared.buffers[0].byteLength, 4);
  host.close();
});

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

test('closing between codec settlement and promise delivery cannot create a bitmap', async () => {
  const { host, calls } = environment();
  const pending = host.create(new ImageData(1, 1));
  const id = calls.at(-1)[1];
  host.settle(id, true, { id: 19, width: 1, height: 1, pixels: new ArrayBuffer(4) });
  host.close();
  await assert.rejects(pending, { name: 'InvalidStateError' });
  assert.equal(
    calls.some((call) => call[0] === 'imageActivity' && call[1]),
    false,
  );
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
