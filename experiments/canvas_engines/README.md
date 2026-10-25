# Canvas engine comparison

This experiment runs the existing Afterglow drawing code on one physical iPhone in
Flutter Release/AOT. Both engines receive the same JavaScript source assets. No
application HBC, V8 code cache or application startup snapshot is supplied. esbuild
packages the TypeScript fixture and leaves engine compilation to runtime.

Measured results and interpretation are in the [iOS report](results.md). The
[GC trace follow-up](gc-trace-results.md) confirms and fixes the timer scheduling defect
and repeats both scenes on a dedicated simulator. The
[fixed-engine device retest](fixed-ios-results.md) compares the repaired V8 jitless
engine with Hermes on the same physical iPhone.

## Workloads and measurements

- **Weave crisp:** Afterglow composition 2 without the blur filter. This emphasizes
  JavaScript path calculation and command encoding relative to the soft case. It is not
  a pure numerical benchmark or a heavy physics simulation.
- **Bloom soft:** composition 0 with native blur, saturation, screen blending and
  translucent paths. This exercises Flutter raster work and GPU resources.
- Each process runs both scenes, with 45 warmup and 300 measured frames per scene. Phase
  advances by submitted frame number, independently of engine speed. Canvas backing is
  880 x 480; its displayed size fits the same portrait viewport.
- CPU submission includes JS drawing, encoding, explicit flush and native batch decode.
  Three probe host calls bracket this work. Flutter UI/build, raster and total span are
  matched by actual frame number. Callback FPS uses vsync timestamps; it does not
  measure physical presentation or a GPU completion fence.
- Native `task_info(TASK_VM_INFO)` samples physical footprint and resident size at
  boundaries and once per second. These are whole-application measurements, including
  Flutter and graphics allocations. The sampled maximum is not an allocation-level peak.
  Thermal state must remain nominal and Low Power Mode must be off.

Startup records Dart `main` to source readiness and first raster notification, plus
runtime creation and Session-to-ready. Each trial is a new process. It does not include
pre-main loading, SpringBoard launch latency or a cleared OS filesystem/dyld cache.
Source readiness includes host/plugin initialization, module evaluation and first scene
submission. Engine defaults are preserved; Hermes source evaluation does not receive an
offline optimized HBC file.

Pixel PNGs are captured after all timing samples, at a fixed phase. Compare decoded RGBA
pixels before interpreting engine timings. Do not include proof runs with engine
verification probes in the performance aggregate.

## Consumer preparation

From the repository root, use the maintained Flutter SDK and repository-local temporary
storage:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
flutter create --empty --no-pub --platforms=ios \
  --project-name=canvas_engine_benchmark .local/app
dart --packages=.dart_tool/package_config.json experiments/canvas_engines/prepare.dart
```

Prepare ordinary workspace JS dependencies first. The preparer reuses the Canvas
example's module manifest and existing package-copy helpers. Build this consumer once
with the matching maintained iOS Release engine and macOS Release host tools. The runner
reuses its exact Dart AOT image and Runner input for both engines, replaces only the
Flutter engine binary, adds the V8 library where needed, then signs each application.
Final signatures differ because their sealed resources differ.

```sh
python3 experiments/canvas_engines/run.py \
  --device <physical-device-id> --identity <development-signing-identity> \
  --app .local/app/build/ios/iphoneos/Runner.app \
  --hermes /path/to/hermes/Flutter.framework/Flutter \
  --v8 /path/to/v8/Flutter.framework/Flutter \
  --v8-library /path/to/ios-jitless/libv8.dylib \
  --output .local/canvas-engines/trials
