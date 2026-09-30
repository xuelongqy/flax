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

| Local stage                           | Observed result                                                                                                                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Apple bridge builds                   | 10/24 target-engine groups built: macOS arm64/x64, iOS device arm64 and simulator arm64/x64, both engines; cross builds do not certify execution                                                                   |
| Tooling checks                        | 57/57 tool tests passed; workspace analysis reported no issues; formatting, workflow lint, documentation and package-content checks passed                                                                         |
| macOS arm64 platform scope            | Both engines passed native contracts, independent Dart JIT/AOT, external Flutter debug/release, signatures/dependencies and relocated release execution; both-engine coexistence passed                            |
| V8 shared runtime                     | 39/39 contracts passed on macOS arm64                                                                                                                                                                              |
| V8 desktop UI                         | 346/346 package-owned UI cases passed; changed Core assertions were rerun, 131/131 passed plus its package example                                                                                                 |
| SDK/bridge caching                    | Repeated build reused bridge objects; editing an isolated ABI source rebuilt only bridge objects/linking; all SDK library hashes remained unchanged                                                                |
| iOS arm64 simulator V8 platform scope | 14 reported checks passed, including ABI/native, identity/UTF-16/reentry, loop closures and UI; copied device bundle passed again; Dart JIT, V8 jitless                                                            |
| iOS V8 full attempt                   | Shared/runtime application reported 42 passing checks. Core 131, Canvas 3, Cupertino 2, Fetch 20 and Storage 4 UI cases passed. Material: 166 passed, 11 failed; WebSocket was not reached. Full acceptance failed |
| Hermes shared runtime                 | 38/39 passed; constructing Uint8Array from a detached buffer did not throw the required TypeError                                                                                                                  |

The Hermes behavior is reproduced with a minimal JS expression through rc.1. The
contract is retained. Its precise engine/patch cause is not established here, and this
task does not alter the released engine or hide the failure with a JS shim.

Device UI registration now runs synchronously and fixture loading uses `setUpAll`.
Viewport, widget search and fake-clock assumptions exposed by early device attempts were
corrected. Material still assumes headless/fake-clock behavior in navigation, builder
counts, lazy-list and animation tests. After consecutive unsuccessful full attempts,
further individual device assertions were not patched: the assumption that a headless
suite can run unchanged under a live integration binding needs a separate resolution.
These failures remain visible, not skipped or marked passed.

## Hosted verification

Run [36736730811](https://github.com/xuelongqy/flax/actions/runs/36736730811)
validated commit `01cc2a3`. Target receipts distinguish build, execution and delivery:

| Target | Observed result |
| --- | --- |
| macOS arm64 | Both engines and coexistence passed runtime, application and relocation checks |
| Android x64 | Both engines individually passed runtime, debug/release and relocated APK execution; coexistence failed because both hooks registered `libc++_shared.so` |
| Android arm32/arm64, iOS device arm64 | Both bridges and application bundles built; physical-device execution remains unverified |
| iOS simulator arm64 | V8 and coexistence passed runtime and relocated bundle checks; the individual Hermes Flutter drive timed out |
| Linux arm64 | Both bridges built; native test links lacked pthread and the external Flutter build could not find unversioned clang++ |
| Windows x64/arm64 | Module delivery passed 14/14; bridge configuration failed because the forced Visual Studio 2022 generator was unavailable |
| Linux x64 | Host checks reached TLS tests; four failed with certificates generated using system OpenSSL configuration |
| macOS x64 | The hosted runner lost communication; no verification receipt was uploaded |
| iOS simulator x64 | Still running when these results were recorded; no acceptance claimed |

The follow-up uses CMake Threads targets, exposes the pinned Clang under Flutter's
compiler names, and lets CMake select the installed Windows Visual Studio generator.
TLS fixtures use their own request configuration instead of inheriting system
`x509_extensions`. Local regression results: 57/57 tool tests and 28/28 TLS/transport
tests; analysis, formatting and workflow lint passed. Native CTest passed 1/1 for
Hermes and 2/2 for V8. V8's 39/39 runtime contracts, independent Dart JIT/AOT and
relocation checks passed; Hermes retains its 38/39 transfer-constructor failure.
These follow-up changes still require hosted verification.

## Remaining acceptance work

1. Verify the follow-up on Linux and both Windows architectures; preserve failures
   from the default Linux full scope, including the Hermes transfer assertion.
2. Assign a single native asset owner to byte-identical Android C++/Windows CRT
   dependencies before validating both-engine application packaging.
3. Recheck Apple runner/device startup failures using diagnostic evidence; do not
   treat a build or smoke scope as full Material/UI acceptance.
4. Run Android arm32/arm64 and signed iOS device checks using the platform guide;
   these targets remain build-only until actual device execution passes.
5. Require all 24 build records and each supported runtime/application record before
   considering platform acceptance complete; PR #2 remains unmerged.
