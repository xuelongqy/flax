export interface FlaxApplicationManifest {
  formatVersion: 1;
  id: string;
  version: string;
  entry: string;
  description?: string;
}

export function prepareApplication(options?: {
  projectDirectory?: string;
  /** Relative to projectDirectory. Defaults to ../assets/flax. */
  outputDirectory?: string;
  /** Relative to projectDirectory. Defaults to assets. */
  assetsDirectory?: string;
  /** Defaults to package.json flax.id, then name. */
  id?: string;
  /** Defaults to app.js. */
  entry?: string;
}): Promise<{
  directory: string;
  manifest: FlaxApplicationManifest;
  entryPath: string;
}>;
