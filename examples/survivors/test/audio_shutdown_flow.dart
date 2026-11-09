import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_survivors/main.dart' as app;
import 'package:flax_test/flax_test.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import 'ui_controls.dart';
import 'audio_io_probe.dart';

void main() {
  test('release mode cancels the fake native prepared callback', () async {
    final platform = _GatedAudioPlatform('effect');
    await platform.create('fixture');
    final events = <AudioEvent>[];
    final subscription = platform.getEventStream('fixture').listen(events.add);
    await platform.setSourceBytes('fixture', Uint8List(1));
    expect(platform.sourceCompleted, ['fixture']);
    await platform.stop('fixture');
    platform.releaseGate();
    await Future<void>.delayed(Duration.zero);
    expect(platform.cancelledPreparations, ['fixture']);
    expect(
      events.where((event) => event.eventType == AudioEventType.prepared),
      isEmpty,
    );
    await subscription.cancel();
    await platform.dispose('fixture');
    await platform.close();
  });
  test('requested removal is distinct from actual owner disposal', () async {
    final platform = _GatedAudioPlatform('none');
    var alive = true;
    platform.ownerAlive = () => alive;
    await platform.create('boundary');
    platform.removalRequested = true;
    await platform.resume('boundary');
    expect(platform.resumedDuringRemovalRequest, ['boundary']);
    expect(platform.resumedAfterUnmount, isEmpty);
    alive = false;
    await platform.resume('boundary');
    expect(
      platform.resumedAfterUnmount,
      ['boundary'],
      reason: 'An owner-disposed request remains forbidden while native ID is still live',
    );
    expect(
      () => platform.expectHealthyOwnership(),
      throwsA(isA<TestFailure>()),
    );
    await platform.dispose('boundary');
    await platform.close();
  });
  test(
    'unreadable and missing owner markers cannot hide backend attempts',
    () async {
      for (final missing in [false, true]) {
        final platform = _GatedAudioPlatform('none');
        await platform.create('boundary');
        platform.removalRequested = true;
        platform.ownerAlive = missing
            ? null
            : () => throw StateError('closed owner');
        await platform.resume('boundary').catchError((Object _) {});
        await platform.create('late-create').catchError((Object _) {});
        expect(platform.resumeAttemptCount, 1);
        expect(platform.createAttemptCount, 2);
        expect(platform.ownerReadErrorCount, 2);
        expect(
          platform.entryBoundaries.every(
            (entry) => entry['ownerStatus'] == 'unreadable',
          ),
          isTrue,
        );
        expect(
          () => platform.expectHealthyOwnership(),
          throwsA(isA<TestFailure>()),
        );
        await platform.dispose('boundary');
        await platform.close();
      }
    },
  );
  testWidgets('real closing owner read failure is independently unhealthy', (
    tester,
  ) async {
    await expectLater(
      exerciseAudioShutdown(tester, injectClosingProbe: true),
      throwsA(
        isA<TestFailure>().having(
          (error) => error.message,
          'health failure',
          contains('Audio owner boundary unreadable'),
        ),
      ),
    );
  });
  testWidgets(
    'early gated audio failure preserves its cause and closes the owning lease',
    (tester) async {
      final original = StateError('injected before owning View removal');
      Object? observed;
      StackTrace? observedStack;
      try {
        await exerciseAudioShutdown(
          tester,
          injectBeforeRemovalFailure: original,
        );
      } catch (error, stack) {
        observed = error;
        observedStack = stack;
      }
      expect(observed, same(original));
      expect('$observedStack', contains('exerciseAudioShutdown'));
      expect(tester.takeException(), isNull);
    },
  );
  testWidgets(
    'ordinary owning View removal completes gated audio disposal',
    exerciseAudioShutdown,
    timeout: const Timeout(Duration(minutes: 3)),
  );
  testWidgets(
    'owning View removal fences real Dart byte-cache IO before native entry',
    (tester) async {
      final previous = AudioplayersPlatformInterface.instance;
      final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
      final previousTarget = debugDefaultTargetPlatformOverride;
      final platform = _GatedAudioPlatform('none');
      final boundary = SurvivorsAudioIoBoundary();
      AudioplayersPlatformInterface.instance = platform;
      GlobalAudioplayersPlatformInterface.instance = _GlobalAudioPlatform();
      debugDefaultTargetPlatformOverride = TargetPlatform.macOS;
      final directory = (await tester.runAsync(
        () => Directory.systemTemp.createTemp('survivors-audio-file-close-'),
      ))!;
      const paths = MethodChannel('plugins.flutter.io/path_provider');
      tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
        paths,
        (_) async => directory.path,
      );
      _AudioStreamRuntime? runtime;
      platform.ownerAlive = () =>
          runtime != null &&
          !runtime!.isDisposed &&
          (runtime!.evaluate(
            'globalThis.__survivorsAcceptance.snapshot().resources.atlas',
          ) as FlaxJsBoolean).value;
      Future<void> until(bool Function() ready) async {
        for (var i = 0; i < 250; i++) {
          if (ready()) return;
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 5)),
          );
          await tester.pump(const Duration(milliseconds: 20));
        }
        fail('Owning View byte-cache boundary did not settle');
      }

      try {
        await tester.runAsync(
          () => app.startApplication(
            storageDirectory: directory.path,
            createRuntime: () =>
                runtime = _AudioStreamRuntime()..sourceIoBoundary = boundary,
          ),
        );
        await selectSurvivorsEnglish(tester);
        await tapSurvivorsControl(tester, find.text('Start'));
        await until(() => boundary.opened.isCompleted);
        expect(boundary.pending, greaterThan(0));
        expect(platform.sourceStarted, isEmpty);
        platform.removalRequested = true;
        await tester.pumpWidget(const SizedBox.shrink());
        await until(
          () => runtime!.isDisposed && platform.disposeCompleted.length == 5,
        );
        expect(
          boundary.proceed.isCompleted,
          isFalse,
          reason: 'Dart file IO remains pending after bridge/runtime and native player disposal',
        );
        boundary.proceed.complete();
        await until(() => boundary.pending == 0);
        for (var i = 0; i < 20; i++) {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 5)),
          );
          await tester.pump(const Duration(milliseconds: 20));
        }
        expect(platform.sourceStarted, isEmpty);
        expect(platform.lateRejected, isEmpty);
        expect(platform.resumedAfterUnmount, isEmpty);
        expect(platform.live, isEmpty);
        expect(platform.activeListeners, 0);
        expect(runtime!.disposeCalls, 5);
        platform.expectHealthyOwnership();
        final files = (await tester.runAsync(
          () => directory.list(recursive: true).toList(),
        ))!;
        expect(files.where((file) => file.path.endsWith('.tmp')), isEmpty);
      } finally {
        if (!boundary.proceed.isCompleted) boundary.proceed.complete();
        await tester.pumpWidget(const SizedBox.shrink());
        await until(() => runtime == null || runtime!.isDisposed);
        await until(() => boundary.pending == 0);
        await completeSurvivorsIo(tester, FlaxLocalStoragePlugin.shutdown);
        await tester.runAsync(() => directory.delete(recursive: true));
        tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          paths,
          null,
        );
        AudioplayersPlatformInterface.instance = previous;
        GlobalAudioplayersPlatformInterface.instance = previousGlobal;
        debugDefaultTargetPlatformOverride = previousTarget;
      }
    },
  );
}

