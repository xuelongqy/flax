import 'dart:async';

import 'package:flutter_test/flutter_test.dart';

import 'soak_flow.dart';

Map<String, Object?> window({
  int commits = 3600,
  int native = 3600,
  int seconds = 60,
  bool marker = true,
  Set<int>? nativeIds,
  int? jsDraws,
}) {
  final ids = nativeIds ?? {for (var i = 1; i <= native; i++) i * 3};
  Map<String, Object?> summary(int count, [num value = 1]) =>
      timingSummary(List.filled(count, value));
  return {
    'nativeRasterMarkerObserved': marker,
    'diagnosticsOverflow': false,
    'callbackStarts': 1,
    'canvasSubmissionCadence': submissionCadence(
      List.generate(
        commits,
        (i) => (frame: (i + 1) * 3, vsync: ((i + 1) * 1000000 / 60).round()),
      ),
      startVsync: 0,
      endVsync: seconds * 1000000,
      nativeFrameIds: ids,
    ),
    'flutterUi': summary(native),
    'flutterRaster': summary(native),
    'canvasCommitHostCallback': summary(commits),
    'jsUpdate': summary(commits),
    'jsDrawIncludingSynchronousCanvasCalls': summary(jsDraws ?? commits),
    'frameCallbackIntervals': summary(commits > 0 ? commits - 1 : 0, 16.67),
  };
}

void main() {
  test('peak requires healthy audio, actual Pulse/bolt activations and every frame target', () {
    expect(meetsPeakTargets(window()), isFalse);
    final peak = window()
      ..['audioHealthy'] = true
      ..['measuredPulseActivations'] = 0
      ..['measuredBoltProjectiles'] = 5
      ..['measuredBoltVolleys'] = 1;
    expect(meetsPeakTargets(peak), isFalse);
    peak['measuredPulseActivations'] = 7;
    expect(meetsPeakTargets(peak), isFalse);
    peak['measuredPulseActivations'] = 8;
    expect(meetsPeakTargets(peak), isTrue);
    peak['audioHealthy'] = false;
    expect(meetsPeakTargets(peak), isFalse);
    peak.remove('audioHealthy');
    expect(meetsPeakTargets(peak), isFalse);
    peak['audioHealthy'] = true;
    peak['nativeRasterMarkerObserved'] = false;
    expect(meetsPeakTargets(peak), isFalse);
    expect(
      meetsPeakTargets(
        window(commits: 2400)
          ..['audioHealthy'] = true
          ..['measuredPulseActivations'] = 8
          ..['measuredBoltProjectiles'] = 5
          ..['measuredBoltVolleys'] = 1,
      ),
      isFalse,
    );
  });

  test(
    'peak requires a complete real five-bolt volley inside the measured window',
    () {
      final peak = window()
        ..['audioHealthy'] = true
        ..['measuredPulseActivations'] = 8
        ..['warmupBoltProjectiles'] = 500
        ..['warmupBoltVolleys'] = 100
        ..['shotEvents'] = 300;
      expect(meetsPeakTargets(peak), isFalse);
      peak['measuredBoltProjectiles'] = 4;
      peak['measuredBoltVolleys'] = 1;
      expect(meetsPeakTargets(peak), isFalse);
      peak['measuredBoltProjectiles'] = 5;
      peak['measuredBoltVolleys'] = 0;
      expect(meetsPeakTargets(peak), isFalse);
      peak['measuredBoltVolleys'] = 1;
      expect(meetsPeakTargets(peak), isTrue);
      peak.remove('measuredBoltProjectiles');
      expect(meetsPeakTargets(peak), isFalse);
      peak['measuredBoltProjectiles'] = 5;
      peak.remove('measuredBoltVolleys');
      expect(meetsPeakTargets(peak), isFalse);
    },
  );

  test(
    'whole-window linked cadence rejects sparse head/tail despite fast CPU',
    () {
      expect(meetsFrameTargets(window()), isTrue);
      final sparse = window(
        commits: 2,
        native: 10,
        nativeIds: {for (var i = 20; i < 30; i++) i},
      );
      expect(
        (sparse['canvasSubmissionCadence']
            as Map)['matchedSubmissionsPerSecond'],
        0,
      );
      expect(meetsFrameTargets(sparse), isFalse);
      final earlyLinked = window(commits: 2);
      expect(meetsFrameTargets(earlyLinked), isFalse);
      // Forty seconds of rendering and twenty seconds of pause remain sixty seconds.
      final paused = window(commits: 2400);
      expect(
        (paused['canvasSubmissionCadence']
            as Map)['matchedSubmissionsPerSecond'],
        40,
      );
      expect(meetsFrameTargets(paused), isFalse);
      expect(meetsFrameTargets(window(jsDraws: 1)), isFalse);
      expect(meetsFrameTargets(window(native: 0)), isFalse);
      expect(meetsFrameTargets(window(marker: false)), isFalse);
      final overflowing = window()..['diagnosticsOverflow'] = true;
      expect(meetsFrameTargets(overflowing), isFalse);
      final slow = window()..['flutterUi'] = timingSummary([16.7]);
      expect(meetsFrameTargets(slow), isFalse);
      expect(timingSummary([])['p95Ms'], isNull);
      final spikes = timingSummary([50, 16, 51, 34, 10]);
      expect(spikes['above33_3Ms'], 3);
      expect(spikes['above50Ms'], 1);
    },
  );

  test('late 1.1s native tail is retained through raster marker; missing marker fails', () async {
    final received = <int>{};
    final tail = Timer(const Duration(milliseconds: 1100), () {
      received.addAll({for (var i = 1; i <= 3601; i++) i * 3});
    });
    addTearDown(tail.cancel);
    final measurements = window(nativeIds: received, marker: false);
    expect(meetsFrameTargets(measurements), isFalse);
    await waitForRasterMarker(
      observed: () => received.contains(3601 * 3),
      advance: () => Future<void>.delayed(const Duration(milliseconds: 10)),
      timeout: const Duration(seconds: 2),
    );
    expect(received, hasLength(3601));
    expect(meetsFrameTargets(window(nativeIds: received)), isTrue);
    await expectLater(
      waitForRasterMarker(
        observed: () => false,
        advance: () => Future<void>.delayed(const Duration(milliseconds: 10)),
        timeout: const Duration(milliseconds: 40),
      ),
      throwsA(isA<TimeoutException>()),
    );
  });
}
