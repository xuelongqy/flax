# ADR 0035: Shared generic owners, State variants and UI protocol 21

Status: accepted

Date: 2026-09-24

## Context

Flax must preserve Dart generic relationships and Flutter State semantics without
requiring repetitive YAML or inventing a second lifecycle model. The previous binding
format exposed several mechanism-specific switches and a generic host-proxy mode. Those
switches duplicated facts available from the analyzer, while the generic host proxy
could not express real Dart mixin composition or the resulting interface capabilities.

The project has not published another binding format. The implementation therefore keeps
only the current schema and protocol instead of carrying compatibility readers or
adapters.

## Decision

Binding selections use configuration format 2. Package metadata remains format 1.
Generated manifests use format 12 and the reader accepts format 12 only. Generated UI
modules use protocol 21; native ABI 2 is unchanged. Selection files, generated Dart and
TypeScript, manifests, and module inventory are produced as one current contract.

The public selection fields `eraseGenerics`, `genericScalar`, `deferredFactories`,
`independentWidgetCallbacks`, `proxyOverrides`, `proxySuper`, and generic `proxy: host`
are removed. Analyzer-derived deferred factory and mounted Widget-result roles remain in
the semantic model and Manifest where runtime delivery requires them. Explicit
`typeArguments` and `methodTypeArguments` remain available when a concrete Dart type
cannot be inferred safely.

Generic declarations use one shared Dart owner while TypeScript preserves the declared
type parameters. An unconstrained owner uses `Object?`. When that is not legal, the
generator may use the declaration's public, fully closed upper bound, including nominal
bounds such as `ChangeNotifier` and closed generic bounds such as `Route<dynamic>`.
Every nested declaration identity must be publicly routable, supplied by a dependency
provider, or enter the ordinary dependency closure. A closed bound cannot refer to the
declaration's unresolved type parameters; `dynamic` is accepted only when it appears in
the Dart declaration. Dependent and recursive bounds such as `U extends List<T>` and
`T extends Comparable<T>` remain fail-closed without an explicit specialization.

The shared owner only permits existing Dart instances to use one generated owner. It
does not make the generic constructor universally callable. Constructor calls are
emitted only when selected direct inputs identify every class type parameter. Concrete
targets normally come from Analyzer use sites. For one direct scalar parameter, evidence
for either `String` or `int` completes the pair when both satisfy the Dart bound; the
bridge then accepts only strings and safe integers. Runtime domains must remain
disjoint, and overlapping targets fail closed. Nested inference, runtime type tokens and
permissive dynamic fallback are not introduced.

Capability census output reports generic behavior with the current semantic categories:
`shared_owner_resolved`, `constructor_specialization_resolved`,
`constructor_specialization_missing_use_site`, `constructor_specialization_ambiguous`,
and `complex_generic_bound`. It does not retain the previous aggregate
generic-instantiation category.

The exact Flutter `State<T>` declaration selected with `kind: state` receives component
host semantics. Flutter creates and owns the real State. JavaScript implements the same
class-based lifecycle and explicitly calls `super` where required. Application-created
controllers, focus nodes, subscriptions and other resources remain application-owned.

State mixin compositions are declared with fixed `proxyVariants`:

```yaml
classes:
  State:
    kind: state
    proxyVariants:
      SingleTickerProviderState:
        mixins:
          - SingleTickerProviderStateMixin
      KeepAliveTickerState:
        mixins:
          - AutomaticKeepAliveClientMixin
          - TickerProviderStateMixin
```

Variant order is Dart `with` order. Variants do not inherit other variants. The analyzer
resolves mixin identity, generic bounds, `on` constraints, abstract requirements,
concrete members and implemented interfaces. Ambiguous short names may specify a public
library URI. Invalid, duplicate or private mixins fail generation.

Generated hosts compose Flutter mixins first and `FlaxStateProxy` last. This preserves
the real Dart super chain for lifecycle and mixin methods. A variant records a stable
identity and its final interface capabilities. A dependency may add a variant-only
overlay without claiming a second State owner. A mounted component State can be passed
to a Dart parameter only through the live State host and only when the resolved variant
implements the requested interface. The reference is session-bound and becomes invalid
immediately after disposal.

## Consequences

Configuration, Manifest and generated module versions move together for this change:
format 2, Manifest 12 and UI protocol 21. The generator and module-delivery tooling
accept only the current binding formats and contain no normalization path.

Ordinary generic references no longer conflict merely because the graph uses multiple
concrete type arguments. Public fully closed bounds preserve their exact Dart source
shape, while constructors can still be unavailable when no safe concrete specialization
exists. Unsupported generic or mixin shapes remain precise generation errors.

State variants can provide native capabilities such as `TickerProvider` to Dart APIs
without allowing arbitrary JavaScript objects to impersonate Dart interfaces. Flutter
retains lifecycle ordering and mixin behavior; Flax transports calls and references but
does not manage application resource ownership.

This record amends ADR 0034's codegen mechanism details. ADR 0034 remains authoritative
for Flutter application ownership and explicit disposal.
