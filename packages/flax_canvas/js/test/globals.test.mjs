import test from 'node:test';
import assert from 'node:assert/strict';
import { MAGIC, CommandBuffer, OP, PATH } from '../dist/commands.js';
import { parseColor, serializeColor } from '../dist/color.js';
import { parseFilter } from '../dist/filter.js';
import { canvasFont, cssLength } from '../dist/font.js';
import { Path2D } from '../dist/path.js';
import { installCanvas, imageIdKey, holdCanvas, heldCanvas } from '../dist/canvas.js';

test('font shorthand tokenization and typed CSS math', () => {
  const valid = new Map([
    ['italic/**/450.5 16px serif', 'italic 450.5 16px serif'],
    [String.raw`16px "\41 rial"`, '16px "Arial"'],
    [String.raw`16px Times\ New\ Roman`, '16px "Times New Roman"'],
    [String.raw`it\61lic 16px serif`, 'italic 16px serif'],
    ['oblique -0.25turn 16px serif', 'oblique -90deg 16px serif'],
    ['calc(200 + 250.5) calc(1em + 2px)/calc(100% + 2px) serif', '450.5 12px serif'],
    ['clamp(10px, 3em, 24px) serif', '24px serif'],
    ['min(20px, max(1em, 12px)) serif', '12px serif'],
    ['calc(30% - 40px) serif', '0px serif'],
    ['calc((2px + 4px) * 2) serif', '12px serif'],
    ['0 serif', '0px serif'],
    ['normal normal normal normal 12px serif', '12px serif'],
    ['calc(-10) 12px/calc(-1) serif', '1 12px serif'],
    ['calc(1001) 12px serif', '1000 12px serif'],
    ['oblique calc(100deg) 12px serif', 'oblique 90deg 12px serif'],
  ]);
  for (const [source, expected] of valid) {
    assert.equal(canvasFont(source), expected, source);
    assert.equal(canvasFont(expected), expected, 'roundtrip ' + source);
  }
  for (const source of [
    '-12px serif',
    '12.px serif',
    '12px/2garbage serif',
    '12px/-1 serif',
    'italic normal normal normal bold 12px serif',
    '1001 12px serif',
    'oblique 91deg 12px serif',
    '12px "line\nbreak"',
    'calc(1em+ 2px) serif',
    'calc(1em +2px) serif',
    'calc(1px + 2) serif',
    'calc(1px * 2px) serif',
    'calc(1px / 0) serif',
    'min() serif',
    'clamp(1px, 2px) serif',
    '12px serif,',
    '12px inherit Arial',
  ])
    assert.equal(canvasFont(source), null, source);
});

test('roundRect converts Web IDL radii and checks nonfinite values in order', () => {
  const p = new Path2D();
  p.roundRect(0, 0, 10, 10, new Set([1, 2]));
  assert.deepEqual(p.commands[0].numbers.slice(4), [1, 1, 2, 2, 1, 1, 2, 2]);
  p.roundRect(0, 0, 10, 10, [undefined]);
  p.roundRect(0, 0, 10, 10, null);
  const length = p.commands.length;
  p.roundRect(0, 0, 10, 10, [-Infinity, -1]);
  assert.equal(p.commands.length, length);
  assert.throws(() => p.roundRect(0, 0, 10, 10, [-1, Infinity]), RangeError);
  assert.throws(() => p.roundRect(NaN, 0, 10, 10, { x: 0n }), TypeError);
  assert.throws(() => p.roundRect(0, 0, 10, 10, 0n), TypeError);
  assert.throws(() => p.roundRect(0, 0, 10, 10, { z: 0n }), TypeError);
  assert.throws(() => p.roundRect(0, 0, 10, 10, { w: 0n }), TypeError);
  let reads = 0;
  p.roundRect(0, 0, 10, 10, {
    get [Symbol.iterator]() {
      ++reads;
      return function* () {
        yield 2;
      };
    },
  });
  assert.equal(reads, 1);
  const order = [];
  p.roundRect(
    0,
    0,
    10,
    10,
    Object.fromEntries(
      ['w', 'x', 'y', 'z'].map((key) => [
        key,
        {
          valueOf() {
            order.push(key);
            return 0;
          },
        },
      ]),
    ),
  );
  assert.deepEqual(order, ['w', 'x', 'y', 'z']);
});

