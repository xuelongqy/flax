import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

const experiment = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(experiment, '../..');
const output = path.join(root, '.local/webgpu-dawn/chrome');
const probeOutput = path.dirname(output);
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const executable = path.join(
  probeOutput,
  'FlaxDawnProbe.app/Contents/MacOS/flax_dawn_probe',
);
const shaderSha256 = createHash('sha256')
  .update(await readFile(path.join(experiment, 'scene.wgsl')))
  .digest('hex');
const environment = {
  ...process.env,
  TMPDIR: path.join(root, '.local/tmp'),
  TMP: path.join(root, '.local/tmp'),
  TEMP: path.join(root, '.local/tmp'),
};
for (const name of [
  'MTL_DEBUG_LAYER',
  'MTL_SHADER_VALIDATION',
  'FLUTTER_ENGINE',
  'FLAX_DAWN_GPU_TIMING',
])
  delete environment[name];
await mkdir(output, { recursive: true });
await mkdir(environment.TMPDIR, { recursive: true });
let viewport = { logicalWidth: 1100, logicalHeight: 700 };

class CDP {
  constructor(socket) {
    this.socket = socket;
    this.next = 0;
    this.pending = new Map();
    this.events = new Map();
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        clearTimeout(pending.timeout);
        if (message.error) pending.reject(Error(JSON.stringify(message.error)));
        else pending.resolve(message.result);
      } else {
        for (const callback of this.events.get(message.method) ?? [])
          callback(message.params);
      }
    };
  }
  call(method, params = {}, sessionId) {
    return new Promise((resolve, reject) => {
      const id = ++this.next;
      const timeout = setTimeout(() => {
        this.pending.delete(id);
        reject(Error(`CDP timed out: ${method}`));
      }, 90000);
      this.pending.set(id, { resolve, reject, timeout });
      this.socket.send(JSON.stringify({ id, method, params, sessionId }));
    });
  }
  once(name) {
    return new Promise((resolve) => this.events.set(name, [resolve]));
  }
  close() {
    for (const pending of this.pending.values()) {
      clearTimeout(pending.timeout);
      pending.reject(Error('CDP closed'));
    }
    this.pending.clear();
    this.socket.close();
  }
}

function child(command, arguments_, options = {}) {
  const process = spawn(command, arguments_, { env: environment, ...options });
  const done = new Promise((resolve, reject) => {
    process.once('error', reject);
    process.once('exit', (code, signal) => resolve({ code, signal }));
  });
  return { process, done };
}

