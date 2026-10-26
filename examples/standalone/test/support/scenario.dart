import 'package:flax/flax.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart';

import 'dart:io';
import 'dart:convert';
import 'dart:async';

import 'package:crypto/crypto.dart';

import 'package:flax_standalone/main.dart' as app;
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_standalone/assets.dart';

Future<void> applicationScenario(WidgetTester t) async {
  final builtin = FlaxPrefixedAssetBundle();
  final storageDirectory = await t.runAsync(
    () => Directory.systemTemp.createTemp('flax-standalone-storage-'),
  );
  FlaxJsRuntime? baseRuntime;
  final moduleAssets = await t.runAsync(
    () => FlaxModuleAssets.load(
      bundle: rootBundle,
      manifest: 'assets/flax_modules/modules.json',
    ),
  );
  Flax.moduleAssets = moduleAssets!;
  await flaxTestPumpView(
    t,
    FlaxView(
      createRuntime: () => baseRuntime = app.createRuntime(),
      source: '''
const {runApp, SizedBox} = globalThis.__flaxModules.require('@flax/flutter/widgets');
runApp(SizedBox());
''',
      bindings: app.bindings,
      plugins: const [],
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
  await t.pump(const Duration(milliseconds: 1));
  await t.pumpAndSettle();
  expect(baseRuntime!.isDisposed, isTrue);
  await t.runAsync(
    () => app.startApplication(
      storageDirectory: storageDirectory!.path,
      assetBundle: builtin,
    ),
  );
  await _pumpUntilFound(t, find.text('Count: 0'));
  expect(find.byType(MaterialApp), findsOneWidget);
  expect(find.byType(Navigator), findsOneWidget);
  expect(find.text('Count: 0'), findsOneWidget);
  expect(
    find.byWidgetPredicate(
      (widget) =>
          widget is Text &&
          widget.data == 'Count: 0' &&
          widget.runtimeType != Text,
    ),
    findsOneWidget,
  );
  final previousOverrides = HttpOverrides.current;
  HttpOverrides.global = null;
  final resourceRequests = <String>[];
  var networkCase = 'success';
  final heldSockets = <Socket>[];
  var requestStarted = Completer<void>();
  var requestClosed = Completer<void>();
  final networkImage = await t.runAsync(
    () => builtin.load('assets/images/flutter.png'),
  );
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
      resourceRequests.add(request.uri.path);
      if (request.uri.path == '/assets/config.json' &&
          {
            'http-error',
            'cancel-headers',
            'cancel-body',
          }.contains(networkCase)) {
        final started = requestStarted;
        final closed = requestClosed;
        final socket = await request.response.detachSocket(writeHeaders: false);
        heldSockets.add(socket);
        socket.listen(
          (_) {},
          onDone: () {
            if (!closed.isCompleted) closed.complete();
          },
          onError: (Object _) {
            if (!closed.isCompleted) closed.complete();
          },
        );
        if (networkCase != 'cancel-headers') {
          final status = networkCase == 'http-error'
              ? '503 Service Unavailable'
              : '200 OK';
          socket.write(
            'HTTP/1.1 $status\r\nContent-Length: 1000000\r\n'
            'Content-Type: application/json\r\nConnection: close\r\n\r\n{',
          );
          await socket.flush();
        }
        started.complete();
        return;
      }
      if (request.uri.path == '/assets/flutter.png') {
        request.response.headers.contentType = ContentType('image', 'png');
        request.response.add(Uint8List.sublistView(networkImage!));
      } else {
        request.response.headers.contentType = ContentType.json;
        if (request.uri.path == '/assets/missing.png') {
          request.response.statusCode = HttpStatus.notFound;
        } else if (request.uri.path == '/assets/config.json') {
          request.response.write(switch (networkCase) {
            'invalid-json' => '{',
            'invalid-fields' => '{}',
            _ => jsonEncode({
              'message': 'JSON loaded over HTTP',
              'imageUrl': networkCase == 'invalid-url'
                  ? 'file:///image.png'
                  : 'http://127.0.0.1:${server.port}/assets/'
                        '${networkCase == 'image-error' ? 'missing' : 'flutter'}.png',
            }),
          });
        } else {
          request.response.write('{"message":"Local Fetch verified"}');
        }
      }
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
        assetBundle: builtin,
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
    final networkButton = find.widgetWithText(
      TextButton,
      'Open network assets',
    );
    await t.ensureVisible(networkButton);
    await t.pump();
    await t.tap(networkButton);
    await _pumpApplicationFrame(t);
    await _pumpUntilFound(t, find.text('JSON loaded over HTTP'));
    final image = find.byWidgetPredicate(
      (widget) =>
          widget is Image && widget.semanticLabel == 'Network Flutter image',
    );
    final pixels = find.descendant(
      of: image,
      matching: find.byWidgetPredicate(
        (widget) => widget is RawImage && widget.image != null,
      ),
    );
    await _pumpUntilFound(t, pixels);
    expect(t.widget<RawImage>(pixels).image!.width, 128);
    expect(
      resourceRequests,
      containsAll(['/assets/config.json', '/assets/flutter.png']),
    );
    await t.tap(find.byType(BackButton));
    await _pumpApplicationFrame(t);

    Future<void> waitFor(Completer<void> event) async {
      for (var i = 0; i < 200 && !event.isCompleted; i++) {
        await t.pump(const Duration(milliseconds: 10));
        await t.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 10)),
        );
      }
      expect(event.isCompleted, isTrue, reason: networkCase);
    }

    for (final (mode, message) in [
      ('http-error', 'HTTP 503'),
      ('invalid-json', 'Network JSON failed:'),
      (
        'invalid-fields',
        'Network JSON must contain message and imageUrl strings',
      ),
      ('invalid-url', 'Network imageUrl must be an absolute HTTP(S) URL'),
      ('image-error', 'Network image failed:'),
      ('cancel-headers', 'Loading network JSON'),
      ('cancel-body', 'Loading network JSON'),
    ]) {
      networkCase = mode;
      requestStarted = Completer<void>();
      requestClosed = Completer<void>();
      final button = find.widgetWithText(TextButton, 'Open network assets');
      await t.ensureVisible(button);
      await t.pump();
      await t.tap(button);
      await _pumpApplicationFrame(t);
      await _pumpUntilFound(t, find.textContaining(message));
      if (mode == 'http-error') await waitFor(requestClosed);
      if (mode.startsWith('cancel-')) await waitFor(requestStarted);
      await t.tap(find.byType(BackButton));
      await _pumpApplicationFrame(t);
      if (mode.startsWith('cancel-')) await waitFor(requestClosed);
      expect(find.textContaining('Network JSON failed:'), findsNothing);
      expect(t.takeException(), isNull);
    }

    await t.ensureVisible(find.byType(TextField));
    await t.pump();
    expect(t.takeException(), isNull);
  } finally {
    for (final socket in heldSockets) {
      socket.destroy();
    }
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

  await press('Open assets');
  await _verifyAssets(
    t,
    builtin,
    'JSON loaded from the application asset bundle',
  );
  await t.tap(find.byType(BackButton));
  await _pumpApplicationFrame(t);
  expect(t.takeException(), isNull);

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
  await t.tap(find.byType(BackButton));
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
  final sandbox = await t.runAsync(() async {
    final unrelated = Directory('${storageDirectory!.path}/unrelated');
    await unrelated.create();
    final sentinel = File('${unrelated.path}/keep.txt');
    await sentinel.writeAsString('keep');
    await expectLater(
      prepareSandboxAssets(unrelated, source: builtin),
      throwsA(isA<FlutterError>()),
    );
    expect(await sentinel.readAsString(), 'keep');
    final directory = Directory('${storageDirectory.path}/flax');
    await prepareSandboxAssets(directory, source: builtin);
    await File('${directory.path}/assets/obsolete.json').writeAsString('{}');
    final refreshed = await prepareSandboxAssets(directory, source: builtin);
    for (final bundle in [builtin, refreshed]) {
      await expectLater(
        bundle.load('assets/obsolete.json'),
        throwsA(isA<FlutterError>()),
      );
    }
    return refreshed;
  });
  await t.runAsync(
    () => app.startApplication(
      storageDirectory: storageDirectory!.path,
      applicationDirectory: sandbox!.directory,
    ),
  );
  await _pumpUntilFound(t, find.text('Count: 0'));
  await press('Open assets');
  await _verifyAssets(t, sandbox!, 'JSON loaded from the sandbox asset bundle');
  await t.tap(find.byType(BackButton));
  await _pumpApplicationFrame(t);
  await t.pumpWidget(const SizedBox());
  await _pumpApplicationFrame(t);
  expect(t.takeException(), isNull);
  final packageFile = await t.runAsync(() async {
    final bytes = await rootBundle.load('assets/flax.flax');
    return File('${storageDirectory!.path}/application.flax')
        .writeAsBytes(Uint8List.sublistView(bytes));
  });
  final installationDirectory = Directory('${storageDirectory!.path}/packages');
  DateTime? installationTime;
  for (var launch = 0; launch < 2; launch++) {
    await t.runAsync(
      () => app.startApplication(
        storageDirectory: storageDirectory.path,
        packageFile: packageFile!,
        installationDirectory: installationDirectory,
      ),
    );
    await _pumpUntilFound(t, find.text('Count: 0'));
    final installed = await t.runAsync(
      () => FlaxPackage.install(
        packageFile!,
        installationDirectory: installationDirectory,
      ),
    );
    final receiptTime = await t.runAsync(
      () => File('${installed!.path}/.flax-install.json').lastModified(),
    );
    if (launch == 0) {
      installationTime = receiptTime;
    } else {
      expect(receiptTime, installationTime);
    }
    await press('Open assets');
    await _verifyAssets(
      t,
      FlaxDirectoryAssetBundle(installed!),
      'JSON loaded from the application asset bundle',
    );
    await t.tap(find.byType(BackButton));
    await _pumpApplicationFrame(t);
    await t.pumpWidget(const SizedBox());
    await _pumpApplicationFrame(t);
  }
  final scriptFile = await t.runAsync(
    () async =>
        File('${storageDirectory.path}/single.js')
            .writeAsString(await builtin.loadString('app.js')),
  );
  await t.runAsync(
    () async => app.startApplication(
      storageDirectory: storageDirectory.path,
      source: await scriptFile!.readAsString(),
    ),
  );
  await _pumpUntilFound(t, find.text('Count: 0'));
  await press('Open assets');
  await _verifyAssets(
    t,
    builtin,
    'JSON loaded from the application asset bundle',
  );
  await t.tap(find.byType(BackButton));
  await _pumpApplicationFrame(t);
  await t.pumpWidget(const SizedBox());
  await _pumpApplicationFrame(t);
  await t.runAsync(
    () => app.startApplication(
      storageDirectory: storageDirectory.path,
      scriptFile: scriptFile!,
    ),
  );
  await _pumpUntilFound(t, find.text('Count: 0'));
  await press('Open assets');
  await _verifyAssets(
    t,
    builtin,
    'JSON loaded from the application asset bundle',
  );
  await t.tap(find.byType(BackButton));
  await _pumpApplicationFrame(t);
  await t.pumpWidget(const SizedBox());
  await _pumpApplicationFrame(t);
  expect(t.takeException(), isNull);
  // Exercise the native downloader with the real build output, including PNG variants.
  final networkOverrides = HttpOverrides.current;
  HttpOverrides.global = null;
  final payloads = await t.runAsync(
    () async => <FlaxRemoteFormat, List<int>>{
      FlaxRemoteFormat.javascript: await scriptFile!.readAsBytes(),
      FlaxRemoteFormat.package: await packageFile!.readAsBytes(),
    },
  );
  final validators = <String?>[];
  final authorizations = <String?>[];
  final artifactServer = await t.runAsync(() async {
    final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    server.listen((request) async {
      authorizations.add(request.headers.value('x-flax-demo'));
      validators.add(request.headers.value('if-none-match'));
      final format = request.uri.path == '/js'
          ? FlaxRemoteFormat.javascript
          : FlaxRemoteFormat.package;
      final bytes = payloads![format]!;
      final etag = '"${sha256.convert(bytes)}"';
      request.response.headers.set('etag', etag);
      if (request.headers.value('if-none-match') == etag) {
        request.response.statusCode = HttpStatus.notModified;
      } else {
        request.response.contentLength = bytes.length;
        request.response.add(bytes);
      }
      await request.response.close();
    });
    return server;
  });
  try {
    for (final format in FlaxRemoteFormat.values) {
      for (var launch = 0; launch < 2; launch++) {
        await t.runAsync(
          () => app.startApplication(
            storageDirectory: storageDirectory.path,
            networkUri: Uri.parse(
              'http://127.0.0.1:${artifactServer!.port}/${format == FlaxRemoteFormat.javascript ? 'js' : 'package'}',
            ),
            networkFormat: format,
            headers: {'X-Flax-Demo': 'authorized'},
            expectedSha256: sha256.convert(payloads![format]!).toString(),
            cacheDirectory: Directory('${storageDirectory.path}/downloads'),
            installationDirectory: format == FlaxRemoteFormat.package
                ? installationDirectory
                : null,
          ),
        );
        await _pumpUntilFound(t, find.text('Count: 0'));
        await press('Open assets');
        final installed = format == FlaxRemoteFormat.package
            ? await t.runAsync(
                () => FlaxPackage.install(
                  packageFile!,
                  installationDirectory: installationDirectory,
                ),
              )
            : null;
        await _verifyAssets(
          t,
          installed == null ? builtin : FlaxDirectoryAssetBundle(installed),
          'JSON loaded from the application asset bundle',
        );
        if (installed != null) {
          expect(
            await t.runAsync(
              () => File('${installed.path}/.flax-install.json').lastModified(),
            ),
            installationTime,
          );
        }
        await t.tap(find.byType(BackButton));
        await _pumpApplicationFrame(t);
        await t.pumpWidget(const SizedBox());
        await _pumpApplicationFrame(t);
      }
    }
    expect(validators, [
      null,
      '"${sha256.convert(payloads![FlaxRemoteFormat.javascript]!)}"',
      null,
      '"${sha256.convert(payloads[FlaxRemoteFormat.package]!)}"',
    ]);
    expect(authorizations, everyElement('authorized'));
    expect(t.takeException(), isNull);
  } finally {
    await t.runAsync(() => artifactServer!.close(force: true));
    HttpOverrides.global = networkOverrides;
  }
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
  await t.runAsync(() => storageDirectory.delete(recursive: true));
}

