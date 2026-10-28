import 'dart:convert';
import 'dart:io';

import 'package:crypto/crypto.dart';
import 'package:flax/native_target.dart';

import '../../tool/src/example_engine.dart';
import '../../tool/src/package_discovery.dart';
import '../../tool/src/package_verification.dart';
import '../../tool/src/process.dart';
import '../../tool/src/platform_application.dart';
import '../../tool/src/platform_binary.dart' show normalizeAppleCodeSignature;
import '../../tool/src/ui_suite.dart';

Future<void> main(List<String> arguments) => command(() async {
  if (arguments.length != 1 ||
      !['debug', 'debug-app', 'release', 'frames'].contains(arguments.single)) {
    throw ArgumentError(
      'Usage: dart run experiments/canvas_native/run.dart debug|debug-app|release|frames',
    );
  }
  if (Platform.environment['FLUTTER_ENGINE'] == null) {
    throw ArgumentError(
      'FLUTTER_ENGINE must select the matching maintained engine',
    );
  }
  final mode = arguments.single;
  final buildMode = mode == 'debug-app' ? 'debug' : 'release';
  final root = Directory.fromUri(Platform.script.resolve('../../')).path;
  final evidence = Directory('$root/.local/canvas-native')
    ..createSync(recursive: true);
  final applicationReceipt = File('${evidence.path}/application-$mode.json');
  if (applicationReceipt.existsSync()) applicationReceipt.deleteSync();
  final benchmarkReceipt = File('${evidence.path}/benchmark-$mode.json');
  if (benchmarkReceipt.existsSync()) benchmarkReceipt.deleteSync();
  await run('node', [
    'tool/ui_bundle.mjs',
    '--package',
    'flax_canvas',
  ], directory: root);
  final fixtures = await prepareUiFixtures(root, [
    (packageName: 'flax_canvas', path: 'test/ui/canvas_test.dart'),
    (packageName: 'flax_canvas', path: 'test/ui/wpt_test.dart'),
  ]);
  final fixtureFile = File('${evidence.path}/fixtures.json')
    ..writeAsStringSync(jsonEncode(fixtures));
  final defines = [
    '--dart-define=CANVAS_NATIVE_FIXTURES=${fixtureFile.path}',
    '--dart-define=CANVAS_NATIVE_RECEIPT=${evidence.path}/benchmark-$mode.json',
    '--dart-define=CANVAS_DRAW_IMAGE_RECEIPT=${evidence.path}/draw-image-frames.json',
  ];
  if (mode == 'debug') {
    await run('flutter', [
      'test',
      '--no-pub',
      '--enable-vmservice',
      '--reporter=expanded',
      ...defines,
      'experiments/canvas_native/benchmark_test.dart',
    ], directory: root);
    return;
  }
  await withPackageExample(root, findPackage(root, 'flax_canvas'), 'v8', (
    app,
  ) async {
    final entitlements = File(
      '$app/macos/Runner/${buildMode == 'debug' ? 'DebugProfile' : 'Release'}.entitlements',
    );
    entitlements.writeAsStringSync(
      entitlements.readAsStringSync().replaceAllMapped(
        RegExp(r'(<key>com.apple.security.app-sandbox</key>\s*)<true/>'),
        (match) => '${match[1]}<false/>',
      ),
    );
    if (mode == 'frames') {
      final source = File('$root/experiments/canvas_native/draw_image_app.dart')
          .uri;
      File('$app/lib/draw_image_main.dart').writeAsStringSync("""
import '$source' as experiment;
void main() => experiment.main();
""");
    } else {
      copyDartPackages(Directory(root), Directory('$app/../packages'), [
        'flax_test',
      ]);
      final manifest = File('$app/pubspec.yaml');
      final pubspec = readYamlFile(manifest);
      (pubspec['dependencies'] as Map<String, dynamic>)['integration_test'] = {
        'sdk': 'flutter',
      };
      final development = pubspec['dev_dependencies'] as Map<String, dynamic>;
      development['flax_test'] = {'path': '../packages/flax_test'};
      development['path_drawing'] = '1.0.1';
      development['material_ui'] = '1.1.1';
      manifest.writeAsStringSync(jsonEncode(pubspec));
      final test = File('$app/integration_test/canvas_native_test.dart');
      final uiTests = Directory('$app/test/canvas');
      copyTree(Directory('$root/packages/flax_canvas/test'), uiTests);
      File('${uiTests.path}/support/engine.dart').writeAsStringSync('''
import 'package:flax/runtime.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
FlaxJsRuntime createTestRuntime() => FlaxV8Engine.createRuntime();
''');
      final benchmark = File(
        '$root/experiments/canvas_native/benchmark_test.dart',
      ).uri;
      final commands = File(
        '$root/packages/flax_canvas/test/commands_test.dart',
      ).uri;
      test.writeAsStringSync('''
import 'package:integration_test/integration_test.dart';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import '$benchmark' as benchmark;
import '$commands' as commands;
import '../test/canvas/ui/canvas_test.dart' as canvas;
import '../test/canvas/ui/wpt_test.dart' as wpt;
import '../test/canvas/ui/font_image_test.dart' as capabilities;

@Native<Uint32 Function()>(symbol: '_dyld_image_count')
external int imageCount();
@Native<Pointer<Uint8> Function(Uint32)>(symbol: '_dyld_get_image_name')
external Pointer<Uint8> imageName(int index);

void main() {
  final images = <String>[];
  for (var index = 0; index < imageCount(); index++) {
    final bytes = imageName(index);
    var length = 0;
    while (bytes[length] != 0) { length++; }
    final path = utf8.decode(bytes.asTypedList(length));
    if (path.contains('/FlutterMacOS.framework/') && path.endsWith('/FlutterMacOS')) {
      images.add(File(path).resolveSymbolicLinksSync());
    }
  }
  final framework = File(
    '\${File(Platform.resolvedExecutable).parent.parent.path}/Frameworks/FlutterMacOS.framework/Versions/A/FlutterMacOS',
  ).resolveSymbolicLinksSync();
  if (images.length != 1 || images.single != framework) {
    throw StateError('Unexpected loaded Flutter framework: \$images');
  }
  print('CANVAS_ENGINE_IMAGE ' + jsonEncode(framework));
  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized();
  benchmark.main();
  commands.main();
  canvas.main();
  wpt.main();
  capabilities.main();
  binding.allTestsPassed.future.then((passed) {
    print(passed ? 'CANVAS_NATIVE_PASSED' : 'CANVAS_NATIVE_FAILED');
    exit(passed ? 0 : 1);
  });
}
''');
    }
    await run('flutter', ['pub', 'get'], directory: app);
    await run('flutter', [
      'build',
      'macos',
      '--$buildMode',
      '--no-pub',
      mode == 'frames'
          ? '--target=lib/draw_image_main.dart'
          : '--target=integration_test/canvas_native_test.dart',
      ...defines,
    ], directory: app);
    final product =
        '$app/build/macos/Build/Products/${buildMode == 'debug' ? 'Debug' : 'Release'}/flax_standalone.app';
    final framework =
        '$product/Contents/Frameworks/FlutterMacOS.framework/Versions/A/FlutterMacOS';
    final symbols = await Process.run('nm', ['-gU', framework]);
    if (symbols.exitCode != 0 ||
        !['_flax_canvas_dispatch', '_flax_canvas_version'].every(
          (symbol) => (symbols.stdout as String)
              .split('\n')
              .any((line) => line.trim().endsWith(' $symbol')),
        )) {
      throw StateError(
        'Application did not package the Canvas engine extension',
      );
    }
    final original =
        '${Platform.environment['FLUTTER_ENGINE']}/out/flax_mac_${buildMode}_arm64/FlutterMacOS.framework/Versions/A/FlutterMacOS';
    final hashes = <String>[];
    final audit = Directory.systemTemp.createTempSync(
      'canvas-framework-audit-',
    );
    try {
      for (final (index, path) in [original, framework].indexed) {
        final copy = File(path).copySync('${audit.path}/$index');
        await normalizeAppleCodeSignature(
          copy,
          stripSymbols: buildMode == 'release',
        );
        hashes.add((await sha256.bind(copy.openRead()).first).toString());
      }
    } finally {
      audit.deleteSync(recursive: true);
    }
    if (hashes[0] != hashes[1]) {
      throw StateError(
        'Application framework differs from the selected engine',
      );
    }
    final output = await runDesktopApplication(
      FlaxNativeTarget('macos-arm64'),
      product,
      mode == 'frames' ? 'CANVAS_DRAW_IMAGE_PASSED' : 'CANVAS_NATIVE_PASSED',
    );
    String? loadedFramework;
    if (mode != 'frames') {
      final image = RegExp(r'CANVAS_ENGINE_IMAGE (.+)').firstMatch(output);
      if (image == null) throw StateError('Missing loaded framework evidence');
      loadedFramework = jsonDecode(image[1]!) as String;
      if (loadedFramework != File(framework).resolveSymbolicLinksSync()) {
        throw StateError('Application loaded a different Flutter framework');
      }
    }
    final receipt = const JsonEncoder.withIndent('  ').convert({
      'mode': buildMode,
      'passed': true,
      'originalFramework': original,
      'packagedFramework': framework,
      'loadedFramework': loadedFramework,
      'normalizedFrameworkSha256': hashes.first,
      'canvasExportsPresent': true,
    });
    applicationReceipt.writeAsStringSync('$receipt\n');
  }, forApplication: true);
});
