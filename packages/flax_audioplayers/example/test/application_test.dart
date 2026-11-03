import 'dart:async';

import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flax_audioplayers_example/main.dart' as app;
import 'package:flax_audioplayers_example/testing.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart' show IconButton, Slider;

void main() {
  late FlaxFakeAudioPlatform platform;
  setUp(() {
    final previous = AudioplayersPlatformInterface.instance;
    final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
    platform = FlaxFakeAudioPlatform();
    AudioplayersPlatformInterface.instance = platform;
    GlobalAudioplayersPlatformInterface.instance =
        FlaxFakeGlobalAudioPlatform();
    addTearDown(() {
      AudioplayersPlatformInterface.instance = previous;
      GlobalAudioplayersPlatformInterface.instance = previousGlobal;
    });
  });

  testWidgets('generated sources, controls, streams and disposal', (
    tester,
  ) async {
    await exerciseAudioExample(tester);
    expect(platform.sources.map((source) => source.url), [
      songUrl(1),
      songUrl(2),
      songUrl(1),
    ]);
    expect(platform.disposed, platform.created);
    expect(platform.activeListeners, 0);
    final id = platform.created.first;
    expect(platform.volumes[id], 0);
    expect(platform.rates[id], 2);
    expect(platform.releaseModes[id], ReleaseMode.loop);
  });

  testWidgets('controls remain reachable at 320 by 480', (tester) async {
    await exerciseAudioExample(tester, viewport: const Size(320, 480));
    expect(platform.disposed, platform.created);
    expect(platform.activeListeners, 0);
  });

  testWidgets(
    'loop completion retains playing state, position updates and one-click pause',
    (tester) async {
      await tester.runAsync(app.startApplication);
      await flaxTestWaitForViews(tester);
      await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
      await tapAudio(tester, 'audio-loop');
      await tapAudio(tester, 'audio-toggle');
      await waitForAudio(tester, () => audioStatus(tester) == 'Playing');
      final id = platform.created.single;
      platform.complete(id);
      await waitForAudio(
        tester,
        () => platform.resumed.length == 2 && audioStatus(tester) == 'Playing',
      );
      await waitForAudio(
        tester,
        () => !audioTime(tester).startsWith('0:00 / '),
      );
      await tapAudio(tester, 'audio-toggle');
      await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
      expect(platform.resumed, [id, id]);
      await tester.pumpWidget(const SizedBox.shrink());
      await waitForAudio(tester, () => platform.disposed.length == 1);
      expect(platform.activeListeners, 0);
    },
  );

  testWidgets('closing while preparation is pending releases the player', (
    tester,
  ) async {
    platform.holdPreparation = true;
    await tester.runAsync(app.startApplication);
    await flaxTestWaitForViews(tester);
    await waitForAudio(tester, () => platform.sources.isNotEmpty);
    await tester.pumpWidget(const SizedBox.shrink());
    await waitForAudio(tester, () => platform.disposed.length == 1);
    expect(platform.activeListeners, 0);
    expect(tester.takeException(), isNull);
  });

  testWidgets('completion without looping does not resume playback', (
    tester,
  ) async {
    await tester.runAsync(app.startApplication);
    await flaxTestWaitForViews(tester);
    await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
    await tapAudio(tester, 'audio-toggle');
    await waitForAudio(tester, () => audioStatus(tester) == 'Playing');
    final id = platform.created.single;
    platform.complete(id);
    await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
    expect(platform.resumed, [id]);
    await tester.pumpWidget(const SizedBox.shrink());
    await waitForAudio(tester, () => platform.disposed.length == 1);
    expect(platform.activeListeners, 0);
  });

  testWidgets(
    'closing during native creation finishes cleanup when creation completes',
    (tester) async {
      final gate = Completer<void>();
      platform.createGate = gate;
      addTearDown(() {
        if (!gate.isCompleted) gate.complete();
      });
      await tester.runAsync(app.startApplication);
      await flaxTestWaitForViews(tester);
      await waitForAudio(tester, () => platform.created.isNotEmpty);
      await tester.pumpWidget(const SizedBox.shrink());
      expect(platform.disposed, isEmpty);
      gate.complete();
      await waitForAudio(tester, () => platform.disposed.length == 1);
      expect(platform.sources, isEmpty);
      expect(platform.activeListeners, 0);
      expect(tester.takeException(), isNull);
    },
  );

  testWidgets('switching a pending source retires only its player', (
    tester,
  ) async {
    platform.holdPreparation = true;
    await tester.runAsync(app.startApplication);
    await flaxTestWaitForViews(tester);
    await waitForAudio(tester, () => platform.sources.isNotEmpty);
    platform.holdPreparation = false;
    await tapAudio(tester, 'audio-source-song-2');
    await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
    await waitForAudio(tester, () => platform.disposed.length == 1);
    expect(platform.sources.last.url, songUrl(2));
    final active = platform.created.last;
    await tapAudio(tester, 'audio-source-song-2');
    expect(platform.created.last, active);
    expect(platform.created, hasLength(2));
    await tester.pumpWidget(const SizedBox.shrink());
    await waitForAudio(tester, () => platform.disposed.length == 2);
    expect(platform.activeListeners, 0);
    expect(tester.takeException(), isNull);
  });

  testWidgets('late completion cannot override an explicit pause', (
    tester,
  ) async {
    await tester.runAsync(app.startApplication);
    await flaxTestWaitForViews(tester);
    await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
    await tapAudio(tester, 'audio-loop');
    await tapAudio(tester, 'audio-toggle');
    await waitForAudio(tester, () => audioStatus(tester) == 'Playing');
    await tapAudio(tester, 'audio-toggle');
    await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
    platform.complete(platform.created.single);
    await tester.pump(const Duration(milliseconds: 100));
    await flaxTestWaitForViews(tester);
    expect(platform.resumed, hasLength(1));
    expect(audioStatus(tester), 'Paused');
    await tester.pumpWidget(const SizedBox.shrink());
    await waitForAudio(tester, () => platform.disposed.length == 1);
  });

  testWidgets('loop disable intent wins before its native Future completes', (
    tester,
  ) async {
    await tester.runAsync(app.startApplication);
    await flaxTestWaitForViews(tester);
    await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
    await tapAudio(tester, 'audio-loop');
    await tapAudio(tester, 'audio-toggle');
    await waitForAudio(tester, () => audioStatus(tester) == 'Playing');
    final gate = Completer<void>();
    platform.stopModeGate = gate;
    addTearDown(() {
      if (!gate.isCompleted) gate.complete();
    });
    await tapAudio(tester, 'audio-loop');
    await waitForAudio(tester, () => platform.pendingStopModes.isNotEmpty);
    platform.complete(platform.created.single);
    await tester.pump(const Duration(milliseconds: 100));
    await flaxTestWaitForViews(tester);
    expect(platform.resumed, hasLength(1));
    gate.complete();
    await tester.pumpWidget(const SizedBox.shrink());
    await waitForAudio(tester, () => platform.disposed.length == 1);
  });

  for (final volume in [true, false]) {
    testWidgets(
      'rapid ${volume ? 'mute' : 'speed'} clicks retain the latest request',
      (tester) async {
        await tester.runAsync(app.startApplication);
        await flaxTestWaitForViews(tester);
        await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
        final gate = Completer<void>();
        if (volume) {
          platform.volumeGate = gate;
        } else {
          platform.rateGate = gate;
        }
        addTearDown(() {
          if (!gate.isCompleted) gate.complete();
        });
        final calls = volume ? platform.volumeCalls : platform.rateCalls;
        final key = volume ? 'audio-mute' : 'audio-speed';
        await tapAudio(tester, key);
        await waitForAudio(tester, () => calls.length == 1);
        await tapAudio(tester, key);
        await waitForAudio(tester, () => calls.length == 2);
        expect(calls, volume ? [0, 1] : [2, 1]);
        gate.complete();
        await tester.pumpWidget(const SizedBox.shrink());
        await waitForAudio(tester, () => platform.disposed.length == 1);
        expect(platform.activeListeners, 0);
      },
    );
  }

  testWidgets('source errors allow switching to a healthy source', (
    tester,
  ) async {
    platform.failNext = true;
    await tester.runAsync(app.startApplication);
    await flaxTestWaitForViews(tester);
    await waitForAudio(
      tester,
      () => audioStatus(tester).contains('Cannot decode fixture'),
    );
    await tapAudio(tester, 'audio-source-song-2');
    await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
    await tester.pumpWidget(const SizedBox.shrink());
    await waitForAudio(tester, () => platform.disposed.length == 2);
    expect(platform.activeListeners, 0);
    expect(tester.takeException(), isNull);
  });
}

