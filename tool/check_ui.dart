import 'dart:io';

import 'src/engine_selection.dart';
import 'src/process.dart';
import 'src/ui_testing.dart';
import 'src/package_discovery.dart';

Future<void> main(List<String> arguments) => command(() async {
  final engine = selectedEngine(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  requireUiAssets(root, engine: engine);

  for (final package in discoverPackages(
    root,
  ).where((p) => p.uiTests.existsSync()).map((p) => p.name)) {
    await run(Platform.resolvedExecutable, [
      'run',
      'tool/package.dart',
      'integration',
      package,
      '--engine=$engine',
    ], directory: root);
  }
  await run(Platform.resolvedExecutable, [
    'run',
    'tool/check_aggregate.dart',
    '--engine=$engine',
  ], directory: root);
});
