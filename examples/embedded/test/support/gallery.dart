import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_sandbox_example/flax_sandbox_example.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flax_video_player_example/testing.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart' show SelectableText;
import 'package:video_player/video_player.dart';
import 'package:video_player_platform_interface/video_player_platform_interface.dart';

/// Headless widget tests need a platform fake; native integration never calls this.
FlaxFakeVideoPlatform installGalleryVideoPlatform() {
  final previous = VideoPlayerPlatform.instance;
  final platform = FlaxFakeVideoPlatform();
  VideoPlayerPlatform.instance = platform;
  addTearDown(() => VideoPlayerPlatform.instance = previous);
  return platform;
}

/// Follow the same entrances used by people browsing the gallery.
Future<void> exerciseGallery(WidgetTester tester) async {
  await tapGallery(
    tester,
    find.byKey(const ValueKey('example-settings-toggle')),
  );
  await tapGallery(tester, find.byKey(const ValueKey('example-theme-dark')));
  await tapGallery(tester, find.byKey(const ValueKey('example-fps-toggle')));
  await tapGallery(
    tester,
    find.byKey(const ValueKey('example-settings-close')),
  );
  const entries = [
    ('core', 'Small pieces. Real Flutter.'),
    ('material', 'Material, in full color.'),
    ('cupertino', 'Quiet details. Native feel.'),
    ('canvas', 'Make light linger.'),
    ('fetch', 'Ask. Receive. Explore.'),
    ('video', 'HTTPS stream · H.264 / AAC · 480 × 270'),
    ('websocket', 'A conversation, in real time.'),
    ('storage', 'A little memory goes a long way.'),
    ('sandbox', 'A home of their own.'),
    ('permissions', 'Approve manifest & run'),
  ];
  expect(find.text('${entries.length} modules'), findsOneWidget);
  for (final entry in entries) {
    // Network initialization is not an animation: wait for video readiness below.
    await tapGallery(
      tester,
      find.byKey(ValueKey('open-${entry.$1}')),
      settle: entry.$1 != 'video',
    );
    if (entry.$1 == 'video') {
      await pumpGalleryUntil(
        tester,
        () => find.text(entry.$2).evaluate().isNotEmpty,
      );
    }
    expect(find.text(entry.$2), findsOneWidget);
    expect(
      find.byKey(const ValueKey('example-settings-toggle')),
      findsOneWidget,
    );
    expect(find.byKey(const ValueKey('example-fps')), findsOneWidget);
    expect(
      MediaQuery.platformBrightnessOf(tester.element(find.text(entry.$2))),
      Brightness.dark,
    );
    switch (entry.$1) {
      case 'core':
        await tapGallery(tester, find.text('Increment JS'));
        expect(find.text('Count: 1'), findsOneWidget);
        expect(find.text('Doubled: 2'), findsOneWidget);
        await tapGallery(
          tester,
          find.byKey(const ValueKey('example-settings-toggle')),
        );
        await tapGallery(
          tester,
          find.byKey(const ValueKey('example-theme-light')),
        );
        expect(find.text('Count: 1'), findsOneWidget);
        await tapGallery(
          tester,
          find.byKey(const ValueKey('example-theme-dark')),
        );
        await tapGallery(
          tester,
          find.byKey(const ValueKey('example-settings-close')),
        );
        expect(find.text('Count: 1'), findsOneWidget);
      case 'material' || 'cupertino':
        await tapGallery(tester, find.text('Filled button'));
        expect(find.text('Button presses: 1'), findsOneWidget);
      case 'canvas':
        await tapGallery(tester, find.byKey(const ValueKey('palette-1')));
        expect(find.text('Bloom · Ember · crisp light'), findsOneWidget);
      case 'fetch':
        expect(find.text('Fetch ready'), findsOneWidget);
      case 'video':
        await pumpGalleryUntil(
          tester,
          () => find.byType(VideoPlayer).evaluate().isNotEmpty,
          timeout: const Duration(seconds: 15),
        );
        final original = tester
            .widget<VideoPlayer>(find.byType(VideoPlayer))
            .controller;
        expect(original.dataSourceType, DataSourceType.network);
        expect(
          original.dataSource,
          startsWith('https://download.blender.org/'),
        );
        expect(original.value.size, const Size(480, 270));
        await tapGallery(
          tester,
          find.byKey(const ValueKey('video-toggle')),
          settle: false,
        );
        await pumpGalleryUntil(
          tester,
          () => original.value.position > Duration.zero,
          timeout: const Duration(seconds: 15),
        );
        await tapGallery(
          tester,
          find.byKey(const ValueKey('video-source-sintel')),
          settle: false,
        );
        await pumpGalleryUntil(
          tester,
          () =>
              find.byType(VideoPlayer).evaluate().isNotEmpty &&
              tester.widget<VideoPlayer>(find.byType(VideoPlayer)).controller !=
                  original,
          timeout: const Duration(seconds: 15),
        );
        final alternate = tester
            .widget<VideoPlayer>(find.byType(VideoPlayer))
            .controller;
        expect(alternate.dataSource, endsWith('sintel_trailer-480p.mp4'));
        expect(alternate.value.size, const Size(854, 480));
        expect(alternate.value.isPlaying, isFalse);
        await tapGallery(
          tester,
          find.byKey(const ValueKey('video-source-bunny')),
          settle: false,
        );
        await pumpGalleryUntil(
          tester,
          () =>
              find.byType(VideoPlayer).evaluate().isNotEmpty &&
              tester.widget<VideoPlayer>(find.byType(VideoPlayer)).controller !=
                  alternate,
          timeout: const Duration(seconds: 15),
        );
        expect(
          tester
              .widget<VideoPlayer>(find.byType(VideoPlayer))
              .controller
              .value
              .size,
          const Size(480, 270),
        );
      case 'websocket':
        await tapGallery(tester, find.text('Send message'));
        expect(find.text('Connect to a server first.'), findsOneWidget);
      case 'storage':
        await tapGallery(tester, find.text('Clear area'));
        await tapGallery(tester, find.text('Store +1'));
        expect(find.text('Stored: 1'), findsOneWidget);
        await waitGalleryIO(tester, FlaxLocalStoragePlugin.flush());
      case 'sandbox':
        await pumpGalleryUntil(
          tester,
          () => find.text('Loaded generation 1').evaluate().isNotEmpty,
        );
        await flaxTestWaitForViews(tester);
        await pumpGalleryUntil(
          tester,
          () =>
              find.text('Ready A').evaluate().isNotEmpty &&
              find.text('Ready B').evaluate().isNotEmpty,
        );
        await tapGallery(tester, find.byKey(const ValueKey('sandbox-reset-A')));
        await tapGallery(tester, find.byKey(const ValueKey('sandbox-reset-B')));
        expect(find.text('Stored A: 0'), findsOneWidget);
        expect(find.text('Stored B: 0'), findsOneWidget);
        await tapGallery(tester, find.byKey(const ValueKey('sandbox-store-A')));
        await pumpGalleryUntil(
          tester,
          () => find.text('Stored A: 1').evaluate().isNotEmpty,
        );
        expect(find.text('Stored B: 0'), findsOneWidget);
        await tapGallery(
          tester,
          find.byKey(const ValueKey('sandbox-host-read-A')),
        );
        await pumpGalleryUntil(
          tester,
          () => find
              .textContaining('A: FLAX_SANDBOX_DENIED')
              .evaluate()
              .isNotEmpty,
        );
    }
    await tapGallery(tester, find.byKey(const ValueKey('gallery-back')));
    if (entry.$1 == 'sandbox') {
      await waitGalleryIO(tester, FlaxSandboxExample.pendingLifecycle);
    }
    expect(find.text('Choose your playground'), findsOneWidget);
    expect(tester.takeException(), isNull, reason: '${entry.$1} example');
  }
  await tapGallery(
    tester,
    find.byKey(const ValueKey('example-settings-toggle')),
  );
  await tapGallery(tester, find.byKey(const ValueKey('example-fps-toggle')));
  await tapGallery(
    tester,
    find.byKey(const ValueKey('example-settings-close')),
  );
}

