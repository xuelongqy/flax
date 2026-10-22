import 'package:configured_default_app/main.dart' as app;
import 'package:flax/flax.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets(
    'default generated modules call Dart without a custom delivery config',
    (tester) async {
      await tester.runAsync(app.main);
      for (
        var attempt = 0;
        attempt < 100 && find.text('Quantity: 1').evaluate().isEmpty;
        attempt++
      ) {
        await tester.pump(const Duration(milliseconds: 20));
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 10)),
        );
      }
      expect(find.text('Quantity: 1'), findsOneWidget);
      final view = tester.element(find.byType(FlaxView).last);
      await tester.tap(find.text('Add item'));
      await tester.pump();
      expect(find.text('Quantity: 2'), findsOneWidget);
      await tester.tap(find.text('Add item'));
      await tester.pump();
      expect(find.text('Quantity: 3'), findsOneWidget);
      expect(tester.element(find.byType(FlaxView).last), same(view));
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpAndSettle();
      expect(tester.takeException(), isNull);
      Flax.moduleAssets = null;
    },
  );
}
