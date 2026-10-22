import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { prepareApplication } from '@flax/build/application';
import { flaxEsbuildPlugin } from '@flax/build/esbuild';

const name = process.argv[2];
assert.ok(['first', 'second', 'manager', 'forbidden'].includes(name));
const app = await prepareApplication({
  projectDirectory: process.cwd(),
  outputDirectory: `../../host/applications/${name}`,
  id: `example.${name}`,
});
await build({
  absWorkingDir: process.cwd(),
  entryPoints: [
    name === 'manager'
      ? 'src/admin.ts'
      : name === 'forbidden'
        ? 'src/forbidden.ts'
        : 'src/main.ts',
  ],
  outfile: app.entryPath,
  bundle: true,
  format: 'iife',
  target: 'es2019',
  define: { APP_NAME: JSON.stringify(name) },
  plugins: [flaxEsbuildPlugin()],
});
console.log(`Built independent ${name}: host imports remain external`);
