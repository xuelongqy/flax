import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart';
import '../support/runtime_tracker.dart';

void main() {
  testWidgets('first mount reads bindings changed after runApp', (t) async {
    final runtime = RuntimeTracker();
    final errors = <Object>[];
    final view = FlaxView(
      createRuntime: () => runtime,
      source:
          '''
$source
hooks.count.value = 1;
hooks.visible.value = false;
hooks.items.value = [4, 5];
hooks.callback.value = () => hooks.count.value += 2;
''',
      bindings: registry,
      onError: (error, _) => errors.add(error),
    );
    try {
      await t.pumpWidget(MaterialApp(home: Scaffold(body: view)));
      expect(find.text('Count: 1'), findsOneWidget);
      expect(host('detail'), findsNothing);
      expect(find.text('Item 1'), findsNothing);
      expect(find.text('Item 4'), findsOneWidget);
      expect(find.text('Item 5'), findsOneWidget);
      expect(runtime.hostCalls['__flaxInvalidate'] ?? 0, 0);
      final subscriptions = runtime.activeSubscriptions;
      await t.tap(find.text('Increment'));
      await t.pump();
      expect(find.text('Count: 3'), findsOneWidget);
      expect(runtime.activeSubscriptions, subscriptions);
      expect(errors, isEmpty);
    } finally {
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
    }
    expect(runtime.isDisposed, isTrue);
    expect(runtime.handlesAtDispose, 0);
    expect(runtime.activeSubscriptions, 0);
  });

  testWidgets(
    'a binding that fails before mount keeps its preview and recovers',
    (t) async {
      final h = Harness();
      try {
        await t.pumpWidget(h.app(code: '$source\nhooks.fail.value = true;'));
        expect(find.text('Count: 0'), findsOneWidget);
        expect(h.errors.single.toString(), contains('binding failed'));
        h.execute('hooks.count.value = 2; hooks.fail.value = false;');
        await t.pump();
        expect(find.text('Count: 2'), findsOneWidget);
        expect(h.errors, hasLength(1));
      } finally {
        await t.pumpWidget(const SizedBox());
        await t.pumpAndSettle();
      }
      expect(h.runtime.isDisposed, isTrue);
    },
  );

  testWidgets(
    'local frame updates and parent rebuild preserve unaffected hosts',
    (t) async {
      final h = Harness();
      await t.pumpWidget(h.app());
      expect(h.errors, isEmpty);
      expect(find.text('Count: 0'), findsOneWidget);
      h.execute('hooks.visible.value = false');
      await t.pump();
      final parent = t.widget(host('root'));
      final sibling = t.widget(find.text('Static'));
      final rebuilt = <Key?>[];
      debugOnRebuildDirtyWidget = (element, once) {
        if (element.widget is FlaxWidgetHost) rebuilt.add(element.widget.key);
      };
      addTearDown(() => debugOnRebuildDirtyWidget = null);
      h.execute(
        'hooks.count.value = 1; hooks.count.value = 2; hooks.count.value = 3',
      );
      expect(find.text('Count: 0'), findsOneWidget);
      await t.pump();
      expect(find.text('Count: 3'), findsOneWidget);
      expect(rebuilt.where((k) => k == const ValueKey('count')), hasLength(1));
      expect(rebuilt, isNot(contains(const ValueKey('root'))));
      expect(rebuilt, isNot(contains(const ValueKey('static'))));
      expect(rebuilt, [const ValueKey('count')]);
      expect(t.widget(host('root')), same(parent));
      expect(t.widget(find.text('Static')), same(sibling));
      await t.tap(find.text('Increment'));
      await t.pump();
      expect(find.text('Count: 4'), findsOneWidget);
      h.execute('hooks.batchWrite()');
      await t.pump();
      expect(find.text('Count: 30'), findsOneWidget);
      await t.pumpWidget(h.app());
      expect(h.runtimes, hasLength(1));
      expect(find.text('Count: 30'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      expect(h.runtime.isDisposed, isTrue);
      expect(h.errors, isEmpty);
    },
  );
  testWidgets('keyed insertion, removal and moves preserve Element and State', (
    t,
  ) async {
    final h = Harness();
    await t.pumpWidget(h.app());
    final elements = {
      for (final id in [1, 2, 3]) id: t.element(host(id)),
    };
    final states = {
      for (final id in [1, 2, 3]) id: t.state(host(id)),
    };
    final button = t.element(
      find.descendant(of: host(2), matching: find.byType(Listener)),
    );
    h.execute('hooks.items.value = [3, 2, 4, 1]');
    await t.pump();
    for (final id in [1, 2, 3]) {
      expect(t.element(host(id)), same(elements[id]));
      expect(t.state(host(id)), same(states[id]));
    }
    expect(
      t.element(find.descendant(of: host(2), matching: find.byType(Listener))),
      same(button),
    );
    expect(t.getTopLeft(host(3)).dy, lessThan(t.getTopLeft(host(1)).dy));
    h.execute('hooks.items.value = [4, 2]');
    await t.pump();
    expect(elements[1]!.mounted, isFalse);
    expect(elements[3]!.mounted, isFalse);
    final detail = t.element(host('detail'));
    expect(h.number('hooks.active'), 1);
    h.execute('hooks.variant.value = true');
    await t.pump();
    expect(detail.mounted, isFalse);
    expect(h.number('hooks.active'), 0);
    h.execute('hooks.variant.value = false');
    await t.pump();
    expect(h.number('hooks.active'), 1);
    h.execute('hooks.visible.value = false');
    await t.pump();
    expect(host('detail'), findsNothing);
    expect(h.number('hooks.active'), 0);
    final reads = h.number('hooks.reads');
    h.execute('hooks.count.value++');
    await t.pump();
    expect(h.number('hooks.reads'), reads);
    h.execute('hooks.visible.value = true');
    await t.pump();
    expect(find.text('Detail 1'), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    expect(h.errors, isEmpty);
  });
  testWidgets(
    'retired callbacks, nullable events and failed updates recover safely',
    (t) async {
      final h = Harness();
      await t.pumpWidget(h.app());
      Listener button() => t.widget(
        find.descendant(of: host('button'), matching: find.byType(Listener)),
      );
      final old = button().onPointerDown!;
      h.execute('hooks.callback.value = () => { hooks.count.value += 2; }');
      await t.pump();
      old(const PointerDownEvent());
      expect(h.number('hooks.count.value'), 0);
      button().onPointerDown!(const PointerDownEvent());
      await t.pump();
      expect(find.text('Count: 2'), findsOneWidget);
      h.execute('hooks.callback.value = null');
      await t.pump();
      expect(button().onPointerDown, isNull);
      h.execute(
        'hooks.callback.value = () => { throw Error("event failed"); }',
      );
      await t.pump();
      button().onPointerDown!(const PointerDownEvent());
      expect(h.errors.last.toString(), contains('event failed'));
      h.execute('hooks.fail.value = true');
      await t.pump();
      expect(find.text('Count: 2'), findsOneWidget);
      expect(h.errors.last.toString(), contains('binding failed'));
      h.execute('hooks.count.value = 9; hooks.fail.value = false');
      await t.pump();
      expect(find.text('Count: 9'), findsOneWidget);
      final previous = t.element(host(1));
      h.execute('hooks.items.value = [1, 1]');
      await t.pump();
      expect(h.errors.last.toString(), contains('Duplicate sibling key'));
      expect(t.element(host(1)), same(previous));
      expect(find.text('Item 3'), findsOneWidget);
      h.execute('hooks.items.value = [3]');
      await t.pump();
      expect(host(1), findsNothing);
      h.execute('hooks.padding.value = "bad"');
      await t.pump();
      expect(h.errors.last.toString(), contains('double'));
      h.execute('hooks.padding.value = 8');
      await t.pump();
      expect(
        t
            .widget<Padding>(
              find
                  .ancestor(
                    of: find.text('Padded'),
                    matching: find.byType(Padding),
                  )
                  .first,
            )
            .padding,
        const EdgeInsets.all(8),
      );
      await t.pumpWidget(const SizedBox());
      old(const PointerDownEvent());
    },
  );
  testWidgets(
    'two views isolate state; queued notifications cannot outlive a session',
    (t) async {
      final a = Harness();
      final b = Harness();
      Widget app(bool left) => MaterialApp(
        home: Scaffold(
          body: Row(
            children: [
              Expanded(
                child: left
                    ? a.view(key: const ValueKey('a'))
                    : const SizedBox(),
              ),
              Expanded(child: b.view(key: const ValueKey('b'))),
            ],
          ),
        ),
      );
      await t.pumpWidget(app(true));
      a.execute('hooks.count.value = 5');
      await t.pump();
      expect(find.text('Count: 5'), findsOneWidget);
      expect(find.text('Count: 0'), findsOneWidget);
      a.execute('hooks.count.value = 6');
      await t.pumpWidget(app(false));
      expect(a.runtime.isDisposed, isTrue);
      expect(b.runtime.isDisposed, isFalse);
      b.execute('hooks.count.value = 7');
      await t.pump();
      expect(find.text('Count: 7'), findsOneWidget);
      await t.pumpWidget(app(true));
      expect(a.runtimes, hasLength(2));
      expect(b.runtimes, hasLength(1));
      expect(find.text('Count: 0'), findsOneWidget);
      expect(find.text('Count: 7'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      expect(a.errors, isEmpty);
      expect(b.errors, isEmpty);
    },
  );
  testWidgets(
    'source replacement cleans old children; initialization failures recover',
    (t) async {
      final h = Harness();
      await t.pumpWidget(h.app());
      final old = h.runtime;
      await t.pumpWidget(h.app(code: '$source\n// new session'));
      expect(old.isDisposed, isTrue);
      expect(h.runtimes, hasLength(2));
      expect(h.errors, isEmpty);
      await t.pumpWidget(h.app(code: 'throw Error("load failed")'));
      expect(h.runtime.isDisposed, isTrue);
      expect(find.byType(ErrorWidget), findsOneWidget);
      expect(h.errors.last.toString(), contains('load failed'));
      await t.pumpWidget(h.app(code: '__flaxMount({}, 13)'));
      expect(h.errors.last.toString(), contains('protocol'));
      await t.pumpWidget(h.app());
      expect(find.text('Count: 0'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
    },
  );
  testWidgets(
    'Flutter Theme, Directionality and constraints reach native widgets',
    (t) async {
      final h = Harness();
      final theme = ThemeData(colorSchemeSeed: const Color(0xff00aa00));
      await t.pumpWidget(
        MaterialApp(
          theme: theme,
          home: Scaffold(
            body: Directionality(
              textDirection: TextDirection.rtl,
              child: SizedBox(width: 360, child: h.view()),
            ),
          ),
        ),
      );
      final context = t.element(find.text('Static'));
      expect(Directionality.of(context), TextDirection.rtl);
      expect(Theme.of(context).colorScheme.primary, theme.colorScheme.primary);
      expect(t.getSize(host('root')).width, lessThanOrEqualTo(360));
      expect(h.errors, isEmpty);
      await t.pumpWidget(const SizedBox());
    },
  );
  testWidgets('invalidations during build wait for the next frame', (t) async {
    final h = Harness();
    await t.pumpWidget(h.app());
    var once = false;
    debugOnRebuildDirtyWidget = (element, built) {
      if (!once &&
          element.widget is FlaxWidgetHost &&
          element.widget.key == const ValueKey('count')) {
        once = true;
        h.execute('hooks.count.value = 2');
      }
    };
    addTearDown(() => debugOnRebuildDirtyWidget = null);
    h.execute('hooks.count.value = 1');
    await t.pump();
    expect(find.text('Count: 1'), findsOneWidget);
    await t.pump();
    expect(find.text('Count: 2'), findsOneWidget);
    expect(h.errors, isEmpty);
    await t.pumpWidget(const SizedBox());
  });

  testWidgets('key changes remount and unkeyed children match by position', (
    t,
  ) async {
    final h = Harness();
    await t.pumpWidget(h.app());
    final detail = t.element(host('detail'));
    h.execute('hooks.detailKey.value = "replacement"');
    await t.pump();
    expect(detail.mounted, isFalse);
    expect(host('replacement'), findsOneWidget);
    expect(h.number('hooks.active'), 1);
    h.execute('hooks.keyed.value = false');
    await t.pump();
    Finder item(int id) => find.ancestor(
      of: find.text('Item $id'),
      matching: find.byWidgetPredicate(
        (widget) =>
            widget is FlaxWidgetHost &&
            widget.node.definition.id.endsWith('::Listener'),
      ),
    );
    final first = t.element(item(1));
    final last = t.element(item(3));
    h.execute('hooks.items.value = [3, 2, 1]');
    await t.pump();
    expect(t.element(item(3)), same(first));
    expect(t.element(item(1)), same(last));
    expect(h.errors, isEmpty);
    await t.pumpWidget(const SizedBox());
  });

  test('duplicate registrations and incompatible modules are rejected', () {
    expect(
      () => FlaxBindingRegistry([flutterBindings, flutterBindings]),
      throwsArgumentError,
    );
    expect(
      () => FlaxBindingRegistry([
        const FlaxBindingModule(
          'previous',
          [],
          moduleId: 'test/previous',
          uiProtocol: 14,
          requiredCapabilities: <String>[],
        ),
      ]),
      throwsArgumentError,
    );
  });
}
