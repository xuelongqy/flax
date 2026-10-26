import 'package:flax_test/flax_test.dart';
import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show registry, source;
import '../support/runtime_tracker.dart';

void main() {
  testWidgets(
    'closing an unloaded session is idempotent and never creates an engine',
    (_) async {
      var created = false;
      final session = FlaxSession(
        createRuntime: () {
          created = true;
          throw StateError('Runtime must not be created');
        },
        source: 'throw Error("Source must not run")',
        bindings: registry,
      );
      final closing = session.close();
      expect(session.close(), same(closing));
      await closing;
      expect(created, isFalse);
    },
  );

  testWidgets('invalid binding dependencies never create a runtime', (
    tester,
  ) async {
    const dependency = FlaxBindingModule(
      'original',
      [],
      moduleId: 'test/dependency',
      uiProtocol: 24,
      requiredCapabilities: [],
    );
    const root = FlaxBindingModule(
      'root',
      [],
      moduleId: 'test/root',
      uiProtocol: 24,
      requiredCapabilities: [],
      dependencies: [dependency],
    );
    const conflicting = FlaxBindingModule(
      'replacement',
      [],
      moduleId: 'test/dependency',
      uiProtocol: 24,
      requiredCapabilities: [],
    );
    final runtime = _InitializationRuntime();
    var creations = 0;
    final errors = <Object>[];
    final session = FlaxSession(
      createRuntime: () {
        creations++;
        return runtime;
      },
      source: 'throw Error("Source must not run")',
      bindings: FlaxBindingRegistry([]),
      plugins: [
        _ClosePlugin(() {}, () {}, bindingModules: [root, conflicting]),
      ],
      onError: (error, _) => errors.add(error),
    );
    await tester.pumpWidget(
      MaterialApp(home: FlaxView.session(session: session)),
    );
    expect(
      errors.single,
      isA<ArgumentError>().having(
        (error) => error.message,
        'dependency conflict',
        'Duplicate binding module id test/dependency',
      ),
    );
    expect(creations, 0);
    await flaxTestUnmount(tester);
    final closing = session.close();
    expect(session.close(), same(closing));
    await closing;
    expect(creations, 0);
    expect(runtime.disposals, 0);
  });

  testWidgets('failed initialization closes once and rejects later mounts', (
    tester,
  ) async {
    final runtime = RuntimeTracker();
    final errors = <Object>[];
    var creations = 0;
    final session = FlaxSession(
      createRuntime: () {
        creations++;
        return runtime;
      },
      source: 'throw Error("initialization failed")',
      bindings: registry,
      onError: (error, _) => errors.add(error),
    );
    await tester.pumpWidget(
      MaterialApp(home: FlaxView.session(session: session)),
    );
    expect(errors, hasLength(1));
    expect(runtime.isDisposed, isTrue);
    expect(runtime.handlesAtDispose, 0);
    await flaxTestUnmount(tester);
    final closing = session.close();
    expect(session.close(), same(closing));
    await closing;
    await tester.pumpWidget(
      MaterialApp(home: FlaxView.session(session: session)),
    );
    expect(errors, hasLength(2));
    expect(creations, 1);
    expect(errors.last.toString(), contains('Closed Flax session'));
    await flaxTestUnmount(tester);
  });

  for (final prepared in [false, true]) {
    testWidgets(
      'reentrant close drains plugin hooks after preparation: $prepared',
      (tester) async {
        final runtime = RuntimeTracker();
        final events = <String>[];
        final errors = <Object>[];
        final disposedDuringClose = <bool>[];
        Future<void>? reentrant;
        late final FlaxSession session;
        session = FlaxSession(
          createRuntime: () => runtime,
          source: source,
          bindings: registry,
          onError: (error, _) => errors.add(error),
          plugins: [
            _ClosePlugin(() {
              events.add('close');
              reentrant = session.close();
              disposedDuringClose.add(runtime.isDisposed);
              events.add('close returned');
            }, () => events.add('dispose')),
          ],
        );
        final preparation = prepared ? session.prepareForExperiment() : null;
        await flaxTestPumpView(
          tester,
          MaterialApp(
            home: Scaffold(body: FlaxView.session(session: session)),
          ),
        );
        await preparation;
        await flaxTestUnmount(tester);
        await tester.pumpAndSettle();
        final closing = session.close();
        expect(reentrant, same(closing));
        expect(disposedDuringClose, [false]);
        await tester.pumpAndSettle();
        await closing;
        expect(events, ['close', 'close returned', 'dispose']);
        expect(runtime.isDisposed, isTrue);
        expect(runtime.handlesAtDispose, 0);
        expect(errors, isEmpty);
      },
    );
  }
}

class _ClosePlugin extends FlaxPlugin {
  const _ClosePlugin(
    this.onClose,
    this.onDispose, {
    this.bindingModules = const [],
  });
  final void Function() onClose;
  final void Function() onDispose;
  @override
  final List<FlaxBindingModule> bindingModules;
  @override
  String get id => 'test.reentrant-close';
  @override
  Set<String> get globals => const {};
  @override
  FlaxPluginInstance install(FlaxHostContext context) =>
      _CloseInstance(onClose, onDispose);
}

class _CloseInstance implements FlaxPluginInstance {
  _CloseInstance(this.onClose, this.onDispose);
  final void Function() onClose;
  final void Function() onDispose;
  @override
  void close() => onClose();
  @override
  void dispose() => onDispose();
}

class _InitializationRuntime extends FlaxJsRuntime {
  int disposals = 0;
  @override
  bool get isDisposed => disposals != 0;
  @override
  void dispose() => disposals++;
  @override
  dynamic noSuchMethod(Invocation invocation) =>
      throw StateError('Unexpected runtime access: ${invocation.memberName}');
}
