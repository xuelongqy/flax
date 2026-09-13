import 'package:flax/flax.dart';
import 'package:flax_engine_hermes/flax_engine_hermes.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

final bindings = FlaxBindingRegistry([flutterBindings]);

Future<void> main() => startApplication();

Future<void> startApplication({String? storageDirectory}) async {
  WidgetsFlutterBinding.ensureInitialized();
  await FlaxLocalStoragePlugin.initialize(directory: storageDirectory);
  final source = await rootBundle.loadString('assets/app.js');
  runApp(
    Directionality(
      textDirection: TextDirection.ltr,
      child: FlaxView(
        createRuntime: FlaxHermesEngine.createRuntime,
        source: source,
        sourceUrl: 'flax:flax_local_storage:example',
        bindings: bindings,
        plugins: [const FlaxLocalStoragePlugin()],
      ),
    ),
  );
}
