# Worker application loading and decoder acceptance

Status: macOS arm64 acceptance passed; uncommitted. No commit, push or publication.

The [receipt](results-macos-compatibility.json) records source hashes, engine
provenance, the complete application result and the unchanged message benchmark. This
extends the [initial profile](../../docs/architecture/dedicated-workers.md), without
changing native ABI 2, Worker extension 1 or UI protocol 24.

## Application resources

`new Worker('./worker.js')` resolves against an application's supplied entry URI.
Application flax/file entries, ESM dependencies and Worker-local GET/HEAD Fetch for
JS/JSON/Wasm use the Session's existing module source loader. Manifest declarations,
root checks and symlink protection remain owned by that loader. Worker import maps
inherit the parent's URI mappings; Flutter SDK namespaces and UI bindings are not
installed in Workers.

The AssetBundle and source-loader closure stay on the parent isolate. Source/resource
bytes use Dart transferable data; application `postMessage` still uses V8 serialization
and native BackingStore ownership. Closing or terminating cancels pending parent loads,
discards late completions and retires native packets. HTTP module transport stays in the
Worker and needs no disk-cache plugin. Its redirects and cancellation remain covered.

Local resource Fetch uses the module loader's existing allowlist, rather than granting
general filesystem access. It returns complete resource bytes, not a new streaming I/O
implementation. Wasm uses Fetch ArrayBuffer bytes followed by `compile`/`instantiate`;
`compileStreaming` and `instantiateStreaming` are not installed.

## Error and Promise diagnostics

Worker error events preserve available original URLs and line/column positions from
captured Error stacks. Primitive throws without captured frames report unknown
positions, rather than the host reporting helper. JS callback handlers retain the
original error object; native evaluation failures may supply only scalar diagnostics.
Parent notifications carry scalar diagnostics; they do not share an Error object across
isolates. Source maps are not resolved by this change.

Native rejection callbacks queue Promise/reason references. Host checkpoints dispatch
`unhandledrejection` and `rejectionhandled` with Worker-local identity. Catches added in
the same microtask checkpoint suppress the former; later catches preserve the original
reason. `preventDefault()` suppresses default logging. Native records are drained and
released, and reported promises are tracked weakly. Promise is not replaced or patched.

## Real KTX2Loader Workers and GPU upload

Pinned Three.js 0.186.1 runs its original KTX2Loader and Basis Wasm transcoder. Two
original opaque-red 8x8 fixtures cover ETC1S and UASTC. Their generator, fixed encoder
revision, arguments, hashes and Apache-2.0 decoder license live with the
[fixtures](../../packages/flax_webgpu/example/fixtures/three/README.md).

The macOS arm64 Release/AOT application passes 90 records across three Sessions and 360
existing rendering frames. Six KTX2 Workers execute twelve decodes, using independent
inputs for cold and reused tasks. Each input detaches; output bytes match on reuse. Both
encodings transcode to BC7 on the tested Metal device. Compressed textures upload,
render and read back red center pixels: `[253, 0, 0, 255]` for ETC1S and
`[255, 0, 0, 255]` for UASTC. Native GPU counters return to zero after every Session.
DRACO and existing model, lighting, shadow, postprocessing, skeletal/Morph, Meshopt and
textured-export checks also pass.

Observed KTX2 cold decode is 74.640–79.330 ms and reuse is 0.334–0.451 ms. These tiny
fixtures establish correctness and actual Worker execution, not production throughput.
UASTC disables Zstandard; that decompression path is not covered.

## Message performance guard

One fresh Release/AOT process runs the existing benchmark without simultaneous builds,
tests or profiling. It verifies buffer contents, transfer detachment and native
retirement. This is a regression observation, not a new matched A/B or statistical
performance claim.

| Metric                                          |           Observed |
| ----------------------------------------------- | -----------------: |
| First Worker creation                           |         115.017 ms |
| Repeated new Worker median                      |          27.945 ms |
| Small message round-trip median                 |           0.065 ms |
| 16 MiB copy round-trip median                   |           5.252 ms |
| 16 MiB transfer round-trip median               |           0.085 ms |
| 200 transfers including the final 30 ms wait    |         172.004 ms |
| Sustained transfer P99 / maximum                | 29.605 / 44.103 ms |
| Maximum main-timer gap in the fixed observation |          47.687 ms |

Channels and Worker runtimes are zero after Session close. The prior
[GC tradeoff](release-results.md) still applies; this change does not tune GC or repeat
its peak-memory A/B measurement. Fast median transfers do not establish a frame budget.

## Validation boundary

Three new integration cases bring the Worker suite to 12 tests: application/file loading
and root restrictions, pending-load cancellation, and diagnostics/rejection behavior.
The existing HTTP case also checks POST Request ownership. Runtime/GC has 59 tests;
host/Core Canvas/Canvas has 22/3/395; Core/Canvas/WebGPU JS has 134/35/6. These are 666
tests counted once, separately from the 90 application records and performance run.
Scoped Dart analysis, TypeScript, generated host scripts/public types/module delivery
and FFI reproducibility are checked separately.

Mobile, complete AOT exception coverage, KTX2 cubemaps/arrays/HDR, Zstandard and large
production textures remain unvalidated. Blob/File cloning, MessagePort, nested Workers,
shared memory and synchronous network importScripts were not added.
