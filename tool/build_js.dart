import 'dart:io';

import 'src/prepared_checks.dart';
import 'src/process.dart';

Future<void> main() => command(() async {
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  if (Platform.environment['FLAX_CHECK_PREPARED'] == '1' &&
      consumePreparedEnvironment(root)) {
    return;
  }
  await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
});
