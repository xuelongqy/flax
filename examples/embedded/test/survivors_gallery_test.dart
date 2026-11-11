import 'dart:io';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_embedded/main.dart' as app;
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import 'support/gallery.dart';
import 'support/runtime_tracker.dart';

class _LoadingRuntime extends RuntimeTracker {
  bool preparing = false;

  @override
  Future<bool> prepareSources(
    List<FlaxJsSource> sources, {
    required FlaxJsSource entry,
    Future<void>? cancelled,
  }) async {
    preparing = true;
    await cancelled;
    return false;
  }
}

void main() {
  testWidgets(
    'game sessions survive gallery navigation and close during load or play',
    (tester) async {
      final previousPlatform = debugDefaultTargetPlatformOverride;
      debugDefaultTargetPlatformOverride = TargetPlatform.android;
      addTearDown(() => debugDefaultTargetPlatformOverride = previousPlatform);
      tester.view.physicalSize = const Size(667, 354);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      final systemCalls = <String>[];
      tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
        SystemChannels.platform,
        (call) async {
          systemCalls.add(call.method);
          return null;
        },
      );
      addTearDown(
        () => tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          SystemChannels.platform,
          null,
        ),
      );
      installGalleryVideoPlatform();
      final audio = installGalleryAudioPlatform();
      final storage = (await tester.runAsync(
        () => Directory.systemTemp.createTemp('flax-gallery-game-'),
      ))!;
      final source = (await tester.runAsync(
        () => app.loadAggregateSource(storageDirectory: storage.path),
      ))!;
      final runtimes = <RuntimeTracker>[];
      _LoadingRuntime? loading;
      var holdNextRuntime = false;
      final errors = <Object>[];
      final previousCreate = ui.Image.onCreate;
      final previousDispose = ui.Image.onDispose;
      final tracked = Expando<bool>();
      var liveImages = 0;
      ui.Image.onCreate = (image) {
        previousCreate?.call(image);
        tracked[image] = true;
        liveImages++;
      };
      ui.Image.onDispose = (image) {
        previousDispose?.call(image);
        if (tracked[image] == true) {
          tracked[image] = false;
          liveImages--;
        }
      };
      addTearDown(() {
        ui.Image.onCreate = previousCreate;
        ui.Image.onDispose = previousDispose;
      });
      FocusNode? gameFocus;
      try {
        await flaxTestPumpView(
          tester,
          app.EmbeddedApp(
            source: source,
            onFlaxError: (error, _) => errors.add(error),
            createRuntime: () {
              final runtime = holdNextRuntime
                  ? loading = _LoadingRuntime()
                  : RuntimeTracker();
              holdNextRuntime = false;
              runtimes.add(runtime);
              return runtime;
            },
          ),
        );
        await tester.pumpAndSettle();
        final framesAtHome = tester.binding.transientCallbackCount;
        runtimes.first.evaluate(
          'localStorage.setItem("profile", "gallery-profile")',
        );
        await tapGallery(
          tester,
          find.byKey(const ValueKey('open-survivors')),
          settle: false,
        );
        await selectGalleryGameEnglish(tester);
        expect(runtimes, hasLength(2));
        expect(
          (runtimes.first.evaluate(
            'typeof globalThis.__survivorsHost',
          ) as FlaxJsString).value,
          'undefined',
        );
        expect(
          (runtimes.last.evaluate(
            'typeof globalThis.__survivorsHost',
          ) as FlaxJsString).value,
          'object',
        );
        expect(liveImages, greaterThan(0));
        await tapGallery(tester, find.text('Settings'));
        final fpsOff = find.byWidgetPredicate(
          (widget) =>
              widget is Semantics && widget.properties.label == 'Show FPS: off',
        );
        await tapGallery(tester, fpsOff);
        await tapGallery(tester, find.text('Done'));
        await waitGalleryIO(tester, FlaxLocalStoragePlugin.flush());
        await tapGallery(tester, find.text('Start'), settle: false);
        await pumpGalleryUntil(
          tester,
          () => find.byTooltip('Pause').evaluate().isNotEmpty,
        );
        expect(find.textContaining('Enlarge the window'), findsNothing);
        expect(find.textContaining('Rotate to landscape'), findsNothing);
        gameFocus = tester
            .widget<KeyboardListener>(find.byType(KeyboardListener))
            .focusNode;
        await tester.sendKeyDownEvent(LogicalKeyboardKey.keyD);
        await tapGallery(tester, find.byTooltip('Pulse'), settle: false);
        for (var i = 0; i < 12; i++) {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 10)),
          );
          await tester.pump(const Duration(milliseconds: 20));
        }
        await tapGallery(tester, find.byKey(const ValueKey('gallery-back')));
        await tester.sendKeyUpEvent(LogicalKeyboardKey.keyD);
        await pumpGalleryUntil(tester, () => runtimes[1].isDisposed);
        await pumpGalleryUntil(tester, () => liveImages == 0);
        await pumpGalleryUntil(
          tester,
          () => audio.disposed.length == audio.created.length,
        );
        expect(audio.created, hasLength(5));
        expect(audio.resumed, isNotEmpty);
        expect(audio.activeListeners, 0);
        expect(runtimes[1].handlesAtDispose, 0);
        expect(runtimes.first.isDisposed, isFalse);
        expect(gameFocus.context?.mounted ?? false, isFalse);
        expect(gameFocus.parent, isNull);
        expect(gameFocus.hasFocus, isFalse);
        expect(
          FocusManager.instance.rootScope.descendants.contains(gameFocus),
          isFalse,
        );
        expect(tester.binding.transientCallbackCount, framesAtHome);
        expect(
          (runtimes.first.evaluate(
            'localStorage.getItem("profile")',
          ) as FlaxJsString).value,
          'gallery-profile',
        );
        await tapGallery(tester, find.byKey(const ValueKey('open-core')));
        await tapGallery(tester, find.text('Increment JS'));
        expect(find.text('Count: 1'), findsOneWidget);
        await tapGallery(tester, find.byKey(const ValueKey('gallery-back')));

        // Reentry keeps profile settings, while the active encounter starts anew.
        await tapGallery(
          tester,
          find.byKey(const ValueKey('open-survivors')),
          settle: false,
        );
        await pumpGalleryUntil(
          tester,
          () => find.text('Start').evaluate().isNotEmpty,
        );
        await tapGallery(tester, find.text('Settings'));
        expect(
          find.byWidgetPredicate(
            (widget) =>
                widget is Semantics &&
                widget.properties.label == 'Show FPS: on',
          ),
          findsOneWidget,
        );
        await tapGallery(tester, find.text('Done'));
        await tapGallery(tester, find.text('Start'), settle: false);
        await pumpGalleryUntil(
          tester,
          () => find.byTooltip('Pause').evaluate().isNotEmpty,
        );
        await tapGallery(tester, find.text('Unmount Flax'));
        await pumpGalleryUntil(
          tester,
          () => runtimes.every((runtime) => runtime.isDisposed),
        );
        await pumpGalleryUntil(tester, () => liveImages == 0);
        await pumpGalleryUntil(
          tester,
          () => audio.disposed.length == audio.created.length,
        );
        expect(audio.created, hasLength(10));
        expect(audio.activeListeners, 0);

        await tapGallery(tester, find.text('Mount Flax'));
        holdNextRuntime = true;
        await tapGallery(
          tester,
          find.byKey(const ValueKey('open-survivors')),
          settle: false,
        );
        await pumpGalleryUntil(tester, () => loading?.preparing ?? false);
        expect(find.text('Start'), findsNothing);
        await tapGallery(tester, find.text('Unmount Flax'));
        await pumpGalleryUntil(
          tester,
          () => runtimes.every((runtime) => runtime.isDisposed),
        );
        expect(runtimes, hasLength(5));
        expect(
          runtimes.map((runtime) => runtime.handlesAtDispose),
          everyElement(0),
        );
        expect(liveImages, 0);
        expect(audio.created, hasLength(10));
        expect(
          systemCalls,
          isNot(contains('SystemChrome.setPreferredOrientations')),
        );
        expect(
          systemCalls,
          isNot(contains('SystemChrome.setEnabledSystemUIMode')),
        );
        expect(errors, isEmpty);
        expect(tester.takeException(), isNull);
      } finally {
        try {
          await tester.pumpWidget(const SizedBox.shrink());
          await pumpGalleryUntil(
            tester,
            () => runtimes.every((runtime) => runtime.isDisposed),
          );
          await waitGalleryIO(tester, FlaxLocalStoragePlugin.shutdown());
          await tester.runAsync(() => storage.delete(recursive: true));
        } finally {
          debugDefaultTargetPlatformOverride = previousPlatform;
        }
      }
    },
  );
}
