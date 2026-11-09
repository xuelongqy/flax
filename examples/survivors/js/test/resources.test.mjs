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
function fixture(failure) {
  const f = { keys: [], images: [] };
  globalThis.__assets = {
    load: async (key) => {
      f.keys.push(key);
      if (failure === 'floor-load' && key.includes('floor'))
        throw new Error('floor-load');
      return new DataView(new Uint8Array([1, 2, 3]).buffer);
    },
  };
  globalThis.createImageBitmap = async () => {
    if (failure === 'floor-decode' && f.images.length === 1)
      throw new Error('floor-decode');
    const image = {
      width: 600,
      height: 600,
      closes: 0,
      close() {
        this.closes++;
      },
    };
    f.images.push(image);
    return image;
  };
  return f;
}
test('both scene assets load once and remain caller owned until Scene construction', async () => {
  const f = fixture();
  const assets = await resources.loadSceneAssets();
  assert.deepEqual(f.keys, [
    'assets/images/actors-directional-v3.png',
    'assets/images/floor-metal-v2.png',
  ]);
  assert.equal(assets.actors, f.images[0]);
  assert.equal(assets.floor, f.images[1]);
  assert.deepEqual(
    f.images.map((i) => i.closes),
    [0, 0],
  );
  assets.actors.close();
  assets.floor.close();
  assert.deepEqual(
    f.images.map((i) => i.closes),
    [1, 1],
  );
});
test('failed later asset read or decode closes the partial actor decode exactly once', async () => {
  for (const failure of ['floor-load', 'floor-decode']) {
    const f = fixture(failure);
    await assert.rejects(resources.loadSceneAssets(), new RegExp(failure));
    assert.equal(f.images.length, 1);
    assert.equal(f.images[0].closes, 1);
  }
});
