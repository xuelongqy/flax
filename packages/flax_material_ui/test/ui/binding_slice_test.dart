import 'dart:ui' show PointerDeviceKind;

import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show host;
import '../support/owned_harness.dart';

const _foreground = Color(0xff1565c0);
const _background = Color(0xffe3f2fd);
const _explicitText = TextStyle(
  inherit: false,
  color: _foreground,
  fontSize: 22,
);

Finder _native<T extends Widget>(String key) =>
    find.descendant(of: host(key), matching: find.byType(T));

Widget _comparison(
  OwnedHarness h, {
  int flex = 2,
  ThemeData? theme,
  bool styled = false,
}) => MaterialApp(
  theme: theme ?? ThemeData(useMaterial3: false),
  home: Align(
    alignment: Alignment.topLeft,
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SizedBox(
          key: const ValueKey('slice-scene'),
          width: 300,
          height: 200,
          child: h.page('binding-slice'),
        ),
        SizedBox(
          key: const ValueKey('native-scene'),
          width: 300,
          height: 200,
          child: Material(
            type: MaterialType.card,
            elevation: 2,
            color: styled ? _background : null,
            shadowColor: _foreground,
            surfaceTintColor: _background,
            textStyle: styled ? _explicitText : null,
            borderRadius: BorderRadius.circular(8),
            clipBehavior: Clip.antiAlias,
            child: Column(
              children: [
                SizedBox(
                  height: 40,
                  child: Row(
                    children: [
                      const SizedBox(
                        key: ValueKey('native-left'),
                        width: 20,
                        height: 20,
                      ),
                      const Spacer(),
                      const SizedBox(
                        key: ValueKey('native-middle'),
                        width: 20,
                        height: 20,
                      ),
                      Spacer(flex: flex),
                      const SizedBox(
                        key: ValueKey('native-right'),
                        width: 20,
                        height: 20,
                      ),
                    ],
                  ),
                ),
                const SizedBox(
                  width: 300,
                  height: 64,
                  child: Text('Native', key: ValueKey('native-text')),
                ),
              ],
            ),
          ),
        ),
      ],
    ),
  ),
);

