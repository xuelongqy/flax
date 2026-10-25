import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import crypto from 'node:crypto';
import { buildHost, hostBundles } from '../../tool/src/host_bundle.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const assets = path.join(root, 'examples/embedded');
const out = path.join(root, '.local/gallery-handoff');
fs.mkdirSync(out, { recursive: true });
const manifest = JSON.parse(
  fs.readFileSync(path.join(assets, 'assets/flax_modules/modules.json')),
);
const expected = manifest.modules.map(
  ({ specifier, owner, version, artifact, dependencies }) => ({
    specifier,
    owner,
    version,
    artifact,
    dependencies,
  }),
);
const inventory = `globalThis.__flaxModules.seal(${JSON.stringify(expected)})`;
const files = [manifest.bootstrap, ...manifest.modules.map((m) => m.asset)];
const hashes = Object.fromEntries(
  files.map((file) => [
    file,
    crypto
      .createHash('sha256')
      .update(fs.readFileSync(path.join(assets, file)))
      .digest('hex'),
  ]),
);
const source = fs.readFileSync(path.join(assets, 'assets/app.js'), 'utf8');
const text = [
  fs.readFileSync(path.join(assets, manifest.bootstrap), 'utf8'),
  ...manifest.modules.map((m) => fs.readFileSync(path.join(assets, m.asset), 'utf8')),
  `${inventory};`,
  'globalThis.__galleryModuleTimes = [];',
  ...expected.map(
    (m) =>
      `{const start = Date.now(); __flaxModules.require(${JSON.stringify(m.specifier)}); __galleryModuleTimes.push({module:${JSON.stringify(m.specifier)}, ms:Date.now()-start});}`,
  ),
  `globalThis.__galleryActivate = new Function(${JSON.stringify(source)});`,
  fs.readFileSync(path.join(root, 'experiments/gallery_handoff/probe.js'), 'utf8'),
  'undefined;',
].join('\n');
// This self-check must have no Dart host: module initialization is genuinely pure JS.
const context = vm.createContext({});
vm.runInContext(text, context, { filename: 'gallery-background.js' });
if (vm.runInContext('galleryProbe.child.value()', context) !== 42)
  throw new Error('Closure prototype failed');
const base = hostBundles.find((bundle) => bundle.base);
const baseSource = await buildHost(base);
const baseFactory = await buildHost(base, { prepareOnly: true });
if (typeof vm.runInContext(baseFactory, vm.createContext({})) !== 'function')
  throw new Error('Base preparation must return an installer without a Dart host');
fs.writeFileSync(
  path.join(out, 'base-prepared.json'),
  JSON.stringify({
    factory: baseFactory,
    sourceHash: crypto.createHash('sha256').update(baseSource).digest('hex'),
  }),
);
fs.writeFileSync(path.join(out, 'background.js'), text);
fs.writeFileSync(
  path.join(out, 'assets.json'),
  JSON.stringify(
    {
      inventory,
      hashes,
      manifestHash: crypto
        .createHash('sha256')
        .update(fs.readFileSync(path.join(assets, 'assets/flax_modules/modules.json')))
        .digest('hex'),
      sourceHash: crypto.createHash('sha256').update(source).digest('hex'),
      modules: expected.length,
      bytes: Buffer.byteLength(text),
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify({
    modules: expected.length,
    bytes: Buffer.byteLength(text),
    pureJavaScriptCheck: true,
  }),
);
