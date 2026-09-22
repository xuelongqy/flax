import 'package:flax/flax.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_fetch/flax_fetch.dart';
import 'package:flax_websocket/flax_websocket.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_standalone/engine.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

final bindings = FlaxBindingRegistry([flutterBindings, materialBindings]);
FlaxJsRuntime createRuntime() => createExampleRuntime();

Future<void> main() => startApplication(
  apiBaseUrl: const String.fromEnvironment('FLAX_FETCH_BASE_URL'),
);

Future<void> startApplication({
  String? apiBaseUrl,
  String? storageDirectory,
}) async {
  WidgetsFlutterBinding.ensureInitialized();
  try {
    final source = await rootBundle.loadString('assets/app.js');
    Flax.moduleAssets = await FlaxModuleAssets.load(
      bundle: rootBundle,
      manifest: 'assets/flax_modules/modules.json',
    );
    await FlaxLocalStoragePlugin.initialize(directory: storageDirectory);
    runApp(
      FlaxView(
        createRuntime: createRuntime,
        source: source,
        sourceUrl: 'flax:standalone/main',
        bindings: bindings,
        plugins: [
          const FlaxMaterialPlugin(),
          const FlaxLocalStoragePlugin(),
          const FlaxCanvasPlugin(),
          FlaxWebSocketPlugin(
            baseUrl: apiBaseUrl?.isEmpty == true ? null : apiBaseUrl,
          ),
          FlaxFetchPlugin(
            baseUrl: apiBaseUrl?.isEmpty == true ? null : apiBaseUrl,
          ),
        ],
      ),
    );
  } catch (error, stack) {
    FlutterError.reportError(
      FlutterErrorDetails(
        exception: error,
        stack: stack,
        library: 'flax_standalone',
      ),
    );
    runApp(ErrorWidget(error));
  }
}
