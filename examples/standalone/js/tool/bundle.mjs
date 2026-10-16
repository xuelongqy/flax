import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { readModuleManifest } from '@flax/build';
import { flaxEsbuildPlugin } from '@flax/build/esbuild';

const workingDirectory = fileURLToPath(new URL('../', import.meta.url));
const manifest = await readModuleManifest(
  fileURLToPath(new URL('../../assets/flax_modules/modules.json', import.meta.url)),
);
await build({
  absWorkingDir: workingDirectory,
  entryPoints: ['src/main.ts'],
  outfile: '../assets/app.js',
  bundle: true,
  format: 'iife',
  platform: 'neutral',
  target: 'es2019',
  supported: { 'async-generator': false, 'for-await': false },
  plugins: [flaxEsbuildPlugin(manifest)],
  legalComments: 'inline',
  logLevel: 'info',
});
