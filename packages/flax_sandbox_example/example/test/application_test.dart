import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_example_support/flax_example_support.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_sandbox_example/flax_sandbox_example.dart';
import 'package:flax_sandbox_playground/main.dart' as app;
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:path_provider_platform_interface/path_provider_platform_interface.dart';

class _TestPaths extends PathProviderPlatform {
  _TestPaths(this.directory);
  final String directory;
  @override
  Future<String?> getApplicationSupportPath() async => directory;
}

void main({bool nativePaths = false}) {
  testWidgets(
    'installed packages, files, Image.file and storage survive configuration reloads',
    (tester) async {
      if (nativePaths) {
        // Avoid a real macOS IME overwriting injected multi-field test input.
        tester.testTextInput.register();
        addTearDown(tester.testTextInput.unregister);
      }
      tester.view.physicalSize = const Size(1200, 1200);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      final directory = (await tester.runAsync(
        () => Directory.systemTemp.createTemp('flax-sandbox-example-'),
      ))!;
      if (!nativePaths) {
        final previous = PathProviderPlatform.instance;
        PathProviderPlatform.instance = _TestPaths('${directory.path}/support');
        addTearDown(() => PathProviderPlatform.instance = previous);
      }
      await tester.runAsync(
        () => app.startApplication(demoDirectory: directory.path),
      );
      await _ready(tester, 1);
      final installedA = _bundlePath(tester, 'A');
      final installedB = _bundlePath(tester, 'B');
      expect(installedA, matches(RegExp(r'/apps/[a-f0-9]{64}/bundle$')));
      expect(installedA, isNot(installedB));
      final receipts = (await tester.runAsync(
        () async => [
          for (final path in [installedA, installedB])
            jsonDecode(
              await File('${Directory(path).parent.path}/.flax-install.json')
                  .readAsString(),
            ),
        ],
      ))!;
      expect(receipts[0]['digest'], receipts[1]['digest']);
      expect(receipts[0]['digest'], matches(RegExp(r'^[a-f0-9]{64}$')));
      final receiptTime = await tester.runAsync(
        () =>
            File('${Directory(installedA).parent.path}/.flax-install.json')
                .lastModified(),
      );
      expect(find.text('Stored A: 0'), findsOneWidget);
      expect(find.text('Stored B: 0'), findsOneWidget);

      await _edit(tester, 'sandbox-note-A', 'Private A');
      await _tap(tester, 'sandbox-save-A');
      await _until(
        tester,
        () => find.text('File A: Private A').evaluate().isNotEmpty,
      );
      await _edit(tester, 'sandbox-note-B', 'Private B');
      await _tap(tester, 'sandbox-save-B');
      await _until(
        tester,
        () => find.text('File B: Private B').evaluate().isNotEmpty,
      );
      for (final probe in ['host-read', 'host-write', 'peer-read']) {
        await _tap(tester, 'sandbox-$probe-A');
        await _until(
          tester,
          () => find
              .textContaining('A: FLAX_SANDBOX_DENIED')
              .evaluate()
              .isNotEmpty,
        );
      }
      expect(
        await tester.runAsync(
          () =>
              File('${directory.path}/examples/host/host-note.txt')
                  .readAsString(),
        ),
        'Host-only note',
      );
      await _tap(tester, 'sandbox-write-image-A');
      await _until(
        tester,
        () => tester
            .widgetList<RawImage>(find.byType(RawImage))
            .any((image) => image.image != null),
      );
      expect(find.byKey(const ValueKey('sandbox-image-A')), findsWidgets);
      await _tap(tester, 'sandbox-store-A');
      await _until(
        tester,
        () => find.text('Stored A: 1').evaluate().isNotEmpty,
      );
      expect(find.text('Stored B: 0'), findsOneWidget);

      // Same appId and namespace deliberately share data in fresh sessions.
      await _edit(tester, 'sandbox-app-b', 'example.notes.a');
      await _tap(tester, 'sandbox-reload');
      await _ready(tester, 2);
      expect(_bundlePath(tester, 'A'), installedA);
      expect(_bundlePath(tester, 'B'), installedA);
      expect(
        await tester.runAsync(
          () =>
              File('${Directory(installedA).parent.path}/.flax-install.json')
                  .lastModified(),
        ),
        receiptTime,
      );
      expect(find.text('File B: Private A'), findsOneWidget);
      expect(find.text('Stored A: 1'), findsOneWidget);
      expect(find.text('Stored B: 1'), findsOneWidget);
      await _tap(tester, 'sandbox-store-B');
      await _until(
        tester,
        () => find.text('Stored A: 2').evaluate().isNotEmpty,
      );
      expect(find.text('Stored B: 2'), findsOneWidget);

      // Changing the configured parent switches both apps to a fresh data area.
      await _edit(tester, 'sandbox-app-b', 'example.notes.b');
      await _edit(
        tester,
        'sandbox-directory',
        '${directory.path}/alternate-apps',
      );
      await _tap(tester, 'sandbox-reload');
      await _ready(tester, 3);
      expect(find.text('Stored A: 0'), findsOneWidget);
      expect(find.text('Stored B: 0'), findsOneWidget);
      expect(find.text('File A: (no file yet)'), findsOneWidget);
      await _edit(tester, 'sandbox-directory', '${directory.path}/apps');
      await _tap(tester, 'sandbox-reload');
      await _ready(tester, 4);
      expect(_bundlePath(tester, 'A'), installedA);
      expect(_bundlePath(tester, 'B'), installedB);
      expect(find.text('Stored A: 2'), findsOneWidget);
      expect(find.text('Stored B: 0'), findsOneWidget);
      expect(find.text('File A: Private A'), findsOneWidget);
      expect(find.text('File B: Private B'), findsOneWidget);

      // A draft switch cannot weaken the already-running sessions.
      await _tap(tester, 'sandbox-enabled');
      await _tap(tester, 'sandbox-host-read-A');
      await _until(
        tester,
        () =>
            find.textContaining('A: FLAX_SANDBOX_DENIED').evaluate().isNotEmpty,
      );
      await _tap(tester, 'sandbox-reload');
      await _ready(tester, 5);
      expect(_bundlePath(tester, 'A'), installedA);
      expect(_bundlePath(tester, 'B'), installedB);
      expect(find.text('App A · ordinary mode'), findsOneWidget);
      await _tap(tester, 'sandbox-host-read-A');
      await _until(
        tester,
        () => find.textContaining('A: host read allowed').evaluate().isNotEmpty,
      );
      await _tap(tester, 'sandbox-host-write-A');
      await _until(
        tester,
        () => find.text('A: host write allowed').evaluate().isNotEmpty,
      );
      expect(
        await tester.runAsync(
          () =>
              File('${directory.path}/examples/host/host-note.txt')
                  .readAsString(),
        ),
        'Written by A',
      );
      await _tap(tester, 'sandbox-store-A');
      await _until(
        tester,
        () => find.text('Stored B: 1').evaluate().isNotEmpty,
      );
      await _tap(tester, 'sandbox-write-image-B');
      await _until(
        tester,
        () => tester
            .widgetList<RawImage>(find.byType(RawImage))
            .any((image) => image.image != null),
      );

      tester.view.physicalSize = const Size(390, 844);
      await tester.pumpAndSettle();
      expect(find.text('Stored A: 1'), findsOneWidget);
      expect(find.text('Stored B: 1'), findsOneWidget);
      expect(tester.takeException(), isNull);

      // Reenter before the departed page's queued closing work has drained.
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpWidget(
        FlaxExampleApp(
          title: 'Sandbox reentry',
          child: FlaxSandboxExample(demoDirectory: directory.path),
        ),
      );
      await _ready(tester, 1);
      expect(find.text('Stored A: 2'), findsOneWidget);
      expect(find.text('Stored B: 0'), findsOneWidget);
      expect(find.text('File A: Private A'), findsOneWidget);
      await flaxTestUnmount(tester);
      await _io(tester, FlaxSandboxExample.pendingLifecycle);
      await _io(tester, FlaxLocalStoragePlugin.shutdown());
      for (final parent in ['apps', 'alternate-apps']) {
        for (final id in ['example.notes.a', 'example.notes.b']) {
          final sandbox = (await tester.runAsync(
            () => FlaxSandbox.create(
              appId: id,
              appsDirectory: Directory('${directory.path}/$parent'),
            ),
          ))!;
          await _io(tester, FlaxLocalStoragePlugin.shutdown(sandbox: sandbox));
        }
      }
      await tester.runAsync(() => directory.delete(recursive: true));
    },
  );
}

