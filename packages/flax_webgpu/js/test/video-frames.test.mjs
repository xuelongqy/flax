import assert from 'node:assert/strict';
import test from 'node:test';
import { installVideoFrames } from '../dist/video-frames.js';
import { videoFrameAcquirer } from '../dist/video-frame.js';

test('video color metadata converts dictionaries and keeps readonly branded values', () => {
  const global = { DOMException };
  const installed = installVideoFrames(global, {}, () => 0n, []);
  try {
    const { VideoColorSpace } = global;
    const reads = [];
    const color = new VideoColorSpace(
      new Proxy(
        {
          primaries: 'bt709',
          transfer: 'iec61966-2-1',
          matrix: 'rgb',
          fullRange: 1,
        },
        {
          get: (input, key) => {
            reads.push(key);
            return input[key];
          },
        },
      ),
    );
    assert.deepEqual(reads, ['fullRange', 'matrix', 'primaries', 'transfer']);
    assert.deepEqual(color.toJSON(), {
      primaries: 'bt709',
      transfer: 'iec61966-2-1',
      matrix: 'rgb',
      fullRange: true,
    });
    assert.equal(Object.prototype.toString.call(color), '[object VideoColorSpace]');
    assert.throws(() => {
      color.fullRange = false;
    }, TypeError);
    assert.throws(() => color.toJSON.call(Object.create(color)), TypeError);
    color.toJSON().primaries = 'bt2020';
    assert.equal(color.primaries, 'bt709');
    assert.deepEqual(new VideoColorSpace(null).toJSON(), {
      primaries: null,
      transfer: null,
      matrix: null,
      fullRange: null,
    });
    for (const invalid of [1, 'bt709', { primaries: 'p3' }, { matrix: Symbol() }])
      assert.throws(() => new VideoColorSpace(invalid), TypeError);
  } finally {
    installed.close();
  }
});

