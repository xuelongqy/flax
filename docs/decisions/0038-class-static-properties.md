# ADR 0038: Class Static Properties

Status: accepted.

Date: 2026-10-05

## Decision

Class `staticGetters` and `staticSetters` select reads and writes independently.
JavaScript exposes readonly `Class.property` and explicit `Class.setProperty(value)`.
Both use existing function bindings and typed conversion for every supported class
category, without an instance or mounted Widget. Module import never reads Dart state.
Getter results and setter inputs retain their actual independent types.

Only declarations on the selected class are considered. Immutable writes and generated
export conflicts fail explicitly; automatic selection skips unsupported or conflicting
writes with diagnostics. Static state remains owned by the application. Session close
clears bridge resources without resetting it; retained callbacks follow existing session
lifetimes.

Manifest 14 records class-qualified read and write identities and their types. Existing
class IDs stay stable. Older manifests are rejected. Core injection, independent
Non-Core binding ownership and complete-provider reuse remain as in ADR 0037. Public
types contain declarations; source packages contain implementation and use plugin
injection. Selection 2, UI protocol 22 and native ABI 2 are unchanged.

## Alternatives

JavaScript property assignment would require another mutation surface and obscure the
existing explicit setter contract. Category-specific static runtime branches would
repeat conversion and validation already provided by function bindings.

## Validation

[Generator tests](../../packages/flax_codegen/test/static_accessors_test.dart) cover
selection, type checking, generated calls and provider capabilities.
[UI tests](../../packages/flax/test/ui/static_accessors_test.dart) exercise real JS,
application state shared by two sessions and resource cleanup.
