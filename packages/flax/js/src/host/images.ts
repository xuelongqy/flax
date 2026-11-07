import type { CanvasHost, CanvasTransfers, OffscreenCanvas } from './canvas.js';
import type { DOMExceptionConstructor } from './events.js';
import type { Blob } from './data.js';
import type { Event, EventTarget } from './events.js';

export interface ImageBitmapOptions {
  imageOrientation?: 'from-image' | 'flipY';
  premultiplyAlpha?: 'default' | 'premultiply' | 'none';
  colorSpaceConversion?: 'default' | 'none';
  resizeWidth?: number;
  resizeHeight?: number;
  resizeQuality?: 'pixelated' | 'low' | 'medium' | 'high';
}

export interface ImageDataSettings {
  colorSpace?: 'srgb' | 'display-p3';
  pixelFormat?: 'rgba-unorm8' | 'rgba-float16';
}
export interface ImageData {
  readonly width: number;
  readonly height: number;
  readonly data: Uint8ClampedArray<ArrayBuffer>;
  readonly colorSpace: 'srgb';
  readonly pixelFormat: 'rgba-unorm8';
}
export interface ImageBitmap {
  readonly width: number;
  readonly height: number;
  close(): void;
}
/** An image resource for canvas renderers, without an HTML layout node. */
export interface HTMLImageElement extends EventTarget {
  src: string;
  readonly currentSrc: string;
  width: number;
  height: number;
  readonly naturalWidth: number;
  readonly naturalHeight: number;
  readonly complete: boolean;
  crossOrigin: string | null;
  onload: ((event: Event) => unknown) | null;
  onerror: ((event: Event) => unknown) | null;
  decode(): Promise<void>;
}
function error(name: string, message: string): Error {
  return new globalThis.DOMException(message, name);
}
function canvasException(name: string, message: string): Error {
  return error(name, message);
}
function indexSizeError(message: string): Error {
  return error('IndexSizeError', message);
}
function integer(value: number, min = -0x80000000, max = 0x7fffffff) {
  const n = Math.trunc(+value);
  if (!Number.isFinite(n) || n < min || n > max)
    throw new TypeError('Image integer is outside its supported range');
  return n === 0 ? 0 : n;
}
function pixelSettings(settings: ImageDataSettings = {}): void {
  const space = settings?.colorSpace ?? 'srgb';
  const format = settings?.pixelFormat ?? 'rgba-unorm8';
  if (
    !['srgb', 'display-p3'].includes(space) ||
    !['rgba-unorm8', 'rgba-float16'].includes(format)
  )
    throw new TypeError('Invalid ImageData settings.');
  if (space !== 'srgb' || format !== 'rgba-unorm8')
    throw canvasException(
      'NotSupportedError',
      'Canvas currently stores sRGB RGBA8 pixels.',
    );
}

function imageDataIndexError(message: string): Error {
  return indexSizeError(message);
}

function checkedImageSize(
  width: number,
  height: number,
): { width: number; height: number; length: number } {
  const w = integer(width, 0, 0xffffffff);
  const h = integer(height, 0, 0xffffffff);
  if (w <= 0 || h <= 0) {
    throw imageDataIndexError('The source width and height must be greater than zero.');
  }
  const pixels = w * h;
  if (!Number.isFinite(pixels) || pixels > Math.floor(0x7fffffff / 4)) {
    throw new RangeError('The ImageData dimensions are too large.');
  }
  return { width: w, height: h, length: pixels * 4 };
}

// Capture intrinsic accessors before application getters can replace prototypes.
const apply = Reflect.apply;
const weakGet = WeakMap.prototype.get;
const bufferLength = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype,
  'byteLength',
)!.get!;
const bufferResizable = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype,
  'resizable',
)!.get!;
const typedPrototype = Object.getPrototypeOf(Uint8Array.prototype);
const viewType = Object.getOwnPropertyDescriptor(
  typedPrototype,
  Symbol.toStringTag,
)!.get!;
const viewBuffer = Object.getOwnPropertyDescriptor(typedPrototype, 'buffer')!.get!;
const viewOffset = Object.getOwnPropertyDescriptor(typedPrototype, 'byteOffset')!.get!;
const viewLength = Object.getOwnPropertyDescriptor(typedPrototype, 'byteLength')!.get!;
const Bytes = Uint8Array;
const byteLength = (buffer: ArrayBuffer): number => apply(bufferLength, buffer, []);
const bytesOf = (view: ArrayBufferView): Uint8Array =>
  new Bytes(
    apply(viewBuffer, view, []),
    apply(viewOffset, view, []),
    apply(viewLength, view, []),
  );
