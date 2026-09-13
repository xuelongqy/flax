import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show host, registry;

import 'package:flax_test/flax_test.dart';

import '../support/runtime_tracker.dart';
import '../support/owned_harness.dart';

void main() {
  testWidgets(
    'Dart references preserve defaults, nested identity and immutable history',
    (t) async {
      final h = OwnedHarness(fixture: 'text_editing');
      await t.pumpWidget(h.app('editing'));
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
      expect(find.byType(TextField), findsOneWidget);
      h.execute('''
      var api = editing;
      var empty = api.TextEditingValue.empty;
      var initial = api.TextEditingValue();
      var selection = api.TextSelection({baseOffset: 4, extentOffset: 1, affinity: api.TextAffinity.upstream, isDirectional: true});
      var value = api.TextEditingValue({text: '中🌱文', selection, composing: api.TextRange({start: 0, end: 4})});
      var changed = value.copyWith({text: '中🌱文!'});
      var inherited = api.TextEditingValue({text: 'abcd', composing: selection});
      editing.controller.value = value;
      var old = editing.controller.value;
    ''');
      expect(
        h.boolean(
          'initial.text === empty.text && initial.selection.baseOffset === -1 && initial.composing.start === -1',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'value.selection.start === 1 && value.selection.end === 4 && value.selection.affinity === api.TextAffinity.upstream',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'value.text.length === 4 && value.isComposingRangeValid && changed.selection.baseOffset === 4',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'inherited.composing.start === 1 && inherited.composing === selection && inherited.composing.baseOffset === 4',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'Object.isFrozen(old) && Object.isFrozen(old.selection) && Object.isFrozen(old.composing)',
        ),
        isTrue,
      );
      final calls = Map.of(h.runtime.hostCalls);
      expect(h.number('old.selection.baseOffset + old.composing.end'), 8);
      expect(
        (h.runtime.hostCalls['__flaxObject'] ?? 0) -
            (calls['__flaxObject'] ?? 0),
        4,
      );
      h.execute("editing.controller.text = 'next'");
      final controller = h.created.single as TextEditingController;
      expect(controller.text, 'next');
      expect(controller.selection.baseOffset, -1);
      expect(controller.value.composing, TextRange.empty);
      expect(h.string('old.text'), '中🌱文');
      expect(h.number('editing.changes.length'), 0);
      h.execute('''
      var same = value.copyWith({text: null, selection: null, composing: null});
      var point = api.TextSelection.collapsed({offset: 2});
      var range = api.TextRange.collapsed(2);
    ''');
      expect(
        h.boolean(
          'same.text === value.text && point.isCollapsed && range.isNormalized && api.TextRange.empty.isValid === false',
        ),
        isTrue,
      );
      await t.pumpAndSettle();
      final baseline = h.runtime.handles;
      for (var i = 0; i < 20; i++) {
        h.execute(
          'editing.controller.value = value.copyWith(); editing.controller.value.selection.copyWith({extentOffset: 2})',
        );
      }
      await t.pumpAndSettle();
      expect(h.runtime.handles, baseline);
      expect(h.created, hasLength(1));
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'real input updates only bound labels with one complete value read per notification',
    (t) async {
      final h = OwnedHarness(fixture: 'text_editing');
      await t.pumpWidget(h.app('editing'));
      await t.pumpAndSettle();
      final staticElement = t.element(host('static'));
      final handles = h.runtime.handles;
      final subscriptions = h.runtime.activeSubscriptions;
      final memberCalls = h.runtime.hostCalls['__flaxObject'] ?? 0;
      final rebuilt = <FlaxWidgetHost>[];
      debugOnRebuildDirtyWidget = (element, _) {
        if (element.widget is FlaxWidgetHost) {
          rebuilt.add(element.widget as FlaxWidgetHost);
        }
      };
      addTearDown(() => debugOnRebuildDirtyWidget = null);
      await t.enterText(find.byType(TextField), '中文🌱');
      await t.pump();
      expect(find.text('Text: 中文🌱'), findsOneWidget);
      expect(h.number('editing.changes.length'), 1);
      expect(h.string('editing.changes[0]'), '中文🌱');
      expect(
        (h.runtime.hostCalls['__flaxObject'] ?? 0) - memberCalls,
        20, // Two controller reads plus the selected real getters during label builds.
      );
      expect(rebuilt, isNotEmpty);
      expect(
        rebuilt.every(
          (w) => [
            const ValueKey('editing-text'),
            const ValueKey('editing-state'),
          ].contains(w.key),
        ),
        isTrue,
      );
      expect(t.element(host('static')), same(staticElement));
      expect(h.number('editing.staticBuilds'), 1);
      debugPrint(
        'Text input locality: ${h.created.length} controller, $subscriptions subscriptions, ${rebuilt.length} label rebuilds; one value read per notification.',
      );
      debugOnRebuildDirtyWidget = null;
      final controller = h.created.single as TextEditingController;
      final notifications = h.number('editing.notifications');
      t.testTextInput.updateEditingValue(
        const TextEditingValue(
          text: '中文🌱',
          selection: TextSelection(baseOffset: 4, extentOffset: 1),
          composing: TextRange(start: 0, end: 4),
        ),
      );
      await t.pump();
      expect(controller.selection.baseOffset, 4);
      expect(controller.selection.extentOffset, 1);
      expect(controller.value.composing, const TextRange(start: 0, end: 4));
      expect(h.number('editing.notifications'), notifications + 1);
      expect(h.number('editing.changes.length'), 1);
      t.testTextInput.updateEditingValue(
        const TextEditingValue(
          text: '中文🌱',
          selection: TextSelection.collapsed(offset: 4),
          composing: TextRange.empty,
        ),
      );
      await t.pump();
      expect(controller.value.composing, TextRange.empty);
      final stable = h.number('editing.notifications');
      h.execute(
        'editing.controller.value = editing.controller.value.copyWith()',
      );
      await t.pump();
      expect(h.number('editing.notifications'), stable);
      expect(h.runtime.handles, handles);
      expect(h.runtime.activeSubscriptions, subscriptions);
      await t.testTextInput.receiveAction(TextInputAction.done);
      await t.pump();
      expect(h.string('editing.submissions[0]'), '中文🌱');
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'editing failures preserve values and recover without temporary references',
    (t) async {
      final h = OwnedHarness(fixture: 'text_editing');
      await t.pumpWidget(h.app('editing'));
      await t.pumpAndSettle();
      h.execute("editing.controller.text = 'safe'");
      await t.pump();
      final baseline = h.runtime.handles;
      final controller = h.created.single as TextEditingController;
      final old = controller.value;
      for (final code in [
        "editing.TextEditingValue({text: null})",
        "editing.TextEditingValue({selection: editing.TextRange.empty})",
        "editing.TextEditingValue({composing: {start: 0, end: 1}})",
        "editing.controller.value = editing.TextEditingValue({text:'x', composing:editing.TextRange({start:0,end:2})})",
        "editing.TextEditingController.fromValue(editing.TextEditingValue({text:'x',composing:editing.TextRange({start:0,end:2})}))",
        "editing.controller.selection = editing.TextSelection.collapsed({offset: 20})",
        "editing.controller.value = 'wrong'",
        "editing.controller.value.copyWith({selection: editing.TextRange.empty})",
        "__flaxObject(6, '', 0, 'get', 'empty')",
      ]) {
        expect(
          () => h.execute(code),
          throwsA(isA<FlaxJsException>()),
          reason: code,
        );
        expect(controller.value, old);
      }
      await t.pumpAndSettle();
      expect(h.created, hasLength(1));
      expect(h.runtime.handles, baseline);
      h.execute(
        "editing.failListener = true; editing.controller.text = 'reported'",
      );
      await t.pump();
      expect(h.errors.single.toString(), contains('editing listener failed'));
      h.errors.clear();
      h.execute(
        "editing.failListener = false; editing.controller.clear(); editing.controller.clearComposing()",
      );
      await t.pump();
      expect(controller.text, '');
      expect(controller.selection, const TextSelection.collapsed(offset: 0));
      expect(controller.value.composing, TextRange.empty);
      await h.finish(t);
      expect(() => h.execute('editing.controller.text'), throwsA(anything));
    },
  );

  testWidgets(
    'callback and controller replacement preserve page state and dispose after detach',
    (t) async {
      final h = OwnedHarness(fixture: 'text_editing');
      await t.pumpWidget(h.app('editing', arguments: 'multiline'));
      await t.pumpAndSettle();
      await t.enterText(find.byType(TextField), 'one\n二🌱');
      await t.pump();
      h.execute(
        "editing.changed.value = text => editing.changes.push('new:' + text); editing.complete.value = () => editing.completions++",
      );
      await t.pump();
      await t.enterText(find.byType(TextField), 'two\n三');
      await t.pump();
      expect(h.string('editing.changes[1]'), 'new:two\n三');
      await t.testTextInput.receiveAction(TextInputAction.done);
      await t.pump();
      expect(h.number('editing.completions'), 1);
      await t.pumpWidget(h.app('editing', arguments: {'updated': true}));
      await t.pump();
      expect(h.number('editing.factories'), 1);
      expect(find.text('two\n三'), findsOneWidget);
      h.execute(
        "var replacement = editing.TextEditingController.fromValue(editing.TextEditingValue({text:'new controller'})); editing.selected.value = replacement",
      );
      await t.pump();
      expect(find.text('new controller'), findsOneWidget);
      expect(h.actualDisposals, 0);
      h.execute("editing.controller.text = 'detached'");
      await t.pump();
      expect(find.text('new controller'), findsOneWidget);
      h.execute('editing.selected.value = null');
      await t.pump();
      await t.enterText(find.byType(TextField), 'Flutter owned');
      await t.pump();
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(h.number('editing.cleanups'), 1);
      expect(
        () => h.execute('editing.controller.text'),
        throwsA(isA<FlaxJsException>()),
      );
      h.execute('replacement.dispose()');
      await t.pumpWidget(h.app('editing'));
      await t.pumpAndSettle();
      expect(h.number('editing.factories'), 2);
      expect(find.text('Text: '), findsOneWidget);
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets('content unmount and failed factories release text controllers', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'text_editing');
    await t.pumpWidget(h.app('holder'));
    await t.pumpAndSettle();
    h.execute('editing.show.value = false');
    await t.pumpAndSettle();
    expect(h.actualDisposals, 1);
    h.execute('editing.show.value = true');
    await t.pumpAndSettle();
    expect(h.number('editing.factories'), 2);
    await t.pumpWidget(h.app('failure'));
    await t.pumpAndSettle();
    expect(h.actualDisposals, 3);
    expect(h.errors.single.toString(), contains('editing factory failed'));
    await h.finish(t);
  });
  testWidgets('shared fields borrow one controller and detach independently', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'text_editing');
    await t.pumpWidget(h.app('shared'));
    await t.pumpAndSettle();
    final fields = t.widgetList<TextField>(find.byType(TextField)).toList();
    expect(fields[0].controller, same(fields[1].controller));
    await t.enterText(find.byType(TextField).first, 'shared');
    await t.pump();
    expect(find.text('shared'), findsNWidgets(2));
    h.execute('editing.show.value = false');
    await t.pumpAndSettle();
    expect(h.actualDisposals, 0);
    h.execute("editing.controller.text = 'still alive'");
    await t.pump();
    expect(find.text('still alive'), findsOneWidget);
    await h.finish(t);
    expect(h.errors, isEmpty);
  });

  testWidgets(
    'maintainState false reinitializes editing and closing waits for route retirement',
    (t) async {
      final h = OwnedHarness(fixture: 'text_editing');
      final navigator = GlobalKey<NavigatorState>();
      await t.pumpWidget(
        MaterialApp(
          navigatorKey: navigator,
          home: const Scaffold(body: Text('Native home')),
        ),
      );
      final route = MaterialPageRoute<void>(
        maintainState: false,
        builder: (_) => Material(
          child: FlaxView.page(session: h.session, name: 'editing'),
        ),
      );
      navigator.currentState!.push(route);
      await t.pumpAndSettle();
      h.execute("editing.controller.text = 'before cover'");
      await t.pump();
      navigator.currentState!.push(
        MaterialPageRoute<void>(
          builder: (_) => const Scaffold(body: Text('Cover')),
        ),
      );
      await t.pumpAndSettle();
      expect(h.actualDisposals, 1);
      navigator.currentState!.pop();
      await t.pumpAndSettle();
      expect(h.number('editing.factories'), 2);
      expect(find.text('Text: '), findsOneWidget);
      var closed = false;
      final closing = h.session.close().then((_) => closed = true);
      navigator.currentState!.pop();
      await t.pump();
      expect(closed, isFalse);
      await t.pumpAndSettle();
      await closing;
      expect(h.actualDisposals, 2);
      expect(h.runtime.handlesAtDispose, 0);
      await h.finish(t);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'source replacement cleans editing resources before retiring each runtime',
    (t) async {
      final runtimes = <RuntimeTracker>[];
      final errors = <Object>[];
      FlaxJsRuntime create() {
        final runtime = RuntimeTracker();
        runtimes.add(runtime);
        return runtime;
      }

      final source =
          "${flaxTestFixtureSource('text_editing')}\nediting.mount();";
      Widget app(String suffix) => MaterialApp(
        home: Material(
          child: FlaxView(
            createRuntime: create,
            source: '$source\n$suffix',
            bindings: registry,
            onError: (error, _) => errors.add(error),
          ),
        ),
      );
      await t.pumpWidget(app(''));
      await t.pumpAndSettle();
      await t.enterText(find.byType(TextField), 'before replacement');
      await t.pump();
      await t.pumpWidget(app('// replacement'));
      await t.pumpAndSettle();
      expect(runtimes, hasLength(2));
      // Named content keeps its session until the enclosing native Route retires.
      expect(runtimes.first.isDisposed, isFalse);
      expect(
        (runtimes.first.evaluate('editing.cleanups') as FlaxJsNumber).value,
        1,
      );
      expect(runtimes.first.activeSubscriptions, 0);
      expect(find.text('Text: '), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(runtimes.first.handlesAtDispose, 0);
      expect(runtimes.last.handlesAtDispose, 0);
      expect(runtimes.last.activeSubscriptions, 0);
      expect(errors, isEmpty);
    },
  );
}