/// Uses the actual application/bundle; no JS root replacement or JS count receipt.
Future<void> exerciseAudioShutdown(
  WidgetTester tester, {
  bool injectClosingProbe = false,
  Object? injectBeforeRemovalFailure,
}) async {
  final previous = AudioplayersPlatformInterface.instance;
  final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
  final directory = await tester.runAsync(
    () => Directory.systemTemp.createTemp('survivors-audio-shutdown-'),
  );
  final results = <Map<String, Object?>>[];
  try {
    for (final gate
        in injectClosingProbe
            ? ['dispose']
            : injectBeforeRemovalFailure != null
            ? ['effect-generation']
            : [
                'create',
                'source',
                'volume',
                'dispose',
                'source-pause',
                'source-resume',
                'pause',
                'stop',
                'effect-pause',
                'effect-resume',
                'effect-close',
                'effect-generation',
              ]) {
      final platform = _GatedAudioPlatform(
        gate == 'effect-generation'
            ? 'generation'
            : gate.startsWith('effect-')
            ? 'effect'
            : gate.startsWith('source-')
            ? 'source'
            : gate,
      );
      if (gate == 'source-resume') platform.pauseGate = Completer<void>();
      AudioplayersPlatformInterface.instance = platform;
      GlobalAudioplayersPlatformInterface.instance = _GlobalAudioPlatform();
      _AudioStreamRuntime? runtime;
      int? interruptedPreparationResumes;
      String? interruptedEffect;
      Map<String, Object?>? closingProbe;
      platform.ownerAlive = () {
        if (runtime == null) throw StateError('Audio owner not initialized');
        if (runtime!.isDisposed) return false;
        // Start has loaded a Scene; this existing flag becomes false at GameState.dispose entry.
        return (runtime!.evaluate(
          'globalThis.__survivorsAcceptance.snapshot().resources.atlas',
        ) as FlaxJsBoolean).value;
      };
      Future<void> until(bool Function() ready, String description) async {
        for (var attempt = 0; attempt < 250; attempt++) {
          if (ready()) return;
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 10)),
          );
          await tester.pump(const Duration(milliseconds: 20));
        }
        fail('$gate gate timed out waiting for $description');
      }

      Future<void> tap(String text) async {
        final finder = text == 'Pause' ? find.byTooltip(text) : find.text(text);
        await until(() => finder.evaluate().isNotEmpty, text);
        await tester.tap(finder.first);
        await tester.pump(const Duration(milliseconds: 20));
      }

      Future<void> drain() async {
        for (var i = 0; i < 12; i++) {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 10)),
          );
          await tester.pump(const Duration(milliseconds: 20));
        }
      }

      try {
        await tester.runAsync(
          () => app.startApplication(
            storageDirectory: directory!.path,
            createRuntime: () {
              final tracked = runtime = _AudioStreamRuntime();
              if (injectClosingProbe) {
                tracked.beforeRuntimeDispose = () {
                  final id = platform.live.first;
                  closingProbe = {
                    'runtimeDisposed': tracked.isDisposed,
                    'gameDisposals': tracked.disposeCalls,
                    'nativeIdLive': platform.live.contains(id),
                  };
                  // Consume returned errors: the independent health ledger must still fail.
                  unawaited(platform.resume(id).catchError((Object _) {}));
                  unawaited(
                    platform.create('closing-create').catchError((Object _) {}),
                  );
                };
              }
              return tracked;
            },
          ),
        );
        await selectSurvivorsEnglish(tester);
        await until(() => find.text('Start').evaluate().isNotEmpty, 'title');
        await until(() => platform.created.length == 5, 'five audio players');
        await tap('Start');
        if (gate == 'source' ||
            gate == 'volume' ||
            gate.startsWith('source-')) {
          await until(() => platform.blocked > 0, 'gated native operation');
        }
        if (gate == 'pause' || gate == 'stop') {
          await until(
            () => platform.resumed.isNotEmpty,
            'music playback before control gate',
          );
        }
        if (gate == 'effect-generation') {
          final effects = platform.releaseModes.entries
              .where((entry) => entry.value == ReleaseMode.stop)
              .map((entry) => entry.key)
              .toSet();
          expect(effects, hasLength(4));
          await tester.tap(find.byTooltip('Pulse').first);
          await until(
            () => effects.every(platform.resumed.contains),
            'first four real effect resumes',
          );
          await tap('Pause');
          platform.holdEffects = true;
          await tap('Resume');
          await until(
            () => platform.pendingPreparations.length == 4,
            'fresh four prepared waiters',
          );
          for (final id in effects) {
            platform.complete(id);
          }
          await drain(); // Real Dart completion listeners run before fresh Prepared delivery.
          expect(platform.resumed.where(effects.contains), hasLength(4));
          platform.releaseGate();
          await until(
            () => effects.every(
              (id) =>
                  platform.resumed.where((value) => value == id).length == 2,
            ),
            'eight actual bridge effect resumes',
          );
          await drain();
          expect(
            platform.sourceStarted.where(effects.contains),
            hasLength(8),
            reason: 'Preparing stale complete cannot free a fresh active slot',
          );
          final short = effects.first;
          platform.heldResumeId = short;
          platform.resumeReply = Completer<void>();
          platform.complete(short);
          await until(
            () => platform.resumed.where((id) => id == short).length == 3,
            'fresh completion releases only its pool slot',
          );
          // This is the current clip's completion, after native resume entry but before its reply.
          platform.complete(short);
          await drain();
          expect(
            platform.sourceStarted.where(effects.contains),
            hasLength(9),
            reason:
                'Current completion cannot free a still-pending resume Future',
          );
          if (injectBeforeRemovalFailure != null) {
            expect(platform.removalRequested, isFalse);
            expect(platform.resumeReply!.isCompleted, isFalse);
            throw injectBeforeRemovalFailure;
          }
          platform.resumeReply!.complete();
          await until(
            () => platform.sourceStarted.where(effects.contains).length > 9,
            'remembered early complete releases slot after its own resume reply',
          );
          expect(
            find.text('Audio unavailable; playing silently.'),
            findsNothing,
          );
        } else if (gate.startsWith('effect-')) {
          await until(
            () => platform.resumed.isNotEmpty,
            'healthy music before effect',
          );
          final music = platform.releaseModes.entries
              .firstWhere((entry) => entry.value == ReleaseMode.loop)
              .key;
          final musicResumes = platform.resumed
              .where((id) => id == music)
              .length;
          await tester.tap(find.byTooltip('Pulse').first);
          await until(
            () => platform.pendingPreparations.isNotEmpty,
            'effect preparing after source acknowledgement',
          );
          final effect = platform.pendingPreparations.single;
          interruptedEffect = effect;
          expect(platform.sourceCompleted, contains(effect));
          expect(platform.releaseModes[effect], ReleaseMode.stop);
          await tap('Pause');
          if (gate == 'effect-resume') await tap('Resume');
          await drain();
          expect(
            platform.cancelledPreparations,
            isEmpty,
            reason: 'STOP must preserve the native prepared callback',
          );
          expect(platform.pendingPreparations, contains(effect));
          if (gate != 'effect-close') {
            platform.releaseGate();
            await until(
              () => platform.prepared.contains(effect),
              'old effect prepared while stopped',
            );
            await drain();
            expect(platform.resumed.where((id) => id == effect), isEmpty);
            if (gate == 'effect-pause') await tap('Resume');
            await until(
              () =>
                  platform.resumed.where((id) => id == music).length >
                  musicResumes,
              'healthy music after effect interruption',
            );
            for (var i = 0; i < 6 && !platform.resumed.contains(effect); i++) {
              await tap('Pause');
              await tap('Restart');
              await tester.tap(find.byTooltip('Pulse').first);
              await drain();
            }
            expect(platform.resumed, contains(effect));
            expect(
              platform.resumePositions
                  .where((entry) => entry.playerId == effect)
                  .every((entry) => entry.position == 0),
              isTrue,
            );
            expect(
              find.text('Audio unavailable; playing silently.'),
              findsNothing,
            );
          }
        } else {
          // Exercise interruption while preparation is held, and fresh resume behind its barrier.
          await tap('Pause');
          if (gate.startsWith('source-')) {
            await until(
              () => platform.pauseStarted.isNotEmpty,
              'immediate music pause during preparation',
            );
            if (gate == 'source-resume') await tap('Resume');
            platform.releaseGate();
            await until(
              () => platform.sourceCompleted.length == 1,
              'old source settlement',
            );
            await drain();
            expect(
              platform.resumed,
              isEmpty,
              reason: 'The interrupted preparation must never resume',
            );
            expect(platform.volumeStarted, hasLength(1));
            interruptedPreparationResumes = platform.resumed.length;
            if (gate == 'source-resume') {
              platform.pauseGate!.complete();
            } else {
              await tap('Resume');
            }
            await until(
              () => platform.resumed.length == 1,
              'fresh explicit resume',
            );
            expect(platform.sourceStarted, hasLength(2));
          } else {
            await tap('Resume');
          }
        }
        if (gate == 'pause' || gate == 'stop') {
          await until(() => platform.blocked > 0, 'held native pause/stop');
        }
        if (gate == 'dispose') {
          await until(() => platform.resumed.isNotEmpty, 'music playback');
        }
        final gateHeldAtUnmount = !platform.gate.isCompleted;
        expect(
          platform.ownerAlive!(),
          isTrue,
          reason: 'Owner must be alive before removal request',
        );
        platform.removalRequested = true;
        await tester.pumpWidget(const SizedBox.shrink());
        await until(
          () => runtime!.isDisposed,
          'owning Session/runtime closure',
        );
        if (gate == 'dispose') {
          await until(
            () => platform.disposeStarted.length == 5,
            'native dispose entries',
          );
        }
        // Let shutdown continuations run while the native operation is still held.
        await drain();
        expect(runtime!.disposeCalls, 5);
        expect(runtime!.disposesWhileAlive, 5);
        expect(runtime!.disposeReceivers, hasLength(5));
        expect(runtime!.cancelled, 5);
        expect(runtime!.cancelsWhileAlive, 5);
        final completedBeforeRelease = platform.disposeCompleted.length;
        final disposeStartedBeforeRelease = platform.disposeStarted.length;
        final pendingBeforeRelease = platform.pending;
        platform.releaseGate();
        await until(
          () => platform.disposeCompleted.length == 5 && platform.pending == 0,
          'native disposal completion and in-flight operations',
        );
        // Drain continuations after native completion to catch a queued late play.
        await drain();
        final receipt = <String, Object?>{
          'gate': gate,
          'dartDisposeDispatchesBeforeGateRelease': runtime!.disposeCalls,
          'dartDisposesWhileRuntimeAlive': runtime!.disposesWhileAlive,
          'explicitAppSubscriptionCancels': runtime!.cancelled,
          'runtimeClosedBeforeGateReleased':
              gateHeldAtUnmount && runtime!.isDisposed,
          'interruptedPreparationResumes': interruptedPreparationResumes,
          'created': platform.created,
          'createCompleted': platform.createCompleted,
          'disposeStarted': platform.disposeStarted,
          'disposeCompleted': platform.disposeCompleted,
          'completedBeforeGateRelease': completedBeforeRelease,
          'disposeStartedBeforeGateRelease': disposeStartedBeforeRelease,
          'pendingOperationsBeforeGateRelease': pendingBeforeRelease,
          'pendingPreparedCallbacks': platform.pendingPreparations.length,
          'cancelledPreparations': platform.cancelledPreparations,
          'disposalAbortedPreparations': platform.disposalAbortedPreparations,
          'prepared': platform.prepared.toList(),
          'sourceStarted': platform.sourceStarted,
          'sourceCompleted': platform.sourceCompleted,
          'volumeStarted': platform.volumeStarted,
          'volumeCompleted': platform.volumeCompleted,
          'resumed': platform.resumed,
          'resumedAfterUnmount': platform.resumedAfterUnmount,
          'resumedDuringRemovalRequest': platform.resumedDuringRemovalRequest,
          'entryBoundaries': platform.entryBoundaries,
          'resumeAttemptCount': platform.resumeAttemptCount,
          'createAttemptCount': platform.createAttemptCount,
          'ownerReadErrors': platform.ownerReadErrors,
          'closingProbe': closingProbe,
          'createdAfterUnmount': platform.createdAfterUnmount,
          'lateRejectedCalls': platform.lateRejected,
          'live': platform.live.toList(),
          'playing': platform.playing.toList(),
          'activeListeners': platform.activeListeners,
          'pendingOperations': platform.pending,
          'blockedNativeCalls': platform.blocked,
        };
        results.add(receipt);
        final summary = {
          'gate': gate,
          'resumeAttempts': platform.resumeAttemptCount,
          'createAttempts': platform.createAttemptCount,
          'ownerReadErrors': platform.ownerReadErrorCount,
          'disposed': platform.disposeCompleted.length,
          'live': platform.live.length,
          'listeners': platform.activeListeners,
          'pending': platform.pending,
          'pendingPrepared': platform.pendingPreparations.length,
          'resumesDuringRemovalRequest':
              platform.resumedDuringRemovalRequest.length,
          'resumesAfterOwnerDispose': platform.resumedAfterUnmount
              .take(2)
              .toList(),
          'createsAfterOwnerDispose': platform.createdAfterUnmount.length,
          'lastBoundary': platform.entryBoundaries.isEmpty
              ? null
              : platform.entryBoundaries.last,
        };
        debugPrintSynchronously(
          'FLAX_SURVIVORS_AUDIO_GATE:${jsonEncode(summary)}',
        );
        expect(platform.disposeCompleted.toSet(), platform.created.toSet());
        expect(platform.disposeCompleted.length, platform.created.length);
        expect(platform.disposeStarted.toSet().length, 5);
        expect(platform.createCompleted.toSet(), platform.created.toSet());
        expect(platform.live, isEmpty);
        expect(platform.playing, isEmpty);
        expect(platform.activeListeners, 0);
        expect(platform.pending, 0);
        expect(platform.pendingPreparations, isEmpty);
        if (gate == 'effect-close') {
          expect(
            platform.disposalAbortedPreparations,
            contains(interruptedEffect),
          );
          expect(platform.prepared, isNot(contains(interruptedEffect)));
        }
        if (injectClosingProbe) {
          expect(closingProbe, {
            'runtimeDisposed': false,
            'gameDisposals': 5,
            'nativeIdLive': true,
          });
          expect(platform.ownerReadErrorCount, 2);
          expect(
            platform.entryBoundaries.where(
              (entry) => entry['ownerStatus'] == 'unreadable',
            ),
            hasLength(2),
          );
        }
        platform.expectHealthyOwnership();
        expect(tester.takeException(), isNull);
        if (gate == 'source' || gate == 'volume') {
          expect(
            platform.volumeStarted,
            hasLength(1),
            reason: 'Only the first in-flight play may dispatch; queued play must stop at disposal',
          );
        }
        if (gate == 'source') expect(platform.sourceStarted, hasLength(1));
      } catch (error, stack) {
        debugPrintSynchronously(
          'FLAX_SURVIVORS_AUDIO_BODY_FAILURE:${jsonEncode({'gate': gate, 'error': '$error', 'stack': '$stack', 'removalRequested': platform.removalRequested, 'runtimeDisposed': runtime?.isDisposed, 'resumeReplyPending': platform.resumeReply?.isCompleted == false})}',
        );
        rethrow;
      } finally {
        if (platform.resumeReply?.isCompleted == false) {
          platform.resumeReply!.complete();
        }
        platform.releaseGate();
        if (platform.pauseGate?.isCompleted == false) {
          platform.pauseGate!.complete();
        }
        await tester.pumpWidget(const SizedBox.shrink());
        await until(
          () => runtime == null || runtime!.isDisposed,
          'owning Session/runtime closure during cleanup',
        );
        await completeSurvivorsIo(tester, FlaxLocalStoragePlugin.shutdown);
        await platform.close();
      }
    }
  } finally {
    AudioplayersPlatformInterface.instance = previous;
    GlobalAudioplayersPlatformInterface.instance = previousGlobal;
    await tester.runAsync(() => directory!.delete(recursive: true));
    debugPrintSynchronously(
      'FLAX_SURVIVORS_AUDIO_SHUTDOWN:${jsonEncode(results)}',
    );
  }
}

