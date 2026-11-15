import assert from 'node:assert/strict';
import test from 'node:test';
import { Game } from '../src/game.ts';
import { ENEMIES, LATE_GAME, PASSIVES, WEAPONS } from '../src/content.ts';
import { pilot } from '../src/acceptance.ts';

const idle = { x: 0, y: 0, pulse: false };
function isolated(seconds = 0) {
  const game = new Game(7);
  game.tick = seconds * 60;
  game.elapsed = seconds;
  game.spawnAt = game.nextGuardianAt = game.nextNestAt = game.nextDischargeAt = Infinity;
  game.player.weapons = { bolt: 0, orbit: 0, chain: 0 };
  game.xpNeeded = 1e9;
  return game;
}

test('late health preserves the opening curve and stops growing after twenty minutes', () => {
  const health = (seconds) => isolated(seconds).addEnemy('pursuer', 2200, 900).maxHp;
  assert.equal(health(0), ENEMIES.pursuer.hp);
  assert.equal(health(150), ENEMIES.pursuer.hp * 1.375);
  assert.ok(health(300) > ENEMIES.pursuer.hp * 2.5);
  assert.equal(health(1200), ENEMIES.pursuer.hp * 10);
  assert.equal(health(3600), health(1200));
});

test('later recovery phases retain brutes and sentries instead of mostly starter pursuers', () => {
  function sample(seconds) {
    const game = isolated(seconds);
    const counts = { pursuer: 0, flanker: 0, brute: 0, sentry: 0, battery: 0 };
    for (let i = 0; i < 400; i++) {
      game.enemies.length = 0;
      game.spawnAt = 0;
      game.spawn();
      for (const enemy of game.enemies) counts[enemy.kind]++;
    }
    return counts;
  }
  const opening = sample(75);
  const later = sample(345);
  assert.equal(opening.sentry, 0);
  assert.ok(opening.pursuer > 200);
  assert.ok(later.sentry > 80);
  assert.ok(later.brute + later.sentry > 160);
});

test('a spaced battery relay loses energy, keeps live threats and awards only actual kills', () => {
  for (const [seconds, kills] of [[30, 3], [300, 2], [1200, 1]]) {
    const game = isolated(seconds);
    for (let i = 0; i < 12; i++) assert.ok(game.addEnemy('battery', 2000 + i * 90, 900));
    game.enemies[0].hp = 0;
    game.step(idle);
    assert.equal(game.kills, kills, `kills at ${seconds}s`);
    assert.equal(game.enemies.length, 12 - kills);
    assert.equal(game.events.filter((event) => event.type === 'batteryBlast').length, kills);
    assert.equal(game.pickups.reduce((sum, pickup) => sum + pickup.value, 0), kills * ENEMIES.battery.xp);
    assert.ok(game.enemies.some((enemy) => enemy.hp > 0 && enemy.hp < enemy.maxHp));
    game.step(idle);
    assert.equal(game.kills, kills, 'no deferred duplicate rewards');
  }
});

test('capped equipment spaces out repeat repairs without changing their healing or ordinary upgrades', () => {
  const game = isolated();
  game.player.boltMode = 'pierce';
  game.player.weapons = Object.fromEntries(Object.entries(WEAPONS).map(([kind, value]) => [kind, value.maxRank]));
  game.player.passives = Object.fromEntries(Object.entries(PASSIVES).map(([kind, value]) => [kind, value.maxRank]));
  game.player.hp = 70;
  game.player.maxHp = 175;
  game.level = 24;
  game.xpNeeded = game.xp = 320;
  game.step(idle);
  assert.equal(game.offers[0].id, 'repair');
  assert.equal(game.xpNeeded, LATE_GAME.repairXp);
  assert.equal(game.xpNeeded, 640);
  game.chooseUpgrade('repair');
  assert.equal(game.player.hp, 105);
  game.xp = 639;
  game.step(idle);
  assert.equal(game.phase, 'playing');
  game.xp++;
  game.step(idle);
  assert.equal(game.phase, 'upgrade');
  game.chooseUpgrade('repair');
  assert.equal(game.player.hp, 140);

  game.player.weapons.orbit--;
  game.xp = 640;
  game.step(idle);
  assert.equal(game.offers[0].id, 'weapon:orbit');
  assert.equal(game.xpNeeded, 320);
});

function lateRun(build, mode, control) {
  const full = build === 'full';
  const start = full ? 600 : 300;
  const game = new Game(1);
  game.tick = start * 60;
  game.elapsed = start;
  game.level = full ? 25 : 17;
  game.xpNeeded = 320;
  game.player.boltMode = mode;
  game.player.weapons = { bolt: 4, chain: 4, orbit: full ? 4 : 0 };
  game.player.passives = full
    ? { fireRate: 3, moveSpeed: 3, pickupRadius: 3, maxHealth: 3 }
    : { fireRate: 2, moveSpeed: 2, pickupRadius: 1, maxHealth: 2 };
  game.player.hp = full ? 175 : 107;
  game.player.maxHp = full ? 175 : 150;
  game.nextGuardianAt = start + 10;
  game.nextNestAt = start + 30;
  game.nextDischargeAt = start + 45;
  let hits = 0;
  while (game.phase !== 'lost' && game.tick < (start + 300) * 60) {
    if (game.phase === 'upgrade') {
      game.chooseUpgrade(game.offers[pilot(game).upgradeIndex].id);
      continue;
    }
    let input = pilot(game);
    if (control === 'circle') {
      const angle = (game.elapsed - start) / 8;
      const dx = 1600 + Math.cos(angle) * 440 - game.player.x;
      const dy = 900 + Math.sin(angle) * 300 - game.player.y;
      const length = Math.hypot(dx, dy) || 1;
      input = { x: dx / length, y: dy / length,
        pulse: game.tick % 3 === 0 && game.player.pulseCooldown === 0 };
    } else if (control === 'stationary')
      input = { ...idle, pulse: game.tick % 3 === 0 && game.player.pulseCooldown === 0 };
    game.step(input);
    hits += game.events.filter((event) => event.type === 'hit' && event.target === 'player').length;
  }
  return { game, duration: game.elapsed - start, hits };
}

for (const build of ['screenshot', 'full']) for (const mode of ['pierce', 'blast'])
  test(`${build} ${mode} late play rewards reacting over stationary or repeated-circle inputs`, () => {
    // Fixture equipment is explicit; HP, waves, upgrades, repairs and collisions remain ordinary play.
    const stationary = lateRun(build, mode, 'stationary');
    const circle = lateRun(build, mode, 'circle');
    const moving = lateRun(build, mode, 'pilot');
    assert.equal(stationary.game.phase, 'lost');
    assert.equal(circle.game.phase, 'lost');
    assert.ok(stationary.duration < circle.duration);
    assert.ok(circle.duration < 250);
    assert.equal(moving.duration, 300);
    assert.equal(moving.game.phase, 'playing');
    assert.ok(moving.game.player.hp > 0);
    assert.ok(moving.hits > 0, 'late pressure is measured before repairs can mask damage');
    assert.ok(moving.game.guardiansDefeated >= 2);
  });
