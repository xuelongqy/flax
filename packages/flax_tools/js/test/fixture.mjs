import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { build } from 'esbuild';
import { flaxHostModulesPlugin, prepareModules } from '../src/modules.mjs';

async function write(path, value) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(
    path,
    typeof value === 'string' ? value : `${JSON.stringify(value, null, 2)}\n`,
  );
}

async function pack(root, name, files, manifest) {
  const directory = join(root, name);
  await write(join(directory, 'package.json'), manifest);
  for (const [path, value] of Object.entries(files))
    await write(join(directory, path), value);
  const result = JSON.parse(
    execFileSync(
      'npm',
      ['pack', '--json', '--ignore-scripts', '--pack-destination', root],
      { cwd: directory, encoding: 'utf8' },
    ),
  );
  return join(root, result[0].filename);
}

function install(directory, archives) {
  execFileSync(
    'npm',
    [
      'install',
      '--offline',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      ...archives,
    ],
    {
      cwd: directory,
      encoding: 'utf8',
      stdio: 'pipe',
    },
  );
}

/** Independent packed modules: the business project contains no A implementation. */
export async function createMixedFixture(root) {
  await mkdir(root, { recursive: true });
  const core = await pack(
    root,
    'core',
    {
      'bindings.js': `export { bindingState } from './bindings/_bindings/state.js';\n`,
      'bindings/_bindings/state.js': `export const bindingState = {
  shared: Object.freeze({ tag: 'A_IMPL_MARKER' }),
  reads: 0,
};
`,
      'flax_modules.json': {
        formatVersion: 1,
        package: '@flax/core',
        version: '1.0.0',
        modules: [
          { specifier: '@flax/core/bindings', source: 'bindings.js', bindings: [] },
        ],
      },
    },
    {
      name: '@flax/core',
      version: '1.0.0',
      type: 'module',
      exports: {
        './bindings': './bindings.js',
        './bindings/_bindings/*': './bindings/_bindings/*.js',
        './flax_modules.json': './flax_modules.json',
      },
    },
  );
  const a = await pack(
    root,
    'a-impl',
    {
      'index.js': `import { bindingState } from '@flax/core/bindings/_bindings/state';
globalThis.fixtureInitializations = (globalThis.fixtureInitializations ?? 0) + 1;
export const shared = bindingState.shared;
export function getValue() { bindingState.reads++; return globalThis.fixtureValue; }
export function getBindingState() { return bindingState; }
`,
      'unused.js': "throw new Error('UNSELECTED_MODULE_MUST_NOT_SHIP');\n",
      'flax_modules.json': {
        formatVersion: 1,
        package: '@fixture/a-impl',
        version: '1.0.0',
        modules: [
          { specifier: '@fixture/a', source: 'index.js', bindings: [] },
          { specifier: '@fixture/a/unused', source: 'unused.js', bindings: [] },
        ],
      },
    },
    {
      name: '@fixture/a-impl',
      version: '1.0.0',
      type: 'module',
      exports: { './flax_modules.json': './flax_modules.json' },
    },
  );
  const types = await pack(
    root,
    'a-types',
    {
      'index.d.ts': `export interface Shared { readonly tag: 'A_IMPL_MARKER'; }
export const shared: Shared;
export function getValue(): number;
export function getBindingState(): { readonly shared: Shared; reads: number };
`,
    },
    {
      name: '@fixture/a',
      version: '1.0.0',
      types: './index.d.ts',
      exports: { '.': { types: './index.d.ts' } },
      files: ['index.d.ts'],
    },
  );
  const coreTypes = await pack(
    root,
    'core-types',
    {
      'index.d.ts': `declare module '@flax/core/bindings/_bindings/state' {
  export interface BindingState { readonly shared: import('@fixture/a').Shared; reads: number; }
  export const bindingState: BindingState;
}
declare module '@flax/core/bindings' {
  export { bindingState, type BindingState } from '@flax/core/bindings/_bindings/state';
}
`,
    },
    {
      name: '@fixture/core-types',
      version: '1.0.0',
      types: './index.d.ts',
      files: ['index.d.ts'],
    },
  );
  const b = await pack(
    root,
    'b',
    {
      'index.js': `import { shared, getValue } from '@fixture/a';
export { shared } from '@fixture/a';
export function fromB() { return shared; }
export function readFromB() { return getValue(); }
`,
      'index.d.ts': `import { shared } from '@fixture/a';
export { shared } from '@fixture/a';
export function fromB(): typeof shared;
export function readFromB(): number;
`,
    },
    {
      name: '@fixture/b',
      version: '1.0.0',
      type: 'module',
      exports: { '.': { types: './index.d.ts', import: './index.js' } },
      peerDependencies: { '@fixture/a': '1.0.0' },
      peerDependenciesMeta: { '@fixture/a': { optional: true } },
    },
  );
  const host = join(root, 'host');
  const hostJs = join(host, 'js');
  const business = join(root, 'business');
  await write(join(hostJs, 'package.json'), {
    name: 'fixture-host',
    version: '1.0.0',
    private: true,
  });
  await write(join(business, 'package.json'), {
    name: 'fixture-business',
    version: '1.0.0',
    private: true,
  });
  install(hostJs, [core, a]);
  install(business, [types, coreTypes, b]);
  await write(
    join(host, 'pubspec.yaml'),
    'name: module_fixture\nflutter:\n  assets:\n    - assets/modules/\n',
  );
  const configPath = join(hostJs, 'flax.modules.json');
  await write(configPath, {
    formatVersion: 1,
    modules: [{ specifier: '@fixture/a', package: '@fixture/a-impl' }],
    flutterProject: '..',
    output: 'assets/modules',
  });
  const prepared = await prepareModules({ configPath });
  await write(join(business, 'tsconfig.json'), {
    compilerOptions: {
      strict: true,
      noEmit: true,
      target: 'ES2022',
      module: 'ESNext',
      moduleResolution: 'Bundler',
      types: ['@fixture/core-types'],
      lib: ['ES2022'],
    },
    files: ['main.ts'],
  });
  const source = `import { bindingState } from '@flax/core/bindings';
import { bindingState as internalBindingState } from '@flax/core/bindings/_bindings/state';
import { shared, getValue, getBindingState } from '@fixture/a';
import { shared as throughB, fromB, readFromB } from '@fixture/b';
const value: typeof shared = fromB();
(globalThis as unknown as { fixtureResult: unknown }).fixtureResult = {
  same: value === shared && throughB === shared && bindingState === internalBindingState && getBindingState() === bindingState,
  bindingState,
  read: getValue,
  readFromB,
};
`;
  await write(join(business, 'main.ts'), source);
  const built = await build({
    absWorkingDir: business,
    entryPoints: ['main.ts'],
    bundle: true,
    write: false,
    format: 'iife',
    platform: 'neutral',
    target: 'es2019',
    metafile: true,
    plugins: [flaxHostModulesPlugin(prepared.manifest)],
    logLevel: 'silent',
  });
  const code = built.outputFiles[0].text;
  await write(join(business, 'main.js'), code);
  const assets = Object.fromEntries(
    await Promise.all(
      [
        prepared.manifest.bootstrap,
        ...prepared.manifest.modules.map((entry) => entry.asset),
      ].map(async (asset) => [asset, await readFile(join(host, asset), 'utf8')]),
    ),
  );
  return {
    ...prepared,
    configPath,
    host,
    hostJs,
    business,
    code,
    assets,
    metafile: built.metafile,
  };
}

