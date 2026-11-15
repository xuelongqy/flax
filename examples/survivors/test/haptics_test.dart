import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:audioplayers_platform_interface/audioplayers_platform_interface.dart';
import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_survivors/main.dart' as app;
import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

// Headless-only audio fixture; the standalone integration entry does not import this test.
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
      'generated haptic channel, preference and failure on $platform',
      (tester) async {
        final previousPlatform = debugDefaultTargetPlatformOverride;
        final previousAudio = AudioplayersPlatformInterface.instance;
        final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
        debugDefaultTargetPlatformOverride = platform;
        tester.view.physicalSize = const Size(800, 400);
        tester.view.devicePixelRatio = 1;
        AudioplayersPlatformInterface.instance = FlaxFakeAudioPlatform();
        GlobalAudioplayersPlatformInterface.instance =
            FlaxFakeGlobalAudioPlatform();
        final calls = <Object?>[];
        final ios = platform == TargetPlatform.iOS;
        final mobile = ios || platform == TargetPlatform.android;
        final pulseFeedback = ios ? null : 'HapticFeedbackType.mediumImpact';
        var unsupported = false;
        tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          SystemChannels.platform,
          (call) async {
            if (call.method == 'HapticFeedback.vibrate') {
              calls.add(call.arguments);
              if (unsupported) throw PlatformException(code: 'unsupported');
            }
            return null;
          },
        );
        final directory = (await tester.runAsync(
          () => Directory.systemTemp.createTemp('survivors-haptics-'),
        ))!;
        FlaxJsRuntime? runtime;
        Map state() => jsonDecode(
          (runtime!.evaluate(
            'JSON.stringify(globalThis.__survivorsAcceptance.snapshot())',
          ) as FlaxJsString).value,
        ) as Map;
        Future<void> until(bool Function() ready) async {
          for (var i = 0; i < 250; i++) {
            if (ready()) return;
            await tester.runAsync(
              () => Future<void>.delayed(const Duration(milliseconds: 10)),
            );
            await tester.pump(const Duration(milliseconds: 20));
          }
          fail('Haptics transition timed out');
        }

        Future<void> tap(String text) async {
          final finder = text == 'Pause'
              ? find.byTooltip(text)
              : text.contains(': ')
              ? survivorsSetting(text)
              : find.text(text);
          debugPrintSynchronously('HAPTIC_STAGE: tap $text');
          await until(() => finder.evaluate().isNotEmpty);
          await tester.ensureVisible(finder.first);
          await tester.tap(finder.first);
          await tester.pump(const Duration(milliseconds: 20));
        }

        Future<void> pulse() async {
          debugPrintSynchronously('HAPTIC_STAGE: pulse');
          await tester.sendKeyDownEvent(LogicalKeyboardKey.space);
          await tester.pump(const Duration(milliseconds: 20));
          await tester.sendKeyUpEvent(LogicalKeyboardKey.space);
          final tick = state()['tick'] as num;
          await until(() => (state()['tick'] as num) > tick);
        }

        Future<void> menu() async {
          await tap('Pause');
          await tap('Settings');
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
          expect((state()['profile'] as Map)['haptics'], isTrue);
          await tap('Start');
          await pulse();
          expect(calls, mobile ? [pulseFeedback] : isEmpty);
          await pulse(); // Cooldown rejects this pulse.
          expect(calls, hasLength(mobile ? 1 : 0));
          runtime!.evaluate(
            'globalThis.__survivorsAcceptance.command("upgradeFixture")',
          );
          await until(() => survivorsUpgrade(0).evaluate().isNotEmpty);
          await tapSurvivorsControl(tester, survivorsUpgrade(0));
          expect(
            calls,
            mobile
                ? [pulseFeedback, 'HapticFeedbackType.selectionClick']
                : isEmpty,
          );
          await menu();
          if (mobile) {
            await tap('Haptics: on');
            expect(survivorsSetting('Haptics: off'), findsOneWidget);
          } else {
            expect(find.text('Haptics'), findsNothing);
          }
          await tap('Done');
          await tap('Restart');
          calls.clear();
          await pulse();
          expect(calls, isEmpty);
          if (mobile) {
            await menu();
            await tap('Haptics: off');
            await tap('Done');
            await tap('Restart');
            debugPrintSynchronously('HAPTIC_STAGE: unsupported');
            unsupported = true;
            await pulse();
            expect(calls, [pulseFeedback]);
            final afterFeedback = state()['tick'] as num;
            await until(() => (state()['tick'] as num) >= afterFeedback + 3);
            expect(state()['phase'], 'playing');
            expect(tester.takeException(), isNull);
          }
        } finally {
          // Drain writes while the widget-test clock can still deliver their callbacks.
          var flushed = false;
          Object? flushError;
          unawaited(
            FlaxLocalStoragePlugin.flush().then(
              (_) => flushed = true,
              onError: (Object error) => flushError = error,
            ),
          );
          await until(() => flushed || flushError != null);
          expect(flushError, isNull);
          debugPrintSynchronously('HAPTIC_STAGE: unmount');
          await tester.pumpWidget(const SizedBox.shrink());
          debugPrintSynchronously('HAPTIC_STAGE: wait runtime');
          await until(() => runtime == null || runtime!.isDisposed);
          debugPrintSynchronously('HAPTIC_STAGE: shutdown storage');
          var closed = false;
          Object? closeError;
          unawaited(
            FlaxLocalStoragePlugin.shutdown().then(
              (_) => closed = true,
              onError: (Object error) => closeError = error,
            ),
          );
          await until(() => closed || closeError != null);
          expect(closeError, isNull);
          debugPrintSynchronously('HAPTIC_STAGE: delete storage');
          await tester.runAsync(() => directory.delete(recursive: true));
          debugPrintSynchronously('HAPTIC_STAGE: restore defaults');
          AudioplayersPlatformInterface.instance = previousAudio;
          GlobalAudioplayersPlatformInterface.instance = previousGlobal;
          tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
            SystemChannels.platform,
            null,
          );
          tester.view.resetPhysicalSize();
          tester.view.resetDevicePixelRatio();
          debugDefaultTargetPlatformOverride = previousPlatform;
        }
      },
    );
  }
}
