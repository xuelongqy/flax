import 'dart:convert';
import 'dart:io';

import 'src/example_engine.dart';
import 'src/process.dart';
import 'src/ui_testing.dart';
import 'src/platform_selection.dart';

Future<void> main(List<String> arguments) => command(() async {
  if (arguments.isNotEmpty) {
    throw ArgumentError('This command does not accept arguments');
  }
  const engine = 'v8';
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  requireUiAssets(root, engine: engine);

  if (Platform.environment['FLAX_CHECK_PREPARED'] != '1') {
    await buildJsDependencies(root, Directory('$root/examples/embedded/js'));
    await run('node', [
      'tool/example_bundle.mjs',
      '--aggregate',
    ], directory: root);
  }

  await withExample(root, engine, 'embedded', (example) async {
    await run('flutter', [
      'test',
      '--no-pub',
      '--reporter',
      'expanded',
      'test',
    ], directory: example);

    final result = File('$example/build/ui-integration.json');
    if (result.existsSync()) result.deleteSync();
    await run('flutter', [
      'drive',
      '--no-pub',
      // Match the direct VM connection used by maintained-engine application gates.
      '--no-dds',
      '-d',
      currentCheckDevice(),
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
