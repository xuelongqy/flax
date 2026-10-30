import { prepareBindingSetup } from './binding_setup.mjs';
import { createHash, randomUUID } from 'node:crypto';
import {
  access,
  mkdir,
  readFile,
  readdir,
  realpath,
  rename,
  rm,
  stat,
  writeFile,
} from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { build } from 'esbuild';
import { load as loadYaml } from 'js-yaml';
import { moduleRegistrySource } from './registry.mjs';
import { publicRequirements } from './binding_delivery.mjs';

export { publicRequirements as bindingModuleRequirements } from './binding_delivery.mjs';

const runtimeFormat = 'flax-cjs-1';
const exactVersion = /^\d+\.\d+\.\d+(?:-[\w.-]+)?(?:\+[\w.-]+)?$/;
const identifier =
  /^(?:@[a-z0-9][a-z0-9._-]*\/)?[a-z0-9][a-z0-9._-]*(?:\/[a-zA-Z0-9_$.-]+)*$/;
const bundleOptions = {
  bundle: true,
  write: false,
  minify: true,
  keepNames: true,
  platform: 'neutral',
  mainFields: ['module', 'main'],
  target: 'es2019',
  supported: { 'async-generator': false, 'for-await': false },
  logLevel: 'silent',
  legalComments: 'inline',
  metafile: true,
};

function fail(message) {
  throw new Error(message);
}

function object(value, keys, label, required = keys) {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    fail(`Expected object: ${label}`);
  }
  for (const key of Object.keys(value)) {
    if (!keys.includes(key)) fail(`Unknown field ${label}.${key}`);
  }
  for (const key of required) {
    if (!(key in value)) fail(`Missing field ${label}.${key}`);
  }
  return value;
}

function text(value, label) {
  if (typeof value !== 'string' || value.length === 0)
    fail(`Expected string: ${label}`);
  return value;
}

function array(value, label) {
  if (!Array.isArray(value)) fail(`Expected array: ${label}`);
  return value;
}

function unique(values, label) {
  if (new Set(values).size !== values.length) fail(`Duplicate ${label}`);
  return values;
}

function specifier(value) {
  text(value, 'module specifier');
  if (
    !identifier.test(value) ||
    value.split('/').some((part) => part === '.' || part === '..')
  ) {
    fail(`Invalid module specifier: ${value}`);
  }
  return value;
}

function packageName(value) {
  specifier(value);
  return value.startsWith('@')
    ? value.split('/').slice(0, 2).join('/')
    : value.split('/')[0];
}

function implementationPackage(value, label = 'module package') {
  text(value, label);
  specifier(value);
  if (packageName(value) !== value) fail(`Expected npm package name: ${label}`);
  return value;
}

function owningEntry(entries, name) {
  const exact = entries.get(name);
  if (exact) return exact;
  let owner;
  for (const entry of entries.values()) {
    if (!name.startsWith(`${entry.specifier}/`)) continue;
    if (!owner || entry.specifier.length > owner.specifier.length) owner = entry;
  }
  return owner ?? null;
}

function version(value) {
  if (typeof value !== 'string' || !exactVersion.test(value))
    fail(`Expected exact module version: ${value}`);
  return value;
}

function assetPath(value, label) {
  text(value, label);
  if (
    isAbsolute(value) ||
    value.includes('\\') ||
    value.split('/').some((part) => !part || part === '.' || part === '..')
  ) {
    fail(`Expected a relative asset path: ${label}`);
  }
  return value;
}

function digest(value) {
  return createHash('sha256').update(value).digest('hex');
}

