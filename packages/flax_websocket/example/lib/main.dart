import 'package:flax/flax.dart';
import 'package:flax_example_support/flax_example_support.dart';
import 'package:flax_engine_hermes/flax_engine_hermes.dart';
import 'package:flax_websocket/flax_websocket.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

final bindings = FlaxBindingRegistry([flutterBindings]);

Future<void> main() => startApplication();

Future<void> startApplication({String? apiBaseUrl}) async {
  WidgetsFlutterBinding.ensureInitialized();

  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );

  final source = await rootBundle.loadString('assets/app.js');
  runApp(
    FlaxExampleApp(
      title: 'WebSocket',
      child: FlaxView(
        createRuntime: FlaxHermesEngine.createRuntime,
        source: source,
        sourceUrl: 'flax:flax_websocket:example',
        bindings: bindings,
        plugins: [
          FlaxWebSocketPlugin(
            baseUrl:
                apiBaseUrl ??
                const String.fromEnvironment(
                  'FLAX_FETCH_BASE_URL',
                  defaultValue: 'http://127.0.0.1:8080/',
                ),
          ),
        ],
      ),
    ),
  );
}
