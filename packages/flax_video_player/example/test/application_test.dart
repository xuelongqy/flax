import 'package:flax_test/flax_test.dart';
import 'package:flax_video_player_example/main.dart' as app;

import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:video_player/video_player.dart';
import 'package:video_player_platform_interface/video_player_platform_interface.dart';

import 'support/fake_video_platform.dart';

const bunnyUrl =
    'https://download.blender.org/peach/trailer/trailer_iphone.m4v';
const sintelUrl =
    'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';

void main() {
  late FlaxFakeVideoPlatform platform;
  setUp(() {
    final previous = VideoPlayerPlatform.instance;
    platform = FlaxFakeVideoPlatform();
    VideoPlayerPlatform.instance = platform;
    addTearDown(() => VideoPlayerPlatform.instance = previous);
  });

  testWidgets('generated bindings drive upstream video controls and cleanup', (
    tester,
  ) async {
    await exerciseVideoExample(tester);
    expect(
      platform.sources.map((source) => source.sourceType),
      everyElement(DataSourceType.network),
    );
    expect(platform.sources.map((source) => source.uri), [
      bunnyUrl,
      sintelUrl,
      bunnyUrl,
    ]);
    expect(
      platform.sources.map((source) => source.asset),
      everyElement(isNull),
    );
    expect(platform.disposed, [1, 2, 3]);
  });

  testWidgets(
    'closing while initialization is pending releases the native player',
    (tester) async {
      platform.holdInitialization = true;
      await tester.runAsync(app.startApplication);
      await flaxTestWaitForViews(tester);
      await waitFor(tester, () => platform.sources.isNotEmpty);
      await tester.pumpWidget(const SizedBox.shrink());
      await waitFor(tester, () => platform.disposed.isNotEmpty);
      expect(platform.disposed, [1]);
      expect(tester.takeException(), isNull);
    },
  );

  testWidgets('video controls remain reachable in a compact window', (
    tester,
  ) async {
    await exerciseVideoExample(tester, viewport: const Size(320, 480));
    expect(platform.disposed, [1, 2, 3]);
  });

  testWidgets(
    'switching while initialization is pending releases the old player',
    (tester) async {
      platform.holdInitialization = true;
      await tester.runAsync(app.startApplication);
      await flaxTestWaitForViews(tester);
      await waitFor(tester, () => platform.sources.isNotEmpty);
      platform.holdInitialization = false;
      await tapControl(tester, 'video-source-sintel');
      await waitFor(
        tester,
        () => find.byType(VideoPlayer).evaluate().isNotEmpty,
      );
      expect(platform.sources.last.uri, sintelUrl);
      await waitFor(tester, () => platform.disposed.contains(1));
      await tester.pumpWidget(const SizedBox.shrink());
      await waitFor(tester, () => platform.disposed.length == 2);
      await tester.pumpAndSettle();
      expect(platform.disposed, [1, 2]);
      expect(tester.takeException(), isNull);
    },
  );

  testWidgets('initialization errors allow switching to a healthy clip', (
    tester,
  ) async {
    platform.failNext = true;
    await tester.runAsync(app.startApplication);
    await flaxTestWaitForViews(tester);
    await waitFor(
      tester,
      () => find.textContaining('Cannot decode fixture').evaluate().isNotEmpty,
    );
    expect(find.byType(VideoPlayer), findsNothing);
    await tapControl(tester, 'video-source-sintel');
    await waitFor(tester, () => find.byType(VideoPlayer).evaluate().isNotEmpty);
    expect(find.textContaining('Cannot decode fixture'), findsNothing);
    await tester.pumpWidget(const SizedBox.shrink());
    await waitFor(tester, () => platform.disposed.length == 2);
    await tester.pumpAndSettle();
    expect(platform.disposed, [1, 2]);
    expect(tester.takeException(), isNull);
  });
}

