#!/usr/bin/env node
import { prepareModules } from '../src/modules.mjs';

const args = process.argv.slice(2);
const check = args.at(-1) === '--check';
const paths = check ? args.slice(0, -1) : args;
if (paths.length > 1 || paths.some((path) => path.startsWith('--'))) {
  console.error('Usage: flax-modules [module-config.json] [--check]');
  process.exitCode = 2;
} else {
  try {
    const result = await prepareModules({
      configPath: paths[0],
      check,
    });
    console.log(
      `${check ? 'Checked' : 'Prepared'} ${result.manifest.modules.length} modules: ${result.manifestPath}`,
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
