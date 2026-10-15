import 'dart:async';
import 'dart:collection';

import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

final _owners = Expando<_Producer>();
Future<Object?>? _root;

class _Producer {
  final completer = Completer<int>();
}

class _LengthErrorList extends ListBase<Future<int>> {
  final error = StateError('length failed');

  @override
  int get length => throw error;

  @override
  set length(int value) => throw UnsupportedError('Read only');

  @override
  Future<int> operator [](int index) => throw UnsupportedError('No elements');

  @override
  void operator []=(int index, Future<int> value) =>
      throw UnsupportedError('Read only');
}

const _paths = [
  'then',
  'await',
  'wait',
  'waitIterable',
  'any',
  'whenComplete',
  'catchError',
  'chain',
  'iterableWait',
  'recordWait',
  'forEach',
  'doWhile',
  'streamFirst',
  'streamList',
  'streamListIterable',
  'asyncStar',
  'streamIterator',
  'subscriptionFuture',
  'addStream',
  'controllerDone',
  'broadcastDone',
];

Future<void> _addStream(Future<int> source) {
  final sink = StreamController<int>()..stream.listen((_) {});
  return sink.addStream(Stream<int>.fromFuture(source));
}

Future<void> _controllerDone(Future<int> source, {required bool broadcast}) {
  final sink = broadcast
      ? StreamController<int>.broadcast()
      : StreamController<int>();
  sink.stream.listen((_) {});
  sink.addStream(Stream<int>.fromFuture(source)).then((_) => sink.close());
  return sink.done;
}

Future<int> _relay(Future<int> source) async => (await source) + 1;
Stream<int> _relayStream(Future<int> source) async* {
  yield await source;
}

@pragma('vm:never-inline')
WeakReference<_Producer> _create(String path, {required bool rooted}) {
  final producer = _Producer();
  final source = producer.completer.future;
  // Model the bridge's weak registration: only a live Future owns its producer.
  _owners[source] = producer;
  final Future<Object?> consumer = switch (path) {
    'source' => source,
    'then' => source.then((n) => n + 1).then((n) => n + 1),
    'await' => _relay(source).then((n) => n + 1),
    'wait' => Future.wait([source, Future.value(2)]),
    'waitIterable' => Future.wait(
      [source, Future.value(2)].map((value) => value),
    ),
    'any' => Future.any([source, Completer<int>().future]),
    'whenComplete' => source.whenComplete(() {}),
    'catchError' => source.catchError((Object _) => 0),
    'chain' => Future<int>.value(source),
    'iterableWait' => [source, Future.value(2)].wait,
    'recordWait' => (source, Future.value(2)).wait,
    'forEach' => Future.forEach([1], (_) => source),
    'doWhile' => Future.doWhile(() => source.then((_) => false)),
    'streamFirst' => Stream<int>.fromFuture(source).first,
    'streamList' => Stream<int>.fromFutures([source]).toList(),
    'streamListIterable' => Stream<int>.fromFutures(
      [source].map((value) => value),
    ).toList(),
    'asyncStar' => _relayStream(source).first,
    'streamIterator' => StreamIterator(
      Stream<int>.fromFuture(source),
    ).moveNext(),
    'subscriptionFuture' => Stream<int>.fromFuture(
      source,
    ).listen((_) {}).asFuture<void>(),
    'addStream' => _addStream(source),
    'controllerDone' => _controllerDone(source, broadcast: false),
    'broadcastDone' => _controllerDone(source, broadcast: true),
    _ => throw ArgumentError(path),
  };
  _root = rooted ? consumer : null;
  return WeakReference(producer);
}

@pragma('vm:never-inline')
bool _alive(WeakReference<Object> weak) => weak.target != null;

@pragma('vm:never-inline')
WeakReference<Future<int>> _sourceOf(WeakReference<_Producer> weak) =>
    WeakReference(weak.target!.completer.future);

