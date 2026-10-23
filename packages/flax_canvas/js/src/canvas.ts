import { CommandBuffer, OP, type PathCommand } from './commands.js';
import { parseColor, serializeColor, type Rgba } from './color.js';
import {
  Path2D,
  arcToGeometry,
  indexSizeError,
  canvasException,
  matrix2D,
  finite,
} from './path.js';
import { parseFilter, type FilterStep } from './filter.js';
import { canvasFont, cssLength, type FontDefaults } from './font.js';
import type {
  CanvasMatrix2DInit,
  CanvasRadius,
  ImageBitmapOptions,
  ImageDataSettings,
} from './types.js';

export type Call = (operation: string, ...args: unknown[]) => unknown;
const surfaceKey = Symbol.for('flaxCanvasSurface');
export const imageIdKey = Symbol.for('flaxCanvasImageId');
const internalKey = Symbol('flaxCanvasInternal');

export type CanvasSurface = {
  width: number;
  height: number;
};

export function surfaceOf(canvas: object): CanvasSurface {
  return (canvas as { [surfaceKey]: CanvasSurface })[surfaceKey];
}

const viewCanvases = new WeakMap<object, object>();

export function holdCanvas(host: object, canvas: object): void {
  viewCanvases.set(host, canvas);
}

export function heldCanvas(host: object): object | undefined {
  return viewCanvases.get(host);
}

type Style = string | CanvasGradient | CanvasPattern;
type Composite =
  | 'source-over'
  | 'source-in'
  | 'source-out'
  | 'source-atop'
  | 'destination-over'
  | 'destination-in'
  | 'destination-out'
  | 'destination-atop'
  | 'xor'
  | 'copy'
  | 'lighter'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';

const composites = new Set<string>([
  'source-over',
  'clear',
  'source-in',
  'source-out',
  'source-atop',
  'destination-over',
  'destination-in',
  'destination-out',
  'destination-atop',
  'xor',
  'copy',
  'lighter',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
]);

class Affine {
  constructor(
    public a = 1,
    public b = 0,
    public c = 0,
    public d = 1,
    public e = 0,
    public f = 0,
  ) {}
  clone(): Affine {
    return new Affine(this.a, this.b, this.c, this.d, this.e, this.f);
  }
  get is2D(): boolean {
    return true;
  }
  get m11(): number {
    return this.a;
  }
  set m11(value: number) {
    this.a = +value;
  }
  get m12(): number {
    return this.b;
  }
  set m12(value: number) {
    this.b = +value;
  }
  get m21(): number {
    return this.c;
  }
  set m21(value: number) {
    this.c = +value;
  }
  get m22(): number {
    return this.d;
  }
  set m22(value: number) {
    this.d = +value;
  }
  get m41(): number {
    return this.e;
  }
  set m41(value: number) {
    this.e = +value;
  }
  get m42(): number {
    return this.f;
  }
  set m42(value: number) {
    this.f = +value;
  }
  inverse(): Affine {
    return this.isInvertible ? this.invert() : new Affine(NaN, NaN, NaN, NaN, NaN, NaN);
  }
  transformPoint(point: { x?: number; y?: number; z?: number; w?: number } = {}): {
    x: number;
    y: number;
    z: number;
    w: number;
  } {
    const x = +(point.x ?? 0),
      y = +(point.y ?? 0),
      z = +(point.z ?? 0),
      w = +(point.w ?? 1);
    return {
      x: this.a * x + this.c * y + this.e * w,
      y: this.b * x + this.d * y + this.f * w,
      z,
      w,
    };
  }
  translate(x = 0, y = 0): Affine {
    return this.multiply(new Affine(1, 0, 0, 1, +x, +y));
  }
  scale(x = 1, y = x): Affine {
    return this.multiply(new Affine(+x, 0, 0, +y, 0, 0));
  }
  rotate(angle = 0): Affine {
    const radians = (+angle * Math.PI) / 180,
      c = Math.cos(radians),
      s = Math.sin(radians);
    return this.multiply(new Affine(c, s, -s, c, 0, 0));
  }
  toFloat32Array(): Float32Array {
    return new Float32Array(this.toFloat64Array());
  }
  toFloat64Array(): Float64Array {
    return new Float64Array([
      this.a,
      this.b,
      0,
      0,
      this.c,
      this.d,
      0,
      0,
      0,
      0,
      1,
      0,
      this.e,
      this.f,
      0,
      1,
    ]);
  }
  toJSON(): {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    is2D: boolean;
    isIdentity: boolean;
  } {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f,
      is2D: this.is2D,
      isIdentity: this.isIdentity,
    };
  }

  get isIdentity(): boolean {
    return (
      this.a === 1 &&
      this.b === 0 &&
      this.c === 0 &&
      this.d === 1 &&
      this.e === 0 &&
      this.f === 0
    );
  }
  get det(): number {
    return this.a * this.d - this.b * this.c;
  }
  get isInvertible(): boolean {
    return Number.isFinite(this.det) && this.det !== 0;
  }
  multiply(other: CanvasMatrix2DInit = {}): Affine {
    const o = other instanceof Affine ? other : matrix2D(other);
    return new Affine(
      this.a * o.a + this.c * o.b,
      this.b * o.a + this.d * o.b,
      this.a * o.c + this.c * o.d,
      this.b * o.c + this.d * o.d,
      this.a * o.e + this.c * o.f + this.e,
      this.b * o.e + this.d * o.f + this.f,
    );
  }
  invert(): Affine {
    const det = this.det;
    if (!Number.isFinite(det) || det === 0) return new Affine();
    return new Affine(
      this.d / det,
      -this.b / det,
      -this.c / det,
      this.a / det,
      (this.c * this.f - this.d * this.e) / det,
      (this.b * this.e - this.a * this.f) / det,
    );
  }
  map(x: number, y: number): [number, number] {
    return [this.a * x + this.c * y + this.e, this.b * x + this.d * y + this.f];
  }
}

function illegalConstructor(): never {
  throw new TypeError('Illegal constructor');
}

function invalidState(message: string): Error {
  return canvasException('InvalidStateError', message);
}

