import assert from 'node:assert/strict';
import test from 'node:test';
import { Game } from '../src/game.ts';
import { ENEMIES } from '../src/content.ts';
import {
  createReplay,
  recordInput,
  recordUpgrade,
  recordPause,
  runReplay,
  recordViewport,
} from '../src/replay.ts';

const idle = { x: 0, y: 0, pulse: false };
function enemy(id, kind, x, y, hp = 100) {
  return {
    id,
    kind,
    x,
    y,
    hp,
    maxHp: hp,
    radius: kind === 'guardian' ? 46 : 15,
    angle: 0,
    warning: 0,
    hit: 0,
  };
}
function advance(game, ticks, input = idle) {
  for (let i = 0; i < ticks; i++) game.step(input);
}
function state(game) {
  return JSON.stringify({
    phase: game.phase,
    tick: game.tick,
    player: game.player,
    enemies: game.enemies,
    projectiles: game.projectiles,
    pickups: game.pickups,
    xp: game.xp,
    kills: game.kills,
    guardiansDefeated: game.guardiansDefeated,
    score: game.score,
    reason: game.endReason,
    viewport: [game.viewWidth, game.viewHeight],
    camera: game.camera,
  });
}

test('pause freezes time, cooldown and entities and preserves upgrade selection', () => {
  const game = new Game(7);
  game.player.pulseCooldown = 4;
  game.pause();
  const before = state(game);
  advance(game, 90, { x: 1, y: 1, pulse: true });
  assert.equal(state(game), before);
  game.resume();
  game.xp = 100;
  game.step(idle);
  assert.equal(game.phase, 'upgrade');
  const offers = structuredClone(game.offers);
  game.pause();
  game.setViewport(1200, 700);
  game.resume();
  assert.equal(game.phase, 'upgrade');
  assert.deepEqual(game.offers, offers);
});

test('diagonal input has the same speed as cardinal input and cannot leave the arena', () => {
  const a = new Game(2);
  const b = new Game(2);
  const x = a.player.x;
  const y = a.player.y;
  a.step({ x: 1, y: 0, pulse: false });
  b.step({ x: 1, y: 1, pulse: false });
  assert.ok(
    Math.abs(Math.hypot(b.player.x - x, b.player.y - y) - (a.player.x - x)) < 1e-9,
  );
  b.player.x = 3190;
  b.player.y = 1790;
  b.step({ x: 1, y: 1, pulse: false });
  assert.ok(b.player.x <= 3200 - b.player.radius);
  assert.ok(b.player.y <= 1800 - b.player.radius);
});

test('pulse damages and pushes nearby enemies, gates cooldown and requires a fresh press', () => {
  const game = new Game(3);
  game.player.hp = game.player.maxHp = 100000;
  game.enemies = [enemy(999, 'brute', game.player.x + 60, game.player.y, 100000)];
  game.step({ x: 0, y: 0, pulse: true });
  assert.ok(game.enemies[0].hp < 100000);
  assert.ok(game.enemies[0].x > game.player.x + 60);
  assert.ok(game.player.pulseCooldown > 7.9);
  let pulses = 1;
  for (let i = 0; i < 500; i++) {
    game.step({ x: 0, y: 0, pulse: true });
    pulses += game.events.filter((event) => event.type === 'pulse').length;
  }
  assert.equal(pulses, 1);
  game.step(idle);
  game.step({ x: 0, y: 0, pulse: true });
  assert.ok(game.events.some((event) => event.type === 'pulse'));
});

test('upgrades are distinct, eligible, reject stale choices and resolve queued levels', () => {
  const fresh = new Game(45);
  fresh.xp = fresh.xpNeeded;
  fresh.step(idle);
  assert.equal(fresh.offers.length, 3);
  assert.equal(new Set(fresh.offers.map((offer) => offer.id)).size, 3);
  assert.deepEqual(fresh.offers.map((offer) => offer.id).sort(), [
    'weapon:bolt',
    'weapon:chain',
    'weapon:orbit',
  ]);
  const game = new Game(44);
  game.player.weapons = { bolt: 4, orbit: 0, chain: 4 };
  game.player.passives = { fireRate: 3, moveSpeed: 3, pickupRadius: 3, maxHealth: 3 };
  game.xp = 100;
  game.step(idle);
  assert.equal(game.phase, 'upgrade');
  assert.deepEqual(
    game.offers.map((offer) => offer.id),
    ['weapon:orbit'],
  );
  assert.equal(game.chooseUpgrade('weapon:bolt'), false);
  assert.equal(game.chooseUpgrade('weapon:orbit'), true);
  assert.equal(game.player.weapons.orbit, 1);
  assert.equal(game.phase, 'upgrade');
  assert.equal(game.offers[0].rank, 2);
  while (game.phase === 'upgrade')
    assert.equal(game.chooseUpgrade(game.offers[0].id), true);
  assert.equal(game.phase, 'playing');
  assert.ok(game.level > 2);
  assert.ok(game.xp < game.xpNeeded);
});

