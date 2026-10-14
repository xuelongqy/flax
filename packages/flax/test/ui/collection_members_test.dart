import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/collection_members_bindings.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets(
    'declared generic views share prototypes without weakening calls',
    (tester) async {
      final h = OwnedHarness(
        fixture: 'collection_members',
        extra: [collection_membersBindings],
      );
      try {
        await tester.pumpWidget(h.app('collectionMembers'));
        h.execute('collectionMemberHooks.exerciseGenericViews()');
        final calls = h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0;
        h.execute('genericViewReads()');
        expect(
          (h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0) - calls,
          100,
        );
        h.execute(
          'collectionMemberHooks.asyncGenericView().then(value => { globalThis.genericFutureResult = value; })',
        );
        for (var i = 0; i < 5; i++) {
          await tester.pump();
        }
        expect(h.string('genericFutureResult'), 'future callback');
        expect(h.errors, isEmpty);
        await h.finish(tester);
      } finally {
        if (!h.runtime.isDisposed) await h.finish(tester);
      }
    },
  );

  testWidgets('generic member views stay independent across Sessions', (
    tester,
  ) async {
    final first = OwnedHarness(
      fixture: 'collection_members',
      extra: [collection_membersBindings],
    );
    final second = OwnedHarness(
      fixture: 'collection_members',
      extra: [collection_membersBindings],
    );
    try {
      await tester.pumpWidget(
        Row(
          textDirection: TextDirection.ltr,
          children: [
            Expanded(child: first.app('collectionMembers')),
            Expanded(child: second.app('collectionMembers')),
          ],
        ),
      );
      expect(first.number('collectionMemberHooks.sharedGenericView()'), 2);
      expect(second.number('collectionMemberHooks.sharedGenericView()'), 2);
      await first.finish(tester);
      expect(second.number('collectionMemberHooks.sharedGenericView()'), 2);
      await second.finish(tester);
    } finally {
      if (!first.runtime.isDisposed) await first.finish(tester);
      if (!second.runtime.isDisposed) await second.finish(tester);
    }
  });
  testWidgets('Iterators reuse ordinary objects, generics and callbacks', (
    tester,
  ) async {
    final h = OwnedHarness(
      fixture: 'collection_members',
      extra: [collection_membersBindings],
    );
    try {
      await tester.pumpWidget(h.app('collectionMembers'));
      expect(h.number('collectionMemberHooks.exerciseIterators()'), 5);
      expect(h.errors, isEmpty);
      await h.finish(tester);
    } finally {
      if (!h.runtime.isDisposed) await h.finish(tester);
    }
  });
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
        0,
      );
      expect(h.errors, isEmpty);
      h.execute('collectionMemberHooks.release()');
      await h.finish(tester);
    } finally {
      if (!h.runtime.isDisposed) await h.finish(tester);
    }
  });
}
