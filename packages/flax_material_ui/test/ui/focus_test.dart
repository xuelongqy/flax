import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/owned_harness.dart';

void main() {
  testWidgets(
    'real focus traversal, replacement and shared formatter lifetimes',
    (t) async {
      final h = OwnedHarness(fixture: 'focus');
      await t.pumpWidget(h.app('focus'));
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
      final fields = find.byType(TextField);
      h.execute('focus.nodes[0].requestFocus()');
      await t.pumpAndSettle();
      expect(h.boolean('focus.nodes[0].hasPrimaryFocus'), isTrue);
      await t.sendKeyEvent(LogicalKeyboardKey.tab);
      await t.pumpAndSettle();
      expect(h.boolean('focus.nodes[1].hasPrimaryFocus'), isTrue);
      h.execute('focus.nodes[1].previousFocus()');
      await t.pumpAndSettle();
      expect(h.boolean('focus.nodes[0].hasFocus'), isTrue);
      await t.enterText(fields.first, 'abc');
      await t.pump();
      expect(h.string('focus.controllers[0].text'), 'abc');
      await t.enterText(fields.first, 'abc!');
      await t.pump();
      expect(h.string('focus.controllers[0].text'), 'abc');
      await t.enterText(fields.last, 'second');
      await t.pump();
      expect(h.string('focus.controllers[1].text'), 'second');
      expect(h.number('focus.calls'), 3);
      final calls = h.number('focus.calls');
      h.execute("focus.controllers[0].text = 'programmatic!'");
      await t.pump();
      expect(h.number('focus.calls'), calls);
      h.execute(
        'focus.formatters.value = [focus.FilteringTextInputFormatter.digitsOnly, focus.LengthLimitingTextInputFormatter(3)]',
      );
      await t.pump();
      expect(h.string('focus.controllers[0].text'), 'programmatic!');
      await t.enterText(fields.first, 'a12345');
      await t.pump();
      expect(h.string('focus.controllers[0].text'), '123');
      h.execute(
        'focus.formatters.value = [focus.FilteringTextInputFormatter.allow(focus.RegExp("[a-z]", {caseSensitive: false}))]',
      );
      await t.pump();
      await t.enterText(fields.first, 'A1b2');
      await t.pump();
      expect(h.string('focus.controllers[0].text'), 'Ab');
      h.execute(
        'focus.formatters.value = [focus.FilteringTextInputFormatter.deny("x")]',
      );
      await t.pump();
      await t.enterText(fields.first, 'axb');
      await t.pump();
      expect(h.string('focus.controllers[0].text'), 'ab');
      h.execute(
        'var replacement = focus.FocusNode(); focus.selected.value = replacement',
      );
      await t.pump();
      h.execute('replacement.requestFocus()');
      await t.pumpAndSettle();
      expect(h.boolean('replacement.hasPrimaryFocus'), isTrue);
      expect(h.boolean('focus.nodes[0].hasFocus'), isFalse);
      h.execute(
        'replacement.unfocus({disposition: focus.UnfocusDisposition.scope}); replacement.canRequestFocus = false; replacement.skipTraversal = true; replacement.requestFocus()',
      );
      await t.pumpAndSettle();
      expect(h.boolean('replacement.hasFocus'), isFalse);
      expect(h.boolean('replacement.skipTraversal'), isTrue);
      expect(h.number('focus.staticBuilds'), 1);
      h.execute('focus.showFirst.value = false');
      await t.pumpAndSettle();
      expect(find.byType(TextField), findsOneWidget);
      // Unmounting one borrower must not retire the shared formatter callback.
      h.execute('focus.formatters.value = [focus.sharedFormatter]');
      await t.pump();
      await t.enterText(find.byType(TextField), 'still active');
      await t.pump();
      await t.enterText(find.byType(TextField), 'still active!');
      await t.pump();
      expect(h.string('focus.controllers[1].text'), 'still active');
      h.execute('focus.showFirst.value = true');
      await t.pump();
      h.execute('focus.selected.value = focus.nodes[0]');
      await t.pump();
      h.execute('replacement.dispose()');
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'composing and synchronous formatter exceptions use Flutter semantics',
    (t) async {
      final h = OwnedHarness(fixture: 'focus');
      await t.pumpWidget(h.app('focus'));
      await t.pumpAndSettle();
      await t.showKeyboard(find.byType(TextField).first);
      t.testTextInput.updateEditingValue(
        const TextEditingValue(
          text: '中!',
          selection: TextSelection.collapsed(offset: 2),
          composing: TextRange(start: 0, end: 2),
        ),
      );
      await t.pump();
      expect(h.string('focus.controllers[0].text'), '中!');
      h.execute('focus.fail = true');
      t.testTextInput.updateEditingValue(
        const TextEditingValue(
          text: 'next',
          selection: TextSelection.collapsed(offset: 4),
        ),
      );
      await t.pump();
      expect(t.takeException().toString(), contains('format failed'));
      h.execute('focus.fail = false');
      await t.enterText(find.byType(TextField).first, 'recovered');
      await t.pump();
      expect(h.string('focus.controllers[0].text'), 'recovered');
      h.execute(
        'focus.formatters.value = [focus.TextInputFormatter.withFunction((oldValue, newValue) => Promise.resolve(newValue))]',
      );
      await t.pump();
      t.testTextInput.updateEditingValue(
        const TextEditingValue(
          text: 'promise',
          selection: TextSelection.collapsed(offset: 7),
        ),
      );
      await t.pump();
      expect(t.takeException(), isNotNull);
      expect(t.takeException(), isNull);

      await h.finish(t);
    },
  );
}
