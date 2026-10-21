import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rm,
  writeFile,
} from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join, relative, sep } from 'node:path';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createContext, runInContext } from 'node:vm';
import { build } from 'esbuild';
import {
  bindingModuleRequirements,
  createModuleDeliveryResolver,
  flaxHostModulesPlugin,
  prepareModules,
  validateModuleManifest,
} from '../src/modules.mjs';
import {
  createBundledProviderFixture,
  createGraphFixture,
  createInternalSubpathFixture,
  createOwnedSubpathFixture,
  createMixedFixture,
} from './fixture.mjs';

const repository = fileURLToPath(new URL('../../../../', import.meta.url));

test('binding requirements retain generated identities for independent npm builds', () => {
  const requirements = bindingModuleRequirements({
    formatVersion: 28,
    modules: [
      {
        name: 'api',
        moduleId: 'example.app/api',
        uiProtocol: 24,
        model: {
          jsPackage: '@example/sdk/api',
          classes: [],
          functions: [{ id: 'example.app/api#function:currentCart' }],
        },
      },
      {
        name: 'admin',
        moduleId: 'example.app/admin',
        uiProtocol: 24,
        model: {
          jsPackage: '@flax/app/admin',
          classes: [],
          functions: [{ id: 'example.app/admin#function:resetCart' }],
        },
      },
    ],
  });
  assert.deepEqual(requirements.get('@example/sdk/api').bindings[0].functions, [
    'example.app/api#function:currentCart',
  ]);
  assert.equal(
    requirements.get('@flax/app/admin').bindings[0].moduleId,
    'example.app/admin',
  );
  assert.throws(() => bindingModuleRequirements({ formatVersion: 27 }), /Manifest 28/);
});

let root;
let fixture;
before(async () => {
  root = await mkdtemp(join(tmpdir(), 'flax module delivery-'));
  fixture = await createMixedFixture(root);
});
after(async () => {
  if (root) await rm(root, { recursive: true, force: true });
});

function runtime() {
  const context = createContext({ fixtureValue: 7 });
  runInContext(fixture.assets[fixture.manifest.bootstrap], context);
  for (const entry of fixture.manifest.modules)
    runInContext(fixture.assets[entry.asset], context);
  context.__flaxModules.seal(fixture.manifest.modules);
  return context;
}

test('packed declarations-only consumer typechecks ordinary values without the implementation', async () => {
  await assert.rejects(
    access(join(fixture.business, 'node_modules/@fixture/a-impl/package.json')),
    { code: 'ENOENT' },
  );
  const require = createRequire(new URL('../../../../package.json', import.meta.url));
  const compilerPackage = require.resolve('typescript/package.json');
  const { bin } = JSON.parse(await readFile(compilerPackage, 'utf8'));
  const compiler = join(dirname(compilerPackage), bin.tsc);
  execFileSync(
    process.execPath,
    [compiler, '--project', join(fixture.business, 'tsconfig.json')],
    { encoding: 'utf8' },
  );
  assert.ok(!fixture.code.includes('A_IMPL_MARKER'));
  assert.ok(
    !Object.keys(fixture.metafile.inputs).some((path) =>
      path.includes('node_modules/@fixture/a-impl/'),
    ),
  );
});

test('app import and bundled B re-export share one lazy host instance', () => {
  const context = runtime();
  assert.equal(context.fixtureInitializations, undefined);
  runInContext(fixture.code, context);
  assert.equal(context.fixtureResult.same, true);
  assert.equal(context.fixtureInitializations, 1);
  assert.equal(context.fixtureResult.bindingState.reads, 0);
  assert.equal(context.fixtureResult.read(), 7);
  assert.equal(context.fixtureResult.bindingState.reads, 1);
  context.fixtureValue = 12;
  assert.equal(context.fixtureResult.readFromB(), 12);
  assert.equal(context.fixtureResult.bindingState.reads, 2);
  runInContext(fixture.code, context);
  assert.equal(context.fixtureInitializations, 1);
  assert.equal(context.fixtureResult.bindingState.reads, 2);
});

