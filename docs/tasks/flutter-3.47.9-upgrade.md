# Task: Flutter 3.47.9 upgrade

Status: complete

## Goal and scope

Move the maintained Flutter fork and Flax workspace to Flutter 3.47.9 / Dart 3.13.7,
update package dependencies to their latest compatible stable versions, and regenerate
all package-owned Dart and TypeScript bindings. Keep the existing V8 SDK locks and
runtime contracts.

## Acceptance criteria

1. Preserve the maintained engine changes on the official Flutter 3.47.9 tag.
2. Apply the revision-checked Dart patches to Dart 3.13.7 and pass patch checks.
3. Resolve locked Dart/npm dependencies and reproduce all generated bindings.
4. Pass workspace checks and macOS arm64 Debug runtime verification with the matching
   rebuilt engine.

## Approach

Use separate Flax and Flutter worktrees on `feat/flutter-3.47.9`. Rebase the existing 29
engine commits onto Flutter `c197ca5199e9ee5661e865596c9c07294dfab51c` and update the
source lock to Dart `416e33b0ffaef062a60ec966bb8c82ed2b83f128`. Clone existing build
dependencies using APFS copy-on-write, then update the changed Dart and BoringSSL inputs
in isolation. Run the Dart package-config/SDK-version hooks and the engine's
`tools/pub_get_offline.py` hook before building. Flutter's Git-derived display version
includes the fork commits after the 3.47.9 tag; the upstream baseline remains the exact
release revision above.

Flutter pins `test_api` to 0.7.12. Keep `test` 1.31.1 and its compatible analyzer and
build tooling rather than overriding Flutter's dependency constraints. The updated
workspace lock resolves every reported outdated package to its latest compatible
version.

## Results and validation

- All 29 engine commits rebased without conflicts; range-diff preserved their patches.
  The Dart GC/compiler and FFI patches apply to the new Dart revision. Both patch
  protection tests and both V8 SDK validation tests passed.
- Locked dependency installation passed. Material UI is 1.9.0, Cupertino UI is 1.1.5,
  and npm dependencies were updated. Flutter packages and generated UI consumers now
  require Flutter 3.47.9 or later. Runtime admission retains exact revision checks.
- All four binding providers, declaration-only packages and module delivery metadata
  passed reproducibility checks. Host bundles and native FFI declarations also passed.
  Declaration comparison ignores Finder metadata; a positive/negative self-check
  confirms that unexpected generated files still fail verification.
- The matching macOS arm64 Debug engine built successfully. Its default-call compiler
  check passed 20 contract, 14 wide-call and 9 extension checks, including rejection of
  invalid layouts and dynamic targets. Runtime and joint-GC verification passed 58
  tests.
- Generator tests passed 754 cases. All remaining package tests, Dart analysis,
  formatting, JS types/tests, documentation, package/archive consumers and native CMake
  configuration passed. The final complete macOS Debug UI run passed all 1118 cases
  across 93 test files. Two existing UI assertions now match the documented default
  Fetch environment: startup reads the clock origin and Fetch base URL once each, and
  WebSocket installation preserves Fetch. Resource budgets remain strict.
- Review found an incompatible native FFI fixture dependency and stale generated
  build-package pins. Both now use `code_assets` 2.1.0 and `native_toolchain_c` 0.19.5;
  the generated build package also uses `crypto` 3.0.8. Both isolated dependency
  resolutions and build-hook analyses passed. The generated hook compiled a C library
  and its Dart native call returned 42. All three native-assets JS tests passed.
  Semantic binding comparison found no removed public classes, types or functions;
  generated additions and signature changes follow the updated Flutter/UI providers.

## Handoff

The components of `melos run check` were executed separately to reuse completed
example/UI bundling. Framework UI tests used the existing `runFrameworkTests` harness
with those prepared resources. Successful command logs and UI JSON receipts remain in
ignored local/build directories; disposable UI consumers were removed.

Review passed after the native dependency fixes. Integrate into Flax `main` and Flutter
`flax/main`, preserving the existing main histories and the official release ancestry.
Continue local work with the companion fork selected by `.local/environment.sh`.
Android, iOS, macOS Profile and Release require matching rebuilt engines and their own
acceptance checks. Do not reuse the previous 3.47.6 engines with this workspace.
