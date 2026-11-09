import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:audioplayers/audioplayers.dart';
import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

// Reuse the owner's native-channel fixture; file publication stays real.
// ignore: avoid_relative_lib_imports
import '../../../packages/flax_audioplayers/example/lib/testing.dart';
import 'audio_io_probe.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();
  const paths = MethodChannel('plugins.flutter.io/path_provider');
  final messenger =
      TestDefaultBinaryMessengerBinding.instance.defaultBinaryMessenger;
  late AudioplayersPlatformInterface previous;
  late GlobalAudioplayersPlatformInterface previousGlobal;
  late FlaxFakeAudioPlatform platform;
  late Directory directory;
  final players = <AudioPlayer>[];
  final bytes = Uint8List.fromList(List.generate(4096, (i) => i % 251));

  AudioPlayer player() {
    final result = AudioPlayer()..positionUpdater = null;
    players.add(result);
    return result;
  }

  setUp(() async {
    directory = await Directory(Platform.environment['TMPDIR']!)
        .createTemp('survivors-byte-publication-');
    messenger.setMockMethodCallHandler(paths, (_) async => directory.path);
    previous = AudioplayersPlatformInterface.instance;
    previousGlobal = GlobalAudioplayersPlatformInterface.instance;
    platform = FlaxFakeAudioPlatform();
    AudioplayersPlatformInterface.instance = platform;
    GlobalAudioplayersPlatformInterface.instance =
        FlaxFakeGlobalAudioPlatform();
    debugDefaultTargetPlatformOverride = TargetPlatform.macOS;
  });
  tearDown(() async {
    for (final player in players) {
      await player.dispose();
    }
    players.clear();
    AudioplayersPlatformInterface.instance = previous;
    GlobalAudioplayersPlatformInterface.instance = previousGlobal;
    debugDefaultTargetPlatformOverride = null;
    messenger.setMockMethodCallHandler(paths, null);
    await directory.delete(recursive: true);
  });

  test('byte-source rewrite keeps active and fresh readers complete', () async {
    await player().setSourceBytes(bytes);
    final published = File(platform.sources.single.url);
    final reader = await published.open();
    final boundary = SurvivorsAudioIoBoundary();
    final next = player();
    final pending = IOOverrides.runWithIOOverrides(
      () => next.setSourceBytes(bytes),
      boundary,
    );
    await boundary.opened.future;
    try {
      expect(await published.readAsBytes(), bytes);
      expect(await reader.read(bytes.length), bytes);
      expect(platform.sources, hasLength(1));
    } finally {
      boundary.proceed.complete();
      await pending;
      await reader.close();
    }
    expect(platform.sources, hasLength(2));
    expect(platform.sources.last.url, published.path);
    expect(await published.readAsBytes(), bytes);
    expect(await directory.list().length, 1);
  });

  for (final failure in ['write', 'rename', 'write and cleanup']) {
    test(
      '$failure failure preserves the original error and published sound',
      () async {
        await player().setSourceBytes(bytes);
        final published = File(platform.sources.single.url);
        final original = FileSystemException('publication failed');
        final boundary = SurvivorsAudioIoBoundary()..proceed.complete();
        if (failure == 'rename') {
          boundary.renameError = original;
        } else {
          boundary.writeError = original;
        }
        if (failure == 'write and cleanup') {
          boundary.deleteError = FileSystemException('cleanup failed');
        }
        final next = player();
        await expectLater(
          IOOverrides.runWithIOOverrides(
            () => next.setSourceBytes(bytes),
            boundary,
          ),
          throwsA(same(original)),
        );
        expect(await published.readAsBytes(), bytes);
        expect(platform.sources, hasLength(1));
        if (failure != 'write and cleanup') {
          expect(await directory.list().length, 1);
        }
      },
    );
  }

  for (final point in ['directory', 'write', 'rename']) {
    test(
      'dispose during byte-cache $point prevents late native handoff',
      () async {
        final boundary = SurvivorsAudioIoBoundary(gate: point);
        if (point == 'directory') {
          messenger.setMockMethodCallHandler(paths, (_) async {
            await boundary.wait('directory');
            return directory.path;
          });
        }
        final current = player();
        Object? sourceError;
        final pending = IOOverrides.runWithIOOverrides(
          () => point == 'write'
              ? current.setSourceUrl(
                  'data:audio/wav;base64,${base64Encode(bytes)}',
                )
              : current.setSourceBytes(bytes),
          boundary,
        ).then<void>((_) {}, onError: (Object error) => sourceError = error);
        await boundary.opened.future;
        try {
          await current.dispose();
          players.remove(current);
        } finally {
          boundary.proceed.complete();
          await pending;
        }
        expect(
          platform.sources,
          isEmpty,
          reason: 'No native setter may start after disposal',
        );
        expect(platform.resumed, isEmpty);
        expect(current.source, isNull);
        expect(current.state, PlayerState.disposed);
        expect(current.desiredState, PlayerState.disposed);
        expect(
          sourceError,
          isA<Exception>().having(
            (error) => '$error',
            'reason',
            contains('disposed'),
          ),
        );
        expect(boundary.pending, 0);
        expect(platform.activeListeners, 0);
        expect(
          (await directory.list().toList()).where(
            (file) => file.path.endsWith('.tmp'),
          ),
          isEmpty,
        );
      },
    );
  }

  for (final cached in [false, true]) {
    test(
      'dispose after ${cached ? 'cached' : 'cold'} asset IO prevents native handoff',
      () async {
        final cache = _AssetBoundary(directory.path, bytes);
        if (cached) await cache.loadPath('clip.wav');
        cache.hold = true;
        final current = player()..audioCache = cache;
        Object? sourceError;
        final pending = current
            .setSourceAsset('clip.wav')
            .then<void>((_) {}, onError: (Object error) => sourceError = error);
        await cache.opened.future;
        try {
          await current.dispose();
          players.remove(current);
        } finally {
          cache.proceed.complete();
          await pending;
        }
        expect(cache.loadedFiles, contains('clip.wav'));
        expect(platform.sources, isEmpty);
        expect(current.source, isNull);
        expect(current.state, PlayerState.disposed);
        expect(
          sourceError,
          isA<Exception>().having(
            (error) => '$error',
            'reason',
            contains('disposed'),
          ),
        );
        expect(platform.activeListeners, 0);
      },
    );
  }

  test(
    'shared disposal still cleans native resources when release fails',
    () async {
      final original = StateError('release failed');
      platform = _ReleaseFailure(original);
      AudioplayersPlatformInterface.instance = platform;
      final current = player();
      await current.creatingCompleter.future;
      final first = current.dispose(), second = current.dispose();
      players.remove(current);
      expect(identical(first, second), isTrue);
      await expectLater(first, throwsA(same(original)));
      expect(identical(current.dispose(), first), isTrue);
      expect(platform.disposed, [current.playerId]);
      expect(platform.activeListeners, 0);
      expect(current.state, PlayerState.disposed);
    },
  );
}

class _AssetBoundary extends AudioCache {
  _AssetBoundary(this.directory, this.bytes);
  final String directory;
  final Uint8List bytes;
  final opened = Completer<void>(), proceed = Completer<void>();
  bool hold = false;
  @override
  Future<String> getTempDir() async => directory;
  @override
  Future<ByteData> loadAsset(String path) async => ByteData.sublistView(bytes);
  @override
  Future<String> loadPath(String path) async {
    final result = await super.loadPath(path);
    if (hold) {
      opened.complete();
      await proceed.future;
    }
    return result;
  }
}

class _ReleaseFailure extends FlaxFakeAudioPlatform {
  _ReleaseFailure(this.error);
  final Object error;
  @override
  Future<void> release(String playerId) async => throw error;
}