Future<void> tapGallery(
  WidgetTester tester,
  Finder finder, {
  bool settle = true,
}) async {
  // Generated hosts and native Widgets can both carry the configured key.
  final target = finder.last;
  await tester.ensureVisible(target);
  await tester.tap(target);
  if (settle) {
    await tester.pumpAndSettle();
  } else {
    await tester.pump();
  }
  await flaxTestWaitForViews(tester);
}

Future<void> pumpGalleryUntil(
  WidgetTester tester,
  bool Function() done, {
  Duration timeout = const Duration(seconds: 2),
}) async {
  for (var i = 0; i < timeout.inMilliseconds ~/ 10 && !done(); i++) {
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
    await tester.pump(const Duration(milliseconds: 10));
  }
  expect(
    done(),
    isTrue,
    reason: [
      ...tester.widgetList<Text>(find.byType(Text)).map((text) => text.data),
      ...tester
          .widgetList<SelectableText>(find.byType(SelectableText))
          .map((text) => text.data),
    ].join('\n'),
  );
}

/// File completion can also schedule callbacks on the fake Flutter clock.
Future<void> waitGalleryIO(WidgetTester tester, Future<void> future) async {
  var completed = false;
  final result = future.whenComplete(() => completed = true);
  await pumpGalleryUntil(tester, () => completed);
  await result;
}
