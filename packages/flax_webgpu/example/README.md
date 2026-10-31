# Spectrum — WebGPU studio

Explore a GPU particle field, orbit a cube city, or move through a ray-marched prism.
Drag the viewport to reshape or orbit the scene. Play/pause, Center view, Reset studio
and Restart GPU also work from buttons. Animation starts paused and stops on disposal.

The example uses the same theme-aware page helpers and native appearance/FPS settings as
the Canvas playground. The native settings overlay measures the whole Flutter app; the
scene's own counter measures accepted WebGPU submissions. They are different metrics.
Controls below the viewport are available by scrolling.

| Scene     | GPU work                                              | Low / Balanced / High              |
| --------- | ----------------------------------------------------- | ---------------------------------- |
| Particles | Compute into storage, instanced additive billboards   | 8,192 / 65,536 / 262,144 particles |
| Cubes     | Indexed geometry, depth, 4× MSAA and palette sampling | 256 / 1,024 / 2,304 cubes          |
| Prism     | Fullscreen ray marching and palette sampling          | 32 / 64 / 96 maximum steps         |

Choose 960 × 540 or 1920 × 1080 rendering, independent of the displayed 880 × 495
logical-pixel viewport. Aurora, Violet and Ember sample the same persistent palette
texture. Cube submission switches between one instanced draw and one draw per object
without changing the geometry. Buffers, bind groups and pipelines are retained;
depth/MSAA textures are recreated only on resize. Animation performs no pixel readback.

## Run the macOS app

This example currently requires the package's **macOS 26+ arm64 development profile**,
prepared native payload and matching maintained engine. Complete the prerequisites in
the [package guide](../README.md#run-on-macos), then run from the repository root:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
export PATH="/Volumes/MAC_HOME/Develop/Flutter/flutter/bin:$PATH"
python3 packages/flax_webgpu/tool/run_macos.py --example \
  --flutter-root /Volumes/MAC_HOME/Develop/Flutter/flutter
```

Use `--build-only` to stop after building. The runner uses ordinary Flutter incremental
builds and native-asset packaging. The generated app and logs are in
`.local/webgpu-studio/`. The multi-platform example launcher and other WebGPU platforms
remain deferred. The regular aggregate playground does not require this optional
profile.

The Dart host lives in `app/`, outside the repository Pub workspace, like the FFI
example. JS remains in the pnpm workspace. Normal module preparation creates the
app-local native build dependency before that app's Pub resolution.

The separate [acceptance host](app/lib/acceptance.dart) and [acceptance JS](js/main.js)
retain the compute, mapped-buffer, Canvas coexistence and repeated-close checks. Run
`run_macos.py` without `--example` to use them.

The acceptance host explicitly approves only its loopback fixture origin and Wasm
decoding through `approveTrustedExamplePermissions`. It uses the host OS secure storage,
with no memory fallback. Set `FLAX_MACOS_TEAM` to an available development team when
running this host; the runner reuses the ordinary example engine/signing configuration
and its Keychain entitlement. See the
[Apple host setup](../../flax_secure_storage/README.md#apple-host-setup).

The earlier [advanced Three.js acceptance](validation/three-advanced-results.md) covers
loaded skeletal/Morph animation, Meshopt attributes/triangle indices and textured
glTF/GLB export/import with Core Fetch. The decoder runs without Workers; image export
uses the optional Canvas 2D provider.

The [expanded Worker acceptance](validation/three-worker-scenarios-results.md) adds real
Meshopt `useWorkers(2)`, concurrent DRACO/KTX2 tasks, alpha/nine-mip/Zstd textures, and
original animated glTF/GLB combining Meshopt geometry and KTX2. It checks actual GPU
pixels, corrupt resource rejection, pool reuse and repeated Session close, while
recording completed work separately from post-completion main-thread gaps.

The [shared browser API acceptance](validation/browser-base-apis-results.md) also runs a
Core-only FileReader/bitmaprenderer session, then verifies Three.js glTF/GLB
export/import, Fetch local resources and dynamic-offset bounds with the GPU sessions.

## Run the HTML counterpart

```sh
pnpm --filter @flax/example-webgpu run build:html
python3 -m http.server 8765 --bind 127.0.0.1 \
  --directory packages/flax_webgpu/example/browser/dist
```

Open `http://127.0.0.1:8765` in a hardware-accelerated WebGPU browser. The generated
`browser/dist/index.html` is self-contained. Serve it from localhost or HTTPS because
WebGPU requires a secure context. The browser uses the exact same
[renderer](js/src/studio.ts), [WGSL](js/src/shaders.ts) and
[frame statistics](js/src/metrics.ts); only its DOM controls differ. DOM APIs are not
added to the Flax runtime. Reset both studios to compare the same paused scene.

## Compare frame rates

Run **Run 8-second sample** on each page with matching scene, quality, resolution and
cube submission settings. Each sample warms up for 60 accepted frames and then measures
8 seconds, with at most three submissions in flight. The renderer counts accepted
submissions and GPU completion notifications separately; it does not turn rAF callbacks
into claimed rendered frames. Submission rejection or device errors stop the sample.

For the repeatable six-case macOS/Edge matrix, build both examples first, then:

```sh
node packages/flax_webgpu/tool/compare_example.mjs
```

This opens isolated temporary Edge profiles using CDP and runs Flax → HTML → HTML →
Flax. It calibrates equal window content size, verifies identical renderer fingerprints
and GPU resolution, checks rendered pixels outside measurement, and requires all six
native resource counters to return to zero. Profiles are removed afterward. Raw JSON,
logs and screenshots are written to `.local/webgpu-studio-comparison/`. The installed
Edge executable is `/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge`. Use
`--html-smoke` for a shorter three-scene browser check.

The [recorded result](validation/results.md) compares scene throughput on one M2 Max.
These counters do **not** measure screen presentations or input-to-display latency. GPU
completion includes JS notification delivery. A 120 Hz display also caps the frame loop,
so equal FPS is not proof of equal maximum GPU throughput.

```sh
pnpm --filter @flax/example-webgpu run typecheck
pnpm --filter @flax/example-webgpu test
```

The metric tests cover accepted frames, GPU completions crossing a sampling boundary,
and idle/invalid windows. The hardware matrix covers the actual shaders, resources,
resize, scene changes, asynchronous completion and session shutdown.

The later [canvas compatibility comparison](validation/canvas-compatibility-results.md)
uses the same renderer after the shared DOM/image API extension. Its active display was
60 Hz; keep it separate from the earlier 120 Hz receipt.

The [trace-guided optimization](validation/trace-optimization-results.md) uses a fresh
120 Hz baseline and matched Edge matrix. Live statistics use a local text binding; only
playback, measurement and error transitions rebuild the controls. The maintained engine
keeps ordinary FFI argument storage on the stack with a heap fallback for large
aggregates and signatures. Core retains its private frame/publication method handles
until session disposal.
