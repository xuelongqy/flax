part of '../../bindings.dart';

/// A host-owned RepaintBoundary made available as a canvas image source.
///
/// Notify [changes] when the Widget's painted content changes without a resize.
typedef FlaxCanvasSource = ({GlobalKey key, Listenable? changes});

final class _WidgetCanvasSource {
  _WidgetCanvasSource(this.source, this.schedule, this.publish, this.report);

  final FlaxCanvasSource source;
  final VoidCallback schedule;
  final void Function(int width, int height, Uint8List? pixels) publish;
  final void Function(Object, StackTrace) report;
  bool watched = false;
  bool _capturing = false;
  int _revision = 0;
  int _generation = 0;
  int _capturedRevision = -1;
  RenderRepaintBoundary? _boundary;
  Size? _size;

  RenderRepaintBoundary? get currentBoundary {
    final element = source.key.currentContext;
    if (element is! RenderObjectElement || !element.mounted) return null;
    final boundary = element.renderObject;
    if (boundary is! RenderRepaintBoundary ||
        !boundary.attached ||
        !boundary.hasSize ||
        !boundary.size.isFinite) {
      return null;
    }
    return boundary;
  }

  void watch(bool value) {
    if (watched == value) return;
    watched = value;
    if (value) {
      source.changes?.addListener(_invalidate);
      _invalidate();
    } else {
      source.changes?.removeListener(_invalidate);
      _revision++;
      _generation++;
      _boundary = null;
      _size = null;
    }
  }

  void _invalidate() {
    _revision++;
    schedule();
  }

  void afterPaint() {
    if (!watched) return;
    final boundary = currentBoundary;
    final size = boundary?.size;
    if (!identical(boundary, _boundary) || size != _size) {
      _boundary = boundary;
      _size = size;
      _revision++;
      _generation++;
      publish(size?.width.ceil() ?? -1, size?.height.ceil() ?? -1, null);
    }
    if (boundary == null ||
        size == null ||
        size.isEmpty ||
        _capturing ||
        _capturedRevision == _revision ||
        boundary.debugNeedsPaint) {
      return;
    }

    final revision = _revision;
    late final Future<ui.Image> image;
    try {
      image = boundary.toImage();
    } on TypeError {
      // A laid-out boundary without a painted layer can be temporarily offstage.
      return;
    } catch (error, stack) {
      _capturedRevision = revision;
      report(error, stack);
      return;
    }
    _capturing = true;
    unawaited(_finish(image, revision, _generation, boundary, size));
  }

  Future<void> _finish(
    Future<ui.Image> capture,
    int revision,
    int generation,
    RenderRepaintBoundary boundary,
    Size size,
  ) async {
    bool isCurrent() =>
        watched &&
        _generation == generation &&
        identical(currentBoundary, boundary) &&
        boundary.size == size;

    ui.Image? image;
    try {
      image = await capture;
      if (!isCurrent()) return;
      final bytes = await image.toByteData(
        format: ui.ImageByteFormat.rawStraightRgba,
      );
      if (!isCurrent()) return;
      if (bytes == null) throw StateError('Widget canvas has no RGBA pixels');
      publish(
        image.width,
        image.height,
        bytes.buffer.asUint8List(bytes.offsetInBytes, bytes.lengthInBytes),
      );
    } catch (error, stack) {
      if (isCurrent()) report(error, stack);
    } finally {
      image?.dispose();
      _capturing = false;
      _capturedRevision = revision;
      if (watched && _revision != revision) schedule();
    }
  }
}
