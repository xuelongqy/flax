import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  flaxHostModulesPlugin,
  prepareModules,
} from '../../packages/flax_tools/js/src/modules.mjs';

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
  const configPath = resolve(projectRoot, 'flax.modules.json');
  try {
    await access(configPath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {
        ...bundleOptions,
        plugins: [flaxHostModulesPlugin()],
      };
    }
    throw error;
  }
  const prepared = await prepareModules({ configPath, check: true });
  return {
    ...bundleOptions,
    plugins: [flaxHostModulesPlugin(prepared.manifest)],
  };
}
