import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flax_canvas/src/commands.dart';
import 'package:flax_canvas/src/surface.dart';
import 'package:flax_canvas/src/view.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets(
    'command decode matches dart:ui fill, clip, transform and isolation',
    (tester) async {
      await tester.runAsync(() async {
        final fill = FlaxCanvasSurface(4, 4);
        decodeCanvasCommands(
          fill,
          _commands((buf) {
            buf.color(opSetFillColor, 1, 0, 0, 1);
            buf.rect(opFillRect, 0, 0, 2, 2);
          }),
          state: CanvasDrawState(),
        );
        expect(await _pixel(fill, 0, 0), 0xffff0000);
        expect(await _pixel(fill, 3, 3), 0x00000000);

        final native = await _native(4, 4, (canvas) {
          canvas.drawRect(
            const ui.Rect.fromLTWH(0, 0, 2, 2),
            ui.Paint()
              ..color = const Color(0xffff0000)
              ..isAntiAlias = true,
          );
        });
        expect(await _rgba(fill), native);

        final clipped = FlaxCanvasSurface(4, 4);
        final clipState = CanvasDrawState();
        decodeCanvasCommands(
          clipped,
          _commands((buf) {
            buf.record(opClipPath, () {
              buf.path([
                (pathRect, [0.0, 0.0, 2.0, 2.0]),
              ]);
              buf.u32(0);
            });
          }),
          state: clipState,
        );
        decodeCanvasCommands(
          clipped,
          _commands((buf) {
            buf.color(opSetFillColor, 0, 1, 0, 1);
            buf.rect(opFillRect, 0, 0, 4, 4);
          }),
          state: clipState,
        );
        expect(await _pixel(clipped, 1, 1), 0xff00ff00);
        expect(await _pixel(clipped, 3, 3), 0x00000000);

        final moved = FlaxCanvasSurface(4, 4);
        final moveState = CanvasDrawState();
        decodeCanvasCommands(
          moved,
          _commands((buf) {
            buf.record(opTranslate, () {
              buf.f64(2);
              buf.f64(0);
            });
          }),
          state: moveState,
        );
        decodeCanvasCommands(
          moved,
          _commands((buf) {
            buf.color(opSetFillColor, 0, 0, 1, 1);
            buf.rect(opFillRect, 0, 0, 2, 2);
          }),
          state: moveState,
        );
        expect(await _pixel(moved, 2, 0), 0xff0000ff);
        expect(await _pixel(moved, 0, 0), 0x00000000);

        final isolated = FlaxCanvasSurface(4, 4);
        decodeCanvasCommands(
          isolated,
          _commands((buf) {
            buf.color(opSetFillColor, 1, 0, 0, 1);
            buf.rect(opFillRect, 0, 0, 4, 4);
            buf.rect(opClearRect, 0, 0, 4, 4);
          }),
          state: CanvasDrawState(),
        );
        final recorder = ui.PictureRecorder();
        final canvas = ui.Canvas(recorder);
        canvas.drawRect(
          const ui.Rect.fromLTWH(0, 0, 8, 8),
          ui.Paint()..color = const Color(0xff00ff00),
        );
        isolated.paint(canvas, const ui.Size(4, 4));
        final picture = recorder.endRecording();
        final image = await picture.toImage(8, 8);
        picture.dispose();
        try {
          final bytes = (await image.toByteData(
            format: ui.ImageByteFormat.rawRgba,
          ))!.buffer.asUint8List();
          expect(_rgbaAt(bytes, 8, 6, 6), 0xff00ff00);
          expect(_rgbaAt(bytes, 8, 1, 1), 0xff00ff00);
        } finally {
          image.dispose();
        }
      });
    },
  );

  testWidgets('paths, dash, shadow, alpha, text and failed batches', (
    tester,
  ) async {
    await tester.runAsync(() async {
      final path = FlaxCanvasSurface(8, 8);
      decodeCanvasCommands(
        path,
        _commands((buf) {
          buf.color(opSetFillColor, 0, 0, 0, 1);
          buf.record(opFillPath, () {
            buf.path([
              (pathMove, [1.0, 1.0]),
              (pathLine, [6.0, 1.0]),
              (pathLine, [6.0, 6.0]),
              (pathClose, const <double>[]),
            ]);
            buf.u32(0);
          });
        }),
        state: CanvasDrawState(),
      );
      expect(path.pictures, hasLength(1));
      expect(await _pixel(path, 2, 2), isNot(0x00000000));

      final styled = FlaxCanvasSurface(8, 8);
      decodeCanvasCommands(
        styled,
        _commands((buf) {
          buf.record(opSetGlobalAlpha, () => buf.f64(0.5));
          buf.record(opSetLineDash, () {
            buf.u32(2);
            buf.f64(2);
            buf.f64(2);
          });
          buf.record(opSetShadow, () {
            buf.f64(0);
            buf.f64(0);
            buf.f64(0);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
          });
          buf.color(opSetStrokeColor, 0, 0, 0, 1);
          buf.rect(opStrokeRect, 1, 1, 4, 4);
          buf.record(opSetFont, () => buf.text('12px sans-serif'));
          buf.record(opFillText, () {
            buf.text('A');
            buf.f64(1);
            buf.f64(6);
          });
        }),
        state: CanvasDrawState(),
      );
      expect(styled.pictures, hasLength(1));

      final kept = FlaxCanvasSurface(4, 4);
      decodeCanvasCommands(
        kept,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 4, 4);
        }),
        state: CanvasDrawState(),
      );
      expect(
        () => decodeCanvasCommands(
          kept,
          _commands((buf) => buf.record(99, () {})),
          state: CanvasDrawState(),
        ),
        throwsA(isA<FormatException>()),
      );
      expect(kept.pictures, hasLength(1));
      expect(await _pixel(kept, 0, 0), 0xffff0000);

      kept.resize(4, 4, reset: true);
      expect(kept.pictures, isEmpty);
    });
  });

  testWidgets('sync snapshot, wrapping arc and font boxes', (tester) async {
    await tester.runAsync(() async {
      final source = FlaxCanvasSurface(2, 2);
      decodeCanvasCommands(
        source,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 2, 2);
        }),
        state: CanvasDrawState(),
      );
      final image = source.rasterizeSync()!;
      final dest = FlaxCanvasSurface(2, 2);
      decodeCanvasCommands(
        dest,
        _commands((buf) {
          buf.record(opDrawImage, () {
            buf.u32(1);
            buf.f64(0);
            buf.f64(0);
            buf.f64(2);
            buf.f64(2);
            buf.f64(0);
            buf.f64(0);
            buf.f64(2);
            buf.f64(2);
          });
        }),
        lookupImage: (id) => id == 1 ? image : null,
        state: CanvasDrawState(),
      );
      expect(await _pixel(dest, 0, 0), 0xffff0000);
      image.dispose();
      source.dispose();
      dest.dispose();

      expect(canvasSweep(0, 0, false), 0);
      expect(
        canvasSweep(0.25 * math.pi, -0.25 * math.pi, false),
        closeTo(1.5 * math.pi, 1e-9),
      );

      final metrics = measureCanvasText(
        CanvasDrawState()
          ..textAlign = 'center'
          ..textBaseline = 'middle'
          ..font = '20px sans-serif',
        'H',
      );
      expect(
        metrics.fontBoundingBoxAscent,
        isNot(metrics.actualBoundingBoxAscent),
      );
    });
  });

  testWidgets('batch save, clearRect, pixels, paths and compression', (
    tester,
  ) async {
    await tester.runAsync(() async {
      final saved = FlaxCanvasSurface(4, 4);
      final saveState = CanvasDrawState();
      decodeCanvasCommands(
        saved,
        _commands((buf) {
          buf.record(opTranslate, () {
            buf.f64(1);
            buf.f64(0);
          });
          buf.record(opSave, () {});
        }),
        state: saveState,
      );
      decodeCanvasCommands(
        saved,
        _commands((buf) {
          buf.record(opRestore, () {});
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 1, 1);
        }),
        state: saveState,
      );
      expect(await _pixel(saved, 1, 0), 0xffff0000);
      expect(await _pixel(saved, 0, 0), 0x00000000);
      saved.dispose();

      final nested = FlaxCanvasSurface(4, 4);
      final nestedState = CanvasDrawState();
      decodeCanvasCommands(
        nested,
        _commands((buf) {
          buf.record(opTranslate, () {
            buf.f64(1);
            buf.f64(0);
          });
          buf.record(opSave, () {});
          buf.record(opTranslate, () {
            buf.f64(1);
            buf.f64(0);
          });
          buf.record(opSave, () {});
          buf.record(opTranslate, () {
            buf.f64(1);
            buf.f64(0);
          });
        }),
        state: nestedState,
      );
      decodeCanvasCommands(
        nested,
        _commands((buf) {
          buf.record(opRestore, () {});
          buf.record(opRestore, () {});
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 1, 1);
        }),
        state: nestedState,
      );
      expect(await _pixel(nested, 1, 0), 0xffff0000);
      expect(await _pixel(nested, 0, 0), 0x00000000);
      expect(await _pixel(nested, 2, 0), 0x00000000);
      nested.dispose();

      final translatedClear = FlaxCanvasSurface(4, 4);
      decodeCanvasCommands(
        translatedClear,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 4, 4);
        }),
        state: CanvasDrawState(),
      );
      decodeCanvasCommands(
        translatedClear,
        _commands((buf) {
          buf.record(opTranslate, () {
            buf.f64(2);
            buf.f64(0);
          });
          buf.rect(opClearRect, 0, 0, 4, 4);
        }),
        state: CanvasDrawState(),
      );
      expect(translatedClear.pictures, hasLength(2));
      expect(await _pixel(translatedClear, 0, 0), 0xffff0000);
      translatedClear.dispose();

      final identityClear = FlaxCanvasSurface(4, 4);
      decodeCanvasCommands(
        identityClear,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 4, 4);
        }),
        state: CanvasDrawState(),
      );
      decodeCanvasCommands(
        identityClear,
        _commands((buf) {
          buf.rect(opClearRect, 0, 0, 4, 4);
        }),
        state: CanvasDrawState(),
      );
      expect(identityClear.pictures, hasLength(1));
      expect(await _pixel(identityClear, 0, 0), 0x00000000);
      identityClear.dispose();

      final put = FlaxCanvasSurface(2, 2);
      decodeCanvasCommands(
        put,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 2, 2);
          buf.record(opPutImageData, () {
            buf.u32(1);
            buf.u32(1);
            buf.f64(0);
            buf.f64(0);
            buf.blob(const [0, 0, 0, 0]);
          });
        }),
        state: CanvasDrawState(),
      );
      expect(await _pixel(put, 0, 0), 0x00000000);
      expect(await _pixel(put, 1, 0), 0xffff0000);
      put.dispose();

      final punch = await _image(2, 2, const Color(0xffffffff));
      final destOut = FlaxCanvasSurface(2, 2);
      decodeCanvasCommands(
        destOut,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 2, 2);
          buf.record(opSetComposite, () => buf.text('destination-out'));
          buf.record(opDrawImage, () {
            buf.u32(1);
            buf.f64(0);
            buf.f64(0);
            buf.f64(2);
            buf.f64(2);
            buf.f64(0);
            buf.f64(0);
            buf.f64(2);
            buf.f64(2);
          });
        }),
        lookupImage: (id) => id == 1 ? punch : null,
        state: CanvasDrawState(),
      );
      expect(await _pixel(destOut, 0, 0) & 0xff000000, 0x00000000);
      punch.dispose();
      destOut.dispose();

      final chord = FlaxCanvasSurface(8, 8);
      decodeCanvasCommands(
        chord,
        _commands((buf) {
          buf.color(opSetStrokeColor, 0, 0, 0, 1);
          buf.record(opSetLineWidth, () => buf.f64(2));
          buf.record(opStrokePath, () {
            buf.path([
              (pathMove, [0.0, 0.0]),
              (pathArc, [4.0, 4.0, 4.0, math.pi, 0.0, 0.0]),
            ]);
          });
        }),
        state: CanvasDrawState(),
      );
      expect(await _pixel(chord, 0, 2), isNot(0x00000000));
      chord.dispose();

      final circle = FlaxCanvasSurface(8, 8);
      decodeCanvasCommands(
        circle,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.record(opFillPath, () {
            buf.path([
              (pathArc, [4.0, 4.0, 3.0, 0.0, math.pi * 2, 0.0]),
            ]);
            buf.u32(0);
          });
        }),
        state: CanvasDrawState(),
      );
      expect(await _pixel(circle, 4, 4), 0xffff0000);
      circle.dispose();

      final corner = FlaxCanvasSurface(24, 12);
      decodeCanvasCommands(
        corner,
        _commands((buf) {
          buf.color(opSetStrokeColor, 0, 0, 0, 1);
          buf.record(opSetLineWidth, () => buf.f64(2));
          buf.record(opStrokePath, () {
            buf.path([
              (pathMove, [0.0, 0.0]),
              (pathArcTo, [20.0, 10.0, 5.0, 20.0, 0.0]),
            ]);
          });
        }),
        state: CanvasDrawState(),
      );
      expect(await _pixel(corner, 15, 0), isNot(0x00000000));
      expect(await _pixel(corner, 20, 10), 0x00000000);
      corner.dispose();

      final swatch = await _image(1, 1, const Color(0xffff0000));
      final pattern = FlaxCanvasSurface(4, 4);
      decodeCanvasCommands(
        pattern,
        _commands((buf) {
          buf.record(opSetFillPattern, () {
            buf.u32(1);
            buf.text('no-repeat');
            buf.f64(1);
            buf.f64(0);
            buf.f64(0);
            buf.f64(1);
            buf.f64(0);
            buf.f64(0);
          });
          buf.rect(opFillRect, 0, 0, 4, 4);
        }),
        lookupImage: (id) => id == 1 ? swatch : null,
        state: CanvasDrawState(),
      );
      expect(await _pixel(pattern, 0, 0), 0xffff0000);
      expect(await _pixel(pattern, 2, 2), 0x00000000);
      swatch.dispose();
      pattern.dispose();

      final compressed = FlaxCanvasSurface(2, 2);
      for (var i = 0; i < FlaxCanvasSurface.pictureLimit; i++) {
        decodeCanvasCommands(
          compressed,
          _commands((buf) {
            buf.color(opSetFillColor, 1, 0, 0, 1);
            buf.rect(opFillRect, 0, 0, 1, 1);
          }),
          state: CanvasDrawState(),
        );
      }
      expect(compressed.compressing, isTrue);
      decodeCanvasCommands(
        compressed,
        _commands((buf) {
          buf.color(opSetFillColor, 0, 1, 0, 1);
          buf.rect(opFillRect, 1, 1, 1, 1);
        }),
        state: CanvasDrawState(),
      );
      final deadline = DateTime.now().add(const Duration(seconds: 5));
      while (compressed.compressing && DateTime.now().isBefore(deadline)) {
        await Future<void>.delayed(const Duration(milliseconds: 10));
      }
      expect(compressed.compressing, isFalse);
      expect(compressed.base, isNotNull);
      expect(compressed.pictures, hasLength(1));
      expect(compressed.decodedBytes, greaterThan(0));
      compressed.dispose();
    });
  });

  test('text paint uses global alpha', () {
    final painter = textPainter(
      CanvasDrawState()..globalAlpha = 0.5,
      'A',
      true,
    );
    expect(painter.text!.style!.foreground!.color.a, closeTo(0.5, 0.01));
  });

  testWidgets('shared views layout independently', (tester) async {
    final surface = FlaxCanvasSurface(8, 8);
    decodeCanvasCommands(
      surface,
      _commands((buf) => buf.rect(opFillRect, 0, 0, 8, 8)),
      state: CanvasDrawState(),
    );
    await tester.pumpWidget(
      Directionality(
        textDirection: TextDirection.ltr,
        child: Row(
          children: [
            SizedBox(
              width: 16,
              height: 16,
              child: FlaxCanvasView(surface, width: 16, height: 16),
            ),
            SizedBox(width: 8, height: 8, child: FlaxCanvasView(surface)),
          ],
        ),
      ),
    );
    final boxes = tester.renderObjectList<RenderBox>(
      find.byType(FlaxCanvasView),
    );
    expect(boxes, hasLength(2));
    expect(boxes.first.size, const Size(16, 16));
    expect(boxes.last.size, const Size(8, 8));
  });

  testWidgets('path CTM, unknown image, opaque, radial and compress error', (
    tester,
  ) async {
    await tester.runAsync(() async {
      final scaled = FlaxCanvasSurface(24, 24);
      decodeCanvasCommands(
        scaled,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.record(opFillPath, () {
            buf.u32(1);
            buf.u16(pathAdd);
            buf.f64(2);
            buf.f64(0);
            buf.f64(0);
            buf.f64(2);
            buf.f64(0);
            buf.f64(0);
            buf.u32(1);
            buf.u16(pathRect);
            buf.f64(0);
            buf.f64(0);
            buf.f64(10);
            buf.f64(10);
            buf.u32(0);
          });
        }),
        state: CanvasDrawState(),
      );
      expect(await _pixel(scaled, 19, 19), 0xffff0000);
      expect(await _pixel(scaled, 21, 21), 0x00000000);
      scaled.dispose();

      final kept = FlaxCanvasSurface(4, 4);
      decodeCanvasCommands(
        kept,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 4, 4);
        }),
        state: CanvasDrawState(),
      );
      expect(
        () => decodeCanvasCommands(
          kept,
          _commands((buf) {
            buf.record(opDrawImage, () {
              buf.u32(99);
              buf.f64(0);
              buf.f64(0);
              buf.f64(1);
              buf.f64(1);
              buf.f64(0);
              buf.f64(0);
              buf.f64(1);
              buf.f64(1);
            });
          }),
          state: CanvasDrawState(),
        ),
        throwsA(isA<FormatException>()),
      );
      expect(kept.pictures, hasLength(1));
      expect(await _pixel(kept, 0, 0), 0xffff0000);
      kept.dispose();

      final opaque = FlaxCanvasSurface(4, 4, alpha: false);
      expect(await _pixel(opaque, 0, 0), 0xff000000);
      decodeCanvasCommands(
        opaque,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 4, 4);
        }),
        state: CanvasDrawState(),
      );
      decodeCanvasCommands(
        opaque,
        _commands((buf) {
          buf.record(opTranslate, () {
            buf.f64(2);
            buf.f64(0);
          });
          buf.rect(opClearRect, 0, 0, 4, 4);
        }),
        state: CanvasDrawState(),
      );
      expect(await _pixel(opaque, 0, 0), 0xffff0000);
      expect(await _pixel(opaque, 3, 0), 0xff000000);
      opaque.dispose();

      final opaquePut = FlaxCanvasSurface(1, 1, alpha: false);
      decodeCanvasCommands(
        opaquePut,
        _commands((buf) {
          buf.record(opPutImageData, () {
            buf.u32(1);
            buf.u32(1);
            buf.f64(0);
            buf.f64(0);
            buf.blob(const [255, 0, 0, 0]);
          });
        }),
        state: CanvasDrawState(),
      );
      expect(await _pixel(opaquePut, 0, 0), 0xffff0000);
      opaquePut.dispose();

      final opaqueCopy = FlaxCanvasSurface(1, 1, alpha: false);
      decodeCanvasCommands(
        opaqueCopy,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 1, 1);
          buf.record(opSetComposite, () => buf.text('copy'));
          buf.color(opSetFillColor, 0, 0, 1, 0);
          buf.rect(opFillRect, 0, 0, 1, 1);
        }),
        state: CanvasDrawState(),
      );
      expect(await _pixel(opaqueCopy, 0, 0) & 0xff000000, 0xff000000);
      opaqueCopy.dispose();

      final opaqueOut = FlaxCanvasSurface(1, 1, alpha: false);
      decodeCanvasCommands(
        opaqueOut,
        _commands((buf) {
          buf.color(opSetFillColor, 1, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 1, 1);
          buf.record(opSetComposite, () => buf.text('destination-out'));
          buf.color(opSetFillColor, 0, 0, 0, 1);
          buf.rect(opFillRect, 0, 0, 1, 1);
        }),
        state: CanvasDrawState(),
      );
      expect(await _pixel(opaqueOut, 0, 0), 0xff000000);
      opaqueOut.dispose();

      final unordered = FlaxCanvasSurface(8, 1);
      decodeCanvasCommands(
        unordered,
        _commands((buf) {
          buf.record(opSetFillLinear, () {
            buf.f64(0);
            buf.f64(0);
            buf.f64(8);
            buf.f64(0);
            buf.u32(2);
            buf.f64(1);
            buf.f64(1);
            buf.f64(0);
            buf.f64(0);
            buf.f64(1);
            buf.f64(0);
            buf.f64(0);
            buf.f64(0);
            buf.f64(1);
            buf.f64(1);
          });
          buf.rect(opFillRect, 0, 0, 8, 1);
        }),
        state: CanvasDrawState(),
      );
      final left = await _pixel(unordered, 0, 0);
      final right = await _pixel(unordered, 7, 0);
      expect((left >> 16) & 0xff, lessThan((right >> 16) & 0xff));
      expect(left & 0xff, greaterThan(right & 0xff));
      unordered.dispose();

      final firstDuplicate = FlaxCanvasSurface(4, 1);
      decodeCanvasCommands(
        firstDuplicate,
        _commands((buf) {
          buf.record(opSetFillLinear, () {
            buf.f64(0);
            buf.f64(0);
            buf.f64(4);
            buf.f64(0);
            buf.u32(3);
            buf.f64(0);
            buf.f64(1);
            buf.f64(0);
            buf.f64(0);
            buf.f64(1);
            buf.f64(0);
            buf.f64(0);
            buf.f64(0);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
            buf.f64(0);
            buf.f64(1);
            buf.f64(0);
            buf.f64(1);
          });
          buf.rect(opFillRect, 0, 0, 4, 1);
        }),
        state: CanvasDrawState(),
      );
      final secondDuplicate = FlaxCanvasSurface(4, 1);
      decodeCanvasCommands(
        secondDuplicate,
        _commands((buf) {
          buf.record(opSetFillLinear, () {
            buf.f64(0);
            buf.f64(0);
            buf.f64(4);
            buf.f64(0);
            buf.u32(3);
            buf.f64(0);
            buf.f64(0);
            buf.f64(0);
            buf.f64(1);
            buf.f64(1);
            buf.f64(0);
            buf.f64(1);
            buf.f64(0);
            buf.f64(0);
            buf.f64(1);
            buf.f64(1);
            buf.f64(0);
            buf.f64(1);
            buf.f64(0);
            buf.f64(1);
          });
          buf.rect(opFillRect, 0, 0, 4, 1);
        }),
        state: CanvasDrawState(),
      );
      expect(
        await _pixel(firstDuplicate, 0, 0),
        isNot(await _pixel(secondDuplicate, 0, 0)),
      );
      firstDuplicate.dispose();
      secondDuplicate.dispose();

      final endOnly = FlaxCanvasSurface(8, 8);
      decodeCanvasCommands(
        endOnly,
        _commands((buf) {
          buf.record(opSetFillRadial, () {
            buf.f64(3);
            buf.f64(3);
            buf.f64(0);
            buf.f64(3);
            buf.f64(3);
            buf.f64(4);
            buf.u32(2);
            buf.f64(0);
            buf.f64(0);
            buf.f64(0);
            buf.f64(0);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
          });
          buf.rect(opFillRect, 0, 0, 8, 8);
        }),
        state: CanvasDrawState(),
      );
      final twoCircle = FlaxCanvasSurface(8, 8);
      decodeCanvasCommands(
        twoCircle,
        _commands((buf) {
          buf.record(opSetFillRadial, () {
            buf.f64(0);
            buf.f64(0);
            buf.f64(1.5);
            buf.f64(3);
            buf.f64(3);
            buf.f64(4);
            buf.u32(2);
            buf.f64(0);
            buf.f64(0);
            buf.f64(0);
            buf.f64(0);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
            buf.f64(1);
          });
          buf.rect(opFillRect, 0, 0, 8, 8);
        }),
        state: CanvasDrawState(),
      );
      expect(await _pixel(twoCircle, 0, 0), isNot(await _pixel(endOnly, 0, 0)));
      endOnly.dispose();
      twoCircle.dispose();

      final failed = FlaxCanvasSurface(2, 2);
      final errors = <Object>[];
      failed.onError = (error, stack) => errors.add(error);
      failed.debugRasterize = (base, pictures, width, height) async {
        throw StateError('compress failed');
      };
      for (var i = 0; i < FlaxCanvasSurface.pictureLimit; i++) {
        decodeCanvasCommands(
          failed,
          _commands((buf) {
            buf.color(opSetFillColor, 1, 0, 0, 1);
            buf.rect(opFillRect, 0, 0, 1, 1);
          }),
          state: CanvasDrawState(),
        );
      }
      final failDeadline = DateTime.now().add(const Duration(seconds: 5));
      while (failed.compressing && DateTime.now().isBefore(failDeadline)) {
        await Future<void>.delayed(const Duration(milliseconds: 10));
      }
      expect(failed.compressing, isFalse);
      expect(failed.pictures, hasLength(FlaxCanvasSurface.pictureLimit));
      expect(errors, isNotEmpty);
      failed.debugRasterize = null;
      failed.maybeCompress();
      final retryDeadline = DateTime.now().add(const Duration(seconds: 5));
      while (failed.compressing && DateTime.now().isBefore(retryDeadline)) {
        await Future<void>.delayed(const Duration(milliseconds: 10));
      }
      expect(failed.compressing, isFalse);
      expect(failed.base, isNotNull);
      failed.dispose();
    });
  });

  testWidgets('unsized view relayouts only when the surface size changes', (
    tester,
  ) async {
    final surface = FlaxCanvasSurface(8, 8);
    await tester.pumpWidget(
      Directionality(
        textDirection: TextDirection.ltr,
        child: Center(child: FlaxCanvasView(surface)),
      ),
    );
    final render = tester.renderObject<RenderFlaxCanvasView>(
      find.byType(FlaxCanvasView),
    );
    expect(render.size, const Size(8, 8));
    expect(render.debugNeedsLayout, isFalse);
    surface.resize(16, 16);
    expect(render.debugNeedsLayout, isTrue);
    await tester.pump();
    expect(render.debugNeedsLayout, isFalse);
    expect(render.size, const Size(16, 16));
    decodeCanvasCommands(
      surface,
      _commands((buf) {
        buf.color(opSetFillColor, 1, 0, 0, 1);
        buf.rect(opFillRect, 0, 0, 1, 1);
      }),
      state: CanvasDrawState(),
    );
    expect(render.debugNeedsLayout, isFalse);
    expect(render.debugNeedsPaint, isTrue);
    surface.dispose();
  });

  test('pathExtend shears arcs and rotates ellipses like Path.transform', () {
    ui.Path decodeRaw(void Function(_Buf buf) write) {
      return decodeCanvasPath(_pathOnly(write));
    }

    void writeArc(_Buf buf) {
      buf.u16(pathArc);
      buf.f64(10);
      buf.f64(10);
      buf.f64(5);
      buf.f64(0);
      buf.f64(math.pi * 2);
      buf.f64(0);
      buf.u16(pathClose);
    }

    final arc = decodeRaw((buf) {
      buf.u32(2);
      writeArc(buf);
    });
    final shear = Affine(1, 0, 0.5, 1);
    final shearedExpected = arc.transform(shear.storage);
    final sheared = decodeRaw((buf) {
      buf.u32(1);
      buf.u16(pathExtend);
      buf.f64(shear.a);
      buf.f64(shear.b);
      buf.f64(shear.c);
      buf.f64(shear.d);
      buf.f64(shear.e);
      buf.f64(shear.f);
      buf.u32(2);
      writeArc(buf);
    });
    for (final point in const [
      Offset(15, 10),
      Offset(12, 12),
      Offset(0, 0),
      Offset(20, 10),
    ]) {
      expect(
        sheared.contains(point),
        shearedExpected.contains(point),
        reason: '$point',
      );
    }

    void writeEllipse(_Buf buf) {
      buf.u16(pathEllipse);
      buf.f64(0);
      buf.f64(0);
      buf.f64(20);
      buf.f64(5);
      buf.f64(0);
      buf.f64(0);
      buf.f64(math.pi * 2);
      buf.f64(0);
      buf.u16(pathClose);
    }

    final ellipse = decodeRaw((buf) {
      buf.u32(2);
      writeEllipse(buf);
    });
    final rotate = Affine(0, 1, -1, 0);
    final rotatedExpected = ellipse.transform(rotate.storage);
    final rotated = decodeRaw((buf) {
      buf.u32(1);
      buf.u16(pathExtend);
      buf.f64(rotate.a);
      buf.f64(rotate.b);
      buf.f64(rotate.c);
      buf.f64(rotate.d);
      buf.f64(rotate.e);
      buf.f64(rotate.f);
      buf.u32(2);
      writeEllipse(buf);
    });
    expect(rotated.contains(const Offset(0, 10)), isTrue);
    expect(rotated.contains(const Offset(10, 0)), isFalse);
    expect(
      rotated.contains(const Offset(0, 10)),
      rotatedExpected.contains(const Offset(0, 10)),
    );
    expect(
      rotated.contains(const Offset(10, 0)),
      rotatedExpected.contains(const Offset(10, 0)),
    );

    final svgThenLine = decodeRaw((buf) {
      buf.u32(2);
      buf.u16(pathSvg);
      buf.text('M0 0 L10 0');
      buf.u16(pathLine);
      buf.f64(10);
      buf.f64(10);
    });
    var svgLength = 0.0;
    for (final metric in svgThenLine.computeMetrics()) {
      svgLength += metric.length;
    }
    expect(svgLength, closeTo(20, 0.05));
  });

  testWidgets('1k and 10k command metrics', (tester) async {
    await tester.runAsync(() async {
      for (final count in [1000, 10000]) {
        final buf = _Buf();
        for (var i = 0; i < count; i++) {
          buf.rect(opFillRect, 0, 0, 1, 1);
        }
        final bytes = buf.header();
        final surface = FlaxCanvasSurface(8, 8);
        final decode = Stopwatch()..start();
        decodeCanvasCommands(surface, bytes, state: CanvasDrawState());
        final decodeUs = decode.elapsedMicroseconds;
        final paint = Stopwatch()..start();
        final recorder = ui.PictureRecorder();
        surface.paint(ui.Canvas(recorder), const ui.Size(8, 8));
        recorder.endRecording().dispose();
        debugPrint(
          'canvas metrics n=$count bytes=${bytes.length} '
          'abiCopies=${bytes.length * 2} decodeUs=$decodeUs '
          'paintUs=${paint.elapsedMicroseconds} pictures=${surface.pictures.length}',
        );
        expect(surface.pictures, hasLength(1));
        surface.dispose();
      }
    });
  });
}

