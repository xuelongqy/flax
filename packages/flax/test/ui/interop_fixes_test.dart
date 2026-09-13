import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../../.dart_tool/flax/ui/repeated_bindings.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets('collection views keep their declared conversions', (t) async {
    final h = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
    try {
      await t.pumpWidget(h.app('interop'));
      await t.pumpAndSettle();
      h.execute(
        'var c = interop.Collections(); var broad = c.broadNumbers; var typed = c.numbers; typed.add(3)',
      );
      expect(h.number('typed.get(2)'), 3);
      expect(
        h.boolean(
          'typed !== broad && typed === c.numbers && typed === c.nullableNumbers',
        ),
        isTrue,
      );
    } finally {
      await h.finish(t);
    }
  });
  testWidgets('retired internal Sliver contexts do not accumulate', (t) async {
    final h = OwnedHarness(
      fixture: 'nested_callbacks',
      extra: [repeatedBindings],
    );
    try {
      await t.pumpWidget(h.app('contexts'));
      await t.pumpAndSettle();
      final counts = <int>[];
      for (var i = 0; i < 8; i++) {
        h.execute('nested.extent.value = ${i.isEven ? "null" : "50"}');
        await t.pumpAndSettle();
        counts.add(
          h.runtime.handleLabels
              .where((s) => s == '__flaxBindings.context.result')
              .length,
        );
      }
      // ignore: avoid_print
      print('Context handles after layout replacement: $counts');
      expect(counts.toSet(), {1});
    } finally {
      await h.finish(t);
    }
  });
  testWidgets('nested builders acquire a mounted owner', (t) async {
    final h = OwnedHarness(
      fixture: 'nested_callbacks',
      extra: [repeatedBindings],
    );
    try {
      await t.pumpWidget(h.app('nested'));
      expect(t.takeException(), isNull);
      expect(find.text('Nested 0: 0'), findsOneWidget);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });
}
