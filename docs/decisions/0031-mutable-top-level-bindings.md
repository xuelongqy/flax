# 0031: Mutable top-level access and Manifest 10

Status: accepted.

## Decision

Configuration format 1 adds optional `topLevel.setters`. Reads and writes are selected
independently. Public mutable variables support either or both operations; an explicit
setter does not require a getter. Const, final and late-final declarations cannot be
selected for writing. Each accessor uses its actual Dart type.

TypeScript exports `getX()` and `setX(value): void`. Dart remains the state source:
writes are immediate and every read evaluates the Dart accessor again. Importing a
module does not access dynamic state. Safe primitive const literal exports retain their
existing rules. There are no mutable ESM exports, descriptors, caches or implicit
subscriptions. This makes Dart setter validation and exceptions observable through
ordinary calls.

Each setter reuses `FlaxFunctionBinding` and existing input conversion. Its canonical
source name is `name=` with function declaration kind, encoded as `#function:name%3D` in
its wire ID. This distinguishes writes from both the original readonly/read identity and
an unrelated Dart function named `setName`. Public re-exports reuse the owner; consumers
cannot add a setter or change its signature through a provider reference.

Manifest 10 adds `topLevel.setters` and mutable getter classification. Strict readers
accept 2 through 10 under their original schemas; versions 2 through 9 reject the new
surface. Existing getter metadata and IDs remain unchanged. Configuration format 1, UI
protocol 20 and native ABI 2 are unchanged. This amends ADR 0030's writer version.

## Scope

Records, aliases, generic callbacks, enums, collections and ordinary provider objects
reuse existing conversions. Flutter lifecycle ownership and unsupported input types
remain rejected. Application-owned values are not disposed by session close, and writes
do not create any new reference or session lifetime. Automatic declaration discovery,
full-library selection and mixin composition remain separate work.
