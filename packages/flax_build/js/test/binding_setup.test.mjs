import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdtemp, mkdir, readFile, writeFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { prepareBindingSetup } from '../src/binding_setup.mjs';

const json = async (path) => JSON.parse(await readFile(path, 'utf8'));
async function write(root, path, value) {
  const target = join(root, path);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, typeof value === 'string' ? value : JSON.stringify(value));
}
async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'flax-binding-setup-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await write(root, 'js/package.json', {
    dependencies: { '@flax/core': 'file:../core', '@example/prices': '^1.0.0' },
    devDependencies: { typescript: 'file:../typescript' },
  });
  return root;
}
function plan(scopes = ['app']) {
  return {
    version: '1.0.0',
    typesSdk: {
      name: '@acme/app-sdk',
      directory: 'js/sdk',
      exports: Object.fromEntries(
        scopes.map((scope) => [`./${scope}`, { types: `./types/${scope}.d.ts` }]),
      ),
      files: scopes.map((scope) => `types/${scope}.d.ts`),
      dependencies: ['@flax/core', '@example/prices'],
      compilerConfig: {
        flaxGenerated: true,
        files: scopes.map((scope) => `../src/generated/${scope}.ts`),
      },
    },
  };
}

test('normal build prepares SDK setup, is idempotent and keeps its initial version', async (t) => {
  const root = await fixture(t);
  await prepareBindingSetup(root, plan());
  const file = join(root, 'js/sdk/package.json');
  const first = await readFile(file, 'utf8');
  const npm = JSON.parse(first);
  assert.deepEqual(npm.exports, { './app': { types: './types/app.d.ts' } });
  assert.equal(npm.flax.hostBindings, true);
  assert.equal(npm.dependencies['@flax/core'], 'file:../../core');
  assert.equal(npm.devDependencies.typescript, 'file:../../typescript');
  assert.equal(npm.scripts.prepack, 'npm run types');
  await prepareBindingSetup(root, { ...plan(), version: '2.0.0' }, { check: true });
  assert.equal(await readFile(file, 'utf8'), first);
});

test('scope additions/removals update owned exports while preserving custom npm and JSONC configuration', async (t) => {
  const root = await fixture(t);
  await prepareBindingSetup(root, plan());
  const npm = await json(join(root, 'js/sdk/package.json'));
  npm.private = true;
  npm.publishConfig = { registry: 'https://example.invalid' };
  npm.scripts.prepack = 'custom-check';
  npm.exports['./wrapper'] = './wrapper.js';
  npm.files.push('wrapper.js');
  await write(root, 'js/sdk/package.json', npm);
  await write(root, 'js/sdk/tsconfig.json', '// Custom project\n{}\n');
  await prepareBindingSetup(root, plan(['app', 'admin']));
  assert.ok((await json(join(root, 'js/sdk/package.json'))).exports['./admin']);
  await prepareBindingSetup(root, plan(['admin']));
  const next = await json(join(root, 'js/sdk/package.json'));
  assert.equal(next.exports['./app'], undefined);
  assert.equal(next.exports['./wrapper'], './wrapper.js');
  assert.deepEqual(next.files, ['wrapper.js', 'types/admin.d.ts']);
  assert.equal(next.scripts.prepack, 'custom-check');
  assert.equal(next.private, true);
  assert.deepEqual(next.publishConfig, npm.publishConfig);
  assert.equal(
    await readFile(join(root, 'js/sdk/tsconfig.json'), 'utf8'),
    '// Custom project\n{}\n',
  );
});

test('existing matching exports and files stay project owned', async (t) => {
  const root = await fixture(t);
  await write(root, 'js/sdk/package.json', {
    exports: { './app': { types: './types/app.d.ts' } },
    files: ['types/app.d.ts'],
  });
  await prepareBindingSetup(root, plan());
  await prepareBindingSetup(root, plan(['admin']));
  const npm = await json(join(root, 'js/sdk/package.json'));
  assert.ok(npm.exports['./app']);
  assert.ok(npm.files.includes('types/app.d.ts'));
  assert.deepEqual(Object.keys(npm.flax.generatedTypesSdk.exports), ['./admin']);
});

test('SDK dependencies remain installable and preserve selectors from every dependency section', async (t) => {
  const root = await fixture(t);
  await write(root, 'js/sdk/package.json', {
    devDependencies: { '@example/prices': 'workspace:*' },
  });
  await write(root, 'js/package.json', {
    peerDependencies: { '@flax/core': '^3.0.0', typescript: '^7.0.0' },
  });
  await prepareBindingSetup(root, plan());
  const npm = await json(join(root, 'js/sdk/package.json'));
  assert.equal(npm.dependencies['@example/prices'], 'workspace:*');
  assert.equal(npm.dependencies['@flax/core'], '^3.0.0');
  assert.equal(npm.devDependencies.typescript, '^7.0.0');
});

test('generated SDK names can change while custom names and unsafe publication policies fail before writes', async (t) => {
  const root = await fixture(t);
  await prepareBindingSetup(root, plan());
  const changed = plan();
  changed.typesSdk.name = '@acme/renamed';
  await prepareBindingSetup(root, changed);
  assert.equal((await json(join(root, 'js/sdk/package.json'))).name, '@acme/renamed');
  for (const value of [{ name: '@other/sdk' }, { exports: { '.': './wrapper.js' } }]) {
    await write(root, 'js/sdk/package.json', value);
    const before = await readFile(join(root, 'js/sdk/package.json'), 'utf8');
    await assert.rejects(prepareBindingSetup(root, plan()));
    assert.equal(await readFile(join(root, 'js/sdk/package.json'), 'utf8'), before);
  }
});