class _Buf {
  var used = 24;
  var data = ByteData(4096);

  void grow(int n) {
    if (used + n <= data.lengthInBytes) return;
    var size = data.lengthInBytes;
    while (size < used + n) {
      size *= 2;
    }
    final next = ByteData(size);
    next.buffer.asUint8List().setRange(0, used, data.buffer.asUint8List());
    data = next;
  }

  void u16(int value) {
    grow(2);
    data.setUint16(used, value, Endian.little);
    used += 2;
  }

  void u32(int value) {
    grow(4);
    data.setUint32(used, value, Endian.little);
    used += 4;
  }

  void f64(double value) {
    grow(8);
    data.setFloat64(used, value, Endian.little);
    used += 8;
  }

  void text(String value) {
    final encoded = Uint8List.fromList(value.codeUnits);
    u32(encoded.length);
    grow(encoded.length);
    data.buffer.asUint8List().setRange(used, used + encoded.length, encoded);
    used += encoded.length;
  }

  void align() {
    used += (8 - (used % 8)) % 8;
  }

  void record(int opcode, void Function() write) {
    final start = used;
    u16(opcode);
    u16(0);
    u32(0);
    final payload = used;
    write();
    data.setUint32(start + 4, used - payload, Endian.little);
    align();
  }

  void color(int opcode, double r, double g, double b, double a) {
    record(opcode, () {
      f64(r);
      f64(g);
      f64(b);
      f64(a);
    });
  }

