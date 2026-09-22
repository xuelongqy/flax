import 'dart:convert';
import 'dart:io';

import 'src/engine_selection.dart';
import 'src/example_engine.dart';
import 'src/process.dart';
import 'src/ui_testing.dart';

Future<void> main(List<String> arguments) => command(() async {
  final engine = selectedEngine(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  requireUiAssets(root, engine: engine);

  await run('pnpm', [
    '--silent',
    '--filter',
    '@flax/example-embedded...',
    'run',
    'build',
  ], directory: root);
  await run('node', [
    'tool/example_bundle.mjs',
    '--aggregate',
  ], directory: root);

  await withExample(root, engine, 'embedded', (example) async {
    await run('flutter', [
      'test',
      '--no-pub',
      '--reporter',
      'expanded',
      'test/aggregate_test.dart',
    ], directory: example);

    final result = File('$example/build/ui-integration.json');
    if (result.existsSync()) result.deleteSync();
    await run('flutter', [
      'drive',
      '--no-pub',
      '-d',
      'macos',
      '--driver',
      'test_driver/integration_test.dart',
      '--target',
      'integration_test/app_test.dart',
    ], directory: example);

    if (!result.existsSync()) {
      throw StateError('Aggregate integration did not produce a result');
    }
    final receipt =
        jsonDecode(result.readAsStringSync()) as Map<String, dynamic>;
    if (receipt['scenario'] != 'embedded-module-aggregate' ||
        receipt['completed'] != true) {
      throw StateError('Aggregate integration did not complete successfully');
    }
  });
});
