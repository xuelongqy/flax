import 'package:flax/flax.dart';
import 'package:flax_engine_hermes/flax_engine_hermes.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

final bindings = FlaxBindingRegistry([flutterBindings]);

Future<void> main() => startApplication();

Future<void> startApplication() async {
  WidgetsFlutterBinding.ensureInitialized();

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
