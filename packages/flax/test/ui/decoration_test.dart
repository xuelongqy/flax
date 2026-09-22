import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../../.dart_tool/flax/ui/repeated_bindings.dart';
import '../fixtures/repeated.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart' show host, registry;
import '../support/owned_harness.dart';
import '../support/runtime_tracker.dart';

const red = Color(0xffff0000);
const blue = Color(0xff0000ff);
const green = Color(0xff00ff00);
OwnedHarness harness() =>
    OwnedHarness(fixture: 'decoration', extra: [repeatedBindings]);

Widget nativeScene(String name) {
  Widget leaf() => Container(
    key: const ValueKey('native-leaf'),
    width: 24,
    height: 18,
    color: green,
  );
  BorderSide side(double width) => BorderSide(color: blue, width: width);
  final base = BoxDecoration(
    color: red,
    border: Border.all(color: blue, width: 4),
  );
  return switch (name) {
    'geometry' => Container(
      width: 100,
      height: 90,
      constraints: const BoxConstraints(maxWidth: 110, maxHeight: 100),
      alignment: AlignmentDirectional.centerStart,
      margin: const EdgeInsetsDirectional.fromSTEB(3, 5, 9, 7),
      padding: const EdgeInsetsDirectional.only(start: 11, end: 2, top: 6),
      decoration: base,
      child: leaf(),
    ),
    'empty' => Container(
      constraints: const BoxConstraints.tightFor(width: 70, height: 40),
      decoration: base,
    ),
    'expand' => Container(
      constraints: const BoxConstraints.expand(),
      color: red,
    ),
    'foreground' => Container(
      width: 100,
      height: 90,
      color: red,
      foregroundDecoration: const BoxDecoration(color: blue),
      child: leaf(),
    ),
    'decorated' => DecoratedBox(decoration: base, child: leaf()),
    'decorated-foreground' => DecoratedBox(
      decoration: base,
      position: DecorationPosition.foreground,
      child: leaf(),
    ),
    'sides' => Container(
      width: 100,
      height: 90,
      decoration: BoxDecoration(
        color: red,
        border: Border(
          top: side(2),
          right: side(4),
          bottom: side(6),
          left: side(8),
        ),
      ),
      child: leaf(),
    ),
    'directional' => Container(
      width: 100,
      height: 90,
      decoration: BoxDecoration(
        color: red,
        border: BorderDirectional(
          top: side(2),
          start: side(8),
          end: side(4),
          bottom: side(6),
        ),
        borderRadius: const BorderRadiusDirectional.only(
          topStart: Radius.elliptical(18, 12),
          bottomEnd: Radius.circular(9),
        ),
      ),
      child: leaf(),
    ),
    'corners' => Container(
      width: 100,
      height: 90,
      decoration: const BoxDecoration(
        color: red,
        borderRadius: BorderRadius.only(
          topLeft: Radius.elliptical(18, 12),
          bottomRight: Radius.circular(9),
        ),
      ),
    ),
    'circle' => Container(
      width: 100,
      height: 90,
      decoration: BoxDecoration(
        color: red,
        shape: BoxShape.circle,
        border: Border.all(color: blue, width: 4),
      ),
    ),
    'none' => Container(
      width: 100,
      height: 90,
      decoration: BoxDecoration(
        color: red,
        border: Border.all(color: blue, width: 4, style: BorderStyle.none),
      ),
      child: leaf(),
    ),
    'center' || 'outside' => Container(
      width: 100,
      height: 90,
      decoration: BoxDecoration(
        color: red,
        border: Border.all(
          color: blue,
          width: 8,
          strokeAlign: name == 'center'
              ? BorderSide.strokeAlignCenter
              : BorderSide.strokeAlignOutside,
        ),
      ),
      child: leaf(),
    ),
    'no-clip' || 'clip' => Container(
      width: 100,
      height: 90,
      decoration: BoxDecoration(
        color: red,
        borderRadius: BorderRadius.circular(24),
      ),
      clipBehavior: name == 'clip' ? Clip.hardEdge : Clip.none,
      child: Container(color: green),
    ),
    'bad-paint' => Container(
      width: 100,
      height: 90,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        border: Border(
          top: side(4),
          bottom: const BorderSide(color: red, width: 4),
        ),
      ),
    ),
    _ => throw StateError(name),
  };
}

