/// <reference lib="es2025.float16" preserve="true" />

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

type ImageColorSpace = 'srgb' | 'display-p3';
type ImagePixelFormat = 'rgba-unorm8' | 'rgba-float16';
type ImageDataArray = Uint8ClampedArray<ArrayBuffer> | Float16Array<ArrayBuffer>;
export interface ImageDataSettings {
  colorSpace?: ImageColorSpace;
  pixelFormat?: ImagePixelFormat;
}
export interface ImageData {
  readonly width: number;
  readonly height: number;
  readonly data: ImageDataArray;
  readonly colorSpace: ImageColorSpace;
  readonly pixelFormat: ImagePixelFormat;
}
export interface ImageBitmap {
  readonly width: number;
  readonly height: number;
  close(): void;
}
declare const elementImageBrand: unique symbol;
export interface ElementImage {
  readonly [elementImageBrand]: true;
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
function indexSizeError(message: string): Error {
  return error('IndexSizeError', message);
}
function integer(value: number, min = -0x80000000, max = 0x7fffffff) {
  const n = Math.trunc(+value);
  if (!Number.isFinite(n) || n < min || n > max)
    throw new TypeError('Image integer is outside its supported range');
  return n === 0 ? 0 : n;
}
function pixelSettings(settings?: ImageDataSettings): Required<ImageDataSettings> {
  const colorSpace = settings?.colorSpace ?? 'srgb';
  const pixelFormat = settings?.pixelFormat ?? 'rgba-unorm8';
  if (!isColorSpace(colorSpace) || !isPixelFormat(pixelFormat))
    throw new TypeError('Invalid ImageData settings.');
  return { colorSpace, pixelFormat };
}

function isColorSpace(value: unknown): value is ImageColorSpace {
  return value === 'srgb' || value === 'display-p3';
}

function isPixelFormat(value: unknown): value is ImagePixelFormat {
  return value === 'rgba-unorm8' || value === 'rgba-float16';
}

function bytesPerPixel(format: ImagePixelFormat): number {
  return format === 'rgba-float16' ? 8 : 4;
}

function hasPixelLength(
  width: number,
  height: number,
  pixelFormat: ImagePixelFormat,
  length: number,
): boolean {
  const size = width * height * bytesPerPixel(pixelFormat);
  return (
    Number.isInteger(width) &&
    Number.isInteger(height) &&
    width > 0 &&
    height > 0 &&
    size <= 0x7fffffff &&
    length === size
  );
}

function checkedImageSize(
  width: number,
  height: number,
  pixelFormat: ImagePixelFormat,
): { width: number; height: number; length: number } {
  const w = integer(width, 0, 0xffffffff);
  const h = integer(height, 0, 0xffffffff);
  if (w <= 0 || h <= 0) {
    throw indexSizeError('The source width and height must be greater than zero.');
  }
  const pixels = w * h;
  if (pixels * bytesPerPixel(pixelFormat) > 0x7fffffff) {
    throw new RangeError('The ImageData dimensions are too large.');
  }
  return { width: w, height: h, length: pixels * 4 };
}

// Capture intrinsic accessors before application getters can replace prototypes.
const apply = Reflect.apply;
const defineProperty = Object.defineProperty;
const weakGet = WeakMap.prototype.get;
const weakSetAdd = WeakSet.prototype.add;
const weakSetHas = WeakSet.prototype.has;
const uncloneable = Symbol.for('flax.uncloneable');
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
const ClampedBytes = Uint8ClampedArray;
const HalfFloats = globalThis.Float16Array;
const byteLength = (buffer: ArrayBuffer): number => apply(bufferLength, buffer, []);
const bytesOf = (view: ArrayBufferView): Uint8Array =>
  new Bytes(
    apply(viewBuffer, view, []),
    apply(viewOffset, view, []),
    apply(viewLength, view, []),
  );
const imageDataStates = new WeakMap<object, ImageData>();
const imageDataState = (value: object): ImageData | undefined =>
  apply(weakGet, imageDataStates, [value]);

class SharedImageData {
  get width(): number {
    return imageDataState(this)!.width;
  }
  get height(): number {
    return imageDataState(this)!.height;
  }
  get data(): ImageDataArray {
    return imageDataState(this)!.data;
  }
  get colorSpace(): ImageColorSpace {
    return imageDataState(this)!.colorSpace;
  }
  get pixelFormat(): ImagePixelFormat {
    return imageDataState(this)!.pixelFormat;
  }
  constructor(
    dataOrWidth: ImageDataArray | number,
    widthOrHeight: number,
    heightOrSettings?: number | ImageDataSettings,
    settings?: ImageDataSettings,
  ) {
    if (arguments.length < 2) throw new TypeError('ImageData requires dimensions.');
    if (
      !ArrayBuffer.isView(dataOrWidth) &&
      !(dataOrWidth && typeof dataOrWidth === 'object' && 'length' in dataOrWidth)
    ) {
      const format = pixelSettings(heightOrSettings as ImageDataSettings | undefined);
      const size = checkedImageSize(
        dataOrWidth as number,
        widthOrHeight,
        format.pixelFormat,
      );
      const ArrayType =
        format.pixelFormat === 'rgba-float16' ? HalfFloats : ClampedBytes;
      if (!ArrayType) throw error('NotSupportedError', 'Float16Array is unavailable');
      imageDataStates.set(this, {
        width: size.width,
        height: size.height,
        data: new ArrayType(size.length),
        ...format,
      });
      return;
    }
    const type = apply(viewType, dataOrWidth, []);
    if (type !== 'Uint8ClampedArray' && type !== 'Float16Array')
      throw new TypeError('ImageData requires a Uint8ClampedArray or Float16Array.');
    const data = dataOrWidth as ImageDataArray;
    // The intrinsic also rejects SharedArrayBuffer, regardless of public properties.
    if (apply(bufferResizable, apply(viewBuffer, data, []), []))
      throw new TypeError('ImageData requires a fixed-length ArrayBuffer.');
    const hasHeight =
      typeof heightOrSettings !== 'object' && heightOrSettings !== undefined;
    const format = pixelSettings(
      typeof heightOrSettings === 'object' ? heightOrSettings : settings,
    );
    const expectedType =
      format.pixelFormat === 'rgba-float16' ? 'Float16Array' : 'Uint8ClampedArray';
    if (type !== expectedType)
      throw error(
        'InvalidStateError',
        'ImageData pixel format does not match its array type.',
      );
    const width = integer(widthOrHeight, 0, 0xffffffff);
    const givenHeight = hasHeight
      ? integer(heightOrSettings as number, 0, 0xffffffff)
      : undefined;
    const length = apply(viewLength, data, []);
    const rowBytes = bytesPerPixel(format.pixelFormat) * width;
    if (width === 0 || length === 0 || length % rowBytes !== 0)
      throw indexSizeError('The source data does not match the width.');
    const height = givenHeight ?? length / rowBytes;
    if (height === 0 || length !== rowBytes * height)
      throw indexSizeError('The source data does not match the dimensions.');
    imageDataStates.set(this, { width, height, data, ...format });
  }
}

export interface PixelImage {
  /** Packed RGBA bytes. RGB uses the transfer curve of the named color space. */
  data: Uint8Array;
  width: number;
  height: number;
  colorSpace?: ImageColorSpace;
  pixelFormat?: ImagePixelFormat;
  premultiplied?: boolean;
}

function halfComponents(bytes: Uint8Array) {
  if (!HalfFloats) throw error('NotSupportedError', 'Float16Array is unavailable');
  if (bytes.byteOffset % 2 !== 0) return new HalfFloats(new Bytes(bytes).buffer);
  return new HalfFloats(bytes.buffer, bytes.byteOffset, bytes.byteLength / 2);
}

function srgbToLinear(value: number): number {
  const magnitude = Math.abs(value);
  return magnitude <= 0.04045
    ? value / 12.92
    : Math.sign(value) * ((magnitude + 0.055) / 1.055) ** 2.4;
}

function linearToSrgb(value: number): number {
  const magnitude = Math.abs(value);
  return magnitude <= 0.0031308
    ? value * 12.92
    : Math.sign(value) * (1.055 * magnitude ** (1 / 2.4) - 0.055);
}

/** Convert to the straight sRGB RGBA8 used by the legacy canvas and codec bridges. */
export function toSrgbRgba8(pixels: PixelImage): Uint8Array {
  const p3 = pixels.colorSpace === 'display-p3';
  const float = pixels.pixelFormat === 'rgba-float16';
  if (!p3 && !float && !pixels.premultiplied) return pixels.data;
  const input = float ? halfComponents(pixels.data) : pixels.data;
  const output = new ClampedBytes(input.length);
  const max = float ? 1 : 255;
  for (let i = 0; i < input.length; i += 4) {
    const alpha = input[i + 3]! / max;
    output[i + 3] = alpha * 255;
    if (pixels.premultiplied && alpha === 0) continue;
    const divisor = pixels.premultiplied ? alpha * max : max;
    let r = input[i]! / divisor;
    let g = input[i + 1]! / divisor;
    let b = input[i + 2]! / divisor;
    if (p3) {
      const red = srgbToLinear(r);
      const green = srgbToLinear(g);
      const blue = srgbToLinear(b);
      r = linearToSrgb(1.22494018 * red - 0.22494018 * green);
      g = linearToSrgb(-0.04205695 * red + 1.04205695 * green);
      b = linearToSrgb(-0.01963755 * red - 0.07863605 * green + 1.0982736 * blue);
    }
    output[i] = r * 255;
    output[i + 1] = g * 255;
    output[i + 2] = b * 255;
  }
  return new Bytes(output.buffer);
}

function samplePosition(index: number, outputSize: number, inputSize: number): number {
  return Math.max(
    0,
    Math.min(inputSize - 1, ((index + 0.5) * inputSize) / outputSize - 0.5),
  );
}

function mix(first: number, second: number, weight: number): number {
  return weight === 0 || first === second
    ? first
    : first * (1 - weight) + second * weight;
}

function transformWidePixels(
  source: PixelImage,
  crop: { x: number; y: number; width: number; height: number },
  width: number,
  height: number,
  options: ImageBitmapOptions,
): PixelImage {
  const { x: sx, y: sy, width: sw, height: sh } = crop;
  const pixelFormat = source.pixelFormat ?? 'rgba-unorm8';
  checkedImageSize(width, height, pixelFormat);
  const stride = bytesPerPixel(pixelFormat);
  const data = new Bytes(width * height * stride);
  const premultiplied = options.premultiplyAlpha === 'premultiply';
  const result = {
    width,
    height,
    data,
    pixelFormat,
    colorSpace: source.colorSpace ?? 'srgb',
    premultiplied,
  };
  const flip = options.imageOrientation === 'flipY';
  const sourcePremultiplied = source.premultiplied === true;
  if (width === sw && height === sh && sourcePremultiplied === premultiplied) {
    const left = Math.max(0, sx),
      right = Math.min(source.width, sx + sw);
    const top = Math.max(0, sy),
      bottom = Math.min(source.height, sy + sh);
    for (let row = top; right > left && row < bottom; row++) {
      const start = (row * source.width + left) * stride;
      const y = flip ? height - 1 - (row - sy) : row - sy;
      data.set(
        source.data.subarray(start, start + (right - left) * stride),
        (y * width + left - sx) * stride,
      );
    }
    return result;
  }

  const float = pixelFormat === 'rgba-float16';
  const input = float ? halfComponents(source.data) : source.data;
  const output = float ? halfComponents(data) : new ClampedBytes(data.buffer);
  const max = float ? 1 : 255;
  // A virtual nearest-neighbor intermediate avoids allocating another image for pixelated resize.
  const pixelated = options.resizeQuality === 'pixelated';
  const scaleX = pixelated ? Math.max(1, Math.round(width / sw)) : 1;
  const scaleY = pixelated ? Math.max(1, Math.round(height / sh)) : 1;
  const sampleWidth = sw * scaleX,
    sampleHeight = sh * scaleY;
  const offset = (x: number, y: number) =>
    x < 0 || x >= source.width || y < 0 || y >= source.height
      ? -4
      : (y * source.width + x) * 4;
  const channel = (index: number, component: number, alpha: number) => {
    const value = input[index + component] ?? 0;
    return sourcePremultiplied ? value : alpha === 0 ? 0 : value * alpha;
  };
  for (let y = 0; y < height; y++) {
    const row = samplePosition(flip ? height - 1 - y : y, height, sampleHeight);
    const top = Math.floor(row);
    const y0 = sy + Math.floor(top / scaleY);
    const y1 = sy + Math.floor(Math.min(top + 1, sampleHeight - 1) / scaleY);
    const fy = row - top;
    for (let x = 0; x < width; x++) {
      const column = samplePosition(x, width, sampleWidth);
      const left = Math.floor(column);
      const x0 = sx + Math.floor(left / scaleX);
      const x1 = sx + Math.floor(Math.min(left + 1, sampleWidth - 1) / scaleX);
      const fx = column - left;
      const p00 = offset(x0, y0),
        p10 = offset(x1, y0);
      const p01 = offset(x0, y1),
        p11 = offset(x1, y1);
      const a00 = (input[p00 + 3] ?? 0) / max,
        a10 = (input[p10 + 3] ?? 0) / max;
      const a01 = (input[p01 + 3] ?? 0) / max,
        a11 = (input[p11 + 3] ?? 0) / max;
      const alpha = mix(mix(a00, a10, fx), mix(a01, a11, fx), fy);
      const index = (y * width + x) * 4;
      output[index + 3] = alpha * max;
      if (!premultiplied && alpha === 0) continue;
      for (let c = 0; c < 3; c++) {
        const upper = mix(channel(p00, c, a00), channel(p10, c, a10), fx);
        const lower = mix(channel(p01, c, a01), channel(p11, c, a11), fx);
        const value = mix(upper, lower, fy);
        output[index + c] = premultiplied ? value : value / alpha;
      }
    }
  }
  return result;
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
  class ElementImage {
    declare readonly [elementImageBrand]: true;
    #source: BitmapSource;
    constructor(token: object, source: BitmapSource) {
      if (token !== secret) throw new TypeError('Illegal constructor');
      this.#source = source;
      defineProperty(this, uncloneable, { value: true });
    }
    close() {
      this.#source.close();
    }
  }
  Object.defineProperty(ElementImage.prototype, Symbol.toStringTag, {
    value: 'ElementImage',
    configurable: true,
  });
  Object.defineProperty(SharedImageData, 'name', { value: 'ImageData' });
  return {
    ImageData: SharedImageData,
    data: imageDataState,
    ImageBitmap,
    ElementImage,
    make: (source: BitmapSource) => new ImageBitmap(secret, source),
    makeElement: (source: BitmapSource) => new ElementImage(secret, source),
  };
}
const canonical = constructors(globalThis);
export const ImageData: {
  new (width: number, height: number, settings?: ImageDataSettings): ImageData;
  new (
    data: ImageDataArray,
    width: number,
    height?: number,
    settings?: ImageDataSettings,
  ): ImageData;
  new (data: ImageDataArray, width: number, settings?: ImageDataSettings): ImageData;
  readonly prototype: ImageData;
} = canonical.ImageData;
export const ImageBitmap: { new (): ImageBitmap; readonly prototype: ImageBitmap } =
  canonical.ImageBitmap;

type Call = (operation: string, ...args: unknown[]) => unknown;
type BitmapCrop = [number, number, number, number];
type Options = [ImageBitmapOptions?] | [...BitmapCrop, ImageBitmapOptions?];
const bitmapOptions = [
  ['colorSpaceConversion', ['default', 'none']],
  ['imageOrientation', ['from-image', 'flipY']],
  ['premultiplyAlpha', ['default', 'premultiply', 'none']],
  ['resizeHeight', null],
  ['resizeQuality', ['pixelated', 'low', 'medium', 'high']],
  ['resizeWidth', null],
] as const;
export interface ImageHost {
  isSource(source: unknown): boolean;
  bitmap(source: BitmapSource): ImageBitmap;
  transfer(bitmap: ImageBitmap): ImageBitmap;
  prepareTransfers(list: unknown[]): CanvasTransfers;
  deserialize(record: any[]): ImageData | ImageBitmap | ElementImage;
  elementImage(pixels: PixelImage): ElementImage;
  readElementImage(value: unknown): PixelImage | undefined;
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
    kind: 'ImageBitmap' | 'ElementImage';
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
  const records: { ref: WeakRef<ImageBitmap | ElementImage>; state: BitmapState }[] =
    [];
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
      throw new Exception(state.kind + ' is closed', 'DataCloneError');
    if (!state.pixels) {
      const pixels = copyPixels(state.backing!.pixels(), state.width, state.height);
      if (!alive(state)) throw new Exception('ImageBitmap is closed', 'DataCloneError');
      state.pixels = pixels;
      state.buffer = pixels.data.buffer as ArrayBuffer;
    }
    return state.pixels;
  }
  function copyPixels(
    source: PixelImage,
    width = source.width,
    height = source.height,
  ): PixelImage {
    const colorSpace = source.colorSpace ?? 'srgb';
    const pixelFormat = source.pixelFormat ?? 'rgba-unorm8';
    const premultiplied = source.premultiplied === true;
    const bytes = bytesOf(source.data);
    if (
      !isColorSpace(colorSpace) ||
      !isPixelFormat(pixelFormat) ||
      !hasPixelLength(width, height, pixelFormat, bytes.byteLength)
    )
      throw new Exception('Invalid bitmap pixels', 'DataCloneError');
    return {
      width,
      height,
      data: new Bytes(bytes),
      colorSpace,
      pixelFormat,
      premultiplied,
    };
  }
  function makeImage(
    kind: 'ImageBitmap',
    backing: BitmapSource,
    pixels?: PixelImage,
  ): ImageBitmap;
  function makeImage(
    kind: 'ElementImage',
    backing: undefined,
    pixels: PixelImage,
  ): ElementImage;
  function makeImage(
    kind: BitmapState['kind'],
    backing?: BitmapSource,
    pixels?: PixelImage,
  ): ImageBitmap | ElementImage {
    check();
    host.sweep();
    const size = backing ?? pixels!;
    const state: BitmapState = {
      kind,
      width: size.width,
      height: size.height,
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
          throw new Exception(kind + ' is closed', 'InvalidStateError');
        const pixels = capture(state);
        // Renderer consumers receive snapshots, never the transferable private buffer.
        return { ...pixels, data: new Bytes(pixels.data) };
      },
    };
    if (backing?.native)
      source.native = () => {
        if (!alive(state))
          throw new Exception('ImageBitmap is closed', 'InvalidStateError');
        return state.backing!.native!();
      };
    state.source = source;
    const image =
      kind === 'ImageBitmap' ? classes.make(source) : classes.makeElement(source);
    owned.set(image, state);
    records[records.length] = { ref: new WeakRef(image), state };
    activity(true);
    return image;
  }
  function fromOwnedPixels(pixels: PixelImage): ImageBitmap {
    let id: number | undefined;
    return makeImage(
      'ImageBitmap',
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
            toSrgbRgba8(pixels),
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
  async function decodeBlob(source: Blob, options?: ImageBitmapOptions) {
    const value = await rpc(
      'decode',
      await source.arrayBuffer(),
      options?.colorSpaceConversion !== 'none',
      options?.imageOrientation !== 'flipY',
    );
    return nativeBitmap(value);
  }
  function settings(input?: ImageBitmapOptions): ImageBitmapOptions {
    const output: Record<string, string | number> = Object.create(null);
    if (input == null) return output;
    if (typeof input !== 'object' && typeof input !== 'function')
      throw new TypeError('Expected ImageBitmap options.');
    for (const [key, allowed] of bitmapOptions) {
      const value = input[key];
      if (value === undefined) continue;
      if (allowed) {
        const choice = String(value);
        if (!(allowed as readonly string[]).includes(choice))
          throw new TypeError('Invalid bitmap ' + key);
        output[key] = choice;
        continue;
      }
      const size = integer(value as number, 0, 0xffffffff);
      if (size === 0)
        throw new Exception(
          'Bitmap resize dimensions must be positive',
          'InvalidStateError',
        );
      output[key] = size;
    }
    return output;
  }
  function transformed(
    source: PixelImage,
    crop: BitmapCrop | undefined,
    options: ImageBitmapOptions,
  ) {
    let [sx, sy, sw, sh] = crop ?? [0, 0, source.width, source.height];
    if (sw < 0) {
      sx += sw;
      sw = -sw;
    }
    if (sh < 0) {
      sy += sh;
      sh = -sh;
    }
    const width =
      options.resizeWidth ??
      (options.resizeHeight
        ? Math.max(1, Math.ceil((sw * options.resizeHeight) / sh))
        : sw);
    const height =
      options.resizeHeight ??
      (options.resizeWidth
        ? Math.max(1, Math.ceil((sh * options.resizeWidth) / sw))
        : sh);
    if (source.colorSpace === 'display-p3' || source.pixelFormat === 'rgba-float16')
      return fromOwnedPixels(
        transformWidePixels(
          source,
          { x: sx, y: sy, width: sw, height: sh },
          width,
          height,
          options,
        ),
      );
    return rpc('transform', source.data, [
      source.width,
      source.height,
      sx,
      sy,
      sw,
      sh,
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
          ownedState(source)?.kind === 'ImageBitmap' ||
          elementSources.has(source) ||
          canvases?.isCanvas(source) === true)
      );
    },
    bitmap(source) {
      return makeImage('ImageBitmap', source);
    },
    transfer(bitmap) {
      // Same-realm bitmaprenderer ownership only; structured transfers use native detach.
      host.source(bitmap);
      const state = ownedState(bitmap)!;
      const receiver = makeImage('ImageBitmap', state.backing!, state.pixels);
      state.backing = undefined;
      release(state);
      return receiver;
    },
    prepareTransfers(list) {
      const buffers: unknown[] = [];
      const validated: BitmapState[] = [];
      let elementTransfers: WeakSet<BitmapState> | undefined;
      for (let i = 0; i < list.length; i++) {
        const value = list[i];
        const state =
          value && typeof value === 'object' ? ownedState(value) : undefined;
        if (!state) {
          buffers[i] = value;
          continue;
        }
        capture(state);
        if (state.kind === 'ElementImage')
          apply(weakSetAdd, (elementTransfers ??= new WeakSet()), [state]);
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
            return [
              'ImageData',
              data.width,
              data.height,
              data.data,
              data.colorSpace,
              data.pixelFormat,
            ];
          }
          const state = ownedState(value);
          if (!state) return undefined;
          if (
            state.kind === 'ElementImage' &&
            (!elementTransfers || !apply(weakSetHas, elementTransfers, [state]))
          )
            throw new Exception('ElementImage must be transferred', 'DataCloneError');
          const pixels = capture(state);
          validated[validated.length] = state;
          return [
            state.kind,
            state.width,
            state.height,
            state.buffer,
            pixels.colorSpace ?? 'srgb',
            pixels.premultiplied === true,
            pixels.pixelFormat ?? 'rgba-unorm8',
          ];
        },
        validate() {
          // No application getters, provider callbacks or replaceable collection methods.
          for (let i = 0; i < validated.length; i++) {
            const state = validated[i]!;
            if (!open || !alive(state))
              throw new Exception(state.kind + ' ownership changed', 'DataCloneError');
          }
        },
      };
    },
    deserialize(record) {
      if (record[0] === 'ImageData')
        return new classes.ImageData(record[3], record[1], record[2], {
          colorSpace: record[4],
          pixelFormat: record[5],
        });
      const kind = record[0],
        width = record[1],
        height = record[2],
        buffer = record[3],
        colorSpace = record[4],
        premultiplied = record[5],
        pixelFormat = record[6] === undefined ? 'rgba-unorm8' : record[6];
      if (
        (kind !== 'ImageBitmap' && kind !== 'ElementImage') ||
        !isColorSpace(colorSpace) ||
        !isPixelFormat(pixelFormat) ||
        typeof premultiplied !== 'boolean' ||
        !hasPixelLength(width, height, pixelFormat, byteLength(buffer))
      )
        throw new Exception('Invalid image snapshot record', 'DataCloneError');
      // Deserialized bytes belong exclusively to this realm; never adopt sender IDs or GPU objects.
      const pixels = {
        width,
        height,
        data: new Bytes(buffer),
        colorSpace,
        pixelFormat,
        premultiplied,
      };
      return kind === 'ImageBitmap'
        ? fromOwnedPixels(pixels)
        : makeImage('ElementImage', undefined, pixels);
    },
    elementImage(pixels) {
      return makeImage('ElementImage', undefined, copyPixels(pixels));
    },
    readElementImage(value) {
      const state =
        value !== null && typeof value === 'object' ? ownedState(value) : undefined;
      return state?.kind === 'ElementImage' ? state.source.pixels() : undefined;
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
      if (state?.kind !== 'ImageBitmap')
        throw new TypeError('Expected ImageBitmap from this session');
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
          colorSpace: data.colorSpace,
          pixelFormat: data.pixelFormat,
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
      if (
        source &&
        typeof source === 'object' &&
        ownedState(source)?.kind === 'ElementImage'
      )
        throw new TypeError('Unsupported ImageBitmap source');
      const cropped = args.length > 1;
      if (cropped && args.length < 4) throw new TypeError('Incomplete bitmap crop');
      // Conversions can call application code that detaches or closes the source.
      const crop: BitmapCrop | undefined = cropped
        ? [
            integer(args[0] as number),
            integer(args[1]!),
            integer(args[2]!),
            integer(args[3]!),
          ]
        : undefined;
      const supplied = (cropped ? args[4] : args[0]) as ImageBitmapOptions | undefined;
      const options = settings(supplied);
      if (crop && (crop[2] === 0 || crop[3] === 0))
        throw new RangeError('Bitmap crop must not be empty');
      if (
        factory &&
        !(typeof source === 'object' && source !== null && elementSources.has(source))
      ) {
        const providerArgs: Options = crop ? [...crop] : [];
        if (supplied != null) providerArgs.push(options);
        const result = factory(source, ...providerArgs);
        if (result) return result;
      }
      if (
        source &&
        typeof source === 'object' &&
        'arrayBuffer' in source &&
        typeof (source as any).arrayBuffer === 'function'
      ) {
        const bitmap = await decodeBlob(source as Blob, options);
        if (
          crop ||
          options.resizeWidth ||
          options.resizeHeight ||
          options.imageOrientation === 'flipY'
        ) {
          try {
            return await transformed(host.read(bitmap), crop, options);
          } finally {
            bitmap.close();
          }
        }
        return bitmap;
      }
      return transformed(host.read(source), crop, options);
    },
    fromPixels(source) {
      return fromOwnedPixels(copyPixels(source));
    },
    async encode(source, type = 'image/png', quality = 0.92) {
      check();
      const supported = ['image/png', 'image/jpeg', 'image/webp'];
      if (!supported.includes(type)) type = 'image/png';
      const bytes = await rpc(
        'encode',
        toSrgbRgba8(source),
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
          toSrgbRgba8(source),
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
    ElementImage: classes.ElementImage,
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
        // Keep straight pixels so each renderer can choose how to handle alpha.
        const bitmap = await decodeBlob(blob);
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
      if (ownedState(bitmap)?.kind !== 'ImageBitmap')
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
