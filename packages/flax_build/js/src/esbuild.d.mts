import type { Plugin } from 'esbuild';
import type { FlaxModuleManifest } from './modules.mjs';

export function flaxEsbuildPlugin(
  manifest?: FlaxModuleManifest | null,
  options?: { root?: string; nativeAssets?: false | { hostDirectory: string } },
): Plugin;
