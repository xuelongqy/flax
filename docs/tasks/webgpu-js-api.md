# Standard WebGPU JS integration

Status: shared Core canvas, first macOS Dawn JS profile and normal native packaging
implemented; local combined-engine macOS acceptance passes and complete conformance
remains open. See [ADR 0052](../decisions/0052-shared-canvas-and-webgpu.md), the
[current architecture](../architecture/webgpu.md) and
[package instructions](../../packages/flax_webgpu/README.md).

## Implemented scope

Core owns the single OffscreenCanvas constructor, context selection, dimensions, minimal
navigator holder and CanvasView. Canvas 2D remains an independent provider, with its
public CanvasView import preserved. A GPU-only session needs no 2D plugin.

The optional `FlaxWebGpuPlugin` selects private host JS from `@flax/webgpu-runtime`;
`@flax/webgpu` is declaration-only. Standard GPU objects use the existing shared
JSI/libffi path to pinned Dawn privately, with generated layouts and descriptor
metadata. This avoids a second engine binding framework and keeps raw pointers out of
application code. Native async results return through the existing checkpoint.

The macOS profile presents pooled IOSurfaces through producer/consumer GPU fences and
Core's complete-checkpoint hook. It preserves per-frame logical texture expiry without
CPU readback. Mapped ranges have explicit native shadow storage and a private V8
protection/detachment extension; ordinary shared Dart access cannot escape that
lifetime.

Dawn is pinned to `5fbd545292cb7a4a9a275e322abec6007ffe2ae8`, GPUWeb IDL to
`22507c95ccb9e705eddc7cab8f28aa46b134f5fe`, and the intended CTS revision to
`cc11994e92512d0a3715e9d28876ec48accb971a`. Generation verifies the Dawn header and IDL
hashes before emission. The acceptance runner can bundle selected unmodified CTS groups
using `--cts-root`; full CTS conformance remains open.

## Evidence

The
[current macOS receipt](../../packages/flax_webgpu/validation/canvas-compatibility-macos.json)
distinguishes real public-API compute/render/session acceptance from focused JS, Canvas
and runtime gates. The separate acceptance scene runs at 960 x 540 for three sessions,
including one with WebGPU only, and checks mapped views, async pipelines/errors, device
loss and native resource retirement. Core-only and existing 2D pixel/state tests remain
separate gates.

The [original experiment](../../experiments/webgpu_dawn/README.md) contains earlier
Chrome and texture-handoff measurements. Its FFI frontend and historical timing values
do not establish the new standard frontend's performance or conformance. The fresh
[standard API comparison](../../experiments/webgpu_dawn/standard_api/results.md) now
measures the shared JS workload against Microsoft Edge 156, with CPU/GPU/Promise
measurements and separate presentation endpoints.

The interactive [Spectrum studio](../../packages/flax_webgpu/example/README.md) shares
its renderer, shaders and metrics with HTML. Its six-case
[frame-rate comparison](../../packages/flax_webgpu/example/validation/results.md) covers
compute particles, indexed cubes with depth/MSAA, and ray marching at matched
resolutions, including one instanced draw versus 2,304 per-object draws.

## Remaining work

1. Address the remaining conformance gaps. The complete combined-engine pinned CTS run
   finished all 697 groups and 288,582 cases: 272,639 passed, 1,703 failed and 14,240
   skipped. Compared with the complete previous baseline, 356 failures became passes,
   with no new failures, skips or changed subcase coverage. Bounded receipts remain
   separate from this complete run. Separate native Metal/Dawn failures, pinned CTS
   expectation differences and browser-only dependencies from actionable Flax semantics.
   Method-name coverage alone is not conformance.
2. Extend the matched Edge comparison to a common screen-presentation endpoint. Current
   browser presentation feedback and Flutter GPU completion cannot be subtracted to
   establish a display-latency difference.
