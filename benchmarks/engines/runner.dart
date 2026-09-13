// Copied into an independent AOT consumer with concrete engine dependencies.
// ignore_for_file: depend_on_referenced_packages
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flax/runtime.dart';
// __FLAX_ENGINE_IMPORTS__

import 'support.dart';

void check(bool value, String message) {
  if (!value) throw StateError(message);
}

void release(FlaxJsValue value) {
  if (value is FlaxJsObject) value.release();
}

double elapsed(Stopwatch watch) =>
    watch.elapsedTicks * 1000000 / watch.frequency;

void main(List<String> arguments) {
  final engine = arguments[0];
  final factories = <String, FlaxJsRuntime Function()>{
    // __FLAX_ENGINE_FACTORIES__
  };
  check(factories.containsKey(engine), 'Unknown engine');
  final factory = factories[engine]!;
  if (arguments[1] == 'jit-proof') {
    final runtime = factory();
    runtime.dispose();
    return;
  }
  final name = arguments[1];
  final size = arguments[2];
  final repeats = int.parse(arguments[3]);
  final mode = arguments[4];
  check(
    scenarios.contains(name) && sizes.contains(size) && repeats > 0,
    'Invalid worker arguments',
  );
  final bundle = File('bundle.js').readAsStringSync();
  if (name.startsWith('memory.')) {
    final rss = <String, int>{'baseline': ProcessInfo.currentRss};
    final runtimes = <FlaxJsRuntime>[];
    try {
      final count = name == 'memory.one' ? 1 : 4;
      for (var i = 0; i < count; i++) {
        runtimes.add(factory());
      }
      rss['empty'] = ProcessInfo.currentRss;
      for (final runtime in runtimes) {
        release(runtime.evaluate(bundle));
        check(
          (runtime.evaluate(
            'typeof FlaxBench.signal === "function"',
          ) as FlaxJsBoolean).value,
          'Bundle failed',
        );
      }
      rss['loaded'] = ProcessInfo.currentRss;
      while (runtimes.length > 1) {
        runtimes.removeLast().dispose();
      }
      runtimes.removeLast().dispose();
      rss['released'] = ProcessInfo.currentRss;
    } finally {
      for (final runtime in runtimes) {
        runtime.dispose();
      }
    }
    stdout.writeln(
      'FLAX_BENCH:${jsonEncode({
        'validated': true,
        'first': {'totalUs': 0},
        'warmup': <Object>[],
        'measurements': <Object>[],
        'stable': true,
        'batchRepeats': 1,
        'rssBytes': rss,
        'rssDeltaBytes': {for (final key in rss.keys) key: rss[key]! - rss['baseline']!},
      })}',
    );
    return;
  }
  FlaxJsRuntime? runtime;
  final owned = <FlaxJsObject>[];
  var notifications = 0;
  FlaxJsFunction? reentry;
  try {
    if (name != 'lifecycle') runtime = factory();
    final n = elements(size);
    final bytes = byteCount(size);
    final rawBytes = Uint8List(bytes)..fillRange(0, bytes, 7);
    final text = '${'a' * (bytes - 1)}z';
    final source =
        '(function(){var s=0;${List.generate(n, (i) => 's+=$i;').join()}return s;})()';
    FlaxJsFunction getFunction(String key) {
      final fn = runtime!.getGlobal(key) as FlaxJsFunction;
      owned.add(fn);
      return fn;
    }

    FlaxJsFunction? reset;
    FlaxJsFunction? run;
    FlaxJsFunction? verify;
    FlaxJsFunction? pending;
    FlaxJsObject? payloadObject;
    if (name.startsWith('bridge.dart-js')) {
      release(
        runtime!.evaluate(
          'globalThis.benchCall = x => typeof x === "string" ? x.length : typeof x === "number" ? x : x instanceof ArrayBuffer ? x : x.value;',
        ),
      );
      run = getFunction('benchCall');
      payloadObject = runtime.evaluate('({value:7})') as FlaxJsObject;
      owned.add(payloadObject);
    } else if (!['lifecycle', 'source', 'bundle'].contains(name)) {
      if (name.startsWith('flax.')) release(runtime!.evaluate(bundle));
      if (name == 'bridge.reentry') {
        release(runtime!.evaluate('globalThis.benchIdentity = x => x;'));
        reentry = getFunction('benchIdentity');
      }
      runtime!.registerHostFunction('benchHost', (_, args) {
        if (reentry != null) return reentry.call(args);
        final value = args.single;
        if (value is FlaxJsString) {
          return FlaxJsNumber(value.value.length.toDouble());
        }
        if (value is FlaxJsObject) {
          if (name.endsWith('bytes')) {
            final copied = runtime!.readBytes(value);
            var sum = 0;
            for (final byte in copied) {
              sum += byte;
            }
            return FlaxJsNumber(sum.toDouble());
          }
          return value.getProperty('value');
        }
        return value;
      });
      runtime.registerHostFunction('__flaxInvalidate', (_, args) {
        notifications++;
        // No Dart/JS callback is dispatched by background work.
        return const FlaxJsUndefined();
      });
      release(runtime.evaluate(File('cases.js').readAsStringSync()));
      final setup = getFunction('benchSetup');
      release(
        setup.call([
          FlaxJsString(name),
          FlaxJsNumber(n.toDouble()),
          FlaxJsNumber(bytes.toDouble()),
          const FlaxJsNumber(inputSeed * 1.0),
        ]),
      );
      reset = getFunction('benchReset');
      run = getFunction('benchRun');
      verify = getFunction('benchVerify');
      pending = getFunction('benchPending');
    }
    Map<String, double> batch(int count) {
      if (reset != null) release(reset.call([]));
      notifications = 0;
      double total;
      double? creation;
      double? destruction;
      double? enqueue;
      double? checkpoint;
      var checksum = 0.0;
      Uint8List? copied;
      if (name == 'lifecycle') {
        creation = 0;
        destruction = 0;
        for (var i = 0; i < count; i++) {
          final watch = Stopwatch()..start();
          final next = factory();
          creation = creation! + elapsed(watch);
          watch.reset();
          next.dispose();
          destruction = destruction! + elapsed(watch);
        }
        total = creation! + destruction!;
      } else if (name == 'source' || name == 'bundle') {
        final input = name == 'source' ? source : bundle;
        final watch = Stopwatch()..start();
        for (var i = 0; i < count; i++) {
          final value = runtime!.evaluate(
            input,
            sourceUrl: 'flax:benchmark-$name',
          );
          if (value is FlaxJsNumber) checksum += value.value;
          release(value);
        }
        total = elapsed(watch);
        if (name == 'source') {
          check(checksum == n * (n - 1) / 2 * count, 'Source result mismatch');
        } else {
          check(
            (runtime!.evaluate(
              'typeof FlaxBench.signal === "function" && FlaxBench.Text("ok").args.data === "ok"',
            ) as FlaxJsBoolean).value,
            'Bundle result mismatch',
          );
        }
      } else if (name.startsWith('bridge.dart-js')) {
        final FlaxJsValue payload = name.endsWith('string')
            ? FlaxJsString(text)
            : name.endsWith('object')
            ? payloadObject!
            : const FlaxJsNumber(7);
        final calls = name.endsWith('string') || name.endsWith('bytes')
            ? count
            : count * n;
        final args = [payload];
        final watch = Stopwatch()..start();
        for (var i = 0; i < calls; i++) {
          if (name.endsWith('bytes')) {
            final buffer = runtime!.createArrayBuffer(rawBytes);
            try {
              final returned = run!.call([buffer]) as FlaxJsObject;
              try {
                copied = runtime.readBytes(returned);
                checksum += copied.length;
              } finally {
                returned.release();
              }
            } finally {
              buffer.release();
            }
          } else {
            checksum += (run!.call(args) as FlaxJsNumber).value;
          }
        }
        total = elapsed(watch);
        final expected = name.endsWith('bytes') || name.endsWith('string')
            ? bytes
            : 7;
        check(checksum == calls * expected, 'Dart to JS result mismatch');
        if (copied != null) {
          check(copied.every((byte) => byte == 7), 'Byte copy mismatch');
        }
      } else {
        final args = [FlaxJsNumber(count.toDouble())];
        final watch = Stopwatch()..start();
        release(run!.call(args));
        enqueue = name == 'promise' ? elapsed(watch) : null;
        if (name == 'promise') {
          watch.stop();
          check(
            (pending!.call([]) as FlaxJsNumber).value == 0,
            'Promise ran before explicit checkpoint',
          );
          watch.reset();
          watch.start();
          final empty = runtime!.drainMicrotasks();
          checkpoint = elapsed(watch);
          check(empty, 'Pending microtasks after checkpoint');
          total = enqueue! + checkpoint;
        } else {
          total = elapsed(watch);
        }
        check(
          (verify!.call(args) as FlaxJsBoolean).value,
          'JS result mismatch',
        );
        if (name == 'flax.signals' || name == 'flax.batch') {
          check(
            notifications == (name == 'flax.signals' ? n * count : count),
            'Signal notification count mismatch',
          );
        }
      }
      return {
        'totalUs': total,
        'createUs': ?creation,
        'disposeUs': ?destruction,
        'enqueueUs': ?enqueue,
        'checkpointUs': ?checkpoint,
      };
    }

    final first = batch(1);
    final warmup = <Map<String, double>>[];
    final measurements = <Map<String, double>>[];
    var isStable = false;
    if (mode != 'pilot') {
      for (var i = 0; i < (mode == 'smoke' ? 1 : 50); i++) {
        warmup.add(batch(repeats));
        isStable = stable([for (final entry in warmup) entry['totalUs']!]);
        if (isStable) break;
      }
      for (var i = 0; i < (mode == 'smoke' ? 1 : 20); i++) {
        measurements.add(batch(repeats));
      }
    } else {
      // Calibration is discarded with this process and never warms a measured runtime.
      for (var i = 0; i < 15; i++) {
        warmup.add(batch(repeats));
      }
      for (var i = 0; i < 5; i++) {
        measurements.add(batch(repeats));
      }
    }
    stdout.writeln(
      'FLAX_BENCH:${jsonEncode({'validated': true, 'first': first, 'warmup': warmup, 'measurements': measurements, 'stable': isStable, 'batchRepeats': repeats, 'elements': n, 'bytes': bytes, 'seed': inputSeed})}',
    );
  } finally {
    // Runtime disposal clears subscriptions and any JS-owned references.
    for (final object in owned.reversed) {
      object.release();
    }
    runtime?.dispose();
  }
}
