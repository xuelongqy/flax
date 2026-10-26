import 'dart:convert';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_test/flutter_test.dart';

import '../support/harness.dart' show Harness, registry;
import '../wpt/cases.dart' show wptFonts;

class _FontBundle extends CachingAssetBundle {
  _FontBundle(this.name);
  final String name;
  static const digests = {
    'CanvasTest':
        '990e405b6ee0865fb61f3eeb3a1733bd15b82b358e7a614f8b1c52f7f6caecce',
    'CanvasTest-ascent256':
        '38fc9063def3c271324ba72625436aa3484849483592c656e2a37c9c64217cc5',
  };
  @override
  Future<ByteData> load(String key) async {
    if (key == 'assets/canvas-fonts.json') {
      return ByteData.sublistView(
        Uint8List.fromList(
          utf8.encode(
            jsonEncode({
              'formatVersion': 1,
              'fonts': {
                'body': {
                  'family': 'Flax Canvas "Shared"',
                  'asset': 'assets/body.ttf',
                  'sha256': digests[name],
                },
              },
            }),
          ),
        ),
      );
    }
    if (key == 'assets/body.ttf') {
      return ByteData.sublistView(base64Decode(wptFonts[name]!));
    }
    throw StateError('Unexpected font asset: $key');
  }
}

