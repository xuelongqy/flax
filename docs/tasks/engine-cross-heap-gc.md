# Task: Engine-owned cross-heap GC

Status: local macOS arm64, Android arm64 emulator and Pixel 4, and iOS arm64 simulator
debug and iPhone release/AOT correctness acceptance passed

## Goal and scope

Integrate the verified Dart/V8 conditional tracing experiment into the maintained
Flutter 3.47.6 engine on macOS arm64. Use the fork's `flax/main` branch, V8 with JIT on
macOS and independent session Contexts in one V8 heap per Dart UI isolate. Android arm64
emulator and Pixel 4 correctness acceptance extends this implementation using the
existing verified V8 SDK. iOS arm64 simulator debug and device release/AOT embed Hermes
without JIT. Device debug/profile, simulator profile/release and other platform
implementations remain outside acceptance. No push, CI trigger, SDK asset change or
engine publication is authorized.

## Acceptance criteria

- Real Flax objects, callbacks and native Widget/State proxies preserve either business
  owner and reclaim rootless cross-heap cycles automatically.
- Multiple sessions isolate globals and microtasks; closing one preserves the others.
  Unsupported isolate-group layouts fail before creating a runtime.
- Dart and JS allocation pressure initiate safe owner-thread joint collection; 1,000
  create/drop rounds reclaim bridge metadata without closing the session.
- Debug, profile and signed release/AOT macOS applications use the custom engine, prove
  V8 JIT, and pass the workspace, runtime and UI checks.
- Record GC distributions, frame times and memory against a matching baseline; the
  300,000-object synthetic workload targets joint GC P95 at or below 8 ms.

## Approach

Keep native ABI 2 and UI protocol 22. Add a separate internal GC extension and
`FlaxEngine.createRuntime()`, with an early custom-engine capability check. Reuse V8
CppHeap or Hermes Hades and the upstream Dart marking machinery. Remove accidental
bridge roots rather than adding another Widget lifecycle, heap scanner or user GC API.
Persist the exact-revision Dart patch in the Flutter fork and apply it through DEPS
hooks. Local-engine builds precede distribution work.

## Results and validation

The existing native Widget changes were preserved and committed separately as
`10d4d8c07cefceaaceb1eef56d319f303133a038`. Their original 170 file hashes matched;
three focused generator/TypeScript regressions and `git diff --check` passed before the
commit. The earlier 537 generator and both-engine 421-case UI evidence remains the
baseline, not acceptance for this engine integration.

The exact-revision patch hook, shared V8 CppHeap, conditional bridge references,
shutdown and Flutter idle collection are implemented. Debug, profile and release Flutter
frameworks and testers build. The standalone VM retains 20 cases and 26 upstream
GC/weak-handle regressions; their results are distinct from application acceptance.

Current runtime and joint-GC contracts pass 37 cases. Native Widget/State checks pass
five cases, including 1,000 mount/unmount cycles returning to the native cell baseline
and a retained Widget that does not retain its closed runtime. Removing the latter
cleanup in an isolated debug application reproduces the regression. The test uses a
separate live runtime's ordinary idle collection; closing the last runtime stops that
scheduler, and transient allocations do not guarantee old-space collection in AOT.

CppHeap pre-finalization detaches cells before deferred sweeping can destroy peers. The
former destructor cleanup accessed cells after pruning and crashed a real profile
application. Released Dart bridge references leave their owner index, and closed Widget
configuration sentinels drop their resource graph.

The current release/AOT application passes 87 recorded Widget cases and four ordinary
Dart cases, including GC, Widget/State, callbacks, Futures, Streams and multiple views.
Two Flutter debug rebuild-hook cases are explicitly inapplicable to profile/AOT. The
updated debug application passes 89 recorded Widget cases and four ordinary Dart cases.
Three real hot restarts show four distinct isolate epochs with fresh callback state.

The default and explicit V8 UI entries each pass 466 framework cases with no skips, all
seven owning package examples and aggregate composition. All 462 cases from the
preceding accepted report retain their names and results; the four new GC regressions
pass. Counts exclude every hidden loading, setup and teardown event. Each invocation
retains an independent JSON report, with an atomic compatibility copy after completion.
Both entries use V8 under the maintained engine policy. The full workspace command
passes, including 537 generator tests, 84 tool tests and one Windows CDB self-test
inapplicable on macOS. Analysis has no issues. All seven package examples pass their
Widget checks; six also have native macOS integration tests. The Cupertino example has
no native integration test. Aggregate composition passes its two real application cases.
The current workspace check takes about 12 minutes 30 seconds; default UI takes 22
minutes 47 seconds and explicit V8 UI 20 minutes 1 second. Release and debug application
gates take about 111 and 122 seconds respectively; the final profile gate, including
measurement and host trace download, takes 202 seconds on this machine. Whole command
timings include preparation and are not a GC speedup claim.

