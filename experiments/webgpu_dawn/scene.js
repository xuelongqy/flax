import {
  DynamicLibrary,
  toString as readCString,
} from '../../packages/flax_ffi/js/api.js';

const { handle, libraryPath, textureId } = globalThis.__dawnProbe;
const { Texture } = globalThis.__flaxModules.require('@flax/flutter/widgets');
const { mountRoot } = globalThis.__flaxModules.require('@flax/core/bindings');
mountRoot(Texture({ textureId }));
const library = new DynamicLibrary(libraryPath);
const native = library.getFunctions({
  dawn_probe_render: { arguments: ['uint64', 'float'], return: 'int32' },
  dawn_probe_stats: { arguments: ['uint64'], return: 'pointer' },
  dawn_probe_self_check: { return: 'pointer' },
  dawn_probe_error: { return: 'pointer' },
});
const report = (value) => globalThis.__dawnProbeReport(JSON.stringify(value));
const compute = native.dawn_probe_self_check();
if (compute === 0n) throw new Error(readCString(native.dawn_probe_error()));
const computed = JSON.parse(readCString(compute));
if (!computed || computed.backend !== 'Metal')
  throw new Error('Compute receipt has no Metal backend');
report({ kind: 'compute', ...computed });
let lastTime;
let frames = 0;
let submitted = 0;
let firstTime;
let lastReport = 0;
const intervals = [];
const callbackIntervals = [];
let lastCallback;
const calls = [];
function distribution(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const p = (fraction) =>
    sorted[Math.max(0, Math.ceil(sorted.length * fraction) - 1)] ?? 0;
  return { count: sorted.length, p50Ms: p(0.5), p95Ms: p(0.95), p99Ms: p(0.99) };
}
globalThis.__dawnProbeFlush = () => {
  const encoded = native.dawn_probe_stats(handle);
  if (encoded === 0n) throw new Error(readCString(native.dawn_probe_error()));
  const stats = JSON.parse(readCString(encoded));
  if (!stats || stats.backend !== 'Metal')
    throw new Error('Native frame receipt has no Metal backend');
  report({
    kind: 'frames',
    ...stats,
    jsFrames: frames,
    jsSubmitted: submitted,
    sceneElapsedMs: (lastTime ?? firstTime) - firstTime,
    jsFfiCall: distribution(calls),
    rafInterval: distribution(intervals),
    rafCallbackInterval: distribution(callbackIntervals),
    rafCallbackFps:
      (callbackIntervals.length * 1000) /
      callbackIntervals.reduce((total, value) => total + value, 0),
  });
};
function frame(time) {
  const callbackTime = performance.now();
  if (lastCallback !== undefined && submitted >= 31)
    callbackIntervals.push(callbackTime - lastCallback);
  lastCallback = callbackTime;
  if (firstTime === undefined) firstTime = time;
  if (lastTime !== undefined && submitted >= 31) intervals.push(time - lastTime);
  lastTime = time;
  const start = performance.now();
  const status = native.dawn_probe_render(handle, (time - firstTime) / 1000);
  if (status < 0) throw new Error(readCString(native.dawn_probe_error()));
  if (status > 0) {
    if (submitted >= 31) calls.push(performance.now() - start);
    submitted++;
  }
  if (intervals.length > 2048) intervals.shift();
  if (calls.length > 2048) calls.shift();
  if (callbackIntervals.length > 2048) callbackIntervals.shift();
  frames++;
  if (time - lastReport >= 1000) {
    globalThis.__dawnProbeFlush();
    lastReport = time;
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
