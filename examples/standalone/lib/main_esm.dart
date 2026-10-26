import 'package:flax/flax.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  const remote = String.fromEnvironment('FLAX_MODULE_URL');
  final view = remote.isEmpty
      ? FlaxView.bundle(
          prefix: 'assets/flax_esm',
          createRuntime: FlaxEngine.createRuntime,
        )
      : FlaxView.network(
          uri: Uri.parse(remote),
          format: FlaxRemoteFormat.javascript,
          entryFormat: FlaxEntryFormat.module,
          createRuntime: FlaxEngine.createRuntime,
        );
  runApp(
    MaterialApp(
      home: Scaffold(body: Center(child: view)),
    ),
  );
}
