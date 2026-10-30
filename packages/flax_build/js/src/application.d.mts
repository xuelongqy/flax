export interface FlaxApplicationManifest {
  id: string;
  version: string;
  entry: string;
  description?: string;
  requiredCapabilities?: string[];
  modules?: Record<string, 'javascript' | 'json' | 'wasm'>;
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
  /** Native module inventory. Prefer prepareModuleApplication for full staging. */
  modules?: Record<string, 'javascript' | 'json' | 'wasm'>;
}): Promise<{
  directory: string;
  manifest: FlaxApplicationManifest;
  entryPath: string;
}>;

/** Keeps JS imports and JSON/Wasm binaries; lowers TS without bundling modules. */
export function prepareModuleApplication(options?: {
  projectDirectory?: string;
  modulesDirectory?: string;
  outputDirectory?: string;
  assetsDirectory?: string;
  id?: string;
  entry?: string;
}): Promise<
  Awaited<ReturnType<typeof prepareApplication>> & {
    /** Source/type inputs used by the native module development watcher. */
    watchFiles: string[];
  }
>;

/** Packages the prepared directory after the caller has compiled its JS entry. */
export function packApplication(options: {
  directory: string;
  /** Defaults to directory + '.flax'. Must be outside directory. */
  outputFile?: string;
}): Promise<string>;
