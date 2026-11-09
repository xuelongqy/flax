import {
  CONTENT_VERSION,
  DIFFICULTY_SECONDS,
  ENEMIES,
  GUARDIAN,
  LIMITS,
  PASSIVES,
  PLAYER,
  PULSE,
  STEP,
  VIEW_HEIGHT,
  VIEW_WIDTH,
  WAVES,
  WAVE_SECONDS,
  WEAPONS,
  WORLD_HEIGHT,
  WORLD_WIDTH,
} from './content.ts';

export type Phase = 'playing' | 'upgrade' | 'paused' | 'lost';
export type WeaponKind = 'bolt' | 'orbit' | 'chain';
export type EnemyKind = 'pursuer' | 'flanker' | 'brute' | 'sentry' | 'guardian';
export type PassiveKind = 'fireRate' | 'moveSpeed' | 'pickupRadius' | 'maxHealth';
export interface Input {
  x: number;
  y: number;
  pulse: boolean;
}
export interface Actor {
  id: number;
  x: number;
  y: number;
  radius: number;
}
export interface Enemy extends Actor {
  kind: EnemyKind;
  hp: number;
  maxHp: number;
  angle: number;
  warning: number;
  hit: number;
}
export interface Projectile extends Actor {
  kind: 'bolt' | 'enemy';
  vx: number;
  vy: number;
  life: number;
}
export interface Pickup extends Actor {
  value: number;
}
export interface Player extends Actor {
  hp: number;
  maxHp: number;
  pulseCooldown: number;
  invulnerable: number;
  weapons: Record<WeaponKind, number>;
  passives: Record<PassiveKind, number>;
}
export interface Offer {
  id: string;
  title: string;
  description: string;
  kind: 'weapon' | 'passive' | 'repair';
  rank: number;
}
export interface GameEvent {
  type: 'shot' | 'hit' | 'kill' | 'pulse' | 'chain' | 'level' | 'guardian' | 'lose';
  x: number;
  y: number;
  toX?: number;
  toY?: number;
  target?: 'player' | 'enemy';
}
interface EnemyState {
  attackAt: number;
  attack: 'radial' | 'charge';
  radialAngles: readonly number[] | undefined;
  chargeUntil: number;
  orbitAt: number;
}

const TAU = Math.PI * 2;
const GRID_SIZE = 100;
const GRID_COLUMNS = Math.ceil(WORLD_WIDTH / GRID_SIZE) + 1;
const weaponKinds: WeaponKind[] = ['bolt', 'orbit', 'chain'];
const passiveKinds: PassiveKind[] = [
  'fireRate',
  'moveSpeed',
  'pickupRadius',
  'maxHealth',
];
const clamp = (value: number, low: number, high: number): number =>
  Math.min(high, Math.max(low, value));
const distanceSquared = (a: Actor, b: Actor): number =>
  (a.x - b.x) ** 2 + (a.y - b.y) ** 2;

export class Game {
  readonly seed: number;
  viewWidth = VIEW_WIDTH;
  viewHeight = VIEW_HEIGHT;
  phase: Phase = 'playing';
  tick = 0;
  elapsed = 0;
  level = 1;
  xp = 0;
  xpNeeded = 8;
  kills = 0;
  guardiansDefeated = 0;
  player: Player = {
    id: 0,
    x: WORLD_WIDTH / 2,
    y: WORLD_HEIGHT / 2,
    radius: PLAYER.radius,
    hp: PLAYER.health,
    maxHp: PLAYER.health,
    pulseCooldown: 0,
    invulnerable: 0,
    weapons: { bolt: 1, orbit: 0, chain: 0 },
    passives: { fireRate: 0, moveSpeed: 0, pickupRadius: 0, maxHealth: 0 },
  };
  enemies: Enemy[] = [];
  projectiles: Projectile[] = [];
  pickups: Pickup[] = [];
  offers: Offer[] = [];
  events: GameEvent[] = [];
  endReason: 'health' | null = null;
  private randomState: number;
  private nextId = 1;
  private spawnAt = 0.3;
  private nextGuardianAt = GUARDIAN.firstAt;
  private pausedPhase: 'playing' | 'upgrade' = 'playing';
  private pulseHeld = false;
  private boltAt = 0;
  private chainAt = 0;
  private grid = new Map<number, Enemy[]>();
  private enemyStates = new Map<number, EnemyState>();
  private projectileDamage = new Map<number, number>();