class _GlobalAudioPlatform extends GlobalAudioplayersPlatformInterface {
  static final _events = StreamController<GlobalAudioEvent>.broadcast();
  @override
  Future<void> init() async {}
  @override
  Future<void> setGlobalAudioContext(AudioContext ctx) async {}
  @override
  Stream<GlobalAudioEvent> getGlobalEventStream() => _events.stream;
  @override
  Future<void> emitGlobalLog(String message) async {}
  @override
  Future<void> emitGlobalError(String code, String message) async {}
}

Future<void> exerciseAudioEventFailure(WidgetTester tester) async {
  final previous = AudioplayersPlatformInterface.instance,
      previousGlobal = GlobalAudioplayersPlatformInterface.instance;
  final audio = _GatedAudioPlatform('none');
  AudioplayersPlatformInterface.instance = audio;
  GlobalAudioplayersPlatformInterface.instance = _GlobalAudioPlatform();
  final directory = (await tester.runAsync(
    () => Directory.systemTemp.createTemp('survivors-audio-event-'),
  ))!;
  _AudioStreamRuntime? runtime;
  Future<void> until(bool Function() ready) async {
    for (var i = 0; i < 250; i++) {
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 10)),
      );
      await tester.pump(const Duration(milliseconds: 20));
      if (ready()) return;
    }
    fail('Post-resume audio transition timed out');
  }

  Future<void> drain() async {
    for (var i = 0; i < 20; i++) {
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 10)),
      );
      await tester.pump(const Duration(milliseconds: 20));
    }
  }

  final warning = find.text('Audio unavailable; playing silently.');
  try {
    await tester.runAsync(
      () => app.startApplication(
        storageDirectory: directory.path,
        createRuntime: () => runtime = _AudioStreamRuntime(),
      ),
    );
    await selectSurvivorsEnglish(tester);
    await until(() => find.text('Start').evaluate().isNotEmpty);
    await tester.tap(find.text('Start'));
    await until(
      () => audio.releaseModes.entries.any(
        (entry) =>
            entry.value == ReleaseMode.loop &&
            audio.resumed.contains(entry.key),
      ),
    );
    final music = audio.releaseModes.entries
        .firstWhere((entry) => entry.value == ReleaseMode.loop)
        .key;
    expect(warning, findsNothing);
    // Preparation and resume are already successful: this error has no pending setter.
    await audio.emitError(
      music,
      'AndroidAudioError',
      'post-resume MEDIA_ERROR_SERVER_DIED',
    );
    await until(() => warning.evaluate().isNotEmpty);
    expect(runtime!.listened, 5);
    final resumed = audio.resumed.length, sources = audio.sourceStarted.length;
    await tester.tap(find.byTooltip('Pulse').first);
    await drain();
    await tester.tap(find.byTooltip('Pause'));
    await tester.pump();
    await tester.tap(find.text('Restart'));
    await drain();
    expect(audio.resumed.length, resumed);
    expect(audio.sourceStarted.length, sources);
    expect(warning, findsOneWidget);
    await tester.pumpWidget(const SizedBox.shrink());
    await until(
      () =>
          runtime!.isDisposed &&
          audio.disposeCompleted.length == 5 &&
          audio.activeListeners == 0,
    );
    expect(runtime!.cancelled, 5);
    expect(runtime!.cancelsWhileAlive, 5);
    expect(runtime!.listenReceivers, hasLength(5));
    expect(runtime!.cancelReceivers, hasLength(5));
    expect(audio.disposeCompleted.toSet(), audio.created.toSet());
    expect(audio.disposeCompleted.toSet(), hasLength(5));
    expect(tester.takeException(), isNull);
    debugPrintSynchronously(
      'FLAX_SURVIVORS_AUDIO_EVENT:${jsonEncode({'injected': 'post-resume MEDIA_ERROR_SERVER_DIED', 'successfulResumesBeforeFailure': resumed, 'resumesAfterPulseRestart': audio.resumed.length, 'appStreamListeners': runtime!.listened, 'explicitCancelDispatches': runtime!.cancelled, 'nativeFakeDisposals': audio.disposeCompleted.length, 'nativeFakeListenersAfterUnmount': audio.activeListeners})}',
    );
  } finally {
    await tester.pumpWidget(const SizedBox.shrink());
    await until(() => runtime == null || runtime!.isDisposed);
    await drain();
    await completeSurvivorsIo(tester, FlaxLocalStoragePlugin.shutdown);
    await tester.runAsync(() => directory.delete(recursive: true));
    AudioplayersPlatformInterface.instance = previous;
    GlobalAudioplayersPlatformInterface.instance = previousGlobal;
  }
}

