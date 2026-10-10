# ADR 0030: Extension Binding Adapters

Status: accepted.

## Decision

Explicit `extensions` selections bind public named Dart extensions as callable receiver
views: `StringX('a').repeat(3)`. The JS view captures a receiver without a Dart call or
Dart instance, and its methods share a prototype. Instance getters are readonly
properties, setters use `setX(value)`, and methods retain their names. Static getters
and methods belong to the factory. Legal operators receive fixed ordinary method names.

Generated Dart always invokes the named extension override with analyzer-resolved erased
extension and method type arguments. TypeScript preserves supported generic
relationships and receiver constraints. Extensions requiring an unsafe concrete receiver
specialization fail closed. The contract adds no prototype mutation, implicit extension
resolution or runtime type token.

An extension has source identity but no object wire ID, Dart constructor or separate
session lifetime. The view retains its receiver through a WeakMap; receiver ownership
continues to use ordinary binding rules. Each operation reuses `FlaxFunctionBinding` and
existing recursive conversion. Manifest 12 introduced receiver, generic scope, operation
signatures and provider references; the current Manifest 17 retains those identities.
The previous receiver-first JS API must be regenerated in provider and consumer packages
together.

## Ownership and scope

Public libraries route to one implementation. Consumers may reuse a provider's published
members through the same factory but cannot widen them. Context, Widget and other
supported Flutter references use ordinary conversion and lifetime checks, including
Context invalidation and cross-session rejection. Unsupported ordinary callback or
result positions remain rejected. Anonymous/private extensions and unsupported receiver
conversions remain rejected. Extension types use representation bindings separately from
named extension views.
