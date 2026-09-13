# Task: MaterialApp and Standalone Consumption

Status: complete

## Scope

Generated MaterialApp and ThemeMode with existing protocol 12 machinery. Activated the
standalone application, portable JS bundling, outside-repository package consumption and
relocated release UI verification. No core runtime, native ABI, toolchain or external
dependency version changed. The Dart lockfile stayed unchanged; pnpm gained the new
example importer.

## Results and validation

Before changes, 26 generator tests and 20 interface/navigation framework tests passed.
Source fingerprints and detailed logs are in ignored .local/standalone.

Six new root framework tests pass without a surrounding MaterialApp: real environment,
system/explicit theme selection, local title updates, retained
State/Controller/Navigator, source replacement and root closing with pushed Routes,
first build failure and startup failure cleanup. Pending navigation cancellation reports
exactly one FlaxSessionClosed; it is not suppressed as an application success. One
measured run created one Controller, retained 45 handles / 3 subscriptions after
theme/navigation updates, and cleared tracked handles and subscriptions at close. Twelve
theme updates held a stable handle baseline; title updates rebuilt only the title
property host.

Final local verification on Flutter 3.47.2 / Dart 3.13.2, macOS arm64:

- `dart run melos run check`: reproducible generated output, 26 generator tests, 38 Node
  tests, Dart/TS analysis, formatting, 101 Markdown files / 393 local links, and
  engine-free CMake configuration.
- `dart run melos run check:ui`: one native ABI test, 28 runtime tests, independent JIT
  / missing and corrupt assets / relocated AOT, 201 real Hermes framework tests, 7
  embedded example tests and 2 standalone example tests.
- The external UI consumer installed three JS tarballs, checked exports and singleton
  Flax dependencies, resolved three Dart package copies, and independently typechecked,
  bundled, analyzed and ran the standalone macOS integration scenario.
- Normal-entry release and separate release-integration targets built successfully.
  After removal of the temporary source and original builds, the copied release test
  application completed real UI assertions with no failures or loader overrides.
- Both existing embedded macOS integration scenarios passed, followed by its release
  build. Runtime and external CLI verification were not redundantly rerun separately.
- All 422 nonignored files retained identical hashes across the complete checks. Only
  this handoff was updated afterward and checked separately. A concurrently added V8
  planning document required whitespace-only Prettier formatting; its content was
  preserved. Build assets and temporary artifacts remain ignored.

Material bindings are 60,763 Dart / 28,961 TS bytes, increases of 2,947 / 1,668 bytes.
MaterialApp has one direct constructor call branch. The workspace standalone IIFE is
107,219 bytes. The production app contains 25,248,965 file bytes; the measured external
release build took 32.9 seconds and the standalone verifier took 119.6 seconds. Timings
include this machine's build/cache conditions and are not performance thresholds.

The normal app is build/standalone/flax_standalone.app. Its verification receipt is
build/standalone/verification.json; both paths are relative to the repository root. The
receipt confirms externalPackages, externalIntegration, sourceRemovedBeforeLaunch and
completed. Tests inject Flutter input-channel events, not a system IME session.

## Handoff

See the [application contract](../architecture/applications.md) and
[standalone example](../../examples/standalone/README.md). Use
`dart run melos run standalone:run` to bundle and launch with prepared native assets;
`dart run melos run check:standalone` repeats only the standalone checks.

The next step is extracting a CLI template from this tested source project. MaterialApp
router/deep-link bindings, hot replacement, other platforms, public package publication
and distribution signing remain outside this implementation.

Existing uncommitted work is preserved. No commit, push or publication was performed.
