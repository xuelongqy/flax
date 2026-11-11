import assert from 'node:assert/strict';
import test from 'node:test';
import { Game } from '../src/game.ts';
import { BATTERY, BOLT_EVOLUTION, DISCHARGE, ENEMIES, NEST, PLAYER } from '../src/content.ts';
import { overlapsCover } from '../src/arena.ts';
import { pilot } from '../src/acceptance.ts';
import { createReplay, recordInput, recordPause, recordUpgrade, runReplay } from '../src/replay.ts';

const idle = { x: 0, y: 0, pulse: false };
function quiet(seed = 7) {
  const game = new Game(seed);
  game.spawnAt = game.nextGuardianAt = game.nextNestAt = game.nextDischargeAt = Infinity;
  game.player.weapons = { bolt: 0, orbit: 0, chain: 0 };
  game.xpNeeded = 1000000000;
  return game;
}
function advance(game, ticks, input = idle) {
  for (let i = 0; i < ticks; i++) game.step(input);
}
function at(game, seconds) {
  game.tick = seconds * 60 - 1;
  game.elapsed = game.tick / 60;
}
function add(game, kind, x, y, hp = 1000) {
  const enemy = game.addEnemy(kind, x, y);
  assert.ok(enemy, `Legal ${kind} fixture at ${x},${y}`);
  enemy.hp = enemy.maxHp = hp;
  return enemy;
}
function snapshot(game) {
  return JSON.stringify({ tick: game.tick, phase: game.phase, player: game.player,
    enemies: game.enemies, projectiles: game.projectiles, pickups: game.pickups,
    kills: game.kills, xp: game.xp, level: game.level, offers: game.offers,
    covers: game.covers, reactor: game.reactor, discharge: game.discharge,
    dischargePhase: game.dischargePhase, guardians: game.guardiansDefeated });
}

test('a 200-battery cascade resolves completely once with bounded drops and no per-target hit events', () => {
  const game = quiet();
  for (let i = 0; i < 200; i++) add(game, 'battery', 2200, 900, ENEMIES.battery.hp);
  game.enemies[0].hp = 0;
  game.step(idle);
  assert.equal(game.kills, 200);
  assert.equal(game.enemies.length, 0);
  assert.equal(game.pickups.length, 150);
  assert.equal(game.pickups.reduce((sum, pickup) => sum + pickup.value, 0), 200 * ENEMIES.battery.xp);
  assert.equal(game.events.filter((event) => event.type === 'batteryBlast').length, 200);
  assert.equal(game.events.filter((event) => event.type === 'kill').length, 200);
  assert.equal(game.events.length, 400);
  assert.ok(game.events.filter((event) => event.type === 'batteryBlast').every((event) => event.radius === BATTERY.radius));
  game.step(idle);
  assert.equal(game.kills, 200);
  assert.equal(game.events.length, 0);
});

test('battery chains can clear a nest and Guardian, but rewards cannot rescue lethal player contact', () => {
  const game = quiet();
  game.player.hp = 5;
  add(game, 'battery', 1850, 930, 0);
  add(game, 'guardian', 1860, 930, 60);
  add(game, 'nest', 1880, 930, 60);
  add(game, 'brute', game.player.x, game.player.y);
  game.step(idle);
  assert.equal(game.kills, 3);
  assert.equal(game.guardiansDefeated, 1);
  assert.equal(game.nest, undefined);
  assert.equal(game.enemies.length, 1);
  assert.equal(game.phase, 'lost');
  assert.equal(game.player.hp, 0);
  assert.equal(game.xp, 0);
  assert.ok(game.events.some((event) => event.type === 'nestClear'));
  assert.ok(game.events.every((event) => event.type !== 'guardian'));
});

