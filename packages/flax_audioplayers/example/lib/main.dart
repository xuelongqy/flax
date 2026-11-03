import 'package:flax/flax.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_example_support/flax_example_support.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flax_audioplayers/flax_audioplayers.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

Future<void> main() => startApplication();

Future<void> startApplication() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  final source = await rootBundle.loadString('assets/app.js');
  runApp(
    FlaxExampleApp(
      title: 'Audio player',
      child: FlaxView(
        createRuntime: FlaxV8Engine.createRuntime,
        source: source,
        sourceUrl: 'flax:audioplayers:example',
        plugins: [const FlaxMaterialPlugin(), FlaxAudioplayersPlugin()],
      ),
    ),
  );
}