test('CSS color tokens, modern syntax and canonical getters', () => {
  for (const color of [
    'lime',
    'rgb(0 255 0)',
    'rgb(0% 255 0% / 100%)',
    'hsl(0.333333333333turn 100 50)',
    'hsl(133.333333333grad 100% 50%)',
    'hwb(120deg 0% 0%)',
    'rgb(0, 255, 0',
  ]) {
    assert.equal(serializeColor(parseColor(color)), '#00ff00', color);
  }
  assert.equal(serializeColor(parseColor('rebeccapurple')), '#663399');
  assert.equal(serializeColor(parseColor('hwb(45 200% 100%)')), '#aaaaaa');
  assert.equal(serializeColor(parseColor('hwb(45 1e308% 1e308%)')), '#808080');
  assert.equal(
    serializeColor(parseColor('rgba(0 255 0 / 50%)')),
    'rgba(0, 255, 0, 0.5)',
  );
  for (const color of [
    'rgb(0junk, 255, 0)',
    'rgb(0, 100%, 0)',
    'rgba(0,0,0,.5,1)',
    'hsl(120, 1, 0.5)',
    'rgb(0 255 0 /)',
    'hwb(120, 0%, 0%)',
  ]) {
    assert.equal(parseColor(color), null, color);
  }
  const global = install((op, ...args) =>
    op === 'create' ? { width: args[0], height: args[1] } : undefined,
  );
  const context = new global.OffscreenCanvas(10, 10).getContext('2d');
  context.fillStyle = 'lime';
  context.strokeStyle = 'rebeccapurple';
  context.shadowColor = 'rgba(0 255 0 / 50%)';
  assert.equal(context.fillStyle, '#00ff00');
  assert.equal(context.strokeStyle, '#663399');
  assert.equal(context.shadowColor, 'rgba(0, 255, 0, 0.5)');
  context.fillStyle = 'rgb(0junk, 0, 0)';
  assert.equal(context.fillStyle, '#00ff00');
});

test('font sizes use the reference metrics without rewriting family names', () => {
  const defaults = () => [4, 6, 10, 'Host Sans'];
  assert.equal(canvasFont('2ex serif', defaults), '8px serif');
  assert.equal(canvasFont('2ch serif', defaults), '12px serif');
  assert.equal(canvasFont('2ic serif', defaults), '20px serif');
  assert.equal(canvasFont('large serif', defaults), '18px serif');
  assert.equal(canvasFont('20px Small Font', defaults), '20px "Small Font"');
  assert.equal(canvasFont('100px serif', defaults), '100px serif');
  assert.equal(canvasFont('message-box', defaults), '14px "Host Sans"');
  assert.equal(canvasFont('1e308ex serif', defaults), null);
});

test('globals entry has no runtime constructors', async () => {
  const module = await import(new URL('../dist/globals.js', import.meta.url));
  assert.equal(Object.keys(module).length, 0);
  assert.equal(typeof globalThis.OffscreenCanvas, 'undefined');
});

test('command buffer grows and reports used length', () => {
  const buffer = new CommandBuffer();
  buffer.record(10, () => {
    buffer.f64(1);
    buffer.f64(2);
    buffer.f64(3);
    buffer.f64(4);
  });
  const bytes = buffer.header(1, 2);
  assert.equal(bytes.byteLength, buffer.used);
  assert.ok(bytes.byteLength < buffer.buffer.byteLength);
  assert.equal(new DataView(bytes.buffer).getUint32(0, true), MAGIC);
});

function firstPathOp(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let offset = 24;
  while (offset + 8 <= bytes.byteLength) {
    const op = view.getUint16(offset, true);
    const payload = view.getUint32(offset + 4, true);
    const start = offset + 8;
    if (op === OP.fillPath) {
      const count = view.getUint32(start, true);
      if (count < 1) return null;
      return view.getUint16(start + 4, true);
    }
    offset = start + payload;
    offset += (8 - (offset % 8)) % 8;
  }
  return null;
}

function opcodes(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let offset = 24;
  const ops = [];
  while (offset + 8 <= bytes.byteLength) {
    const op = view.getUint16(offset, true);
    const payload = view.getUint32(offset + 4, true);
    ops.push(op);
    offset += 8 + payload;
    offset += (8 - (offset % 8)) % 8;
  }
  return ops;
}

function install(handler) {
  const global = {};
  installCanvas(global, handler);
  return global;
}

