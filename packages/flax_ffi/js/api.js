import { Buffer } from './buffer.js';
import {
  nativeType,
  struct,
  union,
  array,
  layout,
  sizeOf,
  alignOf,
  offsetOf,
  view,
} from './layout.js';

if (!globalThis.__flaxFfiDlopen && typeof globalThis.__flaxBaseCall === 'function')
  globalThis.__flaxBaseCall('ffiInstall');

const apply = Reflect.apply;
const weakMapDelete = WeakMap.prototype.delete;
function invalid(message, code = 'ERR_INVALID_ARG_VALUE') {
  const ErrorType = code === 'ERR_INVALID_STATE' ? Error : TypeError;
  return Object.assign(new ErrorType(message), { code });
}
function memory() {
  const api = globalThis.__flaxFfiMemory;
  if (!api)
    throw new Error('The FFI memory capability was not included in this application');
  return api;
}
export const suffix = globalThis.__flaxFfiPlatform?.suffix;
export const abi =
  globalThis.__flaxFfiPlatform && Object.freeze(globalThis.__flaxFfiPlatform);
export const types = Object.freeze({
  VOID: 'void',
  POINTER: 'pointer',
  BUFFER: 'buffer',
  ARRAY_BUFFER: 'arraybuffer',
  FUNCTION: 'function',
  BOOL: 'bool',
  CHAR: 'char',
  STRING: 'string',
  FLOAT: 'float',
  DOUBLE: 'double',
  INT_8: 'int8',
  UINT_8: 'uint8',
  INT_16: 'int16',
  UINT_16: 'uint16',
  INT_32: 'int32',
  UINT_32: 'uint32',
  INT_64: 'int64',
  UINT_64: 'uint64',
  FLOAT_32: 'float32',
  FLOAT_64: 'float64',
});
export function nativeProvider(id) {
  const providers = globalThis.__flaxFfiProviders;
  if (!providers || !Object.prototype.hasOwnProperty.call(providers, id))
    throw new Error(`Native provider was not included in this application: ${id}`);
  return providers[id];
}
export function callWithErrno(fn, ...args) {
  return globalThis.__flaxFfiInvoke(fn, args, true);
}

