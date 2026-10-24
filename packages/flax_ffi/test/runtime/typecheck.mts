// Compile-only public API checks; do not execute.
import {
  Buffer,
  DynamicLibrary,
  dlclose,
  dlsym,
  dlopen,
  getRawPointer,
  toString as readString,
  toUtf16String,
  toArrayBuffer,
  toUint8Array,
  exportString,
  exportArrayBuffer,
  exportArrayBufferView,
  toBuffer,
  exportBuffer,
  type Pointer,
} from '@flax/ffi';
import { Buffer as NodeBuffer } from 'node:buffer';
import { Buffer as AliasBuffer } from 'buffer';
import { Buffer as PolyfillBuffer } from 'buffer/';

const { functions, lib } = dlopen(null, {
  add: { arguments: ['int32', 'int32'], return: 'int32' },
  read: { arguments: ['pointer'], return: 'pointer' },
  release: { arguments: ['pointer'], return: 'void' },
});
const number: number = functions.add(20, 22);
const pointer: Pointer = functions.read(null);
const nothing: void = functions.release(pointer);
const bytes = new Uint8Array(32);
const allocated: Buffer = Buffer.alloc(32);
const aligned: Buffer = Buffer.allocUnsafe(32, 64);
const nodeAligned: NodeBuffer = NodeBuffer.allocUnsafeSlow(32, 64);
const aliasAligned: AliasBuffer = AliasBuffer.allocUnsafe(32, 64);
const polyfillAligned: PolyfillBuffer = PolyfillBuffer.allocUnsafeSlow(32, 64);
// @ts-expect-error Alignment is numeric.
Buffer.allocUnsafe(32, '64');
const sameConstructor: typeof NodeBuffer = Buffer;
const allocatedPointer: Pointer = getRawPointer(allocated);
const pinned: Pointer = getRawPointer(bytes);
const buffer: ArrayBuffer = toArrayBuffer(pinned, 32, false);
const view: Uint8Array<ArrayBuffer> = toUint8Array(pinned, 32);
const nodeBuffer: NodeBuffer = toBuffer(pinned, 32, false);
const integer: number = nodeBuffer.readUInt32LE(0);
exportBuffer(NodeBuffer.from('Flax'), pinned, 32);
exportBuffer(nodeBuffer, pinned, 32);
exportBuffer(nodeBuffer.subarray(1, 4), pinned, 32);
exportString('Flax', pinned, 32);
const string: string | null = readString(pinned);
exportString('Flax', pinned, 32, 'utf16le');
exportArrayBuffer(buffer, pinned, 32);
exportArrayBufferView(new DataView(buffer, 2, 4), pinned, 32);
// @ts-expect-error Pointers have no implicit cleanup operation.
pinned.close();
lib.close();
void [
  number,
  pointer,
  nothing,
  view,
  string,
  integer,
  sameConstructor,
  allocatedPointer,
  aligned,
  nodeAligned,
  aliasAligned,
  polyfillAligned,
];
// @ts-expect-error Incorrect scalar representation.
functions.add('20', 22);
// @ts-expect-error Incorrect native argument count.
functions.add(20);
// @ts-expect-error Number is not an exact pointer representation.
functions.read(42);
// @ts-expect-error Unsupported runtime scalar type.
dlopen(null, { unsupported: { arguments: ['int128'], return: 'void' } });
const address: bigint = getRawPointer(bytes);
const shifted: Pointer = address + 1n;
const zero: Pointer = 0n;
readString(zero);
toArrayBuffer(zero, 0);
// @ts-expect-error Raw memory APIs require bigint; use 0n for a null address.
readString(null);
// @ts-expect-error Raw UTF-16 memory addresses are bigint.
toUtf16String(null);
// @ts-expect-error Raw ArrayBuffer memory addresses are bigint.
toArrayBuffer(null, 0);
// @ts-expect-error Raw Uint8Array memory addresses are bigint.
toUint8Array(null, 0);
// @ts-expect-error Raw Buffer memory addresses are bigint.
toBuffer(null, 0);
// @ts-expect-error Raw string export addresses are bigint.
exportString('', null, 0);
// @ts-expect-error Raw ArrayBuffer export addresses are bigint.
exportArrayBuffer(buffer, null, 0);
// @ts-expect-error Raw view export addresses are bigint.
exportArrayBufferView(bytes, null, 0);
// @ts-expect-error Raw Buffer export addresses are bigint.
exportBuffer(nodeBuffer, null, 0);
const dynamic = new DynamicLibrary(null);
// @ts-expect-error Node requires a signature object even for void().
dynamic.getFunction('noop');
const add = dynamic.getFunction('add', {
  arguments: ['int32', 'int32'],
  return: 'int32',
});
const result: number = add(20, 22);
const symbol: bigint = dlsym(dynamic, 'add');
const entry: bigint = add.pointer;
const all = dynamic.getFunctions({ read: { return: 'int32' }, noop: {} });
const read: number = all.read();
const noop: void = all.noop();
dlclose(dynamic);
void [shifted, zero, result, symbol, entry, read, noop];
// @ts-expect-error Symbol addresses are bigint, not number.
const badAddress: number = getRawPointer(bytes);
// @ts-expect-error Inferred incremental binding still validates arguments.
add('20', 22);
// @ts-expect-error Inferred return type is preserved.
const badResult: bigint = add(20, 22);
getRawPointer(new SharedArrayBuffer(4));
// @ts-expect-error Copy mode is explicitly boolean.
toArrayBuffer(pinned, 4, 0);
// @ts-expect-error A view is not an ArrayBuffer.
exportArrayBuffer(bytes, pinned, 32);
// @ts-expect-error Unknown encodings are rejected.
exportString('Flax', pinned, 32, 'rot13');
// @ts-expect-error Buffer export requires the Buffer API, not a plain byte view.
exportBuffer(bytes, pinned, 32);