test('frame clones retain independent handles and convert timing before native allocation', () => {
  const memory = globalThis.__flaxFfiMemory;
  globalThis.__flaxFfiMemory = {
    toString: (value) => value,
    finalizer: () => ({ attach: () => 1, detach() {} }),
  };
  const handles = new Set();
  let nextHandle = 1n;
  const allocate = () => {
    const handle = nextHandle++;
    handles.add(handle);
    return handle;
  };
  const native = {
    video_frame_acquire: allocate,
    video_frame_info: () =>
      JSON.stringify({
        codedWidth: 4,
        codedHeight: 2,
        displayWidth: 4,
        displayHeight: 2,
        timestamp: 9,
        duration: 10,
        format: 'NV12',
        colorSpace: {
          primaries: 'bt709',
          transfer: 'bt709',
          matrix: 'bt709',
          fullRange: false,
        },
      }),
    video_frame_clone: (source) => {
      assert(handles.has(source));
      return allocate();
    },
    video_frame_release: (handle) => {
      assert(handles.delete(handle));
    },
  };
  const global = { DOMException };
  const installed = installVideoFrames(global, native, () => 1n, [['movie', 'id']]);
  try {
    const { VideoFrame } = global;
    const frame = global[videoFrameAcquirer]('movie');
    const reads = [];
    const retimed = new VideoFrame(
      frame,
      new Proxy(
        { timestamp: -1.75, duration: -1 },
        {
          get(input, key) {
            reads.push(key);
            return input[key];
          },
        },
      ),
    );
    assert.deepEqual(reads, [
      'alpha',
      'displayHeight',
      'displayWidth',
      'duration',
      'flip',
      'metadata',
      'rotation',
      'timestamp',
      'visibleRect',
    ]);
    assert.equal(retimed.timestamp, -1);
    assert.equal(retimed.duration, Number(2n ** 64n - 1n));
    const wrapped = new VideoFrame(frame, { timestamp: 2 ** 63, duration: 2 ** 64 });
    assert.equal(wrapped.timestamp, -(2 ** 63));
    assert.equal(wrapped.duration, 0);
    wrapped.close();
    const zero = new VideoFrame(frame, { timestamp: Infinity, duration: NaN });
    assert.equal(zero.timestamp, 0);
    assert.equal(zero.duration, 0);
    zero.close();
    const clone = frame.clone();
    const colors = frame.colorSpace;
    assert.notEqual(clone, frame);
    let setterCalls = 0;
    const prototypeValue = Object.getOwnPropertyDescriptor(Object.prototype, 'value');
    for (const descriptor of [
      { value: 'inherited-cache-value', configurable: true },
      { get: () => undefined, set: () => setterCalls++, configurable: true },
    ]) {
      const sample = global[videoFrameAcquirer]('movie'),
        sampleClone = sample.clone();
      let first, second, cloned;
      try {
        Object.defineProperty(Object.prototype, 'value', descriptor);
        first = sample.colorSpace;
        second = sample.colorSpace;
        cloned = sampleClone.colorSpace;
      } finally {
        if (prototypeValue)
          Object.defineProperty(Object.prototype, 'value', prototypeValue);
        else Reflect.deleteProperty(Object.prototype, 'value');
      }
      assert(first instanceof global.VideoColorSpace);
      assert.equal(first, second);
      assert.equal(first, cloned);
      assert.equal(first.primaries, 'bt709');
      assert.equal(first.fullRange, false);
      sample.close();
      sampleClone.close();
      assert.equal(sample.colorSpace, first);
      assert.equal(sampleClone.colorSpace, first);
    }
    assert.equal(setterCalls, 0);
    const rect = frame.visibleRect;
    assert.notEqual(rect, frame.visibleRect);
    assert.deepEqual(rect.toJSON(), {
      x: 0,
      y: 0,
      width: 4,
      height: 2,
      top: 0,
      right: 4,
      bottom: 2,
      left: 0,
    });
    assert.throws(() => {
      rect.width = 0;
    }, TypeError);
    assert.throws(() => frame.clone.call(Object.create(frame)), TypeError);
    for (const init of [
      { timestamp: 1n },
      { duration: Symbol() },
      { rotation: Infinity },
      1,
    ])
      assert.throws(() => new VideoFrame(frame, init), TypeError);
    for (const init of [
      { visibleRect: {} },
      { displayWidth: 4 },
      { alpha: 'discard' },
      { flip: true },
    ])
      assert.throws(() => new VideoFrame(frame, init), { name: 'NotSupportedError' });
    assert.equal(handles.size, 3);
    frame.close();
    frame.close();
    assert.equal(frame.format, null);
    assert.equal(frame.codedRect, null);
    assert.equal(frame.visibleRect, null);
    assert.equal(frame.codedWidth, 0);
    assert.equal(frame.codedHeight, 0);
    assert.equal(frame.displayWidth, 0);
    assert.equal(frame.displayHeight, 0);
    assert.equal(frame.timestamp, 9);
    assert.equal(frame.duration, 10);
    assert.equal(frame.colorSpace, colors);
    for (const operation of [
      () => frame.clone(),
      () => frame.metadata(),
      () => new VideoFrame(frame),
    ])
      assert.throws(operation, { name: 'InvalidStateError' });
    assert.equal(clone.codedWidth, 4);
    assert.deepEqual(clone.metadata(), {});
    assert.notEqual(clone.metadata(), clone.metadata());
    clone.close();
    assert.equal(retimed.timestamp, -1);
    assert.equal(retimed.format, 'NV12');
    assert.equal(handles.size, 1);
  } finally {
    installed.close();
    globalThis.__flaxFfiMemory = memory;
  }
  assert.equal(handles.size, 0);
});

