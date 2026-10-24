// The same portable assertions run on Node and both Flax engines.
export function runNodeContractProbe(ffi, path, Buffer) {
  let checks = 0;
  const check = (value, message) => {
    if (!value) throw new Error(`Node contract: ${message}`);
    ++checks;
  };
  const rejects = (action, name, code) => {
    let error;
    try {
      action();
    } catch (caught) {
      error = caught;
    }
    check(
      error?.name === name && error?.code === code,
      `expected ${name}/${code}, got ${error?.name}/${error?.code}`,
    );
  };
  const lib = new ffi.DynamicLibrary(path);
  const name = 'flax_dynamic_add';
  const definition = { arguments: ['int32', 'int32'], return: 'int32' };
  try {
    const add = lib.getFunction(name, definition);
    check(add(20, 22) === 42, 'native result');
    check(
      lib.getFunction(name, {
        arguments: ['i32', 'i32'],
        return: 'i32',
        note: 'ignored',
      }) === add,
      'aliases and unknown signature metadata',
    );
    const inherited = Object.create(definition);
    check(lib.getFunction(name, inherited) === add, 'inherited signature properties');
    rejects(() => lib.getFunction(name), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    for (const signature of [
      null,
      [],
      { return: undefined },
      { arguments: undefined },
      { arguments: [undefined] },
      { return: 42 },
      { arguments: 'int32' },
    ])
      rejects(
        () => lib.getFunction(name, signature),
        'TypeError',
        'ERR_INVALID_ARG_TYPE',
      );
    rejects(
      () => lib.getFunction(name, { return: 'int128' }),
      'TypeError',
      'ERR_INVALID_ARG_VALUE',
    );
    rejects(
      () => lib.getFunction(name, { arguments: ['void'] }),
      'TypeError',
      'ERR_INVALID_ARG_VALUE',
    );
    rejects(() => lib.getFunction(name, {}), 'TypeError', 'ERR_INVALID_ARG_VALUE');
    rejects(() => lib.getFunction(1, {}), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(() => lib.getFunctions([]), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(() => lib.getSymbol(1), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(
      () => lib.getSymbol('flax_contract_missing'),
      'Error',
      'ERR_FFI_CALL_FAILED',
    );
    const definitions = {};
    Object.defineProperty(definitions, name, { value: definition });
    check(
      Object.keys(lib.getFunctions(definitions)).length === 0,
      'non-enumerable definitions are ignored',
    );
    const noop = lib.getFunction('flax_dynamic_noop', {});
    check(noop() === undefined, 'absent properties default to void()');
    rejects(() => lib.registerCallback({}, 42), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(() => lib.unregisterCallback(null), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(() => lib.refCallback(42), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(() => lib.unrefCallback(1n), 'TypeError', 'ERR_INVALID_ARG_VALUE');
    rejects(() => add('20', 22), 'TypeError', 'ERR_INVALID_ARG_VALUE');
    rejects(() => add(20), 'TypeError', 'ERR_INVALID_ARG_VALUE');
    const echo = lib.getFunction('flax_dynamic_echo_pointer', {
      arguments: ['pointer'],
      return: 'pointer',
    });
    check(echo(null) === 0n, 'native pointer arguments accept null');
    rejects(() => echo({}), 'TypeError', 'ERR_INVALID_ARG_VALUE');
    rejects(() => echo(1), 'TypeError', 'ERR_INVALID_ARG_VALUE');

    const storage = Buffer.alloc(16),
      pointer = ffi.getRawPointer(storage);
    ffi.setInt32(pointer, 0, 42);
    check(ffi.getInt32(pointer) === 42, 'memory scalar result');
    rejects(() => ffi.getInt32(pointer, -1), 'TypeError', 'ERR_INVALID_ARG_VALUE');
    rejects(() => ffi.getInt32(pointer, '0'), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(() => ffi.setInt32(pointer), 'TypeError', 'ERR_INVALID_ARG_VALUE');
    rejects(() => ffi.getInt32(null), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(() => ffi.getInt32(0n), 'Error', 'ERR_FFI_INVALID_POINTER');
    rejects(() => ffi.toArrayBuffer(null, 0), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(() => ffi.toArrayBuffer(0n, 1), 'Error', 'ERR_FFI_INVALID_POINTER');
    rejects(() => ffi.toArrayBuffer(pointer, '1'), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(() => ffi.toArrayBuffer(pointer, -1), 'TypeError', 'ERR_INVALID_ARG_VALUE');
    rejects(
      () => ffi.toArrayBuffer(pointer, Number.MAX_SAFE_INTEGER + 1),
      'RangeError',
      'ERR_OUT_OF_RANGE',
    );
    rejects(
      () => ffi.toArrayBuffer(pointer, 1, 0),
      'TypeError',
      'ERR_INVALID_ARG_TYPE',
    );
    rejects(() => ffi.toString(null), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    check(ffi.toString(0n) === null, 'null string address');
    rejects(() => ffi.getRawPointer({}), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(
      () => ffi.exportString(42, pointer, 16),
      'TypeError',
      'ERR_INVALID_ARG_TYPE',
    );
    rejects(() => ffi.exportString('x', pointer, -1), 'RangeError', 'ERR_OUT_OF_RANGE');
    rejects(
      () => ffi.exportString('long', pointer, 1),
      'RangeError',
      'ERR_OUT_OF_RANGE',
    );
    rejects(
      () => ffi.exportBuffer(new Uint8Array(1), pointer, 16),
      'TypeError',
      'ERR_INVALID_ARG_TYPE',
    );
    rejects(
      () => ffi.exportArrayBuffer(new ArrayBuffer(2), pointer, 1),
      'RangeError',
      'ERR_OUT_OF_RANGE',
    );
    rejects(
      () => ffi.exportArrayBufferView(new Uint8Array(2), pointer, 1),
      'RangeError',
      'ERR_OUT_OF_RANGE',
    );
    check(ffi.toBuffer(0n, 0).length === 0, 'empty null span');
    lib.close();
    rejects(() => add(20, 22), 'Error', 'ERR_FFI_LIBRARY_CLOSED');
    rejects(() => lib.getFunction(name, definition), 'Error', 'ERR_FFI_LIBRARY_CLOSED');
    rejects(() => lib.getFunctions(), 'Error', 'ERR_FFI_LIBRARY_CLOSED');
    rejects(() => lib.getSymbol(name), 'Error', 'ERR_FFI_LIBRARY_CLOSED');
    lib.close();
    rejects(() => new ffi.DynamicLibrary(1), 'TypeError', 'ERR_INVALID_ARG_TYPE');
    rejects(
      () => new ffi.DynamicLibrary(path + '.missing'),
      'Error',
      'ERR_FFI_CALL_FAILED',
    );
  } finally {
    lib.close();
  }
  return { nodeContractChecks: checks };
}
