import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_cupertino_ui/flax_cupertino_ui.dart';
import 'package:flax_embedded/engine.dart';
import 'package:flax_fetch/flax_fetch.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flax_websocket/flax_websocket.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:material_ui/material_ui.dart'
    show ColorScheme, MaterialApp, Scaffold, TextButton, ThemeData;

final embeddedBindings = FlaxBindingRegistry([
  flutterBindings,
  materialBindings,
]);

final galleryPlugins = <FlaxPlugin>[
  const FlaxMaterialPlugin(),
  const FlaxCupertinoPlugin(),
  const FlaxCanvasPlugin(),
  const FlaxLocalStoragePlugin(),
  FlaxFetchPlugin(
    baseUrl: const String.fromEnvironment(
      'FLAX_FETCH_BASE_URL',
      defaultValue: 'http://127.0.0.1:8080/',
    ),
  ),
  FlaxWebSocketPlugin(
    baseUrl: const String.fromEnvironment(
      'FLAX_FETCH_BASE_URL',
      defaultValue: 'http://127.0.0.1:8080/',
    ),
  ),
];

Future<String> loadAggregateSource({String? storageDirectory}) async {
  await FlaxLocalStoragePlugin.initialize(directory: storageDirectory);
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  return rootBundle.loadString('assets/app.js');
}

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(EmbeddedApp(source: await loadAggregateSource()));
}

class EmbeddedApp extends StatefulWidget {
  const EmbeddedApp({
    super.key,
    required this.source,
    this.createRuntime,
    this.plugins,
    this.onFlaxError,
  });

  final String source;
  final FlaxJsRuntime Function()? createRuntime;
  final List<FlaxPlugin>? plugins;
  final void Function(Object, StackTrace)? onFlaxError;

  @override
  State<EmbeddedApp> createState() => _EmbeddedAppState();
}

class _EmbeddedAppState extends State<EmbeddedApp> {
  bool _mounted = true;
  var _generation = 0;

  void _toggleView() {
    setState(() {
      _mounted = !_mounted;
      if (_mounted) _generation++;
    });
  }

  @override
  Widget build(BuildContext context) => MaterialApp(
    debugShowCheckedModeBanner: false,
    theme: ThemeData(
      colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xff245c48)),
      useMaterial3: true,
    ),
    home: Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            Container(
              height: 52,
              padding: const EdgeInsets.symmetric(horizontal: 20),
              decoration: const BoxDecoration(
                color: Color(0xfff5f5f0),
                border: Border(bottom: BorderSide(color: Color(0xffe1e6dd))),
              ),
              child: Row(
                children: [
                  const Text(
                    'FLAX',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      letterSpacing: 3,
                    ),
                  ),
                  const SizedBox(width: 16),
                  const Expanded(
                    child: Text(
                      'The component playground',
                      style: TextStyle(color: Color(0xff66736b)),
                    ),
                  ),
                  TextButton(
                    key: const ValueKey('toggle-flax-view'),
                    onPressed: _toggleView,
                    child: Text(_mounted ? 'Unmount Flax' : 'Mount Flax'),
                  ),
                ],
              ),
            ),
            Expanded(
              child: _mounted
                  ? FlaxView(
                      key: ValueKey('aggregate-view-$_generation'),
                      createRuntime:
                          widget.createRuntime ?? createExampleRuntime,
                      source: widget.source,
                      sourceUrl: 'flax:embedded/aggregate',
                      bindings: embeddedBindings,
                      namespace: 'example-gallery',
                      plugins: widget.plugins ?? galleryPlugins,
                      onError: widget.onFlaxError,
                    )
                  : const Center(child: Text('Flax view unmounted')),
            ),
          ],
        ),
      ),
    ),
  );
}