test('failed commit resyncs style and transform', () => {
  const commits = [];
  let fail = true;
  const global = install((operation, ...args) => {
    if (operation === 'create') return { width: 20, height: 20 };
    if (operation === 'commit') {
      commits.push(new Uint8Array(args[1]));
      if (fail) {
        fail = false;
        throw new Error('commit failed');
      }
    }
  });
  const canvas = new global.OffscreenCanvas(20, 20);
  const context = canvas.getContext('2d');
  context.fillStyle = '#ff0000';
  context.translate(3, 4);
  context.fillRect(0, 0, 1, 1);
  assert.throws(() => canvas.flush());
  canvas.flush();
  assert.equal(commits.length, 2);
  const ops = opcodes(commits[1]);
  assert.equal(ops[0], OP.setTransform);
  assert.ok(ops.includes(OP.setFillColor));
});

test('current-path isPointInPath does not invert', () => {
  const hits = [];
  const global = install((operation, ...args) => {
    if (operation === 'create') return { width: 100, height: 20 };
    if (operation === 'isPointInPath') {
      hits.push([args[1], args[2]]);
      return true;
    }
  });
  const context = new global.OffscreenCanvas(100, 20).getContext('2d');
  context.translate(50, 0);
  context.rect(0, 0, 10, 10);
  assert.equal(context.isPointInPath(55, 5), true);
  assert.equal(hits.length, 1);
  assert.ok(Math.abs(hits[0][0] - 55) < 1e-9);
  assert.ok(Math.abs(hits[0][1] - 5) < 1e-9);
});

test('explicit Path2D isPointInPath inverts the current transform', () => {
  const hits = [];
  const global = install((operation, ...args) => {
    if (operation === 'create') return { width: 100, height: 20 };
    if (operation === 'isPointInPath') {
      hits.push([args[1], args[2]]);
      return true;
    }
  });
  const context = new global.OffscreenCanvas(100, 20).getContext('2d');
  const path = new global.Path2D();
  path.rect(0, 0, 10, 10);
  context.translate(50, 0);
  assert.equal(context.isPointInPath(path, 55, 5), true);
  assert.equal(hits.length, 1);
  assert.ok(Math.abs(hits[0][0] - 5) < 1e-9);
  assert.ok(Math.abs(hits[0][1] - 5) < 1e-9);
});

test('baked current path hit-test survives resetTransform', () => {
  const hits = [];
  const global = install((operation, ...args) => {
    if (operation === 'create') return { width: 40, height: 40 };
    if (operation === 'isPointInPath') {
      hits.push([args[1], args[2]]);
      return true;
    }
  });
  const context = new global.OffscreenCanvas(40, 40).getContext('2d');
  context.scale(2, 2);
  context.rect(0, 0, 10, 10);
  context.resetTransform();
  assert.equal(context.isPointInPath(15, 15), true);
  assert.equal(hits.length, 1);
  assert.ok(Math.abs(hits[0][0] - 15) < 1e-9);
  assert.ok(Math.abs(hits[0][1] - 15) < 1e-9);
});

test('createPattern rejects invalid repetition and retains bitmaps', () => {
  const retained = [];
  const global = install((operation, ...args) => {
    if (operation === 'create') return { width: 4, height: 4 };
    if (operation === 'retainImage') retained.push(args[0]);
  });
  const context = new global.OffscreenCanvas(4, 4).getContext('2d');
  const image = { [imageIdKey]: 1 };
  assert.throws(
    () => context.createPattern(image, 'repeat-xy'),
    (error) => error.name === 'SyntaxError',
  );
  assert.equal(context.createPattern(image, null).repeat, 'repeat');
  assert.equal(context.createPattern(image, undefined).repeat, 'repeat');
  assert.equal(context.createPattern(image, '').repeat, 'repeat');
  assert.equal(context.createPattern(image, 'no-repeat').repeat, 'no-repeat');
  assert.deepEqual(retained, [1, 1, 1, 1]);
});

test('OffscreenCanvas drawImage snapshots close after flush', () => {
  const closed = [];
  let nextId = 1;
  let fail = true;
  const global = install((operation, ...args) => {
    if (operation === 'create') return { width: 4, height: 4 };
    if (operation === 'snapshotImageSync') return nextId++;
    if (operation === 'closeImage') closed.push(args[0]);
    if (operation === 'commit' && fail) {
      fail = false;
      throw new Error('commit failed');
    }
  });
  const source = new global.OffscreenCanvas(4, 4);
  const dest = new global.OffscreenCanvas(4, 4);
  const context = dest.getContext('2d');
  context.drawImage(source, 0, 0);
  assert.throws(() => dest.flush());
  assert.deepEqual(closed, [1]);
  context.drawImage(source, 0, 0);
  dest.flush();
  assert.deepEqual(closed, [1, 2]);
});

