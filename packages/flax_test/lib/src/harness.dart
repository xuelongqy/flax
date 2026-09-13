import 'package:flax/flax.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

Finder flaxTestHost(Object key) => find.byWidgetPredicate(
  (widget) =>
      widget is FlaxWidgetHost &&
      widget.key is ValueKey &&
      (widget.key as ValueKey).value == key,
);

class FlaxTestHarness {
  FlaxTestHarness({
    required this.createRuntime,
    required this.source,
    required this.bindings,
  });

  final FlaxJsRuntime Function() createRuntime;
  final String source;
  final FlaxBindingRegistry bindings;
  final errors = <Object>[];
  final runtimes = <FlaxJsRuntime>[];

  FlaxJsRuntime create() {
    final runtime = createRuntime();
    runtimes.add(runtime);
    return runtime;
  }

  FlaxJsRuntime get runtime => runtimes.last;

  void execute(String code) {
    final value = runtime.evaluate(code);
    if (value is FlaxJsObject) value.release();
  }

  double number(String code) => (runtime.evaluate(code) as FlaxJsNumber).value;

  Widget view({String? code, Key? key}) => FlaxView(
    key: key,
    createRuntime: create,
    source: code ?? source,
    bindings: bindings,
    onError: (error, _) => errors.add(error),
  );
}
