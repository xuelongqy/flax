import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/default_omission_bindings.dart';
import '../support/owned_harness.dart';

void main() {
  OwnedHarness harness() => OwnedHarness(
    fixture: 'default_omission',
    extra: [default_omissionBindings],
  );
  testWidgets(
    'hybrid calls preserve JS undefined, null, callbacks and clean mounts',
    (tester) async {
      final h = harness();
      try {
        await tester.pumpWidget(h.app('default-omission'));
        await tester.pumpAndSettle();
        expect(find.text('default'), findsOneWidget);
        h.execute('omissionHooks.exercise()');
        expect(h.boolean('omissionHooks.completed'), isTrue);
        expect(h.number('omissionHooks.rejected'), 3);
        await tester.pumpWidget(h.app('default-omission-null'));
        await tester.pumpAndSettle();
        expect(find.text('null'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    },
  );
  testWidgets(
    'six named proxy defaults retain asynchronous mustCallSuper rejection',
    (tester) async {
      final h = harness();
      try {
        await tester.pumpWidget(h.app('default-omission'));
        h.execute(
          'omissionHooks.proxies().catch(error => { omissionHooks.failure = String(error); })',
        );
        for (var i = 0; i < 80; i++) {
          await tester.pump(const Duration(milliseconds: 1));
          await tester.runAsync(
            () => Future<void>.delayed(const Duration(milliseconds: 1)),
          );
        }
        expect(h.string('omissionHooks.failure'), isEmpty);
        expect(
          h.string('omissionHooks.missingSuper'),
          contains('must call super'),
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    },
  );
}
