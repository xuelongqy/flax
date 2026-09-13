import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart' show registry;
import '../support/test_module.dart';
import '../support/runtime_tracker.dart';

final navigationSource = flaxTestFixtureSource('navigation');

class NavigationHarness {
  NavigationHarness({FlaxBindingRegistry? bindings})
    : bindings = bindings ?? registry;
  final FlaxBindingRegistry bindings;
  final runtime = RuntimeTracker();
  final errors = <Object>[];
  late final session = FlaxSession(
    createRuntime: () => runtime,
    source: navigationSource,
    bindings: bindings,
    onError: (error, _) => errors.add(error),
  );
  final key = GlobalKey<NavigatorState>();
  void execute(String code) {
    final value = runtime.evaluate(code);
    if (value is FlaxJsObject) value.release();
  }

  Object? read(String code) {
    final value = runtime.evaluate(code);
    return switch (value) {
      FlaxJsNumber(:final value) => value,
      FlaxJsString(:final value) => value,
      FlaxJsBoolean(:final value) => value,
      _ => throw StateError('Expected primitive'),
    };
  }

  Widget app() => MaterialApp(
    navigatorKey: key,
    builder: (_, child) => Material(child: child),
    home: const Text('Dart home'),
    onGenerateRoute: (settings) => settings.name == '/native'
        ? MaterialPageRoute<Object?>(
            settings: settings,
            builder: (context) => TextButton(
              onPressed: () => Navigator.of(context).pop({
                'accepted': [true, 7],
              }),
              child: const Text('Accept native'),
            ),
          )
        : null,
  );
  Future<void> enter(WidgetTester t, {bool nested = false}) async {
    if (nested) execute('globalThis.nestedNavigation = true');
    await t.pumpWidget(app());
    key.currentState!.push(
      MaterialPageRoute<void>(
        builder: (_) => FlaxView.session(session: session),
      ),
    );
    await t.pumpAndSettle();
    expect(errors, isEmpty);
  }

  Future<void> finish(WidgetTester t) async {
    await t.pumpWidget(const SizedBox());
    await t.pumpAndSettle();
    await session.close();
    expect(runtime.isDisposed, isTrue);
    expect(runtime.handlesAtDispose, 0);
    expect(runtime.activeSubscriptions, 0);
    expect(runtime.pendingFutures, 0);
    expect(
      runtime.checkpointPhases.every((phase) => phase.name == 'idle'),
      isTrue,
    );
  }
}

