import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart' show host, registry;
import '../support/test_module.dart';
import '../support/runtime_tracker.dart';

class _CountedText extends FlaxWidgetHost {
  _CountedText(this.original, this.counts) : super(original.node);
  final FlaxWidgetHost original;
  final Map<String, int> counts;
  @override
  Widget buildNative(Map<String, Object?> values) {
    final label = '${key ?? values['data']}';
    counts.update(label, (n) => n + 1, ifAbsent: () => 1);
    return original.buildNative(values);
  }
}

class _Duplicate extends FlaxWidgetHost {
  _Duplicate(super.node);
  @override
  Widget buildNative(Map<String, Object?> values) => Row(
    children: [
      Expanded(child: values['child'] as Widget),
      Expanded(child: values['child'] as Widget),
    ],
  );
}

void main() {
  testWidgets(
    'construction cost and shared descriptors preserve mounted ownership',
    (tester) async {
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      final counts = <String, int>{};
      final bindings = FlaxBindingRegistry([
        for (final module in registry.modules)
          FlaxBindingModule(
            module.name,
            [
              for (final type in module.types)
                if (type is FlaxWidgetBinding &&
                    type.id == 'flax.core/flutter#type:Text')
                  FlaxWidgetBinding(
                    type.id,
                    type.constructors,
                    (node) => _CountedText(type.createHost(node), counts),
                    methods: type.methods,
                  )
                else
                  type,
            ],
            moduleId: module.moduleId,
            uiProtocol: module.uiProtocol,
            requiredCapabilities: module.requiredCapabilities,
            functions: module.functions,
          ),
        testBindingModule('test', [
          FlaxWidgetBinding('test:Duplicate', {
            '': [
              const FlaxParameter(
                'child',
                FlaxTypeRef('widget'),
                required: true,
              ),
            ],
          }, _Duplicate.new),
        ]),
      ]);
      final view = FlaxView(
        createRuntime: () => runtime,
        source: flaxTestFixtureSource('construction'),
        bindings: bindings,
        onError: (error, _) => errors.add(error),
      );
      await tester.pumpWidget(MaterialApp(home: Scaffold(body: view)));
      expect(errors, isEmpty);
      expect(find.text('Static'), findsNWidgets(2));
      final elements = tester.elementList(host('content')).toList();
      expect(elements, hasLength(2));
      expect(elements[0], isNot(same(elements[1])));
      final states = tester.stateList(host('content')).toList();
      expect(states[0], isNot(same(states[1])));
      final initialCounts = Map<String, int>.from(counts);
      final staticKey = const ValueKey('static').toString();
      final dynamicKey = const ValueKey('count').toString();
      // Static validation is reused by both mounts; dynamic inputs are mounted separately.
      expect(counts[staticKey], 1);
      expect(counts[dynamicKey], 3);
      final subscriptions = runtime.activeSubscriptions;
      expect(subscriptions, 6);
      final rebuilt = <Key?>[];
      debugOnRebuildDirtyWidget = (element, _) {
        if (element.widget is FlaxWidgetHost) rebuilt.add(element.widget.key);
      };
      addTearDown(() => debugOnRebuildDirtyWidget = null);
      final result = runtime.evaluate(
        'construction.count.value = 1; construction.count.value = 2; construction.count.value = 3',
      );
      if (result is FlaxJsObject) result.release();
      await tester.pump();
      expect(find.text('Count: 3'), findsNWidgets(2));
      expect(counts[staticKey], initialCounts[staticKey]);
      expect(counts[dynamicKey], initialCounts[dynamicKey]! + 2);
      expect(rebuilt, [const ValueKey('count'), const ValueKey('count')]);
      expect(runtime.activeSubscriptions, subscriptions);
      expect(tester.elementList(host('content')).toList(), elements);
      await tester.tap(find.text('Local: 0').first);
      await tester.pump();
      expect(find.text('Local: 1'), findsOneWidget);
      expect(find.text('Local: 0'), findsOneWidget);
      final replacement = runtime.evaluate(
        'construction.callback.value = null',
      );
      if (replacement is FlaxJsObject) replacement.release();
      await tester.pump();
      expect(
        tester
            .widgetList<TextButton>(
              find.descendant(
                of: host('button'),
                matching: find.byType(TextButton),
              ),
            )
            .every((button) => button.onPressed == null),
        isTrue,
      );
      expect(errors, isEmpty);
      final handles = runtime.handles;
      final calls = Map<String, int>.from(runtime.hostCalls);
      final baseHandles = runtime.handleLabels
          .where((s) => s == 'flax:base')
          .length;
      expect(baseHandles, 1);
      expect(
        runtime.handleLabels
            .where((label) => label == '__flaxBindings.invokeCallback')
            .length,
        1,
      );
      final componentStateHelpers = runtime.handleLabels
          .where((label) => label == '__flaxBindings.tryComponentStateId')
          .length;
      expect(componentStateHelpers, 1);
      expect(
        handles - baseHandles - componentStateHelpers,
        lessThanOrEqualTo(32),
      );
      expect(calls['__flaxBaseCall'], 1); // Install the base clock origin once.
      expect(calls['__flaxMount'], 1);
      expect(calls['__flaxInvalidate'], 9);
      expect(calls.keys.toSet(), {
        '__flaxMount',
        '__flaxInvalidate',
        '__flaxCreateObject',
        '__flaxBaseCall',
      });
      await tester.pumpWidget(const SizedBox());
      await tester.pumpAndSettle();
      expect(runtime.handlesAtDispose, 0);
      expect(runtime.activeSubscriptions, 0);
      expect(runtime.pendingFutures, 0);
      // ignore: avoid_print
      print(
        'Construction cost: initial=$initialCounts; final=$counts; '
        '$handles handles before unmount; host calls=$calls; '
        '$subscriptions mounted subscriptions; 0 handles at disposal.',
      );
    },
  );
}
