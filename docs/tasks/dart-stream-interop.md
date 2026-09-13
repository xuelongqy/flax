# Dart Stream Interop

Status: implemented

## Goal and scope

Provide lazy, bidirectional dart:async Stream bindings under UI protocol 20 without
mapping Dart Streams to Fetch Web Streams. The work covers the selected Dart 3.13.2
Stream family, typed subscriptions, controllers, sinks, transformers, iterators,
AsyncIterable conversion and Flutter StreamBuilder. Native ABI 2 is unchanged.

## Acceptance criteria

- Generated Stream parameters, results, callbacks, Future/FutureOr inputs and typed
  collection positions compile and retain their declared conversion.
- Stream wrapping is lazy; Dart owns event timing, buffering, broadcast behavior,
  subscription control and operators.
- JavaScript AsyncIterable sources have at most one in-flight `next()` and receive
  `return()` on cancellation.
- StreamBuilder uses real Flutter subscription and snapshot behavior.
- Session close cancels bridge-owned subscriptions and sources without closing
  application controllers.

## Results and validation

- Core binding selection covers Stream, StreamSubscription, StreamController,
  SynchronousStreamController, MultiStreamController, EventSink, StreamConsumer,
  StreamSink, StreamTransformer, StreamTransformerBase, StreamView and StreamIterator.
- Duration, StackTrace, ConnectionState, AsyncSnapshot and StreamBuilder are generated
  through the same object and Widget paths.
- Stream references are cached by Dart identity plus typed view. Concrete Dart use sites
  validate events, while JavaScript-created generic objects use analyzer upper-bound
  erasure.
- Dart error and StackTrace identity survive a JS error round trip. Scoped EventSink
  callback parameters expire when their callback returns.
- Scoped Flutter Stream tests cover operators, controllers, nonterminal errors,
  subscription pause/cancel, AsyncIterable laziness and cancellation, StreamBuilder
  replacement and session shutdown.
- `dart run tool/package.dart check flax`, `bindings:check`, `js:test`, and the complete
  repository `check` pass. The codegen suite has 40 passing tests and the core Node
  suite has 45.
- The seven focused Stream Flutter tests pass on Hermes. Full `check:ui` passes the
  native runtime, 99 core UI tests, 161 Material UI tests, every plugin and package
  example, the outside-package consumer, macOS integration, and release builds.
- The full V8 run passes the same runtime, package, 99 core UI, 161 Material UI, plugin,
  example, outside-consumer and macOS integration coverage, including JIT and relocated
  release execution. The final embedded release stage was repeated through the same V8
  example preparation path and produced a 58.5 MB application. One first relocated-app
  run timed out; its standalone verification passed unchanged on rerun.

## Handoff

The contract and ownership rules are recorded in
[ADR 0020](../decisions/0020-ui-protocol-20.md) and
[Dart interop](../architecture/interop.md). Applications must close their own
controllers and sinks. Fetch `ReadableStream`, runtime generic type tokens, and nested
Future completion values remain outside this bridge.