type ImageDataState = {
  width: number;
  height: number;
  data: Uint8ClampedArray<ArrayBuffer>;
};
const imageDataStates = new WeakMap<object, ImageDataState>();
const imageDataState = (value: object): ImageDataState | undefined =>
  apply(weakGet, imageDataStates, [value]);

class SharedImageData {
  get width(): number {
    return imageDataState(this)!.width;
  }
  get height(): number {
    return imageDataState(this)!.height;
  }
  get data(): Uint8ClampedArray<ArrayBuffer> {
    return imageDataState(this)!.data;
  }
  get colorSpace(): 'srgb' {
    return 'srgb';
  }
  get pixelFormat(): 'rgba-unorm8' {
    return 'rgba-unorm8';
  }
  constructor(
    dataOrWidth: Uint8ClampedArray<ArrayBuffer> | number,
    widthOrHeight: number,
    heightOrSettings?: number | ImageDataSettings,
    settings?: ImageDataSettings,
  ) {
    if (arguments.length < 2) throw new TypeError('ImageData requires dimensions.');
    if (
      !ArrayBuffer.isView(dataOrWidth) &&
      !(dataOrWidth && typeof dataOrWidth === 'object' && 'length' in dataOrWidth)
    ) {
      pixelSettings(heightOrSettings as ImageDataSettings | undefined);
      const size = checkedImageSize(dataOrWidth as number, widthOrHeight);
      imageDataStates.set(this, {
        width: size.width,
        height: size.height,
        data: new Uint8ClampedArray(size.length),
      });
      return;
    }
    if (apply(viewType, dataOrWidth, []) !== 'Uint8ClampedArray')
      throw new TypeError('ImageData requires a Uint8ClampedArray.');
    const data = dataOrWidth as Uint8ClampedArray<ArrayBuffer>;
    // The intrinsic also rejects SharedArrayBuffer, regardless of public properties.
    if (apply(bufferResizable, apply(viewBuffer, data, []), []))
      throw new TypeError('ImageData requires a fixed-length ArrayBuffer.');
    const hasHeight =
      typeof heightOrSettings !== 'object' && heightOrSettings !== undefined;
    pixelSettings(
      hasHeight ? settings : (heightOrSettings as ImageDataSettings | undefined),
    );
    const width = integer(widthOrHeight, 0, 0xffffffff);
    const givenHeight = hasHeight
      ? integer(heightOrSettings as number, 0, 0xffffffff)
      : undefined;
    const length = apply(viewLength, data, []);
    if (width === 0 || length === 0 || length % (4 * width) !== 0)
      throw imageDataIndexError('The source data does not match the width.');
    const height = givenHeight ?? length / (4 * width);
    if (height === 0 || length !== 4 * width * height)
      throw imageDataIndexError('The source data does not match the dimensions.');
    imageDataStates.set(this, { width, height, data });
  }
}

