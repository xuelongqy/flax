# Task: Native SDK integration and platform validation

Status: implementation in progress; local stages passed, full acceptance blocked.

## Goal and scope

Consume the published `flax_js_runtime v0.3.0-rc.1` archives (SDK version `0.3.0`,
manifest schema 3) for twelve targets and both engines. Flax compiles only its
ABI/adapter. Keep ABI 2, Hermes as the default, and PR #2 unmerged. Do not rebuild or
change the engine release or publish Flax.

## Acceptance criteria

Every target/engine needs separate bridge build, runtime and external application
records. Default CI runs Linux x64 full for both engines; related changes add
platform-only checks and full target checks remain manual. Missing devices/tools, failed
contracts and build-only jobs cannot be recorded as full acceptance.

## Approach

Reuse target-table locks, the existing verified SDK cache and incremental CMake bridge
builds. Reuse package-owned assertions and `flax_test` contracts through
[the unified platform entry](../../tool/check_platform.dart). See
[the platform test guide](../testing-platforms.md) and
[ADR 0036](../decisions/0036-shared-engine-sdk.md).

## Results and validation

The SDK locks cover all 24 published archive URLs/hashes. Hook target selection handles
iOS device/simulator differences. Bridges register full runtime closures, Windows
exports/import libraries, Linux SDK libc++, Android NDK 30/API 24 and Apple deployment
minima. Application checks cover architecture, final dependencies, Apple framework
references/signatures, shared runtime byte equality and relocation. The device
release/AOT launch path is implemented but not yet run on a physical Android/iOS device.
Local Apple builds used Xcode 27.0; CI pins Xcode 26.6.

All 24 extracted SDKs passed Flax's manifest/file-hash validation and actual
Mach-O/ELF/PE architecture/dependency inspection. This SDK consumption check does not
certify bridge compilation or execution.

| Local stage                        | Observed result                                                                                                                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Apple bridge builds                | 10/24 target-engine groups built: macOS arm64/x64, iOS device arm64 and simulator arm64/x64, both engines; cross builds do not certify execution                                                                   |
| Tooling checks                     | 64/64 tool tests passed; changed tooling/storage analysis reported no issues; earlier formatting, workflow lint, documentation and package-content checks passed                                                   |
| macOS arm64 platform scope         | Both engines passed native contracts, independent Dart JIT/AOT, external Flutter debug/release, signatures/dependencies and relocated release execution; both-engine coexistence passed                            |
| V8 shared runtime                  | 39/39 contracts passed on macOS arm64                                                                                                                                                                              |
| V8 desktop UI                      | 346/346 package-owned UI cases, all package examples and the aggregate application passed after the hook/cache/scaffolding fixes; Hermes Core passed 131/131                                                       |
| SDK/bridge caching                 | Repeated build reused bridge objects; editing an isolated ABI source rebuilt only bridge objects/linking; all SDK library hashes remained unchanged                                                                |
| iOS arm64 simulator platform scope | Both engines and coexistence passed ABI/native, identity/UTF-16/reentry, loop closures, UI, signatures/dependencies and relocated bundles; Dart JIT, V8 jitless                                                    |
| iOS V8 full attempt                | Shared/runtime application reported 42 passing checks. Core 131, Canvas 3, Cupertino 2, Fetch 20 and Storage 4 UI cases passed. Material: 166 passed, 11 failed; WebSocket was not reached. Full acceptance failed |
| Hermes shared runtime              | 38/39 passed; constructing Uint8Array from a detached buffer did not throw the required TypeError                                                                                                                  |

The Hermes behavior is reproduced in an independent C++ consumer linking only the
checksum-locked rc.1 SDK: `new Uint8Array(buffer)` succeeds after `buffer.transfer()`.
This establishes an engine SDK defect independent of Flax ABI. The assertion remains
enabled; this task does not change rc.1 or hide the failure with a JS shim.

Device UI registration now runs synchronously and fixture loading uses `setUpAll`.
Viewport, widget search and fake-clock assumptions exposed by early device attempts were
corrected. Material still assumes headless/fake-clock behavior in navigation, builder
counts, lazy-list and animation tests. After consecutive unsuccessful full attempts,
further individual device assertions were not patched: the assumption that a headless
suite can run unchanged under a live integration binding needs a separate resolution.
These failures remain visible, not skipped or marked passed.

## Hosted verification

