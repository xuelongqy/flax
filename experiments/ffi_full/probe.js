(() => {
  let checks = 0;
  const check = (ok, message) => {
    if (!ok) throw new Error(message);
    checks++;
  };
  const rejects = (action, message) => {
    let failed = false;
    try {
      action();
    } catch (_) {
      failed = true;
    }
    check(failed, message);
  };
  check(ffi.add(20, 22) === 42, 'C scalar result');
  rejects(() => ffi.add(2 ** 31, 0), 'int32 overflow');
  rejects(() => ffi.add(1.5, 0), 'fraction');
  rejects(() => ffi.add('1', 0), 'no implicit coercion');
  rejects(() => ffi.add(1), 'arity');
  rejects(() => ffi.alloc(16 * 1024 * 1024 + 1), 'allocation bound');
  const memory = ffi.alloc(8);
  const alias = ffi.alias(memory);
  const slice = ffi.slice(memory, 2, 3);
  ffi.write(slice, 1, 42);
  check(ffi.read(alias, 3) === 42, 'slice shares allocation');
  const bytes = ffi.bytes(slice);
  bytes[0] = 7;
  check(ffi.read(memory, 2) === 7, 'writable exported bytes');
  rejects(() => ffi.slice(memory, 7, 2), 'slice bounds');
  rejects(() => ffi.read(slice, 3), 'read bounds');
  rejects(() => ffi.write(slice, -1, 1), 'negative offset');
  rejects(() => ffi.write(slice, 0, 256), 'byte range');
  rejects(() => ffi.update(memory, 1), 'pointer kind');
  rejects(() => ffi.close({}), 'forged pointer');
  ffi.fault(1);
  rejects(() => ffi.counter(1), 'native allocation failure');
  const adoptionBefore = ffi.stats();
  ffi.fault(3);
  rejects(() => ffi.counter(1), 'output adoption failure');
  const adoptionAfter = ffi.stats();
  check(
    adoptionAfter.created === adoptionBefore.created + 1 &&
      adoptionAfter.destroyed === adoptionBefore.destroyed + 1,
    'adoption rollback frees C allocation',
  );
  const failing = ffi.counter(1);
  const failedBefore = ffi.stats().destroyed;
  ffi.fault(2);
  rejects(() => ffi.close(failing), 'destructor failure reported');
  check(ffi.stats().destroyed === failedBefore, 'failed destructor retains allocation');
  rejects(() => ffi.update(failing, 1), 'failed close still revokes use');
  ffi.close(failing);
  check(ffi.stats().destroyed === failedBefore + 1, 'explicit destructor retry');
  ffi.close(alias);
  ffi.close(memory);
  rejects(() => ffi.read(slice, 0), 'all aliases revoked');
  bytes[1] = 99;
  check(bytes[0] === 7 && bytes[1] === 99, 'exported lease survives logical free');
  globalThis.retainedBytes = bytes;
  const counter = ffi.counter(7);
  const counterAlias = ffi.alias(counter);
  check(ffi.update(counterAlias, 5) === 12, 'owned C pointer');
  const before = ffi.stats().destroyed;
  check(
    ffi.withCounter(counter, () => {
      ffi.close(counterAlias);
      check(ffi.stats().destroyed === before, 'reentrant close defers destructor');
    }) === 12,
    'active C call still holds lease',
  );
  check(ffi.stats().destroyed === before + 1, 'destructor after call');
  rejects(() => ffi.update(counterAlias, 1), 'closed opaque alias');
  check(ffi.inline((x) => x + 1, 41) === 42, 'callback with context');
  check(ffi.compare((a, b) => a - b, 8, 3) === 5, 'precompiled context-free thunk');
  check(
    ffi.compare((a, b) => ffi.compare((c, d) => c + d, a, b), 8, 3) === 11,
    'nested context-free binding restores stack',
  );
  check(ffi.inline((x) => ffi.inline((y) => y + 1, x), 40) === 41, 'inline reentry');
  rejects(
    () =>
      ffi.inline(() => {
        throw new Error('inline failure');
      }, 1),
    'JS error rethrown after C',
  );
  check(ffi.inline((x) => x, 42) === 42, 'callback error does not poison next call');
  rejects(
    () => ffi.inline(() => Promise.resolve(1), 0),
    'Promise rejected for sync callback',
  );
  let workerEntered = false;
  rejects(
    () =>
      ffi.wrongThread(() => {
        workerEntered = true;
        return 1;
      }, 1),
    'worker callback rejected',
  );
  check(!workerEntered, 'worker rejection happens before JS entry');
  globalThis.cleanupCounter = ffi.counter(1);
  globalThis.cleanupMemory = ffi.alloc(4);
  ffi.write(cleanupMemory, 0, 123);
  globalThis.afterCloseBytes = ffi.bytes(cleanupMemory);
  globalThis.asyncEvents = [];
  ffi.fault(4);
  rejects(() => ffi.start(() => {}, 1, 0), 'worker startup rollback');
  globalThis.ffiCheck = check;
  return JSON.stringify({ checks });
})();
