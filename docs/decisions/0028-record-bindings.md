# 0028: Structural Record bindings and Manifest 7

Status: accepted; amended by [ADR 0029](0029-native-widget-interface-members.md) for the
current Manifest writer.

## Context

Dart APIs can use Records directly, through typedefs, and inside callbacks, collections
and asynchronous values. Treating a Record as an object reference would add identity and
lifecycle semantics that Dart Records do not have, while flattening it into a Map would
lose field shape and type information.

The binding Manifest also needs to preserve Record field structure for dependency
consumers without changing existing declaration wire identities.

## Decision

Records are structural values in the binding type model. Positional fields keep source
order and use `$1`, `$2`, and so on at the TypeScript boundary. Named fields are
canonicalized by name after positional fields. TypeScript emits a readonly object shape.
Record fields recursively use the existing TypeRef conversion rules for nullable values,
generics, typedefs, callbacks, collections, asynchronous values and provider objects.

Dart-to-JavaScript conversion reads each Record field and converts it recursively.
JavaScript-to-Dart conversion requires every declared field, ignores additional object
properties, converts each field recursively, and reconstructs a real Dart Record using a
generated factory. Conversion errors retain the failing Record field path. Whole-Record
nullability and field nullability remain independent.

Records have no wire ID, owner row, runtime constructor or session reference identity.
Provider object identities nested inside Record fields still participate in normal
dependency and ownership validation. TypeScript `readonly` expresses the API value
shape; the runtime does not freeze the JavaScript object or emulate Dart Record
equality, `hashCode`, or `runtimeType`.

The Binding Manifest writer advances to version 7 with strict readers for versions
2/3/4/5/6/7. Version 7 TypeRefs may carry structural Record field metadata. Versions 2
through 6 reject Record-only fields before normalization and keep their original schema
restrictions. Existing declaration wire IDs are unchanged. Configuration format 1,
package metadata format 1, UI protocol 20 and native ABI 2 are unchanged.

This amends [ADR 0021](0021-external-binding-version-domains.md) for the current
Manifest domain and [ADR 0027](0027-public-library-module-delivery.md) for the writer
version.

## Consequences

Record support composes with the existing recursive TypeRef pipeline instead of adding
special cases for each container or asynchronous wrapper. Consumers can reconstruct the
same structural type from Manifest 7 while preserving provider ownership inside fields.
Older generators cannot consume Manifest 7 and must fail closed.

See [Binding Generation](../architecture/bindings.md) and the
[Binding Coverage Map](../architecture/binding-coverage-map.md) for the current
contract.