// Observe real resolved bridge calls, not a game counter or automatic Session cleanup.
class _AudioStreamRuntime extends FlaxTestRuntimeTracker {
  _AudioStreamRuntime() : super(FlaxV8Engine.createRuntime());
  void Function()? beforeRuntimeDispose;
  IOOverrides? sourceIoBoundary;
  @override
  void dispose() {
    final before = beforeRuntimeDispose;
    beforeRuntimeDispose = null;
    before?.call();
    super.dispose();
  }

  final operations = <int, String>{};
  int listened = 0, cancelled = 0, cancelsWhileAlive = 0;
  int disposeCalls = 0, disposesWhileAlive = 0;
  final disposeReceivers = <int>{};
  final listenReceivers = <int>{}, cancelReceivers = <int>{};
  @override
  void registerHostFunction(String name, FlaxJsHostFunction callback) {
    super.registerHostFunction(name, (receiver, arguments) {
      if (name == '__flaxInvokeOperation' && arguments.first is FlaxJsNumber) {
        final operation =
            operations[(arguments.first as FlaxJsNumber).value.toInt()];
        if (operation == 'dispose') {
          disposeCalls++;
          disposeReceivers.add((arguments[1] as FlaxJsNumber).value.toInt());
          if (!isDisposed) disposesWhileAlive++;
        }
        if (operation == 'listen') {
          listened++;
          listenReceivers.add((arguments[1] as FlaxJsNumber).value.toInt());
        }
        if (operation == 'cancel') {
          cancelled++;
          cancelReceivers.add((arguments[1] as FlaxJsNumber).value.toInt());
          if (!isDisposed) cancelsWhileAlive++;
        }
      }
      final boundary = sourceIoBoundary;
      final result =
          name == '__flaxInvokeOperation' &&
              arguments.first is FlaxJsNumber &&
              operations[(arguments.first as FlaxJsNumber).value.toInt()] ==
                  'setSource' &&
              boundary != null
          ? IOOverrides.runWithIOOverrides(
              () => callback(receiver, arguments),
              boundary,
            )
          : callback(receiver, arguments);
      if (name == '__flaxResolveOperation' &&
          result is FlaxJsNumber &&
          arguments.length >= 5) {
        final type = (arguments[1] as FlaxJsString).value;
        final category = (arguments[2] as FlaxJsString).value;
        final member = (arguments[4] as FlaxJsString).value;
        if ((category == 'stream' && member == 'listen') ||
            (type.contains('StreamSubscription') && member == 'cancel') ||
            (type.contains('AudioPlayer') &&
                (member == 'dispose' || member == 'setSource'))) {
          operations[result.value.toInt()] = member;
        }
      }
      return result;
    });
  }
}

