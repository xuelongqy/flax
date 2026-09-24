# ADR 0031: Mutable Top-level Bindings

Status: accepted.

## Decision

Format-2 `topLevel.setters` selects writes independently from `topLevel.getters`. Public
mutable variables support either or both operations; an explicit setter does not require
a getter. Const, final and late-final declarations cannot be selected for writing. Each
operation uses the declaration's actual Dart type.

TypeScript exports `getX()` and `setX(value): void`. Dart remains the state source:
writes are immediate and reads reevaluate the accessor. Importing a module does not read
state. There are no mutable ESM exports, descriptors, caches or implicit subscriptions.

Each setter reuses `FlaxFunctionBinding` and existing input conversion. Its source name
is `name=` and its operation identity is distinct from both a read and an unrelated Dart
function named `setName`. Public reexports reuse the owner; consumers cannot add a write
or change its signature. Manifest 12 records read/write operations and provider routing.

## Scope

Supported Records, aliases, generic callbacks, enums, collections and provider objects
reuse existing conversions. Writes create no new reference ownership or lifecycle.
Unsupported input types and Flutter lifecycle positions remain fail closed.
