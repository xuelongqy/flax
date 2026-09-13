import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/repeated_bindings.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets('Context sweeping is bounded and eventual', (t) async {
    final h = OwnedHarness(
      fixture: 'nested_callbacks',
      extra: [repeatedBindings],
    );
    try {
      await t.pumpWidget(h.app('contextBatch'));
      await t.pumpAndSettle();
      final before = h.runtime.jsCalls['__flaxBindings.releaseContext'] ?? 0;
      h.execute('nested.epoch.value++');
      await t.pump();
      final first =
          (h.runtime.jsCalls['__flaxBindings.releaseContext'] ?? 0) - before;
      expect(first, inInclusiveRange(1, 64));
      for (var i = 0; i < 6; i++) {
        h.execute('nested.contexts[nested.contexts.length-1].mounted');
        await t.pumpAndSettle();
      }
      expect(h.runtime.jsCalls['__flaxBindings.releaseContext']! - before, 130);
      expect(
        h.runtime.handleLabels.where(
          (s) => s == '__flaxBindings.context.result',
        ),
        hasLength(130),
      );
      expect(
        h.boolean('nested.contexts.slice(0,130).every(c=>!c.mounted)'),
        isTrue,
      );
    } finally {
      await h.finish(t);
    }
  });
  testWidgets('GlobalKey reparenting keeps a live Context identity', (t) async {
    final h = OwnedHarness(
      fixture: 'nested_callbacks',
      extra: [repeatedBindings],
    );
    final content = FlaxView.page(
      key: GlobalKey(),
      session: h.session,
      name: 'contextMove',
    );
    Widget app(bool right) => MaterialApp(
      home: Row(
        children: [
          Expanded(child: Column(children: [if (!right) content])),
          Expanded(child: Column(children: [if (right) content])),
        ],
      ),
    );
    try {
      for (var i = 0; i < 6; i++) {
        await t.pumpWidget(app(i.isOdd));
        await t.pumpAndSettle();
      }
      expect(
        h.boolean(
          'nested.moveContexts.every(c=>c===nested.moveContexts[0] && c.mounted)',
        ),
        isTrue,
      );
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });
}
