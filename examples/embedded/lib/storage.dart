import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:material_ui/material_ui.dart';

import 'engine.dart';
import 'main.dart' show embeddedBindings;

class StorageDemo extends StatefulWidget {
  const StorageDemo({super.key, required this.source});
  final String source;
  @override
  State<StorageDemo> createState() => _StorageDemoState();
}

class _StorageDemoState extends State<StorageDemo> {
  late final _sessions = [
    for (final namespace in ['shop', 'shop', 'private'])
      FlaxSession(
        namespace: namespace,
        createRuntime: createExampleRuntime,
        source: widget.source,
        bindings: embeddedBindings,
        plugins: const [FlaxLocalStoragePlugin()],
      ),
  ];
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Persistent session namespaces')),
    body: Row(
      children: [
        for (var i = 0; i < _sessions.length; i++)
          Expanded(
            child: Column(
              children: [
                Text(i == 2 ? 'Isolated' : 'Shared ${i + 1}'),
                FlaxView.page(session: _sessions[i], name: 'storage'),
              ],
            ),
          ),
      ],
    ),
  );
  @override
  void dispose() {
    for (final session in _sessions) {
      unawaited(session.close());
    }
    super.dispose();
  }
}
