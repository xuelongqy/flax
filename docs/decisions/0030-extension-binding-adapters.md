# 0030: Extension binding adapters and Manifest 9

Status: accepted; amended by [ADR 0031](0031-mutable-top-level-bindings.md) for the
current Manifest writer and top-level access contract.

## Decision

Explicit `extensions` selections bind public named Dart extensions as static TypeScript
namespaces. Instance operations take a receiver first; getters and setters use `getX`
and `setX`, while methods retain their names. Static members omit the receiver.
Operators have fixed ordinary method names. Dart forbids extensions from declaring
Object members, including `==`; these selections fail instead of synthesizing equality.

Generated Dart always invokes a named extension override, including erased extension and
method type arguments. TypeScript preserves generic relationships and receiver
constraints. Existing upper-bound erasure and Dart use-site checks apply. Generic
extensions that require a concrete Dart type specialization, such as recursive receiver
bounds that cannot be safely erased, are unsupported and fail closed. The configuration
does not enumerate concrete extension specializations, and automatic specialization is
not part of the contract. Implicit Dart extension resolution, prototype mutation and
additional runtime type tokens are also outside this contract.

An extension has declaration source metadata but no object wire ID, constructor or
session lifetime. Each member has a function operation ID derived from the canonical
source declaration plus member kind and name. Operations reuse `FlaxFunctionBinding` and
existing recursive value conversion. No native entry point is added.

Manifest 9 adds extension declarations, receivers, generic scopes, selected operation
signatures and provider references. Strict readers accept formats 2 through 9 under
their original closed schemas. Configuration format 1, UI protocol 20, native ABI 2 and
existing declaration wire IDs are unchanged. This amends ADR 0029's writer version.

## Ownership and scope

Public libraries route to one implementation. A downstream selection may reuse a
provider's published members and exact signatures, but cannot widen its surface.
Provider references emit aliases to its public JS adapter and do not register again.
Extensions on provider objects reuse the provider's nominal types.

Anonymous/private extensions, extension types, unsupported receiver conversions and
Widget/lifecycle semantic positions remain rejected. Mutable top-level declarations and
full-library discovery are separate work.

## Evidence

The generator's extension fixture compiles strict TypeScript, round-trips generic
metadata and executes generated Dart adapters. The package pipeline fixture exercises
public re-exports, provider types, function ownership and transitive manifest-only
consumption. Repository checks cover unchanged generation and version compatibility;
these tests do not certify additional native platforms or full SDK coverage.
