import { Arena, Buffer, sizeOf, alignOf, toArrayBuffer, view, write } from '@flax/ffi';
import type { NativeType, PrimitiveType } from '@flax/ffi';
import { layouts, constants } from './generated/definitions.g.js';
import metadata from './metadata.g.js';

type Fields = Record<string, { type: string; required: boolean; default?: unknown }>;
const dictionaries = metadata.dictionaries as Record<
  string,
  { parent: string | null; fields: Fields }
>;
const enums = metadata.enums as Record<string, string[]>;
const aliases = metadata.aliases as Record<string, string>;
const structs = metadata.structs as Record<string, Record<string, string>>;
const nativeLayouts = layouts as Record<string, NativeType>;
const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
const nativeEnums = new Map<string, number | bigint>();
const nativeEnumTypes = new Set<string>();
const bufferBindings = new WeakSet<object>();
const externalTextureBindings = new WeakSet<object>();
const noArguments: [] = [];
for (const [name, value] of Object.entries(constants)) {
  nativeEnums.set(normalize(name), value);
  nativeEnumTypes.add(name.slice(0, name.lastIndexOf('_')));
}

export function integer(value: unknown, bits = 64): number {
  const number = Math.trunc(+(value as number));
  const limit = bits === 64 ? Number.MAX_SAFE_INTEGER : 2 ** bits - 1;
  if (!Number.isFinite(number) || number < 0 || number > limit)
    throw new TypeError(`Expected an unsigned ${bits}-bit integer`);
  return number === 0 ? 0 : number;
}
export function signedInteger(value: unknown): number {
  const number = Math.trunc(+(value as number));
  if (!Number.isFinite(number) || number < -2147483648 || number > 2147483647)
    throw new TypeError('Expected a signed 32-bit integer');
  return number === 0 ? 0 : number;
}
export function text(value: unknown): string {
  if (typeof value === 'symbol') throw new TypeError('Cannot convert Symbol to string');
  return String(value);
}
function iteratorMethod(value: any): Function | undefined {
  if (value == null || !['object', 'function'].includes(typeof value))
    throw new TypeError('Expected a sequence object');
  const method = value[Symbol.iterator];
  if (method == null) return undefined;
  if (typeof method !== 'function') throw new TypeError('Expected an iterator method');
  return method;
}
export function sequence<T>(
  value: any,
  item: (value: any) => T,
  method = iteratorMethod(value),
): T[] {
  if (!method) throw new TypeError('Expected a sequence');
  const iterator = Reflect.apply(method, value, noArguments);
  if (iterator == null || !['object', 'function'].includes(typeof iterator))
    throw new TypeError('Expected an iterator object');
  const next = iterator.next;
  const result: T[] = [];
  for (;;) {
    const step: any = Reflect.apply(next, iterator, noArguments);
    if (step == null || !['object', 'function'].includes(typeof step))
      throw new TypeError('Expected an iterator result');
    if (step.done) return result;
    // WebIDL sequence conversion propagates conversion errors without IteratorClose.
    result.push(item(step.value));
  }
}
export function convert(
  type: string,
  value: any,
  resource: (value: unknown, kind: string) => bigint,
): any {
  type = type
    .replace(/\[[^\]]*\]\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (type.endsWith('?') && value == null) return null;
  type = type.replace(/\?$/, '');
  if (type === 'GPUCopyExternalImageSource') {
    resource(value, type);
    return value;
  }
  if (type === 'PredefinedColorSpace') {
    const result = text(value);
    if (!['srgb', 'display-p3'].includes(result))
      throw new TypeError('Invalid color space');
    return result;
  }
  if (aliases[type]) {
    const result = convert(aliases[type]!, value, resource);
    const maximum =
      type === 'GPUColor'
        ? 4
        : type === 'GPUOrigin2D'
          ? 2
          : ['GPUExtent3D', 'GPUOrigin3D'].includes(type)
            ? 3
            : undefined;
    if (
      maximum !== undefined &&
      Array.isArray(result) &&
      (result.length > maximum ||
        (type === 'GPUExtent3D' && result.length < 1) ||
        (type === 'GPUColor' && result.length !== 4))
    )
      throw new TypeError(`Invalid ${type} sequence length`);
    return result;
  }
  if (type.startsWith('(') && type.endsWith(')')) {
    const choices = type.slice(1, -1).split(' or ');
    if (value === undefined && choices.includes('undefined')) return undefined;
    const dictionary = choices.find((item) => dictionaries[item]);
    if (value == null && dictionary) return convert(dictionary, value, resource);
    if (value != null && ['object', 'function'].includes(typeof value)) {
      for (const choice of choices) {
        if (choice !== 'VideoFrame' && !metadata.objects.includes(`W${choice}`))
          continue;
        try {
          resource(value, choice);
          if (choice === 'GPUBuffer' && choices.includes('GPUBufferBinding')) {
            const binding = { buffer: value, offset: 0 };
            bufferBindings.add(binding);
            return binding;
          }
          if (choice === 'GPUExternalTexture') externalTextureBindings.add(value);
          return value;
        } catch (error) {
          if (!(error instanceof TypeError)) throw error;
        }
      }
      const sequenceType = choices.find((item) => item.startsWith('sequence<'));
      if (sequenceType) {
        const method = iteratorMethod(value);
        if (method)
          return sequence(
            value,
            (item) => convert(sequenceType.slice(9, -1), item, resource),
            method,
          );
      }
      if (dictionary) return convert(dictionary, value, resource);
    }
    const scalar = choices.find(
      (item) => enums[item] || (aliases[item] && item !== 'undefined'),
    );
    if (scalar) return convert(scalar, value, resource);
    throw new TypeError(`Value does not match ${type}`);
  }
  if (type.startsWith('record<')) {
    if (!value || !['object', 'function'].includes(typeof value))
      throw new TypeError('Expected a record');
    const separator = type.indexOf(',');
    const result = {};
    for (const key of Reflect.ownKeys(value)) {
      if (!Object.getOwnPropertyDescriptor(value, key)?.enumerable) continue;
      const name = convert(type.slice(7, separator).trim(), key, resource);
      const item = convert(type.slice(separator + 1, -1).trim(), value[key], resource);
      Object.defineProperty(result, name, {
        value: item,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
    return result;
  }
  if (enums[type]) {
    const result = text(value);
    if (!enums[type]!.includes(result))
      throw new TypeError(`Invalid ${type}: ${result}`);
    return result;
  }
  if (type.startsWith('sequence<')) {
    return sequence(value, (item) => convert(type.slice(9, -1), item, resource));
  }
  if (dictionaries[type]) {
    if (value != null && !['object', 'function'].includes(typeof value))
      throw new TypeError(`Expected ${type}`);
    const spec = dictionaries[type]!;
    const result = spec.parent ? convert(spec.parent, value, resource) : {};
    for (const [key, field] of Object.entries(spec.fields)) {
      const item = value?.[key];
      if (item === undefined) {
        if (field.required) throw new TypeError(`${type}.${key} is required`);
        if (!('default' in field)) continue;
      }
      Object.defineProperty(result, key, {
        value:
          item === undefined
            ? structuredDefault(field.type, field.default, resource)
            : convert(field.type, item, resource),
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
    if (type === 'GPUTextureViewDescriptor' && !/^[rgba01]{4}$/.test(result.swizzle))
      throw new TypeError('Texture swizzle must contain four rgba01 components');
    if (type === 'GPUBufferBinding') bufferBindings.add(result);
    return result;
  }
  if (type === 'boolean') return Boolean(value);
  if (type === 'unsigned long') return integer(value, 32);
  if (type === 'unsigned short') return integer(value, 16);
  if (type === 'unsigned long long') return integer(value);
  if (type === 'long') return signedInteger(value);
  if (type === 'double' || type === 'float') {
    const result =
      type === 'float' ? Math.fround(+(value as number)) : +(value as number);
    if (!Number.isFinite(result)) throw new TypeError('Expected a finite number');
    return result;
  }
  if (type === 'USVString') return text(value).toWellFormed();
  if (type === 'DOMString') return text(value);
  if (/^GPU\w+$/.test(type)) {
    resource(value, type);
    return value;
  }
  if (type === 'undefined' && value === undefined) return undefined;
  return value;
}
function structuredDefault(
  type: string,
  value: unknown,
  resource: (value: unknown, kind: string) => bigint,
): unknown {
  if (Array.isArray(value)) return [];
  if (value && typeof value === 'object')
    return type.startsWith('record<') ? {} : convert(type, undefined, resource);
  return value;
}
export function nativeEnum(type: string, value: unknown): number | bigint {
  const name = text(value);
  if (enums[type.slice(1)]?.includes(name) === false)
    throw new TypeError(`Invalid ${type}: ${name}`);
  const result = nativeEnums.get(normalize(`${type}_${name}`));
  if (result === undefined) throw new TypeError(`Invalid ${type}: ${name}`);
  return result;
}

/** One arena owns all temporary descriptor bytes through a synchronous Dawn call. */
export class DescriptorArena extends Arena {
  declare externalTextures: Set<object> | undefined;

  constructor(
    readonly init: (name: string, pointer: bigint, length: number) => void,
    readonly resource: (value: unknown, kind: string) => bigint,
  ) {
    super();
  }
  bytes(data: Uint8Array): bigint {
    const pointer = this.allocate(Math.max(1, data.byteLength));
    new Uint8Array(toArrayBuffer(pointer, data.byteLength, false)).set(data);
    return pointer;
  }
  string(value: unknown) {
    const data = Buffer.from(text(value), 'utf8');
    return this.struct(
      'WGPUStringView',
      { data: this.bytes(data), length: data.byteLength },
      false,
    ).value;
  }
  array(type: string, values: any[]): bigint {
    const isResource = metadata.objects.includes(type);
    const layout =
      nativeLayouts[type] ??
      (
        {
          float: 'float32',
          double: 'float64',
          uint8_t: 'uint8',
          uint16_t: 'uint16',
          uint32_t: 'uint32',
          uint64_t: 'uint64',
        } as Record<string, PrimitiveType>
      )[type] ??
      (type === 'pointer' || isResource ? 'pointer' : 'uint32');
    const size = sizeOf(layout);
    const pointer = this.allocate(Math.max(1, size * values.length), {
      alignment: alignOf(layout),
    });
    values.forEach((item, index) => {
      if (structs[type]) this.struct(type, item, true, pointer + BigInt(index * size));
      else
        write(
          layout as PrimitiveType,
          pointer,
          index * size,
          isResource
            ? item == null
              ? 0n
              : this.resource(item, `GPU${type.slice(4)}`)
            : nativeEnumTypes.has(type)
              ? item == null
                ? 0
                : nativeEnum(type, item)
              : item,
        );
    });
    return pointer;
  }
  struct(
    type: string,
    input: any = {},
    defaults = true,
    at?: bigint,
  ): { pointer: bigint; value: any } {
    const layout = nativeLayouts[type];
    if (!layout) throw new TypeError(`Unsupported native descriptor: ${type}`);
    const size = sizeOf(layout),
      pointer = at ?? this.allocate(size, { alignment: alignOf(layout) });
    if (defaults) this.init(type, pointer, size);
    const value = view(
      layout,
      new Uint8Array(toArrayBuffer(pointer, size, false)),
    ) as any;
    if (type === 'WGPUStringView') {
      value.data = input.data;
      value.length = input.length;
      return { pointer, value };
    }
    if (type === 'WGPUExtent3D' || type === 'WGPUOrigin3D' || type === 'WGPUColor') {
      if (Array.isArray(input) || ArrayBuffer.isView(input)) {
        const names =
          type === 'WGPUExtent3D'
            ? ['width', 'height', 'depthOrArrayLayers']
            : type === 'WGPUColor'
              ? ['r', 'g', 'b', 'a']
              : ['x', 'y', 'z'];
        input = Object.fromEntries(
          Array.from(input as any, (item, i) => [names[i], item]),
        );
      }
    }
    if (type === 'WGPUBindGroupEntry') {
      const item = input.resource;
      if (bufferBindings.has(item))
        input = {
          ...input,
          buffer: item.buffer,
          offset: item.offset ?? 0,
          ...(Object.hasOwn(item, 'size') ? { size: item.size } : {}),
        };
      else if (externalTextureBindings.has(item)) {
        (this.externalTextures ??= new Set()).add(item);
        input = {
          ...input,
          nextInChain: this.struct('WGPUExternalTextureBindingEntry', {
            externalTexture: item,
          }).pointer,
        };
      } else if (item) {
        try {
          this.resource(item, 'GPUSampler');
          input = { ...input, sampler: item };
        } catch {
          this.resource(item, 'GPUTextureView');
          input = { ...input, textureView: item };
        }
      }
    }
    if (type === 'WGPUBindGroupLayoutEntry' && Object.hasOwn(input, 'externalTexture'))
      input = {
        ...input,
        nextInChain: this.struct('WGPUExternalTextureBindingLayout').pointer,
      };
    if (type === 'WGPUTexelCopyBufferInfo') input = { ...input, layout: input };
    // Dawn already supplies the standard defaults; allocate chains only for overrides.
    if (
      type === 'WGPUTextureDescriptor' &&
      input != null &&
      Object.hasOwn(input, 'textureBindingViewDimension') &&
      input.textureBindingViewDimension !== undefined
    )
      input = {
        ...input,
        nextInChain: this.struct('WGPUTextureBindingViewDimension', {
          textureBindingViewDimension: input.textureBindingViewDimension,
        }).pointer,
      };
    if (
      type === 'WGPUTextureViewDescriptor' &&
      input != null &&
      Object.hasOwn(input, 'swizzle') &&
      input.swizzle !== undefined &&
      input.swizzle !== 'rgba'
    ) {
      const components = [...input.swizzle].map((component: string) =>
        component === '0' ? 'zero' : component === '1' ? 'one' : component,
      );
      input = {
        ...input,
        nextInChain: this.struct('WGPUTextureComponentSwizzleDescriptor', {
          swizzle: {
            r: components[0],
            g: components[1],
            b: components[2],
            a: components[3],
          },
        }).pointer,
      };
    }
    if (
      type === 'WGPURenderPassDescriptor' &&
      input != null &&
      Object.hasOwn(input, 'maxDrawCount') &&
      input.maxDrawCount !== undefined &&
      input.maxDrawCount !== 50_000_000
    )
      input = {
        ...input,
        nextInChain: this.struct('WGPURenderPassMaxDrawCount', {
          maxDrawCount: input.maxDrawCount,
        }).pointer,
      };
    for (const [key, declaration] of Object.entries(structs[type]!)) {
      if (input == null || !Object.hasOwn(input, key)) continue;
      let item = input[key];
      if (item === undefined || item === null) continue;
      // Dawn's initialized descriptor already represents an empty object label.
      if (defaults && key === 'label' && item === '') continue;
      const base = declaration.replace(/\bconst\b|\*/g, '').trim();
      if (declaration.includes('*')) {
        if (key === 'nextInChain') {
          value[key] = item;
          continue;
        }
        if (typeof item === 'bigint') {
          value[key] = item;
          continue;
        }
        const countName = key.endsWith('ies')
          ? `${key.slice(0, -3)}yCount`
          : key.endsWith('s')
            ? `${key.slice(0, -1)}Count`
            : '';
        if (countName in value) {
          if (key === 'constants' && !Array.isArray(item))
            item = Object.entries(item).map(([key, value]) => ({ key, value }));
          value[countName] = item.length;
          value[key] = this.array(base, item);
        } else if (
          ['float', 'double', 'uint8_t', 'uint16_t', 'uint32_t', 'uint64_t'].includes(
            base,
          )
        )
          value[key] = this.array(base, Array.from(item));
        else value[key] = this.struct(base, item).pointer;
      } else if (base === 'WGPUStringView') value[key] = this.string(item).$bytes;
      else if (structs[base]) value[key] = this.struct(base, item).value.$bytes;
      else if (metadata.objects.includes(base)) {
        value[key] =
          item === 'auto' && base === 'WGPUPipelineLayout'
            ? 0n
            : this.resource(item, `GPU${base.slice(4)}`);
      } else if (nativeEnumTypes.has(base) && typeof item === 'string')
        value[key] = nativeEnum(base, item);
      else value[key] = typeof item === 'boolean' ? Number(item) : item;
    }
    return { pointer, value };
  }
}
