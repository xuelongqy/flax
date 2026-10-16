import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { startFlaxDev } from '../../../flax_build/js/src/dev.mjs';

const root = await mkdtemp(resolve(tmpdir(), 'flax-hmr-e2e-'));
const entry = resolve(root, 'src/main.ts');
const dependency = resolve(root, 'src/value.ts');
const writeVersion = (version, removed = false) =>
  writeFile(
    entry,
    `${removed ? '' : "import { value } from './value.ts';\n"}${version > 1 && !removed ? "import { Suffix } from './suffix.ts';\n" : ''}
class Label { static value() { return 'base'; } value() { return Label.value(); } }
Label.value = () => 'V${version}';
globalThis.__flaxHotTestLabel = Label;
globalThis.__flaxHotTestLabelInstance ??= new Label();
${removed ? '' : 'if (value === 2 && ' + version + " === 1) throw new Error('temporary HMR application error');"}
globalThis.__flaxHotTestRunApp(globalThis.__flaxHotTestText(Label.value() + ':' + ${removed ? '0' : 'value'}${version > 1 && !removed ? ' + new Suffix().value()' : ''}));\n`,
  );
await mkdir(resolve(root, 'src'));
await writeFile(dependency, 'export const value = 1;\n');
await writeFile(
  resolve(root, 'src/suffix.ts'),
  "export class Suffix { #text = ''; value() { return this.#text; } }\n",
);
await writeVersion(1);
let version = 1;
const dev = await startFlaxDev({
  root,
  entry: 'src/main.ts',
  out: 'assets/app.js',
  port: 0,
});
let rejected = 0;
dev.server.ws.on('flax:runtime-error', () => rejected++);
dev.server.middlewares.use(async (request, response, next) => {
  try {
    if (request.method === 'GET' && request.url === '/flax-test/source') {
      response.end(await readFile(dev.out, 'utf8'));
    } else if (request.method === 'POST' && request.url === '/flax-test/update') {
      await writeVersion(++version);
      response.end('updated');
    } else if (request.method === 'POST' && request.url === '/flax-test/reject') {
      await writeFile(dependency, 'export const value = 2;\n');
      response.end('updated');
    } else if (request.method === 'POST' && request.url === '/flax-test/remove') {
      await writeVersion(version, true);
      response.end('updated');
    } else if (request.method === 'GET' && request.url === '/flax-test/rejected') {
      response.end(String(rejected));
    } else {
      next();
    }
  } catch (error) {
    response.statusCode = 500;
    response.end(String(error));
  }
});
console.log(JSON.stringify({ url: `http://127.0.0.1:${dev.port}` }));
async function close() {
  await dev.server.close();
  await rm(root, { recursive: true, force: true });
}
process.once('SIGTERM', () => close().then(() => process.exit(0)));
process.once('SIGINT', () => close().then(() => process.exit(0)));
