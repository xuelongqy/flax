# Task: Shared binding capability completion

Status: completed (macOS arm64 V8); Hermes verification is environment-blocked

## Goal and scope

Complete and review the feasible shared mechanisms in the 2026-10-15
[binding audit](../architecture/binding-coverage-map.md). Preserve the A1/A6/A12
baseline, ordinary JS inheritance/super behavior, and conditional Dart/JS reachability.
Deliver the reviewed Flax changes on `feat/dynamic-engine-sdk`. SDK publication, engine
rebuilds, manual CI dispatch and changes to SDK locks are outside this task.

## Shared implementation

Type tokens use actual engine Types. Unknown native Function layouts use common
invocation metadata; unknown Records remain opaque. Typed callback Map keys share a
weak-key counterpart memo without making temporary callbacks escape. Generic Widget
views use ordinary native objects. Extension-type members use representation views.
Selected super constructors and mixed accessor halves share proxy dispatch. Widget
collection writes and custom lazy JS Iterables reuse the existing conversions and
bridge-reference cleanup. Core owns its additional selected declarations; public export
conflicts fail explicitly and provider priority is unchanged.

No type-tuple enumeration, per-class GC backend, protocol/ABI change or developer
lifetime configuration was added. Deferred generic reconstruction uses `withType` so
callback scope and encoding metadata survive specialization.

## Review corrections

1. Failed callback conversion now releases its source handle immediately. Ten repeated
   rejected conversions leave the warmed handle baseline unchanged without forcing GC.
2. The collection conversion memo now preserves repeated lazy Iterable inputs and
   releases the source when typed restoration fails.
3. Authentic Dart Functions roundtrip through Object/dynamic and nested collections,
   reusing native closure identity. Plain JS functions still need a typed signature. A
   callback remains alive while either its Dart Map or a native box retains it, and is
   collected after both roots disappear.
4. Iterator acquisition reads `next` once and calls the captured method with its
   original receiver.
5. Positional super formals reuse collision-free parameter locals. A legal native
   `_flaxPeer` parameter no longer collides with internal state; wire names and native
   defaults stay unchanged. The regression fixture intentionally keeps that spelling.
6. Reified callback and Record view keys retain conversion metadata in addition to the
   actual Dart Type. The shared TypeRef cache no longer merges ordinary and call-scoped
   arguments. Both call orders are tested with real generic objects.

The review reproduced these failures before fixing them. An old negative test for
Functions inside Object collections was replaced with native identity and value
assertions. Its other wrong-type, missing-argument and cleanup assertions remain. An
initial static run found only the intentional fixture's local-name lint after all 609
generator tests passed; the fixture now explains and suppresses that one lint.

## Final verification

| Gate                                                  | Actual result                                                                                                                                                                           | Elapsed     |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `dart run melos run check`                            | Passed; 609 generator tests, 90 tool tests, strict TS, analysis, formatting, documentation, package archives and CMake configuration. One Windows-only CDB self-test is not applicable. | 941.920 s   |
| `dart run melos run check:runtime:v8`                 | 43 runtime/joint-GC tests pass, including 1,000 repeated bridge cycles.                                                                                                                 | 25.176 s    |
| `dart run melos run check:ui:v8`                      | All 585 framework cases pass with zero skips; seven owners' unit/application examples and embedded aggregate unit/application checks pass.                                              | 1,604.146 s |
| `dart run tool/check_engine_application.dart release` | 232 named application cases pass; two debug-hook checks are not applicable. Dart AOT, V8 JIT, signing and relocation are verified.                                                      | 230.281 s   |

V8 application verification includes Dart AOT, V8 JIT, a single V8 library closure,
local ad-hoc signing, hardened runtime, JIT entitlement and relocation after removing
the source copy. Library validation is disabled for the development signature; this is
not notarization or production signing.

The existing Future ownership fixture waits for at most eight collection-pressure rounds
rather than assuming exactly two guarantee an old-space collection. Its weak reference
disappearance and business-root survival assertions remain intact. No engine GC
implementation was changed for that observation.

## Hermes environment blocker

The iOS simulator application compiled, but the producer audit rejected it before
launch. All six local Hermes producer manifests have a recipe different from the current
engine requirement: expected `a745e95d...`, selected simulator producer `7bb428e2...`.
The Hermes revision itself matches. No matching producer was found, no SDK was rebuilt
and no audit was bypassed; this run proves neither Hermes runtime behavior nor Hermes
release/AOT. Re-run its application gate with matching maintained engine/SDK artifacts
before claiming cross-engine acceptance.

## Remaining boundaries and evidence

The
[remaining mechanism gaps](../architecture/binding-coverage-map.md#remaining-mechanism-gaps)
separate arbitrary new typed closure/Record layouts, generic structural Widget hosts,
optional mixin-composition generation, broader generic inference and SDK selection
coverage from intentional language/lifecycle boundaries. GC does not call dispose, pop
Routes or execute a JS generator's cleanup on early stop.

Existing macOS engines were reused. The review baseline was Flax `74bd93ac`; maintained
Flutter remained `fc097fae44b2eb9cdd99fbb76a068ac6889952de` with a clean tracked
worktree. The original 171 baseline paths were preserved, including all four original
handwritten parity fixtures byte-for-byte. No engine/SDK rebuild, publication or manual
CI dispatch was performed. Profile/performance and physical-device gates were not run.

Raw review reproducers, failed attempts, final source hashes and validation receipts are
in `.local/binding-review-20261015/` (ignored). Earlier implementation evidence is in
`.local/binding-gap-implementation-20261015/` (ignored).
