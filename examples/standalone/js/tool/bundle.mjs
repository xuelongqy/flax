import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { prepareApplication } from '@flax/build/application';
import { readModuleManifest } from '@flax/build';
import { flaxEsbuildPlugin } from '@flax/build/esbuild';

const workingDirectory = fileURLToPath(new URL('../', import.meta.url));
const manifest = await readModuleManifest(
  fileURLToPath(new URL('../../assets/flax_modules/modules.json', import.meta.url)),
);
const prefix = (process.env.FLAX_ASSET_PREFIX ?? 'assets/flax').replace(/\/+$/, '');
if (
  !prefix ||
  prefix.includes('\\') ||
  prefix.includes(':') ||
  prefix.includes('\0') ||
  prefix.split('/').some((part) => !part || part === '.' || part === '..')
) {
  throw new Error('FLAX_ASSET_PREFIX must be a relative asset directory');
}
const result = await build({
  absWorkingDir: workingDirectory,
  entryPoints: ['src/main.ts'],
  write: false,
  bundle: true,
  format: 'iife',
  platform: 'neutral',
  target: 'es2019',
  supported: { 'async-generator': false, 'for-await': false },
  plugins: [flaxEsbuildPlugin(manifest)],
  legalComments: 'inline',
  logLevel: 'info',
});
const application = await prepareApplication({
  projectDirectory: workingDirectory,
  outputDirectory: resolve(workingDirectory, '..', prefix),
});
await writeFile(application.entryPath, result.outputFiles[0].contents);
