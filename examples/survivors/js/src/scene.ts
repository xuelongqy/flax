import type {} from '@flax/canvas/globals';
import type { ImageBitmap } from '@flax/canvas';
import {
  VIEW_WIDTH,
  VIEW_HEIGHT,
  WORLD_WIDTH,
  WORLD_HEIGHT,
  WEAPONS,
  OVERCHARGE,
  REACTOR,
  DISCHARGE,
} from './content.ts';
import { backing } from './geometry.ts';
import type { Game, GameEvent, Enemy, Player } from './game';
import type { SceneAssets } from './resources';

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}
interface TimedPoint {
  x: number;
  y: number;
  started: number;
}
const HIT_DENSITY = 4;
const FLOOR_TILE = 640;
const TAU = Math.PI * 2;
const GOLD = '#ffcc65';
const PURPLE = '#d9adff';
const BLAST_LIMIT = 6;
const BLAST_LIFETIME = 0.28;
const PROJECTILE_DIRECTIONS = 32;
const PROJECTILE_COLUMNS = 8;
const PROJECTILE_TILE = 128;
const PROJECTILE_DENSITY = 2;
const PROJECTILE_SIZE = PROJECTILE_TILE / PROJECTILE_DENSITY;
// Normalized bright-head pivots preserve the anchor when the source atlas is decoded smaller.
const projectileArt = [
  { width: 44, height: 44, pivotX: 414.44 / 627, pivotY: 337.82 / 627 },
  { width: 46, height: 46, pivotX: 440.93 / 627, pivotY: 333.1 / 627 },
  { width: 40, height: 40, pivotX: 453.1 / 627, pivotY: 304.95 / 627 },
  // A little more vertical glow covers the hostile hit area without lengthening its tail.
  { width: 48, height: 64, pivotX: 415.47 / 627, pivotY: 304.01 / 627 },
] as const;
const dischargeRays = [-2.8, -0.9, 0.95].map((angle) => ({
  x: Math.cos(angle),
  y: Math.sin(angle),
}));
// Atlas rows are E/NE/N/SE/S; these octants advance clockwise from east.
const directionRows = [0, 3, 4, 3, 0, 1, 2, 1] as const;
const enemyColumns = {
  pursuer: 1,
  flanker: 2,
  brute: 3,
  sentry: 4,
  guardian: 5,
  battery: 4,
  nest: 3,
};
const actorSizes = {
  pursuer: 64,
  flanker: 60,
  brute: 96,
  sentry: 70,
  guardian: 160,
  battery: 76,
  nest: 136,
};

