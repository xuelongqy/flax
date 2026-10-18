import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show collectWidgetConfigurations, registry;
import '../support/test_module.dart';
import 'navigation_test.dart' show NavigationHarness;

const _routeType = FlaxTypeRef('object', id: 'flax.core/flutter#type:Route');
const _pageType = FlaxTypeRef('object', id: 'flax.core/flutter#type:Page');
final _builder = FlaxCallbackBinding(
  const [],
  const FlaxTypeRef('widget', id: 'flax.core/flutter#type:Text'),
  (callback) =>
      () => callback.call(const [], const {}) as Widget,
  id: 'test:builder',
  invoke: (callback, _, _) => (callback as Widget Function())(),
  matches: (value) => value is Widget Function(),
);

String _call(String name, String arguments) => flaxTestCheckedBinding(
  "__flaxInvokeOperation(__flaxResolveOperation($flaxBindingVersion, "
  "'test:$name', 'top', 'call', ''), 0$arguments)",
);

class _GuardedNavigator extends Navigator {
  const _GuardedNavigator({
    super.key,
    required super.onGenerateRoute,
    super.observers,
  });
  @override
  NavigatorState createState() => _GuardedNavigatorState();
}

class _GuardedNavigatorState extends NavigatorState {
  int pushCalls = 0;
  @override
  Future<T?> push<T extends Object?>(Route<T> route) {
    pushCalls++;
    if (route.navigator != null) throw StateError('Route already installed');
    return super.push(route);
  }
}

class _ImmediateRoute extends OverlayRoute<Object?> {
  @override
  Iterable<OverlayEntry> createOverlayEntries() => [
    OverlayEntry(builder: (_) => const Text('Immediate Dart route')),
  ];
}

class _ObserverProbe {
  const _ObserverProbe([this.observers = const []]);
  final List<NavigatorObserver> observers;
}

