# ADR 0030: Extension Binding Adapters

Status: accepted.

## Decision

Explicit `extensions` selections bind public named Dart extensions as static TypeScript
namespaces. Instance operations take a receiver first; getters and setters use `getX`
and `setX`, methods retain their names, and static members omit the receiver. Legal
operators receive fixed ordinary method names.

Generated Dart always invokes the named extension override with analyzer-resolved erased
extension and method type arguments. TypeScript preserves supported generic
relationships and receiver constraints. Extensions requiring an unsafe concrete receiver
specialization fail closed. The contract adds no prototype mutation, implicit extension
resolution or runtime type token.

An extension has source identity but no object wire ID, constructor or session lifetime.
Each operation reuses `FlaxFunctionBinding` and existing recursive conversion. Manifest
12 stores receiver, generic scope, operation signatures and provider references.

## Ownership and scope

Public libraries route to one implementation. Consumers may reuse a provider's published
members but cannot widen them. Anonymous/private extensions, extension types,
unsupported receiver conversion and Widget/lifecycle positions remain rejected.
