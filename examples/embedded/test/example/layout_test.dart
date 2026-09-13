import 'dart:io';

import 'package:flax_embedded/layout.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

void main() {
  testWidgets(
    'layout combines input, flexible list space, positioning and native direction',
    (t) async {
      final source = File('assets/pages.js').readAsStringSync();
      Future<void> open() async {
        await t.pumpWidget(MaterialApp(home: LayoutDemo(source: source)));
        await t.pumpAndSettle();
      }

      Future<void> press(Finder finder) async {
        // Invoke layout controls without moving keyboard focus to the button itself.
        t.widget<TextButton>(finder).onPressed!();
        await t.pumpAndSettle();
      }

      Finder button(String label) => find.widgetWithText(TextButton, label);
      await open();
      final field = t.widget<TextField>(find.byType(TextField));
      final scroll = t.widget<ListView>(find.byType(ListView)).controller!;
      final editable = t.state(find.byType(EditableText));
      final originalHeight = t.getSize(find.byType(ListView)).height;
      await t.enterText(find.byType(TextField), 'Item 1');
      await t.pumpAndSettle();
      expect(find.text('Matches: 1111'), findsOneWidget);
      field.controller!.selection = const TextSelection(
        baseOffset: 1,
        extentOffset: 4,
      );
      await press(button('Page count: 0'));
      await press(button('Item 1: 0'));
      for (final control in [
        find.byKey(const ValueKey('layout-size')),
        find.byKey(const ValueKey('layout-direction')),
        find.byKey(const ValueKey('layout-theme')),
        button('Toggle clipping'),
        button('Change flex'),
        button('Move button'),
        button('Change alignment'),
      ]) {
        await press(control);
        final current = t.widget<TextField>(find.byType(TextField));
        expect(current.controller, same(field.controller));
        expect(current.focusNode, same(field.focusNode));
        expect(current.focusNode!.hasFocus, isTrue);
        expect(
          current.controller!.selection,
          const TextSelection(baseOffset: 1, extentOffset: 4),
        );
        expect(t.state(find.byType(EditableText)), same(editable));
        expect(find.text('Page count: 1'), findsOneWidget);
        expect(find.text('Item 1: 1'), findsOneWidget);
        expect(
          t.widget<ListView>(find.byType(ListView)).controller,
          same(scroll),
        );
      }
      expect(
        Theme.of(t.element(find.byType(TextField))).brightness,
        Brightness.dark,
      );
      expect(find.byType(ClipPath), findsWidgets);
      expect(t.getSize(find.byType(ListView)).height, lessThan(originalHeight));
      await t.drag(find.byType(ListView), const Offset(0, -500));
      await t.pumpAndSettle();
      final offset = scroll.offset;
      expect(offset, greaterThan(0));
      await press(find.byKey(const ValueKey('layout-size')));
      expect(scroll.offset, offset);
      await press(button('Back to top'));
      expect(scroll.offset, 0);
      expect(find.text('Item 1: 1'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await open();
      expect(find.text('Matches: 10000'), findsOneWidget);
      expect(find.text('Page count: 0'), findsOneWidget);
      expect(
        t.widget<TextField>(find.byType(TextField)).controller,
        isNot(same(field.controller)),
      );
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
    },
  );
}