import ffi, {
  struct,
  union,
  array,
  view as nativeView,
  sizeOf,
  malloc,
  free,
  NativeFinalizer,
  getInt64,
  setInt64,
  bindFunction,
  withArena,
} from '@flax/ffi';
import nodeFfi from 'node:ffi';
const Point = struct({ x: 'double', y: 'double', handle: 'pointer' });
const nativePoint = nativeView(Point, Buffer.alloc(sizeOf(Point)));
nativePoint.x = 1.5;
nativePoint.handle = 0n;
const aggregate = dlopen(null, {
  move: { arguments: [Point], return: Point },
  wide: { arguments: ['int64', 'string'], return: 'uint64' },
  stop: { return: 'void' },
  release: { arguments: ['pointer'] },
});
const moved: Uint8Array = aggregate.functions.move(nativePoint);
const wide: bigint = aggregate.functions.wide(-123n, Buffer.from('Flax'));
const callbackAddress: bigint = aggregate.lib.registerCallback(
  { arguments: ['int64'], return: 'int64' },
  (value) => value + 1n,
);
aggregate.lib.registerCallback({ arguments: ['int32'] }, () => {}, {
  mode: 'listener',
  stop: aggregate.functions.stop,
});
aggregate.lib.registerCallback(
  { arguments: ['int32'], return: 'int32' },
  '(x) => x + context.n',
  { mode: 'isolated', context: { n: 1 } },
);
const finalizer = new NativeFinalizer(aggregate.functions.release);
const nativeAllocation = malloc(8, 64);
setInt64(nativeAllocation, 0, 42n);
const signed: bigint = getInt64(nativeAllocation);
finalizer.attach(nativePoint, nativeAllocation);
finalizer.detach(nativePoint);
free(nativeAllocation);
const sameApi: typeof dlopen = ffi.dlopen;
const aliasApi: typeof dlopen = nodeFfi.dlopen;
const pointerFunction = bindFunction(callbackAddress, {
  arguments: ['int64'],
  return: 'int64',
});
const called: bigint = pointerFunction(42);
const scoped: number = withArena((arena) => Number(arena.allocate(8) % 8n));
const captured = ffi.callWithErrno(aggregate.functions.wide, 1n, 'Flax');
const capturedValue: bigint = captured.value;
const capturedErrno: number = captured.errno;
const asyncValue: bigint = await ffi.callAsync(aggregate.functions.wide, [1n, 'Flax']);
const asyncCaptured = await ffi.callAsync(aggregate.functions.wide, [1n, 'Flax'], {
  captureErrno: true,
  signal: new AbortController().signal,
  keepAlive: [nativePoint],
});
const asyncError: number = asyncCaptured.errno;
aggregate.lib.registerCallback({ return: 'int32' }, () => 42, { mode: 'threadsafe' });
const asyncAllocate = aggregate.lib.getFunction('allocate', { return: 'pointer' });
const asyncPointer: bigint = await ffi.callAsync(asyncAllocate, [], {
  onDiscard: aggregate.functions.release,
});
void [
  moved,
  wide,
  signed,
  sameApi,
  aliasApi,
  called,
  scoped,
  capturedValue,
  capturedErrno,
  asyncValue,
  asyncError,
  asyncPointer,
  union({ i: 'int64' }),
  array('float', 4),
];
// @ts-expect-error Invalid aggregate field value.
nativePoint.x = 'bad';
aggregate.lib.registerCallback(
  // @ts-expect-error Integer64 callback inputs are bigint.
  { arguments: ['int64'], return: 'int64' },
  (value: number) => BigInt(value),
);
// @ts-expect-error A function address is always bigint.
bindFunction(42, {});
// @ts-expect-error Isolated handlers need source plus explicit mode.
aggregate.lib.registerCallback({}, '() => 1');
