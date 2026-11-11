import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
const built = await build({
  entryPoints: [new URL('../src/resources.ts', import.meta.url).pathname],
  bundle: true,
  write: false,
  platform: 'node',
  format: 'esm',
  plugins: [
    {
      name: 'assets',
      setup(p) {
        p.onResolve({ filter: /^@flax\// }, (a) => ({
          path: a.path,
          namespace: 'fake',
        }));
        p.onLoad({ filter: /.*/, namespace: 'fake' }, () => ({
          contents:
            'export const getAssetBundle=()=>({load:key=>globalThis.__assets.load(key)});',
          loader: 'js',
        }));
      },
    },
  ],
});
const resources = await import(
  `data:text/javascript;base64,${Buffer.from(built.outputFiles[0].contents).toString('base64')}`
);
function fixture(failure, failClose = false) {
  const f = { keys: [], images: [], options: [] };
  globalThis.__assets = {
    load: async (key) => {
      f.keys.push(key);
      if (failure?.endsWith('-load') && key.includes(failure.split('-')[0]))
        throw new Error(failure);
      return new DataView(new Uint8Array([1, 2, 3]).buffer);
    },
  };
  globalThis.createImageBitmap = async (source, options) => {
    f.options.push(options);
    const index = ['actors-decode', 'floor-decode', 'projectiles-decode'].indexOf(
      failure,
    );
    if (index === f.images.length) throw new Error(failure);
    const image = {
      width: options?.resizeWidth ?? 600,
      height: options?.resizeHeight ?? 600,
      closes: 0,
      close() {
        this.closes++;
        if (failClose && f.images[0] === this) throw Error('released host');
      },
    };
    f.images.push(image);
    return image;
  };
  return f;
}
test('all scene assets load once and remain caller owned until Scene construction', async () => {
  const f = fixture();
  const assets = await resources.loadSceneAssets();
  assert.deepEqual(f.keys, [
    'assets/images/actors-directional-v3.png',
    'assets/images/floor-metal-v2.png',
    'assets/images/projectiles-v1.png',
  ]);
  assert.equal(assets.actors, f.images[0]);
  assert.equal(assets.floor, f.images[1]);
  assert.equal(assets.projectiles, f.images[2]);
  assert.deepEqual(f.options, [
    undefined,
    undefined,
    {
      resizeWidth: 512,
      resizeHeight: 512,
      resizeQuality: 'high',
    },
  ]);
  assert.deepEqual([assets.projectiles.width, assets.projectiles.height], [512, 512]);
  assert.deepEqual(
    f.images.map((i) => i.closes),
    [0, 0, 0],
  );
  assets.actors.close();
  assets.floor.close();
  assets.projectiles.close();
  assert.deepEqual(
    f.images.map((i) => i.closes),
    [1, 1, 1],
  );
});
test('failed asset reads or decodes close each partial input exactly once', async () => {
  for (const failure of [
    'actors-load',
    'actors-decode',
    'floor-load',
    'floor-decode',
    'projectiles-load',
    'projectiles-decode',
  ]) {
    const f = fixture(failure, failure === 'projectiles-decode');
    await assert.rejects(resources.loadSceneAssets(), new RegExp(failure));
    const partials = failure.startsWith('actors')
      ? 0
      : failure.startsWith('floor')
        ? 1
        : 2;
    assert.equal(f.images.length, partials);
    assert.ok(f.images.every((image) => image.closes === 1));
  }
});
