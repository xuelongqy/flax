import ffi from '@flax/ffi';
import { stressMilliseconds } from './stress-config.js';

export async function asyncProbe() {
  let checks = 0;
  const check = (value, message) => {
    if (!value) throw new Error(message);
    checks++;
  };
  const lib = ffi.DynamicLibrary.process();
  const fn = lib.getFunction('flax_static_background', {
    arguments: ['pointer', 'uint32', 'uint32', 'int32'],
    return: 'int32',
  });
  const bytes = ffi.Buffer.from([1, 2, 3]);
  const result = ffi.callWithErrno(fn, bytes, bytes.length, 0, 22);
  check(
    result.value === 3 && result.errno === 22 && bytes[0] === 2,
    'synchronous errno capture',
  );
  let timer = false;
  setTimeout(() => {
    timer = true;
  }, 0);
  const pending = ffi.callAsync(fn, [bytes, bytes.length, 80, 13], {
    captureErrno: true,
  });
  try {
    lib.close();
    check(false, 'active call must retain library');
  } catch (error) {
    check(error.code === 'ERR_INVALID_STATE', 'active library close rejected');
  }
  const asyncResult = await pending;
  check(
    timer && asyncResult.value === 3 && asyncResult.errno === 13 && bytes[0] === 3,
    'background execution leaves owner responsive and copies output back',
  );

  const overlapping = new Uint8Array([1, 2, 3]);
  const overlap = lib.getFunction('flax_static_overlap', {
    arguments: ['pointer', 'pointer'],
    return: 'uint32',
  });
  check(
    (await ffi.callAsync(overlap, [overlapping, overlapping.subarray(1)])) === 3 &&
      overlapping[1] === 3,
    'overlapping byte views preserve native aliases and copyback',
  );
  const bounded = Array.from({ length: 32 }, () => ffi.callAsync(fn, [0n, 0, 0, 0]));
  try {
    await ffi.callAsync(fn, [0n, 0, 0, 0]);
    check(false, 'pending call bound');
  } catch (error) {
    check(error.code === 'ERR_OUT_OF_RANGE', 'pending calls are bounded');
  }
  await Promise.all(bounded);

  const Point = ffi.struct({ x: 'double', y: 'double' });
  const point = lib.getFunction('flax_static_point', {
    arguments: [Point, 'double'],
    return: Point,
  });
  let reentrantCalls;
  const aggregate = {
    get $bytes() {
      reentrantCalls = Array.from({ length: 32 }, () =>
        ffi.callAsync(fn, [0n, 0, 0, 0]),
      );
      return new Uint8Array(ffi.sizeOf(Point));
    },
  };
  let reentrantError;
  try {
    await ffi.callAsync(point, [aggregate, 1]);
  } catch (error) {
    reentrantError = error;
  }
  await Promise.all(reentrantCalls);
  const lateStart = lib.getFunction('flax_static_late_start', {
    arguments: ['pointer', 'pointer'],
    return: 'uint32',
  });
  const lateStop = lib.getFunction('flax_static_late_stop', {});
  const lateStat = lib.getFunction('flax_static_late_stat', {
    arguments: ['uint32'],
    return: 'int32',
  });
  for (const closeLibrary of [false, true]) {
    const callbacks = ffi.DynamicLibrary.process();
    let deliveries = 0;
    const handler = () => ++deliveries;
    const first = callbacks.registerCallback(
      { arguments: ['int32'], return: 'int32' },
      handler,
      { mode: 'threadsafe', stop: lateStop, exceptionalReturn: -7 },
    );
    const second = closeLibrary
      ? callbacks.registerCallback({ arguments: ['int32'], return: 'int32' }, handler, {
          mode: 'threadsafe',
          exceptionalReturn: -11,
        })
      : 0n;
    check(lateStart(first, second) === 1, 'start producer for stop/join race');
    if (closeLibrary) callbacks.close();
    else {
      callbacks.unregisterCallback(first);
      callbacks.close();
    }
    check(
      deliveries === 0 &&
        lateStat(0) === (closeLibrary ? -18 : -7) &&
        lateStat(1) === 0,
      'callbacks arriving during stop/join return fallback without waiting for JS',
    );
  }
  check(
    reentrantError?.code === 'ERR_OUT_OF_RANGE',
    'argument getter reentry cannot exceed the pending-call limit',
  );

  const managed = ffi.DynamicLibrary.process();
  const managedCallback = managed.registerCallback({}, () => {}, {
    stop: managed.getFunction('flax_static_noop', {}),
  });
  const stopFromCallback = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    () => {
      let rejected = 0;
      for (const stop of [
        () => managed.unregisterCallback(managedCallback),
        () => managed.close(),
      ]) {
        try {
          stop();
        } catch (error) {
          if (error.code === 'ERR_INVALID_STATE') rejected++;
        }
      }
      return rejected;
    },
  );
  check(
    lib.getFunction('flax_static_call_callback', {
      arguments: ['pointer', 'int32'],
      return: 'int32',
    })(stopFromCallback, 0) === 2,
    'producer stop from another callback is rejected before mutating registration',
  );
  managed.unregisterCallback(managedCallback);
  managed.close();
  lib.unregisterCallback(stopFromCallback);

  let total = 0;
  const callback = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    (value) => {
      total += value;
      return total;
    },
    { mode: 'threadsafe' },
  );
  const call = lib.getFunction('flax_static_call_on_thread', {
    arguments: ['pointer', 'int32'],
    return: 'int32',
  });
  check(
    (await ffi.callAsync(call, [callback, 20])) === 20,
    'shared owner closure on foreign thread',
  );
  check(
    (await ffi.callAsync(call, [callback, 22])) === 42 && total === 42,
    'closure state persists',
  );
  try {
    call(callback, 1);
    check(false, 'synchronous wait cycle');
  } catch (error) {
    check(
      error.message.includes('deadlock'),
      'wait cycle rejected without blocking owner',
    );
  }
  lib.unregisterCallback(callback);

  const throwing = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    () => {
      throw new Error('callback sentinel');
    },
    { mode: 'threadsafe' },
  );
  const direct = lib.getFunction('flax_static_call_callback', {
    arguments: ['pointer', 'int32'],
    return: 'int32',
  });
  try {
    await ffi.callAsync(direct, [throwing, 1]);
    check(false, 'callback error');
  } catch (error) {
    check(
      error.message.includes('callback sentinel'),
      'callback error rejects background call',
    );
  }
  lib.unregisterCallback(throwing);

  const controller = new AbortController();
  const aborted = ffi.callAsync(fn, [bytes, bytes.length, 80, 0], {
    signal: controller.signal,
  });
  controller.abort();
  try {
    await aborted;
    check(false, 'abort');
  } catch (error) {
    check(error.name === 'AbortError', 'abort rejects after native exit');
  }
  check(bytes[0] === 3, 'cancelled snapshots do not overwrite JS storage');

  const allocate = lib.getFunction('flax_static_async_alloc', { return: 'pointer' });
  const release = lib.getFunction('flax_static_async_free', { arguments: ['pointer'] });
  const allocations = lib.getFunction('flax_static_async_stat', {
    arguments: ['uint32'],
    return: 'uint32',
  });
  const beforeAllocations = allocations(0),
    beforeFrees = allocations(1);
  const allocationController = new AbortController();
  const allocation = ffi.callAsync(allocate, [], {
    signal: allocationController.signal,
    onDiscard: release,
  });
  const allocationDeadline = Date.now() + 3000;
  while (allocations(0) === beforeAllocations && Date.now() < allocationDeadline)
    await new Promise((resolve) => setTimeout(resolve, 1));
  check(
    allocations(0) === beforeAllocations + 1,
    'allocation starts before cancellation',
  );
  allocationController.abort();
  await allocation.catch((error) => {
    check(error.name === 'AbortError', 'allocated result cancellation');
    check(
      allocations(1) === beforeFrees + 1,
      'native exit and discarded-result cleanup precede Promise settlement',
    );
  });
  check(
    allocations(1) === beforeFrees + 1,
    'cancelled native allocation is freed exactly once',
  );

  const transferred = new ArrayBuffer(8);
  const transferCall = ffi.callAsync(fn, [transferred, 8, 20, 0]);
  transferred.transfer();
  try {
    await transferCall;
    check(false, 'detached output');
  } catch (error) {
    check(
      error.code === 'ERR_INVALID_STATE',
      'detached output rejected without native use-after-free',
    );
  }

  // A real system C library exercises opaque handles and output pointers.
  const sqlite = new ffi.DynamicLibrary('/usr/lib/libsqlite3.dylib');
  const dbOut = ffi.Buffer.alloc(ffi.abi.pointerSize);
  const dbOpen = sqlite.getFunction('sqlite3_open', {
    arguments: ['string', 'pointer'],
    return: 'int32',
  });
  check(
    (await ffi.callAsync(dbOpen, [':memory:', dbOut])) === 0,
    'SQLite opens in background',
  );
  const db = ffi.getUint64(ffi.getRawPointer(dbOut));
  const exec = sqlite.getFunction('sqlite3_exec', {
    arguments: ['pointer', 'string', 'pointer', 'pointer', 'pointer'],
    return: 'int32',
  });
  const close = sqlite.getFunction('sqlite3_close', {
    arguments: ['pointer'],
    return: 'int32',
  });
  try {
    check(
      (await ffi.callAsync(exec, [
        db,
        'CREATE TABLE t(v); INSERT INTO t VALUES(42);',
        0n,
        0n,
        0n,
      ])) === 0,
      'SQLite statement',
    );
    let selected;
    const row = sqlite.registerCallback(
      { arguments: ['pointer', 'int32', 'pointer', 'pointer'], return: 'int32' },
      (_, count, values) => {
        selected = ffi.toString(ffi.getUint64(values));
        return count === 1 ? 0 : 1;
      },
      { mode: 'threadsafe' },
    );
    try {
      check(
        (await ffi.callAsync(exec, [db, 'SELECT v FROM t', row, 0n, 0n])) === 0 &&
          selected === '42',
        'SQLite callback reads owner state',
      );
    } finally {
      sqlite.unregisterCallback(row);
    }
  } finally {
    check((await ffi.callAsync(close, [db])) === 0, 'SQLite closes');
    sqlite.close();
  }
  const started = Date.now();
  let batches = 0;
  do {
    const outputs = await Promise.all(
      Array.from({ length: 16 }, (_, i) =>
        ffi.callAsync(fn, [new Uint8Array([i]), 1, 0, i], { captureErrno: true }),
      ),
    );
    check(
      outputs.every((output, i) => output.value === 1 && output.errno === i),
      'concurrent call frames and errno isolation',
    );
    batches++;
    await new Promise((resolve) => setTimeout(resolve, 10));
  } while (Date.now() - started < stressMilliseconds);
  globalThis.asyncFfiMetrics = {
    calls: batches * 16,
    milliseconds: Date.now() - started,
  };
  lib.close();
  return checks;
}
