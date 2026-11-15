# Task: Flutter 3.50 Upgrade

Status: scoped implementation delivery. The ordinary
macOS Debug aggregate has passed manual acceptance. All eight selected former failures,
60 runtime contracts, generated FFI consistency and 14 existing Android Release startup
cases on a physical 4 KiB device have separate passing evidence. The original complete
application/platform matrix remains unverified; this is not full platform certification.

## Goal and scope

Implement the accepted [proposal](../proposals/flutter-3-50-upgrade.md) in isolated Flax
and maintained Flutter workspaces. Target Flutter 3.50.0 / Dart 3.14.0 directly, with
Material 1.11.0, Cupertino 1.1.6, listen 1.0.1 and V8 15.4.80.15. Preserve native ABI 2,
UI protocol 24, Manifest 28 and existing package ownership. There is no old-Flutter
compatibility layer.

Current delivery includes independent review, small repairs, local Flax `main`
integration and pull requests for Flax and its maintained Flutter dependency. Preserve
the old maintained Flutter checkout, unrelated edits and historical evidence. Publication,
experimental rendering/windowing expansion and unrelated GC redesign remain outside
this delivery.

## Implementation delivery criteria

- The maintained fork, nested Dart patches, source lock, generated SDK, packaged
  frontend/runtime and native metadata match the exact target. Existing default-call,
  Worker, Canvas, generic and optional-extension contracts remain functional.
- Package floors, imports, configured public libraries, handwritten adapters and
  generated providers/consumers migrate together, preserving declaration identities.
- Source and dependency setup remain reproducible on matching inputs. Reuse unchanged
  scoped checks, run checks proportional to final repairs, and preserve the accepted
  ordinary macOS Debug aggregate and focused runtime/GC behavior.
- Existing ownership, security, image, font, signing, provenance and performance
  assertions remain. Raw reporter failures are authoritative; partial named maps do not
  replace the reporter inventory. Failed or unrun broader checks remain explicit and
  cannot be claimed as passing by this scoped delivery.
- The actual final changes in both repositories, including uncommitted and new files,
  receive a fresh independent PASS bound to immutable delivery snapshots.
- Preserve official Flutter 3.50.0 and maintained-fork ancestry, pin CI to the accessible
  reviewed engine commit, and verify that integration retains the reviewed source tree.

The original full acceptance scope additionally includes complete generation, workspace,
UI, aggregate, standalone and relocated-consumer checks plus macOS Debug/Profile/Release,
Android Debug/Release on both observed page-size scenarios, iOS simulator Debug and
signed physical iOS Release. The historical results and remaining work below retain
those unmet requirements separately from the current scoped implementation delivery.

## Workspaces and reproducibility

```text
Flax: /Volumes/MAC_HOME/Develop/Flutter/flax/.worktrees/flutter-3.50/flax
Branch: feat/flutter-3.50
Base: ad1522d5620d1f9ba11f8ca14e2ef7a36abd7354

Flutter: /Volumes/MAC_HOME/Develop/Flutter/flax/.worktrees/flutter-3.50/flutter
Branch: flax/3.50.0
Base/framework: ab2912035e160d9cad6306df307576da6128ebdb
Engine: 371f77202a73e8dff57a8b3bff75bca55c090aee
Nested Dart: fa8c1270c374c1346931583a17c3b7f278d3822d
V8: e959d47215186f24e182a0503a52374c96569722

Flutter integration: ../flutter-integration
Branch: integrate/flutter-3.50 (based on maintained 4d8a992d5f4a8c983b45ce1b33aaae0474c70de8)
CI maintained revision: 5b35abb0e4301043c5f0b1de129cc3c3da9bf9a4

Evidence root:
/Volumes/MAC_HOME/Develop/Flutter/review-evidence/flutter-3.50-20261112-1747
Integration review evidence:
/Volumes/MAC_HOME/Develop/Flutter/review-evidence/flutter-3.50-delivery-20261115-090732
```

The verified ordinary macOS Debug SDK has a stable official local-engine context:

```sh
export FLUTTER_ROOT=/Volumes/MAC_HOME/Develop/Flutter/flax/.worktrees/flutter-3.50/flutter
export FLUTTER_ENGINE="$FLUTTER_ROOT/.local/flax-3.50-engine"
export PATH="$FLUTTER_ROOT/bin:$PATH"
```

This context selects the already verified ordinary Debug artifacts while retaining the
historical canonical outputs. It exposes the verified macOS Debug build; it does not
certify other targets or modes.

Initial packages `flax-initial` and `engine-initial` preserve the starting states. The
latest frozen pre-repair packages are Flax F8 (`flax-current-after-ios-sim-debug-1`),
`engine-source-5` and `dart-source-1`. Their package digests are respectively
`4874a55dd86fd27e1e423addce5ddc7243f51f4549f9a13a988649c1019a31b7`,
`b2aae125126507329c684fb023cb09252731ab59342a5e83d07f069d2b1d66aa` and
`6044f5bf009c8262966c0fc62ac65015af2fe1870ea6261e2772d96e102081c3`.
They are historical baselines after the repairs below. Capture fresh actual source and
matching native artifacts before assigning new runtime results to the revised candidate.

