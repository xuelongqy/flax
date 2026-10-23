import 'dart:async';
import 'dart:convert';
import 'dart:isolate';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';

import 'decoder.dart';
import 'generated/canvas_bindings.g.dart';
import 'generated/host_bootstrap.g.dart';
import 'surface.dart';

const flaxCanvasSurfaceType = 'flax.canvas/canvas#type:FlaxCanvasSurface';

// Keep the worker closure separate from the UI image and host's native handles.
Future<Uint8List> _encodeBitmap(
  Uint8List pixels,
  int width,
  int height,
  String format,
  int quality,
) => Isolate.run(
  () => CanvasDecoder.encode(pixels, width, height, format, quality),
);

Future<List<Object>> _decodeBitmap(
  Uint8List encoded,
  bool convert,
  bool premultiplied,
  bool orient,
) => Isolate.run(
  () => CanvasDecoder.decodeBitmap(encoded, convert, premultiplied, orient),
);

Future<Uint8List> _transformBitmap(Uint8List pixels, List<int> options) =>
    Isolate.run(() => CanvasDecoder.transformBitmap(pixels, options));

final class FlaxCanvasPlugin implements FlaxPlugin {
  const FlaxCanvasPlugin();
  @override
  String get id => 'flax.canvas';
  @override
  Set<String> get jsModules => const {'@flax/canvas'};
  @override
  Set<String> get globals => const {
    'OffscreenCanvas',
    'OffscreenCanvasRenderingContext2D',
    'Path2D',
    'ImageData',
    'ImageBitmap',
    'CanvasGradient',
    'CanvasPattern',
    'createImageBitmap',
  };
  @override
  List<FlaxBindingModule> get bindingModules => const [canvasBindings];
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    final host = _CanvasHost(context);
    try {
      host.install();
      return host;
    } catch (_) {
      host.dispose();
      rethrow;
    }
  }
}

class _HeldImage {
  _HeldImage(this.image, this.straightPixels);
  final ui.Image image;
  // Preserve unpremultiplied bitmap data; upload a separate premultiplied copy.
  final Uint8List? straightPixels;
  var refs = 1;
}

class _CanvasHost implements FlaxPluginInstance {
  _CanvasHost(this.context)
    : decoder = CanvasDecoder(fontCollection: context.fontCollection);
  final FlaxHostContext context;
  final CanvasDecoder decoder;
  final surfaces = <FlaxCanvasSurface, int>{};
  final images = <int, _HeldImage>{};
  var nextImage = 1;
  FlaxJsObject? state;
  var closed = false;

  void install() {
    context.registerFunction('__flaxCanvasCall', (_, args) {
      final operation = (args[0] as FlaxJsString).value;
      switch (operation) {
        case 'create':
          final surface = FlaxCanvasSurface(
            (args[1] as FlaxJsNumber).value.toInt(),
            (args[2] as FlaxJsNumber).value.toInt(),
          );
          surface.onError = context.report;
          surfaces[surface] = decoder.createSurface();
          return context.exposeObject(surface, flaxCanvasSurfaceType);
        case 'commit':
          final surface = _surface(args[1]);
          // Decoding finishes before JavaScript can reuse the command buffer.
          final bytes = context.runtime.readUint8Array(args[2] as FlaxJsObject);
          decoder.commit(surfaces[surface]!, surface, bytes);
        case 'resize':
          final surface = _surface(args[1]);
          surface.resize(
            (args[2] as FlaxJsNumber).value.toInt(),
            (args[3] as FlaxJsNumber).value.toInt(),
            reset: true,
          );
          decoder.reset(surfaces[surface]!);
        case 'measureText':
          return _measure(args);
        case 'fontDefaults':
          return context.runtime.evaluate(jsonEncode(decoder.fontDefaults()));
        case 'isContextLost':
          return FlaxJsBoolean(closed || _surface(args[1]).closed);
        case 'isPointInStroke':
          return FlaxJsBoolean(
            decoder.containsStroke(
              surfaces[_surface(args[1])]!,
              context.runtime.readUint8Array(args[2] as FlaxJsObject),
              (args[3] as FlaxJsNumber).value,
              (args[4] as FlaxJsNumber).value,
              (args[5] as FlaxJsBoolean).value,
            ),
          );
        case 'getImageDataSync':
          return context.runtime.createArrayBuffer(
            decoder.readPixels(
              _surface(args[1]),
              (args[2] as FlaxJsNumber).value.toInt(),
              (args[3] as FlaxJsNumber).value.toInt(),
              (args[4] as FlaxJsNumber).value.toInt(),
              (args[5] as FlaxJsNumber).value.toInt(),
            ),
          );
        case 'isPointInPath':
          return FlaxJsBoolean(
            decoder.contains(
              context.runtime.readUint8Array(args[1] as FlaxJsObject),
              (args[2] as FlaxJsNumber).value,
              (args[3] as FlaxJsNumber).value,
              (args[4] as FlaxJsString).value == 'evenodd',
            ),
          );
        case 'convertToBlob':
          return _start(args, _convertToBlob);
        case 'getImageData':
          return _start(args, _getImageData);
        case 'createImageBitmap':
          return _start(args, _createImageBitmap);
        case 'createImageBitmapPixels':
          return _start(args, _createImageBitmapPixels);
        case 'transformImageBitmap':
          return _start(args, _transformImageBitmap);
        case 'snapshotImage':
          return _start(args, _snapshotImage);
        case 'snapshotImageSync':
          return _snapshotSync(args);
        case 'cloneImage':
          return _start(args, _cloneImage);
        case 'transferToImageBitmap':
          return _transfer(args);
        case 'retainImage':
          _addRef((args[1] as FlaxJsNumber).value.toInt());
        case 'setAlpha':
          _surface(args[1]).alpha = (args[2] as FlaxJsNumber).value != 0;
        case 'closeImage':
          _release((args[1] as FlaxJsNumber).value.toInt());
        case 'disposeSurface':
          final surface = _surface(args[1]);
          decoder.disposeSurface(surfaces.remove(surface)!);
          surface.abandon();
        default:
          throw ArgumentError('Unknown canvas operation: $operation');
      }
      return const FlaxJsUndefined();
    }, allowClosing: true);
    // Global-only Canvas users can create hidden surfaces before importing CanvasView.
    context.evaluate(
      'globalThis.__flaxModules.require("@flax/canvas"); undefined;',
      sourceUrl: 'flax:canvas-bindings',
    );
    state = context.evaluate(
      flaxCanvasBootstrap,
      sourceUrl: 'flax:canvas',
    ) as FlaxJsObject;
  }