test('business imports reject an installed implementation without a prepared plugin', async () => {
  await assert.rejects(
    createBundledProviderFixture(join(root, 'bundled-provider')),
    /Missing prepared Flax module: @fixture\/c/,
  );
});

test('business imports require exact prepared entries or recorded public subpaths', async () => {
  const prepared = await createOwnedSubpathFixture(join(root, 'public-subpaths'));
  const provider = prepared.manifest.modules.find(
    (entry) => entry.specifier === '@fixture/owned/provider',
  );
  assert.deepEqual(provider.subpaths, ['@fixture/owned/provider/index']);
  for (const path of [
    '@fixture/owned/provider/index',
    '@fixture/owned/provider/missing',
    '@fixture/owned/provider/_bindings/type',
    '@fixture/owned/provider/_bindings/helper',
  ]) {
    const bundled = build({
      stdin: { contents: `import ${JSON.stringify(path)};`, resolveDir: root },
      bundle: true,
      write: false,
      platform: 'neutral',
      plugins: [flaxHostModulesPlugin(prepared.manifest)],
      logLevel: 'silent',
    });
    if (path.endsWith('/index')) {
      const result = await bundled;
      assert.ok(result.outputFiles[0].text.includes('@fixture/owned/provider'));
    } else {
      await assert.rejects(bundled, /Missing prepared Flax module or public subpath/);
    }
  }
  const core = {
    ...fixture.manifest.modules[0],
    specifier: '@flax/core',
    dependencies: {},
    subpaths: [],
  };
  for (const path of ['@flax/core/navigation', '@flax/core/not-a-public-module']) {
    await assert.rejects(
      build({
        stdin: { contents: `import ${JSON.stringify(path)};`, resolveDir: root },
        bundle: true,
        write: false,
        plugins: [flaxHostModulesPlugin({ ...fixture.manifest, modules: [core] })],
        logLevel: 'silent',
      }),
      /Missing prepared Flax module or public subpath/,
    );
  }
});

test('Node delivery resolves a dependency child even after caching its parent module', async () => {
  const directory = join(root, 'node-parent-child');
  const files = {};
  for (const [name, specifier] of [
    ['parent', '@fixture/public'],
    ['child', '@fixture/public/bindings'],
  ]) {
    const packageRoot = join(directory, 'node_modules', '@fixture', name);
    await mkdir(packageRoot, { recursive: true });
    await writeFile(
      join(packageRoot, 'package.json'),
      JSON.stringify({
        name: `@fixture/${name}`,
        version: '1.0.0',
        exports: { './flax_modules.json': './flax_modules.json' },
      }),
    );
    await writeFile(join(packageRoot, 'index.js'), 'export const value = 1;\n');
    await writeFile(
      join(packageRoot, 'flax_modules.json'),
      JSON.stringify({
        formatVersion: 2,
        package: `@fixture/${name}`,
        version: '1.0.0',
        modules: [{ specifier, source: 'index.js', bindings: [] }],
      }),
    );
    const consumer = join(directory, name);
    await mkdir(consumer, { recursive: true });
    await writeFile(
      join(consumer, 'package.json'),
      JSON.stringify({ dependencies: { [`@fixture/${name}`]: '1.0.0' } }),
    );
    files[name] = join(consumer, 'index.js');
    await writeFile(files[name], '');
  }
  const expected = [
    await realpath(join(directory, 'node_modules/@fixture/parent/index.js')),
    await realpath(join(directory, 'node_modules/@fixture/child/index.js')),
  ];
  for (const order of [
    [0, 1],
    [1, 0],
  ]) {
    const resolveDelivery = createModuleDeliveryResolver();
    for (const index of order) {
      assert.equal(
        await resolveDelivery(
          index === 0 ? '@fixture/public' : '@fixture/public/bindings',
          index === 0 ? files.parent : files.child,
        ),
        expected[index],
      );
    }
  }
  const resolveDelivery = createModuleDeliveryResolver();
  assert.deepEqual(
    await Promise.all([
      resolveDelivery('@fixture/public', files.parent),
      resolveDelivery('@fixture/public/bindings', files.child),
    ]),
    expected,
  );
});

