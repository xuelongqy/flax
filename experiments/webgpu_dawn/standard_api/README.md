# Standard WebGPU API comparison

This benchmark uses the current standard Flax WebGPU JS frontend and the same
`scene.mjs` in a Chromium browser. The browser selected for this run is Microsoft Edge;
results must not be labeled as a fresh Google Chrome run.

## Matched workload

- The original pinned 24-light WGSL scene, BGRA8/sRGB/opaque output, one uniform upload,
  one render pass and one triangle per frame.
- Three phases: 960 x 540, 640 x 360, 960 x 540. Both display the texture at 960 x 540
  logical pixels, with matching window viewport, scale and display.
- Eight seconds per phase and 31 submitted warmup frames. Each phase ends with one
  separate screenshot-verification draw.
- The throughput round performs no GPU timestamp or pixel readback. Snapshots occur
  after measurement. Completion Promises are observed without gating frames.
- GPU timestamps, detailed CPU profiling, native texture handoff and browser
  presentation tracing run separately to expose their measurement overhead.

`apiTotal` measures the same standard JS calls from uniform upload through queue
submission. Automatic canvas presentation is outside that JS interval. Its cost is
covered by the separate native handoff measurements. Fine-grained CPU samples add clock
calls and must not replace the throughput sample. `clockCallMs` calibrates the host
clock after each phase. All these CPU values include native WebGPU validation and
command encoding; a browser delta does not isolate the JS wrapper alone.

## Run

Use the [standard API runner](../../../packages/flax_webgpu/README.md) prerequisites,
including its verified SDK and isolated engine. The ordinary acceptance app and its
receipts remain separate.

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
python3 packages/flax_webgpu/tool/run_macos.py --benchmark \
  --flutter-root /Volumes/MAC_HOME/Develop/Flutter/flutter \
  --sdk "$PWD/.local/webgpu-dawn/sdk" --build-only
node experiments/webgpu_dawn/standard_api/compare.mjs --flax-only
```

The comparison runner's browser mode uses an isolated Edge profile and CDP; it must only
be run when that automation method is authorized. It never reads the daily browser
profile. `--edge-cdp` runs Flax/Edge/Edge/Flax performance samples, followed by separate
GPU, handoff, presentation and detailed CPU runs. Raw logs, traces, snapshots and JSON
stay under `.local/webgpu-api-comparison/`.

The optional native instrumentation is compiled only with `FLAX_WEBGPU_BENCHMARK=ON` and
records samples only with `FLAX_WEBGPU_BENCHMARK_METRICS=1`. The ordinary plugin build
defaults to OFF. Dawn producer callbacks and Flutter consumer command-buffer callbacks
record actual queue completion. Lease retirement must still pass the normal GPU-fence
checks.

## Latency endpoints

`completionPromise` uses the same `GPUQueue.onSubmittedWorkDone()` API in both hosts. It
includes the queue's GPU work and host delivery of the Promise, so it is a useful
observable completion latency, not isolated GPU execution time.

Native `publishToFlutterTextureRead` measures publication through the first Flutter
texture acquisition. `publishToFlutterGpuCompletion` ends at the consuming Metal command
buffer's completion callback. Neither endpoint is screen presentation. The browser trace
joins a render mark to its animation frame and presentation feedback. Those endpoints
must be reported separately; subtracting browser presentation feedback from Flutter GPU
completion would give a misleading gap. Physical pixel illumination, input-to-photon
latency, mobile platforms and full CTS are outside this benchmark.
