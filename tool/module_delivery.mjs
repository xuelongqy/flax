import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { format } from 'prettier';
import { expandManifestMembers } from '../packages/flax_build/js/src/binding_manifest.mjs';
import {
  bindingRequirement,
  publicRequirements,
} from '../packages/flax_build/js/src/binding_delivery.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.slice(2).includes('--check');

if (process.argv.slice(2).some((argument) => argument !== '--check')) {
  throw new Error('Usage: node tool/module_delivery.mjs [--check]');
}

async function json(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

async function bindingManifest(path) {
  const manifest = await json(join(root, path));
  if (manifest.formatVersion !== 28) {
    throw new Error(`Expected Binding Manifest 28: ${path}`);
  }
  return manifest;
}

function coreSource(specifier) {
  if (specifier === '@flax/core') return { source: 'dist/runtime/index.js' };
  if (specifier === '@flax/core/host') return { source: 'dist/host/index.js' };
  if (specifier === '@flax/core/navigation') {
    return {
      source: 'dist/flutter/generated/libraries/navigation/index.js',
      subpathRoot: 'dist/flutter/generated/libraries/navigation',
    };
  }
  if (specifier === '@flax/flutter/widgets') {
    return {
      source: 'dist/flutter/widgets.js',
      subpathRoot: 'dist/flutter/generated/libraries/widgets',
    };
  }
  if (specifier.startsWith('@flax/flutter/')) {
    const library = specifier.slice('@flax/flutter/'.length);
    return {
      source: `dist/flutter/generated/libraries/${library}/index.js`,
      subpathRoot: `dist/flutter/generated/libraries/${library}`,
    };
  }
  if (specifier.startsWith('@flax/dart/')) {
    const library = specifier.slice('@flax/dart/'.length);
    return {
      source: `dist/dart/generated/libraries/${library}/index.js`,
      subpathRoot: `dist/dart/generated/libraries/${library}`,
    };
  }
  throw new Error(`No @flax/core delivery source for ${specifier}`);
}

function uiSource(specifier, library) {
  const publicName = `@flax/${library}-ui`;
  let subpathRoot = `dist/generated/libraries/${library}`;
  if (specifier !== publicName) {
    const prefix = `${publicName}/dependencies/`;
    const dependency = specifier.startsWith(prefix)
      ? specifier.slice(prefix.length)
      : '';
    if (!/^[a-z]/.test(dependency) || /[^a-z0-9_]/.test(dependency)) {
      throw new Error(`No ${publicName} delivery source for ${specifier}`);
    }
    subpathRoot = `dist/generated/dependencies/${dependency}`;
  }
  return {
    source: specifier === publicName ? 'dist/index.js' : `${subpathRoot}/index.js`,
    subpathRoot,
  };
}

async function delivery({
  packageDirectory,
  manifestPath,
  sourceFor,
  extraModules = [],
}) {
  const npm = await json(join(root, packageDirectory, 'package.json'));
  const manifest = manifestPath
    ? await bindingManifest(manifestPath)
    : { formatVersion: 28, modules: [] };
  // Delivery projects ownership and operation IDs; shared type references stay encoded.
  const requirements = publicRequirements(manifest);
  const modules = [
    ...extraModules.map((entry) => ({ bindings: [], ...entry })),
    ...[...requirements.entries()].map(([specifier, requirement]) => ({
      specifier,
      ...sourceFor(specifier),
      ...(requirement.helperSubpaths.length > 0
        ? { helperSubpaths: requirement.helperSubpaths }
        : {}),
      bindings: requirement.bindings,
    })),
  ].sort((a, b) => a.specifier.localeCompare(b.specifier));
  return {
    formatVersion: 2,
    package: npm.name,
    version: npm.version,
    modules,
  };
}

async function emit(path, value) {
  const output = await format(JSON.stringify(value), { filepath: path });
  if (check) {
    let current;
    try {
      current = await readFile(path, 'utf8');
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`Missing generated module delivery metadata: ${path}`);
      }
      throw error;
    }
    if (current !== output) {
      throw new Error(`Stale generated module delivery metadata: ${path}`);
    }
    return;
  }
  await writeFile(path, output);
}

const targets = [
  {
    packageDirectory: 'packages/flax/js',
    manifestPath: 'packages/flax/bindings/manifest.json',
    sourceFor: coreSource,
    extraModules: [
      { specifier: '@flax/core', source: 'dist/runtime/index.js' },
      {
        specifier: '@flax/core/assets',
        source: 'dist/runtime/assets.js',
      },
      { specifier: '@flax/core/host', source: 'dist/host/index.js' },
      {
        specifier: '@flax/core/bindings',
        source: 'dist/runtime/bindings.js',
        bindings: [],
      },
    ],
  },
  {
    packageDirectory: 'packages/flax_material_ui/js',
    manifestPath: 'packages/flax_material_ui/bindings/manifest.json',
    sourceFor: (specifier) => uiSource(specifier, 'material'),
  },
  {
    packageDirectory: 'packages/flax_cupertino_ui/js',
    manifestPath: 'packages/flax_cupertino_ui/bindings/manifest.json',
    sourceFor: (specifier) => uiSource(specifier, 'cupertino'),
  },
];

for (const [owner, publicName] of [
  ['flax_fetch', '@flax/fetch'],
  ['flax_websocket', '@flax/websocket'],
  ['flax_local_storage', '@flax/local-storage'],
  ['flax_canvas', '@flax/canvas'],
]) {
  const canvas =
    owner === 'flax_canvas'
      ? await bindingManifest('packages/flax_canvas/bindings/manifest.json')
      : null;
  targets.push({
    packageDirectory: `packages/${owner}/js`,
    manifestPath: null,
    sourceFor: () => {
      throw new Error('Unexpected host module');
    },
    extraModules: [
      {
        specifier: publicName,
        source: 'dist/index.js',
        bindings: canvas
          ? expandManifestMembers(canvas).modules.map(bindingRequirement)
          : [],
      },
      { specifier: `${publicName}/globals`, source: 'dist/globals.js' },
    ],
  });
}

for (const target of targets) {
  const value = await delivery(target);
  await emit(join(root, target.packageDirectory, 'flax_modules.json'), value);
}
