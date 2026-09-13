import 'dart:async';
import 'dart:io';

Future<void> run(
  String executable,
  List<String> arguments, {
  String? directory,
  Map<String, String>? environment,
  bool inheritEnvironment = true,
  Duration timeout = const Duration(minutes: 30),
}) async {
  stdout.writeln('> $executable ${arguments.join(' ')}');
  final process = await Process.start(
    executable,
    arguments,
    workingDirectory: directory,
    environment: environment,
    includeParentEnvironment: inheritEnvironment,
    mode: ProcessStartMode.inheritStdio,
  );
  final code = await process.exitCode.timeout(
    timeout,
    onTimeout: () {
      process.kill(ProcessSignal.sigkill);
      throw TimeoutException('Command timed out: $executable', timeout);
    },
  );
  if (code != 0) {
    throw ProcessException(executable, arguments, 'Command failed', code);
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