class _GatedAudioPlatform extends AudioplayersPlatformInterface {
  _GatedAudioPlatform(this.gatedOperation);
  final String gatedOperation;
  final gate = Completer<void>();
  Completer<void>? pauseGate;
  Completer<void>? resumeReply;
  String? heldResumeId;
  final pauseStarted = <String>[];
  final pendingPreparations = <String>{};
  final cancelledPreparations = <String>[];
  final disposalAbortedPreparations = <String>[];
  final prepared = <String>{};
  final positions = <String, int>{};
  final resumePositions = <({String playerId, int position})>[];
  final created = <String>[];
  final createCompleted = <String>[];
  final disposeStarted = <String>[];
  final disposeCompleted = <String>[];
  final sourceStarted = <String>[];
  final sourceCompleted = <String>[];
  final volumeStarted = <String>[];
  final volumeCompleted = <String>[];
  final resumed = <String>[];
  final resumedAfterUnmount = <String>[];
  final createdAfterUnmount = <String>[];
  bool removalRequested = false;
  bool Function()? ownerAlive;
  final resumedDuringRemovalRequest = <String>[];
  final entryBoundaries = <Map<String, Object?>>[];
  final ownerReadErrors = <Map<String, Object?>>[];
  int resumeAttemptCount = 0, createAttemptCount = 0, ownerReadErrorCount = 0;

