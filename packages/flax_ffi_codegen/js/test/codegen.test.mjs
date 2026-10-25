import assert from 'node:assert/strict';
import {
  mkdtemp,
  mkdir,
  cp,
  readFile,
  writeFile,
  rm,
  stat,
  symlink,
  chmod,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { test } from 'node:test';
import { execFileSync } from 'node:child_process';
import { generateBindings, prepareProject } from '../src/index.mjs';
import { command } from '../src/target.mjs';
import { castxmlTool } from '../src/tool.mjs';
import { flaxEsbuildPlugin } from '@flax/build/esbuild';
import { flaxVitePlugin } from '@flax/build/vite';
import { build } from 'esbuild';
import { build as viteBuild } from 'vite';

const root = fileURLToPath(new URL('../../../../', import.meta.url));
const tool = process.env.FLAX_CASTXML;
const native = fileURLToPath(new URL('../../test/native', import.meta.url));
const enabled =
  process.platform === 'darwin' && tool
    ? false
    : 'Set FLAX_CASTXML on macOS for real header checks';
async function fixture(t) {
  const cwd = await mkdtemp(resolve(tmpdir(), 'ffi-codegen-test-'));
  t.after(() => rm(cwd, { recursive: true, force: true }));
  await cp(native, resolve(cwd, 'native'), { recursive: true });
  return cwd;
}
const recipe = {
  headers: ['native/api.h'],
  output: 'generated',
  functions: ['cg_*'],
  globals: ['cg_global'],
  enums: ['CG_*'],
  constants: ['CG_MAGIC', 'CG_BIG', 'CG_TARGET_BYTES'],
  variadic: { cg_variadic: ['int32', 'int32'] },
  resources: {
    Counter: {
      create: 'cg_counter_create',
      destroy: 'cg_counter_destroy',
      methods: { add: 'cg_counter_add' },
    },
    Pair: {
      create: 'cg_counter_create_pair',
      destroy: 'cg_counter_destroy',
      methods: { add: { symbol: 'cg_counter_add_last', receiver: 1 } },
    },
  },
};

test('missing build tools report installation and configuration guidance', async (t) => {
  const cwd = await fixture(t);
  await assert.rejects(
    castxmlTool(resolve(cwd, 'missing-castxml'), cwd),
    /Cannot use CastXML.*FLAX_CASTXML.*pinned tool/,
  );
  await assert.rejects(
    command(process.execPath, ['-e', 'process.exit(7)']),
    /failed: Command failed:/,
  );
  const targetModule = pathToFileURL(
    resolve(root, 'packages/flax_ffi_codegen/js/src/target.mjs'),
  );
  assert.throws(
    () =>
      execFileSync(
        process.execPath,
        [
          '--input-type=module',
          '-e',
          `import {resolveTarget} from ${JSON.stringify(targetModule.href)}; await resolveTarget({target: 'ios-arm64-simulator'});`,
        ],
        { env: { ...process.env, PATH: cwd }, stdio: 'pipe' },
      ),
    (error) =>
      /Xcode SDK "iphonesimulator".*Install Xcode.*xcode-select/.test(
        error.stderr.toString(),
      ),
  );
  if (process.platform === 'darwin' && process.arch === 'arm64') {
    const fetch = globalThis.fetch;
    const override = process.env.FLAX_CASTXML;
    delete process.env.FLAX_CASTXML;
    globalThis.fetch = async () => {
      throw new Error('network unavailable');
    };
    try {
      await assert.rejects(
        castxmlTool(undefined, resolve(cwd, 'tools')),
        /download failed.*FLAX_CASTXML.*offline/,
      );
    } finally {
      globalThis.fetch = fetch;
      if (override === undefined) delete process.env.FLAX_CASTXML;
      else process.env.FLAX_CASTXML = override;
    }
  }
});

test('configuration errors do not invoke or fetch a compiler', async (t) => {
  const cwd = await fixture(t);
  for (const bad of [
    { unknown: true },
    { output: '../escape' },
    { flags: ['--target=x86_64-linux'] },
    { std: 'c++17' },
    { defines: { 'bad name': '1' } },
  ])
    await assert.rejects(
      generateBindings({ ...recipe, cwd, castxml: '/missing/tool', ...bad }),
    );
  await writeFile(resolve(cwd, 'package.json'), '{"private":true}');
  assert.deepEqual(
    await prepareProject({ projectDirectory: cwd, castxml: '/missing/tool' }),
    [],
  );
  await writeFile(
    resolve(cwd, 'package.json'),
    JSON.stringify({ flax: { native: 'native.json' } }),
  );
  await writeFile(
    resolve(cwd, 'native.json'),
    JSON.stringify({
      formatVersion: 1,
      libraries: [
        {
          id: 'invalid/cmake',
          kind: 'cmake',
          headers: ['native/api.h'],
          codegen: { output: 'generated', functions: ['cg_add'] },
          cmake: { directory: 'native', output: 'libbad.dylib' },
        },
      ],
    }),
  );
  await assert.rejects(
    prepareProject({ projectDirectory: cwd, castxml: '/missing/tool' }),
    /explicit cmake.target/,
  );
});

test(
  'real extraction, generic resource emission, profile changes and incremental invalidation',
  { skip: enabled },
  async (t) => {
    const cwd = await fixture(t),
      opts = { ...recipe, cwd, castxml: tool };
    await writeFile(resolve(cwd, 'native/dependency.h'), '#define INDIRECT 40\n');
    await writeFile(
      resolve(cwd, 'native/api.h'),
      '#include "dependency.h"\n' +
        (await readFile(resolve(cwd, 'native/api.h'), 'utf8')),
    );
    opts.constants = [...opts.constants, 'INDIRECT'];
    for (const [target, width] of [
      ['macos-arm64', 8],
      ['ios-arm64-device', 2],
      ['ios-device-arm64', 2],
      ['ios-simulator-arm64', 4],
    ]) {
      const first = await generateBindings({ ...opts, target });
      assert.equal(first.cached, false);
      assert.equal(first.functions.length, 26);
      assert.equal(first.layouts.length, 5);
      const defs = await readFile(resolve(cwd, 'generated/definitions.g.ts'), 'utf8');
      assert.match(defs, new RegExp(`\\["CG_TARGET_BYTES"\\]: ${width}`));
      assert.match(defs, /18446744073709551601n/);
      const before = (await stat(resolve(cwd, 'generated/definitions.g.ts'))).mtimeMs;
      assert.equal((await generateBindings({ ...opts, target })).cached, true);
      assert.equal(
        (await stat(resolve(cwd, 'generated/definitions.g.ts'))).mtimeMs,
        before,
      );
    }
    await writeFile(resolve(cwd, 'native/dependency.h'), '#define INDIRECT 41\n');
    const changed = await generateBindings({ ...opts, target: 'ios-simulator-arm64' });
    assert.equal(changed.cached, false);
    assert.match(
      await readFile(resolve(cwd, 'generated/definitions.g.ts'), 'utf8'),
      /\["INDIRECT"\]: 41/,
    );
    const before = await readFile(resolve(cwd, 'generated/definitions.g.ts'), 'utf8');
    for (const bad of [
      { functions: ['cg_bad_bits'], headers: ['native/unsupported.h'], resources: {} },
      {
        functions: ['cg_bad_alignment'],
        headers: ['native/unsupported.h'],
        resources: {},
      },
      { variadic: {} },
      { compatibility: 'node' },
      { resources: { Bad: { create: 'cg_add', destroy: 'cg_counter_destroy' } } },
      {
        resources: {
          Bad: {
            create: 'cg_counter_create',
            destroy: 'cg_counter_destroy',
            methods: { release: 'cg_counter_destroy' },
          },
        },
      },
    ]) {
      await assert.rejects(generateBindings({ ...opts, ...bad }));
      assert.equal(
        await readFile(resolve(cwd, 'generated/definitions.g.ts'), 'utf8'),
        before,
      );
    }
    await writeFile(resolve(cwd, 'generated/unowned.txt'), 'Do not remove');
    await assert.rejects(generateBindings(opts), /unowned files/);
    assert.equal(
      await readFile(resolve(cwd, 'generated/unowned.txt'), 'utf8'),
      'Do not remove',
    );
  },
);

test(
  'ordinary typedefs, exported C++ wrappers and Node primitive modules',
  { skip: enabled },
  async (t) => {
    const cwd = await fixture(t);
    await writeFile(
      resolve(cwd, 'native/plain.h'),
      'typedef struct {int value;} Widget;\ntypedef Widget WidgetAlias;\ntypedef int (*UnusedCallback)(int);\nWidget widget_move(Widget value);\nvoid consume(void (*callback)(int));\nint increment(int value);\nchar plain_char(char value);\n',
    );
    const opts = {
      cwd,
      headers: ['native/plain.h'],
      output: 'plain',
      functions: ['widget_move', 'consume'],
      castxml: tool,
    };
    const result = await generateBindings(opts);
    assert.equal(result.layouts[0].name, 'Widget');
    assert.match(
      await readFile(resolve(cwd, 'plain/definitions.g.ts'), 'utf8'),
      /WidgetAlias/,
    );
    assert.match(
      await readFile(resolve(cwd, 'plain/definitions.g.ts'), 'utf8'),
      /consume.arg0/,
    );
    await generateBindings({
      ...opts,
      functions: ['increment'],
      records: ['WidgetAlias'],
      callbacks: ['UnusedCallback'],
    });
    const selectedTypes = await readFile(
      resolve(cwd, 'plain/definitions.g.ts'),
      'utf8',
    );
    assert.match(selectedTypes, /WidgetAlias/);
    assert.match(selectedTypes, /UnusedCallback/);
    await generateBindings({
      ...opts,
      functions: ['increment', 'plain_char'],
      flags: ['-funsigned-char', '-Wall', '-Wextra', '-Werror'],
      compatibility: 'node',
    });
    const portable = await import(
      pathToFileURL(resolve(cwd, 'plain/definitions.g.ts'))
    );
    assert.deepEqual(portable.definitions.plain_char.arguments, ['uint8']);
    assert.equal(portable.definitions.increment.return, 'int32');
    await writeFile(
      resolve(cwd, 'native/wrapper.h'),
      'extern "C" {int wrapped(int); wchar_t wide(wchar_t); char16_t utf16(char16_t); char32_t utf32(char32_t);}\nint mangled(int);\n',
    );
    await generateBindings({
      ...opts,
      headers: ['native/wrapper.h'],
      functions: ['wrapped', 'wide', 'utf16', 'utf32'],
      language: 'c++',
      flags: ['-fshort-wchar'],
    });
    const wide = await import(
      `${pathToFileURL(resolve(cwd, 'plain/definitions.g.ts'))}?wide`
    );
    assert.equal(wide.definitions.wide.return, 'uint16');
    assert.equal(wide.definitions.utf16.return, 'uint16');
    assert.equal(wide.definitions.utf32.return, 'uint32');
    await assert.rejects(
      generateBindings({
        ...opts,
        headers: ['native/wrapper.h'],
        functions: ['mangled'],
        language: 'c++',
      }),
      /C ABI wrapper/,
    );
  },
);

test(
  'both public build adapters generate automatically and stage matching native inputs',
  { skip: enabled },
  async (t) => {
    for (const adapter of ['esbuild', 'vite']) {
      const cwd = await fixture(t),
        host = resolve(cwd, 'app');
      await mkdir(host);
      await writeFile(
        resolve(host, 'pubspec.yaml'),
        'name: ffi_codegen_adapter\ndependencies: {}\n',
      );
      await mkdir(resolve(cwd, 'node_modules/@flax'), { recursive: true });
      for (const name of ['ffi', 'ffi-codegen'])
        await symlink(
          resolve(root, `packages/flax_${name.replace('-', '_')}/js`),
          resolve(cwd, `node_modules/@flax/${name}`),
        );
      await writeFile(
        resolve(cwd, 'package.json'),
        JSON.stringify({
          name: 'fixture',
          type: 'module',
          flax: { native: 'native.json' },
        }),
      );
      const { headers, ...codegen } = recipe;
      await writeFile(
        resolve(cwd, 'native.json'),
        JSON.stringify({
          formatVersion: 1,
          libraries: [
            {
              id: 'fixture/library',
              targets: ['macos', 'ios'],
              kind: 'sources',
              sources: ['native/api.c'],
              headers,
              includes: ['native'],
              codegen,
              defines: { TEST_DEFINE: '1' },
            },
          ],
        }),
      );
      await writeFile(
        resolve(cwd, 'entry.ts'),
        "import {constants} from './generated/definitions.g.js'; globalThis.result = constants.CG_MAGIC;",
      );
      const options = {
        nativeAssets: { hostDirectory: host },
        ffiCodegen: { castxml: tool, target: 'ios-simulator-arm64' },
      };
      if (adapter === 'esbuild')
        await build({
          absWorkingDir: cwd,
          entryPoints: ['entry.ts'],
          outfile: 'out.js',
          bundle: true,
          write: false,
          platform: 'neutral',
          plugins: [flaxEsbuildPlugin(null, options)],
          logLevel: 'silent',
        });
      else {
        const plugin = flaxVitePlugin(options);
        await viteBuild({
          root: cwd,
          configFile: false,
          logLevel: 'silent',
          plugins: [plugin],
          build: {
            write: false,
            minify: false,
            lib: {
              entry: resolve(cwd, 'entry.ts'),
              formats: ['iife'],
              name: 'Fixture',
            },
          },
        });
        for (const file of [
          'native/api.h',
          'generated/definitions.g.ts',
          'generated/bindings.g.ts',
        ])
          assert.throws(
            () => plugin.hotUpdate({ file: resolve(cwd, file) }),
            /rebuild JavaScript and the native application/,
          );
      }
      const plan = JSON.parse(
        await readFile(resolve(host, '.flax/ffi_assets/native-plan.json'), 'utf8'),
      );
      assert.equal(plan.profile.target, 'ios-arm64-simulator');
      assert.equal(plan.libraries[0].codegen, true);
      assert.ok(Object.keys(plan.files).some((path) => path.endsWith('/abi.g.c')));
      assert.ok(Object.keys(plan.files).some((path) => path.endsWith('/native/api.h')));
      assert.equal(plan.libraries[0].defines.TEST_DEFINE, '1');
      assert.ok(plan.libraries[0].includes[0].endsWith('/native'));
    }
  },
);

test(
  'cache tracks header search changes and rejects inputs changed during generation',
  { skip: enabled },
  async (t) => {
    const cwd = await fixture(t),
      opts = {
        cwd,
        headers: ['native/cache.h'],
        output: 'cached',
        functions: ['cached_*'],
        constants: ['CACHE_VALUE'],
        includes: ['first$choice', 'second'],
        castxml: tool,
      };
    await mkdir(resolve(cwd, 'first$choice'));
    await mkdir(resolve(cwd, 'second'));
    await writeFile(
      resolve(cwd, 'native/cache.h'),
      '#include <choice.h>\nint cached_first(void);\n',
    );
    await writeFile(resolve(cwd, 'second/choice.h'), '#define CACHE_VALUE 1\n');
    await generateBindings(opts);
    assert.equal((await generateBindings(opts)).cached, true);
    await writeFile(resolve(cwd, 'first$choice/choice.h'), '#define CACHE_VALUE 2\n');
    assert.equal((await generateBindings(opts)).cached, false);
    assert.match(
      await readFile(resolve(cwd, 'cached/definitions.g.ts'), 'utf8'),
      /\["CACHE_VALUE"\]: 2/,
    );
    const before = await readFile(
      resolve(cwd, 'cached/.flax-ffi-codegen.json'),
      'utf8',
    );
    const wrapper = resolve(cwd, 'castxml-wrapper.mjs');
    await writeFile(
      wrapper,
      `#!/usr/bin/env node
import {spawnSync} from 'node:child_process';
import {existsSync, appendFileSync, writeFileSync} from 'node:fs';
const args = process.argv.slice(2);
const result = spawnSync(${JSON.stringify(tool)}, args, {stdio:'inherit'});
if (result.status === 0 && args.includes('--castxml-output=1') && !existsSync(${JSON.stringify(resolve(cwd, 'mutated'))})) {
  appendFileSync(${JSON.stringify(resolve(cwd, 'native/cache.h'))}, 'int cached_second(void);\\n');
  writeFileSync(${JSON.stringify(resolve(cwd, 'mutated'))}, 'yes');
}
process.exit(result.status ?? 1);
`,
    );
    await chmod(wrapper, 0o755);
    await assert.rejects(
      generateBindings({ ...opts, castxml: wrapper }),
      /changed during generation/,
    );
    assert.equal(
      await readFile(resolve(cwd, 'cached/.flax-ffi-codegen.json'), 'utf8'),
      before,
    );
    const retried = await generateBindings({ ...opts, castxml: wrapper });
    assert.deepEqual(retried.functions, ['cached_first', 'cached_second']);
    assert.equal((await generateBindings({ ...opts, castxml: wrapper })).cached, true);
    const policy = resolve(cwd, 'policy.txt'),
      config = resolve(cwd, 'ffi.config.json');
    await writeFile(policy, 'one');
    await writeFile(
      config,
      JSON.stringify({ ...opts, output: 'from-cli', dependencies: ['policy.txt'] }),
    );
    const cli = () =>
      execFileSync(
        process.execPath,
        [
          fileURLToPath(new URL('../bin/flax-ffi-codegen.mjs', import.meta.url)),
          '--config',
          config,
        ],
        { encoding: 'utf8', timeout: 30_000 },
      );
    assert.match(cli(), /0 cached/);
    assert.match(cli(), /1 cached/);
    await writeFile(policy, 'two');
    assert.match(cli(), /0 cached/);
  },
);

test(
  'compiler ABI guards reject non-C conventions and nontrivial C++ values',
  { skip: enabled },
  async (t) => {
    const cwd = await fixture(t),
      opts = { cwd, output: 'guarded', castxml: tool };
    await writeFile(
      resolve(cwd, 'native/conventions.h'),
      'typedef int (__attribute__((swiftcall)) *SwiftCB)(int);\nint __attribute__((swiftcall)) swift_fn(int);\nvoid use(SwiftCB);\ntypedef struct {int (__attribute__((swiftcall)) *callback)(int);} SwiftFields;\n',
    );
    for (const selection of [
      { functions: ['swift_fn'] },
      { functions: ['use'] },
      { functions: [], callbacks: ['SwiftCB'] },
      { functions: [], records: ['SwiftFields'] },
    ])
      await assert.rejects(
        generateBindings({ ...opts, headers: ['native/conventions.h'], ...selection }),
        /calling convention changed/,
      );
    await writeFile(
      resolve(cwd, 'native/cpp.h'),
      'struct Pod {int value;};\nstruct NonTrivial {~NonTrivial(); int value;};\nextern "C" {Pod pod(Pod); void bad(NonTrivial); bool boolean(bool) noexcept;}\n',
    );
    await generateBindings({
      ...opts,
      headers: ['native/cpp.h'],
      functions: ['pod', 'boolean'],
      language: 'c++',
    });
    await assert.rejects(
      generateBindings({
        ...opts,
        headers: ['native/cpp.h'],
        functions: ['bad'],
        language: 'c++',
      }),
      /trivially copyable C data/,
    );
    await writeFile(
      resolve(cwd, 'native/recursive.h'),
      'typedef struct RecursiveData {int value; int (*callback)(struct RecursiveData);} RecursiveData;\nvoid use_recursive(RecursiveData);\ntypedef struct {int value;} *OpaqueHandle;\nOpaqueHandle make_handle(void);\n',
    );
    const recursive = await generateBindings({
      ...opts,
      headers: ['native/recursive.h'],
      functions: ['use_recursive', 'make_handle'],
    });
    assert.equal(recursive.layouts.length, 1);
    assert.match(
      await readFile(resolve(cwd, 'guarded/definitions.g.ts'), 'utf8'),
      /RecursiveData.callback/,
    );
    await writeFile(
      resolve(cwd, 'native/ambiguous.h'),
      'typedef struct {int value;} Point;\nstruct Point {double value;};\nvoid first(Point); void second(struct Point);\n',
    );
    await assert.rejects(
      generateBindings({
        ...opts,
        headers: ['native/ambiguous.h'],
        functions: ['first', 'second'],
      }),
      /ambiguous aggregate name/,
    );
    await writeFile(
      resolve(cwd, 'native/different.h'),
      '#ifdef __castxml__\ntypedef int Value;\n#define VALUE_CONSTANT 1\n#else\ntypedef float Value;\n#define VALUE_CONSTANT 2\n#endif\ntypedef struct {Value value;} Data;\nvoid use_data(Data);\n',
    );
    await assert.rejects(
      generateBindings({
        ...opts,
        headers: ['native/different.h'],
        functions: ['use_data'],
      }),
      /ABI or calling convention changed/,
    );
    await assert.rejects(
      generateBindings({
        ...opts,
        headers: ['native/different.h'],
        functions: [],
        constants: ['VALUE_CONSTANT'],
      }),
      /ABI or calling convention changed/,
    );
    await writeFile(
      resolve(cwd, 'native/aliases.h'),
      'namespace One {typedef int (*Callback)(int);}\nnamespace Two {typedef double (*Callback)(double);}\nextern "C" {void first(One::Callback); void second(Two::Callback);}\n',
    );
    await assert.rejects(
      generateBindings({
        ...opts,
        headers: ['native/aliases.h'],
        functions: ['first', 'second'],
        language: 'c++',
      }),
      /ambiguous callback name/,
    );
    await writeFile(
      resolve(cwd, 'native/cleanup.h'),
      'void *make(void);\nvoid cleanup(void *, ...);\n',
    );
    await assert.rejects(
      generateBindings({
        ...opts,
        headers: ['native/cleanup.h'],
        functions: ['make', 'cleanup'],
        variadic: { cleanup: [] },
        resources: { Item: { create: 'make', destroy: 'cleanup' } },
      }),
      /GC destructor must be void\(pointer\)/,
    );
  },
);
