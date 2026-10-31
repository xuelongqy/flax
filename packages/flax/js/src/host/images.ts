import type { CanvasHost, OffscreenCanvas } from './canvas.js';
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
  readonly data: Uint8ClampedArray;
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

class SharedImageData {
  private readonly imageWidth: number;
  private readonly imageHeight: number;
  private readonly pixels: Uint8ClampedArray;
  get width(): number {
    return this.imageWidth;
  }
  get height(): number {
    return this.imageHeight;
  }
  get data(): Uint8ClampedArray {
    return this.pixels;
  }
  get colorSpace(): 'srgb' {
    return 'srgb';
  }
  get pixelFormat(): 'rgba-unorm8' {
    return 'rgba-unorm8';
  }
  constructor(
    dataOrWidth: Uint8ClampedArray | number,
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
      this.imageWidth = size.width;
      this.imageHeight = size.height;
      this.pixels = new Uint8ClampedArray(size.length);
      return;
    }
    if (!(dataOrWidth instanceof Uint8ClampedArray))
      throw new TypeError('ImageData requires a Uint8ClampedArray.');
    const hasHeight =
      typeof heightOrSettings !== 'object' && heightOrSettings !== undefined;
    pixelSettings(
      hasHeight ? settings : (heightOrSettings as ImageDataSettings | undefined),
    );
    const width = integer(widthOrHeight, 0, 0xffffffff);
    if (
      width === 0 ||
      dataOrWidth.length === 0 ||
      dataOrWidth.length % (4 * width) !== 0
    )
      throw imageDataIndexError('The source data does not match the width.');
    const height = !hasHeight
      ? dataOrWidth.length / (4 * width)
      : integer(heightOrSettings as number, 0, 0xffffffff);
    if (height === 0 || dataOrWidth.length !== 4 * width * height)
      throw imageDataIndexError('The source data does not match the dimensions.');
    this.imageWidth = width;
    this.imageHeight = height;
    this.pixels = dataOrWidth;
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
      return closed.has(this) ? -1 : sources.get(this)!.canvasId;
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
    ImageBitmap,
    make: (source: BitmapSource) => new ImageBitmap(secret, source),
    source: (bitmap: object) => sources.get(bitmap),
  };
}
const canonical = constructors(globalThis);
export const ImageData: {
  new (width: number, height: number, settings?: ImageDataSettings): ImageData;
  new (
    data: Uint8ClampedArray,
    width: number,
    height?: number,
    settings?: ImageDataSettings,
  ): ImageData;
  new (data: Uint8ClampedArray, width: number, settings?: ImageDataSettings): ImageData;
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
  canvases: CanvasHost,
  Exception: DOMExceptionConstructor,
): ImageHost {
  const g = global as any,
    classes = constructors(global);
  let open = true,
    next = 1;
  const owned = new WeakMap<object, BitmapSource>();
  const transfers = new WeakMap<object, () => ImageBitmap>();
  const elements = new WeakMap<object, ImageBitmap>();
  const records = new Set<{ ref: WeakRef<ImageBitmap>; close(): void }>();
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
        ? Math.max(1, Math.round((sw! * options.resizeHeight) / sh!))
        : sw!);
    const height =
      options.resizeHeight ??
      (options.resizeWidth
        ? Math.max(1, Math.round((sh! * options.resizeWidth) / sw!))
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
          source instanceof HostImage ||
          canvases.isCanvas(source))
      );
    },
    bitmap(source) {
      check();
      host.sweep();
      const callbacks = new Set<() => void>();
      let closed = false;
      let backing: BitmapSource | undefined = source;
      let record: { ref: WeakRef<ImageBitmap>; close(): void };
      const wrapped: BitmapSource = {
        ...source,
        close() {
          if (closed) return;
          closed = true;
          backing?.close();
          backing = undefined;
          delete wrapped.native;
          records.delete(record);
          for (const fn of callbacks) fn();
          callbacks.clear();
        },
        pixels() {
          if (closed) throw new Exception('ImageBitmap is closed', 'InvalidStateError');
          return backing!.pixels();
        },
      };
      const bitmap = classes.make(wrapped);
      owned.set(bitmap, wrapped);
      transfers.set(bitmap, () => {
        host.source(bitmap);
        const source = backing!;
        backing = undefined;
        bitmap.close();
        return host.bitmap(source);
      });
      closeObservers.set(bitmap, callbacks);
      record = { ref: new WeakRef(bitmap), close: wrapped.close };
      records.add(record);
      return bitmap;
    },
    transfer(bitmap) {
      if (!owned.has(bitmap))
        throw new TypeError('Expected ImageBitmap from this session');
      host.source(bitmap);
      return transfers.get(bitmap)!();
    },
    source(bitmap) {
      check();
      if (bitmap instanceof HostImage) {
        const image = elements.get(bitmap);
        if (!image)
          throw new Exception('The image is not decoded', 'InvalidStateError');
        bitmap = image;
      }
      const source = owned.get(bitmap);
      if (!source) throw new TypeError('Expected ImageBitmap from this session');
      if ((bitmap as ImageBitmap).width === 0)
        throw new Exception('ImageBitmap is closed', 'InvalidStateError');
      return source;
    },
    read(source) {
      check();
      if (source instanceof classes.ImageData) {
        if (source.data.byteLength === 0)
          throw new Exception('ImageData is detached', 'InvalidStateError');
        return {
          width: source.width,
          height: source.height,
          data: new Uint8Array(
            source.data.buffer,
            source.data.byteOffset,
            source.data.byteLength,
          ),
          colorSpace: 'srgb',
          premultiplied: false,
        };
      }
      if (source instanceof classes.ImageBitmap || source instanceof HostImage)
        return host.source(source).pixels();
      if (canvases.isCanvas(source)) {
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
      closeObservers.get(bitmap)!.add(callback);
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
        source instanceof HostImage ? undefined : factory?.(source, ...args);
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
      const pixels = source.data.slice();
      let id: number | undefined;
      return host.bitmap({
        width: source.width,
        height: source.height,
        close() {
          if (id !== undefined) call('imageClose', id);
        },
        pixels: () => ({ ...source, data: pixels }),
        native() {
          id ??= call('imagePixels', pixels, source.width, source.height) as number;
          g.__flaxModules?.require('@flax/core/navigation');
          return call('imageNative', id) as object;
        },
      });
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
      if (!item) return;
      pending.delete(id);
      if (ok) item.resolve(value);
      else item.reject(new Exception(String(value), 'InvalidStateError'));
    },
    sweep() {
      for (const record of records)
        if (!record.ref.deref()) {
          records.delete(record);
          record.close();
        }
    },
    close() {
      if (!open) return;
      for (const record of records) record.close();
      records.clear();
      open = false;
      for (const item of pending.values())
        item.reject(new Exception('The image session closed', 'InvalidStateError'));
      pending.clear();
      factory = undefined;
    },
  };
  const closeObservers = new WeakMap<object, Set<() => void>>();
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
    ImageData: classes.ImageData,
    ImageBitmap: classes.ImageBitmap,
    Image: HostImage,
    HTMLImageElement: HostImage,
    createImageBitmap: (source: unknown, ...args: Options) =>
      host.create(source, ...args),
  });
  Object.defineProperty(g, hostKey, { value: host });
  return host;
}