  void expectHealthyOwnership() {
    expect(ownerReadErrors, isEmpty, reason: 'Audio owner boundary unreadable');
    expect(resumedAfterUnmount, isEmpty);
    expect(createdAfterUnmount, isEmpty);
  }

  void _recordEntry(String operation, String playerId) {
    if (operation == 'resume') {
      resumeAttemptCount++;
    } else {
      createAttemptCount++;
    }
    if (!removalRequested) return;
    final entry = <String, Object?>{
      'operation': operation,
      'player': playerId,
      'ownerStatus': 'pending',
    };
    if (entryBoundaries.length == 8) entryBoundaries.removeAt(0);
    entryBoundaries.add(
      entry,
    ); // Record the attempt before any fallible external read.
    bool alive;
    try {
      entry['phase'] = WidgetsBinding.instance.schedulerPhase.name;
      alive = _ownerAlive;
    } catch (error) {
      entry['ownerStatus'] = 'unreadable';
      ownerReadErrorCount++;
      if (ownerReadErrors.length < 8) ownerReadErrors.add(entry);
      final message = '$error'.split('\n').first;
      entry['error'] = message.length > 128
          ? message.substring(0, 128)
          : message;
      rethrow;
    }
    entry['ownerStatus'] = alive ? 'alive' : 'disposed';
    if (operation == 'resume') {
      if (alive) {
        resumedDuringRemovalRequest.add(playerId);
      } else {
        resumedAfterUnmount.add(playerId);
      }
    } else if (!alive) {
      createdAfterUnmount.add(playerId);
    }
  }