void main() {
  testWidgets('closing from a synchronous host call waits for native return', (
    t,
  ) async {
    final runtime = RuntimeTracker();
    final errors = <Object>[];
    late final FlaxSession session;
    Future<void>? closing;
    final stop = testBindingModule('close-test', [
      FlaxMemberBinding('test:Lifetime', {
        'stop': FlaxStaticMethod([], const FlaxTypeRef('void'), (_) {
          closing = session.close();
          return null;
        }),
      }),
    ]);
    session = FlaxSession(
      createRuntime: () => runtime,
      source:
          "$navigationSource\n__flaxCall($flaxBindingVersion, 'test:Lifetime', 'stop');",
      bindings: FlaxBindingRegistry([...registry.modules, stop]),
      onError: (error, _) => errors.add(error),
    );
    await t.pumpWidget(
      MaterialApp(
        builder: (_, child) => Material(child: child),
        home: FlaxView.session(session: session),
      ),
    );
    await t.pumpAndSettle();
    expect(errors, isEmpty);
    expect(find.text('JS home'), findsOneWidget);
    expect(runtime.isDisposed, isFalse);
    await t.pumpWidget(const SizedBox());
    await t.pumpAndSettle();
    await closing;
    expect(runtime.isDisposed, isTrue);
    expect(runtime.handlesAtDispose, 0);
  });

  testWidgets('shared Navigator delivers results and keeps local signals', (
    t,
  ) async {
    final h = NavigationHarness();
    await h.enter(t);
    int? steady;
    int? subscriptions;
    for (var i = 0; i < 15; i++) {
      await t.tap(find.text('Open detail'));
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
      expect(find.text('Detail'), findsOneWidget);
      final builds = h.read('navigation.detailBuilds');
      await t.tap(find.text('Detail increment'));
      await t.pumpAndSettle();
      expect(find.text('Detail count 1'), findsOneWidget);
      expect(h.read('navigation.detailBuilds'), builds);
      await t.tap(find.text('Return result'));
      await t.pumpAndSettle();
      expect(find.text('Result {"selected":["a",3]}'), findsOneWidget);
      steady ??= h.runtime.handles;
      subscriptions ??= h.runtime.activeSubscriptions;
      expect(h.runtime.pendingFutures, 0);
      expect(h.runtime.activeSubscriptions, subscriptions);
      expect(
        h.runtime.handles,
        steady,
        reason: 'Handle growth after navigation $i',
      );
    }

    // ignore: avoid_print
    print(
      'Navigation cost: $steady steady handles and $subscriptions subscriptions after 15 cycles; no pending Futures.',
    );
    await t.tap(find.text('Native choice'));
    await t.pumpAndSettle();
    expect(h.key.currentState!.context.mounted, isTrue);
    await t.tap(find.text('Accept native'));
    await t.pumpAndSettle();
    expect(find.text('Result {"accepted":[true,7]}'), findsOneWidget);
    expect(h.errors, isEmpty);
    await h.finish(t);
  });

  testWidgets('replacement outlives the root and close waits for its Route', (
    t,
  ) async {
    final h = NavigationHarness();
    await h.enter(t);
    await t.tap(find.text('Replace root'));
    await t.pumpAndSettle();
    expect(h.errors, isEmpty);
    expect(h.read('navigation.original.mounted'), false);
    expect(h.read('navigation.navigator.mounted'), true);
    expect(find.text('Replacement'), findsOneWidget);
    var closed = false;
    final closing = h.session.close().then((_) => closed = true);
    await t.pump();
    expect(closed, isFalse);
    expect(
      () => h.execute('navigation.open()'),
      throwsA(isA<FlaxJsException>()),
    );
    await t.tap(find.text('Detail increment'));
    await t.pumpAndSettle();
    expect(find.text('Detail count 1'), findsOneWidget);
    await t.tap(find.text('Return result'));
    await t.pumpAndSettle();
    await closing;
    expect(h.runtime.isDisposed, isTrue);
    expect(h.runtime.handlesAtDispose, 0);
  });

  testWidgets('JS nested Navigator handles return before the host', (t) async {
    final h = NavigationHarness();
    await h.enter(t, nested: true);
    await t.tap(find.text('Open detail'));
    await t.pumpAndSettle();
    h.execute('navigation.allowPop.value = false');
    await t.pumpAndSettle();
    await t.binding.handlePopRoute();
    await t.pumpAndSettle();
    expect(find.text('Detail'), findsOneWidget);
    h.execute('navigation.allowPop.value = true');
    await t.pumpAndSettle();
    await t.binding.handlePopRoute();
    await t.pumpAndSettle();
    expect(find.text('JS home'), findsOneWidget);
    await t.binding.handlePopRoute();
    await t.pumpAndSettle();
    expect(find.text('Dart home'), findsOneWidget);
    expect(h.read('navigation.navigator.mounted'), false);
    expect(
      () => h.execute('navigation.navigator.canPop()'),
      throwsA(isA<FlaxJsException>()),
    );
    await h.finish(t);
  });

  testWidgets('microtasks and async event failures use the UI checkpoint', (
    t,
  ) async {
    final h = NavigationHarness();
    await h.enter(t);
    await t.tap(find.text('Microtask'));
    await t.pumpAndSettle();
    expect(find.text('Root count 1'), findsOneWidget);
    expect(h.read('navigation.events.slice(-2).join(",")'), 'sync,microtask');
    await t.tap(find.text('Async failure'));
    await t.pumpAndSettle();
    expect(h.errors.single.toString(), contains('async event failed'));
    await h.finish(t);
  });
  testWidgets(
    'discarded offstage content rebuilds from the Route-owned callback',
    (t) async {
      final h = NavigationHarness();
      await h.enter(t);
      await t.tap(find.text('Disposable content'));
      await t.pumpAndSettle();
      await t.tap(find.text('Detail increment'));
      await t.pumpAndSettle();
      h.execute('navigation.disposableContext = navigation.detailContext');
      await t.tap(find.text('Cover'));
      await t.pumpAndSettle();
      expect(h.read('navigation.disposableContext.mounted'), false);
      await t.tap(find.text('Return result'));
      await t.pumpAndSettle();
      expect(find.text('Disposable'), findsOneWidget);
      expect(find.text('Detail count 1'), findsOneWidget);
      expect(h.read('navigation.detailContext.mounted'), true);
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );

  testWidgets(
    'the same builder has independent mounted results and survives Route removal',
    (t) async {
      final h = NavigationHarness();
      await h.enter(t);
      h.execute('''
      navigation.sharedBuilder = context => ({kind:'widget', type:'flax.core/flutter#type:Text', ctor:'', args:{data:'Shared page'}});
      navigation.description = {kind:'value', type:'package:material_ui/src/page.dart::MaterialPageRoute', ctor:'', args:{builder:navigation.sharedBuilder}};
      navigation.navigator.push(navigation.description);
      navigation.navigator.push(navigation.description);
    ''');
      await t.pumpAndSettle();
      expect(find.text('Shared page'), findsOneWidget);
      expect(
        () => h.execute(
          'navigation.navigator.pushReplacement(navigation.description, {result: () => 1})',
        ),
        throwsA(isA<FlaxJsException>()),
      );
      expect(find.text('Shared page'), findsOneWidget);
      final route = ModalRoute.of(t.element(find.text('Shared page')))!;
      h.key.currentState!.removeRoute(route);
      await t.pumpAndSettle();
      expect(find.text('Shared page'), findsOneWidget);
      h.key.currentState!.pop();
      await t.pumpAndSettle();
      expect(find.text('JS home'), findsOneWidget);
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );

  testWidgets(
    'Route builders retain last valid content and recover after failure',
    (t) async {
      final h = NavigationHarness();
      await h.enter(t);
      await t.tap(find.text('Open detail'));
      await t.pumpAndSettle();
      final body = find.byWidgetPredicate(
        (w) => w is FlaxWidgetHost && w.node.definition.id == 'flax:route-body',
      );
      void rebuild() => t
          .element(
            find.descendant(of: body, matching: find.byType(Builder)).first,
          )
          .markNeedsBuild();
      h.execute('navigation.throwBuilder = true');
      rebuild();
      await t.pumpAndSettle();
      expect(find.text('Detail'), findsOneWidget);
      expect(h.errors.single.toString(), contains('route builder failed'));
      h.execute('navigation.throwBuilder = false');
      rebuild();
      await t.pumpAndSettle();
      await t.tap(find.text('Detail increment'));
      await t.pumpAndSettle();
      expect(find.text('Detail count 1'), findsOneWidget);
      await h.finish(t);
    },
  );

  testWidgets(
    'structured Future data is copied, rejected on error, and canceled on close',
    (t) async {
      const data = FlaxTypeRef('data', nullable: true);
      const future = FlaxTypeRef('future', item: data);
      var completion = Completer<Object?>();
      Object? received;
      final binding = testBindingModule('async-test', [
        FlaxMemberBinding('test:Async', {
          'later': FlaxStaticMethod(
            [const FlaxParameter('value', data, required: true)],
            future,
            (args) {
              received = args['value'];
              return completion.future;
            },
          ),
        }),
      ]);
      final h = NavigationHarness(
        bindings: FlaxBindingRegistry([...registry.modules, binding]),
      );
      await h.enter(t);
      h.execute('''
      navigation.input = {nested: [1, '😀', null, {flag: true}]};
      __flaxCall($flaxBindingVersion, 'test:Async', 'later', navigation.input).then(
        value => navigation.result.value = value,
        error => navigation.result.value = String(error),
      );
      navigation.input.nested[0] = 9;
    ''');
      expect(received, {
        'nested': [
          1.0,
          '😀',
          null,
          {'flag': true},
        ],
      });
      completion.complete(<Object?, Object?>{
        'reply': [true, 3, null],
      });
      await t.pumpAndSettle();
      expect(find.text('Result {"reply":[true,3,null]}'), findsOneWidget);
      for (final input in [
        'undefined',
        'Infinity',
        '() => 1',
        'navigation.navigator',
        'new Date()',
        '(()=>{const a={};a.a=a;return a})()',
      ]) {
        expect(
          () => h.execute(
            "__flaxCall($flaxBindingVersion, 'test:Async', 'later', $input)",
          ),
          throwsA(isA<FlaxJsException>()),
        );
      }
      completion = Completer<Object?>();
      h.execute(
        "__flaxCall($flaxBindingVersion, 'test:Async', 'later', null).catch(e => navigation.result.value = String(e))",
      );
      completion.completeError(StateError('future failed'));
      await t.pumpAndSettle();
      expect(
        h.read('String(navigation.result.value).includes("future failed")'),
        true,
      );
      completion = Completer<Object?>();
      h.execute(
        "__flaxCall($flaxBindingVersion, 'test:Async', 'later', null).catch(e => navigation.result.value = String(e))",
      );
      completion.complete(DateTime(2026));
      await t.pumpAndSettle();
      expect(
        h.read('String(navigation.result.value).includes("navigation data")'),
        true,
      );
      completion = Completer<Object?>();
      h.execute(
        "__flaxCall($flaxBindingVersion, 'test:Async', 'later', null).catch(e => navigation.result.value = String(e))",
      );
      final closing = h.session.close();
      expect(h.session.close(), same(closing));
      await t.pumpAndSettle();
      expect(
        h.read('String(navigation.result.value).includes("FlaxSessionClosed")'),
        true,
      );
      await h.finish(t);
      final calls = Map<String, int>.from(h.runtime.hostCalls);
      completion.complete({'late': true});
      await t.pump();
      expect(h.runtime.hostCalls, calls);
    },
  );

  for (final fail in [false, true]) {
    testWidgets(
      'close wins over a queued Future ${fail ? 'failure' : 'value'}',
      (t) async {
        final completion = Completer<Object?>();
        final binding = testBindingModule('async-test', [
          FlaxMemberBinding('test:Async', {
            'later': FlaxStaticMethod(
              [],
              const FlaxTypeRef(
                'future',
                item: FlaxTypeRef('data', nullable: true),
              ),
              (_) => completion.future,
            ),
          }),
        ]);
        final h = NavigationHarness(
          bindings: FlaxBindingRegistry([...registry.modules, binding]),
        );
        try {
          await h.enter(t);
          h.execute('''
navigation.deliveries = 0;
__flaxCall($flaxBindingVersion, 'test:Async', 'later').then(
  value => { navigation.deliveries++; navigation.result.value = value; },
  error => { navigation.deliveries++; navigation.result.value = String(error); },
);
''');
          await t.pumpAndSettle();
          expect(h.runtime.pendingFutures, 1);
          SchedulerBinding.instance.scheduleFrameCallback((_) {
            final closing = h.session.close();
            expect(h.session.close(), same(closing));
            if (fail) {
              completion.completeError(StateError('late failure'));
            } else {
              completion.complete({'late': true});
            }
          });
          await t.pumpAndSettle();
          expect(
            h.read('navigation.result.value'),
            contains('FlaxSessionClosed'),
          );
          expect(h.read('navigation.deliveries'), 1);
          expect(h.runtime.pendingFutures, 0);
          expect(h.errors, isEmpty);
        } finally {
          await h.finish(t);
        }
      },
    );
  }

  testWidgets('an explicit root can remount without reexecuting its source', (
    t,
  ) async {
    final h = NavigationHarness();
    await h.enter(t);
    h.execute('navigation.rootCount.value = 9');
    await t.pumpAndSettle();
    h.key.currentState!.pop();
    await t.pumpAndSettle();
    expect(h.runtime.isDisposed, isFalse);
    h.key.currentState!.push(
      MaterialPageRoute<void>(
        builder: (_) => FlaxView.session(session: h.session),
      ),
    );
    await t.pumpAndSettle();
    expect(find.text('Root count 9'), findsOneWidget);
    expect(h.errors, isEmpty);
    await h.finish(t);
  });
  testWidgets(
    'a first Route build failure shows an error and a later build recovers',
    (t) async {
      final h = NavigationHarness();
      await h.enter(t);
      h.execute('navigation.throwBuilder = true');
      await t.tap(find.text('Open detail'));
      await t.pumpAndSettle();
      expect(find.byType(ErrorWidget), findsOneWidget);
      expect(h.errors.single.toString(), contains('route builder failed'));
      h.execute('navigation.throwBuilder = false');
      final body = find.byWidgetPredicate(
        (w) => w is FlaxWidgetHost && w.node.definition.id == 'flax:route-body',
      );
      t
          .element(
            find.descendant(of: body, matching: find.byType(Builder)).first,
          )
          .markNeedsBuild();
      await t.pumpAndSettle();
      expect(find.text('Detail'), findsOneWidget);
      await h.finish(t);
    },
  );

  testWidgets(
    'separate navigation sessions remain isolated on the host stack',
    (t) async {
      final first = NavigationHarness();
      final second = NavigationHarness();
      await first.enter(t);
      first.execute('navigation.rootCount.value = 4');
      await t.pumpAndSettle();
      first.key.currentState!.push(
        MaterialPageRoute<void>(
          builder: (_) => FlaxView.session(session: second.session),
        ),
      );
      await t.pumpAndSettle();
      expect(find.text('Root count 0'), findsOneWidget);
      second.execute('navigation.rootCount.value = 8');
      await t.pumpAndSettle();
      first.key.currentState!.pop();
      await t.pumpAndSettle();
      await second.session.close();
      expect(second.runtime.isDisposed, isTrue);
      expect(first.runtime.isDisposed, isFalse);
      expect(find.text('Root count 4'), findsOneWidget);
      expect(first.errors, isEmpty);
      expect(second.errors, isEmpty);
      await first.finish(t);
    },
  );
}
