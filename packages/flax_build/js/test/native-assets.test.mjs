import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import { build } from 'esbuild';
import { build as viteBuild } from 'vite';
import { load } from 'js-yaml';
import { prepareNativeAssets } from '../src/native-assets.mjs';
import { flaxVitePlugin } from '../src/vite.mjs';

test('Vite preserves standalone Buffer views without installing FFI', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'flax-vite-buffer-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(join(root, 'node_modules'));
  await writeFile(join(root, 'package.json'), '{"private":true,"type":"module"}');
  const ffiPackage = createRequire(
    new URL('../../../flax_ffi/js/package.json', import.meta.url),
  );
  await symlink(
    join(ffiPackage.resolve('buffer/'), '..'),
    join(root, 'node_modules/buffer'),
  );
  await writeFile(
    join(root, 'main.js'),
    `
    import {Buffer} from 'node:buffer';
    const bytes = Buffer.from([1,2,3]);
    const view = bytes.subarray(1);
    view[0] = 42;
    globalThis.result = Buffer.isBuffer(view) && bytes[1] === 42;
  `,
  );
  const [bundle] = await viteBuild({
    root,
    configFile: false,
    logLevel: 'silent',
    plugins: [flaxVitePlugin({ nativeAssets: false })],
    build: {
      write: false,
      minify: false,
      lib: { entry: join(root, 'main.js'), formats: ['iife'], name: 'BufferFixture' },
    },
  });
  const context = {};
  runInNewContext(
    `
    const original = Uint8Array.prototype.subarray;
    Uint8Array.prototype.subarray = function(...args) {
      const view = original.apply(this, args);
      return new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    };
    ${bundle.output[0].code}
  `,
    context,
  );
  assert.equal(context.result, true);
});

test(
  'Apple containers and CMake inputs preserve target selection and dependency order',
  {
    skip: process.platform !== 'darwin' && 'Apple container inspection requires plutil',
  },
  async (t) => {
    const root = await mkdtemp(join(tmpdir(), 'flax-native-containers-'));
    t.after(() => rm(root, { recursive: true, force: true }));
    const project = join(root, 'js'),
      native = join(project, 'node_modules/fixture');
    await mkdir(join(native, 'Math.xcframework/ios-arm64-simulator/Math.framework'), {
      recursive: true,
    });
    await mkdir(join(native, 'cmake'), { recursive: true });
    await writeFile(join(root, 'pubspec.yaml'), 'name: fixture\ndependencies: {}\n');
    await writeFile(
      join(native, 'package.json'),
      JSON.stringify({ name: 'fixture', flax: { native: 'native.json' } }),
    );
    await writeFile(join(native, 'index.js'), 'export const value = 42;');
    const slice = {
      LibraryIdentifier: 'ios-arm64-simulator',
      LibraryPath: 'Math.framework',
      SupportedArchitectures: ['arm64'],
      SupportedPlatform: 'ios',
      SupportedPlatformVariant: 'simulator',
    };
    const info = join(native, 'Math.xcframework/Info.plist');
    await writeFile(info, JSON.stringify({ AvailableLibraries: [slice] }));
    await writeFile(
      join(native, 'Math.xcframework/ios-arm64-simulator/Math.framework/Info.plist'),
      JSON.stringify({ CFBundleExecutable: 'Math' }),
    );
    await writeFile(
      join(native, 'Math.xcframework/ios-arm64-simulator/Math.framework/Math'),
      'binary fixture',
    );
    await writeFile(join(native, 'cmake/CMakeLists.txt'), 'project(math C)');
    await writeFile(join(native, 'cmake/math.c'), 'int math(void) { return 42; }');
    const libraries = [
      {
        id: 'consumer',
        kind: 'cmake',
        targets: ['ios'],
        dependencies: ['math'],
        cmake: { directory: 'cmake', output: 'libmath.a' },
      },
      {
        id: 'math',
        kind: 'dynamic',
        targets: ['ios'],
        xcframework: 'Math.xcframework',
      },
    ];
    const prepare = async () => {
      await writeFile(
        join(native, 'native.json'),
        JSON.stringify({ formatVersion: 1, libraries }),
      );
      return prepareNativeAssets({
        projectDirectory: project,
        hostDirectory: root,
        metafile: {
          outputs: {
            'out.js': {
              inputs: { 'node_modules/fixture/index.js': { bytesInOutput: 1 } },
            },
          },
        },
      });
    };
    const { plan } = await prepare();
    assert.deepEqual(
      plan.libraries.map((lib) => lib.id),
      ['math', 'consumer'],
    );
    assert.deepEqual(Object.keys(plan.libraries[0].binaries), ['ios-arm64-simulator']);
    assert.equal(plan.libraries[1].sources.length, 2);
    libraries[1].dependencies = ['consumer'];
    await assert.rejects(prepare, /dependency cycle/);
    delete libraries[1].dependencies;
    libraries[0].dependencies = ['missing'];
    await assert.rejects(prepare, /Missing selected/);
    libraries[0].dependencies = ['math'];
    await writeFile(info, JSON.stringify({ AvailableLibraries: [slice, slice] }));
    await assert.rejects(prepare, /Ambiguous XCFramework slice/);
    await writeFile(info, JSON.stringify({ AvailableLibraries: [slice] }));
    await symlink(root, join(native, 'cmake/escape'), 'dir');
    await assert.rejects(prepare, /escapes its package/);
  },
);