async function readbackFixture(format, run) {
  const ByteArray = Uint8Array,
    PlaneArray = Uint32Array;
  const byteLength = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Uint8Array.prototype),
    'byteLength',
  ).get;
  const memory = globalThis.__flaxFfiMemory;
  globalThis.__flaxFfiMemory = {
    toString: (value) => value,
    finalizer: () => ({ attach: () => 1, detach() {} }),
  };
  const handles = new Set();
  let next = 1n,
    calls = 0,
    result = 1;
  const allocate = () => {
    const handle = next++;
    handles.add(handle);
    return handle;
  };
  const native = {
    error: () => 'Read lock failed',
    video_frame_acquire: allocate,
    video_frame_clone: allocate,
    video_frame_release: (handle) => assert(handles.delete(handle)),
    video_frame_info: () =>
      JSON.stringify({
        codedWidth: 6,
        codedHeight: 4,
        displayWidth: 6,
        displayHeight: 4,
        timestamp: 0,
        duration: null,
        format,
        colorSpace: {
          primaries: 'bt709',
          transfer: 'bt709',
          matrix: 'bt709',
          fullRange: false,
        },
      }),
    video_frame_copy(handle, bytes, length, x, y, width, height, packed, planes) {
      calls++;
      assert(handles.has(handle));
      assert(bytes instanceof ByteArray);
      assert.equal(length, byteLength.call(bytes));
      assert(packed instanceof PlaneArray);
      assert.equal(byteLength.call(packed), planes * 8);
      if (result !== 1) return result;
      for (let plane = 0; plane < planes; plane++) {
        const sample = plane === 1 ? 2 : 1;
        const pixelBytes = format === 'BGRA' ? 4 : sample;
        const rowBytes = Math.ceil(width / sample) * pixelBytes;
        for (let row = 0; row < Math.ceil(height / sample); row++)
          for (let column = 0; column < rowBytes; column++)
            bytes[packed[2 * plane] + row * packed[2 * plane + 1] + column] =
              plane * 100 +
              (y / sample + row) * 24 +
              (x / sample) * pixelBytes +
              column;
      }
      return 1;
    },
  };
  const global = { DOMException };
  const installed = installVideoFrames(global, native, () => 1n, [['movie', 'id']]);
  const frame = global[videoFrameAcquirer]('movie');
  try {
    await run({
      frame,
      global,
      calls: () => calls,
      fail: () => {
        result = 0;
      },
    });
  } finally {
    installed.close();
    globalThis.__flaxFfiMemory = memory;
  }
  assert.equal(handles.size, 0);
}

test('original-format readback packs full frames and respects cropped padded/reordered planes', async () => {
  for (const format of ['NV12', 'BGRA'])
    await readbackFixture(format, async ({ frame }) => {
      const full = new Uint8Array(frame.allocationSize());
      const layout = await frame.copyTo(full);
      assert.deepEqual(
        layout,
        format === 'NV12'
          ? [
              { offset: 0, stride: 6 },
              { offset: 24, stride: 6 },
            ]
          : [{ offset: 0, stride: 24 }],
      );
      assert.equal(full.length, format === 'NV12' ? 36 : 96);
      const rect = { x: 2, y: 0, width: 3, height: 3 };
      const options = {
        rect,
        layout:
          format === 'NV12'
            ? [
                { offset: 16, stride: 5 },
                { offset: 1, stride: 6 },
              ]
            : [{ offset: 3, stride: 16 }],
      };
      const size = frame.allocationSize(options);
      assert.equal(size, format === 'NV12' ? 31 : 51);
      for (const storage of [
        new ArrayBuffer(size + 20),
        new SharedArrayBuffer(size + 20),
      ]) {
        const bytes = new Uint8Array(storage).fill(231);
        const view = new DataView(storage, 7, size);
        // Own properties cannot change a view's backing store, extent or origin.
        Object.defineProperties(view, {
          byteLength: { value: 1000 },
          byteOffset: { value: 0 },
          buffer: { value: new ArrayBuffer(1000) },
        });
        assert.deepEqual(await frame.copyTo(view, options), options.layout);
        const expected = new Uint8Array(storage.byteLength).fill(231);
        for (let plane = 0; plane < options.layout.length; plane++) {
          const sample = plane === 1 ? 2 : 1;
          const rowBytes =
            Math.ceil(rect.width / sample) * (format === 'BGRA' ? 4 : sample);
          for (let row = 0; row < Math.ceil(rect.height / sample); row++) {
            const source =
              layout[plane].offset +
              row * layout[plane].stride +
              (rect.x / sample) * (format === 'BGRA' ? 4 : sample);
            expected.set(
              full.subarray(source, source + rowBytes),
              7 + options.layout[plane].offset + row * options.layout[plane].stride,
            );
          }
        }
        assert.deepEqual(bytes, expected);
      }
      const clone = frame.clone();
      frame.close();
      const fromClone = new Uint16Array(
        new ArrayBuffer(full.length + 8),
        4,
        full.length / 2,
      );
      await clone.copyTo(fromClone);
      assert.deepEqual(new Uint8Array(fromClone.buffer, 4, full.length), full);
      clone.close();
    });
});

