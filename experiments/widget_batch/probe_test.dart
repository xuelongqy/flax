// ignore_for_file: depend_on_referenced_packages
import 'package:flutter_test/flutter_test.dart';

import '../../packages/flax/.dart_tool/flax/ui/repeated_bindings.dart';
import '../../packages/flax/test/support/owned_harness.dart';

void main() {
  testWidgets('oversized shared-edge packets fail before Widget construction', (
    tester,
  ) async {
    final h = OwnedHarness(fixture: 'layout', extra: [repeatedBindings]);
    h.runtime.evaluate('globalThis.__flaxWidgetBatch = true');
    try {
      await tester.pumpWidget(h.app('builder'));
      h.execute('''
const originalBatchReceiver = globalThis.__flaxReadWidgetBatch;
globalThis.__flaxReadWidgetBatch = (plan, ...values) => {
  const [root, nodes] = JSON.parse(plan);
  const array = nodes.find(node => node[0] === 1 && node[2].length > 0);
  if (array) array[2] = Array(5000).fill(array[2][0]);
  originalBatchReceiver(JSON.stringify([root, nodes]), ...values);
};
''');
      await tester.pumpWidget(h.app('cost'));
      await tester.pumpAndSettle();
      expect(h.errors, hasLength(1));
      expect(
        h.errors.single.toString(),
        contains('Oversized Widget batch traversal'),
      );
    } finally {
      await h.finish(tester);
    }
  });
  testWidgets('direct constructor arguments retain validation and cleanup', (
    tester,
  ) async {
    final h = OwnedHarness(fixture: 'layout', extra: [repeatedBindings]);
    h.runtime.evaluate('globalThis.__flaxObjectArguments = true');
    try {
      await tester.pumpWidget(h.app('builder'));
      h.execute('''
const {EdgeInsets} = __flaxModules.require('@flax/flutter/painting');
globalThis.directInsets = EdgeInsets.only({left:3, top:4});
globalThis.rejectedArguments = 0;
for (const entries of [['left',1,'left',2], ['unknown',1], ['left'], ['left',null]]) {
  try {
    __flaxCreateObjectWithArguments(24, 'flax.core/flutter#type:EdgeInsets',
      {}, 'only', ...entries);
  } catch (_) { rejectedArguments++; }
}
''');
      expect(h.number('directInsets.left'), 3);
      expect(h.number('directInsets.top'), 4);
      expect(h.number('rejectedArguments'), 4);
      expect(
        h.runtime.hostCalls['__flaxCreateObjectWithArguments'],
        greaterThan(0),
      );
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });
  for (final page in ['builder', 'cost']) {
    testWidgets('Widget batch keeps $page callbacks and cleanup', (
      tester,
    ) async {
      final h = OwnedHarness(fixture: 'layout', extra: [repeatedBindings]);
      h.runtime.evaluate(
        'globalThis.__flaxWidgetBatch = true; globalThis.__flaxArgumentReferences = true',
      );
      try {
        await tester.pumpWidget(h.app(page));
        await tester.pumpAndSettle();
        expect(h.errors, isEmpty);
        expect(
          h.runtime.hostCalls['__flaxReadWidgetBatch'] ?? 0,
          greaterThan(0),
        );
        if (page == 'builder') {
          expect(find.text('Built'), findsOneWidget);
          expect(h.number('layout.builders'), 2);
        } else {
          expect(
            h.runtime.jsCalls['__flaxBindings.argumentReference'] ?? 0,
            greaterThan(0),
          );
          expect(find.text('Static'), findsOneWidget);
          expect(find.text('Dynamic'), findsOneWidget);
          h.execute('layout.alignment.value = layout.Alignment.bottomRight');
          await tester.pumpAndSettle();
          expect(h.errors, isEmpty);
        }
      } finally {
        await h.finish(tester);
      }
    });
  }
}
