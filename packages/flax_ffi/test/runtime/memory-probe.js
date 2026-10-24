import {
  dlopen,
  getRawPointer,
  toString as readString,
  toArrayBuffer,
  toUint8Array,
  exportString,
  exportArrayBuffer,
  exportArrayBufferView,
} from '@flax/ffi';

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
    message || 'rejected',
  );
}
function library(path, prefix) {
  const signatures = {
    memory_alloc: { arguments: ['uint32'], return: 'pointer' },
    memory_free: { arguments: ['pointer'], return: 'void' },
    memory_stat: { arguments: ['uint32'], return: 'uint32' },
    memory_read: { arguments: ['pointer', 'uint32'], return: 'uint8' },
    memory_write: { arguments: ['pointer', 'uint32', 'uint8'], return: 'void' },
    memory_offset: { arguments: ['pointer', 'uint32'], return: 'pointer' },
    memory_text: { arguments: [], return: 'pointer' },
    memory_text_size: { arguments: [], return: 'uint32' },
    memory_unterminated: { arguments: [], return: 'pointer' },
  };
  const opened = dlopen(
    path,
    Object.fromEntries(Object.entries(signatures).map(([n, s]) => [prefix + n, s])),
  );
  return {
    lib: opened.lib,
    ...Object.fromEntries(
      Object.keys(signatures).map((n) => [n, opened.functions[prefix + n]]),
    ),
  };
}
function allocated(f, length) {
  const raw = f.memory_alloc(length);
  if (raw === 0n) throw new Error('C allocation failed');
  return raw;
}

