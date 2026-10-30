import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/owned_harness.dart';

void main() {
  for (final page in ['jsx', 'ordinary']) {
    testWidgets(
      '$page retains native State, keys, signals and callback Context',
      (tester) async {
        final h = OwnedHarness(fixture: 'jsx');
        try {
          await tester.pumpWidget(h.app(page));
          await tester.pumpAndSettle();
          expect(h.errors, isEmpty);
          expect(find.text('A: 0'), findsOneWidget);
          expect(find.text('B: 0'), findsOneWidget);
          expect(find.text('Context: true'), findsOneWidget);
          expect(h.number('jsxDemo.metrics.initialized'), 2);
          expect(h.boolean('jsxDemo.metrics.realContext'), isTrue);
          final counters = find.byWidgetPredicate(
            (widget) => widget.runtimeType.toString().startsWith('Counter@'),
          );
          expect(counters, findsNWidgets(2));
          final elements = counters.evaluate().toList();
          final states = elements
              .map((element) => tester.state(find.byWidget(element.widget)))
              .toList();
          await tester.tap(find.text('A: 0'));
          await tester.pump();
          expect(find.text('A: 1'), findsOneWidget);
          final builds = h.number('jsxDemo.metrics.builds');
          h.execute('jsxDemo.update()');
          await tester.pump();
          expect(find.text('Signal: updated'), findsOneWidget);
          expect(h.number('jsxDemo.metrics.builds'), builds);
          h.execute('jsxDemo.reorder()');
          await tester.pump();
          expect(find.text('A: 1'), findsOneWidget);
          expect(h.number('jsxDemo.metrics.initialized'), 2);
          final reordered = counters.evaluate().toList();
          expect(reordered, elements.reversed.toList());
          expect(
            tester.state(find.byWidget(reordered[1].widget)),
            same(states[0]),
          );
          await tester.pumpWidget(const SizedBox.shrink());
          await tester.pumpAndSettle();
          expect(h.number('jsxDemo.metrics.disposed'), 2);
          expect(h.errors, isEmpty);
        } finally {
          await h.finish(tester);
        }
      },
    );
  }
}
