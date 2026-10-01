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
| Tooling checks                     | 61/61 tool tests passed; workspace analysis reported no issues; formatting, workflow lint, documentation and package-content checks passed                                                                         |
| macOS arm64 platform scope         | Both engines passed native contracts, independent Dart JIT/AOT, external Flutter debug/release, signatures/dependencies and relocated release execution; both-engine coexistence passed                            |
| V8 shared runtime                  | 39/39 contracts passed on macOS arm64                                                                                                                                                                              |
| V8 desktop UI                      | 346/346 package-owned UI cases passed; changed Core assertions were rerun, 131/131 passed plus its package example                                                                                                 |
| SDK/bridge caching                 | Repeated build reused bridge objects; editing an isolated ABI source rebuilt only bridge objects/linking; all SDK library hashes remained unchanged                                                                |
| iOS arm64 simulator platform scope | Both engines and coexistence passed ABI/native, identity/UTF-16/reentry, loop closures, UI, signatures/dependencies and relocated bundles; Dart JIT, V8 jitless                                                    |
| iOS V8 full attempt                | Shared/runtime application reported 42 passing checks. Core 131, Canvas 3, Cupertino 2, Fetch 20 and Storage 4 UI cases passed. Material: 166 passed, 11 failed; WebSocket was not reached. Full acceptance failed |
| Hermes shared runtime              | 38/39 passed; constructing Uint8Array from a detached buffer did not throw the required TypeError                                                                                                                  |

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

Run [36809367826](https://github.com/xuelongqy/flax/actions/runs/36809367826) validated
`3d2962e`: six target jobs passed, five failed and one exceeded the two-hour limit. The
package archive workflow passed. Receipts establish the following stages:

| Target                                      | Observed result                                                                                                                                 |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS arm64, Linux arm64, iOS simulator x64 | Both engines and coexistence passed platform-scope runtime and application delivery                                                             |
| Android arm32/arm64, iOS device arm64       | Both engines built; device execution remains pending                                                                                            |
| Linux x64                                   | Common preparation failed because the temporary offline npm consumer selected a different pnpm store mount; engine verification was not reached |
| Windows x64/arm64                           | Both bridges built; Hermes crashed during Dart runtime creation; V8 passed standalone JIT/AOT but Flutter application hooks failed              |
| Android x64                                 | Both APKs built; unquoted remote date arguments prevented fresh log monitoring and runtime acceptance                                           |
| iOS simulator arm64                         | Hermes and coexistence passed; the individual V8 runtime assertion hit the widget semantics-handle check                                        |
| macOS x64                                   | Individual application tests progressed, but the job timed out during coexistence without a final receipt                                       |

The current fixes reuse the installed workspace pnpm store for offline archive consumers
and quote the Android timestamp command for the device shell. Pure runtime contracts use
plain tests with explicit integration failure records; UI tests retain semantics checks.
Desktop applications launch prebuilt binaries with bounded execution and reuse the
already checked release bundle for source-independent relocation, removing one release
build per application and the Flutter Driver connection. Windows hooks use CMake's
Visual Studio generator directly, without a redundant batch environment step.
Application failures retain hook diagnostics; stage receipts are written incrementally.
Windows native contracts additionally test dynamic DLL loading on loader/worker threads.

Local regression passed 61 tool tests, three emulator-startup checks, four documentation
tests, analysis, workflow lint and isolated Dart/npm archive consumers. Both-engine
macOS arm64 and iOS arm64 simulator platform checks passed, including coexistence and
relocation. Native Hermes CTest passed 1/1; V8 passed 2/2 CTests and 39/39 runtime
contracts. Hermes still fails its released SDK's detached-buffer constructor contract
(38/39). No SDK/toolchain lock or production ABI was changed.

Windows Hermes creation remains unresolved: a passing linked native executable does not
establish Dart dynamic-loading compatibility. The new DLL test and retained hook logs
require hosted Windows verification; they are diagnostic coverage, not a claim that the
crash has been repaired. Android runtime, macOS x64 completion and the baseline Linux
full scope likewise require the new hosted run. Physical device execution remains
pending.

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
