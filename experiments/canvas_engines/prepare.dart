// ignore_for_file: avoid_print
import 'dart:io';
import 'dart:convert';

import '../../tool/src/package_discovery.dart';
import '../../tool/src/package_verification.dart';

void main() {
  final root = Directory.fromUri(Platform.script.resolve('../../')).path;
  final bundle = Process.runSync('node', [
    '--input-type=module',
    '-e',
    "import {build} from 'esbuild'; import {bundleOptionsFor} from './tool/src/bundle.mjs'; await build({...await bundleOptionsFor(process.cwd()+'/packages/flax_canvas/example/js'),entryPoints:['experiments/canvas_engines/fixture.ts'],outfile:'.local/engine-benchmark.js'});",
  ], workingDirectory: root);
  if (bundle.exitCode != 0) {
    throw StateError('JS bundle failed: ${bundle.stderr}');
  }
  final app = '$root/.local/app';
  final names = packageDependencyClosure(root, ['flax_canvas', 'flax']).toList()
    ..sort();
  copyDartPackages(Directory(root), Directory('$app/packages'), names);
  copyTree(
    Directory('$root/packages/flax_canvas/example/assets'),
    Directory('$app/assets'),
  );
  File('$root/.local/engine-benchmark.js')
      .copySync('$app/assets/engine-benchmark.js');
  File('$root/experiments/canvas_engines/metrics.swift')
      .copySync('$app/ios/Runner/AppDelegate.swift');
  File('$app/lib/main.dart').writeAsStringSync(
    "import '${File('$root/experiments/canvas_engines/app.dart').uri}' as bench;\nvoid main()=>bench.main();\n",
  );
  File('$app/pubspec.yaml').writeAsStringSync(
    jsonEncode({
      'name': 'canvas_engine_benchmark',
      'version': '1.0.0+1',
      'environment': {'sdk': '^3.13.2'},
      'dependencies': {
        'flutter': {'sdk': 'flutter'},
        'crypto': '^3.0.7',
        for (final name in names) name: {'path': 'packages/$name'},
      },
      'flutter': {
        'uses-material-design': true,
        'assets': ['assets/', 'assets/flax_modules/'],
      },
    }),
  );
  final project = File('$app/ios/Runner.xcodeproj/project.pbxproj');
  project.writeAsStringSync(
    project
        .readAsStringSync()
        .replaceAll(
          RegExp(r'IPHONEOS_DEPLOYMENT_TARGET = [^;]+;'),
          'IPHONEOS_DEPLOYMENT_TARGET = 16.3;',
        )
        .replaceAll(
          RegExp(r'PRODUCT_BUNDLE_IDENTIFIER = [^;]+;'),
          'PRODUCT_BUNDLE_IDENTIFIER = dev.flax.canvas.enginebench;',
        ),
  );
  print('Prepared ${names.length} packages');
}
