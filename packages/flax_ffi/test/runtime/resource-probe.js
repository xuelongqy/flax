export function runResourceProbe(ffi) {
  let checks = 0;
  const check = (value, message) => {
    if (!value) throw new Error(`Resource contract: ${message}`);
    ++checks;
  };
  const memory = globalThis.__flaxFfiMemory;
  const primary = { action: 'failed' },
    cleanupErrors = [];
  let pointers = [],
    attempted = [];
  function failFree(pointer) {
    memory.free(pointer);
    attempted.push(pointer);
    const error = new Error(`released ${attempted.length}`);
    cleanupErrors.push(error);
    throw error;
  }
  globalThis.__flaxFfiMemory = { ...memory, free: failFree };
  try {
    let error, arena;
    try {
      ffi.withArena((value) => {
        arena = value;
        pointers = [value.allocate(8), value.allocate(8), value.allocate(8)];
        throw primary;
      });
    } catch (caught) {
      error = caught;
    }
    check(
      error instanceof AggregateError && error.cause === primary,
      'action failure survives cleanup errors',
    );
    check(
      error.errors.length === 4 &&
        error.errors[0] === primary &&
        error.errors.slice(1).every((value, index) => value === cleanupErrors[index]),
      'every cleanup failure is retained',
    );
    check(
      attempted.every((pointer, index) => pointer === pointers[2 - index]),
      'cleanup continues in reverse order',
    );
    arena.releaseAll();
    check(attempted.length === 3, 'failed cleanup is never retried');
    let closed = false;
    try {
      arena.allocate(8);
    } catch (_) {
      closed = true;
    }
    check(closed, 'allocation rejected after cleanup');
    try {
      ffi.withArena((value) => {
        value.allocate(8);
        return 42;
      });
    } catch (caught) {
      error = caught;
    }
    check(
      error instanceof AggregateError &&
        error.errors.length === 1 &&
        !Object.prototype.hasOwnProperty.call(error, 'cause'),
      'cleanup-only failure',
    );
  } finally {
    globalThis.__flaxFfiMemory = memory;
  }
  let thrown = false;
  try {
    ffi.withArena((value) => {
      value.allocate(8);
      throw undefined;
    });
  } catch (value) {
    thrown = value === undefined;
  }
  check(thrown, 'non-Error action failure is preserved');
  const arena = new ffi.Arena(),
    pointer = arena.allocate(8);
  arena.free(pointer);
  arena.releaseAll();
  arena.releaseAll();
  check(true, 'early manual free and repeated scope close do not free twice');

  // Keep the fault injector installed until the asynchronous action settles.
  const asyncPrimary = new Error('async action failed'),
    asyncCleanup = new Error('async cleanup failed');
  let attempts = 0,
    ready = false;
  globalThis.__flaxFfiMemory = {
    ...memory,
    free(pointer) {
      memory.free(pointer);
      ++attempts;
      throw asyncCleanup;
    },
  };
  ffi
    .withArena(async (value) => {
      value.allocate(8);
      await Promise.resolve();
      throw asyncPrimary;
    })
    .then(
      () => {
        throw new Error('Expected asynchronous failure');
      },
      (error) => {
        check(
          error instanceof AggregateError &&
            error.cause === asyncPrimary &&
            error.errors[0] === asyncPrimary &&
            error.errors[1] === asyncCleanup &&
            attempts === 1,
          'asynchronous action and cleanup failures',
        );
        ready = true;
      },
    )
    .finally(() => {
      globalThis.__flaxFfiMemory = memory;
    });
  globalThis.ffiResourcePhase = () => {
    check(ready, 'asynchronous cleanup has settled');
    return { resourceContractChecks: checks };
  };
  return { resourceContractChecks: checks };
}
