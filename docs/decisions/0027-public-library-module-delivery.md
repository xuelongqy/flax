# 0027: Public library routing and module delivery

Status: accepted

## Context

The initial binding packages exposed broad package-level JavaScript entries such as
`@flax/core/flutter` and `@flax/material-ui`. Top-level readonly declarations were also
grouped into generated `Values` namespaces. That shape did not match Dart and Flutter
library boundaries, and it coupled the public import path to the npm package that
physically carried an implementation.

Applications also need two delivery modes. A host may inject selected binding modules
that are already compiled into the Flutter application, while business JavaScript may
bundle other modules itself. Both modes must preserve one declaration owner, one runtime
module instance and stable wire identities.

## Decision

Public Flutter and Dart SDK bindings follow public library boundaries. Flutter entries
use `@flax/flutter/*`, Dart SDK entries use `@flax/dart/*`, and Flax-owned navigation
uses `@flax/core/navigation`. A declaration may be reexported by multiple public
libraries, but its owner, registration and wire identity remain unique.

Declaration packages are separate from physical implementation packages. `@flax/flutter`
and `@flax/dart` provide the authoritative TypeScript declaration surface. Physical
packages such as `@flax/core` and `@flax/material-ui` may carry the generated JavaScript
implementations selected by an application. Public specifiers do not imply the physical
npm package that supplies their implementation.

Binding configuration format 1 adds `publicLibraries` routing. Generation emits one
public facade per selected library and shared internal binding implementation. Imported
providers are reused through their Manifest ownership; public reexports never create a
second owner or registration.

Top-level readonly declarations are exported directly from their public library module.
Build-independent primitive `const` values may be emitted as direct literals. Dynamic
values, Dart object references, `final`, `late final` and getters are exported as
`getX()` functions and perform an uncached Dart read when called. Build-dependent values
such as `kIsWeb` must reflect the compiled Dart application and therefore remain runtime
reads. Mutable top-level variables and setters are outside this decision.

Applications declare the public modules they are capable of providing in a versioned
module inventory. Preparation tooling resolves locked physical npm packages, copies the
declared runtime artifacts and their delivery dependencies into Flutter assets, and
emits the prepared module manifest. The application preloads that immutable inventory as
`Flax.moduleAssets`.

Actual injection is session-scoped and follows the `FlaxView` / `FlaxSession` plugin
snapshot. Each plugin declares required public modules through `FlaxPlugin.jsModules`.
The session selects requested modules that exist in the application inventory, closes
over their delivery dependencies, validates Dart binding requirements only for that
selected set, and registers only those factories. The base host requests its Core module
implicitly; Material uses `FlaxMaterialPlugin`. Unrequested inventory modules are not
evaluated or registered and do not impose binding requirements.

If a requested module is absent from the application inventory, host startup does not
fail solely for that absence; business JavaScript may bundle the implementation instead.
The business bundler reads the same application inventory: modules present there are
externalized to the host registry, while modules absent there are resolved from physical
implementation packages. A session executing source that externalizes an inventory
module must therefore include the plugin that requests that module. The module delivery
manifest is separate from the Binding Manifest because delivery location, session
selection and binding identity are different concerns.

Wire IDs remain stable and independent of public specifiers, npm package names and
delivery mode. Stateful shared runtime modules such as `@flax/core/bindings` remain
singletons within a runtime.

The Binding Manifest writer advances to version 6, with strict readers for versions
2/3/4/5/6. Version 6 records `publicLibraries` and the current named top-level export
routing. Version 5 remains readable as the historical readonly-namespace format;
versions 2 through 4 retain their existing restrictions. Existing declaration wire IDs
do not change solely because their public library path changes.

The former public `@flax/core/flutter` entry, direct application imports from
`@flax/material-ui`, `FlutterValues` and `MaterialValues` are removed without a
compatibility forwarding layer. Physical `@flax/material-ui` remains a valid module
delivery package.

Configuration format 1, package metadata format 1, UI protocol 20 and native ABI 2 are
unchanged. This amends [ADR 0021](0021-external-binding-version-domains.md) and
[ADR 0026](0026-top-level-readonly-bindings.md).

## Consequences

Business source can mirror Dart and Flutter imports without knowing which physical npm
package supplies an implementation. An application can prepare a superset of module
implementations while each View injects only what its plugin set requests.
Declaration-only consumers typecheck against the same public surface. Bundled and
host-delivered paths retain one binding owner, and an injected public module has one
runtime instance per session.

Package authors must publish compatible declaration, implementation-delivery and module
inventory metadata when they support both delivery modes. Public-library routing does
not add automatic SDK discovery, dependency binding, mutable top-level setters, Records
or mixin composition.

See [binding generation](../architecture/bindings.md),
[package boundaries](../architecture/packaging.md), and
[external compatibility](../architecture/external-binding-compatibility.md).
