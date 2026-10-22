import 'package:configured_host/api.dart';
import 'package:configured_host/main.dart' as app;
import 'package:flax/flax.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets(
    'cart subscriptions update other Views without reads or session restarts',
    (tester) async {
      tester.view.physicalSize = const Size(1200, 850);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      adminCalls = 0;
      hostCart.quantity = 1;
      await tester.runAsync(app.main);
      await _waitFor(
        tester,
        () => [
          'first ready · calls=0',
          'second ready · calls=0',
          'manager ready · calls=0',
          'forbidden ready · attempts=0',
        ].every((text) => find.text(text).evaluate().isNotEmpty),
      );
      final views = {
        for (final name in ['first', 'second', 'manager', 'forbidden'])
          name: tester.element(find.byKey(ValueKey('view-$name'))),
      };
      expect(hostCart.quantity, 1);
      expect(adminCalls, 0);
      expect(find.text('Run again'), findsNothing);

      expect(cartHasSubscribers, isTrue);
      expect(find.text('Read cart'), findsNothing);
      expect(find.text('first live quantity=1 total=1200'), findsOneWidget);
      expect(find.text('second live quantity=1 total=1200'), findsOneWidget);

      await tester.tap(_button('first', 'Add item'));
      await _waitFor(
        tester,
        () =>
            find
                .text('first live quantity=2 total=2400')
                .evaluate()
                .isNotEmpty &&
            find
                .text('second live quantity=2 total=2400')
                .evaluate()
                .isNotEmpty,
      );
      expect(
        find.text('first calls=1 added total=2400 days=3'),
        findsOneWidget,
      );
      expect(find.text('second ready · calls=0'), findsOneWidget);

      await tester.tap(_button('second', 'Add item'));
      await _waitFor(
        tester,
        () =>
            find
                .text('first live quantity=3 total=3600')
                .evaluate()
                .isNotEmpty &&
            find
                .text('second live quantity=3 total=3600')
                .evaluate()
                .isNotEmpty,
      );
      expect(
        find.text('first calls=1 added total=2400 days=3'),
        findsOneWidget,
      );
      expect(
        find.text('second calls=1 added total=3600 days=4'),
        findsOneWidget,
      );

      await tester.tap(_button('manager', 'Reset cart'));
      await _waitFor(
        tester,
        () =>
            find
                .text('first live quantity=1 total=1200')
                .evaluate()
                .isNotEmpty &&
            find
                .text('second live quantity=1 total=1200')
                .evaluate()
                .isNotEmpty,
      );
      expect(find.text('manager calls=1 price=1200'), findsOneWidget);
      expect(adminCalls, 1);
      expect(hostCart.quantity, 1);

      await tester.tap(_button('manager', 'Host app name'));
      await _waitFor(
        tester,
        () => find
            .text('manager host=Configured host calls=2')
            .evaluate()
            .isNotEmpty,
      );
      expect(adminCalls, 1);

      for (final attempt in [1, 2]) {
        await tester.tap(_button('forbidden', 'Try internal API'));
        await _waitFor(
          tester,
          () => find
              .textContaining('Blocked (attempt $attempt):')
              .evaluate()
              .isNotEmpty,
        );
        expect(
          find.textContaining('Missing Flax module: @flax/app/admin'),
          findsOneWidget,
        );
        expect(adminCalls, 1);
        expect(hostCart.quantity, 1);
      }
      tester.view.physicalSize = const Size(600, 850);
      await tester.pump();
      expect(tester.takeException(), isNull);
      expect(
        find.text('first calls=1 added total=2400 days=3'),
        findsOneWidget,
      );
      expect(
        find.text('second calls=1 added total=3600 days=4'),
        findsOneWidget,
      );
      expect(find.text('manager host=Configured host calls=2'), findsOneWidget);
      for (final entry in views.entries) {
        expect(
          tester.element(find.byKey(ValueKey('view-${entry.key}'))),
          same(entry.value),
        );
      }
      expect(adminCalls, 1);
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpAndSettle();
      expect(cartHasSubscribers, isFalse);
      Flax.moduleAssets = null;
    },
  );
}

Finder _button(String application, String text) => find.descendant(
  of: find.byKey(ValueKey('view-$application')),
  matching: find.text(text),
);

Future<void> _waitFor(WidgetTester tester, bool Function() ready) async {
  await tester.runAsync(() async {
    for (var attempt = 0; attempt < 200; attempt++) {
      await tester.pump();
      if (ready()) return;
      await Future<void>.delayed(const Duration(milliseconds: 20));
    }
  });
  expect(ready(), isTrue);
}
