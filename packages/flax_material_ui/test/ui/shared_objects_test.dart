import 'dart:ui' show PointerDeviceKind;

import 'package:flax/flax.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show host;
import '../support/owned_harness.dart';

const _side = BorderSide(color: Color(0xff1565c0), width: 2);
const _rounded = RoundedRectangleBorder(
  side: _side,
  borderRadius: BorderRadius.all(Radius.circular(24)),
);
const _circle = CircleBorder(side: _side, eccentricity: 0.5);
const _border = Border.fromBorderSide(_side);

Finder _native<T extends Widget>(String key) =>
    find.descendant(of: host(key), matching: find.byType(T));

Finder _inside<T extends Widget>(Finder parent) =>
    find.descendant(of: parent, matching: find.byType(T));

Widget _comparison(
  OwnedHarness h, {
  ShapeBorder shape = _rounded,
  VisualDensity density = VisualDensity.standard,
}) => MaterialApp(
  theme: ThemeData(useMaterial3: false),
  home: Row(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      SizedBox(width: 300, height: 300, child: h.page('shared-objects')),
      SizedBox(
        width: 300,
        height: 300,
        child: Column(
          children: [
            Material(
              key: const ValueKey('native-surface'),
              type: MaterialType.card,
              color: const Color(0xffe3f2fd),
              shape: shape,
              clipBehavior: Clip.antiAlias,
              child: InkWell(
                mouseCursor: SystemMouseCursors.text,
                customBorder: shape,
                onTap: () {},
                child: const SizedBox(width: 240, height: 80),
              ),
            ),
            SizedBox(
              height: 100,
              child: Center(
                child: TextButton(
                  key: const ValueKey('native-button'),
                  style: ButtonStyle(
                    shape: WidgetStateProperty.resolveWith(
                      (states) => states.contains(WidgetState.pressed)
                          ? _circle
                          : _rounded,
                    ),
                    mouseCursor: WidgetStateProperty.resolveWith(
                      (states) => states.contains(WidgetState.disabled)
                          ? SystemMouseCursors.forbidden
                          : SystemMouseCursors.click,
                    ),
                    visualDensity: density,
                  ),
                  onPressed: () {},
                  child: const Text('Shared button'),
                ),
              ),
            ),
            Container(
              width: 40,
              height: 40,
              decoration: const BoxDecoration(border: _border),
            ),
          ],
        ),
      ),
    ],
  ),
);

