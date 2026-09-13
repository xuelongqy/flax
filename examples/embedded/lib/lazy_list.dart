import 'engine.dart';

import 'dart:async';

import 'package:flax/flax.dart';
import 'package:material_ui/material_ui.dart';

import 'main.dart' show embeddedBindings;

class LazyListDemo extends StatefulWidget {
  const LazyListDemo({super.key, required this.source});
  final String source;
  @override
  State<LazyListDemo> createState() => _LazyListDemoState();
}

class _LazyListDemoState extends State<LazyListDemo> {
  late final _session = FlaxSession(
    createRuntime: createExampleRuntime,
    source: widget.source,
    sourceUrl: 'flax:example/lazy-list',
    bindings: embeddedBindings,
  );
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Lazy list')),
    body: FlaxView.page(session: _session, name: 'lazy-list'),
  );
  @override
  void dispose() {
    unawaited(_session.close());
    super.dispose();
  }
}