export class Scene {
  readonly canvas = new OffscreenCanvas(VIEW_WIDTH, VIEW_HEIGHT);
  private readonly ctx = this.canvas.getContext('2d')!;
  private readonly floor: ImageBitmap;
  private readonly hit: ImageBitmap;
  private readonly projectilePoses: ImageBitmap;
  private readonly hitOriginX: number;
  private readonly hitOriginY: number;
  private disposed = false;
  private frameGame: Game | undefined;
  private poseFrame = 0;
  private readonly depthActors: (Enemy | Player)[] = [];
  private readonly facings = new Map<
    number,
    { x: number; y: number; angle: number; frame: number }
  >();
  private sparks: Spark[] = [];
  private pulse: TimedPoint | undefined;
  private reactorCapture: TimedPoint | undefined;
  private overcharge: { event: GameEvent; started: number } | undefined;
  private shieldBreak: TimedPoint | undefined;
  private blasts: (TimedPoint & {
    radius: number;
    kind: 'batteryBlast' | 'boltBlast' | 'nestClear' | 'coverBreak';
  })[] = [];
  private peakParticles = false;
  get peakParticleCount(): number {
    return this.peakParticles ? 300 : 0;
  }
  setPeakParticles(enabled: boolean): void {
    this.peakParticles = enabled;
    if (enabled) this.sparks = [];
  }
  private flashes: {
    x: number;
    y: number;
    toX?: number;
    toY?: number;
    kind: string;
    life: number;
  }[] = [];
  readonly atlas: ImageBitmap;
  private readonly assets: SceneAssets;
  constructor(assets: SceneAssets) {
    this.assets = assets;
    this.atlas = assets.actors;
    let floor: ImageBitmap | undefined;
    let hit: ImageBitmap | undefined;
    try {
      const tile = new OffscreenCanvas(FLOOR_TILE * 2, FLOOR_TILE * 2);
      const c = tile.getContext('2d')!;
      // Four textured panel arrangements are baked once; tile choice never touches game RNG.
      for (let variant = 0; variant < 4; variant++) {
        const ox = (variant % 2) * FLOOR_TILE;
        const oy = Math.floor(variant / 2) * FLOOR_TILE;
        c.save();
        c.translate(ox, oy);
        const crop = 0.84;
        c.drawImage(
          assets.floor,
          (variant % 2) * assets.floor.width * (1 - crop),
          Math.floor(variant / 2) * assets.floor.height * (1 - crop),
          assets.floor.width * crop,
          assets.floor.height * crop,
          0,
          0,
          FLOOR_TILE,
          FLOOR_TILE,
        );
        c.fillStyle = '#27313d';
        c.globalAlpha = 0.14;
        c.fillRect(0, 0, FLOOR_TILE, FLOOR_TILE);
        c.globalAlpha = 1;
        c.fillStyle = '#bd9550';
        if (variant !== 0) {
          for (let stripe = 0; stripe < 5; stripe++) {
            const x = 32 + stripe * 16;
            c.beginPath();
            c.moveTo(x, 468);
            c.lineTo(x + 9, 468);
            c.lineTo(x + 23, 450);
            c.lineTo(x + 14, 450);
            c.fill();
          }
        }
        // Fixed stencils use the same identity rasterization boundary as the HIT cache.
        c.font = 'bold 22px sans-serif';
        c.textBaseline = 'alphabetic';
        c.fillStyle = '#84909b';
        if (variant === 1) c.fillText('A-3', 36, 434);
        if (variant === 2) {
          c.fillText('OUTPOST', 34, 404);
          c.fillText('BAY 02', 34, 436);
        }
        c.restore();
      }
      floor = tile.transferToImageBitmap();
      this.floor = floor;
      // Bake before world/view transforms; battle frames reuse pixels without glyph lookup.
      const label = new OffscreenCanvas(1, 1);
      const text = label.getContext('2d')!;
      text.font = 'bold 48px sans-serif';
      const metrics = text.measureText('HIT');
      const left = Math.ceil(Math.max(0, metrics.actualBoundingBoxLeft));
      const right = Math.ceil(Math.max(metrics.width, metrics.actualBoundingBoxRight));
      const ascent = Math.ceil(Math.max(0, metrics.actualBoundingBoxAscent));
      const descent = Math.ceil(Math.max(0, metrics.actualBoundingBoxDescent));
      const padding = 4;
      label.width = left + right + padding * 2;
      label.height = ascent + descent + padding * 2;
      text.font = 'bold 48px sans-serif';
      text.fillStyle = '#fff2c7';
      text.textBaseline = 'alphabetic';
      text.fillText('HIT', left + padding, ascent + padding);
      this.hitOriginX = (left + padding) / HIT_DENSITY;
      this.hitOriginY = (ascent + padding) / HIT_DENSITY;
      hit = label.transferToImageBitmap();
      this.hit = hit;
      // Quantized flight poses keep rotation and bitmap creation out of dense battle frames.
      const poses = new OffscreenCanvas(
        PROJECTILE_COLUMNS * PROJECTILE_TILE,
        ((4 * PROJECTILE_DIRECTIONS) / PROJECTILE_COLUMNS) * PROJECTILE_TILE,
      );
      const flight = poses.getContext('2d')!;
      const sourceWidth = assets.projectiles.width / 2;
      const sourceHeight = assets.projectiles.height / 2;
      for (let kind = 0; kind < 4; kind++)
        for (let direction = 0; direction < PROJECTILE_DIRECTIONS; direction++) {
          const index = kind * PROJECTILE_DIRECTIONS + direction;
          const art = projectileArt[kind]!;
          const width = art.width * PROJECTILE_DENSITY,
            height = art.height * PROJECTILE_DENSITY;
          flight.save();
          flight.beginPath();
          flight.rect(
            (index % PROJECTILE_COLUMNS) * PROJECTILE_TILE,
            Math.floor(index / PROJECTILE_COLUMNS) * PROJECTILE_TILE,
            PROJECTILE_TILE,
            PROJECTILE_TILE,
          );
          // Faint source pixels outside the head and tail cannot bleed into another pose.
          flight.clip();
          flight.translate(
            ((index % PROJECTILE_COLUMNS) + 0.5) * PROJECTILE_TILE,
            (Math.floor(index / PROJECTILE_COLUMNS) + 0.5) * PROJECTILE_TILE,
          );
          flight.rotate((direction * TAU) / PROJECTILE_DIRECTIONS);
          flight.drawImage(
            assets.projectiles,
            (kind % 2) * sourceWidth,
            Math.floor(kind / 2) * sourceHeight,
            sourceWidth,
            sourceHeight,
            -art.pivotX * width,
            -art.pivotY * height,
            width,
            height,
          );
          flight.restore();
        }
      this.projectilePoses = poses.transferToImageBitmap();
    } catch (error) {
      for (const bitmap of [floor, hit])
        try {
          bitmap?.close();
        } catch {
          /* Preserve construction failure; the caller still owns every input. */
        }
      throw error;
    }
  }
  private face(
    actor: { id: number; x: number; y: number },
    aim: number | undefined,
    fallback = 0,
  ): void {
    const prior = this.facings.get(actor.id);
    const dx = prior ? actor.x - prior.x : 0;
    const dy = prior ? actor.y - prior.y : 0;
    const angle =
      aim ??
      (dx * dx + dy * dy > 0.000001 ? Math.atan2(dy, dx) : (prior?.angle ?? fallback));
    if (prior) {
      prior.x = actor.x;
      prior.y = actor.y;
      prior.angle = angle;
      prior.frame = this.poseFrame;
    } else
      this.facings.set(actor.id, {
        x: actor.x,
        y: actor.y,
        angle,
        frame: this.poseFrame,
      });
  }
  events(
    events: GameEvent[],
    reduced: boolean,
    quality: 'balanced' | 'detailed',
    elapsed: number,
  ): void {
    if (this.blasts.length)
      this.blasts = this.blasts.filter(
        (blast) => elapsed - blast.started < BLAST_LIFETIME,
      );
    for (const e of events) {
      if (
        e.type === 'batteryBlast' ||
        e.type === 'boltBlast' ||
        e.type === 'nestClear' ||
        e.type === 'coverBreak'
      ) {
        // A cascade can kill the whole population; its visual budget stays constant.
        if (this.blasts.length === BLAST_LIMIT && e.type !== 'boltBlast') {
          const bolt = this.blasts.findIndex((blast) => blast.kind === 'boltBlast');
          if (bolt >= 0) this.blasts.splice(bolt, 1);
        }
        if (this.blasts.length < BLAST_LIMIT)
          this.blasts.push({
            x: e.x,
            y: e.y,
            started: elapsed,
            kind: e.type,
            radius: e.radius ?? (e.type === 'nestClear' ? 74 : 30),
          });
        continue;
      }
      if (e.type === 'pulse') {
        this.pulse = { x: e.x, y: e.y, started: elapsed };
        continue;
      }
      if (e.type === 'overchargeWindup' || e.type === 'overcharge') {
        this.overcharge = { event: e, started: elapsed };
        continue;
      }
      if (e.type === 'reactorCapture') {
        this.reactorCapture = { x: e.x, y: e.y, started: elapsed };
        continue;
      }
      if (e.type === 'shieldBreak') {
        this.shieldBreak = { x: e.x, y: e.y, started: elapsed };
        continue;
      }
      if (
        e.type === 'hit' ||
        e.type === 'chain' ||
        e.type === 'kill' ||
        e.type === 'guardian'
      ) {
        if (
          this.flashes.length === 40 &&
          (e.type === 'kill' || e.type === 'guardian')
        ) {
          const hit = this.flashes.findIndex((flash) => flash.kind === 'hit');
          if (hit >= 0) this.flashes.splice(hit, 1);
        }
        if (this.flashes.length < 40)
          this.flashes.push({
            x: e.x,
            y: e.y,
            ...(e.toX === undefined ? {} : { toX: e.toX }),
            ...(e.toY === undefined ? {} : { toY: e.toY }),
            kind: e.type,
            life: 0.25,
          });
      }
      if (reduced || this.peakParticles) continue;
      if (e.type !== 'hit' && e.type !== 'kill' && e.type !== 'chain') continue;
      for (
        let i = 0;
        i < (quality === 'detailed' ? 5 : 2) &&
        this.sparks.length < (quality === 'detailed' ? 160 : 64);
        i++
      ) {
        const angle = (i * Math.PI * 2) / 5 + e.x * 0.01;
        this.sparks.push({
          x: e.x,
          y: e.y,
          vx: Math.cos(angle) * 80,
          vy: Math.sin(angle) * 80,
          life: 0.3,
          color: e.type === 'hit' || e.type === 'kill' ? '#ffac42' : '#5cffff',
        });
      }
    }
  }
  private polygonPath(
    x: number,
    y: number,
    radius: number,
    sides: number,
    rotation = 0,
  ): void {
    const c = this.ctx;
    c.beginPath();
    c.moveTo(x + Math.cos(rotation) * radius, y + Math.sin(rotation) * radius);
    for (let i = 1; i <= sides; i++) {
      const angle = rotation + (i * TAU) / sides;
      c.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
    }
  }
  private strokeBrackets(x: number, y: number, extent: number, length: number): void {
    const c = this.ctx;
    c.beginPath();
    for (let i = 0; i < 4; i++) {
      const sx = i < 2 ? -1 : 1,
        sy = i % 2 === 0 ? -1 : 1;
      c.moveTo(x + sx * (extent - length), y + sy * extent);
      c.lineTo(x + sx * extent, y + sy * extent);
      c.lineTo(x + sx * extent, y + sy * (extent - length));
    }
    c.stroke();
  }
  private drawObjectiveArrow(
    x: number,
    y: number,
    camera: Game['camera'],
    color: string,
    nest = false,
  ): void {
    const c = this.ctx;
    const { width, height } = camera;
    const centerX = camera.x + width / 2;
    const centerY = camera.y + height / 2;
    const dx = x - centerX,
      dy = y - centerY;
    if (
      Math.abs(dx) <= width / 2 - Math.min(70, width / 5) &&
      Math.abs(dy) <= height / 2 - Math.min(82, height / 5)
    )
      return;
    // Keep objective directions clear of touch controls and display cutouts.
    const insetX = width / 2 - Math.min(128, width / 4);
    const insetY = height / 2 - Math.min(160, height / 3);
    const scale = Math.min(insetX / Math.abs(dx), insetY / Math.abs(dy));
    const markerX = centerX + dx * scale,
      markerY = centerY + dy * scale;
    const angle = Math.atan2(dy, dx),
      ux = Math.cos(angle),
      uy = Math.sin(angle);
    c.fillStyle = nest ? '#281d36' : '#262016';
    this.polygonPath(markerX, markerY, nest ? 22 : 21, nest ? 4 : 6);
    c.fill();
    c.strokeStyle = color;
    c.lineWidth = 3;
    c.stroke();
    c.beginPath();
    c.moveTo(markerX - ux * 6 + uy * 7, markerY - uy * 6 - ux * 7);
    c.lineTo(markerX + ux * 8, markerY + uy * 8);
    c.lineTo(markerX - ux * 6 - uy * 7, markerY - uy * 6 + ux * 7);
    c.stroke();
  }
  private drawDischarge(game: Game): void {
    const field = game.discharge;
    if (!field) return;
    const { x, y, radius } = field;
    const dangerRadius = radius + game.player.radius;
    const phase = game.dischargePhase;
    const active = phase === 'active',
      warning = phase === 'warning';
    const c = this.ctx;
    c.fillStyle = active ? '#ef603c' : '#d99a45';
    c.globalAlpha = active ? 0.21 : warning ? 0.12 : 0.035;
    // Enclose the circular hazard plus player collision, even between polygon vertices.
    this.polygonPath(x, y, dangerRadius / Math.cos(Math.PI / 8), 8, Math.PI / 8);
    c.fill();
    c.globalAlpha = 1;
    c.lineWidth = active ? 4 : 3;
    c.strokeStyle = active ? '#ff8157' : warning ? '#ffac58' : '#756482';
    c.stroke();
    c.lineWidth = 3;
    c.beginPath();
    for (let i = 0; i < 8; i++) {
      const angle = (i * TAU) / 8,
        dx = Math.cos(angle),
        dy = Math.sin(angle);
      c.moveTo(
        x + dx * (dangerRadius - 9) - dy * 6,
        y + dy * (dangerRadius - 9) + dx * 6,
      );
      c.lineTo(
        x + dx * (dangerRadius + 8) + dy * 6,
        y + dy * (dangerRadius + 8) - dx * 6,
      );
    }
    c.stroke();
    if (warning) {
      const cycle = Math.max(0, (game.elapsed - field.started) % DISCHARGE.pulseEvery);
      c.fillStyle = '#483224';
      c.fillRect(x - 18, y + 20, 36, 4);
      c.fillStyle = GOLD;
      c.fillRect(x - 18, y + 20, 36 * Math.min(1, cycle / DISCHARGE.warning), 4);
    } else if (active) {
      c.strokeStyle = '#ffd6a3';
      c.lineWidth = 3;
      c.beginPath();
      for (const ray of dischargeRays) {
        const dx = ray.x * radius * 0.8,
          dy = ray.y * radius * 0.8;
        c.moveTo(x - dx, y - dy);
        c.lineTo(x - dx * 0.3 + dy * 0.13, y - dy * 0.3 - dx * 0.13);
        c.lineTo(x + dx * 0.3 - dy * 0.13, y + dy * 0.3 + dx * 0.13);
        c.lineTo(x + dx, y + dy);
      }
      c.stroke();
    }
    c.fillStyle = '#282332';
    c.fillRect(x - 8, y - 8, 16, 16);
    c.fillStyle = active || warning ? GOLD : '#82708e';
    c.fillRect(x - 3, y - 12, 6, 24);
    c.fillRect(x - 12, y - 3, 24, 6);
  }
  private drawNest(enemy: Enemy): void {
    const c = this.ctx;
    const { x, y } = enemy;
    c.fillStyle = '#0c111a';
    c.fillRect(x - 59, y + 23, 124, 22);
    c.fillStyle = '#453e58';
    c.fillRect(x - 54, y + 13, 108, 27);
    c.strokeStyle = '#9d82b5';
    c.lineWidth = 2;
    c.strokeRect(x - 54, y + 13, 108, 27);
    c.fillStyle = '#252e3b';
    c.fillRect(x - 33, y - 57, 66, 85);
    c.strokeRect(x - 33, y - 57, 66, 85);
    c.fillStyle = '#766382';
    c.fillRect(x - 52, y - 34, 16, 61);
    c.fillRect(x + 36, y - 34, 16, 61);
    c.fillStyle = '#130f20';
    c.fillRect(x - 24, y - 44, 48, 64);
    c.strokeStyle = PURPLE;
    c.lineWidth = enemy.warning > 0 ? 4 : 2;
    c.strokeRect(x - 24, y - 44, 48, 64);
    c.fillStyle = enemy.hit > 0 ? '#fff4d2' : PURPLE;
    c.fillRect(x - 49, y - 29, 10, 8);
    c.fillRect(x + 39, y - 29, 10, 8);
    c.fillRect(x - 11, y - 52, 22, 5);
    c.globalAlpha = 0.3;
    this.polygonPath(x, y - 12, 20, 4, -Math.PI / 2);
    c.fill();
    c.globalAlpha = 1;
    c.strokeStyle = PURPLE;
    c.lineWidth = 3;
    c.stroke();
    c.fillStyle = enemy.warning > 0 ? '#f5dcff' : '#766382';
    for (let i = 0; i < 3; i++) {
      c.fillRect(x - 48, y - 12 + i * 10, 8, 4);
      c.fillRect(x + 40, y - 12 + i * 10, 8, 4);
    }
  }
  private drawBlasts(elapsed: number, reduced: boolean): void {
    const c = this.ctx;
    if (!this.blasts.length) return;
    this.blasts = this.blasts.filter(
      (blast) => elapsed - blast.started < BLAST_LIFETIME,
    );
    for (const blast of this.blasts) {
      const age = Math.max(0, elapsed - blast.started);
      const reach = Math.min(42, blast.radius) * (reduced ? 0.6 : 0.45 + age * 1.8);
      c.strokeStyle =
        blast.kind === 'batteryBlast'
          ? '#ff9e50'
          : blast.kind === 'nestClear'
            ? PURPLE
            : blast.kind === 'boltBlast'
              ? '#83ffff'
              : GOLD;
      c.globalAlpha = (1 - age / BLAST_LIFETIME) * (reduced ? 0.65 : 0.9);
      c.lineWidth = reduced ? 2 : 3;
      c.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * TAU) / 4 + 0.35,
          dx = Math.cos(angle),
          dy = Math.sin(angle);
        c.moveTo(
          blast.x + dx * (reach - 8) - dy * 4,
          blast.y + dy * (reach - 8) + dx * 4,
        );
        c.lineTo(blast.x + dx * reach, blast.y + dy * reach);
        c.lineTo(
          blast.x + dx * (reach - 5) + dy * 4,
          blast.y + dy * (reach - 5) - dx * 4,
        );
      }
      c.stroke();
      if (age < 0.08) {
        c.fillStyle = '#fff0ce';
        this.polygonPath(blast.x, blast.y, reduced ? 8 : 13, 4);
        c.fill();
      }
    }
    c.globalAlpha = 1;
  }
  private drawReactor(
    reactor: NonNullable<Game['reactor']>,
    camera: Game['camera'],
  ): void {
    const c = this.ctx;
    const { x, y, radius, progress } = reactor;
    const { x: left, y: top, width, height } = camera;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    if (Math.abs(dx) <= width / 2 + radius && Math.abs(dy) <= height / 2 + radius) {
      c.fillStyle = '#392b1d';
      c.globalAlpha = 0.78;
      // Every point on the marked plate lies inside the actual capture circle.
      this.polygonPath(x, y, radius, 6);
      c.fill();
      c.globalAlpha = 1;
      c.strokeStyle = '#c4904d';
      c.lineWidth = 2;
      c.stroke();
      c.fillStyle = '#927049';
      c.fillRect(x - 22, y - 27, 44, 4);
      c.fillRect(x - 22, y + 23, 44, 4);
      c.fillStyle = GOLD;
      c.fillRect(x - 13, y - 7, 6, 14);
      c.fillRect(x - 3, y - 11, 6, 22);
      c.fillRect(x + 7, y - 7, 6, 14);
      c.fillStyle = '#191b23';
      c.fillRect(x - radius * 0.5, y + radius * 0.48, radius, 6);
      c.fillStyle = GOLD;
      c.fillRect(x - radius * 0.5, y + radius * 0.48, radius * progress, 6);
    }
    this.drawObjectiveArrow(x, y, camera, GOLD);
  }
  private drawOvercharge(elapsed: number, reduced: boolean): void {
    const effect = this.overcharge;
    if (!effect) return;
    const { x, y, type, arcs } = effect.event;
    const age = Math.max(0, elapsed - effect.started);
    const c = this.ctx;
    if (type === 'overchargeWindup') {
      const progress = Math.min(1, age / OVERCHARGE.windup);
      c.strokeStyle = GOLD;
      c.lineWidth = reduced ? 2 : 4;
      const reach = reduced ? 42 : 104 - 72 * progress;
      c.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * TAU) / 4,
          dx = Math.cos(angle),
          dy = Math.sin(angle);
        c.moveTo(x + dx * (reach + 9) - dy * 7, y + dy * (reach + 9) + dx * 7);
        c.lineTo(x + dx * (reach - 7), y + dy * (reach - 7));
        c.lineTo(x + dx * (reach + 9) + dy * 7, y + dy * (reach + 9) - dx * 7);
      }
      c.stroke();
      return;
    }
    const lifetime = reduced ? 0.42 : 0.5;
    if (age >= lifetime) {
      this.overcharge = undefined;
      return;
    }
    const fade = 1 - age / lifetime;
    const reach = 1 - (1 - Math.min(1, age / 0.34)) ** 2;
    const radius = reduced ? OVERCHARGE.radius : 34 + (OVERCHARGE.radius - 34) * reach;
    c.strokeStyle = '#b4ffff';
    c.globalAlpha = fade * (reduced ? 0.65 : 1);
    c.lineWidth = reduced ? 2 : 5;
    c.beginPath();
    c.arc(x, y, radius, 0, TAU);
    c.stroke();
    if (!reduced) {
      if (age < 0.12) {
        c.fillStyle = '#eaffff';
        c.globalAlpha = (1 - age / 0.12) * 0.85;
        this.polygonPath(x, y, 22, 4);
        c.fill();
      }
      if (age >= 0.12) {
        c.strokeStyle = GOLD;
        c.globalAlpha = fade;
        c.lineWidth = 3;
        c.beginPath();
        const count = arcs?.length
          ? Math.min(OVERCHARGE.maxArcs, arcs.length)
          : dischargeRays.length;
        for (let i = 0; i < count; i++) {
          const target = arcs?.[i];
          const dx = target ? target.x - x : dischargeRays[i]!.x * radius * 0.62;
          const dy = target ? target.y - y : dischargeRays[i]!.y * radius * 0.62;
          const bend = i % 2 === 0 ? 0.13 : -0.13;
          c.moveTo(x + dx * 0.12, y + dy * 0.12);
          c.lineTo(x + dx * 0.32 + dy * bend, y + dy * 0.32 - dx * bend);
          c.lineTo(x + dx * 0.56 - dy * bend, y + dy * 0.56 + dx * bend);
          c.lineTo(x + dx * 0.74 + dy * bend, y + dy * 0.74 - dx * bend);
          c.lineTo(x + dx, y + dy);
        }
        c.stroke();
      }
    }
    c.globalAlpha = 1;
  }
  draw(
    game: Game,
    quality: 'balanced' | 'detailed',
    physicalWidth = 960,
    logicalWidth = 960,
    reducedMotion = false,
  ): void {
    const c = this.ctx;
    const camera = game.camera;
    const { width: viewWidth, height: viewHeight, x: cx, y: cy } = camera;
    const logicalHeight = (logicalWidth * viewHeight) / viewWidth;
    const pixels = backing(
      logicalWidth,
      logicalHeight,
      physicalWidth / logicalWidth,
      quality,
    );
    if (this.canvas.width !== pixels.width || this.canvas.height !== pixels.height) {
      this.canvas.width = pixels.width;
      this.canvas.height = pixels.height;
    }
    c.reset();
    c.scale(pixels.width / viewWidth, pixels.height / viewHeight);
    c.fillStyle = '#1d2834';
    c.fillRect(0, 0, viewWidth, viewHeight);
    c.save();
    c.translate(-cx, -cy);
    for (
      let y = Math.floor(cy / FLOOR_TILE) * FLOOR_TILE;
      y < cy + viewHeight;
      y += FLOOR_TILE
    )
      for (
        let x = Math.floor(cx / FLOOR_TILE) * FLOOR_TILE;
        x < cx + viewWidth;
        x += FLOOR_TILE
      ) {
        const hash =
          (Math.imul(x / FLOOR_TILE, 73856093) ^
            Math.imul(y / FLOOR_TILE, 19349663)) >>>
          0;
        const variant = (hash ^ (hash >>> 8)) % 4;
        c.drawImage(
          this.floor,
          (variant % 2) * FLOOR_TILE,
          Math.floor(variant / 2) * FLOOR_TILE,
          FLOOR_TILE,
          FLOOR_TILE,
          x,
          y,
          FLOOR_TILE,
          FLOOR_TILE,
        );
      }
    c.strokeStyle = '#4b6472';
    c.lineWidth = 4;
    c.strokeRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
    const visible = (x: number, y: number, margin: number): boolean =>
      x + margin >= cx &&
      x - margin <= cx + viewWidth &&
      y + margin >= cy &&
      y - margin <= cy + viewHeight;
    const field = game.discharge;
    if (
      field &&
      visible(
        field.x,
        field.y,
        (field.radius + game.player.radius) / Math.cos(Math.PI / 8) + 8,
      )
    )
      this.drawDischarge(game);
    for (const cover of game.covers) {
      const { x, y, width, height } = cover;
      if (!visible(x + width / 2, y + height / 2, Math.max(width, height) / 2 + 12))
        continue;
      if (cover.destroyed) {
        c.fillStyle = '#36404b';
        c.fillRect(x, y + height * 0.55, width * 0.42, height * 0.4);
        c.fillRect(x + width * 0.57, y + height * 0.3, width * 0.43, height * 0.5);
        continue;
      }
      c.fillStyle = '#101822';
      c.fillRect(x + 7, y + 10, width + 3, height + 2);
      c.fillStyle = '#364653';
      c.fillRect(x, y, width, height);
      c.strokeStyle = '#77909c';
      c.lineWidth = 2;
      c.strokeRect(x, y, width, height);
      c.fillStyle = '#526773';
      c.fillRect(x + 3, y + 3, width - 6, 8);
      c.fillStyle = '#c59b54';
      for (let i = 0; i < 3; i++) c.fillRect(x + 8 + i * 12, y + height - 9, 6, 5);
    }
    const reactor = game.reactor;
    if (reactor) this.drawReactor(reactor, camera);
    const nest = game.nest;
    if (nest) this.drawObjectiveArrow(nest.x, nest.y, camera, PURPLE, true);
    const sprite = (
      column: number,
      row: number,
      x: number,
      y: number,
      size: number,
      flip = false,
      rotation = 0,
    ): void => {
      if (!visible(x, y, size / 2)) return;
      const w = this.atlas.width / 6,
        h = this.atlas.height / 6;
      const width = size * Math.min(1, w / h),
        height = size * Math.min(1, h / w);
      // Most sprites need no local transform or saved Canvas state.
      if (!flip && rotation === 0) {
        c.drawImage(
          this.atlas,
          column * w,
          row * h,
          w,
          h,
          x - width / 2,
          y - height / 2,
          width,
          height,
        );
        return;
      }
      c.save();
      c.translate(x, y);
      if (flip) c.scale(-1, 1);
      if (rotation !== 0) c.rotate(rotation);
      c.drawImage(
        this.atlas,
        column * w,
        row * h,
        w,
        h,
        -width / 2,
        -height / 2,
        width,
        height,
      );
      c.restore();
    };
    if (this.frameGame !== game) {
      this.facings.clear();
      this.frameGame = game;
    }
    let aim: number | undefined;
    const range =
      game.player.weapons.bolt > 0
        ? WEAPONS.bolt.range
        : game.player.weapons.chain > 0
          ? WEAPONS.chain.range
          : 0;
    let nearestSquared = range * range;
    this.poseFrame++;
    for (const e of game.enemies) {
      this.face(e, e.kind === 'sentry' || e.warning > 0 ? e.angle : undefined, e.angle);
      const dx = e.x - game.player.x,
        dy = e.y - game.player.y;
      const distanceSquared = dx * dx + dy * dy;
      if (e.hp > 0 && distanceSquared < nearestSquared) {
        nearestSquared = distanceSquared;
        aim = Math.atan2(e.y - game.player.y, e.x - game.player.x);
      }
    }
    this.face(game.player, aim);
    for (const [id, pose] of this.facings)
      if (pose.frame !== this.poseFrame) this.facings.delete(id);
    for (const p of game.pickups) sprite(0, 5, p.x, p.y, 30);
    // Depth-sort a copy; simulation collection order is part of deterministic combat.
    this.depthActors.length = 0;
    for (const enemy of game.enemies) this.depthActors.push(enemy);
    this.depthActors.push(game.player);
    this.depthActors.sort((a, b) => a.y - b.y || a.id - b.id);
    for (const actor of this.depthActors) {
      const enemy = 'kind' in actor ? actor : undefined;
      const size = enemy ? actorSizes[enemy.kind] : 72;
      if (
        !visible(
          actor.x,
          actor.y,
          Math.max(size / 2, enemy?.warning ? actor.radius + 55 : 0),
        )
      )
        continue;
      if (enemy && enemy.kind !== 'nest' && enemy.warning > 0) {
        c.strokeStyle = '#ffb13d';
        c.lineWidth = 3;
        const angles =
          enemy.kind === 'guardian' ? game.guardianRadialAngles(enemy.id) : undefined;
        for (let i = 0; i < (angles?.length ?? 1); i++) {
          const angle = angles ? angles[i]! : enemy.angle;
          c.beginPath();
          c.moveTo(enemy.x, enemy.y);
          c.lineTo(
            enemy.x + Math.cos(angle) * (enemy.radius + 55),
            enemy.y + Math.sin(angle) * (enemy.radius + 55),
          );
          c.stroke();
        }
      }
      const angle = this.facings.get(actor.id)!.angle;
      const octant = ((Math.floor((angle + Math.PI / 8) / (Math.PI / 4)) % 8) + 8) % 8;
      const row = directionRows[octant]!;
      if (enemy?.kind === 'nest') this.drawNest(enemy);
      else {
        sprite(
          enemy ? enemyColumns[enemy.kind] : 0,
          row,
          actor.x,
          actor.y,
          size,
          octant >= 3 && octant <= 5,
        );
        if (enemy?.kind === 'battery') {
          c.fillStyle = '#392d24';
          c.fillRect(enemy.x - 12, enemy.y - 23, 24, 34);
          c.fillStyle = enemy.hit > 0 ? '#ffffff' : '#fff0aa';
          c.fillRect(enemy.x - 7, enemy.y - 20, 14, 27);
          c.fillStyle = '#ff9e50';
          c.fillRect(enemy.x - 10, enemy.y - 25, 20, 5);
          c.fillRect(enemy.x - 10, enemy.y + 7, 20, 5);
          c.fillStyle = '#745221';
          c.fillRect(enemy.x - 4, enemy.y - 12, 8, 3);
          c.fillRect(enemy.x - 1, enemy.y - 15, 3, 9);
        }
      }
      if (enemy?.kind === 'guardian') {
        const core = game.guardianCoreState(enemy.id);
        if (core !== 'broken') {
          const exposed = core === 'exposed';
          c.strokeStyle = exposed ? '#edcaff' : '#947daf';
          c.lineWidth = exposed ? 4 : 2;
          this.strokeBrackets(enemy.x, enemy.y, enemy.radius + 12, 18);
          if (exposed) {
            this.polygonPath(enemy.x, enemy.y, 15, 4);
            c.stroke();
          }
        }
      }
      if (
        enemy &&
        (enemy.kind === 'guardian' || enemy.kind === 'nest' || enemy.hp < enemy.maxHp)
      ) {
        c.fillStyle = '#16232e';
        c.fillRect(enemy.x - enemy.radius, enemy.y - size / 2 - 6, enemy.radius * 2, 4);
        c.fillStyle = enemy.hit > 0 ? '#fff4d2' : '#ff884c';
        c.fillRect(
          enemy.x - enemy.radius,
          enemy.y - size / 2 - 6,
          enemy.radius * 2 * Math.max(0, enemy.hp / enemy.maxHp),
          4,
        );
      }
    }
    for (const p of game.projectiles) {
      const kind =
        p.kind === 'enemy' ? 3 : p.mode === 'pierce' ? 1 : p.mode === 'blast' ? 2 : 0;
      // Scale the complete cached quad so the larger head keeps its baked tail.
      const size =
        PROJECTILE_SIZE *
        (kind === 3
          ? Math.max(1, p.radius / 6)
          : kind === 1
            ? 1.4
            : kind === 2
              ? 1.25
              : 1);
      if (!visible(p.x, p.y, size / 2)) continue;
      const direction =
        (Math.round((Math.atan2(p.vy, p.vx) * PROJECTILE_DIRECTIONS) / TAU) +
          PROJECTILE_DIRECTIONS) %
        PROJECTILE_DIRECTIONS;
      const index = kind * PROJECTILE_DIRECTIONS + direction;
      c.drawImage(
        this.projectilePoses,
        (index % PROJECTILE_COLUMNS) * PROJECTILE_TILE,
        Math.floor(index / PROJECTILE_COLUMNS) * PROJECTILE_TILE,
        PROJECTILE_TILE,
        PROJECTILE_TILE,
        p.x - size / 2,
        p.y - size / 2,
        size,
        size,
      );
    }
    const orbitRank = game.player.weapons.orbit;
    if (orbitRank > 0) {
      const count = WEAPONS.orbit.blades[orbitRank - 1] ?? 0;
      for (let i = 0; i < count; i++) {
        const a = game.elapsed * WEAPONS.orbit.rotation + (i * Math.PI * 2) / count;
        sprite(
          2,
          5,
          game.player.x + Math.cos(a) * WEAPONS.orbit.radius,
          game.player.y + Math.sin(a) * WEAPONS.orbit.radius,
          34,
          false,
          a + Math.PI / 2,
        );
      }
    }
    const pulse = this.pulse;
    if (pulse) {
      // Simulation time preserves the burst through pause, resize and lost frames.
      const age = Math.max(0, game.elapsed - pulse.started);
      if (age < 0.5) {
        const progress = Math.min(1, age / 0.4);
        const radius = 22 + 148 * (1 - (1 - progress) ** 2);
        c.strokeStyle = '#83ffff';
        c.lineWidth = reducedMotion ? 2 : 4 * (1 - age);
        c.globalAlpha = (reducedMotion ? 0.65 : 1) * (1 - age / 0.5);
        c.beginPath();
        c.arc(pulse.x, pulse.y, radius, 0, Math.PI * 2);
        c.stroke();
        if (!reducedMotion && age < 0.14) {
          c.fillStyle = '#eaffff';
          c.globalAlpha = (1 - age / 0.14) * 0.85;
          this.polygonPath(pulse.x, pulse.y, 20, 4);
          c.fill();
        }
        c.globalAlpha = 1;
      } else this.pulse = undefined;
    }
    const capture = this.reactorCapture;
    if (capture) {
      const progress = (game.elapsed - capture.started) / 0.42;
      if (progress >= 1) this.reactorCapture = undefined;
      else {
        c.strokeStyle = GOLD;
        c.lineWidth = reducedMotion ? 3 : 6;
        c.globalAlpha = 1 - progress;
        this.strokeBrackets(
          capture.x,
          capture.y,
          REACTOR.radius * 0.65 + (reducedMotion ? 0 : progress * 16),
          16,
        );
        c.globalAlpha = 1;
      }
    }
    this.drawOvercharge(game.elapsed, reducedMotion);
    this.drawBlasts(game.elapsed, reducedMotion);
    const shield = this.shieldBreak;
    if (shield) {
      const progress = (game.elapsed - shield.started) / 0.55;
      if (progress >= 1) this.shieldBreak = undefined;
      else {
        c.strokeStyle = '#ecc4ff';
        c.lineWidth = reducedMotion ? 3 : 7;
        c.globalAlpha = 1 - progress;
        const extent = 48 + (reducedMotion ? 0 : progress * 24);
        this.strokeBrackets(shield.x, shield.y, extent, 14);
        c.globalAlpha = 1;
      }
    }
    for (const f of this.flashes) {
      c.globalAlpha = Math.min(1, f.life * 4);
      c.strokeStyle = '#74ffff';
      c.lineWidth = 3;
      if (f.kind === 'chain' && f.toX !== undefined && f.toY !== undefined) {
        c.beginPath();
        c.moveTo(f.x, f.y);
        const dx = f.toX - f.x,
          dy = f.toY - f.y;
        const length = Math.hypot(dx, dy) || 1;
        for (let i = 1; i < 5; i++) {
          const offset = (i % 2 === 0 ? -1 : 1) * 8;
          c.lineTo(
            f.x + (dx * i) / 5 - (dy / length) * offset,
            f.y + (dy * i) / 5 + (dx / length) * offset,
          );
        }
        c.lineTo(f.toX, f.toY);
        c.stroke();
        sprite(3, 5, f.toX, f.toY, 22);
      } else if (f.kind === 'hit') {
        sprite(5, 5, f.x, f.y, 26);
        c.drawImage(
          this.hit,
          f.x + 8 - this.hitOriginX,
          f.y - 20 - (0.25 - f.life) * 30 - this.hitOriginY,
          this.hit.width / HIT_DENSITY,
          this.hit.height / HIT_DENSITY,
        );
      } else if (f.kind === 'kill' || f.kind === 'guardian') {
        sprite(5, 5, f.x, f.y, f.kind === 'guardian' ? 88 : 48);
      }
      f.life -= 1 / 60;
    }
    this.flashes = this.flashes.filter((f) => f.life > 0);
    c.globalAlpha = 1;
    if (this.peakParticles) {
      c.fillStyle = '#5cffff';
      for (let i = 0; i < 300; i++)
        c.fillRect(cx + ((i * 97) % viewWidth), cy + ((i * 53) % viewHeight), 3, 3);
    }
    for (const s of this.sparks) {
      c.fillStyle = s.color;
      c.globalAlpha = Math.min(1, s.life * 4);
      c.fillRect(s.x, s.y, 3, 3);
      s.x += s.vx / 60;
      s.y += s.vy / 60;
      s.life -= 1 / 60;
    }
    this.sparks = this.sparks.filter((s) => s.life > 0);
    c.globalAlpha = 1;
    c.restore();
  }
  clearEffects(): void {
    this.sparks = [];
    this.flashes = [];
    this.pulse = undefined;
    this.reactorCapture = undefined;
    this.overcharge = undefined;
    this.shieldBreak = undefined;
    this.blasts = [];
    this.facings.clear();
    this.depthActors.length = 0;
    this.frameGame = undefined;
  }
  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    for (const bitmap of [
      this.projectilePoses,
      this.hit,
      this.floor,
      this.atlas,
      this.assets.floor,
      this.assets.projectiles,
    ])
      try {
        bitmap.close();
      } catch {
        /* Session shutdown can make release unavailable; continue with the others. */
      }
    this.clearEffects();
  }
}
