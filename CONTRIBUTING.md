# Contributing to Flax

Flax is at the scaffold stage. See the [current status](README.md) before choosing a
task, and use the [architecture documentation](docs/architecture/README.md) to identify
the owning layer.

## Setup

Use the tool versions in the [toolchain table](README.md#toolchain). A C/C++ compiler
and CMake 3.24 or newer are required for configuration checks.

```sh
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
```

The root Pub workspace includes `packages/*`; the pnpm workspace includes `js/*`.
Examples contain documentation only and are not workspace members.

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

| Change                                | Command                               |
| ------------------------------------- | ------------------------------------- |
| Dart packages or manifests            | `dart run melos run analyze`          |
| Formatting across the repository      | `dart run melos run format:check`     |
| JS types, exports, or dependencies    | `dart run melos run js:typecheck`     |
| JS package output                     | `dart run melos run js:build`         |
| Markdown or local documentation links | `dart run melos run docs:check`       |
| Native CMake configuration            | `dart run melos run native:configure` |
| Workspace-wide or cross-layer changes | `dart run melos run check`            |

The full check executes these checks sequentially and stops on failure. `docs:check`
also runs real tests for the documentation checker. There are no framework runtime tests
yet. CMake configuration verifies the compiler setup and does not produce a Flax
library.

Formatting fixes are explicit:

```sh
dart format packages
pnpm exec prettier --write .
```

Generated dependency lockfiles are excluded from Prettier.

## Dependencies and artifacts

For intentional dependency changes, update the owning manifest, run `flutter pub get` or
`pnpm install`, and review the root lockfile changes. Use frozen/enforced installation
for verification and CI.

Keep build outputs, dependencies, SDK caches, and local notes out of Git. `js:build`
writes each JS package's `dist/`; `native:configure` writes `build/native/`. Both
locations are ignored.

The five Dart libraries and five JS modules are empty. Their dependency edges express
intended package ownership, not an implemented runtime. Do not add placeholder commands
that claim a generator, engine, or application is working.

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

The scaffold workflow uses Ubuntu and the pinned Flutter, Node, pnpm, and Melos
versions. It installs locked dependencies, runs the same full check, and checks for
unexpected working-tree changes.

This workflow does not validate native runtime behavior or mobile, desktop, and web
application builds. Those checks will be added with the corresponding implementations.
