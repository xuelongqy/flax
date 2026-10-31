import { CanvasView } from '@flax/core/bindings';
import { runApp } from '@flax/flutter/widgets';
import { DynamicLibrary, toString } from '../../../packages/flax_ffi/js/api.js';
import { runPhase } from './scene.mjs';
const report = (value) => globalThis.__webGpuReport(JSON.stringify(value));
(async () => {
  const { width, height, gpuTiming, durationMs, detailed } =
    globalThis.__benchmarkConfig;
  const canvas = new OffscreenCanvas(width, height);
  runApp(CanvasView(canvas));
  const measured = await runPhase({
    canvas,
    shader: globalThis.__sceneWGSL,
    width,
    height,
    gpuTiming,
    durationMs,
    detailed,
  });
  // Let the final consumer complete outside measurement before reading private diagnostics.
  await new Promise((resolve) => setTimeout(resolve, 30));
  const library = DynamicLibrary.codeAsset('@flax/webgpu/dawn');
  const read = library.getFunction('flax_webgpu_benchmark_stats', {
    arguments: [],
    return: 'pointer',
  });
  const native = JSON.parse(toString(read()));
  library.close();
  report({ kind: 'rendered', ...measured.result, native });
})().catch((error) => report({ error: error.stack || String(error) }));
