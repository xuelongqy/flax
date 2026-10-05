import { execFileSync } from 'node:child_process';
import { build } from 'esbuild';
import {
  prepareModules,
  flaxHostModulesPlugin,
} from '../packages/flax_tools/js/src/modules.mjs';
import { access, readdir, mkdir, writeFile } from 'node:fs/promises';
import { basename, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { bundleOptionsFor, root } from './src/bundle.mjs';

const args = process.argv.slice(2);
if (args.length !== 0 && (args.length !== 2 || args[0] !== '--package')) {
  throw new Error('Usage: node tool/ui_bundle.mjs [--package <dart-package>]');
}
const selected = args[1];
const packages = (await readdir(resolve(root, 'packages'), { withFileTypes: true }))
  .filter((item) => item.isDirectory() && (!selected || item.name === selected))
  .map((item) => ({
    name: item.name,
    root: resolve(root, 'packages', item.name),
  }));
if (selected && packages.length === 0) {
  throw new Error(`Unknown package: ${selected}`);
}

if (process.env.FLAX_PREPARED_CHECKS && process.env.FLAX_CHECK_PREPARED === '1') {
  execFileSync(
    'dart',
    [
      '--packages=' + resolve(root, '.dart_tool/package_config.json'),
      resolve(root, 'tool/prepare_checks.dart'),
      '--consume=' + process.env.FLAX_PREPARED_CHECKS,
    ],
    { cwd: root, stdio: 'inherit' },
  );
  process.exit(0);
}

const inventoryRoot = resolve(root, '.local/ui-module-inventory');
await mkdir(inventoryRoot, { recursive: true });
await writeFile(
  resolve(inventoryRoot, 'pubspec.yaml'),
  JSON.stringify({
    name: 'flax_ui_module_inventory',
    flutter: { assets: ['modules/'] },
  }),
);
const moduleEntries = [
  ['@flax/core', '@flax/core-runtime'],
  ['@flax/core/host', '@flax/core-runtime'],
  ['@flax/core/navigation', '@flax/core-runtime'],
  ['@flax/core/bindings', '@flax/core-runtime'],
  ['@flax/flutter/widgets', '@flax/core-runtime'],
  ['@flax/flutter/material', '@flax/material-ui'],
  ['@flax/flutter/cupertino', '@flax/cupertino-ui'],
  ['@flax/fetch', '@flax/fetch-runtime'],
  ['@flax/websocket', '@flax/websocket-runtime'],
  ['@flax/local-storage', '@flax/local-storage-runtime'],
  ['@flax/canvas', '@flax/canvas-runtime'],
];
const inventoryConfig = resolve(inventoryRoot, 'flax.modules.json');
await writeFile(
  inventoryConfig,
  JSON.stringify({
    formatVersion: 1,
    flutterProject: '.',
    output: 'modules',
    modules: moduleEntries.map(([specifier, packageName]) => ({
      specifier,
      package: packageName,
    })),
  }),
);
const inventory = await prepareModules({ configPath: inventoryConfig });
let bundled = 0;
for (const owner of packages) {
  const generator = resolve(owner.root, 'tool/ui_fixture.dart');
  try {
    await access(generator);
  } catch {
    continue;
  }
  // Static fixture generation must not invoke macOS-only native build hooks.
  execFileSync(
    'dart',
    [
      '--packages=' + resolve(root, '.dart_tool/package_config.json'),
      'tool/ui_fixture.dart',
    ],
    {
      cwd: owner.root,
      stdio: 'inherit',
    },
  );
  bundled++;
}

for (const owner of packages) {
  const fixtures = resolve(owner.root, 'js/test/fixtures');
  let files;
  try {
    files = await readdir(fixtures);
  } catch (error) {
    if (error.code === 'ENOENT') continue;
    throw error;
  }
  const entries = files
    .filter((name) => name.endsWith('.ts'))
    .sort()
    .map((name) => resolve(fixtures, name));
  const outdir = resolve(owner.root, '.dart_tool/flax/ui');
  if (entries.length > 0) {
    const projectRoot = resolve(owner.root, 'js');
    const options = {
      ...(await bundleOptionsFor(projectRoot)),
      plugins: [flaxHostModulesPlugin(inventory.manifest)],
    };
    await build({
      ...options,
      entryPoints: Object.fromEntries(
        entries.map((entry) => [basename(entry, '.ts'), entry]),
      ),
      outdir,
    });
    bundled++;
  }
  const hook = resolve(owner.root, 'js/test/ui.mjs');
  try {
    await access(hook);
  } catch {
    continue;
  }
  const module = await import(pathToFileURL(hook));
  if (typeof module.bundleUiFixtures !== 'function')
    throw new Error(`Missing bundleUiFixtures export: ${hook}`);
  await module.bundleUiFixtures({ root, packageRoot: owner.root, outdir });
  bundled++;
}
if (bundled === 0) {
  throw new Error(
    selected
      ? `No UI test fixtures found for ${selected}`
      : 'No package UI test fixtures found',
  );
}