  constructor(seed = 1) {
    if (!Number.isSafeInteger(seed))
      throw new Error('Game seed must be a safe integer.');
    this.seed = seed >>> 0;
    this.randomState = this.seed || 0x6d2b79f5;
  }

  setViewport(width: number, height: number): void {
    if (
      !Number.isFinite(width) ||
      !Number.isFinite(height) ||
      width <= 0 ||
      height <= 0 ||
      width > WORLD_WIDTH ||
      height > WORLD_HEIGHT
    )
      throw new RangeError(
        'Viewport dimensions must be finite, positive and within the arena.',
      );
    this.viewWidth = width;
    this.viewHeight = height;
  }

  get camera(): { x: number; y: number; width: number; height: number } {
    return {
      x: clamp(this.player.x - this.viewWidth / 2, 0, WORLD_WIDTH - this.viewWidth),
      y: clamp(this.player.y - this.viewHeight / 2, 0, WORLD_HEIGHT - this.viewHeight),
      width: this.viewWidth,
      height: this.viewHeight,
    };
  }

  guardianAttack(id: number): 'radial' | 'charge' | undefined {
    return this.enemyStates.get(id)?.attack;
  }

  guardianRadialAngles(id: number): readonly number[] | undefined {
    return this.enemyStates.get(id)?.radialAngles;
  }

  get score(): number {
    return this.kills + 10 * Math.floor(this.elapsed);
  }

  private get difficulty(): number {
    return Math.min(1, this.elapsed / DIFFICULTY_SECONDS);
  }

  step(input: Input): void {
    this.events.length = 0;
    if (this.phase !== 'playing') return;
    this.tick++;
    this.elapsed = this.tick * STEP;
    const player = this.player;
    player.invulnerable = Math.max(0, player.invulnerable - STEP);
    player.pulseCooldown = Math.max(0, player.pulseCooldown - STEP);
    if (player.pulseCooldown < 1e-9) player.pulseCooldown = 0;
    const x = Number.isFinite(input.x) ? clamp(input.x, -1, 1) : 0;
    const y = Number.isFinite(input.y) ? clamp(input.y, -1, 1) : 0;
    const magnitude = Math.max(1, Math.hypot(x, y));
    const speed =
      PLAYER.speed * (1 + PASSIVES.moveSpeed.perRank * player.passives.moveSpeed);
    player.x = clamp(
      player.x + (x / magnitude) * speed * STEP,
      player.radius,
      WORLD_WIDTH - player.radius,
    );
    player.y = clamp(
      player.y + (y / magnitude) * speed * STEP,
      player.radius,
      WORLD_HEIGHT - player.radius,
    );
    this.spawn();
    this.moveEnemies();
    this.buildGrid();
    if (input.pulse && !this.pulseHeld && player.pulseCooldown === 0) this.pulse();
    this.pulseHeld = input.pulse;
    this.attack();
    this.moveProjectiles();
    this.resolveEnemies();
    this.collect();
    if (player.hp <= 0) this.finish();
    else this.offerUpgrade();
  }

  pause(): void {
    if (this.phase !== 'playing' && this.phase !== 'upgrade') return;
    this.pausedPhase = this.phase;
    this.phase = 'paused';
    this.pulseHeld = false;
    this.events.length = 0;
  }

  resume(): void {
    if (this.phase === 'paused') this.phase = this.pausedPhase;
  }

  chooseUpgrade(id: string): boolean {
    if (this.phase !== 'upgrade') return false;
    const offer = this.offers.find((value) => value.id === id);
    if (!offer) return false;
    if (offer.kind === 'weapon')
      this.player.weapons[id.slice(7) as WeaponKind] = offer.rank;
    else if (offer.kind === 'passive') {
      const kind = id.slice(8) as PassiveKind;
      this.player.passives[kind] = offer.rank;
      if (kind === 'maxHealth') {
        this.player.maxHp += PASSIVES.maxHealth.perRank;
        this.player.hp += PASSIVES.maxHealth.perRank;
      }
    } else
      this.player.hp = Math.min(
        this.player.maxHp,
        this.player.hp + this.player.maxHp * 0.2,
      );
    this.offers = [];
    this.phase = 'playing';
    this.offerUpgrade();
    return true;
  }

