import type {} from '@flax/canvas/globals';
import type { ImageBitmap } from '@flax/canvas';
import {
  VIEW_WIDTH,
  VIEW_HEIGHT,
  WORLD_WIDTH,
  WORLD_HEIGHT,
  WEAPONS,
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
const HIT_DENSITY = 4;
const FLOOR_TILE = 640;
// Atlas rows are E/NE/N/SE/S; these octants advance clockwise from east.
const directionRows = [0, 3, 4, 3, 0, 1, 2, 1] as const;
const enemyColumns = { pursuer: 1, flanker: 2, brute: 3, sentry: 4, guardian: 5 };
const actorSizes = { pursuer: 64, flanker: 60, brute: 96, sentry: 70, guardian: 160 };

export class Scene {
  readonly canvas = new OffscreenCanvas(VIEW_WIDTH, VIEW_HEIGHT);
  private readonly ctx = this.canvas.getContext('2d')!;
  private readonly floor: ImageBitmap;
  private readonly hit: ImageBitmap;
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
  private pulse: { x: number; y: number; started: number } | undefined;
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
      this.hit = label.transferToImageBitmap();
    } catch (error) {
      floor?.close();
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
    for (const e of events) {
      if (e.type === 'pulse') {
        this.pulse = { x: e.x, y: e.y, started: elapsed };
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
      if (enemy && enemy.warning > 0) {
        c.strokeStyle = '#ffb13d';
        c.lineWidth = 3;
        c.beginPath();
        c.arc(enemy.x, enemy.y, enemy.radius + 14, 0, Math.PI * 2);
        c.stroke();
        const angles =
          enemy.kind === 'guardian' ? game.guardianRadialAngles(enemy.id) : undefined;
        for (const angle of angles ?? [enemy.angle]) {
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
      sprite(
        enemy ? enemyColumns[enemy.kind] : 0,
        row,
        actor.x,
        actor.y,
        size,
        octant >= 3 && octant <= 5,
      );
      if (enemy && (enemy.kind === 'guardian' || enemy.hp < enemy.maxHp)) {
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
    // Bolts leave the fill style unchanged, including when their sprite is rotated.
    let needsProjectileFill = true;
    for (const p of game.projectiles) {
      if (!visible(p.x, p.y, p.kind === 'bolt' ? 40 : Math.max(10, p.radius))) continue;
      if (p.kind === 'bolt') {
        const angle = Math.atan2(p.vy, p.vx);
        c.strokeStyle = '#58eaff';
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(p.x - Math.cos(angle) * 22, p.y - Math.sin(angle) * 22);
        c.lineTo(p.x, p.y);
        c.stroke();
        sprite(1, 5, p.x, p.y, 26, false, angle);
      } else {
        if (needsProjectileFill) {
          c.fillStyle = '#ffb132';
          needsProjectileFill = false;
        }
        c.beginPath();
        c.arc(p.x, p.y, Math.max(3, p.radius), 0, Math.PI * 2);
        c.fill();
      }
    }
    const orbitRank = game.player.weapons.orbit;
    if (orbitRank > 0) {
      const count = WEAPONS.orbit.blades[orbitRank - 1] ?? 0;
      c.strokeStyle = '#3b9fa6';
      c.lineWidth = 1;
      c.beginPath();
      c.arc(game.player.x, game.player.y, WEAPONS.orbit.radius, 0, Math.PI * 2);
      c.stroke();
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
    const charge = game.player.pulseCooldown;
    if (!reducedMotion && charge > 0 && charge <= 1.5) {
      const intensity = 1 - charge / 1.5;
      c.strokeStyle = '#79ffff';
      c.globalAlpha = 0.3 + intensity * 0.5;
      c.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        const angle = game.elapsed * 2 + (i * Math.PI * 2) / 3;
        c.beginPath();
        c.arc(game.player.x, game.player.y, 42 + intensity * 6, angle, angle + 0.65);
        c.stroke();
      }
      c.globalAlpha = 1;
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
        if (!reducedMotion) {
          if (age < 0.14) {
            c.fillStyle = '#eaffff';
            c.globalAlpha = (1 - age / 0.14) * 0.85;
            c.beginPath();
            c.arc(pulse.x, pulse.y, 18 + age * 110, 0, Math.PI * 2);
            c.fill();
          }
          c.globalAlpha = (1 - age / 0.5) * 0.35;
          c.lineWidth = 2;
          c.beginPath();
          c.arc(pulse.x, pulse.y, Math.max(8, radius - 22), 0, Math.PI * 2);
          c.stroke();
          c.globalAlpha = (1 - age / 0.5) * 0.85;
          c.beginPath();
          for (let i = 0; i < 8; i++) {
            const angle = (i * Math.PI * 2) / 8;
            const x = Math.cos(angle),
              y = Math.sin(angle);
            c.moveTo(pulse.x + x * (radius + 5), pulse.y + y * (radius + 5));
            c.lineTo(pulse.x + x * (radius + 18), pulse.y + y * (radius + 18));
          }
          c.stroke();
        }
        c.globalAlpha = 1;
      } else this.pulse = undefined;
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
    this.facings.clear();
    this.depthActors.length = 0;
    this.frameGame = undefined;
  }
  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    this.hit.close();
    this.floor.close();
    this.atlas.close();
    this.assets.floor.close();
    this.clearEffects();
  }
}
