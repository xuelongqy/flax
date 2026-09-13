import 'package:flax_material_ui_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('starts the flax_material_ui package example', (tester) async {
    await tester.runAsync(app.startApplication);
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 20));
    expect(find.text('Material UI ready'), findsOneWidget);
    await tester.pumpWidget(const SizedBox());
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 20));
  });
}