async function json(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

function bindings(value, label, current) {
  return array(value, label).map((binding) => {
    object(
      binding,
      ['moduleId', 'uiProtocol', 'types', 'functions', 'requiredCapabilities'],
      label,
      ['moduleId', 'uiProtocol', 'types', 'functions'],
    );
    text(binding.moduleId, `${label}.moduleId`);
    if (
      !Number.isSafeInteger(binding.uiProtocol) ||
      binding.uiProtocol < 1 ||
      (current && binding.uiProtocol !== 24)
    )
      fail(`Unsupported binding protocol in ${label}`);
    for (const kind of ['types', 'functions']) {
      unique(
        array(binding[kind], `${label}.${kind}`).map((id) => text(id, kind)),
        `${label}.${kind}`,
      );
    }
    if (binding.requiredCapabilities !== undefined) {
      unique(
        array(binding.requiredCapabilities, `${label}.requiredCapabilities`).map(
          (value) => text(value, 'requiredCapabilities'),
        ),
        `${label}.requiredCapabilities`,
      );
    }
    return binding;
  });
}

/** Validate the portable host inventory used by both Dart and business builds. */
function validateModuleInventory(value, current) {
  object(
    value,
    ['formatVersion', 'runtimeFormat', 'bootstrap', 'lock', 'modules'],
    'module manifest',
  );
  if (value.formatVersion !== 2 || value.runtimeFormat !== runtimeFormat)
    fail('Unsupported Flax module manifest');
  assetPath(value.bootstrap, 'bootstrap');
  object(value.lock, ['manager', 'digest'], 'lock');
  if (
    !['npm', 'pnpm'].includes(value.lock.manager) ||
    !/^[a-f0-9]{64}$/.test(value.lock.digest)
  )
    fail('Invalid module lock receipt');
  const names = new Map();
  const owners = new Set();
  const assets = new Set([value.bootstrap]);
  for (const entry of array(value.modules, 'modules')) {
    object(
      entry,
      [
        'specifier',
        'owner',
        'version',
        'artifact',
        'asset',
        'package',
        'source',
        'dependencies',
        'bindings',
        'subpaths',
      ],
      'module',
      [
        'specifier',
        'owner',
        'version',
        'artifact',
        'asset',
        'package',
        'source',
        'dependencies',
        'bindings',
      ],
    );
    specifier(entry.specifier);
    implementationPackage(entry.package);
    text(entry.owner, 'owner');
    version(entry.version);
    if (!/^[a-f0-9]{64}$/.test(entry.artifact))
      fail(`Invalid module artifact: ${entry.specifier}`);
    assetPath(entry.asset, 'asset');
    assetPath(entry.source, 'source');
    if (names.has(entry.specifier)) fail(`Duplicate Flax module: ${entry.specifier}`);
    if (owners.has(entry.owner)) fail(`Duplicate Flax module owner: ${entry.owner}`);
    if (assets.has(entry.asset)) fail(`Duplicate module asset: ${entry.asset}`);
    names.set(entry.specifier, entry);
    owners.add(entry.owner);
    assets.add(entry.asset);
    object(entry.dependencies, Object.keys(entry.dependencies ?? {}), 'dependencies');
    for (const [name, requirement] of Object.entries(entry.dependencies)) {
      specifier(name);
      version(requirement);
    }
    bindings(entry.bindings, `bindings for ${entry.specifier}`, current);
  }
  const publicNames = new Set(names.keys());
  for (const entry of names.values()) {
    for (const name of array(
      entry.subpaths === undefined ? [] : entry.subpaths,
      'module subpaths',
    )) {
      specifier(name);
      if (
        !name.startsWith(`${entry.specifier}/`) ||
        name.split('/').includes('_bindings')
      )
        fail(`Invalid module subpath: ${name}`);
      if (publicNames.has(name)) fail(`Duplicate Flax module subpath: ${name}`);
      publicNames.add(name);
    }
    for (const [name, requirement] of Object.entries(entry.dependencies)) {
      if (!names.has(name)) fail(`Missing Flax module: ${name}`);
      if (names.get(name).version !== requirement)
        fail(`Incompatible Flax dependency: ${entry.specifier} -> ${name}`);
    }
  }
  return value;
}

export function validateModuleManifest(value) {
  return validateModuleInventory(value, true);
}

export async function readModuleManifest(path) {
  return validateModuleManifest(await json(path));
}

async function findLock(start) {
  start = await realpath(start);
  for (let directory = start; ; directory = dirname(directory)) {
    for (const [filename, manager] of [
      ['pnpm-lock.yaml', 'pnpm'],
      ['package-lock.json', 'npm'],
    ]) {
      try {
        const source = await readFile(join(directory, filename), 'utf8');
        return {
          directory,
          manager,
          digest: digest(source),
          data: manager === 'pnpm' ? loadYaml(source) : JSON.parse(source),
        };
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
    if (dirname(directory) === directory)
      fail('Module preparation requires an installed npm or pnpm lockfile');
  }
}

async function verifyLocked(lock, directory, manifest) {
  const path = relative(lock.directory, directory).split(sep).join('/');
  if (lock.manager === 'pnpm') {
    // Workspace links have a lockfile importer instead of a published resolution.
    if (
      lock.data.importers?.[path || '.'] !== undefined &&
      !path.includes('node_modules/')
    )
      return;
    const key = `${manifest.name}@${manifest.version}`;
    for (const [entry, record] of Object.entries(lock.data.packages ?? {})) {
      if (entry === key || entry.startsWith(`${key}(`)) return;
      if (!entry.startsWith(`${manifest.name}@file:`)) continue;
      if (record?.resolution?.type === 'directory') {
        const source = record.resolution.directory;
        if (typeof source !== 'string' || entry !== `${manifest.name}@file:${source}`)
          continue;
        // Directory records omit versions; verify the declared local source instead.
        const local = await json(resolve(lock.directory, source, 'package.json'));
        if (local.name === manifest.name && local.version === manifest.version) return;
      } else if (record?.version === manifest.version) {
        return;
      }
    }
  } else {
    const record = lock.data.packages?.[path];
    if (record?.version === manifest.version) return;
    if (
      record?.link &&
      lock.data.packages?.[record.resolved]?.version === manifest.version
    )
      return;
  }
  fail(`Installed module is not locked at ${manifest.name}@${manifest.version}`);
}

function exportSource(exports, name) {
  let target = exports?.[name];
  if (target === undefined && exports && typeof exports === 'object') {
    for (const [pattern, value] of Object.entries(exports)) {
      if (!pattern.includes('*')) continue;
      const [prefix, suffix] = pattern.split('*');
      if (name.startsWith(prefix) && name.endsWith(suffix)) {
        const matched = name.slice(
          prefix.length,
          suffix.length ? -suffix.length : undefined,
        );
        target =
          typeof value === 'string'
            ? value.replaceAll('*', matched)
            : Object.fromEntries(
                Object.entries(value).map(([condition, path]) => [
                  condition,
                  typeof path === 'string' ? path.replaceAll('*', matched) : path,
                ]),
              );
        break;
      }
    }
  }
  while (target && typeof target === 'object' && !Array.isArray(target)) {
    target = target.import ?? target.default;
  }
  return target;
}

class DeliveryPackages {
  constructor(lock) {
    this.lock = lock;
    this.packages = new Map();
    this.files = new Map();
    this.entries = new Map();
    this.nearest = new Map();
    this.hostTypes = new Map();
  }

  addEntry(entry) {
    const previous = this.entries.get(entry.specifier);
    if (
      previous &&
      (previous.filename !== entry.filename || previous.version !== entry.version)
    ) {
      fail(`Multiple owners or versions for Flax module: ${entry.specifier}`);
    }
    this.entries.set(entry.specifier, entry);
    this.files.set(entry.filename, entry);
  }

  async load(directory) {
    directory = await realpath(directory);
    if (this.packages.has(directory)) return this.packages.get(directory);
    const loading = (async () => {
      let delivery;
      try {
        delivery = await json(join(directory, 'flax_modules.json'));
      } catch (error) {
        if (error.code === 'ENOENT') return null;
        throw error;
      }
      const npm = await json(join(directory, 'package.json'));
      object(
        delivery,
        ['formatVersion', 'package', 'version', 'modules'],
        'npm module delivery',
      );
      if (delivery.formatVersion !== 2)
        fail(`Unsupported module delivery format in ${directory}`);
      if (delivery.package !== npm.name || delivery.version !== npm.version)
        fail(`Module delivery package/version mismatch: ${directory}`);
      implementationPackage(npm.name, 'delivery package');
      version(npm.version);
      if (this.lock) await verifyLocked(this.lock, directory, npm);
      const entries = new Map();
      for (const entry of array(delivery.modules, 'delivery.modules')) {
        object(
          entry,
          ['specifier', 'source', 'subpathRoot', 'helperSubpaths', 'owner', 'bindings'],
          'delivery.module',
          ['specifier', 'source', 'bindings'],
        );
        specifier(entry.specifier);
        assetPath(entry.source, 'module source');
        if (!/\.[cm]?js$/.test(entry.source))
          fail(`Module delivery requires JavaScript output: ${entry.source}`);
        if (packageName(entry.specifier) === npm.name) {
          const subpath =
            entry.specifier === npm.name
              ? '.'
              : `.${entry.specifier.slice(npm.name.length)}`;
          if (exportSource(npm.exports, subpath) !== `./${entry.source}`)
            fail(`Module source must match npm exports: ${entry.specifier}`);
        }
        const source = await realpath(join(directory, entry.source));
        if (relative(directory, source).startsWith(`..${sep}`))
          fail(`Module source escapes its package: ${entry.specifier}`);
        let subpathRoot = null;
        if (entry.subpathRoot !== undefined) {
          assetPath(entry.subpathRoot, 'module subpath root');
          subpathRoot = await realpath(join(directory, entry.subpathRoot));
          if (relative(directory, subpathRoot).startsWith(`..${sep}`))
            fail(`Module subpath root escapes its package: ${entry.specifier}`);
        }
        const helperSubpaths = unique(
          array(entry.helperSubpaths ?? [], 'module helper subpaths').map((path) =>
            assetPath(path, 'module helper subpath'),
          ),
          'module helper subpath',
        );
        if (helperSubpaths.length > 0 && !subpathRoot)
          fail(`Module helper subpaths require subpathRoot: ${entry.specifier}`);
        const value = {
          ...entry,
          package: npm.name,
          version: npm.version,
          owner: entry.owner ?? `${npm.name}:${entry.source}`,
          directory,
          filename: source,
          subpathRoot,
          helperSubpaths,
          bindings: bindings(entry.bindings, `bindings for ${entry.specifier}`),
        };
        text(value.owner, 'module owner');
        if (entries.has(entry.specifier) || this.files.has(source))
          fail(`Duplicate delivery entry: ${entry.specifier}`);
        entries.set(entry.specifier, value);
        this.addEntry(value);
      }
      return entries;
    })();
    this.packages.set(directory, loading);
    return loading;
  }

  async loadPackage(name, from, required = false) {
    implementationPackage(name, 'implementation package');
    let metadata;
    try {
      metadata = createRequire(join(from, 'package.json')).resolve(
        `${name}/flax_modules.json`,
      );
    } catch (error) {
      if (!['MODULE_NOT_FOUND', 'ERR_PACKAGE_PATH_NOT_EXPORTED'].includes(error.code))
        throw error;
      if (required) fail(`No Flax module delivery package ${name} from ${from}`);
      return null;
    }
    return this.load(dirname(metadata));
  }

  async resolveHostType(name, from) {
    const owner = packageName(name);
    const key = `${from}\0${owner}`;
    if (!this.hostTypes.has(key)) {
      this.hostTypes.set(
        key,
        (async () => {
          const paths =
            createRequire(join(resolve(from || '.'), 'package.json')).resolve.paths(
              owner,
            ) ?? [];
          for (const path of paths) {
            try {
              const filename = await realpath(join(path, owner, 'package.json'));
              return { directory: dirname(filename), npm: await json(filename) };
            } catch (error) {
              if (error.code !== 'ENOENT') throw error;
            }
          }
          return null;
        })(),
      );
    }
    const found = await this.hostTypes.get(key);
    if (!found || found.npm.flax?.hostBindings === undefined) return null;
    const { npm, directory } = found;
    if (npm.flax.hostBindings !== true || npm.name !== owner)
      fail(`Invalid Flax host types package: ${owner}`);
    let exports = npm.exports;
    if (
      typeof exports === 'string' ||
      Array.isArray(exports) ||
      (exports &&
        typeof exports === 'object' &&
        Object.keys(exports).every((key) => !key.startsWith('.')))
    )
      exports = { '.': exports };
    if (!exports || typeof exports !== 'object' || Array.isArray(exports))
      fail(`Flax host types require explicit npm exports: ${owner}`);
    const subpath = name === owner ? '.' : `.${name.slice(owner.length)}`;
    let selected = subpath;
    let wildcard;
    if (!Object.hasOwn(exports, selected)) {
      selected = Object.keys(exports)
        .filter((path) => {
          const [prefix, suffix, extra] = path.split('*');
          return (
            suffix !== undefined &&
            extra === undefined &&
            subpath.startsWith(prefix) &&
            subpath.endsWith(suffix) &&
            subpath.length >= prefix.length + suffix.length
          );
        })
        .sort((a, b) => b.indexOf('*') - a.indexOf('*') || b.length - a.length)[0];
      if (selected) {
        const [prefix, suffix] = selected.split('*');
        wildcard = subpath.slice(prefix.length, subpath.length - suffix.length);
      }
    }
    const target = selected && exports[selected];
    if (!target || name.split('/').includes('_bindings'))
      fail(`Not a public Flax host types export: ${name}`);
    const leaves = (value) =>
      typeof value === 'string'
        ? [value]
        : value && typeof value === 'object'
          ? Object.values(value).flatMap(leaves)
          : [];
    const sources = leaves(target);
    // A mixed SDK may also ship ordinary JS wrappers; those stay in the bundle.
    if (sources.some((path) => !/\.d\.[cm]?ts$/.test(path))) return null;
    let source = sources[0];
    if (!source?.startsWith('./')) fail(`Missing declarations for ${name}`);
    if (wildcard !== undefined) source = source.replaceAll('*', wildcard);
    const filename = await realpath(
      join(directory, assetPath(source.slice(2), 'host types')),
    );
    const relativePath = relative(directory, filename);
    if (
      relativePath === '..' ||
      relativePath.startsWith(`..${sep}`) ||
      isAbsolute(relativePath) ||
      !(await stat(filename)).isFile()
    )
      fail(`Host declarations escape their package: ${name}`);
    let module = selected;
    if (wildcard !== undefined) {
      module = selected.slice(0, selected.indexOf('*')).replace(/\/$/, '') || '.';
      if (!Object.hasOwn(exports, module))
        fail(`Flax host subpaths require a public module entry: ${name}`);
      const parent = await this.resolveHostType(
        owner + (module === '.' ? '' : module.slice(1)),
        from,
      );
      if (!parent) fail(`Flax host subpaths require a public module entry: ${name}`);
      return { ...parent, watchFiles: [...parent.watchFiles, filename] };
    }
    return {
      specifier: owner + (module === '.' ? '' : module.slice(1)),
      watchFiles: [join(directory, 'package.json'), filename],
    };
  }

  async dependencyProvider(name, from) {
    let directory = await realpath(from);
    for (;;) {
      try {
        const npm = await json(join(directory, 'package.json'));
        const dependencies = unique(
          [
            ...Object.keys(npm.dependencies ?? {}),
            ...Object.keys(npm.optionalDependencies ?? {}),
            ...Object.keys(npm.peerDependencies ?? {}),
          ].sort(),
          `dependency in ${npm.name ?? directory}`,
        );
        for (const dependency of dependencies) {
          const entries = await this.loadPackage(dependency, directory);
          const entry = entries && owningEntry(entries, name);
          if (entry) return entry;
        }
        return null;
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
      if (dirname(directory) === directory) return null;
      directory = dirname(directory);
    }
  }

  async resolve(name, from, required = false, provider = null) {
    if (provider !== null) {
      const entries = await this.loadPackage(provider, from, true);
      const entry = entries && owningEntry(entries, name);
      if (!entry && required) fail(`Module ${name} is not delivered by ${provider}`);
      return entry;
    }
    // A cached parent must not hide an exact child from another delivery package
    // or a package whose asynchronous inventory load is still in progress.
    let entry = this.entries.get(name);
    if (entry) return entry;
    const entries = await this.loadPackage(packageName(name), from);
    entry = entries && owningEntry(entries, name);
    if (!entry) entry = await this.dependencyProvider(name, from);
    if (!entry) entry = owningEntry(this.entries, name);
    if (!entry && required)
      fail(`Module is not a declared public delivery entry: ${name}`);
    return entry;
  }

  async internalPath(entry, name) {
    if (name === entry.specifier) return entry.filename;
    if (!entry.subpathRoot || !name.startsWith(`${entry.specifier}/`)) return null;
    const suffix = name.slice(entry.specifier.length + 1);
    const candidate = join(
      entry.subpathRoot,
      /\.[cm]?js$/.test(suffix)
        ? suffix
        : `${suffix}${entry.typescript ? '.ts' : '.js'}`,
    );
    const resolved = await realpath(candidate);
    if (relative(entry.subpathRoot, resolved).startsWith(`..${sep}`))
      fail(`Module subpath escapes its root: ${name}`);
    return resolved;
  }

  isHelperSubpath(entry, name) {
    if (!name.startsWith(`${entry.specifier}/`)) return false;
    const suffix = name.slice(entry.specifier.length + 1);
    return entry.helperSubpaths.includes(suffix);
  }

  async isImplementationFile(filename) {
    await this.atFile(filename);
    const directory = this.nearest.get(dirname(await realpath(filename)));
    const entries = await this.packages.get(directory);
    if (!/\.(?:[cm]?js|[jt]sx?)$/.test(filename)) return false;
    if (entries?.size > 0) return true;
    return (await readFile(filename, 'utf8')).startsWith(
      '// GENERATED CODE. Selected public API subset; do not edit.',
    );
  }

  async atFile(filename) {
    filename = await realpath(filename);
    if (this.files.has(filename)) return this.files.get(filename);
    let directory = dirname(filename);
    const visited = [];
    while (!this.nearest.has(directory)) {
      visited.push(directory);
      try {
        await access(join(directory, 'package.json'));
        await this.load(directory);
        break;
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
      if (dirname(directory) === directory) break;
      directory = dirname(directory);
    }
    directory = this.nearest.get(directory) ?? directory;
    for (const item of visited) this.nearest.set(item, directory);
    return this.files.get(filename) ?? null;
  }
}

/** Resolve a public Flax specifier to the installed implementation that delivers it. */
export function createModuleDeliveryResolver() {
  const packages = new DeliveryPackages();
  return async (name, importer) => {
    if (name.startsWith('.') || isAbsolute(name) || name.includes(':')) return null;
    importer = await realpath(importer);
    await packages.atFile(importer);
    const entry = await packages.resolve(name, dirname(importer));
    return entry ? packages.internalPath(entry, name) : null;
  };
}

async function checkFlutterAssets(flutterRoot, assets) {
  const pubspec = loadYaml(await readFile(join(flutterRoot, 'pubspec.yaml'), 'utf8'));
  const declarations = array(pubspec?.flutter?.assets, 'flutter.assets').map((entry) =>
    typeof entry === 'string' ? entry : entry?.path,
  );
  for (const asset of assets) {
    if (
      !declarations.some(
        (entry) =>
          entry === asset || entry === `${dirname(asset).split(sep).join('/')}/`,
      )
    ) {
      fail(`Flutter asset is not declared in pubspec.yaml: ${asset}`);
    }
  }
}

async function installAssets(directory, files, check) {
  let current = [];
  try {
    current = await readdir(directory);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  if (check) {
    if (current.sort().join('\n') !== [...files.keys()].sort().join('\n'))
      fail('Stale Flax module asset inventory');
    for (const [name, content] of files) {
      if ((await readFile(join(directory, name), 'utf8')) !== content)
        fail(`Stale Flax module asset: ${name}`);
    }
    return;
  }
  if (current.length > 0) {
    // Replacement needs the previous ownership inventory, not a runnable protocol.
    const previous = validateModuleInventory(
      await json(join(directory, 'modules.json')),
      false,
    );
    const owned = new Set([
      'modules.json',
      previous.bootstrap.split('/').at(-1),
      ...previous.modules.map((entry) => entry.asset.split('/').at(-1)),
    ]);
    if (current.some((entry) => !owned.has(entry)))
      fail(`Unmanaged files in module asset output: ${directory}`);
  }
  const stage = `${directory}.prepare-${randomUUID()}`;
  const backup = `${stage}.backup`;
  let moved = false;
  try {
    await mkdir(stage, { recursive: true });
    for (const [name, content] of files) await writeFile(join(stage, name), content);
    try {
      await rename(directory, backup);
      moved = true;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    await rename(stage, directory);
  } catch (error) {
    if (moved) await rename(backup, directory);
    throw error;
  } finally {
    await rm(stage, { recursive: true, force: true });
  }
  if (moved) await rm(backup, { recursive: true, force: true });
}

async function publicSubpaths(entry) {
  if (!entry.subpathRoot) return [];
  const paths = [];
  async function visit(directory, prefix = '') {
    for (const file of await readdir(directory, { withFileTypes: true })) {
      const path = `${prefix}${file.name}`;
      if (file.isDirectory() && file.name !== '_bindings') {
        await visit(join(directory, file.name), `${path}/`);
      } else if (
        file.isFile() &&
        file.name.endsWith(entry.typescript ? '.ts' : '.js') &&
        !file.name.endsWith('.d.ts')
      ) {
        const subpath = path.slice(0, -3);
        if (!entry.helperSubpaths.includes(subpath))
          paths.push(`${entry.specifier}/${subpath}`);
      }
    }
  }
  await visit(entry.subpathRoot);
  return paths.sort();
}

/** Resolve generated scopes or installed locked packages into factory-only assets. */
export async function prepareModules({ configPath, check = false } = {}) {
  if (configPath === undefined) {
    let directory = resolve('.');
    for (;;) {
      try {
        await access(join(directory, 'pubspec.yaml'));
        configPath = join(directory, 'bindings/js_modules.json');
        break;
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
        if (dirname(directory) === directory)
          fail('Cannot find the owning Dart package; pass a module configuration.');
        directory = dirname(directory);
      }
    }
  }
  configPath = resolve(configPath);
  let project = dirname(configPath);
  const config = await json(configPath);
  const generated = config.formatVersion === 2;
  let flutterRoot;
  let output;
  let local = [];
  let providers = [];
  if (generated) {
    object(
      config,
      [
        'formatVersion',
        'generatedBy',
        'package',
        'version',
        'modules',
        'providers',
        'compilerOptions',
        'sources',
        'typesSdk',
      ],
      'binding build plan',
      ['formatVersion', 'generatedBy', 'package', 'version', 'modules', 'providers'],
    );
    if (config.generatedBy !== 'flax_codegen')
      fail('Expected generated binding build plan');
    implementationPackage(config.package, 'Dart binding package');
    version(config.version);
    flutterRoot = await realpath(resolve(project, '..'));
    project = join(flutterRoot, 'js');
    await access(join(project, 'package.json'));
    const manifest = await json(join(flutterRoot, 'bindings', 'manifest.json'));
    if (manifest.package !== config.package)
      fail('Binding build plan package mismatch');
    await prepareBindingSetup(flutterRoot, config, { check });
    const requirements = publicRequirements(manifest);
    const contained = async (path, label) => {
      const result = await realpath(join(flutterRoot, assetPath(path, label)));
      if (
        relative(flutterRoot, result) === '..' ||
        relative(flutterRoot, result).startsWith(`..${sep}`) ||
        isAbsolute(relative(flutterRoot, result))
      )
        fail(`Generated binding source escapes its package: ${path}`);
      return result;
    };
    local = await Promise.all(
      array(config.modules, 'binding modules').map(async (entry) => {
        object(entry, ['specifier', 'source', 'subpathRoot'], 'binding module', [
          'specifier',
          'source',
        ]);
        specifier(entry.specifier);
        if (!entry.source?.endsWith('.ts') || entry.source.endsWith('.d.ts'))
          fail('Expected generated TypeScript binding source');
        const requirement = requirements.get(entry.specifier);
        if (!requirement) fail(`Missing binding requirements: ${entry.specifier}`);
        const subpathRoot =
          entry.subpathRoot === undefined
            ? null
            : await contained(entry.subpathRoot, 'binding subpath root');
        return {
          ...entry,
          filename: await contained(entry.source, 'binding source'),
          directory: flutterRoot,
          subpathRoot,
          helperSubpaths: requirement.helperSubpaths,
          package: config.package,
          version: config.version,
          owner: `dart:${config.package}:${entry.specifier}`,
          bindings: bindings(
            requirement.bindings,
            `bindings for ${entry.specifier}`,
            true,
          ),
          typescript: true,
        };
      }),
    );
    unique(
      local.map((entry) => entry.specifier),
      'generated binding module',
    );
    providers = unique(
      array(config.providers, 'binding providers').map((name) =>
        implementationPackage(name),
      ),
      'binding provider',
    );
    // Direct runtime dependencies add UI/host plugins without repeating their entries.
    const npm = await json(join(project, 'package.json'));
    providers = [
      ...new Set([
        ...providers,
        ...Object.keys(npm.dependencies ?? {}),
        ...Object.keys(npm.optionalDependencies ?? {}),
        ...Object.keys(npm.peerDependencies ?? {}),
      ]),
    ];
    output = 'assets/flax_modules';
  } else {
    object(
      config,
      ['formatVersion', 'modules', 'flutterProject', 'output'],
      'module configuration',
    );
    if (config.formatVersion !== 1) fail('Unsupported Flax module configuration');
    flutterRoot = resolve(project, text(config.flutterProject, 'flutterProject'));
    output = assetPath(config.output, 'output');
  }
  const selected = generated
    ? []
    : array(config.modules, 'modules').map((value) => {
        if (typeof value === 'string') {
          const name = specifier(value);
          return { specifier: name, package: packageName(name) };
        }
        object(value, ['specifier', 'package'], 'selected module');
        return {
          specifier: specifier(value.specifier),
          package: implementationPackage(value.package, 'selected module package'),
        };
      });
  unique(
    selected.map((entry) => entry.specifier),
    'selected module',
  );
  if (!generated && selected.length === 0) fail('Select at least one host module');
  const lock = await findLock(project);
  const packages = new DeliveryPackages(lock);
  const pending = new Map();
  const completed = new Map();
  const files = new Map([['registry.js', moduleRegistrySource()]]);
  function enqueue(entry) {
    const previous = pending.get(entry.specifier);
    if (
      previous &&
      (previous.filename !== entry.filename || previous.version !== entry.version)
    ) {
      fail(`Multiple owners or versions for Flax module: ${entry.specifier}`);
    }
    pending.set(entry.specifier, entry);
    return entry;
  }
  for (const entry of local) {
    packages.addEntry(entry);
    enqueue(entry);
  }
  for (const provider of providers) {
    const entries = await packages.loadPackage(
      provider,
      project,
      config.providers.includes(provider),
    );
    for (const entry of entries?.values() ?? []) enqueue(entry);
  }
  for (const selectedModule of selected) {
    enqueue(
      await packages.resolve(
        selectedModule.specifier,
        project,
        true,
        selectedModule.package,
      ),
    );
  }
  while (completed.size < pending.size) {
    const entry = [...pending.values()]
      .filter((item) => !completed.has(item.specifier))
      .sort((a, b) => a.specifier.localeCompare(b.specifier))[0];
    const dependencies = new Map();
    const result = await build({
      ...bundleOptions,
      absWorkingDir: project,
      entryPoints: [entry.filename],
      format: 'cjs',
      plugins: [
        {
          name: 'flax-prepare-dependencies',
          setup(builder) {
            builder.onResolve({ filter: /.*/ }, async (args) => {
              if (args.kind === 'entry-point' || args.pluginData?.flaxResolving) return;
              let dependency;
              if (
                !args.path.startsWith('.') &&
                !isAbsolute(args.path) &&
                !args.path.includes(':')
              ) {
                dependency = await packages.resolve(args.path, args.resolveDir);
              }
              if (dependency?.specifier === entry.specifier) {
                const path = await packages.internalPath(entry, args.path);
                if (path) return { path };
                return;
              }
              if (dependency?.subpathRoot && args.path !== dependency.specifier) {
                const path = await packages.internalPath(dependency, args.path);
                if (!path) fail(`Module subpath is not delivered: ${args.path}`);
                if (packages.isHelperSubpath(dependency, args.path)) return { path };
              }
              if (!dependency) {
                const resolved = await builder.resolve(args.path, {
                  kind: args.kind,
                  resolveDir: args.resolveDir,
                  importer: args.importer,
                  pluginData: { flaxResolving: true },
                });
                if (resolved.errors.length > 0) return { errors: resolved.errors };
                if (resolved.external || resolved.namespace !== 'file') return;
                dependency = await packages.atFile(resolved.path);
              }
              if (!dependency) return;
              enqueue(dependency);
              dependencies.set(dependency.specifier, dependency.version);
              return { path: dependency.specifier, external: true };
            });
          },
        },
      ],
    });
    const body = result.outputFiles[0].text;
    const filename = `${entry.specifier.replace(/[^\w.-]/g, '_')}-${digest(entry.specifier).slice(0, 12)}.js`;
    const metadata = {
      specifier: entry.specifier,
      owner: entry.owner,
      version: entry.version,
      artifact: digest(body),
      asset: `${output}/${filename}`,
      package: entry.package,
      source: entry.source,
      dependencies: Object.fromEntries(
        [...dependencies].sort(([a], [b]) => a.localeCompare(b)),
      ),
      bindings: entry.bindings,
      subpaths: await publicSubpaths(entry),
    };
    // Dart validates the full binding inventory before any module executes.
    // The JS registry needs only module identity and dependency checks.
    const registration = {
      specifier: metadata.specifier,
      owner: metadata.owner,
      version: metadata.version,
      artifact: metadata.artifact,
      dependencies: metadata.dependencies,
    };
    files.set(
      filename,
      `globalThis.__flaxModules.define(${JSON.stringify(registration)}, function(module, exports, require) {\n${body}\n});\n`,
    );
    completed.set(entry.specifier, metadata);
  }
  const manifest = validateModuleManifest({
    formatVersion: 2,
    runtimeFormat,
    bootstrap: `${output}/registry.js`,
    lock: { manager: lock.manager, digest: lock.digest },
    modules: [...completed.values()].sort((a, b) =>
      a.specifier.localeCompare(b.specifier),
    ),
  });
  files.set('modules.json', `${JSON.stringify(manifest, null, 2)}\n`);
  await checkFlutterAssets(
    flutterRoot,
    [...files.keys()].map((name) => `${output}/${name}`),
  );
  await installAssets(resolve(flutterRoot, output), files, check);
  return { manifest, manifestPath: resolve(flutterRoot, output, 'modules.json') };
}

/** Resolve public Flax imports exclusively to prepared plugin-owned host instances. */
export function flaxHostModulesPlugin(manifest = null) {
  const provided = new Map(
    manifest === null
      ? []
      : validateModuleManifest(manifest).modules.flatMap((entry) =>
          [entry.specifier, ...(entry.subpaths ?? [])].map((name) => [name, entry]),
        ),
  );
  return {
    name: 'flax-host-modules',
    setup(builder) {
      let packages;
      const resolvedEntries = new Map();
      builder.onStart(() => {
        packages = new DeliveryPackages();
        resolvedEntries.clear();
      });
      builder.onResolve({ filter: /.*/ }, async (args) => {
        if (
          args.pluginData?.flaxResolving ||
          args.namespace === 'flax-host-module' ||
          args.kind === 'entry-point'
        )
          return;
        let entry = provided.get(args.path);
        if (!entry && owningEntry(provided, args.path))
          fail(`Missing prepared Flax module or public subpath: ${args.path}`);
        if (
          !entry &&
          manifest === null &&
          !args.path.startsWith('.') &&
          !isAbsolute(args.path) &&
          !args.path.includes(':')
        ) {
          entry = await packages.resolveHostType(args.path, args.resolveDir);
        }
        if (
          !entry &&
          !args.path.startsWith('.') &&
          !isAbsolute(args.path) &&
          !args.path.includes(':')
        ) {
          if (args.namespace === 'file' && args.importer)
            await packages.atFile(args.importer);
          const bundled = await packages.resolve(args.path, args.resolveDir);
          if (bundled) {
            fail(
              `Missing prepared Flax module: ${args.path}. Register its Dart plugin and prepare its source package.`,
            );
          }
        }
        if (!entry) {
          const resolved = await builder.resolve(args.path, {
            kind: args.kind,
            resolveDir: args.resolveDir,
            importer: args.importer,
            pluginData: { flaxResolving: true },
          });
          if (resolved.errors.length > 0) return { errors: resolved.errors };
          if (!resolved.external && resolved.namespace === 'file') {
            const descriptor = await packages.atFile(resolved.path);
            if (descriptor || (await packages.isImplementationFile(resolved.path))) {
              fail(
                `Flax implementation cannot be bundled into application code: ${args.path}`,
              );
            }
          }
        }
        if (entry) {
          resolvedEntries.set(entry.specifier, entry);
          return {
            path: entry.specifier,
            namespace: 'flax-host-module',
            watchFiles: entry.watchFiles,
          };
        }
      });
      builder.onLoad({ filter: /.*/, namespace: 'flax-host-module' }, (args) => {
        const entry = provided.get(args.path) ?? resolvedEntries.get(args.path);
        return {
          loader: 'js',
          contents: `if (!globalThis.__flaxModules || globalThis.__flaxModules.format !== ${JSON.stringify(runtimeFormat)}) throw new Error('Missing or incompatible Flax module host');\nmodule.exports = globalThis.__flaxModules.require(${JSON.stringify(entry.specifier)});`,
        };
      });
    },
  };
}
