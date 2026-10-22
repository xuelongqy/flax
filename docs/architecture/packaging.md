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

| Package                                              | Owned capability                                                                                                      |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `flax` / `@flax/core-runtime`                        | Runtime interfaces, host base, supported Flutter SDK binding implementations, signals, sessions, and shared C ABI/JSI |
| `flax_flutter` / `@flax/flutter`                     | Declaration-only public Flutter library surface (`foundation`, `widgets`, and related framework paths)                |
| `flax_dart` / `@flax/dart`                           | Declaration-only public Dart SDK library surface (`core`, `async`)                                                    |
| `flax_material_ui` / `@flax/material-ui-runtime`     | Third-party material_ui binding delivery and native Route/Page bindings                                               |
| `flax_cupertino_ui` / `@flax/cupertino-ui-runtime`   | Third-party cupertino_ui bindings, module plugin, and package-local example                                           |
| `flax_fetch` / `@flax/fetch-runtime`                 | Fetch session plugin                                                                                                  |
| `flax_websocket` / `@flax/websocket-runtime`         | WebSocket session plugin                                                                                              |
| `flax_local_storage` / `@flax/local-storage-runtime` | Persistent localStorage session plugin                                                                                |
| `flax_canvas` / `@flax/canvas-runtime`               | Canvas host plugin and CanvasView binding                                                                             |
| `flax_engine_hermes`                                 | Hermes adapter, locked shared SDK, and engine tests                                                                   |
| `flax_engine_v8`                                     | Experimental V8 adapter, locked shared SDK, and engine tests                                                          |
| `flax_native_assets`                                 | Build-only owner of shared Android C++ and Windows CRT native assets                                                  |
| `flax_build` / `@flax/build`                         | Node build tooling: shared TS generic compilation, host assets, esbuild/Vite and HMR                                  |
| `flax_annotations`                                   | Pure Dart FlaxExport scope and FlaxIgnore markers; no Flutter or analyzer dependency                                  |
| `flax_codegen`                                       | Analyzer model, manifest format, and Dart/TypeScript emitters                                                         |
| `flax_cli`                                           | Optional host project initialization and legacy Builder configuration helper                                          |
| `flax_test`                                          | Development-only engine-neutral runtime contracts and shared test harnesses                                           |

`flax_test` is not a published product API. `@flax/build` is a developer-facing Node
package with typed root, `./esbuild` and `./vite` exports and the
`flax-modules`/`flax-dev` commands. It has no Dart plugin, module-delivery descriptor or
Session registration and is excluded from runtime npm inventories. Source and
declaration packages keep their existing ownership. Apps install the build package as a
development dependency; no compiler/Vite code is delivered to the device. See its
[compiler and HMR contract](../../packages/flax_build/js/README.md).

## Ecosystem metadata

