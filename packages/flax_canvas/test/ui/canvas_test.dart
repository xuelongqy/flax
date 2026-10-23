import 'dart:ui' as ui;

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
    await flaxTestUnmount(tester);
    for (var i = 0; i < 4; i++) {
      await tester.pump(const Duration(milliseconds: 1));
    }
  });

  testWidgets('committed pictures survive command buffer reuse and growth', (
    tester,
  ) async {
    final h = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: h.create,
          source: flaxTestFixtureSource('canvas', packageName: 'flax_canvas'),
          bindings: registry,
          plugins: const [FlaxCanvasPlugin()],
          onError: (e, _) => h.errors.add(e),
        ),
      ),
    );
    await flaxTestRunHostScript(tester, h, r'''
      const canvas = new OffscreenCanvas(3, 1);
      const context = canvas.getContext('2d');
      context.fillStyle = '#ff0000';
      context.fillRect(0, 0, 1, 1);
      context.measureText('');
      context.fillStyle = '#00ff00';
      context.fillRect(1, 0, 1, 1);
      context.measureText('');
      context.fillStyle = '#0000ff';
      for (let i = 0; i < 1000; i++) context.fillRect(2, 0, 1, 1);
      const pixels = await context.getImageDataAsync(0, 0, 3, 1);
      const expected = [255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255];
      if (pixels.data.some((value, i) => value !== expected[i])) {
        throw Error('command buffer reuse changed committed pixels: ' + pixels.data);
      }
    ''');
    expect(h.errors, isEmpty);
    await flaxTestUnmount(tester);
  }, timeout: const Timeout(Duration(seconds: 20)));

  testWidgets('first-draw clips survive filtered layer composition', (
    tester,
  ) async {
    final h = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: h.create,
          source: flaxTestFixtureSource('canvas', packageName: 'flax_canvas'),
          bindings: registry,
          plugins: const [FlaxCanvasPlugin()],
          onError: (e, _) => h.errors.add(e),
        ),
      ),
    );
    await flaxTestRunHostScript(tester, h, r'''
      for (const filter of ['none', 'opacity(1)']) {
        for (const blend of ['source-over', 'screen', 'copy']) {
          const c = new OffscreenCanvas(4, 2).getContext('2d');
          c.save(); c.beginPath(); c.rect(1, 0, 2, 2); c.clip();
          c.filter = filter; c.globalCompositeOperation = blend;
          c.fillStyle = 'red'; c.fillRect(0, 0, 4, 2); c.restore();
          const pixels = (await c.getImageDataAsync(0, 0, 4, 2)).data;
          for (let i = 0; i < pixels.length; i++) {
            const x = (i >> 2) % 4;
            const expected = x > 0 && x < 3 && (i % 4 === 0 || i % 4 === 3) ? 255 : 0;
            if (pixels[i] !== expected) throw Error(filter + '/' + blend + ': ' + pixels);
          }
        }
      }
      const c = new OffscreenCanvas(4, 2).getContext('2d');
      c.save(); c.beginPath(); c.rect(1, 0, 2, 2); c.clip(); c.restore();
      c.fillStyle = 'red'; c.fillRect(0, 0, 4, 2);
      const pixels = (await c.getImageDataAsync(0, 0, 4, 2)).data;
      if (pixels.some((v, i) => v !== (i % 4 === 0 || i % 4 === 3 ? 255 : 0))) {
        throw Error('restored first-draw scissor: ' + pixels);
      }
    ''');
    expect(h.errors, isEmpty);
    await flaxTestUnmount(tester);
  }, timeout: const Timeout(Duration(seconds: 20)));

  testWidgets('rotated screen draws preserve every backdrop pixel', (
    tester,
  ) async {
    await tester.runAsync(() async {
      const width = 1062;
      const height = 580;
      const bounds = ui.Rect.fromLTWH(0, 0, 1062, 580);
      Future<Uint8List> render(double? phase) async {
        final recorder = ui.PictureRecorder();
        final canvas = ui.Canvas(recorder);
        canvas.drawRect(bounds, ui.Paint()..color = const ui.Color(0xff00ff00));
        for (var y = 0; y < height; y += 29) {
          canvas.drawRect(
            ui.Rect.fromLTWH(0, y.toDouble(), width.toDouble(), 1),
            ui.Paint()..color = const ui.Color(0xff0000ff),
          );
        }
        for (var x = 0; x < width; x += 31) {
          canvas.drawRect(
            ui.Rect.fromLTWH(x.toDouble(), 0, 1, height.toDouble()),
            ui.Paint()..color = const ui.Color(0xffff0000),
          );
        }
        if (phase != null) {
          // Black screen leaves the opaque backdrop unchanged, even after AA.
          for (var i = 0; i < 72; i++) {
            canvas.save();
            canvas.translate(width / 2, height / 2);
            canvas.rotate(phase + i * 0.173);
            canvas.drawRect(
              const ui.Rect.fromLTWH(-80, -40, 160, 80),
              ui.Paint()
                ..color = const ui.Color(0xff000000)
                ..blendMode = ui.BlendMode.screen,
            );
            canvas.restore();
          }
        }
        final picture = recorder.endRecording();
        try {
          final image = await picture.toImage(width, height);
          try {
            return (await image.toByteData(format: ui.ImageByteFormat.rawRgba))!
                .buffer
                .asUint8List();
          } finally {
            image.dispose();
          }
        } finally {
          picture.dispose();
        }
      }

      final expected = await render(null);
      for (final phase in [0.013, 0.17, 0.73]) {
        final actual = await render(phase);
        var differences = 0;
        var first = -1;
        for (var i = 0; i < expected.length; i++) {
          if (actual[i] != expected[i]) {
            differences++;
            if (first < 0) first = i;
          }
        }
        expect(
          differences,
          0,
          reason: 'phase $phase changed backdrop at byte $first',
        );
      }
    });
  });

  testWidgets('filtered layers preserve resolved pixels and draw order', (
    tester,
  ) async {
    await tester.runAsync(() async {
      const bounds = ui.Rect.fromLTWH(0, 0, 64, 32);
      final sourceRecorder = ui.PictureRecorder();
      final sourceCanvas = ui.Canvas(sourceRecorder);
      for (var x = 0; x < 64; x++) {
        sourceCanvas.drawRect(
          ui.Rect.fromLTWH(x.toDouble(), 0, 1, 32),
          ui.Paint()..color = ui.Color.fromARGB(x * 4, 203, 87, 149),
        );
      }
      // An asymmetric source also catches GLES texture-coordinate inversions.
      sourceCanvas.drawRect(
        const ui.Rect.fromLTWH(4, 3, 12, 5),
        ui.Paint()..color = const ui.Color(0x8016c293),
      );
      final sourcePicture = sourceRecorder.endRecording();
      final image = await sourcePicture.toImage(64, 32);
      sourcePicture.dispose();
      final filter = ui.ImageFilter.compose(
        outer: const ui.ColorFilter.matrix([
          1.2,
          -.1,
          -.1,
          0,
          0,
          -.1,
          1.2,
          -.1,
          0,
          0,
          -.1,
          -.1,
          1.2,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
        ]),
        inner: ui.ImageFilter.blur(sigmaX: 1.8, sigmaY: 1.8),
      );
      Future<Uint8List> pixels(
        bool materializeParent,
        int offset,
        bool trailingDraw,
        bool clipped,
        bool paintedParent,
        bool fractionalClip,
      ) async {
        final recorder = ui.PictureRecorder();
        final canvas = ui.Canvas(recorder);
        canvas.drawColor(const ui.Color(0xff17324a), ui.BlendMode.src);
        if (clipped) canvas.clipRect(const ui.Rect.fromLTWH(20, 8, 12, 12));
        canvas.saveLayer(bounds, ui.Paint()..blendMode = ui.BlendMode.screen);
        canvas.saveLayer(bounds, ui.Paint()..imageFilter = filter);
        if (paintedParent) {
          canvas.drawColor(const ui.Color(0xff245e31), ui.BlendMode.src);
        }
        if (fractionalClip) {
          canvas.clipRect(
            bounds.shift(const ui.Offset(.5, 0)),
            doAntiAlias: false,
          );
        }
        if (materializeParent && !paintedParent) {
          // Force the copy path after applying the same clip as the child.
          canvas.drawRect(
            const ui.Rect.fromLTWH(24, 10, 1, 1),
            ui.Paint()..color = const ui.Color(0xffffffff),
          );
          canvas.drawColor(const ui.Color(0x00000000), ui.BlendMode.src);
        }
        // Both paths retain the same source and filter quantization boundaries.
        canvas.saveLayer(
          bounds,
          ui.Paint()
            ..blendMode = paintedParent
                ? ui.BlendMode.srcOver
                : ui.BlendMode.src,
        );
        canvas.drawImage(
          image,
          ui.Offset(offset.toDouble(), 0),
          ui.Paint()
            ..blendMode = paintedParent
                ? ui.BlendMode.src
                : ui.BlendMode.srcOver,
        );
        canvas.restore();
        if (trailingDraw) {
          canvas.drawRect(
            const ui.Rect.fromLTWH(8, 4, 16, 12),
            ui.Paint()..color = const ui.Color(0x804fa7c3),
          );
        }
        canvas.restore();
        canvas.restore();
        final picture = recorder.endRecording();
        try {
          final result = await picture.toImage(64, 32);
          try {
            return (await result.toByteData(
              format: ui.ImageByteFormat.rawRgba,
            ))!.buffer.asUint8List();
          } finally {
            result.dispose();
          }
        } finally {
          picture.dispose();
        }
      }

      try {
        for (final variant in [
          (
            offset: 0,
            trailing: false,
            clipped: false,
            painted: false,
            fractional: false,
          ),
          (
            offset: 1,
            trailing: false,
            clipped: false,
            painted: false,
            fractional: false,
          ),
          (
            offset: 0,
            trailing: true,
            clipped: false,
            painted: false,
            fractional: false,
          ),
          (
            offset: 1,
            trailing: true,
            clipped: false,
            painted: false,
            fractional: false,
          ),
          (
            offset: 0,
            trailing: false,
            clipped: true,
            painted: false,
            fractional: false,
          ),
          (
            offset: 0,
            trailing: false,
            clipped: false,
            painted: true,
            fractional: false,
          ),
          (
            offset: 0,
            trailing: false,
            clipped: false,
            painted: false,
            fractional: true,
          ),
        ]) {
          expect(
            await pixels(
              false,
              variant.offset,
              variant.trailing,
              variant.clipped,
              variant.painted,
              variant.fractional,
            ),
            orderedEquals(
              await pixels(
                true,
                variant.offset,
                variant.trailing,
                variant.clipped,
                variant.painted,
                variant.fractional,
              ),
            ),
            reason: '$variant',
          );
        }
      } finally {
        image.dispose();
      }
    });
  }, timeout: const Timeout(Duration(seconds: 20)));

  testWidgets('rAF flush, shared views, resize reset and input references', (
    tester,
  ) async {
    final h = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: FlaxView(
            createRuntime: h.create,
            source: flaxTestFixtureSource('canvas', packageName: 'flax_canvas'),
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
    await tester.sendKeyEvent(
      LogicalKeyboardKey.arrowLeft,
      physicalKey: PhysicalKeyboardKey.arrowLeft,
    );
    await tester.pump();
    expect(read('canvasHooks.events.join()'), contains('down:'));
    expect(read('canvasHooks.events.join()'), contains('enter'));
    expect(read('canvasHooks.events.join()'), contains('scroll'));
    expect(read('canvasHooks.keys.join()'), contains('keydown'));

    h.execute('canvasHooks.focus.dispose()');
    await flaxTestUnmount(tester);
    for (var i = 0; i < 4; i++) {
      await tester.pump(const Duration(milliseconds: 1));
    }
  }, timeout: const Timeout(Duration(seconds: 20)));

  testWidgets('reset, transfer state and straight alpha pixels', (
    tester,
  ) async {
    final h = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: h.create,
          source: flaxTestFixtureSource('canvas', packageName: 'flax_canvas'),
          bindings: registry,
          plugins: const [FlaxCanvasPlugin()],
          onError: (e, _) => h.errors.add(e),
        ),
      ),
    );
    await flaxTestRunHostScript(tester, h, r'''
      function check(condition, message) { if (!condition) throw Error(message); }
      const canvas = new OffscreenCanvas(4, 2);
      for (const [width,height] of [[0,1],[1,0],[0,0]]) {
        const empty = new OffscreenCanvas(width,height); empty.getContext('2d');
        let error;
        try { empty.transferToImageBitmap(); } catch (e) { error = e; }
        check(error && error.name === 'UnknownError', 'empty bitmap allocation');
      }
      const c = canvas.getContext('2d');
      c.fillStyle = 'red'; c.fillRect(0, 0, 4, 2);
      c.measureText(''); // A previous committed batch must also disappear.
      c.save(); c.translate(1, 0); c.rect(0, 0, 1, 1); c.clip();
      c.fillRect(0, 0, 4, 2); c.reset(); c.restore();
      check(c.fillStyle === '#000000' && c.getTransform().e === 0, 'reset state');
      check(!c.isPointInPath(1, 0), 'reset path');
      let pixels = await c.getImageDataAsync(0, 0, 4, 2);
      check(pixels.data.every(v => v === 0), 'reset pixels: ' + pixels.data);
      c.fillStyle = 'red'; c.translate(1, 0); c.save();
      c.beginPath(); c.rect(0, 0, 1, 1); c.clip(); c.fillRect(0, 0, 4, 2);
      const bitmap = canvas.transferToImageBitmap();
      check(c.fillStyle === '#ff0000' && c.getTransform().e === 1, 'transfer state');
      check(c.isPointInPath(1.5, .5), 'transfer path');
      pixels = await c.getImageDataAsync(0, 0, 4, 2);
      check(pixels.data.every(v => v === 0), 'transfer source clear');
      c.fillRect(0, 0, 4, 2); c.restore();
      pixels = await c.getImageDataAsync(0, 0, 4, 2);
      check(pixels.data[7] === 255 && pixels.data[11] === 0, 'transfer clip');
      c.reset(); c.save(); c.rect(0, 0, 1, 1); c.clip(); c.globalAlpha = .2;
      c.translate(3, 1); c.filter = 'invert(100%)';
      const rgba = new ImageData(new Uint8ClampedArray([200, 100, 50, 128]), 1, 1);
      c.putImageData(rgba, 2, 0); c.restore();
      pixels = await c.getImageDataAsync(2, 0, 1, 1);
      check(pixels.data.every((v, i) => Math.abs(v - rgba.data[i]) <= 1),
            'straight RGBA round trip: ' + pixels.data);
      check(rgba.data[0] === 200, 'ImageData was mutated');
      const semi = await createImageBitmap(rgba);
      c.reset(); c.drawImage(semi, 0, 0);
      pixels = await c.getImageDataAsync(0, 0, 1, 1);
      check(pixels.data.every((v, i) => Math.abs(v - rgba.data[i]) <= 1),
            'bitmap straight alpha: ' + pixels.data);
      const opaque = new OffscreenCanvas(1, 1).getContext('2d', {alpha:false});
      opaque.fillStyle = 'red'; opaque.fillRect(0, 0, 1, 1); opaque.reset();
      pixels = await opaque.getImageDataAsync(0, 0, 1, 1);
      check(pixels.data.join() === '0,0,0,255', 'opaque reset');
      bitmap.close(); semi.close();
    ''');
    expect(h.errors, isEmpty);
    await flaxTestUnmount(tester);
  }, timeout: const Timeout(Duration(seconds: 20)));

  testWidgets(
    'native Canvas API overloads, stroke hits and synchronous pixels',
    (tester) async {
      final h = Harness();
      await tester.pumpWidget(
        MaterialApp(
          home: FlaxView(
            createRuntime: h.create,
            source: flaxTestFixtureSource('canvas', packageName: 'flax_canvas'),
            bindings: registry,
            plugins: const [FlaxCanvasPlugin()],
            onError: (e, _) => h.errors.add(e),
          ),
        ),
      );
      await flaxTestRunHostScript(tester, h, r'''
      function check(condition, message) { if (!condition) throw Error(message); }
      const canvas = new OffscreenCanvas(80, 24), c = canvas.getContext('2d');
      check(c.isContextLost() === false, 'live context');
      c.lang = 'zh-CN'; c.fontKerning = 'none'; c.fontStretch = 'condensed';
      c.fontVariantCaps = 'small-caps'; c.textRendering = 'geometricPrecision';
      c.save(); c.fontKerning = 'normal'; c.restore();
      check(c.fontKerning === 'none', 'text state save/restore');
      c.fontKerning = 'invalid'; check(c.fontKerning === 'none', 'invalid text enum');
      c.measureText('AV'); c.reset();
      check(c.lang === 'inherit' && c.fontVariantCaps === 'normal', 'text reset');
      c.setTransform({m11:2,m22:3,m41:1});
      check(c.getTransform().a === 2 && c.getTransform().f === 0, 'matrix aliases');
      let failed = false;
      try { c.setTransform({a:1,m11:2}); } catch { failed = true; }
      check(failed, 'matrix conflict'); c.setTransform({});
      const path = new Path2D(); path.moveTo(0,2); path.lineTo(10,2);
      c.lineWidth = 2; c.setLineDash([2,2]);
      check(c.isPointInStroke(path,1,2) && !c.isPointInStroke(path,3,2), 'stroke dash');
      c.setLineDash([]); c.scale(2,3);
      check(c.isPointInStroke(path,4,8.5) && !c.isPointInStroke(path,4,9.5), 'stroke CTM');
      c.beginPath(); c.moveTo(0,2); c.lineTo(10,2);
      check(c.isPointInStroke(4,8.5), 'current stroke CTM');
      c.resetTransform(); check(!c.isPointInStroke(NaN,1), 'invalid hit point');
      const rounded = new Path2D(); rounded.roundRect(0,0,8,8,[{x:4,y:2},0]);
      check(!c.isPointInPath(rounded,.1,.1) && c.isPointInPath(rounded,4,4), 'elliptical radii');
      const shifted = new Path2D(); shifted.addPath(rounded,{m41:10});
      check(c.isPointInPath(shifted,14,4), 'addPath matrix defaults');
      c.reset(); c.translate(NaN,1); c.setTransform({a:Infinity});
      c.fillRect(Infinity,0,1,1); c.moveTo(NaN,0);
      const image = new ImageData(new Uint8ClampedArray([
        255,0,0,255, 0,255,0,255, 0,0,255,255, 200,100,50,128]),2,2);
      const blank = c.createImageData(image);
      check(blank.width === 2 && blank.data.every(v => v === 0), 'createImageData copy size');
      c.putImageData(image,1,1,2,2,-1,-1);
      const pixels = c.getImageData(0,0,4,4);
      check(pixels.data[(2*4+2)*4+3] === 128 && pixels.data[3] === 0, 'dirty rectangle');
      const backwards = c.getImageData(3,3,-1,-1);
      check(backwards.width === 1 && Math.abs(backwards.data[0]-200) <= 1, 'negative read size');
      const outside = c.getImageData(-1,-1,2,2);
      check(outside.data.every(v => v === 0), 'out of bounds pixels');
      failed = false; try { c.getImageData(0,0,0,1); } catch { failed = true; }
      check(failed, 'zero read dimensions');
      const asynchronous = await c.getImageDataAsync(0,0,4,4);
      check(asynchronous.data.every((v,i) => v === pixels.data[i]), 'sync/async readback parity');
      c.reset(); c.font = '20px sans-serif'; c.textBaseline = 'top';
      c.fillText('MMMM',0,0,16);
      const text = c.getImageData(0,0,80,24);
      let right = -1;
      for (let y=0;y<24;y++) for (let x=0;x<80;x++) if (text.data[(y*80+x)*4+3]) right=Math.max(right,x);
      check(right >= 0 && right <= 17, 'text maxWidth '+right);
      c.reset();
      const referenceGradient = c.createLinearGradient(0,0,10,0);
      referenceGradient.addColorStop(0,'red'); referenceGradient.addColorStop(1,'blue');
      c.fillStyle = referenceGradient; c.fillRect(0,0,30,1);
      const referenceColors = c.getImageData(0,0,30,1).data;
      c.reset(); c.translate(10,0);
      const gradient = c.createLinearGradient(0,0,10,0);
      gradient.addColorStop(0,'red'); gradient.addColorStop(1,'blue');
      c.fillStyle = gradient; c.resetTransform(); c.fillRect(0,0,30,1);
      const colors = c.getImageData(0,0,30,1).data;
      check(colors.every((v,i) => Math.abs(v-referenceColors[i]) <= 1) && colors[0] > colors[5*4],
        'gradient creation CTM is ignored; drawing CTM controls coordinates');
      c.beginPath(); c.rect(0,2,30,1); c.translate(7,0); c.fill();
      const bakedColors = c.getImageData(0,2,30,1).data;
      check(bakedColors[0] === 255 && Math.abs(bakedColors[12*4]-colors[5*4]) <= 1,
        'baked path geometry retains the draw-time gradient transform');
      c.reset(); c.scale(2,3); c.lineWidth=2;
      c.beginPath(); c.moveTo(0,2); c.lineTo(10,2); c.stroke();
      check(c.getImageData(4,8,1,1).data[3] > 0, 'stroke width follows CTM');
      c.reset(); c.fillRect(2,2,-2,-2);
      check(c.getImageData(0,0,1,1).data[3] === 255, 'negative rectangle dimensions');
      c.reset(); c.fillRect(.25,.25,1,1);
      const smooth = c.getImageData(0,0,2,2).data;
      c.reset(); c.imageSmoothingEnabled = false; c.fillRect(.25,.25,1,1);
      check(c.getImageData(0,0,2,2).data.every((v,i) => v === smooth[i]), 'vector antialiasing');
      const textCanvas = new OffscreenCanvas(100,80), t = textCanvas.getContext('2d');
      const linear = t.createLinearGradient(0,0,100,0);
      const radial = t.createRadialGradient(0,0,0,0,0,100);
      const conic = t.createConicGradient(0,0,0);
      for (const gradient of [linear,radial,conic]) {
        gradient.addColorStop(0,'red'); gradient.addColorStop(1,'blue');
      }
      const tile = await createImageBitmap(new ImageData(new Uint8ClampedArray([
        255,0,0,255,0,0,255,255,255,0,0,255,0,0,255,255]),2,2));
      for (const coordinates of [
        [0,0,undefined,2], [0,0,2,undefined],
        [0,0,undefined,2,0,0,2,2], [0,0,2,undefined,0,0,2,2],
      ]) t.drawImage(tile,...coordinates);
      check(t.getImageData(0,0,2,2).data.every(v => v === 0),
        'explicit undefined image dimensions must not draw');
      const pattern = t.createPattern(tile,'repeat'); tile.close();
      for (const style of [linear,radial,conic,pattern]) {
        t.reset(); t.imageSmoothingEnabled=false; t.fillStyle=style; t.fillRect(0,0,100,80);
        const reference = t.getImageData(0,0,100,80).data;
        for (const maxWidth of [undefined,24]) {
          t.reset(); t.imageSmoothingEnabled=false; t.fillStyle=style;
          t.font='60px sans-serif'; t.textBaseline='top'; t.fillText('M',20,0,maxWidth);
          const drawn = t.getImageData(0,0,100,80).data;
          let compared=0;
          for (let i=0;i<drawn.length;i+=4) if (drawn[i+3] >= 254) {
            compared++;
            for (let channel=0;channel<3;channel++)
              check(Math.abs(drawn[i+channel]-reference[i+channel]) <= 2,
                'text paint coordinates '+maxWidth+' at '+i+' channel '+channel);
          }
          check(compared>0,'text paint had no opaque glyph pixels');
        }
      }
      const metrics = c.measureText('Hg');
      check(Object.keys(metrics).length === 12 && Object.values(metrics).every(Number.isFinite), '12 metrics');
      c.textBaseline = 'alphabetic';
      check(c.measureText('Hg').alphabeticBaseline === 0, 'alphabetic metrics baseline');
      check(c.measureText(' ').actualBoundingBoxLeft === 0, 'space has no ink');
    ''');
      expect(h.errors, isEmpty);
      await flaxTestUnmount(tester);
    },
    timeout: const Timeout(Duration(seconds: 30)),
  );

  testWidgets('same-turn transfer and blob bitmap sizes', (tester) async {
    final h = Harness();
    await tester.pumpWidget(
      MaterialApp(
        home: FlaxView(
          createRuntime: h.create,
          source: flaxTestFixtureSource('canvas', packageName: 'flax_canvas'),
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
      const rgba = new ImageData(new Uint8ClampedArray([
        255,0,0,255,0,255,0,255,0,0,255,255,255,255,255,255]),2,2);
      const scaled = await createImageBitmap(rgba,0,0,2,2,
        {resizeWidth:4,imageOrientation:'flipY',resizeQuality:'pixelated'});
      if (scaled.width !== 4 || scaled.height !== 4) throw Error('bitmap resize aspect');
      const out = new OffscreenCanvas(4,4).getContext('2d'); out.drawImage(scaled,0,0);
      if (out.getImageData(0,0,1,1).data.join() !== '0,0,255,255') throw Error('bitmap flip');
      const crop = await createImageBitmap(rgba,1,0,1,1,{resizeWidth:2,resizeHeight:1,resizeQuality:'pixelated'});
      out.reset(); out.drawImage(crop,0,0);
      if (out.getImageData(0,0,1,1).data.join() !== '0,255,0,255') throw Error('bitmap crop');
      scaled.close(); crop.close();
      if (scaled.width !== 0 || scaled.height !== 0) throw Error('closed bitmap dimensions');
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
    await flaxTestUnmount(tester);
    for (var i = 0; i < 4; i++) {
      await tester.pump(const Duration(milliseconds: 1));
    }
  }, timeout: const Timeout(Duration(seconds: 20)));
}