All compiler/test temporaries stay in the absolute repository-local `.local/tmp`.
Flutter Pub, analyze and create also require the official matching macOS Debug host
artifact context; the existing workspace runner supplies it. Protected cached and
generated Sky sources retain 289 identical files and the original cache metadata; the
stock Sky stamp remains absent. Normalize/sign consumer copies only. Keep native SDK
bytes and metadata intact. Native builds use configure-only followed by Ninja's
`flutter` and `flutter_tester` targets; GN's product runtime value is `release`.

## Integrated candidate repairs

The target engine/compiler migration preserves the recorded-use icon pipeline, private
business font domains, actual default-call lowering, typed Kernel lists and matching
packaged compiler/runtime. The JSON dependency exports its include directory as a
system include; owned-code warning errors remain enabled. Core explicitly owns the
configured listen declarations without duplicate downstream adapters.

The subsequent bounded repairs are:

- Rooted filesystem and selected-local-document IO now use verified native descriptors
  for metadata, positional reads/writes, append, truncation, flush and timestamps.
  One lazy shared worker per owning isolate drains active operations/streams before
  shutdown. Idle owners retain descriptors without retaining a worker. Original
  traversal, protected-path/hardlink, no-follow, regular-file and Session guards remain.
- Native permission adapters accept a trusted per-instance platform, defaulting to
  Flutter's normal platform. Tests use explicit instances instead of debug-only global
  platform assignments; secure-storage tests no longer mutate that global.
- The failed-preparation/Wasm test performs one explicit initial microtask checkpoint,
  preserving its original result and five-second deadline. Three existing Bridge GC
  idle wait bodies use the existing idle helper; their bodies, assertions and waits are
  unchanged. Other pressure cases retain their real pumps and pressure workloads.
- Android is admitted in the existing native startup platform guard. Cold/sole-runtime
  eligibility, genuine false fallbacks, worker inputs, V8 locking, release/acquire
  publication, cancellation, join, disposal and UI-only adoption remain. The guard also
  affects Release/AOT and requires real Android acceptance in that mode.

Independent scoped review of the descriptor patch found and corrected stop/late-pause
ordering and FileStat timezone parity. Normal snapshots match the SDK's local DateTimes;
missing snapshots retain UTC epoch. The rooted late-pause regression targets the hang.
The selected case supplies useful close/drain coverage, without claiming an executed
old-code failure. The worker and native binding design were unchanged by those fixes.

## Accepted focused GC repair

Upgrade work has resumed with minimal existing cases and necessary runtime contracts.
The full 299-case diagnostic run and complete platform matrix remain deferred. A final
source inventory and independent delivery review follow the targeted checks; the earlier
failure inventories below are not waived.

The one-way owner-Dart collector formerly guarded every target and returned before the
existing staged joint collector ran. Removing that early return lets an eligible owner
collection complete the existing closure and weak decisions. Owner, reentrancy, Context,
atomic-pause, sweeping and epoch checks remain. Natural V8 major completion also retains
a pending Dart reclamation request until owner confirmation instead of consuming it.
There is no new collector algorithm, API, timer, pressure input or assertion.

The existing discarded-Iterable callback Widget case fails its null assertion with the
previous native binary and passes with the repaired binary. The existing ordinary and
inherited constructor case passes its Dart/JS retention and release checks. All eight
temporary VM/export diagnostic source changes were then restored to their normal
baselines. The ordinary macOS Debug framework and tester rebuild successfully without
the temporary diagnostic symbols, and the same Widget case passes again under that
normal VM. No product test case was added or modified.

A targeted follow-up selects the six other previously failing cases in one compilation;
all six pass on the ordinary SDK. The current ordinary SDK also passes all 60 existing
runtime/GC contracts and generated FFI reproducibility. These outcomes include actual
worker/GC and cross-session ownership cases, but do not replace the full application or
platform inventories.

Independent acceptance is a scoped PASS for this GC repair under the restored normal
VM. It does not certify every earlier ownership failure, the platform matrix,
performance or the whole upgrade. The private current handoff preserves the closed
reporters, binary provenance and acceptance receipts. Completed comparison workspaces
were removed.

## Evidence and remaining failures

Prior passing scopes include all 775 generator cases; all six producer/reproducibility
and module-delivery checks; workspace analysis; tooling (134 passes and one Windows-only
skip); CLI, canonical unit and benchmark owners; TypeScript/UI generation; full JS
checks; and WebGPU two-mode generated-file parity. macOS `check:runtime` passes all 60
contracts, and all three Debug HMR cases pass with matching preservation guards.
These establish the pre-repair baseline, not final-candidate acceptance.

