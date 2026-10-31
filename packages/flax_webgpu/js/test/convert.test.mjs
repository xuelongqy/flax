import assert from 'node:assert/strict';
import test from 'node:test';
import { convert } from '../dist/convert.js';
const kinds = new WeakMap();
const resource = (value, kind) => {
  if (!value || kinds.get(value) !== kind) throw new TypeError(`Expected ${kind}`);
  return 1n;
};
test('required WebGPU fields and integer ranges fail before native calls', () => {
  for (const input of [
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
