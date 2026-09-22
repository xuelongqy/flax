import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { flaxHostModulesPlugin, readModuleManifest } from '@flax/tools';

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
  plugins: [flaxHostModulesPlugin(manifest)],
  legalComments: 'inline',
  logLevel: 'info',
});
