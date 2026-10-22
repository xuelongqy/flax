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
  String? source,
  String? apiBaseUrl,
  String? storageDirectory,
  AssetBundle? assetBundle,
  Directory? applicationDirectory,
  File? packageFile,
  File? scriptFile,
  Directory? installationDirectory,
  Uri? networkUri,
  FlaxRemoteFormat? networkFormat,
  Map<String, String> headers = const {},
  String? expectedSha256,
  Directory? cacheDirectory,
  FlaxDownloader? download,
}) async {
  WidgetsFlutterBinding.ensureInitialized();
  try {
    const prefix = String.fromEnvironment(
      'FLAX_ASSET_PREFIX',
      defaultValue: 'assets/flax',
    );
    if (source == null &&
        applicationDirectory == null &&
        packageFile == null &&
        scriptFile == null &&
        networkUri == null &&
        assetBundle == null) {
      const mode = String.fromEnvironment('FLAX_APPLICATION_MODE');
      final builtin = FlaxPrefixedAssetBundle(prefix: prefix);
      if (mode.isNotEmpty ||
          const bool.fromEnvironment('FLAX_SANDBOX_ASSETS')) {
        const configured = String.fromEnvironment('FLAX_SANDBOX_DIRECTORY');
        final directory = configured.isEmpty
            ? Directory('${(await getApplicationSupportDirectory()).path}/flax')
            : Directory(configured);
        if (mode == 'remote-js' || mode == 'remote-package') {
          const url = String.fromEnvironment('FLAX_NETWORK_URL');
          if (url.isEmpty) {
            throw ArgumentError('Set FLAX_NETWORK_URL for network mode');
          }
          networkUri = Uri.parse(url);
          networkFormat = mode == 'remote-js'
              ? FlaxRemoteFormat.javascript
              : FlaxRemoteFormat.package;
          const digest = String.fromEnvironment('FLAX_EXPECTED_SHA256');
          expectedSha256 = digest.isEmpty ? null : digest;
        } else if (mode == 'package') {
          await directory.create(recursive: true);
          packageFile = File('${directory.path}/application.flax');
          final data = await rootBundle.load('${builtin.prefix}.flax');
          await packageFile.writeAsBytes(Uint8List.sublistView(data));
        } else if (mode == 'file') {
          await directory.create(recursive: true);
          scriptFile = File('${directory.path}/app.js');
          await scriptFile.writeAsString(await builtin.loadString('app.js'));
        } else {
          applicationDirectory = (await prepareSandboxAssets(
            directory,
            source: builtin,
          )).directory;
        }
      }
    }
    if ([
          source,
          applicationDirectory,
          packageFile,
          scriptFile,
          networkUri,
        ].where((value) => value != null).length >
        1) {
      throw ArgumentError('Select one application source.');
    }
    if ((networkUri == null) != (networkFormat == null)) {
      throw ArgumentError(
        'networkUri and networkFormat must be provided together',
      );
    }
    if (assetBundle == null &&
        prefix != 'assets/flax' &&
        (source != null ||
            scriptFile != null ||
            networkFormat == FlaxRemoteFormat.javascript)) {
      assetBundle = FlaxPrefixedAssetBundle(prefix: prefix);
    }
    if (assetBundle != null &&
        (applicationDirectory != null || packageFile != null)) {
      throw ArgumentError(
        'Directory and package modes own their resource bundle',
      );
    }
    Flax.moduleAssets = await FlaxModuleAssets.load(
      bundle: rootBundle,
      manifest: 'assets/flax_modules/modules.json',
    );
    await FlaxLocalStoragePlugin.initialize(directory: storageDirectory);
    Icons.add;
    final plugins = <FlaxPlugin>[
      const FlaxMaterialPlugin(),
      const FlaxLocalStoragePlugin(),
      const FlaxCanvasPlugin(),
      FlaxWebSocketPlugin(
        baseUrl: apiBaseUrl?.isEmpty == true ? null : apiBaseUrl,
      ),
      FlaxFetchPlugin(baseUrl: apiBaseUrl?.isEmpty == true ? null : apiBaseUrl),
    ];
    final Widget view;
    if (source != null) {
      view = FlaxView(
        source: source,
        assetBundle: assetBundle,
        createRuntime: createRuntime,
        bindings: bindings,
        plugins: plugins,
      );
    } else if (networkUri != null) {
      view = FlaxView.network(
        uri: networkUri,
        format: networkFormat!,
        headers: headers,
        expectedSha256: expectedSha256,
        cacheDirectory: cacheDirectory,
        installationDirectory: installationDirectory,
        download: download,
        assetBundle: assetBundle,
        createRuntime: createRuntime,
        bindings: bindings,
        plugins: plugins,
      );
    } else if (packageFile != null) {
      view = FlaxView.package(
        file: packageFile,
        installationDirectory: installationDirectory,
        createRuntime: createRuntime,
        bindings: bindings,
        plugins: plugins,
      );
    } else if (applicationDirectory != null) {
      view = FlaxView.directory(
        directory: applicationDirectory,
        createRuntime: createRuntime,
        bindings: bindings,
        plugins: plugins,
      );
    } else if (scriptFile != null) {
      view = FlaxView.file(
        file: scriptFile,
        assetBundle: assetBundle,
        createRuntime: createRuntime,
        bindings: bindings,
        plugins: plugins,
      );
    } else {
      view = FlaxView.bundle(
        assetBundle: assetBundle,
        prefix: assetBundle == null ? prefix : 'assets/flax',
        createRuntime: createRuntime,
        bindings: bindings,
        plugins: plugins,
      );
    }
    runApp(view);
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
