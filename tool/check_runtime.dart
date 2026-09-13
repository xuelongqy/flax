import 'dart:io';

import 'src/package_verification.dart';
import 'src/process.dart';
import 'src/engine_selection.dart';

Future<void> main(List<String> arguments) => command(() async {
  final engine = selectedEngine(arguments);

  final root = Directory.fromUri(Platform.script.resolve('../'));
  await run(Platform.resolvedExecutable, [
    'run',
    'tool/ffi.dart',
    '--check',
  ], directory: root.path);
  await run(
    Platform.resolvedExecutable,
    ['run', 'tool/native.dart', '--engine=$engine'],
    directory: root.path,
    timeout: const Duration(hours: 2),
  );
  await run(Platform.resolvedExecutable, [
    'test',
    'integration_test',
    '--reporter',
    'expanded',
  ], directory: '${root.path}/packages/flax_engine_$engine');
  await verifyPackage(root, engine: engine);
});
