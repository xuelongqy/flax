export 'package:flutter/widgets.dart' show Key, Widget;
import 'package:flutter/widgets.dart';

import 'surface.dart';

/// Displays a [FlaxCanvasSurface]. Layout size may differ from pixel size.
class FlaxCanvasView extends LeafRenderObjectWidget {
  const FlaxCanvasView(this.canvas, {super.key, this.width, this.height});

  final FlaxCanvasSurface canvas;
  final double? width;
  final double? height;

  @override
  RenderObject createRenderObject(BuildContext context) {
    return RenderFlaxCanvasView(canvas: canvas, width: width, height: height);
  }

  @override
  void updateRenderObject(
    BuildContext context,
    RenderFlaxCanvasView renderObject,
  ) {
    renderObject
      ..canvas = canvas
      ..width = width
      ..height = height;
  }
}

class RenderFlaxCanvasView extends RenderBox {
  RenderFlaxCanvasView({
    required FlaxCanvasSurface canvas,
    double? width,
    double? height,
  }) : _canvas = canvas {
    _width = width;
    _height = height;
    canvas.addListener(_onSurface);
  }

  FlaxCanvasSurface _canvas;
  int? _laidOutWidth;
  int? _laidOutHeight;

  FlaxCanvasSurface get canvas => _canvas;
  set canvas(FlaxCanvasSurface value) {
    if (identical(_canvas, value)) return;
    _canvas.removeListener(_onSurface);
    _canvas = value;
    _laidOutWidth = null;
    _laidOutHeight = null;
    _canvas.addListener(_onSurface);
    markNeedsLayout();
  }

  double? _width;
  double? get width => _width;
  set width(double? value) {
    if (_width == value) return;
    _width = value;
    markNeedsLayout();
  }

  double? _height;
  double? get height => _height;
  set height(double? value) {
    if (_height == value) return;
    _height = value;
    markNeedsLayout();
  }

  void _onSurface() {
    if (_laidOutWidth != canvas.width || _laidOutHeight != canvas.height) {
      markNeedsLayout();
    } else {
      markNeedsPaint();
    }
  }

  @override
  void dispose() {
    _canvas.removeListener(_onSurface);
    super.dispose();
  }

  Size _intrinsic() => Size(canvas.width.toDouble(), canvas.height.toDouble());

  @override
  void performLayout() {
    _laidOutWidth = canvas.width;
    _laidOutHeight = canvas.height;
    final intrinsic = _intrinsic();
    size = constraints.constrain(
      Size(_width ?? intrinsic.width, _height ?? intrinsic.height),
    );
  }

  @override
  bool hitTestSelf(Offset position) => size.contains(position);

  @override
  void paint(PaintingContext context, Offset offset) {
    if (_canvas.closed) return;
    final canvas = context.canvas;
    canvas.save();
    canvas.translate(offset.dx, offset.dy);
    _canvas.paint(canvas, size);
    canvas.restore();
  }
}
