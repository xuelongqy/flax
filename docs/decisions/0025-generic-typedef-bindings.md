# 0025: Generic typedef bindings and Manifest 4

Status: accepted; the writer version is superseded by
[ADR 0026](0026-top-level-readonly-bindings.md). Generic alias semantics remain current.

## Context

Basic aliases could name existing callback and collection conversions, but generic
aliases and aliases with function-local parameters were rejected. Flutter's
`ValueChanged<T>` and `ValueGetter<T>` need these declarations. The existing generic
callback implementation already preserves lexical identity and validates concrete Dart
use sites without runtime type tokens.

## Decision

Keep configuration format 1 and the optional `typedefs` selection. Model alias-owned
parameters separately from function-local parameters. Preserve bounds, defaults,
nullability, substitution, capture and shadowing using existing generic declaration
identities. Emit `Name<T>` and directional `NameInput<T>` within already supported
binding targets. Explicit TypeScript type arguments are supported; identical Dart
inference is not a requirement.

Supported forms include `Mapper<T> = T Function(T)`, `Items<T> = List<T>`,
`GenericMapper = T Function<T>(T)` and `Converter<T> = T Function<U extends T>(U)`. Use
existing asynchronous and collection conversions. Incoming generic callbacks are real
Dart functions that check results against Dart's current parameter. Returned Dart
generic functions use bound erasure. Recursive, unbound and nonconvertible callback
bounds that would require concrete runtime specialization remain intentionally
unsupported and fail closed. Aliases introduce no runtime wrappers, constructors,
nominal owner rows, wire IDs, type tokens or compiler transformations.

This decision introduced Manifest `formatVersion: 4` and strict readers 2, 3 and 4.
Every version-4 alias entry requires `typeParameters`, including an empty array for a
basic alias. Validate older schemas before normalization: version 2 forbids aliases;
version 3 forbids alias parameters and generic alias targets. The current writer is
version 5, as amended by ADR 0026. Version 1 and unknown versions remain rejected. Scope
slots are reserved and validated with the existing codec; dependency projections and
identity rewriting retain scope identity. Ownership and TypeScript dependency discovery
visit alias bounds and defaults as well as targets. Consumers require only provider
manifests and public libraries, never provider YAML or private implementation sources.

Core selects and exports the real Flutter `ValueChanged<T>` and `ValueGetter<T>`.
Configuration format 1, UI protocol 20 and native ABI 2 remain unchanged. This amends
[ADR 0024](0024-basic-typedef-bindings.md) and the manifest domain in
[ADR 0021](0021-external-binding-version-domains.md).

## Consequences

Authors upgrade the generator and regenerate binding outputs before publishing new
aliases. Older generators cannot read version 4. Existing strict version-2 and version-3
dependencies remain consumable within their original capabilities; this is not a public
support-window commitment.

Parser, Dart analysis, strict TypeScript compilation, manifest-only dependencies and
runtime tests cover the new declarations. Record support is defined separately by
[ADR 0028](0028-record-bindings.md); mixin composition, unsupported targets and
full-library selection remain separate work. Tests and their current acceptance receipts
are recorded in the
[compatibility matrix](../architecture/external-binding-compatibility.md#generic-typedef-acceptance).
