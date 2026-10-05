import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/static_accessors_bindings.dart';
import '../fixtures/static_accessors.dart';
import '../support/owned_harness.dart';

void main() {
  OwnedHarness harness() => OwnedHarness(
    fixture: 'static_accessors',
    extra: [static_accessorsBindings],
  );
  testWidgets('static accessors preserve Dart types, errors and cleanup', (
    tester,
  ) async {
    StaticCounter.reset();
    final h = harness();
    try {
      await tester.pumpWidget(h.app('static-accessors'));
      h.execute('staticHooks.exercise()');
      for (var i = 0; i < 50 && h.number('staticHooks.pending') == 0; i++) {
        await tester.pump(const Duration(milliseconds: 1));
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 1)),
        );
      }
      expect(h.number('staticHooks.pending'), 13);
      expect(h.number('staticHooks.rejected'), 10);
      expect(StaticCounter.count, 17);
      expect(StaticCounter.reads, 2);
      expect(StaticCounter.writes, 2);
      expect(h.errors, isEmpty);
      h.execute('staticHooks.release()');
      expect(StaticCounter.transform, isNull);
      expect(StaticCounter.tokens, isEmpty);
      await h.finish(tester);
      expect(StaticCounter.count, 17);
    } finally {
      if (!h.runtime.isDisposed) await h.finish(tester);
      resetStaticAccessors();
    }
  });

  testWidgets('two sessions share static state without rollback on close', (
    tester,
  ) async {
    StaticCounter.reset();
    final first = harness();
    final second = harness();
    try {
      await tester.pumpWidget(first.app('static-accessors'));
      first.execute('staticHooks.write(31)');
      await tester.pumpWidget(second.app('static-accessors'));
      expect(second.number('staticHooks.read()'), 31);
      StaticCounter.count = 32;
      expect(first.number('staticHooks.read()'), 32);
      await first.finish(tester);
      expect(second.number('staticHooks.read()'), 32);
      second.execute('staticHooks.write(33)');
      expect(StaticCounter.count, 33);
      await second.finish(tester);
      expect(StaticCounter.count, 33);
    } finally {
      if (!first.runtime.isDisposed) await first.finish(tester);
      if (!second.runtime.isDisposed) await second.finish(tester);
      resetStaticAccessors();
    }
  });
}
