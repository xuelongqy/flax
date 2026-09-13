export const MAGIC = 0x31435643;
export const VERSION = 1;
export const OP = {
  save: 1,
  restore: 2,
  reset: 3,
  setTransform: 4,
  transform: 5,
  translate: 6,
  rotate: 7,
  scale: 8,
  resetTransform: 9,
  fillRect: 10,
  strokeRect: 11,
  clearRect: 12,
  fillPath: 13,
  strokePath: 14,
  clipPath: 15,
  fillText: 16,
  strokeText: 17,
  drawImage: 18,
  putImageData: 19,
  setFillColor: 20,
  setStrokeColor: 21,
  setFillLinear: 22,
  setStrokeLinear: 23,
  setFillRadial: 24,
  setStrokeRadial: 25,
  setFillConic: 26,
  setStrokeConic: 27,
  setGlobalAlpha: 28,
  setComposite: 29,
  setLineWidth: 30,
  setLineCap: 31,
  setLineJoin: 32,
  setMiterLimit: 33,
  setLineDash: 34,
  setLineDashOffset: 35,
  setShadow: 36,
  setSmoothing: 37,
  setFilter: 38,
  setFont: 39,
  setTextAlign: 40,
  setTextBaseline: 41,
  setDirection: 42,
  setLetterSpacing: 43,
  setWordSpacing: 44,
  setFillPattern: 45,
  setStrokePattern: 46,
} as const;
export const PATH = {
  move: 1,
  line: 2,
  close: 3,
  rect: 4,
  cubic: 5,
  quad: 6,
  arc: 7,
  ellipse: 8,
  arcTo: 9,
  roundRect: 10,
  svg: 11,
  add: 12,
  extend: 13,
} as const;

export type PathCommand = {
  op: number;
  numbers?: number[];
  text?: string;
  children?: PathCommand[];
};

export class CommandBuffer {
  buffer = new ArrayBuffer(4096);
  view = new DataView(this.buffer);
  used = 24;
  grow(need: number): void {
    if (this.used + need <= this.buffer.byteLength) return;
    let size = this.buffer.byteLength;
    while (size < this.used + need) size *= 2;
    const next = new ArrayBuffer(size);
    new Uint8Array(next).set(new Uint8Array(this.buffer, 0, this.used));
    this.buffer = next;
    this.view = new DataView(next);
  }
  reset(): void {
    this.used = 24;
  }
  u16(value: number): void {
    this.grow(2);
    this.view.setUint16(this.used, value, true);
    this.used += 2;
  }
  u32(value: number): void {
    this.grow(4);
    this.view.setUint32(this.used, value, true);
    this.used += 4;
  }
  f64(value: number): void {
    this.grow(8);
    this.view.setFloat64(this.used, value, true);
    this.used += 8;
  }
  bytes(value: Uint8Array): void {
    this.grow(value.byteLength);
    new Uint8Array(this.buffer, this.used, value.byteLength).set(value);
    this.used += value.byteLength;
  }
  text(value: string): void {
    const Encoder = (
      globalThis as { TextEncoder?: new () => { encode(input: string): Uint8Array } }
    ).TextEncoder;
    if (Encoder == null) throw new TypeError('TextEncoder is required');
    const encoded = new Encoder().encode(value);
    this.u32(encoded.length);
    this.bytes(encoded);
  }
  align(): void {
    const pad = (8 - (this.used % 8)) % 8;
    if (pad) this.grow(pad);
    this.used += pad;
  }
  record(opcode: number, write: () => void): void {
    const start = this.used;
    this.u16(opcode);
    this.u16(0);
    this.u32(0);
    const payload = this.used;
    write();
    const length = this.used - payload;
    this.view.setUint32(start + 4, length, true);
    this.align();
  }
  path(commands: readonly PathCommand[]): void {
    this.u32(commands.length);
    for (const command of commands) {
      this.u16(command.op);
      if (command.text != null) this.text(command.text);
      for (const value of command.numbers ?? []) this.f64(value);
      if (command.children) this.path(command.children);
    }
  }
  usedBytes(): Uint8Array {
    return new Uint8Array(this.buffer, 0, this.used);
  }
  header(generation: number, sequence: number): Uint8Array {
    this.view.setUint32(0, MAGIC, true);
    this.view.setUint32(4, VERSION, true);
    this.view.setUint32(8, 0, true);
    this.view.setUint32(12, generation, true);
    this.view.setUint32(16, sequence, true);
    this.view.setUint32(20, this.used, true);
    return this.usedBytes();
  }
}
