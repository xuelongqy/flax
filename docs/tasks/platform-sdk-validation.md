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

Run [36834625461](https://github.com/xuelongqy/flax/actions/runs/36834625461) completed
for `e32ddac2ae0968fef9d43c687cd99030d48fa45d`: eight target jobs passed and four
failed. The package archive workflow
[36834625184](https://github.com/xuelongqy/flax/actions/runs/36834625184) passed. All 24
target/engine bridge build records are present. The twelve conditionally skipped
Linux/native branches belong to the opposite host family; they are not missing target
tests. Every workflow/job/check was terminal before repairs started.

| Target                                                         | Observed result                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS arm64, Linux arm64, Android x64, iOS simulator arm64/x64 | Both engines and coexistence passed platform runtime, dependency/signature inspection where applicable, and relocated application delivery                                                                                                                                                                     |
| Android arm32/arm64, iOS device arm64                          | Both bridges and applications built; physical device execution remains pending                                                                                                                                                                                                                                 |
| Linux x64                                                      | Engine-free preparation passed. Hermes shared runtime passed 38/39, retaining the detached-buffer failure. V8 shared runtime passed 39/39, then Core UI hit a build-hook dependency cycle. The coexistence application passed, but full scope failed                                                           |
| Windows x64/arm64                                              | Worker-first native DLL tests passed, but Hermes crashed in the independent Dart consumer. V8 standalone JIT/AOT passed; its application reached UI and failed localStorage's directory check. The coexistence application passed, then the separate Dart coexistence check crashed; the target remains failed |
| macOS x64                                                      | Hermes completed platform delivery. V8 native tests passed, then the independent consumer redundantly downloaded its SDK and failed DNS resolution. The coexistence application passed; the target remains failed                                                                                              |

The Core UI runner stages unchanged tests as an independent consumer of package copies.
This removes the cycle between Flax's dev engine and shared native assets without
removing dependencies or assertions. Canonical test paths preserve generated provider
identity on macOS. The local Core suite passed all 131 cases with each engine. Both
independent SDK consumers passed Dart JIT, checksum rejection and relocated AOT
execution using the cached archive inputs.

Storage compares normalized native paths with the existing `path` dependency, retaining
foreign-directory and concurrent-open rejection. A trailing-directory-separator test
reproduces the previous failure; all 14 storage tests now pass. Its subprocess fixture
is resolved through the package URI so the documented repository-root command works. All
four storage UI cases and its persistence application example passed with each engine on
macOS arm64.

External runtime/UI/example consumers pass the already downloaded, locked archive into
both engine and shared-asset hooks, avoiding repeated network downloads when Flutter
filters custom cache environment variables. Hash and target validation still run.
Missing platform projects use Flutter's empty template to avoid generating unrelated
counter-app tests; original example tests remain selected.

Windows diagnostics record the actual CRT modules and versions loaded by the Dart CLI
before opening the engine. The worker-first C++ and Flutter application results do not
establish why Dart creation crashes; no speculative engine or toolchain change is made.
The next hosted run must validate Windows and Linux fixes. The SDK/toolchain locks and
released rc.1 archives remain unchanged.

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