function integer(value: number, min = -0x80000000, max = 0x7fffffff): number {
  const n = Math.trunc(+value);
  if (!Number.isFinite(n) || n < min || n > max)
    throw new TypeError('Canvas integer is outside its supported range.');
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

function validImageData(image: ImageData): void {
  if (!(image instanceof ImageData)) throw new TypeError('Expected ImageData.');
  if (image.data.byteLength === 0)
    throw invalidState('The ImageData buffer is detached.');
}

export class CanvasGradient {
  stops: { offset: number; color: Rgba }[] = [];
  version = 0;
  constructor(
    readonly kind: 'linear' | 'radial' | 'conic',
    readonly values: number[],
    token?: symbol,
  ) {
    if (token !== internalKey) illegalConstructor();
  }
  addColorStop(offset: number, color: string): void {
    offset = +offset;
    if (!Number.isFinite(offset))
      throw new TypeError('Color stop offset must be finite.');
    if (offset < 0 || offset > 1)
      throw indexSizeError('Color stop offset is outside [0, 1].');
    const parsed = parseColor(String(color));
    if (!parsed) throw canvasException('SyntaxError', 'Invalid color stop.');
    this.stops.push({ offset, color: parsed });
    this.version++;
  }
}

export class CanvasPattern {
  transform = new Affine();
  version = 0;
  constructor(
    readonly image: number,
    readonly repeat: string,
    token?: symbol,
  ) {
    if (token !== internalKey) illegalConstructor();
  }
  setTransform(
    a?: number | CanvasMatrix2DInit,
    b = 0,
    c = 0,
    d = 1,
    e = 0,
    f = 0,
  ): void {
    const next =
      typeof a === 'object'
        ? matrix2D(a)
        : { a: a === undefined ? 1 : +a, b: +b, c: +c, d: +d, e: +e, f: +f };
    if (!finite(...Object.values(next))) return;
    this.transform = new Affine(next.a, next.b, next.c, next.d, next.e, next.f);
    this.version++;
  }
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

export class ImageData {
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
    pixelSettings(settings);
    const width = integer(widthOrHeight, 0, 0xffffffff);
    if (
      width === 0 ||
      dataOrWidth.length === 0 ||
      dataOrWidth.length % (4 * width) !== 0
    )
      throw imageDataIndexError('The source data does not match the width.');
    const height =
      heightOrSettings === undefined
        ? dataOrWidth.length / (4 * width)
        : integer(heightOrSettings as number, 0, 0xffffffff);
    if (height === 0 || dataOrWidth.length !== 4 * width * height)
      throw imageDataIndexError('The source data does not match the dimensions.');
    this.imageWidth = width;
    this.imageHeight = height;
    this.pixels = dataOrWidth;
  }
}

type DrawState = {
  transform: Affine;
  fill: Style;
  stroke: Style;
  fillColor: Rgba;
  strokeColor: Rgba;
  alpha: number;
  composite: string;
  lineWidth: number;
  lineCap: string;
  lineJoin: string;
  miterLimit: number;
  lineDash: number[];
  lineDashOffset: number;
  shadowColor: string;
  shadowRgba: Rgba;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  smoothing: boolean;
  smoothingQuality: string;
  filter: string;
  filterSteps: FilterStep[];
  font: string;
  textAlign: string;
  textBaseline: string;
  direction: string;
  letterSpacing: string;
  wordSpacing: string;
  lang: string;
  fontKerning: string;
  fontStretch: string;
  fontVariantCaps: string;
  textRendering: string;
};

function defaults(): DrawState {
  return {
    transform: new Affine(),
    fill: '#000000',
    stroke: '#000000',
    fillColor: [0, 0, 0, 1],
    strokeColor: [0, 0, 0, 1],
    alpha: 1,
    composite: 'source-over',
    lineWidth: 1,
    lineCap: 'butt',
    lineJoin: 'miter',
    miterLimit: 10,
    lineDash: [],
    lineDashOffset: 0,
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowRgba: [0, 0, 0, 0],
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    smoothing: true,
    smoothingQuality: 'low',
    filter: 'none',
    filterSteps: [],
    font: '10px sans-serif',
    textAlign: 'start',
    textBaseline: 'alphabetic',
    direction: 'inherit',
    letterSpacing: '0px',
    wordSpacing: '0px',
    lang: 'inherit',
    fontKerning: 'auto',
    fontStretch: 'normal',
    fontVariantCaps: 'normal',
    textRendering: 'auto',
  };
}

export class OffscreenCanvasRenderingContext2D {
  private readonly targetCanvas: OffscreenCanvas;
  private readonly call: Call;
  private readonly buffer: CommandBuffer;
  private readonly dirty: () => void;
  private state = defaults();
  private stack: DrawState[] = [];
  private path = new Path2D();
  private fillVersion = -1;
  private strokeVersion = -1;
  constructor(
    canvas?: OffscreenCanvas,
    call?: Call,
    buffer?: CommandBuffer,
    dirty?: () => void,
    token?: symbol,
  ) {
    if (
      token !== internalKey ||
      canvas == null ||
      call == null ||
      buffer == null ||
      dirty == null
    ) {
      illegalConstructor();
    }
    this.targetCanvas = canvas;
    this.call = call;
    this.buffer = buffer;
    this.dirty = dirty;
  }
  get canvas(): OffscreenCanvas {
    return this.targetCanvas;
  }
  get fillStyle(): Style {
    return this.state.fill;
  }
  set fillStyle(value: Style) {
    if (!(value instanceof CanvasGradient) && !(value instanceof CanvasPattern)) {
      value = String(value);
      const color = parseColor(value);
      if (!color) return;
      this.state.fill = serializeColor(color);
      this.state.fillColor = color;
      this.record(OP.setFillColor, () => color.forEach((n) => this.buffer.f64(n)));
      return;
    }
    this.state.fill = value;
    this.writeStyle(true, value);
    this.fillVersion = value.version;
  }
  get strokeStyle(): Style {
    return this.state.stroke;
  }
  set strokeStyle(value: Style) {
    if (!(value instanceof CanvasGradient) && !(value instanceof CanvasPattern)) {
      value = String(value);
      const color = parseColor(value);
      if (!color) return;
      this.state.stroke = serializeColor(color);
      this.state.strokeColor = color;
      this.record(OP.setStrokeColor, () => color.forEach((n) => this.buffer.f64(n)));
      return;
    }
    this.state.stroke = value;
    this.writeStyle(false, value);
    this.strokeVersion = value.version;
  }
  get globalAlpha(): number {
    return this.state.alpha;
  }
  set globalAlpha(value: number) {
    value = +value;
    if (!finite(value) || value < 0 || value > 1) return;
    this.state.alpha = value;
    this.record(OP.setGlobalAlpha, () => this.buffer.f64(value));
  }
  get globalCompositeOperation(): string {
    return this.state.composite;
  }
  set globalCompositeOperation(value: string) {
    if (!composites.has(value)) return;
    this.state.composite = value;
    this.record(OP.setComposite, () => this.buffer.text(value));
  }
  get lineWidth(): number {
    return this.state.lineWidth;
  }
  set lineWidth(value: number) {
    value = +value;
    if (!finite(value) || value <= 0) return;
    this.state.lineWidth = value;
    this.record(OP.setLineWidth, () => this.buffer.f64(value));
  }
  get lineCap(): string {
    return this.state.lineCap;
  }
  set lineCap(value: string) {
    if (!['butt', 'round', 'square'].includes(value)) return;
    this.state.lineCap = value;
    this.record(OP.setLineCap, () => this.buffer.text(value));
  }
  get lineJoin(): string {
    return this.state.lineJoin;
  }
  set lineJoin(value: string) {
    if (!['miter', 'round', 'bevel'].includes(value)) return;
    this.state.lineJoin = value;
    this.record(OP.setLineJoin, () => this.buffer.text(value));
  }
  get miterLimit(): number {
    return this.state.miterLimit;
  }
  set miterLimit(value: number) {
    value = +value;
    if (!finite(value) || value <= 0) return;
    this.state.miterLimit = value;
    this.record(OP.setMiterLimit, () => this.buffer.f64(value));
  }
  get lineDashOffset(): number {
    return this.state.lineDashOffset;
  }
  set lineDashOffset(value: number) {
    value = +value;
    if (!finite(value)) return;
    this.state.lineDashOffset = value;
    this.record(OP.setLineDashOffset, () => this.buffer.f64(value));
  }
  get shadowColor(): string {
    return this.state.shadowColor;
  }
  set shadowColor(value: string) {
    const color = parseColor(value);
    if (!color) return;
    this.state.shadowColor = serializeColor(color);
    this.state.shadowRgba = color;
    this.writeShadow();
  }
  get shadowBlur(): number {
    return this.state.shadowBlur;
  }
  set shadowBlur(value: number) {
    value = +value;
    if (!finite(value) || value < 0) return;
    this.state.shadowBlur = value;
    this.writeShadow();
  }
  get shadowOffsetX(): number {
    return this.state.shadowOffsetX;
  }
  set shadowOffsetX(value: number) {
    value = +value;
    if (!finite(value)) return;
    this.state.shadowOffsetX = value;
    this.writeShadow();
  }
  get shadowOffsetY(): number {
    return this.state.shadowOffsetY;
  }
  set shadowOffsetY(value: number) {
    value = +value;
    if (!finite(value)) return;
    this.state.shadowOffsetY = value;
    this.writeShadow();
  }
  get imageSmoothingEnabled(): boolean {
    return this.state.smoothing;
  }
  set imageSmoothingEnabled(value: boolean) {
    this.state.smoothing = Boolean(value);
    this.writeSmoothing();
  }
  get imageSmoothingQuality(): string {
    return this.state.smoothingQuality;
  }
  set imageSmoothingQuality(value: string) {
    if (!['low', 'medium', 'high'].includes(value)) return;
    this.state.smoothingQuality = value;
    this.writeSmoothing();
  }
  get filter(): string {
    return this.state.filter;
  }
  set filter(value: string) {
    if (typeof value !== 'string') return;
    const steps = parseFilter(value);
    if (steps === null) return;
    this.state.filter = value.trim();
    this.state.filterSteps = steps;
    this.writeFilter(steps);
  }
  get font(): string {
    return this.state.font;
  }
  set font(value: string) {
    if (typeof value !== 'string') return;
    const font = canvasFont(value, () => this.call('fontDefaults') as FontDefaults);
    if (font === null) return;
    this.state.font = font;
    this.state.fontVariantCaps = 'normal';
    this.state.fontStretch = 'normal';
    this.record(OP.setFont, () => this.buffer.text(font));
  }
  get textAlign(): string {
    return this.state.textAlign;
  }
  set textAlign(value: string) {
    if (!['start', 'end', 'left', 'right', 'center'].includes(value)) return;
    this.state.textAlign = value;
    this.record(OP.setTextAlign, () => this.buffer.text(value));
  }
  get textBaseline(): string {
    return this.state.textBaseline;
  }
  set textBaseline(value: string) {
    if (
      !['alphabetic', 'top', 'hanging', 'middle', 'ideographic', 'bottom'].includes(
        value,
      )
    )
      return;
    this.state.textBaseline = value;
    this.record(OP.setTextBaseline, () => this.buffer.text(value));
  }
  get direction(): string {
    return this.state.direction;
  }
  set direction(value: string) {
    if (!['ltr', 'rtl', 'inherit'].includes(value)) return;
    this.state.direction = value;
    this.record(OP.setDirection, () => this.buffer.text(value));
  }
  get letterSpacing(): string {
    return this.state.letterSpacing;
  }
  set letterSpacing(value: string) {
    const amount = cssLength(String(value));
    if (amount == null) return;
    this.state.letterSpacing = amount.css;
    this.record(OP.setLetterSpacing, () => {
      this.buffer.f64(amount.px);
      this.buffer.text(amount.css);
    });
  }
  get wordSpacing(): string {
    return this.state.wordSpacing;
  }
  set wordSpacing(value: string) {
    const amount = cssLength(String(value));
    if (amount == null) return;
    this.state.wordSpacing = amount.css;
    this.record(OP.setWordSpacing, () => {
      this.buffer.f64(amount.px);
      this.buffer.text(amount.css);
    });
  }
  get lang(): string {
    return this.state.lang;
  }
  set lang(value: string) {
    this.state.lang = String(value);
    this.writeTextOptions();
  }
  get fontKerning(): string {
    return this.state.fontKerning;
  }
  set fontKerning(value: string) {
    if (!['auto', 'normal', 'none'].includes(value)) return;
    this.state.fontKerning = value;
    this.writeTextOptions();
  }
  get fontStretch(): string {
    return this.state.fontStretch;
  }
  set fontStretch(value: string) {
    if (
      ![
        'ultra-condensed',
        'extra-condensed',
        'condensed',
        'semi-condensed',
        'normal',
        'semi-expanded',
        'expanded',
        'extra-expanded',
        'ultra-expanded',
      ].includes(value)
    )
      return;
    this.state.fontStretch = value;
    this.writeTextOptions();
  }
  get fontVariantCaps(): string {
    return this.state.fontVariantCaps;
  }
  set fontVariantCaps(value: string) {
    if (
      ![
        'normal',
        'small-caps',
        'all-small-caps',
        'petite-caps',
        'all-petite-caps',
        'unicase',
        'titling-caps',
      ].includes(value)
    )
      return;
    this.state.fontVariantCaps = value;
    this.writeTextOptions();
  }
  get textRendering(): string {
    return this.state.textRendering;
  }
  set textRendering(value: string) {
    if (
      !['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision'].includes(
        value,
      )
    )
      return;
    this.state.textRendering = value;
    this.writeTextOptions();
  }
  isContextLost(): boolean {
    return Boolean(this.call('isContextLost', surfaceOf(this.canvas)));
  }
  private writeTextOptions(): void {
    this.record(OP.setTextOptions, () => {
      for (const value of [
        this.state.lang,
        this.state.fontKerning,
        this.state.fontStretch,
        this.state.fontVariantCaps,
        this.state.textRendering,
      ])
        this.buffer.text(value);
    });
  }
  save(): void {
    this.stack.push({
      ...this.state,
      transform: this.state.transform.clone(),
      lineDash: this.state.lineDash.slice(),
    });
    this.record(OP.save, () => {});
  }
  restore(): void {
    const next = this.stack.pop();
    if (!next) return;
    this.state = next;
    this.fillVersion = -1;
    this.strokeVersion = -1;
    this.record(OP.restore, () => {});
  }
  reset(): void {
    this.state = defaults();
    this.stack = [];
    this.path = new Path2D();
    this.fillVersion = -1;
    this.strokeVersion = -1;
    this.record(OP.reset, () => {});
  }
  getContextAttributes(): {
    alpha: boolean;
    desynchronized: boolean;
    willReadFrequently: boolean;
    colorSpace: string;
    colorType: string;
  } {
    return { ...this.canvas.attributes };
  }
  beginPath(): void {
    this.path = new Path2D();
  }
  closePath(): void {
    this.path.closePath();
  }
  moveTo(x: number, y: number): void {
    if (arguments.length < 2) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    this.path.moveTo(...this.mapPoint(x, y));
  }
  lineTo(x: number, y: number): void {
    if (arguments.length < 2) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    this.path.lineTo(...this.mapPoint(x, y));
  }
  rect(x: number, y: number, w: number, h: number): void {
    if (arguments.length < 4) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    w = +w;
    h = +h;
    if (!finite(x, y, w, h)) return;
    if (this.state.transform.isIdentity) {
      this.path.rect(x, y, w, h);
      return;
    }
    const p0 = this.mapPoint(x, y);
    const p1 = this.mapPoint(x + w, y);
    const p2 = this.mapPoint(x + w, y + h);
    const p3 = this.mapPoint(x, y + h);
    this.path.moveTo(p0[0], p0[1]);
    this.path.lineTo(p1[0], p1[1]);
    this.path.lineTo(p2[0], p2[1]);
    this.path.lineTo(p3[0], p3[1]);
    this.path.closePath();
  }
  roundRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radii?: CanvasRadius | Iterable<CanvasRadius>,
  ): void {
    if (this.state.transform.isIdentity) {
      this.path.roundRect(x, y, w, h, radii);
      return;
    }
    const other = new Path2D();
    other.roundRect(x, y, w, h, radii);
    this.path.addPath(other, this.state.transform);
  }
  arc(x: number, y: number, r: number, start: number, end: number, ccw = false): void {
    if (arguments.length < 5) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    r = +r;
    start = +start;
    end = +end;
    if (!finite(x, y, r, start, end)) return;
    if (r < 0) throw indexSizeError('The radius provided is negative.');
    if (this.state.transform.isIdentity) {
      this.path.arc(x, y, r, start, end, ccw);
      return;
    }
    this.extendCurrent((path) => path.arc(x, y, r, start, end, ccw));
  }
  arcTo(x1: number, y1: number, x2: number, y2: number, r: number): void {
    if (arguments.length < 5) throw new TypeError('Not enough Canvas arguments.');
    x1 = +x1;
    y1 = +y1;
    x2 = +x2;
    y2 = +y2;
    r = +r;
    if (!finite(x1, y1, x2, y2, r)) return;
    if (r < 0) throw indexSizeError('The radius provided is negative.');
    if (this.state.transform.isIdentity) {
      this.path.arcTo(x1, y1, x2, y2, r);
      return;
    }
    const transform = this.state.transform;
    const currentUser =
      this.path.current == null || !transform.isInvertible
        ? null
        : transform.invert().map(this.path.current[0], this.path.current[1]);
    this.extendCurrent((path) => {
      if (currentUser) path.moveTo(currentUser[0], currentUser[1]);
      path.arcTo(x1, y1, x2, y2, r);
    });
  }
  ellipse(
    x: number,
    y: number,
    rx: number,
    ry: number,
    rotation: number,
    start: number,
    end: number,
    ccw = false,
  ): void {
    if (arguments.length < 7) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    rx = +rx;
    ry = +ry;
    rotation = +rotation;
    start = +start;
    end = +end;
    if (!finite(x, y, rx, ry, rotation, start, end)) return;
    if (rx < 0 || ry < 0) throw indexSizeError('The radius provided is negative.');
    if (this.state.transform.isIdentity) {
      this.path.ellipse(x, y, rx, ry, rotation, start, end, ccw);
      return;
    }
    this.extendCurrent((path) => path.ellipse(x, y, rx, ry, rotation, start, end, ccw));
  }
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
    if (arguments.length < 4) throw new TypeError('Not enough Canvas arguments.');
    cpx = +cpx;
    cpy = +cpy;
    x = +x;
    y = +y;
    const c = this.mapPoint(cpx, cpy);
    const p = this.mapPoint(x, y);
    this.path.quadraticCurveTo(c[0], c[1], p[0], p[1]);
  }
  bezierCurveTo(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
  ): void {
    if (arguments.length < 6) throw new TypeError('Not enough Canvas arguments.');
    a = +a;
    b = +b;
    c = +c;
    d = +d;
    e = +e;
    f = +f;
    const c1 = this.mapPoint(a, b);
    const c2 = this.mapPoint(c, d);
    const p = this.mapPoint(e, f);
    this.path.bezierCurveTo(c1[0], c1[1], c2[0], c2[1], p[0], p[1]);
  }
  fill(path?: Path2D | string, rule?: string): void {
    const explicit = path instanceof Path2D;
    const [commands, fillRule] = pathAndRule(this.path, path, rule);
    this.aroundCurrentPath(explicit, () => {
      this.record(OP.fillPath, () => {
        this.buffer.path(commands);
        this.buffer.u32(fillRule === 'evenodd' ? 1 : 0);
      });
    });
  }
  stroke(path?: Path2D): void {
    if (!this.state.transform.isInvertible) return;
    this.syncLiveStyles();
    let commands = path instanceof Path2D ? path.commands : this.path.commands;
    if (!(path instanceof Path2D) && !this.state.transform.isIdentity) {
      const local = new Path2D();
      local.addPath(this.path, this.state.transform.invert());
      commands = local.commands;
    }
    this.record(OP.strokePath, () => this.buffer.path(commands));
  }
  clip(path?: Path2D | string, rule?: string): void {
    const explicit = path instanceof Path2D;
    const [commands, fillRule] = pathAndRule(this.path, path, rule);
    this.aroundCurrentPath(explicit, () => {
      this.record(OP.clipPath, () => {
        this.buffer.path(commands);
        this.buffer.u32(fillRule === 'evenodd' ? 1 : 0);
      });
    });
  }
  fillRect(x: number, y: number, w: number, h: number): void {
    if (arguments.length < 4) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    w = +w;
    h = +h;
    if (!finite(x, y, w, h) || w === 0 || h === 0) return;
    this.syncLiveStyles();
    this.record(OP.fillRect, () => [x, y, w, h].forEach((n) => this.buffer.f64(n)));
  }
  strokeRect(x: number, y: number, w: number, h: number): void {
    if (arguments.length < 4) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    w = +w;
    h = +h;
    if (!finite(x, y, w, h)) return;
    this.syncLiveStyles();
    this.record(OP.strokeRect, () => [x, y, w, h].forEach((n) => this.buffer.f64(n)));
  }
  clearRect(x: number, y: number, w: number, h: number): void {
    if (arguments.length < 4) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    w = +w;
    h = +h;
    if (!finite(x, y, w, h)) return;
    this.record(OP.clearRect, () => [x, y, w, h].forEach((n) => this.buffer.f64(n)));
  }
  translate(x: number, y: number): void {
    if (arguments.length < 2) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    if (!finite(x, y)) return;
    const next = this.state.transform.multiply(new Affine(1, 0, 0, 1, x, y));
    if (!finite(next.a, next.b, next.c, next.d, next.e, next.f)) return;
    this.state.transform = next;
    this.record(OP.translate, () => {
      this.buffer.f64(x);
      this.buffer.f64(y);
    });
  }
  rotate(angle: number): void {
    if (arguments.length < 1) throw new TypeError('Not enough Canvas arguments.');
    angle = +angle;
    if (!finite(angle)) return;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const next = this.state.transform.multiply(new Affine(cos, sin, -sin, cos, 0, 0));
    if (!finite(next.a, next.b, next.c, next.d, next.e, next.f)) return;
    this.state.transform = next;
    this.record(OP.rotate, () => this.buffer.f64(angle));
  }
  scale(x: number, y: number): void {
    if (arguments.length < 2) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    if (!finite(x, y)) return;
    const next = this.state.transform.multiply(new Affine(x, 0, 0, y, 0, 0));
    if (!finite(next.a, next.b, next.c, next.d, next.e, next.f)) return;
    this.state.transform = next;
    this.record(OP.scale, () => {
      this.buffer.f64(x);
      this.buffer.f64(y);
    });
  }
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void {
    if (arguments.length < 6) throw new TypeError('Not enough Canvas arguments.');
    a = +a;
    b = +b;
    c = +c;
    d = +d;
    e = +e;
    f = +f;
    if (!finite(a, b, c, d, e, f)) return;
    const next = this.state.transform.multiply(new Affine(a, b, c, d, e, f));
    if (!finite(next.a, next.b, next.c, next.d, next.e, next.f)) return;
    this.state.transform = next;
    this.record(OP.transform, () =>
      [a, b, c, d, e, f].forEach((n) => this.buffer.f64(n)),
    );
  }
  setTransform(
    a?: number | CanvasMatrix2DInit,
    b = 0,
    c = 0,
    d = 1,
    e = 0,
    f = 0,
  ): void {
    const values =
      typeof a === 'object'
        ? matrix2D(a)
        : { a: a === undefined ? 1 : +a, b: +b, c: +c, d: +d, e: +e, f: +f };
    if (!finite(...Object.values(values))) return;
    const next = new Affine(values.a, values.b, values.c, values.d, values.e, values.f);
    this.state.transform = next;
    this.writeTransform(next);
  }
  resetTransform(): void {
    this.state.transform = new Affine();
    this.record(OP.resetTransform, () => {});
  }
  getTransform(): Affine {
    return this.state.transform.clone();
  }
  setLineDash(segments: number[]): void {
    const values = [...segments].map((value) => +value);
    if (values.some((n) => !finite(n) || n < 0)) return;
    if (values.length % 2 === 1) values.push(...values);
    this.state.lineDash = values;
    this.record(OP.setLineDash, () => {
      this.buffer.u32(values.length);
      values.forEach((n) => this.buffer.f64(n));
    });
  }
  getLineDash(): number[] {
    return this.state.lineDash.slice();
  }
  fillText(text: string, x: number, y: number, maxWidth?: number): void {
    this.writeText(OP.fillText, text, x, y, maxWidth);
  }
  strokeText(text: string, x: number, y: number, maxWidth?: number): void {
    this.writeText(OP.strokeText, text, x, y, maxWidth);
  }
  private writeText(
    opcode: number,
    text: string,
    x: number,
    y: number,
    maxWidth?: number,
  ): void {
    x = +x;
    y = +y;
    if (maxWidth !== undefined) maxWidth = +maxWidth;
    if (
      !finite(x, y) ||
      (maxWidth !== undefined && (!finite(maxWidth) || maxWidth <= 0))
    )
      return;
    this.syncLiveStyles();
    this.record(opcode, () => {
      this.buffer.text(String(text));
      this.buffer.f64(x);
      this.buffer.f64(y);
      if (maxWidth !== undefined) this.buffer.f64(maxWidth);
    });
  }
  measureText(text: string): Record<string, number> {
    this.canvas.flush();
    return this.call('measureText', surfaceOf(this.canvas), String(text)) as Record<
      string,
      number
    >;
  }
  drawImage(
    image:
      { width: number; height: number } | OffscreenCanvas | ImageData | ImageBitmap,
    dx: number,
    dy: number,
    dw?: number,
    dh?: number,
    ...rest: number[]
  ): void {
    if (
      image == null ||
      typeof image !== 'object' ||
      (!(image instanceof OffscreenCanvas) &&
        !(image instanceof ImageData) &&
        readImageId(image) == null)
    )
      throw new TypeError('Unsupported drawImage source');
    if (image instanceof ImageBitmap && closedId(image[imageIdKey]))
      throw invalidState('The ImageBitmap is closed.');
    if (image instanceof OffscreenCanvas && (image.width === 0 || image.height === 0))
      throw invalidState('The source canvas is empty.');
    if (image instanceof ImageData) validImageData(image);
    if (![3, 5, 9].includes(arguments.length))
      throw new TypeError('drawImage requires 3, 5 or 9 arguments.');
    dx = +dx;
    dy = +dy;
    if (dw !== undefined) dw = +dw;
    if (dh !== undefined) dh = +dh;
    rest = rest.map((n) => +n);

    let sx = 0,
      sy = 0,
      sw = image.width,
      sh = image.height,
      x = dx,
      y = dy,
      w = dw ?? image.width,
      h = dh ?? image.height;
    if (rest.length >= 2) {
      sx = dx;
      sy = dy;
      sw = dw ?? sw;
      sh = dh ?? sh;
      x = rest[0] ?? x;
      y = rest[1] ?? y;
      w = rest[2] ?? sw;
      h = rest[3] ?? sh;
    }
    if (
      !finite(sx, sy, sw, sh, x, y, w, h) ||
      sw === 0 ||
      sh === 0 ||
      w === 0 ||
      h === 0
    )
      return;
    if (image instanceof ImageData) {
      this.record(OP.drawImagePixels, () => {
        this.buffer.u32(image.width);
        this.buffer.u32(image.height);
        [sx, sy, sw, sh, x, y, w, h].forEach((n) => this.buffer.f64(n));
        this.buffer.bytes(
          new Uint8Array(
            image.data.buffer,
            image.data.byteOffset,
            image.data.byteLength,
          ),
        );
      });
      return;
    }
    const id = imageId(image, this.call, this.canvas);
    if (id == null) return;
    this.record(OP.drawImage, () => {
      this.buffer.u32(id);
      [sx, sy, sw, sh, x, y, w, h].forEach((n) => this.buffer.f64(n));
    });
  }
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient {
    if (arguments.length < 4) throw new TypeError('Not enough Canvas arguments.');
    x0 = +x0;
    y0 = +y0;
    x1 = +x1;
    y1 = +y1;
    if (!finite(x0, y0, x1, y1))
      throw new TypeError('Gradient coordinates must be finite.');
    return new CanvasGradient('linear', [x0, y0, x1, y1], internalKey);
  }
  createRadialGradient(
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number,
  ): CanvasGradient {
    if (arguments.length < 6) throw new TypeError('Not enough Canvas arguments.');
    x0 = +x0;
    y0 = +y0;
    r0 = +r0;
    x1 = +x1;
    y1 = +y1;
    r1 = +r1;
    if (!finite(x0, y0, r0, x1, y1, r1))
      throw new TypeError('Gradient coordinates must be finite.');
    if (r0 < 0 || r1 < 0) throw indexSizeError('The radius provided is negative.');
    return new CanvasGradient('radial', [x0, y0, r0, x1, y1, r1], internalKey);
  }
  createConicGradient(angle: number, x: number, y: number): CanvasGradient {
    if (arguments.length < 3) throw new TypeError('Not enough Canvas arguments.');
    angle = +angle;
    x = +x;
    y = +y;
    if (!finite(angle, x, y))
      throw new TypeError('Gradient coordinates must be finite.');
    return new CanvasGradient('conic', [x, y, angle], internalKey);
  }
  createPattern(
    image: OffscreenCanvas | ImageBitmap | object,
    repeat?: string | null,
  ): CanvasPattern | null {
    const value = repeat == null || repeat === '' ? 'repeat' : String(repeat);
    if (
      value !== 'repeat' &&
      value !== 'repeat-x' &&
      value !== 'repeat-y' &&
      value !== 'no-repeat'
    ) {
      throw canvasException('SyntaxError', 'Invalid pattern repetition.');
    }
    const id = patternImageId(image, this.call);
    if (id == null) {
      if (image instanceof OffscreenCanvas) return null;
      throw new TypeError('Unsupported pattern source.');
    }
    const pattern = new CanvasPattern(id, value, internalKey);
    registerPattern(pattern, id, this.call);
    return pattern;
  }
  createImageData(
    sw: number | ImageData,
    sh?: number,
    settings?: ImageDataSettings,
  ): ImageData {
    if (arguments.length === 1) {
      if (!(sw instanceof ImageData)) throw new TypeError('Expected ImageData.');
      return new ImageData(sw.width, sw.height);
    }
    return new ImageData(
      Math.abs(integer(sw as number)),
      Math.abs(integer(sh!)),
      settings,
    );
  }
  putImageData(
    image: ImageData,
    dx: number,
    dy: number,
    dirtyX = 0,
    dirtyY = 0,
    dirtyWidth = image?.width,
    dirtyHeight = image?.height,
  ): void {
    if (arguments.length !== 3 && arguments.length < 7)
      throw new TypeError('putImageData requires 3 or 7 arguments.');
    validImageData(image);
    dx = integer(dx);
    dy = integer(dy);
    dirtyX = integer(dirtyX);
    dirtyY = integer(dirtyY);
    dirtyWidth = integer(dirtyWidth);
    dirtyHeight = integer(dirtyHeight);
    if (dirtyWidth < 0) {
      dirtyX += dirtyWidth;
      dirtyWidth = -dirtyWidth;
    }
    if (dirtyHeight < 0) {
      dirtyY += dirtyHeight;
      dirtyHeight = -dirtyHeight;
    }
    const left = Math.max(0, dirtyX),
      top = Math.max(0, dirtyY);
    const right = Math.min(image.width, dirtyX + dirtyWidth);
    const bottom = Math.min(image.height, dirtyY + dirtyHeight);
    if (right <= left || bottom <= top) return;
    this.record(OP.putImageData, () => {
      this.buffer.u32(right - left);
      this.buffer.u32(bottom - top);
      this.buffer.f64(dx + left);
      this.buffer.f64(dy + top);
      const bytes = new Uint8Array(
        image.data.buffer,
        image.data.byteOffset,
        image.data.byteLength,
      );
      for (let y = top; y < bottom; y++)
        this.buffer.bytes(
          bytes.subarray((y * image.width + left) * 4, (y * image.width + right) * 4),
        );
    });
  }
  getImageData(
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    settings?: ImageDataSettings,
  ): ImageData {
    pixelSettings(settings);
    const rect = pixelRect(sx, sy, sw, sh);
    this.canvas.flush();
    const bytes = this.call('getImageDataSync', surfaceOf(this.canvas), ...rect);
    return new ImageData(new Uint8ClampedArray(bytes as ArrayBuffer), rect[2], rect[3]);
  }
  getImageDataAsync(
    sx: number,
    sy: number,
    sw: number,
    sh: number,
  ): Promise<ImageData> {
    return this.canvas.readPixels(sx, sy, sw, sh);
  }
  isPointInPath(
    pathOrX: Path2D | number,
    xOrY: number,
    yOrRule?: number | string,
    rule = 'nonzero',
  ): boolean {
    let commands = this.path.commands;
    let x: number;
    let y: number;
    let selectedRule = rule;
    let explicit = false;
    if (typeof pathOrX === 'object') {
      commands = pathOrX.commands;
      x = xOrY;
      y = Number(yOrRule);
      selectedRule = fillRule(rule);
      explicit = true;
    } else {
      x = pathOrX;
      y = xOrY;
      selectedRule = fillRule(yOrRule);
    }
    x = +x;
    y = +y;
    if (!finite(x, y)) return false;
    if (explicit) {
      if (!this.state.transform.isInvertible) return false;
      const inverted = this.state.transform.invert().map(x, y);
      x = inverted[0];
      y = inverted[1];
    }
    const encoded = new CommandBuffer();
    encoded.used = 0;
    encoded.path(commands);
    return Boolean(this.call('isPointInPath', encoded.usedBytes(), x, y, selectedRule));
  }
  isPointInStroke(pathOrX: Path2D | number, xOrY: number, y?: number): boolean {
    const explicit = pathOrX instanceof Path2D;
    const x = +(explicit ? xOrY : (pathOrX as number));
    const py = +(explicit ? y! : xOrY);
    if (!finite(x, py)) return false;
    this.canvas.flush();
    const encoded = new CommandBuffer();
    encoded.used = 0;
    encoded.path(explicit ? pathOrX.commands : this.path.commands);
    return Boolean(
      this.call(
        'isPointInStroke',
        surfaceOf(this.canvas),
        encoded.usedBytes(),
        x,
        py,
        explicit,
      ),
    );
  }
  resyncState(): void {
    const transform = this.state.transform;
    this.writeTransform(transform);
    this.writePaint(true);
    this.writePaint(false);
    this.record(OP.setGlobalAlpha, () => this.buffer.f64(this.state.alpha));
    this.record(OP.setComposite, () => this.buffer.text(this.state.composite));
    this.record(OP.setLineWidth, () => this.buffer.f64(this.state.lineWidth));
    this.record(OP.setLineCap, () => this.buffer.text(this.state.lineCap));
    this.record(OP.setLineJoin, () => this.buffer.text(this.state.lineJoin));
    this.record(OP.setMiterLimit, () => this.buffer.f64(this.state.miterLimit));
    this.record(OP.setLineDash, () => {
      this.buffer.u32(this.state.lineDash.length);
      this.state.lineDash.forEach((n) => this.buffer.f64(n));
    });
    this.record(OP.setLineDashOffset, () => this.buffer.f64(this.state.lineDashOffset));
    this.writeShadow();
    this.writeSmoothing();
    this.writeFilter(this.state.filterSteps);
    this.record(OP.setFont, () => this.buffer.text(this.state.font));
    this.record(OP.setTextAlign, () => this.buffer.text(this.state.textAlign));
    this.record(OP.setTextBaseline, () => this.buffer.text(this.state.textBaseline));
    this.record(OP.setDirection, () => this.buffer.text(this.state.direction));
    this.writeTextOptions();
    this.record(OP.setLetterSpacing, () => {
      this.buffer.f64(cssLength(this.state.letterSpacing)?.px ?? 0);
      this.buffer.text(this.state.letterSpacing);
    });
    this.record(OP.setWordSpacing, () => {
      this.buffer.f64(cssLength(this.state.wordSpacing)?.px ?? 0);
      this.buffer.text(this.state.wordSpacing);
    });
  }
  private writeFilter(steps: FilterStep[]): void {
    this.record(OP.setFilter, () => {
      this.buffer.text(this.state.filter);
      this.buffer.u32(steps.length);
      for (const step of steps) {
        this.buffer.u32(step.kind);
        for (const value of step.values) this.buffer.f64(value);
      }
    });
  }
  private mapPoint(x: number, y: number): [number, number] {
    return this.state.transform.map(x, y);
  }
  private extendCurrent(build: (path: Path2D) => void): void {
    const child = new Path2D();
    build(child);
    this.path.extendPath(child, this.state.transform);
  }
  private aroundCurrentPath(explicit: boolean, write: () => void): void {
    this.syncLiveStyles();
    if (explicit || this.state.transform.isIdentity) {
      write();
      return;
    }
    const current = this.state.transform;
    this.writeTransform(new Affine());
    // Geometry is baked into canvas coordinates; paint still uses the draw-time CTM.
    if (typeof this.state.fill !== 'string')
      this.writeStyle(true, this.state.fill, current);
    if (typeof this.state.stroke !== 'string')
      this.writeStyle(false, this.state.stroke, current);
    write();
    this.writeTransform(current);
    if (typeof this.state.fill !== 'string') this.writeStyle(true, this.state.fill);
    if (typeof this.state.stroke !== 'string')
      this.writeStyle(false, this.state.stroke);
  }
  private writeTransform(transform: Affine): void {
    this.record(OP.setTransform, () =>
      [
        transform.a,
        transform.b,
        transform.c,
        transform.d,
        transform.e,
        transform.f,
      ].forEach((n) => this.buffer.f64(n)),
    );
  }
  private syncLiveStyles(): void {
    this.syncStyle(true);
    this.syncStyle(false);
  }
  private syncStyle(fill: boolean): void {
    const value = fill ? this.state.fill : this.state.stroke;
    if (typeof value === 'string') return;
    const last = fill ? this.fillVersion : this.strokeVersion;
    if (value.version === last) return;
    this.writeStyle(fill, value);
    if (fill) this.fillVersion = value.version;
    else this.strokeVersion = value.version;
  }
  private writeShadow(): void {
    const color = this.state.shadowRgba;
    this.record(OP.setShadow, () => {
      color.forEach((n) => this.buffer.f64(n));
      this.buffer.f64(this.state.shadowBlur);
      this.buffer.f64(this.state.shadowOffsetX);
      this.buffer.f64(this.state.shadowOffsetY);
    });
  }
  private writeStyle(
    fill: boolean,
    value: CanvasGradient | CanvasPattern,
    transform = new Affine(),
  ): void {
    if (value instanceof CanvasGradient) {
      const opcode =
        value.kind === 'linear'
          ? fill
            ? OP.setFillLinear
            : OP.setStrokeLinear
          : value.kind === 'radial'
            ? fill
              ? OP.setFillRadial
              : OP.setStrokeRadial
            : fill
              ? OP.setFillConic
              : OP.setStrokeConic;
      this.record(opcode, () => {
        value.values.forEach((n) => this.buffer.f64(n));
        this.buffer.u32(value.stops.length);
        for (const stop of value.stops) {
          this.buffer.f64(stop.offset);
          stop.color.forEach((n) => this.buffer.f64(n));
        }
        if (!transform.isIdentity)
          [
            transform.a,
            transform.b,
            transform.c,
            transform.d,
            transform.e,
            transform.f,
          ].forEach((n) => this.buffer.f64(n));
      });
      return;
    }
    this.record(fill ? OP.setFillPattern : OP.setStrokePattern, () => {
      this.buffer.u32(value.image);
      this.buffer.text(value.repeat);
      const t = transform.multiply(value.transform);
      [t.a, t.b, t.c, t.d, t.e, t.f].forEach((n) => this.buffer.f64(n));
    });
  }
  private writePaint(fill: boolean): void {
    const value = fill ? this.state.fill : this.state.stroke;
    if (typeof value === 'string') {
      const color = fill ? this.state.fillColor : this.state.strokeColor;
      this.record(fill ? OP.setFillColor : OP.setStrokeColor, () =>
        color.forEach((n) => this.buffer.f64(n)),
      );
      return;
    }
    this.writeStyle(fill, value);
    if (fill) this.fillVersion = value.version;
    else this.strokeVersion = value.version;
  }
  private writeSmoothing(): void {
    const quality =
      this.state.smoothingQuality === 'high'
        ? 2
        : this.state.smoothingQuality === 'medium'
          ? 1
          : 0;
    this.record(OP.setSmoothing, () => {
      this.buffer.u32(this.state.smoothing ? 1 : 0);
      this.buffer.u32(quality);
    });
  }
  private record(opcode: number, write: () => void): void {
    this.buffer.record(opcode, write);
    this.dirty();
  }
}

