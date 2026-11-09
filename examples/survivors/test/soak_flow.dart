import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_survivors/main.dart' as app;
import 'package:flutter/services.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import 'canvas_probe.dart';
import 'native_audio_probe.dart';
import 'lifecycle_probe.dart';
import 'capture_frame.dart';
import 'ui_controls.dart';

Map<String, Object?> timingSummary(Iterable<num> values) {
  final sorted = values.map((v) => v.toDouble()).toList()..sort();
  double? percentile(double quantile) =>
      sorted.isEmpty ? null : sorted[((sorted.length - 1) * quantile).round()];
  return {
    'count': sorted.length,
    'p50Ms': percentile(.5),
    'p95Ms': percentile(.95),
    'p99Ms': percentile(.99),
    'above33_3Ms': sorted.where((v) => v > 33.3).length,
    'above50Ms': sorted.where((v) => v > 50).length,
  };
}

Map<String, Object?> submissionCadence(
  Iterable<({int frame, int vsync})> samples, {
  required int startVsync,
  required int endVsync,
  required Set<int> nativeFrameIds,
}) {
  final byFrame = {for (final sample in samples) sample.frame: sample.vsync};
  final stamps = byFrame.values.toList()..sort();
  final seconds = (endVsync - startVsync) / 1000000;
  final matched = byFrame.keys.where(nativeFrameIds.contains).toSet();
  return {
    'distinctFrames': byFrame.length,
    'matchedFrames': matched.length,
    'unmatchedFrames': byFrame.keys
        .where((id) => !nativeFrameIds.contains(id))
        .toList(),
    'startVsyncUs': startVsync,
    'endVsyncUs': endVsync,
    'windowSeconds': seconds,
    'firstCommitVsyncUs': stamps.isEmpty ? null : stamps.first,
    'lastCommitVsyncUs': stamps.isEmpty ? null : stamps.last,
    'matchedSubmissionsPerSecond': seconds <= 0
        ? null
        : matched.length / seconds,
    'minimumSubmissionsPerSecond': 57,
    'meaning': 'Canvas commits linked to native raster timings per full independent vsync window, including upgrade/pause UI; not display presentation',
  };
}

// Release native timings batch for 1s. Completion is a raster watermark, not a delay.
Future<void> waitForRasterMarker({
  required bool Function() observed,
  required Future<void> Function() advance,
  Duration timeout = const Duration(seconds: 8),
}) async {
  final clock = Stopwatch()..start();
  while (!observed()) {
    if (clock.elapsed >= timeout) {
      throw TimeoutException('Post-window raster marker missing', timeout);
    }
    await advance();
  }
}

bool meetsFrameTargets(Map<String, Object?> measurements) {
  Map stream(String key) => measurements[key] as Map? ?? const {};
  int count(String key) => stream(key)['count'] as int? ?? 0;
  final cadence = measurements['canvasSubmissionCadence'] as Map? ?? const {};
  final seconds = cadence['windowSeconds'] as num? ?? 0;
  final matched = cadence['matchedFrames'] as int? ?? 0;
  final distinct = cadence['distinctFrames'] as int? ?? 0;
  const requiredStreams = [
    'flutterUi',
    'flutterRaster',
    'frameCallbackIntervals',
    'jsUpdate',
    'jsDrawIncludingSynchronousCanvasCalls',
    'canvasCommitHostCallback',
  ];
  final complete = requiredStreams.every((key) => count(key) > 0);
  // Each sampled rAF updates once; each draw flushes Canvas, except at two boundaries.
  // The first callback after each explicit resume has no interval predecessor.
  final draws = count('jsDrawIncludingSynchronousCanvasCalls');
  final updates = count('jsUpdate');
  final starts = measurements['callbackStarts'] as int? ?? 1;
  final countsAgree =
      draws >= distinct - 2 &&
      draws <= count('canvasCommitHostCallback') + 2 &&
      updates >= draws &&
      count('frameCallbackIntervals') >= updates - starts;
  return complete &&
      countsAgree &&
      seconds > 0 &&
      matched > 0 &&
      measurements['nativeRasterMarkerObserved'] == true &&
      measurements['diagnosticsOverflow'] == false &&
      ((cadence['matchedSubmissionsPerSecond'] as num?) ?? 0) >= 57 &&
      ((stream('flutterUi')['p95Ms'] as num?) ?? double.infinity) < 16.7 &&
      ((stream('flutterRaster')['p95Ms'] as num?) ?? double.infinity) < 16.7 &&
      ((stream('frameCallbackIntervals')['p99Ms'] as num?) ?? double.infinity) <
          33.4;
}

