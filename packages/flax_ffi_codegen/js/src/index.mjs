import {
  access,
  copyFile,
  mkdir,
  mkdtemp,
  open,
  readFile,
  readdir,
  realpath,
  rename,
  rm,
  stat,
  utimes,
  writeFile,
} from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHeader } from './ast.mjs';
import { emit } from './emit.mjs';
import { command, digest, resolveTarget } from './target.mjs';
import { castxmlTool } from './tool.mjs';

export { resolveTarget } from './target.mjs';
const identifier = /^[A-Za-z_]\w*$/;
const contains = (root, path) => {
  const p = relative(root, path);
  return p !== '..' && !p.startsWith(`..${sep}`) && !isAbsolute(p);
};
const json = (file) => readFile(file, 'utf8').then(JSON.parse);
const sameInputs = (a, b) =>
  Object.keys(a).length === Object.keys(b).length &&
  Object.entries(a).every(([path, hash]) => b[path] === hash);
function absoluteReceipt(receipt, cwd, output) {
  return {
    ...receipt,
    dependencies: Object.fromEntries(
      Object.entries(receipt.dependencies).map(([path, hash]) => [
        resolve(cwd, path),
        hash,
      ]),
    ),
    outputs: Object.fromEntries(
      Object.entries(receipt.outputs).map(([path, hash]) => [
        resolve(output, path),
        hash,
      ]),
    ),
  };
}
async function optionalJson(file) {
  try {
    return await json(file);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    return null;
  }
}
function selection(value, label) {
  if (value === undefined) return { include: [] };
  const result = Array.isArray(value) ? { include: value } : value;
  if (
    !result ||
    typeof result !== 'object' ||
    !Array.isArray(result.include) ||
    Object.keys(result).some((key) => !['include', 'exclude'].includes(key)) ||
    [result.include, result.exclude ?? []].some(
      (list) =>
        !Array.isArray(list) ||
        list.some(
          (name) => typeof name !== 'string' || !/^[A-Za-z_*][\w*]*$/.test(name),
        ),
    )
  )
    throw new Error(`Invalid ${label} selection`);
  return result;
}
function validate(options) {
  const allowed = [
    'cwd',
    'headers',
    'output',
    'functions',
    'globals',
    'records',
    'callbacks',
    'enums',
    'constants',
    'variadic',
    'resources',
    'compatibility',
    'language',
    'std',
    'defines',
    'flags',
    'includes',
    'target',
    'deploymentTarget',
    'castxml',
    'cacheDirectory',
    'dependencies',
  ];
  if (!options || Object.keys(options).some((key) => !allowed.includes(key)))
    throw new Error('Unknown FFI codegen option');
  for (const name of ['headers', 'includes', 'flags', 'constants', 'dependencies'])
    if (
      options[name] !== undefined &&
      (!Array.isArray(options[name]) ||
        options[name].some((v) => typeof v !== 'string' || !v || v.includes('\0')))
    )
      throw new Error(`Invalid ${name}`);
  if (!options.headers?.length || typeof options.output !== 'string' || !options.output)
    throw new Error('headers and output are required');
  const language = options.language ?? 'c',
    std = options.std ?? (language === 'c' ? 'c17' : 'c++17');
  if (
    !['c', 'c++'].includes(language) ||
    !/^(c|gnu)(\+\+)?(89|90|99|11|14|17|20|23|26)$/.test(std) ||
    (language === 'c++') !== std.includes('++')
  )
    throw new Error('Invalid C language standard');
  if (!['flax', 'node'].includes(options.compatibility ?? 'flax'))
    throw new Error('Unknown definitions compatibility');
  for (const name of options.constants ?? [])
    if (!identifier.test(name)) throw new Error(`Invalid constant ${name}`);
  for (const flag of options.flags ?? [])
    if (
      !flag.startsWith('-') ||
      /^(-target|--target|-arch|-isysroot|--sysroot|-std|-x$|-o$|-I|-D|-U|-include|-m.*version-min|@)/.test(
        flag,
      )
    )
      throw new Error(
        `Use target, std, includes or defines instead of overriding compiler context: ${flag}`,
      );
  if (
    options.defines !== undefined &&
    (!options.defines ||
      typeof options.defines !== 'object' ||
      Array.isArray(options.defines))
  )
    throw new Error('Invalid defines');
  for (const [name, value] of Object.entries(options.defines ?? {}))
    if (
      !identifier.test(name) ||
      (value !== null && typeof value !== 'string') ||
      value?.includes('\0')
    )
      throw new Error(`Invalid define ${name}`);
  for (const [name, resource] of Object.entries(options.resources ?? {})) {
    if (name === 'native')
      throw new Error('native is reserved for raw binding functions');
    if (
      !name ||
      !resource ||
      typeof resource !== 'object' ||
      Array.isArray(resource) ||
      Object.keys(resource).some(
        (k) => !['create', 'destroy', 'methods'].includes(k),
      ) ||
      !identifier.test(resource.create) ||
      !identifier.test(resource.destroy) ||
      (resource.methods !== undefined &&
        (!resource.methods ||
          typeof resource.methods !== 'object' ||
          Array.isArray(resource.methods)))
    )
      throw new Error(`Invalid resource ${name}`);
    for (const [method, rule] of Object.entries(resource.methods ?? {}))
      if (
        !method ||
        (typeof rule !== 'string' &&
          (!rule ||
            Object.keys(rule).some((k) => !['symbol', 'receiver'].includes(k)))) ||
        !identifier.test(typeof rule === 'string' ? rule : rule.symbol)
      )
        throw new Error(`Invalid resource method ${name}.${method}`);
  }
  if (
    options.resources !== undefined &&
    (!options.resources ||
      typeof options.resources !== 'object' ||
      Array.isArray(options.resources))
  )
    throw new Error('Invalid resources');
  if (
    options.variadic !== undefined &&
    (!options.variadic ||
      typeof options.variadic !== 'object' ||
      Array.isArray(options.variadic))
  )
    throw new Error('Invalid variadic bindings');
  return {
    ...options,
    language,
    std,
    functions: selection(options.functions, 'functions'),
    globals: selection(options.globals, 'globals'),
    records: selection(options.records, 'records'),
    callbacks: selection(options.callbacks, 'callbacks'),
    enums: selection(options.enums, 'enums'),
  };
}

