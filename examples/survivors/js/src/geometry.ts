import { VIEW_WIDTH, VIEW_HEIGHT, WORLD_WIDTH, WORLD_HEIGHT } from './content.ts';

export function viewport(
  width: number,
  height: number,
): { width: number; height: number } {
  const scale = Math.max(
    Math.min(width / VIEW_WIDTH, height / VIEW_HEIGHT),
    width / WORLD_WIDTH,
    height / WORLD_HEIGHT,
  );
  return {
    width: Math.min(WORLD_WIDTH, width / scale),
    height: Math.min(WORLD_HEIGHT, height / scale),
  };
}

export function backing(
  width: number,
  height: number,
  devicePixelRatio: number,
  quality: 'balanced' | 'detailed',
): { width: number; height: number } {
  const limit = quality === 'balanced' ? 1 : 2;
  const scale = Math.min(
    (limit * viewport(width, height).width) / width,
    devicePixelRatio,
    Math.sqrt((VIEW_WIDTH * VIEW_HEIGHT * limit * limit) / (width * height)),
    1920 / Math.max(width, height),
  );
  return {
    width: Math.max(1, Math.floor(width * scale)),
    height: Math.max(1, Math.floor(height * scale)),
  };
}