test('readback converts options in WebIDL order, rejects conversion requests and validates layouts', async () => {
  await readbackFixture('NV12', async ({ frame, calls }) => {
    const reads = [];
    const number = (key, value) => ({
      valueOf() {
        reads.push(`${key}:number`);
        return value;
      },
    });
    const options = new Proxy(
      {
        colorSpace: 'display-p3',
        layout: new Set([
          new Proxy(
            { offset: 0, stride: 3 },
            {
              get: (target, key) => {
                reads.push(`plane:${key}`);
                return target[key];
              },
            },
          ),
          { offset: 9, stride: 4 },
        ]),
        rect: new Proxy(
          { height: number('height', 3.9), width: 3.9, x: 2.9, y: 0.9 },
          {
            get: (target, key) => {
              reads.push(`rect:${key}`);
              return target[key];
            },
          },
        ),
      },
      {
        get: (target, key) => {
          reads.push(key);
          return target[key];
        },
      },
    );
    assert.equal(frame.allocationSize(options), 17);
    assert.deepEqual(reads, [
      'colorSpace',
      'format',
      'layout',
      'plane:offset',
      'plane:stride',
      'rect',
      'rect:height',
      'height:number',
      'rect:width',
      'rect:x',
      'rect:y',
    ]);
    for (const format of ['NV12', 'BGRA', 'RGBA', 'I420']) {
      assert.throws(() => frame.allocationSize({ format }), {
        name: 'NotSupportedError',
      });
      await assert.rejects(frame.copyTo(new Uint8Array(100), { format }), {
        name: 'NotSupportedError',
      });
    }
    const invalid = [
      1,
      { colorSpace: 'p3' },
      { format: 'nv12' },
      { format: Symbol() },
      { layout: {} },
      { layout: [{ stride: 6 }, { offset: 24, stride: 6 }] },
      {
        layout: [
          { offset: -1, stride: 6 },
          { offset: 24, stride: 6 },
        ],
      },
      {
        layout: [
          { offset: 0, stride: Infinity },
          { offset: 24, stride: 6 },
        ],
      },
      { layout: [{ offset: 0, stride: 6 }] },
      {
        layout: [
          { offset: 0, stride: 5 },
          { offset: 24, stride: 6 },
        ],
      },
      {
        layout: [
          { offset: 0, stride: 8 },
          { offset: 24, stride: 6 },
        ],
      },
      {
        layout: [
          { offset: 0xfffffff0, stride: 6 },
          { offset: 0, stride: 6 },
        ],
      },
      {
        layout: [
          { offset: 0, stride: 0xffffffff },
          { offset: 24, stride: 6 },
        ],
      },
      ...[
        {},
        { width: 0.9, height: 2 },
        { width: 1, height: Infinity },
        { x: 1, width: 2, height: 2 },
        { y: 1, width: 2, height: 2 },
        { x: -1, width: 2, height: 2 },
        { x: 6, width: 2, height: 2 },
      ].map((rect) => ({ rect })),
    ];
    for (const options of invalid) {
      assert.throws(() => frame.allocationSize(options), TypeError);
      await assert.rejects(frame.copyTo(new Uint8Array(100), options), TypeError);
    }
    await assert.rejects(frame.copyTo(new Uint8Array(35)), TypeError);
    const short = new ArrayBuffer(35);
    Object.defineProperty(short, 'byteLength', { value: 1000 });
    await assert.rejects(frame.copyTo(short), TypeError);
    await assert.rejects(frame.copyTo(Object.create(Uint8Array.prototype)), TypeError);
    await assert.rejects(
      frame.copyTo({ buffer: new ArrayBuffer(100), byteLength: 100 }),
      TypeError,
    );
    assert.equal(calls(), 0);
    const same = new Uint8Array(36);
    assert.deepEqual(await frame.copyTo(same, { colorSpace: 'display-p3' }), [
      { offset: 0, stride: 6 },
      { offset: 24, stride: 6 },
    ]);
    assert.equal(calls(), 1);
  });
});

