import 'engine.dart';

import 'dart:async';

import 'package:flax/flax.dart';
import 'package:material_ui/material_ui.dart';

import 'main.dart' show embeddedBindings;

class ScrollDemo extends StatefulWidget {
  const ScrollDemo({super.key, required this.source});
  final String source;
  @override
  State<ScrollDemo> createState() => _ScrollDemoState();
}

class _ScrollDemoState extends State<ScrollDemo> {
  late final _session = FlaxSession(
    createRuntime: createExampleRuntime,
    source: widget.source,
    sourceUrl: 'flax:example/scroll',
    bindings: embeddedBindings,
  );
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Owned ScrollController')),
    body: FlaxView.page(session: _session, name: 'scroll'),
  );
  @override
  void dispose() {
    unawaited(_session.close());
    super.dispose();
  }
}
