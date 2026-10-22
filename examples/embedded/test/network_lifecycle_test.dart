import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_embedded/main.dart' as app;
import 'package:flax_fetch/flax_fetch.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_websocket/flax_websocket.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import 'support/gallery.dart';
import 'support/runtime_tracker.dart';

// Weak observations must not keep a departed page's signals or sockets alive.
const probe = r'''
(() => {
  const signals = [], sockets = [];
  for (const [name, refs, select] of [
    ['AbortController', signals, value => value.signal],
    ['WebSocket', sockets, value => value],
  ]) {
    globalThis[name] = new Proxy(globalThis[name], {
      construct(target, args, receiver) {
        const value = Reflect.construct(target, args, receiver);
        refs.push(new WeakRef(select(value)));
        return value;
      }
    });
  }
  globalThis.__networkLifecycle = () => ({
    signals: signals.map(ref => {
      const value = ref.deref();
      return value ? {aborted: value.aborted, listeners: value.listeners.length,
        dependents: value.retainedDependents.size} : null;
    }),
    sockets: sockets.map(ref => {
      const value = ref.deref();
      return value ? {state: value.readyState, handlers: value.handlers.size,
        listeners: value.listeners.length,
        callbacksCleared: [value.onopen, value.onmessage, value.onerror, value.onclose]
          .every(callback => callback === null)} : null;
    })
  });
})();
''';

void main() {
  testWidgets(
    'page exits cancel transport, detach callbacks and allow reentry',
    (tester) async {
      final previousHttp = HttpOverrides.current;
      HttpOverrides.global = null;
      addTearDown(() => HttpOverrides.global = previousHttp);
      tester.view.physicalSize = const Size(1200, 1000);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      late Directory storage;
      late HttpServer server;
      late String source;
      final slowSockets = <Socket>[];
      final sockets = <WebSocket>[];
      var slowStarted = 0, slowClosed = 0, connections = 0;
      await tester.runAsync(() async {
        storage = await Directory.systemTemp.createTemp(
          'network-page-lifecycle-',
        );
        source = await app.loadAggregateSource(storageDirectory: storage.path);
        server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
        server.listen((request) async {
          if (request.uri.path == '/slow') {
            final socket = await request.response.detachSocket(
              writeHeaders: false,
            );
            slowSockets.add(socket);
            slowStarted++;
            socket.listen(
              (_) {},
              onDone: () {
                slowClosed++;
                socket.destroy();
              },
            );
          } else if (WebSocketTransformer.isUpgradeRequest(request)) {
            final socket = await WebSocketTransformer.upgrade(request);
            sockets.add(socket);
            connections++;
            socket.listen(socket.add, onDone: () => connections--);
          } else {
            request.response.headers.contentType = ContentType.json;
            request.response.write('{"message":"Lifecycle server"}');
            await request.response.close();
          }
        });
      });
      addTearDown(() async {
        for (final socket in slowSockets) {
          socket.destroy();
        }
        for (final socket in sockets) {
          await socket.close();
        }
        await server.close(force: true);
        await FlaxLocalStoragePlugin.shutdown();
        await storage.delete(recursive: true);
      });
      final errors = <Object>[];
      late RuntimeTracker runtime;
      final baseUrl = 'http://127.0.0.1:${server.port}/';
      await tester.pumpWidget(
        app.EmbeddedApp(
          source: '$probe\n$source',
          createRuntime: () => runtime = RuntimeTracker(),
          onFlaxError: (error, _) => errors.add(error),
          plugins: [
            ...app.galleryPlugins.where(
              (plugin) =>
                  plugin.id != 'flax.fetch' && plugin.id != 'flax.websocket',
            ),
            FlaxFetchPlugin(baseUrl: baseUrl),
            FlaxWebSocketPlugin(baseUrl: baseUrl),
          ],
        ),
      );
      await tester.pumpAndSettle();
      Map<String, dynamic> snapshot() => jsonDecode(
        (runtime.evaluate(
          'JSON.stringify(__networkLifecycle())',
        ) as FlaxJsString).value,
      ) as Map<String, dynamic>;

      for (var round = 1; round <= 2; round++) {
        await tapGallery(tester, find.byKey(const ValueKey('open-fetch')));
        await tapGallery(tester, find.text('Try slow request'));
        await pumpGalleryUntil(tester, () => slowStarted == round);
        expect(find.text('Sending request…'), findsOneWidget);
        await tapGallery(tester, find.byKey(const ValueKey('gallery-back')));
        await pumpGalleryUntil(tester, () => slowClosed == round);
        for (final signal in snapshot()['signals'] as List) {
          if (signal == null) continue;
          expect(signal['aborted'], isTrue);
          expect(signal['listeners'], 0);
          expect(signal['dependents'], 0);
        }
        await tapGallery(tester, find.byKey(const ValueKey('open-fetch')));
        expect(find.text('Fetch ready'), findsOneWidget);
        await tapGallery(tester, find.text('Send request'));
        await pumpGalleryUntil(
          tester,
          () => find.text('HTTP 200 · Received').evaluate().isNotEmpty,
        );
        expect(find.textContaining('Lifecycle server'), findsOneWidget);
        await tapGallery(tester, find.byKey(const ValueKey('gallery-back')));

        await tapGallery(tester, find.byKey(const ValueKey('open-websocket')));
        expect(find.text('WebSocket ready'), findsOneWidget);
        await tapGallery(tester, find.text('Connect'));
        await pumpGalleryUntil(
          tester,
          () => find.text('Connected. Say hello!').evaluate().isNotEmpty,
        );
        expect(connections, 1);
        final active = (snapshot()['sockets'] as List).last as Map;
        expect(active['handlers'], 4);
        expect(active['listeners'], 4);
        await tapGallery(tester, find.text('Send message'));
        await pumpGalleryUntil(
          tester,
          () => find.text('Received: Hello from Flax!').evaluate().isNotEmpty,
        );
        await tapGallery(tester, find.byKey(const ValueKey('gallery-back')));
        await pumpGalleryUntil(
          tester,
          () =>
              connections == 0 &&
              (snapshot()['sockets'] as List).every(
                (socket) => socket == null || socket['state'] == 3,
              ),
        );
        for (final socket in snapshot()['sockets'] as List) {
          if (socket == null) continue;
          expect(socket['state'], 3);
          expect(socket['handlers'], 0);
          expect(socket['listeners'], 0);
          expect(socket['callbacksCleared'], isTrue);
        }
        expect(errors, isEmpty);
        expect(tester.takeException(), isNull);
      }
      await tester.pumpWidget(const SizedBox.shrink());
      await pumpGalleryUntil(tester, () => runtime.isDisposed);
      expect(runtime.handlesAtDispose, 0);
      expect(errors, isEmpty);
    },
  );
}
