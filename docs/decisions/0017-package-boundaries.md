# ADR 0017: Capability Package Boundaries

Status: accepted

Date: 2026-09-11

## Context

Flax capabilities had Dart, JavaScript, binding rules, native code, tests, and examples
in separate root trees. A change to one optional capability therefore required knowledge
of unrelated directories and commonly triggered all repository checks. The layout also
did not resemble the package archives that Flutter applications will consume.

## Decision

Use `packages/*` as the only capability ownership boundary. Each implemented package
owns its Dart API, npm package, bindings, tests, example, host bootstrap, notices, and
native implementation where applicable.

Merge the former runtime and Flutter npm packages into `@flax/core`, while keeping
runtime, Flutter, binding, and host sources in separate internal directories and public
subpaths. Extensions depend on Dart `flax` and JS `@flax/core`; they do not gain
implicit dependencies on other extensions.

Commit versioned declaration manifests beside binding selection. A dependent generator
configuration imports a package by name and resolves its manifest through Dart package
config instead of reading another package's YAML or private source.

Keep package examples focused on one capability. Keep the top-level embedded and
standalone applications for multi-package composition and outside-repository release
verification. Root tools discover packages by directory convention and aggregate their
existing checks.

Move the shared C ABI and JSI bridge into `packages/flax/native`, and engine-specific
inputs and adapters into their engine packages.

Describe every package with format-1 `flax_package.yaml`. The metadata records its Dart
entry point, optional same-version npm peer, capabilities, and public registration
symbols for tooling and documentation. It never performs runtime registration. Separate
public npm compilation from private host-bootstrap compilation, and place only the host
bundle output in Pub archives.

## Alternatives

Keeping separate root Dart, JS, bindings, native, and test trees made each technical
language easy to browse, but obscured distribution ownership and forced feature changes
across unrelated roots. A new meta-framework for declaring packages was rejected in
favor of simple directory conventions. A shared test package was deferred because the
work did not establish a stable public testing API.

## Consequences

A capability can be generated and statically checked by package name, and its real UI
tests can run independently with a selected engine. Adding a conforming plugin does not
require a root package-name list.

The manifest format is an explicit codegen boundary independent of the UI protocol and
native ABI. Current versions are defined by the
[verification contract](../architecture/external-binding-verification.md). Package tests
cannot import another package's `test/` or `lib/src/`.

Pub and npm form a versioned pair only where metadata declares a JavaScript peer. Each
capability pair may evolve independently. Runtime-mode npm packages contain
application-side code; declarations-mode packages use an empty ESM entry because their
implementation is embedded in Dart and explicitly installed as a session plugin.

The old `@flax/runtime`, `@flax/flutter`, root `js/`, root `bindings/`, and root
`native/` layouts have no compatibility layer. Publication remains blocked and license
selection remains a separate decision.
