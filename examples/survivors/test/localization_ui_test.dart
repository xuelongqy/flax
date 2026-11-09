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

// Audio is a headless fixture; V8, Flutter controls and Canvas drawing remain real.
// ignore: avoid_relative_lib_imports
import '../../../packages/flax_audioplayers/example/lib/testing.dart';
import 'canvas_probe.dart';
import 'capture_frame.dart';
import 'ui_controls.dart';

void main() {
  for (final platform in [TargetPlatform.macOS, TargetPlatform.android]) {
    testWidgets(
      'bilingual settings, persisted FPS and upgrade controls on $platform',
      (tester) async {
        final mobile = platform == TargetPlatform.android;
        final size = mobile ? const Size(829, 338) : const Size(640, 360);
        final previousPlatform = debugDefaultTargetPlatformOverride;
        final previousAudio = AudioplayersPlatformInterface.instance;
        final previousGlobal = GlobalAudioplayersPlatformInterface.instance;
        debugDefaultTargetPlatformOverride = platform;
        tester.view.physicalSize = size;
        tester.view.devicePixelRatio = 1;
        final audio = FlaxFakeAudioPlatform();
        AudioplayersPlatformInterface.instance = audio;
        GlobalAudioplayersPlatformInterface.instance =
            FlaxFakeGlobalAudioPlatform();
        final directory = (await tester.runAsync(
          () => Directory.systemTemp.createTemp('survivors-localization-'),
        ))!;
        const pathProvider = MethodChannel('plugins.flutter.io/path_provider');
        // macOS BytesSource still needs its real file cache behind the audio fake.
        tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
          pathProvider,
          (call) async =>
              call.method == 'getTemporaryDirectory' ? directory.path : null,
        );
        final canvas = CanvasProbe();
        FlaxJsRuntime? runtime;
        Map state() => jsonDecode(
          (runtime!.evaluate(
            'JSON.stringify(globalThis.__survivorsAcceptance.snapshot())',
          ) as FlaxJsString).value,
        ) as Map;
        Map fps() => state()['fps'] as Map;
        void command(String name) => runtime!.evaluate(
          'globalThis.__survivorsAcceptance.command(${jsonEncode(name)})',
        );
        Future<void> until(bool Function() ready) async {
          for (var i = 0; i < 300; i++) {
            if (ready()) return;
            await tester.runAsync(
              () => Future<void>.delayed(const Duration(milliseconds: 10)),
            );
            await tester.pump(const Duration(milliseconds: 20));
          }
          fail('Localized UI transition timed out; state: ${state()}');
        }

        Future<void> io(Future<void> Function() action) async {
          var done = false;
          Object? error;
          await tester.runAsync(() async {
            unawaited(
              action().then(
                (_) => done = true,
                onError: (Object value) => error = value,
              ),
            );
          });
          await until(() => done || error != null);
          expect(error, isNull);
        }

        Future<void> tap(String text) async {
          final finder = text.contains(': ')
              ? survivorsSetting(text)
              : find.text(text);
          await until(() => finder.evaluate().isNotEmpty);
          await tapSurvivorsControl(tester, finder);
        }

        Future<void> mount() async {
          await tester.runAsync(
            () => app.startApplication(
              storageDirectory: directory.path,
              canvasPlugin: canvas,
              createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
            ),
          );
          await until(() => find.text('开始行动').evaluate().isNotEmpty);
        }

        try {
          await mount();
          expect((state()['profile'] as Map)['language'], 'zh');
          expect((state()['profile'] as Map)['showFps'], isFalse);
          expect(find.text('迎击无尽敌潮，生命归零才会结束。'), findsOneWidget);
          final reading = find.textContaining(RegExp(r'^FPS\s'));
          expect(reading, findsNothing);
          await captureSurvivorsFrame(tester, 'menu-zh-${size.width.toInt()}');
          await tap('设置');
          expect(survivorsSetting('语言: 中文'), findsOneWidget);
          await tap('语言: 中文');
          expect(survivorsSetting('Language: English'), findsOneWidget);
          expect(
            find.text('Actual combat drawing rate; inactive while paused.'),
            findsOneWidget,
          );
          await captureSurvivorsFrame(
            tester,
            'settings-en-${size.width.toInt()}',
          );
          await tap('Language: English');
          expect(survivorsSetting('语言: 中文'), findsOneWidget);
          await tap('显示帧率: 关闭');
          expect(survivorsSetting('显示帧率: 开启'), findsOneWidget);
          await captureSurvivorsFrame(
            tester,
            'settings-zh-fps-${size.width.toInt()}',
          );
          await tap('完成');
          await io(FlaxLocalStoragePlugin.flush);
          final saved = jsonDecode(
            (runtime!.evaluate(
              'localStorage.getItem("profile")',
            ) as FlaxJsString).value,
          ) as Map;
          expect(saved['version'], 1);
          expect(saved['language'], 'zh');
          expect(saved['showFps'], isTrue);
          await tester.pumpWidget(const SizedBox.shrink());
          await until(() => runtime!.isDisposed);
          await io(FlaxLocalStoragePlugin.shutdown);
          await mount();
          expect((state()['profile'] as Map)['language'], 'zh');
          expect((state()['profile'] as Map)['showFps'], isTrue);
          expect(fps()['value'], isNull);
          await tap('开始行动');
          await until(
            () =>
                fps()['windowStart'] != null &&
                find.byTooltip('暂停').evaluate().isNotEmpty,
          );
          command('resetDiagnostics');
          final canvasElement = tester.element(find.byType(FlaxCanvasView));
          final startFps = fps(), commits = canvas.commits.length;
          await until(
            () =>
                (fps()['publications'] as int) >
                (startFps['publications'] as int),
          );
          final active = fps();
          final milliseconds =
              (active['windowStart'] as num) - (startFps['windowStart'] as num);
          final draws =
              canvas.commits.length -
              commits +
              (startFps['draws'] as int) -
              (active['draws'] as int);
          expect(milliseconds, greaterThanOrEqualTo(1000));
          expect(active['publications'], (startFps['publications'] as int) + 1);
          expect(
            active['value'],
            (draws * 1000 / milliseconds).round(),
            reason: 'FPS counts actual Canvas submissions, not rAF callbacks',
          );
          expect(active['value'] as num, greaterThan(0));
          expect(reading, findsOneWidget);
          await until(
            () => tester.widget<Text>(reading).data == 'FPS ${active['value']}',
          );
          expect(tester.widget<Text>(reading).data, 'FPS ${active['value']}');
          await until(() => audio.resumed.isNotEmpty);
          expect(state()['audioStatus'], isEmpty);
          command('resetDiagnostics');
          final settledPublications = fps()['publications'] as int;
          await until(
            () => (fps()['publications'] as int) >= settledPublications + 2,
          );
          await until(
            () => tester.widget<Text>(reading).data == 'FPS ${fps()['value']}',
          );
          expect(
            (state()['uiCounts'] as Map)['builds'],
            0,
            reason: jsonEncode({
              'phase': state()['phase'],
              'screen': state()['screen'],
              'audioStatus': state()['audioStatus'],
              'storageStatus': state()['storageStatus'],
              'uiCounts': state()['uiCounts'],
              'tick': state()['tick'],
            }),
          );
          expect((state()['uiCounts'] as Map)['layouts'], 0);
          expect(
            tester.element(find.byType(FlaxCanvasView)),
            same(canvasElement),
          );
          await captureSurvivorsFrame(
            tester,
            'fps-playing-${size.width.toInt()}',
          );
          final canvasWidget = tester.widget(find.byType(FlaxCanvasView));
          final pause = find.byTooltip('暂停');
          final pauseWidget = tester.widget(pause);
          void expectStableBattlefield() {
            final counts = state()['uiCounts'] as Map;
            expect(counts['builds'], 0);
            expect(counts['layouts'], 0);
            expect(
              tester.widget(find.byType(FlaxCanvasView)),
              same(canvasWidget),
            );
            expect(tester.widget(pause), same(pauseWidget));
          }

          await tester.tap(pause);
          await tester.pump(const Duration(milliseconds: 20));
          final pausedTick = state()['tick'],
              publications = fps()['publications'];
          expect(state()['phase'], 'paused');
          expectStableBattlefield();
          expect(fps()['value'], isNull);
          expect(fps()['draws'], 0);
          expect(fps()['windowStart'], isNull);
          final inactiveText = tester.widget<Text>(reading).data;
          expect(inactiveText, isNot(matches(RegExp(r'^FPS \d'))));
          await tester.pump(const Duration(seconds: 2));
          expect(state()['tick'], pausedTick);
          expect(fps()['publications'], publications);
          expect(tester.widget<Text>(reading).data, inactiveText);
          await captureSurvivorsFrame(
            tester,
            'fps-paused-${size.width.toInt()}',
          );
          await tap('继续');
          expect(
            fps()['value'],
            isNull,
            reason: 'Resume starts a fresh active window',
          );
          await until(() => fps()['windowStart'] != null);
          command('upgradeFixture');
          await until(() => find.text('升级').evaluate().isNotEmpty);
          expect(state()['phase'], 'upgrade');
          expectStableBattlefield();
          expect(find.text('升级'), findsOneWidget);
          expect(fps()['value'], isNull);
          for (var index = 0; index < 3; index++) {
            final card = survivorsUpgrade(index);
            expect(card, findsOneWidget);
            final rect = tester.getRect(card);
            expect(rect.width, greaterThanOrEqualTo(48));
            expect(rect.height, greaterThanOrEqualTo(48));
            expect((Offset.zero & size).contains(rect.center), isTrue);
          }
          await captureSurvivorsFrame(
            tester,
            'upgrade-zh-${size.width.toInt()}',
          );
          if (mobile) {
            await tapSurvivorsControl(tester, survivorsUpgrade(2));
          } else {
            await tester.sendKeyEvent(
              LogicalKeyboardKey.digit2,
              physicalKey: PhysicalKeyboardKey.digit2,
            );
            await tester.pump(const Duration(milliseconds: 20));
          }
          await until(() => find.text('升级').evaluate().isEmpty);
          expect(state()['phase'], 'playing');
          expectStableBattlefield();
          expect(state()['inputHeld'], 0);
          await tester.tap(find.byTooltip('暂停'));
          await tester.pump(const Duration(milliseconds: 20));
          await tap('设置');
          await tap('显示帧率: 开启');
          await tap('完成');
          await tap('继续');
          final beforeOff = fps()['publications'],
              tick = state()['tick'] as int;
          await until(() => (state()['tick'] as int) > tick + 5);
          expect(reading, findsNothing);
          expect(fps()['enabled'], isFalse);
          expect(fps()['draws'], 0);
          expect(fps()['windowStart'], isNull);
          expect(fps()['value'], isNull);
          expect(fps()['publications'], beforeOff);
          expect(state()['audioStatus'], isEmpty);
          expect(tester.takeException(), isNull);
          debugPrintSynchronously(
            'FLAX_SURVIVORS_UI_SETTINGS:${jsonEncode({
              'platform': '$platform',
              'viewport': [size.width, size.height],
              'fakeAudio': true,
              'realV8FlutterCanvas': true,
              'acceptanceHooks': true,
              'fpsSample': active,
              'sampleCanvasDraws': draws,
              'sampleWindowMs': milliseconds,
              'profileReopened': saved,
            })}',
          );
        } finally {
          await tester.pumpWidget(const SizedBox.shrink());
          await until(() => runtime == null || runtime!.isDisposed);
          await io(FlaxLocalStoragePlugin.shutdown);
          await tester.runAsync(() => directory.delete(recursive: true));
          tester.binding.defaultBinaryMessenger.setMockMethodCallHandler(
            pathProvider,
            null,
          );
          AudioplayersPlatformInterface.instance = previousAudio;
          GlobalAudioplayersPlatformInterface.instance = previousGlobal;
          debugDefaultTargetPlatformOverride = previousPlatform;
          tester.view.resetPhysicalSize();
          tester.view.resetDevicePixelRatio();
        }
      },
    );
  }
}
