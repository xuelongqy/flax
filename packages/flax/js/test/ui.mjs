import { bundleUiFixtures as bundleFetchFixtures } from './fetch/ui.mjs';
import { build } from 'esbuild';
import { flaxEsbuildPlugin } from '../../../flax_build/js/src/esbuild.mjs';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { createMixedFixture } from '../../../flax_build/js/test/fixture.mjs';

export async function bundleUiFixtures({ outdir, root }) {
  await bundleFetchFixtures({ outdir, root });
  const jsxRoot = resolve(root, 'examples/jsx/js');
  const jsxInventory = JSON.parse(
    await readFile(
      resolve(root, '.local/ui-module-inventory/modules/modules.json'),
      'utf8',
    ),
  );
  await build({
    absWorkingDir: jsxRoot,
    entryPoints: ['src/main.tsx'],
    outfile: resolve(outdir, 'jsx.js'),
    bundle: true,
    format: 'iife',
    platform: 'neutral',
    target: 'es2022',
    plugins: [flaxEsbuildPlugin(jsxInventory, { nativeAssets: false })],
  });
  const source = await readFile(resolve(outdir, 'native_callbacks.js'), 'utf8');
  await writeFile(
    resolve(outdir, 'native_callbacks_source.dart'),
    `const nativeCallbacksSource = ${JSON.stringify(source).replaceAll('$', '\\$')};\n`,
  );
  const temporary = await mkdtemp(resolve(tmpdir(), 'flax-ui-modules-'));
  try {
    const fixture = await createMixedFixture(temporary);
    const inventoryRoot = resolve(root, '.local/ui-module-inventory');
    const inventory = JSON.parse(
      await readFile(resolve(inventoryRoot, 'modules/modules.json'), 'utf8'),
    );
    // Use one factory registry for synthetic delivery and the default Core plugin.
    fixture.manifest.modules.push(...inventory.modules);
    for (const entry of inventory.modules) {
      fixture.assets[entry.asset] = await readFile(
        resolve(inventoryRoot, entry.asset),
        'utf8',
      );
    }
    await writeFile(
      resolve(outdir, 'module_delivery.json'),
      JSON.stringify({
        manifest: fixture.manifest,
        assets: fixture.assets,
        business: fixture.code,
      }),
    );
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}
