# ADR 0027: Public Library Routing and Module Delivery

Status: accepted.

## Context

JavaScript imports should follow public Dart and Flutter library boundaries without
coupling a public specifier to the npm package that physically carries its
implementation. Applications also need host-provided and business-bundled delivery while
preserving one declaration owner and one runtime module instance.

## Decision

Public Flutter bindings use `@flax/flutter/*`, Dart SDK bindings use `@flax/dart/*`, and
Flax-owned navigation uses `@flax/core/navigation`. Reexports may provide more than one
public carrier, but declaration ownership, registration and wire identity remain unique.

Format-2 `publicLibraries` maps originating Dart libraries to public JS/TS specifiers
and facades. Declaration packages provide authoritative TypeScript surfaces; physical
packages may carry generated JavaScript implementations. Imported providers are reused
through Manifest 12 ownership and are never registered again by a consumer.

Applications list available public modules in the separate format-1 `flax_modules.json`
inventory. Preparation resolves locked physical packages, copies runtime artifacts and
delivery dependencies, and emits immutable application assets. Each session injects only
modules requested by its plugin set. Missing host inventory may still be satisfied by a
business bundle.

Module inventory, binding Manifest and runtime registration are separate domains. Wire
IDs do not depend on public specifiers, npm package names or delivery mode. UI protocol
21 and native ABI 2 retain their own version domains.

## Consequences

Business source mirrors public Dart imports without knowing the physical npm carrier.
Bundled and host-delivered paths retain one provider identity. Package authors must keep
declaration, implementation and inventory metadata consistent. See
[Binding Generation](../architecture/bindings.md),
[Packaging](../architecture/packaging.md), and
[External Binding Verification](../architecture/external-binding-verification.md).
