import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';

await build({
  absWorkingDir: fileURLToPath(new URL('../', import.meta.url)),
  entryPoints: ['src/main.ts'],
  outfile: '../assets/app.js',
  bundle: true,
  format: 'iife',
  platform: 'neutral',
  target: 'es2019',
  supported: { 'async-generator': false, 'for-await': false },
  legalComments: 'inline',
  logLevel: 'info',
});