  private random(): number {
    let value = this.randomState;
    value ^= value << 13;
    value ^= value >>> 17;
    value ^= value << 5;
    this.randomState = value >>> 0;
    return this.randomState / 4294967296;
  }

  private spawn(): void {
    if (this.elapsed >= this.nextGuardianAt) {
      // A due guardian waits for a free slot and a legal off-camera position.
      if (
        this.enemies.some((enemy) => enemy.kind === 'guardian' && enemy.hp > 0) ||
        this.spawnEnemy('guardian')
      )
        this.nextGuardianAt = Infinity;
    }
    if (this.elapsed < this.spawnAt) return;
    const waveTime = this.elapsed % WAVE_SECONDS;
    let wave = WAVES[0]!;
    for (const candidate of WAVES) if (candidate.start <= waveTime) wave = candidate;
    this.spawnAt =
      this.elapsed + Math.max(0.28, wave.interval * (1 - this.difficulty * 0.25));
    const limit = LIMITS.enemies - Number(this.elapsed >= this.nextGuardianAt);
    for (let i = 0; i < wave.batch && this.enemies.length < limit; i++) {
      const roll = this.random();
      const kind =
        roll < wave.pursuer
          ? 'pursuer'
          : roll < wave.pursuer + wave.flanker
            ? 'flanker'
            : roll < wave.pursuer + wave.flanker + wave.brute
              ? 'brute'
              : 'sentry';
      this.spawnEnemy(kind);
    }
  }

  private spawnEnemy(kind: EnemyKind): boolean {
    if (this.enemies.length >= LIMITS.enemies) return false;
    const definition = ENEMIES[kind];
    const { x: left, y: top, width, height } = this.camera;
    for (let attempt = 0; attempt < 24; attempt++) {
      const angle = this.random() * TAU;
      const dx = Math.cos(angle);
      const dy = Math.sin(angle);
      const exitX =
        dx > 0
          ? (left + width + definition.radius - this.player.x) / dx
          : dx < 0
            ? (left - definition.radius - this.player.x) / dx
            : Infinity;
      const exitY =
        dy > 0
          ? (top + height + definition.radius - this.player.y) / dy
          : dy < 0
            ? (top - definition.radius - this.player.y) / dy
            : Infinity;
      // Extend only as needed to leave the visible camera; retain two RNG draws per attempt.
      const radius = Math.max(580, Math.min(exitX, exitY) + 1) + this.random() * 150;
      const x = this.player.x + dx * radius;
      const y = this.player.y + dy * radius;
      if (
        x < definition.radius ||
        y < definition.radius ||
        x > WORLD_WIDTH - definition.radius ||
        y > WORLD_HEIGHT - definition.radius
      )
        continue;
      if (
        x > left - definition.radius &&
        x < left + width + definition.radius &&
        y > top - definition.radius &&
        y < top + height + definition.radius
      )
        continue;
      const maxHp = definition.hp * (1 + this.difficulty * 3);
      this.enemies.push({
        id: this.nextId++,
        kind,
        x,
        y,
        radius: definition.radius,
        hp: maxHp,
        maxHp,
        angle: Math.atan2(this.player.y - y, this.player.x - x),
        warning: 0,
        hit: 0,
      });
      return true;
    }
    return false;
  }