String songUrl(int index) =>
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-$index.mp3';
String audioStatus(WidgetTester tester) {
  final finder = find.byKey(const ValueKey('audio-status'));
  return finder.evaluate().isEmpty
      ? ''
      : tester.widget<Text>(finder.last).data ?? '';
}

String audioTime(WidgetTester tester) =>
    tester.widget<Text>(find.byKey(const ValueKey('audio-time')).last).data!;
Slider audioProgress(WidgetTester tester) =>
    tester.widget<Slider>(find.byKey(const ValueKey('audio-progress')).last);

/// Shared with native integration; never installs a fake backend.
Future<void> exerciseAudioExample(
  WidgetTester tester, {
  Size viewport = const Size(1000, 800),
}) async {
  tester.view.physicalSize = viewport;
  tester.view.devicePixelRatio = 1;
  addTearDown(tester.view.resetPhysicalSize);
  addTearDown(tester.view.resetDevicePixelRatio);
  await tester.runAsync(app.startApplication);
  await flaxTestWaitForViews(tester);
  await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
  expect(audioTime(tester), startsWith('0:00 / '));
  expect(audioTime(tester), isNot('0:00 / 0:00'));
  expect(audioProgress(tester).onChanged, isNotNull);
  await tapAudio(tester, 'audio-toggle');
  await waitForAudio(
    tester,
    () =>
        audioStatus(tester) == 'Playing' &&
        !audioTime(tester).startsWith('0:00 / '),
  );
  await tapAudio(tester, 'audio-toggle');
  await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
  final progress = find.byKey(const ValueKey('audio-progress')).last;
  await tester.ensureVisible(progress);
  await tester.tapAt(tester.getCenter(progress));
  await waitForAudio(
    tester,
    () => (audioProgress(tester).value - 0.5).abs() < 0.05,
  );
  await tapAudio(tester, 'audio-seek');
  await waitForAudio(tester, () => audioTime(tester).startsWith('0:01 / '));
  await tapAudio(tester, 'audio-mute');
  await waitForAudio(
    tester,
    () => find.byTooltip('Unmute').evaluate().isNotEmpty,
  );
  await tapAudio(tester, 'audio-loop');
  await waitForAudio(
    tester,
    () =>
        tester
            .widget<IconButton>(find.byKey(const ValueKey('audio-loop')).last)
            .isSelected ==
        true,
  );
  await tapAudio(tester, 'audio-speed');
  await waitForAudio(tester, () => find.text('2×').evaluate().isNotEmpty);
  final total = audioTime(tester).split(' / ').last.split(':');
  final seconds = int.parse(total[0]) * 60 + int.parse(total[1]);
  // Reach a real native loop quickly instead of waiting through the whole track.
  audioProgress(tester).onChangeEnd!(1 - 2 / seconds);
  await waitForAudio(tester, () => audioProgress(tester).value > 0.8);
  await tapAudio(tester, 'audio-toggle');
  await waitForAudio(
    tester,
    () => audioStatus(tester) == 'Playing' && audioProgress(tester).value < 0.1,
  );
  await tapAudio(tester, 'audio-toggle');
  await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
  await tapAudio(tester, 'audio-rewind');
  await waitForAudio(tester, () => audioTime(tester).startsWith('0:00 / '));
  await tapAudio(tester, 'audio-source-song-2');
  await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
  expect(audioTime(tester), startsWith('0:00 / '));
  expect(find.text('1×'), findsOneWidget);
  await tapAudio(tester, 'audio-toggle');
  await waitForAudio(
    tester,
    () =>
        audioStatus(tester) == 'Playing' &&
        !audioTime(tester).startsWith('0:00 / '),
  );
  await tapAudio(tester, 'audio-source-song-1');
  await waitForAudio(tester, () => audioStatus(tester) == 'Paused');
  expect(audioTime(tester), startsWith('0:00 / '));
  await tester.pumpWidget(const SizedBox.shrink());
  await tester.runAsync(
    () => Future<void>.delayed(const Duration(milliseconds: 200)),
  );
  await tester.pumpAndSettle();
  expect(tester.takeException(), isNull);
}

Future<void> tapAudio(WidgetTester tester, String key) async {
  final target = find.byKey(ValueKey(key)).last;
  await tester.ensureVisible(target);
  await tester.tap(target);
  await tester.pump();
}

Future<void> waitForAudio(WidgetTester tester, bool Function() done) async {
  for (var attempt = 0; attempt < 300; attempt++) {
    if (done()) return;
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 100)),
    );
    await tester.pump(const Duration(milliseconds: 100));
  }
  fail(
    'Audio example did not reach the expected state: ${audioStatus(tester)}',
  );
}
