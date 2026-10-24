import type { Plugin } from 'vite';

export function flaxVitePlugin(options?: {
  root?: string;
  nativeAssets?: false | { hostDirectory: string };
}): Plugin;
