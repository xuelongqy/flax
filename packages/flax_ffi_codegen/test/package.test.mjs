import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { access, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { test } from 'node:test';

const exec = promisify(execFile);
const root = fileURLToPath(new URL('../../../', import.meta.url));
const packageDirectory = resolve(root, 'packages/flax_ffi_codegen/js');

test('packed codegen installs alone and exposes its API, types and CLI without native tools', async (t) => {
  const directory = await mkdtemp(resolve(tmpdir(), 'ffi-codegen-archive-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const { stdout } = await exec(
    'npm',
    ['pack', '--json', '--ignore-scripts', '--pack-destination', directory],
    { cwd: packageDirectory },
  );
  const [archive] = JSON.parse(stdout);
  assert.deepEqual(
    archive.files.map((file) => file.path).sort(),
    [
      'README.md',
      'package.json',
      'bin/flax-ffi-codegen.mjs',
      'src/ast.mjs',
      'src/emit.mjs',
      'src/index.d.mts',
      'src/index.mjs',
      'src/target.mjs',
      'src/tool.mjs',
    ].sort(),
  );
  const workspace = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
  await writeFile(
    resolve(directory, 'package.json'),
    JSON.stringify({
      private: true,
      type: 'module',
      packageManager: workspace.packageManager,
      devDependencies: { '@flax/ffi-codegen': `file:${archive.filename}` },
    }),
  );
  await writeFile(resolve(directory, 'pnpm-workspace.yaml'), 'packages: []\n');
  const store = await exec('pnpm', ['store', 'path'], { cwd: root });
  await exec(
    'pnpm',
    ['install', '--offline', '--ignore-scripts', '--store-dir', store.stdout.trim()],
    { cwd: directory },
  );
  await writeFile(
    resolve(directory, 'consumer.mjs'),
    `import assert from 'node:assert/strict';
import {generateBindings, prepareProject, resolveTarget} from '@flax/ffi-codegen';
assert.equal(typeof generateBindings, 'function');
assert.equal(typeof resolveTarget, 'function');
assert.deepEqual(await prepareProject({projectDirectory: process.cwd()}), []);
await assert.rejects(generateBindings({headers: [], output: 'generated'}), /headers and output/);
`,
  );
  await exec(process.execPath, ['consumer.mjs'], { cwd: directory });
  const cli = await exec('pnpm', ['exec', 'flax-ffi-codegen', '--project', '.'], {
    cwd: directory,
  });
  assert.match(cli.stdout, /Generated 0 FFI libraries/);
  await assert.rejects(
    exec('pnpm', ['exec', 'flax-ffi-codegen', '--unknown'], { cwd: directory }),
    (error) => error.code === 1 && /Usage: flax-ffi-codegen/.test(error.stderr),
  );
  await writeFile(
    resolve(directory, 'consumer.mts'),
    `import {generateBindings, type GenerationOptions, type TargetProfile} from '@flax/ffi-codegen';
const options: GenerationOptions = {headers: ['api.h'], output: 'generated', functions: ['api_*']};
const profile: Promise<TargetProfile> = generateBindings(options).then(result => result.profile);
void profile;
`,
  );
  await exec(
    process.execPath,
    [
      resolve(root, 'node_modules/typescript/bin/tsc'),
      '--strict',
      '--noEmit',
      '--module',
      'NodeNext',
      '--moduleResolution',
      'NodeNext',
      '--target',
      'ES2022',
      'consumer.mts',
    ],
    { cwd: directory },
  );
  for (const path of ['.flax', 'node_modules/@flax/ffi', 'node_modules/@flax/build'])
    await assert.rejects(access(resolve(directory, path)), { code: 'ENOENT' });
});
