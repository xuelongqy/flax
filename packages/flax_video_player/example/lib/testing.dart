import 'dart:async';

import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:video_player_platform_interface/video_player_platform_interface.dart';

/// Tests bridge behavior only; native playback is covered by integration_test.
class FlaxFakeVideoPlatform extends VideoPlayerPlatform {
  final sources = <DataSource>[];
  final disposed = <int>[];
  final _events = <int, StreamController<VideoEvent>>{};
  final _positions = <int, Duration>{};
  final _playing = <int, bool>{};
  bool failNext = false;
  bool holdInitialization = false;

  @override
  Future<void> init() async {}

  @override
  Future<int> createWithOptions(VideoCreationOptions options) async {
    final id = sources.length + 1;
    sources.add(options.dataSource);
    _positions[id] = Duration.zero;
    _playing[id] = false;
    final fail = failNext;
    final bunny =
        options.dataSource.uri?.endsWith('trailer_iphone.m4v') == true;
    failNext = false;
    late StreamController<VideoEvent> events;
    events = StreamController<VideoEvent>(
      onListen: () {
        if (holdInitialization) return;
        if (fail) {
          events.addError(
            PlatformException(
              code: 'VideoError',
              message: 'Cannot decode fixture',
            ),
          );
        } else {
          events.add(
            VideoEvent(
              eventType: VideoEventType.initialized,
              duration: Duration(milliseconds: bunny ? 33023 : 52208),
              size: bunny ? const Size(480, 270) : const Size(854, 480),
            ),
          );
        }
      },
    );
    _events[id] = events;
    return id;
  }

  @override
  Stream<VideoEvent> videoEventsFor(int playerId) => _events[playerId]!.stream;

  @override
  Widget buildViewWithOptions(VideoViewOptions options) =>
      SizedBox(key: ValueKey('fake-video-${options.playerId}'));

  @override
  Future<void> dispose(int playerId) async {
    disposed.add(playerId);
    await _events.remove(playerId)?.close();
    _positions.remove(playerId);
    _playing.remove(playerId);
  }

  @override
  Future<void> play(int playerId) async {
    _playing[playerId] = true;
  }

  @override
  Future<void> pause(int playerId) async {
    _playing[playerId] = false;
  }

  @override
  Future<void> seekTo(int playerId, Duration position) async {
    _positions[playerId] = position;
  }

  @override
  Future<Duration> getPosition(int playerId) async {
    if (_playing[playerId] == true) {
      _positions[playerId] =
          _positions[playerId]! + const Duration(milliseconds: 100);
    }
    return _positions[playerId]!;
  }

  @override
  Future<void> setLooping(int playerId, bool looping) async {}
  @override
  Future<void> setVolume(int playerId, double volume) async {}
  @override
  Future<void> setPlaybackSpeed(int playerId, double speed) async {}
  @override
  Future<void> setMixWithOthers(bool mixWithOthers) async {}
}
