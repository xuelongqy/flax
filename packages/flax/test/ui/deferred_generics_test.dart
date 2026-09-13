import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';

import 'package:flax_test/flax_test.dart';

import '../support/owned_harness.dart';

void main() {
  testWidgets('one collected deferred alias does not release a live alias', (
    tester,
  ) async {
    final harness = OwnedHarness(fixture: 'interop', extra: [interopBindings]);
    try {
      await tester.pumpWidget(harness.app('interop'));
      await tester.pumpAndSettle();
      harness.execute('''
        interop.SharedDeferredProperty.reset();
        var anchor = interop.Collections();
        var first = interop.SharedDeferredProperty.resolveWith(
          () => interop.Token(1),
        );
        var weakSecond;
        (() => {
          const second = interop.SharedDeferredProperty.resolveWith(
            () => interop.Token(2),
          );
          weakSecond = new WeakRef(second);
          interop.SharedDeferredConsumer(first);
          interop.SharedDeferredConsumer(second);
        })();
      ''');
      expect(harness.number('first.resolve().value'), 1);

      for (var i = 0; i < 60; i++) {
        harness.runtime.drainMicrotasks();
        harness.execute('${flaxTestJsGarbagePressure}anchor.numbers.length');
        await tester.pumpAndSettle();
        await tester.runAsync(flaxTestCollectDartGarbage);
        if (harness.boolean('weakSecond.deref() === undefined')) break;
      }

      expect(harness.boolean('weakSecond.deref() === undefined'), isTrue);
      expect(harness.number('first.resolve().value'), 1);
      expect(harness.errors, isEmpty);
      harness.execute(
        'interop.SharedDeferredProperty.reset(); first=null; anchor=null',
      );
    } finally {
      await harness.finish(tester);
    }
  });
}