export class OffscreenCanvas {
  readonly [surfaceKey]: CanvasSurface;
  private readonly call: Call;
  private readonly buffer = new CommandBuffer();
  private recovering = false;
  private context: OffscreenCanvasRenderingContext2D | null = null;
  private queued = false;
  private borrowed: number[] = [];
  private generation = 0;
  private sequence = 0;
  attributes = {
    alpha: true,
    desynchronized: false,
    willReadFrequently: false,
    colorSpace: 'srgb',
    colorType: 'unorm8',
  };
  constructor(width: number, height: number, call: Call) {
    this.call = call;
    this[surfaceKey] = call(
      'create',
      integer(width, 0, Number.MAX_SAFE_INTEGER),
      integer(height, 0, Number.MAX_SAFE_INTEGER),
    ) as CanvasSurface;
    trackSurface(call, this, this[surfaceKey]);
  }
  get width(): number {
    return this[surfaceKey].width;
  }
  set width(value: number) {
    this.resize(integer(value, 0, Number.MAX_SAFE_INTEGER), this.height);
  }
  get height(): number {
    return this[surfaceKey].height;
  }
  set height(value: number) {
    this.resize(this.width, integer(value, 0, Number.MAX_SAFE_INTEGER));
  }
  getContext(
    type: string,
    options?: {
      alpha?: boolean;
      desynchronized?: boolean;
      willReadFrequently?: boolean;
      colorSpace?: string;
      colorType?: 'unorm8' | 'float16';
    },
  ): OffscreenCanvasRenderingContext2D | null {
    if (String(type) !== '2d') return null;
    if (this.context) return this.context;
    if (
      options?.colorSpace !== undefined &&
      !['srgb', 'display-p3'].includes(options.colorSpace)
    )
      throw new TypeError('Invalid Canvas color space.');
    if (
      options?.colorType !== undefined &&
      !['unorm8', 'float16'].includes(options.colorType)
    )
      throw new TypeError('Invalid Canvas color type.');
    if (options?.colorSpace === 'display-p3' || options?.colorType === 'float16')
      return null;
    this.attributes = {
      alpha: options?.alpha === undefined ? true : Boolean(options.alpha),
      desynchronized: false,
      willReadFrequently: Boolean(options?.willReadFrequently),
      colorSpace: 'srgb',
      colorType: 'unorm8',
    };
    if (!this.attributes.alpha) this.call('setAlpha', this[surfaceKey], 0);
    this.context = new OffscreenCanvasRenderingContext2D(
      this,
      this.call,
      this.buffer,
      () => this.mark(),
      internalKey,
    );
    return this.context;
  }
  borrowImage(id: number): void {
    if (id > 0) this.borrowed.push(id);
  }
  flush(): void {
    this.queued = false;
    sweepHidden(this.call);
    try {
      if (this.buffer.used <= 24) return;
      const bytes = this.buffer.header(this.generation, this.sequence++);
      try {
        this.call('commit', this[surfaceKey], bytes);
        this.buffer.reset();
      } catch (error) {
        this.buffer.reset();
        this.recovering = true;
        try {
          this.context?.resyncState();
        } finally {
          this.recovering = false;
        }
        throw error;
      }
    } finally {
      this.releaseBorrowed();
    }
  }
  private releaseBorrowed(): void {
    for (const id of this.borrowed) this.call('closeImage', id);
    this.borrowed.length = 0;
  }
  mark(): void {
    if (this.recovering || this.queued) return;
    this.queued = true;
    const enqueue = (globalThis as { queueMicrotask?: (callback: () => void) => void })
      .queueMicrotask;
    const flush = () => {
      if (this.queued) this.flush();
    };
    if (enqueue) enqueue(flush);
    else void Promise.resolve().then(flush);
  }
  resize(width: number, height: number): void {
    this.flush();
    this.call('resize', this[surfaceKey], width, height);
    this.generation++;
    this.sequence = 0;
    this.context?.reset();
    this.buffer.reset();
  }
  async convertToBlob(options?: {
    type?: string;
    quality?: number;
  }): Promise<{ arrayBuffer(): Promise<ArrayBuffer>; type: string }> {
    if (this.width === 0 || this.height === 0)
      throw indexSizeError('Cannot serialize an empty canvas');
    this.flush();
    const requested = String(options?.type ?? 'image/png').toLowerCase();
    const type = ['image/png', 'image/jpeg', 'image/webp'].includes(requested)
      ? requested
      : 'image/png';
    const supplied = Number(options?.quality);
    const quality =
      Number.isFinite(supplied) && supplied >= 0 && supplied <= 1
        ? supplied
        : type === 'image/webp'
          ? 0.8
          : 0.92;
    const BlobCtor = (
      globalThis as {
        Blob?: new (
          parts: unknown[],
          opts?: { type?: string },
        ) => { arrayBuffer(): Promise<ArrayBuffer>; type: string };
      }
    ).Blob;
    if (BlobCtor == null) throw new TypeError('Blob is required');
    const bytes = await rpc(
      this.call,
      'convertToBlob',
      this[surfaceKey],
      type,
      quality,
    );
    return new BlobCtor([bytes], { type });
  }
  transferToImageBitmap(): ImageBitmap {
    if (!this.context) throw invalidState('The canvas needs a context.');
    this.flush();
    const id = this.call('transferToImageBitmap', this[surfaceKey]) as number;
    const width = this.width;
    const height = this.height;
    return new ImageBitmap(id, width, height, this.call, internalKey);
  }
  readPixels(sx: number, sy: number, sw: number, sh: number): Promise<ImageData> {
    this.flush();
    const rect = pixelRect(sx, sy, sw, sh);
    return rpc(this.call, 'getImageData', this[surfaceKey], ...rect).then(
      (bytes) =>
        new ImageData(new Uint8ClampedArray(bytes as ArrayBuffer), rect[2], rect[3]),
    );
  }
}

