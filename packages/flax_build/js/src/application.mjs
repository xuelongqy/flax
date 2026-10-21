import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rename,
  rm,
  stat,
  writeFile,
} from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { createHash } from 'node:crypto';
import { zipSync } from 'fflate';

const reserved = new Set([
  'flax.json',
  'flax.assets.json',
  'flax.files.json',
  '.flax-install.json',
  'assets',
]);

function validKey(key) {
  return (
    typeof key === 'string' &&
    !key.includes('\\') &&
    !key.includes(':') &&
    !key.includes('\0') &&
    !key.split('/').some((part) => !part || part === '.' || part === '..')
  );
}

async function assetFiles(directory, prefix = 'assets') {
  const result = [];
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
    const key = `${prefix}/${entry.name}`;
    if (!validKey(key)) throw new Error(`Invalid application resource path: ${key}`);
    if (entry.isDirectory())
      result.push(...(await assetFiles(resolve(directory, entry.name), key)));
    else if (entry.isFile()) result.push(key);
    else throw new Error(`Application resources must be regular files: ${key}`);
  }
  return result;
}

function resourceIndex(keys) {
  const assets = Object.create(null);
  for (const key of keys) {
    const variant = /^(.*)\/([0-9]+(?:\.[0-9]+)?)x\/([^/]+)$/.exec(key);
    const base = variant ? `${variant[1]}/${variant[3]}` : key;
    const scale = variant ? Number(variant[2]) : null;
    if (scale !== null && (!Number.isFinite(scale) || scale <= 0)) {
      throw new Error(`Invalid image scale: ${key}`);
    }
    (assets[base] ??= []).push({
      asset: key,
      ...(scale === null ? {} : { dpr: scale }),
    });
  }
  return { formatVersion: 1, assets };
}

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
    !validKey(entry) ||
    reserved.has(entryRoot) ||
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
  let index;
  try {
    // Finish copying before replacing the previous generated resources.
    if (sourcePath)
      await cp(sourcePath, resolve(staging, 'assets'), {
        recursive: true,
        dereference: true,
      });
    const keys = sourcePath ? await assetFiles(resolve(staging, 'assets')) : [];
    index = resourceIndex(keys);
    await rm(resources, { recursive: true, force: true });
    if (sourcePath) await rename(resolve(staging, 'assets'), resources);
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
  await writeFile(
    resolve(directory, 'flax.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  await writeFile(resolve(directory, 'flax.assets.json'), `${JSON.stringify(index)}\n`);
  const entryPath = resolve(directory, entry);
  await mkdir(dirname(entryPath), { recursive: true });
  return { directory, manifest, entryPath };
}

/** Creates a .flax ZIP from the managed application files, after compiling its entry. */
export async function packApplication({ directory, outputFile = `${directory}.flax` }) {
  const root = await realpath(directory);
  const manifest = JSON.parse(await readFile(resolve(root, 'flax.json'), 'utf8'));
  if (
    manifest.formatVersion !== 1 ||
    !validKey(manifest.entry) ||
    reserved.has(manifest.entry.split('/')[0].toLowerCase()) ||
    manifest.entry.split('/')[0].toLowerCase().startsWith('assetmanifest.')
  ) {
    throw new Error('Invalid application manifest or entry');
  }
  text(manifest.id, 'id');
  text(manifest.version, 'version');
  if (manifest.description !== undefined && typeof manifest.description !== 'string') {
    throw new Error('Application description must be a string');
  }
  const index = JSON.parse(await readFile(resolve(root, 'flax.assets.json'), 'utf8'));
  if (
    index.formatVersion !== 1 ||
    !index.assets ||
    typeof index.assets !== 'object' ||
    Array.isArray(index.assets)
  ) {
    throw new Error('Invalid application resource index');
  }
  const keys = new Set(['flax.json', manifest.entry, 'flax.assets.json']);
  for (const [key, variants] of Object.entries(index.assets)) {
    if (!validKey(key) || !Array.isArray(variants) || !variants.length) {
      throw new Error('Invalid application resource index');
    }
    for (const variant of variants) {
      if (
        !validKey(variant.asset) ||
        !variant.asset.startsWith('assets/') ||
        (variant.dpr !== undefined &&
          (!Number.isFinite(variant.dpr) || variant.dpr <= 0))
      ) {
        throw new Error('Invalid application resource variant');
      }
      keys.add(variant.asset);
    }
  }
  const files = Object.create(null);
  const inventory = Object.create(null);
  const portableKeys = new Set();
  let totalBytes = 0;
  const maxBytes = 512 * 1024 * 1024;
  if (keys.size + 1 > 10000) throw new Error('Application exceeds package file limit');
  for (const key of [...keys].sort()) {
    const portableKey = key.normalize('NFC').toLowerCase();
    if (portableKeys.has(portableKey))
      throw new Error(`Conflicting application path: ${key}`);
    portableKeys.add(portableKey);
    const path = await realpath(resolve(root, key));
    if (!contains(root, path) || !(await stat(path)).isFile()) {
      throw new Error(`Application file escapes its directory: ${key}`);
    }
    const data = await readFile(path);
    totalBytes += data.length;
    if (totalBytes > maxBytes)
      throw new Error('Application exceeds package size limit');
    files[key] = data;
    inventory[key] = {
      size: data.length,
      sha256: createHash('sha256').update(data).digest('hex'),
    };
  }
  files['flax.files.json'] = Buffer.from(
    JSON.stringify({ formatVersion: 1, files: inventory }),
  );
  if (totalBytes + files['flax.files.json'].length > maxBytes)
    throw new Error('Application exceeds package size limit');
  const target = resolve(outputFile);
  if (contains(root, target))
    throw new Error('Application archive must be outside its directory');
  await mkdir(dirname(target), { recursive: true });
  if (contains(root, await realpath(dirname(target)))) {
    throw new Error('Application archive directory must be outside its application');
  }
  const staging = await mkdtemp(resolve(dirname(target), '.flax-package-'));
  try {
    const file = resolve(staging, 'application.flax');
    await writeFile(
      file,
      zipSync(files, { level: 6, mtime: new Date('2020-01-01T00:00:00Z') }),
    );
    await rename(file, target);
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
  return target;
}
