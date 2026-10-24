import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { after, before, test } from 'node:test';
import {
  mkdtemp,
  mkdir,
  readFile,
  writeFile,
  rm,
  copyFile,
  symlink,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
import { build } from 'esbuild';
import { flaxEsbuildPlugin } from '../../flax_build/js/src/esbuild.mjs';

const exec = promisify(execFile);
const packageRoot = fileURLToPath(new URL('../', import.meta.url));
const repository = resolve(packageRoot, '../..');
let directory, archive;

before(async () => {
  directory = await mkdtemp(resolve(tmpdir(), 'flax-ffi-package-'));
  const packed = await exec(
    'npm',
    ['pack', '--json', '--ignore-scripts', '--pack-destination', directory],
    {
      cwd: resolve(packageRoot, 'js'),
    },
  );
  [archive] = JSON.parse(packed.stdout);
  const workspace = JSON.parse(
    await readFile(resolve(repository, 'package.json'), 'utf8'),
  );
  await writeFile(
    resolve(directory, 'package.json'),
    JSON.stringify({
      private: true,
      type: 'module',
      packageManager: workspace.packageManager,
      dependencies: { '@flax/ffi': `file:${archive.filename}` },
    }),
  );
  await writeFile(resolve(directory, 'pnpm-workspace.yaml'), 'packages: []\n');
  const store = await exec('pnpm', ['store', 'path'], { cwd: repository });
  await exec(
    'pnpm',
    ['install', '--offline', '--ignore-scripts', '--store-dir', store.stdout.trim()],
    {
      cwd: directory,
    },
  );
});
after(async () => {
  if (directory) await rm(directory, { recursive: true, force: true });
});

async function bundle(contents, loader = 'js') {
  return build({
    absWorkingDir: directory,
    stdin: { contents, resolveDir: directory, loader },
    bundle: true,
    write: false,
    metafile: true,
    platform: 'neutral',
    format: 'iife',
    target: 'es2020',
    plugins: [flaxEsbuildPlugin(null, { nativeAssets: false })],
  });
}
function retained(result) {
  return Object.values(result.metafile.outputs).flatMap((output) =>
    Object.entries(output.inputs)
      .filter(([, value]) => value.bytesInOutput > 0)
      .map(([path]) => path),
  );
}

test('installed archive contains only the public JS API and checks without Node ambient types', async () => {
  const files = archive.files.map((file) => file.path);
  for (const file of ['index.js', 'index.cjs', 'index.d.ts', 'README.md'])
    assert(files.includes(file));
  assert(
    !files.some((file) =>
      /(?:\.dart$|\.c$|\.inc$|\.tgz$|package-lock|pubspec|^test\/|^example\/)/.test(
        file,
      ),
    ),
  );
  await copyFile(
    resolve(packageRoot, 'test/runtime/typecheck.mts'),
    resolve(directory, 'consumer.mts'),
  );
  await mkdir(resolve(directory, 'types'));
  await exec(
    process.execPath,
    [
      resolve(repository, 'node_modules/typescript/bin/tsc'),
      '--strict',
      '--noEmit',
      '--target',
      'ES2022',
      '--module',
      'NodeNext',
      '--moduleResolution',
      'NodeNext',
      '--typeRoots',
      './types',
      'consumer.mts',
    ],
    { cwd: directory },
  );
});

test('Buffer-only imports share one constructor across aliases without installing native FFI', async () => {
  const result = await bundle(`
    import {Buffer} from '@flax/ffi';
    import {Buffer as bare} from 'buffer';
    import {Buffer as node} from 'node:buffer';
    if(Buffer !== bare || bare !== node) throw new Error('Different Buffer constructors');
    globalThis.result = Buffer.from('Flax').subarray(1).toString();
  `);
  const context = {
    __flaxBaseCall() {
      throw new Error('Unexpected native FFI installation');
    },
  };
  runInNewContext(result.outputFiles[0].text, context);
  assert.equal(context.result, 'lax');
  assert(!retained(result).some((path) => /\/ffi\/(api|layout)\.js$/.test(path)));
});

test('named FFI imports retain installation and remove the optional Buffer implementation', async () => {
  const result = await bundle(
    "import {suffix} from '@flax/ffi'; globalThis.result=suffix;",
  );
  let installed = 0;
  const context = {
    __flaxBaseCall(name) {
      assert.equal(name, 'ffiInstall');
      installed++;
      context.__flaxFfiPlatform = { suffix: '.dylib' };
    },
  };
  runInNewContext(result.outputFiles[0].text, context);
  assert.equal(context.result, '.dylib');
  assert.equal(installed, 1);
  assert(!retained(result).some((path) => path.endsWith('/buffer/index.js')));
});

test('unused imports disappear and an application without FFI needs no package', async () => {
  const result = await bundle(
    "import {Buffer,dlopen} from '@flax/ffi'; globalThis.result=42;",
  );
  const context = {
    __flaxBaseCall() {
      throw new Error('Unexpected installation');
    },
  };
  runInNewContext(result.outputFiles[0].text, context);
  assert.equal(context.result, 42);
  assert(!retained(result).some((path) => path.includes('node_modules/')));
  const absent = resolve(directory, 'absent');
  await mkdir(absent);
  const plain = await build({
    absWorkingDir: absent,
    stdin: { contents: 'globalThis.result=42;' },
    bundle: true,
    write: false,
    plugins: [flaxEsbuildPlugin(null, { nativeAssets: false })],
  });
  assert(plain.outputFiles[0].text.includes('42'));
});

test('static CommonJS and node:ffi resolve to the same public API', async () => {
  const result = await bundle(`
    import ffi from 'node:ffi';
    const common = require('@flax/ffi');
    globalThis.result = ffi.DynamicLibrary === common.DynamicLibrary &&
      typeof common.toBuffer === 'function' && typeof common.NativeFinalizer === 'function';
  `);
  const context = {};
  runInNewContext(result.outputFiles[0].text, context);
  assert.equal(context.result, true);
  const installed = JSON.parse(
    await readFile(resolve(directory, 'node_modules/@flax/ffi/package.json')),
  );
  assert.equal(installed.name, '@flax/ffi');
});

test('standalone buffer retains its type on Hermes without an installed FFI package', async (t) => {
  const project = await mkdtemp(resolve(tmpdir(), 'flax-buffer-only-'));
  t.after(() => rm(project, { recursive: true, force: true }));
  await mkdir(resolve(project, 'node_modules'));
  await writeFile(resolve(project, 'package.json'), '{"private":true}');
  const ffi = createRequire(resolve(directory, 'package.json')).resolve('@flax/ffi');
  await symlink(
    dirname(createRequire(ffi).resolve('buffer/package.json')),
    resolve(project, 'node_modules/buffer'),
  );
  const result = await build({
    absWorkingDir: project,
    stdin: {
      resolveDir: project,
      contents: `
      import {Buffer} from 'node:buffer';
      const bytes=Buffer.from([1,2,3]);
      const slice=bytes.subarray(1);
      slice[0]=42;
      globalThis.result=Buffer.isBuffer(slice) && bytes[1]===42;
    `,
    },
    bundle: true,
    write: false,
    platform: 'neutral',
    format: 'iife',
    plugins: [flaxEsbuildPlugin(null, { nativeAssets: false })],
  });
  const context = {};
  runInNewContext(
    `
    const original = Uint8Array.prototype.subarray;
    Uint8Array.prototype.subarray = function(...args) {
      const view = original.apply(this, args);
      return new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    };
    ${result.outputFiles[0].text}
  `,
    context,
  );
  assert.equal(context.result, true);
});
