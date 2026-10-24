import { Buffer, getRawPointer, toBuffer, toUint8Array, exportBuffer } from '@flax/ffi';

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

export function runBufferMemoryProbe() {
  checks = 0;
  const source = Buffer.alloc(6);
  source.set([10, 11, 12, 13, 14, 15]);
  const part = source.subarray(1, 5);
  const pointer = getRawPointer(part);
  const shared = toBuffer(pointer, 4, false);
  const copied = toBuffer(pointer, 4);
  check(
    Buffer.isBuffer(shared) && Buffer.isBuffer(copied),
    'FFI returns the canonical Buffer',
  );
  shared[0] = 42;
  check(source[1] === 42 && copied[0] === 11, 'FFI copy and zero-copy modes');
  exportBuffer(Buffer.from([51, 52]), pointer, 4);
  check(
    source[1] === 51 && source[2] === 52 && source[3] === 13,
    'Buffer export respects source extent',
  );
  const offsetSource = Buffer.from([1, 2, 3, 4]).subarray(1, 3);
  for (const name of ['buffer', 'byteOffset', 'byteLength']) {
    Object.defineProperty(offsetSource, name, {
      get() {
        throw new Error('spoofed Buffer metadata');
      },
    });
  }
  exportBuffer(offsetSource, pointer, 4);
  check(
    source[1] === 2 && source[2] === 3 && source[3] === 13,
    'Buffer export respects nonzero offsets',
  );
  rejects(() => exportBuffer(new Uint8Array(1), pointer, 4), 'Buffer');
  rejects(() => exportBuffer({ _isBuffer: true }, pointer, 4));
  rejects(() => exportBuffer(Buffer.alloc(5), pointer, 4), 'capacity');
  rejects(() => exportBuffer(Buffer.alloc(1), pointer, -1), 'range');
  check(
    toBuffer(pointer, 5, false)[4] === 15,
    'raw address uses caller-supplied bounds',
  );
  rejects(() => toBuffer(pointer, 1, 0), 'boolean');
  const alias = getRawPointer(shared.subarray(1, 3));
  check(toUint8Array(alias, 2)[0] === 3, 'Buffer view offsets produce raw addresses');
  check(typeof pointer.close === 'undefined', 'Pointers have no close method');
  check(toBuffer(alias, 1)[0] === 3, 'Reborrowed Buffer remains readable');
  check(toBuffer(getRawPointer(shared), 4)[0] === 2, 'Shared Buffer can be reborrowed');
  check(
    shared[0] === 2 && shared.slice(1)[0] === 3 && copied[0] === 11,
    'Buffer slices share JS-owned storage',
  );
  check(
    Buffer.isBuffer(toBuffer(0n, 0, false)),
    'Empty Buffer needs no native allocation lease',
  );
  return { bufferMemoryChecks: checks };
}
