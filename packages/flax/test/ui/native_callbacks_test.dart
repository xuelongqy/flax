import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/repeated_bindings.dart';
import '../fixtures/repeated.dart' show CallbackStore;
import '../support/owned_harness.dart';

void main() {
  testWidgets(
    'native and JS builders return independently held Flutter values',
    (t) async {
      final h = OwnedHarness(
        fixture: 'native_callbacks',
        extra: [repeatedBindings],
      );
      try {
        await t.pumpWidget(h.app('native-callbacks'));
        await t.pumpAndSettle();
        expect(h.errors, isEmpty);
        expect(find.text('Native 7'), findsOneWidget);
        expect(h.boolean('savedNative(savedContext, -1) === null'), isTrue);
        expect(
          () => h.execute(
            'nativeCallbacks.CallbackStore.widgets.add(nativeCallbacks.CallbackStore.widgets.get(0))',
          ),
          throwsA(isA<FlaxJsException>()),
        );
        expect(find.text('Borrowed 0'), findsNWidgets(2));
        h.execute("nativeCallbacks.label.value = 'Borrowed 1'");
        await t.pumpAndSettle();
        expect(find.text('Borrowed 1'), findsNWidgets(2));
        h.execute('var savedWidget = savedJs(savedContext, 3)');
        await t.pumpAndSettle();
        expect(h.errors, isEmpty);
        h.execute('var savedResult = savedNative(savedContext, 8)');
        await t.pumpWidget(const SizedBox());
        await t.pumpAndSettle();
        expect(
          () => h.execute('savedNative(savedContext, 8)'),
          throwsA(isA<FlaxJsException>()),
        );
      } finally {
        await h.finish(t);
      }
    },
  );
  testWidgets(
    'failed returned builders preserve the current subtree and recover',
    (t) async {
      final h = OwnedHarness(
        fixture: 'native_callbacks',
        extra: [repeatedBindings],
      );
      try {
        await t.pumpWidget(h.app('native-failure'));
        await t.pumpAndSettle();
        expect(find.text('Native 9'), findsOneWidget);
        for (final result in ['Promise.resolve(null)', 'undefined', '42']) {
          h.execute(
            'nativeCallbacks.render.value = context => nativeCallbacks.CallbackStore([() => $result]).builders.get(0)(context, 0)',
          );
          await t.pumpAndSettle();
          expect(find.text('Native 9'), findsOneWidget);
        }
        expect(h.errors, hasLength(3));
        h.execute(
          'nativeCallbacks.render.value = context => nativeCallbacks.CallbackStore.nativeBuilders.get(0)(context, 10)',
        );
        await t.pumpAndSettle();
        expect(find.text('Native 10'), findsOneWidget);
      } finally {
        await h.finish(t);
      }
    },
  );
  testWidgets('native wrappers retain converted JS child resources', (t) async {
    final h = OwnedHarness(
      fixture: 'native_callbacks',
      extra: [repeatedBindings],
    );
    try {
      await t.pumpWidget(h.app('wrapped-child'));
      await t.pumpAndSettle();
      expect(find.text('Borrowed 0'), findsOneWidget);
      h.execute("nativeCallbacks.label.value = 'Nested child'");
      await t.pumpAndSettle();
      expect(find.text('Nested child'), findsOneWidget);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });
  for (final page in ['native-children', 'native-component']) {
    testWidgets('native Widget passes through $page without a wrapper', (
      t,
    ) async {
      final h = OwnedHarness(
        fixture: 'native_callbacks',
        extra: [repeatedBindings],
      );
      try {
        await t.pumpWidget(
          MaterialApp(
            home: Center(
              child: FlaxView.page(session: h.session, name: page),
            ),
          ),
        );
        await t.pumpAndSettle();
        final found = find.byKey(const ValueKey('native-tile'));
        expect(found, findsOneWidget);
        expect(t.widget(found), same(CallbackStore.nativeTile));
        expect(t.getSize(found), const Size(37, 19));
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    });
  }
  testWidgets('a pure native root retains its session until unmount', (
    t,
  ) async {
    final h = OwnedHarness(
      fixture: 'native_callbacks',
      extra: [repeatedBindings],
    );
    try {
      await t.pumpWidget(
        Directionality(
          textDirection: TextDirection.ltr,
          child: Center(child: FlaxView.session(session: h.session)),
        ),
      );
      expect(
        t.widget(find.byKey(const ValueKey('native-tile'))),
        same(CallbackStore.nativeTile),
      );
      var closed = false;
      final closing = h.session.close().then((_) => closed = true);
      await t.pumpAndSettle();
      expect(closed, isFalse);
      h.execute('var stillAlive = 1');
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await closing;
      expect(closed, isTrue);
    } finally {
      await h.finish(t);
    }
  });
}
