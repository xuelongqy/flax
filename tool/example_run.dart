import 'dart:io';

import 'src/process.dart';
import 'src/engine_selection.dart';
import 'src/example_engine.dart';

Future<void> main(List<String> arguments) => command(() async {
  final engine = selectedEngine(arguments);
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
  await run('node', ['tool/example_bundle.mjs'], directory: root);
  await withExample(root, engine, 'embedded', (example) async {
    await run(
      'flutter',
      ['run', '--no-pub', '-d', 'macos'],
      directory: example,
      timeout: const Duration(days: 1),
    );
  });
});
