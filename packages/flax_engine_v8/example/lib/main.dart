import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
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
        createRuntime: FlaxV8Engine.createRuntime,
        source: source,
        sourceUrl: 'flax:flax_engine_v8:example',
        bindings: bindings,
      ),
    ),
  );
}
