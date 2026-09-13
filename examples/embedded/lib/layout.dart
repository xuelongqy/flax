import 'engine.dart';

import 'dart:async';

import 'package:flax/flax.dart';
import 'package:material_ui/material_ui.dart';

import 'main.dart' show embeddedBindings;

class LayoutDemo extends StatefulWidget {
  const LayoutDemo({super.key, required this.source});
  final String source;
  @override
  State<LayoutDemo> createState() => _LayoutDemoState();
}

class _LayoutDemoState extends State<LayoutDemo> {
  late final _session = FlaxSession(
    createRuntime: createExampleRuntime,
    source: widget.source,
    sourceUrl: 'flax:example/layout',
    bindings: embeddedBindings,
  );
  bool _compact = false;
  bool _rtl = false;
  bool _dark = false;

  @override
  Widget build(BuildContext context) => Theme(
    data: ThemeData(brightness: _dark ? Brightness.dark : Brightness.light),
    child: Scaffold(
      appBar: AppBar(title: const Text('Generated layout')),
      body: Column(
        children: [
          Wrap(
            children: [
              TextButton(
                key: const ValueKey('layout-theme'),
                onPressed: () => setState(() => _dark = !_dark),
                child: const Text('Toggle theme'),
              ),
              TextButton(
                key: const ValueKey('layout-size'),
                onPressed: () => setState(() => _compact = !_compact),
                child: const Text('Resize region'),
              ),
              TextButton(
                key: const ValueKey('layout-direction'),
                onPressed: () => setState(() => _rtl = !_rtl),
                child: const Text('Toggle direction'),
              ),
            ],
          ),
          Expanded(
            child: Align(
              alignment: Alignment.topCenter,
              child: FractionallySizedBox(
                widthFactor: _compact ? 0.75 : 1,
                heightFactor: _compact ? 0.8 : 1,
                child: Directionality(
                  textDirection: _rtl ? TextDirection.rtl : TextDirection.ltr,
                  child: FlaxView.page(session: _session, name: 'layout'),
                ),
              ),
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
