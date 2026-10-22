import { build } from 'esbuild';
import { prepareModules } from '@flax/build';
import { prepareApplication } from '@flax/build/application';
import { flaxEsbuildPlugin } from '@flax/build/esbuild';

const { manifest } = await prepareModules();
const application = await prepareApplication({
  projectDirectory: process.cwd(),
  outputDirectory: '../assets/flax/app',
  id: 'example.defaults',
});
await build({
  entryPoints: ['src/main.ts'],
  outfile: application.entryPath,
  bundle: true,
  format: 'iife',
  target: 'es2019',
  plugins: [flaxEsbuildPlugin(manifest)],
});
