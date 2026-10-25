// Exercises the legacy iOS factory during its deprecation period.
// ignore_for_file: deprecated_member_use, deprecated_member_use_from_same_package
import 'package:flax/flax.dart';
import 'package:flax_engine_hermes/flax_engine_hermes.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

final bindings = FlaxBindingRegistry([flutterBindings]);

Future<void> main() => startApplication();

Future<void> startApplication() async {
  WidgetsFlutterBinding.ensureInitialized();

  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );

  final source = await rootBundle.loadString('assets/app.js');
  runApp(
    Directionality(
      textDirection: TextDirection.ltr,
      child: FlaxView(
        createRuntime: FlaxHermesEngine.createRuntime,
        source: source,
        sourceUrl: 'flax:flax_engine_hermes:example',
        bindings: bindings,
      ),
    ),
  );
}