/** Public declarations plus a separately installed implementation bundle. */
export async function createBundledProviderFixture(root) {
  await mkdir(root, { recursive: true });
  const implementation = await pack(
    root,
    'c-impl',
    {
      'generated/index.js': `import { shared } from '@fixture/c/_bindings/shared';\nexport { shared };\n`,
      'generated/_bindings/shared.js': `export const shared = Object.freeze({ tag: 'C_IMPL_MARKER' });\n`,
      'flax_modules.json': {
        formatVersion: 1,
        package: '@fixture/c-impl',
        version: '1.0.0',
        modules: [
          {
            specifier: '@fixture/c',
            source: 'generated/index.js',
            subpathRoot: 'generated',
            bindings: [],
          },
        ],
      },
    },
    {
      name: '@fixture/c-impl',
      version: '1.0.0',
      type: 'module',
      exports: { './flax_modules.json': './flax_modules.json' },
    },
  );
  const declarations = await pack(
    root,
    'c-types',
    {
      'index.d.ts': `export interface Shared { readonly tag: 'C_IMPL_MARKER'; }\nexport const shared: Shared;\n`,
    },
    {
      name: '@fixture/c',
      version: '1.0.0',
      exports: { '.': { types: './index.d.ts' } },
      files: ['index.d.ts'],
    },
  );
  const business = join(root, 'business');
  await write(join(business, 'package.json'), {
    name: 'fixture-bundled-business',
    version: '1.0.0',
    private: true,
  });
  install(business, [declarations, implementation]);
  await write(
    join(business, 'main.js'),
    `import { shared } from '@fixture/c';\nglobalThis.fixtureBundledResult = shared;\n`,
  );
  const built = await build({
    absWorkingDir: business,
    entryPoints: ['main.js'],
    bundle: true,
    write: false,
    format: 'iife',
    platform: 'neutral',
    target: 'es2019',
    metafile: true,
    plugins: [flaxHostModulesPlugin()],
    logLevel: 'silent',
  });
  return { business, code: built.outputFiles[0].text, metafile: built.metafile };
}

