import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function bundleUiFixtures({ root, outdir }) {
  await build({
    absWorkingDir: root,
    entryPoints: ['packages/flax_fetch/js/test/axios-entry.ts'],
    bundle: true,
    format: 'iife',
    platform: 'neutral',
    conditions: ['react-native'],
    mainFields: ['module', 'main'],
    target: 'es2019',
    supported: { 'async-generator': false, 'for-await': false },
    outfile: resolve(outdir, 'host_axios.js'),
  });
  await build({
    absWorkingDir: root,
    entryPoints: ['packages/flax_fetch/js/test/body-cases.js'],
    bundle: true,
    format: 'iife',
    platform: 'neutral',
    target: 'es2019',
    supported: { 'async-generator': false, 'for-await': false },
    outfile: resolve(outdir, 'host_body.js'),
  });
  await writeFile(resolve(outdir, 'host_wpt.js'), await wptSource());
}

export async function wptSource() {
  const directory = new URL('./wpt/', import.meta.url);
  const manifest = JSON.parse(
    await readFile(new URL('manifest.json', directory), 'utf8'),
  );
  let source = await readFile(new URL('harness.js', directory), 'utf8');
  for (const item of manifest.files) {
    const data = await readFile(new URL(item.file, directory));
    if (createHash('sha256').update(data).digest('hex') !== item.sha256)
      throw new Error(`Changed upstream test: ${item.file}`);
    if (item.file.endsWith('.js')) source += `\n${data}\n`;
  }
  return source;
}
