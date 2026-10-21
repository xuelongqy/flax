import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_fetch/flax_fetch.dart';
import 'package:flax_websocket/flax_websocket.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_standalone/engine.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:path_provider/path_provider.dart';

import 'assets.dart';

final bindings = FlaxBindingRegistry([flutterBindings, materialBindings]);
FlaxJsRuntime createRuntime() => createExampleRuntime();

Future<void> main() async {
  await startApplication(
    apiBaseUrl: const String.fromEnvironment('FLAX_FETCH_BASE_URL'),
  );
}

Future<void> startApplication({
  String? apiBaseUrl,
  String? storageDirectory,
  AssetBundle? assetBundle,
}) async {
  WidgetsFlutterBinding.ensureInitialized();
  try {
    final builtin = FlaxPrefixedAssetBundle(
      prefix: const String.fromEnvironment(
        'FLAX_ASSET_PREFIX',
        defaultValue: 'assets/flax',
      ),
    );
    var bundle = assetBundle ?? builtin;
    if (assetBundle == null &&
        const bool.fromEnvironment('FLAX_SANDBOX_ASSETS')) {
      const configured = String.fromEnvironment('FLAX_SANDBOX_DIRECTORY');
      final directory = configured.isEmpty
          ? Directory('${(await getApplicationSupportDirectory()).path}/flax')
          : Directory(configured);
      bundle = await prepareSandboxAssets(directory, source: builtin);
    }
    final manifest = await FlaxManifest.load(bundle);
    final source = await bundle.loadString(manifest.entry);
    Flax.moduleAssets = await FlaxModuleAssets.load(
      bundle: rootBundle,
      manifest: 'assets/flax_modules/modules.json',
    );
    await FlaxLocalStoragePlugin.initialize(directory: storageDirectory);
    Icons.add;
    runApp(
      FlaxView(
        createRuntime: createRuntime,
        source: source,
        assetBundle: bundle,
        sourceUrl: 'flax:${manifest.id}/${manifest.version}/${manifest.entry}',
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