test('capped upgrades yield one repair and maximum health upgrades add current health', () => {
  const game = new Game(9);
  game.player.weapons = { bolt: 4, orbit: 4, chain: 4 };
  game.player.passives = { fireRate: 3, moveSpeed: 3, pickupRadius: 3, maxHealth: 2 };
  game.player.hp = 30;
  game.xp = game.xpNeeded;
  game.step(idle);
  assert.equal(game.offers[0].id, 'passive:maxHealth');
  const oldMax = game.player.maxHp;
  game.chooseUpgrade(game.offers[0].id);
  assert.equal(game.player.hp, 30 + game.player.maxHp - oldMax);
  game.xp = game.xpNeeded;
  game.step(idle);
  assert.equal(game.offers.length, 1);
  assert.equal(game.offers[0].kind, 'repair');
  const hp = game.player.hp;
  game.chooseUpgrade(game.offers[0].id);
  assert.ok(game.player.hp > hp);
});

test('only health ends a run and a guardian reward cannot revive a same-tick death', () => {
  for (const [hp, bossHp, reason, phase] of [
    [0, 0, 'health', 'lost'],
    [50, 0, null, 'playing'],
    [100, 100, null, 'playing'],
  ]) {
    const game = new Game(8);
    game.tick = 28799;
    game.elapsed = game.tick / 60;
    game.xpNeeded = 1000;
    game.player.hp = hp;
    game.enemies = [enemy(999, 'guardian', 2400, 1000, bossHp)];
    game.step(idle);
    assert.equal(game.phase, phase);
    assert.equal(game.endReason, reason);
    assert.equal(game.elapsed, 480);
    assert.equal(game.player.hp, hp === 50 ? 70 : hp);
    assert.equal(
      game.events.some((event) => event.type === 'guardian'),
      hp === 50,
    );
    assert.equal(game.score, game.kills + 4800);
  }
  const collision = new Game(9);
  collision.player.hp = 5;
  collision.player.weapons.bolt = 0;
  collision.enemies = [
    enemy(100, 'guardian', 2400, 1000, 0),
    enemy(101, 'brute', collision.player.x, collision.player.y, 1000),
  ];
  collision.step(idle);
  assert.equal(collision.phase, 'lost');
  assert.equal(collision.player.hp, 0);
  assert.equal(
    collision.events.some((event) => event.type === 'guardian'),
    false,
  );
});

test('bolts choose stable nearest targets and kills leave collectable experience', () => {
  const game = new Game(4);
  game.enemies = [
    enemy(20, 'pursuer', game.player.x + 80, game.player.y, 1),
    enemy(10, 'pursuer', game.player.x - 80, game.player.y, 1),
  ];
  game.step(idle);
  assert.ok(game.projectiles[0].vx < 0);
  advance(game, 12);
  assert.equal(game.kills, 1);
  assert.ok(game.pickups.length > 0 || game.xp > 0);
});

test('the guardian arrives early, telegraphs attacks and changes phase below half health', () => {
  const game = new Game(23);
  game.tick = 7199;
  game.elapsed = game.tick / 60;
  game.player.hp = game.player.maxHp = 100000;
  game.player.weapons.bolt = 0;
  game.step(idle);
  const guardian = game.enemies.find((value) => value.kind === 'guardian');
  assert.ok(guardian);
  let warning = false;
  const tells = new Set();
  let shots = false;
  for (let i = 0; i < 400; i++) {
    game.step(idle);
    warning ||= guardian.warning > 0;
    if (guardian.warning > 0) tells.add(game.guardianAttack(guardian.id));
    shots ||= game.projectiles.some((value) => value.kind === 'enemy');
  }
  assert.ok(warning && shots);
  assert.deepEqual([...tells].sort(), ['charge', 'radial']);
  guardian.hp = guardian.maxHp * 0.4;
  const startX = guardian.x;
  const startY = guardian.y;
  advance(game, 300);
  assert.ok(Math.hypot(guardian.x - startX, guardian.y - startY) > 100);
});

