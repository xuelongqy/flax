#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { generateBindings, prepareProject } from '../src/index.mjs';

try {
  const args = process.argv.slice(2),
    options = {};
  for (let i = 0; i < args.length; ++i) {
    const name = {
      '--project': 'projectDirectory',
      '--config': 'config',
      '--target': 'target',
      '--deployment-target': 'deploymentTarget',
      '--castxml': 'castxml',
    }[args[i]];
    if (!name || options[name] || !args[i + 1] || args[i + 1].startsWith('--'))
      throw new Error(
        'Usage: flax-ffi-codegen [--project directory | --config file.json] [--target target] [--deployment-target version] [--castxml executable]',
      );
    options[name] = args[++i];
  }
  let result;
  if (options.config) {
    if (options.projectDirectory)
      throw new Error('Use --project or --config, not both');
    const path = resolve(options.config);
    const config = JSON.parse(await readFile(path, 'utf8'));
    if (config.dependencies !== undefined && !Array.isArray(config.dependencies))
      throw new Error('Invalid dependencies');
    delete options.config;
    result = [
      await generateBindings({
        ...config,
        cwd: dirname(path),
        ...options,
        dependencies: [path, ...(config.dependencies ?? [])],
      }),
    ];
  } else result = await prepareProject(options);
  console.log(
    `Generated ${result.length} FFI libraries (${result.filter((r) => r.cached).length} cached)`,
  );
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