test('drawImage retains bitmap until after commit when owner closes', () => {
  const log = [];
  const global = install((operation, ...args) => {
    if (operation === 'create') return { width: 4, height: 4 };
    if (operation === 'transferToImageBitmap') return 7;
    if (operation === 'retainImage') log.push(['retainImage', args[0]]);
    if (operation === 'closeImage') log.push(['closeImage', args[0]]);
    if (operation === 'commit') log.push(['commit']);
  });
  const source = new global.OffscreenCanvas(4, 4);
  source.getContext('2d');
  const bitmap = source.transferToImageBitmap();
  const dest = new global.OffscreenCanvas(4, 4);
  const context = dest.getContext('2d');
  context.drawImage(bitmap, 0, 0);
  bitmap.close();
  dest.flush();
  assert.deepEqual(log, [
    ['retainImage', 7],
    ['closeImage', 7],
    ['commit'],
    ['closeImage', 7],
  ]);
});

test('invalid dash alpha and font are ignored; negative arc throws', () => {
  const global = install((operation) => {
    if (operation === 'create') return { width: 4, height: 4 };
  });
  const context = new global.OffscreenCanvas(4, 4).getContext('2d');
  context.globalAlpha = 2;
  assert.equal(context.globalAlpha, 1);
  context.setLineDash([1, -1]);
  assert.deepEqual(context.getLineDash(), []);
  context.setLineDash([1]);
  assert.deepEqual(context.getLineDash(), [1, 1]);
  context.font = 'not-a-font';
  assert.equal(context.font, '10px sans-serif');
  context.letterSpacing = 'wide';
  assert.equal(context.letterSpacing, '0px');
  assert.throws(() => context.arc(0, 0, -1, 0, 1));
  assert.throws(() => new global.ImageBitmap(), TypeError);
  assert.throws(() => new global.CanvasGradient(), TypeError);
  assert.throws(() => new global.OffscreenCanvasRenderingContext2D(), TypeError);
  new global.Path2D();
  new global.ImageData(1, 1);
});

test('getContext freezes attributes and setAlpha', () => {
  const ops = [];
  const global = install((operation, ...args) => {
    ops.push([operation, ...args]);
    if (operation === 'create') return { width: 4, height: 4 };
  });
  const canvas = new global.OffscreenCanvas(4, 4);
  const context = canvas.getContext('2d', { alpha: false });
  assert.equal(canvas.getContext('2d', { alpha: true }), context);
  assert.equal(context.getContextAttributes().alpha, false);
  assert.ok(ops.some((entry) => entry[0] === 'setAlpha'));
  const other = new global.OffscreenCanvas(4, 4);
  assert.equal(other.getContext('2d', { colorSpace: 'display-p3' }), null);
  const created = other.getContext('2d');
  assert.equal(other.getContext('2d', { colorSpace: 'display-p3' }), created);
});

test('gradient assigned then addColorStop is rewritten before fill', () => {
  const commits = [];
  const global = install((operation, ...args) => {
    if (operation === 'create') return { width: 10, height: 10 };
    if (operation === 'commit') commits.push(new Uint8Array(args[1]));
  });
  const canvas = new global.OffscreenCanvas(10, 10);
  const context = canvas.getContext('2d');
  const gradient = context.createLinearGradient(0, 0, 10, 10);
  context.fillStyle = gradient;
  gradient.addColorStop(0, 'black');
  gradient.addColorStop(1, 'white');
  context.fillRect(0, 0, 10, 10);
  canvas.flush();
  assert.equal(commits.length, 1);
  const ops = opcodes(commits[0]);
  assert.equal(ops.filter((op) => op === OP.setFillLinear).length, 2);
});

