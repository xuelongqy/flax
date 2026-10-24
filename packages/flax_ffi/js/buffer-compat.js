/** Applied to the single upstream constructor by Flax and bare buffer aliases. */
export function installBufferCompatibility(Buffer) {
  const marker = Symbol.for('@flax/ffi.buffer.compat.v1');
  if (Buffer[marker]) return Buffer;
  Object.defineProperty(Buffer, marker, { value: true });
  const typed = Object.getPrototypeOf(Uint8Array.prototype);
  const getter = (name) => Object.getOwnPropertyDescriptor(typed, name).get;
  const getBuffer = getter('buffer'),
    getOffset = getter('byteOffset'),
    getLength = getter('length'),
    getBytes = getter('byteLength');
  const from = Buffer.from,
    toString = Buffer.prototype.toString,
    byteLength = Buffer.byteLength;
  const encoding = (value) => (typeof value === 'string' ? value.toLowerCase() : value);
  const base64 = (value) => (encoding(value) === 'base64url' ? 'base64' : value);
  function utf8(bytes, start, end, countOnly) {
    let length = 0,
      result = '',
      units = [];
    for (let i = start; i < end;) {
      const first = bytes[i];
      const count =
        first < 0x80
          ? 1
          : first >= 0xc2 && first <= 0xdf
            ? 2
            : first >= 0xe0 && first <= 0xef
              ? 3
              : first >= 0xf0 && first <= 0xf4
                ? 4
                : 0;
      let consumed = 1,
        value = count === 1 ? first : first & (count === 2 ? 31 : count === 3 ? 15 : 7);
      for (; consumed < count && i + consumed < end; consumed++) {
        const byte = bytes[i + consumed];
        const low =
          consumed === 1 && first === 0xe0
            ? 0xa0
            : consumed === 1 && first === 0xf0
              ? 0x90
              : 0x80;
        const high =
          consumed === 1 && first === 0xed
            ? 0x9f
            : consumed === 1 && first === 0xf4
              ? 0x8f
              : 0xbf;
        if (byte < low || byte > high) break;
        value = (value << 6) | (byte & 63);
      }
      if (!count || consumed !== count) value = 0xfffd;
      i += consumed;
      length += value > 0xffff ? 2 : 1;
      if (!countOnly) {
        if (value > 0xffff) {
          value -= 0x10000;
          units.push(0xd800 + (value >> 10), 0xdc00 + (value & 1023));
        } else units.push(value);
        if (units.length >= 2048) {
          result += String.fromCharCode(...units);
          units = [];
        }
      }
    }
    return countOnly ? length : result + String.fromCharCode(...units);
  }
  Buffer.prototype.subarray = function (start, end) {
    const result = Uint8Array.prototype.subarray.call(this, start, end);
    Object.setPrototypeOf(result, Buffer.prototype);
    return result;
  };
  Buffer.from = function (value, encodingOrOffset, length) {
    return from(
      value,
      typeof value === 'string' ? base64(encodingOrOffset) : encodingOrOffset,
      length,
    );
  };
  Buffer.byteLength = function (value, enc) {
    return byteLength(value, base64(enc));
  };
  const isEncoding = Buffer.isEncoding;
  Buffer.isEncoding = function (value) {
    return encoding(value) === 'base64url' || isEncoding(value);
  };
  for (const name of ['write', 'fill']) {
    const original = Buffer.prototype[name];
    Buffer.prototype[name] = function (...args) {
      for (let i = 1; i < args.length; i++) args[i] = base64(args[i]);
      return original.apply(this, args);
    };
  }
  Buffer.prototype.toString = function (enc, start, end) {
    const normalized = encoding(enc) || 'utf8';
    if (normalized === 'base64url')
      return toString
        .call(this, 'base64', start, end)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    if (normalized !== 'utf8' && normalized !== 'utf-8')
      return toString.call(this, enc, start, end);
    start = start === undefined || start < 0 ? 0 : start;
    end = end === undefined || end > this.length ? this.length : end;
    if (start > this.length || end <= start || end <= 0) return '';
    return utf8(this, start >>> 0, end >>> 0, false);
  };
  Buffer.copyBytesFrom = function (value, offset = 0, length) {
    const count = getLength.call(value),
      size = getBytes.call(value);
    if (typeof count !== 'number')
      throw Object.assign(new TypeError('Expected a TypedArray'), {
        code: 'ERR_INVALID_ARG_TYPE',
      });
    if (
      !Number.isSafeInteger(offset) ||
      offset < 0 ||
      (length !== undefined && (!Number.isSafeInteger(length) || length < 0))
    )
      throw Object.assign(new RangeError('Invalid typed array element range'), {
        code: 'ERR_OUT_OF_RANGE',
      });
    if (offset >= count || length === 0 || count === 0) return Buffer.alloc(0);
    const elements = Math.min(length ?? count - offset, count - offset),
      width = size / count;
    return from(
      new Uint8Array(
        getBuffer.call(value),
        getOffset.call(value) + offset * width,
        elements * width,
      ),
    );
  };
  Buffer.stringLength = function (value, enc = 'utf8') {
    let bytes;
    if (ArrayBuffer.isView(value)) {
      // DataView is not part of this API, unlike Buffer.byteLength.
      const length = getLength.call(value);
      if (typeof length !== 'number')
        throw Object.assign(new TypeError('Expected a TypedArray'), {
          code: 'ERR_INVALID_ARG_TYPE',
        });
      if (!length) bytes = new Uint8Array(0);
      else
        bytes = new Uint8Array(
          getBuffer.call(value),
          getOffset.call(value),
          getBytes.call(value),
        );
    } else {
      if (
        !(value instanceof ArrayBuffer) &&
        !(typeof SharedArrayBuffer === 'function' && value instanceof SharedArrayBuffer)
      )
        throw new TypeError('Expected a native byte source');
      try {
        bytes = new Uint8Array(value);
      } catch (_) {
        bytes = new Uint8Array(0);
      }
    }
    const n = bytes.length;
    switch (encoding(enc)) {
      case 'utf8':
      case 'utf-8':
        return utf8(bytes, 0, n, true);
      case 'utf16le':
      case 'utf-16le':
      case 'ucs2':
      case 'ucs-2':
        return Math.floor(n / 2);
      case 'ascii':
      case 'latin1':
      case 'binary':
        return n;
      case 'hex':
        return n * 2;
      case 'base64':
        return Math.ceil(n / 3) * 4;
      case 'base64url':
        return Math.floor(n / 3) * 4 + (n % 3 ? (n % 3) + 1 : 0);
      default:
        throw Object.assign(new TypeError(`Unknown encoding: ${enc}`), {
          code: 'ERR_UNKNOWN_ENCODING',
        });
    }
  };
  for (const name of ['allocUnsafe', 'allocUnsafeSlow']) {
    const original = Buffer[name];
    Buffer[name] = function (size, alignment) {
      if (alignment === undefined) return original(size);
      if (
        !Number.isInteger(alignment) ||
        alignment < 1 ||
        alignment > 2 ** 30 ||
        alignment & (alignment - 1)
      )
        throw Object.assign(
          new RangeError('Alignment must be a power of two up to 2 ** 30'),
          { code: 'ERR_OUT_OF_RANGE' },
        );
      if (alignment === 1) return original(size);
      const api = globalThis.__flaxFfiMemory;
      if (!api)
        throw new Error('Aligned Buffer allocation requires the native FFI capability');
      if (!Number.isInteger(size) || size < 0) return original(size);
      const result = original(size + alignment - 1);
      const offset = Number(-api.getRawPointer(result) & BigInt(alignment - 1));
      return result.subarray(offset, offset + size);
    };
  }
  return Buffer;
}