function pixelRect(
  sx: number,
  sy: number,
  sw: number,
  sh: number,
): [number, number, number, number] {
  sx = integer(sx);
  sy = integer(sy);
  sw = integer(sw);
  sh = integer(sh);
  if (sw < 0) {
    sx += sw;
    sw = -sw;
  }
  if (sh < 0) {
    sy += sh;
    sh = -sh;
  }
  checkedImageSize(sw, sh);
  return [sx, sy, sw, sh];
}

let rpcId = 1;
const rpcs = new Map<
  number,
  { resolve(value: unknown): void; reject(error: unknown): void }
>();
function rpc(call: Call, operation: string, ...args: unknown[]): Promise<unknown> {
  const id = rpcId++;
  return new Promise((resolve, reject) => {
    rpcs.set(id, { resolve, reject });
    try {
      call(operation, id, ...args);
    } catch (error) {
      rpcs.delete(id);
      reject(error);
    }
  });
}

export function settle(id: number, ok: boolean, value: unknown): void {
  const pending = rpcs.get(id);
  if (!pending) return;
  rpcs.delete(id);
  if (ok) pending.resolve(value);
  else pending.reject(new Error(String(value)));
}

export function closePending(): void {
  for (const pending of rpcs.values()) pending.reject(new Error('FlaxSessionClosed'));
  rpcs.clear();
}