/// Shared with the native application test; it never swaps the platform backend.
Future<void> exerciseVideoExample(
  WidgetTester tester, {
  Size viewport = const Size(1000, 900),
}) async {
  tester.view.physicalSize = viewport;
  tester.view.devicePixelRatio = 1;
  addTearDown(tester.view.resetPhysicalSize);
  addTearDown(tester.view.resetDevicePixelRatio);
  await tester.runAsync(app.startApplication);
  await flaxTestWaitForViews(tester);
  await waitFor(tester, () => find.byType(VideoPlayer).evaluate().isNotEmpty);
  final controller = tester
      .widget<VideoPlayer>(find.byType(VideoPlayer))
      .controller;
  expect(controller.value.isInitialized, isTrue);
  expect(controller.dataSourceType, DataSourceType.network);
  expect(controller.dataSource, bunnyUrl);
  expect(controller.value.size, const Size(480, 270));
  expect(controller.value.duration.inMilliseconds, closeTo(33023, 100));

  // Native duration may differ slightly from container metadata.
  final durationLabel =
      '0:${controller.value.duration.inSeconds.toString().padLeft(2, '0')}';

  await waitFor(
    tester,
    () => find.text('0:00 / $durationLabel').evaluate().isNotEmpty,
  );
  expect(find.text('0:00 / $durationLabel'), findsOneWidget);
  expect(
    tester
        .widget<VideoProgressIndicator>(
          find.byKey(const ValueKey('video-progress')),
        )
        .allowScrubbing,
    isTrue,
  );
  await tapControl(tester, 'video-toggle');
  await waitFor(tester, () => controller.value.position > Duration.zero);
  expect(controller.value.isPlaying, isTrue);
  await tapControl(tester, 'video-toggle');
  await waitFor(tester, () => !controller.value.isPlaying);
  final progress = find.byKey(const ValueKey('video-progress'));
  await tester.ensureVisible(progress);
  await tester.tapAt(tester.getCenter(progress));
  await waitFor(
    tester,
    () =>
        (controller.value.position.inMilliseconds -
                controller.value.duration.inMilliseconds / 2)
            .abs() <
        100,
  );
  await tapControl(tester, 'video-seek');
  await waitFor(
    tester,
    () => controller.value.position == const Duration(seconds: 1),
  );
  await waitFor(
    tester,
    () => find.text('0:01 / $durationLabel').evaluate().isNotEmpty,
  );
  expect(find.text('0:01 / $durationLabel'), findsOneWidget);
  await tapControl(tester, 'video-mute');
  expect(controller.value.volume, 0);
  await tapControl(tester, 'video-loop');
  expect(controller.value.isLooping, isTrue);
  await tapControl(tester, 'video-speed');
  expect(controller.value.playbackSpeed, 2);
  await tapControl(tester, 'video-rewind');
  await waitFor(tester, () => controller.value.position == Duration.zero);
  expect(controller.value.hasError, isFalse);
  expect(tester.takeException(), isNull);

  await tapControl(tester, 'video-source-sintel');
  await waitFor(tester, () {
    final videos = tester.widgetList<VideoPlayer>(find.byType(VideoPlayer));
    return videos.length == 1 &&
        videos.single.controller != controller &&
        videos.single.controller.value.isInitialized;
  });
  final alternate = tester
      .widget<VideoPlayer>(find.byType(VideoPlayer))
      .controller;
  expect(alternate.dataSource, sintelUrl);
  expect(alternate.value.size, const Size(854, 480));
  expect(alternate.value.duration.inMilliseconds, closeTo(52208, 100));
  expect(alternate.value.isPlaying, isFalse);
  expect(alternate.value.isLooping, isFalse);
  await tapControl(tester, 'video-toggle');
  await waitFor(tester, () => alternate.value.position > Duration.zero);
  await tapControl(tester, 'video-source-bunny');
  await waitFor(tester, () {
    final videos = tester.widgetList<VideoPlayer>(find.byType(VideoPlayer));
    return videos.length == 1 &&
        videos.single.controller != alternate &&
        videos.single.controller.value.isInitialized;
  });
  final restored = tester
      .widget<VideoPlayer>(find.byType(VideoPlayer))
      .controller;
  expect(restored.dataSource, bunnyUrl);
  expect(restored.value.size, const Size(480, 270));
  expect(restored.value.position, Duration.zero);
  expect(restored.value.isPlaying, isFalse);
  expect(restored.value.hasError, isFalse);

  await tester.pumpWidget(const SizedBox.shrink());
  await tester.runAsync(
    () => Future<void>.delayed(const Duration(milliseconds: 200)),
  );
  await tester.pumpAndSettle();
  expect(tester.takeException(), isNull);
}

Future<void> tapControl(WidgetTester tester, String key) async {
  final target = find.byKey(ValueKey(key)).last;
  await tester.ensureVisible(target);
  await tester.tap(target);
  await tester.pump();
}

Future<void> waitFor(WidgetTester tester, bool Function() condition) async {
  for (var attempt = 0; attempt < 150; attempt++) {
    if (condition()) return;
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 100)),
    );
    await tester.pump(const Duration(milliseconds: 100));
  }
  fail('Video example did not reach the expected state');
}
