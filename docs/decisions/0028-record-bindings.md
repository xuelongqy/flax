# ADR 0028: Structural Record Bindings

Status: accepted.

## Context

Dart APIs can use Records directly, through typedefs and inside callbacks, collections
and asynchronous values. Object references would add identity and lifecycle semantics
that Records do not have; Maps would lose field shape and type information.

## Decision

Records are structural values. Positional fields keep source order and use `$1`, `$2`
and so on at the TypeScript boundary. Named fields are canonicalized by name after
positional fields. TypeScript emits a readonly object shape.

Both directions recursively use existing TypeRef conversion for nullable values,
generics, typedefs, callbacks, collections, async values and provider objects. Incoming
objects must contain every declared field; extra properties are ignored. Dart factories
reconstruct real Records, and conversion diagnostics retain the failing field path.

Records have no owner row, wire ID, runtime constructor or session reference identity.
Provider objects nested in fields retain normal ownership. Manifest 12 stores the full
field shape and nested identities.

## Consequences

Record support composes with the recursive TypeRef pipeline instead of adding
container-specific special cases. The runtime does not freeze JS objects or emulate Dart
Record equality, `hashCode` or `runtimeType`. See
[Binding Generation](../architecture/bindings.md) and the
[Binding Coverage Map](../architecture/binding-coverage-map.md).
