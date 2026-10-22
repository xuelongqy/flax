import 'dart:io';

import 'package:flax_websocket_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('WebSocket playground exchanges messages and closes on unmount', (
    tester,
  ) async {
    final previousHttp = HttpOverrides.current;
    HttpOverrides.global = null;
    addTearDown(() => HttpOverrides.global = previousHttp);
    late HttpServer server;
    var connections = 0;
    await tester.runAsync(() async {
      server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
      addTearDown(() => server.close(force: true));
      server.listen((request) async {
        final socket = await WebSocketTransformer.upgrade(request);
        connections++;
        socket.listen(socket.add, onDone: () => connections--);
      });
      await app.startApplication(
        apiBaseUrl: 'http://127.0.0.1:${server.port}/',
      );
    });
    await tester.pumpAndSettle();
    expect(find.text('WebSocket ready'), findsOneWidget);
    await tester.ensureVisible(find.text('Connect'));
    await tester.tap(find.text('Connect'));
    await _until(
      tester,
      () => find.text('Connected. Say hello!').evaluate().isNotEmpty,
    );
    await tester.ensureVisible(find.text('Send message'));
    await tester.tap(find.text('Send message'));
    await _until(
      tester,
      () => find.text('Received: Hello from Flax!').evaluate().isNotEmpty,
    );
    expect(connections, 1);
    await tester.pumpWidget(const SizedBox.shrink());
    await _until(tester, () => connections == 0);
    await tester.pumpAndSettle();
    await tester.runAsync(() => server.close(force: true));
    await tester.pumpAndSettle();
  });
}

Future<void> _until(WidgetTester tester, bool Function() done) async {
  for (var i = 0; i < 100 && !done(); i++) {
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
    await tester.pump();
  }
  expect(done(), isTrue);
}
