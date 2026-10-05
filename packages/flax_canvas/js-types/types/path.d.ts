import { type PathCommand } from './commands.js';
export type AffineLike = {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
};
export declare function indexSizeError(message: string): Error;
export declare function ellipsePoint(x: number, y: number, rx: number, ry: number, rotation: number, angle: number): [number, number];
export declare function arcToGeometry(current: [number, number] | null, x1: number, y1: number, x2: number, y2: number, radius: number): {
    kind: 'move';
    x: number;
    y: number;
} | {
    kind: 'line';
    x: number;
    y: number;
} | {
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
};
export declare class Path2D {
    commands: PathCommand[];
    current: [number, number] | null;
    subpathStart: [number, number] | null;
    constructor(path?: Path2D | string);
    addPath(path: Path2D, transform?: AffineLike): void;
    extendPath(path: Path2D, transform: AffineLike): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
    roundRect(x: number, y: number, w: number, h: number, radii?: number | number[]): void;
    arc(x: number, y: number, r: number, start: number, end: number, ccw?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, r: number): void;
    ellipse(x: number, y: number, rx: number, ry: number, rotation: number, start: number, end: number, ccw?: boolean): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
}
