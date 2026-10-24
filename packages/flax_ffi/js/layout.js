const aliases = {
  i8: 'int8',
  u8: 'uint8',
  bool: 'uint8',
  i16: 'int16',
  u16: 'uint16',
  i32: 'int32',
  u32: 'uint32',
  i64: 'int64',
  u64: 'uint64',
  float32: 'float',
  f32: 'float',
  float64: 'double',
  f64: 'double',
  ptr: 'pointer',
  str: 'pointer',
  string: 'pointer',
  buffer: 'pointer',
  arraybuffer: 'pointer',
  function: 'pointer',
  signedchar: 'int8',
  unsignedchar: 'uint8',
  longlong: 'int64',
  ulonglong: 'uint64',
};
const knownTypes = new WeakSet();
function invalid(message, code = 'ERR_INVALID_ARG_VALUE') {
  const ErrorType = code === 'ERR_OUT_OF_RANGE' ? RangeError : TypeError;
  return Object.assign(new ErrorType(message), { code });
}
function nativeSize(value) {
  if (typeof value !== 'number')
    throw invalid('Expected a native size number', 'ERR_INVALID_ARG_TYPE');
  if (!Number.isFinite(value) || value < 0 || !Number.isInteger(value))
    throw invalid('Expected a nonnegative native size');
  if (!Number.isSafeInteger(value))
    throw invalid('Native size is too large', 'ERR_OUT_OF_RANGE');
  return value;
}
export function nativeType(value, seen = new Set()) {
  if (typeof value === 'string')
    return Object.prototype.hasOwnProperty.call(aliases, value)
      ? aliases[value]
      : value;
  if (value && typeof value === 'object' && knownTypes.has(value)) return value;
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw invalid('Expected a native type', 'ERR_INVALID_ARG_TYPE');
  if (seen.has(value)) throw invalid('Expected an acyclic native type');
  if (seen.size > 64) throw invalid('Native type nesting exceeds 64 levels');
  seen.add(value);
  const kind = value.kind;
  let result;
  if (kind === 'array') {
    const element = nativeType(value.element, seen),
      length = value.length;
    if (length !== null && !nativeSize(length))
      throw invalid('A fixed array must have a positive length');
    result = {
      kind: 'array',
      element,
      length,
    };
  } else if (kind === 'struct' || kind === 'union') {
    const fields = value.fields,
      pack = value.pack;
    if (!Array.isArray(fields))
      throw invalid('Expected aggregate fields', 'ERR_INVALID_ARG_TYPE');
    const count = fields.length;
    if (!count) throw invalid('An aggregate must have fields');
    if (pack !== undefined) {
      nativeSize(pack);
      if (kind === 'union' || ![1, 2, 4, 8, 16].includes(pack))
        throw invalid('Struct packing must be 1, 2, 4, 8 or 16');
    }
    const names = new Set(),
      members = [];
    for (let i = 0; i < count; i++) {
      const field = fields[i];
      if (!field || typeof field !== 'object' || Array.isArray(field))
        throw invalid('Expected a native field', 'ERR_INVALID_ARG_TYPE');
      const name = field.name;
      if (typeof name !== 'string')
        throw invalid('Expected a field name', 'ERR_INVALID_ARG_TYPE');
      if (!name || names.has(name)) throw invalid('Invalid or duplicate native field');
      names.add(name);
      members.push(Object.freeze({ name, type: nativeType(field.type, seen) }));
    }
    result = {
      kind,
      fields: Object.freeze(members),
      ...(pack === undefined ? {} : { pack }),
    };
  } else throw invalid('Unknown native aggregate kind');
  seen.delete(value);
  knownTypes.add(result);
  return Object.freeze(result);
}
function aggregate(kind, fields, options) {
  if (!fields || typeof fields !== 'object' || Array.isArray(fields))
    throw new TypeError('Expected named native fields');
  return nativeType({
    kind,
    fields: Object.entries(fields).map(([name, type]) => ({ name, type })),
    ...options,
  });
}
export function struct(fields, options = {}) {
  return aggregate('struct', fields, options);
}
export function union(fields) {
  return aggregate('union', fields);
}
export function array(element, length) {
  return nativeType({ kind: 'array', element, length });
}