function fillRule(value: unknown = 'nonzero'): string {
  const rule = String(value);
  if (rule !== 'nonzero' && rule !== 'evenodd')
    throw new TypeError('Invalid fill rule.');
  return rule;
}

function pathAndRule(
  current: Path2D,
  path?: Path2D | string,
  rule?: string,
): [PathCommand[], string] {
  if (path instanceof Path2D) return [path.commands, fillRule(rule)];
  return [current.commands, fillRule(path === undefined ? rule : path)];
}

type ImageRelease = { id: number; released: boolean; call: Call };

export class ImageBitmap {
  [imageIdKey]: number;
  private readonly bitmapWidth: number;
  private readonly bitmapHeight: number;
  get width(): number {
    return this[imageIdKey] < 0 ? 0 : this.bitmapWidth;
  }
  get height(): number {
    return this[imageIdKey] < 0 ? 0 : this.bitmapHeight;
  }
  private readonly call: Call;
  private readonly release: ImageRelease;
  constructor(
    id?: number,
    width?: number,
    height?: number,
    call?: Call,
    token?: symbol,
  ) {
    if (
      token !== internalKey ||
      id == null ||
      width == null ||
      height == null ||
      call == null
    ) {
      illegalConstructor();
    }
    this[imageIdKey] = id;
    this.bitmapWidth = width;
    this.bitmapHeight = height;
    this.call = call;
    this.release = trackImageRelease(call, this, id);
  }
  close(): void {
    if (this[imageIdKey] < 0) return;
    this[imageIdKey] = -1;
    releaseImage(this.release);
  }
}

