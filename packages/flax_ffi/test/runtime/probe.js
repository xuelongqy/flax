import { DynamicLibrary, NativeFinalizer, dlopen, dlclose, dlsym } from '@flax/ffi';
import { runMemoryProbe } from './memory-probe.js';

export function runDlopenProbe(memoryOptions) {
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
      message || 'invalid input rejected',
    );
  }
  function signature(arguments_, result) {
    return { arguments: arguments_, return: result };
  }
  function bind(path, prefix) {
    const definitions = {
      add: signature(['int32', 'int32'], 'int32'),
      mixed: signature(
        [
          'int32',
          'double',
          'float',
          'uint32',
          'int32',
          'double',
          'float',
          'int32',
          'double',
          'uint32',
        ],
        'double',
      ),
      sum12: signature(Array(12).fill('int32'), 'int32'),
      sum12d: signature(Array(12).fill('double'), 'double'),
      store: signature(['int32'], 'void'),
      read: signature([], 'int32'),
      token: signature(['int32'], 'pointer'),
      dereference: signature(['pointer'], 'int32'),
    };
    for (const [name, type] of Object.entries({
      i8: 'int8',
      u8: 'uint8',
      i16: 'int16',
      u16: 'uint16',
      i32: 'int32',
      u32: 'uint32',
      f32: 'float',
      f64: 'double',
    }))
      definitions[name] = signature([type], type);
    const { lib, functions } = dlopen(
      path,
      Object.fromEntries(
        Object.entries(definitions).map(([name, definition]) => [
          prefix + name,
          definition,
        ]),
      ),
    );
    return {
      lib,
      functions: Object.fromEntries(
        Object.keys(definitions).map((name) => [name, functions[prefix + name]]),
      ),
    };
  }

  const missing = { flax_definitely_missing: signature([], 'void') };
  rejects(() => dlopen(null, missing), 'flax_definitely_missing');
  rejects(() => dlopen(globalThis.fixturePath + '.missing', {}), 'does not exist');
  rejects(() => dlopen(globalThis.fixturePath, missing), 'flax_definitely_missing');
  rejects(
    () => dlopen(null, { bad: signature(['void'], 'void') }),
    'Unsupported FFI type',
  );
  rejects(
    () => dlopen(null, { bad: signature(['int128'], 'int32') }),
    'Unsupported FFI type',
  );
  rejects(() => dlopen('a\0b', {}), 'no NUL');
  rejects(() => dlopen(null, { 'bad\0name': signature([], 'void') }), 'no NUL');
  rejects(() => dlopen(undefined, {}), 'Expected DynamicLibrary');
  rejects(() => dlopen(null, []), 'definitions object');
  // No Dart lookup or native static reference loads the dynamic fixture beforehand.
  const dynamicAdd = { flax_dynamic_add: signature(['int32', 'int32'], 'int32') };
  rejects(() => dlopen(null, dynamicAdd), 'flax_dynamic_add');

  const staticallyLinked = bind(null, 'flax_static_');
  const changingArguments = ['int32', 'int32'];
  Object.defineProperty(changingArguments, 0, {
    get() {
      changingArguments.push('int32');
      return 'int32';
    },
  });
  const snapshot = dlopen(null, {
    flax_static_add: signature(changingArguments, 'int32'),
  });
  check(
    snapshot.functions.flax_static_add(20, 22) === 42,
    'signature array length is snapshotted',
  );
  snapshot.lib.close();
  const dynamic = bind(globalThis.fixturePath, 'flax_dynamic_');
  // RTLD_LOCAL symbols stay outside the process/global lookup scope.
  rejects(() => dlopen(null, dynamicAdd), 'flax_dynamic_add');

  for (const { functions: f } of [staticallyLinked, dynamic]) {
    check(f.add(20, 22) === 42, 'int32 C call');
    check(f.mixed(1, 2.5, 3.5, 4, 5, 6.25, 7.75, 8, 1, 3) === 42, 'mixed registers');
    check(
      f.sum12(...Array.from({ length: 12 }, (_, i) => i + 1)) === 78,
      'integer stack arguments',
    );
    check(
      f.sum12d(...Array.from({ length: 12 }, (_, i) => i + 1)) === 78,
      'floating stack arguments',
    );
    check(f.i8(-128) === -128 && f.u8(255) === 255, '8-bit returns');
    check(f.i16(-32768) === -32768 && f.u16(65535) === 65535, '16-bit returns');
    check(
      f.i32(-2147483648) === -2147483648 && f.u32(4294967295) === 4294967295,
      '32-bit returns',
    );
    check(f.f32(1.25) === 1.25 && f.f64(-2.5) === -2.5, 'floating returns');
    check(f.store(37) === undefined && f.read() === 37, 'void and no-argument calls');
    const pointer = f.token(1);
    check(
      typeof pointer === 'bigint' && f.dereference(pointer) === 37,
      'raw bigint pointer',
    );
    check(
      f.token(0) === 0n &&
        f.dereference(null) === -1 &&
        f.dereference(0n) === -1 &&
        f.dereference(undefined) === -1,
      'null pointers',
    );
    rejects(() => f.add(1), 'argument count');
    rejects(() => f.i8(128), 'out of range');
    rejects(() => f.u32(-1), 'out of range');
    rejects(() => f.i32(1.5), 'out of range');
    check(f.f32(Infinity) === Infinity, 'IEEE infinity is preserved');
    rejects(() => f.dereference({}));
    rejects(() => f.dereference(42), 'bigint pointer');
  }
  for (const [path, prefix] of [
    [null, 'flax_static_'],
    [globalThis.fixturePath, 'flax_dynamic_'],
  ]) {
    const addName = prefix + 'add',
      readName = prefix + 'read',
      addSignature = signature(['int32', 'int32'], 'int32');
    const reentrant = new DynamicLibrary(path);
    let inner;
    const batchWithGetter = reentrant.getFunctions({
      [addName]: addSignature,
      get [readName]() {
        inner = reentrant.getFunction(addName, addSignature);
        return { return: 'int32' };
      },
    });
    check(
      batchWithGetter[addName] === inner &&
        reentrant.functions[addName] === inner &&
        inner(20, 22) === 42,
      'reentrant equivalent binding preserves one function identity',
    );
    reentrant.close();
    const conflicting = new DynamicLibrary(path);
    rejects(
      () =>
        conflicting.getFunctions({
          [addName]: addSignature,
          get [readName]() {
            inner = conflicting.getFunction(
              addName,
              signature(['double', 'double'], 'double'),
            );
            return { return: 'int32' };
          },
        }),
      'different signature',
    );
    check(
      conflicting.functions[addName] === inner && !(readName in conflicting.functions),
      'reentrant conflict cannot overwrite the inner cache or publish the outer batch',
    );
    conflicting.close();
    const closedByGetter = new DynamicLibrary(path);
    rejects(
      () =>
        closedByGetter.getFunction(addName, {
          get arguments() {
            closedByGetter.close();
            return ['int32', 'int32'];
          },
          return: 'int32',
        }),
      'closed',
    );
    const lib = new DynamicLibrary(path);
    check(
      lib.path === path &&
        Object.keys(lib.functions).length === 0 &&
        Object.keys(lib.symbols).length === 0,
      'constructor opens without binding symbols',
    );
    const name = prefix + 'add';
    const address = lib.getSymbol(name);
    check(
      typeof address === 'bigint' && address !== 0n && dlsym(lib, name) === address,
      'symbol addresses are bigint',
    );
    const definition = signature(['int32', 'int32'], 'int32');
    const add = lib.getFunction(name, definition);
    check(
      add.pointer === address && add(20, 22) === 42,
      'incremental function binding',
    );
    check(
      lib.getFunction(name, definition) === add &&
        lib.functions[name] === add &&
        lib.getFunctions()[name] === add,
      'same signature reuses function identity',
    );
    rejects(
      () => lib.getFunction(name, signature(['int32'], 'int32')),
      'different signature',
    );
    const functions = lib.functions;
    delete functions[name];
    check(lib.functions[name] === add, 'public snapshots cannot mutate binding cache');
    check(
      Object.keys(lib.getSymbols()).length === 1 && lib.symbols[name] === address,
      'symbols list contains resolved entries only',
    );
    rejects(() => lib.getSymbol('flax_definitely_missing'), 'flax_definitely_missing');
    check(add(20, 22) === 42, 'failed lookup leaves library usable');
    const read = lib.getFunction(prefix + 'read', { return: 'int32' });
    check(read() === 37, 'argument list defaults to empty');
    check(
      lib.getFunction(prefix + 'noop', {})() === undefined,
      'default void signature',
    );
    const f32 = lib.getFunction(prefix + 'f32', {
      arguments: ['float32'],
      return: 'float32',
    });
    check(
      f32 === lib.getFunction(prefix + 'f32', signature(['float'], 'float')) &&
        f32(1.25) === 1.25,
      'equivalent aliases reuse one binding',
    );
    const echo = lib.getFunction(
      prefix + 'echo_pointer',
      signature(['pointer'], 'pointer'),
    );
    const wide = 0xfedcba9876543210n;
    check(
      echo(wide) === wide && echo(0n) === 0n,
      'opaque 64-bit addresses are lossless',
    );
    rejects(() => echo(-1n), 'out of range');
    rejects(() => echo(1n << 64n), 'out of range');
    rejects(() => echo(42), 'bigint pointer');
    const batch = lib.getFunctions({
      [name]: definition,
      [prefix + 'read']: { return: 'int32' },
    });
    check(
      batch[name] === add && batch[prefix + 'read'] === read,
      'batch and incremental binding share cache',
    );
    rejects(
      () =>
        lib.getFunctions({
          [prefix + 'u8']: signature(['uint8'], 'uint8'),
          flax_definitely_missing: {},
        }),
      'flax_definitely_missing',
    );
    check(
      !(prefix + 'u8' in lib.functions) && !(prefix + 'u8' in lib.symbols),
      'failed batch publishes neither functions nor symbols',
    );
    check(
      typeof lib.registerCallback === 'function',
      'callback registration is available',
    );
    dlclose(lib);
    lib.close();
    rejects(() => add(1, 2), 'closed');
    rejects(() => lib.getFunction(name, definition), 'closed');
    rejects(() => lib.getFunctions(), 'closed');
    rejects(() => lib.getSymbol(name), 'closed');
    rejects(() => lib.getSymbols(), 'closed');
    if (typeof Symbol.dispose === 'symbol') lib[Symbol.dispose]();
    const opened = dlopen(path);
    check(
      opened.lib instanceof DynamicLibrary &&
        Object.keys(opened.functions).length === 0,
      'dlopen without definitions returns the common library class',
    );
    check(
      opened.lib.getFunction(name, definition)(20, 22) === 42,
      'dlopen handle supports later binding',
    );
    opened.lib.close();
  }
  const pointer = dynamic.functions.token(1);
  check(
    staticallyLinked.functions.dereference(pointer) === 37,
    'pointer across live libraries',
  );
  const savedAdd = dynamic.functions.add;
  dynamic.lib.close();
  dynamic.lib.close();
  rejects(() => savedAdd(1, 2), 'closed');
  check(
    typeof pointer === 'bigint',
    'closed-image addresses are opaque; never dereference them',
  );
  check(staticallyLinked.functions.add(20, 22) === 42, 'other library remains live');
  const reopened = bind(globalThis.fixturePath, 'flax_dynamic_');
  check(
    reopened.functions.read() === 42,
    'closing the last scope releases its loader handle',
  );
  for (let i = 0; i < 10; i++) dlopen(globalThis.fixturePath, dynamicAdd).lib.close();
  reopened.lib.close();
  const secondProcess = dlopen(null, {
    flax_static_add: signature(['int32', 'int32'], 'int32'),
  });
  staticallyLinked.lib.close();
  rejects(() => staticallyLinked.functions.add(1, 2), 'closed');
  check(
    secondProcess.functions.flax_static_add(20, 22) === 42,
    'closing process binding never unloads the process',
  );
  // Keep callable objects reachable to test installation retirement from the driver.
  globalThis.savedProcessCall = secondProcess.functions.flax_static_add;
  globalThis.savedOpen = dlopen;
  globalThis.dlopenResult = {
    checks,
    memoryChecks: runMemoryProbe(globalThis.fixturePath, memoryOptions),
    staticAnswer: 42,
    dynamicAnswer: 42,
  };
  // Keep the factory's code image alive beyond FFI retirement, until VM destruction.
  const cleanupLibrary = new DynamicLibrary(globalThis.fixturePath);
  globalThis.savedImageFinalizer = new NativeFinalizer(
    cleanupLibrary.getFunction('flax_dynamic_memory_free', {
      arguments: ['pointer'],
    }),
  );
  cleanupLibrary.close();
}
