# Task: Dedicated Workers

Status: implemented; macOS arm64 Debug acceptance and bounded Release acceptance passed;
uncommitted

## Goal and scope

Implement pure JS/Wasm Dedicated Workers in Core, using background Dart isolates when
that carrier is viable. Existing Core browser APIs retain one shared implementation;
Worker support adds its scope, scheduling and native message ownership. Preserve the
existing Canvas/WebGPU/Core changes. Exclude SharedArrayBuffer/Atomics, canvas/GPU
transfer, SharedWorker and Service Worker.

## Approach

The carrier prototype executes an independent detached V8 Context from `Isolate.spawn`
in the same Dart isolate group. Two macOS tests established numeric messaging,
asynchronous Wasm, yielding and interrupt-before-destruction. The ordinary UI runtime
creation checks remain intact. Production uses the same carrier with the existing
runtime bridge, explicit references, Core host services and native clone queues. See
[the contract](../architecture/dedicated-workers.md).

## Initial Debug acceptance

- Source snapshots were saved outside the checkout before creating the new worktree. The
  original WebGPU worktree is preserved, and no project commit was created.
- Worker integration covers nine tests: detached byte ownership, natural close with
  pending messages, structured clone/transfer, invalid transfers, module host services,
  execution interruption, Session close, HTTP redirects and multiple Sessions on the
  shared UI heap. Closed workers release their native channels before Session close.
- The maintained engine runtime/GC gate passed 58 tests. Core/Canvas/WebGPU JS suites
  passed 134/35/6 tests. Host and Canvas UI regressions passed 22/3/395 tests. The
  benchmark is one additional test. These are 663 current tests, excluding repeat runs,
  the two earlier instrumented prototype tests and application assertions.
- Scoped Dart analysis, Core/Canvas/WebGPU TypeScript checks, the separate public Worker
  type profile, FFI generation, host scripts, public declarations and module delivery
  checks passed.
- The shared Flutter checkout had advanced to 3.47.9 while the application/generated
  bindings target 3.47.6. A matching isolated 3.47.6 framework and full maintained
  engine build were prepared. Failed attempts to combine cached engine objects and
  current headers are excluded from acceptance.
- The pinned Three.js 0.186.1 DRACOLoader uses real Blob Workers, Wasm decoder bytes and
  detached input buffers. Three create/dispose cycles each decode the original 75-byte
  Draco quad twice. The macOS app passes 87 check records and 360 frames, including
  existing models, lighting, shadows, postprocessing, skeletal/Morph animation, Meshopt
  and textured glTF/GLB export. Native GPU counters retire to zero.
- The [benchmark and reproduction](../../experiments/dedicated_workers/README.md) record
  identical-input copy/transfer round trips, cold/repeated creation and main-thread
  responsiveness. Same-group Dart scheduling does not imply that transfer latency is
  always lower.

## Boundaries

The [Release follow-up](../../experiments/dedicated_workers/release-results.md) reuses
the earlier WebGPU allocation investigation rather than repeating it. Large-message
diagnostics identify V8 external-memory GC requests, whose Dart follow-ups now merge
over 8 ms. The ordinary JS allocation, forced and Dart-pressure paths are unchanged. One
additional GC contract covers live and retired conditional callbacks under external
buffer pressure. Release timing, tail latency and peak memory are recorded separately
from the initial Debug results.

This is a bounded pure JS/Wasm profile, not full browser conformance. Mobile platforms
were not validated. KTX2Loader acceptance is recorded in the compatibility follow-up
below. Release/AOT acceptance covers the message benchmark and real DRACO/application
paths; the complete Worker exception suite uses the Debug tester. At initial acceptance,
nested workers, synchronous network importScripts, credential inclusion,
Blob/platform-object cloning and compiled Wasm.Module transfer failed explicitly. The
API completion follow-up below supersedes the implemented gaps. Shared memory,
Canvas/WebGPU transfer, SharedWorker and Service Worker remain outside scope. No changes
were committed, pushed or published; engine edits remain in the maintained Flutter fork.
Original worktree patches and all 188 untracked files were compared byte-for-byte with
the recovery snapshot after implementation.

## Application loading and diagnostics follow-up

Application flax/file Worker entries and dependencies reuse the owning Session source
loader and inherited import maps. Local JS/JSON/Wasm GET/HEAD Fetch uses the same
resource boundary. Parent-owned cancellation covers loading and termination; Flutter
AssetBundles and runtime handles never cross isolates. HTTP module transport remains in
the Worker, preserving its existing redirect and cancellation behavior.

