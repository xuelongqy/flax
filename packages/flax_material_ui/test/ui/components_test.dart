import 'dart:convert';

import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart';
import '../support/runtime_tracker.dart';

String script(String main) => '${flaxTestFixtureSource('components')}\n$main';
Widget app(
  Harness h,
  String code, {
  TextDirection direction = TextDirection.ltr,
  Key? moveKey,
}) => MaterialApp(
  home: Scaffold(
    body: Directionality(
      textDirection: direction,
      child: KeyedSubtree(
        key: moveKey,
        child: h.view(code: code),
      ),
    ),
  ),
);
void main() {
  testWidgets(
    'lifecycle ordering matches a native State through updates and dependencies',
    (t) async {
      final h = Harness();
      final events = <String>[];
      var native = _NativeLifecycle(events, 1);
      final session = FlaxSession(
        createRuntime: h.create,
        bindings: registry,
        onError: (e, _) => h.errors.add(e),
        source: script("""
var selected = componentApi.signal(new componentApi.Counter('a', 1));
componentApi.runApp(componentApi.Center({child: selected.bind}));
"""),
      );
      Widget tree(TextDirection direction) => MaterialApp(
        home: Scaffold(
          body: Directionality(
            textDirection: direction,
            child: Row(
              children: [
                SizedBox(width: 350, child: native),
                SizedBox(width: 350, child: FlaxView.session(session: session)),
              ],
            ),
          ),
        ),
      );
      void compare() => expect(
        jsonDecode(
          (h.runtime.evaluate(
            'JSON.stringify(componentHooks.events)',
          ) as FlaxJsString).value,
        ),
        events,
      );
      await t.pumpWidget(tree(TextDirection.ltr));
      compare();
      native = _NativeLifecycle(events, 2);
      h.execute('selected.value = new componentApi.Counter("a", 2);');
      await t.pumpWidget(tree(TextDirection.ltr));
      compare();
      await t.pumpWidget(tree(TextDirection.rtl));
      compare();
      await t.pumpWidget(const SizedBox());
      compare();
      expect(h.errors, isEmpty);
      await session.close();
      expect(h.runtime.isDisposed, isTrue);
    },
  );

  testWidgets(
    'real State lifecycle, synchronous setState and independent signals',
    (t) async {
      final h = Harness();
      final code = script(
        'componentApi.runApp(new componentApi.Counter("a", 3));',
      );
      await t.pumpWidget(app(h, code));
      expect(h.errors, isEmpty);
      expect(find.text('a:3:ltr'), findsOneWidget);
      expect(h.number('componentHooks.states[0].builds'), 1);
      expect(
        h.number(
          'Number(componentHooks.states[0].context === componentHooks.states[0].latestContext)',
        ),
        1,
      );
      final staticWidget = t.widget(find.text('static'));
      h.execute(
        'componentHooks.states[0].detail.value = "changed"; componentHooks.states[0].detail.value = "final"',
      );
      await t.pump();
      expect(find.text('final'), findsOneWidget);
      expect(h.number('componentHooks.states[0].builds'), 1);
      expect(t.widget(find.text('static')), same(staticWidget));
      await t.tap(find.text('inc:a'));
      expect(h.number('componentHooks.states[0].count'), 4);
      expect(find.text('a:3:ltr'), findsOneWidget);
      await t.pump();
      expect(find.text('a:4:ltr'), findsOneWidget);
      h.execute(
        'var s = componentHooks.states[0]; s.setState(() => s.count++); s.setState(() => s.count++);',
      );
      await t.pump();
      expect(h.number('s.builds'), 3);
      expect(find.text('a:6:ltr'), findsOneWidget);
      await t.pumpWidget(app(h, code, direction: TextDirection.rtl));
      expect(find.text('a:6:rtl'), findsOneWidget);
      expect(h.number('componentHooks.states.length'), 1);
      expect(h.number('Number(Object.isFrozen(s.widget))'), 1);
      await t.pumpWidget(const SizedBox());
      expect(h.runtime.isDisposed, isTrue);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'State variants pass real Dart mixin capabilities and expire on dispose',
    (t) async {
      final h = Harness();
      await t.pumpWidget(
        h.app(
          code: script('''
var retainedVariantState;
var retainedPlainState;
class AnimatedState extends componentApi.SingleTickerProviderState {
  initState() {
    super.initState();
    retainedVariantState = this;
    this.controller = componentApi.TickerProviderProbe({vsync: this});
  }
  build() { return componentApi.Text('variant'); }
  dispose() {
    this.controller.dispose();
    super.dispose();
  }
}
class Animated extends componentApi.StatefulWidget {
  createState() { return new AnimatedState(); }
}
class PlainState extends componentApi.State {
  initState() { super.initState(); retainedPlainState = this; }
  build() { return componentApi.Text('plain'); }
}
class Plain extends componentApi.StatefulWidget {
  createState() { return new PlainState(); }
}
var variantRoot = componentApi.signal(componentApi.Column({
  children: [new Animated(), new Plain()],
}));
componentApi.runApp(componentApi.Center({child: variantRoot.bind}));
'''),
        ),
      );
      expect(find.text('variant'), findsOneWidget);
      expect(find.text('plain'), findsOneWidget);
      expect(h.errors, isEmpty);

      h.execute('''
var plainStateRejected = false;
try {
  var invalidProbe = componentApi.TickerProviderProbe({vsync: retainedPlainState});
  invalidProbe.dispose();
} catch (_) {
  plainStateRejected = true;
}
''');
      expect(h.number('Number(plainStateRejected)'), 1);

      h.execute("variantRoot.value = componentApi.Text('gone');");
      await t.pump();
      expect(find.text('gone'), findsOneWidget);
      h.execute('''
var disposedVariantRejected = false;
try {
  componentApi.TickerProviderProbe({vsync: retainedVariantState});
} catch (_) {
  disposedVariantRejected = true;
}
''');
      expect(h.number('Number(disposedVariantRejected)'), 1);
      expect(h.errors, isEmpty);
      await t.pumpWidget(const SizedBox());
      expect(h.runtime.isDisposed, isTrue);
    },
  );

  testWidgets(
    'configuration updates, type keys and multiple mounts keep the right State',
    (t) async {
      final h = Harness();
      final code = script('''
var {Counter, Column, signal, ValueKey, runApp} = componentApi;
var shared = new Counter('same', 1);
var children = signal([shared, shared]);
runApp(Column({children: children.bind}));
''');
      await t.pumpWidget(app(h, code));
      expect(find.text('same:1:ltr'), findsNWidgets(2));
      expect(h.number('componentHooks.states.length'), 2);
      h.execute(
        'componentHooks.states[0].setState(() => componentHooks.states[0].count = 9)',
      );
      await t.pump();
      expect(find.text('same:9:ltr'), findsOneWidget);
      h.execute(
        'children.value = [new Counter("same", 2), new Counter("same", 3)]',
      );
      await t.pump();
      expect(h.number('componentHooks.states.length'), 2);
      expect(find.text('same:9:ltr'), findsOneWidget);
      expect(
        h.number('Number(componentHooks.events.includes("same:update:1->2"))'),
        1,
      );
      h.execute(
        'children.value = [new Counter("same", 5, {key: ValueKey("new")})]',
      );
      await t.pump();
      expect(h.number('componentHooks.states.length'), 3);
      expect(find.text('same:5:ltr'), findsOneWidget);
      expect(h.number('Number(componentHooks.states[0].mounted)'), 0);
      h.execute(
        'var retired = false; try { componentHooks.states[0].setState(() => {}); } catch (_) { retired = true; }',
      );
      expect(h.number('Number(retired)'), 1);
      h.execute(
        'class Other extends Counter {} children.value = [new Other("other", 7, {key: ValueKey("new")})]',
      );
      await t.pump();
      expect(find.text('other:7:ltr'), findsOneWidget);
      expect(h.number('componentHooks.states.length'), 4);
      await t.pumpWidget(const SizedBox());
      expect(h.errors, isEmpty);
    },
  );

  testWidgets('component failures preserve valid results and recover', (
    t,
  ) async {
    final h = Harness();
    await t.pumpWidget(
      h.app(
        code: script('componentApi.runApp(new componentApi.Counter("a"));'),
      ),
    );
    for (final mode in ['throw', 'promise', 'invalid', 'duplicate']) {
      h.execute(
        'componentHooks.fail = "$mode"; componentHooks.states[0].setState(() => {});',
      );
      await t.pump();
      expect(find.text('a:0:ltr'), findsOneWidget);
    }
    expect(h.errors, hasLength(4));
    h.execute(
      'componentHooks.fail = ""; componentHooks.states[0].setState(() => componentHooks.states[0].count = 4);',
    );
    await t.pump();
    expect(find.text('a:4:ltr'), findsOneWidget);
    h.execute('''
var before = componentHooks.states[0].builds;
var errors = [];
try { componentHooks.states[0].setState(() => { componentHooks.states[0].count = 8; throw Error('partial'); }); } catch (e) { errors.push(String(e)); }
try { componentHooks.states[0].setState(async () => {}); } catch (e) { errors.push(String(e)); }
''');
    await t.pump();
    expect(h.number('errors.length'), 2);
    expect(h.number('componentHooks.states[0].builds - before'), 0);
    expect(h.number('componentHooks.states[0].count'), 8);
    await t.pumpWidget(const SizedBox());
  });

  testWidgets(
    'StatelessWidget owns its actual Context and unmounts deterministically',
    (t) async {
      final h = Harness();
      final code = script(
        'componentApi.runApp(new componentApi.Caption("caption"));',
      );
      await t.pumpWidget(app(h, code));
      expect(find.text('caption:ltr'), findsOneWidget);
      await t.pumpWidget(app(h, code, direction: TextDirection.rtl));
      expect(find.text('caption:rtl'), findsOneWidget);
      expect(h.number('componentHooks.statelessBuilds'), 2);
      await t.pumpWidget(const SizedBox());
      expect(h.runtime.isDisposed, isTrue);
      expect(h.errors, isEmpty);
    },
  );
  testWidgets(
    'State access and dependency checks use the actual Flutter lifecycle',
    (t) async {
      final h = Harness();
      await t.pumpWidget(
        h.app(
          code: script("""
var lifecycleChecks = [];
class EarlyState extends componentApi.State {
  constructor() {
    super();
    lifecycleChecks.push(this.mounted === false);
    for (var name of ['widget', 'context']) { try { this[name]; lifecycleChecks.push(false); } catch (_) { lifecycleChecks.push(true); } }
    try { this.setState(() => {}); lifecycleChecks.push(false); } catch (_) { lifecycleChecks.push(true); }
  }
  initState() {
    super.initState();
    try { componentApi.Theme.of(this.context); lifecycleChecks.push(false); } catch (e) { lifecycleChecks.push(String(e).includes('initState')); }
  }
  build(context) { return componentApi.Text('Lifecycle checks'); }
  dispose() {
    lifecycleChecks.push(this.mounted && !this.context.mounted);
    super.dispose();
  }
}
class Early extends componentApi.StatefulWidget { createState() { return new EarlyState(); } }
componentApi.runApp(new Early());
var noEarlyCallbacks = lifecycleChecks.length === 0;
"""),
        ),
      );
      expect(h.number('Number(noEarlyCallbacks)'), 1);
      expect(
        h.number(
          'Number(lifecycleChecks.length === 5 && lifecycleChecks.every(Boolean))',
        ),
        1,
      );
      expect(h.errors, isEmpty);
      await t.pumpWidget(const SizedBox());
      expect(h.runtime.isDisposed, isTrue);
    },
  );

  testWidgets(
    'GlobalKey movement activates the same component and preserves Context',
    (t) async {
      final h = Harness();
      final key = GlobalKey();
      final code = script(
        'componentApi.runApp(new componentApi.Counter("move"));',
      );
      Widget tree(bool moved) {
        final view = KeyedSubtree(
          key: key,
          child: h.view(code: code),
        );
        return MaterialApp(
          home: Scaffold(
            body: Row(
              children: [
                SizedBox(width: 350, child: moved ? const SizedBox() : view),
                SizedBox(width: 350, child: moved ? view : const SizedBox()),
              ],
            ),
          ),
        );
      }

      await t.pumpWidget(tree(false));
      h.execute('var originalContext = componentHooks.states[0].context;');
      await t.pumpWidget(tree(true));
      expect(h.number('componentHooks.states.length'), 1);
      expect(
        h.number(
          'Number(componentHooks.events.includes("move:deactivate") && componentHooks.events.includes("move:activate"))',
        ),
        1,
      );
      expect(
        h.number(
          'Number(originalContext === componentHooks.states[0].context)',
        ),
        1,
      );
      final reassemble = t.binding.reassembleApplication();
      await t.pump();
      await reassemble;
      expect(
        h.number('Number(componentHooks.events.includes("move:reassemble"))'),
        1,
      );
      await t.pumpWidget(const SizedBox());
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'invalid createState and missing super are observable and still release resources',
    (t) async {
      for (final body in [
        'return {};',
        'return Promise.resolve({});',
        'throw Error("creation failed");',
      ]) {
        final h = Harness();
        await t.pumpWidget(
          h.app(
            code: script('''
class Broken extends componentApi.StatefulWidget { createState() { $body } }
componentApi.runApp(new Broken());
'''),
          ),
        );
        expect(h.errors, hasLength(1));
        expect(find.byType(ErrorWidget), findsOneWidget);
        await t.pumpWidget(const SizedBox());
        expect(h.runtime.isDisposed, isTrue);
      }
      for (final hook in ['initState', 'dispose']) {
        final h = Harness();
        await t.pumpWidget(
          h.app(
            code: script('''
class BrokenState extends componentApi.State {
  $hook() {}
  build() { return componentApi.Text('missing super'); }
}
class Broken extends componentApi.StatefulWidget { createState() { return new BrokenState(); } }
componentApi.runApp(new Broken());
'''),
          ),
        );
        if (hook == 'initState') {
          expect(
            h.errors.single.toString(),
            contains('must call super.initState'),
          );
        }
        await t.pumpWidget(const SizedBox());
        if (hook == 'dispose') {
          expect(
            h.errors.single.toString(),
            contains('must call super.dispose'),
          );
        }
        expect(h.runtime.isDisposed, isTrue);
      }
    },
  );

  testWidgets(
    'repeated State updates and signal writes keep mount resources stable',
    (t) async {
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      final session = FlaxSession(
        createRuntime: () => runtime,
        source: script(
          'componentApi.runApp(new componentApi.Counter("cost"));',
        ),
        bindings: registry,
        onError: (error, _) => errors.add(error),
      );
      await t.pumpWidget(
        MaterialApp(
          home: Scaffold(body: FlaxView.session(session: session)),
        ),
      );
      void execute(String code) {
        final v = runtime.evaluate(code);
        if (v is FlaxJsObject) v.release();
      }

      execute(
        'var cost = componentHooks.states[0]; cost.setState(() => cost.count++);',
      );
      await t.pump();
      final handles = runtime.handles;
      final subscriptions = runtime.activeSubscriptions;
      final staticWidget = t.widget(find.text('static'));
      final rebuilt = <Key?>[];
      debugOnRebuildDirtyWidget = (element, _) {
        if (element.widget is FlaxWidgetHost) rebuilt.add(element.widget.key);
      };
      addTearDown(() => debugOnRebuildDirtyWidget = null);
      for (var i = 0; i < 20; i++) {
        execute('cost.detail.value = "signal $i";');
        await t.pump();
      }
      debugOnRebuildDirtyWidget = null;
      expect(rebuilt, List.filled(20, const ValueKey('cost:detail')));
      expect(t.widget(find.text('static')), same(staticWidget));
      expect((runtime.evaluate('cost.builds') as FlaxJsNumber).value, 2);
      for (var i = 0; i < 30; i++) {
        execute(
          'cost.setState(() => { cost.count++; cost.detail.value = "mixed $i"; });',
        );
        await t.pump();
      }
      expect(runtime.handles, handles);
      expect(runtime.activeSubscriptions, subscriptions);
      var closed = false;
      final closing = session.close().then((_) => closed = true);
      execute('cost.setState(() => cost.count++);');
      await t.pump();
      expect(closed, isFalse);
      await t.pumpWidget(const SizedBox());
      await closing;
      expect(runtime.handlesAtDispose, 0);
      expect(runtime.activeSubscriptions, 0);
      expect(errors, isEmpty);
      // Counts distinguish component builds from property-level signal work.
      debugPrint(
        'Component cost: $handles handles, $subscriptions subscription; 20 signal-only updates rebuild ${rebuilt.length} property hosts; 30 mixed updates; host calls=${runtime.hostCalls}; zero handles at disposal.',
      );
    },
  );

  testWidgets(
    'State build ParentData and same-named classes follow Flutter identity',
    (t) async {
      final h = Harness();
      await t.pumpWidget(
        h.app(
          code: script("""
var {Column, Expanded, SizedBox, Text, ValueKey, signal, runApp, Counter} = componentApi;
var First = class Named extends Counter {};
var Second = class Named extends Counter {};
var choice = signal(new First('first', 1, {key: ValueKey('same')}));
class FillState extends componentApi.State {
  build() { return Expanded({child: SizedBox({key: ValueKey('filled'), child: Text('fill')})}); }
}
class Fill extends componentApi.StatefulWidget { createState() { return new FillState(); } }
runApp(SizedBox({height: 500, child: Column({children: [componentApi.Center({child: choice.bind}), new Fill()]})}));
"""),
        ),
      );
      expect(t.getSize(host('filled')).height, greaterThan(100));
      h.execute(
        'choice.value = new Second("second", 2, {key: ValueKey("same")});',
      );
      await t.pump();
      expect(h.number('componentHooks.states.length'), 2);
      expect(h.number('Number(componentHooks.states[0].mounted)'), 0);
      expect(find.text('second:2:ltr'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'build-time signals defer, while invalid build-time setState keeps Flutter checks',
    (t) async {
      final h = Harness();
      await t.pumpWidget(
        h.app(
          code: script("""
var victim;
var trigger = false;
var scheduling = [];
class LeftState extends componentApi.State {
  initState() { super.initState(); victim = this; }
  build() { return componentApi.Text('left'); }
}
class Left extends componentApi.StatefulWidget { createState() { return new LeftState(); } }
class RightState extends componentApi.CounterState {
  build(context) {
    if (trigger) {
      trigger = false;
      this.detail.value = 'during build';
      try { victim.setState(() => {}); } catch(e) { scheduling.push(String(e)); }
    }
    return super.build(context);
  }
}
class Right extends componentApi.Counter { createState() { return new RightState(); } }
componentApi.runApp(componentApi.Column({children:[new Left(), new Right('right')]}));
"""),
        ),
      );
      h.execute('trigger = true; componentHooks.states[0].setState(() => {});');
      await t.pump();
      expect(h.number('scheduling.length'), 1);
      expect(find.text('ready'), findsOneWidget);
      await t.pump();
      expect(find.text('during build'), findsOneWidget);
      expect(h.errors, isEmpty);
      await t.pumpWidget(const SizedBox());
    },
  );

  testWidgets(
    'Pages and Routes preserve component ownership through eviction and closing',
    (t) async {
      final h = Harness();
      final session = FlaxSession(
        createRuntime: h.create,
        bindings: registry,
        onError: (e, _) => h.errors.add(e),
        source: script('''
var {Counter, MaterialPage, MaterialPageRoute, Navigator, ValueKey, signal, runApp} = componentApi;
var makePage = initial => MaterialPage({key: ValueKey('base'), maintainState: false, child: new Counter('page', initial)});
var pages = signal([makePage(2)]);
runApp(Navigator({pages: pages.bind, onDidRemovePage: page => { pages.value = pages.value.filter(p => p !== page); }}));
'''),
      );
      await t.pumpWidget(
        MaterialApp(
          home: Scaffold(body: FlaxView.session(session: session)),
        ),
      );
      await t.pumpAndSettle();
      h.execute('''
var nav = Navigator.of(componentHooks.states[0].context);
componentHooks.states[0].setState(() => componentHooks.states[0].count = 9);
nav.push(MaterialPageRoute({builder: () => new Counter('route', 4)}));
''');
      await t.pumpAndSettle();
      expect(find.text('route:4:ltr'), findsOneWidget);
      expect(h.number('Number(componentHooks.states[0].mounted)'), 0);
      h.execute('nav.pop();');
      await t.pumpAndSettle();
      expect(find.text('page:2:ltr'), findsOneWidget);
      expect(h.number('componentHooks.states.length'), 3);
      expect(h.number('Number(componentHooks.states[1].mounted)'), 0);
      h.execute('pages.value = [makePage(7)];');
      await t.pumpAndSettle();
      expect(find.text('page:2:ltr'), findsOneWidget);
      expect(h.number('componentHooks.states.length'), 3);
      expect(h.number('componentHooks.states[2].widget.initial'), 7);
      h.execute(
        "nav.push(MaterialPageRoute({builder: () => new Counter('exit', 5)}));",
      );
      await t.pumpAndSettle();
      var closed = false;
      final closing = session.close().then((_) => closed = true);
      h.execute('nav.pop();');
      await t.pump();
      await t.pump(const Duration(milliseconds: 50));
      expect(closed, isFalse);
      expect(h.runtime.isDisposed, isFalse);
      await t.pumpAndSettle();
      expect(find.text('page:7:ltr'), findsOneWidget);
      await t.pumpWidget(const SizedBox());
      await closing;
      expect(h.runtime.isDisposed, isTrue);
      expect(h.errors, isEmpty);
    },
  );

  testWidgets('source replacement disposes State before retiring its engine', (
    t,
  ) async {
    final h = Harness();
    await t.pumpWidget(
      h.app(
        code: script('''
class EditorState extends componentApi.State {
  initState() {
    super.initState();
    this.controller = componentApi.TextEditingController({text: 'owned'});
    this.focus = componentApi.FocusNode();
  }
  build() { return componentApi.TextField({controller: this.controller, focusNode: this.focus}); }
  dispose() {
    this.controller.dispose();
    this.focus.dispose();
    super.dispose();
  }
}
class Editor extends componentApi.StatefulWidget { createState() { return new EditorState(); } }
componentApi.runApp(new Editor());
'''),
      ),
    );
    final field = t.widget<TextField>(find.byType(TextField));
    final oldRuntime = h.runtime;
    await t.pumpWidget(
      h.app(
        code: script('componentApi.runApp(new componentApi.Counter("new"));'),
      ),
    );
    expect(find.text('new:0:ltr'), findsOneWidget);
    expect(h.runtimes, hasLength(2));
    expect(oldRuntime.isDisposed, isTrue);
    expect(() => field.controller!.addListener(() {}), throwsFlutterError);
    expect(() => field.focusNode!.addListener(() {}), throwsFlutterError);
    expect(h.errors, isEmpty);
    await t.pumpWidget(const SizedBox());
    expect(h.runtime.isDisposed, isTrue);
  });

  testWidgets('throwing dispose and reused State cannot retain a session', (
    t,
  ) async {
    for (final body in [
      'throw Error("dispose before super");',
      'super.dispose(); throw Error("dispose after super");',
    ]) {
      final runtime = RuntimeTracker();
      final errors = <Object>[];
      final session = FlaxSession(
        createRuntime: () => runtime,
        bindings: registry,
        onError: (error, _) => errors.add(error),
        source: script('''
class FailingState extends componentApi.State {
  build() { return componentApi.Text('disposed'); }
  dispose() { $body }
}
class Failing extends componentApi.StatefulWidget { createState() { return new FailingState(); } }
componentApi.runApp(new Failing());
'''),
      );
      await t.pumpWidget(MaterialApp(home: FlaxView.session(session: session)));
      final closing = session.close();
      await t.pumpWidget(const SizedBox());
      await closing;
      expect(errors, hasLength(1));
      expect(runtime.handlesAtDispose, 0);
    }
    final h = Harness();
    await t.pumpWidget(
      h.app(
        code: script("""
var reused = new componentApi.CounterState();
class Reused extends componentApi.Counter { createState() { return reused; } }
componentApi.runApp(componentApi.Column({children:[new Reused('a'), new Reused('b')]}));
"""),
      ),
    );
    expect(h.errors, hasLength(1));
    expect(find.text('a:0:ltr'), findsOneWidget);
    expect(find.byType(ErrorWidget), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    expect(h.runtime.isDisposed, isTrue);
  });
}

class _NativeLifecycle extends StatefulWidget {
  const _NativeLifecycle(this.events, this.initial);
  final List<String> events;
  final int initial;
  @override
  State<_NativeLifecycle> createState() => _NativeLifecycleState();
}

class _NativeLifecycleState extends State<_NativeLifecycle> {
  void log(String value) => widget.events.add('a:$value');
  @override
  void initState() {
    log('init:before');
    super.initState();
    log('init:after');
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    log('dependencies');
  }

  @override
  void didUpdateWidget(_NativeLifecycle oldWidget) {
    log('update:${oldWidget.initial}->${widget.initial}');
    super.didUpdateWidget(oldWidget);
  }

  @override
  Widget build(BuildContext context) {
    log('build');
    Directionality.of(context);
    return const Text('native');
  }

  @override
  void deactivate() {
    log('deactivate');
    super.deactivate();
  }

  @override
  void dispose() {
    log('dispose:$mounted/${context.mounted}');
    super.dispose();
  }
}