test('prepared assets contain the selected module and exclude unrelated code', async () => {
  assert.deepEqual(
    fixture.manifest.modules.map((entry) => entry.specifier),
    ['@fixture/a', '@fixture/base/bindings'],
  );
  assert.ok(
    !Object.values(fixture.assets).join('').includes('UNSELECTED_MODULE_MUST_NOT_SHIP'),
  );
  for (const entry of fixture.manifest.modules) {
    const source = fixture.assets[entry.asset];
    const prefix = 'globalThis.__flaxModules.define(';
    const metadata = JSON.parse(
      source.slice(prefix.length, source.indexOf(', function(')),
    );
    assert.deepEqual(metadata, {
      specifier: entry.specifier,
      owner: entry.owner,
      version: entry.version,
      artifact: entry.artifact,
      dependencies: entry.dependencies,
    });
    assert.ok(Array.isArray(entry.bindings));
    assert.ok(Array.isArray(entry.subpaths));
  }
  const checked = await prepareModules({ configPath: fixture.configPath, check: true });
  assert.deepEqual(checked.manifest, fixture.manifest);
});

test('regeneration replaces old protocol assets but runtime inventory rejects them', async () => {
  const prepared = await createMixedFixture(join(root, 'old-protocol'));
  const previous = structuredClone(prepared.manifest);
  previous.modules[0].bindings = [
    { moduleId: 'previous', uiProtocol: 22, types: [], functions: [] },
  ];
  assert.throws(() => validateModuleManifest(previous), /Unsupported binding protocol/);
  const inventory = join(prepared.host, 'assets/modules/modules.json');
  await writeFile(inventory, JSON.stringify(previous));
  const regenerated = await prepareModules({ configPath: prepared.configPath });
  assert.deepEqual(regenerated.manifest, prepared.manifest);
});

test('separate runtimes never share cached JS instances and close rejects new imports', () => {
  const first = runtime();
  const second = runtime();
  runInContext(fixture.code, first);
  runInContext(fixture.code, second);
  assert.notEqual(
    first.__flaxModules.require('@fixture/a').shared,
    second.__flaxModules.require('@fixture/a').shared,
  );
  first.__flaxModules.close();
  assert.throws(() => first.__flaxModules.require('@fixture/a'), /FlaxSessionClosed/);
  assert.equal(second.__flaxModules.require('@fixture/a').getValue(), 7);
});

test('business build fails clearly against a missing host contract or module', () => {
  assert.throws(
    () => runInContext(fixture.code, createContext({})),
    /Missing or incompatible Flax module host/,
  );
  const context = runtime();
  assert.throws(
    () => context.__flaxModules.require('@fixture/missing'),
    /Missing Flax module/,
  );
});

