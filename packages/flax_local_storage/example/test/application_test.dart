import 'dart:io';

import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_local_storage_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('starts the flax_local_storage package example', (tester) async {
    final directory = await tester.runAsync(
      () => Directory.systemTemp.createTemp('flax-local-storage-example-'),
    );
    await tester.runAsync(
      () => app.startApplication(storageDirectory: directory!.path),
    );
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 20));
    expect(find.text('Shared 1'), findsOneWidget);
    expect(find.text('Shared 2'), findsOneWidget);
    expect(find.text('Isolated'), findsOneWidget);
    expect(find.text('Stored: 0'), findsNWidgets(3));
    await tester.pumpWidget(const SizedBox());
    await tester.pump();
    await tester.pump(const Duration(milliseconds: 20));
    await tester.runAsync(FlaxLocalStoragePlugin.shutdown);
    await tester.runAsync(() => directory!.delete(recursive: true));
  });
}