Widget comparison(
  Widget flax,
  Widget native, {
  TextDirection direction = TextDirection.ltr,
}) => MaterialApp(
  home: Directionality(
    textDirection: direction,
    child: Align(
      alignment: Alignment.topLeft,
      child: Row(
        textDirection: TextDirection.ltr,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          for (final scene in {
            'flax-scene': flax,
            'native-scene': native,
          }.entries)
            RepaintBoundary(
              key: ValueKey(scene.key),
              child: ColoredBox(
                color: const Color(0xffffffff),
                child: SizedBox(
                  width: 140,
                  height: 120,
                  child: Align(
                    alignment: Alignment.topLeft,
                    child: scene.value,
                  ),
                ),
              ),
            ),
        ],
      ),
    ),
  ),
);

Future<Uint8List> pixels(WidgetTester t, String name) async {
  final boundary = t.renderObject<RenderRepaintBoundary>(
    find.byKey(ValueKey(name)),
  );
  return (await t.runAsync(() async {
    final image = await boundary.toImage(pixelRatio: 1);
    try {
      return (await image.toByteData(format: ui.ImageByteFormat.rawRgba))!
          .buffer
          .asUint8List();
    } finally {
      image.dispose();
    }
  }))!;
}

class _CountedHost extends FlaxWidgetHost {
  _CountedHost(this.original, this.counts, this.probe) : super(original.node);
  final FlaxWidgetHost original;
  final Map<Key?, int> counts;
  final List<int> probe;
  @override
  Widget buildNative(Map<String, Object?> values) {
    if (key == const ValueKey('cost-child')) {
      return _Probe(probe, child: original.buildNative(values));
    }
    counts.update(key, (n) => n + 1, ifAbsent: () => 1);
    return original.buildNative(values);
  }
}

// Test-only probes; production hosts add no RenderObject wrappers.
class _Probe extends SingleChildRenderObjectWidget {
  const _Probe(this.counts, {required super.child});
  final List<int> counts;
  @override
  RenderObject createRenderObject(BuildContext context) => _RenderProbe(counts);
}

class _RenderProbe extends RenderProxyBox {
  _RenderProbe(this.counts);
  final List<int> counts;
  @override
  void performLayout() {
    counts[0]++;
    super.performLayout();
  }

  @override
  void paint(PaintingContext context, Offset offset) {
    counts[1]++;
    super.paint(context, offset);
  }
}

