import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import {
  access,
  cp,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rename,
  rm,
  writeFile,
} from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const experiment = dirname(fileURLToPath(import.meta.url));
const root = resolve(experiment, '../..');
const hash = (data) => createHash('sha256').update(data).digest('hex');

function inside(parent, child) {
  const path = relative(parent, child);
  return path !== '..' && !path.startsWith(`..${sep}`) && !isAbsolute(path);
}

async function packageFile(directory, path) {
  if (
    typeof path !== 'string' ||
    !path ||
    path.includes('\\') ||
    isAbsolute(path) ||
    path.split('/').some((p) => !p || p === '.' || p === '..')
  ) {
    throw new Error(`Invalid native package path: ${path}`);
  }
  const file = await realpath(resolve(directory, path));
  if (!inside(directory, file))
    throw new Error(`Native input escapes package: ${path}`);
  return file;
}

async function owningPackage(file) {
  let directory = dirname(await realpath(file));
  while (dirname(directory) !== directory) {
    const path = resolve(directory, 'package.json');
    try {
      await access(path);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      directory = dirname(directory);
      continue;
    }
    return { directory, metadata: JSON.parse(await readFile(path, 'utf8')) };
  }
  return null;
}

async function removeProviderArtifacts(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  const removed = [];
  // Flutter's incremental code-asset embedding can leave withdrawn libraries behind.
  const owned = new Set([
    'flax_ffi_providers.framework',
    'flax_ffi_providers.framework.dSYM',
    'libflax_ffi_providers.so',
    'libflax_ffi_providers.dylib',
  ]);
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (owned.has(entry.name)) {
      await rm(path, { recursive: true, force: true });
      removed.push(path);
    } else if (entry.isDirectory()) {
      removed.push(...(await removeProviderArtifacts(path)));
    }
  }
  return removed;
}

