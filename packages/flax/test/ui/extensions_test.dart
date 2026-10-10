import 'package:flax/flax.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/extensions_bindings.dart';
import '../fixtures/extensions.dart' as fixture;
import '../support/owned_harness.dart';

void main() {
  OwnedHarness harness({void Function(fixture.ExtensionValues)? onValues}) =>
      OwnedHarness(
        fixture: 'extensions',
        extra: [extensionsBindings],
        onCreate: (_, value) {
          if (value is fixture.ExtensionValues) onValues?.call(value);
        },
      );

  testWidgets('extension views share methods and preserve typed operations', (
    tester,
  ) async {
    late fixture.ExtensionValues values;
    final h = harness(onValues: (value) => values = value);
    final reads = fixture.StringX.reads;
    try {
      await tester.pumpWidget(h.app('extensions'));
      expect(h.errors, isEmpty);
      expect(fixture.StringX.reads, reads);
      final before = h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0;
      h.execute("var textView = extensions.StringX('a');");
      expect(h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0, before);
      expect(h.string('textView.repeat(3)'), 'aaa');
      expect((h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0) - before, 1);
      expect(
        h.boolean('''
        textView.repeat === extensions.StringX('b').repeat &&
        extensions.StringX(' ').isBlank &&
        extensions.StringX.revision === ${reads + 1} &&
        extensions.StringX.revision === ${reads + 2} &&
        extensions.NullableX(null).missing &&
        extensions.ListX([3]).mapFirst(value => value + 2) === 5 &&
        extensions.ListX(extensionHooks.values.numbers).getIndex(1) === 2
      '''),
        isTrue,
      );
      h.execute(
        'extensions.IntListX(extensionHooks.values.numbers).setFirstValue(7);'
        'extensions.ListX(extensionHooks.values.words).setFirstValue("c");',
      );
      expect(values.numbers, [7, 2]);
      expect(values.words, ['c', 'b']);
      h.execute('''
        var detachedEcho = extensions.StringX.echo;
        var extensionLater = null;
        extensions.ListX([9]).later().then(value => extensionLater = value);
      ''');
      expect(h.string("detachedEcho('static')"), 'static');
      await tester.pumpAndSettle();
      h.runtime.drainMicrotasks();
      expect(h.number('extensionLater'), 9);
      for (final source in [
        'extensions.StringX()',
        'extensions.StringX(undefined)',
        "extensions.StringX('a', 'b')",
        "new extensions.StringX('a')",
        'textView.repeat()',
        "textView.repeat('bad')",
        'textView.repeat(null)',
        'textView.repeat(1, 2)',
        'textView.repeat.call({}, 2)',
        'textView.repeat.call(Object.create(textView), 2)',
        '(() => { const repeat = textView.repeat; return repeat(2); })()',
        'extensions.ListX(extensionHooks.values.numbers).setFirstValue("bad")',
        'extensions.ListX(extensionHooks.values.numbers).setFirstValue(8)',
        'extensions.ListX([1]).getIndex(9)',
        'extensions.StringX(null).isBlank',
        'extensions.StringX(1).repeat(3)',
      ]) {
        expect(
          () => h.execute(source),
          throwsA(isA<FlaxJsException>()),
          reason: source,
        );
      }
    } finally {
      fixture.StringX.reads = reads;
      await h.finish(tester);
    }
  });

  testWidgets('extensions reuse Context and Flutter reference conversions', (
    tester,
  ) async {
    late fixture.ExtensionValues values;
    late State nativeState;
    final h = harness(onValues: (value) => values = value);
    final previousSharedState = fixture.ExtensionValues.sharedState;
    final previousGlobalState = fixture.globalState;
    try {
      await tester.pumpWidget(
        fixture.ExtensionAnchor(
          onState: (state) => nativeState = state,
          child: h.app('extensions'),
        ),
      );
      expect(h.errors, isEmpty);
      values.nativeState = nativeState;
      h.execute(
        'var contextView = extensions.ContextX(extensionHooks.context);'
        'var stateInput = extensionHooks.values.state();'
        'var stateView = extensions.StateX(stateInput);'
        'extensionHooks.values.nativeState = stateInput;'
        'extensions.ExtensionValues.setSharedState(stateInput);'
        'extensions.ReferenceValues.setGlobalState(stateInput);',
      );
      expect(fixture.ExtensionValues.sharedState, same(nativeState));
      expect(fixture.globalState, same(nativeState));
      expect(
        h.boolean('''
        contextView.isMounted && contextView.same === extensionHooks.context &&
        contextView.through(value => value) === extensionHooks.context &&
        stateView.isMounted && extensions.StateX(stateView.same).isMounted &&
        extensions.stateIsMounted(stateInput) &&
        extensions.ExtensionValues.stateMounted(stateInput) &&
        extensionHooks.values.matchesState(stateInput) &&
        extensionHooks.values.matchesState(extensionHooks.values.nativeState) &&
        extensionHooks.values.matchesState(extensions.ExtensionValues.sharedState) &&
        extensionHooks.values.matchesState(extensions.ReferenceValues.globalState) &&
        extensions.countMountedStates([stateInput, stateInput]) === 2 &&
        !extensions.optionalStateIsMounted({value: null}) &&
        !extensions.optionalStateIsMounted({value: undefined}) &&
        extensions.WidgetX(extensionHooks.values.widget).same === extensionHooks.values.widget &&
        extensions.WidgetX(extensionHooks.values.widget).through(value => value) === extensionHooks.values.widget &&
        extensions.PreferredX(extensionHooks.values.preferred).height === 40 &&
        extensions.PreferredX(extensionHooks.values.preferred).same === extensionHooks.values.preferred &&
        !extensions.RouteX(extensionHooks.route).isInstalled &&
        extensions.PageX(extensionHooks.page).label === 'extension-page'
      '''),
        isTrue,
      );
      h.execute('''
        var extensionContextLater = false;
        var extensionContextEvent = false;
        contextView.later(async () => extensionHooks.context)
          .then(value => extensionContextLater = value === extensionHooks.context);
        var extensionSubscription = contextView.events.listen(value =>
          extensionContextEvent = value === extensionHooks.context);
      ''');
      for (var i = 0; i < 40; i++) {
        h.runtime.drainMicrotasks();
        await tester.pump(const Duration(milliseconds: 1));
      }
      expect(
        h.boolean('extensionContextLater && extensionContextEvent'),
        isTrue,
      );
      h.execute('extensionSubscription.cancel();');
      h.execute(
        "extensionHooks.result = contextView.label('Extension result');",
      );
      await tester.pumpWidget(h.app('extension-result'));
      expect(find.text('Extension result'), findsOneWidget);
      expect(
        () => h.execute('contextView.isMounted'),
        throwsA(isA<FlaxJsException>()),
      );
      expect(
        () => h.execute('contextView.same'),
        throwsA(isA<FlaxJsException>()),
      );
      expect(
        () => h.execute('stateView.isMounted'),
        throwsA(isA<FlaxJsException>()),
      );
      for (final source in [
        'extensionHooks.values.nativeState',
        'extensions.ExtensionValues.sharedState',
        'extensions.ReferenceValues.globalState',
        'extensionHooks.values.nativeState = stateInput',
        'extensions.ReferenceValues.setGlobalState(stateInput)',
        'extensions.stateIsMounted(stateInput)',
        'extensionHooks.values.matchesState(stateInput)',
        'extensions.countMountedStates([stateInput])',
      ]) {
        expect(() => h.execute(source), throwsA(isA<FlaxJsException>()));
      }
      expect(
        () => h.execute('extensions.StateX({mounted: true}).isMounted'),
        throwsA(isA<FlaxJsException>()),
      );
      expect(
        () => h.execute('extensions.ContextX({mounted: true}).isMounted'),
        throwsA(isA<FlaxJsException>()),
      );
    } finally {
      fixture.ExtensionValues.sharedState = previousSharedState;
      fixture.globalState = previousGlobalState;
      await h.finish(tester);
    }
  });

  testWidgets(
    'ordinary Widget lists preserve native identity and mount results',
    (tester) async {
      late fixture.ExtensionValues values;
      final h = harness(onValues: (value) => values = value);
      // Page factories run once per mount; re-enter to render the next result.
      Future<void> mountResult() => tester.pumpWidget(
        KeyedSubtree(key: UniqueKey(), child: h.app('extension-result')),
      );
      try {
        await tester.pumpWidget(h.app('extensions'));
        h.execute('''
        extensionHooks.result = extensions.columnWidgets([
          extensionHooks.values.widget,
          extensionHooks.child,
          extensionHooks.componentWidget,
        ]);
      ''');
        await mountResult();
        expect(find.byWidget(values.widget), findsOneWidget);
        expect(find.text('JS list child'), findsOneWidget);
        expect(find.text('State input true'), findsOneWidget);

        h.execute('''
        extensionHooks.result = extensionHooks.values.column(extensionHooks.values.widgets);
      ''');
        await mountResult();
        expect(find.byWidget(values.widget), findsOneWidget);
        expect(find.byWidget(values.preferred as Widget), findsOneWidget);

        h.execute('''
        extensionHooks.result = extensions.columnWidgetGroups([
          [extensionHooks.values.widget, null], null, [extensionHooks.child],
        ]);
      ''');
        await mountResult();
        expect(find.byWidget(values.widget), findsOneWidget);
        expect(find.text('JS list child'), findsOneWidget);

        h.execute('''
        extensions.futureColumnWidgets(Promise.resolve([extensionHooks.child]))
          .then(value => extensionHooks.result = value);
      ''');
        for (var i = 0; i < 40; i++) {
          h.runtime.drainMicrotasks();
          await tester.pump(const Duration(milliseconds: 1));
        }
        await mountResult();
        expect(find.text('JS list child'), findsOneWidget);
        expect(find.byWidget(values.widget), findsNothing);
        for (final source in [
          'extensions.columnWidgets([extensionHooks.child, null])',
          'extensions.columnWidgets([extensionHooks.child, {}])',
          'extensions.columnWidgets([undefined])',
          'extensions.columnWidgets([,])',
          'extensions.columnWidgets(null)',
          'extensions.columnWidgets()',
        ]) {
          expect(
            () => h.execute(source),
            throwsA(isA<FlaxJsException>()),
            reason: source,
          );
        }
        h.execute(
          'extensionHooks.result = extensions.columnWidgetGroups(null);',
        );
        await mountResult();
        expect(find.text('JS list child'), findsNothing);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    },
  );

  testWidgets('ordinary State inputs use live JS State hosts', (tester) async {
    late fixture.ExtensionValues values;
    final h = harness(onValues: (value) => values = value);
    final previousSharedState = fixture.ExtensionValues.sharedState;
    final previousGlobalState = fixture.globalState;
    try {
      await tester.pumpWidget(h.app('state-inputs'));
      expect(find.text('State input true'), findsOneWidget);
      h.execute('''
        extensionHooks.values.nativeState = extensionHooks.componentState;
        extensions.ExtensionValues.setSharedState(extensionHooks.componentState);
        extensions.ReferenceValues.setGlobalState(extensionHooks.componentState);
      ''');
      expect(values.nativeState, same(fixture.ExtensionValues.sharedState));
      expect(values.nativeState, same(fixture.globalState));
      expect(values.nativeState!.mounted, isTrue);
      expect(
        h.boolean('''
        extensions.stateIsMounted(extensionHooks.componentState) &&
        extensions.stateIsMounted(extensionHooks.values.nativeState) &&
        extensions.stateIsMounted(extensions.ExtensionValues.sharedState) &&
        extensions.stateIsMounted(extensions.ReferenceValues.globalState) &&
        extensions.ExtensionValues.stateMounted(extensionHooks.componentState) &&
        extensions.countMountedStates([extensionHooks.componentState]) === 1
      '''),
        isTrue,
      );
      for (final source in [
        'extensionHooks.values.nativeState = {mounted: true}',
        'extensionHooks.values.nativeState = undefined',
        'extensions.ExtensionValues.setSharedState(extensionHooks.child)',
        'extensions.ReferenceValues.setGlobalState()',
        'extensions.ReferenceValues.setGlobalState(undefined)',
        'extensions.ReferenceValues.setGlobalState(extensionHooks.componentState, 1)',
        'extensions.stateIsMounted({mounted: true})',
        'extensions.stateIsMounted(null)',
        'extensions.stateIsMounted(undefined)',
        'extensions.stateIsMounted()',
        'extensions.stateIsMounted(extensionHooks.componentState, 1)',
        'extensions.countMountedStates([extensionHooks.componentState, {}])',
      ]) {
        expect(
          () => h.execute(source),
          throwsA(isA<FlaxJsException>()),
          reason: source,
        );
      }
      h.execute('''
        extensionHooks.values.nativeState = null;
        extensions.ExtensionValues.setSharedState(null);
        extensions.ReferenceValues.setGlobalState(null);
      ''');
      expect(
        h.boolean('''
        extensionHooks.values.nativeState === null &&
        extensions.ExtensionValues.sharedState === null &&
        extensions.ReferenceValues.globalState === null
      '''),
        isTrue,
      );
      await tester.pumpWidget(h.app('extensions'));
      expect(
        () => h.execute(
          'extensions.stateIsMounted(extensionHooks.componentState)',
        ),
        throwsA(isA<FlaxJsException>()),
      );
      expect(h.errors, isEmpty);
    } finally {
      fixture.ExtensionValues.sharedState = previousSharedState;
      fixture.globalState = previousGlobalState;
      await h.finish(tester);
    }
  });

  testWidgets('State references preserve base and selected views', (
    tester,
  ) async {
    for (final baseFirst in [false, true]) {
      late fixture.ExtensionValues values;
      final h = harness(onValues: (value) => values = value);
      try {
        await tester.pumpWidget(h.app('extensions'));
        values.nativeState = tester.state<NavigatorState>(
          find.byType(Navigator),
        );
        final readBase = 'var baseState = extensionHooks.values.state();';
        final readSelected =
            'var selectedState = Navigator.of(extensionHooks.context);';
        h.execute(
          baseFirst ? '$readBase$readSelected' : '$readSelected$readBase',
        );
        expect(
          h.boolean('''
            selectedState.mounted && !selectedState.canPop() &&
            extensions.stateIsMounted(baseState) &&
            extensionHooks.values.matchesState(
              extensions.StateX(baseState).through(value => value))
          '''),
          isTrue,
        );
        await tester.pumpWidget(const SizedBox.shrink());
        for (final source in [
          'selectedState.canPop()',
          'extensions.StateX(baseState).through(value => value)',
        ]) {
          expect(
            () => h.execute(source),
            throwsA(isA<FlaxJsException>()),
            reason: source,
          );
        }
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(tester);
      }
    }
  });

  testWidgets('State callbacks share ordinary references in both directions', (
    tester,
  ) async {
    for (final jsState in [false, true]) {
      late fixture.ExtensionValues values;
      late State state;
      late State Function(State) retained;
      final h = harness(onValues: (value) => values = value);
      try {
        if (jsState) {
          await tester.pumpWidget(h.app('state-inputs'));
          h.execute(
            'extensionHooks.values.nativeState = extensionHooks.componentState;',
          );
          state = values.nativeState!;
        } else {
          await tester.pumpWidget(
            fixture.ExtensionAnchor(
              onState: (value) => state = value,
              child: h.app('extensions'),
            ),
          );
          values.nativeState = state;
        }
        h.execute('''
          var stateView = extensions.StateX(extensionHooks.values.state());
          var visits = 0;
          var savedState = stateView.through(value => {
            visits++;
            if (!extensions.stateIsMounted(value)) throw Error('Not mounted');
            return value;
          });
          var readState = stateView.reader();
          stateView.visitor()(value => {
            visits++;
            if (!extensionHooks.values.matchesState(value)) throw Error('Wrong State');
          });
          var stateRecord = stateView.throughRecord(value => value);
          extensionHooks.values.keepStateCallback(value => {
            visits++;
            return value;
          });
        ''');
        expect(h.number('visits'), 2);
        expect(
          h.boolean('''
            extensionHooks.values.matchesState(savedState) &&
            extensionHooks.values.matchesState(readState(savedState)) &&
            extensionHooks.values.matchesState(stateRecord.\$1) &&
            extensionHooks.values.matchesState(stateRecord.\$2.get(0)) &&
            stateRecord.\$2.get(1) === null
          '''),
          isTrue,
        );
        retained = values.retainedStateCallback!;
        expect(retained(state), same(state));
        expect(h.number('visits'), 3);
        final erasedState = jsState
            ? 'extensionHooks.componentState'
            : 'savedState';
        h.execute('Stream.fromIterable([$erasedState]);');
        for (final source in [
          'stateView.through(() => null)',
          'stateView.through(() => undefined)',
          'stateView.through(() => ({mounted: true}))',
          'stateView.through(() => extensionHooks.child)',
          'stateView.through(() => { throw Error("callback failure"); })',
          'stateView.through()',
          'stateView.through(null)',
          'stateView.through(undefined)',
          'readState({mounted: true})',
          'readState(undefined)',
          'readState()',
          'readState(savedState, savedState)',
        ]) {
          expect(
            () => h.execute(source),
            throwsA(isA<FlaxJsException>()),
            reason: source,
          );
        }
        await tester.pumpWidget(h.app('extensions'));
        expect(state.mounted, isFalse);
        expect(() => values.retainedStateCallback!(state), throwsStateError);
        expect(h.number('visits'), 3);
        expect(
          () => h.execute('readState(savedState)'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(
          () => h.execute('Stream.fromIterable([$erasedState]);'),
          throwsA(isA<FlaxJsException>()),
        );
        expect(h.errors, isEmpty);
      } finally {
        values.retainedStateCallback = null;
        await h.finish(tester);
      }
      expect(
        () => retained(state),
        throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'message',
            contains('Retired JS callback'),
          ),
        ),
      );
    }
  });

  testWidgets('State callbacks preserve Future and Stream conversions', (
    tester,
  ) async {
    late fixture.ExtensionValues values;
    late State state;
    final h = harness(onValues: (value) => values = value);
    Future<void> settle(String expression) async {
      h.execute('''
        var stateAsyncDone = false;
        var stateAsyncResult = false;
        var stateAsyncError = null;
        ($expression).then(value => {
          stateAsyncResult = value;
          stateAsyncDone = true;
        }, error => {
          stateAsyncError = String(error);
          stateAsyncDone = true;
        });
      ''');
      for (var turn = 0; turn < 80 && !h.boolean('stateAsyncDone'); turn++) {
        await tester.pump(const Duration(milliseconds: 1));
        await tester.runAsync(
          () => Future<void>.delayed(const Duration(milliseconds: 1)),
        );
        h.runtime.drainMicrotasks();
      }
      expect(h.boolean('stateAsyncDone'), isTrue);
    }

    try {
      await tester.pumpWidget(
        fixture.ExtensionAnchor(
          onState: (value) => state = value,
          child: h.app('extensions'),
        ),
      );
      values.nativeState = state;
      h.execute(
        'var stateView = extensions.StateX(extensionHooks.values.state());',
      );
      for (final expression in [
        'Promise.resolve(stateView.throughMaybe(value => value)).then(value => extensionHooks.values.matchesState(value))',
        'Promise.resolve(stateView.throughMaybe(value => value, {empty: true})).then(value => value === null)',
        'Promise.resolve(stateView.throughMaybe(value => Promise.resolve(value))).then(value => extensionHooks.values.matchesState(value))',
        'stateView.throughLater(value => value).then(value => extensionHooks.values.matchesState(value))',
        'stateView.throughLater(() => Promise.resolve(null)).then(value => value === null)',
        'stateView.throughStream(value => value).toList().then(values => extensionHooks.values.matchesState(values.get(0)))',
        'stateView.throughStream(value => value.map(item => item)).toList().then(values => extensionHooks.values.matchesState(values.get(0)))',
        'stateView.throughStream(extensionHooks.duplicateStateEvents).toList().then(values => extensionHooks.values.matchesState(values.get(0)) && values.get(1) === null)',
      ]) {
        await settle(expression);
        expect(h.string('String(stateAsyncError)'), 'null', reason: expression);
        expect(h.boolean('stateAsyncResult'), isTrue, reason: expression);
      }
      h.execute('''
        var resolveState;
        var lateState = stateView.throughLater(value => {
          return new Promise(resolve => { resolveState = resolve; });
        }).then(() => 'unexpected', () => 'rejected');
        var oldState = extensionHooks.values.state();
      ''');
      await tester.pumpWidget(h.app('extensions'));
      h.execute('resolveState(oldState);');
      await settle("lateState.then(value => value === 'rejected')");
      expect(h.boolean('stateAsyncResult'), isTrue);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(tester);
    }
  });

  testWidgets('Widget writes retain configurations only while Dart keeps them', (
    tester,
  ) async {
    late fixture.ExtensionValues values;
    final h = harness(onValues: (value) => values = value);
    final previousSharedWidget = fixture.ExtensionValues.sharedWidget;
    final previousGlobalWidget = fixture.globalWidget;
    Future<void> collect() async {
      await tester.runAsync(() async {
        for (var i = 0; i < 3; i++) {
          h.execute(flaxTestJsGarbagePressure);
          await flaxTestCollectDartGarbage();
        }
      });
    }

    try {
      await tester.pumpWidget(h.app('extensions'));
      expect(values.widgetReads, 0);
      expect(values.widgetWrites, 0);
      h.execute(
        'extensionHooks.values.selectedWidget = extensionHooks.values.widget;',
      );
      expect(values.widgetWrites, 1);
      h.execute('void extensionHooks.values.selectedWidget;');
      expect(values.widgetReads, 1);
      final writes = values.widgetWrites;
      for (final source in [
        'extensionHooks.values.selectedWidget = {}',
        'extensionHooks.values.selectedWidget = undefined',
        'extensions.ExtensionValues.setSharedWidget(1)',
        'extensions.ReferenceValues.setGlobalWidget(undefined)',
        'extensions.ReferenceValues.setGlobalWidget()',
        'extensions.ReferenceValues.setGlobalWidget(null, 1)',
      ]) {
        expect(
          () => h.execute(source),
          throwsA(isA<FlaxJsException>()),
          reason: source,
        );
      }
      expect(values.widgetWrites, writes);
      h.execute('extensionHooks.values.selectedWidget = null;');
      for (final (write, read, nativeValue)
          in <(String, String, Widget? Function())>[
            (
              'extensionHooks.values.selectedWidget = VALUE',
              'extensionHooks.values.selectedWidget',
              () => values.selectedWidget,
            ),
            (
              'extensions.ExtensionValues.setSharedWidget(VALUE)',
              'extensions.ExtensionValues.sharedWidget',
              () => fixture.ExtensionValues.sharedWidget,
            ),
            (
              'extensions.ReferenceValues.setGlobalWidget(VALUE)',
              'extensions.ReferenceValues.globalWidget',
              () => fixture.globalWidget,
            ),
          ]) {
        final store = write.replaceFirst(
          'VALUE',
          'extensionHooks.makeComponent()',
        );
        if (read.endsWith('.selectedWidget')) {
          values.rejectWidgetAfterStore = true;
          expect(() => h.execute(store), throwsA(isA<FlaxJsException>()));
          values.rejectWidgetAfterStore = false;
        } else {
          h.execute(store);
        }
        WeakReference<Widget> capture() => WeakReference(nativeValue()!);
        final weak = capture();
        await collect();
        expect(weak.target, isNotNull, reason: read);
        h.execute('extensionHooks.result = $read;');
        await tester.pumpWidget(
          KeyedSubtree(key: UniqueKey(), child: h.app('extension-result')),
        );
        expect(find.text('State input true'), findsOneWidget);
        await tester.pumpWidget(const SizedBox.shrink());
        await tester.pumpAndSettle();
        h.execute(
          'extensionHooks.result = null; extensionHooks.componentState = null;',
        );
        h.execute(write.replaceFirst('VALUE', 'null'));
        expect(h.boolean('$read === null'), isTrue);
        await collect();
        expect(weak.target, isNull, reason: read);
      }
      expect(h.errors, isEmpty);
    } finally {
      fixture.ExtensionValues.sharedWidget = previousSharedWidget;
      fixture.globalWidget = previousGlobalWidget;
      values.rejectWidgetAfterStore = false;
      await h.finish(tester);
    }
  });

  testWidgets(
    'Dart globals share references without rolling back at session close',
    (tester) async {
      final previousState = fixture.globalState;
      final previousWidget = fixture.globalWidget;
      final previousContext = fixture.globalContext;
      final contextReads = fixture.globalContextReads;
      final first = harness();
      final second = harness();
      late State nativeState;
      const widget = Text('Shared Dart Widget');
      try {
        fixture.globalContext = null;
        await tester.pumpWidget(
          fixture.ExtensionAnchor(
            onState: (state) => nativeState = state,
            child: Column(
              children: [
                Expanded(child: first.app('extensions')),
                Expanded(child: second.app('extensions')),
              ],
            ),
          ),
        );
        expect(fixture.globalContextReads, contextReads);
        for (final h in [first, second]) {
          expect(
            h.boolean('''
              extensions.ReferenceValues.globalContext === null &&
              extensions.ReferenceValues.currentContext === null
            '''),
            isTrue,
          );
        }
        expect(fixture.globalContextReads, contextReads + 2);
        fixture.globalState = nativeState;
        fixture.globalWidget = widget;
        final nativeContext = nativeState.context;
        fixture.globalContext = nativeContext;
        for (final h in [first, second]) {
          expect(
            h.boolean(
              'extensions.stateIsMounted(extensions.ReferenceValues.globalState)',
            ),
            isTrue,
          );
          h.execute(
            'extensionHooks.result = extensions.ReferenceValues.globalWidget;'
            'var borrowedGlobalContext = extensions.ReferenceValues.globalContext;',
          );
          expect(
            h.boolean('''
              borrowedGlobalContext === extensions.ReferenceValues.currentContext &&
              extensions.ContextX(borrowedGlobalContext).isMounted &&
              extensions.ContextX(borrowedGlobalContext).same === borrowedGlobalContext
            '''),
            isTrue,
          );
        }
        expect(fixture.globalContextReads, contextReads + 4);
        await second.finish(tester);
        expect(fixture.globalState, same(nativeState));
        expect(fixture.globalWidget, same(widget));
        expect(fixture.globalContext, same(nativeContext));
        expect(nativeState.mounted, isFalse);
        expect(nativeContext.mounted, isFalse);
        expect(first.boolean('borrowedGlobalContext.mounted'), isFalse);
        expect(
          () => first.execute('extensions.ReferenceValues.globalState'),
          throwsA(isA<FlaxJsException>()),
        );
        for (final name in ['globalContext', 'currentContext']) {
          expect(
            () => first.execute('extensions.ReferenceValues.$name'),
            throwsA(isA<FlaxJsException>()),
            reason: name,
          );
        }
        fixture.globalContext = null;
        expect(
          first.boolean('extensions.ReferenceValues.currentContext === null'),
          isTrue,
        );
        await tester.pumpWidget(first.app('extension-result'));
        expect(find.byWidget(widget), findsOneWidget);
        expect(first.errors, isEmpty);
        expect(second.errors, isEmpty);
      } finally {
        fixture.globalState = previousState;
        fixture.globalWidget = previousWidget;
        fixture.globalContext = previousContext;
        fixture.globalContextReads = contextReads;
        await first.finish(tester);
        await second.finish(tester);
      }
    },
  );

  testWidgets('Flutter reference inputs reject foreign sessions', (
    tester,
  ) async {
    final first = harness();
    final second = harness();
    final previousContext = fixture.globalContext;
    try {
      await tester.pumpWidget(
        Column(
          children: [
            Expanded(child: first.app('state-inputs')),
            Expanded(child: second.app('state-inputs')),
          ],
        ),
      );
      expect([...first.errors, ...second.errors], isEmpty);
      first.execute(
        'extensions.ReferenceValues.setGlobalContext(extensionHooks.context)',
      );
      final context = first.runtime.evaluate(
        'extensions.ReferenceValues.globalContext',
      ) as FlaxJsObject;
      final read = second.runtime.evaluate(
        '(value) => extensions.ContextX(value).isMounted',
      ) as FlaxJsFunction;
      final writeContext = second.runtime.evaluate(
        'extensions.ReferenceValues.setGlobalContext',
      ) as FlaxJsFunction;
      try {
        expect(() => read.call([context]), throwsA(isA<ArgumentError>()));
        expect(
          () => writeContext.call([context]),
          throwsA(isA<ArgumentError>()),
        );
      } finally {
        writeContext.release();
        read.release();
        context.release();
      }
      final state = first.runtime.evaluate(
        'extensionHooks.componentState',
      ) as FlaxJsObject;
      final readState = second.runtime.evaluate(
        'extensions.stateIsMounted',
      ) as FlaxJsFunction;
      final writeState = second.runtime.evaluate(
        'extensions.ReferenceValues.setGlobalState',
      ) as FlaxJsFunction;
      final readCallback = second.runtime.evaluate(
        'extensions.StateX(extensionHooks.componentState).reader()',
      ) as FlaxJsFunction;
      try {
        expect(() => readState.call([state]), throwsA(isA<ArgumentError>()));
        expect(() => writeState.call([state]), throwsA(isA<ArgumentError>()));
        expect(() => readCallback.call([state]), throwsArgumentError);
      } finally {
        readCallback.release();
        writeState.release();
        readState.release();
        state.release();
      }
      final widget = first.runtime.evaluate(
        'extensionHooks.values.widget',
      ) as FlaxJsObject;
      final writeWidget = second.runtime.evaluate(
        'extensions.ReferenceValues.setGlobalWidget',
      ) as FlaxJsFunction;
      try {
        expect(() => writeWidget.call([widget]), throwsA(isA<ArgumentError>()));
      } finally {
        writeWidget.release();
        widget.release();
      }
    } finally {
      fixture.globalContext = previousContext;
      await first.finish(tester);
      await second.finish(tester);
    }
  });
}
