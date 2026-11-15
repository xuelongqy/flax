import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';

const built = await build({
  entryPoints: [new URL('../src/audio.ts', import.meta.url).pathname],
  bundle: true,
  write: false,
  platform: 'node',
  format: 'esm',
  plugins: [
    {
      name: 'audio-fixture',
      setup(plugin) {
        plugin.onResolve({ filter: /^@flax\// }, (args) => ({
          path: args.path,
          namespace: 'fixture',
        }));
        plugin.onLoad({ filter: /.*/, namespace: 'fixture' }, (args) => ({
          loader: 'js',
          contents:
            args.path === '@flax/audioplayers'
              ? `export const AudioPlayer=options=>globalThis.__audioTest.player(options); export const BytesSource=bytes=>({bytes}); export const ReleaseMode={loop:'loop',stop:'stop',release:'release'};`
              : `export const getAssetBundle=()=>({load:async key=>{await globalThis.__audioTest.assets?.promise;if(key.endsWith('/hit.wav'))await globalThis.__audioTest.remainingAssets?.promise;return new DataView(new Uint8Array([key.split('/').at(-1).charCodeAt(0)]).buffer);}});`,
        }));
      },
    },
  ],
});
const { Sounds } = await import(
  `data:text/javascript;base64,${Buffer.from(built.outputFiles[0].contents).toString('base64')}`
);
const flush = () => new Promise(setImmediate);
function gate() {
  let release;
  const promise = new Promise((resolve) => (release = resolve));
  return { promise, release };
}
function fixture(reuseEffectSources = false) {
  const f = {
    players: [],
    playerIds: [],
    complete: [],
    started: [],
    finished: [],
    resumed: [],
    playback: [],
    controls: [],
    controlsDone: [],
    disposed: [],
    cancelled: [],
    errors: [],
    reports: [],
    modes: [],
    destroyedPreparations: [],
    deliveredPreparations: [],
    startedModes: [],
    startedVolumes: [],
    retire: gate(),
  };
  f.player = (options) => {
    f.playerIds.push(options?.playerId);
    const id = f.players.length;
    let desired = 'stopped';
    let mode = 'release';
    let preparing, lastPlayId, lastSource;
    const control = async (kind) => {
      desired = kind === 'pause' ? 'paused' : 'stopped';
      f.controls.push({ id, kind });
      await f.control?.promise;
      if (kind === 'stop' && mode === 'release' && preparing) {
        preparing.cancelled = true;
        f.destroyedPreparations.push(id);
      }
      f.controlsDone.push(id);
    };
    const player = {
      onPlayerComplete: {
        listen(done, options) {
          f.complete[id] = () => {
            desired = 'completed';
            done();
          };
          f.errors.push(options.onError);
          return {
            cancel() {
              f.cancelled.push(id);
              if (f.throwCancel === id) throw new Error('cancel failed');
              return f.cancel?.promise ?? Promise.resolve();
            },
          };
        },
      },
      async setReleaseMode(value) {
        await f.mode?.promise;
        mode = value;
        f.modes.push({ id, mode });
      },
      async setVolume(volume) {
        f.volumes ??= new Map();
        f.volumes.set(id, volume);
      },
      async setSource(source) {
        const options = { volume: f.volumes?.get(id) };
        const playId = (lastPlayId = f.started.length);
        f.started.push(id);
        f.startedModes.push(mode);
        f.startedVolumes.push(options?.volume);
        const token = (preparing = { cancelled: false });
        await f.source?.promise;
        if (token.cancelled) {
          await f.retire.promise;
          throw new Error('RELEASE removed the prepared callback');
        }
        preparing = undefined;
        lastSource = source;
        f.deliveredPreparations.push(id);
        f.finished.push(playId);
      },
      async resume() {
        desired = 'playing';
        f.resumed.push(lastPlayId);
        f.playback.push([id, lastSource?.bytes[0], f.volumes?.get(id)]);
        if (f.completeBeforeReply) f.complete[id]();
        await f.resumeReply?.promise;
      },
      async play(source, options) {
        desired = 'playing';
        await this.setVolume(options?.volume);
        await this.setSource(source);
        if (desired === 'playing') await this.resume();
      },
      pause: () => control('pause'),
      stop: () => {
        if (f.throwStop === id) throw new Error('stop failed');
        return control('stop');
      },
      async dispose() {
        desired = 'disposed';
        f.disposed.push(id);
      },
    };
    f.players.push(player);
    return player;
  };
  globalThis.__audioTest = f;
  f.sounds = new Sounds((message) => f.reports.push(message), reuseEffectSources);
  f.cleanup = async () => {
    for (const name of [
      'source',
      'control',
      'assets',
      'cancel',
      'remainingAssets',
      'mode',
      'retire',
      'resumeReply',
    ])
      f[name]?.release();
    f.sounds.dispose();
    await flush();
  };
  return f;
}

