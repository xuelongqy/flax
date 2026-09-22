import 'dart:async';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flutter/painting.dart';

import 'commands.dart';
import 'generated/canvas_bindings.g.dart';
import 'generated/host_bootstrap.g.dart';
import 'surface.dart';

const flaxCanvasSurfaceType = 'flax.canvas/canvas#type:FlaxCanvasSurface';

final class FlaxCanvasPlugin implements FlaxPlugin {
  const FlaxCanvasPlugin();
  @override
  String get id => 'flax.canvas';
  @override
  Set<String> get jsModules => const {};
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
  _HeldImage(this.image);
  final ui.Image image;
  var refs = 1;
}

class _CanvasHost implements FlaxPluginInstance {
  _CanvasHost(this.context);
  final FlaxHostContext context;
  final surfaces = <FlaxCanvasSurface, CanvasDrawState>{};
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
          surfaces[surface] = CanvasDrawState();
          return context.exposeObject(surface, flaxCanvasSurfaceType);
        case 'commit':
          final surface = _surface(args[1]);
          final bytes = context.runtime.readBytes(args[2] as FlaxJsObject);
          final previous = surfaces[surface]!.clone();
          try {
            decodeCanvasCommands(
              surface,
              bytes,
              lookupImage: (id) => images[id]?.image,
              state: surfaces[surface]!,
            );
          } catch (_) {
            surfaces[surface] = previous;
            rethrow;
          }
        case 'resize':
          final surface = _surface(args[1]);
          surface.resize(
            (args[2] as FlaxJsNumber).value.toInt(),
            (args[3] as FlaxJsNumber).value.toInt(),
            reset: true,
          );
          surfaces[surface] = CanvasDrawState();
        case 'measureText':
          return _measure(args);
        case 'isPointInPath':
          final path = decodeCanvasPath(
            context.runtime.readBytes(args[1] as FlaxJsObject),
          );
          if ((args[4] as FlaxJsString).value == 'evenodd') {
            path.fillType = ui.PathFillType.evenOdd;
          }
          return FlaxJsBoolean(
            path.contains(
              Offset(
                (args[2] as FlaxJsNumber).value,
                (args[3] as FlaxJsNumber).value,
              ),
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
          surfaces.remove(surface);
          surface.abandon();
        default:
          throw ArgumentError('Unknown canvas operation: $operation');
      }
      return const FlaxJsUndefined();
    }, allowClosing: true);
    state = context.evaluate(
      flaxCanvasBootstrap,
      sourceUrl: 'flax:canvas',
    ) as FlaxJsObject;
  }

  FlaxCanvasSurface _surface(FlaxJsValue value) =>
      context.requireObject<FlaxCanvasSurface>(value, flaxCanvasSurfaceType);

  FlaxJsValue _measure(List<FlaxJsValue> args) {
    final metrics = measureCanvasText(
      surfaces[_surface(args[1])]!,
      (args[2] as FlaxJsString).value,
    );
    return context.runtime.evaluate(
      '({width:${metrics.width},'
      'actualBoundingBoxLeft:${metrics.actualBoundingBoxLeft},'
      'actualBoundingBoxRight:${metrics.actualBoundingBoxRight},'
      'actualBoundingBoxAscent:${metrics.actualBoundingBoxAscent},'
      'actualBoundingBoxDescent:${metrics.actualBoundingBoxDescent},'
      'fontBoundingBoxAscent:${metrics.fontBoundingBoxAscent},'
      'fontBoundingBoxDescent:${metrics.fontBoundingBoxDescent}})',
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
    if ((args[3] as FlaxJsString).value != 'image/png') {
      throw ArgumentError('convertToBlob only supports image/png');
    }
    final image = await _surface(args[2]).rasterize();
    if (image == null) return Uint8List(0);
    try {
      final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
      return bytes?.buffer.asUint8List() ?? Uint8List(0);
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
      final data = await image.toByteData(format: ui.ImageByteFormat.rawRgba);
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
    final codec = await ui.instantiateImageCodec(
      context.runtime.readBytes(args[2] as FlaxJsObject),
    );
    final frame = await codec.getNextFrame();
    codec.dispose();
    final image = frame.image;
    if (closed) {
      image.dispose();
      return 0;
    }
    return [_retain(image), image.width, image.height];
  }

  Future<Object?> _createImageBitmapPixels(List<FlaxJsValue> args) {
    final width = (args[2] as FlaxJsNumber).value.toInt();
    final height = (args[3] as FlaxJsNumber).value.toInt();
    final pixels = context.runtime.readBytes(args[4] as FlaxJsObject);
    final done = Completer<int>();
    ui.decodeImageFromPixels(pixels, width, height, ui.PixelFormat.rgba8888, (
      image,
    ) {
      if (closed) {
        image.dispose();
        done.complete(0);
        return;
      }
      done.complete(_retain(image));
    });
    return done.future;
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

  FlaxJsValue _snapshotSync(List<FlaxJsValue> args) {
    final image = _surface(args[1]).rasterizeSync();
    if (image == null) return const FlaxJsNumber(0);
    return FlaxJsNumber(_retain(image).toDouble());
  }

  Future<Object?> _cloneImage(List<FlaxJsValue> args) async {
    final held = images[(args[2] as FlaxJsNumber).value.toInt()];
    if (held == null) throw ArgumentError('Unknown canvas image');
    return _retain(held.image.clone());
  }

  int _retain(ui.Image image) {
    if (closed) {
      image.dispose();
      return 0;
    }
    final id = nextImage++;
    images[id] = _HeldImage(image);
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
    surfaces[surface] = CanvasDrawState();
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
    state?.release();
    state = null;
  }
}
