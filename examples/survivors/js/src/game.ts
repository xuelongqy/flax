import {
  BATTERY,
  BOLT_EVOLUTION,
  CONTENT_VERSION,
  DIFFICULTY_SECONDS,
  DISCHARGE,
  ENEMIES,
  GUARDIAN,
  LATE_GAME,
  LIMITS,
  NEST,
  OVERCHARGE,
  PASSIVES,
  PLAYER,
  PULSE,
  REACTOR,
  STEP,
  VIEW_HEIGHT,
  VIEW_WIDTH,
  WAVES,
  WAVE_SECONDS,
  WEAPONS,
  WORLD_HEIGHT,
  WORLD_WIDTH,
} from './content.ts';
import { coverHit, createCovers, moveWithCover, overlapsCover } from './arena.ts';
import type { Cover } from './arena.ts';

export type Phase = 'playing' | 'upgrade' | 'paused' | 'lost';
export type WeaponKind = 'bolt' | 'orbit' | 'chain';
export type EnemyKind = 'pursuer' | 'flanker' | 'brute' | 'sentry' | 'guardian' | 'battery' | 'nest';
export type BoltMode = 'standard' | 'pierce' | 'blast';
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
  mode?: 'pierce' | 'blast';
}
export interface Pickup extends Actor {
  value: number;
}
export interface Player extends Actor {
  hp: number;
  maxHp: number;
  pulseCooldown: number;
  invulnerable: number;
  boltMode: BoltMode;
  weapons: Record<WeaponKind, number>;
  passives: Record<PassiveKind, number>;
}
export interface Offer {
  id: string;
  title: string;
  description: string;
  kind: 'weapon' | 'passive' | 'repair' | 'evolution';
  rank: number;
}
export interface GameEvent {
  type:
    | 'shot'
    | 'hit'
    | 'kill'
    | 'pulse'
    | 'chain'
    | 'level'
    | 'guardian'
    | 'lose'
    | 'reactorCapture'
    | 'overchargeWindup'
    | 'overcharge'
    | 'shieldBreak'
    | 'batteryBlast'
    | 'boltBlast'
    | 'nestClear'
    | 'coverBreak'
    | 'fieldPulse';
  x: number;
  y: number;
  toX?: number;
  toY?: number;
  target?: 'player' | 'enemy';
  arcs?: readonly { x: number; y: number }[];
  radius?: number;
}
interface Discharge {
  x: number;
  y: number;
  radius: number;
  started: number;
  expiresAt: number;
}
interface Reactor {
  x: number;
  y: number;
  radius: number;
  progress: number;
  expiresAt: number;
}
interface EnemyState {
  attackAt: number;
  attack: 'radial' | 'charge';
  radialAngles: readonly number[] | undefined;
  chargeUntilTick: number;
  brokenUntilTick: number;
  orbitAt: number;
  waypoint: { x: number; y: number; coverId: number } | undefined;
}

const TAU = Math.PI * 2;
const GRID_SIZE = 100;
const GRID_COLUMNS = Math.ceil(WORLD_WIDTH / GRID_SIZE) + 1;
const FIRST_REACTOR_TICK = Math.round(REACTOR.firstAt / STEP);
const REACTOR_INTERVAL_TICKS = Math.round(REACTOR.interval / STEP);
const REACTOR_DURATION_TICKS = Math.round(REACTOR.duration / STEP);
const REACTOR_CAPTURE_TICKS = Math.round(REACTOR.captureSeconds / STEP);
const OVERCHARGE_WINDUP_TICKS = Math.round(OVERCHARGE.windup / STEP);
const GUARDIAN_CHARGE_TICKS = Math.round(GUARDIAN.chargeDuration / STEP);
const GUARDIAN_EXPOSURE_TICKS = Math.round(GUARDIAN.coreExposure / STEP);
const GUARDIAN_BREAK_TICKS = Math.round(GUARDIAN.breakDuration / STEP);
const NEST_SUMMON_TICKS = Math.round(NEST.summonInterval / STEP);
const NEST_WARNING_TICKS = Math.round(NEST.summonWarning / STEP);
const DISCHARGE_WARNING_TICKS = Math.round(DISCHARGE.warning / STEP);
const DISCHARGE_PULSE_TICKS = Math.round(DISCHARGE.pulseEvery / STEP);
const DISCHARGE_ACTIVE_TICKS = Math.round(DISCHARGE.activeSeconds / STEP);
const weaponKinds: WeaponKind[] = ['bolt', 'orbit', 'chain'];
const passiveKinds: PassiveKind[] = [
  'fireRate',
  'moveSpeed',
  'pickupRadius',
  'maxHealth',
];
const clamp = (value: number, low: number, high: number): number =>
  Math.min(high, Math.max(low, value));
