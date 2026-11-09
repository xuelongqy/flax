import assert from 'node:assert/strict';
import test from 'node:test';
import { Game } from '../src/game.ts';

const canvases = [];
const bitmaps = [];
let failHitBake = false;
class FakeContext {
  fills = [];
  measures = [];
  images = [];
  arcs = [];
  segments = [];
  transforms = [];
  rectangles = [];
  globalAlpha = 1;
  reset() {
    this.images = [];
    this.arcs = [];
    this.segments = [];
    this.globalAlpha = 1;
    this.rectangles = [];
  }
  scale(...values) {
    this.transforms.push(values);
  }
  save() {}
  restore() {}
  translate() {}
  fillRect(...args) {
    this.rectangles.push({ args, color: this.fillStyle });
  }
  strokeRect() {}
  beginPath() {}
  arc(...args) {
    this.arcs.push(args);
  }
  stroke() {}
  fill() {}
  moveTo() {}
  lineTo(...args) {
    this.segments.push(args);
  }
  measureText(text) {
    this.measures.push({ text, font: this.font });
    return {
      width: 72,
      actualBoundingBoxLeft: 2,
      actualBoundingBoxRight: 70,
      actualBoundingBoxAscent: 36,
      actualBoundingBoxDescent: 4,
    };
  }
  fillText(text, x, y) {
    this.fills.push({ text, x, y, font: this.font, color: this.fillStyle });
  }
  drawImage(...args) {
    this.images.push({ args, alpha: this.globalAlpha });
  }
}
globalThis.OffscreenCanvas = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.ctx = new FakeContext();
    canvases.push(this);
  }
  getContext() {
    return this.ctx;
  }
  transferToImageBitmap() {
    if (failHitBake && this.ctx.fills.some((call) => call.text === 'HIT'))
      throw new Error('HIT bake failed');
    const bitmap = {
      width: this.width,
      height: this.height,
      closes: 0,
      close() {
        this.closes++;
      },
    };
    bitmaps.push(bitmap);
    return bitmap;
  }
};
const { Scene } = await import('../src/scene.ts');
function atlas() {
  return {
    width: 400,
    height: 200,
    closes: 0,
    close() {
      this.closes++;
    },
  };
}

test('HIT is baked once at identity and reused with the same baseline, size, fade and disposal', () => {
  canvases.length = 0;
  bitmaps.length = 0;
  const image = atlas();
  const sourceFloor = atlas();
  const scene = new Scene({ actors: image, floor: sourceFloor });
  assert.equal(canvases.length, 3);
  const floorCanvas = canvases.find((canvas) => canvas.width === 1280);
  assert.ok(floorCanvas);
  assert.equal(
    floorCanvas.ctx.images.filter((call) => call.args[0] === sourceFloor).length,
    4,
  );
  const baked = canvases.find((canvas) =>
    canvas.ctx.fills.some((call) => call.text === 'HIT'),
  );
  assert.ok(baked);
  assert.deepEqual(baked.ctx.measures, [{ text: 'HIT', font: 'bold 48px sans-serif' }]);
  assert.deepEqual(baked.ctx.transforms, []);
  assert.deepEqual([baked.width, baked.height], [82, 48]);
  assert.deepEqual(baked.ctx.fills, [
    { text: 'HIT', x: 6, y: 40, font: 'bold 48px sans-serif', color: '#fff2c7' },
  ]);
  const hit = bitmaps[1];
  const game = new Game(1);
  scene.events([{ type: 'hit', x: 1600, y: 900 }], true, 'balanced', game.elapsed);
  scene.draw(game, 'balanced');
  const first = scene.canvas.ctx.images.find((call) => call.args[0] === hit);
  assert.deepEqual(first.args.slice(1), [1606.5, 870, 20.5, 12]);
  assert.equal(first.alpha, 1);
  scene.draw(game, 'detailed');
  const second = scene.canvas.ctx.images.find((call) => call.args[0] === hit);
  assert.equal(second.args[0], first.args[0]);
  assert.equal(second.args[1], 1606.5);
  assert.ok(Math.abs(second.args[2] - 869.5) < 1e-9);
  assert.deepEqual(second.args.slice(3), [20.5, 12]);
  assert.ok(Math.abs(second.alpha - 14 / 15) < 1e-9);
  assert.equal(canvases.length, 3);
  assert.equal(bitmaps.length, 2);
  assert.equal(baked.ctx.measures.length, 1);
  assert.equal(baked.ctx.fills.length, 1);
  assert.deepEqual(scene.canvas.ctx.measures, []);
  assert.deepEqual(scene.canvas.ctx.fills, []);
  scene.dispose();
  scene.dispose();
  assert.deepEqual(
    bitmaps.map((bitmap) => bitmap.closes),
    [1, 1],
  );
  assert.equal(image.closes, 1);
  assert.equal(sourceFloor.closes, 1);
});