test('invalid CSS colors are ignored', () => {
  assert.equal(parseColor('rgb(foo, 0, 0)'), null);
  const ops = [];
  const global = install((operation, ...args) => {
    if (operation === 'create') return { width: 4, height: 4 };
    if (operation === 'commit') ops.push(...opcodes(args[1]));
  });
  const canvas = new global.OffscreenCanvas(4, 4);
  const context = canvas.getContext('2d');
  context.fillStyle = '#00ff00';
  context.fillStyle = 'rgb(foo, 0, 0)';
  assert.equal(context.fillStyle, '#00ff00');
  context.fillRect(0, 0, 1, 1);
  canvas.flush();
  assert.equal(ops.filter((op) => op === OP.setFillColor).length, 1);
});

test('current-path arc under CTM encodes pathExtend', () => {
  const commits = [];
  const global = install((operation, ...args) => {
    if (operation === 'create') return { width: 20, height: 20 };
    if (operation === 'commit') commits.push(new Uint8Array(args[1]));
  });
  const canvas = new global.OffscreenCanvas(20, 20);
  const context = canvas.getContext('2d');
  context.scale(2, 2);
  context.arc(5, 5, 3, 0, Math.PI);
  context.fill();
  canvas.flush();
  assert.equal(firstPathOp(commits[0]), PATH.extend);
  context.beginPath();
  context.resetTransform();
  context.arc(5, 5, 3, 0, Math.PI);
  context.fill();
  canvas.flush();
  assert.equal(firstPathOp(commits[1]), PATH.arc);
});

test('dead WeakRef sweep disposes surfaces and patterns', () => {
  const OriginalWeakRef = globalThis.WeakRef;
  const live = new Set();
  globalThis.WeakRef = class {
    constructor(target) {
      this.target = target;
      live.add(this);
    }
    deref() {
      return live.has(this) ? this.target : undefined;
    }
  };
  try {
    const ops = [];
    const global = install((operation) => {
      ops.push(operation);
      if (operation === 'create') return { width: 4, height: 4 };
      if (operation === 'snapshotImageSync') return 9;
    });
    const canvas = new global.OffscreenCanvas(4, 4);
    const context = canvas.getContext('2d');
    context.createPattern(canvas, 'repeat');
    live.clear();
    canvas.flush();
    assert.ok(ops.includes('disposeSurface'));
    assert.ok(ops.includes('closeImage'));
  } finally {
    globalThis.WeakRef = OriginalWeakRef;
  }
});

test('empty Path2D lineTo starts a subpath; roundRect rejects negative radii', () => {
  const global = install((operation) => {
    if (operation === 'create') return { width: 4, height: 4 };
  });
  const path = new global.Path2D();
  path.lineTo(10, 10);
  assert.deepEqual(path.current, [10, 10]);
  assert.deepEqual(path.subpathStart, [10, 10]);
  const quad = new global.Path2D();
  quad.quadraticCurveTo(1, 2, 3, 4);
  assert.deepEqual(quad.subpathStart, [1, 2]);
  assert.deepEqual(quad.current, [3, 4]);
  assert.throws(() => new global.Path2D().roundRect(0, 0, 10, 10, -1), RangeError);
  assert.throws(() => new global.Path2D().roundRect(0, 0, 10, 10, [1, -2]), RangeError);
});

test('ImageData rejects empty and mismatched sizes', () => {
  const global = install((operation) => {
    if (operation === 'create') return { width: 4, height: 4 };
  });
  assert.throws(
    () => new global.ImageData(0, 1),
    (error) => {
      return error.name === 'IndexSizeError' || error instanceof RangeError;
    },
  );
  assert.throws(
    () => new global.ImageData(1, 0),
    (error) => {
      return error.name === 'IndexSizeError' || error instanceof RangeError;
    },
  );
  assert.throws(
    () => new global.ImageData(new Uint8ClampedArray(8), 1, 1),
    (error) => error.name === 'IndexSizeError' || error instanceof RangeError,
  );
  const data = new global.ImageData(new Uint8ClampedArray(8), 2);
  assert.equal(data.width, 2);
  assert.equal(data.height, 1);
});

test('CanvasView hold keeps the OffscreenCanvas', () => {
  const global = install((operation) => {
    if (operation === 'create') return { width: 4, height: 4 };
  });
  const view = {};
  const canvas = new global.OffscreenCanvas(4, 4);
  holdCanvas(view, canvas);
  assert.equal(heldCanvas(view), canvas);
});

