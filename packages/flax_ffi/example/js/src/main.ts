import type {} from '@flax/core/host';
import { Buffer, toBuffer } from '@flax/ffi';
import { Text, runApp } from '@flax/flutter/widgets';
import { Counter, native } from './counter.js';

function demonstrate() {
  const counter = new Counter(40);
  const value = counter.add(2);

  const bytes = Buffer.from([10, 20, 30]);
  native.bytes_increment(bytes, bytes.length); // JS owns and keeps these bytes alive.

  const pointer = native.message_create();
  if (pointer === 0n) throw new Error('Message allocation failed');
  let copy: Buffer;
  try {
    const borrowed = toBuffer(pointer, 4, false);
    borrowed[0] = 'f'.charCodeAt(0); // Zero-copy: modifies the native allocation.
    copy = toBuffer(pointer, 4); // An independent copy survives native release.
  } finally {
    native.message_destroy(pointer); // Never use the borrowed view after this.
  }

  const result = { value, bytes: Array.from(bytes), message: copy.toString() };
  if (value !== 42 || bytes.join(',') !== '11,21,31' || result.message !== 'flax')
    throw new Error(`Unexpected native result: ${JSON.stringify(result)}`);
  // No Counter.close(): GC or Session close invokes counter_destroy once.
  return result;
}

const result = demonstrate();
runApp(
  new Text(
    `@flax/ffi\nCounter: ${result.value}\nBytes: ${result.bytes}\nMessage: ${result.message}`,
  ),
);
console.log(`FLAX_FFI_EXAMPLE_RESULT ${JSON.stringify(result)}`);
