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
    final directory = await tester.runAsync(
      () => Directory.systemTemp.createTemp('flax-local-storage-example-'),
    );
    try {
      await tester.runAsync(
        () => app.startApplication(storageDirectory: directory!.path),
      );
      await tester.pumpAndSettle();
      expect(find.text('Stored: 0'), findsNWidgets(3));

      await tester.tap(find.text('Store +1').first);
      await tester.pumpAndSettle();
      expect(find.text('Stored: 1'), findsNWidgets(2));
      expect(find.text('Stored: 0'), findsOneWidget);

      await tester.tap(find.text('Store +1').last);
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
      expect(find.text('Stored: 1'), findsNWidgets(3));

      await tester.tap(find.text('Clear area').first);
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
