import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/repeated_bindings.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets(
    'independent results mount, replace, discard and close without retaining history',
    (t) async {
      final h = OwnedHarness(fixture: 'repeated', extra: [repeatedBindings]);
      await t.pumpWidget(h.app('repeated'));
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
      expect(h.number('repeated.calls'), 2);
      expect(
        h.boolean('repeated.contexts[0] === repeated.contexts[1]'),
        isTrue,
      );
      final subscriptions = h.runtime.activeSubscriptions;
      expect(subscriptions, 5);
      h.execute('repeated.value.value = 1');
      await t.pump();
      expect(find.text('Tile 0: 1'), findsOneWidget);
      expect(find.text('Tile 1: 1'), findsOneWidget);
      expect(h.number('repeated.calls'), 2);
      for (final mode in [
        'throw',
        'promise',
        'undefined',
        'null',
        'shared',
        'normal',
      ]) {
        final errors = h.errors.length;
        h.execute('repeated.mode = "$mode"; repeated.revision.value++');
        await t.pumpAndSettle();
        expect(
          h.errors.length - errors,
          ['throw', 'promise', 'undefined'].contains(mode) ? 1 : 0,
        );
        if (mode == 'shared') {
          expect(find.text('Shared 1'), findsNWidgets(2));
          h.execute('repeated.value.value = 2');
          await t.pump();
          expect(find.text('Shared 2'), findsNWidgets(2));
        }
      }
      expect(h.runtime.activeSubscriptions, subscriptions);
      h.execute('repeated.discard.value = true');
      await t.pumpAndSettle();
      expect(h.runtime.activeSubscriptions, 3);
      final handles = h.runtime.handles;
      for (var i = 0; i < 10; i++) {
        h.execute('repeated.revision.value++');
        await t.pumpAndSettle();
        expect(h.runtime.handles, handles);
        expect(h.runtime.activeSubscriptions, 3);
      }
      h.execute('repeated.discard.value = false');
      await t.pumpAndSettle();
      expect(h.runtime.activeSubscriptions, subscriptions);
      await h.finish(t);
    },
  );
}
