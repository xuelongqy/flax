import 'dart:io';

import 'src/process.dart';
import 'src/ui_suite.dart';
import 'src/ui_testing.dart';
import 'src/prepared_checks.dart';

Future<void> main(List<String> arguments) => command(() async {
  final options = UiTestOptions(arguments);
  final engine = options.engine;
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  collectUiTests(root, packageName: options.packageName, file: options.file);
  requireUiAssets(root, engine: engine);
  consumePreparedEnvironment(root);
  if (Platform.environment['FLAX_CHECK_PREPARED'] != '1') {
    await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
    await run('node', ['tool/ui_bundle.mjs'], directory: root);
  }
  await runFrameworkTests(
    root,
    engine: engine,
    packageName: options.packageName,
    file: options.file,
  );
});
