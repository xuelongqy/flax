# Contributing to Flax

Flax has an experimental macOS arm64 runtime. See the [current status](README.md) before
choosing a task, and use the [architecture documentation](docs/architecture/README.md)
to identify the owning layer.

## Setup

Use the tool versions in the [toolchain table](README.md#toolchain). A C/C++ compiler
and CMake 3.24 or newer are required for configuration checks.

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

| Change                                             | Command                                                       |
| -------------------------------------------------- | ------------------------------------------------------------- |
| Dart packages or manifests                         | `dart run melos run analyze`                                  |
| Formatting across the repository                   | `dart run melos run format:check`                             |
| JS types, exports, or dependencies                 | `dart run melos run js:typecheck`                             |
| JS package output                                  | `dart run melos run js:build`                                 |
| Markdown or local documentation links              | `dart run melos run docs:check`                               |
| Native CMake configuration                         | `dart run melos run native:configure`                         |
| C ABI header changes                               | `dart run melos run ffi:generate`                             |
| FFI declaration reproducibility                    | `dart run melos run ffi:check`                                |
| Explicit Hermes build and asset preparation        | `dart run melos run native:build`                             |
| Runtime, callbacks, or native packaging            | `dart run melos run check:runtime`                            |
| Binding rules or generator                         | `dart run melos run bindings:check`                           |
| Regenerate Dart and TS bindings                    | `dart run melos run bindings:generate`                        |
| JS behavior (after ui:bundle)                      | `dart run melos run js:test`                                  |
| JS example bundle                                  | `dart run melos run example:bundle`                           |
| JS framework test bundles                          | `dart run melos run ui:bundle`                                |
| Framework UI with prepared Hermes assets           | `dart run melos run ui:test`                                  |
| Flutter host and UI behavior                       | `dart run melos run check:ui`                                 |
| Launch prepared macOS example                      | `dart run melos run example:run`                              |
| Standalone source and release with prepared assets | `dart run melos run check:standalone`                         |
| Launch standalone macOS app                        | `dart run melos run standalone:run`                           |
| Workspace-wide or cross-layer changes              | `dart run melos run check`                                    |
| One package's static checks                        | `dart run tool/package.dart check NAME`                       |
| One package's real UI checks                       | `dart run tool/package.dart integration NAME --engine=hermes` |
| Temporary Dart/npm archive contents                | `dart run melos run packages:check`                           |
| Stage packable archives with receipt (no publish)  | `dart run melos run packages:pack`                            |
| Pre-release archive dry-run (no engines/publish)   | `dart run melos run release:check`                            |

V8 is explicit: use `native:build:v8`, `check:runtime:v8`, `ui:test:v8`, or
`check:ui:v8`. The corresponding Dart tools accept `--engine=v8`. Build both assets
before `check:engines`, which verifies coexistence. Independent measurements use
`bench:engines`. V8 requires the exact host tools in
[its manifest](packages/flax_engine_v8/native/v8.json); normal consumers use prepared
assets and do not need those build tools.

The full check executes these checks sequentially and stops on failure. `docs:check`
also runs real tests for the documentation checker. Ordinary `check` and
`native:configure` never download or build an engine.

`check:runtime` requires macOS arm64, macOS 15 or newer, Xcode command-line tools,
CMake, and Ninja. It checks generated FFI, explicitly builds Hermes, runs CTest,
prepares assets, runs Dart integration tests, and verifies an outside-repository JIT
consumer and a relocated AOT bundle. Unsupported platforms fail explicitly. Use
`FLAX_BUILD_JOBS` to override the default two compiler jobs. The first build requires
network access for the pinned source and generation tool; later builds reuse ignored
caches. See [tool ownership](tool/README.md).

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

Engine source caches and native builds live in each engine package's `.cache/native/`
and `build/native/`. The isolated ffigen installation remains in the root `.cache/`.
Generated binary assets are ignored inside the engine package. The asset hook validates
and registers prepared files; it never builds or downloads them. C ABI headers are
canonical, and their generated Dart declarations are committed. The Flutter API
generator emits committed Dart/TS output. Cupertino remains a scaffold. Example IIFEs
and package-local test bundles are ignored; build them with `example:bundle` and
`ui:bundle`, respectively. Package fixture output lives under the owner's
`.dart_tool/flax/ui`. JS behavior tests also execute the loop-closure framework bundle
in Node; prepare it with `ui:bundle` before a standalone `js:test` run. Ordinary `check`
already prepares it. `ui:test` builds package-owned test JS and runs package UI tests
using prepared Hermes assets. Missing assets report the explicit `native:build` command;
no implicit native download or build occurs.

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

The workspace workflow uses Ubuntu and the pinned Flutter, Node, pnpm, and Melos
versions. It installs locked dependencies, runs the same full check, and checks for
unexpected working-tree changes.

A separate macOS arm64 workflow runs `check:ui` using the same pinned tools. That
command includes check:runtime, real Flutter Widget tests, Flutter drive app
integration, and a macOS release build. A desktop GUI session and full Xcode are needed.
Neither workflow publishes artifacts. These tests do not certify other platforms,
security isolation, or performance budgets.

Framework tests use generated interop fixture outputs from `ui:bundle`. The `ui:test`
entry enables the Flutter test VM service for actual Dart GC/Finalizer observation;
manual framework test invocations should include `--enable-vmservice`. These GC tests
are distinct from deterministic session-close checks and do not run during `check`.

`check:ui` includes standalone application tests, outside-repository Flutter/JS package
installation, macOS integration and relocated release UI validation. `check:standalone`
runs just that portion with already prepared assets. Both reuse the same verification
implementation; `check:ui` prepares native and JS inputs once.

## Engine performance checks

Run `dart run melos run bench:engines:test` for engine-free scheduling and report tests.
With both native assets prepared, `bench:engines:smoke` validates all small workloads
and `bench:engines` runs the complete comparison. See
[benchmark instructions](benchmarks/engines/README.md) for filtering, output paths,
sampling boundaries and interpretation. These commands never build an engine.

Host JavaScript changes require `dart run melos run host:generate` and `host:check`.
Generated host scripts and dependency notices belong to the corresponding Dart package.
Run `check:ui` and `check:ui:v8` for host scheduling, binary or network changes.

For storage changes, run `dart run tool/package.dart check flax_local_storage` and its
package integration command. Full UI checks include Hive failure/persistence tests,
namespace examples, and external consumer coverage.

For Canvas changes, run `dart run tool/package.dart check flax_canvas` and its package
integration command. Full UI checks include those suites.
