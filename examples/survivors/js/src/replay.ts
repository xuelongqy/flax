import {
  CONTENT_VERSION,
  STEP,
  VIEW_WIDTH,
  VIEW_HEIGHT,
  WORLD_WIDTH,
  WORLD_HEIGHT,
} from './content.ts';
import { Game } from './game.ts';
import type { Input } from './game.ts';

export const GAME_VERSION = 2;
// Developer playback has a finite work budget; gameplay itself has no time limit.
export const MAX_REPLAY_TICKS = Math.round((4 * 3600) / STEP);
export interface Replay {
  version: number;
  contentVersion: string;
  seed: number;
  ticks: number;
  inputs: [tick: number, x: number, y: number, pulse: boolean][];
  upgrades: [tick: number, id: string][];
  pauses: number[];
  viewports: [tick: number, width: number, height: number][];
}

export function createReplay(seed: number): Replay {
  if (!Number.isSafeInteger(seed))
    throw new Error('Replay seed must be a safe integer.');
  return {
    version: GAME_VERSION,
    contentVersion: CONTENT_VERSION,
    seed: seed >>> 0,
    ticks: 0,
    inputs: [],
    upgrades: [],
    pauses: [],
    viewports: [[0, VIEW_WIDTH, VIEW_HEIGHT]],
  };
}

export function recordInput(replay: Replay, tick: number, input: Input): void {
  const previous = replay.inputs[replay.inputs.length - 1];
  if (
    !previous ||
    previous[1] !== input.x ||
    previous[2] !== input.y ||
    previous[3] !== input.pulse
  )
    replay.inputs.push([tick, input.x, input.y, input.pulse]);
  replay.ticks = Math.max(replay.ticks, tick + 1);
}

export function recordUpgrade(replay: Replay, tick: number, id: string): void {
  replay.upgrades.push([tick, id]);
}

// Pause duration does not consume ticks; retain the input-edge reset on resumption.
export function recordPause(replay: Replay, tick: number): void {
  if (replay.pauses[replay.pauses.length - 1] !== tick) replay.pauses.push(tick);
}

export function recordViewport(
  replay: Replay,
  tick: number,
  width: number,
  height: number,
): void {
  const previous = replay.viewports[replay.viewports.length - 1];
  if (previous?.[0] === tick) {
    previous[1] = width;
    previous[2] = height;
  } else if (!previous || previous[1] !== width || previous[2] !== height) {
    replay.viewports.push([tick, width, height]);
  }
}

export function runReplay(replay: Replay, batch = 1): Game {
  if (
    !replay ||
    replay.version !== GAME_VERSION ||
    replay.contentVersion !== CONTENT_VERSION
  )
    throw new Error('Unsupported replay version.');
  const maxTicks = MAX_REPLAY_TICKS;
  if (
    !Number.isSafeInteger(replay.seed) ||
    replay.seed < 0 ||
    replay.seed > 0xffffffff ||
    !Number.isInteger(replay.ticks) ||
    replay.ticks < 0 ||
    replay.ticks > maxTicks
  )
    throw new Error('Invalid replay seed or tick count.');
  if (!Number.isInteger(batch) || batch < 1 || batch > 3)
    throw new Error('Replay batch must be between one and three ticks.');
  if (
    !Array.isArray(replay.inputs) ||
    replay.inputs.length > maxTicks ||
    !Array.isArray(replay.upgrades) ||
    replay.upgrades.length > maxTicks ||
    !Array.isArray(replay.pauses) ||
    replay.pauses.length > maxTicks + 1
  )
    throw new Error('Invalid replay input or upgrade collection.');
  let previousTick = -1;
  for (const entry of replay.inputs) {
    if (
      !Array.isArray(entry) ||
      entry.length !== 4 ||
      !Number.isInteger(entry[0]) ||
      entry[0] <= previousTick ||
      entry[0] >= replay.ticks ||
      !Number.isFinite(entry[1]) ||
      !Number.isFinite(entry[2]) ||
      typeof entry[3] !== 'boolean'
    )
      throw new Error('Invalid replay input.');
    previousTick = entry[0];
  }
  previousTick = -1;
  for (const entry of replay.upgrades) {
    if (
      !Array.isArray(entry) ||
      entry.length !== 2 ||
      !Number.isInteger(entry[0]) ||
      entry[0] < 0 ||
      entry[0] < previousTick ||
      entry[0] > replay.ticks ||
      typeof entry[1] !== 'string' ||
      entry[1].length > 40
    )
      throw new Error('Invalid replay upgrade.');
    previousTick = entry[0];
  }
  previousTick = -1;
  for (const tick of replay.pauses) {
    if (!Number.isInteger(tick) || tick <= previousTick || tick > replay.ticks)
      throw new Error('Invalid replay pause.');
    previousTick = tick;
  }
  if (
    !Array.isArray(replay.viewports) ||
    !replay.viewports.length ||
    replay.viewports.length > maxTicks + 1 ||
    replay.viewports[0]?.[0] !== 0
  )
    throw new Error('Invalid replay viewport history.');
  previousTick = -1;
  for (const entry of replay.viewports) {
    if (
      !Array.isArray(entry) ||
      entry.length !== 3 ||
      !Number.isInteger(entry[0]) ||
      entry[0] <= previousTick ||
      entry[0] > replay.ticks ||
      !Number.isFinite(entry[1]) ||
      !Number.isFinite(entry[2]) ||
      entry[1] <= 0 ||
      entry[2] <= 0 ||
      entry[1] > WORLD_WIDTH ||
      entry[2] > WORLD_HEIGHT
    )
      throw new Error('Invalid replay viewport.');
    previousTick = entry[0];
  }
  const game = new Game(replay.seed);
  let input: Input = { x: 0, y: 0, pulse: false };
  let inputIndex = 0;
  let upgradeIndex = 0;
  let pauseIndex = 0;
  let viewportIndex = 0;
  const applyActions = (): void => {
    const viewport = replay.viewports[viewportIndex];
    if (viewport?.[0] === game.tick) {
      game.setViewport(viewport[1], viewport[2]);
      viewportIndex++;
    }
    if (replay.pauses[pauseIndex] === game.tick) {
      game.pause();
      game.resume();
      pauseIndex++;
    }
    while (replay.upgrades[upgradeIndex]?.[0] === game.tick) {
      if (!game.chooseUpgrade(replay.upgrades[upgradeIndex++]![1]))
        throw new Error(`Invalid replay upgrade at tick ${game.tick}.`);
    }
  };
  while (game.tick < replay.ticks) {
    for (let count = 0; count < batch && game.tick < replay.ticks; count++) {
      applyActions();
      if (game.phase !== 'playing')
        throw new Error(
          `Replay cannot advance from ${game.phase} at tick ${game.tick}.`,
        );
      const entry = replay.inputs[inputIndex];
      if (entry && entry[0] === game.tick) {
        input = { x: entry[1], y: entry[2], pulse: entry[3] };
        inputIndex++;
      }
      game.step(input);
    }
  }
  applyActions();
  if (upgradeIndex !== replay.upgrades.length)
    throw new Error('Unconsumed replay upgrades.');
  return game;
}