@pragma('vm:never-inline')
void _complete(WeakReference<_Producer> weak) {
  final producer = weak.target!;
  // Bridge settlement releases producer metadata even if a Future alias survives.
  _owners[producer.completer.future] = null;
  producer.completer.complete(7);
}

@pragma('vm:never-inline')
(WeakReference<Object>, Completer<int>) _switchSource() {
  final payload = Object();
  final source = Completer<Object>();
  final next = Completer<int>();
  _root = source.future.then((_) => next.future);
  source.complete(payload);
  return (WeakReference(payload), next);
}

Future<void> _collect() async {
  await flaxTestCollectDartGarbage();
  await flaxTestCollectDartGarbage();
}

Future<void> _expectCollected(
  WeakReference<Object> weak, {
  String? reason,
}) async {
  // AOT allocation pressure does not promise an old-space cycle in two rounds.
  for (var attempt = 0; attempt < 8; attempt++) {
    await _collect();
    if (!_alive(weak)) break;
  }
  expect(_alive(weak), isFalse, reason: reason);
}

void main() {
  tearDown(() => _root = null);

  testWidgets('Future aggregation preserves lazy inputs and length errors', (
    tester,
  ) async {
    await tester.runAsync(() async {
      final input = _LengthErrorList();
      Future<List<int>>? result;
      expect(() => result = Future.wait(input), returnsNormally);
      await expectLater(result, throwsA(same(input.error)));

      var iterations = 0;
      Iterable<Future<int>> values() sync* {
        iterations++;
        yield Future.value(1);
        yield Future.value(2);
      }

      expect(await Future.wait(values()), [1, 2]);
      expect(iterations, 1);
      expect(await Stream.fromFutures(values()).toList(), [1, 2]);
      expect(iterations, 2);
    });
  });

  testWidgets('live SDK consumers retain pending bridge producers', (
    tester,
  ) async {
    await tester.runAsync(() async {
      for (final path in _paths) {
        final weak = _create(path, rooted: true);
        await _collect();
        expect(_alive(weak), isTrue, reason: path);
        _complete(weak);
        await _root;
        _root = null;
      }
    });
  }, timeout: const Timeout(Duration(minutes: 2)));

  testWidgets('rootless SDK continuation cycles remain collectible', (
    tester,
  ) async {
    await tester.runAsync(() async {
      for (final path in _paths) {
        final weak = _create(path, rooted: false);
        await _expectCollected(weak, reason: path);
      }
    });
  }, timeout: const Timeout(Duration(minutes: 2)));

  testWidgets('settled consumers release their bridge producer', (
    tester,
  ) async {
    await tester.runAsync(() async {
      for (final path in _paths) {
        final weak = _create(path, rooted: true);
        _complete(weak);
        await _root;
        await _expectCollected(weak, reason: path);
        expect(_root, isNotNull);
        _root = null;
      }
    });
  }, timeout: const Timeout(Duration(minutes: 2)));

  testWidgets('completed aggregations release their source Futures', (
    tester,
  ) async {
    await tester.runAsync(() async {
      final retained = _create('source', rooted: true);
      final retainedSource = _sourceOf(retained);
      _complete(retained);
      await _collect();
      expect(_alive(retainedSource), isTrue);
      _root = null;
      await _expectCollected(retainedSource);

      for (final path in [
        'wait',
        'waitIterable',
        'streamList',
        'streamListIterable',
      ]) {
        final weak = _create(path, rooted: true);
        final source = _sourceOf(weak);
        _complete(weak);
        await _root;
        await _expectCollected(source, reason: path);
        expect(_root, isNotNull);
        _root = null;
      }
    });
  }, timeout: const Timeout(Duration(minutes: 2)));

  testWidgets('chained consumers release the previous completed source', (
    tester,
  ) async {
    await tester.runAsync(() async {
      final (weak, next) = _switchSource();
      try {
        await Future<void>.delayed(Duration.zero);
        await _expectCollected(weak);
        expect(_root, isNotNull);
      } finally {
        next.complete(1);
        await _root;
      }
    });
  });
}
