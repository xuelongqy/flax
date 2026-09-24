# ADR 0020: Complete Dart Stream Interop

Status: accepted; the current UI protocol value is defined by
[ADR 0035](0035-generic-state-variants-and-protocol-21.md).

Date: 2026-09-12

Supersedes: [ADR 0019](0019-dart-stream-interop.md)

## Context

ADR 0019 introduced a small one-way Dart Stream result wrapper. It did not cover Stream
parameters, controllers, transformers, complete subscription control, AsyncIterable
conversion or Flutter StreamBuilder. Normal `dart:async` APIs need those values to cross
in both directions while Dart keeps ownership of scheduling, buffering, broadcast
behavior and cancellation.

Fetch exposes Web `ReadableStream`. Its body and backpressure contract is different from
`dart:async` Stream and remains separate.

## Decision

The selected Dart Stream family uses lazy, bidirectional typed references under the
current UI protocol. Native ABI 2 is unchanged.

- Generated modules expose Dart-shaped `Stream<T>`, `StreamSubscription<T>`,
  controllers, sinks, consumers, transformers, views and iterators. The common JS
  reference is `FlaxStreamReference<T>`.
- Wrapping a Dart Stream never listens. Calls use real Dart factories and operators, and
  each `listen` creates a real Dart subscription. Dart retains single-subscription,
  broadcast, sync/async, pause, resume, error and cancellation semantics.
- Stream values can appear in supported parameters, results, callbacks, Future
  completions and typed collection positions. Generated typed use sites and analyzer
  upper-bound erasure avoid runtime type tokens.
- `Stream.fromAsyncIterable` is the explicit JS source boundary. It obtains the iterator
  lazily, keeps at most one `next()` in flight, follows Dart pause/resume and invokes
  `return()` on cancellation.
- Errors preserve Dart error and StackTrace references when required. Raw Dart
  `Function` parameters still require explicit supported signatures.
- `StreamBuilder<Object?>`, `AsyncSnapshot<Object?>` and `ConnectionState` use Flutter's
  real implementation and lifecycle.
- Session close cancels bridge-created subscriptions and AsyncIterable sources, revokes
  callbacks and ignores late events. It does not close application-created controllers
  or sinks.

## Boundaries

Dart Stream is not implicitly converted to Fetch `ReadableStream`. TypeScript generics
do not transmit runtime type arguments. Widget builders, Route factories and Flutter
lifecycle callbacks remain synchronous. Applications remain responsible for closing
their controllers, sinks and other Dart objects.

## Consequences

The bridge owns subscription and callback records while preserving actual Dart behavior.
Each event crosses one typed bridge delivery. AsyncIterable conversion has at most one
outstanding JS `next()`. Session shutdown remains deterministic for bridge resources,
while application disposal stays explicit.
