import 'dart:io';

import 'src/process.dart';
import 'src/engine_selection.dart';
import 'src/example_engine.dart';
import 'src/ui_testing.dart';

Future<void> main(List<String> arguments) => command(() async {
  const modes = {
    '--sandbox-assets': 'directory',
    '--package-assets': 'package',
    '--script-assets': 'file',
    '--remote-js': 'remote-js',
    '--remote-package': 'remote-package',
  };
  final selected = arguments.where(modes.containsKey).toList();
  if (selected.length > 1) {
    throw ArgumentError('Select one application source.');
  }
  final mode = selected.isEmpty ? null : modes[selected.single];
  final engine = selectedEngine(
    arguments.where((argument) => !modes.containsKey(argument)).toList(),
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
        if (mode != null) '--dart-define=FLAX_APPLICATION_MODE=$mode',
        for (final key in [
          'FLAX_ASSET_PREFIX',
          'FLAX_SANDBOX_DIRECTORY',
          'FLAX_NETWORK_URL',
          'FLAX_EXPECTED_SHA256',
        ])
          if (Platform.environment[key] case final String value)
            '--dart-define=$key=$value',
      ],
      directory: example,
      timeout: const Duration(days: 1),
    );
  });
});
