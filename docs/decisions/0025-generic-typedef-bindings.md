# ADR 0025: Generic Typedef Bindings

Status: accepted.

## Context

Basic aliases could name existing callback and collection conversions, but Flutter APIs
also use generic aliases and aliases with function-local type parameters. The generic
callback implementation already preserves lexical identity and validates concrete Dart
use sites without runtime type tokens.

## Decision

Format-2 `typedefs` model alias-owned parameters separately from function-local
parameters. Bounds, defaults, nullability, substitution, capture and shadowing use the
same generic declaration identities as classes and callbacks. TypeScript emits `Name<T>`
and directional `NameInput<T>` for already-supported targets.

Supported forms include `Mapper<T> = T Function(T)`, `Items<T> = List<T>`,
`GenericMapper = T Function<T>(T)` and `Converter<T> = T Function<U extends T>(U)`.
Incoming generic callbacks are real Dart functions that validate results against Dart's
current parameter. Returned Dart generic functions use supported bound erasure.
Recursive or nonconvertible callback bounds that require concrete runtime specialization
remain fail closed.

Manifest 12 preserves alias-owned and function-local lexical slots, bounds, defaults,
targets and provider identities. Aliases add no runtime wrapper, constructor, owner row,
wire ID or type token.

## Consequences

Core can export real Flutter aliases such as `ValueChanged<T>` and `ValueGetter<T>`.
Unsupported targets and concrete-specialization requirements remain explicit generation
errors. See [Binding Generation](../architecture/bindings.md#standalone-typedefs) and
[External Binding Verification](../architecture/external-binding-verification.md).
