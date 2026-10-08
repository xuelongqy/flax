import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'local_engine.dart';

Future<void> run(
  String executable,
  List<String> arguments, {
  String? directory,
  Map<String, String>? environment,
  bool inheritEnvironment = true,
  bool useLocalEngine = true,
  bool captureWindowsCrash = false,
  Duration timeout = const Duration(minutes: 30),
}) async {
  if (!useLocalEngine) {
    // Nested Flutter commands also treat this as a local-engine request.
    environment = {
      if (inheritEnvironment) ...Platform.environment,
      ...?environment,
    }..remove('FLUTTER_ENGINE');
    inheritEnvironment = false;
  }
  if (executable == 'flutter') {
    if (useLocalEngine) arguments = localEngineArguments(arguments);
    executable = '${flutterSdkRoot()}/bin/flutter';
  }
  final elapsed = Stopwatch()..start();
  stdout.writeln('> $executable ${arguments.join(' ')}');
  final process = await Process.start(
    executable,
    arguments,
    workingDirectory: directory,
    environment: environment,
    includeParentEnvironment: inheritEnvironment,
    mode: ProcessStartMode.inheritStdio,
    runInShell:
        Platform.isWindows &&
        const {'flutter', 'pnpm', 'npm'}.contains(executable),
  );
  final code = await process.exitCode.timeout(
    timeout,
    onTimeout: () {
      process.kill(ProcessSignal.sigkill);
      throw TimeoutException('Command timed out: $executable', timeout);
    },
  );
  stdout.writeln(
    'Completed $executable ${arguments.take(2).join(' ')}: '
    '${elapsed.elapsedMilliseconds} ms, exit $code',
  );
  if (code != 0) {
    final error = ProcessException(
      executable,
      arguments,
      'Command failed',
      code,
    );
    if (captureWindowsCrash) {
      final effective = <String, String>{
        if (inheritEnvironment) ...Platform.environment,
        ...?environment,
      };
      if (effective['FLAX_WINDOWS_CDB'] != null) {
        try {
          await _captureWindowsCrash(error, directory, effective);
        } catch (diagnosticError) {
          stderr.writeln('Windows crash capture failed: $diagnosticError');
        }
      }
    }
    throw error;
  }
}

Future<void> _captureWindowsCrash(
  ProcessException original,
  String? directory,
  Map<String, String> environment,
) async {
  final output = Directory(environment['FLAX_WINDOWS_CRASH_DIR']!)
    ..createSync(recursive: true);
  final capture = output.createTempSync('windows-crash-');
  final working = Directory(directory ?? Directory.current.path);
  final prefix = capture.uri.pathSegments.where((s) => s.isNotEmpty).last;
  final receipt = <String, Object?>{
    'executable': original.executable,
    'arguments': original.arguments,
    'workingDirectory': working.absolute.path,
    'originalExitCode': original.errorCode,
    'attempts': <Map<String, Object?>>[],
  };
  try {
    for (var attempt = 1; attempt <= 3; attempt++) {
      final script = File('${capture.path}/attempt-$attempt.txt');
      // Catch first-chance AVs before Dart handles the exception itself.
      final captureCommands =
          '.exr -1; .ecxr; r; kv; lm f; '
          'lm v m hermesvm; lm v m flax_hermes; !teb; '
          // Include referenced heap objects and the memory layout: stack-only
          // dumps cannot explain an invalid Hermes object/property-map pointer.
          'u @\$ip-20 @\$ip+40; .dump /miF /u $prefix-$attempt.dmp; gn';
      script.writeAsStringSync(
        // Child processes also stop at their initial loader breakpoint. CI has
        // no debugger stdin, so continue those events without hiding real AVs.
        'sxi ibp\n'
        'sxe -c "$captureCommands" av\n'
        'sxe -c "$captureCommands" c0000409\n'
        'g\n',
      );
      final result = <String, Object?>{'attempt': attempt};
      try {
        await run(
          environment['FLAX_WINDOWS_CDB']!,
          [
            '-o',
            '-G',
            '-hd',
            '-logo',
            '${capture.path}/attempt-$attempt.log',
            '-cf',
            script.path,
            original.executable,
            ...original.arguments,
          ],
          directory: working.path,
          environment: environment,
          inheritEnvironment: false,
          timeout: const Duration(minutes: 2),
        );
        result['debuggerExitCode'] = 0;
      } catch (error) {
        result['error'] = error.toString();
        if (error is ProcessException) {
          result['debuggerExitCode'] = error.errorCode;
        }
      }
      final dumps = working
          .listSync(followLinks: false)
          .whereType<File>()
          .where(
            (f) =>
                f.uri.pathSegments.last.startsWith('$prefix-$attempt') &&
                f.path.endsWith('.dmp'),
          )
          .toList();
      final savedDumps = <String>[];
      for (final dump in dumps) {
        final saved = dump.copySync(
          '${capture.path}/${dump.uri.pathSegments.last}',
        );
        dump.deleteSync();
        savedDumps.add(saved.path);
      }
      result['dumps'] = savedDumps;
      (receipt['attempts'] as List).add(result);
      if (dumps.isNotEmpty) break;
    }
  } finally {
    File('${capture.path}/crash.json')
        .writeAsStringSync(const JsonEncoder.withIndent('  ').convert(receipt));
    stderr.writeln(
      'Original failure retained; crash evidence: ${capture.path}',
    );
  }
}

Future<void> command(Future<void> Function() action) async {
  try {
    await action();
  } catch (error) {
    stderr.writeln(error);
    exitCode = 1;
  }
}
