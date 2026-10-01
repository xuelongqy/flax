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

Run [36848319474](https://github.com/xuelongqy/flax/actions/runs/36848319474) completed
for `cacdba4ed45d1fb52d12aaacf16602472c41d5ca`: eight target jobs passed, three failed
and macOS x64 hit its two-hour job limit. The package archive workflow
[36848319175](https://github.com/xuelongqy/flax/actions/runs/36848319175) passed. All
twelve verification artifacts were collected, including the cancelled target's partial
receipt. There are 22 bridge build records in this round; Linux x64 failed preparation
before either engine was built. The earlier round built all 24 bridges. The twelve
skipped Linux/native branches belong to the opposite host family. Every
workflow/job/check was terminal before repairs started.

| Target                                                         | Observed result                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS arm64, Linux arm64, Android x64, iOS simulator arm64/x64 | Both engines and coexistence passed platform runtime and relocated application delivery, with dependency/signature inspection where applicable                                                                                                                                                                                                                                     |
| Android arm32/arm64, iOS device arm64                          | Both bridges and applications built; physical device execution remains pending                                                                                                                                                                                                                                                                                                     |
| Linux x64                                                      | Preparation passed all 478 generator tests, then storage passed 13/14. Flutter's test VM rejected `Isolate.resolvePackageUriSync` in the fresh-process persistence test. Neither engine's full scope ran in this round; the receipt records `failedStage: prepare`                                                                                                                 |
| Windows x64/arm64                                              | V8 passed standalone Dart JIT/AOT and application delivery, confirming the storage path fix. Native worker-first DLL tests and the Flutter coexistence application passed. Hermes failed in the independent Dart path: x64 at JIT creation, arm64 after successful JIT at relocated AOT creation. The separate Dart coexistence check also crashed; both target jobs remain failed |
| macOS x64                                                      | Both engines passed standalone Dart JIT/AOT and separate Flutter application delivery. The coexistence application ran, but the job was cancelled during the final independent Dart check at 120 minutes. The partial receipt retains the two engine results and `coexistence: null`; complete target acceptance remains pending                                                   |

The Core UI runner stages unchanged tests as an independent consumer of package copies,
removing the dev-engine hook cycle. Canonical paths preserve generated provider
identity. Local V8 verification passed all 346 package-owned UI cases, all examples and
the aggregate application. Hermes Core passed 131 cases. Both independent consumers
passed Dart JIT, checksum rejection and relocated AOT using locked cached archives.

Storage retains foreign-directory/concurrent-open rejection and compares normalized
native paths. All four storage UI cases and its persistence application example passed
with each engine on macOS arm64. The fresh-process fixture now resolves from the two
supported command roots without the package-URI API unavailable in Flutter's test VM.
The previous failure was reproduced locally under Flutter; both the repository-root Dart
command and package-root Flutter command now pass all 14 storage tests.

The macOS x64 hosted job needs more than 120 minutes for six debug/release application
builds plus independent consumers. Only this target's job limit increases to 180
minutes; command/device timeouts and all assertions remain unchanged. Other targets
retain their existing job limits.

Windows diagnostics before engine creation show only operating-system CRT modules; they
do not establish the CRT loaded later with the engine or the crash cause. Native C++
success does not certify Dart FFI creation. Further Windows fixes require stronger
evidence rather than speculative compiler flags. The independently proven Hermes
transfer SDK defect also remains. SDK/toolchain locks and rc.1 archives are unchanged.

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