  private moveEnemies(): void {
    for (const enemy of this.enemies) {
      if (enemy.hp <= 0) continue;
      enemy.hit = Math.max(0, enemy.hit - STEP);
      let state = this.enemyStates.get(enemy.id);
      if (!state) {
        state = {
          attackAt: this.elapsed + (enemy.kind === 'guardian' ? 1.3 : 1.5),
          attack:
            enemy.kind === 'guardian' && this.guardiansDefeated % 2 === 1
              ? 'charge'
              : 'radial',
          radialAngles: undefined,
          chargeUntil: 0,
          orbitAt: 0,
        };
        this.enemyStates.set(enemy.id, state);
      }
      const dx = this.player.x - enemy.x;
      const dy = this.player.y - enemy.y;
      const length = Math.hypot(dx, dy) || 1;
      const angle = Math.atan2(dy, dx);
      let speed = ENEMIES[enemy.kind].speed * (1 + this.difficulty * 0.2);
      let moveAngle = angle;
      if (enemy.kind === 'flanker')
        moveAngle += Math.sin(this.elapsed * 2.1 + enemy.id) * 0.8;
      if (enemy.kind === 'sentry') {
        speed *= length < 220 ? -0.6 : length < 330 ? 0 : 1;
        if (enemy.warning > 0) {
          speed = 0;
          enemy.warning = Math.max(0, enemy.warning - STEP);
          if (enemy.warning === 0) {
            this.shootEnemy(
              enemy,
              enemy.angle,
              175,
              ENEMIES.sentry.damage * (1 + this.difficulty * 0.6),
            );
            state.attackAt = this.elapsed + 2.8;
          }
        } else if (this.elapsed >= state.attackAt && length < 650) {
          enemy.warning = 0.8;
          enemy.angle = angle;
        } else enemy.angle = angle;
      } else if (enemy.kind === 'guardian') {
        const phaseTwo = enemy.hp <= enemy.maxHp * GUARDIAN.phaseThreshold;
        if (state.chargeUntil > this.elapsed) {
          speed = GUARDIAN.chargeSpeed;
          moveAngle = enemy.angle;
        } else if (enemy.warning > 0) {
          speed = 0;
          enemy.warning = Math.max(0, enemy.warning - STEP);
          if (enemy.warning === 0) {
            if (state.attack === 'charge')
              state.chargeUntil = this.elapsed + GUARDIAN.chargeDuration;
            else {
              for (const direction of state.radialAngles ?? [])
                this.shootEnemy(
                  enemy,
                  direction,
                  phaseTwo ? GUARDIAN.phaseTwoSpeed : GUARDIAN.radialSpeed,
                  16 * (1 + this.difficulty * 0.6),
                );
            }
            state.radialAngles = undefined;
            state.attackAt = this.elapsed + (phaseTwo ? 1.4 : 2.2);
            state.attack = state.attack === 'radial' ? 'charge' : 'radial';
          }
        } else if (this.elapsed >= state.attackAt) {
          // Alternate radial rings and a locked-direction charge in both phases.
          enemy.warning =
            state.attack === 'charge' ? GUARDIAN.chargeWarning : GUARDIAN.radialWarning;
          enemy.angle = angle;
          if (state.attack === 'radial') {
            const count = phaseTwo ? GUARDIAN.phaseTwoCount : GUARDIAN.radialCount;
            // Lock announced lanes so crossing half health cannot add surprise shots.
            state.radialAngles = Array.from(
              { length: count },
              (_, i) => angle + (i * TAU) / count,
            );
          }
          speed = 0;
        } else {
          speed *= phaseTwo ? 1.6 : 1;
          enemy.angle = angle;
        }
      } else enemy.angle = moveAngle;
      enemy.x = clamp(
        enemy.x + Math.cos(moveAngle) * speed * STEP,
        enemy.radius,
        WORLD_WIDTH - enemy.radius,
      );
      enemy.y = clamp(
        enemy.y + Math.sin(moveAngle) * speed * STEP,
        enemy.radius,
        WORLD_HEIGHT - enemy.radius,
      );
    }
  }

  private buildGrid(): void {
    this.grid.clear();
    for (const enemy of this.enemies) {
      if (enemy.hp <= 0) continue;
      const key =
        Math.floor(enemy.x / GRID_SIZE) +
        Math.floor(enemy.y / GRID_SIZE) * GRID_COLUMNS;
      const cell = this.grid.get(key);
      if (cell) cell.push(enemy);
      else this.grid.set(key, [enemy]);
    }
  }

  private nearby(x: number, y: number, radius: number): Enemy[] {
    const result: Enemy[] = [];
    const minX = Math.max(0, Math.floor((x - radius) / GRID_SIZE));
    const maxX = Math.min(GRID_COLUMNS - 1, Math.floor((x + radius) / GRID_SIZE));
    const minY = Math.max(0, Math.floor((y - radius) / GRID_SIZE));
    const maxY = Math.min(
      Math.ceil(WORLD_HEIGHT / GRID_SIZE),
      Math.floor((y + radius) / GRID_SIZE),
    );
    for (let row = minY; row <= maxY; row++)
      for (let column = minX; column <= maxX; column++) {
        const cell = this.grid.get(column + row * GRID_COLUMNS);
        if (cell) for (const enemy of cell) if (enemy.hp > 0) result.push(enemy);
      }
    return result;
  }

