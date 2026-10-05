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
    this.plugins,
  });

  final FlaxJsRuntime Function() createRuntime;
  final String source;
  final FlaxBindingRegistry bindings;
  final List<FlaxPlugin>? plugins;
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
    plugins: plugins,
    onError: (error, _) => errors.add(error),
  );
}

/// Unmount UI and advance the event queue used by host and module shutdown.
Future<void> flaxTestUnmount(WidgetTester tester) async {
  await tester.pumpWidget(const SizedBox());
  await tester.pump(const Duration(milliseconds: 1));
}

/// Advance fake Flutter events while the session drains its closing host tasks.
Future<void> flaxTestCloseSession(
  WidgetTester tester,
  FlaxSession session,
) async {
  var completed = false;
  final closed = session.close().then((_) => completed = true);
  for (var turn = 0; turn < 100 && !completed; turn++) {
    await tester.pump(const Duration(milliseconds: 1));
  }
  expect(completed, isTrue, reason: 'Session closing tasks did not drain');
  await closed;
}

/// Wait for an automatically owned view's queued closing tasks to complete.
Future<void> flaxTestWaitForRuntimeDisposal(
  WidgetTester tester,
  FlaxJsRuntime runtime,
) async {
  for (var turn = 0; turn < 100 && !runtime.isDisposed; turn++) {
    await tester.pump(const Duration(milliseconds: 1));
  }
  expect(
    runtime.isDisposed,
    isTrue,
    reason: 'Runtime closing tasks did not drain',
  );
}

/// Keep instrumented bindings while exercising the plugin's actual installation.
class FlaxTestBindingPlugin extends FlaxPlugin {
  const FlaxTestBindingPlugin(this.plugin, this.instrumentedModules);
  final FlaxPlugin plugin;
  final Set<String> instrumentedModules;
  @override
  String get id => plugin.id;
  @override
  Set<String> get globals => plugin.globals;
  @override
  Set<String> get jsModules => plugin.jsModules;
  @override
  List<FlaxBindingModule> get bindingModules => [
    for (final module in plugin.bindingModules)
      if (!instrumentedModules.contains(module.moduleId)) module,
  ];
  @override
  FlaxPluginInstance install(FlaxHostContext context) =>
      plugin.install(context);
}
