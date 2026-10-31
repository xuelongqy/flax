part of '../../bindings.dart';

/// Renderer-owned pixels placed by the common canvas view.
abstract interface class FlaxCanvasContent implements Listenable {
  int get width;
  int get height;
  bool get closed;
  void paintTo(PaintingContext context, Offset offset, Size size);
  Future<ui.Image?> rasterize();
}

const flaxCanvasTargetType = 'flax.core/flutter#type:FlaxCanvasTarget';

/// Stable placement identity, independent of the selected drawing context.
abstract class FlaxCanvasTarget extends ChangeNotifier
    implements FlaxCanvasContent {
  FlaxCanvasContent? _content;
  void attach(FlaxCanvasContent content) {
    if (closed) throw StateError('Canvas is closed');
    if (identical(_content, content)) return;
    _content?.removeListener(notifyListeners);
    _content = content;
    content.addListener(notifyListeners);
    notifyListeners();
  }

  @override
  void paintTo(PaintingContext context, Offset offset, Size size) {
    if (!closed) _content?.paintTo(context, offset, size);
  }

  @override
  Future<ui.Image?> rasterize() async => closed ? null : _content?.rasterize();

  @override
  void dispose() {
    _content?.removeListener(notifyListeners);
    _content = null;
    super.dispose();
  }
}

final class _CanvasTarget extends FlaxCanvasTarget {
  _CanvasTarget(this.width, this.height, this.send);
  final bool Function(_CanvasTarget, Map<String, Object?>) send;
  final views = <_FlaxCanvasViewState>{};
  final style = <String, String>{};
  var observed = false;
  _BitmapCanvasContent? _bitmap;
  void setBitmap(ui.Image? image) {
    final content = _bitmap ??= _BitmapCanvasContent();
    content.replace(image);
    attach(content);
  }

  var tabIndex = 0;
  void observe() {
    if (views.length > 1) {
      throw UnsupportedError(
        'DOM canvas geometry requires one CanvasView placement',
      );
    }
    observed = true;
    for (final view in views) {
      view.observe();
    }
  }

  void control(String operation, Object? value) {
    if (operation == 'tabIndex') tabIndex = (value as num).toInt();
    if (['width', 'height', 'cursor', 'touchAction'].contains(operation)) {
      style[operation] = value as String;
    }
    for (final view in views.toList()) {
      view.control(operation);
    }
  }

  @override
  int width;
  @override
  int height;
  @override
  bool closed = false;

  void resize(int nextWidth, int nextHeight) {
    width = nextWidth;
    height = nextHeight;
    notifyListeners();
  }

  @override
  void dispose() {
    if (closed) return;
    closed = true;
    super.dispose();
    _bitmap?.dispose();
  }
}

final class _BitmapCanvasContent extends ChangeNotifier
    implements FlaxCanvasContent {
  ui.Image? _image;
  void replace(ui.Image? image) {
    final next = image?.clone();
    _image?.dispose();
    _image = next;
    notifyListeners();
  }

  @override
  int get width => _image?.width ?? 0;
  @override
  int get height => _image?.height ?? 0;
  @override
  bool closed = false;
  @override
  void paintTo(PaintingContext context, Offset offset, Size size) {
    final image = _image;
    if (!closed && image != null) {
      context.canvas.drawImageRect(
        image,
        Rect.fromLTWH(0, 0, image.width.toDouble(), image.height.toDouble()),
        offset & size,
        Paint(),
      );
    }
  }

  @override
  Future<ui.Image?> rasterize() async => _image?.clone();
  @override
  void dispose() {
    if (closed) return;
    closed = true;
    _image?.dispose();
    _image = null;
    super.dispose();
  }
}

/// Places a canvas backend without rebuilding Flutter for every GPU frame.
class FlaxCanvasView extends StatefulWidget {
  const FlaxCanvasView(this.canvas, {super.key, this.width, this.height});
  final FlaxCanvasContent canvas;
  final double? width;
  final double? height;

  @override
  State<FlaxCanvasView> createState() => _FlaxCanvasViewState();
}

class _FlaxCanvasViewState extends State<FlaxCanvasView> {
  final surface = GlobalKey();
  final focus = FocusNode(debugLabel: 'Flax canvas');
  _CanvasTarget? target;
  bool observing = false;
  int geometryGeneration = 0;
  ui.FlutterView? window;
  List<double>? lastGeometry;
  int? primaryPointer;

