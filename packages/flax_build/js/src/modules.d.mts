import type { Plugin } from 'esbuild';

export interface FlaxModuleBinding {
  moduleId: string;
  uiProtocol: number;
  types: string[];
  functions: string[];
  requiredCapabilities?: string[];
}
export interface FlaxModule {
  specifier: string;
  owner: string;
  version: string;
  artifact: string;
  asset: string;
  package: string;
  source: string;
  dependencies: Record<string, string>;
  bindings: FlaxModuleBinding[];
  subpaths?: string[];
}
export interface FlaxModuleManifest {
  formatVersion: 2;
  runtimeFormat: 'flax-cjs-1';
  bootstrap: string;
  lock: { manager: 'npm' | 'pnpm'; digest: string };
  modules: FlaxModule[];
}

export function validateModuleManifest(value: unknown): FlaxModuleManifest;
export function readModuleManifest(path: string): Promise<FlaxModuleManifest>;
export function prepareModules(options: {
  configPath: string;
  check?: boolean;
}): Promise<{ manifest: FlaxModuleManifest; manifestPath: string }>;
export function flaxHostModulesPlugin(manifest?: FlaxModuleManifest | null): Plugin;
export function createModuleDeliveryResolver(): (
  name: string,
  importer: string,
) => Promise<string | null>;
