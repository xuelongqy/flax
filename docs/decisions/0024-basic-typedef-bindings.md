# ADR 0024: Basic Typedef Bindings

Status: accepted; generic alias semantics are extended by
[ADR 0025](0025-generic-typedef-bindings.md).

## Context

Supported callback and collection signatures need standalone TypeScript names. Exported
aliases must preserve their originating declarations and directional conversions without
claiming a new runtime identity for the target.

## Decision

The format-2 `typedefs` selection exports both `Name` and `NameInput`. Alias chains
resolve to already-supported targets. Callback variance and collection reference versus
input representations remain those of the existing conversion contract. Origins use
canonical declaration URIs; generation imports a public library exposing them.

Aliases have no nominal owner row, wire ID, runtime constructor or independent
registration. Their nominal targets still require canonical providers. Manifest 12
preserves alias origin, target and dependency identity. Consumers reuse imported
providers and cannot widen their published surface.

## Consequences

Unsupported targets and name collisions fail explicitly. TypeScript relationships do not
require a runtime wrapper or exact Dart inference. See
[Binding Generation](../architecture/bindings.md#standalone-typedefs) and
[External Binding Verification](../architecture/external-binding-verification.md).
