import { CommandBuffer, OP, type PathCommand } from './commands.js';
import { parseColor, type Rgba } from './color.js';
import { Path2D, arcToGeometry, indexSizeError } from './path.js';
import { acceptedFilter } from './filter.js';

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
    return Math.abs(this.det) >= 1e-12;
  }
  multiply(o: Affine): Affine {
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
    if (Math.abs(det) < 1e-12) return new Affine();
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
  const Exception = (
    globalThis as { DOMException?: new (message: string, name: string) => Error }
  ).DOMException;
  if (typeof Exception === 'function') {
    try {
      return new Exception(message, 'InvalidStateError');
    } catch {
      /* ignore */
    }
  }
  return new Error(message);
}

function acceptedFont(value: string): boolean {
  return /(?:^|\s)\d*\.?\d+px\s+\S/.test(value.trim());
}

function acceptedPxLength(value: string): number | null {
  const match = /^([+-]?(?:\d+\.?\d*|\.\d+))px$/.exec(value.trim());
  if (!match) return null;
  const amount = Number(match[1]);
  return Number.isFinite(amount) ? amount : null;
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
    const parsed = parseColor(color);
    if (!Number.isFinite(offset) || offset < 0 || offset > 1 || !parsed)
      throw new TypeError('Invalid color stop');
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
  setTransform(a?: number | Affine, b = 0, c = 0, d = 1, e = 0, f = 0): void {
    this.transform =
      a instanceof Affine || (a && typeof a === 'object')
        ? new Affine(
            (a as Affine).a,
            (a as Affine).b,
            (a as Affine).c,
            (a as Affine).d,
            (a as Affine).e,
            (a as Affine).f,
          )
        : new Affine(Number(a ?? 1), b, c, d, e, f);
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
  const w = width | 0;
  const h = height | 0;
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
  readonly width: number;
  readonly height: number;
  readonly data: Uint8ClampedArray;
  constructor(
    dataOrWidth: Uint8ClampedArray | number,
    widthOrHeight: number,
    height?: number,
  ) {
    if (typeof dataOrWidth === 'number') {
      const size = checkedImageSize(dataOrWidth, widthOrHeight);
      this.width = size.width;
      this.height = size.height;
      this.data = new Uint8ClampedArray(size.length);
      return;
    }
    const width = widthOrHeight | 0;
    if (width <= 0) {
      throw imageDataIndexError('The source width must be greater than zero.');
    }
    if (dataOrWidth.length % 4 !== 0) {
      throw imageDataIndexError('The source data length is not a multiple of 4.');
    }
    let resolvedHeight: number;
    if (height == null) {
      if (dataOrWidth.length === 0 || dataOrWidth.length % (4 * width) !== 0) {
        throw imageDataIndexError('The source data does not match the width.');
      }
      resolvedHeight = dataOrWidth.length / (4 * width);
    } else {
      resolvedHeight = height | 0;
      if (resolvedHeight <= 0) {
        throw imageDataIndexError('The source height must be greater than zero.');
      }
      if (dataOrWidth.length !== 4 * width * resolvedHeight) {
        throw imageDataIndexError('The source data does not match the dimensions.');
      }
    }
    this.width = width;
    this.height = resolvedHeight;
    this.data = dataOrWidth;
  }
}

type DrawState = {
  transform: Affine;
  fill: Style;
  stroke: Style;
  alpha: number;
  composite: string;
  lineWidth: number;
  lineCap: string;
  lineJoin: string;
  miterLimit: number;
  lineDash: number[];
  lineDashOffset: number;
  shadowColor: string;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  smoothing: boolean;
  smoothingQuality: string;
  filter: string;
  font: string;
  textAlign: string;
  textBaseline: string;
  direction: string;
  letterSpacing: string;
  wordSpacing: string;
};

function defaults(): DrawState {
  return {
    transform: new Affine(),
    fill: '#000000',
    stroke: '#000000',
    alpha: 1,
    composite: 'source-over',
    lineWidth: 1,
    lineCap: 'butt',
    lineJoin: 'miter',
    miterLimit: 10,
    lineDash: [],
    lineDashOffset: 0,
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    smoothing: true,
    smoothingQuality: 'low',
    filter: 'none',
    font: '10px sans-serif',
    textAlign: 'start',
    textBaseline: 'alphabetic',
    direction: 'ltr',
    letterSpacing: '0px',
    wordSpacing: '0px',
  };
}

export class OffscreenCanvasRenderingContext2D {
  readonly canvas: OffscreenCanvas;
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
    this.canvas = canvas;
    this.call = call;
    this.buffer = buffer;
    this.dirty = dirty;
  }
  get fillStyle(): Style {
    return this.state.fill;
  }
  set fillStyle(value: Style) {
    if (typeof value === 'string') {
      const color = parseColor(value);
      if (!color) return;
      this.state.fill = value;
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
    if (typeof value === 'string') {
      const color = parseColor(value);
      if (!color) return;
      this.state.stroke = value;
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
    if (!Number.isFinite(value) || value < 0 || value > 1) return;
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
    if (!Number.isFinite(value) || value <= 0) return;
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
    if (!Number.isFinite(value) || value <= 0) return;
    this.state.miterLimit = value;
    this.record(OP.setMiterLimit, () => this.buffer.f64(value));
  }
  get lineDashOffset(): number {
    return this.state.lineDashOffset;
  }
  set lineDashOffset(value: number) {
    if (!Number.isFinite(value)) return;
    this.state.lineDashOffset = value;
    this.record(OP.setLineDashOffset, () => this.buffer.f64(value));
  }
  get shadowColor(): string {
    return this.state.shadowColor;
  }
  set shadowColor(value: string) {
    if (!parseColor(value)) return;
    this.state.shadowColor = value;
    this.writeShadow();
  }
  get shadowBlur(): number {
    return this.state.shadowBlur;
  }
  set shadowBlur(value: number) {
    if (!Number.isFinite(value) || value < 0) return;
    this.state.shadowBlur = value;
    this.writeShadow();
  }
  get shadowOffsetX(): number {
    return this.state.shadowOffsetX;
  }
  set shadowOffsetX(value: number) {
    if (!Number.isFinite(value)) return;
    this.state.shadowOffsetX = value;
    this.writeShadow();
  }
  get shadowOffsetY(): number {
    return this.state.shadowOffsetY;
  }
  set shadowOffsetY(value: number) {
    if (!Number.isFinite(value)) return;
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
    const accepted = acceptedFilter(value);
    if (accepted == null) return;
    this.state.filter = accepted;
    this.record(OP.setFilter, () => this.buffer.text(accepted));
  }
  get font(): string {
    return this.state.font;
  }
  set font(value: string) {
    if (typeof value !== 'string' || !acceptedFont(value)) return;
    this.state.font = value;
    this.record(OP.setFont, () => this.buffer.text(value));
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
    const amount = acceptedPxLength(value);
    if (amount == null) return;
    this.state.letterSpacing = value;
    this.record(OP.setLetterSpacing, () => this.buffer.f64(amount));
  }
  get wordSpacing(): string {
    return this.state.wordSpacing;
  }
  set wordSpacing(value: string) {
    const amount = acceptedPxLength(value);
    if (amount == null) return;
    this.state.wordSpacing = value;
    this.record(OP.setWordSpacing, () => this.buffer.f64(amount));
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
    this.path.moveTo(...this.mapPoint(x, y));
  }
  lineTo(x: number, y: number): void {
    this.path.lineTo(...this.mapPoint(x, y));
  }
  rect(x: number, y: number, w: number, h: number): void {
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
    radii?: number | number[],
  ): void {
    if (this.state.transform.isIdentity) {
      this.path.roundRect(x, y, w, h, radii);
      return;
    }
    const other = new Path2D();
    other.roundRect(x, y, w, h, radii);
    this.path.addPath(other, this.state.transform);
    this.path.current = this.path.subpathStart = this.mapPoint(x, y);
  }
  arc(x: number, y: number, r: number, start: number, end: number, ccw = false): void {
    if (r < 0) throw indexSizeError('The radius provided is negative.');
    if (this.state.transform.isIdentity) {
      this.path.arc(x, y, r, start, end, ccw);
      return;
    }
    this.extendCurrent((path) => path.arc(x, y, r, start, end, ccw));
  }
  arcTo(x1: number, y1: number, x2: number, y2: number, r: number): void {
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
    if (rx < 0 || ry < 0) throw indexSizeError('The radius provided is negative.');
    if (this.state.transform.isIdentity) {
      this.path.ellipse(x, y, rx, ry, rotation, start, end, ccw);
      return;
    }
    this.extendCurrent((path) => path.ellipse(x, y, rx, ry, rotation, start, end, ccw));
  }
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
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
    const explicit = path instanceof Path2D;
    const commands = explicit ? path.commands : this.path.commands;
    this.aroundCurrentPath(explicit, () => {
      this.record(OP.strokePath, () => this.buffer.path(commands));
    });
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
    this.syncLiveStyles();
    this.record(OP.fillRect, () => [x, y, w, h].forEach((n) => this.buffer.f64(n)));
  }
  strokeRect(x: number, y: number, w: number, h: number): void {
    this.syncLiveStyles();
    this.record(OP.strokeRect, () => [x, y, w, h].forEach((n) => this.buffer.f64(n)));
  }
  clearRect(x: number, y: number, w: number, h: number): void {
    this.record(OP.clearRect, () => [x, y, w, h].forEach((n) => this.buffer.f64(n)));
  }
  translate(x: number, y: number): void {
    this.state.transform = this.state.transform.multiply(new Affine(1, 0, 0, 1, x, y));
    this.record(OP.translate, () => {
      this.buffer.f64(x);
      this.buffer.f64(y);
    });
  }
  rotate(angle: number): void {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    this.state.transform = this.state.transform.multiply(
      new Affine(cos, sin, -sin, cos, 0, 0),
    );
    this.record(OP.rotate, () => this.buffer.f64(angle));
  }
  scale(x: number, y: number): void {
    this.state.transform = this.state.transform.multiply(new Affine(x, 0, 0, y, 0, 0));
    this.record(OP.scale, () => {
      this.buffer.f64(x);
      this.buffer.f64(y);
    });
  }
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void {
    this.state.transform = this.state.transform.multiply(new Affine(a, b, c, d, e, f));
    this.record(OP.transform, () =>
      [a, b, c, d, e, f].forEach((n) => this.buffer.f64(n)),
    );
  }
  setTransform(a?: number | Affine, b = 0, c = 0, d = 1, e = 0, f = 0): void {
    const next =
      a instanceof Affine || (a && typeof a === 'object' && 'a' in (a as object))
        ? new Affine(
            (a as Affine).a,
            (a as Affine).b,
            (a as Affine).c,
            (a as Affine).d,
            (a as Affine).e,
            (a as Affine).f,
          )
        : new Affine(Number(a ?? 1), b, c, d, e, f);
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
    const values = [...segments].map(Number);
    if (values.some((n) => !Number.isFinite(n) || n < 0)) return;
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
  fillText(text: string, x: number, y: number): void {
    this.syncLiveStyles();
    this.record(OP.fillText, () => {
      this.buffer.text(String(text));
      this.buffer.f64(x);
      this.buffer.f64(y);
    });
  }
  strokeText(text: string, x: number, y: number): void {
    this.syncLiveStyles();
    this.record(OP.strokeText, () => {
      this.buffer.text(String(text));
      this.buffer.f64(x);
      this.buffer.f64(y);
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
    if (image instanceof ImageData && rest.length === 0 && dw == null) {
      this.putImageData(image, dx, dy);
      return;
    }
    const id = imageId(image, this.call, this.canvas);
    if (id == null) return;
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
    this.record(OP.drawImage, () => {
      this.buffer.u32(id);
      [sx, sy, sw, sh, x, y, w, h].forEach((n) => this.buffer.f64(n));
    });
  }
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient {
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
    if (r0 < 0 || r1 < 0) throw indexSizeError('The radius provided is negative.');
    return new CanvasGradient('radial', [x0, y0, r0, x1, y1, r1], internalKey);
  }
  createConicGradient(angle: number, x: number, y: number): CanvasGradient {
    return new CanvasGradient('conic', [x, y, angle], internalKey);
  }
  createPattern(
    image: OffscreenCanvas | ImageBitmap | object,
    repeat?: string | null,
  ): CanvasPattern | null {
    const value = repeat == null || repeat === '' ? 'repeat' : repeat;
    if (
      value !== 'repeat' &&
      value !== 'repeat-x' &&
      value !== 'repeat-y' &&
      value !== 'no-repeat'
    ) {
      throw new TypeError('Invalid pattern repetition');
    }
    const id = patternImageId(image, this.call);
    if (id == null) return null;
    const pattern = new CanvasPattern(id, value, internalKey);
    registerPattern(pattern, id, this.call);
    return pattern;
  }
  createImageData(sw: number, sh: number): ImageData {
    return new ImageData(sw, sh);
  }
  putImageData(image: ImageData, dx: number, dy: number): void {
    this.record(OP.putImageData, () => {
      this.buffer.u32(image.width);
      this.buffer.u32(image.height);
      this.buffer.f64(dx);
      this.buffer.f64(dy);
      this.buffer.bytes(
        new Uint8Array(image.data.buffer, image.data.byteOffset, image.data.byteLength),
      );
    });
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
    let fillRule = rule;
    let explicit = false;
    if (typeof pathOrX === 'object') {
      commands = pathOrX.commands;
      x = xOrY;
      y = Number(yOrRule);
      fillRule = typeof rule === 'string' ? rule : 'nonzero';
      explicit = true;
    } else {
      x = pathOrX;
      y = xOrY;
      fillRule = typeof yOrRule === 'string' ? yOrRule : 'nonzero';
    }
    if (explicit) {
      if (!this.state.transform.isInvertible) return false;
      const inverted = this.state.transform.invert().map(x, y);
      x = inverted[0];
      y = inverted[1];
    }
    const encoded = new CommandBuffer();
    encoded.used = 0;
    encoded.path(commands);
    return Boolean(this.call('isPointInPath', encoded.usedBytes(), x, y, fillRule));
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
    this.record(OP.setFilter, () => this.buffer.text(this.state.filter));
    this.record(OP.setFont, () => this.buffer.text(this.state.font));
    this.record(OP.setTextAlign, () => this.buffer.text(this.state.textAlign));
    this.record(OP.setTextBaseline, () => this.buffer.text(this.state.textBaseline));
    this.record(OP.setDirection, () => this.buffer.text(this.state.direction));
    this.record(OP.setLetterSpacing, () =>
      this.buffer.f64(acceptedPxLength(this.state.letterSpacing) ?? 0),
    );
    this.record(OP.setWordSpacing, () =>
      this.buffer.f64(acceptedPxLength(this.state.wordSpacing) ?? 0),
    );
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
    write();
    this.writeTransform(current);
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
    const color = parseColor(this.state.shadowColor) ?? [0, 0, 0, 0];
    this.record(OP.setShadow, () => {
      color.forEach((n) => this.buffer.f64(n));
      this.buffer.f64(this.state.shadowBlur);
      this.buffer.f64(this.state.shadowOffsetX);
      this.buffer.f64(this.state.shadowOffsetY);
    });
  }
  private writeStyle(fill: boolean, value: CanvasGradient | CanvasPattern): void {
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
      });
      return;
    }
    this.record(fill ? OP.setFillPattern : OP.setStrokePattern, () => {
      this.buffer.u32(value.image);
      this.buffer.text(value.repeat);
      const t = value.transform;
      [t.a, t.b, t.c, t.d, t.e, t.f].forEach((n) => this.buffer.f64(n));
    });
  }
  private writePaint(fill: boolean): void {
    const value = fill ? this.state.fill : this.state.stroke;
    if (typeof value === 'string') {
      const color = parseColor(value);
      if (!color) return;
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
  };
  constructor(width: number, height: number, call: Call) {
    this.call = call;
    this[surfaceKey] = call('create', width | 0, height | 0) as CanvasSurface;
    trackSurface(call, this, this[surfaceKey]);
  }
  get width(): number {
    return this[surfaceKey].width;
  }
  set width(value: number) {
    this.resize(value | 0, this.height);
  }
  get height(): number {
    return this[surfaceKey].height;
  }
  set height(value: number) {
    this.resize(this.width, value | 0);
  }
  getContext(
    type: string,
    options?: {
      alpha?: boolean;
      desynchronized?: boolean;
      willReadFrequently?: boolean;
      colorSpace?: string;
    },
  ): OffscreenCanvasRenderingContext2D | null {
    if (type !== '2d') return null;
    if (this.context) return this.context;
    if (options?.colorSpace && options.colorSpace !== 'srgb') return null;
    this.attributes = {
      alpha: options?.alpha !== false,
      desynchronized: Boolean(options?.desynchronized),
      willReadFrequently: Boolean(options?.willReadFrequently),
      colorSpace: 'srgb',
    };
    if (options?.alpha === false) this.call('setAlpha', this[surfaceKey], 0);
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
        this.context?.resyncState();
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
    if (this.queued) return;
    this.queued = true;
    const enqueue = (globalThis as { queueMicrotask?: (callback: () => void) => void })
      .queueMicrotask;
    if (enqueue) enqueue(() => this.flush());
    else void Promise.resolve().then(() => this.flush());
  }
  resize(width: number, height: number): void {
    this.flush();
    this.call('resize', this[surfaceKey], width, height);
    this.generation++;
    this.sequence = 0;
    this.context?.reset();
    this.buffer.reset();
  }
  convertToBlob(options?: {
    type?: string;
  }): Promise<{ arrayBuffer(): Promise<ArrayBuffer>; type: string }> {
    this.flush();
    const type = options?.type ?? 'image/png';
    const BlobCtor = (
      globalThis as {
        Blob?: new (
          parts: unknown[],
          opts?: { type?: string },
        ) => { arrayBuffer(): Promise<ArrayBuffer>; type: string };
      }
    ).Blob;
    if (BlobCtor == null) throw new TypeError('Blob is required');
    return rpc(this.call, 'convertToBlob', this[surfaceKey], type).then(
      (bytes) => new BlobCtor([bytes], { type }),
    );
  }
  transferToImageBitmap(): ImageBitmap {
    this.flush();
    const id = this.call('transferToImageBitmap', this[surfaceKey]) as number;
    const width = this.width;
    const height = this.height;
    this.context?.reset();
    return new ImageBitmap(id, width, height, this.call, internalKey);
  }
  readPixels(sx: number, sy: number, sw: number, sh: number): Promise<ImageData> {
    this.flush();
    return rpc(this.call, 'getImageData', this[surfaceKey], sx, sy, sw, sh).then(
      (bytes) => new ImageData(new Uint8ClampedArray(bytes as ArrayBuffer), sw, sh),
    );
  }
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

function pathAndRule(
  current: Path2D,
  path?: Path2D | string,
  rule?: string,
): [PathCommand[], string] {
  if (typeof path === 'string') return [current.commands, path];
  if (path instanceof Path2D) return [path.commands, rule ?? 'nonzero'];
  return [current.commands, rule ?? 'nonzero'];
}

type ImageRelease = { id: number; released: boolean; call: Call };

export class ImageBitmap {
  [imageIdKey]: number;
  readonly width: number;
  readonly height: number;
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
    this.width = width;
    this.height = height;
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
  const id = (image as { [imageIdKey]?: unknown })[imageIdKey];
  return typeof id === 'number' ? id : null;
}

function imageId(image: object, call: Call, borrow?: OffscreenCanvas): number | null {
  if (image instanceof OffscreenCanvas) {
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

export function createImageBitmap(call: Call, source: unknown): Promise<ImageBitmap> {
  if (source instanceof ImageData) {
    return rpc(
      call,
      'createImageBitmapPixels',
      source.width,
      source.height,
      source.data,
    ).then(
      (id) =>
        new ImageBitmap(id as number, source.width, source.height, call, internalKey),
    );
  }
  if (source instanceof OffscreenCanvas) {
    source.flush();
    const width = source.width;
    const height = source.height;
    return rpc(call, 'snapshotImage', surfaceOf(source)).then(
      (id) => new ImageBitmap(id as number, width, height, call, internalKey),
    );
  }
  if (source instanceof ImageBitmap) {
    return rpc(call, 'cloneImage', source[imageIdKey]).then(
      (id) =>
        new ImageBitmap(id as number, source.width, source.height, call, internalKey),
    );
  }
  if (source && typeof source === 'object' && 'arrayBuffer' in source) {
    return (source as { arrayBuffer(): Promise<ArrayBuffer> })
      .arrayBuffer()
      .then((bytes) =>
        rpc(call, 'createImageBitmap', bytes).then((value) => {
          const [id, width, height] = value as [number, number, number];
          return new ImageBitmap(id, width, height, call, internalKey);
        }),
      );
  }
  return Promise.reject(new TypeError('Unsupported createImageBitmap source'));
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
    createImageBitmap: (source: unknown) => createImageBitmap(hostCall, source),
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
