# WebGPU rendering in Dedicated Workers

Implementation and macOS verification are recorded below. Inherited working-tree changes
are preserved; no commit, push or publication. Independent delivery sign-off is retained
separately with the review evidence.

## Goal and scope

Support macOS WebGPU in Dedicated Workers, including GPU computation, offscreen
rendering and a transferred canvas displayed by the existing Core CanvasView. Worker
code encodes and submits directly to Dawn. The UI owner retains Flutter objects,
layout/input and the texture registry. Rendering uses shared native textures and GPU
fences. Canvas 2D in Workers, video, HDR/P3, XR and other platforms are outside this
task.

The fixed baseline is `d954085ff34814cab21d8991b6b590bec9e182eb`. The initial package
includes the preceding accepted, uncommitted changes: digest
`7f4eb4e82b2cb90dcc70b00aa869815d1089137ef41c71fe9e6bb839d7be990f`, fingerprint
`061ccb98577ff98598482e9d5c4132ffdd8d728dd7764aee36c14af58e0395a5`. Review packages and
required ignored-artifact inventories belong outside the repository at
`/Volumes/MAC_HOME/CodexHome/review-evidence/webgpu-worker-rendering-20261102/`.

## Acceptance criteria

1. A selected WebGPU host provides real adapter/device/queue operations inside a Worker,
   including compute, mapping/readback and asynchronous callbacks on that Worker's
   owning isolate. Ordinary Workers and sandbox restrictions retain their boundaries.
2. Standard canvas ownership transfer enables real Worker-rendered pixels in Flutter.
   Resize and frame scheduling work without forwarding individual drawing calls or
   reading back each frame through the CPU. Detached owners cannot continue using a
   transferred canvas.
3. Forced termination, pending GPU work, device loss and Session close reclaim native
   resources and callbacks without entering a disposed V8 isolate. Repeated sessions
   return GPU and Worker counts to zero; failed transfers remain atomic.
4. Existing main-thread WebGPU, Canvas, Worker and Three.js behavior passes proportional
   maintained-engine checks. Native ABI and generated outputs remain coordinated; any
   engine changes use separately identified source and outputs, preserving accepted
   engine builds and unrelated edits.
5. Relevant CPU/transfer/presentation controls identify new overhead without claiming
   FPS, display latency or GC improvements from unrelated measurements. Independent
   final review covers the actual complete working tree and required native artifacts.

## Approach

Reuse the existing Worker carrier, Dawn frontend, native texture pool and GPU fence
interop. Separate worker-owned GPU execution from UI-owned presentation. Per-draw
message proxies and per-frame image readback would add bridge/CPU costs and do not meet
the intended rendering path.

The independent architecture advisory selected one private, native-owned ArrayBuffer
lease per canvas. Existing native packet ownership retains its BackingStore through
transfer and releases abandoned packets. Core validates contextless eligibility after
graph serialization and before any buffer detachment. Native state owns dimensions and
validates token addresses; copied numeric metadata cannot recreate ownership. GPU
objects remain nontransferable. A display endpoint retained by the UI is separate from
the Worker's Dawn producer and texture pool.

Only Workers of a nonsandboxed Session that selected the WebGPU plugin inherit its
existing native authority and selected modules/assets. Core-only and sandboxed Workers
retain their restrictions. This does not introduce a new intra-Session FFI sandbox.
Worker rAF uses coalesced UI frame notifications; individual GPU commands stay inside
the Worker. Detached FFI retirement must perform native cleanup without JS callbacks.

