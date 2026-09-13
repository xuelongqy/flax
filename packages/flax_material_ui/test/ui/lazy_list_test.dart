import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/material_repeated_bindings.dart';
import '../fixtures/repeated.dart';
import '../support/harness.dart' show host;
import '../support/owned_harness.dart';

OwnedHarness harness() =>
    OwnedHarness(fixture: 'lazy_list', extra: [material_repeatedBindings]);
Finder tile(int id) =>
    find.byWidgetPredicate((w) => w is RetainedTile && w.label == '$id');

void main() {
  setUp(() {
    RetainedTile.mounts.clear();
    RetainedTile.disposals.clear();
  });

  testWidgets(
    'only viewport children are built and a signal updates one mounted Text',
    (t) async {
      final costs = <List<int>>[];
      for (final size in [1000, 10000]) {
        final constructionsBefore = RetainedTile.constructions;
        final h = harness();
        await t.pumpWidget(h.app('lazy', arguments: {'count': size}));
        await t.pumpAndSettle();
        expect(h.errors, isEmpty);
        final builds = h.number('lazy.builds').toInt();
        expect(builds, inInclusiveRange(3, 15));
        expect(h.boolean('lazy.sameContext'), isTrue);
        costs.add([
          builds,
          RetainedTile.constructions - constructionsBefore,
          h.runtime.handles,
          h.runtime.activeSubscriptions,
        ]);
        final parentState = t.state(host('list'));
        final rebuilt = <Key?>[];
        debugOnRebuildDirtyWidget = (e, _) {
          if (e.widget is FlaxWidgetHost) rebuilt.add(e.widget.key);
        };
        try {
          final calls = h.runtime.hostCalls['__flaxInvalidate'] ?? 0;
          h.execute(
            'lazy.states.get(0).value = 1; lazy.states.get(0).value = 2; lazy.states.get(0).value = 3',
          );
          await t.pump();
          expect(find.text('Row 0: 3 LTR'), findsOneWidget);
          expect(rebuilt, [const ValueKey('label-0')]);
          expect(h.runtime.hostCalls['__flaxInvalidate']! - calls, 3);
          expect(h.number('lazy.builds'), builds);
          expect(t.state(host('list')), same(parentState));
        } finally {
          debugOnRebuildDirtyWidget = null;
        }
        await t.tap(find.text('Increment 1'));
        await t.pump();
        expect(find.text('Row 1: 1 LTR'), findsOneWidget);
        expect(h.errors, isEmpty);
        await h.finish(t);
        expect(h.actualDisposals, 1);
      }
      expect(costs[1], costs[0]);
      // ignore: avoid_print
      print(
        'Lazy list initial costs [builders, native tile constructions, handles, subscriptions]: $costs',
      );
    },
  );

  testWidgets('RefreshIndicator awaits the current JS Promise callback', (
    t,
  ) async {
    final h = harness();
    await t.pumpWidget(h.app('lazy', arguments: {'count': 100}));
    await t.pumpAndSettle();
    final listState = t.state(host('list'));

    await t.drag(find.byType(ListView), const Offset(0, 320));
    for (var i = 0; i < 20 && h.number('lazy.refreshCalls.length') == 0; i++) {
      await t.pump(const Duration(milliseconds: 8));
    }
    expect(h.string('lazy.refreshCalls[0]'), 'first');
    expect(h.number('lazy.refreshCompleted.length'), 0);

    h.execute('lazy.refreshVariant = "second"; lazy.refreshRevision.value++');
    await t.pump();
    await t.pump(const Duration(milliseconds: 30));
    await t.pumpAndSettle();
    expect(h.string('lazy.refreshCompleted[0]'), 'first');
    expect(find.text('Refresh 1'), findsOneWidget);
    expect(t.state(host('list')), same(listState));

    await t.drag(find.byType(ListView), const Offset(0, 320));
    for (var i = 0; i < 20 && h.number('lazy.refreshCalls.length') == 1; i++) {
      await t.pump(const Duration(milliseconds: 8));
    }
    expect(h.string('lazy.refreshCalls[1]'), 'second');
    await t.pump(const Duration(milliseconds: 30));
    await t.pumpAndSettle();
    expect(h.string('lazy.refreshCompleted[1]'), 'second');
    expect(find.text('Refresh 2'), findsOneWidget);
    expect(h.runtime.hostCalls['__flaxPromiseSettlement'], 2);
    expect(h.errors, isEmpty);
    await h.finish(t);
  });

  testWidgets('unmount does not cancel an accepted refresh Future', (t) async {
    final h = harness();
    await t.pumpWidget(h.app('lazy', arguments: {'count': 100}));
    await t.pumpAndSettle();
    await t.drag(find.byType(ListView), const Offset(0, 320));
    for (var i = 0; i < 20 && h.number('lazy.refreshCalls.length') == 0; i++) {
      await t.pump(const Duration(milliseconds: 8));
    }
    expect(h.number('lazy.refreshCalls.length'), 1);
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(milliseconds: 30));
    await t.pump();
    expect(h.string('lazy.refreshCompleted[0]'), 'first');
    expect(h.runtime.hostCalls['__flaxPromiseSettlement'], 1);
    expect(h.errors, isEmpty);
    await h.finish(t);
  });

  testWidgets('keyed moves retain native State and type changes replace it', (
    t,
  ) async {
    final h = harness();
    await t.pumpWidget(h.app('lazy', arguments: {'count': 20}));
    await t.pumpAndSettle();
    final zero = t.state(tile(0));
    final one = t.state(tile(1));
    final controller = h.created.single as ScrollController;
    h.execute('lazy.rows.value = [1, 0, ...lazy.rows.value.slice(2)]');
    await t.pumpAndSettle();
    expect(t.state(tile(0)), same(zero));
    expect(t.state(tile(1)), same(one));
    expect(h.created.single, same(controller));
    h.execute('lazy.rows.value = [99, ...lazy.rows.value]');
    await t.pumpAndSettle();
    expect(t.state(tile(0)), same(zero));
    h.execute('lazy.rows.value = lazy.rows.value.filter(id => id !== 1)');
    await t.pumpAndSettle();
    expect(tile(1), findsNothing);
    expect(RetainedTile.disposals['1'], 1);
    h.execute('lazy.typeChanged = true; lazy.revision.value++');
    await t.pumpAndSettle();
    expect(find.text('Changed type'), findsOneWidget);
    expect(RetainedTile.disposals['0'], 1);
    expect(h.errors, isEmpty);
    await h.finish(t);
  });

  testWidgets(
    'scrolling releases offscreen items, preserves native keep-alive and closes cleanly',
    (t) async {
      final h = harness();
      await t.pumpWidget(h.app('lazy', arguments: {'count': 10000}));
      await t.pumpAndSettle();
      h.execute('lazy.keep = true; lazy.revision.value++');
      await t.pumpAndSettle();
      final zero = t.state(tile(0));
      final controller = h.created.single as ScrollController;
      final handles = <int>[];
      for (var i = 0; i < 8; i++) {
        controller.jumpTo(4000);
        await t.pumpAndSettle();
        expect(RetainedTile.disposals['0'], isNull);
        expect(RetainedTile.disposals['1'], isNotNull);
        controller.jumpTo(0);
        await t.pumpAndSettle();
        expect(t.state(tile(0)), same(zero));
        handles.add(h.runtime.handles);
      }
      expect(handles.toSet(), hasLength(1));
      expect(h.errors, isEmpty);
      // ignore: avoid_print
      print(
        'Lazy list return handles: $handles; subscriptions=${h.runtime.activeSubscriptions}; calls=${h.runtime.hostCalls}',
      );
      final closing = h.session.close();
      expect(h.runtime.isDisposed, isFalse);
      h.execute('lazy.states.get(0).value++');
      await t.pump();
      await h.finish(t);
      await closing;
    },
  );

  testWidgets(
    'independent failures never reuse another row and build invalidation waits a frame',
    (t) async {
      final h = harness();
      await t.pumpWidget(h.app('lazy', arguments: {'count': 30}));
      await t.pumpAndSettle();
      for (final mode in [
        'throw',
        'promise',
        'undefined',
        'invalid',
        'shared',
        'normal',
      ]) {
        final before = h.errors.length;
        h.execute(
          'lazy.mode = "$mode"; lazy.trace = []; lazy.revision.value++',
        );
        await t.pumpAndSettle();
        expect(
          h.errors.length - before,
          ['throw', 'promise', 'undefined', 'invalid'].contains(mode) ? 1 : 0,
        );
        if (mode == 'shared') {
          expect(find.text('Shared description'), findsWidgets);
        }
      }
      expect(find.text('Row 1: 0 LTR'), findsOneWidget);
      h.execute('lazy.writeDuringBuild = true; lazy.revision.value++');
      await t.pump();
      expect(find.text('Marker 0'), findsOneWidget);
      await t.pump();
      expect(find.text('Marker 1'), findsOneWidget);
      await h.finish(t);
    },
  );
  testWidgets('null terminates construction like a native fixed-extent list', (
    t,
  ) async {
    final native = <int>[];
    await t.pumpWidget(
      MaterialApp(
        home: SizedBox(
          height: 240,
          width: 400,
          child: Align(
            alignment: Alignment.topLeft,
            child: SizedBox(
              height: 240,
              width: 400,
              child: ListView.builder(
                itemCount: 30,
                itemExtent: 80,
                itemBuilder: (_, i) {
                  native.add(i);
                  return i == 1 ? null : Text('Native $i');
                },
              ),
            ),
          ),
        ),
      ),
    );
    await t.pumpAndSettle();
    expect(native, [0, 1]);
    await t.pumpWidget(const SizedBox());
    final h = harness();
    await t.pumpWidget(h.app('lazy', arguments: {'count': 0}));
    await t.pumpAndSettle();
    h.execute(
      'lazy.mode = "null"; lazy.rows.value = Array.from({length: 30}, (_, i) => i)',
    );
    await t.pumpAndSettle();
    expect(h.string('JSON.stringify(lazy.trace)'), '[0,1]');
    expect(find.text('Row 0: 0 LTR'), findsOneWidget);
    expect(h.errors, isEmpty);
    await h.finish(t);
  });

  testWidgets(
    'unkeyed items follow position and captured Context follows the Sliver',
    (t) async {
      final h = harness();
      await t.pumpWidget(h.app('lazy', arguments: {'count': 20}));
      await t.pumpAndSettle();
      h.execute('lazy.keys = false; lazy.revision.value++');
      await t.pumpAndSettle();
      final first = t.state(tile(0));
      h.execute('lazy.rows.value = [1, 0, ...lazy.rows.value.slice(2)]');
      await t.pumpAndSettle();
      expect(t.state(tile(1)), same(first));
      (h.created.single as ScrollController).jumpTo(1000);
      await t.pumpAndSettle();
      expect(h.boolean('lazy.firstContext.mounted'), isTrue);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(h.boolean('lazy.firstContext.mounted'), isFalse);
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );

  testWidgets(
    'inherited dependencies use the original Sliver Context like native Flutter',
    (t) async {
      final h = harness();
      final view = FlaxView.page(
        session: h.session,
        name: 'lazy',
        arguments: const {'count': 3},
      );
      var nativeBuilds = 0;
      final native = SizedBox(
        height: 240,
        width: 400,
        child: ListView.builder(
          itemCount: 3,
          itemExtent: 80,
          itemBuilder: (context, index) {
            nativeBuilds++;
            return Text('Native $index ${Directionality.of(context).name}');
          },
        ),
      );
      Widget scene(TextDirection direction) => MaterialApp(
        home: Material(
          child: Directionality(
            textDirection: direction,
            child: Row(
              children: [
                Expanded(child: view),
                native,
              ],
            ),
          ),
        ),
      );
      await t.pumpWidget(scene(TextDirection.ltr));
      await t.pumpAndSettle();
      h.execute('lazy.readDirection = true; lazy.revision.value++');
      await t.pumpAndSettle();
      final before = h.number('lazy.builds');
      final nativeBefore = nativeBuilds;
      final state = t.state(tile(0));
      await t.pumpWidget(scene(TextDirection.rtl));
      await t.pumpAndSettle();
      expect(find.text('Row 0: 0 RTL'), findsOneWidget);
      expect(h.number('lazy.builds') - before, nativeBuilds - nativeBefore);
      expect(t.state(tile(0)), same(state));
      expect(h.number('lazy.factories'), 1);
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );
}
