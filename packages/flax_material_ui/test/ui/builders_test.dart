import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart' show Harness, host, registry;
import '../support/test_module.dart';
import '../support/runtime_tracker.dart';

final builderSource = flaxTestFixtureSource('builders');

Widget app(
  Harness h, {
  TextDirection direction = TextDirection.ltr,
  double width = 400,
  String? code,
}) => MaterialApp(
  home: Scaffold(
    body: Directionality(
      textDirection: direction,
      child: SizedBox(
        width: width,
        child: h.view(code: code ?? builderSource),
      ),
    ),
  ),
);

void main() {
  testWidgets(
    'real build and layout callbacks inherit dependencies and preserve context identity',
    (t) async {
      final h = Harness();
      await t.pumpWidget(app(h));
      expect(h.errors, isEmpty);
      expect(find.text('LTR'), findsOneWidget);
      expect(find.text('Width 400'), findsOneWidget);
      expect(h.number('hooks.builds'), 1);
      expect(h.number('hooks.layouts'), 1);
      expect(
        h.number(
          'Number(hooks.context === hooks.latest && hooks.context.mounted)',
        ),
        1,
      );
      final state = t.state(host(1));
      final staticWidget = t.widget(find.text('Static'));
      await t.pumpWidget(app(h, direction: TextDirection.rtl));
      expect(find.text('RTL'), findsOneWidget);
      expect(h.number('hooks.builds'), 2);
      expect(h.number('Number(hooks.context === hooks.latest)'), 1);
      expect(t.state(host(1)), same(state));
      expect(t.widget(find.text('Static')), same(staticWidget));
      await t.tap(find.text('Read context'));
      await t.pump();
      expect(find.text('Count 2'), findsOneWidget);
      final builds = h.number('hooks.builds');
      final layouts = h.number('hooks.layouts');
      await t.pumpWidget(app(h, direction: TextDirection.rtl, width: 300));
      expect(find.text('Width 300'), findsOneWidget);
      expect(h.number('hooks.layouts'), layouts + 1);
      expect(h.number('hooks.builds'), builds);
      expect(h.number('Number(Object.isFrozen(hooks.constraints))'), 1);
      expect(h.number('hooks.constraints.maxHeight'), double.infinity);
      expect(h.runtimes, hasLength(1));
      await t.pumpWidget(const SizedBox());
      expect(h.runtime.isDisposed, isTrue);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'builder replacement, failures and keyed children retain valid state',
    (t) async {
      final h = Harness();
      await t.pumpWidget(app(h));
      final state = t.state(host(1));
      h.execute('hooks.items.value = [2, 1, 3]');
      await t.pump();
      expect(t.state(host(1)), same(state));
      h.execute(
        'hooks.callback.value = c => { throw Error("replacement failed"); }',
      );
      await t.pump();
      expect(find.text('LTR'), findsOneWidget);
      expect(t.state(host(1)), same(state));
      expect(h.errors, hasLength(1));
      h.execute('hooks.callback.value = hooks.builder');
      await t.pump();
      expect(h.number('Number(hooks.context === hooks.latest)'), 1);
      for (final mode in ['throw', 'promise', 'duplicate']) {
        h.execute(
          'hooks.mode.value = "$mode"; hooks.callback.value = c => hooks.builder(c)',
        );
        await t.pump();
        expect(find.text('LTR'), findsOneWidget);
        expect(t.state(host(1)), same(state));
      }
      expect(h.errors, hasLength(4));
      h.execute(
        'hooks.mode.value = "valid"; hooks.callback.value = hooks.builder',
      );
      await t.pump();
      expect(h.number('hooks.active'), 1);
      h.execute('hooks.visible.value = false');
      await t.pump();
      expect(h.number('hooks.active'), 0);
      expect(h.number('Number(hooks.context.mounted)'), 0);
      expect(
        () => h.execute('hooks.lookup()'),
        throwsA(isA<FlaxJsException>()),
      );
      h.execute('hooks.visible.value = true');
      await t.pump();
      expect(
        h.number(
          'Number(hooks.context !== hooks.latest && hooks.latest.mounted)',
        ),
        1,
      );
      expect(h.number('hooks.active'), 1);
      await t.pumpWidget(const SizedBox());
      expect(h.runtime.isDisposed, isTrue);
    },
  );

  testWidgets(
    'the same descriptor and JS callback own independent mounted results',
    (t) async {
      final h = Harness();
      await t.pumpWidget(
        app(h, code: 'globalThis.scenario = "shared";\n$builderSource'),
      );
      expect(h.number('hooks.active'), 2);
      expect(h.number('hooks.contexts.length'), 2);
      expect(find.text('Count 0'), findsNWidgets(2));
      h.execute('hooks.visible.value = false');
      await t.pump();
      expect(h.number('hooks.active'), 1);
      expect(
        h.number(
          'Number(hooks.contexts[0].mounted && !hooks.contexts[1].mounted)',
        ),
        1,
      );
      h.execute('hooks.count.value = 5');
      await t.pump();
      expect(find.text('Count 5'), findsOneWidget);
      h.execute('hooks.visible.value = true');
      await t.pump();
      expect(find.text('Count 5'), findsNWidgets(2));
      expect(h.number('hooks.active'), 2);
      await t.pumpWidget(const SizedBox());
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'layout failures recover and layout invalidations wait until the next frame',
    (t) async {
      final h = Harness();
      await t.pumpWidget(app(h));
      h.execute('hooks.mode.value = "layout-throw"');
      await t.pumpWidget(app(h, width: 300));
      expect(find.text('Width 400'), findsOneWidget);
      expect(h.errors, hasLength(1));
      h.execute('hooks.mode.value = "write-during-layout"');
      await t.pumpWidget(app(h, width: 320));
      expect(find.text('Width 320'), findsOneWidget);
      expect(find.text('Count 0'), findsOneWidget);
      h.execute('hooks.mode.value = "valid"');
      await t.pump();
      expect(find.text('Count 1'), findsOneWidget);
      final layouts = h.number('hooks.layouts');
      await t.pumpWidget(app(h, width: 320));
      expect(h.number('hooks.layouts'), layouts);
      h.execute(
        'hooks.mode.value = "write-during-build"; hooks.callback.value = c => hooks.builder(c)',
      );
      await t.pump();
      expect(find.text('Count 1'), findsOneWidget);
      h.execute('hooks.mode.value = "valid"');
      await t.pump();
      expect(find.text('Count 2'), findsOneWidget);
      expect(h.errors, hasLength(1));
      await t.pumpWidget(const SizedBox());
    },
  );

  testWidgets(
    'initial builder failure recovers and source replacement disposes old contexts',
    (t) async {
      final h = Harness();
      final code = '$builderSource\nhooks.mode.value = "throw";';
      await t.pumpWidget(app(h, code: code));
      expect(find.byType(ErrorWidget), findsOneWidget);
      expect(h.errors, hasLength(1));
      h.execute(
        'hooks.mode.value = "valid"; hooks.callback.value = c => hooks.builder(c)',
      );
      await t.pump();
      expect(find.text('LTR'), findsOneWidget);
      final old = h.runtime;
      await t.pumpWidget(app(h));
      expect(old.isDisposed, isTrue);
      expect(h.runtimes, hasLength(2));
      expect(h.number('hooks.active'), 1);
      await t.pumpWidget(const SizedBox());
      await t.pumpWidget(app(h, code: '__flaxMount({}, 1)'));
      expect(h.errors.last.toString(), contains('protocol'));
      expect(h.runtime.isDisposed, isTrue);
      await t.pumpWidget(const SizedBox());
    },
  );

  testWidgets(
    'repeated rebuilds release native handles and constraint reads avoid member calls',
    (t) async {
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      final view = FlaxView(
        createRuntime: () => runtime,
        source: builderSource,
        bindings: registry,
        onError: (error, _) => errors.add(error),
      );
      Widget trackedApp(TextDirection direction) => MaterialApp(
        home: Scaffold(
          body: Directionality(
            textDirection: direction,
            child: SizedBox(width: 400, child: view),
          ),
        ),
      );
      void execute(String source) {
        final value = runtime.evaluate(source);
        if (value is FlaxJsObject) value.release();
      }

      await t.pumpWidget(trackedApp(TextDirection.ltr));
      await t.pumpWidget(trackedApp(TextDirection.rtl));
      final baseline = runtime.handles;
      final calls = runtime.hostCalls['__flaxCall'] ?? 0;
      for (var i = 0; i < 100; i++) {
        await t.pumpWidget(
          trackedApp(i.isEven ? TextDirection.ltr : TextDirection.rtl),
        );
        expect(
          runtime.handles,
          baseline,
          reason: 'Owned handles grew at rebuild $i',
        );
      }
      expect(runtime.hostCalls['__flaxCall'], calls + 100);
      final getters = runtime.hostCalls['__flaxGet'] ?? 0;
      execute(
        'for (let i = 0; i < 1000; i++) { if (hooks.constraints.maxWidth !== 400) throw Error("width"); }',
      );
      expect(runtime.hostCalls['__flaxGet'] ?? 0, getters);
      execute('hooks.visible.value = false');
      await t.pump();
      final unmounted = runtime.handles;
      for (var i = 0; i < 20; i++) {
        execute('hooks.visible.value = true');
        await t.pump();
        execute('hooks.visible.value = false');
        await t.pump();
        expect(runtime.handles, unmounted);
      }
      await t.pumpWidget(const SizedBox());
      expect(runtime.handlesAtDispose, 0);
      expect(errors, isEmpty);
      // Evidence for the task handoff; counts wrap the real runtime.
      // ignore: avoid_print
      print(
        'Builder cost: $baseline steady handles; 100 rebuilds / 100 member calls; '
        '1000 constraint reads / 0 getter calls; 0 handles before engine disposal.',
      );
    },
  );

  testWidgets('inactive context queries fail before the element is unmounted', (
    t,
  ) async {
    final h = Harness();
    final bindings = FlaxBindingRegistry([
      ...registry.modules,
      testBindingModule('lifecycle', [
        FlaxWidgetBinding('test:Lifecycle', {'': []}, _LifecycleHost.new),
      ]),
    ]);
    final view = FlaxView(
      createRuntime: h.create,
      source: 'globalThis.scenario = "probe";\n$builderSource',
      bindings: bindings,
      onError: (e, _) => h.errors.add(e),
    );
    await t.pumpWidget(MaterialApp(home: Scaffold(body: view)));
    var deactivations = 0;
    onDeactivate = () {
      deactivations++;
      expect(h.number('Number(hooks.context.mounted)'), 1);
      expect(
        () => h.execute('hooks.lookup()'),
        throwsA(isA<FlaxJsException>()),
      );
    };
    addTearDown(() => onDeactivate = null);
    h.execute('hooks.visible.value = false');
    await t.pump();
    expect(deactivations, 1);
    expect(h.number('Number(hooks.context.mounted)'), 0);
    expect(h.errors, isEmpty);
    await t.pumpWidget(const SizedBox());
  });

  testWidgets(
    'two engine realms reject foreign context references and remain isolated',
    (t) async {
      final a = Harness();
      final b = Harness();
      Widget regions(bool left) => MaterialApp(
        home: Scaffold(
          body: Row(
            children: [
              Expanded(
                child: left
                    ? a.view(code: builderSource, key: const ValueKey('a'))
                    : const SizedBox(),
              ),
              Expanded(
                child: b.view(code: builderSource, key: const ValueKey('b')),
              ),
            ],
          ),
        ),
      );
      await t.pumpWidget(regions(true));
      final foreign = a.runtime.evaluate('hooks.context') as FlaxJsObject;
      final read = b.runtime.evaluate('(c) => c.mounted') as FlaxJsFunction;
      try {
        expect(() => read.call([foreign]), throwsArgumentError);
      } finally {
        foreign.release();
        read.release();
      }
      a.execute('hooks.count.value = 7');
      await t.pump();
      expect(find.text('Count 7'), findsOneWidget);
      expect(find.text('Count 0'), findsOneWidget);
      await t.pumpWidget(regions(false));
      expect(a.runtime.isDisposed, isTrue);
      expect(b.number('Number(hooks.context.mounted)'), 1);
      await t.tap(find.text('Read context'));
      await t.pump();
      expect(find.text('Count 1'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      expect(a.errors, isEmpty);
      expect(b.errors, isEmpty);
    },
  );
}

void Function()? onDeactivate;

class _LifecycleHost extends FlaxWidgetHost {
  _LifecycleHost(super.node);
  @override
  Widget buildNative(Map<String, Object?> values) => const _LifecycleProbe();
}

class _LifecycleProbe extends StatefulWidget {
  const _LifecycleProbe();
  @override
  State<_LifecycleProbe> createState() => _LifecycleState();
}

class _LifecycleState extends State<_LifecycleProbe> {
  @override
  Widget build(BuildContext context) => const SizedBox();
  @override
  void deactivate() {
    onDeactivate?.call();
    super.deactivate();
  }
}
