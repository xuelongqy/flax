import 'dart:async';

import 'package:audioplayers/audioplayers.dart' as api;
import 'package:flutter/services.dart';
import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:audioplayers_platform_interface/src/audioplayers_platform.dart';

class _Preparation {
  _Preparation(this.request, this.player, this.music, this.cancellation);
  final int request;
  final String player;
  final bool music;
  String? cancellation, outcome;
  bool setterDone = false,
      prepared = false,
      resumed = false,
      resumeStarted = false,
      counted = false;
  Map<String, Object?> snapshot() => {
    'request': request,
    'player': player,
    'kind': music ? 'music' : 'effect',
    'setterDone': setterDone,
    'prepared': prepared,
    'resumed': resumed,
    'resumeStarted': resumeStarted,
    'cancellation': cancellation,
    'outcome': outcome,
  };
}

// Pinned 7.2.0 concrete backend preserves native method/event channels in this probe.
class NativeAudioProbe extends AudioplayersPlatform {
  final created = <String>[];
  final disposed = <String>[];
  final live = <String>{};
  final errors = <String>[];
  final sourceEvents = <Map<String, Object?>>[];
  final sourceErrors = <String>[];
  Map<String, Object?>? firstUnsettled;
  final overlap = <String, Object?>{};
  final sourceClock = Stopwatch()..start();
  final _preparations = <String, _Preparation>{};
  final _players = <String, WeakReference<api.AudioPlayer>>{};
  int positionCalls = 0, pendingPositions = 0, maximumPendingPositions = 0;
  void observePlayer(api.AudioPlayer player) {
    if (!_players.containsKey(player.playerId) && _players.length >= 5) {
      throw StateError('Audio probe observed more than five live players');
    }
    _players[player.playerId] = WeakReference(player);
  }

  final _disposing = <String>{};
  // Volume precedes source preparation or cached resume. A pause during volume
  // must carry into the next operation for that playback request.
  final _beforeSource = <String, String?>{};
  var pendingSources = 0;
  int sourceStarts = 0, sourceEventCount = 0, sourceErrorCount = 0;
  int preparedResumed = 0,
      preparedCancelled = 0,
      abortedPreparations = 0,
      failedPreparations = 0;
  int pendingPlayback = 0, playbackCalls = 0, completedResumes = 0;
  int musicResumes = 0, effectResumes = 0;
  int successfulMusicSources = 0, successfulEffectSources = 0;
  final playbackErrors = <String>[];
  final musicPlayers = <String>{};

  int get pendingPreparations =>
      _preparations.values.where((p) => p.outcome == null).length;
  bool get preparationsSettled =>
      pendingPreparations == 0 &&
      _beforeSource.isEmpty &&
      sourceStarts ==
          preparedResumed +
              preparedCancelled +
              abortedPreparations +
              failedPreparations;
  Map<String, Object?> get preparationStatus => {
    'observedMicros': sourceClock.elapsedMicroseconds,
    'positionCalls': positionCalls,
    'pendingPositions': pendingPositions,
    'maximumPendingPositions': maximumPendingPositions,
    'sourceStarts': sourceStarts,
    'preparedResumed': preparedResumed,
    'preparedCancelled': preparedCancelled,
    'abortedPreparations': abortedPreparations,
    'failedPreparations': failedPreparations,
    'pendingPreparations': pendingPreparations,
    'pendingPlayIntents': _beforeSource.length,
    'pendingSources': pendingSources,
    'pendingPlayback': pendingPlayback,
    'completedResumes': completedResumes,
    'musicResumes': musicResumes,
    'effectResumes': effectResumes,
    'preparedMusicSources': successfulMusicSources,
    'preparedEffectSources': successfulEffectSources,
    'sourceErrors': sourceErrorCount,
    'firstUnsettled': firstUnsettled,
    'preparations': _preparations.values
        .where((p) => p.outcome == null)
        .map((p) => p.snapshot())
        .toList(),
  };

  void _recordSource(Map<String, Object?> event) {
    final player = _players[event['player']]?.target;
    final record = {
      ...event,
      'micros': sourceClock.elapsedMicroseconds,
      'dartDesiredState': player?.desiredState.name,
      'dartState': player?.state.name,
    };
    if (sourceEvents.length < 1024) {
      sourceEvents.add(record);
    } else {
      sourceEvents[sourceEventCount % 1024] = record;
    }
    sourceEventCount++;
  }