test('only music uses the native loop player ID and each session gets a fresh ID', async () => {
  const first = fixture();
  const second = fixture();
  try {
    for (const f of [first, second]) {
      assert.match(f.playerIds[0], /^lumen-outpost-bgm-[0-9a-f-]{36}$/);
      assert.deepEqual(f.playerIds.slice(1), Array(4).fill(undefined));
    }
    assert.notEqual(first.playerIds[0], second.playerIds[0]);
  } finally {
    await first.cleanup();
    await second.cleanup();
  }
});

test('interruption immediately cancels preparing music and result cues without late resume', async () => {
  for (const name of ['music', 'win']) {
    const f = fixture();
    try {
      await f.sounds.load();
      f.source = gate();
      f.sounds.play(name, 0.5);
      await flush();
      assert.equal(f.started.length, 1);
      f.sounds.pause();
      f.sounds.pause();
      assert.equal(f.controls.length, 5);
      f.source.release();
      await flush();
      assert.deepEqual(f.resumed, []);
    } finally {
      await f.cleanup();
    }
  }
});

test('quick explicit resume waits for both old preparation and already-started cancellation', async () => {
  for (const first of ['source', 'control']) {
    const f = fixture();
    try {
      await f.sounds.load();
      f.source = gate();
      f.control = gate();
      f.sounds.play('music', 0.5);
      await flush();
      f.sounds.pause();
      f.sounds.play('music', 0.5);
      f[first].release();
      await flush();
      assert.equal(f.started.length, 1);
      assert.deepEqual(f.resumed, []);
      f[first === 'source' ? 'control' : 'source'].release();
      await flush();
      assert.equal(f.started.length, 2);
      assert.deepEqual(f.resumed, [1]);
    } finally {
      await f.cleanup();
    }
  }
});

test('pause invalidates queued effects and pre-load music while allowing fresh requests', async () => {
  const f = fixture();
  try {
    f.assets = gate();
    const loading = f.sounds.load();
    f.sounds.play('music', 0.5);
    f.sounds.pause();
    f.assets.release();
    await loading;
    await flush();
    assert.equal(f.started.length, 0);
    for (const name of ['win', 'lose', 'pulse', 'hit']) f.sounds.play(name, 0.5);
    f.sounds.pause();
    await flush();
    assert.equal(f.started.length, 0);
    for (const name of ['win', 'lose', 'pulse', 'hit']) f.sounds.play(name, 0.5);
    await flush();
    assert.equal(f.resumed.length, 4);
    assert.equal(f.players.length, 5);
  } finally {
    await f.cleanup();
  }
});

test('failure stops in-flight work and disposal never waits for subscription cancellation', async () => {
  const f = fixture();
  try {
    await f.sounds.load();
    f.source = gate();
    f.sounds.play('music', 0.5);
    await flush();
    f.errors[0](new Error('native stream failure'));
    assert.equal(f.controls.length, 5);
    f.source.release();
    await flush();
    assert.deepEqual(f.resumed, []);
    f.sounds.play('music', 0.5);
    await flush();
    assert.equal(f.started.length, 1);
    assert.equal(f.reports.length, 1);
    f.cancel = gate();
    f.throwCancel = 1;
    f.throwStop = 2;
    f.sounds.dispose();
    assert.equal(f.cancelled.length, 5);
    await flush();
    assert.deepEqual([...f.disposed].sort(), [0, 1, 2, 3, 4]);
    f.sounds.dispose();
    assert.equal(f.disposed.length, 5);
  } finally {
    await f.cleanup();
  }
});

test('the backend adapter actually loses prepared callbacks under default RELEASE', async () => {
  const f = fixture();
  try {
    await f.sounds.load();
    await flush();
    const effect = f.players[1];
    await effect.setReleaseMode('release');
    f.source = gate();
    const pending = effect.play();
    await effect.stop();
    assert.deepEqual(f.destroyedPreparations, [1]);
    f.source.release();
    await flush();
    assert.deepEqual(f.deliveredPreparations, []);
    f.retire.release();
    await assert.rejects(pending, /prepared callback/);
  } finally {
    await f.cleanup();
  }
});

