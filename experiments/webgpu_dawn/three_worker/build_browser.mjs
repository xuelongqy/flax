import { createHash } from 'node:crypto';
import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from '../../../node_modules/esbuild/lib/main.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../../..');
const fixtures = path.join(root, 'packages/flax_webgpu/example/fixtures/three');
const options = {
  bundle: true,
  platform: 'neutral',
  format: 'esm',
  target: 'es2022',
  nodePaths: [path.join(root, 'packages/flax_webgpu/example/js/node_modules')],
};

export async function sourceSha256() {
  const hash = createHash('sha256');
  for (const name of [
    'scene.mjs',
    'capture.mjs',
    'metrics.mjs',
    'root.mjs',
    'worker.mjs',
    'flax.mjs',
    'browser.mjs',
  ])
    hash.update(name + '\0').update(await readFile(path.join(here, name)));
  return hash.digest('hex');
}

export async function buildSharedBenchmark(assets) {
  await mkdir(assets, { recursive: true });
  await build({
    ...options,
    entryPoints: [path.join(here, 'scene.mjs')],
    outfile: path.join(assets, 'scene.js'),
  });
  await build({
    ...options,
    entryPoints: [path.join(here, 'worker.mjs')],
    outfile: path.join(assets, 'renderer-worker.js'),
  });
  return {
    sourceSha256: await sourceSha256(),
    sceneSha256: createHash('sha256')
      .update(await readFile(path.join(assets, 'scene.js')))
      .digest('hex'),
  };
}

export const banner = ({ sourceSha256, sceneSha256 }) =>
  'globalThis.__threeBenchmarkSourceSha256=' +
  JSON.stringify(sourceSha256) +
  ';globalThis.__threeBenchmarkSceneSha256=' +
  JSON.stringify(sceneSha256) +
  ';';

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const output = path.resolve(
    process.argv[2] ?? path.join(root, '.local/webgpu-three-worker-benchmark/browser'),
  );
  const assets = path.join(output, 'three');
  await mkdir(output, { recursive: true });
  let hashes;
  if (process.argv[3]) {
    // Reuse the exact native producer bytes when comparing an already-built application.
    await cp(path.resolve(process.argv[3]), assets, { recursive: true });
    hashes = {
      sourceSha256: await sourceSha256(),
      sceneSha256: createHash('sha256')
        .update(await readFile(path.join(assets, 'scene.js')))
        .digest('hex'),
    };
  } else {
    await cp(fixtures, assets, { recursive: true });
    hashes = await buildSharedBenchmark(assets);
  }
  await build({
    ...options,
    entryPoints: [path.join(here, 'browser.mjs')],
    outfile: path.join(output, 'browser.js'),
    banner: { js: banner(hashes) },
  });
  await cp(path.join(here, 'browser.html'), path.join(output, 'browser.html'));
  await writeFile(
    path.join(output, 'bundle-receipt.json'),
    JSON.stringify(hashes, null, 2) + '\n',
  );
  process.stdout.write(JSON.stringify({ output, ...hashes }) + '\n');
}