  private nearest(
    x: number,
    y: number,
    radius: number,
    excluded?: Set<number>,
  ): Enemy | undefined {
    let best: Enemy | undefined;
    let bestDistance = radius * radius;
    for (const enemy of this.nearby(x, y, radius)) {
      if (excluded?.has(enemy.id)) continue;
      const distance = (enemy.x - x) ** 2 + (enemy.y - y) ** 2;
      if (
        distance < bestDistance ||
        (distance === bestDistance && (!best || enemy.id < best.id))
      ) {
        best = enemy;
        bestDistance = distance;
      }
    }
    return best;
  }

  private pulse(): void {
    this.player.pulseCooldown = PULSE.cooldown;
    this.events.push({ type: 'pulse', x: this.player.x, y: this.player.y });
    const weapons = this.player.weapons;
    const rank = Math.max(weapons.bolt, weapons.orbit, weapons.chain);
    const damage = PULSE.damage * (1 + Math.max(0, rank - 1) * 0.5);
    for (const enemy of this.nearby(this.player.x, this.player.y, PULSE.radius + 46)) {
      const dx = enemy.x - this.player.x;
      const dy = enemy.y - this.player.y;
      const length = Math.hypot(dx, dy);
      if (length > PULSE.radius + enemy.radius) continue;
      this.damage(enemy, damage);
      const push = enemy.kind === 'guardian' ? PULSE.push * 0.25 : PULSE.push;
      enemy.x = clamp(
        enemy.x + (length ? dx / length : 1) * push,
        enemy.radius,
        WORLD_WIDTH - enemy.radius,
      );
      enemy.y = clamp(
        enemy.y + (length ? dy / length : 0) * push,
        enemy.radius,
        WORLD_HEIGHT - enemy.radius,
      );
    }
    // Pulse moves enemies across cells before the automatic weapons query them.
    this.buildGrid();
  }

  private attack(): void {
    const weapons = this.player.weapons;
    const recharge = 1 - this.player.passives.fireRate * PASSIVES.fireRate.perRank;
    if (weapons.bolt > 0 && this.elapsed >= this.boltAt) {
      const definition = WEAPONS.bolt;
      const target = this.nearest(this.player.x, this.player.y, definition.range);
      if (target) {
        const angle = Math.atan2(target.y - this.player.y, target.x - this.player.x);
        const count = definition.bolts[weapons.bolt - 1]!;
        // Even fans retain a directly aimed shot instead of straddling small targets.
        for (let i = 0; i < count; i++)
          this.addProjectile(
            'bolt',
            this.player.x,
            this.player.y,
            angle + (i - Math.floor((count - 1) / 2)) * definition.spread,
            definition.speed,
            definition.damage[weapons.bolt - 1]!,
            1.05,
          );
        this.boltAt = this.elapsed + definition.cooldown[weapons.bolt - 1]! * recharge;
        this.events.push({ type: 'shot', x: this.player.x, y: this.player.y });
      }
    }
    if (weapons.orbit > 0) {
      const definition = WEAPONS.orbit;
      const count = definition.blades[weapons.orbit - 1]!;
      for (let i = 0; i < count; i++) {
        const angle = this.elapsed * definition.rotation + (i * TAU) / count;
        const x = this.player.x + Math.cos(angle) * definition.radius;
        const y = this.player.y + Math.sin(angle) * definition.radius;
        for (const enemy of this.nearby(x, y, definition.bladeRadius + 46)) {
          const state = this.enemyStates.get(enemy.id)!;
          if (
            this.elapsed < state.orbitAt ||
            (enemy.x - x) ** 2 + (enemy.y - y) ** 2 >
              (enemy.radius + definition.bladeRadius) ** 2
          )
            continue;
          this.damage(enemy, definition.damage[weapons.orbit - 1]!);
          state.orbitAt = this.elapsed + definition.hitCooldown * recharge;
        }
      }
    }
    if (weapons.chain > 0 && this.elapsed >= this.chainAt) {
      const definition = WEAPONS.chain;
      const hit = new Set<number>();
      let x = this.player.x;
      let y = this.player.y;
      for (let i = 0; i < definition.targets[weapons.chain - 1]!; i++) {
        const target = this.nearest(
          x,
          y,
          i === 0 ? definition.range : definition.jumpRange,
          hit,
        );
        if (!target) break;
        hit.add(target.id);
        this.damage(target, definition.damage[weapons.chain - 1]! * 0.88 ** i);
        this.events.push({ type: 'chain', x, y, toX: target.x, toY: target.y });
        x = target.x;
        y = target.y;
      }
      if (hit.size)
        this.chainAt =
          this.elapsed + definition.cooldown[weapons.chain - 1]! * recharge;
    }
  }

