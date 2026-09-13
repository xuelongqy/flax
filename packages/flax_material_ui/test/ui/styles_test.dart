import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show host;
import '../support/owned_harness.dart';

TextField field(WidgetTester tester, String key) => tester.widget<TextField>(
  find.descendant(of: host(key), matching: find.byType(TextField)),
);

void main() {
  testWidgets('styles use real Dart values, aliases and constructor defaults', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'styles');
    await t.pumpWidget(h.app('styles'));
    await t.pumpAndSettle();
    expect(h.errors, isEmpty);
    expect(field(t, 'default').decoration, const InputDecoration());
    expect(field(t, 'undefined').decoration, const InputDecoration());
    expect(field(t, 'plain').decoration, isNull);
    final button = t.widget<TextButton>(
      find.widgetWithText(TextButton, 'State styled'),
    );
    final buttonStyle = button.style!;
    expect(
      buttonStyle.backgroundColor!.resolve({WidgetState.pressed}),
      const Color(0xffba315c),
    );
    expect(
      buttonStyle.backgroundColor!.resolve(const {}),
      const Color(0xff315cba),
    );
    expect(buttonStyle.elevation!.resolve({WidgetState.pressed}), 8);
    expect(buttonStyle.elevation!.resolve(const {}), 2);
    expect(buttonStyle.backgroundColor, same(buttonStyle.overlayColor));
    expect(
      h.boolean(
        'styles.background.resolve(new Set([styles.WidgetState.pressed])) === styles.pressedColor',
      ),
      isTrue,
    );
    expect(
      () =>
          h.execute('styles.ButtonStyle({backgroundColor: styles.elevation})'),
      throwsA(isA<FlaxJsException>()),
    );
    h.execute('''
      var color = styles.Color.fromARGB(128, 25, 50, 75);
      var initial = styles.TextStyle({color, fontSize: 21, fontWeight: styles.FontWeight.bold, fontStyle: styles.FontStyle.italic});
      var changed = initial.copyWith({fontSize: 24, color: null});
      var decorated = styles.InputDecoration({labelText: 'Name', errorText: 'Required', contentPadding: styles.EdgeInsets.all(8), labelStyle: initial, fillColor: color, filled: true});
      styles.style.value = changed;
      styles.decoration.value = decorated.copyWith({errorText: null, hintText: 'Enter name'});
    ''');
    expect(
      h.number('color.toARGB32()'),
      const Color.fromARGB(128, 25, 50, 75).toARGB32(),
    );
    expect(h.number('color.a'), closeTo(128 / 255, 1e-12));
    expect(h.number('color.r'), closeTo(25 / 255, 1e-12));
    expect(h.number('color.g'), closeTo(50 / 255, 1e-12));
    expect(h.number('color.b'), closeTo(75 / 255, 1e-12));
    expect(
      h.boolean(
        'styles.FontWeight.bold === styles.FontWeight.w700 && styles.FontWeight.normal === styles.FontWeight.w400',
      ),
      isTrue,
    );
    expect(h.number('styles.FontWeight(550).value'), 550);
    expect(
      h.boolean(
        'initial.fontStyle === styles.FontStyle.italic && changed.color === color && initial.fontSize === 21',
      ),
      isTrue,
    );
    expect(
      h.boolean('Object.isFrozen(initial) && Object.isFrozen(color)'),
      isTrue,
    );
    expect(
      h.boolean(
        'styles.TextStyle().inherit && styles.TextStyle().fontSize === null',
      ),
      isTrue,
    );
    await t.pump();
    final style = t.widget<Text>(find.text('Styled')).style!;
    expect(style.fontSize, 24);
    expect(style.color, const Color.fromARGB(128, 25, 50, 75));
    expect(style.fontWeight, FontWeight.bold);
    expect(style.fontStyle, FontStyle.italic);
    expect(field(t, 'decorated').style, same(style));
    expect(field(t, 'decorated').decoration!.errorText, 'Required');
    expect(
      field(t, 'decorated').decoration!.contentPadding,
      const EdgeInsets.all(8),
    );
    h.execute(
      "styles.decoration.value = styles.InputDecoration({labelText: 'Name'})",
    );
    await t.pump();
    expect(field(t, 'decorated').decoration!.errorText, isNull);
    await h.finish(t);
    expect(h.errors, isEmpty);
  });

  testWidgets(
    'bound styles coalesce locally and recover without replacing valid content',
    (t) async {
      final h = OwnedHarness(fixture: 'styles');
      await t.pumpWidget(h.app('styles'));
      await t.pumpAndSettle();
      final staticElement = t.element(host('static'));
      final rebuilt = <Key?>[];
      debugOnRebuildDirtyWidget = (element, _) {
        if (element.widget is FlaxWidgetHost) rebuilt.add(element.widget.key);
      };
      addTearDown(() => debugOnRebuildDirtyWidget = null);
      h.execute(
        'styles.style.value = styles.TextStyle({fontSize: 22}); styles.style.value = styles.TextStyle({fontSize: 26})',
      );
      await t.pump();
      expect(t.widget<Text>(find.text('Styled')).style!.fontSize, 26);
      expect(
        rebuilt,
        unorderedEquals([
          const ValueKey('styled'),
          const ValueKey('decorated'),
        ]),
      );
      expect(h.number('styles.staticBuilds'), 1);
      expect(t.element(host('static')), same(staticElement));
      h.execute('styles.fail.value = true');
      await t.pump();
      expect(t.widget<Text>(find.text('Styled')).style!.fontSize, 26);
      expect(h.errors.single.toString(), contains('style failed'));
      h.errors.clear();
      for (final code in [
        'styles.TextStyle({fontSize: null, color: 12})',
        'styles.TextStyle({fontWeight: styles.Color(0)})',
        'styles.InputDecoration({filled: 1})',
        'styles.Color(1.5)',
      ]) {
        expect(
          () => h.execute(code),
          throwsA(isA<FlaxJsException>()),
          reason: code,
        );
      }
      h.execute(
        'styles.fail.value = false; styles.style.value = null; styles.decoration.value = null',
      );
      await t.pump();
      expect(t.widget<Text>(find.text('Styled')).style, isNull);
      expect(field(t, 'decorated').decoration, isNull);
      debugOnRebuildDirtyWidget = null;
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );
}
