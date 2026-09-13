import 'package:flax/flax.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'engine.dart';

final registry = FlaxBindingRegistry([flutterBindings, materialBindings]);
final source = flaxTestFixtureSource('material_ui');
Finder host(Object key) => flaxTestHost(key);

class Harness extends FlaxTestHarness {
  Harness()
    : super(
        createRuntime: createTestRuntime,
        source: source,
        bindings: registry,
      );

  Widget app({String? code}) => MaterialApp(
    home: Scaffold(body: view(code: code)),
  );
}