```

Run `--proof --order hermes,v8` into a separate output directory first. V8 must emit
`FLAX_V8_JITLESS: probe executed without generated machine code`; Hermes must emit its
interpreter identity. The default measured order is H/V/V/H/V/H/H/V, with an
eight-second pause after installation. Failed runs retain their logs; thermal or
low-power failures must be cooled and repeated, not silently included. The benchmark
uses a dedicated `dev.flax.canvas.enginebench` bundle. Preserve evidence, then remove
its installed application and disposable consumer/application copies. Keep the SDK and
engine builds. A failed batch can resume with `--start-index` and its remaining engine
order; retain the rejected log separately.

Aggregate a complete eight-trial directory with:

```sh
python3 experiments/canvas_engines/analyze.py .local/canvas-engines/trials
```

The aggregator checks sample counts, monotonic frame numbers/timestamps, thermal state,
common source inputs and all output PNG hashes before writing its summary.

## Engine build boundary

The original reports below use experimental relinked engines, with optional direct FFI
disabled in both controls. Their dynamic V8 SDK and simulator cage configuration are
historical. The [production migration acceptance](migration-ios-results.md) uses the
normal static, uncaged iOS SDK and maintained engine builds, with optional FFI enabled
in both the candidate and preserved Hermes control. For a static SDK, omit
`--v8-library`; the runner verifies the framework SDK manifest and copies its notices.

The original iOS V8 SDK enables CppGC caged heap, pointer compression and young
generation independently of V8 JS pointer compression. It failed on this iPhone with
`Oilpan: CagedHeap reservation` before loading Canvas. A runtime heap-size limit cannot
reduce that compiled-in reservation. The experimental SDK uses upstream
`cppgc_enable_caged_heap=false`, `cppgc_enable_pointer_compression=false` and
`cppgc_enable_young_generation=false`, while preserving V8 jitless and Flax joint GC.
Its adapter must be recompiled against the matching SDK defines. This configuration is
part of the result and is not a claim about the stock iOS SDK.

Local build commands, source/configuration hashes, SDK manifests and measurements are
kept under `.local/canvas-engines/`. This is an isolated performance experiment, not a
production iOS V8 migration or complete joint-GC compatibility acceptance.

## Simulator trace and GC retest

Use `flutter build ios --simulator --debug` with the matching local simulator engine.
The native metrics bridge identifies the simulator, so Debug is explicitly accepted
there. Simulator and device results must remain separate. The simulator uses the
matching simulator SDK and platform ABI; do not reuse a device dylib.

For each baseline/fixed engine binary, run the same consumer with `--simulator --trace`
and `--order v8`. Use an ad-hoc signing identity (`--identity -`). The driver downloads
the full VM timeline into the host at the `CANVAS_TRACE_READY` barriers; the app records
only small frame/phase markers and waits for a file acknowledgement in its own temporary
container. The trace URL is restricted to the loopback VM service. `--proof` also checks
jitless identity; the simulator console uses a PTY so native stdout is flushed.

```sh
python3 experiments/canvas_engines/analyze_trace.py \
  .local/canvas-gc-trace/host-trace-baseline \
  .local/canvas-gc-trace/host-trace-fixed \
  --output .local/canvas-gc-trace/final-trace-summary.json
```

Omit `--trace` and `--proof` for performance runs. Use separate baseline/fixed output
directories and `--start-index` to alternate four processes per policy, preserving the
same consumer build and source. Aggregate with:

```sh
python3 experiments/canvas_engines/analyze_gc_benchmark.py \
  .local/canvas-gc-trace/bench-baseline .local/canvas-gc-trace/bench-fixed \
  --output .local/canvas-gc-trace/benchmark-summary.json
```

The trace check joins idle requests to native vsync timestamps. Requests after at least
100 ms without a frame are allowed, as are pressure collections. It separately asserts
that a dropped JS wrapper is reclaimed once animation stops.

## Fixed-engine physical-device retest

Rebuild the physical V8 adapter with the idle-GC fix and the same uncaged jitless SDK.
Rebuild the Hermes adapter against the same renderer objects. Prepare one Release/AOT
consumer with the current harness, then run separate proof and eight-process trial
batches using the physical-device commands above. Do not enable tracing or verification
probes in the measured batch.

`analyze.py` also reports per-process maxima and the number of callback intervals longer
than 1.5 display refresh periods. It rejects simulator/traced results and mismatched
refresh rates. The [fixed-engine device report](fixed-ios-results.md) and its
[aggregate receipt](fixed-ios-results.json) keep this retest separate from the original
baseline and simulator studies. Raw receipts and paired build commands are local under
`.local/canvas-device-fixed/`.
