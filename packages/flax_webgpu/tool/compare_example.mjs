import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, unlink, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout as delay } from 'node:timers/promises';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const example = path.join(root, 'packages/flax_webgpu/example');
const output = path.join(root, '.local/webgpu-studio-comparison');
const nativeOutput = path.join(root, '.local/webgpu-studio');
const binary = path.join(
  nativeOutput,
  'app/build/macos/Build/Products/Release/flax_webgpu_example.app/Contents/MacOS/flax_webgpu_example',
);
const env = {
  ...process.env,
  TMPDIR: path.join(root, '.local/tmp'),
  TMP: path.join(root, '.local/tmp'),
  TEMP: path.join(root, '.local/tmp'),
};
for (const key of ['MTL_DEBUG_LAYER', 'MTL_SHADER_VALIDATION']) delete env[key];
await mkdir(output, { recursive: true });
const hash = createHash('sha256');
for (const name of ['studio.ts', 'shaders.ts', 'metrics.ts'])
  hash.update(await readFile(path.join(example, 'js/src', name)));
const sourceSha256 = hash.digest('hex');
let viewport = { width: 1180, height: 908, devicePixelRatio: 1 };
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
      }, 300000);
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

function child(command, args, options = {}) {
  const process = spawn(command, args, { env, ...options });
  const done = new Promise((resolve, reject) => {
    process.once('error', reject);
    process.once('exit', (code, signal) => resolve({ code, signal }));
  });
  return { process, done };
}
function verify(result, count = 6) {
  assert.equal(result.passed, true, JSON.stringify(result));
  assert.equal(
    result.sourceSha256,
    sourceSha256,
    'Rebuild the current renderer in both hosts',
  );
  assert.equal(result.cases.length, count);
  for (const c of result.cases) {
    assert.ok(c.submitted > 20);
    assert.ok(c.submittedFps > 0 && c.completedFps > 0);
    assert.ok(c.encodeMs.count === c.submitted);
    assert.ok((c.coloredPixels ?? c.colored) > 1000);
    assert.ok(
      Math.abs(c.submitted - c.completedWithinWindow) <= 3,
      'At most three GPU submissions can cross a measurement boundary',
    );
  }
}
async function flaxRun(name) {
  const receipt = path.join(nativeOutput, 'studio-results.json');
  await unlink(receipt).catch((e) => {
    if (e.code !== 'ENOENT') throw e;
  });
  const app = child(binary, [], {
    env: { ...env, FLAX_WEBGPU_STUDIO_BENCHMARK: '1' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const logs = [];
  app.process.stdout.on('data', (d) => logs.push(d));
  app.process.stderr.on('data', (d) => logs.push(d));
  const timeout = setTimeout(() => app.process.kill(), 300000);
  let exit;
  try {
    exit = await app.done;
  } finally {
    clearTimeout(timeout);
  }
  await writeFile(path.join(output, name + '.log'), Buffer.concat(logs));
  const result = JSON.parse(await readFile(receipt, 'utf8'));
  assert.equal(exit.code, 0, JSON.stringify({ exit, result }));
  verify(result);
  assert.deepEqual(result.retired, [0, 0, 0, 0, 0, 0]);
  viewport = result.cases[0].viewport;
  assert.deepEqual(
    result.cases.map((c) => c.logicalCanvas),
    Array(6).fill([880, 495]),
  );
  for (let i = 0; i < 6; i++)
    await writeFile(
      path.join(output, `${name}-${i}.png`),
      await readFile(path.join(nativeOutput, `studio-${i}.png`)),
    );
  const r = { ...result, collectedAt: new Date().toISOString() };
  await writeFile(path.join(output, name + '.json'), JSON.stringify(r, null, 2) + '\n');
  console.log(name + ': PASS');
  return r;
}
const server = createServer(async (req, res) => {
  if (!['/', '/index.html'].includes(new URL(req.url, 'http://localhost').pathname)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Cache-Control': 'no-store',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp',
  });
  res.end(await readFile(path.join(example, 'browser/dist/index.html')));
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const url = `http://127.0.0.1:${server.address().port}/`;
async function browserRun(name, smoke = false) {
  const profile = path.join(output, name + '-profile');
  await mkdir(profile, { recursive: true });
  const browser = child(
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    [
      '--user-data-dir=' + profile,
      '--remote-debugging-port=0',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-background-networking',
      '--disable-component-update',
      '--window-position=100,100',
      '--window-size=1180,1040',
      '--new-window',
      'about:blank',
    ],
    { stdio: 'ignore' },
  );
  let cdp;
  try {
    let endpoint;
    for (let i = 0; i < 200; i++) {
      try {
        const [port, route] = (
          await readFile(path.join(profile, 'DevToolsActivePort'), 'utf8')
        )
          .trim()
          .split('\n');
        endpoint = `ws://127.0.0.1:${port}${route}`;
        break;
      } catch {
        await delay(50);
      }
    }
    assert.ok(endpoint, 'Edge did not publish its endpoint');
    const socket = new WebSocket(endpoint);
    await new Promise((resolve, reject) => {
      socket.onopen = resolve;
      socket.onerror = reject;
    });
    cdp = new CDP(socket);
    const version = await cdp.call('Browser.getVersion');
    const { targetId } = await cdp.call('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.call('Target.attachToTarget', {
      targetId,
      flatten: true,
    });
    const evaluate = async (expression, awaitPromise = false) => {
      const r = await cdp.call(
        'Runtime.evaluate',
        { expression, returnByValue: true, awaitPromise },
        sessionId,
      );
      if (r.exceptionDetails) throw Error(JSON.stringify(r.exceptionDetails));
      return r.result.value;
    };
    await cdp.call('Page.enable', {}, sessionId);
    await cdp.call('Page.navigate', { url }, sessionId);
    let ready = false;
    for (let i = 0; i < 200; i++) {
      ready = await evaluate('globalThis.studioReady===true').catch(() => false);
      if (ready) break;
      await delay(50);
    }
    if (!ready)
      throw Error(
        'HTML GPU startup failed: ' +
          (await evaluate('document.querySelector("#status").textContent')),
      );
    await cdp.call('Page.bringToFront', {}, sessionId);
    const { windowId } = await cdp.call('Browser.getWindowForTarget', { targetId });
    for (let i = 0; i < 5; i++) {
      const size = await evaluate('({width:innerWidth,height:innerHeight})');
      if (size.width === viewport.width && size.height === viewport.height) break;
      const { bounds } = await cdp.call('Browser.getWindowBounds', { windowId });
      await cdp.call('Browser.setWindowBounds', {
        windowId,
        bounds: {
          left: 100,
          top: 100,
          width: bounds.width + viewport.width - size.width,
          height: bounds.height + viewport.height - size.height,
        },
      });
      await delay(100);
    }
    const interaction = await evaluate(
      `(async () => {
      const click = (selector) => document.querySelector(selector).click();
      click('[data-choice="scene"][data-index="1"]');
      click('[data-choice="quality"][data-index="0"]');
      click('[data-choice="resolution"][data-index="1"]');
      click('[data-choice="palette"][data-index="2"]');
      if (document.querySelector('canvas').width !== 1920) throw Error('Resize failed');
      click('#reset');
      for (const [key, index] of Object.entries({scene:0, quality:1, resolution:0, palette:0}))
        if (document.querySelector('[data-choice="'+key+'"][data-index="'+index+'"]').getAttribute('aria-pressed') !== 'true')
          throw Error('Reset failed: '+key);
      click('#motion');
      if (document.querySelector('#motion').textContent !== 'Pause motion') throw Error('Play failed');
      await new Promise(resolve => setTimeout(resolve,250));
      click('#motion');
      if (document.querySelector('#motion').textContent !== 'Play motion') throw Error('Pause failed');
      click('#restart');
      for (let i=0;i<200 && !globalThis.studioReady;i++) await new Promise(resolve => setTimeout(resolve,25));
      if (!globalThis.studioReady) throw Error('GPU restart failed');
      return true;
    })()`,
      true,
    );
    assert.equal(interaction, true);
    assert.equal(
      await evaluate(`(() => {
      const r=document.querySelector('canvas').getBoundingClientRect();
      return r.top>=0 && r.bottom<=innerHeight;
    })()`),
      true,
      'The complete benchmark canvas must be visible',
    );
    const canvasBounds = await evaluate(`(() => {
      const r=document.querySelector('canvas').getBoundingClientRect();
      return {x:r.left,y:r.top,width:r.width,height:r.height,scale:1};
    })()`);
    const beforeDrag = await cdp.call(
      'Page.captureScreenshot',
      { clip: canvasBounds },
      sessionId,
    );
    const pointer = { x: canvasBounds.x + 440, y: canvasBounds.y + 247 };
    await cdp.call(
      'Input.dispatchMouseEvent',
      { type: 'mouseMoved', ...pointer },
      sessionId,
    );
    await cdp.call(
      'Input.dispatchMouseEvent',
      { type: 'mousePressed', button: 'left', clickCount: 1, ...pointer },
      sessionId,
    );
    pointer.x += 260;
    pointer.y -= 100;
    await cdp.call(
      'Input.dispatchMouseEvent',
      { type: 'mouseMoved', buttons: 1, ...pointer },
      sessionId,
    );
    await cdp.call(
      'Input.dispatchMouseEvent',
      { type: 'mouseReleased', button: 'left', clickCount: 1, ...pointer },
      sessionId,
    );
    const afterDrag = await cdp.call(
      'Page.captureScreenshot',
      { clip: canvasBounds },
      sessionId,
    );
    assert.notEqual(
      beforeDrag.data,
      afterDrag.data,
      'Dragging a paused scene must change rendered pixels',
    );
    const options = smoke ? { indices: [0, 2, 4], duration: 1500 } : {};
    const result = await evaluate(
      `runStudioBenchmark(${JSON.stringify(options)})`,
      true,
    );
    verify(result, smoke ? 3 : 6);
    assert.deepEqual(result.viewport, viewport);
    const rect = await evaluate(
      '(()=>{const r=document.querySelector("canvas").getBoundingClientRect();return [r.width,r.height]})()',
    );
    assert.deepEqual(rect, [880, 495]);
    for (let i = 0; i < result.cases.length; i++) {
      const c = result.cases[i];
      await writeFile(
        path.join(output, `${name}-${i}.png`),
        Buffer.from(c.snapshot.split(',')[1], 'base64'),
      );
      delete c.snapshot;
    }
    const screenshot = await cdp.call(
      'Page.captureScreenshot',
      {
        captureBeyondViewport: true,
        clip: {
          x: 0,
          y: 0,
          width: viewport.width,
          height: await evaluate('document.documentElement.scrollHeight'),
          scale: 1,
        },
      },
      sessionId,
    );
    await writeFile(
      path.join(output, name + '-page.png'),
      Buffer.from(screenshot.data, 'base64'),
    );
    const r = {
      ...result,
      interaction,
      pointerPixelsChanged: true,
      version,
      collectedAt: new Date().toISOString(),
    };
    await writeFile(
      path.join(output, name + '.json'),
      JSON.stringify(r, null, 2) + '\n',
    );
    await cdp.call('Browser.close');
    await browser.done;
    console.log(name + ': PASS');
    return r;
  } finally {
    cdp?.close();
    if (browser.process.exitCode === null) {
      browser.process.kill();
      await browser.done;
    }
    await rm(profile, { recursive: true, force: true });
  }
}
try {
  if (process.argv.includes('--html-smoke')) await browserRun('html-smoke', true);
  else {
    const runs = [];
    runs.push({ kind: 'flax', result: await flaxRun('flax-1') });
    runs.push({ kind: 'html', result: await browserRun('html-1') });
    runs.push({ kind: 'html', result: await browserRun('html-2') });
    runs.push({ kind: 'flax', result: await flaxRun('flax-2') });
    const names = runs[0].result.cases.map((c) => c.name);
    for (const run of runs)
      assert.deepEqual(
        run.result.cases.map((c) => c.name),
        names,
      );
    await writeFile(
      path.join(output, 'comparison.json'),
      JSON.stringify(
        {
          passed: true,
          sourceSha256,
          viewport,
          browser: 'Microsoft Edge (Chromium)',
          protocol: {
            order: ['flax', 'html', 'html', 'flax'],
            warmupAcceptedFrames: 60,
            measuredMs: 8000,
            maxInFlight: 3,
            sceneReadbacksDuringMeasurement: 0,
            metric:
              'Accepted scene submissions and GPU completion notifications per second; not screen presentations.',
          },
          runs,
        },
        null,
        2,
      ) + '\n',
    );
    console.log('Matched Spectrum studio comparison: PASS');
  }
} finally {
  server.close();
}
