import assert from 'node:assert/strict';
import test from 'node:test';
import { Game } from '../src/game.ts';
class Context {
  images = [];
  stack = [];
  sx = 1;
  rotation = 0;
  matrix = [1, 0, 0, 1, 0, 0];
  reset() {
    this.images = [];
    this.sx = 1;
    this.rotation = 0;
    this.matrix = [1, 0, 0, 1, 0, 0];
    this.stack = [];
  }
  save() {
    this.stack.push([this.sx, this.rotation, this.matrix.slice()]);
  }
  restore() {
    [this.sx, this.rotation, this.matrix] = this.stack.pop();
  }
  scale(x, y) {
    this.sx *= x;
    this.matrix[0] *= x;
    this.matrix[1] *= x;
    this.matrix[2] *= y;
    this.matrix[3] *= y;
  }
  rotate(a) {
    this.rotation += a;
    const [xx, yx, xy, yy] = this.matrix;
    const cos = Math.cos(a),
      sin = Math.sin(a);
    this.matrix[0] = xx * cos + xy * sin;
    this.matrix[1] = yx * cos + yy * sin;
    this.matrix[2] = xy * cos - xx * sin;
    this.matrix[3] = yy * cos - yx * sin;
  }
  translate(x, y) {
    this.matrix[4] += this.matrix[0] * x + this.matrix[2] * y;
    this.matrix[5] += this.matrix[1] * x + this.matrix[3] * y;
  }
  fillRect() {}
  strokeRect() {}
  beginPath() {}
  arc() {}
  stroke() {}
  fill() {}
  moveTo() {}
  lineTo() {}
  fillText() {}
  measureText() {
    return {
      width: 72,
      actualBoundingBoxLeft: 0,
      actualBoundingBoxRight: 72,
      actualBoundingBoxAscent: 36,
      actualBoundingBoxDescent: 4,
    };
  }
  drawImage(...args) {
    const [x, y, width, height] = args.slice(args.length === 9 ? 5 : 1);
    const [a, b, c, d, e, f] = this.matrix;
    const quad = [
      [x, y],
      [x + width, y],
      [x + width, y + height],
      [x, y + height],
    ].map(([px, py]) => [a * px + c * py + e, b * px + d * py + f]);
    this.images.push({ args, flip: this.sx < 0, rotation: this.rotation, quad });
  }
}
globalThis.OffscreenCanvas = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.ctx = new Context();
  }
  getContext() {
    return this.ctx;
  }
  transferToImageBitmap() {
    return { width: this.width, height: this.height, close() {} };
  }
};
const { Scene } = await import('../src/scene.ts');
function setup() {
  const actors = { width: 600, height: 600, close() {} };
  const scene = new Scene({ actors, floor: { width: 640, height: 640, close() {} } });
  const game = new Game(1);
  const draws = () =>
    scene.canvas.ctx.images.filter((d) => d.args[0] === actors && d.args[2] < 500);
  const hero = () => draws().find((d) => d.args[1] === 0);
  return { scene, game, draws, hero };
}
test('projectile fill reuse preserves visible draw order across frames', () => {
  const { scene, game } = setup();
  const { x, y } = game.player;
  const enemy = { kind: 'enemy', y, radius: 5, vx: 0, vy: 0, life: 1 };
  game.projectiles.push(
    { ...enemy, id: 1, x: -1000 },
    { ...enemy, id: 2, x: x - 30 },
    { ...enemy, id: 3, x, kind: 'bolt', vx: 1, vy: 1 },
    { ...enemy, id: 4, x: x + 30 },
  );
  const context = scene.canvas.ctx;
  let color;
  let arc;
  let assignments = 0;
  const paints = [];
  Object.defineProperty(context, 'fillStyle', {
    get: () => color,
    set(value) {
      color = value;
      if (color === '#ffb132') assignments++;
    },
  });
  const rotate = context.rotate.bind(context);
  context.rotate = (angle) => {
    paints.push(['bolt', angle]);
    rotate(angle);
  };
  context.arc = (...values) => (arc = values);
  context.fill = () => paints.push(['enemy', color, ...arc]);
  scene.draw(game, 'balanced');
  scene.draw(game, 'balanced');
  scene.dispose();

  const frame = [
    ['enemy', '#ffb132', x - 30, y, 5, 0, Math.PI * 2],
    ['bolt', Math.PI / 4],
    ['enemy', '#ffb132', x + 30, y, 5, 0, Math.PI * 2],
  ];
  assert.equal(assignments, 2);
  assert.deepEqual(paints, [...frame, ...frame]);
});