export interface PixelImage {
  data: Uint8Array;
  width: number;
  height: number;
  colorSpace?: 'srgb' | 'display-p3';
  premultiplied?: boolean;
}
export interface BitmapSource {
  width: number;
  height: number;
  close(): void;
  pixels(): PixelImage;
  native?(): object;
  canvasId?: number;
  canvasOwner?: unknown;
}
const constructorKey = Symbol.for('flax.image.constructors');
export const imageIdKey = Symbol.for('flaxCanvasImageId');
function constructors(
  global: typeof globalThis,
): ReturnType<typeof defineConstructors> {
  const existing = (global as any)[constructorKey];
  if (existing) return existing as ReturnType<typeof defineConstructors>;
  const value = global === globalThis ? defineConstructors() : constructors(globalThis);
  Object.defineProperty(global, constructorKey, { value });
  return value;
}
function defineConstructors() {
  const secret = {},
    sources = new WeakMap<object, BitmapSource>();
  const closed = new WeakSet<object>();
  class ImageBitmap {
    constructor(token?: object, source?: BitmapSource) {
      if (token !== secret || !source) throw new TypeError('Illegal constructor');
      sources.set(this, source);
    }
    get width() {
      return closed.has(this) ? 0 : sources.get(this)!.width;
    }
    get height() {
      return closed.has(this) ? 0 : sources.get(this)!.height;
    }
    get [imageIdKey]() {
      const source = sources.get(this)!;
      return closed.has(this) || source.width === 0 ? -1 : source.canvasId;
    }
    close() {
      if (closed.has(this)) return;
      closed.add(this);
      sources.get(this)!.close();
    }
  }
  Object.defineProperty(SharedImageData, 'name', { value: 'ImageData' });
  return {
    ImageData: SharedImageData,
    data: imageDataState,
    ImageBitmap,
    make: (source: BitmapSource) => new ImageBitmap(secret, source),
    source: (bitmap: object) => sources.get(bitmap),
  };
}
const canonical = constructors(globalThis);
export const ImageData: {
  new (width: number, height: number, settings?: ImageDataSettings): ImageData;
  new (
    data: Uint8ClampedArray<ArrayBuffer>,
    width: number,
    height?: number,
    settings?: ImageDataSettings,
  ): ImageData;
  new (
    data: Uint8ClampedArray<ArrayBuffer>,
    width: number,
    settings?: ImageDataSettings,
  ): ImageData;
  readonly prototype: ImageData;
} = canonical.ImageData;
export const ImageBitmap: { new (): ImageBitmap; readonly prototype: ImageBitmap } =
  canonical.ImageBitmap;

type Call = (operation: string, ...args: unknown[]) => unknown;
type Options =
  [ImageBitmapOptions?] | [number, number, number, number, ImageBitmapOptions?];