/** Generate one library, publishing only after parsing, ABI validation and emission succeed. */
export async function generateBindings(options) {
  const config = validate(options);
  const cwd = await realpath(config.cwd ?? process.cwd());
  const output = resolve(cwd, config.output);
  if (output === cwd || !contains(cwd, output))
    throw new Error(
      'Generated output must be a dedicated directory inside the project',
    );
  await mkdir(dirname(output), { recursive: true });
  if (!contains(cwd, await realpath(dirname(output))))
    throw new Error('Generated output escapes through a symlink');
  const lockPath = `${output}.lock`;
  let lock;
  try {
    lock = await open(lockPath, 'wx');
  } catch (error) {
    if (error.code === 'EEXIST')
      throw new Error(`FFI output is already being generated: ${output}`);
    throw error;
  }
  let scratch;
  try {
    await lock.writeFile(`${process.pid}\n`);
    const profile = await resolveTarget(config);
    const tool = await castxmlTool(
      config.castxml && resolve(cwd, config.castxml),
      resolve(cwd, config.cacheDirectory ?? '.flax/ffi-codegen/tools'),
    );
    const headers = await Promise.all(
      config.headers.map((path) => realpath(resolve(cwd, path))),
    );
    const includes = await Promise.all(
      (config.includes ?? []).map((path) => realpath(resolve(cwd, path))),
    );
    const generator = digest(
      (
        await Promise.all(
          ['index.mjs', 'ast.mjs', 'emit.mjs', 'target.mjs', 'tool.mjs'].map((name) =>
            readFile(fileURLToPath(new URL(name, import.meta.url))),
          ),
        )
      )
        .map((bytes) => digest(bytes))
        .join(''),
    );
    const fingerprint = digest(
      JSON.stringify({ ...config, cwd, profile, tool: tool.digest, generator }),
    );
    const receiptPath = resolve(output, '.flax-ffi-codegen.json');
    const previous = await optionalJson(receiptPath);
    if (previous) {
      if (
        previous.formatVersion !== 1 ||
        !previous.outputs ||
        !contains(cwd, await realpath(output))
      )
        throw new Error(`Invalid or escaping generated output: ${output}`);
      const owned = new Set([
        '.flax-ffi-codegen.json',
        ...Object.keys(previous.outputs),
      ]);
      if ((await readdir(output)).some((name) => !owned.has(name)))
        throw new Error(`Generated directory contains unowned files: ${output}`);
    }
    if (!previous) {
      try {
        await access(output);
        throw new Error(`Refusing to replace an unowned output directory: ${output}`);
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
    const cache = resolve(cwd, config.cacheDirectory ?? '.flax/ffi-codegen');
    await mkdir(cache, { recursive: true });
    scratch = await mkdtemp(resolve(cache, 'generate-'));
    const wrapper = resolve(scratch, 'input.c'),
      xml = resolve(scratch, 'ast.xml');
    await writeFile(
      wrapper,
      headers.map((path) => `#include ${JSON.stringify(path)}\n`).join('') +
        (config.constants ?? [])
          .map((name) => `enum { __flax_macro_${name} = (${name}) };\n`)
          .join(''),
    );
    const common = [
      '-target',
      profile.triple,
      '-isysroot',
      profile.sdk,
      profile.deploymentFlag,
      '-x',
      config.language,
      `-std=${config.std}`,
      ...includes.flatMap((path) => ['-I', path]),
      ...Object.entries(config.defines ?? {}).map(
        ([name, value]) => `-D${name}${value === null ? '' : '=' + value}`,
      ),
      ...(config.flags ?? []),
    ];
    async function readDependencies() {
      const depfile = await command(profile.compiler, [
        ...common,
        '-M',
        '-MT',
        'dependencies',
        wrapper,
      ]);
      const paths =
        depfile
          .replace(/\\\r?\n/g, '')
          .replace(/^dependencies:\s*/, '')
          .match(/(?:\\.|[^\s])+/g) ?? [];
      const result = Object.create(null);
      for (let path of [
        ...paths.map((path) => path.replace(/\\(.)/g, '$1').replace(/\$\$/g, '$')),
        ...(config.dependencies ?? []).map((path) => resolve(cwd, path)),
      ]) {
        path = await realpath(path);
        if (path !== wrapper) result[path] = digest(await readFile(path));
      }
      return result;
    }
    // Re-resolve includes: adding a higher-priority header must invalidate the cache.
    const dependencies = await readDependencies();
    if (previous?.formatVersion === 1 && previous.fingerprint === fingerprint) {
      const absolute = absoluteReceipt(previous, cwd, output);
      let valid = sameInputs(dependencies, absolute.dependencies);
      for (const [path, expected] of Object.entries(absolute.outputs)) {
        try {
          if (digest(await readFile(path)) !== expected) valid = false;
        } catch (error) {
          if (error.code !== 'ENOENT') throw error;
          valid = false;
        }
      }
      if (valid) return { ...absolute, cached: true };
    }
    await command(tool.path, [
      '--castxml-output=1',
      `--castxml-cc-gnu${config.language === 'c' ? '-c' : ''}`,
      '(',
      profile.compiler,
      ...common,
      ')',
      ...common,
      wrapper,
      '-o',
      xml,
    ]);
    const macros = await command(profile.compiler, [...common, '-dM', '-E', wrapper]);
    const model = parseHeader(await readFile(xml, 'utf8'), {
      ...config,
      charUnsigned: /^#define __CHAR_UNSIGNED__ /m.test(macros),
      wcharUnsigned: /^#define __WCHAR_UNSIGNED__ /m.test(macros),
    });
    const files = emit(model, config);
    const abiChecks = [
      ...model.abi.flatMap((value) => [
        `FLAX_ABI_ASSERT(sizeof(${value.name}) == ${value.size} && FLAX_ALIGNOF(${value.name}) == ${value.alignment});`,
        ...(value.unsigned === undefined
          ? []
          : [
              `FLAX_ABI_ASSERT((((${value.name})-1) < 0) == ${value.unsigned ? 0 : 1});`,
            ]),
      ]),
      ...model.layouts.flatMap((record) => [
        `FLAX_ABI_ASSERT(sizeof(${record.cType}) == ${record.size} && FLAX_ALIGNOF(${record.cType}) == ${record.alignment});`,
        ...record.fields.map(
          (field) =>
            `FLAX_ABI_ASSERT(offsetof(${record.cType}, ${field.name}) == ${field.offset});`,
        ),
      ]),
      ...model.abiDeclarations,
      ...Object.entries(model.constants).flatMap(([name, text]) => {
        const value = BigInt(text);
        if (value < -(1n << 63n) || value > (1n << 64n) - 1n)
          throw new Error(
            `${name}: constants wider than 64 bits require an explicit wrapper`,
          );
        const literal =
          value < 0n
            ? `(-${-value - 1n}LL - 1LL)`
            : `${value}${value > (1n << 63n) - 1n ? 'ULL' : 'LL'}`;
        const expression = model.constantCNames[name];
        return [
          `FLAX_ABI_ASSERT((${expression}) == ${literal});`,
          `FLAX_ABI_ASSERT(((${expression}) < 0) == ${value < 0n ? 1 : 0});`,
        ];
      }),
      ...(config.language === 'c++'
        ? model.layouts.map(
            (record) =>
              `static_assert(__is_trivially_copyable(${record.cType}) && __is_standard_layout(${record.cType}) && __is_trivially_constructible(${record.cType}, const ${record.cType}&), "C++ FFI value records must be trivially copyable C data; use a C wrapper");`,
          )
        : []),
    ];
    files['abi.g.c'] =
      '#include <stddef.h>\n' +
      headers
        .map(
          (path) =>
            `#include ${JSON.stringify(contains(cwd, path) ? relative(cwd, path) : path)}\n`,
        )
        .join('') +
      '#ifdef __cplusplus\n#define FLAX_ALIGNOF alignof\n#define FLAX_ABI_ASSERT(x) static_assert(x, "FFI header ABI or calling convention changed")\n#define FLAX_ABI_COMPATIBLE(a,b) (__is_same(a,b) || __is_convertible_to(a,b))\n#define FLAX_ABI_SAME(a,b) __is_same(a,b)\n#else\n#define FLAX_ALIGNOF _Alignof\n#define FLAX_ABI_ASSERT(x) _Static_assert(x, "FFI header ABI or calling convention changed")\n#define FLAX_ABI_COMPATIBLE(a,b) __builtin_types_compatible_p(a,b)\n#define FLAX_ABI_SAME(a,b) __builtin_types_compatible_p(a,b)\n#endif\n' +
      abiChecks.join('\n') +
      '\n';
    const abiUnit = resolve(scratch, 'abi.c');
    await writeFile(abiUnit, files['abi.g.c']);
    await command(profile.compiler, [...common, '-I', cwd, '-fsyntax-only', abiUnit]);
    if (!sameInputs(dependencies, await readDependencies()))
      throw new Error('FFI inputs changed during generation; retry the build');
    const receipt = {
      formatVersion: 1,
      fingerprint,
      profile,
      tool: { digest: tool.digest, version: tool.version },
      dependencies: Object.fromEntries(
        Object.entries(dependencies).map(([path, hash]) => [
          contains(cwd, path) ? relative(cwd, path) : path,
          hash,
        ]),
      ),
      outputs: Object.fromEntries(
        Object.entries(files).map(([name, text]) => [name, digest(text)]),
      ),
      layouts: model.layouts,
      functions: Object.keys(model.definitions),
      cached: false,
    };
    const stage = await mkdtemp(`${output}.staging-`),
      backup = `${stage}.previous`;
    let published = false;
    try {
      for (const [name, text] of Object.entries(files)) {
        const path = resolve(stage, name),
          old = resolve(output, name);
        if (
          (await readFile(old, 'utf8').catch((e) => {
            if (e.code !== 'ENOENT') throw e;
            return null;
          })) === text
        ) {
          const times = await stat(old);
          await copyFile(old, path);
          await utimes(path, times.atime, times.mtime);
        } else await writeFile(path, text);
      }
      await writeFile(
        resolve(stage, '.flax-ffi-codegen.json'),
        JSON.stringify(receipt, null, 2) + '\n',
      );
      if (previous) await rename(output, backup);
      try {
        await rename(stage, output);
      } catch (error) {
        if (previous) {
          try {
            await rename(backup, output);
          } catch (restore) {
            throw new AggregateError(
              [error, restore],
              `Generation failed; previous files preserved in ${backup}`,
              { cause: error },
            );
          }
        }
        throw error;
      }
      published = true;
    } finally {
      await rm(stage, { recursive: true, force: true });
      if (published) await rm(backup, { recursive: true, force: true });
    }
    return absoluteReceipt(receipt, cwd, output);
  } finally {
    if (scratch) await rm(scratch, { recursive: true, force: true });
    await lock.close();
    await rm(lockPath, { force: true });
  }
}

/** The build adapters use native.json as the single source of library compiler inputs. */
export async function prepareProject({
  projectDirectory = process.cwd(),
  ...options
} = {}) {
  const cwd = await realpath(projectDirectory),
    metadata = await optionalJson(resolve(cwd, 'package.json'));
  if (!metadata?.flax?.native) return [];
  const descriptorPath = await realpath(resolve(cwd, metadata.flax.native));
  if (!contains(cwd, descriptorPath))
    throw new Error('Native descriptor escapes its package');
  const descriptor = await json(descriptorPath);
  if (descriptor.formatVersion !== 1 || !Array.isArray(descriptor.libraries))
    throw new Error('Invalid native descriptor');
  const results = [];
  const destinations = [];
  for (const library of descriptor.libraries) {
    if (library.codegen === undefined) continue;
    if (typeof library.codegen?.output !== 'string')
      throw new Error('A codegen recipe requires an output directory');
    const destination = resolve(cwd, library.codegen.output);
    if (
      destinations.some(
        (path) => contains(path, destination) || contains(destination, path),
      )
    )
      throw new Error('FFI generation output directories must not overlap');
    destinations.push(destination);
  }
  const identities = new Set();
  for (const library of descriptor.libraries) {
    if (typeof library.id !== 'string' || !library.id || identities.has(library.id))
      throw new Error('Native library IDs must be nonempty and unique');
    identities.add(library.id);
    if (library.codegen === undefined) continue;
    if (
      library.kind === 'cmake' &&
      (typeof library.cmake?.target !== 'string' || !library.cmake.target)
    )
      throw new Error(
        'CMake codegen requires an explicit cmake.target for ABI validation',
      );
    if (
      !library.codegen ||
      typeof library.codegen !== 'object' ||
      Array.isArray(library.codegen)
    )
      throw new Error('Invalid codegen recipe');
    if (
      Object.keys(library.codegen).some(
        (key) =>
          ![
            'output',
            'functions',
            'globals',
            'records',
            'callbacks',
            'enums',
            'constants',
            'variadic',
            'resources',
            'compatibility',
          ].includes(key),
      )
    )
      throw new Error('Put compiler inputs on the native library, not inside codegen');
    const profile = await resolveTarget(options);
    if (!library.targets?.includes(profile.os))
      throw new Error(`${library.id} does not support ${profile.os}`);
    const recipe = {
      ...library.codegen,
      cwd,
      headers: library.headers,
      includes: library.includes,
      language: library.language,
      std: library.std,
      defines: library.defines,
      flags: library.flags,
      ...options,
      dependencies: [descriptorPath],
    };
    const result = await generateBindings(recipe);
    results.push({ id: library.id, ...result });
  }
  return results;
}
