import test from 'node:test';
import assert from 'node:assert/strict';
import { installImageHost, ImageData, ImageBitmap } from '../../dist/host/images.js';

const hasFloat16 = typeof Float16Array !== 'undefined';

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

test('ImageData allocates the requested storage and validates the supplied typed array', () => {
  const formats = [['rgba-unorm8', Uint8ClampedArray]];
  if (hasFloat16) formats.push(['rgba-float16', Float16Array]);
  for (const colorSpace of ['srgb', 'display-p3']) {
    for (const [pixelFormat, ArrayType] of formats) {
      const settings = { colorSpace, pixelFormat };
      const allocated = new ImageData(2, 1, settings);
      assert.equal(allocated.colorSpace, colorSpace);
      assert.equal(allocated.pixelFormat, pixelFormat);
      assert.ok(allocated.data instanceof ArrayType);
      assert.equal(allocated.data.byteLength, 8 * ArrayType.BYTES_PER_ELEMENT);

      const data = new ArrayType(new ArrayBuffer(32), 4, 8);
      const image = new ImageData(data, 1, undefined, settings);
      assert.equal(image.data, data);
      assert.equal(image.colorSpace, colorSpace);
      assert.equal(image.pixelFormat, pixelFormat);
      assert.equal(image.height, 2);
      assert.throws(() => new ImageData(data, 1, 1, settings), {
        name: 'IndexSizeError',
      });
    }
  }
  assert.throws(
    () =>
      new ImageData(new Uint8ClampedArray(8), 1, 1, { pixelFormat: 'rgba-float16' }),
    { name: 'InvalidStateError' },
  );
  if (hasFloat16)
    assert.throws(() => new ImageData(new Float16Array(4), 1), {
      name: 'InvalidStateError',
    });
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

test(
  'Float16 ImageData serialization retains P3 pixels and transferred buffer aliases',
  { skip: !hasFloat16 },
  () => {
    const { host } = environment();
    const buffer = new ArrayBuffer(20);
    const data = new Float16Array(buffer, 4, 4);
    data.set([1.5, -0.25, 0.03125, 0.5]);
    const image = new ImageData(data, 1, 1, {
      colorSpace: 'display-p3',
      pixelFormat: 'rgba-float16',
    });
    const source = host.read(image);
    assert.equal(source.colorSpace, 'display-p3');
    assert.equal(source.pixelFormat, 'rgba-float16');
    assert.equal(source.data.byteLength, 8);
    const prepared = host.prepareTransfers([buffer]);
    const record = prepared.serialize(image);
    prepared.validate();
    const cloned = structuredClone(
      { record, data, buffer },
      { transfer: prepared.buffers },
    );
    assert.equal(data.byteLength, 0);
    const restored = host.deserialize(cloned.record);
    assert.equal(restored.colorSpace, 'display-p3');
    assert.equal(restored.pixelFormat, 'rgba-float16');
    assert.ok(restored.data instanceof Float16Array);
    assert.equal(restored.data, cloned.data);
    assert.equal(restored.data.buffer, cloned.buffer);
    assert.equal(restored.data.byteOffset, 4);
    assert.deepEqual(Array.from(restored.data), [1.5, -0.25, 0.03125, 0.5]);
    host.close();
  },
);

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

test(
  'bitmap clone and transfer preserve Float16 pixels and P3 metadata',
  { skip: !hasFloat16 },
  () => {
    const a = environment();
    const b = environment();
    const components = new Float16Array([1.5, -0.25, 0.03125, 0.5]);
    const bitmap = a.host.bitmap({
      width: 1,
      height: 1,
      close() {},
      pixels: () => ({
        width: 1,
        height: 1,
        data: new Uint8Array(components.buffer),
        colorSpace: 'display-p3',
        pixelFormat: 'rgba-float16',
        premultiplied: true,
      }),
    });
    for (const transfer of [false, true]) {
      const prepared = a.host.prepareTransfers(transfer ? [bitmap] : []);
      const record = prepared.serialize(bitmap);
      prepared.validate();
      const packet = structuredClone(record, { transfer: prepared.buffers });
      assert.equal(bitmap.width, transfer ? 0 : 1);
      const receiver = b.host.deserialize(packet);
      const pixels = b.host.read(receiver);
      assert.equal(pixels.colorSpace, 'display-p3');
      assert.equal(pixels.pixelFormat, 'rgba-float16');
      assert.equal(pixels.premultiplied, true);
      assert.equal(pixels.data.byteLength, 8);
      assert.deepEqual(pixels.data, new Uint8Array(components.buffer));
      receiver.close();
    }
    a.host.close();
    b.host.close();
  },
);

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

test('ElementImage must transfer and keeps private pixels until ownership commits', async () => {
  const a = environment();
  const b = environment();
  const image = a.host.elementImage({
    width: 1,
    height: 1,
    data: Uint8Array.of(12, 34, 56, 255),
  });
  assert.ok(image instanceof a.global.ElementImage);
  assert.throws(() => new a.global.ElementImage(), TypeError);
  assert.equal(a.host.isSource(image), false);
  await assert.rejects(a.host.create(image), TypeError);
  assert.throws(() => a.host.prepareTransfers([]).serialize(image), {
    name: 'DataCloneError',
  });
  const buffer = new ArrayBuffer(3);
  const prepared = a.host.prepareTransfers([image, buffer]);
  const record = prepared.serialize(image);
  prepared.validate();
  a.host.readElementImage(image).data.fill(0);
  const packet = structuredClone(record, { transfer: prepared.buffers });
  assert.equal(buffer.byteLength, 0);
  assert.throws(() => a.host.readElementImage(image), { name: 'InvalidStateError' });
  assert.throws(() => a.host.prepareTransfers([image]), { name: 'DataCloneError' });
  const received = b.host.deserialize(packet);
  assert.ok(received instanceof b.global.ElementImage);
  assert.deepEqual([...b.host.readElementImage(received).data], [12, 34, 56, 255]);
  received.close();
  received.close();
  a.host.close();
  b.host.close();
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

test('createImageBitmap reads inherited and non-enumerable options once', async () => {
  const { host } = environment();
  const source = new ImageData(
    new Uint8ClampedArray([20, 40, 60, 255, 80, 100, 120, 255]),
    1,
    2,
    {
      colorSpace: 'display-p3',
    },
  );
  let orientationReads = 0,
    orientationConversions = 0,
    widthReads = 0;
  const options = Object.create({
    get imageOrientation() {
      orientationReads++;
      return {
        toString() {
          orientationConversions++;
          return 'flipY';
        },
      };
    },
  });
  Object.defineProperties(options, {
    resizeWidth: {
      get() {
        widthReads++;
        return 2;
      },
    },
    resizeHeight: { value: 2 },
  });
  const bitmap = await host.create(source, options);
  assert.deepEqual(
    [...host.read(bitmap).data],
    [80, 100, 120, 255, 80, 100, 120, 255, 20, 40, 60, 255, 20, 40, 60, 255],
  );
  assert.deepEqual([orientationReads, orientationConversions, widthReads], [1, 1, 1]);
  host.close();
});

test('createImageBitmap rejects ImageData detached during crop or option conversion', async () => {
  const { host } = environment();
  for (const duringCrop of [false, true]) {
    const source = new ImageData(1, 1, { colorSpace: 'display-p3' });
    const detach = () => {
      const buffer = source.data.buffer;
      if (buffer.byteLength) structuredClone(buffer, { transfer: [buffer] });
      return 2;
    };
    const pending = duringCrop
      ? host.create(source, { valueOf: detach }, 0, 1, 1)
      : host.create(source, {
          get resizeWidth() {
            return detach();
          },
        });
    await assert.rejects(pending, { name: 'InvalidStateError' });
  }
  host.close();
});

test('createImageBitmap snapshots Blob transform options before decoding', async () => {
  const { host, calls } = environment();
  let requestedWidth = 2,
    reads = 0;
  const pending = host.create(new Blob(['fixture']), {
    get resizeWidth() {
      reads++;
      return requestedWidth;
    },
  });
  requestedWidth = 4;
  await new Promise(setImmediate);
  const decode = calls.find(([, , operation]) => operation === 'decode');
  host.settle(decode[1], true, {
    id: 7,
    width: 1,
    height: 1,
    pixels: new ArrayBuffer(4),
  });
  await new Promise(setImmediate);
  const transform = calls.find(([, , operation]) => operation === 'transform');
  const width = JSON.parse(transform[4])[6];
  host.settle(transform[1], true, {
    id: 8,
    width,
    height: width,
    pixels: new ArrayBuffer(width * width * 4),
  });
  assert.equal((await pending).width, 2);
  assert.equal(reads, 1);
  host.close();
});

test('P3 bitmap pixelated resize uses the nearest integer multiple before smoothing', async () => {
  const { host, calls } = environment();
  const source = new ImageData(
    new Uint8ClampedArray([40, 80, 120, 255, 200, 160, 80, 255]),
    2,
    1,
    {
      colorSpace: 'display-p3',
    },
  );
  const pending = host.create(source, {
    resizeWidth: 5,
    resizeHeight: 1,
    resizeQuality: 'pixelated',
  });
  if (calls.at(-1)?.[0] === 'image')
    host.settle(calls.at(-1)[1], false, 'No wide-color codec');
  const bitmap = await pending;
  const pixels = host.read(bitmap);
  assert.equal(pixels.colorSpace, 'display-p3');
  assert.equal(pixels.pixelFormat, 'rgba-unorm8');
  assert.deepEqual(
    Array.from(pixels.data),
    [
      40, 80, 120, 255, 40, 80, 120, 255, 120, 120, 100, 255, 200, 160, 80, 255, 200,
      160, 80, 255,
    ],
  );
  host.close();
});

test(
  'Float16 bitmap transforms preserve negative and extended channels',
  { skip: !hasFloat16 },
  async () => {
    const { host, calls } = environment();
    const source = new ImageData(
      new Float16Array([1.5, -0.25, 0.125, 0.5, -0.5, 2, 0.25, 1]),
      1,
      2,
      {
        colorSpace: 'display-p3',
        pixelFormat: 'rgba-float16',
      },
    );
    const pending = host.create(source, 0, 0, 1, 2, {
      resizeWidth: 2,
      resizeHeight: 2,
      imageOrientation: 'flipY',
      premultiplyAlpha: 'premultiply',
    });
    if (calls.at(-1)?.[0] === 'image')
      host.settle(calls.at(-1)[1], false, 'No wide-color codec');
    const bitmap = await pending;
    const pixels = host.read(bitmap);
    assert.equal(pixels.colorSpace, 'display-p3');
    assert.equal(pixels.pixelFormat, 'rgba-float16');
    assert.equal(pixels.premultiplied, true);
    assert.deepEqual(
      Array.from(new Float16Array(pixels.data.buffer)),
      [
        -0.5, 2, 0.25, 1, -0.5, 2, 0.25, 1, 0.75, -0.125, 0.0625, 0.5, 0.75, -0.125,
        0.0625, 0.5,
      ],
    );
    host.close();
  },
);

test('the native bitmap bridge converts premultiplied P3 input to straight sRGB RGBA8', () => {
  const { host, calls } = environment();
  const bitmap = host.fromPixels({
    width: 1,
    height: 1,
    data: new Uint8Array([60, 90, 45, 128]),
    colorSpace: 'display-p3',
    premultiplied: true,
  });
  host.source(bitmap).native();
  const [, bytes, width, height] = calls.find(
    ([operation]) => operation === 'imagePixels',
  );
  assert.deepEqual([width, height], [1, 1]);
  assert.deepEqual(Array.from(bytes), [100, 181, 76, 128]);
  assert.deepEqual(Array.from(host.read(bitmap).data), [60, 90, 45, 128]);
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
