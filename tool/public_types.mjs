import { spawnSync } from 'node:child_process';
import { cp, mkdir, readFile, readdir, rm } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const build = join(root, '.local', 'public-types-build');
const stage = join(root, '.local', 'public-types-stage');
const check = process.argv.slice(2).includes('--check');

if (process.argv.slice(2).some((argument) => argument !== '--check')) {
  throw new Error('Usage: node tool/public_types.mjs [--check]');
}

async function copy(source, destination) {
  await mkdir(dirname(destination), { recursive: true });
  await cp(source, destination, { recursive: true });
}

async function files(directory, base = directory) {
  const result = new Map();
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      for (const [name, contents] of await files(path, base)) {
        result.set(name, contents);
      }
    } else if (entry.isFile()) {
      result.set(relative(base, path), await readFile(path, 'utf8'));
    }
  }
  return result;
}

async function verify(expected, actual, label) {
  let actualFiles;
  try {
    actualFiles = await files(actual);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Missing generated public types: ${label}`);
    }
    throw error;
  }
  const expectedFiles = await files(expected);
  const names = new Set([...expectedFiles.keys(), ...actualFiles.keys()]);
  for (const name of [...names].sort()) {
    if (expectedFiles.get(name) !== actualFiles.get(name)) {
      throw new Error(`Stale generated public types: ${label}/${name}`);
    }
  }
}

async function replace(source, destination) {
  await rm(destination, { recursive: true, force: true });
  await copy(source, destination);
}

await rm(build, { recursive: true, force: true });
await rm(stage, { recursive: true, force: true });
await mkdir(stage, { recursive: true });

const tsc = join(root, 'node_modules', 'typescript', 'bin', 'tsc');
const compilation = spawnSync(
  process.execPath,
  [tsc, '--project', join(root, 'tool', 'tsconfig.public-types.json')],
  { cwd: root, stdio: 'inherit' },
);
if (compilation.error) throw compilation.error;
if (compilation.status !== 0) process.exit(compilation.status ?? 1);

const emittedFlutter = join(build, 'packages', 'flax', 'js', 'src', 'flutter');
const stagedFlutter = join(stage, 'flutter');
for (const filename of ['widgets.d.ts', 'components.d.ts']) {
  await copy(join(emittedFlutter, filename), join(stagedFlutter, filename));
}
for (const library of ['foundation', 'gestures', 'scheduler', 'services', 'widgets']) {
  await copy(
    join(emittedFlutter, 'generated', 'libraries', library),
    join(stagedFlutter, 'generated', 'libraries', library),
  );
}
await copy(
  join(
    build,
    'packages',
    'flax_material_ui',
    'js',
    'src',
    'generated',
    'libraries',
    'material',
  ),
  join(stagedFlutter, 'generated', 'libraries', 'material'),
);
await copy(
  join(
    build,
    'packages',
    'flax_cupertino_ui',
    'js',
    'src',
    'generated',
    'libraries',
    'cupertino',
  ),
  join(stagedFlutter, 'generated', 'libraries', 'cupertino'),
);

const emittedDart = join(build, 'packages', 'flax', 'js', 'src', 'dart');
const stagedDart = join(stage, 'dart');
for (const library of ['async', 'core']) {
  await copy(
    join(emittedDart, 'generated', 'libraries', library),
    join(stagedDart, 'generated', 'libraries', library),
  );
}

const targets = [
  [
    stagedFlutter,
    join(root, 'packages', 'flax_flutter', 'js', 'types'),
    '@flax/flutter',
  ],
  [stagedDart, join(root, 'packages', 'flax_dart', 'js', 'types'), '@flax/dart'],
];
for (const [expected, actual, label] of targets) {
  if (check) {
    await verify(expected, actual, label);
  } else {
    await replace(expected, actual);
  }
}

await rm(build, { recursive: true, force: true });
await rm(stage, { recursive: true, force: true });
