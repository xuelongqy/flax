import 'package:flax/flax.dart';
import 'package:flax_example_support/flax_example_support.dart';
import 'package:flax_local_storage/flax_local_storage.dart';
import 'package:flax_sandbox_example/flax_sandbox_example.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

Future<void> main() => startApplication();

Future<void> startApplication({String? demoDirectory}) async {
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
      child: FlaxSandboxExample(demoDirectory: demoDirectory),
    ),
  );
}