function closedId(id: number): boolean {
  return id < 0;
}

function readImageId(image: object): number | null {
  if (image instanceof ImageBitmap) return image[imageIdKey];
  if (image == null || typeof image !== 'object') return null;
  const id = (image as { [imageIdKey]?: unknown })[imageIdKey];
  return typeof id === 'number' ? id : null;
}

function imageId(image: object, call: Call, borrow?: OffscreenCanvas): number | null {
  if (image instanceof OffscreenCanvas) {
    if (image.width === 0 || image.height === 0)
      throw invalidState('The source canvas is empty.');
    image.flush();
    const id = call('snapshotImageSync', surfaceOf(image)) as number;
    borrow?.borrowImage(id);
    return id;
  }
  const id = readImageId(image);
  if (id == null) return null;
  if (closedId(id)) throw invalidState('The ImageBitmap is closed.');
  call('retainImage', id);
  borrow?.borrowImage(id);
  return id;
}

function patternImageId(image: object, call: Call): number | null {
  if (image instanceof OffscreenCanvas) {
    if (image.width === 0 || image.height === 0) return null;
    image.flush();
    return call('snapshotImageSync', surfaceOf(image)) as number;
  }
  const id = readImageId(image);
  if (id == null) return null;
  if (closedId(id)) throw invalidState('The ImageBitmap is closed.');
  call('retainImage', id);
  return id;
}

