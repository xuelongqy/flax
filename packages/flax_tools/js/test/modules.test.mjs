import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { access, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { createContext, runInContext } from 'node:vm';
import { build } from 'esbuild';
import {
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

let root;
let fixture;
before(async () => {
  root = await mkdtemp(join(tmpdir(), 'flax-module-delivery-'));
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

test('public import bundles its separately installed implementation when the host does not provide it', async () => {
  const bundled = await createBundledProviderFixture(join(root, 'bundled-provider'));
  const context = createContext({});
  runInContext(bundled.code, context);
  assert.equal(context.fixtureBundledResult.tag, 'C_IMPL_MARKER');
  assert.ok(
    Object.keys(bundled.metafile.inputs).some((path) =>
      path.includes('node_modules/@fixture/c-impl/generated/_bindings/shared.js'),
    ),
  );
  assert.ok(
    !Object.keys(bundled.metafile.inputs).some((path) =>
      path.includes('node_modules/@fixture/c/index'),
    ),
  );
});

test('package-local public import resolves through its delivery facade before tsconfig paths', async () => {
  const directory = join(root, 'self-provider');
  await mkdir(join(directory, 'generated'), { recursive: true });
  await writeFile(
    join(directory, 'package.json'),
    JSON.stringify({
      name: '@fixture/self-impl',
      version: '1.0.0',
      type: 'module',
    }),
  );
  await writeFile(
    join(directory, 'flax_modules.json'),
    JSON.stringify({
      formatVersion: 1,
      package: '@fixture/self-impl',
      version: '1.0.0',
      modules: [
        {
          specifier: '@fixture/self',
          source: 'facade.js',
          subpathRoot: 'generated',
          bindings: [],
        },
      ],
    }),
  );
  await writeFile(join(directory, 'facade.js'), "export const source = 'facade';\n");
  await writeFile(
    join(directory, 'generated/index.js'),
    "export const source = 'generated';\n",
  );
  await writeFile(
    join(directory, 'consumer.js'),
    "import { source } from '@fixture/self'; globalThis.fixtureSelfSource = source;\n",
  );
  await writeFile(
    join(directory, 'tsconfig.json'),
    JSON.stringify({
      compilerOptions: { baseUrl: '.', paths: { '@fixture/*': ['./generated/*'] } },
    }),
  );

  const built = await build({
    absWorkingDir: directory,
    entryPoints: ['consumer.js'],
    bundle: true,
    write: false,
    format: 'iife',
    platform: 'neutral',
    target: 'es2019',
    plugins: [flaxHostModulesPlugin()],
    logLevel: 'silent',
  });
  const context = createContext({});
  runInContext(built.outputFiles[0].text, context);
  assert.equal(context.fixtureSelfSource, 'facade');
});

test('prepared assets contain the selected module and exclude unrelated code', async () => {
  assert.deepEqual(
    fixture.manifest.modules.map((entry) => entry.specifier),
    ['@fixture/a', '@flax/core/bindings'],
  );
  assert.ok(
    !Object.values(fixture.assets).join('').includes('UNSELECTED_MODULE_MUST_NOT_SHIP'),
  );
  const checked = await prepareModules({ configPath: fixture.configPath, check: true });
  assert.deepEqual(checked.manifest, fixture.manifest);
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

test('business build fails clearly against a missing or stale host contract', () => {
  assert.throws(
    () => runInContext(fixture.code, createContext({})),
    /Missing or incompatible Flax module host/,
  );
  const context = runtime();
  assert.throws(
    () => context.__flaxModules.require('@fixture/missing'),
    /Missing Flax module/,
  );
  assert.throws(
    () => context.__flaxModules.require('@fixture/a', '2.0.0'),
    /Incompatible Flax module/,
  );
  assert.throws(
    () => context.__flaxModules.require('@fixture/a', '1.0.0', 'other'),
    /Incompatible Flax module/,
  );
});

test('strict inventory rejects unknown fields, duplicate owners and missing dependencies', () => {
  assert.throws(
    () => validateModuleManifest({ ...fixture.manifest, unexpected: true }),
    /Unknown field/,
  );
  const original = fixture.manifest.modules[0];
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
        modules: [{ ...original, dependencies: { '@fixture/missing': '1.0.0' } }],
      }),
    /Missing Flax module/,
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
  assert.deepEqual(widgets.helperSubpaths, ['_bindings/components.__module']);
  assert.deepEqual(
    widgets.bindings.map((binding) => binding.moduleId),
    ['flax.core/flutter'],
  );
  assert.ok(
    !widgets.bindings.some((binding) => binding.moduleId === 'flax.core/components'),
    'host proxy component types must not be projected as Dart binding requirements',
  );

  const navigation = entry(core, '@flax/core/navigation');
  assert.deepEqual(navigation.helperSubpaths, ['_bindings/flutter.__module']);
  const navigationFlutter = navigation.bindings.find(
    (binding) => binding.moduleId === 'flax.core/flutter',
  );
  assert.ok(
    navigationFlutter.types.includes('flax.core/flutter#type:FlaxNavigatorObserver'),
  );
  assert.ok(navigationFlutter.types.includes('flax.core/flutter#type:TargetPlatform'));
  for (const referenceOnly of [
    'KeyEvent',
    'LogicalKeyboardKey',
    'Offset',
    'PhysicalKeyboardKey',
    'PointerEvent',
    'PointerScrollEvent',
  ]) {
    assert.ok(
      !navigationFlutter.types.includes(`flax.core/flutter#type:${referenceOnly}`),
      `${referenceOnly} must not be projected as a registered Dart binding`,
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

  const materialEntry = entry(material, '@flax/flutter/material');
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
