import 'dart:async';
import 'dart:convert';

import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

import 'native_audio_probe.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  const methods = MethodChannel('xyz.luan/audioplayers');
  const events = 'xyz.luan/audioplayers/events/probe';
  final messenger =
      TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger;
  late NativeAudioProbe probe;
  late StreamSubscription<Object?> subscription;
  final received = <Object?>[];
  final receivedStacks = <StackTrace>[];
  var nativeListens = 0;
  Future<void> emit(Object event) async {
    await messenger.handlePlatformMessage(
      events,
      const StandardMethodCodec().encodeSuccessEnvelope(event),
      (_) {},
    );
    await Future<void>.delayed(Duration.zero);
  }

  setUp(() async {
    received.clear();
    receivedStacks.clear();
    nativeListens = 0;
    messenger.setMockMethodCallHandler(methods, (_) async => null);
    messenger.setMockMethodCallHandler(const MethodChannel(events), (
      call,
    ) async {
      if (call.method == 'listen') nativeListens++;
      return;
    });
    probe = NativeAudioProbe();
    await probe.create('probe');
    subscription = probe
        .getEventStream('probe')
        .listen(
          received.add,
          onError: (Object error, StackTrace stack) {
            received.add(error);
            receivedStacks.add(stack);
          },
        );
    await Future<void>.delayed(Duration.zero);
  });
  tearDown(() async {
    await subscription.cancel();
    if (probe.live.contains('probe')) await probe.dispose('probe');
    messenger.setMockMethodCallHandler(methods, null);
    messenger.setMockMethodCallHandler(const MethodChannel(events), null);
  });

  test(
    'acknowledged source setter cannot stand in for native prepared event',
    () async {
      await probe.setSourceBytes('probe', Uint8List(1));
      expect(probe.successfulEffectSources, 0);
      await emit({'event': 'audio.onPrepared', 'value': true});
      expect(probe.successfulEffectSources, 1);
      expect(probe.preparationsSettled, isFalse);
      await probe.resume('probe');
      expect(probe.preparationsSettled, isTrue);
      expect(probe.preparedResumed, 1);
      expect(nativeListens, 1);
    },
  );

  test(
    'pause cannot settle a source whose prepared event is missing',
    () async {
      await probe.setSourceBytes('probe', Uint8List(1));
      await probe.pause('probe');
      await emit({'event': 'audio.onPrepared', 'value': false});
      expect(probe.preparationsSettled, isFalse);
      expect(probe.pendingPreparations, 1);
      final encoded = jsonDecode(jsonEncode(probe.preparationStatus)) as Map;
      expect(encoded['preparations'].single['prepared'], isFalse);
      expect(encoded['preparations'].single['setterDone'], isTrue);
      expect(probe.preparedCancelled, 0);
      await emit({'event': 'audio.onPrepared', 'value': true});
      expect(probe.preparationsSettled, isTrue);
      expect(probe.preparedCancelled, 1);
      expect(probe.completedResumes, 0);
    },
  );

  test(
    'cached effect resume settles volume without inventing a preparation',
    () async {
      await probe.setSourceBytes('probe', Uint8List(1));
      await emit({'event': 'audio.onPrepared', 'value': true});
      await probe.resume('probe');
      await emit({'event': 'audio.onComplete'});

      await probe.setVolume('probe', 0.5);
      expect(probe.preparationsSettled, isFalse);
      await probe.resume('probe');

      expect(probe.preparationsSettled, isTrue);
      expect(probe.sourceStarts, 1);
      expect(probe.preparedResumed, 1);
      expect(probe.effectResumes, 2);
      expect(probe.playbackErrors, isEmpty);
    },
  );

  test(
    'cached effect resume after volume cancellation remains unhealthy',
    () async {
      await probe.setSourceBytes('probe', Uint8List(1));
      await emit({'event': 'audio.onPrepared', 'value': true});
      await probe.resume('probe');
      await emit({'event': 'audio.onComplete'});

      await probe.setVolume('probe', 0.5);
      await probe.stop('probe');
      await probe.resume('probe');

      expect(probe.playbackErrors, hasLength(1));
      expect(probe.sourceStarts, 1);
      expect(probe.preparedResumed, 1);
    },
  );

  test('prepared event cannot replace an unfinished native setter', () async {
    final setter = Completer<void>();
    messenger.setMockMethodCallHandler(methods, (call) async {
      if (call.method == 'setSourceBytes') await setter.future;
      return;
    });
    final pending = probe.setSourceBytes('probe', Uint8List(1));
    await emit({'event': 'audio.onPrepared', 'value': true});
    await probe.pause('probe');
    expect(probe.preparationsSettled, isFalse);
    expect(probe.successfulEffectSources, 0);
    setter.complete();
    await pending;
    expect(probe.preparationsSettled, isTrue);
    expect(probe.preparedCancelled, 1);
  });

  test(
    'held volume cancellation follows its source but not the next play',
    () async {
      final volume = Completer<void>();
      messenger.setMockMethodCallHandler(methods, (call) async {
        if (call.method == 'setVolume') await volume.future;
        return;
      });
      final pending = probe.setVolume('probe', 0.5);
      await probe.pause('probe');
      expect(probe.preparationsSettled, isFalse);
      volume.complete();
      await pending;
      await probe.setSourceBytes('probe', Uint8List(1));
      await emit({'event': 'audio.onPrepared', 'value': true});
      expect(probe.preparedCancelled, 1);
      expect(probe.preparationsSettled, isTrue);
      await probe.setVolume('probe', 0.5);
      await probe.setSourceBytes('probe', Uint8List(1));
      await emit({'event': 'audio.onPrepared', 'value': true});
      expect(probe.preparationsSettled, isFalse);
      expect(probe.preparedCancelled, 1);
      await probe.resume('probe');
      expect(probe.preparationsSettled, isTrue);
      expect(probe.preparedResumed, 1);
      expect(probe.effectResumes, 1);
    },
  );

  test(
    'disposal abort is distinct from prepared or successful playback',
    () async {
      await probe.setSourceBytes('probe', Uint8List(1));
      await probe.dispose('probe');
      expect(probe.abortedPreparations, 1);
      expect(probe.preparedCancelled, 0);
      expect(probe.preparedResumed, 0);
      expect(probe.successfulEffectSources, 0);
    },
  );

  Future<void> decoderError() async {
    final envelope = WriteBuffer()..putUint8(1);
    const codec = StandardMessageCodec();
    for (final value in [
      'native',
      'decoder',
      {'domain': 'AVFoundationErrorDomain', 'code': -11849},
      'native-decoder-stack',
    ]) {
      codec.writeValue(envelope, value);
    }
    await messenger.handlePlatformMessage(events, envelope.done(), (_) {});
    await Future<void>.delayed(Duration.zero);
  }

  test('event observation records and forwards native errors once', () async {
    final nativeErrors = <Object>[], nativeStacks = <StackTrace>[];
    final raw = probe.streams['probe']!.listen(
      (_) {},
      onError: (Object error, StackTrace stack) {
        nativeErrors.add(error);
        nativeStacks.add(stack);
      },
    );
    try {
      await decoderError();
      expect(received.single, same(nativeErrors.single));
      expect(receivedStacks.single, same(nativeStacks.single));
      expect(
        received.single,
        isA<PlatformException>()
            .having((e) => e.code, 'code', 'native')
            .having((e) => e.message, 'message', 'decoder')
            .having((e) => e.details, 'details', {
              'domain': 'AVFoundationErrorDomain',
              'code': -11849,
            })
            .having((e) => e.stacktrace, 'stacktrace', 'native-decoder-stack'),
      );
      expect(probe.errors, hasLength(1));
      expect(probe.errors.single, contains('decoder'));
      expect(
        probe.sourceEvents.where((e) => e['state'] == 'error-event'),
        hasLength(1),
      );
      expect(nativeListens, 1);
    } finally {
      await raw.cancel();
    }
  });
  test('decoder event fails an acknowledged unprepared source once', () async {
    await probe.setSourceBytes('probe', Uint8List(1));
    await decoderError();
    expect(received, hasLength(1));
    expect(probe.errors, hasLength(1));
    expect(probe.failedPreparations, 1);
    expect(probe.pendingPreparations, 0);
    expect(probe.preparationsSettled, isTrue);
    expect(probe.successfulEffectSources, 0);
    expect(probe.preparedCancelled, 0);
    expect(probe.preparedResumed, 0);
    await probe.stop('probe');
    await emit({'event': 'audio.onPrepared', 'value': true});
    expect(probe.failedPreparations, 1);
    expect(probe.successfulEffectSources, 0);
    expect(probe.errors, hasLength(1));
  });
  test('event and setter errors cannot fail a preparation twice', () async {
    final setter = Completer<void>();
    messenger.setMockMethodCallHandler(methods, (call) async {
      if (call.method == 'setSourceBytes') return setter.future;
      return;
    });
    final pending = probe.setSourceBytes('probe', Uint8List(1));
    final failure = expectLater(pending, throwsA(isA<PlatformException>()));
    await decoderError();
    setter.completeError(PlatformException(code: 'native', message: 'decoder'));
    await failure;
    expect(received, hasLength(1));
    expect(probe.errors, hasLength(1));
    expect(probe.sourceErrorCount, 1);
    expect(probe.failedPreparations, 1);
    expect(probe.pendingSources, 0);
    expect(probe.preparationsSettled, isTrue);
  });
  test(
    'resume already in flight remains measured when pause follows',
    () async {
      await probe.setSourceBytes('probe', Uint8List(1));
      await emit({'event': 'audio.onPrepared', 'value': true});
      final resume = Completer<void>();
      messenger.setMockMethodCallHandler(methods, (call) async {
        if (call.method == 'resume') await resume.future;
        return;
      });
      final pending = probe.resume('probe');
      await probe.pause('probe');
      expect(probe.preparationsSettled, isFalse);
      resume.complete();
      await pending;
      expect(probe.preparationsSettled, isTrue);
      expect(probe.preparedResumed, 1);
      expect(probe.preparedCancelled, 0);
      expect(probe.playbackErrors, isEmpty);
    },
  );

  test('a new resume after cancellation remains a health failure', () async {
    await probe.setSourceBytes('probe', Uint8List(1));
    await probe.pause('probe');
    await emit({'event': 'audio.onPrepared', 'value': true});
    await probe.resume('probe');
    expect(probe.playbackErrors, hasLength(1));
    expect(probe.preparedCancelled, 1);
    expect(probe.preparedResumed, 0);
  });
  test('typed native release cancellation drains source without inventing Prepared', () async {
    final reply = Completer<void>();
    messenger.setMockMethodCallHandler(methods, (call) async {
      if (call.method == 'setSourceBytes') return reply.future;
      return;
    });
    Object? failure;
    final pending = probe.setSourceBytes('probe', Uint8List(1)).catchError((
      Object error,
    ) {
      failure = error;
    });
    await probe.release('probe');
    reply.completeError(
      PlatformException(
        code: 'DarwinAudioPreparationCancelled',
        details: {'reason': 'released'},
      ),
    );
    await pending;
    expect(failure, isA<PlatformException>());
    expect(probe.pendingSources, 0);
    expect(probe.preparationsSettled, isTrue);
    expect(probe.abortedPreparations, 1);
    expect(probe.preparedCancelled, 0);
    expect(probe.sourceErrorCount, 0);
    expect(jsonDecode(jsonEncode(probe.sourceEvents)), isA<List>());
  });

  test(
    'unknown cancellation and genuine decoder errors remain failures',
    () async {
      messenger.setMockMethodCallHandler(methods, (call) async {
        if (call.method == 'setSourceBytes') {
          throw PlatformException(
            code: 'DarwinAudioPreparationCancelled',
            details: {'reason': 'released'},
          );
        }
        return;
      });
      await expectLater(
        probe.setSourceBytes('probe', Uint8List(1)),
        throwsA(isA<PlatformException>()),
      );
      expect(probe.sourceErrorCount, 1);
      expect(probe.failedPreparations, 1);
      expect(probe.abortedPreparations, 0);
    },
  );

  test(
    'replacement retains the exact previous snapshot and remains unhealthy',
    () async {
      await probe.setSourceBytes('probe', Uint8List(1));
      await probe.setSourceBytes('probe', Uint8List(1));
      final prior = probe.sourceEvents.singleWhere(
        (e) => e['state'] == 'replaced-unsettled',
      );
      expect(prior['request'], 1);
      expect(prior['setterDone'], isTrue);
      expect(prior['prepared'], isFalse);
      expect(probe.errors, hasLength(1));
      expect(probe.pendingPreparations, 1);
    },
  );
}
