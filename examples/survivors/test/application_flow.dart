import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_survivors/main.dart' as app;
import 'package:flutter/services.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart' as material;

import 'canvas_probe.dart';
import 'capture_frame.dart';
import 'native_audio_probe.dart';
import 'ui_controls.dart';

class RetryAtlasBundle extends CachingAssetBundle {
  RetryAtlasBundle({this.failAtlas = true, this.failAudio = false});
  final bool failAtlas;
  final bool failAudio;
  final delegate = FlaxPrefixedAssetBundle();
  bool failed = false;
  @override
  Future<ByteData> load(String key) {
    if (failAudio && key.startsWith('assets/audio/')) {
      return Future.error(StateError('Acceptance: audio bundle unavailable'));
    }
    if (failAtlas &&
        key == 'assets/images/actors-directional-v3.png' &&
        !failed) {
      failed = true;
      return Future.error(StateError('Acceptance: atlas unavailable once'));
    }
    return delegate.load(key);
  }
}

Future<void> applicationFlow(
  WidgetTester tester, {
  NativeAudioProbe? nativeAudio,
  Map<String, Object?>? report,
}) async {
  final storage = (await tester.runAsync(
    () => Directory.systemTemp.createTemp('survivors-profile-'),
  ))!;
  FlaxJsRuntime? runtime;
  final bundle = RetryAtlasBundle();
  final canvas = CanvasProbe();
  await tester.runAsync(
    () => app.startApplication(
      storageDirectory: storage.path,
      assetBundle: bundle,
      canvasPlugin: canvas,
      createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
    ),
  );
  Future<void> until(bool Function() ready) async {
    for (var i = 0; i < 300; i++) {
      await tester.pump(const Duration(milliseconds: 20));
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 10)),
      );
      if (ready()) return;
    }
    final visible = tester.allWidgets
        .whereType<Text>()
        .map((w) => w.data)
        .join(' | ');
    final state = runtime == null || runtime!.isDisposed
        ? null
        : runtime!.evaluate(
            'JSON.stringify(globalThis.__survivorsAcceptance?.snapshot())',
          );
    fail(
      'Application transition timed out. Text: $visible; state: ${state is FlaxJsString ? state.value : state}',
    );
  }

  Future<void> completeIo(Future<void> Function() action) async {
    var done = false;
    Object? failure;
    await tester.runAsync(() async {
      unawaited(
        Future<void>.sync(action).then(
          (_) {
            done = true;
          },
          onError: (Object error) {
            failure = error;
          },
        ),
      );
    });
    await until(() => done || failure != null);
    expect(failure, isNull);
  }

  addTearDown(() async {
    await tester.pumpWidget(const SizedBox.shrink());
    for (
      var attempt = 0;
      attempt < 100 && runtime != null && !runtime!.isDisposed;
      attempt++
    ) {
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 10)),
      );
      await tester.pump(const Duration(milliseconds: 20));
    }
    await completeIo(() => FlaxLocalStoragePlugin.shutdown());
    if (storage.existsSync()) {
      await tester.runAsync(() => storage.delete(recursive: true));
    }
  });
  Future<void> tap(String text) async {
    final finder = text == 'Pause'
        ? find.byTooltip(text)
        : text.contains(': ')
        ? survivorsSetting(text)
        : find.text(text);
    await until(() => finder.evaluate().isNotEmpty);
    await tester.ensureVisible(finder.first);
    await tester.tap(finder.first);
    await tester.pump(const Duration(milliseconds: 30));
  }

  Object? evaluate(String code) {
    final value = runtime!.evaluate('JSON.stringify($code)');
    return value is FlaxJsString ? jsonDecode(value.value) : null;
  }

  Map<String, dynamic> snapshot() =>
      evaluate('globalThis.__survivorsAcceptance.snapshot()')
          as Map<String, dynamic>;
  void command(String name) {
    runtime!.evaluate(
      'globalThis.__survivorsAcceptance.command(${jsonEncode(name)})',
    );
  }

  Future<void> healthyAudio(String stage) async {
    if (nativeAudio != null) {
      final quiet = Stopwatch()..start();
      var signature = '';
      try {
        await until(() {
          final current =
              '${nativeAudio.playbackCalls}:${nativeAudio.sourceEventCount}:${nativeAudio.completedResumes}';
          if (current != signature ||
              nativeAudio.pendingPlayback != 0 ||
              nativeAudio.pendingSources != 0 ||
              !nativeAudio.preparationsSettled) {
            signature = current;
            quiet.reset();
          }
          return nativeAudio.preparationsSettled &&
              nativeAudio.pendingPlayback == 0 &&
              nativeAudio.pendingSources == 0 &&
              quiet.elapsedMilliseconds >= 250;
        });
      } finally {
        report?['healthyAudio:$stage'] = nativeAudio.preparationStatus;
      }
      expect(nativeAudio.sourceErrorCount, 0, reason: '$stage: native sources');
      expect(
        nativeAudio.playbackErrors,
        isEmpty,
        reason: '$stage: prepared/resume/control',
      );
      expect(
        nativeAudio.abortedPreparations,
        0,
        reason: '$stage: no disposal may stand in for preparation',
      );
      expect(nativeAudio.failedPreparations, 0);
      expect(nativeAudio.errors, isEmpty);
      expect(nativeAudio.musicResumes, greaterThan(0));
      expect(nativeAudio.effectResumes, greaterThan(0));
    }
    if (nativeAudio == null) {
      for (var i = 0; i < 25; i++) {
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 10)),
        );
        await tester.pump(const Duration(milliseconds: 20));
      }
    }
    expect(
      snapshot()['audioStatus'],
      isEmpty,
      reason: '$stage: app silent status',
    );
    expect(find.text('Audio unavailable; playing silently.'), findsNothing);
  }

  debugPrintSynchronously('SURVIVORS_STAGE: wait for asset failure');
  await until(() => find.text('重试').evaluate().isNotEmpty);
  expect(bundle.failed, isTrue);
  expect(find.text('资源加载失败，请重试。'), findsOneWidget);
  debugPrintSynchronously('SURVIVORS_STAGE: retry atlas');
  await tap('重试');
  await until(() => find.text('开始行动').evaluate().isNotEmpty);
  expect((snapshot()['profile'] as Map)['language'], 'zh');
  expect((snapshot()['profile'] as Map)['showFps'], isFalse);
  await captureSurvivorsFrame(tester, 'menu-zh');
  await tap('设置');
  await tap('显示帧率: 关闭');
  await captureSurvivorsFrame(tester, 'settings-zh-fps');
  await tap('语言: 中文');
  await captureSurvivorsFrame(tester, 'settings-en');
  await tap('Done');
  debugPrintSynchronously('SURVIVORS_STAGE: start');
  expect(find.textContaining('Asset loading failed'), findsNothing);
  await tap('Start');
  expect(snapshot()['phase'], 'playing');
  final initial = snapshot();
  final safeUI = survivorsSafeUiRect();
  report?.addAll({
    'seed': initial['seed'],
    'contentVersion': initial['contentVersion'],
    'logicalViewport': initial['viewport'],
    'safeUIRect': {
      'left': safeUI.left,
      'top': safeUI.top,
      'width': safeUI.width,
      'height': safeUI.height,
    },
    'camera': initial['camera'],
    'canvas': initial['canvas'],
    'quality': (initial['profile'] as Map)['quality'],
    'language': (initial['profile'] as Map)['language'],
    'showFps': (initial['profile'] as Map)['showFps'],
  });
  debugPrintSynchronously('SURVIVORS_STAGE: real movement');
  await until(
    () => tester
        .widget<KeyboardListener>(find.byType(KeyboardListener))
        .focusNode
        .hasFocus,
  );
  final initialX = snapshot()['x'] as num;
  await tester.sendKeyDownEvent(
    LogicalKeyboardKey.keyD,
    physicalKey: PhysicalKeyboardKey.keyD,
  );
  await until(() => (snapshot()['x'] as num) > initialX);
  expect(snapshot()['x'] as num, greaterThan(initialX));
  expect(canvas.commits, isNotEmpty);
  await tester.sendKeyUpEvent(
    LogicalKeyboardKey.keyD,
    physicalKey: PhysicalKeyboardKey.keyD,
  );
  debugPrintSynchronously(
    'SURVIVORS_STAGE: concurrent touch movement and pulse',
  );
  final canvasRect = tester.getRect(find.byType(FlaxCanvasView));
  final movePad = find.byWidgetPredicate(
    (widget) =>
        widget is Semantics && widget.properties.label == 'Movement joystick',
  );
  final moveControl = movePad.evaluate().isNotEmpty
      ? tester.getRect(movePad).center
      : canvasRect.bottomLeft + const Offset(48, -48);
  final movement = await tester.startGesture(moveControl, pointer: 11);
  await movement.moveBy(const Offset(40, 0));
  final touchX = snapshot()['x'] as num;
  await tester.tap(find.byTooltip('Pulse'));
  for (var i = 0; i < 10; i++) {
    await tester.pump(const Duration(milliseconds: 20));
  }
  expect(snapshot()['x'] as num, greaterThan(touchX));
  final pulseRing = find.byType(material.CircularProgressIndicator);
  expect(pulseRing, findsOneWidget);
  double ringValue() =>
      tester.widget<material.CircularProgressIndicator>(pulseRing).value!;
  await until(() => ringValue() < 1);
  // Reach several 0.1-second increments so a reset is distinguishable.
  await until(() => ringValue() >= .05 && ringValue() < 1);
  final activePulse = ringValue();
  await tester.tap(find.byTooltip('Pulse'));
  final repeatTick = snapshot()['tick'] as int;
  await until(() => (snapshot()['tick'] as int) >= repeatTick + 12);
  await tester.pump();
  expect(
    ringValue(),
    greaterThanOrEqualTo(activePulse),
    reason: 'A cooldown tap must not restart Pulse',
  );
  await movement.cancel();
  expect(snapshot()['inputHeld'], 0);
  expect(snapshot()['phase'], 'playing');
  for (var i = 0; i < 650 && (snapshot()['tick'] as int) < 600; i++) {
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 20)),
    );
    await tester.pump(const Duration(milliseconds: 20));
  }
  final progress = snapshot();
  expect(
    progress['tick'] as int,
    greaterThanOrEqualTo(600),
    reason: jsonEncode({
      'phase': progress['phase'],
      'screen': progress['screen'],
      'inputHeld': progress['inputHeld'],
      'focus': FocusManager.instance.primaryFocus?.debugLabel,
      'lifecycle': tester.binding.lifecycleState?.name,
      'logicalViewport': progress['viewport'],
      'nativePaddingPhysical': {
        'left': tester.view.padding.left,
        'top': tester.view.padding.top,
        'right': tester.view.padding.right,
        'bottom': tester.view.padding.bottom,
      },
    }),
  );
  if (nativeAudio != null) {
    await until(
      () =>
          nativeAudio.successfulMusicSources > 0 &&
          nativeAudio.successfulEffectSources > 0 &&
          nativeAudio.musicResumes > 0 &&
          nativeAudio.effectResumes > 0,
    );
    expect(nativeAudio.sourceErrorCount, 0);
  }
  debugPrintSynchronously(
    'SURVIVORS_STAGE: capture pixels after ten combat seconds',
  );
  await captureSurvivorsFrame(tester, 'gameplay');
  await tester.sendKeyDownEvent(
    LogicalKeyboardKey.keyD,
    physicalKey: PhysicalKeyboardKey.keyD,
  );
  await tap('Pause');
  expect(snapshot()['phase'], 'paused');
  await captureSurvivorsFrame(tester, 'paused-en-fps');
  expect(snapshot()['inputHeld'], 0);
  await tester.sendKeyUpEvent(
    LogicalKeyboardKey.keyD,
    physicalKey: PhysicalKeyboardKey.keyD,
  );
  final pausedTick = snapshot()['tick'];
  await tester.pump(const Duration(milliseconds: 100));
  expect(snapshot()['tick'], pausedTick);
  await tap('Resume');
  debugPrintSynchronously('SURVIVORS_STAGE: upgrade');
  command('upgradeFixture');
  await until(() => find.text('LEVEL UP').evaluate().isNotEmpty);
  expect(snapshot()['inputHeld'], 0);
  await healthyAudio('upgrade');
  await captureSurvivorsFrame(tester, 'upgrade-en');
  debugPrintSynchronously('SURVIVORS_STAGE: select upgrade');
  await tapSurvivorsControl(tester, survivorsUpgrade(0));
  await until(() => snapshot()['phase'] == 'playing');
  debugPrintSynchronously('SURVIVORS_STAGE: lifecycle');
  final interruptedTouch = await tester.startGesture(moveControl, pointer: 12);
  await interruptedTouch.moveBy(const Offset(25, 0));
  await tester.sendKeyDownEvent(
    LogicalKeyboardKey.keyW,
    physicalKey: PhysicalKeyboardKey.keyW,
  );
  tester.binding.handleAppLifecycleStateChanged(AppLifecycleState.inactive);
  await tester.pump(const Duration(milliseconds: 30));
  expect(snapshot()['phase'], 'paused');
  expect(snapshot()['inputHeld'], 0);
  await interruptedTouch.cancel();
  tester.binding.handleAppLifecycleStateChanged(AppLifecycleState.resumed);
  await tester.sendKeyUpEvent(
    LogicalKeyboardKey.keyW,
    physicalKey: PhysicalKeyboardKey.keyW,
  );
  await tester.pump(const Duration(milliseconds: 30));
  expect(snapshot()['phase'], 'paused');
  await tap('Resume');
  debugPrintSynchronously('SURVIVORS_STAGE: loss fixture');
  command('loseFixture');
  await until(() => find.text('SIGNAL LOST').evaluate().isNotEmpty);
  await healthyAudio('defeat');
  await tap('Restart');
  expect(snapshot()['phase'], 'playing');
  debugPrintSynchronously('SURVIVORS_STAGE: guardian reward fixture');
  command('guardianClearFixture');
  await until(() => snapshot()['guardiansDefeated'] == 1);
  expect(find.text('SIGNAL LOST'), findsNothing);
  expect(snapshot()['phase'], anyOf('playing', 'upgrade'));
  await healthyAudio('guardian reward');
  while (snapshot()['phase'] == 'upgrade') {
    await tapSurvivorsControl(tester, survivorsUpgrade(0));
    await tester.pump(const Duration(milliseconds: 30));
  }
  expect(snapshot()['phase'], 'playing');
  command('loseFixture');
  await until(() => find.text('SIGNAL LOST').evaluate().isNotEmpty);
  await healthyAudio('defeat after guardian reward');
  debugPrintSynchronously('SURVIVORS_STAGE: settings');
  await tap('Main menu');
  await tap('Settings');
  await tap('Reduced motion: off');
  await tap('Done');
  debugPrintSynchronously('SURVIVORS_STAGE: flush');
  var flushed = false;
  Object? flushError;
  unawaited(
    FlaxLocalStoragePlugin.flush().then(
      (_) {
        flushed = true;
      },
      onError: (Object error) {
        flushError = error;
      },
    ),
  );
  await until(() => flushed || flushError != null);
  expect(flushError, isNull);
  debugPrintSynchronously('SURVIVORS_STAGE: flush completed');
  final profile =
      evaluate('JSON.parse(localStorage.getItem("profile"))') as Map;
  expect(profile['reducedMotion'], isTrue);
  expect(profile['language'], 'en');
  expect(profile['showFps'], isTrue);
  expect(profile['wins'], 0);
  debugPrintSynchronously('SURVIVORS_STAGE: owning View removal');
  await tester.pumpWidget(const SizedBox.shrink());
  await until(() => runtime!.isDisposed);
  debugPrintSynchronously('SURVIVORS_STAGE: runtime disposed');
  if (nativeAudio != null) {
    await until(
      () =>
          nativeAudio.live.isEmpty &&
          nativeAudio.pendingSources == 0 &&
          nativeAudio.pendingPlayback == 0,
    );
    expect(nativeAudio.sourceErrorCount, 0);
    expect(nativeAudio.playbackErrors, isEmpty);
    expect(nativeAudio.errors, isEmpty);
  }
  expect(canvas.operations['closeImage'], greaterThanOrEqualTo(3));
  await completeIo(() => FlaxLocalStoragePlugin.shutdown());
  debugPrintSynchronously('SURVIVORS_STAGE: store closed');

  // Reopen the store and application to verify acknowledged writes survive restart.
  await tester.runAsync(
    () => app.startApplication(
      storageDirectory: storage.path,
      createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
    ),
  );
  await until(() => find.text('Start').evaluate().isNotEmpty);
  expect(snapshot()['screen'], 'title');
  expect(evaluate('JSON.parse(localStorage.getItem("profile"))'), profile);
  await tap('Settings');
  expect(survivorsSetting('Reduced motion: on'), findsOneWidget);
  expect(survivorsSetting('Show FPS: on'), findsOneWidget);
  await tap('Language: English');
  await tap('完成');
  await tap('开始行动');
  command('upgradeFixture');
  await until(() => snapshot()['phase'] == 'upgrade');
  await captureSurvivorsFrame(tester, 'upgrade-zh');
  await tapSurvivorsControl(tester, survivorsUpgrade(0));
  await until(() => snapshot()['phase'] == 'playing');
  await tester.tap(find.byTooltip('暂停'));
  await tester.pump(const Duration(milliseconds: 30));
  await captureSurvivorsFrame(tester, 'paused-zh-fps');
  await healthyAudio('reopened');
  await tester.pumpWidget(const SizedBox.shrink());
  await tester.pump(const Duration(milliseconds: 50));
  await until(() => runtime!.isDisposed);
  if (nativeAudio != null) {
    await until(() => nativeAudio.live.isEmpty);
  }
  await completeIo(() => FlaxLocalStoragePlugin.shutdown());
  debugPrintSynchronously('SURVIVORS_STAGE: store closed');
  if (nativeAudio != null) {
    await until(
      () => nativeAudio.pendingSources == 0 && nativeAudio.pendingPlayback == 0,
    );
    expect(nativeAudio.sourceErrorCount, 0);
    expect(nativeAudio.playbackErrors, isEmpty);
    report?['healthyNativeAudioCompleted'] = true;
  }
  debugPrintSynchronously('SURVIVORS_STAGE: failure isolation');
  final blockedPath = File('${storage.path}/not-a-directory');
  await tester.runAsync(
    () => blockedPath.writeAsString('storage open must fail'),
  );
  await tester.runAsync(
    () => app.startApplication(
      storageDirectory: blockedPath.path,
      assetBundle: RetryAtlasBundle(failAtlas: false, failAudio: true),
      createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
    ),
  );
  await selectSurvivorsEnglish(tester);
  await until(() => find.text('Start').evaluate().isNotEmpty);
  expect(snapshot()['storageStatus'], contains('unavailable'));
  expect(evaluate('globalThis.__survivorsHost.storageAvailable'), isFalse);
  debugPrintSynchronously('SURVIVORS_STAGE: start');
  await tap('Start');
  expect(snapshot()['phase'], 'playing');
  debugPrintSynchronously('SURVIVORS_STAGE: owning View removal');
  await tester.pumpWidget(const SizedBox.shrink());
  await until(() => runtime!.isDisposed);
  debugPrintSynchronously('SURVIVORS_STAGE: runtime disposed');
  if (nativeAudio != null) {
    await until(() => nativeAudio.live.isEmpty);
  }
  await completeIo(() => FlaxLocalStoragePlugin.shutdown());
  debugPrintSynchronously('SURVIVORS_STAGE: store closed');
  if (nativeAudio != null) {
    debugPrintSynchronously('SURVIVORS_STAGE: native source/unmount overlap');
    final sourceStarts = nativeAudio.sourceStarts;
    await tester.runAsync(
      () => app.startApplication(
        storageDirectory: storage.path,
        createRuntime: () => runtime = FlaxV8Engine.createRuntime(),
      ),
    );
    await selectSurvivorsEnglish(tester);
    await tap('Start');
    await until(() => nativeAudio.sourceStarts > sourceStarts);
    nativeAudio.overlap['pendingSourcesAtOwningViewRemoval'] =
        nativeAudio.pendingSources;
    nativeAudio.overlap['sourceOverlapObserved'] =
        nativeAudio.pendingSources > 0;
    await tester.pumpWidget(const SizedBox.shrink());
    await until(() => runtime!.isDisposed);
    await until(
      () => nativeAudio.live.isEmpty && nativeAudio.pendingSources == 0,
    );
    expect(nativeAudio.errors, isEmpty);
    nativeAudio.overlap['runtimeDisposed'] = runtime!.isDisposed;
    nativeAudio.overlap['nativeLiveAfterSettling'] = nativeAudio.live.length;
    await completeIo(() => FlaxLocalStoragePlugin.shutdown());
  }
  await tester.runAsync(() => storage.delete(recursive: true));
}
