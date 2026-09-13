import 'dart:io';

import 'package:flax_embedded/lazy_list.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

void main() {
  testWidgets('the lazy list demo scrolls, updates, reorders and reopens', (
    t,
  ) async {
    final source = File('assets/pages.js').readAsStringSync();
    Future<void> open() async {
      await t.pumpWidget(MaterialApp(home: LazyListDemo(source: source)));
      await t.pumpAndSettle();
    }

    Future<void> tap(String label) async {
      await t.tap(find.text(label));
      await t.pumpAndSettle();
    }

    await open();
    expect(find.text('Items: 10000'), findsOneWidget);
    expect(find.text('Item 9999: 0'), findsNothing);
    await tap('Item 0: 0');
    expect(find.text('Item 0: 1'), findsOneWidget);
    final controller = t.widget<ListView>(find.byType(ListView)).controller!;
    await tap('Swap first two');
    expect(find.text('Item 0: 1'), findsOneWidget);
    await tap('Add first');
    expect(find.text('Items: 10001'), findsOneWidget);
    await tap('Remove first');
    expect(find.text('Items: 10000'), findsOneWidget);
    await t.drag(find.byType(ListView), const Offset(0, -500));
    await t.pumpAndSettle();
    expect(controller.offset, greaterThan(0));
    expect(find.text('Item 0: 1'), findsNothing);
    await tap('Back to top');
    expect(controller.offset, 0);
    expect(find.text('Item 0: 1'), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    await t.pumpAndSettle();
    await open();
    expect(find.text('Item 0: 0'), findsOneWidget);
    expect(
      t.widget<ListView>(find.byType(ListView)).controller,
      isNot(same(controller)),
    );
    await t.pumpWidget(const SizedBox());
    await t.pumpAndSettle();
  });
}
