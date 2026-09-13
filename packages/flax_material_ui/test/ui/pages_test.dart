import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart' show registry;
import '../support/runtime_tracker.dart';

final pagesSource = flaxTestFixtureSource('pages');

class PagesHarness {
  final runtime = RuntimeTracker();
  final errors = <Object>[];
  late final session = FlaxSession(
    createRuntime: () => runtime,
    source: pagesSource,
    bindings: registry,
    onError: (e, _) => errors.add(e),
  );
  void execute(String code) {
    final value = runtime.evaluate(code);
    if (value is FlaxJsObject) value.release();
  }

  Object? read(String code) {
    final value = runtime.evaluate(code);
    return switch (value) {
      FlaxJsNumber(:final value) => value,
      FlaxJsBoolean(:final value) => value,
      FlaxJsString(:final value) => value,
      _ => throw StateError('Expected a primitive'),
    };
  }

  Future<void> enter(WidgetTester t) async {
    await t.pumpWidget(
      MaterialApp(
        builder: (_, child) => Material(child: child),
        home: FlaxView.session(session: session),
      ),
    );
    await t.pumpAndSettle();
    expect(errors, isEmpty);
  }

  Future<void> finish(WidgetTester t) async {
    await t.pumpWidget(const SizedBox());
    await t.pumpAndSettle();
    await session.close();
    expect(runtime.handlesAtDispose, 0);
    expect(runtime.activeSubscriptions, 0);
    expect(runtime.pendingFutures, 0);
  }
}

