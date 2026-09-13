import 'dart:convert';
import 'dart:ffi';
import 'dart:io';

import 'src/process.dart';
import 'src/engine_selection.dart';
import 'src/example_engine.dart';
import 'src/ui_testing.dart';
import 'src/standalone_verification.dart';

Future<void> main(List<String> arguments) => command(() async {
  final engine = selectedEngine(arguments);
  if (!Platform.isMacOS || Abi.current() != Abi.macosArm64) {
    throw UnsupportedError('UI validation requires macOS arm64');
  }
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  await run(Platform.resolvedExecutable, [
    'run',
    'tool/check_runtime.dart',
    '--engine=$engine',
  ], directory: root);
  await run('pnpm', ['--silent', 'run', 'js:build'], directory: root);
  await run('node', ['tool/example_bundle.mjs'], directory: root);
  await run('node', ['tool/ui_bundle.mjs'], directory: root);
  await run(Platform.resolvedExecutable, [
    'run',
    'tool/package.dart',
    'tests',
  ], directory: root);
  await runFrameworkTests(root, engine: engine);
  await runAllPackageExamples(root, engine: engine);
  await verifyStandalone(root, engine: engine);
  await withExample(root, engine, 'embedded', (example) async {
    await run('flutter', [
      'test',
      '--no-pub',
      '--reporter',
      'expanded',
      'test/example',
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
    if (!result.existsSync() ||
        (jsonDecode(result.readAsStringSync())
                as Map<String, dynamic>)['completed'] !=
            true) {
      throw StateError(
        'Flutter drive did not produce a successful integration result',
      );
    }
    await run('flutter', [
      'build',
      'macos',
      '--release',
      '--no-pub',
    ], directory: example);
  });
});
