# WebGPU API completion

Status: implemented and validated on macOS arm64. The independent delivery verdict and
final source/artifact guards are recorded outside the repository. No commit, push or
publication.

## Goal and scope

Complete the remaining practical standard-input, error-object and diagnostic-clone
semantics, and support genuine Dawn compatibility devices without simulating a browser
DOM. Preserve ordinary rendering performance, mapped-resource protection and existing
Canvas/Three.js/Worker behavior. Video, HDR/P3 presentation, XR and Worker graphics
remain separate work.

The fixed Flax baseline is `d954085ff34814cab21d8991b6b590bec9e182eb`; earlier dirty
changes are included in the initial package. Review evidence is outside the repository
at `/Volumes/MAC_HOME/CodexHome/review-evidence/webgpu-completion-20261102/`. The
initial package digest is
`e8c9c1f4d09ca29abf5608c6eb763e2e3539a3ece707373be20c4cd021f9cefa`. The application was
built and accepted from `fix-2`, digest
`0e0177bb7c85a074bf4aad82750df4d007b180902f78c99e1399148415db34b7`; the final source
package adds documentation and the validation receipt. Ignored application, native
payload, symbol files, raw checks and performance controls are frozen separately in
`artifacts-v1/`. Its manifest digest is recorded in the
[validation receipt](../../packages/flax_webgpu/validation/api-completion-macos.json).

## Delivered behavior

1. WebGPU converts buffer overloads, omitted ranges, dictionaries, sequences, records,
   labels and enum values according to the pinned IDL. Offset conversion happens once;
   native validation remains authoritative. Error objects and prototype attributes have
   correct brands, inheritance, readonly properties and argument requirements. Converted
   buffer-binding records retain a private weak brand instead of probing resource
   expandos during native packing. Nullish optional descriptors retain the existing fast
   path; absent nested defaults do not reread `Object.prototype`.
2. Core owns native-free `GPUCompilationInfo` and `GPUCompilationMessage` objects in
   main and Worker realms. Explicit clone handling preserves private data, frozen arrays
   and graph identity. GPU handles and protected mappings remain noncloneable. Actual
   compiler positions use Dawn's UTF-16 extension for non-ASCII source. Canonical public
   types stay in the WebGPU SDK; Workers gain no GPU or canvas host. Pipeline errors
   retain the standard DOMException clone semantics rather than inventing reason data.
3. Adapter requests forward real Dawn `core` and `compatibility` feature levels. Four
   independent storage stage limits use the native compatibility-limit chain. Metal
   probes and the app confirm default limits `[0, 0, 4, 4]`, requested values
   `[1, 1, 5, 5]`, explicit core upgrade and actual pixels `[23, 89, 177, 255]`.
   Compatibility devices retain IOSurface/shared-event sharing. No extra public mode
   field or emulated capability is introduced.
4. Core EventTarget uses actual private fields so GPUDevice exposes no implementation
   fields. The host bundler preserves public/private/static field syntax and native
   initialization order without globally changing its language target. Generated hosts,
   declarations, metadata and private native signatures are regenerated. Public engine
   interop profile 1, native ABI 2, UI protocol 24 and Worker profile 2 are unchanged.

`compilationHints` retains standard conversion without speculative prewarming: the
pinned Dawn header exposes `strictMath`, not an entry-point/layout hint operation.
Creating pipelines would add validation and lifetime costs. The existing safe-integer
bound is retained after checking normative WebIDL; widening it would be incorrect.

## Verification

- Core Node tests: **140/140**. WebGPU converter tests: **15/15**; example tests:
  **2/2**. Runtime, declaration-only SDK, example and Core typechecks pass.
- Maintained native runtime contracts: **59/59**, including C FFI reproducibility. Four
  generated hosts pass their generation check. Native producer and signature/type
  generation pass against the pinned SDK; accepted Debug/Release engines are unchanged.
- Maintained isolated Core UI checks: **49 passed** across host, Worker and Canvas
  suites. The manual Flutter invocation that omitted prepared module assets is retained
  as a failed setup attempt; it is not counted as product validation.
- Real signed macOS Release app: **3 sessions, 360 frames** at **960 x 540**, including
  GPU-only RGBA8 and Canvas coexistence. Each session passes **108 input-semantic** and
  **39 diagnostic** assertions, native compatibility checks, Three.js models, lighting,
  shadows, postprocessing, skeletal/Morph animation, Meshopt, textured export/import and
  Worker/KTX2 scenarios. All four session retirements return native and Worker counters
  to zero. The last scenario counter is 568/559/568; counters are cumulative within each
  session and must not be added across intermediate reports.
- Unmodified pinned CTS: **603 cases per session: 567 pass, 36 skip, 0 fail**, repeated
  across all three sessions. The skips remain the Proxy-based `_Float16Array` polyfill
  cases, not weakened runtime checks. The new selection includes JavaScript interface,
  property and inheritance behavior. This is bounded acceptance, not full conformance.

Failed validation-stage, observable-field and consumed-adapter attempts remain in the
artifact's failure records. The compatibility fixture now checks binding-dimension
validation at bind-group creation, where Dawn and pinned CTS specify it. Fresh adapters
are used for each successful device request; native consumed-adapter semantics remain
unchanged. The Core private-field fix resolves the actual CTS failures.

## Performance control

Two signed copies use the same injected helper, render attachment, shaders and **960 x
540** resolution. Eight fresh processes run `baseline, final, final, baseline` twice.
Each phase has 80 warmup rounds and 240 recorded rounds per process; GPU completion is
outside both CPU intervals. Existing background applications remain running, with
begin/end load snapshots retained. No build, test or competing task from this delivery
runs during measurement.

The values below are medians of four per-process P50s, not pooled percentiles:

| CPU interval                           |   Initial |     Final |     Change |
| -------------------------------------- | --------: | --------: | ---------: |
| Encoder/pass + 3 draws + finish/submit | 0.1095 ms | 0.1020 ms | -0.0075 ms |
| Round with 2,304 indexed API calls     | 0.7055 ms | 0.7090 ms | +0.0035 ms |
| Indexed-call loop alone                | 0.5520 ms | 0.5545 ms | +0.0025 ms |

Per-process ordinary-round P95 ranges overlap: 0.130–0.159 ms initially and 0.122–0.169
ms finally. Indexed-round P95 ranges also overlap: 0.766–0.831 ms and 0.748–0.867 ms.
This supports no material steady encoding regression; it does not establish a small
speedup. The stress phase uses `drawIndexed(0)` to isolate API work; it is not GPU
throughput. The approximately 0.0021 ms clock-call cost limits interpretation of tiny
draw-loop differences. Raw samples, signed prepared apps, helper hashes and fixed-output
byte-restoration proofs remain in `artifacts-v1/performance/`.

All eight applications pass their original functional checks and zero-count retirement.
These controls measure neither FPS nor physical display latency and are not a fresh Edge
comparison. The earlier Worker scheduling/GC tail is not claimed fixed.

## Remaining limits

Full CTS/WebIDL conformance, video/external textures, XR, HDR/P3 display, Worker
graphics transfer and platforms beyond the experimental macOS profile remain outside
acceptance. The canvas-scoped document/input layer remains the only DOM compatibility
layer.
