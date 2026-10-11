# Task: Hot reload on the maintained Flutter engine

Status: completed

## Goal and scope

Port Vite development reload to the current maintained Flutter engine. Validate macOS
arm64 V8 first, then Android arm64 V8 and iOS arm64 simulator Hermes. Keep the main
checkout's unrelated edits isolated. Automatic restart, field migration, physical iOS
devices and distribution builds are excluded.

## Acceptance criteria

- Preserve mounted Element, State, edited Controller values and callback semantics.
- Reject incompatible structural changes before committing live registry/UI changes.
- Deliver a real watched source update through Vite and FlaxWebSocketPlugin.
- Close sessions without tracked bridge handles and retain the runtime/GC contract.

## Approach

Reuse the existing prepared module registry and Flutter reassemble path. Port the
previous HMR implementation without installing a duplicate registry in test fixtures.
Keep platform selection at `FlaxEngine.createRuntime()`; no Flutter engine patch is
required. See [ADR 0040](../decisions/0040-vite-hot-reload.md).

The review fixes keep the startup asset current after each valid compilation, use new
class behavior during eager root construction with reversible descriptor staging, and
reuse unchanged dependencies added during development. Content revisions and per-Session
commit acknowledgements resend rejected dependencies, preserve unchanged private
classes, and coalesce saves behind a single in-flight batch. A missing cached dependency
is compiled again when reintroduced. Module completion captures final class member
assignments; failed evaluation restores the original descriptors and member inventory.
Edits made while an importer has a syntax error remain dirty until the complete startup
asset is published, so recovery recompiles those pending dependencies.

## Results and validation

On 2026-10-11, using the maintained local Flutter engine:

| Target                            | Runtime | Focused HMR result                        |
| --------------------------------- | ------- | ----------------------------------------- |
| macOS arm64                       | V8      | 3/3 passed                                |
| Android arm64 emulator            | V8      | 3/3 passed before the review fixes        |
| Android arm64 Pixel 4, Android 13 | V8      | 3/3 passed                                |
| iOS arm64 simulator, iOS 26.5     | Hermes  | 3/3 passed, plus platform semantics setup |

The focused gate covers named-page and application-root State preservation and real
watched-source delivery through Vite and WebSocket. A pending JS Future uses explicit
completion in the fixture rather than a wall-clock assumption across devices. Listener
and timer callback versions are asserted separately; a real device may deliver timers
before the listener assertions without changing either callback's behavior. The macOS,
Pixel 4 and iOS simulator focused gates passed again after that assertion adjustment.

The latest macOS V8, Pixel 4 V8 and iOS simulator Hermes focused gates passed 3/3 again
with the acknowledged revision protocol. The watched-source case verifies a rejected
dependency edit followed by an importer-only recovery, removal and reintroduction of
dependencies, static assignment behavior after commit, an unchanged private-field
dependency, and a Session recreated from the current asset. It verifies V1:1 -> rejected
-> V2:2 -> rejected -> V3:2 and a restarted V3:2 Session, with zero tracked bridge
handles at both Session shutdowns. The Android emulator was not rerun.

Before the review fixes, `dart run melos run check:ui:v8` passed: 532/532 framework
cases, package examples and aggregate composition; the UI runner suite passed 5/5. The
latest `check:runtime:v8` and `check:runtime` each passed 42/42 cases with reproducible
FFI, and the tools JS suite passed 35/35. Regressions cover failed descriptor staging
and member assignments, dependency addition/removal/retry/reuse, compilation error
recovery, late Session connections and independently acknowledged Sessions whose saves
coalesce behind an in-flight batch. A normal importer-only save sends only that factory;
the commit acknowledgement carries its batch ID rather than a full inventory. Workspace
Dart analysis found no issues; JS typecheck, formatting, Markdown lint and local
documentation links passed. All 11 generated example registries match the current
source. The complete 532-case UI gate was not repeated.

The existing Android debug engine artifact initially lacked the current binding API
export. An incremental rebuild from the maintained engine source fixed that validation
prerequisite without an HMR-specific engine source change.

Pixel 4 acceptance requires the device to stay unlocked with the test application in
front; a secure keyguard pauses the frame-based tests. Its final run completed all three
cases and emitted `FLAX_HMR_PASSED` with a successful runner exit.

The shared mobile launcher also observes failures that arrive before its launch command
returns, then awaits the same failure for reporting and cleanup. A mocked early Android
failure verified that the error is caught and application cleanup completes.

Reproduce the focused gate from the repository root after dependency setup:

```sh
dart run tool/check_hot_reload.dart
FLAX_CHECK_TARGET=android-arm64 FLAX_CHECK_DEVICE=<adb-id> \
  dart run tool/check_hot_reload.dart
FLAX_CHECK_TARGET=ios-simulator-arm64 FLAX_CHECK_DEVICE=<simulator-id> \
  dart run tool/check_hot_reload.dart
```

Use the maintained Flutter fork on PATH, build the matching debug engines first, and set
`ANDROID_HOME` for a non-default Android SDK. Mobile receipts are written under
`build/hmr/`; macOS Flutter test journals are under `build/ui/v8/`.

## Handoff

The latest macOS, Android physical-device and iOS simulator development gates are
complete; the earlier Android emulator gate also passed. Implementation and validation
are complete on `feat/hmr-maintained-engine`. The integration target is `main`; no
remote publication has been performed. Physical iOS devices and release/distribution
builds remain unverified.
