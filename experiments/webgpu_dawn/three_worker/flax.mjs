import { CanvasView } from '@flax/core/bindings';
import { signal } from '@flax/core';
import { runApp, Center } from '@flax/flutter/widgets';
import { runComparison } from './root.mjs';

const report = (value) => __webGpuReport(JSON.stringify(value));
let displayedCanvas;
runComparison(
  {
    ...globalThis.__threeBenchmarkConfig,
    sourceSha256: globalThis.__threeBenchmarkSourceSha256,
    sceneSha256: globalThis.__threeBenchmarkSceneSha256,
  },
  (width, height) => {
    const canvas = new OffscreenCanvas(width, height);
    if (displayedCanvas) displayedCanvas.value = CanvasView(canvas);
    else {
      displayedCanvas = signal(CanvasView(canvas));
      runApp(Center({ child: displayedCanvas.bind }));
    }
    return canvas;
  },
  (name, phase) => report({ kind: 'phase', name, phase }),
  async (name) => {
    globalThis.__threeBenchmarkCapture = null;
    report({ kind: 'capture', name });
    const deadline = performance.now() + 10000;
    while (globalThis.__threeBenchmarkCapture === null && performance.now() < deadline)
      await new Promise(requestAnimationFrame);
    if (!globalThis.__threeBenchmarkCapture?.passed)
      throw Error('The benchmark canvas did not composite');
    return globalThis.__threeBenchmarkCapture;
  },
).then(
  (result) => report({ kind: 'complete', ...result }),
  (error) => report({ error: error.stack ?? String(error) }),
);
