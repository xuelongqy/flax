import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_canvas_example/main.dart' as app;
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets(
    'Afterglow composes, animates, captures and releases its canvas',
    (tester) async {
      tester.view.physicalSize = const Size(1100, 1100);
      tester.view.devicePixelRatio = 1;
      addTearDown(tester.view.resetPhysicalSize);
      addTearDown(tester.view.resetDevicePixelRatio);
      await tester.runAsync(app.startApplication);
      await tester.pumpAndSettle();
      expect(find.text('Make light linger.'), findsOneWidget);
      final surface = tester
          .widget<FlaxCanvasView>(find.byType(FlaxCanvasView))
          .canvas;
      final initial = await pixels(tester, surface);
      expect(initial.any((byte) => byte != 0), isTrue);

      await tester.drag(
        find.byKey(const ValueKey('light-field')).last,
        const Offset(90, -40),
      );
      await tester.pumpAndSettle();
      expect(find.text('Light moved · your composition'), findsOneWidget);
      expect(await pixels(tester, surface), isNot(orderedEquals(initial)));

      await tap(tester, 'composition-1');
      await tap(tester, 'palette-1');
      await tap(tester, 'soft-glow');
      expect(find.text('Orbit · Ember · soft glow'), findsOneWidget);
      await tap(tester, 'capture');
      await waitFor(
        tester,
        () => find.textContaining('PNG captured').evaluate().isNotEmpty,
      );
      final postcard = tester
          .widgetList<FlaxCanvasView>(find.byType(FlaxCanvasView))
          .last
          .canvas;
      expect((postcard.width, postcard.height), (330, 180));
      final captured = await pixels(tester, postcard);
      expect(captured.any((byte) => byte != 0), isTrue);

      await tap(tester, 'composition-2');
      var updates = 0;
      void onPaint() => updates++;
      surface.addListener(onPaint);
      await tap(tester, 'motion', settle: false);
      final beforeMotion = updates;
      await tester.pump(const Duration(milliseconds: 16));
      await tester.pump(const Duration(milliseconds: 16));
      expect(updates, greaterThan(beforeMotion));
      expect(await pixels(tester, postcard), orderedEquals(captured));
      await tap(tester, 'motion');
      final paused = updates;
      await tester.pump(const Duration(milliseconds: 100));
      expect(updates, paused);
      surface.removeListener(onPaint);

      final reset = find.text('Reset studio');
      await tester.ensureVisible(reset);
      await tester.tap(reset);
      await tester.pumpAndSettle();
      expect(find.text('Bloom · Aurora · crisp light'), findsOneWidget);
      expect(find.byType(FlaxCanvasView), findsOneWidget);
      expect(await pixels(tester, surface), orderedEquals(initial));

      tester.view.physicalSize = const Size(390, 844);
      await tester.pumpAndSettle();
      expect(
        tester.getSize(find.byType(FlaxCanvasView)).width,
        lessThanOrEqualTo(342),
      );
      await tap(tester, 'palette-2');
      expect(find.text('Bloom · Tidal · crisp light'), findsOneWidget);
      expect(tester.takeException(), isNull);

      // Reset while PNG work is pending must not resurrect an old postcard.
      await tap(tester, 'capture', settle: false);
      await tester.ensureVisible(reset);
      await tester.tap(reset);
      await tester.pumpAndSettle();
      await tester.runAsync(
        () => Future<void>.delayed(const Duration(milliseconds: 150)),
      );
      await tester.pumpAndSettle();
      expect(find.byType(FlaxCanvasView), findsOneWidget);
      await tap(tester, 'motion', settle: false);
      await tester.pumpWidget(const SizedBox.shrink());
      await tester.pumpAndSettle();
      expect(surface.closed, isTrue);
      expect(postcard.closed, isTrue);
      expect(tester.takeException(), isNull);
    },
  );
}

Future<void> tap(WidgetTester tester, String id, {bool settle = true}) async {
  final target = find.byKey(ValueKey(id)).last;
  await tester.ensureVisible(target);
  await tester.tap(target);
  if (settle) {
    await tester.pumpAndSettle();
  } else {
    await tester.pump();
  }
}

Future<void> waitFor(WidgetTester tester, bool Function() ready) async {
  for (var i = 0; i < 300 && !ready(); i++) {
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 10)),
    );
    await tester.pump(const Duration(milliseconds: 10));
  }
  expect(ready(), isTrue, reason: 'PNG encode/decode did not finish');
}

Future<Uint8List> pixels(WidgetTester tester, FlaxCanvasSurface surface) async {
  final result = await tester.runAsync(() async {
    final image = (await surface.rasterize())!;
    try {
      final bytes = (await image.toByteData(
        format: ui.ImageByteFormat.rawRgba,
      ))!;
      return Uint8List.fromList(
        bytes.buffer.asUint8List(bytes.offsetInBytes, bytes.lengthInBytes),
      );
    } finally {
      image.dispose();
    }
  });
  return result!;
}
