import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/widget_members_bindings.dart';
import '../fixtures/widget_members.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets('automatic Widget members preserve native identity and cleanup', (
    tester,
  ) async {
    ComputedWidget.reads = 0;
    final h = OwnedHarness(
      fixture: 'widget_members',
      extra: [widget_membersBindings],
    );
    try {
      await tester.pumpWidget(h.app('widgetMembers'));
      expect(find.byType(ComputedWidget), findsOneWidget);
      expect(find.byType(FinalComputedWidget), findsOneWidget);
      expect(find.byType(ReturnedComputedWidget), findsOneWidget);
      expect(find.text('hello'), findsOneWidget);
      expect(find.text('final'), findsOneWidget);
      expect(find.text('returned'), findsOneWidget);
      expect(ComputedWidget.reads, 0);
      final calls = h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0;
      expect(h.number('widgetMemberHooks.trackedLength()'), 5);
      expect(ComputedWidget.reads, 1);
      expect((h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0) - calls, 1);
      final resolutions = h.runtime.hostCalls['__flaxResolveOperation'] ?? 0;
      expect(h.number('widgetMemberHooks.trackedLength()'), 5);
      expect(ComputedWidget.reads, 2);
      expect(h.runtime.hostCalls['__flaxResolveOperation'] ?? 0, resolutions);
      expect((h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0) - calls, 2);
      h.execute('widgetMemberHooks.exercise()');
      for (
        var i = 0;
        i < 50 && h.number('widgetMemberHooks.pending()') < 2;
        i++
      ) {
        await tester.pump(const Duration(milliseconds: 1));
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 1)),
        );
      }
      expect(h.number('widgetMemberHooks.pending()'), 2);
      expect(h.number('widgetMemberHooks.rejected()'), 10);
      expect(h.errors, isEmpty);
      h.execute('widgetMemberHooks.release()');
      await h.finish(tester);
    } finally {
      if (!h.runtime.isDisposed) await h.finish(tester);
      ComputedWidget.reads = 0;
    }
  });
}
