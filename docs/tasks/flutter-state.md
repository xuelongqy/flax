# Flutter State and JS Components

Status: completed and verified on macOS arm64 with Flutter 3.47.2 / Dart 3.13.2.

## Result

JS class/new components pair with real Flutter Stateless/Stateful Elements and State.
Selected SDK lifecycle overrides and direct super entries are generated from the host
proxy model. Component constructor identity is independent of its name; outer keys
remain visible to Flutter lists. Protocol 9 replaces 8; the native ABI and application
object disposal policy remain unchanged. See
[components](../architecture/components.md).

## Current evidence

The initial source fingerprint covers 333 files. Baselines passed 21 generator and 11
construction/Builder/session tests. The first baseline command referenced a nonexistent
Context test filename; it was corrected to the existing Builder suite.

Targeted validation passes the independent host-proxy compile/execution fixture, 32 Node
tests, 14 real Hermes component tests and the component example scenario. Coverage
includes Context dependencies, GlobalKey movement, reassemble, same-named types,
ParentData, synchronous setState, deferred signals, Pages/Route eviction, source
replacement, failures, missing super and teardown. The configuration update regression
caught an oldWidget handle released before its hook returned; the old description now
remains held through the hook. Lifecycle failure checks caught mount/unmount
interruption; failures now leave an error host with normal unmounting or report at the
disposal Element boundary without replaying user hooks.

The representative component retains 23 owned JS handles and one subscription. Twenty
signal-only writes rebuild exactly twenty property hosts and leave component build
counts unchanged. Thirty mixed State/signal updates retain the same handle/subscription
totals. Engine disposal observes zero handles and subscriptions. This is deterministic
bridge cleanup, not a GC claim.

Generated lifecycle support is 3,128 Dart bytes and 1,018 TS bytes. The core bindings
are 187,789 Dart / 101,685 TS bytes; Material bindings are 48,005 Dart / 23,692 TS
bytes. The example pages IIFE is 137,833 bytes. These are file sizes, not heap
measurements.

## Toolchain

The repository now pins Flutter 3.47.2 / Dart 3.13.2, including package minimums and the
standalone consumer fixture. Both CI workflows read `.fvmrc`. The local ignored SDK uses
the same tagged revision. Historical task records retain their original tested versions.
Dependency versions are unchanged.

An earlier UI check passed runtime and Widget tests but stopped on a TLS handshake
failure downloading macOS SDK artifacts. A briefly started 3.47.0 check was cancelled
when the toolchain was explicitly advanced to 3.47.2. Neither is final acceptance. SDK
cache preparation used the
[documented CFUG mirror](https://docs.flutter.dev/community/china) for the pinned engine
revision after Google Storage retries; no mirror setting was persisted.

## Final verification

Both root commands passed using the pinned repository SDK:

| Command                       | Verified result                                                                                                                                                                         |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dart run melos run check`    | 22 generator tests, 32 Node tests, 4 tooling tests, reproducible bindings, analysis, formatting, type-checking, bundles, documentation and CMake configuration                          |
| `dart run melos run check:ui` | Reproducible FFI, native ABI test, 28 runtime tests, standalone JIT/relocated AOT and asset rejection checks, 132 framework tests, 6 example tests, macOS integration and release build |

With SDK/native caches prepared, `check` took 104.74 seconds and `check:ui` took 177.19
seconds. The macOS integration report records `flutterState: true` and
`completed: true`. The release app was built at
`examples/embedded/build/macos/Build/Products/Release/flax_embedded.app` (25.6 MB as
reported by Flutter). Native application tests use Flutter's test driver; this does not
claim manual system-input-method coverage.

Logs, command results and source fingerprints are under `.local/state`. The 348
non-ignored source fingerprints were identical before and after the final checks. Only
this handoff was subsequently updated and documentation checks rerun. Pub's lock changed
only in SDK lower bounds; pnpm's lock and native sources are unchanged. All
build/test/SDK outputs remain ignored. No commit, push or publication was performed.

## Deferred scope

Arbitrary Flutter subclassing, TickerProvider/mixins, JS GlobalKey/currentState, state
restoration and JS source hot reload remain outside this implementation. Existing
application disposal, page cleanup and Route ownership contracts remain in effect.

## Review follow-up

The [State review fixes](state-review-fixes.md) supersede the original unkeyed matching
claim and non-disposal lifecycle error policy. Dynamic mixed-type lists require stable
keys for retention; lifecycle failures must not abort normal Element cleanup.

The later [component type and query work](component-types.md) supersedes this record's
two-layer identity choice and unkeyed matching limitation. The results above describe
the implementation at the time; lifecycle and cleanup regressions remain required.