test('pattern cleanup does not use FinalizationRegistry', () => {
  const OriginalRegistry = globalThis.FinalizationRegistry;
  let constructed = 0;
  globalThis.FinalizationRegistry = class {
    constructor() {
      constructed++;
    }
    register() {}
  };
  try {
    const global = install((operation) => {
      if (operation === 'create') return { width: 4, height: 4 };
      if (operation === 'snapshotImageSync') return 9;
    });
    const canvas = new global.OffscreenCanvas(4, 4);
    canvas.getContext('2d').createPattern(canvas, 'repeat');
    assert.equal(constructed, 0);
  } finally {
    globalThis.FinalizationRegistry = OriginalRegistry;
  }
});

test('ImageBitmap close then sweep does not closeImage twice', () => {
  const OriginalWeakRef = globalThis.WeakRef;
  const live = new Set();
  globalThis.WeakRef = class {
    constructor(target) {
      this.target = target;
      live.add(this);
    }
    deref() {
      return live.has(this) ? this.target : undefined;
    }
  };
  try {
    const log = [];
    const global = install((operation, ...args) => {
      log.push([operation, args[0]]);
      if (operation === 'create') return { width: 1, height: 1 };
      if (operation === 'transferToImageBitmap') return 3;
    });
    const canvas = new global.OffscreenCanvas(1, 1);
    canvas.getContext('2d');
    const bitmap = canvas.transferToImageBitmap();
    bitmap.close();
    live.clear();
    canvas.flush();
    assert.equal(
      log.filter((entry) => entry[0] === 'closeImage' && entry[1] === 3).length,
      1,
    );
  } finally {
    globalThis.WeakRef = OriginalWeakRef;
  }
});

test('abandoned ImageBitmap sweep issues closeImage', () => {
  const OriginalWeakRef = globalThis.WeakRef;
  const live = new Set();
  globalThis.WeakRef = class {
    constructor(target) {
      this.target = target;
      live.add(this);
    }
    deref() {
      return live.has(this) ? this.target : undefined;
    }
  };
  try {
    const log = [];
    const global = install((operation, ...args) => {
      log.push(operation);
      if (operation === 'create') return { width: 1, height: 1 };
      if (operation === 'transferToImageBitmap') return 5;
    });
    const canvas = new global.OffscreenCanvas(1, 1);
    canvas.getContext('2d');
    canvas.transferToImageBitmap();
    live.clear();
    canvas.flush();
    assert.ok(log.includes('closeImage'));
  } finally {
    globalThis.WeakRef = OriginalWeakRef;
  }
});

test('non-finite geometry and a failed batch do not retry forever', async () => {
  let commits = 0,
    fail = true;
  const global = install((operation) => {
    if (operation === 'create') return { width: 4, height: 4 };
    if (operation === 'commit') {
      commits++;
      if (fail) throw Error('renderer failed');
    }
  });
  const canvas = new global.OffscreenCanvas(4, 4),
    c = canvas.getContext('2d');
  c.translate(NaN, 1);
  c.scale(Infinity, 1);
  c.setTransform({ a: Infinity });
  c.fillRect(NaN, 0, 1, 1);
  c.moveTo(NaN, 0);
  c.lineTo(Infinity, 0);
  canvas.flush();
  assert.equal(commits, 0);
  assert.equal(c.getTransform().a, 1);
  c.fillRect(0, 0, 1, 1);
  assert.throws(() => canvas.flush());
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(commits, 1);
  fail = false;
  c.fillRect(1, 0, 1, 1);
  canvas.flush();
  assert.equal(commits, 2);
});

test('matrix dictionaries, radii validation and text defaults', () => {
  const global = install((op) =>
    op === 'create' ? { width: 4, height: 4 } : undefined,
  );
  const c = new global.OffscreenCanvas(4, 4).getContext('2d');
  c.setTransform({ m11: 2, m41: 3 });
  assert.equal(c.getTransform().d, 1);
  assert.throws(() => c.setTransform({ a: 1, m11: 2 }), TypeError);
  c.setTransform({});
  assert.equal(c.getTransform().a, 1);
  const p = new global.Path2D();
  assert.throws(() => p.roundRect(0, 0, 2, 2, []), RangeError);
  assert.throws(() => p.roundRect(0, 0, 2, 2, { x: -1 }), RangeError);
  p.roundRect(0, 0, 2, 2, { x: 1, y: 2 });
  c.font = '0px sans-serif';
  assert.equal(c.font, '0px sans-serif');
  c.font = '-1px sans-serif';
  assert.equal(c.font, '0px sans-serif');
  c.lang = 'zh-CN';
  c.fontKerning = 'none';
  c.fontVariantCaps = 'small-caps';
  c.save();
  c.fontKerning = 'normal';
  c.restore();
  assert.equal(c.fontKerning, 'none');
  c.reset();
  assert.equal(c.lang, 'inherit');
  assert.equal(c.fontVariantCaps, 'normal');
});

