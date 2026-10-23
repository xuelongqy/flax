import 'dart:ffi';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'canvas_bindings.g.dart';
import 'surface.dart';

/// Owns native drawing states and image references for one plugin installation.
class CanvasDecoder {
  CanvasDecoder({this.fontCollection}) {
    try {
      _host = _call(0) as int;
    } on ArgumentError {
      throw UnsupportedError(
        'Flax Canvas requires a Flutter engine built with the Canvas extension.',
      );
    }
  }

  static final _bindings = FlaxCanvasBindings(DynamicLibrary.process());
  final ui.FlaxFontCollection? fontCollection;
  int _host = 0;

  Object? _call(int operation, [Object a = 0, Object b = 0, Object c = 0]) {
    final result = _bindings.flax_canvas_dispatch(_host, operation, a, b, c);
    if (result is String) throw FormatException(result);
    return result;
  }

  int createSurface() => _call(1) as int;

  List<Object> fontDefaults() =>
      (_call(15, fontCollection ?? 0) as List).cast<Object>();

  ui.Image snapshot(ui.Picture picture, int width, int height) =>
      _call(13, picture, [width, height]) as ui.Image;

  static Uint8List encode(
    Uint8List pixels,
    int width,
    int height,
    String format,
    int quality,
  ) {
    final result = _bindings.flax_canvas_dispatch(0, 14, pixels, [
      width,
      height,
      format == 'image/jpeg' ? 1 : 2,
      quality,
    ], 0);
    if (result is String) throw FormatException(result);
    return result as Uint8List;
  }

  static List<Object> decodeBitmap(
    Uint8List encoded,
    bool convert,
    bool premultiplied,
    bool orient,
  ) {
    final result = _bindings.flax_canvas_dispatch(0, 16, encoded, [
      convert ? 1 : 0,
      premultiplied ? 1 : 0,
      orient ? 1 : 0,
    ], 0);
    if (result is String) throw FormatException(result);
    return (result as List).cast<Object>();
  }

  static Uint8List transformBitmap(Uint8List pixels, List<int> options) {
    final result = _bindings.flax_canvas_dispatch(0, 17, pixels, options, 0);
    if (result is String) throw FormatException(result);
    return result as Uint8List;
  }

  void commit(int id, FlaxCanvasSurface surface, Uint8List bytes) {
    final recorder = ui.PictureRecorder();
    final canvas = ui.Canvas(recorder);
    bool cleared;
    try {
      // Decoding owns its output before the shared JS bytes are reused.
      cleared = _call(
        2,
        [
          id,
          surface.width,
          surface.height,
          surface.alpha ? 1 : 0,
          fontCollection,
        ],
        bytes,
        canvas,
      ) as bool;
    } catch (_) {
      recorder.endRecording().dispose();
      rethrow;
    }
    final picture = recorder.endRecording();
    if (cleared) surface.replaceWithClear();
    surface.addPicture(picture, bytes.length);
  }

  void reset(int id) => _call(3, id);

  void retainImage(int id, ui.Image image) {
    // ui.Image owns a private wrapper; its public shader exposes the same engine
    // image once at registration, without copying pixels or command data.
    final shader = ui.ImageShader(
      image,
      ui.TileMode.clamp,
      ui.TileMode.clamp,
      Float64List.fromList([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
    );
    try {
      _call(4, id, shader);
    } finally {
      shader.dispose();
    }
  }

  void releaseImage(int id) => _call(5, id);

  List<double> measure(int id, String text) =>
      (_call(6, id, text, fontCollection ?? 0) as List).cast<double>();

  bool contains(Uint8List path, double x, double y, bool evenOdd) =>
      _call(7, path, [x, y, evenOdd ? 1 : 0]) as bool;

  bool containsStroke(
    int id,
    Uint8List path,
    double x,
    double y,
    bool explicit,
  ) => _call(11, id, path, [x, y, explicit ? 1 : 0]) as bool;

  Uint8List readPixels(
    FlaxCanvasSurface surface,
    int sx,
    int sy,
    int sw,
    int sh,
  ) {
    if (surface.width == 0 || surface.height == 0) {
      return Uint8List(sw * sh * 4);
    }
    final recorder = ui.PictureRecorder();
    surface.paint(
      ui.Canvas(recorder),
      ui.Size(surface.width.toDouble(), surface.height.toDouble()),
    );
    final picture = recorder.endRecording();
    try {
      return _call(12, picture, [surface.width, surface.height, sx, sy, sw, sh])
          as Uint8List;
    } finally {
      picture.dispose();
    }
  }

  void disposeSurface(int id) => _call(8, id);

  void dispose() {
    if (_host == 0) return;
    _call(9);
    _host = 0;
  }
}
