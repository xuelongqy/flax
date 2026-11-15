import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import 'ui_controls.dart';

void main() {
  testWidgets('safe UI geometry can be sampled from a native post-frame zone', (
    tester,
  ) async {
    const key = ValueKey('safe-child');
    await tester.pumpWidget(
      const Directionality(
        textDirection: TextDirection.ltr,
        child: MediaQuery(
          data: MediaQueryData(padding: EdgeInsets.fromLTRB(31, 17, 23, 29)),
          child: Align(
            alignment: Alignment.topLeft,
            child: Padding(
              padding: EdgeInsets.only(left: 19, top: 11),
              child: SizedBox(
                width: 700,
                height: 340,
                child: SafeArea(child: SizedBox.expand(key: key)),
              ),
            ),
          ),
        ),
      ),
    );
    final expected = tester.getRect(find.byKey(key));
    final nativeZone = Zone.current;
    Rect? sampled;
    Object? failure;
    tester.binding.addPostFrameCallback((_) {
      // Engine-delivered frames run outside WidgetTester's guarded pump zone.
      nativeZone.run(() {
        try {
          sampled = survivorsSafeUiRect();
        } catch (error) {
          failure = error;
        }
      });
    });
    tester.binding.scheduleFrame();
    await tester.pump();
    expect(failure, isNull);
    expect(sampled, expected);
    expect(sampled!.topLeft, isNot(Offset.zero));
  });

  testWidgets('language and FPS actions wait for deferred Flutter controls', (
    tester,
  ) async {
    final key = GlobalKey<_DelayedSettingsState>();
    await tester.pumpWidget(
      Directionality(
        textDirection: TextDirection.ltr,
        child: Center(
          child: SizedBox(
            width: 320,
            height: 96,
            child: SingleChildScrollView(child: _DelayedSettings(key: key)),
          ),
        ),
      ),
    );
    try {
      await selectSurvivorsEnglish(tester, enableFps: true);
      expect(find.text('Start'), findsOneWidget);
      expect(key.currentState!.english, isTrue);
      expect(key.currentState!.showFps, isTrue);
      expect(key.currentState!.closedWithFps, isTrue);
    } finally {
      await tester.pumpWidget(const SizedBox.shrink());
    }
  });
}

class _DelayedSettings extends StatefulWidget {
  const _DelayedSettings({super.key});

  @override
  State<_DelayedSettings> createState() => _DelayedSettingsState();
}

class _DelayedSettingsState extends State<_DelayedSettings> {
  final timers = <Timer>[];
  bool settings = false;
  bool english = false;
  bool fpsReady = true;
  bool showFps = false;
  bool closedWithFps = false;

  void defer(VoidCallback update) {
    timers.add(
      Timer(const Duration(milliseconds: 80), () {
        if (mounted) setState(update);
      }),
    );
  }

  Widget control(String text, VoidCallback action, {String? semantics}) {
    final child = GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTap: action,
      child: SizedBox(width: 300, height: 48, child: Center(child: Text(text))),
    );
    return semantics == null
        ? child
        : Semantics(label: semantics, child: child);
  }

  @override
  Widget build(BuildContext context) => Column(
    mainAxisSize: MainAxisSize.min,
    children: settings
        ? [
            control(
              english ? 'Language' : '语言',
              () => defer(() {
                english = true;
                fpsReady = false;
                defer(() => fpsReady = true);
              }),
              semantics: english ? 'Language: English' : '语言: 中文',
            ),
            if (fpsReady)
              control(
                english ? 'Show FPS' : '显示帧率',
                () => defer(() => showFps = true),
                semantics: english
                    ? 'Show FPS: ${showFps ? 'on' : 'off'}'
                    : '显示帧率: ${showFps ? '开启' : '关闭'}',
              ),
            control(english ? 'Done' : '完成', () {
              closedWithFps = showFps;
              defer(() => settings = false);
            }),
          ]
        : [
            Text(english ? 'Start' : '开始行动'),
            control(
              english ? 'Settings' : '设置',
              () => defer(() => settings = true),
            ),
          ],
  );

  @override
  void dispose() {
    for (final timer in timers) {
      timer.cancel();
    }
    super.dispose();
  }
}
