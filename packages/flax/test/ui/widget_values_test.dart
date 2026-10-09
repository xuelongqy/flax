import 'dart:async';

import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:flutter/material.dart'
    as flutter_material
    show MaterialApp, Scaffold, SearchAnchor, SearchBar;
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/repeated_bindings.dart';
import '../fixtures/widget_values.dart';
import '../support/owned_harness.dart';

Future<void> _pump(WidgetTester tester) async {
  for (var i = 0; i < 30; i++) {
    await tester.pump(const Duration(milliseconds: 1));
  }
}

void main() {
  late WidgetValues values;
  late ContextCallbacks contexts;
  OwnedHarness harness() => OwnedHarness(
    fixture: 'widget_values',
    extra: [repeatedBindings],
    onCreate: (_, value) {
      if (value is WidgetValues) values = value;
      if (value is ContextCallbacks) contexts = value;
    },
  );

  testWidgets(
    'finite Widget callback results preserve subclasses and remount',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('widget-values'));
        await t.pumpAndSettle();
        final pending = values.load();
        await _pump(t);
        final list = await pending;
        final nullable = values.nullable()!;
        final record = values.record();
        final children = [
          ...list,
          ...nullable.whereType<Widget>(),
          record.child,
          ...record.siblings.whereType<Widget>(),
          ...values.set(),
          ...values.iterable(),
          ...values.map().values.whereType<Widget>(),
          (values.futureOr() as WidgetRecord).child,
        ];
        expect(nullable.first, isNull);
        expect(record.siblings.first, isNull);
        expect(values.map()['empty'], isNull);
        values.context = null;
        for (var i = 0; i < 2; i++) {
          await t.pumpWidget(
            MaterialApp(
              home: Material(child: Column(children: children)),
            ),
          );
          await t.pumpAndSettle();
          expect(
            find.text('${i == 0 ? 'aggregate' : 'updated'} subclass'),
            findsNWidgets(children.length),
          );
          await flaxTestUnmount(t);
          h.execute("widgetValues.label.value = 'updated'");
        }
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'returned callbacks and async aggregate compositions round-trip',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('widget-values'));
        await t.pumpAndSettle();
        h.execute(
          'widgetValues.future().then(list => { widgetValues.futureOk = list.length === 1 && list.get(0) === list.toArray()[0]; }); widgetValues.asyncRecord().then(value => { widgetValues.recordOk = value.siblings.length === 2 && value.siblings.get(0) === null; });',
        );
        await _pump(t);
        expect(
          h.boolean('widgetValues.futureOk && widgetValues.recordOk'),
          isTrue,
        );
        expect(
          h.boolean('widgetValues.nativeRoundTrip().get(1) === null'),
          isTrue,
        );
        final events = values.stream().toList();
        expect(
          h.boolean('widgetValues.nested().get("children").get(0) === null'),
          isTrue,
        );
        expect(
          h.boolean(
            'widgetValues.concrete().get(0) === null && widgetValues.interface().get(0) === null',
          ),
          isTrue,
        );
        expect(
          () => h.execute('widgetValues.wrongInterface()'),
          throwsA(isA<FlaxJsException>()),
        );
        await _pump(t);
        final event = (await events).single;
        expect(event.first, isNull);
        values.context = null;
        await t.pumpWidget(MaterialApp(home: event.last!));
        await t.pumpAndSettle();
        expect(find.text('aggregate subclass'), findsOneWidget);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('aggregate conversion fails closed and preserves async errors', (
    t,
  ) async {
    final h = harness();
    try {
      await t.pumpWidget(h.app('widget-values'));
      await t.pumpAndSettle();
      for (final call in ['wrongRecord()', 'missingRecord()', 'wrongList()']) {
        expect(
          () => h.execute('widgetValues.$call'),
          throwsA(isA<FlaxJsException>()),
          reason: call,
        );
      }
      h.execute(
        'widgetValues.wrongNull().catch(error => { widgetValues.nullError = String(error); }); widgetValues.rejected().catch(error => { widgetValues.rejection = String(error); });',
      );
      await _pump(t);
      expect(
        h.string('String(widgetValues.nullError)'),
        contains('Unexpected null'),
      );
      expect(
        h.string('String(widgetValues.rejection)'),
        contains('aggregate rejection'),
      );
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'Widget Iterable callbacks accept JS and native finite collections',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('widget-values'));
        await t.pumpAndSettle();
        expect(
          h.boolean(
            'widgetValues.iterable().length === 1 && widgetValues.iterableSet().length === 1',
          ),
          isTrue,
        );
        expect(
          h.boolean(
            'widgetValues.nullableIterable().toArray()[0] === null && widgetValues.iterableRecord().children.toArray()[0] === null',
          ),
          isTrue,
        );
        expect(
          h.boolean(
            'widgetValues.concreteIterable().toArray()[0] === null && widgetValues.interfaceIterable().toArray()[0] === null',
          ),
          isTrue,
        );
        expect(
          h.boolean(
            'widgetValues.store.keepNullableIterable(() => null)() === null',
          ),
          isTrue,
        );
        for (final source in ['nativeList', 'nativeSet']) {
          h.execute(
            'widgetValues.store.keepIterable(() => widgetValues.store.$source)',
          );
          expect((values.iterable().single as Text).data, 'native iterable');
          expect(
            h.boolean(
              'widgetValues.store.firstFromIterable(children => children.toArray()[0], {useSet: ${source == 'nativeSet'}}) !== null',
            ),
            isTrue,
          );
        }
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Widget Iterable callbacks reject lazy sources without advancing them',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('widget-values'));
        await t.pumpAndSettle();
        h.execute(
          'widgetValues.iterations = 0; widgetValues.lazy = { get [Symbol.iterator]() { widgetValues.iterations++; return function* () { widgetValues.iterations++; yield widgetValues.store.nativeList.get(0); }; } };',
        );
        for (final result in [
          'widgetValues.lazy',
          'widgetValues.store.nativeLazy',
          '[42]',
          '[null]',
          'null',
          'undefined',
        ]) {
          expect(
            () => h.execute('widgetValues.store.keepIterable(() => $result)()'),
            throwsA(isA<FlaxJsException>()),
            reason: result,
          );
        }
        expect(h.boolean('widgetValues.iterations === 0'), isTrue);
        expect(values.lazyIterations, 0);
        h.execute(
          'widgetValues.store.keepIterableStream(() => widgetValues.store.nativeLazyStream)',
        );
        final rejectedStream = values.iterableStream().toList();
        final rejected = expectLater(rejectedStream, throwsArgumentError);
        await _pump(t);
        await rejected;
        expect(values.lazyIterations, 0);
        h.execute('widgetValues.callbackCalls = 0');
        expect(
          () => h.execute(
            'widgetValues.store.firstFromIterable(children => { widgetValues.callbackCalls++; return children.toArray()[0]; }, {lazy: true})',
          ),
          throwsA(isA<FlaxJsException>()),
        );
        expect(h.boolean('widgetValues.callbackCalls === 0'), isTrue);
        expect(values.lazyIterations, 0);
        for (final expression in [
          'widgetValues.store.keepIterableRecord(() => ({children: widgetValues.lazy}))()',
          'widgetValues.store.keepConcreteIterable(() => [42])()',
          'widgetValues.store.keepInterfaceIterable(() => widgetValues.store.nativeList)()',
        ]) {
          expect(() => h.execute(expression), throwsA(isA<FlaxJsException>()));
        }
        h.execute(
          'widgetValues.finiteSet = new Set([widgetValues.store.nativeList.get(0)]); widgetValues.finiteSet[Symbol.iterator] = () => { widgetValues.iterations++; throw new Error("Overridden Set iterator"); }; widgetValues.store.keepIterable(() => widgetValues.finiteSet)();',
        );
        expect(h.boolean('widgetValues.iterations === 0'), isTrue);
        // Ordinary native Iterable views still run only when the caller requests a copy.
        expect(
          h.boolean('widgetValues.store.nativeLazy.toArray().length === 1'),
          isTrue,
        );
        expect(values.lazyIterations, 1);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('finite Widget Iterables compose with FutureOr and Stream', (
    t,
  ) async {
    final h = harness();
    try {
      await t.pumpWidget(h.app('widget-values'));
      await t.pumpAndSettle();
      final context = values.context!;
      final synchronous =
          values.suggestions(context, 'set') as Iterable<Widget>;
      final pending =
          values.suggestions(context, 'async') as Future<Iterable<Widget>>;
      final events = values.iterableStream().toList();
      await _pump(t);
      final asynchronous = await pending;
      final stream = await events;
      expect(stream, hasLength(2));
      expect(stream.first.first, isNull);
      expect(stream.last.last, isNull);
      h.execute(
        'widgetValues.store.keepIterableRecords(() => widgetValues.store.nativeIterableRecords)',
      );
      final native = values.nativeList;
      final groups = <Iterable<Widget?>>[native];
      final keyed = <String, Set<Iterable<Widget>>>{
        'children': {native},
      };
      final nested = <Iterable<Widget>?>{native, null};
      final pendingChildren = <FutureOr<Iterable<Widget>>?>[
        null,
        native,
        Future.value(native),
      ];
      values.nativeIterableRecord = (
        native,
        groups: groups,
        keyed: keyed,
        nested: nested,
        pending: pendingChildren,
        later: Future.value(native),
      );
      final records = values.iterableRecords().toList();
      await _pump(t);
      final record = (await records).single;
      expect(identical(record.$1, native), isTrue);
      expect(identical(record.groups, groups), isTrue);
      expect(identical(record.keyed, keyed), isTrue);
      expect(identical(record.nested, nested), isTrue);
      expect(record.pending.first, isNull);
      expect(identical(record.pending.elementAt(1), native), isTrue);
      expect(identical(await record.pending.last, native), isTrue);
      expect(identical(await record.later, native), isTrue);
      values.nativeIterableRecord = (
        native,
        groups: groups,
        keyed: keyed,
        nested: {values.nativeLazy},
        pending: pendingChildren,
        later: Future.value(native),
      );
      final nestedFailure = expectLater(
        values.iterableRecords().toList(),
        throwsArgumentError,
      );
      await _pump(t);
      await nestedFailure;
      values.nativeIterableRecord = (
        native,
        groups: groups,
        keyed: keyed,
        nested: nested,
        pending: [Future.value(values.nativeLazy)],
        later: Future.value(values.nativeLazy),
      );
      final failedRecords = values.iterableRecords().toList();
      await _pump(t);
      final failed = (await failedRecords).single;
      final failure = expectLater(failed.later, throwsArgumentError);
      final pendingFailure = expectLater(
        failed.pending.single,
        throwsArgumentError,
      );
      await _pump(t);
      await failure;
      await pendingFailure;
      expect(values.lazyIterations, 0);
      final children = [
        ...synchronous,
        ...asynchronous,
        ...stream.expand((event) => event.whereType<Widget>()),
      ];
      values.context = null;
      await t.pumpWidget(MaterialApp(home: Column(children: children)));
      await t.pumpAndSettle();
      expect(find.text('aggregate subclass'), findsNWidgets(children.length));
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'SearchAnchor consumes synchronous and async JS Widget Iterables',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('widget-values'));
        await t.pumpAndSettle();
        for (final mode in ['set', 'async']) {
          values.context = null;
          await t.pumpWidget(
            flutter_material.MaterialApp(
              home: flutter_material.Scaffold(
                body: flutter_material.SearchAnchor(
                  builder: (context, controller) =>
                      flutter_material.SearchBar(onTap: controller.openView),
                  suggestionsBuilder: (context, controller) =>
                      values.suggestions(context, mode),
                ),
              ),
            ),
          );
          await t.pumpAndSettle();
          await t.tap(find.byType(flutter_material.SearchBar));
          await _pump(t);
          await t.pumpAndSettle();
          expect(find.text('aggregate subclass'), findsOneWidget, reason: mode);
          await flaxTestUnmount(t);
        }
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'discarded Iterable callback Widgets are collected automatically',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('widget-values'));
        await t.pumpAndSettle();
        WeakReference<Widget> create() =>
            WeakReference(values.iterable().single);
        final weak = create();
        await t.runAsync(() async {
          for (var i = 0; i < 3; i++) {
            h.execute(flaxTestJsGarbagePressure);
            await flaxTestCollectDartGarbage();
          }
        });
        expect(weak.target, isNull);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('Dart can retain nullable Widget arguments before throwing', (
    t,
  ) async {
    final h = harness();
    try {
      await t.pumpWidget(h.app('widget-values'));
      await t.pumpAndSettle();
      expect(
        () => h.execute('widgetValues.saveBeforeThrow()'),
        throwsA(isA<FlaxJsException>()),
      );
      expect(values.retained.first, isNull);
      values.context = null;
      await t.pumpWidget(MaterialApp(home: values.retained.last!));
      await t.pumpAndSettle();
      expect(find.text('aggregate subclass'), findsOneWidget);
      expect(h.errors, isEmpty);
    } finally {
      values.retained = [];
      await h.finish(t);
    }
  });

  testWidgets(
    'direct Context results borrow identity and do not retain Elements',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('widget-values'));
        await t.pumpAndSettle();
        expect(h.boolean('widgetValues.contextIdentity'), isTrue);
        h.execute(
          'widgetValues.store.laterContext(widgetValues.saved).then(value => { widgetValues.contextLater = value === widgetValues.saved; });',
        );
        await _pump(t);
        expect(h.boolean('widgetValues.contextLater === true'), isTrue);
        final weak = WeakReference(values.context!);
        for (final input in ['42', '{}', 'undefined']) {
          expect(
            () => h.execute('widgetValues.store.echo($input)'),
            throwsA(isA<FlaxJsException>()),
          );
        }
        values.context = null;
        await flaxTestUnmount(t);
        await t.pumpAndSettle();
        expect(h.boolean('widgetValues.saved.mounted'), isFalse);
        expect(
          () => h.execute('widgetValues.store.echo(widgetValues.saved)'),
          throwsA(isA<FlaxJsException>()),
        );
        await t.runAsync(() async {
          h.execute(flaxTestJsGarbagePressure);
          await flaxTestCollectDartGarbage();
        });
        expect(weak.target, isNull);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('pending aggregate Promises release bridge resources at close', (
    t,
  ) async {
    final h = harness();
    await t.pumpWidget(h.app('widget-values'));
    await t.pumpAndSettle();
    h.execute(
      'widgetValues.pending().catch(() => {}); widgetValues.pendingIterable().catch(() => {});',
    );
    expect(h.runtime.pendingPromises, greaterThan(0));
    await h.finish(t);
  });

  testWidgets(
    'discarded aggregate Widgets are collected without explicit release',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('widget-values'));
        await t.pumpAndSettle();
        WeakReference<Widget> create() => WeakReference(values.record().child);
        final weak = create();
        await t.runAsync(() async {
          for (var i = 0; i < 3; i++) {
            h.execute(flaxTestJsGarbagePressure);
            await flaxTestCollectDartGarbage();
          }
        });
        expect(weak.target, isNull);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Context callbacks reuse identity in synchronous and nullable results',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('context-callbacks'));
        await t.pumpAndSettle();
        expect(h.boolean('contextCallbacks.verifyValues()'), isTrue);
        h.execute('contextCallbacks.retain()');
        expect(contexts.retained!().mounted, isTrue);
        expect(identical(contexts.retained!(), contexts.retained!()), isTrue);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('Context callbacks compose with Future FutureOr and Records', (
    t,
  ) async {
    final h = harness();
    try {
      await t.pumpWidget(h.app('context-callbacks'));
      await t.pumpAndSettle();
      h.execute(
        'contextCallbacks.asynchronous().then(ok => contextCallbacks.asyncOk = ok).catch(error => contextCallbacks.asyncError = String(error));',
      );
      await _pump(t);
      expect(h.string('String(contextCallbacks.asyncError)'), 'undefined');
      expect(h.boolean('contextCallbacks.asyncOk === true'), isTrue);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'Context callbacks reject forged wrong-type null and undefined results',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('context-callbacks'));
        await t.pumpAndSettle();
        for (final result in [
          '42',
          '{}',
          'null',
          'undefined',
          '{mounted:true}',
        ]) {
          expect(
            () => h.execute('contextCallbacks.store.choose(() => ($result))'),
            throwsA(isA<FlaxJsException>()),
            reason: result,
          );
        }
        expect(
          () => h.execute('contextCallbacks.store.nullableFuture(() => null)'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(
          () =>
              h.execute('contextCallbacks.store.requiredFutureOr(() => null)'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(
          () => h.execute('contextCallbacks.store.nullable(() => undefined)'),
          throwsA(isA<FlaxJsException>()),
        );
        h.execute(
          'contextCallbacks.store.future(async () => ({})).catch(error => contextCallbacks.invalidFuture = String(error));',
        );
        await _pump(t);
        expect(
          h.boolean('typeof contextCallbacks.invalidFuture === "string"'),
          isTrue,
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'Context callback completion rejects an unmounted Element without retaining it',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('context-callbacks'));
        await t.pumpAndSettle();
        h.execute('contextCallbacks.retain()');
        WeakReference<BuildContext> capture() =>
            WeakReference(contexts.retained!());
        final weak = capture();
        final pending = contexts.pending!();
        final rejected = expectLater(
          pending,
          throwsA(
            isA<FlaxJsException>().having(
              (error) => '$error',
              'Context rejection',
              contains('unmounted BuildContext'),
            ),
          ),
        );
        await flaxTestUnmount(t);
        await t.pumpAndSettle();
        expect(h.boolean('contextCallbacks.saved.mounted'), isFalse);
        expect(
          () => contexts.retained!(),
          throwsA(
            isA<FlaxJsException>().having(
              (error) => '$error',
              'Context rejection',
              contains('unmounted BuildContext'),
            ),
          ),
        );
        h.execute(
          'contextCallbacks.resolve(contextCallbacks.saved); contextCallbacks.resolve = null;',
        );
        await _pump(t);
        await rejected;
        await t.runAsync(() async {
          for (var i = 0; i < 3; i++) {
            h.execute(flaxTestJsGarbagePressure);
            await flaxTestCollectDartGarbage();
          }
        });
        expect(weak.target, isNull);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('Context callback references remain isolated between sessions', (
    t,
  ) async {
    final a = harness();
    final b = harness();
    try {
      await t.pumpWidget(
        Directionality(
          textDirection: TextDirection.ltr,
          child: Row(
            children: [
              Expanded(child: a.app('context-callbacks')),
              Expanded(child: b.app('context-callbacks')),
            ],
          ),
        ),
      );
      await t.pumpAndSettle();
      final foreign =
          a.runtime.evaluate('contextCallbacks.saved') as FlaxJsObject;
      final local = b.runtime.getGlobal('contextCallbacks') as FlaxJsObject;
      try {
        expect(
          () => local.setProperty('foreign', foreign),
          throwsArgumentError,
        );
        expect(a.boolean('contextCallbacks.verifyValues()'), isTrue);
        expect(b.boolean('contextCallbacks.verifyValues()'), isTrue);
      } finally {
        local.release();
        foreign.release();
      }
      expect(a.errors, isEmpty);
      expect(b.errors, isEmpty);
    } finally {
      await a.finish(t);
      await b.finish(t);
    }
  });

  testWidgets(
    'Context pending completion and retained callbacks fail safely after close',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('context-callbacks'));
        await t.pumpAndSettle();
        h.execute('contextCallbacks.retain()');
        final pending = contexts.pending!();
        final rejected = expectLater(pending, throwsA(isA<StateError>()));
        expect(h.runtime.pendingPromises, greaterThan(0));
        await h.finish(t);
        await rejected;
        expect(() => contexts.retained!(), throwsA(isA<StateError>()));
      } finally {
        if (!h.runtime.isDisposed) await h.finish(t);
      }
    },
  );
}
