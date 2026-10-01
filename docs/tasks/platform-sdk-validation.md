# Task: Native SDK integration and platform validation

Status: implementation in progress; local stages passed, full acceptance blocked.

## Goal and scope

Consume the published `flax_js_runtime v0.3.0-rc.2` archives (SDK version `0.3.0`,
manifest schema 3) for twelve targets and both engines. Flax compiles only its
ABI/adapter. Keep ABI 2, Hermes as the default, and PR #2 unmerged. The separately
authorized engine fix was published as a new candidate; rc.1 assets and toolchain locks
remain unchanged. Do not publish Flax.

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

Candidate
[36900847345](https://github.com/xuelongqy/flax_js_runtime/actions/runs/36900847345)
passed all eight jobs at `f4eb742dbf17832347e936ced9485c3553a27a9f`. All 24 SDKs passed
architecture, dependency and export checks; twelve desktop SDK consumers executed after
relocation and twelve mobile consumers only compiled/linked. Publication
[36908791197](https://github.com/xuelongqy/flax_js_runtime/actions/runs/36908791197)
published the same bytes as
[rc.2](https://github.com/xuelongqy/flax_js_runtime/releases/tag/v0.3.0-rc.2). All 24
release asset digests and the published checksums match the candidate hashes. SDK
application delivery and physical device execution are not certified by those runs.

Both engines' twelve-target Flax locks now consume rc.2. On macOS arm64, the official
release archives passed native CTest, all 39 runtime contracts per engine, independent
Dart JIT, checksum rejection and relocated AOT execution. Tooling passed 66/66 tests,
scoped static analysis, formatting and workflow lint. Independent Dart and native
dual-engine consumers passed coexistence, foreign-object rejection, reentry and
recreation. This round did not rerun UI or device suites; their earlier results below
used rc.1.

The SDK locks cover all 24 published archive URLs/hashes. Hook target selection handles
iOS device/simulator differences. Bridges register full runtime closures, Windows
exports/import libraries, Linux SDK libc++, Android NDK 30/API 24 and Apple deployment
minima. Application checks cover architecture, final dependencies, Apple framework
references/signatures, shared runtime byte equality and relocation. The device
release/AOT launch path is implemented but not yet run on a physical Android/iOS device.
Local Apple builds used Xcode 27.0; CI pins Xcode 26.6.

All 24 extracted rc.1 SDKs passed Flax's manifest/file-hash validation and actual
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

The earlier Hermes failure was reproduced in an independent C++ consumer linking only
the checksum-locked rc.1 SDK: `new Uint8Array(buffer)` succeeds after
`buffer.transfer()`. This established an engine SDK defect independent of Flax ABI. The
rc.2 transfer patch checks attachment during typed-array construction and copying,
including detachment during length conversion. Its independent consumer retains 101
regression assertions. Flax's original detached-buffer assertion remains enabled and now
passes locally with rc.2.

Device UI registration now runs synchronously and fixture loading uses `setUpAll`.
Viewport, widget search and fake-clock assumptions exposed by early device attempts were
corrected. Material still assumes headless/fake-clock behavior in navigation, builder
counts, lazy-list and animation tests. After consecutive unsuccessful full attempts,
further individual device assertions were not patched: the assumption that a headless
suite can run unchanged under a live integration binding needs a separate resolution.
These failures remain visible, not skipped or marked passed.

## Hosted verification

The first rc.2 run
[36913521058](https://github.com/xuelongqy/flax/actions/runs/36913521058) completed at
`cf4bc090fb5f8b7e74c7eb869f8544048e487670`: ten target jobs passed; Windows x64, Windows
arm64 and the summary failed. The package archive workflow
[36913520278](https://github.com/xuelongqy/flax/actions/runs/36913520278) passed. All
twelve receipts match rc.2's locked hashes: 24 groups built, 16 ran and passed
application delivery, and six remain device build-only. The twelve skipped branches
belong to the opposite host family. Default Linux x64 passed both engines' 39 runtime
contracts, 346 package-owned UI cases per engine, examples and aggregate application.
Its original Hermes detached-buffer assertion now passes. Windows V8 passed; Hermes x64
still faults during standalone Dart JIT creation and arm64 during relocated AOT
creation. Independent Dart coexistence still fails on both Windows architectures.

The capture follow-up
[36930825044](https://github.com/xuelongqy/flax/actions/runs/36930825044) completed at
`20e5d48a7f9a4fc5f6542a87bd1fd1f0b4808aef`: nine target jobs passed; Windows x64,
Windows arm64, macOS x64 and the summary failed. The package archive workflow
[36930824534](https://github.com/xuelongqy/flax/actions/runs/36930824534) passed. All
eleven available receipts match rc.2: 22 groups built, 14 ran and passed application
delivery, and six remain device build-only. macOS x64 lost communication with the hosted
runner and produced neither logs nor a receipt; its current acceptance is unknown. The
twelve skipped branches still belong to the opposite host family.

Both Windows native child-fault checks passed and all four actual Hermes failures now
have minidumps, loaded-module paths, exceptions and stacks. `hermesvm.dll` faults with
`0xc0000005` during runtime initialization's property lookup; the final original Dart
exit is `0xc0000409`. The SDK's own MSVC runtime DLLs are loaded from the consumer
closure, at version 14.51.36247.0. Both SDK and bridge use Release builds. These facts
do not establish the source of the invalid object/property-map pointer. Export-only
symbol names must not be interpreted as exact internal function names. The current
stack-only dumps omit the pointed-to heap objects; capture now requests secondary memory
and the virtual-memory layout. The native child-fault check requires its allocated heap
pattern in the dump while retaining the original AV exit. Actual extended capture and
the Hermes root cause remain pending; native C++ and Flutter coexistence success do not
replace the failing standalone Dart checks.

The subsequent rc.1 run
[36882647105](https://github.com/xuelongqy/flax/actions/runs/36882647105) finished for
`e223f4e913ceda1a1a996dfb5e9655098ddb959e`. Its twelve artifacts contain 24 bridge
builds, 15 successful runtimes and 15 application-delivery records; six groups remain
build-only. Linux V8 full and macOS x64 delivery passed. Linux Hermes still failed the
now-fixed SDK assertion; Windows Hermes and the summary remained failed. The package
archive workflow passed. These records do not certify rc.2.

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
than speculative compiler flags. CI attempts first-chance access-violation and
module/stack/minidump evidence before deleting failed Dart consumer inputs, retaining
the original exit code even if debugger reproduction succeeds. The first rc.2 run did
not capture the fault because of the child breakpoint described above. The SDK transfer
fix does not establish a fix for Windows engine creation.

## Remaining acceptance work

1. Verify the extended CDB heap capture on both Windows architectures, then diagnose and
   fix the actual Hermes fault without changing passing assertions or toolchain locks.
2. Revalidate macOS x64 after the hosted runner loss; missing logs and a missing receipt
   cannot be recorded as a test pass.
3. Keep default Linux full checks passing; platform smoke does not certify the full
   Material/device suite.
4. Run Android arm32/arm64 and signed iOS device checks using the platform guide; these
   targets remain build-only until actual device execution passes.
5. Require all 24 build records and each supported runtime/application record before
   considering acceptance complete; PR #2 remains unmerged.
