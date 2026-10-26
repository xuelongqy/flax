import 'package:flax_test/flax_test.dart';

import 'dart:io';

import 'package:flax_local_storage_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';

import 'support/storage_io.dart';

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  testWidgets('persists shared namespaces and isolates other namespaces', (
    tester,
  ) async {
    final previous = WidgetController.hitTestWarningShouldBeFatal;
    WidgetController.hitTestWarningShouldBeFatal = true;
    addTearDown(() => WidgetController.hitTestWarningShouldBeFatal = previous);
    final directory = await tester.runAsync(
      () => Directory.systemTemp.createTemp('flax-local-storage-example-'),
    );
    try {
      await tester.runAsync(
        () => app.startApplication(storageDirectory: directory!.path),
      );
      await tester.pumpAndSettle();
      await flaxTestWaitForViews(tester);
      expect(find.text('Stored: 0'), findsNWidgets(3));

      final first = find.text('Store +1').first;
      await tester.ensureVisible(first);
      await tester.pumpAndSettle();
      await tester.tap(first);
      await tester.pumpAndSettle();
      expect(find.text('Stored: 1'), findsNWidgets(2));
      expect(find.text('Stored: 0'), findsOneWidget);

      final last = find.text('Store +1').last;
      await tester.ensureVisible(last);
      await tester.pumpAndSettle();
      await tester.tap(last);
      await tester.pumpAndSettle();
      expect(find.text('Stored: 1'), findsNWidgets(3));

      await tester.pumpWidget(const SizedBox());
      await tester.pumpAndSettle();
      await flushStorage(tester);
      await closeStorage(tester);

      await tester.runAsync(
        () => app.startApplication(storageDirectory: directory!.path),
      );
      await tester.pumpAndSettle();
      await flaxTestWaitForViews(tester);
      expect(find.text('Stored: 1'), findsNWidgets(3));

      final clear = find.text('Clear area').first;
      await tester.ensureVisible(clear);
      await tester.pumpAndSettle();
      await tester.tap(clear);
      await tester.pumpAndSettle();
      expect(find.text('Stored: 0'), findsNWidgets(2));
      expect(find.text('Stored: 1'), findsOneWidget);
    } finally {
      await tester.pumpWidget(const SizedBox());
      await tester.pumpAndSettle();
      await flushStorage(tester);
      await closeStorage(tester);
      await tester.runAsync(() => directory!.delete(recursive: true));
    }
  });
}
