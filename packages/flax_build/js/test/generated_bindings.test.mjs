import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createContext, runInContext } from 'node:vm';
import { build } from 'esbuild';
import { flaxHostModulesPlugin, prepareModules } from '../src/modules.mjs';
import { createMixedFixture } from './fixture.mjs';

test('generated scopes compile together, reuse providers, stay lazy and remove stale modules', async () => {
  const root = await mkdtemp(join(tmpdir(), 'flax-generated-modules-'));
  try {
    const fixture = await createMixedFixture(root);
    const json = async (path, value) => {
      await mkdir(join(path, '..'), { recursive: true });
      await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
    };
    await writeFile(
      join(fixture.host, 'pubspec.yaml'),
      'name: module_fixture\nflutter:\n  assets: [assets/modules/, assets/flax_modules/]\n',
    );
    await mkdir(join(fixture.hostJs, 'public/_bindings'), { recursive: true });
    await writeFile(
      join(fixture.hostJs, 'public/_bindings/app.__module.ts'),
      `
import { getValue } from '@fixture/a';
export function read(extra: number): number { return getValue() + extra; }
`,
    );
    for (const file of ['index.ts', 'read.ts']) {
      await writeFile(
        join(fixture.hostJs, 'public', file),
        "export { read } from './_bindings/app.__module';\n",
      );
    }
    await writeFile(
      join(fixture.hostJs, 'admin.ts'),
      `
import { read } from '@flax/app/app/read';
(globalThis as any).adminInitialized = true;
export const result: number = read(3);
`,
    );
    await writeFile(
      join(fixture.hostJs, 'types.ts'),
      'export type Quantity = number;\n',
    );
    const plan = {
      formatVersion: 2,
      generatedBy: 'flax_codegen',
      package: 'module_fixture',
      version: '1.0.0',
      modules: [
        {
          specifier: '@flax/app/app',
          source: 'js/public/index.ts',
          subpathRoot: 'js/public',
        },
        { specifier: '@flax/app/types', source: 'js/types.ts' },
        { specifier: '@flax/app/admin', source: 'js/admin.ts' },
      ],
      providers: ['@fixture/a-impl'],
    };
    const manifest = {
      formatVersion: 28,
      package: 'module_fixture',
      modules: plan.modules
        .filter((entry) => entry.specifier !== '@flax/app/types')
        .map((entry, index) => ({
          name: index ? 'admin' : 'app',
          moduleId: `example.generated/${index ? 'admin' : 'app'}`,
          uiProtocol: 24,
          model: {
            jsPackage: entry.specifier,
            classes: [],
            functions: [],
            publicLibraries: index
              ? []
              : [{ jsPackage: entry.specifier }, { jsPackage: '@flax/app/types' }],
          },
        })),
    };
    const configPath = join(fixture.host, 'bindings/js_modules.json');
    await json(configPath, plan);
    await json(join(fixture.host, 'bindings/manifest.json'), manifest);
    const prepared = await prepareModules({ configPath });
    assert.deepEqual(
      prepared.manifest.modules.find((entry) => entry.specifier === '@flax/app/admin')
        .dependencies,
      { '@flax/app/app': '1.0.0' },
    );
    assert.equal(
      prepared.manifest.modules.filter((entry) => entry.specifier === '@fixture/a')
        .length,
      1,
    );
    const context = createContext({ fixtureValue: 7 });
    runInContext(
      await readFile(join(fixture.host, prepared.manifest.bootstrap), 'utf8'),
      context,
    );
    for (const entry of prepared.manifest.modules)
      runInContext(await readFile(join(fixture.host, entry.asset), 'utf8'), context);
    context.__flaxModules.seal(prepared.manifest.modules);
    assert.equal(context.__flaxModules.require('@flax/app/app').read(2), 9);
    const consumer = await build({
      stdin: {
        contents:
          "import { read } from '@flax/app/app/read'; globalThis.subpathResult = read(4);",
        resolveDir: fixture.business,
      },
      bundle: true,
      write: false,
      format: 'iife',
      plugins: [flaxHostModulesPlugin(prepared.manifest)],
    });
    runInContext(consumer.outputFiles[0].text, context);
    assert.equal(context.subpathResult, 11);
    assert.deepEqual(
      prepared.manifest.modules.find((entry) => entry.specifier === '@flax/app/app')
        .subpaths,
      ['@flax/app/app/index', '@flax/app/app/read'],
    );
    assert.equal(context.adminInitialized, undefined);
    assert.equal(context.__flaxModules.require('@flax/app/admin').result, 10);
    assert.equal(context.fixtureInitializations, 1);
    await prepareModules({ configPath, check: true });
    const checked = execFileSync(
      process.execPath,
      [fileURLToPath(new URL('../bin/flax-modules.mjs', import.meta.url)), '--check'],
      { cwd: fixture.hostJs, encoding: 'utf8' },
    );
    assert.match(checked, /Checked .* modules:/);

    plan.modules.pop();
    manifest.modules.pop();
    await json(configPath, plan);
    await json(join(fixture.host, 'bindings/manifest.json'), manifest);
    const reduced = await prepareModules({ configPath });
    assert.equal(
      reduced.manifest.modules.some((entry) => entry.specifier === '@flax/app/admin'),
      false,
    );
    assert.equal(
      reduced.manifest.modules.some((entry) => entry.specifier === '@fixture/a'),
      true,
    );
    await prepareModules({ configPath, check: true });
    plan.modules[0].source = '../escape.ts';
    await json(configPath, plan);
    await assert.rejects(prepareModules({ configPath }), /relative asset path/);
    const previous = JSON.parse(await readFile(reduced.manifestPath, 'utf8'));
    assert.deepEqual(previous, reduced.manifest);
    if (process.platform !== 'win32') {
      const outside = join(root, 'outside.ts');
      await writeFile(outside, 'export const outside = true;\n');
      await symlink(outside, join(fixture.hostJs, 'outside.ts'));
      plan.modules[0].source = 'js/outside.ts';
      await json(configPath, plan);
      await assert.rejects(prepareModules({ configPath }), /escapes its package/);
      await symlink(root, join(fixture.hostJs, 'parent.ts'));
      plan.modules[0].source = 'js/parent.ts';
      await json(configPath, plan);
      await assert.rejects(prepareModules({ configPath }), /escapes its package/);
    }
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