Review fixed four further bridge defects: completed Dart Futures retained discarded JS
Promise views, discarded unresolved Promise observers retained their JS bookkeeping,
typed Dart Future children lost their original JS Promise, and opaque Stream errors
rejected Dart values unsuitable for weak targets. Five new real-engine cases cover 1,000
discarded views, rootless Future cycles, typed and chained ownership, uncaught Dart
errors, and original errors and stack traces. All five pass in debug and release/AOT;
the focused Future/Stream checks pass 29 cases. The private Promise adapter retains its
origin through live derived Futures without adding an error-consuming completion
observer. Generation, public APIs and bridge protocol versions remain unchanged.

Release closure hashes, arm64 architecture, relocatable native dependencies, strict
signatures, allow-jit and hardened runtime flags verify. Local staged applications are
ad-hoc signed without a Team ID, with a temporary library-validation exception recorded
in receipts. This is not Developer ID distribution acceptance. External source/npm
consumption, relocated production launch and independent V8 JIT proof pass.

The direct release launcher activates the exact staged application after its first test
log. Both current UI rounds complete every example without manual activation or
LaunchServices -600 warnings. A preceding accepted round had seven such warnings, and an
earlier stalled example required foreground activation. Replacing `open` with `open -a`
alone did not remove that warning and was not retained. The application drivers already
activate their exact build. Unattended activation reliability remains open; these
successful rounds do not prove the earlier intermittent stall is resolved.

The GC optimization first propagates direct Dart targets from their marked JS peers. It
skips JS traversal only when every registered Dart target is already marked in that Dart
pass. Unmarked targets retain full V8/CppHeap tracing. Flutter idle notifications still
check Dart ownership but do not claim that JS work occurred; actual JS work keeps idle
V8 collection active, including wrappers of live Dart targets. No GC mode, public
configuration, ABI or VM patch changes were needed.

Four new runtime cases cover direct Dart callback facades, mixed Dart/JS callback
chains, JS-only roots under Dart allocation pressure, and collecting a JS wrapper while
its Dart target remains alive. The default and explicit V8 runtime entries each pass 37
cases. Debug passes 93 application cases; release/AOT passes 91 with the two specified
debug-only checks inapplicable. These totals exclude setup/teardown hooks and include
four ordinary Dart cases not present in the Widget-only receipt map.

The final optimized profile application passes 91 functional cases plus the unchanged
measurement case, with those same two debug-only checks inapplicable. The first measured
run preceded the final live-target wrapper regression. The complete VM timeline is
downloaded by the host rather than decoded into the measured UI heap. The workload
remains 300,000 ordinary JS objects, 1,000 live callback pairs and 150 Dart allocation
samples. The first optimized run has 862 direct-root passes, the repeat 855; neither
steady-state measurement phase requires a V8 collection. Full tracing still runs in the
ownership and reclamation regressions and when JS work dirties the heap. The following
whole-pause measurements include Dart marking and bridge work:

| Measurement in the joint phase     | Before optimization | Optimized run 1 | Optimized run 2 |
| ---------------------------------- | ------------------: | --------------: | --------------: |
| Old-generation GC P95              |            7.925 ms |        1.450 ms |        1.420 ms |
| Owner-requested collection P95     |           10.659 ms |        5.472 ms |        7.085 ms |
| Old-generation GC maximum          |           11.286 ms |        4.285 ms |        6.109 ms |
| Owner-requested collection maximum |           10.659 ms |        5.472 ms |        7.085 ms |

The old-generation sample counts are 514 before and 862/855 after optimization.
Owner-requested samples are 13 before and 18 in each optimized run; their small sample
counts limit tail-latency conclusions.

Both final runs meet the 8 ms P95 target for this stable-root workload. This avoids
unnecessary JS collections; it does not reduce all full joint traces to 1.4 ms. The
direct-root-only candidate, before correcting idle dirtiness, still measured an
owner-requested maximum of 13.001 ms. Complex reference changes can still require that
full path, which retains ordinary Dart parallel marking and atomic V8/CppHeap GC. There
is no general frame-latency bound.

