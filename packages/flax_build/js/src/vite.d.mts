import type { Plugin } from 'vite';

export function flaxVitePlugin(options?: {
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
}): Plugin;
