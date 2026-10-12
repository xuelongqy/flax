import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flax_test/flax_test.dart';

import '../../.dart_tool/flax/ui/native_widgets_bindings.dart';
import '../../.dart_tool/flax/ui/collection_members_bindings.dart';
import '../fixtures/collection_members.dart';
import '../fixtures/native_widgets.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets('checked casts retain scoped callback leases', (tester) async {
    final type = FlaxTypeRef(
      'object',
      id: collection_membersBindings.types
          .whereType<FlaxObjectBinding>()
          .singleWhere((binding) => binding.id.endsWith('::ShoppingList'))
          .id,
    );
    final callback = FlaxTypeRef(
      'callback',
      callback: FlaxCallbackBinding(
        [
          FlaxCallbackParameter(
            'value',
            type,
            required: true,
            positional: true,
            scoped: true,
          ),
        ],
        const FlaxTypeRef('void'),
        (callback) =>
            (ShoppingList value) => callback.call([value], const {}),
        id: 'test/checked-scope#callback:visit',
        invoke: (value, positional, named) {
          (value as void Function(ShoppingList))(
            positional.single as ShoppingList,
          );
          return null;
        },
        matches: (value) => value is void Function(ShoppingList),
      ),
    );
    final h = OwnedHarness(
      fixture: 'collection_members',
      extra: [
        collection_membersBindings,
        FlaxBindingModule(
          'checked-scope',
          const [],
          moduleId: 'test/checked-scope',
          uiProtocol: flaxBindingVersion,
          requiredCapabilities: const [],
          functions: [
            FlaxFunctionBinding(
              'test/checked-scope#function:visit',
              [FlaxParameter('callback', callback, required: true)],
              const FlaxTypeRef('void'),
              (values) {
                (values['callback'] as void Function(ShoppingList))(
                  ShoppingList()..add('scoped'),
                );
                return null;
              },
            ),
          ],
        ),
      ],
    );
    try {
      await tester.pumpWidget(h.app('collectionMembers'));
      h.execute(
        '__flaxInvokeOperation(__flaxResolveOperation(24, "test/checked-scope#function:visit", "top", "call", ""), 0, collectionMemberHooks.captureScoped)',
      );
      h.execute('collectionMemberHooks.scopedExpired()');
      expect(h.errors, isEmpty);
      await h.finish(tester);
    } finally {
      if (!h.runtime.isDisposed) await h.finish(tester);
    }
  });
  testWidgets(
    'checked Widget, Context and State views preserve native lifetimes',
    (tester) async {
      final h = OwnedHarness(
        fixture: 'native_widgets',
        extra: [native_widgetsBindings],
      );
      final second = OwnedHarness(
        fixture: 'native_widgets',
        extra: [native_widgetsBindings],
      );
      try {
        await tester.pumpWidget(
          Row(
            textDirection: TextDirection.ltr,
            children: [
              Expanded(child: h.app('nativeWidgets')),
              Expanded(child: second.app('nativeWidgets')),
            ],
          ),
        );
        h.execute('nativeWidgets.references()');
        List<WeakReference<NativeCounterState>> captureStates() => [
          for (final state in tester.allStates.whereType<NativeCounterState>())
            WeakReference(state),
        ];
        List<WeakReference<Element>> captureElements() => [
          for (final element in tester.allElements)
            if (element.widget is NativeCounter) WeakReference(element),
        ];
        final states = captureStates();
        final elements = captureElements();
        expect(states, isNotEmpty);
        expect(elements, isNotEmpty);
        h.execute('nativeWidgets.increment()');
        await tester.pump();
        expect(find.text('JS: 1'), findsOneWidget);
        final context = h.runtime.evaluate(
          'nativeWidgets.referenceContext()',
        ) as FlaxJsObject;
        final query = second.runtime.evaluate(
          'nativeWidgets.referenceType',
        ) as FlaxJsFunction;
        try {
          expect(() => query.call([context]), throwsArgumentError);
        } finally {
          context.release();
          query.release();
        }
        h.execute('nativeWidgets.dropContextAlias()');
        await tester.runAsync(() async {
          h.execute(flaxTestJsGarbagePressure);
          await flaxTestCollectDartGarbage();
        });
        expect(h.boolean('nativeWidgets.contextObjectAlive()'), isTrue);
        await tester.pumpWidget(const SizedBox());
        h.execute('nativeWidgets.expiredReferences()');
        await tester.pumpAndSettle();
        await tester.runAsync(() async {
          h.execute(flaxTestJsGarbagePressure);
          await flaxTestCollectDartGarbage();
        });
        expect(states.every((reference) => reference.target == null), isTrue);
        expect(elements.every((reference) => reference.target == null), isTrue);
        expect(h.errors, isEmpty);
        await h.finish(tester);
        await second.finish(tester);
      } finally {
        if (!h.runtime.isDisposed) await h.finish(tester);
        if (!second.runtime.isDisposed) await second.finish(tester);
      }
    },
  );
}