type HiddenResource =
  | { kind: 'surface'; ref: WeakRef<object>; surface: CanvasSurface }
  | { kind: 'image'; ref: WeakRef<object>; token: ImageRelease };

const hiddenResources = new WeakMap<Call, HiddenResource[]>();

function hiddenFor(call: Call): HiddenResource[] {
  let hidden = hiddenResources.get(call);
  if (!hidden) {
    hidden = [];
    hiddenResources.set(call, hidden);
  }
  return hidden;
}

function weakRef(target: object): WeakRef<object> | null {
  const Ctor = (
    globalThis as typeof globalThis & {
      WeakRef?: new (value: object) => WeakRef<object>;
    }
  ).WeakRef;
  if (typeof Ctor !== 'function') return null;
  return new Ctor(target);
}

function sweepHidden(call: Call): void {
  const hidden = hiddenResources.get(call);
  if (!hidden) return;
  const dead: HiddenResource[] = [];
  for (let i = hidden.length - 1; i >= 0; i--) {
    const item = hidden[i];
    if (item == null || item.ref.deref() != null) continue;
    hidden.splice(i, 1);
    dead.push(item);
  }
  for (const item of dead) {
    try {
      if (item.kind === 'surface') call('disposeSurface', item.surface);
      else releaseImage(item.token);
    } catch {
      /* session may already be closed */
    }
  }
}

