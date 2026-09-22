import 'dart:io';

import 'src/engine_selection.dart';
import 'src/process.dart';
import 'src/ui_testing.dart';

const _uiOwners = [
  'flax',
  'flax_canvas',
  'flax_fetch',
  'flax_local_storage',
  'flax_material_ui',
  'flax_websocket',
];

Future<void> main(List<String> arguments) => command(() async {
  final engine = selectedEngine(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  requireUiAssets(root, engine: engine);

  for (final package in _uiOwners) {
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
