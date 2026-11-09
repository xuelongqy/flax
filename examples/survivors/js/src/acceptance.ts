import type { Game, Offer } from './game';
import { WEAPONS } from './content.ts';

export interface PeakCounts {
  min: number[];
  max: number[];
  lastBoltId?: number;
  boltProjectiles?: number;
  boltVolleys?: number;
}

export function preparePeakStep(game: Game): void {
  // Reserve a real five-bolt volley before attack; refill fixture slots before drawing.
  let slots = game.projectiles.length - (300 - WEAPONS.bolt.bolts[3]!);
  for (let i = game.projectiles.length - 1; i >= 0 && slots > 0; i--) {
    const projectile = game.projectiles[i]!;
    if (projectile.kind !== 'enemy' || projectile.id >= 0) continue;
    game.projectiles.splice(i, 1);
    slots--;
  }
}

export function observePeakBolts(game: Game, counts: PeakCounts): void {
  const previousBoltId = counts.lastBoltId ?? 0;
  let newBolts = 0;
  for (const projectile of game.projectiles) {
    if (projectile.kind !== 'bolt' || projectile.id <= previousBoltId) continue;
    newBolts++;
    counts.lastBoltId = Math.max(counts.lastBoltId ?? 0, projectile.id);
  }
  counts.boltProjectiles = (counts.boltProjectiles ?? 0) + newBolts;
  counts.boltVolleys =
    (counts.boltVolleys ?? 0) + Number(newBolts === WEAPONS.bolt.bolts[3]!);
}

export function maintainPeak(game: Game, counts: PeakCounts): void {
  const lists = [game.enemies, game.projectiles, game.pickups];
  for (let i = 0; i < lists.length; i++) {
    const length = lists[i]!.length;
    counts.min[i] = Math.min(counts.min[i]!, length);
    counts.max[i] = Math.max(counts.max[i]!, length);
  }
  game.player.hp = game.player.maxHp;
  game.player.weapons.bolt = 4;
  game.player.weapons.orbit = 4;
  game.player.weapons.chain = 4;
  game.xp = 0;
  game.xpNeeded = 1000000000;
  game.enemies.length = Math.min(game.enemies.length, 200);
  game.projectiles.length = Math.min(game.projectiles.length, 300);
  game.pickups.length = Math.min(game.pickups.length, 150);
  while (game.enemies.length < 200) {
    const i = game.enemies.length;
    game.enemies.push({
      id: -1 - game.tick * 1000 - i,
      kind: 'pursuer',
      x: 100 + (i % 20) * 145,
      y: 100 + Math.floor(i / 20) * 160,
      radius: 15,
      hp: 25,
      maxHp: 25,
      angle: 0,
      warning: 0,
      hit: 0,
    });
  }
  while (game.projectiles.length < 300) {
    const i = game.projectiles.length;
    game.projectiles.push({
      id: -200000000 - game.tick * 1000 - i,
      kind: 'enemy',
      x: 100 + (i % 25) * 120,
      y: 100 + Math.floor(i / 25) * 120,
      radius: 4,
      vx: 0,
      vy: 0,
      life: 60,
    });
  }
  while (game.pickups.length < 150) {
    const i = game.pickups.length;
    game.pickups.push({
      id: -400000000 - game.tick * 1000 - i,
      x: 120 + (i % 15) * 200,
      y: 120 + Math.floor(i / 15) * 150,
      radius: 8,
      value: 1,
    });
  }
  for (let i = 0; i < lists.length; i++)
    counts.max[i] = Math.max(counts.max[i]!, lists[i]!.length);
}

export function pilot(game: Game): {
  phase: string;
  tick: number;
  elapsed: number;
  guardianPresent: boolean;
  guardiansDefeated: number;
  hp: number;
  x: number;
  y: number;
  pulse: boolean;
  upgradeIndex: number;
} {
  const priority = (offer: Offer): number => {
    if (offer.id === 'weapon:bolt') return 100 + offer.rank;
    if (offer.id === 'weapon:chain') return 90 + offer.rank;
    if (offer.id === 'passive:moveSpeed') return 85 - offer.rank;
    if (offer.id === 'passive:fireRate') return 80 + offer.rank;
    if (offer.id === 'weapon:orbit') return 70 + offer.rank;
    if (offer.id === 'passive:maxHealth') return 65;
    return 40;
  };
  let upgradeIndex = -1;
  for (let i = 0; i < game.offers.length; i++)
    if (
      upgradeIndex < 0 ||
      priority(game.offers[i]!) > priority(game.offers[upgradeIndex]!)
    )
      upgradeIndex = i;
  const p = game.player;
  const boss = game.enemies.find((e) => e.kind === 'guardian');
  let tx = 1600 + Math.cos(game.elapsed / 12) * 440,
    ty = 900 + Math.sin(game.elapsed / 12) * 300;
  let best = Infinity;
  if (boss) {
    const angle = Math.atan2(p.y - boss.y, p.x - boss.x) + 0.35;
    tx = boss.x + Math.cos(angle) * 240;
    ty = boss.y + Math.sin(angle) * 240;
  } else {
    for (const pickup of game.pickups) {
      const distance = Math.hypot(p.x - pickup.x, p.y - pickup.y);
      const danger = game.enemies.reduce(
        (n, e) => n + Math.max(0, 100 - Math.hypot(e.x - pickup.x, e.y - pickup.y)),
        0,
      );
      if (distance + danger * 4 < best && distance < 330) {
        best = distance + danger * 4;
        tx = pickup.x;
        ty = pickup.y;
      }
    }
  }
  let x = tx - p.x,
    y = ty - p.y;
  const n = Math.hypot(x, y) || 1;
  x /= n;
  y /= n;
  let close = 0;
  for (const enemy of game.enemies) {
    const dx = p.x - enemy.x,
      dy = p.y - enemy.y,
      d = Math.hypot(dx, dy) || 1;
    if (d < 150) close++;
    if (d < 130) {
      const strength = ((130 - d) / 130) * 2.5;
      x += (dx / d) * strength;
      y += (dy / d) * strength;
    }
  }
  for (const shot of game.projectiles)
    if (shot.kind === 'enemy') {
      const dx = p.x - shot.x,
        dy = p.y - shot.y,
        d = Math.hypot(dx, dy) || 1;
      if (d < 80) {
        x += (((dx / d) * (80 - d)) / 80) * 2;
        y += (((dy / d) * (80 - d)) / 80) * 2;
      }
    }
  const magnitude = Math.max(1, Math.hypot(x, y));
  return {
    phase: game.phase,
    tick: game.tick,
    elapsed: game.elapsed,
    guardianPresent: !!boss,
    guardiansDefeated: game.guardiansDefeated,
    hp: p.hp,
    x: x / magnitude,
    y: y / magnitude,
    pulse: close > 0 && p.pulseCooldown === 0,
    upgradeIndex,
  };
}