const allowed = new Map([
  ['/', ['chrome.html', 'text/html']],
  ['/chrome.html', ['chrome.html', 'text/html']],
  ['/chrome.js', ['chrome.js', 'text/javascript']],
  ['/scene.wgsl', ['scene.wgsl', 'text/plain']],
]);
const server = createServer(async (request, response) => {
  const entry = allowed.get(new URL(request.url, 'http://localhost').pathname);
  if (!entry) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, {
    'Content-Type': entry[1],
    'Cache-Control': 'no-store',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp',
  });
  response.end(await readFile(path.join(experiment, entry[0])));
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const url = `http://127.0.0.1:${server.address().port}/chrome.html`;

async function flaxRun(name, gpuTiming = false) {
  const file = path.join(probeOutput, 'application.json');
  await unlink(file).catch((error) => {
    if (error.code !== 'ENOENT') throw error;
  });
  const log = [];
  const app = child(executable, [], {
    env: { ...environment, FLAX_DAWN_GPU_TIMING: gpuTiming ? '1' : '0' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  app.process.stdout.on('data', (data) => log.push(data));
  app.process.stderr.on('data', (data) => log.push(data));
  const timer = setTimeout(() => app.process.kill(), 90000);
  let exit;
  try {
    exit = await app.done;
  } finally {
    clearTimeout(timer);
  }
  await writeFile(path.join(output, `${name}.log`), Buffer.concat(log));
  assert.equal(exit.code, 0, `${name}: ${JSON.stringify(exit)}`);
  const result = JSON.parse(await readFile(file, 'utf8'));
  assert.equal(result.passed, true);
  for (const phase of result.phases) {
    assert.equal(phase.renderGpuTimingEnabled, gpuTiming);
    assert.equal(phase.warmupSubmittedFrames, 31);
    assert.equal(phase.error, '');
    assert.equal(phase.retirementErrors, 0);
    if (gpuTiming) assert.ok(phase.renderGpuPass.count > 30);
    else assert.equal(phase.gpuTimestampReadbacks, 0);
  }
  viewport = result.phases[0].viewport;
  await writeFile(
    path.join(output, `${name}.json`),
    JSON.stringify(result, null, 2) + '\n',
  );
  console.log(`${name}: PASS`);
  return result;
}

async function chromeRun(name, { gpuTiming = false, trace = false } = {}) {
  const profile = path.join(output, `${name}-profile`);
  await mkdir(profile, { recursive: true });
  await unlink(path.join(profile, 'DevToolsActivePort')).catch((error) => {
    if (error.code !== 'ENOENT') throw error;
  });
  const browser = child(
    chrome,
    [
      `--user-data-dir=${profile}`,
      '--remote-debugging-port=0',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-background-networking',
      '--disable-component-update',
      '--window-position=100,100',
      '--window-size=1100,840',
      '--new-window',
      'about:blank',
    ],
    { stdio: 'ignore' },
  );
  let cdp;
  try {
    let endpoint;
    for (let attempt = 0; attempt < 300; attempt++) {
      try {
        const [port, endpointPath] = (
          await readFile(path.join(profile, 'DevToolsActivePort'), 'utf8')
        )
          .trim()
          .split('\n');
        endpoint = `ws://127.0.0.1:${port}${endpointPath}`;
        break;
      } catch {
        await delay(50);
      }
    }
    assert.ok(endpoint, 'Chrome did not publish a CDP endpoint');
    const socket = new WebSocket(endpoint);
    await new Promise((resolve, reject) => {
      socket.onopen = resolve;
      socket.onerror = reject;
    });
    cdp = new CDP(socket);
    const version = await cdp.call('Browser.getVersion');
    const system = await cdp.call('SystemInfo.getInfo');
    assert.equal(system.gpu.featureStatus.webgpu, 'enabled');
    const { targetId } = await cdp.call('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.call('Target.attachToTarget', {
      targetId,
      flatten: true,
    });
    const evaluate = async (expression, awaitPromise = false) => {
      const result = await cdp.call(
        'Runtime.evaluate',
        { expression, returnByValue: true, awaitPromise },
        sessionId,
      );
      if (result.exceptionDetails) throw Error(JSON.stringify(result.exceptionDetails));
      return result.result.value;
    };
    await cdp.call('Page.enable', {}, sessionId);
    await cdp.call('Page.navigate', { url }, sessionId);
    let ready = false;
    for (let attempt = 0; attempt < 200; attempt++) {
      ready = await evaluate('globalThis.benchmarkReady === true').catch(() => false);
      if (ready) break;
      await delay(50);
    }
    assert.ok(ready, 'Chrome benchmark module did not load');
    await cdp.call('Page.bringToFront', {}, sessionId);
    const { windowId } = await cdp.call('Browser.getWindowForTarget', { targetId });
    await cdp.call('Browser.setWindowBounds', {
      windowId,
      bounds: { windowState: 'normal' },
    });
    for (let attempt = 0; attempt < 5; attempt++) {
      const size = await evaluate('({width:innerWidth,height:innerHeight})');
      if (
        size.width === viewport.logicalWidth &&
        size.height === viewport.logicalHeight
      )
        break;
      const { bounds } = await cdp.call('Browser.getWindowBounds', { windowId });
      await cdp.call('Browser.setWindowBounds', {
        windowId,
        bounds: {
          left: 100,
          top: 100,
          width: Math.round(bounds.width + viewport.logicalWidth - size.width),
          height: Math.round(bounds.height + viewport.logicalHeight - size.height),
        },
      });
      await delay(100);
    }
    let traceComplete;
    if (trace) {
      traceComplete = cdp.once('Tracing.tracingComplete');
      await cdp.call('Tracing.start', {
        transferMode: 'ReturnAsStream',
        categories:
          'benchmark,cc,viz,gpu,blink.user_timing,devtools.timeline,disabled-by-default-devtools.timeline.frame',
      });
    }
    const result = await evaluate(
      `globalThis.runBenchmark(${JSON.stringify({
        gpuTiming,
        trace,
        durationMs: trace ? 3000 : 8000,
      })})`,
      true,
    );
    assert.equal(result.passed, true);
    assert.equal(result.shaderSha256, shaderSha256);
    for (let index = 0; index < result.phases.length; index++) {
      const phase = result.phases[index];
      assert.equal(phase.viewport.logicalWidth, viewport.logicalWidth);
      assert.equal(phase.viewport.logicalHeight, viewport.logicalHeight);
      if (viewport.devicePixelRatio !== undefined) {
        assert.equal(phase.viewport.devicePixelRatio, viewport.devicePixelRatio);
        assert.equal(
          phase.viewport.displayPhysicalWidth,
          viewport.displayPhysicalWidth,
        );
        assert.equal(
          phase.viewport.displayPhysicalHeight,
          viewport.displayPhysicalHeight,
        );
      }
      const data = Buffer.from(phase.snapshot.split(',')[1], 'base64');
      assert.ok(data.length > 4000, 'Chrome snapshot is unexpectedly small');
      await writeFile(path.join(output, `${name}-${index}.png`), data);
      delete phase.snapshot;
    }
    let tracePath;
    if (trace) {
      await cdp.call('Tracing.end');
      const { stream } = await traceComplete;
      const chunks = [];
      for (;;) {
        const part = await cdp.call('IO.read', { handle: stream });
        chunks.push(Buffer.from(part.data, part.base64Encoded ? 'base64' : 'utf8'));
        if (part.eof) break;
      }
      await cdp.call('IO.close', { handle: stream });
      tracePath = path.join(output, `${name}-trace.json`);
      await writeFile(tracePath, Buffer.concat(chunks));
    }
    const receipt = { ...result, version, system, tracePath };
    await writeFile(
      path.join(output, `${name}.json`),
      JSON.stringify(receipt, null, 2) + '\n',
    );
    await cdp.call('Browser.close');
    await browser.done;
    console.log(`${name}: PASS`);
    return receipt;
  } finally {
    cdp?.close();
    if (browser.process.exitCode === null) {
      browser.process.kill();
      await browser.done;
    }
  }
}

try {
  if (process.argv.includes('--browser-only')) {
    await chromeRun('chrome-smoke');
  } else {
    const runs = [];
    runs.push({ kind: 'flax', result: await flaxRun('flax-1') });
    runs.push({ kind: 'chrome', result: await chromeRun('chrome-1') });
    runs.push({ kind: 'chrome', result: await chromeRun('chrome-2') });
    runs.push({ kind: 'flax', result: await flaxRun('flax-2') });
    const flaxGpu = await flaxRun('flax-gpu', true);
    const chromeGpu = await chromeRun('chrome-gpu', { gpuTiming: true });
    const chromeTrace = await chromeRun('chrome-trace', { trace: true });
    const result = {
      shaderSha256,
      browserSourcesSha256: Object.fromEntries(
        await Promise.all(
          ['chrome.js', 'chrome.html', 'compare_chrome.mjs', 'scene.wgsl'].map(
            async (name) => [
              name,
              createHash('sha256')
                .update(await readFile(path.join(experiment, name)))
                .digest('hex'),
            ],
          ),
        ),
      ),
      runs,
      gpuTiming: { flax: flaxGpu, chrome: chromeGpu },
      chromeTrace,
      flaxProvenance: JSON.parse(
        await readFile(path.join(probeOutput, 'provenance.json'), 'utf8'),
      ),
      protocol: {
        order: ['flax', 'chrome', 'chrome', 'flax'],
        warmupSubmittedFrames: 31,
        performanceUsesReadbacks: false,
        gpuTimestampsSeparate: true,
        chromeCompletionPromisesGateSubmissions: false,
        nativeProducerCompletionBackpressure: true,
        physicalScreenLatencyMeasured: false,
        cpuCompletionEndpoints:
          'Flax native producer callback; Chrome GPUQueue Promise. Neither includes screen presentation.',
      },
    };
    await writeFile(
      path.join(output, 'comparison.json'),
      JSON.stringify(result, null, 2) + '\n',
    );
    console.log('Comparison: PASS');
  }
} finally {
  server.close();
}
