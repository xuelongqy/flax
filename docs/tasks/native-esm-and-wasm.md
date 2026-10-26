# Native ESM, JSON and Wasm acceptance

Status: implemented and reviewed. Integration checks target Flax main `787f73867` and
Flutter `flax/main` `8cff4500a7d`. SDK source main includes
`3fa63023dd6e2c18bf41790dd8cd26428064ad25`. No push or publication is implied.

## Delivered contract

The [module contract](../architecture/modules.md) and
[ADR 0051](../decisions/0051-native-esm-json-and-wasm.md) describe the implementation.
V8 compiles original ESM, links JSON synthetic modules and executes native Wasm. Static,
dynamic and Wasm source imports share a bounded, cancellable module graph. HTTP imports
use the default downloader without requiring the Fetch plugin. Final response URLs, MIME
types, credential partitions and integrity checks are retained. Each Session owns its
instances, namespaces, failures and pending imports.

Script remains the default. Descriptor version 1 and direct synchronous evaluation
remain compatible; owning Script Views retain staged startup. Module readiness includes
top-level await without holding the Script startup queue. The optional module extension
preserves native ABI 2 and UI protocol 24 and does not add required methods to existing
third-party runtime implementations. The host-owned `sandbox` option defaults to false;
true fails before downloads, runtime allocation, plugin installation or execution.

The [standalone example](../../examples/standalone/README.md#native-esm-example) stages
and runs a real module tree. Existing single-file Script bundling remains unchanged.
`prepareModuleApplication()` preserves JS/JSON/Wasm and emits TypeScript as ESM without
bundling. The explicit Vite module mode serves those modules and restarts the Session on
changes. It does not rewrite imports for a browser or hot-patch an evaluated graph.

## SDK and integration review

The 0.3.2 iOS SDK recipe enables DrumBrake with explicit bounds checks and V8 pointer
compression while keeping JIT and TurboFan disabled. CppGC remains uncaged without its
own pointer compression or young generation. Both iOS targets pin producer revision
`3fa63023dd6e2c18bf41790dd8cd26428064ad25`, SDK manifests and static library hashes.
These are local SDK candidates; release archives have not been published.

Physical hosts require Extended Virtual Addressing in their signed entitlement and
provisioning profile, including Script applications using this SDK. The example tools
preserve other entitlements and verify this requirement before installation. Simulator
execution does not establish physical-host signing compatibility.

The final review preserves both optional execution and module extensions. Native-port
registration keeps the pristine context eligible for background Script preparation;
recreating that context restores its wakeup port. A regression verifies asynchronous
Wasm completion after failed preparation. Module entry loading continues host jobs
before a delayed SDK import, and Session close cancels unresolved await without waiting
for user Promises. Cleanup helpers form a fixed pair of Session handles; construction
checks retain the previous business handle budget and require zero handles at disposal.
Failed entry loads share a bounded failure cache and release native exceptions on close.

## Current verification

- macOS: 423 Core UI tests pass, including owning module Views and staged Script
  startup. Both runtime commands pass the same 56 runtime/module/joint-GC contracts.
- Pixel 4 / Android 13: 82 focused Debug checks pass, including original HTTPS modules,
  JSON/Wasm, delayed imports, failure-cache bounds, 1000 mount cycles and final cleanup.
- iPhone 14 Pro / iOS 27.0.1: 84 focused Release/AOT checks pass with V8 jitless,
  including the same module, ownership and transport cases plus legacy compatibility.
- iOS device and simulator SDKs pass six rejection cases each; the device relocated
  consumer compiles and links. macOS Debug, iOS Release and Android Debug engines build
  against the final source tree. Build-tool tests pass 82 checks.
- The complete `dart run melos run check` passes, including package tests, analysis,
  formatting, archive validation and native configuration. Native runtime gates and
  Flutter engine formatting checks also pass.

The fresh iOS stress runs one Script Session and one ESM/JSON/Wasm Session with
animation and allocation pressure. Every cycle repeats 27 contracts, including real
HTTPS and failure-cache bounds. It passes in 919.140 seconds: 19 cycles, 513 contract
executions and 62,900 native animation frames. Every cycle and final teardown return
bridge cells to zero. Its 919 RSS samples have a largest gap of 1.299 seconds; activity
medians fall from 266.17 to 241.59 MiB and idle medians from 243.37 to 218.09 MiB. These
are whole-process observations, not a universal leak bound or performance comparison.

Both focused applications are rebuilt and audited after the final include-guard
normalization. Stress precedes only those guard changes; assertions verify that both
header declaration bodies remain unchanged. Source hashes, guard equivalence, logs and
the asserted device summary are retained in `.local/esm-merge-closeout/`. The earlier
physical follow-up remains separately in `.local/esm-postreview-device-acceptance/`.

The [simulator report](../../experiments/canvas_engines/esm-ios-simulator-results.md)
retains the earlier balanced Canvas trials and separate JS/Wasm compute measurements.
Earlier broad iOS acceptance predates the final review fixes. A green full Android
matrix, Android Release, distribution signing and App Store acceptance are not claimed.
CSS, sandbox implementation, WASI, Wasm threads and broader Wasm conformance remain
outside this task. SDK archive publication remains a separate release operation.
