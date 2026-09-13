import 'engine.dart';

import 'dart:async';

import 'package:flax/flax.dart';
import 'package:material_ui/material_ui.dart';

import 'main.dart' show embeddedBindings;

class TextEditingDemo extends StatefulWidget {
  const TextEditingDemo({
    super.key,
    required this.source,
    this.page = 'textEditing',
    this.title = 'TextEditingController',
  });
  final String source;
  final String page;
  final String title;
  @override
  State<TextEditingDemo> createState() => _TextEditingDemoState();
}

class _TextEditingDemoState extends State<TextEditingDemo> {
  late final _session = FlaxSession(
    createRuntime: createExampleRuntime,
    source: widget.source,
    sourceUrl: 'flax:example/text-editing',
    bindings: embeddedBindings,
  );
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: Text(widget.title)),
    body: FlaxView.page(session: _session, name: widget.page),
  );
  @override
  void dispose() {
    unawaited(_session.close());
    super.dispose();
  }
}
