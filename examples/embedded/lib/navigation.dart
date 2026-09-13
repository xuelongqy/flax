import 'dart:async';

import 'package:flax/flax.dart';
import 'package:material_ui/material_ui.dart';

/// The container owns the mini-app session above its nested Navigator.
class MiniAppPage extends StatefulWidget {
  const MiniAppPage({super.key, required this.session});
  final FlaxSession session;
  @override
  State<MiniAppPage> createState() => _MiniAppPageState();
}

class _MiniAppPageState extends State<MiniAppPage> {
  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Nested Flutter Navigator')),
    body: FlaxView.session(session: widget.session),
  );
  @override
  void dispose() {
    unawaited(widget.session.close());
    super.dispose();
  }
}

Route<Object?>? nativeChoice(RouteSettings settings) {
  if (settings.name != '/native-choice') return null;
  return MaterialPageRoute<Object?>(
    settings: settings,
    builder: (context) => Scaffold(
      appBar: AppBar(title: const Text('Dart selection page')),
      body: Column(
        children: [
          Text('Received: ${settings.arguments}'),
          TextButton(
            onPressed: () => Navigator.of(context).pop({
              'selected': ['alpha'],
              'native': true,
            }),
            child: const Text('Accept Dart selection'),
          ),
        ],
      ),
    ),
  );
}
