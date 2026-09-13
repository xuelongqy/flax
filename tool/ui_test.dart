import 'dart:io';

import 'src/process.dart';
import 'src/engine_selection.dart';
import 'src/ui_testing.dart';

Future<void> main(List<String> arguments) => command(() async {
  final engine = selectedEngine(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  requireUiAssets(root, engine: engine);
  await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
  await run('node', ['tool/ui_bundle.mjs'], directory: root);
  await runFrameworkTests(root, engine: engine);
});