void main() {
  testWidgets(
    'ordinary observer-list constructors preserve defaults and references',
    (tester) async {
      final observers = <NavigatorObserver>[NavigatorObserver()];
      final created = <_ObserverProbe>[];
      final type =
          (flutterBindings.types.singleWhere(
                (binding) => binding.id == 'flax.core/flutter#type:Navigator',
              ) as FlaxWidgetBinding).constructors['']!
              .singleWhere((parameter) => parameter.name == 'observers')
              .type;
      final module = testBindingModule(
        'observer-inputs',
        [
          FlaxObjectBinding(
            'test:ObserverProbe',
            const [],
            const {},
            constructors: {
              '': [
                FlaxParameter(
                  'observers',
                  type,
                  required: false,
                  omitWhenAbsent: true,
                ),
              ],
            },
            create: (_, values) {
              final value = values.containsKey('observers')
                  ? _ObserverProbe(
                      values['observers'] as List<NavigatorObserver>,
                    )
                  : const _ObserverProbe();
              created.add(value);
              return value;
            },
            matches: (value) => value is _ObserverProbe,
          ),
        ],
        functions: [
          FlaxFunctionBinding(
            'test:observerValues',
            const [],
            type,
            (_) => observers,
          ),
        ],
      );
      final h = NavigationHarness(
        bindings: FlaxBindingRegistry([...registry.modules, module]),
      );
      try {
        await h.enter(tester);
        h.execute('''
        navigation.defineObject('test:ObserverProbe', [], [], {}, []);
        navigation.newObserverProbe = (...values) => navigation.constructObject(
          'object', 'test:ObserverProbe', '',
          [{name: 'observers', required: false, positional: true}], values, {});
        navigation.emptyObserverProbe = navigation.newObserverProbe();
      ''');
        expect(created.single.observers, isEmpty);
        h.execute('''
        navigation.undefinedObserverProbe = navigation.newObserverProbe(undefined);
        navigation.providedObserverProbe = navigation.newObserverProbe(${_call('observerValues', '')});
      ''');
        expect(created[1].observers, isEmpty);
        expect(created[2].observers, same(observers));
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    },
  );

  testWidgets('ordinary Routes need no transition contract or Flax observer', (
    tester,
  ) async {
    final route = _ImmediateRoute();
    final module = testBindingModule(
      'route-admission',
      const [],
      functions: [
        FlaxFunctionBinding(
          'test:immediateRoute',
          const [],
          _routeType,
          (_) => route,
        ),
        FlaxFunctionBinding(
          'test:sameImmediateRoute',
          const [
            FlaxParameter(
              'value',
              FlaxTypeRef('any', nullable: true),
              required: true,
            ),
          ],
          const FlaxTypeRef('bool'),
          (values) => identical(values['value'], route),
        ),
      ],
    );
    final h = NavigationHarness(
      bindings: FlaxBindingRegistry([...registry.modules, module]),
    );
    final key = GlobalKey<_GuardedNavigatorState>();
    try {
      await tester.pumpWidget(
        MaterialApp(
          home: _GuardedNavigator(
            key: key,
            onGenerateRoute: (_) => MaterialPageRoute<Object?>(
              builder: (_) => FlaxView.session(session: h.session),
            ),
          ),
        ),
      );
      await tester.pumpAndSettle();
      final before = key.currentState!.pushCalls;
      h.execute('navigation.navigator.push(${_call('immediateRoute', '')})');
      await tester.pumpAndSettle();
      expect(key.currentState!.pushCalls, before + 1);
      expect(route.navigator, same(key.currentState));
      expect(find.text('Immediate Dart route'), findsOneWidget);
      key.currentState!.pop();
      await tester.pumpAndSettle();
      h.execute(
        'navigation.open().then('
        'value => navigation.replacedResult = value, '
        'error => navigation.replacedError = String(error))',
      );
      await tester.pumpAndSettle();
      h.execute('navigation.replace(${_call('immediateRoute', '')})');
      await tester.pumpAndSettle();
      expect(h.errors, isEmpty);
      expect(h.read('navigation.replacedError ?? ""'), isEmpty);
      expect(
        h.read(_call('sameImmediateRoute', ', navigation.replacedResult')),
        true,
      );
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });

  testWidgets(
    'a rejected push does not acquire an installed Route from another session',
    (tester) async {
      Route<Object?>? borrowed;
      final module = testBindingModule(
        'borrow-route',
        const [],
        functions: [
          FlaxFunctionBinding(
            'test:borrowRoute',
            const [],
            _routeType,
            (_) => borrowed,
          ),
        ],
      );
      final bindings = FlaxBindingRegistry([...registry.modules, module]);
      final first = NavigationHarness(bindings: bindings);
      final second = NavigationHarness(bindings: bindings);
      final observer = FlaxNavigatorObserver();
      late StateSetter update;
      var showSecond = true;
      try {
        await tester.pumpWidget(
          MaterialApp(
            builder: (_, child) => Material(child: child),
            home: _GuardedNavigator(
              observers: [observer],
              onGenerateRoute: (_) => MaterialPageRoute<Object?>(
                builder: (_) => StatefulBuilder(
                  builder: (_, setState) {
                    update = setState;
                    return Row(
                      children: [
                        Expanded(
                          child: FlaxView.session(session: first.session),
                        ),
                        if (showSecond)
                          Expanded(
                            child: FlaxView.session(session: second.session),
                          ),
                      ],
                    );
                  },
                ),
              ),
            ),
          ),
        );
        await tester.pumpAndSettle();
        first.execute('navigation.open()');
        await tester.pumpAndSettle();
        borrowed = ModalRoute.of(tester.element(find.text('Detail')));
        expect(
          () => second.execute(
            'navigation.navigator.push(${_call('borrowRoute', '')})',
          ),
          throwsA(isA<FlaxJsException>()),
        );
        update(() => showSecond = false);
        await tester.pumpAndSettle();
        await flaxTestCloseSession(tester, second.session);
        expect(second.runtime.isDisposed, true);
        expect(first.runtime.isDisposed, false);
        expect(find.text('Detail'), findsOneWidget);
        expect(first.errors, isEmpty);
        expect(second.errors, isEmpty);
      } finally {
        await first.finish(tester);
        await second.finish(tester);
      }
    },
  );

  testWidgets(
    'functions, Futures, navigation and settings share ordinary result conversion',
    (tester) async {
      Object? expected;
      final module = testBindingModule(
        'navigation-results',
        const [],
        functions: [
          FlaxFunctionBinding(
            'test:readResult',
            const [],
            const FlaxTypeRef('any', nullable: true),
            (_) => expected,
          ),
          FlaxFunctionBinding(
            'test:waitResult',
            const [],
            const FlaxTypeRef(
              'future',
              item: FlaxTypeRef('any', nullable: true),
            ),
            (_) => Future<Object?>.value(expected),
          ),
          FlaxFunctionBinding(
            'test:sameResult',
            const [
              FlaxParameter(
                'value',
                FlaxTypeRef('any', nullable: true),
                required: true,
              ),
            ],
            const FlaxTypeRef('bool'),
            (values) => identical(values['value'], expected),
          ),
        ],
      );
      final h = NavigationHarness(
        bindings: FlaxBindingRegistry([...registry.modules, module]),
      );
      final controller = TextEditingController(text: 'native result');
      try {
        await h.enter(tester);
        for (final value in <Object>[
          <String, Object?>{
            'items': <Object?>[1, true],
          },
          <Object?>['native list', controller],
          controller,
        ]) {
          expected = value;
          h.execute(
            'navigation.open().then(value => navigation.returned = value)',
          );
          await tester.pumpAndSettle();
          h.key.currentState!.pop(value);
          await tester.pumpAndSettle();
          expect(h.read(_call('sameResult', ', navigation.returned')), true);
          h.execute('navigation.directResult = ${_call('readResult', '')}');
          expect(
            h.read(_call('sameResult', ', navigation.directResult')),
            true,
          );
          h.execute(
            '${_call('waitResult', '')}.then(value => navigation.asyncResult = value)',
          );
          await tester.pumpAndSettle();
          expect(h.read(_call('sameResult', ', navigation.asyncResult')), true);
          h.execute(
            'navigation.savedSettings = navigation.RouteSettings({arguments: navigation.returned})',
          );
          expect(
            h.read(_call('sameResult', ', navigation.savedSettings.arguments')),
            true,
          );
          if (value is Map) {
            expect(h.read('navigation.returned.get("items").get(0)'), 1);
            expect(h.read('navigation.returned.get("items").get(1)'), true);
            h.execute('navigation.returned.get("items").add("shared")');
            expect(value['items'], [1, true, 'shared']);
          }
          if (value is List) {
            expect(h.read('navigation.returned.get(0)'), 'native list');
            expect(h.read('navigation.returned.get(1).text'), 'native result');
          }
        }
        expect(h.read('navigation.returned.text'), 'native result');
        h.execute('''
        navigation.controller = navigation.asDart(navigation.returned, navigation.TextEditingController);
        navigation.controller.text = "edited in JS";
        ''');
        expect(h.read(_call('sameResult', ', navigation.controller')), true);
        expect(controller.text, 'edited in JS');
        expect(
          () => h.execute(
            'navigation.asDart(navigation.savedSettings, navigation.TextEditingController)',
          ),
          throwsA(isA<FlaxJsException>()),
        );
        expect(h.errors, isEmpty);
      } finally {
        controller.dispose();
        await h.finish(tester);
      }
    },
  );

  testWidgets(
    'ordinary Route references retain callbacks through exit and collect cycles',
    (tester) async {
      WeakReference<MaterialPageRoute<Object?>>? weak;
      final module = testBindingModule(
        'navigation-objects',
        const [],
        functions: [
          FlaxFunctionBinding(
            'test:makeRoute',
            [
              FlaxParameter(
                'builder',
                FlaxTypeRef('callback', callback: _builder),
                required: true,
              ),
            ],
            _routeType,
            (values) {
              final builder = values['builder'] as Widget Function();
              final route = MaterialPageRoute<Object?>(
                builder: (_) => builder(),
              );
              weak = WeakReference(route);
              return route;
            },
          ),
          FlaxFunctionBinding(
            'test:sameRoute',
            [const FlaxParameter('route', _routeType, required: true)],
            const FlaxTypeRef('bool'),
            (values) => identical(values['route'], weak?.target),
          ),
        ],
      );
      final h = NavigationHarness(
        bindings: FlaxBindingRegistry([...registry.modules, module]),
      );
      await h.enter(tester);
      h.execute('''
      globalThis.nativeProbe = {builds: 0};
      (() => { let route; const builder = () => { if (!route) throw Error('missing Route'); nativeProbe.builds++; return {kind:'widget', type:'flax.core/flutter#type:Text', ctor:'', args:{data:'Native object route'}}; }; route = ${_call('makeRoute', ', builder')}; nativeProbe.route = route; })();
      nativeProbe.same = ${_call('sameRoute', ', nativeProbe.route')};
    ''');
      expect(h.read('nativeProbe.same'), true);
      final sourceRoute = ModalRoute.of(tester.element(find.text('JS home')))!;
      final popped = weak!.target!.popped;
      h.execute(
        "navigation.navigator.push(nativeProbe.route).catch(error => nativeProbe.cancelled = String(error))",
      );
      await tester.pumpAndSettle();
      h.execute('delete nativeProbe.route');
      await collectWidgetConfigurations(tester);
      weak!.target!.changedExternalState();
      await tester.pumpAndSettle();
      expect(find.text('Native object route'), findsOneWidget);
      expect(h.read('nativeProbe.builds') as double, greaterThan(1));
      var completed = false;
      weak!.target!.completed.then((_) => completed = true);
      h.key.currentState!.removeRoute(sourceRoute);
      await tester.pumpAndSettle();
      h.key.currentState!.pop();
      await tester.pump();
      await popped;
      expect(completed, false);
      expect(h.runtime.isDisposed, false);
      await collectWidgetConfigurations(tester);
      await tester.pumpAndSettle();
      expect(completed, true);
      await flaxTestCloseSession(tester, h.session);
      await collectWidgetConfigurations(tester);
      expect(weak!.target, isNull);
      expect(h.errors, isEmpty);
      await h.finish(tester);
    },
  );

  testWidgets(
    'ordinary Pages use native settings updates and callbacks without an adapter',
    (tester) async {
      WeakReference<Page<Object?>>? weak;
      final module = testBindingModule(
        'native-page',
        const [],
        functions: [
          FlaxFunctionBinding(
            'test:makePage',
            [
              FlaxParameter(
                'builder',
                FlaxTypeRef('callback', callback: _builder),
                required: true,
              ),
            ],
            _pageType,
            (values) {
              final builder = values['builder'] as Widget Function();
              final page = MaterialPage<Object?>(
                key: const ValueKey('native'),
                child: builder(),
              );
              weak = WeakReference(page);
              return page;
            },
          ),
        ],
      );
      final h = NavigationHarness(
        bindings: FlaxBindingRegistry([...registry.modules, module]),
      );
      await h.enter(tester);
      h.execute(
        'globalThis.nativePage = ${_call('makePage', ", () => ({kind:'widget', type:'flax.core/flutter#type:Text', ctor:'', args:{data:'Native page one'}})")};',
      );
      Page<Object?>? page = weak!.target!;
      late StateSetter update;
      final observer = FlaxNavigatorObserver();
      await tester.pumpWidget(
        MaterialApp(
          home: StatefulBuilder(
            builder: (_, setState) {
              update = setState;
              return Navigator(
                observers: [observer],
                pages: [page!],
                onDidRemovePage: (_) {},
              );
            },
          ),
        ),
      );
      await tester.pumpAndSettle();
      final route = ModalRoute.of(tester.element(find.text('Native page one')));
      h.execute(
        'globalThis.nativePage = ${_call('makePage', ", () => ({kind:'widget', type:'flax.core/flutter#type:Text', ctor:'', args:{data:'Native page two'}})")};',
      );
      update(() => page = weak!.target!);
      h.execute('delete globalThis.nativePage');
      await tester.pumpAndSettle();
      await collectWidgetConfigurations(tester);
      expect(find.text('Native page two'), findsOneWidget);
      expect(
        ModalRoute.of(tester.element(find.text('Native page two'))),
        same(route),
      );
      expect(route!.settings, same(weak!.target));
      page = null;
      await h.finish(tester);
    },
  );

  testWidgets(
    'native Page callbacks follow their Session without route ownership',
    (tester) async {
      final pages = <Page<Object?>>[];
      final module = testBindingModule(
        'page-session-update',
        const [],
        functions: [
          FlaxFunctionBinding(
            'test:capturePage',
            const [FlaxParameter('page', _pageType, required: true)],
            const FlaxTypeRef('void'),
            (values) {
              pages.add(values['page'] as Page<Object?>);
              return null;
            },
          ),
        ],
      );
      final bindings = FlaxBindingRegistry([...registry.modules, module]);
      final first = NavigationHarness(bindings: bindings);
      final second = NavigationHarness(bindings: bindings);
      void makePage(NavigationHarness h, String text) {
        h.execute('''
        (() => {
          let page;
          page = navigation.MaterialPage({
            child: {kind:'widget', type:'flax.core/flutter#type:Text', ctor:'', args:{data:'$text'}},
            onPopInvoked: () => { if (!page) throw Error('missing Page'); navigation.removed = true; },
          });
          ${_call('capturePage', ', page')};
        })();
        ''');
      }

      try {
        await first.enter(tester);
        makePage(first, 'First session page');
        await second.enter(tester);
        makePage(second, 'Second session page');
        Page<Object?>? page = pages.first;
        late StateSetter update;
        final observer = FlaxNavigatorObserver();
        await tester.pumpWidget(
          MaterialApp(
            home: StatefulBuilder(
              builder: (_, setState) {
                update = setState;
                return Navigator(
                  observers: [observer],
                  pages: [
                    const MaterialPage<Object?>(
                      key: ValueKey('host'),
                      child: Text('Host page'),
                    ),
                    if (page != null) page!,
                  ],
                  onDidRemovePage: (_) => update(() => page = null),
                );
              },
            ),
          ),
        );
        await tester.pumpAndSettle();
        final route = ModalRoute.of(
          tester.element(find.text('First session page')),
        )!;
        update(() => page = pages.last);
        pages.clear();
        await tester.pumpAndSettle();
        expect(
          ModalRoute.of(tester.element(find.text('Second session page'))),
          same(route),
        );
        await flaxTestCloseSession(tester, first.session);
        expect(first.runtime.isDisposed, true);
        expect(second.runtime.isDisposed, false);
        var closed = false;
        final closingSecond = second.session.close().then((_) => closed = true);
        await tester.pump();
        expect(closed, false);
        // The mounted child, rather than the Page or Route, retains this Session.
        route.navigator!.pop();
        await tester.pump();
        expect(second.read('navigation.removed'), true);
        expect(closed, false);
        await tester.pumpAndSettle();
        await flaxTestCloseSession(tester, second.session);
        await closingSecond;
        expect(closed, true);
        expect(first.errors, isEmpty);
        expect(second.errors, isEmpty);
      } finally {
        await first.finish(tester);
        await second.finish(tester);
      }
    },
  );
}