test('effect STOP setup precedes early partial-load playback and preserves interrupted pool slots', async () => {
  for (const quickResume of [false, true]) {
    const f = fixture();
    try {
      f.mode = gate();
      f.remainingAssets = gate();
      f.source = gate();
      const loading = f.sounds.load();
      await flush();
      f.sounds.play('shot', 0.5);
      await flush();
      assert.deepEqual(
        f.started,
        [],
        'early effect must await native release-mode setup',
      );
      f.mode.release();
      await flush();
      assert.deepEqual(f.started, [1]);
      assert.equal(f.startedModes[0], 'stop');
      f.remainingAssets.release();
      await loading;
      await flush();
      f.sounds.pause();
      if (quickResume) f.sounds.play('music', 0.5);
      await flush();
      assert.deepEqual(f.destroyedPreparations, []);
      f.source.release();
      await flush();
      assert.ok(!f.resumed.includes(0));
      if (!quickResume) f.sounds.play('music', 0.5);
      for (let i = 0; i < 4; i++) f.sounds.play('shot', 0.5);
      await flush();
      assert.deepEqual(f.started.slice(-4), [2, 3, 4, 1]);
      assert.equal(f.resumed.length, 5);
      assert.deepEqual(f.reports, []);
    } finally {
      await f.cleanup();
    }
  }
});

test('one startup music intent plays once in loop mode while later assets are held', async () => {
  for (const timing of ['before-source', 'after-source']) {
    const f = fixture();
    try {
      f.assets = gate();
      f.remainingAssets = gate();
      const loading = f.sounds.load();
      if (timing === 'before-source') f.sounds.play('music', 0.5);
      f.assets.release();
      await flush();
      if (timing === 'after-source') f.sounds.play('music', 0.5);
      await flush();
      assert.deepEqual(f.started, [0]);
      assert.deepEqual(f.startedModes, ['loop']);
      assert.equal(f.startedModes.filter((mode) => mode !== 'loop').length, 0);
      f.remainingAssets.release();
      await loading;
      await flush();
      assert.deepEqual(f.started, [0], 'later asset completion must not replay music');
      assert.deepEqual(f.resumed, [0]);
      assert.deepEqual(f.reports, []);
    } finally {
      await f.cleanup();
    }
  }
});

test('pause clears startup music intent before source or later assets finish', async () => {
  for (const timing of ['before-source', 'after-source', 'playing']) {
    const f = fixture();
    try {
      f.assets = gate();
      f.remainingAssets = gate();
      const loading = f.sounds.load();
      if (timing !== 'before-source') {
        f.assets.release();
        await flush();
      }
      f.sounds.play('music', 0.5);
      if (timing === 'playing') await flush();
      const expected = timing === 'playing' ? [0] : [];
      assert.deepEqual(f.started, expected);
      f.sounds.pause();
      await flush();
      assert.deepEqual(f.started, expected);
      f.assets.release();
      f.remainingAssets.release();
      await loading;
      await flush();
      assert.deepEqual(f.started, expected);
      assert.deepEqual(f.resumed, expected);
    } finally {
      await f.cleanup();
    }
  }
});

test('music source publication consumes only the latest pending volume', async () => {
  const f = fixture();
  try {
    f.assets = gate();
    const loading = f.sounds.load();
    f.sounds.play('music', 0.2);
    f.sounds.play('music', 0.8);
    f.assets.release();
    await loading;
    await flush();
    assert.deepEqual(f.started, [0]);
    assert.deepEqual(f.startedVolumes, [0.8]);
    assert.deepEqual(f.startedModes, ['loop']);
  } finally {
    await f.cleanup();
  }
});

test('an effect slot stays busy through native completion, not just preparation', async () => {
  const f = fixture();
  try {
    await f.sounds.load();
    for (let i = 0; i < 4; i++) f.sounds.play('shot', 0.5);
    await flush();
    assert.deepEqual(f.started, [1, 2, 3, 4]);
    f.sounds.play('shot', 0.5);
    await flush();
    assert.deepEqual(
      f.started,
      [1, 2, 3, 4],
      'still-playing slot must not be prepared again',
    );
    f.complete[2]();
    f.sounds.play('shot', 0.5);
    await flush();
    assert.deepEqual(f.started, [1, 2, 3, 4, 2]);
    assert.ok(f.players.every((player) => player.positionUpdater === null));
    f.sounds.pause();
    for (let i = 0; i < 4; i++) f.sounds.play('shot', 0.5);
    await flush();
    assert.equal(
      f.started.length,
      9,
      'interruption releases slots after generation reset',
    );
  } finally {
    await f.cleanup();
  }
});