test('upright actors choose all eight movement directions, retain idle and reset on restart', () => {
  const { scene, game, hero } = setup();
  scene.draw(game, 'balanced');
  for (const [angle, row, flip] of [
    [0, 0, false],
    [Math.PI / 4, 3, false],
    [Math.PI / 2, 4, false],
    [(Math.PI * 3) / 4, 3, true],
    [Math.PI, 0, true],
    [(-Math.PI * 3) / 4, 1, true],
    [-Math.PI / 2, 2, false],
    [-Math.PI / 4, 1, false],
  ]) {
    game.player.x += Math.cos(angle) * 10;
    game.player.y += Math.sin(angle) * 10;
    scene.draw(game, 'balanced');
    assert.equal(hero().args[2] / 100, row);
    assert.equal(hero().flip, flip);
    assert.equal(hero().rotation, 0, 'characters remain upright');
    scene.draw(game, 'detailed');
    assert.equal(hero().args[2] / 100, row);
    assert.equal(hero().flip, flip);
  }
  scene.clearEffects();
  scene.draw(game, 'balanced');
  assert.equal(hero().args[2], 0);
  assert.equal(hero().flip, false);
  scene.dispose();
});
test('direction boundaries use nearest octant; attack aim overrides hero movement', () => {
  const { scene, game, hero } = setup();
  scene.draw(game, 'balanced');
  for (const [angle, row] of [
    [Math.PI / 8 - 1e-6, 0],
    [Math.PI / 8 + 1e-6, 3],
    [-Math.PI / 8 - 1e-6, 1],
    [-Math.PI / 8 + 1e-6, 0],
  ]) {
    game.player.x += Math.cos(angle) * 10;
    game.player.y += Math.sin(angle) * 10;
    scene.draw(game, 'balanced');
    assert.equal(hero().args[2] / 100, row);
  }
  game.enemies.push({
    id: 99,
    kind: 'pursuer',
    x: game.player.x + 60,
    y: game.player.y,
    radius: 15,
    hp: 25,
    maxHp: 25,
    angle: Math.PI,
    warning: 0,
    hit: 0,
  });
  game.player.x -= 10;
  scene.draw(game, 'balanced');
  assert.equal(hero().args[2], 0);
  assert.equal(hero().flip, false);
  scene.dispose();
});
test('actor depth uses a sorted copy, culls offscreen bodies and tracks enemy motion or sentry aim', () => {
  const { scene, game, draws } = setup();
  const base = {
    radius: 15,
    hp: 25,
    maxHp: 25,
    angle: Math.PI,
    warning: 0,
    hit: 0,
    x: game.player.x + 100,
  };
  const front = { ...base, id: 1, kind: 'pursuer', y: game.player.y + 30 };
  const back = { ...base, id: 2, kind: 'flanker', y: game.player.y - 30 };
  const sentry = {
    ...base,
    id: 3,
    kind: 'sentry',
    x: game.player.x - 120,
    y: game.player.y + 60,
    angle: -Math.PI / 2,
  };
  game.enemies.push(front, back, sentry, {
    ...base,
    id: 4,
    kind: 'brute',
    x: -1000,
    y: -1000,
  });
  scene.draw(game, 'balanced');
  back.x += 10;
  scene.draw(game, 'balanced');
  assert.deepEqual(
    draws().map((d) => d.args[1] / 100),
    [2, 0, 1, 4],
  );
  assert.deepEqual(
    game.enemies.map((e) => e.id),
    [1, 2, 3, 4],
  );
  assert.equal(draws()[0].args[2], 0, 'flanker uses actual east motion');
  assert.equal(draws().at(-1).args[2], 200, 'sentry tracks north aim');
  assert.equal(scene.facings.size, 5);
  game.enemies.splice(0, game.enemies.length);
  scene.draw(game, 'balanced');
  assert.equal(scene.facings.size, 1);
  scene.dispose();
  assert.equal(scene.facings.size, 0);
});

test('exact half-octant ties choose the clockwise yaw and actor draws leave simulation unchanged', () => {
  const { scene, game, draws } = setup();
  const sentry = {
    id: 88,
    kind: 'sentry',
    x: game.player.x + 100,
    y: game.player.y,
    radius: 18,
    hp: 57,
    maxHp: 57,
    angle: 0,
    warning: 0,
    hit: 0,
  };
  game.enemies.push(sentry);
  for (const [angle, row, flip] of [
    [Math.PI / 8, 3, false],
    [-Math.PI / 8, 0, false],
    [(Math.PI * 7) / 8, 0, true],
    [(-Math.PI * 7) / 8, 1, true],
  ]) {
    sentry.angle = angle;
    const before = JSON.stringify(game);
    scene.draw(game, 'balanced');
    const sprite = draws().find((d) => d.args[1] === 400);
    assert.equal(sprite.args[2] / 100, row);
    assert.equal(sprite.flip, flip);
    assert.equal(JSON.stringify(game), before);
  }
  scene.dispose();
});