test('retained native inputs are staged; eliminated imports and escaping inputs are rejected', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'flax-native-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const host = join(root, 'app'),
    project = join(host, 'js');
  const native = join(project, 'node_modules/native-fixture');
  await mkdir(native, { recursive: true });
  await writeFile(
    join(host, 'pubspec.yaml'),
    'name: fixture\ndependencies: # Host dependencies\n  flutter:\n    sdk: flutter\n',
  );
  await writeFile(
    join(native, 'package.json'),
    JSON.stringify({
      name: 'native-fixture',
      version: '1.0.0',
      sideEffects: false,
      flax: { native: 'native.json' },
    }),
  );
  await writeFile(
    join(native, 'index.js'),
    'export const value = globalThis.flaxNativeFixtureValue ?? 42;',
  );
  await writeFile(join(native, 'add.c'), 'int add(int a, int b) { return a+b; }');
  const descriptor = {
    formatVersion: 1,
    libraries: [
      { id: 'fixture', kind: 'sources', targets: ['macos', 'ios'], sources: ['add.c'] },
    ],
  };
  await writeFile(join(native, 'native.json'), JSON.stringify(descriptor));
  const prepare = async (code) => {
    const result = await build({
      absWorkingDir: project,
      stdin: { contents: code, resolveDir: project },
      bundle: true,
      write: false,
      metafile: true,
      treeShaking: true,
    });
    return prepareNativeAssets({
      projectDirectory: project,
      hostDirectory: host,
      metafile: result.metafile,
    });
  };
  const selected = await prepare(
    "import {value} from 'native-fixture'; globalThis.result=value;",
  );
  assert.equal(selected.plan.libraries.length, 1);
  assert.equal(Object.keys(selected.plan.files).length, 1);
  assert.match(await readFile(join(host, 'pubspec.yaml'), 'utf8'), /flax_ffi_assets:/);
  assert.match(
    await readFile(join(host, 'pubspec.yaml'), 'utf8'),
    /dependencies: # Host dependencies\n/,
  );
  for (const declaration of [
    'dependencies: {}',
    'dependencies: {flutter: {sdk: flutter}} # Host dependencies',
  ]) {
    await writeFile(join(host, 'pubspec.yaml'), `name: fixture\n${declaration}\n`);
    await prepare("import {value} from 'native-fixture'; globalThis.result=value;");
    const pubspec = await readFile(join(host, 'pubspec.yaml'), 'utf8');
    assert.deepEqual(load(pubspec).dependencies, {
      ...load(declaration).dependencies,
      flax_ffi_assets: { path: '.flax/ffi_assets' },
    });
    if (declaration.includes('# Host dependencies'))
      assert.match(pubspec, /# Host dependencies/);
  }
  assert.equal(
    (await prepare("import {value} from 'native-fixture'; globalThis.result=1;")).plan
      .libraries.length,
    0,
  );
  await mkdir(join(project, 'node_modules/@flax'), { recursive: true });
  await symlink(
    new URL('../../../flax_ffi/js', import.meta.url).pathname,
    join(project, 'node_modules/@flax/ffi'),
    'dir',
  );
  const entry = join(project, 'entry.js');
  const vite = async (code) => {
    await writeFile(entry, code);
    return viteBuild({
      root: project,
      configFile: false,
      logLevel: 'silent',
      plugins: [flaxVitePlugin()],
      build: { write: false, lib: { entry, formats: ['es'] }, minify: false },
    });
  };
  const output = await vite(
    "import {value} from 'native-fixture'; import {Buffer} from 'node:buffer'; " +
      'globalThis.flaxNativeVite = [value, Buffer.copyBytesFrom(new Uint8Array([42]))[0]];',
  );
  const outputs = Array.isArray(output) ? output : [output];
  const generated = outputs
    .flatMap((item) => item.output)
    .find((item) => item.type === 'chunk');
  await import(
    `data:text/javascript;base64,${Buffer.from(generated.code).toString('base64')}`
  );
  assert.deepEqual(globalThis.flaxNativeVite, [42, 42]);
  delete globalThis.flaxNativeVite;
  const planPath = join(host, '.flax/ffi_assets/native-plan.json');
  assert.equal(JSON.parse(await readFile(planPath, 'utf8')).libraries.length, 1);
  await vite("import {value} from 'native-fixture'; globalThis.result=1;");
  assert.equal(JSON.parse(await readFile(planPath, 'utf8')).libraries.length, 0);
  await symlink(join(host, 'pubspec.yaml'), join(native, 'escape.c'));
  descriptor.libraries[0].sources = ['escape.c'];
  await writeFile(join(native, 'native.json'), JSON.stringify(descriptor));
  await assert.rejects(
    prepare("import {value} from 'native-fixture'; globalThis.result=value;"),
    /escapes/,
  );
});
