import { build } from 'esbuild';
import { access, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import {
  bundleOptions,
  bundleOptionsFor,
  prepareBundleModulesFor,
} from './src/bundle.mjs';

const option = process.argv.slice(2);
const aggregateOnly = option.length === 1 && option[0] === '--aggregate';
const selectedPackage =
  option.length === 2 && option[0] === '--package' ? option[1] : undefined;
if (option.length !== 0 && !aggregateOnly && !selectedPackage)
  throw new Error(
    'Usage: node tool/example_bundle.mjs [--aggregate | --package <dart-package>]',
  );

if (!selectedPackage) {
  const embeddedRoot = resolve(bundleOptions.absWorkingDir, 'examples/embedded/js');
  await prepareBundleModulesFor(embeddedRoot);
  const embeddedOptions = await bundleOptionsFor(embeddedRoot);
  await build({
    ...embeddedOptions,
    entryPoints: ['examples/embedded/js/src/main.ts'],
    outfile: 'examples/embedded/assets/app.js',
  });

  if (!aggregateOnly) {
    const standaloneRoot = resolve(
      bundleOptions.absWorkingDir,
      'examples/standalone/js',
    );
    await prepareBundleModulesFor(standaloneRoot);
    const standaloneOptions = await bundleOptionsFor(standaloneRoot);
    await build({
      ...standaloneOptions,
      entryPoints: ['examples/standalone/js/src/main.ts'],
      outfile: 'examples/standalone/assets/app.js',
    });
  }
}

if (!aggregateOnly) {
  const packageRoot = resolve(bundleOptions.absWorkingDir, 'packages');
  for (const packageEntry of await readdir(packageRoot, { withFileTypes: true })) {
    if (!packageEntry.isDirectory()) continue;
    if (selectedPackage && packageEntry.name !== selectedPackage) continue;
    const entry = resolve(packageRoot, packageEntry.name, 'example/js/src/main.ts');
    try {
      await access(entry);
    } catch (error) {
      if (error.code === 'ENOENT') continue;
      throw error;
    }
    const projectRoot = resolve(packageRoot, packageEntry.name, 'example/js');
    await prepareBundleModulesFor(projectRoot);
    const options = await bundleOptionsFor(projectRoot);
    await build({
      ...options,
      entryPoints: [entry],
      outfile: resolve(packageRoot, packageEntry.name, 'example/assets/app.js'),
    });
    if (selectedPackage) process.exit(0);
  }
}
if (selectedPackage) throw new Error(`Unknown package example: ${selectedPackage}`);
