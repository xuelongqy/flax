# Task: Native Canvas fillRect prototype

Status: implemented and verified on macOS arm64 V8 debug and release/AOT

This records the initial fillRect-only comparison. The subsequent complete backend
migration is recorded [separately](canvas-native-migration.md).

## Goal and scope

Compare the existing shared-buffer Dart Canvas path with direct JSI/C++ recording and
C++ batch decoding. Keep the Flax changes on `feat/canvas-shared-buffer` and Flutter
engine changes on the separate `feat/canvas-native-prototype` worktree. Limit native
drawing to solid black `fillRect` plus commit; this is not a replacement Canvas plugin.

## Acceptance criteria

- All paths produce identical RGBA pixels from real Flutter Pictures.
- Invalid packets/targets fail safely and runtime close releases pending frames.
- Run the three paths in an actual macOS release/AOT application with raw samples.
- Existing runtime/joint-GC contracts and scoped source checks pass.

## Approach

The native paths record Flutter DisplayLists through JSI. Native batch reuses the exact
installed JS encoder used by the Dart path. A single native handoff appends a completed
DisplayList to a Dart-created Canvas; all paths finish the same outer Picture wrapper.
Native state owns no Dart business references, and runtime shutdown explicitly retires
unconsumed frames before destroying the JS context.

The experiment-only build helper compiles modified source from the independent Flutter
worktree and reuses other matching engine objects read-only. Separate tester/framework
outputs preserve the maintained engine. Reproduction and timing scope are documented
in the [experiment README](../../experiments/canvas_native/README.md).

## Results and validation

Measured hardware: Apple M2 Max, 32 GiB RAM, macOS arm64 V8. Both debug and release
prototype binaries build. Debug pixel equivalence, malformed input, invalid target and
pending-frame shutdown checks pass in both modes. The existing V8 runtime and joint-GC
gate passes 45 tests, and canonical FFI declarations are reproducible. Scoped Dart
analysis, JS type checking, 21 JS tests, formatting and documentation checks pass.

Release/AOT medians in milliseconds per recorded frame follow. Each value is the median
of nine ten-frame sample means after 30 warmup frames; starting order rotates between
paths. Timing includes the JS loop, encoding where applicable, recording, commit, outer
Picture creation and the microtask checkpoint. Rasterization and frame scheduling are
excluded.

| Rectangles | JS direct to C++ | C++ batch decode | Existing shared-buffer Dart |
| --- | --- | --- | --- |
| 1,000 | 0.3191 ms | 0.1431 ms | 0.3922 ms |
| 10,000 | 3.3151 ms | 1.5089 ms | 3.9069 ms |

At 10,000 rectangles, native batch is about 2.59 times as fast as the Dart route
(61.4% less recording time), and about 2.20 times as fast as native direct calls.
Native direct reduces time by about 15.1% relative to Dart in release. Debug differs:
the direct route is slower than Dart. Release/AOT is the performance comparison here.

For this workload, keep JS batching and move decoding/recording to C++ if pursuing
the native path. Merely changing each drawing call to JSI does not remove its
per-operation boundary cost. This is evidence for solid fill rectangles on this device,
not a complete Canvas implementation, a GPU speed comparison or a frame-rate claim.

Raw samples and the passing application log are under ignored
`.local/canvas-native/benchmark-fillrect-prototype-release.json` and
`.local/canvas-native/run-release.log`.
`debug/build.json` and `release/build.json` record exact compile/link commands and source
and binary hashes. The application runner checks for the prototype export in the
packaged framework before launch; successful JS API and pixel checks confirm it runs.

The existing profile output predates current VM extensions and cannot link the current
bridge. It is not used. Release uses the matching maintained release objects and SDK.
The Melos runtime alias attempted an unflagged Flutter dependency refresh while
`FLUTTER_ENGINE` was set; invoking its owning `tool/check_runtime.dart` directly ran
the same FFI/runtime/GC checks successfully.

The first release application selected the base XCFramework rather than the separately
relinked sibling framework. The build helper now clones the XCFramework and replaces
its arm64 slice with the prototype framework, verifying byte equality before use. The
rerun passes all checks and produces the release samples above. No timings from the
failed application are used.

## Handoff

The prototype and comparison are complete. Changes and isolated engine builds remain
local and uncommitted. Both original checkouts remain clean. No Hermes/iOS, other
platform, general Canvas, GPU frame-time or distribution acceptance is claimed.
