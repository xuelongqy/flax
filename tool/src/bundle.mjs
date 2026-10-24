import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareModules } from '../../packages/flax_build/js/src/modules.mjs';
import { flaxEsbuildPlugin } from '../../packages/flax_build/js/src/esbuild.mjs';

export const root = fileURLToPath(new URL('../../', import.meta.url));
export const bundleOptions = {
  absWorkingDir: root,
  bundle: true,
  format: 'iife',
  platform: 'neutral',
  target: 'es2019',
  supported: { 'async-generator': false, 'for-await': false },
  logLevel: 'info',
  legalComments: 'inline',
};

/** Prepare declared host modules before a build that consumes their inventory. */
export async function prepareBundleModulesFor(projectRoot) {
  const configPath = resolve(projectRoot, 'flax.modules.json');
  try {
    await access(configPath);
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
  return prepareModules({ configPath });
}

/** Use the same prepared host-module contract when a JS project declares one. */
export async function bundleOptionsFor(projectRoot) {
  const pluginOptions = {
    nativeAssets: { hostDirectory: resolve(projectRoot, '..') },
  };
  const configPath = resolve(projectRoot, 'flax.modules.json');
  try {
    await access(configPath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {
        ...bundleOptions,
        plugins: [flaxEsbuildPlugin(null, pluginOptions)],
      };
    }
    throw error;
  }
  const prepared = await prepareModules({ configPath, check: true });
  return {
    ...bundleOptions,
    plugins: [flaxEsbuildPlugin(prepared.manifest, pluginOptions)],
  };
}
