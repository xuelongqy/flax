import 'package:flax/flax.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/state_variant_bindings.dart';
import 'engine.dart';

final registry = FlaxBindingRegistry([
  flutterBindings,
  materialBindings,
  state_variantBindings,
]);
final source = flaxTestFixtureSource(
  'material_ui',
  packageName: 'flax_material_ui',
);
Finder host(Object key) => flaxTestHost(key);

Future<void> collectWidgetConfigurations(WidgetTester tester) async {
  for (var i = 0; i < 4; i++) {
    await tester.runAsync(flaxTestCollectDartGarbage);
    await tester.pumpAndSettle();
  }
}

class Harness extends FlaxTestHarness {
  Harness()
    : super(
        createRuntime: createTestRuntime,
        source: source,
        bindings: registry,
        plugins: const [FlaxMaterialPlugin()],
      );

  Widget app({String? code}) => MaterialApp(
    home: Scaffold(body: view(code: code)),
  );
}