export function callAsync(fn, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(args) || !options || typeof options !== 'object')
      throw invalid('Expected argument array and options', 'ERR_INVALID_ARG_TYPE');
    const { captureErrno = false, signal, keepAlive = [], onDiscard } = options;
    if (typeof captureErrno !== 'boolean' || !Array.isArray(keepAlive))
      throw invalid('Invalid asynchronous call options', 'ERR_INVALID_ARG_TYPE');
    if (onDiscard !== undefined && typeof onDiscard !== 'function')
      throw invalid('onDiscard must be a function', 'ERR_INVALID_ARG_TYPE');
    const abortError = () =>
      signal.reason ??
      Object.assign(new Error('FFI call aborted'), { name: 'AbortError' });
    if (signal?.aborted) return reject(abortError());
    // Private snapshots cannot be detached or resized by application code while C runs.
    // One copy per backing store preserves aliases between overlapping arguments.
    const stores = new Map();
    const copies = [];
    const values = args.map((value) => {
      const isView = ArrayBuffer.isView(value);
      if (
        !isView &&
        !(value instanceof ArrayBuffer) &&
        !(
          typeof SharedArrayBuffer !== 'undefined' && value instanceof SharedArrayBuffer
        )
      )
        return value;
      const buffer = isView ? value.buffer : value;
      let snapshot = stores.get(buffer);
      if (!snapshot) {
        snapshot = new Uint8Array(new Uint8Array(buffer));
        stores.set(buffer, snapshot);
      }
      const offset = isView ? value.byteOffset : 0;
      const length = value.byteLength;
      const bytes = snapshot.subarray(offset, offset + length);
      copies.push({ value, buffer, offset, length, bytes });
      return bytes;
    });
    let settled = false;
    let aborted = false;
    let id;
    const abort = () => {
      if (settled || aborted) return;
      aborted = true;
      if (id !== undefined) globalThis.__flaxFfiInvoke(id);
      signal.removeEventListener('abort', abort);
    };
    try {
      signal?.addEventListener('abort', abort, { once: true });
      if (signal?.aborted) {
        signal.removeEventListener('abort', abort);
        return reject(abortError());
      }
      id = globalThis.__flaxFfiInvoke(
        fn,
        values,
        captureErrno,
        (error, value, executed) => {
          // Explicitly retain snapshots, native owners and original byte views through completion.
          void values.length;
          void keepAlive.length;
          const discard = () => {
            if (!executed || !onDiscard) return;
            const returned = onDiscard(captureErrno ? value.value : value);
            if (returned && typeof returned.then === 'function')
              throw invalid('onDiscard must finish synchronously', 'ERR_INVALID_STATE');
          };
          settled = true;
          try {
            signal?.removeEventListener('abort', abort);
            // Cancellation settles after native exit, so finally may safely free inputs.
            if (aborted) throw abortError();
            if (error)
              throw Object.assign(new Error(error), { code: 'ERR_FFI_CALL_FAILED' });
            const destinations = copies.map(({ value, buffer, offset, length }) => {
              if (
                value.byteLength !== length ||
                (ArrayBuffer.isView(value) && value.buffer !== buffer)
              )
                throw invalid('Async FFI output storage changed', 'ERR_INVALID_STATE');
              return new Uint8Array(buffer, offset, length);
            });
            for (let i = 0; i < copies.length; ++i)
              destinations[i].set(copies[i].bytes);
            resolve(value);
          } catch (failure) {
            try {
              discard();
            } catch (cleanup) {
              failure = new AggregateError(
                [failure, cleanup],
                'FFI result cleanup failed',
                { cause: failure },
              );
            }
            reject(failure);
          }
        },
        [values, keepAlive],
        onDiscard,
      );
      if (aborted) globalThis.__flaxFfiInvoke(id);
    } catch (error) {
      settled = true;
      signal?.removeEventListener('abort', abort);
      reject(error);
    }
  });
}
function signature(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw invalid('Expected an FFI signature object', 'ERR_INVALID_ARG_TYPE');
  function type(value) {
    if (
      typeof value !== 'string' &&
      (!value || typeof value !== 'object' || Array.isArray(value))
    )
      throw invalid('Expected an FFI type', 'ERR_INVALID_ARG_TYPE');
    return nativeType(value);
  }
  // Node distinguishes an absent property from an explicit undefined value.
  const hasReturn = 'return' in value,
    hasArguments = 'arguments' in value;
  const returns = type(hasReturn ? value.return : 'void');
  const args = hasArguments ? value.arguments : [];
  if (!Array.isArray(args))
    throw invalid('FFI arguments must be an array', 'ERR_INVALID_ARG_TYPE');
  const length = args.length,
    arguments_ = [];
  for (let i = 0; i < length; i++) arguments_.push(type(args[i]));
  const result = {
    arguments: arguments_,
    return: returns,
  };
  const fixedArguments = value.fixedArguments;
  if (fixedArguments !== undefined) {
    if (
      !Number.isSafeInteger(fixedArguments) ||
      fixedArguments < 0 ||
      fixedArguments > length
    )
      throw invalid('Invalid fixed variadic argument count');
    result.fixedArguments = fixedArguments;
  }
  return result;
}
function cacheType(type) {
  if (typeof type === 'string') return globalThis.__flaxFfiTypeAliases?.[type] ?? type;
  if (type.kind === 'array') return { ...type, element: cacheType(type.element) };
  return {
    ...type,
    fields: type.fields.map((field) => ({
      ...field,
      type: cacheType(field.type),
    })),
  };
}
export class DynamicLibrary {
  #native;
  #path;
  #functions = new Map();
  #symbols = new Map();
  constructor(path, internalScope) {
    const open = globalThis.__flaxFfiDlopen;
    if (typeof open !== 'function')
      throw new Error('The dlopen FFI capability was not included in this application');
    this.#native = open(path, internalScope);
    this.#path = path;
    if (typeof Symbol.dispose === 'symbol')
      Object.defineProperty(this, Symbol.dispose, { value: () => this.close() });
  }
  static process() {
    return new DynamicLibrary(null);
  }
  static executable() {
    return new DynamicLibrary(null, 'executable');
  }
  static codeAsset(id) {
    if (typeof id !== 'string' || !id || id.includes('\0'))
      throw invalid('Expected a native code asset id');
    if (typeof globalThis.__flaxBaseCall === 'function')
      return new DynamicLibrary(globalThis.__flaxBaseCall('ffiAsset', id));
    const assets = globalThis.__flaxFfiCodeAssets;
    if (!assets || !Object.prototype.hasOwnProperty.call(assets, id))
      throw invalid(`Native code asset was not packaged: ${id}`);
    return new DynamicLibrary(assets[id]);
  }