  @override
  void initState() {
    super.initState();
    bind();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    window = View.of(context);
  }

  void bind() {
    final canvas = widget.canvas;
    target = canvas is _CanvasTarget ? canvas : null;
    if (target?.observed == true && target!.views.isNotEmpty) {
      throw UnsupportedError('A DOM canvas can have only one placement');
    }
    target?.views.add(this);
    if (target?.observed == true) observe();
  }

  @override
  void didUpdateWidget(FlaxCanvasView old) {
    super.didUpdateWidget(old);
    if (!identical(old.canvas, widget.canvas)) {
      disconnect();
      bind();
      lastGeometry = null;
    }
  }

  bool emit(String type, [Map<String, Object?> values = const {}]) {
    final owner = target;
    return owner != null &&
        owner.observed &&
        !owner.closed &&
        owner.send(owner, {
          'type': type,
          'bubbles': true,
          'cancelable': true,
          ...values,
        });
  }

  void observe() {
    if (observing) return;
    observing = true;
    final generation = ++geometryGeneration;
    void next(Duration time) {
      if (generation != geometryGeneration || !mounted || !observing) return;
      reportGeometry(time);
      WidgetsBinding.instance.addPostFrameCallback(next);
    }

    WidgetsBinding.instance.addPostFrameCallback(next);
    WidgetsBinding.instance.scheduleFrame();
  }

  void reportGeometry(Duration time) {
    if (!mounted || !observing) return;
    final box = surface.currentContext?.findRenderObject() as RenderBox?;
    if (box != null && box.attached && box.hasSize) {
      final bounds = MatrixUtils.transformRect(
            box.getTransformTo(null),
            Offset.zero & box.size,
          ),
          view = View.of(context);
      final values = [
        bounds.left,
        bounds.top,
        bounds.width,
        bounds.height,
        box.size.width,
        box.size.height,
        view.devicePixelRatio,
        view.physicalSize.width / view.devicePixelRatio,
        view.physicalSize.height / view.devicePixelRatio,
      ];
      if (listEquals(lastGeometry, values)) return;
      lastGeometry = values;
      final data = <String, Object?>{
        'left': bounds.left,
        'top': bounds.top,
        'width': bounds.width,
        'height': bounds.height,
        'clientWidth': box.size.width,
        'clientHeight': box.size.height,
        'connected': true,
        'devicePixelRatio': view.devicePixelRatio,
        'innerWidth': view.physicalSize.width / view.devicePixelRatio,
        'innerHeight': view.physicalSize.height / view.devicePixelRatio,
      };
      emit('layout', data);
    }
    // Observe committed geometry, including ancestor scrolling, without requesting frames.
  }

  Map<String, Object?> get modifiers {
    final keyboard = input.HardwareKeyboard.instance;
    return {
      'ctrlKey': keyboard.isControlPressed,
      'shiftKey': keyboard.isShiftPressed,
      'altKey': keyboard.isAltPressed,
      'metaKey': keyboard.isMetaPressed,
    };
  }

  void pointer(String type, gestures.PointerEvent event) {
    if (type == 'pointerdown') primaryPointer ??= event.pointer;
    final kind = event.kind;
    final data = <String, Object?>{
      ...modifiers,
      'pointerId': event.pointer,
      'pointerType': kind == ui.PointerDeviceKind.mouse
          ? 'mouse'
          : kind == ui.PointerDeviceKind.touch
          ? 'touch'
          : 'pen',
      'isPrimary': primaryPointer == null || primaryPointer == event.pointer,
      'clientX': event.position.dx,
      'clientY': event.position.dy,
      'offsetX': event.localPosition.dx,
      'offsetY': event.localPosition.dy,
      'movementX': event.delta.dx,
      'movementY': event.delta.dy,
      'buttons': event.buttons,
      'button':
          type == 'pointermove' ||
              type == 'pointerenter' ||
              type == 'pointerleave'
          ? -1
          : event.buttons & gestures.kSecondaryMouseButton != 0
          ? 2
          : event.buttons & gestures.kMiddleMouseButton != 0
          ? 1
          : 0,
      'pressure': event.pressure,
      'width': event.radiusMajor * 2,
      'height': event.radiusMinor * 2,
    };
    final prevented = emit(type, data);
    if (type == 'pointerdown' && !prevented) focus.requestFocus();
    if ((type == 'pointerup' || type == 'pointercancel') &&
        primaryPointer == event.pointer) {
      primaryPointer = null;
    }
  }

