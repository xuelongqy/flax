import type { Plugin } from 'esbuild';
import type { FlaxModuleManifest } from './modules.mjs';

export function flaxEsbuildPlugin(
  manifest?: FlaxModuleManifest | null,
  options?: {
    root?: string;
    nativeAssets?: false | { hostDirectory: string };
    ffiCodegen?:
      | false
      | {
          target?: string;
          deploymentTarget?: string;
          castxml?: string;
          cacheDirectory?: string;
        };
  },
): Plugin;
