export const CONTENT_VERSION = 'lumen-endless-1';
export const WORLD_WIDTH = 3200;
export const WORLD_HEIGHT = 1800;
export const VIEW_WIDTH = 960;
export const VIEW_HEIGHT = 540;
export const STEP = 1 / 60;
export const WAVE_SECONDS = 90;
export const DIFFICULTY_SECONDS = 1200;

export const LIMITS = { enemies: 200, projectiles: 300, pickups: 150 };
export const PLAYER = {
  radius: 14,
  health: 100,
  speed: 175,
  pickupRadius: 42,
  immunity: 0.65,
};
export const PULSE = { cooldown: 8, radius: 170, damage: 52, push: 105 };
export const WEAPONS = {
  bolt: {
    title: 'Arc Bolt',
    description: 'Aim a spreading fan of bolts at the nearest threat.',
    maxRank: 4,
    damage: [26, 32, 42, 58],
    cooldown: [0.45, 0.4, 0.35, 0.3],
    bolts: [1, 2, 3, 5],
    spread: 0.12,
    range: 510,
    speed: 570,
  },
  orbit: {
    title: 'Orbit Blades',
    description: 'Blades circle the drone and cut nearby threats.',
    maxRank: 4,
    damage: [17, 24, 32, 42],
    blades: [2, 3, 4, 6],
    radius: 70,
    bladeRadius: 12,
    hitCooldown: 0.32,
    rotation: 2.8,
  },
  chain: {
    title: 'Chain Discharge',
    description: 'Lightning jumps between nearby threats.',
    maxRank: 4,
    damage: [25, 35, 46, 60],
    targets: [3, 5, 7, 10],
    cooldown: [1.8, 1.65, 1.5, 1.35],
    range: 360,
    jumpRange: 165,
  },
};
export const PASSIVES = {
  fireRate: {
    title: 'Rapid Capacitor',
    description: 'Reduce automatic attack cooldowns by 12% per rank.',
    maxRank: 3,
    perRank: 0.12,
  },
  moveSpeed: {
    title: 'Vector Thrusters',
    description: 'Move 12% faster per rank.',
    maxRank: 3,
    perRank: 0.12,
  },
  pickupRadius: {
    title: 'Energy Magnet',
    description: 'Increase energy collection reach by 32 per rank.',
    maxRank: 3,
    perRank: 32,
  },
  maxHealth: {
    title: 'Hull Plating',
    description: 'Add 25 maximum and current health per rank.',
    maxRank: 3,
    perRank: 25,
  },
};
export const ENEMIES = {
  pursuer: { title: 'Pursuer', radius: 15, hp: 25, speed: 51, damage: 10, xp: 1 },
  flanker: { title: 'Flanker', radius: 12, hp: 21, speed: 88, damage: 9, xp: 2 },
  brute: { title: 'Armored Brute', radius: 23, hp: 125, speed: 33, damage: 19, xp: 5 },
  sentry: { title: 'Sentry', radius: 18, hp: 57, speed: 40, damage: 12, xp: 3 },
  guardian: {
    title: 'Outpost Guardian',
    radius: 46,
    hp: 1600,
    speed: 40,
    damage: 24,
    xp: 35,
  },
};
export const GUARDIAN = {
  firstAt: 120,
  afterClear: 120,
  repair: 0.2,
  phaseThreshold: 0.5,
  radialWarning: 1.05,
  chargeWarning: 0.85,
  chargeDuration: 0.75,
  chargeSpeed: 420,
  radialSpeed: 145,
  phaseTwoSpeed: 190,
  radialCount: 12,
  phaseTwoCount: 18,
};
export const WAVES = [
  { start: 0, interval: 0.5, batch: 2, pursuer: 1, flanker: 0, brute: 0, sentry: 0 },
  {
    start: 25,
    interval: 0.48,
    batch: 2,
    pursuer: 0.5,
    flanker: 0.5,
    brute: 0,
    sentry: 0,
  },
  {
    start: 50,
    interval: 0.56,
    batch: 3,
    pursuer: 0.3,
    flanker: 0.2,
    brute: 0.2,
    sentry: 0.3,
  },
  {
    start: 75,
    interval: 0.9,
    batch: 1,
    pursuer: 0.8,
    flanker: 0.1,
    brute: 0.1,
    sentry: 0,
  },
];
