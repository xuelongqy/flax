# ADR 0020: Complete Dart Stream Interop and UI Protocol 20

Status: accepted

Date: 2026-09-12

Supersedes: [ADR 0019](0019-dart-stream-interop.md)

## Context

ADR 0019 introduced a small one-way Dart Stream result wrapper as UI protocol 19. It did
not cover Stream parameters, controllers, transformers, complete subscription control,
AsyncIterable conversion or Flutter StreamBuilder. Normal dart:async APIs need those
values to cross in both directions while Dart keeps ownership of scheduling, buffering,
broadcast behavior and cancellation.

Fetch already exposes Web `ReadableStream`. Its body and backpressure contract is
different from dart:async Stream and must remain separate.

## Decision

UI protocol **20** provides lazy, bidirectional typed references for the selected public
Dart 3.13.2 Stream family. Native ABI **2** is unchanged.

- Generated Flutter modules export Dart-shaped `Stream<T>`, `StreamSubscription<T>`,
  controllers, sinks, consumers, transformers, views and iterators. The common JS
  interop reference is `FlaxStreamReference<T>`; there is no `DartStream` alias.
- Wrapping a Dart Stream never listens. Calls use real Dart factories and operators, and
  each `listen` creates a real Dart subscription. Dart retains single-subscription,
  broadcast, sync/async, pause, resume, error and cancellation semantics.
- Stream values can appear in selected parameters, results, callbacks, Future
  completions and typed collection positions. A concrete Dart `Stream<X>` use creates a
  typed event view over the same Dart identity. JS-created generic Stream objects use
  analyzer upper-bound erasure, normally `Object?`; no runtime type token crosses.
- Future parameters, `FutureOr<T>` and `Iterable<Future<T>>` are enabled where the
  selected dart:async API requires them. Typed Promise adapters preserve the concrete
  Dart Future result. Future values nested inside another Future completion remain
  generation errors.
- `Stream.fromAsyncIterable` is the explicit JS source boundary. It obtains the iterator
  lazily, keeps at most one `next()` in flight, observes Dart pause/resume and invokes
  `return()` on cancellation. Generated Streams implement AsyncIterable through a real
  Dart `StreamIterator`; concurrent `next()` is rejected.
- Errors preserve Dart error and StackTrace references when they must be represented by
  a JS Error, allowing `addError` to restore the original values. Raw Dart `Function`
  parameters require explicit configured signatures; scoped sink arguments are revoked
  when their callback returns.
- `StreamBuilder<Object?>`, `AsyncSnapshot<Object?>` and `ConnectionState` use the real
  Flutter implementation. Flutter owns subscriptions, snapshot timing, `setState`,
  stream replacement and unmount cancellation.
- Session close cancels subscriptions and AsyncIterable sources created by the bridge,
  revokes callbacks and ignores late events. It does not close application-created
  controllers or sinks and does not wait for an application cancellation Future that may
  never complete.

All generated modules and manifests carry protocol 20. Protocol 18 and 19 modules are
rejected without a compatibility layer.

## Boundaries

- Dart Stream is not implicitly converted to or from Fetch `ReadableStream`.
- TypeScript generics preserve development-time relationships but do not transmit type
  arguments at runtime.
- Widget builders, Route factories and Flutter lifecycle callbacks remain synchronous.
- Nested Future completion values, `FutureOr` outside supported positions, unsupported
  raw Function shapes, Map callback keys and Widget collections in callbacks continue to
  fail generation.
- Applications remain responsible for closing their controllers, sinks and other Dart
  objects.

## Alternatives

**Map Dart Stream to Web ReadableStream.** Rejected because the APIs have different
subscription, broadcast, error and cancellation semantics.

**Keep protocol 19 listen-only wrappers.** Rejected because it cannot represent normal
controllers, transformers or Flutter StreamBuilder inputs.

**Transmit runtime generic type tokens.** Rejected. Generated typed use sites and
analyzer upper-bound erasure cover the selected APIs without reflection or unbounded
specialization.

## Consequences

The bridge owns more subscription and callback records, but it preserves actual Dart
behavior instead of recreating operators in JavaScript. Stream event conversion adds one
typed bridge delivery per event. AsyncIterable conversion has one outstanding JS
`next()` at most. Session shutdown remains deterministic for bridge resources while
application object disposal stays explicit.