test('one stationary nest warns, summons deterministically within the cap and rewards a short spawn lull', () => {
  const games = [quiet(92), quiet(92)];
  for (const game of games) {
    game.nextNestAt = NEST.firstAt;
    at(game, NEST.firstAt);
    game.step(idle);
    const nest = game.nest;
    assert.ok(nest);
    const origin = [nest.x, nest.y];
    assert.ok(game.covers.every((cover) => !overlapsCover(nest.x, nest.y, NEST.spawnRadius + 16, cover)));
    game.nextNestAt = 0;
    advance(game, (NEST.summonInterval - NEST.summonWarning) * 60);
    assert.equal(nest.warning, NEST.summonWarning);
    const beforePause = snapshot(game);
    game.pause();
    const paused = snapshot(game);
    advance(game, 300);
    assert.equal(snapshot(game), paused);
    game.resume();
    assert.equal(snapshot(game), beforePause);
    advance(game, NEST.summonWarning * 60 - 1);
    assert.equal(game.enemies.length, 1);
    game.step(idle);
    assert.equal(game.enemies.length, 1 + NEST.batch);
    assert.equal(game.enemies.filter((enemy) => enemy.kind === 'nest').length, 1);
    assert.deepEqual([nest.x, nest.y], origin);
    while (game.enemies.length < 199) add(game, 'brute', 2200, 300, 1000000);
    advance(game, NEST.summonInterval * 60);
    assert.equal(game.enemies.length, 200);
    nest.hp = 0;
    game.step(idle);
    assert.equal(game.xp, ENEMIES.nest.xp);
    assert.ok(game.events.some((event) => event.type === 'nestClear'));
    game.enemies = [];
    game.spawnAt = 0;
    advance(game, NEST.lull * 60 - 1);
    assert.equal(game.enemies.length, 0);
    game.step(idle);
    assert.ok(game.enemies.length > 0);
    assert.equal(game.nest, undefined);
  }
  assert.equal(snapshot(games[0]), snapshot(games[1]));
});

test('discharge gives the full warning, pauses, pulses once per cycle against both teams and expires', () => {
  const game = quiet();
  game.nextDischargeAt = DISCHARGE.firstAt;
  at(game, DISCHARGE.firstAt);
  game.step(idle);
  const field = game.discharge;
  assert.ok(field);
  assert.equal(game.dischargePhase, 'warning');
  const inside = add(game, 'nest', field.x - 70, field.y);
  const outside = add(game, 'brute', field.x + 220, field.y);
  advance(game, DISCHARGE.warning * 60 - 1);
  assert.equal(game.player.hp, PLAYER.health);
  assert.equal(inside.hp, 1000);
  assert.equal(game.dischargePhase, 'warning');
  game.pause();
  const paused = snapshot(game);
  advance(game, 200);
  assert.equal(snapshot(game), paused);
  game.resume();
  game.step(idle);
  assert.equal(game.dischargePhase, 'active');
  assert.equal(game.player.hp, PLAYER.health - DISCHARGE.playerDamage);
  assert.equal(inside.hp, 1000 - DISCHARGE.enemyDamage);
  assert.equal(outside.hp, 1000);
  assert.equal(game.events.filter((event) => event.type === 'fieldPulse').length, 1);
  game.enemies = [];
  let pulses = 1;
  while (game.discharge) {
    game.step(idle);
    pulses += game.events.filter((event) => event.type === 'fieldPulse').length;
  }
  assert.equal(game.elapsed, field.expiresAt);
  assert.equal(pulses, 7);
  assert.equal(game.player.hp, PLAYER.health - DISCHARGE.playerDamage * pulses);
  assert.equal(game.dischargePhase, undefined);
  assert.equal(new Game().discharge, undefined);
});

test('every cover edge and arena corner has a walkable escape before the first discharge pulse', () => {
  const positions = [[1600, 900], [14, 14], [3186, 14], [14, 1786], [3186, 1786]];
  for (const cover of new Game().covers) {
    positions.push([cover.x - PLAYER.radius, cover.y + cover.height / 2]);
    positions.push([cover.x + cover.width + PLAYER.radius, cover.y + cover.height / 2]);
    positions.push([cover.x + cover.width / 2, cover.y - PLAYER.radius]);
    positions.push([cover.x + cover.width / 2, cover.y + cover.height + PLAYER.radius]);
  }
  for (const [x, y] of positions) {
    let escapes = 0;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const game = quiet();
      game.player.x = x;
      game.player.y = y;
      game.nextDischargeAt = DISCHARGE.firstAt;
      at(game, DISCHARGE.firstAt);
      game.step(idle);
      advance(game, DISCHARGE.warning * 60, { x: dx, y: dy, pulse: false });
      if (game.player.hp === PLAYER.health && Math.hypot(game.player.x - x, game.player.y - y) >
        DISCHARGE.radius + PLAYER.radius) escapes++;
    }
    assert.ok(escapes > 0, `No warned escape at ${x},${y}`);
  }
});

