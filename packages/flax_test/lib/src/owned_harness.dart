import 'package:flax/flax.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import 'runtime_tracker.dart';
import 'harness.dart';

class FlaxOwnedTestHarness {
  FlaxOwnedTestHarness({
    required FlaxJsRuntime Function() createRuntime,
    required FlaxBindingRegistry bindings,
    required String source,
    List<FlaxPlugin> plugins = const [],
    List<FlaxBindingModule> extra = const [],
    void Function(FlaxObjectBinding binding, Object value)? onCreate,
  }) : runtime = FlaxTestRuntimeTracker(createRuntime()) {
    final memberViews = <FlaxObjectMemberView, FlaxObjectMemberView>{};
    final modules = [...bindings.modules, ...extra]
        .map(
          (module) => FlaxBindingModule(
            module.name,
            [
              for (final type in module.types)
                if (type is FlaxObjectBinding)
                  FlaxObjectBinding(
                    type.id,
                    type.getters,
                    _trackMethods(type, type.instanceMethods),
                    constructors: type.constructors,
                    create: (constructor, arguments) {
                      final value = type.create(constructor, arguments);
                      constructions.update(
                        type.id,
                        (count) => count + 1,
                        ifAbsent: () => 1,
                      );
                      if (type.disposeMethod != null) created.add(value);
                      onCreate?.call(type, value);
                      return value;
                    },
                    disposeMethod: type.disposeMethod,
                    matches: type.matches,
                    methods: type.methods,
                    staticGetters: type.staticGetters,
                    listenerPairs: type.listenerPairs,
                    setters: type.setters,
                    supertypes: type.supertypes,
                    proxy: type.proxy,
                    memberViewOperations: type.memberViewOperations,
                    memberView: type.memberView == null
                        ? null
                        : (value) {
                            calls.update(
                              '@memberView:${type.id}',
                              (count) => count + 1,
                              ifAbsent: () => 1,
                            );
                            final view = type.memberView!(value);
                            return view == null
                                ? null
                                : memberViews.putIfAbsent(
                                    view,
                                    () => FlaxObjectMemberView(
                                      getters: view.getters,
                                      setters: view.setters,
                                      instanceMethods: _trackMethods(
                                        type,
                                        view.instanceMethods,
                                      ),
                                    ),
                                  );
                          },
                  )
                else
                  type,
            ],
            moduleId: module.moduleId,
            dependencyModules: module.dependencyModules,
            uiProtocol: module.uiProtocol,
            requiredCapabilities: module.requiredCapabilities,
            functions: module.functions,
            records: module.records,
          ),
        )
        .toList();
    session = FlaxSession(
      createRuntime: () => runtime,
      source: source,
      bindings: FlaxBindingRegistry(modules),
      plugins: [
        for (final plugin in plugins)
          FlaxTestBindingPlugin(plugin, {
            for (final module in modules) module.moduleId,
          }),
      ],
      onError: (error, _) => errors.add(error),
    );
  }

  final FlaxTestRuntimeTracker runtime;
  final errors = <Object>[];
  final created = <Object>[];
  final calls = <String, int>{};

  Map<String, FlaxInstanceMethod> _trackMethods(
    FlaxObjectBinding type,
    Map<String, FlaxInstanceMethod> methods,
  ) => {
    for (final entry in methods.entries)
      entry.key: FlaxInstanceMethod(
        entry.value.parameters,
        entry.value.result,
        (receiver, args) {
          calls.update(entry.key, (count) => count + 1, ifAbsent: () => 1);
          if (entry.key == type.disposeMethod) actualDisposals++;
          return entry.value.invoke(receiver, args);
        },
        startsRoute: entry.value.startsRoute,
      ),
  };
  final constructions = <String, int>{};
  int actualDisposals = 0;
  late final FlaxSession session;

  void execute(String code) {
    final result = runtime.evaluate(code);
    if (result is FlaxJsObject) result.release();
  }

  num number(String code) => (runtime.evaluate(code) as FlaxJsNumber).value;
  String string(String code) => (runtime.evaluate(code) as FlaxJsString).value;
  bool boolean(String code) => (runtime.evaluate(code) as FlaxJsBoolean).value;

  Widget page(String name, {Object? arguments}) =>
      FlaxView.page(session: session, name: name, arguments: arguments);

  Future<void> finish(WidgetTester tester) async {
    await tester.pumpWidget(const SizedBox());
    await tester.pumpAndSettle();
    final disposalsBeforeClose = actualDisposals;
    await flaxTestCloseSession(tester, session);
    expect(runtime.handlesAtDispose, 0);
    expect(runtime.activeSubscriptions, 0);
    expect(actualDisposals, disposalsBeforeClose);
  }
}
