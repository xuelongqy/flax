import 'package:flax/flax.dart';
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
        'var stateView = extensions.StateX(extensionHooks.values.state());',
      );
      expect(
        h.boolean('''
        contextView.isMounted && contextView.same === extensionHooks.context &&
        contextView.through(value => value) === extensionHooks.context &&
        stateView.isMounted && extensions.StateX(stateView.same).isMounted &&
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
      expect(
        () => h.execute('extensions.StateX({mounted: true}).isMounted'),
        throwsA(isA<FlaxJsException>()),
      );
      expect(
        () => h.execute('extensions.ContextX({mounted: true}).isMounted'),
        throwsA(isA<FlaxJsException>()),
      );
    } finally {
      await h.finish(tester);
    }
  });

  testWidgets('extension Context views reject foreign sessions', (
    tester,
  ) async {
    final first = harness();
    final second = harness();
    try {
      await tester.pumpWidget(
        Column(
          children: [
            Expanded(child: first.app('extensions')),
            Expanded(child: second.app('extensions')),
          ],
        ),
      );
      expect([...first.errors, ...second.errors], isEmpty);
      final context =
          first.runtime.evaluate('extensionHooks.context') as FlaxJsObject;
      final read = second.runtime.evaluate(
        '(value) => extensions.ContextX(value).isMounted',
      ) as FlaxJsFunction;
      try {
        expect(() => read.call([context]), throwsA(isA<ArgumentError>()));
      } finally {
        read.release();
        context.release();
      }
    } finally {
      await first.finish(tester);
      await second.finish(tester);
    }
  });
}