test('an unchanged business bundle uses compatible host updates across versions and hashes', () => {
  const context = createContext({ fixtureValue: 9 });
  runInContext(fixture.assets[fixture.manifest.bootstrap], context);
  const updated = fixture.manifest.modules.map((entry) => ({
    ...entry,
    version: '2.0.0',
    artifact: 'f'.repeat(64),
    dependencies: Object.fromEntries(
      Object.keys(entry.dependencies).map((name) => [name, '2.0.0']),
    ),
  }));
  for (const entry of updated) {
    const old = fixture.manifest.modules.find(
      (previous) => previous.specifier === entry.specifier,
    );
    const source = fixture.assets[old.asset].replace(
      /globalThis\.__flaxModules\.define\([^\n]+, function/,
      `globalThis.__flaxModules.define(${JSON.stringify(entry)}, function`,
    );
    assert.notEqual(source, fixture.assets[old.asset]);
    runInContext(source, context);
  }
  context.__flaxModules.seal(updated);
  runInContext(fixture.code, context);
  assert.equal(context.fixtureResult.read(), 9);
  const old = fixture.manifest.modules.find(
    (entry) => entry.specifier === '@fixture/a',
  );
  assert.equal(
    context.__flaxModules.require(old.specifier, old.version, old.artifact).getValue(),
    9,
  );
  assert.ok(!fixture.code.includes(old.artifact));
});

test('strict inventory rejects unknown fields, duplicate owners and missing dependencies', () => {
  assert.throws(
    () => validateModuleManifest({ ...fixture.manifest, unexpected: true }),
    /Unknown field/,
  );
  const original = fixture.manifest.modules[0];
  for (const subpaths of [
    null,
    ['@fixture/other'],
    ['@fixture/a/../escape'],
    ['@fixture/a/_bindings/private'],
    ['@fixture/a/alias', '@fixture/a/alias'],
  ]) {
    assert.throws(() =>
      validateModuleManifest({
        ...fixture.manifest,
        modules: [{ ...original, subpaths }, ...fixture.manifest.modules.slice(1)],
      }),
    );
  }
  const alias = {
    ...original,
    specifier: '@fixture/a/alias',
    source: 'alias.js',
    asset: 'assets/modules/alias.js',
  };
  assert.throws(
    () => validateModuleManifest({ ...fixture.manifest, modules: [original, alias] }),
    /Duplicate Flax module owner/,
  );
  assert.throws(
    () =>
      validateModuleManifest({
        ...fixture.manifest,
        modules: [
          { ...original, subpaths: [alias.specifier] },
          { ...alias, owner: 'other-owner' },
        ],
      }),
    /Duplicate Flax module subpath/,
  );
  assert.throws(
    () =>
      validateModuleManifest({
        ...fixture.manifest,
        modules: [{ ...original, dependencies: { '@fixture/missing': '1.0.0' } }],
      }),
    /Missing Flax module/,
  );
});

test('pnpm file archive records verify the actual package version', async () => {
  const lockPath = join(fixture.hostJs, 'pnpm-lock.yaml');
  const packages = {
    '@fixture/base@file:../base-1.0.0.tgz': { version: '1.0.0' },
    '@fixture/a-impl@file:../a-impl-1.0.0.tgz': { version: '1.0.0' },
  };
  try {
    await writeFile(lockPath, JSON.stringify({ lockfileVersion: '9.0', packages }));
    const prepared = await prepareModules({ configPath: fixture.configPath });
    assert.equal(prepared.manifest.lock.manager, 'pnpm');

    packages['@fixture/a-impl@file:../a-impl-1.0.0.tgz'].version = '2.0.0';
    await writeFile(lockPath, JSON.stringify({ lockfileVersion: '9.0', packages }));
    await assert.rejects(
      prepareModules({ configPath: fixture.configPath }),
      /not locked at @fixture\/a-impl@1\.0\.0/,
    );
  } finally {
    await rm(lockPath, { force: true });
    await prepareModules({ configPath: fixture.configPath });
  }
});

test('pnpm local directory records verify the source package identity and version', async () => {
  const lockPath = join(fixture.hostJs, 'pnpm-lock.yaml');
  const sourcePath = join(root, 'a-impl/package.json');
  const original = await readFile(sourcePath, 'utf8');
  const packages = {};
  for (const [name, folder] of [
    ['@fixture/base', 'core'],
    ['@fixture/a-impl', 'a-impl'],
  ]) {
    const directory = relative(fixture.hostJs, join(root, folder)).split(sep).join('/');
    packages[`${name}@file:${directory}`] = {
      resolution: { type: 'directory', directory },
    };
  }
  try {
    await writeFile(lockPath, JSON.stringify({ lockfileVersion: '9.0', packages }));
    await prepareModules({ configPath: fixture.configPath });
    const source = JSON.parse(original);
    for (const fields of [{ version: '2.0.0' }, { name: '@fixture/wrong' }]) {
      await writeFile(sourcePath, JSON.stringify({ ...source, ...fields }));
      await assert.rejects(
        prepareModules({ configPath: fixture.configPath }),
        /not locked at @fixture\/a-impl@1\.0\.0/,
      );
    }
  } finally {
    await writeFile(sourcePath, original);
    await rm(lockPath, { force: true });
    await prepareModules({ configPath: fixture.configPath });
  }
});

test('pnpm root importer prepares modules owned by the current project', async () => {
  const directory = join(root, 'pnpm-root-project');
  await mkdir(join(directory, 'js'), { recursive: true });
  const files = {
    'pubspec.yaml': 'name: root_fixture\nflutter:\n  assets:\n    - assets/modules/\n',
    'js/package.json': JSON.stringify({
      name: '@fixture/local-impl',
      version: '1.0.0',
      type: 'module',
      exports: { './flax_modules.json': './flax_modules.json' },
    }),
    'js/flax_modules.json': JSON.stringify({
      formatVersion: 2,
      package: '@fixture/local-impl',
      version: '1.0.0',
      modules: [{ specifier: '@fixture/local', source: 'index.js', bindings: [] }],
    }),
    'js/index.js': 'export const local = 1;\n',
    'js/pnpm-lock.yaml': JSON.stringify({
      lockfileVersion: '9.0',
      importers: { '.': {} },
    }),
    'js/flax.modules.json': JSON.stringify({
      formatVersion: 1,
      modules: [{ specifier: '@fixture/local', package: '@fixture/local-impl' }],
      flutterProject: '..',
      output: 'assets/modules',
    }),
  };
  await Promise.all(
    Object.entries(files).map(([name, source]) =>
      writeFile(join(directory, name), source),
    ),
  );
  const prepared = await prepareModules({
    configPath: join(directory, 'js/flax.modules.json'),
  });
  assert.equal(prepared.manifest.lock.manager, 'pnpm');
  assert.deepEqual(
    prepared.manifest.modules.map((m) => m.specifier),
    ['@fixture/local'],
  );
});

test('preparation checks lock consistency and actual Flutter asset declarations', async () => {
  const lockPath = join(fixture.hostJs, 'package-lock.json');
  const originalLock = await readFile(lockPath, 'utf8');
  const lock = JSON.parse(originalLock);
  lock.packages['node_modules/@fixture/a-impl'].version = '2.0.0';
  await writeFile(lockPath, JSON.stringify(lock));
  await assert.rejects(
    prepareModules({ configPath: fixture.configPath }),
    /not locked/,
  );
  await writeFile(lockPath, originalLock);
  const pubspec = join(fixture.host, 'pubspec.yaml');
  const originalPubspec = await readFile(pubspec, 'utf8');
  await writeFile(pubspec, 'name: module_fixture\nflutter:\n  assets: []\n');
  await assert.rejects(
    prepareModules({ configPath: fixture.configPath }),
    /not declared in pubspec/,
  );
  await writeFile(pubspec, originalPubspec);
});

test('preparation follows public relative dependencies and initializes actual cyclic factories once', async () => {
  const graph = await createGraphFixture(join(root, 'graph-fixture'));
  assert.deepEqual(
    graph.manifest.modules.map((entry) => entry.specifier),
    ['@fixture/graph/first', '@fixture/graph/second', '@fixture/graph/shared'],
  );
  assert.ok(!Object.values(graph.assets).join('').includes('UNSELECTED_GRAPH_ENTRY'));
  const context = createContext({});
  runInContext(graph.assets[graph.manifest.bootstrap], context);
  for (const entry of [...graph.manifest.modules].reverse())
    runInContext(graph.assets[entry.asset], context);
  context.__flaxModules.seal(graph.manifest.modules);
  assert.equal(context.graphFirst, undefined);
  const first = context.__flaxModules.require('@fixture/graph/first');
  const second = context.__flaxModules.require('@fixture/graph/second');
  assert.equal(first.verify(), true);
  assert.equal(first.shared, second.shared);
  assert.deepEqual(
    [context.graphFirst, context.graphSecond, context.graphShared],
    [1, 1, 1],
  );
});

test('preparation bundles implementation-only subpaths without replacing them with public entries', async () => {
  const prepared = await createInternalSubpathFixture(join(root, 'internal-subpath'));
  assert.deepEqual(
    prepared.manifest.modules.map((entry) => entry.specifier),
    ['@fixture/internal/consumer'],
  );
  const context = createContext({});
  runInContext(prepared.assets[prepared.manifest.bootstrap], context);
  for (const entry of prepared.manifest.modules)
    runInContext(prepared.assets[entry.asset], context);
  context.__flaxModules.seal(prepared.manifest.modules);
  assert.equal(
    context.__flaxModules.require('@fixture/internal/consumer').value,
    'INTERNAL_MARKER',
  );
});

test('preparation externalizes concrete binding subpaths to their owning public module', async () => {
  const prepared = await createOwnedSubpathFixture(join(root, 'owned-subpath'));
  assert.deepEqual(
    prepared.manifest.modules.map((entry) => entry.specifier),
    ['@fixture/owned/consumer', '@fixture/owned/provider'],
  );
  const consumer = prepared.manifest.modules.find(
    (entry) => entry.specifier === '@fixture/owned/consumer',
  );
  assert.deepEqual(consumer.dependencies, {
    '@fixture/owned/provider': '1.0.0',
  });
  assert.ok(!prepared.assets[consumer.asset].includes('TYPE_BINDING_MARKER'));
  assert.ok(prepared.assets[consumer.asset].includes('HELPER_MARKER'));

  const context = createContext({});
  runInContext(prepared.assets[prepared.manifest.bootstrap], context);
  for (const entry of prepared.manifest.modules)
    runInContext(prepared.assets[entry.asset], context);
  context.__flaxModules.seal(prepared.manifest.modules);
  assert.equal(
    context.__flaxModules.require('@fixture/owned/consumer').value,
    'HELPER_MARKER',
  );
  assert.equal(context.providerRegistrations, 1);
});

test('business bundles reject absolute, relative and package private source imports', async () => {
  const prepared = await createInternalSubpathFixture(join(root, 'private-source'));
  const source = join(
    prepared.hostJs,
    'node_modules/@fixture/internal-impl/private.js',
  );
  await writeFile(source, 'export const privateValue = 1;\n');
  const manifestPath = join(dirname(source), 'package.json');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  manifest.exports['./private'] = './private.js';
  manifest.exports['.'] = './private.js';
  await writeFile(manifestPath, JSON.stringify(manifest));
  for (const path of [
    source,
    './node_modules/@fixture/internal-impl/private.js',
    '@fixture/internal-impl/private',
    '@fixture/internal-impl',
  ]) {
    await assert.rejects(
      build({
        stdin: {
          contents: `import ${JSON.stringify(path)};`,
          resolveDir: prepared.hostJs,
        },
        bundle: true,
        write: false,
        platform: 'neutral',
        plugins: [flaxHostModulesPlugin(prepared.manifest)],
        logLevel: 'silent',
      }),
      /Flax implementation cannot be bundled into application code/,
    );
  }
});

test('real delivery metadata preserves public library binding topology', async () => {
  const core = JSON.parse(
    await readFile(join(repository, 'packages/flax/js/flax_modules.json'), 'utf8'),
  );
  const material = JSON.parse(
    await readFile(
      join(repository, 'packages/flax_material_ui/js/flax_modules.json'),
      'utf8',
    ),
  );
  const cupertino = JSON.parse(
    await readFile(
      join(repository, 'packages/flax_cupertino_ui/js/flax_modules.json'),
      'utf8',
    ),
  );
  const entry = (delivery, specifier) =>
    delivery.modules.find((candidate) => candidate.specifier === specifier);

  assert.deepEqual(entry(core, '@flax/core/bindings'), {
    specifier: '@flax/core/bindings',
    source: 'dist/runtime/bindings.js',
    bindings: [],
  });

  const widgets = entry(core, '@flax/flutter/widgets');
  assert.equal(widgets.source, 'dist/flutter/widgets.js');
  assert.equal(widgets.subpathRoot, 'dist/flutter/generated/libraries/widgets');
  const helpers = core.modules.flatMap((module) => module.helperSubpaths ?? []);
  assert.equal(new Set(helpers).size, helpers.length);
  assert.ok(helpers.includes('_bindings/components.__module'));
  assert.ok(helpers.includes('_bindings/sdk_widgets.__module'));
  for (const [delivery, owner, roots] of [
    [core, 'flax', ['flutter/generated/libraries', 'dart/generated/libraries']],
    [material, 'flax_material_ui', ['generated']],
    [cupertino, 'flax_cupertino_ui', ['generated']],
  ]) {
    const emitted = [];
    for (const root of roots) {
      const files = await readdir(join(repository, 'packages', owner, 'js/src', root), {
        recursive: true,
      });
      for (const file of files) {
        if (file.endsWith('.__module.ts')) {
          emitted.push(`${root}/${file.replaceAll('\\', '/')}`);
        }
      }
    }
    const delivered = delivery.modules.flatMap((module) =>
      (module.helperSubpaths ?? []).map(
        (helper) => `${module.subpathRoot.replace(/^dist\//, '')}/${helper}.ts`,
      ),
    );
    assert.deepEqual(
      delivered.toSorted(),
      emitted.toSorted(),
      `${owner} helper ownership`,
    );
  }
  assert.equal(entry(core, '@flax/flutter/widget_previews'), undefined);
  for (const library of ['material', 'cupertino']) {
    assert.equal(entry(core, `@flax/flutter/${library}`), undefined);
  }
  for (const [delivery, library] of [
    [material, 'material'],
    [cupertino, 'cupertino'],
  ]) {
    assert.equal(entry(delivery, `@flax/${library}-ui`).source, 'dist/index.js');
    assert.equal(entry(delivery, `@flax/${library}-ui/dependencies/intl`), undefined);
    const bindings = entry(delivery, `@flax/${library}-ui`).bindings;
    assert.ok(
      !bindings.some((binding) => binding.moduleId.endsWith('/dependency_intl')),
    );
    const id = `flax.${library}/${library}`;
    const localization = `Global${library === 'material' ? 'Material' : 'Cupertino'}Localizations`;
    const binding = bindings.find((binding) => binding.moduleId === id);
    assert.ok(binding.types.includes(`${id}#type:${localization}`));
    for (const getter of ['delegate', 'delegates']) {
      assert.ok(binding.functions.includes(`${id}#read:${localization}.${getter}`));
    }
  }
  assert.deepEqual(entry(core, '@flax/flutter/vector_math').helperSubpaths, [
    '_bindings/sdk_dependencies.__module',
  ]);
  assert.equal(entry(core, '@flax/dart/convert').helperSubpaths, undefined);
  for (const id of [
    'flax.core/components',
    'flax.core/flutter',
    'flax.core/sdk_widgets',
    'flax.core/sdk_rendering',
  ]) {
    assert.ok(widgets.bindings.some((binding) => binding.moduleId === id));
  }
  const widgetComponents = widgets.bindings.find(
    (binding) => binding.moduleId === 'flax.core/components',
  );
  assert.deepEqual(widgetComponents.types, [
    'flax.core/components#type:State',
    'flax.core/components#type:StatefulWidget',
  ]);
  assert.deepEqual(widgetComponents.functions, []);

  const navigation = entry(core, '@flax/core/navigation');
  assert.deepEqual(navigation.helperSubpaths, ['_bindings/flutter.__module']);
  const navigationFlutter = navigation.bindings.find(
    (binding) => binding.moduleId === 'flax.core/flutter',
  );
  assert.ok(
    navigationFlutter.types.includes('flax.core/flutter#type:FlaxNavigatorObserver'),
  );
  assert.ok(navigationFlutter.types.includes('flax.core/flutter#type:TargetPlatform'));
  for (const nativeReference of [
    'KeyEvent',
    'LogicalKeyboardKey',
    'Offset',
    'PhysicalKeyboardKey',
    'PointerEvent',
    'PointerScrollEvent',
  ]) {
    assert.ok(
      navigationFlutter.types.includes(`flax.core/flutter#type:${nativeReference}`),
      `${nativeReference} uses an ordinary registered Dart binding`,
    );
  }

  const foundation = entry(core, '@flax/flutter/foundation');
  const foundationFunctions = foundation.bindings.flatMap(
    (binding) => binding.functions,
  );
  assert.ok(foundationFunctions.includes('flax.core/flutter#read:kIsWeb'));
  assert.ok(
    foundationFunctions.includes('flax.core/flutter#read:defaultTargetPlatform'),
  );

  const materialEntry = entry(material, '@flax/material-ui');
  assert.deepEqual(materialEntry.helperSubpaths, ['_bindings/material.__module']);
  const materialFunctions = materialEntry.bindings.flatMap(
    (binding) => binding.functions,
  );
  assert.ok(
    materialFunctions.includes('flax.material/material#read:kTabScrollDuration'),
  );
  assert.ok(!materialFunctions.includes('flax.material/material#read:kToolbarHeight'));
});

test('declaration packages expose every delivered Flutter and Dart public subpath', async () => {
  for (const [owner, name] of [
    ['flax_material_ui', '@flax/material-ui'],
    ['flax_cupertino_ui', '@flax/cupertino-ui'],
  ]) {
    const directory = join(repository, 'packages', owner);
    const source = JSON.parse(
      await readFile(join(directory, 'js/package.json'), 'utf8'),
    );
    const types = JSON.parse(
      await readFile(join(directory, 'js-types/package.json'), 'utf8'),
    );
    assert.equal(source.name, `${name}-runtime`);
    assert.equal(types.name, name);
    assert.equal(types.exports['.'].import, undefined);
    await access(join(directory, 'js-types', types.exports['.'].types));
  }
  const core = JSON.parse(
    await readFile(join(repository, 'packages/flax/js/flax_modules.json'), 'utf8'),
  );
  const material = JSON.parse(
    await readFile(
      join(repository, 'packages/flax_material_ui/js/flax_modules.json'),
      'utf8',
    ),
  );
  const flutterDirectory = join(repository, 'packages/flax_flutter/js');
  const dartDirectory = join(repository, 'packages/flax_dart/js');
  const flutter = JSON.parse(
    await readFile(join(flutterDirectory, 'package.json'), 'utf8'),
  );
  const dart = JSON.parse(await readFile(join(dartDirectory, 'package.json'), 'utf8'));

  for (const module of [...core.modules, ...material.modules]) {
    let declarationPackage;
    let declarationDirectory;
    let prefix;
    if (module.specifier.startsWith('@flax/flutter/')) {
      declarationPackage = flutter;
      declarationDirectory = flutterDirectory;
      prefix = '@flax/flutter';
    } else if (module.specifier.startsWith('@flax/dart/')) {
      declarationPackage = dart;
      declarationDirectory = dartDirectory;
      prefix = '@flax/dart';
    } else {
      continue;
    }
    const subpath = `.${module.specifier.slice(prefix.length)}`;
    const exported = declarationPackage.exports[subpath];
    assert.ok(exported?.types, `Missing declaration export for ${module.specifier}`);
    await access(join(declarationDirectory, exported.types));
  }
});
