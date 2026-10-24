import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { flaxEsbuildPlugin } from '../../../flax_build/js/src/esbuild.mjs';
import { prepareNativeAssets } from '../../../flax_build/js/src/native-assets.mjs';

const [project, output, debugOutput, sessionEnabled] = process.argv.slice(2);
const result = await build({
  absWorkingDir: resolve(project),
  entryPoints: ['index.js'],
  outfile: 'app.js',
  bundle: true,
  write: false,
  metafile: true,
  platform: 'neutral',
  format: 'iife',
  target: 'es2020',
  treeShaking: true,
  logLevel: 'silent',
  plugins: [flaxEsbuildPlugin(null, { nativeAssets: false })],
});
const retained = Object.values(result.metafile.outputs).flatMap((o) =>
  Object.entries(o.inputs)
    .filter(([, i]) => i.bytesInOutput > 0)
    .map(([p]) => p),
);
const enabled = retained.some((p) =>
  /node_modules\/@flax\/ffi\/(?:api|layout)\.js$/.test(p),
);
const bufferEnabled = retained.some((p) => p.endsWith('node_modules/buffer/index.js'));
const script = `(() => { try {
${result.outputFiles[0].text}
return JSON.stringify(globalThis.dlopenResult);
} catch (error) {
return JSON.stringify({ error: String(error), stack: error.stack });
} })()`;
if (debugOutput) await writeFile(debugOutput, script);
let sessionScript = '',
  shutdownScript = '',
  layoutScript = '';
if (sessionEnabled === 'true') {
  const session = await build({
    absWorkingDir: resolve(project),
    entryPoints: ['session-probe.js'],
    outfile: resolve(output, 'session.js'),
    bundle: true,
    write: false,
    platform: 'neutral',
    format: 'iife',
    target: 'es2020',
    logLevel: 'silent',
    plugins: [
      {
        name: 'probe-bindings',
        setup(builder) {
          builder.onResolve({ filter: /^flax:probe-bindings$/ }, () => ({
            path: 'bindings',
            namespace: 'probe-bindings',
          }));
          builder.onLoad({ filter: /./, namespace: 'probe-bindings' }, () => ({
            contents:
              "export const mountRoot = globalThis.__flaxModules.require('@flax/core/bindings').mountRoot;",
            loader: 'js',
          }));
        },
      },
      flaxEsbuildPlugin(null, {
        nativeAssets: { hostDirectory: resolve(project, '..') },
      }),
    ],
  });
  sessionScript = session.outputFiles[0].text;
  const shutdown = await build({
    absWorkingDir: resolve(project),
    entryPoints: ['shutdown-probe.js'],
    bundle: true,
    write: false,
    platform: 'neutral',
    format: 'iife',
    target: 'es2020',
    logLevel: 'silent',
    plugins: [flaxEsbuildPlugin(null, { nativeAssets: false })],
  });
  shutdownScript = shutdown.outputFiles[0].text;
  const layout = await build({
    absWorkingDir: resolve(project),
    stdin: {
      contents:
        "import {struct,sizeOf} from '@flax/ffi'; if(sizeOf(struct({value:'int32'}))!==4) throw new Error('Layout-only installation'); globalThis.__flaxModules.require('@flax/core/bindings').mountRoot({kind:'widget',type:'flax.core/flutter#type:SizedBox',ctor:'',args:{}});",
      resolveDir: resolve(project),
    },
    bundle: true,
    write: false,
    platform: 'neutral',
    format: 'iife',
    target: 'es2020',
    logLevel: 'silent',
    plugins: [flaxEsbuildPlugin(null, { nativeAssets: false })],
  });
  layoutScript = layout.outputFiles[0].text;
} else {
  await prepareNativeAssets({
    projectDirectory: project,
    hostDirectory: resolve(project, '..'),
    metafile: { outputs: {} },
  });
}
await writeFile(
  resolve(output, 'lib/session_selection.g.dart'),
  sessionEnabled === 'true'
    ? "export 'session_probe.dart';\n"
    : "Future<Map<String, Object?>> runSessionProbe(String source, String layout) async => throw StateError('Core Session is not selected');\n",
);
await writeFile(
  resolve(output, 'selection.json'),
  JSON.stringify({ enabled, bufferEnabled, retained }),
);
await writeFile(
  resolve(output, 'lib/selection.g.dart'),
  `const ffiEnabled = ${enabled};\n` +
    `const sessionScriptBase64 = '${Buffer.from(sessionScript).toString('base64')}';\n` +
    `const layoutScriptBase64 = '${Buffer.from(layoutScript).toString('base64')}';\n` +
    `const shutdownScriptBase64 = '${Buffer.from(shutdownScript).toString('base64')}';\n` +
    `const scriptBase64 = '${Buffer.from(script).toString('base64')}';\n`,
);
// Ensure the archive, rather than a workspace alias, supplied the public API.
if (enabled) {
  const metadata = JSON.parse(
    await readFile(resolve(project, 'node_modules/@flax/ffi/package.json')),
  );
  if (metadata.name !== '@flax/ffi') throw new Error('Wrong FFI package');
}
