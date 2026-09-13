import 'engine.dart';

import 'dart:async';

import 'package:flax/flax.dart';
import 'package:material_ui/material_ui.dart';

import 'main.dart' show embeddedBindings;

class StylesDemo extends StatefulWidget {
  const StylesDemo({super.key, required this.source});
  final String source;

  @override
  State<StylesDemo> createState() => _StylesDemoState();
}

class _StylesDemoState extends State<StylesDemo> {
  late final _session = FlaxSession(
    createRuntime: createExampleRuntime,
    source: widget.source,
    sourceUrl: 'flax:example/styles',
    bindings: embeddedBindings,
  );
  bool _dark = false;
  bool _green = false;

  @override
  Widget build(BuildContext context) => Theme(
    data: ThemeData(
      brightness: _dark ? Brightness.dark : Brightness.light,
      colorSchemeSeed: _green
          ? const Color(0xff218a42)
          : const Color(0xff315cba),
    ),
    child: Scaffold(
      appBar: AppBar(title: const Text('Styles and themes')),
      body: Column(
        children: [
          Wrap(
            children: [
              TextButton(
                key: const ValueKey('host-brightness'),
                onPressed: () => setState(() => _dark = !_dark),
                child: const Text('Toggle host brightness'),
              ),
              TextButton(
                key: const ValueKey('host-seed'),
                onPressed: () => setState(() => _green = !_green),
                child: const Text('Change host seed'),
              ),
            ],
          ),
          Expanded(
            child: SingleChildScrollView(
              child: FlaxView.page(session: _session, name: 'styles'),
            ),
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