export interface ImageHost {
  isSource(source: unknown): boolean;
  bitmap(source: BitmapSource): ImageBitmap;
  transfer(bitmap: ImageBitmap): ImageBitmap;
  prepareTransfers(list: unknown[]): CanvasTransfers;
  deserialize(record: any[]): ImageData | ImageBitmap;
  source(bitmap: object): BitmapSource;
  read(source: unknown): PixelImage;
  onClose(bitmap: object, callback: () => void): void;
  register(
    factory: (source: unknown, ...options: Options) => Promise<ImageBitmap> | undefined,
  ): () => void;
  create(source: unknown, ...options: Options): Promise<ImageBitmap>;
  fromPixels(pixels: PixelImage): ImageBitmap;
  encode(pixels: PixelImage, type: string, quality?: number): Promise<Blob>;
  dataURL(pixels: PixelImage, type?: string, quality?: number): string;
  settle(id: number, ok: boolean, value: any): void;
  sweep(): void;
  close(): void;
}
const hostKey = Symbol.for('flax.image.host');
export function imageHost(global: typeof globalThis = globalThis): ImageHost {
  const value = (global as any)[hostKey];
  if (!value) throw new TypeError('Shared image host is unavailable');
  return value;
}
export function installImageHost(
  global: typeof globalThis,
  call: Call,
  canvases: CanvasHost | undefined,
  Exception: DOMExceptionConstructor,
  worker = false,
): ImageHost {
  const g = global as any,
    classes = constructors(global);
  let open = true,
    next = 1;
  type BitmapState = {
    width: number;
    height: number;
    closed: boolean;
    backing: BitmapSource | undefined;
    pixels: PixelImage | undefined;
    buffer: ArrayBuffer | undefined;
    source: BitmapSource;
    callbacks: (() => void)[];
  };
  const owned = new WeakMap<object, BitmapState>();
  const ownedState = (value: object): BitmapState | undefined =>
    apply(weakGet, owned, [value]);
  const elements = new WeakMap<object, ImageBitmap>();
  const elementSources = new WeakSet<object>();
  const records: { ref: WeakRef<ImageBitmap>; state: BitmapState }[] = [];
  let active = false;
  const pending = new Map<
    number,
    { resolve(value: any): void; reject(error: unknown): void }
  >();
  let factory:
    | ((source: unknown, ...options: Options) => Promise<ImageBitmap> | undefined)
    | undefined;
  function check() {
    if (!open) throw new Exception('The image session closed', 'InvalidStateError');
  }
  function rpc(operation: string, ...args: unknown[]): Promise<any> {
    check();
    host.sweep();
    const id = next++;
    return new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
      try {
        call(
          'image',
          id,
          operation,
          ...args.map((value) =>
            Array.isArray(value) ? JSON.stringify(value) : value,
          ),
        );
      } catch (error) {
        pending.delete(id);
        reject(error);
      }
    });
  }
  function activity(value: boolean) {
    if (active === value) return;
    active = value;
    call('imageActivity', value);
  }
  function alive(state: BitmapState): boolean {
    return (
      !state.closed && (state.buffer === undefined || byteLength(state.buffer) !== 0)
    );
  }
  function release(state: BitmapState) {
    if (state.closed) return;
    state.closed = true;
    const backing = state.backing;
    state.backing = undefined;
    state.pixels = undefined;
    state.buffer = undefined;
    // Native detach already committed ownership. Cleanup must not turn success into failure.
    try {
      backing?.close();
    } catch {}
    for (let i = 0; i < state.callbacks.length; i++) {
      try {
        state.callbacks[i]!();
      } catch {}
    }
    state.callbacks.length = 0;
  }
  function capture(state: BitmapState): PixelImage {
    if (!open || !alive(state))
      throw new Exception('ImageBitmap is closed', 'DataCloneError');
    if (!state.pixels) {
      const pixels = state.backing!.pixels();
      if (!alive(state)) throw new Exception('ImageBitmap is closed', 'DataCloneError');
      const data = new Bytes(bytesOf(pixels.data));
      if (data.byteLength !== state.width * state.height * 4)
        throw new Exception('Invalid bitmap pixels', 'DataCloneError');
      state.pixels = {
        width: state.width,
        height: state.height,
        data,
        colorSpace: pixels.colorSpace ?? 'srgb',
        premultiplied: pixels.premultiplied === true,
      };
      state.buffer = data.buffer as ArrayBuffer;
    }
    return state.pixels;
  }
  function makeBitmap(backing: BitmapSource, pixels?: PixelImage): ImageBitmap {
    check();
    host.sweep();
    const state: BitmapState = {
      width: backing.width,
      height: backing.height,
      closed: false,
      backing,
      pixels,
      buffer: pixels?.data.buffer as ArrayBuffer | undefined,
      source: undefined!,
      callbacks: [],
    };
    const source: BitmapSource = {
      ...backing,
      get width() {
        return alive(state) ? state.width : 0;
      },
      get height() {
        return alive(state) ? state.height : 0;
      },
      close: () => release(state),
      pixels() {
        if (!alive(state))
          throw new Exception('ImageBitmap is closed', 'InvalidStateError');
        const pixels = capture(state);
        // Renderer consumers receive snapshots, never the transferable private buffer.
        return { ...pixels, data: new Bytes(pixels.data) };
      },
    };
    if (backing.native)
      source.native = () => {
        if (!alive(state))
          throw new Exception('ImageBitmap is closed', 'InvalidStateError');
        return state.backing!.native!();
      };
    state.source = source;
    const bitmap = classes.make(source);
    owned.set(bitmap, state);
    records[records.length] = { ref: new WeakRef(bitmap), state };
    activity(true);
    return bitmap;
  }
  function fromOwnedPixels(pixels: PixelImage): ImageBitmap {
    let id: number | undefined;
    return makeBitmap(
      {
        width: pixels.width,
        height: pixels.height,
        close() {
          if (id !== undefined) call('imageClose', id);
        },
        pixels: () => pixels,
        native() {
          id ??= call(
            'imagePixels',
            pixels.data,
            pixels.width,
            pixels.height,
          ) as number;
          g.__flaxModules?.require('@flax/core/navigation');
          return call('imageNative', id) as object;
        },
      },
      pixels,
    );
  }
  function nativeBitmap(value: {
    id: number;
    width: number;
    height: number;
    pixels: ArrayBuffer;
  }): ImageBitmap {
    return host.bitmap({
      width: value.width,
      height: value.height,
      close: () => call('imageClose', value.id),
      pixels: () => ({
        width: value.width,
        height: value.height,
        data: new Uint8Array(value.pixels),
        premultiplied: false,
        colorSpace: 'srgb',
      }),
      native: () => {
        g.__flaxModules?.require('@flax/core/navigation');
        return call('imageNative', value.id) as object;
      },
    });
  }
  function settings(input: ImageBitmapOptions = {}) {
    const output = { ...input };
    for (const [key, allowed] of Object.entries({
      imageOrientation: ['from-image', 'flipY'],
      premultiplyAlpha: ['default', 'premultiply', 'none'],
      colorSpaceConversion: ['default', 'none'],
      resizeQuality: ['pixelated', 'low', 'medium', 'high'],
    }))
      if (
        (input as any)[key] !== undefined &&
        !allowed.includes(String((input as any)[key]))
      )
        throw new TypeError('Invalid bitmap ' + key);
    for (const key of ['resizeWidth', 'resizeHeight'] as const) {
      if (input[key] === undefined) continue;
      output[key] = integer(input[key]!, 0, 0xffffffff);
      if (output[key] === 0)
        throw new Exception(
          'Bitmap resize dimensions must be positive',
          'InvalidStateError',
        );
    }
    return output;
  }
  function transformed(source: PixelImage, args: Options) {
    const cropped = args.length > 1;
    if (cropped && args.length < 4) throw new TypeError('Incomplete bitmap crop');
    const options = settings(
      (cropped ? args[4] : args[0]) as ImageBitmapOptions | undefined,
    );
    let [sx, sy, sw, sh] = cropped
      ? (args.slice(0, 4) as number[]).map((value) => integer(value))
      : [0, 0, source.width, source.height];
    if (sw === 0 || sh === 0) throw new RangeError('Bitmap crop must not be empty');
    if (sw! < 0) {
      sx = sx! + sw!;
      sw = -sw!;
    }
    if (sh! < 0) {
      sy = sy! + sh!;
      sh = -sh!;
    }
    const width =
      options.resizeWidth ??
      (options.resizeHeight
        ? Math.max(1, Math.ceil((sw! * options.resizeHeight) / sh!))
        : sw!);
    const height =
      options.resizeHeight ??
      (options.resizeWidth
        ? Math.max(1, Math.ceil((sh! * options.resizeWidth) / sw!))
        : sh!);
    return rpc('transform', source.data, [
      source.width,
      source.height,
      sx!,
      sy!,
      sw!,
      sh!,
      width,
      height,
      options.imageOrientation === 'flipY' ? 1 : 0,
      ['pixelated', 'low', 'medium', 'high'].indexOf(options.resizeQuality ?? 'low'),
      source.premultiplied ? 1 : 0,
      0,
    ]).then(nativeBitmap);
  }
  const host: ImageHost = {
    isSource(source) {
      return (
        typeof source === 'object' &&
        source !== null &&
        (source instanceof classes.ImageData ||
          owned.has(source) ||
          elementSources.has(source) ||
          canvases?.isCanvas(source) === true)
      );
    },
    bitmap: makeBitmap,
    transfer(bitmap) {
      // Same-realm bitmaprenderer ownership only; structured transfers use native detach.
      host.source(bitmap);
      const state = ownedState(bitmap)!;
      const receiver = makeBitmap(state.backing!, state.pixels);
      state.backing = undefined;
      release(state);
      return receiver;
    },
    prepareTransfers(list) {
      const buffers: unknown[] = [];
      const validated: BitmapState[] = [];
      for (let i = 0; i < list.length; i++) {
        const value = list[i];
        const state =
          value && typeof value === 'object' ? ownedState(value) : undefined;
        if (!state) {
          buffers[i] = value;
          continue;
        }
        capture(state);
        validated[validated.length] = state;
        buffers[i] = state.buffer;
      }
      return {
        buffers,
        serialize(value) {
          const data = classes.data(value);
          if (data) {
            if (!apply(viewLength, data.data, []))
              throw new Exception('ImageData is detached', 'DataCloneError');
            // Native WriteValue shares its graph map with this host record. Preserve the view.
            return ['ImageData', data.width, data.height, data.data];
          }
          const state = ownedState(value);
          if (!state) return undefined;
          const pixels = capture(state);
          validated[validated.length] = state;
          return [
            'ImageBitmap',
            state.width,
            state.height,
            state.buffer,
            pixels.colorSpace ?? 'srgb',
            pixels.premultiplied === true,
          ];
        },
        validate() {
          // No application getters, provider callbacks or replaceable collection methods.
          for (let i = 0; i < validated.length; i++) {
            const state = validated[i]!;
            if (!open || !alive(state))
              throw new Exception('ImageBitmap ownership changed', 'DataCloneError');
          }
        },
      };
    },
    deserialize(record) {
      if (record[0] === 'ImageData')
        return new classes.ImageData(record[3], record[1], record[2]);
      const width = record[1],
        height = record[2],
        buffer = record[3];
      if (
        record[0] !== 'ImageBitmap' ||
        !Number.isInteger(width) ||
        !Number.isInteger(height) ||
        width <= 0 ||
        height <= 0 ||
        byteLength(buffer) !== width * height * 4 ||
        (record[4] !== 'srgb' && record[4] !== 'display-p3') ||
        typeof record[5] !== 'boolean'
      )
        throw new Exception('Invalid ImageBitmap record', 'DataCloneError');
      // Deserialized bytes belong exclusively to this realm; never adopt sender IDs or GPU objects.
      return fromOwnedPixels({
        width,
        height,
        data: new Bytes(buffer),
        colorSpace: record[4],
        premultiplied: record[5],
      });
    },
    source(bitmap) {
      check();
      if (elementSources.has(bitmap)) {
        const image = elements.get(bitmap);
        if (!image)
          throw new Exception('The image is not decoded', 'InvalidStateError');
        bitmap = image;
      }
      const state = ownedState(bitmap);
      if (!state) throw new TypeError('Expected ImageBitmap from this session');
      if (!alive(state))
        throw new Exception('ImageBitmap is closed', 'InvalidStateError');
      return state.source;
    },
    read(source) {
      check();
      const data =
        source && typeof source === 'object' ? classes.data(source) : undefined;
      if (data) {
        if (!apply(viewLength, data.data, []))
          throw new Exception('ImageData is detached', 'InvalidStateError');
        const pixels = bytesOf(data.data);
        return {
          width: data.width,
          height: data.height,
          data: pixels,
          colorSpace: 'srgb',
          premultiplied: false,
        };
      }
      if (
        source instanceof classes.ImageBitmap ||
        (typeof source === 'object' && source !== null && elementSources.has(source))
      )
        return host.source(source).pixels();
      if (canvases?.isCanvas(source)) {
        const backend = canvases.backend(source as object);
        if (!backend) {
          if (!source.width || !source.height)
            throw new Exception('The canvas is empty', 'InvalidStateError');
          return {
            width: source.width,
            height: source.height,
            data: new Uint8Array(source.width * source.height * 4),
          };
        }
        if (!backend?.snapshot)
          throw new Exception(
            'The source canvas cannot be captured',
            'InvalidStateError',
          );
        const bitmap = backend.snapshot();
        try {
          return host.source(bitmap).pixels();
        } finally {
          bitmap.close();
        }
      }
      throw new TypeError('Unsupported external image source');
    },
    onClose(bitmap, callback) {
      host.source(bitmap);
      bitmap = elements.get(bitmap) ?? bitmap;
      ownedState(bitmap)!.callbacks.push(callback);
    },
    register(value) {
      check();
      if (factory) throw new TypeError('Duplicate bitmap provider');
      factory = value;
      return () => {
        if (factory === value) factory = undefined;
      };
    },
    async create(source, ...args) {
      check();
      const result =
        typeof source === 'object' && source !== null && elementSources.has(source)
          ? undefined
          : factory?.(source, ...args);
      if (result) return result;
      if (
        source &&
        typeof source === 'object' &&
        'arrayBuffer' in source &&
        typeof (source as any).arrayBuffer === 'function'
      ) {
        const options = settings(
          (args.length > 1 ? args[4] : args[0]) as ImageBitmapOptions | undefined,
        );
        const value = await rpc(
          'decode',
          await (source as Blob).arrayBuffer(),
          options.colorSpaceConversion !== 'none',
          options.imageOrientation !== 'flipY',
        );
        const bitmap = nativeBitmap(value);
        if (
          args.length > 1 ||
          options.resizeWidth ||
          options.resizeHeight ||
          options.imageOrientation === 'flipY'
        ) {
          try {
            return await transformed(host.read(bitmap), args);
          } finally {
            bitmap.close();
          }
        }
        return bitmap;
      }
      return transformed(host.read(source), args);
    },
    fromPixels(source) {
      return fromOwnedPixels({ ...source, data: new Bytes(bytesOf(source.data)) });
    },
    async encode(source, type = 'image/png', quality = 0.92) {
      check();
      const supported = ['image/png', 'image/jpeg', 'image/webp'];
      if (!supported.includes(type)) type = 'image/png';
      const bytes = await rpc(
        'encode',
        source.data,
        source.width,
        source.height,
        type,
        Number.isFinite(quality) && quality >= 0 && quality <= 1 ? quality : 0.92,
      );
      return new g.Blob([bytes], { type });
    },
    dataURL(source, type = 'image/png', quality = 0.92) {
      check();
      type = String(type).toLowerCase();
      if (!['image/png', 'image/jpeg', 'image/webp'].includes(type)) type = 'image/png';
      const bytes = new Uint8Array(
        call(
          'imageEncode',
          source.data,
          source.width,
          source.height,
          type,
          Number.isFinite(quality) && quality >= 0 && quality <= 1 ? quality : 0.92,
        ) as ArrayBuffer,
      );
      let binary = '';
      for (let offset = 0; offset < bytes.length; offset += 8192)
        binary += String.fromCharCode(...bytes.subarray(offset, offset + 8192));
      return 'data:' + type + ';base64,' + g.btoa(binary);
    },
    settle(id, ok, value) {
      const item = pending.get(id);
      if (!item) {
        if (open && ok && typeof value?.id === 'number') call('imageClose', value.id);
        return;
      }
      pending.delete(id);
      if (ok) item.resolve(value);
      else item.reject(new Exception(String(value), 'InvalidStateError'));
    },
    sweep() {
      let retained = 0;
      for (let i = 0; i < records.length; i++) {
        const record = records[i]!;
        if (!record.ref.deref() || !alive(record.state)) release(record.state);
        else records[retained++] = record;
      }
      records.length = retained;
      activity(retained !== 0);
    },
    close() {
      if (!open) return;
      open = false;
      for (let i = 0; i < records.length; i++) release(records[i]!.state);
      records.length = 0;
      activity(false);
      for (const item of pending.values())
        item.reject(new Exception('The image session closed', 'InvalidStateError'));
      pending.clear();
      factory = undefined;
    },
  };
  Object.assign(g, {
    ImageData: classes.ImageData,
    ImageBitmap: classes.ImageBitmap,
    createImageBitmap: (source: unknown, ...args: Options) =>
      host.create(source, ...args),
  });
  Object.defineProperty(g, hostKey, { value: host });
  // The image foundation needs neither Flutter objects nor a canvas provider.
  if (worker || !canvases) return host;
  const BaseTarget = g.EventTarget ?? globalThis.EventTarget;
  const BaseEvent = g.Event ?? globalThis.Event;
  class HostImage extends BaseTarget {
    #src = '';
    #generation = 0;
    #loading: Promise<void> | undefined;
    #complete = true;
    #width: number | undefined;
    #height: number | undefined;
    crossOrigin: string | null = null;
    constructor(width?: number, height?: number) {
      super();
      elementSources.add(this);
      if (width !== undefined) this.width = width;
      if (height !== undefined) this.height = height;
    }
    get src() {
      return this.#src;
    }
    set src(value: string) {
      check();
      this.#src = String(value);
      const generation = ++this.#generation;
      elements.get(this)?.close();
      elements.delete(this);
      this.#complete = false;
      this.#loading = (async () => {
        let blob: Blob;
        if (this.#src.startsWith('data:')) {
          const match = /^data:([^,]*),(.*)$/s.exec(this.#src);
          if (!match) throw new TypeError('Invalid image data URL');
          const bytes = match[1]!.endsWith(';base64')
            ? Uint8Array.from(g.atob(match[2]), (c: string) => c.charCodeAt(0))
            : new g.TextEncoder().encode(decodeURIComponent(match[2]!));
          blob = new g.Blob([bytes]);
        } else {
          if (typeof g.fetch !== 'function')
            throw new Exception(
              'Image URL loading requires the session Fetch function',
              'NotSupportedError',
            );
          const response = await g.fetch(this.#src, {
            credentials: this.crossOrigin === 'use-credentials' ? 'include' : 'omit',
          });
          if (!response.ok) throw new Error('Image HTTP status ' + response.status);
          blob = await response.blob();
        }
        const bitmap = await host.create(blob);
        if (generation !== this.#generation || !open) {
          bitmap.close();
          throw new Exception('Image source changed', 'AbortError');
        }
        elements.set(this, bitmap);
        this.#complete = true;
      })();
      void this.#loading.then(
        () => this.dispatchEvent(new BaseEvent('load')),
        () => {
          if (generation !== this.#generation || !open) return;
          this.#complete = true;
          this.dispatchEvent(new BaseEvent('error'));
        },
      );
    }
    get currentSrc() {
      return elements.has(this) ? this.#src : '';
    }
    get naturalWidth() {
      return elements.get(this)?.width ?? 0;
    }
    get naturalHeight() {
      return elements.get(this)?.height ?? 0;
    }
    get width() {
      return this.#width ?? this.naturalWidth;
    }
    set width(value: number) {
      this.#width = integer(value, 0, 0xffffffff);
    }
    get height() {
      return this.#height ?? this.naturalHeight;
    }
    set height(value: number) {
      this.#height = integer(value, 0, 0xffffffff);
    }
    get complete() {
      return this.#complete;
    }
    decode(): Promise<void> {
      check();
      return (
        this.#loading ??
        Promise.reject(new Exception('The image has no source', 'EncodingError'))
      );
    }
  }
  Object.defineProperty(HostImage, 'name', { value: 'HTMLImageElement' });
  for (const type of ['load', 'error']) {
    const handlers = new WeakMap<object, Function>();
    Object.defineProperty(HostImage.prototype, 'on' + type, {
      configurable: true,
      enumerable: true,
      get() {
        return handlers.get(this) ?? null;
      },
      set(value) {
        const old = handlers.get(this);
        if (old) this.removeEventListener(type, old);
        handlers.delete(this);
        if (typeof value === 'function') {
          handlers.set(this, value);
          this.addEventListener(type, value);
        }
      },
    });
  }
  const bitmapTransfers = new WeakMap<object, (bitmap: ImageBitmap | null) => void>();
  const bitmapSecret = {};
  class ImageBitmapRenderingContext {
    declare readonly canvas: OffscreenCanvas;
    constructor(
      key: object,
      canvas: OffscreenCanvas,
      transfer: (bitmap: ImageBitmap | null) => void,
    ) {
      if (key !== bitmapSecret) throw new TypeError('Illegal constructor');
      Object.defineProperty(this, 'canvas', { value: canvas, enumerable: true });
      bitmapTransfers.set(this, transfer);
    }
    transferFromImageBitmap(bitmap: ImageBitmap | null) {
      check();
      const transfer = bitmapTransfers.get(this);
      if (!transfer || arguments.length === 0)
        throw new TypeError('Expected an ImageBitmap');
      transfer(bitmap ?? null);
    }
  }
  Object.defineProperty(ImageBitmapRenderingContext.prototype, Symbol.toStringTag, {
    value: 'ImageBitmapRenderingContext',
    configurable: true,
  });
  canvases.register('bitmaprenderer', (canvas, target) => {
    let current: ImageBitmap | null = null,
      width = canvas.width,
      height = canvas.height;
    const clear = (w = width, h = height) => {
      call('canvasBitmap', target, null);
      current?.close();
      current = null;
      width = w;
      height = h;
    };
    const snapshot = () => {
      if (!width || !height)
        throw new Exception('The canvas has no pixels', 'InvalidStateError');
      return current
        ? host.fromPixels(host.read(current))
        : host.fromPixels(host.read(new classes.ImageData(width, height)));
    };
    const context = new ImageBitmapRenderingContext(bitmapSecret, canvas, (bitmap) => {
      if (bitmap === null) {
        clear(canvas.width, canvas.height);
        return;
      }
      if (!owned.has(bitmap))
        throw new TypeError('Expected ImageBitmap from this session');
      const source = host.source(bitmap);
      // Providers without a shared native image use an explicit pixel import.
      const imported = source.native ? bitmap : host.fromPixels(host.read(bitmap));
      try {
        call('canvasBitmap', target, host.source(imported).native!());
      } catch (error) {
        if (imported !== bitmap) imported.close();
        throw error;
      }
      const next = host.transfer(imported);
      if (imported !== bitmap) bitmap.close();
      current?.close();
      current = next;
      width = next.width;
      height = next.height;
    });
    return {
      getContext: () => context,
      resize: (w, h) => clear(w, h),
      snapshot,
      async convertToBlob(options) {
        if (!width || !height)
          throw new Exception('The canvas has no pixels', 'IndexSizeError');
        const bitmap = snapshot();
        try {
          return await host.encode(
            host.read(bitmap),
            options?.type ?? 'image/png',
            options?.quality,
          );
        } finally {
          bitmap.close();
        }
      },
      transferToImageBitmap() {
        const output = current ? host.transfer(current) : snapshot();
        clear();
        return output;
      },
    };
  });
  Object.assign(g, {
    ImageBitmapRenderingContext,
    Image: HostImage,
    HTMLImageElement: HostImage,
  });
  return host;
}