  void _finish(_Preparation p) {
    if (p.outcome != null || !p.setterDone || !p.prepared) return;
    if (!p.counted) {
      p.counted = true;
      if (p.music) {
        successfulMusicSources++;
      } else {
        successfulEffectSources++;
      }
    }
    if (p.resumeStarted) {
      if (!p.resumed) return;
      p.outcome = 'prepared-resumed';
      preparedResumed++;
    } else if (p.cancellation != null) {
      p.outcome = 'prepared-cancelled';
      preparedCancelled++;
    }
    if (p.outcome != null) _recordSource({...p.snapshot(), 'state': p.outcome});
  }

  @override
  Stream<AudioEvent> getEventStream(String id) => super
      .getEventStream(id)
      .map((event) {
        if (event.eventType == AudioEventType.prepared &&
            event.isPrepared == true) {
          final p = _preparations[id];
          if (p != null && p.outcome == null) {
            p.prepared = true;
            _recordSource({...p.snapshot(), 'state': 'prepared-event'});
            _finish(p);
          }
        }
        if (event.eventType == AudioEventType.complete) {
          _recordSource({
            'player': id,
            'state': 'complete-event',
            'preparation': _preparations[id]?.snapshot(),
          });
        }
        return event;
      })
      .handleError((Object error, StackTrace stack) {
        errors.add('event $id: $error');
        final p = _preparations[id];
        if (p != null && p.outcome == null) {
          p.outcome = 'failed';
          failedPreparations++;
        }
        _recordSource({
          'player': id,
          'state': 'error-event',
          'error': '$error',
          'preparation': p?.snapshot(),
        });
        Error.throwWithStackTrace(error, stack);
      });

  Future<void> _playback(
    String operation,
    Future<void> Function() action,
  ) async {
    pendingPlayback++;
    playbackCalls++;
    try {
      await action();
    } catch (error) {
      playbackErrors.add('$operation: $error');
      rethrow;
    } finally {
      pendingPlayback--;
    }
  }

  @override
  Future<int?> getCurrentPosition(String id) async {
    positionCalls++;
    pendingPositions++;
    if (pendingPositions > maximumPendingPositions) {
      maximumPendingPositions = pendingPositions;
    }
    try {
      return await super.getCurrentPosition(id);
    } finally {
      pendingPositions--;
    }
  }

  @override
  Future<void> setVolume(String id, double volume) {
    if (live.contains(id) && !_disposing.contains(id)) _beforeSource[id] = null;
    _recordSource({'player': id, 'state': 'volume-entry'});
    return _playback('volume', () => super.setVolume(id, volume));
  }

  @override
  Future<void> resume(String id) => _playback('resume', () async {
    final p = _preparations[id];
    final cancelledVolume = _beforeSource.remove(id);
    final cancelledBeforeEntry = p?.cancellation != null;
    if (p != null) p.resumeStarted = true;
    _recordSource({
      'player': id,
      'state': 'resume-entry',
      'preparation': p?.snapshot(),
    });
    await super.resume(id);
    _recordSource({
      'player': id,
      'state': 'resume-completed',
      'preparation': p?.snapshot(),
    });
    completedResumes++;
    if (musicPlayers.contains(id)) {
      musicResumes++;
    } else {
      effectResumes++;
    }
    if (cancelledVolume != null) {
      playbackErrors.add(
        'resume after $cancelledVolume cancelled volume for $id',
      );
    } else if (p != null) {
      if (cancelledBeforeEntry) {
        playbackErrors.add('resume after cancelled preparation ${p.request}');
      } else {
        p.resumed = true;
        _finish(p);
      }
    }
  });

  void _cancel(String id, String operation) {
    if (_beforeSource.containsKey(id)) _beforeSource[id] = operation;
    final p = _preparations[id];
    if (p != null && p.outcome == null) {
      p.cancellation = operation;
      _recordSource({...p.snapshot(), 'state': '$operation-intent'});
      _finish(p);
    }
  }

  @override
  Future<void> pause(String id) {
    _cancel(id, 'pause');
    return _playback('pause', () => super.pause(id));
  }

  @override
  Future<void> stop(String id) {
    _cancel(id, 'stop');
    return _playback('stop', () => super.stop(id));
  }

  @override
  Future<void> setReleaseMode(String id, ReleaseMode mode) async {
    await super.setReleaseMode(id, mode);
    if (mode == ReleaseMode.loop) musicPlayers.add(id);
  }

