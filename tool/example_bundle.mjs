import { build } from 'esbuild';
import { access, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { bundleOptions } from './src/bundle.mjs';

const option = process.argv.slice(2);
if (option.length !== 0 && (option.length !== 2 || option[0] !== '--package'))
  throw new Error('Usage: node tool/example_bundle.mjs [--package <dart-package>]');
const selectedPackage = option[1];

if (!selectedPackage) {
  for (const name of ['main', 'shared_navigation', 'nested_navigation', 'pages']) {
    await build({
      ...bundleOptions,
      entryPoints: [`examples/embedded/js/src/${name}.ts`],
      outfile: `examples/embedded/assets/${name === 'main' ? 'app' : name}.js`,
    });
  }

  await build({
    ...bundleOptions,
    entryPoints: ['examples/standalone/js/src/main.ts'],
    outfile: 'examples/standalone/assets/app.js',
  });
}

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
  await build({
    ...bundleOptions,
    entryPoints: [entry],
    outfile: resolve(packageRoot, packageEntry.name, 'example/assets/app.js'),
  });
  if (selectedPackage) process.exit(0);
}
if (selectedPackage) throw new Error(`Unknown package example: ${selectedPackage}`);