Runtime error events retain available source positions; primitive throws without an
Error stack report unknown positions. Native Promise rejection records produce
`unhandledrejection`/`rejectionhandled`, retaining Worker-local identity and suppressing
same-checkpoint catches. Three new integration tests cover resource loading and root
restrictions, cancellation, and diagnostics/rejection semantics. The existing HTTP test
also verifies that a Request body is not consumed twice.

The
[compatibility receipt](../../experiments/dedicated_workers/compatibility-results.md)
records real Release KTX2Loader ETC1S/UASTC decoding, compressed GPU upload and pixel
readback, plus scoped regressions. Blob/File cloning, MessagePort, nested Workers and
synchronous network importScripts were not added. No project commit, push or publication
is part of this follow-up.

## API completion follow-up

Worker extension profile 2 shares one native serializer for messaging and global
structuredClone. It adds Blob/File and DOMException cloning, compiled Wasm.Module
cloning, resizable ArrayBuffer transfer, Worker FileReaderSync, hardwareConcurrency,
Worker scope prototypes, live Blob module/resource loading and Worker-owned Blob
importScripts. Native Wasm streaming consumes Response chunks with MIME/status/body
checks and reader error propagation. Main/shared-session close aborts compilations and
cancels readers; detached Worker close reclaims them through native isolate disposal,
without application cancellation/finally callbacks. Nested Workers reuse the existing
carrier and await descendant retirement. No thread pool or application configuration is
added.

MessagePort/MessageChannel and transferable Streams require independent transferable
endpoint ownership and queue lifetime, which the parent/child channel does not provide.
Synchronous remote/application imports require a cancellable blocking loader that can
operate while a synchronous Dart/V8 callback is active. These larger architectural
changes remain unsupported; browser credentials/origin policy and the original shared
memory/graphics exclusions are unchanged.

The
[API completion receipt](../../experiments/dedicated_workers/api-completion-results.md)
records 672 unique passing tests, five reused Release/AOT API cases and actual
application acceptance (90 records, 360 frames, six DRACO and twelve KTX2 decodes). The
[final benchmark JSON](../../experiments/dedicated_workers/results-macos-api-completion.json)
records the final macOS Release observation and zero native Worker channels/runtimes.
Detached shutdown reclaims pending Wasm jobs through native isolate disposal without
application cancellation/finally callbacks. No commit, push or publication was
performed.

## Three.js scenario acceptance follow-up

The
[expanded Release receipt](../../packages/flax_webgpu/example/validation/three-worker-scenarios-results.md)
adds the requested real workloads without changing Core, engine or upstream Three.js.
The implementation and real application checks pass; the final delivery package owns
fresh independent review and matching native regression evidence.

- Preservation starts from base `a4cfeaee1fa4a264ddba0686f7cd79ccc819e61e` and the full
  initial snapshot digest
  `5504ed03de4dce3676b89a6f65407565306103590a76c561fb140b020d71e038`. It was verified
  after the fresh pre-edit 90-record/360-frame Release baseline. All prior edits stay
  intact; no commit, push or publication was performed.
- The runtime acceptance snapshot digest is
  `1624b8cfdbe71427e9645c77a7cef284c0394ebca9c3b220245f2d4b95173a47`, verified before
  and after the successful run on engine `60D3782D-B472-3403-8658-DE43FAB6B40A`. Final
  review also covers the later reports.
- The expanded app passes 120 records/360 frames, with 405 additional assertions, 243
  successful background decodes, 60 single-thread controls and 18 expected decoder
  rejections. Meshopt uses a 65,536-vertex workload; combined animated compressed
  glTF/GLB, alpha/nine-mip/Zstd textures, both-worker replies and real GPU pixels pass.
  Each GPU Session leaves two real Workers alive for Session close, then records zero
  native Worker and GPU resources. Scoped JS tests pass 135/35/6/2 and four package
  TypeScript checks pass.
- Completion and a separate 30 ms observation window are measured uniformly. Two Workers
  complete the reused batch in 6.78 ms median, but full-window main gaps remain about 27
  ms. No worker-count tuning or runtime optimization is retained. The Blob source
  candidate saves only about 0.07 ms in a Node VM microbenchmark and is rejected.
- Remaining limits are scheduling-tail causality, sustained memory, large production
  models, mobile platforms and full conformance. Three-cycle post-close RSS is reported
  without claiming a memory bound. The raw JSON pins all inputs and keeps the original
  small-fixture baseline separate from the new matched measurements.
