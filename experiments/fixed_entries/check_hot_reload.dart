// ignore_for_file: depend_on_referenced_packages
import 'dart:async';
import 'dart:convert';
import 'dart:io';

import '../../tool/src/local_engine.dart';

Future<void> main(List<String> arguments) async {
  final root = File.fromUri(Platform.script).parent.parent.parent.path;
  final enabled = !arguments.contains('--control');
  final output = Directory(
    '$root/.local/review-hmr/${enabled ? 'combined' : 'original'}',
  )..createSync(recursive: true);
  final target = File('$root/experiments/fixed_entries/reload_target.dart');
  final original = target.readAsStringSync();
  File('${output.path}/reload_target.before.dart').writeAsStringSync(original);
  var written = original;
  final log = File('${output.path}/flutter.log').openWrite();
  final entitlement = File(
    '$root/examples/embedded/macos/Runner/DebugProfile.entitlements',
  );
  final savedEntitlement = entitlement.readAsStringSync();
  final testEntitlement = savedEntitlement.replaceFirst(
    '<key>com.apple.security.app-sandbox</key>\n\t<true/>',
    '<key>com.apple.security.app-sandbox</key>\n\t<false/>',
  );
  final command = localEngineArguments([
    'run',
    '--debug',
    '--no-pub',
    '--machine',
    '-d',
    'macos',
    '--dart-define=FLAX_ENGINE_RESULTS=$enabled',
    '--target=$root/experiments/fixed_entries/reload_app.dart',
  ]);
  File('${output.path}/command.json').writeAsStringSync(jsonEncode(command));
  stdout.writeln('Starting Flutter: $command');
  late final Process process;
  entitlement.writeAsStringSync(testEntitlement);
  try {
    process = await Process.start(
      '${flutterSdkRoot()}/bin/flutter',
      command,
      workingDirectory: '$root/examples/embedded',
      // The engine is explicit in argv; Flutter's own snapshot bootstrap has no argv.
      environment: {...Platform.environment}..remove('FLUTTER_ENGINE'),
      includeParentEnvironment: false,
    );
  } catch (_) {
    entitlement.writeAsStringSync(savedEntitlement);
    await log.close();
    rethrow;
  }
  final replies = <int, Completer<Map<String, dynamic>>>{};
  final started = Completer<String>();
  final initialized = Completer<void>();
  var ready = Completer<Map<String, dynamic>>();
  final events = <Map<String, dynamic>>[];
  void report(String line) {
    const marker = 'FLAX_RELOAD_RESULT:';
    final index = line.indexOf(marker);
    if (index < 0 || ready.isCompleted) return;
    final result = (jsonDecode(line.substring(index + marker.length)) as Map)
        .cast<String, dynamic>();
    ready.complete(result);
  }

  final errors = process.stderr.transform(utf8.decoder).listen(log.write);
  final lines = process.stdout
      .transform(utf8.decoder)
      .transform(const LineSplitter())
      .listen((line) {
        log.writeln(line);
        if (!line.startsWith('[{')) {
          report(line);
          return;
        }
        for (final raw in jsonDecode(line) as List) {
          final event = (raw as Map).cast<String, dynamic>();
          final params = event['params'] as Map?;
          if (event['event'] == 'app.start' && !started.isCompleted) {
            started.complete(params!['appId'] as String);
          }
          if (event['event'] == 'app.started' && !initialized.isCompleted) {
            initialized.complete();
          }
          if (event['id'] case final int id) {
            replies.remove(id)?.complete(event);
          }
          if (params?['log'] case final String message) report(message);
        }
      });
  var stopped = false;
  try {
    final appId = await Future.any([
      started.future,
      process.exitCode.then<String>(
        (code) => throw StateError('Flutter exited before app.start: $code'),
      ),
    ]).timeout(const Duration(minutes: 5));
    // The app's first frame can finish before Flutter attaches its reload service.
    await Future.any([
      initialized.future,
      process.exitCode.then<void>(
        (code) => throw StateError('Flutter exited before app.started: $code'),
      ),
    ]).timeout(const Duration(minutes: 5));
    final bootstrap = Completer<Map<String, dynamic>>();
    replies[0] = bootstrap;
    process.stdin.writeln(
      jsonEncode([
        {
          'id': 0,
          'method': 'app.callServiceExtension',
          'params': {'appId': appId, 'methodName': 'ext.flutter.reassemble'},
        },
      ]),
    );
    final bootstrapResult = await bootstrap.future.timeout(
      const Duration(seconds: 60),
    );
    if (bootstrapResult['error'] != null) {
      throw StateError('Initial reassemble rejected: $bootstrapResult');
    }
    for (var version = 1; version <= 4; version++) {
      final event =
          await Future.any([
            ready.future,
            process.exitCode.then<Map<String, dynamic>>(
              (code) => throw StateError(
                'Flutter exited before revision $version: $code',
              ),
            ),
          ]).timeout(
            version == 1
                ? const Duration(minutes: 5)
                : const Duration(seconds: 60),
          );
      events.add(event);
      File('${output.path}/events.json').writeAsStringSync(jsonEncode(events));
      if (event['passed'] != true ||
          event['revision'] != version ||
          event['epoch'] != events.first['epoch'] ||
          event['reassemblies'] != version - 1) {
        throw StateError('Hot reload failed: $event');
      }
      stdout.writeln(
        'Hot reload result path=$enabled revision=$version passed ${event['checks']}',
      );
      if (version == 4) break;
      ready = Completer<Map<String, dynamic>>();
      final next = version + 1;
      var source = original.replaceFirst('revision => 1', 'revision => $next');
      source = source.replaceFirst(
        'int score({int amount = 11}) => amount + _seed.first;',
        'int score({int amount = ${next >= 3 ? 21 : 11}${next == 4 ? ', int extra = 100' : ''}}) => amount + _seed.first + 10${next == 4 ? ' + extra' : ''};',
      );
      if (target.readAsStringSync() != written) {
        throw StateError('Concurrent reload fixture edit');
      }
      target.writeAsStringSync(source);
      written = source;
      final reply = Completer<Map<String, dynamic>>();
      replies[version] = reply;
      process.stdin.writeln(
        jsonEncode([
          {
            'id': version,
            'method': 'app.restart',
            'params': {'appId': appId, 'fullRestart': false},
          },
        ]),
      );
      final result = await reply.future.timeout(const Duration(seconds: 60));
      if (result['error'] != null || (result['result'] as Map)['code'] != 0) {
        throw StateError('Reload rejected: $result');
      }
    }
    process.stdin.writeln(
      jsonEncode([
        {
          'id': 10,
          'method': 'app.stop',
          'params': {'appId': appId},
        },
      ]),
    );
    await process.stdin.flush();
    if (await process.exitCode.timeout(const Duration(seconds: 30)) != 0) {
      throw StateError('Flutter shutdown failed');
    }
    stopped = true;
    File('${output.path}/receipt.json').writeAsStringSync(
      jsonEncode({
        'passed': true,
        'combinedResults': enabled,
        'reloads': 3,
        'events': events,
      }),
    );
  } finally {
    try {
      if (target.readAsStringSync() != written) {
        throw StateError(
          'Concurrent reload fixture edit; original retained in run evidence',
        );
      }
      target.writeAsStringSync(original);
    } finally {
      if (!stopped) {
        if (started.isCompleted) {
          process.stdin.writeln(
            jsonEncode([
              {
                'id': 11,
                'method': 'app.stop',
                'params': {'appId': await started.future},
              },
            ]),
          );
        }
        try {
          await process.exitCode.timeout(const Duration(seconds: 15));
        } on TimeoutException {
          process.kill();
        }
      }
      await lines.cancel();
      await errors.cancel();
      await log.close();
      if (entitlement.readAsStringSync() != testEntitlement) {
        throw StateError('Concurrent entitlement edit');
      }
      entitlement.writeAsStringSync(savedEntitlement);
    }
  }
}
