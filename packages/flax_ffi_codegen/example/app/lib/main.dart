import 'package:flax/flax.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  final source = await rootBundle.loadString('assets/app.js');
  runApp(
    Directionality(
      textDirection: TextDirection.ltr,
      child: Center(
        child: FlaxView(
          createRuntime: FlaxEngine.createRuntime,
          source: source,
          bindings: FlaxBindingRegistry([flutterBindings]),
        ),
      ),
    ),
  );
}