A supplementary paired application comparison disables full tracing without changing the
workload. Joint RSS P95 is 261.500 MiB before versus 253.172 MiB after; allocation burst
P95 is 39.251 versus 29.863 ms. Frame total P99 improves from 30.037 to 23.196 ms, but
P95 does not improve (8.859 versus 12.172 ms). This single comparison does not prove
uniformly better frame times. The higher RSS of complete traced runs includes about
three million retained timeline events; the untraced receipts do not measure GC pause
durations. Exact receipts, hashes, raw sample arrays and full trace summaries are in
`.local/gc-optimization-20261008/`.

The former SDK platform execution and independent benchmark hosts are retired;
historical plans and experiment results remain available. Disposable evidence is in
`.local/gc-engine-integration/` and `.local/gc-flutter-engine/`.

## Handoff

Android arm64 debug and release engines build and run real Flutter applications on the
API 37 arm64 emulator with 16 KB pages. The existing V8 15.4.80.15 SDK is reused without
rebuilding or changing its files. Flutter's pinned compiler, C sysroot and compiler
runtime remain unchanged; C++ headers and shared libc++ match the SDK's NDK revision.
The existing engine JAR packages one V8 library set. macOS host tools are reused, and
all three previously accepted macOS framework hashes remain unchanged.

The Android debug application passes all 94 original functional cases. Release/AOT
passes the same 92 applicable cases, with the two specified Flutter debug rebuild-hook
checks inapplicable. Every grouped name and result is compared with the accepted macOS
baseline. Both modes prove real V8 machine-code generation, preserve either Dart/JS
business owner, reclaim 1,000 rootless bridge cycles and 1,000 native Widget/State mount
cycles, and pass callback, Future, Stream, multi-session and multi-view regressions. The
complete Widget receipt and ordinary Dart test results are both retained.

APK audits verify arm64-only native libraries, the immutable V8/shared-libc++ hashes,
native dependency closure, all ELF load segments and ZIP alignment for 16 KB pages, ZIP
CRC and APK signing. Release includes Dart's AOT `libapp.so`. The source staging tree is
removed before installing and launching the relocated APK. Only the temporary release
acceptance consumer promotes `integration_test` to a runtime dependency, because Flutter
excludes development plugins from release. Ordinary consumers keep their existing
dependency model. Android log receipts use small Base64 fragments to avoid the observed
log truncation.

The final debug and release gate log intervals are 164.245 and 173.151 seconds,
respectively, including preparation, building, audit, installation and execution. These
are command durations, not GC performance measurements. Current analysis, five focused
tool tests, two SDK metadata tests, patch-hook regression and documentation checks pass.
The earlier full tool run passes 86 tests with the Windows CDB test inapplicable on
macOS; the reused macOS engine still passes 37 runtime/GC regressions. Android evidence
is in `.local/android-engine-20261008/acceptance.json`, with complete logs, per-case
comparison, producer/JAR hashes and unchanged-baseline receipts. Reproduce from the Flax
checkout after building matching engines:

```sh
ANDROID_HOME=/path/to/android-sdk FLAX_CHECK_TARGET=android-arm64 FLAX_CHECK_DEVICE=emulator-5554 dart run tool/check_engine_application.dart debug
ANDROID_HOME=/path/to/android-sdk FLAX_CHECK_TARGET=android-arm64 FLAX_CHECK_DEVICE=emulator-5554 dart run tool/check_engine_application.dart release
```

This establishes emulator correctness of the engine and joint GC. The physical-device
result below reuses these APKs. Android profile GC/frame measurements, the complete
platform UI suite and iOS Hermes have not been accepted. Local APK signing is not
distribution signing. No commit, push, CI trigger or SDK publication occurred.

### Android physical-device acceptance

On 2026-10-08, a USB-connected Pixel 4 running Android 13 (API 33), arm64 and 4 KB pages
passes all 94 debug cases and the same 92 applicable release/AOT cases. The two Flutter
debug rebuild-hook checks remain explicitly inapplicable in release. Every original
grouped case name and result matches the accepted emulator baseline; ordinary Dart cases
are counted separately from the Widget receipt.

