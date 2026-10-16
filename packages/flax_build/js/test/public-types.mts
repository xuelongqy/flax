import type { Plugin as EsbuildPlugin } from 'esbuild';
import type { Plugin as VitePlugin } from 'vite';
import {
  readModuleManifest,
  prepareModules,
  validateModuleManifest,
  flaxHostModulesPlugin,
} from '@flax/build';
import { flaxEsbuildPlugin } from '@flax/build/esbuild';
import { flaxVitePlugin } from '@flax/build/vite';

const manifest = validateModuleManifest({});
const esbuild: EsbuildPlugin = flaxEsbuildPlugin(manifest);
const resolution: EsbuildPlugin = flaxHostModulesPlugin(manifest);
const vite: VitePlugin = flaxVitePlugin();
void [
  readModuleManifest('modules.json'),
  prepareModules({ configPath: 'flax.modules.json', check: true }),
  esbuild,
  resolution,
  vite,
];
// @ts-expect-error A prepared inventory is validated metadata, not a filename.
flaxEsbuildPlugin('modules.json');
// @ts-expect-error Use Vite's server configuration for watching, not compiler options.
flaxVitePlugin({ port: 5173 });
