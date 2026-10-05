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

| Package                                              | Owned capability                                                                                         |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `flax` / `@flax/core-runtime`                        | Runtime interfaces, host base, Core binding implementations, signals, sessions, and shared C ABI/JSI     |
| `flax_flutter` / `@flax/flutter`                     | Declaration-only public Flutter library surface (`foundation`, `widgets`, `material`, and related paths) |
| `flax_dart` / `@flax/dart`                           | Declaration-only public Dart SDK library surface (`core`, `async`)                                       |
| `flax_material_ui` / `@flax/material-ui`             | Material implementation delivery package and Route/Page adapters                                         |
| `flax_cupertino_ui` / `@flax/cupertino-ui`           | Selected Cupertino bindings, module plugin, and package-local example                                    |
| `flax_fetch` / `@flax/fetch-runtime`                 | Fetch session plugin                                                                                     |
| `flax_websocket` / `@flax/websocket-runtime`         | WebSocket session plugin                                                                                 |
| `flax_local_storage` / `@flax/local-storage-runtime` | Persistent localStorage session plugin                                                                   |
| `flax_canvas` / `@flax/canvas-runtime`               | Canvas host plugin and CanvasView binding                                                                |
| `flax_engine_hermes`                                 | Hermes adapter, locked shared SDK, and engine tests                                                      |
| `flax_engine_v8`                                     | Experimental V8 adapter, locked shared SDK, and engine tests                                             |
| `flax_native_assets`                                 | Build-only owner of shared Android C++ and Windows CRT native assets                                     |
| `flax_codegen`                                       | Analyzer model, manifest format, and Dart/TypeScript emitters                                            |
| `flax_test`                                          | Development-only engine-neutral runtime contracts and shared test harnesses                              |

`flax_test` is not a published product API.

## Ecosystem metadata

Every package commits `flax_package.yaml`. Format 2 describes the Dart entry point, an
optional npm peer, capabilities, and public registration symbols. Packages whose
`capabilities` include `bindings` also carry a top-level `bindingNamespace` (see
[ADR 0022](../decisions/0022-stable-binding-identity.md)). The file is tool metadata
only: it does not import code, instantiate plugins, or participate in session startup.

