import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:test/test.dart';

import '../support.dart';

Map<String, Object?> fixture(String engine, int repeat, double value) => {
  'engine': engine, 'case': 'array.sort', 'size': 'small', 'repeat': repeat,
  'first': {'totalUs': value * 10}, 'warmup': <Object>[],
  // Within-process batches must not become independent statistical samples.
  'measurements': [
    {'totalUs': value * 2},
    {'totalUs': value * 4},
    {'totalUs': value * 6},
  ],
  'batchRepeats': 2, 'stable': true, 'validated': true,
};

void main() {
  test('calibration bounds slow engines without changing per-engine work', () {
    expect(calibratedRepeats([20000, 200], 10000), 12);
    expect(calibratedRepeats([200, 20000], 10000), 12);
    expect(calibratedRepeats([1, 2], 100), 100);
    expect(calibratedRepeats([300000, 400000], 100), 1);
  });
  test('schedule is deterministic, fixed-size cases occur once, engine order alternates', () {
    final a = combinations(['array.sort', 'bundle', 'memory.one'], sizes);
    expect(a, combinations(['array.sort', 'bundle', 'memory.one'], sizes));
    expect(a.length, 5);
    expect(a.where((e) => e.name == 'bundle').length, 1);
    expect(engineOrder(['hermes', 'v8'], 0), ['hermes', 'v8']);
    expect(engineOrder(['hermes', 'v8'], 1), ['v8', 'hermes']);
  });
  test(
    'stability requires three windows and rejects drift or zero duration',
    () {
      expect(stable(List.filled(14, 1)), false);
      expect(stable(List.filled(15, 1)), true);
      expect(stable([...List.filled(10, 1.0), ...List.filled(5, 1.1)]), false);
      expect(stable(List.filled(15, 0)), false);
    },
  );
  test(
    'process medians, pair matching and confidence intervals are not pooled',
    () {
      final rows = summarize([
        for (var i = 0; i < 10; i++) fixture('hermes', i, 10),
        for (var i = 9; i >= 0; i--) fixture('v8', i, 5),
        fixture('v8', 100, 100000),
      ], smoke: false);
      final row = rows.singleWhere((r) => r['phase'] == 'measurements');
      expect((row['hermes']! as Map<String, Object>)['median'], 20);
      expect((row['hermes']! as Map<String, Object>)['processes'], 10);
      expect(row['pairedProcesses'], 10);
      expect(row['v8OverHermes'], 0.5);
      expect(row['ratio95'], [0.5, 0.5]);
      expect(pairedInterval(List.filled(10, 2), List.filled(10, 1)), [
        0.5,
        0.5,
      ]);
    },
  );
  test('smoke and small samples do not claim confidence intervals', () {
    final samples = [fixture('hermes', 0, 10), fixture('v8', 0, 5)];
    expect(
      summarize(
        samples,
        smoke: true,
      ).every((r) => !r.containsKey('v8OverHermes')),
      true,
    );
    expect(
      summarize(samples, smoke: false).every((r) => !r.containsKey('ratio95')),
      true,
    );
    expect(completeRun(2, samples, []), true);
    expect(completeRun(3, samples, []), false);
    expect(
      completeRun(2, samples, [
        {'error': 'timeout'},
      ]),
      false,
    );
  });
  test(
    'output rejects missing, duplicate, malformed and unvalidated samples',
    () {
      final valid = 'FLAX_BENCH:${jsonEncode(fixture('hermes', 0, 1))}';
      expect(decodeSample('diagnostic\n$valid')['validated'], true);
      for (final invalid in [
        '',
        '$valid\n$valid',
        'FLAX_BENCH:{}',
        'FLAX_BENCH:{invalid}',
        valid.replaceAll('true', 'false'),
      ]) {
        expect(() => decodeSample(invalid), throwsA(isA<FormatException>()));
      }
    },
  );
  test('timed-out workers are killed and nonzero exits fail', () async {
    await expectLater(
      capture('/bin/sleep', ['10'], timeout: const Duration(milliseconds: 50)),
      throwsA(isA<TimeoutException>()),
    );
    await expectLater(
      capture('/bin/sh', ['-c', 'exit 3']),
      throwsA(isA<ProcessException>()),
    );
  });
  test(
    'report template is offline and embedded JSON cannot close its script',
    () {
      final template = File('benchmarks/engines/report.html')
          .readAsStringSync();
      expect('__FLAX_REPORT_DATA__'.allMatches(template).length, 1);
      expect(template, isNot(contains('src="https://')));
      final data = jsonEncode({'error': '</script><script>alert(1)</script>'})
          .replaceAll('<', r'\u003c');
      expect(data, isNot(contains('</script>')));
      expect(jsonDecode(data), {'error': '</script><script>alert(1)</script>'});
    },
  );
}
