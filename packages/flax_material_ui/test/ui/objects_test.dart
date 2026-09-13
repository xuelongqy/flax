import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show host;
import '../support/owned_harness.dart';
import '../support/object_fixture.dart';
import '../support/test_module.dart';

import 'package:flax_test/flax_test.dart';

void main() {
  testWidgets(
    'real scrolling only updates its text binding and cleanup follows detach',
    (t) async {
      final h = OwnedHarness();
      await t.pumpWidget(h.app('scroll'));
      await t.pumpAndSettle();
      expect(h.boolean('objects.controller.hasClients'), isTrue);
      final staticElement = t.element(host('static'));
      final native = t.widget<SingleChildScrollView>(
        find.byType(SingleChildScrollView),
      );
      final constructorCount = h.created.length;
      final handles = h.runtime.handles;
      final subscriptions = h.runtime.activeSubscriptions;
      final memberCalls = h.runtime.hostCalls['__flaxObject'] ?? 0;
      final rebuilt = <FlaxWidgetHost>[];
      debugOnRebuildDirtyWidget = (element, builtOnce) {
        if (element.widget is FlaxWidgetHost) {
          rebuilt.add(element.widget as FlaxWidgetHost);
        }
      };
      addTearDown(() => debugOnRebuildDirtyWidget = null);
      await t.drag(find.byType(SingleChildScrollView), const Offset(0, -80));
      await t.pumpAndSettle();
      expect(native.controller!.offset, greaterThan(0));
      expect(h.number('objects.notifications'), greaterThan(0));
      expect(
        (h.runtime.hostCalls['__flaxObject'] ?? 0) - memberCalls,
        h.number('objects.notifications'),
      );
      expect(rebuilt, isNotEmpty);
      expect(
        rebuilt.every((host) => host.key == const ValueKey('offset')),
        isTrue,
      );
      debugPrint(
        'Scroll locality: $constructorCount objects, $subscriptions subscriptions, ${rebuilt.length} Text rebuilds; one offset read per notification.',
      );
      debugOnRebuildDirtyWidget = null;

      expect(find.text('Offset 0'), findsNothing);
      expect(t.element(host('static')), same(staticElement));
      expect(h.number('objects.staticBuilds'), 1);
      expect(h.created.length, constructorCount);
      expect(h.runtime.handles, handles);
      expect(h.runtime.activeSubscriptions, subscriptions);
      await t.tap(find.text('Top'));
      await t.pumpAndSettle();
      expect(find.text('Offset 0'), findsOneWidget);
      await t.pumpWidget(h.app('scroll', arguments: {'changed': true}));
      await t.pumpAndSettle();
      expect(h.number('objects.factories'), 1);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(h.boolean('objects.detached'), isTrue);
      expect(h.number('objects.disposed'), 1);
      expect(
        () => h.execute('objects.controller.offset'),
        throwsA(isA<FlaxJsException>()),
      );
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'detached, shared positions, replacement and widget borrowing follow Flutter',
    (t) async {
      final h = OwnedHarness();
      await t.pumpWidget(h.app('shared'));
      await t.pumpAndSettle();
      final controller = h.created.first as ScrollController;
      expect(controller.positions, hasLength(2));
      expect(
        () => h.execute('objects.controller.offset'),
        throwsA(isA<FlaxJsException>()),
      );
      h.execute('objects.controller.jumpTo(40)');
      await t.pumpAndSettle();
      expect(controller.positions.map((p) => p.pixels), [40, 40]);
      h.execute('objects.showSecond.value = false');
      await t.pumpAndSettle();
      expect(controller.positions, hasLength(1));
      expect(h.number('objects.controller.offset'), 40);
      expect(h.calls['dispose'], isNull);
      await t.pumpWidget(h.app('scroll'));
      await t.pumpAndSettle();
      final old = h.created.last as ScrollController;
      h.execute('objects.selected.value = objects.replacement');
      await t.pumpAndSettle();
      expect(old.hasClients, isFalse);
      expect(h.boolean('objects.replacement.hasClients'), isTrue);
      expect(
        () => h.execute('objects.controller.jumpTo(2)'),
        throwsA(isA<FlaxJsException>()),
      );
      h.execute('objects.selected.value = null');
      await t.pumpAndSettle();
      expect(h.boolean('objects.replacement.hasClients'), isFalse);
      expect(
        () => h.execute('objects.replacement.offset'),
        throwsA(isA<FlaxJsException>()),
      );
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'duplicate listeners retain closure identity and survive removal during notification',
    (t) async {
      final h = OwnedHarness();
      await t.pumpWidget(h.app('shared'));
      await t.pumpAndSettle();
      h.execute('objects.showSecond.value = false');
      await t.pumpAndSettle();
      final baseline = h.runtime.handles;
      h.execute(
        'objects.controller.addListener(objects.listener); objects.controller.addListener(objects.listener);',
      );
      await t.pumpAndSettle();
      expect(h.runtime.handles, baseline + 1);
      h.execute('objects.controller.jumpTo(10)');
      await t.pumpAndSettle();
      expect(h.number('objects.notifications'), 2);
      h.execute(
        'objects.controller.removeListener(objects.listener); objects.controller.jumpTo(20)',
      );
      await t.pumpAndSettle();
      expect(h.number('objects.notifications'), 3);
      h.execute('objects.controller.removeListener(objects.listener)');
      await t.pumpAndSettle();
      // The first Dart-to-JS notification caches one shared invocation helper.
      final steadyHandles = baseline + 1;
      expect(h.runtime.handles, steadyHandles);
      expect(
        h.runtime.handleLabels
            .where((label) => label == '__flaxBindings.invokeCallback')
            .length,
        1,
      );
      h.execute('''
      objects.listener = () => { objects.notifications++; objects.controller.removeListener(objects.listener); };
      objects.controller.addListener(objects.listener); objects.controller.addListener(objects.listener);
      objects.controller.jumpTo(30);
    ''');
      await t.pumpAndSettle();
      expect(h.number('objects.notifications'), 5);
      expect(h.runtime.handles, steadyHandles);
      h.execute('''
      objects.listener = () => objects.controller.dispose();
      objects.controller.addListener(objects.listener); objects.controller.jumpTo(50);
    ''');
      await t.pumpAndSettle();
      expect(
        h.errors.single.toString(),
        contains('_notificationCallStackDepth'),
      );
      expect(h.boolean('objects.controller.hasClients'), isTrue);
      h.execute(
        'objects.controller.removeListener(objects.listener); objects.controller.dispose(); objects.controller.removeListener(objects.listener)',
      );
      expect(
        () => h.execute('objects.controller.dispose()'),
        throwsA(isA<FlaxJsException>()),
      );
      await h.finish(t);
    },
  );

  testWidgets(
    'page failure rolls back objects, runs every cleanup, and recovers',
    (t) async {
      final h = OwnedHarness();
      await t.pumpWidget(h.app('failure'));
      await t.pumpAndSettle();
      expect(h.number('objects.cleanup.join("") === "21" ? 1 : 0'), 1);
      expect(h.errors.length, 2);
      expect(
        () => h.execute('objects.controller.hasClients'),
        throwsA(isA<FlaxJsException>()),
      );
      await t.pumpWidget(h.app('invalid'));
      await t.pumpAndSettle();
      expect(h.number('objects.disposed'), 1);
      expect(h.errors.length, 3);
      await t.pumpWidget(h.app('scroll'));
      await t.pumpAndSettle();
      expect(find.text('Offset 0'), findsOneWidget);
      await h.finish(t);
    },
  );

  testWidgets(
    'repeated content unmount releases listeners and initializes fresh objects',
    (t) async {
      final h = OwnedHarness();
      await t.pumpWidget(h.app('holder'));
      await t.pumpAndSettle();
      // Warm one-time revocation helpers before measuring repeated lifetimes.
      h.execute('objects.showPage.value = false');
      await t.pumpAndSettle();
      h.execute('objects.showPage.value = true');
      await t.pumpAndSettle();
      final baseline = h.runtime.handles;
      final subscriptions = h.runtime.activeSubscriptions;
      for (var i = 0; i < 4; i++) {
        h.execute('objects.showPage.value = false');
        await t.pumpAndSettle();
        expect(h.boolean('objects.detached'), isTrue);
        h.execute('objects.showPage.value = true');
        await t.pumpAndSettle();
        expect(h.runtime.handles, baseline);
        expect(h.runtime.activeSubscriptions, subscriptions);
      }
      expect(h.number('objects.factories'), 6);
      expect(h.number('objects.disposed'), 5);
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'a disposed reference is rejected before mounting a returned subtree',
    (t) async {
      final h = OwnedHarness();
      await t.pumpWidget(h.app('cached'));
      await t.pumpAndSettle();
      expect(h.errors.single.toString(), contains('Released Dart object'));
      expect(find.byType(SingleChildScrollView), findsNothing);
      await h.finish(t);
    },
  );
  testWidgets(
    'maintainState false cleans content and accepted routes can rebuild while closing',
    (t) async {
      final h = OwnedHarness();
      final navigator = GlobalKey<NavigatorState>();
      await t.pumpWidget(
        MaterialApp(navigatorKey: navigator, home: const SizedBox()),
      );
      navigator.currentState!.push(
        MaterialPageRoute<void>(
          maintainState: false,
          builder: (_) => Material(
            child: FlaxView.page(session: h.session, name: 'scroll'),
          ),
        ),
      );
      await t.pumpAndSettle();
      navigator.currentState!.push(
        MaterialPageRoute<void>(builder: (_) => const SizedBox()),
      );
      await t.pumpAndSettle();
      expect(h.number('objects.disposed'), 1);
      expect(h.boolean('objects.detached'), isTrue);
      var closed = false;
      final closing = h.session.close().then((_) => closed = true);
      await t.pump();
      expect(closed, isFalse);
      navigator.currentState!.pop();
      await t.pumpAndSettle();
      expect(h.number('objects.factories'), 2);
      expect(h.boolean('objects.controller.hasClients'), isTrue);
      expect(closed, isFalse);
      navigator.currentState!.pop();
      await t.pump(const Duration(milliseconds: 1));
      expect(h.runtime.isDisposed, isFalse);
      await t.pumpAndSettle();
      await closing;
      expect(h.runtime.handlesAtDispose, 0);
      expect(h.calls['dispose'], h.created.length - 2);
      expect(h.errors, isEmpty);
    },
  );
  testWidgets(
    'object members preserve identity and setters, reject foreign values, and clean throwing disposal',
    (t) async {
      final h = OwnedHarness(extra: [objectFixture()]);
      await t.pumpWidget(h.app('shared'));
      await t.pumpAndSettle();
      h.execute(
        'globalThis.gauge = Gauge(); globalThis.second = Gauge({initial: 8});',
      );
      expect(h.number('gauge.reading'), 7);
      expect(
        h.boolean('gauge.self === gauge && gauge.echo(second) === second'),
        isTrue,
      );
      h.execute('gauge.reading = 12; gauge.mode = activeMode;');
      expect(h.number('gauge.reading'), 12);
      expect(h.boolean('gauge.mode === activeMode'), isTrue);
      for (final code in [
        'Gauge({initial: -1})',
        'gauge.reading = "bad"',
        'gauge.echo(objects.controller)',
        'gauge.echo({})',
        'gauge.move(-1)',
        "__flaxObject(4, 'fixture:Gauge', 1, 'get', 'reading')",
      ]) {
        expect(
          () => h.execute(code),
          throwsA(isA<FlaxJsException>()),
          reason: code,
        );
      }
      await t.pumpAndSettle();
      final baseline = h.runtime.handles;
      h.execute(
        'gauge.watch(objects.listener); second.watch(objects.listener); gauge.move(20); second.move(30);',
      );
      await t.pumpAndSettle();
      expect(h.number('objects.notifications'), 2);
      h.execute(
        'gauge.unwatch(objects.listener); second.unwatch(objects.listener);',
      );
      await t.pumpAndSettle();
      // The first Dart-to-JS notification caches one shared invocation helper.
      expect(h.runtime.handles, baseline + 1);
      expect(
        h.runtime.handleLabels
            .where((label) => label == '__flaxBindings.invokeCallback')
            .length,
        1,
      );
      final gauge = h.created.whereType<Gauge>().first;
      gauge.failFinish = true;
      h.execute('gauge.watch(objects.listener)');
      expect(
        () => h.execute('gauge.finish()'),
        throwsA(isA<FlaxJsException>()),
      );
      expect(gauge.finishes, 1);
      expect(h.boolean('gauge.self === gauge'), isTrue);
      h.execute('gauge.unwatch(objects.listener)');
      // A throwing Dart disposer may already have side effects. Do not retry it.
      await h.finish(t);
      expect(gauge.finishes, 1);
      expect(h.created.whereType<Gauge>().last.finishes, 0);
      expect(h.errors, isEmpty);
    },
  );
  testWidgets('returned Dart objects are wrapped without taking disposal ownership', (
    t,
  ) async {
    final first = OwnedHarness(extra: [objectFixture()]);
    await t.pumpWidget(first.app('shared'));
    await t.pumpAndSettle();
    first.execute('globalThis.gauge = Gauge()');
    final foreign = first.created.whereType<Gauge>().single;
    final second = OwnedHarness(
      extra: [
        objectFixture(),
        testBindingModule('boundary fixture', [
          FlaxMemberBinding('fixture:Foreign', {
            'get': FlaxStaticMethod([], gaugeType, (_) => foreign),
          }),
          FlaxObjectBinding(
            'fixture:Unwrapped',
            [],
            {
              'finish': FlaxInstanceMethod([], const FlaxTypeRef('void'), (
                v,
                _,
              ) {
                (v as Gauge).finish();
                return null;
              }),
            },
            constructors: {'': []},
            create: (_, _) => Gauge(),
            disposeMethod: 'finish',
          ),
        ]),
      ],
    );
    await t.pumpWidget(second.app('shared'));
    await t.pumpAndSettle();
    second.execute(
      "var returned = __flaxCall($flaxBindingVersion, 'fixture:Foreign', 'get')",
    );
    expect(
      second.boolean(
        "returned === __flaxCall($flaxBindingVersion, 'fixture:Foreign', 'get')",
      ),
      isTrue,
    );
    expect(foreign.finishes, 0);
    expect(
      () => second.execute(
        "__flaxCreateObject($flaxBindingVersion, 'fixture:Unwrapped', {ctor: '', args: {}})",
      ),
      throwsA(isA<FlaxJsException>()),
    );
    expect(second.created.whereType<Gauge>().single.finishes, 0);
    second.execute(
      'globalThis.own = Gauge(); own.watch(async () => { throw Error("listener rejected"); }); own.move(10);',
    );
    await t.pumpAndSettle();
    expect(second.errors.single.toString(), contains('listener rejected'));
    await second.finish(t);
    expect(foreign.finishes, 0);
    await first.finish(t);
    expect(foreign.finishes, 0);
    foreign.finish();
  });
  testWidgets(
    'source replacement runs page cleanup before destroying the old engine',
    (t) async {
      final first = OwnedHarness();
      final second = OwnedHarness();
      final source = '${flaxTestFixtureSource('objects')}\nobjects.mount();';
      Widget app(OwnedHarness h, String code) => MaterialApp(
        home: Material(
          child: FlaxView(
            createRuntime: () => h.runtime,
            source: code,
            bindings: h.session.bindings,
            onError: (error, _) => h.errors.add(error),
          ),
        ),
      );
      await t.pumpWidget(app(first, source));
      await t.pumpAndSettle();
      await t.pumpWidget(app(second, '$source\n// Replacement source'));
      await t.pumpAndSettle();
      // The enclosing native Route still retains the old session until it retires.
      expect(first.runtime.isDisposed, isFalse);
      expect(first.calls['removeListener'], 1);
      expect(first.number('objects.disposed'), 1);
      expect(first.boolean('objects.detached'), isTrue);
      expect(second.boolean('objects.controller.hasClients'), isTrue);
      await first.finish(t);
      expect(first.runtime.handlesAtDispose, 0);
      expect(first.actualDisposals, first.created.length - 2);
      await second.finish(t);
      expect(first.errors, isEmpty);
      expect(second.errors, isEmpty);
    },
  );
}