void main() {
  tearDown(() => Flax.registerPlugins([]));

  testWidgets(
    'Canvas uses module fonts, keeps domains isolated and falls back to host fonts',
    (tester) async {
      await tester.runAsync(
        () => ui.loadFontFromList(
          base64Decode(wptFonts['CanvasTest-descent0']!),
          fontFamily: 'Flax Canvas "Shared"',
        ),
      );
      final baseline = ui.flaxScopedFontStats;
      final sessions = <FlaxSession>[];
      final harnesses = <Harness>[];
      for (final name in ['CanvasTest', 'CanvasTest-ascent256', null]) {
        final h = Harness();
        harnesses.add(h);
        sessions.add(
          FlaxSession(
            createRuntime: () {
              final runtime = h.create();
              runtime.evaluate(
                name == null
                    ? 'globalThis.__canvasModuleFont = false'
                    : 'globalThis.__canvasModuleFont = true',
              );
              return runtime;
            },
            source: flaxTestFixtureSource(
              'canvas_fonts',
              packageName: 'flax_canvas',
            ),
            bindings: registry,
            assetBundle: name == null ? null : _FontBundle(name),
            plugins: const [FlaxCanvasPlugin()],
            onError: (error, _) => h.errors.add(error),
          ),
        );
      }
      try {
        await flaxTestPumpView(
          tester,
          Directionality(
            textDirection: TextDirection.ltr,
            child: Row(
              children: [
                for (final session in sessions)
                  FlaxView.session(session: session),
              ],
            ),
          ),
        );
        final results = <Map<String, dynamic>>[];
        for (final h in harnesses) {
          await flaxTestRunHostScript(tester, h, 'await canvasFontReady;');
          results.add(
            jsonDecode(
              (h.runtime.getGlobal('canvasFontResult') as FlaxJsString).value,
            ) as Map<String, dynamic>,
          );
          expect(h.errors, isEmpty);
        }
        expect(results[0]['width'], results[1]['width']);
        expect(results[0]['ascent'], greaterThan(results[1]['ascent'] as num));
        expect(results[0]['descent'], greaterThan(0));
        expect(results[2]['descent'], 0);
        expect(
          results[0]['pixels'],
          isNot(orderedEquals(results[1]['pixels'] as List)),
        );
        for (final h in harnesses) {
          h.execute('''
            globalThis.lateContext = new OffscreenCanvas(1,1).getContext('2d');
            lateContext.font = '40px "Flax Canvas Late"';
            lateContext.measureText('A');
          ''');
        }
        await tester.runAsync(
          () => ui.loadFontFromList(
            base64Decode(wptFonts['CanvasTest-descent0']!),
            fontFamily: 'Flax Canvas Late',
          ),
        );
        for (final h in harnesses) {
          h.execute('''
            globalThis.lateMetrics = JSON.stringify(lateContext.measureText('A'));
          ''');
          final metrics = jsonDecode(
            (h.runtime.getGlobal('lateMetrics') as FlaxJsString).value,
          ) as Map<String, dynamic>;
          expect(metrics['fontBoundingBoxAscent'], results[2]['ascent']);
          expect(metrics['fontBoundingBoxDescent'], results[2]['descent']);
          expect(metrics['width'], results[2]['width']);
        }
        expect(ui.flaxScopedFontStats.take(3), [
          baseline[0] + 3,
          baseline[1] + 2,
          baseline[2] + 2,
        ]);
      } finally {
        await flaxTestUnmount(tester);
        for (final session in sessions) {
          await flaxTestCloseSession(tester, session);
        }
      }
      expect(ui.flaxScopedFontStats.take(4), baseline.take(4));
    },
  );

  testWidgets(
    'Canvas serializes PNG JPEG and WebP, quality, fallback and alpha',
    (tester) async {
      Flax.registerPlugins(const [FlaxCanvasPlugin()]);
      final h = Harness();
      await flaxTestPumpView(tester, h.app());
      try {
        await flaxTestRunHostScript(tester, h, r'''
          function check(value, message) { if (!value) throw Error(message); }
          const canvas = new OffscreenCanvas(64,64), ctx = canvas.getContext('2d');
          ctx.fillStyle = 'rgba(0 255 0 / 50%)'; ctx.fillRect(0,0,64,64);
          for (const type of ['image/png', 'image/jpeg', 'image/webp', 'image/unsupported']) {
            const blob = await canvas.convertToBlob({type, quality: 1});
            const expected = type === 'image/unsupported' ? 'image/png' : type;
            check(blob.type === expected, 'wrong MIME type: ' + blob.type);
            const bytes = new Uint8Array(await blob.arrayBuffer());
            if (expected === 'image/png') check(bytes[0] === 137 && bytes[1] === 80, 'PNG header');
            if (expected === 'image/jpeg') check(bytes[0] === 255 && bytes[1] === 216, 'JPEG header');
            if (expected === 'image/webp') check(bytes[0] === 82 && bytes[8] === 87, 'WebP header');
            const bitmap = await createImageBitmap(blob);
            check(bitmap.width === 64 && bitmap.height === 64, 'encoded dimensions');
            const output = new OffscreenCanvas(64,64).getContext('2d');
            output.drawImage(bitmap,0,0); bitmap.close();
            const pixel = output.getImageData(32,32,1,1).data;
            const jpeg = expected === 'image/jpeg';
            check(Math.abs(pixel[1] - (jpeg ? 128 : 255)) <= 2, expected + ' green ' + pixel);
            check(Math.abs(pixel[3] - (jpeg ? 255 : 128)) <= 1, expected + ' alpha ' + pixel);
          }
          for (let y=0;y<64;y++) for(let x=0;x<64;x++) {
            ctx.fillStyle = 'rgb(' + ((x*47+y*13)%256) + ' ' + ((x*7+y*57)%256) + ' ' + ((x*97+y*17)%256) + ')';
            ctx.fillRect(x,y,1,1);
          }
          for (const type of ['image/jpeg', 'image/webp']) {
            const low = await canvas.convertToBlob({type,quality:0});
            const high = await canvas.convertToBlob({type,quality:1});
            check((await high.arrayBuffer()).byteLength > (await low.arrayBuffer()).byteLength, type + ' quality');
          }
          let error;
          try { await new OffscreenCanvas(0,1).convertToBlob(); } catch (e) { error = e; }
          check(error && error.name === 'IndexSizeError', 'empty canvas exception');
        ''');
        expect(h.errors, isEmpty);
      } finally {
        await flaxTestUnmount(tester);
      }
    },
    timeout: const Timeout(Duration(seconds: 45)),
  );
}
