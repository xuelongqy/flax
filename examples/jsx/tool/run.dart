import 'dart:io';

import '../../../tool/src/example_engine.dart';
import '../../../tool/src/process.dart';

Future<void> main() => command(() async {
  final root = Directory.fromUri(Platform.script.resolve('../../../')).path;
  final source = File('$root/examples/jsx/assets/jsx-hmr.js');
  if (!source.existsSync()) {
    throw StateError(
      'Start pnpm --filter @flax/example-jsx run dev:hmr first.',
    );
  }
  await withExample(root, 'v8', 'standalone', (example) async {
    final entry = File('$example/lib/main_jsx_hmr.dart');
    entry.writeAsStringSync('''
import 'package:flax/flax.dart';
import 'package:flax_websocket/flax_websocket.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  runApp(MaterialApp(
    home: Scaffold(
      body: SizedBox.expand(
        child: FlaxView.network(
          uri: Uri.parse('http://127.0.0.1:5173/@flax/dev.js'),
          format: FlaxRemoteFormat.javascript,
          developmentMode: true,
          loadingBuilder: (_) => const SizedBox.expand(),
          createRuntime: FlaxEngine.createRuntime,
          plugins: const [FlaxWebSocketPlugin()],
        ),
      ),
    ),
  ));
}
''');
    await run(
      'flutter',
      ['run', '--no-pub', '-d', 'macos', '-t', 'lib/main_jsx_hmr.dart'],
      directory: example,
      timeout: const Duration(days: 1),
    );
  });
});