  FlaxCanvasSurface _surface(FlaxJsValue value) =>
      context.requireObject<FlaxCanvasSurface>(value, flaxCanvasSurfaceType);

  FlaxJsValue _measure(List<FlaxJsValue> args) {
    final metrics = decoder.measure(
      surfaces[_surface(args[1])]!,
      (args[2] as FlaxJsString).value,
    );
    return context.runtime.evaluate(
      '({width:${metrics[0]},'
      'actualBoundingBoxLeft:${metrics[1]},'
      'actualBoundingBoxRight:${metrics[2]},'
      'actualBoundingBoxAscent:${metrics[3]},'
      'actualBoundingBoxDescent:${metrics[4]},'
      'fontBoundingBoxAscent:${metrics[5]},'
      'fontBoundingBoxDescent:${metrics[6]},'
      'emHeightAscent:${metrics[7]},emHeightDescent:${metrics[8]},'
      'hangingBaseline:${metrics[9]},alphabeticBaseline:${metrics[10]},'
      'ideographicBaseline:${metrics[11]}})',
    );
  }

  FlaxJsValue _start(
    List<FlaxJsValue> args,
    Future<Object?> Function(List<FlaxJsValue>) work,
  ) {
    if (closed || context.isClosing) throw StateError('FlaxSessionClosed');
    final id = (args[1] as FlaxJsNumber).value.toInt();
    work(args).then(
      (value) => _settle(id, true, value),
      onError: (Object error) => _settle(id, false, error.toString()),
    );
    return const FlaxJsUndefined();
  }

  Future<Object?> _convertToBlob(List<FlaxJsValue> args) async {
    final format = (args[3] as FlaxJsString).value;
    final image = await _surface(args[2]).rasterize();
    if (image == null) return Uint8List(0);
    try {
      final bytes = await image.toByteData(
        format: format == 'image/png'
            ? ui.ImageByteFormat.png
            : ui.ImageByteFormat.rawStraightRgba,
      );
      if (bytes == null) throw StateError('Canvas serialization failed');
      final pixels = bytes.buffer.asUint8List(
        bytes.offsetInBytes,
        bytes.lengthInBytes,
      );
      if (format == 'image/png') return pixels;
      final width = image.width, height = image.height;
      final quality = ((args[4] as FlaxJsNumber).value * 100).round();
      return await _encodeBitmap(pixels, width, height, format, quality);
    } finally {
      image.dispose();
    }
  }

