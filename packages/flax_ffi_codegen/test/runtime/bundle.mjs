import { build } from 'esbuild';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { readFile, writeFile } from 'node:fs/promises';
import { flaxEsbuildPlugin } from '../../../flax_build/js/src/esbuild.mjs';

const [project, output] = process.argv.slice(2);
const require = createRequire(resolve(project, 'package.json'));
const { generateBindings, resolveTarget } = await import(
  pathToFileURL(require.resolve('@flax/ffi-codegen'))
);
const profile = await resolveTarget();
const sqlite = await generateBindings({
  cwd: project,
  headers: [resolve(profile.sdk, 'usr/include/sqlite3.h')],
  output: 'generated/sqlite',
  functions: [
    'sqlite3_open',
    'sqlite3_close',
    'sqlite3_libversion_number',
    'sqlite3_prepare_v2',
    'sqlite3_step',
    'sqlite3_column_int',
    'sqlite3_finalize',
    'sqlite3_errmsg',
    'sqlite3_free',
  ],
  constants: ['SQLITE_OK', 'SQLITE_ROW', 'SQLITE_DONE', 'SQLITE_VERSION_NUMBER'],
});
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
if (retained.some((name) => /(?:ffi-codegen\/src|fast-xml-parser)/.test(name)))
  throw new Error('Generator included in runtime bundle');
const fixture = JSON.parse(
  await readFile(resolve(project, 'generated/fixture/.flax-ffi-codegen.json'), 'utf8'),
);
await writeFile(
  resolve(project, 'selection.json'),
  JSON.stringify({ retained, profile: fixture.profile, sqliteCached: sqlite.cached }),
);
