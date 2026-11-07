import { runComparison } from './root.mjs';

globalThis.benchmarkReady = true;
globalThis.runBenchmark = async (config) => {
  if (
    !isSecureContext ||
    document.visibilityState !== 'visible' ||
    !document.hasFocus()
  )
    throw Error('A focused visible secure browser context is required');
  const longTasks = [];
  const phases = [];
  const supported = PerformanceObserver.supportedEntryTypes.includes('longtask');
  const observer = supported
    ? new PerformanceObserver((list) => {
        for (const entry of list.getEntries())
          longTasks.push({ startMs: entry.startTime, durationMs: entry.duration });
      })
    : null;
  observer?.observe({ type: 'longtask' });
  try {
    const result = await runComparison(
      {
        ...config,
        arm: 'main',
        baseUrl: new URL('./three/', location.href).href,
        sourceSha256: globalThis.__threeBenchmarkSourceSha256,
        sceneSha256: globalThis.__threeBenchmarkSceneSha256,
      },
      (width, height) => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        document.querySelector('canvas').replaceWith(canvas);
        // The main browser realm draws directly into the visible canvas's transferred surface.
        return canvas.transferControlToOffscreen();
      },
      (name, phase) => {
        const visibility = document.visibilityState,
          focused = document.hasFocus();
        if (
          ['throughput-and-tail', 'latency', 'complete'].includes(phase) &&
          (visibility !== 'visible' || !focused)
        )
          throw Error('The browser benchmark lost foreground focus');
        phases.push({ name, phase, rootMs: performance.now(), visibility, focused });
      },
      async () => {
        const bounds = document.querySelector('canvas').getBoundingClientRect();
        if (bounds.width !== 880 || bounds.height !== 495)
          throw Error('The browser canvas must display at 880x495');
        return { attached: true, logicalCanvas: [bounds.width, bounds.height] };
      },
    );
    return {
      ...result,
      userAgent: navigator.userAgent,
      visibility: document.visibilityState,
      focused: document.hasFocus(),
      viewport: {
        width: innerWidth,
        height: innerHeight,
        devicePixelRatio,
        screenWidth: screen.width,
        screenHeight: screen.height,
      },
      diagnostics: { longTasksSupported: supported, longTasks, phases },
    };
  } finally {
    observer?.disconnect();
  }
};
