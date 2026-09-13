import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_embedded/engine.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flutter/services.dart';
import 'package:material_ui/material_ui.dart';

import 'navigation.dart';
import 'pages.dart';
import 'scroll.dart';
import 'storage.dart';
import 'text_editing.dart';
import 'styles.dart';
import 'lazy_list.dart';
import 'layout.dart';
import 'components.dart';
import 'scaffold.dart';
import 'canvas.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await FlaxLocalStoragePlugin.initialize();
  final source = await rootBundle.loadString('assets/app.js');
  final shared = await rootBundle.loadString('assets/shared_navigation.js');
  final nested = await rootBundle.loadString('assets/nested_navigation.js');
  final pages = await rootBundle.loadString('assets/pages.js');
  runApp(
    EmbeddedApp(
      source: source,
      sharedSource: shared,
      nestedSource: nested,
      pagesSource: pages,
    ),
  );
}

final embeddedBindings = FlaxBindingRegistry([
  flutterBindings,
  materialBindings,
]);

class EmbeddedApp extends StatefulWidget {
  const EmbeddedApp({
    super.key,
    required this.source,
    required this.sharedSource,
    required this.nestedSource,
    required this.pagesSource,
  });
  final String source;
  final String sharedSource;
  final String nestedSource;
  final String pagesSource;
  @override
  State<EmbeddedApp> createState() => _EmbeddedAppState();
}

class _EmbeddedAppState extends State<EmbeddedApp> {
  final _navigator = GlobalKey<NavigatorState>();
  final _flaxObserver = FlaxNavigatorObserver();
  late final _sharedSession = FlaxSession(
    createRuntime: createExampleRuntime,
    source: widget.sharedSource,
    bindings: embeddedBindings,
    sourceUrl: 'flax:example/shared',
  );
  @override
  void dispose() {
    unawaited(_sharedSession.close());
    super.dispose();
  }

  bool _showLeft = true;
  bool _rtl = false;
  bool _compact = false;
  @override
  Widget build(BuildContext context) => MaterialApp(
    title: 'Flax embedded',
    navigatorKey: _navigator,
    navigatorObservers: [_flaxObserver],
    onGenerateRoute: nativeChoice,
    builder: (_, child) => Material(child: child),
    theme: ThemeData(colorSchemeSeed: const Color(0xff315cba)),
    home: Scaffold(
      appBar: AppBar(title: const Text('Flax · Two independent JS runtimes')),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Wrap(
              alignment: WrapAlignment.center,
              children: [
                TextButton(
                  key: const ValueKey('canvas-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) => CanvasDemo(source: widget.pagesSource),
                    ),
                  ),
                  child: const Text('Canvas 2D'),
                ),
                TextButton(
                  key: const ValueKey('storage-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) => StorageDemo(source: widget.pagesSource),
                    ),
                  ),
                  child: const Text('Shared localStorage'),
                ),
                TextButton(
                  key: const ValueKey('shared-navigation'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) => FlaxView.session(session: _sharedSession),
                    ),
                  ),
                  child: const Text('Shared navigation'),
                ),
                TextButton(
                  key: const ValueKey('nested-navigation'),
                  onPressed: () {
                    final session = FlaxSession(
                      createRuntime: createExampleRuntime,
                      source: widget.nestedSource,
                      bindings: embeddedBindings,
                      sourceUrl: 'flax:example/mini-app',
                    );
                    _navigator.currentState!.push(
                      MaterialPageRoute<void>(
                        builder: (_) => MiniAppPage(session: session),
                      ),
                    );
                  },
                  child: const Text('Nested navigation'),
                ),
                TextButton(
                  key: const ValueKey('pages-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) => PagesDemo(source: widget.pagesSource),
                    ),
                  ),
                  child: const Text('Pages and Router'),
                ),
                TextButton(
                  key: const ValueKey('scroll-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) => ScrollDemo(source: widget.pagesSource),
                    ),
                  ),
                  child: const Text('ScrollController'),
                ),
                TextButton(
                  key: const ValueKey('text-editing-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) =>
                          TextEditingDemo(source: widget.pagesSource),
                    ),
                  ),
                  child: const Text('Text input'),
                ),
                TextButton(
                  key: const ValueKey('focus-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) => TextEditingDemo(
                        source: widget.pagesSource,
                        page: 'focus',
                        title: 'Focus and formatters',
                      ),
                    ),
                  ),
                  child: const Text('Focus and formatters'),
                ),
                TextButton(
                  key: const ValueKey('lazy-list-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) => LazyListDemo(source: widget.pagesSource),
                    ),
                  ),
                  child: const Text('Lazy list'),
                ),
                TextButton(
                  key: const ValueKey('styles-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) => StylesDemo(source: widget.pagesSource),
                    ),
                  ),
                  child: const Text('Styles and themes'),
                ),
                TextButton(
                  key: const ValueKey('components-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) =>
                          ComponentsDemo(source: widget.pagesSource),
                    ),
                  ),
                  child: const Text('Flutter State'),
                ),
                TextButton(
                  key: const ValueKey('scaffold-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) => ScaffoldDemo(source: widget.pagesSource),
                    ),
                  ),
                  child: const Text('JS Scaffold and AppBar'),
                ),
                TextButton(
                  key: const ValueKey('layout-demo'),
                  onPressed: () => _navigator.currentState!.push(
                    MaterialPageRoute<void>(
                      builder: (_) => LayoutDemo(source: widget.pagesSource),
                    ),
                  ),
                  child: const Text('Generated layout'),
                ),
                TextButton(
                  key: const ValueKey('toggle-left'),
                  onPressed: () => setState(() => _showLeft = !_showLeft),
                  child: Text(
                    _showLeft ? 'Unmount left region' : 'Mount left region',
                  ),
                ),
                TextButton(
                  key: const ValueKey('toggle-direction'),
                  onPressed: () => setState(() => _rtl = !_rtl),
                  child: const Text('Toggle direction'),
                ),
                TextButton(
                  key: const ValueKey('toggle-width'),
                  onPressed: () => setState(() => _compact = !_compact),
                  child: const Text('Toggle region width'),
                ),
              ],
            ),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: _showLeft
                      ? _region(
                          FlaxView(
                            key: const ValueKey('left'),
                            createRuntime: createExampleRuntime,
                            source: widget.source,
                            sourceUrl: 'flax:embedded/left',
                            bindings: embeddedBindings,
                          ),
                        )
                      : const SizedBox.shrink(),
                ),
                Expanded(
                  child: _region(
                    FlaxView(
                      key: const ValueKey('right'),
                      createRuntime: createExampleRuntime,
                      source: widget.source,
                      sourceUrl: 'flax:embedded/right',
                      bindings: embeddedBindings,
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    ),
  );

  Widget _region(Widget child) => Align(
    alignment: Alignment.topCenter,
    child: SizedBox(
      width: _compact ? 240 : double.infinity,
      child: Directionality(
        textDirection: _rtl ? TextDirection.rtl : TextDirection.ltr,
        child: child,
      ),
    ),
  );
}
