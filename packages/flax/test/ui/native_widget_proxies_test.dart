import 'package:flutter_test/flutter_test.dart';

import '../../.dart_tool/flax/ui/native_widgets_bindings.dart';
import '../fixtures/native_widgets.dart';
import '../support/owned_harness.dart';

void main() {
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