/** Public entry graph with a real ESM cycle and one shared implementation. */
export async function createGraphFixture(root) {
  await mkdir(root, { recursive: true });
  const entries = ['first', 'second', 'shared', 'unused'];
  const archive = await pack(
    root,
    'graph',
    {
      'first.js': `import { getFirst } from './second.js';
export { shared } from './shared.js';
globalThis.graphFirst = (globalThis.graphFirst ?? 0) + 1;
export const first = {};
export function verify() { return first === getFirst(); }
`,
      'second.js': `import { first } from './first.js';
export { shared } from './shared.js';
globalThis.graphSecond = (globalThis.graphSecond ?? 0) + 1;
export function getFirst() { return first; }
`,
      'shared.js': `globalThis.graphShared = (globalThis.graphShared ?? 0) + 1;
export const shared = {};
`,
      'unused.js': "throw Error('UNSELECTED_GRAPH_ENTRY');\n",
      'flax_modules.json': {
        formatVersion: 1,
        package: '@fixture/graph',
        version: '1.0.0',
        modules: entries.map((name) => ({
          specifier: `@fixture/graph/${name}`,
          source: `${name}.js`,
          bindings: [],
        })),
      },
    },
    {
      name: '@fixture/graph',
      version: '1.0.0',
      type: 'module',
      exports: { './flax_modules.json': './flax_modules.json', './*': './*.js' },
    },
  );
  const host = join(root, 'host');
  const hostJs = join(host, 'js');
  await write(join(hostJs, 'package.json'), {
    name: 'graph-host',
    version: '1.0.0',
    private: true,
  });
  install(hostJs, [archive]);
  await write(
    join(host, 'pubspec.yaml'),
    'name: graph_fixture\nflutter:\n  assets:\n    - assets/modules/\n',
  );
  const configPath = join(hostJs, 'flax.modules.json');
  await write(configPath, {
    formatVersion: 1,
    modules: ['@fixture/graph/first'],
    flutterProject: '..',
    output: 'assets/modules',
  });
  const prepared = await prepareModules({ configPath });
  const assets = Object.fromEntries(
    await Promise.all(
      [
        prepared.manifest.bootstrap,
        ...prepared.manifest.modules.map((entry) => entry.asset),
      ].map(async (asset) => [asset, await readFile(join(host, asset), 'utf8')]),
    ),
  );
  return { ...prepared, assets };
}

