import 'engine.dart';

import 'dart:async';

import 'package:flax/flax.dart';
import 'package:material_ui/material_ui.dart';

import 'main.dart' show embeddedBindings;

class ScaffoldDemo extends StatefulWidget {
  const ScaffoldDemo({super.key, required this.source});
  final String source;
  @override
  State<ScaffoldDemo> createState() => _ScaffoldDemoState();
}

class _ScaffoldDemoState extends State<ScaffoldDemo> {
  late final _session = FlaxSession(
    createRuntime: createExampleRuntime,
    source: widget.source,
    bindings: embeddedBindings,
  );
  bool _dark = false;
  @override
  Widget build(BuildContext context) => Theme(
    data: ThemeData(brightness: _dark ? Brightness.dark : Brightness.light),
    child: Material(
      child: Column(
        children: [
          TextButton(
            key: const ValueKey('scaffold-theme'),
            onPressed: () => setState(() => _dark = !_dark),
            child: const Text('Change host theme'),
          ),
          Expanded(
            child: FlaxView.page(session: _session, name: 'scaffold'),
          ),
        ],
      ),
    ),
  );

  @override
  void dispose() {
    unawaited(_session.close());
    super.dispose();
  }
}