  void rect(int opcode, double x, double y, double w, double h) {
    record(opcode, () {
      f64(x);
      f64(y);
      f64(w);
      f64(h);
    });
  }

  void blob(List<int> value) {
    grow(value.length);
    data.buffer.asUint8List().setRange(used, used + value.length, value);
    used += value.length;
  }

  void path(List<(int, List<double>)> commands) {
    u32(commands.length);
    for (final command in commands) {
      u16(command.$1);
      for (final value in command.$2) {
        f64(value);
      }
    }
  }

  Uint8List header() {
    data
      ..setUint32(0, canvasCommandMagic, Endian.little)
      ..setUint32(4, canvasCommandVersion, Endian.little)
      ..setUint32(20, used, Endian.little);
    return Uint8List.sublistView(data, 0, used);
  }
}

Uint8List _commands(void Function(_Buf buf) write) {
  final buf = _Buf();
  write(buf);
  return buf.header();
}

Uint8List _pathOnly(void Function(_Buf buf) write) {
  final buf = _Buf()..used = 0;
  write(buf);
  return Uint8List.sublistView(buf.data, 0, buf.used);
}

int _rgbaAt(Uint8List bytes, int width, int x, int y) {
  final i = (y * width + x) * 4;
  return (bytes[i + 3] << 24) |
      (bytes[i] << 16) |
      (bytes[i + 1] << 8) |
      bytes[i + 2];
}

Future<Uint8List> _rgba(FlaxCanvasSurface surface) async {
  final image = await surface.rasterize();
  if (image == null) {
    fail('missing raster');
  }
  try {
    return (await image.toByteData(format: ui.ImageByteFormat.rawRgba))!.buffer
        .asUint8List();
  } finally {
    image.dispose();
  }
}

Future<int> _pixel(FlaxCanvasSurface surface, int x, int y) async {
  return _rgbaAt(await _rgba(surface), surface.width, x, y);
}

Future<ui.Image> _image(int width, int height, Color color) async {
  final recorder = ui.PictureRecorder();
  ui.Canvas(recorder).drawRect(
    ui.Rect.fromLTWH(0, 0, width.toDouble(), height.toDouble()),
    ui.Paint()..color = color,
  );
  final picture = recorder.endRecording();
  try {
    return await picture.toImage(width, height);
  } finally {
    picture.dispose();
  }
}

Future<Uint8List> _native(
  int width,
  int height,
  void Function(ui.Canvas canvas) draw,
) async {
  final recorder = ui.PictureRecorder();
  draw(ui.Canvas(recorder));
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