test('ordinary waves continue beyond eight minutes within strict populations', () => {
  const game = new Game(19);
  game.player.hp = game.player.maxHp = 1000000;
  game.player.weapons.bolt = 0;
  let maximum = [0, 0, 0];
  for (let i = 0; i < 36000; i++) {
    game.step(idle);
    maximum = [
      Math.max(maximum[0], game.enemies.length),
      Math.max(maximum[1], game.projectiles.length),
      Math.max(maximum[2], game.pickups.length),
    ];
  }
  assert.equal(game.phase, 'playing');
  assert.equal(game.endReason, null);
  assert.equal(game.elapsed, 600);
  assert.ok(
    maximum[0] <= 200 && maximum[1] <= 300 && maximum[2] <= 150,
    maximum.join(','),
  );
});

test('fixed-seed tick replay reproduces health, score and end state across rendering batches', () => {
  const seed = 144;
  const game = new Game(seed);
  const replay = createReplay(seed);
  let frames = 0;
  while (game.phase !== 'lost' && game.tick < 36000) {
    if (game.phase === 'upgrade') {
      const id = game.offers[0].id;
      recordUpgrade(replay, game.tick, id);
      game.chooseUpgrade(id);
    } else {
      const input = {
        x: Math.sin(game.tick / 150),
        y: Math.cos(game.tick / 150),
        pulse: game.tick % 520 === 0,
      };
      recordInput(replay, game.tick, input);
      game.step(input);
      frames++;
    }
  }
  replay.ticks = game.tick;
  assert.ok(frames > 1000);
  const one = runReplay(JSON.parse(JSON.stringify(replay)), 1);
  const three = runReplay(replay, 3);
  assert.equal(state(one), state(game));
  assert.equal(state(three), state(game));
  assert.ok(['playing', 'upgrade', 'lost'].includes(one.phase));
  assert.throws(() => runReplay({ ...replay, contentVersion: 'future' }), /version/i);
  assert.throws(() => runReplay({ ...replay, inputs: [[0, NaN, 0, false]] }), /input/i);
});

test('pulse becomes ready exactly eight seconds after activation', () => {
  const game = new Game(70);
  game.player.hp = game.player.maxHp = 100000;
  game.step({ ...idle, pulse: true });
  advance(game, 479);
  assert.ok(game.player.pulseCooldown > 0);
  game.step({ ...idle, pulse: true });
  assert.ok(game.events.some((event) => event.type === 'pulse'));
});

test('orbit and chain defeat a guardian without ending the run and ready Pulse', () => {
  const game = new Game(71);
  game.player.weapons = { bolt: 0, orbit: 1, chain: 1 };
  game.enemies = [
    enemy(900, 'guardian', game.player.x + 70, game.player.y, 20),
    enemy(901, 'brute', game.player.x + 130, game.player.y, 100),
  ];
  game.player.hp = 50;
  game.player.pulseCooldown = 6;
  game.step(idle);
  assert.ok(['playing', 'upgrade'].includes(game.phase));
  assert.equal(game.endReason, null);
  assert.equal(game.guardiansDefeated, 1);
  assert.equal(game.player.hp, 70);
  assert.equal(game.player.pulseCooldown, 0);
  assert.equal(game.kills, 1);
  assert.ok(game.enemies[0].hp < 100);
  assert.ok(game.events.some((event) => event.type === 'chain'));
  assert.equal(game.score, 1);
  assert.ok(game.events.some((event) => event.type === 'guardian'));
});

test('weapon ranks retain an aimed bolt in distinct fans and eligible offers retain a weapon', () => {
  for (const [rank, count] of [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
  ]) {
    const game = new Game(rank);
    game.player.weapons.bolt = rank;
    game.enemies = [enemy(999, 'brute', game.player.x + 300, game.player.y, 10000)];
    game.step(idle);
    const angles = game.projectiles.map((shot) => Math.atan2(shot.vy, shot.vx));
    assert.equal(angles.length, count);
    assert.ok(angles.some((angle) => Math.abs(angle) < 1e-12));
    assert.ok(angles.every((angle) => Math.abs(angle) <= 0.24 + 1e-12));
    assert.equal(new Set(angles).size, count);
  }
  for (let seed = 1; seed <= 20; seed++) {
    const game = new Game(seed);
    game.level = 5;
    game.xp = game.xpNeeded;
    game.step(idle);
    assert.ok(game.offers.some((offer) => offer.kind === 'weapon'));
  }
});

