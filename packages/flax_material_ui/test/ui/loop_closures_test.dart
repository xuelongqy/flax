import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart' show host, registry;
import '../support/runtime_tracker.dart';

void main() {
  testWidgets('bundled loop buttons only update their own Text host', (
    tester,
  ) async {
    final runtime = RuntimeTracker();
    final errors = <Object>[];
    final view = FlaxView(
      plugins: const [FlaxMaterialPlugin()],
      createRuntime: () => runtime,
      source: flaxTestFixtureSource(
        'loop_closures',
        packageName: 'flax_material_ui',
      ),
      sourceUrl: 'loop_closures.js',
      bindings: registry,
      onError: (error, _) => errors.add(error),
    );
    try {
      await tester.pumpWidget(MaterialApp(home: Scaffold(body: view)));
      expect(errors, isEmpty);
      final staticWidget = tester.widget(host('loop-static'));
      final rootWidget = tester.widget(host('loop-root'));
      final handles = runtime.handles;
      expect(runtime.activeSubscriptions, 3);
      final values = [0, 0, 0];
      final rebuilt = <Key?>[];
      debugOnRebuildDirtyWidget = (element, _) {
        if (element.widget is FlaxWidgetHost) {
          rebuilt.add(element.widget.key);
        }
      };
      for (final index in [1, 2, 3, 1]) {
        rebuilt.clear();
        final invalidations = runtime.hostCalls['__flaxInvalidate'] ?? 0;
        await tester.tap(find.text('Add $index'));
        await tester.pump();
        values[index - 1] += index;
        for (var i = 0; i < values.length; i++) {
          expect(find.text('Counter ${i + 1}: ${values[i]}'), findsOneWidget);
        }
        expect(rebuilt, [ValueKey('loop-label-$index')]);
        expect(runtime.hostCalls['__flaxInvalidate'], invalidations + 1);
        expect(runtime.activeSubscriptions, 3);
        expect(runtime.handles, handles + 1);
      }
      expect(
        runtime.handleLabels
            .where((label) => label == '__flaxBindings.invokeCallback')
            .length,
        1,
      );
      expect(tester.widget(host('loop-static')), same(staticWidget));
      expect(tester.widget(host('loop-root')), same(rootWidget));
    } finally {
      debugOnRebuildDirtyWidget = null;
      await flaxTestUnmount(tester);
      await tester.pumpAndSettle();
    }
    expect(errors, isEmpty);
    expect(runtime.isDisposed, isTrue);
    expect(runtime.handlesAtDispose, 0);
    expect(runtime.activeSubscriptions, 0);
  });
}
