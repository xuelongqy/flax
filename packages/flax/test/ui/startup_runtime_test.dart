import 'dart:async';

import 'package:flax/runtime.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test(
    'disposing a preparing runtime releases its worker and shared heap',
    () async {
      final runtime = FlaxEngine.createRuntime();
      final prepared = (runtime as FlaxJsSourcePreparer).prepareSources([
        FlaxJsSource('while (true) {}'),
      ], entry: FlaxJsSource('0'));
      final cancelled = expectLater(prepared, throwsA(isA<StateError>()));
      await Future<void>.delayed(const Duration(milliseconds: 100));
      runtime.dispose();
      await cancelled;
      final next = FlaxEngine.createRuntime();
      try {
        expect((next.evaluate('21 * 2') as FlaxJsNumber).value, 42);
      } finally {
        next.dispose();
      }
    },
    timeout: const Timeout(Duration(seconds: 15)),
  );

  test('a synchronous runtime interrupts pure preparation without exposing partial state', () async {
    final first = FlaxEngine.createRuntime();
    FlaxJsRuntime? second;
    final prepared = (first as FlaxJsSourcePreparer).prepareSources([
      FlaxJsSource('globalThis.partial = 41; while (true) {}'),
    ], entry: FlaxJsSource('globalThis.entryRan = true;'));
    try {
      await Future<void>.delayed(const Duration(milliseconds: 100));
      second = FlaxEngine.createRuntime();
      expect(() => first.getGlobal('partial'), throwsStateError);
      expect(await prepared, isFalse);
      expect(first.getGlobal('partial'), isA<FlaxJsUndefined>());
      expect(first.getGlobal('entryRan'), isA<FlaxJsUndefined>());
      second.evaluate('globalThis.separate = 42');
      expect(first.getGlobal('separate'), isA<FlaxJsUndefined>());
      expect((second.getGlobal('separate') as FlaxJsNumber).value, 42);
      expect((first.evaluate('21 * 2') as FlaxJsNumber).value, 42);
    } finally {
      second?.dispose();
      first.dispose();
      try {
        await prepared;
      } catch (_) {
        // Drain cancellation if construction failed before the assertion.
      }
    }
  }, timeout: const Timeout(Duration(seconds: 15)));

  test(
    'preconfigured runtimes retain their globals and select UI initialization',
    () async {
      final runtime = FlaxEngine.createRuntime();
      try {
        runtime.evaluate('globalThis.configuration = 42');
        expect(
          await (runtime as FlaxJsSourcePreparer).prepareSources([
            FlaxJsSource('globalThis.unexpected = true'),
          ], entry: FlaxJsSource('0')),
          isFalse,
        );
        expect((runtime.getGlobal('configuration') as FlaxJsNumber).value, 42);
        expect(runtime.getGlobal('unexpected'), isA<FlaxJsUndefined>());
      } finally {
        runtime.dispose();
      }
    },
  );

  test('Dart GC completes while pure JavaScript owns the empty heap', () async {
    final runtime = FlaxEngine.createRuntime();
    final cancelled = Completer<void>();
    final prepared = (runtime as FlaxJsSourcePreparer).prepareSources(
      [FlaxJsSource('while (true) {}')],
      entry: FlaxJsSource('0'),
      cancelled: cancelled.future,
    );
    final ended = expectLater(prepared, throwsA(isA<StateError>()));
    try {
      await flaxTestCollectDartGarbage();
      cancelled.complete();
      await ended;
    } finally {
      if (!cancelled.isCompleted) cancelled.complete();
      runtime.dispose();
    }
  }, timeout: const Timeout(Duration(seconds: 20)));

  test('pure preparation preserves closures, subclasses and compiled entry', () async {
    final runtime = FlaxEngine.createRuntime();
    try {
      final prepare = runtime as FlaxJsSourcePreparer;
      final entry = FlaxJsSource(
        'globalThis.activated = true; host(peer.value());',
        sourceUrl: 'entry.js',
      );
      expect(
        await prepare.prepareSources([
          FlaxJsSource('''
class Parent { value() { return 10; } }
class Child extends Parent {
  #extra = 32;
  value() { return super.value() + this.#extra; }
}
globalThis.peer = new Child();
'''),
        ], entry: entry),
        isTrue,
      );
      expect(runtime.getGlobal('activated'), isA<FlaxJsUndefined>());
      runtime.registerHostFunction('host', (_, values) => values.single);
      expect((runtime.evaluateSource(entry) as FlaxJsNumber).value, 42);
      // A matching URL alone must never select another source's compiled entry.
      expect(
        (runtime.evaluate('7', sourceUrl: 'entry.js') as FlaxJsNumber).value,
        7,
      );
    } finally {
      runtime.dispose();
    }
  });

  test(
    'Dart timers cancel continuous JS initialization and restore UI ownership',
    () async {
      final runtime = FlaxEngine.createRuntime();
      final cancelled = Completer<void>();
      var ticks = 0;
      final timer = Timer.periodic(const Duration(milliseconds: 400), (_) {
        if (++ticks == 5) cancelled.complete();
      });
      try {
        await expectLater(
          (runtime as FlaxJsSourcePreparer).prepareSources(
            [FlaxJsSource('while (true) {}')],
            entry: FlaxJsSource('0'),
            cancelled: cancelled.future,
          ),
          throwsA(isA<StateError>()),
        );
        expect(ticks, greaterThanOrEqualTo(5));
        expect((runtime.evaluate('21 * 2') as FlaxJsNumber).value, 42);
      } finally {
        timer.cancel();
        runtime.dispose();
      }
    },
    timeout: const Timeout(Duration(seconds: 15)),
  );

  test(
    'live sessions select the UI fallback without changing either context',
    () async {
      final first = FlaxEngine.createRuntime();
      final second = FlaxEngine.createRuntime();
      try {
        first.evaluate('globalThis.kept = 41');
        expect(
          await (second as FlaxJsSourcePreparer).prepareSources([
            FlaxJsSource('globalThis.unexpected = true'),
          ], entry: FlaxJsSource('0')),
          isFalse,
        );
        expect(second.getGlobal('unexpected'), isA<FlaxJsUndefined>());
        expect((first.getGlobal('kept') as FlaxJsNumber).value, 41);
      } finally {
        second.dispose();
        first.dispose();
      }
    },
  );

  test(
    'failed preparation releases its worker and remains disposable',
    () async {
      final runtime = FlaxEngine.createRuntime();
      try {
        await expectLater(
          (runtime as FlaxJsSourcePreparer).prepareSources([
            FlaxJsSource("throw new Error('preparation failure')"),
          ], entry: FlaxJsSource('0')),
          throwsA(isA<FlaxJsException>()),
        );
        expect((runtime.evaluate('42') as FlaxJsNumber).value, 42);
      } finally {
        runtime.dispose();
      }
    },
  );
}
