import { PATH, type PathCommand } from './commands.js';

export type AffineLike = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
};

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
  const Exception = (
    globalThis as { DOMException?: new (message: string, name: string) => Error }
  ).DOMException;
  if (typeof Exception === 'function') {
    try {
      return new Exception(message, 'IndexSizeError');
    } catch {
      /* ignore */
    }
  }
  return new RangeError(message);
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
    if (typeof path === 'string') this.commands.push({ op: PATH.svg, text: path });
    else if (path) {
      this.commands = copyCommands(path.commands);
      this.current = path.current ? [path.current[0], path.current[1]] : null;
      this.subpathStart = path.subpathStart
        ? [path.subpathStart[0], path.subpathStart[1]]
        : null;
    }
  }
  addPath(path: Path2D, transform?: AffineLike): void {
    const commands = copyCommands(path.commands);
    if (!transform) {
      this.commands.push(...commands);
      adoptTransformed(this, path);
      return;
    }
    this.commands.push({
      op: PATH.add,
      numbers: [
        transform.a,
        transform.b,
        transform.c,
        transform.d,
        transform.e,
        transform.f,
      ],
      children: commands,
    });
    adoptTransformed(this, path, transform);
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
    this.commands.push({ op: PATH.move, numbers: [x, y] });
    this.current = this.subpathStart = [x, y];
  }
  lineTo(x: number, y: number): void {
    this.commands.push({ op: PATH.line, numbers: [x, y] });
    if (this.current == null) this.current = this.subpathStart = [x, y];
    else this.current = [x, y];
  }
  rect(x: number, y: number, w: number, h: number): void {
    this.commands.push({ op: PATH.rect, numbers: [x, y, w, h] });
    this.current = this.subpathStart = [x, y];
  }
  roundRect(
    x: number,
    y: number,
    w: number,
    h: number,
    radii: number | number[] = 0,
  ): void {
    const list = Array.isArray(radii) ? radii : [radii];
    if (list.some((radius) => radius < 0)) {
      throw new RangeError('The radius provided is negative.');
    }
    const tl = list[0] ?? 0;
    const tr = list[1] ?? tl;
    const br = list[2] ?? tl;
    const bl = list[3] ?? tr;
    this.commands.push({
      op: PATH.roundRect,
      numbers: [x, y, w, h, tl, tl, tr, tr, br, br, bl, bl],
    });
    this.current = this.subpathStart = [x, y];
  }
  arc(x: number, y: number, r: number, start: number, end: number, ccw = false): void {
    if (r < 0) throw indexSizeError('The radius provided is negative.');
    this.commands.push({ op: PATH.arc, numbers: [x, y, r, start, end, ccw ? 1 : 0] });
    const point = ellipsePoint(x, y, r, r, 0, start === end ? start : end);
    if (this.current == null) this.subpathStart = ellipsePoint(x, y, r, r, 0, start);
    this.current = point;
  }
  arcTo(x1: number, y1: number, x2: number, y2: number, r: number): void {
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
    this.commands.push({ op: PATH.cubic, numbers: [cp1x, cp1y, cp2x, cp2y, x, y] });
    if (this.current == null) this.subpathStart = [cp1x, cp1y];
    this.current = [x, y];
  }
}
