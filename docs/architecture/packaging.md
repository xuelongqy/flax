# Package Boundaries and Distribution

## Ownership

`packages/*` is the only capability ownership boundary. A package contains the parts it
actually needs:

- its public Dart API and implementation;
- its `js/` npm package and tests;
- binding selection, generated output, and declaration manifest;
- Dart and Flutter tests;
- a package-local macOS example when the capability can run independently;
- host bootstrap source and notices;
- native source, pinned inputs, and tests.

Extensions depend on Dart `flax` and JS `@flax/core`. They do not depend on another
extension unless that dependency becomes an explicit public product decision. The core
package has no concrete engine dependency.

| Package                                      | Owned capability                                                                         |
| -------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `flax` / `@flax/core`                        | Runtime interfaces, host base, Flutter bindings, signals, sessions, and shared C ABI/JSI |
| `flax_material_ui` / `@flax/material-ui`     | Material bindings and Route/Page adapters                                                |
| `flax_cupertino_ui` / `@flax/cupertino-ui`   | Reserved Cupertino bindings; empty scaffold, no generated runtime or example             |
| `flax_fetch` / `@flax/fetch`                 | Fetch session plugin                                                                     |
| `flax_websocket` / `@flax/websocket`         | WebSocket session plugin                                                                 |
| `flax_local_storage` / `@flax/local-storage` | Persistent localStorage session plugin                                                   |
| `flax_canvas` / `@flax/canvas`               | Canvas host plugin and CanvasView binding                                                |
| `flax_engine_hermes`                         | Hermes adapter, pinned source, prepared assets, and engine tests                         |
| `flax_engine_v8`                             | Experimental V8 adapter, pinned source, prepared assets, and engine tests                |
| `flax_codegen`                               | Analyzer model, manifest format, and Dart/TypeScript emitters                            |
| `flax_test`                                  | Development-only engine-neutral runtime contracts and shared test harnesses              |

Cupertino remains an empty package boundary. It has no generated runtime or example
until a real implementation exists. `flax_test` is not a published product API.

## Ecosystem metadata

Every package commits `flax_package.yaml`. Format 1 describes the Dart entry point, an
optional npm peer, capabilities, and public registration symbols. Packages whose
`capabilities` include `bindings` also carry a top-level `bindingNamespace` (see
[ADR 0022](../decisions/0022-stable-binding-identity.md)). The file is tool metadata
only: it does not import code, instantiate plugins, or participate in session startup.

```yaml
format: 1
dart:
  entrypoint: package:flax_fetch/flax_fetch.dart
javascript:
  package: '@flax/fetch'
  version: same
  mode: declarations
capabilities:
  - host-plugin
registration:
  plugins:
    - FlaxFetchPlugin
```

Capabilities are limited to `core`, `bindings`, `host-plugin`, `engine`, `codegen`, and
`test-support`. Binding names identify exported `FlaxBindingModule` values. Plugin names
identify exported plugin classes for documentation and future tooling; they are never
automatically constructed. Canvas records only `FlaxCanvasPlugin` because that plugin
installs its generated binding module itself.

`javascript.version: same` requires the Pub and npm manifests of one capability package
to have exactly the same version. It does not force all Flax packages to share one
version. Consumers install the Dart and npm halves of a capability at matching versions,
while core and each extension can evolve independently.

## JavaScript package

The former runtime and Flutter npm packages are one package:

```typescript
import { signal, computed, bind, batch } from '@flax/core';
import { Text, Column, StatefulWidget, runApp } from '@flax/core/flutter';
import type { DartList, DartMap } from '@flax/core/bindings';
import type {} from '@flax/core/host';
```

Source remains separated under `packages/flax/js/src/runtime`, `flutter`, `host`, and
generated directories. Optional packages import only the public subpaths they need.
There are no compatibility packages or re-export shims for the old names.

The pnpm workspace discovers `packages/*/js`, `packages/*/example/js`, and
`examples/*/js`. Each JavaScript package has separate npm and embedded-host checks.
`tsconfig.npm.json` includes only public module entries. `tsconfig.host.json` checks
`src/host/bootstrap.ts` and its private implementation without emitting it into the npm
archive.

