# Task: Native SDK integration and platform validation

Status: rc.3 integration reviewed. Completed CI evidence, the cache-lock correction and
remaining acceptance boundaries are recorded below.

## Goal and scope

Consume the published `flax_js_runtime v0.3.0-rc.3` archives (SDK version `0.3.0`,
manifest schema 3) for twelve targets and both engines. Flax compiles only its
ABI/adapter. Keep ABI 2, Hermes as the default, and PR #2 unmerged. Published rc.1, rc.2
and rc.3 assets and toolchain locks remain unchanged. Do not publish Flax.

## Acceptance criteria and approach

Record bridge build, actual runtime and external application delivery independently.
Build-only jobs and missing devices cannot certify runtime or application acceptance.
Default CI runs Linux x64 full checks for both engines; SDK changes select platform
checks for all affected targets. Full checks on other targets remain explicit.

Reuse target-table locks, the verified SDK cache, incremental bridge builds and
package-owned assertions through
[the unified platform entry](../../tool/check_platform.dart). See
[the platform guide](../testing-platforms.md) and
[ADR 0036](../decisions/0036-shared-engine-sdk.md).

## Published SDK evidence

Candidate
[36954561632](https://github.com/xuelongqy/flax_js_runtime/actions/runs/36954561632)
passed all eight jobs at `b76a32068192467c2fcdd18ee65f3229219c36ac`. All twelve
artifacts and 24 archives passed ZIP/archive digests, safe extraction, per-file manifest
hashes, upstream/patch locks and architecture checks. Native-host SDK verification
passed architecture, exports and dependency-closure checks. Twelve desktop consumers
executed after relocation; twelve mobile consumers only compiled/linked. Both Windows
architectures actually exercised a fully committed 1 MiB worker stack, recursive
RangeError handling and the retained 101 detached-buffer assertions.

Publication
[36958864919](https://github.com/xuelongqy/flax_js_runtime/actions/runs/36958864919)
reused those candidate bytes as
[rc.3](https://github.com/xuelongqy/flax_js_runtime/releases/tag/v0.3.0-rc.3). All 24
asset digests and published checksums match the candidate. Publication repeated safe
extraction and all file-hash checks before creating the release. These SDK runs do not
certify Flax Dart FFI or application delivery.

Flax's 24 target locks now select rc.3. Official release archives passed these local
macOS arm64 checks:

| Stage                      | Observed result                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------ |
| Runtime contracts          | Hermes 39/39 and V8 39/39, including the original detached-buffer assertion                      |
| Native CTest               | Hermes 1/1 and V8 2/2                                                                            |
| Independent Dart consumers | Both engines passed JIT, checksum rejection and relocated AOT execution                          |
| Dual-engine consumers      | Independent Dart and native coexistence, foreign-object rejection, reentry and recreation passed |
| Tooling                    | 67 tests passed; one Windows-only real-crash self-test is inapplicable on macOS                  |

This local round did not rerun UI or device suites. Local Apple builds used Xcode 27; CI
pins Xcode 26.6. SDK manifests retain version `0.3.0`.

## Completed Flax acceptance

At `2636d9bd149432c4d99c67bd3f98fb1931e85419`,
[Workspace 37000526994](https://github.com/xuelongqy/flax/actions/runs/37000526994)
(attempt 2) and
[Package 37000526672](https://github.com/xuelongqy/flax/actions/runs/37000526672)
passed. All 27 effective jobs/checks were terminal: fifteen successful and twelve
inapplicable opposite-host branches skipped; no commit statuses remained.

All twelve verification ZIPs matched GitHub digests and sizes and passed CRC and safe
extraction checks. All 24 SDK archive/library hashes and versions matched rc.3 locks and
candidate manifests: 24 groups built, eighteen actually ran and passed application
delivery, and six physical-device groups remained build-only. Evidence combines eleven
attempt-1 artifacts with the new macOS x64 attempt-2 artifact from the same head.

| Acceptance                                                                   | Successful job |
| ---------------------------------------------------------------------------- | -------------- |
| Windows x64 Dart JIT/AOT, Dart/native coexistence and application delivery   | `110817006636` |
| Windows arm64 Dart JIT/AOT, Dart/native coexistence and application delivery | `110817006885` |
| macOS x64 actual execution and artifact after hosted-runner disconnection    | `110876972993` |
| Linux x64 default full checks for both engines                               | `110816943667` |
| Final workflow summary                                                       | `110928813617` |

Both Windows jobs compiled and executed the native coexistence consumer using the
absolute native-path `LoadLibraryExA` loader and its SDK dependency directory. All
foreign-handle rejection and destruction/recreation assertions passed. Both real CDB
self-tests passed; only their expected self-test dumps were produced. No actual Hermes
crash occurred in this round. macOS x64's first attempt lost hosted-runner
communication; its job log was unavailable and it produced no artifact. The successful
second attempt provides current-head runtime evidence; the first failure remains
recorded.

Linux x64 full passed both engines' 39 runtime contracts and 346 package-owned UI cases
per engine, examples, aggregate application and native/Dart coexistence, retaining the
original Hermes detached-buffer assertion. Other targets used platform scope.

## Review follow-up

Independent build processes sharing the SDK cache previously used a nonblocking
exclusive file lock. A second process failed with `Resource temporarily unavailable`
instead of waiting for the active extraction. The shared SDK helper now uses Dart's
blocking exclusive lock. The existing SDK tests include a real child process holding the
cache lock; preparation must wait and then return a verified SDK. All seven SDK contract
tests and 68 tool tests pass locally; the real Windows debugger self-test is
inapplicable on macOS. Scoped analysis, formatting, documentation checks and both
engines' runtime checks pass, including 39 contracts per engine, native CTest and
standalone JIT/checksum-rejection/relocated-AOT consumers. UI and device suites were not
rerun locally for this correction. The SDK bytes, ABI and toolchain locks are unchanged.

This follow-up requires its own completed CI evidence. Its current workflow status and
artifact audit are recorded in [PR #2](https://github.com/xuelongqy/flax/pull/2); the
accepted head above remains explicit. The monitoring timer stays closed and the PR stays
unmerged.

Four rc.2 heap minidumps established the Hermes root cause: Dart's isolate stack is
fully committed without a guard page. Hermes counted an adjacent allocation's reserved
pages as this thread's guard, leaving zero usable native stack. Internal JavaScript
reported a false stack overflow; Release then read an unsuccessful CallResult's
uninitialized storage and faulted during initialization. The SDK patch handles committed
stacks and makes internal-bytecode failure fatal before accessing its result. This is
not a proven CRT or compiler-flag defect; nearby exported names do not identify exact
internal functions. The rc.3 native worker regression and actual Flax Windows Dart
JIT/AOT now pass on both architectures. Native C++ or Flutter success alone cannot
certify Dart FFI acceptance.

## Acceptance boundaries and next checks

1. Require the review follow-up's applicable CI, summary and matching SDK/stage receipts
   to pass. Do not reuse the earlier head's green results as this change's acceptance.
2. Earlier rc.1 iOS V8 full Material execution had 166 passes and eleven failures;
   WebSocket was not reached. Headless/fake-clock assumptions under the live integration
   binding remain unresolved. Platform smoke does not certify those full assertions,
   which remain enabled.
3. Execute Android arm32/arm64 and signed iOS device checks using the platform guide.
   Their six engine/target groups remain build-only until actual runtime and application
   delivery pass. These require devices outside the completed hosted-CI scope.
