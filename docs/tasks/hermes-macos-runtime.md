# Task: Hermes Runtime on macOS arm64

Status: complete; local acceptance passed on 2026-09-06.

## Goal and scope

Establish a reusable Dart/C ABI/JSI/Hermes runtime in the existing package and native
boundaries. Include synchronous reentry, owned and borrowed values, per-call errors,
explicit microtasks, teardown, and independent package loading. Exclude Flutter UI,
signals, component generation, host services, and other engines/platforms.

The contract and packaging decisions are recorded in
[ADR 0002](../decisions/0002-experimental-runtime.md). No temporary runtime or extra
Dart workspace package was introduced.

## Acceptance criteria

- Native ABI negotiation, identity, released/foreign handle rejection, callbacks, nested
  calls, exceptions, manual jobs, concurrent-entry rejection, and teardown.
- Dart primitive round trips including UTF-16 boundaries; owned/borrowed references;
  isolate ownership; nested callback errors and recovery; retained callbacks after
  replacement or failed registration; active disposal rejection and repeated cleanup.
- Outside-repository packages load through the same native asset entry in JIT and a
  relocated AOT bundle, without original staging sources or library-search variables.
- Missing and corrupt assets fail explicitly; FFI generation is reproducible; existing
  workspace checks pass; generated artifacts stay ignored and checks preserve source.

## Results and validation

Verified locally on macOS arm64 using Flutter 3.47.0 / Dart 3.13.0 and the pinned Hermes
revision:

- Locked Pub and pnpm installation passed without source or lockfile changes.
- `check` passed: Dart analysis, formatting, JS type checks and ESM/declaration builds,
  Markdown lint, four documentation checker tests, 154 local links across 57 Markdown
  files, and default CMake configuration without an engine build.
- `check:runtime` passed: reproducible FFI declarations, native build, one CTest
  executable covering the ABI scenarios, and all 15 Dart integration tests.
- Outside-repository Dart JIT execution passed. Fresh processes rejected missing and
  corrupt assets, and restored assets loaded successfully. A relocated AOT bundle ran
  after deletion of its staged source packages and original bundle, without library
  search environment variables.
- The prepared arm64 dylib exports only `flax_hermes_get_api` and links only macOS
  system libraries. Source caches, native outputs, generated assets, and temporary notes
  are ignored. Hashes of all 132 source/configuration files were unchanged by locked
  installation and the complete check runs.

Reproduce from the repository root using the pinned SDK on PATH:

```sh
flutter pub get --enforce-lockfile
pnpm install --frozen-lockfile
dart run melos run check
dart run melos run check:runtime
```

`check:runtime` explicitly fetches/builds the engine and includes `ffi:check`. For asset
preparation alone, use `dart run melos run native:build`. CMake's default configuration
remains toolchain-only. CI includes Ubuntu workspace checks and macOS arm64 runtime
checks; the added hosted workflow has not been run remotely as part of this local task.

## Handoff

The next phase should reuse `flax/runtime.dart`, the public engine extension, and this
Hermes adapter to implement a small Flutter component-binding slice and local update
tests. Keep Flutter widget lifecycle and scheduler code in the Dart host, JS binding
descriptors in their JS package, and generation rules in the existing binding layer. Do
not create a parallel proof-of-concept bridge.

Current limits include explicit disposal and microtask advancement, callbacks retained
until teardown, no execution deadline, no Future mapping, no Symbol/BigInt conversion,
and no host service or GUI APIs. Native outputs are local macOS arm64 builds targeting
macOS 15; other platforms, security isolation, signing, publication, binary
reproducibility, and performance remain unverified. License, default engine, public
package names, and long-term ABI policy remain open. No commit, push, or publication is
part of this implementation task.
