# Navigation Sessions

Status: implemented and locally verified on macOS arm64 with Hermes.

## Scope

Implement shared and JS-created nested Flutter Navigators on macOS arm64 Hermes,
explicit FlaxSession ownership, Route leases, borrowed NavigatorState, copied navigation
data, and Future delivery with safe UI microtask checkpoints. Preserve existing changes;
do not commit, push, or publish.

## Implementation

Protocol 3 generated bindings use actual Flutter/standalone Material APIs. Route
callbacks outlive their source page, while mounted content independently owns its
subscriptions and Context. The example retains the two reactive regions and adds shared
and mini-app flows. No native ABI, engine version, worker thread, JS timer, or
third-party dependency changed. The generator adds the already-pinned Flutter SDK as a
development dependency to compile its real State/Route plugin fixture.

## Verification

Verified on 2026-09-07 using the pinned Flutter 3.47.0 / Dart 3.13.0 toolchain:

- `flutter pub get --enforce-lockfile` and `pnpm install --frozen-lockfile` passed.
- `dart run melos run check` passed: reproducible generated bindings, 6 generator tests
  (including a separately compiled State/Route/Future plugin fixture), 14 Node tests,
  Dart analysis, formatting, TS checks/builds, documentation checks, example bundles,
  and toolchain-only CMake configuration.
- `dart run melos run check:ui` passed: reproducible FFI, native ABI tests, 15 Dart
  runtime tests, standalone JIT and relocated AOT consumers, and 30 real Hermes Flutter
  widget tests (12 navigation tests plus the previous 18 UI tests).
- The macOS app integration scenario completed the existing reactive UI flow, mixed
  Dart/JS navigation, replacement, nested return, remount, and mini-app container
  rebuild. The fresh `build/ui-integration.json` contains
  `scenario: embedded-shared-nested-navigation` and `completed: true`. Flutter drive
  emitted non-fatal foreground/plugin warnings; the driver validated and saved the
  result before reporting success.
- Release build produced `examples/embedded/build/macos/Build/Products/Release/`
  `flax_embedded.app` (23.7 MB reported by Flutter); its executable is arm64.
- Fifteen repeated push/pop cycles stabilized at 30 owned JS handles and 2 subscriptions
  with no pending Futures. Teardown checks found zero owned handles before disposal;
  recorded UI checkpoints ran only in Flutter's idle phase. Previous Builder cost checks
  still pass (1,000 constraint reads cause no getter bridge calls).
- A regression test reproduced premature disposal when a synchronous Dart member
  requested close during source loading. Scheduling the checkpoint before member
  invocation fixes it without adding another execution loop or ownership abstraction.
- Hashes of all 224 tracked and non-ignored source files were unchanged by the final
  `check` and `check:ui` runs. Native assets, JS bundles, the release app, and temporary
  consumers remain ignored. `git diff --check` passed. No commit, push, or publish ran.

Local evidence is under ignored `.local/stage4/`: `check.log`, `ui.log`,
`navigation-test.log`, and `closing-regression.log` (the intentionally failing test
before its fix). GitHub Actions was not run remotely in this task.

## Limits and next step

Only macOS arm64 Hermes is targeted. Closing waits for host-owned pages to be removed.
Navigation data is copied; State wrapper identity is not guaranteed. The pure runtime
still uses explicit microtasks. Builders do not accept Promises.

Next: Pages and host Router integration, including direct initialization of a target JS
page. Controller ownership and other platforms remain separate work.