/** A public module importing an implementation-only subpath owned by another entry. */
export async function createInternalSubpathFixture(root) {
  await mkdir(root, { recursive: true });
  const archive = await pack(
    root,
    'internal-subpath',
    {
      'consumer.js': `import { internalValue } from '@fixture/internal/provider/_bindings/internal';
export const value = internalValue;
`,
      'provider/index.js': `export const publicValue = 'PUBLIC_MARKER';\n`,
      'provider/_bindings/internal.js': `export const internalValue = 'INTERNAL_MARKER';\n`,
      'flax_modules.json': {
        formatVersion: 1,
        package: '@fixture/internal-impl',
        version: '1.0.0',
        modules: [
          {
            specifier: '@fixture/internal/consumer',
            source: 'consumer.js',
            bindings: [],
          },
          {
            specifier: '@fixture/internal/provider',
            source: 'provider/index.js',
            subpathRoot: 'provider',
            helperSubpaths: ['_bindings/internal'],
            bindings: [],
          },
        ],
      },
    },
    {
      name: '@fixture/internal-impl',
      version: '1.0.0',
      type: 'module',
      exports: { './flax_modules.json': './flax_modules.json' },
    },
  );
  const host = join(root, 'host');
  const hostJs = join(host, 'js');
  await write(join(hostJs, 'package.json'), {
    name: 'internal-subpath-host',
    version: '1.0.0',
    private: true,
  });
  install(hostJs, [archive]);
  await write(
    join(host, 'pubspec.yaml'),
    'name: internal_subpath_fixture\nflutter:\n  assets:\n    - assets/modules/\n',
  );
  const configPath = join(hostJs, 'flax.modules.json');
  await write(configPath, {
    formatVersion: 1,
    modules: [
      {
        specifier: '@fixture/internal/consumer',
        package: '@fixture/internal-impl',
      },
    ],
    flutterProject: '..',
    output: 'assets/modules',
  });
  const prepared = await prepareModules({ configPath });
  const assets = Object.fromEntries(
    await Promise.all(
      [
        prepared.manifest.bootstrap,
        ...prepared.manifest.modules.map((entry) => entry.asset),
      ].map(async (asset) => [asset, await readFile(join(host, asset), 'utf8')]),
    ),
  );
  return { ...prepared, assets };
}

/** A concrete binding subpath must load its owning public module exactly once. */
export async function createOwnedSubpathFixture(root) {
  await mkdir(root, { recursive: true });
  const archive = await pack(
    root,
    'owned-subpath',
    {
      'consumer.js': `import '@fixture/owned/provider/_bindings/type';
import { helperValue } from '@fixture/owned/provider/_bindings/helper';
export const value = helperValue;
`,
      'provider/index.js': `import './_bindings/type.js';
export const publicValue = 'PUBLIC_MARKER';
`,
      'provider/_bindings/type.js': `globalThis.providerRegistrations = (globalThis.providerRegistrations ?? 0) + 1;
export const typeValue = 'TYPE_BINDING_MARKER';
`,
      'provider/_bindings/helper.js': `export const helperValue = 'HELPER_MARKER';\n`,
      'flax_modules.json': {
        formatVersion: 1,
        package: '@fixture/owned-impl',
        version: '1.0.0',
        modules: [
          {
            specifier: '@fixture/owned/consumer',
            source: 'consumer.js',
            bindings: [],
          },
          {
            specifier: '@fixture/owned/provider',
            source: 'provider/index.js',
            subpathRoot: 'provider',
            helperSubpaths: ['_bindings/helper'],
            bindings: [],
          },
        ],
      },
    },
    {
      name: '@fixture/owned-impl',
      version: '1.0.0',
      type: 'module',
      exports: { './flax_modules.json': './flax_modules.json' },
    },
  );
  const host = join(root, 'host');
  const hostJs = join(host, 'js');
  await write(join(hostJs, 'package.json'), {
    name: 'owned-subpath-host',
    version: '1.0.0',
    private: true,
  });
  install(hostJs, [archive]);
  await write(
    join(host, 'pubspec.yaml'),
    'name: owned_subpath_fixture\nflutter:\n  assets:\n    - assets/modules/\n',
  );
  const configPath = join(hostJs, 'flax.modules.json');
  await write(configPath, {
    formatVersion: 1,
    modules: [
      {
        specifier: '@fixture/owned/consumer',
        package: '@fixture/owned-impl',
      },
    ],
    flutterProject: '..',
    output: 'assets/modules',
  });
  const prepared = await prepareModules({ configPath });
  const assets = Object.fromEntries(
    await Promise.all(
      [
        prepared.manifest.bootstrap,
        ...prepared.manifest.modules.map((entry) => entry.asset),
      ].map(async (asset) => [asset, await readFile(join(host, asset), 'utf8')]),
    ),
  );
  return { ...prepared, assets };
}
