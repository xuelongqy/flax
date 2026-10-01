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
| Tooling checks                        | 59/59 tool tests passed; workspace analysis reported no issues; formatting, workflow lint, documentation and package-content checks passed                                                                         |
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

Run [36747208661](https://github.com/xuelongqy/flax/actions/runs/36747208661) validated
commit `bb13f09`. Five target jobs passed, six failed and one timed out. Its package
archive workflow passed. Target receipts distinguish build, execution and delivery:

| Target                                | Observed result                                                                                                                             |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS arm64/x64                       | Both engines and coexistence passed runtime, application and relocation checks                                                              |
| Linux arm64                           | Both engines and coexistence passed Flutter application checks; the separate C++ consumer lacked pthread linkage                            |
| Linux x64                             | TLS/transport 28/28 and analysis passed; documentation formatting stopped the common checks before engine validation                        |
| Windows x64/arm64                     | Native Hermes CTest passed; hook-built Hermes crashed during runtime creation; V8 failed to link its incorrectly scoped vtable declaration  |
| Android x64                           | V8 passed runtime and application delivery; Hermes Flutter Driver waited for VM service; coexistence failed on duplicate `libc++_shared.so` |
| Android arm32/arm64, iOS device arm64 | Both bridges and application bundles built; physical-device execution remains unverified                                                    |
| iOS simulator arm64                   | V8 passed runtime and relocation; Hermes driver timed out; coexistence could not obtain Xcode build settings                                |
| iOS simulator x64                     | Hermes and coexistence assertions passed in raw logs; V8 driver timed out and the job ended before a final receipt                          |

The follow-up links standalone Linux consumers with pthread/dl, corrects the vtable
namespace and makes Windows hooks use the same Visual Studio generator as native
contracts. It migrates existing Ninja caches when necessary. A shared build hook owns
Android C++/Windows CRT assets; both engines verify byte equality before omitting their
copies. Android and simulator tests use native launch and fresh completion logs while
real iOS debug tests keep the debugger-based driver.

Local follow-up checks: 59/59 tool tests and isolated package archive/consumer checks
passed. V8 passed 2/2 native CTests, 39/39 runtime contracts, independent Dart JIT/AOT,
checksum rejection and relocation. Hermes native CTest passed 1/1; its released SDK
retains the 38/39 transfer-constructor failure. Actual SDK hook inputs produced one
Android C++ asset and ten Windows CRT assets; that validates ownership, not target
execution. Windows and Android runtime fixes still require hosted verification.

The latest local iOS arm64 simulator application check passed Hermes, V8 and
coexistence, including native contracts, shared smoke assertions, signatures, dependency
closure and execution of relocated bundles. Simulator evidence is Dart JIT/V8 jitless.
An earlier V8 attempt reported an intermittent platform SemanticsHandle failure;
pre-test frame warming stalled and was removed. That failure is retained as a risk, not
bypassed. Independent desktop Dart/native coexistence also passed.

Disposable runtime/application consumers now start from the repository lockfile.
Otherwise a fresh resolution selected jni_flutter 1.0.4, whose generated JNI version
check failed against the installed 1.0.x JNI dependency. The existing locked 1.0.3
dependencies and all SDK/toolchain pins are unchanged.

## Remaining acceptance work

1. Verify the follow-up on Linux and both Windows architectures; preserve failures from
   the default Linux full scope, including the Hermes transfer assertion.
2. Validate the shared Android C++/Windows CRT asset owner in both-engine hosted
   application packaging and execution.
3. Recheck Apple runner/device startup failures using diagnostic evidence; do not treat
   a build or smoke scope as full Material/UI acceptance.
4. Run Android arm32/arm64 and signed iOS device checks using the platform guide; these
   targets remain build-only until actual device execution passes.
5. Require all 24 build records and each supported runtime/application record before
   considering platform acceptance complete; PR #2 remains unmerged.
