# Task: Shared binding dispatch

Status: complete

## Goal and scope

Replace per-instance forwarding closures and generated per-member proxy callbacks with
shared type prototypes, session operation slots and one receiver peer per proxy.
Preserve real Dart subclasses, current JS member lookup, typed conversions and Flutter
lifecycle ownership. Reuse the maintained engine and its joint collector; add no GC
backend or application configuration.

The change covers the generator, strict Manifest parsing and provider projection, all
owner packages and independent fixtures, JS source/types and delivered module assets,
Dart conversion and session dispatch, native exports and generated FFI declarations.
Native ABI 2 and GC extension 1 remain unchanged. The internal binding extension is 1;
Manifest is 16 and UI protocol is 23. Earlier generated packages are rejected.

## Approach and compatibility

Ordinary wrappers share a frozen prototype per bound type. A session resolves a selected
operation once; later calls send its numeric slot and receiver to the existing typed
Dart implementation. Proxy subclasses keep direct typed Dart parent entries. A shared
native resolver reads the current JS method or property on the actual receiver, with a
Dart fallback when the native base is unchanged or a concrete implementation is absent.
Private and arrow fields, multi-level inheritance, later instance/prototype replacement,
explicit super, generic/default conversion and asynchronous mustCallSuper remain intact.

Methods follow standard JS receiver semantics. Extracting an ordinary wrapper method
requires `.call(receiver, ...)` or `.bind(receiver)`; methods are no longer
automatically bound per instance. Regenerate packages with
`dart run melos run bindings:generate`, rebuild JS delivery, and use the matching
maintained Flutter engine. Reusing an old engine or protocol bundle fails explicitly.

Each Dart proxy retains one receiver peer. The returned JS wrapper or extends instance
owns its Dart peer through the existing conditional edge; a separately retained
`implement` object does not retain every proxy constructed from it. Session operation
tables hold metadata rather than business receivers. Construction failure, reentry,
exceptions, explicit release and session close use the shared invocation/cleanup path.
Application disposal, navigation and Flutter Element/State ownership remain unchanged.
See [objects](../architecture/objects.md),
[proxy properties](../architecture/proxy-properties.md) and
[runtime](../architecture/runtime.md).

## Results and validation

The existing V8/Hermes SDKs were reused. Only the maintained bridge/framework was
rebuilt. Static checks include official regeneration, strict TypeScript, 138 JS tests,
537 generator tests, tool/package tests, analyzer, formatter, documentation checks,
archive checks and reproducible FFI. The initial workspace check stopped on analyzer
diagnostics; after fixing them, the affected and remaining check steps passed
independently.

| Gate                                              | Actual result                                         |
| ------------------------------------------------- | ----------------------------------------------------- |
| macOS arm64 V8 runtime                            | 40 passed                                             |
| macOS arm64 V8 framework UI                       | 471 passed; all 7 owner examples and aggregate passed |
| Real macOS V8 debug application                   | 139 passed                                            |
| Real macOS V8 profile application                 | 138 passed; 2 debug-hook checks not applicable        |
| Real macOS V8 release/AOT application             | 136 passed; 2 debug-hook checks not applicable        |
| Real iOS arm64 simulator Hermes debug application | 138 passed                                            |

Native cases exercise malformed layouts, atomic registration, getter reentry that grows
the member table, exact receiver/private fields, synchronous failures and recovery.
Generated UI cases cover implements/extends, operators, defaults, providers in both
registration orders, Widget/State, callbacks, Future/Stream, mounting and unmounting.
Rootless object/callback cycles and 1,000 repeated Widget/State mount cycles return to
baseline. Release GC checks use actual Dart allocation pressure when VM service is
unavailable; weak-reference and native-handle assertions remain unchanged.

The copyable author template was regenerated through the formal validate/generate/check
CLI and now uses Manifest 16 / protocol 23. Its Dart analyzer, strict TS build and
public declaration build pass independently without changing dependency locks.

## Performance method

Compare actual generated classes from baseline Flax commit
`16960d3333510728d342ce6b4ee758c06a2f6f52` with the current source. Both applications
use the same macOS profile engine and V8 SDK, source workload, module delivery,
signatures and entitlements. Each process checks inheritance, private fields, super,
object identity, callback results and session teardown before recording timings. The
probe selects 50 members; the wide JS subclass overrides 46. Wrapper-only allocation
uses fresh protocol IDs and is reported separately from real Dart construction.

Three alternating process pairs, nine samples per case per process, measure 11 cases
(594 samples). Report the median of the three process medians. No timing assertion or
Flutter frame-performance guarantee is derived from these measurements. Other Flax
checks finished before timing. The machine was an Apple M2 Max with 32 GiB RAM.

| Operation                        | Baseline, microseconds/call | Current, microseconds/call | Less elapsed time |
| -------------------------------- | --------------------------- | -------------------------- | ----------------- |
| Ordinary getter                  | 4.71                        | 2.13                       | 54.9%             |
| Ordinary scalar method           | 5.40                        | 2.78                       | 48.6%             |
| Real Dart object construction    | 989.92                      | 924.60                     | 6.6%              |
| Proxy construction, one override | 1918.18                     | 1074.22                    | 44.0%             |
| Proxy construction, 46 overrides | 23106.04                    | 1896.60                    | 91.8%             |

Object-reference calls measured 41.67 to 36.17 microseconds and callbacks 35.19 to
31.26. The multi-level Dart-to-JS override measured 225.02 to 217.73 microseconds;
default parent dispatch measured 213.38 to 213.33. These latter paths are effectively
unchanged, rather than a broad speedup claim. Synthetic JS-wrapper-only allocation
measured 10.47 to 0.50 microseconds; it does not include a Dart constructor or certify
native object allocation.

All three process pairs held 4,000 bridge cells for 1,000 one-override proxies on either
implementation. With 100 proxies overriding 46 members, baseline held 4,900 cells and
current held 400, a 91.8% reduction. These are live bridge cells, not total heap memory.
Generated Dart source changed from 91,864 to 86,151 bytes; generated TS from 12,451 to
12,260 bytes. The bundled probe/runtime grew from 75,177 to 76,743 bytes. Source line
count and bundle size therefore do not show the same reduction as per-instance
resources. The unchanged joint collector remains responsible for both heaps.

## Handoff

Evidence and reproducible local comparison scripts are in
`.local/binding-peer-dispatch-20261008/`. `production/measured-report.json` references
all six process receipts; `production/run.py measure` reproduces the paired measurements
using the retained generated probe applications. The environment, generated byte/line
counts, raw samples and successful teardown checks are retained alongside it. Final
application receipts and the canonical/header mirror audit are also retained.

No required work remains in this task. No commit, push, CI, SDK rebuild or publication
was performed. Android and physical iOS devices were not rerun. Review the compatibility
section before consuming the regenerated packages; old engines/bundles must be updated.
