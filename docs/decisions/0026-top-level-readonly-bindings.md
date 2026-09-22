# 0026: Top-level readonly bindings and Manifest 5

Status: accepted; amended by [ADR 0027](0027-public-library-module-delivery.md)

## Context

Explicit top-level functions and class static getters already share typed conversion and
session cleanup. Public Dart constants, final variables and getters need an equally
explicit export surface without eagerly evaluating values or inventing Dart classes.
Manifest 4 has a closed declaration schema and cannot represent those exports safely.

## Decision

Add optional `topLevel: {jsName: Values, getters: [name]}` to configuration format 1.
Select public `const`, `final`, `late final` and explicit getters without setters.
Reject writable declarations, invalid or conflicting exports, unsupported conversions
and special Flutter ownership. Normalize reexports and synthetic getters to the actual
originating declaration.

Generate one typed JavaScript namespace with readonly, enumerable, nonconfigurable
accessors and no setters. Import and installation evaluate no selected values. Each
access performs one uncached Dart read using `FlaxFunctionBinding` and `invokeTopLevel`.
Dart controls initialization, changing results and exceptions. Readonly is shallow:
returned values retain the existing reference, mutation, callback, generic and async
contracts. There are no implicit subscriptions, cross-session caches or additional
native entry points. Applications retain ownership of their objects.

Write Manifest 5; read strict 2/3/4/5. Version 5 adds optional `model.topLevel`,
containing `jsName` and getter declarations with ID, name, return type, declaration kind
and optional `isReference`. Source kind `readonly` uses wire kind `read`, producing
`<bindingNamespace>/<module>#read:<name>`. Existing IDs remain unchanged. Versions 2/3/4
retain their closed schemas and reject the new fields and identities; their existing
alias restrictions remain in force.

Each declaration has one owner. Reexported provider reads forward through that owner's
public JS namespace and are not registered again. A consumer may choose its local
namespace but cannot alter the provider's name, kind or return signature. Dependency
projection preserves these semantics using public libraries and manifests without
provider YAML or private implementation imports.

Configuration format 1, package metadata format 1, UI protocol 20 and native ABI 2
remain unchanged. This amends the manifest domain in
[ADR 0021](0021-external-binding-version-domains.md) and the writer introduced by
[ADR 0025](0025-generic-typedef-bindings.md).

## Consequences

Authors must upgrade Codegen and regenerate outputs to publish readonly declarations;
older generators cannot consume Manifest 5. Reading old manifests does not enable
unselected APIs or older runtime protocols. Unsupported types, mutable setters, full
discovery and dependency closure remain separate work.

The generated `Values` namespaces described above remain the Manifest 5 historical
contract. Current public exports use library-level names and `getX()` accessors under
[ADR 0027](0027-public-library-module-delivery.md), with Manifest 6 carrying that
routing. Independent fixtures cover final/late-final timing, changing and throwing
getters, reference identity, callbacks, Futures and session retirement. See
[generation rules](../architecture/bindings.md#public-libraries-and-top-level-readonly-declarations),
[coverage](../architecture/binding-coverage-map.md) and
[compatibility evidence](../architecture/external-binding-compatibility.md).
