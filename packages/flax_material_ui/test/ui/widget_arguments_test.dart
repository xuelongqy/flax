import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/functions_bindings.dart';
import '../../.dart_tool/flax/ui/material_repeated_bindings.dart';
import '../fixtures/repeated.dart';

import 'package:flax_test/flax_test.dart';

import '../support/owned_harness.dart';

OwnedHarness _harness({void Function(FlaxObjectBinding, Object)? onCreate}) =>
    OwnedHarness(
      fixture: 'widget_arguments',
      extra: [material_repeatedBindings, functionsBindings],
      onCreate: onCreate,
    );

void main() {
  for (final fail in [false, true]) {
    testWidgets('Dart saves a Widget before returning or throwing ($fail)', (
      t,
    ) async {
      late WidgetCache cache;
      final h = _harness(
        onCreate: (_, value) {
          if (value is WidgetCache) cache = value;
        },
      );
      try {
        await t.pumpWidget(h.app('widget-arguments'));
        if (fail) {
          expect(
            () => h.execute('saveWidget(true)'),
            throwsA(isA<FlaxJsException>()),
          );
        } else {
          h.execute('saveWidget()');
        }
        expect(h.runtime.activeSubscriptions, 0);
        await t.pumpWidget(MaterialApp(home: cache.child));
        await t.pumpAndSettle();
        expect(find.text('Saved 0'), findsOneWidget);
        h.execute("label.value = 'Saved 1'");
        await t.pumpAndSettle();
        expect(find.text('Saved 1'), findsOneWidget);
        await t.pumpWidget(h.app('widget-arguments'));
        expect(h.runtime.activeSubscriptions, 0);
        h.execute("label.value = 'Saved 2'");
        await t.pumpWidget(MaterialApp(home: cache.child));
        await t.pumpAndSettle();
        expect(find.text('Saved 2'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        cache.clear();
        await h.finish(t);
      }
    });
  }

  testWidgets(
    'one saved component config creates independent States and remounts',
    (t) async {
      late WidgetCache cache;
      final h = _harness(
        onCreate: (_, value) {
          if (value is WidgetCache) cache = value;
        },
      );
      try {
        await t.pumpWidget(h.app('widget-arguments'));
        h.execute('saveComponent()');
        expect(h.number('counts.created'), 0);
        expect(h.runtime.activeSubscriptions, 0);
        await t.pumpWidget(
          MaterialApp(home: Column(children: [cache.child!, cache.child!])),
        );
        await t.pumpAndSettle();
        expect(h.number('counts.created'), 2);
        await t.tap(find.text('State increment').first);
        await t.pumpAndSettle();
        expect(find.text('Static 1'), findsOneWidget);
        expect(find.text('Static 0'), findsOneWidget);
        await t.pumpWidget(h.app('widget-arguments'));
        expect(h.number('counts.disposed'), 2);
        expect(h.runtime.activeSubscriptions, 0);
        await t.pumpWidget(MaterialApp(home: cache.child));
        await t.pumpAndSettle();
        expect(h.number('counts.created'), 3);
        expect(find.text('Static 0'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        cache.clear();
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'typed functions accept new Widgets without a Context and native wrappers keep children',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(h.app('widget-arguments'));
        h.execute('''
        cache.saveTransform(value => wrapContent(value));
        var transformed = cache.callTransform(new StaticChild());
        var echoed = cache.transform(value => value)(transformed);
        cache.save(cache.wrap(mapContent(echoed, value => value)));
      ''');
        expect(h.boolean('cache.nullable(null) === null'), isTrue);
        expect(
          () => h.execute('cache.wrap(3)'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(
          () => h.execute(
            'cache.transform(() => Promise.resolve(null))(transformed)',
          ),
          throwsA(isA<FlaxJsException>()),
        );
        await t.pumpWidget(h.app('returned-widget'));
        await t.pumpAndSettle();
        expect(find.text('Static 0'), findsOneWidget);
        h.execute("label.value = 'Returned'");
        await t.pumpAndSettle();
        expect(find.text('Returned'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'object constructor can keep a Widget without an immediate JS return',
    (t) async {
      final caches = <WidgetCache>[];
      final h = _harness(
        onCreate: (_, value) {
          if (value is WidgetCache) caches.add(value);
        },
      );
      try {
        await t.pumpWidget(h.app('widget-arguments'));
        h.execute('var secondCache = createCache()');
        expect(caches.length, 2);
        await t.pumpWidget(MaterialApp(home: caches.last.child));
        await t.pumpAndSettle();
        expect(find.text('Saved 0'), findsOneWidget);
      } finally {
        for (final cache in caches) {
          cache.clear();
        }
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'ValueListenableBuilder preserves child State and lets signals update locally',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(h.app('listenables'));
        await t.pumpAndSettle();
        final initial = t
            .widget<ValueListenableBuilder<Object?>>(
              find.byType(ValueListenableBuilder<Object?>),
            )
            .child;
        final element = t.element(find.text('Static 0'));
        final builds = h.number('counts.built');
        final builders = h.number('counts.builders');
        final subscriptions = h.runtime.activeSubscriptions;
        final rebuilt = <FlaxWidgetHost>[];
        debugOnRebuildDirtyWidget = (element, _) {
          if (element.widget is FlaxWidgetHost) {
            rebuilt.add(element.widget as FlaxWidgetHost);
          }
        };
        addTearDown(() => debugOnRebuildDirtyWidget = null);
        h.execute("label.value = 'Local'");
        await t.pumpAndSettle();
        expect(h.number('counts.builders'), builders);
        expect(h.number('counts.built'), builds);
        expect(find.text('Local'), findsOneWidget);
        expect(rebuilt.length, 1);
        expect(rebuilt.single.node.definition.id, endsWith('::Text'));
        rebuilt.clear();
        h.execute('first.notify(2); first.notify(3); first.notify(4)');
        await t.pumpAndSettle();
        expect(find.text('Value 4'), findsOneWidget);
        expect(
          rebuilt.where(
            (host) =>
                host.node.definition.id.endsWith('::ValueListenableBuilder'),
          ),
          isEmpty,
        );
        debugOnRebuildDirtyWidget = null;
        expect(h.number('counts.builders'), builders + 1);
        expect(h.number('counts.built'), builds);
        expect(t.element(find.text('Static 0')), same(element));
        expect(
          t
              .widget<ValueListenableBuilder<Object?>>(
                find.byType(ValueListenableBuilder<Object?>),
              )
              .child,
          same(initial),
        );
        h.execute('selected.value = second.object');
        await t.pumpAndSettle();
        expect(find.text('Value 20'), findsOneWidget);
        expect(h.number('first.listeners.length'), 0);
        expect(h.number('second.listeners.length'), 1);
        expect(h.number('counts.created'), 1);
        expect(h.runtime.activeSubscriptions, subscriptions);
        h.execute('focus.canRequestFocus = false');
        await t.pumpAndSettle();
        expect(find.text('Focus false'), findsOneWidget);
        expect(find.text('Focus static'), findsOneWidget);
        await t.pumpWidget(h.app('widget-arguments'));
        expect(h.number('second.listeners.length'), 0);
        expect(h.number('counts.disposed'), 1);
        expect(h.runtime.activeSubscriptions, 0);
        expect(h.errors, isEmpty);
        // ignore: avoid_print
        print(
          'Widget child costs: builds=$builds, builders=$builders, subscriptions=$subscriptions, hostCalls=${h.runtime.hostCalls}',
        );
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'nullable/replaced/temporarily absent children and builder recovery',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(h.app('listenables'));
        for (final failure in ['throw', 'promise', 'invalid']) {
          h.execute("setFailure('$failure'); first.notify(2)");
          await t.pumpAndSettle();
          expect(find.text('Value 1'), findsOneWidget);
          expect(h.number('counts.created'), 1);
        }
        expect(h.errors.length, 3);
        h.execute(
          "setFailure('none'); showChild.value = false; first.notify(3)",
        );
        await t.pumpAndSettle();
        expect(find.text('Value 3'), findsOneWidget);
        expect(h.number('counts.disposed'), 1);
        h.execute('showChild.value = true; first.notify(4)');
        await t.pumpAndSettle();
        expect(h.number('counts.created'), 2);
        h.execute('child.value = null');
        await t.pumpAndSettle();
        expect(h.boolean('lastChild() === null'), isTrue);
        h.execute('child.value = new StaticChild()');
        await t.pumpAndSettle();
        expect(h.number('counts.created'), 3);
        expect(find.text('Static 0'), findsOneWidget);
      } finally {
        await h.finish(t);
      }
    },
  );

  for (final component in [false, true]) {
    testWidgets(
      'Dart GC collects discarded ${component ? 'component' : 'generated'} configuration',
      (t) async {
        late WidgetCache cache;
        final h = _harness(
          onCreate: (_, value) {
            if (value is WidgetCache) cache = value;
          },
        );
        try {
          await t.pumpWidget(h.app('widget-arguments'));
          await t.pumpAndSettle();
          // Warm up the cached component helper before measuring reclaimed handles.
          if (component) {
            h.execute('saveComponent()');
            cache.clear();
            await t.runAsync(flaxTestCollectDartGarbage);
            await t.pump();
          }
          final before = h.runtime.handles;
          h.execute(component ? 'saveComponent()' : 'saveWidget()');
          final weak = WeakReference((cache.child! as Padding).child!);
          cache.clear();
          for (var i = 0; i < 15; i++) {
            await t.runAsync(flaxTestCollectDartGarbage);
            await t.pump();
            if (weak.target == null && h.runtime.handles <= before) break;
          }
          expect(weak.target, isNull);
          expect(h.runtime.handles, lessThanOrEqualTo(before));
          expect(h.runtime.activeSubscriptions, 0);
          expect(h.number('counts.created'), 0);
        } finally {
          await h.finish(t);
        }
      },
    );
  }

  testWidgets(
    'unmounted Dart cache does not prevent deterministic session close',
    (t) async {
      late WidgetCache cache;
      final h = _harness(
        onCreate: (_, value) {
          if (value is WidgetCache) cache = value;
        },
      );
      await t.pumpWidget(h.app('widget-arguments'));
      h.execute('saveWidget()');
      await h.finish(t);
      expect(cache.child, isNotNull);
      await t.pumpWidget(MaterialApp(home: cache.child));
      await t.pumpAndSettle();
      expect(h.errors.single.toString(), contains('Closed Flax session'));
      expect(find.byType(ErrorWidget), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      expect(t.takeException(), isNull);
      cache.clear();
    },
  );
  testWidgets(
    'JS wrapper and Dart configuration have independent GC lifetimes',
    (t) async {
      late WidgetCache cache;
      final h = _harness(
        onCreate: (_, value) {
          if (value is WidgetCache) cache = value;
        },
      );
      try {
        await t.pumpWidget(h.app('widget-arguments'));
        h.execute(
          'saveWidget(); var retained = cache.take(); var weakJS = new WeakRef(retained)',
        );
        final weak = WeakReference((cache.child! as Padding).child!);
        cache.clear();
        await t.runAsync(flaxTestCollectDartGarbage);
        expect(weak.target, isNotNull);
        h.execute('retained = null');
        var collected = false;
        for (var i = 0; i < 60; i++) {
          h.runtime.drainMicrotasks();
          h.execute('${flaxTestJsGarbagePressure}cache.clear()');
          await t.pumpAndSettle();
          if (h.boolean('weakJS.deref() === undefined')) collected = true;
          await t.runAsync(flaxTestCollectDartGarbage);
          await t.pump();
          if (collected && weak.target == null) break;
        }
        expect(collected, isTrue);
        expect(weak.target, isNull);
        expect(h.runtime.activeSubscriptions, 0);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('saved custom component fails safely after session close', (
    t,
  ) async {
    late WidgetCache cache;
    final h = _harness(
      onCreate: (_, value) {
        if (value is WidgetCache) cache = value;
      },
    );
    await t.pumpWidget(h.app('widget-arguments'));
    h.execute('saveComponent()');
    await h.finish(t);
    await t.pumpWidget(MaterialApp(home: cache.child));
    await t.pumpAndSettle();
    expect(h.errors.single.toString(), contains('Closed Flax session'));
    expect(find.byType(ErrorWidget), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    expect(t.takeException(), isNull);
    cache.clear();
  });
  testWidgets(
    'two generated consumers register and remove separate listeners',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(h.app('listenables-two'));
        await t.pumpAndSettle();
        expect(h.number('first.listeners.length'), 2);
        expect(h.number('counts.created'), 2);
        final builds = h.number('counts.built');
        for (var i = 0; i < 20; i++) {
          h.execute('first.notify($i)');
          await t.pumpAndSettle();
          expect(find.text('Consumer $i'), findsNWidgets(2));
          expect(h.number('counts.built'), builds);
          expect(h.number('first.listeners.length'), 2);
        }
        await t.pumpWidget(h.app('widget-arguments'));
        expect(h.number('first.listeners.length'), 0);
        expect(h.number('counts.disposed'), 2);
        expect(h.runtime.activeSubscriptions, 0);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('failed argument validation never hands a Widget to Dart', (
    t,
  ) async {
    late WidgetCache cache;
    final h = _harness(
      onCreate: (_, value) {
        if (value is WidgetCache) cache = value;
      },
    );
    try {
      await t.pumpWidget(h.app('widget-arguments'));
      void fail() => expect(
        () => h.execute('cache.save(new StaticChild(), {fail: "wrong"})'),
        throwsA(isA<FlaxJsException>()),
      );
      fail();
      await t.pumpAndSettle();
      final handles = h.runtime.handles;
      for (var i = 0; i < 20; i++) {
        fail();
      }
      await t.pumpAndSettle();
      expect(cache.child, isNull);
      expect(h.number('counts.created'), 0);
      expect(h.runtime.activeSubscriptions, 0);
      expect(h.runtime.handles, handles);
    } finally {
      await h.finish(t);
    }
  });
  testWidgets(
    'an independent builder result can escape, remount and reject late mounting',
    (t) async {
      late WidgetCache cache;
      final h = _harness(
        onCreate: (_, value) {
          if (value is WidgetCache) cache = value;
        },
      );
      await t.pumpWidget(h.app('independent-widget'));
      await t.pumpAndSettle();
      cache.child = t
          .widget<Column>(
            find
                .descendant(
                  of: find.byType(TileBatch),
                  matching: find.byType(Column),
                )
                .first,
          )
          .children
          .single;
      h.execute('var retainedResult = cache.take()');
      await t.pumpWidget(h.app('widget-arguments'));
      expect(h.number('counts.disposed'), 1);
      expect(h.runtime.activeSubscriptions, 0);
      await t.pumpWidget(MaterialApp(home: cache.child));
      await t.pumpAndSettle();
      expect(h.number('counts.created'), 2);
      h.execute("label.value = 'Remounted result'");
      await t.pumpAndSettle();
      expect(find.text('Remounted result'), findsOneWidget);
      await h.finish(t);
      await t.pumpWidget(MaterialApp(home: cache.child));
      await t.pumpAndSettle();
      expect(h.errors.single.toString(), contains('Closed Flax session'));
      await t.pumpWidget(const SizedBox());
      expect(t.takeException(), isNull);
      cache.clear();
    },
  );
}
