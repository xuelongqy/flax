import { build } from 'esbuild';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { bundleOptionsFor } from '../../tool/src/bundle.mjs';

const root = process.cwd();
const output = resolve(root, '.local/canvas-native/afterglow');
await mkdir(output, { recursive: true });
if (process.argv.includes('--pacing')) {
  await build({
    ...(await bundleOptionsFor(resolve(root, 'packages/flax_canvas/example/js'))),
    entryPoints: ['experiments/canvas_native/pacing_native.ts'],
    outfile: resolve(output, 'pacing.js'),
  });
  process.exit(0);
}
await build({
  ...(await bundleOptionsFor(resolve(root, 'packages/flax_canvas/example/js'))),
  entryPoints: ['experiments/canvas_native/afterglow_native.ts'],
  outfile: resolve(output, 'native.js'),
});
const browser = await build({
  entryPoints: ['experiments/canvas_native/afterglow_browser.mjs'],
  bundle: true,
  write: false,
  format: 'iife',
  platform: 'browser',
  target: 'es2022',
});
await writeFile(
  resolve(output, 'index.html'),
  `<!doctype html><html lang="en"><meta charset="utf-8"><title>Afterglow frame comparison</title><style>body{background:#f5f5f0;color:#183c32;font:14px system-ui;margin:20px}canvas{width:880px;height:480px;max-width:100%;height:auto;display:block}pre{max-height:200px;overflow:auto}button{padding:12px;margin:12px 0}a{display:inline-block;padding:4px}</style><h1>Afterglow / same-workload comparison</h1><canvas width="880" height="480"></canvas><button>Run six cases</button><div id="downloads"></div><pre>30 warmup + 120 measured frames per case. Aurora, centered, phase = frame / 60. No pixel readback during timing.</pre><script>${browser.outputFiles[0].text.replaceAll('</script', '<\\/script')}</script></html>`,
);
