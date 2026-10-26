import 'package:flax_test/flax_test.dart';

import 'dart:io';

import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_local_storage_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets(
    'storage views share saved values, isolate areas and preserve drafts',
    (tester) async {
      final directory = await tester.runAsync(
        () => Directory.systemTemp.createTemp('flax-local-storage-example-'),
      );
      await tester.runAsync(
        () => app.startApplication(storageDirectory: directory!.path),
      );
      await tester.pumpAndSettle();
      await flaxTestWaitForViews(tester);
      expect(find.text('Shared 1'), findsOneWidget);
      expect(find.text('Shared 2'), findsOneWidget);
      expect(find.text('Isolated'), findsOneWidget);
      expect(find.text('Stored: 0'), findsNWidgets(3));
      await _tap(tester, find.text('Store +1').first);
      expect(find.text('Stored: 1'), findsNWidgets(2));
      expect(find.text('Stored: 0'), findsOneWidget);

      final fields = find.byType(EditableText);
      await tester.ensureVisible(fields.first);
      await tester.enterText(fields.first, 'An unsaved draft');
      await _tap(tester, find.text('Store +1').at(1));
      expect(find.text('Stored: 2'), findsNWidgets(2));
      expect(
        tester.widget<EditableText>(fields.first).controller.text,
        'An unsaved draft',
      );
      await _tap(tester, find.text('Save note').first);
      expect(
        tester.widget<EditableText>(fields.at(1)).controller.text,
        'An unsaved draft',
      );
      expect(
        tester.widget<EditableText>(fields.at(2)).controller.text,
        isEmpty,
      );
      await _io(tester, FlaxLocalStoragePlugin.flush());
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpAndSettle();
      await _io(tester, FlaxLocalStoragePlugin.shutdown());
      await tester.runAsync(() => directory!.delete(recursive: true));
    },
  );
}

Future<void> _tap(WidgetTester tester, Finder finder) async {
  await tester.ensureVisible(finder);
  await tester.tap(finder);
  await tester.pumpAndSettle();
}

Future<void> _io(WidgetTester tester, Future<void> future) async {
  var done = false;
  final result = future.whenComplete(() => done = true);
  for (var i = 0; i < 200 && !done; i++) {
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
    await tester.pump();
  }
  expect(done, isTrue);
  await result;
}