test('materialized scope sources track updates/removals and reject user edits', async (t) => {
  const root = await fixture(t);
  const path = 'js/src/generated/admin.ts';
  const header = '// GENERATED CODE. Selected public API subset; do not edit.\n';
  const first = { sources: { [path]: `${header}export const answer = 1;` } };
  await prepareBindingSetup(root, first);
  await prepareBindingSetup(root, {
    sources: { [path]: `${header}export const answer = 2;` },
  });
  await prepareBindingSetup(root, {});
  await assert.rejects(readFile(join(root, path)), { code: 'ENOENT' });
  await prepareBindingSetup(root, first);
  await rm(join(root, '.dart_tool/flax_binding_sources.json'));
  await prepareBindingSetup(root, {
    sources: { [path]: `${header}export const answer = 4;` },
  });
  await prepareBindingSetup(root, { modules: [{ source: path }] });
  assert.match(await readFile(join(root, path), 'utf8'), /answer = 4/);
  await prepareBindingSetup(root, first);
  await write(root, path, '// Project code');
  await assert.rejects(
    prepareBindingSetup(root, {
      sources: { [path]: `${header}export const answer = 3;` },
    }),
    /modified binding source/,
  );
  for (let attempt = 0; attempt < 2; attempt++) {
    await assert.rejects(
      prepareBindingSetup(root, { sources: {} }),
      /modified binding source/,
    );
    assert.equal(await readFile(join(root, path), 'utf8'), '// Project code');
  }
});

test('setup rejects path traversal, symlinks and custom generated-base files', async (t) => {
  const root = await fixture(t);
  const bad = plan();
  bad.typesSdk.directory = '../outside';
  await assert.rejects(prepareBindingSetup(root, bad), /path/);
  await write(root, 'js/sdk/tsconfig.flax.json', '{}');
  await assert.rejects(prepareBindingSetup(root, plan()), /custom/);
  await assert.rejects(readFile(join(root, 'js/sdk/package.json')), { code: 'ENOENT' });
  await rm(join(root, 'js/sdk'), { recursive: true });
  await mkdir(join(root, 'elsewhere'));
  await symlink(join(root, 'elsewhere'), join(root, 'js/sdk'));
  await assert.rejects(prepareBindingSetup(root, plan()), /symbolic link/);
});

test('scope removal survives cache cleanup without deleting current or custom sources', async (t) => {
  const root = await fixture(t);
  const path = 'js/src/generated/admin.ts';
  const helper = 'js/src/generated/dependencies/vendor/_bindings/old.ts';
  const header = '// GENERATED CODE. Selected public API subset; do not edit.\n';
  await prepareBindingSetup(root, {
    sources: {
      [path]: `${header}export const old = 1;`,
      [helper]: `${header}export const oldHelper = 1;`,
    },
  });
  await rm(join(root, '.dart_tool/flax_binding_sources.json'));
  await write(root, 'js/src/generated/app.ts', `${header}export const current = 1;`);
  await write(root, 'js/src/generated/custom.ts', '// Project code');
  const next = {
    sources: {},
    modules: [
      { source: 'js/src/generated/app.ts' },
      {
        source: 'js/src/generated/dependencies/vendor/index.ts',
        subpathRoot: 'js/src/generated/dependencies/vendor',
      },
    ],
  };
  await assert.rejects(prepareBindingSetup(root, next, { check: true }), /stale/);
  await prepareBindingSetup(root, next);
  await assert.rejects(readFile(join(root, path)), { code: 'ENOENT' });
  await assert.rejects(readFile(join(root, helper)), { code: 'ENOENT' });
  assert.match(
    await readFile(join(root, 'js/src/generated/app.ts'), 'utf8'),
    /current/,
  );
  assert.equal(
    await readFile(join(root, 'js/src/generated/custom.ts'), 'utf8'),
    '// Project code',
  );
  await prepareBindingSetup(root, next, { check: true });
});

test('split SDK helper exports resolve as declarations without runtime code', async (t) => {
  const root = await fixture(t);
  const input = plan();
  input.typesSdk.directory = 'node_modules/@acme/app-sdk';
  input.typesSdk.exports = {
    './app': { types: './types/index.d.ts' },
    './app/_bindings/*': { types: './types/_bindings/*.d.ts' },
  };
  input.typesSdk.files = ['types/index.d.ts', 'types/_bindings/Money.d.ts'];
  await prepareBindingSetup(root, input);
  await write(
    root,
    'node_modules/@acme/app-sdk/types/index.d.ts',
    "export { Money } from '@acme/app-sdk/app/_bindings/Money';",
  );
  await write(
    root,
    'node_modules/@acme/app-sdk/types/_bindings/Money.d.ts',
    'export declare class Money { amount: number; }',
  );
  await write(
    root,
    'consumer.mts',
    "import { Money } from '@acme/app-sdk/app';\nconst amount: number = new Money().amount;\n// @ts-expect-error SDK types must remain precise.\nconst bad: string = new Money().amount;",
  );
  await write(root, 'tsconfig.json', {
    compilerOptions: {
      strict: true,
      noEmit: true,
      module: 'NodeNext',
      moduleResolution: 'NodeNext',
      target: 'ES2022',
    },
    files: ['consumer.mts'],
  });
  const require = createRequire(import.meta.url);
  const packagePath = require.resolve('typescript/package.json');
  const { bin } = await json(packagePath);
  execFileSync(process.execPath, [
    join(dirname(packagePath), bin.tsc),
    '-p',
    join(root, 'tsconfig.json'),
  ]);
});