Published Flax capability packages commit `flax_package.yaml`. Annotation-only hosts may
omit it and use pubspec.flax for optional settings; an existing metadata file takes
precedence. Format 2 describes the Dart entry point, an optional npm peer, capabilities,
and public registration symbols. Packages whose `capabilities` include `bindings` also
carry a top-level `bindingNamespace` (see
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

This producer-side pairing does not require a miniapp's SDK declaration version to equal
the host runtime version. Compatible public APIs can span releases, including when the
host keeps its implementation private and publishes declarations only.

## JavaScript packages and public library specifiers

Application code imports Flutter and Dart APIs by their public library specifier:

```typescript
import { signal, computed, bind, batch } from '@flax/core';
import { Text, Column, StatefulWidget, runApp } from '@flax/flutter/widgets';
import { TextButton } from '@flax/material-ui';
import { Duration } from '@flax/dart/core';
import { FlaxNavigatorObserver } from '@flax/core/navigation';
import type { DartList, DartMap } from '@flax/core/bindings';
import type {} from '@flax/core/host';
```

The public path is independent of the physical npm package that owns the JavaScript
implementation. `@flax/flutter` and `@flax/dart` are declaration-only packages and are
the authoritative TypeScript surface. Core physically delivers the supported Flutter SDK
bindings under `@flax/flutter/*` and Dart SDK bindings under `@flax/dart/*`. The
independent `material_ui` and `cupertino_ui` plugins own the supported complete public
UI surfaces at `@flax/material-ui` and `@flax/cupertino-ui`. Core does not generate,
register or deliver native Flutter Material/Cupertino bindings. The old
`@flax/flutter/material` and `@flax/flutter/cupertino` specifiers are unavailable; they
are not aliases for the standalone Dart classes. This removes binding code, not
Flutter's native Dart libraries or their use by host applications and compatibility
bridges. `@flax/core/navigation` remains a Core-owned public implementation entry.

Standalone UI host delivery uses the same `dist/index.js` public source entry as Node
consumers. Generated library directories remain the roots for public subpaths and
binding helpers; package-level reexports must be visible in both environments.

Migrate application imports to the standalone UI specifiers and install their host
plugins, then regenerate prepared assets. `asDart` changes the registered view of a real
Dart value; it does not convert Flutter's `ThemeData` into `material_ui.ThemeData`.
Those are different Dart classes. The upstream compatibility widgets can adapt themes
for mixed native subtrees without restoring a Core UI binding dependency.

Host capabilities have separate public declarations and runtime delivery. `@flax/core`,
`@flax/fetch`, `@flax/websocket`, `@flax/local-storage`, and `@flax/canvas` contain only
TypeScript declarations; their implementations use the corresponding `-runtime` npm
names. Flutter and Dart declarations remain `@flax/flutter` and `@flax/dart`. The
independent Material/Cupertino plugins follow the same split: declarations use
`@flax/material-ui`/`@flax/cupertino-ui`, and source uses the corresponding `-runtime`
packages. `javascript.package` identifies source delivery; `javascript.types` identifies
the declaration package in metadata format 2.

The Flutter host prepares locked source packages as application assets. Business code
uses only plugin-injected modules; missing prepared modules fail during bundling or
session startup. Installing a source npm package does not activate its Dart plugin.
Prepared inventories list concrete public subpaths alongside their owning module;
business builds accept only these paths and exact module entries. Private helpers stay
inside prepared factories, and a parent module cannot satisfy a missing child entry.

Source remains separated under `packages/flax/js/src/runtime`, `flutter`, `dart`,
`host`, and generated directories. Optional packages import only the public subpaths
they need. The removed `@flax/core/flutter` public entry has no compatibility reexport.

The pnpm workspace discovers `packages/*/js`, `packages/*/js-types`,
`packages/*/example/js`, and `examples/*/js`. Each JavaScript package has separate npm
and embedded-host checks. `tsconfig.npm.json` includes only public module entries. The
workspace JS build projects all public declarations once, then builds source packages
and examples. A declaration package's standalone build still runs the shared projection
tool. `tsconfig.host.json` checks `src/host/bootstrap.ts` and its private implementation
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
reader accept Manifest **28** only; format 27 is rejected. The manifest carries the
current cross-package semantic model: declaration ownership, stable identities, JS
exports, recursive types, generic scopes, selected members, public-library routing,
State variants, conversion semantics, and each module's UI protocol and required
capabilities. It does not copy selection YAML into dependent packages. Unknown formats
fail before generation; there is no compatibility reader or normalization path. See
[ADR 0037](../decisions/0037-package-scoped-binding-providers.md) and
[External Binding Verification](external-binding-verification.md).

The canonical file stores repeated recursive types in `typeTable` and identical member
descriptions in `memberTable`, using `{"$type": index}` and `{"$member": index}`
references. Every member row retains its defaults, conversion policy and generic
declarations. These tables encode the same semantic model. Dart expands them before
strict semantic validation with fresh lexical scopes. JavaScript delivery expands member
references for ownership and operation projection without expanding types. Both readers
bound member expansion and reject invalid, cyclic, duplicate or unused table entries.
Generated JS APIs, UI protocol 24 and native ABI 2 are independent of this file format.

Manifest 28 adds the sparse `localDependency: true` ownership marker for generated
owner-local dependency views. The writer omits it for ordinary rows; absence means
false, and true is valid only on an owning identity. The original Dart source identity
remains recorded, but these owner-local views are not eligible as automatic providers
for another package. Regenerate providers and consumers together.

A configuration imports a Dart package by name:

```yaml
imports: [flax]
```

`flax_codegen` resolves that package through Dart package config and reads its manifest.
It parses only the current package's selection YAML. Missing imports, dependency cycles,
manifest-format mismatches, and UI protocol mismatches fail before output is emitted.
Generation follows the dependency graph and never reads another package's tests or
private Dart sources.

### Binding dependency policy

The same four rules apply to configured scopes and automatic library selection:

| Rule                | Selection and ownership                                                                                                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default-source`    | Generate selected declarations from the configured source Dart packages, using the existing same-package/sibling ownership index. A binding package can target a different source Dart package. |
| `provider`          | Reuse Core or a compatible provider declared by matching direct Dart and public JS types dependencies. Keep its identity and existing implementation.                                           |
| `owner-local-optin` | With no declared provider, allow signature-required external types only for Dart packages listed in `bindingDependencies.generate`; their generated views belong to the consumer owner.         |
| `skip`              | Without a binding or opt-in, skip the affected constructor, method, function or accessor and report the unresolved dependency. Existing exclusions and conversion limits still apply.           |

The Flax Core manifest is implicit for binding packages depending on Dart `flax`, and
Core bindings are always injected. They cannot be duplicated, including through the
opt-in list. Non-Core namespaces may bind the same selected Dart source independently;
full identities must remain unique within one namespace. A declared provider with
insufficient capabilities or ambiguous ownership is reported, not silently replaced.

Generated Dart imports also need direct source-package dependencies, even when their JS
view comes from Core or another provider. For example, the UI bindings declare
`vector_math`, and Material declares `cupertino_ui` for its actual Dart signatures.
These imports do not create another JS binding or change provider identity.

The opt-in is package metadata, not an instruction to generate an entire dependency:

```yaml
# flax_package.yaml
bindingDependencies:
  generate: [intl]
```

```yaml
# pubspec.yaml
dependencies:
  flax: 0.0.0
  intl: <version>
```

Names must identify direct external Dart dependencies, not the binding owner or `flax`.
With no list, no external owner-local generation is allowed. Only the types needed by
accepted signatures and their supported dependency closure are generated; member
selection and blacklists are unchanged. Optional parameters do not bypass this rule: if
an unbound external type appears in a signature, that whole signature is skipped rather
than removing the parameter or changing its defaults. Nested collections, callbacks and
async values follow the same rule.

Provider reuse needs all delivery counterparts, not just a `.d.ts` package. For Material
reusing standalone Cupertino, declare:

| Consumer file                            | Required dependency                                                             |
| ---------------------------------------- | ------------------------------------------------------------------------------- |
| `packages/flax_material_ui/pubspec.yaml` | `flax_cupertino_ui: 0.0.0`                                                      |
| Material `js-types/package.json`         | `@flax/cupertino-ui: workspace:*`                                               |
| Material `js/package.json`               | Both `@flax/cupertino-ui` and `@flax/cupertino-ui-runtime`, using `workspace:*` |

The public JS types name comes from provider metadata `javascript.types`, falling back
to `javascript.package` when no separate types package is declared. The physical runtime
name comes from `javascript.package`; it is required in the consumer source package's
dependencies. Dart implementation wiring uses each provider module's Manifest
`dartLibrary`, derived from its generated `lib/` path as a `package:` URI. For example,
`lib/src/generated/cupertino_bindings.g.dart` in `flax_cupertino_ui` maps to
`package:flax_cupertino_ui/src/generated/cupertino_bindings.g.dart`. This generated
bridge import may use `lib/src`; it does not require the provider's public Dart entry
point to re-export its generated binding module. Selection still reads the provider
Manifest rather than analyzing its private Dart API or reading its selection YAML.

The generator validates provider types dependencies in the source and declaration
packages separately. A dependency declared in only one package cannot satisfy the other
package's published imports, even if a workspace installation can resolve it.

An owner opting into an external dependency uses an owner-qualified public subpath, for
example `@example/ui/dependencies/intl`:

| Delivery artifact            | Path inside its package                        |
| ---------------------------- | ---------------------------------------------- |
| Generated JS source          | `js/src/generated/dependencies/intl/index.ts`  |
| Runtime implementation       | `dist/generated/dependencies/intl/index.js`    |
| Public declarations          | `types/generated/dependencies/intl/index.d.ts` |
| Runtime package declarations | `dist/generated/dependencies/intl/index.d.ts`  |

Both types and runtime packages expose a specific types-only `./dependencies/*` export
before the general `./*` export. The public types target is an array:

```json
{
  "./dependencies/*": {
    "types": [
      "./types/generated/dependencies/*.d.ts",
      "./types/generated/dependencies/*/index.d.ts"
    ]
  }
}
```

The runtime package uses the corresponding two `./dist/generated/dependencies/` targets.
The direct `.d.ts` candidate resolves nested generated helpers such as
`dependencies/intl/_bindings/dependency_intl.__module`; the `index.d.ts` fallback
resolves the dependency root. Owner source builds mirror this with
`./src/generated/dependencies/*` and `./src/generated/dependencies/*/index.ts`. These
are resolution candidates for the same public specifiers, not new API aliases. Business
source continues to import the public facade; generated type-helper resolution does not
expose private runtime chunks through the application bundler.

The delivery inventory maps the public subpath to the owning runtime package's
implementation and uses `dist/generated/dependencies/intl` as its `subpathRoot`; it does
not inline another package's runtime. Independent owner-local views never become shared
provider identities. To request another registered view of the same underlying Dart
object, use the existing shared `asDart(value, Target)`: it selects the exact target
view after actual Dart and generic type checks, without copying the object or adding a
new GC ownership scheme.

The shipped Material and Cupertino bindings do not opt into Intl. Their Global
localization delegate access and ordinary localization queries remain available;
formatter-taking Global constructors are skipped by the normal unresolved-dependency
rule. Upstream Dart localization packages still depend on Intl internally. An Intl
binding package may be added separately in the future; none is currently shipped.

An inherited provider member retains its exact owner-local view in the descendant's
signature. Resolution is per operation: two different methods, or a getter and setter,
can use independent views of the same Dart type. The nearest ancestor contract wins;
conflicting views for one operation are rejected. These inherited contracts never make
the local views available to unrelated declarations.

Generated dependency wiring supplies binding modules and follows prepared JS delivery
dependencies. It never automatically constructs or activates a host-capability plugin;
Fetch, storage and other host capabilities still require their explicit host setup.

Object inputs are checked against actual Dart types and concrete generic arguments.
Typed results expose the interface selected by the signature. Erased results retain the
originating package context through callbacks, Futures and lazy collections/Streams.
Selected enum constants retain their enum value identity instead of becoming broad
Object/Enum views. For ordinary object candidates, Core has priority, then the
originating package and its dependencies. Equal-priority ambiguity is rejected instead
of depending on registration order. Alias views share one Dart object, disposal and
listener ownership.

## Application module inventory and host delivery

A package without scope YAML uses one app binding with conventional paths; the CLI's
package commands and optional Builder share these defaults. Annotation scope files only
need fields that override them. Each generated Dart adapter exports <name>Plugin for
explicit FlaxView injection. Package metadata still owns a stable namespace. Application
binding owners can use several sibling `bindings/flax_*.yaml` scopes with distinct names
and output paths. Generation plans them together, retaining one local owner per Dart
declaration. Shared types belong in one scope or an existing provider. When a scope
omits `jsPackage`, its entry is `<public-package>/<name>`. The public package comes from
`javascript.types`, then `javascript.package`, then `@flax/app`; an explicit scope entry
takes precedence. Regeneration updates generated references, while application imports
and plugin/module selections must use the resulting names. Each View selects its
business scopes through explicit plugins: `bindingModules` contributes native bindings
and `jsModules` selects prepared JS entries. Local sibling native modules must be listed
explicitly where needed. Selected JS module dependencies are included transitively;
splitting YAML alone does not restrict a View's API.

After generation, applications own ordinary npm package manifests and TypeScript build
scripts. Public SDK and internal bindings can use separate source/output directories and
separate plugins in the same Dart application. A host-provided SDK publishes
declarations only, using explicit exports and file allowlists. Its JS binding runtime
stays private and uses a local host dependency, as do internal bindings. Additional JS
wrappers may ship as ordinary JS packages. Packaging follows the selected modules and
their dependency closure; public declarations cannot depend on unpublished internal
scopes. `bindingModuleRequirements` from `@flax/build` reads generated Manifest
requirements for a project's delivery metadata; it does not compile or publish packages.
See the
[npm binding contract](../../packages/flax_build/js/README.md#binding-npm-packages) and
[outside-workspace verification](../../examples/configured_bindings/README.md).

Implementation delivery uses a versioned `flax_modules.json`, separate from the Binding
Manifest. It records public specifiers, the physical npm package and source entry,
delivery dependencies, and the Dart binding requirements needed if that module is
actually injected into a session. `tool/module_delivery.mjs` derives official delivery
metadata from Manifest 28 rather than duplicating binding ownership by hand.

An application prepares the modules it can provide, for example:

```json
{
  "formatVersion": 1,
  "modules": [
    { "specifier": "@flax/core", "package": "@flax/core-runtime" },
    { "specifier": "@flax/core/host", "package": "@flax/core-runtime" },
    { "specifier": "@flax/core/navigation", "package": "@flax/core-runtime" },
    { "specifier": "@flax/flutter/widgets", "package": "@flax/core-runtime" },
    { "specifier": "@flax/material-ui", "package": "@flax/material-ui-runtime" }
  ],
  "flutterProject": "..",
  "output": "assets/flax_modules"
}
```

`@flax/build` resolves the locked npm implementations, follows declared delivery
dependencies, emits Flax-loadable factories into the Flutter assets directory, and
checks that the asset path is declared. The resulting manifest is an application
capability inventory, not a per-session injection list. The Flutter application loads it
once as immutable `FlaxModuleAssets` and assigns it to `Flax.moduleAssets` before
constructing sessions. Sessions snapshot that value; the prepared source may be reused
across sessions without sharing JavaScript module instances or Dart references.

Prepared scripts lazily encode immutable UTF-8 source and URL bytes at first use, then
release their source Strings. Loading still respects custom AssetBundle `loadString`
overrides; scripts use `cache: false` to avoid retaining a second copy in the bundle's
String cache. Each Session still executes the scripts in its own runtime. Successful
Dart requirement checks are memoized weakly by binding-registry identity, separately for
each selected module; requesting an additional module still checks its requirements.
This reuses encoding and declaration validation, not compiled JavaScript, module
exports, callbacks or application state.

Each `FlaxPlugin` declares the public modules it needs through `jsModules`. `FlaxView`
passes its plugin snapshot to the session, which selects only requested modules present
in `Flax.moduleAssets`, follows their delivery dependency closure, validates the Dart
binding requirements for that selected set, and registers only those factories. The base
host requests Core, host declarations, navigation and the Core Flutter module
implicitly. Prepared Flutter/Dart SDK modules are also available without a plugin.
`FlaxMaterialPlugin` requests the independent `@flax/material-ui` module. Optional
inventory modules outside the selected dependency closure are not registered or
binding-validated. Registered factories, including SDK factories, are evaluated only
when imported.

Missing requested modules fail session startup before business source executes. The
business bundler externalizes prepared imports to the session registry and rejects
unprepared Flax implementation imports, including private implementation paths. Direct
imports, transitive imports and reexports share one session-local instance. Unselected
optional inventory modules remain inactive. Wire IDs remain independent of npm paths.

Business bundles select public modules by specifier, without requiring the same npm
version or artifact hash as their build-time inventory. Legacy imports that pass
version/hash arguments follow the same rule. Compatible host upgrades can run unchanged
old bundles and declarations; providers remain responsible for preserving API signatures
and behavior. Version equality alone does not establish compatibility. Host factory
registration and sealing still strictly match the current inventory's owners, versions,
hashes and dependency graph, and Dart binding protocol/capability checks remain
required.

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

Core retains the canonical ABI 2 and internal GC extension 1 headers and generated Dart
declarations. The executable C++ bridge, V8 adapter, exact-revision Dart patch, SDK
verification and library packaging are owned by the maintained Flutter fork. See
[ADR 0039](../decisions/0039-engine-owned-cross-heap-gc.md) and
[runtime ownership](runtime.md). `FlaxEngine.createRuntime()` loads the macOS process
exports on macOS/iOS or Android's `libflutter.so` and checks its exact capabilities
before allocation.

Engine packages are compatibility factories. They have no native asset hooks and do not
ship or build a second runtime. Existing SDK locks and notices are preserved;
`flax_js_runtime` remains an internal source/build input. Platform policy is iOS Hermes
and other native V8 JIT. macOS, Android arm64 and iOS arm64 have this integration. iOS
supports simulator debug and physical-device release/AOT. Both frameworks contain one
static Hermes interpreter closure. The device gate requires real development signing and
provisioning, verifies the AOT snapshot and packaged engine content, and runs after
source removal. Distribution signing and Hermes GC/frame performance remain separate.

`check:runtime` runs shared contracts in the local Flutter engine. The real application
gate covers debug, profile and release/AOT. Its release artifact contains exactly one V8
dependency closure inside FlutterMacOS.framework, retains allow-jit and hardened runtime
signing, and runs after its temporary source tree is removed. Independent Dart JIT/AOT
hosts and the former two-engine deployment are retired.

Android packages the verified V8 and shared libc++ libraries in the existing Flutter
engine JAR. The application gate builds an arm64-only APK, audits every native library's
dependency closure and 16 KB alignment, preserves SDK bytes, verifies the APK signature,
and installs the relocated APK after removing its source. Release adds Dart's AOT
`libapp.so`. The same audited APKs pass on the API 37 emulator with 16 KB pages and a
Pixel 4 running Android 13 with 4 KB pages. Performance and distribution validation
remain separate from this correctness acceptance.

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
public `flax` APIs; internal native counters are used only by GC acceptance tests. HTTP
servers, persistence fixtures, Canvas helpers, and other domain-specific support remain
with their feature package. Runtime contracts cover Context isolation, reentry,
ownership and automatic joint GC.

Every implemented runtime package has a package-local macOS example. It demonstrates
that package, core, and the selected engine. The top-level
[embedded](../../examples/embedded/README.md) and
[standalone](../../examples/standalone/README.md) applications are aggregate consumers;
they do not own framework contract tests.

The generic package commands are:

```sh
dart run tool/package.dart check flax_fetch
dart run tool/package.dart integration flax_fetch --engine=v8
```

Discovery follows directory conventions. Adding a conforming package does not require a
new package-name array in the root tools.

The core FFI selection lives at `packages/flax/native/ffigen.yaml`. Rebuild the Flutter
engine through its `engine/src/flutter/flax/tools/build_engine.py`; the old
`tool/native.dart` standalone bridge command fails explicitly.

## Archive validation

All Dart packages retain `publish_to: none`, and all npm packages retain
`private: true`. The repository does not publish, reserve registry names, select a
license, create tags, or upload artifacts.

`packages:check` copies packages into a system temporary directory. Only those copies
remove workspace and publication blockers. It runs Dart publish-content validation and
npm pack inspection, rejects source/tests/build/cache leakage, and validates package
dependencies without modifying repository manifests. Metadata capabilities select the
checks: binding archives need a manifest, host plugins need their generated host script,
core needs its ABI and GC headers but excludes native implementation sources; engine
archives retain factories, SDK locks and notices and reject obsolete asset hooks.

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

Types-only SDK packages mark package.json with flax.hostBindings: true. Business esbuild
builds derive public host module names from the installed npm exports without a host
inventory. Runtime assets and native binding admission stay in the host and selected
View plugins. Host-owned SDKs may keep generated source and declarations in one npm
project with a declarations-only files allowlist. Existing provider runtime delivery
remains supported. Optional typesSdk package metadata selects the npm name and public
scopes; the normal JS build prepares editable npm setup and a declaration-only TS base
while preserving custom policy. Flax CLI owns optional project initialization. Default
annotation scopes use a fixed Builder graph and need neither init nor sync. Builder and
CLI still share generated binding outputs; setup files remain outside the Builder output
graph. See [ADR 0050](../decisions/0050-independent-binding-sdks-and-project-setup.md).
