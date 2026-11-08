import assert from 'node:assert/strict';
import test from 'node:test';
import { convert, nativeEnum } from '../dist/convert.js';
const kinds = new WeakMap();
const resource = (value, kind) => {
  if (!value || kinds.get(value) !== kind) throw new TypeError(`Expected ${kind}`);
  return 1n;
};
test('required WebGPU fields and integer ranges fail before native calls', () => {
  for (const input of [
    undefined,
    null,
    {},
    { size: 4 },
    { size: -1, usage: 1 },
    { size: Infinity, usage: 1 },
    { size: 4n, usage: 1 },
  ])
    assert.throws(() => convert('GPUBufferDescriptor', input, resource), TypeError);
  assert.deepEqual(
    convert('GPUBufferDescriptor', { size: '16', usage: 4, ignored: 1 }, resource),
    { label: '', size: 16, usage: 4, mappedAtCreation: false },
  );
});
test('opaque resources reject raw pointers and foreign objects', () => {
  for (const value of [1n, {}, null])
    assert.throws(() => convert('GPUBindingResource', value, resource), TypeError);
  const buffer = {};
  kinds.set(buffer, 'GPUBuffer');
  assert.deepEqual(convert('GPUBindingResource', buffer, resource), {
    buffer,
    offset: 0,
  });
});
test('external texture descriptors convert a branded VideoFrame in IDL member order', () => {
  const frame = {};
  kinds.set(frame, 'VideoFrame');
  const reads = [];
  const desc = convert(
    'GPUExternalTextureDescriptor',
    new Proxy(
      { source: frame },
      {
        get(value, key, receiver) {
          reads.push(key);
          return Reflect.get(value, key, receiver);
        },
      },
    ),
    resource,
  );
  assert.deepEqual(reads, ['label', 'colorSpace', 'source']);
  assert.deepEqual(desc, { label: '', colorSpace: 'srgb', source: frame });
  for (const source of [Object.create(frame), {}, 1n, null])
    assert.throws(
      () => convert('GPUExternalTextureDescriptor', { source }, resource),
      TypeError,
    );
  assert.throws(
    () =>
      convert(
        'GPUExternalTextureDescriptor',
        { source: frame, colorSpace: 'rec2020' },
        resource,
      ),
    TypeError,
  );

  const texture = {};
  kinds.set(texture, 'GPUExternalTexture');
  assert.equal(convert('GPUBindingResource', texture, resource), texture);
});
test('extent and color sequences convert iterators with bounded dimensions', () => {
  assert.deepEqual(convert('GPUExtent3D', new Set([32, 16]), resource), [32, 16]);
  assert.throws(() => convert('GPUExtent3D', [], resource), TypeError);
  assert.throws(() => convert('GPUExtent3D', [1, 2, 3, 4], resource), TypeError);
  assert.throws(() => convert('GPUColor', [1, 0, 0], resource), TypeError);
});
test('feature and limit records validate their values', () => {
  assert.throws(
    () =>
      convert(
        'GPUDeviceDescriptor',
        { requiredFeatures: ['imaginary-feature'] },
        resource,
      ),
    TypeError,
  );
  assert.throws(
    () =>
      convert(
        'GPUDeviceDescriptor',
        { requiredLimits: { maxBufferSize: -1 } },
        resource,
      ),
    TypeError,
  );
  assert.equal(
    convert(
      'GPUDeviceDescriptor',
      { requiredLimits: { maxBufferSize: 4096 } },
      resource,
    ).requiredLimits.maxBufferSize,
    4096,
  );
});

test('WebIDL numeric, string and record conversion preserves edge cases', () => {
  assert.equal(convert('unsigned long', -0.5, resource), 0);
  assert.throws(() => convert('unsigned short', 65536, resource), TypeError);
  assert.equal(convert('USVString', 'x\ud800', resource), 'x\ufffd');
  assert.throws(() => convert('float', 1e40, resource), TypeError);
  assert.throws(
    () => convert('record<DOMString, double>', { [Symbol()]: 1 }, resource),
    TypeError,
  );
});

