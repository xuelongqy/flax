# Task: Engine-backed generic bindings

Status: the follow-up SDK aggregation optimization passes macOS arm64 V8 acceptance.
Prior functional acceptance and performance observations remain below. Changes are
maintained on Flax `feat/dynamic-engine-sdk` and Flutter `flax/main`. The 8 ms
full-collection P95 target is not consistently met.

## Goal and scope

Replace finite generic type catalogs with real Dart Type handles and cached VM closure
instantiation. Keep one adapter per declaration, preserve JS inheritance, overrides,
super calls and reference ownership. Preserve pre-existing working-tree edits. Source
publication covers both repositories; CI dispatch, standalone JS SDK rebuilds and
artifact publication remain outside this task.

## Implementation

Internal engine binding extension 6 provides actual instance types, Type components,
nullable Type composition and checked generic closure instantiation. Native ABI 2 and UI
protocol 24 remain unchanged. Manifest 20 removes method tuple catalogs. The engine and
framework require matching extension versions and table sizes.

Shared Dart and JS conversion materializes class, method, callback and Record metadata
on first use. Recursive member views remain lazy; caches retain metadata rather than
business receivers. Explicit provider choices survive specialization. Callback-only
finite Widget constraints remain separate from ordinary Record and collection views.
Default constructor inference keeps the legal shared default; explicit selection uses
actual VM type arguments and checks bounds without enumerating combinations.

Instance type queries use `Dart_InstanceGetType`, with a weak per-session cache. They do
not invoke user `runtimeType` overrides or treat Flutter Widget matching tokens as VM
Types. `dartTypes.of` exposes a generated proxy's native Dart view: JS-only subclass
members do not become members of a Dart type. This distinction uses TypeScript-only
metadata, without extra per-object fields or generated JS behavior.

## Shared class selector

Generic class exports now offer `Class.$type(...tokens)` as the class-local equivalent
of `dartType(Class, ...tokens)`. Registration installs one shared function; ordinary
factory declarations reuse the common signature and proxy classes add only an erased
static declaration. No selector implementation is emitted per class. Generic enums are
frozen after registration. Explicit static-member/constructor conflicts fail; automatic
selection skips the conflicting surface and retains ordinary non-generic `$type`
members. The engine APIs, ABI, protocol and TS build pipeline are unchanged.

The final isolated bindings bundle grows by 166 minified bytes (47,609 to 47,775), not
per generic declaration. This is a bundle measurement, not an application-size
guarantee.

Follow-up validation passes 601 generator cases, 164 JS tests and 573 real macOS V8
framework UI cases, plus strict workspace TS checking, analysis, reproducible generation
and documentation checks. Existing fixtures cover constructors, nested tokens, frozen
generic enums, native Widget proxies, private fields, overrides and `super`; the JS
registration regression verifies 1,000 exports share one selector. Release/AOT and other
platforms were not rerun for this JS-only convenience API. TS syntax lowering remains
deferred.

## Future ownership

Pending native SDK Future consumers retain their unresolved producers through private
SDK dependency edges. The bridge returns native SDK Futures and weakly registers pending
Promise adapters. Settlement, cancellation and switching to another source release
obsolete ownership. Rootless continuation cycles remain collectible; the bridge does not
add permanent strong Promise roots or custom Future facades.

The SDK changes cover continuations, async/await, joins, timeout, iteration and Stream
consumers, including single-subscription and broadcast controller completion. GC-only
fields explicitly survive AOT optimization. The maintained Dart patch includes these
changes and remains revision-checked and idempotent.

List inputs to `Future.wait` and `Stream.fromFutures` preallocate dependency slots;
other Iterables retain their single-pass behavior. The same continuation Futures own
pending producers, with the existing completion and cancellation release paths. Length
failures remain inside `Future.wait`'s asynchronous error handling. Ignored
continuations keep their original Null/void result types independently of
dependency-list inference. The collector and its fixed-point protocol remain unchanged.

## Verification

Before the aggregation optimization, macOS arm64 debug, profile and release engine
builds pass with the following generic-binding acceptance results:

| Gate                    | Result                                                                                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Workspace check steps   | All steps pass, including 600 generator cases, 162 JS cases, strict TypeScript, analysis, formatting, documentation, package consumers and native configuration. |
| Complete V8 UI          | 590 cases: 573 framework cases, seven package unit examples, six application examples and four aggregate cases. No failures or skips.                            |
| Runtime and joint GC    | 43 cases pass.                                                                                                                                                   |
| Release/AOT application | 216 Widget cases pass; two Flutter debug-hook cases are explicitly inapplicable. Signature, V8 JIT, single-library and source-removed relocation checks pass.    |
| Profile application     | Both runs pass 216 functional Widget cases and one measurement case, with the same two debug-only exclusions. The host downloads the complete timeline.          |

