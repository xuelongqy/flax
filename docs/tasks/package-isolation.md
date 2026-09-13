# Task: Package Isolation Completion

Status: complete

## Goal and scope

Complete the package-boundary migration by making generated UI fixtures, tests,
examples, native tools, FFI configuration, and binding paths independently owned by
their package. Preserve runtime behavior, UI protocol 18, native ABI 2, and all public
application APIs.

## Acceptance criteria

- A package check builds and runs only its own tests, fixtures, JS dependency closure,
  and example.
- Aggregate UI checks discover every runnable package example.
- Shared engine-neutral test contracts live in `flax_test`; feature helpers stay with
  their owner.
- Native caches, builds, FFI configuration, and engine preparation belong to the
  relevant package.
- Binding generation is independent of the caller's working directory.
- Full Hermes and V8 checks pass without publishing or changing protocol versions.

## Approach

Keep root commands as convention-based discovery and sequencing. Store package fixture
output below the owner, use package configuration to resolve generation paths, and keep
only true cross-engine scenarios under root tests. This completes the ownership model in
[ADR 0017](../decisions/0017-package-boundaries.md) without adding another test or
lifecycle framework.

## Results and validation

UI fixtures now live below each owner package, and package checks build only that
package's JavaScript dependency closure, generated fixtures, tests, and example. Package
examples and integration tests are discovered recursively. Engine-neutral runtime and
loop-closure contracts live in `flax_test`; feature-specific support remains local.

Binding paths resolve from the owning configuration and its nearest package config.
Native configuration, caches, builds, and preparation tools belong to the core or engine
package that owns them. Root tools discover packages and engine metadata by convention.
Notice collection excludes source and binary files, and archive checks enforce that
prepared notice trees contain documentation rather than build artifacts.

The following validation passed on macOS arm64 with the pinned Flutter and Dart SDKs:

- `dart run tool/package.dart check flax`
- `dart run tool/package.dart check flax_material_ui`
- `dart run tool/package.dart integration flax_engine_hermes --engine=hermes`
- `dart run tool/package.dart integration flax_engine_v8 --engine=v8`
- frozen Flutter and pnpm dependency installation
- binding, host, JavaScript, package archive, and outside-consumer checks
- complete Hermes and V8 UI checks, including every runnable package example
- native engine coexistence and the two-engine smoke benchmark

The full `check`, `check:ui`, `check:ui:v8`, `check:engines`, and `bench:engines:smoke`
commands passed. No package was published.

## Handoff

New package work should keep source, fixtures, tests, examples, bindings, host
bootstrap, and native implementation with the package that owns the capability. Add
files under the documented conventions; root orchestration discovers them without a
package-name list. Package integration tests without a platform runner are Dart runtime
contracts; device integration belongs to a package example with its own macOS runner.
