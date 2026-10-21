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

/** Packages the prepared directory after the caller has compiled its JS entry. */
export function packApplication(options: {
  directory: string;
  /** Defaults to directory + '.flax'. Must be outside directory. */
  outputFile?: string;
}): Promise<string>;