Both modes prove V8 machine-code generation, preserve either Dart/JS business root,
reclaim 1,000 rootless bridge cycles and 1,000 Widget/State mount cycles, and pass
callback, Future, Stream, session and multi-view assertions. The unchanged APKs are
audited again for CRC, signing, arm64 closure, 16 KB ELF/ZIP alignment and immutable SDK
library hashes. Each contains one V8 library set; release includes Dart AOT. No engine
or SDK rebuild is needed, and the accepted macOS framework hashes remain unchanged.

The debug and release commands take 199.563 and 126.414 seconds, respectively, including
artifact audit, USB installation and correctness tests. First-frame times are from the
integration fixture, not normal application startup; neither measurement is an Android
GC/frame benchmark. Complete receipts, fresh device logs, per-case comparisons and
baseline preservation are in `.local/android-device-20261008/acceptance.json`. The test
application stops after each mode. This accepts this physical device's correctness, not
every Android model, performance or distribution signing. No commit, push or CI trigger
occurs.

The final review fixed premature AsyncIterable source collection: Dart subscriptions
retain their controller, but not the temporary Stream facade returned by each
`controller.stream` read. The source now stores one stable Stream origin. The
real-engine regression verifies pause/resume, one iterator `return()` per cancellation,
and wrapper and native metadata reclamation across two rounds. All six bridge GC cases
pass. The current framework gate passes 467 cases with no skips; every preceding 466
case name and result is preserved. Release/AOT passes 92 cases with the same two
debug-only checks inapplicable. Analysis, TypeScript, formatting, Markdown lint (164
files) and 620 local links across 167 Markdown files pass. Native GC and SDK sources are
unchanged; the profile measurements were not repeated for this Dart ownership fix. The
complete static workspace gate passes in 817.728 seconds; FFI reproduction takes 3.151
seconds and the independent archive/pack receipt gate takes 249.218 seconds. All 85 tool
tests pass, with one Windows CDB self-test inapplicable on macOS. The package unit-test
command also passes with a deliberately missing local-engine source, including all 537
generator cases, in 311.670 seconds.

Default CI now uses the complete engine-free static workspace check, FFI reproduction
and package archive validation. The
[workspace workflow](../../.github/workflows/check.yml) keeps the `result` gate and
explicitly reports that runtime, UI and platform acceptance were not run. The retired
SDK platform and manual runtime workflows and their shared preparation workflow are
removed. Maintained-engine runtime CI remains pending; no workflow was triggered.
Ordinary package unit tests and their subprocesses use the stock Flutter tester without
inheriting the local-engine override; runtime and UI gates still require the maintained
engine. Current review evidence is in `.local/engine-review-20261008/`.

The stable-root GC benchmark, debug/profile/release application gates, both runtime
entries, workspace check and both full UI entries pass after optimization. Unattended
macOS example activation and full-trace latency for changing reference graphs remain
open; the measured fast path is not a bound for every joint collection. The native
source and regression fixture hashes match the measured candidate; the V8 GC mode,
Flutter idle entry point and allocation workload are unchanged. No commit, push, CI
trigger or publication occurred during this GC optimization.

### iOS Hermes simulator acceptance

Before the iOS work, the existing Flax and Flutter engine changes were committed locally
as `d0c20985b4c3f6d1be5a82f221f1b74e01e6156d` and
`341499e7ec7654e4e48093b210009157c32fdff0`, respectively. At simulator acceptance, the
new iOS changes were uncommitted. No push, CI trigger, publication or immutable SDK
attachment change occurred.

On 2026-10-08, the iPhone 17 Pro arm64 simulator running iOS 26.5 passes all 95 debug
application cases: every original Android baseline name and result (94 cases), plus a
three-session WeakMap ownership regression. The receipt contains 91 Widget cases; four
ordinary Dart cases are audited separately. No case is skipped or inapplicable. The
application preserves either business root, reclaims 1,000 rootless bridge cycles and
1,000 Widget/State mount cycles, and passes callback, Future, Stream, session and view
isolation checks. The relocated application runs after its temporary source is deleted
and stops when the gate finishes.

Hermes 260318099.0.4 (bytecode 99) uses concurrent Hades without JIT. Each session owns
a VM; one coordinator per Dart UI isolate reaches the cross-VM marking fixed point
before weak processing. The debug `Flutter.framework` statically includes Hermes, JSI
and Boost.Context, with no second runtime. Its producer recipe, source revision, static
library hashes, arm64 simulator platform, native exports, dependency closure, strict
ad-hoc signing and relocated engine hash are verified. The minimum iOS version is 16.3,
as required by the pinned compiler's system libc++ APIs.

