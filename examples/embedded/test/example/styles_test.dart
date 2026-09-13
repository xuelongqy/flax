import 'dart:io';

import 'package:flax_embedded/styles.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

void main() {
  testWidgets(
    'the styles page keeps editing through host/local themes and navigation',
    (t) async {
      final source = File('assets/pages.js').readAsStringSync();
      await t.pumpWidget(
        MaterialApp(
          builder: (_, child) => Material(child: child),
          home: StylesDemo(source: source),
        ),
      );
      await t.pumpAndSettle();
      Future<void> tap(Finder finder) async {
        await t.ensureVisible(finder);
        await t.tap(finder);
        await t.pumpAndSettle();
      }

      expect(find.text('Host theme: light'), findsOneWidget);
      expect(find.text('Local theme: dark'), findsOneWidget);
      final input = t.widget<TextField>(find.byType(TextField));
      final controller = input.controller!;
      final state = t.state(find.byType(EditableText));
      final action = find.widgetWithText(TextButton, 'Increment styled count');
      final initialButtonStyle = t.widget<TextButton>(action).style;
      await t.enterText(find.byType(TextField), '中文🌱');
      controller.selection = const TextSelection(
        baseOffset: 4,
        extentOffset: 1,
      );
      await tap(find.text('Increment styled count'));
      await tap(find.byKey(const ValueKey('host-brightness')));
      expect(find.text('Host theme: dark'), findsOneWidget);
      expect(find.text('Local theme: dark'), findsOneWidget);
      final fill = t
          .widget<TextField>(find.byType(TextField))
          .decoration!
          .fillColor;
      final localStyle = t.widget<Text>(find.text('Local theme: dark')).style;
      await tap(find.byKey(const ValueKey('host-seed')));
      expect(
        t.widget<TextField>(find.byType(TextField)).decoration!.fillColor,
        isNot(fill),
      );
      expect(t.widget<Text>(find.text('Local theme: dark')).style, localStyle);
      await tap(find.text('Toggle local theme'));
      expect(find.text('Local theme: light'), findsOneWidget);
      expect(find.text('Host theme: dark'), findsOneWidget);
      expect(controller.text, '中文🌱');
      expect(
        controller.selection,
        const TextSelection(baseOffset: 4, extentOffset: 1),
      );
      expect(t.state(find.byType(EditableText)), same(state));
      expect(find.text('Styled count: 1'), findsOneWidget);
      await tap(find.text('Toggle generated button style'));
      expect(
        t.widget<TextButton>(action).style,
        isNot(same(initialButtonStyle)),
      );
      expect(
        t.widget<TextField>(find.byType(TextField)).controller,
        same(controller),
      );
      await tap(find.text('Focus styled input'));
      expect(input.focusNode!.hasFocus, isTrue);
      await t.enterText(find.byType(TextField), '1234567890123456789012345');
      await t.pumpAndSettle();
      expect(controller.text, '12345678901234567890');
      await tap(find.text('Open style detail'));
      expect(find.text('Style detail'), findsOneWidget);
      await tap(find.text('Return to styles'));
      expect(
        t.widget<TextField>(find.byType(TextField)).controller,
        same(controller),
      );
      expect(find.text('Styled count: 1'), findsOneWidget);
      await tap(find.text('Clear input and error'));
      expect(controller.text, '');
      expect(find.text('Enter a name'), findsNothing);
      await tap(find.text('Show input error'));
      expect(find.text('Enter a name'), findsOneWidget);
      await tap(find.text('Clear input and error'));
      expect(find.text('Enter a name'), findsNothing);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await t.pumpWidget(MaterialApp(home: StylesDemo(source: source)));
      await t.pumpAndSettle();
      expect(find.text('Styled count: 0'), findsOneWidget);
      expect(t.widget<TextField>(find.byType(TextField)).controller!.text, '');
      expect(find.text('Host theme: light'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
    },
  );
}
