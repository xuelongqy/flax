import 'package:flax_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('starts the flax package example', (tester) async {
    tester.platformDispatcher.platformBrightnessTestValue = Brightness.light;
    addTearDown(tester.platformDispatcher.clearPlatformBrightnessTestValue);
    await tester.runAsync(app.startApplication);
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 20));
    expect(find.text('Small pieces. Real Flutter.'), findsOneWidget);
    await tester.ensureVisible(find.text('Increment JS'));
    await tester.tap(find.text('Increment JS'));
    await tester.pump();
    expect(find.text('Count: 1'), findsOneWidget);
    expect(find.text('Doubled: 2'), findsOneWidget);
    Focus.of(tester.element(find.text('Increment JS'))).requestFocus();
    await tester.pump();
    await tester.sendKeyEvent(LogicalKeyboardKey.enter);
    await tester.pump();
    expect(find.text('Count: 2'), findsOneWidget);
    Future<void> settingsTap(String key) async {
      await tester.tap(find.byKey(ValueKey(key)).last);
      await tester.pumpAndSettle();
    }

    Brightness brightness() =>
        MediaQuery.platformBrightnessOf(tester.element(find.text('Count: 2')));
    expect(brightness(), Brightness.light);
    await settingsTap('example-settings-toggle');
    await settingsTap('example-theme-dark');
    expect(brightness(), Brightness.dark);
    expect(find.text('Count: 2'), findsOneWidget);
    tester.platformDispatcher.platformBrightnessTestValue = Brightness.light;
    await tester.pumpAndSettle();
    expect(brightness(), Brightness.dark);
    await settingsTap('example-theme-light');
    expect(brightness(), Brightness.light);
    await settingsTap('example-theme-system');
    tester.platformDispatcher.platformBrightnessTestValue = Brightness.dark;
    await tester.pumpAndSettle();
    expect(brightness(), Brightness.dark);
    await settingsTap('example-settings-close');
    expect(find.text('Count: 2'), findsOneWidget);
    await tester.pumpWidget(const SizedBox());
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 20));
  });
}
