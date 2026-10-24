import { createHash, randomUUID } from 'node:crypto';
import {
  copyFile,
  mkdir,
  access,
  readFile,
  readdir,
  realpath,
  rename,
  rm,
  writeFile,
} from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'js-yaml';
import { nativeInputs, orderNativeLibraries } from './native-inputs.mjs';

const hash = (value) => createHash('sha256').update(value).digest('hex');
const inside = (parent, child) => {
  const path = relative(parent, child);
  return !isAbsolute(path) && path !== '..' && !path.startsWith(`..${sep}`);
};
async function inputFile(directory, path) {
  if (
    typeof path !== 'string' ||
    !path ||
    path.includes('\\') ||
    isAbsolute(path) ||
    path.split('/').some((part) => !part || part === '.' || part === '..')
  )
    throw new Error(`Invalid native package path: ${path}`);
  const file = await realpath(resolve(directory, path));
  if (!inside(directory, file))
    throw new Error(`Native input escapes its package: ${path}`);
  return file;
}
async function owner(file) {
  for (
    let directory = dirname(await realpath(file));
    dirname(directory) !== directory;
    directory = dirname(directory)
  ) {
    try {
      return {
        directory,
        metadata: JSON.parse(
          await readFile(resolve(directory, 'package.json'), 'utf8'),
        ),
      };
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
}

/** Stages only native packages that contribute bytes to the final JavaScript. */
export async function prepareNativeAssets({
  projectDirectory,
  hostDirectory,
  metafile,
}) {
  const project = await realpath(projectDirectory);
  const host = await realpath(hostDirectory);
  const pubspecPath = resolve(host, 'pubspec.yaml');
  const pubspec = await readFile(pubspecPath, 'utf8');
  const destination = resolve(host, '.flax/ffi_assets');
  const previous = await readFile(resolve(destination, 'native-plan.json'), 'utf8')
    .then(JSON.parse)
    .catch((error) => {
      if (error.code === 'ENOENT') return null;
      throw error;
    });
  const stage = `${destination}.${randomUUID()}.staging`;
  await mkdir(resolve(stage, 'hook'), { recursive: true });
  const plan = { formatVersion: 1, libraries: [], files: {} };
  const assets = Object.create(null);
  try {
    const packages = new Map();
    for (const output of Object.values(metafile.outputs))
      for (const [path, info] of Object.entries(output.inputs)) {
        if (
          info.bytesInOutput === 0 ||
          path.startsWith('<') ||
          path.startsWith('\0') ||
          path.includes(':')
        )
          continue;
        const item = await owner(resolve(project, path));
        if (item?.metadata.flax?.native) packages.set(item.directory, item);
      }
    const identities = new Set();
    for (const { directory, metadata } of [...packages.values()].sort((a, b) =>
      a.metadata.name.localeCompare(b.metadata.name),
    )) {
      if (identities.has(metadata.name))
        throw new Error(`Duplicate native package: ${metadata.name}`);
      identities.add(metadata.name);
      const descriptorPath = await inputFile(directory, metadata.flax.native);
      const descriptor = JSON.parse(await readFile(descriptorPath, 'utf8'));
      if (
        descriptor.formatVersion !== 1 ||
        !Array.isArray(descriptor.libraries) ||
        Object.keys(descriptor).some(
          (key) => !['formatVersion', 'libraries'].includes(key),
        )
      )
        throw new Error(`Invalid native descriptor: ${descriptorPath}`);
      for (let lib of descriptor.libraries) {
        if (
          !lib ||
          typeof lib !== 'object' ||
          Array.isArray(lib) ||
          Object.keys(lib).some(
            (key) =>
              ![
                'id',
                'kind',
                'targets',
                'language',
                'sources',
                'headers',
                'includes',
                'binaries',
                'xcframework',
                'cmake',
                'dependencies',
              ].includes(key),
          ) ||
          ['sources', 'headers', 'includes'].some(
            (key) =>
              lib[key] !== undefined &&
              (!Array.isArray(lib[key]) ||
                lib[key].some((path) => typeof path !== 'string')),
          ) ||
          (lib.binaries !== undefined &&
            (!lib.binaries ||
              typeof lib.binaries !== 'object' ||
              Array.isArray(lib.binaries))) ||
          typeof lib.id !== 'string' ||
          !lib.id ||
          lib.id.includes('\0') ||
          Object.hasOwn(assets, lib.id) ||
          !['sources', 'static', 'dynamic', 'cmake'].includes(lib.kind) ||
          (lib.dependencies !== undefined &&
            (!Array.isArray(lib.dependencies) ||
              lib.dependencies.some((id) => typeof id !== 'string' || !id))) ||
          !Array.isArray(lib.targets) ||
          !lib.targets.length ||
          lib.targets.some((t) => !['macos', 'ios'].includes(t)) ||
          (lib.language !== undefined && !['c', 'c++'].includes(lib.language))
        )
          throw new Error(`Invalid native library in ${descriptorPath}`);
        lib = await nativeInputs(directory, lib, inputFile);
        const name = `flax_native_${hash(lib.id).slice(0, 16)}`;
        const files = [
          ...(lib.sources ?? []),
          ...(lib.headers ?? []),
          ...Object.values(lib.binaries ?? {}),
        ];
        if (
          (lib.kind === 'sources' && !lib.sources?.length) ||
          (!['sources', 'cmake'].includes(lib.kind) &&
            !Object.keys(lib.binaries ?? {}).length) ||
          !files.length
        )
          throw new Error(`Missing native inputs: ${lib.id}`);
        const prefix = `inputs/${name}`;
        for (const file of new Set(files)) {
          const source = await inputFile(directory, file);
          const target = `${prefix}/${file}`;
          await mkdir(dirname(resolve(stage, target)), { recursive: true });
          await copyFile(source, resolve(stage, target));
          plan.files[target] = hash(await readFile(source));
        }
        const includes = [];
        for (const path of lib.includes ?? []) {
          await inputFile(directory, path);
          await mkdir(resolve(stage, prefix, path), { recursive: true });
          includes.push(`${prefix}/${path}`);
        }
        // Header directories must already be represented by selected header inputs.
        const includePaths = includes;
        plan.libraries.push({
          id: lib.id,
          name,
          kind: lib.kind,
          targets: lib.targets,
          language: lib.language ?? 'c',
          dependencies: lib.dependencies ?? [],
          ...(lib.cmake
            ? { cmake: { ...lib.cmake, directory: `${prefix}/${lib.cmake.directory}` } }
            : {}),
          sources: (lib.sources ?? []).map((p) => `${prefix}/${p}`),
          includes: includePaths,
          binaries: Object.fromEntries(
            Object.entries(lib.binaries ?? {}).map(([key, path]) => [
              key,
              `${prefix}/${path}`,
            ]),
          ),
        });
        assets[lib.id] = name;
      }
    }
    plan.libraries = orderNativeLibraries(plan.libraries);
    if (!plan.libraries.length && !previous) return { assets, plan };
    await writeFile(
      resolve(stage, 'native-plan.json'),
      JSON.stringify(plan, null, 2) + '\n',
    );
    await writeFile(
      resolve(stage, 'pubspec.yaml'),
      `name: flax_ffi_assets\nversion: 0.0.0\npublish_to: none\nenvironment:\n  sdk: ^3.13.2\ndependencies:\n  code_assets: 1.2.1\n  hooks: 2.2.0\n  native_toolchain_c: 0.19.2\n  crypto: 3.0.7\n`,
    );
    await copyFile(
      fileURLToPath(new URL('./native/build.dart', import.meta.url)),
      resolve(stage, 'hook/build.dart'),
    );
    await mkdir(resolve(stage, 'lib'), { recursive: true });
    await writeFile(
      resolve(stage, 'lib/flax_ffi_assets.dart'),
      '// Internal generated native build package.\n',
    );
    await writeFile(resolve(stage, '.gitignore'), '*\n');
    const parsed = load(pubspec);
    const existing = parsed?.dependencies?.flax_ffi_assets;
    if (existing && existing.path !== '.flax/ffi_assets')
      throw new Error('flax_ffi_assets is reserved for the generated native build');
    if (!existing) {
      const addition = '  flax_ffi_assets:\n    path: .flax/ffi_assets\n';
      const header = /^dependencies:[ \t]*(?:#[^\r\n]*)?\r?$/m;
      const flowHeader = /^dependencies:[ \t]*\{/m;
      let updated;
      if (flowHeader.test(pubspec))
        updated = pubspec.replace(
          flowHeader,
          (line) => line + 'flax_ffi_assets: {path: .flax/ffi_assets}, ',
        );
      else if (header.test(pubspec))
        updated = pubspec.replace(header, (line) => line + '\n' + addition.trimEnd());
      else updated = `${pubspec.trimEnd()}\ndependencies:\n${addition}`;
      load(updated);
      await writeFile(pubspecPath, updated);
    }
    const retained = new Set(plan.libraries.map((lib) => lib.name));
    const withdrawn = new Set();
    for (const lib of previous?.libraries ?? []) {
      if (!/^flax_native_[a-f0-9]{16}$/.test(lib.name))
        throw new Error('Invalid previous native asset name');
      if (!retained.has(lib.name))
        for (const name of [
          `${lib.name}.framework`,
          `${lib.name}.framework.dSYM`,
          `lib${lib.name}.dylib`,
        ])
          withdrawn.add(name);
    }
    async function reconcile(directory) {
      let entries;
      try {
        entries = await readdir(directory, { withFileTypes: true });
      } catch (error) {
        if (error.code === 'ENOENT') return;
        throw error;
      }
      for (const entry of entries) {
        const path = resolve(directory, entry.name);
        if (withdrawn.has(entry.name)) await rm(path, { recursive: true, force: true });
        else if (entry.isDirectory()) await reconcile(path);
      }
    }
    if (withdrawn.size) await reconcile(resolve(host, 'build'));
    await mkdir(dirname(destination), { recursive: true });
    await rm(destination, { recursive: true, force: true });
    await rename(stage, destination);
    return { assets, plan };
  } finally {
    await rm(stage, { recursive: true, force: true });
  }
}

/** Shared by the esbuild and Vite adapters; no Flutter host means no native output. */
export async function prepareNativeAssetsForBuild(project, options, metafile) {
  if (options === false) return null;
  let host = options?.hostDirectory;
  if (!host)
    for (const path of [resolve(project), dirname(resolve(project))]) {
      try {
        await access(resolve(path, 'pubspec.yaml'));
        host = path;
        break;
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
  if (!host) return null;
  return prepareNativeAssets({
    projectDirectory: project,
    hostDirectory: host,
    metafile,
  });
}
