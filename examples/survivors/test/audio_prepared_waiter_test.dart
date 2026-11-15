import 'dart:async';

import 'package:audioplayers/audioplayers.dart';
import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:audioplayers_platform_interface/src/audioplayers_platform.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

import 'native_audio_probe.dart';
// ignore: avoid_relative_lib_imports
import '../../../packages/flax_audioplayers/example/lib/testing.dart';

// Observe the real player's prepared-subscription ownership, without adding a listener.
class _ObservedPlayer extends AudioPlayer {
  _ObservedPlayer() : super(playerId: 'prepared-proof');
  var listeners = 0;
  @override
  Stream<AudioEvent> get eventStream {
    final source = super.eventStream;
    return Stream.multi((controller) {
      listeners++;
      var retired = false;
      void retire() {
        if (!retired) {
          retired = true;
          listeners--;
        }
      }

      final sub = source.listen(
        controller.addSync,
        onError: controller.addErrorSync,
        onDone: () {
          retire();
          controller.closeSync();
        },
      );
      controller.onCancel = () {
        retire();
        return sub.cancel();
      };
    }, isBroadcast: true);
  }
}

void main() {
  testWidgets('replacement cancellation retires only its prepared waiter', (
    tester,
  ) async {
    const channel = MethodChannel('xyz.luan/audioplayers');
    const events = 'xyz.luan/audioplayers/events/prepared-proof';
    final messenger = tester.binding.defaultBinaryMessenger;
    final previous = AudioplayersPlatformInterface.instance;
    final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
    final firstReply = Completer<void>(), secondReply = Completer<void>();
    var setters = 0;
    messenger.setMockMethodCallHandler(channel, (call) async {
      if (call.method == 'setSourceUrl') {
        setters++;
        if (setters == 1) return firstReply.future;
        firstReply.completeError(
          PlatformException(
            code: 'DarwinAudioPreparationCancelled',
            details: {'reason': 'replaced'},
          ),
        );
        return secondReply.future;
      }
      return;
    });
    messenger.setMockMethodCallHandler(
      const MethodChannel(events),
      (_) async => null,
    );
    AudioplayersPlatformInterface.instance = AudioplayersPlatform();
    GlobalAudioplayersPlatformInterface.instance = _Global();
    final player = _ObservedPlayer()..positionUpdater = null;
    var firstDone = false, secondDone = false;
    Object? firstError, secondError;
    Future<void> spin(bool Function() ready) async {
      for (var i = 0; i < 60; i++) {
        if (ready()) return;
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 2)),
        );
        await tester.pump(const Duration(milliseconds: 5));
      }
      fail('Prepared waiter did not settle within bounded gate');
    }

    try {
      await spin(() => player.listeners == 2);
      unawaited(
        player
            .setSourceDeviceFile('old.wav')
            .then(
              (_) => firstDone = true,
              onError: (Object error) {
                firstError = error;
                firstDone = true;
              },
            ),
      );
      await spin(() => setters == 1);
      unawaited(
        player
            .setSourceDeviceFile('new.wav')
            .then(
              (_) => secondDone = true,
              onError: (Object error) {
                secondError = error;
                secondDone = true;
              },
            ),
      );
      await spin(() => setters == 2);
      await spin(() => firstDone);
      expect(
        firstError,
        isA<PlatformException>().having(
          (e) => e.code,
          'code',
          'DarwinAudioPreparationCancelled',
        ),
      );
      expect(secondDone, isFalse);
      expect(
        player.listeners,
        3,
        reason: 'two internal + only the new prepared waiter',
      );
      secondReply.complete();
      await messenger.handlePlatformMessage(
        events,
        const StandardMethodCodec().encodeSuccessEnvelope({
          'event': 'audio.onPrepared',
          'value': true,
        }),
        (_) {},
      );
      await spin(() => secondDone);
      expect(secondError, isNull);
      expect(player.listeners, 2);
    } finally {
      if (!secondReply.isCompleted) secondReply.complete();
      var disposed = false;
      unawaited(player.dispose().then((_) => disposed = true));
      await spin(() => disposed);
      expect(player.listeners, 0);
      AudioplayersPlatformInterface.instance = previous;
      GlobalAudioplayersPlatformInterface.instance = previousGlobal;
      messenger.setMockMethodCallHandler(channel, null);
      messenger.setMockMethodCallHandler(const MethodChannel(events), null);
    }
  });
  testWidgets(
    'an old completion can suppress the next prepared real Dart play',
    (tester) async {
      const channel = MethodChannel('xyz.luan/audioplayers');
      const events = 'xyz.luan/audioplayers/events/prepared-proof';
      final messenger = tester.binding.defaultBinaryMessenger;
      final previous = AudioplayersPlatformInterface.instance;
      final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
      final probe = NativeAudioProbe();
      AudioplayersPlatformInterface.instance = probe;
      GlobalAudioplayersPlatformInterface.instance = _Global();
      var setters = 0, firstDone = false, secondDone = false;
      final second = Completer<void>();
      messenger.setMockMethodCallHandler(channel, (call) async {
        if (call.method == 'setSourceUrl') {
          setters++;
          if (setters == 2) return second.future;
        }
        return;
      });
      messenger.setMockMethodCallHandler(
        const MethodChannel(events),
        (_) async => null,
      );
      final player = _ObservedPlayer()..positionUpdater = null;
      probe.observePlayer(player);
      Future<void> spin(bool Function() ready) async {
        for (var i = 0; i < 100; i++) {
          if (ready()) return;
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 2)),
          );
          await tester.pump(const Duration(milliseconds: 5));
        }
        fail('Actual Dart audio state did not settle');
      }

      Future<void> event(String name, [Object? value]) async {
        await messenger.handlePlatformMessage(
          events,
          const StandardMethodCodec().encodeSuccessEnvelope({
            'event': name,
            'value': value,
          }),
          (_) {},
        );
        await tester.pump();
      }

      try {
        await spin(() => player.listeners == 2);
        await player.setReleaseMode(ReleaseMode.stop);
        unawaited(
          player
              .play(DeviceFileSource('first.wav'), volume: .5)
              .then((_) => firstDone = true),
        );
        await spin(() => setters == 1);
        await event('audio.onPrepared', true);
        await spin(() => firstDone);
        expect(probe.completedResumes, 1);
        for (var i = 0; i < 120; i++) {
          await tester.pump(const Duration(milliseconds: 16));
        }
        expect(probe.positionCalls, 0);
        unawaited(
          player
              .play(DeviceFileSource('second.wav'), volume: .5)
              .then((_) => secondDone = true),
        );
        await spin(() => setters == 2);
        await event('audio.onComplete');
        await spin(() => player.desiredState == PlayerState.completed);
        second.complete();
        await event('audio.onPrepared', true);
        await spin(() => secondDone);
        expect(
          probe.completedResumes,
          1,
          reason:
              'Old completion changed real Dart desiredState before _resume',
        );
        expect(
          probe.pendingPreparations,
          1,
          reason:
              'Keep this diagnosed suppression unhealthy, not a fake resume',
        );
        expect(probe.positionCalls, 0);
        expect(
          probe.sourceEvents.where((e) => e['state'] == 'complete-event'),
          hasLength(1),
        );
        expect(probe.sourceEvents.last['dartDesiredState'], 'completed');
        // ignore: avoid_print
        print('FLAX_AUDIO_OLD_COMPLETION:${probe.preparationStatus}');
      } finally {
        if (!second.isCompleted) second.complete();
        var done = false;
        unawaited(player.dispose().then((_) => done = true));
        await spin(() => done);
        expect(probe.pendingSources, 0);
        expect(probe.pendingPlayback, 0);
        expect(probe.pendingPreparations, 0);
        expect(player.listeners, 0);
        AudioplayersPlatformInterface.instance = previous;
        GlobalAudioplayersPlatformInterface.instance = previousGlobal;
        messenger.setMockMethodCallHandler(channel, null);
        messenger.setMockMethodCallHandler(const MethodChannel(events), null);
      }
    },
  );
  testWidgets(
    'real Dart dispose drains its cancelled native setter and Prepared waiter',
    (tester) async {
      const channel = MethodChannel('xyz.luan/audioplayers');
      const events = 'xyz.luan/audioplayers/events/prepared-proof';
      final messenger = tester.binding.defaultBinaryMessenger;
      final previous = AudioplayersPlatformInterface.instance;
      final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
      final probe = NativeAudioProbe();
      AudioplayersPlatformInterface.instance = probe;
      GlobalAudioplayersPlatformInterface.instance = _Global();
      final setter = Completer<void>();
      var started = false, playDone = false, disposeDone = false;
      Object? playError;
      messenger.setMockMethodCallHandler(channel, (call) async {
        if (call.method == 'setSourceUrl') {
          started = true;
          return setter.future;
        }
        if (call.method == 'release' && !setter.isCompleted) {
          setter.completeError(
            PlatformException(
              code: 'DarwinAudioPreparationCancelled',
              details: {'reason': 'released'},
            ),
          );
        }
        return;
      });
      messenger.setMockMethodCallHandler(
        const MethodChannel(events),
        (_) async => null,
      );
      final player = _ObservedPlayer()..positionUpdater = null;
      probe.observePlayer(player);
      Future<void> spin(bool Function() ready) async {
        for (var i = 0; i < 100; i++) {
          if (ready()) return;
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 2)),
          );
          await tester.pump(const Duration(milliseconds: 5));
        }
        fail('Dispose left a Prepared waiter or native setter pending');
      }

      try {
        unawaited(
          player
              .play(DeviceFileSource('held.wav'), volume: .5)
              .then(
                (_) => playDone = true,
                onError: (Object error) {
                  playError = error;
                  playDone = true;
                },
              ),
        );
        await spin(() => started);
        unawaited(player.dispose().then((_) => disposeDone = true));
        await spin(() => disposeDone && playDone);
        expect(
          playError,
          isA<PlatformException>().having(
            (e) => e.code,
            'code',
            'DarwinAudioPreparationCancelled',
          ),
        );
        expect(player.listeners, 0);
        expect(probe.pendingSources, 0);
        expect(probe.pendingPlayback, 0);
        expect(probe.pendingPreparations, 0);
        expect(probe.preparationsSettled, isTrue);
        expect(probe.abortedPreparations, 1);
        expect(probe.sourceErrorCount, 0);
        expect(probe.live, isEmpty);
      } finally {
        if (!disposeDone) {
          unawaited(player.dispose().then((_) => disposeDone = true));
          await spin(() => disposeDone);
        }
        AudioplayersPlatformInterface.instance = previous;
        GlobalAudioplayersPlatformInterface.instance = previousGlobal;
        messenger.setMockMethodCallHandler(channel, null);
        messenger.setMockMethodCallHandler(const MethodChannel(events), null);
      }
    },
  );
  testWidgets('current completion before native resume reply stays completed', (
    tester,
  ) async {
    const channel = MethodChannel('xyz.luan/audioplayers');
    const events = 'xyz.luan/audioplayers/events/prepared-proof';
    final messenger = tester.binding.defaultBinaryMessenger;
    final previous = AudioplayersPlatformInterface.instance;
    final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
    final probe = NativeAudioProbe();
    AudioplayersPlatformInterface.instance = probe;
    GlobalAudioplayersPlatformInterface.instance = _Global();
    final resume = Completer<void>();
    var sourceStarted = false, resumeStarted = false, playDone = false;
    messenger.setMockMethodCallHandler(channel, (call) async {
      if (call.method == 'setSourceUrl') sourceStarted = true;
      if (call.method == 'resume') {
        resumeStarted = true;
        return resume.future;
      }
      return;
    });
    messenger.setMockMethodCallHandler(
      const MethodChannel(events),
      (_) async => null,
    );
    final player = _ObservedPlayer()..positionUpdater = null;
    probe.observePlayer(player);
    Future<void> spin(bool Function() ready) async {
      for (var i = 0; i < 100; i++) {
        if (ready()) return;
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 2)),
        );
        await tester.pump(const Duration(milliseconds: 5));
      }
      fail('Early complete/resume reply did not settle');
    }

    Future<void> event(String event, [Object? value]) =>
        messenger.handlePlatformMessage(
          events,
          const StandardMethodCodec().encodeSuccessEnvelope({
            'event': event,
            'value': value,
          }),
          (_) {},
        );
    try {
      unawaited(
        player
            .play(DeviceFileSource('short.wav'), volume: .5)
            .then((_) => playDone = true),
      );
      await spin(() => sourceStarted);
      await event('audio.onPrepared', true);
      await spin(() => resumeStarted);
      await event('audio.onComplete');
      await spin(() => player.state == PlayerState.completed);
      expect(playDone, isFalse);
      resume.complete();
      await spin(() => playDone);
      expect(
        player.state,
        PlayerState.completed,
        reason: 'A late resume method reply must not resurrect an ended clip',
      );
      expect(player.desiredState, PlayerState.completed);
      expect(probe.completedResumes, 1);
    } finally {
      if (!resume.isCompleted) resume.complete();
      var done = false;
      unawaited(player.dispose().then((_) => done = true));
      await spin(() => done);
      expect(player.listeners, 0);
      AudioplayersPlatformInterface.instance = previous;
      GlobalAudioplayersPlatformInterface.instance = previousGlobal;
      messenger.setMockMethodCallHandler(channel, null);
      messenger.setMockMethodCallHandler(const MethodChannel(events), null);
    }
  });

  testWidgets(
    'terminal lifetime fences creation, source entries and repeated dispose',
    (tester) async {
      final previous = AudioplayersPlatformInterface.instance;
      final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
      final previousTarget = debugDefaultTargetPlatformOverride;
      final platform = FlaxFakeAudioPlatform()..createGate = Completer<void>();
      AudioplayersPlatformInterface.instance = platform;
      GlobalAudioplayersPlatformInterface.instance = _Global();
      debugDefaultTargetPlatformOverride = TargetPlatform.android;
      final player = _ObservedPlayer()..positionUpdater = null;
      var sourceDone = false, disposeDone = false, preparedTimers = 0;
      Object? sourceError, disposeError;
      final disposed = isA<Exception>().having(
        (error) => '$error',
        'reason',
        contains('disposed'),
      );
      runZoned(
        () {
          unawaited(
            player
                .setSourceDeviceFile('held-before-create.wav')
                .then(
                  (_) => sourceDone = true,
                  onError: (Object error) {
                    sourceError = error;
                    sourceDone = true;
                  },
                ),
          );
        },
        zoneSpecification: ZoneSpecification(
          createTimer: (self, parent, zone, duration, callback) {
            if (duration == AudioPlayer.preparationTimeout) preparedTimers++;
            return parent.createTimer(zone, duration, callback);
          },
        ),
      );
      final states = <PlayerState>[];
      final subscription = player.onPlayerStateChanged.listen(states.add);
      final first = player.dispose(), second = player.dispose();
      unawaited(
        first.then(
          (_) => disposeDone = true,
          onError: (Object error) {
            disposeError = error;
            disposeDone = true;
          },
        ),
      );
      try {
        expect(identical(first, second), isTrue);
        await expectLater(player.resume(), throwsA(disposed));
        await expectLater(
          player.play(DeviceFileSource('blocked.wav')),
          throwsA(disposed),
        );
        expect(
          player.desiredState,
          PlayerState.stopped,
          reason: 'Rejected playback cannot change teardown intent',
        );
        platform.createGate!.complete();
        await _waitForAudio(tester, () => sourceDone && disposeDone);
        expect(disposeError, isNull);
        expect(sourceError, disposed);
        expect(
          preparedTimers,
          0,
          reason:
              'Closing before creation cannot allocate a Prepared waiter timer',
        );
        for (final operation in <Future<void> Function()>[
          () => player.setSourceUrl('unused.wav'),
          () => player.setSourceDeviceFile('unused.wav'),
          () => player.setSourceAsset('unused.wav'),
          () => player.setSourceBytes(Uint8List(4)),
          () => player.setSource(DeviceFileSource('unused.wav')),
        ]) {
          await expectLater(operation(), throwsA(disposed));
        }
        debugDefaultTargetPlatformOverride = TargetPlatform.macOS;
        await expectLater(
          player.setSourceUrl('data:audio/wav;base64,AA=='),
          throwsA(disposed),
        );
        expect(identical(player.dispose(), first), isTrue);
        expect(platform.disposed, [player.playerId]);
        expect(platform.sources, isEmpty);
        expect(platform.resumed, isEmpty);
        expect(player.listeners, 0);
        expect(platform.activeListeners, 0);
        expect(player.source, isNull);
        expect(player.state, PlayerState.disposed);
        expect(player.desiredState, PlayerState.disposed);
        expect(states, isNot(contains(PlayerState.playing)));
      } finally {
        if (!platform.createGate!.isCompleted) platform.createGate!.complete();
        await _waitForAudio(tester, () => disposeDone);
        var subscriptionCancelled = false;
        unawaited(
          subscription.cancel().then((_) => subscriptionCancelled = true),
        );
        await _waitForAudio(tester, () => subscriptionCancelled);
        AudioplayersPlatformInterface.instance = previous;
        GlobalAudioplayersPlatformInterface.instance = previousGlobal;
        debugDefaultTargetPlatformOverride = previousTarget;
      }
    },
  );

  testWidgets(
    'a resume reply after disposal cannot publish playing or start positions',
    (tester) async {
      final previous = AudioplayersPlatformInterface.instance;
      final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
      final platform = _HeldResumeReply();
      AudioplayersPlatformInterface.instance = platform;
      GlobalAudioplayersPlatformInterface.instance = _Global();
      final player = _ObservedPlayer();
      final updater = _CountingUpdater();
      player.positionUpdater = updater;
      final states = <PlayerState>[];
      final subscription = player.onPlayerStateChanged.listen(states.add);
      var sourceDone = false, resumeDone = false, disposeDone = false;
      Object? resumeError;
      unawaited(
        player.setSourceDeviceFile('short.wav').then((_) => sourceDone = true),
      );
      try {
        await _waitForAudio(tester, () => sourceDone);
        unawaited(
          player.resume().then(
            (_) => resumeDone = true,
            onError: (Object error) {
              resumeError = error;
              resumeDone = true;
            },
          ),
        );
        await _waitForAudio(tester, () => platform.started.isCompleted);
        unawaited(player.dispose().then((_) => disposeDone = true));
        await _waitForAudio(tester, () => disposeDone);
        platform.reply.complete();
        await _waitForAudio(tester, () => resumeDone);
        expect(
          resumeError,
          isA<Exception>().having(
            (error) => '$error',
            'reason',
            contains('disposed'),
          ),
        );
        expect(states, isNot(contains(PlayerState.playing)));
        expect(player.state, PlayerState.disposed);
        expect(player.desiredState, PlayerState.disposed);
        expect(updater.starts, 0);
        expect(updater.disposals, 1);
        expect(player.listeners, 0);
        expect(platform.activeListeners, 0);
        expect(platform.disposed, [player.playerId]);
      } finally {
        if (!platform.reply.isCompleted) platform.reply.complete();
        if (!disposeDone) {
          unawaited(player.dispose().then((_) => disposeDone = true));
        }
        await _waitForAudio(tester, () => disposeDone && resumeDone);
        var subscriptionCancelled = false;
        unawaited(
          subscription.cancel().then((_) => subscriptionCancelled = true),
        );
        await _waitForAudio(tester, () => subscriptionCancelled);
        AudioplayersPlatformInterface.instance = previous;
        GlobalAudioplayersPlatformInterface.instance = previousGlobal;
      }
    },
  );
}