  bool get _ownerAlive {
    final read = ownerAlive;
    if (read == null) throw StateError('Missing audio owner disposal marker');
    return read();
  }

  bool holdEffects = false;

  void complete(String id) {
    playing.remove(id);
    events[id]!.add(const AudioEvent(eventType: AudioEventType.complete));
  }

  final lateRejected = <String>[];
  final live = <String>{};
  final playing = <String>{};
  final releaseModes = <String, ReleaseMode>{};
  final events = <String, StreamController<AudioEvent>>{};
  int activeListeners = 0;
  int pending = 0;
  int blocked = 0;

  void releaseGate() {
    if (removalRequested && resumeReply != null && !resumeReply!.isCompleted) {
      resumeReply!.complete();
    }
    if (!gate.isCompleted) gate.complete();
    if (gatedOperation == 'effect' || gatedOperation == 'generation') {
      for (final id in pendingPreparations.toList()) {
        _prepared(id);
      }
    }
  }

  Future<void> _wait(String operation) async {
    pending++;
    try {
      if (operation == gatedOperation && !gate.isCompleted) {
        blocked++;
        await gate.future;
      }
      if (operation == 'pause') await pauseGate?.future;
    } finally {
      pending--;
    }
  }

  void _requireLive(String id, String operation) {
    if (!live.contains(id)) {
      lateRejected.add('$operation:$id');
      // The installed Darwin backend rejects an ID removed from its player map.
      throw PlatformException(
        code: 'AudioError',
        message: 'Player already disposed',
      );
    }
  }

