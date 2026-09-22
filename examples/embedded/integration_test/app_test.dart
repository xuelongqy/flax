import 'package:flax_embedded/main.dart' as app;
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

import '../test/support/runtime_tracker.dart';

void main() {
  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  binding.framePolicy = LiveTestWidgetsFlutterBindingFramePolicy.benchmarkLive;

  testWidgets(
    'modules compose once and a recreated view starts a clean session',
    (tester) async {
      final source = (await tester.runAsync(app.loadAggregateSource))!;
      final runtimes = <RuntimeTracker>[];

      await tester.pumpWidget(
        app.EmbeddedApp(
          source: source,
          createRuntime: () {
            final runtime = RuntimeTracker();
            runtimes.add(runtime);
            return runtime;
          },
        ),
      );
      await _pumpUntilFound(tester, find.text('Host modules shared'));
      expect(runtimes, hasLength(1));
      expect(find.text('Count: 0'), findsOneWidget);

      await tester.tap(find.text('Increment JS'));
      await _pumpUntilFound(tester, find.text('Count: 1'));

      await tester.tap(find.text('Unmount Flax'));
      await tester.pump();
      await _pumpUntilDisposed(tester, runtimes.first);
      expect(find.text('Flax view unmounted'), findsOneWidget);
      expect(runtimes.first.handlesAtDispose, 0);

      await tester.tap(find.text('Mount Flax'));
      await _pumpUntilFound(tester, find.text('Host modules shared'));
      expect(runtimes, hasLength(2));
      expect(find.text('Count: 0'), findsOneWidget);
      expect(runtimes.first.isDisposed, isTrue);
      expect(runtimes.last.isDisposed, isFalse);

      binding.reportData = {
        'scenario': 'embedded-module-aggregate',
        'moduleComposition': true,
        'sharedHostModules': true,
        'sessionRecreation': true,
        'completed': true,
      };
    },
  );
}

Future<void> _pumpUntilFound(WidgetTester tester, Finder finder) async {
  for (var i = 0; i < 500 && finder.evaluate().isEmpty; i++) {
    await tester.pump(const Duration(milliseconds: 10));
  }
  expect(finder, findsOneWidget);
}

Future<void> _pumpUntilDisposed(
  WidgetTester tester,
  RuntimeTracker runtime,
) async {
  for (var i = 0; i < 500 && !runtime.isDisposed; i++) {
    await tester.pump(const Duration(milliseconds: 10));
  }
  expect(runtime.isDisposed, isTrue);
}