void main() {
  testWidgets(
    'Pages update configs and params while Flutter preserves the Route and content state',
    (t) async {
      final h = PagesHarness();
      await h.enter(t);
      final route = ModalRoute.of(t.element(find.text('Local 0')));
      await t.tap(find.text('Increment page'));
      await t.pumpAndSettle();
      final builds = h.read('pages.builds');
      int? steady;
      for (var i = 0; i < 15; i++) {
        h.execute(
          'pages.list.value = [pages.make("root", {id: $i}, true, $i)]',
        );
        await t.pumpAndSettle();
        expect(find.text('Local 1'), findsOneWidget);
        expect(find.text('Page {"id":$i}'), findsOneWidget);
        expect(ModalRoute.of(t.element(find.text('Local 1'))), same(route));
        expect(h.read('pages.factories'), 1);
        expect(h.read('pages.builds'), builds);
        steady ??= h.runtime.handles;
        expect(h.runtime.handles, steady);
      }
      h.execute('pages.list.value = [pages.make("replacement", {id: 8})]');
      await t.pumpAndSettle();
      expect(find.text('Local 0'), findsOneWidget);
      expect(h.read('pages.factories'), 2);
      expect(
        ModalRoute.of(t.element(find.text('Local 0'))),
        isNot(same(route)),
      );
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );

  testWidgets(
    'unkeyed Pages use Flutter matching and omitted pop callbacks use Dart defaults',
    (t) async {
      final h = PagesHarness();
      await h.enter(t);
      h.execute('pages.list.value = [pages.unkeyed({id: 1})]');
      await t.pumpAndSettle();
      await t.tap(find.text('Increment page'));
      await t.pumpAndSettle();
      final route = ModalRoute.of(t.element(find.text('Local 1')));
      h.execute('pages.list.value = [pages.unkeyed({id: 2})]');
      await t.pumpAndSettle();
      expect(ModalRoute.of(t.element(find.text('Local 1'))), same(route));
      h.execute(
        'pages.list.value = [...pages.list.value, pages.unkeyed({id: 3})]',
      );
      await t.pumpAndSettle();
      await t.tap(find.text('Pop page'));
      await t.pumpAndSettle();
      expect(h.read('pages.original'), true);
      expect(h.read('pages.list.value.length'), 1);
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );

  testWidgets(
    'pop uses the current Page callback and returns the original descriptor',
    (t) async {
      final h = PagesHarness();
      await h.enter(t);
      int? steady;
      for (var i = 0; i < 10; i++) {
        h.execute(
          'pages.list.value = [pages.make("root", {id: 1}), pages.make("detail", {id: 2})]',
        );
        await t.pumpAndSettle();
        h.execute(
          'pages.list.value = [pages.make("root", {id: 1}), pages.make("detail", {id: 3}, true, 7)]',
        );
        await t.pumpAndSettle();
        await t.tap(find.text('Pop page'));
        await t.pumpAndSettle();
        expect(h.read('pages.original'), true);
        expect(h.read('pages.list.value.length'), 1);
        expect(
          h.read('JSON.stringify(pages.results.at(-1))'),
          '[7,true,{"answer":[42,true]}]',
        );
        expect(find.text('Page {"id":1}'), findsOneWidget);
        steady ??= h.runtime.handles;
        expect(h.runtime.handles, steady);
      }
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );

  testWidgets(
    'removing a Page also retires its pageless Route and delivers its Future',
    (t) async {
      final h = PagesHarness();
      await h.enter(t);
      h.execute(
        'pages.list.value = [...pages.list.value, pages.make("detail", {id: 2})]',
      );
      await t.pumpAndSettle();
      await t.tap(find.text('Push pageless'));
      await t.pumpAndSettle();
      expect(find.text('Pageless'), findsOneWidget);
      h.execute('pages.list.value = [pages.list.value[0]]');
      await t.pumpAndSettle();
      expect(find.text('Pageless'), findsNothing);
      expect(find.text('Page {"id":1}'), findsOneWidget);
      expect(h.read('pages.pageless'), true);
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );

  testWidgets(
    'discarded content reinitializes and invalid Page updates recover',
    (t) async {
      final h = PagesHarness();
      await h.enter(t);
      h.execute('pages.list.value = [pages.make("root", {id: 1}, false)]');
      await t.pumpAndSettle();
      await t.tap(find.text('Increment page'));
      await t.pumpAndSettle();
      h.execute(
        'pages.list.value = [...pages.list.value, pages.make("detail", {id: 2})]',
      );
      await t.pumpAndSettle();
      expect(h.read('pages.factories'), 2);
      await t.tap(find.text('Pop page'));
      await t.pumpAndSettle();
      expect(find.text('Local 0'), findsOneWidget);
      expect(h.read('pages.factories'), 3);
      h.execute('pages.list.value = [pages.make("root"), pages.make("root")]');
      await t.pumpAndSettle();
      expect(h.errors.last.toString(), contains('Duplicate Page key'));
      expect(find.text('Page {"id":1}'), findsOneWidget);
      h.execute('pages.list.value = [pages.make("root", {id: 3})]');
      await t.pumpAndSettle();
      expect(find.text('Page {"id":3}'), findsOneWidget);
      await h.finish(t);
    },
  );

  testWidgets('closing cannot add an unkeyed Page matching an accepted type', (
    t,
  ) async {
    final h = PagesHarness();
    await h.enter(t);
    h.execute('pages.list.value = [pages.unkeyed({id: 1})]');
    await t.pumpAndSettle();
    final closing = h.session.close();
    h.execute(
      'pages.list.value = [...pages.list.value, pages.unkeyed({id: 2})]',
    );
    await t.pumpAndSettle();
    expect(find.text('Page {"id":1}'), findsOneWidget);
    expect(find.text('Page {"id":2}'), findsNothing);
    expect(h.errors.single.toString(), contains('closing'));
    await h.finish(t);
    await closing;
  });

  testWidgets(
    'closing rejects new Pages, allows current Pages to exit and reports async callbacks',
    (t) async {
      final h = PagesHarness();
      await h.enter(t);
      h.execute(
        'pages.list.value = [...pages.list.value, pages.make("detail", {id: 2}, true, 0, false)]',
      );
      await t.pumpAndSettle();
      h.execute('pages.navigator.maybePop(null)');
      await t.pumpAndSettle();
      expect(find.text('Page {"id":2}'), findsOneWidget);
      expect(h.read('pages.results[0][1]'), false);
      h.execute(
        'pages.list.value = [pages.list.value[0], pages.make("detail", {id: 2})]; pages.rejectPop = true',
      );
      await t.pumpAndSettle();
      await t.tap(find.text('Pop page'));
      await t.pumpAndSettle();
      expect(h.errors.last.toString(), contains('Page callback rejected'));
      h.execute(
        'pages.rejectPop = false; pages.list.value = [...pages.list.value, pages.make("detail", {id: 2})]',
      );
      await t.pumpAndSettle();
      var closed = false;
      final closing = h.session.close().then((_) => closed = true);
      h.execute('pages.list.value = [...pages.list.value, pages.make("new")]');
      await t.pumpAndSettle();
      expect(h.errors.last.toString(), contains('closing'));
      expect(find.text('Page {"id":2}'), findsOneWidget);
      h.execute('pages.list.value = pages.list.value.slice(0, 2)');
      await t.pumpAndSettle();
      await t.tap(find.text('Pop page'));
      await t.pump();
      expect(closed, false);
      expect(h.runtime.isDisposed, false);
      await t.pumpAndSettle();
      await h.finish(t);
      await closing;
      expect(closed, true);
    },
  );
}