function memory() {
  if (!globalThis.__flaxFfiMemory && typeof globalThis.__flaxBaseCall === 'function')
    globalThis.__flaxBaseCall('ffiInstall');
  const api = globalThis.__flaxFfiMemory;
  if (!api)
    throw new Error('The FFI memory capability was not included in this application');
  return api;
}
const layouts = new WeakMap();
const primitiveLayouts = new Map();
export function layout(type) {
  if (typeof type === 'string' && primitiveLayouts.has(type))
    return primitiveLayouts.get(type);
  if (type && typeof type === 'object' && layouts.has(type)) return layouts.get(type);
  const result = memory().layout(nativeType(type));
  for (const field of result.fields ?? []) Object.freeze(field);
  if (result.fields) Object.freeze(result.fields);
  Object.freeze(result);
  // Only normalized descriptors guarantee immutable nested fields.
  if (type && typeof type === 'object' && knownTypes.has(type))
    layouts.set(type, result);
  if (typeof type === 'string') primitiveLayouts.set(type, result);
  return result;
}
export function sizeOf(type) {
  return layout(type).size;
}
export function alignOf(type) {
  return layout(type).alignment;
}
export function offsetOf(type, name) {
  const field = layout(type).fields?.find((field) => field.name === name);
  if (!field) throw new TypeError(`Unknown native field: ${name}`);
  return field.offset;
}
function bytes(source) {
  if (source?.$bytes !== undefined) source = source.$bytes;
  if (ArrayBuffer.isView(source))
    return new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
  return new Uint8Array(source);
}
function scalarAccess(type, data, offset, value, write) {
  const { scalar, size } = layout(type);
  const little = globalThis.__flaxFfiPlatform.littleEndian;
  if (scalar === 'c_bool') {
    if (!write) return data.getUint8(offset) !== 0;
    if (typeof value !== 'boolean') throw new TypeError('Expected a boolean');
    data.setUint8(offset, value ? 1 : 0);
    return;
  }
  if (scalar === 'pointer' || scalar === 'int64' || scalar === 'uint64') {
    if (write) {
      if (value == null && scalar === 'pointer') value = 0n;
      if (
        scalar !== 'pointer' &&
        typeof value === 'number' &&
        Number.isSafeInteger(value)
      )
        value = BigInt(value);
      if (typeof value !== 'bigint')
        throw new TypeError('Expected an exact integer or pointer');
      const signed = scalar === 'int64';
      const bits = BigInt(size * 8);
      const minimum = signed ? -(1n << (bits - 1n)) : 0n;
      const maximum = signed ? (1n << (bits - 1n)) - 1n : (1n << bits) - 1n;
      if (value < minimum || value > maximum)
        throw new RangeError('Native integer out of range');
      for (let i = 0; i < size; i++)
        data.setUint8(
          offset + (little ? i : size - i - 1),
          Number((value >> BigInt(i * 8)) & 255n),
        );
      return;
    }
    let result = 0n;
    for (let i = 0; i < size; i++)
      result |=
        BigInt(data.getUint8(offset + (little ? i : size - i - 1))) << BigInt(i * 8);
    return scalar === 'int64' ? BigInt.asIntN(size * 8, result) : result;
  }
  const methods = {
    int8: 'Int8',
    uint8: 'Uint8',
    int16: 'Int16',
    uint16: 'Uint16',
    int32: 'Int32',
    uint32: 'Uint32',
    float: 'Float32',
    double: 'Float64',
  };
  const method = methods[scalar];
  if (!method) throw new TypeError('Expected a scalar type');
  if (write) {
    if (typeof value !== 'number') throw new TypeError('Expected a native number');
    if (scalar.startsWith('int') || scalar.startsWith('uint')) {
      const signed = scalar.startsWith('int');
      const min = signed ? -(2 ** (size * 8 - 1)) : 0;
      const max = signed ? 2 ** (size * 8 - 1) - 1 : 2 ** (size * 8) - 1;
      if (!Number.isInteger(value) || value < min || value > max)
        throw new RangeError('Native integer out of range');
    }
    data[`set${method}`](offset, value, little);
  } else return data[`get${method}`](offset, little);
}
/** A field view owns its JS bytes, or borrows a native view supplied by the caller. */
export function view(type, source, offset = 0) {
  const descriptor = nativeType(type),
    info = layout(descriptor),
    storage = bytes(source);
  if (
    !Number.isSafeInteger(offset) ||
    offset < 0 ||
    offset > storage.byteLength - info.size
  )
    throw new RangeError('Native view exceeds its byte storage');
  const nativeBytes = storage.subarray(offset);
  const data = new DataView(
    nativeBytes.buffer,
    nativeBytes.byteOffset,
    nativeBytes.byteLength,
  );
  if (typeof descriptor === 'string')
    return scalarAccess(descriptor, data, 0, undefined, false);
  const result = Object.create(null);
  Object.defineProperty(result, '$bytes', {
    value: nativeBytes.subarray(0, info.flexible ? undefined : info.size),
  });
  const access = (child, position) => ({
    enumerable: true,
    get: () =>
      typeof child === 'string'
        ? scalarAccess(child, data, position, undefined, false)
        : view(child, nativeBytes, position),
    set(value) {
      if (typeof child === 'string')
        return scalarAccess(child, data, position, value, true);
      const input = bytes(value),
        length = sizeOf(child);
      if (input.byteLength !== length) throw new RangeError('Aggregate size mismatch');
      nativeBytes.set(input, position);
    },
  });
  if (descriptor.kind === 'array') {
    const count =
      descriptor.length ??
      Math.floor(nativeBytes.byteLength / sizeOf(descriptor.element));
    Object.defineProperty(result, 'length', { value: count });
    for (let i = 0; i < count; i++)
      Object.defineProperty(
        result,
        i,
        access(descriptor.element, i * sizeOf(descriptor.element)),
      );
  } else
    for (const field of info.fields) {
      if (field.name === '$bytes')
        throw new TypeError(
          '$bytes is reserved by native field views; use offsetOf for this field',
        );
      const child = descriptor.fields.find(
        (candidate) => candidate.name === field.name,
      ).type;
      Object.defineProperty(result, field.name, access(child, field.offset));
    }
  return result;
}