test('bolt rank two defeats an isolated distant target at least as quickly as rank one', () => {
  const killTicks = [];
  for (const rank of [1, 2, 3, 4]) {
    const game = new Game(1);
    game.spawnAt = Infinity;
    game.player.weapons.bolt = rank;
    game.enemies = [enemy(10000, 'pursuer', game.player.x + 400, game.player.y, 25)];
    while (game.kills === 0 && game.tick < 180) game.step(idle);
    assert.equal(game.kills, 1);
    killTicks.push(game.tick);
  }
  assert.ok(
    killTicks[1] <= killTicks[0],
    `rank-one/two kill ticks: ${killTicks[0]}/${killTicks[1]}`,
  );
});

test('guardian scheduling defers at capacity, repeats after a clear and keeps ordinary spawns', () => {
  const game = new Game(22);
  game.player.weapons.bolt = 0;
  game.player.hp = game.player.maxHp = 100000;
  game.xpNeeded = 100000;
  game.tick = 7199;
  game.enemies = Array.from({ length: 200 }, (_, i) =>
    enemy(i + 1000, 'pursuer', 10, 10, 100000),
  );
  game.step(idle);
  assert.equal(game.enemies.length, 200);
  assert.equal(
    game.enemies.some((value) => value.kind === 'guardian'),
    false,
  );
  game.enemies[0].hp = 0;
  game.step(idle);
  game.step(idle);
  const guardian = game.enemies.find((value) => value.kind === 'guardian');
  assert.ok(guardian);
  assert.equal(game.enemies.length, 200);
  guardian.hp = 0;
  game.step(idle);
  assert.equal(game.guardiansDefeated, 1);
  game.enemies = [];
  game.pickups = [];
  game.xp = 0;
  game.xpNeeded = 100000;
  advance(game, 7200);
  game.enemies[0].hp = 0;
  game.step(idle);
  game.step(idle);
  assert.equal(game.enemies.filter((value) => value.kind === 'guardian').length, 1);
  assert.ok(game.enemies.some((value) => value.kind !== 'guardian'));
  assert.ok(game.enemies.length <= 200);
});

test('late difficulty, damage and repair thresholds reach finite ceilings', () => {
  const games = [1200, 1000000000].map((seconds) => {
    const game = new Game(33);
    game.tick = seconds * 60;
    game.elapsed = seconds;
    game.player.weapons = { bolt: 0, orbit: 0, chain: 0 };
    game.spawnEnemy('pursuer');
    game.player.hp = 100;
    game.enemies[0].x = game.player.x;
    game.enemies[0].y = game.player.y;
    game.step(idle);
    assert.ok(game.enemies.every((value) => Number.isFinite(value.maxHp)));
    assert.equal(game.enemies[0].maxHp, ENEMIES.pursuer.hp * 4);
    assert.equal(game.player.hp, 100 - ENEMIES.pursuer.damage * 1.6);
    game.player.weapons = { bolt: 4, orbit: 4, chain: 4 };
    game.player.passives = { fireRate: 3, moveSpeed: 3, pickupRadius: 3, maxHealth: 3 };
    game.level = 1000000000;
    game.xp = game.xpNeeded;
    game.step(idle);
    assert.equal(game.xpNeeded, 320);
    assert.equal(game.offers[0].id, 'repair');
    return game;
  });
  assert.equal(games[0].enemies[0].maxHp, games[1].enemies[0].maxHp);
});

test('replay accepts an endless trace past eight minutes with a separate finite work budget', () => {
  const replay = createReplay(14);
  recordViewport(replay, 0, 3200, 1800);
  replay.ticks = 36000;
  for (const batch of [1, 3]) {
    const game = runReplay(replay, batch);
    assert.equal(game.elapsed, 600);
    assert.equal(game.phase, 'playing');
  }
  assert.throws(() => runReplay({ ...replay, contentVersion: 'lumen-1' }), /version/i);
  assert.throws(() => runReplay({ ...replay, ticks: 4 * 3600 * 60 + 1 }), /tick/i);
});