The workspace command was resumed at static analysis after correcting its invocation
environment; this is completion of all documented check steps, not a claim that the
original interrupted command returned success. A stale hook cache from another Flutter
SDK was backed up individually and regenerated. Analysis also caught a reserved import
prefix in the application test entry; the corrected entry passed both application modes.

Four Future ownership groups cover 19 waiting paths in debug and real AOT. Three VM
type/generic groups, 20 upstream SDK async test files, and 17 Material interface cases
pass. The previously timed-out VM collection request passes in isolation and in the
complete UI run. Shared collection declaration generation now excludes the inherited
Type marker when omitting overridden APIs; 12 focused cases and the cross-module
inheritance regression pass. It adds no runtime fields or per-class JS behavior.

After regeneration and all workspace check steps, 197 generated Dart and JS runtime
artifacts have the same hashes as the complete UI run. This supports reusing that UI
evidence after the TypeScript declaration fix. Source/head auditing finds only the
intended generator/test and application-entry changes since the final validation
snapshot; Flutter and Dart implementation sources remain unchanged.

The Widget weak-reference regression now collects after its owning async frame returns.
Its assertions still verify retention before use and release after unmounting. This
avoids treating AOT suspend-frame arguments as a framework ownership leak; it requires
no production Widget GC change. Application gates also register the generic and Future
checks as Widget tests so their failures appear in the integration receipt.

The aggregation follow-up rebuilds debug, profile and release engines with the original
collector restored. It passes 43 runtime/joint-GC cases, five Future ownership and
aggregation groups covering 21 waiting paths, 20 upstream SDK async test files, and the
complete 574-case V8 framework UI suite without failures or skips. The real release/AOT
application passes 217 cases; the same two Flutter debug-hook cases are inapplicable.
Its signature, hardened runtime, JIT entitlement, single V8 dependency closure and
source-removed relocation checks pass. Runtime, focused Future, complete UI and release
application gates take 28.2, 117.2, 1,018.7 and 182.2 seconds respectively. Analysis,
patch guards, reverse application, idempotency and documentation checks pass. This
follow-up does not rerun the entire workspace check or certify another platform.

The ownership review keeps the accepted SDK and collector sources byte-identical. Six
Future groups now include direct weak-source calibration and completed-aggregation
release checks for both List and Iterable inputs. Six bridge-GC groups cover ten Promise
derivation paths with Dart-held and JS-only roots, including the four aggregation
variants. Both focused debug suites pass, and the real release/AOT application passes
218 cases with the same two debug-hook exclusions and delivery checks. Analysis and
documentation checks pass. The complete UI suite and SDK test files are not repeated for
these test-only additions. Ordinary chained Future aliases may retain a completed
source; that is separate from releasing its detached Promise producer metadata.

## Measured costs and limits

Before the aggregation optimization, the AOT comparison used identical compiler/runtime
binaries with original and modified SDK kernels: 25,000 sources, two continuations and
one join per batch, five alternating rounds and 55 samples per variant. Median time is
9,042 us originally and 10,747 us with dependency edges, an 18.9% increase in this
synthetic Future batch. This affects general SDK Future processing; it is not a claim of
an 18.9% application slowdown. The earlier 12.8% observation remains historical local
evidence.

The follow-up splits `then`, `Future.wait`, `await`, `Stream.fromFutures` and the
combined batch. Every sample checks its result. Separate registration/completion timings
are recorded; their independently summarized medians must not be added. Seven rotated
rounds provide 105 measured samples per case and variant at each of 25,000, 50,000 and
100,000 sources. No build or other benchmark runs concurrently with the accepted
samples.

At 25,000 sources, the batch-total medians are:

| Path                       | Original SDK | With dependency edges | With List preallocation |
| -------------------------- | ------------ | --------------------- | ----------------------- |
| Two `then` continuations   | 5.821 ms     | 6.072 ms              | 6.028 ms                |
| `Future.wait`              | 4.132 ms     | 5.042 ms              | 4.501 ms                |
| One `await` relay          | 8.654 ms     | 7.404 ms              | 7.438 ms                |
| `Stream.fromFutures`       | 3.873 ms     | 5.076 ms              | 4.198 ms                |
| Two continuations and join | 10.007 ms    | 10.809 ms             | 10.218 ms               |

