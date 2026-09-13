import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/repeated_bindings.dart';
import '../fixtures/repeated.dart' as fixture;
import '../support/harness.dart' show host;
import '../support/owned_harness.dart';

OwnedHarness harness() =>
    OwnedHarness(fixture: 'nested_callbacks', extra: [repeatedBindings]);
Finder tile() => find.byWidgetPredicate(
  (w) => w is fixture.RetainedTile && w.label == 'nested-0',
);

void main() {
  testWidgets(
    'Dart collections cannot transplant another session JS callback',
    (t) async {
      final first = harness();
      final second = harness();
      final native = List<fixture.CellBuilder>.of(
        fixture.CallbackStore.nativeBuilders,
      );
      try {
        await t.pumpWidget(first.app('nested'));
        await t.pumpAndSettle();
        final foreign = fixture.CallbackStore.lastCreated!.target!;
        // Retire the first host Route before closing that session later.
        await t.pumpWidget(const SizedBox());
        await t.pumpAndSettle();
        await t.pumpWidget(second.app('nested'));
        await t.pumpAndSettle();
        fixture.CallbackStore.nativeBuilders
          ..clear()
          ..addAll(foreign.builders);
        second.execute('nested.input="native"; nested.revision.value++');
        await t.pumpAndSettle();
        expect(
          second.errors.single.toString(),
          contains('Foreign JS callback'),
        );
        expect(find.text('Nested 0: 0'), findsOneWidget);
        await first.session.close();
        expect(first.runtime.handlesAtDispose, 0);
        second.execute('nested.count.value++');
        await t.pump();
        expect(find.text('Nested 0: 1'), findsOneWidget);
      } finally {
        fixture.CallbackStore.nativeBuilders
          ..clear()
          ..addAll(native);
        await second.finish(t);
        await first.finish(t);
      }
    },
  );
  testWidgets(
    'nested JS, Dart and native inputs preserve State through replacements',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('nested'));
        await t.pumpAndSettle();
        final first = t.state(tile());
        h.execute('nested.input="dart"; nested.revision.value++');
        await t.pumpAndSettle();
        expect(t.state(tile()), same(first));
        h.execute('nested.input="groups"; nested.revision.value++');
        await t.pumpAndSettle();
        expect(find.text('Nested 3: 0'), findsOneWidget);
        expect(fixture.NestedBatch.sharedLists, isTrue);
        expect(fixture.NestedBatch.nativeListPreserved, isTrue);
        h.execute('nested.input="cycle"; nested.revision.value++');
        await t.pumpAndSettle();
        expect(fixture.NestedBatch.selfKeyPreserved, isTrue);
        h.execute('nested.input="native"; nested.revision.value++');
        await t.pumpAndSettle();
        expect(find.text('Native 0'), findsOneWidget);
        h.execute('nested.input="js"; nested.revision.value++');
        await t.pumpAndSettle();
        final counts = <int>[];
        for (var i = 0; i < 8; i++) {
          h.execute('nested.revision.value++');
          await t.pumpAndSettle();
          counts.add(h.runtime.handles);
        }
        expect(counts.toSet(), hasLength(1));
        // ignore: avoid_print
        print(
          'Nested replacement handles: $counts; subscriptions=${h.runtime.activeSubscriptions}',
        );
        await t.tap(find.text('Event 0'));
        expect(h.number('nested.events'), 1);
        h.execute('nested.revision.value++');
        await t.pumpAndSettle();
        await t.tap(find.text('Event 0'));
        expect(h.number('nested.events'), 2);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );
  testWidgets(
    'nested errors and discarded results release resources and recover',
    (t) async {
      final h = harness();
      try {
        await t.pumpWidget(h.app('nested'));
        await t.pumpAndSettle();
        for (final mode in [
          'throw',
          'promise',
          'undefined',
          'invalid',
          'null',
          'shared',
          'normal',
        ]) {
          final before = h.errors.length;
          h.execute('nested.mode="$mode"; nested.revision.value++');
          await t.pumpAndSettle();
          expect(
            h.errors.length - before,
            ['throw', 'promise', 'undefined', 'invalid'].contains(mode) ? 1 : 0,
          );
          if (mode == 'null') expect(find.text('Nested 1: 0'), findsNothing);
          if (mode == 'shared') expect(find.text('Shared 0'), findsNWidgets(2));
        }
        h.execute('nested.mode="eventError"; nested.revision.value++');
        await t.pumpAndSettle();
        final errors = h.errors.length;
        await t.tap(find.text('Event 0'));
        await t.pumpAndSettle();
        expect(h.errors.length - errors, 1);
        final subscriptions = h.runtime.activeSubscriptions;
        h.execute('nested.mode="normal"; nested.discard.value=true');
        await t.pumpAndSettle();
        expect(find.byType(fixture.RetainedTile), findsNothing);
        expect(h.runtime.activeSubscriptions, subscriptions - 2);
        final baseline = h.runtime.handles;
        for (var i = 0; i < 5; i++) {
          h.execute('nested.revision.value++');
          await t.pumpAndSettle();
          expect(h.runtime.handles, baseline);
        }
        h.execute('nested.discard.value=false');
        await t.pumpAndSettle();
        h.execute('nested.writeDuringBuild=true; nested.revision.value++');
        await t.pump();
        expect(find.text('Marker 0'), findsOneWidget);
        await t.pump();
        expect(find.text('Marker 1'), findsOneWidget);
        final closing = h.session.close();
        h.execute('nested.show.value=false');
        await t.pumpAndSettle();
        await h.finish(t);
        await closing;
      } finally {
        await h.finish(t);
      }
    },
  );
  testWidgets('same nested function and descriptor mount independently', (
    t,
  ) async {
    final h = harness();
    try {
      await t.pumpWidget(h.app('sharedNested'));
      await t.pumpAndSettle();
      expect(find.text('Shared item 0'), findsNWidgets(4));
      final builds = fixture.NestedBatch.builds;
      final hosts = find.byWidgetPredicate((w) => w is FlaxWidgetHost);
      expect(t.stateList(hosts).toSet().length, greaterThanOrEqualTo(7));
      h.execute(
        'nested.count.value=1; nested.count.value=2; nested.count.value=3',
      );
      await t.pump();
      expect(find.text('Shared item 3'), findsNWidgets(4));
      expect(fixture.NestedBatch.builds, builds);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });
  testWidgets('nested signals rebuild only their bound hosts', (t) async {
    final h = harness();
    try {
      await t.pumpWidget(h.app('nested'));
      await t.pumpAndSettle();
      expect(
        h.number('nested.calls'),
        2,
        reason: 'Validation must not execute builders',
      );
      final parent = t.state(host('batch'));
      final rebuilt = <Key?>[];
      debugOnRebuildDirtyWidget = (e, _) {
        if (e.widget is FlaxWidgetHost) rebuilt.add(e.widget.key);
      };
      h.execute(
        'nested.count.value=1; nested.count.value=2; nested.count.value=3',
      );
      await t.pump();
      expect(
        rebuilt,
        unorderedEquals([
          const ValueKey('nested-marker'),
          const ValueKey('nested-label-0'),
          const ValueKey('nested-label-1'),
        ]),
      );
      expect(t.state(host('batch')), same(parent));
    } finally {
      debugOnRebuildDirtyWidget = null;
      await h.finish(t);
    }
  });
}
