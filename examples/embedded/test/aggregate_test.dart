import 'package:flax_embedded/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import 'support/runtime_tracker.dart';

void main() {
  testWidgets(
    'plugins select the host modules available to the JS application',
    (tester) async {
      final source = await _loadSource(tester);
      final errors = <Object>[];

      await tester.pumpWidget(
        app.EmbeddedApp(
          source: source,
          plugins: const [],
          onFlaxError: (error, _) => errors.add(error),
        ),
      );
      await tester.pump();

      expect(errors, isNotEmpty);
      expect(errors.single.toString(), contains('@flax/flutter/material'));

      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pump();
    },
  );

  testWidgets(
    'host modules are shared and a recreated view gets a clean session',
    (tester) async {
      final source = await _loadSource(tester);
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
      await tester.pump();
      expect(find.text('Count: 1'), findsOneWidget);

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

      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pump();
      await _pumpUntilDisposed(tester, runtimes.last);
      await tester.pump();
      expect(runtimes.last.handlesAtDispose, 0);
    },
  );
}

Future<String> _loadSource(WidgetTester tester) async =>
    (await tester.runAsync(app.loadAggregateSource))!;

Future<void> _pumpUntilFound(WidgetTester tester, Finder finder) async {
  for (var i = 0; i < 200 && finder.evaluate().isEmpty; i++) {
    await tester.pump(const Duration(milliseconds: 10));
  }
  expect(finder, findsOneWidget);
}

Future<void> _pumpUntilDisposed(
  WidgetTester tester,
  RuntimeTracker runtime,
) async {
  for (var i = 0; i < 200 && !runtime.isDisposed; i++) {
    await tester.pump(const Duration(milliseconds: 10));
  }
  expect(runtime.isDisposed, isTrue);
}
