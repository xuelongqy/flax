# ADR 0037: Package-scoped binding providers and plugin delivery

Status: accepted

Date: 2026-10-05

## Context

A globally exclusive provider prevents independent plugins from adapting the same Dart
API. Dependency reuse should reduce duplicate implementations without imposing another
package's selected interface. Public TypeScript declarations also need to remain
independent of the runtime modules the Flutter application chooses to inject.

## Decision

Flax Core is the default provider and is injected into every session. Binding packages
depend on Dart `flax` and use its public declarations. Core-owned bindings cannot be
republished. Outside Core, ownership is local to the binding namespace: independent
packages may bind the same source declaration and use the same short module name.

Automatic selection reuses one adequate compatible dependency provider. Missing,
insufficient or ambiguous non-Core providers produce a complete local binding. Explicit
local selections remain local. Generation reads dependency manifests and public APIs,
never dependency selection files or private sources.

Object inputs validate actual Dart types and concrete generic arguments. Typed results
keep the signature's selected binding module. Concrete subtype views within that module
preserve native object identity; bindings from other modules cannot replace the selected
provider. Erased values retain their origin through callbacks, Futures and lazy
collections or Streams. Selection prioritizes Core, the originating package, then its
dependencies; unresolved ambiguity fails independently of registration order. Views
share the original object and lifecycle responsibilities.

Public npm packages contain declarations. Source delivery packages contain executable
modules and generated host bootstraps. Public imports stay stable; physical Core and
optional host packages use `-runtime` names. Material and Cupertino delivery names stay
unchanged, and `@flax/tools` remains executable tooling.

Business bundles consume only prepared plugin modules. Missing inventory entries and
private implementation imports fail closed. Installing a source package does not
activate a plugin. Each session registers only the requested delivery dependency
closure.

The current formats are package metadata 2, Binding Manifest 13, UI protocol 22 and
delivery/prepared manifest 2. Binding selection and module selection configuration stay
at format 2 and format 1 respectively. Native ABI 2 and engine SDK locks are unchanged.

## Alternatives

One global owner per source declaration minimizes duplicates but prevents independent
package adaptation. Always generating locally wastes code and bypasses Core contracts.
Inlining unavailable source modules hides missing host plugins and is rejected.

## Consequences

Dependencies become a reuse optimization outside Core, while full wire identities still
must be unique. Cross-package views cannot bypass type or disposal checks. The workspace
migrates current generated artifacts together; earlier formats are not normalized.
Structural, generated consumer and real double-engine UI checks remain distinct
evidence. See [package boundaries](../architecture/packaging.md),
[binding generation](../architecture/bindings.md) and
[external verification](../architecture/external-binding-verification.md).