```yaml
format: 2
dart:
  entrypoint: package:flax_fetch/flax_fetch.dart
javascript:
  package: '@flax/fetch-runtime'
  types: '@flax/fetch'
  version: same
  mode: runtime
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

## JavaScript packages and public library specifiers

Application code imports Flutter and Dart APIs by their public library specifier:

```typescript
import { signal, computed, bind, batch } from '@flax/core';
import { Text, Column, StatefulWidget, runApp } from '@flax/flutter/widgets';
import { TextButton } from '@flax/flutter/material';
import { Duration } from '@flax/dart/core';
import { FlaxNavigatorObserver } from '@flax/core/navigation';
import type { DartList, DartMap } from '@flax/core/bindings';
import type {} from '@flax/core/host';
```

The public path is independent of the physical npm package that owns the JavaScript
implementation. `@flax/flutter` and `@flax/dart` are declaration-only packages and are
the authoritative TypeScript surface. Core physically delivers the selected
`@flax/flutter/{widgets,foundation,gestures,services,scheduler}` and `@flax/dart/*`
implementations; `@flax/material-ui` physically delivers `@flax/flutter/material`.
`@flax/core/navigation` remains a Core-owned public implementation entry.

Every capability has separate public declarations and runtime delivery. `@flax/core`,
`@flax/fetch`, `@flax/websocket`, `@flax/local-storage`, and `@flax/canvas` contain only
TypeScript declarations; their implementations use the corresponding `-runtime` npm
names. Flutter and Dart declarations remain `@flax/flutter` and `@flax/dart`.
Material/Cupertino source delivery remains `@flax/material-ui`/`@flax/cupertino-ui`.
Public application imports do not change. `javascript.package` identifies source
delivery; `javascript.types` identifies the declaration package in metadata format 2.

The Flutter host prepares locked source packages as application assets. Business code
uses only plugin-injected modules; missing prepared modules fail during bundling or
session startup. Installing a source npm package does not activate its Dart plugin.
Prepared inventories list concrete public subpaths alongside their owning module;
business builds accept only these paths and exact module entries. Private helpers stay
inside prepared factories, and a parent module cannot satisfy a missing child entry.

Source remains separated under `packages/flax/js/src/runtime`, `flutter`, `dart`,
`host`, and generated directories. Optional packages import only the public subpaths
they need. The removed `@flax/core/flutter` public entry and direct `@flax/material-ui`
application API have no compatibility re-export layer.

The pnpm workspace discovers `packages/*/js`, `packages/*/js-types`,
`packages/*/example/js`, and `examples/*/js`. Each JavaScript package has separate npm
and embedded-host checks. `tsconfig.npm.json` includes only public module entries.
`tsconfig.host.json` checks `src/host/bootstrap.ts` and its private implementation
without emitting it into the npm archive.

Source packages ship executable delivery entries and their dependency graph. Public
declaration packages ship only `.d.ts` files, with types-only exports. Host bootstrap
implementations are built from the same capability source into the Pub plugin and the
source npm archive. A public npm import never installs a session plugin.

Host global declarations target the Flax runtime and should be compiled with an ES
library rather than `lib.dom`, which declares competing browser globals. Projects that
also compile browser code can keep Flax sources in a separate TypeScript project and use
ordinary module type imports at shared boundaries.

## Binding manifests

Every implemented binding package commits `bindings/manifest.json`. The writer and
reader accept Manifest **13** only. The manifest carries the current cross-package
semantic model: declaration ownership, stable identities, JS exports, recursive types,
generic scopes, selected members, public-library routing, State variants, conversion
semantics, and each module's UI protocol and required capabilities. It does not copy
selection YAML into dependent packages. Unknown formats fail before generation; there is
no compatibility reader or normalization path. See
[ADR 0037](../decisions/0037-package-scoped-binding-providers.md) and
[External Binding Verification](external-binding-verification.md).

A configuration imports a Dart package by name:

```yaml
imports: [flax]
```

`flax_codegen` resolves that package through Dart package config and reads its manifest.
It parses only the current package's selection YAML. Missing imports, dependency cycles,
manifest-format mismatches, and UI protocol mismatches fail before output is emitted.
Generation follows the dependency graph and never reads another package's tests or
private Dart sources.

The Flax Core manifest is an implicit dependency of binding packages that depend on Dart
`flax`; Core bindings are always injected. Independent namespaces may bind the same Dart
source and short module name. Within one namespace duplicate full identities remain
errors. A unique adequate dependency provider is reused; missing, insufficient or
ambiguous non-Core providers produce a complete local binding. Explicit local selections
remain local. Core-owned types cannot be republished.

Object inputs are checked against actual Dart types and concrete generic arguments.
Typed results expose the interface selected by the signature. Erased results retain the
originating package context through callbacks, Futures and lazy collections/Streams;
Core has priority, then the originating package and its dependencies. Equal-priority
ambiguity is rejected instead of depending on registration order. Alias views share one
Dart object, disposal and listener ownership.

## Application module inventory and host delivery

Implementation delivery uses a versioned `flax_modules.json`, separate from the Binding
Manifest. It records public specifiers, the physical npm package and source entry,
delivery dependencies, and the Dart binding requirements needed if that module is
actually injected into a session. `tool/module_delivery.mjs` derives official delivery
metadata from Manifest 13 rather than duplicating binding ownership by hand.

An application prepares the modules it can provide, for example:

```json
{
  "formatVersion": 1,
  "modules": [
    { "specifier": "@flax/core", "package": "@flax/core-runtime" },
    { "specifier": "@flax/core/host", "package": "@flax/core-runtime" },
    { "specifier": "@flax/core/navigation", "package": "@flax/core-runtime" },
    { "specifier": "@flax/flutter/widgets", "package": "@flax/core-runtime" },
    { "specifier": "@flax/flutter/material", "package": "@flax/material-ui" }
  ],
  "flutterProject": "..",
  "output": "assets/flax_modules"
}
```

`@flax/tools` resolves the locked npm implementations, follows declared delivery
dependencies, emits Flax-loadable factories into the Flutter assets directory, and
checks that the asset path is declared. The resulting manifest is an application
capability inventory, not a per-session injection list. The Flutter application loads it
once as immutable `FlaxModuleAssets` and assigns it to `Flax.moduleAssets` before
constructing sessions. Sessions snapshot that value; the preloaded source bytes may be
reused across sessions without sharing JavaScript module instances or Dart references.

Each `FlaxPlugin` declares the public modules it needs through `jsModules`. `FlaxView`
passes its plugin snapshot to the session, which selects only requested modules present
in `Flax.moduleAssets`, follows their delivery dependency closure, validates the Dart
binding requirements for that selected set, and registers only those factories. The base
host requests Core, host declarations, navigation and the Core Flutter module
implicitly. Material requests `@flax/flutter/material` through `FlaxMaterialPlugin`.
Inventory modules that no plugin requests are not evaluated, registered, or
binding-validated.

Missing requested modules fail session startup before business source executes. The
business bundler externalizes prepared imports to the session registry and rejects
unprepared Flax implementation imports, including private implementation paths. Direct
imports, transitive imports and reexports share one session-local instance. Unrequested
inventory modules remain inactive. Wire IDs remain independent of npm paths.

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

The engine SDK repository pins upstream sources and patches, then publishes relocatable
macOS arm64 shared-library SDKs. Each engine package locks one SDK URL and SHA-256. Its
asset hook downloads and verifies the SDK on a cold cache, compiles the Flax ABI and
adapter from the package's source, and registers the bridge and all engine libraries.
`native:build` exercises that same bridge build and its native tests. There is no
engine-source fallback. Hermes remains the default; V8 stays explicit.

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
dependency closure. The full UI entry imports original test files and invokes their
`main()` functions in owner/file groups, inside one test process per engine. Fixtures
are preloaded by owner before registration, so names need only be unique inside one
package. Focused execution stages only selected owners and their dependency closure.

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
adapter, SDK lock, and hook live in each engine package. The root `tool/native.dart`
uses the shared Flax SDK preparation path and runs native tests.

## Archive validation

All Dart packages retain `publish_to: none`, and all npm packages retain
`private: true`. The repository does not publish, reserve registry names, select a
license, create tags, or upload artifacts.

`packages:check` copies packages into a system temporary directory. Only those copies
remove workspace and publication blockers. It runs Dart publish-content validation and
npm pack inspection, rejects source/tests/build/cache leakage, and validates package
dependencies without modifying repository manifests. Metadata capabilities select the
checks: binding archives need a manifest, host plugins need their generated host script,
core needs the ABI header and implementation, and engine archives need their hook,
adapter source, SDK lock, and consolidated notices.

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
sequence on Ubuntu via reusable `.github/workflows/packages.yml`, called once by the
main workflow with a shared preparation artifact. Its manual entry remains available.

Pub archives include Dart implementation, generated bindings, required embedded host
scripts, Flax ABI source, and engine adapter sources with CMake and SDK locks. They
exclude prebuilt dylibs, JavaScript source, binding selection YAML, tests, examples,
engine source downloads, and detailed notice trees. Engine packages retain a root
`THIRD_PARTY_NOTICES.txt`. npm archives contain only files reachable from their exports,
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
dart run melos run check:aggregate
dart run melos run check:ui
dart run melos run check:ui:v8
```

For daily package work, use `dart run tool/package.dart check NAME` and add
`integration NAME --engine=hermes|v8` only when real UI behavior is needed.
`check:aggregate` verifies the minimal cross-module application. `check:ui` runs every
UI owner's original assertions in one entry, examples and the aggregate once each.
Ordinary `check` never fetches or builds an engine; UI commands use the locked macOS
arm64 SDK and run serially because they drive desktop apps.
