import 'dart:async';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';

/// Canvas pixels, recorded pictures, and repaint notifications. Views borrow it.
final class FlaxCanvasSurface extends ChangeNotifier {
  FlaxCanvasSurface(int width, int height, {this.alpha = true}) {
    resize(width, height, reset: true);
  }

  static const pictureLimit = 32;
  static const commandBytesLimit = 8 << 20;

  bool alpha;
  int _width = 0;
  int _height = 0;
  int get width => _width;
  set width(int value) => resize(value, height, reset: true);
  int get height => _height;
  set height(int value) => resize(width, value, reset: true);
  int generation = 0;
  int sequence = 0;
  int decodedBytes = 0;
  ui.Image? base;
  final pictures = <ui.Picture>[];
  ui.Picture? tail;
  bool compressing = false;
  int compressGeneration = 0;
  int compressCount = 0;
  int compressBytes = 0;
  bool closed = false;
  bool transferred = false;
  void Function(Object error, StackTrace stack)? onError;

  @visibleForTesting
  Future<ui.Image?> Function(
    ui.Image? base,
    List<ui.Picture> pictures,
    int width,
    int height,
  )?
  debugRasterize;

  void resize(int nextWidth, int nextHeight, {bool reset = false}) {
    final width = nextWidth < 0 ? 0 : nextWidth;
    final height = nextHeight < 0 ? 0 : nextHeight;
    if (!reset && this.width == width && this.height == height) return;
    _width = width;
    _height = height;
    generation++;
    sequence = 0;
    decodedBytes = 0;
    clearHistory();
    transferred = false;
    notifyListeners();
  }

  void clearHistory() {
    base?.dispose();
    base = null;
    for (final picture in pictures) {
      picture.dispose();
    }
    pictures.clear();
    tail?.dispose();
    tail = null;
  }

  void addPicture(ui.Picture picture, int bytes) {
    pictures.add(picture);
    sequence++;
    decodedBytes += bytes;
    notifyListeners();
    maybeCompress();
  }

  void replaceWithClear() {
    generation++;
    sequence = 0;
    decodedBytes = 0;
    clearHistory();
    notifyListeners();
  }

  void maybeCompress() {
    if (closed ||
        compressing ||
        (pictures.length < pictureLimit && decodedBytes < commandBytesLimit)) {
      return;
    }
    compressing = true;
    compressGeneration = generation;
    compressCount = pictures.length;
    compressBytes = decodedBytes;
    final snapshot = List<ui.Picture>.from(pictures);
    final currentBase = base;
    final width = this.width;
    final height = this.height;
    final rasterize = debugRasterize;
    unawaited(
      (rasterize == null
              ? _rasterize(currentBase, snapshot, width, height, alpha: alpha)
              : rasterize(currentBase, snapshot, width, height))
          .then(
            (image) {
              if (closed || image == null) {
                image?.dispose();
                compressing = false;
                return;
              }
              if (generation != compressGeneration) {
                image.dispose();
                compressing = false;
                maybeCompress();
                return;
              }
              final merged = pictures.sublist(0, compressCount);
              pictures.removeRange(0, compressCount);
              final previous = base;
              base = image;
              decodedBytes -= compressBytes;
              if (decodedBytes < 0) decodedBytes = 0;
              compressing = false;
              previous?.dispose();
              for (final picture in merged) {
                picture.dispose();
              }
              notifyListeners();
              maybeCompress();
            },
            onError: (Object error, StackTrace stack) {
              compressing = false;
              final report = onError;
              if (report != null) {
                report(error, stack);
              } else {
                FlutterError.reportError(
                  FlutterErrorDetails(
                    exception: error,
                    stack: stack,
                    library: 'flax_canvas',
                  ),
                );
              }
            },
          ),
    );
  }

  static Future<ui.Image?> _rasterize(
    ui.Image? base,
    List<ui.Picture> pictures,
    int width,
    int height, {
    bool alpha = true,
  }) async {
    if (width <= 0 || height <= 0) return null;
    final picture = _snapshotPicture(base, pictures, width, height, alpha);
    try {
      return await picture.toImage(width, height);
    } finally {
      picture.dispose();
    }
  }

  Future<ui.Image?> rasterize() async {
    if (width <= 0 || height <= 0) return null;
    return _rasterize(base, pictures, width, height, alpha: alpha);
  }

  ui.Image? rasterizeSync() {
    if (width <= 0 || height <= 0) return null;
    return _rasterizeSync(base, pictures, width, height, alpha: alpha);
  }

  static ui.Image? _rasterizeSync(
    ui.Image? base,
    List<ui.Picture> pictures,
    int width,
    int height, {
    bool alpha = true,
  }) {
    if (width <= 0 || height <= 0) return null;
    final picture = _snapshotPicture(base, pictures, width, height, alpha);
    try {
      return picture.toImageSync(width, height);
    } finally {
      picture.dispose();
    }
  }

  static ui.Picture _snapshotPicture(
    ui.Image? base,
    List<ui.Picture> pictures,
    int width,
    int height,
    bool alpha,
  ) {
    final recorder = ui.PictureRecorder();
    final canvas = ui.Canvas(recorder);
    if (!alpha && width > 0 && height > 0) {
      canvas.drawRect(
        ui.Rect.fromLTWH(0, 0, width.toDouble(), height.toDouble()),
        ui.Paint()
          ..color = const ui.Color(0xff000000)
          ..blendMode = ui.BlendMode.src,
      );
    }
    if (base != null) {
      canvas.drawImage(base, ui.Offset.zero, ui.Paint());
    }
    for (final picture in pictures) {
      canvas.drawPicture(picture);
    }
    return recorder.endRecording();
  }

  void abandon() {
    if (closed) {
      clearHistory();
      return;
    }
    closed = true;
    clearHistory();
    notifyListeners();
  }

  void paint(ui.Canvas canvas, ui.Size size) {
    if (closed || width <= 0 || height <= 0) return;
    canvas.save();
    canvas.clipRect(ui.Offset.zero & size);
    canvas.saveLayer(ui.Offset.zero & size, ui.Paint());
    if (size.width != width || size.height != height) {
      canvas.scale(size.width / width, size.height / height);
    }
    if (!alpha) {
      canvas.drawRect(
        ui.Rect.fromLTWH(0, 0, width.toDouble(), height.toDouble()),
        ui.Paint()
          ..color = const ui.Color(0xff000000)
          ..blendMode = ui.BlendMode.src,
      );
    }
    if (base != null) {
      canvas.drawImage(base!, ui.Offset.zero, ui.Paint());
    }
    for (final picture in pictures) {
      canvas.drawPicture(picture);
    }
    canvas.restore();
    canvas.restore();
  }

  @override
  void dispose() {
    closed = true;
    clearHistory();
    super.dispose();
  }
}
