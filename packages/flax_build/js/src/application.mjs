import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  realpath,
  rename,
  rm,
  stat,
  writeFile,
} from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';

function text(value, key) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Application ${key} must be a nonempty string`);
  }
  return value;
}

function contains(parent, child) {
  const path = relative(parent, child);
  return (
    path === '' || (!isAbsolute(path) && path !== '..' && !path.startsWith(`..${sep}`))
  );
}

/** Stages a business directory; the caller compiles JavaScript to the returned entry. */
export async function prepareApplication({
  projectDirectory = process.cwd(),
  outputDirectory = '../assets/flax',
  assetsDirectory,
  id,
  entry = 'app.js',
} = {}) {
  const project = await realpath(projectDirectory);
  const metadata = JSON.parse(await readFile(resolve(project, 'package.json'), 'utf8'));
  if (metadata.description !== undefined && typeof metadata.description !== 'string') {
    throw new Error('Application description must be a string');
  }
  const manifest = {
    formatVersion: 1,
    id: text(id ?? metadata.flax?.id ?? metadata.name, 'id'),
    version: text(metadata.version, 'version'),
    entry: text(entry, 'entry'),
    ...(metadata.description === undefined
      ? {}
      : { description: metadata.description }),
  };
  const entryRoot = entry.split('/')[0].toLowerCase();
  if (
    entry.includes('\\') ||
    entry.includes(':') ||
    entry.includes('\0') ||
    entry.split('/').some((part) => !part || part === '.' || part === '..') ||
    entryRoot === 'flax.json' ||
    entryRoot === 'assets' ||
    entryRoot.startsWith('assetmanifest.')
  ) {
    throw new Error(
      'Application entry must be a relative file outside reserved resource paths',
    );
  }
  const source = resolve(project, assetsDirectory ?? 'assets');
  const output = resolve(project, outputDirectory);
  if (
    contains(output, project) ||
    contains(source, output) ||
    contains(output, source)
  ) {
    throw new Error('Application output must not overlap the project or source assets');
  }
  await mkdir(output, { recursive: true });
  const directory = await realpath(output);
  const resources = resolve(directory, 'assets');
  const sourcePath = await realpath(source).catch((error) => {
    if (error.code === 'ENOENT' && assetsDirectory === undefined) return null;
    throw error;
  });
  if (
    contains(directory, project) ||
    (sourcePath && (contains(sourcePath, directory) || contains(directory, sourcePath)))
  ) {
    throw new Error('Application output must not overlap the project or source assets');
  }
  if (sourcePath && !(await stat(sourcePath)).isDirectory()) {
    throw new Error('Application assetsDirectory must be a directory');
  }
  const staging = await mkdtemp(resolve(directory, '.flax-assets-'));
  try {
    // Finish copying before replacing the previous generated resources.
    if (sourcePath)
      await cp(sourcePath, resolve(staging, 'assets'), {
        recursive: true,
        dereference: true,
      });
    await rm(resources, { recursive: true, force: true });
    if (sourcePath) await rename(resolve(staging, 'assets'), resources);
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
  await writeFile(
    resolve(directory, 'flax.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  const entryPath = resolve(directory, entry);
  await mkdir(dirname(entryPath), { recursive: true });
  return { directory, manifest, entryPath };
}
