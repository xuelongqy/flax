import 'package:flax/flax.dart';
import 'package:flax_example_support/flax_example_support.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_sandbox_example/flax_sandbox_example.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:material_ui/material_ui.dart' show TextButton;

Future<void> main() => startApplication();

Future<void> startApplication({
  String? demoDirectory,
  bool permissions = false,
}) async {
  WidgetsFlutterBinding.ensureInitialized();
  // The ordinary host area is also used when the playground disables isolation.
  await FlaxLocalStoragePlugin.initialize(
    directory: demoDirectory == null ? null : '$demoDirectory/host-storage',
  );
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  runApp(
    FlaxExampleApp(
      title: 'Sandbox',
      child: _Playgrounds(
        demoDirectory: demoDirectory,
        permissions: permissions,
      ),
    ),
  );
}

class _Playgrounds extends StatefulWidget {
  const _Playgrounds({this.demoDirectory, required this.permissions});
  final String? demoDirectory;
  final bool permissions;
  @override
  State<_Playgrounds> createState() => _PlaygroundsState();
}

class _PlaygroundsState extends State<_Playgrounds> {
  late bool permissions = widget.permissions;
  @override
  Widget build(BuildContext context) => Column(
    children: [
      Wrap(
        spacing: 8,
        children: [
          TextButton(
            onPressed: () => setState(() => permissions = false),
            child: const Text('Sandbox playground'),
          ),
          TextButton(
            onPressed: () => setState(() => permissions = true),
            child: const Text('Permission playground'),
          ),
        ],
      ),
      Expanded(
        child: permissions
            ? const FlaxPermissionsExample()
            : FlaxSandboxExample(demoDirectory: widget.demoDirectory),
      ),
    ],
  );
}