test('replay pause boundaries preserve a fresh skill press after a held key', () => {
  const game = new Game(81);
  const replay = createReplay(81);
  const input = { x: 1, y: 0, pulse: true };
  for (let i = 0; i < 500; i++) {
    recordInput(replay, game.tick, input);
    game.step(input);
  }
  game.pause();
  game.resume();
  recordPause(replay, game.tick);
  recordInput(replay, game.tick, input);
  game.step(input);
  assert.ok(game.events.some((event) => event.type === 'pulse'));
  const played = runReplay(replay);
  assert.equal(state(played), state(game));
});

test('adaptive camera keeps the player visible at arena edges without changing actor scale', () => {
  const game = new Game(91);
  assert.equal(game.viewWidth, 960);
  assert.equal(game.viewHeight, 540);
  const positions = [
    [1600, 900],
    [14, 14],
    [3186, 14],
    [14, 1786],
    [3186, 1786],
    [14, 900],
    [3186, 900],
    [1600, 14],
    [1600, 1786],
  ];
  // Includes the agreed computed views for 6400x360 and 640x3600 layouts.
  for (const [width, height] of [
    [1280, 540],
    [960, 1200],
    [3200, 180],
    [320, 1800],
  ]) {
    game.setViewport(width, height);
    for (const [x, y] of positions) {
      game.player.x = x;
      game.player.y = y;
      const camera = game.camera;
      assert.deepEqual([camera.width, camera.height], [width, height]);
      assert.ok(camera.x >= 0 && camera.y >= 0);
      assert.ok(camera.x + width <= 3200 && camera.y + height <= 1800);
      assert.ok(
        x - game.player.radius >= camera.x &&
          x + game.player.radius <= camera.x + width,
      );
      assert.ok(
        y - game.player.radius >= camera.y &&
          y + game.player.radius <= camera.y + height,
      );
      assert.equal(game.player.radius, 14);
    }
  }
});

test('invalid viewport changes are rejected atomically without advancing combat', () => {
  const game = new Game(92);
  game.setViewport(1200, 700);
  const before = state(game);
  for (const dimensions of [
    [0, 540],
    [-1, 540],
    [960, 0],
    [NaN, 540],
    [960, Infinity],
    [3201, 540],
    [960, 1801],
  ]) {
    assert.throws(() => game.setViewport(...dimensions), /viewport/i);
    assert.equal(state(game), before);
  }
});

test('adaptive corner spawns stay outside the actual view and defer only without legal arena space', () => {
  for (const [width, height] of [
    [1280, 540],
    [960, 1200],
    [3200, 180],
    [320, 1800],
  ]) {
    for (const [x, y] of [
      [1600, 900],
      [14, 14],
      [3186, 14],
      [14, 1786],
      [3186, 1786],
    ]) {
      const game = new Game(93);
      game.setViewport(width, height);
      game.player.x = x;
      game.player.y = y;
      game.player.weapons.bolt = 0;
      for (let ticks = 0; ticks < 300 && !game.enemies.length; ticks++) game.step(idle);
      assert.ok(
        game.enemies.length > 0,
        `A legal spawn exists for ${width}x${height} at ${x},${y}`,
      );
      const camera = game.camera;
      for (const actor of game.enemies) {
        // The first pursuer step moves less than one unit after its 580-unit minimum spawn.
        assert.ok(Math.hypot(actor.x - x, actor.y - y) >= 579);
        assert.ok(actor.x - actor.radius >= 0 && actor.x + actor.radius <= 3200);
        assert.ok(actor.y - actor.radius >= 0 && actor.y + actor.radius <= 1800);
        assert.ok(
          actor.x + actor.radius <= camera.x ||
            actor.x - actor.radius >= camera.x + width ||
            actor.y + actor.radius <= camera.y ||
            actor.y - actor.radius >= camera.y + height,
        );
      }
    }
  }
  const covered = new Game(94);
  covered.setViewport(3200, 1800);
  advance(covered, 300);
  assert.equal(covered.enemies.length, 0);
  assert.equal(covered.tick, 300);
  covered.tick = 25199;
  covered.elapsed = covered.tick / 60;
  covered.step(idle);
  assert.equal(covered.enemies.length, 0);
  assert.equal(covered.phase, 'playing');
});

