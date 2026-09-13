import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/runtime_tracker.dart';
import '../support/harness.dart' show registry;

void main() {
  testWidgets('failed parent deactivation preserves child-first disposal', (
    t,
  ) async {
    final runtime = RuntimeTracker();
    final events = <String>[];
    final errors = <Object>[];
    runtime.registerHostFunction('recordLifecycle', (_, args) {
      events.add((args.single as FlaxJsString).value);
      return const FlaxJsUndefined();
    });
    final session = FlaxSession(
      createRuntime: () => runtime,
      bindings: registry,
      onError: (error, _) => errors.add(error),
      source: '''${flaxTestFixtureSource('components')}
class Parent extends componentApi.StatefulWidget { createState() { return new ParentState(); } }
class Child extends componentApi.StatefulWidget { createState() { return new ChildState(); } }
class ParentState extends componentApi.State {
  build(context) { return new Child(); }
  deactivate() { recordLifecycle('parent:deactivate'); throw Error('parent deactivation'); }
  dispose() { recordLifecycle('parent:dispose'); super.dispose(); }
}
class ChildState extends componentApi.State {
  build(context) { return componentApi.Text('child'); }
  deactivate() { recordLifecycle('child:deactivate'); super.deactivate(); }
  dispose() { recordLifecycle('child:dispose'); super.dispose(); }
}
componentApi.runApp(new Parent());
''',
    );
    await t.pumpWidget(MaterialApp(home: FlaxView.session(session: session)));
    final closed = session.close();
    await t.pumpWidget(const SizedBox());
    await closed;
    expect(events, [
      'parent:deactivate',
      'child:deactivate',
      'child:dispose',
      'parent:dispose',
    ]);
    expect(errors, hasLength(1));
    expect(t.takeException(), isNull);
    expect(runtime.handlesAtDispose, 0);
  });

  for (final hook in [
    'initialDependencies',
    'didChangeDependencies',
    'didUpdateWidget',
    'deactivate',
    'activate',
    'reassemble',
  ]) {
    for (final mode in ['before', 'after', 'missingSuper', 'promise']) {
      testWidgets('$hook $mode reports once and permits complete cleanup', (
        t,
      ) async {
        final runtime = RuntimeTracker();
        final errors = <Object>[];
        final method = hook == 'initialDependencies'
            ? 'didChangeDependencies'
            : hook;
        final body = switch (mode) {
          'before' => "throw Error('before super');",
          'after' => "super.$method(...args); throw Error('after super');",
          'missingSuper' => 'return;',
          _ => 'super.$method(...args); return Promise.resolve();',
        };
        final session = FlaxSession(
          createRuntime: () => runtime,
          bindings: registry,
          onError: (error, _) => errors.add(error),
          source:
              '''${flaxTestFixtureSource('components')}
var armed = ${hook == 'initialDependencies'};
class Probe extends componentApi.Counter {
  createState() { return new ProbeState(); }
}
class ProbeState extends componentApi.CounterState {
  $method(...args) {
    if (!armed) return super.$method(...args);
    $body
  }
}
var makeProbe = value => new Probe('probe', value);
var selected = componentApi.signal(makeProbe(1));
componentApi.runApp(componentApi.Column({children: [
  componentApi.Center({child: selected.bind}),
  new componentApi.Counter('sibling', 2),
]}));
''',
        );
        void execute(String code) {
          final value = runtime.evaluate(code);
          if (value is FlaxJsObject) value.release();
        }

        final key = GlobalKey();
        Widget tree({bool moved = false, bool rtl = false}) {
          final view = KeyedSubtree(
            key: key,
            child: FlaxView.session(session: session),
          );
          return MaterialApp(
            home: Directionality(
              textDirection: rtl ? TextDirection.rtl : TextDirection.ltr,
              child: Row(
                children: [
                  SizedBox(width: 350, child: moved ? const SizedBox() : view),
                  SizedBox(width: 350, child: moved ? view : const SizedBox()),
                ],
              ),
            ),
          );
        }

        await t.pumpWidget(tree());
        if (hook != 'initialDependencies') {
          expect(errors, isEmpty);
          execute('armed = true;');
          switch (hook) {
            case 'didChangeDependencies':
              await t.pumpWidget(tree(rtl: true));
            case 'didUpdateWidget':
              execute('selected.value = makeProbe(3);');
              await t.pump();
            case 'deactivate' || 'activate':
              await t.pumpWidget(tree(moved: true));
            case 'reassemble':
              final done = t.binding.reassembleApplication();
              await t.pump();
              await done;
          }
        }
        expect(t.takeException(), isNull);
        expect(errors, hasLength(1));
        expect(find.textContaining('sibling:2:'), findsOneWidget);
        execute('armed = false;');
        // A subsequent valid update still reaches the same State and its children.
        execute(
          'componentHooks.states[0].setState(() => componentHooks.states[0].count = 7);',
        );
        await t.pump();
        expect(find.textContaining('probe:7:'), findsOneWidget);
        var closed = false;
        session.close().then((_) => closed = true);
        expect(closed, isFalse);
        await t.pumpWidget(const SizedBox());
        await t.pump();
        expect(t.takeException(), isNull);
        expect(closed, isTrue);
        expect(runtime.isDisposed, isTrue);
        expect(runtime.handlesAtDispose, 0);
        expect(runtime.activeSubscriptions, 0);
        expect(errors, hasLength(1));
      });
    }
  }
}
