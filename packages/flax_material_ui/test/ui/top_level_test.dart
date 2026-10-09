import 'dart:async';

import 'package:flax_test/flax_test.dart';
import 'package:flax/flax.dart';
import 'package:flutter/material.dart' as native;
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/functions_bindings.dart';
import '../fixtures/functions.dart' as fixture;
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
  testWidgets(
    'ordinary callbacks preserve synchronous order and Context identity',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(_app(h));
        h.execute('''
        var callbackOrder = ['before'];
        var sameCallbackContext = false;
        var callbackSource = topLevel.functions.nativeTile();
        var callbackWidget = topLevel.functions.invokeBuilder(topLevel.context, current => {
          callbackOrder.push('callback');
          sameCallbackContext = current === topLevel.context;
          return callbackSource;
        });
        callbackOrder.push('after');
      ''');
        expect(h.string('callbackOrder.join(",")'), 'before,callback,after');
        expect(h.boolean('sameCallbackContext'), isTrue);
        expect(h.boolean('callbackWidget === callbackSource'), isTrue);
        expect(
          () => h.execute(
            'topLevel.functions.invokeBuilder(topLevel.context, () => { throw Error("synchronous failure"); })',
          ),
          throwsA(isA<FlaxJsException>()),
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'ordinary interface callbacks preserve native types and identity',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(_app(h));
        h.execute('''
        var preferredFunctions = topLevel.functions;
        var preferredSource = preferredFunctions.nativePreferred();
        var preferredContext = topLevel.context;
        var preferredBox = preferredFunctions.PreferredBuilderBox(current => {
          if (current !== preferredContext) throw Error('Context changed');
          return preferredSource;
        });
        var preferredResults = [
          preferredFunctions.invokePreferred(preferredContext, () => preferredSource),
          preferredBox.invoke(preferredContext),
          preferredFunctions.PreferredBuilderBox.buildStatic(preferredContext, () => preferredSource),
          preferredFunctions.mapPreferred(preferredSource, value => value),
          preferredFunctions.preferredIdentity()(preferredSource),
          preferredFunctions.invokeNullablePreferred(preferredContext, () => preferredSource),
        ];
        var preferredList = preferredFunctions.mapPreferredList(values => values.toArray());
        var preferredGenericList = preferredFunctions.genericPreferredList(() => [preferredSource]);
        var preferredDescriptor = preferredFunctions.invokePreferred(preferredContext, () => topLevel.preferred());
        var asyncPreferredHeight = 0;
        preferredFunctions.invokeAsyncPreferred(preferredContext, async () => preferredSource)
          .then(value => { asyncPreferredHeight = preferredFunctions.preferredHeight(value); });
      ''');
        await t.pumpAndSettle();
        expect(
          h.boolean(
            'preferredResults.every(value => value === preferredSource)',
          ),
          isTrue,
        );
        expect(
          h.number('preferredFunctions.preferredHeight(preferredList.get(0))'),
          37,
        );
        expect(
          h.number('preferredFunctions.preferredHeight(preferredDescriptor)'),
          43,
        );
        expect(
          h.boolean('preferredGenericList.get(0) === preferredSource'),
          isTrue,
        );
        expect(h.number('asyncPreferredHeight'), 37);
        expect(
          h.boolean(
            'preferredFunctions.invokeNullablePreferred(preferredContext, () => null) === null',
          ),
          isTrue,
        );
        await t.pumpWidget(_app(h, home: h.page('preferred')));
        expect(find.text('Descriptor preferred'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('ordinary interface callbacks reject invalid inputs and results', (
    t,
  ) async {
    final h = _harness();
    try {
      await t.pumpWidget(_app(h));
      for (final value in [
        'null',
        'undefined',
        '7',
        'topLevel.functions.nativeTile()',
        'Promise.resolve(topLevel.functions.nativePreferred())',
      ]) {
        expect(
          () => h.execute(
            'topLevel.functions.invokePreferred(topLevel.context, () => $value)',
          ),
          throwsA(isA<FlaxJsException>()),
          reason: value,
        );
      }
      for (final call in [
        'topLevel.functions.preferredIdentity()(topLevel.functions.nativeTile())',
        'topLevel.functions.invokePreferred(topLevel.context, () => { throw Error("interface failure"); })',
        'topLevel.functions.mapPreferredList(() => [topLevel.functions.nativeTile()])',
      ]) {
        expect(
          () => h.execute(call),
          throwsA(isA<FlaxJsException>()),
          reason: call,
        );
      }
      expect(
        h.number(
          'topLevel.functions.preferredHeight(topLevel.functions.invokePreferred(topLevel.context, () => topLevel.preferred()))',
        ),
        43,
      );
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  for (final shape in [
    'indexed',
    'nullable',
    'async',
    'named',
    'optional',
    'nested',
  ]) {
    testWidgets('ordinary $shape callback uses native Flutter invocation', (
      t,
    ) async {
      final h = _harness();
      try {
        await t.pumpWidget(_app(h));
        h.execute(
          'topLevel.setMode("native"); topLevel.setBuilderKind("$shape")',
        );
        await t.pumpWidget(_app(h, home: Material(child: h.page('builder'))));
        await t.pumpAndSettle();
        expect(h.number('topLevel.builderCalls'), 1);
        expect(h.boolean('topLevel.builderMounted'), isTrue);
        expect(
          find.byWidgetPredicate((w) => w is SizedBox && w.width == 17),
          shape == 'nullable' ? findsNothing : findsOneWidget,
        );
        if (shape == 'indexed') expect(h.number('topLevel.builderIndex'), 1);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    });
  }

  testWidgets('Dart retention and clearing control a stored JS callback', (
    t,
  ) async {
    final h = _harness();
    try {
      await t.pumpWidget(_app(h));
      h.execute('''
        var weakContextListener;
        (() => {
          const callback = current => current.mounted;
          weakContextListener = new WeakRef(callback);
          topLevel.functions.ContextValues.setSelectedContextListener(callback);
        })();
      ''');
      await t.runAsync(flaxTestCollectDartGarbage);
      h.execute(flaxTestJsGarbagePressure);
      expect(h.boolean('weakContextListener.deref() !== undefined'), isTrue);
      expect(
        h.boolean('topLevel.functions.invokeContextListener(topLevel.context)'),
        isTrue,
      );
      h.execute(
        'topLevel.functions.ContextValues.setSelectedContextListener(null)',
      );
      for (var i = 0; i < 8; i++) {
        await t.runAsync(flaxTestCollectDartGarbage);
        h.execute(flaxTestJsGarbagePressure);
        await t.pump();
        if (h.boolean('weakContextListener.deref() === undefined')) break;
      }
      expect(h.boolean('weakContextListener.deref() === undefined'), isTrue);
      expect(h.errors, isEmpty);
    } finally {
      fixture.selectedContextListener = null;
      await h.finish(t);
    }
  });

  testWidgets('a retained JS Context does not retain a native Element', (
    t,
  ) async {
    final h = _harness();
    try {
      await t.pumpWidget(_app(h));
      h.execute(
        'topLevel.setMode("native"); topLevel.setBuilderKind("indexed")',
      );
      await t.pumpWidget(_app(h, home: Material(child: h.page('builder'))));
      expect(fixture.lastCallbackContext!.target, isNotNull);
      await t.pumpWidget(const SizedBox());
      await t.runAsync(flaxTestCollectDartGarbage);
      expect(fixture.lastCallbackContext!.target, isNull);
      expect(h.boolean('topLevel.lastBuilderContext.mounted'), isFalse);
      expect(h.errors, isEmpty);
    } finally {
      fixture.lastCallbackContext = null;
      await h.finish(t);
    }
  });

  testWidgets(
    'Context inputs work in functions, objects, properties and collections',
    (t) async {
      final h = _harness();
      Widget themed(Brightness brightness) => _app(
        h,
        home: native.Theme(
          data: native.ThemeData(brightness: brightness),
          child: Material(child: FlaxView.session(session: h.session)),
        ),
      );
      try {
        await t.pumpWidget(themed(Brightness.dark));
        h.execute('topLevel.makeContextBox()');
        for (final expression in [
          'topLevel.functions.isDark(topLevel.context)',
          'topLevel.functions.contextMounted(topLevel.context)',
          'topLevel.functions.ContextBox.isMounted(topLevel.context)',
          'topLevel.contextBox.mounted',
          'topLevel.contextBox.matches(topLevel.context)',
          'topLevel.functions.contextReader()(topLevel.context)',
          'topLevel.functions.optionalContext({context: topLevel.context})',
        ]) {
          expect(h.boolean(expression), isTrue, reason: expression);
        }
        for (final expression in [
          'topLevel.contextBox.optionalMounted',
          'topLevel.functions.optionalContext()',
          'topLevel.functions.optionalContext({context: undefined})',
          'topLevel.functions.optionalContext({context: null})',
        ]) {
          expect(h.boolean(expression), isFalse, reason: expression);
        }
        expect(
          h.number(
            'topLevel.functions.mountedContexts([topLevel.context, topLevel.context])',
          ),
          2,
        );
        h.execute(
          'topLevel.contextBox.origin = topLevel.context; '
          'topLevel.contextBox.optional = topLevel.context; '
          'topLevel.functions.ContextBox.setSelected(topLevel.context); '
          'topLevel.functions.ContextValues.setSelectedContext(topLevel.context)',
        );
        expect(h.boolean('topLevel.contextBox.optionalMounted'), isTrue);
        expect(
          h.boolean('topLevel.functions.ContextBox.selectedMounted'),
          isTrue,
        );
        expect(
          h.boolean('topLevel.functions.ContextValues.selectedContextMounted'),
          isTrue,
        );
        h.execute(
          'topLevel.contextBox.optional = null; '
          'topLevel.functions.ContextBox.setSelected(null); '
          'topLevel.functions.ContextValues.setSelectedContext(null)',
        );
        expect(h.boolean('topLevel.contextBox.optionalMounted'), isFalse);
        expect(
          h.boolean('topLevel.functions.ContextBox.selectedMounted'),
          isFalse,
        );
        expect(
          h.boolean('topLevel.functions.ContextValues.selectedContextMounted'),
          isFalse,
        );
        await t.pumpWidget(themed(Brightness.light));
        expect(
          h.boolean('topLevel.functions.isDark(topLevel.context)'),
          isFalse,
        );
        h.execute('topLevel.makeContextBox(topLevel.context, null)');
        expect(h.boolean('topLevel.contextBox.optionalMounted'), isFalse);
        h.execute(
          'topLevel.makeContextBox(topLevel.context, topLevel.context)',
        );
        expect(h.boolean('topLevel.contextBox.optionalMounted'), isTrue);
        expect(h.errors, isEmpty);
      } finally {
        fixture.ContextBox.selected = null;
        fixture.selectedContext = null;
        await h.finish(t);
      }
    },
  );

  testWidgets('Context inputs reject invalid values on every conversion path', (
    t,
  ) async {
    final h = _harness();
    try {
      await t.pumpWidget(_app(h));
      h.execute('topLevel.makeContextBox()');
      for (final value in ['{}', '1', 'null', 'undefined']) {
        for (final call in [
          'topLevel.functions.contextMounted($value)',
          'topLevel.functions.ContextBox($value)',
          'topLevel.contextBox.matches($value)',
          'topLevel.contextBox.origin = $value',
          'topLevel.functions.mountedContexts([$value])',
          'topLevel.functions.contextReader()($value)',
        ]) {
          expect(
            () => h.execute(call),
            throwsA(isA<FlaxJsException>()),
            reason: call,
          );
        }
      }
      for (final value in ['{}', '1', 'undefined']) {
        for (final call in [
          'topLevel.contextBox.optional = $value',
          'topLevel.functions.ContextBox.setSelected($value)',
          'topLevel.functions.ContextValues.setSelectedContext($value)',
        ]) {
          expect(
            () => h.execute(call),
            throwsA(isA<FlaxJsException>()),
            reason: call,
          );
        }
      }
      expect(h.boolean('topLevel.contextBox.mounted'), isTrue);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('Context constructors preserve native storage after unmount', (
    t,
  ) async {
    final h = _harness();
    try {
      await t.pumpWidget(_app(h));
      h.execute('topLevel.makeContextBox()');
      await t.pumpWidget(const SizedBox());
      expect(h.boolean('topLevel.contextBox.mounted'), isFalse);
      for (final call in [
        'topLevel.functions.ContextBox(topLevel.context)',
        'topLevel.contextBox.origin = topLevel.context',
        'topLevel.contextBox.matches(topLevel.context)',
        'topLevel.functions.mountedContexts([topLevel.context])',
        'topLevel.functions.ContextBox.setSelected(topLevel.context)',
        'topLevel.functions.ContextValues.setSelectedContext(topLevel.context)',
      ]) {
        expect(
          () => h.execute(call),
          throwsA(isA<FlaxJsException>()),
          reason: call,
        );
      }
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('Widget constructors borrow their supplied Context', (t) async {
    final h = _harness();
    try {
      await t.pumpWidget(_app(h, home: Material(child: h.page('context'))));
      expect(find.text('Context true'), findsOneWidget);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'ordinary builder rejects an unmounted native Context before JS',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(_app(h));
        h.execute('topLevel.saveContext()');
        await t.pumpWidget(const SizedBox());
        expect(
          () => h.execute('topLevel.stale()'),
          throwsA(
            isA<FlaxJsException>().having(
              (e) => e.toString(),
              'message',
              contains('Inactive or unmounted BuildContext'),
            ),
          ),
        );
        expect(h.number('topLevel.builderCalls'), 0);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('ordinary callbacks isolate concurrent sessions', (t) async {
    final first = _harness();
    final second = _harness();
    final visible = ValueNotifier(true);
    try {
      await t.pumpWidget(
        _app(
          first,
          home: ValueListenableBuilder<bool>(
            valueListenable: visible,
            builder: (_, value, _) => Row(
              children: [
                if (value)
                  Expanded(
                    key: const ValueKey('first-slot'),
                    child: FlaxView.session(
                      key: const ValueKey('first'),
                      session: first.session,
                    ),
                  ),
                Expanded(
                  key: const ValueKey('second-slot'),
                  child: FlaxView.session(
                    key: const ValueKey('second'),
                    session: second.session,
                  ),
                ),
              ],
            ),
          ),
        ),
      );
      first.execute('topLevel.inline()');
      second.execute('topLevel.inline()');
      final reassemble = t.binding.reassembleApplication();
      await t.pump();
      await reassemble;
      await t.pumpAndSettle();
      first.execute('topLevel.label.value = "First builder"');
      await t.pumpAndSettle();
      expect(find.text('First builder'), findsOneWidget);
      expect(find.text('Dialog label'), findsOneWidget);
      visible.value = false;
      await t.pumpAndSettle();
      expect(
        find.byKey(const ValueKey('first'), skipOffstage: false),
        findsNothing,
      );
      // Unlike a named Page entry, ordinary content must not hold this host Route.
      await flaxTestCloseSession(t, first.session);
      expect(first.runtime.isDisposed, isTrue);
      expect(second.runtime.isDisposed, isFalse);
      await t.tap(find.text('Increment dialog'));
      await t.pumpAndSettle();
      expect(find.text('Local 1'), findsOneWidget);
      expect(first.errors, isEmpty);
      expect(second.errors, isEmpty);
    } finally {
      await first.finish(t);
      await second.finish(t);
      visible.dispose();
    }
  });

  for (final kind in ['stored', 'preview']) {
    testWidgets('ordinary $kind builder survives released input and Dart GC', (
      t,
    ) async {
      final h = _harness();
      try {
        await t.pumpWidget(_app(h));
        h.execute(
          'topLevel.setMode("native"); topLevel.setBuilderKind("$kind"); '
          'topLevel.${kind == 'stored' ? 'store' : 'preview'}()',
        );
        expect(h.number('topLevel.builderCalls'), kind == 'stored' ? 0 : 1);
        await t.runAsync(flaxTestCollectDartGarbage);
        h.execute(flaxTestJsGarbagePressure);
        await t.pumpWidget(
          _app(
            h,
            home: Material(
              child: FlaxView.page(session: h.session, name: 'builder'),
            ),
          ),
        );
        await t.pumpAndSettle();
        expect(h.boolean('topLevel.builderMounted'), isTrue);
        expect(
          find.byWidgetPredicate(
            (w) => w is SizedBox && w.width == 17 && w.height == 19,
          ),
          findsOneWidget,
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    });
  }

  testWidgets('never mounted ordinary builder does not prevent session close', (
    t,
  ) async {
    final h = _harness();
    try {
      await t.pumpWidget(_app(h));
      h.execute('topLevel.preview()');
      expect(h.number('topLevel.builderCalls'), 1);
      await t.pumpWidget(const SizedBox());
      await flaxTestCloseSession(t, h.session);
      expect(h.runtime.isDisposed, isTrue);
    } finally {
      await h.finish(t);
    }
  });

  for (final failure in ['throw', 'promise', 'invalid']) {
    testWidgets('ordinary builder $failure recovers on a later build', (
      t,
    ) async {
      final h = _harness();
      try {
        await t.pumpWidget(_app(h));
        h.execute('topLevel.setMode("$failure")');
        await t.pumpWidget(
          _app(
            h,
            home: Material(
              child: FlaxView.page(session: h.session, name: 'builder'),
            ),
          ),
        );
        await t.pumpAndSettle();
        expect(find.byType(ErrorWidget), findsOneWidget);
        expect(t.takeException(), isNotNull);
        expect(h.errors, isEmpty);
        h.execute('topLevel.setMode("valid")');
        t
            .element(
              find
                  .ancestor(
                    of: find.byType(ErrorWidget),
                    matching: find.byType(Builder),
                  )
                  .first,
            )
            .markNeedsBuild();
        await t.pumpAndSettle();
        expect(find.byType(ErrorWidget), findsNothing);
        expect(find.text('Local 0'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    });
  }

  testWidgets('ordinary repeated builder invocations keep independent State', (
    t,
  ) async {
    final h = _harness();
    try {
      await t.pumpWidget(_app(h));
      h.execute('topLevel.setBuilderKind("repeat")');
      await t.pumpWidget(
        _app(
          h,
          home: Material(
            child: FlaxView.page(session: h.session, name: 'builder'),
          ),
        ),
      );
      await t.pumpAndSettle();
      expect(find.text('Local 0'), findsNWidgets(2));
      await t.tap(find.text('Increment dialog').first);
      await t.pumpAndSettle();
      expect(find.text('Local 1'), findsOneWidget);
      expect(find.text('Local 0'), findsOneWidget);
      expect(h.number('topLevel.created'), 2);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'observed push then throw survives close before its first build',
    (t) async {
      final h = _harness();
      final routes = _Routes();
      final source = ValueNotifier(true);
      try {
        await t.pumpWidget(
          _app(
            h,
            observers: [FlaxNavigatorObserver(), routes],
            home: ValueListenableBuilder<bool>(
              valueListenable: source,
              builder: (_, visible, _) => visible
                  ? Material(child: FlaxView.session(session: h.session))
                  : const Text('Native source'),
            ),
          ),
        );
        expect(
          () => h.execute('topLevel.fixture(true, undefined, false)'),
          throwsA(isA<FlaxJsException>()),
        );
        final hidden = routes.routes.last as TransitionRoute<Object?>;
        final navigator = hidden.navigator!;
        var completed = false;
        hidden.completed.then((_) => completed = true);
        unawaited(
          navigator.push<void>(
            PageRouteBuilder<void>(
              transitionDuration: Duration.zero,
              pageBuilder: (_, _, _) => const Text('Native covering page'),
            ),
          ),
        );
        await t.pumpAndSettle();
        expect(h.number('topLevel.created'), 0);
        source.value = false;
        await t.pump();
        expect(find.byType(FlaxView, skipOffstage: false), findsNothing);
        var closed = false;
        final closing = h.session.close().then((_) => closed = true);
        await t.pumpAndSettle();
        expect(completed, isFalse);
        expect(closed, isFalse);
        expect(h.runtime.isDisposed, isFalse);
        navigator.removeRoute(routes.routes.last);
        await t.pumpAndSettle();
        expect(t.takeException(), isNull);
        expect(find.byType(AlertDialog), findsOneWidget);
        navigator.removeRoute(hidden);
        await t.pumpAndSettle();
        await closing;
        expect(completed, isTrue);
      } finally {
        await h.finish(t);
        source.dispose();
      }
    },
  );

  for (final kind in [
    'function',
    'constructor',
    'method',
    'static',
    'returned',
  ]) {
    testWidgets('ordinary $kind WidgetBuilder preserves its native Context', (
      t,
    ) async {
      final h = _harness();
      try {
        await t.pumpWidget(_app(h));
        h.execute('topLevel.setBuilderKind("$kind")');
        expect(h.number('topLevel.builderCalls'), 0);
        final theme = ThemeData(colorSchemeSeed: const Color(0xff934455));
        await t.pumpWidget(
          _app(
            h,
            theme: theme,
            home: Material(
              child: FlaxView.page(session: h.session, name: 'builder'),
            ),
          ),
        );
        await t.pumpAndSettle();
        expect(h.boolean('topLevel.builderMounted'), isTrue);
        expect(find.byType(AlertDialog), findsOneWidget);
        expect(
          Theme.of(t.element(find.byType(AlertDialog))).colorScheme,
          theme.colorScheme,
        );
        await t.tap(find.text('Increment dialog'));
        await t.pumpAndSettle();
        expect(find.text('Local 1'), findsOneWidget);
        h.execute('topLevel.label.value = "Updated builder"');
        await t.pumpAndSettle();
        expect(find.text('Updated builder'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    });
  }

  for (final kind in ['undefined', 'null']) {
    testWidgets('ordinary WidgetBuilder preserves $kind', (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(_app(h));
        h.execute('topLevel.setBuilderKind("$kind")');
        await t.pumpWidget(
          _app(
            h,
            home: Material(
              child: FlaxView.page(session: h.session, name: 'builder'),
            ),
          ),
        );
        await t.pumpAndSettle();
        expect(h.number('topLevel.builderCalls'), 0);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    });
  }

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
    'native showDialog captures Theme and isolates builder failures',
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
          if (mode == 'throw') {
            final reassemble = t.binding.reassembleApplication();
            await t.pump();
            await reassemble;
          } else {
            t
                .element(
                  find
                      .ancestor(
                        of: find.byType(ErrorWidget),
                        matching: find.byType(Builder),
                      )
                      .first,
                )
                .markNeedsBuild();
          }
          await t.pumpAndSettle();
          if (mode == 'throw') {
            expect(find.text('Local 1'), findsNothing);
            expect(find.byType(ErrorWidget), findsOneWidget);
          } else {
            expect(find.text('Local 0'), findsOneWidget);
            expect(find.byType(ErrorWidget), findsNothing);
          }
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
      await flaxTestUnmount(t);
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
        final before = h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0;
        h.execute('var fitted = topLevel.fit()');
        expect((h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0) - before, 1);
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
