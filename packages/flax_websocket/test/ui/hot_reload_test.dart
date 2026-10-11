import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flax_websocket/flax_websocket.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show registry;
import '../support/runtime_tracker.dart';

Future<(Process?, Uri)> _startDev() async {
  final config = jsonDecode(
    flaxTestFixtureFile(
      'hot_reload_server.json',
      packageName: 'flax_websocket',
    ),
  ) as Map;
  if (config['url'] case final String url) return (null, Uri.parse(url));
  if (Platform.isAndroid || Platform.isIOS) {
    throw StateError('Run mobile HMR with tool/check_hot_reload.dart');
  }
  final process = await Process.start('node', [config['script'] as String]);
  process.stderr.transform(utf8.decoder).listen(stderr.write);
  final line = await process.stdout
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .firstWhere((line) => line.startsWith('{"url":'))
      .timeout(const Duration(seconds: 10));
  return (process, Uri.parse((jsonDecode(line) as Map)['url'] as String));
}

Future<void> _stopDev(Process process) async {
  process.kill();
  try {
    await process.exitCode.timeout(const Duration(seconds: 3));
  } on TimeoutException {
    process.kill(ProcessSignal.sigkill);
    await process.exitCode;
  }
}

Future<String> _request(Uri server, String path, {bool update = false}) async {
  final client = HttpClient();
  try {
    final request = await client.openUrl(
      update ? 'POST' : 'GET',
      server.resolve(path),
    );
    final response = await request.close();
    final body = await response.transform(utf8.decoder).join();
    if (response.statusCode != HttpStatus.ok) {
      throw HttpException('HMR fixture ${response.statusCode}: $body');
    }
    return body;
  } finally {
    client.close(force: true);
  }
}

Future<void> _pumpUntil(WidgetTester tester, Finder finder) async {
  for (var attempt = 0; attempt < 60; attempt++) {
    await tester.pump();
    if (finder.evaluate().isNotEmpty) return;
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 50)),
    );
  }
}

Future<void> _waitForRejection(
  WidgetTester tester,
  Uri server,
  int count,
) async {
  for (var attempt = 0; attempt < 60; attempt++) {
    await tester.pump();
    final rejected = (await tester.runAsync(
      () => _request(server, '/flax-test/rejected'),
    ))!;
    if (int.parse(rejected) >= count) {
      return;
    }
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 50)),
    );
  }
  throw TimeoutException('The HMR fixture did not report rejection $count');
}

String _liveLabel(RuntimeTracker tracker) => (tracker.evaluate(
  'globalThis.__flaxHotTestLabelInstance.value()',
) as FlaxJsString).value;

void main() {
  setUp(() {
    final previous = HttpOverrides.current;
    HttpOverrides.global = null;
    addTearDown(() => HttpOverrides.global = previous);
  });

  testWidgets(
    'Vite recovers rejected updates, preserves class assignments and restarts from current source',
    (tester) async {
      final (process, server) = (await tester.runAsync(_startDev))!;
      if (process != null) addTearDown(() => _stopDev(process));

      final devSource = await tester.runAsync(
        () => _request(server, '/flax-test/source'),
      );
      final source =
          '${flaxTestFixtureSource('hot_reload_host', packageName: 'flax_websocket')}\n${devSource!}';
      final tracker = RuntimeTracker();
      final errors = <Object>[];
      final session = FlaxSession(
        createRuntime: () => tracker,
        source: source,
        bindings: registry,
        plugins: const [FlaxWebSocketPlugin()],
        onError: (error, _) => errors.add(error),
      );
      await tester.pumpWidget(
        MaterialApp(home: FlaxView.session(session: session)),
      );
      await tester.pump();
      expect(find.text('V1:1'), findsOneWidget);

      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 200)),
      );
      await tester.runAsync(
        () => _request(server, '/flax-test/reject', update: true),
      );
      await _waitForRejection(tester, server, 1);
      await tester.pump();
      expect(find.text('V1:1'), findsOneWidget);
      expect(_liveLabel(tracker), 'V1');
      await tester.runAsync(
        () => _request(server, '/flax-test/update', update: true),
      );
      await _pumpUntil(tester, find.text('V2:2'));

      expect(find.text('V2:2'), findsOneWidget);
      expect(_liveLabel(tracker), 'V2');
      expect(errors, isEmpty);

      await tester.runAsync(
        () => _request(server, '/flax-test/remove', update: true),
      );
      await _waitForRejection(tester, server, 2);
      await tester.pump();
      expect(find.text('V2:2'), findsOneWidget);
      expect(_liveLabel(tracker), 'V2');
      await tester.runAsync(
        () => _request(server, '/flax-test/update', update: true),
      );
      await _pumpUntil(tester, find.text('V3:2'));
      expect(find.text('V3:2'), findsOneWidget);
      expect(_liveLabel(tracker), 'V3');
      expect(errors, isEmpty);
      await tester.pumpWidget(const SizedBox());
      final closing = session.close();
      await tester.pumpAndSettle();
      await closing;
      expect(tracker.handlesAtDispose, 0);

      final latestSource = await tester.runAsync(
        () => _request(server, '/flax-test/source'),
      );
      final restartedTracker = RuntimeTracker();
      final restarted = FlaxSession(
        createRuntime: () => restartedTracker,
        source:
            '${flaxTestFixtureSource('hot_reload_host', packageName: 'flax_websocket')}\n${latestSource!}',
        bindings: registry,
        plugins: const [FlaxWebSocketPlugin()],
        onError: (error, _) => errors.add(error),
      );
      await tester.pumpWidget(
        MaterialApp(home: FlaxView.session(session: restarted)),
      );
      await tester.pump();
      expect(find.text('V3:2'), findsOneWidget);
      expect(_liveLabel(restartedTracker), 'V3');
      expect(errors, isEmpty);
      await tester.pumpWidget(const SizedBox());
      final restartedClosing = restarted.close();
      await tester.pumpAndSettle();
      await restartedClosing;
      expect(restartedTracker.handlesAtDispose, 0);
    },
  );
}
