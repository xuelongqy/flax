import { runPhase } from './scene.mjs';
const shader = await (await fetch('../scene.wgsl')).text();
const canvas = document.querySelector('canvas');
globalThis.benchmarkReady = true;
globalThis.runBenchmark = async ({
  gpuTiming = false,
  durationMs = 8000,
  trace = false,
  detailed = false,
} = {}) => {
  if (!isSecureContext || document.visibilityState !== 'visible')
    throw Error('A visible secure context is required');
  const phases = [];
  for (const [width, height] of [
    [960, 540],
    [640, 360],
    [960, 540],
  ]) {
    const phase = await runPhase({
      canvas,
      shader,
      width,
      height,
      gpuTiming,
      durationMs,
      detailed,
      snapshot: () => canvas.toDataURL('image/png'),
      mark: trace ? (name) => performance.mark(name) : undefined,
    });
    const snapshot = phase.snapshot;
    const image = await createImageBitmap(await (await fetch(snapshot)).blob());
    const check = document.createElement('canvas');
    check.width = width;
    check.height = height;
    const context = check.getContext('2d', { willReadFrequently: true });
    context.drawImage(image, 0, 0);
    image.close();
    const rgba = context.getImageData(0, 0, width, height).data;
    let coloredPixels = 0;
    for (let i = 0; i < rgba.length; i += 4)
      if (rgba[i] > 30 && rgba[i] < 230 && rgba[i + 1] > 30 && rgba[i + 1] < 230)
        coloredPixels++;
    if (coloredPixels < 10000) throw Error('The browser canvas did not render');
    phases.push({
      ...phase.result,
      snapshot,
      coloredPixels,
      viewport: {
        logicalWidth: innerWidth,
        logicalHeight: innerHeight,
        devicePixelRatio,
        displayPhysicalWidth: screen.width * devicePixelRatio,
        displayPhysicalHeight: screen.height * devicePixelRatio,
      },
    });
    phase.close();
  }
  return {
    passed: true,
    userAgent: navigator.userAgent,
    shaderSha256: [
      ...new Uint8Array(
        await crypto.subtle.digest('SHA-256', new TextEncoder().encode(shader)),
      ),
    ]
      .map((b) => b.toString(16).padStart(2, '0'))
      .join(''),
    phases,
  };
};
