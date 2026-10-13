import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/dart_types_bindings.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets(
    'dartType preserves native generic types and JS proxy inheritance',
    (tester) async {
      final h = OwnedHarness(
        fixture: 'dart_types',
        extra: [dart_typesBindings],
      );
      try {
        await tester.pumpWidget(h.app('dart-types'));
        await tester.pumpAndSettle();
        expect(find.text('mounted!'), findsOneWidget);
        h.execute(
          "if (dartTypeHooks.exercise() !== 'dart types verified') throw Error('type result');",
        );
        expect(h.errors, isEmpty);
      } finally {
        if (!h.runtime.isDisposed) await h.finish(tester);
      }
    },
  );
}
