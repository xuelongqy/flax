import 'dart:io';

import 'src/process.dart';
import 'src/engine_selection.dart';
import 'src/example_engine.dart';
import 'src/ui_testing.dart';

Future<void> main(List<String> arguments) => command(() async {
  final sandboxAssets = arguments.contains('--sandbox-assets');
  final engine = selectedEngine(
    arguments.where((argument) => argument != '--sandbox-assets').toList(),
  );
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  requireUiAssets(root, engine: engine);
  await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
  await run('pnpm', [
    'run',
    'bundle',
  ], directory: '$root/examples/standalone/js');
  await withExample(root, engine, 'standalone', (example) async {
    await run(
      'flutter',
      [
        'run',
        '--no-pub',
        '-d',
        'macos',
        if (sandboxAssets) '--dart-define=FLAX_SANDBOX_ASSETS=true',
        for (final key in ['FLAX_ASSET_PREFIX', 'FLAX_SANDBOX_DIRECTORY'])
          if (Platform.environment[key] case final String value)
            '--dart-define=$key=$value',
      ],
      directory: example,
      timeout: const Duration(days: 1),
    );
  });
});