String _bundlePath(WidgetTester tester, String label) => tester
    .widget<Text>(find.byKey(ValueKey('sandbox-bundle-$label')))
    .data!
    .substring('Bundle $label: '.length);

Future<void> _ready(WidgetTester tester, int generation) async {
  await _until(
    tester,
    () => find.text('Loaded generation $generation').evaluate().isNotEmpty,
  );
  await flaxTestWaitForViews(tester);
  await _until(
    tester,
    () =>
        find.text('Ready A').evaluate().isNotEmpty &&
        find.text('Ready B').evaluate().isNotEmpty,
  );
}

Future<void> _tap(WidgetTester tester, String id) async {
  final finder = find.byKey(ValueKey(id)).last;
  await tester.ensureVisible(finder);
  await tester.tap(finder);
  await tester.pumpAndSettle();
}

Future<void> _edit(WidgetTester tester, String id, String value) async {
  final finder = find.byKey(ValueKey(id)).last;
  await tester.ensureVisible(finder);
  await tester.enterText(finder, value);
  await tester.pumpAndSettle();
  final field = find.descendant(
    of: finder,
    matching: find.byType(EditableText),
    matchRoot: true,
  );
  expect(tester.widget<EditableText>(field).controller.text, value);
}

Future<void> _until(WidgetTester tester, bool Function() done) async {
  for (var i = 0; i < 500 && !done(); i++) {
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
    await tester.pump(const Duration(milliseconds: 10));
  }
  expect(
    done(),
    isTrue,
    reason: tester
        .widgetList<Text>(find.byType(Text))
        .map((text) => text.data)
        .join('\n'),
  );
}

Future<void> _io(WidgetTester tester, Future<void> future) async {
  var done = false;
  final result = future.whenComplete(() => done = true);
  await _until(tester, () => done);
  await result;
}
