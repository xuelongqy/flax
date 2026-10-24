import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { createHash } from 'node:crypto';

const [packageDirectory, dependencies, destination] = process.argv.slice(2);
if (!destination)
  throw new Error(
    'Usage: node tool/ffi_bundle.mjs <ffi-package> <dependency-root> <output.inc>',
  );
const result = await build({
  stdin: {
    contents: "import ffi from './index.js'; globalThis.ffi = ffi;",
    resolveDir: resolve(packageDirectory),
    sourcefile: 'flax-ffi-isolated.js',
  },
  bundle: true,
  write: false,
  platform: 'neutral',
  format: 'iife',
  target: 'es2020',
  minify: true,
  nodePaths: [resolve(dependencies, 'node_modules')],
  logLevel: 'silent',
});
const script = result.outputFiles[0].text;
const delimiter =
  'FFI' + createHash('sha256').update(script).digest('hex').slice(0, 10);
if (script.includes(`)${delimiter}"`))
  throw new Error('Invalid embedded-script delimiter');
await writeFile(
  destination,
  `static constexpr char ffiScript[] = R"${delimiter}(${script})${delimiter}";\n`,
);
// Record actual dependency integrity alongside the generated source.
const lock = JSON.parse(
  await readFile(resolve(dependencies, 'package-lock.json'), 'utf8'),
);
await writeFile(
  resolve(dirname(destination), 'javascript-dependencies.json'),
  JSON.stringify(lock.packages, null, 2) + '\n',
);
