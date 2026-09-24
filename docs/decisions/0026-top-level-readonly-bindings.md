# ADR 0026: Top-level Readonly Bindings

Status: accepted; public-library routing is refined by
[ADR 0027](0027-public-library-module-delivery.md).

## Context

Public Dart constants, final variables and getters need an explicit export surface
without eager evaluation or synthetic Dart classes.

## Decision

Format-2 `topLevel.getters` selects public `const`, `final`, `late final` and explicit
getters. Unsupported conversions, writable-only declarations, conflicting exports and
special Flutter ownership fail closed. Reexports and synthetic getters resolve to the
actual declaration identity.

Safe primitive constants may be literal exports. Dynamic values, object references,
final or late-final values and explicit getters use uncached `getX()` functions. Import
and installation perform no read. Dart controls initialization, repeated results and
exceptions. Returned references retain existing ownership, callback, generic and async
semantics.

Manifest 12 stores each read operation, source identity, result type and public-library
routing. Consumers reuse the owner's export and cannot alter its signature.

## Consequences

Readonly is shallow and creates no subscription or cache. Mutable top-level writes are a
separate explicit surface under [ADR 0031](0031-mutable-top-level-bindings.md). See
[Binding Generation](../architecture/bindings.md#public-libraries-and-top-level-readonly-declarations)
and [External Binding Verification](../architecture/external-binding-verification.md).
