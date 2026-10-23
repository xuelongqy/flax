import { PATH, type PathCommand } from './commands.js';

export type AffineLike = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
};

export function finite(...values: number[]): boolean {
  return values.every(
    (n) => Number.isFinite(n) && Math.abs(n) <= 3.4028234663852886e38,
  );
}

export function matrix2D(
  value: import('./types.js').CanvasMatrix2DInit = {},
): AffineLike {
  value ??= {};
  if (value.is2D === false) throw new TypeError('The matrix must be two dimensional.');
  const defaults = [1, 0, 0, 1, 0, 0];
  const names = ['a', 'b', 'c', 'd', 'e', 'f'] as const;
  const aliases = ['m11', 'm12', 'm21', 'm22', 'm41', 'm42'] as const;
  const numbers = names.map((key, i) => {
    const primary = value[key],
      alias = value[aliases[i]!];
    const a = primary === undefined ? undefined : +primary,
      b = alias === undefined ? undefined : +alias;
    if (a !== undefined && b !== undefined && !Object.is(a, b) && !(a === b))
      throw new TypeError('Conflicting matrix aliases.');
    return a ?? b ?? defaults[i]!;
  });
  return {
    a: numbers[0]!,
    b: numbers[1]!,
    c: numbers[2]!,
    d: numbers[3]!,
    e: numbers[4]!,
    f: numbers[5]!,
  };
}

function copyCommands(commands: readonly PathCommand[]): PathCommand[] {
  return commands.map((command) => {
    const copy: PathCommand = { op: command.op };
    if (command.numbers) copy.numbers = command.numbers.slice();
    if (command.text != null) copy.text = command.text;
    if (command.children) copy.children = copyCommands(command.children);
    return copy;
  });
}

export function indexSizeError(message: string): Error {
  return canvasException('IndexSizeError', message);
}

export function canvasException(name: string, message: string): Error {
  const Exception = (
    globalThis as { DOMException?: new (message: string, name: string) => Error }
  ).DOMException;
  if (typeof Exception === 'function') {
    try {
      return new Exception(message, name);
    } catch {
      /* ignore */
    }
  }
  const error =
    name === 'IndexSizeError' ? new RangeError(message) : new Error(message);
  error.name = name;
  return error;
}

export function ellipsePoint(
  x: number,
  y: number,
  rx: number,
  ry: number,
  rotation: number,
  angle: number,
): [number, number] {
  const px = rx * Math.cos(angle);
  const py = ry * Math.sin(angle);
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  return [x + px * cos - py * sin, y + px * sin + py * cos];
}

function mapPoint(t: AffineLike, x: number, y: number): [number, number] {
  return [t.a * x + t.c * y + t.e, t.b * x + t.d * y + t.f];
}

export function arcToGeometry(
  current: [number, number] | null,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  radius: number,
):
  | { kind: 'move'; x: number; y: number }
  | { kind: 'line'; x: number; y: number }
  | {
      kind: 'arc';
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      x: number;
      y: number;
      rx: number;
      ry: number;
      start: number;
      end: number;
      ccw: boolean;
    } {
  if (current == null) return { kind: 'move', x: x1, y: y1 };
  const [x0, y0] = current;
  if (radius === 0 || (x0 === x1 && y0 === y1) || (x1 === x2 && y1 === y2)) {
    return { kind: 'line', x: x1, y: y1 };
  }
  const v1x = x0 - x1;
  const v1y = y0 - y1;
  const v2x = x2 - x1;
  const v2y = y2 - y1;
  const len1 = Math.hypot(v1x, v1y);
  const len2 = Math.hypot(v2x, v2y);
  if (len1 === 0 || len2 === 0) return { kind: 'line', x: x1, y: y1 };
  const dx1 = v1x / len1;
  const dy1 = v1y / len1;
  const dx2 = v2x / len2;
  const dy2 = v2y / len2;
  const cross = dx1 * dy2 - dy1 * dx2;
  if (Math.abs(cross) < 1e-12) return { kind: 'line', x: x1, y: y1 };
  const dot = Math.min(1, Math.max(-1, dx1 * dx2 + dy1 * dy2));
  const omega = Math.acos(dot);
  const dist = Math.abs(radius) / Math.tan(omega / 2);
  const t1x = x1 + dx1 * dist;
  const t1y = y1 + dy1 * dist;
  const t2x = x1 + dx2 * dist;
  const t2y = y1 + dy2 * dist;
  const sign = cross < 0 ? 1 : -1;
  const cx = t1x + -dy1 * Math.abs(radius) * sign;
  const cy = t1y + dx1 * Math.abs(radius) * sign;
  const start = Math.atan2(t1y - cy, t1x - cx);
  const end = Math.atan2(t2y - cy, t2x - cx);
  return {
    kind: 'arc',
    x1: t1x,
    y1: t1y,
    x2: t2x,
    y2: t2y,
    x: cx,
    y: cy,
    rx: Math.abs(radius),
    ry: Math.abs(radius),
    start,
    end,
    ccw: cross > 0,
  };
}

