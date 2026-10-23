import 'package:flax_cupertino_ui_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:cupertino_ui/cupertino_ui.dart'
    show CupertinoTextField, CupertinoTheme;

void main() {
  testWidgets(
    'Cupertino collection edits state, shows overlays and navigates',
    exerciseCupertinoExample,
  );
}

Future<void> exerciseCupertinoExample(WidgetTester tester) async {
  final previousHitTestPolicy = WidgetController.hitTestWarningShouldBeFatal;
  WidgetController.hitTestWarningShouldBeFatal = true;
  addTearDown(
    () => WidgetController.hitTestWarningShouldBeFatal = previousHitTestPolicy,
  );
  tester.view.physicalSize = const Size(1100, 900);
  tester.view.devicePixelRatio = 1;
  addTearDown(tester.view.resetPhysicalSize);
  addTearDown(tester.view.resetDevicePixelRatio);
  await tester.runAsync(app.startApplication);
  await tester.pumpAndSettle();
  expect(find.text('Quiet details. Native feel.'), findsOneWidget);
  await _tap(tester, find.text('Filled button'));
  expect(find.text('Button presses: 1'), findsOneWidget);
  await _tap(tester, find.byKey(const ValueKey('cupertino-switch')));
  expect(find.text('Notifications off'), findsOneWidget);
  await _tap(tester, find.text('Week'));
  expect(find.text('Showing: Week'), findsOneWidget);

  await _tap(tester, find.text('Forms'));
  await tester.enterText(
    find.byKey(const ValueKey('cupertino-name')).last,
    'Flax designer',
  );
  await tester.pump();
  expect(find.text('Hello, Flax designer.'), findsOneWidget);
  final nameField = find.byWidgetPredicate(
    (widget) =>
        widget is CupertinoTextField &&
        widget.key == const ValueKey('cupertino-name'),
  );
  final editor = tester.widget<CupertinoTextField>(nameField).controller;
  await _tap(tester, find.byKey(const ValueKey('example-settings-toggle')));
  await _tap(tester, find.byKey(const ValueKey('example-theme-dark')));
  expect(
    CupertinoTheme.brightnessOf(tester.element(nameField)),
    Brightness.dark,
  );
  expect(tester.widget<CupertinoTextField>(nameField).controller, same(editor));
  expect(find.text('Hello, Flax designer.'), findsOneWidget);
  await _tap(tester, find.byKey(const ValueKey('example-settings-close')));
  await tester.enterText(
    find.byKey(const ValueKey('cupertino-search')).last,
    'Buttons',
  );
  await tester.pump();
  expect(find.text('Searching for “Buttons”'), findsOneWidget);

  await _tap(tester, find.text('Lists'));
  await _tap(tester, find.text('Profile'));
  await _tap(tester, find.text('Back to collection'));
  expect(find.text('YOUR WORKSPACE'), findsOneWidget);

  await _tap(tester, find.text('Overlays'));
  await _tap(tester, find.text('Open alert'));
  expect(find.text('Save this collection?'), findsOneWidget);
  await _tap(tester, find.text('Save'));
  expect(find.text('Collection saved.'), findsOneWidget);
  await _tap(tester, find.text('Open action sheet'));
  await _tap(tester, find.text('Copy link'));
  expect(find.text('Link copied.'), findsOneWidget);

  tester.view.physicalSize = const Size(390, 844);
  await tester.pumpAndSettle();
  for (final entry in const [
    ('Controls', 'Familiar at first touch'),
    ('Forms', 'Space for your words'),
    ('Lists', 'A place for everything'),
    ('Overlays', 'Small moments of focus'),
  ]) {
    final name = entry.$1;
    await _tap(tester, find.text(name));
    expect(find.text(entry.$2), findsOneWidget);
    expect(
      tester.takeException(),
      isNull,
      reason: 'Cupertino $name at phone width',
    );
  }
  await tester.pumpWidget(const SizedBox.shrink());
  await tester.pumpAndSettle();
}

Future<void> _tap(WidgetTester tester, Finder finder) async {
  // Generated hosts and native Widgets can both carry the configured key.
  final target = finder.last;
  await tester.ensureVisible(target);
  await tester.tap(target);
  await tester.pumpAndSettle();
}
