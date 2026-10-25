import ffi, {
  Buffer,
  DynamicLibrary,
  NativeFinalizer,
  sizeOf,
  view,
  read,
  write,
  getRawPointer,
  toString,
} from '@flax/ffi';
import { createBindings } from 'flax:generated';
import {
  callbacks,
  globals,
  CgPoint,
  CgNumber,
  CgRecord,
  CgArray,
  CgPacked,
  CG_BIG,
  CG_MAGIC,
  CG_ANSWER,
  CG_NEGATIVE,
  CG_TARGET_BYTES,
} from 'flax:definitions';
import { createBindings as sqliteBindings } from 'flax:sqlite';
import { SQLITE_OK, SQLITE_ROW } from 'flax:sqlite-definitions';

let checks = 0;
function check(value, message) {
  if (!value) throw new Error(message);
  ++checks;
}
function throws(action, message) {
  let failed = false;
  try {
    action();
  } catch (error) {
    failed = String(error).includes(message);
  }
  check(failed, message);
}
const library = DynamicLibrary.process();
const { native, Counter } = createBindings(library);
check(native.cg_add(20, 22) === 42, 'generated scalar signature');
check(native.cg_bool(true) === false, 'C boolean semantics');
check(native.cg_long(41n) === 42n && native.cg_size(41n) === 42n, 'ABI integer widths');
check(
  native.cg_big() === CG_BIG && CG_BIG === 18446744073709551601n,
  'exact uint64 macro and result',
);
check(
  CG_MAGIC === 32 && CG_ANSWER === 42 && native.cg_status(CG_NEGATIVE) === -7,
  'folded constants and enum',
);
const targetValue = CG_TARGET_BYTES === 8 ? 41n : 41;
check(
  native.cg_target(targetValue) === (CG_TARGET_BYTES === 8 ? 42n : 42),
  'SDK specific typedef',
);
const point = view(CgPoint, Buffer.alloc(sizeOf(CgPoint)));
point.x = 1;
point.y = 2;
const moved = view(CgPoint, native.cg_move(point, 3));
check(moved.x === 4 && moved.y === 5, 'generated struct argument and result');
const number = view(CgNumber, Buffer.alloc(sizeOf(CgNumber)));
number.bits = 0x3f800000;
check(native.cg_union_bits(number) === 0x3f800000, 'generated union');
const record = view(CgRecord, Buffer.alloc(sizeOf(CgRecord)));
record.tag = 1;
record.stamp = 40n;
record.point.x = 1;
check(native.cg_record_value(record) === 42n, 'nested struct and padding');
const array = view(CgArray, Buffer.alloc(sizeOf(CgArray)));
array.values[0] = 10;
array.values[1] = 12;
array.values[2] = 20;
check(native.cg_array_sum(array) === 42, 'fixed array inside struct');
const packed = view(CgPacked, Buffer.alloc(sizeOf(CgPacked)));
packed.tag = 2;
packed.value = 40;
check(native.cg_packed_value(packed) === 42, 'packed struct by value');
check(
  native.cg_sum_array(new Int32Array([10, 12, 10, 10])) === 42,
  'array parameter decays to pointer',
);
const callback = library.registerCallback(
  callbacks.CgCallback,
  (value, context) => value + Number(context),
);
try {
  check(native.cg_callback(callback, 20, 22n) === 42, 'generated callback signature');
} finally {
  library.unregisterCallback(callback);
}
check(native.cg_variadic(2, 20, 22) === 42, 'explicit promoted variadic arguments');
check(toString(native.cg_greeting()) === 'generated', 'borrowed const char pointer');
const global = library.getSymbol('cg_global');
write(globals.cg_global, global, 0, 42);
check(read(globals.cg_global, global) === 42, 'generated global variable type');

const sqlite = new DynamicLibrary('/usr/lib/libsqlite3.dylib');
const { native: sql } = sqliteBindings(sqlite);
const outDb = Buffer.alloc(8),
  outStatement = Buffer.alloc(8);
let db = 0n,
  statement = 0n;
try {
  check(sql.sqlite3_libversion_number() > 3000000, 'system SQLite version');
  check(
    sql.sqlite3_open(':memory:', outDb) === SQLITE_OK,
    'real header generated SQLite open',
  );
  db = read('pointer', getRawPointer(outDb));
  check(
    sql.sqlite3_prepare_v2(db, 'SELECT 42', -1, outStatement, 0n) === SQLITE_OK,
    'SQLite prepare',
  );
  statement = read('pointer', getRawPointer(outStatement));
  check(sql.sqlite3_step(statement) === SQLITE_ROW, 'SQLite step');
  check(sql.sqlite3_column_int(statement, 0) === 42, 'SQLite query result');
} finally {
  if (statement)
    check(sql.sqlite3_finalize(statement) === SQLITE_OK, 'SQLite finalize');
  if (db) check(sql.sqlite3_close(db) === SQLITE_OK, 'SQLite close');
  sqlite.close();
}

throws(() => new Counter(-2147483648), 'Native allocation failed');
check(
  native.cg_counter_alive() === 0 && native.cg_counter_freed() === 0,
  'null constructor has no cleanup token',
);
const attach = NativeFinalizer.prototype.attach;
try {
  NativeFinalizer.prototype.attach = () => {
    throw new Error('injected attach failure');
  };
  throws(() => new Counter(1), 'injected attach failure');
} finally {
  NativeFinalizer.prototype.attach = attach;
}
check(
  native.cg_counter_alive() === 0 && native.cg_counter_freed() === 1,
  'attach failure rolls back allocation once',
);
const manual = new Counter(20);
check(manual.add(22) === 42, 'generated class method');
manual.close();
manual.close();
throws(() => manual.add(1), 'Resource closed');
check(
  native.cg_counter_alive() === 0 && native.cg_counter_freed() === 2,
  'explicit close is idempotent',
);
const closedLibrary = DynamicLibrary.process();
const { Counter: ClosedCounter } = createBindings(closedLibrary);
globalThis.codegenClosed = new ClosedCounter(1);
closedLibrary.close();
throws(() => globalThis.codegenClosed.close(), 'closed');
check(
  native.cg_counter_alive() === 1 && native.cg_counter_freed() === 2,
  'closed library does not cancel pending GC cleanup',
);
globalThis.codegenCollected = new Counter(20);
globalThis.codegenRetained = new Counter(40);
globalThis.codegenDrop = () => {
  globalThis.codegenCollected = null;
  globalThis.codegenClosed = null;
};
globalThis.codegenRetainedValue = () => globalThis.codegenRetained.add(2);
globalThis.codegenResult = {
  checks,
  targetBytes: CG_TARGET_BYTES,
  aggregateLayouts: 5,
  sqliteFunctions: 9,
};
globalThis.__flaxModules.require('@flax/core/bindings').mountRoot({
  kind: 'widget',
  type: 'flax.core/flutter#type:SizedBox',
  ctor: '',
  args: { width: 1, height: 1 },
});