Packages in `runtime` mode ship executable application-side JavaScript and declarations.
Packages in `declarations` mode ship declarations plus a side-effect-free `noop.js` so
every export remains importable. Their real implementation is already embedded in the
paired Pub package and installed by explicit Dart plugin registration. Importing an npm
module never installs a session plugin.

Host global declarations target the Flax runtime and should be compiled with an ES
library rather than `lib.dom`, which declares competing browser globals. Projects that
also compile browser code can keep Flax sources in a separate TypeScript project and use
ordinary module type imports at shared boundaries.

## Binding manifests

Every implemented binding package commits `bindings/manifest.json`. Manifest format
**2** is the only supported projection after the M3 direct cutover (Manifest 1 is
rejected; there is no long-term compatibility layer — see
[ADR 0021](../decisions/0021-external-binding-version-domains.md), the
[migration guide](../guides/external-binding-migration.md), and the
[compatibility matrix](external-binding-compatibility.md)). It carries the lossless
cross-package semantic model: identities, JS exports, type categories and
relationships, selected members, conversion semantics, and per-module UI protocol /
required capabilities. It does not copy selection YAML into dependent packages.

A configuration imports a Dart package by name:

```yaml
imports: [flax]
```

`flax_codegen` resolves that package through Dart package config and reads its manifest.
It parses only the current package's selection YAML. Missing imports, dependency cycles,
manifest-format mismatches, and UI protocol mismatches fail before output is emitted.
Generation follows the dependency graph and never reads another package's tests or
private Dart sources.

Config paths are package-relative. `flax_codegen` locates the nearest
`.dart_tool/package_config.json` by walking upward from the owning configuration, then
resolves binding inputs, Dart output, JS output, and manifests from that package. The
same config therefore produces identical output when invoked from the repository root or
its package directory.

## Host bundles

A package with a host implementation uses these conventional paths:

```text
js/host.json
js/src/host/bootstrap.ts
lib/src/generated/host_bootstrap.g.dart
THIRD_PARTY_NOTICES.txt
```

The root host tool discovers these files. It provides bundling and reproducibility
checks but has no list of Fetch, WebSocket, Canvas, or storage packages. A package can
be checked alone with `node tool/host_bundle.mjs --check --package <dart-package>`.

## Native code and engines

The public ABI 2 header, shared JSI bridge, value IDs, and shared native tests live in
[`packages/flax/native`](../../packages/flax/native/README.md). Engine adapters live in
their engine packages:

- [Hermes](../../packages/flax_engine_hermes/native/README.md)
- [V8](../../packages/flax_engine_v8/native/README.md)

The FFI generator reads `packages/flax/native/include/flax/runtime.h` and writes the
committed core Dart declarations. Engine CMake projects locate the core native directory
through the workspace/package tools; they do not depend on an old root `native/` path.

Explicit native build commands verify pinned upstream inputs, build the selected dylib,
and prepare `native/generated/macos_arm64` inside its engine package. Asset hooks only
validate and register prepared files. They never download, compile, or fall back to a
machine-local library. Hermes remains the default; V8 stays explicit.

`check:runtime` and `check:runtime:v8` verify native tests, the public Dart entry,
outside-repository JIT loading, relocated AOT loading, missing/corrupt asset rejection,
and cleanup. `check:engines` covers coexistence and cross-engine reference rejection.

## Tests and examples

Package tests import only public dependencies and their own support code. Core owns
runtime, session, Flutter, navigation, State, Context, and generated core binding
contracts. Each extension owns its Dart, Node, generated-binding, and Flutter tests.
Engine packages own engine and asset-loading tests. `flax_codegen` owns independent
fixtures.

Generated UI fixtures also stay with their owner at
`packages/<owner>/.dart_tool/flax/ui`. Package checks build only that owner and its JS
dependency closure. Aggregate checks discover each owner and build them separately, so
fixture names need only be unique inside one package. Non-default-engine isolation
copies the selected package, its Dart dependency closure, and that package's fixture; it
does not stage every extension.

