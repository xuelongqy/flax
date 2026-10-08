import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
// Internal counts verify reclamation without an application GC API.
// ignore: implementation_imports
import 'package:flax/src/native/native_runtime.dart';

import '../../.dart_tool/flax/ui/native_widgets_bindings.dart';
import '../fixtures/native_widgets.dart';
import '../support/owned_harness.dart';

@pragma('vm:never-inline')
Future<(Text, WeakReference<FlaxJsRuntime>)> _closedConfiguration(
  WidgetTester tester,
) async {
  final retained = <Text>[];
  final harness = OwnedHarness(
    fixture: 'native_widgets',
    extra: [
      native_widgetsBindings,
      FlaxBindingModule(
        'configuration-test',
        const [],
        moduleId: 'test/configuration',
        uiProtocol: flaxBindingVersion,
        requiredCapabilities: const [],
        functions: [
          FlaxFunctionBinding(
            'test/configuration#function:keep',
            const [
              FlaxParameter(
                'widget',
                FlaxTypeRef('widget', id: 'flax.core/flutter#type:Text'),
                required: true,
              ),
            ],
            const FlaxTypeRef('void'),
            (arguments) {
              retained.add(arguments['widget'] as Text);
              return null;
            },
          ),
        ],
      ),
    ],
  );
  try {
    await tester.pumpWidget(harness.app('nativeWidgets'));
    harness.execute(
      '__flaxTopLevel(22, "test/configuration#function:keep", nativeWidgets.plain())',
    );
    expect(retained, hasLength(1));
    expect(harness.errors, isEmpty);
  } finally {
    await harness.finish(tester);
  }
  return (retained.single, WeakReference(harness.runtime));
}

@pragma('vm:never-inline')
bool _runtimeAlive(WeakReference<FlaxJsRuntime> runtime) =>
    runtime.target != null;

@pragma('vm:never-inline')
(WeakReference<Widget>, WeakReference<State>) _weakNative(WidgetTester tester) {
  final finder = find.byWidgetPredicate((widget) => widget is NativeCounter);
  return (
    WeakReference(tester.widget(finder)),
    WeakReference(tester.state(finder)),
  );
}

