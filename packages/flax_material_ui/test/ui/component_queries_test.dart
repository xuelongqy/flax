import 'package:flax/flax.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart';
import '../support/runtime_tracker.dart';

FlaxSession makeSession(Harness h, String code) => FlaxSession(
  createRuntime: h.create,
  source: '${flaxTestFixtureSource('components')}\n$code',
  bindings: registry,
  onError: (error, _) => h.errors.add(error),
);

Type componentType(FlaxSession session, Harness h, String expression) {
  final constructor = h.runtime.evaluate(expression) as FlaxJsFunction;
  try {
    return session.componentType(constructor);
  } finally {
    constructor.release();
  }
}

void main() {
  testWidgets('protocol 10 helpers are rejected before component mounting', (
    t,
  ) async {
    final h = Harness();
    await t.pumpWidget(
      h.app(
        code: '''${flaxTestFixtureSource('components')}
globalThis.__flaxBindings = {...globalThis.__flaxBindings, version: 11};
componentApi.runApp(new componentApi.Caption('old protocol'));
''',
      ),
    );
    expect(
      h.errors.single.toString(),
      contains('Incompatible JS binding helpers'),
    );
    expect(h.runtime.isDisposed, isTrue);
    expect(find.text('old protocol:ltr'), findsNothing);
    await t.pumpWidget(const SizedBox());
  });

  testWidgets(
    'Type tokens drive native finders without constructing components',
    (t) async {
      final h = Harness();
      final session = makeSession(h, '''
var constructions = 0;
var Label = class Label extends componentApi.StatelessWidget {
  constructor(options) { super(options); constructions++; }
  build() { return componentApi.SizedBox({width: 120, height: 40}); }
}
var OtherLabel = class Label extends componentApi.StatelessWidget {
  build() { return componentApi.Text('other'); }
};
var Unused = class Unused extends Label { constructor() { super(); throw new Error('must not construct'); } }
componentApi.runApp(componentApi.Column({children: [new Label(), new Label({key: componentApi.ValueKey('label')})]}));
''');
      await t.pumpWidget(MaterialApp(home: FlaxView.session(session: session)));
      final type = componentType(session, h, 'Label');
      expect(componentType(session, h, 'Label'), same(type));
      expect(componentType(session, h, 'OtherLabel'), isNot(type));
      expect(type.toString(), startsWith('Label@'));
      expect(
        componentType(session, h, 'OtherLabel').toString(),
        startsWith('Label@'),
      );
      expect(find.byType(type), findsNWidgets(2));
      expect(find.byType(componentType(session, h, 'Unused')), findsNothing);
      expect(h.number('constructions'), 2);
      expect(t.getSize(find.byType(type).first), const Size(120, 40));
      expect(t.getRect(find.byType(type).last).size, const Size(120, 40));
      expect(
        t.widget(find.byKey(const ValueKey('label'))).runtimeType,
        same(type),
      );
      expect(t.widget(find.byType(type).first).key, isNull);
      // The generated SizedBox host is the direct child; there is no component boundary.
      final element = find.byType(type).first.evaluate().single;
      final children = <Element>[];
      element.visitChildren(children.add);
      expect(children.single.widget, isA<FlaxWidgetHost>());
      for (final source in [
        'componentApi.StatefulWidget',
        'componentApi.Text',
        '(function plain() {})',
      ]) {
        expect(
          () => componentType(session, h, source),
          throwsA(isA<FlaxJsException>()),
        );
      }
      final function = h.runtime.evaluate('Label') as FlaxJsFunction;
      final unloaded = makeSession(Harness(), '');
      expect(() => unloaded.componentType(function), throwsStateError);
      function.release();
      await unloaded.close();
      await t.pumpWidget(const SizedBox());
      await session.close();
      expect(type.toString(), startsWith('Label@'));
      expect(h.errors, isEmpty);
      expect(h.runtime.isDisposed, isTrue);
    },
  );

  testWidgets('type identities and constructor references stay session-local', (
    t,
  ) async {
    final a = Harness();
    final b = Harness();
    const code = 'componentApi.runApp(new componentApi.Caption("shared"));';
    final first = makeSession(a, code);
    final second = makeSession(b, code);
    await t.pumpWidget(
      MaterialApp(
        home: Row(
          children: [
            Expanded(child: FlaxView.session(session: first)),
            Expanded(child: FlaxView.session(session: second)),
          ],
        ),
      ),
    );
    final typeA = componentType(first, a, 'componentApi.Caption');
    final typeB = componentType(second, b, 'componentApi.Caption');
    expect(typeA, isNot(typeB));
    expect(find.byType(typeA), findsOneWidget);
    expect(find.byType(typeB), findsOneWidget);
    final foreign =
        b.runtime.evaluate('componentApi.Caption') as FlaxJsFunction;
    expect(() => first.componentType(foreign), throwsArgumentError);
    foreign.release();
    final retired =
        a.runtime.evaluate('componentApi.Caption') as FlaxJsFunction;
    await t.pumpWidget(const SizedBox());
    await first.close();
    await second.close();
    expect(() => first.componentType(retired), throwsStateError);
    expect(a.errors, isEmpty);
    expect(b.errors, isEmpty);
  });

  testWidgets(
    'ancestor queries return nearest original configurations and do not subscribe',
    (t) async {
      final h = Harness();
      final session = makeSession(h, '''
var contexts = [], found = [], builds = 0, changed = componentApi.signal(1);
var Outer = class Outer extends componentApi.StatelessWidget {
  constructor(value, child) { super(); this.value = value; this.child = child; }
  build(context) { contexts.push(context); return this.child; }
}
var Derived = class Derived extends Outer {}
var Missing = class Missing extends Outer {}
var Reader = class Reader extends componentApi.StatelessWidget {
  build(context) {
    builds++;
    contexts.push(context);
    found.push(context.findAncestorWidgetOfExactType(Outer));
    if (context.findAncestorWidgetOfExactType(Reader) !== null) throw new Error('included self');
    if (context.findAncestorWidgetOfExactType(Missing) !== null) throw new Error('constructed missing');
    return componentApi.Text('query');
  }
}
var reader = new Reader();
var nearest = new Outer(2, reader);
var root = new Outer(1, new Derived(3, nearest));
componentApi.runApp(root);
''');
      await t.pumpWidget(MaterialApp(home: FlaxView.session(session: session)));
      expect(h.number('Number(found[0] === nearest)'), 1);
      expect(
        h.number(
          'Number(contexts[0].findAncestorWidgetOfExactType(Outer) === null)',
        ),
        1,
      );
      // Event-time queries use the existing mounted Context and original Widget object.
      expect(
        h.number('contexts[3].findAncestorWidgetOfExactType(Outer).value'),
        2,
      );
      expect(
        h.number('contexts[3].findAncestorWidgetOfExactType(Derived).value'),
        3,
      );
      h.execute('changed.value++');
      await t.pump();
      expect(h.number('builds'), 1);
      await t.pumpWidget(const SizedBox());
      expect(h.number('Number(contexts[3].mounted)'), 0);
      expect(
        () => h.execute('contexts[3].findAncestorWidgetOfExactType(Outer)'),
        throwsA(isA<FlaxJsException>()),
      );
      await session.close();
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'endOfFrame and Context.size measure real layout and handle unmount',
    (t) async {
      final h = Harness();
      final session = makeSession(h, '''
var measured = [], state;
var Measuring = class Measuring extends componentApi.StatefulWidget {
  createState() { return new MeasuringState(); }
}
var MeasuringState = class MeasuringState extends componentApi.State {
  initState() { super.initState(); state = this; this.readLater(); }
  async readLater() {
    await componentApi.SchedulerBinding.instance.endOfFrame;
    if (!this.mounted) { measured.push('unmounted'); return; }
    const size = this.context.size;
    measured.push([size.width, size.height]);
  }
  build() { return componentApi.SizedBox({width: 120, height: 60}); }
}
componentApi.runApp(new Measuring());
''');
      Widget tree(double width) => MaterialApp(
        home: Center(
          child: SizedBox(
            width: width,
            height: 90,
            child: FlaxView.session(session: session),
          ),
        ),
      );
      await t.pumpWidget(tree(180));
      await t.pumpAndSettle();
      expect(h.number('measured[0][0]'), 180);
      expect(h.number('measured[0][1]'), 90);
      expect(
        t.getSize(find.byType(componentType(session, h, 'Measuring'))),
        const Size(180, 90),
      );
      await t.pumpWidget(tree(240));
      h.execute('state.readLater(); state.readLater();');
      await t.pumpAndSettle();
      expect(h.number('measured.length'), 3);
      expect(h.number('measured[2][0]'), 240);
      h.execute('state.readLater()');
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      expect(h.number('Number(measured[3] === "unmounted")'), 1);
      await session.close();
      expect(h.errors, isEmpty);
    },
  );

  testWidgets(
    'ancestor configurations update without rebuilding an unchanged child',
    (t) async {
      final h = Harness();
      final session = makeSession(h, '''
var context, builds = 0, inactive = 0;
var Parent = class Parent extends componentApi.StatelessWidget {
  constructor(value, child) { super(); this.value = value; this.child = child; }
  build() { return this.child; }
};
var Child = class Child extends componentApi.StatefulWidget {
  createState() { return new ChildState(); }
};
class ChildState extends componentApi.State {
  build(c) { context = c; builds++; return componentApi.Text('unchanged'); }
  deactivate() {
    try { context.findAncestorWidgetOfExactType(Parent); } catch (_) { inactive++; }
    super.deactivate();
  }
  dispose() {
    try { context.findAncestorWidgetOfExactType(Parent); } catch (_) { inactive++; }
    super.dispose();
  }
}
var child = new Child();
var parent = componentApi.signal(new Parent(1, child));
componentApi.runApp(componentApi.Center({child: parent.bind}));
''');
      await t.pumpWidget(MaterialApp(home: FlaxView.session(session: session)));
      expect(
        h.number('context.findAncestorWidgetOfExactType(Parent).value'),
        1,
      );
      h.execute('parent.value = new Parent(2, child)');
      await t.pump();
      expect(
        h.number('context.findAncestorWidgetOfExactType(Parent).value'),
        2,
      );
      expect(
        h.number(
          'Number(context.findAncestorWidgetOfExactType(Parent) === parent.value)',
        ),
        1,
      );
      expect(h.number('builds'), 1);
      await t.pumpWidget(const SizedBox());
      expect(h.number('inactive'), 2);
      await session.close();
      expect(h.errors, isEmpty);
    },
  );

  testWidgets('Context.size preserves native build and non-RenderBox errors', (
    t,
  ) async {
    final h = Harness();
    Object? nativeBuildError;
    BuildContext? nativeSliver;
    final session = makeSession(h, '''
var buildError = '', sliverContext;
var Probe = class Probe extends componentApi.StatelessWidget {
  build(context) {
    try { context.size; } catch (e) { buildError = String(e); }
    return componentApi.ListView.builder({itemCount: 3, itemExtent: 20,
      itemBuilder: (context, index) => { sliverContext = context; return componentApi.SizedBox({height: 20}); }
    });
  }
};
componentApi.runApp(new Probe());
''');
    await t.pumpWidget(
      MaterialApp(
        home: Row(
          children: [
            Expanded(
              child: SizedBox(
                height: 100,
                child: Builder(
                  builder: (context) {
                    try {
                      context.size;
                    } catch (error) {
                      nativeBuildError = error;
                    }
                    return ListView.builder(
                      itemCount: 3,
                      itemExtent: 20,
                      itemBuilder: (context, index) {
                        nativeSliver = context;
                        return const SizedBox(height: 20);
                      },
                    );
                  },
                ),
              ),
            ),
            Expanded(
              child: SizedBox(
                height: 100,
                child: FlaxView.session(session: session),
              ),
            ),
          ],
        ),
      ),
    );
    expect(nativeBuildError.toString(), contains('during build'));
    expect(h.number('Number(buildError.includes("during build"))'), 1);
    expect(() => nativeSliver!.size, throwsA(isA<FlutterError>()));
    expect(
      () => h.execute('sliverContext.size'),
      throwsA(isA<FlaxJsException>()),
    );
    await t.pumpWidget(const SizedBox());
    await session.close();
    expect(h.errors, isEmpty);
  });

  testWidgets('type reads do not cross the bridge or grow retained resources', (
    t,
  ) async {
    final runtime = RuntimeTracker();
    final errors = <Object>[];
    final session = FlaxSession(
      createRuntime: () => runtime,
      source: '''${flaxTestFixtureSource('components')}
componentApi.runApp(new componentApi.Counter('types'));
''',
      bindings: registry,
      onError: (error, _) => errors.add(error),
    );
    await t.pumpWidget(MaterialApp(home: FlaxView.session(session: session)));
    final constructor =
        runtime.evaluate('componentApi.Counter') as FlaxJsFunction;
    final type = session.componentType(constructor);
    final widget = t.widget(find.byType(type));
    final calls = Map<String, int>.from(runtime.jsCalls);
    final hostCalls = Map<String, int>.from(runtime.hostCalls);
    final handles = runtime.handles;
    for (var i = 0; i < 1000; i++) {
      expect(widget.runtimeType, same(type));
    }
    expect(runtime.jsCalls, calls);
    expect(runtime.hostCalls, hostCalls);
    expect(runtime.handles, handles);
    for (var i = 0; i < 30; i++) {
      expect(session.componentType(constructor), same(type));
    }
    expect(runtime.handles, handles);
    constructor.release();
    await t.pumpWidget(const SizedBox());
    await session.close();
    expect(runtime.handlesAtDispose, 0);
    expect(errors, isEmpty);
    // Test-only cost evidence.
    // ignore: avoid_print
    print(
      'Component types: 1000 runtimeType reads, zero bridge calls; 30 lookups, stable handles; zero handles at disposal.',
    );
  });

  testWidgets('closing rejects frame waits and ignores their late completion', (
    t,
  ) async {
    final h = Harness();
    final session = makeSession(h, '''
var delivered = 0, cancelled = 0;
componentApi.runApp(new componentApi.Caption('closing'));
''');
    await t.pumpWidget(MaterialApp(home: FlaxView.session(session: session)));
    h.execute(
      'componentApi.SchedulerBinding.instance.endOfFrame.then(() => delivered++, error => { if (String(error).includes("FlaxSessionClosed")) cancelled++; });',
    );
    final closed = session.close();
    await t.idle();
    expect(h.number('cancelled'), 1);
    expect(h.number('delivered'), 0);
    await t.pump();
    expect(h.number('delivered'), 0);
    await t.pumpWidget(const SizedBox());
    await closed;
    await t.pump();
    expect(h.runtime.isDisposed, isTrue);
    expect(h.errors, isEmpty);
  });
}