Shared engine-neutral runtime contracts and deterministic test helpers live in the
development-only [`flax_test`](../../packages/flax_test/README.md) package. It imports
only public `flax` APIs. HTTP servers, persistence fixtures, Canvas helpers, and other
domain-specific support remain with their feature package. Root runtime tests cover only
cross-engine coexistence, isolation, and benchmarks.

Every implemented runtime package has a package-local macOS example. It demonstrates
that package, core, and the selected engine. The top-level
[embedded](../../examples/embedded/README.md) and
[standalone](../../examples/standalone/README.md) applications are aggregate consumers;
they do not own framework contract tests.

The generic package commands are:

```sh
dart run tool/package.dart check flax_fetch
dart run tool/package.dart integration flax_fetch --engine=hermes
```

Discovery follows directory conventions. Adding a conforming package does not require a
new package-name array in the root tools.

The core FFI selection lives at `packages/flax/native/ffigen.yaml`. Each engine's
download, patch, build, notices, and prepared-asset workflow lives in its own
`tool/native.dart`; the root command only discovers and dispatches to that owner.

## Archive validation

All Dart packages retain `publish_to: none`, and all npm packages retain
`private: true`. The repository does not publish, reserve registry names, select a
license, create tags, or upload artifacts.

`packages:check` copies packages into a system temporary directory. Only those copies
remove workspace and publication blockers. It runs Dart publish-content validation and
npm pack inspection, rejects source/tests/build/cache leakage, and validates package
dependencies without modifying repository manifests. Metadata capabilities select the
checks: binding archives need a manifest, host plugins need their generated host script,
core needs the public ABI header, and engine archives need their hook, prepared dylib
and manifest, and consolidated notices.

The check also validates paired versions, compiles a minimal outside-repository Dart
consumer that references every declared registration symbol, and installs each npm
extension with `@flax/core` in an isolated consumer. This verifies core plus one
extension instead of relying only on an all-packages workspace. The temporary archive
check is structural evidence, not a release, registry reservation, or license decision.

`packages:pack` (`tool/pack_archives.dart`) stages disposable Dart package trees and npm
`.tgz` archives under `.local/archives/` (or `--out`) and writes `RECEIPT.json` plus
`RECEIPT.txt`. The receipt records format, mode, UTC time, package names/versions, and
output paths. Use `--dry-run` to pack into a temporary directory, print the receipt, and
discard the trees. Strip rules match `packages:check` workspace blockers and omit
tests/examples from consumer trees. Repository manifests keep `publish_to: none` and
`private: true`.

`release:check` (`tool/check_release.dart`) is the in-repo pre-release checklist: assert
unpublished manifests, run `packages:check`, then `pack_archives --dry-run`. It never
publishes to pub.dev or npm and does not build engines. GitHub Actions runs the same
sequence on Ubuntu via `.github/workflows/packages.yml` without the macOS runtime job.

Pub archives include Dart implementation, generated bindings, required embedded host
scripts, and runtime assets. They exclude JavaScript source, binding selection YAML,
tests, examples, CMake projects, patches, engine downloads, and detailed notice trees.
Core keeps only its public ABI header from `native/`. Engine tools consolidate upstream
notices into one root `THIRD_PARTY_NOTICES.txt`; detailed provenance stays in the
repository build tree. npm archives contain only files reachable from their exports,
their declarations and maps, and the package README.

The standalone verifier separately copies Dart packages and packs npm packages for a
real outside-repository macOS consumer. It resolves dependencies without repository
aliases, runs integration assertions, builds release, relocates the result, deletes the
source staging tree, and executes the relocated application.

## Workspace checks

Root Melos commands aggregate the same package owners:

```sh
dart run melos run bindings:check
dart run melos run host:check
dart run melos run check
dart run melos run check:ui
dart run melos run check:ui:v8
```

Ordinary `check` never fetches or builds an engine. UI checks require prepared or
explicitly built macOS arm64 assets and run serially because they drive desktop apps.