test('failed HIT cache construction releases the floor and leaves atlas cleanup to the loader', () => {
  canvases.length = 0;
  bitmaps.length = 0;
  const image = atlas();
  const sourceFloor = atlas();
  failHitBake = true;
  try {
    assert.throws(
      () => new Scene({ actors: image, floor: sourceFloor }),
      /HIT bake failed/,
    );
    assert.equal(bitmaps.length, 1);
    assert.equal(bitmaps[0].closes, 1);
    assert.equal(image.closes, 0);
    assert.equal(sourceFloor.closes, 0);
  } finally {
    failHitBake = false;
    image.close();
    sourceFloor.close();
  }
  assert.equal(image.closes, 1);
});

test('floor variants stay deterministic across seeds and cap full-arena terrain at fifteen draws', () => {
  const sourceFloor = atlas(),
    image = atlas();
  const scene = new Scene({ actors: image, floor: sourceFloor });
  const game = new Game(1);
  game.setViewport(3200, 1800);
  scene.draw(game, 'balanced');
  const terrain = () =>
    scene.canvas.ctx.images
      .filter((call) => call.args[0] === scene.floor)
      .map((call) => call.args.slice(1));
  const first = terrain();
  assert.equal(first.length, 15);
  assert.equal(new Set(first.map((call) => `${call[0]},${call[1]}`)).size, 4);
  const second = new Game(999);
  second.setViewport(3200, 1800);
  scene.draw(second, 'detailed');
  assert.deepEqual(terrain(), first);
  assert.deepEqual(scene.canvas.ctx.measures, []);
  assert.deepEqual(scene.canvas.ctx.fills, []);
  scene.dispose();
});

test('Pulse uses simulation time, freezes on paused redraws and bounds its normal and reduced cues', () => {
  const scene = new Scene({ actors: atlas(), floor: atlas() });
  const game = new Game(7);
  const context = scene.canvas.ctx;
  const at = (elapsed, reduced = false) => {
    game.elapsed = elapsed;
    scene.draw(game, 'balanced', 960, 960, reduced);
    return context.arcs.map((arc) => arc.slice());
  };
  scene.events([{ type: 'pulse', x: 1550, y: 880 }], false, 'balanced', 10);
  assert.equal(
    scene.sparks.length,
    0,
    'Pulse has one bounded effect, no extra spark pool',
  );
  const initial = at(10);
  assert.equal(initial.length, 3, 'ring, core and echo');
  assert.deepEqual(initial[0].slice(0, 2), [1550, 880]);
  game.pause();
  for (let frame = 0; frame < 120; frame++) assert.deepEqual(at(10), initial);
  assert.equal(context.segments.length, 8);
  assert.equal(at(10.2).length, 2, 'core ends within 140 ms');
  assert.equal(at(10.4)[0][2], 170, 'ring reaches the actual combat radius');
  assert.equal(at(10.4, true).length, 1, 'reduced motion keeps one quiet ring');
  assert.equal(context.segments.length, 0);
  assert.equal(at(10.5).length, 0, 'all Pulse work ends after 500 ms of simulation');
  scene.events([{ type: 'pulse', x: 10, y: 20 }], false, 'balanced', game.elapsed);
  scene.clearEffects();
  assert.equal(at(10.5).length, 0, 'restart clears an unexpired burst');
  game.player.pulseCooldown = 1.5;
  const before = JSON.stringify(game);
  assert.equal(at(10.5).length, 3, 'three charge arcs only in the final 1.5 seconds');
  assert.equal(at(10.5, true).length, 0, 'reduced motion suppresses charge arcs');
  assert.equal(
    JSON.stringify(game),
    before,
    'drawing does not mutate combat or random state',
  );
  game.player.pulseCooldown = 1.6;
  assert.equal(at(10.5).length, 0);
  scene.dispose();
  assert.equal(scene.pulse, undefined);
});

test('kills retain a distinct capped impact when hit feedback is full, without reduced-motion sparks', () => {
  const image = { ...atlas(), width: 600, height: 600 };
  const scene = new Scene({ actors: image, floor: atlas() });
  const game = new Game(1);
  scene.events(
    Array.from({ length: 40 }, () => ({ type: 'hit', x: 1600, y: 900 })),
    true,
    'balanced',
    0,
  );
  scene.events([{ type: 'kill', x: 1600, y: 900 }], true, 'balanced', 0);
  scene.draw(game, 'balanced', 960, 960, true);
  assert.equal(scene.flashes.length, 40);
  assert.equal(scene.sparks.length, 0);
  assert.ok(
    scene.canvas.ctx.images.some(
      (call) =>
        call.args[0] === image &&
        call.args[1] === 500 &&
        call.args[2] === 500 &&
        call.args[7] > 26,
    ),
  );
  game.enemies = [
    {
      id: 99,
      kind: 'pursuer',
      x: 1700,
      y: 900,
      radius: 15,
      hp: 10,
      maxHp: 25,
      hit: 0.1,
      angle: 0,
      warning: 0,
    },
  ];
  scene.draw(game, 'balanced');
  assert.ok(scene.canvas.ctx.rectangles.some((call) => call.color === '#fff4d2'));
  scene.clearEffects();
  assert.equal(scene.flashes.length, 0);
  scene.dispose();
});
