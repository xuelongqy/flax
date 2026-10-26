import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import {
  mkdir,
  mkdtemp,
  readFile,
  realpath,
  rm,
  symlink,
  writeFile,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import {
  prepareApplication,
  prepareModuleApplication,
  packApplication,
} from '../src/application.mjs';
import { startFlaxDev } from '../src/dev.mjs';
import { unzipSync } from 'fflate';
import { createHash } from 'node:crypto';

test('native ESM staging preserves JS and binary bytes, lowers TS and packages every module', async () => {
  const root = await realpath(await mkdtemp(join(tmpdir(), 'flax-esm-')));
  const project = join(root, 'js');
  try {
    await mkdir(join(project, 'src'), { recursive: true });
    await writeFile(
      join(project, 'package.json'),
      JSON.stringify({ name: 'esm', version: '1.0.0' }),
    );
    const code =
      "import source algorithm from './math.wasm';\nimport data from './data.json' with {type:'json'};\nexport const value = data.value;\n";
    const wasm = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]);
    await writeFile(join(project, 'src/main.js'), code);
    await writeFile(join(project, 'src/math.wasm'), wasm);
    await writeFile(join(project, 'src/data.json'), '{"value":42}');
    await writeFile(
      join(project, 'src/typed.ts'),
      "import {value} from './main.js'; export const typed: number = value;",
    );
    const app = await prepareModuleApplication({ projectDirectory: project });
    assert.equal(app.manifest.formatVersion, 2);
    assert.equal(await readFile(app.entryPath, 'utf8'), code);
    assert.match(
      await readFile(join(app.directory, 'typed.js'), 'utf8'),
      /from ["']\.\/main\.js["']/,
    );
    const archive = unzipSync(
      await readFile(await packApplication({ directory: app.directory })),
    );
    for (const key of ['main.js', 'math.wasm', 'data.json', 'typed.js'])
      assert.ok(archive[key]);
    assert.deepEqual(archive['math.wasm'], wasm);
    await writeFile(join(project, 'src/typed.ts'), 'export const invalid: = ;');
    await assert.rejects(prepareModuleApplication({ projectDirectory: project }));
    assert.equal(await readFile(app.entryPath, 'utf8'), code);
    assert.equal(
      JSON.parse(await readFile(join(app.directory, 'flax.json'), 'utf8'))
        .formatVersion,
      2,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test(
  'native ESM output rejects existing and dangling symlinks',
  { skip: process.platform === 'win32' },
  async () => {
    const root = await realpath(await mkdtemp(join(tmpdir(), 'flax-esm-output-')));
    try {
      await mkdir(join(root, 'src'));
      await mkdir(join(root, 'out'));
      await mkdir(join(root, 'outside'));
      await writeFile(
        join(root, 'package.json'),
        JSON.stringify({ name: 'esm', version: '1.0.0' }),
      );
      await writeFile(join(root, 'src/main.js'), 'export const value = 42;');
      const application = await prepareModuleApplication({
        projectDirectory: root,
        outputDirectory: 'out',
      });
      const manifest = await readFile(join(application.directory, 'flax.json'), 'utf8');
      await writeFile(join(root, 'src/extra.js'), 'export const extra = true;');
      for (const existing of [true, false]) {
        const target = join(root, 'outside', existing ? 'existing.js' : 'missing.js');
        if (existing) await writeFile(target, 'preserve');
        await symlink(target, join(root, 'out/extra.js'));
        await assert.rejects(
          prepareModuleApplication({ projectDirectory: root, outputDirectory: 'out' }),
          /symbolic|escapes/i,
        );
        if (existing) assert.equal(await readFile(target, 'utf8'), 'preserve');
        else await assert.rejects(readFile(target), { code: 'ENOENT' });
        assert.equal(
          await readFile(join(application.directory, 'flax.json'), 'utf8'),
          manifest,
        );
        await rm(join(root, 'out/extra.js'));
      }
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  },
);

test('native Vite endpoint serves original ESM, JSON and Wasm without browser import rewriting', async () => {
  const root = await realpath(await mkdtemp(join(tmpdir(), 'flax-esm-dev-')));
  let dev;
  try {
    await mkdir(join(root, 'src'));
    await writeFile(
      join(root, 'package.json'),
      JSON.stringify({ name: 'esm', version: '1.0.0' }),
    );
    const code =
      "import {Text} from '@flax/flutter/widgets'; import data from './data.json' with {type:'json'}; export {Text, data};";
    await writeFile(join(root, 'src/main.js'), code);
    await writeFile(join(root, 'src/data.json'), 'false');
    await writeFile(
      join(root, 'src/math.wasm'),
      new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0]),
    );
    dev = await startFlaxDev({
      entry: 'src/main.js',
      out: 'output',
      root,
      port: 0,
      entryFormat: 'module',
    });
    const entry = await fetch(dev.url);
    assert.equal(await entry.text(), code);
    assert.equal(entry.headers.get('content-type'), 'text/javascript');
    const json = await fetch(new URL('./data.json', dev.url));
    assert.equal(await json.json(), false);
    assert.equal(json.headers.get('content-type'), 'application/json');
    const wasm = await fetch(new URL('./math.wasm', dev.url));
    assert.equal(wasm.headers.get('content-type'), 'application/wasm');
    assert.equal(wasm.headers.get('cache-control'), 'no-store');
  } finally {
    await dev?.server.close();
    await rm(root, { recursive: true, force: true });
  }
});

test('application staging defaults, metadata, resource copies and configurable paths', async () => {
  const root = await realpath(await mkdtemp(join(tmpdir(), 'flax-application-')));
  const project = join(root, 'js');
  try {
    await mkdir(join(project, 'assets/images/2.0x'), { recursive: true });
    await writeFile(
      join(project, 'package.json'),
      JSON.stringify({
        name: '@example/app',
        version: '1.2.3',
        description: 'Example',
        flax: { id: 'main' },
      }),
    );
    await writeFile(join(project, 'assets/data.json'), '{"value":1}');
    await writeFile(
      join(project, 'assets/images/2.0x/logo.png'),
      new Uint8Array([1, 2, 3]),
    );
    const first = await prepareApplication({ projectDirectory: project });
    assert.equal(first.directory, join(root, 'assets/flax'));
    assert.equal(first.entryPath, join(first.directory, 'app.js'));
    assert.deepEqual(
      JSON.parse(await readFile(join(first.directory, 'flax.json'), 'utf8')),
      {
        formatVersion: 1,
        id: 'main',
        version: '1.2.3',
        entry: 'app.js',
        description: 'Example',
      },
    );
    assert.equal(
      await readFile(join(first.directory, 'assets/data.json'), 'utf8'),
      '{"value":1}',
    );
    for (const assetsDirectory of ['missing', 'assets/data.json']) {
      await assert.rejects(
        prepareApplication({ projectDirectory: project, assetsDirectory }),
      );
      assert.equal(
        await readFile(join(first.directory, 'assets/data.json'), 'utf8'),
        '{"value":1}',
      );
    }
    if (process.platform !== 'win32') {
      await symlink(join(root, 'missing'), join(project, 'assets/broken'));
      await assert.rejects(prepareApplication({ projectDirectory: project }));
      assert.equal(
        await readFile(join(first.directory, 'assets/data.json'), 'utf8'),
        '{"value":1}',
      );
      await rm(join(project, 'assets/broken'));
    }
    assert.deepEqual(
      [...(await readFile(join(first.directory, 'assets/images/2.0x/logo.png')))],
      [1, 2, 3],
    );
    await writeFile(join(first.directory, 'assets/stale.json'), '{}');
    await prepareApplication({ projectDirectory: project });
    await assert.rejects(readFile(join(first.directory, 'assets/stale.json')), {
      code: 'ENOENT',
    });
    const custom = await prepareApplication({
      projectDirectory: project,
      outputDirectory: '../custom',
      assetsDirectory: 'assets/images',
      id: 'feature',
      entry: 'code/start.js',
    });
    assert.equal(custom.manifest.id, 'feature');
    assert.equal(custom.entryPath, join(root, 'custom/code/start.js'));
    await writeFile(custom.entryPath, 'globalThis.feature = true;');
    assert.equal(
      await readFile(custom.entryPath, 'utf8'),
      'globalThis.feature = true;',
    );
    assert.deepEqual(
      [...(await readFile(join(custom.directory, 'assets/2.0x/logo.png')))],
      [1, 2, 3],
    );
    for (const entry of [
      '../escape.js',
      '/absolute',
      'flax.json',
      'FLAX.JSON',
      'flax.json/entry.js',
      'assets/a.js',
      'a\\b.js',
      'app.js\0suffix',
    ]) {
      await assert.rejects(
        prepareApplication({ projectDirectory: project, entry }),
        /entry/,
      );
    }
    await assert.rejects(
      prepareApplication({ projectDirectory: project, id: '' }),
      /id/,
    );
    for (const outputDirectory of ['.', '..', 'assets/out']) {
      await assert.rejects(
        prepareApplication({ projectDirectory: project, outputDirectory }),
        /overlap/,
      );
    }
    assert.equal(
      await readFile(join(project, 'assets/data.json'), 'utf8'),
      '{"value":1}',
    );
    await rm(join(project, 'assets'), { recursive: true });
    const withoutResources = await prepareApplication({ projectDirectory: project });
    assert.equal(withoutResources.manifest.id, 'main');
    await assert.rejects(
      readFile(join(withoutResources.directory, 'assets/data.json')),
      { code: 'ENOENT' },
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('example compiler failure preserves the previous code, resources and descriptor', async () => {
  const root = await realpath(await mkdtemp(join(tmpdir(), 'flax-bundle-')));
  const example = fileURLToPath(
    new URL('../../../../examples/standalone/', import.meta.url),
  );
  const project = join(root, 'js');
  try {
    await mkdir(join(project, 'tool'), { recursive: true });
    await mkdir(join(project, 'src'));
    await mkdir(join(project, 'assets'));
    await mkdir(join(root, 'assets/flax_modules'), { recursive: true });
    await writeFile(
      join(project, 'tool/bundle.mjs'),
      await readFile(join(example, 'js/tool/bundle.mjs')),
    );
    await writeFile(
      join(root, 'assets/flax_modules/modules.json'),
      await readFile(join(example, 'assets/flax_modules/modules.json')),
    );
    await symlink(
      join(example, 'js/node_modules'),
      join(project, 'node_modules'),
      process.platform === 'win32' ? 'junction' : 'dir',
    );
    await writeFile(
      join(project, 'package.json'),
      '{"name":"example","version":"1.0.0","type":"module"}',
    );
    await writeFile(join(project, 'src/main.ts'), 'globalThis.example = 1;');
    await writeFile(join(project, 'assets/data.json'), '{"version":1}');
    const environment = { ...process.env, FLAX_ASSET_PREFIX: 'flax/' };
    const compile = () =>
      execFileSync(process.execPath, ['tool/bundle.mjs'], {
        cwd: project,
        env: environment,
        stdio: 'pipe',
      });
    compile();
    const paths = ['app.js', 'flax.json', 'assets/data.json'].map((path) =>
      join(root, 'flax', path),
    );
    const previous = await Promise.all(paths.map((path) => readFile(path, 'utf8')));
    await writeFile(join(project, 'src/main.ts'), 'export const broken = ;');
    await writeFile(join(project, 'assets/data.json'), '{"version":2}');
    assert.throws(compile);
    assert.deepEqual(
      await Promise.all(paths.map((path) => readFile(path, 'utf8'))),
      previous,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('application packages contain managed files, variants and a verified inventory', async () => {
  const root = await realpath(await mkdtemp(join(tmpdir(), 'flax-package-')));
  try {
    const project = join(root, 'js');
    await mkdir(join(project, 'assets/images/2.0x'), { recursive: true });
    await writeFile(
      join(project, 'package.json'),
      JSON.stringify({ name: 'main', version: '1.0.0' }),
    );
    await writeFile(join(project, 'assets/images/icon.png'), 'base');
    await writeFile(join(project, 'assets/images/2.0x/icon.png'), 'variant');
    await writeFile(join(project, 'assets/data.json'), '{"value":1}');
    const application = await prepareApplication({ projectDirectory: project });
    await writeFile(application.entryPath, 'runApp();');
    await writeFile(
      join(application.directory, 'unrelated.txt'),
      'preserve outside package',
    );
    const path = await packApplication({ directory: application.directory });
    assert.equal(path, `${application.directory}.flax`);
    const bytes = await readFile(path);
    const files = unzipSync(bytes);
    assert.equal(files['unrelated.txt'], undefined);
    const index = JSON.parse(Buffer.from(files['flax.assets.json']).toString());
    assert.deepEqual(index.assets['assets/images/icon.png'], [
      { asset: 'assets/images/2.0x/icon.png', dpr: 2 },
      { asset: 'assets/images/icon.png' },
    ]);
    const inventory = JSON.parse(Buffer.from(files['flax.files.json']).toString());
    assert.deepEqual(
      Object.keys(inventory.files).sort(),
      Object.keys(files)
        .filter((key) => key !== 'flax.files.json')
        .sort(),
    );
    for (const [key, expected] of Object.entries(inventory.files)) {
      assert.equal(files[key].length, expected.size);
      assert.equal(
        createHash('sha256').update(files[key]).digest('hex'),
        expected.sha256,
      );
    }
    await packApplication({ directory: application.directory });
    assert.deepEqual(await readFile(path), bytes);
    await assert.rejects(
      packApplication({
        directory: application.directory,
        outputFile: application.entryPath,
      }),
    );
    await rm(application.entryPath);
    await assert.rejects(packApplication({ directory: application.directory }));
    assert.deepEqual(await readFile(path), bytes); // Failed packaging retains the previous archive.
    assert.equal(
      await readFile(join(application.directory, 'unrelated.txt'), 'utf8'),
      'preserve outside package',
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
