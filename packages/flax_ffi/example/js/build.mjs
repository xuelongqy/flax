import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { prepareModules } from '@flax/build';
import { flaxEsbuildPlugin } from '@flax/build/esbuild';

const project = fileURLToPath(new URL('./', import.meta.url));
const prepared = await prepareModules({ configPath: `${project}/flax.modules.json` });
await build({
  absWorkingDir: project,
  entryPoints: ['src/main.ts'],
  outfile: '../app/assets/app.js',
  bundle: true,
  platform: 'neutral',
  format: 'iife',
  target: 'es2020',
  plugins: [
    flaxEsbuildPlugin(prepared.manifest, {
      nativeAssets: { hostDirectory: `${project}/../app` },
    }),
  ],
});