test('viewport history coalesces paused resizes and reproduces combat in batches one through three', () => {
  const game = new Game(144);
  const replay = createReplay(144);
  assert.deepEqual(replay.viewports, [[0, 960, 540]]);
  game.setViewport(1280, 540);
  recordViewport(replay, 0, 1280, 540);
  const changes = new Map([
    [400, [960, 1200]],
    [800, [3200, 180]],
    [1200, [320, 1800]],
    [1600, [960, 540]],
  ]);
  const resized = new Set();
  while (game.phase !== 'lost' && game.tick < 36000) {
    if (game.phase === 'upgrade') {
      const id = game.offers[0].id;
      recordUpgrade(replay, game.tick, id);
      game.chooseUpgrade(id);
      continue;
    }
    if (game.tick === 200)
      recordViewport(replay, game.tick, game.viewWidth, game.viewHeight);
    if (changes.has(game.tick) && !resized.has(game.tick)) {
      game.pause();
      recordPause(replay, game.tick);
      game.setViewport(1000, 600);
      recordViewport(replay, game.tick, 1000, 600);
      const [width, height] = changes.get(game.tick);
      game.setViewport(width, height);
      recordViewport(replay, game.tick, width, height);
      game.resume();
      resized.add(game.tick);
    }
    const input = {
      x: Math.sin(game.tick / 150),
      y: Math.cos(game.tick / 150),
      pulse: game.tick % 520 === 0,
    };
    recordInput(replay, game.tick, input);
    game.step(input);
  }
  assert.equal(resized.size, 4);
  assert.equal(replay.viewports.length, 5);
  for (const batch of [1, 2, 3])
    assert.equal(
      state(runReplay(JSON.parse(JSON.stringify(replay)), batch)),
      state(game),
    );
  assert.ok(['playing', 'upgrade', 'lost'].includes(game.phase));
});

test('replay rejects malformed or unbounded viewport history before playback', () => {
  const replay = createReplay(95);
  replay.ticks = 2;
  for (const viewports of [
    undefined,
    [],
    [[1, 960, 540]],
    [[0, NaN, 540]],
    [[0, 0, 540]],
    [[0, 3201, 540]],
    [[0, 960, 1801]],
    [
      [0, 960, 540],
      [1, 1200, 540],
      [1, 960, 1200],
    ],
    [
      [0, 960, 540],
      [3, 1200, 540],
    ],
    Array(28802).fill([0, 960, 540]),
  ]) {
    assert.throws(() => runReplay({ ...replay, viewports }), /viewport/i);
  }
  assert.throws(() => runReplay({ ...replay, version: 1 }), /version/i);
});

test('guardian radial warnings and volleys share exact directions across phases and a mid-warning threshold crossing', () => {
  for (const [initialHp, crossingHp, count] of [
    [1000, null, 12],
    [500, null, 18],
    [400, null, 18],
    [700, 400, 12],
  ]) {
    const game = new Game(201);
    game.player.hp = game.player.maxHp = 100000;
    game.player.weapons = { bolt: 0, orbit: 0, chain: 0 };
    const guardian = enemy(
      999,
      'guardian',
      game.player.x + 400,
      game.player.y + 70,
      initialHp,
    );
    guardian.maxHp = 1000;
    game.enemies = [guardian];
    for (let i = 0; i < 200 && guardian.warning === 0; i++) game.step(idle);
    assert.ok(guardian.warning > 0);
    assert.equal(game.guardianAttack(guardian.id), 'radial');
    const announced = game.guardianRadialAngles(guardian.id);
    assert.equal(announced.length, count);
    const angles = [...announced];
    if (crossingHp !== null) {
      advance(game, 15);
      guardian.hp = crossingHp;
      game.step(idle);
      assert.deepEqual(game.guardianRadialAngles(guardian.id), angles);
    }
    for (let i = 0; i < 100 && guardian.warning > 0; i++) game.step(idle);
    assert.equal(guardian.warning, 0);
    const fired = game.projectiles.filter((projectile) => projectile.kind === 'enemy');
    assert.equal(fired.length, count);
    for (let i = 0; i < count; i++) {
      const actual = Math.atan2(fired[i].vy, fired[i].vx);
      const difference = Math.atan2(
        Math.sin(actual - angles[i]),
        Math.cos(actual - angles[i]),
      );
      assert.ok(Math.abs(difference) < 1e-12);
    }
    assert.equal(game.guardianRadialAngles(guardian.id), undefined);
    if (crossingHp !== null) {
      for (let i = 0; i < 800; i++) {
        game.step(idle);
        if (guardian.warning > 0 && game.guardianAttack(guardian.id) === 'radial')
          break;
      }
      assert.equal(game.guardianRadialAngles(guardian.id).length, 18);
    }
  }
});