test('cover permits player sliding, enemies route around it and charge breaks it while scattering enemies', () => {
  const game = quiet();
  const cover = game.covers[0];
  game.player.x = cover.x - PLAYER.radius - 2;
  game.player.y = cover.y + cover.height / 2;
  for (let i = 0; i < 80; i++) {
    game.step({ x: 1, y: 1, pulse: false });
    assert.ok(!overlapsCover(game.player.x, game.player.y, PLAYER.radius, cover));
  }
  assert.ok(game.player.x > cover.x && game.player.y > cover.y + cover.height + PLAYER.radius);
  const routed = quiet();
  routed.player.x = cover.x + cover.width + 80;
  routed.player.y = cover.y + cover.height / 2;
  const pursuer = add(routed, 'pursuer', cover.x - 80, routed.player.y);
  for (let i = 0; i < 600; i++) {
    routed.step(idle);
    assert.ok(!overlapsCover(pursuer.x, pursuer.y, pursuer.radius, routed.covers[0]));
  }
  assert.ok(Math.hypot(pursuer.x - routed.player.x, pursuer.y - routed.player.y) < 35);
  const charged = quiet();
  const guardian = add(charged, 'guardian', cover.x - 60, cover.y + cover.height / 2);
  const small = add(charged, 'pursuer', cover.x - 45, guardian.y + 20);
  charged.step(idle);
  guardian.angle = 0;
  charged.enemyStates.get(guardian.id).chargeUntilTick = charged.tick + 30;
  const beforeY = small.y;
  let breaks = 0;
  for (let i = 0; i < 20; i++) {
    charged.step(idle);
    breaks += charged.events.filter((event) => event.type === 'coverBreak').length;
  }
  assert.equal(charged.covers[0].destroyed, true);
  assert.equal(breaks, 1);
  assert.ok(Math.abs(small.y - beforeY) > 50);
  assert.ok(guardian.x > cover.x);
});

test('an enemy finishes the near corner of tall cover before routing to its far corner', () => {
  const game = quiet(11);
  game.player.x = 2060;
  game.player.y = 690;
  game.player.invulnerable = 1000000;
  const pursuer = add(game, 'pursuer', 1800, 700);
  advance(game, 2400);
  assert.ok(Math.hypot(pursuer.x - game.player.x, pursuer.y - game.player.y) < 35);
});

test('cover blocks swept friendly and hostile shots from all eight directions and broken cover stops blocking', () => {
  for (let direction = 0; direction < 8; direction++) {
    for (const kind of ['bolt', 'enemy']) {
      const game = quiet();
      const cover = game.covers[0];
      const angle = direction * Math.PI / 4;
      const dx = Math.cos(angle) * 270;
      const dy = Math.sin(angle) * 270;
      const x = cover.x + cover.width / 2;
      const y = cover.y + cover.height / 2;
      const target = kind === 'bolt' ? add(game, 'nest', x + dx, y + dy) : game.player;
      target.x = x + dx;
      target.y = y + dy;
      const hp = target.hp;
      game.addProjectile(kind, x - dx, y - dy, angle, 540 * 60, 40, 1);
      game.step(idle);
      assert.equal(target.hp, hp, `${kind} passed intact cover at direction ${direction}`);
      assert.equal(game.projectiles.length, 0);
      cover.destroyed = true;
      game.addProjectile(kind, x - dx, y - dy, angle, 540 * 60, 40, 1);
      game.step(idle);
      assert.equal(target.hp, hp - 40);
    }
  }
});

test('Bolt branches appear at level three, preserve ranks, reject repeats and are guaranteed after a deferred Guardian clear', () => {
  const game = new Game(44);
  game.xp = game.xpNeeded;
  game.step(idle);
  game.chooseUpgrade('weapon:bolt');
  game.xp = game.xpNeeded;
  game.step(idle);
  assert.equal(game.level, BOLT_EVOLUTION.level);
  assert.deepEqual(game.offers.filter((offer) => offer.kind === 'evolution').map((offer) => offer.id),
    ['evolution:bolt:pierce', 'evolution:bolt:blast']);
  assert.ok(game.offers.some((offer) => offer.kind === 'weapon'));
  assert.ok(game.offers.every((offer) => offer.kind !== 'evolution' || offer.rank === 1));
  assert.equal(game.chooseUpgrade('evolution:bolt:pierce'), true);
  assert.equal(game.player.boltMode, 'pierce');
  assert.equal(game.player.weapons.bolt, 2);
  assert.equal(game.chooseUpgrade('evolution:bolt:blast'), false);
  game.xp = game.xpNeeded;
  game.step(idle);
  assert.ok(game.offers.every((offer) => offer.kind !== 'evolution'));
  const deferred = quiet();
  const level = deferred.level;
  add(deferred, 'guardian', 2300, 900, 0);
  deferred.step(idle);
  assert.equal(deferred.phase, 'upgrade');
  assert.equal(deferred.level, level);
  assert.equal(deferred.offers.length, 2);
  deferred.chooseUpgrade('evolution:bolt:blast');
  assert.equal(deferred.player.boltMode, 'blast');
  add(deferred, 'guardian', 2300, 900, 0);
  deferred.step(idle);
  assert.equal(deferred.phase, 'playing');
});

