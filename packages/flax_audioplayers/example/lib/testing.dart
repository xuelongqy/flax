import 'dart:async';

import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flutter/services.dart';

class FlaxFakeGlobalAudioPlatform extends GlobalAudioplayersPlatformInterface {
  // Keep the global stream, but use a fresh platform per test so the upstream
  // cached initialization Future is created in the current FakeAsync zone.
  static final _events = StreamController<GlobalAudioEvent>.broadcast();
  @override
  Future<void> init() async {}
  @override
  Future<void> setGlobalAudioContext(AudioContext ctx) async {}
  @override
  Stream<GlobalAudioEvent> getGlobalEventStream() => _events.stream;
  @override
  Future<void> emitGlobalLog(String message) async {
    _events.add(
      GlobalAudioEvent(
        eventType: GlobalAudioEventType.log,
        logMessage: message,
      ),
    );
  }

  @override
  Future<void> emitGlobalError(String code, String message) async {
    _events.addError(PlatformException(code: code, message: message));
  }
}

/// Deterministic bridge tests only; integration_test uses the real native plugin.
class FlaxFakeAudioPlatform extends AudioplayersPlatformInterface {
  final created = <String>[];
  final disposed = <String>[];
  final resumed = <String>[];
  final sources = <({String playerId, String url})>[];
  final volumes = <String, double>{};
  final rates = <String, double>{};
  final volumeCalls = <double>[];
  final rateCalls = <double>[];
  Completer<void>? volumeGate;
  Completer<void>? rateGate;
  final releaseModes = <String, ReleaseMode>{};
  final _events = <String, StreamController<AudioEvent>>{};
  final _positions = <String, int>{};
  final _playing = <String>{};
  int activeListeners = 0;
  bool holdPreparation = false;
  bool failNext = false;
  Completer<void>? createGate;
  Completer<void>? stopModeGate;
  final pendingStopModes = <String>[];

  @override
  Future<void> create(String playerId) async {
    created.add(playerId);
    _positions[playerId] = 0;
    _events[playerId] = StreamController<AudioEvent>.broadcast(
      onListen: () => activeListeners++,
      onCancel: () => activeListeners--,
    );
    await createGate?.future;
  }

  @override
  Stream<AudioEvent> getEventStream(String playerId) =>
      _events[playerId]!.stream;
  @override
  Future<void> dispose(String playerId) async {
    disposed.add(playerId);
    await _events.remove(playerId)?.close();
    _positions.remove(playerId);
    _playing.remove(playerId);
  }

  @override
  Future<void> setSourceUrl(
    String playerId,
    String url, {
    bool? isLocal,
    String? mimeType,
  }) async {
    sources.add((playerId: playerId, url: url));
    final events = _events[playerId]!;
    if (failNext) {
      failNext = false;
      events.addError(
        PlatformException(code: 'AudioError', message: 'Cannot decode fixture'),
      );
    } else if (!holdPreparation) {
      events.add(
        const AudioEvent(
          eventType: AudioEventType.duration,
          duration: Duration(seconds: 30),
        ),
      );
      events.add(
        const AudioEvent(eventType: AudioEventType.prepared, isPrepared: true),
      );
    }
  }

  @override
  Future<void> setSourceBytes(
    String playerId,
    Uint8List bytes, {
    String? mimeType,
  }) async => setSourceUrl(playerId, 'bytes', mimeType: mimeType);
  @override
  Future<void> resume(String playerId) async {
    resumed.add(playerId);
    _playing.add(playerId);
  }

  void complete(String playerId) {
    final looping = releaseModes[playerId] == ReleaseMode.loop;
    _positions[playerId] = looping ? 0 : 30000;
    if (!looping) _playing.remove(playerId);
    _events[playerId]!.add(
      const AudioEvent(eventType: AudioEventType.complete),
    );
  }

  @override
  Future<void> pause(String playerId) async {
    _playing.remove(playerId);
  }

  @override
  Future<void> stop(String playerId) async {
    _playing.remove(playerId);
    _positions[playerId] = 0;
  }

  @override
  Future<void> release(String playerId) async {
    _playing.remove(playerId);
  }

  @override
  Future<void> seek(String playerId, Duration position) async {
    _positions[playerId] = position.inMilliseconds;
    _events[playerId]!.add(
      const AudioEvent(eventType: AudioEventType.seekComplete),
    );
  }

  @override
  Future<int?> getDuration(String playerId) async => 30000;
  @override
  Future<int?> getCurrentPosition(String playerId) async {
    if (_playing.contains(playerId)) {
      _positions[playerId] = _positions[playerId]! + 100;
      if (_positions[playerId]! >= 30000) complete(playerId);
    }
    return _positions[playerId];
  }

  @override
  Future<void> setVolume(String playerId, double volume) async {
    volumeCalls.add(volume);
    await volumeGate?.future;
    volumes[playerId] = volume;
  }

  @override
  Future<void> setPlaybackRate(String playerId, double playbackRate) async {
    rateCalls.add(playbackRate);
    await rateGate?.future;
    rates[playerId] = playbackRate;
  }

  @override
  Future<void> setReleaseMode(String playerId, ReleaseMode releaseMode) async {
    if (releaseMode == ReleaseMode.stop && stopModeGate != null) {
      pendingStopModes.add(playerId);
      await stopModeGate!.future;
    }
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
  Future<void> emitLog(String playerId, String message) async {
    _events[playerId]!.add(
      AudioEvent(eventType: AudioEventType.log, logMessage: message),
    );
  }

  @override
  Future<void> emitError(String playerId, String code, String message) async {
    _events[playerId]!.addError(
      PlatformException(code: code, message: message),
    );
  }
}