void main() {
  testWidgets('closed Widget configurations do not retain their runtime', (
    tester,
  ) async {
    final (widget, runtime) = await _closedConfiguration(tester);
    // A separate live session schedules ordinary idle joint GC. Closing the last
    // runtime stops that scheduler; transient buffers need not collect old space.
    final probe = FlaxEngine.createRuntime();
    try {
      probe.registerHostFunction('keep', (_, _) => const FlaxJsUndefined());
      await tester.runAsync(() async {
        for (var i = 0; i < 80 && _runtimeAlive(runtime); i++) {
          await Future<void>.delayed(const Duration(milliseconds: 100));
        }
      });
      expect(_runtimeAlive(runtime), isFalse);
      expect(widget.data, 'retained native configuration');
    } finally {
      probe.dispose();
    }
  });
  testWidgets('1000 native Widget and State mount cycles return to baseline', (
    tester,
  ) async {
    final harness = OwnedHarness(
      fixture: 'native_widgets',
      extra: [native_widgetsBindings],
    );
    final weak = <(WeakReference<Widget>, WeakReference<State>)>[];
    try {
      await tester.pumpWidget(harness.app('nativeGc'));
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 1500)),
      );
      final runtime = harness.runtime.inner as FlaxNativeJsRuntime;
      final baseline = runtime.bridgeCellCount;
      for (var i = 0; i < 1000; i++) {
        await tester.pumpWidget(harness.app('nativeGc'));
        weak.add(_weakNative(tester));
        await tester.pumpWidget(const SizedBox.shrink());
        if (i % 50 == 0) {
          await tester.runAsync(() => Future<void>.delayed(Duration.zero));
        }
      }
      expect(harness.number('gcDisposals()'), 1001);
      await tester.runAsync(() async {
        for (var i = 0; i < 80; i++) {
          await Future<void>.delayed(const Duration(milliseconds: 100));
          runtime.drainMicrotasks();
          if (weak.every(
                (pair) => pair.$1.target == null && pair.$2.target == null,
              ) &&
              runtime.bridgeCellCount <= baseline) {
            return;
          }
        }
        expect(
          weak.where(
            (pair) => pair.$1.target != null || pair.$2.target != null,
          ),
          isEmpty,
        );
        expect(runtime.bridgeCellCount, lessThanOrEqualTo(baseline));
      });
      expect(harness.errors, isEmpty);
    } finally {
      await harness.finish(tester);
    }
  });
  testWidgets(
    'Flutter owns native Widget and State cycles through unmount and GC',
    (tester) async {
      final harness = OwnedHarness(
        fixture: 'native_widgets',
        extra: [native_widgetsBindings],
      );
      try {
        await tester.pumpWidget(harness.app('nativeGc'));
        await tester.pumpAndSettle();
        expect(find.text('private GC state'), findsOneWidget);
        final (widget, state) = _weakNative(tester);
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 1200)),
        );
        expect(widget.target, isNotNull);
        expect(state.target, isNotNull);
        expect(
          harness.boolean(
            'gcWidget.deref() !== undefined && gcState.deref() !== undefined',
          ),
          isTrue,
        );
        await tester.pumpWidget(const SizedBox.shrink());
        await tester.pumpAndSettle();
        expect(harness.number('gcDisposals()'), 1);
        await tester.runAsync(() async {
          for (var i = 0; i < 80; i++) {
            await Future<void>.delayed(const Duration(milliseconds: 100));
            harness.runtime.drainMicrotasks();
            if (widget.target == null &&
                state.target == null &&
                harness.boolean(
                  'gcWidget.deref() === undefined && gcState.deref() === undefined',
                )) {
              return;
            }
          }
          expect(widget.target, isNull);
          expect(state.target, isNull);
          expect(
            harness.boolean(
              'gcWidget.deref() === undefined && gcState.deref() === undefined',
            ),
            isTrue,
          );
        });
        expect(harness.errors, isEmpty);
      } finally {
        await harness.finish(tester);
      }
    },
  );
  testWidgets(
    'generated native Widget proxies preserve types and Flutter lifecycles',
    (tester) async {
      final harness = OwnedHarness(
        fixture: 'native_widgets',
        extra: [native_widgetsBindings],
      );
      try {
        await tester.pumpWidget(harness.app('nativeWidgets'));
        await tester.pumpAndSettle();
        expect(find.text('Title: native'), findsOneWidget);
        expect(find.text('Label'), findsOneWidget);
        expect(find.text('0'), findsOneWidget);
        expect(find.text('JS: 0'), findsOneWidget);
        expect(harness.number('nativeWidgets.created()'), 1);
        expect(harness.string('nativeWidgets.title.data'), 'Title: native');
        expect(harness.boolean('Object.isFrozen(nativeWidgets.title)'), isTrue);
        harness.execute('nativeWidgets.increment()');
        await tester.pump();
        expect(find.text('JS: 1'), findsOneWidget);
        expect(find.text('child'), findsOneWidget);
        expect(
          find.byWidgetPredicate((widget) => widget is NativeCounter),
          findsNWidgets(2),
        );
        expect(
          find.byWidgetPredicate((widget) => widget is NativeBox),
          findsOneWidget,
        );
        expect(harness.number('nativeWidgets.builds()'), 1);
        expect(
          harness.boolean(
            'nativeWidgets.calls.text(() => nativeWidgets.title) === nativeWidgets.title',
          ),
          isTrue,
        );
        harness.execute('nativeWidgets.exercise()');
        await tester.pumpAndSettle();
        expect(harness.boolean('nativeWidgets.asynchronous()'), isTrue);
        expect(harness.number('nativeWidgets.renderCreates()'), 1);
        harness.execute('nativeWidgets.replace()');
        await tester.pumpAndSettle();
        expect(find.text('updated'), findsOneWidget);
        expect(harness.number('nativeWidgets.renderCreates()'), 1);
        expect(harness.number('nativeWidgets.renderUpdates()'), 1);
        expect(harness.number('nativeWidgets.notifications()'), 1);
        expect(harness.number('nativeWidgets.stateUpdates()'), 1);
        expect(harness.number('nativeWidgets.created()'), 1);
        expect(find.text('JS: 1'), findsOneWidget);
        expect(harness.errors, isEmpty);
        await tester.pumpWidget(const SizedBox.shrink());
        await tester.pump();
        expect(harness.number('nativeWidgets.disposed()'), 1);
        expect(harness.number('nativeWidgets.renderUnmounts()'), 1);
        await tester.pumpWidget(harness.app('twoCounters'));
        await tester.pumpAndSettle();
        expect(find.text('JS: 0'), findsNWidgets(2));
        expect(harness.number('nativeWidgets.created()'), 3);
        await tester.pumpWidget(const SizedBox.shrink());
        await tester.pump();
        expect(harness.number('nativeWidgets.disposed()'), 3);
      } finally {
        await harness.finish(tester);
      }
    },
  );
  testWidgets(
    'native State reuse is rejected and failed dispose is cleaned up',
    (tester) async {
      final reused = OwnedHarness(
        fixture: 'native_widgets',
        extra: [native_widgetsBindings],
      );
      try {
        await tester.pumpWidget(reused.app('nativeReuse'));
        await tester.pumpAndSettle();
        expect(
          reused.errors.map((error) => '$error').join(),
          contains('fresh State'),
        );
      } finally {
        await reused.finish(tester);
      }
      final missing = OwnedHarness(
        fixture: 'native_widgets',
        extra: [native_widgetsBindings],
      );
      try {
        await tester.pumpWidget(missing.app('nativeBadDispose'));
        await tester.pumpAndSettle();
        expect(missing.errors, isEmpty);
        await tester.pumpWidget(const SizedBox.shrink());
        await tester.pump();
        expect(
          missing.errors.map((error) => '$error').join(),
          contains('super.dispose'),
        );
      } finally {
        await missing.finish(tester);
      }
    },
  );
}
