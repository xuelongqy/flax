import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { cp, mkdir, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { prepare } from './prepare.mjs';

const experiment = dirname(fileURLToPath(import.meta.url));
const root = resolve(experiment, '../..');

test('native inputs follow emitted imports and reject escaped package files', async () => {
  const temporary = resolve(root, '.local/tmp');
  await mkdir(temporary, { recursive: true });
  const scratch = await mkdtemp(resolve(temporary, 'ffi-package-test-'));
  const project = resolve(scratch, 'consumer');
  const host = resolve(scratch, 'internal');
  const modules = resolve(project, 'node_modules/@flax');
  try {
    await mkdir(modules, { recursive: true });
    await writeFile(resolve(scratch, 'pubspec.yaml'), 'name: ffi_consumer\n');
    const { dependencies } = JSON.parse(
      await readFile(resolve(experiment, 'packages/ffi/package.json'), 'utf8'),
    );
    await writeFile(
      resolve(project, 'package.json'),
      JSON.stringify({ name: 'consumer', version: '1.0.0', dependencies }),
    );
    execFileSync(
      'npm',
      ['install', '--offline', '--ignore-scripts', '--no-audit', '--no-fund'],
      {
        cwd: project,
        stdio: 'pipe',
      },
    );
    for (const [source, name] of [
      ['ffi', 'ffi'],
      ['fixture', 'ffi-fixture'],
    ]) {
      await cp(resolve(experiment, 'packages', source), resolve(modules, name), {
        recursive: true,
      });
    }
    const fixture = resolve(modules, 'ffi-fixture');
    await cp(resolve(root, 'experiments/ffi_full/native'), resolve(fixture, 'native'), {
      recursive: true,
    });
    await mkdir(resolve(fixture, 'native/include/flax'), { recursive: true });
    await cp(
      resolve(root, 'packages/flax/native/include/flax/runtime.h'),
      resolve(fixture, 'native/include/flax/runtime.h'),
    );
    const compile = async (source) => {
      await writeFile(resolve(project, 'index.js'), source);
      return prepare({ projectDirectory: project, hostDirectory: host });
    };
    const used = await compile(
      "import {add} from '@flax/ffi-fixture'; globalThis.answer = add(20,22);",
    );
    assert.deepEqual(
      used.providers.map((p) => p.id),
      ['@flax/ffi-fixture'],
    );
    assert.equal(used.sources.length, 2);
    const plan = await readFile(resolve(host, 'native-plan.json'), 'utf8');
    const descriptorPath = resolve(fixture, 'flax.native.json');
    const original = JSON.parse(await readFile(descriptorPath, 'utf8'));
    await writeFile(
      descriptorPath,
      JSON.stringify({ ...original, sources: ['../outside.c'] }),
    );
    await assert.rejects(
      compile("import {add} from '@flax/ffi-fixture'; globalThis.answer = add(1,2);"),
      /Invalid native package path/,
    );
    assert.equal(await readFile(resolve(host, 'native-plan.json'), 'utf8'), plan);
    await writeFile(resolve(scratch, 'outside.c'), 'void escaped(void) {}');
    await symlink(resolve(scratch, 'outside.c'), resolve(fixture, 'native/escaped.c'));
    await writeFile(
      descriptorPath,
      JSON.stringify({ ...original, sources: ['native/escaped.c'] }),
    );
    await assert.rejects(
      compile("import {add} from '@flax/ffi-fixture'; globalThis.answer = add(1,2);"),
      /escapes package/,
    );
    await writeFile(descriptorPath, JSON.stringify(original));
    const stale = resolve(
      scratch,
      'build/macos/Products/App.app/Contents/Frameworks/flax_ffi_providers.framework',
    );
    await mkdir(stale, { recursive: true });
    await writeFile(resolve(stale, 'flax_ffi_providers'), 'stale native code');
    const unrelated = resolve(scratch, 'build/macos/Products/unrelated.framework');
    await mkdir(unrelated, { recursive: true });
    await writeFile(resolve(unrelated, 'keep'), 'unrelated');
    const unused = await compile('globalThis.answer = 42;');
    assert.deepEqual(unused.providers, []);
    assert.deepEqual(unused.files, {});
    assert.deepEqual(unused.removedArtifacts, [relative(scratch, stale)]);
    await assert.rejects(readFile(resolve(stale, 'flax_ffi_providers')), {
      code: 'ENOENT',
    });
    assert.equal(await readFile(resolve(unrelated, 'keep'), 'utf8'), 'unrelated');
    const eliminated = await compile(
      "import {add} from '@flax/ffi-fixture'; globalThis.answer = 42;",
    );
    assert.deepEqual(eliminated.providers, []);
    await rm(resolve(project, 'node_modules'), { recursive: true });
    const absent = await compile('globalThis.answer = 42;');
    assert.deepEqual(absent.providers, []);
    assert.deepEqual(absent.sources, []);
  } finally {
    await rm(scratch, { recursive: true, force: true });
  }
});
