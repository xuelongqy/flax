// Callback shape fixtures for the Stage 2 mechanism matrix.
//
// Plain Dart only: no Flutter types, so the explicit (fail-closed) path can be
// measured without the official type pool.

import 'dart:async';

/// Control group: a synchronous callback parameter.
class SyncCallbackBox {
  const SyncCallbackBox(this.value);

  final int value;

  int run(int input, int Function(int) transform) => transform(input + value);
}

/// `Future` inside a callback parameter, and a plain `Future` parameter.
class FutureArgCallback {
  FutureArgCallback();

  void onEach(void Function(Future<int>) handler) => handler(Future.value(0));

  Future<int> whenDone(Future<int> pending) => pending;
}

/// The callback itself returns a `Future`.
class FutureResultCallback {
  FutureResultCallback();

  Future<int> schedule(Future<int> Function() compute) => compute();
}

/// `FutureOr` in the callback signature and as a plain value.
class FutureOrCallback {
  FutureOrCallback();

  FutureOr<int> scheduleOrValue(FutureOr<int> Function() compute) => compute();

  FutureOr<int> echoOrValue(FutureOr<int> value) => value;
}

/// A callback returning a nested `Future`.
class NestedFutureCallback {
  NestedFutureCallback();

  Future<Future<int>> nested(Future<Future<int>> Function() compute) =>
      compute();
}

/// `Stream` inside a callback parameter and as a result.
class StreamCallback {
  StreamCallback();

  void listenAll(void Function(Stream<int>) handler) =>
      handler(const Stream<int>.empty());

  Stream<int> watch() => const Stream<int>.empty();
}
