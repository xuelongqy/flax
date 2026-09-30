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
| Tooling checks                        | 56/56 tool tests passed; workspace analysis reported no issues; formatting, workflow lint, documentation and package-content checks passed                                                                         |
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

Linux and Windows bridges have not been compiled locally. Android compilation was
blocked by repeated TLS failures downloading the exact NDK `30.0.16248370`; no old NDK
fallback was used. Android arm32, Android arm64, iOS real-device release execution and
both x64 Apple target executions remain pending. Hosted CI results for this
implementation remain pending and must be recorded separately from the local evidence
above.

## Handoff

1. Resolve the Hermes rc.1 transfer-constructor behavior in the SDK release process;
   then intentionally update its lock. Current Linux full CI will expose this failure.
2. Resolve shared widget test binding/clock conditions on devices without weakening
   lifecycle, timing or resource assertions. Rerun Material and then WebSocket.
3. Run the implemented hosted matrix after the local change is reviewed and pushed;
   retain failed target records and address actual build/toolchain failures.
4. Obtain NDK 30 and run Android devices, and configure `FLAX_IOS_TEAM` for signed iOS
   device execution using the commands in the platform guide.
5. Require all 24 build records and each supported runtime/application record before
   considering platform acceptance complete; PR #2 remains unmerged.
