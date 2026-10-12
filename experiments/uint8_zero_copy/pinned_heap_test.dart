// Runs with the experiment's isolated Flutter tester.
// ignore_for_file: depend_on_referenced_packages, implementation_imports, avoid_print

import 'dart:convert';
import 'dart:typed_data';

import 'package:flax/flax.dart';
import 'package:flax/src/native/native_runtime.dart';

import 'diagnostics.dart';

import 'package:flutter_test/flutter_test.dart';

FlaxNativeJsRuntime _runtime() =>
    FlaxEngine.createRuntime() as FlaxNativeJsRuntime;

void _execute(FlaxNativeJsRuntime runtime, String source) {
  final result = runtime.evaluate('$source; undefined;');
  if (result is FlaxJsObject) result.release();
}

void _set(FlaxNativeJsRuntime runtime, String name, FlaxJsObject value) {
  final global = runtime.evaluate('globalThis') as FlaxJsObject;
  global.setProperty(name, value);
  global.release();
}

int _number(FlaxNativeJsRuntime runtime, String source) =>
    (runtime.evaluate(source) as FlaxJsNumber).value.toInt();

void _report(String name, Map<String, Object> values) {
  print('PINNED_HEAP ${jsonEncode({'case': name, ...values})}');
}

Future<void> _collect(FlaxNativeJsRuntime runtime) async {
  for (var turn = 0; turn < 4; turn++) {
    runtime.drainMicrotasks();
    runtime.prototypeCollect(young: turn == 0, compact: turn != 0);
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
}

@pragma('vm:never-inline')
Uint8List _ordinary(int length) => Uint8List(length);

Map<String, int> _timings(List<int> samples) {
  samples.sort();
  return {
    'medianUs': samples[samples.length ~/ 2],
    'p95Us': samples[(samples.length * 0.95).ceil() - 1],
    'samples': samples.length,
  };
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test(
    'ordinary lists and preexisting aliases share through compacting GC',
    () async {
      final runtime = _runtime();
      try {
        final observations = <Map<String, Object>>[];
        for (final length in [16, 4096, 131072, 262144, 1048576]) {
          final bytes = _ordinary(length);
          final alias = bytes;
          final slice = Uint8List.sublistView(bytes, 4, 12);
          final words = ByteData.view(bytes.buffer, 4, 8);
          final hash = identityHashCode(bytes);
          bytes[4] = 17;
          final before = flaxPrototypeUint8Address(bytes);
          final array = runtime.createUint8Array(slice);
          _set(runtime, 'shared', array);
          final shared = flaxPrototypeUint8Address(bytes);
          expect(runtime.prototypeJsAddress(array), shared + 4);
          expect(identical(alias, bytes), isTrue);
          expect(identityHashCode(bytes), hash);
          _execute(runtime, 'shared[0] = 31');
          expect(bytes[4], 31);
          expect(words.getUint8(0), 31);
          alias[5] = 43;
          expect(_number(runtime, 'shared[1]'), 43);
          await _collect(runtime);
          expect(flaxPrototypeUint8Address(bytes), shared);
          expect(flaxPrototypeUint8Address(slice), shared + 4);
          expect(runtime.prototypeJsAddress(array), shared + 4);
          final full = runtime.createUint8Array(bytes);
          expect(runtime.prototypeJsAddress(full), shared);
          final imported = runtime.readUint8Array(array);
          imported[2] = 59;
          expect(bytes[6], 59);
          expect(_number(runtime, 'shared[2]'), 59);
          observations.add({
            'length': length,
            'beforeShare': before,
            'sharedAddress': shared,
            'promotedBeforeSharing': before != shared,
            'offset': 4,
            'stableAfterGc': true,
            'originalAliasAndByteDataWriteThrough': true,
          });
          _execute(runtime, 'delete shared');
          full.release();
          array.release();
        }
        final words = Uint32List(16);
        final byteView = words.buffer.asUint8List(4, 12);
        final wordArray = runtime.createUint8Array(byteView);
        _set(runtime, 'wordBytes', wordArray);
        _execute(runtime, 'wordBytes.set([1, 2, 3, 4])');
        expect(words[1], 0x04030201);
        final imported = runtime.readUint8Array(wordArray);
        imported[0] = 9;
        expect(words[1], 0x04030209);
        await _collect(runtime);
        expect(
          runtime.prototypeJsAddress(wordArray),
          flaxPrototypeUint8Address(byteView),
        );
        _execute(runtime, 'delete wordBytes');
        wordArray.release();
        _report('ordinary-aliases', {'observations': observations});
      } finally {
        runtime.dispose();
      }
    },
  );

  test(
    'first-share and repeated-share costs are measured separately',
    () async {
      final runtime = _runtime();
      try {
        final measurements = <Map<String, Object>>[];
        for (final length in [64, 4096, 131072, 1048576, 16777216]) {
          final samples = <int>[];
          final before = flaxPrototypeUint8Stats()['promotions']!;
          for (var sample = 0; sample < 20; sample++) {
            final bytes = _ordinary(length);
            final watch = Stopwatch()..start();
            final array = runtime.createUint8Array(bytes);
            watch.stop();
            samples.add(watch.elapsedMicroseconds);
            expect(
              runtime.prototypeJsAddress(array),
              flaxPrototypeUint8Address(bytes),
            );
            array.release();
          }
          measurements.add({
            'bytes': length,
            ..._timings(samples),
            'forcedPromotions':
                flaxPrototypeUint8Stats()['promotions']! - before,
          });
          await _collect(runtime);
        }
        final bytes = _ordinary(1048576);
        final owner = runtime.createUint8Array(bytes);
        final samples = <int>[];
        final before = flaxPrototypeUint8Stats()['promotions'];
        for (var sample = 0; sample < 1000; sample++) {
          final watch = Stopwatch()..start();
          final array = runtime.createUint8Array(bytes);
          watch.stop();
          samples.add(watch.elapsedMicroseconds);
          array.release();
        }
        expect(flaxPrototypeUint8Stats()['promotions'], before);
        owner.release();
        final busySamples = <int>[];
        for (var sample = 0; sample < 8; sample++) {
          final live = List.generate(100000, (index) => [index, index + 1]);
          final bytes = _ordinary(4096);
          final watch = Stopwatch()..start();
          final array = runtime.createUint8Array(bytes);
          watch.stop();
          busySamples.add(watch.elapsedMicroseconds);
          expect(live.last.first, 99999);
          array.release();
          await _collect(runtime);
        }
        final allocationWatch = Stopwatch()..start();
        final allocationRoots = List.generate(100000, (_) => _ordinary(64));
        allocationWatch.stop();
        expect(allocationRoots.last.length, 64);
        _report('share-cost', {
          'firstShares': measurements,
          'repeatedShare': _timings(samples),
          'firstShareWith100000LiveLists': _timings(busySamples),
          'allocate100000ListsOf64BytesUs': allocationWatch.elapsedMicroseconds,
          'mode': 'debug',
        });
      } finally {
        runtime.dispose();
      }
    },
  );
}
