import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/functions_bindings.dart';
import '../support/owned_harness.dart';
import '../support/harness.dart' show host;

class _Routes extends NavigatorObserver {
  final routes = <Route<dynamic>>[];
  @override
  void didPush(Route<dynamic> route, Route<dynamic>? previousRoute) =>
      routes.add(route);
}

OwnedHarness _harness() =>
    OwnedHarness(fixture: 'top_level', extra: [functionsBindings]);

Widget _app(
  OwnedHarness h, {
  List<NavigatorObserver> observers = const [],
  Widget? home,
  ThemeData? theme,
}) => MaterialApp(
  theme: theme,
  navigatorObservers: observers,
  home: home ?? Material(child: FlaxView.session(session: h.session)),
);

void main() {
  testWidgets('nested synchronous calls keep separate observer records', (
    t,
  ) async {
    final h = _harness();
    final observer = FlaxNavigatorObserver();
    final routes = _Routes();
    try {
      await t.pumpWidget(_app(h, observers: [observer, routes]));
      h.execute('topLevel.fixture(false, () => { topLevel.open(); })');
      await t.pumpAndSettle();
      expect(routes.routes, hasLength(3));
      expect(h.number('topLevel.created'), 2);
      routes.routes.last.navigator!.pop();
      await t.pumpAndSettle();
      routes.routes[1].navigator!.pop();
      await t.pumpAndSettle();
      expect(h.number('topLevel.disposed'), 2);
      expect(h.runtime.pendingFutures, 0);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'JS MaterialApp installs the generated observer without a Dart shell',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(
          FlaxView.page(session: h.session, name: 'application'),
        );
        final app = t.widget<MaterialApp>(find.byType(MaterialApp));
        expect(app.navigatorObservers!.single, isA<FlaxNavigatorObserver>());
        await t.tap(find.text('Open dialog'));
        await t.pumpAndSettle();
        expect(find.byType(AlertDialog), findsOneWidget);
        await t.tap(find.text('Accept dialog'));
        await t.pumpAndSettle();
        expect(
          h.string('JSON.stringify(topLevel.result)'),
          '{"accepted":[true,0]}',
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'native showDialog captures the source Theme and retains valid content after failure',
    (t) async {
      final h = _harness();
      final observer = FlaxNavigatorObserver();
      final routes = _Routes();
      final localTheme = ThemeData(colorSchemeSeed: const Color(0xff934455));
      try {
        await t.pumpWidget(
          _app(
            h,
            observers: [observer, routes],
            home: Theme(
              data: localTheme,
              child: Material(child: FlaxView.session(session: h.session)),
            ),
          ),
        );
        h.execute('topLevel.open()');
        await t.pumpAndSettle();
        expect(
          Theme.of(t.element(find.byType(AlertDialog))).colorScheme,
          localTheme.colorScheme,
        );
        await t.tap(find.text('Increment dialog'));
        await t.pumpAndSettle();
        for (final mode in ['throw', 'valid']) {
          h.execute('topLevel.setMode("$mode")');
          final reassemble = t.binding.reassembleApplication();
          await t.pump();
          await reassemble;
          await t.pumpAndSettle();
          expect(find.text('Local 1'), findsOneWidget);
        }
        expect(h.errors, hasLength(1));
        h.errors.clear();
        routes.routes.last.navigator!.pop();
        await t.pumpAndSettle();
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'nested and root Navigator selection preserves observer isolation',
    (t) async {
      final h = _harness();
      final outer = _Routes();
      final inner = _Routes();
      final rootObserver = FlaxNavigatorObserver();
      final innerObserver = FlaxNavigatorObserver();
      try {
        await t.pumpWidget(
          _app(
            h,
            observers: [rootObserver, outer],
            home: Navigator(
              observers: [innerObserver, inner],
              onGenerateRoute: (_) => MaterialPageRoute<void>(
                builder: (_) =>
                    Material(child: FlaxView.session(session: h.session)),
              ),
            ),
          ),
        );
        h.execute('topLevel.open()');
        await t.pumpAndSettle();
        expect(outer.routes.last, isA<DialogRoute<Object?>>());
        expect(inner.routes, hasLength(1));
        outer.routes.last.navigator!.pop();
        await t.pumpAndSettle();
        h.execute(
          'topLevel.open({useRootNavigator: false, barrierDismissible: false})',
        );
        await t.pumpAndSettle();
        expect(inner.routes.last, isA<DialogRoute<Object?>>());
        await t.tapAt(const Offset(5, 5));
        await t.pumpAndSettle();
        expect(find.byType(AlertDialog), findsOneWidget);
        inner.routes.last.navigator!.pop();
        await t.pumpAndSettle();
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'one builder can open multiple dialogs and barriers return null',
    (t) async {
      final h = _harness();
      final observer = FlaxNavigatorObserver();
      final routes = _Routes();
      try {
        await t.pumpWidget(_app(h, observers: [observer, routes]));
        for (var i = 0; i < 4; i++) {
          h.execute('topLevel.open(); topLevel.open()');
          await t.pumpAndSettle();
          expect(
            h.number('topLevel.created') - h.number('topLevel.disposed'),
            2,
          );
          await t.tapAt(const Offset(5, 5));
          await t.pumpAndSettle();
          expect(h.boolean('topLevel.result === null'), isTrue);
          expect(find.byType(AlertDialog), findsOneWidget);
          routes.routes[routes.routes.length - 2].navigator!.pop();
          await t.pumpAndSettle();
          expect(h.number('topLevel.created'), h.number('topLevel.disposed'));
          expect(h.runtime.pendingFutures, 0);
          expect(h.runtime.activeSubscriptions, 0);
        }
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('close and pop before first build release an unmounted dialog', (
    t,
  ) async {
    final h = _harness();
    final observer = FlaxNavigatorObserver();
    final routes = _Routes();
    try {
      await t.pumpWidget(_app(h, observers: [observer, routes]));
      h.execute('topLevel.open()');
      expect(h.number('topLevel.created'), 0);
      final closing = h.session.close();
      routes.routes.last.navigator!.pop();
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await closing;
      expect(h.runtime.handlesAtDispose, 0);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('the same host observer serves independent sessions', (t) async {
    final first = _harness();
    final second = _harness();
    final observer = FlaxNavigatorObserver();
    final routes = _Routes();
    Widget app({bool includeFirst = true}) => MaterialApp(
      navigatorObservers: [observer, routes],
      home: Material(
        child: Row(
          children: [
            if (includeFirst)
              Expanded(
                key: const ValueKey('first'),
                child: FlaxView.session(session: first.session),
              ),
            Expanded(
              key: const ValueKey('second'),
              child: FlaxView.session(session: second.session),
            ),
          ],
        ),
      ),
    );
    try {
      await t.pumpWidget(app());
      first.execute('topLevel.open()');
      await t.pumpAndSettle();
      final firstRoute = routes.routes.last;
      second.execute('topLevel.open()');
      await t.pumpAndSettle();
      await t.pumpWidget(app(includeFirst: false));
      final closing = first.session.close();
      firstRoute.navigator!.removeRoute(firstRoute);
      await t.pumpAndSettle();
      await closing;
      expect(first.runtime.isDisposed, isTrue);
      expect(second.runtime.isDisposed, isFalse);
      second.execute('topLevel.label.value = "Independent dialog"');
      await t.pumpAndSettle();
      expect(find.text('Independent dialog'), findsOneWidget);
      expect(second.errors, isEmpty);
    } finally {
      await first.finish(t);
      await second.finish(t);
    }
  });

  test('protocol 12 function modules are rejected', () {
    expect(
      () => FlaxBindingRegistry([
        const FlaxBindingModule(
          'old',
          [],
          moduleId: 'test/old',
          uiProtocol: 12,
          requiredCapabilities: <String>[],
        ),
      ]),
      throwsArgumentError,
    );
  });

  testWidgets(
    'top-level functions preserve values, defaults, callbacks and Future results',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(_app(h));
        h.execute('var f = topLevel.functions; var token = f.FunctionToken(9)');
        expect(h.number('f.addValues(3)'), 5);
        expect(h.number('f.addValues(3, undefined)'), 5);
        expect(h.number('f.withDefaults()'), 8);
        expect(h.number('f.withDefaults({token})'), 10);
        expect(h.number('f.withDefaults({transform: v => v * 2})'), 14);
        expect(h.number('f.withDefaults({token, transform: v => v * 2})'), 18);
        expect(
          h.boolean(
            'f.echoToken(token) === token && f.exchange(token) === token',
          ),
          isTrue,
        );
        expect(
          h.boolean(
            'f.toggleMode(f.FunctionMode.first) === f.FunctionMode.second',
          ),
          isTrue,
        );
        expect(
          h.boolean(
            'JSON.stringify(f.mapNumbers([1, 2], v => v * 2).toArray()) === "[2,4]"',
          ),
          isTrue,
        );
        expect(h.number('f.multiplyBy(3)(7)'), 21);
        h.execute(
          'var data = {items: [1, null]}; var copy = f.copyData(data); copy.items[0] = 7',
        );
        expect(h.number('data.items[0]'), 1);
        for (final source in [
          'f.addValues(null)',
          'f.addValues(1.5)',
          'f.copyData(token)',
          'f.withDefaults({extra: 1})',
        ]) {
          expect(() => h.execute(source), throwsA(isA<FlaxJsException>()));
        }
        final before = h.runtime.hostCalls['__flaxTopLevel'] ?? 0;
        h.execute('var fitted = topLevel.fit()');
        expect((h.runtime.hostCalls['__flaxTopLevel'] ?? 0) - before, 1);
        expect(h.number('fitted.destination.width'), 40);
        expect(h.number('fitted.destination.height'), 20);
        h.execute(
          'var settled = []; f.finishLater().then(v => settled.push(v)); f.finishLater({empty:true}).then(v => settled.push(v)); f.finishVoid().then(v => settled.push(v === undefined)); f.finishLater({fail:true}).catch(e => settled.push(String(e).includes("fixture failure")))',
        );
        await t.pumpAndSettle();
        expect(h.string('JSON.stringify(settled)'), '[17,null,true,true]');
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'showDialog requires the selected Navigator observer before pushing',
    (t) async {
      final h = _harness();
      final routes = _Routes();
      try {
        await t.pumpWidget(_app(h, observers: [routes]));
        final count = routes.routes.length;
        expect(
          () => h.execute('topLevel.open()'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(routes.routes.length, count);
        expect(h.runtime.pendingFutures, 0);
        expect(find.byType(AlertDialog), findsNothing);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'native dialog preserves State, local signals and structured results',
    (t) async {
      final h = _harness();
      final observer = FlaxNavigatorObserver();
      final routes = _Routes();
      try {
        await t.pumpWidget(_app(h, observers: [observer, routes]));
        final sourceElement = t.element(host('static-source'));
        await t.tap(find.text('Open dialog'));
        await t.pumpAndSettle();
        expect(routes.routes.last, isA<DialogRoute<Object?>>());
        expect(find.byType(AlertDialog), findsOneWidget);
        final builds = h.number('topLevel.builds');
        h.execute('topLevel.label.value = "Changed title"');
        await t.pumpAndSettle();
        expect(find.text('Changed title'), findsOneWidget);
        expect(h.number('topLevel.builds'), builds);
        await t.tap(find.text('Increment dialog'));
        await t.pumpAndSettle();
        expect(find.text('Local 1'), findsOneWidget);
        expect(
          t.widget<TextField>(find.byType(TextField)).controller!.text,
          'Keep input',
        );
        await t.tap(find.text('Accept dialog'));
        await t.pumpAndSettle();
        expect(
          h.string('JSON.stringify(topLevel.result)'),
          '{"accepted":[true,1]}',
        );
        expect(h.number('topLevel.created'), 1);
        expect(h.number('topLevel.disposed'), 1);
        expect(t.element(host('static-source')), same(sourceElement));
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'accepted dialog outlives source and closing waits for its exit transition',
    (t) async {
      final h = _harness();
      final observer = FlaxNavigatorObserver();
      final routes = _Routes();
      try {
        await t.pumpWidget(_app(h, observers: [observer, routes]));
        h.execute('topLevel.open()');
        await t.pumpAndSettle();
        final dialog = routes.routes.last as TransitionRoute<Object?>;
        await t.pumpWidget(
          _app(
            h,
            observers: [observer, routes],
            home: const Text('Source gone'),
          ),
        );
        var closed = false;
        final closing = h.session.close().then((_) => closed = true);
        await t.pump();
        expect(closed, isFalse);
        expect(
          () => h.execute('topLevel.open()'),
          throwsA(isA<FlaxJsException>()),
        );
        h.execute('topLevel.label.value = "Still alive"');
        await t.pump();
        expect(find.text('Still alive'), findsOneWidget);
        dialog.navigator!.pop();
        await t.pump();
        expect(closed, isFalse);
        await t.pumpAndSettle();
        await closing;
        expect(closed, isTrue);
        expect(h.runtime.handlesAtDispose, 0);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Route is retained before first build and plugin calls share the mechanism',
    (t) async {
      final h = _harness();
      final observer = FlaxNavigatorObserver();
      final routes = _Routes();
      try {
        await t.pumpWidget(_app(h, observers: [observer, routes]));
        expect(
          () => h.execute('topLevel.fixture(true)'),
          throwsA(isA<FlaxJsException>()),
        );
        final route = routes.routes.last;
        await t.pumpWidget(
          _app(h, observers: [observer, routes], home: const Text('Gone')),
        );
        var closed = false;
        final closing = h.session.close().then((_) => closed = true);
        await t.pump();
        expect(closed, isFalse);
        route.navigator!.removeRoute(route);
        await t.pumpAndSettle();
        await closing;
        expect(h.runtime.handlesAtDispose, 0);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'dialog builder failures report once and subsequent builds recover',
    (t) async {
      final h = _harness();
      final observer = FlaxNavigatorObserver();
      final routes = _Routes();
      try {
        await t.pumpWidget(_app(h, observers: [observer, routes]));
        for (final failure in ['throw', 'promise', 'invalid']) {
          h.execute('topLevel.setMode("$failure"); topLevel.open()');
          await t.pumpAndSettle();
          expect(h.errors, hasLength(1));
          h.errors.clear();
          h.execute('topLevel.setMode("valid")');
          // Reassemble exercises the real mounted callback without replacing the Route.
          final reassemble = t.binding.reassembleApplication();
          await t.pump();
          await reassemble;
          await t.pumpAndSettle();
          expect(find.byType(AlertDialog), findsOneWidget);
          routes.routes.last.navigator!.pop();
          await t.pumpAndSettle();
          expect(h.errors, isEmpty);
        }
      } finally {
        await h.finish(t);
      }
    },
  );
}
