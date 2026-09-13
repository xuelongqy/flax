import 'dart:io';

import 'package:flax_embedded/components.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

void main() {
  testWidgets(
    'component demo preserves editing and independent state across themes and navigation',
    (t) async {
      final source = File('assets/pages.js').readAsStringSync();
      await t.pumpWidget(MaterialApp(home: ComponentsDemo(source: source)));
      await t.pumpAndSettle();
      Future<void> press(String label) async {
        t
            .widget<TextButton>(find.widgetWithText(TextButton, label))
            .onPressed!();
        await t.pumpAndSettle();
      }

      final field = find.byType(TextField);
      final controller = t.widget<TextField>(field).controller!;
      final focus = t.widget<TextField>(field).focusNode!;
      await t.enterText(field, '编辑🙂');
      await t.pumpAndSettle();
      expect(find.text('Editing length: 4'), findsOneWidget);
      expect(find.text('Static editing child'), findsOneWidget);
      expect(find.text('Editor focused: true'), findsOneWidget);
      controller.selection = const TextSelection(
        baseOffset: 0,
        extentOffset: 2,
      );
      await press('Count first');
      expect(find.text('first: 1'), findsOneWidget);
      expect(find.text('second: 0'), findsOneWidget);
      await press('Signal first');
      await press('Update initial prop');
      await press('Host theme');
      expect(t.widget<TextField>(field).controller, same(controller));
      expect(t.widget<TextField>(field).focusNode, same(focus));
      expect(controller.text, '编辑🙂');
      expect(
        controller.selection,
        const TextSelection(baseOffset: 0, extentOffset: 2),
      );
      expect(find.text('first: 1'), findsOneWidget);
      await press('Reset component key');
      expect(
        find.text('first: 1'),
        findsOneWidget,
      ); // The updated initial value is now used.
      await press('Count first');
      await press('Toggle component');
      await press('Toggle component');
      expect(find.text('first: 1'), findsOneWidget);
      await press('Count row 1');
      await press('Reverse component rows');
      expect(find.text('row 1: 1'), findsOneWidget);
      await press('Push component page');
      await press('Count route');
      expect(find.text('route: 1'), findsOneWidget);
      await press('Return to components');
      expect(controller.text, '编辑🙂');
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await t.pumpWidget(MaterialApp(home: ComponentsDemo(source: source)));
      await t.pumpAndSettle();
      expect(
        t.widget<TextField>(find.byType(TextField)).controller!.text,
        'State-owned input',
      );
      expect(find.text('first: 0'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(t.takeException(), isNull);
    },
  );
}
