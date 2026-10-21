import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { bindingModuleRequirements } from '@flax/build';

const json = async (path) =>
  JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));
const pkg = await json('package.json');
const types = await json('../types/package.json');
const requirements = bindingModuleRequirements(
  await json('../../../bindings/manifest.json'),
);
const modules = Object.entries(pkg.exports)
  .filter(([entry]) => entry !== './flax_modules.json')
  .map(([entry, source]) => {
    const specifier = types.name + (entry === '.' ? '' : entry.slice(1));
    const requirement = requirements.get(specifier);
    assert.ok(requirement, `Missing generated binding module: ${specifier}`);
    return { specifier, source: source.slice(2), bindings: requirement.bindings };
  });
await writeFile(
  new URL('flax_modules.json', import.meta.url),
  JSON.stringify(
    {
      formatVersion: 2,
      package: pkg.name,
      version: pkg.version,
      modules,
    },
    null,
    2,
  ) + '\n',
);