  KeyEventResult key(FocusNode node, input.KeyEvent event) {
    final logical = event.logicalKey;
    final label = event.character ?? logical.keyLabel;
    final modifierKey =
        logical == input.LogicalKeyboardKey.controlLeft ||
            logical == input.LogicalKeyboardKey.controlRight
        ? 'Control'
        : logical == input.LogicalKeyboardKey.shiftLeft ||
              logical == input.LogicalKeyboardKey.shiftRight
        ? 'Shift'
        : logical == input.LogicalKeyboardKey.altLeft ||
              logical == input.LogicalKeyboardKey.altRight
        ? 'Alt'
        : logical == input.LogicalKeyboardKey.metaLeft ||
              logical == input.LogicalKeyboardKey.metaRight
        ? 'Meta'
        : label;
    final usage = event.physicalKey.usbHidUsage & 0xffff;
    final code = usage >= 4 && usage <= 29
        ? 'Key${String.fromCharCode(65 + usage - 4)}'
        : usage >= 30 && usage <= 38
        ? 'Digit${usage - 29}'
        : usage == 39
        ? 'Digit0'
        : <int, String>{
                0x28: 'Enter',
                0x29: 'Escape',
                0x2a: 'Backspace',
                0x2b: 'Tab',
                0x2c: 'Space',
                0x4f: 'ArrowRight',
                0x50: 'ArrowLeft',
                0x51: 'ArrowDown',
                0x52: 'ArrowUp',
                0xe0: 'ControlLeft',
                0xe1: 'ShiftLeft',
                0xe2: 'AltLeft',
                0xe3: 'MetaLeft',
                0xe4: 'ControlRight',
                0xe5: 'ShiftRight',
                0xe6: 'AltRight',
                0xe7: 'MetaRight',
              }[usage] ??
              '';
    final key =
        code.startsWith('Arrow') ||
            ['Enter', 'Escape', 'Backspace', 'Tab'].contains(code)
        ? code
        : modifierKey;
    return emit(event is input.KeyUpEvent ? 'keyup' : 'keydown', {
          ...modifiers,
          'key': key,
          'code': code,
          'repeat': event is input.KeyRepeatEvent,
          'location': usage >= 0xe0 && usage <= 0xe3
              ? 1
              : usage >= 0xe4 && usage <= 0xe7
              ? 2
              : 0,
        })
        ? KeyEventResult.handled
        : KeyEventResult.ignored;
  }

  void control(String operation) {
    if (operation == 'focus') {
      focus.requestFocus();
    } else if (operation == 'blur') {
      focus.unfocus();
    } else if (mounted) {
      setState(() {});
    }
  }

  void disconnect() {
    final owner = target;
    if (owner != null && !owner.closed) {
      final view =
          window ?? WidgetsBinding.instance.platformDispatcher.implicitView!;
      emit('layout', {
        'left': 0,
        'top': 0,
        'width': 0,
        'height': 0,
        'connected': false,
        'devicePixelRatio': view.devicePixelRatio,
        'innerWidth': view.physicalSize.width / view.devicePixelRatio,
        'innerHeight': view.physicalSize.height / view.devicePixelRatio,
      });
    }
    owner?.views.remove(this);
    target = null;
    observing = false;
    geometryGeneration++;
  }

  @override
  void dispose() {
    observing = false;
    disconnect();
    focus.dispose();
    super.dispose();
  }

