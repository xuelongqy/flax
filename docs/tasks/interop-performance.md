# Task: Native value conversion performance and common SDK APIs

Status: completed on the maintained Flax and Flutter branches

## Goal and scope

Measure and improve nested JS collection lookup, binary snapshot transport and UTF-16
input conversion. Complete common DateTime, Uri and RegExp APIs. Preserve the native
value conversion rules and Dart reference results accepted in ADR 42.

## Acceptance criteria

- Record actual before/after measurements on the maintained V8 and Hermes runtimes.
- Preserve collection aliases, cycles, typed compatibility and scoped cleanup.
- Binary snapshots remain independent; shared TypedData continues using the same lease.
- Generated SDK declarations agree with real Dart APIs and execute on both engines.
- Pass proportional runtime, generator, JavaScript, analysis and reproducibility checks.

## Approach

Use the existing isolated Flax and Flutter worktrees on
`feat/interop-conversion-performance`. Keep unrelated main-checkout edits untouched.
Measure actual binding and runtime calls before changing them. Avoid new conversion
modes, global value caches and independent GC machinery.

The collection decoder uses one temporary JS WeakMap identity index per conversion.
Binary snapshots use direct acquire/copy/release for Dart input and the existing native
allocator with Dart external-data finalization for JS input. The internal binding table
advances to version 4, while native ABI 2, UI protocol 24 and Manifest 18 stay
unchanged. UTF-16 input passes the existing pointer and length directly into JSI. SDK
APIs are selected in the owning binding configuration and regenerated.

## Results and validation

The unchanged-source baseline and optimized source both passed the same actual-engine
benchmark on macOS arm64. Values below are milliseconds per call, measured as the median
of seven batches after three warmup calls in debug/JIT builds.

| Case                              | V8 before → after | Hermes before → after |
| --------------------------------- | ----------------- | --------------------- |
| 1,000 independent nested lists    | 697.634 → 140.414 | 481.000 → 99.967      |
| 16 MiB snapshot, Dart → JS        | 1.077 → 0.510     | 1.039 → 0.583         |
| 16 MiB snapshot, JS → Dart        | 4.641 → 0.522     | 4.191 → 0.476         |
| 65,536 UTF-16 units, string input | 0.492 → 0.353     | 0.504 → 0.345         |

Repeated aliases, tiny strings and decimal BigInt parsing show little change. External
ownership adds roughly 0.4 microseconds to a Hermes 1 KiB read; large snapshots avoid
both the second payload copy and the additional Dart heap allocation. These measurements
do not establish release/AOT or mobile performance.

DateTime now covers construction, parsing, fields, arithmetic and comparison; Uri covers
path/query inspection, construction, resolution, replacement and encoding; RegExp covers
first/all/prefix/string matching with real Match/RegExpMatch references. Iterable's
TypeScript method declaration allows Dart's covariant match results; parameter types and
runtime conversion checks remain unchanged.

Validation passed:

- V8: Core 299/299 and Canvas/Fetch/WebSocket 33/33; Hermes: combined 332/332.
- Final review reproduced an Array conversion regression when application code replaced
  global WeakMap. Capturing the original constructor fixed it; final targeted checks
  passed 41/41 on each engine, covering the relevant Core cases and all three plugins.
- Generator 591/591; JavaScript 158/158; public TypeScript declarations and scoped Dart
  analysis passed. Readonly collection methods and concrete match inputs remain checked.
- Binding, FFI, host, public-type and module-delivery reproducibility checks passed, as
  did formatting, documentation lint and local links.

Plugin test factories were temporarily selected through the same FlaxEngine entry as
Core to exercise the actual macOS verification engines. Their original files were
restored and verified by SHA-256. The earlier plugin-start failure came from their
stored iOS-only Hermes factory, before any transport code executed.

Disposable harnesses, raw logs, source/binary hashes, sample distributions and the final
receipt live in `.local/interop-performance/`. The complete suites preceded the final
constructor capture; the final 41-case gates cover that adjustment. The matching
experimental testers were rebuilt with binding extension 4. Production frameworks,
release/AOT and mobile execution were not rebuilt or validated.

## Review and remaining opportunities

Review found no blocking implementation defect. Implementation and generated source
hashes matched the previous validation receipt, including both engine sources, generated
bindings and JavaScript. The only code change was to the existing binary snapshot test:
it now retains only a derived Dart view after re-export, GC and runtime disposal, checks
empty buffers, and actually resizes a buffer when the engine supports it. V8 supports
this resize; the maintained Hermes ignores the constructor option, so its ordinary
buffer is no longer counted as resizable-buffer coverage.

Actual V8 and Hermes each passed 14 focused runtime cases after that change, plus two
private review probes per engine. The probes confirmed that a copied snapshot can be
shared back to JS while staying independent of its original JS source, and that its
derived Dart view remains writable after disposal and Dart GC. Review evidence lives in
`.local/interop-performance/review/`.

## Selected collection classification prototype

The selected prototype consolidates the existing Object/dynamic classification into one
JS call, keeping the same native-brand, reference, State, thenable, error and collection
precedence. Common decisions use scalar results; only State and error payloads need
temporary field containers. Native array/view checks also avoid invoking incompatible
binary getters merely to catch their exceptions. The engine, GC contract, UI protocol
and conversion rules remain unchanged.