test('bitmap crop options own their result and close clears dimensions', async () => {
  const global = {};
  let state;
  let next = 10;
  const calls = [];
  state = installCanvas(global, (operation, ...args) => {
    calls.push([operation, ...args]);
    if (operation === 'create') return { width: 2, height: 2 };
    if (operation === 'transferToImageBitmap') return 1;
    if (operation === 'cloneImage' || operation === 'transformImageBitmap') {
      state.settle(args[0], true, next++);
    }
  });
  const source = new global.OffscreenCanvas(2, 2);
  assert.throws(() => source.transferToImageBitmap());
  source.getContext('2d');
  const bitmap = source.transferToImageBitmap();
  const cropped = await global.createImageBitmap(bitmap, 0, 0, 1, 1, {
    resizeWidth: 2,
    imageOrientation: 'flipY',
  });
  assert.equal(cropped.width, 2);
  assert.equal(cropped.height, 2);
  assert.equal(bitmap.width, 2);
  assert.ok(calls.some((c) => c[0] === 'closeImage' && c[1] === 10));
  cropped.close();
  assert.equal(cropped.width, 0);
  assert.equal(cropped.height, 0);
  bitmap.close();
  await assert.rejects(global.createImageBitmap(bitmap));
});

test('font shorthand resolves absolute and Offscreen relative units', () => {
  assert.equal(
    canvasFont('italic 400 12pt / 2 "Test Font", SERIF'),
    'italic 16px "Test Font", serif',
  );
  assert.equal(canvasFont('1em sans-serif'), '10px sans-serif');
  assert.equal(canvasFont('2.54cm serif'), '96px serif');
  assert.equal(canvasFont('1e999px serif'), null);
  assert.equal(canvasFont('.5px serif'), '0.5px serif');
  assert.equal(canvasFont('0px serif'), '0px serif');
  assert.equal(canvasFont('bold12px serif'), null);
  assert.equal(canvasFont('12px "unclosed'), '12px "unclosed"');
  for (const invalid of [
    'garbage 10px serif',
    '12px inherit',
    '12px serif;',
    '10px/garbage serif',
  ]) {
    assert.equal(canvasFont(invalid), null, invalid);
  }
  assert.equal(cssLength('1e999em'), null);
  assert.equal(cssLength('3PX')?.css, '3px');
});

test('filter list preserves steps, defaults, clamping and drop-shadow alpha', () => {
  const filters = parseFilter('brightness(2) invert(200%) blur(2px) blur(3px)');
  assert.deepEqual(
    filters.map((step) => step.kind),
    [0, 0, 1, 1],
  );
  assert.equal(filters[0].values[0], 2);
  assert.equal(filters[1].values[0], -1);
  assert.deepEqual(parseFilter('drop-shadow(2px -3px 4px rgba(255, 0, 0, .5))'), [
    { kind: 2, values: [2, -3, 4, 1, 0, 0, 0.5] },
  ]);
  assert.deepEqual(parseFilter('blur()'), [{ kind: 1, values: [0] }]);
  for (const invalid of [
    '',
    'blur(.px)',
    'opacity(-1)',
    'blur(2)',
    'drop-shadow(1px 2px -1px red)',
    'blur(1px) junk',
    'brightness(1e999)',
  ]) {
    assert.equal(parseFilter(invalid), null, invalid);
  }
});

test('Offscreen filter em uses the default font style source at assignment', () => {
  const commits = [];
  const global = install((op, ...args) => {
    if (op === 'create') return { width: 1, height: 1 };
    if (op === 'commit') commits.push(new Uint8Array(args[1]));
  });
  const canvas = new global.OffscreenCanvas(1, 1),
    c = canvas.getContext('2d');
  c.font = '40px serif';
  c.filter = 'blur(1em)';
  canvas.flush();
  const bytes = commits[0],
    view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  for (let offset = 24; offset < bytes.length;) {
    const size = view.getUint32(offset + 4, true),
      start = offset + 8;
    if (view.getUint16(offset, true) === OP.setFilter) {
      const step = start + 4 + view.getUint32(start, true) + 4;
      assert.equal(view.getUint32(step, true), 1);
      assert.equal(view.getFloat64(step + 4, true), 10);
      return;
    }
    offset = start + size;
    offset += (8 - (offset % 8)) % 8;
  }
  assert.fail('missing filter packet');
});

