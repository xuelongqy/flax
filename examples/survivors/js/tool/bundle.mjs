import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { prepareApplication, packApplication } from '@flax/build/application';
import {
  bundleOptionsFor,
  prepareBundleModulesFor,
} from '../../../../tool/src/bundle.mjs';

const acceptance = process.env.FLAX_SURVIVORS_ACCEPTANCE === '1';
const project = fileURLToPath(new URL('../', import.meta.url));
await prepareBundleModulesFor(project);
const options = await bundleOptionsFor(project);
const application = await prepareApplication({
  projectDirectory: project,
  outputDirectory: resolve(project, '../assets/flax'),
});
const result = await build({
  ...options,
  absWorkingDir: project,
  entryPoints: ['src/main.ts'],
  write: false,
  minifySyntax: true,
  define: {
    __FLAX_SURVIVORS_ACCEPTANCE__: acceptance ? 'true' : 'false',
  },
});
if (
  !acceptance &&
  /__survivorsAcceptance|upgradeFixture|peakFixture/.test(result.outputFiles[0].text)
) {
  throw new Error('Acceptance hooks leaked into the normal game bundle');
}
await writeFile(application.entryPath, result.outputFiles[0].contents);
await packApplication({ directory: application.directory });