Run [36863277958](https://github.com/xuelongqy/flax/actions/runs/36863277958) completed
for `0aaa3888b42ece7e04b36c84145a28bf806a387f`: eight target jobs passed and four
failed. The package archive workflow
[36863277303](https://github.com/xuelongqy/flax/actions/runs/36863277303) passed. All
twelve verification artifacts were collected and checked against the locked SDK hashes.
This round contains all 24 bridge build records, 15 successful runtime records and 13
individual engine application-delivery records. Six groups remain build-only. The twelve
skipped Linux/native branches belong to the opposite host family. All workflows,
paginated jobs/checks and commit statuses were terminal before repairs.

| Target                                                         | Observed result                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS arm64, Linux arm64, Android x64, iOS simulator arm64/x64 | Both engines and coexistence passed platform runtime and relocated application delivery, with dependency/signature inspection where applicable                                                                                                                                                                                                                                                                                                 |
| Android arm32/arm64, iOS device arm64                          | Both bridges and applications built; physical device execution remains pending                                                                                                                                                                                                                                                                                                                                                                 |
| Linux x64                                                      | Storage passed 14/14, confirming the Flutter fixture fix. Hermes passed 38/39 runtime contracts; the detached-buffer assertion still fails. V8 passed 39/39 runtime contracts, all 346 package-owned UI cases and package examples, but the aggregate application driver executed macOS `open -a` on Linux. Its headless cases passed 2/2; live aggregate execution failed. The coexistence application passed. Full acceptance remains failed |
| Windows x64/arm64                                              | V8 passed standalone Dart JIT/AOT and application delivery. Native worker-first DLL tests and the Flutter coexistence application passed. Hermes x64 crashed at JIT creation; arm64 passed JIT and crashed at relocated AOT creation. The separate Dart coexistence check also crashed; both target jobs remain failed                                                                                                                         |
| macOS x64                                                      | The extended job limit allowed the full task to finish. Both engines passed standalone Dart JIT/AOT and native contracts; Hermes application delivery and both-engine coexistence passed. V8 application execution failed because the generic Back tooltip finder matched two widgets. Its application-delivery record remains false                                                                                                           |

The aggregate and standalone integration drivers now activate an exact macOS build only
for a macOS target. Other hosts and explicitly selected mobile targets do not invoke
`open`. The shared application scenario selects the navigation `BackButton` directly;
all return-result, text, controller and navigation assertions remain enabled. Changes to
this shared application fixture now select platform-only checks for both engines on all
affected targets. Ordinary package UI changes still use the default Linux full job.

The Core UI runner stages unchanged tests as an independent consumer of package copies,
removing the dev-engine hook cycle. Canonical paths preserve generated provider
identity. The default Linux V8 job now confirms all 346 package-owned UI cases and
examples; its remaining aggregate failure is the driver platform assumption. Local V8
aggregate headless and live application checks passed after that correction. The
standalone consumer passed its headless suite, debug integration, production release and
relocated release UI after the navigation selector change. Platform selection
regressions passed 10/10; scoped analysis and formatting reported no issues.

Storage retains foreign-directory/concurrent-open rejection and compares normalized
native paths. All four storage UI cases and its persistence application example passed
with each engine on macOS arm64. The fresh-process fixture resolves from the two
supported command roots without the package-URI API unavailable in Flutter's test VM.
Both repository-root Dart and package-root Flutter commands passed 14/14 storage tests;
the hosted Linux preparation now passes the same suite.

Windows diagnostics before engine creation show only operating-system CRT modules; they
do not establish the CRT loaded later with the engine or the crash cause. The doubtful
assumption is that native C++ or Flutter success certifies independent Dart FFI
creation. Further Windows fixes require actual loaded-module/debugger evidence rather
than speculative compiler flags. The independently proven Hermes transfer SDK defect
also remains. SDK/toolchain locks and rc.1 archives are unchanged.

## Remaining acceptance work

1. Verify the follow-up on Linux, Windows and macOS x64; keep default Linux full scope
   and the Hermes transfer assertion. Updating the defective engine requires separately
   authorized work and a new candidate SDK, leaving rc.1 unchanged.
2. Diagnose Windows Hermes Dart creation using actual process module evidence; retain
   both native and independent Dart checks even when the Flutter application passes.
3. Complete default Linux package-owned UI, example and aggregate checks; platform smoke
   does not certify the full Material/device suite.
4. Run Android arm32/arm64 and signed iOS device checks using the platform guide; these
   targets remain build-only until actual device execution passes.
5. Require all 24 build records and each supported runtime/application record before
   considering acceptance complete; PR #2 remains unmerged.
