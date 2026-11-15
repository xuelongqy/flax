import assert from 'node:assert/strict';
import test from 'node:test';
import { readProfile } from '../dist/profile.js';
import { offerCopy, strings } from '../dist/i18n.js';
import { BOLT_EVOLUTION, PASSIVES, WEAPONS } from '../dist/content.js';
import { Game } from '../src/game.ts';

const legacy = {
  version: 1,
  music: 0.25,
  effects: 1,
  quality: 'balanced',
  reducedMotion: true,
  haptics: false,
  bestScore: 1250,
  longest: 478,
  wins: 3,
};

test('old saves retain settings and records while new options use their defaults', () => {
  const { profile, writable } = readProfile(JSON.stringify(legacy), true);
  assert.deepEqual(profile, { ...legacy, language: 'zh', showFps: false });
  assert.equal(writable, true);
  assert.equal(readProfile(null).profile.language, 'zh');
  assert.equal(readProfile(null).profile.showFps, false);
});

test('language and FPS preferences survive the same version-one save round trip', () => {
  for (const language of ['zh', 'en']) {
    for (const showFps of [false, true]) {
      const saved = { ...legacy, language, showFps };
      const loaded = readProfile(JSON.stringify(saved));
      assert.deepEqual(loaded.profile, saved);
      assert.equal(loaded.writable, true);
      assert.deepEqual(readProfile(JSON.stringify(loaded.profile)).profile, saved);
    }
  }
});

test('invalid optional settings fall back independently without discarding old records', () => {
  for (const language of [null, '', 'ZH', 'ja', 1, false, {}, []]) {
    const { profile } = readProfile(
      JSON.stringify({ ...legacy, language, showFps: true }),
    );
    assert.equal(profile.language, 'zh');
    assert.equal(profile.showFps, true);
    assert.equal(profile.bestScore, legacy.bestScore);
  }
  for (const showFps of [null, '', 'false', 'true', 0, 1, {}, []]) {
    const { profile } = readProfile(
      JSON.stringify({ ...legacy, language: 'en', showFps }),
    );
    assert.equal(profile.language, 'en');
    assert.equal(profile.showFps, false);
    assert.equal(profile.haptics, false);
  }
});

test('future profiles remain protected from writes after adding the new options', () => {
  const { profile, writable } = readProfile(
    JSON.stringify({ ...legacy, version: 2, language: 'en', showFps: true }),
  );
  assert.equal(writable, false);
  assert.equal(profile.language, 'zh');
  assert.equal(profile.showFps, false);
});

test('switching languages covers actions, warnings, controls and accessibility', () => {
  const chinese = strings(readProfile(null).profile.language);
  const english = strings('en');
  assert.equal(chinese.start, '开始行动');
  assert.equal(english.start, 'Start');
  assert.equal(chinese.english, english.english);
  assert.equal(chinese.chinese, english.chinese);
  for (const key of [
    'objective',
    'touchHelp',
    'keyboardHelp',
    'newerSave',
    'savingUnavailable',
    'audioUnavailable',
    'assetError',
    'movementJoystick',
    'health',
    'experience',
    'pulseCooldown',
    'droneDisabled',
    'guardians',
    'fpsHelp',
    'nest',
    'nestHint',
    'fieldHint',
    'evolution',
  ]) {
    assert.match(chinese[key], /\p{Script=Han}/u, `${key} must have Chinese copy`);
    assert.doesNotMatch(
      english[key],
      /\p{Script=Han}/u,
      `${key} must have English copy`,
    );
  }
  assert.match(chinese.keyboardHelp, /WASD/);
  assert.match(chinese.keyboardHelp, /Esc/);
  assert.match(chinese.objective, /无尽/);
  assert.match(english.objective, /endless/i);
  assert.doesNotMatch(chinese.objective, /08:00/);
  assert.doesNotMatch(english.objective, /08:00/);
  assert.match(chinese.reactorHold, /平台/);
  assert.match(english.reactorHold, /plate/);
  assert.match(chinese.fieldHint, /斜纹边界/);
  assert.match(english.fieldHint, /hatched boundary/);
});