  get path() {
    return this.#path;
  }
  get handle() {
    return this.#native.handle();
  }
  get functions() {
    return this.getFunctions();
  }
  get symbols() {
    return this.getSymbols();
  }
  getFunction(name, definition) {
    if (typeof name !== 'string')
      throw invalid('Expected an FFI string', 'ERR_INVALID_ARG_TYPE');
    if (!definition || typeof definition !== 'object' || Array.isArray(definition))
      throw invalid('Expected an FFI signature object', 'ERR_INVALID_ARG_TYPE');
    return this.getFunctions({ [name]: definition })[name];
  }
  getFunctions(definitions) {
    this.#native.check();
    const result = Object.create(null);
    if (definitions === undefined) {
      for (const [name, entry] of this.#functions) result[name] = entry.function;
      return result;
    }
    if (!definitions || typeof definitions !== 'object' || Array.isArray(definitions))
      throw invalid('Expected an FFI definitions object', 'ERR_INVALID_ARG_TYPE');
    // Finish user getters before reading or publishing any cached binding.
    const requests = Object.keys(definitions).map((name) => {
      const normalized = signature(definitions[name]);
      const key = JSON.stringify({
        ...normalized,
        arguments: normalized.arguments.map(cacheType),
        return: cacheType(normalized.return),
      });
      return { name, normalized, key };
    });
    this.#native.check();
    const pending = [];
    for (const { name, normalized, key } of requests) {
      let entry = this.#functions.get(name);
      if (entry) {
        if (entry.signature !== key)
          throw invalid('FFI symbol already bound with a different signature');
      } else {
        const fn = this.#native.getFunction(name, normalized);
        entry = { signature: key, function: fn, address: fn.pointer };
        pending.push([name, entry]);
      }
      result[name] = entry.function;
    }
    this.#native.check();
    for (const [name, entry] of pending) {
      this.#functions.set(name, entry);
      this.#symbols.set(name, entry.address);
    }
    return result;
  }
  getSymbol(name) {
    const address = this.#native.getSymbol(name);
    this.#symbols.set(name, address);
    return address;
  }
  providesSymbol(name) {
    return this.#native.providesSymbol(name);
  }
  getSymbols() {
    this.#native.check();
    const result = Object.create(null);
    for (const [name, address] of this.#symbols) result[name] = address;
    return result;
  }
  bindFunction(pointer, definition = {}) {
    return this.#native.bindFunction(pointer, signature(definition));
  }
  registerCallback(definition, callback, options = {}) {
    if (typeof definition === 'function') {
      options = callback ?? {};
      callback = definition;
      definition = {};
    }
    return this.#native.registerCallback(signature(definition), callback, options);
  }
  unregisterCallback(pointer) {
    this.#native.unregisterCallback(pointer);
  }
  refCallback(pointer) {
    this.#native.refCallback(pointer);
  }
  unrefCallback(pointer) {
    this.#native.unrefCallback(pointer);
  }
  close() {
    this.#native.close();
  }
}
export function dlopen(path, definitions) {
  const lib = new DynamicLibrary(path);
  try {
    const result = { lib, functions: lib.getFunctions(definitions) };
    if (typeof Symbol.dispose === 'symbol') result[Symbol.dispose] = () => lib.close();
    return result;
  } catch (error) {
    lib.close();
    throw error;
  }
}
export function dlclose(handle) {
  handle.close();
}
export function dlsym(handle, symbol) {
  return handle.getSymbol(symbol);
}
export function bindFunction(pointer, definition = {}) {
  return memory().bindFunction(pointer, signature(definition));
}
export function getRawPointer(source) {
  return memory().getRawPointer(source);
}
export function toString(pointer, maxBytes) {
  return memory().toString(pointer, maxBytes);
}
export function toUtf16String(pointer, maxCodeUnits) {
  return memory().toUtf16String(pointer, maxCodeUnits);
}
export function read(type, pointer, offset = 0) {
  return memory().read(nativeType(type), pointer, offset);
}
export function write(type, pointer, offset, value) {
  memory().write(nativeType(type), pointer, offset, value);
}
export function toArrayBuffer(pointer, length, copy = true) {
  return memory().toArrayBuffer(pointer, length, copy);
}
export function toUint8Array(pointer, length, copy = true) {
  return memory().toUint8Array(pointer, length, copy);
}
export function toBuffer(pointer, length, copy = true) {
  return Buffer.from(toArrayBuffer(pointer, length, copy));
}
function exportLength(length) {
  if (typeof length !== 'number')
    throw invalid('Expected a numeric destination length', 'ERR_INVALID_ARG_TYPE');
  if (!Number.isSafeInteger(length) || length < 0)
    throw Object.assign(new RangeError('Destination length is out of range'), {
      code: 'ERR_OUT_OF_RANGE',
    });
}
export function exportString(string, pointer, length, encoding = 'utf8') {
  if (typeof string !== 'string' || typeof encoding !== 'string')
    throw invalid('Expected string and encoding strings', 'ERR_INVALID_ARG_TYPE');
  exportLength(length);
  return memory().exportString(string, pointer, length, encoding);
}
export function exportArrayBuffer(arrayBuffer, pointer, length) {
  exportLength(length);
  return memory().exportArrayBuffer(arrayBuffer, pointer, length);
}
export function exportArrayBufferView(arrayBufferView, pointer, length) {
  exportLength(length);
  return memory().exportArrayBufferView(arrayBufferView, pointer, length);
}
export function exportBuffer(buffer, pointer, length) {
  if (!Buffer.isBuffer(buffer))
    throw invalid('Expected a Buffer', 'ERR_INVALID_ARG_TYPE');
  return exportArrayBufferView(buffer, pointer, length);
}
export function getInt8(pointer, offset = 0) {
  return memory().read('int8', pointer, offset, true);
}
export function getUint8(pointer, offset = 0) {
  return memory().read('uint8', pointer, offset, true);
}
export function getInt16(pointer, offset = 0) {
  return memory().read('int16', pointer, offset, true);
}
export function getUint16(pointer, offset = 0) {
  return memory().read('uint16', pointer, offset, true);
}
export function getInt32(pointer, offset = 0) {
  return memory().read('int32', pointer, offset, true);
}
export function getUint32(pointer, offset = 0) {
  return memory().read('uint32', pointer, offset, true);
}
export function getInt64(pointer, offset = 0) {
  return memory().read('int64', pointer, offset, true);
}
export function getUint64(pointer, offset = 0) {
  return memory().read('uint64', pointer, offset, true);
}
export function getFloat32(pointer, offset = 0) {
  return memory().read('float', pointer, offset, true);
}
export function getFloat64(pointer, offset = 0) {
  return memory().read('double', pointer, offset, true);
}
export function setInt8(pointer, offset, value) {
  memory().write('int8', pointer, offset, value, true);
}
export function setUint8(pointer, offset, value) {
  memory().write('uint8', pointer, offset, value, true);
}
export function setInt16(pointer, offset, value) {
  memory().write('int16', pointer, offset, value, true);
}
export function setUint16(pointer, offset, value) {
  memory().write('uint16', pointer, offset, value, true);
}
export function setInt32(pointer, offset, value) {
  memory().write('int32', pointer, offset, value, true);
}
export function setUint32(pointer, offset, value) {
  memory().write('uint32', pointer, offset, value, true);
}
export function setInt64(pointer, offset, value) {
  memory().write('int64', pointer, offset, value, true);
}
export function setUint64(pointer, offset, value) {
  memory().write('uint64', pointer, offset, value, true);
}
export function setFloat32(pointer, offset, value) {
  memory().write('float', pointer, offset, value, true);
}
export function setFloat64(pointer, offset, value) {
  memory().write('double', pointer, offset, value, true);
}

export function malloc(byteCount, alignment) {
  return memory().allocate(byteCount, alignment, false);
}
export function calloc(byteCount, alignment) {
  return memory().allocate(byteCount, alignment, true);
}
export function free(pointer) {
  memory().free(pointer);
}
export class Arena {
  #pointers = new Set();
  #closed = false;
  constructor() {
    if (typeof Symbol.dispose === 'symbol')
      Object.defineProperty(this, Symbol.dispose, { value: () => this.releaseAll() });
  }
  allocate(byteCount, { alignment, zero = true } = {}) {
    if (this.#closed) throw new Error('Arena is closed');
    const pointer = zero ? calloc(byteCount, alignment) : malloc(byteCount, alignment);
    this.#pointers.add(pointer);
    return pointer;
  }
  free(pointer) {
    if (!this.#pointers.delete(pointer))
      throw invalid('Pointer was not allocated by this arena');
    free(pointer);
  }
  releaseAll() {
    if (this.#closed) return;
    this.#closed = true;
    const pointers = [...this.#pointers].reverse();
    this.#pointers.clear();
    const errors = [];
    for (const pointer of pointers) {
      try {
        free(pointer);
      } catch (error) {
        errors.push(error);
      }
    }
    if (errors.length) throw new AggregateError(errors, 'Arena cleanup failed');
  }
}
function finishArena(arena, value, failed) {
  try {
    arena.releaseAll();
  } catch (cleanup) {
    const errors = cleanup instanceof AggregateError ? cleanup.errors : [cleanup];
    throw new AggregateError(
      failed ? [value, ...errors] : errors,
      failed ? 'Arena action and cleanup failed' : 'Arena cleanup failed',
      failed ? { cause: value } : undefined,
    );
  }
  if (failed) throw value;
  return value;
}
export function withArena(action) {
  const arena = new Arena();
  let result;
  try {
    result = action(arena);
    if (result && typeof result.then === 'function')
      return Promise.resolve(result).then(
        (value) => finishArena(arena, value, false),
        (error) => finishArena(arena, error, true),
      );
  } catch (error) {
    return finishArena(arena, error, true);
  }
  return finishArena(arena, result, false);
}
export class NativeFinalizer {
  #native;
  #detach = new WeakMap();
  constructor(callback) {
    this.#native = memory().finalizer(callback);
  }
  attach(target, token, { detach = target, externalSize = 0 } = {}) {
    if (
      !target ||
      !['object', 'function'].includes(typeof target) ||
      !detach ||
      !['object', 'function'].includes(typeof detach)
    )
      throw invalid('Finalizer target and detach key must be objects');
    const ids = this.#detach.get(detach) ?? [];
    const length = ids.length;
    const id = this.#native.attach(target, token, externalSize);
    try {
      ids.push(id);
      this.#detach.set(detach, ids);
    } catch (error) {
      this.#native.detach([id]);
      ids.length = length;
      if (length === 0) apply(weakMapDelete, this.#detach, [detach]);
      throw error;
    }
  }
  detach(key) {
    const ids = this.#detach.get(key);
    if (!ids) throw invalid('Finalizer attachment is not pending', 'ERR_INVALID_STATE');
    // Native validates the whole group before cancelling any attachment.
    this.#native.detach(ids);
    apply(weakMapDelete, this.#detach, [key]);
  }
}

export default {
  Buffer,
  suffix,
  abi,
  types,
  DynamicLibrary,
  dlopen,
  dlclose,
  dlsym,
  bindFunction,
  callWithErrno,
  callAsync,
  getRawPointer,
  toString,
  toUtf16String,
  read,
  write,
  toArrayBuffer,
  toUint8Array,
  toBuffer,
  exportString,
  exportArrayBuffer,
  exportArrayBufferView,
  exportBuffer,
  getInt8,
  getUint8,
  getInt16,
  getUint16,
  getInt32,
  getUint32,
  getInt64,
  getUint64,
  getFloat32,
  getFloat64,
  setInt8,
  setUint8,
  setInt16,
  setUint16,
  setInt32,
  setUint32,
  setInt64,
  setUint64,
  setFloat32,
  setFloat64,
  struct,
  union,
  array,
  layout,
  sizeOf,
  alignOf,
  offsetOf,
  view,
  malloc,
  calloc,
  free,
  Arena,
  withArena,
  NativeFinalizer,
};