function basic(f, sourceBytes) {
  const nativeText = f.memory_text();
  check(
    readString(nativeText, f.memory_text_size()) === 'Flax 中文 😀',
    'bounded UTF-8 read',
  );
  check(readString(nativeText) === 'Flax 中文 😀', 'Node-style NUL-terminated read');
  check(
    toUint8Array(nativeText, 4, false)[0] === 70,
    'Borrowed static memory supports zero-copy reads',
  );
  rejects(() => readString(f.memory_unterminated(), 4), 'no NUL');
  check(
    readString(0n) === null && toArrayBuffer(0n, 0).byteLength === 0,
    'null and empty ranges',
  );
  rejects(() => readString(null), 'bigint');
  rejects(() => toArrayBuffer(0n, 1), 'Null');
  rejects(() => getRawPointer({}), undefined);

  const source = sourceBytes([10, 11, 12, 13, 14, 15, 16, 17]);
  const part = source.subarray(2, 6);
  let traps = 0;
  for (const name of ['buffer', 'byteOffset', 'byteLength']) {
    Object.defineProperty(part, name, {
      get() {
        traps++;
        throw new Error('spoofed view metadata');
      },
    });
  }
  const pointer = getRawPointer(part);
  const sibling = getRawPointer(source.subarray(0, 2));
  check(f.memory_read(pointer, 0) === 12 && traps === 0, 'intrinsic subview bounds');
  const view = toUint8Array(pointer, 4, false);
  const copied = new Uint8Array(toArrayBuffer(pointer, 4));
  view[0] = 42;
  check(
    source[2] === 42 && f.memory_read(pointer, 0) === 42,
    'zero-copy JS writes reach C',
  );
  f.memory_write(pointer, 1, 43);
  check(
    view[1] === 43 && source[3] === 43 && copied[0] === 12,
    'C writes reach JS while copies stay independent',
  );
  check(toUint8Array(pointer, 5)[4] === 16, 'raw addresses carry no subview bounds');
  rejects(() => toArrayBuffer(pointer, -1), 'range');
  rejects(() => toArrayBuffer(pointer, 1.5), 'range');
  rejects(() => toArrayBuffer(pointer, 1, 0), 'boolean');
  const alias = f.memory_offset(pointer, 1);
  check(toUint8Array(alias, 3)[0] === 43, 'native pointer alias preserves bounds');
  check(
    alias === pointer + 1n && toUint8Array(alias, 4)[3] === 16,
    'native and JS pointer arithmetic agree',
  );
  const buffer = toArrayBuffer(pointer, 4, false);
  const exportedAlias = getRawPointer(new DataView(buffer, 1, 2));
  check(
    f.memory_read(exportedAlias, 0) === 43,
    'zero-copy view can be passed back to C',
  );
  check(typeof pointer.close === 'undefined', 'No pointer cleanup wrapper');
  check(toUint8Array(sibling, 2)[0] === 10, 'Sibling JS slice remains valid');
  check(
    view[0] === 42 && new Uint8Array(buffer)[1] === 43,
    'Exported views share JS-owned storage',
  );

  const target = new Uint8Array(32).fill(0x7e);
  const destination = getRawPointer(target);
  exportString('中文😀', destination, 32);
  check(
    readString(destination) === '中文😀' && target[10] === 0 && target[11] === 0x7e,
    'UTF-8 terminator and untouched tail',
  );
  exportString('\ud800', destination, 32);
  check(readString(destination) === '\ufffd', 'unpaired surrogate is replaced');
  exportString('ab', destination, 6, 'utf16le');
  check(
    Array.from(target.subarray(0, 6)).join() === '97,0,98,0,0,0',
    'UTF-16LE terminator',
  );
  const before = target.join();
  rejects(() => exportString('too long', destination, 2), 'capacity');
  check(target.join() === before, 'failed string export has no partial write');
  exportString('YQ==', destination, 32, 'base64');
  check(target[0] === 97 && target[1] === 0, 'base64 string export');
  rejects(() => exportString('a', destination, 32, 'rot13'), 'encoding');
  rejects(() => exportString(42, destination, 32), 'string');
  exportArrayBuffer(new Uint8Array([5, 6]).buffer, destination, 32);
  check(
    target[0] === 5 && target[1] === 6 && target[2] === 98,
    'ArrayBuffer export copies only its bytes',
  );
  exportArrayBufferView(
    new DataView(new Uint8Array([9, 8, 7, 6]).buffer, 1, 2),
    destination,
    2,
  );
  check(target[0] === 8 && target[1] === 7, 'DataView export respects offset');
  rejects(() => exportArrayBuffer(new Uint8Array(1), destination, 32));
  rejects(() => exportArrayBufferView(new ArrayBuffer(1), destination, 32));
  rejects(() => exportArrayBufferView(new Uint8Array(2), destination, -1), 'range');
  exportArrayBufferView(new Uint8Array([0xff, 65, 0]), destination, 32);
  check(readString(destination) === '\ufffdA', 'invalid UTF-8 is replaced');

  const overlap = new Uint8Array([1, 2, 3, 4, 5]);
  const overlapPointer = getRawPointer(overlap.subarray(1));
  exportArrayBufferView(overlap.subarray(0, 4), overlapPointer, 4);
  check(overlap.join() === '1,1,2,3,4', 'overlapping byte copies use memmove');
  const zero = getRawPointer(new ArrayBuffer(0));
  check(toArrayBuffer(zero, 0, false).byteLength === 0, 'empty pinned storage');
  const anotherZero = getRawPointer(new ArrayBuffer(0));
  check(toArrayBuffer(anotherZero, 0).byteLength === 0, 'independent empty storage');

  // Both maintained engines implement the real ArrayBuffer transfer operation.
  const transferred = sourceBytes([21, 22, 23, 24]);
  const oldAddress = getRawPointer(transferred);
  const moved = transferred.buffer.transfer();
  check(
    transferred.byteLength === 0 && new Uint8Array(moved)[0] === 21,
    'source is actually detached',
  );
  rejects(() => getRawPointer(transferred));
  rejects(() => exportArrayBuffer(transferred.buffer, null, 0));
  check(
    typeof oldAddress === 'bigint' && f.memory_read(getRawPointer(moved), 2) === 23,
    'transfer requires a fresh address; stale address is never dereferenced',
  );
  if (typeof SharedArrayBuffer === 'function') {
    const shared = new SharedArrayBuffer(8);
    const address = getRawPointer(shared);
    new Uint8Array(shared)[0] = 93;
    check(toUint8Array(address, 1)[0] === 93, 'shared byte source');
  }
  const resizable = new ArrayBuffer(8, { maxByteLength: 16 });
  if (resizable.resizable)
    check(
      typeof getRawPointer(resizable) === 'bigint',
      'resizable address is borrowed only until resize',
    );
}

