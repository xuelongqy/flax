import 'package:flax/flax.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/interop_bindings.dart';
import '../fixtures/extensions.dart' show ExtensionAnchor;
import '../fixtures/interop.dart' as plugin;

import 'package:flax_test/flax_test.dart';

import '../support/owned_harness.dart';

OwnedHarness _harness({void Function(FlaxObjectBinding, Object)? onCreate}) =>
    OwnedHarness(
      fixture: 'proxy_properties',
      extra: [interopBindings],
      onCreate: onCreate,
    );

void main() {
  testWidgets(
    'proxy accessors read current values once and avoid validation reads',
    (t) async {
      final ports = <plugin.PropertyPort>[];
      final h = _harness(
        onCreate: (_, v) {
          if (v is plugin.PropertyPort) ports.add(v);
        },
      );
      try {
        await t.pumpWidget(h.app('properties'));
        h.execute('var port = properties.createPort()');
        expect(h.number('properties.observations.reads'), 0);
        final hostCalls = h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0;
        expect(ports.single.readOnly, 7);
        expect(h.number('properties.observations.reads'), 1);
        expect(h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0, hostCalls);
        expect(h.number('port.readOnly'), 7);
        expect(h.number('properties.observations.reads'), 2);
        expect(
          (h.runtime.hostCalls['__flaxInvokeOperation'] ?? 0) - hostCalls,
          1,
        );
        ports.single.writeOnly = 8;
        h.execute('port.writeOnly = 9');
        expect(h.number('properties.observations.writes'), 2);
        expect(h.runtime.activeSubscriptions, 0);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'super construction dispatches properties after callbacks are initialized',
    (t) async {
      final children = <plugin.PropertyChild>[];
      final h = _harness(
        onCreate: (_, v) {
          if (v is plugin.PropertyChild) children.add(v);
        },
      );
      try {
        await t.pumpWidget(h.app('properties'));
        h.execute('''
        var reads = 0, writes = 0, current;
        var initial = properties.plugin.Token(4);
        var receiver;
        var implementation = Object.create({
          get value() { if (this !== receiver) throw Error('receiver'); reads++; return current; },
          set value(v) { if (this !== receiver) throw Error('receiver'); writes++; current = v; }
        });
        receiver = implementation;
        var child = properties.plugin.PropertyChild.implement([initial], implementation);
      ''');
        expect(h.number('reads'), 1);
        expect(h.number('writes'), 1);
        expect(children.single.observed.value, 4);
        expect(children.single.inherited, 47);
        expect(
          h.boolean('child.observed === initial && child.value === initial'),
          isTrue,
        );
        h.execute('child.value = properties.plugin.Token(6)');
        expect(children.single.value.value, 6);
        expect(h.number('child.observed.value'), 4);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'properties convert references enums collections and typed functions in both directions',
    (t) async {
      final ports = <plugin.PropertyPort>[];
      final h = _harness(
        onCreate: (_, v) {
          if (v is plugin.PropertyPort) ports.add(v);
        },
      );
      try {
        await t.pumpWidget(h.app('properties'));
        h.execute('var port = properties.createPort()');
        final port = ports.single;
        final token = plugin.Token(11);
        port.token = token;
        expect(identical(port.token, token), isTrue);
        h.execute('var saved = port.token');
        expect(h.boolean('port.token === saved'), isTrue);
        port.token = null;
        expect(port.token, isNull);
        port.mode = plugin.Mode.second;
        expect(
          h.boolean('port.mode === properties.plugin.Mode.second'),
          isTrue,
        );
        final items = [token];
        final groups = {'a': items};
        port.items = items;
        port.groups = groups;
        expect(identical(port.items, items), isTrue);
        expect(identical(port.groups, groups), isTrue);
        h.execute('port.items.add(saved)');
        expect(items, hasLength(2));
        h.execute('port.items = [saved]; port.groups = {b: [saved]}');
        expect(port.items.single, same(token));
        expect(port.groups['b']!.single, same(token));
        plugin.Token identity(plugin.Token input) => input;
        port.transform = identity;
        expect(identical(port.transform, identity), isTrue);
        expect(h.boolean('port.transform(saved) === saved'), isTrue);
        h.execute(
          'port.transform = value => properties.plugin.Token(value.value + 1)',
        );
        expect(port.transform(token).value, 12);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'ordinary proxies share Flutter property conversions and validity checks',
    (t) async {
      for (final type in ['FlutterPropertyInterface', 'FlutterPropertyPort']) {
        final ports = <plugin.FlutterPropertyPort>[];
        late State state;
        final h = _harness(
          onCreate: (_, value) {
            if (value is plugin.FlutterPropertyPort) ports.add(value);
          },
        );
        try {
          await t.pumpWidget(
            ExtensionAnchor(
              onState: (value) => state = value,
              child: h.app('properties'),
            ),
          );
          final arguments = type == 'FlutterPropertyPort'
              ? '[null, null, null]'
              : '[]';
          h.execute('''
            var implementation = properties.flutterImplementation();
            var port = properties.plugin.$type.implement($arguments, implementation);
          ''');
          final port = ports.first;
          final initialCalls = type == 'FlutterPropertyPort' ? 3 : 0;
          expect(h.number('implementation.reads'), initialCalls);
          expect(h.number('implementation.writes'), initialCalls);
          final context = state.context;
          const child = Text('Native property widget');
          final children = <Widget?>[child, null];
          port.child = child;
          port.context = context;
          port.state = state;
          port.children = children;
          expect(h.number('implementation.writes'), initialCalls + 4);
          expect(port.child, same(child));
          expect(port.context, same(context));
          expect(port.state, same(state));
          expect(port.children, [same(child), null]);
          expect(h.number('implementation.reads'), initialCalls + 4);
          h.execute('''
            var savedChild = port.child, savedContext = port.context, savedState = port.state;
            port.child = savedChild; port.context = savedContext; port.state = savedState;
            port.children = [savedChild, null];
          ''');
          expect(port.child, same(child));
          expect(port.context, same(context));
          expect(port.state, same(state));
          expect(port.children, [same(child), null]);
          if (type == 'FlutterPropertyInterface') {
            h.execute('''
              var inherited = properties.flutterImplementation();
              properties.plugin.FlutterPropertyPort.implement(
                [savedChild, savedContext, savedState], inherited);
            ''');
            expect(h.number('inherited.reads'), 3);
            expect(h.number('inherited.writes'), 3);
            expect(port.child, same(child));
            expect(port.context, same(context));
            expect(port.state, same(state));
          }
          final writes = h.number('implementation.writes');
          for (final code in [
            'port.child = {}',
            'port.child = undefined',
            'port.context = savedChild',
            'port.context = undefined',
            'port.state = savedContext',
            'port.state = undefined',
            'port.children = [savedContext]',
          ]) {
            expect(
              () => h.execute(code),
              throwsA(isA<FlaxJsException>()),
              reason: code,
            );
          }
          expect(h.number('implementation.writes'), writes);
          for (final read in <String, Object? Function()>{
            'child': () => port.child,
            'context': () => port.context,
            'state': () => port.state,
          }.entries) {
            h.execute('implementation.${read.key} = {};');
            expect(
              read.value,
              read.key == 'context'
                  ? throwsA(isA<FlaxJsException>())
                  : throwsArgumentError,
              reason: read.key,
            );
            h.execute('implementation.${read.key} = null;');
            expect(read.value(), isNull);
          }
          port.context = context;
          port.state = state;
          await t.pumpWidget(h.app('properties'));
          expect(state.mounted, isFalse);
          expect(() => port.context, throwsA(isA<FlaxJsException>()));
          expect(() => port.state, throwsStateError);
          final beforeStaleWrites = h.number('implementation.writes');
          expect(() => port.context = context, throwsStateError);
          expect(() => port.state = state, throwsStateError);
          expect(h.number('implementation.writes'), beforeStaleWrites);
          port.context = null;
          port.state = null;
          expect(port.context, isNull);
          expect(port.state, isNull);
          expect(h.errors, isEmpty);
        } finally {
          await h.finish(t);
        }
        expect(() => ports.first.child, throwsStateError);
        // Retired void members stay inert, matching existing proxy methods.
        ports.first.child = null;
        expect(h.runtime.handlesAtDispose, 0);
      }
    },
  );

  testWidgets(
    'proxy properties retain Widget overrides while Dart keeps them',
    (t) async {
      late plugin.FlutterPropertyPort port;
      final h = _harness(
        onCreate: (_, value) {
          if (value is plugin.FlutterPropertyPort) port = value;
        },
      );
      Future<void> collect() => t.runAsync(() async {
        for (var i = 0; i < 3; i++) {
          h.execute(flaxTestJsGarbagePressure);
          await flaxTestCollectDartGarbage();
        }
      });
      try {
        await t.pumpWidget(h.app('properties'));
        h.execute('''
        var implementation = properties.flutterImplementation();
        var port = properties.plugin.FlutterPropertyInterface.implement([], implementation);
        port.child = properties.makeWidget();
        port.children = [properties.makeWidget(), null];
      ''');
        var child = port.child;
        var children = port.children;
        final weak = WeakReference(child!);
        final weakListChild = WeakReference(children.first!);
        port.child = null;
        port.children = [];
        await collect();
        expect(weak.target, isNotNull);
        expect(weakListChild.target, isNotNull);
        await t.pumpWidget(
          MaterialApp(home: Column(children: [child, children.first!])),
        );
        expect(find.text('Proxy widget'), findsNWidgets(2));
        await t.pumpWidget(const SizedBox.shrink());
        await t.pumpAndSettle();
        child = null;
        children = [];
        await collect();
        expect(weak.target, isNull);
        expect(weakListChild.target, isNull);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
      expect(h.runtime.handlesAtDispose, 0);
    },
  );

  testWidgets('Flutter proxy properties reject foreign-session references', (
    t,
  ) async {
    late plugin.FlutterPropertyPort firstPort;
    late State state;
    final first = _harness(
      onCreate: (_, value) {
        if (value is plugin.FlutterPropertyPort) firstPort = value;
      },
    );
    final second = _harness();
    try {
      await t.pumpWidget(
        ExtensionAnchor(
          onState: (value) => state = value,
          child: Column(
            children: [
              Expanded(child: first.app('properties')),
              Expanded(child: second.app('properties')),
            ],
          ),
        ),
      );
      for (final h in [first, second]) {
        h.execute('''
          var implementation = properties.flutterImplementation();
          var port = properties.plugin.FlutterPropertyInterface.implement([], implementation);
        ''');
      }
      firstPort.child = const Text('Foreign Widget');
      firstPort.context = state.context;
      firstPort.state = state;
      for (final property in ['child', 'context', 'state']) {
        final value = first.runtime.evaluate('port.$property') as FlaxJsObject;
        final write = second.runtime.evaluate(
          '(value) => { port.$property = value; }',
        ) as FlaxJsFunction;
        try {
          expect(() => write.call([value]), throwsArgumentError);
        } finally {
          write.release();
          value.release();
        }
      }
      expect(second.number('implementation.writes'), 0);
      expect([...first.errors, ...second.errors], isEmpty);
    } finally {
      await first.finish(t);
      await second.finish(t);
    }
  });

  testWidgets('accessor failures remain synchronous and later calls recover', (
    t,
  ) async {
    final ports = <plugin.PropertyPort>[];
    final h = _harness(
      onCreate: (_, v) {
        if (v is plugin.PropertyPort) ports.add(v);
      },
    );
    try {
      await t.pumpWidget(h.app('properties'));
      h.execute('var port = properties.createPort()');
      for (final mode in ['error', 'promise', 'type']) {
        h.execute('properties.setReadFailure("$mode")');
        expect(
          () => ports.single.readOnly,
          throwsA(
            mode == 'type' ? isA<ArgumentError>() : isA<FlaxJsException>(),
          ),
        );
        expect(
          () => h.execute('port.readOnly'),
          throwsA(isA<FlaxJsException>()),
        );
      }
      h.execute('properties.setReadFailure("none")');
      expect(ports.single.readOnly, 7);
      for (final mode in ['error', 'promise']) {
        h.execute('properties.setWriteFailure("$mode")');
        expect(
          () => ports.single.writeOnly = 1,
          throwsA(isA<FlaxJsException>()),
        );
      }
      h.execute('properties.setWriteFailure("none")');
      ports.single.writeOnly = 4;
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'field contracts accept writable data and reject incomplete implementations before allocation',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(h.app('properties'));
        final before = h.constructions.values.fold(0, (a, b) => a + b);
        for (final code in [
          'properties.plugin.FieldContract.implement([], {get value(){ return 1; }})',
          'properties.plugin.AccessorContract.implement([], {})',
        ]) {
          expect(() => h.execute(code), throwsA(isA<FlaxJsException>()));
        }
        expect(h.constructions.values.fold(0, (a, b) => a + b), before);
        h.execute('''var data = {value: 1};
        var dataField = properties.plugin.FieldContract.implement([], data);
        dataField.value = 2;''');
        expect(h.number('data.value'), 2);
        expect(h.number('dataField.value'), 2);
        h.execute('''var value = 1;
        var field = properties.plugin.FieldContract.implement([], {
          get value() { return value; }, set value(v) { value = v; }
        }); field.value = 3;''');
        expect(h.number('field.value'), 3);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'native ValueListenableBuilder subscribes replaces and removes identical listeners',
    (t) async {
      final sources = <ValueListenable<Object?>>[];
      final h = _harness(
        onCreate: (_, v) {
          if (v is ValueListenable<Object?>) sources.add(v);
        },
      );
      final builds = [0, 0];
      Widget app(List<int> selected) => MaterialApp(
        home: Column(
          children: [
            FlaxView.page(session: h.session, name: 'properties'),
            for (var i = 0; i < selected.length; i++)
              ValueListenableBuilder<Object?>(
                key: ValueKey(i),
                valueListenable: sources[selected[i]],
                builder: (_, value, _) {
                  builds[i]++;
                  return Text('native $i: ${(value as num).toInt()}');
                },
              ),
          ],
        ),
      );
      try {
        await t.pumpWidget(app([]));
        h.execute(
          'var first = properties.source(1); var second = properties.source(10)',
        );
        await t.pumpWidget(app([0, 0]));
        expect(h.number('properties.listeners(0)'), 2);
        expect(find.text('native 0: 1'), findsOneWidget);
        final subscriptions = h.runtime.activeSubscriptions;
        final beforeBuilds = [...builds];
        h.execute('properties.set(0, 2, false)');
        await t.pump();
        expect(builds, beforeBuilds);
        h.execute('properties.set(0, 3); properties.set(0, 4)');
        await t.pump();
        expect(find.text('native 0: 4'), findsOneWidget);
        expect(find.text('native 1: 4'), findsOneWidget);
        expect(builds, [beforeBuilds[0] + 1, beforeBuilds[1] + 1]);
        expect(h.runtime.activeSubscriptions, subscriptions);
        await t.pumpWidget(app([1, 0]));
        expect(h.number('properties.listeners(0)'), 1);
        expect(h.number('properties.listeners(1)'), 1);
        expect(find.text('native 0: 10'), findsOneWidget);
        final updatedBuilds = [...builds];
        h.execute('properties.set(0, 5)');
        await t.pump();
        expect(builds, [updatedBuilds[0], updatedBuilds[1] + 1]);
        await t.pumpWidget(app([]));
        expect(h.number('properties.listeners(0)'), 0);
        expect(h.number('properties.listeners(1)'), 0);
        var notifications = 0;
        void listener() => notifications++;
        sources.first.addListener(listener);
        sources.first.addListener(listener);
        h.execute('properties.set(0, 6)');
        expect(notifications, 2);
        sources.first.removeListener(listener);
        h.execute('properties.set(0, 7)');
        expect(notifications, 3);
        sources.first.removeListener(listener);
        expect(
          h.number('properties.observations.adds'),
          h.number('properties.observations.removes'),
        );
        for (var i = 0; i < 10; i++) {
          await t.pumpWidget(app([0, 1]));
          await t.pumpWidget(app([]));
        }
        expect(
          h.number('properties.listeners(0) + properties.listeners(1)'),
          0,
        );
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
      expect(() => sources.first.value, throwsStateError);
    },
  );

  testWidgets(
    'callback references survive close requested inside a getter and are then revoked',
    (t) async {
      final ports = <plugin.PropertyPort>[];
      final h = _harness(
        onCreate: (_, v) {
          if (v is plugin.PropertyPort) ports.add(v);
        },
      );
      Future<void>? closing;
      try {
        await t.pumpWidget(h.app('properties'));
        h.execute('var port = properties.createPort()');
        h.runtime.registerHostFunction('closeProperties', (_, _) {
          closing = h.session.close();
          return const FlaxJsUndefined();
        });
        h.execute('properties.beforeRead(() => closeProperties())');
        expect(ports.single.readOnly, 7);
        expect(h.runtime.isDisposed, isFalse);
      } finally {
        await h.finish(t);
      }
      await closing;
      expect(() => ports.single.readOnly, throwsStateError);
      expect(h.runtime.handlesAtDispose, 0);
    },
  );

  testWidgets(
    'failed construction releases receiver facades without per-member callbacks',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(h.app('properties'));
        h.execute('var reads = 0;');
        final before = h.runtime.handles;
        for (var i = 0; i < 20; i++) {
          expect(
            () => h.execute(
              'properties.plugin.FailingProperty.implement([], {get value(){ reads++; return 1; }})',
            ),
            throwsA(isA<FlaxJsException>()),
          );
        }
        expect(h.number('reads'), 20);
        expect(
          h.runtime.handleLabels
              .where((label) => label == '__flaxBindings.invokeCallback')
              .length,
          0,
        );
        expect(h.runtime.handles, lessThanOrEqualTo(before));
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('discarded proxy wrappers and callbacks are actually collected', (
    t,
  ) async {
    final h = _harness();
    try {
      await t.pumpWidget(h.app('properties'));
      h.execute('var anchor = properties.plugin.Token(0); anchor.value');
      await t.pumpAndSettle();
      final before = h.runtime.handles;
      // Keep the implementation outside the proxy's lexical scope: capturing
      // the proxy itself would deliberately create a cross-language cycle.
      h.execute('''var weak; var implementation = {get value(){return 2;}};
        (() => {
          const value = properties.plugin.AccessorContract.implement([], implementation);
          weak = new WeakRef(value);
        })();
      ''');
      await t.pumpAndSettle();
      var collected = false;
      for (var i = 0; i < 60; i++) {
        h.runtime.drainMicrotasks();
        h.execute('${flaxTestJsGarbagePressure}anchor.value');
        await t.pumpAndSettle();
        if (h.boolean('weak.deref() === undefined')) collected = true;
        await t.runAsync(flaxTestCollectDartGarbage);
        await t.pump();
        if (collected && h.runtime.handles <= before) break;
      }
      expect(collected, isTrue);
      expect(h.runtime.handles, lessThanOrEqualTo(before));
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'JS Listenable methods reuse callback instances for paired removal',
    (t) async {
      final h = _harness();
      try {
        await t.pumpWidget(h.app('properties'));
        h.execute('''var source = properties.source(0); var notices = 0;
        var listener = () => notices++;
        source.addListener(listener); source.addListener(listener);
        properties.set(0, 1);
      ''');
        expect(h.number('notices'), 2);
        h.execute('source.removeListener(listener); properties.set(0, 2)');
        expect(h.number('notices'), 3);
        h.execute('source.removeListener(listener); properties.set(0, 3)');
        expect(h.number('notices'), 3);
        expect(h.number('properties.listeners(0)'), 0);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );
}