The engine uses an isolated worktree at
`/Volumes/MAC_HOME/CodexHome/worktrees/webgpu-worker-engine/flutter`, fixed baseline
`439033d726d47670b7228864298cce3e9ddbd4c9`. Its initial package digest is
`d48477bc75196b81f905d6956a0f4badc7af2a41b9882fc91dfc451b3d8ae8c2`; the first
implementation package digest is
`990ef5780bce7056e7171fa948fb7df440783cee52f39ed448a8a9f55c65fdb1`. Four engine
implementation files add owned-buffer leases, a trusted precommit validation hook and
native-only detached FFI retirement. The existing C table/profile stays unchanged; new
graphics operations require an explicit private bridge capability. Isolated Debug and
Release builds, matching symbols, signatures, original input guards and independent
engine source review pass. A separately relinked Debug flutter_tester ensures framework
tests execute the changed engine implementation. Accepted frameworks and original source
edits remain protected.

## Results and validation

The selected nonsandboxed WebGPU profile now provides Worker `navigator.gpu`, device,
queue, compute/readback, `OffscreenCanvas.getContext('webgpu')`, transferable canvases,
resize and Worker rAF. GPU objects remain isolate-owned and nontransferable. Core-only
and sandbox Workers do not gain graphics or native-asset authority. Public Worker values
are declared by the selected WebGPU globals; common canvas context maps live in the pure
`@flax/core/host/canvas-contexts` declaration leaf.

The final application uses Flax source snapshot `fix-8`, digest
`160f4fe81ef66d5a5a5c43898357c12a1c8a2ace18590be2b9dbfd071bf14e38`. Subsequent source
changes add only this report and the validation receipt. Normal Release acceptance
passed three sessions, including 360 main-thread rendered frames. Each session also
passed actual Worker compute `[12, 18, 24, 30]`, Flutter-captured red/green Worker
pixels, aspect-ratio resize, local clone, use after the sender runtime retired, nested
Worker compute, rAF clock alignment, device churn, mapped readback, invalid/reentrant
transfers, dropped packets and forced termination. Session close retired an actively
running GPU Worker. All ten GPU counters and both Worker counters returned to zero after
every retirement. This is bounded lifecycle evidence, not a long-run RSS or leak
guarantee.

| Check                                                   | Result                                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------------------ |
| Core / WebGPU Node checks                               | 145 / 15 passed                                                          |
| Maintained-engine runtime and joint-GC checks           | 59 passed                                                                |
| Core UI host / ordinary Worker / Canvas                 | 22 / 24 / 4 passed                                                       |
| Core, Canvas2D, WebGPU Main/Worker and example types    | Passed, independently reproduced                                         |
| Public declarations, embedded hosts and native producer | Reproduced; checks passed                                                |
| Selected CTS cases per GPU session                      | 567 passed, 36 pre-existing Float16Array skips, zero failures            |
| Instrumented native GPUDevice GC                        | Three unreachable devices collected; native owner ledger returned 1 to 1 |
| Focused Debug / Release FFI acceptance                  | 2649 / 2899 reported checks; 15 GC contracts passed in each mode         |
| Actual owned-buffer V8 probe and independent replay     | 8 checks passed in each run                                              |

Production builds correctly report that forced collection is unavailable. The GC result
comes from a separately signed copy with the matching test-only engine collection hooks,
not from a stub collector. The normal engine Release UUID is
`89331F50-993D-3518-B0D1-A5173481A26A`; the test-only GC engine UUID is
`A4F8F896-95CF-3DA7-B5EB-FDC85E9E7C4E`. The matching Debug tester embeds the new engine
rather than relying on a framework substitution.

Review repairs include native producer-before-device shutdown, owner-ledger retirement
on destruction/loss and GC, real UI targets for main-received canvases, coalesced resize
propagation, Worker clock alignment, presentation without UI-owned Worker targets,
atomic precommit validation and optional-profile type declarations. These replace the
initial open findings; earlier failed harness attempts and their causes are retained as
evidence.

## Performance and retained tradeoffs

Eight fresh-process runs used identical 960x540 CPU controls in ABBA order repeated
twice. Values below are medians of per-process quantiles, not pooled quantiles.

