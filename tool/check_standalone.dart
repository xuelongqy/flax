import 'dart:io';

import 'src/process.dart';
import 'src/ui_testing.dart';
import 'src/standalone_verification.dart';

Future<void> main(List<String> arguments) => command(() async {
  if (arguments.isNotEmpty) {
    throw ArgumentError('This command does not accept arguments');
  }
  const engine = 'v8';
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  requireUiAssets(root, engine: engine);
  await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
  await run('pnpm', [
    'run',
    'bundle',
  ], directory: '$root/examples/standalone/js');
  await verifyStandalone(root, engine: engine);
});
