import assert from 'node:assert/strict';
import test from 'node:test';
import { BATTERY, DISCHARGE, OVERCHARGE, REACTOR } from '../src/content.ts';
import { Game } from '../src/game.ts';

const canvases = [];
const bitmaps = [];
let failHitBake = false;
let failProjectileBake = false;
class FakeContext {
  fills = [];
  measures = [];
  images = [];
  arcs = [];
  segments = [];
  transforms = [];
  rectangles = [];
  strokes = [];
  outlines = [];
  pathArcs = [];
  pathPoints = [];
  globalAlpha = 1;
  reset() {
    this.images = [];
    this.arcs = [];
    this.segments = [];
    this.globalAlpha = 1;
    this.rectangles = [];
    this.strokes = [];
    this.outlines = [];
  }
  scale(...values) {
    this.transforms.push(values);
  }
  save() {}
  restore() {}
  translate() {}
  rotate() {}
  rect() {}
  clip() {}
  fillRect(...args) {
    this.rectangles.push({ args, color: this.fillStyle });
  }
  strokeRect(...args) {
    this.outlines.push({ args, color: this.strokeStyle });
  }
  beginPath() {
    this.pathArcs = [];
    this.pathPoints = [];
  }
  arc(...args) {
    this.arcs.push(args);
    this.pathArcs.push(args);
  }
  stroke() {
    this.strokes.push({
      color: this.strokeStyle,
      width: this.lineWidth,
      cap: this.lineCap,
      alpha: this.globalAlpha,
      arcs: this.pathArcs.slice(),
      points: this.pathPoints.map((point) => point.slice()),
    });
  }
  fill() {}
  moveTo(...args) {
    this.pathPoints.push(args);
  }
  lineTo(...args) {
    this.segments.push(args);
    this.pathPoints.push(args);
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
    if (failProjectileBake && this.ctx.images.length === 128)
      throw new Error('projectile bake failed');
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
  const sourceProjectiles = atlas();
  const scene = new Scene({
    actors: image,
    floor: sourceFloor,
    projectiles: sourceProjectiles,
  });
  assert.equal(canvases.length, 4);
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
  assert.equal(canvases.length, 4);
  assert.equal(bitmaps.length, 3);
  assert.equal(baked.ctx.measures.length, 1);
  assert.equal(baked.ctx.fills.length, 1);
  assert.deepEqual(scene.canvas.ctx.measures, []);
  assert.deepEqual(scene.canvas.ctx.fills, []);
  scene.dispose();
  scene.dispose();
  assert.deepEqual(
    bitmaps.map((bitmap) => bitmap.closes),
    [1, 1, 1],
  );
  assert.equal(image.closes, 1);
  assert.equal(sourceFloor.closes, 1);
  assert.equal(sourceProjectiles.closes, 1);
});

test('failed HIT cache construction releases the floor and leaves atlas cleanup to the loader', () => {
  canvases.length = 0;
  bitmaps.length = 0;
  const image = atlas();
  const sourceFloor = atlas();
  const sourceProjectiles = atlas();
  failHitBake = true;
  try {
    assert.throws(
      () =>
        new Scene({
          actors: image,
          floor: sourceFloor,
          projectiles: sourceProjectiles,
        }),
      /HIT bake failed/,
    );
    assert.equal(bitmaps.length, 1);
    assert.equal(bitmaps[0].closes, 1);
    assert.equal(image.closes, 0);
    assert.equal(sourceFloor.closes, 0);
    assert.equal(sourceProjectiles.closes, 0);
  } finally {
    failHitBake = false;
    image.close();
    sourceFloor.close();
    sourceProjectiles.close();
  }
  assert.equal(image.closes, 1);
});

test('failed projectile baking releases both prior caches and leaves all inputs caller owned', () => {
  canvases.length = 0;
  bitmaps.length = 0;
  const assets = { actors: atlas(), floor: atlas(), projectiles: atlas() };
  failProjectileBake = true;
  try {
    assert.throws(() => new Scene(assets), /projectile bake failed/);
    assert.deepEqual(
      bitmaps.map((bitmap) => bitmap.closes),
      [1, 1],
    );
    assert.deepEqual(
      Object.values(assets).map((bitmap) => bitmap.closes),
      [0, 0, 0],
    );
  } finally {
    failProjectileBake = false;
    for (const bitmap of Object.values(assets)) bitmap.close();
  }
  assert.deepEqual(
    Object.values(assets).map((bitmap) => bitmap.closes),
    [1, 1, 1],
  );
});

