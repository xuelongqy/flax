import 'package:flax/flax.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flutter/services.dart';

import 'dart:io';

import 'package:flax_standalone/main.dart' as app;
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

Future<void> applicationScenario(WidgetTester t) async {
  final storageDirectory = await t.runAsync(
    () => Directory.systemTemp.createTemp('flax-standalone-storage-'),
  );
  FlaxJsRuntime? baseRuntime;
  final source = await t.runAsync(() => rootBundle.loadString('assets/app.js'));
  final moduleAssets = await t.runAsync(
    () => FlaxModuleAssets.load(
      bundle: rootBundle,
      manifest: 'assets/flax_modules/modules.json',
    ),
  );
  Flax.moduleAssets = moduleAssets!;
  await t.pumpWidget(
    FlaxView(
      createRuntime: () => baseRuntime = app.createRuntime(),
      source: source!,
      bindings: app.bindings,
      plugins: [const FlaxMaterialPlugin()],
    ),
  );
  await t.pumpAndSettle();
  expect(
    (baseRuntime!.evaluate(r'''
    (() => {
      const blob = new Blob(['base']); const file = new File([blob], 'base.txt');
      const form = new FormData(); form.append('file', file);
      return typeof fetch === 'undefined' && typeof Headers === 'undefined' &&
        typeof Request === 'undefined' && typeof Response === 'undefined' &&
        typeof localStorage === 'undefined' && typeof WebSocket === 'undefined' && typeof MessageEvent === 'function' &&
        form.get('file') === file && blob.size === 4 &&
        blob.stream() instanceof ReadableStream &&
        new TextEncoderStream().readable instanceof ReadableStream;
    })()
  ''') as FlaxJsBoolean).value,
    isTrue,
  );
  await t.pumpWidget(const SizedBox());
  await t.pumpAndSettle();
  expect(baseRuntime!.isDisposed, isTrue);
  await t.runAsync(
    () => app.startApplication(storageDirectory: storageDirectory!.path),
  );
  await _pumpUntilFound(t, find.text('Count: 0'));
  expect(find.byType(MaterialApp), findsOneWidget);
  expect(find.byType(Navigator), findsOneWidget);
  expect(find.text('Count: 0'), findsOneWidget);
  final previousOverrides = HttpOverrides.current;
  HttpOverrides.global = null;
  final server = await t.runAsync(() async {
    final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    server.listen((request) async {
      if (WebSocketTransformer.isUpgradeRequest(request)) {
        final socket = await WebSocketTransformer.upgrade(
          request,
          compression: CompressionOptions.compressionOff,
        );
        socket.listen(socket.add, onError: (Object _) {});
        return;
      }
      request.response.headers.contentType = ContentType.json;
      request.response.write('{"message":"Local Fetch verified"}');
      await request.response.close();
    });
    return server;
  });
  try {
    await t.pumpWidget(const SizedBox());
    await _pumpApplicationFrame(t);
    await t.runAsync(
      () => app.startApplication(
        apiBaseUrl: 'http://127.0.0.1:${server!.port}/',
        storageDirectory: storageDirectory!.path,
      ),
    );
    await _pumpUntilFound(t, find.text('Count: 0'));
    await t.tap(find.widgetWithText(TextButton, 'Fetch status'));
    for (
      var i = 0;
      i < 500 && find.text('Local Fetch verified').evaluate().isEmpty;
      i++
    ) {
      await t.pump(const Duration(milliseconds: 10));
      await t.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 10)),
      );
    }
    expect(find.text('Local Fetch verified'), findsOneWidget);
    await t.tap(find.widgetWithText(TextButton, 'WebSocket echo'));
    for (
      var i = 0;
      i < 500 && find.text('Local WebSocket verified').evaluate().isEmpty;
      i++
    ) {
      await t.pump(const Duration(milliseconds: 10));
      await t.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 10)),
      );
    }
    expect(find.text('Local WebSocket verified'), findsOneWidget);
  } finally {
    await t.runAsync(() => server!.close(force: true));
    HttpOverrides.global = previousOverrides;
  }

  final navigator = t.state(find.byType(Navigator));
  final editing = t.widget<TextField>(find.byType(TextField)).controller!;
  // The integration binding uses Flutter's input channel, not a system IME.
  t.testTextInput.register();
  await t.enterText(find.byType(TextField), 'Independent 中文🙂');
  editing.selection = const TextSelection(baseOffset: 1, extentOffset: 4);
  Future<void> press(String text) async {
    await t.tap(find.widgetWithText(TextButton, text));
    await _pumpApplicationFrame(t);
  }

  await press('Increment');
  await press('Change title');
  await press('Toggle theme');
  expect(find.text('Updated title'), findsOneWidget);
  expect(find.text('Count: 1'), findsOneWidget);
  expect(
    Theme.of(t.element(find.byType(TextField))).brightness,
    Brightness.dark,
  );
  expect(t.state(find.byType(Navigator)), same(navigator));
  expect(t.widget<TextField>(find.byType(TextField)).controller, same(editing));
  expect(
    editing.selection,
    const TextSelection(baseOffset: 1, extentOffset: 4),
  );
  for (var i = 0; i < 2; i++) {
    await press('Open details');
    expect(find.text('Details'), findsOneWidget);
    expect(
      find.byWidgetPredicate(
        (widget) => widget is Text && widget.data == 'Independent 中文🙂',
      ),
      findsOneWidget,
    );
    await press('Use light theme');
    await press('Accept and return');
    expect(find.text('Result accepted'), findsOneWidget);
    expect(find.text('Count: 1'), findsOneWidget);
    expect(t.state(find.byType(Navigator)), same(navigator));
  }
  await press('Open details');
  await t.tap(find.byTooltip('Back'));
  await _pumpApplicationFrame(t);
  expect(find.text('Returned without a result'), findsOneWidget);
  expect(editing.text, 'Independent 中文🙂');
  await t.pumpWidget(const SizedBox());
  await _pumpApplicationFrame(t);
  expect(t.takeException(), isNull);
  await t.runAsync(
    () => app.startApplication(storageDirectory: storageDirectory!.path),
  );
  await _pumpUntilFound(t, find.text('Count: 0'));
  expect(find.text('Count: 0'), findsOneWidget);
  expect(
    t.widget<TextField>(find.byType(TextField)).controller!.text,
    'Independent 中文🙂',
  );
  expect(
    t.widget<TextField>(find.byType(TextField)).controller,
    isNot(same(editing)),
  );
  await t.pumpWidget(const SizedBox());
  await _pumpApplicationFrame(t);
  expect(t.takeException(), isNull);
  var closed = false;
  Object? storageError;
  // Hive continuations created in a widget test need that test zone to keep pumping.
  FlaxLocalStoragePlugin.shutdown().then(
    (_) => closed = true,
    onError: (Object error) {
      storageError = error;
      closed = true;
    },
  );
  for (var i = 0; i < 500 && !closed; i++) {
    await t.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 2)),
    );
    await t.pump();
  }
  expect(closed, isTrue);
  expect(storageError, isNull);
  await t.runAsync(() => storageDirectory!.delete(recursive: true));
}

Future<void> _pumpUntilFound(WidgetTester tester, Finder finder) async {
  for (var i = 0; i < 500 && finder.evaluate().isEmpty; i++) {
    await tester.pump(const Duration(milliseconds: 10));
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
  }
  expect(finder, findsOneWidget);
}

Future<void> _pumpApplicationFrame(WidgetTester tester) async {
  // A real app may keep scheduling cursor or plugin frames indefinitely.
  await tester.pump();
  await tester.pump(const Duration(milliseconds: 500));
  await tester.pump();
}
