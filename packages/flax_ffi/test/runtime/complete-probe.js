import ffi, {
  Buffer,
  DynamicLibrary,
  NativeFinalizer,
  struct,
  union,
  array,
  sizeOf,
  alignOf,
  offsetOf,
  view,
  layout,
  getRawPointer,
  bindFunction,
  malloc,
  calloc,
  free,
  withArena,
  toUint8Array,
  exportString,
  toUtf16String,
  getInt64,
  setInt64,
  getUint64,
  setUint64,
  getFloat64,
  setFloat64,
  getInt32,
  setInt32,
  read,
  write,
  suffix,
  types,
  abi,
} from '@flax/ffi';
import nodeFfi from 'node:ffi';
import { Buffer as NodeBuffer } from 'node:buffer';
import cjsFfi from './ffi-consumer.cjs';

export function runCompleteProbe() {
  let checks = 0;
  function check(condition, message) {
    if (!condition) throw new Error(`Complete FFI check ${checks + 1}: ${message}`);
    ++checks;
  }
  function rejects(action, message) {
    let failure;
    try {
      action();
    } catch (error) {
      failure = error;
    }
    check(
      failure instanceof Error && (!message || String(failure).includes(message)),
      message ?? 'invalid input rejected',
    );
  }
  check(
    ffi.dlopen === nodeFfi.dlopen && cjsFfi.dlopen === ffi.dlopen,
    'ESM/default/node:ffi/CommonJS share one implementation',
  );
  check(
    Buffer === NodeBuffer && suffix === 'dylib' && types.UINT_64 === 'uint64',
    'portable constants and optional Buffer identity',
  );
  check(
    Buffer.copyBytesFrom(new Uint16Array([0, 0xffff]), 1, 1).join() === '255,255',
    'modern Buffer byte-copy API',
  );
  check(
    Buffer.stringLength(Buffer.from('中文😀')) === 4 &&
      Buffer.stringLength(Buffer.from([0xe2, 0x82])) === 1,
    'decoded UTF-16 length without allocating a string',
  );
  check(
    Buffer.from([0xe2, 0x82]).toString() === '\ufffd' &&
      Buffer.from('SGVsbG8', 'base64url').toString() === 'Hello',
    'maximal invalid UTF-8 subsequences and base64url',
  );
  check(
    getRawPointer(Buffer.allocUnsafe(32, 64)) % 64n === 0n,
    'aligned Buffer keeps JS ownership',
  );
  check(
    abi.pointerSize === 8 &&
      abi.architecture === 'arm64' &&
      abi.callbackBackend === 'precompiled-libffi-table',
    'target ABI and precompiled callback backend',
  );

  const Point = struct({ x: 'double', y: 'double' });
  check(layout(Point) === layout(Point), 'normalized immutable layout is cached');
  const mutableFields = [{ name: 'value', type: 'int32' }];
  const shallowFrozen = Object.freeze({ kind: 'struct', fields: mutableFields });
  check(sizeOf(shallowFrozen) === 4, 'external descriptor initial layout');
  mutableFields[0].type = 'double';
  mutableFields.push({ name: 'tag', type: 'uint8' });
  check(
    sizeOf(shallowFrozen) === 16 && offsetOf(shallowFrozen, 'tag') === 8,
    'shallow freezing does not cache mutable nested fields',
  );
  const Grid = struct({ points: array(Point, 2), tag: 'int32' });
  const Word = union({ bits: 'uint64', number: 'double' });
  const Floats = union({ single: 'float', values: array('float', 3) });
  const Packed = struct({ tag: 'uint8', value: 'double' }, { pack: 1 });
  const PackedFloats = struct({ x: 'float', y: 'float' }, { pack: 1 });
  const Large = union({ words: array('uint64', 3), point: Point });
  const Flexible = struct({ count: 'uint32', bytes: array('uint8', null) });
  const shapes = [Point, Grid, Word, Floats, Packed, PackedFloats, Large, Flexible];
  for (const [path, prefix] of [
    [null, 'flax_static_'],
    [globalThis.fixturePath, 'flax_dynamic_'],
  ]) {
    const lib = new DynamicLibrary(path);
    const f = (name, args, returns) =>
      lib.getFunction(prefix + name, { arguments: args, return: returns });
    let jsonCalls = 0;
    const disguised = (value) => ({
      toJSON() {
        ++jsonCalls;
        return value;
      },
    });
    const invalidGrid = {
      ...Grid,
      fields: [
        { ...Grid.fields[0], type: { ...Grid.fields[0].type, length: disguised(2) } },
        Grid.fields[1],
      ],
    };
    const invalidPoint = {
      ...Point,
      fields: [{ ...Point.fields[0], name: disguised('x') }, Point.fields[1]],
    };
    for (const [name, validArgs, invalidArgs, returns] of [
      ['grid', [Grid], [invalidGrid], Grid],
      ['packed', [Packed], [{ ...Packed, pack: disguised(1) }], Packed],
      ['point', [Point, 'double'], [invalidPoint, 'double'], Point],
    ]) {
      for (const cached of [false, true]) {
        const candidate = new DynamicLibrary(path),
          symbol = prefix + name;
        const original = cached
          ? candidate.getFunction(symbol, { arguments: validArgs, return: returns })
          : undefined;
        let error;
        try {
          candidate.getFunction(symbol, { arguments: invalidArgs, return: returns });
        } catch (caught) {
          error = caught;
        }
        check(
          error instanceof TypeError &&
            error.code === 'ERR_INVALID_ARG_TYPE' &&
            candidate.functions[symbol] === original,
          'aggregate length, packing and names are validated before cold or cached binding',
        );
        candidate.close();
      }
    }
    check(
      jsonCalls === 0,
      'invalid aggregate values never invoke toJSON for cache keys',
    );
    const i64 = f('i64', ['i64'], 'int64'),
      u64 = f('u64', ['u64'], 'uint64');
    const character = f('character', ['char'], 'char');
    const charType = globalThis.__flaxFfiTypeAliases.char;
    check(
      f('character', [charType], charType) === character,
      'platform char aliases reuse the full binding contract',
    );
    check(
      i64(-0x8000000000000000n) === -0x8000000000000000n && i64(42) === 42n,
      'signed 64-bit exact values and safe numbers',
    );
    check(u64(0xffffffffffffffffn) === 0xffffffffffffffffn, 'unsigned 64-bit maximum');
    rejects(() => i64(0x8000000000000000n), 'range');
    rejects(() => u64(-1n), 'range');
    rejects(() => u64(Number.MAX_SAFE_INTEGER + 1), 'exact');
    check(
      f('c_long', ['long'], 'long')(-123n) === -123n &&
        f('c_size', ['size_t'], 'size_t')(42) === 42n,
      'ABI-specific native integers',
    );
    check(
      f('wide_char', ['wchar_t'], 'wchar_t')(0x4e2d) === 0x4e2d,
      'native wchar width',
    );
    const textLength = f('text_length', ['string'], 'uint64');
    check(
      textLength('中文😀') === 10n && textLength('a\0b') === 1n,
      'temporary UTF-8 strings follow C terminators',
    );
    const text = Buffer.from('Flax\0');
    check(
      textLength(text) === 4n && textLength(text.subarray(1)) === 3n,
      'Buffer directly borrows its actual slice',
    );
    check(
      textLength(new DataView(text.buffer, text.byteOffset + 1, 4)) === 3n,
      'DataView direct conversion',
    );
    check(
      f(
        'sum20',
        Array(20).fill('int32'),
        'int32',
      )(...Array.from({ length: 20 }, (_, i) => i + 1)) === 210,
      'more than 16 native arguments',
    );
    const nativeLayout = f('layout', ['uint32', 'uint32'], 'uint64');
    shapes.forEach((shape, index) => {
      check(
        BigInt(sizeOf(shape)) === nativeLayout(index, 0),
        'target compiler aggregate size',
      );
      check(
        BigInt(alignOf(shape)) === nativeLayout(index, 1),
        'target compiler aggregate alignment',
      );
    });
    for (const [index, field] of [
      [0, 'y'],
      [1, 'tag'],
      [4, 'value'],
      [7, 'bytes'],
    ])
      check(
        BigInt(offsetOf(shapes[index], field)) === nativeLayout(index, 2),
        'target compiler field offset',
      );
    const point = view(Point, Buffer.alloc(sizeOf(Point)));
    point.x = 12.5;
    point.y = 20.5;
    const moved = view(Point, f('point', [Point, 'double'], Point)(point, 2));
    check(
      moved.x === 14.5 && moved.y === 18.5 && point.x === 12.5,
      'HFA struct arguments/results are independent copies',
    );
    const grid = view(Grid, Buffer.alloc(sizeOf(Grid)));
    grid.points[1].y = 5;
    grid.tag = 7;
    const changed = view(Grid, f('grid', [Grid], Grid)(grid));
    check(
      changed.points[1].y === 12 && changed.tag === 8,
      'large nested struct and inline arrays',
    );
    const word = view(Word, Buffer.alloc(sizeOf(Word)));
    word.bits = 0xfedcba9876543210n;
    check(
      view(Word, f('word', [Word], Word)(word)).bits ===
        (word.bits ^ 0x123456789abcdef0n),
      'mixed union by value',
    );
    const floats = view(Floats, Buffer.alloc(sizeOf(Floats)));
    floats.values[0] = 1;
    floats.values[1] = 2;
    floats.values[2] = 3;
    const floatsResult = view(Floats, f('floats', [Floats], Floats)(floats));
    check(
      floatsResult.values[0] === 2 && floatsResult.values[2] === 6,
      'homogeneous union by value',
    );
    const packed = view(Packed, Buffer.alloc(sizeOf(Packed)));
    packed.tag = 3;
    packed.value = 4.5;
    const packedResult = view(Packed, f('packed', [Packed], Packed)(packed));
    check(
      packedResult.tag === 4 && packedResult.value === 9,
      'unaligned packed struct by value',
    );
    const packedFloats = view(PackedFloats, Buffer.alloc(sizeOf(PackedFloats)));
    packedFloats.x = 2;
    packedFloats.y = 3;
    const packedFloatResult = view(
      PackedFloats,
      f('packed_floats', [PackedFloats], PackedFloats)(packedFloats),
    );
    check(
      packedFloatResult.x === 3 && packedFloatResult.y === 5,
      'packed HFA struct by value',
    );
    const large = view(Large, Buffer.alloc(sizeOf(Large)));
    large.words[2] = 20n;
    check(
      view(Large, f('large', [Large], Large)(large)).words[2] === 25n,
      'large union indirect ABI',
    );
    const flexible = view(Flexible, Buffer.alloc(sizeOf(Flexible) + 3));
    flexible.count = 3;
    flexible.bytes[0] = 1;
    flexible.bytes[1] = 2;
    flexible.bytes[2] = 3;
    check(
      f('flexible', ['pointer'], 'uint32')(flexible.$bytes) === 6,
      'variable inline array allocation and pointer call',
    );
    const variadic = lib.bindFunction(lib.getSymbol(prefix + 'variadic_int'), {
      arguments: ['uint32', 'int32', 'int32', 'int32'],
      fixedArguments: 1,
      return: 'int64',
    });
    check(variadic(3, 10, 20, 12) === 42n, 'explicit integer varargs');
    const variadicOther = bindFunction(lib.getSymbol(prefix + 'variadic_int'), {
      arguments: ['uint32', 'int32'],
      fixedArguments: 1,
      return: 'int64',
    });
    check(
      variadicOther(1, 42) === 42n,
      'multiple variadic shapes from one function address',
    );
    check(
      lib.getFunction(prefix + 'variadic_mixed', {
        arguments: ['int32', 'int32', 'double', 'string'],
        fixedArguments: 1,
        return: 'double',
      })(1, 2, 3.5, 'abc') === 9.5,
      'Apple arm64 mixed variadic ABI',
    );
    for (const fixedArguments of [undefined, 2, 4])
      rejects(
        () =>
          lib.getFunction(prefix + 'variadic_mixed', {
            arguments: ['int32', 'int32', 'double', 'string'],
            ...(fixedArguments === undefined ? {} : { fixedArguments }),
            return: 'double',
          }),
        'different signature',
      );
    rejects(
      () =>
        lib.bindFunction(lib.getSymbol(prefix + 'variadic_int'), {
          arguments: ['uint32', 'float'],
          fixedArguments: 1,
          return: 'int64',
        }),
      'promotions',
    );
    const addPointer = f('add_pointer', [], 'pointer')();
    check(
      bindFunction(addPointer, { arguments: ['int32', 'int32'], return: 'int32' })(
        20,
        22,
      ) === 42,
      'returned native function pointer',
    );
    check(
      lib.providesSymbol(prefix + 'global_value') &&
        !lib.providesSymbol('flax_missing_symbol'),
      'symbol presence checks',
    );
    const global = lib.getSymbol(prefix + 'global_value');
    setInt32(global, 0, 93);
    check(
      getInt32(global) === 93 && f('global_read', [], 'int32')() === 93,
      'native global read/write',
    );
    lib.close();
  }
  const executable = DynamicLibrary.executable();
  check(
    executable.providesSymbol('flax_static_add') &&
      !executable.providesSymbol('flax_dynamic_add'),
    'executable-only symbol scope',
  );
  executable.close();

  const storage = Buffer.alloc(40),
    pointer = getRawPointer(storage);
  setInt64(pointer, 1, -0x123456789abcdefn);
  check(
    getInt64(pointer, 1) === -0x123456789abcdefn,
    'unaligned signed 64-bit memory access',
  );
  setUint64(pointer, 9, 0xffffffffffffffffn);
  check(
    getUint64(pointer, 9) === 0xffffffffffffffffn,
    'unsigned primitive memory access',
  );
  setFloat64(pointer, 17, NaN);
  check(Number.isNaN(getFloat64(pointer, 17)), 'IEEE NaN memory roundtrip');
  write('int32', pointer + 4n, -4, 42);
  check(getInt32(pointer) === 42, 'signed byte offsets');
  for (const offset of [0, 4, -4]) {
    for (const action of [
      () => read('int32', 0n, offset),
      () => write('int32', 0n, offset, 42),
    ]) {
      let error;
      try {
        action();
      } catch (caught) {
        error = caught;
      }
      check(
        error?.code === 'ERR_FFI_INVALID_POINTER',
        `null base rejects before applying byte offset ${offset}`,
      );
    }
  }
  write('pointer', pointer, 0, pointer);
  check(read('pointer', pointer) === pointer, 'pointer-to-pointer out slot');
  rejects(() => setInt64(pointer, 0, Number.MAX_SAFE_INTEGER + 1), 'exact');
  const aligned = calloc(64, 64);
  check(
    aligned % 64n === 0n && toUint8Array(aligned, 64).every((byte) => byte === 0),
    'aligned native zero allocation',
  );
  free(aligned);
  check(
    withArena((arena) => arena.allocate(16, { alignment: 32 }) % 32n === 0n),
    'scoped allocation releases after success',
  );
  rejects(
    () =>
      withArena((arena) => {
        arena.allocate(8);
        throw new Error('arena failure');
      }),
    'arena failure',
  );
  const big = new Uint8Array(16 * 1024 * 1024 + 1);
  const bigPointer = getRawPointer(big);
  check(
    toUint8Array(bigPointer + BigInt(big.length - 1), 1).length === 1,
    'no prototype 16 MiB source limit',
  );
  exportString('中文😀', pointer, storage.length, 'UTF-16LE');
  check(toUtf16String(pointer) === '中文😀', 'NUL-terminated UTF-16 conversion');
  exportString('4142', pointer, storage.length, 'hex');
  check(
    storage[0] === 65 && storage[1] === 66 && storage[2] === 0,
    'hex and encoding aliases',
  );

  const lib = DynamicLibrary.process();
  const call = lib.getFunction('flax_static_call_callback', {
    arguments: ['pointer', 'int32'],
    return: 'int32',
  });
  const callThread = lib.getFunction('flax_static_call_on_thread', {
    arguments: ['pointer', 'int32'],
    return: 'int32',
  });
  const callback = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    (number) => number * 2,
  );
  check(
    call(callback, 21) === 42 && call(callback, 7) === 14,
    'registered synchronous callback',
  );
  const nested = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    (number) => call(callback, number) + 1,
  );
  check(call(nested, 20) === 41, 'nested native/JS callback frames');
  const failing = lib.registerCallback(
    { return: 'int32', arguments: ['int32'] },
    () => {
      throw new Error('callback failure');
    },
    { exceptionalReturn: -1 },
  );
  rejects(() => call(failing, 1), 'callback failure');
  lib.unregisterCallback(failing);
  const closing = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    () => {
      rejects(() => lib.close(), 'active');
      return 42;
    },
  );
  check(call(closing, 0) === 42, 'close rejected during active callback');
  lib.unregisterCallback(closing);
  const pointCallback = lib.registerCallback(
    { arguments: [Point], return: Point },
    (bytes) => {
      const point = view(Point, bytes);
      point.x += 2;
      point.then = { metadata: true };
      return point;
    },
  );
  const pointInput = view(Point, Buffer.alloc(sizeOf(Point)));
  pointInput.x = 3;
  pointInput.y = 4;
  const notBool = lib.getFunction('flax_static_not_bool', {
    arguments: ['c_bool'],
    return: 'c_bool',
  });
  check(
    notBool(false) === true && notBool(true) === false,
    'C bool arguments and results',
  );
  rejects(
    () =>
      lib.getFunction('flax_static_not_bool', {
        arguments: ['uint8'],
        return: 'uint8',
      }),
    'different signature',
  );
  const boolStorage = new Uint8Array(1);
  const boolView = view(struct({ value: 'c_bool' }), boolStorage);
  boolView.value = true;
  check(boolStorage[0] === 1 && boolView.value === true, 'C bool memory layout');
  const callPoint = lib.getFunction('flax_static_call_point_callback', {
    arguments: ['pointer', Point],
    return: Point,
  });
  check(
    view(Point, callPoint(pointCallback, pointInput)).x === 5,
    'aggregate callback arguments and return values',
  );
  const isolated = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    '(value) => value + context.offset',
    { mode: 'isolated', context: { offset: 2 } },
  );
  check(
    callThread(isolated, 40) === 42 && callThread(isolated, 20) === 22,
    'worker synchronous callback executes in an independent JS runtime',
  );
  const isolatedPointer = lib.registerCallback(
    { arguments: ['pointer'], return: 'int32' },
    '(pointer) => ffi.getInt32(pointer) + context.offset',
    { mode: 'isolated', context: { offset: 2 } },
  );
  const callPointerThread = lib.getFunction('flax_static_call_pointer_on_thread', {
    arguments: ['pointer', 'pointer'],
    return: 'int32',
  });
  const inputWord = Buffer.alloc(4);
  inputWord.writeInt32LE(40);
  check(
    callPointerThread(isolatedPointer, inputWord) === 42,
    'isolated callback reuses native memory helpers',
  );
  const addAddress = lib.getSymbol('flax_static_add');
  const isolatedCall = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    '(value) => ffi.bindFunction(BigInt(context.address), { arguments: ["int32", "int32"], return: "int32" })(value, 2)',
    { mode: 'isolated', context: { address: String(addAddress) } },
  );
  check(
    callThread(isolatedCall, 40) === 42,
    'isolated callback reuses the native call backend without Dart',
  );
  const setRetained = lib.getFunction('flax_static_set_retained', {
    arguments: ['pointer'],
  });
  const callRetained = lib.getFunction('flax_static_call_retained', {
    arguments: ['int32'],
    return: 'int32',
  });
  const clearRetained = lib.getFunction('flax_static_clear_retained', {});
  setRetained(callback);
  check(callRetained(21) === 42, 'retained callback without user_data');
  clearRetained();
  let notification;
  const listener = lib.registerCallback(
    { arguments: ['pointer', 'uint32'] },
    (address, length) => {
      notification = Array.from(toUint8Array(address, length));
    },
    { mode: 'listener', copies: [{ argument: 0, lengthArgument: 1 }] },
  );
  const notify = lib.getFunction('flax_static_notify_on_thread', {
    arguments: ['pointer'],
  });
  notify(listener);
  check(
    notification === undefined,
    'worker notification is deferred until a host checkpoint',
  );
  let weakHandler = (number) => number + 1;
  const weak = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    weakHandler,
  );
  lib.unrefCallback(weak);
  lib.refCallback(weak);
  lib.unrefCallback(weak);
  weakHandler = null;

  const nativeFree = lib.getFunction('flax_static_finalizer_free', {
    arguments: ['pointer'],
  });
  const freeCount = lib.getFunction('flax_static_finalizer_count', {
    return: 'uint32',
  });
  const finalizer = new NativeFinalizer(nativeFree);
  const stat = lib.getFunction('flax_ffi_dlopen_stat', {
    arguments: ['uint32'],
    return: 'uint64',
  });
  const longLivedTarget = {},
    recordBaseline = stat(9);
  for (let i = 0; i < 128; i++) {
    const pointer = malloc(8),
      key = {};
    finalizer.attach(longLivedTarget, pointer, { detach: key, externalSize: 8 });
    finalizer.detach(key);
    nativeFree(pointer);
  }
  check(
    stat(9) === recordBaseline,
    'detach releases records while its target stays alive',
  );
  const baselineFrees = freeCount();
  let owner = {};
  const completedKey = {};
  finalizer.attach(owner, malloc(8), { detach: completedKey, externalSize: 8 });
  owner = null;
  let detached = {};
  const detachedPointer = malloc(8);
  finalizer.attach(detached, detachedPointer);
  finalizer.detach(detached);
  rejects(() => finalizer.detach(detached), 'not pending');
  rejects(() => finalizer.detach({}), 'not pending');
  nativeFree(detachedPointer);
  detached = null;
  const shutdownOwner = {};
  finalizer.attach(shutdownOwner, malloc(8));
  globalThis.ffiShutdownOwner = shutdownOwner;
  const groupKey = {},
    groupOwner = {};
  finalizer.attach(groupOwner, malloc(8), { detach: groupKey });
  let groupCollected = {};
  finalizer.attach(groupCollected, malloc(8), { detach: groupKey });
  groupCollected = null;
  globalThis.ffiPreparePending = () => {
    const pendingKey = {},
      pendingPointer = malloc(8);
    finalizer.attach({}, pendingPointer, { detach: pendingKey });
    globalThis.ffiCancelPending = () => {
      finalizer.detach(pendingKey);
      nativeFree(pendingPointer);
      return 'cancelled';
    };
  };
  let notificationsAfterClose = 0;
  const workerLib = DynamicLibrary.process();
  const stopWorker = workerLib.getFunction('flax_static_worker_stop', {});
  const workerStopCount = workerLib.getFunction('flax_static_worker_stop_count', {
    return: 'uint32',
  });
  const owned = workerLib.registerCallback(
    {},
    () => {
      ++notificationsAfterClose;
    },
    { mode: 'listener', stop: stopWorker },
  );
  const workerStart = workerLib.getFunction('flax_static_worker_start', {
    arguments: ['pointer'],
    return: 'uint32',
  });
  check(workerStart(owned) === 1, 'owned native producer starts');
  workerLib.close();
  check(
    lib.getFunction('flax_static_worker_stop_count', { return: 'uint32' })() === 1,
    'close waits for native-only producer stop',
  );

  globalThis.ffiCompletePhase = (phase) => {
    if (phase === 1) {
      check(
        longLivedTarget !== null && stat(10) === 2n,
        'GC reclaims cancelled peers while retaining the target and two pending attachments',
      );
      check(
        notification?.join() === '11,22,33,44',
        'listener copied transient C stack bytes',
      );
      check(
        notificationsAfterClose === 0,
        'no queued callback after native producer retirement',
      );
      check(call(weak, 1) === 0, 'weak callback becomes a no-op after GC');
      rejects(() => lib.refCallback(weak), 'collected');
      check(
        freeCount() === baselineFrees + 4,
        'GC, pending cancellation and detached manual frees run once',
      );
      for (const key of [completedKey, groupKey]) {
        let error;
        try {
          finalizer.detach(key);
        } catch (caught) {
          error = caught;
        }
        check(
          error?.code === 'ERR_INVALID_STATE',
          'completed cancellation is rejected',
        );
      }
      check(groupOwner !== null, 'mixed cancellation group retains its live target');
      check(
        callThread(callback, 1) === 0,
        'wrong-thread same-runtime callback returns a native fallback',
      );
    } else {
      check(
        freeCount() === baselineFrees + 4,
        'later GC does not repeat native cleanup',
      );
      for (const pointer of [
        callback,
        nested,
        pointCallback,
        isolated,
        isolatedPointer,
        isolatedCall,
        listener,
        weak,
      ])
        lib.unregisterCallback(pointer);
    }
    return JSON.stringify({
      completeChecks: checks,
      callbacksVerified: phase === 2,
      finalizersVerified: phase === 2,
      ...globalThis.ffiResourcePhase(),
      expectedShutdownFrees: baselineFrees + 6,
    });
  };
  Object.assign(globalThis.dlopenResult, {
    completeChecks: checks,
    aggregateShapes: shapes.length,
    nativeCallbackBackend: abi.callbackBackend,
  });
}