test('every actual upgrade and repair offer translates without changing combat metadata', () => {
  const game = new Game(7);
  game.xp = 100000;
  game.step({ x: 0, y: 0, pulse: false });
  const seen = new Set();
  for (let upgrade = 0; upgrade < 30; upgrade++) {
    assert.equal(game.phase, 'upgrade');
    const before = structuredClone(game.offers);
    for (const offer of game.offers) {
      seen.add(offer.id);
      const frozen = Object.freeze({ ...offer });
      const chinese = offerCopy(frozen, 'zh');
      const english = offerCopy(frozen, 'en');
      assert.match(chinese.title, /\p{Script=Han}/u, offer.id);
      assert.match(chinese.description, /\p{Script=Han}/u, offer.id);
      assert.equal(english.title, offer.title);
      if (offer.kind === 'weapon') {
        const definition = WEAPONS[offer.id.slice(7)];
        const count = (definition.bolts ?? definition.blades ?? definition.targets)[
          offer.rank - 1
        ];
        assert.ok(chinese.description.includes(String(count)));
        assert.ok(english.description.includes(String(count)));
      } else assert.ok(offer.description.startsWith(english.description));
      assert.doesNotMatch(english.description, /Rank \d+ of \d+/);
    }
    assert.deepEqual(game.offers, before);
    const offer = game.offers[0];
    if (offer.kind === 'repair') break;
    assert.equal(game.chooseUpgrade(offer.id), true);
  }
  assert.deepEqual(
    [...seen].sort(),
    [
      ...Object.keys(WEAPONS).map((kind) => `weapon:${kind}`),
      ...Object.keys(PASSIVES).map((kind) => `passive:${kind}`),
      'evolution:bolt:pierce',
      'evolution:bolt:blast',
      'repair',
    ].sort(),
  );
  for (const [id, effect] of [
    ['passive:fireRate', '12%'],
    ['passive:moveSpeed', '12%'],
    ['passive:pickupRadius', '32'],
    ['passive:maxHealth', '25'],
    ['repair', '20%'],
  ]) {
    assert.ok(
      offerCopy(
        { id, title: '', description: '', kind: 'passive', rank: 1 },
        'zh',
      ).description.includes(effect),
      `${id} must retain its numerical effect`,
    );
  }
});

test('Bolt evolutions have distinct localized identities and retain their actual effects', () => {
  const titles = { zh: new Set(), en: new Set() };
  for (const mode of ['pierce', 'blast']) {
    const definition = BOLT_EVOLUTION[mode];
    const offer = Object.freeze({
      id: `evolution:bolt:${mode}`,
      kind: 'evolution',
      rank: 1,
      title: definition.title,
      description: definition.description,
    });
    for (const language of ['zh', 'en']) {
      const copy = offerCopy(offer, language);
      titles[language].add(copy.title);
      assert.ok(copy.description.length > 12);
      if (language === 'zh') {
        assert.match(copy.title, /\p{Script=Han}/u);
        assert.ok(
          copy.description.includes(
            `${Math.round((definition.damageMultiplier - 1) * 100)}%`,
          ),
        );
      } else assert.equal(copy.title, definition.title);
    }
  }
  assert.equal(titles.zh.size, 2);
  assert.equal(titles.en.size, 2);
});

test('unknown upgrade IDs preserve readable fallback copy', () => {
  for (const id of ['weapon:future', 'toString']) {
    const offer = {
      id,
      title: 'Future module',
      description: 'A future effect.',
      kind: 'weapon',
      rank: 1,
    };
    for (const language of ['zh', 'en']) {
      assert.deepEqual(offerCopy(offer, language), {
        title: offer.title,
        description: offer.description,
      });
    }
  }
});
