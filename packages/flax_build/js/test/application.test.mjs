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
import { prepareApplication } from '../src/application.mjs';

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
