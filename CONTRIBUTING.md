# Contributing to Flax

Flax has an experimental macOS arm64 runtime. See the [current status](README.md) before
choosing a task, and use the [architecture documentation](docs/architecture/README.md)
to identify the owning layer.

## Setup

Use Flutter 3.47.6 from the maintained `flax/main` fork and the remaining tool versions
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

| Change                                                 | Command                                                   |
| ------------------------------------------------------ | --------------------------------------------------------- |
| Dart packages or manifests                             | `dart run melos run analyze`                              |
| Formatting across the repository                       | `dart run melos run format:check`                         |
| JS types, exports, or dependencies                     | `dart run melos run js:typecheck`                         |
| JS package output                                      | `dart run melos run js:build`                             |
| Markdown or local documentation links                  | `dart run melos run docs:check`                           |
| Native CMake configuration                             | `dart run melos run native:configure`                     |
| C ABI header changes                                   | `dart run melos run ffi:generate`                         |
| FFI declaration reproducibility                        | `dart run melos run ffi:check`                            |
| Real macOS engine application                          | `dart run tool/check_engine_application.dart profile`     |
| Live sessions across three hot restarts                | `dart run tool/check_engine_restart.dart`                 |
| Runtime, callbacks, or native packaging                | `dart run melos run check:runtime`                        |
| Binding rules or generator                             | `dart run melos run bindings:check`                       |
| Regenerate Dart and TS bindings                        | `dart run melos run bindings:generate`                    |
| JS behavior (after ui:bundle)                          | `dart run melos run js:test`                              |
| JS example bundle                                      | `dart run melos run example:bundle`                       |
| JS framework test bundles                              | `dart run melos run ui:bundle`                            |
| Framework UI with the matching Flax engine             | `dart run melos run ui:test`                              |
| Cross-module aggregate with the matching Flax engine   | `dart run melos run check:aggregate`                      |
| All UI-owning packages plus aggregate                  | `dart run melos run check:ui`                             |
| Launch prepared macOS example                          | `dart run melos run example:run`                          |
| Standalone source and release with the matching engine | `dart run melos run check:standalone`                     |
| Launch standalone macOS app                            | `dart run melos run standalone:run`                       |
| Workspace-wide or cross-layer changes                  | `dart run melos run check`                                |
| One package's static checks                            | `dart run tool/package.dart check NAME`                   |
| One package's real UI checks                           | `dart run tool/package.dart integration NAME --engine=v8` |
| Temporary Dart/npm archive contents                    | `dart run melos run packages:check`                       |
| Stage packable archives with receipt (no publish)      | `dart run melos run packages:pack`                        |
| Pre-release archive dry-run (no engines/publish)       | `dart run melos run release:check`                        |

macOS arm64 selects V8 JIT automatically. `check:runtime:v8`, `ui:test:v8`,
`check:aggregate:v8` and `check:ui:v8` select the same engine explicitly. Focused UI
checks use `dart run tool/ui_test.dart --package=flax_fetch` and optionally
`--file=test/ui/host_test.dart`. The shared and full entries retain the original
assertions. `check:ui` also runs package examples and aggregate composition.

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

The old multi-platform SDK matrix is historical; it does not certify this engine. See
[platform verification](docs/testing-platforms.md). Other platforms require a maintained
Flutter engine before runtime acceptance can resume.

The full workspace check stops on failure. Ordinary `check` and `native:configure` never
fetch or build an engine. Checks that execute Flutter use the matching official
`--local-engine` and `--local-engine-host` flags through the workspace tools.

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

Every PR/main push runs the complete engine-free `melos check`, `ffi:check` and package
archive checks. The `result` job requires both the static workspace and archive jobs to
succeed. CI explicitly reports that runtime, UI and platform acceptance were not run.
Ordinary package unit tests use the standard Flutter test engine; tests that start a
Flax runtime run through the maintained-engine runtime and UI gates. The former SDK
platform workflows and their manual entry are removed; maintained-engine runtime CI is
pending. `check_platform.dart` retains historical `--list` plans but rejects execution
before fetching or building SDKs. Other platforms require their maintained engine and
new acceptance evidence; the old matrix does not certify this integration.

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
Run `check:ui` and `check:ui:v8` for host scheduling, binary or network changes.

For storage changes, run `dart run tool/package.dart check flax_local_storage` and its
package integration command. Those owner checks contain the storage-specific Hive,
namespace, and example coverage.

For Canvas changes, run `dart run tool/package.dart check flax_canvas` and its package
integration command. `check:ui` invokes the same owner integration when full UI evidence
is needed; the aggregate does not duplicate Canvas behavior.
