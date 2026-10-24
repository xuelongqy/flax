import { Buffer } from 'buffer';
import { Buffer as NodeBuffer } from 'node:buffer';
import { Buffer as PackageBuffer } from 'buffer/';
import consumer from './buffer-consumer.cjs';

let checks = 0;
function check(condition, message) {
  if (!condition) throw new Error(message);
  checks++;
}
function rejects(action, message) {
  let error;
  try {
    action();
  } catch (caught) {
    error = caught;
  }
  check(
    error instanceof Error && (!message || String(error).includes(message)),
    message || 'Buffer rejects invalid input',
  );
}

export function runBufferProbe(importedBuffer = Buffer) {
  checks = 0;
  check(
    importedBuffer === Buffer &&
      Buffer === NodeBuffer &&
      Buffer === PackageBuffer &&
      Buffer === consumer.Buffer &&
      consumer.shared,
    'One Buffer for the selected entry and all ESM/CommonJS aliases',
  );
  check(consumer.encode('ABC') === 'QUJD', 'CommonJS npm-style consumer');
  const text = Buffer.from('Flax 中文 😀', 'utf8');
  check(
    text instanceof Uint8Array && Buffer.isBuffer(text),
    'Buffer is a genuine byte view',
  );
  check(!Buffer.isBuffer(new Uint8Array(4)), 'Plain Uint8Array is not a Buffer');
  check(text.toString() === 'Flax 中文 😀', 'UTF-8 round trip');
  check(Buffer.from('ABC').toString('hex') === '414243', 'Hex encoding');
  check(Buffer.from('QUJD', 'base64').toString() === 'ABC', 'Base64 decoding');
  check(
    Buffer.from('中文', 'utf16le').toString('utf16le') === '中文',
    'UTF-16LE round trip',
  );
  check(Buffer.byteLength('中文😀') === 10, 'Encoded byte length');
  const allocated = Buffer.alloc(8);
  check(
    allocated.every((byte) => byte === 0),
    'Zero-filled allocation',
  );
  allocated.writeUInt32LE(0x12345678, 0);
  allocated.writeUInt32BE(0x12345678, 4);
  check(allocated.toString('hex') === '7856341212345678', 'Integer endian writes');
  check(
    allocated.readUInt32LE(0) === allocated.readUInt32BE(4),
    'Integer endian reads',
  );
  const floats = Buffer.alloc(8);
  floats.writeDoubleLE(1.25);
  check(floats.readDoubleLE() === 1.25, 'Floating point helpers');
  check(
    Buffer.concat([Buffer.from('A'), Buffer.from('BC')]).equals(Buffer.from('ABC')),
    'Concat/equality',
  );
  check(Buffer.compare(Buffer.from('A'), Buffer.from('B')) < 0, 'Byte comparison');
  const source = new Uint8Array([0, 1, 2, 3, 4]);
  const shared = Buffer.from(source.buffer, 1, 3);
  const copied = Buffer.from(source.subarray(1, 4));
  shared[0] = 42;
  check(
    source[1] === 42 && copied[0] === 1 && shared.length === 3,
    'ArrayBuffer shares; Uint8Array copies',
  );
  shared.slice(1)[0] = 43;
  shared.subarray(2)[0] = 44;
  check(
    Buffer.isBuffer(shared.slice(1)) && Buffer.isBuffer(shared.subarray(1)),
    'Buffer slice and subarray preserve Buffer type',
  );
  check(
    source[2] === 43 && source[3] === 44,
    'Buffer slice and subarray share storage',
  );
  const overlap = Buffer.from([1, 2, 3, 4]);
  overlap.copy(overlap, 1, 0, 3);
  check(overlap.toString('hex') === '01010203', 'Overlapping Buffer copy');
  rejects(() => Buffer.from(42));
  rejects(() => allocated.readUInt32LE(6));
  check(
    typeof globalThis.process === 'undefined' &&
      typeof globalThis.require === 'undefined',
    'No Node runtime globals',
  );
  check(
    typeof globalThis.Buffer === 'undefined',
    'Explicit imports do not install a global Buffer',
  );
  return { bufferChecks: checks, bufferConstructorShared: true };
}
