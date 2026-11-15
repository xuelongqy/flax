import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { Game } from '../src/game.ts';
import {
  maintainPeak,
  preparePeakStep,
  observePeakBolts,
  pilot,
} from '../src/acceptance.ts';

test('maintained full peak fires real five-bolt volleys after 30-second warmup', () => {
  const game = new Game(1);
  const stats = { min: [Infinity, Infinity, Infinity], max: [0, 0, 0] };
  maintainPeak(game, stats);
  assert.deepEqual(game.player.weapons, { bolt: 4, orbit: 4, chain: 4 });
  stats.min = [200, 300, 150];
  stats.max = [200, 300, 150];
  const observedBolts = new Set();
  let observedVolleys = 0,
    warmupBolts = 0,
    warmupVolleys = 0,
    measuredPulses = 0;
  for (let i = 0; i < 5400; i++) {
    assert.equal(game.projectiles.length, 300);
    const realProjectiles = game.projectiles.filter((shot) => shot.id >= 0);
    preparePeakStep(game);
    assert.equal(game.projectiles.length, 295);
    for (const shot of realProjectiles) assert.ok(game.projectiles.includes(shot));
    game.step({ x: 0, y: 0, pulse: game.player.pulseCooldown === 0 });
    let newBolts = 0;
    for (const shot of game.projectiles) {
      if (shot.kind !== 'bolt' || observedBolts.has(shot.id)) continue;
      assert.ok(shot.id > 0);
      observedBolts.add(shot.id);
      newBolts++;
    }
    assert.ok(newBolts <= 5);
    if (newBolts === 5) observedVolleys++;
    if (i >= 1800)
      measuredPulses += game.events.filter((event) => event.type === 'pulse').length;
    if (i === 0)
      assert.equal(game.events.filter((event) => event.type === 'chain').length, 10);
    assert.equal(game.phase, 'playing');
    observePeakBolts(game, stats);
    maintainPeak(game, stats);
    assert.equal(stats.boltProjectiles, observedBolts.size);
    assert.equal(stats.boltVolleys, observedVolleys);
    assert.deepEqual(
      [game.enemies.length, game.projectiles.length, game.pickups.length],
      [200, 300, 150],
    );
    if (i === 1799) {
      warmupBolts = observedBolts.size;
      warmupVolleys = observedVolleys;
    }
  }
  assert.equal(game.tick, 5400);
  assert.ok(warmupVolleys > 0);
  assert.ok(observedBolts.size - warmupBolts >= 5);
  assert.ok(observedVolleys - warmupVolleys >= 1);
  assert.ok(measuredPulses >= 8);
  assert.deepEqual(stats.max, [200, 300, 150]);
  assert.ok(stats.min.every((n) => n > 0));
});

test('peak bolt observations ignore blocked shot events and repeated observations', () => {
  const game = new Game(1);
  const stats = { min: [200, 300, 150], max: [200, 300, 150] };
  maintainPeak(game, stats);
  game.step({ x: 0, y: 0, pulse: false });
  assert.ok(game.events.some((event) => event.type === 'shot'));
  observePeakBolts(game, stats);
  maintainPeak(game, stats);
  assert.equal(stats.boltProjectiles, 0);
  assert.equal(stats.boltVolleys, 0);
  for (let i = 0; i < 30 && stats.boltVolleys === 0; i++) {
    preparePeakStep(game);
    game.step({ x: 0, y: 0, pulse: false });
    observePeakBolts(game, stats);
    maintainPeak(game, stats);
  }
  assert.ok(stats.boltVolleys > 0);
  const before = { ...stats };
  observePeakBolts(game, stats);
  maintainPeak(game, stats);
  assert.equal(stats.boltProjectiles, before.boltProjectiles);
  assert.equal(stats.boltVolleys, before.boltVolleys);
});

test('pilot reads state without mutating it and chooses highest priority offer', () => {
  const game = new Game(1);
  game.offers = [
    { id: 'weapon:orbit', title: '', description: '', kind: 'weapon', rank: 1 },
    { id: 'weapon:bolt', title: '', description: '', kind: 'weapon', rank: 2 },
  ];
  game.phase = 'upgrade';
  const before = JSON.stringify(game);
  const result = pilot(game);
  assert.equal(result.upgradeIndex, 1);
  assert.equal(JSON.stringify(game), before);
  assert.ok(Math.hypot(result.x, result.y) <= 1.000001);
});

for (const width of [960, 1280])
  test(`quantized pilot survives 600 seconds with recurring guardians at ${width}x540`, () => {
    const game = new Game(1);
    game.setViewport(width, 540);
    let reachedGuardian = false;
    let firstUpgrade;
    let input = { x: 0, y: 0, pulse: false };
    while (game.phase !== 'lost' && game.tick < 36000) {
      if (game.phase === 'upgrade') {
        firstUpgrade ??= game.elapsed;
        const offer = game.offers[pilot(game).upgradeIndex];
        assert.ok(offer);
        game.chooseUpgrade(offer.id);
        continue;
      }
      if (game.tick % 3 === 0) {
        const desired = pilot(game);
        reachedGuardian ||= desired.guardianPresent;
        input = {
          x: Math.abs(desired.x) > 0.3 ? Math.sign(desired.x) : 0,
          y: Math.abs(desired.y) > 0.3 ? Math.sign(desired.y) : 0,
          pulse: desired.pulse,
        };
      } else input = { ...input, pulse: false };
      game.step(input);
    }
    assert.equal(reachedGuardian, true);
    assert.equal(game.tick, 36000);
    assert.equal(game.phase, 'playing');
    assert.ok(firstUpgrade > 0 && firstUpgrade <= 30, `first upgrade: ${firstUpgrade}`);
    assert.ok(
      game.guardiansDefeated >= 2,
      `guardian clears: ${game.guardiansDefeated}`,
    );
    assert.equal(pilot(game).guardiansDefeated, game.guardiansDefeated);
    assert.equal(pilot(game).hp, game.player.hp);
    assert.equal(game.enemyStates.size, game.enemies.length);
    assert.equal(game.projectileDamage.size, game.projectiles.length);
  });