The complete pre-repair application runs remain unwaived:

| Platform/mode | Raw result | Elapsed |
| --- | --- | --- |
| macOS Debug | 1234 pass / 19 fail / 0 skip | 26:06 |
| macOS Profile | 1201 pass / 47 fail / 6 existing skips | 18:37 |
| macOS Release | 1196 pass / 50 fail / 6 existing skips | 25:55 |
| iOS simulator Debug | 1245 pass / 8 fail / 0 skip | 20:17 |
| Physical iOS Release | 1162 pass / 85 fail / 6 existing skips | recorded journal |
| Android Debug, observed 16 KiB | 1222 pass / 30 fail / 0 skip | 22:27 |
| Android Debug, observed 4 KiB | 1230 pass / 22 fail / 0 skip | 50:50 |
| Android Release, observed 16 KiB | 1180 pass / 66 fail / 6 existing skips | recorded journal |
| Android Release, observed 4 KiB | 1187 pass / 59 fail / 6 existing skips | recorded journal |

The identical APK was used within each Android mode's pair. Hardware, OS and renderer
also differ, so these results do not establish page-size causality. No global-teardown
pass is inferred where the reporter stops during teardown. Existing skips and original
one-hour mobile, 30-minute drive and 20-minute slow-request warning settings remain.
The original GC and Wasm five-second budgets are unchanged.

Bounded F8 diagnostics preserve their separate scopes:

| Diagnostic | Actual observation |
| --- | --- |
| Wasm initial checkpoint | One initial checkpoint completes the jitless Promise reaction; the no-checkpoint control also completed after an unattributed wakeup, so its original timeout was not reproduced. |
| Later native foreground work | iOS simulator Debug waitAsync remains pending after exactly one initial checkpoint, then a real host notification completes 42 once. Retiring the original Context while a survivor stays live produces no observed stale/cross-owner callback. Both scenarios meet their criteria and all 12 input guards pass. |
| Signed physical descriptor capability | All 17 native layout/IO/ownership checks pass; 10,517 current native input entries preserve bytes/metadata. This alone does not certify Dart wrappers. |
| Descriptor candidate-2 private consumer | Analysis and both complete sandbox test owners exit 0, including both late-pause cases. All 12 source/SDK/Sky/native guards pass, with strict live-native checks before and after; copied sources match the reviewed patch and the consumer is removed. |
| Live GC idle comparison | Original control: 287 pass / 12 fail. Three wait-wrapper changes: 290 pass / 9 fail. The typed-Future and rootless-Future cases pass their original assertions. No global GC repair is inferred. |
| Pressure capture | First run: 289 pass / 10 fail; late capture: 290 pass / 9 fail. The extra SDK non-virtual title varies without demonstrated cause. Pressure, roots, loops, pumps and assertions are unchanged. |

The first pressure timeline reaches its 64 MiB cap and covers only the Context pair.
The unchanged collector's late attachment covers the Record/Map pairs completely,
retaining 5,397,100 bytes with zero drops, matching native PID, unchanged flags and
allowlisted read/subscription requests. All 12 source/SDK/Sky/native guards pass for both
runs. Context shows actual recent-frame deferral and staged/resumed Dart GC; this does
not identify its retaining root. Record/Map show actual natural joint begin/commit
labels. A zero certified-collection counter does not mean no committed natural
collection. Remaining ownership failures need a concrete retaining-root diagnosis.

The descriptor worker's onExit barrier prevents further native access, but the VM posts
it before registry removal/count decrement. Immediate isolate-count restoration or GC
admission is not established by onExit alone. Whole-input snapshots and SendPort copies
also have owner-side costs. Churn, eventual group-count restoration, frame/event-loop
latency, throughput, RSS/fd lifetime and GC coexistence still require measurements.

## Remaining work

Continue with remaining concrete defects, necessary delivery-consistency checks and
independent final review. The broader inventories below remain unverified until executed;
the complete matrix is not automatically rerun.

1. Freeze the revised actual Flax/engine sources, rebuild affected native modes and
   capture matching outputs. Validate all eight startup-runtime and six startup-View
   workloads on Android 4 KiB/16 KiB, retaining Release/AOT and Apple regressions.
2. When broader verification resumes, reassess the previously failing ownership cases.
   The focused GC result does not establish that every earlier case passes. Preserve
   pressure, real pumps, budgets, roots, assertions and collector safety checks.
3. Complete descriptor lifecycle/performance, security/image and signed physical iOS
   wrapper checks; retain real source-removal, signature, V8 JIT/jitless and compiler
   evidence for each affected platform/mode.
4. Run required complete 104-owner applications, runtime/HMR, workspace, generation,
   aggregate and relocated-consumer checks on the actual revised inputs.
5. Retain source-bound independent review, passing proportional checks and original-
   workspace preservation evidence for every subsequent delivery. Publication remains
   outside the current scope.
