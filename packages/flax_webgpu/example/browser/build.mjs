import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
const root = new URL('.', import.meta.url);
const hash = createHash('sha256');
for (const name of ['studio.ts', 'shaders.ts', 'metrics.ts'])
  hash.update(await readFile(new URL('../js/src/' + name, root)));
const fingerprint = hash.digest('hex');
const result = await build({
  entryPoints: [new URL('app.mjs', root).pathname],
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: 'es2022',
  write: false,
  banner: {
    js: 'globalThis.__studioSourceSha256=' + JSON.stringify(fingerprint) + ';',
  },
});
const script = result.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
const html = (await readFile(new URL('index.html', root), 'utf8')).replace(
  '<script type="module" src="app.mjs"></script>',
  `<script>${script}</script>`,
);
await mkdir(new URL('dist/', root), { recursive: true });
await writeFile(new URL('dist/index.html', root), html);
console.log('Built self-contained WebGPU studio HTML');