test('Android reuses completed matching effects and fills idle slots for overlapping cues', async () => {
  const f = fixture(true);
  try {
    await f.sounds.load();
    f.sounds.play('shot', 0.2);
    f.sounds.play('pulse', 0.3);
    await flush();
    f.complete[1]();
    f.complete[2]();

    f.sounds.play('shot', 0.4);
    f.sounds.play('pulse', 0.5);
    f.sounds.play('shot', 0.6);
    f.sounds.play('hit', 0.7);
    f.sounds.play('win', 0.8);
    await flush();
    assert.deepEqual(f.started, [1, 2, 3, 4], 'only newly assigned voices prepare');
    assert.deepEqual(f.playback.slice(2), [
      [1, 's'.charCodeAt(0), 0.4],
      [2, 'p'.charCodeAt(0), 0.5],
      [3, 's'.charCodeAt(0), 0.6],
      [4, 'h'.charCodeAt(0), 0.7],
    ]);

    f.complete[2]();
    f.sounds.play('hit', 0.9);
    await flush();
    assert.deepEqual(f.started, [1, 2, 3, 4, 2], 'fallback prepares a different cue');
    assert.deepEqual(f.playback.at(-1), [2, 'h'.charCodeAt(0), 0.9]);
    assert.deepEqual(f.reports, []);
  } finally {
    await f.cleanup();
  }
});

test('an interrupted old completion cannot free a newly preparing effect slot', async () => {
  const f = fixture();
  try {
    await f.sounds.load();
    for (let i = 0; i < 4; i++) f.sounds.play('shot', 0.5);
    await flush();
    f.sounds.pause();
    f.source = gate();
    for (let i = 0; i < 4; i++) f.sounds.play('shot', 0.5);
    await flush();
    assert.equal(f.started.length, 8);
    f.complete[1](); // old native event delivered while the fresh generation prepares
    f.sounds.play('shot', 0.5);
    await flush();
    assert.equal(f.started.length, 8, 'old completion cannot unlock new preparation');
    f.sounds.pause();
    f.source.release();
    await flush();
    assert.equal(f.resumed.length, 4, 'interrupted preparations cannot resume');
    f.sounds.dispose();
    f.complete[1]();
    f.sounds.play('shot', 0.5);
    await flush();
    assert.equal(f.started.length, 8);
  } finally {
    await f.cleanup();
  }
});

test('a short clip completion before play Promise settlement does not pin its slot', async () => {
  const f = fixture();
  try {
    await f.sounds.load();
    f.completeBeforeReply = true;
    f.resumeReply = gate();
    for (let i = 0; i < 4; i++) f.sounds.play('shot', 0.5);
    await flush();
    assert.equal(f.started.length, 4);
    for (let i = 0; i < 4; i++) f.sounds.play('shot', 0.5);
    await flush();
    assert.equal(
      f.started.length,
      4,
      'early completion cannot free a still-pending resume',
    );
    f.resumeReply.release();
    await flush();
    for (let i = 0; i < 4; i++) f.sounds.play('shot', 0.5);
    await flush();
    assert.equal(
      f.started.length,
      8,
      'remember completion until the same play Promise settles',
    );
  } finally {
    await f.cleanup();
  }
});

test('stale preparing completion cannot suppress a fresh active effect generation', async () => {
  const f = fixture(true);
  try {
    await f.sounds.load();
    for (let i = 0; i < 4; i++) f.sounds.play('shot', 0.5);
    await flush();
    f.sounds.pause();
    f.source = gate();
    for (let i = 0; i < 4; i++) f.sounds.play('shot', 0.5);
    await flush();
    f.complete[1]();
    f.source.release();
    await flush();
    assert.equal(
      f.resumed.length,
      8,
      'fresh resume explicitly restores desiredState after old completion',
    );
    f.sounds.play('shot', 0.5);
    await flush();
    assert.equal(
      f.resumed.length,
      8,
      'only a fresh playback completion releases its slot',
    );
    f.complete[2]();
    f.sounds.play('shot', 0.5);
    await flush();
    assert.equal(f.started.length, 8, 'fresh generation prepared all four sources');
    assert.equal(f.resumed.length, 9, 'completed fresh playback can be reused');
  } finally {
    await f.cleanup();
  }
});
