# ADR 0032: Generic Bound-only Type References

Status: accepted.

## Decision

An interface used only in a generic constraint need not have a runtime binding. The
`typeOnly` model records source identity, nullability and recursively scoped generic
arguments. It has no wire ID, owner, constructor, members or reference lifecycle. Bound
parsing remains separate from value conversion; analyzer substitution and subtype
validation are authoritative.

TypeScript encodes nominal relationships with readonly phantom properties keyed by
source identity and containing generic argument tuples. Runtime types retain their own
and inherited relationships; unselected members remain unavailable. Primitive values use
existing primitive projections instead of phantom fields.

Type aliases with type-only constraints retain their declaration view. Self-referential
defaults are omitted in TypeScript. Actual value positions still require conversion
bindings. Recursive callback or extension receiver bounds that require concrete runtime
specialization fail closed; no `any`, runtime type token or automatic graph-wide
specialization is introduced.

Manifest 12 stores type-only declarations and lexical generic scopes. A consumer reuses
a provider only when that provider already declares the required nominal relation; it
cannot augment the relation locally.

## Verification

Bound regressions compile generated Dart and strict TypeScript, exercise invalid
specializations and value positions, and round-trip the current Manifest. Package tests
verify consumption using only the provider's public library and Manifest, without
claiming runtime ownership of the bound interface.