/** Prototype owner of JS graph -> internal native build inputs. No npm install scripts. */
export async function prepare({ projectDirectory, hostDirectory, entry = 'index.js' }) {
  const project = await realpath(projectDirectory);
  const host = resolve(hostDirectory);
  // The fixture places its private adapter directly inside the Flutter application.
  const flutter = await realpath(dirname(host));
  await access(resolve(flutter, 'pubspec.yaml'));
  if (inside(host, project) || inside(project, host)) {
    throw new Error('Internal FFI output must be outside the JS project');
  }
  const result = await build({
    absWorkingDir: project,
    entryPoints: [entry],
    outfile: 'app.js',
    bundle: true,
    write: false,
    metafile: true,
    platform: 'neutral',
    format: 'iife',
    target: 'es2019',
    treeShaking: true,
    logLevel: 'silent',
  });
  // Parsed-but-eliminated imports are not native dependencies.
  const live = new Set(
    Object.values(result.metafile.outputs).flatMap((output) =>
      Object.entries(output.inputs)
        .filter(([, info]) => info.bytesInOutput > 0)
        .map(([path]) => resolve(project, path)),
    ),
  );
  const packages = new Map();
  for (const file of live) {
    const owner = await owningPackage(file);
    if (owner?.metadata.flax?.native) packages.set(owner.directory, owner);
  }
  const selected = [];
  const identities = new Set();
  for (const { directory, metadata } of packages.values()) {
    const path = await packageFile(directory, metadata.flax.native);
    const descriptor = JSON.parse(await readFile(path, 'utf8'));
    const fields = [
      'formatVersion',
      'provider',
      'getter',
      'sources',
      'headers',
      'targets',
    ];
    if (
      Object.keys(descriptor).some((k) => !fields.includes(k)) ||
      fields.some((k) => !(k in descriptor)) ||
      descriptor.formatVersion !== 1 ||
      descriptor.provider !== metadata.name ||
      !/^(?:@[a-z0-9][a-z0-9._-]*\/)?[a-z0-9][a-z0-9._-]*$/.test(metadata.name) ||
      typeof metadata.version !== 'string' ||
      !/^[A-Za-z_][A-Za-z0-9_]*$/.test(descriptor.getter) ||
      !Array.isArray(descriptor.sources) ||
      !descriptor.sources.length ||
      !Array.isArray(descriptor.headers) ||
      !Array.isArray(descriptor.targets) ||
      !descriptor.targets.length ||
      descriptor.targets.some((t) => !['macos', 'ios', 'android'].includes(t))
    ) {
      throw new Error(`Invalid native descriptor: ${path}`);
    }
    if (identities.has(metadata.name))
      throw new Error(`Duplicate provider: ${metadata.name}`);
    identities.add(metadata.name);
    selected.push({ directory, metadata, descriptor });
  }
  selected.sort((a, b) => a.metadata.name.localeCompare(b.metadata.name, 'en'));
  // shortcut: the shared fixture installer accepts one provider, extend its ABI before multiple providers.
  if (selected.length > 1) throw new Error('The fixture supports one native provider');
  await mkdir(dirname(host), { recursive: true });
  const stage = await mkdtemp(resolve(dirname(host), '.ffi-prepare-'));
  try {
    await cp(resolve(experiment, 'internal'), stage, { recursive: true });
    await mkdir(resolve(stage, 'lib'), { recursive: true });
    for (const [source, name] of [
      ['experiments/ffi_gate_a/probe.dart', 'gate_a_probe.dart'],
      ['packages/flax/lib/src/native/native_calls.dart', 'native_calls.dart'],
      [
        'packages/flax/lib/src/native/runtime_bindings.g.dart',
        'runtime_bindings.g.dart',
      ],
    ])
      await cp(resolve(root, source), resolve(stage, 'lib', name));
    const plan = {
      formatVersion: 1,
      providers: [],
      files: {},
      sources: [],
      includes: [],
    };
    let registry = '#include <stdint.h>\n';
    for (const { directory, metadata, descriptor } of selected) {
      const prefix = `native/${hash(`${metadata.name}@${metadata.version}`).slice(0, 16)}`;
      const paths = [...descriptor.sources, ...descriptor.headers];
      if (new Set(paths).size !== paths.length)
        throw new Error('Duplicate native input');
      for (const path of paths) {
        const source = await packageFile(directory, path);
        const destination = `${prefix}/${path}`;
        const data = await readFile(source);
        await mkdir(dirname(resolve(stage, destination)), { recursive: true });
        await writeFile(resolve(stage, destination), data);
        plan.files[destination] = hash(data);
      }
      plan.providers.push({
        id: metadata.name,
        version: metadata.version,
        descriptorSha256: hash(JSON.stringify(descriptor)),
        targets: descriptor.targets,
      });
      plan.sources.push(...descriptor.sources.map((path) => `${prefix}/${path}`));
      plan.includes.push(`${prefix}/native`, `${prefix}/native/include`);
      registry += `extern const void *${descriptor.getter}(void);\n`;
    }
    if (selected.length) {
      registry +=
        '__attribute__((visibility("default"), used))\n' +
        'const void *flax_ffi_packaged_provider(uint32_t index) {\n' +
        `  return index == 0 ? ${selected[0].descriptor.getter}() : 0;\n}\n`;
      await writeFile(resolve(stage, 'registry.c'), registry);
      plan.sources.push('registry.c');
      plan.files['registry.c'] = hash(registry);
    }
    const script =
      result.outputFiles[0].text + '\nJSON.stringify(globalThis.packageResult);\n';
    const ids = plan.providers.map((p) => p.id);
    const generated =
      `import 'dart:ffi';\n\n` +
      `const providerIds = <String>${JSON.stringify(ids)};\n` +
      `const packageBundleBase64 = '${Buffer.from(script).toString('base64')}';\n` +
      (ids.length
        ? `@Native<Pointer<Void> Function(Uint32)>(\n` +
          `  assetId: 'package:flax_ffi_host/providers',\n` +
          `  symbol: 'flax_ffi_packaged_provider',\n)\n` +
          `external Pointer<Void> packagedProvider(int index);\n`
        : `Pointer<Void> packagedProvider(int index) => throw StateError('FFI is absent');\n`);
    await writeFile(resolve(stage, 'lib/selection.g.dart'), generated);
    await writeFile(
      resolve(stage, 'native-plan.json'),
      `${JSON.stringify(plan, null, 2)}\n`,
    );
    const removedArtifacts = selected.length
      ? []
      : await removeProviderArtifacts(resolve(flutter, 'build'));
    await rm(host, { recursive: true, force: true });
    await rename(stage, host);
    return {
      ...plan,
      bundleSha256: hash(script),
      bundleBytes: Buffer.byteLength(script),
      removedArtifacts: removedArtifacts.map((path) => relative(flutter, path)),
    };
  } finally {
    await rm(stage, { recursive: true, force: true });
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({
    options: {
      project: { type: 'string' },
      host: { type: 'string' },
      entry: { type: 'string' },
    },
  });
  if (!values.project || !values.host)
    throw new Error('--project and --host are required');
  console.log(
    JSON.stringify(
      await prepare({
        projectDirectory: values.project,
        hostDirectory: values.host,
        entry: values.entry,
      }),
      null,
      2,
    ),
  );
}