| CPU interval                                   | Baseline p50 / p95 ms | Worker-enabled p50 / p95 ms |
| ---------------------------------------------- | --------------------- | --------------------------- |
| Three draw calls, encode and submit            | 0.0865 / 0.1175       | 0.088 / 0.119               |
| 2304 indexed encoding calls, encode and submit | 0.7055 / 0.7555       | 0.681 / 0.7395              |
| CPU-only Worker creation to ready              | 28.087 / 29.725       | 38.295 / 48.9205            |
| Synchronous plain postMessage                  | 0.006 / 0.0095        | 0.0065 / 0.012              |
| Synchronous 1 KiB buffer transfer              | 0.0085 / 0.012        | 0.010 / 0.0155              |

Encoding/submit process ranges overlap; small differences do not establish a speedup or
material regression. CPU-only Workers in a GPU-selected Session have a reproducible
10.208 ms (36.3%) startup increment. All 32 measured Workers create one Dawn Instance,
not a GPUDevice, before ready. This cost is per Worker creation, not per rendered frame.
Core-only Workers retain the original profile.

A bounded direct native check measured create plus WGSL feature lookup at 0.037834 ms
p50 and 0.056708 ms p95; an independent check measured 0.0265 ms p50. This does not
attribute the remaining startup increment among FFI installation, module execution,
binding, class initialization and listener registration. Independent advisory chose to
retain the measured tradeoff: adding delayed-context lifecycle state has no demonstrated
material startup benefit, and a global lazy loader would add much more complexity.
Neither speculative optimization was added.

The original ABBA dimension loop read local JS dimensions; its raw scope string was
incorrect and the summary explicitly corrects it to `nativeBacked: false`. A separate
current-only control transferred a contextless canvas through structuredClone, asserted
the sender was detached, and measured 24 native-token getter loops. Reading 10000
width/height pairs took 31.930 ms p50 and 34.023 ms p95, or about 3.193 microseconds per
pair at the loop median. This single-process measurement may overlap a read-only source
guard and is informational; it is not a baseline comparison or evidence for a cache. No
getter optimization was added. Baseline Worker OffscreenCanvas is unsupported, which is
not equivalent to zero cost.

All test JSON/PNG outputs were preserved and restored byte-for-byte around application
controls. The measurements do not establish Worker rendering FPS, GPU throughput,
physical display latency, Edge parity or long-run tails.

## Reproducibility and boundaries

The immutable application/native/control package is `artifacts-v2`, manifest digest
`cc3c5af4bed10345afb5e07d3206562d843190cc2a217a94fe70991290014dad`. It includes exact
signed normal and instrumented applications, native payload, application symbols, raw
checks/images, performance controls and runner sources. Engine source, frameworks,
actual engine symbols, tester, XCFrameworks, FFI overlays and focused acceptance have
separate immutable manifests in the same evidence root. The full tree, engine source,
immutable/live required artifacts and accepted original engine inputs are verified
separately. Final independent acceptance is recorded in `independent-final-review.json`
outside the repository.

The original maintained Flutter source and accepted engine outputs are unchanged.
Consumers need the separately identified matching engine changes; an older engine
without owned-buffer transfer capability fails closed. The maintained Dawn payload
remains macOS arm64 with its existing minimum-OS requirement. Canvas2D inside Workers,
video, HDR/P3, XR, other platforms, general DOM and full browser/CTS conformance remain
outside this work. The preceding API-completion receipts are historical baseline results
and are not substituted for Worker graphics validation.

## Follow-up overall review

A subsequent whole-change review found that collecting an HTML canvas wrapper could
close the shared target while its transferred local OffscreenCanvas was still retained
by CanvasView. The adopted canvas state now retains that original target owner. The
existing release record, sweep, presentation and cross-Worker transfer paths stay the
same. One real-GC regression checks continued drawing and exactly one release after the
last owner disappears.

The preceding measurements and artifacts remain immutable historical evidence. Source
snapshots, current checks and independent acceptance for this review repair are retained
at `/Volumes/MAC_HOME/CodexHome/review-evidence/webgpu-overall-review-20261103/`.
