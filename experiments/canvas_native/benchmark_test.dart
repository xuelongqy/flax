// The runner supplies the consumer graph; stdout also carries benchmark results.
// ignore_for_file: depend_on_referenced_packages, avoid_print
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_canvas/src/canvas_bindings.g.dart';
import 'package:flax_engine_v8/flax_engine_v8.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../../packages/flax_canvas/test/support/dart_decoder.dart';

@Native<Int32 Function(Uint64, Handle)>(symbol: 'flax_canvas_prototype_draw')
external int _draw(int token, Object canvas);

@Native<Uint64 Function()>(symbol: 'flax_canvas_prototype_pending')
external int _pending();

void main() {
  setUpAll(() async {
    const fixturePath = String.fromEnvironment('CANVAS_NATIVE_FIXTURES');
    final fixtures = jsonDecode(File(fixturePath).readAsStringSync()) as Map;
    final files = (fixtures['flax_canvas'] as Map).cast<String, String>();
    flaxTestLoadFixturePackages({'flax_canvas': files});
    await flaxTestLoadModuleAssets(files);
  });

  testWidgets('native Canvas pixels, guards, lifetime and four-way timings', (
    tester,
  ) async {
    final nativeApi = FlaxCanvasBindings(DynamicLibrary.process());
    final resourcesBefore = nativeApi.flax_canvas_dispatch(0, 10, 0, 0, 0);
    final source = flaxTestFixtureSource(
      'canvas_native',
      packageName: 'flax_canvas',
    );
    final registry = FlaxBindingRegistry([flutterBindings]);
    final h = FlaxTestHarness(
      createRuntime: FlaxV8Engine.createRuntime,
      source: source,
      bindings: registry,
    );
    await tester.pumpWidget(
      Directionality(
        textDirection: TextDirection.ltr,
        child: FlaxView(
          createRuntime: h.create,
          source: source,
          bindings: registry,
          plugins: const [FlaxCanvasPlugin()],
          onError: (error, _) => h.errors.add(error),
        ),
      ),
    );
    expect(h.errors, isEmpty);
    final surface = tester
        .widget<FlaxCanvasView>(find.byType(FlaxCanvasView))
        .canvas;
    final reference = FlaxCanvasSurface(64, 64);
    final referenceState = CanvasDrawState();
    h.runtime.registerHostFunction('__flaxCanvasDartBatch', (_, args) {
      decodeCanvasCommands(
        reference,
        h.runtime.readUint8Array(args[0] as FlaxJsObject),
        state: referenceState,
      );
      return const FlaxJsUndefined();
    });
    final hooks = h.runtime.getGlobal('canvasNativeBenchmark') as FlaxJsObject;
    final functions = {
      for (final mode in ['native', 'dart', 'batch', 'direct'])
        mode: hooks.getProperty(mode) as FlaxJsFunction,
    };

    ui.Picture frame(String mode, int count) {
      final result = functions[mode]!.call([FlaxJsNumber(count.toDouble())]);
      final recorder = ui.PictureRecorder();
      final canvas = ui.Canvas(recorder);
      if (mode == 'dart' || mode == 'native') {
        final source = mode == 'dart' ? reference : surface;
        canvas.drawPicture(source.pictures.single);
        source.clearHistory();
        source.decodedBytes = 0;
      } else {
        final token = (result as FlaxJsNumber).value.toInt();
        final status = _draw(token, canvas);
        if (status != 0) {
          throw StateError('Native Canvas commit failed: $status');
        }
      }
      final picture = recorder.endRecording();
      h.runtime.drainMicrotasks(maxJobsHint: 1024);
      return picture;
    }

    Future<Uint8List> pixels(ui.Picture picture) async {
      try {
        final image = await picture.toImage(64, 64);
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

    try {
      await tester.runAsync(() async {
        final expected = await pixels(frame('dart', 1000));
        expect(expected[3], 255);
        expect(expected.last, 0);
        expect(await pixels(frame('batch', 1000)), orderedEquals(expected));
        expect(await pixels(frame('direct', 1000)), orderedEquals(expected));
        expect(await pixels(frame('native', 1000)), orderedEquals(expected));
      });
      h.execute(r'''
        const native = __flaxCanvasPrototype;
        function rejects(action) {
          let failed = false;
          try { action(); } catch (_) { failed = true; }
          if (!failed) throw Error('invalid native input was accepted');
        }
        rejects(() => native.fillRect(0, 0, 1, 1));
        native.begin();
        rejects(() => native.fillRect(NaN, 0, 1, 1));
        rejects(() => native.fillRect(0, 0, -1, 1));
        rejects(() => native.batch(new Uint8Array(4)));
        rejects(() => native.commit());
        const storage = new ArrayBuffer(80);
        const packet = new Uint8Array(storage, 8, 64);
        const data = new DataView(storage, 8, 64);
        data.setUint32(0, 0x31435643, true);
        data.setUint32(4, 1, true);
        data.setUint32(20, 64, true);
        data.setUint16(24, 11, true);
        data.setUint32(28, 32, true);
        data.setFloat64(48, 1, true);
        data.setFloat64(56, 1, true);
        native.begin();
        rejects(() => native.batch(packet));
        data.setUint16(24, 10, true);
        data.setFloat64(32, NaN, true);
        native.begin();
        rejects(() => native.batch(packet));
        data.setFloat64(32, 0, true);
        native.begin();
        native.batch(packet);
        native.commit();
        native.begin();
        native.fillRect(0, 0, 1, 1);
        native.commit();
        native.begin();
        undefined;
      ''');
      expect(_pending(), 0);
      final recorder = ui.PictureRecorder();
      expect(_draw(0, ui.Canvas(recorder)), 1);
      recorder.endRecording().dispose();
      final token = (h.runtime.evaluate(
        '__flaxCanvasPrototype.begin(); '
        '__flaxCanvasPrototype.fillRect(0, 0, 1, 1); '
        '__flaxCanvasPrototype.commit()',
      ) as FlaxJsNumber).value.toInt();
      expect(_draw(token, Object()), 3);
      final target = ui.PictureRecorder();
      expect(_draw(token, ui.Canvas(target)), 0);
      target.endRecording().dispose();

      final results = <Map<String, Object>>[];
      for (final count in [1000, 10000]) {
        final modes = ['native', 'dart', 'batch', 'direct'];
        for (var warmup = 0; warmup < 30; warmup++) {
          for (final mode in modes) {
            frame(mode, count).dispose();
          }
        }
        final samples = {for (final mode in modes) mode: <double>[]};
        for (var sample = 0; sample < 9; sample++) {
          for (var offset = 0; offset < modes.length; offset++) {
            final mode = modes[(sample + offset) % modes.length];
            final watch = Stopwatch();
            for (var iteration = 0; iteration < 10; iteration++) {
              watch.start();
              final picture = frame(mode, count);
              watch.stop();
              picture.dispose();
            }
            samples[mode]!.add(watch.elapsedMicroseconds / 10);
          }
        }
        final record = <String, Object>{
          'rectangles': count,
          'samples_us_per_frame': samples,
          for (final entry in samples.entries)
            '${entry.key}_median_us': (entry.value.toList()..sort())[4],
        };
        results.add(record);
        print('CANVAS_NATIVE_BENCHMARK ${jsonEncode(record)}');
      }
      expect(h.errors, isEmpty);
      expect(_pending(), 0);
      const receiptPath = String.fromEnvironment('CANVAS_NATIVE_RECEIPT');
      File(receiptPath).writeAsStringSync(
        const JsonEncoder.withIndent('  ').convert({
          'mode': const bool.fromEnvironment('dart.vm.product')
              ? 'release'
              : 'debug',
          'warmup_frames_per_mode': 30,
          'samples_per_mode': 9,
          'frames_per_sample': 10,
          'scope': 'JS draw loop + commit + Flutter Picture; excludes raster/frame scheduling',
          'pixel_equivalence': true,
          'guards_and_pending_cleanup': true,
          'results': results,
        }),
      );
      h.execute(
        '__flaxCanvasPrototype.begin(); '
        '__flaxCanvasPrototype.fillRect(0, 0, 1, 1); '
        '__flaxCanvasPrototype.commit(); undefined;',
      );
      expect(_pending(), 1);
    } finally {
      reference.dispose();
      for (final function in functions.values) {
        function.release();
      }
      hooks.release();
      await flaxTestUnmount(tester);
      Flax.registerPlugins([]);
    }
    expect(_pending(), 0);
    expect(nativeApi.flax_canvas_dispatch(0, 10, 0, 0, 0), resourcesBefore);
  }, timeout: const Timeout(Duration(minutes: 3)));

  testWidgets('Picture sync and async snapshot timing', (tester) async {
    final results = <Map<String, Object>>[];
    await tester.runAsync(() async {
      for (final size in [64, 512, 2048]) {
        final recorder = ui.PictureRecorder();
        final canvas = ui.Canvas(recorder);
        canvas.drawColor(const ui.Color(0xff122338), ui.BlendMode.src);
        for (var i = 0; i < 1000; i++) {
          canvas.drawRect(
            ui.Rect.fromLTWH(
              (i * 37 % (size - 16)).toDouble(),
              (i * 53 % (size - 16)).toDouble(),
              16,
              12,
            ),
            ui.Paint()..color = ui.Color(0xff000000 | (i * 7919 & 0xffffff)),
          );
        }
        final picture = recorder.endRecording();
        final cached = await picture.toImage(size, size);
        final modes = ['async', 'sync', 'cached'];
        final samples = {for (final mode in modes) mode: <Map<String, int>>[]};

        Future<({int returned, int completed, Uint8List pixels})> measure(
          String mode,
        ) async {
          final watch = Stopwatch()..start();
          final image = switch (mode) {
            'async' => await picture.toImage(size, size),
            'sync' => picture.toImageSync(size, size),
            _ => cached,
          };
          final returned = watch.elapsedMicroseconds;
          try {
            final targetRecorder = ui.PictureRecorder();
            final target = ui.Canvas(targetRecorder);
            target.drawColor(const ui.Color(0xff000000), ui.BlendMode.src);
            // Scaling prevents a whole-texture passthrough from replacing the draw.
            target.drawImageRect(
              image,
              ui.Rect.fromLTWH(0, 0, size.toDouble(), size.toDouble()),
              ui.Rect.fromLTWH(1, 1, size - 2.0, size - 2.0),
              ui.Paint(),
            );
            final drawn = targetRecorder.endRecording();
            try {
              final output = await drawn.toImage(size, size);
              try {
                final bytes = await output.toByteData(
                  format: ui.ImageByteFormat.rawRgba,
                );
                return (
                  returned: returned,
                  completed: watch.elapsedMicroseconds,
                  pixels: bytes!.buffer.asUint8List(),
                );
              } finally {
                output.dispose();
              }
            } finally {
              drawn.dispose();
            }
          } finally {
            if (mode != 'cached') image.dispose();
          }
        }

        try {
          for (var warmup = 0; warmup < 3; warmup++) {
            for (final mode in modes) {
              await measure(mode);
            }
          }
          final expected = (await measure('cached')).pixels;
          for (var sample = 0; sample < 9; sample++) {
            for (var offset = 0; offset < modes.length; offset++) {
              final mode = modes[(sample + offset) % modes.length];
              final value = await measure(mode);
              if (sample == 0) {
                expect(value.pixels, orderedEquals(expected), reason: mode);
              }
              samples[mode]!.add({
                'api_return_us': value.returned,
                'first_draw_and_readback_us': value.completed - value.returned,
                'end_to_end_us': value.completed,
              });
            }
          }
          final record = <String, Object>{
            'size': size,
            'samples_us': samples,
            'medians_us': {
              for (final entry in samples.entries)
                entry.key: {
                  for (final key in entry.value.first.keys)
                    key: (entry.value.map((sample) => sample[key]!).toList()
                      ..sort())[4],
                },
            },
          };
          results.add(record);
          print('PICTURE_SNAPSHOT_BENCHMARK ${jsonEncode(record)}');
        } finally {
          cached.dispose();
          picture.dispose();
        }
      }
    });
    final mode = const bool.fromEnvironment('dart.vm.product')
        ? 'release'
        : 'debug';
    final receipt = File(const String.fromEnvironment('CANVAS_NATIVE_RECEIPT'))
        .parent;
    File('${receipt.path}/picture-snapshot-$mode.json').writeAsStringSync(
      const JsonEncoder.withIndent('  ').convert({
        'mode': mode,
        'source_rectangles': 1000,
        'warmup_iterations_per_mode': 3,
        'samples_per_mode': 9,
        'pixel_equivalence': true,
        'target_pixel_format': 'Flutter default, identical for all modes',
        'scope':
            'Picture API return; first scaled draw through raw RGBA readback. '
            'Cached source creation excluded. No JS bridge or screen presentation.',
        'results': results,
      }),
    );
  }, timeout: const Timeout(Duration(minutes: 3)));
}
