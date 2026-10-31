import type {} from '@flax/core/host/worker';

onmessage = ({ data }) => postMessage(data, { transfer: [data.buffer] });
addEventListener('message', (event) => postMessage(event.data));
void fetch('data:text/plain,worker');
crypto.getRandomValues(new Uint8Array(4));
const cloned = structuredClone(new File(['worker'], 'worker.txt'));
new FileReaderSync().readAsText(cloned);
void navigator.hardwareConcurrency;
void WebAssembly.compileStreaming(fetch('data:application/wasm;base64,AGFzbQEAAAA='));
void WebAssembly.instantiateStreaming(Promise.resolve(new Response()), {});
void WorkerGlobalScope.prototype;
void DedicatedWorkerGlobalScope.prototype;
// @ts-expect-error Worker scope constructors are illegal.
new WorkerGlobalScope();
// @ts-expect-error Dedicated Worker scope constructors are illegal.
new DedicatedWorkerGlobalScope();
// @ts-expect-error Worker Navigator constructors are illegal.
new WorkerNavigator();
// @ts-expect-error Worker Location constructors are illegal.
new WorkerLocation();
if (self instanceof DedicatedWorkerGlobalScope) {
  const scope: DedicatedWorkerGlobalScope = self;
  scope.postMessage({ processors: scope.navigator.hardwareConcurrency });
}
setTimeout(close, 1);
// @ts-expect-error Dedicated Workers do not install a window.
void window;
// @ts-expect-error Dedicated Workers do not install a document.
void document;
// @ts-expect-error Dedicated Workers do not install animation frames.
requestAnimationFrame(() => {});

onunhandledrejection = (event) => {
  void event.promise;
  void event.reason;
  event.preventDefault();
};
onrejectionhandled = (event) => {
  void event.reason;
};
