# Task: Native SDK integration and platform validation

Status: rc.3 SDK published and locally verified; Flax platform acceptance pending.

## Goal and scope

Consume the published `flax_js_runtime v0.3.0-rc.3` archives (SDK version `0.3.0`,
manifest schema 3) for twelve targets and both engines. Flax compiles only its
ABI/adapter. Keep ABI 2, Hermes as the default, and PR #2 unmerged. Published rc.1 and
rc.2 assets and toolchain locks remain unchanged. Do not publish Flax.

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
| Tooling                    | 66 tests passed; one Windows-only real-crash self-test is inapplicable on macOS                  |

This local round did not rerun UI or device suites. Local Apple builds used Xcode 27; CI
pins Xcode 26.6. SDK manifests retain version `0.3.0`.

## Latest completed Flax round

The rc.2 baseline at `ca7f98ffb3e28e8d5b6e64e111b25929f9537c1e` completed
[Workspace 36942161323](https://github.com/xuelongqy/flax/actions/runs/36942161323) and
[Package 36942161063](https://github.com/xuelongqy/flax/actions/runs/36942161063). Ten
target jobs and the package workflow passed; Windows x64, Windows arm64 and the summary
failed. All 27 jobs/checks were terminal: twelve successful, three failed and twelve
inapplicable opposite-host branches skipped; no commit statuses remained. All twelve
receipts matched rc.2: 24 groups built, sixteen ran and passed application delivery, and
six device groups remained build-only. macOS x64 passed in this round. Linux x64 full
passed both engines' 39 runtime contracts, 346 package-owned UI cases per engine,
examples and aggregate application, retaining the original Hermes assertion. These rc.2
receipts do not certify rc.3.

Windows V8 and the Flutter coexistence application passed, but standalone Hermes Dart
JIT/AOT and independent Dart coexistence failed. Four actual heap minidumps contain
loaded modules, `0xc0000005` exceptions, stacks and memory layout; the original Dart
process ultimately exited with `0xc0000409`. Both Windows debugger heap-capture
self-tests passed while preserving the original child AV exit code.

The dumps establish the Hermes root cause: Dart's isolate stack is fully committed
without a guard page. Hermes counted an adjacent allocation's reserved pages as this
thread's guard, leaving zero usable native stack. Internal JavaScript reported a false
stack overflow; Release then read an unsuccessful CallResult's uninitialized storage and
faulted during initialization. The SDK patch handles committed stacks and makes
internal-bytecode failure fatal before accessing its result. This is not a proven CRT or
compiler-flag defect; nearby exported names do not identify exact internal functions.
The rc.3 native worker regression passed, but actual Flax Windows Dart acceptance is
still pending. Native C++ or Flutter success cannot replace it.

## Remaining acceptance work

1. Run the rc.3 Flax matrix and require Windows x64/arm64 standalone Dart JIT/AOT,
   independent dual-engine coexistence and application delivery to pass. Collect all
   failure logs and verification artifacts only after the whole round is terminal.
2. Keep Linux's default full checks passing. Earlier rc.1 iOS V8 full Material execution
   had 166 passes and eleven failures; WebSocket was not reached. Headless/fake-clock
   assumptions under the live integration binding remain unresolved. Platform smoke does
   not certify those full assertions, which remain enabled.
3. Execute Android arm32/arm64 and signed iOS device checks using the platform guide.
   Their six engine/target groups remain build-only until actual runtime and application
   delivery pass.
4. Require all applicable CI and summary checks plus matching SDK and stage receipts
   before completing acceptance. Leave PR #2 unmerged.