test('all directional poses share one bounded bitmap and dense redraws create no resources', () => {
  canvases.length = 0;
  bitmaps.length = 0;
  const assets = { actors: atlas(), floor: atlas(), projectiles: atlas() };
  const scene = new Scene(assets);
  const poseCanvas = canvases.find((canvas) => canvas.ctx.images.length === 128);
  assert.ok(poseCanvas);
  assert.deepEqual([poseCanvas.width, poseCanvas.height], [1024, 2048]);
  const game = new Game(9),
    { x, y } = game.player;
  game.projectiles = Array.from({ length: 300 }, (_, id) => ({
    id,
    kind: id % 4 === 3 ? 'enemy' : 'bolt',
    mode: id % 4 === 1 ? 'pierce' : id % 4 === 2 ? 'blast' : undefined,
    x: x + (id % 20),
    y,
    radius: 6,
    vx: Math.cos(id) * 300,
    vy: Math.sin(id) * 300,
    life: 1,
  }));
  for (let frame = 0; frame < 120; frame++) {
    scene.draw(game, frame % 2 ? 'balanced' : 'detailed', 1920, 960);
    assert.equal(
      scene.canvas.ctx.images.filter((call) => call.args[0] === scene.projectilePoses)
        .length,
      300,
    );
  }
  assert.equal(canvases.length, 4);
  assert.equal(bitmaps.length, 3);
  assert.equal(poseCanvas.ctx.images.length, 128, 'poses are baked once');
  assets.actors.close = function () {
    this.closes++;
    throw Error('released host');
  };
  scene.dispose();
  scene.dispose();
  assert.deepEqual(
    bitmaps.map((bitmap) => bitmap.closes),
    [1, 1, 1],
  );
  assert.deepEqual(
    Object.values(assets).map((bitmap) => bitmap.closes),
    [1, 1, 1],
  );
});