const distanceSquared = (
  a: Pick<Actor, 'x' | 'y'>,
  b: Pick<Actor, 'x' | 'y'>,
): number => (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
const actorHit = (x: number, y: number, dx: number, dy: number, radius: number,
  target: Actor): number | undefined => {
  const rx = x - target.x;
  const ry = y - target.y;
  const c = rx * rx + ry * ry - (radius + target.radius) ** 2;
  if (c <= 0) return 0;
  const a = dx * dx + dy * dy;
  const b = rx * dx + ry * dy;
  const discriminant = b * b - a * c;
  if (!a || discriminant < 0) return undefined;
  const hit = (-b - Math.sqrt(discriminant)) / a;
  return hit >= 0 && hit <= 1 ? hit : undefined;
};

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
    boltMode: 'standard',
    weapons: { bolt: 1, orbit: 0, chain: 0 },
    passives: { fireRate: 0, moveSpeed: 0, pickupRadius: 0, maxHealth: 0 },
  };
  enemies: Enemy[] = [];
  projectiles: Projectile[] = [];
  pickups: Pickup[] = [];
  offers: Offer[] = [];
  events: GameEvent[] = [];
  readonly covers: readonly Cover[] = createCovers();
  endReason: 'health' | null = null;
  private randomState: number;
  private nextId = 1;
  private spawnAt = 0.3;
  private nextGuardianAt = GUARDIAN.firstAt;
  private nextNestAt = NEST.firstAt;
  private spawnLullUntil = 0;
  private nextDischargeAt = DISCHARGE.firstAt;
  private activeDischarge: Discharge | undefined;
  private dischargeTick = 0;
  private pendingEvolution = false;
  private activeReactor: Reactor | undefined;
  private reactorCaptureTicks = 0;
  private storedOvercharge = false;
  private overchargeWindup: { x: number; y: number; tick: number } | undefined;
  private pausedPhase: 'playing' | 'upgrade' = 'playing';
  private pulseHeld = false;
  private boltAt = 0;
  private chainAt = 0;
  private grid = new Map<number, Enemy[]>();
  private enemyStates = new Map<number, EnemyState>();
  private projectileDamage = new Map<number, number>();
  private projectileHits = new Map<number, number[]>();

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

  get reactor(): Readonly<Reactor> | undefined {
    return this.activeReactor;
  }

  get overchargeReady(): boolean {
    return this.storedOvercharge;
  }

  get nest(): Enemy | undefined {
    return this.enemies.find((enemy) => enemy.kind === 'nest' && enemy.hp > 0);
  }

  get discharge(): Readonly<Discharge> | undefined {
    return this.activeDischarge;
  }

  get dischargePhase(): 'warning' | 'active' | 'rest' | undefined {
    if (!this.activeDischarge) return undefined;
    const tick = (this.tick - this.dischargeTick) % DISCHARGE_PULSE_TICKS;
    return tick < DISCHARGE_WARNING_TICKS ? 'warning' :
      tick < DISCHARGE_WARNING_TICKS + DISCHARGE_ACTIVE_TICKS ? 'active' : 'rest';
  }

  guardianAttack(id: number): 'radial' | 'charge' | undefined {
    return this.enemyStates.get(id)?.attack;
  }

  guardianRadialAngles(id: number): readonly number[] | undefined {
    return this.enemyStates.get(id)?.radialAngles;
  }

  guardianCoreState(id: number): 'sealed' | 'exposed' | 'broken' {
    const state = this.enemyStates.get(id);
    if (!state) return 'sealed';
    if (this.tick < state.brokenUntilTick) return 'broken';
    if (
      state.chargeUntilTick > 0 &&
      this.tick >= state.chargeUntilTick &&
      this.tick < state.chargeUntilTick + GUARDIAN_EXPOSURE_TICKS
    )
      return 'exposed';
    return 'sealed';
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
    moveWithCover(player, (x / magnitude) * speed * STEP,
      (y / magnitude) * speed * STEP, this.covers);
    this.updateReactor();
    this.spawn();
    this.moveEnemies();
    this.buildGrid();
    this.updateDischarge();
    const windup = this.overchargeWindup;
    if (windup && this.tick >= windup.tick) {
      this.overchargeWindup = undefined;
      this.shockwave(windup.x, windup.y, true);
    } else if (
      !windup &&
      input.pulse &&
      !this.pulseHeld &&
      player.pulseCooldown === 0
    ) {
      player.pulseCooldown = PULSE.cooldown;
      if (this.storedOvercharge) {
        this.storedOvercharge = false;
        this.overchargeWindup = {
          x: player.x,
          y: player.y,
          tick: this.tick + OVERCHARGE_WINDUP_TICKS,
        };
        this.events.push({ type: 'overchargeWindup', x: player.x, y: player.y });
      } else this.shockwave(player.x, player.y, false);
    }
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
    } else if (offer.kind === 'evolution') {
      if (this.player.boltMode !== 'standard') return false;
      this.player.boltMode = id === 'evolution:bolt:pierce' ? 'pierce' : 'blast';
      this.pendingEvolution = false;
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

  private updateReactor(): void {
    const reactor = this.activeReactor;
    if (reactor) {
      if (this.elapsed >= reactor.expiresAt) this.activeReactor = undefined;
      else if (distanceSquared(this.player, reactor) <= reactor.radius ** 2) {
        reactor.progress = ++this.reactorCaptureTicks / REACTOR_CAPTURE_TICKS;
        if (this.reactorCaptureTicks === REACTOR_CAPTURE_TICKS) {
          this.activeReactor = undefined;
          this.storedOvercharge = true;
          this.player.pulseCooldown = 0;
          this.events.push({ type: 'reactorCapture', x: reactor.x, y: reactor.y });
        }
      }
      return;
    }
    if (
      this.storedOvercharge ||
      this.tick < FIRST_REACTOR_TICK ||
      (this.tick - FIRST_REACTOR_TICK) % REACTOR_INTERVAL_TICKS !== 0
    )
      return;

    const position = this.encounterPosition(REACTOR.radius, REACTOR.distance);
    if (!position) return;
    this.activeReactor = {
      ...position,
      radius: REACTOR.radius,
      progress: 0,
      expiresAt: (this.tick + REACTOR_DURATION_TICKS) * STEP,
    };
    this.reactorCaptureTicks = 0;
  }

  private encounterPosition(radius: number, distance: number): { x: number; y: number } | undefined {
    const { x, y, width, height } = this.camera;
    const insetX = Math.min(radius, width / 2);
    const insetY = Math.min(radius, height / 2);
    const minX = x + insetX;
    const maxX = x + width - insetX;
    const minY = y + insetY;
    const maxY = y + height - insetY;
    let { x: targetX, y: targetY } = this.player;
    const right = maxX - targetX;
    const left = targetX - minX;
    const down = maxY - targetY;
    const up = targetY - minY;
    const room = Math.max(right, left, down, up);
    if (room === right) targetX += distance;
    else if (room === left) targetX -= distance;
    else if (room === down) targetY += distance;
    else targetY -= distance;
    for (let attempt = 0; attempt <= 8; attempt++) {
      const angle = ((attempt - 1) * TAU) / 8;
      const point = {
        x: clamp(attempt ? this.player.x + Math.cos(angle) * distance : targetX, minX, maxX),
        y: clamp(attempt ? this.player.y + Math.sin(angle) * distance : targetY, minY, maxY),
      };
      if (distanceSquared(point, this.player) > (radius + this.player.radius) ** 2 &&
        !this.covers.some((cover) => overlapsCover(point.x, point.y, radius, cover)))
        return point;
    }
    return undefined;
  }

  private updateDischarge(): void {
    if (this.activeDischarge && this.elapsed >= this.activeDischarge.expiresAt)
      this.activeDischarge = undefined;
    if (!this.activeDischarge && this.elapsed >= this.nextDischargeAt) {
      this.dischargeTick = this.tick;
      this.activeDischarge = {
        x: this.player.x,
        y: this.player.y,
        radius: DISCHARGE.radius,
        started: this.elapsed,
        expiresAt: this.elapsed + DISCHARGE.duration,
      };
      this.nextDischargeAt = this.elapsed + DISCHARGE.interval;
    }
    const field = this.activeDischarge;
    if (!field || (this.tick - this.dischargeTick) % DISCHARGE_PULSE_TICKS !== DISCHARGE_WARNING_TICKS)
      return;
    this.events.push({ type: 'fieldPulse', x: field.x, y: field.y, radius: field.radius });
    if (distanceSquared(this.player, field) <= (field.radius + this.player.radius) ** 2)
      this.hurtPlayer(DISCHARGE.playerDamage);
    for (const enemy of this.nearby(field.x, field.y, field.radius + ENEMIES.guardian.radius))
      if (distanceSquared(enemy, field) <= (field.radius + enemy.radius) ** 2)
        this.damage(enemy, DISCHARGE.enemyDamage, false);
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
    const limit = LIMITS.enemies - Number(this.elapsed >= this.nextGuardianAt);
    if (this.elapsed >= this.nextNestAt && this.enemies.length < limit && !this.nest) {
      const position = this.encounterPosition(NEST.spawnRadius + ENEMIES.battery.radius, 330);
      if (position && this.addEnemy('nest', position.x, position.y))
        this.nextNestAt = Infinity;
    }
    if (this.elapsed < this.spawnAt || this.elapsed < this.spawnLullUntil) return;
    const waveTime = this.elapsed % WAVE_SECONDS;
    let wave = WAVES[0]!;
    for (const candidate of WAVES) if (candidate.start <= waveTime) wave = candidate;
    // Later cycles keep siege threats instead of returning to starter-only packs.
    const pressure = clamp((this.elapsed - LATE_GAME.firstAt) / LATE_GAME.waveRamp, 0, 1);
    const siege = WAVES[2]!;
    const pursuer = wave.pursuer * (1 - pressure) + siege.pursuer * pressure;
    const flanker = wave.flanker * (1 - pressure) + siege.flanker * pressure;
    const brute = wave.brute * (1 - pressure) + siege.brute * pressure;
    this.spawnAt =
      this.elapsed + Math.max(0.28, wave.interval * (1 - this.difficulty * 0.25));
    for (let i = 0; i < wave.batch && this.enemies.length < limit; i++) {
      const roll = this.random();
      const kind =
        this.elapsed >= BATTERY.firstAt && roll < BATTERY.chance
          ? 'battery'
          : roll < pursuer
          ? 'pursuer'
          : roll < pursuer + flanker
            ? 'flanker'
            : roll < pursuer + flanker + brute
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
      if (this.addEnemy(kind, x, y)) return true;
    }
    return false;
  }

  private addEnemy(kind: EnemyKind, x: number, y: number): Enemy | undefined {
    const definition = ENEMIES[kind];
    if (this.enemies.length >= LIMITS.enemies ||
      this.covers.some((cover) => overlapsCover(x, y, definition.radius, cover))) return undefined;
    const lateHealth = clamp((this.elapsed - LATE_GAME.firstAt) /
      (DIFFICULTY_SECONDS - LATE_GAME.firstAt), 0, 1);
    const maxHp = definition.hp * (1 + this.difficulty * 3 + lateHealth * LATE_GAME.extraHealth);
    const enemy: Enemy = {
      id: this.nextId++, kind, x, y, radius: definition.radius,
      hp: maxHp, maxHp,
      angle: Math.atan2(this.player.y - y, this.player.x - x), warning: 0, hit: 0,
    };
    this.enemies.push(enemy);
    return enemy;
  }

  private summon(nest: Enemy): void {
    const start = this.random() * TAU;
    for (let i = 0; i < NEST.batch && this.enemies.length < LIMITS.enemies; i++) {
      const kind = i === 0 ? 'battery' : i === 1 ? 'pursuer' : 'flanker';
      const radius = ENEMIES[kind].radius;
      for (let attempt = 0; attempt < 8; attempt++) {
        const angle = start + (i * TAU) / NEST.batch + (attempt * TAU) / 8;
        const x = nest.x + Math.cos(angle) * NEST.spawnRadius;
        const y = nest.y + Math.sin(angle) * NEST.spawnRadius;
        if (x < radius || y < radius || x > WORLD_WIDTH - radius || y > WORLD_HEIGHT - radius ||
          (x - this.player.x) ** 2 + (y - this.player.y) ** 2 <
            (radius + this.player.radius + 40) ** 2) continue;
        if (this.addEnemy(kind, x, y)) break;
      }
    }
  }

  private moveEnemies(): void {
    const windup = this.overchargeWindup;
    const pullDistance = OVERCHARGE.pullSpeed * STEP;
    const pullRadiusSquared = OVERCHARGE.radius ** 2;
    for (const enemy of this.enemies) {
      if (enemy.hp <= 0) continue;
      enemy.hit = Math.max(0, enemy.hit - STEP);
      let state = this.enemyStates.get(enemy.id);
      if (!state) {
        state = {
          attackAt: enemy.kind === 'nest' ? (this.tick + NEST_SUMMON_TICKS) * STEP :
            this.elapsed + (enemy.kind === 'guardian' ? 1.3 : 1.5),
          // Open the first Guardian's core early enough for a saved Overcharge.
          attack:
            enemy.kind === 'guardian' &&
            (this.guardiansDefeated === 0 || this.guardiansDefeated % 2 === 1)
              ? 'charge'
              : 'radial',
          radialAngles: undefined,
          chargeUntilTick: 0,
          brokenUntilTick: 0,
          orbitAt: 0,
          waypoint: undefined,
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
      if (enemy.kind === 'nest') {
        if (this.elapsed >= state.attackAt) {
          this.summon(enemy);
          state.attackAt = (this.tick + NEST_SUMMON_TICKS) * STEP;
        }
        const until = Math.round((state.attackAt - this.elapsed) / STEP);
        enemy.warning = until <= NEST_WARNING_TICKS ? until * STEP : 0;
      } else if (enemy.kind === 'sentry') {
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
        if (this.tick < state.chargeUntilTick) {
          speed = GUARDIAN.chargeSpeed;
          moveAngle = enemy.angle;
        } else if (enemy.warning > 0) {
          speed = 0;
          enemy.warning = Math.max(0, enemy.warning - STEP);
          if (enemy.warning === 0) {
            if (state.attack === 'charge')
              state.chargeUntilTick = this.tick + GUARDIAN_CHARGE_TICKS;
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
        } else if (
          this.elapsed >= state.attackAt &&
          this.tick >= state.brokenUntilTick
        ) {
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
      const charging = enemy.kind === 'guardian' && this.tick < state.chargeUntilTick;
      let travel = speed * STEP;
      if (charging) {
        for (const cover of this.covers)
          if (coverHit(enemy.x, enemy.y, Math.cos(moveAngle) * speed * STEP,
            Math.sin(moveAngle) * speed * STEP, enemy.radius, cover) !== undefined) {
            cover.destroyed = true;
            this.events.push({ type: 'coverBreak', x: cover.x + cover.width / 2,
              y: cover.y + cover.height / 2, radius: Math.max(cover.width, cover.height) / 2 });
          }
      } else if (speed > 0) {
        moveAngle = this.routeAngle(enemy, state, moveAngle);
        if (state.waypoint)
          travel = Math.min(travel, Math.hypot(state.waypoint.x - enemy.x, state.waypoint.y - enemy.y));
      }
      moveWithCover(enemy, Math.cos(moveAngle) * travel,
        Math.sin(moveAngle) * travel, this.covers);
      if (charging) {
        const sideX = -Math.sin(enemy.angle);
        const sideY = Math.cos(enemy.angle);
        for (const other of this.enemies) {
          if (other === enemy || other.hp <= 0 || other.kind === 'guardian' || other.kind === 'nest' ||
            distanceSquared(enemy, other) > (enemy.radius + other.radius + 20) ** 2) continue;
          const side = (other.x - enemy.x) * sideX + (other.y - enemy.y) * sideY < 0 ? -1 : 1;
          moveWithCover(other, sideX * side * 85, sideY * side * 85, this.covers);
        }
      }
      if (windup && enemy.kind !== 'guardian' && enemy.kind !== 'nest') {
        const pullX = windup.x - enemy.x;
        const pullY = windup.y - enemy.y;
        const distance = pullX * pullX + pullY * pullY;
        if (distance > 0 && distance <= pullRadiusSquared) {
          const fraction = Math.min(1, pullDistance / Math.sqrt(distance));
          moveWithCover(enemy, pullX * fraction, pullY * fraction, this.covers);
        }
      }
    }
  }

  private routeAngle(enemy: Enemy, state: EnemyState, fallback: number): number {
    let obstacle: Cover | undefined;
    let first = Infinity;
    const dx = this.player.x - enemy.x;
    const dy = this.player.y - enemy.y;
    // Pursuit needs a reachable contact point even when the smaller player hugs a wall.
    const contact = 1 - (enemy.radius + this.player.radius) / (Math.hypot(dx, dy) || 1);
    for (const cover of this.covers) {
      const hit = coverHit(enemy.x, enemy.y, dx, dy, enemy.radius + 1, cover);
      if (hit !== undefined && hit < contact && hit < first) { obstacle = cover; first = hit; }
    }
    if (!obstacle) { state.waypoint = undefined; return fallback; }
    const waypoint = state.waypoint;
    // Arrive inside the two-unit wall clearance before considering the next corner.
    if (waypoint && this.covers.some((cover) => cover.id === waypoint.coverId && !cover.destroyed) &&
      distanceSquared(enemy, waypoint) > 1)
      return Math.atan2(waypoint.y - enemy.y, waypoint.x - enemy.x);
    state.waypoint = undefined;
    let best = Infinity;
    const margin = enemy.radius + 3;
    for (let corner = 0; corner < 4; corner++) {
      const x = corner % 2 ? obstacle.x + obstacle.width + margin : obstacle.x - margin;
      const y = corner < 2 ? obstacle.y - margin : obstacle.y + obstacle.height + margin;
      const distance = Math.hypot(x - enemy.x, y - enemy.y);
      if (distance <= 1 || this.covers.some((cover) =>
        coverHit(enemy.x, enemy.y, x - enemy.x, y - enemy.y, enemy.radius + 1, cover) !== undefined))
        continue;
      const cost = distance + Math.hypot(this.player.x - x, this.player.y - y);
      if (cost < best) {
        best = cost;
        state.waypoint = { x, y, coverId: obstacle.id };
      }
    }
    return state.waypoint ? Math.atan2(state.waypoint.y - enemy.y, state.waypoint.x - enemy.x) : fallback;
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

  private shockwave(x: number, y: number, overcharged: boolean): void {
    const effect = overcharged ? OVERCHARGE : PULSE;
    const arcs: { x: number; y: number }[] | undefined = overcharged ? [] : undefined;
    this.events.push(
      arcs ? { type: 'overcharge', x, y, arcs } : { type: 'pulse', x, y },
    );
    const weapons = this.player.weapons;
    const rank = Math.max(weapons.bolt, weapons.orbit, weapons.chain);
    const damage = effect.damage * (1 + Math.max(0, rank - 1) * 0.5);
    for (const enemy of this.nearby(x, y, effect.radius + ENEMIES.guardian.radius)) {
      const dx = enemy.x - x;
      const dy = enemy.y - y;
      const length = Math.hypot(dx, dy);
      if (length > effect.radius + enemy.radius) continue;
      if (arcs && arcs.length < OVERCHARGE.maxArcs)
        arcs.push({ x: enemy.x, y: enemy.y });
      if (
        overcharged &&
        enemy.kind === 'guardian' &&
        this.guardianCoreState(enemy.id) === 'exposed'
      ) {
        this.enemyStates.get(enemy.id)!.brokenUntilTick =
          this.tick + GUARDIAN_BREAK_TICKS;
        this.events.push({ type: 'shieldBreak', x: enemy.x, y: enemy.y });
      }
      this.damage(enemy, damage, !overcharged);
      const push = enemy.kind === 'nest' ? 0 :
        enemy.kind === 'guardian' ? effect.push * 0.25 : effect.push;
      moveWithCover(enemy, (length ? dx / length : 1) * push,
        (length ? dy / length : 0) * push, this.covers);
    }
    // Pulse moves enemies across cells before the automatic weapons query them.
    this.buildGrid();
    if (overcharged) {
      const origin = { x, y };
      const radiusSquared = effect.radius ** 2;
      let alive = 0;
      for (const projectile of this.projectiles) {
        if (
          projectile.kind === 'enemy' &&
          distanceSquared(projectile, origin) <= radiusSquared
        )
          this.projectileDamage.delete(projectile.id);
        else this.projectiles[alive++] = projectile;
      }
      this.projectiles.length = alive;
    }
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
        const mode = this.player.boltMode === 'standard' ? undefined : this.player.boltMode;
        const damage = definition.damage[weapons.bolt - 1]! *
          (mode ? BOLT_EVOLUTION[mode].damageMultiplier : 1);
        // Even fans retain a directly aimed shot instead of straddling small targets.
        for (let i = 0; i < count; i++)
          this.addProjectile(
            'bolt',
            this.player.x,
            this.player.y,
            angle + (i - Math.floor((count - 1) / 2)) * definition.spread,
            definition.speed,
            damage,
            1.05,
            mode,
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
    mode?: 'pierce' | 'blast',
  ): void {
    if (this.projectiles.length >= LIMITS.projectiles) return;
    const id = this.nextId++;
    this.projectiles.push({
      id,
      kind,
      x,
      y,
      radius: kind === 'bolt' ? mode ? 6 : 4 : 6,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life,
      ...(mode ? { mode } : {}),
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
      const x = projectile.x;
      const y = projectile.y;
      const dx = projectile.vx * STEP;
      const dy = projectile.vy * STEP;
      let wall = Infinity;
      for (const cover of this.covers) {
        const hit = coverHit(x, y, dx, dy, projectile.radius, cover);
        if (hit !== undefined && hit < wall) wall = hit;
      }
      projectile.x += dx;
      projectile.y += dy;
      projectile.life -= STEP;
      if (projectile.life > 0 && projectile.kind === 'bolt') {
        const candidates = this.nearby(
          x + dx / 2,
          y + dy / 2,
          projectile.radius + ENEMIES.guardian.radius + Math.hypot(dx, dy) / 2,
        );
        let hits = this.projectileHits.get(projectile.id);
        if (projectile.mode === 'pierce' && !hits) {
          hits = [];
          this.projectileHits.set(projectile.id, hits);
        }
        const remaining = hits ? BOLT_EVOLUTION.pierce.targets - hits.length : 1;
        for (let i = 0; i < remaining; i++) {
          let target: Enemy | undefined;
          let best = wall;
          for (const enemy of candidates) {
            if (enemy.hp <= 0 || hits?.includes(enemy.id)) continue;
            const hit = actorHit(x, y, dx, dy, projectile.radius, enemy);
            if (hit !== undefined && (hit < best ||
              (hit === best && target && enemy.id < target.id))) {
              target = enemy;
              best = hit;
            }
          }
          if (!target) break;
          const damage = this.projectileDamage.get(projectile.id) ?? 16;
          if (projectile.mode === 'blast') {
            this.events.push({ type: 'boltBlast', x: target.x, y: target.y,
              radius: BOLT_EVOLUTION.blast.radius });
            this.damage(target, damage, false);
            for (const other of this.nearby(target.x, target.y,
              BOLT_EVOLUTION.blast.radius + ENEMIES.guardian.radius))
              if (other !== target && distanceSquared(other, target) <=
                (BOLT_EVOLUTION.blast.radius + other.radius) ** 2)
                this.damage(other, damage * BOLT_EVOLUTION.blast.splashMultiplier, false);
          } else this.damage(target, damage);
          if (hits) hits.push(target.id);
          if (!hits || hits.length === BOLT_EVOLUTION.pierce.targets) {
            projectile.life = 0;
            break;
          }
        }
      } else if (projectile.life > 0) {
        const hit = actorHit(x, y, dx, dy, projectile.radius, this.player);
        if (hit !== undefined && hit < wall) {
          this.hurtPlayer(this.projectileDamage.get(projectile.id) ?? 12);
          projectile.life = 0;
        }
      }
      if (wall !== Infinity) projectile.life = 0;
      if (
        projectile.life > 0 &&
        projectile.x >= -20 &&
        projectile.y >= -20 &&
        projectile.x <= WORLD_WIDTH + 20 &&
        projectile.y <= WORLD_HEIGHT + 20
      )
        this.projectiles[alive++] = projectile;
      else {
        this.projectileDamage.delete(projectile.id);
        this.projectileHits.delete(projectile.id);
      }
    }
    this.projectiles.length = alive;
  }

  private damage(enemy: Enemy, amount: number, emitHit = true): void {
    if (enemy.hp <= 0) return;
    if (enemy.kind === 'guardian' && this.guardianCoreState(enemy.id) === 'broken')
      amount *= GUARDIAN.damageMultiplier;
    enemy.hp -= amount;
    enemy.hit = 0.12;
    if (emitHit)
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
    const deaths: { enemy: Enemy; power: number }[] = [];
    for (const enemy of this.enemies)
      if (enemy.hp <= 0) deaths.push({ enemy, power: 1 });
    // A death enters this bounded queue once; cascades never recurse or emit per-target hits.
    for (let i = 0; i < deaths.length; i++) {
      const { enemy: source, power } = deaths[i]!;
      if (source.kind !== 'battery') continue;
      this.events.push({ type: 'batteryBlast', x: source.x, y: source.y, radius: BATTERY.radius });
      for (const enemy of this.nearby(source.x, source.y, BATTERY.radius + ENEMIES.guardian.radius)) {
        if (distanceSquared(enemy, source) > (BATTERY.radius + enemy.radius) ** 2) continue;
        this.damage(enemy, BATTERY.damage * (1 + this.difficulty * 3) * power, false);
        if (enemy.hp <= 0) deaths.push({ enemy, power: power * BATTERY.chainFalloff });
      }
    }
    let alive = 0;
    for (const enemy of this.enemies) {
      if (enemy.hp <= 0) continue;
      if (distanceSquared(enemy, this.player) <= (enemy.radius + this.player.radius) ** 2)
        this.hurtPlayer(ENEMIES[enemy.kind].damage * (1 + this.difficulty * 0.6));
      this.enemies[alive++] = enemy;
    }
    this.enemies.length = alive;
    let clearedGuardian: Enemy | undefined;
    let clearedNest: Enemy | undefined;
    for (const { enemy } of deaths) {
      this.kills++;
      this.enemyStates.delete(enemy.id);
      this.events.push({ type: 'kill', x: enemy.x, y: enemy.y });
      if (enemy.kind === 'guardian') {
        this.guardiansDefeated++;
        this.nextGuardianAt = this.elapsed + GUARDIAN.afterClear;
        clearedGuardian = enemy;
      } else if (enemy.kind === 'nest') {
        this.nextNestAt = this.elapsed + NEST.afterClear;
        this.spawnLullUntil = (this.tick + Math.round(NEST.lull / STEP)) * STEP;
        clearedNest = enemy;
        this.events.push({ type: 'nestClear', x: enemy.x, y: enemy.y });
      } else this.drop(enemy, ENEMIES[enemy.kind].xp);
    }
    // Resolve every contact first: a reward cannot rescue a fatal hit on this tick.
    if (clearedNest && this.player.hp > 0) this.xp += ENEMIES.nest.xp;
    if (clearedGuardian && this.player.hp > 0) {
      this.player.hp = Math.min(
        this.player.maxHp,
        this.player.hp + this.player.maxHp * GUARDIAN.repair,
      );
      this.player.pulseCooldown = 0;
      this.xp += ENEMIES.guardian.xp;
      this.pendingEvolution = this.player.boltMode === 'standard';
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
    if (this.pendingEvolution && this.player.boltMode === 'standard') {
      this.offers = this.evolutionOffers();
      this.phase = 'upgrade';
      this.pulseHeld = false;
      return;
    }
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
    if (!choices.length) this.xpNeeded = LATE_GAME.repairXp;
    for (let i = choices.length - 1; i > 0; i--) {
      const index = Math.floor(this.random() * (i + 1));
      [choices[i], choices[index]] = [choices[index]!, choices[i]!];
    }
    const weapons = choices.filter((offer) => offer.kind === 'weapon');
    let selected = this.level === 2 && weapons.length ? weapons : choices.slice(0, 3);
    if (weapons.length && !selected.some((offer) => offer.kind === 'weapon'))
      selected[selected.length - 1] = weapons[0]!;
    if (this.level === BOLT_EVOLUTION.level && this.player.boltMode === 'standard')
      selected = [...this.evolutionOffers(), ...(weapons.length ? [weapons[0]!] : selected.slice(0, 1))];
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

  private evolutionOffers(): Offer[] {
    return (['pierce', 'blast'] as const).map((mode) => ({
      id: `evolution:bolt:${mode}`, kind: 'evolution', rank: 1,
      title: BOLT_EVOLUTION[mode].title, description: BOLT_EVOLUTION[mode].description,
    }));
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