Directly reusing every collection shape was rejected. A getter that returns a different
iterator on each read was called three times by the existing decoder but twice by that
prototype, changing the copied value from 3 to 2. The selected implementation retains
the original collection checks and getter order, rather than keeping an unsafe fast
mode. Existing JS validation functions are shared with the classifier instead of being
duplicated. Regression coverage includes iterator values, then getter reads, Symbol
rejection and native binary objects with changed prototypes.

The comparison includes small/empty/flat inputs, 1,000 distinct or repeated nested
arrays, plain records, real Dart references, native binary views and explicitly typed
Lists/Maps. Timings run through the actual runtime without the diagnostic handle
tracker; helper counts are collected separately. The earlier 10,011-call workload
converts an Object/dynamic parameter containing 1,000 inner arrays and their outer
array. The selected decoder makes 5,006 tracked helper calls, including its unchanged
second collection checks. Element-property accesses and native handle releases are
additional operations and are not included in this helper count.

The unchanged baseline and selected prototype each use three warmups and seven timed
batches per workload. These are raw-runtime debug/JIT measurements; tracking is used
only in the separate helper-count probe.

| Object/dynamic workload         | V8 baseline → selected (ms) | Hermes baseline → selected (ms) |
| ------------------------------- | --------------------------- | ------------------------------- |
| 1,000 independent nested arrays | 100.239 → 63.481            | 57.601 → 42.371                 |
| 1,000 repeated array references | 62.461 → 28.611             | 33.882 → 18.000                 |
| 1,000 plain records             | 153.482 → 120.358           | 83.927 → 71.406                 |

An independent repeat confirmed the direction of the improvement. Absolute Hermes
elapsed times varied across launches, including the explicitly typed control cases; that
variability prevents attributing every between-run difference to classification. The
selected measurements above use the original baseline and final prototype, without
mixing in diagnostic tracker overhead. Tiny binary views remain close to baseline; the
final adjustment preserves their existing scalar type result instead of allocating and
stripping an additional type prefix. Explicitly typed flat Lists show no stable gain.

Full Core execution passed 299/299 on V8 and 299/299 on Hermes before that final binary
scalar adjustment. Final targeted runtime checks passed 15/15 on each engine, covering
native binary kinds/lifetimes, enums, collection getters/cycles/failures, common SDK
APIs, exact BigInt and UTF-16. Final benchmark and compatibility probes passed 2/2 on
each engine. JavaScript passed 158/158; TypeScript and scoped Dart analysis passed. Both
matching experimental tester binaries and native sources are unchanged. Disposable
comparison inputs, rejected prototypes, raw logs, source hashes and the final receipt
live in `.local/collection-classification/`. Measurements use macOS arm64 debug/JIT and
do not establish release/AOT or mobile performance.

## Remaining opportunities

1. Measure long JS-to-Dart string results before changing that direction. The current
   path materializes JSI UTF-16, copies it into a native result buffer, then creates the
   Dart string. Eliminating an intermediate allocation may help large text responses,
   but its benefit has not been measured and it would touch the engine boundary.
2. Prefer existing bulk collection operations and reusable Dart references at call
   sites. `addAll` and explicit collection snapshots already reduce repeated host
   invocations. Reusing a Dart DateTime/Uri/RegExp avoids repeated JS input projection;
   caching mutable JS Date/URL snapshots would change semantics and is not proposed. Add
   further bulk APIs only for a measured application workload.

Boolean/null/enum transport is already direct. Decimal BigInt parsing showed little
improvement in the measured batch. The previously deferred Number precision issue and
additional binary conversion strategies remain outside this scope. Explicitly typed List
parameters already avoid generic classification; this prototype targets nested
Object/dynamic conversion rather than promising a speedup for every List call.

## Handoff

The reviewed implementation commit is `01ae780`; the matching engine commit is
`90ebeaa975e`. Integration retains `feat/dynamic-engine-sdk` commit `c060832`, including
Iterator, generic member views, provider identity/import fixes and checked conversions.
The only runtime source conflict combined the shared `tryObjectHandle` helper with
`hasObjectView`; generated conflicts were resolved by regeneration. All unrelated
non-overlapping source and test files remain byte-identical to that commit. Existing IDs
in the four package Manifests are retained.

Both target checkouts were clean before integration. Recoverable HEAD/index/source
snapshots, source and binary hashes, logs and the final receipt live in
`.local/interop-performance/integration/`. Earlier implementation and synchronization
receipts remain in the landing and synchronization directories.

The maintained Flutter `flax/main` branch now includes `90ebeaa975e`. Its matching macOS
debug framework and tester were rebuilt with binding extension 4. The final combined
Core/Canvas/Fetch/WebSocket suite passed V8 335/335 on this production tester and Hermes
335/335 on the matching experimental macOS tester. Plugin test factories were restored
and verified by SHA-256. Workspace JavaScript passed 159/159; workspace TypeScript,
scoped Dart analysis, binding/FFI and public-type/module-delivery reproducibility checks
passed. Generator execution passed 595/595 through the maintained Dart SDK and the
repository's Dart unit-test entry. The combined Flax changes are integrated into
`feat/dynamic-engine-sdk` while retaining both original commit histories.

This acceptance covers macOS arm64 debug/JIT. Mobile, release/AOT and production Hermes
framework execution were not run. No push or publication is authorized.