  private addProjectile(
    kind: 'bolt' | 'enemy',
    x: number,
    y: number,
    angle: number,
    speed: number,
    damage: number,
    life: number,
  ): void {
    if (this.projectiles.length >= LIMITS.projectiles) return;
    const id = this.nextId++;
    this.projectiles.push({
      id,
      kind,
      x,
      y,
      radius: kind === 'bolt' ? 4 : 6,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life,
    });
    this.projectileDamage.set(id, damage);
  }

  private shootEnemy(enemy: Enemy, angle: number, speed: number, damage: number): void {
    this.addProjectile(
      'enemy',
      enemy.x + Math.cos(angle) * (enemy.radius + 8),
      enemy.y + Math.sin(angle) * (enemy.radius + 8),
      angle,
      speed,
      damage,
      5,
    );
  }

  private moveProjectiles(): void {
    let alive = 0;
    for (const projectile of this.projectiles) {
      projectile.x += projectile.vx * STEP;
      projectile.y += projectile.vy * STEP;
      projectile.life -= STEP;
      if (projectile.life > 0 && projectile.kind === 'bolt') {
        const candidates = this.nearby(
          projectile.x,
          projectile.y,
          projectile.radius + 46,
        );
        let target: Enemy | undefined;
        let best = Infinity;
        for (const enemy of candidates) {
          const distance = distanceSquared(projectile, enemy);
          if (
            distance <= (projectile.radius + enemy.radius) ** 2 &&
            (distance < best || (distance === best && enemy.id < target!.id))
          ) {
            target = enemy;
            best = distance;
          }
        }
        if (target) {
          this.damage(target, this.projectileDamage.get(projectile.id) ?? 16);
          projectile.life = 0;
        }
      } else if (
        projectile.life > 0 &&
        distanceSquared(projectile, this.player) <=
          (projectile.radius + this.player.radius) ** 2
      ) {
        this.hurtPlayer(this.projectileDamage.get(projectile.id) ?? 12);
        projectile.life = 0;
      }
      if (
        projectile.life > 0 &&
        projectile.x >= -20 &&
        projectile.y >= -20 &&
        projectile.x <= WORLD_WIDTH + 20 &&
        projectile.y <= WORLD_HEIGHT + 20
      )
        this.projectiles[alive++] = projectile;
      else this.projectileDamage.delete(projectile.id);
    }
    this.projectiles.length = alive;
  }

  private damage(enemy: Enemy, amount: number): void {
    enemy.hp -= amount;
    enemy.hit = 0.12;
    this.events.push({ type: 'hit', target: 'enemy', x: enemy.x, y: enemy.y });
  }

  private hurtPlayer(amount: number): void {
    if (this.player.invulnerable > 0 || this.player.hp <= 0) return;
    this.player.hp = Math.max(0, this.player.hp - amount);
    this.player.invulnerable = PLAYER.immunity;
    this.events.push({
      type: 'hit',
      target: 'player',
      x: this.player.x,
      y: this.player.y,
    });
  }