Future<void> _verifyAssets(
  WidgetTester t,
  AssetBundle bundle,
  String message,
) async {
  final manifest = await t.runAsync(() => FlaxManifest.load(bundle));
  expect(manifest!.id, 'main');
  expect(manifest.version, '0.0.0');
  expect(manifest.entry, 'app.js');
  await _pumpUntilFound(t, find.text(message));
  final image = find.byWidgetPredicate(
    (widget) =>
        widget is Image && widget.semanticLabel == 'Bundled Flutter image',
  );
  final provider = t.widget<Image>(image).image as AssetImage;
  expect(provider.assetName, 'assets/images/flutter.png');
  final key = await t.runAsync(
    () => provider.obtainKey(createLocalImageConfiguration(t.element(image))),
  );
  if (bundle is FlaxDirectoryAssetBundle) {
    expect(
      (key!.bundle as FlaxDirectoryAssetBundle).directory.path,
      bundle.directory.path,
    );
  } else if (bundle is FlaxPrefixedAssetBundle) {
    final selected = key!.bundle as FlaxPrefixedAssetBundle;
    expect(selected.bundle, same(bundle.bundle));
    expect(selected.prefix, bundle.prefix);
  } else {
    expect(key!.bundle, same(bundle));
  }
  final pixels = find.descendant(
    of: image,
    matching: find.byWidgetPredicate(
      (widget) => widget is RawImage && widget.image != null,
    ),
  );
  await _pumpUntilFound(t, pixels);
  expect(t.widget<RawImage>(pixels).image!.width, 128 * key.scale);
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