  Future<Object?> _getImageData(List<FlaxJsValue> args) async {
    final image = await _surface(args[2]).rasterize();
    final sx = (args[3] as FlaxJsNumber).value.toInt();
    final sy = (args[4] as FlaxJsNumber).value.toInt();
    final sw = (args[5] as FlaxJsNumber).value.toInt();
    final sh = (args[6] as FlaxJsNumber).value.toInt();
    final out = Uint8List(sw * sh * 4);
    if (image == null) return out;
    try {
      final data = await image.toByteData(
        format: ui.ImageByteFormat.rawStraightRgba,
      );
      final src = data!.buffer.asUint8List();
      for (var y = 0; y < sh; y++) {
        for (var x = 0; x < sw; x++) {
          final px = sx + x;
          final py = sy + y;
          if (px < 0 || py < 0 || px >= image.width || py >= image.height) {
            continue;
          }
          final dst = (y * sw + x) * 4;
          final srcIndex = (py * image.width + px) * 4;
          out.setRange(dst, dst + 4, src, srcIndex);
        }
      }
      return out;
    } finally {
      image.dispose();
    }
  }

  Future<Object?> _createImageBitmap(List<FlaxJsValue> args) async {
    final straight = (args[4] as FlaxJsBoolean).value;
    final result = await _decodeBitmap(
      context.runtime.readBytes(args[2] as FlaxJsObject),
      (args[3] as FlaxJsBoolean).value,
      !straight,
      (args[5] as FlaxJsBoolean).value,
    );
    if (closed) return [0, 0, 0];
    final width = result[1] as int, height = result[2] as int;
    final id = await _uploadBitmap(
      result[0] as Uint8List,
      width,
      height,
      straight,
    );
    return [id, width, height];
  }

  Future<int> _uploadBitmap(
    Uint8List pixels,
    int width,
    int height,
    bool straight,
  ) {
    final upload = straight ? Uint8List.fromList(pixels) : pixels;
    if (straight) {
      for (var i = 0; i < upload.length; i += 4) {
        for (var channel = 0; channel < 3; channel++) {
          upload[i + channel] =
              (upload[i + channel] * upload[i + 3] + 127) ~/ 255;
        }
      }
    }
    final done = Completer<int>();
    ui.decodeImageFromPixels(upload, width, height, ui.PixelFormat.rgba8888, (
      image,
    ) {
      done.complete(_retain(image, straightPixels: straight ? pixels : null));
    });
    return done.future;
  }

  Future<Object?> _createImageBitmapPixels(List<FlaxJsValue> args) {
    final width = (args[2] as FlaxJsNumber).value.toInt();
    final height = (args[3] as FlaxJsNumber).value.toInt();
    final pixels = context.runtime.readBytes(args[4] as FlaxJsObject);
    final preserve = (args[5] as FlaxJsBoolean).value;
    if (!preserve) {
      for (var i = 0; i < pixels.length; i += 4) {
        for (var c = 0; c < 3; ++c) {
          pixels[i + c] = (pixels[i + c] * pixels[i + 3] + 127) ~/ 255;
        }
      }
    }
    return _uploadBitmap(pixels, width, height, preserve);
  }

  Future<Object?> _snapshotImage(List<FlaxJsValue> args) async {
    final image = await _surface(args[2]).rasterize();
    if (image == null) return 0;
    if (closed) {
      image.dispose();
      return 0;
    }
    return _retain(image);
  }

  Future<Object?> _transformImageBitmap(List<FlaxJsValue> args) async {
    final held = images[(args[2] as FlaxJsNumber).value.toInt()];
    if (held == null) throw ArgumentError('Unknown canvas image');
    final source = held.image;
    double number(int index) => (args[index] as FlaxJsNumber).value;
    final sx = number(3), sy = number(4), sw = number(5), sh = number(6);
    final width = number(7).toInt(), height = number(8).toInt();
    final straight = (args[11] as FlaxJsBoolean).value;
    final quality = (args[10] as FlaxJsString).value;
    if (straight || held.straightPixels != null || quality == 'pixelated') {
      // Read back only when explicitly converting a GPU bitmap, never in drawImage.
      final retained = source.clone();
      try {
        final pixels =
            held.straightPixels ??
            (await retained.toByteData(format: ui.ImageByteFormat.rawRgba))!
                .buffer
                .asUint8List();
        if (closed) return 0;
        final transformed = await _transformBitmap(pixels, [
          retained.width,
          retained.height,
          sx.toInt(),
          sy.toInt(),
          sw.toInt(),
          sh.toInt(),
          width,
          height,
          (args[9] as FlaxJsBoolean).value ? 1 : 0,
          ['pixelated', 'low', 'medium', 'high'].indexOf(quality),
          held.straightPixels == null ? 1 : 0,
          straight ? 0 : 1,
        ]);
        if (closed) return 0;
        return await _uploadBitmap(transformed, width, height, straight);
      } finally {
        retained.dispose();
      }
    }
    final recorder = ui.PictureRecorder();
    final canvas = ui.Canvas(recorder);
    canvas.clipRect(
      ui.Rect.fromLTWH(0, 0, width.toDouble(), height.toDouble()),
    );
    if ((args[9] as FlaxJsBoolean).value) {
      canvas.translate(0, height.toDouble());
      canvas.scale(1, -1);
    }
    canvas.scale(width / sw, height / sh);
    canvas.translate(-sx, -sy);
    canvas.drawImage(
      source,
      ui.Offset.zero,
      ui.Paint()
        ..filterQuality = switch (quality) {
          'pixelated' => ui.FilterQuality.none,
          'medium' => ui.FilterQuality.medium,
          'high' => ui.FilterQuality.high,
          _ => ui.FilterQuality.low,
        },
    );
    final picture = recorder.endRecording();
    try {
      final image = decoder.snapshot(picture, width, height);
      return _retain(image);
    } finally {
      picture.dispose();
    }
  }