At 50,000, `Future.wait` changes from 11.095 to 9.601 ms with preallocation. All seven
paired rounds improve at 25,000 and 50,000; the 100,000-source samples do not show a
stable improvement. `then` and `await` are not rewritten; their experiments do not
establish a stable benefit from the tested alternatives. These are batch measurements,
not application slowdown percentages or universal speedup claims.

Controlled SDK GC comparisons keep the Flutter engine binary identical and switch only
the original SDK versus the dependency edges. Three alternating runs use 300,000 live JS
objects, 1,000 callback pairs and 60 externally requested collections per phase. Phases
cover no extra Futures, 25,000 pending chains, settled chains and discarded chains. The
controller drains timelines every ten requests; RPC latency is separate from GC pauses.
Both SDK variants report 48-byte Future instances and return to eight live Futures after
discarding the load. Each phase has 183 major-GC samples per variant, including idle
collections. Pooled P95 values are:

| Phase            | Original SDK | With dependency edges |
| ---------------- | ------------ | --------------------- |
| No extra Futures | 2.341 ms     | 2.339 ms              |
| Pending chains   | 5.990 ms     | 5.624 ms              |
| Settled chains   | 3.352 ms     | 3.821 ms              |
| Discarded chains | 2.415 ms     | 2.501 ms              |

The phase results do not establish a uniform GC slowdown. The higher settled and
discarded tails also prevent a general zero-overhead claim.

A second experiment keeps application AOT identical and batches collector marks. It
reduces root-preparation P95 from 0.389–0.405 to 0.174–0.185 ms, but whole major-GC P95
does not consistently improve: the settled phase changes from 3.234 to 3.754 ms, and the
ordinary stable phase from 2.285 to 2.310 ms. This collector prototype and its Hermes
queue adaptation are rejected and restored to the original source. Persistent-node reuse
and individually cleared raw-input retention also fail their performance acceptance.
Only the SDK aggregation optimization is retained.

Requested-collection experiments do not replace the earlier natural-pressure target or
provide a Flutter frame-latency guarantee. Raw samples, excluded overlapping runs and
rejected prototypes remain in `.local/future-cost/`.

The original SDK is a comparison control without the required producer ownership. It is
not a supported engine configuration or an alternative GC backend.

The real release generic-call probe records 500 calls per sample and nine samples per
path: plain calls have an 11.330 ms median and selected typed calls 9.145 ms. First
selection is 0.647 ms and fixture startup is 185.579 ms. These are one-process absolute
measurements with different conversion contracts, not evidence that typed calls are
universally faster or that startup improved over the old implementation.

Both profile runs use 300,000 live JS objects, 1,000 callback pairs and 150 allocation
bursts per phase. Percentiles use nearest rank:

| Joint-phase measurement    | Run 1                          | Run 2                          |
| -------------------------- | ------------------------------ | ------------------------------ |
| Old-generation GC          | n=719; P95 1.343 ms; max 5.492 | n=728; P95 1.262 ms; max 6.945 |
| Owner-requested collection | n=18; P95/max 8.829 ms         | n=18; P95/max 7.244 ms         |
| Frame total                | P95 15.353 ms; P99 25.653 ms   | P95 15.119 ms; P99 24.571 ms   |

The second run meets the 8 ms full-collection P95 target; the first does not. With only
18 owner-requested samples per run, P95 is the maximum: do not discard the first run or
claim stable compliance. No V8 collection occurs inside either stable-root phase;
changing references can still require a full trace. Traced RSS includes the timeline
buffer and is not an untraced production-memory comparison. These synthetic results
provide no general frame-latency guarantee.

Generated Dart remains 1,061,323 bytes for Core, 300,853 for Material and 16,369 for
Cupertino. Relative to the captured pre-migration source baseline, Core decreases 58.3%,
Material 13.8%, and Cupertino increases 13.4%. Source-size changes do not imply the same
change in application binary size.

## Boundaries and remaining work

Android and iOS/Hermes have not been rebuilt or verified for this extension. Unknown
structural callback/Record layouts and unavailable conversions fail explicitly;
arbitrary new AOT code is not generated at runtime. GC does not replace application
`dispose`, navigation or Stream-controller responsibilities.

Functional review has no remaining confirmed correctness blocker. Reducing general
Future overhead and obtaining consistent full-collection tail latency remain performance
work; the measurements above must accompany acceptance of the current implementation.
Other platforms and production distribution remain outside this validation.

Ignored local evidence is in `.local/future-ownership/`: the workspace/UI gate logs and
audits, application receipts, `profile-current-summary.json`,
`profile-repeat-summary.json`, `benchmark-current-results.json`,
`generic-call-aot-current.log` and `final-source-audit.json`. No commit, push, CI
dispatch, JS SDK rebuild or publication was performed.
