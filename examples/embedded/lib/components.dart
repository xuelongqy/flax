import 'engine.dart';

import 'dart:async';

import 'package:flax/flax.dart';
import 'package:material_ui/material_ui.dart';

import 'main.dart' show embeddedBindings;

class ComponentsDemo extends StatefulWidget {
  const ComponentsDemo({super.key, required this.source});
  final String source;
  @override
  State<ComponentsDemo> createState() => _ComponentsDemoState();
}

class _ComponentsDemoState extends State<ComponentsDemo> {
  late final _session = FlaxSession(
    createRuntime: createExampleRuntime,
    source: widget.source,
    bindings: embeddedBindings,
  );
  bool _dark = false;
  @override
  Widget build(BuildContext context) => Theme(
    data: ThemeData(brightness: _dark ? Brightness.dark : Brightness.light),
    child: Scaffold(
      appBar: AppBar(
        title: const Text('Flutter State and signals'),
        actions: [
          TextButton(
            key: const ValueKey('components-theme'),
            onPressed: () => setState(() => _dark = !_dark),
            child: const Text('Host theme'),
          ),
        ],
      ),
      body: FlaxView.page(session: _session, name: 'components'),
    ),
  );
  @override
  void dispose() {
    unawaited(_session.close());
    super.dispose();
  }
}
