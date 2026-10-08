import 'dart:io';

import 'src/process.dart';
import 'src/engine_selection.dart';
import 'src/ui_testing.dart';

Future<void> main(List<String> arguments) => command(() async {
  final engine = selectedEngine(arguments);

  final root = Directory.fromUri(Platform.script.resolve('../'));
  requireUiAssets(root.path, engine: engine);
  await run(Platform.resolvedExecutable, [
    'run',
    'tool/ffi.dart',
    '--check',
  ], directory: root.path);
  await run('flutter', [
    'test',
    '--enable-vmservice',
    '--no-pub',
    '--concurrency=1',
    '--reporter',
    'expanded',
    'test/ui/engine_runtime_test.dart',
    'test/ui/engine_gc_test.dart',
  ], directory: '${root.path}/packages/flax');
});