void main() {
  testWidgets('shared objects preserve defaults, copies and provider identity', (
    t,
  ) async {
    final created = <Object>[];
    final h = OwnedHarness(
      fixture: 'shared_objects',
      onCreate: (_, value) => created.add(value),
    );
    try {
      await t.pumpWidget(h.app('shared-objects'));
      await t.pumpAndSettle();
      h.execute('var c = shared.core; var m = shared.material;');
      for (final expression in [
        'c.Cubic(0.42, 0, 1, 1).a === 0.42',
        'c.Cubic(0.42, 0, 1, 1).b === 0',
        'c.Cubic(0.42, 0, 1, 1).c === 1',
        'c.Cubic(0.42, 0, 1, 1).d === 1',
        'c.Curves.ease === c.Curves.ease',
        'c.MouseCursor.defer === c.MouseCursor.defer',
        'c.MouseCursor.uncontrolled !== c.MouseCursor.defer',
        'c.SystemMouseCursors.basic === c.SystemMouseCursors.basic',
        'c.SystemMouseCursors.click !== c.SystemMouseCursors.forbidden',
        'c.RoundedRectangleBorder().side === c.BorderSide.none',
        'c.RoundedRectangleBorder().borderRadius === c.BorderRadius.zero',
        'shared.rounded.copyWith({side: null, borderRadius: null}).side === shared.side',
        'shared.rounded.copyWith({borderRadius: undefined}).borderRadius === shared.rounded.borderRadius',
        'c.CircleBorder().eccentricity === 0',
        'c.CircleBorder().copyWith({eccentricity: 0.5}).eccentricity === 0.5',
        'shared.circle.copyWith({eccentricity: null}).eccentricity === 0.5',
        'c.StadiumBorder().side === c.BorderSide.none',
        'c.StadiumBorder().copyWith({side: shared.side}).side === shared.side',
        'm.VisualDensity().horizontal === 0 && m.VisualDensity().vertical === 0',
        'm.VisualDensity.comfortable.horizontal === -1',
        'm.VisualDensity.compact.vertical === -2',
        'm.VisualDensity({horizontal: -1, vertical: -2}).copyWith({vertical: null}).vertical === -2',
        'c.ScrollPhysics().parent === null',
        'c.ClampingScrollPhysics({parent: null}).parent === null',
        'c.BouncingScrollPhysics({parent: shared.parent}).parent === shared.parent',
        'c.NeverScrollableScrollPhysics({parent: shared.parent}).parent === shared.parent',
      ]) {
        expect(h.boolean(expression), isTrue, reason: expression);
      }
      for (final entry in {
        'c.Curves.linear': Curves.linear,
        'c.Curves.ease': Curves.ease,
        'c.Curves.easeIn': Curves.easeIn,
        'c.Curves.easeOut': Curves.easeOut,
        'c.Curves.easeInOut': Curves.easeInOut,
        'c.Cubic(0.42, 0, 1, 1)': const Cubic(0.42, 0, 1, 1),
      }.entries) {
        for (final t in [0.0, 0.25, 0.5, 1.0]) {
          expect(
            h.number('${entry.key}.transform($t)'),
            closeTo(entry.value.transform(t), 1e-12),
          );
        }
      }
      expect(
        created.whereType<BouncingScrollPhysics>().single.decelerationRate,
        const BouncingScrollPhysics().decelerationRate,
      );
      h.execute('''
        var property = c.WidgetStateProperty.resolveWith(() => shared.rounded);
        var cursor = c.WidgetStateProperty.resolveWith(() => c.SystemMouseCursors.click);
        var style = m.ButtonStyle({shape: property, mouseCursor: cursor, visualDensity: m.VisualDensity.compact});
        var copy = style.copyWith({shape: null, mouseCursor: undefined, visualDensity: null});
      ''');
      expect(
        h.boolean('''
          copy.shape === style.shape && copy.mouseCursor === style.mouseCursor &&
          copy.visualDensity === m.VisualDensity.compact &&
          copy.shape.resolve(new Set()) === shared.rounded &&
          copy.mouseCursor.resolve(new Set()) === c.SystemMouseCursors.click
        '''),
        isTrue,
      );
      h.execute('shared.shape.value = shared.border');
      await t.pumpAndSettle();
      final decoration =
          t
                  .widget<Container>(_native<Container>('shared-decoration'))
                  .decoration!
              as BoxDecoration;
      final surface = t.widget<Material>(_native<Material>('shared-surface'));
      expect(surface.shape, same(decoration.border));
      expect(surface.shape, _border);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('wrong objects and deferred callback results fail at use sites', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'shared_objects');
    try {
      await t.pumpWidget(h.app('shared-objects'));
      await t.pumpAndSettle();
      h.execute('var c = shared.core; var m = shared.material;');
      for (final code in [
        'c.Curves.linear.transform("0.5")',
        'c.RoundedRectangleBorder({side: c.Color(0)})',
        'c.CircleBorder({eccentricity: 2})',
        'c.ScrollPhysics({parent: c.Curves.ease})',
        'm.VisualDensity({vertical: 5})',
        'm.ButtonStyle({visualDensity: c.Curves.ease})',
        'm.ButtonStyle({shape: shared.rounded})',
        'm.ButtonStyle({shape: c.WidgetStateProperty.resolveWith(() => shared.border)}).shape.resolve(new Set())',
        'm.ButtonStyle({mouseCursor: c.WidgetStateProperty.resolveWith(() => shared.circle)}).mouseCursor.resolve(new Set())',
      ]) {
        expect(
          () => h.execute(code),
          throwsA(isA<FlaxJsException>()),
          reason: code,
        );
      }
      final old = t.widget<Material>(_native<Material>('shared-surface')).shape;
      h.execute('shared.shape.value = c.Color(0)');
      await t.pump();
      expect(h.errors, hasLength(1));
      expect(
        h.errors.single,
        isA<ArgumentError>().having(
          (error) => error.message,
          'message',
          contains('incompatible Dart object'),
        ),
      );
      expect(
        t.widget<Material>(_native<Material>('shared-surface')).shape,
        same(old),
      );
      h.errors.clear();
      h.execute('shared.shape.value = shared.rounded');
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets(
    'animateTo follows Dart curves and completes a JavaScript Future',
    (t) async {
      final h = OwnedHarness(fixture: 'shared_objects');
      try {
        await t.pumpWidget(h.app('shared-scroll'));
        await t.pumpAndSettle();
        var completed = 0;
        for (final entry in [
          ('controller', 'Curves.easeIn', Curves.easeIn),
          ('controller', 'Cubic(0.42, 0, 1, 1)', const Cubic(0.42, 0, 1, 1)),
          ('listController', 'Curves.linear', Curves.linear),
        ]) {
          h.execute('''
          shared.${entry.$1}.jumpTo(0);
          shared.${entry.$1}.animateTo(300, {
            duration: shared.core.Duration({milliseconds: 1000}),
            curve: shared.core.${entry.$2}
          }).then(() => shared.completed++);
        ''');
          await t.pump();
          expect(h.runtime.pendingFutures, greaterThan(0));
          await t.pump(const Duration(milliseconds: 500));
          expect(
            h.number('shared.${entry.$1}.offset'),
            closeTo(300 * entry.$3.transform(0.5), 0.01),
          );
          expect(h.number('shared.completed'), completed);
          await t.pump(const Duration(milliseconds: 500));
          await t.pumpAndSettle();
          expect(h.number('shared.${entry.$1}.offset'), 300);
          expect(h.number('shared.completed'), ++completed);
          expect(h.runtime.pendingFutures, 0);
        }
        expect(h.errors, isEmpty);
        await t.pumpWidget(const SizedBox());
        await t.pumpAndSettle();
        expect(h.number('shared.disposed'), 2);
        expect(h.actualDisposals, 2);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'scroll physics control dragging, boundaries and parent composition',
    (t) async {
      final h = OwnedHarness(fixture: 'shared_objects');
      try {
        await t.pumpWidget(h.app('shared-scroll'));
        await t.pumpAndSettle();
        final scroll = _native<SingleChildScrollView>('shared-scroll');
        final list = _native<ListView>('shared-list');
        for (final finder in [scroll, list]) {
          await t.drag(finder, const Offset(0, -100));
          await t.pumpAndSettle();
        }
        expect(h.number('shared.controller.offset'), 0);
        expect(h.number('shared.listController.offset'), 0);
        expect(
          t.widget<SingleChildScrollView>(scroll).physics,
          isA<NeverScrollableScrollPhysics>(),
        );
        expect(
          t.widget<ListView>(list).physics,
          same(t.widget<SingleChildScrollView>(scroll).physics),
        );

        h.execute(
          'shared.physics.value = shared.core.ClampingScrollPhysics({parent: shared.parent})',
        );
        await t.pumpAndSettle();
        for (final finder in [scroll, list]) {
          await t.drag(finder, const Offset(0, -100));
          await t.pumpAndSettle();
        }
        expect(h.number('shared.controller.offset'), greaterThan(0));
        expect(h.number('shared.listController.offset'), greaterThan(0));
        h.execute(
          'shared.controller.jumpTo(0); shared.listController.jumpTo(0)',
        );
        await t.pumpAndSettle();
        final clamped = await t.startGesture(t.getCenter(scroll));
        await clamped.moveBy(const Offset(0, 100));
        await t.pump();
        expect(h.number('shared.controller.offset'), 0);
        await clamped.up();
        await t.pumpAndSettle();

        h.execute('''
        shared.physics.value = shared.core.BouncingScrollPhysics({parent: shared.parent});
        shared.contentHeight.value = 40;
      ''');
        await t.pumpAndSettle();
        expect(
          h.boolean('shared.physics.value.parent === shared.parent'),
          isTrue,
        );
        final physics = t.widget<SingleChildScrollView>(scroll).physics!;
        expect(physics, isA<BouncingScrollPhysics>());
        expect(physics.parent, isA<AlwaysScrollableScrollPhysics>());
        final controller = t.widget<SingleChildScrollView>(scroll).controller!;
        expect(controller.position.maxScrollExtent, 0);
        final bouncing = await t.startGesture(t.getCenter(scroll));
        await bouncing.moveBy(const Offset(0, 100));
        await t.pump();
        expect(h.number('shared.controller.offset'), lessThan(0));
        await bouncing.up();
        await t.pumpAndSettle();
        expect(h.number('shared.controller.offset'), closeTo(0, 0.01));
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'shape clipping and density updates match native Material layout',
    (t) async {
      final h = OwnedHarness(fixture: 'shared_objects');
      try {
        await t.pumpWidget(_comparison(h));
        await t.pumpAndSettle();
        final button = _native<TextButton>('shared-button');
        final standardSize = t.getSize(button);
        for (final entry in [
          ('shared.rounded', _rounded, 'standard', VisualDensity.standard),
          ('shared.circle', _circle, 'compact', VisualDensity.compact),
          (
            'shared.core.StadiumBorder({side: shared.side})',
            const StadiumBorder(side: _side),
            'comfortable',
            VisualDensity.comfortable,
          ),
          ('shared.border', _border, 'standard', VisualDensity.standard),
        ]) {
          h.execute('''
          shared.shape.value = ${entry.$1};
          shared.outline.value = shared.shape.value;
          shared.density.value = shared.material.VisualDensity.${entry.$3};
        ''');
          await t.pumpWidget(
            _comparison(h, shape: entry.$2, density: entry.$4),
          );
          await t.pumpAndSettle();
          final surface = _native<Material>('shared-surface');
          final reference = find.byKey(const ValueKey('native-surface'));
          expect(t.widget<Material>(surface).shape, entry.$2);
          expect(
            t.widget<InkWell>(_native<InkWell>('shared-ink')).customBorder,
            entry.$2,
          );
          expect(t.getSize(surface), t.getSize(reference));
          final actualFinder = _inside<PhysicalShape>(surface);
          final expectedFinder = _inside<PhysicalShape>(reference);
          final actual = t.widget<PhysicalShape>(actualFinder);
          final expected = t.widget<PhysicalShape>(expectedFinder);
          expect(actual.clipBehavior, Clip.antiAlias);
          final size = t.getSize(actualFinder);
          expect(size, t.getSize(expectedFinder));
          final actualPath = actual.clipper.getClip(size);
          final expectedPath = expected.clipper.getClip(size);
          for (var x = 0; x <= 16; x++) {
            for (var y = 0; y <= 8; y++) {
              final point = Offset(size.width * x / 16, size.height * y / 8);
              expect(actualPath.contains(point), expectedPath.contains(point));
            }
          }
          expect(t.widget<TextButton>(button).style!.visualDensity, entry.$4);
          expect(
            t.getSize(button),
            t.getSize(find.byKey(const ValueKey('native-button'))),
          );
          if (entry.$3 == 'compact') {
            expect(t.getSize(button).height, lessThan(standardSize.height));
          }
        }
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets(
    'mouse and button states use native values and retire callbacks',
    (t) async {
      final h = OwnedHarness(fixture: 'shared_objects');
      try {
        await t.pumpWidget(h.app('shared-objects'));
        await t.pumpAndSettle();
        final ink = _native<InkWell>('shared-ink');
        final button = _native<TextButton>('shared-button');
        final mouse = await t.createGesture(kind: PointerDeviceKind.mouse);
        await mouse.addPointer(location: const Offset(700, 400));
        await mouse.moveTo(t.getCenter(ink));
        await t.pump();
        expect(
          RendererBinding.instance.mouseTracker.debugDeviceActiveCursor(1),
          SystemMouseCursors.text,
        );
        h.execute('shared.cursor.value = shared.core.SystemMouseCursors.click');
        await t.pump();
        expect(
          RendererBinding.instance.mouseTracker.debugDeviceActiveCursor(1),
          SystemMouseCursors.click,
        );

        await mouse.moveTo(t.getCenter(button));
        await mouse.down(t.getCenter(button));
        await t.pumpAndSettle();
        expect(h.boolean('shared.shapeStates.includes(true)'), isTrue);
        expect(t.widget<Material>(_inside<Material>(button)).shape, _circle);
        await mouse.up();
        await t.pumpAndSettle();
        expect(h.number('shared.presses'), 1);
        final retained = t.widget<TextButton>(button);
        h.execute('shared.enabled.value = false');
        await t.pumpAndSettle();
        expect(h.boolean('shared.cursorStates.includes(true)'), isTrue);
        expect(
          RendererBinding.instance.mouseTracker.debugDeviceActiveCursor(1),
          SystemMouseCursors.forbidden,
        );
        h.execute('shared.showButton.value = false');
        await t.pumpAndSettle();
        retained.onPressed!();
        expect(h.number('shared.presses'), 1);
        await mouse.removePointer();
        final closed = h.session.close();
        await t.pumpWidget(const SizedBox());
        await t.pumpAndSettle();
        await closed;
        final calls = Map<String, int>.from(h.runtime.jsCalls);
        retained.onPressed!();
        final retired = throwsA(
          isA<StateError>().having(
            (error) => error.message,
            'message',
            'Retired JS callback',
          ),
        );
        expect(
          () => retained.style!.shape!.resolve({WidgetState.pressed}),
          retired,
        );
        expect(
          () => retained.style!.mouseCursor!.resolve({WidgetState.disabled}),
          retired,
        );
        expect(h.runtime.jsCalls, calls);
        expect(h.runtime.handlesAtDispose, 0);
        expect(h.runtime.activeSubscriptions, 0);
        expect(h.errors, isEmpty);
      } finally {
        await h.finish(t);
      }
    },
  );

  testWidgets('Material retains its native shape and borderRadius constraint', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'shared_objects');
    try {
      await t.pumpWidget(h.app('shared-invalid-material'));
      await t.pumpAndSettle();
      expect(h.errors, hasLength(1));
      expect(
        h.errors.single.toString(),
        allOf(contains('shape'), contains('borderRadius')),
      );
      h.errors.clear();
      await t.pumpWidget(h.app('shared-objects'));
      await t.pumpAndSettle();
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });

  testWidgets('session close retires an in-flight animated scroll Future', (
    t,
  ) async {
    final h = OwnedHarness(fixture: 'shared_objects');
    try {
      await t.pumpWidget(h.app('shared-scroll'));
      await t.pumpAndSettle();
      h.execute('''
        shared.controller.animateTo(300, {
          duration: shared.core.Duration({seconds: 2}),
          curve: shared.core.Curves.easeInOut
        }).then(() => shared.completed++);
      ''');
      await t.pump();
      await t.pump(const Duration(milliseconds: 200));
      expect(h.runtime.pendingFutures, 1);
      expect(h.number('shared.completed'), 0);
      final closed = h.session.close();
      await t.pumpWidget(const SizedBox());
      await t.pumpAndSettle();
      await closed;
      final calls = Map<String, int>.from(h.runtime.jsCalls);
      await t.pump(const Duration(seconds: 3));
      expect(h.runtime.jsCalls, calls);
      expect(h.runtime.pendingFutures, 0);
      expect(h.runtime.handlesAtDispose, 0);
      expect(h.errors, isEmpty);
    } finally {
      await h.finish(t);
    }
  });
}
