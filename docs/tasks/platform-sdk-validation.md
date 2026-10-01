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

Run [36822347189](https://github.com/xuelongqy/flax/actions/runs/36822347189) completed
for `7f2e13b`: six target jobs passed and six failed. The package archive workflow
[36822347014](https://github.com/xuelongqy/flax/actions/runs/36822347014) passed.
Conditionally skipped Linux/native branches belong to the opposite host family and are
not missing target tests.

| Target                                                     | Observed result                                                                                                                                                                         |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS arm64, Linux arm64, Android x64, iOS simulator arm64 | Both engines and coexistence passed platform runtime and application delivery                                                                                                           |
| Android arm32/arm64                                        | Both engines built; physical device execution remains pending                                                                                                                           |
| Linux x64                                                  | Preparation reached generator tests, then the SDK projection/compilation fixture exceeded the default 30-second timeout                                                                 |
| Windows x64/arm64                                          | Native DLL contracts passed; Hermes crashed during Dart creation. V8 passed standalone JIT/AOT and built the release application, but SDK receipt discovery traversed long notice paths |
| iOS device arm64                                           | Both bridges built; the Hermes application hook received HTTP 500 downloading the same SDK again. V8's unsigned application built; neither engine ran on a device                       |
| iOS simulator x64                                          | Hermes and coexistence passed; V8's application UI hit the semantics-handle check                                                                                                       |
| macOS x64                                                  | The hosted runner lost communication; GitHub exposes no final log or verification artifact for this job                                                                                 |

The follow-up uses the existing three-minute fixture timeout, excludes extracted SDK
cache directories when finding hook receipts/diagnostics, and supplies verified local
archive inputs to external application hooks. This avoids repeated network downloads
when Flutter filters the shared-cache environment. iOS setup runs its semantics frame
inside the live binding's `runTest`, disposes its own handle and verifies platform
ownership before widget leak baselines are recorded. No assertion is disabled. Windows
native contracts now load the DLL on the worker first, before the main thread, so main
initialization cannot mask the isolate's first-load behavior.

The disposable macOS project excludes the non-selected architecture from every Xcode
target, preventing the release hook from treating a single-target SDK as a universal
binary.

Local regression passed 63 tool tests, all five widget-interface generator tests,
analysis and workflow lint. The updated iOS arm64 simulator platform check passed both
engines and coexistence, including signature/dependency inspection and relocated
execution. The updated macOS arm64 platform check also passed both engines and
coexistence, including independent Dart JIT/AOT and relocated applications. Both iOS
device arm64 unsigned applications built and passed dependency inspection; neither
engine is recorded as run on a physical device. Windows/x64 execution requires the
hosted run.

The Hermes detached-buffer constructor failure was reproduced in an independent C++
consumer linking only the checksum-locked rc.1 SDK: `new Uint8Array(buffer)` succeeds
after `buffer.transfer()`. This establishes an engine SDK defect, independent of Flax's
ABI. The 38/39 runtime assertion remains enabled. Fixing it requires an updated engine
candidate; rc.1 and SDK/toolchain locks remain unchanged in this Flax follow-up. Windows
Hermes creation also remains unresolved; worker-first loading and unmasked application
diagnostics need hosted evidence before assigning a cause.

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
