import 'dart:io';

import 'package:path/path.dart' as p;

import 'src/process.dart';
import 'src/example_engine.dart';
import 'src/example_network.dart';
import 'src/package_discovery.dart';
import 'src/ui_suite.dart';

Future<void> main(List<String> arguments) => command(() async {
  final options = UiTestOptions(arguments);
  if (options.file != null) {
    throw ArgumentError('--file applies to UI tests, not example applications');
  }
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final package = await prepareExample(root, packageName: options.packageName);
  Future<void> launch(String example) async {
    final network = await ExampleNetworkServer.forExample(example);
    try {
      if (network != null) {
        stdout.writeln('Example HTTP: ${network.baseUrl}status');
        stdout.writeln(
          'Example WebSocket: ${network.baseUrl.replaceFirst('http', 'ws')}socket',
        );
      }
      await run(
        'flutter',
        [
          'run',
          '--no-pub',
          '-d',
          'macos',
          if (network != null)
            '--dart-define=FLAX_FETCH_BASE_URL=${network.baseUrl}',
        ],
        directory: example,
        timeout: const Duration(days: 1),
      );
    } finally {
      await network?.close();
    }
  }

  if (package == null) {
    await withExample(root, options.engine, 'embedded', launch);
  } else {
    await withPackageExample(root, package, options.engine, launch);
  }
});

/// Build only the selected example and its actual JavaScript dependencies.
Future<FlaxWorkspacePackage?> prepareExample(
  String root, {
  String? packageName,
  Future<void> Function(String, List<String>, {String? directory}) runCommand =
      run,
}) async {
  final package = packageName == null ? null : findPackage(root, packageName);
  if (package != null && !package.hasFlutterExample) {
    throw ArgumentError('No Flutter example for ${package.name}');
  }
  final project = package?.example.path ?? '$root/examples/embedded';
  final manifest = File('$project/js/package.json');
  if (package == null || manifest.existsSync()) {
    await buildJsDependencies(
      root,
      Directory('$project/js'),
      runCommand: runCommand,
    );
    await runCommand('node', [
      'tool/example_bundle.mjs',
      if (package == null)
        '--aggregate'
      else ...[
        '--package',
        p.basename(package.directory.path),
      ],
    ], directory: root);
  }
  return package;
}
