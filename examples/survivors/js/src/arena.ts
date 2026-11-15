import { WORLD_HEIGHT, WORLD_WIDTH } from './content.ts';

export interface Cover {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  destroyed: boolean;
}

export function createCovers(): Cover[] {
  // Separate islands leave wide routes around every side and an open starting lane.
  return [
    { id: 1, x: 1260, y: 650, width: 180, height: 56, destroyed: false },
    { id: 2, x: 1830, y: 650, width: 56, height: 180, destroyed: false },
    { id: 3, x: 1310, y: 1120, width: 56, height: 180, destroyed: false },
    { id: 4, x: 1830, y: 1120, width: 180, height: 56, destroyed: false },
  ];
}

export function overlapsCover(x: number, y: number, radius: number, cover: Cover): boolean {
  return !cover.destroyed &&
    x > cover.x - radius && x < cover.x + cover.width + radius &&
    y > cover.y - radius && y < cover.y + cover.height + radius;
}

// Actors and shots use the same radius-expanded rectangle, including diagonal corners.
export function coverHit(
  x: number, y: number, dx: number, dy: number, radius: number, cover: Cover,
): number | undefined {
  if (cover.destroyed) return undefined;
  let enter = 0;
  let exit = 1;
  if (dx === 0) {
    if (x < cover.x - radius || x > cover.x + cover.width + radius) return undefined;
  } else {
    const a = (cover.x - radius - x) / dx;
    const b = (cover.x + cover.width + radius - x) / dx;
    enter = Math.max(enter, Math.min(a, b));
    exit = Math.min(exit, Math.max(a, b));
    if (enter > exit) return undefined;
  }
  if (dy === 0) {
    if (y < cover.y - radius || y > cover.y + cover.height + radius) return undefined;
  } else {
    const a = (cover.y - radius - y) / dy;
    const b = (cover.y + cover.height + radius - y) / dy;
    enter = Math.max(enter, Math.min(a, b));
    exit = Math.min(exit, Math.max(a, b));
    if (enter > exit) return undefined;
  }
  return enter;
}

export function moveWithCover(
  actor: { x: number; y: number; radius: number }, dx: number, dy: number,
  covers: readonly Cover[],
): void {
  const radius = actor.radius;
  for (const cover of covers) {
    if (!overlapsCover(actor.x, actor.y, radius, cover)) continue;
    const left = actor.x - (cover.x - radius);
    const right = cover.x + cover.width + radius - actor.x;
    const top = actor.y - (cover.y - radius);
    const bottom = cover.y + cover.height + radius - actor.y;
    const nearest = Math.min(left, right, top, bottom);
    if (nearest === left) actor.x = cover.x - radius;
    else if (nearest === right) actor.x = cover.x + cover.width + radius;
    else if (nearest === top) actor.y = cover.y - radius;
    else actor.y = cover.y + cover.height + radius;
  }
  let x = Math.max(radius, Math.min(WORLD_WIDTH - radius, actor.x + dx));
  for (const cover of covers) {
    if (cover.destroyed || actor.y <= cover.y - radius ||
      actor.y >= cover.y + cover.height + radius) continue;
    if (dx > 0 && actor.x <= cover.x - radius && x > cover.x - radius)
      x = cover.x - radius;
    else if (dx < 0 && actor.x >= cover.x + cover.width + radius &&
      x < cover.x + cover.width + radius) x = cover.x + cover.width + radius;
  }
  let y = Math.max(radius, Math.min(WORLD_HEIGHT - radius, actor.y + dy));
  for (const cover of covers) {
    if (cover.destroyed || x <= cover.x - radius || x >= cover.x + cover.width + radius)
      continue;
    if (dy > 0 && actor.y <= cover.y - radius && y > cover.y - radius)
      y = cover.y - radius;
    else if (dy < 0 && actor.y >= cover.y + cover.height + radius &&
      y < cover.y + cover.height + radius) y = cover.y + cover.height + radius;
  }
  actor.x = x;
  actor.y = y;
}