function weakSource(sourceBytes) {
  const source = sourceBytes([41, 42, 43, 44]);
  return { weak: new WeakRef(source.buffer), pointer: getRawPointer(source) };
}
function lifetime(path, prefix, viewBytes, sourceBytes) {
  const f = library(path, prefix);
  basic(f, sourceBytes);
  const raw = allocated(f, 8);
  const alias = f.memory_offset(raw, 2);
  const empty = toArrayBuffer(raw, 0, false);
  const shared = viewBytes(raw, 8, false);
  const slice = shared.subarray(2, 4);
  slice[0] = 61;
  check(f.memory_read(alias, 0) === 61, 'Native zero-copy slice writes reach C');
  f.memory_write(raw, 3, 62);
  check(slice[1] === 62, 'C writes reach native zero-copy slices');
  const copied = toUint8Array(raw, 8);
  f.memory_free(raw);
  // All raw/shared/slice/alias accesses stop here; their GC must never free C memory.
  check(f.memory_stat(1) === 1, 'Explicit native free runs immediately');
  check(copied[2] === 61 && copied[3] === 62, 'Copied bytes survive manual free');
  check(empty.byteLength === 0, 'Empty native views need no storage');
  f.memory_free(null);
  check(f.memory_stat(1) === 1, 'Library-defined null free is passed through');

  const manual = allocated(f, 8);
  const temporaryView = viewBytes(manual, 8, false);
  temporaryView[0] = 63;
  const weakView = new WeakRef(temporaryView.buffer);
  const temporary = library(path, prefix);
  const staticView = viewBytes(temporary.memory_unterminated(), 4, false);
  staticView[0] = 64;
  temporary.lib.close();
  check(staticView[0] === 64, 'Library close preserves borrowed process-lived bytes');
  check(f.memory_stat(1) === 1, 'Library close does not free unrelated C allocations');
  const owner = sourceBytes([71, 72, 73, 74]);
  const ownerPointer = getRawPointer(owner);
  return {
    f,
    manual,
    weakView,
    weak: weakSource(sourceBytes),
    owner,
    ownerPointer,
    ownerView: viewBytes(ownerPointer, 4, false),
  };
}

function memoryProbe(
  path,
  { viewBytes = toUint8Array, sourceBytes = (bytes) => new Uint8Array(bytes) } = {},
) {
  const entries = [
    lifetime(null, 'flax_static_', viewBytes, sourceBytes),
    lifetime(path, 'flax_dynamic_', viewBytes, sourceBytes),
  ];
  const dynamic = entries[1].f;
  // Static borrowed bytes outlive the VM without any runtime-owned C allocation.
  const survivor = entries[0].f.memory_unterminated();
  globalThis.ffiSurvivor = viewBytes(survivor, 4, false).subarray(0);
  globalThis.ffiSurvivor[0] = 77;
  globalThis.savedMemoryRead = () => toArrayBuffer(survivor, 1);
  check(globalThis.__flaxFfiMemory.adopt === undefined, 'No adoption API');
  globalThis.memoryPhase = (phase) => {
    for (const entry of entries) {
      if (phase === 1) {
        check(
          entry.weak.weak.deref() === undefined,
          'source JS ArrayBuffer is not rooted by pointer',
        );
        check(
          typeof entry.weak.pointer === 'bigint',
          'a raw address survives without owning source memory; never dereference it',
        );
        check(
          entry.f.memory_read(entry.ownerPointer, 1) === 72 &&
            entry.ownerView[2] === 73,
          'caller-retained source stays valid across GC',
        );
        check(entry.weakView.deref() === undefined, 'Native view was collected');
        check(entry.f.memory_stat(1) === 1, 'View GC does not release C memory');
        check(
          entry.f.memory_read(entry.manual, 0) === 63,
          'C memory remains caller-owned',
        );
        entry.f.memory_free(entry.manual);
        entry.manual = null;
        entry.weak = null;
        entry.ownerPointer = 0n;
        entry.ownerView = null;
        entry.owner = null;
        check(entry.f.memory_stat(1) === 2, 'Caller releases memory after view GC');
      } else {
        check(
          entry.f.memory_stat(1) === 2 && entry.f.memory_stat(2) === 0,
          'GC never repeats an explicit native free',
        );
      }
    }
    return JSON.stringify({
      memoryChecks: checks,
      sourceGcVerified: phase >= 1,
      nativeViewGcVerified: phase >= 1,
      manualFreeVerified: phase === 2,
      staticAllocations: entries[0].f.memory_stat(0),
      dynamicAllocations: dynamic.memory_stat(0),
      staticFrees: entries[0].f.memory_stat(1),
      dynamicFrees: dynamic.memory_stat(1),
    });
  };
  return checks;
}

export function runMemoryProbe(path, options) {
  try {
    return memoryProbe(path, options);
  } catch (error) {
    throw new Error(`Memory check ${checks + 1}: ${error.stack || error}`);
  }
}
