import 'dart:ffi';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'native/runtime_bindings.g.dart';

/// Shared engine codecs and pixel images, independent of Canvas 2D installation.
abstract final class FlaxImageCodec {
  static final _bindings = FlaxBindings(DynamicLibrary.process());
  static Object _call(int operation, Object a, Object b) {
    try {
      if (_bindings.flax_image_version() != 1) {
        throw UnsupportedError(
          'The shared image engine extension is unavailable',
        );
      }
      final result = _bindings.flax_image_dispatch(operation, a, b, 0);
      if (result is String) throw FormatException(result);
      return result;
    } on ArgumentError {
      throw UnsupportedError(
        'Shared image operations require the Flax image engine extension',
      );
    }
  }

  static List<Object> decode(
    Uint8List bytes, {
    bool convert = true,
    bool premultiplied = false,
    bool orient = true,
  }) => (_call(1, bytes, [
    convert ? 1 : 0,
    premultiplied ? 1 : 0,
    orient ? 1 : 0,
  ]) as List).cast<Object>();
  static Uint8List transform(Uint8List pixels, List<int> options) =>
      _call(2, pixels, options) as Uint8List;
  static Uint8List encode(
    Uint8List pixels,
    int width,
    int height,
    String format,
    int quality,
  ) => _call(0, pixels, [
    width,
    height,
    format == 'image/png'
        ? 0
        : format == 'image/jpeg'
        ? 1
        : 2,
    quality,
  ]) as Uint8List;
  static ui.Image fromPixels(Uint8List pixels, int width, int height) =>
      _call(3, pixels, [width, height]) as ui.Image;
  static Uint8List read(ui.Image image) {
    final recorder = ui.PictureRecorder();
    ui.Canvas(recorder).drawImage(image, ui.Offset.zero, ui.Paint());
    final picture = recorder.endRecording();
    try {
      return _call(4, picture, [
        image.width,
        image.height,
        0,
        0,
        image.width,
        image.height,
      ]) as Uint8List;
    } finally {
      picture.dispose();
    }
  }
}
