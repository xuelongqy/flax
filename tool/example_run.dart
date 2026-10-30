import 'dart:io';
import 'dart:convert';

import 'package:path/path.dart' as p;

import 'src/process.dart';
import 'src/example_engine.dart';
import 'src/example_network.dart';
import 'src/package_discovery.dart';
import 'src/package_verification.dart';
import 'src/platform_application.dart';
import 'src/platform_binary.dart';
import 'src/platform_selection.dart';
import 'src/ui_suite.dart';

Future<void> main(List<String> arguments) => command(() async {
  final target = currentCheckTarget();
  final flags = {'--release', '--build-only'};
  for (final flag in flags) {
    if (arguments.where((argument) => argument == flag).length > 1) {
      throw ArgumentError('Duplicate $flag');
    }
  }
  final buildOnly = arguments.contains('--build-only');
  final release =
      arguments.contains('--release') || target.name == 'ios-device-arm64';
  if (target.name == 'ios-simulator-arm64' && release) {
    throw ArgumentError('The iOS simulator uses the Debug engine');
  }
  if (target.mobile &&
      !buildOnly &&
      Platform.environment['FLAX_CHECK_DEVICE'] == null) {
    throw ArgumentError('Set FLAX_CHECK_DEVICE to the target device ID');
  }
  final options = UiTestOptions(
    arguments.where((argument) => !flags.contains(argument)).toList(),
  );
  if (options.file != null) {
    throw ArgumentError('--file applies to UI tests, not example applications');
  }
  final root = Directory.fromUri(Platform.script.resolve('../')).path;
  final package = await prepareExample(root, packageName: options.packageName);
  Future<void> launch(String example) async {
    configurePlatformProject(example, target);
    if (buildOnly) {
      await run('flutter', [
        'build',
        ...platformBuildArguments(target, release: release, signed: true),
        '--no-pub',
      ], directory: example);
      final mode = release ? 'release' : 'debug';
      final product = platformProduct(example, target, release: release);
      final audit = await verifyEngineApplication(
        product,
        mode,
        target: target,
      );
      final output = Directory(
        '$root/build/examples/${package?.name ?? 'embedded'}/${target.name}/$mode',
      )..createSync(recursive: true);
      final destination = '${output.path}/${p.basename(product)}';
      if (FileSystemEntity.isDirectorySync(product)) {
        if (target.apple) {
          await run('ditto', [product, destination]);
        } else {
          copyTree(Directory(product), Directory(destination));
        }
      } else {
        File(product).copySync(destination);
      }
      File('${output.path}/verification.json').writeAsStringSync(
        '${const JsonEncoder.withIndent('  ').convert(audit)}\n',
      );
      stdout.writeln('Verified example: $destination');
      return;
    }
    final network = await ExampleNetworkServer.forExample(
      example,
      fetch: package?.name == 'flax',
    );
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
          if (release) '--release',
          '--no-pub',
          '-d',
          currentCheckDevice(),
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
    await withExample(root, 'v8', 'embedded', launch, forApplication: true);
  } else {
    await withPackageExample(root, package, 'v8', launch, forApplication: true);
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