  private resolveEnemies(): void {
    let alive = 0;
    let clearedGuardian: Enemy | undefined;
    for (const enemy of this.enemies) {
      if (enemy.hp <= 0) {
        this.kills++;
        this.enemyStates.delete(enemy.id);
        this.events.push({ type: 'kill', x: enemy.x, y: enemy.y });
        if (enemy.kind === 'guardian') {
          this.guardiansDefeated++;
          this.nextGuardianAt = this.elapsed + GUARDIAN.afterClear;
          clearedGuardian = enemy;
        } else this.drop(enemy, ENEMIES[enemy.kind].xp);
      } else {
        if (
          distanceSquared(enemy, this.player) <=
          (enemy.radius + this.player.radius) ** 2
        )
          this.hurtPlayer(ENEMIES[enemy.kind].damage * (1 + this.difficulty * 0.6));
        this.enemies[alive++] = enemy;
      }
    }
    this.enemies.length = alive;
    // Resolve every contact first: a reward cannot rescue a fatal hit on this tick.
    if (clearedGuardian && this.player.hp > 0) {
      this.player.hp = Math.min(
        this.player.maxHp,
        this.player.hp + this.player.maxHp * GUARDIAN.repair,
      );
      this.player.pulseCooldown = 0;
      this.xp += ENEMIES.guardian.xp;
      this.events.push({
        type: 'guardian',
        x: clearedGuardian.x,
        y: clearedGuardian.y,
      });
    }
  }

  private drop(enemy: Enemy, value: number): void {
    if (this.pickups.length < LIMITS.pickups) {
      this.pickups.push({
        id: this.nextId++,
        x: enemy.x,
        y: enemy.y,
        radius: 6,
        value,
      });
      return;
    }
    let nearest = this.pickups[0]!;
    let best = distanceSquared(nearest, enemy);
    for (const pickup of this.pickups) {
      const distance = distanceSquared(pickup, enemy);
      if (distance < best) {
        nearest = pickup;
        best = distance;
      }
    }
    nearest.value += value;
  }

  private collect(): void {
    const radius =
      PLAYER.pickupRadius +
      this.player.passives.pickupRadius * PASSIVES.pickupRadius.perRank;
    let alive = 0;
    for (const pickup of this.pickups) {
      const distance = Math.hypot(pickup.x - this.player.x, pickup.y - this.player.y);
      if (distance <= radius) {
        const travel = 430 * STEP;
        if (distance <= this.player.radius + pickup.radius + travel) {
          this.xp += pickup.value;
          continue;
        }
        pickup.x += ((this.player.x - pickup.x) / distance) * travel;
        pickup.y += ((this.player.y - pickup.y) / distance) * travel;
      }
      this.pickups[alive++] = pickup;
    }
    this.pickups.length = alive;
  }

  private offerUpgrade(): void {
    if (this.xp < this.xpNeeded) return;
    this.xp -= this.xpNeeded;
    this.level++;
    this.xpNeeded = Math.min(
      320,
      Math.floor(8 + this.level * 6 + this.level ** 2 * 1.3),
    );
    const choices: Offer[] = [];
    for (const kind of weaponKinds) {
      const rank = this.player.weapons[kind] + 1;
      const definition = WEAPONS[kind];
      if (rank <= definition.maxRank)
        choices.push({
          id: `weapon:${kind}`,
          kind: 'weapon',
          rank,
          title: definition.title,
          description: `${definition.description} Rank ${rank} of ${definition.maxRank}.`,
        });
    }
    for (const kind of passiveKinds) {
      const rank = this.player.passives[kind] + 1;
      const definition = PASSIVES[kind];
      if (rank <= definition.maxRank)
        choices.push({
          id: `passive:${kind}`,
          kind: 'passive',
          rank,
          title: definition.title,
          description: `${definition.description} Rank ${rank} of ${definition.maxRank}.`,
        });
    }
    for (let i = choices.length - 1; i > 0; i--) {
      const index = Math.floor(this.random() * (i + 1));
      [choices[i], choices[index]] = [choices[index]!, choices[i]!];
    }
    const weapons = choices.filter((offer) => offer.kind === 'weapon');
    const selected = this.level === 2 && weapons.length ? weapons : choices.slice(0, 3);
    if (weapons.length && !selected.some((offer) => offer.kind === 'weapon'))
      selected[selected.length - 1] = weapons[0]!;
    this.offers = selected.length
      ? selected
      : [
          {
            id: 'repair',
            kind: 'repair',
            rank: 1,
            title: 'Emergency Repair',
            description: 'Restore 20% of maximum health.',
          },
        ];
    this.phase = 'upgrade';
    this.pulseHeld = false;
    this.events.push({ type: 'level', x: this.player.x, y: this.player.y });
  }

  private finish(): void {
    this.endReason = 'health';
    this.phase = 'lost';
    this.events.push({
      type: 'lose',
      x: this.player.x,
      y: this.player.y,
    });
  }
}

export { CONTENT_VERSION };