Future<void> _waitForAudio(WidgetTester tester, bool Function() ready) async {
  for (var i = 0; i < 150; i++) {
    if (ready()) return;
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 2)),
    );
    await tester.pump(const Duration(milliseconds: 5));
  }
  fail('Audio lifetime boundary did not settle');
}

class _HeldResumeReply extends FlaxFakeAudioPlatform {
  final started = Completer<void>(), reply = Completer<void>();
  @override
  Future<void> resume(String playerId) async {
    await super.resume(playerId);
    started.complete();
    await reply.future;
  }
}

class _CountingUpdater extends PositionUpdater {
  _CountingUpdater() : super(getPosition: () async => null);
  int starts = 0, disposals = 0;
  @override
  void start() {
    starts++;
  }

  @override
  void stop() {}
  @override
  Future<void> dispose() async {
    disposals++;
    await super.dispose();
  }
}

class _Global extends GlobalAudioplayersPlatformInterface {
  @override
  Stream<GlobalAudioEvent> getGlobalEventStream() => const Stream.empty();
  @override
  Future<void> init() async {}
  @override
  Future<void> setGlobalAudioContext(AudioContext context) async {}
  @override
  Future<void> emitGlobalError(String code, String message) async {}
  @override
  Future<void> emitGlobalLog(String message) async {}
}