  Future<void> _source(
    String operation,
    String id,
    Future<void> Function() action,
  ) async {
    final prior = _preparations[id];
    if (prior != null && prior.outcome == null) {
      final recent =
          sourceEvents.where((event) => event['player'] == id).toList()..sort(
            (a, b) => (a['micros'] as int).compareTo(b['micros'] as int),
          );
      final player = _players[id]?.target;
      firstUnsettled ??= {
        'prior': prior.snapshot(),
        'dartDesiredState': player?.desiredState.name,
        'dartState': player?.state.name,
        'recent': recent
            .skip(recent.length > 64 ? recent.length - 64 : 0)
            .toList(),
      };
      errors.add('Source replaced unsettled preparation ${prior.request}');
      _recordSource({...prior.snapshot(), 'state': 'replaced-unsettled'});
      prior.cancellation = 'replaced';
      prior.outcome = 'aborted-replaced';
      abortedPreparations++;
    }
    final p = _Preparation(
      ++sourceStarts,
      id,
      musicPlayers.contains(id),
      _beforeSource.remove(id),
    );
    if (live.contains(id) && !_disposing.contains(id)) {
      _preparations[id] = p;
    } else {
      p.outcome = 'aborted-disposed';
      abortedPreparations++;
    }
    pendingSources++;
    _recordSource({
      ...p.snapshot(),
      'operation': operation,
      'state': 'started',
      'liveAtEntry': live.contains(id),
    });
    try {
      await action();
      p.setterDone = true;
      _finish(p);
    } catch (error) {
      final reason = error is PlatformException && error.details is Map
          ? (error.details as Map)['reason']
          : null;
      final expectedAbort =
          error is PlatformException &&
          error.code == 'DarwinAudioPreparationCancelled' &&
          ((reason == 'released' &&
                  (p.cancellation == 'release' ||
                      p.cancellation == 'dispose')) ||
              (reason == 'disposed' && p.cancellation == 'dispose') ||
              (reason == 'replaced' && p.cancellation == 'replaced') ||
              (reason == 'stale' &&
                  ['release', 'dispose', 'replaced'].contains(p.cancellation)));
      if (expectedAbort) {
        if (p.outcome == null) {
          p.outcome = 'aborted-native-$reason';
          abortedPreparations++;
        }
        _recordSource({
          ...p.snapshot(),
          'state': 'native-cancelled',
          'nativeReason': reason,
        });
      } else {
        sourceErrorCount++;
        if (sourceErrors.length < 32) {
          sourceErrors.add('$operation $id: $error');
        }
        if (p.outcome == null) {
          p.outcome = 'failed';
          failedPreparations++;
        }
      }
      rethrow;
    } finally {
      pendingSources--;
      _recordSource({
        ...p.snapshot(),
        'state': 'setter-settled',
        'liveAtSettlement': live.contains(id),
      });
    }
  }

  @override
  Future<void> setSourceBytes(String id, Uint8List bytes, {String? mimeType}) =>
      _source(
        'bytes',
        id,
        () => super.setSourceBytes(id, bytes, mimeType: mimeType),
      );
  @override
  Future<void> setSourceUrl(
    String id,
    String url, {
    bool? isLocal,
    String? mimeType,
  }) => _source(
    'url',
    id,
    () => super.setSourceUrl(id, url, isLocal: isLocal, mimeType: mimeType),
  );
  @override
  Future<void> create(String id) async {
    try {
      await super.create(id);
      created.add(id);
      live.add(id);
    } catch (error) {
      errors.add('create $id: $error');
      rethrow;
    }
  }

  @override
  Future<void> release(String id) {
    _cancel(id, 'release');
    return _playback('release', () => super.release(id));
  }

  @override
  Future<void> dispose(String id) async {
    _disposing.add(id);
    _cancel(id, 'dispose');
    final p = _preparations[id];
    if (p != null && p.outcome == null) {
      p.outcome = 'aborted-disposed';
      abortedPreparations++;
      _recordSource({...p.snapshot(), 'state': p.outcome});
    }
    try {
      await super.dispose(id);
      disposed.add(id);
      live.remove(id);
      musicPlayers.remove(id);
      _preparations.remove(id);
      _beforeSource.remove(id);
      _disposing.remove(id);
      _players.remove(id);
    } catch (error) {
      errors.add('dispose $id: $error');
      rethrow;
    }
  }
}
