import 'dart:io';

import 'package:configured_host/configured_host.dart';
import 'package:configured_prices/configured_prices.dart';
import 'package:flax/flax.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:material_ui/material_ui.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  setUpAll(() async {
    Flax.moduleAssets = await FlaxModuleAssets.load(
      bundle: FlaxDirectoryAssetBundle(Directory.current),
      manifest: 'assets/flax_modules/modules.json',
    );
  });
  tearDownAll(() => Flax.moduleAssets = null);

  testWidgets(
    'directory Views share cart updates and release subscriptions on unmount',
    (tester) async {
      hostCart.quantity = 1;
      expect(cartHasSubscribers, isFalse);
      final registry = FlaxBindingRegistry([
        shopBindings,
        deliveryBindings,
        pricesBindings,
      ]);
      expect(
        registry.modules.where((m) => m.moduleId == 'example.prices/prices'),
        hasLength(1),
      );
      final errors = <Object>[];
      final first = ConfiguredMiniapp(
        key: const ValueKey('first'),
        directory: Directory('applications/first'),
        onError: (error, _) => errors.add(error),
      );
      final second = ConfiguredMiniapp(
        key: const ValueKey('second'),
        directory: Directory('applications/second'),
        onError: (error, _) => errors.add(error),
      );
      Widget shops({bool showFirst = true}) => MaterialApp(
        home: Scaffold(
          body: Row(
            children: [
              Expanded(child: showFirst ? first : const SizedBox.shrink()),
              Expanded(child: second),
            ],
          ),
        ),
      );
      await tester.pumpWidget(shops());
      await _waitFor(
        tester,
        () =>
            errors.isNotEmpty ||
            find
                    .text('first live quantity=1 total=1200')
                    .evaluate()
                    .isNotEmpty &&
                find
                    .text('second live quantity=1 total=1200')
                    .evaluate()
                    .isNotEmpty,
      );
      expect(errors, isEmpty);
      expect(cartHasSubscribers, isTrue);
      for (final name in ['first', 'second']) {
        await tester.tap(
          find.descendant(
            of: find.byKey(ValueKey(name)),
            matching: find.text('Add item'),
          ),
        );
        final quantity = name == 'first' ? 2 : 3;
        await _waitFor(
          tester,
          () => ['first', 'second'].every(
            (app) => find
                .text('$app live quantity=$quantity total=${quantity * 1200}')
                .evaluate()
                .isNotEmpty,
          ),
        );
        expect(hostCart.quantity, quantity);
      }
      // Closing one session must leave the other session's subscription active.
      await tester.pumpWidget(shops(showFirst: false));
      await tester.pumpAndSettle();
      await tester.tap(find.text('Add item'));
      await _waitFor(
        tester,
        () => find
            .text('second live quantity=4 total=4800')
            .evaluate()
            .isNotEmpty,
      );
      expect(
        find.text('second calls=2 added total=4800 days=5'),
        findsOneWidget,
      );
      expect(cartHasSubscribers, isTrue);
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpAndSettle();
      expect(cartHasSubscribers, isFalse);

      // The shared application-owned controller survives both View sessions.
      hostCart.add(1);
      await tester.pumpWidget(shops());
      await _waitFor(
        tester,
        () =>
            find
                .text('first live quantity=5 total=6000')
                .evaluate()
                .isNotEmpty &&
            find
                .text('second live quantity=5 total=6000')
                .evaluate()
                .isNotEmpty,
      );
      expect(find.text('first ready · calls=0'), findsOneWidget);
      expect(find.text('second ready · calls=0'), findsOneWidget);
      expect(errors, isEmpty);
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpAndSettle();
      expect(cartHasSubscribers, isFalse);
    },
  );

  testWidgets(
    'simultaneous Views allow internal calls only with the internal plugin',
    (tester) async {
      adminCalls = 0;
      hostCart.quantity = 9;
      final registry = FlaxBindingRegistry([adminBindings]);
      expect(
        registry.modules.map((module) => module.moduleId),
        isNot(contains('example.shop/shop')),
      );
      expect(
        registry.modules.map((module) => module.moduleId),
        isNot(contains('example.shop/delivery')),
      );
      final errors = <Object>[];
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: Row(
              children: [
                Expanded(
                  child: ConfiguredMiniapp(
                    key: const ValueKey('manager'),
                    directory: Directory('applications/manager'),
                    plugins: const [
                      FlaxMaterialPlugin(),
                      FlaxInternalPlugin(),
                      FlaxPricesPlugin(),
                    ],
                    onError: (error, _) => errors.add(error),
                  ),
                ),
                Expanded(
                  child: ConfiguredMiniapp(
                    key: const ValueKey('forbidden'),
                    directory: Directory('applications/forbidden'),
                    onError: (error, _) => errors.add(error),
                  ),
                ),
              ],
            ),
          ),
        ),
      );
      await _waitFor(
        tester,
        () =>
            errors.isNotEmpty ||
            find.text('manager ready · calls=0').evaluate().isNotEmpty &&
                find.text('forbidden ready · attempts=0').evaluate().isNotEmpty,
      );
      expect(errors, isEmpty);
      expect(adminCalls, 0);
      expect(hostCart.quantity, 9);
      await tester.tap(find.text('Reset cart'));
      await _waitFor(
        tester,
        () => find.text('manager calls=1 price=1200').evaluate().isNotEmpty,
      );
      await tester.tap(find.text('Try internal API'));
      await _waitFor(
        tester,
        () => find.textContaining('Blocked (attempt 1):').evaluate().isNotEmpty,
      );
      expect(
        find.textContaining('Missing Flax module: @flax/app/admin'),
        findsOneWidget,
      );
      expect(errors, isEmpty);
      expect(adminCalls, 1);
      expect(hostCart.quantity, 1);
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpAndSettle();
    },
  );

  testWidgets('a types dependency cannot activate its missing Dart provider', (
    tester,
  ) async {
    final errors = <Object>[];
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: ConfiguredMiniapp(
            directory: Directory('applications/first'),
            plugins: const [
              FlaxMaterialPlugin(),
              _DeliveryWithoutBindings(),
              FlaxPricesPlugin(),
            ],
            onError: (error, _) => errors.add(error),
          ),
        ),
      ),
    );
    await _waitFor(tester, () => errors.isNotEmpty);
    expect(errors, hasLength(1));
    expect(errors.single.toString(), contains('example.shop/shop'));
    await tester.pumpWidget(const SizedBox.shrink());
    await tester.pumpAndSettle();
  });
}

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

class _DeliveryWithoutBindings extends FlaxPublicSdkPlugin {
  const _DeliveryWithoutBindings();
  @override
  List<FlaxBindingModule> get bindingModules => const [];
}