The initial application runs exposed two GC defects. Ordinary Hermes calls did not
schedule another idle checkpoint after roots were removed; the shared outermost-call
boundary now queues the coalesced owner-thread request. Hades cleared WeakMap values
before a key reachable through Dart had been marked; dead entries are now cleared only
after joint tracing reaches its fixed point. Ordinary Hades marking remains concurrent,
and its normal WeakMap pass is not duplicated. Failed receipts and an independent
WeakMap reproduction are retained; assertions were not weakened.

The final standalone Hermes experiment passes 24 cases (20 original and four WeakMap
root combinations). The macOS V8 runtime and GC regression passes 38 cases, including
the new three-session chain. Static workspace steps pass after correcting three
pre-existing Markdown formatting failures and resuming from formatting: 537 generator
tests, 87 tool tests, analysis, type checks and package delivery checks pass. One
Windows CDB tool test is explicitly inapplicable on macOS. All five Flutter
producer/patch helper tests pass. Complete logs, per-case comparisons, signatures and
hashes are in `.local/ios-hermes-20261008/acceptance.json` and its sibling files.

This accepts simulator debug correctness. Physical devices, Dart AOT, distribution
signing, the complete platform UI suite and Hermes GC/frame measurements remain pending.
The existing macOS V8 performance results do not establish Hermes performance. Reproduce
after building matching engines:

```sh
FLAX_CHECK_TARGET=ios-simulator-arm64 FLAX_CHECK_DEVICE=<simulator-id> dart run tool/check_engine_application.dart debug
```

### iOS Hermes physical-device acceptance

On 2026-10-08, an iPhone 14 Pro running iOS 26.6.2 passes 93 release/AOT application
cases. Every original Android release case name and result is preserved, with the
additional three-session WeakMap regression. The same two Flutter debug rebuild-hook
cases are explicitly inapplicable; no applicable case is omitted. The receipt records 89
Widget cases, and four ordinary Dart cases are audited from the console. Both 1,000
rootless bridge cycles and 1,000 Widget/State mount cycles return to their baseline.
Callbacks, Future/Stream ownership, multiple sessions and FlaxViews pass.

The arm64 device producer and its manifest are separate from simulator inputs. The
release engine statically embeds the same pinned Hermes interpreter and concurrent Hades
joint-GC implementation. The gate verifies the producer recipe and library hashes,
device Mach-O platform, native exports, dependency closure and unchanged packaged engine
content. `App.framework` contains the real Dart AOT data and instructions. The relocated
application retains real Apple Development signing and a matching provisioning profile;
it installs after its temporary source is removed, passes, and terminates.

The first audit exposed two harness assumptions: Flutter's AOT library uses a universal
container with one arm64 slice, and this Flutter revision exports `kDartSnapshotData`
and `kDartSnapshotText`. The binary checker now accepts a bounded single-slice container
while rejecting multiple architectures, inconsistent slice headers and invalid offsets.
The device console also does not capture Flutter's ordinary iOS print sink; only the
direct-launch release fixture routes its print zone to stdout. Runtime logging and GC
are unchanged. Earlier failed audit/console logs are retained; assertions are preserved.

All 89 tool tests and five Flutter producer/patch helper tests pass. One Windows CDB
self-test is explicitly inapplicable on macOS. Scoped Dart analysis passes. Per-case
comparisons, signing, hashes, logs and preservation checks are in
`.local/ios-device-hermes-20261008/acceptance.json` and sibling files. At
physical-device acceptance, the new iOS changes were uncommitted; no push, CI trigger,
publication or SDK attachment change occurred.

This accepts physical-device release/AOT correctness. Device debug/profile, distribution
signing, the complete platform UI suite and Hermes GC/frame performance remain outside
acceptance. Reproduce after building matching engines:

```sh
FLAX_CHECK_TARGET=ios-device-arm64 FLAX_CHECK_DEVICE=<iphone-id> FLAX_IOS_TEAM=<team-id> dart run tool/check_engine_application.dart release
```

## Development priorities

Complete and stabilize Flax's core functionality before expanding platform support or
adding maintained-engine CI. Use focused local checks for changes during this phase;
retain the accepted macOS, Android and iOS evidence without repeating the platform
matrix for every development checkpoint. Platform expansion and CI work resume after the
core behavior and contracts are settled.
