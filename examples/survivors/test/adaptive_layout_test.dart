import 'dart:convert';
import 'dart:io';
import 'dart:math' as math;

import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_survivors/main.dart' as app;
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:material_ui/material_ui.dart';
import 'package:flutter_test/flutter_test.dart';

// Reuse actual audio bridge fixtures; rendering remains the real Canvas implementation.
// ignore: avoid_relative_lib_imports
import '../../../packages/flax_audioplayers/example/lib/testing.dart';
import 'ui_controls.dart';

void main() {
  for (final platform in [
    TargetPlatform.android,
    TargetPlatform.macOS,
    TargetPlatform.iOS,
  ]) {
    testWidgets(
      'adaptive safe-area geometry and resize ownership on $platform',
      (tester) async {
        final ios = platform == TargetPlatform.iOS;
        final mobile = platform != TargetPlatform.macOS;
        final previousPlatform = debugDefaultTargetPlatformOverride;
        debugDefaultTargetPlatformOverride = platform;
        final previous = AudioplayersPlatformInterface.instance,
            previousGlobal = GlobalAudioplayersPlatformInterface.instance;
        AudioplayersPlatformInterface.instance = FlaxFakeAudioPlatform();
        GlobalAudioplayersPlatformInterface.instance =
            FlaxFakeGlobalAudioPlatform();
        final directory = (await tester.runAsync(
          () => Directory.systemTemp.createTemp('survivors-adaptive-'),
        ))!;
        final platformCalls = <MethodCall>[];
        tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          SystemChannels.platform,
          (call) async {
            platformCalls.add(call);
            return null;
          },
        );
        const pathProvider = MethodChannel('plugins.flutter.io/path_provider');
        tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          pathProvider,
          (call) async =>
              call.method == 'getTemporaryDirectory' ? directory.path : null,
        );
        var insets = ios
            ? const EdgeInsets.fromLTRB(44, 0, 12, 21)
            : const EdgeInsets.fromLTRB(12, 24, 20, 0);
        FlaxJsRuntime? runtime;
        Future<void> until(bool Function() ready) async {
          for (var i = 0; i < 250; i++) {
            await tester.runAsync(
              () => Future<void>.delayed(const Duration(milliseconds: 10)),
            );
            await tester.pump(const Duration(milliseconds: 20));
            if (ready()) return;
          }
          fail('Adaptive transition timed out');
        }

        Map state() => jsonDecode(
          (runtime!.evaluate(
            'JSON.stringify(globalThis.__survivorsAcceptance.snapshot())',
          ) as FlaxJsString).value,
        ) as Map;
        Future<void> layout(Size size, {EdgeInsets? padding}) async {
          if (padding != null) insets = padding;
          final density = ios
              ? 3.0
              : mobile
              ? (size.height == 362 ? 2.75 : 1.0)
              : 2.0;
          tester.view.devicePixelRatio = density;
          tester.view.physicalSize = size * density;
          tester.view.padding = FakeViewPadding(
            left: insets.left * density,
            right: insets.right * density,
            top: insets.top * density,
            bottom: insets.bottom * density,
          );
          tester.view.viewPadding = FakeViewPadding(
            left: insets.left * density,
            right: insets.right * density,
            top: insets.top * density,
            bottom: insets.bottom * density,
          );
          await tester.pump();
        }

        Rect safe(Size size) => Rect.fromLTWH(
          insets.left,
          insets.top,
          math.max(0, size.width - insets.horizontal),
          math.max(0, size.height - insets.vertical),
        );
        void geometry(Size size) {
          final canvasRect = tester.getRect(find.byType(FlaxCanvasView));
          expect(
            canvasRect,
            Offset.zero & size,
            reason:
                'Canvas fills the complete window beneath native safe insets',
          );
          final snapshot = state(),
              viewport = snapshot['viewport'] as Map,
              camera = snapshot['camera'] as Map,
              backing = snapshot['canvas'] as Map;
          expect(viewport['width'], size.width);
          expect(viewport['height'], size.height);
          final scale = math.max(
            math.min(size.width / 960, size.height / 540),
            math.max(size.width / 3200, size.height / 1800),
          );
          expect(camera['width'] as num, closeTo(size.width / scale, 1e-6));
          expect(camera['height'] as num, closeTo(size.height / scale, 1e-6));
          expect(
            size.width / (camera['width'] as num),
            closeTo(size.height / (camera['height'] as num), 1e-9),
            reason: 'Actors use one uniform world-to-logical scale',
          );
          expect(
            camera['x'] as num,
            inInclusiveRange(0, 3200 - (camera['width'] as num) + 1e-6),
          );
          expect(
            camera['y'] as num,
            inInclusiveRange(0, 1800 - (camera['height'] as num) + 1e-6),
          );
          expect(
            (backing['width'] as num) * (backing['height'] as num),
            lessThanOrEqualTo(
              (snapshot['profile'] as Map)['quality'] == 'balanced'
                  ? 960 * 540
                  : 1920 * 1080,
            ),
          );
          expect(
            math.max(backing['width'] as num, backing['height'] as num),
            lessThanOrEqualTo(1920),
          );
          expect(
            (backing['width'] as num) / (backing['height'] as num),
            closeTo(size.width / size.height, .02),
          );
        }

        void referenceBacking(Size size) {
          final backing = state()['canvas'] as Map;
          if (size == const Size(861, 362)) {
            expect(backing['width'], 1110);
            expect(backing['height'], 466);
          } else if (size == const Size(832, 1024)) {
            expect(backing['width'], 1297);
            expect(backing['height'], 1597);
          } else if (size == const Size(844, 390)) {
            expect(backing['width'], 1059);
            expect(backing['height'], 489);
          }
        }

        Finder button(Finder tooltip) => find
            .descendant(
              of: tooltip,
              matching: find.byWidgetPredicate(
                (widget) => widget is TextButton,
              ),
            )
            .first;
        final move = find.byWidgetPredicate(
              (widget) =>
                  widget is Semantics &&
                  widget.properties.label == 'Movement joystick',
            ),
            pause = find.byTooltip('Pause');
        Finder pulse() => find.byTooltip('Pulse').first;
        void hud(Size size) {
          expect(survivorsSafeUiRect(), safe(size));
          final health = tester.getRect(
                find.byWidgetPredicate(
                  (widget) =>
                      widget is LinearProgressIndicator &&
                      widget.semanticsLabel == 'Health',
                ),
              ),
              clock = tester.getRect(
                find.textContaining(RegExp(r'^\d\d:\d\d$')).first,
              ),
              pauseRect = tester.getRect(button(pause)),
              pulseRect = tester.getRect(button(pulse()));
          final fps = find.textContaining(RegExp(r'^FPS\s'));
          for (final rect in [
            health,
            clock,
            pauseRect,
            pulseRect,
            if (fps.evaluate().isNotEmpty) tester.getRect(fps),
          ]) {
            expect(safe(size).contains(rect.topLeft), isTrue);
            expect(
              safe(size).contains(rect.bottomRight - const Offset(.001, .001)),
              isTrue,
            );
          }
          expect(pulseRect.width, greaterThanOrEqualTo(88));
          expect(pulseRect.height, greaterThanOrEqualTo(88));
          expect(health.overlaps(clock), isFalse);
          expect(health.overlaps(pauseRect), isFalse);
          expect(clock.overlaps(pauseRect), isFalse);
          if (mobile) {
            final moveRect = tester.getRect(move);
            expect(moveRect.size, const Size(116, 116));
            expect(find.text('MOVE'), findsNothing);
            expect(find.text('PULSE'), findsNothing);
            expect(moveRect.overlaps(pulseRect), isFalse);
            for (final rect in [moveRect, pulseRect, pauseRect]) {
              expect(rect.width, greaterThanOrEqualTo(48));
              expect(rect.height, greaterThanOrEqualTo(48));
            }
          }
        }

        try {
          final layouts = ios
              ? [const Size(844, 390)]
              : mobile
              ? [
                  const Size(672, 344),
                  const Size(861, 362),
                  const Size(832, 624),
                ]
              : [const Size(832, 1024)];
          await layout(layouts.first);
          await tester.runAsync(
            () => app.startApplication(
              storageDirectory: directory.path,
              createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
            ),
          );
          await selectSurvivorsEnglish(tester, enableFps: ios);
          await until(() => find.text('Start').evaluate().isNotEmpty);
          if (ios) {
            expect(
              platformCalls
                  .where(
                    (call) =>
                        call.method == 'SystemChrome.setPreferredOrientations',
                  )
                  .single
                  .arguments,
              [
                'DeviceOrientation.landscapeLeft',
                'DeviceOrientation.landscapeRight',
              ],
            );
            expect(
              platformCalls
                  .where(
                    (call) =>
                        call.method == 'SystemChrome.setEnabledSystemUIMode',
                  )
                  .single
                  .arguments,
              'SystemUiMode.immersiveSticky',
            );
            await tester.tap(find.text('Settings'));
            await until(() => find.text('SETTINGS').evaluate().isNotEmpty);
            final heading = tester.getRect(find.text('SETTINGS'));
            expect(safe(layouts.first).contains(heading.topLeft), isTrue);
            expect(
              safe(layouts.first)
                  .contains(heading.bottomRight - const Offset(.001, .001)),
              isTrue,
            );
            final languageRow = tester.getRect(
              survivorsSetting('Language: English'),
            );
            expect(languageRow.width, greaterThanOrEqualTo(48));
            expect(languageRow.height, greaterThanOrEqualTo(48));
            await tester.ensureVisible(find.text('Done'));
            final done = tester.getRect(
              find
                  .ancestor(
                    of: find.text('Done'),
                    matching: find.byType(TextButton),
                  )
                  .first,
            );
            expect(done.width, greaterThanOrEqualTo(48));
            expect(done.height, greaterThanOrEqualTo(48));
            expect(safe(layouts.first).contains(done.topLeft), isTrue);
            expect(
              safe(layouts.first)
                  .contains(done.bottomRight - const Offset(.001, .001)),
              isTrue,
            );
            await tapSurvivorsControl(tester, find.text('Done'));
          }
          if (mobile) {
            runtime!.evaluate(
              'globalThis.__survivorsAcceptance.command("balancedFixture")',
            );
          }
          await tester.tap(find.text('Start'));
          await until(() => state()['phase'] == 'playing');
          final seed = state()['seed'];
          for (var i = 0; i < layouts.length; i++) {
            if (i > 0) {
              await layout(layouts[i]);
              await until(() => state()['phase'] == 'paused');
              geometry(layouts[i]);
              await tester.tap(find.text('Resume'));
              await until(() => state()['phase'] == 'playing');
            }
            geometry(layouts[i]);
            expect(tester.takeException(), isNull, reason: 'layout $i');
            referenceBacking(layouts[i]);
            hud(layouts[i]);
            if (ios) {
              final safeRect = safe(layouts[i]);
              expect(safeRect.contains(tester.getTopLeft(move)), isTrue);
              final origin = Offset(safeRect.left - 10, safeRect.center.dy);
              final edgeGesture = await tester.startGesture(
                origin,
                pointer: 40,
              );
              await tester.pump();
              try {
                expect(state()['inputHeld'], 1);
                expect(tester.getCenter(move), origin);
                expect(
                  find.ancestor(of: move, matching: find.byType(SafeArea)),
                  findsNothing,
                );
              } finally {
                await edgeGesture.up();
              }
              expect(state()['inputHeld'], 0);
            }
            final gesture = await tester.startGesture(
              mobile
                  ? tester.getCenter(move)
                  : safe(layouts[i]).bottomLeft + const Offset(48, -48),
              pointer: 41,
            );
            await gesture.moveBy(const Offset(40, 0));
            final x = state()['x'] as num;
            await tester.tap(pulse());
            await until(() => (state()['x'] as num) > x);
            double ringValue() => tester
                .widget<CircularProgressIndicator>(
                  find.byType(CircularProgressIndicator),
                )
                .value!;
            if (i == 0) {
              await until(() => ringValue() < 1);
              await until(() => ringValue() > 0 && ringValue() < 1);
            }
            expect(ringValue(), inInclusiveRange(0, 1));
            expect(state()['inputHeld'], 1);
            final resized = Size(layouts[i].width + 16, layouts[i].height);
            await layout(resized);
            await until(() => state()['phase'] == 'paused');
            expect(state()['seed'], seed);
            expect(state()['inputHeld'], 0);
            geometry(resized);
            final tick = state()['tick'], pausedX = state()['x'];
            await until(() => find.text('Resume').evaluate().isNotEmpty);
            await tester.runAsync(
              () => Future<void>.delayed(const Duration(milliseconds: 80)),
            );
            await tester.pump(const Duration(milliseconds: 100));
            expect(state()['tick'], tick);
            expect(state()['x'], pausedX);
            await gesture.cancel();
            await tester.tap(find.text('Resume'));
            await until(() => state()['phase'] == 'playing');
            expect(state()['inputHeld'], 0);
          }
          if (!mobile) {
            final original = layouts.first;
            await layout(const Size(671, 384));
            await until(
              () => find
                  .text('Enlarge the window to continue')
                  .evaluate()
                  .isNotEmpty,
            );
            expect(state()['phase'], 'paused');
            expect(state()['inputHeld'], 0);
            geometry(const Size(671, 384));
            await layout(const Size(672, 384));
            await until(() => find.text('Resume').evaluate().isNotEmpty);
            await tester.tap(find.text('Resume'));
            await until(() => state()['phase'] == 'playing');
            hud(const Size(672, 384));
            await layout(original);
            await until(() => state()['phase'] == 'paused');
            await tester.tap(find.text('Resume'));
            await until(
              () =>
                  state()['phase'] == 'playing' &&
                  tester
                      .widget<KeyboardListener>(find.byType(KeyboardListener))
                      .focusNode
                      .hasFocus,
            );
            final initialX = state()['x'] as num;
            await tester.sendKeyDownEvent(
              LogicalKeyboardKey.keyD,
              physicalKey: PhysicalKeyboardKey.keyD,
            );
            await until(() => (state()['x'] as num) > initialX);
            await tester.sendKeyDownEvent(
              LogicalKeyboardKey.space,
              physicalKey: PhysicalKeyboardKey.space,
            );
            final emptySafe = Size(insets.horizontal, original.height);
            await layout(emptySafe);
            await until(() => state()['phase'] == 'paused');
            expect(state()['inputHeld'], 0);
            expect((state()['resources'] as Map)['frame'], isFalse);
            geometry(emptySafe);
            expect(find.byTooltip('Pause'), findsNothing);
            expect(find.byTooltip('Pulse'), findsNothing);
            final stoppedTick = state()['tick'], stoppedX = state()['x'];
            await tester.runAsync(
              () => Future<void>.delayed(const Duration(milliseconds: 80)),
            );
            await tester.pump(const Duration(milliseconds: 100));
            expect(state()['tick'], stoppedTick);
            expect(state()['x'], stoppedX);
            await layout(Size(0, original.height));
            expect(find.byType(FlaxCanvasView), findsNothing);
            expect(state()['phase'], 'paused');
            expect(state()['inputHeld'], 0);
            expect((state()['resources'] as Map)['frame'], isFalse);
            await layout(original);
            await until(() => find.text('Resume').evaluate().isNotEmpty);
            expect(state()['phase'], 'paused');
            expect(state()['inputHeld'], 0);
            expect(state()['tick'], stoppedTick);
            expect(state()['seed'], seed);
            geometry(original);
            referenceBacking(original);
            await tester.sendKeyUpEvent(
              LogicalKeyboardKey.keyD,
              physicalKey: PhysicalKeyboardKey.keyD,
            );
            await tester.sendKeyUpEvent(
              LogicalKeyboardKey.space,
              physicalKey: PhysicalKeyboardKey.space,
            );
            await tester.tap(find.text('Resume'));
            await until(() => state()['phase'] == 'playing');
            expect(state()['inputHeld'], 0);
          }
          if (ios) {
            final original = layouts.first;
            await layout(original);
            await until(() => state()['phase'] == 'paused');
            await tapSurvivorsControl(tester, find.text('Resume'));
            await until(() => state()['phase'] == 'playing');
            for (final padding in [
              const EdgeInsets.fromLTRB(12, 0, 44, 21),
              const EdgeInsets.fromLTRB(12, 21, 44, 0),
            ]) {
              final oldSafeSize = safe(original).size;
              final gesture = await tester.startGesture(
                tester.getCenter(move),
                pointer: 51,
              );
              await gesture.moveBy(const Offset(40, 0));
              await tester.sendKeyDownEvent(
                LogicalKeyboardKey.keyD,
                physicalKey: PhysicalKeyboardKey.keyD,
              );
              expect(state()['inputHeld'] as num, greaterThan(0));
              await layout(original, padding: padding);
              await until(() => state()['phase'] == 'paused');
              expect(safe(original).size, oldSafeSize);
              geometry(original);
              hud(original);
              expect(state()['inputHeld'], 0);
              expect((state()['resources'] as Map)['frame'], isFalse);
              final fps = state()['fps'] as Map;
              expect(fps['value'], isNull);
              expect(fps['windowStart'], isNull);
              expect(fps['draws'], 0);
              final tick = state()['tick'];
              await tester.pump(const Duration(milliseconds: 100));
              expect(state()['tick'], tick);
              await gesture.cancel();
              await tester.sendKeyUpEvent(
                LogicalKeyboardKey.keyD,
                physicalKey: PhysicalKeyboardKey.keyD,
              );
              await tapSurvivorsControl(tester, find.text('Resume'));
              await until(() => state()['phase'] == 'playing');
            }
            final immersiveBefore = platformCalls
                .where(
                  (call) =>
                      call.method == 'SystemChrome.setEnabledSystemUIMode',
                )
                .length;
            tester.binding.handleAppLifecycleStateChanged(
              AppLifecycleState.inactive,
            );
            await until(() => state()['phase'] == 'paused');
            tester.binding.handleAppLifecycleStateChanged(
              AppLifecycleState.resumed,
            );
            await until(
              () =>
                  platformCalls
                      .where(
                        (call) =>
                            call.method ==
                            'SystemChrome.setEnabledSystemUIMode',
                      )
                      .length >
                  immersiveBefore,
            );
            expect(
              platformCalls
                  .where(
                    (call) =>
                        call.method == 'SystemChrome.setEnabledSystemUIMode',
                  )
                  .last
                  .arguments,
              'SystemUiMode.immersiveSticky',
            );
            expect(state()['phase'], 'paused');
            expect(state()['inputHeld'], 0);
            await tapSurvivorsControl(tester, find.text('Resume'));
            await until(() => state()['phase'] == 'playing');
            runtime!.evaluate(
              'globalThis.__survivorsAcceptance.command("upgradeFixture")',
            );
            final heading = find.text('LEVEL UP');
            await until(() => heading.evaluate().isNotEmpty);
            expect(state()['phase'], 'upgrade');
            final title = tester.getRect(heading);
            expect(safe(original).contains(title.topLeft), isTrue);
            await tester.ensureVisible(survivorsUpgrade(0));
            for (var index = 0; index < 3; index++) {
              final card = tester.getRect(survivorsUpgrade(index));
              expect(card.width, greaterThanOrEqualTo(48));
              expect(card.height, greaterThanOrEqualTo(48));
              expect(safe(original).contains(card.topLeft), isTrue);
              expect(
                safe(original)
                    .contains(card.bottomRight - const Offset(.001, .001)),
                isTrue,
              );
            }
            await tapSurvivorsControl(tester, survivorsUpgrade(1));
            await until(() => state()['phase'] == 'playing');
            expect(state()['audioStatus'], isEmpty);
          }
          if (mobile) {
            await layout(
              ios ? const Size(390, 844) : const Size(352, 664),
              padding: ios ? const EdgeInsets.fromLTRB(0, 44, 0, 34) : null,
            );
            expect(tester.takeException(), isNull, reason: 'portrait');
            await until(
              () => find.text('Rotate to landscape').evaluate().isNotEmpty,
            );
            expect(state()['phase'], 'paused');
            expect(state()['inputHeld'], 0);
            await layout(
              layouts.first,
              padding: ios ? const EdgeInsets.fromLTRB(12, 0, 44, 21) : null,
            );
            await until(
              () => find.text('Rotate to landscape').evaluate().isEmpty,
            );
            expect(state()['phase'], 'paused');
            await tester.tap(find.text('Resume'));
            await until(() => state()['phase'] == 'playing');
          }
          expect(tester.takeException(), isNull);
        } finally {
          await tester.pumpWidget(const SizedBox.shrink());
          await until(() => runtime == null || runtime!.isDisposed);
          await completeSurvivorsIo(tester, FlaxLocalStoragePlugin.shutdown);
          await tester.runAsync(() => directory.delete(recursive: true));
          tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
            SystemChannels.platform,
            null,
          );
          tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
            pathProvider,
            null,
          );
          tester.view.resetPhysicalSize();
          tester.view.resetDevicePixelRatio();
          tester.view.resetPadding();
          tester.view.resetViewPadding();
          debugDefaultTargetPlatformOverride = previousPlatform;
          AudioplayersPlatformInterface.instance = previous;
          GlobalAudioplayersPlatformInterface.instance = previousGlobal;
        }
      },
    );
  }
}
