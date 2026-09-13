import 'package:flax_test/flax_test.dart';
import 'package:material_ui/material_ui.dart';

import 'engine.dart';
import 'harness.dart' show registry;

class OwnedHarness extends FlaxOwnedTestHarness {
  OwnedHarness({super.extra, super.onCreate, String fixture = 'objects'})
    : super(
        createRuntime: createTestRuntime,
        bindings: registry,
        source: flaxTestFixtureSource(fixture),
      );

  Widget app(String name, {Object? arguments}) => MaterialApp(
    home: Material(child: page(name, arguments: arguments)),
  );
}
