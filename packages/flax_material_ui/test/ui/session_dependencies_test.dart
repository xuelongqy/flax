import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show registry;
import '../support/test_module.dart';
import 'navigation_test.dart' show NavigationHarness;

String _call(String name, String arguments) => flaxTestCheckedBinding(
  "__flaxInvokeOperation(__flaxResolveOperation($flaxBindingVersion, "
  "'test:$name', 'top', 'call', ''), 0$arguments)",
);

Future<void> _collect(WidgetTester tester) async {
  for (var i = 0; i < 4; i++) {
    await tester.runAsync(flaxTestCollectDartGarbage);
    await tester.pumpAndSettle();
  }
}

class _CallbackOwner {
  _CallbackOwner(this.callback);
  final String Function() callback;
}

final _signature = FlaxCallbackBinding(
  const [],
  const FlaxTypeRef('String'),
  (callback) =>
      () => callback.call(const [], const {}) as String,
  id: 'test:retainedCallback',
  matches: (value) => value is String Function(),
  invoke: (callback, _, _) => (callback as String Function())(),
);

void main() {
  testWidgets('a pure Dart replacement does not retain the JS session', (
    t,
  ) async {
    final route = MaterialPageRoute<Object?>(
      builder: (_) => const Text('Pure Dart page'),
    );
    final module = testBindingModule(
      'session-dependencies',
      const [],
      functions: [
        FlaxFunctionBinding(
          'test:nativeRoute',
          const [],
          const FlaxTypeRef('object', id: 'flax.core/flutter#type:Route'),
          (_) => route,
        ),
      ],
    );
    final h = NavigationHarness(
      bindings: FlaxBindingRegistry([...registry.modules, module]),
    );
    try {
      await h.enter(t);
      h.execute(
        'navigation.navigator.pushReplacement(${_call('nativeRoute', '')})',
      );
      await t.pumpAndSettle();
      expect(find.text('Pure Dart page'), findsOneWidget);
      expect(find.text('JS home'), findsNothing);
      var closed = false;
      final closing = h.session.close().then((_) => closed = true);
      await t.pumpAndSettle();
      expect(
        closed,
        isTrue,
        reason: 'A pure Dart Route needs no JS environment',
      );
      await closing;
      expect(find.text('Pure Dart page'), findsOneWidget);
      expect(route.isActive, isTrue);
      route.changedExternalState();
      await t.pumpAndSettle();
      expect(find.text('Pure Dart page'), findsOneWidget);
      expect(t.takeException(), isNull);
      expect(h.runtime.isDisposed, isTrue);
      expect(h.runtime.handlesAtDispose, 0);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'an ordinary Dart-held callback safely rejects calls after close',
    (t) async {
      String Function()? retained;
      void Function()? listener;
      final module = testBindingModule(
        'session-dependencies',
        const [],
        functions: [
          FlaxFunctionBinding(
            'test:keepCallback',
            [
              FlaxParameter(
                'value',
                FlaxTypeRef('callback', callback: _signature),
                required: true,
              ),
              FlaxParameter(
                'listener',
                FlaxTypeRef(
                  'callback',
                  callback: FlaxCallbackBinding(
                    const [],
                    const FlaxTypeRef('void'),
                    (callback) => () {
                      callback.call(const [], const {});
                    },
                    id: 'test:retiredListener',
                    matches: (value) => value is void Function(),
                    invoke: (value, _, _) {
                      (value as void Function())();
                      return null;
                    },
                  ),
                ),
                required: true,
              ),
            ],
            const FlaxTypeRef('void'),
            (values) {
              listener = values['listener'] as void Function();
              retained = values['value'] as String Function();
              return null;
            },
          ),
        ],
      );
      final h = NavigationHarness(
        bindings: FlaxBindingRegistry([...registry.modules, module]),
      );
      try {
        await h.enter(t);
        h.execute(_call('keepCallback', ", () => 'still live', () => {}"));
        expect(retained!(), 'still live');
        await flaxTestUnmount(t);
        await t.pumpAndSettle();
        var closed = false;
        h.session.close().then((_) => closed = true);
        await t.pump(const Duration(milliseconds: 1));
        expect(closed, isTrue);
        final calls = Map.of(h.runtime.jsCalls);
        for (var i = 0; i < 100; i++) {
          listener!();
          expect(retained!, throwsStateError);
        }
        expect(h.runtime.jsCalls, calls);
        expect(h.runtime.isDisposed, isTrue);
        expect(h.runtime.handlesAtDispose, 0);
      } finally {
        retained = null;
        listener = null;
        await _collect(t);
        await h.finish(t);
      }
    },
  );

  testWidgets('JS-only callback cycles do not block session closing', (
    t,
  ) async {
    WeakReference<_CallbackOwner>? weak;
    final module = testBindingModule('session-dependencies', [
      FlaxObjectBinding(
        'test:CallbackOwner',
        const [],
        const {},
        constructors: {
          '': [
            FlaxParameter(
              'callback',
              FlaxTypeRef('callback', callback: _signature),
              required: true,
            ),
          ],
        },
        create: (_, values) {
          final value = _CallbackOwner(values['callback'] as String Function());
          weak = WeakReference(value);
          return value;
        },
        matches: (value) => value is _CallbackOwner,
      ),
    ]);
    final h = NavigationHarness(
      bindings: FlaxBindingRegistry([...registry.modules, module]),
    );
    try {
      await h.enter(t);
      h.execute('''
        navigation.defineObject('test:CallbackOwner', [], [], {}, []);
        globalThis.retainedOwner = navigation.constructObject(
          'object', 'test:CallbackOwner', '',
          [{name:'callback', required:true, positional:true}],
          [() => retainedOwner ? 'cycle' : 'cleared'], {});
      ''');
      await flaxTestUnmount(t);
      var closed = false;
      h.session.close().then((_) => closed = true);
      await t.pumpAndSettle();
      expect(closed, isTrue);
      await _collect(t);
      expect(
        closed,
        isTrue,
        reason: 'Only the closing JS application retains this cycle',
      );
      expect(weak!.target, isNull);
      expect(h.runtime.handlesAtDispose, 0);
      expect(h.errors, isEmpty);
    } finally {
      if (!h.runtime.isDisposed) {
        h.execute('retainedOwner = null');
        await _collect(t);
      }
      await h.finish(t);
    }
  });
}
