import 'dart:io';

import 'package:flax_embedded/storage.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'storage_io.dart';

Future<void> storageScenario(WidgetTester t) async {
  final directory = await t.runAsync(
    () => Directory.systemTemp.createTemp('flax-storage-example-'),
  );
  try {
    await t.runAsync(
      () => FlaxLocalStoragePlugin.initialize(directory: directory!.path),
    );
    final source = await t.runAsync(
      () => rootBundle.loadString('assets/pages.js'),
    );
    Widget app() => MaterialApp(home: StorageDemo(source: source!));
    await t.pumpWidget(app());
    await t.pumpAndSettle();
    expect(find.text('Stored: 0'), findsNWidgets(3));
    await t.tap(find.widgetWithText(TextButton, 'Store +1').first);
    await t.pumpAndSettle();
    expect(find.text('Stored: 1'), findsNWidgets(2));
    expect(find.text('Stored: 0'), findsOneWidget);
    await t.tap(find.widgetWithText(TextButton, 'Store +1').last);
    await t.pumpAndSettle();
    expect(find.text('Stored: 1'), findsNWidgets(3));
    await t.pumpWidget(const SizedBox());
    await t.pumpAndSettle();
    await flushStorage(t);
    await closeStorage(t);
    await t.runAsync(
      () => FlaxLocalStoragePlugin.initialize(directory: directory!.path),
    );
    await t.pumpWidget(app());
    await t.pumpAndSettle();
    expect(find.text('Stored: 1'), findsNWidgets(3));
    await t.tap(find.widgetWithText(TextButton, 'Clear area').first);
    await t.pumpAndSettle();
    expect(find.text('Stored: 0'), findsNWidgets(2));
    expect(find.text('Stored: 1'), findsOneWidget);
  } finally {
    await t.pumpWidget(const SizedBox());
    await t.pumpAndSettle();
    await flushStorage(t);
    await closeStorage(t);
    await t.runAsync(() => directory!.delete(recursive: true));
  }
}
