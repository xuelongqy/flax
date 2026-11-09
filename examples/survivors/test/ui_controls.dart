import 'dart:async';

import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

Finder survivorsSetting(String label) => find.byWidgetPredicate(
  (widget) => widget is Semantics && widget.properties.label == label,
);

Finder survivorsUpgrade(int index) => find.byWidgetPredicate(
  (widget) =>
      widget is Semantics &&
      (widget.properties.label?.startsWith('${index + 1}: ') ?? false),
);

Rect survivorsSafeUiRect() {
  // Native post-frame callbacks cannot enter WidgetTester's guarded controller APIs.
  final area = find.byType(SafeArea).evaluate().first.widget as SafeArea;
  final box =
      find.byWidget(area.child).evaluate().first.renderObject as RenderBox;
  return box.localToGlobal(Offset.zero) & box.size;
}

Future<void> _untilSurvivorsUi(
  WidgetTester tester,
  bool Function() ready,
  String description,
) async {
  for (var i = 0; i < 300; i++) {
    if (ready()) return;
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
    await tester.pump(const Duration(milliseconds: 20));
  }
  if (ready()) return;
  fail('Survivors UI did not render $description');
}

Future<void> tapSurvivorsControl(WidgetTester tester, Finder control) async {
  await _untilSurvivorsUi(
    tester,
    () => control.evaluate().isNotEmpty,
    control.toString(),
  );
  await tester.ensureVisible(control.first);
  await _untilSurvivorsUi(
    tester,
    () => control.first.hitTestable().evaluate().isNotEmpty,
    'reachable ${control.toString()}',
  );
  await tester.tap(control.first);
  await tester.pump(const Duration(milliseconds: 20));
}

// Keep the existing English regressions explicit while testing the real language action.
Future<void> selectSurvivorsEnglish(
  WidgetTester tester, {
  bool enableFps = false,
}) async {
  await _untilSurvivorsUi(
    tester,
    () =>
        find.text('开始行动').evaluate().isNotEmpty ||
        find.text('Start').evaluate().isNotEmpty,
    'Chinese or English title',
  );
  final chinese = find.text('开始行动').evaluate().isNotEmpty;
  if (!chinese && !enableFps) return;
  await tapSurvivorsControl(tester, find.text(chinese ? '设置' : 'Settings'));
  if (chinese) {
    await tapSurvivorsControl(tester, survivorsSetting('语言: 中文'));
  }
  await _untilSurvivorsUi(
    tester,
    () => survivorsSetting('Language: English').evaluate().isNotEmpty,
    'translated English language row',
  );
  if (enableFps) {
    await _untilSurvivorsUi(
      tester,
      () =>
          survivorsSetting('Show FPS: off').evaluate().isNotEmpty ||
          survivorsSetting('Show FPS: on').evaluate().isNotEmpty,
      'English FPS setting',
    );
    if (survivorsSetting('Show FPS: off').evaluate().isNotEmpty) {
      await tapSurvivorsControl(tester, survivorsSetting('Show FPS: off'));
    }
    await _untilSurvivorsUi(
      tester,
      () => survivorsSetting('Show FPS: on').evaluate().isNotEmpty,
      'enabled FPS setting',
    );
  }
  await tapSurvivorsControl(tester, find.text('Done'));
  await _untilSurvivorsUi(
    tester,
    () => find.text('Start').evaluate().isNotEmpty,
    'English title after Done',
  );
}

// Storage writes originate in FakeAsync; closing must keep pumping their callbacks.
Future<void> completeSurvivorsIo(
  WidgetTester tester,
  Future<void> Function() action,
) async {
  var done = false;
  Object? failure;
  unawaited(
    Future<void>.sync(action)
        .then((_) => done = true, onError: (Object error) => failure = error),
  );
  for (var i = 0; i < 300 && !done && failure == null; i++) {
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
    await tester.pump(const Duration(milliseconds: 20));
  }
  expect(failure, isNull);
  expect(
    done,
    isTrue,
    reason: 'Survivors I/O did not settle with Flutter callbacks',
  );
}
