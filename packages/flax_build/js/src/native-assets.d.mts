import type { Metafile } from 'esbuild';
export function prepareNativeAssets(options: {
  projectDirectory: string;
  hostDirectory: string;
  metafile: Metafile;
}): Promise<{
  assets: Record<string, string>;
  plan: { formatVersion: number; libraries: unknown[]; files: Record<string, string> };
}>;
