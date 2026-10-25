import assert from 'node:assert/strict';
import { readFile, writeFile, stat } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { runInNewContext } from 'node:vm';
import { build } from 'esbuild';
import { flaxEsbuildPlugin } from '../../../flax_build/js/src/esbuild.mjs';

const [project, output] = process.argv.slice(2);
const require = createRequire(resolve(project, 'package.json'));
const { generateBindings, prepareProject } = await import(
  pathToFileURL(require.resolve('@flax/ffi-codegen'))
);
const manifest = JSON.parse(await readFile(resolve(project, 'native.json'), 'utf8'));
const core = manifest.libraries.find((library) => library.id === 'wallet-core/core');
const bundle = await build({
  absWorkingDir: project,
  entryPoints: ['probe.mjs'],
  outfile: output,
  bundle: true,
  metafile: true,
  platform: 'neutral',
  format: 'iife',
  target: 'es2020',
  plugins: [
    flaxEsbuildPlugin(null, {
      nativeAssets: { hostDirectory: resolve(project, '..') },
    }),
  ],
});
const retained = Object.values(bundle.metafile.outputs).flatMap((o) =>
  Object.entries(o.inputs)
    .filter(([, value]) => value.bytesInOutput > 0)
    .map(([name]) => name),
);
assert(!retained.some((name) => /(?:ffi-codegen\/src|fast-xml-parser)/.test(name)));
const file = resolve(project, 'generated/wallet/definitions.g.ts');
const source = await readFile(file, 'utf8');
const exports = {};
for (const name of ['definitions', 'constants', 'layouts']) {
  const line = source.split('\n').find((s) => s.startsWith(`export const ${name} = `));
  assert(line, `Missing generated export ${name}`);
  exports[name] = [...line.matchAll(/\["([^"]+)"\]:/g)].map((m) => m[1]);
}
const expected = JSON.parse(await readFile(resolve(project, 'expected.json'), 'utf8'));
const definitionLine = source
  .split('\n')
  .find((s) => s.startsWith('export const definitions = '));
const literal = definitionLine
  .slice('export const definitions = '.length)
  .replace(/ as const;$/, '');
const definitions = JSON.parse(
  runInNewContext(`JSON.stringify(${literal})`, {}, { timeout: 1000 }),
);
assert.deepEqual(definitions, expected.dartDefinitions);
assert.deepEqual(exports.definitions.toSorted(), expected.binaryFunctions.toSorted());
assert.equal(exports.definitions.length, 464);
assert.equal(exports.constants.length, 442);
assert.equal(exports.layouts.length, 3);
const before = (await stat(file)).mtimeMs;
const cached = await prepareProject({ projectDirectory: project });
assert(cached.every((result) => result.cached));
assert.equal((await stat(file)).mtimeMs, before);
const receipt = JSON.parse(
  await readFile(resolve(project, 'generated/wallet/.flax-ffi-codegen.json'), 'utf8'),
);
// Compile every header on the third Apple target too; this is not device execution.
const device = await generateBindings({
  cwd: project,
  headers: core.headers,
  includes: core.includes,
  ...core.codegen,
  output: 'generated/device',
  target: 'ios-arm64-device',
});
assert.equal(device.functions.length, 464);
let stringConstantRejected = false;
try {
  await generateBindings({
    cwd: project,
    headers: core.headers,
    output: 'generated/unsupported-string',
    constants: ['TWStellarPassphrase_Stellar'],
  });
} catch (error) {
  stringConstantRejected = /integer constant|integral|enumerator|castxml failed/.test(
    String(error),
  );
  if (!stringConstantRejected) throw error;
}
assert(stringConstantRejected, 'Noninteger constants must not be silently omitted');
await writeFile(
  resolve(project, 'selection.json'),
  JSON.stringify({
    profile: receipt.profile,
    functions: exports.definitions.length,
    constants: exports.constants.length,
    layouts: exports.layouts.length,
    primitiveTypes: [
      ...new Set(source.match(/"(?:c_bool|u?int(?:8|16|32|64)|pointer|void)"/g)),
    ]
      .map((s) => JSON.parse(s))
      .sort(),
    matchesDartFfigen: true,
    comparedDartSignatures: Object.keys(definitions).length,
    matchesNativeExports: true,
    incrementalCache: true,
    unchangedOutputTimestamp: true,
    deviceHeaderPreflight: {
      functions: device.functions.length,
      layouts: device.layouts.length,
    },
    stringConstantRejected,
    generatorAbsentFromRuntime: true,
  }),
);
