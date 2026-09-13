import 'engine.dart';

import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:material_ui/material_ui.dart';

import 'main.dart' show embeddedBindings;

class CanvasDemo extends StatefulWidget {
  const CanvasDemo({super.key, required this.source});
  final String source;

  @override
  State<CanvasDemo> createState() => _CanvasDemoState();
}

class _CanvasDemoState extends State<CanvasDemo> {
  late final _session = FlaxSession(
    createRuntime: createExampleRuntime,
    source: widget.source,
    sourceUrl: 'flax:example/canvas',
    bindings: embeddedBindings,
    plugins: const [FlaxCanvasPlugin()],
  );

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Canvas 2D')),
    body: FlaxView.page(session: _session, name: 'canvas'),
  );

  @override
  void dispose() {
    unawaited(_session.close());
    super.dispose();
  }
}