3. Extend the remaining [video](../architecture/webgpu.md#sdr-video-frames) and image
   services only with their real color and ownership contracts. Original-format NV12 and
   BGRA `VideoFrame.allocationSize()`/`copyTo()` support crop and custom plane layouts.
   HDR video, raw-frame construction, explicit output-format/color conversion and
   cross-realm frame transfer remain separate work. Canvas 2D still stores sRGB RGBA8;
   Display P3/Float16 ImageData and WebGPU canvases do not make its backing wide gamut.
   Worker Canvas 2D and transferable Streams are separate services. Worker frame
   transfer and HTML media stay separate.
4. Establish supported engine interop tests and platform acceptance beyond the
   experimental macOS arm64, macOS 26+ profile. Keep engines without interop profile 1
   safe.

## Canvas compatibility extension

Core owns the canvas document, image resources and input/geometry snapshots. Both
providers reuse these contracts. The macOS extension adds external image uploads, GPU
snapshots and transfer, PNG/JPEG/WebP export, RGBA8 canvas storage and matching sRGB
views. Ordinary frame submission retains pooled IOSurfaces and GPU fences. The
acceptance fixture includes a pinned Three.js 0.186.1 textured scene and OrbitControls.
Coverage and remaining limits must be read with its current receipt; method declarations
alone are not conformance evidence.

The canvas extension passed Core JS 107, Canvas JS 35, WebGPU conversion 5, Core canvas
V8 UI 2, Canvas V8 UI 393, widget/integration examples 1 each, and both runtime 58-test
gates. Its three CTS cycles pass 65 cases each and retire all native counters to zero.
The dedicated
[60 Hz comparison](../../packages/flax_webgpu/example/validation/canvas-compatibility-results.md)
records current timings separately from the older 120 Hz measurements.

## Latest-main integration

The feature worktree is rebased onto the Flutter 3.47.9/Dart 3.13.7 upgrade. Binding,
public-type, host and C-FFI outputs are regenerated against that baseline. The seven
experimental overlays are integrated into the maintained Flutter fork; ordinary engine
builds own image, mapping, FFI and guarded macOS texture/fence behavior. The runner uses
normal native assets and bounded repeated Sessions.

Earlier integration validation covered every workspace check stage through successful
prefixes and focused repair/postfix runs; failed full invocations remain recorded as
failures. Member unit/generator coverage is 848 cases, including all 755 generator cases
after two repairs. JS tests pass 326 with five existing skips; tool tests pass 120 with
one Windows skip. Matching UI coverage is 1,166 tests; the separate 59-test runtime gate
overlaps that coverage. Fourteen Debug/Release FFI variants pass. Fifteen Dart and 17
npm archive checks pass, with a scoped codegen archive/consumer refresh after its
tooling repair. The clean Release consumer installs real tarballs with scripts disabled
and uses normal native assets. Disabling Impeller produces an early rejection under real
Skia Metal.

The relocated consumer completes 12 Sessions, 1,440 GPU frames and 1,620 Worker-scenario
assertions, with all six GPU counters and both Worker counters zero after 13 retirements
including the Core-only control. This functional run overlaps codegen CPU load; its
86.66-second duration is not a performance baseline. RSS after one-second idle is 268.5
MB for Core-only, 393.8 MB after the first GPU Session and 458.3 MB after the last; the
last five samples are 458.3–462.4 MB and process peak RSS is 544.3 MB. These finite
observations use no forced GC and establish no leak bound.

Repository jobs were idle; ordinary desktop services remained active. An independent
quiet Release repeat on Apple M2 Max/macOS 27.0.1 passes three Sessions, 120 records,
360 frames, 405 scenario assertions and four zero-count retirements. The balanced
Meshopt order is 0/1/2/2/1/0 Workers, with six samples per Worker count and a 2 MiB
decoded output per task. Median measurements are milliseconds:

| Workers | Cold 2 tasks | Reused 8 tasks | Reused work gap | Full-window gap |
| ------- | -----------: | -------------: | --------------: | --------------: |
| 0       |        2.508 |          6.155 |           6.170 |         27.1495 |
| 1       |       34.826 |         32.625 |          26.171 |         26.2105 |
| 2       |       35.822 |          6.532 |           6.431 |          24.479 |

The full window includes an extra 30 ms of observation; its median elapsed durations are
44.518/63.808/38.153 ms for 0/1/2 Workers. One Worker's reused batch takes 31.369–42.160
ms, clearly slower than direct execution or two Workers here. All Worker modes make
main-timer progress, but the full-window gaps remain visible. KTX2
ETC1S/UASTC/UASTC+Zstd measurements have three samples each; cold medians are
96.174/93.496/92.742 ms and reused medians are 1.278/2.249/2.305 ms. These measurements
establish neither a general speedup nor a GC cause; no additional runtime optimization
is retained.

The CI configuration now uses one shared macOS arm64 job with the exact maintained-fork
commit, pinned depot_tools, normal gclient patch hooks and the existing V8 SDK lock.
Bootstrap runs before the ordinary Debug engine build, and generated/cached sky_engine
directory comparisons guard later Pub and check commands. Dawn is a separate explicit
checksum-verified producer input. Complete workspace, native runtime, FFI and release
checks remain enabled; no stock-engine fallback or test skip closes these boundaries.
The hosted build requires 50 GiB free and uses two compiler jobs; cleanup is restricted
to GitHub-hosted runners and is never a local setup command.

The configured engine pin `dc25696b507f28102a59f4bd195620663cbe95f2` is published and
fetchable. It includes mapped-buffer clone guards and the macOS HDR surface changes. The
combined local Debug and Release/AOT artifacts have separate source and binary
manifests; their source bytes match this committed engine tree.

Current local macOS acceptance passes all 1,246 Framework cases, the 60-case runtime
gate, all 22 example test files and both aggregate stages. The complete Release/AOT
application passes 1,220 actual cases, with 25 explicitly Debug-only cases not
applicable and no failures. Three.js main/Worker rendering, SDR video readback and
calibrated P3/HDR canvas checks pass on the same production inputs. These functional
checks do not establish a performance improvement or complete CTS conformance. Hosted CI
status is tracked separately on the pull request; other-platform certification remains
separate.
