import 'dart:io';

import 'src/engine_selection.dart';
import 'src/package_discovery.dart';
import 'src/process.dart';

Future<void> main(List<String> arguments) => command(() async {
  final engine = selectedEngine(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final package = findPackage(root, 'flax_engine_$engine');
  final entry = File('${package.directory.path}/tool/native.dart');
  if (!entry.existsSync()) {
    throw StateError('${package.name} does not provide tool/native.dart');
  }
  await run(
    Platform.resolvedExecutable,
    ['run', 'tool/native.dart'],
    directory: package.directory.path,
    timeout: const Duration(hours: 2),
  );
});
