import 'package:flutter/gestures.dart';
import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import 'package:flax_test/flax_test.dart';

import '../support/harness.dart' show host, registry, source, Harness;

void main() {
  tearDown(() => Flax.registerPlugins([]));

  testWidgets('Canvas plugin installs constructors', (tester) async {
    final h = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: h.create,
          source: source,
          bindings: registry,
          plugins: const [FlaxCanvasPlugin()],
          onError: (e, _) => h.errors.add(e),
        ),
      ),
    );
    expect(h.errors, isEmpty);
    h.execute(
      'if (typeof OffscreenCanvas !== "function") throw Error("missing canvas")',
    );
    await tester.pumpWidget(const SizedBox());
    for (var i = 0; i < 4; i++) {
      await tester.pump(const Duration(milliseconds: 1));
    }
  });

  testWidgets('rAF flush, shared views, resize reset and input snapshots', (
    tester,
  ) async {
    final h = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: FlaxView(
            createRuntime: h.create,
            source: flaxTestFixtureSource('canvas'),
            bindings: registry,
            plugins: const [FlaxCanvasPlugin()],
            onError: (e, _) => h.errors.add(e),
          ),
        ),
      ),
    );
    String read(String code) =>
        (h.runtime.evaluate(code) as FlaxJsString).value;
    expect(h.errors, isEmpty);
    expect(find.byType(FlaxCanvasView), findsNWidgets(2));

    h.execute(r'''
      canvasHooks.order = ['script'];
      queueMicrotask(() => canvasHooks.order.push('microtask'));
      requestAnimationFrame(() => {
        canvasHooks.order.push('raf');
        canvasHooks.context.fillRect(20, 0, 4, 4);
        queueMicrotask(() => canvasHooks.order.push('raf-microtask'));
      });
    ''');
    expect(read('canvasHooks.order.join()'), 'script');
    h.runtime.drainMicrotasks(maxJobsHint: 1024);
    expect(read('canvasHooks.order.join()'), 'script,microtask');
    await tester.pump();
    expect(
      read('canvasHooks.order.join()'),
      'script,microtask,raf,raf-microtask',
    );
    expect(find.byType(FlaxCanvasView), findsNWidgets(2));

    h.execute('canvasHooks.canvas.width = 40; canvasHooks.canvas.height = 20;');
    h.runtime.drainMicrotasks(maxJobsHint: 1024);
    await tester.pump();

    await tester.tap(host('left'));
    await tester.pump();
    final gesture = await tester.createGesture(kind: PointerDeviceKind.mouse);
    await gesture.addPointer(location: Offset.zero);
    addTearDown(gesture.removePointer);
    await gesture.moveTo(tester.getCenter(host('left')));
    await tester.pump();
    await tester.sendEventToBinding(
      PointerScrollEvent(
        position: tester.getCenter(host('left')),
        scrollDelta: const Offset(0, 20),
      ),
    );
    await tester.pump();
    await tester.sendKeyEvent(LogicalKeyboardKey.arrowLeft);
    await tester.pump();
    expect(read('canvasHooks.events.join()'), contains('down:'));
    expect(read('canvasHooks.events.join()'), contains('enter'));
    expect(read('canvasHooks.events.join()'), contains('scroll'));
    expect(read('canvasHooks.keys.join()'), contains('keydown'));

    h.execute('canvasHooks.focus.dispose()');
    await tester.pumpWidget(const SizedBox());
    for (var i = 0; i < 4; i++) {
      await tester.pump(const Duration(milliseconds: 1));
    }
  }, timeout: const Timeout(Duration(seconds: 20)));

  testWidgets('same-turn transfer and blob bitmap sizes', (tester) async {
    final h = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: h.create,
          source: flaxTestFixtureSource('canvas'),
          bindings: registry,
          plugins: const [FlaxCanvasPlugin()],
          onError: (e, _) => h.errors.add(e),
        ),
      ),
    );
    await flaxTestRunHostScript(tester, h, r'''
      const src = new OffscreenCanvas(2, 2);
      const context = src.getContext('2d');
      context.fillStyle = '#ff0000';
      context.fillRect(0, 0, 2, 2);
      const bitmap = src.transferToImageBitmap();
      const dst = new OffscreenCanvas(2, 2);
      dst.getContext('2d').drawImage(bitmap, 0, 0);
      const transferred = await dst.getContext('2d').getImageDataAsync(0, 0, 1, 1);
      if (transferred.data[0] < 200 || transferred.data[3] < 200) {
        throw Error('transfer draw missed');
      }
      const binary = atob('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==');
      const png = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) png[i] = binary.charCodeAt(i);
      const decoded = await createImageBitmap({ arrayBuffer: () => Promise.resolve(png.buffer) });
      if (decoded.width !== 1 || decoded.height !== 1) {
        throw Error('blob bitmap size ' + decoded.width + 'x' + decoded.height);
      }
      const tiny = new OffscreenCanvas(1, 1);
      tiny.getContext('2d').drawImage(decoded, 0, 0);
      const drawn = await tiny.getContext('2d').getImageDataAsync(0, 0, 1, 1);
      if (drawn.data[3] === 0) throw Error('blob bitmap did not draw');
    ''');
    expect(h.errors, isEmpty);
    await tester.pumpWidget(const SizedBox());
    for (var i = 0; i < 4; i++) {
      await tester.pump(const Duration(milliseconds: 1));
    }
  }, timeout: const Timeout(Duration(seconds: 20)));
}
