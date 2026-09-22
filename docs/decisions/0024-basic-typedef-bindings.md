# 0024: Basic Typedef Bindings

Status: accepted; generic aliases and the manifest schema are amended by
[ADR 0025](0025-generic-typedef-bindings.md).

## Context

Supported callback and collection signatures also need standalone TypeScript names.
Exported aliases must preserve their originating declarations and directional
conversions without claiming a new runtime identity for the target.

## Decision and rationale

The optional format-1 `typedefs` selection exports both `Name` and `NameInput`. Alias
chains resolve to already-supported targets. Callback variance and collection reference
versus input representations remain those of the existing conversion contract. Origins
use canonical declaration URIs; generation imports the public library exposing them.

Aliases have no nominal owner row, wire ID, runtime constructor or independent
registration. Their nominal targets still require canonical providers. Consumers reuse
an imported provider and diagnose missing members rather than duplicating its
declaration or expanding its published surface.

This decision introduced basic aliases in Manifest 3. ADR 0025 adds generic alias
parameters. [ADR 0026](0026-top-level-readonly-bindings.md) introduced Manifest 5;
[ADR 0027](0027-public-library-module-delivery.md) introduced Manifest 6, and
[ADR 0029](0029-native-widget-interface-members.md) defines the current Manifest 8
writer with strict 2/3/4/5/6/7/8 readers while preserving those alias semantics. The old
basic-only limitation is superseded; the type-only identity and ownership rationale
remain. Configuration format 1, UI protocol 20 and native ABI 2 are unchanged.

## Consequences

Authors regenerate outputs when changing alias exports. Unsupported targets and name
collisions fail explicitly. TypeScript relationships do not require a runtime wrapper or
exact Dart inference. See
[Binding Generation](../architecture/bindings.md#standalone-typedefs) for current rules
and [compatibility](../architecture/external-binding-compatibility.md) for validation
and migration limits.