test('piercing shots hit at most three unique enemies, blast damages nearby enemies once and volleys respect the cap', () => {
  const pierce = quiet();
  const a = add(pierce, 'nest', 1800, 900);
  const b = add(pierce, 'nest', 1800, 900);
  pierce.addProjectile('bolt', 1800, 900, 0, 0, 20, 1, 'pierce');
  advance(pierce, 10);
  assert.equal(a.hp, 980);
  assert.equal(b.hp, 980);
  assert.equal(pierce.projectiles.length, 1);
  const c = add(pierce, 'nest', 1800, 900);
  const d = add(pierce, 'nest', 1800, 900);
  pierce.step(idle);
  assert.equal(c.hp, 980);
  assert.equal(d.hp, 1000);
  assert.equal(pierce.projectiles.length, 0);
  assert.equal(pierce.projectileHits.size, 0);
  const blast = quiet();
  const direct = add(blast, 'nest', 1800, 900);
  const near = add(blast, 'nest', 1840, 900);
  const far = add(blast, 'nest', 1950, 900);
  blast.addProjectile('bolt', direct.x, direct.y, 0, 0, 40, 1, 'blast');
  blast.step(idle);
  assert.equal(direct.hp, 960);
  assert.equal(near.hp, 1000 - 40 * BOLT_EVOLUTION.blast.splashMultiplier);
  assert.equal(far.hp, 1000);
  assert.equal(blast.events.filter((event) => event.type === 'boltBlast').length, 1);
  for (const mode of ['standard', 'pierce', 'blast']) {
    const capped = quiet();
    capped.player.boltMode = mode;
    capped.player.weapons.bolt = 4;
    add(capped, 'brute', 1900, 900);
    for (let i = 0; i < 300; i++) capped.addProjectile('enemy', 100, 100, 0, 0, 12, 10);
    capped.step(idle);
    assert.equal(capped.projectiles.length, 300);
  }
});

test('ordinary play reaches branch, nest and discharge without health fixtures and replays identically in batches', () => {
  const game = new Game(14);
  const replay = createReplay(14);
  let nestSeen = false;
  let fieldPulses = 0;
  let nestClears = 0;
  let batteryBlasts = 0;
  let paused = false;
  while (game.phase !== 'lost' && game.tick < 150 * 60) {
    const input = pilot(game);
    if (game.phase === 'upgrade') {
      const id = game.offers[input.upgradeIndex].id;
      recordUpgrade(replay, game.tick, id);
      game.chooseUpgrade(id);
      continue;
    }
    if (game.dischargePhase === 'warning' && !paused) {
      game.pause();
      const before = snapshot(game);
      advance(game, 90);
      assert.equal(snapshot(game), before);
      game.resume();
      recordPause(replay, game.tick);
      paused = true;
    }
    recordInput(replay, game.tick, input);
    game.step(input);
    nestSeen ||= !!game.nest;
    for (const event of game.events) {
      fieldPulses += Number(event.type === 'fieldPulse');
      nestClears += Number(event.type === 'nestClear');
      batteryBlasts += Number(event.type === 'batteryBlast');
    }
  }
  assert.equal(game.elapsed, 150);
  assert.ok(game.player.hp > 0);
  assert.notEqual(game.player.boltMode, 'standard');
  assert.ok(nestSeen && nestClears > 0 && batteryBlasts > 0 && fieldPulses === 7 && paused);
  for (const batch of [1, 2, 3]) assert.equal(snapshot(runReplay(replay, batch)), snapshot(game));
});
