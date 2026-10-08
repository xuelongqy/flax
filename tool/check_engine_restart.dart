import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'src/example_engine.dart';
import 'src/local_engine.dart';
import 'src/process.dart';

Future<void> main() => command(() async {
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  await withExample(root, 'v8', 'standalone', (example) async {
    final process = await Process.start(
      '${flutterSdkRoot()}/bin/flutter',
      localEngineArguments([
        'run',
        '--debug',
        '--no-pub',
        '--machine',
        '-d',
        'macos',
        '--target=integration_test/engine_restart.dart',
      ]),
      workingDirectory: example,
    );
    final replies = <int, Completer<Map<String, dynamic>>>{};
    final started = Completer<String>();
    var ready = Completer<Map<String, dynamic>>();
    final events = <Map<String, dynamic>>[];
    final epochs = <int>{};
    void completeReady(String log) {
      const marker = 'FLAX_ENGINE_RESTART_READY:';
      if (log.startsWith(marker) && !ready.isCompleted) {
        ready.complete(
          (jsonDecode(log.substring(marker.length)) as Map)
              .cast<String, dynamic>(),
        );
      }
    }

    final errors = process.stderr.transform(utf8.decoder).listen(stderr.write);
    final output = process.stdout
        .transform(utf8.decoder)
        .transform(const LineSplitter())
        .listen((line) {
          stdout.writeln(line);
          completeReady(line);
          if (!line.startsWith('[{')) return;
          for (final event in jsonDecode(line) as List) {
            final message = (event as Map).cast<String, dynamic>();
            final params = message['params'] as Map?;
            if (message['event'] == 'app.start' && !started.isCompleted) {
              started.complete(params!['appId'] as String);
            }
            if (message['id'] case final int id) {
              replies.remove(id)?.complete(message);
            }
            final log = params?['log'];
            if (log is String) completeReady(log);
          }
        });
    Future<Map<String, dynamic>> request(
      int id,
      String method,
      Map<String, Object?> params,
    ) async {
      final response = Completer<Map<String, dynamic>>();
      replies[id] = response;
      process.stdin.writeln(
        jsonEncode([
          {'id': id, 'method': method, 'params': params},
        ]),
      );
      final result = await response.future.timeout(const Duration(minutes: 2));
      if (result['error'] != null) throw StateError('$result');
      return result;
    }

    var stopped = false;
    try {
      final appId = await started.future.timeout(const Duration(minutes: 4));
      for (var round = 0; round <= 3; round++) {
        final event = await ready.future.timeout(const Duration(minutes: 2));
        if (!epochs.add(event['epoch'] as int) ||
            event['callbacks'] != 1 ||
            (event['cells'] as int) < 1) {
          throw StateError('Invalid fresh-isolate evidence: $event');
        }
        events.add(event);
        if (round == 3) break;
        ready = Completer<Map<String, dynamic>>();
        final reply = await request(round + 1, 'app.restart', {
          'appId': appId,
          'fullRestart': true,
        });
        if ((reply['result'] as Map)['code'] != 0) {
          throw StateError('Hot restart failed: $reply');
        }
      }
      // `flutter run --machine` exits when the app stops, before replying.
      process.stdin.writeln(
        jsonEncode([
          {
            'id': 4,
            'method': 'app.stop',
            'params': {'appId': appId},
          },
        ]),
      );
      await process.stdin.flush();
      stopped = true;
      if (await process.exitCode.timeout(const Duration(seconds: 30)) != 0) {
        throw StateError('The Flutter process failed during shutdown');
      }
      File('$root/build/engine-hot-restart.json')
        ..parent.createSync(recursive: true)
        ..writeAsStringSync(jsonEncode({'restarts': 3, 'isolates': events}));
    } finally {
      if (!stopped && started.isCompleted) {
        try {
          await request(5, 'app.stop', {
            'appId': await started.future,
          }).timeout(const Duration(seconds: 10));
        } catch (_) {
          // The resident process may already have exited on an engine error.
        }
      }
      process.kill();
      await output.cancel();
      await errors.cancel();
    }
  });
});
