export interface ImageData {
  readonly width: number;
  readonly height: number;
  readonly data: Uint8ClampedArray;
}

export interface ImageBitmap {
  readonly width: number;
  readonly height: number;
  close(): void;
}

export interface CanvasGradient {
  addColorStop(offset: number, color: string): void;
}

export interface CanvasPattern {
  setTransform(
    a?: number | { a: number; b: number; c: number; d: number; e: number; f: number },
    b?: number,
    c?: number,
    d?: number,
    e?: number,
    f?: number,
  ): void;
}

export interface Path2D {
  addPath(
    path: Path2D,
    transform?: { a: number; b: number; c: number; d: number; e: number; f: number },
  ): void;
  closePath(): void;
  moveTo(x: number, y: number): void;
  lineTo(x: number, y: number): void;
  rect(x: number, y: number, w: number, h: number): void;
  roundRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radii?: number | number[],
  ): void;
  arc(x: number, y: number, r: number, start: number, end: number, ccw?: boolean): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, r: number): void;
  ellipse(
    x: number,
    y: number,
    rx: number,
    ry: number,
    rotation: number,
    start: number,
    end: number,
    ccw?: boolean,
  ): void;
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ): void;
}

export interface OffscreenCanvasRenderingContext2D {
  readonly canvas: OffscreenCanvas;
  fillStyle: string | CanvasGradient | CanvasPattern;
  strokeStyle: string | CanvasGradient | CanvasPattern;
  globalAlpha: number;
  globalCompositeOperation: string;
  lineWidth: number;
  lineCap: string;
  lineJoin: string;
  miterLimit: number;
  lineDashOffset: number;
  shadowColor: string;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  imageSmoothingEnabled: boolean;
  imageSmoothingQuality: string;
  filter: string;
  font: string;
  textAlign: string;
  textBaseline: string;
  direction: string;
  letterSpacing: string;
  wordSpacing: string;
  getContextAttributes(): {
    alpha: boolean;
    desynchronized: boolean;
    willReadFrequently: boolean;
    colorSpace: string;
  };
  save(): void;
  restore(): void;
  reset(): void;
  beginPath(): void;
  closePath(): void;
  moveTo(x: number, y: number): void;
  lineTo(x: number, y: number): void;
  rect(x: number, y: number, w: number, h: number): void;
  roundRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radii?: number | number[],
  ): void;
  arc(x: number, y: number, r: number, start: number, end: number, ccw?: boolean): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, r: number): void;
  ellipse(
    x: number,
    y: number,
    rx: number,
    ry: number,
    rotation: number,
    start: number,
    end: number,
    ccw?: boolean,
  ): void;
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ): void;
  fill(path?: Path2D | string, rule?: string): void;
  stroke(path?: Path2D): void;
  clip(path?: Path2D | string, rule?: string): void;
  fillRect(x: number, y: number, w: number, h: number): void;
  strokeRect(x: number, y: number, w: number, h: number): void;
  clearRect(x: number, y: number, w: number, h: number): void;
  translate(x: number, y: number): void;
  rotate(angle: number): void;
  scale(x: number, y: number): void;
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  setTransform(
    a?: number | { a: number; b: number; c: number; d: number; e: number; f: number },
    b?: number,
    c?: number,
    d?: number,
    e?: number,
    f?: number,
  ): void;
  resetTransform(): void;
  getTransform(): { a: number; b: number; c: number; d: number; e: number; f: number };
  setLineDash(segments: number[]): void;
  getLineDash(): number[];
  fillText(text: string, x: number, y: number): void;
  strokeText(text: string, x: number, y: number): void;
  measureText(text: string): Record<string, number>;
  drawImage(image: object, dx: number, dy: number, dw?: number, dh?: number): void;
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
  createRadialGradient(
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number,
  ): CanvasGradient;
  createConicGradient(angle: number, x: number, y: number): CanvasGradient;
  createPattern(image: object, repeat?: string | null): CanvasPattern | null;
  createImageData(sw: number, sh: number): ImageData;
  putImageData(image: ImageData, dx: number, dy: number): void;
  getImageDataAsync(sx: number, sy: number, sw: number, sh: number): Promise<ImageData>;
  isPointInPath(
    pathOrX: Path2D | number,
    xOrY: number,
    yOrRule?: number | string,
    rule?: string,
  ): boolean;
}

export interface OffscreenCanvas {
  width: number;
  height: number;
  getContext(
    type: string,
    options?: {
      alpha?: boolean;
      desynchronized?: boolean;
      willReadFrequently?: boolean;
      colorSpace?: string;
    },
  ): OffscreenCanvasRenderingContext2D | null;
  convertToBlob(options?: {
    type?: string;
  }): Promise<{ arrayBuffer(): Promise<ArrayBuffer>; type: string }>;
  transferToImageBitmap(): ImageBitmap;
}