test('Canvas contracts validate pixel types, settings, exceptions and matrix copies', () => {
  const global = install((op, ...args) => {
    if (op === 'create') return { width: args[0], height: args[1] };
  });
  const ctx = new global.OffscreenCanvas(20, 20).getContext('2d');
  const data = new global.ImageData(2, 1, {
    colorSpace: 'srgb',
    pixelFormat: 'rgba-unorm8',
  });
  assert.equal(data.colorSpace, 'srgb');
  assert.equal(data.pixelFormat, 'rgba-unorm8');
  assert.throws(() => {
    data.width = 5;
  }, TypeError);
  assert.throws(() => {
    data.data = new Uint8ClampedArray(8);
  }, TypeError);
  assert.throws(() => new global.ImageData(new Uint8Array(4), 1), TypeError);
  assert.throws(
    () => new global.ImageData(1, 1, { pixelFormat: 'rgba-float16' }),
    (e) => e.name === 'NotSupportedError',
  );
  assert.throws(
    () => ctx.putImageData({ width: 1, height: 1, data: [0, 0, 0, 0] }, 0, 0),
    TypeError,
  );
  assert.throws(() => ctx.getImageData(NaN, 0, 1, 1), TypeError);
  assert.throws(() => new global.OffscreenCanvas(-1, 1), TypeError);
  assert.throws(() => ctx.fill('invalid'), TypeError);
  const gradient = ctx.createLinearGradient(0, 0, 1, 1);
  assert.throws(
    () => gradient.addColorStop(-1, 'red'),
    (e) => e.name === 'IndexSizeError',
  );
  assert.throws(
    () => gradient.addColorStop(0, 'invalid'),
    (e) => e.name === 'SyntaxError',
  );
  gradient.addColorStop('0.5', 'red');
  let reads = 0;
  ctx.setTransform({
    get a() {
      ++reads;
      return '2';
    },
    m11: 2,
    d: 4,
    e: 4,
    f: 5,
  });
  assert.equal(reads, 1);
  const matrix = ctx.getTransform();
  const point = matrix.transformPoint({ x: 2, y: 3 });
  assert.deepEqual(point, { x: 8, y: 17, z: 0, w: 1 });
  assert.deepEqual(matrix.inverse().transformPoint(point), { x: 2, y: 3, z: 0, w: 1 });
  matrix.m11 = 9;
  assert.equal(matrix.a, 9);
  assert.equal(ctx.getTransform().a, 2);
  assert.equal(matrix.toFloat64Array().length, 16);
  assert(Number.isNaN(ctx.getTransform().scale(0).inverse().a));
  structuredClone(data.data.buffer, { transfer: [data.data.buffer] });
  assert.throws(
    () => ctx.putImageData(data, 0, 0),
    (e) => e.name === 'InvalidStateError',
  );
});

test('bitmap option ranges reject before decoding and ImageData draw uses image commands', async () => {
  const commits = [];
  const global = install((op, ...args) => {
    if (op === 'create') return { width: 8, height: 8 };
    if (op === 'commit') commits.push(...opcodes(args[1]));
    if (op.startsWith('createImageBitmap'))
      throw Error('Invalid options reached decode');
  });
  const data = new global.ImageData(1, 1);
  await assert.rejects(global.createImageBitmap(data, { resizeWidth: -1 }), TypeError);
  await assert.rejects(
    global.createImageBitmap(data, { resizeWidth: 0 }),
    (e) => e.name === 'InvalidStateError',
  );
  await assert.rejects(global.createImageBitmap(data, 0, 0, 0, 1), RangeError);
  const canvas = new global.OffscreenCanvas(8, 8),
    ctx = canvas.getContext('2d');
  ctx.drawImage(data, 0, 0);
  ctx.drawImage(data, 0, 0, 2, 2);
  ctx.drawImage(data, 0, 0, 1, 1, 2, 2, 4, 4);
  canvas.flush();
  assert.equal(commits.filter((op) => op === OP.drawImagePixels).length, 3);
  assert(!commits.includes(OP.putImageData));
});
