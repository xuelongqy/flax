# Task: Capability Package Boundaries

Status: complete

## Goal and scope

Move Dart, JavaScript, binding, test, example, host, and native ownership into the
package that provides each capability. Merge the core runtime and Flutter npm entries as
`@flax/core`, retain package-local source directories, and keep top-level examples only
for multi-package integration. Do not publish or select a license.

## Acceptance criteria

- Root `js/`, `bindings/`, and `native/` capability trees are removed without
  compatibility entry points.
- Package checks and examples run without importing another package's tests or private
  sources.
- Binding extensions consume versioned declaration manifests by package name.
- Host and package tooling discovers owners by directory convention.
- Shared native code and both engine adapters pass their existing package and external
  consumer checks with ABI 2 and UI protocol 18.
- Temporary Dart/npm archive checks do not publish or modify source manifests.

## Approach

Use the directory conventions recorded in
[ADR 0017](../decisions/0017-package-boundaries.md). Keep root tools as small aggregate
orchestration commands. Preserve existing runtime behavior and generated public binding
identities while changing physical ownership and import paths.

## Results and validation

The repository now owns Dart, JS, bindings, tests, examples, host input, and native code
under `packages/*`. Core JS exports root, `/flutter`, `/bindings`, and `/host` subpaths.
Binding manifest format 1 serializes declaration models; Material and Canvas generation
pass using the core manifest without reading core selection YAML. Package-owned WPT and
UI fixture hooks replaced feature-specific root test tools.

Completed evidence:

- Locked Flutter and pnpm dependency installation completed. Every discovered package
  passed `tool/package.dart check`, and binding, host, TypeScript, Node, formatting,
  analysis, documentation, and example bundle checks passed through the aggregate
  `check` entry.
- Binding generation passed 40 codegen and manifest tests. Material and Canvas resolve
  core declarations through manifest format 1 without reading core selection YAML, and
  regeneration is stable.
- Temporary archive validation passed for all 10 Dart packages and all 7 npm packages.
  It also compiled outside-repository Dart consumers and isolated npm consumers for core
  and each extension. No source manifest was modified and nothing was published.
- Full Hermes and V8 UI checks passed. Both covered package-owned UI tests, external
  JIT/AOT loading, the aggregate embedded and standalone macOS integration tests,
  release builds, and relocated release execution.
- Engine coexistence and cross-engine reference rejection passed through
  `check:engines`. The engine smoke benchmark completed all 64 samples with no failures;
  its ignored report is under `build/benchmarks/engines/smoke/`.
- Final boundary audits found no old `@flax/runtime` or `@flax/flutter` imports outside
  historical records, no root capability `js/`, `bindings/`, or `native/` directories,
  no package tests importing another package's tests or private sources, and no
  feature-package list in the generic package tools.

During isolated V8 verification, temporary staging was corrected to rewrite only Dart
directive URIs, canonicalize package targets, use consumer-relative dependency paths,
and ignore tracked files already deleted by the migration. A pure core callback fixture
was removed from the aggregate embedded application because the same contract is owned
and exercised by the core package.

## Result

The repository now uses package ownership as its distribution and test boundary. New
runtime work can proceed within the owning package and use the generic package checks;
the top-level applications remain the final multi-package integration gate. Validation
was local on macOS arm64. This task did not run remote CI, publish packages, reserve
registry names, select a license, create tags, or push commits.
