import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { access, mkdir, mkdtemp, readdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import {
  prepareApplication,
  packApplication,
} from '../packages/flax_build/js/src/application.mjs';
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

if (process.env.FLAX_PREPARED_CHECKS && process.env.FLAX_CHECK_PREPARED === '1') {
  execFileSync(
    'dart',
    [
      '--packages=' +
        resolve(bundleOptions.absWorkingDir, '.dart_tool/package_config.json'),
      resolve(bundleOptions.absWorkingDir, 'tool/prepare_checks.dart'),
      '--consume=' + process.env.FLAX_PREPARED_CHECKS,
    ],
    { cwd: bundleOptions.absWorkingDir, stdio: 'inherit' },
  );
  process.exit(0);
}

if (!selectedPackage) {
  // The gallery's trusted Dart entrance installs this child-application package.
  await bundlePackageExample('flax_sandbox_example');
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
    execFileSync(process.execPath, [resolve(standaloneRoot, 'tool/bundle.mjs')], {
      cwd: standaloneRoot,
      stdio: 'inherit',
    });
    execFileSync(process.execPath, [resolve(standaloneRoot, 'tool/modules.mjs')], {
      cwd: standaloneRoot,
      stdio: 'inherit',
    });
  }
}

if (!aggregateOnly) {
  const packageRoot = resolve(bundleOptions.absWorkingDir, 'packages');
  for (const packageEntry of await readdir(packageRoot, { withFileTypes: true })) {
    if (!packageEntry.isDirectory()) continue;
    if (selectedPackage && packageEntry.name !== selectedPackage) continue;
    if (!selectedPackage && packageEntry.name === 'flax_sandbox_example') continue;
    if ((await bundlePackageExample(packageEntry.name)) && selectedPackage)
      process.exit(0);
  }
}
if (selectedPackage) throw new Error(`Unknown package example: ${selectedPackage}`);

async function bundlePackageExample(name) {
  const example = resolve(bundleOptions.absWorkingDir, 'packages', name, 'example');
  const entry = resolve(example, 'js/src/main.ts');
  try {
    await access(resolve(example, 'pubspec.yaml'));
    await access(entry);
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
  await prepareBundleModulesFor(resolve(example, 'js'));
  const options = await bundleOptionsFor(resolve(example, 'js'));
  if (name === 'flax_sandbox_example') {
    const temporaryRoot = resolve(bundleOptions.absWorkingDir, '.local/tmp');
    await mkdir(temporaryRoot, { recursive: true });
    const temporary = await mkdtemp(resolve(temporaryRoot, 'sandbox-package-'));
    try {
      const application = await prepareApplication({
        projectDirectory: resolve(example, 'js'),
        outputDirectory: temporary,
        modules: { 'app.js': 'javascript' },
      });
      await build({
        ...options,
        format: 'esm',
        target: 'es2022',
        entryPoints: [entry],
        outfile: application.entryPath,
      });
      await packApplication({
        directory: application.directory,
        outputFile: resolve(example, '../assets/app.flax'),
      });
      await rm(resolve(example, '../assets/app.js'), { force: true });
    } finally {
      await rm(temporary, { recursive: true, force: true });
    }
    return true;
  }
  await build({
    ...options,
    entryPoints: [entry],
    outfile: resolve(example, 'assets/app.js'),
  });
  return true;
}
