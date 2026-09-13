import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/owned_harness.dart';
import '../support/harness.dart' show host, registry;
import '../support/runtime_tracker.dart';

import 'package:flax_test/flax_test.dart';

void main() {
  testWidgets(
    'a JS application supplies its own environment and follows system brightness',
    (t) async {
      final h = OwnedHarness(fixture: 'application');
      addTearDown(t.platformDispatcher.clearPlatformBrightnessTestValue);
      try {
        t.platformDispatcher.platformBrightnessTestValue = Brightness.light;
        await t.pumpWidget(FlaxView.session(session: h.session));
        await t.pumpAndSettle();
        expect(find.byType(MaterialApp), findsOneWidget);
        final app = t.widget<MaterialApp>(find.byType(MaterialApp));
        expect(app.title, '');
        expect(app.debugShowCheckedModeBanner, isTrue);
        expect(app.themeMode, ThemeMode.system);
        expect(find.text('Light'), findsOneWidget);
        expect(
          Directionality.of(t.element(find.byType(TextField))),
          TextDirection.ltr,
        );
        final state = t.state(find.byType(Navigator));
        t.platformDispatcher.platformBrightnessTestValue = Brightness.dark;
        await t.pumpAndSettle();
        expect(find.text('Dark'), findsOneWidget);
        h.execute('application.mode.value = application.ThemeMode.light');
        await t.pumpAndSettle();
        expect(find.text('Light'), findsOneWidget);
        expect(t.state(find.byType(Navigator)), same(state));
        expect(h.number('application.initializations'), 1);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'title stays local and theme changes retain editing, State and navigation',
    (t) async {
      final h = OwnedHarness(fixture: 'application');
      try {
        await t.pumpWidget(FlaxView.session(session: h.session));
        await t.pumpAndSettle();
        final editing = t.widget<TextField>(find.byType(TextField)).controller!;
        await t.enterText(find.byType(TextField), '中文🙂 retained');
        editing.selection = const TextSelection(baseOffset: 1, extentOffset: 3);
        await t.tap(find.widgetWithText(TextButton, 'Count'));
        await t.pump();
        final navigator = t.state(find.byType(Navigator));
        final staticElement = t.element(host('static'));
        final built = <Key?>[];
        debugOnRebuildDirtyWidget = (e, _) {
          if (e.widget is FlaxWidgetHost) built.add(e.widget.key);
        };
        h.execute(
          "application.title.value = 'Latest'; application.title.value = 'Final'",
        );
        await t.pump();
        expect(built, [const ValueKey('title')]);
        debugOnRebuildDirtyWidget = null;
        final builds = h.number('application.builds');
        int? warmedHandles;
        final subscriptions = h.runtime.activeSubscriptions;
        for (var i = 0; i < 12; i++) {
          h.execute(
            'application.mode.value = application.ThemeMode.${i.isEven ? 'dark' : 'light'}',
          );
          await t.pumpAndSettle();
          warmedHandles ??= h.runtime.handles;
          expect(h.runtime.handles, warmedHandles);
          expect(h.runtime.activeSubscriptions, subscriptions);
        }
        expect(h.number('application.builds'), builds);
        expect(t.element(host('static')), same(staticElement));
        await t.tap(find.widgetWithText(TextButton, 'Details'));
        await t.pumpAndSettle();
        h.execute('application.mode.value = application.ThemeMode.dark');
        await t.pumpAndSettle();
        expect(find.text('Return'), findsOneWidget);
        expect(t.state(find.byType(Navigator)), same(navigator));
        await t.tap(find.text('Return'));
        await t.pumpAndSettle();
        expect(find.text('Received'), findsOneWidget);
        expect(find.text('Count 1'), findsOneWidget);
        expect(
          t.widget<TextField>(find.byType(TextField)).controller,
          same(editing),
        );
        expect(editing.text, '中文🙂 retained');
        expect(
          editing.selection,
          const TextSelection(baseOffset: 1, extentOffset: 3),
        );
        expect(h.number('application.initializations'), 1);
        expect(h.errors, isEmpty);
        // ignore: avoid_print
        print(
          'Application: ${h.constructions}, ${h.runtime.handles} handles, ${h.runtime.activeSubscriptions} subscriptions, ${h.runtime.hostCalls} host calls.',
        );
      } finally {
        debugOnRebuildDirtyWidget = null;
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'owning source replacement retires the old application and its pushed Route',
    (t) async {
      final runtimes = <RuntimeTracker>[];
      final errors = <Object>[];
      FlaxJsRuntime create() {
        final runtime = RuntimeTracker();
        runtimes.add(runtime);
        return runtime;
      }

      final source = flaxTestFixtureSource('application');
      Widget view(String code) => FlaxView(
        createRuntime: create,
        source: code,
        bindings: registry,
        onError: (error, _) => errors.add(error),
      );
      await t.pumpWidget(view(source));
      await t.pumpAndSettle();
      await t.tap(find.widgetWithText(TextButton, 'Count'));
      await t.pump();
      await t.tap(find.widgetWithText(TextButton, 'Details'));
      await t.pumpAndSettle();
      await t.pumpWidget(view('$source\n// New source identity.'));
      await t.pumpAndSettle();
      expect(runtimes, hasLength(2));
      expect(runtimes.first.handlesAtDispose, 0);
      expect(find.text('Count 0'), findsOneWidget);
      expect(find.text('Return'), findsNothing);
      expect(find.byType(MaterialApp), findsOneWidget);
      expect(errors, hasLength(1));
      expect(errors.single.toString(), contains('FlaxSessionClosed'));
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(runtimes.last.handlesAtDispose, 0);
      expect(t.takeException(), isNull);
    },
  );

  testWidgets(
    'closing the application waits for its root and retires pushed Routes',
    (t) async {
      final h = OwnedHarness(fixture: 'application');
      try {
        await t.pumpWidget(FlaxView.session(session: h.session));
        await t.pumpAndSettle();
        await t.tap(find.text('Details').last);
        await t.pumpAndSettle();
        var closed = false;
        final closing = h.session.close().then((_) => closed = true);
        await t.pump();
        expect(closed, isFalse);
        await t.pumpWidget(const SizedBox());
        await t.pumpAndSettle();
        await closing;
        expect(closed, isTrue);
        expect(h.actualDisposals, 1);
        expect(h.runtime.handlesAtDispose, 0);
        expect(h.errors, hasLength(1));
        expect(h.errors.single.toString(), contains('FlaxSessionClosed'));
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'first component build failure reports once and still disposes its Controller',
    (t) async {
      final h = OwnedHarness(fixture: 'application');
      try {
        h.execute('globalThis.failApplicationBuild = true');
        await t.pumpWidget(FlaxView.session(session: h.session));
        await t.pumpAndSettle();
        expect(find.byType(ErrorWidget), findsOneWidget);
        expect(h.errors, hasLength(1));
        expect(h.errors.single.toString(), contains('first application build'));
        await t.pumpWidget(const SizedBox());
        await t.pumpAndSettle();
        expect(h.actualDisposals, 1);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'root initialization failure needs no Material ancestors and replacement releases it',
    (t) async {
      final runtimes = <RuntimeTracker>[];
      final errors = <Object>[];
      FlaxJsRuntime create() {
        final r = RuntimeTracker();
        runtimes.add(r);
        return r;
      }

      Widget view(String source) => FlaxView(
        createRuntime: create,
        source: source,
        bindings: registry,
        onError: (e, _) => errors.add(e),
      );
      await t.pumpWidget(view("throw new Error('startup failed')"));
      expect(find.byType(ErrorWidget), findsOneWidget);
      expect(errors.single.toString(), contains('startup failed'));
      await t.pumpWidget(view("throw new Error('replacement')"));
      await t.pumpAndSettle();
      expect(runtimes.first.handlesAtDispose, 0);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(runtimes.last.handlesAtDispose, 0);
      expect(t.takeException(), isNull);
    },
  );
}
