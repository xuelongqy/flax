import 'package:flax_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('starts the flax package example', (tester) async {
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
    await tester.pumpWidget(const SizedBox());
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 20));
  });
}
