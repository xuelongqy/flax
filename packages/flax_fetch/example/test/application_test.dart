import 'dart:convert';
import 'dart:io';

import 'package:flax_fetch_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets(
    'Fetch playground receives JSON and cancels an unfinished request',
    (tester) async {
      final previousHttp = HttpOverrides.current;
      HttpOverrides.global = null;
      addTearDown(() => HttpOverrides.global = previousHttp);
      late HttpServer server;
      var slowStarted = false;
      await tester.runAsync(() async {
        server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
        addTearDown(() => server.close(force: true));
        server.listen((request) async {
          if (request.uri.path == '/slow') {
            slowStarted = true;
            return;
          }
          request.response.headers.contentType = ContentType.json;
          request.response.write(
            jsonEncode({'message': 'Hello from the example server'}),
          );
          await request.response.close();
        });
        await app.startApplication(
          apiBaseUrl: 'http://127.0.0.1:${server.port}/',
        );
      });
      await tester.pumpAndSettle();
      expect(find.text('Fetch ready'), findsOneWidget);
      await tester.ensureVisible(find.text('Send request'));
      await tester.tap(find.text('Send request'));
      await _until(
        tester,
        () => find.text('HTTP 200 · Received').evaluate().isNotEmpty,
      );
      expect(
        find.textContaining('Hello from the example server'),
        findsOneWidget,
      );
      await tester.tap(find.text('Try slow request'));
      await _until(tester, () => slowStarted);
      await tester.tap(find.text('Cancel request'));
      await _until(
        tester,
        () => find.text('Request cancelled.').evaluate().isNotEmpty,
      );
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpAndSettle();
      await tester.runAsync(() => server.close(force: true));
    },
  );
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
