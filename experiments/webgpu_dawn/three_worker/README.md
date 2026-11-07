# Three.js main/Worker/Edge comparison

Measured macOS results and their collection limits are in [RESULTS.md](RESULTS.md).

The same neutral `scene.js` bundle runs Three.js 0.186.1 WebGPURenderer in the Flax root
realm, a real Flax Dedicated Worker, and the Microsoft Edge root realm. The root control
bundle does not import Three.js. One rendering Worker lives for the process; each case
creates and disposes its own device, renderer, scene and displayed canvas. The KTX2
loader uses one real decoder Worker in every arm, nested inside the rendering Worker in
that arm. No DOM shim, per-draw proxy or upstream/runtime patch is involved.

The three fixed cases are 960x540/64 models, 1920x1080/64 models and 1920x1080/512
models. Each set of four independently drawn models contains two original textured GLB
cubes, one skinned panel and one morph panel. The animated panels use the original
256x256 UASTC/Zstd KTX2 texture and its nine mip levels. All cases add a PBR floor, one
directional light with a 1024x1024 PCF shadow map and TSL Bloom. Animation uses elapsed
wall time; fixed-pose verification uses seconds 0 and 0.5. These small original fixtures
do not establish large production-model performance.

The logical canvas is 880x495 in every arm. Backing dimensions vary by case and renderer
pixel ratio stays one. BC compression, BGRA8 output, antialiasing off, opaque output,
camera, materials, lighting and animation equations match. Actual draw/triangle and
resource counts are retained, rather than inferred from object counts. The original
fixture assets remain under `packages/flax_webgpu/example/fixtures/three`.

## Measurement protocol

1. Record module import, asset/decoder load and the first completed GPU frame
   separately. Only the first case in a process includes fresh module/process
   initialization. Later cases initialize a new renderer, device and resources with a
   warm module cache. OS and Metal caches are uncontrolled. The host-main-to-warmup
   stamp also includes the cold observation tail. Observe root callback gaps from before
   producer creation through its first GPU acknowledgement and a separate 300 ms tail,
   before starting warmup. Warm each case for at least 3000 ms **and** 120 successful
   scene renders.
2. Render for 20000 ms. Record successful scene renders, producer-local frame starts and
   synchronous scene-update/render cost, with one independent root rAF observer. No
   per-frame completion callbacks, messages, readbacks or statistics UI are added.
   Finish with a queue drain. Rendered FPS counts scene submissions, not screen presents
   or completed-within-window frames. Producer occupancy includes synchronous encoding.
3. Continue the root observer for 300 ms after the producer window. Report this tail
   separately. Large result transfer, serialization, quantile calculation and pixel
   verification start only after observation ends. Root gaps are sampled callback gaps,
   not interchangeable with Flutter frames or browser Long Tasks. Both cold and warm
   observers anchor their first/last samples to observation boundaries and retain
   combined-window gaps alongside the window/tail split. The 1.5-period threshold uses
   the nominal display refresh period and counts callback gaps.
4. In a separate 10000 ms round, schedule a camera update every 100 ms on the root
   clock. Apply one queued ID per scene frame, then acknowledge its queue completion.
   Register all 99 deadlines before the producer starts (19 in a 2000 ms smoke round),
   and retain late dispatches even when the root resumes after the measurement window.
   Worker acknowledgements include both message handoffs. Retain deadline-to-dispatch,
   dispatch-to-ack and deadline-to-ack P50/P95, raw observations and all counts. Drain
   late queued IDs through real renders and completion barriers; never discard slow
   observations. This is scheduled-update-to-GPU-completion acknowledgement, not
   input-to-photon or display latency.
5. Capture PNGs at both fixed poses and an actual Flutter-composited canvas outside the
   timed rounds. All producers copy their current BGRA8 canvas texture to a mapped
   buffer before yielding, convert rows to RGBA, and encode PNG with the pinned Three.js
   fflate library. This avoids host-specific canvas image-export behavior; no readback
   or CPU encoding occurs during performance observation. Dispose every case and require
   ten GPU and two Worker counters to reach zero after Session close. Keep Flutter
   FrameTiming/Timeline stamps and Edge Long Tasks as separate host-specific
   diagnostics. Verify the native timing clock domains before using phase stamps to
   filter FrameTiming.

Foreground readiness requires an exact PID/bundle match, one activation request, and
observed finished-launching, active/frontmost PID and a normal visible layer-zero window
within two seconds. An accepted request alone cannot establish readiness. A passive
NSWorkspace observer starts before any test process and records initial focus plus
activation, deactivation and termination notifications. It performs no timed window
polling or refocusing. Native phase records include epoch and Timeline stamps; failures
retain the attempted phase, case and earlier history. After observation, validation
reconstructs the owned frontmost PID at the interval start and rejects another PID's
activation within the interval. Native intervals cover first cold/readiness through the
complete phase; Edge intervals cover the benchmark call through final CDP focus checks.
Focus restoration after those endpoints is excluded. Failed readiness or focus evidence
stops the run and preserves its diagnostics without performance acceptance.

Run independent processes in the balanced order ABC, BCA, CAB, where A=Flax main, B=Flax
Worker and C=Edge. Reverse case order for the middle round. Retain run-level
quantiles/ranges; do not pool frames into fictitious independent confidence intervals.
Record foreground state, display/refresh rate, viewport/DPR, power, versions, native
hashes and quiet-process snapshots for each process. A Worker FPS improvement is not
required: lower root callback tails can establish useful offloading. If the measured
endpoints tie, report no demonstrated benefit at that load.

## Build and run

Use the maintained WebGPU runner prerequisites and set `FLUTTER_ROOT` to the checkout
with the matching Worker engine built under `engine/src/out`.

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
python3 packages/flax_webgpu/tool/run_macos.py --three-worker-benchmark \
  --flutter-root "$FLUTTER_ROOT" --build-only
```

The native app accepts `FLAX_THREE_CONFIG` JSON. Normal runs use fixed full durations;
`{"arm":"worker","caseOrder":[0,1,2]}` selects the rendering Worker. `arm: "main"`
selects the root realm. Explicit smoke mode enables shorter windows, for example
`{"arm":"main","smoke":true,"throughputMs":2000,"latencyMs":2000}`. Warmup remains the
full 3000 ms/120-frame requirement. The application writes `application.json` and three
`*-flutter.png` files to its baked `WEBGPU_OUTPUT` directory, normally
`.local/webgpu-three-worker-benchmark`.

Build the browser control entry and copy the exact staged native producer bytes:

```sh
node experiments/webgpu_dawn/three_worker/build_browser.mjs \
  .local/webgpu-three-worker-benchmark/browser \
  .local/webgpu-three-worker-benchmark/app/assets/three
```

Serve that output directory over a loopback HTTP origin with the correct JavaScript,
Wasm and asset MIME types. Use a visible Edge window on the same display, matching the
native viewport and logical canvas. Wait for `globalThis.benchmarkReady === true`, then
call `await runBenchmark({refreshRate: 60, caseOrder: [0,1,2]})`, supplying the actual
display refresh rate. The same explicit smoke options work in that hook. Source and
staged scene SHA-256 values are embedded in both control bundles and returned in each
receipt; the controller must verify the actual staged bytes before and after running.

Raw results and native/browser execution commands belong in the task's external review
evidence. This directory contains the reproducible workload and protocol, not invented
performance numbers or physical display-latency claims.
