import 'dart:io';

import '../../tool/src/example_engine.dart';
import '../../tool/src/package_discovery.dart';
import '../../tool/src/process.dart';

Future<void> main(List<String> args) => command(() async {
  if (args.length != 1 || !['debug', 'release'].contains(args.single)) {
    throw ArgumentError('Select debug or release');
  }
  final mode = args.single;
  final root = Directory.current.path;
  final output = Directory('$root/.local/canvas-native/afterglow')
      .resolveSymbolicLinksSync();
  await withPackageExample(root, findPackage(root, 'flax_canvas'), 'v8', (
    app,
  ) async {
    File('$output/native.js').copySync('$app/assets/afterglow.js');
    File('$app/lib/afterglow_main.dart').writeAsStringSync(
      "import 'package:flax_engine_v8/flax_engine_v8.dart';\n"
      "import '${File('$root/experiments/canvas_native/afterglow_app.dart').uri}' as app; "
      'void main()=>app.runAfterglow(FlaxV8Engine.createRuntime);\n',
    );
    final entitlement = File(
      '$app/macos/Runner/${mode == 'debug' ? 'DebugProfile' : 'Release'}.entitlements',
    );
    entitlement.writeAsStringSync(
      entitlement.readAsStringSync().replaceAllMapped(
        RegExp(r'(<key>com.apple.security.app-sandbox</key>\s*)<true/>'),
        (m) => '${m[1]}<false/>',
      ),
    );
    final window = File('$app/macos/Runner/MainFlutterWindow.swift');
    window.writeAsStringSync(
      window.readAsStringSync().replaceFirst(
        'super.awakeFromNib()',
        'self.setContentSize(NSSize(width: 1000, height: 760))\n    NSApp.activate(ignoringOtherApps: true)\n    super.awakeFromNib()',
      ),
    );
    await run('flutter', [
      'build',
      'macos',
      '--$mode',
      '--no-pub',
      '--target=lib/afterglow_main.dart',
      '--dart-define=AFTERGLOW_OUTPUT=$output',
      if (Platform.environment['AFTERGLOW_CASES'] case final cases?)
        '--dart-define=AFTERGLOW_CASES=$cases',
    ], directory: app);
    final product =
        '$app/build/macos/Build/Products/${mode == 'debug' ? 'Debug' : 'Release'}/flax_standalone.app';
    final saved = '$output/apps/$mode.app';
    await run('ditto', [product, saved]);
    entitlement.copySync('$output/$mode-entitlements.plist');
    File('$output/running-app.txt').writeAsStringSync(saved);
    stdout.writeln('AFTERGLOW_APP $saved');
    await run(
      '$saved/Contents/MacOS/flax_standalone',
      [],
      directory: app,
      timeout: const Duration(minutes: 20),
    );
  });
});
