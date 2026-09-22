import 'package:flax/flax.dart';
import 'package:flax_embedded/engine.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:material_ui/material_ui.dart'
    show MaterialApp, Scaffold, TextButton;

final embeddedBindings = FlaxBindingRegistry([
  flutterBindings,
  materialBindings,
]);

Future<String> loadAggregateSource() async {
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
    this.plugins = const [FlaxMaterialPlugin()],
    this.onFlaxError,
  });

  final String source;
  final FlaxJsRuntime Function()? createRuntime;
  final List<FlaxPlugin> plugins;
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
    home: Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            TextButton(
              key: const ValueKey('toggle-flax-view'),
              onPressed: _toggleView,
              child: Text(_mounted ? 'Unmount Flax' : 'Mount Flax'),
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
                      plugins: widget.plugins,
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