  @override
  Future<void> create(String playerId) async {
    _recordEntry('create', playerId);
    created.add(playerId);
    live.add(playerId);
    events[playerId] = StreamController<AudioEvent>.broadcast(
      onListen: () => activeListeners++,
      onCancel: () => activeListeners--,
    );
    await _wait('create');
    createCompleted.add(playerId);
  }

  @override
  Stream<AudioEvent> getEventStream(String playerId) =>
      events[playerId]!.stream;

  @override
  Future<void> dispose(String playerId) async {
    disposeStarted.add(playerId);
    await _wait('dispose');
    await events[playerId]!.close();
    playing.remove(playerId);
    live.remove(playerId);
    disposeCompleted.add(playerId);
  }

  Future<void> _source(String playerId) async {
    _requireLive(playerId, 'source-entry');
    sourceStarted.add(playerId);
    if (gatedOperation == 'generation' &&
        holdEffects &&
        releaseModes[playerId] == ReleaseMode.stop &&
        !gate.isCompleted) {
      sourceCompleted.add(playerId);
      pendingPreparations.add(playerId);
      return;
    }
    if (gatedOperation == 'effect') {
      sourceCompleted.add(playerId);
      if (releaseModes[playerId] == ReleaseMode.loop || gate.isCompleted) {
        _prepared(playerId);
      } else {
        pendingPreparations.add(playerId);
      }
      return;
    }
    await _wait('source');
    _requireLive(playerId, 'source-completion');
    sourceCompleted.add(playerId);
    _prepared(playerId);
  }

  void _prepared(String playerId) {
    pendingPreparations.remove(playerId);
    if (!live.contains(playerId)) return;
    prepared.add(playerId);
    positions[playerId] = 0;
    events[playerId]!.add(
      const AudioEvent(eventType: AudioEventType.prepared, isPrepared: true),
    );
    events[playerId]!.add(
      const AudioEvent(
        eventType: AudioEventType.duration,
        duration: Duration(seconds: 30),
      ),
    );
  }

  @override
  Future<void> setSourceUrl(
    String playerId,
    String url, {
    bool? isLocal,
    String? mimeType,
  }) => _source(playerId);
  @override
  Future<void> setSourceBytes(
    String playerId,
    Uint8List bytes, {
    String? mimeType,
  }) => _source(playerId);
  @override
  Future<void> setVolume(String playerId, double volume) async {
    _requireLive(playerId, 'volume-entry');
    volumeStarted.add(playerId);
    await _wait('volume');
    volumeCompleted.add(playerId);
  }

  @override
  Future<void> resume(String playerId) async {
    _recordEntry('resume', playerId);
    _requireLive(playerId, 'resume');
    resumed.add(playerId);
    resumePositions.add((
      playerId: playerId,
      position: positions[playerId] ?? 0,
    ));
    playing.add(playerId);
    if (playerId == heldResumeId) {
      pending++;
      try {
        await resumeReply?.future;
      } finally {
        pending--;
      }
    }
  }

  @override
  Future<void> pause(String playerId) async {
    pauseStarted.add(playerId);
    await _wait('pause');
    playing.remove(playerId);
  }

  @override
  Future<void> stop(String playerId) async {
    await _wait('stop');
    if ((releaseModes[playerId] ?? ReleaseMode.release) ==
            ReleaseMode.release &&
        pendingPreparations.remove(playerId)) {
      cancelledPreparations.add(playerId);
    }
    if (prepared.contains(playerId)) positions[playerId] = 0;
    playing.remove(playerId);
  }

  @override
  Future<void> release(String playerId) async {
    if (pendingPreparations.remove(playerId)) {
      disposalAbortedPreparations.add(playerId);
    }
    playing.remove(playerId);
  }

  @override
  Future<void> seek(String playerId, Duration position) async {}
  @override
  Future<int?> getDuration(String playerId) async => 30000;
  @override
  Future<int?> getCurrentPosition(String playerId) async =>
      positions[playerId] ?? 0;
  @override
  Future<void> setPlaybackRate(String playerId, double playbackRate) async {}
  @override
  Future<void> setReleaseMode(String playerId, ReleaseMode releaseMode) async {
    releaseModes[playerId] = releaseMode;
  }

  @override
  Future<void> setPlayerMode(String playerId, PlayerMode playerMode) async {}
  @override
  Future<void> setAudioContext(
    String playerId,
    AudioContext audioContext,
  ) async {}
  @override
  Future<void> setBalance(String playerId, double balance) async {}
  @override
  Future<void> emitLog(String playerId, String message) async {}
  @override
  Future<void> emitError(String playerId, String code, String message) async {
    events[playerId]!.addError(PlatformException(code: code, message: message));
  }

  Future<void> close() async {
    for (final controller in events.values) {
      if (!controller.isClosed) await controller.close();
    }
  }
}
