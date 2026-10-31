import assert from 'node:assert/strict';
import test from 'node:test';
import { createContext, runInContext } from 'node:vm';
import { buildHost, hostBundles } from '../../../../../tool/src/host_bundle.mjs';

const code = await buildHost(
  hostBundles.find((bundle) => bundle.base),
  {
    prepareOnly: true,
  },
);

test('shared-session host close aborts active Wasm compilation and cancels its reader', async () => {
  let streaming;
  const context = createContext({
    __flaxNativeWorker: {
      streaming: (callback) => {
        streaming = callback;
      },
    },
  });
  const install = runInContext(code, context);
  const host = install(context, (operation, ...args) => {
    if (operation === 'fetch' && args[0] === 'baseUrl') return 'data:,worker';
    if (operation === 'timeOrigin' || operation === 'now') return 0;
    throw new Error(operation);
  });
  const response = runInContext(
    `
    globalThis.cancelled = new Promise(resolve => globalThis.onCancel = resolve);
    globalThis.response = new Response(new ReadableStream({cancel: onCancel}), {
      headers: {'content-type':'application/wasm'},
    }); response;
  `,
    context,
  );
  let abort;
  const compilation = new Promise((_, reject) => {
    abort = reject;
  });
  const pumping = streaming(response, { write() {}, finish() {}, abort });
  host.close();
  await assert.rejects(compilation, (error) => error.name === 'AbortError');
  const reason = await runInContext('cancelled', context);
  assert.equal(reason.name, 'AbortError');
  await pumping;
  assert.equal(response.body.locked, false);
  host.close();
});
