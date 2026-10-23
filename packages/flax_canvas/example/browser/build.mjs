import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const directory = fileURLToPath(new URL('.', import.meta.url));
const result = await build({
  absWorkingDir: directory,
  entryPoints: ['app.mjs'],
  bundle: true,
  platform: 'browser',
  format: 'iife',
  target: 'es2022',
  write: false,
  metafile: true,
});
// The comparison must run native browser Canvas, without importing the Flax runtime.
assert.deepEqual(Object.keys(result.metafile.inputs).sort(), [
  '../js/src/drawing.ts',
  'app.mjs',
]);
const template = await readFile(new URL('./index.html', import.meta.url), 'utf8');
assert.equal(template.split('<!-- app -->').length, 2);
const script = result.outputFiles[0].text.replaceAll('</script', '<\\/script');
const html = template.replace('<!-- app -->', () => `<script>${script}</script>`);
await mkdir(new URL('./dist/', import.meta.url), { recursive: true });
const output = new URL('./dist/index.html', import.meta.url);
await writeFile(output, html);
console.log(`Standalone HTML: ${fileURLToPath(output)}`);