  FlaxJsValue _snapshotSync(List<FlaxJsValue> args) {
    final image = _surface(args[1]).rasterizeSync();
    if (image == null) return const FlaxJsNumber(0);
    return FlaxJsNumber(_retain(image).toDouble());
  }

  Future<Object?> _cloneImage(List<FlaxJsValue> args) async {
    final held = images[(args[2] as FlaxJsNumber).value.toInt()];
    if (held == null) throw ArgumentError('Unknown canvas image');
    return _retain(held.image.clone(), straightPixels: held.straightPixels);
  }

  int _retain(ui.Image image, {Uint8List? straightPixels}) {
    if (closed) {
      image.dispose();
      return 0;
    }
    final id = nextImage++;
    try {
      decoder.retainImage(id, image);
    } catch (_) {
      image.dispose();
      rethrow;
    }
    images[id] = _HeldImage(image, straightPixels);
    return id;
  }

  void _addRef(int id) {
    final held = images[id];
    if (held == null) throw ArgumentError('Unknown canvas image');
    held.refs++;
  }

  void _release(int id) {
    final held = images[id];
    if (held == null) return;
    held.refs--;
    if (held.refs > 0) return;
    images.remove(id);
    decoder.releaseImage(id);
    held.image.dispose();
  }

  void _dropSettled(Object? value) {
    if (value is ui.Image) {
      value.dispose();
    } else if (value is int) {
      _release(value);
    } else if (value is List && value.isNotEmpty && value[0] is int) {
      _release(value[0] as int);
    }
  }

  FlaxJsValue _transfer(List<FlaxJsValue> args) {
    final surface = _surface(args[1]);
    final image = surface.rasterizeSync();
    final id = image == null ? 0 : _retain(image);
    surface.replaceWithClear();
    return FlaxJsNumber(id.toDouble());
  }

  void _settle(int id, bool ok, Object? value) {
    if (closed || !context.isActive) {
      _dropSettled(value);
      return;
    }
    context.enqueue(() {
      if (closed) {
        _dropSettled(value);
        return;
      }
      FlaxJsValue encoded = const FlaxJsUndefined();
      if (value is Uint8List) {
        encoded = context.runtime.createArrayBuffer(value);
      } else if (value is List) {
        encoded = context.runtime.evaluate(
          '[${value[0]},${value[1]},${value[2]}]',
        );
      } else if (value is int) {
        encoded = FlaxJsNumber(value.toDouble());
      } else if (value is String) {
        encoded = FlaxJsString(value);
      }
      try {
        _call('settle', [
          FlaxJsNumber(id.toDouble()),
          FlaxJsBoolean(ok),
          encoded,
        ]);
      } finally {
        if (encoded is FlaxJsObject) encoded.release();
      }
    });
  }

  void _call(String name, List<FlaxJsValue> args) {
    final host = state;
    if (host == null) return;
    final function = host.getProperty(name) as FlaxJsFunction;
    try {
      final result = function.call(args, thisValue: host);
      if (result is FlaxJsObject) result.release();
    } finally {
      function.release();
    }
  }

  @override
  void close() {
    if (closed) return;
    closed = true;
    context.enqueue(() => _call('close', const []));
  }

  @override
  void dispose() {
    close();
    for (final surface in surfaces.keys) {
      surface.dispose();
    }
    surfaces.clear();
    for (final held in images.values) {
      held.image.dispose();
    }
    images.clear();
    decoder.dispose();
    state?.release();
    state = null;
  }
}
