import 'package:flax/flax.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/repeated_bindings.dart';
import '../fixtures/repeated.dart';
import '../support/harness.dart' show host, registry;
import '../support/owned_harness.dart';

import 'package:flax_test/flax_test.dart';

import '../support/runtime_tracker.dart';

class _CountedAlign extends FlaxWidgetHost {
  _CountedAlign(this.original, this.counts) : super(original.node);
  final FlaxWidgetHost original;
  final Map<Key?, int> counts;
  @override
  Widget buildNative(Map<String, Object?> values) {
    counts.update(key, (n) => n + 1, ifAbsent: () => 1);
    return original.buildNative(values);
  }
}

OwnedHarness harness() =>
    OwnedHarness(fixture: 'layout', extra: [repeatedBindings]);

Widget comparison(
  Widget view,
  Widget native, {
  TextDirection direction = TextDirection.ltr,
  bool loose = false,
}) => MaterialApp(
  home: Material(
    child: Directionality(
      textDirection: direction,
      child: Align(
        alignment: Alignment.topLeft,
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            for (final entry in {
              'flax-scene': view,
              'native-scene': native,
            }.entries)
              SizedBox(
                key: ValueKey(entry.key),
                width: 300,
                height: 200,
                child: loose
                    ? Align(alignment: Alignment.topLeft, child: entry.value)
                    : entry.value,
              ),
          ],
        ),
      ),
    ),
  ),
);

Rect localRect(WidgetTester t, Finder child, String scene) =>
    (t.getTopLeft(child) - t.getTopLeft(find.byKey(ValueKey(scene)))) &
    t.getSize(child);

void sameGeometry(WidgetTester t, String flax, String native) {
  final actual = localRect(t, host(flax), 'flax-scene');
  final expected = localRect(t, find.byKey(ValueKey(native)), 'native-scene');
  for (final pair in [
    (actual.left, expected.left),
    (actual.top, expected.top),
    (actual.width, expected.width),
    (actual.height, expected.height),
  ]) {
    expect(pair.$1, closeTo(pair.$2, 0.001));
  }
}

