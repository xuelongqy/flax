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
      child: Row(
        children: [
          for (final entry in const [
            ('Shared 1', 'shop'),
            ('Shared 2', 'shop'),
            ('Isolated', 'private'),
          ])
            Expanded(
              child: Column(
                children: [
                  Text(entry.$1),
                  Expanded(
                    child: FlaxView(
                      namespace: entry.$2,
                      createRuntime: FlaxHermesEngine.createRuntime,
                      source: source,
                      sourceUrl: 'flax:flax_local_storage:example/${entry.$2}',
                      bindings: bindings,
                      plugins: const [FlaxLocalStoragePlugin()],
                    ),
                  ),
                ],
              ),
            ),
        ],
      ),
    ),
  );
}
