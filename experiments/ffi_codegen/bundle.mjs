import { build } from 'esbuild';
import { resolve } from 'node:path';

const [profile, output] = process.argv.slice(2);
const generated = resolve('.local/ffi-codegen/generated', profile);
await build({
  entryPoints: ['experiments/ffi_codegen/probe.mjs'],
  outfile: output,
  bundle: true,
  platform: 'neutral',
  format: 'iife',
  target: 'es2020',
  alias: {
    '@flax/ffi': resolve('packages/flax_ffi/js/index.js'),
    'flax:generated': resolve(generated, 'bindings.g.ts'),
    'flax:definitions': resolve(generated, 'definitions.g.ts'),
    'flax:sqlite': resolve(generated, 'sqlite/bindings.g.ts'),
    'flax:sqlite-definitions': resolve(generated, 'sqlite/definitions.g.ts'),
  },
});