bool meetsPeakTargets(Map<String, Object?> measurements) =>
    measurements['audioHealthy'] == true &&
    (measurements['measuredPulseActivations'] as int? ?? 0) >= 8 &&
    (measurements['measuredBoltProjectiles'] as int? ?? 0) >= 5 &&
    (measurements['measuredBoltVolleys'] as int? ?? 0) >= 1 &&
    meetsFrameTargets(measurements);

Future<Map<String, Object?>> soakFlow(
  WidgetTester tester, {
  required Map<String, Object?> report,
}) async {
  report.addAll({
    'os': Platform.operatingSystem,
    'osVersion': Platform.operatingSystemVersion,
    'framePolicy': 'benchmarkLive',
    'performanceTargetsPassed': false,
  });
  final binding = tester.binding;
  expect(binding, isA<SurvivorsObserverTracking>());
  final observers = binding as SurvivorsObserverTracking;
  final images = SurvivorsImageProbe();
  addTearDown(images.close);
  final directory = (await tester.runAsync(
    () => Directory.systemTemp.createTemp('survivors-soak-'),
  ))!;
  FlaxJsRuntime? runtime;
  FocusNode? gameFocus;
  final canvas = CanvasProbe(images: images);
  final previousAudio = AudioplayersPlatformInterface.instance;
  final audio = NativeAudioProbe();
  AudioplayersPlatformInterface.instance = audio;
  addTearDown(() {
    report['nativeAudio'] = {
      ...audio.preparationStatus,
      'created': audio.created,
      'disposeCompleted': audio.disposed,
      'live': audio.live.toList(),
      'errors': audio.errors,
      'sourceErrors': audio.sourceErrors,
      'playbackErrors': audio.playbackErrors,
      'sourceEvents': audio.sourceEvents,
      'sourceEventCount': audio.sourceEventCount,
      'sourceEventWindow':
          'bounded ring of 1024; first anomaly context frozen separately',
    };
    AudioplayersPlatformInterface.instance = previousAudio;
  });
  Map<String, dynamic> snapshot({bool samples = false}) => jsonDecode(
    (runtime!.evaluate(
      samples ? 'JSON.stringify(globalThis.__survivorsAcceptance.snapshot())' : 'JSON.stringify((()=>{const {diagnostics,...state}=globalThis.__survivorsAcceptance.snapshot();return state;})())',
    ) as FlaxJsString).value,
  ) as Map<String, dynamic>;
  void command(String name) => runtime!.evaluate(
    'globalThis.__survivorsAcceptance.command(${jsonEncode(name)})',
  );
  Map<String, dynamic> pilot() => jsonDecode(
    (runtime!.evaluate(
      'JSON.stringify(globalThis.__survivorsAcceptance.pilot())',
    ) as FlaxJsString).value,
  ) as Map<String, dynamic>;
  Future<void> until(bool Function() ready) async {
    for (var i = 0; i < 300; i++) {
      await tester.pump(const Duration(milliseconds: 20));
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 10)),
      );
      if (ready()) return;
    }
    fail('Soak transition/resource cleanup timed out');
  }

  Future<void> tap(String text) async {
    final finder = text == 'Pause' ? find.byTooltip(text) : find.text(text);
    await until(() => finder.evaluate().isNotEmpty);
    await tester.tap(finder.first);
    await tester.pump(const Duration(milliseconds: 20));
  }

  Map<String, Object?> resources() => {
    ...images.snapshot(),
    'observers': observers.trackedObservers.length,
    'lifecycleObservers': observers.trackedObservers
        .whereType<AppLifecycleListener>()
        .length,
    'focusNodes': FocusManager.instance.rootScope.descendants.length,
  };
  Map<String, Object?> memory() => {
    'rssBytes': ProcessInfo.currentRss,
    'handlesAndRegistrations': resources(),
    'nativeAudioLive': audio.live.length,
  };
  Map<String, Object?> audioSummary() => {
    for (final key in [
      'sourceStarts',
      'preparedResumed',
      'preparedCancelled',
      'abortedPreparations',
      'failedPreparations',
      'pendingPreparations',
      'pendingSources',
      'pendingPlayback',
      'positionCalls',
      'sourceErrors',
    ])
      key: audio.preparationStatus[key],
  };

  Future<bool> healthyAudio(Map<String, Object?> measurements) async {
    // Settle only after the complete timing window, including its final audio cue.
    for (
      var i = 0;
      i < 100 &&
          (!audio.preparationsSettled ||
              audio.pendingSources != 0 ||
              audio.pendingPlayback != 0);
      i++
    ) {
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 10)),
      );
      await tester.pump(const Duration(milliseconds: 20));
    }
    final status = snapshot()['audioStatus'];
    final healthy =
        status == '' &&
        audio.preparationsSettled &&
        audio.pendingSources == 0 &&
        audio.pendingPlayback == 0 &&
        audio.sourceErrors.isEmpty &&
        audio.errors.isEmpty &&
        audio.playbackErrors.isEmpty;
    measurements.addAll({
      'audioStatus': status,
      'audioHealthy': healthy,
      'nativeAudioAfterDrain': audio.preparationStatus,
    });
    return healthy;
  }

  Future<void> mount() async {
    final createdBefore = audio.created.length;
    await tester.runAsync(
      () => app.startApplication(
        storageDirectory: directory.path,
        canvasPlugin: canvas,
        createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
      ),
    );
    await selectSurvivorsEnglish(tester, enableFps: true);
    await until(() => find.text('Start').evaluate().isNotEmpty);
    command('balancedFixture');
    command('stopDiagnostics');
    await until(() => audio.created.length == createdBefore + 5);
    gameFocus = tester
        .widget<KeyboardListener>(find.byType(KeyboardListener))
        .focusNode;
    expect(gameFocus!.context, isNotNull);
  }

  Future<void> unmount() async {
    await tester.pumpWidget(const SizedBox.shrink());
    await until(
      () =>
          runtime!.isDisposed &&
          audio.live.isEmpty &&
          audio.disposed.length == audio.created.length &&
          audio.pendingSources == 0 &&
          audio.pendingPlayback == 0 &&
          audio.pendingPositions == 0 &&
          audio.preparationsSettled &&
          (gameFocus!.context?.mounted ?? false) == false,
    );
    expect(gameFocus!.parent, isNull);
    expect(
      FocusManager.instance.rootScope.descendants.contains(gameFocus),
      isFalse,
    );
    expect(audio.errors, isEmpty);
    expect(audio.playbackErrors, isEmpty);
    expect(audio.sourceErrors, isEmpty);
    expect(
      audio.positionCalls,
      0,
      reason: 'Unused position updater must stay disabled',
    );
    expect(audio.disposed.toSet(), audio.created.toSet());
    expect(audio.disposed.length, audio.disposed.toSet().length);
    await completeSurvivorsIo(tester, FlaxLocalStoragePlugin.shutdown);
  }

  // Warm the equivalent empty scene before comparing explicit handle/registration deltas.
  await mount();
  await tap('Start');
  await unmount();
  await tester.pump(const Duration(milliseconds: 100));
  final baseline = resources();
  final emptySceneRss = ProcessInfo.currentRss;
  report['baseline'] = baseline;
  report['emptySceneRssBytes'] = emptySceneRss;
  final cycles = <Map<String, Object?>>[];
  report['cycles'] = cycles;
  for (var cycle = 0; cycle < 20; cycle++) {
    await mount();
    await tap('Start');
    final mounted = resources();
    expect(
      mounted['live'] as int,
      greaterThanOrEqualTo((baseline['live'] as int) + 4),
    );
    expect(
      mounted['inputs'] as int,
      greaterThanOrEqualTo((baseline['inputs'] as int) + 2),
    );
    expect(
      mounted['baked'] as int,
      greaterThanOrEqualTo((baseline['baked'] as int) + 2),
    );
    expect(
      mounted['lifecycleObservers'] as int,
      greaterThan(baseline['lifecycleObservers'] as int),
    );
    await unmount();
    await until(() {
      final now = resources();
      return [
        'live',
        'inputs',
        'baked',
        'retained',
        'bitmapOutcomesBalanced',
        'observers',
        'lifecycleObservers',
        'focusNodes',
      ].every((key) => now[key] == baseline[key]);
    });
    cycles.add({
      'cycle': cycle + 1,
      'mounted': mounted,
      'afterUnmount': memory(),
    });
  }
  await mount();
  await tap('Start');
  report['sceneMemory'] = {
    'emptySceneRssBytes': emptySceneRss,
    'mountedRssBytes': ProcessInfo.currentRss,
    'rssDeltaBytes': ProcessInfo.currentRss - emptySceneRss,
    'meaning':
        'process RSS delta from warmed empty scene, not isolated GPU heap',
  };
  final nativeFrames = <FrameTiming>[];
  var collecting = false, startFrame = 0, endFrame = 0;
  var startVsync = 0, endVsync = 0, callbackStarts = 1;
  var startPeakBolts = 0, startPeakVolleys = 0;
  Map<String, Object?>? startMemory, startGeometry;
  var startOperations = <String, int>{}, endOperations = <String, int>{};
  void onTimings(List<FrameTiming> frames) {
    if (collecting) nativeFrames.addAll(frames);
  }

  binding.addTimingsCallback(onTimings);
  addTearDown(() => binding.removeTimingsCallback(onTimings));
  Map<String, Object?> metadata() {
    final state = snapshot();
    final viewport = state['viewport'] as Map;
    final safeUI = survivorsSafeUiRect();
    return {
      'logicalViewportAspect':
          (viewport['width'] as num) / (viewport['height'] as num),
      'os': Platform.operatingSystem,
      'osVersion': Platform.operatingSystemVersion,
      'displayRefreshRate':
          binding.platformDispatcher.views.first.display.refreshRate,
      'quality': (state['profile'] as Map)['quality'],
      'seed': state['seed'],
      'contentVersion': state['contentVersion'],
      'logicalViewport': state['viewport'],
      'safeUIRect': {
        'left': safeUI.left,
        'top': safeUI.top,
        'width': safeUI.width,
        'height': safeUI.height,
      },
      'camera': state['camera'],
      'canvas': state['canvas'],
      'framePolicy': 'benchmarkLive',
    };
  }

  Future<void> frameBoundary(void Function() action) async {
    var done = false;
    binding.addPostFrameCallback((_) {
      action();
      done = true;
    });
    binding.scheduleFrame();
    await until(() => done);
  }

  Future<void> beginWindow() async {
    await frameBoundary(() {
      canvas.recordCommits = true;
      command('resetDiagnostics');
      startFrame = binding.platformDispatcher.frameData.frameNumber;
      startVsync =
          SchedulerBinding.instance.currentSystemFrameTimeStamp.inMicroseconds;
      final peakCounts = (snapshot()['peak'] as Map)['counts'] as Map;
      startPeakBolts = peakCounts['boltProjectiles'] as int? ?? 0;
      startPeakVolleys = peakCounts['boltVolleys'] as int? ?? 0;
      endFrame = 0;
      callbackStarts = 1;
      nativeFrames.clear();
      canvas.commits.clear();
      startOperations = Map.of(canvas.operations);
      startMemory = memory();
      final initial = metadata();
      startGeometry = {
        for (final key in ['logicalViewport', 'safeUIRect', 'camera', 'canvas'])
          key: initial[key],
      };
      report.addAll(initial);
      report['currentWindowStartFrame'] = startFrame;
      report['currentWindowStartVsyncUs'] = startVsync;
      report['currentWindowStartMemory'] = startMemory;
      collecting = true;
    });
  }

  Future<Map<String, Object?>> endWindow() async {
    var endPeakBolts = 0, endPeakVolleys = 0;
    await frameBoundary(() {
      command('stopDiagnostics');
      endFrame = binding.platformDispatcher.frameData.frameNumber;
      endVsync =
          SchedulerBinding.instance.currentSystemFrameTimeStamp.inMicroseconds;
      final peakCounts = (snapshot()['peak'] as Map)['counts'] as Map;
      endPeakBolts = peakCounts['boltProjectiles'] as int? ?? 0;
      endPeakVolleys = peakCounts['boltVolleys'] as int? ?? 0;
      canvas.recordCommits = false;
      endOperations = Map.of(canvas.operations);
    });
    int? marker;
    // Dirty a real Flutter layer after the interval, then drain through its raster ID.
    tester
        .renderObject<RenderObject>(find.byType(RepaintBoundary).first)
        .markNeedsPaint();
    await frameBoundary(() {
      marker = binding.platformDispatcher.frameData.frameNumber;
    });
    expect(marker, greaterThan(endFrame));
    report['nativeRasterMarker'] = marker;
    report['nativeRasterMarkerObserved'] = false;
    TimeoutException? drainError;
    try {
      await waitForRasterMarker(
        observed: () =>
            nativeFrames.any((frame) => frame.frameNumber == marker),
        advance: () async {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 20)),
          );
          await tester.pump();
        },
      );
    } on TimeoutException catch (error) {
      drainError = error;
    } finally {
      collecting = false;
      report['nativeRasterMarkerObserved'] = nativeFrames.any(
        (frame) => frame.frameNumber == marker,
      );
      report['lastNativeTimingFrame'] = nativeFrames.isEmpty
          ? null
          : nativeFrames
                .map((frame) => frame.frameNumber)
                .reduce((a, b) => a > b ? a : b);
    }
    final state = snapshot(samples: true), js = state['diagnostics'] as Map;
    final commits = canvas.commits
        .where(
          (s) =>
              s.frame > startFrame &&
              s.frame <= endFrame &&
              s.vsync > startVsync &&
              s.vsync <= endVsync,
        )
        .toList();
    final frames = nativeFrames
        .where(
          (frame) =>
              frame.frameNumber > startFrame && frame.frameNumber <= endFrame,
        )
        .toList();
    final frameIds = frames.map((f) => f.frameNumber).toSet();
    return {
      ...metadata(),
      'startFrame': startFrame,
      'endFrame': endFrame,
      'startVsyncUs': startVsync,
      'endVsyncUs': endVsync,
      'windowPolicy': 'full declared window including upgrade/pause UI',
      'showFps': (snapshot()['profile'] as Map)['showFps'],
      'fps': snapshot()['fps'],
      'startMemory': startMemory,
      'endMemory': memory(),
      'startGeometry': startGeometry,
      'nativeRasterMarker': marker,
      'nativeRasterMarkerObserved': report['nativeRasterMarkerObserved'],
      if (drainError != null) 'nativeDrainError': '$drainError',
      'firstNativeTimingFrame': frames.isEmpty
          ? null
          : frames.first.frameNumber,
      'lastNativeTimingFrame': frames.isEmpty ? null : frames.last.frameNumber,
      'diagnosticsOverflow': js['overflow'],
      'callbackStarts': callbackStarts,
      'peakBoltObservations': {
        'startProjectiles': startPeakBolts,
        'endProjectiles': endPeakBolts,
        'startVolleys': startPeakVolleys,
        'endVolleys': endPeakVolleys,
      },
      'measuredBoltProjectiles': endPeakBolts - startPeakBolts,
      'measuredBoltVolleys': endPeakVolleys - startPeakVolleys,
      'boundaryDrawAllowance': 2,
      'canvasHostOperationCounts': {
        for (final entry in endOperations.entries)
          entry.key: entry.value - (startOperations[entry.key] ?? 0),
      },
      'flutterUi': timingSummary(
        frames.map((f) => f.buildDuration.inMicroseconds / 1000),
      ),
      'flutterRaster': timingSummary(
        frames.map((f) => f.rasterDuration.inMicroseconds / 1000),
      ),
      'jsUpdate': timingSummary((js['update'] as List).cast<num>()),
      'jsDrawIncludingSynchronousCanvasCalls': timingSummary(
        (js['draw'] as List).cast<num>(),
      ),
      'frameCallbackIntervals': timingSummary(
        (js['interval'] as List).cast<num>(),
      ),
      'canvasCommitHostCallback': timingSummary(
        commits.map((s) => s.milliseconds),
      ),
      'canvasSubmissionCadence': submissionCadence(
        commits.map((s) => (frame: s.frame, vsync: s.vsync)),
        startVsync: startVsync,
        endVsync: endVsync,
        nativeFrameIds: frameIds,
      ),
      'uiCounts': state['uiCounts'],
      'nativeAudio': audio.preparationStatus,
      'elapsedCombatSeconds': (state['tick'] as int) / 60,
      'phase': state['phase'],
      'hp': state['hp'],
      'guardiansDefeated': state['guardiansDefeated'],
    };
  }

  command('peakFixture');
  final peakCaptures = <Map<String, Object?>>[];
  Future<void> capturePulse(String stage, Map<String, dynamic> state) async {
    final path = await captureSurvivorsFrame(tester, 'newpolish-pulse-$stage');
    peakCaptures.add({
      'stage': stage,
      'path': path,
      'requestedAtTick': state['tick'],
      'requestedAtPulseCooldown': state['pulseCooldown'],
      'measurementIncludesCaptureCost': false,
    });
  }

  Future<List<Map<String, Object?>>> ticks(
    int count, {
    bool captureWarmup = false,
  }) async {
    var state = snapshot();
    final first = state['tick'] as int;
    final bound = Stopwatch()..start();
    final activations = <Map<String, Object?>>[];
    int? requestedTick;
    var capturedRelease = false, capturedCharging = false;
    if (captureWarmup) await capturePulse('ready', state);
    while (true) {
      final tick = state['tick'] as int;
      final cooldown = state['pulseCooldown'] as num;
      if (requestedTick != null && tick > requestedTick) {
        expect(
          cooldown,
          greaterThan(0),
          reason: 'A ready peak pulse keypress must reset the actual cooldown',
        );
        activations.add({
          'requestedAtTick': requestedTick,
          'observedAtTick': tick,
          'cooldownBefore': 0,
          'cooldownAfter': cooldown,
        });
        requestedTick = null;
        if (captureWarmup && !capturedRelease) {
          capturedRelease = true;
          await capturePulse('release', state);
        }
      }
      if (captureWarmup &&
          capturedRelease &&
          !capturedCharging &&
          cooldown > 0 &&
          cooldown <= 1) {
        capturedCharging = true;
        await capturePulse('late-charging', state);
      }
      if (tick - first >= count) break;
      if (bound.elapsed > const Duration(minutes: 4)) {
        fail('Peak did not advance');
      }
      if (cooldown <= 0 && requestedTick == null) {
        requestedTick = tick;
        await tester.sendKeyDownEvent(
          LogicalKeyboardKey.space,
          physicalKey: PhysicalKeyboardKey.space,
        );
        await tester.sendKeyUpEvent(
          LogicalKeyboardKey.space,
          physicalKey: PhysicalKeyboardKey.space,
        );
      }
      // Observe ordinary input at 10 Hz; native rendering and its timing gates stay live.
      await tester.pump(const Duration(milliseconds: 100));
      state = snapshot();
    }
    return activations;
  }

  final warmupPulses = await ticks(30 * 60, captureWarmup: true);
  expect(peakCaptures, hasLength(3));
  await beginWindow();
  final measuredPulses = await ticks(60 * 60);
  await tap('Pause');
  final peak = await endWindow();
  peak['fixture'] = snapshot()['peak'];
  peak['warmupCombatSeconds'] = 30;
  peak['measuredCombatSeconds'] = 60;
  peak['warmupPulseActivations'] = warmupPulses.length;
  peak['measuredPulseActivations'] = measuredPulses.length;
  peak['measuredPulseActivationEvents'] = measuredPulses;
  peak['warmupCaptures'] = peakCaptures;
  command('stopPeakFixture');
  await healthyAudio(peak);
  // ignore: avoid_print
  print(
    'FLAX_SURVIVORS_PEAK_SUMMARY:${jsonEncode({'passed': meetsPeakTargets(peak), 'audioHealthy': peak['audioHealthy'], 'audioStatus': peak['audioStatus'], 'pulseActivations': peak['measuredPulseActivations'], 'boltProjectiles': peak['measuredBoltProjectiles'], 'boltVolleys': peak['measuredBoltVolleys'], 'cadence': peak['canvasSubmissionCadence'], 'ui': peak['flutterUi'], 'raster': peak['flutterRaster'], 'audio': audioSummary()})}',
  );
  final base = <String, Object?>{
    ...report,
    ...metadata(),
    'mountUnmountCycles': 20,
    'baseline': baseline,
    'cycles': cycles,
    'peak': peak,
  };
  report.addAll(base);
  if (!meetsPeakTargets(peak)) {
    await unmount();
    await tester.runAsync(() => directory.delete(recursive: true));
    return {
      ...base,
      'activeCombatSeconds': 0,
      'performanceTargetsPassed': false,
      'stopReason': 'Peak missed audio health, actual Pulse/five-bolt volleys or required streams/cadence/timing targets before long run',
    };
  }
  // An endless run uses a declared window from Start, never a selected rolling tail.
  await beginWindow();
  await tap('Restart');
  final wall = Stopwatch()..start();
  var activeTicks = 0, previousTick = 0, naturalDefeats = 0;
  var guardianClears = 0, previousGuardianClears = 0;
  Map<String, Object?>? normal;
  final captures = <Map<String, Object?>>[];
  var capturedNormal = false;
  final held = <LogicalKeyboardKey>{};
  final physical = {
    LogicalKeyboardKey.keyD: PhysicalKeyboardKey.keyD,
    LogicalKeyboardKey.keyS: PhysicalKeyboardKey.keyS,
    LogicalKeyboardKey.keyA: PhysicalKeyboardKey.keyA,
    LogicalKeyboardKey.keyW: PhysicalKeyboardKey.keyW,
  };
  Future<void> releaseKeys() async {
    for (final key in held) {
      await tester.sendKeyUpEvent(key, physicalKey: physical[key]!);
    }
    held.clear();
  }

  while (activeTicks < 1800 * 60 || normal == null) {
    if (wall.elapsed > const Duration(minutes: 45)) {
      fail('Active combat soak exceeded 45-minute wall bound');
    }
    for (var i = 0; i < 3; i++) {
      await tester.pump(const Duration(milliseconds: 20));
    }
    final state = pilot(), tick = state['tick'] as int, phase = state['phase'];
    if (tick >= previousTick) activeTicks += tick - previousTick;
    previousTick = tick;
    final clears = state['guardiansDefeated'] as int;
    guardianClears += clears - previousGuardianClears;
    previousGuardianClears = clears;
    if (!capturedNormal &&
        normal == null &&
        phase == 'playing' &&
        tick >= 300 * 60) {
      capturedNormal = true;
      final state = snapshot();
      final path = await captureSurvivorsFrame(
        tester,
        'normal-$tick-seed-${state['seed']}',
      );
      captures.add({
        'path': path,
        'tick': tick,
        'seed': state['seed'],
        'frame': binding.platformDispatcher.frameData.frameNumber,
        'measurementIncludesCaptureCost': true,
      });
    }
    if (phase != 'playing') {
      await releaseKeys();
    }
    if (phase == 'upgrade') {
      final index = state['upgradeIndex'] as int;
      await until(() => survivorsUpgrade(index).evaluate().isNotEmpty);
      await tester.tap(survivorsUpgrade(index));
      callbackStarts++;
    } else if (phase == 'paused') {
      await tap('Resume');
      callbackStarts++;
    } else if (phase == 'lost') {
      naturalDefeats++;
      if (normal == null) {
        final candidate = await endWindow();
        await healthyAudio(candidate);
        report.addAll({
          'normal': candidate,
          'activeCombatSeconds': activeTicks / 60,
          'naturalDefeats': naturalDefeats,
          'performanceTargetsPassed': false,
          'stopReason': 'Ordinary run lost before the declared 600-active-second window completed',
        });
        await unmount();
        await tester.runAsync(() => directory.delete(recursive: true));
        return report;
      }
      await tap('Restart');
      previousTick = 0;
      previousGuardianClears = 0;
    } else if (normal == null && tick >= 600 * 60) {
      await releaseKeys();
      await tap('Pause');
      final candidate = await endWindow();
      candidate['declaredActiveSeconds'] = 600;
      candidate['windowPolicy'] = 'ordinary Start through 600 active seconds, including upgrade/pause UI';
      final healthy = await healthyAudio(candidate);
      final survived =
          (candidate['hp'] as num) > 0 &&
          (candidate['elapsedCombatSeconds'] as num) >= 600 &&
          (candidate['guardiansDefeated'] as int) >= 2;
      // ignore: avoid_print
      print(
        'FLAX_SURVIVORS_NORMAL_SUMMARY:${jsonEncode({'passed': meetsFrameTargets(candidate) && healthy && survived, 'audioHealthy': healthy, 'guardiansDefeated': candidate['guardiansDefeated'], 'activeSeconds': candidate['elapsedCombatSeconds'], 'cadence': candidate['canvasSubmissionCadence'], 'ui': candidate['flutterUi'], 'raster': candidate['flutterRaster'], 'uiCounts': candidate['uiCounts'], 'audio': audioSummary()})}',
      );
      if (!meetsFrameTargets(candidate) || !healthy || !survived) {
        report.addAll({
          'normal': candidate,
          'activeCombatSeconds': activeTicks / 60,
          'guardianClears': guardianClears,
          'performanceTargetsPassed': false,
          'stopReason': 'Declared endless window missed survival, guardian, timing or audio targets',
        });
        await unmount();
        await tester.runAsync(() => directory.delete(recursive: true));
        return report;
      }
      normal = candidate;
      report['normal'] = normal;
      await tap('Resume');
      callbackStarts++;
    } else {
      final desired = <LogicalKeyboardKey>{
        if ((state['x'] as num) > .3) LogicalKeyboardKey.keyD,
        if ((state['x'] as num) < -.3) LogicalKeyboardKey.keyA,
        if ((state['y'] as num) > .3) LogicalKeyboardKey.keyS,
        if ((state['y'] as num) < -.3) LogicalKeyboardKey.keyW,
      };
      for (final key in held.difference(desired)) {
        await tester.sendKeyUpEvent(key, physicalKey: physical[key]!);
      }
      for (final key in desired.difference(held)) {
        await tester.sendKeyDownEvent(key, physicalKey: physical[key]!);
      }
      held
        ..clear()
        ..addAll(desired);
      if (state['pulse'] == true) {
        await tester.sendKeyDownEvent(
          LogicalKeyboardKey.space,
          physicalKey: PhysicalKeyboardKey.space,
        );
        await tester.sendKeyUpEvent(
          LogicalKeyboardKey.space,
          physicalKey: PhysicalKeyboardKey.space,
        );
      }
    }
  }
  await releaseKeys();
  final transitions = <Map<String, Object?>>[];
  for (var i = 0; i < 3; i++) {
    while (pilot()['phase'] == 'upgrade') {
      await tester.tap(survivorsUpgrade(pilot()['upgradeIndex'] as int));
      await tester.pump(const Duration(milliseconds: 20));
    }
    if (pilot()['phase'] == 'paused') await tap('Resume');
    command('loseFixture');
    await until(() => snapshot()['phase'] == 'lost');
    final terminal = snapshot();
    expect(terminal['hp'], 0);
    final settlement = <String, Object?>{};
    expect(await healthyAudio(settlement), isTrue);
    transitions.add({
      'transition': i + 1,
      'source': 'explicit health-zero fixture after active soak',
      'includedInActiveCombatSeconds': false,
      'tick': terminal['tick'],
      'guardiansDefeated': terminal['guardiansDefeated'],
      'audioHealthy': settlement['audioHealthy'],
    });
    await tap('Restart');
    expect(snapshot()['phase'], 'playing');
  }
  await tap('Pause');
  report.addAll({
    ...base,
    'normal': normal,
    'captures': captures,
    'activeCombatSeconds': activeTicks / 60,
    'wallSeconds': wall.elapsedMilliseconds / 1000,
    'naturalDefeats': naturalDefeats,
    'guardianClears': guardianClears,
    'healthZeroRestartTransitions': transitions,
    'nativeAudio': {
      'created': audio.created,
      'disposeCompleted': audio.disposed,
      'sourceErrors': audio.sourceErrors,
    },
    'performanceTargetsPassed':
        normal['audioHealthy'] == true && meetsFrameTargets(normal),
    'notCovered': [
      'display presentation latency',
      'native GPU heap retention',
      'physical background interruption',
    ],
  });
  await unmount();
  await tester.runAsync(() => directory.delete(recursive: true));
  return report;
}
