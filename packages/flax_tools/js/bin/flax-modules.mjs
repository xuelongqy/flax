#!/usr/bin/env node
import { prepareModules } from '../src/modules.mjs';

const args = process.argv.slice(2);
if (
  (args.length !== 1 && args.length !== 2) ||
  (args.length === 2 && args[1] !== '--check')
) {
  console.error('Usage: flax-modules <module-config.json> [--check]');
  process.exitCode = 2;
} else {
  try {
    const result = await prepareModules({
      configPath: args[0],
      check: args[1] === '--check',
    });
    console.log(
      `${args[1] ? 'Checked' : 'Prepared'} ${result.manifest.modules.length} modules: ${result.manifestPath}`,
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