void main() {
  testWidgets(
    'Dart values preserve defaults, aliases, getters and copyWith semantics',
    (t) async {
      final h = harness();
      await t.pumpWidget(h.app('values'));
      expect(
        h.boolean(
          'decoration.BoxConstraints().maxWidth === Infinity && decoration.BoxConstraints().minHeight === 0',
        ),
        isTrue,
      );
      expect(
        h.boolean('decoration.BoxConstraints.expand().minWidth === Infinity'),
        isTrue,
      );
      expect(
        h.boolean(
          'decoration.BoxConstraints.tightFor({width: 20}).maxWidth === 20',
        ),
        isTrue,
      );
      expect(
        h.boolean('decoration.Border().top === decoration.BorderSide.none'),
        isTrue,
      );
      expect(
        h.boolean(
          'decoration.BorderDirectional().start === decoration.BorderSide.none',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'decoration.BorderRadius.only().topLeft === decoration.Radius.zero',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'decoration.BorderRadiusDirectional.only().bottomEnd === decoration.Radius.zero',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'decoration.BorderSide().style === decoration.BorderStyle.solid',
        ),
        isTrue,
      );
      expect(
        h.boolean(
          'decoration.BoxDecoration().shape === decoration.BoxShape.rectangle',
        ),
        isTrue,
      );
      expect(h.number('decoration.BorderSide().color.toARGB32()'), 0xff000000);
      expect(h.number('decoration.EdgeInsets.fromLTRB(1, 2, 3, 4).right'), 3);
      expect(
        h.number(
          'decoration.EdgeInsetsDirectional.symmetric({horizontal: 3}).start',
        ),
        3,
      );
      expect(
        h.number(
          'decoration.BorderRadius.circular(4).copyWith({topLeft: decoration.Radius.circular(8)}).bottomRight.x',
        ),
        4,
      );
      expect(
        h.boolean(
          'decoration.BoxDecoration({color: decoration.red}).copyWith({color: null}).color === decoration.red',
        ),
        isTrue,
      );
      expect(h.boolean('decoration.BoxDecoration().color === null'), isTrue);
      for (final expression in [
        'decoration.BoxConstraints({maxWidth: null})',
        'decoration.BorderSide({width: null})',
      ]) {
        expect(
          h.boolean(
            '(() => { try { $expression; return false; } catch (_) { return true; } })()',
          ),
          isTrue,
        );
      }
      final binding = flutterBindings.types
          .whereType<FlaxObjectBinding>()
          .singleWhere((b) => b.id == 'flax.core/flutter#type:BoxDecoration');
      const original = BoxDecoration(
        color: red,
        boxShadow: [BoxShadow(color: blue)],
      );
      final copied = binding.instanceMethods['copyWith']!.invoke(original, {
        'color': green,
        'border': null,
        'borderRadius': null,
        'shape': null,
      }) as BoxDecoration;
      expect(copied.boxShadow, same(original.boxShadow));
      expect(copied.color, green);
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );

  testWidgets(
    'decoration pixels and content geometry match native Flutter in both directions',
    (t) async {
      final clipImages = <String, Uint8List>{};
      for (final direction in TextDirection.values) {
        for (final name in [
          'geometry',
          'empty',
          'expand',
          'foreground',
          'decorated',
          'decorated-foreground',
          'sides',
          'directional',
          'corners',
          'circle',
          'none',
          'center',
          'outside',
          'no-clip',
          'clip',
        ]) {
          final h = harness();
          await t.pumpWidget(
            comparison(
              FlaxView.page(
                session: h.session,
                name: 'decoration',
                arguments: {'scene': name},
              ),
              nativeScene(name),
              direction: direction,
            ),
          );
          await t.pumpAndSettle();
          expect(h.errors, isEmpty, reason: '$name $direction');
          final actual = await pixels(t, 'flax-scene');
          expect(
            actual,
            orderedEquals(await pixels(t, 'native-scene')),
            reason: '$name $direction',
          );
          if (direction == TextDirection.ltr &&
              ['clip', 'no-clip'].contains(name)) {
            clipImages[name] = actual;
          }
          if (host('leaf').evaluate().isNotEmpty) {
            final flaxOffset =
                t.getTopLeft(host('leaf')) -
                t.getTopLeft(find.byKey(const ValueKey('flax-scene')));
            final nativeOffset =
                t.getTopLeft(find.byKey(const ValueKey('native-leaf'))) -
                t.getTopLeft(find.byKey(const ValueKey('native-scene')));
            expect(flaxOffset, nativeOffset, reason: name);
            expect(
              t.getSize(host('leaf')),
              t.getSize(find.byKey(const ValueKey('native-leaf'))),
            );
          }
          await h.finish(t);
        }
      }
      expect(clipImages['clip'], isNot(orderedEquals(clipImages['no-clip']!)));
    },
  );

  testWidgets(
    'fixed decoration structure retains State and structural changes follow Flutter',
    (t) async {
      final h = harness();
      final view = FlaxView.page(session: h.session, name: 'state');
      Widget native(
        EdgeInsets? padding,
        Color color, [
        Clip clip = Clip.none,
      ]) => Container(
        clipBehavior: clip,
        padding: padding,
        decoration: BoxDecoration(color: color),
        child: RetainedTile(label: 'native', child: const Text('Retained')),
      );
      Finder tile(String label) =>
          find.byWidgetPredicate((w) => w is RetainedTile && w.label == label);
      await t.pumpWidget(comparison(view, native(EdgeInsets.zero, red)));
      final retained = t.state(tile('state'));
      final nativeRetained = t.state(tile('native'));
      for (var i = 0; i < 8; i++) {
        final color = i.isEven ? blue : red;
        h.execute(
          'decoration.color.value = decoration.${i.isEven ? 'blue' : 'red'}; decoration.padding.value = decoration.EdgeInsets.all(${i + 1})',
        );
        await t.pumpWidget(
          comparison(view, native(EdgeInsets.all(i + 1), color)),
        );
        await t.pumpAndSettle();
        expect(t.state(tile('state')), same(retained));
        expect(t.state(tile('native')), same(nativeRetained));
      }
      h.execute('decoration.padding.value = null');
      await t.pumpWidget(comparison(view, native(null, red)));
      await t.pumpAndSettle();
      expect(t.state(tile('state')), same(retained));
      expect(t.state(tile('native')), same(nativeRetained));
      h.execute('decoration.clip.value = decoration.Clip.hardEdge');
      await t.pumpWidget(comparison(view, native(null, red, Clip.hardEdge)));
      await t.pumpAndSettle();
      expect(t.state(tile('state')), isNot(same(retained)));
      expect(t.state(tile('native')), isNot(same(nativeRetained)));
      expect(h.number('decoration.factories'), 1);
      expect(h.errors, isEmpty);
      await h.finish(t);
    },
  );

  testWidgets(
    'paint-only and border-size updates match native work and preserve local costs',
    (t) async {
      final runtime = RuntimeTracker();
      final counts = <Key?, int>{};
      final errors = <Object>[];
      final flaxCounts = [0, 0];
      final nativeCounts = [0, 0];
      final bindings = FlaxBindingRegistry([
        for (final module in registry.modules)
          FlaxBindingModule(
            module.name,
            [
              for (final type in module.types)
                if (type is FlaxWidgetBinding &&
                    (type.id == 'flax.core/flutter#type:Container' ||
                        type.id == 'flax.core/flutter#type:SizedBox'))
                  FlaxWidgetBinding(
                    type.id,
                    type.constructors,
                    (node) =>
                        _CountedHost(type.createHost(node), counts, flaxCounts),
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
        repeatedBindings,
      ]);
      final session = FlaxSession(
        createRuntime: () => runtime,
        source: flaxTestFixtureSource('decoration'),
        bindings: bindings,
        onError: (e, _) => errors.add(e),
      );
      final view = FlaxView.page(session: session, name: 'cost');
      // Child probes distinguish local layout/paint from Flax host construction.
      Widget app(Color color, double width) => MaterialApp(
        home: Column(
          children: [
            view,
            Row(
              children: [
                Container(
                  width: 100,
                  height: 90,
                  color: blue,
                  child: const Text('Static'),
                ),
                Container(
                  width: 100,
                  height: 90,
                  decoration: BoxDecoration(
                    color: color,
                    border: Border.all(color: blue, width: width),
                  ),
                  child: _Probe(
                    nativeCounts,
                    child: const SizedBox(width: 20, height: 20),
                  ),
                ),
              ],
            ),
          ],
        ),
      );
      void execute(String code) {
        final result = runtime.evaluate(code);
        if (result is FlaxJsObject) result.release();
      }

      await t.pumpWidget(app(red, 4));
      expect(counts, {
        const ValueKey('static-box'): 1,
        const ValueKey('dynamic-box'): 2,
      });
      final staticWidget = t.widget(host('static-box'));
      final child = t.widget(host('cost-child'));
      final handles = <int>[];
      final work = <List<int>>[];
      for (var i = 0; i < 8; i++) {
        final color = i.isEven ? green : red;
        final width = i < 4 ? 4.0 : (i.isEven ? 8.0 : 4.0);
        flaxCounts.fillRange(0, 2, 0);
        nativeCounts.fillRange(0, 2, 0);
        execute(
          'decoration.color.value = decoration.blue; decoration.color.value = decoration.red; decoration.color.value = decoration.${i.isEven ? 'green' : 'red'}; decoration.width.value = $width',
        );
        await t.pumpWidget(app(color, width));
        await t.pumpAndSettle();
        expect(flaxCounts, nativeCounts, reason: 'Iteration $i');
        expect(counts[const ValueKey('dynamic-box')], 3 + i);
        expect(counts[const ValueKey('static-box')], 1);
        expect(t.widget(host('static-box')), same(staticWidget));
        expect(t.widget(host('cost-child')), same(child));
        handles.add(runtime.handles);
        work.add(List.of(flaxCounts));
      }
      expect(handles.toSet(), hasLength(1));
      expect(runtime.activeSubscriptions, 1);
      execute('decoration.bad.value = true');
      await t.pump();
      expect(errors, hasLength(1));
      expect(t.widget(host('cost-child')), same(child));
      execute('decoration.bad.value = false');
      await t.pump();
      expect(errors, hasLength(1));
      // ignore: avoid_print
      print(
        'Decoration costs: constructions=$counts; handles=$handles; subscriptions=${runtime.activeSubscriptions}; bridge=${runtime.hostCalls}; layout/paint=$work.',
      );
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await session.close();
      expect(runtime.handlesAtDispose, 0);
      expect(runtime.activeSubscriptions, 0);
    },
  );

  testWidgets(
    'constructor and paint failures keep their native diagnostic boundary',
    (t) async {
      final h = harness();
      await t.pumpWidget(h.app('invalid'));
      final valid = t.widget(host('valid'));
      final cases = <(Widget Function(), String)>[
        (
          () => Container(color: red, decoration: const BoxDecoration()),
          'Container({color: decoration.red, decoration: decoration.BoxDecoration()})',
        ),
        (
          () => Container(padding: const EdgeInsets.all(-1)),
          'Container({padding: decoration.EdgeInsets.all(-1)})',
        ),
        (
          () => Container(
            constraints: const BoxConstraints(minWidth: 20, maxWidth: 10),
          ),
          'Container({constraints: decoration.BoxConstraints({minWidth: 20, maxWidth: 10})})',
        ),
        (
          () => Container(clipBehavior: Clip.hardEdge),
          'Container({clipBehavior: decoration.Clip.hardEdge})',
        ),
        (
          () => Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              borderRadius: BorderRadius.circular(2),
            ),
          ),
          'Container({decoration: decoration.BoxDecoration({shape: decoration.BoxShape.circle, borderRadius: decoration.BorderRadius.circular(2)})})',
        ),
      ];
      for (final entry in cases) {
        expect(entry.$1, throwsAssertionError);
        final before = h.errors.length;
        h.execute('decoration.node.value = decoration.${entry.$2}');
        await t.pump();
        expect(h.errors.length, before + 1);
        expect(t.widget(host('valid')), same(valid));
      }
      h.execute('decoration.node.value = decoration.Text("Recovered")');
      await t.pump();
      expect(find.text('Recovered'), findsOneWidget);
      await h.finish(t);
      final reports = <FlutterErrorDetails>[];
      final handler = FlutterError.onError;
      FlutterError.onError = reports.add;
      try {
        await t.pumpWidget(
          comparison(const SizedBox(), nativeScene('bad-paint')),
        );
        expect(
          reports.any((e) => e.exceptionAsString().contains('uniform')),
          isTrue,
        );
        await t.pumpWidget(const SizedBox());
        reports.clear();
        final paint = harness();
        await t.pumpWidget(
          comparison(
            FlaxView.page(
              session: paint.session,
              name: 'decoration',
              arguments: {'scene': 'bad-paint'},
            ),
            const SizedBox(),
          ),
        );
        expect(
          reports.any((e) => e.exceptionAsString().contains('uniform')),
          isTrue,
        );
        expect(paint.errors, isEmpty);
        await paint.finish(t);
      } finally {
        FlutterError.onError = handler;
      }
    },
  );
}
