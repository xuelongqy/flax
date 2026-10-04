import 'dart:io';

import 'src/ui_suite.dart';
import 'src/process.dart';
import 'src/ui_testing.dart';
import 'src/package_discovery.dart';
import 'src/prepared_checks.dart';

Future<void> main(List<String> arguments) => command(() async {
  final options = UiTestOptions(arguments);
  final engine = options.engine;
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  requireUiAssets(root, engine: engine);

  collectUiTests(root, packageName: options.packageName, file: options.file);
  consumePreparedEnvironment(root);
  if (Platform.environment['FLAX_CHECK_PREPARED'] != '1') {
    await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
    await run('node', ['tool/ui_bundle.mjs'], directory: root);
    await run('node', ['tool/example_bundle.mjs'], directory: root);
  }
  await runFrameworkTests(
    root,
    engine: engine,
    packageName: options.packageName,
    file: options.file,
  );
  for (final package in discoverPackages(root)) {
    if (options.packageName != null && package.name != options.packageName) {
      continue;
    }
    if (package.uiTests.existsSync()) {
      await runPackageExampleTests(root, package, engine: engine);
    }
  }
  await run(
    Platform.resolvedExecutable,
    ['run', 'tool/check_aggregate.dart', '--engine=$engine'],
    directory: root,
    environment: {'FLAX_CHECK_PREPARED': '1'},
  );
});