void main() {
  testWidgets(
    'Spacer defaults and reactive flex match native free-space layout',
    (t) async {
      final h = OwnedHarness(fixture: 'binding_slice');
      try {
        for (final flex in [2, 1, 3]) {
          if (flex != 2) h.execute('slice.flex.value = $flex');
          await t.pumpWidget(_comparison(h, flex: flex));
          await t.pumpAndSettle();
          expect(
            t.widget<Spacer>(_native<Spacer>('slice-default-spacer')).flex,
            1,
          );
          expect(
            t.widget<Spacer>(_native<Spacer>('slice-weighted-spacer')).flex,
            flex,
          );
          for (final name in ['left', 'middle', 'right']) {
            final actual =
                (t.getTopLeft(host('slice-$name')) -
                    t.getTopLeft(find.byKey(const ValueKey('slice-scene')))) &
                t.getSize(host('slice-$name'));
            final expected =
                (t.getTopLeft(find.byKey(ValueKey('native-$name'))) -
                    t.getTopLeft(find.byKey(const ValueKey('native-scene')))) &
                t.getSize(find.byKey(ValueKey('native-$name')));
            expect(actual, expected, reason: '$name with flex $flex');
          }
          final middle =
              t.getTopLeft(host('slice-middle')).dx -
              t.getTopLeft(host('slice-left')).dx;
          expect(middle, closeTo(20 + 240 / (1 + flex), 0.001));
        }
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('InkWell events update signals and retire on unmount and close', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'binding_slice');
    try {
      await t.pumpWidget(_comparison(h));
      await t.pumpAndSettle();
      final inkFinder = _native<InkWell>('slice-ink');
      final initial = t.widget<InkWell>(inkFinder);
      expect(initial.splashColor, _foreground);
      expect(initial.highlightColor, _background);
      expect(initial.hoverColor, _background);
      expect(initial.borderRadius, BorderRadius.circular(8));
      expect(initial.enableFeedback, isFalse);

      final press = await t.startGesture(t.getCenter(inkFinder));
      await t.pump(const Duration(milliseconds: 150));
      expect(h.boolean('slice.highlight.includes(true)'), isTrue);
      await press.up();
      await t.pumpAndSettle();
      expect(h.number('slice.taps.value'), 1);
      expect(find.text('Taps 1'), findsOneWidget);
      expect(h.boolean('slice.highlight.at(-1) === false'), isTrue);
      expect(
        t
            .widget<LinearProgressIndicator>(
              _native<LinearProgressIndicator>('slice-progress'),
            )
            .value,
        0.5,
      );
      await t.longPress(inkFinder);
      await t.pumpAndSettle();
      expect(h.number('slice.longPresses'), 1);
      expect(h.number('slice.taps.value'), 1);

      final mouse = await t.createGesture(kind: PointerDeviceKind.mouse);
      await mouse.addPointer(location: const Offset(700, 400));
      await mouse.moveTo(t.getCenter(inkFinder));
      await t.pump();
      expect(h.boolean('slice.hover.at(-1) === true'), isTrue);
      await mouse.moveTo(const Offset(700, 400));
      await t.pump();
      expect(h.boolean('slice.hover.at(-1) === false'), isTrue);
      await mouse.removePointer();

      h.execute('slice.showInk.value = false');
      await t.pumpAndSettle();
      final handles = h.runtime.handles;
      final subscriptions = h.runtime.activeSubscriptions;
      final highlights = h.number('slice.highlight.length');
      final hovers = h.number('slice.hover.length');
      initial.onTap!();
      initial.onLongPress!();
      initial.onHover!(true);
      initial.onHighlightChanged!(true);
      expect(h.number('slice.taps.value'), 1);
      expect(h.number('slice.longPresses'), 1);
      expect(h.number('slice.highlight.length'), highlights);
      expect(h.number('slice.hover.length'), hovers);
      for (var cycle = 0; cycle < 3; cycle++) {
        h.execute('slice.showInk.value = true');
        await t.pumpAndSettle();
        await t.tap(inkFinder);
        await t.pumpAndSettle();
        expect(h.number('slice.taps.value'), cycle + 2);
        h.execute('slice.showInk.value = false');
        await t.pumpAndSettle();
        expect(h.runtime.handles, handles);
        expect(h.runtime.activeSubscriptions, subscriptions);
      }

      h.execute('slice.showInk.value = true');
      await t.pumpAndSettle();
      final last = t.widget<InkWell>(inkFinder);
      final closed = h.session.close();
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await closed;
      expect(h.runtime.handlesAtDispose, 0);
      expect(h.runtime.activeSubscriptions, 0);
      expect(h.runtime.pendingFutures, 0);
      final calls = Map<String, int>.from(h.runtime.jsCalls);
      last.onTap!();
      last.onLongPress!();
      last.onHover!(true);
      last.onHighlightChanged!(true);
      expect(h.runtime.jsCalls, calls);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'progress paints inherited styles, explicit values and semantics',
    (t) async {
      final h = OwnedHarness(fixture: 'binding_slice');
      final semantics = t.ensureSemantics();
      try {
        ThemeData theme(Color color) => ThemeData(
          useMaterial3: false,
          textTheme: TextTheme(
            bodyMedium: TextStyle(color: color, fontSize: 17),
          ),
          progressIndicatorTheme: ProgressIndicatorThemeData(
            color: color,
            linearTrackColor: const Color(0xffdddddd),
          ),
        );
        final progressFinder = _native<LinearProgressIndicator>(
          'slice-progress',
        );
        void expectPaint(Color color, Color track) {
          final paint = t.renderObject<RenderCustomPaint>(
            find.descendant(
              of: progressFinder,
              matching: find.byType(CustomPaint),
            ),
          );
          expect(
            paint,
            paints
              ..rrect(color: track)
              ..rrect(color: color),
          );
        }

        for (final color in [
          const Color(0xff388e3c),
          const Color(0xff7b1fa2),
        ]) {
          await t.pumpWidget(_comparison(h, theme: theme(color)));
          await t.pumpAndSettle();
          expect(
            DefaultTextStyle.of(t.element(_native<Text>('slice-text'))).style,
            DefaultTextStyle.of(
              t.element(find.byKey(const ValueKey('native-text'))),
            ).style,
          );
          expectPaint(color, const Color(0xffdddddd));
        }
        final material = t.widget<Material>(
          _native<Material>('slice-material'),
        );
        expect(material.type, MaterialType.card);
        expect(material.elevation, 2);
        expect(material.color, isNull);
        expect(material.textStyle, isNull);
        expect(material.shadowColor, _foreground);
        expect(material.surfaceTintColor, _background);
        expect(material.borderRadius, BorderRadius.circular(8));
        expect(material.clipBehavior, Clip.antiAlias);
        final progress = t.widget<LinearProgressIndicator>(progressFinder);
        expect(progress.value, 0.25);
        expect(progress.color, isNull);
        expect(progress.backgroundColor, isNull);
        expect(progress.minHeight, 6);
        expect(progress.borderRadius, BorderRadius.circular(4));
        expect(t.getSize(progressFinder).height, 6);
        expect(
          t.getSemantics(find.bySemanticsLabel('Binding progress')).value,
          '25%',
        );

        h.execute('slice.styled.value = true; slice.progress.value = 0.75');
        await t.pumpAndSettle();
        expect(
          t.widget<Material>(_native<Material>('slice-material')).color,
          _background,
        );
        expect(
          DefaultTextStyle.of(t.element(_native<Text>('slice-text'))).style,
          _explicitText,
        );
        expectPaint(_foreground, _background);
        expect(
          t.getSemantics(find.bySemanticsLabel('Binding progress')).value,
          '75%',
        );

        h.execute('slice.progress.value = null');
        await t.pump();
        await t.pump(const Duration(milliseconds: 400));
        expect(t.widget<LinearProgressIndicator>(progressFinder).value, isNull);
        expect(
          t.getSemantics(find.bySemanticsLabel('Binding progress')).value,
          isEmpty,
        );
        h.execute('slice.progress.value = 1; slice.styled.value = false');
        await t.pumpAndSettle();
        expect(t.widget<LinearProgressIndicator>(progressFinder).value, 1);
        expect(
          t.widget<Material>(_native<Material>('slice-material')).textStyle,
          isNull,
        );
        expect(
          t.getSemantics(find.bySemanticsLabel('Binding progress')).value,
          '100%',
        );
        expect(h.errors, isEmpty);
      } finally {
        semantics.dispose();
        await h.finish(t);
      }
    },
  );
}
