import { lstat, mkdir, readFile, readdir, writeFile, rm } from 'node:fs/promises';
import { dirname, isAbsolute, join, posix, relative, resolve, sep } from 'node:path';

const encode = (value) => `${JSON.stringify(value, null, 2)}\n`;
const sourceHeader = '// GENERATED CODE. Selected public API subset; do not edit.';
const object = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

async function contained(root, path) {
  if (
    typeof path !== 'string' ||
    isAbsolute(path) ||
    path.includes('\\') ||
    path.split('/').some((part) => !part || part === '.' || part === '..')
  ) {
    throw new Error(`Invalid generated binding path: ${path}`);
  }
  let current = resolve(root);
  for (const part of path.split('/')) {
    current = join(current, part);
    try {
      if ((await lstat(current)).isSymbolicLink())
        throw new Error(`Refusing setup through a symbolic link: ${current}`);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  return current;
}

async function read(path) {
  try {
    return await readFile(path, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

/** Materialize codegen-owned sources and maintain only owned SDK setup entries. */
export async function prepareBindingSetup(root, plan, { check = false } = {}) {
  const writes = new Map();
  const removals = [];
  const sourceState = '.dart_tool/flax_binding_sources.json';
  const sourceStatePath = await contained(root, sourceState);
  const previousSources = JSON.parse((await read(sourceStatePath)) ?? '{}');
  if (!object(previousSources))
    throw new Error('Invalid generated binding source state');
  const sources = plan.sources ?? {};
  if (!object(sources)) throw new Error('Expected generated binding sources');
  // Recover ownership of default generated sources after flutter clean.
  if (Object.hasOwn(plan, 'sources')) {
    const directory = await contained(root, 'js/src/generated');
    let entries;
    try {
      entries = await readdir(directory, { recursive: true, withFileTypes: true });
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      entries = [];
    }
    for (const entry of entries) {
      if (
        !entry.isFile() ||
        !entry.name.endsWith('.ts') ||
        entry.name.endsWith('.d.ts')
      )
        continue;
      const path = relative(root, join(entry.parentPath, entry.name))
        .split(sep)
        .join('/');
      if (Object.hasOwn(previousSources, path) || Object.hasOwn(sources, path))
        continue;
      const source = await read(await contained(root, path));
      if (source?.startsWith(sourceHeader)) previousSources[path] = source;
    }
  }
  for (const [path, source] of Object.entries(sources)) {
    if (
      !path.endsWith('.ts') ||
      path.endsWith('.d.ts') ||
      typeof source !== 'string' ||
      !source.startsWith(sourceHeader)
    ) {
      throw new Error(`Invalid generated binding source: ${path}`);
    }
    const absolute = await contained(root, path);
    const old = await read(absolute);
    const restoredGenerated =
      previousSources[path] === undefined && old?.startsWith(sourceHeader);
    if (
      old !== null &&
      old !== source &&
      old !== previousSources[path] &&
      !restoredGenerated
    ) {
      throw new Error(`Refusing to replace modified binding source: ${path}`);
    }
    writes.set(absolute, source);
  }
  for (const [path, source] of Object.entries(previousSources)) {
    if (Object.hasOwn(sources, path)) continue;
    // A legacy configuration may take ownership of the same source path.
    if (
      plan.modules?.some(
        (entry) =>
          entry.source === path ||
          (!Object.hasOwn(plan, 'sources') &&
            entry.subpathRoot &&
            path.startsWith(`${entry.subpathRoot}/`)),
      )
    )
      continue;
    const absolute = await contained(root, path);
    const current = await read(absolute);
    if (current === source) removals.push(absolute);
    else if (current !== null)
      throw new Error(`Refusing to remove modified binding source: ${path}`);
  }
  if (Object.keys(sources).length || Object.keys(previousSources).length)
    writes.set(sourceStatePath, encode(sources));

  const sdk = plan.typesSdk;
  if (sdk !== undefined) {
    if (
      !object(sdk) ||
      typeof sdk.name !== 'string' ||
      !object(sdk.exports) ||
      !Array.isArray(sdk.files) ||
      !Array.isArray(sdk.dependencies) ||
      !object(sdk.compilerConfig)
    ) {
      throw new Error('Invalid binding types SDK plan');
    }
    const packagePath = await contained(root, `${sdk.directory}/package.json`);
    const data = JSON.parse((await read(packagePath)) ?? '{}');
    if (!object(data)) throw new Error(`Expected npm package object: ${packagePath}`);
    const map = (key, parent = data) => {
      parent[key] ??= {};
      if (!object(parent[key]))
        throw new Error(`Expected object at ${packagePath}: ${key}`);
      return parent[key];
    };
    const flax = map('flax');
    const previous = flax.generatedTypesSdk ?? {};
    if (!object(previous))
      throw new Error(`Invalid generatedTypesSdk state: ${packagePath}`);
    if (
      data.name !== undefined &&
      data.name !== sdk.name &&
      data.name !== previous.name
    ) {
      throw new Error(`SDK package name conflicts with typesSdk.name: ${packagePath}`);
    }
    if (flax.hostBindings !== undefined && flax.hostBindings !== true)
      throw new Error('SDK must opt into flax.hostBindings');
    data.name = sdk.name;
    data.version ??= plan.version;
    data.type ??= 'module';
    map('scripts').types ??= 'tsc -b tsconfig.json --force --emitDeclarationOnly';
    map('scripts').prepack ??= 'npm run types';
    flax.hostBindings = true;
    if (data.exports !== undefined && data.files === undefined) {
      throw new Error(
        `Add an explicit files allowlist for existing exports before building: ${packagePath}`,
      );
    }
    if (
      data.exports !== undefined &&
      (!object(data.exports) ||
        Object.keys(data.exports).every((key) => !key.startsWith('.')))
    ) {
      data.exports = { '.': data.exports };
    }
    const exports = map('exports');
    for (const [key, value] of Object.entries(previous.exports ?? {})) {
      if (JSON.stringify(exports[key]) === JSON.stringify(value)) delete exports[key];
    }
    const ownedExports = {};
    for (const [key, value] of Object.entries(sdk.exports)) {
      if (!Object.hasOwn(exports, key)) exports[key] = ownedExports[key] = value;
    }
    data.files ??= [];
    if (
      !Array.isArray(data.files) ||
      data.files.some((path) => typeof path !== 'string')
    )
      throw new Error('Expected npm files allowlist');
    data.files = data.files.filter((file) => !(previous.files ?? []).includes(file));
    const ownedFiles = [];
    for (const file of [...new Set(sdk.files)].sort()) {
      if (!data.files.includes(file)) {
        data.files.push(file);
        ownedFiles.push(file);
      }
    }
    flax.generatedTypesSdk = {
      name: sdk.name,
      exports: ownedExports,
      files: ownedFiles,
    };
    const host = JSON.parse(
      await readFile(await contained(root, 'js/package.json'), 'utf8'),
    );
    const sections = [
      'dependencies',
      'peerDependencies',
      'optionalDependencies',
      'devDependencies',
    ];
    const selector = (name) => {
      for (const section of sections) {
        const value = host[section]?.[name];
        if (value === undefined) continue;
        if (typeof value === 'string' && /^(file|link):/.test(value)) {
          const colon = value.indexOf(':');
          const path = value.slice(colon + 1);
          if (!posix.isAbsolute(path))
            return `${value.slice(0, colon + 1)}${posix.relative(sdk.directory, posix.normalize(posix.join('js', path)))}`;
        }
        return value;
      }
    };
    const dependencies = map('dependencies');
    for (const name of sdk.dependencies) {
      if (sections.slice(0, 3).some((section) => data[section]?.[name] !== undefined))
        continue;
      const value = data.devDependencies?.[name] ?? selector(name);
      if (value === undefined)
        throw new Error(
          `Declare the SDK types dependency ${name} in ${packagePath} or js/package.json`,
        );
      dependencies[name] = value;
    }
    if (!sections.some((section) => data[section]?.typescript !== undefined)) {
      map('devDependencies').typescript = selector('typescript') ?? '7.0.2';
    }
    const base = await contained(root, `${sdk.directory}/tsconfig.flax.json`);
    const oldBase = await read(base);
    if (oldBase !== null && JSON.parse(oldBase).flaxGenerated !== true)
      throw new Error(`Refusing to replace custom ${base}`);
    writes.set(packagePath, encode(data));
    writes.set(base, encode(sdk.compilerConfig));
    for (const [name, source] of [
      ['tsconfig.json', encode({ extends: './tsconfig.flax.json' })],
      ['.gitignore', '/node_modules/\n/.build/\n/types/\n/*.tgz\n'],
    ]) {
      const path = await contained(root, `${sdk.directory}/${name}`);
      if ((await read(path)) === null) writes.set(path, source);
    }
  }
  // Validate the entire setup before changing sources or editable npm policy.
  for (const [path, source] of writes) {
    if ((await read(path)) === source) continue;
    if (check) throw new Error(`Binding setup is stale: ${path}`);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, source);
  }
  for (const path of removals) {
    if (check) throw new Error(`Binding source is stale: ${path}`);
    await rm(path);
  }
}
