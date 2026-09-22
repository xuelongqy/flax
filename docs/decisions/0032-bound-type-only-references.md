# 0032: Generic bound-only type references

Status: accepted.

## Decision

An interface used only in a generic constraint need not have a runtime binding. The
`typeOnly` model records its declaration source URI/name, nullable flag and recursively
scoped generic arguments. It has no wire ID, owner, constructor, members or reference
lifecycle. Bound parsing is explicitly separated from value conversion; `_checkBounds`
continues to use analyzer substitution and subtype validation.

TypeScript encodes nominal relationships with readonly phantom properties keyed by
source identity and containing a readonly tuple of generic arguments. This
representation is independent of npm entry paths and remains compatible across
providers, re-exports and consumers without installing any JS fields. Selected runtime
types retain their own and inherited relationships; an interface's unselected members
remain unavailable. Primitive values use the existing primitive-union projection rather
than phantom fields. Dart's exact specialization check remains authoritative; complete
TS inference and primitive generic subtype equivalence are not promised.

Type aliases with type-only constraints retain their declaration view without requiring
runtime bound erasure. Self-referential defaults are omitted in TS. Actual uses of these
aliases still convert their substituted targets. Missing concrete specialization for a
recursive callback or extension receiver is rejected; no `any` or new runtime type token
is introduced. Concrete specialization of generic Extension receivers is an unsupported
scope boundary; no specialization configuration or automatic type-graph expansion is
provided. A future change would require a separate decision.

Manifest writer 11 adds the type-only representation. Strict readers accept 2 through
11; 2 through 10 reject the new shape. Existing wire/operation IDs, configuration format
1, UI protocol 20 and native ABI 2 remain unchanged. This updates ADR 0031's writer
version.

A legacy provider remains readable. Consuming a newly exposed nominal bound relation
requires provider declarations containing that relation; regenerate those providers
instead of augmenting them in a consumer.

## Verification

The bound regression compiles generated Dart and strict TS, tests invalid
specializations and value positions, and checks v11 round trips and legacy rejection.
Package pipeline coverage verifies a provider with only its public library and Manifest
available, without claiming runtime ownership of the bound interface.
