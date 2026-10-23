import 'package:flax_material_ui_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart' show TextField, Theme;

void main() {
  testWidgets(
    'Material collection edits state, opens overlays and navigates',
    exerciseMaterialExample,
  );
}

Future<void> exerciseMaterialExample(WidgetTester tester) async {
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
  expect(find.text('Material, in full color.'), findsOneWidget);
  await _tap(tester, find.text('Filled button'));
  expect(find.text('Button presses: 1'), findsOneWidget);

  await _tap(tester, find.byKey(const ValueKey('material-inputs')));
  await tester.enterText(
    find.byKey(const ValueKey('material-name')).last,
    'Flax designer',
  );
  await tester.pump();
  expect(find.text('Hello, Flax designer.'), findsOneWidget);
  final nameField = find.byWidgetPredicate(
    (widget) =>
        widget is TextField && widget.key == const ValueKey('material-name'),
  );
  final editor = tester.widget<TextField>(nameField).controller;
  await _tap(tester, find.byKey(const ValueKey('example-settings-toggle')));
  await _tap(tester, find.byKey(const ValueKey('example-theme-dark')));
  expect(Theme.of(tester.element(nameField)).brightness, Brightness.dark);
  expect(tester.widget<TextField>(nameField).controller, same(editor));
  expect(find.text('Hello, Flax designer.'), findsOneWidget);
  await _tap(tester, find.byKey(const ValueKey('example-settings-close')));

  await _tap(tester, find.byKey(const ValueKey('material-selection')));
  await _tap(tester, find.byKey(const ValueKey('material-switch')));
  expect(find.text('Notifications off'), findsOneWidget);
  await _tap(tester, find.text('Include archived'));

  await _tap(tester, find.byKey(const ValueKey('material-feedback')));
  await _tap(tester, find.text('Open dialog'));
  expect(find.text('Ready to publish?'), findsOneWidget);
  await _tap(tester, find.text('Publish'));
  expect(find.text('Published. Looking good!'), findsOneWidget);
  await _tap(tester, find.text('Show snackbar'));
  expect(find.text('Saved. Your changes are up to date.'), findsOneWidget);
  await tester.pump(const Duration(seconds: 4));
  await tester.pumpAndSettle();

  await _tap(tester, find.byKey(const ValueKey('material-surfaces')));
  await _tap(tester, find.text('An idea worth exploring'));
  expect(find.text('A closer look'), findsOneWidget);
  await _tap(tester, find.text('Back to collection'));
  expect(
    find.text('A familiar interface, authored in JavaScript.'),
    findsOneWidget,
  );

  tester.view.physicalSize = const Size(390, 844);
  await tester.pumpAndSettle();
  for (final entry in const [
    ('buttons', 'A button for every moment'),
    ('inputs', 'Make it personal'),
    ('selection', 'A little more control'),
    ('feedback', 'Keep people in the loop'),
    ('surfaces', 'Give content a home'),
  ]) {
    final name = entry.$1;
    await _tap(tester, find.byKey(ValueKey('material-$name')));
    expect(find.text(entry.$2), findsOneWidget);
    expect(
      tester.takeException(),
      isNull,
      reason: 'Material $name at phone width',
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