test('sprite cells preserve source proportions and effects use their dedicated final row', () => {
  const actors = { width: 600, height: 360, close() {} };
  const scene = new Scene({ actors, floor: { width: 640, height: 640, close() {} } });
  const game = new Game(3);
  game.player.weapons.orbit = 1;
  game.pickups.push({
    id: 10,
    x: game.player.x + 10,
    y: game.player.y,
    radius: 8,
    value: 1,
  });
  game.projectiles.push({
    id: 11,
    kind: 'bolt',
    x: game.player.x + 20,
    y: game.player.y,
    vx: 100,
    vy: 0,
    radius: 4,
    life: 1,
  });
  scene.events(
    [
      { type: 'hit', x: game.player.x, y: game.player.y },
      {
        type: 'chain',
        x: game.player.x,
        y: game.player.y,
        toX: game.player.x + 100,
        toY: game.player.y,
      },
      { type: 'pulse', x: game.player.x, y: game.player.y },
    ],
    true,
    'balanced',
    game.elapsed,
  );
  scene.draw(game, 'balanced');
  const sprites = scene.canvas.ctx.images.filter((d) => d.args[0] === actors);
  for (const sprite of sprites)
    assert.ok(Math.abs(sprite.args[7] / sprite.args[8] - 100 / 60) < 1e-9);
  const effects = sprites.filter((d) => d.args[2] === 300).map((d) => d.args[1] / 100);
  assert.deepEqual([...new Set(effects)].sort(), [0, 1, 2, 3, 5]);
  for (const [rank, count] of [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 6],
  ]) {
    game.player.weapons.orbit = rank;
    scene.draw(game, 'balanced');
    assert.equal(
      scene.canvas.ctx.images.filter(
        (draw) =>
          draw.args[0] === actors && draw.args[1] === 200 && draw.args[2] === 300,
      ).length,
      count,
    );
  }
  assert.equal(
    scene.sparks.length,
    0,
    'reduced motion retains cues while omitting particles',
  );
  scene.dispose();
});

test('mixed sprites preserve world quads through camera scaling, mirroring and rotation', () => {
  const actors = { width: 600, height: 360, close() {} };
  const scene = new Scene({ actors, floor: { width: 640, height: 640, close() {} } });
  const game = new Game(4);
  game.player.weapons.bolt = 0;
  const { x, y } = game.player;
  game.enemies.push({
    id: 1,
    kind: 'sentry',
    x: x + 80,
    y: y + 40,
    radius: 18,
    hp: 57,
    maxHp: 57,
    angle: Math.PI,
    warning: 0,
    hit: 0,
  });
  game.pickups.push(
    { id: 2, x: x - 100, y: y + 20, radius: 8, value: 1 },
    { id: 3, x: -1000, y: -1000, radius: 8, value: 1 },
  );
  game.projectiles.push({
    id: 4,
    kind: 'bolt',
    x: x + 60,
    y: y - 40,
    vx: 0,
    vy: 100,
    radius: 4,
    life: 1,
  });
  const before = JSON.stringify(game);
  for (const [viewWidth, viewHeight, physicalWidth, logicalWidth] of [
    [960, 540, 960, 960],
    [1280, 720, 1600, 800],
  ]) {
    game.setViewport(viewWidth, viewHeight);
    scene.draw(game, 'detailed', physicalWidth, logicalWidth);
    const sprites = scene.canvas.ctx.images.filter((d) => d.args[0] === actors);
    assert.equal(sprites.length, 4, 'offscreen pickup is culled');
    const expected = [
      [0, 300, x - 100, y + 20, 30, 18, false, 0],
      [0, 0, x, y, 72, 43.2, false, 0],
      [400, 0, x + 80, y + 40, 70, 42, true, 0],
      [100, 300, x + 60, y - 40, 26, 15.6, false, Math.PI / 2],
    ];
    const camera = game.camera;
    const scaleX = scene.canvas.width / camera.width;
    const scaleY = scene.canvas.height / camera.height;
    for (let i = 0; i < sprites.length; i++) {
      const [sx, sy, centerX, centerY, width, height, flip, angle] = expected[i];
      assert.deepEqual(sprites[i].args.slice(1, 5), [sx, sy, 100, 60]);
      const corners = [
        [-width / 2, -height / 2],
        [width / 2, -height / 2],
        [width / 2, height / 2],
        [-width / 2, height / 2],
      ];
      for (let corner = 0; corner < 4; corner++) {
        const [dx, dy] = corners[corner];
        const wx =
          centerX + (flip ? -1 : 1) * (dx * Math.cos(angle) - dy * Math.sin(angle));
        const wy = centerY + dx * Math.sin(angle) + dy * Math.cos(angle);
        const point = [(wx - camera.x) * scaleX, (wy - camera.y) * scaleY];
        for (let axis = 0; axis < 2; axis++)
          assert.ok(Math.abs(sprites[i].quad[corner][axis] - point[axis]) < 1e-9);
      }
    }
    assert.equal(scene.canvas.ctx.stack.length, 0);
  }
  game.setViewport(960, 540);
  assert.equal(JSON.stringify(game), before);
  scene.dispose();
});
