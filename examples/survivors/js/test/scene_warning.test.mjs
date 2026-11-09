import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { Game } from '../src/game.ts';

class FakeContext {
  lines = [];
  reset() {
    this.lines = [];
  }
  scale() {}
  save() {}
  restore() {}
  translate() {}
  fillRect() {}
  strokeRect() {}
  beginPath() {}
  arc() {}
  stroke() {}
  fill() {}
  drawImage() {}
  measureText() {
    return {
      width: 72,
      actualBoundingBoxLeft: 0,
      actualBoundingBoxRight: 72,
      actualBoundingBoxAscent: 36,
      actualBoundingBoxDescent: 4,
    };
  }
  fillText() {}
  moveTo(x, y) {
    this.start = [x, y];
  }
  lineTo(x, y) {
    this.lines.push(Math.atan2(y - this.start[1], x - this.start[0]));
  }
}
globalThis.OffscreenCanvas = class {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.ctx = new FakeContext();
  }
  getContext() {
    return this.ctx;
  }
  transferToImageBitmap() {
    return { width: this.width, height: this.height, close() {} };
  }
};
const { Scene } = await import('../src/scene.ts');
const idle = { x: 0, y: 0, pulse: false };
const norm = (angles) =>
  angles
    .map((a) => ((a % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI))
    .sort((a, b) => a - b);
function sameAngles(actual, expected) {
  const a = norm(actual),
    b = norm(expected);
  assert.equal(a.length, b.length);
  for (let i = 0; i < a.length; i++)
    assert.ok(Math.abs(a[i] - b[i]) < 1e-7, `${a[i]} vs ${b[i]}`);
}
function waitFor(game, predicate) {
  for (let i = 0; i < 2000; i++) {
    if (predicate()) return;
    game.step(idle);
  }
  assert.fail('Expected guardian event did not occur');
}

test('both presets draw actual locked volley lanes before and after phase crossing', () => {
  const game = new Game(23);
  game.tick = 25199;
  game.elapsed = game.tick / 60;
  game.player.hp = game.player.maxHp = 100000;
  game.player.weapons.bolt = 0;
  game.step(idle);
  const guardian = game.enemies.find((e) => e.kind === 'guardian');
  assert.ok(guardian);
  game.enemies = [guardian];
  game.spawnAt = Infinity;
  game.player.x = guardian.x;
  game.player.y = guardian.y;
  const scene = new Scene({
    actors: { width: 600, height: 600, close() {} },
    floor: { width: 640, height: 640, close() {} },
  });
  waitFor(
    game,
    () => guardian.warning > 0 && game.guardianRadialAngles(guardian.id)?.length === 12,
  );
  const first = [...game.guardianRadialAngles(guardian.id)];
  guardian.hp = guardian.maxHp * 0.4;
  for (const quality of ['balanced', 'detailed']) {
    scene.draw(game, quality, 960, 960);
    sameAngles(scene.canvas.ctx.lines, first);
  }
  waitFor(game, () => game.projectiles.some((p) => p.kind === 'enemy'));
  sameAngles(
    game.projectiles
      .filter((p) => p.kind === 'enemy')
      .map((p) => Math.atan2(p.vy, p.vx)),
    first,
  );
  game.projectiles.length = 0;
  waitFor(
    game,
    () => guardian.warning > 0 && game.guardianRadialAngles(guardian.id)?.length === 18,
  );
  const second = [...game.guardianRadialAngles(guardian.id)];
  for (const quality of ['balanced', 'detailed']) {
    scene.draw(game, quality, 960, 960);
    sameAngles(scene.canvas.ctx.lines, second);
  }
  waitFor(game, () => game.projectiles.some((p) => p.kind === 'enemy'));
  sameAngles(
    game.projectiles
      .filter((p) => p.kind === 'enemy')
      .map((p) => Math.atan2(p.vy, p.vx)),
    second,
  );
  scene.dispose();
});
