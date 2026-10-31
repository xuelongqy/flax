export interface Crypto {
  getRandomValues<T extends ArrayBufferView>(array: T): T;
  randomUUID(): `${string}-${string}-${string}-${string}-${string}`;
}
export interface CryptoConstructor {
  readonly prototype: Crypto;
}

export function installCrypto(
  global: typeof globalThis,
  randomBytes: (length: number) => ArrayBuffer,
) {
  const g = global as any;
  const prototype = Object.getPrototypeOf(Uint8Array.prototype);
  const read = (key: PropertyKey) =>
    Object.getOwnPropertyDescriptor(prototype, key)!.get!;
  const brand = read(Symbol.toStringTag),
    byteLength = read('byteLength'),
    byteOffset = read('byteOffset'),
    buffer = read('buffer');
  const integers = new Set([
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Uint16Array',
    'Int32Array',
    'Uint32Array',
    'BigInt64Array',
    'BigUint64Array',
  ]);
  const secret = {};
  let open = true;
  function bytes(length: number) {
    if (!open) throw new g.DOMException('The session is closed', 'InvalidStateError');
    const value = new Uint8Array(randomBytes(length));
    if (value.byteLength !== length)
      throw new Error('Invalid secure random byte count');
    return value;
  }
  class Crypto {
    constructor(key: object) {
      if (key !== secret) throw new TypeError('Illegal constructor');
    }
    getRandomValues<T extends ArrayBufferView>(array: T): T {
      if (this !== crypto) throw new TypeError('Illegal Crypto invocation');
      if (!ArrayBuffer.isView(array))
        throw new TypeError('Expected an ArrayBufferView');
      if (!integers.has(brand.call(array)))
        throw new g.DOMException('Expected an integer TypedArray', 'TypeMismatchError');
      const length = byteLength.call(array) as number;
      if (length > 65536)
        throw new g.DOMException('Random byte limit is 65536', 'QuotaExceededError');
      if (length) {
        const target = new Uint8Array(
          buffer.call(array),
          byteOffset.call(array),
          length,
        );
        target.set(bytes(length));
      }
      return array;
    }
    randomUUID(): `${string}-${string}-${string}-${string}-${string}` {
      if (this !== crypto) throw new TypeError('Illegal Crypto invocation');
      const value = bytes(16);
      value[6] = (value[6]! & 15) | 64;
      value[8] = (value[8]! & 63) | 128;
      const hex = Array.from(value, (byte) => byte.toString(16).padStart(2, '0')).join(
        '',
      );
      return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    }
  }
  Object.defineProperty(Crypto.prototype, Symbol.toStringTag, {
    value: 'Crypto',
    configurable: true,
  });
  const crypto = new Crypto(secret);
  Object.defineProperty(g, 'Crypto', {
    value: Crypto,
    writable: true,
    configurable: true,
  });
  Object.defineProperty(g, 'crypto', {
    get: () => crypto,
    configurable: true,
    enumerable: true,
  });
  return {
    close() {
      open = false;
    },
  };
}
