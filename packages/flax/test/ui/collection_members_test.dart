import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/collection_members_bindings.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets('collection subclasses reuse native members, views and cleanup', (
    tester,
  ) async {
    final h = OwnedHarness(
      fixture: 'collection_members',
      extra: [collection_membersBindings],
    );
    try {
      await tester.pumpWidget(h.app('collectionMembers'));
      final calls = h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0;
      h.execute('collectionMemberHooks.exercise()');
      expect(h.number('collectionMemberHooks.rejected()'), 16);
      expect(
        h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0,
        greaterThan(calls),
      );
      final copied = h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0;
      expect(h.number('collectionMemberHooks.copyLength()'), 2);
      expect((h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0) - copied, 1);
      expect(h.number('collectionMemberHooks.iteratedLength()'), 2);
      expect((h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0) - copied, 2);
      expect(
        h.calls.entries
            .where((e) => e.key.startsWith('@memberView:'))
            .map((e) => e.value)
            .fold(0, (a, b) => a + b),
        3,
      );
      expect(h.errors, isEmpty);
      h.execute('collectionMemberHooks.release()');
      await h.finish(tester);
    } finally {
      if (!h.runtime.isDisposed) await h.finish(tester);
    }
  });
}