  double? length(String key) =>
      double.tryParse(target?.style[key]?.replaceFirst('px', '') ?? '');
  @override
  Widget build(BuildContext context) {
    final style = target?.style ?? const <String, String>{};
    final cursor =
        <String, input.MouseCursor>{
          'pointer': input.SystemMouseCursors.click,
          'grab': input.SystemMouseCursors.grab,
          'grabbing': input.SystemMouseCursors.grabbing,
          'crosshair': input.SystemMouseCursors.precise,
          'move': input.SystemMouseCursors.move,
          'text': input.SystemMouseCursors.text,
          'none': input.SystemMouseCursors.none,
          'wait': input.SystemMouseCursors.wait,
          'not-allowed': input.SystemMouseCursors.forbidden,
        }[style['cursor']] ??
        input.SystemMouseCursors.basic;
    Widget child = _CanvasLeaf(
      key: surface,
      canvas: widget.canvas,
      width: widget.width ?? length('width'),
      height: widget.height ?? length('height'),
    );
    if (style['touchAction'] == 'none') {
      child = RawGestureDetector(
        gestures: {
          gestures.EagerGestureRecognizer:
              GestureRecognizerFactoryWithHandlers<
                gestures.EagerGestureRecognizer
              >(
                () => gestures.EagerGestureRecognizer(
                  supportedDevices: {
                    ui.PointerDeviceKind.touch,
                    ui.PointerDeviceKind.stylus,
                    ui.PointerDeviceKind.invertedStylus,
                  },
                ),
                (_) {},
              ),
        },
        child: child,
      );
    }
    return Focus(
      focusNode: focus,
      skipTraversal: (target?.tabIndex ?? 0) < 0,
      onKeyEvent: key,
      onFocusChange: (focused) {
        emit(focused ? 'focus' : 'blur', {'bubbles': false});
        emit(focused ? 'focusin' : 'focusout');
      },
      child: MouseRegion(
        cursor: cursor,
        onEnter: (event) => pointer('pointerenter', event),
        onExit: (event) => pointer('pointerleave', event),
        child: Listener(
          behavior: HitTestBehavior.opaque,
          onPointerDown: (event) => pointer('pointerdown', event),
          onPointerMove: (event) => pointer('pointermove', event),
          onPointerHover: (event) => pointer('pointermove', event),
          onPointerUp: (event) => pointer('pointerup', event),
          onPointerCancel: (event) => pointer('pointercancel', event),
          onPointerSignal: (event) {
            if (event is gestures.PointerScrollEvent &&
                emit('wheel', {
                  ...modifiers,
                  'clientX': event.position.dx,
                  'clientY': event.position.dy,
                  'offsetX': event.localPosition.dx,
                  'offsetY': event.localPosition.dy,
                  'deltaX': event.scrollDelta.dx,
                  'deltaY': event.scrollDelta.dy,
                  'deltaMode': 0,
                })) {
              gestures.GestureBinding.instance.pointerSignalResolver.register(
                event,
                (_) {},
              );
            }
          },
          child: child,
        ),
      ),
    );
  }
}

class _CanvasLeaf extends LeafRenderObjectWidget {
  const _CanvasLeaf({super.key, required this.canvas, this.width, this.height});
  final FlaxCanvasContent canvas;
  final double? width, height;

  @override
  RenderObject createRenderObject(BuildContext context) =>
      FlaxCanvasRenderBox(canvas: canvas, width: width, height: height);

  @override
  void updateRenderObject(
    BuildContext context,
    FlaxCanvasRenderBox renderObject,
  ) {
    renderObject
      ..canvas = canvas
      ..width = width
      ..height = height;
  }
}

class FlaxCanvasRenderBox extends RenderBox {
  FlaxCanvasRenderBox({
    required FlaxCanvasContent canvas,
    double? width,
    double? height,
  }) : _canvas = canvas {
    _width = width;
    _height = height;
    canvas.addListener(_onSurface);
  }
  FlaxCanvasContent _canvas;
  int? _laidOutWidth, _laidOutHeight;
  FlaxCanvasContent get canvas => _canvas;
  set canvas(FlaxCanvasContent value) {
    if (identical(_canvas, value)) return;
    _canvas.removeListener(_onSurface);
    _canvas = value;
    _laidOutWidth = _laidOutHeight = null;
    _canvas.addListener(_onSurface);
    markNeedsLayout();
  }

  double? _width, _height;
  double? get width => _width;
  set width(double? value) {
    if (_width != value) {
      _width = value;
      markNeedsLayout();
    }
  }

  double? get height => _height;
  set height(double? value) {
    if (_height != value) {
      _height = value;
      markNeedsLayout();
    }
  }

  void _onSurface() {
    if (_laidOutWidth != canvas.width || _laidOutHeight != canvas.height) {
      markNeedsLayout();
    } else {
      markNeedsPaint();
    }
  }

  @override
  void performLayout() {
    _laidOutWidth = canvas.width;
    _laidOutHeight = canvas.height;
    size = constraints.constrain(
      Size(
        _width ?? canvas.width.toDouble(),
        _height ?? canvas.height.toDouble(),
      ),
    );
  }

  @override
  bool hitTestSelf(Offset position) => size.contains(position);
  @override
  void paint(PaintingContext context, Offset offset) {
    if (!canvas.closed) canvas.paintTo(context, offset, size);
  }

  @override
  void dispose() {
    _canvas.removeListener(_onSurface);
    super.dispose();
  }
}
