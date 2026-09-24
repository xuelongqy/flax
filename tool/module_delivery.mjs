import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { format } from 'prettier';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.slice(2).includes('--check');

if (process.argv.slice(2).some((argument) => argument !== '--check')) {
  throw new Error('Usage: node tool/module_delivery.mjs [--check]');
}

async function json(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

function uniqueSorted(values) {
  return [...new Set(values)].sort();
}

function bindingRequirement(module) {
  const model = module.model;
  // The Dart emitter switches the whole module to host-proxy output as soon as
  // one host proxy is present. Such a module does not produce a
  // FlaxBindingModule, so it must not be projected as a runtime Dart binding
  // requirement even when the model also contains ordinary support types.
  const hostProxyModule = (model.classes ?? []).some(
    (entry) => entry.proxy?.kind === 'host',
  );
  return {
    moduleId: module.moduleId,
    uiProtocol: module.uiProtocol,
    types: hostProxyModule
      ? []
      : uniqueSorted([
          ...(model.classes ?? []).map((entry) => entry.id),
          ...(model.types ?? [])
            .filter(
              (entry) =>
                (entry.enumNames?.length ?? 0) > 0 &&
                entry.id.startsWith(`${module.moduleId}#`),
            )
            .map((entry) => entry.id),
        ]),
    functions: hostProxyModule
      ? []
      : uniqueSorted([
          ...(model.functions ?? []).map((entry) => entry.id),
          ...(model.extensions ?? [])
            .filter((entry) => entry.isReference !== true)
            .flatMap((entry) => entry.members.map((member) => member.id)),
          ...(model.topLevel?.setters ?? [])
            .filter((entry) => entry.isReference !== true)
            .map((entry) => entry.id),
          ...(model.topLevel?.getters ?? [])
            .filter(
              (entry) => entry.literal === undefined && entry.isReference !== true,
            )
            .map((entry) => entry.id),
        ]),
  };
}

function publicRequirements(manifest) {
  const result = new Map();
  for (const module of manifest.modules) {
    const requirement = bindingRequirement(module);
    const libraries = [...(module.model.publicLibraries ?? [])].sort((a, b) =>
      a.jsPackage.localeCompare(b.jsPackage),
    );
    if (libraries.length > 0) {
      const specifier = libraries[0].jsPackage;
      let entry = result.get(specifier);
      if (!entry) {
        entry = { bindings: new Map(), helperSubpaths: new Set() };
        result.set(specifier, entry);
      }
      entry.helperSubpaths.add(`_bindings/${module.name}.__module`);
    }
    if (requirement.types.length === 0 && requirement.functions.length === 0) continue;
    for (const library of libraries) {
      let entry = result.get(library.jsPackage);
      if (!entry) {
        entry = { bindings: new Map(), helperSubpaths: new Set() };
        result.set(library.jsPackage, entry);
      }
      entry.bindings.set(requirement.moduleId, requirement);
    }
  }
  return new Map(
    [...result].map(([specifier, entry]) => [
      specifier,
      {
        bindings: [...entry.bindings.values()].sort((a, b) =>
          a.moduleId.localeCompare(b.moduleId),
        ),
        helperSubpaths: [...entry.helperSubpaths].sort(),
      },
    ]),
  );
}

function coreSource(specifier) {
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

function materialSource(specifier) {
  if (specifier !== '@flax/flutter/material') {
    throw new Error(`No @flax/material-ui delivery source for ${specifier}`);
  }
  return {
    source: 'dist/generated/libraries/material/index.js',
    subpathRoot: 'dist/generated/libraries/material',
  };
}

function cupertinoSource(specifier) {
  if (specifier !== '@flax/flutter/cupertino') {
    throw new Error('Unexpected Cupertino module specifier');
  }
  return {
    source: 'dist/generated/libraries/cupertino/index.js',
    subpathRoot: 'dist/generated/libraries/cupertino',
  };
}

async function delivery({
  packageDirectory,
  manifestPath,
  sourceFor,
  extraModules = [],
}) {
  const npm = await json(join(root, packageDirectory, 'package.json'));
  const manifest = await json(join(root, manifestPath));
  if (manifest.formatVersion !== 12) {
    throw new Error(`Expected Binding Manifest 12: ${manifestPath}`);
  }
  const requirements = publicRequirements(manifest);
  const modules = [
    ...extraModules,
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
    formatVersion: 1,
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
    sourceFor: materialSource,
  },
  {
    packageDirectory: 'packages/flax_cupertino_ui/js',
    manifestPath: 'packages/flax_cupertino_ui/bindings/manifest.json',
    sourceFor: cupertinoSource,
  },
];

for (const target of targets) {
  const value = await delivery(target);
  await emit(join(root, target.packageDirectory, 'flax_modules.json'), value);
}