test('floor variants stay deterministic across seeds and cap full-arena terrain at fifteen draws', () => {
  const sourceFloor = atlas(),
    image = atlas();
  const scene = new Scene({ actors: image, floor: sourceFloor, projectiles: atlas() });
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
  const scene = new Scene({ actors: atlas(), floor: atlas(), projectiles: atlas() });
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
  assert.equal(initial.length, 1, 'only one functional shockwave');
  assert.deepEqual(initial[0].slice(0, 2), [1550, 880]);
  game.pause();
  for (let frame = 0; frame < 120; frame++) assert.deepEqual(at(10), initial);
  assert.equal(context.segments.length, 4, 'brief angular local flash');
  assert.equal(at(10.2).length, 1, 'local flash ends within 140 ms');
  assert.equal(context.segments.length, 0);
  assert.equal(at(10.4)[0][2], 170, 'ring reaches the actual combat radius');
  assert.equal(at(10.4, true).length, 1, 'reduced motion keeps one quiet ring');
  assert.equal(context.segments.length, 0);
  assert.equal(at(10.5).length, 0, 'all Pulse work ends after 500 ms of simulation');
  scene.events([{ type: 'pulse', x: 10, y: 20 }], false, 'balanced', game.elapsed);
  scene.clearEffects();
  assert.equal(at(10.5).length, 0, 'restart clears an unexpired burst');
  game.player.pulseCooldown = 1.5;
  game.player.weapons.orbit = 4;
  const before = JSON.stringify(game);
  assert.equal(at(10.5).length, 0, 'cooldown and Orbit do not add decorative rings');
  assert.equal(at(10.5, true).length, 0);
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

test('Overcharge gathers at its fixed origin before the burst and bounds discharge work', () => {
  const scene = new Scene({ actors: atlas(), floor: atlas(), projectiles: atlas() });
  const game = new Game(7);
  const context = scene.canvas.ctx;
  const { x, y } = game.player;
  const draw = (elapsed, reduced = false) => {
    game.elapsed = elapsed;
    scene.draw(game, 'balanced', 960, 960, reduced);
    return context.arcs.filter((arc) => arc[0] === x && arc[1] === y);
  };
  scene.events([{ type: 'overchargeWindup', x, y }], false, 'balanced', 10);
  assert.equal(draw(10).length, 0, 'windup uses inward chevrons, without rings');
  const gathering = context.segments.map((point) => point.slice());
  assert.equal(gathering.length, 8);
  game.player.x += 30;
  draw(10.15);
  assert.ok(
    context.segments[0][0] < gathering[0][0],
    'gather inward at the original point',
  );
  draw(10, true);
  const reducedWindup = context.segments.map((point) => point.slice());
  draw(10.15, true);
  assert.deepEqual(
    context.segments,
    reducedWindup,
    'reduced windup stays readable and static',
  );

  const arcs = Array.from({ length: 12 }, (_, i) => ({ x: x + 50 + i, y: y + 30 }));
  scene.events([{ type: 'overcharge', x, y, arcs }], false, 'balanced', 10.2);
  const burst = draw(10.21);
  assert.equal(burst.length, 1, 'one shockwave before the discharge trails');
  assert.equal(context.segments.length, 4, 'a short angular flash at the origin');
  const wave = draw(10.6);
  assert.ok(
    wave.some((arc) => arc[2] === OVERCHARGE.radius),
    'wave reaches the combat radius',
  );
  assert.deepEqual(
    context.segments.filter(([tx, ty]) => ty === y + 30 && tx >= x + 50),
    arcs.slice(0, OVERCHARGE.maxArcs).map((arc) => [arc.x, arc.y]),
    'render at most five target trails',
  );
  assert.equal(draw(10.59, true).length, 1, 'reduced motion keeps a quiet ring');
  assert.equal(context.segments.length, 0);
  assert.equal(scene.sparks.length, 0);
  scene.clearEffects();
  assert.equal(draw(10.59).length, 0, 'restart removes live overcharge cues');
  scene.dispose();
});

test('kills retain a distinct capped impact when hit feedback is full, without reduced-motion sparks', () => {
  const image = { ...atlas(), width: 600, height: 600 };
  const scene = new Scene({ actors: image, floor: atlas(), projectiles: atlas() });
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

test('battery cascades have a fixed visual budget, freeze through resize and clear on restart', () => {
  const scene = new Scene({ actors: atlas(), floor: atlas(), projectiles: atlas() });
  const game = new Game(7);
  const { x, y } = game.player;
  const events = Array.from({ length: 200 }, (_, i) => ({
    type: i % 2 === 0 ? 'boltBlast' : 'batteryBlast',
    x,
    y,
    radius: BATTERY.radius,
  }));
  scene.events(events, false, 'detailed', 10);
  assert.equal(scene.blasts.length, 6);
  assert.equal(scene.sparks.length, 0, 'cascades do not get another particle pool');
  game.elapsed = 10.2;
  scene.draw(game, 'detailed');
  const fragments = scene.canvas.ctx.segments.map((point) => point.slice());
  assert.equal(scene.canvas.ctx.arcs.length, 0, 'explosions add no radius rings');
  assert.equal(
    fragments.length,
    48,
    'at most six impacts with four two-line shards each',
  );
  for (const [tx, ty] of fragments)
    assert.ok(Math.hypot(tx - x, ty - y) <= 42, 'impacts stay local');
  game.pause();
  game.setViewport(1280, 720);
  scene.draw(game, 'balanced', 1600, 800);
  assert.deepEqual(
    scene.canvas.ctx.segments,
    fragments,
    'paused resizing preserves simulation age',
  );
  scene.draw(game, 'balanced', 1600, 800, true);
  assert.equal(
    scene.canvas.ctx.segments.length,
    48,
    'reduced motion keeps static local shards',
  );
  game.elapsed = 10.3;
  scene.draw(game, 'balanced');
  assert.equal(scene.blasts.length, 0);
  scene.events(events, true, 'balanced', game.elapsed);
  scene.clearEffects();
  scene.draw(game, 'balanced');
  assert.equal(scene.canvas.ctx.arcs.length, 0);
  assert.equal(scene.canvas.ctx.segments.length, 0);
  scene.dispose();
});

test('encounters have distinct bodies, exact danger boundaries and readable evolved bolts without text work', () => {
  const image = atlas();
  const scene = new Scene({ actors: image, floor: atlas(), projectiles: atlas() });
  const game = new Game(8);
  const { x, y } = game.player;
  const base = { hp: 100, maxHp: 100, radius: 30, angle: 0, warning: 0, hit: 0 };
  game.enemies = [
    { ...base, id: 501, kind: 'battery', x: x + 100, y },
    { ...base, id: 502, kind: 'nest', x: x - 180, y, warning: 1 },
  ];
  game.activeDischarge = {
    x: x + 60,
    y: y + 20,
    radius: DISCHARGE.radius,
    started: 0,
    expiresAt: 20,
  };
  game.dischargeTick = 0;
  const context = scene.canvas.ctx;
  scene.draw(game, 'balanced');
  assert.ok(
    context.rectangles.some((call) => call.color === '#fff0aa'),
    'battery has a bright capacitor core',
  );
  assert.ok(
    context.rectangles.some((call) => call.color === '#252e3b' && call.args[2] === 66),
    'nest uses a stationary tower silhouette',
  );
  assert.ok(
    context.outlines.some((call) => call.color === '#77909c'),
    'cover has solid outlined geometry',
  );
  assert.equal(
    context.arcs.length,
    0,
    'batteries and nests have no decorative radius rings',
  );
  const checkBoundary = (color) => {
    const boundaries = context.strokes.filter(
      (call) => call.color === color && call.points.length === 9,
    );
    assert.equal(boundaries.length, 1, 'one angular danger boundary');
    const points = boundaries[0].points;
    const field = game.discharge;
    for (let i = 0; i < 8; i++) {
      const [ax, ay] = points[i],
        [bx, by] = points[i + 1];
      const edgeDistance =
        Math.abs((bx - ax) * (ay - field.y) - (by - ay) * (ax - field.x)) /
        Math.hypot(bx - ax, by - ay);
      assert.ok(
        edgeDistance >= field.radius + game.player.radius - 1e-7,
        'every edge encloses the actual hazard plus player collision radius',
      );
    }
  };
  checkBoundary('#ffac58');
  const before = JSON.stringify(game);
  game.tick = 90;
  game.elapsed = 1.5;
  scene.draw(game, 'balanced', 960, 960, true);
  checkBoundary('#ff8157');
  assert.ok(
    context.strokes.some((call) => call.color === '#ffd6a3'),
    'reduced motion keeps static active lightning',
  );
  game.tick = 120;
  game.elapsed = 2;
  scene.draw(game, 'balanced');
  assert.ok(
    context.strokes.some((call) => call.color === '#756482'),
    'rest has a quiet dormant boundary',
  );
  game.tick = 0;
  game.elapsed = 0;
  assert.equal(JSON.stringify(game), before, 'drawing does not mutate encounter state');
  game.enemies = [];
  game.activeDischarge = undefined;
  game.projectiles = ['pierce', 'blast'].map((mode, i) => ({
    id: 600 + i,
    kind: 'bolt',
    x: x + i * 60,
    y,
    vx: 570,
    vy: 0,
    radius: 4,
    life: 1,
    mode,
  }));
  scene.draw(game, 'balanced');
  const flight = context.images.filter(
    (call) => call.args[0] === scene.projectilePoses,
  );
  assert.deepEqual(
    flight.map((call) => call.args.slice(1, 5)),
    [
      [0, 4 * 128, 128, 128],
      [0, 8 * 128, 128, 128],
    ],
    'rail and burst use distinct image silhouettes',
  );
  assert.deepEqual(
    flight.map((call) => call.args.slice(7)),
    [
      [89.6, 89.6],
      [80, 80],
    ],
    'evolved heads are larger while reusing the original cached source cells',
  );
  assert.equal(context.arcs.length, 0, 'even evolved bolts add no projectile rings');
  scene.events([{ type: 'boltBlast', x, y, radius: 64 }], false, 'balanced', 0);
  scene.draw(game, 'balanced');
  const impact = context.strokes.find((call) => call.color === '#83ffff');
  assert.equal(
    impact.points.length,
    12,
    'burst impact keeps four local angular shards',
  );
  assert.equal(impact.arcs.length, 0);
  for (const [px, py] of impact.points) assert.ok(Math.hypot(px - x, py - y) <= 42);
  scene.clearEffects();
  game.projectiles = [];
  game.enemies = [{ ...base, id: 503, kind: 'nest', x: 3100, y }];
  for (const [width, height] of [
    [960, 540],
    [1280, 720],
  ]) {
    game.setViewport(width, height);
    scene.draw(game, 'balanced');
    assert.equal(
      context.segments.length,
      6,
      'offscreen nest keeps its diamond and direction arrow',
    );
    const camera = game.camera;
    for (const [tx, ty] of context.segments) {
      assert.ok(tx > camera.x + 80 && tx < camera.x + camera.width - 80);
      assert.ok(ty > camera.y + 80 && ty < camera.y + camera.height - 80);
    }
    assert.equal(
      context.rectangles.some((call) => call.color === '#252e3b'),
      false,
      'offscreen nest body is culled',
    );
  }
  assert.deepEqual(context.measures, []);
  assert.deepEqual(context.fills, []);
  scene.dispose();
});

test('projectile heads follow velocity and retain finite stationary, edge and source-order draws', () => {
  const scene = new Scene({ actors: atlas(), floor: atlas(), projectiles: atlas() });
  const game = new Game(9);
  const { x, y } = game.player;
  const shot = (id, vx, vy, radius = 6) => ({
    id,
    kind: 'enemy',
    x: x + id * 20,
    y,
    vx,
    vy,
    radius,
    life: 1,
  });
  game.projectiles = [
    shot(1, 100, 0),
    shot(2, -100, 100),
    { ...shot(3, 100, 0), kind: 'bolt' },
    shot(4, 0, -100, 3),
    shot(5, 0, 0, 3),
    { ...shot(6, -100, 0), x: game.camera.x - 31 },
    { ...shot(7, -100, 0), x: game.camera.x - 33 },
    { ...shot(8, 100, 0), kind: 'bolt', mode: 'pierce', x: game.camera.x - 40 },
    { ...shot(9, 100, 0), kind: 'bolt', mode: 'blast', x: game.camera.x - 38 },
    { ...shot(10, 100, 0), kind: 'bolt', mode: 'pierce', x: game.camera.x - 46 },
    { ...shot(11, 100, 0), kind: 'bolt', mode: 'blast', x: game.camera.x - 41 },
  ];
  const before = JSON.stringify(game);
  for (const quality of ['balanced', 'detailed'])
    for (const reduced of [false, true]) {
      scene.draw(game, quality, 960, 960, reduced);
      const context = scene.canvas.ctx;
      const draws = context.images.filter(
        (call) => call.args[0] === scene.projectilePoses,
      );
      assert.equal(
        draws.length,
        8,
        'the culling margin retains the whole cached trail',
      );
      assert.deepEqual(
        draws.map((call) => (call.args[2] / 128) * 8 + call.args[1] / 128),
        [96, 108, 0, 120, 96, 112, 32, 64],
      );
      const visibleShots = game.projectiles.filter(
        (shot) => ![7, 10, 11].includes(shot.id),
      );
      for (let i = 0; i < draws.length; i++) {
        const args = draws[i].args,
          shot = visibleShots[i];
        assert.ok(args.slice(1).every(Number.isFinite));
        assert.equal(
          args[5] + args[7] / 2,
          shot.x,
          'the luminous head stays at the projectile position',
        );
        assert.equal(args[6] + args[8] / 2, shot.y);
        assert.ok(args[7] >= shot.radius * 2);
      }
      assert.deepEqual(
        draws.map((call) => call.args[7]),
        [64, 64, 64, 64, 64, 64, 89.6, 80],
      );
      assert.equal(context.arcs.length, 0, 'shots add no circular dot paths');
      assert.equal(
        context.strokes.some((call) =>
          ['#ffb132', '#58eaff', '#cbffff'].includes(call.color),
        ),
        false,
        'flight uses the artwork without opaque line fallbacks',
      );
    }
  assert.equal(
    JSON.stringify(game),
    before,
    'rendering preserves combat and trajectory data',
  );
  scene.dispose();
});

test('reactor plate fits inside capture reach, uses a linear meter and clears angular success effects', () => {
  const scene = new Scene({ actors: atlas(), floor: atlas(), projectiles: atlas() });
  const game = new Game(9);
  const { x, y } = game.player;
  game.activeReactor = { x, y, radius: REACTOR.radius, progress: 0.5, expiresAt: 30 };
  const context = scene.canvas.ctx;
  scene.draw(game, 'balanced');
  const plate = context.strokes.find((call) => call.color === '#c4904d');
  assert.equal(plate.points.length, 7);
  for (const [tx, ty] of plate.points)
    assert.ok(Math.hypot(tx - x, ty - y) <= REACTOR.radius + 1e-7);
  const progress = context.rectangles.find(
    (call) => call.color === '#ffcc65' && call.args[3] === 6,
  );
  assert.equal(progress.args[2], REACTOR.radius * 0.5);
  assert.equal(context.arcs.length, 0, 'capture meter is linear');
  scene.events(
    [
      { type: 'reactorCapture', x, y },
      { type: 'shieldBreak', x, y },
    ],
    true,
    'balanced',
    0,
  );
  scene.draw(game, 'balanced', 960, 960, true);
  const effects = context.strokes.filter(
    (call) => call.color === '#ecc4ff' || call.color === '#ffcc65',
  );
  assert.equal(effects.length, 2);
  assert.ok(
    effects.every((call) => call.points.length === 12 && call.arcs.length === 0),
  );
  scene.clearEffects();
  scene.draw(game, 'balanced', 960, 960, true);
  assert.equal(
    context.strokes.some(
      (call) => call.color === '#ecc4ff' || call.color === '#ffcc65',
    ),
    false,
  );
  scene.dispose();
});
