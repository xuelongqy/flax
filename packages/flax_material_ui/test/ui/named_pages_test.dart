import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart' show registry;
import '../support/runtime_tracker.dart';

final namedSource = flaxTestFixtureSource('named_pages');

void main() {
  testWidgets(
    'named pages keep state on parameter updates and isolate instances',
    (t) async {
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      final session = FlaxSession(
        createRuntime: () => runtime,
        source: namedSource,
        bindings: registry,
        onError: (e, _) => errors.add(e),
      );
      Widget app(Object? args, {String key = 'a'}) => MaterialApp(
        home: Material(
          child: Row(
            children: [
              Expanded(
                child: FlaxView.page(
                  key: ValueKey(key),
                  session: session,
                  name: 'details',
                  arguments: args,
                ),
              ),
              Expanded(
                child: FlaxView.page(
                  key: const ValueKey('b'),
                  session: session,
                  name: 'details',
                  arguments: const {'id': 2},
                ),
              ),
            ],
          ),
        ),
      );
      num read(String code) => (runtime.evaluate(code) as FlaxJsNumber).value;
      await t.pumpWidget(app({'id': 1}));
      await t.pumpAndSettle();
      expect(read('namedPages.starts'), 1);
      expect(read('namedPages.factories'), 2);
      await t.tap(find.text('Increment page').first);
      await t.pumpAndSettle();
      expect(find.text('Count 1'), findsOneWidget);
      expect(find.text('Count 0'), findsOneWidget);
      final calls = Map<String, int>.from(runtime.jsCalls);
      await t.pumpWidget(app({'id': 1}));
      await t.pumpAndSettle();
      // Checkpoint sweeps inspect weak references without delivering page parameters.
      expect(
        runtime.jsCalls['__flaxBindings.updatePage'],
        calls['__flaxBindings.updatePage'],
      );
      expect(read('namedPages.factories'), 2);
      await t.pumpWidget(app({'id': 3}));
      await t.pumpAndSettle();
      expect(find.text('Input {"id":3}'), findsOneWidget);
      expect(find.text('Count 1'), findsOneWidget);
      expect(read('namedPages.factories'), 2);
      expect(read('namedPages.builds'), 2);
      await t.pumpWidget(app({'id': 3}, key: 'new'));
      await t.pumpAndSettle();
      expect(find.text('Count 0'), findsNWidgets(2));
      expect(read('namedPages.factories'), 3);
      expect(errors, isEmpty);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await session.close();
      expect(runtime.handlesAtDispose, 0);
      expect(runtime.activeSubscriptions, 0);
    },
  );

  testWidgets(
    'JS PageContent parameter bindings update after build without rebuilding siblings',
    (t) async {
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      final session = FlaxSession(
        createRuntime: () => runtime,
        source: namedSource,
        bindings: registry,
        onError: (e, _) => errors.add(e),
      );
      await t.pumpWidget(
        MaterialApp(
          home: Material(
            child: FlaxView.page(session: session, name: 'holder'),
          ),
        ),
      );
      await t.pumpAndSettle();
      await t.tap(find.text('Increment page'));
      await t.pumpAndSettle();
      runtime.evaluate('namedPages.input.value = {id: 2}; undefined');
      await t.pump();
      expect(find.text('Input {"id":1}'), findsOneWidget);
      await t.pump();
      expect(find.text('Input {"id":2}'), findsOneWidget);
      expect(find.text('Count 1'), findsOneWidget);
      expect(
        (runtime.evaluate('namedPages.factories') as FlaxJsNumber).value,
        1,
      );
      expect((runtime.evaluate('namedPages.builds') as FlaxJsNumber).value, 1);
      expect(
        (runtime.evaluate('namedPages.staticBuilds') as FlaxJsNumber).value,
        1,
      );
      expect(errors, isEmpty);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await session.close();
      expect(runtime.handlesAtDispose, 0);
      expect(runtime.activeSubscriptions, 0);
    },
  );

  testWidgets(
    'named page failures are local and invalid arguments retain content',
    (t) async {
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      final session = FlaxSession(
        createRuntime: () => runtime,
        source: namedSource,
        bindings: registry,
        onError: (e, _) => errors.add(e),
      );
      Widget app(String name, Object? args) => MaterialApp(
        home: Material(
          child: FlaxView.page(session: session, name: name, arguments: args),
        ),
      );
      for (final name in ['missing', 'failure', 'promise']) {
        await t.pumpWidget(app(name, null));
        await t.pumpAndSettle();
        expect(find.byType(ErrorWidget), findsOneWidget);
      }
      expect(errors, hasLength(3));
      await t.pumpWidget(app('details', {'id': 1}));
      await t.pumpAndSettle();
      expect(find.text('Input {"id":1}'), findsOneWidget);
      final cyclic = <String, Object?>{};
      cyclic['self'] = cyclic;
      await t.pumpWidget(app('details', cyclic));
      await t.pumpAndSettle();
      expect(find.text('Input {"id":1}'), findsOneWidget);
      expect(errors.last.toString(), contains('Cyclic'));
      await t.pumpWidget(app('details', {'id': 2}));
      await t.pumpAndSettle();
      expect(find.text('Input {"id":2}'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await session.close();
      expect(runtime.handlesAtDispose, 0);
    },
  );
}
