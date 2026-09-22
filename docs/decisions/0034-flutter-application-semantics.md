# ADR 0034: Preserve Flutter application semantics

Status: accepted

Date: 2026-09-22

## Context

Flax binds Flutter to JavaScript/TypeScript. Convenience features must not create a
second component, ownership, or resource-lifecycle model beside Flutter's own Widget and
State rules. In particular, a generated `dispose()` surface must not imply that Flax
owns the object or should dispose it when a Widget, page, or session ends.

## Decision

Flax remains a Flutter language binding. Custom application components use real Flutter
`State`; application code owns Controllers, FocusNodes, subscriptions and similar
resources and releases them explicitly from the same lifecycle points it would use in
Dart. Session shutdown releases bridge references and callbacks only. It never disposes
application objects.

Codegen records semantic roles needed to generate correct bindings. Widget, Context,
State, Route and Page declarations require their existing Flutter-specific transports
instead of a generic proxy. A conventional synchronous zero-argument `void dispose()`
may be inferred as an explicit disposal capability, including when inherited. This only
changes what happens after application code calls that method successfully: the bridge
revokes the disposed wrapper. It does not schedule or infer disposal ownership.

Widget parameters and Widget-returning builders keep Flutter tree semantics. Resource
objects passed into Widgets remain borrowed values from the Widget's perspective; their
creator remains responsible for disposal. Codegen should infer representable type and
Widget semantics where safe, while advanced ownership policy stays out of automatic
binding.

Flutter-declared callback positions such as builders remain functions. A plain JS
function returning a Widget is not an application component and gains no State or
lifecycle; application components use the class-based `StatelessWidget`,
`StatefulWidget` and `State` API.

## Alternatives

Automatically disposing objects when a Widget or session ends was rejected because the
same object may be shared across multiple Widgets or owners. A React/hooks-style
component lifecycle was rejected because it would duplicate Flutter State semantics and
make native API behavior harder to reason about. Per-class lifecycle configuration is
reserved for cases that cannot be represented by ordinary API binding.

## Consequences

`dispose()` remains an ordinary callable API controlled by application code. Automatic
binding may recognize the conventional disposer without adding runtime ownership.
Generic proxy classification describes whether Flutter-specific semantics are required;
it is not a lifetime manager. Existing object, component, Route/Page and session cleanup
contracts remain unchanged. Regression tests must verify both explicit disposal and that
session close leaves application objects undisposed.
