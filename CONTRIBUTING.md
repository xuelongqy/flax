# Contributing to Flax

Flax has an experimental macOS arm64 runtime. See the [current status](README.md) before
choosing a task, and use the [architecture documentation](docs/architecture/README.md)
to identify the owning layer.

## Setup

Use Flutter 3.47.9 from the maintained `flax/main` fork and the remaining tool versions
in the [toolchain table](README.md#toolchain). Build the matching local engine before
engine-backed checks; see [setup](README.md). A C/C++ compiler and CMake 3.24 or newer
are required for configuration checks.

```sh
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
```

The Pub workspace includes `packages/*`, package-local examples, and the two aggregate
examples. The pnpm workspace discovers package-owned JS projects and every example JS
project. Dart, JS, binding rules, tests, host sources, and native sources stay with the
package that owns the capability.

To inspect package discovery:

```sh
dart pub workspace list
dart run melos list
pnpm list --recursive --depth -1
```

Melos is pinned in the root pubspec and is invoked with `dart run melos`. An explicit
Melos bootstrap is also available after initial dependency installation:

```sh
dart run melos bootstrap --enforce-lockfile
```

## Checks

Run commands from the repository root.

Keep disposable test workspaces and compiler files on the workspace volume, especially
when the repository is on a separate development disk:

```sh
mkdir -p "$PWD/.local/tmp"
export TMPDIR="$PWD/.local/tmp" TMP="$PWD/.local/tmp" TEMP="$PWD/.local/tmp"
```

Child Dart, Flutter, Node and Python processes inherit these paths. Remove completed
scratch directories and temporary application copies after saving the test receipts;
keep the maintained engine/SDK outputs for subsequent checks.

| Change                                                 | Command                                                                |
| ------------------------------------------------------ | ---------------------------------------------------------------------- |
| Dart packages or manifests                             | `dart run melos run analyze`                                           |
| Formatting across the repository                       | `dart run melos run format:check`                                      |
| JS types, exports, or dependencies                     | `dart run melos run js:typecheck`                                      |
| Build tooling, TS generic lowering and Vite HMR        | `pnpm --filter @flax/build test`                                       |
| JS package output                                      | `dart run melos run js:build`                                          |
| Markdown or local documentation links                  | `dart run melos run docs:check`                                        |
| JS FFI package/archive optionality                     | `pnpm --filter @flax/ffi test`                                         |
| FFI codegen portable package/archive checks            | `pnpm --filter @flax/ffi-codegen run check:archive`                    |
| FFI codegen headers, ABI, cache and Apple example      | `pnpm run ffi-codegen:check` (macOS arm64 with Xcode)                  |
| FFI native calls, callbacks and lifecycle              | [Package runtime acceptance](packages/flax_ffi/test/runtime/README.md) |
| Native CMake configuration                             | `dart run melos run native:configure`                                  |
| C ABI header changes                                   | `dart run melos run ffi:generate`                                      |
| FFI declaration reproducibility                        | `dart run melos run ffi:check`                                         |
| Real macOS engine application                          | `dart run tool/check_engine_application.dart profile`                  |
| Live sessions across three hot restarts                | `dart run tool/check_engine_restart.dart`                              |
| Development HMR State and real Vite/WebSocket delivery | `dart run tool/check_hot_reload.dart`                                  |
| Runtime, callbacks, or native packaging                | `dart run melos run check:runtime`                                     |
| Binding rules or generator                             | `dart run melos run bindings:check`                                    |
| Regenerate Dart and TS bindings                        | `dart run melos run bindings:generate`                                 |
| JS behavior (after ui:bundle)                          | `dart run melos run js:test`                                           |
| JS example bundle                                      | `dart run melos run example:bundle`                                    |
| JS framework test bundles                              | `dart run melos run ui:bundle`                                         |
| Framework UI with the matching Flax engine             | `dart run melos run ui:test`                                           |
| Cross-module aggregate with the matching Flax engine   | `dart run melos run check:aggregate`                                   |
| All UI-owning packages plus aggregate                  | `dart run melos run check:ui`                                          |
| Launch prepared example for the selected target        | `dart run melos run example:run`                                       |
| Launch one package's example only                      | `dart run tool/example_run.dart --package=NAME`                        |
| Standalone source and release with the matching engine | `dart run melos run check:standalone`                                  |
| Launch standalone macOS app                            | `dart run melos run standalone:run`                                    |
| Workspace-wide or cross-layer changes                  | `dart run melos run check`                                             |
| One package's checks                                   | `dart run tool/package.dart check NAME`                                |
| One package's real UI checks                           | `dart run tool/package.dart integration NAME`                          |
| Temporary Dart/npm archive contents                    | `dart run melos run packages:check`                                    |
| Stage packable archives with receipt (no publish)      | `dart run melos run packages:pack`                                     |
| Pre-release archive dry-run (no engines/publish)       | `dart run melos run release:check`                                     |

All maintained targets use V8, with JIT on macOS/Android arm64 and jitless on iOS arm64.
Workspace commands need no engine option. Focused UI checks use
`dart run tool/ui_test.dart --package=flax` and optionally
`--file=test/ui/host_test.dart`. The shared and full entries retain the original
assertions. `check:ui` also runs package examples and aggregate composition.

For a package-only edit, use its package checks and example. Both
`tool/package.dart integration NAME` and `tool/example_run.dart --package=NAME` select
that owner and its dependencies; they do not start the aggregate or other examples. The
outer gallery is for presenting all modules and checking their composition.

`check:runtime` validates the ABI and joint GC in the local Flutter UI isolate.
Independent Dart hosts and standalone SDK bridge builds are retired. Do not run
`native:build` or `bench:engines`; they reject the former deployment model.
`check_engine_application.dart debug|profile|release` validates a real macOS app.
Profile records GC timelines, Flutter frames and memory; release verifies Dart AOT, V8
JIT, signing, the single library closure and relocation after removing sources. Staged
examples use local ad-hoc signatures: their temporary entitlements disable library
validation because no Team ID exists. Receipts record this exception. Developer ID
distribution signing is not tested by this local gate; sign the app and its engine with
the same real identity for distribution.

Permission examples use the optional secure-storage plugin. On macOS its Data Protection
Keychain needs Keychain Sharing and a valid development profile; ad hoc signatures
cannot access it. Set `FLAX_MACOS_TEAM=<team-id>` for prepared example launchers and
checks after configuring that team's profile in Xcode. The launcher configures its
disposable project, signs embedded V8 libraries before sealing the engine framework, and
preserves the checked-in signing settings. Library validation stays enabled for these
signed hosts. It does not register devices or obtain profiles automatically. Hosts with
their own secure-storage backend follow that backend's requirements.

For native macOS file/UI acceptance, set `LUCI_CI=True` when running `check:ui`.
Flutter's CI mode disables the host OS App Sandbox while preserving its other
entitlements. Flax's module sandbox stays enabled. The current rooted file backend
requires reopening `/dev/fd`, which macOS App Sandbox denies. This host limitation is
independent of Data Protection Keychain; do not disable Flax isolation or change the
file backend to unchecked path access to bypass it.

For iOS arm64 simulator acceptance, build `flax_ios_debug_sim_arm64` with the verified
static V8 jitless SDK and matching `flax_mac_debug_arm64` host tools in the fork. Set
`FLAX_CHECK_TARGET=ios-simulator-arm64` and `FLAX_CHECK_DEVICE=<simulator-id>`, then run
`dart run tool/check_engine_application.dart debug`. The temporary consumer targets iOS
16.3 or later and audits the statically embedded interpreter and relocated app.
Simulator profile/release is unsupported; physical devices use a separate gate. For a
connected arm64 iPhone, build `flax_ios_release_arm64` with the verified static V8
jitless SDK and matching `flax_mac_release_arm64` host tools. Set
`FLAX_CHECK_TARGET=ios-device-arm64`, `FLAX_CHECK_DEVICE=<iphone-id>` and
`FLAX_IOS_TEAM=<team-id>`, then run
`dart run tool/check_engine_application.dart release`. This gate requires a real
development signature and provisioning profile, verifies Dart AOT and the engine content
hash, and installs after removing the temporary source. Physical-device debug/profile
and distribution signing remain outside this gate. Use `FLAX_CHECK_STRESS_SECONDS=900`
for the separate sustained device joint-GC gate.

`tool/check_hot_reload.dart` runs the focused development reload gate on macOS V8,
Android V8 or iOS simulator V8 jitless using the same target/device environment
variables. It starts Vite on the development host; Android uses a temporary
`adb reverse` mapping. It does not certify physical iOS devices or release builds.

The old multi-platform SDK matrix is historical; it does not certify this engine. See
[platform verification](docs/testing-platforms.md). Other platforms require a maintained
Flutter engine before runtime acceptance can resume.

The full workspace check stops on failure. Ordinary `check` and `native:configure` never
fetch or build an engine. Native package and generator tests inside `check` require an
existing matching maintained engine. Checks that execute Flutter use the matching
official `--local-engine` and `--local-engine-host` flags through the workspace tools.

Formatting fixes are explicit:

```sh
dart format packages tool examples tests/runtime benchmarks
pnpm exec prettier --write .
```

Generated dependency lockfiles are excluded from Prettier.

## Dependencies and artifacts

For intentional dependency changes, update the owning manifest, run `flutter pub get` or
`pnpm install`, and review the root lockfile changes. Use frozen/enforced installation
for verification and CI.

Keep build outputs, dependencies, SDK caches, and local notes out of Git. `js:build`
writes each package-owned JS project's `dist/`; `native:configure` writes
`packages/flax/build/native/`. Both locations are ignored.

Flutter owns the engine bridge, adapter and V8 libraries. Existing SDK locks are
preserved as verified build inputs; application asset hooks no longer compile a second
runtime. Canonical ABI headers and generated Dart declarations remain in core. The
isolated ffigen installation is in `.cache/`. Generated binding outputs are committed;
example IIFEs and package-local test bundles are ignored. Prepare them with
`example:bundle` and `ui:bundle`. Package fixtures live under their owner's
`.dart_tool/flax/ui`. Ordinary `check` prepares JS behavior fixtures before tests.

## Documentation and handoff

All repository prose, comments, and templates use English. Use the
[task template](docs/tasks/TEMPLATE.md) for a multi-step handoff and the
[decision template](docs/decisions/TEMPLATE.md) for a new architecture decision. Update
existing documentation when its behavior changes; avoid duplicating rules.

A good handoff states what changed, what was checked, what remains uncertain, and the
next concrete action. Reference reproducible commands and relevant files.

## Changes and review

Keep changes scoped, preserve unrelated edits, and explain observable outcomes. Use
conventional commit subjects when commits are requested. Pull requests should describe
the change, validation, and any remaining limitation.

All packages are currently blocked from publication. Selecting a license, claiming
registry names, releasing packages, and adding automatic publication are separate future
decisions.

## CI

PR/main checks and manual archive checks share one macOS arm64 job in
[packages.yml](.github/workflows/packages.yml). It checks out the fixed maintained fork,
runs ordinary gclient hooks, obtains the locked V8 SDK through `prepare_ci_sdk.dart`,
builds the matching Debug engine with two jobs and explicitly produces the pinned Dawn
asset. Bootstrap precedes the engine build; directory comparisons verify that later Pub
and workspace checks keep the generated maintained `dart:ui` declarations selected. The
job then runs complete `melos check`, `check:runtime`, `ffi:check` and `release:check`;
`result` requires the reused job to succeed. No tests are skipped to accommodate stock
Flutter. Hosted cleanup requires GitHub-hosted macOS arm64 and at least 50 GiB free; it
is not a local development command.

The fork source is based on Flutter 3.47.9/Dart 3.13.7; its full Git history may report
a derived prerelease framework version. The CI source pin and engine source lock are the
authority, not an edited version-cache file. No hosted run is claimed before the local
fork and Flax commits are pushed. See the
[integration task](docs/tasks/webgpu-js-api.md#latest-main-integration). The former SDK
platform workflows remain removed; `check_platform.dart` retains historical `--list`
plans but rejects execution before fetching or building SDKs. Other platforms and full
application/UI acceptance require their own maintained engine and evidence.

Framework tests use generated interop fixture outputs from `ui:bundle`. The `ui:test`
entry enables the Flutter test VM service for actual Dart GC/Finalizer observation;
manual framework test invocations should include `--enable-vmservice`. These GC tests
are distinct from deterministic session-close checks and do not run during `check`.

`check:standalone` owns standalone application tests, outside-repository Flutter/JS
package installation, macOS integration and relocated release UI validation. It uses the
matching local Flutter engine and stays separate from package UI and aggregate checks.

## Engine performance checks

Run `dart run tool/check_engine_application.dart profile` for current GC timelines,
frame timings, memory and startup measurements. `FlaxJointGC` measures the V8 phase;
`FlaxCollect` surrounds an owner-requested whole Dart collection. Dart pressure can also
initiate joint collection directly. Preserve these distinctions in reports.
`bench:engines:test` retains engine-free report tests; the standalone benchmark
executables reject the retired deployment model. Historical measurements stay in
[benchmark instructions](benchmarks/engines/README.md).

Host JavaScript changes require `dart run melos run host:generate` and `host:check`.
Generated host scripts and dependency notices belong to the corresponding Dart package.
Run `check:ui` for host scheduling, binary or network changes.

For storage changes, run `dart run tool/package.dart check flax_local_storage` and its
package integration command. Those owner checks contain the storage-specific Hive,
namespace, and example coverage.

For Canvas changes, run `dart run tool/package.dart check flax_canvas` and its package
integration command. `check:ui` invokes the same owner integration when full UI evidence
is needed; the aggregate does not duplicate Canvas behavior.