void main() {
  testWidgets(
    'static validation caching and dynamic native construction retain their costs',
    (t) async {
      final runtime = RuntimeTracker();
      final counts = <Key?, int>{};
      final errors = <Object>[];
      final bindings = FlaxBindingRegistry([
        for (final module in registry.modules)
          FlaxBindingModule(
            module.name,
            [
              for (final type in module.types)
                if (type is FlaxWidgetBinding &&
                    type.id.endsWith('#type:Align'))
                  FlaxWidgetBinding(
                    type.id,
                    type.constructors,
                    (node) => _CountedAlign(type.createHost(node), counts),
                    methods: type.methods,
                  )
                else
                  type,
            ],
            moduleId: module.moduleId,
            uiProtocol: module.uiProtocol,
            requiredCapabilities: module.requiredCapabilities,
            functions: module.functions,
          ),
      ]);
      final session = FlaxSession(
        createRuntime: () => runtime,
        source: flaxTestFixtureSource('layout'),
        bindings: bindings,
        onError: (e, _) => errors.add(e),
      );
      await t.pumpWidget(
        MaterialApp(
          home: FlaxView.page(session: session, name: 'cost'),
        ),
      );
      expect(counts, {
        const ValueKey('static-align'): 1,
        const ValueKey('dynamic-align'): 2,
      });
      final staticWidget = t.widget(host('static-align'));
      final handles = <int>[];
      for (var i = 0; i < 8; i++) {
        final result = runtime.evaluate(
          'layout.alignment.value = layout.Alignment.${i.isEven ? 'centerRight' : 'centerLeft'}',
        );
        if (result is FlaxJsObject) result.release();
        await t.pumpAndSettle();
        expect(t.widget(host('static-align')), same(staticWidget));
        handles.add(runtime.handles);
      }
      expect(counts, {
        const ValueKey('static-align'): 1,
        const ValueKey('dynamic-align'): 10,
      });
      expect(handles.toSet(), hasLength(1));
      expect(runtime.activeSubscriptions, 1);
      expect(errors, isEmpty);
      // ignore: avoid_print
      print(
        'Align native constructions: $counts; handles=$handles; subscriptions=1; host calls=${runtime.hostCalls}.',
      );
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await session.close();
      expect(runtime.handlesAtDispose, 0);
      expect(runtime.activeSubscriptions, 0);
    },
  );

  testWidgets('Flex ParentData matches native layout and updates only its host', (
    t,
  ) async {
    for (final vertical in [false, true]) {
      final h = harness();
      final view = FlaxView.page(
        session: h.session,
        name: 'flex',
        arguments: {'vertical': vertical},
      );
      Widget native(int flex, FlexFit fit) {
        final children = [
          Expanded(
            flex: flex,
            child: const SizedBox(
              key: ValueKey('native-a'),
              width: 40,
              height: 30,
            ),
          ),
          Flexible(
            flex: 2,
            fit: fit,
            child: const SizedBox(
              key: ValueKey('native-b'),
              width: 50,
              height: 40,
            ),
          ),
        ];
        return vertical ? Column(children: children) : Row(children: children);
      }

      await t.pumpWidget(comparison(view, native(1, FlexFit.loose)));
      expect(h.errors, isEmpty);
      sameGeometry(t, 'a-box', 'native-a');
      sameGeometry(t, 'b-box', 'native-b');
      final original = t.widget(host('a-box'));
      final parent = t.state(host('flex-parent'));
      final rebuilt = <Key?>[];
      debugOnRebuildDirtyWidget = (e, _) {
        if (e.widget is FlaxWidgetHost) rebuilt.add(e.widget.key);
      };
      final calls = h.runtime.hostCalls['__flaxInvalidate'] ?? 0;
      try {
        h.execute(
          'layout.flex.value = 2; layout.flex.value = 4; layout.flex.value = 3',
        );
        await t.pump();
        expect(rebuilt, [const ValueKey('a')]);
        expect(h.runtime.hostCalls['__flaxInvalidate']! - calls, 3);
        expect(t.widget(host('a-box')), same(original));
        expect(t.state(host('flex-parent')), same(parent));
      } finally {
        debugOnRebuildDirtyWidget = null;
      }
      await t.pumpWidget(comparison(view, native(3, FlexFit.loose)));
      sameGeometry(t, 'a-box', 'native-a');
      sameGeometry(t, 'b-box', 'native-b');
      final data = t.renderObject(host('a-box')).parentData! as FlexParentData;
      expect(data.flex, 3);
      expect(data.fit, FlexFit.tight);
      h.execute('layout.fit.value = layout.FlexFit.tight');
      await t.pump();
      await t.pumpWidget(comparison(view, native(3, FlexFit.tight)));
      sameGeometry(t, 'a-box', 'native-a');
      sameGeometry(t, 'b-box', 'native-b');
      expect(h.number('layout.factories'), 1);
      expect(h.errors, isEmpty);
      // ignore: avoid_print
      print(
        'Flex locality: vertical=$vertical; 3 invalidations / ${rebuilt.length} Flax rebuild; subscriptions=${h.runtime.activeSubscriptions}.',
      );
      await h.finish(t);
    }
  });

  testWidgets(
    'Stack positions, fits and clipping match native through RTL changes',
    (t) async {
      final h = harness();
      final view = FlaxView.page(session: h.session, name: 'stack');
      Widget native(StackFit fit, Clip clip) => Stack(
        alignment: AlignmentDirectional.topStart,
        fit: fit,
        clipBehavior: clip,
        children: const [
          SizedBox(key: ValueKey('native-loose'), width: 50, height: 30),
          Positioned(
            left: 10,
            top: 20,
            width: 60,
            height: 40,
            child: SizedBox(
              key: ValueKey('native-positioned'),
              width: 1,
              height: 1,
            ),
          ),
        ],
      );
      for (final direction in TextDirection.values) {
        for (final fit in StackFit.values) {
          // Initialization belongs to the first mount, before test JS enters the engine.
          await t.pumpWidget(
            comparison(view, native(fit, Clip.none), direction: direction),
          );
          h.execute(
            'layout.stackFit.value = layout.StackFit.${fit.name}; layout.clip.value = layout.Clip.none',
          );
          await t.pump();
          sameGeometry(t, 'loose-box', 'native-loose');
          sameGeometry(t, 'positioned-box', 'native-positioned');
          final render = t.renderObject<RenderStack>(host('stack'));
          expect(render.fit, fit);
          expect(render.clipBehavior, Clip.none);
        }
      }
      final child = t.widget(host('positioned-box'));
      h.execute(
        'layout.left.value = null; layout.right.value = 15; layout.top.value = null; layout.bottom.value = 10; layout.width.value = 80',
      );
      await t.pump();
      final data =
          t.renderObject(host('positioned-box')).parentData! as StackParentData;
      expect(data.left, isNull);
      expect(data.right, 15);
      expect(data.bottom, 10);
      expect(data.width, 80);
      expect(
        localRect(t, host('positioned-box'), 'flax-scene'),
        const Rect.fromLTWH(205, 150, 80, 40),
      );
      expect(t.widget(host('positioned-box')), same(child));
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );

  testWidgets(
    'alignment references, real defaults and factors follow native directionality',
    (t) async {
      final h = harness();
      final view = FlaxView.page(session: h.session, name: 'align');
      for (final direction in TextDirection.values) {
        for (final directional in [true, false]) {
          final alignment = directional
              ? AlignmentDirectional.bottomEnd
              : Alignment.bottomRight;
          for (final factor in <double?>[null, 2]) {
            await t.pumpWidget(
              comparison(
                view,
                Align(
                  alignment: alignment,
                  widthFactor: factor,
                  heightFactor: factor,
                  child: const SizedBox(
                    key: ValueKey('native-aligned'),
                    width: 50,
                    height: 30,
                  ),
                ),
                direction: direction,
                loose: true,
              ),
            );
            h.execute(
              'layout.alignment.value = layout.${directional ? 'AlignmentDirectional.bottomEnd' : 'Alignment.bottomRight'}; layout.factor.value = ${factor ?? 'null'}',
            );
            await t.pump();
            sameGeometry(t, 'aligned-box', 'native-aligned');
          }
        }
      }
      expect(
        h.boolean('layout.Alignment.center === layout.Alignment.center'),
        isTrue,
      );
      expect(h.number('layout.Alignment(0.25, -0.5).x'), 0.25);
      expect(h.number('layout.AlignmentDirectional(-0.5, 1).start'), -0.5);
      expect(h.errors, isEmpty);
      await h.finish(t);
      final defaults = harness();
      for (final direction in TextDirection.values) {
        await t.pumpWidget(
          comparison(
            FlaxView.page(session: defaults.session, name: 'defaults'),
            const SizedBox(),
            direction: direction,
          ),
        );
        final stack = t.widget<Stack>(find.byType(Stack));
        final align = t.widgetList<Align>(find.byType(Align)).last;
        expect(stack.alignment, same(AlignmentDirectional.topStart));
        expect(align.alignment, same(Alignment.center));
        expect(
          t.getTopLeft(host('default-stack')).dx -
              t.getTopLeft(find.byType(Stack)).dx,
          direction == TextDirection.ltr ? 0 : 80,
        );
      }
      await defaults.finish(t);
    },
  );

  testWidgets(
    'ParentData nodes preserve keyed State, shared mounts and builder timing',
    (t) async {
      RetainedTile.mounts.clear();
      RetainedTile.disposals.clear();
      final h = harness();
      await t.pumpWidget(h.app('identity'));
      Finder tile(String name) =>
          find.byWidgetPredicate((w) => w is RetainedTile && w.label == name);
      final a = t.state(tile('a'));
      final b = t.state(tile('b'));
      final handles = <int>[];
      for (var i = 0; i < 8; i++) {
        h.execute('layout.swap.value = !layout.swap.value');
        await t.pumpAndSettle();
        expect(t.state(tile('a')), same(a));
        expect(t.state(tile('b')), same(b));
        handles.add(h.runtime.handles);
      }
      expect(handles.toSet(), hasLength(1));
      h.execute('layout.show.value = false');
      await t.pump();
      expect(tile('a'), findsNothing);
      expect(t.state(tile('b')), same(b));
      h.execute('layout.show.value = true');
      await t.pump();
      expect(t.state(tile('a')), isNot(same(a)));
      final restored = t.state(tile('a'));
      h.execute('layout.changed.value = true');
      await t.pump();
      expect(t.state(tile('a')), isNot(same(restored)));
      expect(t.state(tile('b')), same(b));
      expect(h.errors, isEmpty);
      // ignore: avoid_print
      print(
        'Layout keyed moves: handles=$handles; subscriptions=${h.runtime.activeSubscriptions}.',
      );
      await h.finish(t);

      final shared = harness();
      await t.pumpWidget(shared.app('shared'));
      final states = t.stateList(tile('shared')).toList();
      expect(states, hasLength(2));
      expect(states[0], isNot(same(states[1])));
      shared.execute('layout.count.value++');
      await t.pump();
      expect(find.text('Shared 1'), findsNWidgets(2));
      expect(shared.errors, isEmpty);
      await shared.finish(t);

      final builders = harness();
      // Registering factories evaluates no Widget builder.
      await t.pumpWidget(builders.app('builder'));
      expect(builders.number('layout.builders'), 2);
      expect(find.text('Built'), findsOneWidget);
      expect(builders.errors, isEmpty);
      await builders.finish(t);
    },
  );

  testWidgets(
    'conversion and constructor failures retain the last valid layout',
    (t) async {
      final h = harness();
      await t.pumpWidget(
        comparison(
          FlaxView.page(session: h.session, name: 'stack'),
          const SizedBox(),
        ),
      );
      final original = localRect(t, host('positioned-box'), 'flax-scene');
      for (final value in ['"wrong"', 'null']) {
        final before = h.errors.length;
        h.execute('layout.alignment.value = $value');
        await t.pump();
        expect(h.errors.length, before + 1);
        expect(localRect(t, host('positioned-box'), 'flax-scene'), original);
      }
      h.execute('layout.alignment.value = layout.Alignment.center');
      await t.pump();
      final before = h.errors.length;
      h.execute('layout.right.value = 20');
      await t.pump();
      expect(
        h.errors.length,
        before + 1,
      ); // left/right/width constructor assertion.
      expect(localRect(t, host('positioned-box'), 'flax-scene'), original);
      h.execute('layout.left.value = null; layout.right.value = 15');
      await t.pump();
      expect(localRect(t, host('positioned-box'), 'flax-scene').left, 225);
      await h.finish(t);
    },
  );

  testWidgets('invalid ancestry and unbounded flex use Flutter diagnostics', (
    t,
  ) async {
    for (final name in ['bad-ancestor', 'unbounded', 'conflict']) {
      final h = harness();
      final reports = <FlutterErrorDetails>[];
      final handler = FlutterError.onError;
      Future<void> pump(Widget child) async {
        await t.pumpWidget(
          MaterialApp(
            home: Material(
              child: name == 'unbounded'
                  ? SingleChildScrollView(child: child)
                  : child,
            ),
          ),
        );
      }

      FlutterError.onError = reports.add;
      try {
        final native = switch (name) {
          'bad-ancestor' => const Expanded(child: Text('Invalid')),
          'unbounded' => const Column(
            children: [Expanded(child: Text('Invalid'))],
          ),
          _ => const Row(
            children: [Expanded(child: Flexible(child: Text('Invalid')))],
          ),
        };
        await pump(native);
        final message = name == 'unbounded' ? 'unbounded' : 'ParentData';
        expect(
          reports.any((e) => e.exceptionAsString().contains(message)),
          isTrue,
        );
        await t.pumpWidget(const SizedBox());
        reports.clear();
        await pump(FlaxView.page(session: h.session, name: name));
        expect(
          reports.any((e) => e.exceptionAsString().contains(message)),
          isTrue,
        );
        expect(h.errors, isEmpty);
        await h.finish(t);
      } finally {
        FlutterError.onError = handler;
      }
    }
  });
}