function adoptTransformed(
  target: Path2D,
  source: Path2D,
  transform?: AffineLike,
): void {
  const map = (x: number, y: number): [number, number] =>
    transform ? mapPoint(transform, x, y) : [x, y];
  if (source.subpathStart && target.subpathStart == null) {
    target.subpathStart = map(source.subpathStart[0], source.subpathStart[1]);
  }
  if (source.current) {
    target.current = map(source.current[0], source.current[1]);
  }
}

export class Path2D {
  commands: PathCommand[] = [];
  current: [number, number] | null = null;
  subpathStart: [number, number] | null = null;
  constructor(path?: Path2D | string) {
    if (path instanceof Path2D) {
      this.commands = copyCommands(path.commands);
      this.current = path.current ? [path.current[0], path.current[1]] : null;
      this.subpathStart = path.subpathStart
        ? [path.subpathStart[0], path.subpathStart[1]]
        : null;
    } else if (path !== undefined) {
      // SVG geometry/current points are resolved together by the engine.
      this.commands.push({ op: PATH.svg, text: `${path}` });
    }
  }
  addPath(path: Path2D, value?: import('./types.js').CanvasMatrix2DInit): void {
    if (!(path instanceof Path2D)) throw new TypeError('Expected Path2D.');
    if (!path.commands.length) return;
    const transform = value === undefined ? undefined : matrix2D(value);
    if (transform && !finite(...Object.values(transform))) return;
    const commands = copyCommands(path.commands);
    if (!commands.length) return;
    const matrix = transform ?? { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
    this.commands.push({
      op: PATH.add,
      numbers: [matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f],
      children: commands,
    });
    adoptTransformed(this, path, transform);
    this.subpathStart = this.current;
  }
  extendPath(path: Path2D, transform: AffineLike): void {
    this.commands.push({
      op: PATH.extend,
      numbers: [
        transform.a,
        transform.b,
        transform.c,
        transform.d,
        transform.e,
        transform.f,
      ],
      children: copyCommands(path.commands),
    });
    adoptTransformed(this, path, transform);
  }
  closePath(): void {
    this.commands.push({ op: PATH.close });
    this.current = this.subpathStart;
  }
  moveTo(x: number, y: number): void {
    if (arguments.length < 2) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    if (!finite(x, y)) return;
    this.commands.push({ op: PATH.move, numbers: [x, y] });
    this.current = this.subpathStart = [x, y];
  }
  lineTo(x: number, y: number): void {
    if (arguments.length < 2) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    if (!finite(x, y)) return;
    this.commands.push({ op: PATH.line, numbers: [x, y] });
    if (this.current == null) this.current = this.subpathStart = [x, y];
    else this.current = [x, y];
  }
  rect(x: number, y: number, w: number, h: number): void {
    if (arguments.length < 4) throw new TypeError('Not enough Canvas arguments.');
    x = +x;
    y = +y;
    w = +w;
    h = +h;
    if (!finite(x, y, w, h)) return;
    this.commands.push({ op: PATH.rect, numbers: [x, y, w, h] });
    this.current = this.subpathStart = [x, y];
  }
  roundRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radii:
      | import('./types.js').CanvasRadius
      | Iterable<import('./types.js').CanvasRadius> = 0,
  ): void {
    // Unary + follows Web IDL number conversion, including rejecting BigInt.
    x = +x;
    y = +y;
    w = +w;
    h = +h;
    const object =
      radii != null && (typeof radii === 'object' || typeof radii === 'function');
    const iterator = object
      ? (radii as Iterable<import('./types.js').CanvasRadius>)[Symbol.iterator]
      : undefined;
    if (iterator != null && typeof iterator !== 'function')
      throw new TypeError('The radii iterator must be callable.');
    const list = Array.from(
      iterator ? { [Symbol.iterator]: () => iterator.call(radii) } : [radii],
      (r) => {
        if (r == null || typeof r === 'object' || typeof r === 'function') {
          const point = r as
            { x?: number; y?: number; z?: number; w?: number } | null | undefined;
          // Web IDL converts every dictionary member, in lexicographic order.
          return {
            w: +(point?.w ?? 1),
            x: +(point?.x ?? 0),
            y: +(point?.y ?? 0),
            z: +(point?.z ?? 0),
          };
        }
        return { x: +r, y: +r };
      },
    );
    if (!finite(x, y, w, h)) return;
    if (list.length < 1 || list.length > 4)
      throw new RangeError('Expected one to four radii.');
    for (const radius of list) {
      if (!finite(radius.x, radius.y)) return;
      if (radius.x < 0 || radius.y < 0) throw new RangeError('The radius is negative.');
    }
    const tl = list[0]!,
      tr = list[1] ?? tl,
      br = list[2] ?? tl,
      bl = list[3] ?? tr;
    this.commands.push({
      op: PATH.roundRect,
      numbers: [x, y, w, h, tl.x, tl.y, tr.x, tr.y, br.x, br.y, bl.x, bl.y],
    });
    this.current = this.subpathStart = [x, y];
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
    this.commands.push({ op: PATH.arc, numbers: [x, y, r, start, end, ccw ? 1 : 0] });
    const point = ellipsePoint(x, y, r, r, 0, start === end ? start : end);
    if (this.current == null) this.subpathStart = ellipsePoint(x, y, r, r, 0, start);
    this.current = point;
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
    const geo = arcToGeometry(this.current, x1, y1, x2, y2, r);
    this.commands.push({ op: PATH.arcTo, numbers: [x2, y2, r, x1, y1] });
    if (geo.kind === 'move') this.current = this.subpathStart = [geo.x, geo.y];
    else if (geo.kind === 'line') this.current = [geo.x, geo.y];
    else this.current = [geo.x2, geo.y2];
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
    this.commands.push({
      op: PATH.ellipse,
      numbers: [x, y, rx, ry, rotation, start, end, ccw ? 1 : 0],
    });
    const point = ellipsePoint(x, y, rx, ry, rotation, start === end ? start : end);
    if (this.current == null) {
      this.subpathStart = ellipsePoint(x, y, rx, ry, rotation, start);
    }
    this.current = point;
  }
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
    if (arguments.length < 4) throw new TypeError('Not enough Canvas arguments.');
    cpx = +cpx;
    cpy = +cpy;
    x = +x;
    y = +y;
    if (!finite(cpx, cpy, x, y)) return;
    this.commands.push({ op: PATH.quad, numbers: [cpx, cpy, x, y] });
    if (this.current == null) this.subpathStart = [cpx, cpy];
    this.current = [x, y];
  }
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ): void {
    if (arguments.length < 6) throw new TypeError('Not enough Canvas arguments.');
    cp1x = +cp1x;
    cp1y = +cp1y;
    cp2x = +cp2x;
    cp2y = +cp2y;
    x = +x;
    y = +y;
    if (!finite(cp1x, cp1y, cp2x, cp2y, x, y)) return;
    this.commands.push({ op: PATH.cubic, numbers: [cp1x, cp1y, cp2x, cp2y, x, y] });
    if (this.current == null) this.subpathStart = [cp1x, cp1y];
    this.current = [x, y];
  }
}