test('texture swizzles validate their converted string before native encoding', () => {
  for (const swizzle of ['bgra', 'rrr1', '01rg', 1111])
    assert.equal(
      convert('GPUTextureViewDescriptor', { swizzle }, resource).swizzle,
      String(swizzle),
    );
  assert.equal(convert('GPUTextureViewDescriptor', {}, resource).swizzle, 'rgba');
  for (const swizzle of ['rgb', 'rgba0', 'RGBA', 'ɲgba', null, Symbol()])
    assert.throws(
      () => convert('GPUTextureViewDescriptor', { swizzle }, resource),
      TypeError,
    );
});

test('dictionary conversion creates own data properties despite inherited accessors', () => {
  const saved = Object.getOwnPropertyDescriptor(Object.prototype, 'label');
  for (const setter of [false, true]) {
    let reads = 0,
      writes = 0;
    const results = [];
    try {
      Object.defineProperty(Object.prototype, 'label', {
        configurable: true,
        get() {
          reads++;
          return 'inherited';
        },
        ...(setter
          ? {
              set() {
                writes++;
              },
            }
          : {}),
      });
      for (const input of [undefined, null, {}, { label: 'own' }])
        results.push(convert('GPUCommandEncoderDescriptor', input, resource));
    } finally {
      if (saved) Object.defineProperty(Object.prototype, 'label', saved);
      else delete Object.prototype.label;
    }
    assert.equal(reads, 1);
    assert.equal(writes, 0);
    assert.deepEqual(results, [
      { label: '' },
      { label: '' },
      { label: 'inherited' },
      { label: 'own' },
    ]);
    for (const result of results) {
      assert.equal(Object.getPrototypeOf(result), Object.prototype);
      assert.deepEqual(Object.getOwnPropertyDescriptor(result, 'label'), {
        value: result.label,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
  }
});

test('dictionary members read parents first and each dictionary in lexical order', () => {
  const reads = [];
  convert(
    'GPUTextureViewDescriptor',
    new Proxy(
      {},
      {
        get(value, key, receiver) {
          reads.push(key);
          return Reflect.get(value, key, receiver);
        },
      },
    ),
    resource,
  );
  assert.deepEqual(reads, [
    'label',
    'arrayLayerCount',
    'aspect',
    'baseArrayLayer',
    'baseMipLevel',
    'dimension',
    'format',
    'mipLevelCount',
    'swizzle',
    'usage',
  ]);
});

test('dictionary defaults recursively apply IDL members without prototype reads', () => {
  const saved = Object.getOwnPropertyDescriptor(Object.prototype, 'label');
  const savedCompare = Object.getOwnPropertyDescriptor(Object.prototype, 'compare');
  let reads = 0;
  try {
    Object.defineProperty(Object.prototype, 'label', {
      configurable: true,
      get() {
        reads++;
        return 'inherited';
      },
    });
    Object.defineProperty(Object.prototype, 'compare', {
      configurable: true,
      get() {
        reads++;
        return 'never';
      },
    });
    const implicit = convert('GPUDeviceDescriptor', undefined, resource);
    assert.equal(implicit.label, '');
    assert.equal(implicit.defaultQueue.label, '');
    const stencil = convert(
      'GPUDepthStencilState',
      { format: 'depth24plus' },
      resource,
    );
    assert.equal(stencil.stencilFront.compare, 'always');
    assert.equal(stencil.stencilBack.compare, 'always');
    assert.equal(reads, 0);
    const explicit = convert('GPUDeviceDescriptor', { defaultQueue: {} }, resource);
    assert.equal(explicit.label, 'inherited');
    assert.equal(explicit.defaultQueue.label, 'inherited');
    assert.equal(reads, 2);
  } finally {
    if (saved) Object.defineProperty(Object.prototype, 'label', saved);
    else delete Object.prototype.label;
    if (savedCompare) Object.defineProperty(Object.prototype, 'compare', savedCompare);
    else delete Object.prototype.compare;
  }
});

test('sequences require objects and read their iterator method once', () => {
  for (const value of ['', '12', { 0: 1, length: 1 }, { [Symbol.iterator]: 1 }])
    assert.throws(() => convert('sequence<GPUSize32>', value, resource), TypeError);
  let reads = 0;
  const iterable = {
    get [Symbol.iterator]() {
      reads++;
      return function* () {
        yield 2;
        yield 3;
      };
    },
  };
  assert.deepEqual(convert('GPUExtent3D', iterable, resource), [2, 3]);
  assert.equal(reads, 1);
});

test('sequence conversion follows WebIDL iteration without closing on failure', () => {
  const log = [];
  const invalid = {
    valueOf() {
      log.push('convert');
      return -1;
    },
  };
  const iterator = {
    next() {
      log.push('next');
      return { value: invalid, done: false };
    },
    return() {
      log.push('return');
      return { done: true };
    },
  };
  assert.throws(
    () =>
      convert('sequence<GPUSize32>', { [Symbol.iterator]: () => iterator }, resource),
    TypeError,
  );
  assert.deepEqual(log, ['next', 'convert']);
});

test('record enumeration interleaves descriptors, keys and value conversion', () => {
  const log = [];
  const input = new Proxy(
    { first: 1, second: 2 },
    {
      ownKeys(target) {
        log.push('keys');
        return Reflect.ownKeys(target);
      },
      getOwnPropertyDescriptor(target, key) {
        log.push('descriptor:' + key);
        return Reflect.getOwnPropertyDescriptor(target, key);
      },
      get(target, key) {
        log.push('value:' + key);
        if (key === 'first') delete target.second;
        return Reflect.get(target, key);
      },
    },
  );
  assert.deepEqual(convert('record<DOMString, double>', input, resource), { first: 1 });
  assert.deepEqual(log, [
    'keys',
    'descriptor:first',
    'value:first',
    'descriptor:second',
  ]);
});

test('union dictionaries accept callable objects and nullish defaults', () => {
  const origin = function () {};
  origin.x = 8;
  assert.deepEqual(convert('GPUOrigin2D', origin, resource), { x: 8, y: 0 });
  assert.deepEqual(convert('GPUOrigin2D', null, resource), { x: 0, y: 0 });
  assert.deepEqual(convert('GPUOrigin2D', undefined, resource), { x: 0, y: 0 });
  assert.throws(
    () => convert('GPUOrigin2D', { [Symbol.iterator]: 3 }, resource),
    TypeError,
  );
});

test('EnforceRange uses the WebIDL supported integer range and converts once', () => {
  assert.equal(Object.is(convert('GPUSignedOffset32', -0.5, resource), 0), true);
  assert.equal(convert('GPUSignedOffset32', -2147483648.9, resource), -2147483648);
  assert.throws(() => convert('GPUSignedOffset32', 2147483648, resource), TypeError);
  let conversions = 0;
  assert.equal(
    convert(
      'GPUSize64',
      {
        valueOf() {
          conversions++;
          return Number.MAX_SAFE_INTEGER;
        },
      },
      resource,
    ),
    Number.MAX_SAFE_INTEGER,
  );
  assert.equal(conversions, 1);
  for (const value of [2 ** 53, 2 ** 63, 2 ** 64, Infinity, NaN, 1n])
    assert.throws(() => convert('GPUSize64', value, resource), TypeError);
});

test('native enum conversion keeps exact IDL spelling and converts invalid input once', () => {
  assert.equal(typeof nativeEnum('WGPUIndexFormat', 'uint16'), 'number');
  for (const value of ['UINT16', 'uint-16', 'uint16!'])
    assert.throws(() => nativeEnum('WGPUIndexFormat', value), TypeError);
  let conversions = 0;
  assert.throws(
    () =>
      nativeEnum('WGPUIndexFormat', {
        toString() {
          conversions++;
          return 'invalid';
        },
      }),
    TypeError,
  );
  assert.equal(conversions, 1);
});
