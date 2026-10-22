import 'package:flax/flax.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'flax_bindings/app.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Center(
          child: FlaxView.bundle(
            prefix: 'assets/flax/app',
            createRuntime: FlaxEngine.createRuntime,
            plugins: [appPlugin],
          ),
        ),
      ),
    ),
  );
}
