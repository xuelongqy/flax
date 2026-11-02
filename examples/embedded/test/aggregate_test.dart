import 'dart:io';

import 'package:flax_embedded/main.dart' as app;
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_sandbox_example/flax_sandbox_example.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flax_video_player_example/testing.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

import 'support/gallery.dart';
import 'support/runtime_tracker.dart';

void main() {
  late Directory storage;
  late String source;
  late FlaxFakeVideoPlatform videoPlatform;

  setUp(() {
    videoPlatform = installGalleryVideoPlatform();
  });

  setUpAll(() async {
    storage = await Directory.systemTemp.createTemp('flax-gallery-storage-');
    source = await app.loadAggregateSource(storageDirectory: storage.path);
    final assets = await AssetManifest.loadFromAssetBundle(rootBundle);
    expect(
      assets.listAssets().where(
        (asset) =>
            asset.startsWith('packages/flax_video_player_example/') &&
            asset.endsWith('.mp4'),
      ),
      isEmpty,
    );
  });
  tearDownAll(() async {
    await FlaxLocalStoragePlugin.shutdown().timeout(
      const Duration(seconds: 10),
    );
    await storage.delete(recursive: true).timeout(const Duration(seconds: 10));
  });

  for (final (pluginId, module) in [
    ('flax.canvas', '@flax/canvas'),
    ('flax.video-player', '@flax/video-player'),
  ]) {
    testWidgets('missing $pluginId rejects its module before use', (
      tester,
    ) async {
      final errors = <Object>[];
      await flaxTestPumpView(
        tester,
        app.EmbeddedApp(
          source: source,
          sandboxDemoDirectory: '${storage.path}/sandbox-demo',
          plugins: app.galleryPlugins
              .where((plugin) => plugin.id != pluginId)
              .toList(),
          onFlaxError: (error, _) => errors.add(error),
        ),
      );
      await tester.pump();
      expect(errors, isNotEmpty);
      expect(errors.single.toString(), contains(module));
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpAndSettle();
    });
  }

  testWidgets('shared modules and recreated views start with clean state', (
    tester,
  ) async {
    final runtimes = <RuntimeTracker>[];
    final errors = <Object>[];
    await flaxTestPumpView(
      tester,
      app.EmbeddedApp(
        source: source,
        sandboxDemoDirectory: '${storage.path}/sandbox-demo',
        onFlaxError: (error, _) => errors.add(error),
        createRuntime: () {
          final runtime = RuntimeTracker();
          runtimes.add(runtime);
          return runtime;
        },
      ),
    );
    await tester.pumpAndSettle();
    expect(find.text('Choose your playground'), findsOneWidget);
    expect(runtimes, hasLength(1));
    await tapGallery(tester, find.byKey(const ValueKey('open-core')));
    await tapGallery(tester, find.text('Increment JS'));
    expect(find.text('Count: 1'), findsOneWidget);
    await tapGallery(tester, find.text('Unmount Flax'));
    await pumpGalleryUntil(tester, () => runtimes.first.isDisposed);
    expect(find.text('Flax view unmounted'), findsOneWidget);
    expect(runtimes.first.handlesAtDispose, 0);

    await tapGallery(tester, find.text('Mount Flax'));
    expect(runtimes, hasLength(2));
    await tapGallery(tester, find.byKey(const ValueKey('open-core')));
    expect(find.text('Count: 0'), findsOneWidget);
    await tapGallery(tester, find.byKey(const ValueKey('gallery-back')));
    await tapGallery(tester, find.byKey(const ValueKey('open-material')));
    await tapGallery(tester, find.byKey(const ValueKey('material-feedback')));
    await tapGallery(tester, find.text('Open dialog'));
    expect(find.text('Ready to publish?'), findsOneWidget);
    await tester.pumpWidget(const SizedBox.shrink());
    await pumpGalleryUntil(tester, () => runtimes.last.isDisposed);
    expect(runtimes.last.handlesAtDispose, 0);
    expect(errors, isEmpty);
  });

  testWidgets(
    'every module entrance reaches the owner example and releases its resources',
    (tester) async {
      tester.view.physicalSize = const Size(1200, 1000);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      late RuntimeTracker runtime;
      await flaxTestPumpView(
        tester,
        app.EmbeddedApp(
          source: source,
          sandboxDemoDirectory: '${storage.path}/sandbox-demo',
          createRuntime: () => runtime = RuntimeTracker(),
        ),
      );
      await tester.pumpAndSettle();
      await exerciseGallery(tester);
      await pumpGalleryUntil(
        tester,
        () => videoPlatform.disposed.length == videoPlatform.sources.length,
      );
      expect(videoPlatform.sources, isNotEmpty);
      expect(
        videoPlatform.sources.map((source) => source.uri),
        everyElement(startsWith('https://download.blender.org/')),
      );
      expect(
        videoPlatform.sources.map((source) => source.asset),
        everyElement(isNull),
      );
      tester.view.physicalSize = const Size(390, 844);
      await tester.pumpAndSettle();
      expect(find.text('Choose your playground'), findsOneWidget);
      expect(tester.takeException(), isNull);
      await tester.pumpWidget(const SizedBox.shrink());
      await pumpGalleryUntil(tester, () => runtime.isDisposed);
      expect(runtime.handlesAtDispose, 0);
      await waitGalleryIO(tester, FlaxSandboxExample.pendingLifecycle);
      await waitGalleryIO(tester, FlaxLocalStoragePlugin.shutdown());
    },
  );
}
