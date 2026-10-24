import { dlopen, NativeFinalizer } from '@flax/ffi';
import { Counter } from './counter.js';

export function runCounterProbe() {
  let checks = 0;
  const check = (condition, message) => {
    if (!condition) throw new Error(`Counter check ${checks + 1}: ${message}`);
    ++checks;
  };
  const { lib, functions } = dlopen(null, {
    flax_static_counter_stat: { arguments: ['uint32'], return: 'uint32' },
    flax_static_counter_fail_next_create: {},
    flax_static_counter_create: { arguments: ['int32'], return: 'pointer' },
    flax_static_counter_destroy: { arguments: ['pointer'] },
    flax_ffi_dlopen_stat: { arguments: ['uint32'], return: 'uint64' },
  });
  const stat = functions.flax_static_counter_stat;
  const records = () => functions.flax_ffi_dlopen_stat(9);
  const initialAllocations = stat(0),
    initialFrees = stat(1),
    initialRecords = records();
  functions.flax_static_counter_fail_next_create();
  let allocationError;
  try {
    new Counter();
  } catch (error) {
    allocationError = error;
  }
  check(
    allocationError?.message === 'Could not allocate Counter',
    'null allocation rejects',
  );
  check(
    stat(0) === initialAllocations && stat(1) === initialFrees,
    'no null destruction',
  );
  check(records() === initialRecords, 'allocation failure creates no finalizer record');

  // Registration failures also exercise cleanup with replaced collection methods.
  for (const [name, prototype, method, matches, afterStore, nativeRecord] of [
    [
      'bookkeeping read',
      WeakMap.prototype,
      'get',
      (key) => key instanceof Counter,
      false,
      false,
    ],
    [
      'native target link',
      WeakMap.prototype,
      'set',
      (key, value) => key instanceof Counter && value instanceof Set,
      true,
      true,
    ],
    ['native peer link', Set.prototype, 'add', () => true, true, true],
    [
      'bookkeeping write',
      WeakMap.prototype,
      'set',
      (key, value) => key instanceof Counter && Array.isArray(value),
      true,
      true,
    ],
  ]) {
    const original = prototype[method];
    const originalWeakDelete = WeakMap.prototype.delete,
      originalSetDelete = Set.prototype.delete;
    const failure = new Error(name);
    const beforeAllocations = stat(0),
      beforeFrees = stat(1),
      beforeRecords = records();
    let injected = false,
      cleanupCalls = 0,
      observedRecords,
      caught;
    prototype[method] = function (...args) {
      if (!injected && matches(...args)) {
        injected = true;
        observedRecords = records();
        if (afterStore) Reflect.apply(original, this, args);
        throw failure;
      }
      return Reflect.apply(original, this, args);
    };
    WeakMap.prototype.delete = Set.prototype.delete = function () {
      ++cleanupCalls;
      throw new Error('cleanup method must not run');
    };
    try {
      new Counter(23);
    } catch (error) {
      caught = error;
    } finally {
      prototype[method] = original;
      WeakMap.prototype.delete = originalWeakDelete;
      Set.prototype.delete = originalSetDelete;
    }
    check(injected && caught === failure, `${name} preserves the original exception`);
    check(
      observedRecords === beforeRecords + (nativeRecord ? 1n : 0n),
      `${name} reaches the intended registration stage`,
    );
    check(
      stat(0) === beforeAllocations + 1 && stat(1) === beforeFrees + 1,
      `${name} frees the failed construction once`,
    );
    check(
      records() === beforeRecords,
      `${name} immediately releases its native record`,
    );
    check(cleanupCalls === 0, `${name} cleanup uses saved collection methods`);
  }

  const finalizer = new NativeFinalizer(functions.flax_static_counter_destroy);
  const target = {},
    key = {};
  const firstPointer = functions.flax_static_counter_create(1);
  finalizer.attach(target, firstPointer, { detach: key });
  const secondPointer = functions.flax_static_counter_create(2);
  const originalSet = WeakMap.prototype.set,
    failure = new Error('group bookkeeping');
  let injected = false,
    caught;
  WeakMap.prototype.set = function (entryKey, value) {
    const result = Reflect.apply(originalSet, this, [entryKey, value]);
    if (!injected && entryKey === key && Array.isArray(value)) {
      injected = true;
      throw failure;
    }
    return result;
  };
  try {
    finalizer.attach(target, secondPointer, { detach: key });
  } catch (error) {
    caught = error;
    functions.flax_static_counter_destroy(secondPointer);
  } finally {
    WeakMap.prototype.set = originalSet;
  }
  check(injected && caught === failure, 'failed group addition preserves its error');
  check(
    records() === initialRecords + 1n,
    'failed addition preserves only the previous record',
  );
  const originalWeakDelete = WeakMap.prototype.delete,
    originalSetDelete = Set.prototype.delete;
  let cleanupCalls = 0;
  WeakMap.prototype.delete = Set.prototype.delete = function () {
    ++cleanupCalls;
    throw new Error('detach cleanup method must not run');
  };
  try {
    finalizer.detach(key);
  } finally {
    WeakMap.prototype.delete = originalWeakDelete;
    Set.prototype.delete = originalSetDelete;
  }
  check(cleanupCalls === 0, 'confirmed cancellation uses saved collection methods');
  functions.flax_static_counter_destroy(firstPointer);
  check(
    records() === initialRecords,
    'previous group remains cancellable after rollback',
  );
  check(
    stat(0) - initialAllocations === 6 && stat(1) - initialFrees === 6,
    'all failed or cancelled allocations are freed once',
  );
  const constructionChecks = checks;
  checks = 0;
  const allocated = stat(0),
    freed = stat(1),
    wrongThread = stat(2);
  let first = new Counter(42),
    retained = new Counter(7);
  check(first.value === 42 && retained.value === 7, 'independent native values');
  check(stat(0) === allocated + 2, 'one allocation per instance');
  check(stat(1) === freed, 'live instances have not been freed');
  first = null;

  // The host forces real engine GC between phases; the consumer only drops references.
  globalThis.ffiCounterPhase = (phase) => {
    if (phase === 1) {
      check(stat(1) === freed + 1, 'unreferenced instance is freed after GC');
      check(retained.value === 7, 'referenced instance survives GC and remains usable');
      retained = null;
    } else {
      check(
        stat(1) === freed + 2,
        phase === 2
          ? 'second instance is freed after GC'
          : 'later GC never frees twice',
      );
    }
    check(stat(2) === wrongThread, 'cleanup runs on the native owner thread');
    const result = {
      classBindingChecks: checks,
      classBindingConstructionChecks: constructionChecks,
      classBindingGcVerified: phase === 3,
      classBindingAllocations: stat(0) - allocated,
      classBindingFrees: stat(1) - freed,
      expectedClassBindingFrees: freed + 2,
    };
    if (phase === 3) lib.close();
    return JSON.stringify(result);
  };
}
