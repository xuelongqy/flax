import 'dart:io';
import 'dart:convert';

import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_survivors/main.dart' as app;
import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:material_ui/material_ui.dart' as material;
import 'package:flutter_test/flutter_test.dart';

// Reuse the owner's native-audio fixture without shipping its example.
// ignore: avoid_relative_lib_imports
import '../../../packages/flax_audioplayers/example/lib/testing.dart';
import 'application_flow.dart' show RetryAtlasBundle;
import 'canvas_probe.dart';
import 'lifecycle_probe.dart';
import 'ui_controls.dart';

class _ObservedBinding extends AutomatedTestWidgetsFlutterBinding
    with SurvivorsObserverTracking {}

void main() {
  final binding = _ObservedBinding();
  testWidgets(
    'compact landscape joystick drag, pulse and retry status ownership',
    (tester) async {
      debugDefaultTargetPlatformOverride = TargetPlatform.android;
      addTearDown(() => debugDefaultTargetPlatformOverride = null);
      tester.view.physicalSize = const Size(667, 354);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      final previous = AudioplayersPlatformInterface.instance,
          previousGlobal = GlobalAudioplayersPlatformInterface.instance;
      AudioplayersPlatformInterface.instance = FlaxFakeAudioPlatform();
      GlobalAudioplayersPlatformInterface.instance =
          FlaxFakeGlobalAudioPlatform();
      addTearDown(() {
        AudioplayersPlatformInterface.instance = previous;
        GlobalAudioplayersPlatformInterface.instance = previousGlobal;
      });
      final images = SurvivorsImageProbe();
      final canvas = CanvasProbe(images: images);
      addTearDown(images.close);
      await tester.pumpWidget(const SizedBox.shrink());
      final observerBaseline = binding.trackedObservers.length;
      final lifecycleBaseline = binding.trackedObservers
          .whereType<AppLifecycleListener>()
          .length;
      final imageBaseline = images.snapshot();
      final directory = (await tester.runAsync(
        () => Directory.systemTemp.createTemp('survivors-review-'),
      ))!;
      FlaxJsRuntime? runtime;
      FocusNode? focus;
      Future<void> until(bool Function() ready) async {
        for (var i = 0; i < 300; i++) {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 10)),
          );
          await tester.pump(const Duration(milliseconds: 20));
          if (ready()) return;
        }
        fail('Review regression transition timed out');
      }

      Map state() => jsonState(runtime!);
      try {
        await tester.runAsync(
          () => app.startApplication(
            storageDirectory: directory.path,
            assetBundle: RetryAtlasBundle(),
            canvasPlugin: canvas,
            createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
          ),
        );
        await until(() => find.text('重试').evaluate().isNotEmpty);
        runtime!.evaluate('globalThis.__survivorsStorageError("test failure")');
        await tester.tap(find.text('重试'));
        await selectSurvivorsEnglish(tester);
        await until(() => find.text('Start').evaluate().isNotEmpty);
        expect(find.textContaining('Asset loading failed'), findsNothing);
        expect(find.text('Saving unavailable.'), findsOneWidget);
        await tester.tap(find.text('Start'));
        await tester.pump();
        expect(state()['phase'], 'playing');
        expect(find.textContaining('Enlarge the window'), findsNothing);
        focus = tester
            .widget<KeyboardListener>(find.byType(KeyboardListener))
            .focusNode;
        expect(focus.context, isNotNull);
        expect(
          binding.trackedObservers.whereType<AppLifecycleListener>().length,
          greaterThan(lifecycleBaseline),
        );
        final mounted = images.snapshot();
        expect(
          mounted['live'] as int,
          greaterThanOrEqualTo((imageBaseline['live'] as int) + 4),
        );
        expect(
          mounted['inputs'] as int,
          greaterThanOrEqualTo((imageBaseline['inputs'] as int) + 2),
        );
        expect(
          mounted['baked'] as int,
          greaterThanOrEqualTo((imageBaseline['baked'] as int) + 2),
        );
        final gesture = await tester.startGesture(
          tester
              .getRect(
                find.byWidgetPredicate(
                  (widget) =>
                      widget is Semantics &&
                      widget.properties.label == 'Movement joystick',
                ),
              )
              .center,
          pointer: 31,
        );
        await gesture.moveBy(const Offset(40, 0));
        final x = state()['x'] as num;
        final pulse = find.byTooltip('Pulse');
        await tester.tap(pulse.first);
        for (var i = 0; i < 8; i++) {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 20)),
          );
          await tester.pump(const Duration(milliseconds: 20));
        }
        expect(state()['x'] as num, greaterThan(x));
        expect(state()['inputHeld'], 1);
        await gesture.cancel();
        expect(state()['inputHeld'], 0);
        expect(find.text('Saving unavailable.'), findsOneWidget);

        // A fresh fixed-seed encounter reaches XP and damage naturally, exercising
        // real mounted Flutter bindings without a state-mutation test hook.
        await tester.tap(find.byTooltip('Pause'));
        await until(() => state()['phase'] == 'paused');
        await tester.tap(find.text('Restart'));
        await until(() => state()['phase'] == 'playing');
        await tester.pump(const Duration(milliseconds: 30));
        runtime!.evaluate(
          'globalThis.__survivorsAcceptance.command("resetDiagnostics")',
        );
        final health = find.byWidgetPredicate(
          (w) =>
              w is material.LinearProgressIndicator &&
              w.semanticsLabel == 'Health',
        );
        final experience = find.byWidgetPredicate(
          (w) =>
              w is material.LinearProgressIndicator &&
              w.semanticsLabel == 'Experience',
        );
        final timer = find.textContaining(RegExp(r'^\d\d:\d\d$'));
        final joystick = find.byWidgetPredicate(
          (w) =>
              w is Listener &&
              w.behavior == HitTestBehavior.opaque &&
              w.onPointerDown != null &&
              w.onPointerMove != null &&
              w.onPointerUp != null &&
              w.onPointerCancel != null &&
              w.onPointerHover == null &&
              w.onPointerSignal == null,
        );
        expect(health, findsOneWidget);
        expect(experience, findsOneWidget);
        expect(timer, findsOneWidget);
        expect(joystick, findsOneWidget);
        final canvasElement = tester.element(find.byType(FlaxCanvasView));
        final joystickElement = tester.element(joystick);
        final initialTimer = tester.widget<Text>(timer).data;
        expect(
          tester.widget<material.LinearProgressIndicator>(health).value,
          1,
        );
        expect(
          tester.widget<material.LinearProgressIndicator>(experience).value,
          0,
        );
        for (var i = 0; i < 4000; i++) {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 10)),
          );
          await tester.pump(const Duration(milliseconds: 20));
          if (tester.widget<material.LinearProgressIndicator>(health).value! <
                  1 &&
              tester
                      .widget<material.LinearProgressIndicator>(experience)
                      .value! >
                  0) {
            break;
          }
        }
        expect(state()['phase'], 'playing');
        expect(
          tester.widget<material.LinearProgressIndicator>(health).value!,
          lessThan(1),
        );
        expect(
          tester.widget<material.LinearProgressIndicator>(experience).value!,
          greaterThan(0),
        );
        expect(tester.widget<Text>(timer).data, isNot(initialTimer));
        expect(
          identical(tester.element(find.byType(FlaxCanvasView)), canvasElement),
          isTrue,
        );
        expect(identical(tester.element(joystick), joystickElement), isTrue);
        final counts = state()['uiCounts'] as Map;
        expect(counts['hudChanges'] as num, greaterThan(0));
        expect(counts['builds'], 0, reason: 'Combat changes patch HUD leaves');
        expect(
          counts['layouts'],
          0,
          reason: 'Combat changes retain battlefield geometry',
        );
        runtime!.evaluate(
          'globalThis.__survivorsAcceptance.command("stopDiagnostics")',
        );
      } finally {
        await tester.pumpWidget(const SizedBox.shrink());
        await until(() => runtime == null || runtime!.isDisposed);
        await until(
          () =>
              binding.trackedObservers.length == observerBaseline &&
              images.snapshot()['live'] == imageBaseline['live'],
        );
        expect(focus?.context?.mounted ?? false, isFalse);
        debugPrintSynchronously(
          'FLAX_SURVIVORS_RESOURCE_REGRESSION:${jsonEncode({'images': images.snapshot(), 'observerBaseline': observerBaseline, 'observersAfter': binding.trackedObservers.length, 'focusAttached': focus?.parent != null})}',
        );
        expect(focus?.parent, isNull);
        expect(
          FocusManager.instance.rootScope.descendants.contains(focus),
          isFalse,
        );
        await completeSurvivorsIo(tester, FlaxLocalStoragePlugin.shutdown);
        await tester.runAsync(() => directory.delete(recursive: true));
        debugDefaultTargetPlatformOverride = null;
        tester.view.resetPhysicalSize();
        tester.view.resetDevicePixelRatio();
      }
    },
  );
  testWidgets(
    'desktop 800x1000 remains playable with a landscape battlefield',
    (tester) async {
      debugDefaultTargetPlatformOverride = TargetPlatform.macOS;
      tester.view.physicalSize = const Size(800, 1000);
      tester.view.devicePixelRatio = 1;
      final previous = AudioplayersPlatformInterface.instance,
          previousGlobal = GlobalAudioplayersPlatformInterface.instance;
      AudioplayersPlatformInterface.instance = FlaxFakeAudioPlatform();
      GlobalAudioplayersPlatformInterface.instance =
          FlaxFakeGlobalAudioPlatform();
      final directory = (await tester.runAsync(
        () => Directory.systemTemp.createTemp('survivors-desktop-'),
      ))!;
      FlaxJsRuntime? runtime;
      Future<void> until(bool Function() ready) async {
        for (var i = 0; i < 250; i++) {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 10)),
          );
          await tester.pump(const Duration(milliseconds: 20));
          if (ready()) return;
        }
        fail('Desktop transition timed out');
      }

      try {
        await tester.runAsync(
          () => app.startApplication(
            storageDirectory: directory.path,
            createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
          ),
        );
        await selectSurvivorsEnglish(tester);
        await until(() => find.text('Start').evaluate().isNotEmpty);
        await tester.tap(find.text('Start'));
        await tester.pump();
        expect(jsonState(runtime!)['phase'], 'playing');
        expect(find.textContaining('Rotate to landscape'), findsNothing);
        expect(find.textContaining('Enlarge the window'), findsNothing);
        expect(find.byTooltip('Pause'), findsOneWidget);
      } finally {
        await tester.pumpWidget(const SizedBox.shrink());
        await until(() => runtime == null || runtime!.isDisposed);
        await completeSurvivorsIo(tester, FlaxLocalStoragePlugin.shutdown);
        await tester.runAsync(() => directory.delete(recursive: true));
        debugDefaultTargetPlatformOverride = null;
        tester.view.resetPhysicalSize();
        tester.view.resetDevicePixelRatio();
        AudioplayersPlatformInterface.instance = previous;
        GlobalAudioplayersPlatformInterface.instance = previousGlobal;
      }
    },
  );
  testWidgets(
    'broken native media is visible and suppresses further playback',
    (tester) async {
      final previous = AudioplayersPlatformInterface.instance,
          previousGlobal = GlobalAudioplayersPlatformInterface.instance;
      final audio = FlaxFakeAudioPlatform()..failNext = true;
      AudioplayersPlatformInterface.instance = audio;
      GlobalAudioplayersPlatformInterface.instance =
          FlaxFakeGlobalAudioPlatform();
      final directory = (await tester.runAsync(
        () => Directory.systemTemp.createTemp('survivors-media-failure-'),
      ))!;
      FlaxJsRuntime? runtime;
      Future<void> until(bool Function() ready) async {
        for (var i = 0; i < 250; i++) {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 10)),
          );
          await tester.pump(const Duration(milliseconds: 20));
          if (ready()) return;
        }
        fail('Broken-media transition timed out');
      }

      try {
        await tester.runAsync(
          () => app.startApplication(
            storageDirectory: directory.path,
            createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
          ),
        );
        await selectSurvivorsEnglish(tester);
        await until(() => find.text('Start').evaluate().isNotEmpty);
        await tester.tap(find.text('Start'));
        await until(
          () => find
              .text('Audio unavailable; playing silently.')
              .evaluate()
              .isNotEmpty,
        );
        expect(jsonState(runtime!)['phase'], 'playing');
        final attempts = audio.sources.length;
        expect(attempts, greaterThan(0));
        await tester.tap(find.byTooltip('Pause'));
        await tester.pump();
        await tester.tap(find.text('Restart'));
        await tester.pump();
        await tester.tap(find.byTooltip('Pulse'));
        for (var i = 0; i < 15; i++) {
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 10)),
          );
          await tester.pump(const Duration(milliseconds: 20));
        }
        expect(audio.sources.length, attempts);
        expect(
          find.text('Audio unavailable; playing silently.'),
          findsOneWidget,
        );
      } finally {
        await tester.pumpWidget(const SizedBox.shrink());
        await until(() => runtime == null || runtime!.isDisposed);
        await completeSurvivorsIo(tester, FlaxLocalStoragePlugin.shutdown);
        await tester.runAsync(() => directory.delete(recursive: true));
        AudioplayersPlatformInterface.instance = previous;
        GlobalAudioplayersPlatformInterface.instance = previousGlobal;
      }
    },
  );
}

Map jsonState(FlaxJsRuntime runtime) => jsonDecode(
  (runtime.evaluate(
    'JSON.stringify(globalThis.__survivorsAcceptance.snapshot())',
  ) as FlaxJsString).value,
) as Map;