test('copyTo rejects asynchronously and rechecks closed, detached and resized destinations after options', async () => {
  await readbackFixture('BGRA', async ({ frame, global, calls, fail }) => {
    const detached = new ArrayBuffer(96);
    const detachedTyped = new Uint8Array(detached),
      detachedData = new DataView(detached);
    structuredClone(detached, { transfer: [detached] });
    await assert.rejects(frame.copyTo(detached), TypeError);
    await assert.rejects(frame.copyTo(detachedTyped), TypeError);
    await assert.rejects(frame.copyTo(detachedData), TypeError);
    const destination = new ArrayBuffer(96);
    await assert.rejects(
      frame.copyTo(destination, {
        get rect() {
          structuredClone(destination, { transfer: [destination] });
          return undefined;
        },
      }),
      TypeError,
    );
    if (typeof ArrayBuffer.prototype.resize === 'function') {
      const resized = new ArrayBuffer(96, { maxByteLength: 192 });
      const view = new Uint8Array(resized, 8, 88);
      await assert.rejects(
        frame.copyTo(view, {
          get rect() {
            resized.resize(16);
            return undefined;
          },
        }),
        TypeError,
      );
    }
    if (typeof ArrayBuffer.prototype.transferToImmutable === 'function') {
      const immutable = new ArrayBuffer(96).transferToImmutable();
      await assert.rejects(frame.copyTo(immutable), TypeError);
      await assert.rejects(frame.copyTo(new Uint8Array(immutable)), TypeError);
    }
    await assert.rejects(
      global.VideoFrame.prototype.copyTo.call({}, new Uint8Array(96)),
      TypeError,
    );
    const closedByIterator = frame.clone();
    await assert.rejects(
      closedByIterator.copyTo(new Uint8Array(96), {
        layout: {
          *[Symbol.iterator]() {
            closedByIterator.close();
            yield { offset: 0, stride: 24 };
          },
        },
      }),
      { name: 'InvalidStateError' },
    );
    assert.equal(calls(), 0);
    if (typeof SharedArrayBuffer.prototype.grow === 'function') {
      const shared = new SharedArrayBuffer(8, { maxByteLength: 96 });
      const view = new Uint8Array(shared);
      await frame.copyTo(view, {
        get rect() {
          shared.grow(96);
          return undefined;
        },
      });
      assert.equal(calls(), 1);
    }
    const beforeFailure = calls();
    fail();
    await assert.rejects(frame.copyTo(new Uint8Array(96)), { name: 'OperationError' });
    assert.equal(calls(), beforeFailure + 1);
    await assert.rejects(
      frame.copyTo(new Uint8Array(96), {
        get rect() {
          frame.close();
          return undefined;
        },
      }),
      { name: 'InvalidStateError' },
    );
    assert.equal(calls(), beforeFailure + 1);
    assert.throws(() => frame.allocationSize(), { name: 'InvalidStateError' });
    await assert.rejects(frame.copyTo(new Uint8Array(96)), {
      name: 'InvalidStateError',
    });
  });
});

test('copyTo keeps native arguments independent of mutable prototypes and constructors', async () => {
  const prototype = Uint8Array.prototype;
  const original = Object.getOwnPropertyDescriptor(prototype, 'byteLength');
  const intrinsic = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(prototype),
    'byteLength',
  ).get;
  try {
    await readbackFixture('BGRA', async ({ frame, calls }) => {
      let reads = 0;
      const copied = frame.copyTo(new Uint8Array(96), {
        get rect() {
          Object.defineProperty(prototype, 'byteLength', {
            configurable: true,
            get() {
              if (++reads === 2) frame.close();
              return intrinsic.call(this);
            },
          });
          return undefined;
        },
      });
      await copied;
      assert.equal(reads, 0);
      assert.equal(calls(), 1);
    });
    await readbackFixture('BGRA', async ({ frame, calls }) => {
      await assert.rejects(
        frame.copyTo(new Uint8Array(1), {
          get rect() {
            Object.defineProperty(prototype, 'byteLength', {
              configurable: true,
              get: () => 96,
            });
            return undefined;
          },
        }),
        TypeError,
      );
      assert.equal(calls(), 0);
    });
  } finally {
    if (original) Object.defineProperty(prototype, 'byteLength', original);
    else Reflect.deleteProperty(prototype, 'byteLength');
  }
  await readbackFixture('BGRA', async ({ frame, calls }) => {
    const flatMap = Array.prototype.flatMap,
      ByteArray = Uint8Array,
      PlaneArray = Uint32Array;
    let constructorCalls = 0,
      packingCalls = 0;
    try {
      await frame.copyTo(new ByteArray(96), {
        get rect() {
          globalThis.Uint8Array = function () {
            constructorCalls++;
            return new ByteArray(1);
          };
          globalThis.Uint32Array = function () {
            constructorCalls++;
            return new PlaneArray(0);
          };
          Array.prototype.flatMap = function () {
            packingCalls++;
            frame.close();
            return [];
          };
          return undefined;
        },
      });
      assert.equal(calls(), 1);
      assert.equal(constructorCalls, 0);
      assert.equal(packingCalls, 0);
    } finally {
      globalThis.Uint8Array = ByteArray;
      globalThis.Uint32Array = PlaneArray;
      Array.prototype.flatMap = flatMap;
    }
  });
});