function trackCalls(call: Call): Call {
  const wrapped: Call = (operation, ...args) => {
    sweepHidden(wrapped);
    return call(operation, ...args);
  };
  hiddenResources.set(wrapped, []);
  return wrapped;
}

function trackSurface(call: Call, canvas: object, surface: CanvasSurface): void {
  const ref = weakRef(canvas);
  if (ref == null) return;
  hiddenFor(call).push({ kind: 'surface', ref, surface });
}

function trackImageRelease(call: Call, owner: object, id: number): ImageRelease {
  const token: ImageRelease = { id, released: false, call };
  const ref = weakRef(owner);
  if (ref != null) hiddenFor(call).push({ kind: 'image', ref, token });
  return token;
}

function releaseImage(token: ImageRelease): void {
  if (token.released) return;
  token.released = true;
  try {
    token.call('closeImage', token.id);
  } catch {
    /* session may already be closed */
  }
}

function registerPattern(pattern: CanvasPattern, id: number, call: Call): void {
  trackImageRelease(call, pattern, id);
}

function sourceBitmap(
  call: Call,
  source: unknown,
  options?: ImageBitmapOptions,
  transformed = false,
): Promise<ImageBitmap> {
  if (source instanceof ImageData) {
    validImageData(source);
    return rpc(
      call,
      'createImageBitmapPixels',
      source.width,
      source.height,
      source.data,
      transformed || options?.premultiplyAlpha === 'none',
    ).then(
      (id) =>
        new ImageBitmap(id as number, source.width, source.height, call, internalKey),
    );
  }
  if (source instanceof OffscreenCanvas) {
    if (source.width === 0 || source.height === 0)
      return Promise.reject(invalidState('The canvas is empty.'));
    source.flush();
    const width = source.width;
    const height = source.height;
    return rpc(call, 'snapshotImage', surfaceOf(source)).then(
      (id) => new ImageBitmap(id as number, width, height, call, internalKey),
    );
  }
  if (source instanceof ImageBitmap) {
    if (source[imageIdKey] < 0)
      return Promise.reject(invalidState('The ImageBitmap is closed.'));
    const width = source.width,
      height = source.height;
    return rpc(call, 'cloneImage', source[imageIdKey]).then(
      (id) => new ImageBitmap(id as number, width, height, call, internalKey),
    );
  }
  if (source && typeof source === 'object' && 'arrayBuffer' in source) {
    return (source as { arrayBuffer(): Promise<ArrayBuffer> })
      .arrayBuffer()
      .then((bytes) =>
        rpc(
          call,
          'createImageBitmap',
          bytes,
          options?.colorSpaceConversion !== 'none',
          options?.premultiplyAlpha === 'none',
          options?.imageOrientation !== 'flipY',
        ).then(
          (value) => {
            const [id, width, height] = value as [number, number, number];
            return new ImageBitmap(id, width, height, call, internalKey);
          },
          (cause) => {
            const error = invalidState('The source image could not be decoded.');
            error.cause = cause;
            throw error;
          },
        ),
      );
  }
  return Promise.reject(new TypeError('Unsupported createImageBitmap source'));
}

export async function createImageBitmap(
  call: Call,
  source: unknown,
  ...args: [ImageBitmapOptions?] | [number, number, number, number, ImageBitmapOptions?]
): Promise<ImageBitmap> {
  if (args.length > 1 && args.length < 4)
    throw new TypeError('Incomplete bitmap crop.');
  const cropped = args.length >= 4;
  const supplied = (cropped ? args[4] : args[0]) as ImageBitmapOptions | undefined;
  if (
    supplied != null &&
    typeof supplied !== 'object' &&
    typeof supplied !== 'function'
  )
    throw new TypeError('Expected ImageBitmap options.');
  const options: ImageBitmapOptions | undefined = supplied == null ? undefined : {};
  if (supplied && options) {
    for (const name of [
      'colorSpaceConversion',
      'imageOrientation',
      'premultiplyAlpha',
      'resizeHeight',
      'resizeQuality',
      'resizeWidth',
    ] as const) {
      const value = supplied[name];
      if (value !== undefined) Object.assign(options, { [name]: value });
    }
  }
  const crop = cropped ? args.slice(0, 4).map((n) => integer(n as number)) : null;
  if (crop && (crop[2] === 0 || crop[3] === 0))
    throw new RangeError('Bitmap crop must not be empty.');
  if (options) {
    for (const [value, choices] of [
      [options.imageOrientation, ['from-image', 'flipY']],
      [options.resizeQuality, ['pixelated', 'low', 'medium', 'high']],
      [options.premultiplyAlpha, ['default', 'premultiply', 'none']],
      [options.colorSpaceConversion, ['default', 'none']],
    ] as const)
      if (value !== undefined && !(choices as readonly string[]).includes(value))
        throw new TypeError('Invalid ImageBitmap option.');
  }
  for (const name of ['resizeWidth', 'resizeHeight'] as const) {
    if (options?.[name] !== undefined) {
      options[name] = integer(options[name]!, 0, 0xffffffff);
      if (options[name] === 0)
        throw invalidState('Bitmap resize dimensions must be positive.');
    }
  }
  const bitmap = await sourceBitmap(
    call,
    source,
    options,
    cropped || options !== undefined,
  );
  if (!cropped && !options) return bitmap;
  try {
    let sx = crop?.[0] ?? 0,
      sy = crop?.[1] ?? 0;
    let sw = crop?.[2] ?? bitmap.width,
      sh = crop?.[3] ?? bitmap.height;
    if (sw < 0) {
      sx += sw;
      sw = -sw;
    }
    if (sh < 0) {
      sy += sh;
      sh = -sh;
    }
    const width =
      options?.resizeWidth === undefined
        ? options?.resizeHeight === undefined
          ? sw
          : Math.ceil((sw * options.resizeHeight) / sh)
        : options.resizeWidth;
    const height =
      options?.resizeHeight === undefined
        ? options?.resizeWidth === undefined
          ? sh
          : Math.ceil((sh * width) / sw)
        : options.resizeHeight;
    checkedImageSize(sw, sh);
    checkedImageSize(width, height);
    const id = await rpc(
      call,
      'transformImageBitmap',
      bitmap[imageIdKey],
      sx,
      sy,
      sw,
      sh,
      width,
      height,
      options?.imageOrientation === 'flipY',
      options?.resizeQuality ?? 'low',
      options?.premultiplyAlpha === 'none',
    );
    return new ImageBitmap(id as number, width, height, call, internalKey);
  } finally {
    bitmap.close();
  }
}

export function installCanvas(
  global: typeof globalThis,
  call: Call,
): { settle(id: number, ok: boolean, value: unknown): void; close(): void } {
  const hostCall = trackCalls(call);
  const HostOffscreenCanvas = class extends OffscreenCanvas {
    constructor(width: number, height: number) {
      super(width, height, hostCall);
    }
  };
  const globals: Record<string, unknown> = {
    OffscreenCanvas: HostOffscreenCanvas,
    OffscreenCanvasRenderingContext2D,
    Path2D,
    ImageData,
    ImageBitmap,
    CanvasGradient,
    CanvasPattern,
    createImageBitmap: (
      source: unknown,
      ...args:
        [ImageBitmapOptions?] | [number, number, number, number, ImageBitmapOptions?]
    ) => createImageBitmap(hostCall, source, ...args),
  };
  for (const [name, value] of Object.entries(globals))
    Object.defineProperty(global, name, { value, writable: true, configurable: true });
  return {
    settle,
    close() {
      closePending();
    },
  };
}
