import test from 'node:test';
import assert from 'node:assert/strict';
import { MAGIC, CommandBuffer, OP, PATH } from '../dist/commands.js';
import { parseColor } from '../dist/color.js';
import { installCanvas, imageIdKey, holdCanvas, heldCanvas } from '../dist/canvas.js';

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
  assert.throws(() => context.createPattern(image, 'repeat-xy'), TypeError);
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
  const bitmap = new global.OffscreenCanvas(4, 4).transferToImageBitmap();
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
    canvas.transferToImageBitmap();
    live.clear();
    canvas.flush();
    assert.ok(log.includes('closeImage'));
  } finally {
    globalThis.WeakRef = OriginalWeakRef;
  }
});
