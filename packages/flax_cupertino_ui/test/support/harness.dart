import 'package:flax/flax.dart';
import 'package:flax_cupertino_ui/flax_cupertino_ui.dart';
import 'package:flax_engine_hermes/flax_engine_hermes.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';

final _source = flaxTestFixtureSource('cupertino');
final _registry = FlaxBindingRegistry([flutterBindings]);

class CupertinoHarness {
  final errors = <Object>[];
  final runtimes = <FlaxTestRuntimeTracker>[];

  FlaxTestRuntimeTracker get runtime => runtimes.last;

  Widget view({Key? key}) => FlaxView(
    key: key,
    createRuntime: () {
      final runtime = FlaxTestRuntimeTracker(FlaxHermesEngine.createRuntime());
      runtimes.add(runtime);
      return runtime;
    },
    source: _source,
    bindings: _registry,
    plugins: const [FlaxCupertinoPlugin()],
    onError: (error, _) => errors.add(error),
  );

  num number(String code) => (runtime.evaluate(code) as FlaxJsNumber).value;
}
