import 'dart:async';

// Echoing a callback exercises both incoming and returned function boundaries.
class AsyncStreamCallbacks {
  AsyncStreamCallbacks();

  late Future<Stream<int>> Function(Future<Stream<int>>) futureStream;
  late FutureOr<Stream<int>> Function(FutureOr<Stream<int>>) futureOrStream;
  late Stream<Future<int>> Function(Stream<Future<int>>) streamFuture;
  late Stream<FutureOr<int>> Function(Stream<FutureOr<int>>) streamFutureOr;

  Future<Stream<int>> Function(Future<Stream<int>>) echoFutureStream(
    Future<Stream<int>> Function(Future<Stream<int>>) callback,
  ) {
    futureStream = callback;
    return (value) => callback(value);
  }

  FutureOr<Stream<int>> Function(FutureOr<Stream<int>>) echoFutureOrStream(
    FutureOr<Stream<int>> Function(FutureOr<Stream<int>>) callback,
  ) {
    futureOrStream = callback;
    return (value) => callback(value);
  }

  Stream<Future<int>> Function(Stream<Future<int>>) echoStreamFuture(
    Stream<Future<int>> Function(Stream<Future<int>>) callback,
  ) {
    streamFuture = callback;
    return (value) => callback(value);
  }

  Stream<FutureOr<int>> Function(Stream<FutureOr<int>>) echoStreamFutureOr(
    Stream<FutureOr<int>> Function(Stream<FutureOr<int>>) callback,
  ) {
    streamFutureOr = callback;
    return (value) => callback(value);
  }

  Future<Stream<int?>?>? Function(Future<Stream<int?>?>?) echoNullable(
    Future<Stream<int?>?>? Function(Future<Stream<int?>?>?) callback,
  ) => callback;

  Future<List<Stream<int>>> Function(Future<List<Stream<int>>>) echoList(
    Future<List<Stream<int>>> Function(Future<List<Stream<int>>>) callback,
  ) => callback;

  Map<String, Stream<Future<int>>> Function(Map<String, Stream<Future<int>>>)
  echoMap(
    Map<String, Stream<Future<int>>> Function(Map<String, Stream<Future<int>>>)
    callback,
  ) => callback;

  (Future<Stream<int>>, {Stream<FutureOr<int>> events}) Function(
    (Future<Stream<int>>, {Stream<FutureOr<int>> events}),
  )
  echoRecord(
    (Future<Stream<int>>, {Stream<FutureOr<int>> events}) Function(
      (Future<Stream<int>>, {Stream<FutureOr<int>> events}),
    )
    callback,
  ) => callback;
  Stream<Future<List<int>>> Function(Stream<Future<List<int>>>)
  echoStreamFutureList(
    Stream<Future<List<int>>> Function(Stream<Future<List<int>>>) callback,
  ) => callback;

  Stream<Future<Map<String, int>>> Function(Stream<Future<Map<String, int>>>)
  echoStreamFutureMap(
    Stream<Future<Map<String, int>>> Function(Stream<Future<Map<String, int>>>)
    callback,
  ) => callback;

  Stream<Future<(int, {String label})>> Function(
    Stream<Future<(int, {String label})>>,
  )
  echoStreamFutureRecord(
    Stream<Future<(int, {String label})>> Function(
      Stream<Future<(int, {String label})>>,
    )
    callback,
  ) => callback;

  Stream<Future<Set<int>>> Function(Stream<Future<Set<int>>>)
  echoStreamFutureSet(
    Stream<Future<Set<int>>> Function(Stream<Future<Set<int>>>) callback,
  ) => callback;

  Stream<Future<Iterable<int>>> Function(Stream<Future<Iterable<int>>>)
  echoStreamFutureIterable(
    Stream<Future<Iterable<int>>> Function(Stream<Future<Iterable<int>>>)
    callback,
  ) => callback;

  Stream<Future<void>> Function(Stream<Future<void>>) echoStreamFutureVoid(
    Stream<Future<void>> Function(Stream<Future<void>>) callback,
  ) => callback;
}
